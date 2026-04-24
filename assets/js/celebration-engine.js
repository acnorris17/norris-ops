/* ══════════════════════════════════════════════════════════════════
   CELEBRATION ENGINE — Phase B §3.7, V2 UI §D.2 rewire
   Thin wrapper over the existing /celebrations.js (window.celebrate /
   window.megaCelebrate). Maps the 6 spec transition IDs → visible effect.

     pending    → processing             = "sparkle"         (std)
     processing → shipped                = "confetti-burst"  (std)
     shipped    → delivered              = "package-land"    (std, NEW §S.3)
     shipped    → invoiced               = "phoenix-rise"    (std)
     delivered  → invoiced               = "phoenix-rise"    (std)
     any        → blocked                = "red-flash"       (alert)
     any        → review                 = "amber-pulse"     (alert)

   (Legacy "invoiced → cc" retained in isForwardStandard for back-compat
   with existing celebration tests; CC dropped from V2 UI enum §S.3.)

   Reverse transitions: no celebration (status-engine enforces the
   no-celebrate-on-downgrade rule).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  // §S.3 new forward order — delivered slotted between shipped and invoiced.
  // "cc" kept at the tail for back-compat with test_celebrations_standard.py
  // until those tests are rewritten.
  const ORDER = ["pending", "processing", "shipped", "delivered", "invoiced", "cc"];

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
    if (from === "shipped"    && to === "delivered")  return "package-land";
    if (from === "shipped"    && to === "invoiced")   return "phoenix-rise";
    if (from === "delivered"  && to === "invoiced")   return "phoenix-rise";
    if (from === "invoiced"   && to === "cc")         return "ka-ching"; // legacy
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
        id === "phoenix-rise"    ? "chime"         : // → invoiced
        id === "package-land"    ? "delivered"     : // shipped → delivered
        id === "ka-ching"        ? "cha-ching"     : // legacy invoiced → cc
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
