═══════════════════════════════════════════════════════════════════════════════
PHASE B V2.2 PATCH — §M.1 GMAIL VIA GOG CLI (REPLACES google-api-python-client)
2026-04-24, Birmingham AL, Aaron C. Norris via Claude Opus 4.7 M5 Session 10
═══════════════════════════════════════════════════════════════════════════════

EXTENDS: PHASE_B_V2.2_SPEC_EXTENSION.md (979 lines, primary V2.2 spec)
APPLIES TO: §0.10 (pre-flight Gmail check), §M.1 (Gmail OAuth wire),
            §M.2 (invoice watcher), §M.3 (UPS delivery watcher),
            §M.4 (PDF download), §M.8 (rate limit handling),
            §10.12 (Gmail auth canary)

REASON FOR PATCH: Aaron's M1 has `gog` (gogcli v0.12.0) installed via
Homebrew (steipete/tap/gogcli), already authenticated for
acnorris@norrisutilities.com, used by Legacy's bridge. Reusing gog means
zero new OAuth flow, single auth surface, no risk to Legacy's bridge,
~5 min CC build vs ~1 hr google-api-python-client + OAuth wiring.

OpenClaw skill at ~/.openclaw/workspace/skills/jx76-gog/SKILL.md
documents command patterns. CC reads it as reference.

═══════════════════════════════════════════════════════════════════════════════
§0.10 REPLACEMENT — gog-based pre-flight (replaces credential file search)
═══════════════════════════════════════════════════════════════════════════════

Run after pip install (§0.8) but before §1:

  # Verify gog binary present
  command -v gog >/dev/null 2>&1 || {
    echo "HALT §0.10: gog binary not on PATH"
    echo "Aaron action: brew install steipete/tap/gogcli"
    exit 1
  }
  GOG_VERSION=$(gog --version 2>&1 | head -1)
  echo "gog: $GOG_VERSION"

  # Verify auth for the NU account
  AUTH_LIST=$(gog auth list 2>&1)
  if ! echo "$AUTH_LIST" | grep -qi "acnorris@norrisutilities.com"; then
    echo "HALT §0.10: gog has no auth for acnorris@norrisutilities.com"
    echo "Current gog auth list:"
    echo "$AUTH_LIST"
    echo "Aaron action: gog auth add acnorris@norrisutilities.com --services gmail"
    exit 1
  fi
  echo "gog auth: PRESENT for acnorris@norrisutilities.com"

  # Live test query (proves auth works end-to-end)
  TEST=$(GOG_ACCOUNT=acnorris@norrisutilities.com \
    gog gmail search 'from:quickbooks@notification.intuit.com' \
    --max 1 --json --no-input 2>&1)
  if [ $? -ne 0 ]; then
    echo "HALT §0.10: gog live query failed"
    echo "$TEST"
    exit 1
  fi
  if ! echo "$TEST" | python3 -c "
  import sys, json
  data = json.load(sys.stdin)
  threads = data if isinstance(data, list) else data.get('threads', data.get('messages', []))
  assert threads, 'Live query returned empty'
  " 2>/dev/null; then
    echo "HALT §0.10: gog live query returned empty result set"
    exit 1
  fi
  echo "gog live test: PASS (Gmail reachable for NU account)"

  # Persist gog config for §M.1 to use
  cat > ~/norris-agent/.gmail_paths << EOF
  GMAIL_BACKEND=gog
  GMAIL_BINARY=$(command -v gog)
  GMAIL_ACCOUNT=acnorris@norrisutilities.com
  GMAIL_VERSION=$GOG_VERSION
  EOF
  echo "Gmail backend: gog | Account: acnorris@norrisutilities.com"

═══════════════════════════════════════════════════════════════════════════════
§M.1 REPLACEMENT — lib/gmail_client.py as gog subprocess wrapper
═══════════════════════════════════════════════════════════════════════════════

Build lib/gmail_client.py as a thin subprocess wrapper around gog. NO
google-api-python-client. NO OAuth flow. NO credentials.json/token.json.
gog handles all of it.

Required interface (callers in §M.2, §M.3 must use these methods):

  class GmailClient:
      def __init__(self, account='acnorris@norrisutilities.com'):
          self.account = account
          self.binary = '/opt/homebrew/bin/gog'
          # Verify on init (cheap)
          self._verify()

      def _verify(self):
          """Run a no-op auth check; raise GmailAuthError if fails."""
          # Check ~/norris-agent/.gmail_paths exists and points to gog

      def _run(self, args, timeout=30, input_data=None):
          """Internal subprocess runner. Always sets GOG_ACCOUNT env,
          always passes --json --no-input. Handles non-zero exit by
          raising GmailError with stderr captured. Applies tenacity
          backoff: 3 retries with 1s, 2s, 4s on transient failures
          (network errors, 5xx). Does NOT retry on 4xx (auth, bad
          query) — those raise immediately."""

      def search(self, query, max_results=20):
          """Returns list of {id, threadId, subject, sender, date, snippet}.
          Maps to: gog gmail search '<query>' --max <N> --json"""

      def get_message(self, message_id, format='full'):
          """Returns full message dict including payload.parts which
          contains attachment metadata (attachmentId, filename, mimeType, size).
          Maps to: gog gmail get <messageId> --format <format> --json"""

      def download_attachment(self, message_id, attachment_id, dest_path):
          """Downloads attachment bytes to dest_path. Validates first 5
          bytes are %PDF- if dest_path ends in .pdf. Returns {path, size}.
          Maps to: gog gmail attachment <messageId> <attachmentId> > dest_path"""

      def mark_processed(self, message_id, label='SA-Processed'):
          """Adds label to message. Creates label first if not exists.
          Maps to: gog gmail messages modify <messageId> --add-labels <label>
          (CC: verify exact flag name from `gog gmail messages modify --help`
          during build — likely --add-label or --label-add)"""

      def quota_check(self):
          """Best-effort daily quota tracking by counting subprocess
          calls in ~/norris-agent/data/gog_quota.jsonl. Warning at
          75% of self-imposed soft limit (1000 calls/day default,
          configurable). Hard quota errors from gog raise GmailQuotaError."""

  class GmailError(Exception): pass
  class GmailAuthError(GmailError): pass
  class GmailQuotaError(GmailError): pass

Key implementation notes:
  - Always set env GOG_ACCOUNT=acnorris@norrisutilities.com per call
    (defense against shell env pollution)
  - Always use --json --no-input
  - Use subprocess.run with capture_output=True, timeout=N, check=False
  - Parse stdout as JSON; if parse fails, raise with raw stdout for diagnosis
  - Log every call to ~/norris-agent/logs/gmail_client.log with: timestamp,
    method, args (redacted if message body), exit code, duration_ms
  - tenacity decorators on _run for retry; max 3 attempts; respect
    Aaron's tier of "fail loud, never silent" per R-META-2
  - DO NOT pipe attachment bytes through Python string buffers — write
    to file with subprocess stdout=open(dest_path, 'wb') to handle
    large PDFs correctly

CC: Read ~/.openclaw/workspace/skills/jx76-gog/SKILL.md before writing
gmail_client.py. The skill documents conventions Legacy uses.

═══════════════════════════════════════════════════════════════════════════════
§M.2 PATCH — invoice watcher uses gog wrapper
═══════════════════════════════════════════════════════════════════════════════

Pipeline updates (§M.2 step references in primary V2.2 spec):

Step 1 (search):
  results = gmail.search(
      'from:quickbooks@notification.intuit.com '
      'subject:"from Norris Utilities, LLC" '
      'has:attachment',
      max_results=50
  )

Step 2 (get + download):
  for msg_summary in results:
      msg = gmail.get_message(msg_summary['id'])
      # Find PDF attachment in msg['payload']['parts']
      pdf_part = next((p for p in msg.get('payload', {}).get('parts', [])
                       if p.get('mimeType') == 'application/pdf'), None)
      if not pdf_part:
          log.warn(f"No PDF in message {msg_summary['id']}")
          continue
      dest = invoices_dir / f"{invoice_num}_{cust_short}_{date}.pdf"
      gmail.download_attachment(
          msg_summary['id'],
          pdf_part['body']['attachmentId'],
          dest
      )

Step 9 (mark processed):
  gmail.mark_processed(msg_summary['id'], label='SA-Processed')

Step 10 (idempotency):
  Before processing any message, query:
    has_label = 'SA-Processed' in [l['name'] for l in
                msg.get('labelIds', [])]
  Skip if true (dedup guard against state file loss).

═══════════════════════════════════════════════════════════════════════════════
§M.3 PATCH — UPS delivery watcher uses gog wrapper
═══════════════════════════════════════════════════════════════════════════════

Same pattern as §M.2:
  results = gmail.search(
      '(from:pkginfo@ups.com OR from:mcinfo@ups.com '
      'OR from:auto-notify@ups.com OR from:quantumview@ups.com) '
      '(subject:delivered OR subject:"Delivery Notification")',
      max_results=50
  )

UPS emails typically have plain text body (no PDF). Use:
  msg = gmail.get_message(msg_summary['id'])
  body_text = extract_text_body(msg)  # walk payload.parts for text/plain
  tracking = re.search(r'1Z[A-Z0-9]{16}', body_text)

Mark processed via gmail.mark_processed(id, label='SA-Delivery-Processed').

═══════════════════════════════════════════════════════════════════════════════
§M.4 PATCH — PDF download wired to gog attachment
═══════════════════════════════════════════════════════════════════════════════

Already covered in §M.1 download_attachment method. CC writes a small
wrapper in lib/pdf_handler.py for filename normalization + magic byte
validation + symlink to /internal/invoices/{NNNN}.pdf for portal serving.

═══════════════════════════════════════════════════════════════════════════════
§M.8 PATCH — rate limit handling adapted for gog
═══════════════════════════════════════════════════════════════════════════════

gog handles Gmail API rate limits internally (token refresh, quota), but
adds its own subprocess overhead. New limits:
  - Soft cap: 1000 gog calls/day (configurable via env GMAIL_DAILY_CAP)
  - Counted in ~/norris-agent/data/gog_quota.jsonl with daily rollover
    at 4:00 AM CT
  - Tier 2 Telegram at 75% consumption
  - Tier 1 Telegram at 95%
  - Hard stop at 100% — pause invoice-watcher LaunchAgent for 1 hr,
    then resume

Backoff strategy via tenacity:
  - Retry on: subprocess.TimeoutExpired, gog exit code 1 with stderr
    matching r'(timeout|connection|temporary)'
  - Do NOT retry on: gog exit code 1 with stderr matching
    r'(unauthorized|forbidden|invalid)' — those raise GmailAuthError
    immediately and HALT the watcher with Tier 1 ping

═══════════════════════════════════════════════════════════════════════════════
§10.12 PATCH — Gmail auth canary uses gog
═══════════════════════════════════════════════════════════════════════════════

Replace the python google-api canary with:

  python3 -c "
  from norris_agent.lib.gmail_client import GmailClient
  gc = GmailClient()
  results = gc.search('from:quickbooks@notification.intuit.com', max_results=1)
  assert len(results) >= 1, 'gog Gmail search returned empty'
  msg = gc.get_message(results[0]['id'])
  assert msg.get('id') == results[0]['id'], 'get_message id mismatch'
  print('GOG GMAIL AUTH CANARY PASS')
  "

═══════════════════════════════════════════════════════════════════════════════
§0.8 PATCH — drop google libraries from pip install
═══════════════════════════════════════════════════════════════════════════════

Updated pip install list (remove google-auth, google-auth-oauthlib,
google-api-python-client — gog replaces them):

  pip install --quiet pandas pypdf filelock pytz tenacity python-dateutil

═══════════════════════════════════════════════════════════════════════════════
§0a.0 NEW — pre-create SA-Processed and SA-Delivery-Processed labels
═══════════════════════════════════════════════════════════════════════════════

Run during §0a migration (before §0a.1 Henkels fix).

CONFIRMED gog v0.12.0 syntax (Aaron verified 2026-04-24):
  Usage: gog gmail labels create <name>
  <name> is a POSITIONAL argument, NOT a --name flag.

  for LABEL in SA-Processed SA-Delivery-Processed; do
    EXISTS=$(gog -a acnorris@norrisutilities.com gmail labels list --json --no-input \
      | python3 -c "
  import sys, json
  data = json.load(sys.stdin)
  labels = data if isinstance(data, list) else data.get('labels', [])
  print('YES' if any(l.get('name') == '$LABEL' for l in labels) else 'NO')
  ")
    if [ "$EXISTS" = "NO" ]; then
      gog -a acnorris@norrisutilities.com gmail labels create "$LABEL" \
        --no-input -y
      echo "Created Gmail label: $LABEL"
    else
      echo "Gmail label exists: $LABEL"
    fi
  done

For all other gog subcommands where exact flag syntax matters (notably
`gog gmail messages modify` for adding labels to ingested messages in
§M.2 step 9), CC MUST run `<subcommand> --help` BEFORE writing the
calling code in lib/gmail_client.py. No assumptions. The OpenClaw skill
at ~/.openclaw/workspace/skills/jx76-gog/SKILL.md plus live --help
output are the only authoritative sources for syntax.

═══════════════════════════════════════════════════════════════════════════════
EVERYTHING ELSE IN V2.2 STANDS
═══════════════════════════════════════════════════════════════════════════════

All other sections of PHASE_B_V2.2_SPEC_EXTENSION.md apply unchanged:
  §0.0 backup + rollback
  §0a + §0a.1 V1→V2.2 migration + Henkels fix
  §M.5 + §M.5b FlexPro filter + review queue
  §M.6 Inv. # link
  §M.7 celebrate
  §M.9 time zone
  §M.10 Aaron force ingest
  §M.11 Telegram routing
  §S sounds
  §R lightweight customer reply
  §8 fixtures
  §10 canaries (10.11, 10.13-10.19 unchanged; only 10.12 patched above)
  §11 click-test
  §13 HALT discipline
  V3 deferred (still 3 items)

Build estimate adjusted: 14-22 hr (was 16-24 hr — gog wrapper is
faster to build than google-api-python-client setup).

═══════════════════════════════════════════════════════════════════════════════
END §M.1 GOG PATCH
Aaron C. Norris | 2026-04-24 morning CT | Birmingham, AL
═══════════════════════════════════════════════════════════════════════════════
