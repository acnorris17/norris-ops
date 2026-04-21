<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Southern Co Standards Update — Action Item — Norris Utilities®</title>
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
      --nu-alert-amber: #F59E0B;
      --nu-success-green: #10B981;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }

    .nu-header > * { position: relative; z-index: 2; }

    /* Ghost phoenix watermark on header */
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 480px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 16px;
      fill: var(--nu-white);
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }

    /* ══ CHEVRON TRANSITION ══ */
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

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 0 0 80px;
    }

    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 720px;
      height: 720px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }

    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 20px;
      position: relative;
      z-index: 1;
    }

    /* ══ TITLE BLOCK ══ */
    .action-label {
      display: inline-block;
      background: var(--nu-alert-amber);
      color: var(--nu-white);
      padding: 6px 16px;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }

    .page-title-accent {
      color: #0033cc;
    }

    .page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 720px;
    }

    /* ══ META STRIP ══ */
    .meta-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin: 36px 0 48px;
    }

    .meta-cell {
      background: var(--nu-white);
      padding: 18px 22px;
    }

    .meta-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }

    .meta-value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: #0033cc;
      margin-bottom: 6px;
      margin-top: 40px;
    }

    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 24px;
      border-radius: 2px;
    }

    /* ══ CONTEXT CARD ══ */
    .context-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 24px;
    }

    .context-card p {
      margin-bottom: 14px;
      color: var(--nu-body-text);
    }

    .context-card p:last-child { margin-bottom: 0; }

    .context-card strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ CHEVRON BADGE LIST ══ */
    .badge-list {
      list-style: none;
      margin: 16px 0;
    }

    .badge-list li {
      display: flex;
      align-items: flex-start;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 28px 16px 20px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 16px 50%);
      font-weight: 400;
      font-size: 0.95rem;
      line-height: 1.55;
    }

    .badge-list li strong {
      font-weight: 900;
      color: var(--nu-cyan);
      display: block;
      margin-bottom: 3px;
      letter-spacing: 0.02em;
    }

    .badge-num {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      margin-top: 2px;
    }

    /* ══ TWO-COL GRID ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-top: 16px;
    }

    .info-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }

    .info-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: #0033cc;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }

    .info-card ul {
      list-style: none;
      padding: 0;
    }

    .info-card li {
      padding: 8px 0 8px 20px;
      border-bottom: 1px solid var(--nu-medium-gray);
      position: relative;
      color: var(--nu-body-text);
      font-size: 0.94rem;
    }

    .info-card li:last-child { border-bottom: none; }

    .info-card li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* ══ CONTACT TABLE ══ */
    .contact-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }

    .contact-table thead {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
    }

    .contact-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .contact-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }

    .contact-table tbody tr:last-child td { border-bottom: none; }

    .contact-table tbody tr:hover { background: var(--nu-light-gray); }

    .contact-table td strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ DRAFT EMAIL BLOCK ══ */
    .email-draft {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-cyan);
      border-radius: 8px;
      padding: 28px 32px;
      margin-top: 16px;
      font-family: 'Lato', Georgia, serif;
      color: var(--nu-dark-text);
      line-height: 1.75;
    }

    .email-draft .email-meta {
      font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
      font-size: 0.82rem;
      color: var(--nu-body-text);
      padding-bottom: 14px;
      margin-bottom: 18px;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }

    .email-draft .email-meta div { margin-bottom: 3px; }

    .email-draft .email-meta strong {
      color: #0033cc;
      display: inline-block;
      width: 70px;
    }

    .email-draft p {
      margin-bottom: 14px;
      padding-left: 24px;
    }

    .email-draft .greeting {
      padding-left: 0;
      font-weight: 700;
    }

    .email-draft .sign-off {
      padding-left: 0;
      margin-top: 22px;
      margin-bottom: 4px;
    }

    .email-draft .signature {
      padding-left: 24px;
      font-weight: 700;
    }

    .email-draft ul {
      padding-left: 48px;
      margin-bottom: 14px;
      list-style: none;
    }

    .email-draft ul li {
      padding-left: 16px;
      position: relative;
      margin-bottom: 6px;
    }

    .email-draft ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #0033cc;
      font-weight: 900;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      margin-top: 16px;
    }

    .checklist li {
      padding: 14px 18px 14px 52px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 8px;
      position: relative;
      font-size: 0.96rem;
      color: var(--nu-body-text);
      transition: all 0.2s ease;
    }

    .checklist li:hover {
      border-color: var(--nu-cyan);
      box-shadow: 0 2px 8px rgba(6,208,255,0.15);
    }

    .checklist li::before {
      content: '';
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    .checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ CTA BAR ══ */
    .cta-bar {
      background: linear-gradient(135deg, #0033cc 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin-top: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;
      box-shadow: 0 6px 20px rgba(0,51,204,0.25);
    }

    .cta-bar-text h3 {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 4px;
      letter-spacing: 0.01em;
    }

    .cta-bar-text p {
      font-size: 0.95rem;
      opacity: 0.95;
    }

    .cta-buttons {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .nu-btn {
      display: inline-block;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .nu-btn-white {
      background: var(--nu-white);
      color: #0033cc;
    }

    .nu-btn-white:hover {
      background: var(--nu-navy);
      color: var(--nu-white);
      transform: translateY(-1px);
    }

    .nu-btn-outline {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }

    .nu-btn-outline:hover {
      background: var(--nu-white);
      color: #0033cc;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }

    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
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

    .nu-footer-contact a:hover { text-decoration: underline; }

    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 20px auto;
      opacity: 0.6;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.1rem; }
      .nu-wrap { padding: 40px 22px 12px; }
      .page-title { font-size: 1.85rem; }
      .two-col { grid-template-columns: 1fr; }
      .badge-list li { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .cta-bar { padding: 24px; flex-direction: column; align-items: flex-start; }
      .contact-table th, .contact-table td { padding: 10px 12px; font-size: 0.86rem; }
      .email-draft { padding: 22px; }
      .email-draft p, .email-draft ul { padding-left: 14px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .cta-bar, .checklist li::before { display: none; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>

    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment<sup style="font-size:0.6em;">&reg;</sup></div>
  </header>

  <!-- WHITE ASYMMETRIC CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- TITLE -->
      <div class="action-label">reMarkable Action Item</div>
      <h1 class="page-title">Get <span class="page-title-accent">Southern Company</span> Standards Update</h1>
      <p class="page-subtitle">Obtain the current approved-vendor and product-standards list from Southern Company to confirm where FlexPro Armor, Skylift bucket trucks, Samson Rope, and Bay Shore Systems drill rigs stand on Southern's specs — and what it will take to get added where we are not.</p>

      <!-- META STRIP -->
      <div class="meta-strip">
        <div class="meta-cell">
          <div class="meta-label">Owner</div>
          <div class="meta-value">Aaron C. Norris</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Priority</div>
          <div class="meta-value">High</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Status</div>
          <div class="meta-value">Open — Pending Outreach</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Source</div>
          <div class="meta-value">reMarkable Daily Notes</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Target Completion</div>
          <div class="meta-value">Within 10 Business Days</div>
        </div>
      </div>

      <!-- WHY THIS MATTERS -->
      <h2 class="nu-section-title">Why <span>This Matters</span></h2>
      <div class="section-rule"></div>
      <div class="context-card">
        <p>Southern Company is the parent of <strong>Alabama Power, Georgia Power, Mississippi Power, and Southern Company Gas</strong> — covering the heart of our Southeast territory. Their internal product standards govern what their operating companies are permitted to buy and what contractors working on their lines are required to use.</p>
        <p>Without a current copy of those standards, we are quoting into uncertainty. We need to know: <strong>are our products already approved, are we one step away, or do we need to start a formal submittal?</strong> That answer changes how we price, how we pitch, and where we spend our time this quarter.</p>
        <p>This task is tied to the broader push with Patrick Lavette, Jared Lemoine at Irby, and the contractor base that serves Southern's operating companies.</p>
      </div>

      <!-- WHAT TO REQUEST -->
      <h2 class="nu-section-title">What To <span>Request Specifically</span></h2>
      <div class="section-rule"></div>
      <ul class="badge-list">
        <li>
          <span class="badge-num">1</span>
          <span>
            <strong>Current Approved Vendor / Manufacturer List</strong>
            Most recent revision of the approved vendor list covering bucket trucks, aerial devices, drill rigs, rigging, and PPE adjacent categories.
          </span>
        </li>
        <li>
          <span class="badge-num">2</span>
          <span>
            <strong>Bucket Cover / Liner Specification</strong>
            Any written standard covering bucket covers, liners, or shrouds — dimensions, materials, test requirements. This is the spec FlexPro Armor must map to.
          </span>
        </li>
        <li>
          <span class="badge-num">3</span>
          <span>
            <strong>Rigging & Rope Specification</strong>
            Approved rope types, diameters, and construction for line work and rigging. Confirms where Samson Rope fits.
          </span>
        </li>
        <li>
          <span class="badge-num">4</span>
          <span>
            <strong>Aerial Device & Drill Rig Standards</strong>
            Chassis, boom-height, insulation class, and emissions requirements. Tells us how Skylift and Bay Shore Systems stack up against current specs.
          </span>
        </li>
        <li>
          <span class="badge-num">5</span>
          <span>
            <strong>Submittal Process & Points of Contact</strong>
            The written process for adding a new product or vendor, the form required, and the engineers who sign off. We cannot move without this.
          </span>
        </li>
        <li>
          <span class="badge-num">6</span>
          <span>
            <strong>Revision Date &amp; Change Log</strong>
            Confirm the document revision we receive is current and ask to be added to the distribution list for future updates.
          </span>
        </li>
      </ul>

      <!-- CONTACT PATHS -->
      <h2 class="nu-section-title">Contact <span>Paths</span></h2>
      <div class="section-rule"></div>

      <div class="two-col">
        <div class="info-card">
          <h3>Direct Southern Paths</h3>
          <ul>
            <li>Southern Company Supply Chain / Procurement</li>
            <li>Alabama Power Standards &amp; Materials Engineering</li>
            <li>Georgia Power Distribution Standards</li>
            <li>Mississippi Power Materials Group</li>
          </ul>
        </div>
        <div class="info-card">
          <h3>Relationship Assists</h3>
          <ul>
            <li>Jared Lemoine — Irby Construction (serves Southern ops)</li>
            <li>Patrick Lavette — Renasant Bank (Southern connections)</li>
            <li>Shon Cunningham — Gridco (spec-driven relationships)</li>
            <li>Wayne Norris — 3rd-gen Southeast rolodex, direct intros</li>
          </ul>
        </div>
      </div>

      <table class="contact-table">
        <thead>
          <tr>
            <th>Route</th>
            <th>Who To Ask</th>
            <th>Best Channel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Dealer referral</strong></td>
            <td>Jared Lemoine — Irby Construction</td>
            <td>Phone, then email recap</td>
          </tr>
          <tr>
            <td><strong>Engineering channel</strong></td>
            <td>Alabama Power Standards Engineering</td>
            <td>Email via Irby introduction</td>
          </tr>
          <tr>
            <td><strong>Procurement channel</strong></td>
            <td>Southern Company Supply Chain</td>
            <td>Formal letter + email attachment</td>
          </tr>
          <tr>
            <td><strong>Warm intro</strong></td>
            <td>Patrick Lavette — Renasant Bank</td>
            <td>Phone call, ask for the right name</td>
          </tr>
          <tr>
            <td><strong>Legacy network</strong></td>
            <td>Wayne Norris (Dad)</td>
            <td>In-person — name check</td>
          </tr>
        </tbody>
      </table>

      <!-- DRAFT EMAIL -->
      <h2 class="nu-section-title">Draft <span>Outreach Email</span></h2>
      <div class="section-rule"></div>
      <p style="color: var(--nu-body-text); margin-bottom: 8px;">Ready-to-send email to Jared Lemoine at Irby — the most efficient first move, since Irby works Southern's lines daily and can point us at the right engineer.</p>

      <div class="email-draft">
        <div class="email-meta">
          <div><strong>To:</strong> Jared Lemoine &lt;Irby Construction&gt;</div>
          <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          <div><strong>Subject:</strong> Southern Company Standards — Need Current Copy</div>
        </div>

        <p class="greeting">Jared —</p>

        <p>Quick ask. I am working to confirm where Norris Utilities<sup>&reg;</sup> products currently sit on Southern Company's approved list across the operating companies — Alabama Power, Georgia Power, Mississippi Power, and Southern Company Gas.</p>

        <p>Specifically, I need the most current revision of:</p>

        <ul>
          <li>Approved vendor / manufacturer list covering bucket trucks, aerial devices, drill rigs, and rigging</li>
          <li>Bucket cover or liner specification, if one exists as a written standard</li>
          <li>Approved rope and rigging specification</li>
          <li>The submittal process and engineering point of contact for adding a new product</li>
        </ul>

        <p>If you have a copy on your end, I will take it straight from you. If the cleaner path is an introduction to the right engineer inside Southern, that works just as well — y'all are the ones running their work every day and a warm referral from Irby will move faster than a cold email from me.</p>

        <p>Appreciate it. I will return the favor the first chance I get.</p>

        <p class="sign-off">Sincerely,</p>
        <p class="signature">
          Aaron C. Norris<br>
          Founder &amp; Chief Executive Officer<br>
          Norris Utilities<sup>&reg;</sup>, LLC<br>
          205-500-1343<br>
          acnorris@norrisutilities.com
        </p>
      </div>

      <!-- EXECUTION CHECKLIST -->
      <h2 class="nu-section-title">Execution <span>Checklist</span></h2>
      <div class="section-rule"></div>
      <ul class="checklist">
        <li><strong>Step 1 —</strong> Send draft email above to Jared Lemoine. CC no one on first outreach.</li>
        <li><strong>Step 2 —</strong> Call Patrick Lavette at Renasant for name-check on Southern procurement contact.</li>
        <li><strong>Step 3 —</strong> Ask Dad (Wayne) over coffee whether any of his long-time Southern contacts still work there and are worth a direct call.</li>
        <li><strong>Step 4 —</strong> Once a copy of the standards is received, log the revision date and flag any section where FlexPro Armor, Skylift, Samson Rope, or Bay Shore Systems is already named.</li>
        <li><strong>Step 5 —</strong> Identify gaps — categories where we are not on the list but should be — and open a submittal file per category.</li>
        <li><strong>Step 6 —</strong> Request written confirmation of being added to the distribution list for future revisions, so we are not chasing this again in twelve months.</li>
        <li><strong>Step 7 —</strong> Brief Caroline Butler so the standards document lives in the shared file system with a revision date in the filename.</li>
      </ul>

      <!-- CTA -->
      <div class="cta-bar">
        <div class="cta-bar-text">
          <h3>Ready To Move On This?</h3>
          <p>Send the Irby email today — that is the fastest path to the document.</p>
        </div>
        <div class="cta-buttons">
          <a href="mailto:acnorris@norrisutilities.com?subject=Southern%20Co%20Standards%20-%20Status%20Update" class="nu-btn nu-btn-white">Update Aaron</a>
          <a href="tel:2055001343" class="nu-btn nu-btn-outline">Call 205-500-1343</a>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment&reg;</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities<sup>&reg;</sup>, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      130 Inverness Plaza #210, Birmingham, AL 35242
    </div>
  </footer>

</body>
</html>