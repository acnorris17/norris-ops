#!/bin/zsh
# Email Watch — wrapper that calls email_watch.py
# Handles business hours vs off-hours scan frequency
# LaunchAgent calls this every 3 minutes; script skips if off-hours and not due

AGENT_DIR="$HOME/norris-agent"
PYTHON="$AGENT_DIR/.venv/bin/python3"
WATCHER="$AGENT_DIR/email_watch.py"
LOG="$AGENT_DIR/logs/email-watch.log"

# Get current hour in CT
CT_HOUR=$(TZ="America/Chicago" date '+%H')

# Business hours: 4 AM to 9 PM CT → scan every run (3 min)
# Off hours: scan every 5th call (~15 min)
if [[ $CT_HOUR -ge 4 && $CT_HOUR -lt 21 ]]; then
    # Business hours — always scan
    $PYTHON "$WATCHER" >> "$LOG" 2>&1
else
    # Off hours — scan only every 5th call (roughly every 15 min)
    COUNTER_FILE="$AGENT_DIR/logs/.email-watch-counter"
    COUNT=$(cat "$COUNTER_FILE" 2>/dev/null || echo "0")
    COUNT=$(( (COUNT + 1) % 5 ))
    echo "$COUNT" > "$COUNTER_FILE"
    if [[ $COUNT -eq 0 ]]; then
        $PYTHON "$WATCHER" >> "$LOG" 2>&1
    fi
fi
