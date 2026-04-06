# n8n Evaluation for Norris Utilities
## April 6, 2026

---

## 1. What Is n8n?

n8n is a workflow automation tool — like a digital assembly line for your computer tasks. You connect apps together (Gmail, Telegram, Google Sheets, etc.) and tell them "when THIS happens, do THAT." It runs on your M1 Mac, no cloud required, and handles repetitive tasks that don't need a brain — just rules.

Think of it this way: Legacy (OpenClaw) is your smart employee who can think, write emails, and make judgment calls. n8n is your robot that just follows instructions — check this inbox, copy this data, send this notification. No thinking, no API tokens, just execution.

---

## 2. What It Costs

| Option | Cost | Notes |
|--------|------|-------|
| **Self-hosted (your M1)** | **$0/month** | Runs locally, unlimited workflows |
| n8n Cloud Starter | $24/month | 2,500 executions |
| n8n Cloud Pro | $60/month | 10,000 executions |
| n8n Cloud Enterprise | Custom | Unlimited |

**Recommendation: Self-hosted.** You already have the M1 running 24/7. No reason to pay for cloud.

---

## 3. What n8n CAN Replace (Zero Token Cost)

These tasks currently burn Anthropic API tokens but are pure rule-following — no intelligence needed:

### Gmail Scanning (currently: email_scanner.py + gog CLI)
- **n8n replacement:** Gmail trigger node watches inbox every X minutes
- **What it does:** Checks for emails from specific senders, with specific subjects, or containing keywords
- **Token savings:** ~$3-5/month (multiple API calls daily for simple inbox checks)

### Samson Rope Invoice Detection (currently: samson_tracker.py)
- **n8n replacement:** Gmail trigger filtered to @samsonrope.com + "invoice" keyword
- **What it does:** Detects invoice emails, extracts subject/sender/date, logs to Google Sheet or JSON
- **Token savings:** ~$1-2/month

### A/P Vendor Invoice Scanning (currently: ap_scanner.py)
- **n8n replacement:** Gmail trigger for @samsonrope.com, @bossproductsinc.com, @metromarketingagency.com
- **What it does:** Detects vendor emails, categorizes by sender, flags invoices, sends Telegram summary
- **Token savings:** ~$2-3/month

### UPS Shipping Log Management (currently: Google Apps Script)
- **n8n replacement:** Gmail trigger for UPS tracking notifications + Google Sheets node to update log
- **What it does:** Auto-captures tracking numbers and updates your shipping spreadsheet
- **Token savings:** Minimal (Apps Script is already free), but consolidates into one dashboard

### Morning Briefing Data Aggregation (currently: morning_brief.py)
- **n8n replacement:** Scheduled trigger at 4:45 AM CT, collects data from Gmail/Calendar/Sheets, sends Telegram
- **What it does:** Pulls email counts, calendar events, pending tasks — packages into a Telegram message
- **Token savings:** ~$1-2/month (the data gathering part, not the AI summary)

### Follow-Up Reminder Sequences
- **n8n replacement:** Schedule node + IF conditions + Telegram notification
- **What it does:** "If no reply from X customer in 3 days, remind Aaron via Telegram"
- **Token savings:** ~$2-4/month (these currently trigger Claude to check and decide)

### Invoice Reminder Triggers for Caroline
- **n8n replacement:** Schedule node + Google Sheets check + Telegram to CB
- **What it does:** "If shipping log shows shipped but no QB invoice, alert CB"
- **Token savings:** ~$1/month

### reMarkable Scan Scheduling
- **n8n replacement:** Schedule trigger at 3 AM, 11 AM, 3 PM to run the scan script
- **What it does:** Replaces launchd for scheduling (though launchd works fine for this)
- **Token savings:** $0 (the scan itself still needs Claude for OCR)

### **Estimated Total Token Savings: $10-17/month**

At current Anthropic pricing, this replaces roughly 500-1,000 API calls per month that are pure "check this, move that" operations.

---

## 4. What n8n CANNOT Replace (Needs Claude's Brain)

These tasks require judgment, creativity, or understanding context:

| Task | Why It Needs Claude |
|------|-------------------|
| **Email drafting in Aaron's voice** | Requires understanding tone, relationship history, Southern professionalism |
| **Customer communication strategy** | "Should I follow up now or wait?" requires business judgment |
| **Quote generation** | Margin calculations are simple math, but knowing when to adjust pricing for a relationship is judgment |
| **Interpreting ambiguous requests** | "Can you get me some of those covers?" — which covers? which customer? what quantity? |
| **reMarkable handwriting OCR** | Reading handwriting and extracting structured data is pure AI |
| **Morning brief summary writing** | n8n can gather the DATA, but Claude writes the human-readable brief |
| **Complex email parsing** | When invoices have unusual formats or need interpretation |
| **Task prioritization** | Deciding what's urgent vs. what can wait |

---

## 5. How n8n Connects to Your Tools

| Service | n8n Support | Setup Difficulty |
|---------|------------|-----------------|
| **Gmail** | Built-in node, OAuth | Easy (one-time Google auth) |
| **Google Drive** | Built-in node | Easy |
| **Google Sheets** | Built-in node | Easy |
| **Google Calendar** | Built-in node | Easy |
| **Telegram** | Built-in node (bot token) | Easy (you already have the bot) |
| **QuickBooks** | Built-in node, OAuth | Medium (needs QB API app setup) |
| **Anthropic Claude API** | HTTP Request node | Easy (just the API key) |
| **Local files/scripts** | Execute Command node | Easy (run any shell command) |
| **Webhooks** | Built-in trigger | Easy (for receiving external events) |

---

## 6. Can n8n Run Alongside Legacy?

**Yes, no conflicts.** Here's how they coexist:

- n8n runs as a launchd service on port 5678
- Legacy (OpenClaw) runs on its own gateway at port 18789
- They don't share any ports, databases, or state
- n8n handles the "robot work" (check inbox, move data, send alerts)
- Legacy handles the "brain work" (write emails, interpret requests, make decisions)
- They can even talk to each other: n8n can call Legacy's API, and Legacy can trigger n8n workflows via webhook

**Architecture:**
```
Gmail/Calendar/Sheets
        |
    [n8n - FREE]
    "Is there a new invoice email?"
    "Copy tracking to shipping log"
    "Send Aaron a Telegram alert"
        |
        v
    [Only if brain needed]
        |
    [Claude API - PAID]
    "Draft a response to this customer"
    "Interpret this handwriting"
    "Generate this quote"
```

---

## 7. Honest Recommendation

**Adopt n8n alongside Legacy. Don't replace Legacy.**

Here's why:

**DO adopt n8n for:**
- Gmail monitoring (new emails from vendors, invoice detection)
- Telegram notifications for simple events
- Google Sheets data moves (shipping log updates)
- Scheduled data collection for morning briefs
- Follow-up reminders (3-day no-reply alerts)

**DON'T use n8n for:**
- Anything requiring Aaron's voice or judgment
- OCR, handwriting reading, or document interpretation
- Complex decision-making about customers or deals

**The bottom line:** n8n saves you $10-17/month in API tokens and, more importantly, makes your automations faster and more reliable. API calls can fail, rate-limit, or be slow. n8n workflows are instant for simple tasks. The real value isn't the dollars saved — it's that your simple automations stop depending on an AI service being available.

**Risk:** Near zero. It runs locally, costs nothing, and doesn't touch Legacy. If you don't like it, just unload the launchd service.

---

## 8. Installation Details

- **Version installed:** n8n 2.14.2
- **Node.js:** v25.9.0
- **Location:** /opt/homebrew/bin/n8n
- **Web UI:** http://localhost:5678
- **Data directory:** ~/.n8n/
- **launchd service:** com.norrisutilities.n8n

---

## 9. Next Steps If You Want to Proceed

1. Open http://localhost:5678 in Safari
2. Create your n8n account (local only, not cloud)
3. Set up Gmail OAuth credential (one-time Google auth)
4. Set up Telegram credential (use existing bot token)
5. Import the proof-of-concept Samson invoice workflow
6. Watch it work for a week before expanding

Aaron, this is a "set it and forget it" tool. Once workflows are built, they just run. No tokens, no API calls, no cost.
