# HANDOFF: Google Contacts Cleanup — Norris Utilities
## Date: March 29, 2026 | Priority: URGENT — Complete This Session

---

## WHO IS AARON

Aaron C. Norris, Founder & CEO of Norris Utilities, LLC. He is frustrated. This project has spanned multiple days and multiple sessions with compactions. He needs this DONE — flawlessly, efficiently, no more fumbling. His exact words: *"I know there are a lot of contacts BUT why is this so difficult...? PLEASE make it happen!"*

**Communication style:** Direct. Lead with the ask. Don't over-explain. Just execute.

**What he needs from you:** EXECUTE. Don't advise. Don't ask unnecessary questions. Get it done right the first time.

---

## THE PROJECT

Consolidate all of Aaron's contacts into one clean, deduplicated master list in Google Contacts for his business account: **acnorris@norrisutilities.com**

### What's Already Done
1. All contact sources merged into one CSV: `FINAL_CLEAN_MASTER_3.29.26.csv` (5,260 contacts, 40 columns)
2. CSV imported into Google Contacts (4,952 contacts visible in Google)
3. Google's "Merge all" used to merge ~260 duplicate suggestions
4. Safety backup exported: `contacts, 3.29.26.csv`
5. Two of 6 individual contact edits completed (Aaron Cox, Austin Adcock)

### What Still Needs To Be Done

**TASK 1: Fix 4 Remaining Individual Contacts in Google Contacts**

Each contact below needs specific edits made directly in Google Contacts via Chrome automation. The browser is currently open to Google Contacts logged into acnorris@norrisutilities.com.

---

#### CONTACT 1: Bob Brumley — IN PROGRESS, CURRENTLY OPEN IN EDIT MODE
- **URL:** `https://contacts.google.com/person/c4601340161979875386?hl=en`
- **Current state:** Edit mode is OPEN. The contact is currently corrupted.
- **What's wrong:**
  - First name field shows "Bob" (correct) BUT the header still displays "BobBobBobby Brumley" — this happened from failed text selection attempts in prior session
  - Company field 1 still shows "Nesco, LLC;Sales" / "Outside Sales" — NEEDS TO BE DELETED or changed to "Custom Truck One Source"
  - Company field 2 shows "Custom Truck One Source" / "Senior Account Manager" (correct)
  - Star/Favorite is ON (filled star) — NEEDS TO BE TURNED OFF
  - Emails: bbrumley@customtruck.com and bob.brumley@customtruck.com (correct — nescosales email already removed)
- **Required edits:**
  1. Verify First name = "Bob", Last name = "Brumley" (the header will update after save)
  2. DELETE the first Company/Job entry ("Nesco, LLC;Sales" / "Outside Sales") — only keep "Custom Truck One Source" / "Senior Account Manager"
  3. UNSTAR the contact (click the filled star icon to toggle it off)
  4. Click SAVE
  5. Verify saved result shows "Bob Brumley" with correct data

---

#### CONTACT 2: Caroline Butler
- **What to find:** Caroline Butler - Norris Utilities (merged contact)
- **Required edits:**
  1. Change Last Name from `Butler - Norris Utilities` to `Butler "CB" - Norris Utilities`
  2. Verify Company = "Norris Utilities, LLC"
  3. Verify emails: carolinegbutler@gmail.com, cbutler@norrisutilities.com
  4. Ensure NOT starred (unless it was a phone Favorite)
  5. SAVE

---

#### CONTACT 3: Jason Zenker
- **What to find:** Jason Zenker (the merged contact that combined Hiab and Spiradrill records)
- **Required edits:**
  1. Change Last Name to `Zenker - HIAB`
  2. REMOVE email: jason.zenker@spiradrill.net (he no longer works at Spiradrill)
  3. KEEP email: jason.zenker@hiab.com
  4. Verify Company = "Hiab USA" or similar
  5. Ensure NOT starred
  6. SAVE

---

#### CONTACT 4: Robert Blackadar
- **What to find:** Robert Blackadar (the merged contact)
- **Required edits:**
  1. REMOVE all @nescorentals.com emails (robert.blackadar@nescorentals.com, rob@nescorentals.com)
  2. KEEP: rob@badgerinc.com and robertblackadar@gmail.com
  3. Verify Company = "Badger Infrastructure Solutions"
  4. Ensure NOT starred
  5. SAVE

---

**TASK 2: Handle Remaining Merge Suggestions**
- The sidebar shows **9** in "Merge & fix"
- Review each merge suggestion and merge where appropriate
- Do NOT blindly merge — verify each one makes sense

---

**TASK 3: Fix Favorites/Stars**
- Aaron's instruction: "Keep my contacts that are actually 'Favorites' on my phone the only favorites"
- This means: Only contacts that are real phone Favorites should be starred in Google Contacts
- During editing, Aaron Cox was confirmed as a legitimate favorite (keep starred)
- Austin Adcock was accidentally starred and was unstarred (fixed)
- Bob Brumley is currently starred and needs to be unstarred
- After completing all edits, do a spot check to make sure no other contacts got accidentally starred

---

**TASK 4: Final Verification**
- Confirm total contact count (~4,952)
- Spot-check 5-10 contacts to verify data integrity
- Confirm all 6 edited contacts show correct data

---

## CRITICAL TECHNICAL LESSONS (DO NOT SKIP THIS)

These are hard-won lessons from hours of debugging. Follow them or you WILL waste Aaron's time:

### 1. Google Contacts Search Is BROKEN for Recently Imported Contacts
- After importing ~5,000 contacts, Google's search bar CANNOT find contacts by name or email
- Searching "Austin Adcock", "Adcock", "aadcock@wesco.com" — ALL return "No results"
- The contacts ARE there — they show up when you scroll the list
- **Workaround:** Use JavaScript `scrollTop` on the scrollable container (class `.My2mLb`) to navigate by position estimate, OR navigate directly by URL if you have the contact ID

### 2. Scrollable Container for Contact List
- Class: `.My2mLb`
- scrollHeight: ~277,554px for ~4,952 contacts
- ~56px per contact row
- Alphabet position estimates:
  - A: 0-5,000px
  - B: 5,000-25,000px (Bob names ~25,000px)
  - C: 25,000-45,000px (Caroline ~30,000-35,000px)
  - J: 90,000-115,000px (Jason ~100,000-110,000px)
  - R: 185,000-215,000px (Robert ~195,000-210,000px)
- The list is VIRTUALIZED — only visible contacts render in the DOM. Ctrl+F and DOM text search DO NOT WORK.

### 3. Text Selection in Input Fields — USE Home + Shift+End
- **DO NOT use triple_click** — it sometimes doesn't select all text, leading to prepended text ("BobBobby" instead of replacing "Bobby" with "Bob")
- **DO NOT use Ctrl+A** — it selects the ENTIRE PAGE, not just the field contents
- **CORRECT METHOD:** Click in field → press `Home` → press `Shift+End` → then type replacement text
- This is how the Bob Brumley name got corrupted from "Bobby" to "BobBobBobby" — three failed selection attempts each prepended "Bob" instead of replacing

### 4. Star vs Edit Button — They Are Adjacent
- The star (favorite) icon and Edit (pencil) button are RIGHT NEXT to each other
- Star icon: ~x=895, y=117 (when viewing a contact)
- Edit button: ~x=980, y=117
- Use `zoom` to precisely identify coordinates before clicking
- Accidental star clicks happened multiple times in previous sessions

### 5. Google Contacts URL Pattern
- Individual contacts: `contacts.google.com/person/c{contactID}`
- If you have the contact ID from a previous navigation, go directly via URL — much faster than scrolling

### 6. Contact IDs Already Known
- Bob Brumley: `c4601340161979875386` (currently open)
- Aaron Cox and Austin Adcock: already completed, IDs not needed
- Caroline Butler, Jason Zenker, Robert Blackadar: IDs NOT yet known — will need to find them by scrolling or searching

### 7. Deleting Fields in Google Contacts
- To delete a company/email/phone entry, look for an X or remove button next to the field
- If no X is visible, you may need to clear the field and Google will remove empty entries on save
- For company entries with multiple rows, there may be a collapse/expand chevron

### 8. Saving Edits
- The blue "Save" button appears at top right when in edit mode
- After clicking Save, wait for the page to refresh and verify the saved data
- If Save doesn't seem to work, try using `find` tool to locate the Save button precisely, then click its exact center

---

## FILES IN WORKSPACE

All files are in the user's mounted folder at `/sessions/[session-id]/mnt/Contacts/`:

| File | Description |
|------|-------------|
| `FINAL_CLEAN_MASTER_3.29.26.csv` | The master CSV that was imported (5,260 contacts, 40 columns). Use `grep -i` on this file to look up what data a contact SHOULD have. |
| `contacts, 3.29.26.csv` | Safety backup export from Google before cleanup started |
| `HANDOFF_CONTACTS_CLEANUP_3.29.26.md` | This document |

---

## EXECUTION PLAN — DO THIS IN ORDER

1. **Fix Bob Brumley** (currently open in edit mode):
   - Delete "Nesco, LLC;Sales" / "Outside Sales" company entry
   - Unstar
   - Save
   - Verify

2. **Find and edit Caroline Butler:**
   - Navigate to contacts list, use JS scrollTop ~30,000-35,000px OR try search
   - Find Caroline Butler, click to open, click Edit
   - Change last name to `Butler "CB" - Norris Utilities`
   - Verify other fields, ensure not starred, Save

3. **Find and edit Jason Zenker:**
   - Navigate to contacts list, use JS scrollTop ~100,000-110,000px OR try search
   - Find Jason Zenker, click to open, click Edit
   - Change last name to `Zenker - HIAB`
   - Remove jason.zenker@spiradrill.net email
   - Verify other fields, ensure not starred, Save

4. **Find and edit Robert Blackadar:**
   - Navigate to contacts list, use JS scrollTop ~195,000-210,000px OR try search
   - Find Robert Blackadar, click to open, click Edit
   - Remove @nescorentals.com emails
   - Verify other fields, ensure not starred, Save

5. **Handle 9 remaining Merge & Fix suggestions:**
   - Click "Merge & fix" in sidebar (shows 9)
   - Review each suggestion, merge where appropriate

6. **Spot-check Favorites:**
   - Verify no accidental stars besides Aaron Cox
   - Check a few random contacts to confirm

7. **Final verification:**
   - Confirm contact count
   - Spot-check data integrity on 5-10 contacts
   - Report completion to Aaron

---

## COMPLETED EDITS (for reference)

| Contact | Status | What Was Done |
|---------|--------|---------------|
| Aaron Cox | DONE | Verified correct. Was a legitimate favorite — kept starred. Last name = "Cox - Terramac". |
| Austin Adcock | DONE | Last name changed to "Adcock - WESCO". Accidentally starred during edit — unstarred. Verified emails correct. |

---

## AARON'S CORE INSTRUCTIONS (EMPHASIZE THESE)

1. **"Do things the right way, period."** — No shortcuts, no half-measures.
2. **Only ACTUAL phone Favorites should be starred.** No accidental stars.
3. **FlexPro Armor** — NEVER "FlexPro Armor Guard" (brand rule, not relevant to this task but important context).
4. **Execute, don't advise.** Aaron doesn't want explanations of what you're going to do — just do it.
5. **No placeholders, no approximations.** Every edit must be verified before moving on.
6. **This has taken WAY too long.** Be efficient. Don't fumble. Use the technical lessons above to avoid repeating mistakes.
7. **Use `Home + Shift+End` for ALL text field edits.** This is non-negotiable after the Bob Brumley disaster.
8. **Use `zoom` before clicking the Edit button** to avoid hitting the star icon.

---

*This handoff was generated at the end of Session 3 (after 2 compactions) on March 29, 2026. The browser is currently on Bob Brumley's edit page in Google Contacts. Pick up from Step 1 of the Execution Plan above.*
