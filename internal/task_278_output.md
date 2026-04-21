<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Brief: Catch Up on MK Emails — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --nu-blue: #0000FF;
      --nu-blue-deep: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-navy-deep: #0a0e5c;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-action-red: #C8102E;
      --nu-action-amber: #E8A33D;
      --nu-action-green: #2E8B57;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, var(--nu-navy-deep) 0%, var(--nu-blue-deep) 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 80%;
      height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-tagline .reg { font-size: 0.7em; vertical-align: super; }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 50px 0 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 980px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* ══ ACTION BAR ══ */
    .action-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 4px;
      margin-bottom: 32px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .action-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .action-meta strong { color: var(--nu-dark-text); font-weight: 700; }
    .priority-tag {
      display: inline-block;
      background: var(--nu-action-red);
      color: var(--nu-white);
      padding: 5px 14px;
      border-radius: 3px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* ══ SECTION TITLES ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue-deep);
      margin: 0 0 6px;
      letter-spacing: -0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-underline {
      width: 48px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
      border-radius: 2px;
    }

    /* ══ H1 ══ */
    .page-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
      letter-spacing: -0.02em;
    }
    .page-title .accent { color: var(--nu-blue-deep); }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 28px;
    }

    /* ══ CHEVRON BADGES ══ */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      margin-right: 12px;
      flex-shrink: 0;
      font-size: 0.88rem;
    }

    /* ══ TASK CARDS ══ */
    .task-grid {
      display: grid;
      gap: 22px;
      margin-bottom: 40px;
    }
    .task-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .task-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .task-card.amber { border-top-color: var(--nu-action-amber); }
    .task-card.green { border-top-color: var(--nu-action-green); }
    .task-card.red   { border-top-color: var(--nu-action-red); }

    .task-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 14px;
      margin-bottom: 14px;
      flex-wrap: wrap;
    }
    .task-title {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
    }
    .task-title .num {
      color: var(--nu-blue-deep);
      margin-right: 8px;
    }
    .task-pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: var(--nu-medium-gray);
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .task-pill.red   { background: #FCE4E8; color: #9E0B22; }
    .task-pill.amber { background: #FDF1DC; color: #8A5C17; }
    .task-pill.green { background: #DFF3E7; color: #1D5E3A; }

    .task-body { margin-bottom: 14px; color: var(--nu-body-text); }
    .task-body p { margin-bottom: 10px; }
    .task-body p:last-child { margin-bottom: 0; }

    .task-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      padding-top: 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.85rem;
    }
    .task-meta-row div {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .task-meta-row .label {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--nu-blue-deep);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .task-meta-row .value {
      color: var(--nu-dark-text);
      font-weight: 400;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
      margin: 10px 0 0;
    }
    .checklist li {
      position: relative;
      padding: 8px 0 8px 34px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      color: var(--nu-body-text);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 4px;
      top: 12px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* ══ EMAIL DRAFT BOX ══ */
    .email-draft {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      padding: 22px 26px;
      margin-top: 14px;
      font-size: 0.95rem;
    }
    .email-draft .email-header {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 4px 14px;
      padding-bottom: 14px;
      margin-bottom: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .email-draft .email-header b {
      font-weight: 700;
      color: var(--nu-blue-deep);
    }
    .email-draft .email-body p {
      margin-bottom: 12px;
      text-indent: 24px;
    }
    .email-draft .email-body p.no-indent {
      text-indent: 0;
    }
    .email-draft .email-body ul {
      margin: 8px 0 12px 36px;
      list-style: none;
    }
    .email-draft .email-body ul li {
      position: relative;
      padding-left: 16px;
      margin-bottom: 4px;
    }
    .email-draft .email-body ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 700;
    }
    .email-draft .email-sig {
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.85rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .email-draft .email-sig b { color: var(--nu-dark-text); }

    /* ══ SUMMARY BOX ══ */
    .summary-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, var(--nu-blue-deep) 100%);
      color: var(--nu-white);
      padding: 30px 32px;
      border-radius: 8px;
      margin-bottom: 40px;
    }
    .summary-box h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 12px;
    }
    .summary-box p { color: rgba(255,255,255,0.92); margin-bottom: 8px; }
    .summary-box p:last-child { margin-bottom: 0; }

    /* ══ NEXT STEPS ══ */
    .next-steps {
      background: var(--nu-white);
      border: 2px solid var(--nu-blue);
      border-radius: 8px;
      padding: 26px 28px;
      margin-bottom: 40px;
    }
    .next-steps h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue-deep);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .next-steps ol {
      margin-left: 24px;
      color: var(--nu-body-text);
    }
    .next-steps ol li {
      margin-bottom: 8px;
      padding-left: 6px;
    }
    .next-steps ol li::marker {
      color: var(--nu-blue-deep);
      font-weight: 900;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 32px;
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
    .nu-footer-tagline .reg { font-size: 0.65em; vertical-align: super; }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-fineprint {
      margin-top: 18px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.05em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 66px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 0 20px; }
      .page-title { font-size: 1.6rem; }
      .task-card { padding: 22px 20px; }
      .email-draft { padding: 18px 20px; }
      .email-draft .email-body p { text-indent: 16px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding-right: 18px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .task-card { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment<span class="reg">&reg;</span></div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ACTION BAR -->
      <div class="action-bar">
        <div class="action-meta">
          <span><strong>Source:</strong> reMarkable Action Item</span>
          <span><strong>Captured:</strong> 2026-04-21</span>
          <span><strong>Owner:</strong> Aaron C. Norris</span>
        </div>
        <span class="priority-tag">Action Required</span>
      </div>

      <!-- H1 -->
      <h1 class="page-title">Catch Up on <span class="accent">MK Emails</span></h1>
      <p class="page-subtitle">Three open threads with MK Smith need to be closed out: backlog review, the intro to Mel, and payment.</p>

      <!-- SUMMARY -->
      <div class="summary-box">
        <h3>The Short Version</h3>
        <p><strong>Who:</strong> MK Smith — Marketing contractor for Norris Utilities<span style="font-size:0.65em;vertical-align:super">&reg;</span>.</p>
        <p><strong>What:</strong> Respond to MK's outstanding emails, send an introduction between MK and Mel, and process MK's marketing payment.</p>
        <p><strong>Why now:</strong> Contractor communications are piling up. Clearing them keeps the marketing function moving and keeps MK paid on time.</p>
      </div>

      <!-- SECTION — ACTION ITEMS -->
      <h2 class="nu-section-title">Action <span>Items</span></h2>
      <div class="nu-section-underline"></div>

      <div class="nu-badge"><span class="nu-badge-num">1</span>REVIEW & REPLY — BACKLOG OF MK EMAILS</div>

      <div class="task-grid">

        <!-- TASK 1 -->
        <div class="task-card red">
          <div class="task-header">
            <div class="task-title"><span class="num">01.</span>Clear the MK Email Backlog</div>
            <span class="task-pill red">Do First</span>
          </div>
          <div class="task-body">
            <p>Open Gmail and filter to MK Smith. Read every unread or flagged thread from MK in date order, oldest first. For each one, take one of three actions: reply now, schedule a time to handle it, or close it out if it's already been resolved in conversation.</p>
          </div>
          <ul class="checklist">
            <li>Gmail: search <em>from:mk@ OR from:(mksmith) is:unread</em></li>
            <li>Sort oldest first — answer in order, don't skip around</li>
            <li>Flag anything that needs a decision from Caroline Butler (CB)</li>
            <li>Archive or label each thread once handled</li>
            <li>Log any open deliverables in the master tracker</li>
          </ul>
          <div class="task-meta-row">
            <div><span class="label">Owner</span><span class="value">Aaron C. Norris</span></div>
            <div><span class="label">Tool</span><span class="value">Gmail</span></div>
            <div><span class="label">Est. Time</span><span class="value">30–45 minutes</span></div>
          </div>
        </div>

        <!-- TASK 2 -->
        <div class="task-card amber">
          <div class="task-header">
            <div class="task-title"><span class="num">02.</span>Introduce MK to Mel via Email</div>
            <span class="task-pill amber">Draft Ready</span>
          </div>
          <div class="task-body">
            <p>Send a warm, direct intro so Mel and MK can start working together without Aaron acting as the middleman. Keep it short. One paragraph of context, then clear next steps.</p>
          </div>

          <div class="email-draft">
            <div class="email-header">
              <b>To:</b><span>MK Smith; Mel</span>
              <b>From:</b><span>Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</span>
              <b>Subject:</b><span>Intro — MK Smith (Marketing) &amp; Mel</span>
            </div>
            <div class="email-body">
              <p class="no-indent">MK, Mel —</p>
              <p>I wanted to put the two of you in touch directly so you can move faster without me in the middle. Quick intros:</p>
              <ul>
                <li><b>MK Smith</b> — handles marketing for Norris Utilities&reg;. Brand work, campaign assets, content calendar, outbound pieces.</li>
                <li><b>Mel</b> — I'll let Mel share the current project scope, but Mel is someone I trust and want MK coordinating with going forward.</li>
              </ul>
              <p>From here, go ahead and set up a short working call. MK — please send Mel a brief on what you're thinking so Mel can come prepared. Copy me if you need a decision, otherwise just run with it.</p>
              <p>Sincerely,</p>
              <p class="no-indent">Aaron C. Norris</p>
            </div>
            <div class="email-sig">
              <b>Aaron C. Norris</b><br>
              Founder &amp; CEO, Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </div>
          </div>

          <ul class="checklist">
            <li>Confirm Mel's correct email address before sending</li>
            <li>Confirm project scope MK should brief Mel on</li>
            <li>CC Caroline Butler (CB) if admin follow-through is needed</li>
            <li>Send from acnorris@norrisutilities.com (not personal)</li>
          </ul>
          <div class="task-meta-row">
            <div><span class="label">Owner</span><span class="value">Aaron C. Norris</span></div>
            <div><span class="label">Tool</span><span class="value">Gmail — indented paragraph style</span></div>
            <div><span class="label">Est. Time</span><span class="value">5 minutes</span></div>
          </div>
        </div>

        <!-- TASK 3 -->
        <div class="task-card green">
          <div class="task-header">
            <div class="task-title"><span class="num">03.</span>Process MK Payment</div>
            <span class="task-pill green">Pay This Week</span>
          </div>
          <div class="task-body">
            <p>Close out the open payment to MK for marketing work completed. Pull the most recent invoice, verify against agreed scope, send payment, and mark paid in the tracker so the thread can be closed.</p>
          </div>
          <ul class="checklist">
            <li>Locate MK's most recent invoice (Gmail + any attachments folder)</li>
            <li>Verify hours / deliverables match the scope MK was engaged for</li>
            <li>Confirm payment method on file (check, ACH, or Zelle)</li>
            <li>Send payment and reply to MK with confirmation + date</li>
            <li>Mark <em>MK Marketing — [invoice #]</em> as PAID in the master tracker</li>
            <li>File the invoice PDF in the Norris Utilities bookkeeping folder</li>
          </ul>
          <div class="task-meta-row">
            <div><span class="label">Owner</span><span class="value">Aaron C. Norris</span></div>
            <div><span class="label">Tool</span><span class="value">Bank / QuickBooks / Tracker</span></div>
            <div><span class="label">Est. Time</span><span class="value">15 minutes</span></div>
          </div>
        </div>

      </div>

      <!-- NEXT STEPS -->
      <div class="next-steps">
        <h3>Recommended Sequence</h3>
        <ol>
          <li>Send the intro email to MK and Mel first — it's a 5-minute unblock that lets them start moving while the rest gets handled.</li>
          <li>Process MK's payment next — don't let a paid contractor wait on an invoice while you reply to email.</li>
          <li>Clear the MK email backlog last, in a single focused sit-down. Reply, schedule, or close each thread.</li>
          <li>Update the master tracker for any open deliverables uncovered during the backlog review.</li>
        </ol>
      </div>

      <h2 class="nu-section-title">Notes <span>for the File</span></h2>
      <div class="nu-section-underline"></div>

      <div class="task-card" style="border-top-color: var(--nu-cyan);">
        <div class="task-body">
          <p><strong>Context:</strong> MK Smith is a marketing contractor for Norris Utilities&reg;. This work is distinct from the core sales function — it generates income for MK but is always secondary to Norris Utilities operations.</p>
          <p><strong>Tone for all MK replies:</strong> Direct, warm, and decisive. Give MK a clear answer or a clear next step — never leave a thread hanging. If a decision isn't ready yet, say when it will be.</p>
          <p><strong>If Mel's email address is not on file:</strong> Ask MK to confirm it before sending the intro. Do not guess.</p>
          <p><strong>Source:</strong> Captured from reMarkable action list on 2026-04-21. Parent item: "Catch up on MK emails including intro to Mel via email, payment."</p>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment<span class="reg">&reg;</span></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities<span style="font-size:0.7em;vertical-align:super">&reg;</span>, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-fineprint">
      Internal action brief — generated from reMarkable capture, 2026-04-21
    </div>
  </footer>

</body>
</html>