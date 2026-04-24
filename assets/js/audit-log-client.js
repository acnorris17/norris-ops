/* ══════════════════════════════════════════════════════════════════
   AUDIT LOG CLIENT — Phase B §3.9 + §4.6
   Fetches audit entries from sa-v1-writer, builds hover tooltip for
   status pill (shows last entry) + full history modal.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const API_BASE = "http://127.0.0.1:8766";
  const cache = new Map();

  async function fetchAudit(sid, force) {
    if (!force && cache.has(sid)) return cache.get(sid);
    try {
      const resp = await fetch(`${API_BASE}/api/shipments/${encodeURIComponent(sid)}/audit`);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      cache.set(sid, data.entries || []);
      return data.entries || [];
    } catch (e) {
      console.warn("[audit-client] fetch failed", e);
      return [];
    }
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function formatTooltip(entries, sid) {
    if (!entries || !entries.length) {
      return '<div class="status-tooltip"><em>No status history</em></div>';
    }
    const last = entries[entries.length - 1];
    const dir = last.event === "status_change"
      ? `${esc(last.from)} → ${esc(last.to)}`
      : `${esc(last.event)}`;
    return `
      <div class="status-tooltip" role="tooltip">
        <div class="tt-line">Changed <strong>${dir}</strong></div>
        <div class="tt-line">by ${esc(last.actor)} on ${esc(last.display_ts)}</div>
        <a href="#" class="view-full-history" data-shipment-id="${esc(sid)}">View Full History &rarr;</a>
      </div>`;
  }

  function showTooltip(anchor, html) {
    hideTooltip();
    const wrap = document.createElement("div");
    wrap.className = "status-tooltip-wrap";
    wrap.innerHTML = html;
    document.body.appendChild(wrap);
    const rect = anchor.getBoundingClientRect();
    wrap.style.position = "absolute";
    wrap.style.top = `${window.scrollY + rect.bottom + 6}px`;
    wrap.style.left = `${window.scrollX + rect.left}px`;
    wrap.style.zIndex = "1000";
    requestAnimationFrame(() => wrap.classList.add("tooltip-visible"));
    window._activeTooltip = wrap;
  }

  function hideTooltip() {
    if (window._activeTooltip && window._activeTooltip.parentNode) {
      window._activeTooltip.remove();
    }
    window._activeTooltip = null;
  }

  let hoverTimer = null;

  function onHover(e) {
    const pill = e.target.closest(".status-pill");
    if (!pill) return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(async () => {
      const sid = pill.getAttribute("data-shipment-id")
        || pill.closest("[data-sid]")?.getAttribute("data-sid");
      if (!sid) return;
      const entries = await fetchAudit(sid);
      showTooltip(pill, formatTooltip(entries, sid));
    }, 500);
  }

  function onLeave(e) {
    const pill = e.target.closest(".status-pill");
    if (!pill) return;
    clearTimeout(hoverTimer);
    setTimeout(() => {
      // Keep tooltip if mouse is now over it
      const tt = window._activeTooltip;
      if (tt && tt.matches(":hover")) return;
      hideTooltip();
    }, 200);
  }

  // Modal
  function openHistoryModal(sid) {
    fetchAudit(sid, true).then((entries) => {
      const rows = entries.map((e) => `
        <tr>
          <td>${esc(e.display_ts)}</td>
          <td>${esc(e.actor)}</td>
          <td>${esc(e.event)}</td>
          <td>${esc(e.from || "—")} → ${esc(e.to || "—")}</td>
          <td>${esc(e.source || "")}</td>
        </tr>`).join("");
      const modal = document.createElement("div");
      modal.className = "audit-modal-overlay";
      modal.innerHTML = `
        <div class="audit-modal" role="dialog" aria-label="Audit history for ${esc(sid)}">
          <header>
            <h3>Audit History — ${esc(sid)}</h3>
            <button type="button" class="audit-modal-close" aria-label="Close">&times;</button>
          </header>
          <div class="audit-modal-body">
            ${entries.length
              ? `<table class="audit-table"><thead><tr><th>Time</th><th>Actor</th><th>Event</th><th>Change</th><th>Source</th></tr></thead><tbody>${rows}</tbody></table>`
              : "<p><em>No audit entries recorded for this shipment.</em></p>"}
          </div>
        </div>`;
      document.body.appendChild(modal);
      function close() { if (modal.parentNode) modal.remove(); document.removeEventListener("keydown", onEsc); }
      function onEsc(ev) { if (ev.key === "Escape") close(); }
      modal.querySelector(".audit-modal-close").addEventListener("click", close);
      modal.addEventListener("click", (ev) => { if (ev.target === modal) close(); });
      document.addEventListener("keydown", onEsc);
    });
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest(".view-full-history");
    if (link) {
      e.preventDefault();
      const sid = link.getAttribute("data-shipment-id");
      if (sid) openHistoryModal(sid);
    }
  });

  document.addEventListener("mouseenter", onHover, true);
  document.addEventListener("mouseleave", onLeave, true);

  window.NU = window.NU || {};
  window.NU.auditClient = { fetchAudit, openHistoryModal, invalidate: (sid) => cache.delete(sid) };
})();
