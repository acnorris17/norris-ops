<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action — PO Follow-Up: Inventory Status — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-alert: #C72424;
      --nu-amber: #E89B17;
      --nu-green: #1F8B4C;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.20) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-inner { position: relative; z-index: 2; }
    .nu-phoenix-icon {
      width: 78px;
      height: 78px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-page-eyebrow {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 24px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 800px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.6;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 56px 36px 72px;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      margin-bottom: 36px;
    }
    .nu-action-tag {
      display: inline-block;
      background: var(--nu-amber);
      color: var(--nu-white);
      padding: 5px 14px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-page-title .accent { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-size: 1.1rem;
      color: #555;
      max-width: 800px;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      margin-top: 18px;
      font-size: 0.88rem;
      color: #666;
    }
    .nu-meta-row span strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* STATUS STRIPE */
    .nu-status-stripe {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 36px;
    }
    .nu-status-card {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-status-card.alert { border-left-color: var(--nu-alert); }
    .nu-status-card.amber { border-left-color: var(--nu-amber); }
    .nu-status-card.green { border-left-color: var(--nu-green); }
    .nu-status-card .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 6px;
    }
    .nu-status-card .value {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-status-card .sub {
      font-size: 0.82rem;
      color: #666;
      margin-top: 4px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* TWO-COLUMN LAYOUT */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 28px;
      margin-bottom: 40px;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-blue);
    }

    /* CALL SCRIPT */
    .nu-script {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      padding: 18px 22px;
      margin: 14px 0;
      font-size: 0.95rem;
      line-height: 1.7;
    }
    .nu-script .speaker {
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      display: block;
      margin-bottom: 4px;
    }
    .nu-script p + .speaker { margin-top: 12px; }

    /* QUESTION LIST */
    .nu-question-list {
      list-style: none;
      counter-reset: q;
    }
    .nu-question-list li {
      counter-increment: q;
      position: relative;
      padding: 12px 14px 12px 48px;
      margin-bottom: 8px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .nu-question-list li::before {
      content: counter(q);
      position: absolute;
      left: 12px;
      top: 12px;
      width: 26px;
      height: 26px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.82rem;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
    }
    .nu-checklist li {
      padding: 10px 0 10px 34px;
      border-bottom: 1px solid var(--nu-medium-gray);
      position: relative;
      font-size: 0.94rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 12px;
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
    }

    /* CHEVRON BADGE */
    .nu-badge-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
      margin: 18px 0 28px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-icon {
      width: 22px; height: 22px;
      margin-right: 12px;
      flex-shrink: 0;
      fill: var(--nu-cyan);
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: #FAFBFC; }
    .nu-table .col-status {
      font-weight: 700;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .status-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .status-pill.waiting { background: #FEF1DC; color: #8A5A00; }
    .status-pill.confirm { background: #E2F0E5; color: #1F6A38; }
    .status-pill.urgent { background: #FBE0E0; color: #971B1B; }

    /* DECISION BOX */
    .nu-decision-box {
      background: linear-gradient(135deg, #FFFBEF 0%, #FFF6DC 100%);
      border: 1px solid #E8C770;
      border-left: 5px solid var(--nu-amber);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 36px;
    }
    .nu-decision-box h3 {
      color: #6B4500;
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-decision-box p {
      color: #4A3300;
      font-size: 0.95rem;
    }

    /* CONTACT BLOCK */
    .nu-contact-block {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      margin-bottom: 10px;
    }
    .nu-contact-avatar {
      width: 44px; height: 44px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
      flex-shrink: 0;
    }
    .nu-contact-info { flex: 1; min-width: 0; }
    .nu-contact-info .name {
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .nu-contact-info .role {
      font-size: 0.82rem;
      color: #777;
    }
    .nu-contact-actions a {
      display: inline-block;
      margin-left: 6px;
      padding: 5px 10px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      color: var(--nu-blue);
      font-size: 0.78rem;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.15s;
    }
    .nu-contact-actions a:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
      border-color: var(--nu-blue);
    }

    /* TIMELINE */
    .nu-timeline {
      list-style: none;
      position: relative;
      padding-left: 32px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 9px; top: 8px; bottom: 8px;
      width: 2px;
      background: var(--nu-blue);
      opacity: 0.25;
    }
    .nu-timeline li {
      position: relative;
      padding-bottom: 14px;
    }
    .nu-timeline li::before {
      content: '';
      position: absolute;
      left: -28px; top: 6px;
      width: 12px; height: 12px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 1px var(--nu-blue);
    }
    .nu-timeline .when {
      font-weight: 700;
      color: var(--nu-blue);
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      display: block;
    }
    .nu-timeline .what {
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }

    /* EMAIL DRAFT */
    .nu-email-draft {
      background: #FAFBFC;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px;
      font-family: 'Lato', sans-serif;
      font-size: 0.94rem;
      line-height: 1.7;
    }
    .nu-email-meta {
      padding-bottom: 14px;
      margin-bottom: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.85rem;
      color: #666;
    }
    .nu-email-meta strong {
      display: inline-block;
      width: 70px;
      color: var(--nu-dark-text);
    }
    .nu-email-body p { margin-bottom: 12px; padding-left: 18px; }
    .nu-email-body p.greeting { padding-left: 0; }
    .nu-email-body p.signoff { padding-left: 0; margin-top: 18px; }
    .nu-email-body p.signature { padding-left: 24px; margin-bottom: 4px; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
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

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-status-stripe { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-container { padding: 36px 20px 56px; }
      .nu-status-stripe { grid-template-columns: 1fr; }
      .nu-card { padding: 20px; }
      .nu-badge { clip-path: none; border-radius: 6px; }
      .nu-table { font-size: 0.82rem; }
      .nu-table th, .nu-table td { padding: 10px 8px; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-page-eyebrow">Action Sheet · Inventory Follow-Up</div>
    </div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-title-block">
        <span class="nu-action-tag">reMarkable Action Item</span>
        <h1 class="nu-page-title"><span class="accent">PO Follow-Up</span> — Inventory Status Check</h1>
        <p class="nu-page-subtitle">
          Anxiously waiting on inventory from the most recent purchase order. Confirm production stage, verify ship date,
          and lock in firm ETA so customers and pipeline can be updated today.
        </p>
        <div class="nu-meta-row">
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Logged:</strong> 2026-04-21</span>
          <span><strong>Source:</strong> reMarkable notebook</span>
          <span><strong>Priority:</strong> High — inventory tied to active deals</span>
        </div>
      </div>

      <!-- STATUS STRIPE -->
      <div class="nu-status-stripe">
        <div class="nu-status-card amber">
          <div class="label">Current Status</div>
          <div class="value">Awaiting Update</div>
          <div class="sub">No firm ETA on file</div>
        </div>
        <div class="nu-status-card alert">
          <div class="label">Days Since Last Touch</div>
          <div class="value">Confirm</div>
          <div class="sub">Pull last vendor email</div>
        </div>
        <div class="nu-status-card">
          <div class="label">Action Today</div>
          <div class="value">Call + Email</div>
          <div class="sub">Phone first, follow with written</div>
        </div>
        <div class="nu-status-card green">
          <div class="label">Goal</div>
          <div class="value">Firm Ship Date</div>
          <div class="sub">Lock date in writing</div>
        </div>
      </div>

      <!-- DECISION BOX -->
      <div class="nu-decision-box">
        <h3>Why this matters today</h3>
        <p>
          Inventory delays cascade. Every day without a confirmed ship date is a day a customer can't be updated, a deal can't be
          invoiced, and a competitor gets a chance to step in. Get the answer in writing — verbal "soon" is not a date.
        </p>
      </div>

      <!-- CHEVRON BADGES -->
      <div class="nu-badge-row">
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 1l3 6 6 .9-4.5 4.4 1.1 6.2L12 15.8 6.4 18.5l1.1-6.2L3 7.9 9 7z"/></svg>
          PRIORITY: HIGH
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 6v6l4 2-1 2-5-3V6z M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16z"/></svg>
          ACT WITHIN 24 HRS
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M3 4h18v4H3zm0 6h18v4H3zm0 6h18v4H3z"/></svg>
          DOCUMENT IN TRACKER
        </div>
      </div>

      <!-- TWO COLUMN: SCRIPT + QUESTIONS -->
      <div class="nu-two-col">

        <!-- LEFT: Call Script -->
        <div class="nu-card">
          <h3>Call Script — Vendor Phone Follow-Up</h3>
          <div class="nu-script">
            <span class="speaker">Open</span>
            <p>"Hey [Name] — Aaron Norris with Norris Utilities. Hope you're doing well. I'm calling for a status update on our last PO — I've got customers asking and want to give them a real date."</p>

            <span class="speaker">Ask</span>
            <p>"Where does the order stand right now? Is it in production, in QC, or already in the shipping queue?"</p>

            <span class="speaker">Pin Down a Date</span>
            <p>"What's the firm ship date? Not a target — an actual date you can commit to in writing."</p>

            <span class="speaker">If Delayed</span>
            <p>"Understood. What caused the slip, and what does that move the date to? Is there anything I can do on my side to expedite — pay for freight upgrade, partial ship, anything?"</p>

            <span class="speaker">Close</span>
            <p>"Appreciate it. Send me an email today confirming the ship date and tracking once it's in motion. Y'all have always been straight with me — I just need a date I can take to my customer."</p>
          </div>
        </div>

        <!-- RIGHT: Key Questions -->
        <div class="nu-card">
          <h3>Five Questions — Don't Hang Up Without Answers</h3>
          <ol class="nu-question-list">
            <li>What is the <strong>current production stage</strong> of the PO?</li>
            <li>What is the <strong>committed ship date</strong> — in writing?</li>
            <li>Which <strong>carrier</strong> and what is the expected transit time to Birmingham?</li>
            <li>Are <strong>all line items shipping together</strong>, or is anything backordered?</li>
            <li>Who is the <strong>point of contact</strong> for tracking once it ships?</li>
          </ol>
        </div>
      </div>

      <!-- VENDOR CONTACTS -->
      <h2 class="nu-section-title"><span class="first">Vendor</span> <span class="rest">Contacts — Who to Call</span></h2>
      <div class="nu-card" style="margin-bottom: 36px;">
        <div class="nu-contact-block">
          <div class="nu-contact-avatar">NG</div>
          <div class="nu-contact-info">
            <div class="name">Nick Gordon — Skylift</div>
            <div class="role">Pricing &amp; production specs · primary order contact</div>
          </div>
          <div class="nu-contact-actions">
            <a href="tel:">Call</a>
          </div>
        </div>
        <div class="nu-contact-block">
          <div class="nu-contact-avatar">TG</div>
          <div class="nu-contact-info">
            <div class="name">Troy Gongwer + Thayne Grove — BOSS Products</div>
            <div class="role">CC BOTH on every BOSS communication</div>
          </div>
          <div class="nu-contact-actions">
            <a href="mailto:">Email</a>
          </div>
        </div>
        <div class="nu-contact-block">
          <div class="nu-contact-avatar">DP</div>
          <div class="nu-contact-info">
            <div class="name">Donna Poll + Sarah Daniels — Samson Rope</div>
            <div class="role">CC BOTH on every Samson communication</div>
          </div>
          <div class="nu-contact-actions">
            <a href="mailto:">Email</a>
          </div>
        </div>
        <div class="nu-contact-block">
          <div class="nu-contact-avatar">AB</div>
          <div class="nu-contact-info">
            <div class="name">Andy Barron — Bay Shore Systems</div>
            <div class="role">Primary contact (Herb Minatre, owner — escalation only)</div>
          </div>
          <div class="nu-contact-actions">
            <a href="tel:">Call</a>
          </div>
        </div>
      </div>

      <!-- CUSTOMERS WAITING -->
      <h2 class="nu-section-title"><span class="first">Customers</span> <span class="rest">Waiting on This Inventory</span></h2>
      <table class="nu-table" style="margin-bottom: 36px;">
        <thead>
          <tr>
            <th>Customer / Contact</th>
            <th>Item Expected</th>
            <th>Last Update Sent</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Coy Crosby</strong> — Dominion Energy</td>
            <td>FlexPro Armor bucket covers (3 active orders)</td>
            <td>Confirm in tracker before calling</td>
            <td><span class="status-pill urgent">Priority Update</span></td>
          </tr>
          <tr>
            <td><strong>Sammy Myers</strong> — AEP Appalachian</td>
            <td>2× ARCH + 1× Combo 1.5-Man</td>
            <td>Blocked pending SKU confirmation</td>
            <td><span class="status-pill waiting">Hold for SKU</span></td>
          </tr>
          <tr>
            <td><strong>Bill Kugler</strong> — Terex</td>
            <td>Open opportunity in pipeline</td>
            <td>Confirm in deals pipeline</td>
            <td><span class="status-pill waiting">Awaiting Inventory</span></td>
          </tr>
          <tr>
            <td><strong>Jared Lemoine</strong> — Irby Construction</td>
            <td>New primary contact (post-Wiggs/Argyle retirement)</td>
            <td>Re-introduction email pending</td>
            <td><span class="status-pill confirm">Outreach Ready</span></td>
          </tr>
        </tbody>
      </table>

      <!-- TWO COL: EMAIL DRAFT + ACTION CHECKLIST -->
      <div class="nu-two-col">

        <!-- LEFT: Email draft -->
        <div class="nu-card">
          <h3>Follow-Up Email Draft (paste &amp; personalize)</h3>
          <div class="nu-email-draft">
            <div class="nu-email-meta">
              <div><strong>To:</strong> [Vendor primary]</div>
              <div><strong>CC:</strong> [Secondary contact per vendor rule]</div>
              <div><strong>Subject:</strong> Status Check — Last PO &amp; Inventory ETA</div>
            </div>
            <div class="nu-email-body">
              <p class="greeting">[Name] —</p>
              <p>Following up on our most recent PO. I've got customers anxiously waiting on inventory and want to give them a real date, not a guess.</p>
              <p>Could you confirm the following today?</p>
              <p>• Current production stage<br>
                 • Firm ship date<br>
                 • Carrier and expected transit<br>
                 • Whether all line items ship together</p>
              <p>If anything has slipped, I'd rather know now so I can manage expectations on my end. Y'all have always been straight with me, and I appreciate that.</p>
              <p class="signoff">Sincerely,</p>
              <p class="signature">Aaron C. Norris<br>
                 Founder &amp; CEO<br>
                 Norris Utilities, LLC<br>
                 Cell: 205-500-1343<br>
                 acnorris@norrisutilities.com</p>
            </div>
          </div>
        </div>

        <!-- RIGHT: Action checklist -->
        <div class="nu-card">
          <h3>Action Checklist — Do Today</h3>
          <ul class="nu-checklist">
            <li>Open master_tracker — confirm which PO this refers to and last touch date</li>
            <li>Pull last vendor email for thread context</li>
            <li>Call vendor primary contact (script above)</li>
            <li>If no answer in 2 hrs, send the email draft</li>
            <li>CC secondary per vendor rule (Boss/Samson always CC both)</li>
            <li>Log call notes &amp; new ETA in master_tracker</li>
            <li>Update operations/open-invoices if shipment date affects billing</li>
            <li>Send Telegram update to self once ship date is confirmed</li>
            <li>Notify affected customers with the firm date the same day</li>
          </ul>
        </div>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Follow-Up</span> <span class="rest">Cadence — If No Reply</span></h2>
      <div class="nu-card">
        <ul class="nu-timeline">
          <li>
            <span class="when">Today — Hour 0</span>
            <span class="what">Phone call to vendor primary. If voicemail, leave specific message: "Calling for ship date on last PO — please call or email back today."</span>
          </li>
          <li>
            <span class="when">Today — Hour 2</span>
            <span class="what">If no callback, send the written email draft. CC secondary per vendor CC rule.</span>
          </li>
          <li>
            <span class="when">Today — End of Day</span>
            <span class="what">If still no response, escalate: text the contact directly or call the secondary. Log escalation in tracker.</span>
          </li>
          <li>
            <span class="when">Day +1 — Morning</span>
            <span class="what">If no reply by 9 AM next morning, escalate one level up (owner/sales manager). Document the escalation path used.</span>
          </li>
          <li>
            <span class="when">Day +2</span>
            <span class="what">Decision point: continue waiting with documented date, or evaluate alternate sourcing for affected line items.</span>
          </li>
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