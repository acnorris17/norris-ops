<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MK Catch-Up Emails + Mel Introduction — Norris Utilities®</title>
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

    .nu-phoenix-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.9);
      letter-spacing: 0.05em;
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
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; padding-bottom: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    .page-intro {
      text-align: center;
      margin-bottom: 48px;
    }
    .page-label {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      padding: 6px 18px;
      border-radius: 2px;
      margin-bottom: 18px;
    }
    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .page-title span {
      color: var(--nu-blue);
    }
    .page-subtitle {
      font-size: 1.1rem;
      color: #555;
      max-width: 720px;
      margin: 0 auto;
    }

    /* SECTION */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title .lead {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* STATUS STRIP */
    .status-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 48px;
    }
    .status-card {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 4px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .status-card .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .status-card .value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .status-card .sub {
      font-size: 0.85rem;
      color: #666;
      margin-top: 4px;
    }

    /* EMAIL BLOCK */
    .email-block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 32px;
      overflow: hidden;
    }
    .email-header {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }
    .email-header .seq {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      padding: 4px 12px;
      border-radius: 2px;
    }
    .email-header .title {
      font-weight: 900;
      font-size: 1.1rem;
      flex: 1;
      min-width: 200px;
    }
    .email-header .status-tag {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 2px;
      background: rgba(255,255,255,0.1);
      color: var(--nu-cyan);
      border: 1px solid rgba(6,208,255,0.4);
    }
    .status-tag.priority {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-color: var(--nu-cyan);
    }

    .email-meta {
      background: var(--nu-light-gray);
      padding: 14px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 10px 24px;
      font-size: 0.88rem;
    }
    .email-meta .meta-row {
      display: flex;
      gap: 8px;
    }
    .email-meta .meta-row strong {
      color: var(--nu-blue);
      font-weight: 700;
      min-width: 64px;
      display: inline-block;
    }
    .email-meta .meta-row span {
      color: var(--nu-dark-text);
    }

    .email-body {
      padding: 24px 28px 28px;
    }
    .email-subject {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .email-subject::before {
      content: 'Subject: ';
      color: var(--nu-blue);
      font-weight: 900;
    }
    .email-body p {
      margin-left: 18px;
      margin-bottom: 14px;
      color: var(--nu-body-text);
    }
    .email-body p.no-indent {
      margin-left: 0;
    }
    .email-body ul {
      margin-left: 36px;
      margin-bottom: 14px;
      list-style: none;
    }
    .email-body ul li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 6px;
    }
    .email-body ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .email-signature {
      margin-top: 20px;
      margin-left: 0;
      padding-top: 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      color: #555;
      line-height: 1.6;
    }
    .email-signature .name {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 2px;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px 32px;
      margin-bottom: 32px;
    }
    .checklist h3 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-blue);
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }
    .checklist ol {
      margin-left: 0;
      list-style: none;
      counter-reset: step;
    }
    .checklist ol li {
      counter-increment: step;
      padding-left: 44px;
      margin-bottom: 12px;
      position: relative;
      color: var(--nu-dark-text);
    }
    .checklist ol li::before {
      content: counter(step);
      position: absolute;
      left: 0;
      top: 0;
      width: 30px;
      height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .checklist ol li strong {
      color: var(--nu-blue);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
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
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 20px; }
      .page-title { font-size: 1.9rem; }
      .email-body { padding: 20px; }
      .email-body p, .email-body ul { margin-left: 0; }
      .email-body ul { margin-left: 18px; }
      .checklist { padding: 22px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .email-block { box-shadow: none; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <div class="page-intro">
        <div class="page-label">Action Item · reMarkable</div>
        <h1 class="page-title">MK <span>Catch-Up</span> Emails &amp; <span>Mel</span> Introduction</h1>
        <p class="page-subtitle">
          Re-engagement notes for MK Smith (marketing contractor) and a warm introduction
          connecting MK with Mel — drafted in Aaron's voice and ready to send.
        </p>
      </div>

      <!-- STATUS STRIP -->
      <div class="status-strip">
        <div class="status-card">
          <div class="label">Owner</div>
          <div class="value">Aaron C. Norris</div>
          <div class="sub">Founder &amp; CEO</div>
        </div>
        <div class="status-card">
          <div class="label">Date Captured</div>
          <div class="value">April 22, 2026</div>
          <div class="sub">reMarkable action item</div>
        </div>
        <div class="status-card">
          <div class="label">Emails in Batch</div>
          <div class="value">2 Drafts</div>
          <div class="sub">MK catch-up + Mel intro</div>
        </div>
        <div class="status-card">
          <div class="label">Status</div>
          <div class="value">Ready to Send</div>
          <div class="sub">Awaiting Aaron review</div>
        </div>
      </div>

      <!-- EMAIL 1 — MK CATCH-UP -->
      <div class="email-block">
        <div class="email-header">
          <span class="seq">EMAIL 1 OF 2</span>
          <span class="title">MK Smith — Catch-Up &amp; Reset</span>
          <span class="status-tag">Draft</span>
        </div>
        <div class="email-meta">
          <div class="meta-row"><strong>To:</strong> <span>MK Smith (Marketing Contractor)</span></div>
          <div class="meta-row"><strong>From:</strong> <span>Aaron C. Norris</span></div>
          <div class="meta-row"><strong>CC:</strong> <span>—</span></div>
          <div class="meta-row"><strong>Priority:</strong> <span>Normal</span></div>
        </div>
        <div class="email-body">
          <div class="email-subject">Catching up — quick reset on marketing priorities</div>

          <p class="no-indent">MK —</p>

          <p>It has been longer than it should have been since we traded notes, and that is on me. Between the March shipments, the Skylift order, and the Samson Rope restock, the last few weeks have been heads-down. I wanted to get you caught up and re-aligned on what is next.</p>

          <p>Here is where things stand on our side:</p>

          <ul>
            <li>FlexPro Armor volume is steady — NU-BC-2851 and NU-BC-2834 continue to be the two SKUs pulling the most demand.</li>
            <li>Skylift partnership is active with a six-unit PO in motion.</li>
            <li>Samson Rope distributor relationship is producing consistent repeat orders.</li>
            <li>Bay Shore Systems territory work is warming up in the Southeast.</li>
          </ul>

          <p>What I need from you going forward:</p>

          <ul>
            <li>A refreshed content calendar through the end of Q2 — FlexPro Armor focused, Legacy of Commitment® brand voice.</li>
            <li>Updated one-page product sheets reflecting current pricing and the four active SKUs.</li>
            <li>LinkedIn presence cadence — two posts per week minimum, authored in my voice, sent to me for approval.</li>
            <li>A short debrief on anything you tested in the last 60 days and what the numbers told us.</li>
          </ul>

          <p>I would like to get on a 30-minute call this week to walk through all of it and make sure we are pulling in the same direction. Send me two or three windows that work on your end and I will pick one.</p>

          <p>Also — I am going to introduce you to Mel in a separate thread. Mel is someone I think you should know. More on that shortly.</p>

          <p>Good to be back in touch. Looking forward to the reset.</p>

          <p class="no-indent">Sincerely,</p>

          <div class="email-signature">
            <div class="name">Aaron C. Norris</div>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
      </div>

      <!-- EMAIL 2 — MEL INTRODUCTION -->
      <div class="email-block">
        <div class="email-header">
          <span class="seq">EMAIL 2 OF 2</span>
          <span class="title">Intro — MK Smith &lt;&gt; Mel</span>
          <span class="status-tag priority">Send Second</span>
        </div>
        <div class="email-meta">
          <div class="meta-row"><strong>To:</strong> <span>Mel</span></div>
          <div class="meta-row"><strong>CC:</strong> <span>MK Smith</span></div>
          <div class="meta-row"><strong>From:</strong> <span>Aaron C. Norris</span></div>
          <div class="meta-row"><strong>Priority:</strong> <span>Normal</span></div>
        </div>
        <div class="email-body">
          <div class="email-subject">Intro — MK Smith, our marketing lead at Norris Utilities®</div>

          <p class="no-indent">Mel —</p>

          <p>I want to put you in direct contact with MK Smith, who handles marketing for Norris Utilities®. I have been meaning to make this introduction for a while, and after catching back up with MK today, the timing is right.</p>

          <p>A quick frame on each of you so the conversation starts from the same place:</p>

          <ul>
            <li><strong>MK Smith</strong> — Marketing contractor for Norris Utilities®. Runs our content, brand voice, product sheets, and LinkedIn presence. Knows the FlexPro Armor line, the Samson Rope side, and the Legacy of Commitment® positioning.</li>
            <li><strong>Mel</strong> — Someone whose judgment I trust and whose perspective I think MK will benefit from. I will let you introduce yourself in your own words.</li>
          </ul>

          <p>Why I am connecting the two of you: I think there is natural overlap in how you both think about storytelling, brand, and getting a small company's voice heard in a noisy market. I am not asking for anything specific — just opening the line so you can trade notes if it is useful.</p>

          <p>MK, Mel is copied here. Take it from there whenever works.</p>

          <p>Good to have you both in the same thread.</p>

          <p class="no-indent">Sincerely,</p>

          <div class="email-signature">
            <div class="name">Aaron C. Norris</div>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
      </div>

      <!-- SEND CHECKLIST -->
      <div class="checklist">
        <h3>Send Checklist — Before Hitting "Send"</h3>
        <ol>
          <li><strong>Confirm Mel's full name and email address</strong> before sending Email 2. Placeholder "Mel" must be replaced with the real address.</li>
          <li><strong>Send Email 1 (MK catch-up) first.</strong> Let MK see the reset message before the third-party introduction arrives.</li>
          <li><strong>Wait 10–15 minutes</strong>, then send Email 2 (MK &lt;&gt; Mel intro) so MK is not surprised by a CC.</li>
          <li><strong>Calendar follow-up:</strong> if MK does not propose call windows within 48 hours, nudge once.</li>
          <li><strong>Log both emails</strong> in the master tracker once sent — Sent date + subject line captured.</li>
        </ol>
      </div>

      <h2 class="nu-section-title"><span class="lead">Action</span> <span class="rest">Summary</span></h2>
      <p style="margin-left: 18px; margin-bottom: 12px;">Two emails drafted and ready for Aaron's review. Email 1 re-engages MK Smith on marketing priorities through end of Q2. Email 2 warmly introduces MK to Mel, with Mel as the primary recipient and MK on CC.</p>
      <p style="margin-left: 18px;">Both drafts follow Aaron's voice guide — em-dash greeting, indented paragraphs, bullets with •, "Sincerely," close, full signature block. No filler language, no emojis, no apologies.</p>

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