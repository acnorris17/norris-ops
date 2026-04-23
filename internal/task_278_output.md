<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MK Email Catch-Up & Mel Introduction — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-success: #16a34a;
      --nu-warning: #d97706;
      --nu-danger: #dc2626;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    /* Phoenix watermark */
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 500px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.35);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 30px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    .nu-intro {
      background: linear-gradient(135deg, #f8f9ff 0%, #eff3ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 26px 30px;
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .nu-intro-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-intro-title {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-dark-text);
      line-height: 1.25;
      margin-bottom: 10px;
    }
    .nu-intro-meta {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .nu-intro-meta strong { color: var(--nu-dark-text); }

    /* Section headers */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    .nu-section { margin-bottom: 44px; }

    /* Action cards */
    .nu-action-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .nu-action-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-action-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .nu-action-card.priority-high { border-top: 4px solid var(--nu-danger); }
    .nu-action-card.priority-med  { border-top: 4px solid var(--nu-warning); }
    .nu-action-card.priority-low  { border-top: 4px solid var(--nu-blue); }
    .nu-action-num {
      position: absolute;
      top: 16px; right: 18px;
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-medium-gray);
      line-height: 1;
    }
    .nu-action-tag {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .tag-high { background: #fee2e2; color: var(--nu-danger); }
    .tag-med  { background: #fef3c7; color: var(--nu-warning); }
    .tag-low  { background: #dbeafe; color: var(--nu-blue); }
    .nu-action-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      padding-right: 40px;
      line-height: 1.3;
    }
    .nu-action-desc {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      margin-bottom: 12px;
    }
    .nu-action-meta {
      font-size: 0.82rem;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      color: #6b7280;
    }
    .nu-action-meta strong { color: var(--nu-dark-text); }

    /* Checklist */
    .nu-checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 26px 30px;
    }
    .nu-check-item {
      display: flex;
      align-items: flex-start;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-check-item:last-child { border-bottom: none; }
    .nu-check-box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .nu-check-text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .nu-check-text .sub {
      display: block;
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 3px;
      font-weight: 400;
    }
    .nu-check-text strong { font-weight: 900; }

    /* Email template block */
    .nu-email-block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 30px;
      margin-bottom: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-email-header {
      padding-bottom: 14px;
      margin-bottom: 16px;
      border-bottom: 2px solid var(--nu-blue);
    }
    .nu-email-label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-email-subject {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-dark-text);
    }
    .nu-email-field {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .nu-email-field strong {
      color: var(--nu-dark-text);
      display: inline-block;
      min-width: 55px;
    }
    .nu-email-body {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .nu-email-body p { margin-bottom: 14px; padding-left: 18px; }
    .nu-email-body .greeting { padding-left: 0; font-weight: 700; }
    .nu-email-body .close { padding-left: 0; }
    .nu-email-body .bullet { padding-left: 36px; }
    .nu-email-body .sig {
      padding-left: 0;
      font-style: italic;
      color: var(--nu-body-text);
      margin-top: 8px;
    }

    /* Talking points table */
    .nu-topics-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-topics-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 18px;
      text-align: left;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .nu-topics-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      color: var(--nu-dark-text);
      vertical-align: top;
    }
    .nu-topics-table tr:last-child td { border-bottom: none; }
    .nu-topics-table tr:nth-child(even) td { background: #fafafa; }
    .nu-topics-table .topic-num {
      font-weight: 900;
      color: var(--nu-blue);
      width: 40px;
    }
    .nu-topics-table .topic-name {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 24%;
    }

    /* Footer */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      height: 1px;
      background: rgba(255,255,255,0.15);
      max-width: 400px;
      margin: 18px auto;
    }
    .nu-footer-meta {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.05em;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .nu-header { padding: 45px 22px 65px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.25em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 35px 22px 55px; }
      .nu-intro-title { font-size: 1.35rem; }
      .nu-section-title { font-size: 1.3rem; }
      .nu-topics-table th, .nu-topics-table td { padding: 10px 12px; font-size: 0.85rem; }
      .nu-topics-table .topic-name { width: auto; }
      .nu-action-num { font-size: 1.8rem; }
    }

    @media print {
      body { background: white; }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-action-card, .nu-email-block { box-shadow: none; break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-badge">Internal Action Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- INTRO -->
      <section class="nu-intro">
        <div class="nu-intro-label">reMarkable Action Item</div>
        <h1 class="nu-intro-title">MK Smith Email Catch-Up & Mel Introduction</h1>
        <p class="nu-intro-meta">
          <strong>Owner:</strong> Aaron C. Norris &nbsp;|&nbsp;
          <strong>Captured:</strong> 2026-04-23 &nbsp;|&nbsp;
          <strong>Status:</strong> Open — execute today
        </p>
        <p style="margin-top:10px; font-size:0.95rem;">
          Catch up on the outstanding thread with MK Smith (marketing contractor), send the formal email introduction
          between MK and Mel, and close out the open payment-related items so MK is cleared to move forward on active deliverables.
        </p>
      </section>

      <!-- SECTION: ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Items</span></h2>
        <div class="nu-action-grid">

          <div class="nu-action-card priority-high">
            <div class="nu-action-num">01</div>
            <span class="nu-action-tag tag-high">Do First</span>
            <h3 class="nu-action-title">Review MK's Unread Thread</h3>
            <p class="nu-action-desc">
              Open Gmail, filter <em>from:mk</em>, read every message since last reply. Note open questions,
              outstanding deliverables, and any invoices sent for payment.
            </p>
            <div class="nu-action-meta">
              <strong>Time:</strong> 15 min &nbsp;•&nbsp; <strong>Output:</strong> list of open threads
            </div>
          </div>

          <div class="nu-action-card priority-high">
            <div class="nu-action-num">02</div>
            <span class="nu-action-tag tag-high">Do First</span>
            <h3 class="nu-action-title">Reply to Each Open MK Message</h3>
            <p class="nu-action-desc">
              Respond to every outstanding MK email. Approve, redirect, or defer — no ghosted threads.
              Use Aaron's voice: em-dash greeting, indented paragraphs, "Sincerely," close.
            </p>
            <div class="nu-action-meta">
              <strong>Time:</strong> 30 min &nbsp;•&nbsp; <strong>Output:</strong> zero unread from MK
            </div>
          </div>

          <div class="nu-action-card priority-high">
            <div class="nu-action-num">03</div>
            <span class="nu-action-tag tag-high">Do First</span>
            <h3 class="nu-action-title">Introduce MK to Mel via Email</h3>
            <p class="nu-action-desc">
              Send the formal introduction email (template below). Put MK and Mel on the same thread
              with short context on why they should connect and what comes next.
            </p>
            <div class="nu-action-meta">
              <strong>Time:</strong> 10 min &nbsp;•&nbsp; <strong>Output:</strong> warm handoff sent
            </div>
          </div>

          <div class="nu-action-card priority-med">
            <div class="nu-action-num">04</div>
            <span class="nu-action-tag tag-med">Same Day</span>
            <h3 class="nu-action-title">Confirm Outstanding MK Payment</h3>
            <p class="nu-action-desc">
              Pull MK's most recent invoice. Confirm payment status in QuickBooks. If unpaid and past due,
              pay it today or send payment-date commitment. Do not let money hold up work.
            </p>
            <div class="nu-action-meta">
              <strong>Time:</strong> 15 min &nbsp;•&nbsp; <strong>Output:</strong> invoice paid or scheduled
            </div>
          </div>

          <div class="nu-action-card priority-med">
            <div class="nu-action-num">05</div>
            <span class="nu-action-tag tag-med">Same Day</span>
            <h3 class="nu-action-title">Align on Active Deliverables</h3>
            <p class="nu-action-desc">
              Confirm with MK what is currently in-flight (line card revisions, social posts, collateral).
              Lock each item to a due date so nothing slips through.
            </p>
            <div class="nu-action-meta">
              <strong>Time:</strong> 15 min &nbsp;•&nbsp; <strong>Output:</strong> shared due-date list
            </div>
          </div>

          <div class="nu-action-card priority-low">
            <div class="nu-action-num">06</div>
            <span class="nu-action-tag tag-low">This Week</span>
            <h3 class="nu-action-title">Log Completion in Tracker</h3>
            <p class="nu-action-desc">
              Update master tracker: mark this reMarkable action closed. Log the Mel introduction
              with date and outcome. Archive the reMarkable page.
            </p>
            <div class="nu-action-meta">
              <strong>Time:</strong> 5 min &nbsp;•&nbsp; <strong>Output:</strong> action item closed
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION: INTRO EMAIL TEMPLATE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Intro</span> <span class="rest">Email Template — MK to Mel</span></h2>
        <div class="nu-email-block">
          <div class="nu-email-header">
            <div class="nu-email-label">Ready to Send</div>
            <div class="nu-email-subject">Introduction — MK Smith &amp; Mel</div>
          </div>
          <div class="nu-email-field"><strong>To:</strong> MK Smith &lt;mk@[domain]&gt;</div>
          <div class="nu-email-field"><strong>Cc:</strong> Mel &lt;mel@[domain]&gt;</div>
          <div class="nu-email-field"><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          <div class="nu-email-field"><strong>Subject:</strong> Introduction — MK &amp; Mel</div>

          <div class="nu-email-body">
            <p class="greeting">MK, Mel —</p>

            <p>
              I want the two of y'all connected directly so we can move faster and keep me out
              of the middle of every thread.
            </p>

            <p>
              <strong>MK Smith</strong> runs marketing for Norris Utilities® — line card, social, web,
              and any customer-facing collateral. Sharp, fast, and already knows the brand system cold.
            </p>

            <p>
              <strong>Mel</strong>, I'll let you share your own context, but the short version is I
              think y'all will work well together and there are a few pieces where your worlds overlap.
            </p>

            <p>
              Please take it from here — schedule a 20-minute intro call, swap contact info, and loop
              me in only when you need a decision from me.
            </p>

            <p>Appreciate you both.</p>

            <p class="close">Sincerely,</p>
            <p class="sig">
              Aaron C. Norris<br>
              Founder &amp; CEO | Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION: MK REPLY CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">MK</span> <span class="rest">Catch-Up Checklist</span></h2>
        <div class="nu-checklist">
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Gmail search</strong> — filter <em>from:mk</em> last 30 days
              <span class="sub">Read every message; do not skim subjects only.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Note open questions</strong> — anything waiting on Aaron's call
              <span class="sub">Capture each in a quick list: question, needed decision, deadline.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Reply in Aaron's voice</strong> — em-dash greeting, indented paragraphs
              <span class="sub">No "just", "touch base", "leverage", or "synergy". Bullets use • not -.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Payment audit</strong> — open QuickBooks, confirm MK's last invoice status
              <span class="sub">If unpaid: pay today or send a dated commitment.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Send the Mel introduction</strong> — use template on this page
              <span class="sub">Put both on the same thread, hand the ball off.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Confirm active deliverables</strong> — lock each to a due date
              <span class="sub">Line card revisions, social, web, and any collateral currently in-flight.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Close this reMarkable action</strong> in master tracker
              <span class="sub">Date-stamped note; archive the reMarkable page.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: TOPICS TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Likely</span> <span class="rest">Topics in MK's Backlog</span></h2>
        <table class="nu-topics-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Topic</th>
              <th>Aaron's Decision Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="topic-num">1</td>
              <td class="topic-name">Line Card Revisions</td>
              <td>Approve FlexPro Armor layout updates and any Samson Rope section additions.</td>
            </tr>
            <tr>
              <td class="topic-num">2</td>
              <td class="topic-name">Social Calendar</td>
              <td>Confirm April-May post cadence and which product lines lead each week.</td>
            </tr>
            <tr>
              <td class="topic-num">3</td>
              <td class="topic-name">Outstanding Invoice</td>
              <td>Confirm paid or pay today. Do not let money delay deliverables.</td>
            </tr>
            <tr>
              <td class="topic-num">4</td>
              <td class="topic-name">Mel Introduction</td>
              <td>Send the formal intro email on this page (template ready).</td>
            </tr>
            <tr>
              <td class="topic-num">5</td>
              <td class="topic-name">Brand Asset Questions</td>
              <td>Clarify Phoenix Icon® usage, approved color system, and Lato font rules.</td>
            </tr>
            <tr>
              <td class="topic-num">6</td>
              <td class="topic-name">Web / Ops Portal</td>
              <td>Align on any website or ops.norrisutilities.com content MK is staging.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION: SUCCESS CRITERIA -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Done</span> <span class="rest">Looks Like</span></h2>
        <div class="nu-checklist" style="background: #f0f9ff; border-left: 5px solid var(--nu-blue);">
          <div class="nu-check-item">
            <div class="nu-check-box" style="background: var(--nu-blue); border-color: var(--nu-blue);"></div>
            <div class="nu-check-text"><strong>Zero unread emails</strong> from MK in Aaron's inbox.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box" style="background: var(--nu-blue); border-color: var(--nu-blue);"></div>
            <div class="nu-check-text"><strong>Mel and MK on one email thread</strong>, introduction sent by Aaron, handed off.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box" style="background: var(--nu-blue); border-color: var(--nu-blue);"></div>
            <div class="nu-check-text"><strong>Outstanding MK invoice paid</strong> or scheduled with a specific date.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box" style="background: var(--nu-blue); border-color: var(--nu-blue);"></div>
            <div class="nu-check-text"><strong>Active deliverables list</strong> shared with MK, each with a firm due date.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box" style="background: var(--nu-blue); border-color: var(--nu-blue);"></div>
            <div class="nu-check-text"><strong>reMarkable action closed</strong> in master tracker.</div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-meta">
      Internal Action Brief &nbsp;•&nbsp; Generated 2026-04-23 &nbsp;•&nbsp; Norris Utilities® Autonomous Build Engine
    </div>
  </footer>

</body>
</html>