<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — H2O Waterproofing Warranty Document Request — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-status-red: #C8102E;
      --nu-status-amber: #F39C12;
      --nu-status-green: #27AE60;
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

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON TRANSITION */
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

    /* CONTENT AREA with ghost phoenix */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      min-height: 60vh;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ACTION BANNER */
    .action-banner {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 32px;
      box-shadow: 0 4px 14px rgba(0,0,51,0.18);
    }
    .action-banner-label {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      padding: 4px 10px;
      border-radius: 3px;
      text-transform: uppercase;
    }
    .action-banner-text {
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0.02em;
    }

    /* SECTION TITLE */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      line-height: 1.2;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-sub {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 36px;
      max-width: 780px;
    }

    h2.sub-head {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-blue);
      letter-spacing: 0.01em;
      margin-top: 8px;
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    h2.sub-head span { color: var(--nu-dark-text); font-weight: 700; }

    /* GRID */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 32px;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    .nu-card-list {
      list-style: none;
      padding: 0;
    }
    .nu-card-list li {
      padding: 8px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      display: flex;
      justify-content: space-between;
      gap: 14px;
      font-size: 0.95rem;
    }
    .nu-card-list li:last-child { border-bottom: none; }
    .nu-card-list .label {
      font-weight: 700;
      color: var(--nu-dark-text);
      flex-shrink: 0;
    }
    .nu-card-list .value {
      text-align: right;
      color: var(--nu-body-text);
    }

    /* PRIORITY PILL */
    .priority-pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 999px;
      font-weight: 900;
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .priority-high { background: var(--nu-status-amber); color: var(--nu-white); }
    .priority-open { background: var(--nu-status-red); color: var(--nu-white); }

    /* WHY IT MATTERS */
    .why-matters {
      background: linear-gradient(90deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 24px 28px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 32px;
    }
    .why-matters p {
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .why-matters p + p { margin-top: 12px; }

    /* STEPS */
    .steps-section { margin-bottom: 36px; }
    .step-item {
      display: flex;
      gap: 18px;
      padding: 18px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .step-item:last-child { border-bottom: none; }
    .step-number {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.05rem;
    }
    .step-body h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step-body p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* QUESTIONS LIST */
    .questions-list {
      list-style: none;
      padding: 0;
    }
    .questions-list li {
      padding: 12px 0 12px 32px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .questions-list li:last-child { border-bottom: none; }
    .questions-list li::before {
      content: '•';
      position: absolute;
      left: 8px;
      top: 10px;
      color: var(--nu-cyan);
      font-size: 1.6rem;
      line-height: 1;
    }
    .questions-list li strong {
      color: var(--nu-blue);
      display: block;
      margin-bottom: 4px;
      font-weight: 900;
    }

    /* DRAFT EMAIL */
    .draft-email {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 26px 28px;
      font-size: 0.96rem;
      color: var(--nu-dark-text);
      line-height: 1.75;
    }
    .draft-email .meta {
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      color: #666;
      border-bottom: 1px solid var(--nu-medium-gray);
      padding-bottom: 10px;
      margin-bottom: 18px;
    }
    .draft-email .meta strong { color: var(--nu-dark-text); }
    .draft-email .body p { margin-bottom: 14px; }
    .draft-email .body .bullet {
      padding-left: 22px;
      position: relative;
      margin-bottom: 6px;
    }
    .draft-email .body .bullet::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .draft-email .sig {
      margin-top: 20px;
      padding-top: 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
      color: #555;
    }

    /* BUTTONS */
    .button-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 24px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 30px;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 14px 30px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* STATUS BAR */
    .status-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 16px 24px;
      border-radius: 6px;
      margin-bottom: 28px;
      font-size: 0.9rem;
      letter-spacing: 0.02em;
      flex-wrap: wrap;
      gap: 10px;
    }
    .status-bar .piece { display: flex; align-items: center; gap: 8px; }
    .status-bar .dot {
      width: 10px; height: 10px;
      border-radius: 50%;
      background: var(--nu-status-amber);
      box-shadow: 0 0 8px var(--nu-status-amber);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
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
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 22px; }
      .grid-2 { grid-template-columns: 1fr; }
      .nu-section-title { font-size: 1.5rem; }
      .action-banner { flex-direction: column; align-items: flex-start; }
      .status-bar { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .why-matters, .draft-email { box-shadow: none; }
      .button-row { display: none; }
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
    <div class="nu-tagline">A Legacy of Commitment&reg;</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="container">

      <!-- ACTION BANNER -->
      <div class="action-banner">
        <span class="action-banner-label">reMarkable Action</span>
        <span class="action-banner-text">Get copy of actual warranty document from H2O Waterproofing</span>
      </div>

      <!-- STATUS BAR -->
      <div class="status-bar">
        <div class="piece"><span class="dot"></span><strong>Status:</strong>&nbsp;Open — Awaiting Document</div>
        <div class="piece"><strong>Captured:</strong>&nbsp;reMarkable notebook</div>
        <div class="piece"><strong>Owner:</strong>&nbsp;Aaron C. Norris</div>
        <div class="piece"><strong>Date:</strong>&nbsp;April 21, 2026</div>
      </div>

      <!-- PAGE TITLE -->
      <h1 class="nu-section-title">Warranty <span>Document Request</span></h1>
      <p class="nu-section-sub">
        Retrieve the actual, written warranty document from H2O Waterproofing so Norris Utilities&reg; has the formal
        terms on file. Verbal assurances and sales-sheet language are not enough — we need the signed document that
        spells out coverage period, what is included, what is excluded, and how a claim is made.
      </p>

      <!-- SUMMARY GRID -->
      <div class="grid-2">
        <div class="nu-card">
          <div class="nu-card-title">Request Summary</div>
          <ul class="nu-card-list">
            <li><span class="label">Vendor:</span><span class="value">H2O Waterproofing</span></li>
            <li><span class="label">Deliverable:</span><span class="value">Full warranty document (PDF)</span></li>
            <li><span class="label">Format:</span><span class="value">Signed / on vendor letterhead</span></li>
            <li><span class="label">Priority:</span><span class="value"><span class="priority-pill priority-high">High</span></span></li>
            <li><span class="label">Source:</span><span class="value">reMarkable action item</span></li>
          </ul>
        </div>
        <div class="nu-card">
          <div class="nu-card-title">Filing Destination</div>
          <ul class="nu-card-list">
            <li><span class="label">Primary folder:</span><span class="value">Vendors / H2O Waterproofing</span></li>
            <li><span class="label">Filename:</span><span class="value">H2O_Warranty_2026.pdf</span></li>
            <li><span class="label">Cross-file to:</span><span class="value">FlexPro Armor dossier</span></li>
            <li><span class="label">Retention:</span><span class="value">Permanent — legal record</span></li>
            <li><span class="label">Visible to:</span><span class="value">Aaron, Caroline Butler</span></li>
          </ul>
        </div>
      </div>

      <!-- WHY IT MATTERS -->
      <h2 class="sub-head">Why This <span>Matters</span></h2>
      <div class="why-matters">
        <p>
          FlexPro Armor bucket covers are a premium, handmade USA product and the warranty posture has to match
          the quality story. When a customer calls about a claim — a seam, a fastener, a coating question — the answer
          cannot be "I remember Aaron saying&hellip;" It has to be the document.
        </p>
        <p>
          Getting the actual warranty in writing also lets us restate it in our own marketing and quoting language
          without guessing. That protects Norris Utilities&reg;, protects the customer, and keeps H2O Waterproofing
          on the same page with us.
        </p>
      </div>

      <!-- STEPS -->
      <h2 class="sub-head">Steps to <span>Close This Out</span></h2>
      <div class="steps-section">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-body">
            <h3>Email H2O Waterproofing directly</h3>
            <p>Use the draft below. Keep it short, specific, and written in Aaron's voice. Request the current warranty
               document that governs the product Norris Utilities&reg; is sourcing — PDF on letterhead preferred.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-body">
            <h3>Verify what's received</h3>
            <p>When the document arrives, confirm it is on H2O Waterproofing letterhead, is dated, lists the product
               or material it covers, and includes the length of coverage. If any of those are missing, request a
               revised copy before filing.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-body">
            <h3>File the document</h3>
            <p>Save as <em>H2O_Warranty_2026.pdf</em> in Vendors / H2O Waterproofing. Add a cross-link inside the FlexPro Armor
               dossier so anyone selling or quoting can pull it quickly.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-body">
            <h3>Brief Caroline Butler</h3>
            <p>Once filed, send Caroline a one-line note so she can answer warranty questions from customers without
               needing to ping Aaron. Note the file path and the coverage summary.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">5</div>
          <div class="step-body">
            <h3>Mark the reMarkable task closed</h3>
            <p>Strike the item off the reMarkable action list and log the close-out in the master tracker. Keep the
               timeline with dates so the audit trail stays clean.</p>
          </div>
        </div>
      </div>

      <!-- QUESTIONS TO COVER -->
      <h2 class="sub-head">What the Document <span>Must Answer</span></h2>
      <ul class="questions-list">
        <li><strong>Coverage period</strong>How long does the warranty run from the date of purchase or install?</li>
        <li><strong>What is covered</strong>Material defects, workmanship, coating failure, adhesion — name each one explicitly.</li>
        <li><strong>What is excluded</strong>Normal wear, UV exposure limits, chemical exposure, improper cleaning, third-party modifications.</li>
        <li><strong>Claims process</strong>Who the customer contacts, what documentation is required, how long H2O Waterproofing has to respond.</li>
        <li><strong>Remedy</strong>Repair, replacement, credit — and whether shipping or labor is covered.</li>
        <li><strong>Transferability</strong>Does the warranty transfer to a second owner or stay with the original purchaser?</li>
        <li><strong>Governing law &amp; venue</strong>Useful if a dispute ever escalates — document which state's law applies.</li>
      </ul>

      <!-- DRAFT EMAIL -->
      <h2 class="sub-head" style="margin-top:40px;">Draft <span>Email</span></h2>
      <div class="draft-email">
        <div class="meta">
          <div><strong>To:</strong> H2O Waterproofing — primary contact</div>
          <div><strong>From:</strong> acnorris@norrisutilities.com</div>
          <div><strong>Subject:</strong> Request: Current Warranty Document for Norris Utilities File</div>
        </div>
        <div class="body">
          <p>Team &mdash;</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;Following up on the work we're doing together. For our records at Norris Utilities&reg;, I need a copy of the current warranty document that covers the product you're supplying.</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;Please send a PDF on H2O Waterproofing letterhead that clearly states:</p>

          <p class="bullet">Coverage period</p>
          <p class="bullet">What is included and what is excluded</p>
          <p class="bullet">The claims process and the remedy offered</p>
          <p class="bullet">Whether the warranty is transferable</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;I want this on file before any additional orders ship so my team and our customers have a clean reference. If the current document needs a refresh, let me know what timeline you need and I'll work around it.</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;Appreciate the help &mdash; happy to hop on a quick call if it's easier to walk through.</p>

          <p>Sincerely,</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>

          <div class="sig">
            Aaron C. Norris<br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="button-row">
        <a href="mailto:?subject=Request%3A%20Current%20Warranty%20Document%20for%20Norris%20Utilities%20File" class="nu-btn-primary">Send Email Request</a>
        <a href="#" class="nu-btn-secondary" onclick="window.print(); return false;">Print This Brief</a>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment&reg;</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities&reg;, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>