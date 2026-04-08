#!/usr/bin/env python3
"""
Norris Utilities A/R Alert
Checks shipping_docs.json for uninvoiced orders 3+ days old.
Sends a single Telegram alert if any are found.

Crontab: 0 7 * * 1-5 /usr/bin/python3 ~/norris-agent/scripts/ar_alert.py
"""

import json
import logging
import urllib.request
from pathlib import Path
from datetime import datetime

# ── Paths ────────────────────────────────────────────────────────────────────
AGENT_DIR = Path(__file__).parent.parent.resolve()
OPS_DIR = Path.home() / "norris-ops"
SHIPPING_JSON = OPS_DIR / "data" / "shipping_docs.json"
LOG_DIR = AGENT_DIR / "logs"
LOG_DIR.mkdir(parents=True, exist_ok=True)
LOG_FILE = LOG_DIR / "ar_alert.log"

# ── Logging ──────────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.FileHandler(LOG_FILE)],
)
log = logging.getLogger("ar-alert")

# ── Environment ──────────────────────────────────────────────────────────────
def load_env():
    env = {}
    env_file = AGENT_DIR / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip()
    return env

ENV = load_env()
BOT_TOKEN = ENV.get("TELEGRAM_BOT_TOKEN", "")
CHAT_ID = ENV.get("TELEGRAM_CHAT_ID", "8758078447")

# ── Telegram ─────────────────────────────────────────────────────────────────
def send_telegram(message):
    if not BOT_TOKEN:
        log.error("No TELEGRAM_BOT_TOKEN in .env")
        return False
    try:
        payload = json.dumps(
            {"chat_id": CHAT_ID, "text": message[:4096], "parse_mode": "HTML"}
        ).encode("utf-8")
        req = urllib.request.Request(
            f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage",
            data=payload,
            headers={"Content-Type": "application/json"},
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            return resp.status == 200
    except Exception as e:
        log.error(f"Telegram send failed: {e}")
        return False

# ── Main Logic ───────────────────────────────────────────────────────────────
def parse_date(date_str):
    """Parse MM/DD/YYYY date string."""
    if not date_str:
        return None
    try:
        parts = date_str.strip().split("/")
        if len(parts) != 3:
            return None
        month, day, year = int(parts[0]), int(parts[1]), int(parts[2])
        if year < 100:
            year += 2000
        return datetime(year, month, day)
    except (ValueError, IndexError):
        return None

def run():
    log.info("A/R alert check starting")

    # Load JSON
    if not SHIPPING_JSON.exists():
        msg = f"ar_alert.py: Cannot find shipping_docs.json at {SHIPPING_JSON}"
        log.error(msg)
        send_telegram(f"\u26a0\ufe0f {msg}")
        return

    try:
        data = json.loads(SHIPPING_JSON.read_text())
    except json.JSONDecodeError as e:
        msg = f"ar_alert.py: Malformed JSON in shipping_docs.json — {e}"
        log.error(msg)
        send_telegram(f"\u26a0\ufe0f {msg}")
        return

    documents = data.get("documents", [])
    today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
    threshold_days = 3
    alerts = []

    for doc in documents:
        # Skip invoiced orders
        if doc.get("invoiced", False):
            continue
        status = (doc.get("status", "") or "").strip().lower()
        if status == "invoiced":
            continue

        # Check date
        ship_date = parse_date(doc.get("date"))
        if not ship_date:
            continue

        days_ago = (today - ship_date).days
        if days_ago < threshold_days:
            continue

        # Calculate amount
        pricing = doc.get("internal_pricing", {})
        subtotal = pricing.get("subtotal", 0) or 0
        shipping = pricing.get("shipping", 0) or 0
        total = pricing.get("total") or (subtotal + shipping)

        # Build SKU list
        products = doc.get("products", [])
        sku_list = ", ".join(
            f"{p.get('sku', '?')} x{p.get('qty', 0)}" for p in products
        )

        alerts.append({
            "customer": doc.get("customer", "Unknown"),
            "company": doc.get("company", ""),
            "date": doc.get("date", ""),
            "days_ago": days_ago,
            "total": total,
            "skus": sku_list,
            "id": doc.get("id", ""),
        })

    if not alerts:
        log.info("No uninvoiced orders past threshold. No alert sent.")
        return

    # Sort by days_ago descending
    alerts.sort(key=lambda a: a["days_ago"], reverse=True)
    grand_total = sum(a["total"] for a in alerts)

    # Build message
    msg = f"\U0001f4b0 <b>A/R ALERT \u2014 {len(alerts)} uninvoiced orders ({threshold_days}+ days)</b>\n"

    for a in alerts:
        company_str = f" / {a['company']}" if a["company"] else ""
        msg += f"\n\u2022 <b>{a['customer']}{company_str}</b>\n"
        msg += f"  Shipped: {a['date']} ({a['days_ago']} days ago)\n"
        msg += f"  Amount: ${a['total']:,.2f}\n"
        msg += f"  SKUs: {a['skus']}\n"

    msg += f"\n<b>Total outstanding: ${grand_total:,.2f}</b>\n"
    msg += "Create invoices: https://app.qbo.intuit.com/app/invoice"

    sent = send_telegram(msg)
    log.info(f"Alert sent: {sent} — {len(alerts)} orders, ${grand_total:,.2f} outstanding")

if __name__ == "__main__":
    run()
