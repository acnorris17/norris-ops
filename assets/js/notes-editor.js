/* ══════════════════════════════════════════════════════════════════
   NOTES EDITOR — Phase B §6
   Click a shipment row's Notes cell → textarea edit mode. Saves on:
     • Cmd+Enter / Ctrl+Enter
     • blur (clicking outside)
     • 3s idle debounce (silent auto-save)
   Esc cancels without write. 2000 char max.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const API_BASE = "http://127.0.0.1:8766";
  const MAX = 2000;
  const AUTOSAVE_MS = 3000;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }

  function truncated(txt, n) {
    if (!txt) return "";
    return txt.length > n ? txt.slice(0, n) + "…" : txt;
  }

  function readModeHtml(notesText) {
    if (!notesText) return '<span class="notes-placeholder">Click to add notes</span>';
    const short = truncated(notesText, 80);
    const more = notesText.length > 80 ? '<span class="notes-more">(click to read)</span>' : "";
    return `<span class="notes-text">${esc(short)}</span>${more}`;
  }

  async function saveNotes(sid, newNotes) {
    const resp = await fetch(`${API_BASE}/api/shipments/${encodeURIComponent(sid)}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes: newNotes, actor: "aaron", source: "aaron_click" }),
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return resp.json();
  }

  function toast(msg, cls) {
    const t = document.getElementById("nu-toast");
    if (!t) return;
    t.textContent = msg;
    t.className = `nu-toast show${cls ? " " + cls : ""}`;
    setTimeout(() => { t.className = "nu-toast"; }, 2500);
  }

  function openEditor(cell) {
    if (cell.dataset.editing === "1") return;
    const sid = cell.dataset.sid || cell.closest("[data-sid]")?.dataset.sid;
    if (!sid) return;
    const original = (cell.dataset.notes || "").toString();
    cell.dataset.editing = "1";
    cell.innerHTML = `
      <div class="notes-editor">
        <textarea maxlength="${MAX}" rows="3" aria-label="Notes for ${esc(sid)}">${esc(original)}</textarea>
        <div class="notes-editor-bar">
          <span class="notes-char-count">${original.length}/${MAX}</span>
          <div class="notes-editor-actions">
            <button type="button" class="notes-save">Save (⌘↵)</button>
            <button type="button" class="notes-cancel">Cancel (Esc)</button>
          </div>
        </div>
      </div>`;
    const textarea = cell.querySelector("textarea");
    const count = cell.querySelector(".notes-char-count");
    textarea.focus();
    textarea.setSelectionRange(original.length, original.length);

    let lastValue = original;
    let autosaveTimer = null;
    let cancelled = false;

    function updateCount() {
      count.textContent = `${textarea.value.length}/${MAX}`;
    }
    function scheduleAutosave() {
      clearTimeout(autosaveTimer);
      autosaveTimer = setTimeout(() => {
        if (textarea.value !== lastValue) {
          lastValue = textarea.value;
          saveNotes(sid, textarea.value).catch(() => { /* silent on auto */ });
        }
      }, AUTOSAVE_MS);
    }
    async function commit() {
      if (cancelled) return; // Esc path: do not persist
      clearTimeout(autosaveTimer);
      const newValue = textarea.value;
      if (newValue === original) {
        close();
        return;
      }
      try {
        await saveNotes(sid, newValue);
        cell.dataset.notes = newValue;
        toast("Notes saved");
      } catch (e) {
        toast("Save failed — retry", "error");
        return;
      }
      close(newValue);
    }
    function close(finalValue) {
      cell.dataset.editing = "";
      const val = finalValue != null ? finalValue : (cancelled ? original : textarea.value);
      cell.innerHTML = readModeHtml(val);
    }

    textarea.addEventListener("input", () => { updateCount(); scheduleAutosave(); });
    textarea.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        commit();
      } else if (e.key === "Escape") {
        e.preventDefault();
        cancelled = true;
        clearTimeout(autosaveTimer);
        close(original);
      }
    });
    textarea.addEventListener("blur", (e) => {
      if (cancelled) return; // Esc path already handled
      // If focus moved to one of our buttons, let it handle.
      const to = e.relatedTarget;
      if (to && (to.classList.contains("notes-save") || to.classList.contains("notes-cancel"))) return;
      commit();
    });
    cell.querySelector(".notes-save").addEventListener("click", () => commit());
    cell.querySelector(".notes-cancel").addEventListener("click", () => { cancelled = true; close(original); });
  }

  function onClick(e) {
    const cell = e.target.closest(".notes-cell");
    if (!cell) return;
    if (cell.dataset.editing === "1") return;
    openEditor(cell);
  }

  function onKey(e) {
    const cell = e.target.closest && e.target.closest(".notes-cell");
    if (!cell) return;
    if (cell.dataset.editing === "1") return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openEditor(cell);
    }
  }

  document.addEventListener("click", onClick);
  document.addEventListener("keydown", onKey);

  window.NU = window.NU || {};
  window.NU.notesEditor = { openEditor };
})();
