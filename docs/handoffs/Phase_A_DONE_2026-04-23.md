# SA V5 V1 — Phase A DONE — 2026-04-23

**Status:** Preview ready for Aaron click-test. No merge to main until
PHASE A PASS reply.

## What shipped

### Section 0 — Pre-flight
- Created `~/norris-ops/assets/{css,images}/`
- Copied `NU_Brand_CSS_Framework.css` from iCloud
- Copied 7 brand PNGs (space→underscore rename at copy):
  `Full_Logo_{White,Blue,Black,BlueBlack}.png`,
  `Phoenix_{White,Blue,Black}.png`
- Registry MD5 verified: `220dd369f730d616a1949d58c0d832ae`, 82 entries
- Preview respun at `/tmp/sa-v5-preview` worktree
- HTTP server on `:8765` (local + LAN `192.168.1.184`)
- No Telegram send script found in repo; using `TIER 2 PING:` /
  `TIER 1 PING:` terminal prefixes per R10 fallback

### Section 1 — Brand inheritance
- `shipments.html`: Gate A KEEP (NORRIS hero + 3-tier nav +
  blocked-orders banner + Live Shipping Log iframe), REPLACE bottom
  with `#shipments-main` scaffold
- `shipping-log.html` + `shipping-docs/index.html`: brand scaffold
  (Phase D populates)
- `shipments/archive.html`: brand scaffold stub (Phase D populates)
- `assets/css/shipments-v1.css` `@imports` the brand framework
- Phoenix watermark fixed bottom-right 150px 7% opacity z-index -1
- Compact single-line footer: "A Legacy of Commitment® | © 2026
  Norris Utilities, LLC — Birmingham, Alabama | Internal Use Only"

### Section 7-lite — Registry loader
- `~/norris-agent/lib/registry_loader.py`: `load_registry()`,
  `match_customer()`, `by_id()`, `bill_to()`
  - Exact canonical (100%), explicit alias (99%), `poc.name`
    implicit alias (99%), normalized (97%)
  - Canonical wins over alias collision
  - mtime-cached; reloads on file change
- `~/norris-ops/assets/js/registry-client.js`: mirror JS API at
  `window.NU.registry`; auto-loads on include
- Preview symlink: `/tmp/sa-v5-preview/data/customer_registry.json →
  ~/norris-agent/data/customer_registry.json`
- Fuzzy match + `add_alias()` **deferred to Phase B**

### Section 2 — 14-col table + INVOICING PULSE + filters + search
- `~/norris-ops/assets/js/shipments-v1.js` (~460 LOC)
- INVOICING PULSE (4 tiles, collapsible w/ localStorage):
  `Open SDs | Ready to Invoice | Blocked | Unbilled Revenue`
  computed from real data (catalog rates × qty + shipping)
- 11 filter chips multi-select, localStorage persist:
  All / Pending / Processing / Shipped / Invoiced / CC / Blocked /
  REVIEW (amber pulse) / Today / This Week / Ready to Invoice
- Debounced search (200ms) across all columns + registry aliases
- Default/Detailed view toggle + persist (hides 7 detail-only cols)
- Column sort on Order Date, Customer, P/N, Qty, Cust Shipping, Inv #
- Row styling: zebra, cyan hover, Lato, brand gradient header
- Bottom nav: Archive / SD Index / Live Google Sheet
- Status pill click / notes edit / invoice-sent / ▼ expand are
  **Phase A inert** (wired in Phase B)

### Section 4 — 13 QB-field-matched copy buttons
- `~/norris-ops/assets/js/copy-buttons.js`
- 📋 trigger click expands inline panel w/ 3 groups:
  - **Top (8):** Canonical Name / Email / Bill-To / Ship-To /
    Carrier / Ship Date (MM/DD/YYYY) / Tracking / Terms
  - **Line Items (1 per P/N):** Labeled `<P/N> Rate`, outputs
    dollar-number only, dealer vs direct tier from `billing_tier`
  - **Bottom (3 or 4):** PO # / Ordered By / Shipping $ / CC Fee Rate
    (last hidden when `cc_fee_applies=false`)
- DATA ONLY — no QB template labels in any copy output
- Toast "Copied <label>" + ✓ visual feedback 900ms
- Disabled state w/ tooltip for null source values

## Commit hashes (Phase A tip)

### norris-ops
```
1792f0d  Section 0: Phase A pre-flight — brand assets to repo
75cd7a8  Section 1: brand inheritance + template preservation
77746b0  Section 7-lite: registry client (load + exact/normalized match)
4cd76cd  Section 2: 14-col table + INVOICING PULSE + filters + search
bbcd5e0  Section 2 fixup: simpler asc/desc sort toggle
06d5f93  Section 4: 13 QB-field-matched copy buttons
```
(auto-deploy commits `4f35bc3`, `5388632` also landed during Phase A;
harmless — they only add `output/internal/task_*.md` files.)

### norris-agent
```
877e93a  Section 1 tests: brand inheritance Playwright smoke test
4878fe5  Section 7-lite: registry loader (Python, Phase A scope)
71215e5  Section 2 tests: 14-col table + PULSE + filters + search
bfc3fee  Section 4 tests: 13 copy buttons verified against real data
b241427  Section 1 test fixup: scope R9 Abadie check to file sources only
```

## Test coverage

**76 tests passing across 4 files** (clean run, 77s):
- `tests/test_shipments_brand.py` — 14 tests
- `tests/test_shipments_table_structure.py` — 24 tests
- `tests/test_registry_loader_phase_a.py` — 22 tests
- `tests/test_copy_buttons.py` — 16 tests

All use `sync_playwright` directly — no `pytest-playwright` dependency.
Tests hit live preview server; require `http.server 8765` to be
running. Product catalog + shipments.json served via worktree path
+ symlinked customer_registry.

## Defensive grep results (EA.1 scope)

Scanned `~/norris-ops/assets/{css,js}/`, `~/norris-ops/shipments.html`,
`~/norris-ops/shipping-log.html`, `~/norris-ops/shipping-docs/index.html`,
`~/norris-ops/shipments/archive.html`:

- `\bSKU\b` — **0 hits ✓** (R1)
- `Abadie` — **0 hits ✓** (R9 — in-scope files only; historical
  SD filenames exempt per R9)
- `FlexPro Armor Guard` — **0 hits ✓**
- `FlexPro Armor®` — **0 hits ✓** (not registered)
- `[TBD]|[TODO]|[INSERT]|lorem ipsum` — **0 hits ✓**

## Phase A deferrals (promised Phase B)

Status pill click → dropdown + celebrations — Section 3
Expanded detail panel (2-col, registry + SD) — Section 5
Notes column edit + auto-save + ledger events — Section 6
Registry fuzzy match + add_alias — Section 7 full
Payment badge pill + CC Fee column auto-calc — Section 8

## Phase C/D/E dependencies flagged for Aaron

- Section 9 daemons need:
  - Gmail OAuth configured
  - QB webhook (optional; Gmail fallback sufficient)
  - UPS tracking API credentials
  - Decide: Gmail-only vs Gmail+QB-webhook
- Section 11 SD Index rebuild requires updating `build_sd_index.py`
  to emit brand-framework output (currently LaunchAgent exits 2 safely
  against my scaffold).

## Known quirks (not defects, flagging for transparency)

1. Auto-deploy commits from `agent-v4` LaunchAgent land on feature
   branch every ~10 min. They only touch `output/internal/task_*.md`.
   Phase A files are stable.
2. `build-sd-index` LaunchAgent runs every 30 min and tries to edit
   `shipping-docs/index.html`. My scaffold has no `<div class="sd-grid">`
   markers, so the script exits 2 (safe-fail) without overwriting.
   Expect non-zero exits in `~/norris-agent/logs/build_sd_index.err`
   until Phase D updates the generator.
3. Shipments.json has 5 LineTec rows whose `customer` field (e.g.
   "LineTec Services, LLC") doesn't exactly match any registry
   canonical or alias, so they render with a `⚠` prefix. Phase B's
   fuzzy match should resolve these without manual intervention.

## Preview URLs (LAN)

- http://192.168.1.184:8765/shipments.html
- http://192.168.1.184:8765/shipping-log.html (scaffold only)
- http://192.168.1.184:8765/shipping-docs/index.html (scaffold only)
- http://192.168.1.184:8765/shipments/archive.html (scaffold only)

## Merge policy

**No merge executed.** Remains on `feature/sa-v5-completion` per R8.
Awaiting Aaron `PHASE A PASS` click-test reply before Phase B
starts in a fresh session with a new prompt.
