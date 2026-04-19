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
- ✅ S009 Pickle/Florence — 3× NU-BC-2834 + 1× NU-BC-2834-C + 2× NU-BC-2834-F = $1,710 — ARCH SKUs CONFIRMED (handled previously)
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

**KEY SKUs — FlexPro Armor (2026 Pricing):**
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
