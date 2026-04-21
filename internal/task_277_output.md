<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Plan — Micah Sign Online Trade — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-green: #1B8F3A;
      --nu-amber: #D98A00;
      --nu-red: #C42424;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 35%, #0066EE 65%, #00AAFF 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.6;
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-type {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 24px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      backdrop-filter: blur(4px);
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
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 80px;
    }

    /* TITLE BLOCK */
    .page-title-block {
      border-bottom: 3px solid var(--nu-medium-gray);
      padding-bottom: 24px;
      margin-bottom: 40px;
    }
    .page-kicker {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-cyan);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .page-title {
      font-size: 2.3rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .page-title .accent { color: var(--nu-blue); }
    .page-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 18px 32px;
      font-size: 0.9rem;
      color: var(--nu-body-text);
      margin-top: 14px;
    }
    .page-meta strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      display: block;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 2px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      line-height: 1.2;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 900;
    }
    .nu-section-sub {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      margin-bottom: 24px;
      max-width: 760px;
    }
    .nu-section { margin-bottom: 50px; }

    /* BADGE */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 16px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    /* STATUS BAR */
    .status-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .status-card {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border-radius: 4px;
    }
    .status-card.cyan { border-left-color: var(--nu-cyan); }
    .status-card.gold { border-left-color: var(--nu-accent-gold); }
    .status-card.green { border-left-color: var(--nu-green); }
    .status-card .label {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--nu-body-text);
      margin-bottom: 4px;
    }
    .status-card .value {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }

    /* STEP TIMELINE */
    .steps-list {
      position: relative;
      padding-left: 0;
      list-style: none;
    }
    .step {
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px 24px 88px;
      margin-bottom: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }
    .step:hover {
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
      transform: translateY(-1px);
    }
    .step-num {
      position: absolute;
      left: 20px;
      top: 22px;
      width: 52px;
      height: 52px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.3rem;
      box-shadow: 0 3px 10px rgba(0,0,255,0.25);
    }
    .step-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 8px;
    }
    .step-title {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .step-when {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      background: rgba(0,0,255,0.06);
      padding: 4px 12px;
      border-radius: 12px;
      white-space: nowrap;
    }
    .step-body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.65;
    }
    .step-body p { margin-bottom: 10px; }
    .step-body p:last-child { margin-bottom: 0; }

    /* EMAIL DRAFT CARDS */
    .email-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .email-header {
      background: linear-gradient(135deg, var(--nu-light-gray), var(--nu-white));
      padding: 16px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .email-label {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .email-pill {
      font-size: 0.72rem;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .email-pill.first { background: rgba(27,143,58,0.12); color: var(--nu-green); }
    .email-pill.second { background: rgba(217,138,0,0.12); color: var(--nu-amber); }
    .email-pill.meeting { background: rgba(0,0,255,0.1); color: var(--nu-blue); }
    .email-meta {
      padding: 14px 24px;
      background: var(--nu-light-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .email-meta-row {
      display: grid;
      grid-template-columns: 80px 1fr;
      gap: 8px;
      padding: 4px 0;
    }
    .email-meta-row .k {
      font-weight: 700;
      color: var(--nu-dark-text);
      text-transform: uppercase;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      padding-top: 2px;
    }
    .email-body {
      padding: 22px 28px;
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.7;
      white-space: pre-wrap;
      font-family: 'Lato', Georgia, serif;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      position: relative;
      padding: 10px 10px 10px 40px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 13px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* TALKING POINTS */
    .talking-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .talking-card {
      background: linear-gradient(135deg, var(--nu-white), var(--nu-light-gray));
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 20px 22px;
    }
    .talking-card h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .talking-card p {
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04), rgba(6,208,255,0.06));
      border-left: 5px solid var(--nu-blue);
      padding: 20px 26px;
      border-radius: 0 6px 6px 0;
      margin: 24px 0;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 6px;
    }
    .callout p { font-size: 0.92rem; line-height: 1.65; }

    /* MEETING AGENDA */
    .agenda-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    }
    .agenda-table th, .agenda-table td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
      vertical-align: top;
    }
    .agenda-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
    }
    .agenda-table td:first-child {
      font-weight: 700;
      color: var(--nu-blue);
      white-space: nowrap;
      width: 90px;
    }
    .agenda-table tr:last-child td { border-bottom: none; }
    .agenda-table tr:nth-child(even) td { background: var(--nu-light-gray); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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
    .nu-footer-meta {
      margin-top: 16px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.08em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 20px 60px; }
      .page-title { font-size: 1.6rem; }
      .step { padding: 80px 20px 20px 20px; }
      .step-num { position: relative; left: auto; top: auto; margin-bottom: 12px; }
      .email-body { padding: 18px 20px; font-size: 0.9rem; }
      .email-meta-row { grid-template-columns: 70px 1fr; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step, .email-card, .talking-card { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 10 L115 45 L150 25 L130 60 L170 55 L140 90 L165 130 L125 105 L100 150 L75 105 L35 130 L60 90 L30 55 L70 60 L50 25 L85 45 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-type">Action Plan · Internal</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="page-title-block">
        <div class="page-kicker">reMarkable Action Item · Outreach Sequence</div>
        <h1 class="page-title">Send Micah Emails, Then <span class="accent">Schedule the Meeting</span></h1>
        <div style="color: var(--nu-body-text); font-size: 1rem; max-width: 780px;">
          Sign Online Trade — structured two-touch outreach to Micah, ending with a confirmed 30-minute discovery call. Send Email #1 today, follow-up Email #2 within five business days if no reply, then lock the meeting on the calendar.
        </div>
        <div class="page-meta">
          <div><strong>Owner</strong>Aaron C. Norris</div>
          <div><strong>Source</strong>reMarkable Action Item</div>
          <div><strong>Prepared</strong>2026-04-21</div>
          <div><strong>Target Contact</strong>Micah — Sign Online Trade</div>
          <div><strong>Channel</strong>Email → Calendar</div>
        </div>
      </div>

      <!-- STATUS BAR -->
      <div class="status-bar">
        <div class="status-card">
          <div class="label">Step 1</div>
          <div class="value">Email #1 — Intro</div>
        </div>
        <div class="status-card cyan">
          <div class="label">Step 2</div>
          <div class="value">Email #2 — Follow-Up</div>
        </div>
        <div class="status-card gold">
          <div class="label">Step 3</div>
          <div class="value">Meeting Scheduled</div>
        </div>
        <div class="status-card green">
          <div class="label">Target Outcome</div>
          <div class="value">Discovery Call Booked</div>
        </div>
      </div>

      <!-- SEQUENCE OVERVIEW -->
      <section class="nu-section">
        <div class="nu-badge">Sequence Overview</div>
        <h2 class="nu-section-title">Three <span class="rest">Touches to a Booked Meeting</span></h2>
        <p class="nu-section-sub">Each step has a single job. Do not combine them. Send, wait, follow up, then schedule. If Micah replies at any point, skip directly to scheduling.</p>

        <ol class="steps-list">
          <li class="step">
            <div class="step-num">1</div>
            <div class="step-header">
              <div class="step-title">Send Email #1 — Introduction & Purpose</div>
              <div class="step-when">Today · 2026-04-21</div>
            </div>
            <div class="step-body">
              <p>Short, specific, and direct. Tell Micah who we are, why we're reaching out about Sign Online Trade, and propose a 30-minute call. No attachments. One clear ask.</p>
              <p>Log the send in the master tracker with timestamp. If a bounce comes back, confirm Micah's current address before step 2.</p>
            </div>
          </li>
          <li class="step">
            <div class="step-num">2</div>
            <div class="step-header">
              <div class="step-title">Send Email #2 — Value-Add Follow-Up</div>
              <div class="step-when">+5 Business Days If No Reply</div>
            </div>
            <div class="step-body">
              <p>Only send if Micah has not responded. This is not a nudge — it adds one concrete piece of value (relevant capability, reference customer, or a specific question). Stays under 120 words.</p>
              <p>If a reply comes in between sends, stop the sequence and move to Step 3 scheduling immediately.</p>
            </div>
          </li>
          <li class="step">
            <div class="step-num">3</div>
            <div class="step-header">
              <div class="step-title">Schedule the Meeting on Micah's Reply</div>
              <div class="step-when">Within 24 Hours of Reply</div>
            </div>
            <div class="step-body">
              <p>Offer two or three specific 30-minute windows in Central Time. Once Micah picks one, send a calendar invite with a clear subject line, agenda in the body, and a phone number or video link.</p>
              <p>Add the meeting to the Google Calendar with a 15-minute prep reminder the morning of the call.</p>
            </div>
          </li>
        </ol>
      </section>

      <!-- EMAIL #1 -->
      <section class="nu-section">
        <div class="nu-badge">Email Draft #1</div>
        <h2 class="nu-section-title">Introduction <span class="rest">— Keep it Tight</span></h2>
        <p class="nu-section-sub">First email goes to Micah directly. Aaron's voice: em-dash greeting, indented paragraphs, direct ask up front, no filler. Review before send, then send from acnorris@norrisutilities.com.</p>

        <div class="email-card">
          <div class="email-header">
            <div class="email-label">Email #1 · Initial Outreach</div>
            <div class="email-pill first">Send First</div>
          </div>
          <div class="email-meta">
            <div class="email-meta-row"><div class="k">To</div><div>Micah &lt;[confirm address before send]&gt;</div></div>
            <div class="email-meta-row"><div class="k">From</div><div>Aaron C. Norris — acnorris@norrisutilities.com</div></div>
            <div class="email-meta-row"><div class="k">Subject</div><div>Sign Online Trade — quick intro from Norris Utilities</div></div>
          </div>
          <div class="email-body">Micah —

    I'm Aaron Norris, Founder &amp; CEO of Norris Utilities. We're a third-generation utility equipment dealer and distributor based in Birmingham, Alabama, serving twenty-plus states across the Southeast.

    I'm reaching out about Sign Online Trade. I'd like to walk through what you're working on, see where there's fit with our product lines, and explore whether a working relationship would be advantageous for both sides.

    Could we put thirty minutes on the calendar next week? I have openings Tuesday and Thursday afternoons, Central Time. Happy to work around what's easiest for you.

    Sincerely,

    Aaron C. Norris
    Founder &amp; CEO
    Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</div>
        </div>

        <div class="callout">
          <div class="callout-title">Before You Send</div>
          <p>Confirm Micah's correct email address and the full name of "Sign Online Trade" (the business entity). If either is uncertain, pause and verify — do not guess. Log the send with timestamp in the master tracker the moment it goes out.</p>
        </div>
      </section>

      <!-- EMAIL #2 -->
      <section class="nu-section">
        <div class="nu-badge">Email Draft #2</div>
        <h2 class="nu-section-title">Follow-Up <span class="rest">— Add Value, Don't Nudge</span></h2>
        <p class="nu-section-sub">Only send if there's been no reply for five business days. This email does not say "just following up." It adds one concrete piece of value and asks a specific question that makes it easy to reply.</p>

        <div class="email-card">
          <div class="email-header">
            <div class="email-label">Email #2 · Follow-Up (Conditional)</div>
            <div class="email-pill second">Send Only If No Reply</div>
          </div>
          <div class="email-meta">
            <div class="email-meta-row"><div class="k">To</div><div>Micah &lt;same address as Email #1&gt;</div></div>
            <div class="email-meta-row"><div class="k">From</div><div>Aaron C. Norris — acnorris@norrisutilities.com</div></div>
            <div class="email-meta-row"><div class="k">Subject</div><div>Re: Sign Online Trade — quick intro from Norris Utilities</div></div>
          </div>
          <div class="email-body">Micah —

    Following up on my note from last week. I know things move fast on your end, so I'll keep this short.

    Since my first email, I wanted to flag one thing that may be relevant: we're an authorized Samson Rope distributor and the Southeast territory rep for Bay Shore Systems drill rigs, and we handle FlexPro Armor bucket covers direct from the factory. If any of those overlap with what Sign Online Trade is sourcing or specifying, there's a real conversation to be had.

    Would a thirty-minute call next Wednesday or Friday work? I'll send an invite the moment you pick a time.

    Sincerely,

    Aaron C. Norris
    Founder &amp; CEO
    Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</div>
        </div>

        <div class="callout">
          <div class="callout-title">If Still No Reply After Email #2</div>
          <p>Do not send a third cold email. Mark the contact as dormant in the tracker and revisit in sixty days with a different angle — a trade-show mention, a mutual contact introduction, or a specific piece of news about Sign Online Trade. Quality over persistence.</p>
        </div>
      </section>

      <!-- MEETING SCHEDULING -->
      <section class="nu-section">
        <div class="nu-badge">Step 3 — Schedule</div>
        <h2 class="nu-section-title">Book the <span class="rest">Meeting the Right Way</span></h2>
        <p class="nu-section-sub">When Micah replies, move fast. Offer specific windows, not "let me know when works." Lock the invite within 24 hours of his reply.</p>

        <ul class="checklist">
          <li><strong>Reply within 4 business hours</strong> with two or three concrete 30-minute windows in Central Time (example: Tue 2:00 PM, Wed 10:00 AM, Thu 3:30 PM).</li>
          <li><strong>Ask for his preferred format:</strong> phone call or video (Google Meet default, Zoom if he requests it).</li>
          <li><strong>Send the calendar invite</strong> within one hour of his selection. Include Micah's email as an attendee so he gets a confirmation.</li>
          <li><strong>Invite subject line:</strong> "Norris Utilities × Sign Online Trade — Intro Call (Aaron Norris / Micah)".</li>
          <li><strong>Invite body</strong> must include: dial-in or Meet link, 3-point agenda, Aaron's cell (205-500-1343), and a one-line sentence on what to expect.</li>
          <li><strong>Set a 15-minute prep reminder</strong> the morning of the call on Aaron's calendar.</li>
          <li><strong>Update the master tracker</strong>: status moves from "Emailed" → "Meeting Scheduled" with the date/time.</li>
        </ul>
      </section>

      <!-- MEETING AGENDA -->
      <section class="nu-section">
        <div class="nu-badge">Meeting Agenda</div>
        <h2 class="nu-section-title">30 <span class="rest">Minutes, Three Segments</span></h2>
        <p class="nu-section-sub">Walking in with a structured agenda signals professionalism and respects Micah's time. Aaron leads discovery, then Aaron positions, then they align on the next concrete step.</p>

        <table class="agenda-table">
          <thead>
            <tr><th>Time</th><th>Segment</th><th>Goal</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>0:00 — 0:05</td>
              <td><strong>Opening &amp; Introductions</strong></td>
              <td>Brief mutual intros. Aaron thanks Micah for the time and confirms the 30-minute window.</td>
            </tr>
            <tr>
              <td>0:05 — 0:15</td>
              <td><strong>Discovery — Sign Online Trade</strong></td>
              <td>Aaron asks: what does Sign Online Trade do, who's the customer, what are they sourcing today, and where are the pain points?</td>
            </tr>
            <tr>
              <td>0:15 — 0:22</td>
              <td><strong>Norris Utilities Positioning</strong></td>
              <td>Aaron walks through the relevant lines (FlexPro Armor, Samson Rope, Skylift, Bay Shore Systems) based on what Micah shared.</td>
            </tr>
            <tr>
              <td>0:22 — 0:28</td>
              <td><strong>Fit &amp; Next Steps</strong></td>
              <td>Identify one or two concrete areas of overlap. Agree on the next deliverable — quote, sample, site visit, or introduction.</td>
            </tr>
            <tr>
              <td>0:28 — 0:30</td>
              <td><strong>Close &amp; Confirm</strong></td>
              <td>Recap agreed next step, timeline, and who sends what. End on time — always.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TALKING POINTS -->
      <section class="nu-section">
        <div class="nu-badge">Aaron's Talking Points</div>
        <h2 class="nu-section-title">What to <span class="rest">Lead With</span></h2>
        <p class="nu-section-sub">Five anchor points that capture what makes Norris Utilities different. Use them as needed — do not recite them in order.</p>

        <div class="talking-grid">
          <div class="talking-card">
            <h4>Third-Generation Legacy</h4>
            <p>Norris Utilities is 3rd-generation in utility equipment. Founded November 2021 in Birmingham, we run on decades of industry relationships — not a startup learning the space.</p>
          </div>
          <div class="talking-card">
            <h4>Product Depth</h4>
            <p>FlexPro Armor bucket covers (handmade USA), Samson Rope authorized distribution, Skylift bucket trucks, and Bay Shore Systems drill rigs across the Southeast territory.</p>
          </div>
          <div class="talking-card">
            <h4>Direct CEO Access</h4>
            <p>Aaron is the single point of contact — no sales layers, no handoffs. Decisions, pricing, and problem-solving happen in one conversation.</p>
          </div>
          <div class="talking-card">
            <h4>20+ State Footprint</h4>
            <p>Active customer base across more than twenty states. Proven logistics, established freight lanes, and reliable delivery across the Southeast and beyond.</p>
          </div>
          <div class="talking-card">
            <h4>Earn the Business</h4>
            <p>We don't assume fit — we listen first. If there's overlap, we build. If there isn't, we refer and stay in touch. Long relationships over short wins.</p>
          </div>
        </div>
      </section>

      <!-- POST-MEETING -->
      <section class="nu-section">
        <div class="nu-badge">Post-Meeting</div>
        <h2 class="nu-section-title">Close the <span class="rest">Loop Same Day</span></h2>
        <p class="nu-section-sub">The meeting is not done when the call ends. Within two hours, a recap email goes to Micah with the agreed next step and timeline. Caroline Butler (CB) drafts the recap; Aaron reviews before send.</p>

        <ul class="checklist">
          <li><strong>Send recap email</strong> within 2 hours of the call — summary of what was discussed, agreed next step, who owns it, and by when.</li>
          <li><strong>Update master tracker</strong> with call date, outcome, next-step owner, and due date.</li>
          <li><strong>Log relevant contacts</strong> — if Micah mentioned other people at Sign Online Trade, add them to the CRM.</li>
          <li><strong>Calendar the follow-up</strong> — whatever timeline was agreed (one week, two weeks, month-end), put it on the calendar now.</li>
          <li><strong>If a quote is owed</strong> — route to pricing with the Ben's Shipping Formula applied and margin lines set per product category.</li>
        </ul>
      </section>

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
    <div class="nu-footer-meta">Internal Action Plan · Prepared 2026-04-21 · Phoenix Icon®</div>
  </footer>

</body>
</html>