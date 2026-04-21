<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Action Plan — Micah / Sign Online Trading — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
<style>
:root{
  --nu-blue:#0000FF;
  --nu-cyan:#06D0FF;
  --nu-navy:#000033;
  --nu-white:#FFFFFF;
  --nu-light-gray:#F5F5F7;
  --nu-medium-gray:#E8E8EC;
  --nu-dark-text:#1A1A2E;
  --nu-body-text:#333333;
  --nu-accent-gold:#C9A84C;
  --nu-success:#1E8449;
  --nu-warn:#B9770E;
  --font-primary:'Lato',-apple-system,BlinkMacSystemFont,sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box;}
html{font-size:16px;scroll-behavior:smooth;}
body{
  font-family:var(--font-primary);
  color:var(--nu-body-text);
  background:var(--nu-light-gray);
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
}

/* HEADER */
.nu-header{
  position:relative;
  background:linear-gradient(135deg,#0a0e5c 0%,#0033cc 30%,#0066ee 55%,#00aaff 80%,var(--nu-cyan) 100%);
  padding:56px 40px 80px;
  text-align:center;
  overflow:hidden;
  min-height:260px;
}
.nu-header::before{
  content:'';
  position:absolute;inset:0;
  background:
    repeating-linear-gradient(90deg,rgba(255,255,255,0.03) 0,rgba(255,255,255,0.03) 2px,transparent 2px,transparent 60px),
    repeating-linear-gradient(0deg,rgba(255,255,255,0.02) 0,rgba(255,255,255,0.02) 1px,transparent 1px,transparent 80px);
  z-index:1;opacity:0.7;
}
.nu-header::after{
  content:'';
  position:absolute;top:-50%;right:-20%;
  width:80%;height:200%;
  background:radial-gradient(ellipse,rgba(6,208,255,0.18) 0%,transparent 70%);
  z-index:1;
}
.nu-header *{position:relative;z-index:2;}
.nu-phoenix-icon{
  width:72px;height:72px;margin:0 auto 12px;
  filter:drop-shadow(0 2px 10px rgba(0,0,0,0.3));
}
.nu-logo-text{
  font-weight:900;font-size:3rem;color:var(--nu-white);
  letter-spacing:0.35em;text-transform:uppercase;margin-bottom:2px;
  text-shadow:0 2px 20px rgba(0,0,0,0.3);
}
.nu-logo-subtitle{
  font-weight:900;font-size:1.25rem;color:var(--nu-white);
  letter-spacing:0.7em;text-transform:uppercase;margin-bottom:16px;
  padding-left:0.7em;
}
.nu-tagline{
  font-family:'Playfair Display',serif;font-style:italic;font-weight:400;
  font-size:1.25rem;color:rgba(255,255,255,0.95);letter-spacing:0.02em;
}

/* CHEVRON TRANSITION */
.nu-chevron{position:relative;height:50px;margin-top:-50px;z-index:10;}
.nu-chevron svg{width:100%;height:50px;display:block;}

/* CONTENT SHELL */
.nu-content-area{
  position:relative;
  background:var(--nu-white);
  padding-bottom:40px;
}
.nu-content-area::before{
  content:'';
  position:absolute;top:200px;left:50%;
  transform:translateX(-50%);
  width:65%;max-width:800px;aspect-ratio:1;
  background:radial-gradient(circle,rgba(0,0,255,0.025) 0%,transparent 70%);
  border-radius:50%;z-index:0;pointer-events:none;
}
.nu-wrap{
  max-width:1100px;margin:0 auto;padding:56px 32px 32px;
  position:relative;z-index:1;
}

/* TITLE BLOCK */
.page-kicker{
  display:inline-block;
  background:var(--nu-blue);color:var(--nu-white);
  font-weight:700;font-size:0.75rem;letter-spacing:0.2em;
  text-transform:uppercase;padding:6px 14px;border-radius:3px;
  margin-bottom:14px;
}
.page-title{
  font-weight:900;font-size:2.25rem;color:var(--nu-dark-text);
  line-height:1.15;margin-bottom:10px;
}
.page-title span{color:var(--nu-blue);}
.page-sub{
  font-size:1.05rem;color:#555;max-width:780px;
}

/* META STRIP */
.meta-strip{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(190px,1fr));
  gap:1px;background:var(--nu-medium-gray);
  margin:28px 0 40px;border:1px solid var(--nu-medium-gray);
  border-radius:6px;overflow:hidden;
}
.meta-cell{
  background:var(--nu-white);padding:14px 18px;
}
.meta-label{
  font-size:0.72rem;font-weight:700;letter-spacing:0.14em;
  text-transform:uppercase;color:#777;margin-bottom:4px;
}
.meta-value{
  font-size:0.98rem;font-weight:700;color:var(--nu-dark-text);
}
.meta-value.status-open{color:var(--nu-warn);}

/* SECTION HEADERS */
.nu-section-title{
  font-weight:900;font-size:1.55rem;color:var(--nu-blue);
  margin:40px 0 16px;display:flex;align-items:center;gap:12px;
}
.nu-section-title span{color:var(--nu-dark-text);font-weight:700;}
.nu-section-title .num{
  display:inline-flex;align-items:center;justify-content:center;
  width:36px;height:36px;background:var(--nu-blue);color:var(--nu-white);
  border-radius:50%;font-size:1rem;font-weight:900;flex-shrink:0;
}

/* BADGES */
.nu-badge{
  display:flex;align-items:center;
  background:linear-gradient(135deg,#1a1a3e 0%,#2a2a5e 100%);
  color:var(--nu-white);padding:14px 30px 14px 18px;
  margin-bottom:12px;
  clip-path:polygon(0 0,calc(100% - 22px) 0,100% 50%,calc(100% - 22px) 100%,0 100%,22px 50%);
  font-weight:700;font-size:0.92rem;letter-spacing:0.02em;
}

/* STEP CARDS */
.step-card{
  background:var(--nu-white);border:1px solid var(--nu-medium-gray);
  border-left:6px solid var(--nu-blue);border-radius:8px;
  padding:24px 26px;margin-bottom:18px;
  box-shadow:0 2px 10px rgba(0,0,0,0.04);
}
.step-head{
  display:flex;gap:14px;align-items:flex-start;margin-bottom:10px;
}
.step-num{
  flex-shrink:0;width:34px;height:34px;border-radius:50%;
  background:var(--nu-cyan);color:var(--nu-navy);
  display:flex;align-items:center;justify-content:center;
  font-weight:900;font-size:1rem;
}
.step-title{
  font-weight:900;font-size:1.15rem;color:var(--nu-dark-text);
  line-height:1.3;
}
.step-why{
  font-size:0.88rem;color:#666;font-style:italic;margin-top:3px;
}
.step-body{padding-left:48px;}
.step-body ul{list-style:none;padding:0;margin:8px 0 0;}
.step-body li{
  position:relative;padding:6px 0 6px 22px;font-size:0.96rem;
}
.step-body li::before{
  content:'';position:absolute;left:0;top:14px;
  width:8px;height:8px;background:var(--nu-blue);
  transform:rotate(45deg);
}

/* EMAIL BLOCK */
.email-block{
  background:#fafafc;border:1px solid var(--nu-medium-gray);
  border-radius:8px;padding:22px 26px;margin:14px 0;
  font-family:'Lato',sans-serif;
}
.email-block .email-meta{
  padding-bottom:12px;margin-bottom:14px;
  border-bottom:1px solid var(--nu-medium-gray);
  font-size:0.88rem;color:#555;
}
.email-block .email-meta strong{color:var(--nu-dark-text);}
.email-block .email-body{
  font-size:0.98rem;color:var(--nu-dark-text);
  white-space:pre-wrap;line-height:1.65;
}
.email-label{
  display:inline-block;background:var(--nu-cyan);color:var(--nu-navy);
  font-weight:900;font-size:0.72rem;letter-spacing:0.12em;
  text-transform:uppercase;padding:4px 10px;border-radius:3px;
  margin-bottom:10px;
}

/* CHECKLIST */
.checklist{
  background:var(--nu-white);border:1px solid var(--nu-medium-gray);
  border-radius:8px;padding:22px 26px;
}
.checklist-item{
  display:flex;align-items:flex-start;gap:12px;padding:10px 0;
  border-bottom:1px dashed #e0e0e8;
}
.checklist-item:last-child{border-bottom:none;}
.check-box{
  flex-shrink:0;width:22px;height:22px;border:2px solid var(--nu-blue);
  border-radius:4px;margin-top:2px;background:var(--nu-white);
}
.checklist-item strong{color:var(--nu-dark-text);}

/* MEETING AGENDA */
.agenda{
  background:linear-gradient(135deg,rgba(0,0,255,0.04),rgba(6,208,255,0.04));
  border:1px solid rgba(0,0,255,0.15);border-radius:8px;
  padding:24px 28px;
}
.agenda-row{
  display:grid;grid-template-columns:80px 1fr;gap:16px;
  padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);
  align-items:baseline;
}
.agenda-row:last-child{border-bottom:none;}
.agenda-time{
  font-weight:900;color:var(--nu-blue);font-size:0.95rem;
}
.agenda-topic strong{display:block;color:var(--nu-dark-text);margin-bottom:2px;}
.agenda-topic small{color:#666;font-size:0.88rem;}

/* QUESTIONS */
.q-grid{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:14px;
}
.q-card{
  background:var(--nu-white);border:1px solid var(--nu-medium-gray);
  border-top:4px solid var(--nu-cyan);border-radius:6px;
  padding:18px 20px;
}
.q-card .q-num{
  font-weight:900;color:var(--nu-cyan);font-size:1.3rem;
  display:block;margin-bottom:4px;
}
.q-card strong{display:block;color:var(--nu-dark-text);margin-bottom:4px;font-size:0.98rem;}
.q-card small{color:#666;font-size:0.85rem;line-height:1.5;}

/* SUCCESS CRITERIA */
.success-box{
  background:var(--nu-navy);color:var(--nu-white);
  border-radius:8px;padding:24px 28px;margin:20px 0;
}
.success-box h3{
  font-weight:900;color:var(--nu-cyan);font-size:1.1rem;
  letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px;
}
.success-box ul{list-style:none;padding:0;}
.success-box li{
  padding:6px 0 6px 24px;position:relative;font-size:0.96rem;
}
.success-box li::before{
  content:'✓';position:absolute;left:0;top:6px;
  color:var(--nu-cyan);font-weight:900;
}

/* FOOTER */
.nu-footer{
  background:linear-gradient(135deg,var(--nu-navy) 0%,#000066 100%);
  color:rgba(255,255,255,0.85);padding:40px;text-align:center;
  font-family:var(--font-primary);margin-top:0;
}
.nu-footer-tagline{
  font-family:'Playfair Display',serif;font-style:italic;font-weight:400;
  font-size:1.2rem;color:var(--nu-cyan);margin-bottom:14px;
}
.nu-footer-contact{font-size:0.92rem;line-height:1.8;}
.nu-footer-contact a{color:var(--nu-cyan);text-decoration:none;}
.nu-footer-contact a:hover{text-decoration:underline;}

/* RESPONSIVE */
@media (max-width:768px){
  .nu-header{padding:40px 20px 60px;min-height:200px;}
  .nu-logo-text{font-size:2rem;letter-spacing:0.2em;}
  .nu-logo-subtitle{font-size:1rem;letter-spacing:0.5em;padding-left:0.5em;}
  .nu-tagline{font-size:1rem;}
  .page-title{font-size:1.6rem;}
  .nu-wrap{padding:36px 20px 20px;}
  .nu-badge{clip-path:none;border-radius:8px;}
  .step-body{padding-left:0;}
  .agenda-row{grid-template-columns:1fr;gap:4px;}
}
@media print{
  body{background:var(--nu-white);}
  .nu-header{background:var(--nu-blue) !important;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
  .step-card,.checklist,.email-block{box-shadow:none;page-break-inside:avoid;}
  .nu-footer{background:var(--nu-navy) !important;-webkit-print-color-adjust:exact;}
}
</style>
</head>
<body>

<header class="nu-header">
  <div class="nu-phoenix-icon">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
  </div>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="nu-wrap">

    <span class="page-kicker">reMarkable Action Item</span>
    <h1 class="page-title">Send Micah the <span>Emails</span>, Then Schedule the <span>Sign Online Trading</span> Meeting</h1>
    <p class="page-sub">Two-part action: (1) forward the outstanding email thread and supporting documents to Micah so he has full context, (2) book a working meeting to walk through the Sign Online Trading onboarding, account setup, and signature authority together.</p>

    <div class="meta-strip">
      <div class="meta-cell">
        <div class="meta-label">Captured</div>
        <div class="meta-value">reMarkable — 2026-04-21</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">Owner</div>
        <div class="meta-value">Aaron C. Norris</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">Primary Contact</div>
        <div class="meta-value">Micah</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">Status</div>
        <div class="meta-value status-open">Open — Action Required</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">Target Close</div>
        <div class="meta-value">Emails today · Meeting within 5 business days</div>
      </div>
    </div>

    <!-- SEQUENCE BADGE -->
    <div class="nu-badge">EXECUTION ORDER — EMAILS FIRST, THEN CALENDAR INVITE</div>

    <!-- STEP 1 -->
    <h2 class="nu-section-title"><span class="num">1</span>Send <span>Micah the Emails</span></h2>

    <div class="step-card">
      <div class="step-head">
        <div class="step-num">A</div>
        <div>
          <div class="step-title">Gather every thread Micah needs before sending</div>
          <div class="step-why">Forward in one consolidated message so Micah has everything in one place — no hunting through five separate emails.</div>
        </div>
      </div>
      <div class="step-body">
        <ul>
          <li>Pull the Sign Online Trading onboarding / welcome email from the original sender</li>
          <li>Pull any account setup, credentialing, or portal access confirmations</li>
          <li>Pull the most recent pricing sheet, terms, or platform agreement PDF</li>
          <li>Pull any prior correspondence where Micah was copied or mentioned</li>
          <li>Confirm Micah's best email address before hitting send (verify in Gmail contacts, not memory)</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-head">
        <div class="step-num">B</div>
        <div>
          <div class="step-title">Send the consolidated forward with a clear cover note</div>
          <div class="step-why">Lead with the ask. Tell Micah exactly what he's looking at and what you want from him before the meeting.</div>
        </div>
      </div>
      <div class="step-body">

        <div class="email-block">
          <span class="email-label">Email 1 of 2 — Context Forward</span>
          <div class="email-meta">
            <strong>To:</strong> Micah &lt;[confirm address in Gmail before sending]&gt;<br>
            <strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;<br>
            <strong>Subject:</strong> Sign Online Trading — full thread for your review before we meet<br>
            <strong>Attachments:</strong> all onboarding PDFs, pricing sheet, terms
          </div>
          <div class="email-body">Micah —

    Forwarding the complete Sign Online Trading thread so you have every piece I have before we sit down.

    In this chain you'll find:
        •  The onboarding and account setup email
        •  The pricing sheet and platform terms
        •  My notes on what still needs to be finalized on our end

    Please read through when you get a chance. I'd like your take on two things specifically before we meet: whether the signature authority structure works for how we'll actually use the platform, and whether there's anything in the terms you want renegotiated before we sign.

    A separate note is coming right behind this one with proposed meeting times.

    Sincerely,
    Aaron C. Norris</div>
        </div>

        <div class="email-block">
          <span class="email-label">Email 2 of 2 — Meeting Request</span>
          <div class="email-meta">
            <strong>To:</strong> Micah<br>
            <strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;<br>
            <strong>Subject:</strong> Sign Online Trading — 30-minute working session, pick a slot
          </div>
          <div class="email-body">Micah —

    Proposing three times for a 30-minute working session on Sign Online Trading. Goal is to walk through the setup, decide who signs what, and leave the meeting with a clear path to activation.

        •  Option 1 — [Day], [Date] at [Time] CT
        •  Option 2 — [Day], [Date] at [Time] CT
        •  Option 3 — [Day], [Date] at [Time] CT

    Reply with whichever works and I'll send the calendar invite with the dial-in. If none of these fit, name two that do.

    Sincerely,
    Aaron C. Norris

    Aaron C. Norris
    Founder &amp; CEO
    Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</div>
        </div>

      </div>
    </div>

    <!-- STEP 2 -->
    <h2 class="nu-section-title"><span class="num">2</span>Schedule the <span>Sign Online Trading Meeting</span></h2>

    <div class="step-card">
      <div class="step-head">
        <div class="step-num">A</div>
        <div>
          <div class="step-title">Lock the time and send the calendar invite</div>
          <div class="step-why">The second Micah replies with a preferred slot, send the invite immediately — don't let the reply sit and cool off.</div>
        </div>
      </div>
      <div class="step-body">
        <ul>
          <li>Block 30 minutes on Aaron's Google Calendar the moment Micah confirms</li>
          <li>Title the event: <strong>Norris Utilities® × Micah — Sign Online Trading Working Session</strong></li>
          <li>Invite Micah at his confirmed email address</li>
          <li>Set location / video link — Google Meet default, phone bridge as backup</li>
          <li>Attach the onboarding PDF and pricing sheet directly to the invite</li>
          <li>Add a 15-minute reminder and a second 1-hour reminder</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-head">
        <div class="step-num">B</div>
        <div>
          <div class="step-title">Meeting agenda — 30 minutes, no drift</div>
          <div class="step-why">Walk in with the agenda already written so the conversation converts into decisions, not discussion.</div>
        </div>
      </div>
      <div class="step-body">
        <div class="agenda">
          <div class="agenda-row">
            <div class="agenda-time">0:00 – 0:03</div>
            <div class="agenda-topic"><strong>Context reset</strong><small>Why we're doing this, what Sign Online Trading unlocks for Norris Utilities®</small></div>
          </div>
          <div class="agenda-row">
            <div class="agenda-time">0:03 – 0:10</div>
            <div class="agenda-topic"><strong>Walk the onboarding packet together</strong><small>Page by page through the setup document, flag anything unclear</small></div>
          </div>
          <div class="agenda-row">
            <div class="agenda-time">0:10 – 0:17</div>
            <div class="agenda-topic"><strong>Signature authority &amp; account structure</strong><small>Who signs, what they can commit to, approval thresholds</small></div>
          </div>
          <div class="agenda-row">
            <div class="agenda-time">0:17 – 0:24</div>
            <div class="agenda-topic"><strong>Pricing, terms, renegotiation asks</strong><small>Everything Micah flagged in his pre-read goes here</small></div>
          </div>
          <div class="agenda-row">
            <div class="agenda-time">0:24 – 0:30</div>
            <div class="agenda-topic"><strong>Decisions, action items, next touchpoint</strong><small>Leave with: who does what by when, and the date we sign</small></div>
          </div>
        </div>
      </div>
    </div>

    <div class="step-card">
      <div class="step-head">
        <div class="step-num">C</div>
        <div>
          <div class="step-title">Questions Aaron brings into the room</div>
          <div class="step-why">Do not walk in empty-handed. These are the questions that get the meeting from "conversation" to "decision."</div>
        </div>
      </div>
      <div class="step-body">
        <div class="q-grid">
          <div class="q-card">
            <span class="q-num">01</span>
            <strong>Signature authority</strong>
            <small>Does the Sign Online Trading structure require a single signer, or can Micah co-sign on defined categories?</small>
          </div>
          <div class="q-card">
            <span class="q-num">02</span>
            <strong>Term length</strong>
            <small>What commitment period are we agreeing to, and what is the out if the platform underperforms?</small>
          </div>
          <div class="q-card">
            <span class="q-num">03</span>
            <strong>Pricing mechanics</strong>
            <small>Are the fees flat, per-transaction, or tiered? How do renewals price?</small>
          </div>
          <div class="q-card">
            <span class="q-num">04</span>
            <strong>Integration points</strong>
            <small>How does Sign Online Trading connect to QuickBooks, Gmail, and the ops portal?</small>
          </div>
          <div class="q-card">
            <span class="q-num">05</span>
            <strong>Data ownership</strong>
            <small>Who owns the transaction data, and is there an export path if we leave the platform?</small>
          </div>
          <div class="q-card">
            <span class="q-num">06</span>
            <strong>Go-live date</strong>
            <small>From signature to first live transaction — how many business days?</small>
          </div>
        </div>
      </div>
    </div>

    <!-- EXECUTION CHECKLIST -->
    <h2 class="nu-section-title"><span class="num">3</span>Execution <span>Checklist</span></h2>

    <div class="checklist">
      <div class="checklist-item">
        <div class="check-box"></div>
        <div><strong>Confirm Micah's email address</strong> — verify in Gmail contacts, do not guess from memory</div>
      </div>
      <div class="checklist-item">
        <div class="check-box"></div>
        <div><strong>Send Email 1 of 2</strong> — context forward with all onboarding PDFs attached</div>
      </div>
      <div class="checklist-item">
        <div class="check-box"></div>
        <div><strong>Send Email 2 of 2</strong> — meeting request with three concrete time options</div>
      </div>
      <div class="checklist-item">
        <div class="check-box"></div>
        <div><strong>Log both sends</strong> in the master tracker under Sign Online Trading</div>
      </div>
      <div class="checklist-item">
        <div class="check-box"></div>
        <div><strong>Wait for reply</strong> — if no response within 48 hours, send a one-line nudge</div>
      </div>
      <div class="checklist-item">
        <div class="check-box"></div>
        <div><strong>Send calendar invite</strong> the moment Micah picks a slot — include agenda in the body, attach packet</div>
      </div>
      <div class="checklist-item">
        <div class="check-box"></div>
        <div><strong>Prep the six questions</strong> above on a single page, bring to the meeting</div>
      </div>
      <div class="checklist-item">
        <div class="check-box"></div>
        <div><strong>After the meeting</strong> — recap email within 2 hours listing decisions, owners, and next date</div>
      </div>
    </div>

    <!-- SUCCESS CRITERIA -->
    <div class="success-box">
      <h3>What Done Looks Like</h3>
      <ul>
        <li>Both emails to Micah sent from acnorris@norrisutilities.com today</li>
        <li>Micah has confirmed receipt and picked a meeting slot within 48 hours</li>
        <li>Google Calendar invite sent, accepted, packet attached</li>
        <li>30-minute working session held, agenda kept on time</li>
        <li>Recap email in Micah's inbox within 2 hours of meeting end, with decisions and dates locked</li>
        <li>Master tracker and ops portal updated to reflect the state of Sign Online Trading onboarding</li>
      </ul>
    </div>

  </div>
</main>

<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> |
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
</footer>

</body>
</html>