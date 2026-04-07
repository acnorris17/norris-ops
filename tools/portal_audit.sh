#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# Norris Utilities® Portal Audit Script
# Runs after every push to norris-ops.
# Checks every HTML file for brand, security, and quality violations.
# Sends a Telegram summary with issue count.
# ─────────────────────────────────────────────────────────────
set -euo pipefail

PORTAL_DIR="${PORTAL_DIR:-$HOME/norris-ops}"
AGENT_DIR="${AGENT_DIR:-$HOME/norris-agent}"
LOG_DIR="$AGENT_DIR/logs"
mkdir -p "$LOG_DIR"

AUDIT_LOG="$LOG_DIR/portal_audit_$(date +%Y-%m-%d_%H%M%S).log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# ── Telegram credentials ──────────────────────────────────────
load_telegram_creds() {
  local env_file
  for env_file in "$AGENT_DIR/.env" "$HOME/.openclaw/.env"; do
    if [[ -f "$env_file" ]]; then
      TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-$(grep '^TELEGRAM_BOT_TOKEN=' "$env_file" 2>/dev/null | cut -d= -f2 | tr -d ' ')}"
      TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-$(grep '^TELEGRAM_CHAT_ID=' "$env_file" 2>/dev/null | cut -d= -f2 | tr -d ' ')}"
    fi
  done
}

send_telegram() {
  local msg="$1"
  if [[ -z "${TELEGRAM_BOT_TOKEN:-}" || -z "${TELEGRAM_CHAT_ID:-}" ]]; then
    echo "[WARN] No Telegram credentials — skipping notification" | tee -a "$AUDIT_LOG"
    return 1
  fi
  curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    -H "Content-Type: application/json" \
    -d "{\"chat_id\":\"${TELEGRAM_CHAT_ID}\",\"text\":$(echo "$msg" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))'),\"parse_mode\":\"HTML\"}" \
    >/dev/null 2>&1
}

load_telegram_creds

# ── Collect all HTML files ─────────────────────────────────────
HTML_FILES=()
while IFS= read -r line; do
  HTML_FILES+=("$line")
done < <(find "$PORTAL_DIR" -name '*.html' -not -path '*/.git/*' -not -path '*/.claude/*' -not -path '*/node_modules/*' 2>/dev/null | sort)
FILE_COUNT=${#HTML_FILES[@]}

echo "Portal Audit — $TIMESTAMP" | tee "$AUDIT_LOG"
echo "Scanning $FILE_COUNT HTML files in $PORTAL_DIR" | tee -a "$AUDIT_LOG"
echo "────────────────────────────────────────────" | tee -a "$AUDIT_LOG"

TOTAL_ISSUES=0
ISSUE_DETAILS=""

# ── Check 1: Google Fonts CDN present ─────────────────────────
echo "" | tee -a "$AUDIT_LOG"
echo "CHECK 1: Google Fonts CDN" | tee -a "$AUDIT_LOG"
FONTS_MISSING=0
FONTS_FILES=""
for f in "${HTML_FILES[@]}"; do
  # Skip tiny files (<500 bytes — likely not real pages)
  [[ $(wc -c < "$f") -lt 500 ]] && continue
  # Skip files that are just redirects or fragments
  if ! grep -q '<head' "$f" 2>/dev/null; then continue; fi
  if ! grep -q 'fonts.googleapis.com.*Lato\|Lato.*fonts.googleapis' "$f" 2>/dev/null; then
    rel=$(echo "$f" | sed "s|$PORTAL_DIR/||")
    FONTS_FILES="${FONTS_FILES}  - ${rel}\n"
    ((FONTS_MISSING++)) || true
  fi
done
if [[ $FONTS_MISSING -gt 0 ]]; then
  echo "  FAIL: $FONTS_MISSING files missing Google Fonts (Lato)" | tee -a "$AUDIT_LOG"
  echo -e "$FONTS_FILES" | tee -a "$AUDIT_LOG"
  ((TOTAL_ISSUES += FONTS_MISSING)) || true
  ISSUE_DETAILS="${ISSUE_DETAILS}• ${FONTS_MISSING} files missing Google Fonts\n"
else
  echo "  PASS: All pages include Google Fonts" | tee -a "$AUDIT_LOG"
fi

# ── Check 2: FlexPro Armor® violations ──────────────────────
echo "" | tee -a "$AUDIT_LOG"
echo "CHECK 2: FlexPro Armor® brand violations" | tee -a "$AUDIT_LOG"
FLEXPRO_ISSUES=0
FLEXPRO_FILES=""
for f in "${HTML_FILES[@]}"; do
  # "FlexPro Armor Guard" is NEVER correct
  count=$(grep -ci 'FlexPro Armor Guard\|FlexPro Guard' "$f" 2>/dev/null | head -1 || echo 0)
  count=$(echo "$count" | tr -d '[:space:]')
  [[ -z "$count" ]] && count=0
  if [[ "$count" -gt 0 ]]; then
    rel=$(echo "$f" | sed "s|$PORTAL_DIR/||")
    FLEXPRO_FILES="${FLEXPRO_FILES}  - ${rel} (${count} violations)\n"
    ((FLEXPRO_ISSUES += count)) || true
  fi
done
if [[ $FLEXPRO_ISSUES -gt 0 ]]; then
  echo "  FAIL: $FLEXPRO_ISSUES 'FlexPro Armor Guard' violations" | tee -a "$AUDIT_LOG"
  echo -e "$FLEXPRO_FILES" | tee -a "$AUDIT_LOG"
  ((TOTAL_ISSUES += FLEXPRO_ISSUES)) || true
  ISSUE_DETAILS="${ISSUE_DETAILS}• ${FLEXPRO_ISSUES} FlexPro Armor Guard violations\n"
else
  echo "  PASS: No FlexPro brand violations" | tee -a "$AUDIT_LOG"
fi

# ── Check 3: Placeholder text ────────────────────────────────
echo "" | tee -a "$AUDIT_LOG"
echo "CHECK 3: Placeholder text ([TBD], lorem ipsum)" | tee -a "$AUDIT_LOG"
PLACEHOLDER_ISSUES=0
PLACEHOLDER_FILES=""
for f in "${HTML_FILES[@]}"; do
  # Match [TBD] or lorem ipsum, but NOT placeholder="..." HTML attributes
  count=$(grep -ci '\[TBD\]\|lorem ipsum' "$f" 2>/dev/null | head -1 || echo 0)
  count=$(echo "$count" | tr -d '[:space:]')
  [[ -z "$count" ]] && count=0
  if [[ "$count" -gt 0 ]]; then
    rel=$(echo "$f" | sed "s|$PORTAL_DIR/||")
    PLACEHOLDER_FILES="${PLACEHOLDER_FILES}  - ${rel} (${count} placeholders)\n"
    ((PLACEHOLDER_ISSUES += count)) || true
  fi
done
if [[ $PLACEHOLDER_ISSUES -gt 0 ]]; then
  echo "  FAIL: $PLACEHOLDER_ISSUES placeholder text instances" | tee -a "$AUDIT_LOG"
  echo -e "$PLACEHOLDER_FILES" | tee -a "$AUDIT_LOG"
  ((TOTAL_ISSUES += PLACEHOLDER_ISSUES)) || true
  ISSUE_DETAILS="${ISSUE_DETAILS}• ${PLACEHOLDER_ISSUES} placeholder text instances\n"
else
  echo "  PASS: No placeholder text found" | tee -a "$AUDIT_LOG"
fi

# ── Check 4: Auth gate on internal pages ─────────────────────
echo "" | tee -a "$AUDIT_LOG"
echo "CHECK 4: Auth gate on internal pages" | tee -a "$AUDIT_LOG"
AUTH_MISSING=0
AUTH_FILES=""
INTERNAL_DIR="$PORTAL_DIR/internal"
if [[ -d "$INTERNAL_DIR" ]]; then
  for f in "$INTERNAL_DIR"/*.html; do
    [[ -f "$f" ]] || continue
    [[ $(wc -c < "$f") -lt 500 ]] && continue
    if ! grep -q 'loginOverlay\|login-overlay\|nu_auth\|portal-auth\|auth\.js' "$f" 2>/dev/null; then
      rel=$(echo "$f" | sed "s|$PORTAL_DIR/||")
      AUTH_FILES="${AUTH_FILES}  - ${rel}\n"
      ((AUTH_MISSING++)) || true
    fi
  done
fi
if [[ $AUTH_MISSING -gt 0 ]]; then
  echo "  FAIL: $AUTH_MISSING internal pages missing auth gate" | tee -a "$AUDIT_LOG"
  echo -e "$AUTH_FILES" | tee -a "$AUDIT_LOG"
  ((TOTAL_ISSUES += AUTH_MISSING)) || true
  ISSUE_DETAILS="${ISSUE_DETAILS}• ${AUTH_MISSING} internal pages missing auth\n"
else
  echo "  PASS: All internal pages have auth gates" | tee -a "$AUDIT_LOG"
fi

# ── Check 5: Ghost phoenix watermark on key pages ────────────
echo "" | tee -a "$AUDIT_LOG"
echo "CHECK 5: Ghost phoenix watermark on key pages" | tee -a "$AUDIT_LOG"
WATERMARK_MISSING=0
WATERMARK_FILES=""
KEY_PAGES=("index.html" "team-live.html" "cb-dashboard.html" "aaron.html")
for page in "${KEY_PAGES[@]}"; do
  f="$PORTAL_DIR/$page"
  [[ -f "$f" ]] || continue
  if ! grep -q 'header-watermark\|watermark\|opacity.*0\.07\|logo-white' "$f" 2>/dev/null; then
    WATERMARK_FILES="${WATERMARK_FILES}  - ${page}\n"
    ((WATERMARK_MISSING++)) || true
  fi
done
if [[ $WATERMARK_MISSING -gt 0 ]]; then
  echo "  FAIL: $WATERMARK_MISSING key pages missing ghost watermark" | tee -a "$AUDIT_LOG"
  echo -e "$WATERMARK_FILES" | tee -a "$AUDIT_LOG"
  ((TOTAL_ISSUES += WATERMARK_MISSING)) || true
  ISSUE_DETAILS="${ISSUE_DETAILS}• ${WATERMARK_MISSING} key pages missing watermark\n"
else
  echo "  PASS: Key pages have ghost watermark" | tee -a "$AUDIT_LOG"
fi

# ── Summary ───────────────────────────────────────────────────
echo "" | tee -a "$AUDIT_LOG"
echo "════════════════════════════════════════════" | tee -a "$AUDIT_LOG"
if [[ $TOTAL_ISSUES -eq 0 ]]; then
  echo "RESULT: ALL CHECKS PASSED ($FILE_COUNT files scanned)" | tee -a "$AUDIT_LOG"
else
  echo "RESULT: $TOTAL_ISSUES ISSUES FOUND ($FILE_COUNT files scanned)" | tee -a "$AUDIT_LOG"
fi
echo "Log: $AUDIT_LOG" | tee -a "$AUDIT_LOG"

# ── Telegram notification ─────────────────────────────────────
if [[ $TOTAL_ISSUES -eq 0 ]]; then
  TG_MSG="✅ AUDIT — Portal scan complete
${FILE_COUNT} files scanned — 0 issues found

All checks passed:
• Google Fonts CDN ✓
• FlexPro Armor® branding ✓
• No placeholder text ✓
• Auth gates on internal pages ✓
• Ghost watermark on key pages ✓

${TIMESTAMP}"
else
  TG_MSG="⚠️ AUDIT — ${TOTAL_ISSUES} issues found
${FILE_COUNT} files scanned

$(echo -e "$ISSUE_DETAILS")
Run: ~/norris-agent/scripts/portal_audit.sh
Log: ${AUDIT_LOG}

${TIMESTAMP}"
fi

send_telegram "$TG_MSG"
echo ""
echo "Telegram notification sent."
exit 0
