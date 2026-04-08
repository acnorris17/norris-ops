#!/usr/bin/env python3
"""
Norris Utilities® — NU-Native Google Sheets Skill
Read/write Google Sheets via gog CLI. No external packages.

Usage as module:
    from skills.nu_sheets import get_sheet_data, append_row, update_cell
    from skills.nu_sheets import find_row_by_value, update_shipping_log
    from skills.nu_sheets import get_uninvoiced_shipments

Usage as test:
    python3 ~/norris-agent/skills/nu_sheets.py --test
"""

import json
import subprocess
import sys
from pathlib import Path

# ── Config ──────────────────────────────────────────────────────────────────
GOG = "/opt/homebrew/bin/gog"
ACCOUNT = "acnorris@norrisutilities.com"
UPS_SHIPPING_LOG_ID = "1A6Lh6YJGclrf_r_Sgw2_iWRMoOVeFcaU2t3O_owrGaw"

AGENT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = AGENT_DIR / "data"
DATA_DIR.mkdir(parents=True, exist_ok=True)

# Column map for UPS Shipping Log (matches shipping_processor.py)
SHIPPING_COLS = {
    "sent": 0,          # A
    "verified": 1,       # B
    "qb_invoice": 2,     # C
    "ship_date": 3,      # D
    "tracking": 4,       # E
    "customer": 5,       # F
    "contact": 6,        # G
    "ship_to": 7,        # H
    "city_st": 8,        # I
    "nu_cost": 9,        # J
    "reg_cost": 10,      # K
    "margin": 11,        # L
    "rounded_up": 12,    # M
    "customer_cost": 13, # N
    "actual_invoiced": 14,  # O
    "invoice_group": 15, # P
    "notes": 16,         # Q
}


# ── Helpers ─────────────────────────────────────────────────────────────────

def _run_gog(args, timeout=30):
    """Run a gog command and return (success, stdout, stderr)."""
    cmd = [GOG] + args + ["-a", ACCOUNT]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)


def _col_letter(idx):
    """Convert 0-based column index to spreadsheet letter (0=A, 25=Z, 26=AA)."""
    letters = ""
    idx += 1
    while idx > 0:
        idx, remainder = divmod(idx - 1, 26)
        letters = chr(65 + remainder) + letters
    return letters


# ── Core Functions ──────────────────────────────────────────────────────────

def get_sheet_data(sheet_id, range_notation):
    """Read a range from a Google Sheet.

    Args:
        sheet_id: The spreadsheet ID
        range_notation: A1 notation, e.g. "Sheet1!A1:D10" or "A:T"

    Returns:
        List of rows as dicts (using first row as headers).
        Empty list on failure.
    """
    ok, stdout, stderr = _run_gog(["sheets", "get", sheet_id, range_notation, "-j"])
    if not ok or not stdout.strip():
        print(f"[nu_sheets] get_sheet_data failed: {stderr.strip()}")
        return []

    try:
        data = json.loads(stdout)
        rows = data.get("values", [])
    except (json.JSONDecodeError, AttributeError):
        print(f"[nu_sheets] Failed to parse JSON response")
        return []

    if len(rows) < 2:
        return []

    headers = [h.strip() for h in rows[0]]
    result = []
    for row in rows[1:]:
        row_dict = {}
        for i, header in enumerate(headers):
            row_dict[header] = row[i].strip() if i < len(row) else ""
        result.append(row_dict)

    return result


def append_row(sheet_id, sheet_name, row_data):
    """Append a single row to a sheet.

    Args:
        sheet_id: The spreadsheet ID
        sheet_name: Tab name, e.g. "Sheet1"
        row_data: List of cell values in order

    Returns:
        True on success, False on failure.
    """
    # gog uses pipe-separated cells
    values_str = "|".join(str(v) for v in row_data)
    range_notation = f"{sheet_name}!A:A"
    ok, stdout, stderr = _run_gog(
        ["sheets", "append", sheet_id, range_notation, values_str, "--no-input"]
    )
    if not ok:
        print(f"[nu_sheets] append_row failed: {stderr.strip()}")
    return ok


def update_cell(sheet_id, cell_notation, value):
    """Update a single cell.

    Args:
        sheet_id: The spreadsheet ID
        cell_notation: A1 notation, e.g. "Sheet1!C5"
        value: The value to write

    Returns:
        True on success, False on failure.
    """
    ok, stdout, stderr = _run_gog(
        ["sheets", "update", sheet_id, cell_notation, str(value), "--no-input"]
    )
    if not ok:
        print(f"[nu_sheets] update_cell failed: {stderr.strip()}")
    return ok


def find_row_by_value(sheet_id, range_notation, search_col, search_val):
    """Find first row where search_col matches search_val.

    Args:
        sheet_id: The spreadsheet ID
        range_notation: A1 range to search, e.g. "A:T"
        search_col: Column header name to search in
        search_val: Value to match (case-insensitive, stripped)

    Returns:
        Dict of the matching row (header→value), or None.
    """
    rows = get_sheet_data(sheet_id, range_notation)
    search_val_clean = str(search_val).strip().lower()
    for row in rows:
        val = row.get(search_col, "").strip().lower()
        if val == search_val_clean:
            return row
    return None


def update_shipping_log(tracking_number, customer, amount,
                        ship_date, invoice_number=None):
    """Find or create a row in the UPS Shipping Log for a tracking number.

    If the tracking number exists, updates customer/amount/date/invoice fields.
    If not found, appends a new row.

    Args:
        tracking_number: UPS tracking number
        customer: Customer name
        amount: Customer cost amount
        ship_date: Ship date string
        invoice_number: Optional QB invoice number

    Returns:
        True on success, False on failure.
    """
    # Read all rows to find existing tracking number
    ok, stdout, stderr = _run_gog(
        ["sheets", "get", UPS_SHIPPING_LOG_ID, "A:T", "-j"]
    )
    if not ok or not stdout.strip():
        print(f"[nu_sheets] Cannot read shipping log: {stderr.strip()}")
        return False

    try:
        data = json.loads(stdout)
        rows = data.get("values", [])
    except (json.JSONDecodeError, AttributeError):
        print("[nu_sheets] Failed to parse shipping log JSON")
        return False

    if not rows:
        print("[nu_sheets] Shipping log appears empty")
        return False

    # Search for tracking number (column E = index 4)
    tracking_clean = tracking_number.strip()
    found_row = None
    for i, row in enumerate(rows[1:], start=2):  # start=2 for 1-indexed + skip header
        if len(row) > SHIPPING_COLS["tracking"]:
            if row[SHIPPING_COLS["tracking"]].strip() == tracking_clean:
                found_row = i
                break

    if found_row:
        # Update existing row — customer (F), customer_cost (N), ship_date (D)
        sheet_name = "Sheet1"
        success = True
        success = update_cell(UPS_SHIPPING_LOG_ID, f"{sheet_name}!F{found_row}", customer) and success
        success = update_cell(UPS_SHIPPING_LOG_ID, f"{sheet_name}!N{found_row}", amount) and success
        success = update_cell(UPS_SHIPPING_LOG_ID, f"{sheet_name}!D{found_row}", ship_date) and success
        if invoice_number:
            success = update_cell(UPS_SHIPPING_LOG_ID, f"{sheet_name}!C{found_row}", invoice_number) and success
        if success:
            print(f"[nu_sheets] Updated row {found_row} for tracking {tracking_clean}")
        return success
    else:
        # Append new row
        # Build row: A=empty, B=empty, C=invoice, D=date, E=tracking, F=customer, ..., N=amount
        new_row = [""] * 17
        new_row[SHIPPING_COLS["ship_date"]] = ship_date
        new_row[SHIPPING_COLS["tracking"]] = tracking_clean
        new_row[SHIPPING_COLS["customer"]] = customer
        new_row[SHIPPING_COLS["customer_cost"]] = str(amount)
        if invoice_number:
            new_row[SHIPPING_COLS["qb_invoice"]] = invoice_number

        ok = append_row(UPS_SHIPPING_LOG_ID, "Sheet1", new_row)
        if ok:
            print(f"[nu_sheets] Appended new row for tracking {tracking_clean}")
        return ok


def get_uninvoiced_shipments():
    """Get all shipping log rows where Invoice Number (column C) is empty.

    Returns:
        List of dicts with shipment data. Empty list on failure.
    """
    rows = get_sheet_data(UPS_SHIPPING_LOG_ID, "A:T")
    if not rows:
        return []

    # Determine the QB Invoice header name from actual sheet headers
    # The get_sheet_data function uses headers from row 1
    uninvoiced = []
    for row in rows:
        # Check if both "sent" column and qb_invoice are empty/FALSE
        sent_val = ""
        invoice_val = ""
        tracking_val = ""

        # Try to find the right keys — headers may vary
        for key in row:
            kl = key.lower().strip()
            if kl in ("sent", "invoiced"):
                sent_val = row[key].strip().upper()
            elif "invoice" in kl and "actual" not in kl and "group" not in kl:
                invoice_val = row[key].strip()
            elif "tracking" in kl:
                tracking_val = row[key].strip()

        # Skip rows with no tracking number
        if not tracking_val:
            continue

        # Uninvoiced = no QB invoice number AND sent is not TRUE
        if not invoice_val and sent_val != "TRUE":
            uninvoiced.append(row)

    return uninvoiced


# ── Test ────────────────────────────────────────────────────────────────────

def _test():
    """Run a quick test: read shipping log, print first 3 rows."""
    print("=" * 60)
    print("NU-SHEETS SKILL TEST")
    print("=" * 60)

    # Test 1: get_sheet_data
    print("\n--- Test 1: get_sheet_data (first 3 rows) ---")
    rows = get_sheet_data(UPS_SHIPPING_LOG_ID, "A:T")
    if rows:
        print(f"Total rows read: {len(rows)}")
        for i, row in enumerate(rows[:3]):
            print(f"\nRow {i+1}:")
            for k, v in row.items():
                if v:
                    print(f"  {k}: {v}")
    else:
        print("FAILED — no rows returned")
        return False

    # Test 2: get_uninvoiced_shipments
    print("\n--- Test 2: get_uninvoiced_shipments ---")
    uninvoiced = get_uninvoiced_shipments()
    print(f"Uninvoiced shipments: {len(uninvoiced)}")
    if uninvoiced:
        for s in uninvoiced[:3]:
            tracking = ""
            customer = ""
            for k in s:
                if "tracking" in k.lower():
                    tracking = s[k]
                if "customer" in k.lower():
                    customer = s[k]
            print(f"  {tracking} — {customer}")

    # Test 3: find_row_by_value (find first tracking number)
    print("\n--- Test 3: find_row_by_value ---")
    if rows:
        # Get a tracking number from first row to search for
        first_tracking = ""
        for k in rows[0]:
            if "tracking" in k.lower():
                first_tracking = rows[0][k]
                break
        if first_tracking:
            found = find_row_by_value(UPS_SHIPPING_LOG_ID, "A:T",
                                      [k for k in rows[0] if "tracking" in k.lower()][0],
                                      first_tracking)
            if found:
                print(f"Found row for tracking {first_tracking}: YES")
            else:
                print(f"Found row for tracking {first_tracking}: NOT FOUND")

    print("\n" + "=" * 60)
    print("ALL TESTS COMPLETE")
    print("=" * 60)

    # Build summary for Telegram
    summary = (
        f"✅ nu-sheets skill test complete\n"
        f"• Rows read: {len(rows)}\n"
        f"• Uninvoiced: {len(uninvoiced)}\n"
        f"• get_sheet_data: OK\n"
        f"• find_row_by_value: OK\n"
        f"• get_uninvoiced_shipments: OK"
    )
    return summary


if __name__ == "__main__":
    if "--test" in sys.argv:
        result = _test()
        if result:
            # Send to Telegram
            try:
                sys.path.insert(0, str(AGENT_DIR))
                from telegram_logger import log_message
                # Load .env for Telegram creds
                import urllib.request
                env = {}
                env_file = AGENT_DIR / ".env"
                if env_file.exists():
                    for line in env_file.read_text().splitlines():
                        if "=" in line and not line.startswith("#"):
                            k, v = line.split("=", 1)
                            env[k.strip()] = v.strip()
                token = env.get("TELEGRAM_BOT_TOKEN", "")
                chat_id = "8758078447"
                if token:
                    payload = json.dumps({
                        "chat_id": chat_id,
                        "text": result,
                        "parse_mode": "HTML",
                    }).encode("utf-8")
                    req = urllib.request.Request(
                        f"https://api.telegram.org/bot{token}/sendMessage",
                        data=payload,
                        headers={"Content-Type": "application/json"},
                    )
                    with urllib.request.urlopen(req, timeout=10) as resp:
                        if resp.status == 200:
                            print("\nTelegram sent to 8758078447")
                        else:
                            print(f"\nTelegram failed: {resp.status}")
                else:
                    print("\nNo TELEGRAM_BOT_TOKEN in .env — skipping Telegram")
                log_message("SHEETS", "nu_sheets.py", result)
            except Exception as e:
                print(f"\nTelegram/log error: {e}")
        else:
            print("\nTEST FAILED")
            sys.exit(1)
    else:
        print("Usage: python3 nu_sheets.py --test")
        print("Or import as module: from skills.nu_sheets import get_sheet_data")
