#!/bin/bash
HOUR=$(date +%-H); if [ "$HOUR" -ge 21 ] || [ "$HOUR" -lt 4 ]; then exit 0; fi
# PORTAL QUALITY AUDIT — Runs after every push or on schedule
# Checks for known issues, brand violations, data integrity, auth presence

REPO=~/norris-ops
LOG=~/norris-agent/audit_results.json
ISSUES=0
DETAILS=""

timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# --- BRAND CHECKS ---
# FlexPro Armor® violation (® should never appear after FlexPro Armor)
fa_violations=$(grep -rn "FlexPro Armor®" "$REPO"/*.html "$REPO"/internal/*.html "$REPO"/website/*.html 2>/dev/null | grep -v "node_modules" | wc -l | tr -d ' ')
if [ "$fa_violations" -gt 0 ]; then
  ISSUES=$((ISSUES + fa_violations))
  DETAILS="$DETAILS, \"FlexPro Armor® violation: $fa_violations files\""
fi

# FlexPro Armor Guard violation (exclude lines that describe the rule itself)
guard_violations=$(grep -rin "FlexPro Armor Guard" "$REPO" --include="*.html" 2>/dev/null | grep -vi "corrects to\|catches\|prevents\|never.*called\|improvement_log\|changelog" | wc -l | tr -d ' ')
if [ "$guard_violations" -gt 0 ]; then
  ISSUES=$((ISSUES + guard_violations))
  DETAILS="$DETAILS, \"FlexPro Armor Guard violation: $guard_violations instances\""
fi

# --- DEAD DEAL CHECK ---
gridco=$(grep -rin "Gridco\|Shon Cunningham" "$REPO" --include="*.html" 2>/dev/null | grep -vi "DEAD\|dead\|removed\|closed\|archived\|improvement_log\|changelog\|tracking" | wc -l | tr -d ' ')
if [ "$gridco" -gt 0 ]; then
  ISSUES=$((ISSUES + 1))
  DETAILS="$DETAILS, \"Gridco/Cunningham still referenced in $gridco places\""
fi

# --- AUTH CHECKS ---
# Check that all internal pages have auth
for f in "$REPO"/internal/*.html; do
  if [ -f "$f" ]; then
    has_auth=$(grep -c "nu_auth_2026\|nu_auth\|portal-auth\|loginOverlay\|login-overlay\|auth\.js" "$f" | tr -d ' ')
    if [ "$has_auth" -eq 0 ]; then
      ISSUES=$((ISSUES + 1))
      fname=$(basename "$f")
      DETAILS="$DETAILS, \"Missing auth: internal/$fname\""
    fi
  fi
done

# Check aaron-only pages don't accept legacy2026
for f in "$REPO"/aaron.html "$REPO"/internal/portal_notes.html "$REPO"/internal/telegram_log.html "$REPO"/internal/email_dashboard.html "$REPO"/internal/samson_dashboard.html "$REPO"/internal/remarkable_dashboard.html "$REPO"/msp-orders.html; do
  if [ -f "$f" ]; then
    accepts_cb=$(grep -c "legacy2026" "$f" | tr -d ' ')
    if [ "$accepts_cb" -gt 0 ]; then
      fname=$(basename "$f")
      ISSUES=$((ISSUES + 1))
      DETAILS="$DETAILS, \"Aaron-only page accepts CB password: $fname\""
    fi
  fi
done

# --- PLACEHOLDER CHECK ---
placeholders=$(grep -rn "\[TBD\]\|\[INSERT\]\|\[YOUR_\]\|\[PLACEHOLDER\]\|\[TODO\]" "$REPO" --include="*.html" 2>/dev/null | wc -l | tr -d ' ')
if [ "$placeholders" -gt 0 ]; then
  ISSUES=$((ISSUES + placeholders))
  DETAILS="$DETAILS, \"Placeholder text found: $placeholders instances\""
fi

# --- GOOGLE FONTS CHECK ---
missing_fonts=0
missing_fonts_list=""
for f in "$REPO"/index.html "$REPO"/aaron.html "$REPO"/team.html "$REPO"/cb-dashboard.html "$REPO"/team-live.html; do
  if [ -f "$f" ]; then
    has_fonts=$(grep -c "fonts.googleapis.com.*Lato" "$f" | tr -d ' ')
    if [ "$has_fonts" -eq 0 ]; then
      missing_fonts=$((missing_fonts + 1))
      fname=$(basename "$f")
      missing_fonts_list="$missing_fonts_list $fname"
    fi
  fi
done
if [ "$missing_fonts" -gt 0 ]; then
  ISSUES=$((ISSUES + missing_fonts))
  DETAILS="$DETAILS, \"Missing Google Fonts CDN:$missing_fonts_list\""
fi

# --- CELEBRATION CHECK ---
celebrations=$(grep -c "confetti\|fireworks\|phoenix.*rise\|celebration" "$REPO"/index.html 2>/dev/null | tr -d ' ')
if [ "$celebrations" -lt 2 ]; then
  ISSUES=$((ISSUES + 1))
  DETAILS="$DETAILS, \"Celebrations code may be missing or broken\""
fi

# --- ORDER COUNT CHECK ---
# Shipments tab is now dynamic (loads from shipping_docs.json via JS).
# Check the JSON manifest instead of hardcoded HTML.
if [ -f "$REPO/data/shipping_docs.json" ]; then
  order_cards=$(python3 -c "import json; d=json.load(open('$REPO/data/shipping_docs.json')); print(len([x for x in d['documents'] if x.get('status') != 'demo']))" 2>/dev/null || echo "0")
  dynamic_loader=$(grep -c "shipping_docs.json" "$REPO"/index.html 2>/dev/null | tr -d ' ')
  if [ "$dynamic_loader" -eq 0 ] && [ "$order_cards" -lt 9 ]; then
    ISSUES=$((ISSUES + 1))
    DETAILS="$DETAILS, \"Only $order_cards orders in shipping_docs.json (expected 9+) and no dynamic loader\""
  fi
else
  ISSUES=$((ISSUES + 1))
  DETAILS="$DETAILS, \"shipping_docs.json not found — shipments tab has no data source\""
fi

# --- WRITE LOG ---
DETAILS=$(echo "$DETAILS" | sed 's/^, //')
cat > "$LOG" << LOGEOF
{
  "timestamp": "$timestamp",
  "issues_found": $ISSUES,
  "details": [$DETAILS],
  "status": "$([ $ISSUES -eq 0 ] && echo 'CLEAN' || echo 'ISSUES_FOUND')"
}
LOGEOF

echo "Audit complete: $ISSUES issues found"
cat "$LOG"

# --- TELEGRAM ALERT IF ISSUES ---
if [ "$ISSUES" -gt 0 ]; then
  # Load token from .env files
  BOT_TOKEN=""
  CHAT_ID=""
  for envfile in ~/norris-agent/.env ~/.openclaw/.env; do
    if [ -f "$envfile" ]; then
      [ -z "$BOT_TOKEN" ] && BOT_TOKEN=$(grep '^TELEGRAM_BOT_TOKEN=' "$envfile" 2>/dev/null | cut -d= -f2 | tr -d ' ')
      [ -z "$CHAT_ID" ] && CHAT_ID=$(grep '^TELEGRAM_CHAT_ID=' "$envfile" 2>/dev/null | cut -d= -f2 | tr -d ' ')
    fi
  done
  if [ -n "$BOT_TOKEN" ] && [ -n "$CHAT_ID" ]; then
    MSG=$(printf "⚠️ PORTAL AUDIT: %d issues found\n%s" "$ISSUES" "$(echo "$DETAILS" | sed 's/", "/\n• /g; s/"//g')")
    curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
      -H "Content-Type: application/json" \
      -d "{\"chat_id\":\"${CHAT_ID}\",\"text\":$(printf '%s' "$MSG" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')}" \
      >/dev/null 2>&1
  fi
else
  echo "✅ Audit passed — no issues found"
fi

# --- AUTO-FIX CHAIN ---
if [ $ISSUES -gt 0 ]; then
  echo "Issues found — running auto-fix..."
  ~/norris-agent/scripts/portal_autofix.sh
  echo "Re-checking after auto-fix..."
  remaining_fa=$(grep -rn "FlexPro Armor®" "$REPO"/*.html "$REPO"/internal/*.html 2>/dev/null | wc -l | tr -d ' ')
  remaining_ent=$(grep -rn 'FlexPro Armor&reg;' "$REPO"/*.html "$REPO"/internal/*.html 2>/dev/null | wc -l | tr -d ' ')
  remaining_guard=$(grep -rin "FlexPro Armor Guard" "$REPO" --include="*.html" 2>/dev/null | wc -l | tr -d ' ')
  remaining=$((remaining_fa + remaining_ent + remaining_guard))
  if [ "$remaining" -eq 0 ]; then
    echo "✅ All auto-fixable issues resolved"
  else
    echo "⚠️ $remaining issues remain after auto-fix — needs manual review"
  fi
fi

exit $ISSUES
