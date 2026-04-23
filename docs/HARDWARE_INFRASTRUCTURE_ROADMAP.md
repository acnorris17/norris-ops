# Hardware Infrastructure Roadmap
**Norris Utilities — Legacy + Development Infrastructure**
**Locked: 2026-04-23 | Owner: Aaron C. Norris**

---

## Current State

| Machine | Role | Status |
|---|---|---|
| M1 Mac mini | Always-on server: Legacy, LaunchAgents, automations, G Brain | Active |
| M5 MacBook Pro 14" 24GB nano-texture | Primary dev + travel | Active |
| Samsung T7 backup drive | Time Machine for M5 | Available — move to M1 TONIGHT |

**Problem:** M1 has no Time Machine backup. If M1 dies, Legacy + all automations go dark with no recovery path. M5 is being used for heavy CC builds, eating battery and compute needed for travel.

---

## Action Plan

### TONIGHT (2026-04-23)
- [ ] Move Samsung T7 backup drive from M5 to M1
- [ ] Configure Time Machine on M1 → T7
- [ ] Verify first backup completes successfully
- [ ] Legacy morning brief: confirm backup ran

---

### WWDC — June 8–13, 2026
**Purchase: M5 Pro Mac mini 24GB / 512GB**
- Expected price: ~$1,399 (base M5 Pro config; wait for WWDC announcement)
- Role: Primary development machine (CC builds, coding sessions, heavy compute)
- Justification: Separates dev workload from mobile (M5 MBP) and server (M1). Mac mini = always-plugged, no thermal throttle, no battery wear from CC sessions.
- Purchase timing: WWDC announcement June 8–13 → order immediately after reveal

---

### PRIME DAY — July 2026
**Purchase: Synology DS723+ NAS + 2× Samsung 870 EVO 2TB SSDs**
- NAS target price: ~$400 (DS723+ street price)
- SSD target price: ~$100–120 each (870 EVO 2TB Prime Day)
- Total target: ~$600–640

**NAS role:**
- Time Machine target for all Macs (M1, M5 MBP, Mac mini)
- norris-agent data + repo backups
- norris-ops repo mirror
- Future: brain/media offload, iShip receipt archive
- Eliminates iCloud dependency for critical business data

---

## Role Map (Post-NAS + Mac Mini)

| Machine | Primary Role | Secondary |
|---|---|---|
| M1 Mac mini | Always-on Legacy server, LaunchAgents, G Brain, automations | Time Machine client |
| M5 MacBook Pro | Travel + mobile + client meetings | Light dev |
| Mac mini M5 Pro (new) | Primary dev: CC builds, heavy coding, SA V5 work | Time Machine client |
| Synology DS723+ | NAS: shared storage, Time Machine server, backup backbone | — |

---

## Recovery Priority (Pre-Move)
Critical before house move:
1. Time Machine on M1 → T7 (TONIGHT)
2. recover_all.sh script (not yet built — post-SA-V5)
3. NAS purchase at Prime Day
4. Full migration checklist before move date

---

## Notes
- M1 is NOT being demoted. It stays as the always-on server permanently.
- iCloud is not a backup strategy — NAS replaces iCloud for business-critical data.
- Samsung T7 is a bridge solution until NAS arrives.
- WWDC timing gives ~3 weeks to confirm M5 MBP is stable for travel before Mac mini arrives.
- Patrick Lavette at Renasant Bank is Aaron's banker — NOT a customer, not in registry.

---
*Locked 2026-04-23 by Aaron C. Norris via M5 Claude.ai session*
