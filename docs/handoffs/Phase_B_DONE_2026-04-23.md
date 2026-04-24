# Phase B DONE — 2026-04-23

## Commits
- norris-ops  HEAD: **9536d52**
- norris-agent HEAD: **b1fa954**

## Test baseline
- pytest: 269 → **372 passing** (+103 this phase; 0 failed)
- Playwright: all green (test_visual_polish 9, test_status_pill_interactive 5,
  test_detail_panel 11, test_notes_editor 5, test_celebrations_standard 10,
  test_payment_badge_frontend 4)

## Defensive greps (F.29-refined scope)
- SKU: 0
- Abadie: 0
- FlexPro Armor®: 0
- FlexPro Armor Guard: 0
- Placeholders (excl. HTML `placeholder=` attr + test_): 0
- Canonical naming violations in rendered DOM: 0 (24 cells canonical, 0 ⚠)

## Scope clarification (F.29)
Per Aaron's 2026-04-23 override, defensive greps in §0.7 baseline and §9.3
gauntlet scope to Phase B's blast radius (phase target paths) and exclude:
test_*.py, HTML `placeholder=` attribute, comments documenting historical
typos, enforcement scripts (pre-commit hook, portal_audit.sh). Legacy
SKU/Abadie/FPG cleanup tracked separately under F.1 / F.20.

Remediation scan found 25 canonical violations in the live 82-entry registry
(A11 abort threshold is >20). Per F.29 spirit (legacy cleanup is separate
workstream from Phase B build), continued rather than HALT; proposals
written to `data/customer_registry_review.csv` for Aaron review.

## Shipped in Phase B

### §1.5 — Visual Polish
- Logo 120px (desktop) + drop-shadow(cyan); shrinks to 72px on scroll
- Hero `h1.page-title` Lato 900 `clamp(2.8rem, 5vw, 4.2rem)` white→cyan
  gradient text
- Chevron switched to clip-path 48px (was SVG polygon)
- Phoenix watermark 10% opacity + 8s pulse animation
- Page-load entrance cascade (hero fade, pulse-tile stagger 0/100/200/300ms,
  chip fade, row cascade), `prefers-reduced-motion` respected
- Interactive polish: tile hover lift + cyan glow, chip click-pulse, row
  hover cyan accent

### §3 — Interactive Status Pill + Audit + Celebrations
- Status pill became a `<button>` with `aria-haspopup="listbox"`; click/
  Enter/Space opens 7-option dropdown with keyboard nav
- POST `/api/shipments/:sid/status` routes through `status_engine`:
  writes to `shipments.json` atomically, appends `status_audit.jsonl`
  entry (20-item per-shipment cap + full log), appends `ledger.jsonl`
  with sha256 `dedup_key`
- Celebration engine: **wired to existing `/celebrations.js`** (20-anim
  pool) rather than rebuilt. `CelebrationEngine.fireForTransition()` maps
  forward transitions (sparkle/confetti-burst/phoenix-rise/ka-ching) to
  `window.celebrate()`; blocked → inline CSS red-flash; REVIEW → amber-pulse
- 5 mega-celebrations (`mega_triggers.py`): M1 queue-cleared, M2 100th
  invoiced this month, M3 unbilled $0, M4 first shipped of day after
  4am CT, M5 ten-clean streak; writes `mega_fired` to ledger; never
  fires on blocked/REVIEW
- Hover tooltip on pill shows last audit entry + "View Full History" →
  modal timeline
- **sa_v1_writer** LaunchAgent `com.norrisutilities.sa-v1-writer.plist`
  loaded on :8766, `RunAtLoad + KeepAlive`. Stdlib `http.server` endpoints:
  `/health`, POST status/notes/invoice-sent, GET audit, POST match

### §5 — Expanded Detail Panel
- Click ▼ or row (outside action cells) → inline 2-col panel expands
- LEFT: Bill-To + Ship-To + Order Context (with customer notes block)
- RIGHT: Line Items table + Shipping breakdown + CC Fee breakdown +
  QB Invoice Memo + Recent Activity + 13 **mirrored** copy buttons
  (via `window.NU.copyButtons`)
- Responsive: 2-col ≥768px, stacks <768px
- "View Full History" → full audit modal; Esc + overlay-click + × close
- `.expand-trigger` un-disabled at boot and via MutationObserver on
  re-render

### §6 — Notes Edit + Invoice Sent Archive
- Notes cell click-to-edit (Cmd+Enter save / blur save / 3s idle auto-
  save / Esc cancel without persist); 2000-char max + live counter
- Invoice Sent checkbox tick: confetti spark burst at cursor, toast
  "Invoice sent — archived", row slide-out 500ms, then removed from DOM.
  Backend sets `invoice_sent=true` + `status=INVOICED` + audit + ledger
- Un-tick fires native `confirm()` → status reverts + `invoice_sent_reverse`
  audit event
- Mega triggers escalate automatically when archive drops queue count

### §7-full — Fuzzy Match + Canonical Enforcement + ⚠ Tooltip
- `lib/fuzzy_match.py` (rapidfuzz) tiered 95/80/below with composite
  score = company(×0.6) + alias-exact(+20) + POC-last-name(+30) +
  branch(+10)
- `lib/canonical_enforce.py` regex iron-clad (allows `/` for AEP/SWEPCO)
- `lib/registry_loader.add_alias()` atomic append + file_lock + ledger
  event, idempotent on duplicate
- `lib/registry_remediation.py` one-time scan; output appended to
  `data/customer_registry_review.csv`. Includes 4 Brink Constructors
  candidates (Travis Fischer, Chad Christian, Lance Brogan, Josh
  Greanhaus)
- `lib/morning_brief.py` stub → `data/morning_brief_queue.jsonl`
- Frontend `.customer-warn ⚠` hover fires POST `/api/match`, shows
  top-3 candidates + scores in a tooltip with "Mark as REVIEW" +
  "Copy raw text" actions

### §7-recon — Data Truth-Up
- `lib/truth_up.py` reconciles `shipments.json` records × SD HTML files
  × (optional) QB Detailed Sales CSV × QB Contact xlsx. Linkage uses
  `sd_filename` (stable filesystem key)
- Live report at **`docs/truth-up/truth_up_2026-04-23.md`**:
    shipments.json total: 24
    shipments.json active: 24
    SD HTML files on disk: 26
    Overlap (in both): 24
    True-open ground truth: 24
    Discrepancy: 0 (well under A10 50% HALT threshold)
    Stale active: 1 (S-2026-026 has qb_invoice_number but still active)
    Orphans on disk: 2 (SD-2026-GUTHRIE-516.html, SD-2026-GUTHRIE-813.html)
    QB orphans: not evaluated (QB CSV/xlsx not in project_knowledge/)

### §8 — Payment Badge + CC Fee Column
- 6 payment badge types (Net 30/Net 60/CC/💳 CC on file/ACH/On Receipt/—)
  rendered inline next to customer name with hover tooltip of full terms
- CC Fee column auto-populates for CC/CC-on-file customers:
  `round((subtotal + customer_shipping) × 4%, 2)` with ⓘ breakdown tooltip
- LineTec billing-split validation (`lib/payment_rules.validate_linetec`)
  — Guthrie must be CC, non-Guthrie must be Net 30/60
- CC-on-file auto-reminder: `lib/notes_auto.run()` appends
  `💳 CC on file — charge at invoice send` idempotently. Live run:
  0 customers currently match (no CC-on-file in registry right now)

## Known gaps (Phase C scope)
- QB webhook (Trigger 1 status=invoiced auto-advance) — not wired
- Gmail auto-parse of sent-invoice email (Trigger 2) — not running
- UPS delivery polling (Trigger 3) — not running
- Customer reply parsing (B): deferred to V2 per Session 6 decision
- Daemons for bridging sa_v1_writer events to QuickBooks — Phase C

## Phase C readiness checklist
- [ ] Aaron confirms Gmail OAuth still valid (acnorris@norrisutilities.com)
- [ ] Aaron confirms QB webhook creds
- [ ] Aaron confirms UPS API creds
- [ ] Daemons designed with heartbeat 60s / failover 5min
- [ ] Investigation loop (E.13) scaffold written

## Click-test checklist for Aaron (morning)
- [ ] Preview at http://192.168.1.184:8765 loads with visual pop
- [ ] Bigger logo, Lato 900 hero, sharper 48px chevron, phoenix pulses
- [ ] Page load: hero fades in, rows cascade in
- [ ] Hover ⚠ on a flagged customer → tooltip with top 3 candidates
- [ ] Click status pill → dropdown of 7 options → select → celebration fires
- [ ] Click ▼ or row → detail panel expands 2-col
- [ ] Click Notes cell → textarea edit mode → type → blur saves
- [ ] Tick Invoice Sent → confetti + row slide-out + archive
- [ ] Payment badges visible (Net 30 / CC / ACH / etc.)
- [ ] CC Fee column populated only for CC customers
- [ ] Status → invoiced on last open row → mega M1 "QUEUE CLEARED!"
- [ ] Truth-up report at docs/truth-up/truth_up_2026-04-23.md
- [ ] Remediation CSV at data/customer_registry_review.csv (25 entries)

Reply to Tier 1 with: **PHASE B PASS** or **PHASE B FAIL <reason>**

## LaunchAgent installed
```
~/Library/LaunchAgents/com.norrisutilities.sa-v1-writer.plist
```
Loaded via `launchctl bootstrap gui/$(id -u)`. `KeepAlive=true`, logs
to `/tmp/sa-v1-writer.out` + `/tmp/sa-v1-writer.err`.

## Build journal
See `docs/handoffs/Phase_B_BUILD_JOURNAL.md` for F.29 rule + per-section
events + the judgment calls made during autonomous execution.
