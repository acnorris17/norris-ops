#!/usr/bin/env python3
"""
Norris Utilities® — Real-Time Email Monitor
Scans Gmail every 3 minutes (business hours) or 15 min (off-hours).
All alerts go to Telegram. Zero Gmail-to-Gmail alerting.
READ-ONLY — never sends emails.

Priority levels:
  CRITICAL — alert within 60 seconds (orders, fleet requests, RFQs)
  HIGH     — alert within 5 minutes (key contacts, territory BSS, invoices)
  NORMAL   — include in morning brief only, no instant alert
  IGNORE   — mark read, no alert, no brief

Usage:
  python3 email_watch.py              # Normal scan
  python3 email_watch.py --backfill   # Scan last 48 hours for missed emails
  python3 email_watch.py --test       # Single scan, verbose output
"""

import json
import os
import re
import subprocess
import sys
import urllib.request
from datetime import datetime, timezone, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

# ── Config ──────────────────────────────────────────────────────────────────

GOG = "/opt/homebrew/bin/gog"
ACCOUNT = "acnorris@norrisutilities.com"
AGENT_DIR = Path(__file__).parent
NP_SCRIPT = AGENT_DIR / "scripts" / "norris-palace.py"
PYTHON = str(AGENT_DIR / ".venv" / "bin" / "python3")
STATE_FILE = AGENT_DIR / "logs" / "email-watch-state.json"
FLAGGED_FILE = AGENT_DIR / "data" / "flagged_emails.json"
LOG_FILE = AGENT_DIR / "logs" / "email-watch.log"
DATA_DIR = AGENT_DIR / "data"
DATA_DIR.mkdir(parents=True, exist_ok=True)
(AGENT_DIR / "logs").mkdir(parents=True, exist_ok=True)

CT = ZoneInfo("America/Chicago")

# ── Telegram ────────────────────────────────────────────────────────────────

def load_telegram_creds():
    """Load bot token from .env files."""
    for env_path in [AGENT_DIR / ".env", Path.home() / ".openclaw" / ".env"]:
        if env_path.exists():
            for line in env_path.read_text().splitlines():
                if line.startswith("TELEGRAM_BOT_TOKEN="):
                    return line.split("=", 1)[1].strip()
    # Fallback to openclaw.json
    oc = Path.home() / ".openclaw" / "openclaw.json"
    if oc.exists():
        d = json.loads(oc.read_text())
        return d.get("channels", {}).get("telegram", {}).get("botToken", "")
    return ""

BOT_TOKEN = load_telegram_creds()
CHAT_ID = "8758078447"


def send_telegram(message):
    """Send a message to Aaron's Telegram."""
    if not BOT_TOKEN:
        log("ERROR: No Telegram bot token found")
        return False
    try:
        payload = json.dumps({
            "chat_id": CHAT_ID,
            "text": message[:4096],
            "parse_mode": "HTML",
        }).encode("utf-8")
        req = urllib.request.Request(
            f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage",
            data=payload,
            headers={"Content-Type": "application/json"},
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            return resp.status == 200
    except Exception as e:
        log(f"Telegram send error: {e}")
        return False


def log(msg):
    ts = datetime.now(CT).strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line)
    try:
        with open(LOG_FILE, "a") as f:
            f.write(line + "\n")
    except Exception:
        pass


# ── State management (de-duplication) ──────────────────────────────────────

def load_state():
    if STATE_FILE.exists():
        try:
            return json.loads(STATE_FILE.read_text())
        except Exception:
            pass
    return {"alerted_ids": [], "last_scan": ""}


def save_state(state):
    # Keep only last 500 IDs to prevent bloat
    state["alerted_ids"] = state["alerted_ids"][-500:]
    state["last_scan"] = datetime.now(timezone.utc).isoformat()
    STATE_FILE.write_text(json.dumps(state, indent=2))


# ── Gmail helpers ──────────────────────────────────────────────────────────

def gog_search(query, max_results=20):
    """Search Gmail via gog CLI, return list of thread dicts."""
    try:
        result = subprocess.run(
            [GOG, "gmail", "search", query, "-j", "-a", ACCOUNT, "--max", str(max_results)],
            capture_output=True, text=True, timeout=30,
        )
        if result.returncode != 0:
            return []
        data = json.loads(result.stdout)
        return data.get("threads", [])
    except Exception as e:
        log(f"gog search error: {e}")
        return []


def gog_thread(thread_id):
    """Read a thread's full content."""
    try:
        result = subprocess.run(
            [GOG, "gmail", "thread", "get", thread_id, "-j", "-a", ACCOUNT],
            capture_output=True, text=True, timeout=30,
        )
        if result.returncode != 0:
            return None
        return json.loads(result.stdout)
    except Exception:
        return None


def extract_email(from_field):
    if "<" in from_field:
        return from_field.split("<")[1].rstrip(">").strip().lower()
    return from_field.strip().lower()


def extract_name(from_field):
    if "<" in from_field:
        return from_field.split("<")[0].strip().strip('"')
    return from_field.strip()


def get_snippet(thread_data):
    """Get first 100 chars of the latest message body."""
    if not thread_data:
        return ""
    msgs = thread_data.get("thread", thread_data).get("messages", [])
    if not msgs:
        return ""
    last_msg = msgs[-1]
    snippet = last_msg.get("snippet", "")
    if snippet:
        return snippet[:100]
    # Try body
    body = last_msg.get("body", "")
    if isinstance(body, str):
        clean = re.sub(r'<[^>]+>', '', body)
        return clean[:100].strip()
    return ""


# ── Priority classification ───────────────────────────────────────────────

# CRITICAL keywords — order/sales triggers
CRITICAL_KEYWORDS = [
    "fleet request", "pricing and availability", "quote request",
    "po#", "purchase order", "please ship", "order", "rfp", "rfq",
    "bid request",
]

# HIGH contacts — always alert on these senders
HIGH_CONTACTS = {
    "herb": "Herb Minatre",
    "hminatre": "Herb Minatre",
    "tgrove": "Thayne Grove",
    "tgongwer": "Troy Gongwer",
    "dpoll": "Donna Poll",
    "sdaniels": "Sarah Daniels",
    "ngordon": "Nick Gordon",
    "ajarmoszuk": "Andrew Jarmoszuk",
    "dwilliams": "Dale Williams",
    "njarmoszuk": "Nick Jarmoszuk Jr",
}

# HIGH subject keywords
HIGH_SUBJECT_KEYWORDS = ["invoice", "payment", "overdue", "past due", "statement"]

# BSS territory states for HIGH priority
BSS_TERRITORY_STATES = [
    "alabama", " al ", "mississippi", " ms ", "louisiana", " la ",
    "tennessee", " tn ", "georgia", " ga ", "south carolina", " sc ",
    "north carolina", " nc ", "kentucky", " ky ", "florida", " fl ",
]
# Top 1/3 of Florida by ZIP
FL_TOP_ZIPS = range(32000, 34999 + 1)

# IGNORE senders
IGNORE_SENDERS = [
    "lmcwatters",        # Larch McWatters IT alerts
    "bquesnoy",          # Briana Quesnoy marketing
    "marketing@bayshoresystems.com",
    "dvance",            # David Vance
    "noreply", "no-reply", "notifications", "mailer-daemon",
    "marketing", "newsletter", "promotions", "updates@",
    "gustonoreply", "businessprofile-noreply", "mails.microsoft",
    "payments-noreply", "factsmgt.com", "briarwood", "lsadmin",
    "liveswitch", "squarespace.com",
]

# IGNORE — entire domains (nonprofits, not customers)
IGNORE_DOMAINS = [
    "avpc.org",          # Alabama nonprofit, not a customer
]

# IGNORE — subject patterns (case-insensitive match)
IGNORE_SUBJECT_PATTERNS = [
    r"support\s+.+('s)?\s*(house|church|ministry|mission|faith)",
    r"golf\s+tournament",
]

# Known vendors/conferences — downgrade from CRITICAL to HIGH
KNOWN_VENDOR_DOMAINS = {
    "eufmc.org": "EUFMC (conference/vendor)",
}

# IGNORE — Andy Barron Canyon emails unless addressed to Aaron
# (handled in classify logic)

# NORMAL senders (no instant alert, morning brief only)
NORMAL_PATTERNS = [
    "pkginfo@ups.com", "iship", "tracking@", "shipment",
    "google.com", "workspace-noreply",
]

# Internal/noise domains to skip entirely
SKIP_DOMAINS = [
    "norrisutilities.com",  # Our own emails
]


def classify_email(thread):
    """Classify an email thread into CRITICAL, HIGH, NORMAL, or IGNORE."""
    from_field = thread.get("from", "")
    email = extract_email(from_field)
    name = extract_name(from_field).lower()
    subject = thread.get("subject", "").lower()
    subject_raw = thread.get("subject", "")
    labels = thread.get("labels", [])

    # ── Rule 1: Skip our own domain entirely ────────────────────────
    # Never flag norrisutilities.com → norrisutilities.com (own invoices, sent items)
    if any(d in email for d in SKIP_DOMAINS):
        return "IGNORE", "Own domain email"

    # ── Rule 2a: IGNORE domains (nonprofits, not customers) ────────
    for domain in IGNORE_DOMAINS:
        if domain in email:
            return "IGNORE", f"Ignored domain: {domain}"

    # ── Rule 1b: Never flag "Invoice [N] from Norris Utilities" ───
    if re.search(r'invoice\s*\[\d+\]\s*from\s*norris\s*utilities', subject):
        return "IGNORE", "Own invoice — Norris Utilities outbound invoice"

    # ── Rule 2b: IGNORE subject patterns (charity, golf tournament) ─
    for pat in IGNORE_SUBJECT_PATTERNS:
        if re.search(pat, subject):
            # Golf tournament from BSS specifically
            if "golf" in subject and "bayshoresystems.com" in email:
                return "IGNORE", "BSS golf tournament"
            return "IGNORE", f"Ignored subject pattern: {pat}"

    # ── IGNORE sender list ──────────────────────────────────────────
    for ign in IGNORE_SENDERS:
        if ign in email or ign in name:
            # Special case: Andy Barron — only ignore Canyon emails
            if "abarron" in email or "andy barron" in name:
                if "canyon" in subject:
                    return "IGNORE", "Andy Barron Canyon email"
                # Otherwise falls through to HIGH contact check
                break
            return "IGNORE", f"Ignored sender: {ign}"

    # ── Google security alerts ──────────────────────────────────────
    if "google.com" in email and "security" in subject:
        if "unknown" in subject or "new device" in subject:
            return "HIGH", "Google security alert — unknown device/location"
        return "IGNORE", "Routine Google security alert"

    # ── Rule 4: Known vendors/conferences → HIGH not CRITICAL ──────
    for vendor_domain, vendor_label in KNOWN_VENDOR_DOMAINS.items():
        if vendor_domain in email:
            return "HIGH", f"Known vendor — review when available ({vendor_label})"

    # ── CRITICAL — order/sales keywords in subject ──────────────────
    for kw in CRITICAL_KEYWORDS:
        if kw in subject:
            return "CRITICAL", f"Subject contains: {kw}"

    # ── CRITICAL — $ amounts or quantities in subject ───────────────
    if re.search(r'\$\d+|\d+\s*(x|units?|pcs?|each|qty)', subject):
        return "CRITICAL", "Contains dollar amounts or quantities"

    # ── Domain classification ───────────────────────────────────────
    non_customer_domains = [
        "bayshoresystems.com", "google.com", "ups.com", "fedex.com",
        "usps.com", "intuit.com", "zapiermail.com", "microsoft.com",
        "norrisutilities.com", "gusto.com", "eufmc.org", "avpc.org",
    ]
    is_customer = not any(d in email for d in non_customer_domains)

    # ── Rule 3b: BSS deal threads from external parties ───────────
    # If it's a multi-message thread, check if it's a BSS deal that's not Aaron's
    if thread.get("messageCount", 1) > 1 and is_customer:
        thread_data = gog_thread(thread.get("id", ""))
        if thread_data:
            thread_msgs = thread_data.get("thread", thread_data).get("messages", [])
            bss_involved = False
            aaron_on_to_cc = False
            for msg in thread_msgs:
                headers = {h.get("name", "").lower(): h.get("value", "")
                           for h in msg.get("payload", {}).get("headers", [])}
                to_cc = (headers.get("to", "") + " " + headers.get("cc", "")).lower()
                from_addr = headers.get("from", "").lower()
                if "bayshoresystems.com" in to_cc or "bayshoresystems.com" in from_addr:
                    bss_involved = True
                if "acnorris@norrisutilities.com" in to_cc:
                    aaron_on_to_cc = True
            if bss_involved and not aaron_on_to_cc:
                return "IGNORE", "BSS deal thread — Aaron not on To/CC"

        return "CRITICAL", "Customer reply on existing thread"

    # ── HIGH — known contacts ───────────────────────────────────────
    email_prefix = email.split("@")[0].lower()
    for prefix, contact_name in HIGH_CONTACTS.items():
        if prefix in email_prefix or prefix in name:
            return "HIGH", f"Key contact: {contact_name}"

    # ── HIGH — BSS territory Zapier leads ───────────────────────────
    if "zapiermail.com" in email:
        return "HIGH", "BSS Zapier lead (check territory)"

    # ── HIGH — Skylift order/open order reports ─────────────────────
    if "skyliftus.com" in email and any(kw in subject for kw in ["order", "report", "open order"]):
        return "HIGH", "Skylift order report"

    # ── HIGH — invoice/payment keywords ─────────────────────────────
    for kw in HIGH_SUBJECT_KEYWORDS:
        if kw in subject:
            return "HIGH", f"Financial: {kw} in subject"

    # ── Rule 3: BSS thread rule — check To/CC before flagging ──────
    if "bayshoresystems.com" in email:
        # Check if it has a call to action or is addressed to Aaron
        if any(kw in subject for kw in ["action", "required", "feedback", "aaron", "norris"]):
            return "HIGH", "BSS email addressed to Aaron or with call to action"
        # Ready Rigs / Paint Schedule from Johnna
        if "johnna" in name and any(kw in subject for kw in ["ready rig", "paint schedule"]):
            return "HIGH", "Ready Rigs/Paint Schedule from Johnna"
        # Herb Minatre
        if "herb" in name or "hminatre" in email:
            return "HIGH", "BSS email from Herb Minatre"
        # Commission / retainer / agreement
        if any(kw in subject for kw in ["commission", "retainer", "agreement"]):
            return "HIGH", "BSS commission/retainer/agreement"
        # RCOO
        if "rcoo" in subject:
            return "HIGH", "BSS RCOO program mention"
        # Product updates / pricing changes
        if any(kw in subject for kw in ["product update", "pricing change", "price change", "new product"]):
            return "HIGH", "BSS product/pricing update"
        # BSS deal threads (TR300, Canyon, etc.) — only flag if Aaron on To/CC
        # or if subject contains territory keywords
        territory_kw = ["al ", "ms ", "la ", "tn ", "ga ", "sc ", "nc ", "ky ", "fl ",
                        "alabama", "mississippi", "louisiana", "tennessee",
                        "georgia", "south carolina", "north carolina", "kentucky", "florida"]
        has_territory = any(kw in subject for kw in territory_kw)
        if has_territory:
            return "HIGH", "BSS deal in Aaron's territory"
        # Otherwise NORMAL for BSS all-hands
        return "NORMAL", "BSS all-hands (no call to action, not Aaron's deal)"

    # ── NORMAL — shipping confirmations ─────────────────────────────
    for pat in NORMAL_PATTERNS:
        if pat in email:
            return "NORMAL", f"Shipping/notification: {pat}"

    # ── Customer email from unknown domain → CRITICAL ───────────────
    if is_customer and "UNREAD" in labels:
        return "CRITICAL", "Customer email from unknown domain"

    return "NORMAL", "Default — no priority rules matched"


# ── Alert formatting ──────────────────────────────────────────────────────

def format_alert(thread, priority, reason, snippet=""):
    """Format the Telegram alert message per spec."""
    from_field = thread.get("from", "")
    email_addr = extract_email(from_field)
    sender_name = extract_name(from_field)
    subject = thread.get("subject", "(no subject)")
    date_str = thread.get("date", "unknown")

    emoji = {"CRITICAL": "🔥", "HIGH": "⚠️", "NORMAL": "📋"}.get(priority, "📧")

    # Determine if reply needed
    reply_needed = "YES" if priority == "CRITICAL" else "REVIEW"

    # Suggest action
    if any(kw in subject.lower() for kw in ["order", "ship", "po#", "purchase"]):
        action = "Check order details, confirm, build SD"
    elif any(kw in subject.lower() for kw in ["quote", "pricing", "rfq", "rfp"]):
        action = "Prepare quote or pricing response"
    elif any(kw in subject.lower() for kw in ["invoice", "payment", "statement"]):
        action = "Review financial document"
    elif any(kw in subject.lower() for kw in ["fleet", "bid"]):
        action = "Review fleet/bid request and respond"
    else:
        action = "Review and respond as needed"

    msg = (
        f"{emoji} <b>EMAIL ALERT — {priority}</b>\n"
        f"From: {sender_name} &lt;{email_addr}&gt;\n"
        f"Subject: {subject}\n"
        f"Received: {date_str}\n"
        f"Why flagged: {reason}\n"
    )
    if snippet:
        msg += f"Preview: {snippet[:100]}\n"
    msg += (
        f"→ Reply needed: {reply_needed}\n"
        f"→ Suggested action: {action}"
    )
    return msg


# ── NorrisPalace integration ──────────────────────────────────────────────

def store_in_palace(thread, priority, reason):
    """Store flagged email in NorrisPalace conversations wing."""
    from_field = thread.get("from", "")
    subject = thread.get("subject", "")
    date_str = thread.get("date", "")
    date_tag = date_str[:10] if date_str else "unknown"

    text = f"{extract_name(from_field)}: {subject} — Flagged {priority}: {reason}"
    room = f"email_{date_tag.replace('-', '')}"
    tags = f"email,flagged,{priority.lower()},needs-review"

    try:
        subprocess.run(
            [PYTHON, str(NP_SCRIPT), "store",
             "--wing", "conversations",
             "--room", room,
             "--text", text,
             "--tags", tags],
            capture_output=True, timeout=10,
        )
    except Exception:
        pass


# ── Business hours check ─────────────────────────────────────────────────

def is_business_hours():
    """Check if current time is 4:00 AM to 9:00 PM CT."""
    now_ct = datetime.now(CT)
    return 4 <= now_ct.hour < 21


# ── Flagged emails persistent store (Rule 6: duplicate prevention) ────────

def load_flagged():
    """Load flagged email IDs from persistent file."""
    if FLAGGED_FILE.exists():
        try:
            return json.loads(FLAGGED_FILE.read_text())
        except Exception:
            pass
    return {"flagged_ids": {}, "handled_ids": []}


def save_flagged(data):
    """Save flagged email data. Keep last 1000 entries."""
    ids = data.get("flagged_ids", {})
    if len(ids) > 1000:
        sorted_ids = sorted(ids.items(), key=lambda x: x[1].get("flagged_at", ""))
        data["flagged_ids"] = dict(sorted_ids[-1000:])
    data["handled_ids"] = data.get("handled_ids", [])[-500:]
    FLAGGED_FILE.write_text(json.dumps(data, indent=2))


# ── Rule 5: Sent email tracking (mark handled threads) ───────────────────

def check_sent_replies(flagged_data):
    """Check if Aaron replied to any flagged threads. Mark as handled."""
    flagged_ids = flagged_data.get("flagged_ids", {})
    handled = flagged_data.get("handled_ids", [])
    newly_handled = 0

    # Get recent sent emails
    sent_threads = gog_search("in:sent newer_than:1h", max_results=20)
    sent_subjects = set()
    for t in sent_threads:
        # Normalize subject for matching (strip Re:/Fwd:)
        subj = re.sub(r'^(re|fwd|fw):\s*', '', t.get("subject", "").lower()).strip()
        sent_subjects.add(subj)
        sent_subjects.add(t.get("id", ""))

    for tid, info in list(flagged_ids.items()):
        if tid in handled:
            continue
        # Check if Aaron replied — match by thread ID in sent, or by subject
        subj = re.sub(r'^(re|fwd|fw):\s*', '', info.get("subject", "").lower()).strip()
        if tid in sent_subjects or subj in sent_subjects:
            handled.append(tid)
            newly_handled += 1
            log(f"HANDLED: Aaron replied to '{info.get('subject', '')[:50]}'")
            # Update NorrisPalace tag from needs-review to handled
            try:
                # Search for the palace record and update its tags
                result = subprocess.run(
                    [PYTHON, str(NP_SCRIPT), "query", info.get("subject", "")[:40], "--top", "1"],
                    capture_output=True, text=True, timeout=10,
                )
                # Extract ID from output if found
                for line in result.stdout.splitlines():
                    if "ID:" in line:
                        record_id = line.split("ID:")[1].strip().split("...")[0].strip()
                        if record_id:
                            subprocess.run(
                                [PYTHON, str(NP_SCRIPT), "tag", record_id,
                                 "--remove", "needs-review", "--add", "handled"],
                                capture_output=True, timeout=10,
                            )
                        break
            except Exception:
                pass

    flagged_data["handled_ids"] = handled
    if newly_handled:
        log(f"Marked {newly_handled} threads as HANDLED (Aaron replied)")
    return newly_handled


# ── Main scan ─────────────────────────────────────────────────────────────

def run_scan(backfill=False, test=False):
    state = load_state()
    alerted = set(state.get("alerted_ids", []))
    flagged_data = load_flagged()
    flagged_ids = flagged_data.get("flagged_ids", {})
    handled_ids = set(flagged_data.get("handled_ids", []))

    # Rule 5: Check for Aaron's replies to flagged threads
    if not backfill and not test:
        check_sent_replies(flagged_data)

    if backfill:
        log("BACKFILL MODE — scanning last 48 hours")
        query_time = "newer_than:2d"
        search_queries = [
            f"is:unread in:inbox {query_time}",
            f"in:inbox {query_time} (order OR fleet OR PO# OR quote OR pricing OR ship OR invoice OR cover OR bucket)",
        ]
    else:
        # Normal scan — check last 15 minutes of unread
        query_time = "newer_than:15m"
        search_queries = [
            f"is:unread in:inbox {query_time} category:primary",
            f"is:unread in:inbox {query_time} label:important",
        ]

    # Collect all threads
    all_threads = {}
    for q in search_queries:
        threads = gog_search(q, max_results=30)
        for t in threads:
            tid = t.get("id", "")
            if tid:
                all_threads[tid] = t

    critical_count = 0
    high_count = 0
    normal_count = 0
    ignored_count = 0
    newly_alerted = 0

    for tid, thread in all_threads.items():
        priority, reason = classify_email(thread)

        if priority == "IGNORE":
            ignored_count += 1
            if test:
                log(f"  IGNORE: {thread.get('from', '')} — {thread.get('subject', '')}: {reason}")
            continue

        if priority == "NORMAL":
            normal_count += 1
            if test:
                log(f"  NORMAL: {thread.get('from', '')} — {thread.get('subject', '')}: {reason}")
            continue

        # CRITICAL or HIGH — alert
        # Rule 6: Check both in-memory state AND persistent flagged_emails.json
        if (tid in alerted or tid in flagged_ids or tid in handled_ids) and not backfill:
            if test:
                handled_tag = " [HANDLED]" if tid in handled_ids else ""
                log(f"  SKIP (already alerted{handled_tag}): {thread.get('subject', '')}")
            continue

        # Get snippet for the alert
        snippet = ""
        if priority == "CRITICAL":
            thread_data = gog_thread(tid)
            snippet = get_snippet(thread_data)

        msg = format_alert(thread, priority, reason, snippet)

        if backfill:
            # Use retroactive format
            msg = (
                f"📬 <b>MISSED EMAIL (retroactive flag)</b>\n"
                f"From: {extract_name(thread.get('from', ''))}\n"
                f"Subject: {thread.get('subject', '')}\n"
                f"Received: {thread.get('date', '')}\n"
                f"Why: {reason}"
            )

        if test:
            log(f"  {priority}: {thread.get('subject', '')} — {reason}")
            log(f"  Would send: {msg[:120]}...")
        else:
            result = send_telegram(msg)
            if result:
                log(f"ALERTED [{priority}]: {thread.get('subject', '')[:60]}")
            else:
                log(f"FAILED to alert: {thread.get('subject', '')[:60]}")

        # Store in NorrisPalace
        if not test:
            store_in_palace(thread, priority, reason)

        alerted.add(tid)
        flagged_ids[tid] = {
            "subject": thread.get("subject", ""),
            "from": thread.get("from", ""),
            "priority": priority,
            "reason": reason,
            "flagged_at": datetime.now(timezone.utc).isoformat(),
        }
        newly_alerted += 1

        if priority == "CRITICAL":
            critical_count += 1
        else:
            high_count += 1

    # Save state + persistent flagged file
    state["alerted_ids"] = list(alerted)
    save_state(state)
    flagged_data["flagged_ids"] = flagged_ids
    save_flagged(flagged_data)

    log(f"Scan complete: {len(all_threads)} checked | "
        f"{critical_count} CRITICAL | {high_count} HIGH | "
        f"{normal_count} NORMAL | {ignored_count} IGNORE | "
        f"{newly_alerted} newly alerted")

    # Also run order_watcher.sh (preserve existing integration)
    try:
        subprocess.Popen(
            ["/bin/zsh", "-c", str(AGENT_DIR / "order_watcher.sh")],
            close_fds=True, start_new_session=True,
        )
    except Exception:
        pass

    return newly_alerted


if __name__ == "__main__":
    backfill = "--backfill" in sys.argv
    test = "--test" in sys.argv

    if backfill or test:
        run_scan(backfill=backfill, test=test)
    else:
        # Check business hours for scan frequency hint
        # (actual frequency controlled by LaunchAgent, but log it)
        bh = is_business_hours()
        log(f"Scan starting (business_hours={bh})")
        run_scan()
