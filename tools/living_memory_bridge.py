#!/usr/bin/env python3
"""
Living Memory Bridge — Norris Utilities® / Legacy Project
==========================================================
Polls Google Drive (00_Living_Memory/ + session_summaries/) for new updates
written by Cowork on M5, parses them, merges new content into the Master
Living Memory Google Doc, and notifies Aaron via Telegram.

Designed to run every 15 minutes via cron, 4 AM to 10 PM CT.

Stdlib only. Talks to Drive/Docs through the gog CLI (already on M1).

Safety contract
---------------
* The Doc is never overwritten as a whole. We use `gog docs find-replace`
  with anchored patterns (Section headers) to insert new content in place,
  preserving everything else (and the Doc's formatting).
* Every run snapshots the current Doc text into ~/norris-agent/backups/
  before any mutation.
* If parsing finds no new content, the script does nothing — no Doc write,
  no Telegram. Idempotent.
* If a gog call fails, it is retried 3x with 30s backoff. After that, an
  error Telegram is sent.

CLI
---
  python3 living_memory_bridge.py                # normal poll
  python3 living_memory_bridge.py --dry-run      # parse + log, don't write/notify
  python3 living_memory_bridge.py --force        # ignore last_check, scan all
  python3 living_memory_bridge.py --install-confirm  # send the one-time install Telegram
"""
from __future__ import annotations

import argparse
import base64
import datetime as dt
import json
import logging
import logging.handlers
import os
import re
import shlex
import subprocess
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

# ---------------------------------------------------------------- constants

HOME = Path("/Users/acnorris1")
GOG_BIN = "/opt/homebrew/bin/gog"
OPENCLAW_CONFIG = HOME / ".openclaw" / "openclaw.json"

LOG_PATH = HOME / "norris-agent" / "logs" / "living_memory_bridge.log"
STATE_PATH = HOME / "norris-agent" / "config" / "living_memory_last_check.txt"
PROCESSED_DRAFTS_PATH = HOME / "norris-agent" / "config" / "processed_gmail_drafts.txt"
BACKUP_DIR = HOME / "norris-agent" / "backups"
GMAIL_INBOX_DIR = HOME / "norris-agent" / "backups" / "_gmail_inbox"

GMAIL_DRAFT_SUBJECT_TAG = "[LIVING_MEMORY_UPDATE]"
GMAIL_DRAFT_SEARCH_QUERY = f"subject:{GMAIL_DRAFT_SUBJECT_TAG} is:draft"

TELEGRAM_CHAT_ID = "8758078447"

# Drive resource IDs (verified via gog drive search/info)
TARGET_DOC_ID = "1QY2xTCu0E9ntSDPNXT_VeATtuDP6T3MTTXc40e6ufLI"  # Legacy Project — Master Living Memory (LIVE)
LIVING_MEMORY_FOLDER_ID = "1cMg-6jKT9zN0vFeOAwzfWOvpHW-m3dL2"   # 00_Living_Memory/
SESSION_SUMMARIES_FOLDER_ID = "1D8FjIqIX68Ty_FRSJFNcv6EPEdwlvWCt"  # session_summaries/
WATCHED_FOLDERS = [
    ("00_Living_Memory", LIVING_MEMORY_FOLDER_ID),
    ("session_summaries", SESSION_SUMMARIES_FOLDER_ID),
]
WATCHED_MIME = {"text/markdown", "text/plain"}

# Section anchors as they currently appear in the live Doc
SECTION_6_HEADER = "SECTION 6: SESSION LOG (NEWEST FIRST)"
SECTION_7_HEADER = "SECTION 7: CURRENT BLOCKERS"
SECTION_9_HEADER = "SECTION 9: NEXT ACTIONS (PRIORITIZED)"

RETRY_ATTEMPTS = 3
RETRY_BACKOFF_SECONDS = 30
LOG_ROTATE_BYTES = 5 * 1024 * 1024  # 5 MB; keep 5 backups (~30 days at 1/day)
LOG_BACKUP_COUNT = 5

# ---------------------------------------------------------------- logging

def setup_logging() -> logging.Logger:
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    logger = logging.getLogger("living_memory_bridge")
    logger.setLevel(logging.INFO)
    # avoid duplicate handlers on re-import
    if logger.handlers:
        return logger
    handler = logging.handlers.RotatingFileHandler(
        LOG_PATH, maxBytes=LOG_ROTATE_BYTES, backupCount=LOG_BACKUP_COUNT
    )
    handler.setFormatter(logging.Formatter(
        "[%(asctime)s] [%(levelname)s] %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S %Z",
    ))
    logger.addHandler(handler)
    # Only echo to stdout when interactive — cron redirects stdout to the same
    # file this handler writes to, so suppressing stdout there avoids double lines.
    if sys.stdout.isatty():
        stream = logging.StreamHandler(sys.stdout)
        stream.setFormatter(logging.Formatter("[%(asctime)s] [%(levelname)s] %(message)s"))
        logger.addHandler(stream)
    return logger


log = setup_logging()

# ---------------------------------------------------------------- helpers

def now_iso() -> str:
    return dt.datetime.now(dt.timezone.utc).isoformat()


def now_ct_str() -> str:
    """Friendly Central-Time stamp for messages."""
    cdt = dt.datetime.now(dt.timezone(dt.timedelta(hours=-5)))  # CDT in April
    return cdt.strftime("%Y-%m-%d %I:%M %p CT")


def read_last_check() -> dt.datetime:
    if not STATE_PATH.exists():
        # First run: look back 1 hour so we don't drown in old files
        return dt.datetime.now(dt.timezone.utc) - dt.timedelta(hours=1)
    raw = STATE_PATH.read_text().strip()
    try:
        return dt.datetime.fromisoformat(raw)
    except ValueError:
        log.warning("State file unreadable (%r); defaulting to 1 hour ago", raw)
        return dt.datetime.now(dt.timezone.utc) - dt.timedelta(hours=1)


def write_last_check(when: dt.datetime) -> None:
    STATE_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATE_PATH.write_text(when.isoformat())


def run_gog(args: list[str], capture_json: bool = False, timeout: int = 60) -> dict | str:
    """Run a gog subcommand with retries. Returns parsed JSON or raw stdout."""
    last_err = None
    cmd = [GOG_BIN] + args + (["-j"] if capture_json else [])
    for attempt in range(1, RETRY_ATTEMPTS + 1):
        try:
            log.info("gog: %s (attempt %d/%d)", shlex.join(cmd), attempt, RETRY_ATTEMPTS)
            proc = subprocess.run(
                cmd, capture_output=True, text=True, timeout=timeout, check=False
            )
            if proc.returncode != 0:
                raise RuntimeError(
                    f"gog exited {proc.returncode}: {proc.stderr.strip()[:400]}"
                )
            if capture_json:
                return json.loads(proc.stdout) if proc.stdout.strip() else {}
            return proc.stdout
        except Exception as exc:
            last_err = exc
            log.warning("gog attempt %d failed: %s", attempt, exc)
            if attempt < RETRY_ATTEMPTS:
                time.sleep(RETRY_BACKOFF_SECONDS)
    raise RuntimeError(f"gog command failed after {RETRY_ATTEMPTS} attempts: {last_err}")


def telegram_send(text: str) -> bool:
    """Push a message to the Legacy chat. Best-effort, never raises."""
    try:
        cfg = json.loads(OPENCLAW_CONFIG.read_text())
        token = cfg["channels"]["telegram"]["botToken"]
    except Exception as exc:
        log.error("Could not read Telegram token: %s", exc)
        return False
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    body = urllib.parse.urlencode({
        "chat_id": TELEGRAM_CHAT_ID,
        "text": text,
        "disable_web_page_preview": "true",
    }).encode()
    req = urllib.request.Request(url, data=body, method="POST")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")
    for attempt in range(1, RETRY_ATTEMPTS + 1):
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                if 200 <= resp.status < 300:
                    log.info("Telegram sent (http %d)", resp.status)
                    return True
                log.warning("Telegram http %d: %s", resp.status, resp.read()[:300])
        except Exception as exc:
            log.warning("Telegram attempt %d failed: %s", attempt, exc)
            if attempt < RETRY_ATTEMPTS:
                time.sleep(RETRY_BACKOFF_SECONDS)
    return False


# ---------------------------------------------------------------- Gmail draft scanner

def read_processed_drafts() -> set[str]:
    """Return set of draft IDs we have already ingested."""
    if not PROCESSED_DRAFTS_PATH.exists():
        return set()
    return {
        line.strip()
        for line in PROCESSED_DRAFTS_PATH.read_text().splitlines()
        if line.strip()
    }


def record_processed_draft(draft_id: str) -> None:
    PROCESSED_DRAFTS_PATH.parent.mkdir(parents=True, exist_ok=True)
    with PROCESSED_DRAFTS_PATH.open("a") as fh:
        fh.write(f"{draft_id}\n")


def _decode_gmail_body(message: dict) -> str:
    """Decode a Gmail message body (base64url) into plain text.

    Handles both single-part text/plain payloads and simple multipart layouts.
    """
    payload = message.get("payload") or {}
    body = (payload.get("body") or {})
    data = body.get("data")
    if not data:
        # Walk parts; prefer text/plain, fall back to first part with data.
        parts = payload.get("parts") or []
        for part in parts:
            if part.get("mimeType", "").startswith("text/plain"):
                data = (part.get("body") or {}).get("data")
                if data:
                    break
        if not data:
            for part in parts:
                data = (part.get("body") or {}).get("data")
                if data:
                    break
    if not data:
        return ""
    data = data.replace("-", "+").replace("_", "/")
    pad = (-len(data)) % 4
    data += "=" * pad
    try:
        return base64.b64decode(data).decode("utf-8", errors="replace")
    except Exception as exc:
        log.warning("Base64 decode failed: %s", exc)
        return ""


def _strip_subject_tag(subject: str) -> str:
    """Remove the [LIVING_MEMORY_UPDATE] prefix from a subject line."""
    s = subject.strip()
    if s.startswith(GMAIL_DRAFT_SUBJECT_TAG):
        s = s[len(GMAIL_DRAFT_SUBJECT_TAG):].lstrip(" -:")
    return s.strip() or "Session Update"


def process_gmail_drafts(dry: bool) -> int:
    """Scan Gmail for [LIVING_MEMORY_UPDATE] drafts, land them in Drive, delete.

    Runs before the Drive scan so the newly-written .md files get ingested
    in the same bridge cycle. Returns number of drafts processed.
    """
    log.info("Scanning Gmail for %s drafts...", GMAIL_DRAFT_SUBJECT_TAG)
    try:
        search_res = run_gog(
            ["gmail", "search", GMAIL_DRAFT_SEARCH_QUERY, "--max", "50"],
            capture_json=True,
        )
    except Exception as exc:
        log.error("Gmail search failed: %s", exc)
        return 0
    threads = (search_res or {}).get("threads", []) if isinstance(search_res, dict) else []
    if not threads:
        log.info("No matching Gmail drafts found.")
        return 0
    log.info("Gmail search returned %d candidate draft thread(s).", len(threads))

    try:
        drafts_res = run_gog(["gmail", "drafts", "list", "--all"], capture_json=True)
    except Exception as exc:
        log.error("Gmail drafts list failed: %s", exc)
        return 0
    drafts = (drafts_res or {}).get("drafts", []) if isinstance(drafts_res, dict) else []
    by_thread = {d.get("threadId"): d.get("id") for d in drafts if d.get("threadId")}
    by_message = {d.get("messageId"): d.get("id") for d in drafts if d.get("messageId")}

    already_processed = read_processed_drafts()
    processed_count = 0
    for th in threads:
        thread_id = th.get("id", "")
        subject = th.get("subject", "") or "(no subject)"
        labels = th.get("labels") or []
        if "DRAFT" not in labels:
            log.warning("Thread %s missing DRAFT label; skipping.", thread_id)
            continue
        draft_id = by_thread.get(thread_id) or by_message.get(thread_id)
        if not draft_id:
            log.warning("No draft ID matches thread %s (subject=%r); skipping.",
                        thread_id, subject)
            continue
        if draft_id in already_processed:
            log.info("Draft %s already processed previously; skipping.", draft_id)
            continue

        try:
            draft_res = run_gog(
                ["gmail", "drafts", "get", draft_id],
                capture_json=True,
            )
        except Exception as exc:
            log.error("drafts get %s failed: %s", draft_id, exc)
            continue
        message = ((draft_res or {}).get("draft") or {}).get("message") or {}
        body_text = _decode_gmail_body(message).strip()
        if not body_text:
            log.warning("Draft %s has empty body; skipping.", draft_id)
            continue

        title = _strip_subject_tag(subject)
        stamp = dt.datetime.now().strftime("%Y-%m-%d_%H%M")
        filename = f"session_update_{stamp}.md"

        # Prepend a parser-friendly header so the existing session-block parser
        # picks up a proper title. `Session: <title>` matches HEADER_PATTERNS[2].
        file_body = f"Session: {title}\n\n{body_text}\n"

        GMAIL_INBOX_DIR.mkdir(parents=True, exist_ok=True)
        local_path = GMAIL_INBOX_DIR / filename
        local_path.write_text(file_body)

        if dry:
            log.info("[DRY] would upload %s (%d chars) to folder %s and delete draft %s",
                     filename, len(file_body), LIVING_MEMORY_FOLDER_ID, draft_id)
            log.info("[%s] Processed Gmail session update: %s", now_iso(), subject)
            processed_count += 1
            continue

        # Upload to Drive. If this fails we do NOT mark the draft processed —
        # we want the next cron tick to retry.
        try:
            upload_res = run_gog([
                "drive", "upload", str(local_path),
                "--parent", LIVING_MEMORY_FOLDER_ID,
                "--name", filename,
                "--mime-type", "text/markdown",
            ], capture_json=True)
            uploaded_id = (
                upload_res.get("file", {}).get("id")
                if isinstance(upload_res, dict) else ""
            )
            log.info("Drive upload OK: %s (id=%s)", filename, uploaded_id)
        except Exception as exc:
            log.error("Drive upload failed for draft %s: %s — will retry next run.",
                      draft_id, exc)
            continue

        # Delete the draft. If delete fails we still mark processed so we
        # don't double-upload on the next cron tick.
        try:
            run_gog(
                ["gmail", "drafts", "delete", draft_id, "-y"],
                capture_json=False,
            )
            log.info("Deleted Gmail draft %s", draft_id)
        except Exception as exc:
            log.error("Draft delete failed for %s: %s (marking processed anyway)",
                      draft_id, exc)

        record_processed_draft(draft_id)
        log.info("[%s] Processed Gmail session update: %s", now_iso(), subject)
        processed_count += 1

    log.info("Gmail draft scanner finished: %d draft(s) processed.", processed_count)
    return processed_count


# ---------------------------------------------------------------- Drive polling

def list_modified_files(folder_id: str, since: dt.datetime) -> list[dict]:
    """Return files in `folder_id` whose modifiedTime > since and mime is watched."""
    result = run_gog(
        ["drive", "ls", "--parent", folder_id, "--max", "100"],
        capture_json=True,
    )
    files = result.get("files", []) if isinstance(result, dict) else []
    fresh = []
    for f in files:
        if f.get("mimeType") not in WATCHED_MIME:
            continue
        mtime_raw = f.get("modifiedTime", "")
        try:
            mtime = dt.datetime.fromisoformat(mtime_raw.replace("Z", "+00:00"))
        except ValueError:
            log.warning("Unparseable modifiedTime %r on %s", mtime_raw, f.get("name"))
            continue
        if mtime > since:
            f["_mtime"] = mtime
            fresh.append(f)
    return fresh


def download_drive_file(file_id: str, dest: Path) -> Path:
    dest.parent.mkdir(parents=True, exist_ok=True)
    run_gog(["drive", "download", file_id, "--out", str(dest)], capture_json=False)
    return dest


# ---------------------------------------------------------------- parsing

# Recognise both Cowork's bracketed headers and free-form "Session:" prefixes.
HEADER_PATTERNS = [
    re.compile(r"^\[(?P<date>\d{4}-\d{2}-\d{2})[^\]]*?(?:—|--)\s*(?P<title>.+?)\]\s*$"),
    re.compile(r"^\[(?P<date>\d{4}-\d{2}-\d{2}T[\d:+\-]+)\]\s*(?P<title>.+?)\s*$"),
    re.compile(r"^Session:\s*(?P<title>.+?)\s*$"),
]
COMPLETED_KEYS = ("ACTIONS COMPLETED", "Completed", "COMPLETED", "DONE")
BLOCKER_KEYS = ("BLOCKER", "Blocked", "STATUS: WAITING", "FINDINGS")
NEXT_KEYS = ("NEXT", "Next", "NEXT ACTION")


def parse_session_blocks(text: str, source_name: str) -> list[dict]:
    """Split a markdown/text file into session entries using header markers."""
    lines = text.splitlines()
    blocks: list[dict] = []
    current: dict | None = None
    for raw in lines:
        line = raw.rstrip()
        # Try every header pattern
        header_match = None
        for pat in HEADER_PATTERNS:
            m = pat.match(line.strip())
            if m:
                header_match = m
                break
        if header_match:
            if current and current["raw_lines"]:
                blocks.append(current)
            grp = header_match.groupdict()
            current = {
                "date": grp.get("date") or now_iso()[:10],
                "title": grp.get("title", "untitled").strip(" ─*"),
                "source": source_name,
                "raw_lines": [],
                "completed": [],
                "blockers": [],
                "next": [],
            }
            continue
        if current is None:
            continue
        current["raw_lines"].append(line)
        stripped = line.lstrip(" -*•").strip()
        if not stripped:
            continue
        # Bullet markers like "✓ Did the thing" → completed
        if stripped.startswith("✓") or stripped.startswith("✅"):
            current["completed"].append(stripped.lstrip("✓✅ ").strip())
            continue
        # Keyed lines
        upper = stripped.upper()
        for key in COMPLETED_KEYS:
            if upper.startswith(key.upper()):
                rest = stripped[len(key):].lstrip(" :").strip()
                if rest:
                    current["completed"].append(rest)
                break
        for key in BLOCKER_KEYS:
            if upper.startswith(key.upper()):
                rest = stripped[len(key):].lstrip(" :").strip()
                if rest:
                    current["blockers"].append(rest)
                break
        for key in NEXT_KEYS:
            if upper.startswith(key.upper()):
                rest = stripped[len(key):].lstrip(" :").strip()
                if rest:
                    current["next"].append(rest)
                break
    if current and current["raw_lines"]:
        blocks.append(current)
    return blocks


def synthesise_session_block(file_name: str, text: str, mtime: dt.datetime) -> dict:
    """Fallback: when no header is found, treat whole file as one block."""
    return {
        "date": mtime.strftime("%Y-%m-%d"),
        "title": f"Update from {file_name}",
        "source": file_name,
        "raw_lines": text.splitlines()[:30],
        "completed": [],
        "blockers": [],
        "next": [],
    }

# ---------------------------------------------------------------- merge

def format_date_pretty(date_str: str) -> str:
    try:
        d = dt.datetime.fromisoformat(date_str[:10])
        return d.strftime("%B %-d, %Y")
    except Exception:
        return date_str


def render_session_entry(block: dict) -> str:
    """Build the text we will splice into Section 6."""
    pretty = format_date_pretty(block["date"])
    title = block["title"][:120]
    parts = [f"{pretty} — {title}", f"(auto-imported from {block['source']})"]
    if block["completed"]:
        parts.append("Completed:")
        for item in block["completed"][:8]:
            parts.append(f"  • {item}")
    if block["blockers"]:
        parts.append("Blockers / findings:")
        for item in block["blockers"][:6]:
            parts.append(f"  • {item}")
    if block["next"]:
        parts.append("Next:")
        for item in block["next"][:6]:
            parts.append(f"  • {item}")
    return "\n".join(parts) + "\n"


def insert_at_section(doc_id: str, section_header: str, new_text: str, dry: bool) -> bool:
    """Use find-replace anchored on the section header to splice new_text in.

    Note: gog docs find-replace's own --dry-run flag does not appear to
    suppress the write reliably. To be safe, in dry mode we skip the gog call
    entirely and only log what we would have done.
    """
    log.info("Splicing into %s (dry=%s, %d chars)",
             section_header, dry, len(new_text))
    if dry:
        preview = "\n".join(new_text.splitlines()[:5])
        log.info("[DRY] would find=%r and prepend %d lines (preview):\n%s",
                 section_header, len(new_text.splitlines()), preview)
        return True
    find_str = section_header
    replace_str = section_header + "\n" + new_text
    args = ["docs", "find-replace", doc_id, find_str, replace_str, "--first"]
    out = run_gog(args, capture_json=True)
    log.info("find-replace result: %s", json.dumps(out)[:300])
    return True


def update_header_date(doc_id: str, current_header_line: str, dry: bool) -> bool:
    today = dt.datetime.now().strftime("%B %-d, %Y")
    new_line = f"Updated: {today}"
    if current_header_line == new_line:
        log.info("Header date already current (%s)", new_line)
        return True
    if dry:
        log.info("[DRY] would update header %r → %r", current_header_line, new_line)
        return True
    args = ["docs", "find-replace", doc_id, current_header_line, new_line, "--first"]
    out = run_gog(args, capture_json=True)
    log.info("Header update result: %s", json.dumps(out)[:200])
    return True

# ---------------------------------------------------------------- main flow

def backup_doc(doc_id: str, tag: str) -> Path:
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    stamp = dt.datetime.now().strftime("%Y%m%dT%H%M%S")
    out = BACKUP_DIR / f"living_memory_{stamp}_{tag}.txt"
    text = run_gog(["docs", "cat", doc_id])
    if isinstance(text, str):
        out.write_text(text)
        log.info("Backed up Doc to %s (%d bytes)", out, len(text))
    return out


def first_unchecked_action(doc_text: str) -> str | None:
    for line in doc_text.splitlines():
        m = re.match(r"\[\s\]\s*(ACTION\s*\d+\s*—.*?)(?:What:|$)", line)
        if m:
            return m.group(1).strip()
    return None


def header_line_from_doc(doc_text: str) -> str | None:
    for line in doc_text.splitlines():
        if line.startswith("Updated:"):
            return line.strip()
    return None


def run_poll(force: bool, dry: bool) -> int:
    log.info("===== Living Memory Bridge run started (force=%s dry=%s) =====", force, dry)

    # Step 0: drain any Gmail [LIVING_MEMORY_UPDATE] drafts into Drive first,
    # so the normal Drive scan below ingests them in this same cycle.
    try:
        drafts_processed = process_gmail_drafts(dry)
        if drafts_processed:
            log.info("Gmail scanner staged %d new Drive file(s) for this cycle.",
                     drafts_processed)
    except Exception as exc:
        log.error("Gmail draft scanner crashed (continuing with Drive scan): %s", exc)

    since = dt.datetime.fromtimestamp(0, dt.timezone.utc) if force else read_last_check()
    log.info("Looking for files modified since: %s", since.isoformat())

    fresh_files: list[dict] = []
    for label, folder_id in WATCHED_FOLDERS:
        try:
            modified = list_modified_files(folder_id, since)
            log.info("Folder %s: %d new file(s)", label, len(modified))
            fresh_files.extend(modified)
        except Exception as exc:
            log.error("Failed to list %s: %s", label, exc)

    if not fresh_files:
        log.info("No new files. Exiting clean.")
        if not dry:
            write_last_check(dt.datetime.now(dt.timezone.utc))
        log.info("===== Run finished (no-op) =====")
        return 0

    # Parse all updated files into a flat list of session blocks
    all_blocks: list[dict] = []
    for f in fresh_files:
        local = HOME / "norris-agent" / "backups" / "_inbox" / f"{f['id']}.md"
        try:
            download_drive_file(f["id"], local)
            text = local.read_text(errors="replace")
            blocks = parse_session_blocks(text, f["name"])
            if not blocks:
                blocks = [synthesise_session_block(f["name"], text, f["_mtime"])]
            log.info("  %s → %d block(s)", f["name"], len(blocks))
            all_blocks.extend(blocks)
        except Exception as exc:
            log.error("  Failed to ingest %s: %s", f["name"], exc)

    # Filter blocks newer than the last_check so we don't re-publish history
    new_blocks = []
    for b in all_blocks:
        try:
            d = dt.datetime.fromisoformat(b["date"][:10]).replace(tzinfo=dt.timezone.utc)
        except Exception:
            d = dt.datetime.now(dt.timezone.utc)
        if force or d >= (since - dt.timedelta(days=1)):
            new_blocks.append(b)

    if not new_blocks:
        log.info("Files changed but no parseable session blocks were new. Exiting.")
        if not dry:
            write_last_check(dt.datetime.now(dt.timezone.utc))
        return 0

    # Snapshot the live Doc before any change
    try:
        backup_doc(TARGET_DOC_ID, "pre")
    except Exception as exc:
        log.error("Doc backup failed: %s — aborting before write.", exc)
        if not dry:
            telegram_send(f"⚠️ Living Memory Bridge: backup failed before write ({exc}). No changes made.")
        return 2

    # Render and splice
    summary_bits: list[str] = []
    new_blockers: list[str] = []
    new_next: list[str] = []
    for b in new_blocks:
        entry = render_session_entry(b)
        try:
            insert_at_section(TARGET_DOC_ID, SECTION_6_HEADER, entry + "\n", dry)
            summary_bits.append(f"{format_date_pretty(b['date'])} {b['title'][:60]}")
        except Exception as exc:
            log.error("Section 6 splice failed for %s: %s", b["title"], exc)
            continue
        for blk in b["blockers"][:3]:
            line = f"🟡 BLOCKER (auto-imported from {b['source']}): {blk}\n"
            new_blockers.append(line)
        for nxt in b["next"][:5]:
            line = f"[ ] {nxt} (auto-imported from {b['source']})\n"
            new_next.append(line)

    if new_blockers:
        bulk = "".join(new_blockers) + "\n"
        try:
            insert_at_section(TARGET_DOC_ID, SECTION_7_HEADER, bulk, dry)
        except Exception as exc:
            log.error("Section 7 splice failed: %s", exc)

    if new_next:
        bulk = "".join(new_next) + "\n"
        try:
            insert_at_section(TARGET_DOC_ID, SECTION_9_HEADER, bulk, dry)
        except Exception as exc:
            log.error("Section 9 splice failed: %s", exc)

    # Refresh header date and find next pending action for Telegram
    post_text = ""
    try:
        post_text = run_gog(["docs", "cat", TARGET_DOC_ID]) or ""
    except Exception as exc:
        log.warning("Could not re-cat Doc for header refresh: %s", exc)
    if isinstance(post_text, str) and post_text:
        line = header_line_from_doc(post_text)
        if line:
            try:
                update_header_date(TARGET_DOC_ID, line, dry)
            except Exception as exc:
                log.warning("Header update skipped: %s", exc)

    next_action = first_unchecked_action(post_text) if isinstance(post_text, str) else None

    # Persist watermark and announce (only on real runs)
    if not dry:
        write_last_check(dt.datetime.now(dt.timezone.utc))
    short_summary = "; ".join(summary_bits[:2]) if summary_bits else "no parsable sessions"
    msg = (
        f"Living Memory updated automatically.\n"
        f"Changes: {len(new_blocks)} session block(s) — {short_summary}.\n"
        f"Next action: {next_action or 'no open actions parsed'}\n"
        f"At: {now_ct_str()}"
    )
    if dry:
        log.info("[DRY RUN] would send Telegram:\n%s", msg)
    else:
        telegram_send(msg)

    log.info("===== Run finished (%d block(s) merged) =====", len(new_blocks))
    return 0

# ---------------------------------------------------------------- entrypoint

def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true",
                        help="Parse and log, but do not modify the Doc or send Telegram.")
    parser.add_argument("--force", action="store_true",
                        help="Ignore last_check watermark; consider all files.")
    parser.add_argument("--install-confirm", action="store_true",
                        help="Send the one-time install Telegram and exit.")
    args = parser.parse_args()

    if args.install_confirm:
        ok = telegram_send(
            "Living Memory Bridge installed and running on M1.\n"
            "Checking Drive every 15 minutes.\n"
            "Updates push to Google Doc automatically.\n"
            "No human action required. Ever."
        )
        log.info("Install confirmation Telegram %s", "OK" if ok else "FAILED")
        return 0 if ok else 1

    try:
        return run_poll(force=args.force, dry=args.dry_run)
    except Exception as exc:
        log.exception("Run aborted by uncaught exception: %s", exc)
        if not args.dry_run:
            telegram_send(f"⚠️ Living Memory Bridge error: {exc}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
