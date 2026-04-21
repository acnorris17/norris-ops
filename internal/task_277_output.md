<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Micah / Sign Online Trading — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --nu-blue: #0000FF;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-amber: #F59E0B;
      --nu-green: #10B981;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-light-gray);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px; height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* TITLE BAR */
    .action-title-bar {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 8px;
    }
    .action-pill {
      display: inline-block;
      padding: 6px 14px;
      background: var(--nu-amber);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      border-radius: 4px;
    }
    .action-meta {
      font-size: 0.85rem;
      color: #6b6b80;
      letter-spacing: 0.05em;
    }
    h1.action-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    h1.action-title .nu-blue-word { color: var(--nu-blue); }
    .action-subtitle {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 36px;
      max-width: 700px;
    }

    /* SECTIONS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* GRID */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 36px;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .card-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .card-value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.4;
    }
    .card-sub {
      font-size: 0.9rem;
      color: #666;
      margin-top: 4px;
    }

    /* CHEVRON BADGE */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 18px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* STEPS */
    .step-list { margin-bottom: 36px; }
    .step-row {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 18px 22px;
      margin-bottom: 12px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 18px;
      align-items: start;
    }
    .step-row.done { border-left-color: var(--nu-green); opacity: 0.85; }
    .step-num {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      line-height: 1;
      min-width: 30px;
    }
    .step-body strong { color: var(--nu-dark-text); font-weight: 900; display: block; margin-bottom: 4px; }
    .step-body p { font-size: 0.95rem; color: #555; }
    .step-status {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 12px;
      align-self: center;
      white-space: nowrap;
    }
    .status-pending { background: #FEF3C7; color: #92400E; }
    .status-next { background: #DBEAFE; color: #1E3A8A; }
    .status-future { background: var(--nu-medium-gray); color: #555; }

    /* EMAIL DRAFTS */
    .email-draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 24px;
      margin-bottom: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .email-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--nu-medium-gray);
      margin-bottom: 14px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .email-num {
      font-weight: 900;
      font-size: 0.75rem;
      color: var(--nu-blue);
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }
    .email-purpose {
      font-size: 0.78rem;
      font-weight: 700;
      color: #666;
      background: var(--nu-light-gray);
      padding: 4px 10px;
      border-radius: 4px;
    }
    .email-meta {
      display: grid;
      grid-template-columns: 80px 1fr;
      gap: 6px 12px;
      margin-bottom: 14px;
      font-size: 0.92rem;
    }
    .email-meta dt { font-weight: 700; color: var(--nu-blue); }
    .email-meta dd { color: var(--nu-dark-text); }
    .email-body {
      background: var(--nu-light-gray);
      border-radius: 6px;
      padding: 18px;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      white-space: pre-wrap;
      line-height: 1.65;
      font-family: var(--font-primary);
    }

    /* MEETING BLOCK */
    .meeting-block {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef0ff 100%);
      border: 1px solid #c7cdff;
      border-radius: 10px;
      padding: 26px;
      margin-bottom: 36px;
    }
    .meeting-block h3 {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
    }
    .slot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px;
      margin-top: 14px;
    }
    .slot {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 14px;
      text-align: center;
    }
    .slot .day { font-size: 0.7rem; font-weight: 900; letter-spacing: 0.15em; text-transform: uppercase; color: var(--nu-blue); }
    .slot .date { font-size: 1.05rem; font-weight: 900; color: var(--nu-dark-text); margin: 4px 0; }
    .slot .time { font-size: 0.9rem; color: #555; }

    /* AGENDA LIST */
    .agenda-list { list-style: none; margin-top: 12px; }
    .agenda-list li {
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      display: flex;
      gap: 12px;
      font-size: 0.95rem;
    }
    .agenda-list li:last-child { border-bottom: none; }
    .agenda-list li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.4rem;
      line-height: 1;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #FFF8E1 0%, #FFE9B0 100%);
      border-left: 4px solid var(--nu-amber);
      border-radius: 6px;
      padding: 18px 22px;
      margin-bottom: 28px;
      font-size: 0.95rem;
      color: #5a4500;
    }
    .callout strong { color: #3d2f00; font-weight: 900; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #0a1066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 1.9rem; letter-spacing: 0.18em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      h1.action-title { font-size: 1.6rem; }
      .grid-2 { grid-template-columns: 1fr; }
      .step-row { grid-template-columns: auto 1fr; }
      .step-status { grid-column: 2; justify-self: start; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .email-meta { grid-template-columns: 70px 1fr; }
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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="action-title-bar">
        <span class="action-pill">Action Item — Open</span>
        <span class="action-meta">Source: reMarkable | Logged 2026-04-21</span>
      </div>

      <h1 class="action-title">Send Micah Emails, Then <span class="nu-blue-word">Schedule Meeting</span> — Sign Online Trading</h1>
      <p class="action-subtitle">Two emails go out first to put the project in writing and open the door. Once Micah replies (or three business days pass), book a 30-minute working meeting to align on scope, pricing, and timeline.</p>

      <!-- SUMMARY CARDS -->
      <div class="grid-2">
        <div class="nu-card">
          <div class="card-label">Owner</div>
          <div class="card-value">Aaron C. Norris</div>
          <div class="card-sub">Founder &amp; CEO, Norris Utilities®, LLC</div>
        </div>
        <div class="nu-card">
          <div class="card-label">Counterparty</div>
          <div class="card-value">Micah — Sign Online Trading</div>
          <div class="card-sub">Primary point of contact for the engagement</div>
        </div>
        <div class="nu-card">
          <div class="card-label">Sequence</div>
          <div class="card-value">Email 1 → Email 2 → Meeting</div>
          <div class="card-sub">Two emails first, then live working session</div>
        </div>
        <div class="nu-card">
          <div class="card-label">Target Window</div>
          <div class="card-value">Meeting booked by Friday, May 1, 2026</div>
          <div class="card-sub">Send both emails this week (by Apr 24)</div>
        </div>
      </div>

      <!-- CALLOUT -->
      <div class="callout">
        <strong>Why this order matters:</strong> Putting the request in writing first gives Micah a chance to read, gather what he needs, and reply on his own time. The meeting then becomes a working session — not a discovery call. This shortens the path to a signed scope.
      </div>

      <!-- STEPS -->
      <h2 class="nu-section-title"><span>Execution</span> Steps</h2>
      <div class="step-list">
        <div class="step-row">
          <div class="step-num">1</div>
          <div class="step-body">
            <strong>Send Email 1 — Introduction &amp; Engagement Overview</strong>
            <p>Reintroduce the relationship, state the reason for reaching out, and outline what Norris Utilities® needs from Sign Online Trading.</p>
          </div>
          <div class="step-status status-next">Do First</div>
        </div>
        <div class="step-row">
          <div class="step-num">2</div>
          <div class="step-body">
            <strong>Send Email 2 — Scope, Specs &amp; Decision Path</strong>
            <p>Send 24–48 hours after Email 1. Provides specific deliverables, a draft timeline, and the proposed agenda for the working meeting.</p>
          </div>
          <div class="step-status status-pending">After Email 1</div>
        </div>
        <div class="step-row">
          <div class="step-num">3</div>
          <div class="step-body">
            <strong>Confirm Meeting Time</strong>
            <p>If Micah replies with a slot, lock it in Google Calendar. If no reply within three business days of Email 2, send a brief nudge offering the three pre-selected slots below.</p>
          </div>
          <div class="step-status status-future">Within 3 Business Days</div>
        </div>
        <div class="step-row">
          <div class="step-num">4</div>
          <div class="step-body">
            <strong>Hold the Meeting &amp; Send Recap</strong>
            <p>30-minute working session. Same day, send a written recap with confirmed scope, owners, and next-step deadlines.</p>
          </div>
          <div class="step-status status-future">Same Day Recap</div>
        </div>
      </div>

      <!-- EMAIL DRAFTS -->
      <h2 class="nu-section-title"><span>Email</span> Drafts — Ready to Send</h2>

      <div class="email-draft">
        <div class="email-header">
          <span class="email-num">Email 1 of 2</span>
          <span class="email-purpose">Introduction &amp; Engagement Overview</span>
        </div>
        <dl class="email-meta">
          <dt>To:</dt><dd>Micah — Sign Online Trading</dd>
          <dt>From:</dt><dd>Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</dd>
          <dt>Subject:</dt><dd>Norris Utilities — Sign Online Trading engagement (intro &amp; ask)</dd>
        </dl>
        <div class="email-body">Micah —

    Aaron Norris with Norris Utilities, LLC out of Birmingham, Alabama. I appreciate you taking the time to read this.

    I'd like to formally open the conversation about Sign Online Trading and what y'all can do for us. We have a near-term need on the signage and trade-execution side, and I want to put the right structure around it before we trade any more notes.

    Here is what I'm asking of you in this first message:

      • Confirm you are still the right point of contact on this side.
      • Let me know your preferred channel — email, phone, or scheduled call.
      • Flag any onboarding paperwork or account setup we should knock out up front so nothing slows us down later.

    I'll follow up tomorrow or the day after with a second email that lays out the specifics — scope, item list, target timeline, and a draft agenda for a short working meeting between us.

    My goal is to make this easy for you and to earn the business through clean execution. Reply when it suits your schedule.

Sincerely,

    Aaron C. Norris
    Founder &amp; CEO
    Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</div>
      </div>

      <div class="email-draft">
        <div class="email-header">
          <span class="email-num">Email 2 of 2</span>
          <span class="email-purpose">Scope, Specs &amp; Meeting Request</span>
        </div>
        <dl class="email-meta">
          <dt>To:</dt><dd>Micah — Sign Online Trading</dd>
          <dt>From:</dt><dd>Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</dd>
          <dt>Subject:</dt><dd>Norris Utilities — scope details &amp; 30-minute meeting request</dd>
        </dl>
        <div class="email-body">Micah —

    Following up on yesterday's note. Below are the specifics so you can come prepared, and a meeting request to lock in the path forward.

    What I'd like to cover with Sign Online Trading:

      • Scope of work — line items, quantities, and any custom specifications on our side.
      • Pricing structure — unit pricing, volume tiers, and how shipping is handled.
      • Lead times — production windows and confirmed ship dates we can quote our customers against.
      • Account terms — payment, PO process, and any minimum commitments.
      • Single point of contact going forward, on both sides, so nothing gets lost.

    Proposed meeting:

      • 30 minutes, video or phone — your preference.
      • Three slots that work on my end are listed in the page I'll send separately, but in short: Tuesday 4/28 at 10:00 AM CT, Wednesday 4/29 at 2:00 PM CT, or Thursday 4/30 at 9:00 AM CT.
      • If none of those work, send back two windows that suit you and I'll move things to fit.

    If it is easier to handle any of the above by email before we meet, that works too — whatever moves it forward fastest.

    Looking forward to working with you.

Sincerely,

    Aaron C. Norris
    Founder &amp; CEO
    Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</div>
      </div>

      <!-- MEETING SCHEDULING -->
      <h2 class="nu-section-title"><span>Meeting</span> — Pre-Selected Slots</h2>
      <div class="meeting-block">
        <h3>Three windows held on Aaron's calendar</h3>
        <p>Each slot is a 30-minute working session. All times Central. Offer all three in the nudge email if Micah doesn't pick one in his reply.</p>
        <div class="slot-grid">
          <div class="slot">
            <div class="day">Tuesday</div>
            <div class="date">April 28, 2026</div>
            <div class="time">10:00 – 10:30 AM CT</div>
          </div>
          <div class="slot">
            <div class="day">Wednesday</div>
            <div class="date">April 29, 2026</div>
            <div class="time">2:00 – 2:30 PM CT</div>
          </div>
          <div class="slot">
            <div class="day">Thursday</div>
            <div class="date">April 30, 2026</div>
            <div class="time">9:00 – 9:30 AM CT</div>
          </div>
        </div>
      </div>

      <!-- AGENDA -->
      <h2 class="nu-section-title"><span>Working</span> Meeting Agenda — 30 Minutes</h2>
      <div class="nu-card" style="margin-bottom: 36px;">
        <div class="nu-badge"><span class="num">1</span> Introductions &amp; objective for the call — 3 min</div>
        <div class="nu-badge"><span class="num">2</span> Walk Sign Online Trading scope: items, quantities, custom specs — 8 min</div>
        <div class="nu-badge"><span class="num">3</span> Pricing structure, volume tiers, shipping handling — 6 min</div>
        <div class="nu-badge"><span class="num">4</span> Lead times &amp; production calendar — 5 min</div>
        <div class="nu-badge"><span class="num">5</span> Account setup, terms, PO process — 5 min</div>
        <div class="nu-badge"><span class="num">6</span> Confirm next steps, owners &amp; deadlines — 3 min</div>
      </div>

      <!-- DEFINITION OF DONE -->
      <h2 class="nu-section-title"><span>Definition</span> of Done</h2>
      <div class="nu-card">
        <ul class="agenda-list">
          <li>Both emails sent to Micah and confirmed delivered (no bounce).</li>
          <li>Meeting time confirmed and on Aaron's Google Calendar with Sign Online Trading invitees.</li>
          <li>Working session held — agenda fully covered, decisions captured live.</li>
          <li>Same-day recap email sent with scope, owners, and next deadlines in writing.</li>
          <li>Item logged as complete in master tracker; any follow-on actions converted into new tasks.</li>
        </ul>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
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