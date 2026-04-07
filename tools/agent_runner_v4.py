#!/usr/bin/env python3
"""
Norris Utilities Autonomous Agent Runner v4
Improved autonomous build engine with morning briefs, EOD recaps,
threaded typing indicators, better validation, and Claude CLI integration.

Usage:
  python3 agent_runner_v4.py              # Run continuously (30 min loop)
  python3 agent_runner_v4.py --once       # One build cycle and exit
  python3 agent_runner_v4.py --brief      # Send morning brief via Telegram
  python3 agent_runner_v4.py --eod        # Send EOD recap via Telegram
  python3 agent_runner_v4.py --retry-failed  # Reset all failed tasks to pending
  python3 agent_runner_v4.py --test-telegram # Verify Telegram connection
  python3 agent_runner_v4.py --test-one   # Process one task and exit
  python3 agent_runner_v4.py --feedback "text" # Record Aaron's feedback for future builds

WHAT THIS DOES:
- Reads structured task queue with priorities and dependencies
- Calls Claude Code CLI (routes through Max plan, no API credits consumed)
- Sends Telegram typing indicator while processing
- Validates output (HTML structure, brand elements, no placeholders)
- Retries up to 3 times with error feedback on failure
- Backs up files before overwriting
- Sends Telegram notifications with file paths
- Logs everything to daily journal files
- Morning brief at 4:45 AM and EOD recap at 6 PM via launchd

WHAT THIS CANNOT DO:
- Send emails, make purchases, or take external actions
- Access Gmail, Calendar, or Drive
- Guarantee perfect output -- Aaron must review before sharing

v4 IMPROVEMENTS OVER v3:
- Threaded Telegram typing indicator during CLI calls
- Better HTML extraction (handles more edge cases)
- Truncation detection in validation
- --brief and --eod commands for scheduled briefs
- --retry-failed to batch-reset failed tasks
- Quiet hours override for morning brief
- More detailed Telegram notifications with file:// links
- Uses Claude Code CLI instead of direct API (Max plan subscription)
"""

import os
import sys
import re
import json
import time
import shutil
import logging
import subprocess
import threading
import urllib.request
from pathlib import Path
from datetime import datetime, timedelta
from telegram_logger import log_message

# ── Paths ────────────────────────────────────────────────────────────────────
AGENT_DIR = Path(__file__).parent.resolve()
TASK_QUEUE = AGENT_DIR / "task_queue.md"
CONTEXT_FILE = AGENT_DIR / "agent_context.md"
CONFIG_FILE = AGENT_DIR / "config.json"
JOURNAL_DIR = AGENT_DIR / "journal"
OUTPUT_DIR = AGENT_DIR / "output"
LOG_DIR = AGENT_DIR / "logs"
BACKUP_DIR = AGENT_DIR / "backups"
NEWS_DIR = AGENT_DIR / "news"
DATA_DIR = AGENT_DIR / "data"
LEARNINGS_FILE = DATA_DIR / "agent_learnings.json"

for _d in [JOURNAL_DIR, LOG_DIR, BACKUP_DIR, NEWS_DIR, DATA_DIR,
           OUTPUT_DIR / "website", OUTPUT_DIR / "internal"]:
    _d.mkdir(parents=True, exist_ok=True)

# ── Logging ──────────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.FileHandler(LOG_DIR / "agent_v4.log")],
)
if sys.stdin and sys.stdin.isatty():
    logging.getLogger().addHandler(logging.StreamHandler(sys.stdout))
log = logging.getLogger("norris-agent-v4")


# ── Environment ──────────────────────────────────────────────────────────────
def load_env():
    """Load credentials from .env files (agent dir first, then .openclaw)."""
    env = {}
    for env_path in [AGENT_DIR / ".env", Path.home() / ".openclaw" / ".env"]:
        if env_path.exists():
            for line in env_path.read_text().splitlines():
                if "=" in line and not line.startswith("#"):
                    k, v = line.split("=", 1)
                    key = k.strip()
                    if key not in env:
                        env[key] = v.strip()
    for key in ["TELEGRAM_BOT_TOKEN", "TELEGRAM_CHAT_ID"]:
        if key not in env and key in os.environ:
            env[key] = os.environ[key]
    return env


ENV = load_env()


def load_config():
    """Load config.json with v4 defaults for missing keys."""
    if CONFIG_FILE.exists():
        cfg = json.loads(CONFIG_FILE.read_text())
    else:
        cfg = {}
    defaults = {
        "interval_seconds": 1800,
        "max_tasks_per_cycle": 2,
        "build_model": "claude-opus-4-20250514",
        "routine_model": "claude-sonnet-4-20250514",
        "max_fix_attempts": 3,
        "max_tokens_build": 16384,
        "max_tokens_routine": 8192,
        "quiet_hours_start": "22:00",
        "quiet_hours_end": "04:00",
    }
    for k, v in defaults.items():
        cfg.setdefault(k, v)
    return cfg


def load_context():
    """Load brand context from CLAUDE.md + agent_context.md."""
    parts = []
    claude_md = Path.home() / "CLAUDE.md"
    if claude_md.exists():
        parts.append(claude_md.read_text())
    if CONTEXT_FILE.exists():
        parts.append(CONTEXT_FILE.read_text())
    return "\n\n".join(parts) if parts else "You are building for Norris Utilities, LLC."


def load_learnings():
    """Load persistent learnings from agent_learnings.json."""
    if LEARNINGS_FILE.exists():
        try:
            return json.loads(LEARNINGS_FILE.read_text())
        except (json.JSONDecodeError, Exception) as e:
            log.warning(f"Failed to load learnings: {e}")
    return {
        "build_preferences": {},
        "task_history": [],
        "failure_patterns": [],
        "aaron_feedback": [],
    }


def save_learnings(learnings):
    """Save learnings to agent_learnings.json."""
    try:
        LEARNINGS_FILE.write_text(json.dumps(learnings, indent=2))
    except Exception as e:
        log.error(f"Failed to save learnings: {e}")


def record_task_result(learnings, task, success, attempts, output_size, errors=None):
    """Append a task result to learnings history."""
    entry = {
        "task_id": task["id"],
        "title": task["title"],
        "type": task.get("type", "html"),
        "attempts": attempts,
        "model_used": "CLI",
        "output_size": output_size,
        "validation_passed": success,
        "date": datetime.now().strftime("%Y-%m-%d"),
        "time": datetime.now().strftime("%H:%M:%S"),
    }
    if errors:
        entry["errors"] = errors[:3]
    learnings["task_history"].append(entry)
    # Keep last 50 entries to avoid unbounded growth
    if len(learnings["task_history"]) > 50:
        learnings["task_history"] = learnings["task_history"][-50:]
    save_learnings(learnings)


def record_failure_pattern(learnings, error_description):
    """Add a failure pattern if not already known."""
    existing = [fp["pattern"] if isinstance(fp, dict) else fp
                for fp in learnings["failure_patterns"]]
    if error_description not in existing:
        learnings["failure_patterns"].append({
            "pattern": error_description,
            "fix": "",
            "date_added": datetime.now().strftime("%Y-%m-%d"),
        })
        save_learnings(learnings)
        return True
    return False


def get_known_fix(learnings, errors):
    """Check if any validation errors match known failure patterns. Returns fix hints."""
    hints = []
    for fp in learnings["failure_patterns"]:
        pattern = fp["pattern"] if isinstance(fp, dict) else fp
        fix = fp.get("fix", "") if isinstance(fp, dict) else ""
        for err in errors:
            if any(word in err.lower() for word in pattern.lower().split()[:3]):
                if fix:
                    hints.append(fix)
    return hints


def build_history_context(learnings):
    """Build a prompt section from the last 5 task results + Aaron's feedback."""
    lines = []
    history = learnings.get("task_history", [])[-5:]
    feedback = learnings.get("aaron_feedback", [])[-5:]

    if history:
        lines.append("RECENT BUILD HISTORY (learn from these):")
        for h in history:
            status = "PASSED" if h.get("validation_passed") else "FAILED"
            lines.append(f"  - Task {h['task_id']}: {h['title']} | {status} | "
                         f"{h.get('attempts', '?')} attempts | {h.get('output_size', '?')} chars | "
                         f"{h.get('date', '?')}")
            if h.get("errors"):
                lines.append(f"    Errors: {', '.join(h['errors'])}")

    if feedback:
        lines.append("\nAARON'S FEEDBACK (apply to all future builds):")
        for fb in feedback:
            text = fb["text"] if isinstance(fb, dict) else fb
            date = fb.get("date", "?") if isinstance(fb, dict) else "?"
            lines.append(f"  - [{date}] {text}")

    return "\n".join(lines) if lines else ""


def add_aaron_feedback(feedback_text):
    """Add feedback from Aaron to the learnings file."""
    learnings = load_learnings()
    learnings["aaron_feedback"].append({
        "text": feedback_text,
        "date": datetime.now().strftime("%Y-%m-%d"),
        "time": datetime.now().strftime("%H:%M:%S"),
    })
    # Keep last 20 feedback entries
    if len(learnings["aaron_feedback"]) > 20:
        learnings["aaron_feedback"] = learnings["aaron_feedback"][-20:]
    save_learnings(learnings)
    log.info(f"Recorded Aaron feedback: {feedback_text[:80]}")
    print(f"Feedback saved: {feedback_text}")
    # Notify via Telegram
    config = load_config()
    fb_msg = (
        f"\U0001f4dd FEEDBACK \u2014 <b>Feedback recorded</b>\n{feedback_text}\n"
        f"Agent will apply this to future builds.")
    notify_telegram(fb_msg, config, override_quiet=True)
    log_message("FEEDBACK", "agent_runner_v4.py", fb_msg)


def is_quiet_hours(config):
    now = datetime.now().strftime("%H:%M")
    start = config.get("quiet_hours_start", "22:00")
    end = config.get("quiet_hours_end", "04:00")
    if start > end:
        return now >= start or now < end
    return start <= now < end


# ── Telegram ─────────────────────────────────────────────────────────────────
class TypingIndicator:
    """Context manager: sends Telegram typing indicator every 4s while active.

    Enhanced v4.1: Activates after 10s of elapsed time. Falls back to sending
    a text status message every 60s if sendChatAction fails repeatedly.
    Aaron should never wonder if Legacy is alive or dead.
    """

    def __init__(self, task_name=None):
        self._running = False
        self._thread = None
        self._token = ENV.get("TELEGRAM_BOT_TOKEN", "")
        self._chat_id = ENV.get("TELEGRAM_CHAT_ID", "")
        self._task_name = task_name or "a task"
        self._start_time = None
        self._typing_failures = 0

    def __enter__(self):
        if self._token and self._chat_id:
            self._running = True
            self._start_time = time.monotonic()
            self._typing_failures = 0
            self._thread = threading.Thread(target=self._loop, daemon=True)
            self._thread.start()
        return self

    def __exit__(self, *args):
        self._running = False
        if self._thread:
            self._thread.join(timeout=6)

    def _send_typing_action(self):
        """Send typing indicator. Returns True on success."""
        try:
            payload = json.dumps({"chat_id": self._chat_id, "action": "typing"}).encode("utf-8")
            req = urllib.request.Request(
                f"https://api.telegram.org/bot{self._token}/sendChatAction",
                data=payload, headers={"Content-Type": "application/json"},
            )
            urllib.request.urlopen(req, timeout=5)
            return True
        except Exception:
            return False

    def _send_still_working(self):
        """Fallback: send a text message so Aaron knows we're alive."""
        try:
            elapsed = int(time.monotonic() - self._start_time)
            mins = elapsed // 60
            text = f"\u23f3 Still working on {self._task_name}... ({mins}m elapsed)"
            payload = json.dumps({
                "chat_id": self._chat_id,
                "text": text,
                "parse_mode": "HTML",
            }).encode("utf-8")
            req = urllib.request.Request(
                f"https://api.telegram.org/bot{self._token}/sendMessage",
                data=payload, headers={"Content-Type": "application/json"},
            )
            urllib.request.urlopen(req, timeout=10)
        except Exception:
            pass

    def _loop(self):
        last_fallback = 0
        while self._running:
            elapsed = time.monotonic() - self._start_time
            # Only start sending indicators after 10 seconds
            if elapsed >= 10:
                ok = self._send_typing_action()
                if ok:
                    self._typing_failures = 0
                else:
                    self._typing_failures += 1
                # Fallback text every 60s if typing action keeps failing
                # (3+ consecutive failures = ~12s of failures)
                if self._typing_failures >= 3:
                    now = time.monotonic()
                    if now - last_fallback >= 60:
                        self._send_still_working()
                        last_fallback = now
            time.sleep(4)


def notify_telegram(message, config=None, override_quiet=False):
    """Send Telegram message. Respects quiet hours unless override_quiet=True."""
    if config and is_quiet_hours(config) and not override_quiet:
        log.info(f"Quiet hours -- suppressed: {message[:60]}")
        return False
    token = ENV.get("TELEGRAM_BOT_TOKEN", "")
    chat_id = ENV.get("TELEGRAM_CHAT_ID", "")
    if not token or not chat_id:
        log.warning("No Telegram credentials in .env")
        return False
    try:
        payload = json.dumps(
            {"chat_id": chat_id, "text": message[:4096], "parse_mode": "HTML"}
        ).encode("utf-8")
        req = urllib.request.Request(
            f"https://api.telegram.org/bot{token}/sendMessage",
            data=payload, headers={"Content-Type": "application/json"},
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            if resp.status == 200:
                return True
        log.error(f"Telegram HTTP {resp.status}")
        return False
    except Exception as e:
        log.error(f"Telegram error: {e}")
        return False


# ── Helpers ──────────────────────────────────────────────────────────────────
class _NoOpCtx:
    """No-op context manager used when an outer TypingIndicator already exists."""
    def __enter__(self): return self
    def __exit__(self, *args): pass


# ── Claude CLI ───────────────────────────────────────────────────────────────
CLAUDE_BIN = "/opt/homebrew/bin/claude"


def call_claude_cli(system_prompt, user_prompt, config,
                    model_key="routine_model", max_tokens_key="max_tokens_routine",
                    task_name=None, _typing_ctx=None):
    """Call Claude Code CLI with typing indicator. Routes through Max plan subscription.

    Uses: claude --dangerously-skip-permissions -p <prompt>
    This runs non-interactively and consumes no API credits.

    If _typing_ctx is provided (from an outer TypingIndicator), skips creating
    a nested one to avoid duplicate indicators.
    """
    # Combine system + user prompt into a single prompt for the CLI
    full_prompt = f"{system_prompt}\n\n---\n\n{user_prompt}"

    # Use outer typing context if provided, otherwise create our own
    ctx = _typing_ctx or TypingIndicator(task_name=task_name)
    with (ctx if not _typing_ctx else _NoOpCtx()):
        for attempt in range(3):
            try:
                log.info(f"Claude CLI call attempt {attempt + 1}/3 "
                         f"(prompt: {len(full_prompt)} chars)")
                result = subprocess.run(
                    [CLAUDE_BIN, "--dangerously-skip-permissions", "-p", full_prompt],
                    capture_output=True,
                    text=True,
                    timeout=600,  # 10 min timeout for large builds
                    cwd=str(AGENT_DIR),
                    env={
                        **os.environ,
                        "PATH": "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin",
                        "HOME": str(Path.home()),
                    },
                )

                if result.returncode == 0 and result.stdout.strip():
                    text = result.stdout.strip()
                    log.info(f"Claude CLI success: {len(text)} chars output")
                    return text, None

                if result.returncode != 0:
                    stderr = (result.stderr or "").strip()[:300]
                    log.warning(f"Claude CLI exit {result.returncode} "
                                f"attempt {attempt + 1}: {stderr}")
                    if "rate" in stderr.lower() or "limit" in stderr.lower():
                        wait = min(30 * (attempt + 1), 90)
                        log.warning(f"Rate limited, retrying in {wait}s")
                        time.sleep(wait)
                        continue
                    if attempt < 2:
                        time.sleep(10)
                        continue
                    return None, f"CLI exit {result.returncode}: {stderr}"

                # returncode 0 but empty output
                if attempt < 2:
                    log.warning("Empty output, retrying")
                    time.sleep(10)
                    continue
                return None, "Claude CLI returned empty output"

            except subprocess.TimeoutExpired:
                log.warning(f"Claude CLI timeout on attempt {attempt + 1}")
                if attempt < 2:
                    time.sleep(10)
                    continue
                return None, "Claude CLI timed out after 600s"
            except FileNotFoundError:
                return None, f"Claude CLI not found at {CLAUDE_BIN}"
            except Exception as e:
                return None, f"Exception: {e}"

    return None, "Failed after 3 CLI attempts"


# ── Code Extraction ──────────────────────────────────────────────────────────
def extract_code(response, task_type="html"):
    """Extract code from Claude response, handling markdown fences and raw output."""
    if task_type == "html":
        match = re.search(r"```html?\s*\n(.*?)```", response, re.DOTALL)
        if match:
            return match.group(1).strip()
        match = re.search(r"(<!DOCTYPE\s+html.*</html>)", response, re.DOTALL | re.IGNORECASE)
        if match:
            return match.group(1).strip()
        stripped = response.strip()
        if stripped.lower().startswith("<!doctype") or stripped.lower().startswith("<html"):
            return stripped
    elif task_type == "python":
        match = re.search(r"```python\s*\n(.*?)```", response, re.DOTALL)
        if match:
            return match.group(1).strip()
        stripped = response.strip()
        if stripped.startswith("#!") or stripped.startswith("import ") or stripped.startswith('"""'):
            return stripped
    else:
        match = re.search(r"```\w*\s*\n(.*?)```", response, re.DOTALL)
        if match:
            return match.group(1).strip()

    return response.strip()


# ── Validation ───────────────────────────────────────────────────────────────
def validate_output(content, task):
    """Validate output quality. Returns (is_valid, error_list)."""
    errors = []
    task_type = task.get("type", "html").lower()

    if len(content.strip()) < 200:
        errors.append(f"Too short ({len(content.strip())} chars, need 200+)")

    placeholders = ["[TBD]", "[TODO]", "lorem ipsum", "[placeholder]", "[INSERT]"]
    for p in placeholders:
        if p.lower() in content.lower():
            errors.append(f"Placeholder found: {p}")

    if task_type == "html":
        lower = content.lower()
        for tag in ["<!doctype html", "<html", "<head", "<body", "</html>"]:
            if tag not in lower:
                errors.append(f"Missing {tag}")

        if "Lato" not in content:
            errors.append("Missing Lato font reference")
        if "#0000ff" not in lower and "var(--nu-blue)" not in content:
            errors.append("Missing brand blue (#0000FF or --nu-blue)")
        if "viewport" not in lower:
            errors.append("Missing viewport meta tag")
        if "fonts.googleapis.com" not in content:
            errors.append("Missing Google Fonts CDN link")

        if not content.rstrip().lower().endswith("</html>"):
            errors.append("Possibly truncated (doesn't end with </html>)")

    elif task_type == "python":
        try:
            compile(content, "<output>", "exec")
        except SyntaxError as e:
            errors.append(f"Python syntax error: {e}")

    return (len(errors) == 0, errors)


# ── Task Queue ───────────────────────────────────────────────────────────────
def parse_task_queue():
    """Parse task_queue.md into list of task dicts."""
    if not TASK_QUEUE.exists():
        return []

    text = TASK_QUEUE.read_text()
    tasks = []
    current = None

    for line in text.splitlines():
        m = re.match(r"^## Task (\d+):\s*(.+)", line)
        if m:
            if current:
                tasks.append(current)
            current = {
                "id": int(m.group(1)),
                "title": m.group(2).strip(),
                "status": "pending",
                "priority": 3,
                "type": "html",
                "description": "",
                "output": "",
                "depends": "none",
                "note": "",
            }
            continue

        if current is None:
            continue

        stripped = line.strip()
        if stripped.startswith("- Status:"):
            current["status"] = stripped.split(":", 1)[1].strip().lower()
        elif stripped.startswith("- Priority:"):
            try:
                current["priority"] = int(stripped.split(":", 1)[1].strip())
            except ValueError:
                pass
        elif stripped.startswith("- Type:"):
            current["type"] = stripped.split(":", 1)[1].strip().lower()
        elif stripped.startswith("- Description:"):
            current["description"] = stripped.split(":", 1)[1].strip()
        elif stripped.startswith("- Output:"):
            current["output"] = stripped.split(":", 1)[1].strip()
        elif stripped.startswith("- Depends:"):
            current["depends"] = stripped.split(":", 1)[1].strip()
        elif stripped.startswith("- Note:"):
            current["note"] = stripped.split(":", 1)[1].strip()

    if current:
        tasks.append(current)

    return tasks


def update_task_status(task_id, new_status, note=""):
    """Update a task's status (and optional note) in task_queue.md."""
    text = TASK_QUEUE.read_text()
    lines = text.splitlines()
    in_task = False
    task_re = re.compile(rf"^## Task {task_id}:")

    for i, line in enumerate(lines):
        if task_re.match(line):
            in_task = True
            continue
        if in_task and line.startswith("## Task "):
            break
        if in_task and line.strip().startswith("- Status:"):
            lines[i] = f"- Status: {new_status}"
            if note:
                if i + 1 < len(lines) and lines[i + 1].strip().startswith("- Note:"):
                    lines[i + 1] = f"- Note: {note}"
                else:
                    lines.insert(i + 1, f"- Note: {note}")
            break

    TASK_QUEUE.write_text("\n".join(lines))


def check_dependencies(task, all_tasks):
    deps = task.get("depends", "none").strip().lower()
    if deps in ("none", ""):
        return True
    done_ids = {t["id"] for t in all_tasks if t["status"] == "done"}
    for dep in deps.split(","):
        try:
            if int(dep.strip()) not in done_ids:
                return False
        except ValueError:
            continue
    return True


# ── File Operations ──────────────────────────────────────────────────────────
def backup_file(filepath):
    """Backup existing file before overwriting."""
    p = Path(filepath)
    if p.exists():
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        backup = BACKUP_DIR / f"{p.stem}_{ts}{p.suffix}"
        shutil.copy2(p, backup)
        log.info(f"Backed up: {p} -> {backup}")


def save_output(task, content):
    """Save validated output to the correct path."""
    output_path = task.get("output", "")
    if output_path:
        p = Path(output_path).expanduser()
    else:
        safe_name = re.sub(r"[^\w\s-]", "", task["title"]).strip().replace(" ", "_")
        ext = ".html" if task["type"] == "html" else ".py" if task["type"] == "python" else ".md"
        p = OUTPUT_DIR / "internal" / f"{safe_name}{ext}"

    p.parent.mkdir(parents=True, exist_ok=True)
    backup_file(p)
    p.write_text(content)
    log.info(f"Saved output: {p} ({len(content)} chars)")
    return str(p)


# ── GitHub Push ──────────────────────────────────────────────────────────────
NORRIS_OPS = Path.home() / "norris-ops"


def push_to_github(filepath):
    """Copy built file to ~/norris-ops/ and git push. Returns True on success."""
    src = Path(filepath)
    if not src.exists():
        log.warning(f"push_to_github: source not found: {src}")
        return False
    if not NORRIS_OPS.exists():
        log.warning(f"push_to_github: repo not found at {NORRIS_OPS}")
        return False

    # Determine destination subdirectory from the source path
    src_str = str(src).lower()
    if "/website/" in src_str or "/storefront/" in src_str:
        dest_dir = NORRIS_OPS / "website"
    elif "/internal/" in src_str:
        dest_dir = NORRIS_OPS / "internal"
    elif "/tools/" in src_str:
        dest_dir = NORRIS_OPS / "tools"
    else:
        dest_dir = NORRIS_OPS / "docs"

    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / src.name
    shutil.copy2(src, dest)
    log.info(f"Copied {src.name} -> {dest}")

    try:
        env = os.environ.copy()
        env["PATH"] = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:" + env.get("PATH", "")
        env["HOME"] = str(Path.home())
        git_opts = {"cwd": str(NORRIS_OPS), "capture_output": True, "text": True,
                    "timeout": 30, "env": env}

        subprocess.run(["git", "add", "-A"], **git_opts)
        result = subprocess.run(
            ["git", "commit", "-m", f"Auto-deploy: {src.name}"],
            **git_opts)
        if result.returncode != 0 and "nothing to commit" in result.stdout:
            log.info("push_to_github: nothing new to commit")
            return True

        result = subprocess.run(["git", "push", "origin", "main"], **git_opts)
        if result.returncode == 0:
            log.info(f"push_to_github: pushed {src.name} to GitHub")
            return True
        else:
            error_msg = result.stderr[:200]
            log.error(f"push_to_github: push failed: {error_msg}")
            gh_msg = (
                f"\u26a0\ufe0f SYSTEM \u2014 <b>GitHub push failed</b> for {src.name}\n"
                f"Error: {error_msg}\n"
                f"Fix needed.")
            notify_telegram(gh_msg, override_quiet=True)
            log_message("SYSTEM", "agent_runner_v4.py", gh_msg)
            return False
    except Exception as e:
        log.error(f"push_to_github error: {e}")
        gh_msg = (
            f"\u26a0\ufe0f SYSTEM \u2014 <b>GitHub push failed</b> for {src.name}\n"
            f"Error: {str(e)[:200]}\n"
            f"Fix needed.")
        notify_telegram(gh_msg, override_quiet=True)
        log_message("SYSTEM", "agent_runner_v4.py", gh_msg)
        return False


# ── Journal ──────────────────────────────────────────────────────────────────
def write_journal(entry):
    """Append timestamped entry to today's journal file."""
    today = datetime.now().strftime("%Y-%m-%d")
    jf = JOURNAL_DIR / f"{today}.md"
    ts = datetime.now().strftime("%H:%M:%S")

    if not jf.exists():
        jf.write_text(f"# Agent v4 Journal -- {today}\n\n")

    with open(jf, "a") as f:
        f.write(f"## {ts}\n{entry}\n\n")


# ── Task Processing ──────────────────────────────────────────────────────────
def build_task_prompt(task, learnings=None):
    history_section = ""
    if learnings:
        history_section = build_history_context(learnings)
        if history_section:
            history_section = f"\n\n{history_section}\n"

    return f"""Build the following for Norris Utilities. Return ONLY the complete file content.
Do NOT wrap in markdown fences. Start directly with <!DOCTYPE html> for HTML or #!/usr/bin/env python3 for Python.
{history_section}

TASK: {task['title']}
TYPE: {task['type']}
DESCRIPTION: {task['description']}

Requirements:
- Follow the Line Card design language exactly (gradient header, chevron transition, responsive layout)
- Include Lato font via Google Fonts CDN: @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap')
- Use brand colors: #0000FF primary blue, #06D0FF cyan accent, #000033 dark navy
- Use CSS custom properties: --nu-blue, --nu-cyan, --nu-navy
- Include viewport meta tag: <meta name="viewport" content="width=device-width, initial-scale=1.0">
- No placeholders, no "[TBD]", no lorem ipsum -- use real data from the description
- Registered trademarks (always use the symbol): Norris Utilities\u00ae, A Legacy of Commitment\u00ae, Phoenix Icon\u00ae
- NOT registered (never use \u00ae): FlexPro Armor
- Footer: "A Legacy of Commitment\u00ae" | Aaron C. Norris, Founder & CEO | 205-500-1343 | acnorris@norrisutilities.com
- Self-contained HTML with all CSS in <style> block (only external resource: Google Fonts)
- Professional, polished, customer-ready quality
- CRITICAL: Output the COMPLETE file. MUST end with </html>. Do NOT truncate."""


def process_task(task, context, config, all_tasks):
    """Process a single task through the Claude CLI. Returns True if completed.

    Wraps the entire execution in a TypingIndicator so Aaron always sees
    activity in Telegram while Legacy is working (activates after 10s).
    """
    task_id = task["id"]
    title = task["title"]
    learnings = load_learnings()

    if not check_dependencies(task, all_tasks):
        log.info(f"Task {task_id} has unmet dependencies, skipping")
        return False

    log.info(f"{'=' * 60}")
    log.info(f"Starting Task {task_id}: {title}")
    log.info(f"Priority: {task.get('priority', '?')}, Type: {task.get('type', '?')}")
    update_task_status(task_id, "running")

    # Wrap full task lifecycle in typing indicator
    typing_ctx = TypingIndicator(task_name=title)
    return _process_task_inner(task, context, config, all_tasks, learnings, typing_ctx)


def _process_task_inner(task, context, config, all_tasks, learnings, typing_ctx):
    """Inner task processing, wrapped by the TypingIndicator from process_task."""
    task_id = task["id"]
    title = task["title"]

    # Model selection: Opus for Priority 1, Sonnet for others
    if task.get("priority", 3) == 1:
        model_key = "build_model"
        max_tokens_key = "max_tokens_build"
    else:
        model_key = "routine_model"
        max_tokens_key = "max_tokens_routine"

    prompt = build_task_prompt(task, learnings)

    with typing_ctx:
        response, error = call_claude_cli(
            context, prompt, config, model_key, max_tokens_key,
            task_name=title, _typing_ctx=typing_ctx)

        if error:
            log.error(f"Task {task_id} API error: {error}")
            update_task_status(task_id, "failed", f"API error: {error[:100]}")
            fail_msg = f"\u274c FAILED \u2014 <b>Task {task_id} failed</b>\n{title}\nError: {error[:200]}"
            notify_telegram(fail_msg, config)
            log_message("FAILED", "agent_runner_v4.py", fail_msg)
            write_journal(f"FAILED: {title}\nAPI error: {error[:200]}")
            record_task_result(learnings, task, False, 1, 0, [f"API error: {error[:100]}"])
            return False

        content = extract_code(response, task.get("type", "html"))
        is_valid, errors = validate_output(content, task)

        if is_valid:
            path = save_output(task, content)
            update_task_status(task_id, "done", f"Saved to {path}")
            build_msg = (
                f"\u2705 BUILD \u2014 <b>Task {task_id} complete</b>\n"
                f"\U0001f4cb {title}\n"
                f"\U0001f4cd {path}\n"
                f"\U0001f446 Open in browser: file://{path}")
            notify_telegram(build_msg, config)
            log_message("BUILD", "agent_runner_v4.py", build_msg)
            write_journal(f"COMPLETED: {title}\nSaved to: {path}")
            push_to_github(path)
            log.info(f"Task {task_id} completed successfully")
            record_task_result(learnings, task, True, 1, len(content))
            return True

        # Retry loop with error feedback
        max_fixes = config.get("max_fix_attempts", 3)
        for attempt in range(1, max_fixes + 1):
            log.warning(f"Task {task_id} validation failed (attempt {attempt}/{max_fixes}): {errors}")

            # Check learnings for known fixes
            known_fixes = get_known_fix(learnings, errors)
            fix_hints = ""
            if known_fixes:
                fix_hints = "\n\nKNOWN FIXES FROM PAST BUILDS:\n" + "\n".join(
                    f"- {fix}" for fix in known_fixes)
                log.info(f"Applying {len(known_fixes)} known fix(es) from learnings")

            fix_prompt = f"""The output for "{title}" had validation errors. Fix ALL of them.
Return ONLY the complete corrected file. No markdown fences. Start with <!DOCTYPE html>.
MUST end with </html>. Do NOT truncate.

ERRORS FOUND:
{chr(10).join(f'- {e}' for e in errors)}{fix_hints}

ORIGINAL OUTPUT (first 8000 chars):
{content[:8000]}"""

            response, error = call_claude_cli(
                context, fix_prompt, config, model_key, max_tokens_key,
                task_name=title, _typing_ctx=typing_ctx)
            if error:
                log.error(f"Fix attempt {attempt} API error: {error}")
                continue

            content = extract_code(response, task.get("type", "html"))
            is_valid, errors = validate_output(content, task)

            if is_valid:
                path = save_output(task, content)
                update_task_status(task_id, "done", f"Fixed attempt {attempt}, saved to {path}")
                fix_msg = (
                    f"\u2705 BUILD \u2014 <b>Task {task_id} complete</b> (fix #{attempt})\n"
                    f"\U0001f4cb {title}\n"
                    f"\U0001f4cd {path}\n"
                    f"\U0001f446 Open: file://{path}")
                notify_telegram(fix_msg, config)
                log_message("BUILD", "agent_runner_v4.py", fix_msg)
                write_journal(f"COMPLETED (fix #{attempt}): {title}\nSaved to: {path}")
                push_to_github(path)
                log.info(f"Task {task_id} fixed on attempt {attempt}")
                record_task_result(learnings, task, True, attempt + 1, len(content))
                return True

        # All retries exhausted — record failure
        log.error(f"Task {task_id} failed after {max_fixes} fix attempts: {errors}")
        update_task_status(task_id, "failed", f"Validation failed after {max_fixes} attempts")
        exhaust_msg = (
            f"\u274c FAILED \u2014 <b>Task {task_id} FAILED</b>\n{title}\n"
            f"{max_fixes} fix attempts exhausted\nErrors: {'; '.join(errors[:3])}")
        notify_telegram(exhaust_msg, config)
        log_message("FAILED", "agent_runner_v4.py", exhaust_msg)
        write_journal(f"FAILED: {title}\nErrors after {max_fixes} attempts: {errors}")
        record_task_result(learnings, task, False, max_fixes + 1, len(content), errors[:3])
        # Record new failure patterns
        for err in errors:
            record_failure_pattern(learnings, err)
        return False


# ── Morning Brief ────────────────────────────────────────────────────────────
def send_morning_brief():
    """Send morning brief via Telegram. Overrides quiet hours."""
    config = load_config()
    today = datetime.now().strftime("%Y-%m-%d")
    yesterday = (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")

    # Read recent journal entries
    journal_lines = []
    for date_str in [yesterday, today]:
        jf = JOURNAL_DIR / f"{date_str}.md"
        if jf.exists():
            journal_lines.extend(jf.read_text().splitlines())

    # Parse task queue
    tasks = parse_task_queue()
    done = [t for t in tasks if t["status"] == "done"]
    failed = [t for t in tasks if t["status"] == "failed"]
    running = [t for t in tasks if t["status"] == "running"]
    pending = [t for t in tasks if t["status"] == "pending"]

    # Recent completions from journal
    completed_overnight = []
    for line in journal_lines:
        if "COMPLETED" in line:
            completed_overnight.append(
                line.replace("COMPLETED:", "").replace("COMPLETED", "").strip()[:80])

    brief = (
        f"\u2600\ufe0f BRIEF \u2014 <b>Good morning -- Morning Brief -- {today}</b>\n\n"
        f"\U0001f4ca <b>Task Queue</b>\n"
        f"\u2705 Done: {len(done)} | \u274c Failed: {len(failed)} | "
        f"\U0001f504 Running: {len(running)} | \u23f3 Pending: {len(pending)}\n"
    )

    if completed_overnight:
        brief += "\n\U0001f319 <b>Completed Recently</b>\n"
        for item in completed_overnight[-5:]:
            brief += f"  \u2022 {item}\n"

    if running:
        brief += "\n\U0001f504 <b>In Progress</b>\n"
        for t in running:
            brief += f"  \u2022 Task {t['id']}: {t['title'][:60]}\n"

    if failed:
        brief += f"\n\u26a0\ufe0f <b>Failed -- Needs Attention ({len(failed)})</b>\n"
        for t in sorted(failed, key=lambda x: x["priority"])[:5]:
            brief += f"  \u2022 Task {t['id']} (P{t['priority']}): {t['title'][:50]}\n"

    # Check for reMarkable scans
    for scan_dir in [Path.home() / ".openclaw" / "remarkable",
                     AGENT_DIR / "screenshots"]:
        if scan_dir.exists():
            scans = sorted(scan_dir.glob("*.pdf"), key=lambda p: p.stat().st_mtime, reverse=True)
            if scans:
                brief += f"\n\U0001f4dd <b>reMarkable Scans</b>: {len(scans)} files\n"
                brief += f"  Latest: {scans[0].name}\n"
                break

    brief += "\n\U0001f916 Agent v4 standing by."

    sent = notify_telegram(brief, config, override_quiet=True)
    log_message("BRIEF", "agent_runner_v4.py", brief, sent=sent)
    write_journal(f"Morning brief sent (delivered: {sent})")
    log.info(f"Morning brief {'sent' if sent else 'failed to send'}")
    if sys.stdin and sys.stdin.isatty():
        print(f"Morning brief {'sent' if sent else 'FAILED'}")


# ── EOD Recap ────────────────────────────────────────────────────────────────
def send_eod_recap():
    """Send end-of-day recap via Telegram."""
    config = load_config()
    today = datetime.now().strftime("%Y-%m-%d")

    jf = JOURNAL_DIR / f"{today}.md"
    journal_text = jf.read_text() if jf.exists() else ""

    tasks = parse_task_queue()
    done_today = []
    failed_today = []
    for line in journal_text.splitlines():
        cleaned = line.strip()
        if "COMPLETED" in cleaned:
            done_today.append(cleaned.replace("COMPLETED:", "").replace("COMPLETED", "").strip()[:80])
        elif "FAILED" in cleaned:
            failed_today.append(cleaned.replace("FAILED:", "").replace("FAILED", "").strip()[:80])

    pending = [t for t in tasks if t["status"] == "pending"]
    failed = [t for t in tasks if t["status"] == "failed"]
    done = [t for t in tasks if t["status"] == "done"]

    recap = (
        f"\U0001f319 EOD \u2014 <b>{today}</b>\n\n"
        f"\U0001f4ca <b>Today's Results</b>\n"
        f"\u2705 Built: {len(done_today)} | \u274c Failed: {len(failed_today)}\n"
    )

    if done_today:
        recap += "\n\u2705 <b>Completed Today</b>\n"
        for item in done_today:
            recap += f"  \u2022 {item}\n"

    if pending:
        recap += f"\n\u23f3 <b>Queued ({len(pending)})</b>\n"
        for t in sorted(pending, key=lambda x: x["priority"])[:5]:
            recap += f"  \u2022 Task {t['id']} (P{t['priority']}): {t['title'][:50]}\n"

    if failed:
        recap += f"\n\u26a0\ufe0f <b>Needs Aaron's Attention ({len(failed)})</b>\n"
        for t in sorted(failed, key=lambda x: x["priority"])[:5]:
            recap += f"  \u2022 Task {t['id']}: {t['title'][:50]}\n"

    recap += f"\n\U0001f4c8 <b>Overall: {len(done)}/{len(tasks)} tasks complete</b>"

    sent = notify_telegram(recap, config)
    log_message("EOD", "agent_runner_v4.py", recap, sent=sent)
    write_journal(f"EOD recap sent (delivered: {sent})")
    log.info(f"EOD recap {'sent' if sent else 'failed'}")
    if sys.stdin and sys.stdin.isatty():
        print(f"EOD recap {'sent' if sent else 'FAILED'}")


# ── Retry Failed ─────────────────────────────────────────────────────────────
def retry_failed():
    """Reset all failed tasks to pending for retry."""
    tasks = parse_task_queue()
    failed = [t for t in tasks if t["status"] == "failed"]
    if not failed:
        print("No failed tasks to retry.")
        return 0

    count = 0
    for t in failed:
        update_task_status(t["id"], "pending", "Reset by v4 for retry")
        print(f"  Reset Task {t['id']}: {t['title']}")
        count += 1

    write_journal(f"Reset {count} failed tasks to pending for retry")
    print(f"\nReset {count} tasks. Run --once to process them.")
    return count


# ── Run Cycle ────────────────────────────────────────────────────────────────
def run_cycle(config=None, context=None):
    """Run one processing cycle. Returns number of tasks completed."""
    if config is None:
        config = load_config()
    if context is None:
        context = load_context()

    all_tasks = parse_task_queue()
    pending = [t for t in all_tasks if t["status"] == "pending"]

    if not pending:
        log.info("No pending tasks in queue")
        return 0

    pending.sort(key=lambda t: t["priority"])
    max_per = config.get("max_tasks_per_cycle", 2)
    log.info(f"{len(pending)} pending tasks, processing up to {max_per}")

    completed = 0
    for task in pending[:max_per]:
        if process_task(task, context, config, all_tasks):
            completed += 1
        time.sleep(5)

    log.info(f"Cycle done: {completed}/{min(len(pending), max_per)} completed")
    return completed


# ── Test Functions ───────────────────────────────────────────────────────────
def test_telegram():
    """Send a test Telegram message to verify connection."""
    config = load_config()
    msg = (
        "\U0001f527 SYSTEM \u2014 \U0001f916 <b>Norris Agent v4 -- Test</b>\n"
        "Telegram connection verified.\n"
        f"Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S CT')}\n"
        "Standing by for tasks."
    )
    sent = notify_telegram(msg, config, override_quiet=True)
    log_message("SYSTEM", "agent_runner_v4.py", msg, sent=sent)
    print(f"Telegram test: {'SUCCESS' if sent else 'FAILED'}")
    return sent


def test_one():
    """Process exactly one pending task, then exit."""
    config = load_config()
    context = load_context()

    all_tasks = parse_task_queue()
    pending = [t for t in all_tasks if t["status"] == "pending"]
    pending.sort(key=lambda t: t["priority"])

    if not pending:
        print("No pending tasks. Run with --retry-failed first to reset failed tasks.")
        return False

    task = pending[0]
    print(f"Testing: Task {task['id']}: {task['title']} (P{task['priority']}, Claude CLI)")
    result = process_task(task, context, config, all_tasks)
    print(f"Result: {'SUCCESS' if result else 'FAILED'}")
    if result:
        print(f"Output: {task.get('output', 'see logs')}")
    return result


# ── Main Loop ────────────────────────────────────────────────────────────────
def main_loop():
    """Run continuous build loop with configurable interval."""
    config = load_config()
    context = load_context()
    interval = config.get("interval_seconds", 1800)

    log.info("=" * 60)
    log.info("Norris Utilities Agent Runner v4 starting")
    log.info(f"Engine: Claude Code CLI (Max plan, no API credits)")
    log.info(f"Interval: {interval // 60} minutes")
    log.info("=" * 60)

    online_msg = (
        "\U0001f527 SYSTEM \u2014 \U0001f916 <b>Norris Agent v4 Online</b>\n"
        f"Build loop: every {interval // 60} min\n"
        "Engine: Claude Code CLI (Max plan)\n"
        "Processing task queue.")
    notify_telegram(online_msg, config)
    log_message("SYSTEM", "agent_runner_v4.py", online_msg)
    write_journal("Agent v4 started. Autonomous build loop running.")

    while True:
        try:
            config = load_config()
            context = load_context()
            run_cycle(config, context)
        except KeyboardInterrupt:
            log.info("Agent stopped by user (Ctrl+C)")
            break
        except Exception as e:
            log.error(f"Cycle error: {e}", exc_info=True)
            err_msg = f"\u26a0\ufe0f SYSTEM \u2014 <b>Agent v4 error</b>\n{str(e)[:300]}"
            notify_telegram(err_msg, config)
            log_message("SYSTEM", "agent_runner_v4.py", err_msg)

        log.info(f"Sleeping {interval // 60} minutes...")
        time.sleep(interval)


# ── Entry Point ──────────────────────────────────────────────────────────────
if __name__ == "__main__":
    if "--feedback" in sys.argv:
        idx = sys.argv.index("--feedback")
        if idx + 1 < len(sys.argv):
            add_aaron_feedback(sys.argv[idx + 1])
        else:
            print("Usage: python3 agent_runner_v4.py --feedback \"Your feedback here\"")
            sys.exit(1)
    elif "--brief" in sys.argv:
        send_morning_brief()
    elif "--eod" in sys.argv:
        send_eod_recap()
    elif "--retry-failed" in sys.argv:
        retry_failed()
    elif "--test-telegram" in sys.argv:
        test_telegram()
    elif "--test-one" in sys.argv:
        test_one()
    elif "--once" in sys.argv:
        run_cycle()
    else:
        main_loop()
