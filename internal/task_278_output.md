<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MK Email Catch-Up & Mel Introduction — Action Plan — Norris Utilities®</title>
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
      --nu-urgent-red: #CC0000;
      --nu-success-green: #0F7B3A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    /* PHOENIX WATERMARK IN HEADER */
    .nu-phoenix-bg {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 420px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      display: inline-block;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-white);
      padding: 6px 18px;
      border-radius: 20px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-top: 20px;
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 300px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* TITLE BLOCK */
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.25rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.2;
    }
    .nu-page-title .accent { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: #666;
      margin-bottom: 30px;
      font-weight: 400;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      padding: 18px 22px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
      font-size: 0.92rem;
    }
    .nu-meta-row .meta-item strong {
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      display: block;
      margin-bottom: 2px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-medium-gray);
      position: relative;
    }
    .nu-section-title::after {
      content: '';
      position: absolute;
      bottom: -3px; left: 0;
      width: 80px; height: 3px;
      background: var(--nu-cyan);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CHEVRON BADGES */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .nu-badge.urgent {
      background: linear-gradient(135deg, #7a0000 0%, #cc0000 100%);
    }
    .nu-badge.ready {
      background: linear-gradient(135deg, #0a3e1a 0%, #0F7B3A 100%);
    }

    /* ACTION CARDS */
    .nu-action-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.07);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      display: flex;
      flex-direction: column;
    }
    .nu-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-card.urgent { border-top-color: var(--nu-urgent-red); }
    .nu-card.success { border-top-color: var(--nu-success-green); }
    .nu-card.accent { border-top-color: var(--nu-cyan); }

    .nu-card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }
    .nu-card-num {
      flex-shrink: 0;
      width: 40px; height: 40px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
    }
    .nu-card.urgent .nu-card-num { background: var(--nu-urgent-red); }
    .nu-card.success .nu-card-num { background: var(--nu-success-green); }
    .nu-card.accent .nu-card-num { background: #0077AA; }

    .nu-card-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .nu-card-meta {
      font-size: 0.8rem;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 10px;
      font-weight: 700;
    }
    .nu-card-meta .priority-high { color: var(--nu-urgent-red); }
    .nu-card-meta .priority-med { color: #C9A84C; }
    .nu-card-body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.65;
      flex-grow: 1;
    }
    .nu-card-body ul {
      list-style: none;
      padding: 0;
      margin: 10px 0 0 0;
    }
    .nu-card-body ul li {
      padding: 4px 0 4px 20px;
      position: relative;
      font-size: 0.92rem;
    }
    .nu-card-body ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 6px;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* EMAIL DRAFT BLOCKS */
    .nu-email-draft {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      padding: 24px 28px;
      margin: 20px 0;
      font-size: 0.95rem;
    }
    .nu-email-draft .draft-label {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 4px 12px;
      border-radius: 3px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .nu-email-draft .draft-headers {
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      background: var(--nu-white);
      padding: 12px 16px;
      border-radius: 4px;
      margin-bottom: 16px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-email-draft .draft-headers strong {
      color: var(--nu-blue);
      display: inline-block;
      width: 70px;
    }
    .nu-email-draft .draft-body {
      background: var(--nu-white);
      padding: 20px 24px;
      border-radius: 4px;
      border: 1px solid var(--nu-medium-gray);
      line-height: 1.7;
    }
    .nu-email-draft .draft-body p {
      margin-bottom: 14px;
      padding-left: 20px;
    }
    .nu-email-draft .draft-body p.greeting {
      padding-left: 0;
      font-weight: 700;
    }
    .nu-email-draft .draft-body p.close {
      padding-left: 0;
      margin-top: 20px;
    }
    .nu-email-draft .draft-body p.signature {
      padding-left: 20px;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-email-draft .draft-body ul {
      margin: 10px 0 14px 40px;
      list-style: none;
    }
    .nu-email-draft .draft-body ul li {
      padding: 3px 0;
      position: relative;
      padding-left: 16px;
    }
    .nu-email-draft .draft-body ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
    }

    /* CHECKLIST */
    .nu-checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-checklist h4 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-checklist ul {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 10px 0 10px 36px;
      position: relative;
      font-size: 0.95rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 4px; top: 12px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-dark-text);
    }

    /* CONTEXT BOX */
    .nu-context-box {
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border: 1px solid #d0dbff;
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 28px;
      margin-bottom: 30px;
    }
    .nu-context-box h3 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .nu-context-box p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      margin-bottom: 20px;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 18px;
      text-align: left;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: #fafbfd; }
    .nu-table .status-pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-table .status-pending { background: #fff3d6; color: #8a6000; }
    .nu-table .status-ready { background: #d6f2df; color: #0F7B3A; }
    .nu-table .status-urgent { background: #ffdad6; color: #aa1100; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
      font-size: 0.95rem;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .nu-page-title { font-size: 1.6rem; }
      .nu-section-title { font-size: 1.2rem; }
      .nu-badge { clip-path: none; border-radius: 6px; }
      .nu-action-grid { grid-template-columns: 1fr; }
      .nu-email-draft { padding: 18px 16px; }
      .nu-email-draft .draft-headers { font-size: 0.78rem; padding: 10px 12px; }
      .nu-email-draft .draft-body { padding: 16px; }
      .nu-table { font-size: 0.85rem; }
      .nu-table th, .nu-table td { padding: 10px 12px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-email-draft { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-bg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Action Plan · Internal</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <h1 class="nu-page-title"><span class="accent">MK Email Catch-Up</span> &amp; Mel Introduction</h1>
      <p class="nu-page-subtitle">Action plan from reMarkable task: catch up on all outstanding MK Smith marketing items, introduce Mel via email, and close pending payment loops.</p>

      <div class="nu-meta-row">
        <div class="meta-item">
          <strong>Captured</strong>
          reMarkable · 2026-04-22
        </div>
        <div class="meta-item">
          <strong>Owner</strong>
          Aaron C. Norris
        </div>
        <div class="meta-item">
          <strong>Contractor</strong>
          MK Smith · Marketing
        </div>
        <div class="meta-item">
          <strong>Introduction</strong>
          Mel &rarr; MK Smith
        </div>
        <div class="meta-item">
          <strong>Priority</strong>
          High — blocking marketing output
        </div>
      </div>

      <!-- CONTEXT -->
      <section class="nu-section">
        <div class="nu-context-box">
          <h3>Why This Matters</h3>
          <p>
            MK Smith is Norris Utilities® marketing contractor. Email backlog has built up covering active projects, a pending payment question, and an outstanding ask to introduce Mel so MK can bring Mel into the marketing workstream. Every day this sits is a day marketing deliverables do not move. Close the loop today: clear the inbox, send the intro, confirm payment.
          </p>
        </div>
      </section>

      <!-- ACTION BADGE -->
      <div style="margin-bottom: 24px;">
        <span class="nu-badge urgent">Priority — Today</span>
      </div>

      <!-- ACTION CARDS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Action <span>Items</span></h2>

        <div class="nu-action-grid">

          <div class="nu-card urgent">
            <div class="nu-card-header">
              <div class="nu-card-num">1</div>
              <div class="nu-card-title">Read &amp; triage MK email backlog</div>
            </div>
            <div class="nu-card-meta"><span class="priority-high">High priority</span> · 30 min</div>
            <div class="nu-card-body">
              Open Gmail, filter <em>from:MK Smith</em>, read every thread in the last 30 days top to bottom before replying to any of them. Capture open asks in a single list so nothing falls through.
              <ul>
                <li>Mark each thread: reply, action, or archive</li>
                <li>Note every deliverable MK is waiting on from Aaron</li>
                <li>Note every deliverable Aaron is waiting on from MK</li>
              </ul>
            </div>
          </div>

          <div class="nu-card accent">
            <div class="nu-card-header">
              <div class="nu-card-num">2</div>
              <div class="nu-card-title">Send intro email — Mel &rarr; MK Smith</div>
            </div>
            <div class="nu-card-meta"><span class="priority-high">High priority</span> · 10 min</div>
            <div class="nu-card-body">
              Introduce Mel to MK over email so MK can loop Mel directly into the active marketing work. Draft prepared below — review, confirm Mel&rsquo;s correct email address, send.
              <ul>
                <li>Confirm Mel&rsquo;s email before sending</li>
                <li>Double CC MK and Mel on first message</li>
                <li>State clearly what Mel will be helping with</li>
              </ul>
            </div>
          </div>

          <div class="nu-card">
            <div class="nu-card-header">
              <div class="nu-card-num">3</div>
              <div class="nu-card-title">Resolve outstanding MK payment question</div>
            </div>
            <div class="nu-card-meta"><span class="priority-med">Medium priority</span> · 15 min</div>
            <div class="nu-card-body">
              MK has a pending payment item in the thread. Confirm the amount, confirm the invoice has been received, and confirm payment method and date. Do not leave this open — contractors get paid on time.
              <ul>
                <li>Confirm invoice number and amount</li>
                <li>Send payment or confirm payment date</li>
                <li>Reply in thread so MK has it in writing</li>
              </ul>
            </div>
          </div>

          <div class="nu-card success">
            <div class="nu-card-header">
              <div class="nu-card-num">4</div>
              <div class="nu-card-title">Reply to every open MK thread</div>
            </div>
            <div class="nu-card-meta">Medium priority · 45 min</div>
            <div class="nu-card-body">
              With the triage list from Step 1 in hand, clear every thread. Short, direct replies — answer the ask or give a date when you will. No thread left unread.
              <ul>
                <li>One reply per thread minimum</li>
                <li>If answer is &ldquo;I need more info,&rdquo; say what info</li>
                <li>Archive anything that does not need a reply</li>
              </ul>
            </div>
          </div>

          <div class="nu-card accent">
            <div class="nu-card-header">
              <div class="nu-card-num">5</div>
              <div class="nu-card-title">Confirm MK&rsquo;s current work-in-progress list</div>
            </div>
            <div class="nu-card-meta">Medium priority · 10 min</div>
            <div class="nu-card-body">
              Ask MK for a one-line status on each open project so both sides are aligned. Use this as the standing agenda going forward — no more silent backlogs.
              <ul>
                <li>List of active projects with status</li>
                <li>Next deliverable date per project</li>
                <li>What MK needs from Aaron to move each forward</li>
              </ul>
            </div>
          </div>

          <div class="nu-card">
            <div class="nu-card-header">
              <div class="nu-card-num">6</div>
              <div class="nu-card-title">Log completion &amp; update tracker</div>
            </div>
            <div class="nu-card-meta">Low priority · 5 min</div>
            <div class="nu-card-body">
              Mark the reMarkable task complete. Update the master tracker with anything that came out of the MK catch-up so the next person reading the tracker knows where things stand.
              <ul>
                <li>Mark reMarkable item closed</li>
                <li>Log open follow-ups in master tracker</li>
                <li>Add payment confirmation to operations notes</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <!-- EMAIL DRAFT — Intro -->
      <section class="nu-section">
        <h2 class="nu-section-title">Email <span>Draft — Intro: Mel &rarr; MK</span></h2>
        <p style="margin-bottom: 16px; color: #555;">Review, confirm Mel&rsquo;s email address is correct, then send. Aaron&rsquo;s voice: em-dash greeting, indented paragraphs, no filler words.</p>

        <div class="nu-email-draft">
          <span class="draft-label">Ready to Send</span>
          <div class="draft-headers">
            <div><strong>To:</strong> MK Smith &lt;mk@[confirm address]&gt;</div>
            <div><strong>Cc:</strong> Mel &lt;[confirm Mel&rsquo;s email]&gt;</div>
            <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
            <div><strong>Subject:</strong> Intro — Mel &amp; MK</div>
          </div>
          <div class="draft-body">
            <p class="greeting">MK and Mel —</p>
            <p>I want to connect the two of you directly. Mel is going to be helping on the Norris Utilities® marketing work, and I want you both working together going forward rather than routing through me.</p>
            <p>MK, Mel is sharp and ready to jump in. Please bring Mel into whatever is active on your plate — the current campaigns, the line card refresh, anything in flight — and let Mel get up to speed from you directly.</p>
            <p>Mel, MK is our marketing contractor and has been driving everything from brand assets to outbound. MK is the right person to lean on for context, files, and history.</p>
            <p>Y&rsquo;all have my permission to coordinate directly. Loop me in when you need a decision or when something is ready for my review.</p>
            <p>Appreciate you both.</p>
            <p class="close">Sincerely,</p>
            <p class="signature">
              Aaron C. Norris<br>
              Founder &amp; CEO<br>
              Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </p>
          </div>
        </div>
      </section>

      <!-- EMAIL DRAFT — Payment -->
      <section class="nu-section">
        <h2 class="nu-section-title">Email <span>Draft — Payment Confirmation</span></h2>
        <p style="margin-bottom: 16px; color: #555;">Use this as a starting point once invoice number and amount are confirmed. Fill in the specifics before sending.</p>

        <div class="nu-email-draft">
          <span class="draft-label">Template — fill specifics</span>
          <div class="draft-headers">
            <div><strong>To:</strong> MK Smith</div>
            <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
            <div><strong>Subject:</strong> Payment — [invoice number / project]</div>
          </div>
          <div class="draft-body">
            <p class="greeting">MK —</p>
            <p>Closing the loop on payment. I have your invoice in hand and the amount is confirmed at $[amount]. Payment goes out [method — Zelle / check / ACH] on [date].</p>
            <p>Going forward, let&rsquo;s stay on a standing cadence so nothing sits. If there&rsquo;s anything else open on your end invoice-wise, send it over and I&rsquo;ll get it cleared the same week.</p>
            <p>Appreciate the patience and appreciate the work.</p>
            <p class="close">Sincerely,</p>
            <p class="signature">
              Aaron C. Norris<br>
              Founder &amp; CEO<br>
              Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </p>
          </div>
        </div>
      </section>

      <!-- TRACKING TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Execution <span>Tracker</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Action</th>
              <th>Owner</th>
              <th>Est. Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Triage MK email backlog — build open-ask list</td>
              <td>Aaron</td>
              <td>30 min</td>
              <td><span class="status-pill status-urgent">Do First</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Confirm Mel&rsquo;s email address</td>
              <td>Aaron</td>
              <td>5 min</td>
              <td><span class="status-pill status-pending">Pending</span></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Send intro email — Mel &amp; MK</td>
              <td>Aaron</td>
              <td>10 min</td>
              <td><span class="status-pill status-ready">Draft Ready</span></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Confirm MK invoice number &amp; amount</td>
              <td>Aaron</td>
              <td>10 min</td>
              <td><span class="status-pill status-pending">Pending</span></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Send payment &amp; confirmation email</td>
              <td>Aaron</td>
              <td>15 min</td>
              <td><span class="status-pill status-ready">Template Ready</span></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Reply to every open MK thread</td>
              <td>Aaron</td>
              <td>45 min</td>
              <td><span class="status-pill status-pending">Pending</span></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Request MK&rsquo;s current WIP list</td>
              <td>Aaron &rarr; MK</td>
              <td>10 min</td>
              <td><span class="status-pill status-pending">Pending</span></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Mark reMarkable task complete &amp; update tracker</td>
              <td>Aaron</td>
              <td>5 min</td>
              <td><span class="status-pill status-pending">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Pre-Send <span>Checklist</span></h2>
        <div class="nu-checklist">
          <h4>Before hitting send on the Mel intro</h4>
          <ul>
            <li><strong>Mel&rsquo;s email address confirmed</strong> — typed correctly, spelled correctly, current</li>
            <li><strong>MK&rsquo;s email address confirmed</strong> — active inbox, not an old forwarder</li>
            <li><strong>Subject line is direct</strong> — &ldquo;Intro — Mel &amp; MK&rdquo; or equivalent</li>
            <li><strong>Both parties CC&rsquo;d</strong> — not BCC, so the thread stays transparent</li>
            <li><strong>Signature block complete</strong> — full name, title, company, cell, email</li>
            <li><strong>No filler language</strong> — no &ldquo;just wanted to,&rdquo; &ldquo;touch base,&rdquo; &ldquo;circle back&rdquo;</li>
            <li><strong>Clear handoff</strong> — both parties know they can coordinate directly</li>
            <li><strong>Follow-up flagged</strong> — calendar reminder 3 days out to confirm they connected</li>
          </ul>
        </div>
      </section>

      <!-- CLOSING NOTE -->
      <section class="nu-section">
        <div class="nu-context-box">
          <h3>Definition of Done</h3>
          <p>
            Every MK email thread triaged and replied to. Mel introduced to MK via email with both CC&rsquo;d. MK payment confirmed and sent. MK&rsquo;s current WIP list in hand. reMarkable task closed and master tracker updated. When all of that is true, this action item is done — not before.
          </p>
        </div>
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
  </footer>

</body>
</html>