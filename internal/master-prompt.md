# MASTER CLAUDE CODE PROMPT — NORRIS UTILITIES OPS PORTAL
# Generated: April 10, 2026 by Legacy AI Agent
# Purpose: Complete, comprehensive build prompt that captures EVERYTHING
# Aaron has asked for, established, and expects — no shortcuts, no regressions.
# Run this in Claude Code with --permission-mode bypassPermissions
# Repo: ~/norris-ops | Live: ops.norrisutilities.com

---

You are building and perfecting the Norris Utilities® internal operations portal.
This prompt represents months of work, 80+ hours, thousands of dollars invested by Aaron C. Norris.
DO NOT regress. DO NOT replace what works. BUILD ON TOP. READ EVERY LINE.

## WHAT ALREADY EXISTS AND MUST BE PRESERVED

The portal is at ~/norris-ops/ (git repo: acnorris17/norris-ops, live at ops.norrisutilities.com).
The gold standard commit is: 9303a81 (Apr 7, 2026) — 1,128-line index.html, fully restored.
Current index.html is 1,128 lines. DO NOT reduce it. Only add/fix.

### BRAND DESIGN — LOCKED. DO NOT CHANGE.
- Header gradient: #0a0e5c → #0033cc → #0066ee → #00aaff → #06D0FF (135deg)
- White SVG chevron transition from header to body
- Ghost phoenix watermark: opacity 0.07 in header, 0.025 in body
- Font: Lato (300/400/700/900) for all UI + Playfair Display italic for taglines
- Section header style: first word in #0033cc, rest in #1a1a1a
- Body background: #f5f6fa
- Card radius: 14px, shadow: 0 3px 14px rgba(0,0,0,0.05)
- Tab nav: dark navy rgba(10,14,92,0.97), active tab has cyan left border + underline
- brand.css exists at ~/norris-ops/css/brand.css — link it, don't duplicate

### TWO-TIER ACCESS — MUST STAY EXACTLY AS IS
- Login overlay on page load
- Password "norris2026" = Aaron full access (sees .aaron-only elements)
- Password "legacy2026" = CB limited access (hides .aaron-only elements)
- CSS: elements with class="aaron-only" hidden from CB view
- The login system uses localStorage to persist session
- DO NOT break or simplify this — it is required for CB use

### CELEBRATIONS ENGINE — SECRET FROM CB
- Fireworks + confetti + phoenix rise animation triggers on checkbox completion
- Hidden from CB (aaron-only)
- Currently LIVE — do not remove

### DYNAMIC DATA SYSTEM
- ~/norris-ops/data/dashboard_stats.json drives stat cards
- ~/norris-ops/data/shipments.json drives shipments tab
- ~/norris-ops/data/invoice_queue.json, followup_queue.json, etc.
- Data syncs from M1 every 15 minutes via portal_data_sync.sh
- The portal reads these JSON files on load — JavaScript must handle missing/null gracefully

---

## WHAT NEEDS TO BE BUILT / FIXED (in priority order)

### PRIORITY 1 — PORTAL MUST SHOW CORRECTLY RIGHT NOW
Verify and fix the following in index.html without breaking anything:

1. **Shipments Tab** — currently shows 0 orders. Must read from ~/norris-ops/data/shipments.json
   and display real shipment data. The JSON file exists — wire it up.
   Each shipment card must show: customer name, SD link, tracking #, status badge, invoice status.
   CC customers (AJ Morris/Chain Electric, Jeremy Brown) must show "CC +4%" badge.

2. **Stats Cards** — must pull from dashboard_stats.json. Real numbers:
   - Active Deals: 3 (EPB $185K, Terex $500K+, BSS TBD)
   - Uninvoiced Orders: 9 (7 ready, 2 blocked)
   - Skylift Trucks: 6 (PO $1,091,402.50)
   - FlexPro Inventory: per pricing spreadsheet

3. **Overdue Follow-Ups** (aaron-only) — must show:
   - Rick Sutherland, EPB Chattanooga — SkyTruck47 $185K, 119+ days cold
   - Bill Kugler, Terex — OEM bucket covers $500K+
   - Jared Lemoine, Irby Construction — BSS RCOO program

4. **Navigation** — all 10 tabs must work. Current tabs confirmed in codebase:
   Dashboard | Shipments & Invoicing | Accounts Payable | Follow-Ups |
   Contacts | CB's Tasks | Samson Rope | PO Generator | Tools | Docs

5. **Quick Links** — must include working links to:
   - Google Sheets Shipping Log: https://docs.google.com/spreadsheets/d/1A6Lh6YJGclrf_r_Sgw2_iWRMoOVeFcaU2t3O_owrGaw/edit
   - Shared Google Drive (CB): https://drive.google.com/drive/folders/1ryrVHLx3T4X7H7W8ropwjuOIh-cRdKrk
   - QuickBooks Online: https://app.qbo.intuit.com
   - Discord: https://discord.com/channels/1488572836858691617
   - Shipping Docs folder (all SDs)
   - UPS Tracking (link to ups.com)

### PRIORITY 2 — BRAND CSS SYSTEM (brand.css)
File exists at ~/norris-ops/css/brand.css — verify it contains:
- All gradient variables as CSS custom properties
- Typography scale (Lato weights, Playfair italic)
- Color palette: --nu-blue: #0000FF, --nu-cyan: #06D0FF, --nu-dark: #0a0e5c, --nu-mid: #0033cc
- Card, button, badge, tag reusable classes
- Section header pattern (first word blue)
If brand.css is incomplete, complete it. Index.html already links it.

### PRIORITY 3 — SHARED NOTES SYSTEM
Each tab must have a notes area (collapsible, not intrusive):
- Aaron's notes: blue-tinted, labeled "Aaron"
- CB's notes: green-tinted, labeled "CB"  
- Notes persist in localStorage (key: "nu_notes_[tabname]")
- Aaron-only notes hidden from CB using .aaron-only class
- Notes auto-save on blur, show last-saved timestamp

### PRIORITY 4 — SHIPPING DOCUMENTS SECTION
The Docs tab must show a clean SD index:
- All SD-*.html files from ~/norris-ops/shipping-docs/ listed as cards
- Each card: SD number, customer name, date, status badge, "View" button
- Sorted newest first
- Status badges: Pending Ship (yellow), Shipped (blue), Delivered (green), Invoiced (dark)

### PRIORITY 5 — CB'S TASKS TAB
Must show CB's daily workflow, clearly organized:
1. Today's Shipping Tasks — any SDs printed but not shipped
2. Invoicing Queue — shipments confirmed delivered, ready to invoice in QB
3. Completed Today — checkboxes, celebrates on completion (CB sees confetti, not phoenix)
Must pull from ~/norris-ops/data/cb_tasks.json

---

## ABSOLUTE RULES — NEVER VIOLATE

1. **NO PRICES ON SHIPPING DOCUMENTS** — SDs show SKU, product name, quantity, addresses only
2. **FlexPro Armor has NO ® symbol** — it is NOT registered
3. **Norris Utilities®** — ® on first use only per page
4. **A Legacy of Commitment®** — ® on first use only
5. **Never store banking info on customer-facing docs**
6. **Never print internal notes on SDs** — use display:none for @media print
7. **No job titles on SDs** — name, company, phone, email only
8. **All SDs print via headless Chrome** — never the print dialog, no browser headers/footers
9. **Brand colors only** — #0000FF (primary blue), #06D0FF (cyan), #0a0e5c (dark navy)
10. **Lato font** for all UI. Playfair Display italic for taglines only.
11. **Never reduce index.html below 1,128 lines** — only add
12. **Never change the login/access system** — two-tier is required
13. **Never remove the celebrations engine** — it is hidden from CB but required for Aaron
14. **Build on top of existing code** — never replace working systems
15. **After every change: git add -A && git commit -m "description" && git push origin main**
16. **Read ~/norris-ops/data/*.json before writing** — don't overwrite real data

---

## NORRIS UTILITIES BUSINESS CONTEXT (for accurate content)

**Company:** Norris Utilities, LLC | Founded Nov 9, 2021 | Birmingham, AL 35242
**Address:** 130 Inverness Plaza #210, Birmingham, AL 35242
**Phone:** 205-500-1343 | Email: acnorris@norrisutilities.com
**Website:** www.NorrisUtilities.com

**Products:**
- FlexPro Armor bucket covers (manufactured by Boss Products)
  - NU-BC-2828: 1-Man BC $235 | NU-BC-2834: 1.5-Man BC $265
  - NU-BC-2851: 2-Man BC $305 | NU-BC-2834-F: ARCH 1.5-Man $305
  - NU-BC-2851-F: ARCH 2-Man $345 | Full list in NorrisPalace
- Samson Rope (distribution, 30% margin)
- Skylift bucket trucks (dealer)
- Bay Shore Systems drill rigs (independent rep, $3K/month retainer)

**Team:**
- Aaron C. Norris — Founder & CEO (full portal access, norris2026)
- Caroline Butler (CB) — Operations Admin, remote SE Alabama (limited access, legacy2026)

**Key contacts for portal content:**
- Thayne Grove, Boss Products: tgrove@bossproductsinc.com
- Troy Gongwer, Boss Products: tgongwer@bossproductsinc.com (CC on all Boss emails)
- Donna Poll + Sarah Daniels, Samson Rope (CC on all Samson emails)
- Rick Sutherland, EPB Chattanooga: sutherlandra@epb.net (cold deal, follow up)
- Bill Kugler, Terex: (cold deal, follow up)

---

## PENDING ITEMS FROM ROADMAP (build these if not present)

From ~/norris-ops/change-log.html:
- Embed the Living Roadmap Google Sheet as iframe or fetch-and-render
- Sheet ID: 1dZ7YIhdjX7XgtKUkbd-4LUErI1uu0EuR3omwyp3K0Zg

From portal — verify these files exist and are properly linked:
- change-log.html ✓
- aaron.html (Aaron's private dashboard, norris2026 only)
- cb-onboarding.html (CB day 1 guide)
- hubspot-setup.html (CRM setup)
- team.html + team-live.html (OneWheel team characters)
- mission-control.html, calendar.html, journal.html

---

## AFTER BUILDING — REQUIRED STEPS

1. Verify ops.norrisutilities.com loads correctly
2. Test login with both passwords (norris2026 and legacy2026)
3. Verify shipments tab shows real data
4. Verify stats cards show real numbers
5. Test a checkbox to confirm celebrations fire
6. Confirm brand.css is linked and styling applies
7. Hard refresh test (Ctrl+Shift+R)
8. git log --oneline -5 to confirm all commits pushed

---

## WHAT NOT TO DO (learned from past regressions)

- Do NOT create a new index.html from scratch — edit the existing 1,128-line file
- Do NOT change the gradient colors — they are confirmed correct
- Do NOT simplify the login system — two-tier access is required
- Do NOT remove the ghost phoenix watermark
- Do NOT change the chevron design
- Do NOT install new CSS frameworks — Lato + Playfair only
- Do NOT add emoji to production HTML files
- Do NOT leave placeholder data — use real business data
- Do NOT send Telegram notifications during this build — portal scripts are silenced
- Do NOT create duplicate JSON files — update existing ones

---

END OF MASTER PROMPT
Generated by Legacy AI Agent for Aaron C. Norris — Norris Utilities, LLC
April 10, 2026
