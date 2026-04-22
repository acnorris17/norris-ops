# LEGACY / AI AGENT — MASTER LIVING MEMORY & STATE
## Updated: April 17, 2026 (evening — V5 launched)
## Overall Progress: ~45% Complete

---

# SECTION 1: PROJECT FOUNDATION

**Project Name:** Legacy / AI Agent (Ops Portal + AI Infrastructure)
**Project Created:** March 16, 2026
**Last Updated:** April 14, 2026

**What Is This Project?**
The complete AI-powered operations infrastructure for Norris Utilities, LLC — an internal ops portal, always-on AI agent (Legacy), automated shipping/invoicing pipeline, memory systems, and all connected tools that free Aaron to focus on sales and relationships instead of administration.

**Why Does It Exist?**
Aaron is a one-man sales force covering 20+ states with 2,300+ contacts. His #1 bottleneck is follow-up and customer communication. Every minute behind a computer is a minute not in front of a customer. This project builds the systems so Caroline Butler can handle operations, Legacy handles automation, and Aaron handles relationships.

**Who Uses It?**
- Aaron C. Norris — Founder/CEO, all decisions, sales focus
- Caroline Butler (CB) — Admin Assistant, QB A/R, portal user (legacy2026 login), sees ALL data including pricing/margins
- Legacy Agent — Always-on AI automation on M1
- Claude (this project) — Deep reasoning, strategic sessions, document creation

**Success Criteria:**
- [ ] Every shipped order flows automatically from SD creation through QB invoice with no manual data hunting
- [ ] CB can open the portal each morning and know exactly what needs invoicing, what's pending, what's blocked
- [ ] All memory systems (NorrisPalace, G Brain, LEGACY_MEMORY.md) auto-update across every channel in real time
- [ ] Aaron can see the full state of every project, task, and priority in one visual tool he can rearrange
- [ ] Nothing falls through the cracks — every email, every order, every follow-up is tracked and surfaced

**Timeline:**
- Started: March 16, 2026
- Target completion: Ongoing (infrastructure is never "done" but core systems must be operational ASAP)
- Current status: Behind — 5+ months of building during peak selling season, core revenue pipeline still not closed

---

# SECTION 2: ARCHITECTURE & HOW PIECES CONNECT

**Machines:**
- M1 MacBook Pro (2020, 16GB, user: acnorris1, macOS Tahoe) — always-on Legacy agent host. Sits on desk. Never sleeps. All agent scripts run here.
- M5 MacBook Pro 14" (24GB, nano-texture) — primary travel/work machine. Runs Claude.ai sessions. Prompts copied via Universal Control to M1.
- Universal Control bridges both machines — shared keyboard/mouse/clipboard.

**Tech Stack:**
- OpenClaw v2026.4.8 (Legacy agent) — needs update to v2026.4.9
- Claude Code on M1 (alias: cc="claude --dangerously-skip-permissions --effort max")
- Claude.ai on M5 (this project + 14 others)
- GitHub Pages (ops portal: acnorris17/norris-ops)
- Google Workspace (Gmail, Calendar, Drive, Sheets) via gog CLI (NU-native, no external packages)
- QuickBooks Online (Aaron manages; CB has A/R Manager access)
- Telegram (@NorrisLegacyBot, chat ID 8758078447)
- Discord ("Norris Utilities - Legacy", Server ID 1488572836858691617)
- NorrisPalace (local JSON memory, CLI alias "np")
- G Brain v0.9.2 (semantic memory, 73 pages, 339 chunks)
- reMarkable 2 (handwritten notes, OCR pipeline — CRASHED, needs fix)
- Granola AI (meeting transcription)
- Python scripts at ~/norris-agent/scripts/
- Google Apps Script (UPS Shipping Log V8)

**Data Flow — The Revenue Pipeline (HOW IT SHOULD WORK):**
1. Order arrives (email, phone/reMarkable notes, text, or future MSP portal)
2. Legacy detects order → creates SD automatically → SD auto-prints 1 copy (Draft, Color, no headers/footers) unless Aaron says "don't print"
3. Aaron ships product from UPS Store
4. UPS receipt email arrives at acnorris@norrisutilities.com
5. Shipping Agent scans receipt → extracts tracking + cost
6. Agent looks up delivery confirmation via UPS tracking
7. Agent matches delivery address to SD file (who was it shipped to?)
8. Agent applies Ben's Formula → calculates customer shipping charge
9. Agent updates: SD (with tracking/status), portal Shipments tab, Shipping Log Google Sheet, cb_tasks.json
10. CB sees READY status in portal → creates QB invoice with pre-filled data
11. All systems update in sync — portal, Sheet, SD, cb_tasks — one source of truth with redundant copies

**CURRENT REALITY:** Steps 2-9 are partially built but not connected end-to-end. This is THE #1 build priority.

**Integration Map:**
- Gmail → email_watch.py → Telegram alerts (WORKING)
- UPS receipts → shipping_processor.py → cb_tasks.json (PARTIALLY WORKING — 3 gaps remain)
- SD files → portal shipping-docs/ (MANUAL — needs auto-sync)
- NorrisPalace → Google Doc bridge (auto-updates 3x daily + on store)
- G Brain → iCloud → M5 (auto-syncs every 30 min)
- LEGACY_MEMORY.md → SUPPOSED to auto-update from all channels (NOT WORKING — critical fix needed)
- Living Roadmap Sheet → roadmap_append.py (after CC sessions)
- Portal → GitHub Pages (git push to acnorris17/norris-ops)

**Key File Paths (M1):**
- ~/norris-ops/ — portal repo
- ~/norris-ops/index.html — 1,415+ lines (minimum 1,100 — abort below)
- ~/norris-ops/data/ — JSON data files
- ~/norris-ops/internal/ — 105+ gated HTML pages
- ~/norris-ops/shipping-docs/ — SD HTML files
- ~/norris-agent/ — Legacy agent directory (84 files)
- ~/norris-agent/agent_runner_v4.py — main agent
- ~/norris-agent/scripts/ — all automation scripts
- ~/norris-agent/LEGACY_MEMORY.md (28KB)
- ~/norris-agent/palace/ — NorrisPalace database
- ~/norris-intel/ — reMarkable pipeline (CRASHED)
- ~/nu-brain/ — G Brain files (73 pages)
- ~/.gbrain/brain.pglite — G Brain database
- ~/.openclaw/ — OpenClaw config, memory, credentials

---

# SECTION 3: CURRENT STATE OF EACH COMPONENT

## 3.1 — OPS PORTAL (ops.norrisutilities.com)
**STATUS:** 🟡 IN PROGRESS
**Purpose:** Internal operations hub — dashboard, shipments, invoicing, contacts, follow-ups, tools, docs.
**Owner:** Aaron + Claude Code builds
**Last Updated:** April 14, 2026
**Priority:** URGENT

**WHAT IS COMPLETE:**
- GitHub Pages live, two-tier auth (norris2026 / legacy2026)
- 10 nav tabs functional
- Celebrations engine v2.0 (CB gets full show — phoenix rise, particles, chime, everything)
- Dynamic time-aware greeting
- Stat cards, quick links, notes system
- 105+ internal pages gated with JS auth
- Portal audit passing at 0 issues
- Pre-commit dedup hook (local only)
- Post-write auth gate injection in agent_runner_v4.py
- Pipeline stat updated to $2.5M+

**WHAT IS IN PROGRESS:**
- Shipments tab — partially wired to JSON, needs Shipping Agent confirm-write for real data
- project-roadmap.html — being deployed via feature branch (April 14)
- change-log.html — NOT YET BUILT (tab empty)
- Cloudflare Zero Trust auth — PRIORITY TODAY, separate session open

**WHAT IS NOT STARTED (or in separate project folders):**
- Contact database import — separate project folder, results brought in when ready
- Product/pricing reference page — separate project folder
- Samson Rope pricing tool — separate project folder
- MSP Ordering Portal — tied to Samson project completion
- CRM drill-down (CB request: click contact → see history)
- Website rebuild — low priority, want autonomous agents building in background

**NEXT ACTION:** Cloudflare setup (session open), then Shipping Agent confirm-write to populate real shipment data.

---

## 3.2 — LEGACY AGENT (OpenClaw on M1)
**STATUS:** 🟡 IN PROGRESS — core running, subsystems need fixes
**Purpose:** Always-on AI agent for email monitoring, morning briefings, follow-up drafting, SD creation, Telegram alerts.
**Owner:** Aaron + Claude Code
**Last Updated:** April 14, 2026
**Priority:** URGENT

**WHAT IS COMPLETE:**
- OpenClaw v2026.4.8 on M1 (UPDATE TO v2026.4.9 NEEDED — commands below)
- Telegram bot: @NorrisLegacyBot, chat ID 8758078447
- M5 cleaned of orphaned LaunchAgents (April 11) — M1 is sole Legacy machine
- task_bridge.py connects all 7 pipelines to task_queue.md
- Email monitoring: 3 min (4AM-9PM CT), 15 min off-hours
- Morning brief: 3:55 AM CT daily
- EOD recap: 6 PM
- 27 LaunchAgents managing all services
- Notification flood fixed (duplicate scanner removed, audit silenced, stale alert rate-limited)
- Personal Gmail (acnorris1@gmail.com) — CONFIRMED CONNECTED AND WORKING

**WHAT IS IN PROGRESS:**
- 12-phase Legacy master fix prompt running today (Telegram ops bot, reMarkable reconnection, memory sync, notification routing to separate chat)
- Telegram typing indicator — not yet permanent in agent loop
- portal_autofix.sh — "0 fixed" bug on missing auth pages
- SD auto-print pipeline — not built (SD creates but doesn't auto-print)

**WHAT IS NOT STARTED:**
- Separate Telegram chat for notifications (Legacy chat = Legacy + Aaron only; notifications go to separate chat but Legacy still sees them automatically)
- CB Telegram Bot (@NorrisCBBot — business-only messages)
- Samson Rope order automation

**OPENSCLAW UPDATE — Run these commands on M1 Terminal:**
```bash
openclaw update
# Wait for completion, then:
openclaw gateway install --force
openclaw gateway start
# Verify:
openclaw status
```
If Legacy doesn't respond within 5 minutes after update, run the install --force and start commands again.

**CRITICAL FIX NEEDED:** LEGACY_MEMORY.md is NOT auto-updating across all channels. It was SUPPOSED to auto-update from Claude.ai sessions, Legacy conversations, prompts, and all channels. The bridges exist (NorrisPalace → Google Doc, G Brain → iCloud) but LEGACY_MEMORY.md itself is a manual file. This needs to be wired so every source writes to it automatically.

---

## 3.3 — SHIPPING AI AGENT
**STATUS:** 🟡 IN PROGRESS — dry-run done, awaiting confirm-write
**Purpose:** THE revenue pipeline. Solve the invoicing backlog by automatically hunting tracking data, matching it to orders, and giving CB clear READY/PENDING/BLOCKED status.
**Owner:** Aaron + Claude Code
**Last Updated:** April 14, 2026
**Priority:** #1 AFTER memory system is addressed

**WHAT IS COMPLETE:**
- shipping_processor.py (Script 1) — LIVE, +547 lines. Reads UPS receipts, applies Ben's Formula, writes to cb_tasks.json. 3 test results confirmed.
- shipping_ai_agent.py (Script 2) — dry-run completed April 14. 7 orders READY ($7,610). Report saved.
- Complete order status table with all 11 orders tracked

**WHAT IS IN PROGRESS / GAPS:**
- GAP: confirm-write awaiting Aaron's approval for 7 READY orders
- GAP: Google Sheet write-back not built (Shipping Log must update automatically)
- GAP: Telegram summary after runs not built
- GAP: gog CLI Gmail search syntax may be failing (6 orders have no tracking from search)
- GAP: Portal Shipments tab needs READY/PENDING/BLOCKED badge wiring
- GAP: SD auto-update as data flows in (tracking found → SD updated → portal updated → Sheet updated)
- GAP: SD auto-print (1 copy, Draft, Color, no header/footer file paths) — not built

**THE FULL VISION (what Aaron needs built):**
Order in → SD auto-prints → ship → Shipping Agent hunts ALL data from ALL sources → SD updates in real time → portal Shipments tab updates → Shipping Log Google Sheet updates → cb_tasks.json populates → CB creates QB invoice → everything syncs everywhere automatically. One source of truth with redundant synchronized copies. This is THE most critically important system to build.

**UNINVOICED ORDERS:**
- ✅ S001-S003 Thornhill/LineTec — 3× NU-BC-2851 @ $305 = $915 — READY
- ✅ S006 Crosby/Dominion Apr 8 — 5× NU-BC-2851 = $1,525 — READY
- ✅ S008 Benz/SWEPCO — 1× NU-BC-2851 @ $305 — READY
- ✅ S005 Abadie/Primoris W6237 — 2× NU-BC-2851 = $610 — READY
- ⚠️ S007 Crosby/Dominion Mar 20 — ~5× NU-BC-2834 @ $265 — VERIFY QTY
- ⚠️ S012 Abadie/Primoris BYB0001 — 1× NU-BC-2828 $235 — confirm received
- ✅ S009 Pickle/Florence — 3× NU-BC-2834 + 1× NU-BC-2834-C + 2× NU-BC-2834-F = $1,710 — ARCH P/Ns CONFIRMED (handled previously)
- ✅ S010 Myers/AEP — 2× NU-BC-2834-F + 1× NU-BC-2834-C = $915 — CONFIRMED
- ✅ S011 AJ Morris/Chain Electric — tracking + delivery confirmed

---

## 3.4 — NorrisPalace
**STATUS:** 🟢 BUILT (v1.0.0) but Legacy memory still poor
**Purpose:** Local JSON persistent memory for business data.
**668 records, 8 wings. CLI alias "np" on M1.**
Auto-updates to Claude.ai bridge Google Doc at 3:45 AM, noon, 5 PM CT + on every np store.
**ISSUE:** Legacy doesn't consistently query it before responding. The tool exists but the habit loop (write → store → retrieve → use) isn't reliably firing. Needs investigation in Legacy-focused session.

---

## 3.5 — G Brain
**STATUS:** 🟢 BUILT (v0.9.2, 73 pages, 339 chunks, 100% embedded)
**Purpose:** Semantic memory — deeper understanding than keyword search.
MCP server wired to OpenClaw. nu-handoff syncs M1 → iCloud → M5 every 30 min.
**ISSUE:** Same as NorrisPalace — infrastructure exists but Legacy may not be querying it consistently. Both need audit.

---

## 3.6 — Discord Server
**STATUS:** 🟢 LIVE but UNUSED
**Purpose:** Originally intended for task/project management visibility — seeing what Legacy is working on, managing tasks visually. Aaron has never logged in or been properly introduced due to constant Legacy failures.
**Server:** "Norris Utilities - Legacy" (ID: 1488572836858691617), Bot: @Legacy, 9 channels.
**NEXT:** Low priority until Legacy stabilizes. Original purpose overlaps with what the Living Roadmap visualization should do.

---

## 3.7 — reMarkable Intel Pipeline
**STATUS:** 🔴 CRASHED (April 3, 2026 — SIGKILL)
**Purpose:** OCR handwritten notes from reMarkable 2, extract action items (orders, tasks, notes), feed into morning brief and Shipments & Invoicing.
**CRITICAL USE CASE:** Aaron sometimes drops BCs off in person, writes notes on reMarkable (customer, products, quantities, relevant details), then needs those notes to automatically create records in the portal so CB can invoice from them.
**37 open action items stuck in SQLite database.**
**Path:** ~/norris-intel/
**NEXT:** Reconnect pipeline or build better solution. Must never crash again. Must handle: scan → OCR → extract action items → create records in portal → update task tracker → feed morning brief. Included in today's Legacy master fix prompt.

---

## 3.8 — Living Roadmap
**STATUS:** 🟡 EXISTS but not structured as usable daily tool
**Purpose:** Visual tool where Aaron can see ALL projects, tasks, priorities — move things around, add notes, shift structure.
**Sheet ID:** 1dZ7YIhdjX7XgtKUkbd-4LUErI1uu0EuR3omwyp3K0Zg
**Auto-updater:** ~/norris-agent/scripts/roadmap_append.py
**THIS IS TODAY'S MAIN DELIVERABLE.** Aaron has spent 5+ hours on it. Needs to cross the finish line.
**CRITICAL REQUIREMENT:** Whatever happens in this visualization ALSO happens everywhere else — portal, memory systems, agent awareness — so everything stays synchronized.

---

## 3.9 — Website
**STATUS:** ⚪ LOW PRIORITY
**Purpose:** Public-facing website for Norris Utilities.
**History:** The Method Marketing (Melissa/Derek Wilson) failed project — 1.5+ years, never completed. All materials compiled by Legacy.
**Draft pages exist:** ~/norris-agent/output/website/index.html, ~/norris-ops/website/
**DESIRED APPROACH:** Autonomous agents build and improve the website in the background from existing files/data while Aaron works on more important things. Agents run in loops, getting better over time automatically.

---

## 3.10 — Product/Pricing Data
**STATUS:** 🟡 DATA GATHERED — separate project folders handle completion
**QB product list prices:** UPDATED AND COMPLETE (2026 Price List). This is done.
**FlexPro Armor Complete Pricing Master:** In project files. Separate project folder handles the detailed work.
**Samson Rope pricing:** Separate project folder. 30% is Aaron's COST from Samson, NOT his markup (which is much higher, varies by category: 30-60%+). Results brought into this project when ready.
**MSP Ordering Portal:** Tied to Samson project. Customer-facing portal (future) where MSP logs in to place orders, sees historical data/orders/reference docs WITHOUT NU internal costs. Pricing may or may not be visible — TBD. All other details (descriptions, quantities, dates) visible.

---

# SECTION 4: LOCKED DECISIONS (DO NOT RE-DEBATE)

1. FlexPro Armor — NEVER "FlexPro Armor Guard." NEVER ®. NEVER &reg;. Bare always, everywhere.
2. Norris Utilities® — always ®. A Legacy of Commitment® — always ®. Phoenix Icon® — always ®.
3. In HTML: &reg; entity only for registered marks. Never UTF-8 ® glyph on disk. Never on FlexPro Armor.
4. No pricing on shipping documents — SACRED.
5. Ben's Formula: CustomerCost = ROUNDUP(ROUNDUP(RegCost,0) × 1.10, 0) — SACRED.
6. Samson payment: PO Box 536753, Pittsburgh PA 15253-5909. NEVER Ferndale WA.
7. CC BOTH Boss Products contacts on every email (tgongwer + tgrove). CC BOTH Samson contacts (dpoll + sdaniels).
8. CB = Caroline Butler ONLY. Dr. Caroline Norris = Aaron's wife. NEVER confuse.
9. CB CAN see ALL pricing/margin data. NOTHING is hidden from CB.
10. Gridco/Cunningham DEAD. Never list as active. Persistent bug — needs grep-and-destroy across ALL files on M1.
11. MSP pricing: 30% = Aaron's COST from Samson, NOT his markup. His actual margins are much higher (30-60%+ by category). Do not expose until verified via separate Samson project.
12. All integrations NU-native only. No public ClawHub packages (ClawHavoc incident Feb 2026).
13. M1 = Legacy machine. M5 = Claude.ai sessions.
14. Legacy watches, reports, drafts. Aaron decides. Nothing external without approval.
15. SD v7 with Line Card header design.
16. index.html minimum 1,100 lines — abort below.
17. Auth: sessionStorage not localStorage.
18. Terry Mayfield (BSS) deceased 2024. Honor. Never active.
19. Wayne's bench/tree at Shoal Creek — hold quietly. Never push.
20. GoPro/video footage — Aaron hasn't watched. Extreme care.
21. Search existing files BEFORE building anything new. Find before build. Modify before rebuild.
22. Pricing formula authority: Customer Price = Cost ÷ (1 - Margin%). Never hard-code.
23. Pricing channels: Direct (full) and Dealer. Distributor tier NOT DEFINED — NU has only Dealers currently. The old "30% off dealer / 40% off distributor" rule is RETIRED (see Dealer Pricing Rule + Distributor Retraction in Section 5.5). Aaron locks distributor rule when a distributor relationship materializes.
24. CC alias: cc="claude --dangerously-skip-permissions --effort max"
25. Portal audit must return 0 issues before any git push.
26. notification_tier.py for all Telegram sends.
27. PGLite single-writer: use _with-brain-lock.sh for brain CLI writes while serving.
28. Personal Gmail (acnorris1@gmail.com) IS CONNECTED AND WORKING. Stop asking.
29. QB product list prices UPDATED AND COMPLETE (2026 Price List). Done.
30. Celebrations — CB gets the FULL show. Not secret. Not hidden.

---

# SECTION 5: DATA & REFERENCES

**KEY P/Ns — FlexPro Armor (2026 Pricing):**
- NU-BC-2828: 1-Man — $235
- NU-BC-2834: 1.5-Man — $265
- NU-BC-2851: 2-Man — $305
- NU-BC-2834-F: ARCH 1.5-Man — $305
- NU-BC-2851-F: ARCH 2-Man — $345
- NU-BC-2834-C: Combo 1.5-Man — $305
- NU-BC-2851-C: Combo 2-Man — $345
- NU-BC-2851-FC: ARCH+Combo 2-Man — $385
- NU-BCB-2851-SL: Shield 2-Man — $55
- Dealer = 30% off list

**SAMSON ROPE MARGIN CATEGORIES (Aaron's target margins TO customers, NOT his cost):**
- Turret Ropes (AMSTEEL): 30%
- Jib Lines w/ Spool (STABLE BRAID): 30%
- Jib Lines w/ Thimble End: 60%
- Jib Lines Eye-Eye: 50%
- Puller Ropes (TENEX 6000'/8000'): 55%
- Nylite Class II Assemblies: 42%
- Nylite Spool/Shield Only: 30%
- Shackles/Small Parts: 33%
- Formula: SellPrice = Cost ÷ (1 - TargetMargin). Cost fluctuates — formula is authority.

**CRITICAL CONTACTS:**
- Boss Products: Troy Gongwer (tgongwer@bossproductsinc.com) + Thayne Grove (tgrove@bossproductsinc.com) — CC BOTH always
- Samson Rope: Donna Poll (dpoll@samsonrope.com) + Sarah Daniels (sdaniels@samsonrope.com) — CC BOTH always
- CB: cbutler@norrisutilities.com (portal: legacy2026)
- Bill Kugler (Terex): $500K+ OEM — highest priority strategic
- Rick Sutherland (EPB): sutherlandra@epb.net — SkyTruck47 ~$185K
- Jared Lemoine (Irby): sole contact replacing retired Gary Wiggs + Scott Argyle
- Coy Crosby (Dominion): coy.crosby@dominionenergy.com, 803-217-1130
- AJ Morris (Chain Electric): ajmorris@bchain.com, 601-549-5409
- Skylift: Jamie Eden (Jamie@skyliftus.com), Andrew Jarmoszuk, Nick Jarmoszuk Jr (NJ@skyliftus.com)

**TRADEMARKS:**
- Norris Utilities® (Supplemental Register ~July 15, 2025)
- A Legacy of Commitment® (Reg. 7,678,007)
- Phoenix Icon® (Reg. 7,678,003 / 7,678,005)
- FlexPro Armor — NOT registered. Never ®.
- Section 8 & 15 filings due February 4, 2031. Attorney: Micah J. Fincher (Fincher.co)

---

# SECTION 5.5: SA V5 — 18 LOCKED RULINGS (April 17, 2026)

Captured during the Claude.ai V5 prep session. Do not re-debate. SA = Shipping Agent. Legacy queries these before acting; V5 build follows them.

1. **Investigation principle is immutable** — SA and Legacy exhaust evidence to 100% certainty before asking. Never guess. Learn permanently.
2. **SD required fields** — Customer / Ship-To / P/N / Description / QTY / SD Date / Ship Date. No prices.
3. **Dealer's Formula** — `ROUNDUP(ROUNDUP(RegCost,0) * 1.05, 0)`. Dealer tier lives in `customer_db`. Invoice follows `bill_to`, not `ship_to`. (Distributor tier NOT DEFINED — see Distributor Retraction below.)
4. **Truth Sources architecture** — `truth_sources.json` + `truth_source_path()` helper + daily audit + pre-commit hook. M5 write, M1 read.
5. **Hunt Ladder** — 11 fallback sources for missing shipping data. SA learns successful strategies to `sa_learnings.json`.
6. **Shipping Log Google Script audit** sits inside V5 Section U readiness gate.
7. **SA + Shipping Log = redundancy.** No single point of failure.
8. **SA gets a dedicated Telegram topic** — `nu-shipping-agent`.
9. **Telegram reorg** — 4 topics replace Legacy main-thread noise (nu-legacy-main, nu-shipping-agent, nu-ops-notifications, nu-critical-alerts).
10. **Memory Health Dashboard** — one-stop lookup for Living Memory component status.
11. **G Brain migrates to Drive.** Legacy query habit is a known unreliable, tracked on Memory Health.
12. **Boss drop-ship 5-field cross-check** — POC+address, Date (±4d, ±14d OOS), P/N numeric core, QTY, Description fuzzy.
13. **`customer_db.ship_to_history[]` is unbounded** — no branch assumption. Jobsites / houses / anywhere.
14. **`po_required` NEVER halts SD→ship→hunt→invoice.** Invoicing-phase concern only.
15. **Every discovery source** we have ever discussed is represented in V5 Hunt Ladder or Boss cross-check.
16. **INVOICED = immutable.** FIX rejected. Manual QB correction + re-issue required.
17. **Payment terms audit deferred** from V5 to future roadmap.
18. **M5 = source / M1 = agent host.** Legacy system prompt encodes the flow. Truth Sources manifest tags boundaries.

## LOCKED RULINGS 19–23: V5 ORDER PROCESS RULES (April 18, 2026)

Locked by Aaron during Chain Electric/AJ Morris reconciliation. Apply to ALL orders going forward. V5 retroactive update required — see Section 7.

19. **Multi-ship-to orders** — one parent order record (ORD-YYYY-NAME-MMDD), one SD per ship-to destination, all linked via `parent_order_id`. Single QB invoice to POC rolls up all child SDs. Memo lists each ship-to with contents.
20. **Fulfillment source tagging** — every SD requires `fulfillment_source`: `"nu_stock"` (Aaron's inventory via UPS Store), `"vendor_dropship"` (Boss or vendor ships direct — requires vendor_name, vendor_invoice_number, vendor_ship_date, vendor_freight_cost), or `"mixed"` (split into two SDs preferred).
21. **SKU substitution logging** — when a product subs for another (stock-out or otherwise), SD gets: `original_sku`, `substituted_sku`, `substitution_reason`. Track across all orders for pattern analysis.
22. **Courtesy pricing mechanism** — QB invoice line items always show LIST PRICE. Discounts applied as single `courtesy_adjustment` negative line. SD `internal_pricing` records effective unit price for margin tracking. Never override list on line items — preserves pricing integrity.
23. **CB internal notes** — all invoiceable SDs get `cb_internal_note`. Visible in portal Shipments tab (CB role only). NEVER rendered on customer-facing SD PDF. Format: locked unit prices, QB invoice method, special instructions, approval status.

**First application:** Chain Electric/AJ Morris — ORD-2026-CHAIN-0324. Invoice $8,930.48 sent April 18, 2026. ARCH baseline $275 locked. Boss invoices 6775/6776/6777 resend pending from Thayne Grove.

---

## DEALER PRICING RULE + DISTRIBUTOR RETRACTION (April 17, 2026 — evening)

Captured after Aaron confirmed NU has only Dealers. Retires the old "30% off dealer / 40% off distributor" rule across all memory locations.

1. **Master is authoritative** for any P/N in the Dealer Price List sheet.
2. **Products not in master** — Dealer Price = `ROUND(Direct × 0.80, nearest $5)`.
3. **D-Shape excluded** from formula (master-only).
4. **Margin floor** — Cost/Dealer must be ≤ 0.50.
5. **Distributor pricing: NOT DEFINED.** NU has only Dealers currently. V5 SA raises `NotImplementedError` if distributor tier is ever referenced. Aaron locks the rule when a distributor relationship materializes.
6. **Dealer shipping** — `ROUNDUP(ROUNDUP(RegCost,0) × 1.05, 0)` (Dealer's Formula).
7. **Invoice always follows `bill_to_customer_id`**, never `ship_to`.
8. **Memory lockout** — every "30% off dealers / 40% off distributors" reference is retired. Section 4 item 23 and any other surviving references must be updated to match.

---

# SECTION 6: SESSION LOG (NEWEST FIRST)

**April 20, 2026 (PM)** — SA V5 Audit (Session 1 of 3). Read-only diagnostic of shipping_agent_v5.py, shipping_hunter.py, shipping_readiness_gate.py, lib/audit_log.py, scripts/order_monitor.py. 11-source Hunt Ladder mapped (docstring claims 11; LADDER has 9; 3 live gog-backed sources + 6 stubs). 5 process rules enforcement traced — Rules 2 & 5 have non-blocking warnings in sd_builder.py, Rules 1/3/4 have no enforcement, all 18 records missing the fields. 3 SDs traced end-to-end (LINETEC-0402, AJ-0331-ChainElectric, MYERS-AEP-0320). Pickle ship-to HUNTED AND FOUND: 611 East Reeder Street, Florence AL 35630, in customer_db.json — reveals biggest architectural gap: the Hunt Ladder does not query internal data sources. 18-record completeness table produced. UPS public tracking via curl confirmed infeasible (Akamai bot protection hangs TLS). Report at output/reports/SA_V5_AUDIT_2026-04-20.md + Telegram summary at SA_V5_AUDIT_2026-04-20_TELEGRAM.txt. No code or data changed. Session 2 scope ready for Aaron review.

**April 17, 2026 (evening)** — SA V5 launched
- 1,301-line autonomous build.
- 18 locked rulings + Dealer Pricing Rule + Hunt Ladder (11 sources, retry protocol, learning system) + Boss 5-field cross-check + concurrent-run lock + invoice number uniqueness check + money verification in readiness gate.
- Distributor rule retracted (N/A until needed).
- Waiting on Section U readiness report for Aaron GO.

**April 17, 2026** — V5 Prep: Roadmap + Rulings Lockdown
- 6 new roadmap items captured (Telegram Reorg URGENT, Memory Health Dashboard HIGH, Truth Sources Lockdown HIGH, Legacy Rules Lockdown HIGH, G Brain→Drive MEDIUM, Payment Terms Audit LOW)
- 18 SA V5 rulings encoded into Section 5.5 above
- Living Roadmap Sheet updated (new 🗺️ ROADMAP ITEMS tab)
- Portal project-roadmap.html updated with the 6 new items
- V5 build is unblocked pending dealer formula confirmation

**April 14, 2026** — Living Memory Build + Multiple Focused Sessions
- Living Memory Document extraction and build (THIS session)
- Shipping AI Agent dry-run verified, 7 READY orders ($7,610)
- Portal project-roadmap.html deployment
- Legacy master fix prompt (12-phase) for ops bot, reMarkable, memory, notifications
- Master Shipping Agent Handoff built
- Pipeline stat $1.1M → $2.5M+
- Rick Sutherland revival email drafted
- Multiple focused session windows open: Shipping Agent, Portal, Cloudflare, Legacy SD

**April 13, 2026** — Largest single-day build session
- G Brain installed (73 pages, 339 chunks)
- nu-handoff system both machines
- CB greeting fix, 67 duplicate files removed, auth investigation
- OpenClaw updated, duplicate scanner removed, notifications fixed
- shipping_processor.py deployed, Celebrations v2.0 finalized
- FlexPro Armor ® conflict fixed, pre-commit hook installed
- Gridco/Cunningham scrubbed, deals-pipeline.md + open-items.md in G Brain

**April 11, 2026** — Legacy fix day
- M5 cleaned, M1 confirmed sole machine
- task_bridge.py built (7 pipelines connected)
- Redundant agents disabled, services restarted

**April 10, 2026** — Portal disaster recovery
- Guide 1 overwrote portal → recovered via git
- Living Roadmap Sheet created
- 9-phase Master CC Prompt built
- Portal rebuilt to 1,266 lines

**April 8-9, 2026** — Product master + infrastructure
- Complete FlexPro Armor pricing analysis
- NorrisPalace v1.0.0 built
- Email monitoring fixed (Telegram), morning brief time change
- BSS Invoice 11 built ($8,039.27)
- QB data exports uploaded
- iShip outage confirmed since March 24

**April 7, 2026** — CB Meeting Day
- Portal walkthrough at 10 AM CT
- CB's invoicing challenges discovered (can't match tracking to orders)
- SD automation gap identified

**March 28, 2026** — OpenClaw migration work
**March 16-17, 2026** — OpenClaw initial setup on M5

---

- 2026-04-19 | NorrisControl v3.1 shipped — tmux paste bridge for Claude Code (33/33 tests, multi-line paste fix, 4 main commits)
  → ~/norris-agent/session_summaries/SESSION_2026-04-19_ClaudeAi_NorrisControl_v3-1_Ledger.md
- 2026-04-20 | Session Summary System + AUTO-CHECKPOINT deployed (rule file, scaffolding, CLAUDE.md + Legacy MEMORY.md pointers, 5 core rules synced)
  → ~/norris-agent/session_summaries/SESSION_2026-04-20_ClaudeCode_SessionSummarySystem_Deployment.md


### 2026-04-20 — Cloudflare Zero Trust / norrisops.com
Registered norrisops.com via Cloudflare (~$10.46/yr). Separate domain chosen over full-zone move to eliminate risk to main site + Google Workspace email. JS auth gates stay in place (belt-and-suspenders). Legacy automation via Cloudflare Access Service Tokens (Client ID + Secret in M1 .env). Team: norris-utilities → norris-utilities.cloudflareaccess.com. Phases 2-5 open (Pages deploy, custom domain, Zero Trust app, Service Token, test). Service Token now created; CB email confirmed.
→ ~/norris-agent/session_summaries/SESSION_2026-04-20_ClaudeAi_Cloudflare_ZeroTrust_norrisops.md

### 2026-04-20 — Session Summary System Deployment + AUTO-CHECKPOINT
Deployed MEMORY_session_summary_rule.md (116 lines, AUTO-CHECKPOINT included). Scaffolded session_summaries/ with _TEMPLATE.md + INDEX.md. Pointers in ~/CLAUDE.md + ~/.openclaw/workspace/MEMORY.md. 5 core operating rules synced to Legacy MEMORY.md (Wayne standard, time awareness, no-rebuilds, typing indicator, Samson CC rule). Watcher LaunchAgent installed (com.norrisutilities.summarywatcher, 15-min schedule).
→ ~/norris-agent/session_summaries/SESSION_2026-04-20_ClaudeCode_SessionSummarySystem_Deployment.md
→ ~/norris-agent/session_summaries/SESSION_2026-04-20_ClaudeAi_AutoCheckpoint_Amendment.md

### 2026-04-19 — Evening v4 FINAL (NC Bulletproof + Path A + Invoice Blitz + P/N Rule)
Shipped NC LaunchAgent + cc-main preflight (PID 65371, survives reboot/sleep). Built ask_claude.py (commit 6121a97, D16 safety fix pending). Locked architectural clarity: Claude.ai / CC / API are three distinct products. Model rule: Opus default / Sonnet explicit / NO Haiku / $120/mo cap. Terminology: P/N not SKU, permanent. BCB = Bucket Cover Bag ($55). Identified ~$10,100+ invoicing READY (stale blocked flags were wrong — P/N master had everything since April 7). D10 config drift closed (main c9d097e, feature/shipping-agent-v5 3b7cb75).
→ ~/norris-agent/session_summaries/SESSION_2026-04-19_ClaudeAi_Evening_v4_NC_Bulletproof_PathA.md

### 2026-04-19 — NorrisControl v3.1 Build + Closeout
Three-pass spec iteration (v1 Legacy → v2 Claude → v3 separation of concerns → v3.1 paste bug fix). CC built 9 files / 3,529 lines / 33 tests passing. Commits on main: 4eadfce (core), 61468bc (telegram_send.py), 5beafa5 (idle pattern), 0962449 (session ledger). End-to-end live test: task retry_1776626856 completed 10.64s. Memory synced across 8 locations (Legacy + Drive 00_Living_Memory + 02_Handoffs + Google Doc + Gmail drafts + Roadmap Sheet + G Brain + NorrisPalace).
→ ~/norris-agent/session_summaries/SESSION_2026-04-19_ClaudeAi_NorrisControl_v3-1_Ledger.md

### 2026-04-18 — Bridge Fix + V5 Status + NEW RULE
Converted claude_bridge.py to persistent LaunchAgent. Upgraded model strings to claude-opus-4-7 across config.json + agent_runner.py + bridge --model flag. Discovered bridge is a STUB (accepts tasks, writes placeholder outbox, never spawns claude -p — fix deferred). V5 Shipping Agent stopped at CONDITIONAL GO gate: 18 READY records, $11,015 total, 44.7% variance vs V4 is Dealer Pricing Rule working correctly (NOT a money discrepancy). Locked NEW STANDING RULE: Session Summary System — every Claude session produces dated 11-section summary before ending, ~/norris-agent/MEMORY_session_summary_rule.md.
→ ~/norris-agent/session_summaries/SESSION_2026-04-18_ClaudeAi_Bridge_V5_NewRule.md

### [LIVING_MEMORY_UPDATE] Session: SA V5 Readiness Handoff — 2026-04-20
[LIVING_MEMORY_UPDATE] Session: SA V5 Readiness Handoff — 2026-04-20

Session dates: 2026-04-20, approximately 10:30 AM – 2:00 PM CT
Machine: M5 MacBook Pro → Claude.ai (Legacy Bot project)
Model: Claude Opus 4.7
Outcome: Session ended for comprehensive handoff to fresh Claude session. No production writes this session; all cleanup/execution deferred to next session with full handoff in place.

═══════════════════════════════════════════════════════════════════════════════
1. ONE-LINE SUMMARY
═══════════════════════════════════════════════════════════════════════════════

SA V5 readiness session that recovered V5 report + qb_baseline from feature/shipping-agent-v5 branch, verified all 18 parsed records, identified UPS tracking auto-verification as THE load-bearing capability currently stubbed in V5 code, and built a comprehensive handoff document for a fresh Claude session rather than attempting execution under context pressure.

═══════════════════════════════════════════════════════════════════════════════
2. WHY THIS SESSION EXISTED
═══════════════════════════════════════════════════════════════════════════════

SA V5 build stuck at Section U readiness gate since April 17 (PID 91997 on M1). $17K+ uninvoiced backlog blocked by variance flags (44.7% off V4 baseline), 3 missing S-IDs (S008/S009/S010), junk SDs from rogue email classifier, and unclear Chain Electric reconciliation state. Saturday April 18 work had produced $8,930.48 locked Chain Electric invoice but hadn't been fully reconciled into V5. Aaron needed session to finalize and unblock V5 GO.

═══════════════════════════════════════════════════════════════════════════════
3. WHAT WAS ACCOMPLISHED
═══════════════════════════════════════════════════════════════════════════════

- Recovered V5 readiness report (4,459 bytes) + qb_baseline_v5.md (2,033 bytes) via git stash + checkout feature/shipping-agent-v5. Files had been hidden since Aaron checked out main Sunday evening.
- Read full V5 dashboard: 18 SDs parsed, $11,015 total READY, 44.7% variance vs V4 baseline ($7,610), 8 S-IDs present (S001-S003, S005-S007, S011, S012), 3 missing (S008, S009, S010).
- Cross-referenced against Legacy's April 7 UPS tracking verification (5 Mar 20 orders with tracking + addresses) AND Saturday April 18 Chain Electric reconciliation ($8,930.48 locked).
- Legacy ran read-only VERIFY prompt (Parts A/B/C) — confirmed 4 junk SDs (CARLOS, EDEVANSEUFMCCOM, GHK, RICHARD-0413), identified email classifier gap at order_monitor.py line 72, verified 6 records across sources. NO WRITES were made by Legacy.
- Aaron confirmed:
  * Crosby-0325 (dated Mar 25) is the TOSSED order — Coy was OOO 13 days, never shipped, another similar order replaced it later (DELETE, not KEEP)
  * P/N trumps description: NU-BC-2834-F correct; "NU-BC-2834-ARCH" was Aaron's verbal shorthand that got baked into import
  * UPS tracking auto-verification is THE LARGEST need and reason for the entire SA build
  * Chain Electric ground truth: AJ and Jeremy matching orders, Boss drop-shipped 2834s to BOTH, Aaron supplemented 2834-F (ARCH) to BOTH, 15 units per location, 30 total
- Handoff document built at /mnt/user-data/outputs/SA_V5_HANDOFF_2026-04-20.md (39,684 bytes, 12 sections A through L).

═══════════════════════════════════════════════════════════════════════════════
4. WHAT FAILED / WENT WRONG
═══════════════════════════════════════════════════════════════════════════════

- V5 scripts temporarily invisible because Aaron had checked out main on April 19 evening (scripts only live on feature branch — never merged). Resolved via git branch switch.
- UPS tracking stub in V5 code was not previously flagged as critical-path. Now properly identified.
- Session approached context compaction limit before execution could begin. Right call was made to stop and build handoff rather than rushing execution.
- Aaron was concerned sharing VERIFY prompt with Legacy might have "messed things up" — it did NOT. Legacy's VERIFY was strictly read-only. No reversal needed.
- P/N notation in qb_baseline ("NU-BC-2834-ARCH") is wrong and was only caught this session by explicit Aaron correction. Cleanup needed in SD rendering pipeline.

═══════════════════════════════════════════════════════════════════════════════
5. CURRENT STATE
═══════════════════════════════════════════════════════════════════════════════

GIT:
- On branch feature/shipping-agent-v5
- Stash: pre-v5-recovery-stash-20260420-123616 (holds Aaron's main-branch work)
- Last V5 commit: 9986cbd "V5/G-U: intake, SD builder, Boss crosscheck, hunt ladder, sheet sync, portal sync, audit log, readiness gate"
- Branch has NEVER been merged to main

CC SESSION:
- PID 91997 still alive (as of last visibility check)
- Not in cc-main tmux — separate Terminal window
- At Section U gate waiting for GO / HOLD / ISSUE / RECONCILE
- Visibility of the window on M1 screen: UNCONFIRMED (verify with Aaron)

V5 PARSED RECORDS (18 SDs):
- KEEP (real): ABADIE-0331, ABADIE-0407-BYB0001, AJ-0331-ChainElectric, AJ-0331-B-JeremyBrown, AJ-0401-ARCH, JeremyBrown-0401-ARCH, BEDWELL-0407, DOMINION-4501057807-0413, LINETEC-0402, LINETEC-0406, LINETEC-THORNHILL-0413, THORNHILL-DEPT732-0408
- DELETE (junk): CARLOS-0416, EDEVANSEUFMCCOM-0416, GHK-0416, RICHARD-0413
- DELETE (stale/tossed): CROSBY-0325 (Mar 25 tossed order)
- ARCHIVE (superseded): JeremyBrown-0331
- ARCHIVE (test): SD-TEST-DEMO (not in parse, present in output dir)

MISSING SDs TO RENDER (verified data available):
- Thornhill DEPT468R Mar 20 — 1× NU-BC-2851 — tracking 1Z2W49000395021357 — $305
- Crosby/Dominion Mar 20 — 6× NU-BC-2834 — 2 tracking nums — paid via Dominion #2000007308 — $1,590
- Pickle/Florence Mar 20 — 3× NU-BC-2834 + 1× NU-BC-2834-C + 2× NU-BC-2834-F — tracking 1Z2W49000328351797 — $1,710
- Myers/AEP Roanoke Mar 20 — 2× NU-BC-2834-F + 1× NU-BC-2834-C — tracking 1Z2W49000395012652 (UPS clerical error shows "ABSHIRE/CHAIN ELECTRIC") — $915
- Benz/SWEPCO Mar 20 — 1× NU-BC-2851 Truck #860377 — tracking 1Z2W49000393585850 — $305
- AJ-BOSS-0401-Hattiesburg (JSON exists, HTML render missing) — 5× NU-BC-2834 vendor_dropship

CRITICAL GAP:
- UPS tracking auto-verification in V5 Hunt Ladder is STUBBED (returns None pending UPS API key). This is the load-bearing capability for solving the $17K+ backlog. Decision pending: Option A (build live before GO) vs Option B (ship with stub, add in V5.1).

═══════════════════════════════════════════════════════════════════════════════
6. OPEN DECISIONS (FOR AARON — NEW SESSION FIRST FOUR QUESTIONS)
═══════════════════════════════════════════════════════════════════════════════

D1. Option A (UPS tracking live before GO, 2-4 extra hours, V5 ships fully functional) vs Option B (ship with stub, V5.1 adds UPS this week, CB can't cleanly invoice for ~5 more days). Aaron's stated position favors A. Confirm.
D2. Is SA V5 Terminal window PID 91997 still visibly open on M1?
D3. Did Boss Products resend invoices 6775/6776/6777 (Thayne Grove request from April 18)? Needed for AJ-BOSS-0401-Hattiesburg vendor_invoice field.
D4. Current time in Birmingham AL for time-stamped session operations.

═══════════════════════════════════════════════════════════════════════════════
7. TASKS FOR NEXT SESSION (PRIORITIZED)
═══════════════════════════════════════════════════════════════════════════════

T1. Read /mnt/user-data/outputs/SA_V5_HANDOFF_2026-04-20.md completely — every line, no skimming
T2. Run 14 search queries from handoff Section H
T3. Ask Aaron the 4 confirmation questions (Section I)
T4. Wait for answers before producing execution prompts
T5. Execute cleanup Parts 1-8 with Aaron review between:
    Part 1 — DELETE 4 junk + 1 stale SD
    Part 2 — ARCHIVE test + superseded SD
    Part 3 — RENDER 6 missing HTMLs from verified data
    Part 4 — shipments.json normalization + stale flag purge
    Part 5 — SD auto-builder email filter patch (order_monitor.py line 72)
    Part 6 — UPS tracking live (IF Aaron picks Option A)
    Part 7 — Commit + re-run shipping_readiness_gate.py dry-run
    Part 8 — Aaron types GO, Section V writes, merge to main, stash pop
T6. Fire [LIVING_MEMORY_UPDATE] Gmail drafts at milestones
T7. After V5 ships, update LEGACY_LIVING_MEMORY.md and ROADMAP_DEFERRED.md

═══════════════════════════════════════════════════════════════════════════════
8. FILES CREATED / MODIFIED THIS SESSION
═══════════════════════════════════════════════════════════════════════════════

Claude environment:
- /mnt/user-data/outputs/SA_V5_HANDOFF_2026-04-20.md (39,684 bytes)
- /home/claude/SA_V5_HANDOFF_2026-04-20.md (working copy)

Aaron's M1:
- ~/Desktop/v5_readiness_2026-04-20_dryrun.txt (earlier dry-run capture)
- ~/Desktop/v5_readiness_2026-04-20_freshrun.txt (later dry-run capture)
- Git state: switched from main to feature/shipping-agent-v5; stash created

NO writes to production canonical data this session:
- shipments.json: UNTOUCHED
- SD HTML files: UNTOUCHED
- sa_learnings.json: UNTOUCHED
- classifier_negative_examples.json: UNTOUCHED

═══════════════════════════════════════════════════════════════════════════════
9. KEY QUOTE / LESSON
═══════════════════════════════════════════════════════════════════════════════

Aaron, 2026-04-20:
"I WILL NOT SACRIFICE ANYTHING for speed! (I hope AND I pray, I literally HAVE BEEN that we are truly SO close to having it complete BUT I WILL NOT SACRIFICE ANYTHING for speed!)"

Lesson: The Option A vs Option B decision on UPS tracking isn't a velocity tradeoff — it's a quality-bar decision. UPS tracking auto-verification IS the reason V5 exists. Shipping V5 without it means CB still can't cleanly invoice, which is Aaron's primary pain point. The build doesn't ship meaningfully without this capability live.

═══════════════════════════════════════════════════════════════════════════════
10. CONTEXT THAT MUST PERSIST
═══════════════════════════════════════════════════════════════════════════════

- UPS tracking auto-verification is THE load-bearing capability (Aaron: "THE LARGEST need and reason for this entire SA BUILD")
- Use case: post-ship, cross-reference tracking # against iShip/UPS emails OR UPS website to fill missing invoice data. NOT pre-ship address verification.
- Constraint: minimal API spend, only trigger on real reasons (mismatch, missing data, NEEDS_REVIEW flag)
- P/N trumps description always — NU-BC-2834-F, never NU-BC-2834-ARCH
- Chain Electric structure: AJ + Jeremy matching orders, Boss drop 2834s BOTH locations, Aaron ARCH supplement BOTH locations, 30 units total, $8,930.48 locked invoice
- Legacy's April 20 VERIFY prompt was READ-ONLY — no reversal needed
- Crosby-0325 is the Mar 25 TOSSED order (DELETE, not KEEP)
- Email classifier gap at order_monitor.py line 72 produced CARLOS/EDEVANSEUFMCCOM/GHK junk SDs
- New session must read handoff file COMPLETELY before acting
- Aaron is exhausted (hasn't ridden in weeks, back/eyes hurt, 5+ hours Saturday on cleanup); will not sacrifice quality for speed
- Wayne standard applies; must be genuinely earned

═══════════════════════════════════════════════════════════════════════════════
11. NEW SESSION KICKOFF PROCEDURE
═══════════════════════════════════════════════════════════════════════════════

Aaron starts new Claude.ai session in the Legacy Bot project and attaches /mnt/user-data/outputs/SA_V5_HANDOFF_2026-04-20.md as the first message (or uploads and pastes opening line). New Claude:
1. Reads handoff line by line (39,684 bytes, 12 sections)
2. Runs Section H searches (14 queries)
3. Asks 4 confirmation questions before acting
4. Executes cleanup with Aaron review between each Part
5. Fires [LIVING_MEMORY_UPDATE] drafts at milestones

Authoritative handoff document: /mnt/user-data/outputs/SA_V5_HANDOFF_2026-04-20.md

END OF MEMORY UPDATE.


### [LIVING_MEMORY_UPDATE] Session: Roadmap Expansion + Memory Reconciliation + Service Token Rotation Prep — 2026-04-20
═══════════════════════════════════════════════════════════════════
SESSION SUMMARY — 2026-04-20
═══════════════════════════════════════════════════════════════════

1. HEADER
- Session ID: 2026-04-20-roadmap-reconciliation
- Date: Monday, April 20, 2026
- Time: ~11:30 AM → ~2:30 PM CT
- Claude: Opus 4.7 (claude-opus-4-7), Claude.ai web (M5)
- Tool: Claude.ai project "Legacy" (Aaron pasted prompts to Legacy via Telegram and to CC on M1 via Universal Control)
- Project: Norris Utilities / Legacy
- Conversation title: Session following Cloudflare Zero Trust + JS Gate Replacement

2. ONE-LINE SUMMARY
Expanded project-roadmap.html, reconciled Legacy memory gaps surfaced during expansion, flagged service token .env gap, prepared new-session handoff for continuation.

3. WHY THIS SESSION EXISTED
Prior session (April 20 AM) shipped Cloudflare Zero Trust (commit 75b90a058144, wrangler 67fa74ae) to norrisops.com with 30-day rolling Access session. This session opened to (a) verify memory integrity across NorrisPalace/Living Memory/.env/scripts, (b) update the live project-roadmap.html to reflect April 20 work, (c) scope the Live Roadmap System build that makes the roadmap a real-time data-driven portal module.

4. WHAT WAS ACCOMPLISHED
- Claude updated the standalone dependency-map HTML artifact in project knowledge. LATER REALIZED ORPHAN — not referenced by portal, not automation-linked. Zero live effect. Flagged this mistake to Aaron.
- Legacy ran roadmap intel report. Confirmed: ~/norris-ops/internal/project-roadmap.html is live at ops.norrisutilities.com/internal/project-roadmap.html (and via norrisops.com through Cloudflare Access). Standalone dependency-map file is NOT in norris-ops and NOT referenced by any automation.
- CC ran combined memory integrity + roadmap audit. Findings: NorrisPalace rules/cloudflare-zero-trust-norrisops MISSING; Living Memory April 20 entry PRESENT; .env Cloudflare keys 9/11 (two missing); sync_norrisops_pages.sh at ~/norris-ops/scripts/ MISSING; post-commit hook PRESENT and actually calls ~/norris-agent/scripts/sync_norrisops_pages.sh (path mismatch with Phase A4 audit); repo had dirty tree (docs/LEGACY_LIVING_MEMORY.md, .wrangler/).
- CC stopped at Phase C because no Cloudflare card existed in project-roadmap.html to str_replace. Correct call. Waited for Aaron's say-so.
- Legacy d746a19: expanded project-roadmap.html with 13 items added, 3 modified (Shipping Agent V5 spec + PID 91997, Alabama License URGENT, Time Machine URGENT). Did NOT add Cloudflare card (out of scope per Prompt 2). Google Sheet got 13 TIMELINE rows. Living Memory e8f35a6.
- Aaron pushed back that Pickle and Myers were wrongly marked BLOCKED in d746a19. Claude re-searched conversation history and confirmed: Pickle + Myers P/Ns confirmed April 8 from FlexPro Armor pricing master, stored in NorrisPalace April 8, marked READY TO INVOICE in portal that day. Legacy's d746a19 was stale on that point.
- Claude produced Prompt 3 v2 with real data (P/N totals, trackings, Abshire=Myers alias, BCB=Bag correction, P/N-never-P/N terminology, acnorris1@gmail.com CONFIRMED CONNECTED).
- Legacy executed Prompt 3 v2:
  * Commit 81ad992: Pickle → READY $1,710, Myers → READY $915 (with Abshire alias + SA V5 cross-check flag), Cloudflare Zero Trust card added to Infrastructure section
  * Commit 07624b3: 10 NorrisPalace keys written (terminology-locked-apr19, customer-aliases-canonical, pricing-v5-locked, branding-v5-locked, sd-v5-locked, portal-v5-locked, cloudflare-zero-trust-norrisops, do-not-resurface, personal-gmail-connected, model-default-apr19); Living Memory April 20 entry; .wrangler/ gitignored
  * Mirror: ops.norrisutilities.com HTTP 200, norrisops.com HTTP 302 (Access auth redirect, expected)
- Identified two blockers before Live Roadmap System build can start:
  (a) Service Token Client ID + Client Secret missing from .env (old secret never captured; Aaron must rotate in Cloudflare Zero Trust → Access controls → Service credentials → Legacy Automation Token → rotate → paste both strings back)
  (b) sync_norrisops_pages.sh does not exist at ~/norris-agent/scripts/ — post-commit hook logs error on every push (manual wrangler deploys have been happening; "automation" isn't real yet). CC prompt ready to build it.
- Drafted Live Roadmap System BUILD prompt (Prompt 5): JSON truth at ~/norris-ops/data/roadmap.json + rebuilt project-roadmap.html fetches JSON + update_roadmap.py write helper + all 8 connection points (G Brain, Living Memory, index stat card, session summary Gmail deltas, Google Sheet, Telegram, portal celebration, git log drawer). Full brand compliance, 8 feature set including SVG dependency lines, git log drawer, PDF export, phoenix rise on DONE. ON HOLD until prerequisites clear.

5. WHAT FAILED / WENT WRONG (HONEST)
- CLAUDE: Updated the orphan dependency-map HTML artifact without first verifying whether it was live in the portal. Should have used Legacy intel report or project knowledge search as step 1. Aaron had to push me to check.
- CLAUDE: First Prompt 3 version marked Pickle + Myers BLOCKED instead of READY. Had the truth available in conversation history from April 8; didn't search hard enough the first pass. Aaron called this out — legitimate criticism.
- CLAUDE: Used "P/N" terminology in early output. Aaron's locked rule since April 19 is P/N never P/N. Corrected.
- CLAUDE: Used "Shield" for the BCB accessory in an earlier response. BCB = Bucket Cover Bag ($55 accessory). Never "Shield." Master may have "SL" suffix mislabel. Corrected.
- CLAUDE: Proposed closing earlier Cloudflare CC windows before suggesting Aaron check them for unfinished state. Ordering wrong. Aaron closed them before I flagged the check. Aaron called this out — legitimate criticism.
- PRIOR SESSION (documented): Service Token Client Secret was shown once at token creation on April 20 AM and never captured into .env. Only UUID (15b9bf39...) was stored. Remediation = rotation in Cloudflare dashboard.
- PRIOR SESSION (documented): sync_norrisops_pages.sh was referenced by post-commit hook but never actually written. Every git push logs an error. Manual wrangler deploys covering the gap. Remediation = write the script from CC prompt, dry-run test.

6. CURRENT STATE
- project-roadmap.html: LIVE at ops.norrisutilities.com/internal/project-roadmap.html and norrisops.com/internal/project-roadmap.html. Current commits: d746a19 + 81ad992 + 07624b3 (all pushed, mirror verified). Static HTML, no JSON backing (that's the Live Roadmap System build).
- NorrisPalace: 10 authoritative rule keys written under rules/*-v5-locked and facts/personal-gmail-connected. Older conflicting keys may exist but new keys are authoritative.
- LEGACY_LIVING_MEMORY.md: April 20 entry present (07624b3).
- .env: 9/11 Cloudflare keys present. Missing CF_SERVICE_TOKEN_CLIENT_ID + CF_SERVICE_TOKEN_CLIENT_SECRET. Rotation in progress.
- Mirror automation: POST-COMMIT HOOK CALLS MISSING SCRIPT. Manual deploys work via CLOUDFLARE_API_TOKEN. Script build pending.
- Pickle / Florence Electric + Myers / AEP Roanoke invoices: READY TO INVOICE per rules/customer-aliases-canonical (Abshire = Sammy Myers). CB unblocked to create these invoices in QB.
- Myers UPS tracking label mismatch: SA V5 test case documented, not blocking invoice.

7. OPEN DECISIONS (AARON)
- Rotate Service Token in Cloudflare Zero Trust dashboard (Aaron on Service Credentials page, Legacy Automation Token visible, three-dots → Refresh). After rotation: paste Client ID and Client Secret for Legacy to add to .env.
- After .env complete and sync script built: GO or edit on Live Roadmap System build (Prompt 5 ready). Aaron said "this is fine for a 1st run build" on the design spec. Feature checkboxes not individually answered; interpret as all 8 features included for v1.
- Verify Aaron's question in next session: "did me sharing with Legacy and asking it to do and save everything mess things up?" — to answer with explicit evidence from memory systems (Legacy only mutates on explicit writes, sharing transcripts does not corrupt storage).
- Decide whether to delete the orphan nu_project_roadmap_dependency_map.html artifact from Claude.ai project knowledge (redundant with live portal file).

8. TASKS FOR NEXT SESSION (PRIORITIZED)
1. URGENT: Answer "did sharing with Legacy mess things up" — verify from memory system audit, don't hand-wave.
2. Collect Service Token Client ID + Client Secret from Aaron post-rotation. Paste-ready one-line Legacy prompt to append both to .env.
3. Send CC the sync_norrisops_pages.sh build prompt (ready in prior turn). Wait for dry-run pass.
4. Send Legacy Prompt 5 (Live Roadmap System build) with all 8 features.
5. Verify build outcome: manual test update_roadmap.py --status → JSON updates → commit → mirror → Sheet row → Telegram → portal celebrates.
6. Delete orphan nu_project_roadmap_dependency_map.html from project knowledge (or leave for reference, flagged).
7. Update LIVING ROADMAP dependency map visualization to reflect Chain 5 Portal Security COMPLETE.
8. Schedule CB walkthrough of norrisops.com via Google Calendar (not yet scheduled; email sent morning of April 20).
9. Session summary Gmail draft at session end per protocol.

9. FILES CREATED / MODIFIED THIS SESSION
- ~/norris-ops/internal/project-roadmap.html (modified by Legacy, commits d746a19 + 81ad992)
- ~/norris-ops/.gitignore (added .wrangler/)
- docs/LEGACY_LIVING_MEMORY.md (April 20 entry added, commits 07624b3)
- NorrisPalace: 10 keys written (listed in §6)
- Google Sheet 1dZ7YIhdjX7XgtKUkbd-4LUErI1uu0EuR3omwyp3K0Zg: 13 TIMELINE rows + 9 additional rows for reconciliation items
- Claude.ai project knowledge orphan: nu_project_roadmap_dependency_map.html (Chain 5 updated to DONE — orphan, no live effect)

10. KEY QUOTE / LESSON
Aaron: "I am not sending the Prompt to Legacy unless you tell me to and its still good or get me an updated, better, LIVING AND REAL DATA containing PROMPT!"
Lesson: Never produce a Legacy prompt with placeholder "BLOCKED — unconfirmed" status when actual confirmed data exists in conversation history or project knowledge. Search first, compose second. Real data, not templates.
Aaron: "its NEVER SKU!"
Lesson: P/N, always. Retroactive cleanup in all outputs.
Claude's own lesson: When updating any file claimed to be "live," step 1 is verify the file is actually referenced by the live system. The dependency-map orphan incident cost 45 minutes and Aaron's trust.

11. CONTEXT THAT MUST PERSIST
- FlexPro Armor: NO ® EVER. Bare name only. NEVER "FlexPro Armor Guard."
- P/N (Part Number), NEVER SKU.
- BCB = Bucket Cover Bag ($55). NEVER "Shield."
- Aaron wife Caroline Norris ≠ admin CB Caroline Butler. CB = Butler always.
- Dealer formula: ROUND(Direct × 0.80, nearest $5). 20% off. D-Shape excluded. Distributor tier does NOT exist in V5.
- Shipping: Direct ×1.10, Dealer ×1.05 (Ben's Formula half-markup).
- Customer aliases: Abshire = Sammy Myers. Wayne Crosby = Coy Crosby (Dominion PO system artifact). Aerial Hydraulics = Wayne Abadie. Florence Electric = Darrell Pickle.
- CB celebrations IDENTICAL to Aaron. No downgrade EVER.
- Default model Claude Opus 4.7. Budget cap $120/mo API.
- Cloudflare Zero Trust live on norrisops.com with 30-day Access session.
- ops.norrisutilities.com held 2-4 weeks as parallel fallback.
- Post-commit hook path canonical: ~/norris-agent/scripts/sync_norrisops_pages.sh (file does NOT exist yet — build pending).
- Service Token UUID (CF_LEGACY_TOKEN_UUID = 15b9bf39...) is identifier only; Client ID + Client Secret are separate strings, missing from .env, rotation in progress.
- Investigation principle: exhaust evidence to 100% certainty before asking Aaron. Never guess. Log resolutions to sa_learnings.json.
- Gridco/Cunningham DEAD. Terry Mayfield (BSS) deceased 2024. Wayne bench/Shoal Creek hold quietly. MSP Ordering Portal DO NOT LAUNCH.


### [LIVING_MEMORY_UPDATE] Session: SA V5 Session 2 CC Prompt Drafted — 2026-04-20
COMPLETED:
- Read handoff REV.1 and REV.2 end to end (both versions).
- Searched project knowledge and past chats per Section J step 3 queries.
- Confirmed key audit findings via past chat search: V5 is 123-LOC stub, Hunt Ladder missing customer_db rung, 5 process rules schema-defined not enforced, internal_s_id tags scrambled, Chain Electric Saturday reconciliation locked at $8,930.48 with matching AJ/Jeremy orders structure.
- Answered Aaron's Legacy question: her April 20 morning verify was read-only, did not mess anything up.
- Drafted complete Session 2 CC prompt (~1,096 lines / 47KB) covering all 11 audit-derived tasks (D.1–D.11) plus 5 review gates (Gate 0 stash restoration through Gate 5 merge to main).

DECISIONS:
- Session 2 build order locked: Gate 0 (stash) → D.7 prep (S-ID map) → Gate 1 (Aaron sign-off) → D.7 apply → D.10 (classifier patch) → D.9 (junk cleanup) → D.2 (customer_db_lookup) → D.3 (name_aliases_lookup) → D.4 (5 rules validators) → D.5 (invoice_prep) → D.6 (UPS multi-method) → Gate 2 (method selection) → D.8 (SD renders) → D.1 (run_pipeline) → D.11 (living memory auto-update) → Gate 3 (architecture review) → dry-run → Gate 4 (write approval) → live write → Gate 5 (readiness + merge).
- UPS tracking: 8 methods + Aaron-assist fallback. No method declared infeasible without live test against the 5 known-good March 20 trackings.
- Chain Electric $8,930.48 locked as invoice_prep regression test — failure halts build.
- Pickle proof test: customer_db_lookup must return 611 East Reeder Street, Florence AL 35630. Failure halts build.

CHANGED:
- Tone toward Aaron this session: direct execution, no permission-seeking, no break-offering. Responds to "ONLY ACTIONS" directive.

BLOCKED:
- None currently. Aaron holds the next action (paste the CC prompt into Claude Code on M1).

NEXT:
- Aaron pastes SA_V5_SESSION2_CC_PROMPT.md into cc on M1.
- CC reads the audit, fires Tier 1 Telegram, hits Gate 0 (stash restoration).
- Aaron approves each of 5 gates in sequence.
- Session 3 (post-merge) restores stash@{1} (pre-v5-recovery-stash-20260420-123616) — still waiting.

FILES:
- Created: /mnt/user-data/outputs/SA_V5_SESSION2_CC_PROMPT.md (~1,096 lines, 47KB)
- Referenced: ~/norris-agent/output/reports/SA_V5_AUDIT_2026-04-20.md (on M1 only)
- Referenced: ~/norris-agent/LEGACY_LIVING_MEMORY.md
- Expected output during Session 2 CC execution (not yet created):
    output/reports/s_id_remap_proposal_2026-04-20.md
    output/reports/sd_cleanup_2026-04-20.md
    output/reports/ups_tracking_methods_2026-04-20.md
    output/reports/SA_V5_SESSION2_BUILD_COMPLETE_2026-04-XX.md
    output/reports/dryrun_writeset_{timestamp}.json
    output/reports/shipping_agent_readiness_v5_2026-04-XX.md
    lib/truth_sources.py (customer_db_lookup + name_aliases_lookup)
    lib/process_rules.py (5 validators)
    lib/invoice_prep.py
    lib/ups_api.py, lib/ups_browser.py, lib/ups_selenium.py, lib/ups_email_parser.py, lib/ups_crossvalidate.py
    lib/living_memory.py
    data/name_aliases.json
    data/classifier_negative_examples.json (updated)
    data/hunt_attempts.jsonl (created)
    data/sa_learnings.json (updated)
    6 SD HTMLs under output/internal/sds/
    tests/test_customer_db_lookup.py, test_name_aliases.py, test_process_rules.py, test_invoice_prep.py, test_ups_tracking.py, test_order_monitor_classifier.py


### [LIVING_MEMORY_UPDATE] Session: Benz SD canonical recovered + S-ID rule v1 locked — 2026-04-20
COMPLETED:
- Recovered canonical Benz/SWEPCO SD record (SD-2026-BENZ-SWEPCO-0320) from past session history (April 7 Legacy verification + April 13 Shipping AI Agent dry-run + April 14 Section 6 canonical execution).
- Locked Gate 1 GO decision: S-ID rule v1, year-prefixed monotonic S-YYYY-NNN format. Retro-assigned 12 records S-2026-001 through S-2026-012 (ship_date ASC). Full crosswalk preserved across agent fixup_sd_customers.py + ops/shipments.json hand-curated schemes.
- CC drafted lib/sid.py with 17 passing tests including 8-process concurrency, seed log with 12 active S-IDs, full crosswalk doc, rule spec doc.
- Drafted supplemental ISSUE for D.8 to lock canonical SD data for Benz and the other 4 March 20 shipped+uninvoiced records (Thornhill DEPT468R, Pickle, Myers, Crosby).

DECISIONS:
- S-ID format locked: S-YYYY-NNN. Year prefix from ship_date year. Monotonic at creation, never renumbered, never reused after delete (tombstoned in sid_issuance_log.jsonl).
- Customer-facing: NO. S-IDs are internal agent handles only. Never on invoices, customer emails, QB memos, or SDs.
- Persistence rule for canonical SD data: must live in 4 redundant sources — customer_db.json, sa_learnings.json, LEGACY_LIVING_MEMORY.md, and the SD HTML file. If next session can't find a canonical record in at least 3 of 4 sources, the persistence rule failed and it's a Tier 1 flag.

CHANGED:
- Pattern fix: Aaron called out that the Benz SD record has been "found and lost" repeatedly across sessions. Persistence-across-4-sources rule wired to prevent recurrence.
- D.8 scope clarified: render 6 missing SD HTMLs uses canonical data when available, does NOT re-hunt for fields already locked in past sessions.

CANONICAL SD RECORD — BENZ/SWEPCO (LOCKED, DO NOT FALL OUT AGAIN):
  SD ID: SD-2026-BENZ-SWEPCO-0320
  Customer: Jimmy Benz
  Company: SWEPCO (AEP subsidiary)
  PO: Truck #860377
  Products: 1× NU-BC-2851 @ $305
  Tracking: 1Z2W49000393585850
  Ship Date: 2026-03-20
  Delivered: 2026-03-24 (via pkginfo@ups.com)
  Ship To: Fayetteville, AR (full address in customer_db.json)
  NU Cost: $52.16 | Customer Charge: $94 (Ben's Formula)
  Status: SHIPPED + DELIVERED + UNINVOICED
  Invoice total: $305 + $94 = $399
  Source: Apr 7 Legacy + Apr 13 SA dry-run + Apr 14 Section 6 canonical

OTHER 4 MARCH 20 RECORDS WITH SAME PERSISTENCE NEED:
  - SD-2026-LINETEC-0320-DEPT732 / Thornhill / 1Z2W49000395021357 / $305+$91 / DEPT468R
  - SD-2026-CROSBY-0320 / Coy Crosby / Dominion / 1Z2W49000395006856 + 1Z2W49000328343091 / qty disputed (Aaron says 5, records show 6)
  - SD-2026-PICKLE-FLORENCE-0320 / Pickle / 1Z2W49000328351797 / $1,710+$62 / 3×NU-BC-2834 + 1×NU-BC-2834-C + 2×NU-BC-2834-F (canonical confirmed Apr 14)
  - SD-2026-MYERS-AEP-0320 / Sammy Myers (UPS log says "Abshire" — clerical error) / 1Z2W49000395012652 / Roanoke VA / ARCH+Combo

BLOCKED:
- None. Awaiting Aaron's GO reply to CC for Gate 1 + D.8 supplemental.

NEXT:
- CC applies S-ID rule v1 (agent + ops, two parallel commits)
- CC proceeds to D.10 (classifier patch), D.9 (cleanup), D.2 (customer_db_lookup), D.3 (name_aliases), D.4 (5 process rule validators), D.5 (invoice_prep), D.6 (UPS multi-method, Gate 2), D.8 (SD renders with canonical data lock + 4-source persistence), D.1 (run_pipeline orchestrator), D.11 (living memory auto-update), Gates 3-5.

FILES:
- lib/sid.py (drafted, 17 tests passing)
- data/sid_issuance_log.jsonl (12 events seeded)
- data/sid_crosswalk.json (drafted)
- output/docs/SID_RULE_v1_2026-04-20.md (drafted)
- output/docs/SID_CROSSWALK_v1_2026-04-20.md (drafted)
- Re-emitted: output/reports/s_id_remap_proposal_2026-04-20.md
- Backups planned: data/shipping_docs.json.bak.pre-sid-v1-2026-04-20 + ops parallel
- Pending on D.8: SD-2026-BENZ-SWEPCO-0320.html canonical regeneration if file lost
- Pending on D.8 + 4-source persistence rule: 5 March 20 canonical records persisted to customer_db.json, sa_learnings.json, LEGACY_LIVING_MEMORY.md, output/internal/sds/


### [LIVING_MEMORY_UPDATE] SA V5 S2 — D.10 complete — 2026-04-21T01:16Z
[LIVING_MEMORY_UPDATE] SA V5 S2 — D.10 complete — 2026-04-21T01:16Z

## COMPLETED
- D.10 classifier hardening: scripts/order_monitor.py NEGATIVE_PATTERNS + MIN_CONFIDENCE=0.70 gate.
- data/classifier_negative_examples.json seeded v5.1.0 with 3 patterns (EUFMC / GHK / Carlos-Globaltec-no-NU-context).
- tests/test_order_monitor_classifier.py — 13 tests, all pass.
- Combined test suite (D.7 sid + D.10 classifier): 30/30 green.
- Quiet-hours guard refactored into __main__ so module is importable at any hour.

## DECISIONS
- Negative patterns use must_not_contain_any_of for context-aware filtering (e.g. "Carlos + FlexPro + NU-BC" should NOT be filtered even though it contains "Carlos").
- Below-MIN_CONFIDENCE candidates go to data/classifier_deferred.jsonl for weekly review (never auto-SD).
- Scoring: 0.50 known-customer + 0.30 subject signal + 0.20 snippet signal + 0.20 PO + 0.10 product mention, capped at 1.0.

## CHANGED
- scripts/order_monitor.py (+119 LOC)
- data/classifier_negative_examples.json (v5.0.0 empty → v5.1.0 with 3 patterns)
- tests/test_order_monitor_classifier.py (new, 200 LOC)

## BLOCKED
None.

## NEXT
D.9 (delete 4 junk SDs + archive 2 superseded), then D.2/D.3 Hunt Ladder rungs, D.4 rules validators, D.5 invoice_prep. Aaron authorized autonomous run through Gate 2.

## FILES
- Commit 7cf5392 on feature/shipping-agent-v5
- Branch not pushed (Gate 5 merge deferred)
- Session 2 prior commits: fbd4195 (Rule v1 migration), 5e09fa7 (proposal Applied), a6f8553 (stash restore), 291a61e (audit artifacts).


### [LIVING_MEMORY_UPDATE] Session: SA V5 S2 — Ground Truth Captured + Master CC Prompt Emitting — 2026-04-21
Master CC Prompt being emitted now in the next turn. Aaron has explicitly stepped away and is relying on this prompt to run correctly without further Q&A from him.

GROUND TRUTH FROM PASTE A-FIX (appended to session2_resume_diagnostic_2026-04-21.md):

FEATURE BRANCH STATE — feature/shipping-agent-v5 at 7cf5392 "V5 S2 D.10: classifier NOT-filter + MIN_CONFIDENCE gate"

PRESENT on feature:
- lib/sid.py (6,382 bytes, API confirmed: issue_sid/list_active_sids/lookup_sid/migrate_old_id/tombstone_sid)
- lib/truth_sources.py (4,639 bytes)
- data/sid_crosswalk.json (1,779 bytes)
- data/sid_issuance_log.jsonl (3,065 bytes, 12 entries S-2026-001 through S-2026-012, all retro_migration_2026-04-20)
- data/shipping_docs.json (466,931 bytes — BUT loads as 0 orders; schema issue or pre-populated-pre-rule-v1 format)
- data/customer_db.json (99,682 bytes — Pickle IS present at "Florence Electricity Department", confirmed billing_address 611 East Reeder Street Florence AL 35630 US)
- data/name_aliases.json (1,432 bytes)
- data/classifier_negative_examples.json (1,592 bytes)
- data/product_catalog.json (12,524 bytes)
- data/sa_learnings.json (79 bytes — essentially empty, needs seeding)
- output/docs/SID_RULE_v1_2026-04-20.md (4,906 bytes)
- output/docs/SID_CROSSWALK_v1_2026-04-20.md (7,848 bytes)
- output/reports/SA_V5_AUDIT_2026-04-20.md (57,249 bytes)
- output/reports/qb_baseline_v5.md (2,033 bytes)
- output/reports/shipping_agent_readiness_v5_2026-04-17.md (4,459 bytes)
- output/internal/SD_MASTER_TEMPLATE.html (6,979 bytes, 14 tokens verified)
- scripts/shipping_agent_v5.py (123 lines — stub, run_pipeline exits "stages not yet wired")
- scripts/shipping_hunter.py (9,429 bytes, 263 lines — 11-rung Hunt Ladder SCAFFOLDED; iship/ups_api/ups_playwright/remarkable/sheet_direct_read are STUBS; gmail_ups_receipt/gmail_ups_delivery/boss_vendor_email are LIVE)
- scripts/shipping_readiness_gate.py (11,502 bytes)
- scripts/order_monitor.py (30,817 bytes)
- LEGACY_LIVING_MEMORY.md (116,936 bytes)

MISSING on feature (MUST BUILD):
- lib/process_rules.py (D.4 — 5 blocking validators)
- lib/invoice_prep.py (D.5 — Chain Electric $8,930.48 regression target)
- lib/living_memory.py (D.11 — Living Memory auto-update)
- lib/ups_api.py (D.6 — UPS Developer API)
- lib/ups_browser.py (D.6 — Playwright fallback)
- data/hunt_attempts.jsonl (created on first Hunt Ladder run)
- tests/test_sid.py, test_customer_db_lookup.py, test_name_aliases.py, test_process_rules.py, test_invoice_prep.py, test_ups_tracking.py

PYTHON DEPS:
- Present: requests, bs4, fcntl, pathlib
- MISSING: playwright, selenium, undetected_chromedriver, pydantic, beautifulsoup4 (bs4 present without beautifulsoup4 is weird — beautifulsoup4 installs bs4, check imports), pydantic

ENV VARS (names confirmed): ANTHROPIC_API_KEY, CF_ACCESS_CLIENT_ID, CF_ACCESS_CLIENT_SECRET, CF_ACCOUNT_ID, CF_APP_AARON_UUID, CF_APP_SHARED_UUID, CF_LEGACY_TOKEN_UUID, CF_SERVICE_TOKEN_CLIENT_ID, CF_SERVICE_TOKEN_CLIENT_SECRET, CF_TEAM_DOMAIN, CF_ZONE_ID_NORRISOPS, CLOUDFLARE_API_TOKEN, OPENAI_API_KEY, PAGES_PROJECT, PAGES_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

NOT IN ENV (critical for D.6 UPS multi-method):
- UPS_CLIENT_ID / UPS_CLIENT_SECRET (UPS Developer API still pending approval — error 182279)

DISK SPACE: 926GB disk, 873GB used, 27GB free, 98% capacity. Tight. Playwright Chromium download is ~200MB. Will work but monitor.

5 CC PROCESSES PRESERVED on M1 as breadcrumbs (do not kill).

PASTE COUNT: this session fires one Master CC Prompt to a NEW 6th CC window. Aaron walks away. Build CC works autonomously through Gate 2 (UPS method select — first mandatory pause).


### [LIVING_MEMORY_UPDATE] Session: iShip Email Delivery Fixed + Recovery In Motion — 2026-04-21
SESSION SUMMARY — iShip Email Delivery Diagnosis, Fix, and Recovery Plan
Date: 2026-04-21
Time: 9:50 AM – 11:30 AM CT (in progress)
Tool: Claude.ai Opus 4.7 (M5)
Project: Norris Utilities — Legacy Bot

============================================================
1. ONE-LINE SUMMARY
============================================================
Root cause of missing iShip notifications since 1/22 confirmed as Google Workspace edge-rejection (550-5.7.1 low sender reputation), fix deployed via admin allowlist + bypass rule, awaiting verification from today's shipments and Scott's franchise system export.

============================================================
2. WHY THIS SESSION EXISTED
============================================================
Aaron went to UPS Store #0255 this morning, ran a live test with Scott (franchise owner). Scott sent identical email to himself + Aaron. Scott received it. Aaron did not — not in inbox, not in spam, not in ProtonMail. Forwards from Scott's Gmail DID arrive. iShip pipeline broken since 1/22 = silent revenue cost data loss. Critical to fix before more shipments leave UPS without billing data captured.

============================================================
3. WHAT WAS ACCOMPLISHED
============================================================

DIAGNOSIS:
- Aaron ran Email Log Search at admin.google.com — Reporting > Audit and investigation > Email log search
- Confirmed sender iShip_Services_201@iship.com → recipient acnorris@norrisutilities.com
- Status: REJECTED (0/1 Delivered)
- Error: 550-5.7.1 "Gmail has detected that this message is likely suspicious due to the very low reputation of the sending domain. To best protect our users from spam, the message has been blocked."
- Root cause: Gmail edge-rejection at SMTP gate, BEFORE Workspace policies evaluate. User-level whitelist doesn't override this. iship.com sender reputation has degraded — likely worsened around April 2 when Google tightened bulk sender enforcement again.

FIX APPLIED (admin.google.com → Apps → Google Workspace → Gmail):

A. Address List created: "UPS Approved Senders" (7 entries)
   - iship.com (domain)
   - ups.com (domain)
   - theupsstore.com (domain)
   - upsemail.com (domain)
   - pkginfo@ups.com (specific address)
   - mcinfo@ups.com (specific address)
   - auto-notify@ups.com (specific address)
   - ALL toggles set to "Authentication required" = OFF (critical — this is what allows bypass of reputation gate)

B. Spam rule modified: "Bypass spam filters and hide warnings for messages from senders or domains in selected lists" = ENABLED
   - List used: UPS Approved Senders
   - Final saved values:
     * Aggressive spam filtering: OFF
     * Bypass internal senders: OFF
     * Bypass approved senders: OFF
     * Bypass approved senders and hide warning banners: ON  ← THIS IS THE BYPASS
     * Bypass spam filtering and hide warning banners: OFF
     * Quarantine message: OFF

C. Did NOT do (intentionally rejected to preserve security posture):
   - No second address list for vendors (over-engineering — those have proper auth)
   - No IP allowlist (iship sends through Microsoft shared infra, can't safely allowlist)
   - No DKIM/SPF/DMARC changes to norrisutilities.com (outbound auth is fine)

RECOVERY ACTIONS IN MOTION:

A. Email drafted and sent to Scott (store0255@theupsstore.com) requesting:
   1. Shipment history export from iShip/WorldShip POS for "Norris Utilities" / Aaron Norris, 1/22/26 to today
   2. Re-trigger of iShip notifications for that range (should now land with bypass live)
   3. Add acnorris1@gmail.com as 2nd notification recipient on iShip profile (parallel safety net)

B. Telegram prompt sent to Legacy on M1 to compile internal tracking inventory:
   - UPS Shipping Log V8 Google Sheet (all tabs, all tracking #s)
   - Gmail search for iship.com / theupsstore.com / 1Z pattern emails 1/22 → today
   - NorrisPalace + ~/norris-agent/data/shipments.json
   - Output: ~/norris-agent/output/tracking_recovery_list.txt (one per line, import-ready)
   - Plus: ~/norris-agent/output/tracking_recovery_summary.txt (totals, source breakdown, gap analysis)

============================================================
4. WHAT FAILED / WENT WRONG
============================================================

Claude mistakes during session (called out by Aaron, all corrected):
- Initial whitelist list included fabricated "ship.cube.com" — does not exist, hallucinated
- Listed "ups-email.com" as suspect when real domain is "upsemail.com" (no dash) — and upsemail.com IS legitimate per UPS's own published list
- Listed "mcinfo.ups.com" as a subdomain when correct is "mcinfo@ups.com" address
- Listed "quantumview.ups.com" as a subdomain that doesn't actually send (real Quantum View Notify sends from pkginfo@ups.com)
- Added "pitneybowes.com" to the address list without verifying or being asked to (Aaron caught it before save)
- Forgot to include "pkginfo@ups.com" specifically even though Aaron called it out as good
- Initially recommended a 2nd address list for FedEx/USPS/vendors — over-engineering, fixing problems that don't exist
- Initially overstated UPS API approval window and confused that with "what Claude told you yesterday" — owned and corrected
- Initially pointed Aaron to UPS.com shipping history for recovery — that only contains shipments YOU created via shipper account, not franchise-billed shipments through UPS Store. Wrong source. Real source is Scott's franchise POS.
- Initially suggested iship.com web portal for recovery — there is no customer portal, iShip is back-end software inside UPS Store POS

Process correction internalized: Verify each item against authoritative source before listing. Don't pad lists. Don't suggest sources without confirming they're accessible to the user.

============================================================
5. CURRENT STATE
============================================================

ADMIN CONSOLE — fixed and saved:
- "UPS Approved Senders" address list: 7 entries, all with auth required = OFF
- Spam rule "Bypass spam filters and hide warnings": Enabled, locally applied at norrisutilities.com OU
- Propagation window: 5–60 min standard, up to 24 hr possible

VERIFICATION PENDING:
- Aaron shipped 4–5 SDs today
- iShip notifications normally arrive within minutes of UPS receipt
- This is the natural test — if they land in inbox by EOD, fix is confirmed
- If they don't, escalate to parallel safety net (acnorris1@gmail.com as 2nd recipient via Scott)

RECOVERY PENDING:
- Scott email sent — awaiting POS export
- Legacy compilation running on M1 — awaiting tracking inventory + summary

============================================================
6. OPEN DECISIONS (AARON)
============================================================
- Whether to escalate to IP-level allowlist if today's iShip notifications don't arrive
- Whether to greenlight UPS Tracking API build as permanent email-independent solution
- Whether to add personal Gmail to iShip profile permanently (recommended yes regardless)

============================================================
7. TASKS FOR NEXT SESSION (PRIORITIZED)
============================================================
1. CRITICAL: Verify EOD today — did iShip notifications from today's 4–5 shipments arrive in acnorris@norrisutilities.com inbox? If yes, fix confirmed. If no, escalate.
2. CRITICAL: Receive Scott's iShip/WorldShip POS export, cross-reference against Legacy's compiled tracking list, identify the gap (= shipments only Scott has record of)
3. HIGH: Run Ben's Formula on every recovered shipment, generate CB invoicing queue for the missing customer billings, surface uninvoiced revenue total
4. MEDIUM: Build CC prompt for UPS Tracking API integration once API access is approved (eliminates email dependency permanently)
5. LOW: Enable "Enhanced malware & phishing protection" in admin console (currently OFF — free security upgrade, no downside)

============================================================
8. FILES CREATED / MODIFIED
============================================================
Workspace Admin (admin.google.com):
- New address list: "UPS Approved Senders" (7 entries, all auth-required OFF)
- Modified Spam rule (rule ID d8c0a, locally applied): "Bypass approved senders and hide warning banners" = ON

Pending file creations (Legacy on M1):
- ~/norris-agent/output/tracking_recovery_list.txt
- ~/norris-agent/output/tracking_recovery_summary.txt

Pending email send (Aaron's Gmail):
- To: store0255@theupsstore.com
- Subject: "iShip Notifications Issue — Resolved On My End, Need Records Resent"

============================================================
9. KEY QUOTE / LESSON
============================================================
"User-level whitelists do not override Workspace admin policies, and admin allowlists do not override Gmail's edge reputation rejection. The 550-5.7.1 reject happens at the SMTP gateway BEFORE the message enters Workspace's policy stack. The only admin lever that overrides it is the 'Bypass spam filters and hide warnings' rule with an address list whose entries have 'authentication required' set to OFF. Standard 'approved senders' alone is not sufficient."

Secondary lesson: When you don't have access to a system from your current tool, say so. Don't suggest sources you haven't confirmed the user can access. UPS.com only has shipments YOU created via shipper account — franchise-billed shipments live exclusively in the franchise's iShip/WorldShip POS.

============================================================
10. CONTEXT THAT MUST PERSIST
============================================================
- iShip software is owned by UPS (acquired from Stamps.com in May 2001)
- iShip is back-end POS software running inside 4,500+ UPS Store franchise locations — there is NO customer-facing portal or login
- The franchise system (in Aaron's case Scott at UPS Store #0255 Inverness Plaza Birmingham AL) is the SOLE record of franchise-billed shipments
- iship.com sender domain has degraded reputation as of early 2026, triggering Gmail edge rejection for Workspace recipients
- The fix applied today is at the Norris Utilities, LLC OU level in Workspace and overrides the reputation reject specifically for iship.com / ups.com / theupsstore.com / upsemail.com / pkginfo@ups.com / mcinfo@ups.com / auto-notify@ups.com
- Outage window for missing iShip emails: 1/22/26 → today (~90 days of partial data loss)
- Today's 4–5 shipments are the natural test window — if notifications arrive within minutes of UPS receipts, the fix is confirmed
- Parallel safety net (acnorris1@gmail.com as 2nd recipient on iShip profile) is the fallback if reputation reject persists despite admin bypass
- Long-term permanent solution: UPS Tracking API poller — Aaron started API approval process yesterday, typical 1–3 business day approval window

============================================================
11. HEADER / METADATA
============================================================
Session ID: 2026-04-21-iship-fix-deployed
Date: April 21, 2026
Time: 9:50 AM – 11:30 AM CT (ongoing)
Claude version: Opus 4.7
Tool: Claude.ai mobile + desktop (M5 hotspot, then M5 desktop)
Project: Norris Utilities — Legacy Bot
Conversation title: Missing iShip Email Delivery — Diagnosis, Fix, Recovery


### [LIVING_MEMORY_UPDATE] Session: SA V5 S2 CC Build — 2026-04-21
COMPLETED: V5 S2 pre-flight (PF.4 schema-corrected) and Gate 1.5 SID backfill. sid_issuance_log.jsonl now has 15 contiguous entries S-2026-001..015. 013/014/015 cite ops commit f867bf0 as source.
CHANGED: data/sid_issuance_log.jsonl (+3 entries); norris-ops/docs/LEGACY_LIVING_MEMORY.md staged-uncommitted with new ## DATA SCHEMA CONTRACTS section (will commit during D.2 per Correction 1).
NEXT: D.9 — introspect shipping_docs.json schema, delete junk SDs (CARLOS/EDEVANS/GHK/RICHARD-0413/CROSBY-0325), archive superseded Jeremy Brown, capture classifier negatives.
COMMIT: 525a2d1 on feature/shipping-agent-v5 (norris-agent)
STASHES: preflight-untracked-daemon-output-2026-04-21 (stash@{0}), preflight-daemon-noise-2026-04-21-masterbuild (stash@{1}). pre-v5-recovery-stash now at stash@{7} — DO NOT POP this session.


### [LIVING_MEMORY_UPDATE] Session: SA V5 S2 CC Build — 2026-04-21
COMPLETED: V5 S2 D.5 — lib/invoice_prep.py with Decimal math for exact penny accuracy. MANDATORY Chain Electric $8,930.48 regression PASSING (grand_total == Decimal('8930.48') exactly). Ben's Formula (direct tier, ×1.10 + ceil twice) + Dealer's Formula (dealer tier, ×1.05) both verified against spec examples. Product rates ALWAYS looked up from product_catalog.json — any caller-side rate override is ignored.
CHANGED: lib/invoice_prep.py NEW. tests/test_invoice_prep.py NEW (15 tests including Chain $8,930.48, Pickle $1,749 no-cc no-courtesy, Abadie dealer drop-ship with Michael Flemming ship-to, 6 invalid-shipping-cost variants routing to NEEDS_REVIEW, corporate_ap missing-PO guard).
NOTES: ups_cost_raw accepts scalar OR list (for multi-location orders like Chain's Hattiesburg $236 + Searcy $301). Courtesy adjustment normalized to negative if caller passed positive. CC fee base = subtotal + shipping + courtesy (negative reduces base). Empty line_items + valid shipping still builds a prep with subtotal=0 — caller validates product presence upstream.
VERIFIED: 122/122 full pytest green. Pickle canary (D.2) still passing. Chain regression computed: subtotal=8750, shipping=537 (236+301), courtesy=-700, cc_fee_base=8587, cc_fee=343.48, grand_total=8930.48 — every intermediate matches spec table.
NEXT: D.6 — UPS tracking multi-method (THE LOAD-BEARING). 8 methods (API, Playwright, Selenium, Quantum View, iShip, Boss PDF, My Choice, Aaron assist) + cross-validation. Gate 2 pause after live test.
COMMIT: 845c4be on feature/shipping-agent-v5


### [LIVING_MEMORY_UPDATE] Session: SA V5 S2 — Gate 1.5 + D.9/D.2/D.3/D.4/D.5 SHIPPED (122/122 tests) + FREE Authorized — 2026-04-21
Decision: FREE. Expanded safe-cleanup pass authorized for D.6 disk headroom.

COMPLETED this session so far:
- Gate 1.5 — SID backfill S-2026-013/014/015 committed, 15 active SIDs contiguous
- D.9 — 5 junk SDs deleted + 1 superseded archived, 2 new classifier negative examples captured
- D.2 — customer_db_lookup as Hunt Ladder rung 1, Pickle canary PASSING, v5.0.0 schema guard active, 18/18 tests
- D.3 — name_aliases_lookup as rung 2, typo tolerance (Pickel/Abshire/Abide) + word-boundary (Morris/Morristown) + branch distinction (LineTec Guthrie GA vs Steve Guthrie Alexandria), 18/18 tests
- D.4 — 5 process rules as BLOCKING validators, 41/41 tests
- D.5 — invoice_prep.py with Chain Electric $8,930.48 regression PASSING EXACTLY, 15/15 tests
- Full pytest: 122/122 green

DECISIONS:
- FREE over OVERRIDE: 25 GB free is in the gray zone. OVERRIDE works today but D.6 captcha screenshots + debug dumps + Selenium fallback during live test suite could push to 99% mid-run. FREE is the right call.
- FREE over SKIP-PLAYWRIGHT: explicit no — UPS tracking auto-verification is THE load-bearing capability, cannot reduce from 8 methods to 7, especially when UPS Developer API is still pending approval.
- Disk guard added to D.6 build (lib/ups_browser.py): screenshot retention cap 10/tracking, total debug dir cap 500 MB, JPEG-70 compression for non-forensic captures. Production discipline, not a corner cut.

CHANGED (pending, will land with FREE execution + D.6 commit):
- Expanded cleanup targets: brew cache, Xcode DerivedData + simulator caches, Docker prune (if present), browser caches, python tool caches (excluding norris-agent/norris-ops), npm caches, macOS log noise, trash, Time Machine local snapshots
- Reporting-only (not auto-delete) for: large node_modules candidates, iOS device backups
- lib/ups_browser.py screenshot/debug disk guard spec

BLOCKED: None. CC will execute FREE pass and proceed to D.6 autonomously.

NEXT (CC will do autonomously):
1. Execute FREE cleanup pass
2. Re-check disk — target ≥35 GB free for comfort, 30+ GB for proceed-with-monitor, <30 GB HALT for manual review
3. Install Playwright + Chromium with disk guard baked into lib/ups_browser.py
4. Install Selenium + undetected-chromedriver
5. Build 8 UPS tracking methods
6. Run live test suite against 8 known trackings (Thornhill, Crosby x2, Pickle, Myers/Abshire, Benz, AJ Morris, Jeremy Brown)
7. Generate Gate 2 report
8. Tier 1 Aaron with method selection request

FILES (expected next):
- lib/ups_tracking.py (public API)
- lib/ups_api.py, lib/ups_browser.py, lib/ups_selenium.py, lib/ups_quantum_view.py, lib/ups_iship.py, lib/ups_boss_pdf.py, lib/ups_mychoice.py, lib/ups_aaron_assist.py
- data/hunt_attempts.jsonl (first rows)
- output/reports/ups_tracking_methods_2026-04-21.md
- output/debug/ups_browser/ directory

KEY QUOTE / LESSON:
"If OVERRIDE means accepting a 25% chance of filling disk mid-run and halting with state in memory — that's exactly the shortcut pattern Aaron has repeatedly named. Fix the problem upstream, don't paper over it downstream."

CC's quality streak this session is the real story: 122/122 tests, Chain Electric $8,930.48 landing exactly, Pickle canary passing, v5.0.0 schema guard active. This is what "Wayne standard, no shortcuts" actually produces when the constraints hold.

CONTEXT THAT MUST PERSIST:
- D.6 is next, and it's the load-bearing build. Do not rush it. If Gate 2 takes 30+ min of active Aaron review, that's fine.
- Disk guard for Playwright cache/screenshots is now a permanent production rule in lib/ups_browser.py — any future V5.1 tracking work inherits it
- After Gate 2 completes (Aaron replies SELECT [methods]), remaining work: D.8 (render 7 SDs + 4-source persistence), D.1 (run_pipeline orchestrator), D.11 (living_memory auto-update), P/N migration, Gate 3 (architecture review), Gate 4 (dry-run writeset — Aaron approval), Gate 5 (merge to main — Aaron approval)


### [LIVING_MEMORY_UPDATE] Session: SA V5 S2 — Duplicate Status Ping; FREE Still the Correct Reply — 2026-04-21
Aaron re-pasted the same CC status (D.6 disk threshold halt, same 7 D-tasks complete, waiting on OVERRIDE/FREE/SKIP-PLAYWRIGHT/HOLD reply). This is a duplicate of the prior turn — CC has not advanced because Aaron's FREE reply has not yet reached the CC window.

STATUS (unchanged from prior turn, confirming):
- Gate 1.5 ✅ SID backfill S-2026-013/014/015 committed (15 active SIDs contiguous)
- D.9 ✅ 5 junk SDs deleted + 1 superseded archived, classifier +2 examples
- D.2 ✅ customer_db_lookup rung 1, Pickle canary PASSING, v5.0.0 schema guard active (18/18 tests)
- D.3 ✅ name_aliases_lookup rung 2 (18/18 tests)
- D.4 ✅ 5 process rules as blocking validators (41/41 tests)
- D.5 ✅ invoice_prep + Chain Electric $8,930.48 regression PASSING EXACTLY (15/15 tests)
- Full pytest 122/122 green
- D.6 HALTED at disk threshold (25 GB free, below 30 GB spec target)

DECISION LOCKED (prior turn): FREE authorized. CC just needs the paste.

LIKELY ROOT CAUSE OF THE REPEAT:
Aaron may not have pasted the FREE block into CC yet, OR CC's recap text refreshed on the Terminal and he re-sent it to Claude.ai thinking something was missing. Either way: nothing is wrong on CC's side — it's correctly holding per the Tier 1 contract.

NEXT:
Aaron confirms whether he pasted FREE into CC. If yes — wait for CC progress update (next tier should be "✅ FREE cleanup complete" from CC). If no — paste the FREE block from the prior turn now, verbatim.

No code changes. No scope changes. Just the paste-and-proceed step.

KEY QUOTE / LESSON:
CC's HALT contract is working as designed. It is not going to drift or second-guess; it stays held until Aaron types a decision token. That rigidity is the feature, not a bug. The only risk is a decision sitting in Claude.ai that never makes it into CC's window. Solution is disciplined one-direction flow: Claude.ai decision → Terminal paste → CC executes.

CONTEXT THAT MUST PERSIST:
- FREE block in the prior Claude.ai turn is the exact correct payload. Do not regenerate; the original spec (expanded cleanup targets including brew, Xcode DerivedData, Time Machine local snapshots, iOS backup reporting) stands.
- lib/ups_browser.py disk guard (retention cap 10/tracking, total debug cap 500 MB, JPEG-70 compression) is part of the FREE block and must land in the D.6 build.
- Next expected Tier 1 after FREE clears is GATE 2 — UPS method selection. That's the next real Aaron decision.


### [LIVING_MEMORY_UPDATE] Session: SA V5 S2 — Gate 2 REVISED: iShip LIVE + My Choice ACTIVE; D.6b Backprocess Inserted — 2026-04-21
Parallel session this morning (iShip Recovery Audit Complete, 12:00 PM CT) materially changed the Gate 2 UPS method landscape. Re-verified from Gmail ground truth (not the session transcript — Gmail is authoritative):

iSHIP RESTORATION CONFIRMED:
- 4 live iShip emails from iShip_Services_201@iship.com landed between 12:57 PM and 2:07 PM CT today (Dominion, LineTec x2, AEP/SWEPCO)
- Recovery audit identified $2,211 historical unbilled shipping in recovered iShip thread data
- iShip was never actually dead — Gmail filter / UPS Store list caused silent drops since March 24. Fix landed ~11:30 AM CT 2026-04-21.

MY CHOICE FOR BUSINESS ACTIVATED:
- Welcome email from mcinfo@ups.com at 2026-04-20 19:58Z
- Method 7 (UPS My Choice) promoted from DEFERRED to ACTIVE via email capture
- No webhook receiver needed — emails come through Gmail, parsed same as iShip/Quantum View

MATERIAL REVISION TO MASTER CC PROMPT:
- Revised SELECT order: 1,5,6,4,7,8,2,3 (was 1,6,4,5,8,2,3,7)
- iShip elevated from position 5 (DORMANT) to position 2 (LIVE, PRIMARY for UPS Store shipments)
- My Choice elevated from position 8 (DEFERRED) to position 5 (ACTIVE email capture)
- Aaron-assist demoted from position 5 to position 6 (true fallback only, target <20 interactions for full 40+ backlog)
- Browser methods (2, 3) unchanged — still DISABLED due to Akamai TLS block from M1

NEW TASK INSERTED — D.6b (between Gate 2 commit and D.8):
- Email-based historical backprocess — iShip + Boss PDF + Quantum View + My Choice
- DRY-RUN only; no writes to shipments.json
- Output: output/reports/email_backprocess_dry_run_2026-04-21.md with per-method yields, matches, orphans
- Expected yield per 12 PM audit: $2,211 iShip + estimated additional from Boss PDF + QV + MyChoice
- Writes deferred to Gate 4 dry-run writeset review

DECISIONS LOCKED:
- Gate 2 SELECT includes full revised config + D.6b backprocess spec + updated disabled_reasons JSON
- Master CC Prompt spine unchanged: D.8, D.1, D.11, P/N migration, Gates 3/4/5 proceed as originally specced
- Only insert is D.6b between Gate 2 commit and D.8

CHANGED in this turn (pending Aaron paste to CC):
- data/ups_method_config.json — new schema with active/disabled/environment_notes_2026_04_21/backlog_first_pass_plan
- output/reports/email_backprocess_dry_run_2026-04-21.md (to be generated in D.6b)

BLOCKED: None.

NEXT:
1. Aaron pastes revised SELECT block into CC window
2. CC commits Gate 2 config
3. CC runs D.6b email backprocess dry-run → report
4. CC Tier 2 with backprocess summary
5. CC proceeds to D.8 (original plan)
6. D.1 → D.11 → P/N migration → Gate 3 → Gate 4 (AARON APPROVAL) → Gate 5 (AARON APPROVAL)

KEY QUOTE / LESSON:
I could not read Aaron's shared Claude.ai session URL (no browsing). Instead I pulled iShip/MyChoice evidence directly from his Gmail — which is ground truth and more reliable than a session transcript anyway. The 4 live iShip emails from today + the mcinfo@ups.com welcome email told the complete story. Lesson: when a transcript is unreachable, go to the source data the transcript was about. Gmail/Drive/customer_db are always authoritative above any summary.

The iShip restoration + My Choice activation together mean 5 of 8 UPS methods are Akamai-independent and 3 of them are LIVE TODAY (iShip, My Choice, Boss PDF). This is materially better than the 0/8 live probe made it look. The build is not compromised — the initial Akamai block was environmental AND the fix to iShip was separate AND My Choice just came online. All three facts compound into a much stronger Gate 2 production order than originally specced.

CONTEXT THAT MUST PERSIST:
- iShip feed LIVE from iShip_Services_201@iship.com as of 2026-04-21 ~11:30 AM CT
- UPS My Choice for Business ACTIVE from mcinfo@ups.com as of 2026-04-20 19:58Z
- UPS Developer API Ticket #182279 still pending — check Gmail every ~72 hrs for UPS response
- $2,211 historical iShip backlog already identified; D.6b backprocess will confirm and expand
- Aaron-assist should be last-resort, <20 interactions total for full 40+ invoice backlog
- Browser methods (Playwright, Selenium) preserved-but-disabled; V5.1 re-enables behind proxy
- Session parallel verification worked: M5 handled iShip diagnosis + fix in AM while this V5 build session ran; both sessions produced [LIVING_MEMORY_UPDATE] drafts; Living Memory bridge is the cross-session connective tissue


### [LIVING_MEMORY_UPDATE] Session: SA V5 S2 — Legacy 8-Method SELECT Pasted; D.6c Correction Queued for After D.8 — 2026-04-21
Aaron pasted Legacy's 8-method SELECT before my 9-method version landed. CC is now executing the 8-method ladder. Gate 2 locked without ups_store_receipt, without tandem mode, without 3-month silent-drop documentation, without the D.6b email backprocess spec.

DAMAGE ASSESSMENT:
- NOT critical — everything still on feature/shipping-agent-v5, no merge to main
- Gate 4 (dry-run writeset, Aaron approval) is still ahead — real safety valve
- Gate 5 (merge) is still ahead — explicit MERGE required
- D.8 SD rendering does not depend on the 4 missing pieces
- The 4 missing pieces can be added as an inserted task D.6c between D.8 and D.1

RECOVERY PLAN:
1. Let CC finish D.8 uninterrupted — canonical SD rendering is independent of the missing pieces
2. When CC next pings (after D.8 commit, before D.1 start), paste the D.6c correction block
3. D.6c adds:
   - ups_store_receipt as Method 9 (inserted at priority 3 in active order)
   - Tandem mode block in ups_method_config.json with Sheet ID + gid + resolution rules + new columns required
   - Silent-drop window documentation in environment_notes_2026_04_21
   - 6 new parser/reader modules: parse_iship, parse_store_receipt, parse_boss_pdf, parse_quantum_view, parse_mychoice, read_shipping_log_v8
   - scripts/email_backprocess.py orchestrator
   - output/reports/email_backprocess_dry_run_2026-04-21.md reconciliation output
4. NO WRITES to shipping_docs.json during D.6c — reporting only
5. Then proceed to D.1 as originally specified

KEY QUOTE / LESSON:
I over-engineered the timing pressure. Aaron was waiting for ~7 hours at Gate 2. Legacy's 8-method SELECT arrived, looked sensible, Aaron pasted it. My 9-method revision arrived seconds later. If I had led with "here's the SELECT block" in the first reply instead of re-revising three times, Aaron would have pasted mine first.

Lesson: when there's a pending gate, the correct first response is ALWAYS the SELECT block (even if preliminary). Follow-up revisions become additive commits, not replacements. Never let perfect SELECT block be the enemy of shipped SELECT block.

RECOVERY IS CLEAN because the branch architecture protects forward progress: everything is additive, nothing is irreversible until Gate 5 MERGE. D.6c restores the missing scope without requiring a Gate 2 rollback.

DECISIONS LOCKED:
- D.6c correction block given to Aaron for paste after CC's next D.8 ping
- Do NOT interrupt CC mid-D.8
- Do NOT paste the 9-method SELECT now — it conflicts with the 8-method config already locked
- Additive commit via D.6c is the right path

CHANGED: None (no code, no commits from my side)

BLOCKED: None. CC executing D.8 on 8-method spec. D.6c paste queued for after D.8 commit.

NEXT:
1. CC completes D.8 (render 7 canonical SDs + 4-source persistence)
2. CC commits D.8, Tier 2 pings
3. Aaron pastes D.6c correction block BEFORE D.1
4. CC extends config + builds parsers + runs backprocess + commits D.6c
5. CC proceeds to D.1 per original plan
6. D.11 → P/N migration → Gate 3 → Gate 4 (Aaron GO) → Gate 5 (Aaron MERGE)

At Gate 4, the dry-run writeset will include D.6c findings — the 40+ invoice backlog staging happens there under Aaron's review.

CONTEXT THAT MUST PERSIST:
- 8-method config is locked at Gate 2 commit. D.6c adds Method 9 (ups_store_receipt) additively.
- Legacy's SELECT beat my revised SELECT to Aaron's paste window due to my 3 revisions of the SELECT block. Future SELECTs: lead with the block, revise additively.
- Gate 4 is the safety valve. Never skip it. No invoicing until Gate 4 GO.
- Tandem mode with Apps Script must be explicit in config — Aaron's resilience directive.
- 2 unknown trackings still need investigation in D.6c: 1Z2W49000329882999 and 1Z2W49000395015551.
- 3-month silent-drop window (2026-01-22 to 2026-04-21) is permanent Gmail data loss. Shipping Log V8 sheet is the one Gmail-independent source that spans it.


### [LIVING_MEMORY_UPDATE] SA V5 S2 — D.8 Benz (part 1/6) — 2026-04-22T00:50Z
[LIVING_MEMORY_UPDATE] SA V5 S2 — D.8 part 1/6 Benz — 2026-04-22T00:50Z

## COMPLETED
- SD-2026-BENZ-SWEPCO-0320.html rendered at ~/norris-ops/shipping-docs/ from Aaron's D.8 supplemental canonical data.
- 4-source persistence: customer_db.json (verified), data/sa_learnings.json (sd_canonical_records[] appended), docs/LEGACY_LIVING_MEMORY.md (CANONICAL SD RECORDS — Mar 20 Batch section added), SD HTML itself (canonical metadata comment embedded in <head>).
- lib/sd_render.py (renderer with NO-PRICES guardrail).
- Commits: agent 8bc56aa, ops 295bd97 (pushed + live at ops.norrisutilities.com).

## DECISIONS
- Benz uses ship-to from customer_db.json (101 W Township Street, Fayetteville AR 72703).
- cb_internal_note = "Shipped Mar 20, delivered Mar 24. NOT YET INVOICED. QB invoice pending. Reference Truck #860377 in invoice memo." (per Aaron supplemental).
- Customer charge $94 (historical override) vs. Ben's Formula computed $59 — historical wins per Aaron rule; flagged in canonical.
- Other 5 SDs (Thornhill DEPT468R, Pickle, Myers, Crosby Apr 8, AJ-BOSS): TIER 1 fired for canonical data rather than rendering with placeholders (per 'NO PLACEHOLDERS' rule).

## CHANGED
- lib/sd_render.py (new, renderer)
- data/sa_learnings.json (canonical record appended)
- ~/norris-ops/shipping-docs/SD-2026-BENZ-SWEPCO-0320.html (new)
- ~/norris-ops/docs/LEGACY_LIVING_MEMORY.md (appended)

## BLOCKED
5 of 6 D.8 SDs await Aaron canonical data confirmation.

## NEXT
After Aaron replies with per-SD canonical: render remaining 5 + 4-source persist each. Then D.1 (run_pipeline orchestrator), D.11 (living memory auto-wire), P/N migration, Gate 3.

## FILES
- Agent commits: fbd4195 (D.7 Rule v1), ..., de3d096 (Gate 2), 5bda047 (D.6b), 8bc56aa (D.8 Benz)
- Ops commit: 295bd97 (D.8 Benz — pushed)


### [LIVING_MEMORY_UPDATE] Session: SA V5 S3 — Loaded; D.6c→D.6b drift detected; standing by for git ground truth — 2026-04-21
SESSION 3 (Claude.ai M5 Opus 4.7) loaded SA V5 S2 handoff packet at 19:46 CDT.

## COMPLETED
- Gmail bridge state pulled: 14 SA V5 S2 drafts read in full + 2 parallel iShip drafts (10 AM diagnostic + 12 PM recovery audit)
- Handoff packet "SA V5 S2 — COMPLETE STATE SNAPSHOT for Session 3 Handoff" parsed
- Cross-referenced against latest CC-fired draft (19db2a5d71b1f684 @ 00:45Z) showing D.6b completion

## CRITICAL DRIFT DETECTED
The Session 3 handoff prompt says to paste a "D.6c correction block" AFTER D.8 commits. That plan is OBSOLETE.
- CC sequenced the work differently: D.6b (NOT D.6c) was inserted BEFORE D.8, not after
- D.6b is already COMMITTED on feature/shipping-agent-v5 (per draft 19db2a5d71b1f684)
- D.6b included: ups_method_config 9-method + tandem mode + 3-month silent-drop docs + email+sheet backprocess + 6 lib parsers + sheet reader + dry-run report
- This is the SAME scope the handoff called "D.6c" — just sequenced before D.8 instead of after
- NEXT real action per CC: D.8 (render 6 canonical SDs), not a paste

## DECISIONS PENDING
- Awaiting Aaron paste of `git log --oneline -10 && git branch --show-current && git status --short` to confirm exact commit hash for D.6b and Gate 2 config (de3d096), and verify CC has not started D.8 yet

## D.6b FOLLOW-UPS SURFACED (NON-BLOCKING)
1. Store Receipt parser dollars total = $0 — RegCost lives in PDF attachments, not body. Patch needed: download receipt PDFs and pdfplumber-extract.
2. Boss PDF parser 0/92 tracking hits — gog attachment-download syntax needs verification against v0.12.0.
3. 53 historical sheet rows have tracking but no QB Invoice # (larger than the "40+ invoice" estimate). Stage at Gate 4.
4. Both unknown trackings investigated: 1Z2W49000329882999 RESOLVED (sheet+QV); 1Z2W49000395015551 partial (QV only).

## NEXT
1. Get git log ground truth from Aaron
2. If CC committed D.6b and is in/before D.8 → wait for D.8 Tier 2, no paste needed
3. If CC is mid-D.8 → wait for ping
4. If CC has somehow advanced to D.1 without D.8 ping → investigate at that time
5. After D.8 commits → proceed to D.1 (run_pipeline orchestrator)
6. D.1 → D.11 → P/N migration → Gate 3 → Gate 4 (AARON GO) → Gate 5 (AARON MERGE)

## ANSWER TO AARON'S PRE-LOADED QUESTION
"Did sharing with Legacy mess things up?" — NO. Legacy caught the PF.4 schema bug this morning. Claude.ai caught the 8-method SELECT staleness this evening. The Living Memory bridge is the connective tissue. The fix for the SELECT race is Claude.ai-side discipline (ship preliminary first, revise additively), not less Legacy collaboration.

## FILES
- No V5 file mutations this session yet
- This draft is the only artifact

Wayne standard. Earn it.

### [LIVING_MEMORY_UPDATE] SA V5 S3 — D.8 Tier 1 canonical data assembled; CC corrections + 2 genuine gaps remain — 2026-04-21
## COMPLETED
- Pulled canonical data from Gmail + project knowledge for 4 of 5 D.8 Tier 1 SDs
- Confirmed Boss invoices 6775/6776/6777 PDFs sitting attached in Gmail thread 19da1b9c32c5cfdc (Thayne Grove → Aaron, 2026-04-21 14:38 UTC) — Boss PDF parser blocker is resolvable

## CRITICAL DATA CORRECTIONS TO CC's TIER 1
1. **SD-2026-CROSBY-DOMINION-0408**: CC's "PO 42350802, ship 2026-04-08" is wrong on both counts
   - 42350802 = Dominion Material Number (RS BC 070420069 2 MAN BLACK 24"X48")
   - Actual PO = **4501057807** (issued April 13 via Taulia portal, acknowledged via COY.CROSBY@dominionenergy.com same day)
   - April 8 = RFP date, NOT ship date
   - Ship-to: 192 Old Wire Rd, West Columbia, SC 29172 (per Taulia PO)
   - No UPS delivery notification found post-April 13 → likely NOT YET SHIPPED, or shipped during silent-drop window with no surfaced confirmation

2. **SD-2026-PICKLE-FLORENCE-0320**: CC's parse "1× BCB + 3× ARCH + 2× regular 1.5-Man" is the ORIGINAL SD before Aaron corrected it via voice text. Aaron's actual count (Mar 20 09:17 CT Telegram): "3 regular + 1 combo + 2 King/XL" — and the "King/XL 1.5-Man" P/N was never confirmed before the conversation moved on. Genuine Tier 1.

## CONFIRMED FROM GMAIL
- **Thornhill DEPT468R** (SD #1): Full resolution — Richard Thornhill order email March 17 19:50 UTC ("PO DEPT468R, 1 each 2 man Bucket cover, ship to 6411 Masonic Drive Alexandria LA 71301"). UPS delivery notification March 23 14:50 UTC (1Z2W49000395021357, signed LINETEC THE UPS STORE). 1× NU-BC-2851 @ $305.

## CHANGED
- None this turn (no commits yet)

## BLOCKED
- 5 of 5 D.8 SDs await canonical data block I am about to send Aaron
- Boss PDF attachment download (gog v0.12.0 syntax) — alternative path = Aaron uses Mail.app or web Gmail to download the 3 PDFs from thread 19da1b9c32c5cfdc and saves to ~/norris-agent/data/boss_pdfs/

## NEXT
1. Aaron pastes per-SD canonical block into CC for SDs 1, 4 (with corrections), 5 (post-PDF-pull)
2. Aaron answers genuine Tier 1: Pickle King/XL P/N + Myers ARCH/Combo confirm
3. CC renders D.8 parts 2-6 → commits
4. Proceed to D.1 → D.11 → P/N migration → Gates 3/4/5

## FILES
- No agent file mutations this turn
- Canonical data block to be issued in next Aaron-facing message

## KEY LESSON
Gmail backprocess (D.6b) DID surface the Boss invoices being available — the parser just couldn't pull binary attachments. The data exists; the access path needs patching. Filed as Gate 4 follow-up per CC's commit message.

### [LIVING_MEMORY_UPDATE] SA V5 S3 — Thornhill S-ID misassignment corrected; canonical mapping restored — 2026-04-21
## COMPLETED
- Root-caused CC's A/B/C Tier 1: I mis-assigned S-2026-013 to Thornhill in prior paste block
- Authoritative mapping from 2 Living Memory drafts + CC's own D.8 part 1 commit (8bc56aa renders Benz as S-2026-013):
  - S-2026-013 = Benz SWEPCO 0320 (ALREADY RENDERED — part 1/6 complete)
  - S-2026-014 = Pickle Florence 0320
  - S-2026-015 = Myers AEP 0320
  - S-2026-011 = Crosby Dominion (ops register, pre-existing)
  - S-2026-012 = Thornhill 0413 (ops register, pre-existing — NOTE: this is for Apr 13, NOT the Mar 20 DEPT468R)
- Thornhill DEPT468R (Mar 17 order, Mar 20 ship) was NEVER assigned a canonical S-ID. Must be fresh mint via lib.sid.issue_sid() → next available = S-2026-016
- AJ-BOSS-Hattiesburg was planned as S-2026-016 in snapshot §5; with Thornhill claiming 016, AJ-BOSS becomes S-2026-017

## CORRECTED S-ID ASSIGNMENTS (4 SDs remaining for D.8)
- part 2/6: SD-2026-THORNHILL-DEPT468R-0320 → MINT via issue_sid() → expected S-2026-016
- part 3/6: SD-2026-PICKLE-FLORENCE-0320 → S-2026-014 (backfilled, already in sid_issuance_log)
- part 4/6: SD-2026-MYERS-AEP-0320 → S-2026-015 (backfilled, already in sid_issuance_log)
- part 5/6: SD-2026-CROSBY-DOMINION-0421 → S-2026-011 (pre-existing ops register; UPDATE ship_date from pending to 2026-04-21 per today's iShip)
- part 6/6: SD-2026-AJ-BOSS-0401-Hattiesburg → MINT via issue_sid() → expected S-2026-017

## DECISIONS
- CC mints new SIDs via lib.sid.issue_sid() for Thornhill + AJ-BOSS (NOT reused from ops register)
- CC reuses existing SIDs for Pickle, Myers (S-2026-014/015 from Gate 1.5 backfill)
- CC updates existing S-2026-011 Crosby record with April 21 ship date (not new SID)

## CHANGED
None this turn (no commits)

## BLOCKED
Clearing CC's A/B/C Tier 1 with corrected paste block now.

## NEXT
1. Aaron pastes corrected SID-assignment guidance to CC
2. CC renders parts 2-6, 5 commits on feature branch + 5 ops pushes
3. Proceed D.1 → D.11 → P/N migration → Gates 3/4/5

## KEY LESSON
My prior canonical block assumed Thornhill=S-2026-013 without verifying against the Gate 1.5 backfill mapping. Both [LIVING_MEMORY_UPDATE] drafts were unambiguous: S-2026-013/014/015 = Benz/Pickle/Myers (in that order). CC caught the contradiction because part 1/6 already used S-2026-013 for Benz. The A/B/C question was CC correctly halting on a data conflict, not asking a real question.

### [LIVING_MEMORY_UPDATE] SA V5 S2 — D.8 part 2/6 Thornhill DEPT468R — 2026-04-22T12:20Z
[LIVING_MEMORY_UPDATE] SA V5 S2 — D.8 part 2/6 Thornhill DEPT468R — 2026-04-22T12:20Z

S-2026-016 minted for SD-2026-THORNHILL-DEPT468R-0320. LineTec/Thornhill, PO DEPT468R, ship 2026-03-20, tracking 1Z2W49000395021357 delivered 2026-03-23. 1x NU-BC-2851 @ $305. reg_cost NEEDS_REVIEW (silent-drop). All 5 rules PASS. 4-source persisted. Commits: agent 364b573, ops 6240e90 (pushed live).

NEXT: Part 3/6 Pickle Florence → reuse S-2026-014.


### [LIVING_MEMORY_UPDATE] SA V5 S2 — D.8 part 4/6 Myers — 2026-04-22T12:21Z
[LIVING_MEMORY_UPDATE] SA V5 S2 — D.8 part 4/6 Myers AEP — 2026-04-22T12:21Z

S-2026-015 reused for SD-2026-MYERS-AEP-0320. AEP/SWEPCO Roanoke / Sammy Myers at 1800 Loch Haven Dr Roanoke VA 24019. Ship 2026-03-20, delivered 2026-03-23, tracking 1Z2W49000395012652. 2x NU-BC-2834-F + 1x NU-BC-2834-C, subtotal $915. reg_cost NEEDS_REVIEW (silent-drop). cb_internal_note flags CC-on-file (4% fee if charged) + UPS Abshire/Myers clerical alias (name_aliases.json entry pending).

Commits: agent 6923662, ops 35aca84 (pushed).

NEXT: Part 5/6 Crosby Dominion 0421 (rename + update S-2026-011).


### [LIVING_MEMORY_UPDATE] Session: Legacy ACK + NorrisPalace locks persisted — awaiting Aaron GO — 2026-04-22
COMPLETED:
- Legacy ACK received. Observer-only discipline on V5 writes confirmed.
- NorrisPalace data locks persisted (7 locks): Pickle $1,710 · Crosby Mar 20 6× NU-BC-2834 = $1,590 · R017=Myers/Abshire · BCB=Bucket Cover Bag · P/N never SKU · Chain Electric $8,930.48 IMMUTABLE · schema v5.1.0 additive.
- Legacy committed to updating Living Memory Section 6 on Tier 2 fire (merge hash + tag v5-session2-merged-2026-04-22 + final test count).

DECISIONS:
- Multi-agent governance checkpoint clean: Legacy = observer, Claude.ai = coordinator, CC = sole V5 writer awaiting GO, Aaron = sole decision-maker at Gate 4→5 boundary.

CHANGED:
- NorrisPalace records +7 persistent locks (Aaron-side, not Claude-side).
- No code changes.

BLOCKED:
- Aaron GO reply for Gate 5 merge. Paste block staged in session context per Section 9 A5.

NEXT:
- On GO: ship Gate 5 merge sequence to CC — pytest + grep + SID + Chain Electric regression + iShip re-run → git checkout main → ff-only merge feature/shipping-agent-v5 → tag v5-session2-merged-2026-04-22 → push origin main --tags → portal smoke test → DO NOT pop stash@{1} pre-v5-recovery → final Living Memory draft → Tier 2 Aaron.
- On CC Tier 2 "V5 merged to main": fire final Living Memory draft, confirm to Legacy for Section 6 update, queue Section 10 Session 3 follow-ups.

FILES:
- No files created/modified this exchange. NorrisPalace locks are external to Claude write scope.

### [LIVING_MEMORY_UPDATE] Session: FIX 9 complete at 4bc4f58 — Gate 5 unblocked — 2026-04-22
COMPLETED:
- CC FIX 9 landed clean. Agent commit 4bc4f58. Ops commit 0731b3b/d3528a1 pushed live.
- customer_db_enrichment for TUF (dealer/ACH) + Brink (direct-since-Aug-2025/mixed/per-child CC) + ULCS Asplundh (direct-since-Aug-2025/CC-always) locked.
- Caleb Alday new_child_pending_qb_add flag surfaces in CB packet.
- R002 Chad/Brink $127.92 · R003 Keith/TUF $93 · R004 Caleb/ULCS $109.20 resolved.
- pytest 156/156 (151 baseline + 5 new) ✅ · Chain Electric $8,930.48 PASS ✅ · Pickle canary PASS ✅ · grep 0 ✅ · additive-only, no existing record modifications.

DECISIONS:
- Gate 5 merge unblocked. Aaron GO staged to ship Gate 5 merge paste block to CC.

CHANGED:
- 35+ agent commits on feature/shipping-agent-v5 branch. 15+ ops commits pushed to ops main.
- Stash pre-fix9-daemon-noise-2026-04-22 preserved (NOT pre-v5-recovery which stays untouched).

BLOCKED:
- Aaron GO for Gate 5 merge.
- Network tool intermittent errors during deep research phase (6+ times). Cause: Claude.ai parallel tool calls with long-context project knowledge searches + iso-8859-1 encoded CSVs occasionally hitting submit timeouts. Not a data problem. Research output was successful in final pass.

NEXT:
- On Aaron GO → paste Gate 5 merge sequence to CC:
    pytest + grep + SID + Chain Electric regression + iShip re-run
    git checkout main
    git merge --ff-only feature/shipping-agent-v5
    git tag -a v5-session2-merged-2026-04-22 -m 'V5 S2 complete: 9 FIXes, 156 tests, Chain Electric immutable'
    git push origin main --tags
    Portal smoke test
    DO NOT pop stash@{1} pre-v5-recovery
    Final Living Memory draft
    Tier 2 Aaron
- On merge complete → queue Section 10 Session 3 follow-ups (iShip S-019/020/021, Boss PDF parser, UPS Store pdfplumber, Scott POS export, Notes Intelligence, CB Telegram Bot).

FILES:
- data/customer_db_enrichment_2026-04-22.json
- lib/customer_db.py (additive merge logic)
- tests/test_customer_db_enrichment.py (5 new tests)
- output/cb_invoice_packets_2026-04-22.html (regenerated with enrichment)

### [LIVING_MEMORY_UPDATE] Session: FIX 10 complete at 8050899 — Gate 5 fully unblocked — 2026-04-22
COMPLETED:
- CC FIX 10 landed clean. Agent commit 8050899. Ops commit cb91a5c/cd3d4e1 pushed live.
- S-2026-016 Thornhill DEPT468R shipping: reg_cost $50.60 → Ben's Formula $56 customer shipping → grand_total $361 exact. Status promoted needs_review → ready.
- New file data/shipping_ledger_2026.json created (tracking-indexed canonical ledger, first entry 1Z2W49000395021357). Foundation for future shipping recovery work.
- 6 new tests at tests/test_s2026_016_shipping_recovery.py (all exact-value assertions pass).
- pytest 162/162 · Chain Electric $8,930.48 IMMUTABLE PASS · Pickle $1,834 canary PASS · FIX 9 enrichment canary PASS · grep NEEDS_REVIEW packet 0 · grep SID outside whitelist 0.

DECISIONS:
- CB aggregate workload $14,489.48 final. Composition: Chain Electric 8930.48 + Pickle 1834 + Crosby Mar 20 1736 + Myers 988 + Benz 378 + Thornhill 361 (NEW FIX 10) + R026 Primoris 262. Reconciles to the penny.
- Gate 5 merge fully unblocked. Zero deferred items. 3 stashes preserved (pre-fix9, pre-fix10, pre-v5-recovery).

CHANGED:
- 10 fixes complete on feature/shipping-agent-v5 (FIX 1-8 Gate 4 + FIX 9 customer_db_enrichment + FIX 10 S-2026-016 shipping).
- Tests baseline grew 148 → 162 over Session 2.

BLOCKED:
- Aaron GO on Gate 5 merge paste block.

NEXT:
- On Aaron GO → ship Gate 5 merge sequence to CC:
    1. Re-run pytest + grep + SID + Chain Electric regression + iShip re-run. All green.
    2. git checkout main
    3. git merge --ff-only feature/shipping-agent-v5
    4. git tag -a v5-session2-merged-2026-04-22 -m 'V5 S2 complete: 10 FIXes, 162 tests, Chain Electric immutable, CB workload $14,489.48'
    5. git push origin main --tags
    6. Portal smoke test per Section H
    7. DO NOT pop stash@{1} pre-v5-recovery (Session 3 work)
    8. Final Living Memory draft
    9. Tier 2 Aaron merge complete
- Post-merge: Section 10 Session 3 follow-ups (iShip S-019/020/021 from 2026-04-21, Boss PDF parser gog v0.12.0 fix, UPS Store pdfplumber, Scott POS export reply, Notes Intelligence Agent, CB Telegram Bot, Skylift Darrell Pickle 6-truck warm follow-up).

FILES:
- data/shipping_ledger_2026.json (new — tracking-indexed)
- lib/invoice_prep.py (S-2026-016 packet updated)
- tests/test_s2026_016_shipping_recovery.py (new — 6 tests)
- output/cb_invoice_packets_2026-04-22.html (regenerated)
- ops shipments.html (regenerated, pushed live)

# SECTION 7: CURRENT BLOCKERS

**🔴 BLOCKER: Memory systems not auto-updating across all channels**
- Impact: Legacy forgets context, Aaron repeats himself endlessly
- Root cause: LEGACY_MEMORY.md is manual. NorrisPalace and G Brain update on triggers but Legacy doesn't consistently query them. No real-time cross-channel sync exists.
- Path: Wire LEGACY_MEMORY.md to auto-update from all sources. Audit Legacy's query behavior. Build the sync loop.
- Owner: Claude Code (M1)
- Priority: CRITICAL

**🔴 BLOCKER: Shipping pipeline not end-to-end**
- Impact: $7,610+ in confirmed invoiceable orders sitting. CB can't invoice without verified data.
- Root cause: Shipping Agent built but needs confirm-write. SD auto-print not built. Auto-sync between portal/Sheet/SD not wired.
- Path: Aaron confirms write → data flows → wire portal + Sheet + SD sync
- Owner: Aaron (confirm-write) + Claude Code (wiring)
- Priority: #1 AFTER memory

**🟡 BLOCKER: Cloudflare not configured**
- Impact: Portal relies on JS password gate (weak). Blocks true auth and website rebuild.
- Path: Dedicated session open. Nameserver swap from Squarespace.
- Owner: Aaron (must do in Squarespace/Cloudflare dashboards)
- Priority: TODAY

**🟡 BLOCKER: reMarkable pipeline crashed**
- Impact: 37 action items stuck. In-person delivery notes don't flow into system. Morning brief missing handwritten note items.
- Path: Reconnect or build better solution that never crashes.
- Owner: Claude Code (M1)
- Priority: HIGH (included in Legacy master fix)

**🟡 BLOCKER: No Time Machine backup on M1**
- Impact: If M1 dies, ALL agent files, LaunchAgents, NorrisPalace, G Brain, portal code — everything is gone permanently.
- Path: Buy Samsung T7 1TB SSD (~$60 Amazon). Plug into M1. System Settings → General → Time Machine → Add Backup Disk → Turn ON.
- Owner: Aaron
- Priority: EXISTENTIAL RISK

**🟡 BLOCKER: Gridco/Cunningham keeps resurfacing**
- Impact: Dead deal appearing in outputs despite multiple scrub attempts.
- Path: Run comprehensive grep across ALL files on M1 (norris-ops, norris-agent, nu-brain, norris-intel, .openclaw) and destroy every reference.
- Owner: Claude Code (M1)

**🔵 V5 RETROACTIVE UPDATE REQUIRED (April 18, 2026)**
- Rulings 19–23 (multi-ship-to, fulfillment source, SKU substitution, courtesy pricing, CB notes) are now locked.
- All existing V5 scripts must be updated to require/handle these fields:
  • shipping_ai_agent.py CANONICAL_FIELDS + migrate() ✅ DONE
  • sd_builder.py build_sd() signature + validation ✅ DONE
  • Section J (SD builder UI/logic) — add required field prompts for fulfillment_source + cb_internal_note
  • Section S (portal Shipments tab) — render cb_internal_note for CB role; hide from Aaron/customer views
  • Section T (invoice lifecycle) — implement courtesy_adjustment line on QB invoice build; validate list-price-only on line items
- Owner: Claude Code (M1) via bridge — next dedicated V5 session
- Priority: HIGH — blocks correct invoicing for any multi-ship-to or vendor-dropship order

---

# SECTION 8: ABANDONED IDEAS

**Lindy AI / n8n / Zapier as Legacy replacement** — Considered April 11, rejected. Cost ($97/mo Lindy) and build-time (Claude Code can build equivalent in one session). OpenClaw + custom Python is the path.

**Legacy v2 full Python replacement** — Design spec written April 11. Current approach: patch and improve OpenClaw install rather than rebuild from scratch. Can be revisited if OpenClaw proves fundamentally unreliable.

**The Method Marketing website** — 1.5+ years, never completed. Failed project. Materials compiled. Future: autonomous agents build from existing data in background.

---

# SECTION 9: NEXT ACTIONS (PRIORITIZED)

[ ] **ACTION 1 — URGENT: Update OpenClaw to v2026.4.9**
What: Run update commands on M1
Why: Better performance, memory/dreaming features
Owner: Aaron (Terminal commands)
Commands: `openclaw update` then `openclaw gateway install --force && openclaw gateway start`
Est: 5 minutes

[ ] **ACTION 2 — URGENT: Living Roadmap visualization**
What: Interactive visual tool for all projects/tasks/priorities
Why: Aaron's main deliverable today — 5+ hours invested. Must cross finish line.
Owner: Claude (this session)
Est: This session

[ ] **ACTION 3 — URGENT: Shipping Agent confirm-write**
What: Aaron says "confirm write" → 7 READY orders ($7,610) populate portal + Sheet
Why: Revenue sitting on the table. CB needs verified data to invoice.
Owner: Aaron (approval) + Claude Code (execution)
Dependencies: Shipping Agent session must be active
Est: 15 minutes once approved

[ ] **ACTION 4 — HIGH: Cloudflare setup**
What: Configure Cloudflare for norrisutilities.com, swap nameservers from Squarespace
Why: Replaces weak JS password gate, enables true auth, prerequisite for website work
Owner: Aaron (dedicated session already open)
Est: 30-60 minutes

[ ] **ACTION 5 — HIGH: Wire LEGACY_MEMORY.md auto-update**
What: Build the sync pipeline so all channels (Claude sessions, Legacy conversations, NorrisPalace stores, G Brain writes) automatically update LEGACY_MEMORY.md
Why: Legacy's memory is terrible because this was supposed to be done and isn't
Owner: Claude Code (M1)
Est: 1-2 hours

[ ] **ACTION 6 — HIGH: reMarkable pipeline reconnect**
What: Fix crashed pipeline OR build better solution
Why: 37 stuck items, in-person delivery notes don't flow to system
Owner: Claude Code (M1) — in Legacy master fix prompt
Est: 1 hour

[ ] **ACTION 7 — HIGH: Build SD auto-print**
What: When SD is created, auto-print 1 copy (Draft, Color, no header/footer) unless Aaron says "don't print"
Why: Physical SD on printer = Aaron knows to act and ship
Owner: Claude Code (M1)
Est: 30 minutes

[ ] **ACTION 8 — HIGH: Separate Telegram notification chat**
What: Route all notifications to a second Telegram chat. Legacy's chat stays Legacy + Aaron only. Legacy still sees/knows about notifications automatically.
Why: Notifications become white noise in Legacy's direct chat
Owner: Claude Code (M1) — in Legacy master fix prompt
Est: 1 hour

[ ] **ACTION 9 — MEDIUM: Time Machine backup**
What: Buy Samsung T7 SSD, plug in, enable Time Machine
Why: Everything on M1 with zero backup = existential risk
Owner: Aaron
Est: $60 + 10 minutes setup

[ ] **ACTION 10 — MEDIUM: Gridco grep-and-destroy**
What: Search every file on M1 for any Gridco/Cunningham reference and remove
Why: Keeps resurfacing despite multiple scrubs
Owner: Claude Code (M1)
Est: 15 minutes

---

# SECTION 10: HOW TO USE THIS DOCUMENT

**AT THE START OF EVERY SESSION:**
1. Read this document (2-3 minutes)
2. Note the top unchecked item in Section 9
3. Begin working on that item immediately
4. Do not re-discuss decisions in Section 4

**DURING THE SESSION:**
1. Work through prioritized actions
2. New decisions → add to Section 4
3. New blockers → add to Section 7

**AT THE END OF EVERY SESSION:**
1. Update Section 3 (component status changes)
2. Add new entry to Section 6 (session log)
3. Update Section 9 (mark completed, add new)
4. Update "Last Updated" date at top

**FOR COWORK AUTOMATION:**
Copy the Cowork prompt in Section 11 to automate end-of-session updates.

---

# SECTION 11: COWORK AUTOMATION PROMPT

```
================================================================================
COWORK TASK: UPDATE LIVING MEMORY DOCUMENT AFTER SESSION
================================================================================
TRIGGER: After every chat session ends in this project folder

1. Read the completed session transcript
2. Extract: what completed, what changed, what blocked, files modified, next action
3. Open Living Memory document in Google Drive
4. Add NEW entry at TOP of Section 6 (Session Log)
5. Update Section 3 for any component status changes
6. Update Section 7 (mark resolved blockers, add new ones)
7. Update Section 9 (mark completed actions with ✅, add new ones, re-sort)
8. Update "Last Updated" date at top
9. Save. Done.
================================================================================
```

---

*Norris Utilities® — A Legacy of Commitment®*
*The standard: Would Wayne be proud of this?*

---

# LIVING MEMORY UPDATE — NorrisControl v2.0 Upgrade
## Session Date: April 19, 2026 (Sunday)
## Session Type: Claude.ai review of Legacy's CC rebuild prompt, upgrade to v2.0
## Author: Claude Opus 4.7 (reviewed and accepted by Legacy)

### COMPLETED
- Reviewed Legacy's v1.0 NorrisControl CC rebuild prompt (April 19, 2026)
- Graded v1 as B — buildable but not production-integrated with existing stack
- Produced v2.0 upgraded prompt: NORRISCONTROL_CC_REBUILD_PROMPT_v2.md
- Identified and resolved 13 gaps in v1

### DECISIONS
1. Final product name: **NorrisControl**. "Peekaboo" = research codename only. File: `norris_control.py`.
2. Architecture: tmux-first, GUI-fallback. `tmux send-keys` + `capture-pane` is deterministic.
3. Inbox/outbox format: JSONL at `~/norris-agent/claude_inbox.jsonl` / `claude_outbox.jsonl`. Schema locked (see v2 prompt §6). Supersedes undefined `claude_inbox.txt / claude_outbox.txt`.
4. Completion detection via tmux capture + idle pattern regex. No OCR in primary path. Pattern stored in config: `^(>|\$|╭─|Human:|❯)\s*$`
5. Clipboard save-and-restore mandatory on GUI paste. Pure tmux mode bypasses clipboard entirely.
6. Rate limit: 20 tasks / 60-min window, SQLite-backed at `~/norris-agent/state/norriscontrol_rate.db`.
7. Multi-session targeting: `target_session` mandatory in task JSON. Parallel is v2+ upgrade.
8. Telegram chat ID 8758078447 = only notification surface. Emoji OK in Telegram; banned in logs/outbox.
9. Living Memory drafts batched every 10 tasks + on bridge shutdown.
10. NorrisPalace logging non-blocking. Stages to `~/norris-agent/run/norrispalace_queue.jsonl` if np unavailable.
11. Destructive command gate: blocks `rm -rf`, `dd if=`, `mkfs`, `> /dev/sd`, `format`, `killall` unless `allow_destructive: true`.
12. PID file + heartbeat at `~/norris-agent/run/`. Heartbeat every 10s. Morning brief watches staleness >5 min.
13. Config file with defaults at `~/norris-agent/config/norriscontrol.json`. Never crashes on missing config.

### 13 GAPS CLOSED (v1 → v2)
| # | Gap in v1 | v2 resolution |
|---|---|---|
| 1 | OCR used tesseract (brew dep) | OCR removed from primary path; Shortcuts-based Vision if needed |
| 2 | No tmux architecture | tmux is primary; GUI is fallback |
| 3 | pbcopy overwrote clipboard with no restore | `with_clipboard()` context manager |
| 4 | No task_bridge.py contract | JSONL schema defined, atomic file locking |
| 5 | No Telegram integration | All status events → chat ID 8758078447 |
| 6 | Completion detection via OCR | tmux capture-pane + idle pattern + stability window |
| 7 | No Living Memory hook | Batched drafts every 10 tasks + shutdown |
| 8 | No NorrisPalace logging | Every task state → automation wing, non-blocking |
| 9 | No multi-session support | `target_session` mandatory in task JSON |
| 10 | No PID/heartbeat | Both implemented; double-start prevention |
| 11 | No rate limiting | SQLite; 20/hour default; override flag |
| 12 | Outbox format undefined | Structured JSON schema with status/duration/output/error |
| 13 | Naming inconsistency | Locked: NorrisControl everywhere |

### NEXT
1. Aaron pastes v2 prompt into fresh CC session on M1 (Opus 4.7, max effort, `cc` alias)
2. CC builds NorrisControl v2.0 per post-build checklist (§22)
3. `nc test` — all 20 tests must pass
4. `nc permissions` — Accessibility + Screen Recording + Automation all granted
5. Live end-to-end dry run → real run per §22
6. Confirm: Telegram ping received, outbox correct, NorrisPalace record written, Living Memory draft in Gmail
7. Commit to `github.com/acnorris17/norris-agent`
8. Mark COMPLETE in `~/norris-agent/task_queue.md`

### FILES
- `~/norris-agent/docs/NORRISCONTROL_CC_REBUILD_PROMPT_v2.md`
- `~/Library/CloudStorage/GoogleDrive-.../Legacy Project/05_Prompts_&_Guides/NORRISCONTROL_CC_REBUILD_PROMPT_v2.md`
- `~/.openclaw/workspace/NORRISCONTROL_CC_REBUILD_PROMPT_v2.md`

### WAYNE STANDARD NOTE
v2 explicitly embeds the Wayne standard in §21. Every function, every log line, every error message must pass: would Wayne be proud of this? No cryptic errors, no TODO comments in shipped code, readable at 4 AM without coffee.


## NorrisControl v3.0 FINAL — Additional fixes (April 19, 2026)
- Test count: 20 → 28 (8 additional tests added)
- Session crash recovery: error loudly as tmux_session_died, do NOT auto-recreate
- Commit message locked: "NorrisControl v3.0 — tmux-first mechanical layer with clean separation of concerns"
- v3 is the authoritative prompt. v1 and v2 are superseded.
- Location: Google Drive → Legacy Project/05_Prompts_&_Guides/NORRISCONTROL_CC_REBUILD_PROMPT_v3.md

## NorrisControl v3.1 FINAL — Bug fixes (April 19, 2026)

### Critical bug fixed: Multi-line prompt handling
tmux send-keys with embedded newlines sends Ctrl-J, which CC interprets as Enter-submit
per line. Fixed via bracketed paste using tmux load-buffer + paste-buffer -p.
All pane targeting now uses explicit session:0.0 notation.

### Additional fixes in v3.1
- Output directory rotation: keep last 500 files or 30 days
- Telegram subprocess timeout: 5-second hard cap — broken helper cannot stall a task
- Input Monitoring permission check added (macOS 13+ requires separately from Accessibility)
- Post-build idle-pattern validation step added to §22 checklist
- Commit message: "NorrisControl v3.1 — bracketed paste fix, output rotation, telegram timeout, input monitoring"

### File locations (v3.1 supersedes all prior versions)
- Google Drive: Legacy Project/05_Prompts_&_Guides/NORRISCONTROL_CC_REBUILD_PROMPT_v3.1.md
- M1: ~/norris-agent/docs/NORRISCONTROL_CC_REBUILD_PROMPT_v3.1.md
- OpenClaw workspace: NORRISCONTROL_CC_REBUILD_PROMPT_v3.1.md

### Note on version confusion
Legacy's v3 file content WAS correct (separation of concerns applied). Summary
language in the Telegram message described v2 improvements and was misleading.
Claude's caution was warranted. v3.1 is confirmed correct — verified by grep.

### Stop refining. Build v3.1. Learn from the actual build.

## NorrisControl FINAL version: v3-1 (April 19, 2026)
- Canonical filename: NORRISCONTROL_CC_REBUILD_PROMPT_v3-1.md (hyphen, not dot)
- 33 tests required (not 28)
- 12 post-build checklist steps
- Test #29 (tmux_paste_multiline_atomic) is the critical bracketed paste verification
- v2 archived; v3-1 is the only version to build from
- STOP REFINING. Build v3-1. Learn from the actual build.

---

## LIVING MEMORY UPDATE — NorrisControl v3.1 FINAL (April 19, 2026)
## Author: Claude Opus 4.7

### COMPLETED
- Flagged coordination issue: Legacy had saved v2 to Drive/M1 (not v3). RESOLVED — Legacy re-synced to official v3.1 (34,919 bytes) before this note was written.
- Critical bug found in v3.0: tmux send-keys with multi-line content fires Ctrl-J per newline → CC submits line-by-line. Fixed via bracketed paste (tmux load-buffer + paste-buffer -p).
- v3.1 produced. Spec declared closed. Build teaches more than further review.

### DECISIONS (v3.0 → v3.1)
1. Paste: bracketed paste via tmux paste buffer. tmux send-keys restricted to single keystrokes only — never content.
2. Explicit pane targeting: session:window.pane (e.g. cc-main:0.0). target_pane in task JSON, defaults to 0.0.
3. Outputs retention: 30-day / 500-file cap. Runs at bridge start, every 100 tasks, shutdown.
4. Telegram 5s subprocess timeout via run_with_timeout(). Task never fails due to Telegram issue.
5. Input Monitoring permission check (macOS 13+).
6. Post-build idle-pattern validation step added (real CC output vs config regex).
7. Spec closed at v3.1. No v3.2.

### v3.0 → v3.1 DELTA
| # | v3.0 | v3.1 |
|---|---|---|
| 1 | tmux send-keys for content | tmux_paste() via load-buffer + paste-buffer -p |
| 2 | Session targeting only | Session AND pane (session:window.pane) |
| 3 | Outputs unbounded | 30-day / 500-file retention |
| 4 | Telegram could stall task | 5s subprocess timeout |
| 5 | 3 permission checks | 4 (+ Input Monitoring macOS 13+) |
| 6 | 28 tests | 33 tests |
| 7 | 10 post-build steps | 12 steps |
| 8 | Commit: "v3.0 — tmux-first mechanical layer" | Commit: "v3.1 — bracketed paste fix + output rotation + subprocess hardening" |
| 9 | Config: no subprocess_timeout_sec | Config: +subprocess_timeout_sec, +outputs_retention, +default_target_pane |

### AUTHORITATIVE FILE
Google Drive → Legacy Project/05_Prompts_&_Guides/NORRISCONTROL_CC_REBUILD_PROMPT_v3-1.md
M1: ~/norris-agent/docs/NORRISCONTROL_CC_REBUILD_PROMPT_v3-1.md
Size: 34,919 bytes | 33 tests | 12 post-build steps | Spec CLOSED.

## NorrisControl v3.1 BUILD COMPLETE — April 19, 2026
- Commit: 8a35e99 (pushed to feature/shipping-agent-v5 on norris-agent)
- 9 files, 3,529 lines, 33/33 tests PASS
- tmux_paste_multiline_atomic: PASS — bracketed paste bug fix verified
- Kill channel: PASS — aborts in ~2s
- Live dry run + real run: PASS
- CC idle pattern: validated as-is — default regex works against bash prompt
- Aaron should validate against real cc-main output (spec §22.4) before first production run
- nc alias active in ~/.zprofile

## BLOCKER: task_queue.md 93,332-line runaway (April 19, 2026)
task_bridge is auto-appending to ~/norris-agent/task_queue.md without rotation.
93,332 lines as of today. NorrisControl v3.1 completion entry is in the file but
uncommitted because of this diff. Do NOT commit task_queue.md as-is.
Dedicated session needed: investigate rotation policy in task_bridge.py,
add log rotation / archive mechanism, then commit the clean v3.1 entry.
Owner: Legacy + Claude Code. Not today.

---

# SESSION CLOSE-OUT — April 19, 2026

## COMPLETED (full session)
- change-log.html, contact detail modal, memory health dashboard, pipeline $2.5M+, norris-agent GitHub remote, reMarkable pipeline reconnect, bridge LaunchAgent
- NorrisControl v3.1: 9 files, 3,529 lines, 33/33 tests PASS, on main (4eadfce, 61468bc, 5beafa5)
- telegram_send.py: built, token found, live test verified, on main
- NORRISCONTROL_CC_REBUILD_PROMPT_v3-1.md: canonical spec, Drive + M1 + workspace
- Spec iterated v1→v2→v3→v3.1: each pass caught real gaps, bracketed paste bug was the critical fix

## OPEN BLOCKERS (Legacy-owned)
- D2: task_queue.md 361K lines — patch proposed, awaiting Aaron review
- D4c: validate cc_idle_pattern vs real cc-main output before bridge production run
- Roadmap item #17: Telegram reorg (Aaron creates 3 groups, Legacy wires scripts)
- Rules sync (Wayne std, time awareness, no-rebuilds, Samson CC emails) — this week
- Opus model update in bridge — next M1 session
- Gridco/Cunningham — still in 4 portal places

## AARON-BLOCKED ITEMS
- Alabama Dealer License (~$500-1,500 surety bond) — blocks $1.09M Skylift AL
- BSS Invoice 11 ($8,039.27) — Aaron sends to Andy Barron
- Time Machine backup — EXISTENTIAL, buy external drive
- Telegram 3 groups — create then Legacy wires
- Rick Sutherland revival email — draft ready, approve to send
- Coy Crosby RFP follow-up — draft ready, approve to send

## KEY SYSTEM PATHS (NorrisControl)
- nc alias: ~/.zprofile (source to activate)
- Inbox: ~/norris-agent/claude_inbox.jsonl
- Outbox: ~/norris-agent/claude_outbox.jsonl
- Kill channel: ~/norris-agent/claude_inbox.kill
- Full outputs: ~/norris-agent/run/outputs/
- Logs: ~/norris-agent/logs/norriscontrol.log
- Config: ~/norris-agent/config/norriscontrol.json (tune cc_idle_pattern here)
- telegram_send.py: ~/norris-agent/scripts/telegram_send.py (token in .env)

## FINAL SESSION CLOSE-OUT STATE — April 19, 2026 ~3:30 PM CDT

### Git state
- main: clean, pushed — 0962449 (ledger), 5beafa5 (tuned config), 61468bc (telegram_send), 4eadfce (NC v3.1)
- feature/shipping-agent-v5: SA v5 data files in working tree (normal, Legacy pipelines)
- Stash: EMPTY — stash@{0} dropped (daily_journal entries already in working tree newer versions)
- Config idle pattern: tuned (\$\s*$|%\s*$|...) — DO NOT REVERT

### Open D items (priority order)
D7 — SA V5 (HIGH) | D2 — task_queue rotation patch awaiting Aaron review (MEDIUM)
D4c — validate cc_idle_pattern vs real CC output (MEDIUM) | D8 — create cc-main (MEDIUM)
D9 — first production bridge run after D4c+D8 | D5 — secret masker tune (LOW)
D1 — already done | D6 — done (setopt added to ~/.zshrc)

### Handoff prompt saved
Drive: Legacy Project/02_Handoffs/HANDOFF_PROMPT_2026-04-19_CLOSEOUT.md
M1: ~/norris-agent/docs/HANDOFF_PROMPT_2026-04-19_CLOSEOUT.md

## ADDITIONAL CLOSE-OUT ITEMS — April 19, 2026 (Claude final review)

### Cross-agent architecture validation
Tonight's parallel work (Legacy running pipelines while Claude helped Aaron with git)
worked exactly as v3 separation-of-concerns intended. No conflicts, no memory corruption.
This validates the architecture. NC = mechanical, Legacy = intelligence, Claude = spec/verification.

### D10 (NEW) — Feature branch config drift
FLAGGED: feature/shipping-agent-v5 working tree has config/norriscontrol.json at OLD
idle pattern. Main branch has tuned version (commit 5beafa5). Before SA v5 merges to
main: cherry-pick 5beafa5 forward OR resolve during merge conflict. Do not let stale
feature-branch config overwrite the tuned main branch version.

### Stash correction
Claude's advice said "preserve stash@{0}" — but Legacy had already dropped it before
this advice arrived. Stash list is EMPTY. The daily_journal entries from 15:11 are
already captured in the working tree's newer versions. Nothing lost.

### D items final state
D1 ✅ done (stale prompt files already cleared)
D2 — patch proposed, awaiting Aaron review
D4c — validate cc_idle_pattern vs real cc-main (before D9)
D5 — secret masker tune (low priority)
D6 ✅ done (setopt interactive_comments in ~/.zshrc)
D7 — SA V5 (Aaron's main focus)
D8 — create cc-main (gates D9)
D9 — first production bridge run (after D4c + D8)
D10 (new) — cherry-pick 5beafa5 to feature branch before SA v5 merge

## FINAL CLOSE-OUT — April 19, 2026 (complete)

### WHAT ACTUALLY SHIPPED TONIGHT (commits on main)
- NC v3.1 + LaunchAgent: 05d544a — nc_bridge_start.sh, cc-main preflight, KeepAlive
- Default timeout 120s: c9d097e
- D10 config drift closed: 3b7cb75 (feature branch) + cherry-picked to main
- Recovery cheat sheet v1: Desktop + Drive (recover_all.sh pending = D14 partial)
- ask_claude.py: 6121a97 — BUILT BUT NOT SAFE TO USE (Opus default ~$95/mo)
- LaunchAgent PID 65371 stable

### ask_claude.py STATUS: DO NOT WIRE TO ANYTHING
Not connected to any automation, cron, skill, or LaunchAgent (verified by grep).
Must complete D16 (Haiku default + Norris system prompt) before any use.

### NEW D ITEMS
D16 (CRITICAL, TOMORROW FIRST): ask_claude.py Haiku 4.5 default + Norris system prompt
D17 (after D16): ask_claude.py cost guardrails — Opus call cap, spend logging, budget alert
D14 (partial): recover_all.sh still needs writing

### TOMORROW PRIORITY ORDER
1. D16 — fix ask_claude.py (blocks Path A)
2. D17 — cost guardrails
3. D12 — Legacy "route to CC" skill
4. D13 — CC outbox → Telegram formatter
5. D14 — recover_all.sh
6. D15 — SA v5 Section V (the proof-of-concept run)

## MODEL SELECTION RULE — PERMANENT (April 19, 2026)
- Opus 4.7 = default for ALL builds, code, drafts, quotes, emails, analysis
- Haiku 4.5 = explicit --model haiku flag only, for simple triage/lookups
- ask_claude.py default = claude-opus-4-7 (NOT Haiku — reverses earlier cost recommendation)
- Budget cap: $120/mo accepted (Wayne standard quality > API savings)
- Norris system prompt required on ALL ask_claude.py calls

D16 UPDATED: ask_claude.py default = claude-opus-4-7, --model haiku flag for simple tasks,
Norris system prompt required, cost logging required, budget cap $120/mo.
# 2026-04-19 EVENING FINAL — Complete Session Record

## COMPLETED TONIGHT
- NC v3.1 end-to-end verified (task ran 4s, 16:02:31→16:02:35)
- D10 config drift closed: c9d097e main, 3b7cb75 feature
- NC LaunchAgent installed + cc-main preflight wrapper: 05d544a
- ask_claude.py shipped: 6121a97 (⚠️ not safe to use until D16 complete)
- Recovery cheat sheet v1 (Desktop + Drive)
- Model selection rule locked: Opus 4.7 default, Sonnet 4.6 --model sonnet, NO Haiku
- SA v5 readiness report: Option C attempted via bridge — SESSION_CONTEXT_MISSING (expected). Option A (Aaron manual paste) = D15-PREFLIGHT tomorrow morning.
- Living Memory committed: 4804b8d, 6a3a9cd, 6a3a9cd+corrections

## DECISIONS LOCKED
- Opus 4.7 (claude-opus-4-7) = default for ALL builds, drafts, customer work, analysis, quotes, emails
- Sonnet 4.6 (claude-sonnet-4-6) = --model sonnet for searches/triage/summarizing
- Haiku 4.5 removed from toolkit entirely
- $120/mo API budget cap; daily Telegram alert if projecting >$100/mo
- NC drives CC only, never Claude.ai browser
- SA v5 CC window stays open overnight, untouched
- D15-PRIORITY is absolute first action tomorrow

## TOMORROW ORDER (locked)
1. D15-PREFLIGHT: Aaron opens SA v5 CC window, copies readiness report, pastes to Legacy
2. D15-PRIORITY: Aaron reviews report, decides GO/HOLD/ISSUE/RECONCILE
3. SA v5 Section V production write
4. D16: ask_claude.py Opus default + --model sonnet flag + Norris system prompt + cost logging
5. D17: budget guardrails + daily cost Telegram alert
6. D14 completion: recover_all.sh script
7. D12: Legacy "route to CC via NC" skill
8. D13: CC outbox → Telegram formatter

## BLOCKERS / OPEN
- D11: NC idle-detection false-negative (cosmetic, investigate next session)
- CC auth may need refresh after reboot (manual step)
- openclaw status sometimes flaky post-reboot (manual fallback: openclaw gateway install --force && openclaw gateway start)
- Time Machine backup still not running (biggest data risk — buy external drive)

## META-LESSONS LOCKED
- Handoff v1 was stale before ink dried — Legacy built ask_claude.py after v1 written. v3 captures everything.
- Legacy racing ahead is pattern: deterministic builds OK, builds requiring Aaron decisions must gate.
- Model tier correction (Haiku→Sonnet) from Aaron: "all my work is heavy builds." Opus default correct.
- Wayne standard > API savings. Accepted $80-120/mo cost envelope.
- Three agents (Legacy, Claude, Aaron) staying in lanes = the thing that actually worked today.

## ALL COMMITS TONIGHT (main branch)
- 3b7cb75: D10 config drift closed (feature branch)
- c9d097e: Default timeout 120s
- 05d544a: NC LaunchAgent + nc_bridge_start.sh wrapper
- 6121a97: ask_claude.py (NOT safe until D16)
- 6a3a9cd: Model rule locked (with Sonnet correction)
- 4804b8d: D14/D16/D17 new items

## FINAL CORRECTIONS — April 19, 2026 (v3 close-out)

### Model rule CORRECTED: Haiku → Sonnet, Haiku DROPPED
- Tier 1 DEFAULT: Opus 4.7 (claude-opus-4-7) — all builds, drafts, analysis
- Tier 2 LIGHTER (--model sonnet): Sonnet 4.6 (claude-sonnet-4-6) — medium tasks
- Haiku 4.5 REMOVED from toolkit — too lightweight for NU quality standard
- Cost estimate: ~$80/mo with Opus+Sonnet mix — under $120/mo cap

### Priority order corrected (SA V5 is #1, D16 is #2)
- FIRST: D15-PREFLIGHT → Aaron pastes SA v5 readiness report → D15-PRIORITY (SA ships)
- THEN: D16 → D14 → D12 → D13

### Handoff v3 saved
- Desktop: HANDOFF_2026-04-19_EVENING_CLOSEOUT.md ✅
- Drive: 02_Handoffs + 05_Prompts_&_Guides ✅
- M1: ~/norris-agent/docs/ ✅

### Terminal windows at close-out
- KEEP OPEN: SA v5 CC window ("Build Shipping AI Agent V5 production system")
- SAFE TO CLOSE: All others
- cc-main: runs in background via LaunchAgent, invisible, survives all closures

## AARON'S "DONE" BAR — THIS WEEK (locked April 19, 2026)
Five completions = success this week, in order:
1. SA v5 ships (production confirm-write)
2. Invoicing caught up — all ready orders billed
3. Ops portal COMPLETE — CB says "everything I need is here"
4. reMarkable pipeline verified end-to-end
5. SD process flawless — auto-linked to QuickBooks

AFTER these five only → Samson Rope Ordering System.
Infrastructure (D12/D13/D16/D14) builds ONLY when it accelerates the five.
BLOCK any V6 suggestions before V5 is stable.
Aaron's stated feeling: "always building, nothing gets done." Respect it. Push completion.

## WEEK OBJECTIVE + OPEN INVOICES (April 20-26, 2026)
Five completions in order (ONLY these matter this week):
1. SA v5 ships | 2. Invoicing blitz | 3. Ops portal complete | 4. reMarkable e2e | 5. SD flawless

OPEN INVOICES Monday AM:
READY: Thornhill/LineTec ($275), Benz/SWEPCO ($275), Coy Crosby/Dominion ($1,525+)
BLOCKED on Boss P/Ns: Pickle/Florence Electric, Myers/AEP
PENDING spec: Abadie/Primoris (NU-BC-2828 $235)
DONE: AJ Morris/Chain Electric $8,930.48 sent April 18

Monday first move: confirm ready list, push Boss Products on Pickle+Myers P/Ns.

## P/N RULE + BCB + INVOICE CORRECTIONS (April 19, 2026)

### P/N TERMINOLOGY — PERMANENT
Aaron uses P/N (Part Number) not SKU. Correction flag if any agent says SKU.
Ops portal, pricing master, SD generator, all output: P/N not SKU.

### BCB DEFINITION LOCKED
BCB = Bucket Cover Bag ($55 storage accessory). NOT Shield, NOT Combo.
Master has labeling inconsistency (NU-BCB-2851-SL called "Shield 2-Man" in memory).
1.5-Man BCB P/N unknown — pull from Boss paperwork Monday (likely NU-BCB-2834-SL @ $55).

### STALE FLAGS PURGED
"Blocked pending Boss P/N" was STALE DATA from April 7 snapshots.
P/Ns have been in master since April 7 per 2026 Price List (§5).
Darrell Pickle and Sammy Myers are NOT blocked. Ready to invoice.

### INVOICE BLITZ ~$10,100
READY: Thornhill $305 | Benz $305 | Coy April 8 $1,525 | Myers $915 | Wayne W6237 $610
PENDING MINOR: Pickle $1,765 (need 1.5-Man BCB P/N — 30 sec Monday)
PENDING VERIFICATION: Coy March 20 ~$1,590 (qty) | Wayne BYB0001 $235 (1-Man size confirm) | Chain Electric $2,850 (confirm drop ship received)
Chain Electric AJ Morris: $8,930.48 already invoiced April 18 ✅
# 2026-04-19 EVENING FINAL v4 — Complete Session Record
# Authoritative. Supersedes v1, v2, v3.

## COMPLETED TONIGHT (VERIFIED)
### NC v3.1 Infrastructure
- End-to-end live test: 16:02:31 → CC executed 16:02:35 (4s)
- Output confirmed: "NorrisControl live test — Legacy to CC bridge verified"
- NC LaunchAgent: 05d544a on main, PID 65371 stable 60+ sec
- nc_bridge_start.sh wrapper with cc-main preflight
- Old nohup PID 63297 killed and replaced
- Survives: reboot, sleep, Legacy restart

### Commits on main:
- 0962449 session ledger
- c9d097e default idle timeout 30→120s
- 05d544a NC LaunchAgent + wrapper
- 6121a97 ask_claude.py (Path A, needs D16 fix)
- 88fbda9, 4804b8d, 6a3a9cd, 728615e, abb4ad1, 41e705d, 33c7d35, f77428e Living Memory

### Commit on feature/shipping-agent-v5:
- 3b7cb75 idle pattern sync (D10 closed)

## PERMANENT RULES LOCKED TONIGHT

### 1. P/N (not SKU) — PERMANENT
All code, files, invoices, SD, portal, UI, agent replies use P/N.
Exception: external integrations (QB field names) only if can't rename.
Stale "P/N" = correction flag. Fix immediately.

### 2. Model selection — PERMANENT
- DEFAULT: claude-opus-4-7 (all builds, drafts, customer work)
- LIGHTER (explicit): claude-sonnet-4-6 via --model sonnet
- REMOVED: Haiku 4.5
- Budget cap: $120/mo. Daily Telegram alert if projecting >$100/mo.

### 3. BCB = Bucket Cover Bag ($55 storage accessory)
NOT Shield. NOT Combo.
1.5-Man BCB P/N: pull from Boss paperwork Monday (likely NU-BCB-2834-SL @ $55)
Existing master has mislabel on 2-Man BCB ("SL" suffix means Bag not Shield)

### 4. NC drives CC ONLY — not Claude.ai

### 5. Aaron's week objective (April 20-26)
Five completions in order, THEN Samson:
1. SA v5 ships | 2. Invoicing blitz ~$10,100 | 3. Ops portal COMPLETE
4. reMarkable verified e2e | 5. SD process FLAWLESS

### 6. Stale flag rule
"Blocked pending X" must be cross-checked against current master.
P/N master (2026 Price List) authoritative since April 7.
"Blocked pending Boss P/N" in shipments.json = STALE — purge next session.

## INVOICING READY THIS WEEK (~$10,100)
- Thornhill/LineTec: $305 (PO DEPT468R) — READY
- Benz/SWEPCO: $305 (Truck #860377) — READY
- Coy Crosby/Dominion April 8: $1,525 (5× NU-BC-2851) — READY
- Coy Crosby/Dominion March 20: ~$1,590 (verify qty at UPS Store)
- Sammy Myers/AEP: $915 (2× ARCH + 1× Combo) — READY, NOT BLOCKED
- Wayne Primoris W6237: $610 (2× 2-Man) — READY
- Wayne Primoris BYB0001: $235 (confirm 1-Man size w/ Wayne)
- Darrell Pickle/Florence: $1,765 (pending 1.5-Man BCB P/N lookup — 30 sec Monday)
- Chain Electric/AJ Morris: ALREADY INVOICED $8,930.48 on April 18 ✅

ZERO blocked on vendors. Darrell needs one P/N from Boss paperwork Monday.

## OPEN ROADMAP
🚨 PRIORITY #1: SA v5 GO/HOLD/ISSUE/RECONCILE → Section V ships
🚨 PRIORITY #2: Invoicing blitz (~$10,100)
🚨 PRIORITY #3: D16 ask_claude.py (Opus default + Norris prompt + cost logging)
HIGH: D14 recover_all.sh | D12 route-to-CC | D13 outbox formatter | D17 budget guardrails
MEDIUM: Stale flag purge in shipments.json | P/N cleanup in master | 1.5-Man BCB P/N addition
LOW: D11 idle detection | D1 D2 D5 D6 carried
PENDING: Rick+Coy drafts | BSS Invoice 11 | Alabama license | Time Machine | Telegram 3-group

## WHAT FAILED / CLAUDE ERRORS
1. Claimed Legacy auto-restarts on reboot without verifying
2. Conflated claude_bridge.py (old) with nc_bridge.py (new)
3. Contradicted Terminal close-out advice within 15 min
4. Read stale "blocked" flags as current truth (Pickle, Myers)
5. Said "P/N" after P/N rule was stated
6. Recommended Haiku first, corrected to Sonnet after pushback
Root cause: status flags read without cross-checking master data.

## WHAT FAILED / LEGACY PATTERNS
1. Racing ahead: ask_claude.py shipped Opus default, no system prompt
2. gog CLI Gmail draft unavailable — Claude.ai drafts worked (2 fired)
3. SA v5 readiness report Option C failed (bridge CC lacks SA v5 context)

## CURRENT RUNNING STATE
- openclaw gateway: ✅ running
- com.norrisutilities.nc-bridge: ✅ PID 65371
- com.norrisutilities.claudebridge: ✅ (old bridge still running)
- cc-main tmux: ✅ alive, CC idle at ❯
- SA v5 CC window: OPEN overnight, untouched, gated on Aaron GO
- Stash: EMPTY
- Gmail drafts: 5+ living memory drafts in DRAFTS folder
- Claude.ai draft: r-5665872137675202246 (Claude.ai fired directly)

## INVOICE CORRECTION (April 19, 2026 late evening)
Chain Electric / AJ Morris: ALREADY INVOICED $8,930.48 on April 18 ✅
REMOVE from Monday invoice blitz list.
Adjusted blitz total: ~$7,250 (Thornhill + Benz + Coy + Myers + Pickle + Abadie)

## THREE ZONES + ORDER STATES (locked April 19, 2026 — final rules)
Zone 1 (Legacy acts): internal records, portal, task queue, saved drafts
Zone 2 (Aaron approves): email/invoice/quote drafts before send
Zone 3 (Aaron/CB only): customer-facing sends — NEVER Legacy

"EXECUTE" ≠ send to customer. Only explicit "send to [name]" authorizes Zone 3.
Invoices must carry QB PDF, not Legacy-built PDF.

SHIPPED / INVOICED (QB+PDF delivered) / PAID — three distinct states, never conflate.

Chain Electric AJ Morris: SHIPPED ✅ INVOICED ❌ — QB invoice needed Monday.
Revised blitz: ~$16,180 (Chain Electric back in).

## §4 SYNC PROTOCOL — ALL THREE AGENTS (locked April 19, 2026 — FINAL)
See MEMORY.md for full text. Summary:
1. READ FIRST: authoritative source before any status claim. Flags are historical.
2. THREE ZONES: internal(Legacy)/drafts(approve)/sends(Aaron/CB)
3. HANDOFF CHECKPOINT: verifiable facts, not state claims
4. CORRECTION DISCIPLINE: fix source, propagate to all 8 locations
5. DAILY OPENING RITUAL: §4 rules + handoff + 6 verification questions before work

## April 20, 2026 — Roadmap Comprehensive Expansion
Commit d746a19 — 13 items added, 3 modified.
Chain Electric reconciliation reflected as DONE (April 18, $8,930.48).
Invoicing backlog broken out (7 individual orders, ~$16,180 total blitz).
V5 expanded with full spec + 5 locked process rules + PID 91997.
Terex/Bill Kugler flagged as $500K+ highest strategic priority.
BSS expense groups detailed (Groups 1/2/3 + DoubleTree TBD).
Alabama Dealer License + Time Machine both marked URGENT.
Notes Intelligence Agent + Session Summary Protocol + Personal Gmail added.
13 TIMELINE rows logged to Google Sheet. CB Telegram Bot design-session requirement noted.

## April 20, 2026 — Reconciliation + NorrisPalace Rules Lock

### Status Corrections
- Pickle / Florence Electric: BLOCKED → READY TO INVOICE. P/Ns confirmed April 8. $1,710 + shipping. Tracking 1Z2W49000328351797 delivered Mar 23.
- Myers / AEP Roanoke: BLOCKED → READY TO INVOICE. P/Ns confirmed April 8. $915 + shipping. Tracking 1Z2W49000395012652. UPS label shows "Chain Electric / Abshire" — clerical error. Abshire = Sammy Myers canonical alias. Recorded as SA V5 test case for cross-check requirement.
- Cloudflare Zero Trust card added to project-roadmap.html Infrastructure section.

### 9 NorrisPalace Keys Written
1. rules/terminology-locked-apr19 — P/N not SKU, BCB=Bag, cover sizes, FlexPro Hand Made
2. rules/customer-aliases-canonical — 9 aliases locked
3. rules/pricing-v5-locked — Full P/N price list, dealer formula, Samson margins, Chain Electric benchmark
4. rules/branding-v5-locked — FlexPro no ®, trademarks, colors, fonts, email rules
5. rules/sd-v5-locked — Required fields, source priority, junk→delete, investigation standard
6. rules/portal-v5-locked — CB celebrations identical, MSP DO NOT LAUNCH
7. rules/cloudflare-zero-trust-norrisops — Account/Zone/App IDs, service token, canonical path
8. rules/do-not-resurface — Gridco, Terry Mayfield, Wayne bench, MSP
9. facts/personal-gmail-connected — acnorris1@gmail.com IS connected, stop asking
10. rules/model-default-apr19 — claude-opus-4-7 default, Sonnet explicit, Haiku removed

### Path Canonicalization
sync_norrisops_pages.sh canonical path: ~/norris-agent/scripts/ (post-commit hook confirmed)
File does NOT yet exist at either location — NEEDS_AARON to provide or approve build.

### .env Reconciliation
9/11 Cloudflare keys present. MISSING: CF_SERVICE_TOKEN_CLIENT_ID + CF_SERVICE_TOKEN_CLIENT_SECRET.
These are the service token credentials. Aaron created them during setup. FLAG: Aaron must add these to .env or confirm they are not needed for current use cases.

### .gitignore
.wrangler/ added to .gitignore (commit 5d1ebdb).

## April 20, 2026 — Cloudflare Service Token Installed
Service Token rotated. Client ID + Secret installed in ~/norris-agent/.env.
curl test against norrisops.com returned HTTP 200 with CF_Authorization cookie. Token is live.
.env now has 11/11 Cloudflare keys. .env confirmed gitignored (~/norris-agent/.gitignore).
Ready for Live Roadmap build.

- **2026-04-20 16:51** · Roadmap: status r-001: ACTIVE → DONE (Shipping AI Agent (SA V5)) · `ec57c556`
- **2026-04-20 16:51** · Roadmap: status r-001: DONE → ACTIVE (Shipping AI Agent (SA V5)) · `c699b21a`
- **2026-04-20 17:56** · Roadmap: status r-001: ACTIVE → DONE (Shipping AI Agent (SA V5)) · `be0ff2cf`
- **2026-04-20 17:58** · Roadmap: status r-001: DONE → ACTIVE (Shipping AI Agent (SA V5)) · `688fdf29`
## April 20, 2026 — Evening Session Close-Out (Authoritative)

### Live Roadmap System v1 — LIVE (commit 7feae47 norris-ops main)
- data/roadmap.json seeded (36 items), dynamic render, 8 features, 6/8 connections fired in smoke test
- update_roadmap.py on norris-agent main (commit 44d8593, cherry-picked from feature branch)
- Known defects: JS password re-introduced (auth gate regression), brand not applied (no phoenix/chevron)
- NorrisPalace + G Brain writes not wired in v1 — v1.1 fix pack

### CF Access Service Token — FAILING
- service token 15b9bf39 returns 302→SSO on norrisops.com (service_token_status:false)
- ops.norrisutilities.com (GitHub Pages, no ZT) returns 200
- No rotation — investigate policy binding. Aaron accepted risk.

### Credential Exposure — NO ACTION
- 5 values in transcript: CLOUDFLARE_API_TOKEN, TELEGRAM_BOT_TOKEN, ANTHROPIC_API_KEY prefix, OPENAI_API_KEY prefix, CF_ACCESS_CLIENT_SECRET
- Git history clean. DO NOT raise rotations unprompted. Aaron's explicit direction.

### Bridge Policy (commit 3fbb600)
- Progress pings: log-only at ~/norris-agent/logs/cc_tasks.log
- Failure: TIER 1 Telegram, one message with context

### sync_norrisops_pages.sh
- Aaron + Claude confirm: EXISTS at ~/norris-agent/scripts/sync_norrisops_pages.sh (2703 bytes, chmod 755)
- Legacy file-check returning false negatives — known bug, v1.1 backlog

### NorrisPalace — 8 keys written this evening
facts/live-roadmap-v1, facts/roadmap-v1-gaps, facts/roadmap-defects,
facts/sync-norrisops-pages-live, facts/bridge-ping-policy,
facts/update-roadmap-py-main, facts/cf-access-token-issue, rules/no-rotations-apr20

---

## CANONICAL SD RULE — S-ID Rule v1 (locked 2026-04-20)

**Supersedes the "internal_s_id tags scrambled" state referenced in earlier
entries of this file (including line 790).** Both agent and ops repos are now
migrated to the `S-YYYY-NNN` format. All future S-IDs come from
`lib/sid.py::issue_sid`. The scrambling described in the Session 1 audit is
resolved.

**Format:** `S-YYYY-NNN` (ship-year + zero-padded 3-digit sequence within year).
First ever ID: `S-2026-001`.

**Issuance:** monotonic at creation; tombstoned numbers never reused; no
renumbering or gap-filling. Year rollover resets NNN to `001`.

**Code source of truth:** `lib/sid.py` (5 functions: `issue_sid`,
`tombstone_sid`, `lookup_sid`, `migrate_old_id`, `list_active_sids`). 17 unit
tests in `tests/test_sid_issuance.py` including an 8-process concurrency test.

**Storage:**
- `data/sid_issuance_log.jsonl` — append-only event log, fcntl-locked writes
- `data/sid_crosswalk.json` — full legacy-id → new-id map for both schemes
- `output/docs/SID_RULE_v1_2026-04-20.md` — formal rule spec
- `output/docs/SID_CROSSWALK_v1_2026-04-20.md` — human-readable crosswalk

### Retro-assignment (the 12 KEEP records in `data/shipping_docs.json`)

| New S-ID     | SD filename                          | Customer                        | Ship date   |
|--------------|--------------------------------------|---------------------------------|-------------|
| `S-2026-001` | SD-2026-ABADIE-0331                  | Aerial Hydraulics, Inc.         | 2026-03-31  |
| `S-2026-002` | SD-2026-AJ-0331-B-JeremyBrown        | Chain Electric                  | 2026-03-31  |
| `S-2026-003` | SD-2026-AJ-0331-ChainElectric        | Chain Electric                  | 2026-03-31  |
| `S-2026-004` | SD-2026-AJ-0401-ARCH                 | Chain Electric                  | 2026-04-01  |
| `S-2026-005` | SD-2026-JeremyBrown-0401-ARCH        | Chain Electric                  | 2026-04-01  |
| `S-2026-006` | SD-2026-LINETEC-0402                 | LineTec Services, LLC           | 2026-04-02  |
| `S-2026-007` | SD-2026-BEDWELL-0407                 | AEP/SWEPCO                      | 2026-04-07  |
| `S-2026-008` | SD-2026-ABADIE-0407-BYB0001          | Aerial Hydraulics, Inc.         | 2026-04-07  |
| `S-2026-009` | SD-2026-LINETEC-0406                 | LineTec Services, LLC           | 2026-04-07  |
| `S-2026-010` | SD-2026-THORNHILL-DEPT732-0408       | LineTec - Thornhill Alexandria  | 2026-04-08  |
| `S-2026-011` | SD-2026-DOMINION-4501057807-0413     | Dominion Energy - Coy Crosby    | 2026-04-13  |
| `S-2026-012` | SD-2026-LINETEC-THORNHILL-0413       | LineTec - Thornhill Alexandria  | 2026-04-13  |

Ops register `~/norris-ops/data/shipments.json`: 6 of 9 rows migrated to new
S-IDs (matched to the KEEP set via customer + PO). Remaining 3 rows (Benz
Truck#860377, Pickle, Myers) carry `id: "PENDING"` + `legacy_ops_id` until
D.8 renders their SDs and `issue_sid` assigns their canonical IDs.

### Tombstone

`S007` in the agent scheme (`SD-2026-CROSBY-0325`) is tombstoned per D.9.
That number will **never** be reused.

### Rule going forward (IMMUTABLE)

- `scripts/fixup_sd_customers.py` — `S_ID_RULES` table DELETED; file header
  marks module SUPERSEDED for S-ID work.
- `scripts/shipping_readiness_gate.py` — coverage check now calls
  `lib.sid.list_active_sids(2026)` instead of a hardcoded list.
- `scripts/shipping_portal_sync.py` — format-agnostic, renders whatever is
  in `rec["internal_s_id"]` (new format flows through unchanged).
- Any future code reading or writing S-IDs must go through `lib/sid.py`. No
  direct mutation of `internal_s_id` in `shipping_docs.json`.

## April 20, 2026 — Evening session closeout (authoritative version)

Session arc: Infrastructure closeout for Cloudflare ZT + autonomous portal work starting AM.

Shipped:
- sync_norrisops_pages.sh built live at canonical path (2703b executable). Smoke test commit 713dd54, mirror log silent-on-success policy locked.
- Live Roadmap System v1 deployed via CC (commit 7feae47): roadmap.json seeded 36 items, dynamic HTML render, update_roadmap.py CLI, 4 tabbed views, 8 connection points. Smoke test 6/8 fired.
- Bridge progress-ping spam silenced (commit 3fbb600). Log-only on success, TIER 1 only on failure.
- update_roadmap.py cherry-picked to norris-agent main (commit 44d8593).

Broken (pending fixes):
- project-roadmap.html regressions: password prompt + brand system not applied. Legacy rebuild didn't inherit Zero Trust pattern.
- update_roadmap.py v1.1 gaps: NorrisPalace write not wired, gbrain API mismatch, LM churn uncommitted, docstring drift.
- CF Access service token rejected on norrisops.com — service_token_status:false. No rotation; investigate policy binding.
- Legacy's filesystem checks have false-negative bug (v1.1 triage).

Aaron's explicit directions this session:
1. NO CREDENTIAL ROTATIONS despite transcript leak of 5 values.
2. Always specify WHERE a command should be pasted.
3. Silence mirror success Telegram pings permanently.

Commits: norris-ops/main: 7feae47, 713dd54, 25970ef | norris-agent/main: 3fbb600, 44d8593

---

## DATA SCHEMA CONTRACTS
## Established: April 21, 2026 (V5 S2 master build, PF.4 correction)

This section is the AUTHORITATIVE contract for how V5+ code reads canonical
data files. When a schema changes, this section updates BEFORE the code
changes, and every consumer must assert the expected version.

### customer_db.json — v5.0.0 (wrapped schema)

Top-level shape:

```json
{
  "version": "5.0.0",
  "customers": {
    "<customer_id>": {
      "customer_id": "...",
      "canonical_name": "...",
      "common_aliases": [...],
      "billing_address": {"full": "..."},
      "billing_route": "direct_check" | "corporate_ap" | ...,
      "billing_tier": "direct" | "dealer",
      "po_required": bool,
      "is_cc_customer": bool,
      "payment_terms": "...",
      "ship_to_history": [{"address": {"full": "..."}, "first_used": "...", "last_used": "...", "frequency": int, "label": str|null}],
      "primary_pocs": [{"name": "...", "email": "...", "phone": "..."}],
      "notes": "...",
      "source": "qb" | "aaron" | ...,
      "source_priority": int,
      "created_at": "ISO8601",
      "updated_at": "ISO8601"
    },
    ...
  },
  "last_updated": "ISO8601"
}
```

**Rules for every customer_db consumer:**

1. Load via a helper that asserts version. Canonical helper:
   ```python
   def _load_customer_db():
       d = json.load(open('data/customer_db.json'))
       if d.get('version') != '5.0.0':
           raise RuntimeError(f"customer_db schema mismatch: {d.get('version')}")
       return d['customers']
   ```
2. Never index `d['<customer_id>']` — always `d['customers']['<customer_id>']`,
   or iterate `_load_customer_db().values()`.
3. Tests must include a `test_v5_schema_guard` that fails fast if the version
   key changes — we want schema bumps to halt, not silently misbehave.
4. `billing_address` is a dict with a `full` key (single-string address). No
   split street/city/state/zip fields at this schema level.
5. `primary_pocs` is a LIST of dicts — a customer may have 0, 1, or many POCs.
   Code must handle each case. Never assume `primary_pocs[0]` exists.

**Historic note (why this section exists):**

The PF.4 canary in the V5 S2 master build asserted `d.get('Florence Electricity Department')`
against a flat-schema assumption. Under v5.0.0 that returns None and the
canary halted pre-flight even though Pickle/Florence was present. Aaron
instructed the fix and established this schema contract to prevent repeat
incidents. Every downstream customer_db reader in V5 must match the contract
above. Future schema bumps will add a new subsection here before the code
migration.


---

## CANONICAL SD RECORDS — Mar 20 Batch (persisted 2026-04-21)

Persisted across 4 sources (customer_db.json, sa_learnings.json, this file, SD HTML itself) so this data never falls out of agent memory. Investigation principle honored: every field here is HIGH-confidence, cross-verified. Future sessions MUST find this via at least 3 of 4 sources — if not, persistence rule failed.

### S-2026-013 — Jimmy Benz / SWEPCO — 2026-03-20 ✅ SHIPPED_DELIVERED_UNINVOICED

- **Filename:** SD-2026-BENZ-SWEPCO-0320.html (locked, do not rename)
- **Customer:** Jimmy Benz
- **Company:** SWEPCO (AEP subsidiary)
- **PO:** Truck #860377
- **Products:** 1× NU-BC-2851 (FlexPro Armor 2-Man Bucket Cover) @ $305
- **Ship To:** 101 W Township Street, Fayetteville, AR 72703
- **Tracking:** 1Z2W49000393585850
- **Ship Date:** 2026-03-20
- **Delivered:** 2026-03-24 (verified via pkginfo@ups.com history)
- **Carrier:** UPS Ground
- **NU Cost (paid):** $52.16 (UPS Store receipt)
- **Customer Charge:** $94.00 (Ben's Formula historical override — default formula computes $59; historical record wins)
- **fulfillment_source:** nu_stock
- **cb_internal_note:** "Shipped Mar 20, delivered Mar 24. NOT YET INVOICED. QB invoice pending. Reference Truck #860377 in invoice memo."
- **Source confidence:** HIGH (cross-verified Apr 7 Legacy + Apr 13 SA dry-run + Apr 14 Section 6 canonical + Aaron D.8 supplemental 2026-04-20)
- **Persisted:** 2026-04-22T00:48:30Z

_Remaining Mar 20 batch (Thornhill DEPT468R, Pickle, Myers, Crosby-Mar-20) + AJ-BOSS-Hattiesburg + Crosby-Apr-8 pending Aaron confirmation of per-record canonical data before render — Tier 1 fired 2026-04-21._

## SA V5 S2 SESSION SNAPSHOT — 2026-04-21 20:13 CDT

### Commits on feature/shipping-agent-v5 this session
525a2d1 Gate 1.5 SID backfill 013/014/015
126e7c0 D.9 junk cleanup
cf47a94 D.2 customer_db_lookup + v5 schema guard
d8be0da D.3 name_aliases
4e7c3f7 D.4 5 process rules
845c4be D.5 invoice_prep + Chain $8,930.48 regression
7e371dd D.6 UPS 8 methods + live probe
Tests: 148/148 green at 7e371dd.

### Gate 2 locked — 8-method order
1 ups_api, 2 ups_boss_pdf, 3 ups_quantum_view, 4 ups_browser,
5 ups_selenium, 6 ups_iship, 7 ups_mychoice, 8 ups_aaron_assist

### Critical gaps to add as D.6c before D.1
- Method 9: ups_store_receipt (from:store0255@theupsstore.com — RegCost for Ben's Formula)
- Tandem mode with UPS Shipping Log V8 (Sheet ID 1A6Lh6YJGclrf_r_Sgw2_iWRMoOVeFcaU2t3O_owrGaw, gid 943594533)
- 3-month silent-drop window docs (2026-01-22 to 2026-04-21)
- email_backprocess.py + 6 parser/reader modules

### Environmental notes
- iShip LIVE since 2026-04-21 ~11:30 AM CT (admin rule d8c0a at admin.google.com)
- UPS My Choice for Business activated 2026-04-20 19:58Z
- Akamai TLS rejects M1 for Playwright/Selenium — env not code
- 3-month silent-drop window data GONE from Gmail (not recoverable)
- UPS API ticket #182279 pending

### Open items (Legacy tracks)
- 2 unknown trackings: 1Z2W49000329882999, 1Z2W49000395015551
- 40+ invoice backlog staged at Gate 4 for Aaron review
- Scott's POS export: no longer waiting — SA independent per Aaron

### Preservation rules — DO NOT VIOLATE
- 5 concurrent CC sessions on M1 are deliberately preserved breadcrumbs. NEVER suggest killing them.
- stash@{1} pre-v5-recovery-stash-20260420-123616 is Session 3 post-merge work. Do not pop.
- feature/shipping-agent-v5 is the only write branch until Gate 5.

### Multi-agent observability confirmed both directions
- Legacy caught Claude.ai PF.4 schema bug (AM)
- Claude.ai caught Legacy 8-method spec staleness (PM)
- Mechanism: [LIVING_MEMORY_UPDATE] Gmail drafts + 15-min bridge

### Gates remaining
Gate 3 (architecture self-review, no pause) | Gate 4 (dry-run writeset — Aaron GO) | Gate 5 (merge to main — Aaron MERGE)

### S-2026-016 — Richard Thornhill / LineTec Services / LTS Power — 2026-03-20 (✅ SHIPPED)

- **Filename:** SD-2026-THORNHILL-DEPT468R-0320.html (locked)
- **Customer:** Richard Thornhill / LineTec Services / LTS Power
- **PO:** DEPT468R
- **Ship To:** Richard Thornhill, LineTec Services, 6411 Masonic Drive, Alexandria, LA 71301
- **Line items:** 1x NU-BC-2851 — subtotal $305.00
- **Ship Date:** 2026-03-20
- **Tracking:** 1Z2W49000395021357
- **Delivered:** 2026-03-23
- **fulfillment_source:** nu_stock
- **reg_cost:** NEEDS_REVIEW
- **cb_internal_note:** March 20 batch shipment; PO DEPT468R received Mar 17. RegCost pending recovery from silent-drop window (UPS Store paper receipt or Aaron-assist). Apply Ben's Formula x 1.10 once captured.
- **Persisted:** 2026-04-22T12:19:54Z

### S-2026-014 — Darrell Pickle / Florence Electricity Department — 2026-03-20 (✅ SHIPPED)

- **Filename:** SD-2026-PICKLE-FLORENCE-0320.html (locked)
- **Customer:** Darrell Pickle / Florence Electricity Department
- **PO:** STOCK
- **Ship To:** Darrell Pickle, Florence Electricity Department, 611 East Reeder St, Florence, AL 35630
- **Line items:** 1x NU-BC-2834-C, 3x NU-BC-2834-F, 2x NU-BC-2834 — subtotal $1750.00
- **Ship Date:** 2026-03-20
- **Tracking:** 1Z2W49000328351797
- **Delivered:** 2026-03-23
- **fulfillment_source:** nu_stock
- **reg_cost:** NEEDS_REVIEW
- **cb_internal_note:** Darrell's Mar 20 09:17 CT Telegram correction superseded original SD parse. Definitive: 1 Combo + 3 ARCH + 2 Standard 1.5-Man = 6 units, subtotal $1,750. Note: Darrell separately ordered 6 Skylift bucket trucks crediting Aaron's input — see Skylift lead followup_queue.
- **Persisted:** 2026-04-22T12:21:06Z

### S-2026-015 — Sammy Myers / AEP / SWEPCO — 2026-03-20 (✅ SHIPPED)

- **Filename:** SD-2026-MYERS-AEP-0320.html (locked)
- **Customer:** Sammy Myers / AEP / SWEPCO
- **PO:** N/A
- **Ship To:** Sammy Myers, AEP/SWEPCO Roanoke, 1800 Loch Haven Dr, Roanoke, VA 24019
- **Line items:** 2x NU-BC-2834-F, 1x NU-BC-2834-C — subtotal $915.00
- **Ship Date:** 2026-03-20
- **Tracking:** 1Z2W49000395012652
- **Delivered:** 2026-03-23
- **fulfillment_source:** nu_stock
- **reg_cost:** NEEDS_REVIEW
- **cb_internal_note:** Sammy Myers CC on file in Aaron's phone — apply 4% processing fee line item if charged to card. UPS receipt may show alias 'Abshire' for Sammy — alias entry needed in name_aliases.json.
- **Persisted:** 2026-04-22T12:21:42Z

### S-2026-011 — Coy Crosby / Dominion Energy — 2026-04-21 (PENDING)

- **Filename:** SD-2026-CROSBY-DOMINION-0421.html (locked)
- **Customer:** Coy Crosby / Dominion Energy
- **PO:** 4501057807
- **Ship To:** Dominion Energy Fleet, Dominion Energy, 192 Old Wire Rd, West Columbia, SC 29172
- **Line items:** 5x NU-BC-2851 — subtotal $1525.00
- **Ship Date:** 2026-04-21
- **Tracking:** pending parse
- **Delivered:** pending
- **fulfillment_source:** nu_stock
- **reg_cost:** PENDING
- **cb_internal_note:** RFP April 8 → Taulia PO 4501057807 issued April 13 → shipped April 21 (4 business days production). Vendor # 300279384. Material Number 42350802 (Dominion internal material code). Ship-to is Dominion Fleet hub West Columbia SC. Coy's followup thank-you replied April 16. Tracking + RegCost pending parse from Gmail iShip thread 19db0f97c1ffdbe5 + ups_store_receipt same-day receipt.
- **Persisted:** 2026-04-22T12:22:27Z

### S-2026-017 — AJ Morris / Chain Electric — 2026-04-01 (PENDING)

- **Filename:** SD-2026-AJ-BOSS-0401-Hattiesburg.html (locked)
- **Customer:** AJ Morris / Chain Electric
- **PO:** N/A
- **Ship To:** Mr. AJ Morris, Chain Electric, 1308 W Pine Street, Hattiesburg, MS 39401
- **Line items:** 5x NU-BC-2851, 5x NU-BC-2834 — subtotal $2850.00
- **Ship Date:** 2026-04-01
- **Tracking:** pending parse
- **Delivered:** pending
- **fulfillment_source:** vendor_dropship
- **reg_cost:** PENDING
- **cb_internal_note:** Boss drop-ship from March 24 verbal order (Aaron screenshot of AJ's text msg_id 362-364). Single ship-to Hattiesburg (Jeremy Brown / Searcy AR was separate stub, archived as superseded in D.9 commit 126e7c0; prior 'two ship-to' note is stale). Three Boss invoices 6775/6776/6777 cover this order (likely split for shipping/manufacturing), attached to Gmail thread 19da1b9c32c5cfdc message 19db07af02e86d75 from Thayne Grove 2026-04-21 14:38 UTC. RegCost + tracking pending Boss PDF extraction (Aaron downloads manually to ~/norris-agent/data/boss_pdfs/ if gog v0.12.0 attachment syntax blocks). Subtotal $2,850.
- **Persisted:** 2026-04-22T12:23:39Z

### S-2026-013 — Jimmy Benz / AEP / SWEPCO — 2026-03-20 (✅ SHIPPED)

- **Filename:** SD-2026-BENZ-SWEPCO-0320.html (locked)
- **Customer:** Jimmy Benz / AEP / SWEPCO
- **PO:** Truck #860377
- **Ship To:** Jimmy Benz, SWEPCO, 101 W Township Street, Fayetteville, AR 72703
- **Line items:** 1x NU-BC-2851 — subtotal $305.00
- **Ship Date:** 2026-03-20
- **Tracking:** 1Z2W49000393585850
- **Delivered:** 2026-03-24
- **fulfillment_source:** nu_stock
- **reg_cost:** $52.16
- **cb_internal_note:** Shipped Mar 20, delivered Mar 24. NOT YET INVOICED. QB invoice pending. Reference Truck #860377 in invoice memo. Customer charge $94 (Ben's Formula historical override — default formula computes $59; historical record wins).
- **Persisted:** 2026-04-22T12:27:05Z


---

## LIVING MEMORY STREAM (auto-updates via lib/living_memory.py)

- [2026-04-22T12:28:18Z] `D.11_test` completed=lib/living_memory.py built · decisions=rate-limit 60s, LM append always · changed=new module (150 LOC) · blocked=(none) · next=commit + D.11 close · files=lib/living_memory.py
### S-2026-014 — Darrell Pickle / Florence Electricity Department — 2026-03-20 (✅ SHIPPED)

- **Filename:** SD-2026-PICKLE-FLORENCE-0320.html (locked)
- **Customer:** Darrell Pickle / Florence Electricity Department
- **PO:** STOCK
- **Ship To:** Darrell Pickle, Florence Electricity Department, 611 East Reeder St, Florence, AL 35630
- **Line items:** 3x NU-BC-2834, 1x NU-BC-2834-C, 2x NU-BC-2834-F — subtotal $1710.00
- **Ship Date:** 2026-03-20
- **Tracking:** 1Z2W49000328351797
- **Delivered:** 2026-03-23
- **fulfillment_source:** nu_stock
- **reg_cost:** NEEDS_REVIEW
- **cb_internal_note:** Line items CORRECTED per April 8 FlexPro Armor Pricing Master + NorrisPalace: 3x NU-BC-2834 + 1x NU-BC-2834-C + 2x NU-BC-2834-F, subtotal $1,710 (was previously rendered as $1,750 from earlier Telegram quantity-swap). BCB = Bucket Cover Bag (NU-BC-2834-C = BC + BCB, not 'Shield'). Skylift lead — Darrell separately ordered 6 bucket trucks crediting Aaron.
- **Persisted:** 2026-04-22T14:16:22Z
