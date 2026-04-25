# V2.3 CLICK-TEST ACCEPTANCE
## Aaron's single click-test against the V2.3 build
### 2026-04-25 evening CT, Birmingham AL — Session 13

> **URL:** _to be filled by Phase 8.5 CF Pages preview discovery, or merge to main →_
> https://norrisops.com/shipments.html (after `V2.3 PASS` signal)
> **Login:** norris2026 (Aaron full view, all elements including class="aaron-only")
> **Sign-off line:** _at bottom of doc_

---

## A · Visual + brand

- [ ] **A1.** Hero logo dominates page (clamp(200px, 28vw, 360px)) — bigger
  than the "Shipments & Invoicing" headline. Phoenix watermark visible at
  ~7% opacity, pulsing 8s ease-in-out. (D01, D02)
- [ ] **A2.** Frozen header row — scroll the table 500px down, the column
  headers stay visible at the top with a #06D0FF underline. (D18)
- [ ] **A3.** Grouped indicator — any multi-shipment parent row shows a
  `GROUPED (N)` blue pill. Children show `↳ GROUP: <SD>` indent. (D17)
- [ ] **A4.** "FlexPro Armor" appears bare — no ®, never written as "FlexPro
  Armor Guard" anywhere on the page. (F.1 brand rule)
- [ ] **A5.** No orange / red / black review badges on rows that don't have
  cb_review_notes — only Henkels (orange) shows the review highlight from
  the R8 historical correction. (D23)

---

## B · Data integrity

- [ ] **B1. ★★★ Henkels row** — open the Henkels & McCoy detail panel.
  Verify P/N reads `NU-BC-BY2828` (NOT NU-BC-2834). Audit-log entry shows
  `R8_HISTORICAL_CORRECTION` with source `v23_henkels_fix`. (D24 ★★★)
- [ ] **B2. Chain Electric row** — finds the Chain Electric record without
  layout breakage. $8,930.48 historical canary may not appear (legacy_orders
  state); row renders without crash. (D41)
- [ ] **B3. Aerial Hydraulics rows** — show DEALER pill (green). Bill-to
  uses Wayne **Abide** (NOT Abadie). (D12, F.1 vocab)
- [ ] **B4. LineTec rows** — 3 branches render distinctly:
  - "LineTec Services - Richard Thornhill" → Net 30 (blue badge)
  - "LineTec Services - Steve Guthrie" → CC + 4% (cyan badge + 💳 marker)
  - "LineTec Services - LeCompte" → Net 30 (blue badge)
  None has `/` or `|` in the canonical name. (D22)
- [ ] **B5. Dominion Energy** row — auto-resolves to "Dominion Energy - Coy
  Crosby" with no ⚠ tooltip (single-POC override). (D07, V2.3 §F.3)
- [ ] **B6. Single-line P/N fuzzy** — typing a customer name in the search
  box that exactly matches a single-POC company_root resolves at 100%
  immediately. (V2.3 §F.3)

---

## C · Email pipeline + invoice ingest

- [ ] **C1. Inv. # column links** — invoiced rows show their Inv # as a blue
  hyperlink. Click → opens `/internal/invoices/<NNNN>.pdf` in a new tab.
  Non-invoiced rows show "—". (D36, V2.3 §D.4.1a)
- [ ] **C2. Detail panel — variance** — open a recently-invoiced row's
  detail panel. If the QB invoice differed from the SD on shipping or CC
  fee, the variance section shows side-by-side SD vs Invoice with delta.
  Variance threshold: any non-zero delta is flagged. (D26, D37, V2.3 §D.4.1b)
- [ ] **C3. Audit log entry per ingest** — recently-ingested invoice rows
  have an `INVOICE_INGESTED` audit entry visible via the View Full History
  button. (V2.3 §D.4.1c)
- [ ] **C4. Invoice 1498 fixture** — Invoice 1498 (LineTec FlexPro) appears
  in archived invoices list. PDF link works. (§M.5 + V2.3 fixture)
- [ ] **C5. Invoice 1439 (Samson)** — does NOT appear in main shipments
  table. Lives in /internal/review_queue.html under REJECTED_FILTER with
  reason MOSTLY_ROPE. (V2.3 §E.7 canary)
- [ ] **C6. Invoice 1508 (Skylift rental)** — does NOT appear in main
  shipments table. Lives in /internal/review_queue.html under REJECTED_FILTER
  with reason MOSTLY_RENTAL or UNKNOWN_PRODUCT_FAMILY.

---

## D · Tracking + orphan resolution

- [ ] **D1. Tracking column** — populated for shipped/delivered rows.
  Tracking #s render in `1Z + 16 chars` UPS format. (D11)
- [ ] **D2. 4 UPS orphan reconciliation** — open `/internal/review_queue.html`,
  TRACKING_ORPHAN bucket. Each orphan shows either:
  - Auto-linked indicator (if score ≥ 80) with the matched SD #, OR
  - Review prompt (if 60–79) with top candidate, OR
  - `web_lookup_blocked=true` flag if UPS canary returned BLOCKED/FAIL.
- [ ] **D3. New tracking event** — when a UPS delivery email arrives, the
  delivery-watcher daemon (LaunchAgent `com.norrisutilities.delivery-watcher`)
  parses it within 5 min and updates the matching shipment's status to
  `delivered`. (§M.3)

---

## E · KPI tiles + flow

- [ ] **E1. 4 KPI tiles** — top of page, above the table:
  - NU SHIPPING COSTS (MONTH-TO-DATE)
  - CUSTOMER SHIPPING UNBILLED
  - PRODUCTS UNBILLED (REVENUE)
  - TOTAL UNINVOICED (gradient highlight)
  All 4 show non-zero numeric values for current data. (D40)
- [ ] **E2. Time-window pill toggle** — Today / Week / Month / Quarter /
  YTD pills above the tiles. Clicking a pill updates all 4 tile values
  to that window. Default is Month. (V2.3 §D.2.8)
- [ ] **E3. Tile click filters table** — clicking the "CUSTOMER SHIPPING
  UNBILLED" tile filters the main table to invoice_sent=false rows. Click
  again to clear filter. (D40)
- [ ] **E4. Invoice Sent flow** — tick a row's Invoice Sent checkbox.
  Confetti fires, row slides out (500ms), row appears in /shipments/archive.html.
  Reload page → tick state survives. Un-tick from archive view → confirm
  dialog → row reverts to main view. (D32)
- [ ] **E5. 17 copy buttons** — open detail panel; the copy-buttons section
  has exactly 17 buttons:
  - 16 named (Customer Name canonical, Customer Name raw, Customer Email,
    Bill-To, Ship-To, Carrier, Ship Date, Tracking #, Terms, P/N, Product,
    Description, QTY, Rate, PO #, Shipping $, etc.)
  - 1 "Copy ALL (TSV)" button (V2.3 §F.2 17th button)
  Each button copies its labeled value. The TSV one copies a tab-separated
  whole-row dump suitable for QB bulk-paste. (D14, D28)
- [ ] **E6. Status pill** — click a status pill on a PROCESSING row.
  Dropdown shows 7 states. Pick SHIPPED → celebration fires + status
  updates without "failed" toast. (D15)

---

## Sign-off

When all categories are accepted:

```
V2.3 ACCEPTED — Aaron initials: _________   Date: _________

Reply Tier 1 Telegram with literal phrase "V2.3 PASS" to fire merge to main +
agent-v4 unpause + CB notify (Phase 9 protocol).
```

---

## Known DEGRADE / xfail items (informational — not click-test failures)

- **D41 Chain Electric $8,930.48** — historical value lives in `legacy_orders`
  state, not active records. Test xfails. Per V2 UI Completion notes; not
  a V2.3 regression.
- **LineTec Thornhill + LTS Power alias** missing from registry. Phase 7
  registry remediation surface tools the fix. Tests xfail until applied.
- **UPS canary** — not live-exercised this build. Bin script ready;
  Aaron runs `python3 ~/norris-agent/bin/tracking_orphan_resolver.py`
  post-PASS to enable.
- **Phase 5 / norrisops.com migration prep** — deferred (CF Access security
  boundary needs Aaron's hands).
- **CSS class `sku`** in `lib/sd_render.py` — pre-existing (NOT V2.3 code).
  Logged as V2.4 follow-up; not blocking.

---

END V2_3_CLICK_TEST_ACCEPTANCE_2026-04-25.md
