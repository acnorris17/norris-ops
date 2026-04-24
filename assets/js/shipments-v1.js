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

  const LS_KEYS = {
    pulseCollapsed: "invoicing_pulse_collapsed",
    filters: "shipments_filters_selected",
    viewMode: "shipments_view_mode",
  };

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

  const STATUS_DISPLAY = {
    PENDING: { label: "pending", cls: "pending" },
    PROCESSING: { label: "processing", cls: "processing" },
    SHIPPED: { label: "shipped", cls: "shipped" },
    INVOICED: { label: "invoiced", cls: "invoiced" },
    CC: { label: "cc", cls: "cc" },
    BLOCKED: { label: "blocked", cls: "blocked" },
    RECONCILE: { label: "REVIEW", cls: "review" },
    REVIEW: { label: "REVIEW", cls: "review" },
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
    filters: loadFilters(),
    search: "",
    viewMode: localStorage.getItem(LS_KEYS.viewMode) || "default",
    sort: { key: "order-date", dir: "desc" },
    pulseCollapsed: localStorage.getItem(LS_KEYS.pulseCollapsed) === "1",
  };

  // ── Helpers ───────────────────────────────────────────────────────

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
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

  function loadFilters() {
    try {
      const raw = localStorage.getItem(LS_KEYS.filters);
      if (!raw) return new Set(["all"]);
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr) || arr.length === 0) return new Set(["all"]);
      return new Set(arr);
    } catch {
      return new Set(["all"]);
    }
  }

  function saveFilters() {
    localStorage.setItem(LS_KEYS.filters, JSON.stringify([...state.filters]));
  }

  // ── Data pipeline ─────────────────────────────────────────────────

  function attachCanonical(rows) {
    const reg = window.NU && window.NU.registry;
    if (!reg) return rows;
    for (const r of rows) {
      const { entry, confidence } = reg.match(r.customer || "");
      if (entry && confidence >= 97) {
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

  // ── Rendering: PULSE ──────────────────────────────────────────────

  function renderPulse() {
    const rows = state.rows;
    const openSDs = rows.filter(isOpenSD);
    const ready = rows.filter(readyToInvoicePred);
    const blocked = rows.filter((r) => r.status === "BLOCKED");
    const unbilled = openSDs.reduce(
      (sum, r) => sum + rowSubtotal(r) + (r.customer_shipping_cost || 0),
      0
    );

    document.querySelector('[data-pulse="open-sds"]').textContent = openSDs.length;
    document.querySelector('[data-pulse="ready"]').textContent = ready.length;
    document.querySelector('[data-pulse="blocked"]').textContent = blocked.length;
    document.querySelector('[data-pulse="unbilled"]').textContent = fmtMoneyLarge(unbilled);
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
  function notesReadMode(notes) {
    if (!notes) return '<span class="notes-empty-hint">Click to add notes</span>';
    const short = notes.length > 80 ? notes.slice(0, 80) + "…" : notes;
    const more = notes.length > 80 ? '<span class="notes-more">(click to read)</span>' : "";
    return `<span class="notes-text">${esc(short)}</span>${more}`;
  }

  function renderTable() {
    const tbody = document.getElementById("shipments-tbody");
    const rows = state.filtered;
    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="18" class="empty-row">No shipments match the current filters.</td></tr>';
      renderPulse();
      return;
    }
    tbody.innerHTML = rows.map(rowHtml).join("");
    renderPulse();
  }

  function rowHtml(r) {
    const display = STATUS_DISPLAY[r.status] || { label: String(r.status || "—").toLowerCase(), cls: (r.status || "").toLowerCase() };
    const canonicalBadge = r._registry_confidence >= 97
      ? `<span class="canonical-name">${esc(r._canonical)}</span>`
      : `<span class="customer-warn" data-raw="${esc(r.customer || "")}" title="Below auto-apply threshold — hover for candidates">&#9888;</span> <span class="canonical-name review-needed">${esc(r.customer || "—")}</span>`;
    const poNum = r.po_number ? esc(r.po_number) : '<span class="muted">—</span>';
    const invNum = r.qb_invoice_number
      ? (r.qb_invoice_pdf
          ? `<a href="${esc(r.qb_invoice_pdf)}" target="_blank" rel="noopener" class="inv-link" title="Open Invoice ${esc(r.qb_invoice_number)} PDF">${esc(r.qb_invoice_number)}</a>`
          : `<span class="inv-num-plain" style="color:#777;" title="Invoice number present, PDF not yet archived">${esc(r.qb_invoice_number)}</span>`)
      : '<span class="muted">—</span>';
    const shipping = r.customer_shipping_cost != null ? esc(fmtMoney(r.customer_shipping_cost)) : '<span class="muted">—</span>';
    const sdPath = r.sd_path || (r.sd_filename ? `shipping-docs/${r.sd_filename}` : "");
    const invoiceSent = isInvoicedSent(r);

    return `
<tr data-sid="${esc(r.sid)}" class="ship-row">
  <td class="col-checkbox"><input type="checkbox" disabled aria-label="Select row (Phase D)"></td>
  <td class="col-icon">${sdPath ? `<a href="/${esc(sdPath)}" target="_blank" rel="noopener" title="Open SD" aria-label="Open SD">&#128230;</a>` : "—"}</td>
  <td class="col-status"><button type="button" class="status-pill status-${esc(display.cls)}" data-shipment-id="${esc(r.sid)}" data-status="${esc(display.cls)}" aria-haspopup="listbox" aria-expanded="false" tabindex="0"><span class="status-label">${esc(display.label)}</span><span class="status-caret" aria-hidden="true">&#9662;</span></button></td>
  <td class="col-date">${esc(fmtDate(r.order_date))}</td>
  <td class="col-customer">${canonicalBadge}</td>
  <td class="col-po">${poNum}</td>
  <td class="col-pn">${stackedPN(r.line_items)}</td>
  <td class="col-desc detail-only">${stackedDesc(r.line_items)}</td>
  <td class="col-qty">${stackedQty(r.line_items)}</td>
  <td class="col-shipto detail-only">${shipToBlock(r.ship_to_address)}${r.poc ? `<div class="poc">POC: ${esc(r.poc)}</div>` : ""}</td>
  <td class="col-tracking">${trackingLinks(r.tracking_numbers)}</td>
  <td class="col-ccfee detail-only"><span class="muted">—</span></td>
  <td class="col-shipping">${shipping}</td>
  <td class="col-invnum detail-only">${invNum}</td>
  <td class="col-notes notes-cell" data-sid="${esc(r.sid)}" data-notes="${esc(r.notes || r.cb_internal_note || '')}" tabindex="0" aria-label="Notes for ${esc(r.sid)}">${notesReadMode(r.notes || r.cb_internal_note)}</td>
  <td class="col-invsent"><label class="invoice-sent"><input type="checkbox" class="invoice-sent-box" data-sid="${esc(r.sid)}" ${invoiceSent ? "checked" : ""} aria-label="Mark invoice sent — archive row"><span class="checkmark" aria-hidden="true"></span></label></td>
  <td class="col-copy detail-only"><button type="button" class="copy-trigger" data-sid="${esc(r.sid)}" aria-label="Copy for QB">&#128203;</button></td>
  <td class="col-expand"><button type="button" class="expand-trigger" data-sid="${esc(r.sid)}" aria-label="Expand detail">&#9660;</button></td>
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
      localStorage.setItem(LS_KEYS.viewMode, state.viewMode);
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
      const collapsed = strip.classList.contains("collapsed");
      state.pulseCollapsed = collapsed;
      localStorage.setItem(LS_KEYS.pulseCollapsed, collapsed ? "1" : "0");
    });
  }

  // ── DOM scaffolding ───────────────────────────────────────────────

  function mountChrome() {
    const main = document.getElementById("shipments-main");
    main.innerHTML = `
<section id="invoicing-pulse" class="nu-pulse-strip" aria-label="Invoicing Pulse">
  <button id="pulse-chev" type="button" class="pulse-chev" aria-label="Collapse Invoicing Pulse">&#9660;</button>
  <div class="pulse-tile">
    <div class="pulse-value" data-pulse="open-sds">0</div>
    <div class="pulse-label">Open SDs</div>
  </div>
  <div class="pulse-tile">
    <div class="pulse-value" data-pulse="ready">0</div>
    <div class="pulse-label">Ready to Invoice</div>
  </div>
  <div class="pulse-tile pulse-blocked">
    <div class="pulse-value" data-pulse="blocked">0</div>
    <div class="pulse-label">Blocked</div>
  </div>
  <div class="pulse-tile pulse-revenue">
    <div class="pulse-value" data-pulse="unbilled">$0.00</div>
    <div class="pulse-label">Unbilled Revenue</div>
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
      <tr>
        <th class="col-checkbox"></th>
        <th class="col-icon"></th>
        <th class="col-status">Status</th>
        <th class="col-date sortable" data-sort="order-date">Order Date</th>
        <th class="col-customer sortable" data-sort="customer">Customer</th>
        <th class="col-po">PO #</th>
        <th class="col-pn sortable" data-sort="pn">P/N</th>
        <th class="col-desc detail-only">Description</th>
        <th class="col-qty sortable" data-sort="qty">Qty</th>
        <th class="col-shipto detail-only">Ship To + POC</th>
        <th class="col-tracking">Tracking #</th>
        <th class="col-ccfee detail-only">CC Fee</th>
        <th class="col-shipping sortable" data-sort="cust-shipping">Cust. Shipping</th>
        <th class="col-invnum detail-only sortable" data-sort="inv-num">Inv #</th>
        <th class="col-notes">Notes</th>
        <th class="col-invsent detail-only">Invoice Sent</th>
        <th class="col-copy detail-only">Copy</th>
        <th class="col-expand detail-only"></th>
      </tr>
    </thead>
    <tbody id="shipments-tbody">
      <tr><td colspan="18" class="empty-row">Loading…</td></tr>
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
    DESCRIPTION_FALLBACK,
    // Phase B §6: invoice-archive.js calls this after mutating a row
    // out of the open queue so pulse tiles reflect the new state.
    recomputePulse: renderPulse,
  };
})();
