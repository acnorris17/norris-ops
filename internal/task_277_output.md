<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Action Plan — Micah / Sign Online Trade — Norris Utilities®</title>
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
  --nu-success:#1F7A3A;
  --nu-warn:#B8860B;
  --font-primary:'Lato',-apple-system,BlinkMacSystemFont,sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--font-primary);color:var(--nu-body-text);background:var(--nu-light-gray);line-height:1.6;-webkit-font-smoothing:antialiased}

/* HEADER */
.nu-header{
  position:relative;
  background:linear-gradient(135deg,#0a0e5c 0%,#0033cc 30%,#0066ee 55%,#00aaff 80%,var(--nu-cyan) 100%);
  padding:60px 40px 80px;
  text-align:center;
  overflow:hidden;
  min-height:280px;
}
.nu-header::before{
  content:'';position:absolute;inset:0;
  background:
    repeating-linear-gradient(90deg,rgba(255,255,255,0.025) 0,rgba(255,255,255,0.025) 2px,transparent 2px,transparent 60px),
    repeating-linear-gradient(0deg,rgba(255,255,255,0.018) 0,rgba(255,255,255,0.018) 1px,transparent 1px,transparent 80px);
  z-index:1;opacity:.65;
}
.nu-header::after{
  content:'';position:absolute;top:-50%;right:-20%;width:80%;height:200%;
  background:radial-gradient(ellipse,rgba(6,208,255,0.18) 0%,transparent 70%);z-index:1;
}
.nu-header *{position:relative;z-index:2}
.nu-phoenix-icon{width:80px;height:80px;margin:0 auto 14px;filter:drop-shadow(0 2px 10px rgba(0,0,0,.35))}
.nu-logo-text{font-weight:900;font-size:3.2rem;color:#fff;letter-spacing:.35em;text-transform:uppercase;text-shadow:0 2px 20px rgba(0,0,0,.3)}
.nu-logo-subtitle{font-weight:900;font-size:1.4rem;color:#fff;letter-spacing:.8em;text-transform:uppercase;margin:4px 0 18px}
.nu-tagline{font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:1.3rem;color:rgba(255,255,255,.95);letter-spacing:.04em}

/* CHEVRON */
.nu-chevron{position:relative;height:50px;margin-top:-50px;z-index:10}
.nu-chevron svg{width:100%;height:50px;display:block}

/* WRAPPER */
.nu-content-area{position:relative;background:var(--nu-white)}
.nu-content-area::before{
  content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
  width:600px;height:600px;background:radial-gradient(circle,rgba(0,0,255,0.025) 0%,transparent 70%);border-radius:50%;z-index:0;pointer-events:none;
}
.nu-wrap{max-width:1100px;margin:0 auto;padding:60px 40px;position:relative;z-index:1}

/* TITLE BLOCK */
.action-eyebrow{
  display:inline-block;background:var(--nu-blue);color:#fff;
  font-weight:900;font-size:.78rem;letter-spacing:.18em;text-transform:uppercase;
  padding:7px 16px;border-radius:3px;margin-bottom:18px;
}
.action-title{
  font-weight:900;font-size:2.4rem;line-height:1.15;color:var(--nu-dark-text);margin-bottom:10px;letter-spacing:-.01em;
}
.action-title span{color:var(--nu-blue)}
.action-sub{font-size:1.1rem;color:#555;max-width:780px;margin-bottom:34px}

/* META STRIP */
.meta-strip{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:2px;background:var(--nu-medium-gray);
  border-radius:8px;overflow:hidden;margin-bottom:42px;
  box-shadow:0 2px 12px rgba(0,0,0,.05);
}
.meta-cell{background:#fff;padding:18px 20px}
.meta-label{font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;color:#888;font-weight:700;margin-bottom:6px}
.meta-value{font-size:.98rem;font-weight:700;color:var(--nu-dark-text)}
.meta-value.warn{color:var(--nu-warn)}
.meta-value.go{color:var(--nu-success)}

/* SECTION HEADERS */
.nu-section-title{font-weight:900;font-size:1.6rem;color:var(--nu-blue);margin:0 0 6px}
.nu-section-title span{color:var(--nu-dark-text);font-weight:700}
.nu-section-rule{height:3px;width:60px;background:var(--nu-cyan);margin-bottom:22px;border-radius:2px}

/* STEP BADGES */
.step-list{display:grid;gap:14px;margin-bottom:46px}
.step{
  display:flex;align-items:stretch;background:#fff;border-radius:10px;overflow:hidden;
  box-shadow:0 2px 10px rgba(0,0,0,.06);border:1px solid var(--nu-medium-gray);
}
.step-num{
  flex-shrink:0;width:64px;
  background:linear-gradient(135deg,#1a1a3e 0%,#2a2a5e 100%);
  color:var(--nu-cyan);
  display:flex;align-items:center;justify-content:center;
  font-weight:900;font-size:1.5rem;letter-spacing:.02em;
}
.step-body{padding:18px 22px;flex:1}
.step-head{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:10px;margin-bottom:6px}
.step-title{font-weight:900;font-size:1.1rem;color:var(--nu-dark-text)}
.step-when{font-size:.78rem;font-weight:700;color:#fff;background:var(--nu-blue);padding:4px 10px;border-radius:3px;letter-spacing:.04em}
.step-when.now{background:var(--nu-warn)}
.step-when.next{background:var(--nu-success)}
.step-body p{font-size:.95rem;color:#444}
.step-body ul{margin:8px 0 0 18px}
.step-body ul li{margin-bottom:4px;font-size:.93rem}

/* EMAIL DRAFTS */
.email-card{
  background:#fff;border:1px solid var(--nu-medium-gray);border-radius:10px;
  margin-bottom:24px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.05);
}
.email-head{
  background:linear-gradient(135deg,var(--nu-blue) 0%,#0044dd 100%);
  color:#fff;padding:14px 22px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;
}
.email-head h3{font-weight:900;font-size:1.05rem;letter-spacing:.02em}
.email-head .tag{font-size:.72rem;background:rgba(255,255,255,.18);padding:4px 10px;border-radius:3px;letter-spacing:.1em;text-transform:uppercase;font-weight:700}
.email-meta{padding:14px 22px;background:var(--nu-light-gray);border-bottom:1px solid var(--nu-medium-gray);font-size:.88rem}
.email-meta div{margin-bottom:4px}
.email-meta .lbl{display:inline-block;width:64px;color:#777;font-weight:700;font-size:.78rem;letter-spacing:.06em;text-transform:uppercase}
.email-body{padding:24px 26px;font-size:.96rem;color:#222;background:#fff;font-family:'Lato',sans-serif}
.email-body p{margin-left:18px;margin-bottom:14px;line-height:1.7}
.email-body .greeting{margin-left:0;font-weight:700}
.email-body .closing{margin-left:0;margin-top:18px}
.email-body .sig{margin-left:0;margin-top:0;font-size:.88rem;color:#555;line-height:1.55}
.email-body .sig strong{color:var(--nu-dark-text);font-size:.95rem}

/* MEETING BLOCK */
.meeting-block{
  background:linear-gradient(135deg,#f8faff 0%,#eef4ff 100%);
  border:1px solid #d4dffa;border-radius:12px;padding:30px;margin-bottom:46px;
}
.meeting-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:20px}
.meeting-item{background:#fff;padding:18px;border-radius:8px;border-left:4px solid var(--nu-cyan)}
.meeting-item h4{font-weight:900;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--nu-blue);margin-bottom:8px}
.meeting-item p{font-size:.95rem;color:var(--nu-dark-text);font-weight:700}
.meeting-item small{display:block;color:#666;font-weight:400;margin-top:4px;font-size:.82rem}

/* CHECKLIST */
.checklist{
  background:#fff;border:2px solid var(--nu-blue);border-radius:10px;padding:26px 30px;margin-bottom:46px;
}
.checklist h3{font-weight:900;color:var(--nu-blue);margin-bottom:14px;font-size:1.15rem}
.checklist ul{list-style:none}
.checklist li{
  padding:10px 0 10px 34px;position:relative;border-bottom:1px solid var(--nu-medium-gray);font-size:.96rem;
}
.checklist li:last-child{border-bottom:none}
.checklist li::before{
  content:'';position:absolute;left:0;top:13px;width:20px;height:20px;
  border:2px solid var(--nu-blue);border-radius:4px;background:#fff;
}

/* WHY-IT-MATTERS */
.context-box{
  background:var(--nu-dark-text);color:#fff;padding:28px 32px;border-radius:10px;margin-bottom:46px;
  position:relative;overflow:hidden;
}
.context-box::before{
  content:'';position:absolute;top:0;right:0;width:200px;height:200px;
  background:radial-gradient(circle,rgba(6,208,255,0.15) 0%,transparent 70%);
}
.context-box h3{color:var(--nu-cyan);font-weight:900;font-size:1.1rem;letter-spacing:.04em;text-transform:uppercase;margin-bottom:10px;position:relative}
.context-box p{color:rgba(255,255,255,.88);font-size:.98rem;line-height:1.7;position:relative}

/* FOOTER */
.nu-footer{
  background:linear-gradient(135deg,var(--nu-navy) 0%,#000066 100%);
  color:rgba(255,255,255,.85);padding:44px 40px;text-align:center;
}
.nu-footer-tagline{font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:1.25rem;color:var(--nu-cyan);margin-bottom:14px}
.nu-footer-contact{font-size:1rem;line-height:1.85}
.nu-footer-contact a{color:var(--nu-cyan);text-decoration:none}
.nu-footer-contact a:hover{text-decoration:underline}
.nu-footer-mark{margin-top:16px;font-size:.78rem;color:rgba(255,255,255,.5);letter-spacing:.08em}

/* RESPONSIVE */
@media(max-width:768px){
  .nu-header{padding:40px 20px 60px;min-height:200px}
  .nu-logo-text{font-size:2rem;letter-spacing:.2em}
  .nu-logo-subtitle{font-size:1rem;letter-spacing:.5em}
  .nu-tagline{font-size:1rem}
  .nu-wrap{padding:40px 22px}
  .action-title{font-size:1.7rem}
  .step{flex-direction:column}
  .step-num{width:100%;height:48px;font-size:1.2rem}
  .email-body{padding:18px}
}
@media print{
  body{background:#fff}
  .nu-header{background:var(--nu-blue)!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .step,.email-card,.checklist,.meeting-block,.context-box{box-shadow:none;page-break-inside:avoid}
  .nu-footer{background:var(--nu-navy)!important;-webkit-print-color-adjust:exact}
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <div class="nu-phoenix-icon">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
  </div>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
</header>

<!-- CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
<div class="nu-wrap">

  <span class="action-eyebrow">reMarkable Action Item — Internal</span>
  <h1 class="action-title">Micah / <span>Sign Online Trade</span> — Email + Meeting Sequence</h1>
  <p class="action-sub">
    Two-step execution: send the priming emails to Micah today, then schedule the working meeting to walk Sign Online Trade through the FlexPro Armor program, dealer pricing, and the digital order flow we want them on.
  </p>

  <!-- META STRIP -->
  <div class="meta-strip">
    <div class="meta-cell">
      <div class="meta-label">Source</div>
      <div class="meta-value">reMarkable — Action Note</div>
    </div>
    <div class="meta-cell">
      <div class="meta-label">Captured</div>
      <div class="meta-value">2026-04-22</div>
    </div>
    <div class="meta-cell">
      <div class="meta-label">Owner</div>
      <div class="meta-value">Aaron C. Norris</div>
    </div>
    <div class="meta-cell">
      <div class="meta-label">Status</div>
      <div class="meta-value warn">Emails Pending → Meeting Pending</div>
    </div>
    <div class="meta-cell">
      <div class="meta-label">Target Close</div>
      <div class="meta-value go">Meeting on calendar by 2026-04-25</div>
    </div>
  </div>

  <!-- WHY -->
  <div class="context-box">
    <h3>Why This Matters</h3>
    <p>
      Sign Online Trade is the kind of recurring, multi-unit account that pays off the long way — once they're set up on the dealer tier and ordering through the documented flow, every subsequent reorder is friction-free. The email sequence below puts the offer, the pricing logic, and a meeting ask in front of Micah in one clean pass so the meeting itself is a working session, not an introduction.
    </p>
  </div>

  <!-- STEPS -->
  <h2 class="nu-section-title">Execution <span>— Sequence</span></h2>
  <div class="nu-section-rule"></div>

  <div class="step-list">

    <div class="step">
      <div class="step-num">1</div>
      <div class="step-body">
        <div class="step-head">
          <div class="step-title">Send Email A — Introduction & Program Overview</div>
          <span class="step-when now">Today</span>
        </div>
        <p>Open the relationship with the FlexPro Armor program at-a-glance — sizes, lead time, and dealer-tier discount structure. Keep it short. Make the meeting ask explicit at the bottom.</p>
      </div>
    </div>

    <div class="step">
      <div class="step-num">2</div>
      <div class="step-body">
        <div class="step-head">
          <div class="step-title">Send Email B — Dealer Pricing Sheet & Order Flow</div>
          <span class="step-when now">Today, 30 min after Email A</span>
        </div>
        <p>Follow up with the dealer-tier pricing breakdown (30% off list) and the standard PO + shipping flow. Attach the line card and the FlexPro Armor sell sheet. This gives Micah everything to circulate internally before the meeting.</p>
      </div>
    </div>

    <div class="step">
      <div class="step-num">3</div>
      <div class="step-body">
        <div class="step-head">
          <div class="step-title">Schedule the Working Meeting</div>
          <span class="step-when next">Within 48 hrs of reply</span>
        </div>
        <p>Lock a 30-minute video call once Micah confirms receipt. Use the proposed slots in the meeting block below — do not leave it open-ended. Send the Google Calendar invite with the agenda pre-loaded.</p>
        <ul>
          <li>Confirm attendees on the Sign Online Trade side</li>
          <li>Send invite with agenda + dial-in pre-populated</li>
          <li>Block 15 min prep time on Aaron's calendar before the call</li>
        </ul>
      </div>
    </div>

    <div class="step">
      <div class="step-num">4</div>
      <div class="step-body">
        <div class="step-head">
          <div class="step-title">Run the Meeting → Capture the Order or the Next Step</div>
          <span class="step-when next">Meeting day</span>
        </div>
        <p>Walk the agenda. Exit the call with one of two outcomes: a verbal commit on a first PO, or a defined next step with a date. No drift.</p>
      </div>
    </div>

  </div>

  <!-- EMAIL A -->
  <h2 class="nu-section-title">Email Draft <span>A — Introduction</span></h2>
  <div class="nu-section-rule"></div>

  <div class="email-card">
    <div class="email-head">
      <h3>Norris Utilities® × Sign Online Trade — Quick Intro</h3>
      <span class="tag">Send First</span>
    </div>
    <div class="email-meta">
      <div><span class="lbl">To</span> Micah — Sign Online Trade</div>
      <div><span class="lbl">From</span> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
      <div><span class="lbl">Subject</span> Norris Utilities® — FlexPro Armor program for Sign Online Trade</div>
    </div>
    <div class="email-body">
      <p class="greeting">Micah —</p>
      <p>Wanted to put the Norris Utilities® program in front of you directly so you have it from the source and not secondhand.</p>
      <p>Short version: we manufacture FlexPro Armor bucket covers in the USA and distribute Samson Rope, Skylift bucket trucks, and Bay Shore Systems drill rigs across the Southeast. The covers are the piece I expect lines up best with what Sign Online Trade is moving — handmade, four standard SKUs, two-week lead time on stock sizes, and we hold inventory so reorders ship the same week.</p>
      <p>Three things I'd like to walk you through on a 30-minute call:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;• The four FlexPro Armor SKUs and how they translate to the sizes you're already buying<br>
      &nbsp;&nbsp;&nbsp;&nbsp;• Dealer-tier pricing (30% off direct list) and how that lines up against what you're paying today<br>
      &nbsp;&nbsp;&nbsp;&nbsp;• The order + shipping flow so the first PO goes through clean</p>
      <p>I'll send a second email right behind this one with the pricing sheet and line card so you have something to circulate internally before we talk. After you've had a look, can we put 30 minutes on the calendar this week or early next?</p>
      <p class="closing">Sincerely,</p>
      <p class="sig"><strong>Aaron C. Norris</strong><br>
      Founder &amp; CEO<br>
      Norris Utilities, LLC<br>
      Cell: 205-500-1343<br>
      acnorris@norrisutilities.com</p>
    </div>
  </div>

  <!-- EMAIL B -->
  <h2 class="nu-section-title">Email Draft <span>B — Pricing & Order Flow</span></h2>
  <div class="nu-section-rule"></div>

  <div class="email-card">
    <div class="email-head">
      <h3>Dealer Pricing + Order Flow — As Promised</h3>
      <span class="tag">Send 30 min After A</span>
    </div>
    <div class="email-meta">
      <div><span class="lbl">To</span> Micah — Sign Online Trade</div>
      <div><span class="lbl">From</span> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
      <div><span class="lbl">Subject</span> Re: FlexPro Armor — dealer pricing &amp; order flow for Sign Online Trade</div>
      <div><span class="lbl">Attach</span> Norris Utilities Line Card.pdf • FlexPro Armor Sell Sheet.pdf • Dealer Pricing — Sign Online Trade.pdf</div>
    </div>
    <div class="email-body">
      <p class="greeting">Micah —</p>
      <p>As promised, here is the pricing and order detail to look over before we get on a call.</p>
      <p><strong>FlexPro Armor — SKUs &amp; Dealer Pricing</strong></p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;• NU-BC-2851 — 2-Man cover, 28" × 51"<br>
      &nbsp;&nbsp;&nbsp;&nbsp;• NU-BC-2834 — 1.5-Man cover, 28" × 34"<br>
      &nbsp;&nbsp;&nbsp;&nbsp;• NU-BC-2851-C — 2-Man Combo (cover + liner)<br>
      &nbsp;&nbsp;&nbsp;&nbsp;• NU-BC-2834-C — 1.5-Man Combo (cover + liner)</p>
      <p>If you're currently buying a competitor's "24×48" — that maps to our NU-BC-2851. Their "24×34" maps to our NU-BC-2834. The dealer tier on all four is direct list less 30%, with quantity breaks on the combos starting at 10 units. The full line card and sell sheet are attached.</p>
      <p><strong>Order &amp; Shipping Flow</strong></p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;• PO emailed to acnorris@norrisutilities.com — confirmation back same day<br>
      &nbsp;&nbsp;&nbsp;&nbsp;• Stock sizes ship within two weeks; reorders against held inventory ship same week<br>
      &nbsp;&nbsp;&nbsp;&nbsp;• Shipping invoiced at our standard formula (registered cost + 10%, rounded up) — no markup games<br>
      &nbsp;&nbsp;&nbsp;&nbsp;• Net-30 terms once a credit app is on file; we can run the first PO on prepay if that moves faster</p>
      <p>For the meeting — I have the following 30-minute windows open. Tell me which works and I'll send the calendar invite:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;• Thursday 4/23 — 10:00 AM CT<br>
      &nbsp;&nbsp;&nbsp;&nbsp;• Thursday 4/23 — 2:00 PM CT<br>
      &nbsp;&nbsp;&nbsp;&nbsp;• Friday 4/24 — 9:00 AM CT<br>
      &nbsp;&nbsp;&nbsp;&nbsp;• Monday 4/27 — 11:00 AM CT</p>
      <p>If none of those work, name a slot and I'll make it work on my end.</p>
      <p class="closing">Sincerely,</p>
      <p class="sig"><strong>Aaron C. Norris</strong><br>
      Founder &amp; CEO<br>
      Norris Utilities, LLC<br>
      Cell: 205-500-1343<br>
      acnorris@norrisutilities.com</p>
    </div>
  </div>

  <!-- MEETING BLOCK -->
  <h2 class="nu-section-title">Meeting <span>— Working Session Brief</span></h2>
  <div class="nu-section-rule"></div>

  <div class="meeting-block">
    <h3 style="font-weight:900;color:var(--nu-dark-text);font-size:1.2rem;margin-bottom:6px">Sign Online Trade — Onboarding Working Session</h3>
    <p style="color:#555">Working session — not an introduction call. Walk pricing, lock the first PO or the next-step date.</p>

    <div class="meeting-grid">
      <div class="meeting-item">
        <h4>Format</h4>
        <p>Google Meet — 30 minutes</p>
        <small>Calendar invite from acnorris@norrisutilities.com</small>
      </div>
      <div class="meeting-item">
        <h4>Attendees</h4>
        <p>Aaron C. Norris<br>Micah + buyer/operator from Sign Online Trade</p>
        <small>Confirm 2nd attendee in Email A reply</small>
      </div>
      <div class="meeting-item">
        <h4>Materials Pre-Sent</h4>
        <p>Line Card • FlexPro Armor Sell Sheet • Dealer Pricing PDF</p>
        <small>Attached in Email B above</small>
      </div>
      <div class="meeting-item">
        <h4>Decision Required</h4>
        <p>First PO commitment OR dated next step</p>
        <small>No open-ended exits</small>
      </div>
    </div>

    <h4 style="margin-top:24px;font-weight:900;color:var(--nu-blue);font-size:.85rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px">Agenda — 30 Minutes</h4>
    <ol style="margin-left:20px;color:#333">
      <li style="padding:6px 0"><strong>0:00–0:05</strong> — Intros, confirm what Sign Online Trade is buying today and from whom</li>
      <li style="padding:6px 0"><strong>0:05–0:12</strong> — FlexPro Armor walkthrough: four SKUs, size translation from competitor sizing, lead time</li>
      <li style="padding:6px 0"><strong>0:12–0:20</strong> — Dealer-tier pricing side-by-side vs. their current cost; combo quantity breaks</li>
      <li style="padding:6px 0"><strong>0:20–0:25</strong> — PO flow, shipping formula, terms (prepay first / Net-30 after)</li>
      <li style="padding:6px 0"><strong>0:25–0:30</strong> — Lock first PO size + ship date OR set the next-step date</li>
    </ol>
  </div>

  <!-- CHECKLIST -->
  <div class="checklist">
    <h3>Aaron's Execution Checklist</h3>
    <ul>
      <li>Pull Micah's correct email address and confirm spelling of Sign Online Trade legal name</li>
      <li>Send Email A — Introduction &amp; Program Overview</li>
      <li>Wait 30 minutes, then send Email B — Pricing &amp; Order Flow with three attachments</li>
      <li>Add Sign Online Trade to master tracker as "Active Pursuit — Awaiting Meeting Confirmation"</li>
      <li>On reply, send Google Calendar invite with agenda in body and Meet link attached</li>
      <li>Block 15-minute prep on Aaron's calendar 30 minutes before the meeting</li>
      <li>Run the meeting; capture outcome in master tracker the same day</li>
      <li>Within 24 hrs of meeting: send recap email with PO confirmation OR dated next step</li>
    </ul>
  </div>

  <p style="text-align:center;color:#888;font-size:.85rem;margin-top:30px">
    Internal action plan generated 2026-04-22 — Norris Utilities® Autonomous Build Engine
  </p>

</div>
</main>

<!-- FOOTER -->
<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    Aaron C. Norris, Founder &amp; CEO | Norris Utilities, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> |
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
  <div class="nu-footer-mark">Norris Utilities® • Phoenix Icon® • A Legacy of Commitment® are registered trademarks of Norris Utilities, LLC</div>
</footer>

</body>
</html>