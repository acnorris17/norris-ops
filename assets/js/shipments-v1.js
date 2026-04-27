/* ══════════════════════════════════════════════════════════════════
   SHIPMENTS V1 — Phase A
   Renders 14-col table, INVOICING PULSE, filter chips, search,
   column sort, view toggle. Row interactivity (status click, notes
   edit, invoice sent archive, ▼ expand) is Phase B (inert here).
   ══════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  const SHIPMENTS_URL = "/data/shipments.json";
  const CATALOG_URL = "/data/product_catalog.json";

  // §S.2 — removed localStorage/sessionStorage. UI prefs (viewMode,
  // pulseCollapsed, selected filters) are now module-scoped and reset
  // on each page load. Cloudflare Zero Trust identity is the only
  // persistence boundary; per-tab state stays per-tab.

  const DESCRIPTION_FALLBACK = {
    "NU-BC-2851": "2-Man BC",
    "NU-BC-2834": "1.5-Man BC",
    "NU-BC-2828": "1-Man BC",
    "NU-BC-2851-F": "2-Man ARCH",
    "NU-BC-2834-F": "1.5-Man ARCH",
    "NU-BC-2851-C": "2-Man Combo",
    "NU-BC-2834-C": "1.5-Man Combo",
    "NU-BC-2851-FC": "2-Man ARCH+Combo",
    "NU-BCB-2851-SL": "2-Man Shield",
  };

  // §S.3 — 7-state enum (PENDING / PROCESSING / SHIPPED / DELIVERED / INVOICED / REVIEW / BLOCKED).
  // RECONCILE kept as a legacy data alias → REVIEW until the agent pipeline stops emitting it.
  const STATUS_DISPLAY = {
    PENDING:    { label: "pending",    cls: "pending" },
    PROCESSING: { label: "processing", cls: "processing" },
    SHIPPED:    { label: "shipped",    cls: "shipped" },
    DELIVERED:  { label: "delivered",  cls: "delivered" },
    INVOICED:   { label: "invoiced",   cls: "invoiced" },
    REVIEW:     { label: "REVIEW",     cls: "review" },
    BLOCKED:    { label: "blocked",    cls: "blocked" },
    RECONCILE:  { label: "REVIEW",     cls: "review" },
  };

  const FILTER_DEFS = [
    { key: "all", label: "All", pred: () => true },
    { key: "pending", label: "Pending", pred: (r) => r.status === "PENDING" },
    { key: "processing", label: "Processing", pred: (r) => r.status === "PROCESSING" },
    { key: "shipped", label: "Shipped", pred: (r) => r.status === "SHIPPED" },
    { key: "invoiced", label: "Invoiced", pred: (r) => r.status === "INVOICED" || r.qb_invoice_number },
    { key: "cc", label: "CC", pred: (r) => !!r.cc_surcharge_applies },
    { key: "blocked", label: "Blocked", pred: (r) => r.status === "BLOCKED" },
    { key: "review", label: "REVIEW", pred: (r) => r.status === "RECONCILE" || r.status === "REVIEW" },
    { key: "today", label: "Today", pred: todayPred },
    { key: "thisweek", label: "This Week", pred: thisWeekPred },
    { key: "ready", label: "Ready to Invoice", pred: readyToInvoicePred },
  ];

  const SORTABLE_COLUMNS = {
    "order-date": (r) => parseOrderDate(r.order_date) || new Date(0),
    "customer": (r) => (r._canonical || r.customer || "").toLowerCase(),
    "pn": (r) => ((r.line_items || [])[0]?.pn || "").toLowerCase(),
    "qty": (r) => (r.line_items || []).reduce((s, i) => s + (i.qty || 0), 0),
    "cust-shipping": (r) => r.customer_shipping_cost ?? -1,
    "inv-num": (r) => r.qb_invoice_number || "",
  };

  const state = {
    rows: [],
    filtered: [],
    catalog: {},
    filters: new Set(["all"]),
    search: "",
    viewMode: "default",
    sort: { key: "order-date", dir: "desc" },
    pulseCollapsed: false,
    // §D.9 — 4 KPI tiles + time-window toggle. Server-computed via
    // /api/kpi-data?window=<w>. Falls back to local compute if fetch fails.
    kpiWindow: "month",
    kpiData: null,
  };

  const API_BASE = "http://127.0.0.1:8766";

  // ── Helpers ───────────────────────────────────────────────────────

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }

  // V2.3 D42 — Notes can arrive as string, array of {note,text,body,message,...},
  // single object, or null. Anything else collapses to "[object Object]" via
  // String(), which is the literal defect Aaron caught on Henkels & McCoy.
  function coerceNotesText(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    if (Array.isArray(value)) {
      return value
        .map((n) => (typeof n === "string"
          ? n
          : (n && (n.note || n.text || n.body || n.message)) || ""))
        .filter(Boolean)
        .join(" · ");
    }
    if (typeof value === "object") {
      return value.note || value.text || value.body || value.message || "";
    }
    try { return String(value); } catch (e) { return ""; }
  }

  function parseOrderDate(raw) {
    if (!raw || raw === "—") return null;
    const d = new Date(raw);
    return isNaN(d.getTime()) ? null : d;
  }

  function fmtDate(raw) {
    const d = parseOrderDate(raw);
    if (!d) return "—";
    return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}/${String(d.getFullYear()).slice(-2)}`;
  }

  function fmtMoney(n) {
    if (n == null || n === "") return "—";
    const num = Number(n);
    if (isNaN(num)) return "—";
    return `$${num.toFixed(2)}`;
  }

  function fmtMoneyLarge(n) {
    if (n == null) return "$0.00";
    const num = Number(n);
    return `$${num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  function todayISO() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function todayPred(r) {
    const d = parseOrderDate(r.order_date);
    if (!d) return false;
    return d.toISOString().slice(0, 10) === todayISO();
  }

  function thisWeekPred(r) {
    const d = parseOrderDate(r.order_date);
    if (!d) return false;
    const ms = Date.now() - d.getTime();
    return ms >= 0 && ms <= 7 * 24 * 3600 * 1000;
  }

  function readyToInvoicePred(r) {
    const hasTracking = (r.tracking_numbers || []).length > 0;
    const hasShip = r.customer_shipping_cost != null;
    const notBlocked = r.status !== "BLOCKED";
    const notReview = r.status !== "RECONCILE" && r.status !== "REVIEW";
    const notInvoiced = !r.qb_invoice_number && r.status !== "INVOICED";
    return hasTracking && hasShip && notBlocked && notReview && notInvoiced;
  }

  function isOpenSD(r) {
    return r.status !== "INVOICED" && !r.qb_invoice_number;
  }

  function isInvoicedSent(r) {
    return !!r.qb_invoice_number;
  }

  // §S.2 — filter state is module-scoped (state.filters). No persistence.
  // Kept saveFilters() as a no-op to preserve existing call sites; Phase 3
  // can delete the callsites once validated.
  function saveFilters() { /* noop — see §S.2 */ }

  // ── Data pipeline ─────────────────────────────────────────────────

  // §D.5 — Phase B tier map: >=95 auto_apply / 80-94 flag / <80 review.
  // Client-side match is exact (100/99/97); for 80-94 "flag" tier we rely on
  // the warn-tooltip hitting /api/match (rapidfuzz) on hover. Rendering
  // tier is set here so canonicalHtml() can show the correct badge.
  function attachCanonical(rows) {
    const reg = window.NU && window.NU.registry;
    if (!reg) return rows;
    // V2.3 D43 — defensive: the registry is gitignored (PII) and may not
    // be present on every deploy target. If the fetch failed or returned
    // an empty list, skip the canonical/⚠ decoration entirely so we don't
    // tag every customer with a false-positive warn icon.
    const entries = reg.entries || [];
    if (entries.length === 0) {
      // eslint-disable-next-line no-console
      console.warn("[shipments] registry empty — canonical decoration skipped");
      return rows;
    }
    for (const r of rows) {
      const { entry, confidence } = reg.match(r.customer || "");
      if (entry && confidence >= 95) {
        r._canonical = entry.canonical_name;
        r._registry_id = entry.id;
        r._registry_confidence = confidence;
      } else if (entry && confidence >= 80) {
        // flag tier — apply canonical but mark for review
        r._canonical = entry.canonical_name;
        r._registry_id = entry.id;
        r._registry_confidence = confidence;
      } else {
        r._canonical = r.customer;
        r._registry_id = null;
        r._registry_confidence = 0;
      }
    }
    return rows;
  }

  function rowSubtotal(r) {
    const tier = r.billing_tier === "dealer" ? "dealer_price" : "direct_price";
    let total = 0;
    for (const li of r.line_items || []) {
      const p = state.catalog[li.pn];
      const rate = p ? p[tier] : null;
      if (rate != null) total += rate * (li.qty || 0);
    }
    return total;
  }

  function applyFilters(rows) {
    if (state.filters.has("all") && state.filters.size === 1) return rows;
    const chosen = FILTER_DEFS.filter((f) => state.filters.has(f.key) && f.key !== "all");
    if (chosen.length === 0) return rows;
    return rows.filter((r) => chosen.some((f) => f.pred(r)));
  }

  function applySearch(rows) {
    const q = state.search.trim().toLowerCase();
    if (!q) return rows;
    const reg = window.NU && window.NU.registry;
    return rows.filter((r) => {
      const blob = [
        r._canonical, r.customer, r.po_number, r.qb_invoice_number,
        r.ship_to_address, r.poc, r.order_date, r.cb_internal_note,
        ...(r.tracking_numbers || []),
        ...(r.line_items || []).flatMap((li) => [li.pn, li.description_short, li.description_full]),
      ].map((s) => (s == null ? "" : String(s).toLowerCase())).join(" | ");
      if (blob.includes(q)) return true;
      if (reg && r._registry_id) {
        const entry = reg.byId(r._registry_id);
        if (entry && (entry.aliases || []).some((a) => a.toLowerCase().includes(q))) return true;
      }
      return false;
    });
  }

  function applySort(rows) {
    const keyFn = SORTABLE_COLUMNS[state.sort.key];
    if (!keyFn) return rows;
    const dir = state.sort.dir === "asc" ? 1 : -1;
    return rows.slice().sort((a, b) => {
      const ka = keyFn(a);
      const kb = keyFn(b);
      if (ka < kb) return -1 * dir;
      if (ka > kb) return 1 * dir;
      return 0;
    });
  }

  function recomputeVisible() {
    let rows = state.rows;
    rows = applyFilters(rows);
    rows = applySearch(rows);
    rows = applySort(rows);
    state.filtered = rows;
  }

  // ── Rendering: PULSE (§D.9 KPI tiles backed by /api/kpi-data) ─────────

  function renderPulse() {
    // Server-provided KPI wins; fall back to local compute.
    if (state.kpiData) {
      const k = state.kpiData;
      setTileValue("open-sds", k.t1.value, k.t1.delta_pct);
      setTileValue("ready",    k.t2.value, k.t2.delta_pct);
      setTileValue("blocked",  k.t3.value, k.t3.delta_pct);
      setTileValue("unbilled", k.t4.value, k.t4.delta_pct, /*money*/ true);
      return;
    }
    const rows = state.rows;
    const openSDs = rows.filter(isOpenSD);
    const ready = rows.filter(readyToInvoicePred);
    const blocked = rows.filter((r) => r.status === "BLOCKED");
    const unbilled = openSDs.reduce(
      (sum, r) => sum + rowSubtotal(r) + (r.customer_shipping_cost || 0),
      0
    );
    setTileValue("open-sds", openSDs.length);
    setTileValue("ready",    ready.length);
    setTileValue("blocked",  blocked.length);
    setTileValue("unbilled", unbilled, null, /*money*/ true);
  }

  function setTileValue(key, value, deltaPct, isMoney) {
    const vEl = document.querySelector(`[data-pulse="${key}"]`);
    if (vEl) vEl.textContent = isMoney ? fmtMoneyLarge(value) : String(value);
    const dEl = document.querySelector(`[data-pulse-delta="${key}"]`);
    if (dEl) {
      if (deltaPct == null) {
        dEl.textContent = "";
        dEl.className = "pulse-delta";
      } else {
        const arrow = deltaPct > 0 ? "↑" : (deltaPct < 0 ? "↓" : "");
        dEl.textContent = arrow + " " + Math.abs(deltaPct).toFixed(1) + "%";
        dEl.className = "pulse-delta " + (deltaPct > 0 ? "delta-up" : deltaPct < 0 ? "delta-down" : "delta-flat");
      }
    }
  }

  async function fetchReviewQueueBadge() {
    try {
      const resp = await fetch("/data/review_queue.json", { cache: "no-cache" });
      if (!resp.ok) return;
      const data = await resp.json();
      const total = Number(data.total || 0);
      const link = document.querySelector('.nu-topnav-row-2 a[href="/shipments.html"]');
      if (!link) return;
      // Clear any existing badge before appending a new one.
      const existing = link.querySelector(".review-queue-badge");
      if (existing) existing.remove();
      if (total > 0) {
        const badge = document.createElement("span");
        badge.className = "review-queue-badge";
        badge.textContent = String(total);
        badge.setAttribute("aria-label", `${total} items in review queue`);
        badge.title = `${total} items waiting in the review queue`;
        link.appendChild(badge);
      }
    } catch (e) { /* silent; badge is non-essential */ }
  }

  async function fetchKpi(windowName) {
    try {
      const resp = await fetch(`${API_BASE}/api/kpi-data?window=${encodeURIComponent(windowName)}`, { cache: "no-cache" });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      if (data && data.ok) {
        state.kpiData = data;
        renderPulse();
      }
    } catch (e) {
      console.warn("[kpi] fetch failed, falling back to local:", e);
    }
  }

  function bindKpiWindow() {
    document.querySelectorAll(".kpi-window-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        const w = btn.dataset.window;
        if (!w) return;
        state.kpiWindow = w;
        document.querySelectorAll(".kpi-window-pill").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        fetchKpi(w);
      });
    });
  }

  function bindKpiTileClick() {
    // Click a tile → apply the corresponding filter chip.
    const mapping = {
      "open-sds": null,       // no single filter captures "open"; use "all" as no-op
      "ready":    "ready",
      "blocked":  "blocked",
      "unbilled": null,       // unbilled = all non-invoiced; no specific chip
    };
    document.querySelectorAll(".pulse-tile[data-pulse-key]").forEach((tile) => {
      tile.addEventListener("click", () => {
        const key = tile.dataset.pulseKey;
        const chip = mapping[key];
        if (!chip) return;
        // Swap filter to just this chip.
        state.filters = new Set([chip]);
        renderChips();
        recomputeVisible();
        renderTable();
      });
      tile.setAttribute("role", "button");
      tile.setAttribute("tabindex", "0");
    });
  }

  // ── Rendering: filter chips ───────────────────────────────────────

  function renderChips() {
    const host = document.getElementById("filter-chips");
    host.innerHTML = FILTER_DEFS.map((f) => {
      const active = state.filters.has(f.key) ? " active" : "";
      const reviewCls = f.key === "review" ? " chip-pulse" : "";
      return `<button type="button" class="chip${active}${reviewCls}" data-filter="${f.key}">${esc(f.label)}</button>`;
    }).join("");
    host.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => toggleFilter(btn.dataset.filter));
    });
  }

  function toggleFilter(key) {
    if (key === "all") {
      state.filters = new Set(["all"]);
    } else {
      state.filters.delete("all");
      if (state.filters.has(key)) state.filters.delete(key);
      else state.filters.add(key);
      if (state.filters.size === 0) state.filters = new Set(["all"]);
    }
    saveFilters();
    renderChips();
    recomputeVisible();
    renderTable();
  }

  // ── Rendering: table ──────────────────────────────────────────────

  function shipToBlock(raw) {
    if (!raw) return "—";
    const parts = String(raw).split(" | ").map((s) => s.trim()).filter(Boolean);
    return parts.map((p) => `<div>${esc(p)}</div>`).join("");
  }

  function stackedPN(items) {
    if (!items || !items.length) return "—";
    return items.map((i) => `<div class="pn-line">${esc(i.pn)}</div>`).join("");
  }

  function stackedDesc(items) {
    if (!items || !items.length) return "—";
    return items.map((i) => {
      const label = i.description_short || DESCRIPTION_FALLBACK[i.pn] || i.description_full || "—";
      return `<div>${esc(label)}</div>`;
    }).join("");
  }

  function stackedQty(items) {
    if (!items || !items.length) return "—";
    return items.map((i) => `<div>${esc(i.qty)}</div>`).join("");
  }

  function trackingLinks(trackings) {
    if (!trackings || !trackings.length) return '<span class="muted">—</span>';
    return trackings.map((t) =>
      `<a class="track-link" href="https://www.ups.com/track?tracknum=${encodeURIComponent(t)}" target="_blank" rel="noopener">${esc(t)}</a>`
    ).join("<br>");
  }

  // Phase B §6 — read-mode HTML for the Notes cell.
  // V2.3 D42 — input may be string, array, or object; coerce first.
  function notesReadMode(notes) {
    const text = coerceNotesText(notes);
    if (!text) return '<span class="notes-empty-hint">Click to add notes</span>';
    const short = text.length > 80 ? text.slice(0, 80) + "…" : text;
    const more = text.length > 80 ? '<span class="notes-more">(click to read)</span>' : "";
    return `<span class="notes-text">${esc(short)}</span>${more}`;
  }

  function renderTable() {
    const tbody = document.getElementById("shipments-tbody");
    const rows = state.filtered;
    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="15" class="empty-row">No shipments match the current filters.</td></tr>';
      renderPulse();
      return;
    }
    tbody.innerHTML = rows.map(rowHtml).join("");
    renderPulse();
  }

  // §D.5 — confidence tiers (auto_apply >= 95, flag 80-94, review <80)
  function canonicalHtml(r) {
    const conf = r._registry_confidence || 0;
    if (conf >= 95) {
      return `<span class="canonical-name">${esc(r._canonical || r.customer || "—")}</span>`;
    }
    if (conf >= 80) {
      return `<span class="customer-warn customer-warn-flag" data-raw="${esc(r.customer || "")}" title="Applied with flag (80–94% confidence)">&#9888;</span> <span class="canonical-name canonical-flag">${esc(r._canonical || r.customer || "—")}</span>`;
    }
    return `<span class="customer-warn" data-raw="${esc(r.customer || "")}" title="Below auto-apply threshold — hover for candidates">&#9888;</span> <span class="canonical-name review-needed">${esc(r.customer || "—")}</span>`;
  }

  function invoiceNumberHtml(r) {
    if (!r.qb_invoice_number) return '<span class="muted">—</span>';
    // I3: prefer /internal/invoices/<n>.pdf if archived, fall back to raw PDF if present.
    const internalHref = `/internal/invoices/${encodeURIComponent(r.qb_invoice_number)}.pdf`;
    const href = r.qb_invoice_pdf || internalHref;
    return `<a href="${esc(href)}" target="_blank" rel="noopener" class="inv-link" title="Open Invoice ${esc(r.qb_invoice_number)} PDF">${esc(r.qb_invoice_number)}</a>`;
  }

  // §D.8 — 15-column layout, Invoice Sent leftmost, dead row-selector removed.
  // Column order: Invoice Sent | Inv. # | SD | Status | Order Date | Customer
  //            | P/N | Description | QTY | Ship To+POC | Tracking # | PO #
  //            | CC Fee | Shipping | Notes
  // Row-level Copy / Expand buttons removed — click anywhere on the row (outside
  // interactive cells) or press Enter to open the detail panel (detail-panel.js).
  //
  // §I7 Source Priority row highlighting: red for BLOCKED, orange for REVIEW/
  // RECONCILE, green for INVOICED rows with an invoice number (reconciled).
  function rowTintClass(r) {
    const st = (r.status || "").toUpperCase();
    if (st === "BLOCKED") return "row-tint-blocked";
    if (st === "REVIEW" || st === "RECONCILE") return "row-tint-review";
    if (st === "INVOICED" && r.qb_invoice_number) return "row-tint-invoiced";
    return "";
  }

  function rowHtml(r) {
    const display = STATUS_DISPLAY[r.status] || { label: String(r.status || "—").toLowerCase(), cls: (r.status || "").toLowerCase() };
    const sdPath = r.sd_path || (r.sd_filename ? `shipping-docs/${r.sd_filename}` : "");
    const invoiceSent = isInvoicedSent(r);
    const shipping = r.customer_shipping_cost != null ? esc(fmtMoney(r.customer_shipping_cost)) : '<span class="muted">—</span>';
    const tint = rowTintClass(r);

    return `
<tr data-sid="${esc(r.sid)}" class="ship-row${tint ? " " + tint : ""}" tabindex="0">
  <td class="col-invsent"><label class="invoice-sent"><input type="checkbox" class="invoice-sent-box" data-sid="${esc(r.sid)}" ${invoiceSent ? "checked" : ""} aria-label="Mark invoice sent — archive row"><span class="checkmark" aria-hidden="true"></span></label></td>
  <td class="col-invnum">${invoiceNumberHtml(r)}</td>
  <td class="col-sd">${sdPath ? `<a href="/${esc(sdPath)}" target="_blank" rel="noopener" title="Open SD" aria-label="Open SD">&#128230;</a>` : '<span class="muted">—</span>'}</td>
  <td class="col-status"><button type="button" class="status-pill status-${esc(display.cls)}" data-shipment-id="${esc(r.sid)}" data-status="${esc(display.cls)}" aria-haspopup="listbox" aria-expanded="false" tabindex="0"><span class="status-label">${esc(display.label)}</span><span class="status-caret" aria-hidden="true">&#9662;</span></button></td>
  <td class="col-date">${esc(fmtDate(r.order_date))}</td>
  <td class="col-customer">${canonicalHtml(r)}</td>
  <td class="col-pn">${stackedPN(r.line_items)}</td>
  <td class="col-desc detail-only">${stackedDesc(r.line_items)}</td>
  <td class="col-qty">${stackedQty(r.line_items)}</td>
  <td class="col-shipto detail-only">${shipToBlock(r.ship_to_address)}${r.poc ? `<div class="poc">POC: ${esc(r.poc)}</div>` : ""}</td>
  <td class="col-tracking">${trackingLinks(r.tracking_numbers)}</td>
  <td class="col-po">${r.po_number ? esc(r.po_number) : '<span class="muted">—</span>'}</td>
  <td class="col-ccfee"><span class="cc-fee-dash">—</span></td>
  <td class="col-shipping">${shipping}</td>
  <td class="col-notes notes-cell" data-sid="${esc(r.sid)}" data-notes="${esc(coerceNotesText(r.notes) || r.cb_internal_note || '')}" tabindex="0" aria-label="Notes for ${esc(r.sid)}">${notesReadMode(coerceNotesText(r.notes) || r.cb_internal_note || '')}</td>
</tr>`;
  }

  // ── Sort ──────────────────────────────────────────────────────────

  function bindHeaderSort() {
    document.querySelectorAll("th.sortable").forEach((th) => {
      th.addEventListener("click", () => {
        const key = th.dataset.sort;
        if (!key || !(key in SORTABLE_COLUMNS)) return;
        if (state.sort.key === key) {
          state.sort = { key, dir: state.sort.dir === "asc" ? "desc" : "asc" };
        } else {
          state.sort = { key, dir: "asc" };
        }
        updateSortIndicators();
        recomputeVisible();
        renderTable();
      });
    });
    updateSortIndicators();
  }

  function updateSortIndicators() {
    document.querySelectorAll("th.sortable").forEach((th) => {
      th.classList.remove("sort-asc", "sort-desc");
      if (th.dataset.sort === state.sort.key) {
        th.classList.add(state.sort.dir === "asc" ? "sort-asc" : "sort-desc");
      }
    });
  }

  // ── Search ────────────────────────────────────────────────────────

  function bindSearch() {
    const input = document.getElementById("shipments-search");
    let t = null;
    input.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => {
        state.search = input.value;
        recomputeVisible();
        renderTable();
      }, 200);
    });
  }

  // ── View toggle ───────────────────────────────────────────────────

  function bindViewToggle() {
    const btn = document.getElementById("view-toggle-btn");
    applyViewMode();
    btn.addEventListener("click", () => {
      state.viewMode = state.viewMode === "default" ? "detailed" : "default";
      // §S.2 — no persistence; module-scoped only.
      applyViewMode();
    });
  }

  function applyViewMode() {
    const table = document.querySelector(".shipments-table");
    const btn = document.getElementById("view-toggle-btn");
    if (state.viewMode === "detailed") {
      table.classList.add("view-detailed");
      btn.textContent = "Default view";
    } else {
      table.classList.remove("view-detailed");
      btn.textContent = "Detailed view";
    }
  }

  // ── PULSE collapse ────────────────────────────────────────────────

  function bindPulseToggle() {
    const chev = document.getElementById("pulse-chev");
    const strip = document.getElementById("invoicing-pulse");
    if (state.pulseCollapsed) strip.classList.add("collapsed");
    chev.addEventListener("click", () => {
      strip.classList.toggle("collapsed");
      state.pulseCollapsed = strip.classList.contains("collapsed");
      // §S.2 — no persistence; module-scoped only.
    });
  }

  // ── DOM scaffolding ───────────────────────────────────────────────

  function mountChrome() {
    const main = document.getElementById("shipments-main");
    main.innerHTML = `
<!-- §D.9 — time-window toggle feeds /api/kpi-data; Month is default. -->
<div id="kpi-window-toggle" class="kpi-window-toggle" role="tablist" aria-label="KPI time window">
  <button type="button" class="kpi-window-pill" data-window="today">Today</button>
  <button type="button" class="kpi-window-pill" data-window="week">Week</button>
  <button type="button" class="kpi-window-pill active" data-window="month">Month</button>
  <button type="button" class="kpi-window-pill" data-window="quarter">Quarter</button>
  <button type="button" class="kpi-window-pill" data-window="ytd">YTD</button>
</div>

<section id="invoicing-pulse" class="nu-pulse-strip" aria-label="Invoicing Pulse / KPI">
  <button id="pulse-chev" type="button" class="pulse-chev" aria-label="Collapse Invoicing Pulse">&#9660;</button>
  <div class="pulse-tile" data-pulse-key="open-sds">
    <div class="pulse-value" data-pulse="open-sds">0</div>
    <div class="pulse-label">Open SDs</div>
    <div class="pulse-delta" data-pulse-delta="open-sds"></div>
  </div>
  <div class="pulse-tile" data-pulse-key="ready">
    <div class="pulse-value" data-pulse="ready">0</div>
    <div class="pulse-label">Ready to Invoice</div>
    <div class="pulse-delta" data-pulse-delta="ready"></div>
  </div>
  <div class="pulse-tile pulse-blocked" data-pulse-key="blocked">
    <div class="pulse-value" data-pulse="blocked">0</div>
    <div class="pulse-label">Blocked</div>
    <div class="pulse-delta" data-pulse-delta="blocked"></div>
  </div>
  <div class="pulse-tile pulse-revenue" data-pulse-key="unbilled">
    <div class="pulse-value" data-pulse="unbilled">$0.00</div>
    <div class="pulse-label">Unbilled Revenue</div>
    <div class="pulse-delta" data-pulse-delta="unbilled"></div>
  </div>
</section>

<div id="filter-chips" class="chip-row" role="toolbar" aria-label="Filter chips"></div>

<div class="controls-row">
  <input type="search" id="shipments-search" placeholder="Search customer, P/N, tracking, ship-to, notes, PO, invoice #, date, alias…" autocomplete="off" spellcheck="false">
  <button type="button" id="view-toggle-btn" class="view-toggle">Detailed view</button>
</div>

<div class="table-wrap">
  <table class="shipments-table">
    <thead>
      <!-- §D.8 — 15-column order, exact. Invoice Sent leftmost; no row-selector;
           no per-row Copy / Expand (detail panel opens on row-click). -->
      <tr>
        <th class="col-invsent">Invoice Sent</th>
        <th class="col-invnum sortable" data-sort="inv-num">Inv. #</th>
        <th class="col-sd">SD</th>
        <th class="col-status">Status</th>
        <th class="col-date sortable" data-sort="order-date">Order Date</th>
        <th class="col-customer sortable" data-sort="customer">Customer</th>
        <th class="col-pn sortable" data-sort="pn">P/N</th>
        <th class="col-desc detail-only">Description</th>
        <th class="col-qty sortable" data-sort="qty">QTY</th>
        <th class="col-shipto detail-only">Ship To + POC</th>
        <th class="col-tracking">Tracking #</th>
        <th class="col-po">PO #</th>
        <th class="col-ccfee">CC Fee</th>
        <th class="col-shipping sortable" data-sort="cust-shipping">Shipping</th>
        <th class="col-notes">Notes</th>
      </tr>
    </thead>
    <tbody id="shipments-tbody">
      <tr><td colspan="15" class="empty-row">Loading…</td></tr>
    </tbody>
  </table>
</div>

<nav class="bottom-nav" aria-label="Related tools">
  <a class="nav-btn" href="/shipments/archive.html">&#128193; Archived Invoices</a>
  <a class="nav-btn" href="/shipping-docs/index.html">&#128203; Shipping Docs Index</a>
  <a class="nav-btn" href="https://docs.google.com/spreadsheets/d/1A6Lh6YJGclrf_r_Sgw2_iWRMoOVeFcaU2t3O_owrGaw/edit?gid=943594533#gid=943594533" target="_blank" rel="noopener">&#128200; Open Live Google Sheet</a>
</nav>
`;
    bindPulseToggle();
    bindSearch();
    bindViewToggle();
    bindHeaderSort();
    renderChips();
    bindKpiWindow();
    bindKpiTileClick();
  }

  // ── Boot ──────────────────────────────────────────────────────────

  async function boot() {
    mountChrome();
    try {
      if (window.NU && window.NU.registry && window.NU.registry.load) {
        await window.NU.registry.load();
      }
      const [shipRes, catRes] = await Promise.all([
        fetch(SHIPMENTS_URL, { cache: "no-cache" }),
        fetch(CATALOG_URL, { cache: "no-cache" }),
      ]);
      const shipJson = await shipRes.json();
      const catJson = await catRes.json();
      state.catalog = catJson.products || {};
      state.rows = attachCanonical(shipJson.records || []);
      recomputeVisible();
      renderTable();
      // §D.9 — fire KPI fetch (non-blocking); Month default.
      fetchKpi(state.kpiWindow);
      // §I4 — review queue nav badge (non-blocking).
      fetchReviewQueueBadge();
      document.body.setAttribute("data-shipments-ready", "1");
    } catch (e) {
      console.error("[shipments-v1] boot failed:", e);
      const tbody = document.getElementById("shipments-tbody");
      if (tbody) {
        tbody.innerHTML = `<tr><td colspan="18" class="empty-row error">Failed to load shipments: ${esc(e.message || e)}</td></tr>`;
      }
    }
  }

  // Phase B §1.5 — page-load entrance cascade + reduced-motion + scroll-shrink
  function initVisualPolish() {
    // reduced-motion: add class to html element so CSS can opt out
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("reduced-motion");
    }
    // page-loaded: triggers entrance cascade
    setTimeout(() => document.body.classList.add("page-loaded"), 100);
    // Chip click scale pulse
    document.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (chip) {
        chip.classList.remove("clicked");
        // next frame to re-trigger animation
        requestAnimationFrame(() => chip.classList.add("clicked"));
      }
    }, true);
    // Scroll-shrink for logo (>100px)
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        document.body.classList.toggle("scrolled", window.scrollY > 100);
        ticking = false;
      });
    }, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { boot(); initVisualPolish(); });
  } else {
    boot();
    initVisualPolish();
  }

  // Expose for Section 4 (copy buttons) to hook into.
  window.NU = window.NU || {};
  window.NU.shipments = {
    get rows() { return state.rows; },
    get filtered() { return state.filtered; },
    get catalog() { return state.catalog; },
    rowSubtotal,
    fmtMoney,
    fmtDate,
    coerceNotesText,
    DESCRIPTION_FALLBACK,
    // Phase B §6: invoice-archive.js calls this after mutating a row
    // out of the open queue so pulse tiles reflect the new state.
    recomputePulse: renderPulse,
  };
})();
