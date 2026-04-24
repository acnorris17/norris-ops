/* ══════════════════════════════════════════════════════════════════
   PAYMENT BADGE + CC FEE — Phase B §8
   Post-render enhancement: for each shipment row, look up registry
   entry via window.NU.registry, append a payment badge pill to the
   customer cell, and populate the CC Fee column when applicable.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }

  // §D.7 canonical 6 + Net 60 back-compat. CSS classes map 1:1.
  const LABEL_META = {
    "Net 30":      { cls: "net30",    tooltip: "Net 30 terms. Payment due 30 days from invoice date." },
    "Net 60":      { cls: "net60",    tooltip: "Net 60 terms (legacy)." },
    "CC":          { cls: "cc",       tooltip: "Pays by credit card. 4% convenience fee applies." },
    "CC on file":  { cls: "ccfile",   tooltip: "Card on file. Charge at invoice send. 4% fee applies." },
    "ACH":         { cls: "ach",      tooltip: "Bank ACH. No card fee." },
    "On Receipt":  { cls: "receipt",  tooltip: "Due on receipt." },
    "FREE":        { cls: "free",     tooltip: "No charge — internal / comp'd by Norris." },
    "—":           { cls: "unknown",  tooltip: "No payment preference on record; ask customer." },
  };

  function labelFor(entry) {
    if (!entry) return "—";
    const payment = entry.payment;
    if (!payment) return "—";
    if (typeof payment === "string") {
      const s = payment.toLowerCase().replace(/\s+/g, "");
      if (s === "net30" || s === "net30days") return "Net 30";
      if (s === "net60" || s === "net60days") return "Net 60";
      if (s === "cc") return "CC";
      if (s === "cconfile") return "CC on file";
      if (s === "ach") return "ACH";
      if (s === "onreceipt" || s === "dueonreceipt" || s === "receipt") return "On Receipt";
      if (s === "free" || s === "comp" || s === "nocharge") return "FREE";
      return "—";
    }
    const method = (payment.method || "").toLowerCase().replace(/\s+/g, "");
    const ccOnFile = !!payment.cc_on_file;
    const ccFeeApplies = payment.cc_fee_applies;
    if (method === "cc" && ccOnFile) return "CC on file";
    if (method === "cc") return "CC";
    if (method === "net30") return "Net 30";
    if (method === "net60") return "Net 60";
    if (method === "ach") return "ACH";
    if (method === "onreceipt" || method === "dueonreceipt" || method === "receipt") return "On Receipt";
    if (method === "free" || method === "comp" || method === "nocharge") return "FREE";
    // Implicit FREE: explicit `cc_fee_applies: false` with no method set
    if (method === "" && ccFeeApplies === false) return "FREE";
    return "—";
  }

  function ccFeeApplies(entry) {
    if (!entry) return false;
    const payment = entry.payment;
    if (payment && typeof payment === "object" && payment.cc_fee_applies != null) {
      return !!payment.cc_fee_applies;
    }
    const lbl = labelFor(entry);
    return lbl === "CC" || lbl === "CC on file";
  }

  function computeCcFee(row, entry) {
    if (!ccFeeApplies(entry)) return 0;
    let subtotal = 0;
    (row.line_items || []).forEach((li) => {
      const qty = parseFloat(li.qty || 0);
      const rate = parseFloat(li.rate || 0);
      if (!isNaN(qty) && !isNaN(rate)) subtotal += qty * rate;
    });
    const shipping = parseFloat(row.customer_shipping_cost || 0) || 0;
    return Math.round((subtotal + shipping) * 0.04 * 100) / 100;
  }

  function fmtMoney(n) {
    const v = Number(n);
    if (!isFinite(v)) return "—";
    return v.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
  }

  function enhanceRow(tr) {
    if (tr.dataset.paymentEnhanced === "1") return;
    const sid = tr.getAttribute("data-sid");
    if (!sid) return;
    const registry = window.NU && window.NU.registry;
    const shipmentsApi = window.NU && window.NU.shipments;
    if (!registry || !shipmentsApi) return;
    const row = (shipmentsApi.rows || []).find((r) => r.sid === sid);
    if (!row) return;
    const raw = row._canonical || row.customer || row.customer_id || "";
    const { entry } = registry.match(raw);
    const label = labelFor(entry);
    const meta = LABEL_META[label] || LABEL_META["—"];

    // Inject badge into customer cell
    const cust = tr.querySelector(".col-customer");
    if (cust && !cust.querySelector(".payment-badge")) {
      const badge = document.createElement("span");
      badge.className = `payment-badge payment-${meta.cls}`;
      badge.textContent = label === "CC on file" ? "💳 CC on file" : label;
      badge.title = meta.tooltip;
      badge.setAttribute("aria-label", `Payment: ${label}`);
      cust.appendChild(document.createTextNode(" "));
      cust.appendChild(badge);
    }

    // Populate CC fee column
    const feeCell = tr.querySelector(".col-ccfee");
    if (feeCell) {
      feeCell.classList.remove("detail-only");
      if (ccFeeApplies(entry)) {
        const fee = computeCcFee(row, entry);
        const subtotal = (row.line_items || []).reduce((s, li) => {
          const q = parseFloat(li.qty || 0), r = parseFloat(li.rate || 0);
          return (!isNaN(q) && !isNaN(r)) ? s + q * r : s;
        }, 0);
        const shipping = parseFloat(row.customer_shipping_cost || 0) || 0;
        feeCell.innerHTML = `
          <span class="cc-fee-amount">${esc(fmtMoney(fee))}</span>
          <span class="cc-fee-info" tabindex="0" aria-label="CC fee breakdown" title="Subtotal ${fmtMoney(subtotal)} + Shipping ${fmtMoney(shipping)} = ${fmtMoney(subtotal + shipping)} × 4.0% = ${fmtMoney(fee)}">ⓘ</span>`;
      } else {
        feeCell.innerHTML = '<span class="cc-fee-dash">—</span>';
      }
    }

    tr.dataset.paymentEnhanced = "1";
  }

  function enhanceAll() {
    document.querySelectorAll("tr.ship-row").forEach(enhanceRow);
  }

  function watchForReRender() {
    const tbody = document.getElementById("shipments-tbody");
    if (!tbody) return;
    new MutationObserver(() => enhanceAll()).observe(tbody, { childList: true, subtree: true });
  }

  async function boot() {
    // Wait for registry to load (it auto-fetches on script include)
    const registry = window.NU && window.NU.registry;
    if (registry && registry.load) {
      try { await registry.load(); } catch { /* ignore */ }
    }
    enhanceAll();
    watchForReRender();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  // Expose
  window.NU = window.NU || {};
  window.NU.paymentBadge = { labelFor, ccFeeApplies, computeCcFee, enhanceAll };
})();
