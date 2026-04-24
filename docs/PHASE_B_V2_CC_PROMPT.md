═══════════════════════════════════════════════════════════════════════════════
SA V5 V2 — PHASE B REBUILD MASTER CC PROMPT
Paste as first message to a FRESH Claude Code (cc) session on M1.
V1 SHIPPED 2026-04-23 1h 11m. AARON CLICK-TEST FAIL — 40+ DEFECTS.
V2 addresses every defect line-by-line from Aaron's 2026-04-24 review.
Author: M5 Claude Opus 4.7 (Session 9) | Date: 2026-04-24
═══════════════════════════════════════════════════════════════════════════════

                        ⚠ READ EVERY LINE BEFORE EXECUTING.
                        ⚠ SKIP NOTHING. V1 FAILED BECAUSE OF
                        ⚠ SILENT DEVIATIONS AND DATA-INGEST SHORTCUTS.
                        ⚠ ONE AUTONOMOUS BUILD, ~8–12 HOURS.

═══════════════════════════════════════════════════════════════════════════════
V2 IN 30 SECONDS
═══════════════════════════════════════════════════════════════════════════════

WHO     Aaron C. Norris, Norris Utilities LLC, Birmingham AL.
WHAT    Rebuild the Shipments & Invoicing portal page with every defect
        from Aaron's V1 click-test fixed, plus the data layer that V1
        skipped (pricing, shipping, tracking, descriptions, totals, CC
        fee auto-calc, invoice PDF linkage, KPI tiles). All SD-sourced
        data must ingest correctly; all post-invoice data must reflect
        the actual QB invoice.
WHERE   Branch: feature/sa-v5-completion (NEVER merge to main)
        Repos:  ~/norris-ops/  +  ~/norris-agent/
        Preview: http://192.168.1.184:8765 (keep up)
WHY     V1 got the skeleton right but failed on data, interaction, and
        Source-Priority discipline. Aaron found 40+ defects. CB cannot
        invoice from V1 as it exists. Must fix.
CANARY  Source Priority violation ALONE is reason to reject V1. Henkels &
        McCoy row: SD + Aaron both said NU-BC-BY2828; SA called
        "EVIDENCE CONFLICT" and overrode to 1.5-Man BC. That is an
        explicit R8 honesty rule violation and a direct violation of
        Source Priority F.28. Must be fixed AT THE CODE LEVEL, not in
        docs only.
WAYNE   "Would Wayne be proud of this?" V1 answer was no — because CB
        cannot use it to invoice. V2 answer must be yes.

═══════════════════════════════════════════════════════════════════════════════
TOP-OF-PROMPT CERTIFICATION
═══════════════════════════════════════════════════════════════════════════════

Before any commands, CC MUST respond with Telegram Tier 1 ping to
@NorrisLegacyBot chat 8758078447 (after silent read of this entire
prompt):

    ┌─────────────────────────────────────────────────┐
    │ V2 REBUILD READY                                │
    │                                                 │
    │ Read 100% of prompt: ✅                         │
    │ V1 defect list understood (40+ items): ✅       │
    │ Source Priority code-lock plan set: ✅          │
    │ Data-ingest plan set: ✅                        │
    │ Abort conditions memorized: ✅                  │
    │ Estimated runtime: 8–12 hours                   │
    │ Tier 2 per section commit                       │
    │ Tier 1 only on HALT or V2 DONE                  │
    │                                                 │
    │ Beginning Section 0 now.                        │
    └─────────────────────────────────────────────────┘

Then execute Section 0 STATE VERIFICATION.

═══════════════════════════════════════════════════════════════════════════════
SECTION 0 — STATE VERIFICATION (NO CODE UNTIL THIS PASSES)
═══════════════════════════════════════════════════════════════════════════════

0.1  Git state
     cd ~/norris-ops && git branch --show-current    # feature/sa-v5-completion
     cd ~/norris-ops && git status --porcelain       # should be clean
     cd ~/norris-agent && git branch --show-current  # feature/sa-v5-completion
     cd ~/norris-agent && git status --porcelain     # clean (V1 stash popped
                                                      # or still stashed per
                                                      # Aaron)
     Record both HEAD hashes. V1 close was approximately:
       norris-ops  9536d52 (build) / d8cadd5 (handoff)
       norris-agent b1fa954
     Newer HEADs expected if Aaron ran further commits.

0.2  Preview server
     curl -sf -o /dev/null -w "%{http_code}" http://192.168.1.184:8765/shipments.html
     # 200. If not running, respin from /tmp/sa-v5-preview.

0.3  V1 artifacts present (sanity check before we edit them)
     test -f ~/norris-ops/shipments.html
     test -f ~/norris-ops/assets/js/status-pill.js
     test -f ~/norris-ops/assets/js/detail-panel.js
     test -f ~/norris-ops/assets/js/notes-editor.js
     test -f ~/norris-ops/assets/js/invoice-archive.js
     test -f ~/norris-ops/assets/js/payment-badge.js
     test -f ~/norris-ops/assets/js/cc-fee-calc.js
     test -f ~/norris-ops/assets/js/registry-client.js
     test -f ~/norris-ops/assets/js/celebration-engine.js  # V1 wired to
                                                            # /celebrations.js
     test -f ~/norris-ops/assets/js/mega-celebrations.js
     test -f ~/norris-agent/lib/audit_log.py
     test -f ~/norris-agent/lib/status_engine.py
     test -f ~/norris-agent/lib/ledger.py
     test -f ~/norris-agent/lib/shipments_writer.py
     test -f ~/norris-agent/lib/fuzzy_match.py
     test -f ~/norris-agent/lib/canonical_enforce.py
     test -f ~/norris-agent/lib/payment_rules.py
     test -f ~/norris-agent/bin/sa_v1_writer.py
     # If any missing, HALT — V1 state is corrupted, escalate to Aaron.

0.4  sa-v1-writer LaunchAgent
     launchctl list | grep sa-v1-writer
     curl -sf http://127.0.0.1:8766/health
     # If not loaded, load it; do NOT rename — V2 extends, doesn't rename.

0.5  Brand assets + master data
     test -f ~/norris-ops/assets/css/NU_Brand_CSS_Framework.css
     for f in Full_Logo_White.png Full_Logo_Blue.png Full_Logo_Black.png \
              Full_Logo_BlueBlack.png Phoenix_White.png Phoenix_Blue.png \
              Phoenix_Black.png; do
       test -f ~/norris-ops/assets/images/"$f" && echo "OK $f" || echo "MISSING $f"
     done

     # FlexPro Armor master spreadsheet — REQUIRED for V2 data ingest
     ls ~/norris-agent/project_knowledge/FlexPro_Armor_Complete_Pricing_Master.xlsx \
       ~/norris-agent/project_knowledge/FlexPro_Armor_Direct_Price_List.csv \
       ~/norris-agent/project_knowledge/QB_Contact_List_with_Addresses*.xlsx \
       ~/norris-agent/project_knowledge/Products_and_Services*Norris*.xlsx \
       ~/norris-agent/project_knowledge/Detailed_Sales_Report*Product*.csv
     # All must be present. If one is missing, HALT + list missing.

0.6  Pytest baseline
     cd ~/norris-agent && python3 -m pytest tests/ -q 2>&1 | tail -3
     # Expected: 372 passing (V1 close). V2 adds tests; regression
     # below 372 = HALT.

0.7  Defensive greps (V1 baselines — must still be 0)
     grep -rE '\bSKU\b' ~/norris-ops/ ~/norris-agent/lib/ \
       --include="*.py" --include="*.html" --include="*.js" --include="*.css" \
       --include="*.json" --include="*.md" 2>/dev/null | \
       grep -v "test_" | grep -v "MEMORY_" | grep -v "forbidden" | \
       grep -v "journal" | wc -l
     # = 0
     grep -rE 'Abadie' ~/norris-ops/ ~/norris-agent/data/customer_registry.json \
       2>/dev/null | wc -l
     # = 0
     grep -rE 'FlexPro Armor®' ~/norris-ops/ --include="*.html" 2>/dev/null | wc -l
     # = 0
     grep -rE 'FlexPro Armor Guard' ~/norris-ops/ ~/norris-agent/ 2>/dev/null | wc -l
     # = 0

0.8  Disk + deps
     df -h ~ | tail -1   # > 5 GB free
     python3 -c "import rapidfuzz, openpyxl, pandas, pypdf, playwright, filelock"
     # All imports must succeed; install any missing via
     # pip3 install --user --break-system-packages <name>

0.9  Gmail API / IMAP readiness (V2 ingests QB invoice emails)
     ls ~/norris-agent/.gmail_oauth.json 2>/dev/null
     # If missing, build offline-only ingest; Aaron will wire live later.

0.10 Section 0 result
     ALL pass → Section 1.
     ANY fail → HALT. Tier 1 ping with exact check + expected/actual.

═══════════════════════════════════════════════════════════════════════════════
SECTION 1 — OPERATING CONTEXT + HARD RULES (enforce forever)
═══════════════════════════════════════════════════════════════════════════════

1.1  IDENTITY
     User: Aaron C. Norris, Founder/CEO Norris Utilities LLC, Birmingham AL.
     3rd-generation utility equipment dealer/distributor. Sole sales force.
     Admin: Caroline Butler (CB, Tier 1 trust, Jan 2026 onward). CB uses
     this portal daily to invoice in QuickBooks. Every defect CB hits is
     a direct hit to cash flow. V2 must be CB-usable.

1.2  VOCABULARY (IRON-CLAD)
     • "SKU" FORBIDDEN everywhere: code, comments, tests, docs, commits,
       Telegram, ledger entries, audit entries. Always "P/N" or
       "part number". Search surfaces that legitimately enforce the ban
       (e.g., grep patterns in enforcement scripts) are fine but MUST
       include a header comment:
           # enforcement: this file intentionally contains the literal
           # string "SKU" as the forbidden-token pattern being checked.
       so grep can exclude them. No unmarked exemptions.
     • Wayne Abide (NOT Abadie). QB is authoritative.
     • FlexPro Armor — NO ® EVER. Bare name. Never "FlexPro Armor Guard."
     • Norris Utilities® / A Legacy of Commitment® / Phoenix Icon® — use ®.
     • "Child" is OUT. V2 uses "Grouped" everywhere (shipments, SDs, UI,
       ledger events, audit entries, notes). Visual indicator required
       (see §3.6).
     • "Canonical" is OUT in customer-facing labels and UI. Rename:
       - The old "Canonical Name" copy button → "Customer Name" (for
         a person) OR "Company & Contact" (if registry resolves to
         company-only + person). Button labels must match what CB sees
         in QB: QB's field is literally "Customer" in the Bill-to block.
         So button says "Customer Name" and copies the canonical
         resolved string.
       - Internal code variables may still be named canonical_name;
         UI labels must not.
     • "Customer Type" enum (NEW — see §6.3): Direct, Indirect, Dealer.

1.3  BRAND — V2 VISUAL POLISH (HARD OVERRIDE ON V1)
     V1 went too small on the logo and watermark. Aaron said verbatim:
       "Norris Logo should be about the size of 'Shipping and Invoicing'
        and the other way around... Make the Logo far larger!"
     So the hero logo is the HERO. The text is the subtitle.
     • Hero logo: height clamp(200px, 28vw, 360px) on desktop,
       clamp(120px, 32vw, 200px) on mobile. (V1 was 120px; V2 is ~3x
       larger.) Width auto.
     • Hero headline "Shipments & Invoicing": Lato 900, font-size
       clamp(2.0rem, 4vw, 3.2rem) — SMALLER than V1's hero (V1 was
       ~4.2rem; V2 is ~3.2rem max so logo dominates). Letter-spacing
       -0.02em, gradient fill #FFFFFF → #06D0FF preserved.
     • Tagline "A Legacy of Commitment®": Playfair Display italic,
       clamp(1.0rem, 2vw, 1.3rem), color #06D0FF opacity 0.9.
     • Auto date line ("Friday, April 24, 2026"): same styling,
       slightly below tagline.
     • Ghost watermark: KEEP. Aaron's Image 1 shows it present but
       subtle. V1 "completely removed" was a misread. Restore:
         .nu-phoenix-watermark { opacity: 0.07; width: clamp(300px, 40vw, 600px);
           position: absolute; right: 2rem; bottom: 2rem; pointer-events: none;
           z-index: 0; }
         animation: phoenix-pulse 8s ease-in-out infinite (from V1).
       The ghost logo is on the BACKGROUND, behind the visible hero
       logo — like a translucent echo. Must match the Ops Dashboard
       reference (Aaron's Image 1 shows the intended look).
     • Source CSS: ~/norris-ops/assets/css/NU_Brand_CSS_Framework.css
     • Chevron: keep V1's 48px depth. No change.

1.4  SOURCE PRIORITY — HARD-CODED IN ENGINE (NOT JUST DOCS) [R8 LOCK]
     V1 violated this on Henkels & McCoy. V2 closes the hole by making
     Source Priority a data-dictionary that the status_engine and the
     canonical-resolver MUST consult; any override attempt by auto
     logic MUST be rejected at the function-call level.

     ~/norris-agent/lib/source_priority.py  (NEW, required):

         """Source Priority for SA V5 V2. Higher numbers win.

         When two sources disagree on a field, the HIGHER-rank value is
         the value of record. The lower-rank value is preserved as a
         note for CB/Aaron review but never overwrites.

         SA ("automated hunters") sits at the BOTTOM. SA may never
         overwrite a value from SD or Aaron. SA may only:
           (1) write to unset fields, OR
           (2) add a note of the form "SA suggests X because Y"
               attached to the shipment for CB/Aaron review.
         """
         from enum import IntEnum
         class Source(IntEnum):
             SA_AUTO        = 10   # bottom
             UPS_RECEIPT    = 20   # supporting evidence only
             QB_SNAPSHOT    = 30
             QB_LIVE        = 40
             REGISTRY       = 50
             CB_TELEGRAM    = 60
             AARON_TELEGRAM = 70
             AARON_INTAKE   = 80
             AARON_CONFIRMED = 90  # when Aaron says "confirmed" the
                                    # note trumps SD (edge case)
             SD_DOCUMENT    = 85   # SD default > Aaron default;
                                    # AARON_CONFIRMED (90) > SD
         # NOTE the ordering: SD 85, Aaron's default 80, Aaron
         # confirmed 90. Aaron's rule: SD > Aaron unless Aaron says
         # "confirmed" explicitly.

         def apply_update(existing: dict, new_value, new_source: Source,
                          field: str) -> tuple[dict, dict | None]:
             """Return (updated_dict, audit_note_or_None).
             Never overwrites a higher-rank source. Returns a note
             if the attempt was rejected.
             """
             cur_source_rank = existing.get(f"{field}__source_rank", 0)
             if int(new_source) >= int(cur_source_rank):
                 existing[field] = new_value
                 existing[f"{field}__source_rank"] = int(new_source)
                 existing[f"{field}__source_name"] = new_source.name
                 return existing, None
             # Rejected — create note for CB/Aaron
             note = {
                 "type": "source_priority_rejection",
                 "field": field,
                 "attempted_value": new_value,
                 "attempted_source": new_source.name,
                 "kept_value": existing.get(field),
                 "kept_source": existing.get(f"{field}__source_name"),
                 "message": (
                     f"SA suggested {field}={new_value} from "
                     f"{new_source.name} but kept existing value "
                     f"{existing.get(field)} from "
                     f"{existing.get(f'{field}__source_name')}. "
                     f"CB/Aaron please review."
                 ),
             }
             return existing, note

     ~/norris-agent/lib/status_engine.py (EXTEND):
       - Every write to shipments.json must go through apply_update
         with the correct Source enum.
       - Never write a rejection as an override; route the note to
         the shipment's cb_review_notes[] array (new field) AND to
         ledger event_type="source_priority_rejection".
       - Surface the note in the UI (see §3.8 row highlight + §7.1
         ⚠ tooltip extension).

     ~/norris-agent/tests/test_source_priority.py (NEW, required):
       - apply_update with SA over SD → rejected, note generated
       - apply_update with Aaron (default) over SD → rejected
           (because SD=85, Aaron=80)
       - apply_update with AARON_CONFIRMED over SD → accepted
           (because 90 > 85)
       - apply_update with SD over empty → accepted
       - Specific regression: Henkels & McCoy historical row
         (NU-BC-BY2828 from SD, NU-BC-BY2828 from Aaron, attempted
         SA override to NU-BC-2834) → REJECTED. Note generated.
         Shipment PN stays NU-BC-BY2828.
       - Confidence-based rejections: all 20+ fuzzy-match rejection
         cases from V1 re-run, assert none became overrides.

     R8 lock: status_engine.py writes MUST import Source and call
     apply_update. NO direct dict assignment. Enforced by a pytest
     grep:
       grep -rE '\[\"status\"\]\s*=\s*' ~/norris-agent/lib/ \
         --include="*.py" | grep -v source_priority.py | wc -l
     # Must be 0.

1.5  CANONICAL CUSTOMER NAMING (carried over from V1, clarified)
     Every rendered customer cell MUST either:
       (a) match ^[A-Za-z0-9&\-\.\s]+ - [A-Za-z\s\.]+$  (canonical), OR
       (b) carry class="review-needed" with ⚠ + hover tooltip (flagged)
     V1 defect: "LineTec Services/LTS Power" rendered literally. V2
     fix: registry-loader must replace any " / " or " • " or "|"
     separators with " - " if the right side is a person, else
     flag ⚠. Add test case for "LineTec Services / LTS Power"
     input → should resolve to "LineTec Services - Richard Thornhill"
     via Thornhill alias (LTS Power).

1.6  R8 HONESTY RULE (EXPLICIT TEXT IN CODE AND DOCS)
     Insert at top of ~/norris-agent/lib/status_engine.py as module
     docstring:

         """R8 Honesty Rule (LOCKED 2026-04-24, V2):

         SA NEVER overrides a fact stated by BOTH SD and Aaron.
         SA may only add notes ("SA suggests X because Y") for CB
         and Aaron review. The November 2026 Henkels & McCoy event
         (SD said NU-BC-BY2828; Aaron said NU-BC-BY2828; SA
         "EVIDENCE CONFLICT" wrote 1.5-Man BC) was an R8 violation
         and is the reason this module enforces apply_update().

         If you are writing code that would override a higher-rank
         source: STOP. Emit a note instead. CB + Aaron resolve.
         """

     Same docstring mirror in ~/norris-ops/docs/R8_HONESTY_RULE.md
     (create new file).

1.7  ABORT CONDITIONS (HALT + Tier 1)
     A1. Source Priority test suite regresses (any case fails)
     A2. Pytest below 372 baseline
     A3. Playwright fails
     A4. Defensive grep > 0
     A5. FlexPro Armor master xlsx cannot be parsed
     A6. QB Contact List xlsx cannot be parsed
     A7. Detailed Sales Report CSV cannot be parsed
     A8. Invoice PDF parser fails on reference Invoice 1498 fixture
     A9. Henkels & McCoy regression test fails
     A10. Any copy button fails clipboard write (must be 13 working)
     A11. Any status-pill dropdown selection returns "failed"
     A12. Invoice Sent checkbox doesn't persist after celebration
     A13. Frozen header row not frozen on scroll
     A14. SD logos still missing when opening SD from row
     A15. Canonical regex violation in rendered DOM (not ⚠ flagged)
     A16. KPI tile count != 4 or values don't match aggregation
     A17. Totals row doesn't calculate
     A18. Customer Type enum missing on any rendered row
     A19. Shipping cost manual edit fails write
     A20. Price manual edit fails write
     A21. Invoice variance tracker fails to detect $ change
     A22. Grouped indicator missing on multi-SD parent rows
     A23. Merge to main attempted
     A24. Ghost watermark missing from hero
     A25. Hero logo height < 200px on desktop render

1.8  COMMUNICATIONS
     Tier 1: HALT, V2 DONE, decision-blocker only. Telegram to
     @NorrisLegacyBot chat ID 8758078447.
     Tier 2: per-section commit. Telegram same channel.
     Never ping between 9:30 PM and 3:30 AM CT unless HALT.

1.9  INFRASTRUCTURE NOTES (same as V1 + extensions)
     • G Brain write broken — --no-embed flag always.
     • Living Memory Bridge is M5-owned. CC does NOT fire Gmail
       drafts. CC fires Tier 2 Telegram.
     • LMM path: ~/norris-ops/docs/LEGACY_LIVING_MEMORY.md.
       CC never writes here.
     • Google Drive folder "00_Living_Memory /" has trailing space.
       Never normalize.
     • NorrisPalace (NP) via `np ingest --no-embed --tag ...`.
     • CF Access service token failing on norrisops.com — do not
       rotate this session.
     • ClawHavoc rule: no ClawHub skill installs.
     • agent-v4 + boot-recovery LaunchAgents are DEAD (Session 8
       recovery). Aaron re-enables post-V2 PASS. Do NOT reload
       them mid-V2 build.

═══════════════════════════════════════════════════════════════════════════════
SECTION 2 — V1 DEFECT → V2 FIX MAP (EVERY AARON NOTE, LINE BY LINE)
═══════════════════════════════════════════════════════════════════════════════

CC MUST reference this table when building. Every single row must be
addressed. No exceptions. If a row conflicts with a later section, the
later section wins and the conflict must be noted in Tier 2.

D01  Hero inverted: logo tiny, text huge
     FIX  §3.1 — hero logo becomes the anchor (200–360px desktop).
              Headline shrinks to max 3.2rem.

D02  Ghost logo missing
     FIX  §3.2 — restore ghost phoenix watermark @ 7% opacity
              (Aaron clarified: he wants it, V1 removed by mistake).

D03  Column order wrong. Aaron's locked order (left to right):
       1. Invoice Sent (checkbox)
       2. Inv. #
       3. SD (button to open)
       4. Status (pill)
       5. Order Date
       6. Customer (Company + Person + Customer Type badge)
       7. P/N
       8. Description
       9. QTY
       10. Ship To + POC
       11. Tracking #
       12. PO #
       13. CC Fee
       14. Shipping
       15. Notes
     V1 had a different order. V2 rewrites the table header + all
     rendering to match this exact order.
     FIX  §4.1.

D04  Leftmost "dead" checkbox column (non-functional) — REMOVE.
     Aaron: "there is no button or selection at the column heading"
     V2: remove the dead column entirely. Invoice Sent becomes the
     leftmost clickable and functional cell.
     FIX  §4.2.

D05  Detailed view (▼) missing full SD details. Aaron: "ALL details,
     full content needs to be in the detailed, drop down window."
     Required in expanded panel:
       - Full P/N, Full Product Name, Full Description (from master
         xlsx, not abbreviated)
       - Line-item rate × qty with subtotal
       - Shipping cost (editable)
       - CC fee (auto-calc if CC customer, editable manually)
       - Subtotal / Tax (if any) / Total
       - All audit trail entries
       - 13 copy buttons (QB-field matched)
       - Invoice PDF link (if invoiced) — opens in new tab
       - SD link — opens in new tab (with Back button)
     FIX  §5.

D06  CC customer marker missing + CC fee not auto-calculating.
     Aaron: "there needs to be a small button, something you click
     on to visually show a customer is a CC customer for CB that
     will then auto calculate the CC 4% fee too."
     V2: small pill "💳 CC" on customer row when registry entry
     has cc_fee_applies=true. Clicking toggles (ONLY CB+Aaron,
     not auto) with confirm. Auto-calc runs when subtotal+shipping
     are known. Formula: round((subtotal + shipping) * 0.04, 2).
     FIX  §6.2.

D07  Fuzzy/canonical hover works but name still wrong.
     Aaron: Image 2 shows "⚠ NO FUZZY MATCH / Raw: Dominion Energy
     / Registry lookup failed". But Dominion Energy DOES have a
     registry entry (cust_dominion_crosby = "Dominion Energy - Coy
     Crosby"). V2 fix: registry loader must match on company_root
     alone when POC unknown, default to canonical if single POC.
     When multi-POC (rare), flag ⚠. Dominion has one POC (Crosby)
     → auto-resolve to "Dominion Energy - Coy Crosby" immediately.
     FIX  §7.1.

D08  "Canonical Name" label confusing. Aaron: "what does Conical
     even mean?" (typo; he means "canonical"). Rename to
     "Customer Name" in all UI. Internal variable unchanged.
     FIX  §1.2 terminology + §5.3 copy buttons.

D09  Line Items showing only "NU-BC-2851" without description.
     Aaron: "should have the P/N, Product, and Description Exactly
     like shown in the price sheet".
     V2: ingest FlexPro_Armor_Complete_Pricing_Master.xlsx fully.
     Render: P/N | Product Name | Full Description (from xlsx
     "Description" column).
     FIX  §5.2 + §8 ingest.

D10  Order date layout wrong.
     V2: uses format "MM/DD/YY" in table, "YYYY-MM-DD" in detail
     panel and ISO in audit.
     FIX  §4.3.

D11  Tracking not populated. Aaron: "Tracking Didn't come in, this
     has shipped out nor did other details".
     V2: ingest UPS Shipping Log Google Sheet via the existing
     Google Apps Script output at ~/norris-agent/data/
     ups_shipping_log_snapshot.csv (Aaron will drop fresh snapshot;
     if stale, V2 reads whatever is current and flags stale > 24h).
     Match UPS rows to shipments by SD# or customer+date;
     populate tracking numbers, shipped_date, carrier.
     FIX  §8.2.

D12  Terms field wrong: says "Direct" (customer type) instead of
     "Due Upon Receipt" (payment terms).
     V2: split into TWO fields.
       terms = payment terms (Net 30 / Net 60 / Due on Receipt /
                              CC on File / CC / ACH)
       customer_type = Direct / Indirect / Dealer
     Customer Type (NEW per Aaron):
       Direct   = NU ships directly to this customer
       Indirect = NU ships to this customer as an end user THROUGH
                  a Dealer (e.g., Primoris receiving Aerial Hydraulics
                  drop-ship — Primoris is Indirect, Aerial is Dealer)
       Dealer   = a NU reseller (currently only Aerial Hydraulics)
     Render customer_type as a small colored pill next to customer
     name:
       Direct   = blue pill "DIRECT"
       Indirect = orange pill "INDIRECT (via Dealer)"
       Dealer   = green pill "DEALER"
     FIX  §6.3.

D13  Pricing not imported.
     V2: every shipment with a known P/N must resolve to a price
     from the master xlsx automatically on ingest AND on render
     (in case registry or P/N updates). customer_type determines
     which price column wins:
       Direct / Indirect → "Direct" price column
       Dealer → "Dealer" price column
     Aaron edits override are preserved (F.20 Source Priority).
     FIX  §5.2 + §8 ingest.

D14  Need to copy QTY and other QB-mirrored fields.
     V2: the 13 copy buttons become 15 in V2:
       1. Customer Name
       2. Customer Email (from registry)
       3. Bill-To Address
       4. Ship-To Address
       5. Carrier
       6. Ship Date
       7. Tracking #
       8. Terms (payment)
       9. P/N
       10. Product Name
       11. Full Description
       12. Qty (NEW)
       13. Rate (NEW)
       14. PO #
       15. Shipping $
     Plus a 16th "Copy ALL as TSV" for paste into QB bulk-import
     grid.
     FIX  §5.4.

D15  Status pill dropdown all return "failed".
     V1 was writing via sa-v1-writer on :8766 but the endpoint
     wasn't wired end-to-end. V2:
       - sa_v1_writer.py must expose POST /api/shipments/{id}/status
         with JSON body {"status": "shipped", "actor": "aaron"}
       - Response: updated shipment JSON
       - Health check: GET /health returns 200 {"ok": true}
       - Write atomic via FileLock + tempfile + rename on
         shipments.json
       - On any write: audit + ledger append + R8/source-priority
         check
       - CORS enabled for 192.168.1.184 origin
     Client side (status-pill.js):
       - await fetch with correct headers
       - On 200: update DOM
       - On non-200: revert pill + toast with specific error
     Test end-to-end: Playwright clicks Shipped → assert pill
     updates, ledger has entry, shipments.json reflects change.
     FIX  §4.4.

D16  Shipping costs not imported and formula not applied.
     V2: ingest from UPS Shipping Log snapshot + from SD if SD
     contains shipping field. Apply Ben's Formula:
       direct/indirect: CustomerCost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)
       dealer:          CustomerCost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.05, 0)
     Formula reverse-check: if ingested shipping cost doesn't
     match formula ±$1, flag row for CB review (not a blocker —
     Aaron may have manually set it).
     FIX  §8.3.

D17  "Child" terminology is out. "Grouped" is in. Visual indicator
     needed.
     V2: parent rows show "GROUPED (N)" badge + each grouped row
     shows "↳ GROUP: <parent-SD>" indicator. Clicking parent row
     expands grouped children below.
     FIX  §4.5.

D18  Frozen header row.
     V2: thead position: sticky; top: 0; z-index: 10;
     background: white; border-bottom: 2px solid #06D0FF.
     FIX  §4.6.

D19  Column widths + centering off.
     V2: explicit column widths in CSS; text-align per column:
       numbers right-aligned, dates + text left-aligned,
       badges centered. All column headers centered above their
       data.
     FIX  §4.7.

D20  Customer column doesn't show Company + Person by default.
     V2: customer cell always renders:
       <div class="customer-company">{company_root}</div>
       <div class="customer-poc">{poc}</div>
       <span class="customer-type-pill">...</span>
       <span class="payment-badge">...</span>
       <span class="cc-marker">...</span> (if applicable)
     FIX  §4.8.

D21  CC fee 4% auto-calc not running.
     V2: cc-fee-calc.js runs on every render for any shipment
     where resolved_registry.cc_fee_applies === true AND
     (subtotal + shipping) > 0. Value written to shipment.cc_fee
     via sa-v1-writer (so it's persisted). Manual edit allowed.
     FIX  §6.2.

D22  Henkels & McCoy row — R8 violation. MAJOR.
     V2: hard-reverse the V1 override. Shipment's P/N must be
     NU-BC-BY2828 (SD+Aaron agreement). Add a regression test
     (§1.4 test_source_priority.py). Row highlighted orange
     (review color — see D23). No shipping charged (Aaron's
     courtesy). Add ability to zero shipping with audit note
     (see D24).
     FIX  §1.4 + §8.4.

D23  Row color highlighting.
     V2: rows with cb_review_notes[] non-empty OR with
     source_priority_rejection events in last 7d render with:
       background: rgba(251, 146, 60, 0.08);
       border-left: 4px solid #FB923C;
     Rows with status=blocked:
       background: rgba(220, 38, 38, 0.08);
       border-left: 4px solid #DC2626;
     Rows with recent celebrations:
       background: rgba(16, 185, 129, 0.08);
       border-left: 4px solid #10B981;
     (The latter fades after 10 seconds back to neutral.)
     FIX  §4.9.

D24  Shipping cost manual edit + delete.
     V2: in detail panel, shipping cost cell is click-to-edit.
     Number input, validates ≥ 0. Blur saves. Delete (set to
     0 with explicit delete button) requires confirm dialog:
       "Remove shipping charge? Reason required."
     Reason textarea required, saved to audit with
     event="shipping_zeroed" + reason.
     FIX  §5.5.

D25  Price manual edit.
     V2: in detail panel, rate cell for each line item is
     click-to-edit. Same pattern as shipping. Reason recommended
     but not required (since Aaron often legitimately changes
     prices per customer). Audit event="line_rate_edited"
     with {old_rate, new_rate, reason?}.
     FIX  §5.6.

D26  Invoice-vs-SD variance tracker.
     V2: when invoice PDF arrives (via §8.5 ingest), compare:
       invoice.line_items vs shipment.line_items
       invoice.subtotal vs shipment.subtotal
       invoice.shipping vs shipment.customer_shipping
       invoice.cc_fee vs shipment.cc_fee
       invoice.total vs shipment.total
     Any mismatch → shipment.invoice_variance = {
       delta_subtotal, delta_shipping, delta_cc_fee, delta_total,
       delta_lines: [{pn, old_rate, new_rate, old_qty, new_qty}],
       detected_at: iso_ts
     }
     UI: small ◇ icon in Inv. # cell on variance rows. Click opens
     variance modal with side-by-side comparison.
     Data of record: SHIPMENT reflects the INVOICE (per Aaron's
     rule: "we need to have this system... update to reflect the
     data on the Invoice in it and note/capture any changes that
     were made from the SD to the Invoice"). Original SD values
     preserved in invoice_variance.
     FIX  §8.5 + §5.7.

D27  Totals and subtotals not calculating.
     V2: detail panel footer row:
       Subtotal: sum(line_items.qty × rate)
       Shipping: shipment.customer_shipping
       CC Fee:   shipment.cc_fee (if cc_fee_applies)
       Tax:      shipment.tax (usually 0 for B2B)
       ────────
       TOTAL:    subtotal + shipping + cc_fee + tax
     Recalculate on any edit. Atomic write via sa-v1-writer.
     FIX  §5.8.

D28  Copy buttons all fail.
     V2 root cause to investigate: V1 may have used Clipboard API
     without HTTPS context. Preview on 192.168.1.184:8765 is HTTP.
     Modern Chrome blocks navigator.clipboard.writeText() on
     non-secure origins.
     FIX: use fallback
       document.execCommand('copy') on a hidden textarea
     with visual success/failure feedback. Test via Playwright
     (the test harness can read what was attempted to write).
     Alternative: enable Chrome flag --unsafely-treat-insecure-origin
     -as-secure=http://192.168.1.184:8765 for Aaron's Chrome. Doc
     both paths in handoff.
     FIX  §5.9.

D29  Row select checkbox (far-left) broken + no batch action.
     V2 deletes the dead col entirely (D04). If Aaron wants batch
     actions in V3, design then. For V2, no batch.
     FIX  §4.2.

D30  Invoice Sent doesn't persist.
     V2: on tick, sa-v1-writer writes invoice_sent=true +
     status=invoiced + audit + ledger, returns updated shipment,
     client re-renders row in archived view. Persist survives
     page reload (V1 may have been local-only state).
     Celebration fires BEFORE row leaves main view (500ms confetti)
     THEN row slide-out 500ms.
     Un-tick (from archived view): confirm dialog → reverts status
     to previous + writes audit.
     FIX  §6.1.

D31  Invoice Sent should be leftmost column.
     FIX  §4.1 — already in column order (D03).

D32  Column header widths + alignment.
     FIX  §4.7 — already specified.

D33  SD opens but logos missing.
     V2 root cause: V1 SD HTML template may reference logos with
     relative paths that break when opened in a new tab. Fix:
     all SD HTML uses absolute paths (http://192.168.1.184:8765/
     assets/images/...) or inline base64-encoded logos for
     portability.
     Also test: open existing SD file in new tab, verify logo
     renders. If a file is missing logos structurally (Phase A
     legacy), regenerate it via the SD generator.
     FIX  §9.1.

D34  SD page needs Back button.
     V2: SD template gets a fixed top bar:
       [← Back to Shipments] <title>
     The Back button calls window.history.back() if history
     present; else closes the tab via window.close() (works
     for SDs opened via target="_blank").
     FIX  §9.2.

D35  Invoice # shown but invoice not linked/openable.
     V2: clicking Inv. # opens the archived invoice PDF (or HTML
     version if available) in a new tab. PDFs stored at
     ~/norris-ops/invoices-archive/{invoice_number}.pdf after
     §8.5 ingest.
     FIX  §5.10.

D36  Post-invoice data not reflected in SD/row.
     V2 handled via §8.5 + D26. After invoice ingest, shipment
     row and SD view BOTH reflect invoice values (with variance
     delta preserved).
     FIX  §8.5.

D37  Shipping Docs button opens but no data.
     V2: Phase A scaffold left this page empty. Build index:
       - table of all SD HTML files in ~/norris-ops/shipping-docs/
       - columns: SD #, Date, Customer, Status, Link
       - sortable, filterable
       - pulls from shipments.json
     FIX  §9.3.

D38  Archived Invoices button opens but no data.
     V2: build index:
       - all shipments with invoice_sent=true, sorted by sent_date
         desc
       - columns: Inv. #, Sent Date, Customer, Amount, SD Link,
         Invoice PDF Link
     FIX  §9.4.

D39  KPI tiles missing.
     V2 (4 tiles, top of Shipments page):
       TILE 1  NU SHIPPING COSTS TOTAL (this month)
               sum of shipment.reg_cost for shipments shipped
               this calendar month (regardless of invoiced status)
       TILE 2  CUSTOMER SHIPPING UNBILLED
               sum of shipment.customer_shipping where
               invoice_sent=false
       TILE 3  PRODUCTS UNBILLED (revenue)
               sum of (sum line_items.qty × rate) where
               invoice_sent=false
       TILE 4  TOTAL UNINVOICED
               Tile 2 + Tile 3 + sum(cc_fee where
               invoice_sent=false)
     Each tile clickable → filters table to that subset.
     FIX  §4.10.

D40  Chain Electric row messed up (screenshot pending from Aaron).
     V2 diagnostic: investigate Chain Electric rows via registry +
     SD files. Specifically Chain's canonical should be "Chain
     Electric - AJ Morris". Canary total $8,930.48 (locked in
     V1). V2 re-verifies the canary and the row layout.
     If screenshot surfaces additional issue in handoff, V3
     captures it.
     FIX  §8.6 canary re-verify.

D41  Search works (Aaron tested "Chain").
     V2: keep V1 search. Add sort on columns. Already implicit
     in column order.
     FIX  no action required beyond §4.

═══════════════════════════════════════════════════════════════════════════════
SECTION 3 — VISUAL POLISH V2 (reflect Aaron's guidance)
═══════════════════════════════════════════════════════════════════════════════

FILES TOUCHED:
  ~/norris-ops/assets/css/shipments-v1.css     (EDIT — major override)
  ~/norris-ops/assets/css/NU_Brand_CSS_Framework.css (EDIT — logo size +
                                                      ghost watermark)
  ~/norris-ops/shipments.html                  (EDIT)
  ~/norris-ops/assets/js/shipments-v1.js       (EDIT — entrance animation)
  ~/norris-agent/tests/test_visual_polish_v2.py (NEW)

3.1  HERO LOGO — NOW THE ANCHOR
     .nu-hero-logo {
       height: clamp(200px, 28vw, 360px);
       width: auto;
       display: block;
       margin: 0 auto 1.5rem;
       filter: drop-shadow(0 8px 24px rgba(6, 208, 255, 0.35));
     }
     @media (max-width: 768px) {
       .nu-hero-logo { height: clamp(120px, 32vw, 200px); }
     }
     /* On scroll, sticky header reduces logo to 80px (from V1) */
     .scrolled .nu-hero-logo { height: 80px; transition: height 250ms ease; }

3.2  HERO HEADLINE — SMALLER THAN V1
     h1.page-title {
       font-family: 'Lato', sans-serif;
       font-weight: 900;
       font-size: clamp(1.8rem, 4vw, 3.2rem);   /* V1 was 4.2rem */
       letter-spacing: -0.02em;
       line-height: 1;
       background: linear-gradient(135deg, #FFFFFF 0%, #06D0FF 100%);
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
       margin: 0.5rem auto 0.5rem;
       text-align: center;
     }
     .page-subtitle {
       font-family: 'Playfair Display', serif;
       font-style: italic;
       font-weight: 400;
       font-size: clamp(1.0rem, 2vw, 1.3rem);
       color: #06D0FF;
       opacity: 0.9;
       text-align: center;
       margin: 0.25rem auto;
     }
     .hero-date {
       font-family: 'Playfair Display', serif;
       font-style: italic;
       font-size: clamp(0.9rem, 1.5vw, 1.1rem);
       color: #FFFFFF;
       opacity: 0.7;
       text-align: center;
       margin-top: 0.25rem;
     }

3.3  GHOST PHOENIX WATERMARK — RESTORE
     .nu-phoenix-watermark {
       position: absolute;
       right: 2rem;
       bottom: 2rem;
       width: clamp(300px, 40vw, 600px);
       opacity: 0.07;
       pointer-events: none;
       z-index: 0;
       animation: phoenix-pulse 8s ease-in-out infinite;
     }
     @keyframes phoenix-pulse {
       0%, 100% { opacity: 0.07; transform: scale(1); }
       50%      { opacity: 0.10; transform: scale(1.02); }
     }
     /* Hero content z-index above watermark */
     .nu-hero-content { position: relative; z-index: 1; }

3.4  CHEVRON — keep V1

3.5  PAGE-LOAD ENTRANCE ANIMATION — keep V1, unchanged

3.6  GROUPED VISUAL INDICATOR (new per Aaron)
     Parent row:
       <tr class="group-parent" data-group-id="g-123">
         ...
         <td class="group-badge"><span class="pill pill-group">GROUPED (3)</span></td>
       </tr>
     Child rows:
       <tr class="group-child" data-parent-sd="S-2026-017">
         <td>...</td>
         <td><span class="group-indicator">↳ GROUP: S-2026-017</span></td>
       </tr>
     CSS:
       .pill-group { background: #0033cc; color: white; font-size: 0.75rem;
                     padding: 2px 8px; border-radius: 4px; }
       .group-child { background: rgba(0, 51, 204, 0.03); }
       .group-indicator { color: #0033cc; font-weight: 600; font-size: 0.85rem; }
     Expand/collapse parent: click on GROUPED badge toggles
     visibility of .group-child rows where data-parent-sd=this
     parent's SD.

3.7  TESTS
     test_visual_polish_v2.py:
       - .nu-hero-logo computed height >= 200px @ 1440px viewport
       - h1.page-title computed font-size <= 52px @ 1440px (smaller
         than logo)
       - .nu-phoenix-watermark opacity 0.07 baseline, animation
         present
       - .pill-group rendered for grouped shipments
       - prefers-reduced-motion respected

3.8  ROW HIGHLIGHTING CSS (supports D23)
     tbody tr.row-review {
       background: rgba(251, 146, 60, 0.08);
       border-left: 4px solid #FB923C;
     }
     tbody tr.row-blocked {
       background: rgba(220, 38, 38, 0.08);
       border-left: 4px solid #DC2626;
     }
     tbody tr.row-celebrating {
       background: rgba(16, 185, 129, 0.08);
       border-left: 4px solid #10B981;
       transition: background 400ms ease 10000ms,
                   border-left-color 400ms ease 10000ms;
     }
     tbody tr.row-celebrating.fade-out {
       background: transparent;
       border-left-color: transparent;
     }

═══════════════════════════════════════════════════════════════════════════════
SECTION 4 — TABLE REBUILD (column order, alignment, sticky header)
═══════════════════════════════════════════════════════════════════════════════

FILES TOUCHED:
  ~/norris-ops/shipments.html
  ~/norris-ops/assets/css/shipments-v1.css
  ~/norris-ops/assets/js/shipments-v1.js          (EDIT)
  ~/norris-ops/assets/js/status-pill.js           (EDIT)
  ~/norris-ops/assets/js/shipments-table.js       (NEW — renderer)
  ~/norris-agent/tests/test_table_rendering.py    (NEW)

4.1  TABLE HEADER (exact order Aaron locked)
     <thead>
       <tr>
         <th class="col-sent">Invoice Sent</th>     <!-- checkbox -->
         <th class="col-inv">Inv. #</th>
         <th class="col-sd">SD</th>
         <th class="col-status">Status</th>
         <th class="col-date">Order Date</th>
         <th class="col-customer">Customer</th>
         <th class="col-pn">P/N</th>
         <th class="col-desc">Description</th>
         <th class="col-qty">QTY</th>
         <th class="col-shipto">Ship To + POC</th>
         <th class="col-tracking">Tracking #</th>
         <th class="col-po">PO #</th>
         <th class="col-ccfee">CC Fee</th>
         <th class="col-shipping">Shipping</th>
         <th class="col-notes">Notes</th>
         <th class="col-expand"></th>  <!-- ▼/▲ -->
       </tr>
     </thead>

4.2  DEAD COLUMN REMOVED
     No leftmost blank checkbox column. First cell is Invoice Sent.

4.3  DATE FORMAT IN TABLE
     Table cell: MM/DD/YY (e.g., "04/20/26")
     Detail panel: YYYY-MM-DD
     Audit: ISO 8601 full

4.4  STATUS PILL END-TO-END FIX
     sa_v1_writer.py endpoint POST /api/shipments/{id}/status
     (see §1.7 A11 + D15). JS fetch must include:
       Content-Type: application/json
       Accept: application/json
     On non-200, parse error body and show specific toast.
     Playwright test: click every status option for 3 sample
     shipments, assert each returns 200.

4.5  GROUPED INDICATOR — see §3.6.

4.6  STICKY HEADER
     thead {
       position: sticky;
       top: 0;
       z-index: 10;
       background: white;
       box-shadow: 0 2px 0 #06D0FF;
     }

4.7  COLUMN WIDTHS
     .col-sent      { width: 80px;  text-align: center; }
     .col-inv       { width: 70px;  text-align: center; }
     .col-sd        { width: 50px;  text-align: center; }
     .col-status    { width: 120px; text-align: center; }
     .col-date      { width: 90px;  text-align: center; }
     .col-customer  { width: 240px; text-align: left; }
     .col-pn        { width: 130px; text-align: left; }
     .col-desc      { width: 240px; text-align: left; }
     .col-qty       { width: 60px;  text-align: right; }
     .col-shipto    { width: 220px; text-align: left; }
     .col-tracking  { width: 180px; text-align: left; }
     .col-po        { width: 100px; text-align: left; }
     .col-ccfee     { width: 90px;  text-align: right; }
     .col-shipping  { width: 90px;  text-align: right; }
     .col-notes     { width: 220px; text-align: left; }
     .col-expand    { width: 40px;  text-align: center; }
     Header alignment matches data alignment.

4.8  CUSTOMER CELL
     <td class="col-customer">
       <div class="customer-company">{company_root}</div>
       <div class="customer-poc">{poc}</div>
       <div class="customer-meta">
         <span class="customer-type-pill type-{customer_type}">
           {CUSTOMER_TYPE_LABEL}
         </span>
         <span class="payment-badge payment-{payment_type}">{payment_label}</span>
         {if cc_fee_applies:}
           <span class="cc-marker" title="CC customer — 4% fee auto-applied">💳 CC</span>
         {end if}
       </div>
     </td>

     CSS:
       .customer-company { font-weight: 700; font-size: 0.95rem; }
       .customer-poc     { font-size: 0.85rem; color: #4B5563; }
       .customer-meta    { margin-top: 4px; display: flex; gap: 6px; flex-wrap: wrap; }
       .customer-type-pill.type-direct   { background: #DBEAFE; color: #1E40AF; }
       .customer-type-pill.type-indirect { background: #FED7AA; color: #9A3412; }
       .customer-type-pill.type-dealer   { background: #D1FAE5; color: #065F46; }
       .cc-marker       { color: #F59E0B; font-weight: 600; }

4.9  ROW HIGHLIGHTING — see §3.8.

4.10 KPI TILES (4 required, top of page above table, below filter row)
     <div class="kpi-tiles">
       <div class="kpi-tile" data-filter="nu-shipping-this-month">
         <div class="kpi-label">NU SHIPPING COSTS (MONTH-TO-DATE)</div>
         <div class="kpi-value">${sum.toFixed(2)}</div>
         <div class="kpi-sub">{count} shipments</div>
       </div>
       <div class="kpi-tile" data-filter="customer-shipping-unbilled">
         <div class="kpi-label">CUSTOMER SHIPPING UNBILLED</div>
         <div class="kpi-value">${sum.toFixed(2)}</div>
         <div class="kpi-sub">{count} unbilled</div>
       </div>
       <div class="kpi-tile" data-filter="products-unbilled">
         <div class="kpi-label">PRODUCTS UNBILLED (REVENUE)</div>
         <div class="kpi-value">${sum.toFixed(2)}</div>
         <div class="kpi-sub">{count} line items</div>
       </div>
       <div class="kpi-tile kpi-tile-highlight" data-filter="total-uninvoiced">
         <div class="kpi-label">TOTAL UNINVOICED</div>
         <div class="kpi-value">${sum.toFixed(2)}</div>
         <div class="kpi-sub">products + shipping + CC fees</div>
       </div>
     </div>

     CSS (summarized):
       .kpi-tiles { display: grid; grid-template-columns: repeat(4, 1fr);
                    gap: 1rem; margin-bottom: 1.5rem; }
       .kpi-tile { background: white; border: 2px solid #E5E7EB;
                   border-radius: 8px; padding: 1rem; cursor: pointer;
                   transition: transform 200ms, box-shadow 200ms; }
       .kpi-tile:hover { transform: translateY(-2px);
                         box-shadow: 0 8px 24px rgba(6, 208, 255, 0.25);
                         border-color: #06D0FF; }
       .kpi-tile-highlight { background: linear-gradient(135deg,
                              #0033cc 0%, #06D0FF 100%); color: white; }
       .kpi-value { font-size: 2rem; font-weight: 900; font-family: Lato; }

     JS: kpi-tiles.js computes from shipments.json on every render.
     Clicking a tile applies the corresponding filter to the table.

═══════════════════════════════════════════════════════════════════════════════
SECTION 5 — DETAIL PANEL V2 (deep data, edits, invoice linkage)
═══════════════════════════════════════════════════════════════════════════════

FILES TOUCHED:
  ~/norris-ops/assets/js/detail-panel.js          (EDIT — major)
  ~/norris-ops/assets/js/copy-buttons.js          (EDIT — 16 buttons)
  ~/norris-ops/assets/js/rate-editor.js           (NEW)
  ~/norris-ops/assets/js/shipping-editor.js       (NEW)
  ~/norris-ops/assets/js/invoice-variance-modal.js (NEW)
  ~/norris-ops/assets/css/shipments-v1.css        (EDIT)
  ~/norris-agent/lib/invoice_parser.py            (NEW — §8.5)
  ~/norris-agent/tests/test_detail_panel_v2.py    (NEW)
  ~/norris-agent/tests/test_rate_editor.py        (NEW)
  ~/norris-agent/tests/test_shipping_editor.py    (NEW)
  ~/norris-agent/tests/test_invoice_variance.py   (NEW)

5.1  TRIGGER — unchanged from V1 (click ▼ or click row outside
     action cells, etc.)

5.2  FULL LINE-ITEM TABLE IN DETAIL PANEL
     <section class="detail-line-items">
       <h4>Line Items</h4>
       <table class="line-items-table">
         <thead>
           <tr>
             <th>P/N</th>
             <th>Product</th>
             <th>Description</th>
             <th>Qty</th>
             <th>Rate</th>
             <th>Total</th>
             <th></th> <!-- edit -->
           </tr>
         </thead>
         <tbody>
           {for each line in shipment.line_items:}
           <tr data-line-id="{line.id}">
             <td>{line.pn}</td>
             <td>{line.product_name}</td>
             <td>{line.description}</td>
             <td class="qty-cell">{line.qty}</td>
             <td class="rate-cell editable" data-rate="{line.rate}">
               ${line.rate.toFixed(2)}
             </td>
             <td class="total-cell">${(line.qty * line.rate).toFixed(2)}</td>
             <td><button class="edit-line-btn">✎</button></td>
           </tr>
           {end for}
         </tbody>
         <tfoot>
           <tr class="subtotal-row">
             <td colspan="5">Subtotal</td>
             <td>${subtotal.toFixed(2)}</td>
             <td></td>
           </tr>
         </tfoot>
       </table>
     </section>

     product_name and description come from the master
     FlexPro_Armor_Complete_Pricing_Master.xlsx "Product" and
     "Description" columns, ingested in §8.1.

5.3  RENAME COPY BUTTONS (D08)
     Old "Canonical Name" button → label "Customer Name".
     Tooltip: "Customer name as it appears in QB Bill-To".

5.4  SIXTEEN COPY BUTTONS (D14)
     1. Customer Name
     2. Customer Email
     3. Bill-To Address
     4. Ship-To Address
     5. Carrier
     6. Ship Date
     7. Tracking #
     8. Terms (payment)
     9. P/N
     10. Product Name
     11. Full Description
     12. Qty
     13. Rate
     14. PO #
     15. Shipping $
     16. Copy ALL (TSV)
     Each button writes exactly the string shown in the UI cell.
     Rate formatted as "325.00" (no $ sign), Qty as integer.
     Copy ALL button writes tab-separated:
       "{customer_name}\t{email}\t{bill_to}\t{ship_to}\t..."
     header row includes column names.

5.5  SHIPPING CELL CLICK-TO-EDIT (D24)
     Same pattern as V1 notes editor but numeric. Delete button:
       <button class="delete-shipping-btn">🗑 Zero Shipping</button>
     Click: opens modal with textarea for reason. On save:
       POST /api/shipments/{id}/shipping {value: 0, reason: "..."}
     Audit: event="shipping_zeroed", data={old_shipping, reason}.
     UI: the row is highlighted with row-review class (orange)
     until CB/Aaron removes the review flag.

5.6  LINE-ITEM RATE EDIT (D25)
     Click ✎ → rate cell becomes <input type="number" step="0.01">
     Save on blur/Enter, Cancel on Esc. Reason textarea optional.
     POST /api/shipments/{id}/lines/{line_id}/rate
       {rate: 275.00, reason: "Aaron approved for repeat customer"}
     Audit: event="line_rate_edited"
     Total and Subtotal recompute on save.

5.7  INVOICE VARIANCE MODAL (D26)
     Trigger: click ◇ icon next to Inv. # in main table OR click
     "View Variance" in detail panel (only visible if variance
     exists).
     Modal shows side-by-side SD vs Invoice:
       ┌───────────────────────┬───────────────────────┐
       │ SD (original)         │ Invoice (sent)        │
       ├───────────────────────┼───────────────────────┤
       │ NU-BC-2851 × 1 @$275  │ NU-BC-2851 × 1 @$275  │
       │ Shipping: $56         │ Shipping: $66   (+$10)│
       │ CC Fee:   $0          │ CC Fee:   $12.60 (+12.60)│
       │ Total:    $331        │ Total:    $353.60(+22.60)│
       └───────────────────────┴───────────────────────┘
     Deltas in red/green. Close on Esc / X / overlay.

5.8  TOTALS FOOTER (D27)
     Detail panel footer:
       Subtotal:  $275.00
       Shipping:  $66.00
       CC Fee:    $0.00   (or $13.25 with calc tooltip)
       Tax:       $0.00
       ────────────────
       TOTAL:     $341.00
     Recalculates on any edit. All values from shipment.* fields
     (not re-computed from scratch on render beyond subtotal).

5.9  COPY BUTTON FIX (D28)
     client side:
       async function copyText(text) {
         try {
           if (navigator.clipboard && window.isSecureContext) {
             await navigator.clipboard.writeText(text);
             return {ok: true, method: 'clipboard-api'};
           }
           // Fallback for HTTP (192.168.1.184:8765 is HTTP)
           const ta = document.createElement('textarea');
           ta.value = text;
           ta.style.position = 'fixed';
           ta.style.opacity = '0';
           document.body.appendChild(ta);
           ta.focus(); ta.select();
           const ok = document.execCommand('copy');
           document.body.removeChild(ta);
           return {ok, method: 'execCommand'};
         } catch (e) {
           return {ok: false, error: String(e)};
         }
       }
     On copy: show toast "Copied!" for 1500ms. On fail: show
     toast "Copy failed — check console" and console.error().

5.10 INVOICE PDF LINK (D35)
     Inv. # cell in main table:
       {if invoice_number and invoice_pdf_path:}
         <a href="/invoices-archive/{invoice_number}.pdf"
            target="_blank" class="invoice-link">{invoice_number}</a>
       {else if invoice_number:}
         <span class="invoice-number-only" title="PDF not archived yet">
           {invoice_number}
         </span>
       {else:}
         —
       {end if}

═══════════════════════════════════════════════════════════════════════════════
SECTION 6 — STATUS / INVOICE SENT / CC MARKER / CUSTOMER TYPE
═══════════════════════════════════════════════════════════════════════════════

6.1  INVOICE SENT PERSISTENCE (D30)
     Server-side: POST /api/shipments/{id}/invoice-sent {sent: bool}
     On tick true:
       - set invoice_sent=true
       - set status="invoiced" (if not already)
       - audit + ledger
       - return updated shipment
     Client re-renders. Row animates out 500ms after confetti.
     After page reload, row is in Archived view. Does NOT reappear
     in main.
     Un-tick (from archived view): confirm → server reverts
     invoice_sent=false, status reverts to previous_status (stored
     in audit), re-appears in main.

6.2  CC MARKER + AUTO-CALC (D06, D21)
     Marker: <span class="cc-marker">💳 CC</span> in customer cell
     when registry.cc_fee_applies=true OR shipment.cc_fee_applies=true
     (override per-shipment allowed — use Source Priority).

     Click marker → not a toggle; opens small popover with:
       "Credit Card customer. 4% fee applies to subtotal + shipping."
       [View CC Fee Breakdown]  [Change Payment Method (Aaron only)]

     Auto-calc: cc-fee-calc.js runs in both:
       (a) on shipment load (ingest phase)
       (b) on any edit to subtotal or shipping
     Writes shipment.cc_fee via sa-v1-writer. Formula:
       if cc_fee_applies:
         cc_fee = round((subtotal + shipping) * 0.04, 2)
       else:
         cc_fee = 0

     Manual edit allowed in detail panel (same pattern as rate).
     Audit event="cc_fee_edited" if manual override.

6.3  CUSTOMER TYPE ENUM (D12, NEW)
     ~/norris-agent/data/customer_registry.json — each entry gains:
       "customer_type": "direct" | "indirect" | "dealer"
     Default: "direct" for all existing entries except:
       - Aerial Hydraulics → "dealer"
       - Any shipment that is a drop-ship TO a third party FROM a
         dealer → ship-to endpoint is "indirect"
     For Aerial Hydraulics ship-to endpoints (like Primoris), V2
     adds a separate registry entry with:
       canonical_name: "Primoris T&D (via Aerial Hydraulics)"
       customer_type: "indirect"
       parent_dealer: "cust_aerial_abide"
     Bill-To Address for indirect = parent_dealer's bill-to.

     Registry schema update:
       {
         "customer_type": "direct" | "indirect" | "dealer",
         "parent_dealer": null | "<entry_id>",
         ...
       }

     Render: pill in customer cell (see §4.8). Filter chip: the
     filter row gains "Direct / Indirect / Dealer" chips above
     the status chips.

6.4  PAYMENT TERMS (D12 fix)
     Detail panel "Terms" field now renders payment_terms from
     registry:
       "Net 30" | "Net 60" | "Due on Receipt" | "CC on File" |
       "CC" | "ACH"
     Separate from customer_type. The V1 bug showed "direct" in
     Terms — that was a field-collision. V2 separates them
     explicitly in the data model.

═══════════════════════════════════════════════════════════════════════════════
SECTION 7 — REGISTRY, FUZZY MATCH, CANONICAL NAMING (V2 fixes)
═══════════════════════════════════════════════════════════════════════════════

7.1  FUZZY MATCH HIT FIX (D07)
     V1 bug: Dominion Energy returned "NO FUZZY MATCH" even though
     registry has cust_dominion_crosby.
     Root cause suspected: fuzzy_match.match_customer() checked for
     full "Company - Person" string, returned below-threshold when
     only "Company" was given with no POC in shipment.
     V2 fix:
       def match_customer(raw, registry):
           # NEW: if raw equals any company_root exactly (case-insensitive)
           # AND that company_root appears in exactly one entry,
           # auto-resolve to that entry at 100.
           raw_norm = raw.strip().lower()
           exact_company_matches = [e for e in registry
                                    if e["company_root"].strip().lower()
                                       == raw_norm]
           if len(exact_company_matches) == 1:
               return {"best": exact_company_matches[0],
                       "best_score": 100,
                       "tier": "auto_apply",
                       "action": "apply"}
           if len(exact_company_matches) > 1:
               # multi-POC, flag for review
               return {"best": None,
                       "best_score": 100,
                       "tier": "review",
                       "candidates": [...]}
           # Fall through to existing fuzzy logic
           ...

     Dominion Energy → one match (Crosby) → auto-resolve.
     LineTec Services → three matches → ⚠ tooltip with 3 POCs.

7.2  "LineTec Services/LTS Power" STRING TREATMENT (D07 cont'd)
     registry_loader preprocessor:
       def preprocess_raw(raw: str) -> str:
           # Normalize separators to " - "
           raw = raw.replace(" / ", " - ").replace("/", " - ")
           raw = raw.replace(" • ", " - ").replace("|", " - ")
           # Collapse whitespace
           raw = re.sub(r"\s+", " ", raw).strip()
           return raw
     Run before fuzzy_match.

     Then alias "LTS Power" on Richard Thornhill's entry matches
     the right side. Test case:
       "LineTec Services / LTS Power" → preprocessed →
       "LineTec Services - LTS Power" → alias match on
       cust_linetec_thornhill (which has alias "LTS Power").

7.3  BRINK INVESTIGATION — keep V1 output; no new action needed.

7.4  CANONICAL LABEL RENAME — see §1.2 + §5.3.

═══════════════════════════════════════════════════════════════════════════════
SECTION 8 — DATA INGEST (the biggest V1 gap)
═══════════════════════════════════════════════════════════════════════════════

V1's cardinal sin: Phase A delivered the scaffold but never wired the
ingest. V2 ingests:
  (1) FlexPro Armor master xlsx → price list
  (2) UPS Shipping Log snapshot → tracking + shipping costs
  (3) QB invoice emails → invoice PDFs + invoice data
  (4) SD HTML files → shipment records (if not already ingested)
  (5) Detailed Sales Report CSV → historical sales
  (6) QB Contact List xlsx → registry bootstrap

FILES TOUCHED (NEW):
  ~/norris-agent/lib/ingest_master_pricelist.py
  ~/norris-agent/lib/ingest_ups_shipping_log.py
  ~/norris-agent/lib/ingest_qb_invoices.py
  ~/norris-agent/lib/ingest_sd_html.py
  ~/norris-agent/lib/ingest_qb_sales.py
  ~/norris-agent/lib/ingest_qb_contacts.py
  ~/norris-agent/bin/run_all_ingest.py
  ~/norris-agent/tests/test_ingest_*.py (one per ingest module)

8.1  PRICE LIST INGEST
     Source: ~/norris-agent/project_knowledge/
             FlexPro_Armor_Complete_Pricing_Master.xlsx
     Target: ~/norris-agent/data/pricelist.json
     Schema:
       {
         "NU-BC-2851": {
           "pn": "NU-BC-2851",
           "product_name": "2-Man BC",
           "description": "FlexPro Armor Bucket Cover for 2-Man Bucket. Collapsible 3 Panel Rigid Design. Size: 28\" x 51\". Hand Made in the USA.",
           "direct_price": 305.00,
           "dealer_price": 235.00,
           "is_oos": false,
           "oos_since": null,
           "last_updated": "<iso>"
         },
         ...
       }
     Description pulled from the xlsx "Description" column. This is
     what renders in the table col-desc AND in the SD and invoice
     line items.
     Render rule: if a shipment's line_items[n].description is
     empty, render pricelist[pn].description. If line_items has
     its own description (manual edit), that wins.

8.2  UPS SHIPPING LOG INGEST
     Source: ~/norris-agent/data/ups_shipping_log_snapshot.csv
             (dropped by Apps Script OR by Aaron manually)
     Alt source: direct Google Sheets API read (Aaron's OAuth —
             if wired).
     Target: merge into shipments.json
     Match logic:
       - Primary: tracking number exact match
       - Secondary: customer + ship-date within ±3 days
     Fields written:
       shipment.tracking_numbers = [...]
       shipment.carrier = "UPS"
       shipment.shipped_date = <iso>
       shipment.reg_cost = <float>    # NU's actual UPS cost
       shipment.customer_shipping = ROUNDUP(ROUNDUP(reg_cost,0) × rate, 0)
         where rate = 1.10 if customer_type in (direct, indirect)
                   = 1.05 if customer_type == dealer
     Source Priority: UPS data writes at Source.UPS_RECEIPT (20).
     Will never overwrite higher sources (SD, Aaron).

8.3  SHIPPING FORMULA ENFORCEMENT (D16)
     lib/shipping_formula.py:
       def customer_shipping(reg_cost: float, customer_type: str) -> int:
           rate = 1.10 if customer_type in ("direct", "indirect") else 1.05
           return math.ceil(math.ceil(reg_cost) * rate)
     On every render: if shipment.customer_shipping is set AND
     differs from formula(shipment.reg_cost, customer_type) by
     more than $1, flag shipment with
       cb_review_notes.append({
         "type": "shipping_formula_mismatch",
         "message": f"Shipping ${customer_shipping} doesn't match "
                    f"formula(${reg_cost}, {customer_type}) = ${formula_result}.",
       })
     Does NOT auto-fix (Aaron may have manually adjusted).

8.4  HENKELS & McCOY ROW REGRESSION FIX (D22)
     Find the row. Reset:
       pn = "NU-BC-BY2828"
       product_name = "Backyard Bucket Cover"
       description = "FlexPro Armor Bucket for SDP's, & other, 1-Man Pin-On Buckets with Bracket Relief (28\" x 28\")"
       customer_shipping = 0
       audit_note = "Shipping waived — courtesy per Aaron 2026-04-23"
     Delete any "EVIDENCE CONFLICT" notes from V1.
     Add ledger event:
       event_type="r8_violation_rollback",
       data={
         "shipment_id": "<id>",
         "old_pn": "NU-BC-2834",
         "new_pn": "NU-BC-BY2828",
         "reason": "SD + Aaron agreement. V1 R8 violation rolled back."
       }

8.5  QB INVOICE INGEST (EMAIL → PDF → DATA)
     Source: Gmail API OR IMAP. Filter:
       from:quickbooks@notification.intuit.com
       subject:"Invoice [" OR subject:"from Norris Utilities"
     Or offline fallback: Aaron drops PDFs into
       ~/norris-agent/inbox-invoices/
     Process:
       1. Extract PDF attachment (or download from "View and pay"
          URL if attachment missing — skip for V2 if auth wall).
       2. pypdf text extract → parse:
            - invoice_number
            - date
            - bill_to
            - ship_to
            - line_items (pn, qty, rate, amount)
            - subtotal, tax, shipping, total, balance_due
            - payment_terms
            - ship_date, tracking #
       3. Save PDF to ~/norris-ops/invoices-archive/{invoice_number}.pdf
       4. Match to shipment:
            - Primary: PO # match
            - Secondary: customer + date range ±14d
            - Tertiary: line-item P/N + total match
       5. On match: set shipment.invoice_number, compute
          invoice_variance (D26), set invoice_sent=true,
          status="invoiced", invoice_sent_date=<iso>.
       6. Source Priority: invoice = Source.QB_LIVE (40).
          Writes to shipment.line_items, .subtotal, .shipping,
          .cc_fee, .total respect Source Priority (SD and Aaron
          win; QB_LIVE writes only if no higher-rank source).
          BUT: per Aaron's rule: "we need to have this system
          ... update to reflect the data on the Invoice in it
          and note/capture any changes". So for FINANCIAL fields
          (amounts) after invoice, the invoice IS the record of
          record. V2 implements this as: financial fields get
          their OWN source lane where QB_LIVE_INVOICE (value 100)
          sits above SD. Non-financial fields still honor
          standard priority.

       ~/norris-agent/lib/source_priority.py (EXTEND):
         Source.QB_LIVE_INVOICE = 100   # only for financial fields
       FIELD_CATEGORIES = {
         "financial": {"subtotal", "shipping", "customer_shipping",
                       "cc_fee", "total", "line_items_rates",
                       "tax"},
         ...
       }
       def apply_update(existing, new_value, new_source, field):
           # If field is financial and source is QB_LIVE_INVOICE,
           # write unconditionally (and record as the
           # "canonical invoice value").
           if field in FIELD_CATEGORIES["financial"] and \
              new_source == Source.QB_LIVE_INVOICE:
               old = existing.get(field)
               existing[field] = new_value
               existing[f"{field}__source_name"] = "QB_LIVE_INVOICE"
               if old is not None and abs(float(old) - float(new_value)) > 0.01:
                   # Record variance
                   existing.setdefault("invoice_variance", {})[field] = {
                     "sd_value": old, "invoice_value": new_value,
                     "delta": float(new_value) - float(old),
                   }
               return existing, None
           # Else standard logic
           ...

     Test fixture: Invoice 1498 PDF (Aaron's Image 8) — parse it
     and assert:
       invoice_number == "1498"
       line_items[0].pn == "NU-BC-2851"
       line_items[0].qty == 1
       line_items[0].rate == 275.00
       subtotal == 275.00
       tax == 13.75
       shipping == 66.00
       total == 354.75
       balance_due == 354.75
       bill_to contains "Bridget Vanderhoeven" + "LineTec Services"
       ship_to contains "Jeremy Nunez" + "Marksville"

8.6  CANARY RE-VERIFY (D40)
     Re-assert all 6 V1 canaries pass with V2 ingest applied:
       - Chain Electric $8,930.48
       - Pickle $1,834
       - Crosby Mar 20 6× NU-BC-2834 = $1,590 + $146
       - FIX 9 5/5 tombstoned
       - FIX 10 S-2026-023 Lidia Turner / Henkels
       - FIX 11 S-2026-024 + S-2026-025 DEALER Aerial Hydraulics

8.7  MASTER INGEST DRIVER
     ~/norris-agent/bin/run_all_ingest.py
       #!/usr/bin/env python3
       """Run all ingest modules in order. V2 primary data layer."""
       from lib import ingest_master_pricelist, ingest_qb_contacts, \
                        ingest_qb_sales, ingest_sd_html, \
                        ingest_ups_shipping_log, ingest_qb_invoices
       def main():
           # 1. Price list (no deps)
           ingest_master_pricelist.run()
           # 2. Registry bootstrap (depends on price list for
           #    validation)
           ingest_qb_contacts.run()
           # 3. Historical sales (for canaries)
           ingest_qb_sales.run()
           # 4. SD HTML → shipments.json (primary source)
           ingest_sd_html.run()
           # 5. UPS tracking + shipping costs
           ingest_ups_shipping_log.run()
           # 6. Invoices (post-shipment financial truth)
           ingest_qb_invoices.run()
       if __name__ == "__main__":
           main()

     Run at V2 deploy:
       python3 ~/norris-agent/bin/run_all_ingest.py

═══════════════════════════════════════════════════════════════════════════════
SECTION 9 — SD VIEW FIX + SHIPPING DOCS + ARCHIVED INVOICES PAGES
═══════════════════════════════════════════════════════════════════════════════

9.1  SD LOGO FIX (D33)
     sd_template.html (find it: grep -r "BILL TO" ~/norris-ops/
     shipping-docs/ | head -5; or check ~/norris-agent/lib/
     sd_generator.py for the template path):
       - Replace any <img src="./assets/images/..."> or
         <img src="../assets/images/..."> with:
           <img src="/assets/images/Full_Logo_Blue.png">
       - OR base64 inline the logo.
     Test: open any SD in the preview browser, assert logo renders.

9.2  SD BACK BUTTON (D34)
     Add to top of sd_template.html:
       <div class="sd-topbar">
         <button class="sd-back-btn" onclick="
           if (document.referrer) { history.back(); }
           else { window.close(); }
         ">← Back to Shipments</button>
         <span class="sd-title">{sd_number}</span>
       </div>
     CSS:
       .sd-topbar { position: sticky; top: 0; background: white;
                    border-bottom: 1px solid #E5E7EB;
                    padding: 0.75rem 1.5rem; display: flex; gap: 1rem;
                    align-items: center; z-index: 100; }
       .sd-back-btn { background: #0033cc; color: white;
                      border: none; padding: 8px 16px; border-radius: 4px;
                      cursor: pointer; font-weight: 600; }

9.3  SHIPPING DOCS INDEX PAGE (D37)
     ~/norris-ops/shipping-docs/index.html (REWRITE)
     Data source: ~/norris-agent/data/shipments.json
     Renders table:
       SD #  |  Date  |  Customer  |  Status  |  Link
     Sortable by column headers. Filterable by search.
     Each row's Link opens the SD HTML in a new tab.

9.4  ARCHIVED INVOICES INDEX PAGE (D38)
     ~/norris-ops/shipments/archive.html (REWRITE)
     Renders table:
       Inv. # | Sent Date | Customer | Amount | SD | Invoice PDF
     Filter by date range, customer, amount range.

═══════════════════════════════════════════════════════════════════════════════
SECTION 10 — VERIFICATION GAUNTLET (all must pass)
═══════════════════════════════════════════════════════════════════════════════

10.1 Full pytest
     cd ~/norris-agent && python3 -m pytest tests/ -v --tb=short \
       2>&1 | tee /tmp/phase_b_v2_pytest.log
     # Expected: >= 372 V1 baseline + V2 new tests (target 480+)
     # Zero failures. Any fail = HALT + Tier 1.

10.2 Source Priority tests (CRITICAL)
     cd ~/norris-agent && python3 -m pytest tests/test_source_priority.py -v
     # Must include all 10+ test cases from §1.4. ALL PASS.
     # Henkels & McCoy regression PASSES.

10.3 Ingest dry-run
     python3 ~/norris-agent/bin/run_all_ingest.py
     # Watch output. Any exception = HALT.
     # Verify post-state:
     python3 -c "
     import json
     d = json.load(open('$HOME/norris-agent/data/shipments.json'))
     # At least 20 shipments have tracking_numbers populated
     assert sum(1 for s in d['shipments']
                if s.get('tracking_numbers')) >= 20
     # At least 5 shipments have line_items with description populated
     assert sum(1 for s in d['shipments']
                for li in s.get('line_items', [])
                if li.get('description')) >= 5
     # No shipment has pn='NU-BC-2834' where SD says NU-BC-BY2828
     # (regression)
     henkels = [s for s in d['shipments']
                if 'Henkels' in s.get('customer_name_raw', '')]
     for s in henkels:
         for li in s.get('line_items', []):
             assert li['pn'] != 'NU-BC-2834' or \
                    'verified_override' in li, \
                    'Henkels R8 violation re-emerged'
     print('INGEST VERIFY PASS')
     "

10.4 Playwright test pack
     cd ~/norris-ops && npx playwright test 2>&1 | tee /tmp/phase_b_v2_pw.log
     # All green.
     # Specific new V2 tests:
     #  - test_column_order.spec.ts (D03)
     #  - test_status_pill_writes.spec.ts (D15)
     #  - test_copy_buttons_fallback.spec.ts (D28)
     #  - test_invoice_sent_persist.spec.ts (D30)
     #  - test_kpi_tiles.spec.ts (D39)
     #  - test_sticky_header.spec.ts (D18)
     #  - test_customer_type_pill.spec.ts (D12)
     #  - test_detail_panel_fullness.spec.ts (D05)
     #  - test_rate_edit.spec.ts (D25)
     #  - test_shipping_edit.spec.ts (D24)
     #  - test_invoice_variance_modal.spec.ts (D26)
     #  - test_grouped_indicator.spec.ts (D17)
     #  - test_row_highlighting.spec.ts (D23)
     #  - test_sd_logo_render.spec.ts (D33)
     #  - test_sd_back_button.spec.ts (D34)

10.5 Defensive greps (V2 tightened)
     bash -c '
       set -e
       N=$(grep -rE "\bSKU\b" ~/norris-ops/ ~/norris-agent/lib/ \
             --include="*.py" --include="*.html" --include="*.js" \
             --include="*.css" --include="*.json" 2>/dev/null | \
             grep -v "test_" | grep -v "enforcement:" | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: SKU $N"; exit 1; }

       N=$(grep -rE "Abadie" ~/norris-ops/ \
             ~/norris-agent/data/customer_registry.json 2>/dev/null | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: Abadie $N"; exit 1; }

       N=$(grep -rE "FlexPro Armor®" ~/norris-ops/ \
             --include="*.html" 2>/dev/null | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: FlexPro Armor® $N"; exit 1; }

       N=$(grep -rE "FlexPro Armor Guard" ~/norris-ops/ \
             ~/norris-agent/ 2>/dev/null | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: FlexPro Armor Guard $N"; exit 1; }

       # NEW: forbid "Child" in V2 surfaces (rename to Grouped)
       N=$(grep -rE "\bchild\b" ~/norris-ops/assets/ \
             --include="*.html" --include="*.js" --include="*.css" \
             2>/dev/null | grep -v "child-process" | grep -v "childNodes" | \
             grep -v "childList" | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: child $N"; exit 1; }

       # NEW: forbid "Canonical" in user-facing UI labels
       N=$(grep -rE ">Canonical" ~/norris-ops/ --include="*.html" \
             --include="*.js" 2>/dev/null | wc -l)
       [ "$N" -eq 0 ] || { echo "FAIL: Canonical UI label $N"; exit 1; }

       echo "V2 DEFENSIVE GREPS CLEAN"
     '

10.6 Canonical naming canary (V1 carried over)
     python3 scripts/verify_canonical_naming.py
     # All rendered customer cells match regex or carry
     # .review-needed class.

10.7 Henkels & McCoy specific canary (V2 NEW)
     python3 -c "
     import json
     d = json.load(open('$HOME/norris-agent/data/shipments.json'))
     henkels = [s for s in d['shipments']
                if 'Henkels' in s.get('customer_name_raw','')
                or 'Henkels' in s.get('canonical_name_resolved','')]
     assert henkels, 'Henkels entries missing'
     for s in henkels:
         for li in s.get('line_items', []):
             if li['pn'] == 'NU-BC-2834':
                 # must have an explicit Aaron override note
                 assert s.get('aaron_verified_pn_override'), \
                     f'R8 violation re-emerged on {s[\"id\"]}'
     print('HENKELS R8 CANARY PASS')
     "

10.8 KPI tiles canary
     Playwright:
       Open shipments.html
       Find 4 .kpi-tile elements
       Read .kpi-value text
       Assert non-zero for tiles 1-4 (assuming data ingested)
       Click tile 2 (Customer Shipping Unbilled)
       Assert table filters to invoice_sent=false rows

10.9 Invoice PDF parse canary
     python3 -c "
     from norris_agent.lib.invoice_parser import parse_invoice_pdf
     result = parse_invoice_pdf(
         '$HOME/norris-agent/project_knowledge/Invoice_1498_fro...pdf'
     )
     assert result['invoice_number'] == '1498'
     assert result['total'] == 354.75
     print('INVOICE PARSE CANARY PASS')
     "

10.10 Preview server respin + smoke
     Same as V1: kill, respin, curl, grep HTML for V2 markers:
       status-pill, detail-panel, customer-type-pill, kpi-tile,
       nu-phoenix-watermark, group-indicator, cc-marker

═══════════════════════════════════════════════════════════════════════════════
SECTION 11 — EXIT PROTOCOL
═══════════════════════════════════════════════════════════════════════════════

11.1 Handoff doc
     ~/norris-ops/docs/handoffs/Phase_B_V2_DONE_2026-04-24.md
     Include:
       - Commits: ops HEAD, agent HEAD
       - Tests: 480+ passing (or actual number)
       - Defects closed: list all 41 D-items with ✅
       - Defects deferred: list any NOT closed with rationale
       - Known gaps for V3 (e.g., sounds, Gmail live auth if still
         offline)
       - Click-test checklist (below)

11.2 Click-test checklist (Aaron 4 AM CT)
     ☐ Hero logo large (>= 200px) — visible dominance
     ☐ Hero text smaller than logo
     ☐ Ghost phoenix watermark visible, pulsing
     ☐ Tagline "A Legacy of Commitment®" present
     ☐ Column order matches locked order (Invoice Sent, Inv. #,
       SD, Status, Order Date, Customer, P/N, Description, QTY,
       Ship To + POC, Tracking #, PO #, CC Fee, Shipping, Notes)
     ☐ Dead leftmost column GONE
     ☐ Frozen header on scroll
     ☐ Customer cell shows Company + Person + Customer Type pill
       + Payment badge + CC marker (if CC)
     ☐ Click status pill → dropdown works → selection persists
       (no "failed") for all 7 statuses
     ☐ Click Invoice Sent → celebration fires → row persists
       checked → row moves to archive after reload
     ☐ Click ▼ → detail panel expands 2-col
     ☐ Detail panel shows full P/N + Product + Description +
       Rate + Qty + Subtotal
     ☐ Detail panel shows Shipping (with edit/zero)
     ☐ Detail panel shows CC Fee (auto-calc for CC customer)
     ☐ Detail panel shows Totals
     ☐ 16 copy buttons all work (including new Qty, Rate, Copy ALL)
     ☐ Hover ⚠ row → tooltip with top 3 candidates + %
     ☐ Dominion Energy row resolves to "Dominion Energy - Coy
       Crosby" with no ⚠ (it's a single-POC company)
     ☐ Henkels & McCoy row shows NU-BC-BY2828 (NOT NU-BC-2834)
       — R8 violation fixed
     ☐ Henkels & McCoy row shipping = $0 (Aaron's courtesy)
     ☐ Henkels row highlighted orange (review flag)
     ☐ Aerial Hydraulics row shows DEALER pill
     ☐ Primoris row (via Aerial) shows INDIRECT pill
     ☐ LineTec rows show DIRECT pill
     ☐ Payment badges render correctly
     ☐ CC Fee column auto-populates for CC customers
     ☐ Grouped rows show GROUPED (N) badge + children indent
     ☐ 4 KPI tiles render with real values; click filters table
     ☐ Click Inv. # → opens invoice PDF in new tab
     ☐ Click SD → opens SD with visible logo + Back button
     ☐ Click Back → returns to shipments list
     ☐ Invoice variance ◇ icon appears on rows with SD vs invoice
       $ differences; click opens variance modal
     ☐ Rate edit works (click ✎, enter new rate, save, recalc)
     ☐ Shipping edit works (click shipping cell, edit or zero)
     ☐ Totals row in detail panel recalculates on edit
     ☐ Shipping Docs page lists all SDs
     ☐ Archived Invoices page lists all invoiced shipments
     ☐ Search works ("Chain", "Dominion", "Henkels")
     ☐ No "SKU" appears anywhere
     ☐ No "Abadie" appears anywhere
     ☐ No "FlexPro Armor®" appears anywhere

11.3 Push both repos
     cd ~/norris-ops && git push origin feature/sa-v5-completion
     cd ~/norris-agent && git push origin feature/sa-v5-completion

11.4 Tier 1 Telegram
     🚀 V2 COMPLETE (Phase B rebuild)
     All 41 defects from V1 click-test addressed.
     Commits: ops {HASH}, agent {HASH}
     Tests: {N} passing (+{DELTA} from V1)
     Henkels R8 violation ROLLED BACK (canary passing).
     Ingest run complete:
       - Price list: ✅
       - QB contacts: ✅
       - UPS tracking: ✅ ({N} shipments matched)
       - Invoices: ✅ ({N} parsed, {M} linked)
     KPI tiles live with {$X} uninvoiced.
     Preview: http://192.168.1.184:8765/shipments.html
     Click-test checklist in handoff:
       ~/norris-ops/docs/handoffs/Phase_B_V2_DONE_2026-04-24.md
     Reply: V2 PASS or V2 FAIL <reason>

11.5 NorrisPalace ingest (--no-embed)
     np ingest --tag sa_v5_v2 --tag complete \
       --content "V2 DONE 2026-04-24. 41 defects closed. Canaries
                  pass. R8 lock enforced in source_priority.py."
     np ingest --tag sa_v5_v2 --tag handoff \
       --content "$(cat ~/norris-ops/docs/handoffs/Phase_B_V2_DONE_2026-04-24.md)"

═══════════════════════════════════════════════════════════════════════════════
SECTION 12 — HARD DON'TS (enforced throughout)
═══════════════════════════════════════════════════════════════════════════════

• NEVER override an SD-stated fact with auto logic. Route to note.
• NEVER override an Aaron-stated fact with auto logic. Route to note.
• NEVER merge feature/sa-v5-completion to main.
• NEVER use "SKU" — always "P/N" or "part number".
• NEVER use "child" in a user-facing surface — always "Grouped".
• NEVER use "Canonical Name" as a user-facing label — "Customer Name".
• NEVER delete the ghost phoenix watermark — keep it at 7% opacity.
• NEVER shrink the hero logo below 200px on desktop.
• NEVER inflate the hero headline above 3.2rem (logo dominates).
• NEVER ship without the 16 copy buttons tested and working.
• NEVER ship without Henkels R8 regression test passing.
• NEVER ship with status-pill dropdown returning "failed".
• NEVER ship with Invoice Sent not persisting.
• NEVER ship without frozen header.
• NEVER ship without KPI tiles.
• NEVER ship with SD logos missing on open.
• NEVER fire Gmail drafts from CC (M5 owns LMM).
• NEVER install ClawHub skills.
• NEVER reload agent-v4 or boot-recovery LaunchAgents during V2.
• NEVER skip the ingest pipeline — V1 did, V2 must not.
• NEVER write placeholder text ([TBD], [TODO], lorem ipsum).

═══════════════════════════════════════════════════════════════════════════════
SECTION 13 — ABORT CONDITIONS (see §1.7 A1–A25)
═══════════════════════════════════════════════════════════════════════════════

On any abort:
  1. Stop execution.
  2. Record: last commit, last test, last section, last error.
  3. Tier 1 Telegram Aaron with all of the above + best-guess root.
  4. Do NOT recover without Aaron's explicit go-ahead.

═══════════════════════════════════════════════════════════════════════════════
SECTION 14 — REFERENCE DATA
═══════════════════════════════════════════════════════════════════════════════

14.1 Customer Type defaults (for initial registry seed)
     Aerial Hydraulics → dealer
     All LineTec entries → direct
     All AEP / SWEPCO entries → direct
     Irby Construction - William McCarty → direct
     Dominion Energy - Coy Crosby → direct
     Chain Electric - AJ Morris → direct
     Henkels & McCoy - Lidia Turner → direct
     Florence Electric - Darrell Pickle → direct
     Primoris T&D (via Aerial) → indirect (parent: Aerial)
     Brink Constructors (all) → direct (pending Aaron review)
     ULCS-Birmingham - Kurt Keeney → direct (CC)
     TUF Solutions - Keith McIntosh → dealer (ACH)

14.2 Payment Terms defaults
     LineTec Thornhill → Net 30
     LineTec LeCompte → Net 30
     LineTec Guthrie → CC (4% fee)
     Aerial Hydraulics Abide → Dealer terms (Net 30)
     Dominion Energy Crosby → Net 30
     AEP Myers → CC on File (4% fee — per Sammy Myers CC note)
     Chain Electric Morris → Net 30
     Henkels & McCoy Turner → Net 30
     All others → see registry

14.3 P/N MASTER (authoritative — pricelist.json output)
     NU-BC-2828      1-Man BC                  Direct $235  Dealer $195
     NU-BC-BY2828    Backyard BC (28x28)       Direct $275  Dealer $225
     NU-BC-2834      1.5-Man BC                Direct $265  Dealer $205
     NU-BC-2842      1.5-Man Large BC          Direct $265  Dealer $210
     NU-BC-2844      1.5-Man Specialty BC      Direct $295  Dealer $235
     NU-BC-2851      2-Man BC                  Direct $305  Dealer $235
     NU-BC-CC2834    1.5-Man w/ Upper Ctrl     Direct $285  Dealer $225
     NU-BC-2834-F    ARCH 1.5-Man              Direct $305  Dealer $245
     NU-BC-2851-F    ARCH 2-Man                Direct $345  Dealer $275
     NU-BC-2834-C    1.5-Man + Shield Combo    Direct $305  Dealer $245
     NU-BC-2851-C    2-Man + Shield Combo      Direct $345  Dealer $275
     NU-BC-2834-FC   ARCH 1.5-Man + Shield     Direct $345  Dealer $275
     NU-BC-2851-FC   ARCH 2-Man + Shield       Direct $385  Dealer $305
     NU-BC-D4577     D-Shape Transmission      Direct $1050 Dealer $850 [no formula]
     NU-BC-2945-EPBC EPBC ETI BC               Direct $325  Dealer $265
     NU-BCB-2834-SL  1.5-Man Shield            Direct $45   Dealer $38
     NU-BCB-2851-SL  2-Man Shield              Direct $55   Dealer $45
     (Master xlsx authoritative; these are bootstrap values.)

14.4 Shipping Formula
     direct / indirect: ROUNDUP(ROUNDUP(reg_cost, 0) × 1.10, 0)
     dealer:            ROUNDUP(ROUNDUP(reg_cost, 0) × 1.05, 0)

14.5 CC Fee Formula
     if cc_fee_applies: round((subtotal + shipping) × 0.04, 2)
     else: 0

═══════════════════════════════════════════════════════════════════════════════
SECTION 15 — ESTIMATED TIMELINE
═══════════════════════════════════════════════════════════════════════════════

     Section 0 state verify:                 20 min
     Section 1 hard-rule locks + R8 code:    90 min  (critical)
     Section 2 defect map read-through:      20 min
     Section 3 visual polish V2:             60 min
     Section 4 table rebuild:                90 min
     Section 5 detail panel V2:             120 min
     Section 6 status/CC/customer type:      75 min
     Section 7 registry fixes:               45 min
     Section 8 data ingest (6 modules):     180 min
     Section 9 SD + archive + shipping-docs: 90 min
     Section 10 verification gauntlet:       60 min
     Section 11 exit protocol:               30 min
     ───────────────────────────────────────────────
     Total:                                ~880 min = ~14.7 hr

Realistic window: 8–12 hr for Opus 4.7 Max effort.
Abort threshold: 16 hr elapsed. Tier 1, stash, hand off.

═══════════════════════════════════════════════════════════════════════════════
END PHASE B V2 MASTER CC PROMPT — BEGIN EXECUTION AT SECTION 0
═══════════════════════════════════════════════════════════════════════════════

V1 shipped in 1h 11m but failed click-test with 40+ defects. V2 does
the job right: wires the ingest V1 skipped, locks R8 Source Priority
in code (not docs), rebuilds the table Aaron's way, and makes CB able
to invoice without asking questions. Honor the Wayne standard: every
decision asks "would Wayne be proud of this?" When CB can use V2 to
invoice six customers back-to-back without friction, the answer is
yes. Execute now.

— M5 Claude Opus 4.7 (Session 9) | 2026-04-24
