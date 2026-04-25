/* ══════════════════════════════════════════════════════════════════
   COPY BUTTONS — Section 4 (Phase A) + V2 UI §D.3 rewire to 16 static.
   16 QB-field-matched buttons per row, plus one dynamic `<PN> Rate` per
   line item. DATA ONLY in clipboard — no QB template labels ("Bill to:",
   "Ship to:", etc.). Toast + ✓ on success. CC Fee button hidden when
   cc_fee_applies=false (still counts toward the 16 for spec purposes).
   ══════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  const TERMS_MAP = {
    Net30: "Net 30",
    CC: "Due on receipt",
    CC_on_file: "Due on receipt",
    ACH: "Due on receipt",
    OnReceipt: "Due on receipt",
  };

  function registry() {
    return (window.NU && window.NU.registry) || null;
  }

  function shipmentsStore() {
    return (window.NU && window.NU.shipments) || null;
  }

  function catalog() {
    const s = shipmentsStore();
    return s ? s.catalog : {};
  }

  function fmtMoney2(n) {
    const num = Number(n || 0);
    return num.toFixed(2);
  }

  function fmtShipDate(raw) {
    if (!raw) return "";
    const d = new Date(raw);
    if (isNaN(d.getTime())) return "";
    return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}/${d.getFullYear()}`;
  }

  function shipToBlock(raw) {
    if (!raw) return "";
    return String(raw).split(" | ").map((s) => s.trim()).filter(Boolean).join("\n");
  }

  function billToBlock(r) {
    const reg = registry();
    if (r._registry_id && reg) {
      const bt = reg.billTo(r._registry_id);
      if (bt) {
        const lines = [bt.company].filter(Boolean);
        if (bt.canonical_name && bt.canonical_name !== bt.company) {
          // canonical_name includes the orderer; keep just the company on the
          // bill line. No extras in Phase A (registry schema doesn't carry
          // full billing addresses yet — Phase B extends).
        }
        return lines.join("\n");
      }
    }
    return r.customer || "";
  }

  function carrier(r) {
    return r.carrier || "UPS Ground";
  }

  function trackingBlock(trackings) {
    if (!trackings || !trackings.length) return "";
    return trackings.join("\n");
  }

  function terms(r) {
    const reg = registry();
    if (r._registry_id && reg) {
      const entry = reg.byId(r._registry_id);
      const method = entry && entry.payment && entry.payment.method;
      if (method && method in TERMS_MAP) return TERMS_MAP[method];
    }
    return "Due on receipt";
  }

  function tierForRow(r) {
    if (r.billing_tier === "dealer") return "dealer_price";
    return "direct_price";
  }

  function rateFor(pn, tier) {
    const products = catalog() || {};
    const p = products[pn];
    if (!p) return null;
    return p[tier];
  }

  function subtotal(r) {
    const tier = tierForRow(r);
    let total = 0;
    for (const li of r.line_items || []) {
      const rate = rateFor(li.pn, tier);
      if (rate != null) total += rate * (li.qty || 0);
    }
    return total;
  }

  function ccFeeApplies(r) {
    const reg = registry();
    if (r._registry_id && reg) {
      const entry = reg.byId(r._registry_id);
      if (entry && entry.payment && entry.payment.cc_fee_applies) return true;
    }
    return !!r.cc_surcharge_applies;
  }

  function ccFeeAmount(r) {
    const base = subtotal(r) + (r.customer_shipping_cost || 0);
    return Math.round(base * 0.04 * 100) / 100;
  }

  function orderedBy(r) {
    const reg = registry();
    if (r._registry_id && reg) {
      const entry = reg.byId(r._registry_id);
      if (entry && entry.poc && entry.poc.name) return entry.poc.name;
    }
    return r.poc || "";
  }

  function customerEmail(r) {
    const reg = registry();
    if (r._registry_id && reg) {
      const entry = reg.byId(r._registry_id);
      if (entry && entry.poc && entry.poc.email) return entry.poc.email;
    }
    return "";
  }

  function canonicalName(r) {
    return r._canonical || r.customer || "";
  }

  // ── Toast ────────────────────────────────────────────────────────

  let toastT = null;
  function toast(msg) {
    const el = document.getElementById("nu-toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => el.classList.remove("show"), 2000);
  }

  async function copy(value, label, btn) {
    try {
      await navigator.clipboard.writeText(value);
      toast("Copied " + label);
      if (btn) {
        const prev = btn.textContent;
        btn.dataset.prev = prev;
        btn.textContent = "✓";
        setTimeout(() => {
          btn.textContent = btn.dataset.prev || prev;
        }, 900);
      }
    } catch (e) {
      console.warn("[copy] clipboard write failed:", e);
      toast("Copy failed — " + label);
    }
  }

  // ── Button definitions ───────────────────────────────────────────

  // §D.3 — 16 static QB-field buttons (plus dynamic `<PN> Rate` per line item).
  // Static labels (fixed order):
  //   Top (9):     Customer Name (canonical), Customer Name (raw),
  //                Customer Email, Bill-To Address, Ship-To Address, Carrier,
  //                Ship Date, Tracking #, Terms
  //   Bottom (7):  PO #, Ordered By, Shipping $, Subtotal, Grand Total,
  //                CC Fee Rate, QB Memo
  // Per §C.4 / G.4: "Canonical Name" is not a user-facing UI label; use
  // "Customer Name (canonical)" for the registry-matched value instead.
  function buttonsFor(r) {
    const defs = [];

    // TOP
    defs.push({ group: "top", label: "Customer Name (canonical)",
      value: canonicalName(r),
      disabledHint: !canonicalName(r) ? "No canonical name" : null });
    defs.push({ group: "top", label: "Customer Name (raw)",
      value: r.customer || "",
      disabledHint: !r.customer ? "No customer on SD" : null });
    defs.push({ group: "top", label: "Customer Email",
      value: customerEmail(r),
      disabledHint: !customerEmail(r) ? "No email on registry entry" : null });
    defs.push({ group: "top", label: "Bill-To Address",
      value: billToBlock(r),
      disabledHint: !billToBlock(r) ? "No bill-to on file" : null });
    defs.push({ group: "top", label: "Ship-To Address",
      value: shipToBlock(r.ship_to_address),
      disabledHint: !r.ship_to_address ? "No ship-to on SD" : null });
    defs.push({ group: "top", label: "Carrier", value: carrier(r) });
    defs.push({ group: "top", label: "Ship Date",
      value: fmtShipDate(r.order_date),
      disabledHint: !r.order_date ? "No order date" : null });
    defs.push({ group: "top", label: "Tracking #",
      value: trackingBlock(r.tracking_numbers),
      disabledHint: !(r.tracking_numbers || []).length ? "No tracking captured" : null });
    defs.push({ group: "top", label: "Terms", value: terms(r) });

    // LINE ITEMS (dynamic; outside the 16-static count)
    const tier = tierForRow(r);
    for (const li of r.line_items || []) {
      const rate = rateFor(li.pn, tier);
      defs.push({ group: "lines", label: `${li.pn} Rate`,
        value: rate != null ? fmtMoney2(rate) : "",
        disabledHint: rate == null ? `No ${tier.replace("_", " ")} in catalog` : null });
    }

    // BOTTOM
    const sub = subtotal(r);
    const ship = Number(r.customer_shipping_cost || 0);
    const fee = ccFeeApplies(r) ? ccFeeAmount(r) : 0;
    const grand = sub + ship + fee;

    defs.push({ group: "bottom", label: "PO #",
      value: r.po_number || "",
      disabledHint: !r.po_number ? "No PO on this order" : null });
    defs.push({ group: "bottom", label: "Ordered By",
      value: orderedBy(r),
      disabledHint: !orderedBy(r) ? "No orderer name" : null });
    defs.push({ group: "bottom", label: "Shipping $",
      value: r.customer_shipping_cost != null ? fmtMoney2(r.customer_shipping_cost) : "",
      disabledHint: r.customer_shipping_cost == null ? "No customer shipping captured" : null });
    defs.push({ group: "bottom", label: "Subtotal",
      value: sub > 0 ? fmtMoney2(sub) : "",
      disabledHint: sub <= 0 ? "No priced line items" : null });
    defs.push({ group: "bottom", label: "Grand Total",
      value: grand > 0 ? fmtMoney2(grand) : "",
      disabledHint: grand <= 0 ? "Need priced line items + shipping" : null });
    defs.push({ group: "bottom", label: "CC Fee Rate",
      value: fee > 0 ? fmtMoney2(fee) : "",
      disabledHint: !ccFeeApplies(r) ? "CC fee does not apply" : null });
    defs.push({ group: "bottom", label: "QB Memo",
      value: qbMemo(r),
      disabledHint: !qbMemo(r) ? "Memo will generate at invoice time" : null });

    // V2.3 §F.2 — 17th button: Copy ALL as TSV (whole row tab-separated
    // for QB bulk-paste). Goes in its own "all" group below the bottom
    // section so detail-panel.js can render it visually distinct.
    defs.push({ group: "all", label: "Copy ALL (TSV)",
      value: rowAsTsv(r, defs),
      disabledHint: null });

    return defs;
  }

  // V2.3 §F.2 — assemble a tab-separated dump of every column value on
  // the row, including a header row so QB paste-into-grid stays aligned.
  function rowAsTsv(r, defs) {
    const fields = (defs || []).filter((d) => d.group !== "all" && d.group !== "lines");
    const headers = fields.map((d) => d.label);
    const values  = fields.map((d) => (d.value == null ? "" : String(d.value).replace(/\t/g, " ").replace(/\n/g, " ")));
    // Plus per-line-item rows
    const tier = tierForRow(r);
    const lineRows = (r.line_items || []).map((li) => {
      const rate = rateFor(li.pn, tier);
      return [
        "LINE",
        li.pn || "",
        String(li.qty || 0),
        rate != null ? fmtMoney2(rate) : "",
        rate != null ? fmtMoney2(rate * (li.qty || 0)) : "",
      ].join("\t");
    });
    let out = headers.join("\t") + "\n" + values.join("\t");
    if (lineRows.length) {
      out += "\n\n" + ["TYPE","P/N","QTY","RATE","SUBTOTAL"].join("\t");
      out += "\n" + lineRows.join("\n");
    }
    return out;
  }

  // QB memo — mirrors the detail-panel rendering
  function qbMemo(r) {
    const parts = [];
    if (r.po_number) parts.push(`PO# ${r.po_number}`);
    const lines = (r.line_items || []).map((li) => `${li.qty}× ${li.pn}`).filter(Boolean);
    if (lines.length) parts.push(lines.join(" + "));
    if (r.tracking_numbers && r.tracking_numbers.length) {
      parts.push(`UPS ${r.tracking_numbers.join(", ")}`);
    }
    return parts.join("\n");
  }

  // ── Rendering ────────────────────────────────────────────────────

  function findRow(sid) {
    const store = shipmentsStore();
    if (!store) return null;
    return store.rows.find((r) => r.sid === sid) || null;
  }

  function renderPanel(row) {
    const defs = buttonsFor(row);
    const byGroup = { top: [], lines: [], bottom: [], all: [] };
    for (const d of defs) (byGroup[d.group] || byGroup.bottom).push(d);

    function section(title, items, extraClass) {
      if (!items.length) return "";
      const btns = items.map((d, i) => {
        const disabled = d.disabledHint ? " disabled" : "";
        const title = d.disabledHint ? ` title="${escAttr(d.disabledHint)}"` : "";
        return `<button type="button" class="copy-field-btn${extraClass ? ' ' + extraClass : ''}"${disabled} data-label="${escAttr(d.label)}" data-idx="${i}"${title}>&#128203; ${esc(d.label)}</button>`;
      }).join("");
      return `<div class="copy-group"><div class="copy-group-label">${esc(title)}</div><div class="copy-group-btns">${btns}</div></div>`;
    }

    return `
<div class="copy-panel" role="group" aria-label="Copy for QuickBooks">
  ${section("Top", byGroup.top)}
  ${section("Line Items", byGroup.lines)}
  ${section("Bottom", byGroup.bottom)}
  ${section("Whole Row", byGroup.all, "copy-all-tsv")}
</div>`;
  }

  function escAttr(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }
  function esc(s) { return escAttr(s); }

  function toggle(trigger) {
    const sid = trigger.dataset.sid;
    const tr = trigger.closest("tr");
    if (!tr) return;
    const next = tr.nextElementSibling;
    if (next && next.classList.contains("copy-panel-row") && next.dataset.sid === sid) {
      next.remove();
      trigger.classList.remove("open");
      return;
    }
    closeAllPanels();
    const row = findRow(sid);
    if (!row) return;
    const colspan = tr.querySelectorAll("td").length;
    const panelRow = document.createElement("tr");
    panelRow.className = "copy-panel-row";
    panelRow.dataset.sid = sid;
    panelRow.innerHTML = `<td colspan="${colspan}">${renderPanel(row)}</td>`;
    tr.after(panelRow);
    trigger.classList.add("open");
    // Bind click on each field button
    panelRow.querySelectorAll(".copy-field-btn").forEach((btn) => {
      if (btn.disabled) return;
      btn.addEventListener("click", () => {
        const defs = buttonsFor(row);
        const label = btn.dataset.label;
        const def = defs.find((d) => d.label === label);
        if (!def) return;
        copy(def.value, label, btn);
      });
    });
  }

  function closeAllPanels() {
    document.querySelectorAll(".copy-panel-row").forEach((r) => r.remove());
    document.querySelectorAll(".copy-trigger.open").forEach((t) => t.classList.remove("open"));
  }

  function bindDelegated() {
    document.addEventListener("click", (e) => {
      const t = e.target && e.target.closest && e.target.closest(".copy-trigger");
      if (t) {
        e.preventDefault();
        toggle(t);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindDelegated);
  } else {
    bindDelegated();
  }

  // Phase B §5 — expose for detail-panel.js to mirror the 13 buttons.
  window.NU = window.NU || {};
  window.NU.copyButtons = {
    buttonsFor,
    renderPanel,
    findRow,
    copy,
  };
})();
