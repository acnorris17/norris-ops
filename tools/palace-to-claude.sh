#!/bin/bash
# ─────────────────────────────────────────────────────────
# NorrisPalace → Claude.ai Bridge
# Exports Palace data to a Google Doc for Claude.ai context.
# Usage:
#   bash palace-to-claude.sh            # Silent run (no Telegram)
#   bash palace-to-claude.sh --notify   # With Telegram notification
# ─────────────────────────────────────────────────────────

set -euo pipefail

AGENT_DIR="$HOME/norris-agent"
SCRIPTS_DIR="$AGENT_DIR/scripts"
PYTHON="$AGENT_DIR/.venv/bin/python3"
NP="$PYTHON $SCRIPTS_DIR/norris-palace.py"
GDOC_UPDATER="$PYTHON $SCRIPTS_DIR/gdoc_updater.py"
LOG_FILE="$AGENT_DIR/logs/palace-bridge.log"
URL_FILE="$AGENT_DIR/palace-claude-bridge-url.txt"
TMP_DIR="$AGENT_DIR/tmp"
NOTIFY=false

# Parse args
for arg in "$@"; do
    if [ "$arg" = "--notify" ]; then
        NOTIFY=true
    fi
done

# Ensure dirs
mkdir -p "$AGENT_DIR/logs" "$TMP_DIR"

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
EXPORT_FILE="$TMP_DIR/palace_bridge_export.md"

echo "[$TIMESTAMP] Bridge run starting (notify=$NOTIFY)..." >> "$LOG_FILE"

# ── 1. Run full export ──────────────────────────────────
FULL_EXPORT=$($NP export --wing all 2>&1) || true

# ── 2. Run context brief ────────────────────────────────
CONTEXT_BRIEF=$($NP context-brief 2>&1) || true

# ── 3. Run urgent query ─────────────────────────────────
URGENT_ITEMS=$($NP query "urgent" --top 10 2>&1) || true

# ── 4. Count records ────────────────────────────────────
RECORD_COUNT=$(echo "$FULL_EXPORT" | grep -c "^### " || echo "0")

# ── 5. Extract sections from full export ────────────────
# Get DEALS section
ACTIVE_DEALS=$(echo "$FULL_EXPORT" | sed -n '/^## DEALS/,/^## [A-Z]/p' | sed '$d') || true

# Get rules tagged always-check
ALWAYS_CHECK=$($NP query "always-check" --top 20 2>&1) || true

# Get recent conversations
RECENT_CONVOS=$(echo "$FULL_EXPORT" | sed -n '/^## CONVERSATIONS/,/^## [A-Z]/p' | head -50) || true

# ── 6. Combine into single document ────────────────────
cat > "$EXPORT_FILE" << DOCEOF
NorrisPalace — Daily Context Export for Claude.ai
Generated: $TIMESTAMP
Records: $RECORD_COUNT
═══════════════════════════════════════════

CONTEXT BRIEF
─────────────────────────────────────────
$CONTEXT_BRIEF

URGENT ITEMS
─────────────────────────────────────────
$URGENT_ITEMS

ACTIVE DEALS
─────────────────────────────────────────
$ACTIVE_DEALS

RULES: ALWAYS CHECK
─────────────────────────────────────────
$ALWAYS_CHECK

RECENT CONVERSATIONS
─────────────────────────────────────────
$RECENT_CONVOS

FULL EXPORT
─────────────────────────────────────────
$FULL_EXPORT

═══════════════════════════════════════════
End of NorrisPalace export — $RECORD_COUNT records
DOCEOF

# ── 7. Update Google Doc ───────────────────────────────
DOC_OUTPUT=$($GDOC_UPDATER "$EXPORT_FILE" 2>&1) || {
    echo "[$TIMESTAMP] ERROR: Google Doc update failed — $DOC_OUTPUT" >> "$LOG_FILE"
    # Still continue to log what we have
}

# Extract URL from output
DOC_URL=$(echo "$DOC_OUTPUT" | grep "^DOC_URL=" | cut -d= -f2-)
if [ -z "$DOC_URL" ] && [ -f "$URL_FILE" ]; then
    DOC_URL=$(cat "$URL_FILE")
fi

# ── 8. Log the run ─────────────────────────────────────
FINISH_TIME=$(date '+%Y-%m-%d %H:%M:%S')
echo "[$FINISH_TIME] Export complete — $RECORD_COUNT records — $DOC_URL" >> "$LOG_FILE"

# ── 9. Telegram notification (only with --notify) ──────
if [ "$NOTIFY" = true ]; then
    # Load env
    if [ -f "$AGENT_DIR/.env" ]; then
        export $(grep -v '^#' "$AGENT_DIR/.env" | xargs)
    fi
    if [ -f "$HOME/.openclaw/.env" ]; then
        export $(grep -v '^#' "$HOME/.openclaw/.env" | xargs)
    fi

    BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
    CHAT_ID="${TELEGRAM_CHAT_ID:-8758078447}"
    RUN_TIME=$(date '+%-I:%M %p')

    if [ -n "$BOT_TOKEN" ]; then
        MSG="📚 NorrisPalace synced to Claude.ai — $RECORD_COUNT records exported $RUN_TIME"
        curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
            -d chat_id="$CHAT_ID" \
            -d text="$MSG" > /dev/null 2>&1 || true
    fi
fi

echo "[$FINISH_TIME] Bridge complete. URL: $DOC_URL" >> "$LOG_FILE"
echo "Bridge complete — $RECORD_COUNT records — $DOC_URL"
