# PHASE 2–5 INTENDED BUILD
## Per-section concrete artifacts — audit-locked
### Authored 2026-04-24 evening CT, Session 12 M5, pre-Phase-2 validation

> **Purpose:** For every §D.x section the audit marked SHIPPED_DEFECT,
> SHIPPED_PARTIAL, or NOT_SHIPPED, name the concrete artifacts that will ship.
> Cross-check against PHASE_B_V2_UI_COMPLETION_CC_PROMPT.md §S / §3 spec bodies.
> If internal contradiction found → HALT Tier 1. Result below: **no HALTs.**

---

## §S.1 — 7 endpoints to add/alias on sa_v1_writer (Phase 2)

Backing store for each is already in place (status_engine, shipments_writer, status_audit, ledger, mega_triggers). Framework: stdlib `http.server.ThreadingHTTPServer` pattern — matches existing handlers.

| Method | Path | Body / Query | Backing | Category |
|---|---|---|---|---|
| GET  | `/api/events?since_ts=<iso>` | — | `ledger.iter_entries()` filtered by ts > since_ts | TRULY NEW |
| GET  | `/api/audit-log?sid=<sid>` | — | alias over `status_audit.all_for_shipment(sid)` | URL ALIAS over `/api/shipments/:sid/audit` |
| GET  | `/api/kpi-data?window=<today\|week\|month\|quarter\|ytd>` | — | compute 4 tile values + delta from shipments.json + audit_log per window | TRULY NEW |
| POST | `/api/status-update` | `{sid, new_status, actor, reason?}` | `status_engine.change_status` | URL ALIAS over `/api/shipments/:sid/status` |
| POST | `/api/invoice-sent` | `{sid, sent, actor, source?}` | existing INVOICE_RE handler | URL ALIAS over `/api/shipments/:sid/invoice-sent` |
| POST | `/api/notes-update` | `{sid, notes, actor, source?}` | existing NOTES_RE handler | URL ALIAS over `/api/shipments/:sid/notes` |
| POST | `/api/track` | `{event_type, sid?, metadata?}` | append to `~/norris-agent/data/analytics.jsonl` | TRULY NEW |

Per-endpoint tests in `tests/test_sa_v1_writer_endpoints.py`: happy path + validation error + immutability (INVOICED locked for status-update) + concurrency (two writes serialize via FileLock).

---

## §D.2 — Status pill + celebrations — SHIPPED_DEFECT

### Phase 1 already fixed

- 7-state enum in status-pill.js ✓ (commit `05b8238`)
- INVOICED immutability in status_engine.py ✓ (commit `a8b2f86`)

### Phase 3 to complete

**Standard celebrations — 6 transitions (spec §D.2 "6 std"):** rewire celebration-engine.js (the current `invoiced → cc` mapping is dead since CC dropped). Final mapping:

| # | From → To | Effect (visual) | Sound (SoundEngine) |
|---|---|---|---|
| 1 | `pending` → `processing` | sparkle | `mark-shipped` |
| 2 | `processing` → `shipped` | confetti-burst | `mark-shipped` |
| 3 | `shipped` → `delivered` | package-land ✨ (NEW) | `delivered` |
| 4 | `shipped` → `invoiced` OR `delivered` → `invoiced` | phoenix-rise | `chime` |
| 5 | `any` → `blocked` | red-flash | none |
| 6 | `any` → `review` | amber-pulse | none |

**Mega celebrations — 5 triggers (spec §D.2 "5 mega"):** already implemented in `lib/mega_triggers.py`. UI wiring verified.

| # | Trigger id | Spec phrase | Backend condition (mega_triggers.py) | Fires via |
|---|---|---|---|---|
| M1 | `queue-cleared` | queue cleared | `_open_queue_count() == 0` AND `to_status == invoiced` | `window.megaCelebrate()` on `mega_fired` |
| M2 | `century` | century | `_invoiced_this_month_count() == 100` AND `to_status == invoiced` | same |
| M3 | `ship-sails-smooth` | ship-sails-smooth | `to_status == invoiced` AND `_unbilled_revenue_total() <= 0.001` | same |
| M4 | `first-of-day` | first-of-day | `to_status == shipped` AND no prior shipped event today-after-4am CT | same |
| M5 | `ten-streak` | ten-streak | `to_status == invoiced` AND last 10 status_change entries all → invoiced with no REVIEW in between | same |

No internal contradiction: spec §D.2 names 5 megas; code implements 5; names match (M3 phrase ↔ unbilled=0 reading).

**Audit log tooltip:** audit-log-client.js already wires hover-tooltip on status pill (shows last entry) + View Full History modal. Route modal fetch to both `/api/shipments/:sid/audit` (existing) AND new `/api/audit-log?sid=` (§S.1 alias).

---

## §D.3 — Detail panel + 16 copy buttons — SHIPPED_PARTIAL

### Current: 13 static copy buttons + dynamic `PN Rate` per line item

```
Top:        Canonical Name | Customer Email | Bill-To Address | Ship-To Address
            | Carrier | Ship Date | Tracking # | Terms
Line Items: <PN> Rate  (one per line item)
Bottom:     PO # | Ordered By | Shipping $ | CC Fee Rate (conditional)
```

### Spec: 16 mirrored copy buttons

The spec does not enumerate the 16; it only states the count. Expanding the static set by 3 to reach 16 (dynamic `<PN> Rate` count is per-row and NOT counted as one of the 16 fixed labels):

| # | Label | Value | Group |
|---|---|---|---|
| 1 | Canonical Name | `row._canonical \|\| row.customer` | Top |
| 2 | Customer Email | registry poc.email | Top |
| 3 | Bill-To Address | billTo(registry) or row.customer | Top |
| 4 | Ship-To Address | row.ship_to_address | Top |
| 5 | Carrier | row.carrier \|\| "UPS Ground" | Top |
| 6 | Ship Date | fmtShipDate(row.order_date) | Top |
| 7 | Tracking # | row.tracking_numbers joined by newline | Top |
| 8 | Terms | payment_rules.payment_label(registry) | Top |
| 9 | **Customer Name (raw)** | row.customer (raw, before canonicalization — useful when alias mismatch) | Top — **NEW** |
| 10 | **PO #** | row.po_number | Bottom |
| 11 | **Ordered By** | registry poc.name \|\| row.poc | Bottom |
| 12 | **Shipping $** | fmtMoney2(row.customer_shipping_cost) | Bottom |
| 13 | **CC Fee Rate** | computeCcFee result (when applicable) | Bottom |
| 14 | **Subtotal** (NEW) | sum(qty × rate) from row.line_items | Bottom |
| 15 | **Grand Total** (NEW) | subtotal + shipping + CC fee | Bottom |
| 16 | **QB Memo** (NEW) | memoLines (PO#, line items, tracking) as rendered in detail panel | Bottom |

Plus dynamic `<PN> Rate` buttons (one per line_item) in the Lines group — unchanged.

**Mirror guarantee:** copy-buttons.js `window.NU.copyButtons.buttonsFor(row)` returns the list; detail-panel.js already consumes via `cb.buttonsFor(row)` to render the identical set inside the expanded panel (line 209 in detail-panel.js). Single source of truth; mirror is automatic.

**View Full History modal:** already wired (audit-log-client.js `openHistoryModal`). Phase 3: switch fetch to prefer `/api/audit-log?sid=` (new §S.1 alias) but keep fallback.

---

## §D.4 — Notes + invoice archive — SHIPPED_PARTIAL

### Phase B §6 already shipped

- notes-editor.js: click-to-edit, Cmd+Enter, blur, 3s debounce, Esc, 2000 char ✓
- invoice-archive.js: confetti + slide-out + mega + reverse-confirm ✓

### Phase 3 archive page upgrade

**`~/norris-ops/shipments/archive.html`** — needs:

1. **Group by invoice month** — group headers "January 2026 — 14 invoices — $42,318.24 total"
2. **Sortable by invoice #** (ascending/descending)
3. **CSV export** button: "Export visible rows to CSV" → triggers browser download of `archive-YYYYMMDD.csv` with columns: Inv# / SID / Customer / Order Date / Invoice Date / Subtotal / Shipping / CC Fee / Total / PO# / Tracking #

File may or may not exist currently — Phase 3.D.4 will audit `~/norris-ops/shipments/archive.html` and either create fresh or upgrade existing.

---

## §D.5 — Fuzzy + canonical + ⚠ tooltip — SHIPPED_PARTIAL

### Backend already complete (Phase B §7-full)

- `lib/fuzzy_match.py` scoring + tiers 95+/80-94/<80 ✓
- `lib/canonical_enforce.py` regex ✓
- `lib/registry_remediation.py` CLI with review CSV ✓
- `lib/registry_loader.match_customer` (used by backend `/api/match`) ✓
- warn-tooltip.js front-end ⚠ hover with top-3 candidates ✓

### Phase 3 — client auto-apply threshold update

Currently `shipments-v1.js:168` gates canonical display at `_registry_confidence >= 97` (Phase A tiers 100/99/97). Spec §D.5 says: 95+ auto-apply, 80-94 apply-with-flag, <80 ⚠ review.

**Fix:** change client threshold AND add a "flag" tier visual:

```js
// Before
if (entry && confidence >= 97) { ...canonical...; } else { ...raw + ⚠...; }

// After (§D.5)
if (entry && confidence >= 95)       state = "auto_apply";
else if (entry && confidence >= 80)  state = "flag";   // show canonical + subtle ⚠
else                                  state = "review"; // show raw + bright ⚠
```

Client-side fuzzy not added (no rapidfuzz JS; keep server-side `/api/match` for the fuzzy path used by warn-tooltip). Client-side just changes the threshold constant and adds a "flag" visual variant.

---

## §D.6 — Truth-up reconciliation — SHIPPED_GOOD (backend) / no UI surface

Backend `lib/truth_up.py` is the §7-recon output path. Phase 3 decision: NO UI surface added (truth-up results go to Telegram + daily brief as before). Rationale: spec doesn't explicitly require a truth-up dashboard; current output is rich enough. If Aaron asks for a UI in click-test, tracked as V2.3 follow-up.

---

## §D.7 — Payment badge + CC fee — SHIPPED_PARTIAL

### Current code: 6 badges (Net 30, Net 60, CC, CC on file, ACH, On Receipt)
### Spec §D.7: 6 badges (Net 30 gray, CC blue, CC on file 💳 cyan, ACH green, On Receipt orange, **FREE red**)

**Delta:** add `"FREE"` badge type (for internal / comp / no-charge customers). Keep `"Net 60"` in the allow-list as a legacy renderer (safety net for any registry entries using it today) but document that spec's canonical 6 are the ones listed.

### Phase 3 Payment badge concrete artifacts

- `lib/payment_rules.py` `BADGE_TYPES` add `"FREE"` → 7 allowed values (6 spec + Net 60 back-compat)
- `payment_label(entry)` returns `"FREE"` when `payment.method == "free"` OR `payment.cc_fee_applies === false` AND `payment.method in ("", null, "free", "comp")`
- `payment-badge.js`: add `"FREE": { cls: "free", tooltip: "No charge / comp'd by Norris." }` to LABEL_META
- CSS `.payment-free` with red background (#f8d7da) + white text

### CC fee (unchanged)

`round((subtotal + shipping) * 0.04, 2)` — already correct in payment_rules.py + payment-badge.js + copy-buttons.js.

### LineTec branch validation (tighten)

Spec: Thornhill=Net30, Guthrie=CC, LeCompte=Net30.
Code today: non-Guthrie allowed Net30 OR Net60.

Tighten `lib/payment_rules.validate_linetec`:
```
Guthrie             → CC required
Thornhill / LeCompte → Net 30 required (Net 60 rejected)
Unknown LineTec branch → log warning, accept as-is (don't break)
```

### CC-on-file notes idempotent

`lib/notes_auto.py` already appends `"💳 CC on file — charge at invoice send"` when absent; verified idempotent by grep of REMINDER string. ✓

---

## §D.8 — Column order — SHIPPED_DEFECT

### Current: 18 columns (from shipments-v1.js thead L494-514)

```
 1. checkbox (dead row-selector)  2. icon (SD link)   3. Status    4. Order Date
 5. Customer                      6. PO #             7. P/N       8. Description (detail-only)
 9. Qty                          10. Ship To+POC (detail-only)  11. Tracking #
12. CC Fee (detail-only)         13. Cust. Shipping  14. Inv # (detail-only)
15. Notes                        16. Invoice Sent (detail-only)  17. Copy (detail-only)
18. Expand ▼ (detail-only)
```

### Spec §D.8: 15 columns EXACTLY

```
1. Invoice Sent | 2. Inv. # | 3. SD | 4. Status | 5. Order Date | 6. Customer
| 7. P/N | 8. Description | 9. QTY | 10. Ship To+POC | 11. Tracking #
| 12. PO # | 13. CC Fee | 14. Shipping | 15. Notes
```

### Phase 3 rewrite plan (shipments-v1.js `mountChrome()` thead + `rowHtml()` body)

| Col # | Spec label | DOM `th.col-*` class | DOM `td` source | Previous pos |
|---|---|---|---|---|
| 1 | Invoice Sent | `col-invsent` | checkbox in `<label class="invoice-sent">` | 16 |
| 2 | Inv. # | `col-invnum` | `<a class="inv-link">` or dash | 14 |
| 3 | SD | `col-sd` | `<a>📦</a>` to sd_path (was `col-icon`) | 2 |
| 4 | Status | `col-status` | `<button class="status-pill">` | 3 |
| 5 | Order Date | `col-date` | fmtDate(row.order_date) | 4 |
| 6 | Customer | `col-customer` | canonical/raw + ⚠ + payment-badge | 5 |
| 7 | P/N | `col-pn` | stackedPN | 7 |
| 8 | Description | `col-desc` | stackedDesc | 8 |
| 9 | QTY | `col-qty` | stackedQty | 9 |
| 10 | Ship To+POC | `col-shipto` | shipToBlock + POC | 10 |
| 11 | Tracking # | `col-tracking` | trackingLinks | 11 |
| 12 | PO # | `col-po` | esc(row.po_number) | 6 |
| 13 | CC Fee | `col-ccfee` | payment-badge.js populates | 12 |
| 14 | Shipping | `col-shipping` | fmtMoney(customer_shipping_cost) | 13 |
| 15 | Notes | `col-notes` | notesReadMode + notes-editor | 15 |

### Removals

- **Dead `col-checkbox`** (was pos 1, disabled row-selector) → delete from thead + tbody
- **`col-copy`** (Copy button column, was pos 17) → delete; Copy functionality is in detail panel (16 copy buttons)
- **`col-expand`** (▼ button, was pos 18) → the ▼ stays but moves to a pseudo-column via status-pill click OR appended to the Notes cell; simpler: make the entire row clickable to expand (detail-panel.js already handles this). Delete the dedicated col-expand.

Row structure post-refactor:
```html
<tr class="ship-row" data-sid="...">
  <td class="col-invsent">...</td>
  <td class="col-invnum">...</td>
  <td class="col-sd">...</td>
  ... (15 tds total; no Copy, no Expand, no checkbox)
</tr>
```

Tests: `10-column-order.spec.ts` asserts 15 `th` in thead (exact labels + order) and 15 `td` per row. Defensive grep G.15.

---

## §D.9 — 4 KPI tiles + time-window toggle — SHIPPED_PARTIAL

### Current: 4 Invoicing PULSE tiles, no time-window, no click-filter

```
Open SDs | Ready to Invoice | Blocked | Unbilled Revenue
```

### Spec §D.9: 4 KPI tiles + Today/Week/Month(default)/Quarter/YTD toggle + click → filter table, using `/api/kpi-data`

### Phase 3 concrete artifacts

**Keep the 4 tile identities** (the PULSE names are the right 4 KPIs for invoicing work):
1. Open SDs — count of records where `status not in (INVOICED, DELIVERED)` within window
2. Ready to Invoice — `readyToInvoicePred` within window
3. Blocked — `status == BLOCKED` within window
4. Unbilled Revenue — sum of subtotal + shipping + cc_fee for open rows within window

**Time-window toggle** above the pulse strip: 5 pill buttons `Today | Week | Month | Quarter | YTD` (Month default, data-window attribute). Click updates active class, triggers fetch to `/api/kpi-data?window=<x>`.

**Click-tile-to-filter:**
- Click Open SDs → sets state.filters to a new filter key `open_sds` (OR reuses existing not-invoiced heuristic)
- Click Ready → sets state.filters to `ready` chip (already exists)
- Click Blocked → sets state.filters to `blocked`
- Click Unbilled Revenue → shows all non-invoiced rows (same as Open SDs)

**New endpoint (§S.1 §2.2.c) response shape:**
```json
{
  "t1": {"label": "Open SDs", "value": 7, "delta_pct": -12.5},
  "t2": {"label": "Ready to Invoice", "value": 3, "delta_pct": 0},
  "t3": {"label": "Blocked", "value": 1, "delta_pct": +100},
  "t4": {"label": "Unbilled Revenue", "value": 18432.50, "delta_pct": -5.2},
  "window": "month",
  "computed_at": "2026-04-24T21:00:00Z"
}
```

Delta vs prior equivalent period. Rendered as `↓12.5%` (green) or `↑100%` (red) under each tile.

---

## §D.10 — LAN password bypass — NOT_SHIPPED (auth.js has no host check)

### Spec: host == `192.168.1.184` OR `localhost` OR `127.0.0.1` → skip portal password

### Phase 3 concrete artifacts

`~/norris-ops/auth.js` add host check in `isAuthenticated()`:
```js
function isLanHost() {
  const h = location.hostname;
  return h === '192.168.1.184' || h === 'localhost' || h === '127.0.0.1';
}

function isAuthenticated() {
  if (isLanHost()) return true;  // CF Access handles the outer gate on norrisops.com
  // ... existing sessionStorage check (unchanged)
}
```

Also: `applyRole()` on LAN grants `role-aaron` unconditionally (CB works from a different machine on the cloud URL).

`~/norris-ops/index.html` inline login-overlay: add on-load `if (isLanHost()) loginOverlay.classList.add('hidden')`.

**Preserved:** `norrisops.com` unchanged (CF Access still enforces identity; the portal-password tier filter still runs because `isLanHost()` returns false for that host).

Test: `12-lan-password.spec.ts` asserts shipments.html loads without login-overlay (already present; will pass after Phase 3 auth.js change).

---

## §D.11 — Landing route — NOT_SHIPPED

### Spec: `192.168.1.184:8765/` → `/shipments.html`; `norrisops.com/` unchanged

### Phase 3 concrete artifact

Add to `~/norris-ops/index.html` top of `<head>`:

```html
<script>
  (function() {
    var h = location.hostname;
    if (h === '192.168.1.184' || h === 'localhost' || h === '127.0.0.1') {
      if (location.pathname === '/' || location.pathname === '/index.html') {
        location.replace('/shipments.html');
      }
    }
  })();
</script>
```

This runs synchronously before portal dashboard content renders, so LAN users land on shipments.html instantly; cloud users see portal dashboard normally.

Test: `13-landing-route.spec.ts` asserts `/` on LAN redirects to `/shipments.html`.

---

## §I1–I8 integration canaries — Phase 3 / Phase 4

| # | Canary | Phase |
|---|---|---|
| I1 | invoice-watcher ingest → `/api/events` → celebration-engine C4 + mega | Phase 2 wires /api/events; Phase 3 adds polling in celebration-engine.js |
| I2 | Invoice Sent → /api/invoice-sent → audit + ledger + slide-out + mega | Phase 3 uses new §S.1 alias (same backend); verify |
| I3 | Inv# link → /internal/invoices/<n>.pdf | Phase 3 adds link (shipments-v1.js rowHtml) |
| I4 | Review queue count in KPI tile or nav badge | Phase 3 adds nav badge in topnav-row-2 |
| I5 | Henkels SD: P/N=NU-BC-BY2828, Customer Type=Dealer gold badge | Phase 4 canary (data already present) |
| I6 | Aerial Hydraulics Dealer badge gold | Phase 4 canary |
| I7 | Row highlighting per Source Priority | Phase 3 adds row-level CSS class based on status mix |
| I8 | Customer reply classifier (§R existing) inbound → review queue | EXISTING — verify in Phase 4 |

---

## Cross-check: internal contradictions between §S spec body and §3 §D.x?

Scan for contradictions where the prompt contradicts itself:

1. **§S.3 (7-state enum) vs §D.2 (6 standard celebrations including `invoiced → cc`)**: apparent tension. Resolution: spec §D.2 says "6 std + 5 mega" but doesn't enumerate the 6. The existing celebration-engine `invoiced → cc` mapping became dead after §S.3 dropped CC. Repurposing the 6th slot to `shipped → delivered` (the new state added in §S.3) resolves this. Not a spec contradiction — just spec under-specification that the implementer resolves.

2. **§S.3 "REVIEW" casing**: spec lists `REVIEW` uppercase in the 7-state list. status-pill.js uses lowercase `review` value with uppercase `REVIEW` display label. celebration-engine handles both `review` and `REVIEW` as of today. Not a contradiction; uppercase-in-spec = UI display, lowercase-in-code = internal enum.

3. **§D.7 "6 badges" vs payment_rules.BADGE_TYPES**: spec lists FREE instead of Net 60. Disk reality has Net 60 not FREE. Not a spec-internal contradiction — just disk deviation from spec. Phase 3 implements the spec (add FREE).

4. **§D.8 "15 columns exact" vs current 18 columns**: disk deviation, not spec-internal contradiction.

5. **§C.7 HALT list: "Pytest passing count drops below 388 baseline"**: no issue — Phase 1 held at 417.

6. **§H.1 "Do NOT modify lib/flexpro_filter logic" vs audit mapping to lib/product_family.py**: spirit preserved (don't touch the filter), letter corrected. User's Phase 1+ message also prohibits modifying product_family.py explicitly. Phase 2-5 does not touch product_family.py.

**RESULT: No internal §S/§3 contradictions found. Proceeding to Phase 2.**

---

## Gate summary (CC self-enforces, Tier 1 on HALT only)

- Pytest floor: 388 absolute; 417 expected baseline at phase boundaries
- Truth-up >50% discrepancy → HALT R-META-3 Tier 1
- Canary regression on FlexPro filter / Chain Electric $8,930.48 / Henkels NU-BC-BY2828 / Aerial Hydraulics Dealer / Invoice 1508 rejection → HALT R-META-3 Tier 1
- Genuinely undecidable from audit + spec + git log + source → HALT R-META-3 Tier 1

## Hard don'ts (re-confirmed from user's Phase 2 message)

- No main merge
- No fresh gog OAuth
- No launchctl except `sa-v1-writer` kickstart
- Do NOT modify: `product_family.py`, source_priority logic (`audit_log.py` holds it), `pdf_handler.py`, `build_review_queue_snapshot.py`, `gmail_client.py`, `customer_reply_classifier.py`, `tz.py`

END PHASE_2-5_INTENDED_BUILD.md
