/* ══════════════════════════════════════════════════════════════════
   WARN TOOLTIP — Phase B §7-full
   Hover over a .customer-warn ⚠ in a shipment row → fetch /api/match
   and show the top 3 candidate matches with scores.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const API_BASE = "http://127.0.0.1:8766";
  const HOVER_DELAY_MS = 500;
  const cache = new Map(); // raw → match result

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }

  async function fetchMatch(raw) {
    if (cache.has(raw)) return cache.get(raw);
    try {
      const resp = await fetch(`${API_BASE}/api/match`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ raw }),
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      cache.set(raw, data.result || null);
      return data.result || null;
    } catch (e) {
      console.warn("[warn-tooltip] fetch failed:", e);
      return null;
    }
  }

  function rawOfCell(cell) {
    // The raw customer string is the sibling text of the ⚠ in the cell
    const td = cell.closest(".col-customer, td");
    if (!td) return "";
    // Text content excluding the warn span:
    const clone = td.cloneNode(true);
    clone.querySelectorAll(".customer-warn").forEach((el) => el.remove());
    return clone.textContent.trim();
  }

  function buildTooltip(raw, result) {
    if (!result) {
      return `
        <div class="warn-tooltip">
          <h5>⚠ No fuzzy match</h5>
          <div class="warn-raw">Raw: ${esc(raw)}</div>
          <p class="warn-footnote">Registry lookup failed or no candidates above threshold.</p>
        </div>`;
    }
    const { tier, best_score, candidates } = result;
    const thresholdNote = tier === "review"
      ? "Below auto-apply threshold (95%)."
      : (tier === "flag" ? "Applied with flag (80–94% confidence)." : "Auto-applied.");
    const items = (candidates || []).map((c) => `
      <li>${esc(c.canonical_name || c.company_root || c.entry_id)}<span class="score">${c.score}%</span></li>
    `).join("") || '<li><em>No candidates above threshold</em></li>';
    return `
      <div class="warn-tooltip">
        <h5>⚠ ${esc(thresholdNote)}</h5>
        <div class="warn-raw">Raw: ${esc(raw)}</div>
        <ol>${items}</ol>
        <div class="warn-actions">
          <button type="button" class="warn-mark-review">Mark as REVIEW</button>
          <button type="button" class="warn-copy-raw">Copy raw text</button>
        </div>
        <p class="warn-footnote">Will resolve when an alias is added to registry or Aaron marks as REVIEW.</p>
      </div>`;
  }

  function show(anchor, html) {
    hide();
    const wrap = document.createElement("div");
    wrap.className = "warn-tooltip-wrap";
    wrap.innerHTML = html;
    document.body.appendChild(wrap);
    const rect = anchor.getBoundingClientRect();
    wrap.style.top = `${window.scrollY + rect.bottom + 6}px`;
    wrap.style.left = `${window.scrollX + rect.left}px`;
    requestAnimationFrame(() => wrap.classList.add("tooltip-visible"));
    window._activeWarnTooltip = wrap;

    // Wire action buttons
    const rawBtn = wrap.querySelector(".warn-copy-raw");
    if (rawBtn) {
      rawBtn.addEventListener("click", () => {
        const raw = anchor.getAttribute("data-raw") || rawOfCell(anchor);
        navigator.clipboard && navigator.clipboard.writeText(raw);
        const t = document.getElementById("nu-toast");
        if (t) { t.textContent = "Raw copied"; t.className = "nu-toast show"; setTimeout(() => { t.className = "nu-toast"; }, 1500); }
      });
    }
    const reviewBtn = wrap.querySelector(".warn-mark-review");
    if (reviewBtn) {
      reviewBtn.addEventListener("click", async () => {
        const tr = anchor.closest("tr[data-sid]");
        const sid = tr && tr.getAttribute("data-sid");
        if (!sid) return;
        try {
          await fetch(`${API_BASE}/api/shipments/${encodeURIComponent(sid)}/status`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "REVIEW", actor: "aaron", source: "warn_tooltip" }),
          });
          hide();
          // Refresh pill
          const pill = tr.querySelector(".status-pill");
          if (pill) {
            const oldCls = pill.getAttribute("data-status");
            pill.classList.remove("status-" + oldCls);
            pill.classList.add("status-review");
            pill.setAttribute("data-status", "review");
            const lbl = pill.querySelector(".status-label");
            if (lbl) lbl.textContent = "REVIEW";
          }
        } catch (e) {
          console.warn("[warn-tooltip] mark-review failed", e);
        }
      });
    }
  }

  function hide() {
    if (window._activeWarnTooltip && window._activeWarnTooltip.parentNode) {
      window._activeWarnTooltip.remove();
    }
    window._activeWarnTooltip = null;
  }

  let hoverTimer = null;
  function onEnter(e) {
    const warn = e.target.closest(".customer-warn");
    if (!warn) return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(async () => {
      const raw = warn.getAttribute("data-raw") || rawOfCell(warn);
      if (!raw) return;
      const result = await fetchMatch(raw);
      show(warn, buildTooltip(raw, result));
    }, HOVER_DELAY_MS);
  }

  function onLeave(e) {
    const warn = e.target.closest(".customer-warn");
    if (!warn) return;
    clearTimeout(hoverTimer);
    setTimeout(() => {
      const tt = window._activeWarnTooltip;
      if (tt && tt.matches(":hover")) return;
      hide();
    }, 200);
  }

  document.addEventListener("mouseenter", onEnter, true);
  document.addEventListener("mouseleave", onLeave, true);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hide();
  });

  window.NU = window.NU || {};
  window.NU.warnTooltip = { show, hide, buildTooltip, fetchMatch, rawOfCell };
})();
