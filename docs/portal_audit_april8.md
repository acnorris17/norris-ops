# Portal Audit — April 8, 2026
## ops.norrisutilities.com — ~/norris-ops/

### Root Pages
| Page | Auth | Nav | Status | Notes |
|------|------|-----|--------|-------|
| index.html | ✅ Two-tier | ✅ Tab nav | WORKING | Main portal, 10 celebrations, all tabs functional |
| aaron.html | ✅ norris2026 only | ✅ Sticky nav | WORKING | CEO dashboard with morning reminders, pipeline, orders |
| login.html | N/A (is the gate) | No | WORKING | Redirects to portal |
| 404.html | No | No | WORKING | Error page |
| cb-onboarding.html | No auth | No nav bar | NEEDS FIX | Missing auth gate and nav |
| cb-dashboard.html | No auth | No nav bar | NEEDS FIX | Missing auth gate and nav |
| shipping-log.html | No auth | Has nav | NEEDS FIX | Missing auth gate |
| calendar.html | No auth | Has nav | NEEDS FIX | Missing auth gate |
| team.html | No auth | Has nav | WORKING | Team roster page |
| team-live.html | ✅ | Has status bar | WORKING | AI team dashboard |
| po-tracker.html | No auth | Has tabs | NEEDS FIX | MSP ordering portal, missing auth |
| msp-orders.html | No auth | Has tabs | NEEDS FIX | MSP ordering portal, missing auth |
| journal.html | ✅ | No nav bar | PLACEHOLDER | "Coming Soon" |
| mission-control.html | ✅ | No nav bar | PLACEHOLDER | "Coming Soon" |
| hubspot-setup.html | No auth | Has nav | WORKING | Setup guide |
| custom-domain-setup.html | ✅ | Has nav | WORKING | DNS guide |

### Internal Pages (~/norris-ops/internal/)
| Page | Auth | Nav | Status | Notes |
|------|------|-----|--------|-------|
| contact_master_list.html | ✅ Two-tier | ❌ No nav | NEEDS NAV | CB's #1 request — needs unified nav bar |
| cb_tasks.html | ✅ | ❌ No nav bar | NEEDS NAV | Has back link but no unified nav |
| portal_notes.html | ✅ aaron-only | ❌ No nav bar | NEEDS NAV | Notes tool, needs unified nav |
| orders.html | ✅ | ✅ Has nav | WORKING | Order monitor |
| samson_dashboard.html | No auth | No nav | NEEDS FIX | Missing auth, missing nav |
| shipping_log_dashboard.html | No auth | No nav | NEEDS FIX | Missing auth |
| email_dashboard.html | No auth | Has nav | NEEDS FIX | Missing auth |
| ap_dashboard.html | ✅ | ✅ | WORKING | AP tracker |
| march20-invoice-reference.html | No auth | No nav | NEEDS FIX | Invoice ref for CB, missing auth |
| improvement_log.html | ✅ | No nav | WORKING | Change log |
| remarkable_dashboard.html | ✅ | No nav | WORKING | reMarkable notes |
| telegram_log.html | ✅ | No nav | WORKING | Telegram log viewer |
| Various others (home_base*, mission_control*, cb_*) | Mixed | Mixed | LEGACY | Older versions, not actively linked |

### Tools Pages
| Page | Auth | Nav | Status | Notes |
|------|------|-----|--------|-------|
| pricing-calculator.html | ✅ | Has tabs | WORKING | Pricing calculator with all 3 tiers |
| product-reference.html | ✅ Two-tier | Has back link | WORKING | Full product catalog, April 7 pricing current |

### Shipping Docs
| Page | Auth | Nav | Status | Notes |
|------|------|-----|--------|-------|
| shipping-docs/index.html | ✅ | Has nav | WORKING | SD portal |
| All SD-*.html files | ✅ | Individual SDs | WORKING | 10 shipping documents |

### Website Pages (public-facing, no auth needed)
| Page | Auth | Nav | Status | Notes |
|------|------|-----|--------|-------|
| website/index.html | N/A | ✅ | WORKING | Public homepage |
| website/about.html | N/A | ✅ | WORKING | About page |
| website/storefront.html | N/A | ✅ | WORKING | Product catalog |
| website/flexpro_armor_store.html | N/A | ✅ | WORKING | FlexPro Armor store |
| website/flexpro_armor_landing.html | N/A | ✅ | WORKING | Landing page |

### Branding Check
- ❌ "FlexPro Armor Guard" — NOT FOUND in any HTML file (clean)
- ✅ "Norris Utilities®" — Correct usage found
- ✅ "A Legacy of Commitment®" — Correct usage found
- ✅ Header gradients match brand spec on all active pages

### Priority Fixes (this session)
1. **Add unified nav bar** to: contact_master_list.html, cb_tasks.html, portal_notes.html, product-reference.html, pricing-calculator.html
2. **Add auth gates** to pages linked from portal that are missing them
3. **Enhance contact_master_list.html** — CB's #1 feature request
4. **Pricing data** — Already current as of April 7, verified against handoff doc
5. **Celebrations** — All 10 animations intact on index.html

### Items Needing Aaron's Input
- journal.html and mission-control.html are placeholder "Coming Soon" — build real content or remove from nav?
- 15+ legacy/duplicate internal pages — archive or delete?
- Samson dashboard missing auth — should CB have access?
- Coy Crosby pricing still TBD for 6× 1.5-Man BCs
