/* ══════════════════════════════════════════════════════════════════
   STATUS PILL — Phase B §3
   Clickable pill → dropdown listbox → select status → POST update.
   Wires standard celebration via CelebrationEngine, fires mega via
   window.megaCelebrate() when backend reports mega_fired.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const API_BASE = "http://127.0.0.1:8766";

  // §S.3 — Phase B V2 UI canonical 7-state enum.
  // Order is the dropdown order (operational lifecycle), NOT alphabetical.
  const STATUSES = [
    { value: "pending",    label: "PENDING",    cls: "pending" },
    { value: "processing", label: "PROCESSING", cls: "processing" },
    { value: "shipped",    label: "SHIPPED",    cls: "shipped" },
    { value: "delivered",  label: "DELIVERED",  cls: "delivered" },
    { value: "invoiced",   label: "INVOICED",   cls: "invoiced" },
    { value: "review",     label: "REVIEW",     cls: "review" },
    { value: "blocked",    label: "BLOCKED",    cls: "blocked" },
  ];

  let openDropdown = null;

  function closeOpen() {
    if (openDropdown) {
      if (openDropdown.anchor) openDropdown.anchor.setAttribute("aria-expanded", "false");
      if (openDropdown.el && openDropdown.el.parentNode) openDropdown.el.remove();
      openDropdown = null;
    }
  }

  function buildDropdown(anchor, onSelect) {
    const current = anchor.getAttribute("data-status") || "";
    const list = document.createElement("ul");
    list.className = "status-dropdown";
    list.setAttribute("role", "listbox");
    list.setAttribute("aria-label", "Choose new status");
    STATUSES.forEach((s, i) => {
      const li = document.createElement("li");
      li.className = `status-option status-${s.cls}`;
      li.setAttribute("role", "option");
      li.setAttribute("tabindex", "-1");
      li.dataset.value = s.value;
      li.dataset.cls = s.cls;
      if (s.value === current) li.setAttribute("aria-selected", "true");
      li.innerHTML = `<span class="status-dot"></span><span class="status-option-label">${s.label}</span>`;
      li.addEventListener("click", () => onSelect(s));
      li.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); onSelect(s); }
        if (ev.key === "ArrowDown") { ev.preventDefault(); (li.nextElementSibling || list.firstElementChild).focus(); }
        if (ev.key === "ArrowUp")   { ev.preventDefault(); (li.previousElementSibling || list.lastElementChild).focus(); }
        if (ev.key === "Escape")    { ev.preventDefault(); closeOpen(); anchor.focus(); }
      });
      list.appendChild(li);
    });
    return list;
  }

  function positionDropdown(el, anchor) {
    const rect = anchor.getBoundingClientRect();
    el.style.position = "absolute";
    el.style.top = `${window.scrollY + rect.bottom + 4}px`;
    el.style.left = `${window.scrollX + rect.left}px`;
  }

  async function postStatus(sid, value) {
    const url = `${API_BASE}/api/shipments/${encodeURIComponent(sid)}/status`;
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: value, actor: "aaron", source: "aaron_click" }),
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return resp.json();
  }

  function applyNewStatus(anchor, option) {
    const oldLabel = anchor.querySelector(".status-label")?.textContent || "";
    const oldCls = anchor.getAttribute("data-status");
    anchor.classList.remove(`status-${oldCls}`);
    anchor.classList.add(`status-${option.cls}`);
    anchor.setAttribute("data-status", option.cls);
    const lbl = anchor.querySelector(".status-label");
    if (lbl) lbl.textContent = option.label;
    return { oldLabel, oldCls };
  }

  function revert(anchor, snapshot) {
    const cur = anchor.getAttribute("data-status");
    anchor.classList.remove(`status-${cur}`);
    anchor.classList.add(`status-${snapshot.oldCls}`);
    anchor.setAttribute("data-status", snapshot.oldCls);
    const lbl = anchor.querySelector(".status-label");
    if (lbl) lbl.textContent = snapshot.oldLabel;
  }

  function toast(msg, cls) {
    const t = document.getElementById("nu-toast");
    if (!t) return;
    t.textContent = msg;
    t.className = `nu-toast show${cls ? " " + cls : ""}`;
    setTimeout(() => { t.className = "nu-toast"; }, 2500);
  }

  async function selectStatus(anchor, option) {
    const sid = anchor.getAttribute("data-shipment-id")
      || anchor.closest("[data-sid]")?.getAttribute("data-sid");
    if (!sid) return;
    closeOpen();
    const before = applyNewStatus(anchor, option);
    try {
      const data = await postStatus(sid, option.value);
      // Fire standard celebration
      const ce = window.CelebrationEngine;
      if (ce && ce.fireForTransition) {
        ce.fireForTransition(before.oldCls, option.cls, anchor);
      }
      // Mega?
      if (data && data.mega_fired && typeof window.megaCelebrate === "function") {
        window.megaCelebrate();
      }
      toast(`Status → ${option.label}`);
    } catch (err) {
      revert(anchor, before);
      toast("Status update failed", "error");
      console.error("[status-pill]", err);
    }
  }

  function openDropdownFor(anchor) {
    closeOpen();
    const list = buildDropdown(anchor, (opt) => selectStatus(anchor, opt));
    document.body.appendChild(list);
    positionDropdown(list, anchor);
    anchor.setAttribute("aria-expanded", "true");
    openDropdown = { el: list, anchor };
    const first = list.querySelector('[aria-selected="true"]') || list.firstElementChild;
    if (first) first.focus();
  }

  function onClick(e) {
    const pill = e.target.closest(".status-pill");
    if (!pill) {
      // click outside
      if (openDropdown && !e.target.closest(".status-dropdown")) closeOpen();
      return;
    }
    if (pill.disabled) return;
    e.preventDefault();
    if (openDropdown && openDropdown.anchor === pill) {
      closeOpen();
    } else {
      openDropdownFor(pill);
    }
  }

  function onKeydown(e) {
    if (e.key !== "Escape") return;
    if (!openDropdown) return;
    closeOpen();
    if (e.target && e.target.focus) e.target.focus();
  }

  function onPillKey(e) {
    const pill = e.target.closest(".status-pill");
    if (!pill) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openDropdownFor(pill);
    }
  }

  document.addEventListener("click", onClick);
  document.addEventListener("keydown", onKeydown);
  document.addEventListener("keydown", onPillKey);
  // On scroll or resize, close dropdown to avoid detaching
  window.addEventListener("scroll", closeOpen, { passive: true });
  window.addEventListener("resize", closeOpen);

  // Expose for tests
  window.NU = window.NU || {};
  window.NU.statusPill = { closeOpen, openDropdownFor, STATUSES };
})();
