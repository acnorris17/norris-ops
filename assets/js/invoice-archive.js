/* ══════════════════════════════════════════════════════════════════
   INVOICE SENT → ARCHIVE — Phase B §6
   Tick the Invoice Sent checkbox → confetti + toast + row slide-out.
   Backend archives (status=invoiced, invoice_sent=true, audit + ledger)
   and returns mega_fired which we escalate to window.megaCelebrate.
   Un-tick requires a confirm dialog (reverse-archive).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const API_BASE = "http://127.0.0.1:8766";

  function burstConfetti(anchor) {
    // Tiny local confetti burst for subtlety (the big SVG engine only
    // fires on status pill transitions / mega).
    if (!anchor) return;
    const rect = anchor.getBoundingClientRect();
    const colors = ["#0000FF", "#06D0FF", "#10B981", "#FFFFFF"];
    for (let i = 0; i < 18; i++) {
      const dot = document.createElement("div");
      dot.className = "nu-archive-spark";
      const ang = Math.random() * Math.PI * 2;
      const dist = 30 + Math.random() * 60;
      dot.style.cssText = `
        position: fixed;
        left: ${rect.left + rect.width / 2}px;
        top:  ${rect.top  + rect.height / 2}px;
        width: 8px; height: 8px; border-radius: 50%;
        background: ${colors[i % colors.length]};
        pointer-events: none; z-index: 99999;
        transform: translate(-50%, -50%);
        transition: transform 500ms ease-out, opacity 500ms linear;
        will-change: transform, opacity;
      `;
      document.body.appendChild(dot);
      requestAnimationFrame(() => {
        dot.style.transform = `translate(calc(-50% + ${Math.cos(ang) * dist}px), calc(-50% + ${Math.sin(ang) * dist}px))`;
        dot.style.opacity = "0";
      });
      setTimeout(() => dot.remove(), 550);
    }
  }

  function toast(msg, cls) {
    const t = document.getElementById("nu-toast");
    if (!t) return;
    t.textContent = msg;
    t.className = `nu-toast show${cls ? " " + cls : ""}`;
    setTimeout(() => { t.className = "nu-toast"; }, 3000);
  }

  async function post(sid, sent) {
    const resp = await fetch(`${API_BASE}/api/shipments/${encodeURIComponent(sid)}/invoice-sent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sent, actor: "aaron", source: "aaron_click" }),
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return resp.json();
  }

  function slideOutRow(tr, done) {
    tr.style.transition = "transform 500ms ease-out, opacity 500ms linear";
    requestAnimationFrame(() => {
      tr.style.transform = "translateX(100%)";
      tr.style.opacity = "0";
    });
    setTimeout(() => {
      if (tr.parentNode) tr.parentNode.removeChild(tr);
      // Also nuke any open detail-panel-row that belongs to this sid
      const sid = tr.dataset.sid;
      document.querySelectorAll(`.detail-panel-row[data-sid="${sid}"]`).forEach((p) => p.remove());
      if (done) done();
    }, 520);
  }

  function recomputePulse() {
    // Recompute the pulse tiles based on the in-memory state (which we
    // already mutated above). Delegate to shipments-v1.js if exposed.
    if (window.NU && window.NU.shipments && window.NU.shipments.recomputePulse) {
      window.NU.shipments.recomputePulse();
      return;
    }
    // Fallback: decrement any #pulse-open counter
    const openTile = document.querySelector(".pulse-tile.pulse-open .pulse-value");
    if (openTile) {
      const n = parseInt(openTile.textContent, 10);
      if (!Number.isNaN(n)) openTile.textContent = String(Math.max(0, n - 1));
    }
  }

  async function onChange(e) {
    const box = e.target;
    if (!box.classList.contains("invoice-sent-box")) return;
    const sid = box.dataset.sid || box.closest("[data-sid]")?.dataset.sid;
    if (!sid) return;
    const tr = box.closest("tr.ship-row");

    if (box.checked) {
      burstConfetti(box);
      try {
        const data = await post(sid, true);
        toast("Invoice sent — archived", "success");
        // Fire mega if backend triggered one
        if (data && data.mega_fired && typeof window.megaCelebrate === "function") {
          window.megaCelebrate();
        }
        // Slide out and remove the row
        if (tr) {
          slideOutRow(tr, () => {
            if (window.NU && window.NU.shipments) {
              // Remove from in-memory rows so pulse/filter recomputes are accurate
              const rows = window.NU.shipments.rows;
              const idx = rows.findIndex((r) => r.sid === sid);
              if (idx >= 0) {
                rows[idx].invoice_sent = true;
                rows[idx].status = "INVOICED";
              }
            }
            recomputePulse();
          });
        }
      } catch (err) {
        box.checked = false;
        toast("Archive failed — retry", "error");
        console.error("[invoice-archive]", err);
      }
    } else {
      // Un-tick: confirm
      const ok = window.confirm(
        "Un-archive this shipment? Status will revert and an audit entry is written."
      );
      if (!ok) { box.checked = true; return; }
      try {
        await post(sid, false);
        toast("Un-archived", "neutral");
        // No celebration. Just re-render — which requires full refetch; for V1
        // we just flag the in-memory row state so filters pick it up.
        if (window.NU && window.NU.shipments) {
          const rows = window.NU.shipments.rows;
          const idx = rows.findIndex((r) => r.sid === sid);
          if (idx >= 0) {
            rows[idx].invoice_sent = false;
          }
        }
      } catch (err) {
        box.checked = true;
        toast("Unarchive failed — retry", "error");
      }
    }
  }

  // Remove the disabled attribute on Invoice Sent checkboxes so Phase B
  // users can actually click them.
  function enableCheckboxes() {
    document.querySelectorAll(".invoice-sent-box[disabled]").forEach((b) => {
      b.disabled = false;
      b.removeAttribute("title");
    });
  }

  function boot() {
    document.addEventListener("change", onChange);
    enableCheckboxes();
    const obs = new MutationObserver(() => enableCheckboxes());
    const target = document.getElementById("shipments-tbody") || document.body;
    obs.observe(target, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.NU = window.NU || {};
  window.NU.invoiceArchive = { onChange };
})();
