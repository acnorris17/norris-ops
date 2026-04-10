#!/usr/bin/env python3
"""
Norris Utilities(R) -- Order Monitor
Scans Gmail for incoming orders, POs, and ship requests.
Checks against existing SDs to avoid duplicates.
Stores pending orders and sends Telegram alerts for new ones.

Runs every 30 minutes via launchd.
  --quiet   Only alert for orders waiting 3+ days with no SD.
"""


# QUIET HOURS: No alerts 9PM-4AM
import datetime as _dt
if _dt.datetime.now().hour >= 21 or _dt.datetime.now().hour < 4:
    exit(0)
import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone, timedelta
from pathlib import Path

# ── Paths ─────────────────────────────────────────────────────────────────────

AGENT_DIR = Path(__file__).resolve().parent.parent
SCRIPTS_DIR = AGENT_DIR / "scripts"
DATA_DIR = AGENT_DIR / "data"
DATA_DIR.mkdir(parents=True, exist_ok=True)

PENDING_FILE = DATA_DIR / "pending_orders.json"
STATE_FILE = DATA_DIR / "order_monitor_state.json"
EMAIL_SCAN_FILE = DATA_DIR / "email_scan_results.json"

PORTAL_DIR = Path.home() / "norris-ops"
SHIPPING_DOCS_DIR = PORTAL_DIR / "shipping-docs"
PORTAL_DATA_DIR = PORTAL_DIR / "data"

GOG = "/opt/homebrew/bin/gog"
ACCOUNT = "acnorris@norrisutilities.com"

# ── Order search patterns ─────────────────────────────────────────────────────

ORDER_KEYWORDS = [
    "order", "purchase order", "PO", "PO#",
    "please ship", "go ahead",
    "bucket cover", "FlexPro", "rope", "Samson",
]

GOG_SEARCH_QUERIES = [
    'is:unread newer_than:3d ("purchase order" OR "PO#" OR "please ship" OR "go ahead" OR "bucket cover" OR "FlexPro" OR "Samson" OR "rope order")',
    'is:unread newer_than:3d subject:(order OR PO) NOT from:quickbooks@notification.intuit.com NOT from:no-reply',
]

# ── Telegram ──────────────────────────────────────────────────────────────────

def load_env():
    """Load env vars from .env files (agent dir, then ~/.openclaw)."""
    env = {}
    for env_path in [
        AGENT_DIR / ".env",
        Path.home() / ".openclaw" / ".env",
    ]:
        if env_path.exists():
            for line in env_path.read_text().splitlines():
                if "=" in line and not line.startswith("#"):
                    k, v = line.split("=", 1)
                    key = k.strip()
                    if key not in env:
                        env[key] = v.strip()
    return env


def send_telegram(message):
    """Send a Telegram message. Returns True on success."""
    env = load_env()
    token = env.get("TELEGRAM_BOT_TOKEN", "")
    chat_id = env.get("TELEGRAM_CHAT_ID", "")
    if not token or not chat_id:
        print("ERROR: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not found in .env")
        return False
    try:
        import urllib.request
        payload = json.dumps({
            "chat_id": chat_id,
            "text": message[:4096],
            "parse_mode": "HTML",
        }).encode("utf-8")
        req = urllib.request.Request(
            f"https://api.telegram.org/bot{token}/sendMessage",
            data=payload,
            headers={"Content-Type": "application/json"},
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            return resp.status == 200
    except Exception as e:
        print(f"Telegram error: {e}")
        return False


def log_telegram(category, source, message, sent=True):
    """Log telegram message via telegram_logger if available."""
    try:
        sys.path.insert(0, str(AGENT_DIR))
        from telegram_logger import log_message
        log_message(category, source, message, sent=sent)
    except Exception:
        pass


# ── Gmail via gog CLI ─────────────────────────────────────────────────────────

def gog_available():
    """Check if gog CLI is installed and accessible."""
    return os.path.isfile(GOG) and os.access(GOG, os.X_OK)


def gog_search(query):
    """Run gog gmail search and return list of thread dicts."""
    try:
        result = subprocess.run(
            [GOG, "gmail", "search", query, "-j", "-a", ACCOUNT],
            capture_output=True, text=True, timeout=30,
        )
        if result.returncode != 0:
            print(f"gog search error: {result.stderr[:200]}")
            return []
        data = json.loads(result.stdout)
        return data.get("threads", [])
    except Exception as e:
        print(f"gog search exception: {e}")
        return []


def gog_read(thread_id):
    """Read a specific thread and return parsed message data."""
    try:
        result = subprocess.run(
            [GOG, "gmail", "read", thread_id, "-j", "-a", ACCOUNT],
            capture_output=True, text=True, timeout=30,
        )
        if result.returncode != 0:
            return None
        data = json.loads(result.stdout)
        return data.get("thread", {})
    except Exception:
        return None


# ── Extraction helpers ────────────────────────────────────────────────────────

def extract_sender_name(from_field):
    """Extract clean name from 'Name <email>' format."""
    if "<" in from_field:
        return from_field.split("<")[0].strip().strip('"')
    return from_field.strip()


def extract_email_addr(from_field):
    """Extract email address from 'Name <email>' format."""
    if "<" in from_field:
        return from_field.split("<")[1].rstrip(">").strip()
    return from_field.strip()


def extract_po_number(text):
    """Try to extract a PO number from text."""
    patterns = [
        r'PO\s*#?\s*([A-Z0-9][\w-]{2,20})',
        r'P\.?O\.?\s*#?\s*([A-Z0-9][\w-]{2,20})',
        r'Purchase\s+Order\s*#?\s*([A-Z0-9][\w-]{2,20})',
        r'Material\s*#?\s*([0-9]{5,})',
    ]
    for pat in patterns:
        m = re.search(pat, text, re.IGNORECASE)
        if m:
            return m.group(1).strip()
    return ""


def extract_products(text):
    """Try to extract product references from text."""
    products = []
    product_patterns = [
        r'(\d+)\s*x?\s*(2-[Mm]an|1\.5-[Mm]an|1-[Mm]an)\s*(BC|bucket cover)',
        r'(bucket\s*cover[s]?)',
        r'(FlexPro\s*Armor[^,.\n]*)',
        r'(Samson\s+[A-Za-z]+[^,.\n]*)',
        r'(NU-BC[^,.\n]*)',
        r'(\d+)\s*x\s+([A-Za-z][\w\s-]{3,30})',
    ]
    for pat in product_patterns:
        matches = re.findall(pat, text, re.IGNORECASE)
        for m in matches:
            if isinstance(m, tuple):
                products.append(" ".join(m).strip())
            else:
                products.append(m.strip())
    return products[:5] if products else ["(see email)"]


def extract_ship_to(text):
    """Try to extract shipping address or destination from text."""
    patterns = [
        r'[Ss]hip\s*to[:\s]+([^\n]{10,80})',
        r'[Dd]eliver\s*to[:\s]+([^\n]{10,80})',
        r'[Ss]hipping\s*[Aa]ddress[:\s]+([^\n]{10,80})',
    ]
    for pat in patterns:
        m = re.search(pat, text)
        if m:
            return m.group(1).strip()
    return ""


# ── Duplicate check against shipping docs ─────────────────────────────────────

def get_existing_sd_names():
    """Get list of existing SD filenames for duplicate checking."""
    if not SHIPPING_DOCS_DIR.exists():
        return []
    return [f.stem.upper() for f in SHIPPING_DOCS_DIR.glob("SD-*.html")]


def is_likely_duplicate(customer_name, po_number, existing_sds):
    """Check if an order likely already has an SD created."""
    # Normalize customer name for matching
    name_upper = customer_name.upper().split()[0] if customer_name else ""

    for sd in existing_sds:
        # Check if customer last name appears in SD filename
        if name_upper and len(name_upper) > 2 and name_upper in sd:
            # If there's a PO, check if it also appears
            if po_number:
                # SD exists for this customer -- might be same order
                return True
            # Customer match without PO -- flag as possible dup
            return True

    # Also check PO in pending_orders to avoid re-alerting
    return False


# ── State management ──────────────────────────────────────────────────────────

def load_state():
    """Load monitor state (last check time, seen thread IDs)."""
    if STATE_FILE.exists():
        try:
            return json.loads(STATE_FILE.read_text())
        except (json.JSONDecodeError, ValueError):
            pass
    return {"last_check": None, "seen_thread_ids": []}


def save_state(state):
    """Save monitor state."""
    state["last_check"] = datetime.now(timezone.utc).isoformat()
    # Keep only last 500 thread IDs
    if len(state.get("seen_thread_ids", [])) > 500:
        state["seen_thread_ids"] = state["seen_thread_ids"][-500:]
    STATE_FILE.write_text(json.dumps(state, indent=2))


def load_pending():
    """Load pending orders."""
    if PENDING_FILE.exists():
        try:
            return json.loads(PENDING_FILE.read_text())
        except (json.JSONDecodeError, ValueError):
            pass
    return {"orders": [], "last_updated": None}


def save_pending(data):
    """Save pending orders to both agent and portal data dirs."""
    data["last_updated"] = datetime.now(timezone.utc).isoformat()
    PENDING_FILE.write_text(json.dumps(data, indent=2))

    # Sync to portal data dir
    portal_file = PORTAL_DATA_DIR / "pending_orders.json"
    if PORTAL_DATA_DIR.exists():
        portal_file.write_text(json.dumps(data, indent=2))
        print(f"Synced pending_orders.json to {portal_file}")


# ── Scan via gog ──────────────────────────────────────────────────────────────

def scan_gmail_for_orders(state):
    """Scan Gmail for order-related emails using gog CLI."""
    seen_ids = set(state.get("seen_thread_ids", []))
    new_orders = []

    for query in GOG_SEARCH_QUERIES:
        threads = gog_search(query)
        for t in threads:
            tid = t.get("id", "")
            if tid in seen_ids:
                continue

            from_field = t.get("from", "")
            sender_email = extract_email_addr(from_field)

            # Skip automated senders
            skip_senders = [
                "noreply", "no-reply", "notifications", "mailer-daemon",
                "quickbooks", "intuit.com", "google.com", "squarespace",
                "gusto.com", "factsmgt.com",
            ]
            if any(skip in sender_email.lower() for skip in skip_senders):
                seen_ids.add(tid)
                continue

            subject = t.get("subject", "")
            snippet = t.get("snippet", "")
            date_str = t.get("date", "")
            combined_text = f"{subject} {snippet}"

            # Check if this looks like an actual order
            order_signals = [
                "order", "purchase order", "PO#", "PO ",
                "please ship", "go ahead", "bucket cover",
                "FlexPro", "Samson", "rope",
                "NU-BC", "2-man", "1.5-man", "1-man",
            ]
            if not any(sig.lower() in combined_text.lower() for sig in order_signals):
                seen_ids.add(tid)
                continue

            customer_name = extract_sender_name(from_field)
            po_number = extract_po_number(combined_text)
            products = extract_products(combined_text)
            ship_to = extract_ship_to(combined_text)

            new_orders.append({
                "id": tid,
                "customer": customer_name,
                "company": "",  # Will be enriched if thread is read
                "email": sender_email,
                "po_number": po_number,
                "products": products,
                "ship_to": ship_to,
                "subject": subject,
                "date_received": date_str,
                "date_detected": datetime.now(timezone.utc).isoformat(),
                "status": "PENDING REVIEW",
                "source": "gmail_scan",
            })
            seen_ids.add(tid)

    state["seen_thread_ids"] = list(seen_ids)
    return new_orders


# ── Fallback: scan from email_scan_results.json ──────────────────────────────

def scan_email_json_fallback(state):
    """Fallback: scan email_scan_results.json for order signals."""
    if not EMAIL_SCAN_FILE.exists():
        print("No email_scan_results.json found for fallback scan.")
        return []

    try:
        data = json.loads(EMAIL_SCAN_FILE.read_text())
    except (json.JSONDecodeError, ValueError):
        print("Could not parse email_scan_results.json")
        return []

    seen_ids = set(state.get("seen_thread_ids", []))
    new_orders = []
    order_signals = [
        "order", "purchase order", "PO#", "PO ",
        "please ship", "go ahead", "bucket cover",
        "FlexPro", "Samson", "rope",
    ]

    # Scan all categories in the email results
    for category in ["needs_response", "vendor_emails", "invoices_statements"]:
        items = data.get(category, [])
        for item in items:
            subject = item.get("subject", "")
            from_name = item.get("from", "")
            combined = f"{subject} {from_name}"

            # Generate a pseudo-ID from subject+date to track duplicates
            pseudo_id = f"json_{from_name}_{subject}_{item.get('date', '')}"
            if pseudo_id in seen_ids:
                continue

            if not any(sig.lower() in combined.lower() for sig in order_signals):
                seen_ids.add(pseudo_id)
                continue

            po_number = extract_po_number(combined)
            products = extract_products(combined)

            new_orders.append({
                "id": pseudo_id,
                "customer": from_name,
                "company": "",
                "email": "",
                "po_number": po_number,
                "products": products,
                "ship_to": "",
                "subject": subject,
                "date_received": item.get("date", ""),
                "date_detected": datetime.now(timezone.utc).isoformat(),
                "status": "PENDING REVIEW",
                "source": "email_json_fallback",
            })
            seen_ids.add(pseudo_id)

    state["seen_thread_ids"] = list(seen_ids)
    return new_orders


# ── Main ──────────────────────────────────────────────────────────────────────

def run_monitor(quiet=False):
    now = datetime.now(timezone.utc)
    now_str = now.strftime("%Y-%m-%d %H:%M UTC")
    print(f"[{now_str}] Order monitor starting...{' (quiet)' if quiet else ''}")

    state = load_state()
    pending = load_pending()
    existing_sds = get_existing_sd_names()

    # Try gog first, fall back to JSON scan
    if gog_available():
        print("Using gog CLI for Gmail scan...")
        new_orders = scan_gmail_for_orders(state)
    else:
        print("gog CLI not available -- falling back to email_scan_results.json")
        new_orders = scan_email_json_fallback(state)

    # Filter out likely duplicates (already have SD)
    truly_new = []
    for order in new_orders:
        customer = order.get("customer", "")
        po = order.get("po_number", "")

        # Check against existing SDs
        if is_likely_duplicate(customer, po, existing_sds):
            print(f"  Skipping (SD exists): {customer} / {po}")
            order["status"] = "SD CREATED"
            # Still add to pending so we track it
            truly_new.append(order)
            continue

        # Check against already-pending orders
        existing_ids = {o.get("id", "") for o in pending.get("orders", [])}
        if order["id"] in existing_ids:
            print(f"  Skipping (already pending): {customer} / {po}")
            continue

        truly_new.append(order)

    # Merge new orders into pending
    alert_orders = []
    for order in truly_new:
        # Don't add if ID already exists
        existing_ids = {o.get("id", "") for o in pending.get("orders", [])}
        if order["id"] not in existing_ids:
            pending["orders"].append(order)
            if order["status"] == "PENDING REVIEW":
                alert_orders.append(order)

    save_pending(pending)
    save_state(state)

    print(f"Scan complete: {len(new_orders)} candidates, {len(truly_new)} new, {len(alert_orders)} alerts")

    # Build SDs and send Telegram approval alerts for new orders
    if alert_orders:
        try:
            from sd_builder import build_sd
            sd_available = True
        except ImportError:
            sd_available = False
            print("WARNING: sd_builder not available -- falling back to basic alert")

        for order in alert_orders:
            customer = order.get("customer", "Unknown")
            company = order.get("company", "")
            po = order.get("po_number", "")
            products = order.get("products", ["(see email)"])
            ship_to = order.get("ship_to", "")
            email_addr = order.get("email", "")
            product_str = ", ".join(products)

            if sd_available:
                # Build SD with extracted info -- sd_builder handles Telegram
                print(f"  Building SD for: {customer} / {po or 'no PO'}")
                try:
                    sd_result = build_sd(
                        customer=customer,
                        company=company,
                        product=product_str,
                        po=po,
                        ship_to=ship_to,
                        email=email_addr,
                        note=f"Auto-detected from email: {order.get('subject', '')[:80]}",
                        push=True,
                        telegram=True,
                    )
                    order["status"] = "SD CREATED"
                    order["sd_filename"] = sd_result.get("filename", "")
                    order["sd_url"] = sd_result.get("url", "")
                    print(f"  SD built: {sd_result.get('filename')}")
                except Exception as e:
                    print(f"  SD build failed for {customer}: {e}")
                    # Fall back to basic alert
                    msg = (f"<b>NEW ORDER DETECTED</b>\n"
                           f"<b>{customer}</b>\n"
                           f"PO: {po or 'N/A'}\n"
                           f"Products: {product_str}\n"
                           f"Subject: {order.get('subject', '')[:60]}\n\n"
                           f"SD auto-build failed. Manual review needed.")
                    send_telegram(msg)
            else:
                # Basic alert without SD
                lines = [f"<b>NEW ORDER DETECTED</b>", "",
                         f"<b>{customer}</b>"]
                if company:
                    lines.append(f"  Company: {company}")
                if po:
                    lines.append(f"  PO: {po}")
                lines.append(f"  Products: {product_str}")
                lines.append(f"  Subject: {order.get('subject', '')[:60]}")
                lines.append(f"  Received: {order.get('date_received', 'unknown')}")
                lines.append("")
                lines.append("SD builder unavailable -- manual SD needed.")
                message = "\n".join(lines)
                result = send_telegram(message)
                log_telegram("ORDER", "order_monitor.py", message, sent=result)

        # Save updated statuses
        save_pending(pending)
        print(f"  {len(alert_orders)} order(s) processed.")
    else:
        print("No new orders to alert on.")

    # Check for stale pending orders (3+ days, no SD)
    stale_orders = []
    for order in pending.get("orders", []):
        if order.get("status") != "PENDING REVIEW":
            continue
        detected = order.get("date_detected") or order.get("date_received", "")
        if not detected:
            continue
        try:
            if "T" in detected:
                dt = datetime.fromisoformat(detected.replace("Z", "+00:00"))
            else:
                dt = datetime.strptime(detected[:10], "%Y-%m-%d").replace(tzinfo=timezone.utc)
            days_old = (now - dt).days
            if days_old >= 3:
                order["_days_old"] = days_old
                stale_orders.append(order)
        except (ValueError, TypeError):
            continue

    if stale_orders:
        # Only send stale order alert once per day
        stale_lock = DATA_DIR / "stale_alert_last_sent.txt"
        today_str = now.strftime("%Y-%m-%d")
        last_sent = stale_lock.read_text().strip() if stale_lock.exists() else ""
        if last_sent != today_str and not quiet:
            lines = [f"<b>STALE ORDER ALERT -- {len(stale_orders)} order(s) waiting 3+ days</b>"]
            for order in stale_orders:
                days = order.get("_days_old", "?")
                lines.append(f"  {order['customer']} -- {days}d -- PO: {order.get('po_number', 'N/A')}")
            message = "\n".join(lines)
            result = send_telegram(message)
            log_telegram("ORDER", "order_monitor.py", message, sent=result)
            stale_lock.write_text(today_str)

    print(f"[{datetime.now(timezone.utc).strftime('%H:%M UTC')}] Order monitor complete.")


if __name__ == "__main__":
    quiet = "--quiet" in sys.argv
    run_monitor(quiet=quiet)
