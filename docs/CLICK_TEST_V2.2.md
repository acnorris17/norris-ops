# V2.2 Click-Test Checklist

Run after Phase B V2.2 ships. Each box represents one thing Aaron clicks
or observes in the portal / on M1. Items are grouped by subsystem.

Portal URL (local): <http://192.168.1.184:8765>
Portal URL (public): <https://norrisops.com>
M1 username: `acnorris1`
Portal passwords: `norris2026` (Aaron / full), `legacy2026` (CB / limited)

> Click-test is PASS only when **every** item under §A (V2.2 core) is
> green. §B (regression), §C (V2.2 new) must also be green.

---

## §A — V2.2 CORE: Data + Agent

### A.1 Migration + Henkels correction

- [ ] `/internal/shipments.html` renders without errors
- [ ] Aerial Hydraulics row shows **Customer Type = Dealer** in detail
      panel (click to expand a row)
- [ ] `~/norris-agent/data/migration_v22.md` exists and lists 82 records migrated
- [ ] SD-2026-HENKELS-0211 in `~/norris-agent/data/shipping_docs.json`:
  - `line_items[0].pn` == `NU-BC-BY2828`
  - `aaron_verified_pn_override` == `true`
  - `source_rank` == 90
  - `notes` contains the V2.2 migration note
- [ ] `~/norris-agent/data/shipments_ledger.jsonl` tail has an `r8_historical_correction` entry

### A.2 gog Gmail backend

- [ ] `gog --version` returns v0.12.0+
- [ ] `gog auth list` shows `acnorris@norrisutilities.com`
- [ ] `~/norris-agent/.gmail_paths` exists and contains `GMAIL_BACKEND=gog`
- [ ] Gmail labels `SA-Processed` and `SA-Delivery-Processed` exist (`gog gmail labels list | grep SA-`)
- [ ] `.venv/bin/python3 -m pytest tests/test_v22_canaries.py::test_10_12_gmail_auth_via_gog` → PASS

### A.3 Invoice watcher (§M.2)

- [ ] `~/norris-agent/bin/invoice_watcher.py` imports cleanly
- [ ] LaunchAgent `com.norrisutilities.invoice-watcher` loaded (`launchctl list | grep invoice`)
- [ ] First run completes backfill: `~/norris-agent/data/invoice_watcher_state.json`
      shows `backfill_complete: true`
- [ ] `~/norris-agent/data/invoice_ingested.jsonl` has at least one entry
- [ ] Send a real FlexPro invoice from QB → within 5 min:
  - portal shipment shows `qb_invoice_number`
  - portal row status flips to Invoiced
  - sound plays (first click anywhere in portal first)
  - Tier 2 Telegram: `✅ Invoice N ingested for <customer>…`
- [ ] Send a Samson invoice → within 5 min:
  - Portal row is **NOT** updated
  - `/internal/review_queue.html` shows the item under **REJECTED_FILTER**
  - No Tier 2 Telegram

### A.4 FlexPro filter (§M.5) — Invoice 1508 regression guard

- [ ] `.venv/bin/python3 -m pytest tests/test_v22_canaries.py -k "10_11 or 10_13"` → PASS
- [ ] Manually retrieve Invoice 1508 from Superior Pipeline:
      `INVOICE_WATCHER_DRY_RUN=1 .venv/bin/python3 bin/invoice_watcher.py`
      and confirm outcome is `rejected_filter` with reason `NO_FLEXPRO_LINES`
      (this is the exact M5 misclassification that V2.2 prevents)

### A.5 UPS delivery watcher (§M.3)

- [ ] `~/norris-agent/bin/delivery_watcher.py` imports cleanly
- [ ] LaunchAgent `com.norrisutilities.delivery-watcher` loaded
- [ ] A tracking-number UPS email arrives → within 5 min the portal
      shipment with that tracking flips to Delivered

### A.6 Daily QB reconciliation (§M.2.2)

- [ ] LaunchAgent `com.norrisutilities.qb-reconcile` loaded and scheduled for 4 AM CT
- [ ] After first run: `~/norris-agent/data/qb_recon_<YYYY-MM-DD>.md` exists
- [ ] Report lists `## Last 24h ingested`, `## Portal ↔ ledger mismatches`,
      `## QB void/edit candidates` sections

### A.7 Review queue (§M.5b)

- [ ] `/internal/review_queue.html` loads, password prompt appears
- [ ] Both `norris2026` and `legacy2026` unlock it
- [ ] All 6 categories render (REJECTED_FILTER, NO_SD_MATCH, HIGH_VARIANCE, MISSING_CUSTOMER_TYPE, PARSE_FAIL, CUSTOMER_REPLY)
- [ ] Category counts in header bar match item counts per section
- [ ] REJECTED_FILTER items show a **Force Ingest** button
- [ ] `python3 bin/force_ingest.py <thread_id>` succeeds on a queued item (Aaron runs this; portal button is informational until sa-v1-writer endpoint ships)

### A.8 Daemon health (§M.8)

- [ ] `/internal/health.html` loads with password
- [ ] After watchers run at least once: status cards show `ok` (green border) with recent heartbeats
- [ ] Gmail quota counter reflects today's gog call count
- [ ] `~/norris-agent/logs/invoice-watcher.out.log` growing
- [ ] After 10+MB log, log-rotate compresses to `logs/archive/`

### A.9 Sounds (§S)

- [ ] `/internal/preferences.html` loads
- [ ] Click **Test sound** after a page click → short chime audible
- [ ] Volume slider changes per-test volume
- [ ] Toggle **Enable sound** off → next celebration silent
- [ ] A real celebration in shipments page fires sound after first user click
- [ ] Page loaded with no prior click → no sound, no error in console

### A.10 Customer reply surface (§R)

- [ ] `.venv/bin/python3 -m pytest tests/test_v22_canaries.py::test_10_19_reply_classifier` → PASS
- [ ] (After a live customer reply lands) — item appears in `/internal/review_queue.html` under **CUSTOMER_REPLY** with correct intent tag

### A.11 Telegram routing (§M.11)

- [ ] Tier 1 (auth failure / V2.2 complete) posts to SA + legacy-main topics
- [ ] Tier 2 (invoice ingested) posts to SA only
- [ ] Tier 3 (delivery / quota) batched via quiet-queue flush
- [ ] No Telegram posts to CB's chat (CB has no Telegram yet)

---

## §B — V2 REGRESSION: things that worked in V1 must still work

### B.1 Portal chrome

- [ ] Header gradient renders `#0a0e5c → #0033cc → #0066ee → #00aaff → #06D0FF`
- [ ] Ghost phoenix watermark visible on every page at ~7% opacity
- [ ] "A Legacy of Commitment®" tagline in Playfair Display italic cyan
- [ ] Hero logo 200-360px on desktop

### B.2 Shipments table

- [ ] **Invoice Sent** column is the leftmost action column
- [ ] No "dead checkbox" column
- [ ] 16 copy buttons (one per column-row intersection we copy to QB)
- [ ] 4 KPI tiles at top
- [ ] Detail panel expands inline (no modal)
- [ ] Frozen table header on scroll
- [ ] Column order: (checkbox / SD / Status / Date / Customer / PO / P/N / Description / Qty / Ship-To / Tracking / CC Fee / Shipping / Inv# / Notes / **Invoice Sent** / Copy)

### B.3 Status pill + celebrations

- [ ] Click status pill → dropdown with 5 statuses
- [ ] Forward transition fires celebration SVG
- [ ] Reverse transition fires NO celebration
- [ ] Status change persists via sa-v1-writer
- [ ] Ledger entry appended to `data/shipments_ledger.jsonl`

### B.4 Copy buttons

- [ ] Each copy button copies the exact value (no trailing whitespace, no extra quotes)
- [ ] Paste into QB field works

### B.5 Canonical / customer name

- [ ] UI says "Customer Name" (not "Canonical Name")
- [ ] UI says "Grouped" (not "Child")
- [ ] No `FlexPro Armor Guard` in any page (always `FlexPro Armor`)
- [ ] No `FlexPro Armor®` anywhere (no registered mark ever)

---

## §C — V2.2 NEW: invoice-centric click-through

### C.1 Invoice PDF link (§M.6)

- [ ] Row with `qb_invoice_number` **and** `qb_invoice_pdf` populated: Inv#
      column shows a clickable blue link
- [ ] Click link → PDF opens in new tab at `/internal/invoices/NNNN.pdf`
- [ ] `/internal/invoices/NNNN.pdf` requires auth (norris2026 / legacy2026)
- [ ] Row with `qb_invoice_number` but **no** `qb_invoice_pdf` yet: Inv#
      shows plain grey text

### C.2 Variance tracker

- [ ] Row with `qb_invoice_variances` populated: delta badges render
      (`FREIGHT_ADDED`, `CC_FEE_ADDED`, `LINE_ADDED`, `LINE_REMOVED`,
      `RATE_VARIANCE`, `TOTAL_VARIANCE`)
- [ ] Hover shows detail (old vs. new value)

### C.3 Force Ingest flow

- [ ] Queue a rejected filter item (send a Samson invoice)
- [ ] Run `python3 ~/norris-agent/bin/force_ingest.py <thread_id>`
- [ ] Portal shipment updates, `aaron_force_ingest=true`
- [ ] `~/norris-agent/data/filter_overrides.jsonl` has new line
- [ ] Tier 2 Telegram: `🔧 Aaron force-ingested invoice NNNN…`

---

## §D — END-STATE SIGNALS

- [ ] Tier 1 Telegram received: `✅ V2.2 PHASE B COMPLETE — invoice
      automation live …`
- [ ] All 17 V2.2 canaries in `tests/test_v22_canaries.py` PASS
- [ ] Existing Phase B test suite PASSES (flaky Playwright tests may
      need re-run; one confirmed flaky timeout in
      `test_shipments_table_structure.py::test_search_filters_by_customer`)
- [ ] `/internal/health.html` shows every watcher green
- [ ] No secrets leaked in any committed file

## §E — If click-test FAILS

1. Document the specific failure as a V2.3 patch item (small targeted fix, NOT a rebuild)
2. Fire Tier 2 Telegram: `⚠ V2.2 click-test failure: <item>`
3. Never silent-fail. Per R-META-2 Aaron must see every failure.

---

Aaron C. Norris · Birmingham AL · 2026-04-24
