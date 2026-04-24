/* ══════════════════════════════════════════════════════════════════
   DETAIL PANEL — Phase B §5
   Click ▼ (.expand-trigger) OR a row (outside action cells) → inline
   2-col panel expands below the row with:
     LEFT  = Bill-To + Ship-To + Order Context
     RIGHT = Line Items + Shipping + CC Fee + QB Memo + Audit preview
             + 13 mirrored copy buttons (via window.NU.copyButtons)
   ══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const API_BASE = "http://127.0.0.1:8766";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }

  function fmtMoney(n) {
    const v = Number(n);
    if (!isFinite(v)) return "—";
    return new Intl.NumberFormat("en-US", {
      style: "currency", currency: "USD", minimumFractionDigits: 2,
    }).format(v);
  }

  function fmtDate(s) {
    if (!s) return "—";
    return s;
  }

  function isActionCell(el) {
    // Prevent panel toggle when user clicks any interactive cell
    return !!el.closest(".status-pill, .copy-trigger, .expand-trigger, .notes-cell, .invoice-sent-cell, .track-link, .col-icon a, input, button, a.view-full-history, .status-dropdown, .status-tooltip-wrap");
  }

  function closeOpenPanels(exceptSid) {
    document.querySelectorAll(".detail-panel-row").forEach((tr) => {
      if (tr.dataset.sid !== exceptSid) tr.remove();
    });
    document.querySelectorAll(".expand-trigger.open").forEach((btn) => {
      if (btn.dataset.sid !== exceptSid) btn.classList.remove("open");
    });
  }

  function leftCol(row) {
    const shipTo = row.ship_to_address || "";
    const billToLines = row._canonical
      ? [row._canonical, row.customer || "", row.billing_tier === "dealer" ? "[DEALER]" : ""].filter(Boolean)
      : [row.customer || "—"];
    const ctxRows = [
      ["Order Date", fmtDate(row.order_date)],
      ["PO #",       row.po_number || "—"],
      ["Terms",      row.billing_tier === "dealer" ? "Net 30 (Dealer)" : row.billing_tier || "—"],
      ["Payment",    paymentLabel(row)],
    ];
    const notesBlock = row.cb_internal_note
      ? `<div class="customer-notes"><strong>Notes on this customer:</strong><p>${esc(row.cb_internal_note)}</p></div>`
      : "";
    return `
      <div class="detail-left">
        <section class="bill-to">
          <h4>Bill-To</h4>
          ${billToLines.map((l) => `<div>${esc(l)}</div>`).join("")}
        </section>
        <section class="ship-to">
          <h4>Ship-To</h4>
          <pre>${esc(shipTo)}</pre>
          ${row.poc ? `<em>POC: ${esc(row.poc)}</em>` : ""}
        </section>
        <section class="order-context">
          <h4>Order Context</h4>
          <dl>
            ${ctxRows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}
          </dl>
          ${notesBlock}
        </section>
      </div>`;
  }

  function paymentLabel(row) {
    // Phase B §8 adds real badge; for Phase B §5 detail panel show fallback.
    if (row._registry_payment) return row._registry_payment;
    if (row.cc_surcharge_applies) return "CC";
    return row.billing_tier === "dealer" ? "Net 30" : "—";
  }

  function rightCol(row) {
    const lines = (row.line_items || []).map((li) => `
      <tr>
        <td>${esc(li.pn)}</td>
        <td>${esc(li.description_short || li.description_full || li.description || "")}</td>
        <td class="qty">${esc(li.qty)}</td>
        <td class="rate">${li.rate != null ? fmtMoney(li.rate) : "<span class='muted'>—</span>"}</td>
        <td class="total">${li.rate != null ? fmtMoney(Number(li.qty) * Number(li.rate)) : "<span class='muted'>—</span>"}</td>
      </tr>`).join("");

    const subtotal = (row.line_items || []).reduce((s, li) => {
      if (li.rate == null) return s;
      return s + Number(li.qty) * Number(li.rate);
    }, 0);
    const shipping = row.customer_shipping_cost != null ? Number(row.customer_shipping_cost) : null;

    const shippingSection = `
      <section class="shipping-breakdown">
        <h4>Shipping</h4>
        <dl>
          <dt>Carrier</dt><dd>UPS</dd>
          <dt>Tracking</dt><dd>${(row.tracking_numbers || []).length
            ? (row.tracking_numbers || []).map((t) => `<a href="https://www.ups.com/track?tracknum=${encodeURIComponent(t)}" target="_blank" rel="noopener">${esc(t)}</a>`).join("<br>")
            : "<span class='muted'>—</span>"}</dd>
          <dt>RegCost</dt><dd>${(row.tracking_per_package_costs || []).length
            ? fmtMoney((row.tracking_per_package_costs || []).reduce((s, c) => s + Number(c || 0), 0))
            : "<span class='muted'>—</span>"}</dd>
          <dt>Customer Shipping</dt><dd><strong>${shipping != null ? fmtMoney(shipping) : "—"}</strong></dd>
        </dl>
      </section>`;

    const ccFeeSection = row.cc_surcharge_applies
      ? `<section class="cc-fee-breakdown">
          <h4>CC Fee</h4>
          <dl>
            <dt>Subtotal</dt><dd>${fmtMoney(subtotal)}</dd>
            <dt>Shipping</dt><dd>${fmtMoney(shipping || 0)}</dd>
            <dt>Total subject</dt><dd>${fmtMoney(subtotal + (shipping || 0))}</dd>
            <dt>Rate</dt><dd>4.0%</dd>
            <dt>Fee</dt><dd><strong>${fmtMoney((subtotal + (shipping || 0)) * 0.04)}</strong></dd>
          </dl>
         </section>`
      : "";

    const memoLines = [
      row.po_number ? `PO# ${row.po_number}` : null,
      (row.line_items || []).map((li) => `${li.qty}× ${li.pn}`).join(" + ") || null,
      row.tracking_numbers && row.tracking_numbers.length
        ? `UPS ${row.tracking_numbers.join(", ")}`
        : null,
    ].filter(Boolean).join("\n");

    const trail = Array.isArray(row.audit_trail) ? row.audit_trail.slice(-3) : [];
    const auditPreview = trail.length
      ? `<ul class="audit-list">${trail.map((e) => `
          <li><span class="audit-ts">${esc(e.display_ts)}</span>
          <span class="audit-text">${esc(e.actor)} ${esc(e.event)} ${esc(e.from)}→${esc(e.to)}</span></li>`).join("")}</ul>`
      : "<p class='muted'><em>No recent activity</em></p>";

    const copyPanel = (window.NU && window.NU.copyButtons && window.NU.copyButtons.renderPanel)
      ? window.NU.copyButtons.renderPanel(row)
      : "<p class='muted'>(copy buttons unavailable)</p>";

    return `
      <div class="detail-right">
        <section class="line-items">
          <h4>Line Items</h4>
          <table>
            <thead><tr><th>P/N</th><th>Description</th><th>Qty</th><th>Rate</th><th>Total</th></tr></thead>
            <tbody>${lines || '<tr><td colspan="5" class="muted"><em>No items</em></td></tr>'}</tbody>
            <tfoot><tr><td colspan="4">Subtotal</td><td>${fmtMoney(subtotal)}</td></tr></tfoot>
          </table>
        </section>
        ${shippingSection}
        ${ccFeeSection}
        <section class="qb-memo">
          <h4>QB Invoice Memo</h4>
          <pre class="memo-text">${esc(memoLines || "(memo will be generated at invoice time)")}</pre>
        </section>
        <section class="audit-preview">
          <h4>Recent Activity</h4>
          ${auditPreview}
          <a href="#" class="view-full-history" data-shipment-id="${esc(row.sid)}">View Full History &rarr;</a>
        </section>
        <section class="panel-copy-buttons">
          <h4>Copy for QuickBooks</h4>
          ${copyPanel}
        </section>
      </div>`;
  }

  function buildPanel(row, colspan) {
    const tr = document.createElement("tr");
    tr.className = "detail-panel-row";
    tr.dataset.sid = row.sid;
    tr.innerHTML = `<td colspan="${colspan}"><div class="detail-panel">${leftCol(row)}${rightCol(row)}</div></td>`;
    return tr;
  }

  function togglePanel(anchorRow) {
    const sid = anchorRow.getAttribute("data-sid");
    if (!sid) return;
    const existing = anchorRow.nextElementSibling;
    const expandBtn = anchorRow.querySelector(".expand-trigger");
    const wasOpen = existing && existing.classList.contains("detail-panel-row") && existing.dataset.sid === sid;
    closeOpenPanels(null);
    if (wasOpen) return;
    const row = (window.NU && window.NU.shipments && window.NU.shipments.rows || [])
      .find((r) => r.sid === sid);
    if (!row) return;
    const colspan = anchorRow.querySelectorAll("td").length;
    const panel = buildPanel(row, colspan);
    anchorRow.after(panel);
    if (expandBtn) expandBtn.classList.add("open");
    // Wire up copy buttons inside the mirrored panel to hit window.NU.copyButtons.copy
    const cb = window.NU && window.NU.copyButtons;
    if (cb) {
      panel.querySelectorAll(".copy-field-btn").forEach((btn) => {
        if (btn.disabled) return;
        btn.addEventListener("click", () => {
          const defs = cb.buttonsFor(row);
          const label = btn.dataset.label;
          const def = defs.find((d) => d.label === label);
          if (def && cb.copy) cb.copy(def.value, label, btn);
        });
      });
    }
  }

  function onClick(e) {
    // Expand-trigger ▼ → toggle
    const trigger = e.target.closest(".expand-trigger");
    if (trigger) {
      // Even if Phase A marked it disabled, Phase B un-disables at runtime
      trigger.disabled = false;
      e.preventDefault();
      const tr = trigger.closest("tr[data-sid]");
      if (tr) togglePanel(tr);
      return;
    }
    // Row click (outside action cells) → toggle
    const tr = e.target.closest("tr[data-sid]");
    if (!tr || tr.classList.contains("detail-panel-row")) return;
    if (isActionCell(e.target)) return;
    togglePanel(tr);
  }

  function onKey(e) {
    const tr = e.target.closest && e.target.closest("tr[data-sid]");
    if (!tr) return;
    if (e.key === "Enter" || e.key === " ") {
      if (isActionCell(e.target)) return;
      e.preventDefault();
      togglePanel(tr);
    } else if (e.key === "Escape") {
      closeOpenPanels(null);
    }
  }

  // Un-disable expand triggers after first render so Phase B panel can open.
  function enableExpandTriggers() {
    document.querySelectorAll(".expand-trigger[disabled]").forEach((btn) => {
      btn.disabled = false;
      btn.removeAttribute("title");
    });
  }

  function boot() {
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    // Enable triggers after initial render + on subsequent re-renders
    enableExpandTriggers();
    const obs = new MutationObserver(() => enableExpandTriggers());
    const tbody = document.getElementById("shipments-tbody") || document.body;
    obs.observe(tbody, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.NU = window.NU || {};
  window.NU.detailPanel = { togglePanel, closeOpenPanels };
})();
