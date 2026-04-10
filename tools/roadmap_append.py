#!/usr/bin/env python3
"""
Norris Utilities® Ops Portal Living Roadmap — Auto-Append Script
Appends session summaries, prompt logs, rules, and portal pages to Google Sheets.

Google Sheet ID: 1Oh2L3I1TLaaV3ZxlNiE4svr6hmpfnk80

Usage:
  python3 roadmap_append.py --test       Append a test row to TIMELINE tab
  python3 roadmap_append.py --timeline   Prompt for session summary and append
  python3 roadmap_append.py --rule       Prompt for rule/feedback and append
  python3 roadmap_append.py --auth       Re-run OAuth flow (needed if scopes change)

Auto-called by agent_runner_v4.py at end of every CC session.
"""

import json
import os
import sys
import urllib.request
from datetime import datetime
from pathlib import Path

AGENT_DIR = Path(__file__).resolve().parent.parent
CREDS_FILE = AGENT_DIR / "google_credentials.json"
TOKEN_FILE = AGENT_DIR / "google_sheets_token.json"
SHEET_ID = "1dZ7YIhdjX7XgtKUkbd-4LUErI1uu0EuR3omwyp3K0Zg"

SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

# Telegram config
TELEGRAM_BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "")
TELEGRAM_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "8758078447")

# Load .env if tokens not in environment
if not TELEGRAM_BOT_TOKEN:
    env_file = AGENT_DIR / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                k, v = k.strip(), v.strip()
                if k == "TELEGRAM_BOT_TOKEN":
                    TELEGRAM_BOT_TOKEN = v
                elif k == "TELEGRAM_CHAT_ID":
                    TELEGRAM_CHAT_ID = v


def send_telegram(message):
    """Send a Telegram message. Fails silently if token missing."""
    if not TELEGRAM_BOT_TOKEN:
        print("Warning: No TELEGRAM_BOT_TOKEN — skipping Telegram notification")
        return
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    data = json.dumps({"chat_id": TELEGRAM_CHAT_ID, "text": message, "parse_mode": "HTML"}).encode()
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    try:
        urllib.request.urlopen(req, timeout=10)
    except Exception as e:
        print(f"Telegram send failed: {e}")


def get_credentials():
    """Get or refresh Google OAuth credentials for Sheets."""
    from google.oauth2.credentials import Credentials
    from google.auth.transport.requests import Request
    from google_auth_oauthlib.flow import InstalledAppFlow

    creds = None
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not CREDS_FILE.exists():
                print(f"Error: Google credentials file not found at {CREDS_FILE}")
                print("Copy your OAuth client secret JSON there first.")
                sys.exit(1)
            flow = InstalledAppFlow.from_client_secrets_file(str(CREDS_FILE), SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_FILE, "w") as f:
            f.write(creds.to_json())
    return creds


def get_sheets_service():
    """Build and return Google Sheets API service."""
    from googleapiclient.discovery import build
    creds = get_credentials()
    return build("sheets", "v4", credentials=creds)


def append_rows(tab_name, rows):
    """Append rows to a named tab in the roadmap sheet."""
    service = get_sheets_service()
    body = {"values": rows}
    result = service.spreadsheets().values().append(
        spreadsheetId=SHEET_ID,
        range=f"{tab_name}!A:Z",
        valueInputOption="USER_ENTERED",
        insertDataOption="INSERT_ROWS",
        body=body,
    ).execute()
    updated = result.get("updates", {}).get("updatedRows", 0)
    print(f"Appended {updated} row(s) to {tab_name}")
    return updated


# ── Tab-specific append functions ──


def append_to_timeline(date, session_num, type_, what_done, result, feedback, status, commit, notes=""):
    """Append a row to the TIMELINE tab."""
    row = [date, session_num, type_, what_done, result, feedback, status, commit, notes]
    return append_rows("📅 TIMELINE", [row])


def append_to_prompts_log(date, prompt_num, name, supposed_to, actually_did, result, status, commit, guardrail="", rule=""):
    """Append a row to the PROMPTS LOG tab."""
    row = [date, prompt_num, name, supposed_to, actually_did, result, status, commit, guardrail, rule]
    return append_rows("⚡ CC PROMPTS LOG", [row])


def append_to_rules(date, session, feedback, what_wrong, rule, status, applies_to):
    """Append a row to the RULES tab."""
    row = [date, session, feedback, what_wrong, rule, status, applies_to]
    return append_rows("📌 FEEDBACK & RULES", [row])


def append_to_portal_pages(page, url, purpose, auth, cb_sees, status, last_updated, notes=""):
    """Append a row to the PORTAL PAGES tab."""
    row = [page, url, purpose, auth, cb_sees, status, last_updated, notes]
    return append_rows("🖥️ PORTAL PAGES", [row])


# ── CLI modes ──


def run_test():
    """Append a test row to TIMELINE to verify everything works."""
    now = datetime.now().strftime("%Y-%m-%d %H:%M")
    row_count = append_to_timeline(
        date=now,
        session_num="TEST",
        type_="System Test",
        what_done="roadmap_append.py --test executed",
        result="Test row appended successfully",
        feedback="N/A",
        status="VERIFIED",
        commit="N/A",
        notes="Auto-test from roadmap_append.py build",
    )
    if row_count:
        msg = f"✅ Roadmap auto-append VERIFIED\n\nTest row added to TIMELINE tab at {now}\nSheet: https://docs.google.com/spreadsheets/d/{SHEET_ID}"
        print(msg)
        send_telegram(msg)
    else:
        msg = "⚠️ Roadmap append test FAILED — 0 rows written"
        print(msg)
        send_telegram(msg)


def run_timeline():
    """Interactive prompt for a session summary."""
    print("=== TIMELINE ENTRY ===")
    date = input("Date (YYYY-MM-DD) [today]: ").strip() or datetime.now().strftime("%Y-%m-%d")
    session_num = input("Session # (e.g. G2-S3): ").strip()
    type_ = input("Type (Build/Fix/Recovery/Research): ").strip()
    what_done = input("What was done: ").strip()
    result = input("Result: ").strip()
    feedback = input("Aaron's feedback: ").strip()
    status = input("Status (DONE/IN PROGRESS/BLOCKED): ").strip() or "DONE"
    commit = input("Commit hash: ").strip()
    notes = input("Notes (optional): ").strip()
    append_to_timeline(date, session_num, type_, what_done, result, feedback, status, commit, notes)
    print("Row appended to TIMELINE.")


def run_rule():
    """Interactive prompt for a rule/feedback entry."""
    print("=== RULE ENTRY ===")
    date = input("Date (YYYY-MM-DD) [today]: ").strip() or datetime.now().strftime("%Y-%m-%d")
    session = input("Session # (e.g. G2-S3): ").strip()
    feedback = input("Aaron's feedback: ").strip()
    what_wrong = input("What went wrong: ").strip()
    rule = input("Rule created: ").strip()
    status = input("Status (ACTIVE/RETIRED): ").strip() or "ACTIVE"
    applies_to = input("Applies to (All Guides / Guide X / Portal): ").strip()
    append_to_rules(date, session, feedback, what_wrong, rule, status, applies_to)
    print("Row appended to RULES.")


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    cmd = sys.argv[1]

    if cmd == "--auth":
        print("Starting OAuth flow for Google Sheets...")
        creds = get_credentials()
        print(f"Authenticated. Token saved to {TOKEN_FILE}")
        return

    if cmd == "--test":
        run_test()
    elif cmd == "--timeline":
        run_timeline()
    elif cmd == "--rule":
        run_rule()
    else:
        print(f"Unknown command: {cmd}")
        print(__doc__)
        sys.exit(1)


if __name__ == "__main__":
    main()
