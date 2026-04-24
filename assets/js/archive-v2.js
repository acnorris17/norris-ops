/* ══════════════════════════════════════════════════════════════════
   ARCHIVE V2 — V2 UI §D.4
   Loads /data/shipments.json, filters to INVOICED rows, groups by invoice
   month, supports sort-by-invoice# toggle, and offers a CSV export.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const SHIPMENTS_URL = "/data/shipments.json";

  const state = {
    rows: [],
    sortDir: "desc",   // invoice number sort: "desc" | "asc"
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }

  function fmtMoney(n) {
    const v = Number(n);
    if (!isFinite(v)) return "—";
    return v.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  function fmtDate(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    if (isNaN(d.getTime())) return "—";
    return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}/${d.getFullYear()}`;
  }

  function monthKey(iso) {
    if (!iso) return "Unknown";
    const d = new Date(iso);
    if (isNaN(d.getTime())) return "Unknown";
    return d.toLocaleString("en-US", { month: "long", year: "numeric" });
  }

  function rowTotal(r) {
    let subtotal = 0;
    for (const li of r.line_items || []) {
      const q = Number(li.qty || 0);
      const rate = Number(li.rate || 0);
      if (isFinite(q) && isFinite(rate)) subtotal += q * rate;
    }
    return subtotal + Number(r.customer_shipping_cost || 0) + Number(r.cc_surcharge_amount || 0);
  }

  function invoiceNumKey(r) {
    const n = parseInt(r.qb_invoice_number, 10);
    return Number.isFinite(n) ? n : 0;
  }

  function groupByMonth(rows) {
    const groups = {};
    for (const r of rows) {
      const key = monthKey(r.invoice_date || r.last_updated);
      (groups[key] = groups[key] || []).push(r);
    }
    const keys = Object.keys(groups).sort((a, b) => {
      if (a === "Unknown") return 1;
      if (b === "Unknown") return -1;
      return new Date(b).getTime() - new Date(a).getTime();
    });
    return keys.map((k) => ({ month: k, rows: groups[k] }));
  }

  function sortRows(rows) {
    return rows.slice().sort((a, b) => {
      const d = invoiceNumKey(a) - invoiceNumKey(b);
      return state.sortDir === "asc" ? d : -d;
    });
  }

  function renderGroup(group) {
    const sorted = sortRows(group.rows);
    const total = sorted.reduce((s, r) => s + rowTotal(r), 0);
    const rowsHtml = sorted.map((r) => `
      <tr>
        <td class="col-invnum">${esc(r.qb_invoice_number || "—")}</td>
        <td class="col-sid">${esc(r.sid || "—")}</td>
        <td class="col-customer">${esc(r._canonical || r.customer || "—")}</td>
        <td class="col-date">${esc(fmtDate(r.order_date))}</td>
        <td class="col-invdate">${esc(fmtDate(r.invoice_date || r.last_updated))}</td>
        <td class="col-total">${esc(fmtMoney(rowTotal(r)))}</td>
        <td class="col-po">${esc(r.po_number || "—")}</td>
        <td class="col-tracking">${(r.tracking_numbers || []).map(esc).join("<br>") || "—"}</td>
      </tr>`).join("");
    return `
      <section class="archive-group">
        <h3 class="archive-group-header">
          ${esc(group.month)} &mdash; ${sorted.length} invoices &mdash; ${esc(fmtMoney(total))} total
        </h3>
        <table class="archive-table">
          <thead>
            <tr>
              <th>Inv. #</th>
              <th>SID</th>
              <th>Customer</th>
              <th>Order Date</th>
              <th>Invoice Date</th>
              <th>Total</th>
              <th>PO #</th>
              <th>Tracking #</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </section>`;
  }

  function render() {
    const main = document.getElementById("archive-main");
    const groups = groupByMonth(state.rows);
    const body = groups.length
      ? groups.map(renderGroup).join("")
      : `<div class="scaffold-note">No archived invoices yet.</div>`;
    main.innerHTML = `
      <div class="archive-controls">
        <button type="button" id="archive-sort-toggle" class="archive-sort-toggle">
          Invoice # sort: ${state.sortDir === "desc" ? "newest first ↓" : "oldest first ↑"}
        </button>
        <button type="button" id="archive-csv-export" class="archive-csv-export">
          Export CSV
        </button>
        <span class="archive-count">${state.rows.length} total invoices</span>
      </div>
      ${body}`;
    document.getElementById("archive-sort-toggle").addEventListener("click", () => {
      state.sortDir = state.sortDir === "desc" ? "asc" : "desc";
      render();
    });
    document.getElementById("archive-csv-export").addEventListener("click", exportCsv);
    document.body.setAttribute("data-archive-ready", "1");
  }

  function csvEscape(s) {
    const v = String(s == null ? "" : s);
    if (v.includes(",") || v.includes('"') || v.includes("\n")) {
      return `"${v.replace(/"/g, '""')}"`;
    }
    return v;
  }

  function exportCsv() {
    const headers = ["Inv#", "SID", "Customer", "OrderDate", "InvoiceDate",
                     "Subtotal", "Shipping", "CCFee", "Total", "PO#", "Tracking"];
    const lines = [headers.join(",")];
    const sorted = sortRows(state.rows);
    for (const r of sorted) {
      const subtotal = (r.line_items || []).reduce((s, li) => {
        const q = Number(li.qty || 0), rate = Number(li.rate || 0);
        return isFinite(q) && isFinite(rate) ? s + q * rate : s;
      }, 0);
      const ship = Number(r.customer_shipping_cost || 0);
      const fee = Number(r.cc_surcharge_amount || 0);
      const total = subtotal + ship + fee;
      lines.push([
        r.qb_invoice_number || "",
        r.sid || "",
        r._canonical || r.customer || "",
        fmtDate(r.order_date),
        fmtDate(r.invoice_date || r.last_updated),
        subtotal.toFixed(2),
        ship.toFixed(2),
        fee.toFixed(2),
        total.toFixed(2),
        r.po_number || "",
        (r.tracking_numbers || []).join(" | "),
      ].map(csvEscape).join(","));
    }
    const csv = lines.join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const a = document.createElement("a");
    a.href = url;
    a.download = `archive-${today}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function boot() {
    try {
      const resp = await fetch(SHIPMENTS_URL, { cache: "no-cache" });
      const doc = await resp.json();
      const records = (doc.records || []).filter((r) => (r.status || "").toUpperCase() === "INVOICED");
      state.rows = records;
      render();
    } catch (e) {
      const main = document.getElementById("archive-main");
      if (main) main.innerHTML = `<div class="scaffold-note">Failed to load: ${esc(e.message || e)}</div>`;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
