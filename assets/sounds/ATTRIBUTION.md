# Sound Attribution

Norris Utilities® Operations Portal (V2.2)

All celebration sounds are **synthesized in-browser** via the Web Audio API
(oscillator + gain envelope). No external audio files are loaded or fetched.

Pattern implementations live in `assets/js/sound-engine.js`:

| Sound          | Trigger                          | Pattern |
|----------------|----------------------------------|---------|
| `chime`        | Invoice ingested (§M.7)          | 2-tone sine (A5 → E6), ~300ms |
| `cha-ching`    | Full payment received            | 4-tone cash-register arpeggio, ~500ms |
| `delivered`    | UPS delivery confirmed (§M.3)    | 2-tone plateau (E5), ~300ms |
| `mark-shipped` | Status → Shipped                 | Single tone (A4), ~80ms |
| `mega`         | All-sections-complete celebration | 5-tone ascending cascade, ~800ms |

## Why synthesis instead of downloads

- Zero network dependency — works offline, no 429/timeout failure surface.
- No licensing risk — fully Norris-owned code.
- No autoplay-policy bypasses — unlocks on first user gesture per browser standard.
- Tiny footprint — no WAV/MP3 files to ship.

## Falling back further

If `AudioContext` is unavailable (very old browsers), `SoundEngine.play()`
becomes a silent no-op. The visual celebration still fires. Per §S spec
this is the third fallback tier.
