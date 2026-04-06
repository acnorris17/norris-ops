# Folk CRM Evaluation for Norris Utilities
## April 6, 2026

---

## 1. What Folk CRM Is (Plain English)

Folk is a lightweight CRM designed for people who sell through relationships, not cold-call volume. Think of it as a smart, shared contact book that connects to your email, LinkedIn, and calendar and keeps track of every conversation you've had with every contact — automatically.

It looks and feels more like a spreadsheet than a bloated enterprise system. You add contacts (from LinkedIn, email, CSV, or Google Contacts), organize them into groups, track deals through visual pipeline boards, and send email sequences — all from one place.

It was built for founders, agencies, and small B2B teams. Not for 50-rep call centers.

---

## 2. Pricing

No free tier. 14-day free trial, no credit card required.

| Plan | Annual Billing | Monthly Billing | Key Features |
|------|---------------|-----------------|--------------|
| **Standard** | $24/user/month | $30/user/month | Unlimited contacts, Gmail sync, Google Contacts sync, LinkedIn capture, 500 enrichments/month |
| **Premium** | $48/user/month | $60/user/month | Everything in Standard PLUS: deal pipelines, email sequences, dashboards, full interaction history, API access, 1,000 enrichments/month |
| **Custom** | From $80/user/month | From $100/user/month | Enterprise features, custom limits |

**Bottom line for Aaron:** You need Premium ($48/month annual) because Standard doesn't include deal pipelines, API access, or full interaction history. Standard only keeps 30 days of history — useless for relationship selling where you might not talk to someone for 6 months.

**Annual cost: $576/year for one user on Premium.**

---

## 3. Does Folk Have an API?

**Yes — Premium plan and above only.**

REST API at `https://api.folk.app` with full docs at `https://developer.folk.app`.

| What You Can Do | Create | Read | Update | Delete |
|-----------------|--------|------|--------|--------|
| People (contacts) | Yes | Yes | Yes | Yes |
| Companies | Yes | Yes | Yes | Yes |
| Deals | Yes | Yes | Yes | Yes |
| Notes | Yes | Yes | Yes | Yes |
| Reminders | Yes | Yes | Yes | Yes |
| Webhooks | Yes | Yes | Yes | Yes |

- Rate limit: 100 requests/minute
- Webhooks supported (event-driven notifications)
- OpenAPI spec available for code generation

**What this means for you:** Legacy or n8n could read/write contacts, create deals, add notes, and get notified via webhooks when things change. That's enough to build real automation.

---

## 4. Integrations

**Native integrations:**
- Gmail (two-way sync via OAuth)
- Google Contacts (auto-sync, real-time)
- Google Calendar (event import)
- LinkedIn (folkX Chrome extension — one-click capture)
- WhatsApp / WhatsApp Business
- PandaDoc (document sending)
- OpenAI (AI-powered fields)
- Enrichment: Clearbit, Apollo, Dropcontact

**Automation platforms:**
- **Zapier:** Yes, but limited — actions only, no triggers (you can push TO Folk but Folk can't fire a Zap when something happens)
- **Make (Integromat):** Yes, connector available
- **n8n:** No dedicated node, BUT Folk has a guide for using n8n with their API via HTTP Request nodes. Fully workable, just requires manual setup instead of drag-and-drop.

**Can Legacy or n8n read/write contacts, deals, notes?**
Yes — via the REST API. Full CRUD on contacts, deals, and notes. Webhooks can push events to your systems in real-time. n8n can poll or receive webhooks. Legacy can call the API directly.

---

## 5. Google Contacts Import (2,300+ contacts)

**Yes, two methods:**

**Method A — Native Google Sync (recommended):**
Connect your Google account in Folk settings. Folk auto-imports contacts you've interacted with via email/calendar and keeps them synced in real-time going forward. New contacts added automatically.

**Method B — CSV Import:**
Export Google Contacts as CSV, import into Folk. Supports .csv, .xls, .xlsx. Auto-matches fields. Can create custom fields during import.

**For 2,300 contacts:** Unlimited contacts on all plans. CSV import handles bulk records. No documented hard cap on import size.

**Caveat:** The native sync only imports contacts you've *emailed or had calendar events with*. If you have 2,300 contacts but only emailed 500 of them, you'd want CSV import to get them all.

---

## 6. Three-Channel Model (Direct/Dealer/Distributor)

Folk supports custom fields and multiple pipelines, so you could set this up as:

**Option A — One pipeline with a "Channel" custom field:**
- Add a dropdown field: Direct / Dealer / Distributor
- Filter and sort by channel
- Different pricing visibility per channel

**Option B — Three separate pipelines:**
- "Direct Sales" pipeline
- "Dealer Orders" pipeline
- "Distributor Relationships" pipeline
- Each with its own stages and deals

**Option C — Groups (Folk's signature feature):**
- Create groups: "Direct Customers", "Dealer Accounts", "Distributor Partners"
- Same contact can be in multiple groups
- Each group has its own custom fields and views

Folk's flexibility here is a strength. You're not locked into one pipeline structure.

---

## 7. Folk vs Pipedrive for Relationship Selling

| Factor | Folk | Pipedrive |
|--------|------|-----------|
| **Built for** | Relationship sellers, founders, small teams | Structured sales teams, activity-driven sales |
| **Contact capture** | LinkedIn one-click, email auto-sync | Manual entry or import |
| **Interface** | Spreadsheet-simple | Pipeline-focused, more complex |
| **Mobile app** | **NONE** | Full iOS/Android app |
| **Deal pipelines** | Yes (Premium only) | Yes (all plans) |
| **Email sequences** | Yes (Premium) | Yes (Advanced plan) |
| **Reporting** | Basic | Advanced with forecasting |
| **API** | Good (Premium only) | Excellent (all plans) |
| **Price (1 user)** | $48/month (Premium) | $49/month (Advanced) |
| **Best for** | Solo founder, relationship-driven B2B | Multi-rep team with structured process |

**For Aaron's model:** Folk fits better. You sell through personal relationships with utility buyers you've known for years. You don't need cold-call tracking or 50-rep management. You need a system that captures every email, LinkedIn message, and phone call context so you never drop a thread.

Pipedrive would work but it's built for a different sales motion — higher volume, more structured, more reps.

---

## 8. Limitations and Dealbreakers

| Issue | Severity | Notes |
|-------|----------|-------|
| **No mobile app** | HIGH | You work from 4 AM, often from phone. No app means no CRM on the go. |
| **Deals require Premium ($48/mo)** | MEDIUM | Can't use the cheaper plan for real deal tracking |
| **30-day history on Standard** | HIGH | Standard plan loses email history after 30 days. Useless for long-cycle B2B. |
| **Zapier has no triggers** | LOW | Workaround: use webhooks via API instead |
| **Reporting is basic** | LOW | You don't need enterprise dashboards |
| **Occasional bugs reported** | MEDIUM | Younger product, still maturing. 2026 reviews mention stability issues. |
| **Re-import can lose notes** | MEDIUM | Careful with bulk updates — backup first |
| **Enrichment is metered** | LOW | 1,000/month on Premium. Enriching 2,300 contacts takes ~3 months. |

---

## 9. Honest Recommendation

**Recommendation: TRY Folk on the 14-day trial. Don't commit until you test the no-mobile-app reality.**

Here's why:

**Folk is a strong fit for your business:**
- Relationship-selling model matches exactly
- Google Contacts import of 2,300+ contacts is straightforward
- API is good enough for Legacy/n8n integration
- Three-channel model works with custom fields or multiple pipelines
- $48/month is reasonable for a real CRM

**The dealbreaker risk is the missing mobile app.**
You work from 4 AM, communicate via Telegram, and aren't always at the Mac. If you need to check a contact's history or update a deal from your phone, Folk can't do that today. Pipedrive can.

**My suggestion:**
1. Start the 14-day free trial this week
2. Import your Google Contacts (CSV method for all 2,300)
3. Set up one pipeline with your three channels
4. Use it for one real week of selling
5. If the no-mobile-app kills you, look at Pipedrive ($49/month) or stay manual + ops portal
6. If you can live with desktop-only, commit to Premium annual ($48/month)

**What NOT to do:** Don't spend weeks evaluating. A CRM only works if you use it. Try it for a week, make a decision, move on.

---

## Sources

- folk.app/pricing (pricing tiers, verified April 2026)
- developer.folk.app (API documentation)
- help.folk.app (import guides, Google sync docs)
- folk.app/products/integrations (integration list)
- folk.app/products/pipelines-management (pipeline features)
- Multiple 2026 reviews: Hackceleration, OnePage CRM, Capsule CRM, Efficient App
- folk.app/articles/folk-CRM-vs-Pipedrive-social-selling (Folk's own comparison)
