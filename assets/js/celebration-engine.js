/* ══════════════════════════════════════════════════════════════════
   CELEBRATION ENGINE — Phase B §3.7
   Thin wrapper over the existing /celebrations.js (window.celebrate /
   window.megaCelebrate). Maps spec transition IDs → visible effect.

     pending    → processing = "sparkle"         (window.celebrate)
     processing → shipped    = "confetti-burst"  (window.celebrate)
     shipped    → invoiced   = "phoenix-rise"    (window.celebrate + mini)
     invoiced   → cc         = "ka-ching"        (window.celebrate)
     any        → blocked    = "red-flash"       (inline CSS flash)
     any        → REVIEW     = "amber-pulse"     (inline CSS pulse)

   Reverse transitions: no celebration (status-engine enforces the
   no-celebrate-on-downgrade rule).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const ORDER = ["pending", "processing", "shipped", "invoiced", "cc"];

  function ordinal(x) {
    return ORDER.indexOf(x);
  }

  function isForwardStandard(from, to) {
    // Forward = higher stage in ORDER. Blocked/REVIEW are NOT forward.
    const f = ordinal(from);
    const t = ordinal(to);
    if (t < 0 || f < 0) return false;
    return t > f;
  }

  function flash(anchor, cls, durationMs) {
    if (!anchor) return;
    anchor.classList.add(cls);
    setTimeout(() => anchor.classList.remove(cls), durationMs || 500);
  }

  function idForTransition(from, to) {
    if (to === "blocked") return "red-flash";
    if (to === "REVIEW" || to === "review") return "amber-pulse";
    if (from === "pending"    && to === "processing") return "sparkle";
    if (from === "processing" && to === "shipped")    return "confetti-burst";
    if (from === "shipped"    && to === "invoiced")   return "phoenix-rise";
    if (from === "invoiced"   && to === "cc")         return "ka-ching";
    return isForwardStandard(from, to) ? "sparkle" : null;
  }

  function fire(id, anchorEl) {
    if (!id) return;
    if (id === "red-flash") {
      flash(anchorEl, "status-flash-red", 500);
      return;
    }
    if (id === "amber-pulse") {
      flash(anchorEl, "status-pulse-amber", 1000);
      return;
    }
    // Standard celebrations all delegate to the existing SVG engine.
    // That engine picks a random animation from its 20-strong pool.
    if (typeof window.celebrate === "function") {
      window.celebrate();
    }
    // §M.7 sound wiring — silent no-op if SoundEngine isn't loaded
    // or if the user hasn't interacted with the page yet.
    if (window.SoundEngine && typeof window.SoundEngine.play === "function") {
      var sound = (
        id === "phoenix-rise"    ? "chime"         : // shipped → invoiced
        id === "ka-ching"        ? "cha-ching"     : // invoiced → cc
        id === "confetti-burst"  ? "mark-shipped"  : // processing → shipped
        id === "sparkle"         ? "mark-shipped"  :
        null);
      if (sound) window.SoundEngine.play(sound);
    }
  }

  function fireForTransition(from, to, anchorEl) {
    const id = idForTransition(from, to);
    if (id) fire(id, anchorEl);
    return id;
  }

  window.CelebrationEngine = {
    fire,
    fireForTransition,
    idForTransition,
    isForwardStandard,
  };
})();
