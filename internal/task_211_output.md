<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Modify &amp; Reship Bucket Cover | Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-alert-amber: #F59E0B;
      --nu-success-green: #0B8F4E;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute; inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.6;
    }
    .nu-header::after {
      content: '';
      position: absolute; top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px; height: 70px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }

    /* Ghost phoenix watermark on header */
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ STATUS BANNER ══ */
    .status-banner {
      background: linear-gradient(90deg, #FEF3C7 0%, #FFFBEB 100%);
      border-left: 6px solid var(--nu-alert-amber);
      padding: 18px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }
    .status-banner-left {
      display: flex;
      align-items: center;
      gap: 14px;
      font-weight: 700;
      color: #92400E;
      font-size: 1rem;
    }
    .status-dot {
      width: 12px; height: 12px;
      background: var(--nu-alert-amber);
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.2);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.2); }
      50% { box-shadow: 0 0 0 8px rgba(245, 158, 11, 0.05); }
    }
    .status-meta {
      font-size: 0.85rem;
      color: #78350F;
      font-weight: 400;
    }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 300px; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.02) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* ══ PAGE TITLE BLOCK ══ */
    .page-title-block {
      margin-bottom: 40px;
      padding-bottom: 28px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .breadcrumb {
      font-size: 0.82rem;
      color: #6B7280;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 14px;
    }
    .breadcrumb span.sep { color: var(--nu-cyan); margin: 0 8px; }
    h1.page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    h1.page-title .first-word { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: #6B7280;
      font-weight: 400;
    }

    /* ══ META GRID ══ */
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 40px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .meta-cell {
      background: var(--nu-white);
      padding: 20px 22px;
    }
    .meta-label {
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 6px;
    }
    .meta-value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .meta-value.small { font-size: 0.88rem; font-weight: 400; color: var(--nu-body-text); }

    /* ══ SECTION ══ */
    .section {
      margin-bottom: 44px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-title .first-word { color: var(--nu-blue); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    .section-body p { margin-bottom: 14px; }
    .section-body p:last-child { margin-bottom: 0; }

    /* ══ CARDS ══ */
    .card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 16px;
    }
    .card.accent-blue { border-left: 5px solid var(--nu-blue); }
    .card.accent-cyan { border-left: 5px solid var(--nu-cyan); }
    .card.accent-amber { border-left: 5px solid var(--nu-alert-amber); }
    .card.accent-red { border-left: 5px solid var(--nu-alert-red); }
    .card.accent-green { border-left: 5px solid var(--nu-success-green); }

    .card-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .card-title .icon {
      display: inline-block;
      margin-right: 8px;
    }

    /* ══ STEPS (Chevron badges) ══ */
    .steps-list {
      list-style: none;
      counter-reset: step-counter;
      margin: 10px 0 0;
    }
    .steps-list li {
      counter-increment: step-counter;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 28px 16px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding-left: 56px;
    }
    .steps-list li::before {
      content: counter(step-counter);
      position: absolute;
      left: 22px; top: 50%;
      transform: translateY(-50%);
      width: 26px; height: 26px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .step-text {
      font-weight: 400;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .step-text strong { font-weight: 700; color: var(--nu-cyan); }

    /* ══ SIZE TABLE ══ */
    .size-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 0.92rem;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .size-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .size-table th {
      padding: 12px 16px;
      text-align: left;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .size-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .size-table tr:last-child td { border-bottom: none; }
    .size-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .size-table .sku { font-weight: 900; color: var(--nu-blue); font-family: 'Courier New', monospace; font-size: 0.88rem; }
    .size-table .highlight-row td {
      background: #FEF3C7 !important;
      font-weight: 700;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
    }
    .checklist li {
      padding: 12px 0 12px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li.done { color: #6B7280; text-decoration: line-through; }
    .checklist li.done::before {
      background: var(--nu-success-green);
      border-color: var(--nu-success-green);
    }
    .checklist li.done::after {
      content: '';
      position: absolute;
      left: 7px; top: 17px;
      width: 6px; height: 11px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%);
      border: 1px solid #FCD34D;
      border-radius: 8px;
      padding: 20px 24px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
      margin: 16px 0;
    }
    .callout-icon {
      flex-shrink: 0;
      width: 28px; height: 28px;
      background: var(--nu-alert-amber);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .callout-body { font-size: 0.95rem; color: #78350F; line-height: 1.55; }
    .callout-body strong { color: #78350F; font-weight: 900; }

    /* ══ INFO GRID ══ */
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-top: 14px;
    }

    /* ══ BUTTONS ══ */
    .btn-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 24px;
    }
    .btn-primary, .btn-secondary {
      display: inline-block;
      padding: 12px 26px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      border: 2px solid var(--nu-blue);
    }
    .btn-primary { background: var(--nu-blue); color: var(--nu-white); }
    .btn-primary:hover { background: #0000CC; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,255,0.3); }
    .btn-secondary { background: transparent; color: var(--nu-blue); }
    .btn-secondary:hover { background: var(--nu-blue); color: var(--nu-white); }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px; height: 2px;
      background: var(--nu-cyan);
      margin: 18px auto;
      opacity: 0.5;
    }
    .nu-footer-legal {
      font-size: 0.82rem;
      color: rgba(255,255,255,0.5);
      margin-top: 8px;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 30px 20px 50px; }
      h1.page-title { font-size: 1.7rem; }
      .steps-list li { clip-path: none; border-radius: 8px; padding-left: 56px; }
      .section-title { font-size: 1.25rem; }
      .status-banner { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .card, .size-table { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .btn-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- ══ HEADER ══ -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- ══ CHEVRON TRANSITION ══ -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- ══ STATUS BANNER ══ -->
  <div class="status-banner">
    <div class="status-banner-left">
      <span class="status-dot"></span>
      OPEN ACTION ITEM — Customer Awaiting Resolution
    </div>
    <div class="status-meta">
      Source: reMarkable Capture &nbsp;•&nbsp; Logged: 2026-04-16 &nbsp;•&nbsp; Owner: Aaron C. Norris
    </div>
  </div>

  <!-- ══ MAIN CONTENT ══ -->
  <main class="nu-content-area">
    <div class="container">

      <!-- PAGE TITLE -->
      <div class="page-title-block">
        <div class="breadcrumb">Internal <span class="sep">›</span> Operations <span class="sep">›</span> FlexPro Armor <span class="sep">›</span> Action Item</div>
        <h1 class="page-title"><span class="first-word">Modify</span> &amp; Reship Bucket Cover — Proper Sizing</h1>
        <div class="page-subtitle">reMarkable action item captured from Aaron's handwritten notes. A FlexPro Armor bucket cover that has already shipped to the customer requires rework for a correct size fit, followed by return shipment.</div>
      </div>

      <!-- META GRID -->
      <div class="meta-grid">
        <div class="meta-cell">
          <div class="meta-label">Action Type</div>
          <div class="meta-value">Rework / Reship</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Product Line</div>
          <div class="meta-value">FlexPro Armor</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Priority</div>
          <div class="meta-value" style="color: var(--nu-alert-amber);">High — Customer Waiting</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Owner</div>
          <div class="meta-value">Aaron C. Norris</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Source</div>
          <div class="meta-value small">reMarkable notebook capture</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Logged</div>
          <div class="meta-value small">April 16, 2026</div>
        </div>
      </div>

      <!-- WHAT HAPPENED -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">What</span> <span class="rest">Happened</span></h2>
        <div class="section-body">
          <div class="card accent-amber">
            <p>A FlexPro Armor bucket cover shipped to a customer does not fit the customer's bucket correctly. Rather than replace the unit outright, the action captured on reMarkable is to <strong>modify the shipped cover</strong> (rework the shipped unit to match the actual bucket dimensions) and then <strong>ship it back</strong> to the customer for proper size fit.</p>
            <p style="margin-top: 12px;">This is the fastest path to customer resolution: it avoids a full re-cut from raw material, preserves the cover already in the customer's hands, and keeps us inside the handmade-in-USA promise without building a second unit from scratch.</p>
          </div>
        </div>
      </div>

      <!-- WHY THIS MATTERS -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Why</span> <span class="rest">This Matters</span></h2>
        <div class="info-grid">
          <div class="card accent-blue">
            <div class="card-title">Customer Confidence</div>
            <p>A size-mismatch out of the gate is the first thing a crew notices. Fixing it quickly — and without charging a second unit — reinforces the "handmade, fitted right" positioning that FlexPro Armor was built on.</p>
          </div>
          <div class="card accent-cyan">
            <div class="card-title">Margin Protection</div>
            <p>FlexPro Armor runs at a 50% margin. Rebuilding a cover from raw material cuts that margin in half on this ticket. Modifying the shipped unit keeps the account profitable and turns a problem into a trust-building moment.</p>
          </div>
          <div class="card accent-green">
            <div class="card-title">Product Line Feedback</div>
            <p>Any field-sizing mismatch is a data point for the catalog. If the customer's bucket falls between our two stocked sizes (NU-BC-2834 and NU-BC-2851), we want that captured so future quotes ask the right size questions up front.</p>
          </div>
        </div>
      </div>

      <!-- SIZE REFERENCE -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Size</span> <span class="rest">Reference — FlexPro Armor Bucket Covers</span></h2>
        <p style="margin-bottom: 10px;">Confirm which SKU shipped and what dimension actually needs to be reached. Competitor size translation is listed below to avoid miscommunication during the customer call.</p>
        <div style="overflow-x: auto;">
          <table class="size-table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Configuration</th>
                <th>Nominal Size</th>
                <th>Competitor Equivalent</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="sku">NU-BC-2851</td>
                <td>2-Man Cover</td>
                <td>28" × 51"</td>
                <td>Their "24 × 48"</td>
                <td>Standard 2-man bucket</td>
              </tr>
              <tr>
                <td class="sku">NU-BC-2834</td>
                <td>1.5-Man Cover</td>
                <td>28" × 34"</td>
                <td>Their "24 × 34"</td>
                <td>Compact 1.5-man bucket</td>
              </tr>
              <tr>
                <td class="sku">NU-BC-2851-C</td>
                <td>2-Man Combo</td>
                <td>28" × 51"</td>
                <td>Their "24 × 48" combo</td>
                <td>2-man bucket + liner set</td>
              </tr>
              <tr>
                <td class="sku">NU-BC-2834-C</td>
                <td>1.5-Man Combo</td>
                <td>28" × 34"</td>
                <td>Their "24 × 34" combo</td>
                <td>1.5-man bucket + liner set</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="callout" style="margin-top: 20px;">
          <div class="callout-icon">!</div>
          <div class="callout-body">
            <strong>Before cutting anything:</strong> get the customer's exact internal bucket dimensions (length × width × depth) in writing or via photo with a tape measure visible. A single fresh measurement prevents a second round-trip.
          </div>
        </div>
      </div>

      <!-- STEPS -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Execution</span> <span class="rest">Steps</span></h2>
        <ol class="steps-list">
          <li>
            <span class="step-text"><strong>Confirm the ticket.</strong> Pull the original order record — SKU shipped, tracking number, ship date, customer contact, and any photos submitted with the mismatch complaint.</span>
          </li>
          <li>
            <span class="step-text"><strong>Call the customer.</strong> Apologize, own it, and request exact interior dimensions of the bucket (L × W × D) plus a photo with a tape measure visible. Confirm the bucket has not been modified after original measurement.</span>
          </li>
          <li>
            <span class="step-text"><strong>Arrange return of the shipped cover.</strong> Email a prepaid return label to the customer. Note the return tracking number on the work order.</span>
          </li>
          <li>
            <span class="step-text"><strong>Receive &amp; inspect.</strong> When the cover arrives, log it in, inspect for any field damage, and tag it with the work order number before it hits the rework bench.</span>
          </li>
          <li>
            <span class="step-text"><strong>Modify to the confirmed dimensions.</strong> Rework the shipped cover — not a new cut from raw material. Document the before/after measurements on the work order so this change is traceable.</span>
          </li>
          <li>
            <span class="step-text"><strong>QC check.</strong> Re-measure the modified cover against the confirmed bucket dimensions. Take photos. No unit ships back out until the QC line is signed.</span>
          </li>
          <li>
            <span class="step-text"><strong>Reship to customer.</strong> Use Ben's shipping formula for any billable freight: <code style="background:#2a2a5e;padding:2px 6px;border-radius:3px;">CustomerCost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)</code>. For a goodwill rework like this, cover the outbound freight.</span>
          </li>
          <li>
            <span class="step-text"><strong>Follow up in 72 hours.</strong> After delivery, call the customer to confirm fit on the actual bucket. Capture any remaining issues immediately.</span>
          </li>
          <li>
            <span class="step-text"><strong>Close the loop internally.</strong> Update the order record, flag the account as "sized — verified," and log this incident in the FlexPro Armor field-fit log so we can spot patterns.</span>
          </li>
        </ol>
      </div>

      <!-- CHECKLIST -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Completion</span> <span class="rest">Checklist</span></h2>
        <div class="card">
          <ul class="checklist">
            <li>Original order record pulled and reviewed</li>
            <li>Customer called; exact bucket dimensions captured in writing</li>
            <li>Photo of bucket with tape measure received</li>
            <li>Prepaid return label sent; return tracking logged</li>
            <li>Shipped cover received, inspected, tagged with work order</li>
            <li>Rework performed; before/after measurements documented</li>
            <li>QC check signed and photos taken</li>
            <li>Cover reshipped to customer; outbound tracking sent</li>
            <li>72-hour delivery follow-up call completed</li>
            <li>Order record updated; account flagged "sized — verified"</li>
            <li>Incident logged in FlexPro Armor field-fit log</li>
          </ul>
        </div>
      </div>

      <!-- CUSTOMER COMMS -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Customer</span> <span class="rest">Communication — Voice Notes</span></h2>
        <div class="card accent-blue">
          <div class="card-title">Opening the call</div>
          <p>Lead with ownership, not apology-stacking. Something like: "Name — we need to make this right. I'd like to get exact inside dimensions of your bucket today, we'll send a prepaid label for the cover we shipped, modify it to fit your bucket exactly, and get it back to you. No charge for the freight either direction."</p>
        </div>
        <div class="card accent-cyan">
          <div class="card-title">Why modify instead of re-cut</div>
          <p>If asked: "Every FlexPro Armor cover is made here in the States by hand. Modifying the one you already have is faster and preserves the fabric run it was cut from. You're not getting a lesser unit — you're getting the same cover, fitted to your bucket."</p>
        </div>
        <div class="card accent-green">
          <div class="card-title">Closing the call</div>
          <p>"I'll text you the return label inside the hour. Once I have the cover back and modified, you'll have it on the truck inside [X] business days. I'll call you 72 hours after delivery to confirm fit myself."</p>
        </div>
      </div>

      <!-- NOTES -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Internal</span> <span class="rest">Notes</span></h2>
        <div class="card accent-red">
          <div class="card-title">Do not</div>
          <ul style="padding-left: 20px; margin-top: 8px;">
            <li style="margin-bottom: 6px;">Do not add ® to FlexPro Armor in any customer communication — it is not a registered trademark.</li>
            <li style="margin-bottom: 6px;">Do not call the product "FlexPro Armor Guard" — the correct name is FlexPro Armor only.</li>
            <li style="margin-bottom: 6px;">Do not bill the customer for the rework freight either direction on this ticket — it is a fit issue we are absorbing.</li>
            <li>Do not ship the reworked cover until QC sign-off with photo is on file.</li>
          </ul>
        </div>
        <div class="card accent-blue" style="margin-top: 14px;">
          <div class="card-title">Pattern watch</div>
          <p>If this is the second size-mismatch ticket inside a 30-day window, flag it for a short review with the shop: are we asking the right sizing questions at quote? Is there a customer-facing bucket-measurement sheet we should be sending before any FlexPro Armor order ships?</p>
        </div>
      </div>

      <!-- ACTIONS -->
      <div class="btn-row">
        <a href="tel:2055001343" class="btn-primary">Call Aaron — 205-500-1343</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=FlexPro%20Armor%20Rework%20%E2%80%94%20Status%20Update" class="btn-secondary">Email Status Update</a>
      </div>

    </div>
  </main>

  <!-- ══ FOOTER ══ -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong style="color: var(--nu-white); font-weight: 900;">Aaron C. Norris</strong>, Founder &amp; CEO<br>
      Norris Utilities®, LLC &nbsp;|&nbsp; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-legal">
      Internal Operations Document &nbsp;•&nbsp; FlexPro Armor Rework Ticket &nbsp;•&nbsp; Generated 2026-04-16
    </div>
  </footer>

</body>
</html>