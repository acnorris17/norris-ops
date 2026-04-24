/**
 * §S Sound engine — Web Audio synthesis with graceful degradation.
 *
 * Primary path: oscillator + envelope generates short celebration tones.
 * No network requests. No external WAV files. No autoplay policy
 * violations (unlocks on first user gesture per Chrome policy).
 *
 * Public API:
 *   window.SoundEngine.play(name, options)
 *     name: 'chime' | 'cha-ching' | 'delivered' | 'mark-shipped' | 'mega'
 *     options: { volume }  (0.0..1.0, default = user pref or 0.6)
 *   window.SoundEngine.isUnlocked() -> bool
 *   window.SoundEngine.prefs.get() / .set(obj)
 *
 * User prefs (sessionStorage, auto-pushed to localStorage per-user):
 *   soundEnabled: bool (default: role==='aaron' ? true : false)
 *   soundVolume: 0..100 (default 60)
 *   muted: { chime: bool, 'cha-ching': bool, delivered: bool,
 *            'mark-shipped': bool, mega: bool }
 */
(function () {
  'use strict';

  var AC = window.AudioContext || window.webkitAudioContext;
  var ctx = null;
  var unlocked = false;
  var PREFS_KEY = 'nu_sound_prefs_v1';

  function role() {
    try { return sessionStorage.getItem('nu_role') || 'cb'; }
    catch (e) { return 'cb'; }
  }

  function loadPrefs() {
    try {
      var raw = localStorage.getItem(PREFS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore */ }
    return {
      soundEnabled: role() === 'aaron',
      soundVolume: 60,
      muted: {}
    };
  }

  function savePrefs(p) {
    try { localStorage.setItem(PREFS_KEY, JSON.stringify(p)); }
    catch (e) { /* ignore */ }
  }

  function ensureContext() {
    if (ctx) return ctx;
    if (!AC) return null;
    try { ctx = new AC(); } catch (e) { return null; }
    return ctx;
  }

  function unlock() {
    if (unlocked) return;
    var c = ensureContext();
    if (!c) return;
    try {
      if (c.state === 'suspended') c.resume();
      // Silent buffer — satisfies the "gesture → context" requirement
      var buf = c.createBuffer(1, 1, 22050);
      var src = c.createBufferSource();
      src.buffer = buf;
      src.connect(c.destination);
      src.start(0);
      unlocked = true;
      try { sessionStorage.setItem('nu_audio_unlocked', '1'); } catch (e) { /* ignore */ }
    } catch (e) { /* ignore */ }
  }

  function tone(freq, duration, type, volumeMul) {
    var c = ensureContext();
    if (!c || !unlocked) return;
    var osc = c.createOscillator();
    var gain = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    var now = c.currentTime;
    var vol = Math.max(0, Math.min(1, volumeMul || 0.15));
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(vol, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  var PATTERNS = {
    'chime': function (v) {
      // 2-tone bright chime (invoice ingested)
      tone(880, 0.12, 'sine', v);
      setTimeout(function () { tone(1318.51, 0.22, 'sine', v); }, 90);
    },
    'cha-ching': function (v) {
      // Cash-register-ish 3-tone ascending arpeggio (full pay)
      tone(523.25, 0.08, 'triangle', v);
      setTimeout(function () { tone(659.26, 0.08, 'triangle', v); }, 70);
      setTimeout(function () { tone(783.99, 0.18, 'square', v * 0.7); }, 140);
      setTimeout(function () { tone(1046.5, 0.24, 'sine', v); }, 210);
    },
    'delivered': function (v) {
      // Soft 2-tone plateau (UPS delivered)
      tone(659.26, 0.12, 'sine', v * 0.8);
      setTimeout(function () { tone(659.26, 0.18, 'sine', v * 0.8); }, 130);
    },
    'mark-shipped': function (v) {
      // Neutral single click (status change)
      tone(440, 0.08, 'sine', v * 0.6);
    },
    'mega': function (v) {
      // Full-vol 5-tone cascade (all-section-complete)
      var notes = [523.25, 659.26, 783.99, 1046.5, 1318.51];
      notes.forEach(function (f, i) {
        setTimeout(function () { tone(f, 0.28, 'triangle', v); }, i * 110);
      });
    }
  };

  function play(name, opts) {
    try {
      opts = opts || {};
      var prefs = loadPrefs();
      if (prefs.soundEnabled === false) return;
      if (prefs.muted && prefs.muted[name]) return;
      if (!unlocked) return;  // silent no-op until user gestures
      var pattern = PATTERNS[name];
      if (!pattern) return;
      var v = (opts.volume != null
          ? opts.volume
          : (prefs.soundVolume || 60) / 100) * 0.25;
      pattern(v);
    } catch (e) { /* never throw */ }
  }

  // Attach unlock to first interaction anywhere
  ['click', 'keydown', 'touchstart'].forEach(function (evt) {
    document.addEventListener(evt, unlock, { once: true, capture: true });
  });

  window.SoundEngine = {
    play: play,
    isUnlocked: function () { return unlocked; },
    unlock: unlock,  // callable from UI toggles
    prefs: {
      get: loadPrefs,
      set: savePrefs,
    },
    sounds: Object.keys(PATTERNS),
  };
})();
