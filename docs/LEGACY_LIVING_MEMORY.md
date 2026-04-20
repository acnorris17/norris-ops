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
BLOCKED on Boss SKUs: Pickle/Florence Electric, Myers/AEP
PENDING spec: Abadie/Primoris (NU-BC-2828 $235)
DONE: AJ Morris/Chain Electric $8,930.48 sent April 18

Monday first move: confirm ready list, push Boss Products on Pickle+Myers SKUs.

## P/N RULE + BCB + INVOICE CORRECTIONS (April 19, 2026)

### P/N TERMINOLOGY — PERMANENT
Aaron uses P/N (Part Number) not SKU. Correction flag if any agent says SKU.
Ops portal, pricing master, SD generator, all output: P/N not SKU.

### BCB DEFINITION LOCKED
BCB = Bucket Cover Bag ($55 storage accessory). NOT Shield, NOT Combo.
Master has labeling inconsistency (NU-BCB-2851-SL called "Shield 2-Man" in memory).
1.5-Man BCB P/N unknown — pull from Boss paperwork Monday (likely NU-BCB-2834-SL @ $55).

### STALE FLAGS PURGED
"Blocked pending Boss SKU" was STALE DATA from April 7 snapshots.
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
Stale "SKU" = correction flag. Fix immediately.

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
"Blocked pending Boss SKU" in shipments.json = STALE — purge next session.

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
5. Said "SKU" after P/N rule was stated
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

---

## CLOUDFLARE ZERO TRUST — LIVE (April 20, 2026)
### Status: BLOCKER RESOLVED ✅

**New canonical URL:** norrisops.com (Cloudflare Pages, auto-deploys from acnorris17/norris-ops on push to main)
**Old URL:** ops.norrisutilities.com — remains live on Squarespace DNS → GitHub Pages. READ-ONLY FALLBACK. DO NOT TOUCH.

### Infrastructure
- Cloudflare Pages: deploys from acnorris17/norris-ops (same repo, same behavior as GitHub Pages)
- Cloudflare Zero Trust: ACTIVE on norrisops.com
- JS auth gates (norris2026/legacy2026): SUPERSEDED by Cloudflare Access but kept as belt-and-suspenders until explicit removal approved by Aaron

### Access Policies
- **Policy 1 "Aaron Full":** acnorris@norrisutilities.com — all paths
- **Policy 2 "CB Limited":** cbutler@norrisutilities.com (or CB's email) — all paths EXCEPT /aaron-only/

### What Changed
- Cloudflare Pages is now the deployment target (same repo, same pushes work)
- Real authentication replaces JS password prompts
- CB cannot reach /aaron-only/ paths at the Cloudflare layer (not just visually hidden)

### What Did NOT Change
- GitHub repo acnorris17/norris-ops: unchanged
- ops.norrisutilities.com: unchanged, untouched
- Squarespace DNS: unchanged
- JS password gates: still in code as secondary layer
