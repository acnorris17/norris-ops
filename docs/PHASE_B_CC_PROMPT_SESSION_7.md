═══════════════════════════════════════════════════════════════════════════════
SA V5 V1 — PHASE B MASTER CC PROMPT
Paste as first message to a FRESH Claude Code (cc) session on M1.
Aaron has confirmed PHASE A PASS. Proceed directly to Phase B build.
Date: 2026-04-23 | Author: M5 Claude Opus 4.7 (Session 7)
═══════════════════════════════════════════════════════════════════════════════

                        ⚠ READ EVERY LINE OF THIS PROMPT BEFORE
                        ⚠ EXECUTING ANY COMMAND. SKIP NOTHING.
                        ⚠ THIS IS ONE AUTONOMOUS BUILD, ~6–10 HOURS.

═══════════════════════════════════════════════════════════════════════════════
PHASE B IN 30 SECONDS (executive summary — full detail below)
═══════════════════════════════════════════════════════════════════════════════

WHO     Aaron C. Norris, Norris Utilities LLC, Birmingham AL.
WHAT    Build out 7 sections on top of Phase A LIVE shipments portal:
          §1.5 visual polish (logo bigger, hero bolder, phoenix pulses)
          §3   interactive status pill + audit trail + 6 std + 5 mega
               celebrations + sa_v1_writer LaunchAgent
          §5   2-col expanded detail panel + 13 mirrored copy buttons
               + audit history modal
          §6   Notes editable auto-save + Invoice Sent archive (confetti
               + slide-out + mega-cel triggers)
          §7-full  registry fuzzy match (tiered 95/80) + add_alias() +
                   ⚠ hover tooltip + canonical-naming enforcement +
                   Brink investigation + remediation scan
          §7-recon data truth-up: cross-reference QB sales report,
                   QB contact list, shipments.json, and SD HTML files
                   on disk. Produce report. Surface discrepancies.
          §8   payment badge pill (6 types) + CC Fee auto-calc column
               + LineTec billing-split validation + CC-on-file Notes
               auto-populate (idempotent)
WHERE   Branch: feature/sa-v5-completion (NEVER merge to main)
        Repos:  ~/norris-ops/  +  ~/norris-agent/
        Preview: http://192.168.1.184:8765 (keep up across phases)
WHY     Aaron's ONE bottleneck is follow-up + customer comms.
        Every minute he spends in QB or chasing UPS receipts is a
        minute he's not selling. SA V5 V1 collapses the Shipped→
        Invoiced→Sent→Archived cycle into 1-click work for CB +
        Aaron, with celebrations that make the work feel earned and
        canonical names that prevent QB invoice routing mistakes.
HOW     Section 0 verifies state. Sections 1.5/3/5/6/7-full/7-recon/8
        execute in order with Tier 2 ping per commit. Section 9
        verification gauntlet. Section 10 exit protocol. PHASE B PASS
        signal awaits Aaron click-test.
WAYNE   Wayne standard governs every cosmetic + functional choice.
        "Would Wayne be proud of this?" — make the answer yes.

OLD CC SESSION FROM PHASE A
  Phase A was completed by a previous CC session. That session may or
  may not be still open on M1 awaiting an Aaron PHASE A PASS reply.
  This is a FRESH CC session. Aaron has confirmed PASS to M5; old
  session does not need to be addressed here. If you happen to find
  the old session running (`ps aux | grep claude`), leave it alone.
  Phase A handoff doc at ~/norris-ops/docs/handoffs/Phase_A_DONE_2026-04-23.md
  is the canonical Phase A close.

═══════════════════════════════════════════════════════════════════════════════
TOP-OF-PROMPT CERTIFICATION (Aaron is asking CC to confirm, once, before starting)
═══════════════════════════════════════════════════════════════════════════════

Before doing anything else, CC MUST respond with exactly this Telegram Tier 1
ping to @NorrisLegacyBot chat 8758078447 (after silent read of this entire
prompt):

    ┌─────────────────────────────────────────────────┐
    │ PHASE B READY                                   │
    │                                                 │
    │ Read 100% of prompt: ✅                         │
    │ Phase A PASS acknowledged: ✅                   │
    │ State verification plan set: ✅                 │
    │ Build order understood (Sections 0→10): ✅      │
    │ Abort conditions memorized: ✅                  │
    │ Estimated runtime: 6–10 hours                   │
    │ Will fire Tier 2 ping per section commit        │
    │ Will fire Tier 1 only on HALT or Phase B DONE   │
    │                                                 │
    │ Beginning Section 0 now.                        │
    └─────────────────────────────────────────────────┘

Then execute Section 0 STATE VERIFICATION. No code changes until Section 0 passes.

═══════════════════════════════════════════════════════════════════════════════
SECTION 0 — STATE VERIFICATION (MANDATORY FIRST STEP — NO CODE UNTIL THIS PASSES)
═══════════════════════════════════════════════════════════════════════════════

Purpose: Confirm the filesystem matches Phase A close state. If ANYTHING drifts
from expected, HALT + Tier 1 ping Aaron. Do not fix silently.

0.1  Git branch + HEAD
     ─────────────────
       cd ~/norris-ops
       git branch --show-current          # Expected: feature/sa-v5-completion
       git log -1 --format="%H %s"         # Expected HEAD: 1d86e5a* (Phase A handoff)
       git status --porcelain              # Expected: clean (empty output)
       
       cd ~/norris-agent
       git branch --show-current          # Expected: feature/sa-v5-completion
       git log -1 --format="%H %s"         # Expected HEAD: b241427* (Section 1 test fixup)
       git status --porcelain              # Expected: clean

     * If Aaron committed additional work between Phase A and Phase B start,
       HEAD may be newer. Record the actual HEAD and carry forward.

0.2  Preview server running
     ──────────────────────
       curl -sf -o /dev/null -w "%{http_code}" http://192.168.1.184:8765/shipments.html
       # Expected: 200

       lsof -i :8765                       # Expected: python3 listening on 8765
       ps aux | grep http.server | grep -v grep

     If preview not running:
       cd /tmp/sa-v5-preview || exit 1
       git log -1 --format="%H"            # Must match feature/sa-v5-completion HEAD
       nohup python3 -m http.server 8765 --bind 0.0.0.0 > /tmp/preview-8765.log 2>&1 &
       sleep 2
       curl -sf http://192.168.1.184:8765/shipments.html >/dev/null || HALT

0.3  Registry file + MD5
     ────────────────────
       test -f ~/norris-agent/data/customer_registry.json
       md5 ~/norris-agent/data/customer_registry.json
       # Expected: 220dd369f730d616a1949d58c0d832ae
       
       python3 -c "import json; d=json.load(open('$HOME/norris-agent/data/customer_registry.json')); print(f'entries={len(d)}')"
       # Expected: entries=82

     If MD5 drifts, Aaron may have added entries — record new MD5, log the
     delta, then proceed. Do not fail on MD5 drift alone; fail only on file
     missing or entries < 82.

0.4  Logos present
     ──────────────
       cd ~/norris-ops/assets/images
       for f in Full_Logo_White.png Full_Logo_Blue.png Full_Logo_Black.png \
                Full_Logo_BlueBlack.png Phoenix_White.png Phoenix_Blue.png \
                Phoenix_Black.png; do
         test -f "$f" && echo "OK $f" || echo "MISSING $f"
       done
       # Expected: all 7 "OK"

0.5  Phase A deliverables present
     ─────────────────────────────
       test -f ~/norris-ops/shipments.html
       test -f ~/norris-ops/assets/css/NU_Brand_CSS_Framework.css
       test -f ~/norris-ops/assets/css/shipments-v1.css
       test -f ~/norris-ops/assets/js/shipments-v1.js
       test -f ~/norris-ops/assets/js/copy-buttons.js
       test -f ~/norris-ops/assets/js/registry-client.js
       test -f ~/norris-ops/shipping-log.html
       test -f ~/norris-ops/shipping-docs/index.html
       test -f ~/norris-ops/shipments/archive.html
       test -f ~/norris-agent/lib/registry_loader.py
       test -f ~/norris-agent/tests/test_shipments_brand.py
       test -f ~/norris-agent/tests/test_shipments_table_structure.py
       test -f ~/norris-agent/tests/test_registry_loader_phase_a.py
       test -f ~/norris-agent/tests/test_copy_buttons.py
       test -f ~/norris-ops/docs/handoffs/Phase_A_DONE_2026-04-23.md
       # Expected: all commands return 0

0.6  Test baseline
     ──────────────
       cd ~/norris-agent
       python3 -m pytest tests/ -q 2>&1 | tail -3
       # Expected: "76 passed" (or 76+ if Aaron ran additional tests)

       # Playwright (if applicable):
       cd ~/norris-ops
       npx playwright test 2>&1 | tail -5
       # Expected: all green

0.7  Defensive grep baseline (all must be 0)
     ────────────────────────────────────────
       # P/N vocabulary rule
       grep -rE '\bSKU\b' ~/norris-ops/ ~/norris-agent/lib/ ~/norris-agent/data/ \
         --include="*.py" --include="*.html" --include="*.js" --include="*.css" \
         --include="*.json" --include="*.md" 2>/dev/null | \
         grep -v "test_" | grep -v "MEMORY_" | wc -l
       # Expected: 0

       # Wayne Abide name
       grep -rE 'Abadie' ~/norris-ops/ ~/norris-agent/data/customer_registry.json \
         2>/dev/null | wc -l
       # Expected: 0

       # FlexPro Armor trademark rule
       grep -rE 'FlexPro Armor®' ~/norris-ops/ --include="*.html" 2>/dev/null | wc -l
       # Expected: 0
       grep -rE 'FlexPro Armor Guard' ~/norris-ops/ ~/norris-agent/ 2>/dev/null | wc -l
       # Expected: 0

       # Placeholders
       grep -rE '\[TBD\]|\[TODO\]|\[INSERT\]|lorem ipsum|placeholder' \
         ~/norris-ops/ --include="*.html" --include="*.js" 2>/dev/null | wc -l
       # Expected: 0

0.8  Disk space + Python deps
     ─────────────────────────
       df -h ~ | tail -1                   # Expected: > 5 GB free
       python3 -c "import fuzzywuzzy" 2>/dev/null || pip3 install --user fuzzywuzzy python-Levenshtein
       python3 -c "import rapidfuzz"   2>/dev/null || pip3 install --user rapidfuzz
       python3 -c "import playwright"  2>/dev/null || { echo "playwright already via npx"; }

0.9  Stash retention audit
     ─────────────────────
       cd ~/norris-agent && git stash list | head -5
       # Expected: pre-fix11-final-2026-04-22, pre-gate5-merge-v2-daemon-noise-2026-04-22,
       # pre-v5-recovery still present (7-day retention from Session 5)

0.10 State verification result
     ─────────────────────────
     If ALL of 0.1–0.9 pass → proceed to Section 1.
     If ANY fail → HALT. Send Tier 1 with:
       - Which check failed (number + command)
       - Actual vs expected output
       - Best guess of root cause
       - Do NOT attempt fix without Aaron's explicit go-ahead.

═══════════════════════════════════════════════════════════════════════════════
SECTION 1 — OPERATING CONTEXT + HARD RULES (read once, enforce forever)
═══════════════════════════════════════════════════════════════════════════════

1.1  IDENTITY
     User: Aaron C. Norris, Founder/CEO Norris Utilities LLC, Birmingham AL.
     3rd-generation utility equipment dealer/distributor. Sole sales force.
     Admin: Caroline Butler (CB, Tier 1 trust, Jan 2026 onward).
     Wayne standard governs: "Would Wayne be proud of this?"

1.2  VOCABULARY (IRON-CLAD)
     • "SKU" is FORBIDDEN across all outputs, code, comments, tests, docs,
       commit messages, Telegram pings. Always "P/N" or "part number".
     • Wayne Abide (NOT Abadie) is the canonical name for Aerial Hydraulics
       POC. QB is authoritative.
     • FlexPro Armor has NO ® symbol EVER. Bare name only. Never "FlexPro
       Armor Guard."
     • Norris Utilities® / A Legacy of Commitment® / Phoenix Icon® = use ®.

1.3  BRAND (enforce on every new HTML/CSS touch)
     • Source CSS: ~/norris-ops/assets/css/NU_Brand_CSS_Framework.css
       (copied from ~/Library/Mobile Documents/com~apple~CloudDocs/ in Phase A)
     • Gradient: #0a0e5c → #0033cc → #0066ee → #00aaff → #06D0FF
     • Fonts: Lato (Black 900 heads, Regular 400 body) + Playfair Display
       italic (tagline only)
     • Primary blue: #0033cc | Cyan accent: #06D0FF
     • Asymmetric white chevron between header and content
     • Ghost phoenix watermark bottom-right (opacity was 7% in Phase A —
       Phase B bumps to 10% + adds 8s pulse animation; see Section 2.5)
     • Power-tower silhouette in .nu-header::before
     • 7 logo PNGs at ~/norris-ops/assets/images/

1.4  GATE A (LOCKED — do not violate)
     KEEP on shipments.html:
       • NORRIS hero (logo + "A Legacy of Commitment®" tagline + auto date)
       • 3-tier nav (Dashboard / Shipments / AP / Follow-Ups / Contacts /
         CB Tasks / Samson / PO Generator / Tools / Docs)
       • "Shipments & Invoicing" title with auto month-range
       • "📊 OPEN UPS SHIPPING LOG" button
       • Live Shipping Log iframe (Google Apps Script tracker)
       • Blocked banner (dynamic count)
     
     NEW/POLISHED (Phase B modifies/adds below):
       • INVOICING PULSE 4 tiles (already live, may get visual polish)
       • Filter chips + search + view toggle + sort (already live)
       • 14-col table with registry-resolved names (already live)
       • Interactive status pill (Phase B — NEW)
       • Expanded detail panel (Phase B — NEW)
       • Notes edit + Invoice Sent archive (Phase B — NEW)
       • Payment badge + CC Fee column (Phase B — NEW)
       • Bottom nav (Archived / SD Index / Live Sheet) — keep from Phase A
       • NU footer — keep
       • Phoenix watermark — bumped 10%

1.5  CANONICAL CUSTOMER NAMING RULE (IRON-CLAD — F.20)
     Every rendered customer cell MUST match:
         ^[A-Za-z0-9&\-\.\s]+ - [A-Za-z\s\.]+$
     That is: "Company - Person Who Ordered"
     Examples:
       ✅ "LineTec Services - Richard Thornhill"
       ✅ "AEP/SWEPCO - Brian Riley"
       ✅ "Dominion Energy - Coy Crosby"
       ✅ "Chain Electric - AJ Morris"
       ✅ "Irby Construction - William McCarty"
       ✅ "Aerial Hydraulics - Wayne Abide" (DEALER tier)
       ❌ "LineTec Services" (bare company)
       ❌ "LineTec Services/LTS Power" (slash variant)
       ❌ "AEP/SWEPCO" (missing person)
       ❌ "Dominion Energy" (missing person)
       ❌ "Brink" (both missing company resolution AND person)
     Enforcement: Phase B Section 6 (7-full) registry_loader.

1.6  SOURCE PRIORITY (H — revised Session 6)
     Higher source never overwritten by lower. When reconciling:
       1. SD HTML contents (authoritative on ordered AND shipped)
       2. Aaron contemporaneous add/subtract statement (only SD override)
       3. Manual Aaron Telegram corrections
       4. Manual CB Telegram observations
       5. customer_registry canonical_name + aliases
       6. QB live transaction export
       7. QB snapshot CSV
       8. Live Sheet read via Legacy
       9. CSV snapshot read by M5
      10. UPS tracking receipts — SUPPORTING EVIDENCE ONLY (never contradicts
          SD or Aaron statement)
      11. Aaron verbal recall (last priority without note)
      12. Automated hunters

1.7  A / B DECISIONS (locked Session 6)
     • A = REVIEW (not RECONCILE). All status labels read "REVIEW".
     • B = V2. Customer reply parsing is DEFERRED. Do not build this in
       Phase B. Only 3 auto-status triggers in scope for Phase C:
         - QB invoice creation → status=invoiced + INV# + PDF
         - Sent email with invoice PDF → Invoice Sent + archive
         - UPS delivery → Tier 2 ping (no auto-advance)

1.8  PROCESS RULES (F.1 – F.23)
     Relevant to Phase B specifically:
       F.1  Never use "SKU"
       F.4  Brand inheritance mandatory via NU_Brand_CSS_Framework.css
       F.5  Gate A revised: keep top, replace bottom
       F.7  Copy buttons: 13 QB-field-matched, data only (already shipped
            in Phase A — must preserve in Phase B)
       F.8  Status audit trail: every change records actor + ISO 8601 +
            display TS + from + to + source
       F.9  Notes field name literally "Notes" — wrap-text, expandable,
            editable, auto-save
       F.10 Invoice Sent checkbox ticks archive row (confetti + toast +
            slide-out 500ms)
       F.11 Redundancy dedup_key = sha256(customer + invoice# + event_type
            + date-to-minute) — used when Phase C daemons come online
       F.16 Invoice routing always to bill_to_customer_id (never ship_to)
       F.20 Canonical naming iron-clad
       F.21 UPS supporting evidence only
       F.23 Phased build — no one-shot multi-phase autonomous prompts

1.9  DEFENSIVE GREPS (run at every section close + in final gauntlet)
     ALL must be 0:
       G.1–G.6 canaries:
         - Chain Electric $8,930.48 IMMUTABLE
         - Pickle 6-line $1,834 IMMUTABLE
         - Crosby Mar 20 6× NU-BC-2834 = $1,590 + $146 IMMUTABLE
         - FIX 9/10/11 green
       G.8 "S00[0-9]" outside whitelist = 0
       G.9 "FlexPro Armor®" in HTML = 0
       G.10 "FlexPro Armor Guard" anywhere = 0
       G.11 [TBD]/[TODO]/[INSERT]/lorem ipsum/placeholder = 0
       G.12 "\bSKU\b" in production = 0
       G.13 "Abadie" in production (non-audit, non-ledger) = 0

1.10 ABORT CONDITIONS (HALT + Tier 1 Aaron immediately)
       A1–A19: Session 5 standard (test regress, canary fail, grep hit,
         data corruption, spec violation, merge attempt)
       A20: Celebration engine rewritten instead of wired to existing
       A21: Any customer cell renders without "Company - Person" format
            after Section 6 completes (excluding ⚠)
       A22: ⚠ indicator lacks hover tooltip after Section 6 completes
       A23: Investigation loop escalates to REVIEW without exhausting
            steps 1–3
       A24: Data truth-up >50% discrepancy (suggests deeper issue)
       A25: Preview respin fails (curl non-200) at Section 10
       A26: Registry file corruption (JSON parse error)
       A27: Ledger append fails (disk full, permissions)

1.11 COMMUNICATION PROTOCOL
       TIER 1 (Aaron direct): HALT conditions, Phase B DONE, blocking
         decisions required. Via Telegram @NorrisLegacyBot chat 8758078447.
       TIER 2 (log-only, Telegram observer): per-section commit pings.
         Short: section name + commit hash + test delta + next up.
       LIVING MEMORY: CC does NOT fire Gmail drafts directly. M5 Claude
         owns that channel. CC fires Tier 2 Telegram, which Legacy may
         echo to living memory depending on its own rules.

1.12 TIME AWARENESS
     Aaron is in Central Time. Wakes 4 AM CT. Evening typically 5-8 PM CT,
     bedtime ~9-10 PM CT. Phase B expected to run unattended through the
     night if started late; Aaron picks up click-test in the morning. Do
     not ping Tier 1 between 9:30 PM and 3:30 AM CT unless HALT condition.

1.13 INFRASTRUCTURE NOTES (must respect throughout)
     • G Brain WRITE BROKEN. Skip embed step on any G Brain operation
       this session. Use `--no-embed` flag if you need to import.
       Do NOT attempt to fix G Brain in Phase B; deferred to post-V1.
     • Living Memory Bridge runs as LaunchAgent
       (com.norrisutilities.living-memory-bridge), every 15 min,
       4:00 AM – 10:30 PM CT. CC does NOT fire Gmail drafts directly
       — that channel is M5-owned. CC's Tier 2 Telegram pings are
       enough for Living Memory continuity.
     • Bridge PROGRESS-PINGS LOCKED SILENT (commit 3fbb600):
         success = log-only at ~/norris-agent/logs/cc_tasks.log
         failure = TIER 1 only
       Do NOT add new progress pings or restore old ones.
     • LMM canonical path:
         ~/norris-ops/docs/LEGACY_LIVING_MEMORY.md
       Do NOT touch. M5 owns updates to this file.
     • Google Drive folder containing LMM has TRAILING SPACE in name:
         "00_Living_Memory /"
       NEVER normalize this. The bridge depends on it.
     • NorrisPalace (NP) is local persistent memory at ~/nu-brain/palace/
       CLI alias: `np`. Currently ~30 records post-Session 6, ~682
       records overall lifetime. Phase B Section 10.4 logs Phase B
       completion to NP.
     • LEGACY FILE-VISIBILITY BUG: Legacy / earlier CC instances have
       produced false negatives on file existence checks. If a file
       "doesn't exist" per a tool call, ALWAYS verify with direct
       `ls -la <full_path>` before reporting missing. Bug confirmed
       twice on `sync_norrisops_pages.sh` Apr 20.
     • CF Access service token failing on norrisops.com
       (`service_token_status:false`) — Aaron directed NO ROTATION
       this session. Investigate policy binding only if it surfaces;
       otherwise leave alone. Phase B preview uses 192.168.1.184:8765
       direct, not norrisops.com — so this should not block Phase B.
     • CLAWHAVOC RULE: never install ClawHub skills without vetting.
       NEVER install `peekaboo` or `coding-agent`. Run
       `openclaw security audit` after any skill install. Phase B
       does not require any skill installs.
     • Aaron signs as "Aaron C. Norris" formal, "AC" with close
       relationships. Do not invent signature variants.
     • Ops portal CANONICAL URL: norrisops.com (Cloudflare-hosted).
       ops.norrisutilities.com is RETIRED — never reference.
       Two-tier auth: legacy2026 = CB limited view, norris2026 =
       Aaron full view. CSS class="aaron-only" hides elements from CB.
       team.html uses different auth than rest of portal — do not
       break.

═══════════════════════════════════════════════════════════════════════════════
SECTION 2 — VISUAL POLISH PASS ("make it POP") [Build Section 1.5]
═══════════════════════════════════════════════════════════════════════════════

Goal: Phase A logo/hero felt conservative. Make it fantastic. Bigger logo,
stronger hero weight, sharper chevron, bolder phoenix, subtle page-load
entrance animation. Aaron's directive: "REALLY pop/stand out."

FILES TOUCHED:
  ~/norris-ops/assets/css/shipments-v1.css      (edit)
  ~/norris-ops/assets/css/NU_Brand_CSS_Framework.css (edit — phoenix watermark
                                                      + chevron only)
  ~/norris-ops/shipments.html                   (edit — add animation classes)
  ~/norris-ops/assets/js/shipments-v1.js        (edit — trigger entrance
                                                 animation on DOMContentLoaded)
  ~/norris-agent/tests/test_visual_polish.py    (NEW)

2.1  LOGO SIZE + TREATMENT
     • .nu-hero-logo: height 80px → 120px (desktop), 64px → 90px (mobile)
     • Add filter: drop-shadow(0 4px 12px rgba(6, 208, 255, 0.25))
     • Ensure aspect-ratio preserved (width auto)
     • On scroll > 100px: logo shrinks to 72px with 250ms ease (sticky header)

2.2  HERO TITLE WEIGHT
     • h1.page-title "Shipments & Invoicing":
         font-family: 'Lato', sans-serif;
         font-weight: 900;
         font-size: clamp(2.8rem, 5vw, 4.2rem);   (Phase A was ~3.2rem)
         letter-spacing: -0.02em;
         line-height: 1;
         text-transform: none;
         background: linear-gradient(135deg, #FFFFFF 0%, #06D0FF 100%);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         background-clip: text;
     • .page-subtitle (tagline / auto month-range):
         font-family: 'Playfair Display', serif;
         font-style: italic;
         font-weight: 400;
         font-size: clamp(1.1rem, 2vw, 1.4rem);
         color: #06D0FF;
         opacity: 0.9;

2.3  CHEVRON SHARPEN
     • .nu-chevron (the asymmetric white shape between hero and content):
         Current: subtle diagonal
         New: sharper angle, thicker, more assertive
       Implementation:
         clip-path: polygon(0 0, 100% 0, 100% calc(100% - 48px), 50% 100%, 0 calc(100% - 48px));
         (was ~24px depth; now 48px)
         background: #FFFFFF;
         z-index: 2;

2.4  PHOENIX WATERMARK BUMP
     • .nu-phoenix-watermark:
         opacity: 0.07 → 0.10
         width: 150px → 200px
         animation: phoenix-pulse 8s ease-in-out infinite;
       @keyframes phoenix-pulse {
         0%, 100% { opacity: 0.10; transform: scale(1); }
         50%      { opacity: 0.14; transform: scale(1.03); }
       }

2.5  PAGE-LOAD ENTRANCE ANIMATION
     On DOMContentLoaded:
       a. Hero block fades in from top (translateY(-20px) → 0, opacity 0 → 1,
          400ms ease-out, delay 100ms)
       b. INVOICING PULSE tiles cascade in left-to-right (100ms stagger,
          250ms each, translateY(10px) → 0)
       c. Filter chip row fades in (200ms, delay 500ms)
       d. Table rows cascade in top-to-bottom (30ms stagger, 200ms each,
          translateY(5px) → 0)
     • Respect prefers-reduced-motion: disable all entrance animations,
       keep opacity transitions only.
     • Animation runs ONCE per page load, never on filter changes.

2.6  INTERACTIVE POLISH (existing elements)
     • Tile hover: transform: translateY(-2px), box-shadow with cyan glow
       rgba(6, 208, 255, 0.25), 200ms ease
     • Filter chip active: background gradient blue→cyan, subtle inner glow
     • Filter chip selection pulse: 150ms scale 1 → 1.05 → 1 on click
     • Table row hover: background rgba(6, 208, 255, 0.04), cyan 1px left
       border appears, 150ms ease
     • Copy button click: success ✓ stays visible 1500ms (was 1000ms)

2.7  TESTS (~/norris-agent/tests/test_visual_polish.py)
     Assert:
       - .nu-hero-logo computed height 120px @ >=1024px viewport
       - h1.page-title computed font-weight 900
       - h1.page-title font-size >= 44px @ 1280px viewport
       - .nu-chevron clip-path contains "48px"
       - .nu-phoenix-watermark opacity 0.10, animation name "phoenix-pulse"
       - body has .page-loaded class added after 100ms
       - .pulse-tile has animation-delay stagger (0ms, 100ms, 200ms, 300ms)
       - prefers-reduced-motion respected (class .reduced-motion on html
         element)
     Implementation uses Playwright page.evaluate() for computed styles.

2.8  COMMIT
     cd ~/norris-ops
     git add assets/css/ assets/js/shipments-v1.js shipments.html
     git commit -m "Phase B Section 1.5: visual polish (logo 120px, Lato 900 hero, chevron 48px, phoenix 10% pulse, page-load cascade)"
     
     cd ~/norris-agent
     git add tests/test_visual_polish.py
     git commit -m "Phase B Section 1.5: visual polish regression tests"
     
     Tier 2 ping:
       "Section 1.5 visual polish committed. Logo 120px, hero Lato 900 4.2rem,
        chevron 48px, phoenix 10% pulse 8s. Tests added. Moving to Section 3."

═══════════════════════════════════════════════════════════════════════════════
SECTION 3 — STATUS PILL + AUDIT TRAIL + CELEBRATIONS [Build Section 3]
═══════════════════════════════════════════════════════════════════════════════

Goal: Click status pill → dropdown → select → update data + write audit +
fire celebration. Wire celebration engine to existing engine if present; if
not present, build minimal engine. Add 5 mega-celebrations for milestone
events. Add permanent shipments ledger (append-only JSONL).

DISCOVERY FIRST (do this before writing any code):
  find ~/norris-ops ~/norris-agent -name "*celebration*" -o -name "*confetti*" \
    -o -name "*fireworks*" 2>/dev/null
  find ~/norris-ops/assets/js/ -name "*.js" -exec grep -l "confetti\|celebration\|fireworks" {} \;
  If existing engine found → WIRE TO IT. Do NOT rebuild.
  If not found → build minimal engine at ~/norris-ops/assets/js/celebration-engine.js

FILES TOUCHED:
  NEW:
    ~/norris-ops/assets/js/status-pill.js
    ~/norris-ops/assets/js/audit-log-client.js
    ~/norris-ops/assets/js/celebration-engine.js    (if not existing)
    ~/norris-ops/assets/css/celebrations.css
    ~/norris-agent/lib/audit_log.py
    ~/norris-agent/lib/status_engine.py
    ~/norris-agent/lib/ledger.py
    ~/norris-agent/data/shipments_ledger.jsonl      (created empty if absent)
    ~/norris-agent/tests/test_status_pill_interactive.py
    ~/norris-agent/tests/test_audit_log.py
    ~/norris-agent/tests/test_celebrations_standard.py
    ~/norris-agent/tests/test_celebrations_mega.py
    ~/norris-agent/tests/test_ledger_append.py
  EDIT:
    ~/norris-ops/shipments.html                (status column markup)
    ~/norris-ops/assets/js/shipments-v1.js     (hook dropdown init)
    ~/norris-agent/data/shipments.json         (will write via status_engine)

3.1  STATUS PILL MARKUP
     Column 2 in the table (per E.2). Each row cell renders:
       <button class="status-pill status-{status}" data-shipment-id="{id}"
               aria-haspopup="listbox" aria-expanded="false" tabindex="0">
         <span class="status-dot"></span>
         <span class="status-label">{STATUS_UPPER}</span>
         <svg class="caret" ...>▼</svg>
       </button>

3.2  STATUS VALUES (7 locked)
     • pending    — slate gray (#6B7280)
     • processing — amber (#F59E0B)
     • shipped    — blue (#0066EE)
     • invoiced   — green (#10B981)
     • cc         — teal (#06D0FF)       (CC charged / held for charge)
     • blocked    — red (#DC2626)
     • REVIEW     — orange pulsing (#FB923C, subtle pulse 2s)

3.3  DROPDOWN BEHAVIOR
     Click or Enter/Space on pill:
       - Opens <ul role="listbox"> below pill
       - 7 options, each <li role="option"> with same color dot + label
       - Keyboard: Arrow up/down navigates, Enter selects, Esc closes
       - Click outside = close
       - Only one open at a time
     On selection:
       - POST (via fetch) to update endpoint (or direct JSON write if
         daemonless V1 — see 3.4)
       - On success: pill updates, celebration fires, audit appends,
         ledger event written
       - On failure: pill reverts, toast "Status update failed" + retry

3.4  V1 UPDATE ENDPOINT (no Phase C daemons yet)
     Since Phase C daemons aren't live, Phase B uses a minimal endpoint:
       POST /api/shipments/<id>/status (bound to simple Python handler)
     OR client-side direct write:
       - fetch shipments.json
       - apply change
       - PUT back via simple file-write endpoint
     
     RECOMMENDED: Stand up a tiny FastAPI or Python http.server handler
     on port 8766 that:
       - Reads/writes ~/norris-agent/data/shipments.json (atomic write
         via tempfile + rename)
       - Appends to ~/norris-agent/data/shipments_ledger.jsonl
       - Returns updated shipment record
     
     LaunchAgent (NEW):
       ~/Library/LaunchAgents/com.norrisutilities.sa-v1-writer.plist
       - Runs: python3 ~/norris-agent/bin/sa_v1_writer.py
       - Port: 8766
       - Label: com.norrisutilities.sa-v1-writer
       - RunAtLoad: true
       - KeepAlive: true
       - StandardErrorPath: /tmp/sa-v1-writer.err
       - StandardOutPath:   /tmp/sa-v1-writer.out

3.5  AUDIT LOG SCHEMA (lib/audit_log.py + data/audit_log.jsonl)
     Every status change writes an audit entry:
     {
       "id": "audit_<uuid4>",
       "shipment_id": "S-2026-023",
       "actor": "aaron" | "cb" | "sa_auto" | "legacy_auto",
       "iso_ts": "2026-04-23T17:23:45-05:00",
       "display_ts": "Apr 23 5:23 PM CT",
       "event": "status_change",
       "from": "shipped",
       "to": "invoiced",
       "source": "aaron_click" | "cb_click" | "qb_webhook" |
                 "gmail_parse" | "ups_poll" | "sa_derived",
       "notes": "" (optional freeform)
     }
     Store: ~/norris-agent/data/audit_log.jsonl (append-only)
     Also kept per-shipment inside shipments.json under shipment.audit_trail[]
     (max last 20 entries in-row; full history via separate file).

3.6  SHIPMENTS LEDGER (lib/ledger.py + data/shipments_ledger.jsonl)
     Append-only, NEVER pruned. Captures every event permanently from now on.
     Enables Phase-D+ KPI dashboards (Q17) that read full historical replay.
     
     Event schema:
     {
       "ledger_id": "led_<uuid4>",
       "ts": "2026-04-23T17:23:45-05:00",
       "shipment_id": "S-2026-023",
       "event_type": "status_change" | "notes_edit" | "invoice_sent" |
                     "alias_added" | "archive" | "unarchive" |
                     "celebration_fired" | "mega_fired",
       "actor": "...",
       "data": { ... event-specific payload ... },
       "dedup_key": sha256(customer + invoice# + event_type + date_to_minute)
                    (used by Phase C for cross-validator dedup)
     }

3.7  STANDARD CELEBRATION MAPPING
     from_state → to_state → celebration id:
       pending    → processing = "sparkle"          (1.5s)
       processing → shipped    = "confetti-burst"   (3s)
       shipped    → invoiced   = "phoenix-rise"     (5s, plays chime)
       invoiced   → cc         = "ka-ching"         (2s, green check pulse)
       any        → blocked    = "red-flash"        (0.5s, no sound)
       any        → REVIEW     = "amber-pulse"      (1s, no sound)
       status_change reversed  = none (no reverse celebration)
     Implementation: celebration-engine.js exposes
       CelebrationEngine.fire(id, anchorEl)
     Where anchorEl is the status pill or row for positioning.

3.8  MEGA-CELEBRATIONS (5 triggers, rare, milestone)
     Fired by status_engine.py after every status change, checking
     post-change state of the whole queue. Priority order (at most one
     per event):

     Trigger M1 — QUEUE CLEARED
       Condition: count(shipments where status != invoiced AND
                         invoice_sent != true) drops from >0 to 0
       Effect (8–10 seconds):
         - Full-screen overlay fades in (cyan/blue gradient @ 50% opacity)
         - Large phoenix graphic bursts from center, scales 0 → 1.5 → 1
         - Confetti rains from top for 6 seconds (blue/cyan/white)
         - Text banner: "QUEUE CLEARED!" (Lato Black 900, 5rem)
         - Sub-banner: "Would Wayne be proud of this? Hell yes."
           (Playfair italic 1.5rem, appears 2s in, fades 2s out)
         - Triumphant 3-tone chime (if browser audio unlocked)
         - Click-anywhere dismisses early
         - Auto-dismiss at 10s

     Trigger M2 — CENTURY MARK
       Condition: count(shipments with status=invoiced in current month)
                  crosses from 99 to 100
       Effect (5s):
         - Gold confetti cascade from top
         - Banner: "100th invoice of the month! 💯"
         - Sub-banner: "That's a whole lot of shipping done right."

     Trigger M3 — SHIP GONNA SAIL SMOOTH
       Condition: Unbilled Revenue tile transitions from >$0 to $0
       Effect (4s):
         - Boat emoji 🚢 floats across screen left to right
         - Banner: "All billed. Ship gonna sail smooth."
         - Gentle wave animation at bottom

     Trigger M4 — FIRST SHIPMENT OF THE DAY
       Condition: First status change to "shipped" after 4 AM CT
       Effect (2s):
         - Target emoji 🎯 appears, subtle zoom 0.8 → 1.1 → 1
         - Banner: "First shipment fired 🎯"
         - Subtle cyan shimmer across hero

     Trigger M5 — TEN CLEAN STREAK
       Condition: 10 consecutive status=invoiced events with NO intervening
                  REVIEW status (tracked in ledger)
       Effect (3s):
         - Fire emojis 🔥 burst from bottom
         - Banner: "On a roll! 10 clean 🔥"
         - Counter flashes "10" three times

     Rate limits:
       - Same mega won't fire twice in the same browser session
       - Mega overrides standard celebration (standard is suppressed
         when mega fires)
       - Never fires on reverse/undo events
       - Never fires for negative events (blocked, REVIEW)

     Implementation file: ~/norris-ops/assets/js/mega-celebrations.js
     Audio files (optional; silent fallback if missing):
       ~/norris-ops/assets/audio/chime.mp3 (short, 2s, royalty-free)
       ~/norris-ops/assets/audio/victory.mp3 (longer, 3s, for M1)

3.9  HOVER TOOLTIP ON STATUS PILL
     Show last audit entry:
       "Changed from shipped → invoiced by Aaron on Apr 23 5:23 PM CT"
     If no history yet: "No status history"
     Tooltip element: <div class="status-tooltip"> anchored below pill,
     150ms fade-in on 500ms hover delay.
     "View Full History" link inside tooltip → opens modal with full
     audit trail for that shipment (see Section 4.6).

3.10 TESTS
     test_status_pill_interactive.py:
       - pill renders with correct color per status
       - click opens dropdown
       - keyboard nav (Tab, Arrow, Enter, Esc)
       - select fires update + audit + ledger + celebration event
       - failure path reverts pill + shows toast
     test_audit_log.py:
       - schema validation
       - append atomicity
       - read-last-N for tooltip
       - per-shipment audit_trail[] capped at 20
     test_ledger_append.py:
       - JSONL append doesn't corrupt
       - concurrent writes serialize (simple file lock)
       - dedup_key computed correctly
     test_celebrations_standard.py:
       - all 6 standard transitions fire correct id
       - animation durations respected
       - no celebration on reverse
     test_celebrations_mega.py:
       - M1 fires on queue->0 from >0
       - M2 fires on 99->100 invoiced-this-month
       - M3 fires on unbilled>0 → 0
       - M4 fires on first shipped after 4 AM CT (mock time)
       - M5 fires on 10th consecutive invoiced-without-REVIEW
       - rate limits respected (no double-fire in session)
       - never fires on blocked/REVIEW
     Playwright:
       - click pending pill → dropdown → select processing → sparkle renders
       - click shipped pill → select invoiced → phoenix-rise + ka-ching
       - simulate queue-clear → full-screen overlay appears
       - hover pill → tooltip appears with last audit entry

3.11 COMMITS
     cd ~/norris-ops
     git add assets/js/status-pill.js assets/js/audit-log-client.js \
             assets/js/celebration-engine.js assets/js/mega-celebrations.js \
             assets/css/celebrations.css assets/audio/ shipments.html \
             assets/js/shipments-v1.js
     git commit -m "Phase B Section 3 (frontend): interactive status pill, celebration engine, 5 mega-celebrations, audit tooltip"
     
     cd ~/norris-agent
     git add lib/audit_log.py lib/status_engine.py lib/ledger.py \
             bin/sa_v1_writer.py tests/test_status_pill_interactive.py \
             tests/test_audit_log.py tests/test_ledger_append.py \
             tests/test_celebrations_standard.py tests/test_celebrations_mega.py \
             data/shipments_ledger.jsonl
     git commit -m "Phase B Section 3 (backend): audit_log, ledger append-only, status_engine, sa_v1_writer endpoint, regression tests"
     
     launchctl load ~/Library/LaunchAgents/com.norrisutilities.sa-v1-writer.plist
     sleep 2
     curl -sf http://127.0.0.1:8766/health || HALT
     
     Tier 2 ping:
       "Section 3 committed. Status pill interactive, audit log live, 5 mega
        celebrations wired. sa-v1-writer LaunchAgent loaded on :8766.
        Moving to Section 5 (detail panel)."

═══════════════════════════════════════════════════════════════════════════════
SECTION 4 — EXPANDED DETAIL PANEL [Build Section 5]
═══════════════════════════════════════════════════════════════════════════════

Goal: Click ▼ (column 17) OR row (anywhere outside action cells) → inline
2-col panel expands below row. LEFT = Bill-To + Ship-To + Order Context.
RIGHT = Line items + Shipping breakdown + CC Fee breakdown + QB memo +
Audit trail preview + 13 mirrored copy buttons.

FILES TOUCHED:
  ~/norris-ops/shipments.html                  (add panel template + binding)
  ~/norris-ops/assets/css/shipments-v1.css     (panel styles)
  ~/norris-ops/assets/js/detail-panel.js       (NEW)
  ~/norris-ops/assets/js/audit-modal.js        (NEW — "View Full History")
  ~/norris-agent/tests/test_detail_panel.py    (NEW)

4.1  TRIGGER
     - Click on ▼ arrow cell → toggles panel open/closed
     - Click on row (NOT on status pill, NOT on notes cell, NOT on copy
       button, NOT on Invoice Sent checkbox, NOT on tracking link) →
       toggles panel open/closed
     - Click on row with panel already open → closes panel
     - Opening a different row's panel closes previously open one
     - Enter/Space when row focused = same as click
     - Esc when panel open = closes it

4.2  ANIMATION
     - Panel appears below row (inserts <tr class="detail-row"><td colspan="17">...)
     - max-height: 0 → 600px, 300ms ease-out
     - Opacity 0 → 1, 250ms ease-out (delay 50ms)
     - Arrow ▼ rotates 180° (becomes ▲) with 200ms ease
     - Row background: rgba(0, 51, 204, 0.03) while panel open

4.3  LEFT COLUMN
     <div class="detail-left">
       <section class="bill-to">
         <h4>Bill-To</h4>
         <div>{canonical_name}</div>        (from registry.canonical_name)
         <div>{company_root}</div>           (from registry.company_root)
         <div>{address_line_1}</div>        (from registry.bill_to.address_line_1)
         <div>{address_line_2}</div>        (if present)
         <div>{city}, {state} {zip}</div>
       </section>
       
       <section class="ship-to">
         <h4>Ship-To</h4>
         <div>{ship_to.poc}</div>            (per-order from SD)
         <div>{ship_to.company}</div>
         <div>{ship_to.address_line_1}</div>
         <div>{ship_to.address_line_2}</div>  (if present)
         <div>{ship_to.city}, {state} {zip}</div>
         <em>(Different from Bill-To)</em>    (shown only if differs)
       </section>
       
       <section class="order-context">
         <h4>Order Context</h4>
         <dl>
           <dt>Order Date</dt><dd>{MM/DD/YY}</dd>
           <dt>PO #</dt><dd>{po_number}</dd>
           <dt>Terms</dt><dd>{payment_terms}</dd>
           <dt>Payment</dt><dd><span class="payment-badge">{payment_badge}</span></dd>
         </dl>
         {if registry.internal_notes:}
         <div class="customer-notes">
           <strong>Notes on this customer:</strong>
           <p>{registry.internal_notes}</p>
         </div>
       </section>
     </div>

4.4  RIGHT COLUMN
     <div class="detail-right">
       <section class="line-items">
         <h4>Line Items</h4>
         <table>
           <thead><tr><th>P/N</th><th>Description</th><th>Qty</th><th>Rate</th><th>Total</th></tr></thead>
           <tbody>
             {for each line in shipment.line_items}
             <tr>
               <td>{line.pn}</td>
               <td>{line.description}</td>
               <td>{line.qty}</td>
               <td>${line.rate}</td>
               <td>${line.qty * line.rate}</td>
             </tr>
             {end for}
           </tbody>
           <tfoot>
             <tr><td colspan="4">Subtotal</td><td>${subtotal}</td></tr>
           </tfoot>
         </table>
       </section>

       <section class="shipping-breakdown">
         <h4>Shipping</h4>
         <dl>
           <dt>Carrier</dt><dd>{carrier}</dd>
           <dt>Tracking</dt><dd>
             {for t in tracking_list}
             <a href="https://www.ups.com/track?tracknum={t}" target="_blank" rel="noopener">{t}</a>
             {end for}
           </dd>
           <dt>Ship Date</dt><dd>{MM/DD/YYYY}</dd>
           <dt>RegCost</dt><dd>${reg_cost}</dd>
           <dt>Formula</dt><dd>
             {if tier == 'direct'} ROUNDUP(ROUNDUP({reg_cost},0) × 1.10, 0) = ${cust_ship}
             {else}                ROUNDUP(ROUNDUP({reg_cost},0) × 1.05, 0) = ${cust_ship}
             {end if}
           </dd>
           <dt>Customer Shipping</dt><dd><strong>${cust_ship}</strong></dd>
         </dl>
       </section>

       {if cc_fee_applies:}
       <section class="cc-fee-breakdown">
         <h4>CC Fee</h4>
         <dl>
           <dt>Subtotal</dt><dd>${subtotal}</dd>
           <dt>Shipping</dt><dd>${cust_ship}</dd>
           <dt>Total subject</dt><dd>${subtotal + cust_ship}</dd>
           <dt>Rate</dt><dd>4.0%</dd>
           <dt>Fee</dt><dd><strong>${round((subtotal + cust_ship) * 0.04, 2)}</strong></dd>
         </dl>
       </section>
       {end if}

       <section class="qb-memo">
         <h4>QB Invoice Memo</h4>
         <pre class="memo-text">{qb_memo}</pre>
         <button class="copy-btn" data-copy="qb-memo">📋 Copy Memo</button>
       </section>

       <section class="audit-preview">
         <h4>Recent Activity</h4>
         <ul class="audit-list">
           {for entry in shipment.audit_trail[-3:]}
           <li>
             <span class="audit-ts">{entry.display_ts}</span>
             <span class="audit-text">{entry.actor} changed status {entry.from} → {entry.to}</span>
           </li>
           {end for}
         </ul>
         <a href="#" class="view-full-history" data-shipment-id="{id}">View Full History →</a>
       </section>

       <section class="panel-copy-buttons">
         <h4>Copy for QuickBooks</h4>
         <div class="copy-grid">
           {MIRROR the same 13 buttons from the row's main copy menu,
            arranged in a 2-row grid (8 top + 5 bottom)}
         </div>
       </section>
     </div>

4.5  RESPONSIVE
     >= 768px: 2-column grid (1fr 1fr, 2rem gap)
     < 768px : stacks, LEFT first then RIGHT
     Panel always scrollable if content exceeds 600px max-height

4.6  "VIEW FULL HISTORY" MODAL
     File: ~/norris-ops/assets/js/audit-modal.js
     - Fetches full audit trail for shipment from audit_log.jsonl filtered
       by shipment_id
     - Renders timeline:
         Apr 23 5:23 PM CT  | aaron        | status | shipped → invoiced
         Apr 23 2:01 PM CT  | cb           | status | processing → shipped
         Apr 23 9:15 AM CT  | sa_auto      | status | pending → processing
     - Close on Esc, click overlay, or X button
     - Scrollable if > 20 entries

4.7  TESTS
     test_detail_panel.py:
       - ▼ click expands panel
       - row click (outside action cells) expands panel
       - row click inside status pill does NOT expand panel
       - click on status pill inside panel still works (doesn't bubble)
       - opening second panel closes first
       - Esc closes
       - responsive layout (< 768px stacks)
       - ship-to "different from bill-to" shows only when differ
       - CC Fee section hidden when cc_fee_applies = false
       - audit preview shows last 3
       - copy buttons inside panel fire clipboard writes
     test_audit_modal.py:
       - View Full History opens modal
       - modal shows full trail (10+ entries)
       - Esc closes
       - overlay click closes

4.8  COMMIT
     cd ~/norris-ops
     git add shipments.html assets/css/shipments-v1.css \
             assets/js/detail-panel.js assets/js/audit-modal.js
     git commit -m "Phase B Section 5: 2-col expanded detail panel + 13 mirrored copy buttons + audit preview + full history modal"
     
     cd ~/norris-agent
     git add tests/test_detail_panel.py tests/test_audit_modal.py
     git commit -m "Phase B Section 5: detail panel regression tests"
     
     Tier 2 ping:
       "Section 5 committed. Detail panel 2-col live with mirrored copy
        buttons + audit preview + full history modal. Moving to Section 6."

═══════════════════════════════════════════════════════════════════════════════
SECTION 5 — NOTES EDIT + INVOICE SENT ARCHIVE [Build Section 6]
═══════════════════════════════════════════════════════════════════════════════

Goal: Notes cell (column 14) click-to-edit with auto-save. Invoice Sent
checkbox (column 15) tick archives row with confetti + toast + slide-out.

FILES TOUCHED:
  ~/norris-ops/shipments.html                  (notes cell + invoice sent col)
  ~/norris-ops/assets/js/notes-editor.js       (NEW)
  ~/norris-ops/assets/js/invoice-archive.js    (NEW)
  ~/norris-ops/assets/css/shipments-v1.css     (edit mode styles)
  ~/norris-agent/lib/shipments_writer.py       (NEW — atomic writes)
  ~/norris-agent/tests/test_notes_editor.py    (NEW)
  ~/norris-agent/tests/test_invoice_archive.py (NEW)

5.1  NOTES CELL — READ MODE
     <td class="notes-cell" data-shipment-id="{id}" tabindex="0"
         aria-label="Notes for shipment {id}">
       <span class="notes-text">{notes | truncate(80)}</span>
       {if len(notes) > 80:}
       <span class="notes-more">(click to read)</span>
       {end if}
     </td>
     - Wrap text up to 80 chars in the cell
     - Click or Enter/Space → enter edit mode
     - Hover shows pencil icon ✎ faintly

5.2  NOTES CELL — EDIT MODE
     On activate:
       - Replace span with <textarea class="notes-editor" rows="3"
         maxlength="2000">{notes}</textarea>
       - Auto-focus textarea, cursor at end
       - Show character counter: {len}/2000
       - Show action bar: [Save (Cmd+Enter)] [Cancel (Esc)]
     On Save (blur OR Cmd+Enter OR click Save):
       - POST to sa-v1-writer /api/shipments/{id}/notes with {notes: new_value}
       - On success: render new notes, append audit + ledger:
           {event: "notes_edit", from: old, to: new, actor: "aaron" | "cb"}
         Toast: "Notes saved" (2s, cyan)
       - On failure: keep edit mode open, toast: "Save failed — retry"
     On Cancel (Esc or click Cancel):
       - Revert to original, no write, no audit
     Clicking outside cell = Save (same as blur)

5.3  NOTES CELL — AUTO-SAVE DEBOUNCE
     While editing, debounce writes:
       - After 3s of no typing → silent auto-save (no toast)
       - Still writes audit on change committed
       - Prevents data loss on tab close mid-edit

5.4  INVOICE SENT CHECKBOX — COLUMN 15
     <td class="invoice-sent-cell">
       <label class="invoice-sent">
         <input type="checkbox" class="invoice-sent-box"
                data-shipment-id="{id}" {checked if invoice_sent}>
         <span class="checkmark"></span>
       </label>
     </td>

5.5  ON TICK
     1. Optimistic UI: checkbox ticks, row fades slightly
     2. POST /api/shipments/{id}/invoice-sent {sent: true}
     3. sa_v1_writer.py:
        - Sets invoice_sent = true
        - If status != "invoiced", sets status = "invoiced" (audit event)
        - Appends audit: event="invoice_sent", actor, ts
        - Appends ledger: event_type="invoice_sent"
        - Returns updated shipment
     4. On success (frontend):
        - Confetti burst (500ms) at the checkbox position
        - Toast: "Invoice sent — archived" (3s, green)
        - Row slide-out animation (500ms, translateX(100%) + opacity 0 → 0)
        - After 500ms: remove <tr> from DOM
        - Update PULSE tiles (Open count -1, etc.)
        - If this was the LAST open SD → fires mega M1 (queue cleared)
        - If this was the 100th invoiced in the month → fires mega M2
        - If unbilled revenue now $0 (post-change) → fires mega M3
        - Check M5 (10 clean streak) — fires if applicable
     5. On failure: revert checkbox, toast "Archive failed — retry"

5.6  ON UNTICK (reverse)
     - Confirm dialog: "Un-archive this shipment? Status will revert to
       previous state. This creates an audit entry."
     - On confirm:
        - POST /api/shipments/{id}/invoice-sent {sent: false}
        - sa_v1_writer.py:
          - invoice_sent = false
          - status = previous_status (from last audit entry before
            invoice_sent tick)
          - audit: event="invoice_sent_reverse"
          - ledger: event_type="unarchive"
        - Frontend: row re-renders in main table (position: alphabetical
          by customer), NO celebration, no confetti
        - Toast: "Un-archived" (2s, neutral)

5.7  ATOMIC WRITE (shipments_writer.py)
     def write_shipment(shipment_id, updates: dict) -> dict:
       """Atomic update to shipments.json. tempfile + rename. Returns
       updated full record."""
       path = Path.home() / "norris-agent/data/shipments.json"
       with FileLock(str(path) + ".lock"):
           data = json.loads(path.read_text())
           idx = next(i for i, s in enumerate(data["shipments"])
                      if s["id"] == shipment_id)
           data["shipments"][idx].update(updates)
           # Write to temp, fsync, rename
           tmp = path.with_suffix(".tmp")
           tmp.write_text(json.dumps(data, indent=2))
           os.fsync(...)
           tmp.rename(path)
           return data["shipments"][idx]

5.8  TESTS
     test_notes_editor.py:
       - click enters edit mode
       - typing updates character counter
       - Cmd+Enter saves
       - Esc cancels without write
       - blur saves
       - 3s auto-save fires
       - max 2000 chars enforced
       - audit entry written with event="notes_edit"
       - ledger entry written
     test_invoice_archive.py:
       - tick fires POST
       - confetti renders at checkbox position (Playwright)
       - toast appears 3s then fades
       - row animates out over 500ms
       - DOM row removed after animation
       - PULSE tiles update (Open count decrements)
       - status set to "invoiced" if not already
       - audit + ledger appended
       - un-tick shows confirm dialog
       - un-tick reverts status to previous
       - mega M1 fires when queue drops to 0
       - atomic write holds under concurrent tests (10 parallel writes)

5.9  COMMIT
     cd ~/norris-ops
     git add shipments.html assets/js/notes-editor.js \
             assets/js/invoice-archive.js assets/css/shipments-v1.css
     git commit -m "Phase B Section 6: Notes editable with auto-save, Invoice Sent archive with confetti + slide-out + mega-cel triggers"
     
     cd ~/norris-agent
     git add lib/shipments_writer.py tests/test_notes_editor.py \
             tests/test_invoice_archive.py
     git commit -m "Phase B Section 6: atomic shipments writer, notes/archive regression tests"
     
     Tier 2 ping:
       "Section 6 committed. Notes editable + auto-save, Invoice Sent
        archives row with confetti and mega-cel triggers on queue clear /
        century mark / $0 unbilled. Moving to Section 7-full (registry
        fuzzy match + canonical enforcement + ⚠ tooltip)."

═══════════════════════════════════════════════════════════════════════════════
SECTION 6 — REGISTRY FUZZY MATCH + CANONICAL ENFORCEMENT + ⚠ TOOLTIP
[Build Section 7-full]
═══════════════════════════════════════════════════════════════════════════════

Goal: Extend registry_loader.py with fuzzy matching + tiered auto-apply/
flag/REVIEW logic. Enforce canonical naming rule across every rendered
customer cell. Add hover tooltip on ⚠ indicators. Run registry remediation
scan. Investigate "Brink" customer.

FILES TOUCHED:
  ~/norris-agent/lib/registry_loader.py           (EXTEND)
  ~/norris-agent/lib/fuzzy_match.py               (NEW)
  ~/norris-agent/lib/canonical_enforce.py         (NEW)
  ~/norris-agent/lib/registry_remediation.py      (NEW — one-time scan)
  ~/norris-agent/data/customer_registry.json      (may gain add_alias entries)
  ~/norris-agent/data/customer_registry_review.csv (refreshed with new finds)
  ~/norris-ops/assets/js/registry-client.js       (EXTEND — tooltip)
  ~/norris-ops/assets/css/tooltip.css             (NEW)
  ~/norris-agent/tests/test_fuzzy_match.py        (NEW)
  ~/norris-agent/tests/test_add_alias.py          (NEW)
  ~/norris-agent/tests/test_canonical_enforce.py  (NEW)
  ~/norris-agent/tests/test_registry_remediation.py (NEW)

6.1  FUZZY MATCH IMPLEMENTATION (fuzzy_match.py)
     from rapidfuzz import fuzz, process

     def score_candidate(raw: str, entry: dict) -> int:
         """Return 0–100 confidence that raw matches this registry entry."""
         base = 0

         # Exact match on canonical_name
         if raw.strip().lower() == entry["canonical_name"].strip().lower():
             return 100

         # company_root token-set match
         company_score = fuzz.token_set_ratio(
             raw, entry["company_root"]
         )  # 0-100
         base = company_score * 0.6  # max 60 from company

         # Alias exact match +20
         if any(raw.strip().lower() == a.strip().lower()
                for a in entry.get("aliases", [])):
             base += 20

         # POC match (if raw contains a person-like substring) +30
         poc = entry.get("poc", "")
         if poc and fuzz.partial_ratio(poc, raw) > 85:
             base += 30

         # Branch/location match +10
         branch = entry.get("branch", "")
         if branch and fuzz.partial_ratio(branch, raw) > 85:
             base += 10

         return min(int(base), 100)

     def match_customer(raw: str, registry: list) -> dict:
         """Return {best, candidates, tier, action}."""
         scored = sorted(
             [(score_candidate(raw, e), e) for e in registry],
             key=lambda x: -x[0]
         )
         best_score, best_entry = scored[0] if scored else (0, None)
         candidates = [
             {"entry_id": e["id"], "canonical_name": e["canonical_name"],
              "score": s}
             for s, e in scored[:3] if s > 40
         ]
         if best_score >= 95:
             tier = "auto_apply"
             action = "apply"
         elif best_score >= 80:
             tier = "flag"
             action = "apply_with_flag"
         else:
             tier = "review"
             action = "mark_review"
         return {
             "best": best_entry,
             "best_score": best_score,
             "candidates": candidates,
             "tier": tier,
             "action": action,
         }

6.2  add_alias() FUNCTION (registry_loader.py)
     def add_alias(entry_id: str, new_alias: str, confidence: int,
                   source: str = "sa_auto") -> dict:
         """Append alias to entry. Atomic. Ledger event written."""
         path = Path.home() / "norris-agent/data/customer_registry.json"
         with FileLock(str(path) + ".lock"):
             registry = json.loads(path.read_text())
             entry = next(e for e in registry if e["id"] == entry_id)
             if new_alias in entry.get("aliases", []):
                 return {"success": False, "reason": "duplicate",
                         "entry_id": entry_id, "alias": new_alias}
             entry.setdefault("aliases", []).append(new_alias)
             tmp = path.with_suffix(".tmp")
             tmp.write_text(json.dumps(registry, indent=2))
             os.fsync(...)
             tmp.rename(path)
         # Ledger
         ledger.append({
             "ledger_id": f"led_{uuid.uuid4().hex}",
             "ts": datetime.now(ZoneInfo("America/Chicago")).isoformat(),
             "shipment_id": None,
             "event_type": "alias_added",
             "actor": source,
             "data": {
                 "entry_id": entry_id,
                 "alias": new_alias,
                 "confidence": confidence,
             },
         })
         return {"success": True, "entry_id": entry_id,
                 "alias": new_alias, "confidence": confidence}

6.3  ⚠ INDICATOR + TOOLTIP
     When registry_loader returns tier="review", the customer cell in
     the table renders with ⚠ class:
       <td class="customer-cell review-needed" data-raw="{raw_input}"
           data-candidates='[{...}, {...}, {...}]'>
         ⚠ {raw_input}
       </td>

     Tooltip on hover (500ms delay, JS):
       ┌──────────────────────────────────────────────┐
       │ ⚠ Below auto-apply threshold (95%)          │
       │                                              │
       │ Raw: "{raw_input}"                           │
       │                                              │
       │ Closest matches:                             │
       │   1. LineTec Services - Thornhill   73%      │
       │   2. LineTec Services - LeCompte    68%      │
       │   3. AEP/SWEPCO - Riley             51%      │
       │                                              │
       │ Status will resolve when an alias is added   │
       │ to registry or Aaron marks as REVIEW.        │
       └──────────────────────────────────────────────┘

     Click on ⚠ offers two inline actions (Phase B keeps simple;
     Phase D adds one-click resolve):
       [Mark as REVIEW]  [Copy raw text]

     CSS (tooltip.css):
       .status-tooltip, .warn-tooltip {
         position: absolute;
         background: rgba(10, 14, 92, 0.96);
         color: white;
         padding: 12px 16px;
         border-radius: 6px;
         box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
         font-size: 0.875rem;
         max-width: 340px;
         z-index: 1000;
         opacity: 0;
         transform: translateY(4px);
         transition: opacity 150ms ease, transform 150ms ease;
         pointer-events: none;
       }
       .tooltip-visible {
         opacity: 1;
         transform: translateY(0);
         pointer-events: auto;
       }

6.4  CANONICAL ENFORCEMENT (canonical_enforce.py)
     CANONICAL_RE = re.compile(r"^[A-Za-z0-9&\-\.\s]+ - [A-Za-z\s\.]+$")
     
     def is_canonical(name: str) -> bool:
         return bool(CANONICAL_RE.match(name))
     
     def scan_registry() -> list:
         """Return list of entries whose canonical_name violates format."""
         registry = load_registry()
         violations = []
         for e in registry:
             if not is_canonical(e["canonical_name"]):
                 violations.append({
                     "entry_id": e["id"],
                     "canonical_name": e["canonical_name"],
                     "company_root": e.get("company_root", ""),
                     "poc": e.get("poc", ""),
                     "reason": (
                         "missing person" if " - " not in e["canonical_name"]
                         else "format mismatch"
                     ),
                 })
         return violations

     Run at build time in registry_remediation.py → write violations to
     ~/norris-agent/data/customer_registry_review.csv with a column
     "canonical_violation=true". Aaron resolves during later review pass.

6.5  REGISTRY REMEDIATION SCAN (registry_remediation.py)
     Runs once. Iterates all 82 registry entries:
       1. If canonical violation → try to propose fix
          a. If entry has poc → canonical = f"{company_root} - {poc}"
          b. If no poc → scan SD HTML files for orderer name associated
             with this company_root → propose candidates
          c. If no signal → flag for Aaron as "needs_orderer"
       2. Write proposal to customer_registry_review.csv with columns:
          entry_id, current_canonical, proposed_canonical, reason,
          source_evidence, action_needed
       3. Do NOT auto-apply without Aaron's explicit approval
     
     Output: appends to existing customer_registry_review.csv
     (don't overwrite — append a new section with a timestamp header).

6.6  BRINK INVESTIGATION
     Aaron mentioned "Brink" Session 6 end — almost certainly Brink
     Constructors (per Session 4 research: transitioned from Dealer to
     Direct August 2025, multi-location parent + child structure).

     KNOWN CANDIDATES (from Session 4 QB Contact List analysis):
       • Brink Constructors — Travis Fischer (Corporate A/P)
         Rapid City SD parent. Net 30, ACH, PO required.
       • Brink Constructors — Chad Christian
         Princeton MN child branch. CC, 4% fee.
       • Brink Constructors — Lance Brogan
         Leesburg FL child. Net 30.
       • Brink Constructors — Josh Greanhaus
         Burlington NC child. Net 30.

     Action in registry_remediation.py:
       1. Search ~/norris-agent/project_knowledge/QB_Contact_List_with_Addresses*.xlsx
          for "Brink*"
       2. Search SD HTML files at ~/norris-ops/shipping-docs/ for "Brink"
          to determine which Brink POC has actually placed orders
       3. Cross-check the 4 known candidates above; verify still in QB
       4. Output to customer_registry_review.csv with proposed entries:
          - Brink Constructors - Travis Fischer    (Net 30, ACH, PO req)
          - Brink Constructors - Chad Christian    (CC, 4% fee)
          - Brink Constructors - Lance Brogan      (Net 30)
          - Brink Constructors - Josh Greanhaus    (Net 30)
       5. Flag any additional Brink POCs found in QB not on the list.
       6. Do NOT write to registry without Aaron's approval — these
          go in _review.csv only. Aaron decides which to add.

6.7  REGISTRY-CLIENT.JS EXTENSION
     Extend existing registry-client.js (from Phase A) to:
       - Load registry via fetch on page init (already in Phase A)
       - For each table row, run match_customer() via a small JS port
         (or expose via sa-v1-writer endpoint /api/match?raw=...)
       - Apply tier → render:
           auto_apply → canonical_name, no ⚠
           flag       → canonical_name + ⚠ (subtle) + morning-brief note
           review     → ⚠ {raw_input}, full tooltip, REVIEW status hint
       - Attach mouseenter/mouseleave handlers to ⚠ cells for tooltip

     SIMPLER PATH (recommended): Do matching server-side in sa_v1_writer.py
     /api/shipments endpoint, return already-resolved canonical_name +
     flag. Frontend just renders what it gets.

6.8  MORNING BRIEF HOOK (data prep only; delivery via Phase C)
     lib/morning_brief.py (NEW):
       def compute_brief() -> dict:
           return {
               "date": today_ct().isoformat(),
               "flagged_80_95": count_tier("flag"),
               "review_pending": count_tier("review"),
               "canonical_violations": len(scan_registry()),
               "queue_size": count_open_shipments(),
               "unbilled_total": sum_unbilled(),
           }
     Write to ~/norris-agent/data/morning_brief_queue.jsonl (append-only).
     Phase C daemons will pick this up and dispatch via Telegram.

6.9  TESTS
     test_fuzzy_match.py:
       - Exact canonical match → 100
       - Alias exact match → 80+ (company + alias bonus)
       - Close company + POC match → 90+
       - Company only → ~60
       - No match → < 40
       - Tiered: 10 inputs across all 3 tiers, each routes correctly
     test_add_alias.py:
       - Happy path: alias added, entry updated, ledger written
       - Idempotent: second call with same alias returns duplicate
       - Atomic: write doesn't corrupt under interruption
       - Invalid entry_id raises ValueError
     test_canonical_enforce.py:
       - Valid: "LineTec Services - Richard Thornhill" → True
       - Missing person: "LineTec Services" → False
       - Slash variant: "LineTec/LTS Power" → False
       - Dealer with space in name: "Aerial Hydraulics - Wayne Abide" → True
       - Scan returns all violations in current 82-entry registry
     test_registry_remediation.py:
       - Runs without mutation when no violations
       - Writes _review.csv when violations present
       - Brink investigation outputs candidates from QB list
       - SD scan finds orderer names for entries with POC missing
     Playwright:
       - ⚠ indicator renders on REVIEW-tier rows
       - Hover ⚠ → tooltip appears after 500ms
       - Tooltip shows top 3 candidates with %
       - Mouseleave → tooltip fades 150ms

6.10 COMMITS
     cd ~/norris-agent
     git add lib/fuzzy_match.py lib/canonical_enforce.py \
             lib/registry_remediation.py lib/morning_brief.py \
             lib/registry_loader.py data/customer_registry_review.csv \
             tests/test_fuzzy_match.py tests/test_add_alias.py \
             tests/test_canonical_enforce.py tests/test_registry_remediation.py
     python3 -m pytest tests/test_fuzzy_match.py tests/test_add_alias.py \
             tests/test_canonical_enforce.py tests/test_registry_remediation.py -v
     # All must pass before commit
     git commit -m "Phase B Section 7-full: registry fuzzy match (tiered 95/80), add_alias, canonical enforcement scan, Brink investigation, morning brief prep"
     
     cd ~/norris-ops
     git add assets/js/registry-client.js assets/css/tooltip.css
     git commit -m "Phase B Section 7-full: ⚠ hover tooltip + canonical-enforced rendering"

     RUN REMEDIATION SCAN (one-time):
       python3 -m norris_agent.lib.registry_remediation --scan
     Output written to customer_registry_review.csv. Include summary in
     Tier 2 ping:
       - Violations found: N
       - Brink candidates: M
       - Entries needing orderer: K
     
     Tier 2 ping:
       "Section 7-full committed. Fuzzy match live (tiered 95/80/below).
        ⚠ tooltip wired. Remediation scan found: {N} canonical violations,
        {M} Brink candidates, {K} entries needing orderer name.
        customer_registry_review.csv refreshed. Moving to Section 7-recon."

═══════════════════════════════════════════════════════════════════════════════
SECTION 7 — DATA TRUTH-UP RECONCILIATION [Build Section 7-recon]
═══════════════════════════════════════════════════════════════════════════════

Goal: Aaron asked "what data SHOULD be there?" Cross-reference Detailed
Sales Report + QB Contact List + shipments.json + SD HTML files. Produce
"Expected vs Actual" report. Current shipments.json shows 23 open SDs;
Aaron suspects more. Verify.

FILES TOUCHED:
  ~/norris-agent/lib/truth_up.py                      (NEW)
  ~/norris-agent/bin/run_truth_up.py                  (NEW — CLI entrypoint)
  ~/norris-ops/docs/truth-up/                         (NEW directory)
  ~/norris-ops/docs/truth-up/truth_up_2026-04-23.md   (NEW — first report)
  ~/norris-agent/tests/test_truth_up.py               (NEW)
  
  INPUTS (read-only):
  ~/norris-agent/project_knowledge/Detailed_Sales_Report__Product_and_Services_ALL_4726.csv
  ~/norris-agent/project_knowledge/QB_Contact_List_with_Addresses__1_10_26.xlsx
    (or newer; find latest)
  ~/norris-ops/data/shipments.json
  ~/norris-ops/shipping-docs/*.html

7.1  TRUTH_UP.PY (pseudocode)
     def load_qb_sales() -> list:
         """Parse Detailed Sales Report. Return list of invoiced
         product/service rows. Keep invoice #, date, customer, amount."""
         ...

     def load_qb_contacts() -> list:
         """Parse QB Contact List xlsx. Return customer records."""
         ...

     def load_shipments_json() -> list:
         return json.load(open("~/norris-ops/data/shipments.json"))["shipments"]

     def list_sd_files() -> list:
         """Return all SD HTML files at ~/norris-ops/shipping-docs/*.html"""
         return list(Path("~/norris-ops/shipping-docs").glob("*.html"))

     def reconcile() -> dict:
         qb_sales = load_qb_sales()
         qb_contacts = load_qb_contacts()
         shipments = load_shipments_json()
         sd_files = list_sd_files()

         # Count active (not invoiced) in shipments.json
         active = [s for s in shipments if s["status"] != "invoiced"
                   and not s.get("invoice_sent", False)]
         json_count = len(active)  # Expected: 23

         # Count SD HTML files
         disk_count = len(sd_files)

         # Cross-reference: every SD on disk should have a shipments.json entry
         json_ids = {s["id"] for s in shipments}
         disk_ids = {f.stem for f in sd_files}
         missing_from_json = disk_ids - json_ids      # on disk, not in json
         missing_from_disk = json_ids - disk_ids      # in json, no html file
         in_both           = disk_ids & json_ids

         # QB cross-ref: for each active shipment, does QB show it as
         # still-open? (i.e., no invoice #)
         qb_invoice_numbers = {r["invoice_number"] for r in qb_sales
                               if r.get("invoice_number")}
         shipments_with_invoice = [
             s for s in active if s.get("invoice_number")
             and s["invoice_number"] in qb_invoice_numbers
         ]
         # These should NOT be in active list — indicates stale data
         stale_active = [s["id"] for s in shipments_with_invoice]

         # Orphan QB invoices: invoice # not linked to any shipment
         shipment_invoice_numbers = {
             s.get("invoice_number") for s in shipments
             if s.get("invoice_number")
         }
         qb_orphans = [
             r for r in qb_sales if r.get("invoice_number")
             and r["invoice_number"] not in shipment_invoice_numbers
             and r.get("date") and is_within_6_months(r["date"])
         ]

         return {
             "shipments_json_active": json_count,
             "sd_files_on_disk": disk_count,
             "in_both": len(in_both),
             "missing_from_json": sorted(missing_from_json),
             "missing_from_disk": sorted(missing_from_disk),
             "stale_active": stale_active,
             "qb_orphans_6mo": [
                 {"invoice": r["invoice_number"],
                  "customer": r["customer"],
                  "date": r["date"],
                  "amount": r["amount"]}
                 for r in qb_orphans
             ],
             "expected_open_count": len(in_both),  # ground truth
             "discrepancy": json_count - len(in_both),
         }

7.2  REPORT FORMAT (docs/truth-up/truth_up_2026-04-23.md)
     # SA V5 Data Truth-Up Report
     **Date:** 2026-04-23 (Phase B)
     **Purpose:** Aaron asked "what data should be there?" Here are the
     numbers.

     ## Headline
     - shipments.json active count: **{N}**
     - SD HTML files on disk:        **{M}**
     - Overlap (in both):             **{O}**
     - True open-SD count (ground):   **{O}** (canonical)
     - Previous assumption:           **23**
     - Discrepancy:                   **{N - O}**

     ## Detail

     ### SDs on disk with no shipments.json entry (orphans on disk)
     | SD File | Likely Customer | Action |
     |---------|-----------------|--------|
     | S-2026-007.html | (infer from HTML parse) | IMPORT to json |
     | ... | ... | ... |

     ### shipments.json entries with no SD HTML file
     | SD ID | Customer | Action |
     |-------|----------|--------|
     | S-2026-019 | (tombstoned) | Expected — tombstoned pre-Phase B |
     | ... | ... | ... |

     ### QB invoices (last 6 months) not linked to any shipment
     | Invoice # | Customer | Date | Amount | Action |
     |-----------|----------|------|--------|--------|
     | 1497 | AEP/SWEPCO | 2026-02-18 | $245 | INVESTIGATE: supplemental T04? |
     | ... | ... | ... | ... | ... |

     ### shipments.json active entries that QB shows invoiced (stale)
     | SD ID | QB Invoice # | Action |
     |-------|--------------|--------|
     | ... | ... | RETIRE from active |

     ## Aaron's options
     1. **Import orphaned SDs**: run `import_sds.py` to add missing-from-json
        entries (requires Phase C daemons or manual approval).
     2. **Retire stale**: mark "stale_active" entries as invoiced.
     3. **Leave historical**: older than Feb 2026, leave as-is.

     ## Appendix — raw counts
     ```
     shipments.json active:  {N}
     SD files disk:          {M}
     in_both:                {O}
     missing_from_json:      {P}
     missing_from_disk:      {Q}
     stale_active:           {R}
     qb_orphans_6mo:         {S}
     ```

7.3  ABORT-WORTHY CONDITIONS
     If discrepancy > 50% of json_count:
       - HALT + Tier 1 Aaron
       - Do NOT auto-apply any changes
       - Summarize: "Big discrepancy found. Full report at <path>. Review
         before Phase B proceeds."
     Else:
       - Write report
       - Continue to Section 8

7.4  TESTS (test_truth_up.py)
     Use fixture data:
       - Mini shipments.json with 5 entries (3 active, 2 invoiced)
       - Mini QB sales fixture with 6 rows
       - Mini SD file directory with 4 .html files (one orphan, one
         matched to json)
     Assert:
       - reconcile() counts correctly
       - missing_from_json detects orphan
       - missing_from_disk detects json-only entry
       - stale_active detects json_active + QB invoice match
       - qb_orphans_6mo excludes >6mo
       - discrepancy math correct

7.5  COMMIT
     cd ~/norris-agent
     git add lib/truth_up.py bin/run_truth_up.py tests/test_truth_up.py
     git commit -m "Phase B Section 7-recon: data truth-up reconciliation across QB + shipments.json + SD disk"
     
     cd ~/norris-ops
     mkdir -p docs/truth-up
     python3 ~/norris-agent/bin/run_truth_up.py --out docs/truth-up/truth_up_2026-04-23.md
     git add docs/truth-up/truth_up_2026-04-23.md
     git commit -m "Phase B Section 7-recon: first truth-up report 2026-04-23"
     
     Tier 2 ping INCLUDE:
       "Section 7-recon committed. Truth-up report:
          • shipments.json active: {N}
          • SDs on disk: {M}
          • Ground truth: {O}
          • Discrepancy: {D}
          • QB orphans (6mo): {S}
        Full report: ~/norris-ops/docs/truth-up/truth_up_2026-04-23.md
        Moving to Section 8."

═══════════════════════════════════════════════════════════════════════════════
SECTION 8 — PAYMENT BADGE + CC FEE AUTO-CALC COLUMN [Build Section 8]
═══════════════════════════════════════════════════════════════════════════════

Goal: Inline payment badge pill next to customer name. CC Fee column
auto-populates when customer's cc_fee_applies = true. LineTec billing-split
enforcement. CC-on-file Notes auto-populate (idempotent).

FILES TOUCHED:
  ~/norris-ops/shipments.html                  (badge markup, CC Fee col)
  ~/norris-ops/assets/css/shipments-v1.css     (badge styles)
  ~/norris-ops/assets/js/payment-badge.js      (NEW)
  ~/norris-ops/assets/js/cc-fee-calc.js        (NEW)
  ~/norris-agent/lib/payment_rules.py          (NEW)
  ~/norris-agent/lib/notes_auto.py             (NEW)
  ~/norris-agent/data/customer_registry.json   (ensure payment field present
                                                per entry; remediate if not)
  ~/norris-agent/tests/test_payment_badge.py   (NEW)
  ~/norris-agent/tests/test_cc_fee_calc.py     (NEW)
  ~/norris-agent/tests/test_notes_auto.py      (NEW)

8.1  PAYMENT BADGE (inline pill next to customer name, within
     .customer-cell):
     <td class="customer-cell">
       <span class="canonical-name">{canonical_name}</span>
       <span class="payment-badge payment-{type}">{label}</span>
     </td>

     Types + colors:
       Net 30        → gray    (#9CA3AF)   background: rgba(156,163,175,0.15)
       Net 60        → dark gray (#6B7280) background: rgba(107,114,128,0.15)
       CC            → orange  (#F59E0B)   background: rgba(245,158,11,0.15)
       CC on file    → bright orange (#F97316) background: rgba(249,115,22,0.20)
       ACH           → green   (#10B981)   background: rgba(16,185,129,0.15)
       On Receipt    → cyan    (#06D0FF)   background: rgba(6,208,255,0.15)

     Labels (short):
       "Net 30" / "Net 60" / "CC" / "💳 CC on file" / "ACH" / "On Receipt"

     Hover tooltip shows full terms:
       "Net 30" → "Net 30 terms. Payment due 30 days from invoice date."
       "CC" → "Pays by credit card. 4% convenience fee applies."
       "CC on file" → "Card on file. Charge at invoice send. 4% fee applies."
       "ACH" → "Bank ACH. No card fee."
       "On Receipt" → "Due on receipt."

     Source: customer_registry[entry].payment field.
     Fallback if field missing: badge renders "—" gray + tooltip "No payment
     preference on record; ask customer."

8.2  CC FEE COLUMN (column 11)
     <td class="cc-fee-cell">
       {if cc_fee_applies:}
         <span class="cc-fee-amount">${cc_fee}</span>
         <span class="cc-fee-info" data-tooltip="
           Subtotal: ${subtotal}
           Shipping: ${cust_ship}
           Total subject: ${total}
           × 4.0% = ${cc_fee}">ⓘ</span>
       {else:}
         <span class="cc-fee-dash">—</span>
       {end if}
     </td>

     Formula (payment_rules.py):
       def compute_cc_fee(shipment: dict, registry_entry: dict) -> float:
           if not cc_fee_applies(registry_entry):
               return 0.0
           subtotal = sum(li["qty"] * li["rate"]
                          for li in shipment["line_items"])
           shipping = shipment.get("customer_shipping", 0)
           return round((subtotal + shipping) * 0.04, 2)

       def cc_fee_applies(registry_entry: dict) -> bool:
           p = registry_entry.get("payment", "")
           return p in ("CC", "CC on file")

8.3  LINETEC BILLING-SPLIT ENFORCEMENT
     In registry:
       LineTec Services - Richard Thornhill (Alexandria) → Net 30, PO req,
         NO CC fee
       LineTec Services - Tommy LeCompte    (Corporate)  → Net 30, PO req,
         NO CC fee
       LineTec Services - Steve Guthrie     (Guthrie GA) → CC, 4% fee,
         no PO required
     
     In payment_rules.py, add guardrail:
       def validate_linetec(entry: dict) -> bool:
           """Enforce split. Raise on inconsistency."""
           if entry["company_root"].startswith("LineTec"):
               branch = entry.get("branch", "").lower()
               payment = entry.get("payment", "")
               if "guthrie" in branch and payment != "CC":
                   raise ValueError(
                       f"LineTec-Guthrie must be CC (got {payment})")
               if "guthrie" not in branch and payment not in ("Net 30", "Net 60"):
                   raise ValueError(
                       f"LineTec non-Guthrie must be Net (got {payment})")
           return True

     Run validate_linetec() over all LineTec entries at build time.

8.4  CC-ON-FILE NOTES AUTO-POPULATE (notes_auto.py)
     On FIRST render of any row where payment="CC on file":
       - Check if shipment.notes already contains
         "💳 CC on file — charge at invoice send"
       - If not present: append to notes, audit event
         "cc_on_file_note_auto" fires
       - IDEMPOTENT: never adds twice

     Run once per shipment load:
       def auto_populate_cc_on_file_notes():
           for s in load_shipments():
               registry_entry = resolve_customer(s)
               if registry_entry.get("payment") == "CC on file":
                   reminder = "💳 CC on file — charge at invoice send"
                   current_notes = s.get("notes", "")
                   if reminder not in current_notes:
                       new_notes = (
                           current_notes + ("\n" if current_notes else "")
                           + reminder
                       )
                       write_shipment(s["id"], {"notes": new_notes})
                       audit_append(s["id"], "notes_auto", "sa_auto",
                                   None, None, "cc_on_file_reminder")

     Called once at Phase B deploy (via bin/run_notes_auto.py).

8.5  TESTS
     test_payment_badge.py:
       - all 6 badge types render with correct class + color
       - missing payment field renders "—" fallback
       - hover tooltip content correct per type
     test_cc_fee_calc.py:
       - Net 30 customer: CC fee = 0, cell shows "—"
       - CC customer, subtotal 265, shipping 56 → fee = round(321 × 0.04, 2) = 12.84
       - CC on file customer, subtotal 1525 + shipping 90 → fee = 64.60
       - Edge: qty × rate floating point → rounds correctly to 2 decimals
     test_notes_auto.py:
       - CC on file shipment without reminder → reminder appended + audit fired
       - Second call: idempotent, no second reminder, no audit
       - Non-CC-on-file shipment: no reminder appended
     test_linetec_validation.py:
       - Thornhill (Alexandria, Net 30) passes
       - LeCompte (Corporate, Net 30) passes
       - Guthrie (Guthrie GA, CC) passes
       - Misconfigured Thornhill with CC → raises
       - Misconfigured Guthrie with Net 30 → raises

8.6  COMMIT
     cd ~/norris-ops
     git add shipments.html assets/css/shipments-v1.css \
             assets/js/payment-badge.js assets/js/cc-fee-calc.js
     git commit -m "Phase B Section 8 (frontend): payment badge pill + CC Fee auto-calc column + CC-on-file Notes reminder"
     
     cd ~/norris-agent
     git add lib/payment_rules.py lib/notes_auto.py \
             tests/test_payment_badge.py tests/test_cc_fee_calc.py \
             tests/test_notes_auto.py tests/test_linetec_validation.py
     git commit -m "Phase B Section 8 (backend): payment_rules engine, CC fee formula, LineTec split validation, notes auto-reminder"
     
     # Run one-time CC-on-file auto-populate
     python3 ~/norris-agent/bin/run_notes_auto.py
     cd ~/norris-ops && git add data/shipments.json || true
     git diff --cached --quiet && echo "no auto-note changes" || \
       git commit -m "Phase B Section 8: auto-populated CC-on-file reminders in Notes"
     
     Tier 2 ping:
       "Section 8 committed. Payment badges + CC Fee column live.
        LineTec split validated. CC-on-file auto-notes populated for
        {N} shipments. Moving to Verification Gauntlet."

═══════════════════════════════════════════════════════════════════════════════
SECTION 9 — VERIFICATION GAUNTLET (all must pass before Exit Protocol)
═══════════════════════════════════════════════════════════════════════════════

Run in order. If ANY fail → HALT + Tier 1 Aaron with specific failure.

9.1  Full pytest
     cd ~/norris-agent
     python3 -m pytest tests/ -v --tb=short 2>&1 | tee /tmp/phase_b_pytest.log
     tail -3 /tmp/phase_b_pytest.log
     # Expected: Phase A 76 + Phase B ~100+ = ~175–190 passing; 0 failed

9.2  Full Playwright
     cd ~/norris-ops
     npx playwright test --reporter=list 2>&1 | tee /tmp/phase_b_playwright.log
     tail -10 /tmp/phase_b_playwright.log
     # Expected: all green

9.3  Defensive greps (exit code 1 on any hit)
     bash -c '
       set -e
       echo "--- SKU check ---"
       N=$(grep -rE "\bSKU\b" ~/norris-ops/ ~/norris-agent/lib/ \
             --include="*.py" --include="*.html" --include="*.js" \
             --include="*.css" --include="*.json" --include="*.md" \
             2>/dev/null | grep -v "test_" | grep -v "MEMORY_" | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: SKU found: $N"; exit 1; }

       echo "--- Abadie check ---"
       N=$(grep -rE "Abadie" ~/norris-ops/ \
             ~/norris-agent/data/customer_registry.json 2>/dev/null | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: Abadie found: $N"; exit 1; }

       echo "--- FlexPro Armor® check ---"
       N=$(grep -rE "FlexPro Armor®" ~/norris-ops/ --include="*.html" 2>/dev/null | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: FlexPro Armor® found: $N"; exit 1; }

       echo "--- FlexPro Armor Guard check ---"
       N=$(grep -rE "FlexPro Armor Guard" ~/norris-ops/ ~/norris-agent/ 2>/dev/null | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: FlexPro Armor Guard found: $N"; exit 1; }

       echo "--- Placeholder check ---"
       N=$(grep -rE "\[TBD\]|\[TODO\]|\[INSERT\]|lorem ipsum|placeholder" \
             ~/norris-ops/ --include="*.html" --include="*.js" 2>/dev/null | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: placeholders found: $N"; exit 1; }

       echo "--- S00[0-9] outside whitelist ---"
       # Whitelist: audit_log.jsonl, ledger, tests
       N=$(grep -rE "S00[0-9]" ~/norris-ops/ \
             --exclude-dir=node_modules --exclude-dir=.git \
             --include="*.html" --include="*.js" 2>/dev/null | \
             grep -v "audit_log" | grep -v "ledger" | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: S00[0-9] found: $N"; exit 1; }

       echo "ALL DEFENSIVE GREPS CLEAN"
     '

9.4  Canonical naming grep (NEW — Phase B canary)
     Run a headless browser render of shipments.html with test fixture
     data, extract all .customer-cell .canonical-name text contents,
     assert each matches /^[A-Za-z0-9&\-\.\s]+ - [A-Za-z\s\.]+$/ OR has
     .review-needed class (⚠).
     
     Implementation: scripts/verify_canonical_naming.py:
       from playwright.sync_api import sync_playwright
       import re
       
       CANONICAL_RE = re.compile(r"^[A-Za-z0-9&\-\.\s]+ - [A-Za-z\s\.]+$")
       
       with sync_playwright() as p:
           browser = p.chromium.launch()
           page = browser.new_page()
           page.goto("http://192.168.1.184:8765/shipments.html")
           page.wait_for_selector(".customer-cell")
           cells = page.query_selector_all(".customer-cell")
           violations = []
           for c in cells:
               if "review-needed" in (c.get_attribute("class") or ""):
                   continue  # ⚠ allowed to be non-canonical
               name = c.query_selector(".canonical-name")
               if name:
                   text = name.inner_text()
                   if not CANONICAL_RE.match(text):
                       violations.append(text)
           if violations:
               print(f"FAIL: {len(violations)} canonical violations:")
               for v in violations: print(f"  - {v}")
               exit(1)
           print(f"PASS: all {len(cells)} customer cells canonical (or ⚠)")

9.5  Canaries (immutable values)
     python3 -c "
     import json
     data = json.load(open('$HOME/norris-ops/data/shipments.json'))
     # Chain Electric $8,930.48
     chain = [s for s in data['shipments']
              if 'Chain Electric' in s.get('customer_name_raw', '')]
     assert chain, 'Chain Electric missing'
     # Sum line items + shipping + CC fee
     total = sum(li['qty']*li['rate'] for s in chain
                 for li in s['line_items']) + sum(
         s.get('customer_shipping', 0) + s.get('cc_fee', 0) for s in chain)
     assert abs(total - 8930.48) < 0.01, f'Chain Electric total {total} != 8930.48'
     print('CANARY PASS: Chain Electric \$8,930.48')
     "
     
     # Pickle, Crosby, FIX 9/10/11 — similar assertion scripts

9.6  sa-v1-writer health
     curl -sf http://127.0.0.1:8766/health
     # Expected: {"ok": true, "version": "phase-b", "ledger_entries": N}

9.7  Preview server respin
     ps aux | grep "http.server 8765" | grep -v grep | awk '{print $2}' | \
       xargs -r kill
     sleep 1
     cd /tmp/sa-v5-preview && git pull origin feature/sa-v5-completion
     nohup python3 -m http.server 8765 --bind 0.0.0.0 > /tmp/preview-8765.log 2>&1 &
     sleep 2
     curl -sf http://192.168.1.184:8765/shipments.html >/dev/null
     # Expected: 200

9.8  Smoke check (curl content)
     curl -s http://192.168.1.184:8765/shipments.html | \
       grep -E "status-pill|detail-panel|payment-badge|cc-fee|mega-celebrations"
     # Expected: at least one match per pattern

═══════════════════════════════════════════════════════════════════════════════
SECTION 10 — EXIT PROTOCOL (on all gates green)
═══════════════════════════════════════════════════════════════════════════════

10.1 Write handoff doc
     ~/norris-ops/docs/handoffs/Phase_B_DONE_2026-04-23.md
     
     Contents:
       # Phase B DONE — {YYYY-MM-DD}
       
       ## Commits
       - norris-ops  HEAD: {HASH}
       - norris-agent HEAD: {HASH}
       
       ## Test baseline
       - pytest:    {PREV} → {NEW} passing (+{DELTA})
       - playwright: {PREV} → {NEW} passing (+{DELTA})
       
       ## Defensive greps
       - SKU: 0
       - Abadie: 0
       - FlexPro Armor®: 0
       - FlexPro Armor Guard: 0
       - Placeholders: 0
       - Canonical naming violations: 0 (excluding ⚠ cells)
       - Canaries: PASS (Chain Electric $8,930.48, Pickle, Crosby, FIX
         9/10/11)
       
       ## Shipped in Phase B
       - Section 1.5 — visual polish (bigger logo, Lato 900 hero, chevron
         48px, phoenix 10% pulse, page-load cascade)
       - Section 3 — interactive status pill + audit trail + 6 standard
         celebrations + 5 MEGA celebrations + sa-v1-writer LaunchAgent
       - Section 5 — 2-col expanded detail panel + 13 mirrored copy
         buttons + audit preview + full history modal
       - Section 6 — Notes editable auto-save + Invoice Sent archive with
         confetti/slide-out
       - Section 7-full — Registry fuzzy match tiered 95/80 + add_alias +
         canonical enforcement + ⚠ hover tooltip + Brink investigation
       - Section 7-recon — Data truth-up report (first one dated today)
       - Section 8 — Payment badge + CC Fee column + LineTec split
         validation + CC-on-file auto-notes
       
       ## Known gaps (Phase C scope)
       - QB webhook not wired (Trigger 1)
       - Gmail auto-parse not running (Trigger 2)
       - UPS polling not running (Trigger 3)
       - Customer reply parsing DEFERRED to V2 (Aaron decision)
       
       ## Phase C readiness checklist
       - [ ] Aaron confirms Gmail OAuth still valid (acnorris@norrisutilities.com)
       - [ ] Aaron confirms QB webhook creds
       - [ ] Aaron confirms UPS API creds
       - [ ] Daemons designed with heartbeat 60s / failover 5min
       - [ ] Investigation loop (E.13 / Section 9.6) scaffold written
       
       ## Click-test checklist for Aaron (next morning)
       ☐ Preview at http://192.168.1.184:8765 loads with visual pop
       ☐ Bigger logo, Lato 900 hero, chevron sharper, phoenix pulses
       ☐ Page-load: hero fades in, rows cascade in
       ☐ Hover ⚠ on flagged row → tooltip with top 3 candidates
       ☐ Click status pill → dropdown → select new → celebration fires
       ☐ Click ▼ → detail panel expands 2-col
       ☐ Click row (not action cells) → detail panel expands
       ☐ Click Notes cell → edit mode → type → blur saves
       ☐ Tick Invoice Sent → confetti + row slide-out + archive
       ☐ Payment badges visible (Net 30 / CC / ACH / etc.)
       ☐ CC Fee column populated only for CC customers
       ☐ CC-on-file customers show 💳 reminder in Notes
       ☐ Status → invoiced on LAST row → mega M1 (queue cleared)
       ☐ Truth-up report at ~/norris-ops/docs/truth-up/truth_up_2026-04-23.md
       
       Reply to Tier 1 with: PHASE B PASS or PHASE B FAIL <reason>

10.2 Push both repos
     cd ~/norris-ops && git push origin feature/sa-v5-completion
     cd ~/norris-agent && git push origin feature/sa-v5-completion

10.3 Tier 1 Telegram Aaron (full ping, formatted for copy-paste)
     
     🚀 PHASE B COMPLETE
     
     All gates green. Preview respin at http://192.168.1.184:8765
     
     Commits:
       norris-ops  {HASH}
       norris-agent {HASH}
     
     Tests: {PREV} → {NEW} passing
     Defensive greps: all 0
     Canaries: all PASS
     
     Shipped:
     • Visual polish (logo 120px, Lato 900 hero, chevron 48px, phoenix pulse)
     • Status pill interactive + 6 standard + 5 mega celebrations
     • 2-col detail panel + 13 mirrored copy buttons + audit modal
     • Notes editable + Invoice Sent archive with confetti
     • Registry fuzzy match + ⚠ hover tooltip + canonical enforcement
     • Data truth-up report: ~/norris-ops/docs/truth-up/truth_up_2026-04-23.md
     • Payment badges + CC Fee column + LineTec split validated
     • CC-on-file auto-notes (populated {N} shipments)
     
     Truth-up findings:
       • shipments.json active: {N}
       • SDs on disk: {M}
       • Ground-truth open: {O}
       • Discrepancy: {D}
       • QB orphans (6mo): {S}
     
     Click-test checklist in handoff doc:
       ~/norris-ops/docs/handoffs/Phase_B_DONE_2026-04-23.md
     
     Reply: PHASE B PASS or PHASE B FAIL <reason>
     
     Phase C readiness: awaits your Gmail/QB/UPS cred confirmation.

10.4 NorrisPalace ingest (post Tier 1 send)
     Log Phase B completion to local persistent memory:
     
     np ingest --type session_close \
               --tag sa_v5_phase_b \
               --tag complete \
               --content "Phase B DONE 2026-04-23. norris-ops {HASH},
                          norris-agent {HASH}. {NEW_TESTS} tests.
                          7 sections shipped. Truth-up report at
                          docs/truth-up/truth_up_2026-04-23.md.
                          Awaiting Aaron PHASE B PASS click-test."

     Verify ingest:
       np query --tag sa_v5_phase_b | head -5

     Then write Phase B summary to NP separately:
       np ingest --type build_summary \
                 --tag sa_v5 \
                 --tag phase_b \
                 --content "$(cat ~/norris-ops/docs/handoffs/Phase_B_DONE_2026-04-23.md)"

     Do NOT use --embed flag (G Brain write broken; NP local only OK).

═══════════════════════════════════════════════════════════════════════════════
SECTION 11 — HARD DON'TS (enforced throughout Phase B)
═══════════════════════════════════════════════════════════════════════════════

• Never rebuild the celebration engine if one exists — grep first, wire to it.
• Never merge feature/sa-v5-completion to main — HALTED until Phase E.
• Never tear down the preview server on :8765 — respin only.
• Never use "SKU" — always "P/N" or "part number".
• Never show pricing on customer-facing SD HTML files.
• Never characterize real orders as duplicate drafts without Aaron
  confirmation.
• Never let lower-priority source overwrite higher (Source Priority H).
• Never skip canary validation.
• Never ship without ⚠ hover tooltip (A22).
• Never ship without canonical naming enforcement (A21).
• Never fire mega-celebration for negative event (blocked, REVIEW).
• Never use cron — LaunchAgents only for macOS Keychain-accessing services.
• Never propose rebuilding systems that already exist — search first.
• Never install ClawHub skills without Aaron's approval.
• Never touch main branch.
• Never overwrite customer_registry.json without FileLock.
• Never write to shipments.json without FileLock + atomic rename.
• Never push to GitHub before tests pass.
• Never send Tier 1 Telegram between 9:30 PM and 3:30 AM CT unless HALT.

═══════════════════════════════════════════════════════════════════════════════
SECTION 12 — ABORT CONDITIONS (HALT + Tier 1 Aaron immediately)
═══════════════════════════════════════════════════════════════════════════════

A1. Section 0 state verification fails (any step 0.1–0.9)
A2. pytest baseline reduces (Phase A 76 → any fail)
A3. Playwright tests fail
A4. Any defensive grep returns > 0
A5. Any canary fails ($8,930.48 drift, Pickle $1,834 drift, etc.)
A6. JSON parse error on customer_registry.json or shipments.json
A7. FileLock deadlock (> 30s wait)
A8. sa-v1-writer LaunchAgent fails to load or health check fails
A9. Celebration engine conflict (existing + new attempt)
A10. Truth-up discrepancy > 50% of json_count
A11. Registry remediation scan reveals > 20 canonical violations
A12. Brink investigation produces conflicting candidates requiring decision
A13. Tooltip CSS breaks existing brand rules (grep brand.css, conflict)
A14. Any customer cell renders without "Company - Person" or ⚠ class
A15. Mega-celebration fires on blocked/REVIEW event
A16. Audit log corruption (malformed JSONL)
A17. Ledger write failure (disk full, permissions)
A18. Git push rejected (diverged or auth issue)
A19. Preview respin fails (curl non-200)
A20. Any file created outside the explicitly-allowed path list

HALT procedure:
  1. Immediately stop code execution.
  2. Record state: last commit hash, last test result, last Section
     completed, last error message.
  3. Tier 1 Telegram Aaron with:
     - Section where halt occurred
     - Exact failure (command, expected, actual)
     - Best-guess root cause
     - Proposed next step (if safe) OR "awaiting decision"
  4. Do NOT attempt recovery without Aaron's explicit go-ahead.

═══════════════════════════════════════════════════════════════════════════════
SECTION 13 — TIER 2 PING TEMPLATES (per-section commits)
═══════════════════════════════════════════════════════════════════════════════

Section 1.5:
  "[SA V5 B] §1.5 visual polish ✅
   ops {HASH}, agent {HASH}. Logo 120px, hero Lato 900, chevron 48px,
   phoenix 10% pulse. Tests +{DELTA}. Moving to §3."

Section 3:
  "[SA V5 B] §3 status + audit + celebrations ✅
   ops {HASH}, agent {HASH}. Status pill interactive, audit trail live,
   6 std + 5 mega celebrations wired. sa-v1-writer :8766 loaded.
   Tests +{DELTA}. Moving to §5."

Section 5:
  "[SA V5 B] §5 detail panel ✅
   ops {HASH}, agent {HASH}. 2-col expanded panel with 13 mirrored copy
   buttons + audit preview + full history modal. Tests +{DELTA}.
   Moving to §6."

Section 6:
  "[SA V5 B] §6 notes + archive ✅
   ops {HASH}, agent {HASH}. Notes click-to-edit + auto-save. Invoice
   Sent tick → confetti + slide-out + mega-cel triggers. Tests +{DELTA}.
   Moving to §7-full."

Section 7-full:
  "[SA V5 B] §7-full fuzzy + canonical + ⚠ ✅
   ops {HASH}, agent {HASH}. Fuzzy match tiered 95/80. ⚠ hover tooltip.
   Remediation: {V} canonical violations, {B} Brink candidates, {O}
   needing orderer. Tests +{DELTA}. Moving to §7-recon."

Section 7-recon:
  "[SA V5 B] §7-recon data truth-up ✅
   ops {HASH}, agent {HASH}. Report at docs/truth-up/truth_up_{DATE}.md.
   Active: {N} | Disk: {M} | Ground: {O} | Delta: {D} | QB orphans: {S}.
   Moving to §8."

Section 8:
  "[SA V5 B] §8 payment badge + CC Fee ✅
   ops {HASH}, agent {HASH}. 6 badge types. CC Fee formula live.
   LineTec split validated. CC-on-file auto-notes populated {N} SDs.
   Tests +{DELTA}. Moving to Verification Gauntlet."

Gauntlet PASS:
  "[SA V5 B] Gauntlet PASS ✅
   pytest {TOTAL} passing. Playwright all green. 8 defensive greps 0.
   6 canaries PASS. Canonical naming verified.
   Writing handoff doc + pushing."

Phase B DONE: see 10.3 (Tier 1 Aaron).

═══════════════════════════════════════════════════════════════════════════════
SECTION 14 — FINAL CERTIFICATION CHECKLIST (CC self-verify before Tier 1)
═══════════════════════════════════════════════════════════════════════════════

Before sending Phase B DONE Tier 1, CC MUST walk this list and confirm
each is ✅. If any is ❌, do NOT send DONE — fix first.

SECTION 1.5 visual polish
  ☐ .nu-hero-logo 120px desktop
  ☐ h1.page-title Lato 900
  ☐ h1.page-title font-size ≥ 4.2rem desktop
  ☐ .nu-chevron 48px depth
  ☐ .nu-phoenix-watermark opacity 0.10 + pulse 8s
  ☐ page-load hero fade + row cascade
  ☐ prefers-reduced-motion respected

SECTION 3 status + audit + celebrations
  ☐ 7 status values with correct colors
  ☐ pill click → dropdown opens
  ☐ keyboard accessible (arrow + enter + esc)
  ☐ 6 standard celebrations wired
  ☐ 5 mega-celebrations wired (M1-M5)
  ☐ Mega-cel rate limits in place
  ☐ audit_log.py schema compliant
  ☐ ledger.py append-only JSONL
  ☐ sa_v1_writer.py LaunchAgent loaded on :8766
  ☐ status tooltip on hover shows last audit

SECTION 5 detail panel
  ☐ ▼ click expands
  ☐ row click expands
  ☐ action cells don't bubble
  ☐ 2-col layout ≥ 768px
  ☐ 1-col < 768px
  ☐ 13 copy buttons mirrored
  ☐ audit preview last 3
  ☐ full history modal works

SECTION 6 notes + archive
  ☐ Notes click enters edit mode
  ☐ blur saves
  ☐ 3s auto-save
  ☐ Cmd+Enter saves
  ☐ Esc cancels
  ☐ audit + ledger on change
  ☐ Invoice Sent tick → confetti + slide-out
  ☐ mega-cels fire on queue-clear/century/unbilled-zero
  ☐ un-tick with confirm
  ☐ atomic write lock verified

SECTION 7-full fuzzy + canonical + ⚠
  ☐ fuzzy_match tiered correctly (95/80/below)
  ☐ add_alias idempotent + ledger
  ☐ ⚠ hover tooltip shows top 3 candidates + %
  ☐ canonical enforcement scan runs
  ☐ registry_remediation.py writes _review.csv
  ☐ Brink investigation candidates output
  ☐ morning brief prep data hook

SECTION 7-recon truth-up
  ☐ report at docs/truth-up/truth_up_YYYY-MM-DD.md
  ☐ shipments.json active count present
  ☐ SDs on disk count present
  ☐ missing_from_json list
  ☐ missing_from_disk list
  ☐ stale_active list
  ☐ qb_orphans_6mo list
  ☐ expected_open_count computed
  ☐ discrepancy ≤ 50% (else HALT already fired)

SECTION 8 payment + CC Fee
  ☐ 6 badge types render
  ☐ CC Fee column populates for CC/CC-on-file only
  ☐ Formula: round((subtotal + shipping) × 0.04, 2)
  ☐ LineTec split validation passes all entries
  ☐ CC-on-file auto-notes populated (count reported)
  ☐ Tooltip on CC Fee shows breakdown

GAUNTLET
  ☐ pytest all pass
  ☐ Playwright all pass
  ☐ SKU grep 0
  ☐ Abadie grep 0
  ☐ FlexPro Armor® grep 0
  ☐ FlexPro Armor Guard grep 0
  ☐ Placeholder grep 0
  ☐ Canonical violation grep 0
  ☐ Chain Electric $8,930.48 canary
  ☐ Pickle $1,834 canary
  ☐ Crosby $1,590 + $146 canary
  ☐ FIX 9 5/5
  ☐ FIX 10 6/6
  ☐ FIX 11 9/9

EXIT
  ☐ Preview respun, 200 OK
  ☐ Smoke content markers present
  ☐ Handoff doc written
  ☐ Git pushed (both repos)
  ☐ Tier 1 ping drafted with correct counts

═══════════════════════════════════════════════════════════════════════════════
SECTION 15 — REFERENCE DATA (for implementation)
═══════════════════════════════════════════════════════════════════════════════

15.1 FlexPro Armor P/N Master (authoritative — xlsx in project_knowledge)

     P/N              | Description             | Direct | Dealer
     NU-BC-2828       | 1-Man BC                | $235   | $195
     NU-BC-2834       | 1.5-Man BC              | $265   | $205   [OOS 3/20]
     NU-BC-2842       | 1.5-Man Large BC        | $265   | $210
     NU-BC-2844       | 1.5-Man Specialty BC    | $295   | $235
     NU-BC-2851       | 2-Man BC                | $305   | $235
     NU-BC-CC2834     | 1.5-Man w/ Upper Ctrl   | $285   | $225
     NU-BC-2834-F     | ARCH 1.5-Man            | $305   | $245
     NU-BC-2851-F     | ARCH 2-Man              | $345   | $275
     NU-BC-2834-C     | 1.5-Man + Shield Combo  | $305   | $245
     NU-BC-2851-C     | 2-Man + Shield Combo    | $345   | $275
     NU-BC-2834-FC    | ARCH 1.5-Man + Shield   | $345   | $275
     NU-BC-2851-FC    | ARCH 2-Man + Shield     | $385   | $305
     NU-BC-D4577      | D-Shape Transmission    | $1050  | $850  [no formula]
     NU-BC-BY2828     | SDP Pin-On              | $275   | $225
     NU-BC-2945-EPBC  | EPBC ETI BC             | $325   | $265
     NU-BCB-2834-SL   | 1.5-Man Shield          | $45    | $38
     NU-BCB-2851-SL   | 2-Man Shield            | $55    | $45

     Pricing source priority: master xlsx authoritative for listed.
     Formula ROUND(Direct × 0.80, nearest $5) fallback only for unlisted.
     D-Shape excluded from formula.

15.2 Customer registry schema (each entry)
     {
       "id": "cust_001",
       "canonical_name": "LineTec Services - Richard Thornhill",
       "company_root": "LineTec Services",
       "branch": "Alexandria, LA",
       "tier": "direct",                // "direct" or "dealer"
       "poc": "Richard Thornhill",
       "aliases": ["LineTec Thornhill", "Thornhill/LineTec", "LTS Power"],
       "payment": "Net 30",              // see 8.1 types
       "bill_to": {
         "address_line_1": "...",
         "city": "Alexandria",
         "state": "LA",
         "zip": "..."
       },
       "drop_ship_endpoints": [
         // for dealer-tier accounts with multiple end customers
         { "endpoint_name": "Primoris T&D",
           "address_line_1": "2015 Holly Rd",
           "city": "Gilmer", "state": "TX", "zip": "75644" }
       ],
       "email": "rthornhill@ltspower.com",
       "phone": "",
       "internal_notes": "Corporate A/P. PO required. No CC fee.",
       "last_activity": "2026-04-23T...",
       "po_required": true,
       "cc_fee_applies": false
     }

15.3 Shipment schema (in shipments.json.shipments[])
     {
       "id": "S-2026-023",
       "status": "shipped",                      // 7 values from 3.2
       "invoice_sent": false,
       "invoice_number": null,                   // set when invoiced
       "customer_id": "cust_001",                // registry FK
       "customer_name_raw": "LineTec Thornhill",  // what SD showed
       "canonical_name_resolved": "LineTec Services - Richard Thornhill",
       "match_score": 100,
       "match_tier": "auto_apply",
       "ship_to": { ... per-order from SD ... },
       "order_date": "2026-04-15",
       "po_number": "DEPT472R",
       "payment_terms": "Net 30",
       "line_items": [
         { "pn": "NU-BC-2851", "description": "2-Man BC", "qty": 1,
           "rate": 305 }
       ],
       "carrier": "UPS",
       "tracking_numbers": ["1Z2W49..."],
       "ship_date": "2026-04-16",
       "reg_cost": 51,
       "customer_shipping": 56,
       "cc_fee_applies": false,
       "cc_fee": 0,
       "notes": "",
       "audit_trail": [ ... last 20 events ... ],
       "sd_file": "shipping-docs/S-2026-023.html",
       "cb_internal_note": "",                   // visible in ops portal
                                                  // Shipments tab only
       "fulfillment_source": "nu_stock" | "vendor_dropship" | "mixed",
       "parent_order_id": null,                  // for multi-ship-to SD
       "courtesy_adjustment": 0
     }

15.4 ISO 8601 + display timestamp helpers
     lib/tz.py:
       from datetime import datetime
       from zoneinfo import ZoneInfo
       CT = ZoneInfo("America/Chicago")
       def now_ct() -> datetime: return datetime.now(CT)
       def iso_ct() -> str:      return now_ct().isoformat()
       def display_ct(dt: datetime = None) -> str:
           dt = dt or now_ct()
           return dt.strftime("%b %d %-I:%M %p CT")

15.5 Payment-type → CC fee boolean matrix
     Net 30      → cc_fee_applies = False
     Net 60      → cc_fee_applies = False
     CC          → cc_fee_applies = True
     CC on file  → cc_fee_applies = True
     ACH         → cc_fee_applies = False
     On Receipt  → cc_fee_applies = False  (default; override per customer)

15.6 Canonical naming regex (final)
     ^[A-Za-z0-9&\-\.\s]+ - [A-Za-z\s\.]+$

15.7 Aaron's preferred Telegram ping format
     - Emoji prefix (🚀 for big, ✅ for section, ⚠ for warn, 🛑 for HALT)
     - Concise bullets
     - Commit hashes short (7 chars)
     - Numbers specific, not "approximately"
     - No corporate jargon
     - Line length < 80 chars

═══════════════════════════════════════════════════════════════════════════════
SECTION 16 — KEY CONTACTS + KNOWN CUSTOMERS (for registry context)
═══════════════════════════════════════════════════════════════════════════════

Vendor contacts (for CC awareness; not used in Phase B build):
  • Boss Products: Thayne Grove (tgrove@bossproductsinc.com) + Troy Gongwer
  • Samson Rope: Donna Poll (dpoll@samsonrope.com) + Sarah Daniels (sdaniels@samsonrope.com)
  • BSS: Andy Barron (primary); Herb Minatre (Owner, flag)

Active FlexPro customers (must render "Company - Person" canonical):
  • LineTec Services - Richard Thornhill (Alexandria LA, Net 30, PO req)
  • LineTec Services - Tommy LeCompte (Corporate, Net 30, PO req)
  • LineTec Services - Steve Guthrie (Guthrie GA, CC, 4% fee)
  • Aerial Hydraulics - Wayne Abide (DEALER, drop-ship to Primoris)
  • Irby Construction - William McCarty (Net 30, PO req)
  • Dominion Energy - Coy Crosby (coy.crosby@dominionenergy.com)
  • AEP/SWEPCO - Brian Riley (Shreveport default)
  • AEP - Sammy Myers (Roanoke)
  • Henkels & McCoy - Lidia Turner (Pell City AL)
  • Chain Electric - AJ Morris (Hattiesburg MS)
  • TUF Solutions - Keith McIntosh (DEALER, ACH no CC fee)
  • Brink Constructors - [INVESTIGATE] (multiple children)
  • ULCS-Birmingham - Kurt Keeney (always 4% CC fee)

NOT customers (do NOT add to registry — common confusion):
  • Patrick Lavette (Renasant Bank — Aaron's banker, NOT a Norris
    Utilities customer; appears in QB contacts only because A/P
    occasionally references him)
  • Jared Lemoine (Irby Construction — BSS/RCOO contact only,
    NEVER orders FlexPro Armor; do NOT confuse with William
    McCarty, who IS the Irby FlexPro orderer)
  • Anyone NOT appearing in the Detailed Sales Report as a
    purchaser of NU products

DEAD — never resurface:
  • Gridco / Shon Cunningham (Aaron told Legacy explicitly multiple
    times. If anything in QB or SDs references this, ignore.)

INFRASTRUCTURE REMINDERS (one more time, for the road):
  • Never install ClawHub skills without vetting. NEVER install
    `peekaboo` or `coding-agent`.
  • cron cannot access macOS login Keychain → use LaunchAgents only
    for any background service that needs auth.
  • Bridge silent rule: success log-only, failure Tier 1.
  • G Brain --no-embed flag if any G Brain ops needed.
  • norrisops.com is canonical portal URL. ops.norrisutilities.com
    RETIRED.

═══════════════════════════════════════════════════════════════════════════════
SECTION 17 — SUCCESS DEFINITION
═══════════════════════════════════════════════════════════════════════════════

Phase B is DONE when:

  (a) All 7 build sections shipped and committed
  (b) Verification gauntlet all green (§9.1–9.8)
  (c) Final certification checklist (§14) all ☐ → ✅
  (d) Handoff doc written (§10.1)
  (e) Both repos pushed (§10.2)
  (f) Tier 1 Aaron ping sent with click-test checklist (§10.3)
  (g) Aaron replies "PHASE B PASS"

On PHASE B PASS:
  - CC closes clean
  - Preview server stays running
  - feature/sa-v5-completion stays unmerged (Phase E handles merge)
  - Phase C planning begins: Aaron confirms Gmail/QB/UPS creds

On PHASE B FAIL:
  - Aaron specifies defect
  - CC enters FIX mode (no new scope, just defect resolution)
  - Re-run gauntlet, re-ping Tier 1

═══════════════════════════════════════════════════════════════════════════════
SECTION 18 — ESTIMATED TIMELINE
═══════════════════════════════════════════════════════════════════════════════

  Section 0 state verify:          15 min
  Section 1.5 visual polish:        45 min
  Section 3 status + celebrations: 120 min  (celebration engine heavy)
  Section 5 detail panel:           75 min
  Section 6 notes + archive:        60 min
  Section 7-full fuzzy + canonical: 90 min
  Section 7-recon truth-up:         45 min
  Section 8 payment + CC Fee:       45 min
  Verification gauntlet:            30 min
  Exit protocol:                    15 min
  ───────────────────────────────────────
  Total (focused):                ~9.0 hours

If elapsed exceeds 12 hours: Tier 1 Aaron with status, do NOT push
unfinished work, stash and hand off.

═══════════════════════════════════════════════════════════════════════════════
END PHASE B MASTER CC PROMPT — BEGIN EXECUTION AT SECTION 0
═══════════════════════════════════════════════════════════════════════════════

Aaron has confirmed PHASE A PASS. This prompt replaces the need for a
separate CC reply to Phase A. Start fresh, verify state, build Phase B,
finish clean. Ping Tier 2 per section commit. Ping Tier 1 only on HALT
or PHASE B DONE.

Wayne standard governs: Would Wayne be proud of this? Make sure the
answer is yes — polish the visual pop, make the celebrations feel
earned, keep the canonical naming iron-clad, hunt the truth-up
discrepancies honestly.

Execute now. Good luck. — M5 Session 7
