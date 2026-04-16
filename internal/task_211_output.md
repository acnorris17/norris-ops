<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Modify & Return Bucket Cover for Proper Sizing | Norris Utilities®</title>
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
      --nu-alert-red: #C0392B;
      --nu-warning-amber: #E67E22;
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

    /* ═══ HEADER ═══ */
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* ═══ CHEVRON TRANSITION ═══ */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 60px; display: block; }

    /* ═══ CONTENT AREA ═══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 0;
    }
    .nu-container {
      max-width: 960px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* ═══ STATUS BANNER ═══ */
    .status-banner {
      background: linear-gradient(135deg, var(--nu-warning-amber) 0%, #D35400 100%);
      color: var(--nu-white);
      padding: 20px 28px;
      border-radius: 8px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 20px;
      box-shadow: 0 4px 16px rgba(230, 126, 34, 0.25);
    }
    .status-banner-icon {
      font-size: 2rem;
      font-weight: 900;
      background: rgba(255,255,255,0.2);
      width: 52px; height: 52px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .status-banner-text h2 {
      font-weight: 900;
      font-size: 1.15rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .status-banner-text p {
      font-weight: 400;
      font-size: 0.95rem;
      opacity: 0.95;
    }

    /* ═══ TITLE BLOCK ═══ */
    .action-title-block {
      border-left: 6px solid var(--nu-blue);
      padding: 8px 0 8px 24px;
      margin-bottom: 40px;
    }
    .action-title-eyebrow {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .action-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }
    .action-title .accent { color: var(--nu-blue); }
    .action-subtitle {
      margin-top: 12px;
      font-weight: 400;
      font-size: 1.05rem;
      color: #666;
    }

    /* ═══ META GRID ═══ */
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 40px;
      border: 1px solid var(--nu-medium-gray);
    }
    .meta-cell {
      background: var(--nu-white);
      padding: 18px 20px;
    }
    .meta-label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .meta-value {
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }

    /* ═══ SECTION ═══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ═══ ISSUE CALLOUT ═══ */
    .issue-callout {
      background: linear-gradient(135deg, #FFF4E6 0%, #FFE8CC 100%);
      border-left: 5px solid var(--nu-warning-amber);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 24px;
    }
    .issue-callout p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .issue-callout strong { color: #B4530C; font-weight: 900; }

    /* ═══ STEPS LIST ═══ */
    .steps-list {
      list-style: none;
      counter-reset: step-counter;
      margin: 20px 0;
    }
    .steps-list li {
      counter-increment: step-counter;
      position: relative;
      padding: 20px 20px 20px 76px;
      margin-bottom: 12px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .steps-list li:hover {
      transform: translateX(2px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.08);
    }
    .steps-list li::before {
      content: counter(step-counter);
      position: absolute;
      left: 18px; top: 50%;
      transform: translateY(-50%);
      width: 44px; height: 44px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
    }
    .step-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .step-detail {
      font-size: 0.93rem;
      color: #555;
      line-height: 1.55;
    }

    /* ═══ SIZE REFERENCE TABLE ═══ */
    .size-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      margin: 16px 0;
    }
    .size-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .size-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .size-table td {
      padding: 14px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .size-table tr:nth-child(even) td { background: #FAFAFC; }
    .size-table td strong { color: var(--nu-blue); font-weight: 900; }

    /* ═══ SHIPPING CARD ═══ */
    .ship-card {
      background: linear-gradient(135deg, #F0F4FF 0%, #E8EEFF 100%);
      border: 1px solid #D0DAFF;
      border-radius: 10px;
      padding: 26px;
    }
    .ship-card-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 18px;
      padding-bottom: 14px;
      border-bottom: 2px solid rgba(0,0,255,0.12);
    }
    .ship-card-header .icon {
      width: 42px; height: 42px;
      background: var(--nu-blue);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 900;
      font-size: 1.4rem;
    }
    .ship-card-header h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
    }
    .ship-detail-row {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px dashed rgba(0,0,255,0.1);
    }
    .ship-detail-row:last-child { border-bottom: none; }
    .ship-detail-label {
      font-weight: 900;
      color: var(--nu-blue);
      width: 180px;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      flex-shrink: 0;
    }
    .ship-detail-value {
      font-weight: 400;
      color: var(--nu-dark-text);
      font-size: 0.97rem;
    }

    /* ═══ CONTACTS ROW ═══ */
    .contacts-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
      border-top: 4px solid var(--nu-cyan);
    }
    .contact-role {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .contact-name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .contact-info {
      font-size: 0.88rem;
      color: #555;
      line-height: 1.6;
    }
    .contact-info a {
      color: var(--nu-blue);
      text-decoration: none;
    }
    .contact-info a:hover { text-decoration: underline; }

    /* ═══ CHECKLIST ═══ */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist-item:last-child { border-bottom: none; }
    .checkbox {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-text {
      font-size: 0.97rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }
    .checklist-text strong { color: var(--nu-blue); font-weight: 900; }

    /* ═══ FOOTER ═══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ═══ RESPONSIVE ═══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 30px 20px 50px; }
      .action-title { font-size: 1.6rem; }
      .status-banner { flex-direction: column; text-align: center; }
      .ship-detail-row { flex-direction: column; gap: 4px; }
      .ship-detail-label { width: 100%; }
      .steps-list li { padding: 60px 18px 18px; }
      .steps-list li::before { left: 18px; top: 18px; transform: none; }
      .size-table { font-size: 0.85rem; }
      .size-table th, .size-table td { padding: 10px 8px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .steps-list li, .nu-card, .ship-card, .checklist { box-shadow: none; page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- STATUS BANNER -->
      <div class="status-banner">
        <div class="status-banner-icon">!</div>
        <div class="status-banner-text">
          <h2>Open Action — Customer Fit Adjustment</h2>
          <p>Shipped cover requires modification and return shipment for correct sizing. Captured from reMarkable field notes.</p>
        </div>
      </div>

      <!-- TITLE -->
      <div class="action-title-block">
        <div class="action-title-eyebrow">Internal Action Item · reMarkable Capture</div>
        <h1 class="action-title">Modify the shipped bucket cover and <span class="accent">ship back</span> for proper sizing.</h1>
        <p class="action-subtitle">A customer-shipped FlexPro Armor cover needs in-house rework to match the correct bucket dimensions, then return-shipment to the customer.</p>
      </div>

      <!-- META GRID -->
      <div class="meta-grid">
        <div class="meta-cell">
          <div class="meta-label">Action Type</div>
          <div class="meta-value">Rework & Return</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Product Line</div>
          <div class="meta-value">FlexPro Armor</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Priority</div>
          <div class="meta-value">High — Customer Waiting</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Captured</div>
          <div class="meta-value">April 16, 2026</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Owner</div>
          <div class="meta-value">Aaron C. Norris</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Source</div>
          <div class="meta-value">reMarkable Notebook</div>
        </div>
      </div>

      <!-- SITUATION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Situation</span> <span class="rest">Summary</span></h2>
        <div class="issue-callout">
          <p>A <strong>FlexPro Armor</strong> bucket cover was shipped to the customer, but the sizing does not match the customer's bucket dimensions. The cover must be pulled back, physically modified in-house to the correct SKU spec, inspected, and re-shipped to the customer with tracking. Because FlexPro Armor is handmade in the USA, sizing corrections are done directly on the original unit rather than replaced — preserving the original stitching, hardware, and warranty window.</p>
        </div>
      </section>

      <!-- SIZE REFERENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Confirm</span> <span class="rest">Target SKU & Dimensions</span></h2>
        <p style="margin-bottom: 14px; color: #555;">Before modifying, verify the customer's actual bucket dimensions against the FlexPro Armor SKU matrix. Measure the bucket — never rely on a verbal size or a competitor part number.</p>
        <table class="size-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Configuration</th>
              <th>Cover Dimensions</th>
              <th>Competitor Size Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>NU-BC-2851</strong></td>
              <td>2-Man Bucket Cover</td>
              <td>28" × 51"</td>
              <td>24" × 48"</td>
            </tr>
            <tr>
              <td><strong>NU-BC-2834</strong></td>
              <td>1.5-Man Bucket Cover</td>
              <td>28" × 34"</td>
              <td>24" × 34"</td>
            </tr>
            <tr>
              <td><strong>NU-BC-2851-C</strong></td>
              <td>2-Man Combo (cover + liner)</td>
              <td>28" × 51"</td>
              <td>24" × 48" combo</td>
            </tr>
            <tr>
              <td><strong>NU-BC-2834-C</strong></td>
              <td>1.5-Man Combo (cover + liner)</td>
              <td>28" × 34"</td>
              <td>24" × 34" combo</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- STEP-BY-STEP -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Steps</span></h2>
        <ol class="steps-list">
          <li>
            <div class="step-title">Retrieve the shipped cover from the customer.</div>
            <div class="step-detail">Coordinate a pre-paid return label through the customer's shipping preference. Confirm tracking before cutting the invoice hold.</div>
          </li>
          <li>
            <div class="step-title">Re-measure the customer's actual bucket top-opening dimensions.</div>
            <div class="step-detail">Width × Length to the nearest quarter inch. If the customer cannot measure, schedule a field visit or request photos with a tape measure in frame.</div>
          </li>
          <li>
            <div class="step-title">Identify the correct NU-BC SKU from the table above.</div>
            <div class="step-detail">Translate any competitor sizing quoted by the customer to Norris dimensions before modifying. "24×48" = NU-BC-2851. "24×34" = NU-BC-2834.</div>
          </li>
          <li>
            <div class="step-title">Perform the modification on the returned unit.</div>
            <div class="step-detail">Adjust perimeter panels, re-stitch with the matching thread color, re-seat the hook-and-loop closure, and verify the Phoenix Icon® badge remains properly aligned and unobstructed.</div>
          </li>
          <li>
            <div class="step-title">Run the post-rework QC checklist.</div>
            <div class="step-detail">Flat-lay measurement, seam integrity pull-test, hardware function test, and visual brand inspection. Photograph the finished cover from four angles for the customer record.</div>
          </li>
          <li>
            <div class="step-title">Re-package and re-ship to the customer.</div>
            <div class="step-detail">Use the original packaging if undamaged, otherwise a new Norris-branded shipping carton. Include a short, handwritten note acknowledging the fit correction. Ship the same day rework completes.</div>
          </li>
          <li>
            <div class="step-title">Close the loop — notify the customer and update internal records.</div>
            <div class="step-detail">Email tracking number the moment the label prints. Log SKU, rework notes, and return-ship date in the customer file so future quotes default to the correct size.</div>
          </li>
        </ol>
      </section>

      <!-- SHIPPING -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Return</span> <span class="rest">Shipment Details</span></h2>
        <div class="ship-card">
          <div class="ship-card-header">
            <div class="icon">↻</div>
            <h3>Outbound Shipment — Modified Cover</h3>
          </div>
          <div class="ship-detail-row">
            <div class="ship-detail-label">Ship From</div>
            <div class="ship-detail-value">Norris Utilities®, LLC — Birmingham, AL 35242</div>
          </div>
          <div class="ship-detail-row">
            <div class="ship-detail-label">Carrier</div>
            <div class="ship-detail-value">UPS Ground (default) — upgrade to 2-Day if customer operations are waiting on the unit</div>
          </div>
          <div class="ship-detail-row">
            <div class="ship-detail-label">Shipping Formula</div>
            <div class="ship-detail-value">CustomerCost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0) — Ben's Formula</div>
          </div>
          <div class="ship-detail-row">
            <div class="ship-detail-label">Freight Charge</div>
            <div class="ship-detail-value">Goodwill — no freight billed on fit-correction returns for FlexPro Armor.</div>
          </div>
          <div class="ship-detail-row">
            <div class="ship-detail-label">Insurance</div>
            <div class="ship-detail-value">Insure at full replacement value of the SKU. Require delivery signature.</div>
          </div>
          <div class="ship-detail-row">
            <div class="ship-detail-label">Include In Box</div>
            <div class="ship-detail-value">Modified cover · Packing slip with corrected SKU · Handwritten note · Care & warranty card</div>
          </div>
        </div>
      </section>

      <!-- CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Internal</span> <span class="rest">Responsibilities</span></h2>
        <div class="contacts-row">
          <div class="contact-card">
            <div class="contact-role">Action Owner</div>
            <div class="contact-name">Aaron C. Norris</div>
            <div class="contact-info">
              Founder &amp; CEO<br>
              Approves rework &amp; return schedule<br>
              <a href="tel:2055001343">205-500-1343</a><br>
              <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a>
            </div>
          </div>
          <div class="contact-card">
            <div class="contact-role">Admin &amp; Customer-Facing</div>
            <div class="contact-name">Caroline Butler (CB)</div>
            <div class="contact-info">
              Admin — Tier 1 Trust<br>
              Customer comms reviewed by Aaron<br>
              Coordinates return label &amp; tracking
            </div>
          </div>
          <div class="contact-card">
            <div class="contact-role">Production Partner</div>
            <div class="contact-name">FlexPro Armor — USA Shop</div>
            <div class="contact-info">
              Handmade bucket cover line<br>
              Executes sizing modification<br>
              Returns unit to Norris for QC &amp; ship-out
            </div>
          </div>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Before</span> <span class="rest">Marking This Action Complete</span></h2>
        <div class="checklist">
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Customer bucket dimensions</strong> confirmed in writing (email, text, or photo with tape measure).</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Correct Norris SKU</strong> (NU-BC-2851, NU-BC-2834, or Combo variant) recorded on the customer file.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Modified cover</strong> passes flat-lay measurement and seam pull-test.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Four-angle photos</strong> of finished rework saved to customer file.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Return tracking number</strong> emailed to the customer the day the label prints.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Customer confirmation of fit</strong> received after delivery — close the loop, not just the shipment.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>reMarkable action item</strong> checked off in the originating notebook so it does not re-surface.</div>
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
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>