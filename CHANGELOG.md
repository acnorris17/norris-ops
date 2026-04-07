# Norris Utilities Ops Portal — Changelog

## 2026-04-07 — Portal Mega-Improvement

### Phase 1: Global Navigation Bar
- Injected `nav.js` into all 69 HTML files
- Dark navy fixed bar with role-based link visibility (CB vs Aaron)
- Active page highlighted with cyan underline
- Responsive horizontal scroll on mobile

### Phase 2: Team Page Updates
- Added Claude (Deep Reasoning) with purple glow effect
- Added MK Smith (Creative Director) with paint trail animation
- Renamed Agent V4 to "Phoenix" (Build Engine)
- Renamed Email Scout to "Scout" (Email Intel)
- Reordered: 7 key members first (Aaron, CB, Legacy, Claude, Scout, Phoenix, MK)
- Total: 17 team members on OneWheels

### Phase 3: Enhanced Celebrations
- Added toast notification with random messages on checkbox completion
- Added subtle ding sound via Web Audio API
- Verified all 7 celebration types working (fireworks, confetti, phoenix, stars, check boom, party, level up)
- Streak counter and daily completion counter confirmed functional

### Phase 4: Brand Graphics
- Created SVG assets in `/assets/`:
  - `logo-text.svg` — Norris Utilities text logo (Lato Black, #0000FF)
  - `phoenix-icon.svg` — Stylized phoenix in brand gradient
  - `tagline.svg` — "A Legacy of Commitment" in Playfair Display italic

### Phase 5: Document Management
- Created `/docs/` directory structure (guides, templates, reports, specs)
- Created `manifest.json` for document metadata and auto-linking
- Created `README.md` with document naming conventions and access control

### Phase 6: Improvement Log
- Built `/internal/improvement_log.html` — searchable, filterable change tracker
- Pre-populated with all changes from today's build
- Categories: Navigation, Design, Data, Functionality, Content, Bug Fix
- Export as text for Claude prompts
- Password protected (norris2026)

### Phase 7: Google Fonts CDN
- Verified Lato + Playfair Display loaded on all pages
- All pages use proper font-family declarations

### Phase 8: Final Verification
- Navigation bar loads on all pages
- Two-tier access control verified (aaron-only class)
- Celebrations fire on shipments, follow-ups, and CB tasks
- All links functional

---

## 2026-04-07 — Bug Fixes

- Restored password gate on `telegram_log.html`
- Fixed EOD recap double "EOD" tag
- Changed Pricing Tools icon from barely-visible to calculator
- Verified portal data sync for all JSON feeds

## 2026-04-06 — Portal Launch

- Ops portal deployed to GitHub Pages at ops.norrisutilities.com
- Full portal with 9 tabs, role-based access, celebrations
