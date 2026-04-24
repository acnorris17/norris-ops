<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: H2O Waterproofing Call — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-success: #00A86B;
      --nu-warning: #E89B00;
      --nu-danger: #D32F2F;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
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
      background: var(--nu-light-gray);
      padding: 50px 30px 70px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65vw; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* PAGE TITLE BLOCK */
    .nu-action-banner {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 32px 36px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border-left: 6px solid var(--nu-blue);
      margin-bottom: 28px;
      position: relative;
      overflow: hidden;
    }
    .nu-action-banner::after {
      content: '';
      position: absolute;
      top: -40px; right: -40px;
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(6,208,255,0.08) 0%, transparent 70%);
      border-radius: 50%;
    }
    .nu-action-tag {
      display: inline-block;
      background: linear-gradient(135deg, var(--nu-blue), #0033CC);
      color: var(--nu-white);
      padding: 5px 14px;
      border-radius: 4px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .nu-action-tag.priority {
      background: linear-gradient(135deg, var(--nu-warning), #C97700);
      margin-left: 8px;
    }
    .nu-action-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 12px;
    }
    .nu-action-title span {
      color: var(--nu-blue);
    }
    .nu-action-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      font-size: 0.9rem;
      color: var(--nu-body-text);
      padding-top: 14px;
      border-top: 1px solid var(--nu-medium-gray);
      margin-top: 18px;
    }
    .nu-action-meta-item strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 36px 0 16px;
    }
    .nu-section-title .first-word { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }

    /* TWO-COLUMN GRID */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 22px;
      margin-bottom: 18px;
    }

    /* CONTACT CARD */
    .nu-contact-card {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 4px 16px rgba(0,0,51,0.25);
    }
    .nu-contact-label {
      color: var(--nu-cyan);
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-contact-name {
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 6px;
    }
    .nu-contact-detail {
      font-size: 0.95rem;
      line-height: 1.9;
      color: rgba(255,255,255,0.9);
    }
    .nu-contact-detail a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-contact-detail a:hover { text-decoration: underline; }
    .nu-call-btn {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 12px 24px;
      border-radius: 6px;
      font-weight: 900;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 0.85rem;
      text-decoration: none;
      margin-top: 14px;
      transition: all 0.2s ease;
    }
    .nu-call-btn:hover {
      background: var(--nu-white);
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(6,208,255,0.4);
    }

    /* CONFIRMATION CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 16px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist .check-box {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.95rem;
      margin-top: 2px;
    }
    .nu-checklist .check-content { flex: 1; }
    .nu-checklist .check-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .nu-checklist .check-desc {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* CALL SCRIPT */
    .nu-script {
      background: linear-gradient(180deg, #FAFAFC 0%, var(--nu-white) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 26px;
      border-radius: 0 6px 6px 0;
      font-style: italic;
      color: var(--nu-dark-text);
      line-height: 1.7;
      margin: 14px 0;
      font-size: 0.98rem;
    }
    .nu-script-label {
      font-style: normal;
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      display: block;
      margin-bottom: 10px;
    }

    /* CHEVRON BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 22px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      width: 30px;
      height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
      font-size: 0.95rem;
    }

    /* WHY IT MATTERS */
    .nu-why-card {
      background: linear-gradient(135deg, #FFF8E7 0%, #FFFCF3 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 0 6px 6px 0;
    }
    .nu-why-title {
      font-weight: 900;
      color: #8A6F1A;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-why-text {
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      line-height: 1.65;
    }

    /* WRITTEN CONFIRMATION FORM */
    .nu-form-block {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 22px;
      margin-top: 18px;
    }
    .nu-form-row {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 14px;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-form-row:last-child { border-bottom: none; }
    .nu-form-label {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-form-blank {
      color: var(--nu-body-text);
      border-bottom: 1px solid var(--nu-blue);
      min-height: 1.2em;
    }

    /* TIMELINE */
    .nu-timeline {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-timeline li {
      display: flex;
      gap: 18px;
      padding: 14px 0;
      position: relative;
    }
    .nu-timeline li:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 17px;
      top: 44px;
      bottom: -8px;
      width: 2px;
      background: var(--nu-medium-gray);
    }
    .nu-timeline-dot {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      flex-shrink: 0;
      position: relative;
      z-index: 1;
    }
    .nu-timeline-content {
      flex: 1;
      padding-top: 4px;
    }
    .nu-timeline-when {
      font-size: 0.75rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-timeline-action {
      color: var(--nu-dark-text);
      font-size: 0.96rem;
      line-height: 1.5;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
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
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 50px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 14px auto;
      opacity: 0.4;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-action-title { font-size: 1.5rem; }
      .nu-action-banner { padding: 24px 22px; }
      .nu-grid-2 { grid-template-columns: 1fr; }
      .nu-form-row { grid-template-columns: 1fr; gap: 4px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
      .nu-content-area { padding: 30px 16px 50px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-contact-card { box-shadow: none; }
      .nu-call-btn { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
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

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ACTION BANNER -->
      <div class="nu-action-banner">
        <span class="nu-action-tag">Action Item — reMarkable</span>
        <span class="nu-action-tag priority">Priority • Get In Writing</span>
        <h1 class="nu-action-title">Call <span>H2O Waterproofing</span> &mdash; Confirm In Writing</h1>
        <p style="font-size: 1.05rem; color: var(--nu-body-text); max-width: 780px;">
          Place the call. Get every confirmation in writing before any further work proceeds. Verbal-only is not acceptable on this job &mdash; vendor needs to commit on paper or by email.
        </p>
        <div class="nu-action-meta">
          <div class="nu-action-meta-item"><strong>Owner:</strong> Aaron C. Norris</div>
          <div class="nu-action-meta-item"><strong>Captured:</strong> reMarkable note</div>
          <div class="nu-action-meta-item"><strong>Logged:</strong> 2026-04-23</div>
          <div class="nu-action-meta-item"><strong>Channel:</strong> Phone &rarr; Email follow-up</div>
        </div>
      </div>

      <!-- TWO-COLUMN: Contact + Why It Matters -->
      <div class="nu-grid-2">
        <div class="nu-contact-card">
          <div class="nu-contact-label">Vendor on the Call</div>
          <div class="nu-contact-name">H2O Waterproofing</div>
          <div class="nu-contact-detail">
            Service vendor &mdash; waterproofing scope<br>
            Contact name on file: confirm at start of call<br>
            Phone &amp; email: confirm and log during call
          </div>
          <a href="#script" class="nu-call-btn">View Call Script &rarr;</a>
        </div>

        <div class="nu-why-card">
          <div class="nu-why-title">Why This Is Mandatory</div>
          <div class="nu-why-text">
            Verbal commitments evaporate when something goes wrong. Norris Utilities® standard is <strong>get it in writing before money moves or work begins</strong>. Email reply, signed quote, or text thread &mdash; any of those count. A phone call alone does not.
          </div>
        </div>
      </div>

      <!-- WHAT TO CONFIRM -->
      <h2 class="nu-section-title"><span class="first-word">What</span> <span class="rest">To Confirm In Writing</span></h2>
      <div class="nu-card">
        <ul class="nu-checklist">
          <li>
            <div class="check-box">1</div>
            <div class="check-content">
              <div class="check-title">Confirmation of Scope</div>
              <div class="check-desc">Exact work H2O Waterproofing will perform &mdash; surfaces, square footage, materials specified, prep work included, areas explicitly excluded. No assumptions, no &ldquo;we&rsquo;ll figure it out on site.&rdquo;</div>
            </div>
          </li>
          <li>
            <div class="check-box">2</div>
            <div class="check-content">
              <div class="check-title">Confirmation of Price</div>
              <div class="check-desc">Total dollar amount, what is included in the price, what is extra, and whether the price is firm or an estimate. If estimate, what triggers a change order.</div>
            </div>
          </li>
          <li>
            <div class="check-box">3</div>
            <div class="check-content">
              <div class="check-title">Confirmation of Schedule</div>
              <div class="check-desc">Start date, expected duration, and finish date. Note any weather contingencies and how they impact the timeline.</div>
            </div>
          </li>
          <li>
            <div class="check-box">4</div>
            <div class="check-content">
              <div class="check-title">Confirmation of Warranty</div>
              <div class="check-desc">Length of warranty, exactly what it covers, what voids it, and the process for filing a claim. Get the warranty document, not just a verbal promise.</div>
            </div>
          </li>
          <li>
            <div class="check-box">5</div>
            <div class="check-content">
              <div class="check-title">Confirmation of Insurance &amp; Licensing</div>
              <div class="check-desc">Current Certificate of Insurance (COI) listing Norris Utilities, LLC as additional insured if applicable, and a copy of their state contractor license.</div>
            </div>
          </li>
          <li>
            <div class="check-box">6</div>
            <div class="check-content">
              <div class="check-title">Confirmation of Payment Terms</div>
              <div class="check-desc">Deposit required (yes/no, how much), milestone payments, final payment trigger, and accepted payment methods. No payment until written confirmation is received.</div>
            </div>
          </li>
        </ul>
      </div>

      <!-- CALL SCRIPT -->
      <h2 class="nu-section-title" id="script"><span class="first-word">Call</span> <span class="rest">Script &mdash; Open With This</span></h2>
      <div class="nu-card">
        <div class="nu-script">
          <span class="nu-script-label">Opening</span>
          &ldquo;This is Aaron Norris with Norris Utilities. I&rsquo;m following up on the waterproofing job we&rsquo;ve discussed. Before we move forward, I need to get a few things confirmed in writing &mdash; can I send you a quick email after this call so you can reply with everything in one thread?&rdquo;
        </div>
        <div class="nu-script">
          <span class="nu-script-label">The Ask</span>
          &ldquo;I just need a written confirmation of the scope, price, schedule, warranty, and your insurance certificate. Once I have that on email, I&rsquo;m good to move forward. What&rsquo;s the best email address to send to?&rdquo;
        </div>
        <div class="nu-script">
          <span class="nu-script-label">If They Resist</span>
          &ldquo;I appreciate that &mdash; this isn&rsquo;t about distrust, it&rsquo;s how I run every vendor on every project. It protects both of us if something comes up later. A reply email with the details is all I need.&rdquo;
        </div>
        <div class="nu-script">
          <span class="nu-script-label">Closing</span>
          &ldquo;Thank you. I&rsquo;ll send the recap email within the hour &mdash; please reply by close of business so we don&rsquo;t lose any time on the schedule.&rdquo;
        </div>
      </div>

      <!-- CALL FLOW BADGES -->
      <h2 class="nu-section-title"><span class="first-word">Call</span> <span class="rest">Flow &mdash; In Order</span></h2>
      <div class="nu-card" style="background: transparent; border: none; box-shadow: none; padding: 0;">
        <div class="nu-badge"><div class="nu-badge-num">1</div>Verify you&rsquo;re speaking with the decision-maker, not a scheduler</div>
        <div class="nu-badge"><div class="nu-badge-num">2</div>State the purpose &mdash; written confirmation, not a sales conversation</div>
        <div class="nu-badge"><div class="nu-badge-num">3</div>Walk through the six confirmation items above, take notes</div>
        <div class="nu-badge"><div class="nu-badge-num">4</div>Confirm the email address you&rsquo;ll send your recap to</div>
        <div class="nu-badge"><div class="nu-badge-num">5</div>Set a reply deadline &mdash; close of business same day</div>
        <div class="nu-badge"><div class="nu-badge-num">6</div>Send the recap email immediately while details are fresh</div>
      </div>

      <!-- WRITTEN CAPTURE FORM -->
      <h2 class="nu-section-title"><span class="first-word">Capture</span> <span class="rest">Sheet &mdash; Fill During Call</span></h2>
      <div class="nu-card">
        <p style="margin-bottom: 14px; font-size: 0.96rem; color: var(--nu-body-text);">
          Print this section or have it open during the call. Write what they say verbatim &mdash; do not paraphrase.
        </p>
        <div class="nu-form-block">
          <div class="nu-form-row"><div class="nu-form-label">Date &amp; Time of Call</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Person Spoken To</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Their Title / Authority</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Direct Phone</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Direct Email</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Confirmed Scope</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Confirmed Price ($)</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Firm or Estimate</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Start Date</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Finish Date</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Warranty Length</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Warranty Coverage</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">COI Promised By</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Deposit Required</div><div class="nu-form-blank">&nbsp;</div></div>
          <div class="nu-form-row"><div class="nu-form-label">Email Reply Deadline</div><div class="nu-form-blank">&nbsp;</div></div>
        </div>
      </div>

      <!-- POST-CALL TIMELINE -->
      <h2 class="nu-section-title"><span class="first-word">After</span> <span class="rest">The Call &mdash; Same-Day Actions</span></h2>
      <div class="nu-card">
        <ul class="nu-timeline">
          <li>
            <div class="nu-timeline-dot">T+0</div>
            <div class="nu-timeline-content">
              <div class="nu-timeline-when">Within 5 Minutes</div>
              <div class="nu-timeline-action">Save the capture sheet immediately. Photograph your handwritten notes if on paper.</div>
            </div>
          </li>
          <li>
            <div class="nu-timeline-dot">T+1</div>
            <div class="nu-timeline-content">
              <div class="nu-timeline-when">Within 1 Hour</div>
              <div class="nu-timeline-action">Send recap email to H2O Waterproofing. List every confirmed item from the call. Ask for a written reply confirming each point.</div>
            </div>
          </li>
          <li>
            <div class="nu-timeline-dot">T+1d</div>
            <div class="nu-timeline-content">
              <div class="nu-timeline-when">Within 24 Hours</div>
              <div class="nu-timeline-action">If no email reply by close of business: send a follow-up. Two business days with no reply = escalate or pause the engagement.</div>
            </div>
          </li>
          <li>
            <div class="nu-timeline-dot">T+2d</div>
            <div class="nu-timeline-content">
              <div class="nu-timeline-when">Within 2 Business Days</div>
              <div class="nu-timeline-action">Once written confirmation is received, file the email + COI + warranty in the project folder and update the master tracker. Mark this action item complete.</div>
            </div>
          </li>
        </ul>
      </div>

      <!-- BOTTOM LINE -->
      <h2 class="nu-section-title"><span class="first-word">Bottom</span> <span class="rest">Line</span></h2>
      <div class="nu-card" style="background: linear-gradient(135deg, #F0F4FF 0%, #FFFFFF 100%); border-left: 5px solid var(--nu-blue);">
        <p style="font-size: 1.08rem; color: var(--nu-dark-text); line-height: 1.65; margin: 0;">
          <strong>No paper, no progress.</strong> H2O Waterproofing gets the call today. Aaron sends the recap email the same hour. Nothing moves forward &mdash; no deposit, no scheduling, no work &mdash; until written confirmation lands in the inbox. This is how Norris Utilities® protects every job.
        </p>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong style="color: var(--nu-white); font-size: 1rem;">Aaron C. Norris</strong> &mdash; Founder &amp; CEO<br>
      Norris Utilities, LLC | Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &middot;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &middot;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>