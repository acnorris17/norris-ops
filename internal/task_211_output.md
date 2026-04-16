<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action — Modify Shipped Bucket Cover for Proper Sizing — Norris Utilities®</title>
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
      --nu-amber: #F59E0B;
      --nu-red: #DC2626;
      --nu-green: #16A34A;
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
      opacity: 0.6;
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
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
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
      padding: 50px 24px 60px;
    }
    .nu-container {
      max-width: 980px;
      margin: 0 auto;
    }

    /* PAGE TITLE BAR */
    .page-title-bar {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 8px;
      flex-wrap: wrap;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.75rem;
      color: var(--nu-blue);
      line-height: 1.15;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .priority-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--nu-amber);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 999px;
      box-shadow: 0 2px 8px rgba(245,158,11,0.3);
    }
    .priority-pill::before {
      content: '';
      width: 8px; height: 8px;
      background: var(--nu-white);
      border-radius: 50%;
    }
    .meta-line {
      color: #6B6B76;
      font-size: 0.92rem;
      margin-bottom: 28px;
    }
    .meta-line strong { color: var(--nu-dark-text); font-weight: 700; }

    /* ACTION CARD */
    .action-card {
      background: var(--nu-white);
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,51,0.08);
      border: 1px solid var(--nu-medium-gray);
      overflow: hidden;
      margin-bottom: 24px;
    }
    .action-card-header {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 28px;
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .action-card-header svg {
      width: 26px; height: 26px;
      fill: var(--nu-cyan);
      flex-shrink: 0;
    }
    .action-card-header h2 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .action-card-body {
      padding: 28px;
    }
    .action-statement {
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      line-height: 1.5;
      margin-bottom: 18px;
      padding-left: 14px;
      border-left: 4px solid var(--nu-blue);
    }
    .action-source {
      font-size: 0.9rem;
      color: #6B6B76;
      margin-bottom: 0;
    }
    .action-source strong { color: var(--nu-dark-text); }

    /* TWO COLUMN GRID */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 24px;
    }
    @media (max-width: 720px) {
      .two-col { grid-template-columns: 1fr; }
    }

    .info-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,51,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .info-card h3 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .info-card h3::before {
      content: '';
      width: 24px; height: 2px;
      background: var(--nu-cyan);
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding: 8px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
    }
    .info-row:last-child { border-bottom: none; }
    .info-row .label { color: #6B6B76; font-weight: 400; }
    .info-row .value { color: var(--nu-dark-text); font-weight: 700; text-align: right; }

    /* SKU TABLE */
    .sku-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,51,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 24px;
    }
    .sku-card h3 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .sku-card h3::before {
      content: '';
      width: 24px; height: 2px;
      background: var(--nu-cyan);
    }
    .sku-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
    }
    .sku-table th {
      text-align: left;
      padding: 10px 12px;
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      border-bottom: 2px solid var(--nu-blue);
    }
    .sku-table td {
      padding: 11px 12px;
      border-bottom: 1px solid var(--nu-medium-gray);
      color: var(--nu-body-text);
    }
    .sku-table td.sku-code {
      font-weight: 900;
      color: var(--nu-blue);
      font-family: 'SF Mono', Menlo, monospace;
      font-size: 0.85rem;
    }
    .sku-table tr:last-child td { border-bottom: none; }

    /* CHECKLIST */
    .checklist-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px 28px;
      box-shadow: 0 2px 10px rgba(0,0,51,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 24px;
    }
    .checklist-card h3 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 18px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .checklist-card h3::before {
      content: '';
      width: 24px; height: 2px;
      background: var(--nu-cyan);
    }
    .step-list {
      list-style: none;
      counter-reset: step;
    }
    .step-list li {
      counter-increment: step;
      position: relative;
      padding: 12px 0 12px 48px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.96rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .step-list li:last-child { border-bottom: none; }
    .step-list li::before {
      content: counter(step);
      position: absolute;
      left: 0;
      top: 12px;
      width: 32px;
      height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.85rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 6px rgba(0,0,255,0.25);
    }
    .step-list li strong { color: var(--nu-blue); font-weight: 900; }
    .step-detail {
      display: block;
      margin-top: 4px;
      font-size: 0.85rem;
      color: #6B6B76;
      font-weight: 400;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #FFF8E6 0%, #FEF3C7 100%);
      border-left: 4px solid var(--nu-amber);
      border-radius: 8px;
      padding: 18px 22px;
      margin-bottom: 24px;
      display: flex;
      gap: 14px;
      align-items: flex-start;
    }
    .callout svg {
      width: 24px; height: 24px;
      fill: var(--nu-amber);
      flex-shrink: 0;
      margin-top: 2px;
    }
    .callout-body {
      font-size: 0.93rem;
      color: #78350F;
      line-height: 1.55;
    }
    .callout-body strong { color: #78350F; font-weight: 900; }

    /* CONTACT BLOCK */
    .contact-block {
      background: linear-gradient(135deg, #EBF5FF 0%, #DBEAFE 100%);
      border-radius: 10px;
      padding: 22px 26px;
      margin-bottom: 24px;
    }
    .contact-block h3 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 12px;
    }
    .contact-block p {
      font-size: 0.93rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }
    .contact-block a {
      color: var(--nu-blue);
      text-decoration: none;
      font-weight: 700;
    }

    /* BUTTONS */
    .button-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 8px;
    }
    .nu-btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 12px 24px;
      border: none;
      border-radius: 6px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      color: var(--nu-blue);
      padding: 12px 24px;
      border: 2px solid var(--nu-blue);
      border-radius: 6px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.92rem;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px 24px;
      text-align: center;
      font-family: var(--font-primary);
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
      font-size: 1rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact strong { color: var(--nu-white); font-weight: 900; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-section-title { font-size: 1.4rem; }
      .action-card-body { padding: 22px; }
      .action-statement { font-size: 1.02rem; }
      .nu-footer-contact { font-size: 0.9rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .action-card, .info-card, .sku-card, .checklist-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .button-row { display: none; }
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
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="page-title-bar">
        <h1 class="nu-section-title">Action <span>Item</span></h1>
        <span class="priority-pill">Open • In Progress</span>
      </div>
      <p class="meta-line">
        <strong>Captured:</strong> 2026-04-16 from reMarkable notebook &nbsp;•&nbsp;
        <strong>Owner:</strong> Aaron C. Norris &nbsp;•&nbsp;
        <strong>Category:</strong> FlexPro Armor — Order Correction
      </p>

      <!-- ACTION STATEMENT -->
      <div class="action-card">
        <div class="action-card-header">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L1 21h22L12 2zm0 4.5L19.5 19h-15L12 6.5zm-1 5v4h2v-4h-2zm0 5v2h2v-2h-2z"/></svg>
          <h2>What Needs To Happen</h2>
        </div>
        <div class="action-card-body">
          <p class="action-statement">
            Modify the shipped FlexPro Armor bucket cover and ship it back so the customer receives the correct size that fits their bucket properly.
          </p>
          <p class="action-source">
            <strong>Source:</strong> reMarkable handwritten note — flagged during morning notebook review. Customer received a unit that does not fit their bucket and the cover must be re-sized at the workshop, then re-shipped at Norris Utilities® expense.
          </p>
        </div>
      </div>

      <!-- TWO COLUMN: ORDER + LOGISTICS -->
      <div class="two-col">
        <div class="info-card">
          <h3>Order Snapshot</h3>
          <div class="info-row"><span class="label">Product line</span><span class="value">FlexPro Armor Bucket Cover</span></div>
          <div class="info-row"><span class="label">Issue</span><span class="value">Size mismatch — does not fit bucket</span></div>
          <div class="info-row"><span class="label">Resolution</span><span class="value">Modify &amp; re-ship</span></div>
          <div class="info-row"><span class="label">Cost owner</span><span class="value">Norris Utilities®</span></div>
          <div class="info-row"><span class="label">Margin policy</span><span class="value">50% (FlexPro Armor)</span></div>
        </div>
        <div class="info-card">
          <h3>Logistics</h3>
          <div class="info-row"><span class="label">Inbound shipping</span><span class="value">Prepaid label to customer</span></div>
          <div class="info-row"><span class="label">Workshop turn</span><span class="value">Modify to correct dimensions</span></div>
          <div class="info-row"><span class="label">Outbound shipping</span><span class="value">Norris Utilities® pays</span></div>
          <div class="info-row"><span class="label">Shipping formula</span><span class="value">ROUNDUP(ROUNDUP(RegCost,0) × 1.10, 0)</span></div>
          <div class="info-row"><span class="label">Target turnaround</span><span class="value">5 business days</span></div>
        </div>
      </div>

      <!-- SKU REFERENCE -->
      <div class="sku-card">
        <h3>FlexPro Armor SKU Reference — Confirm Correct Size Before Modification</h3>
        <table class="sku-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Configuration</th>
              <th>Dimensions</th>
              <th>Competitor Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="sku-code">NU-BC-2851</td>
              <td>2-Man Bucket Cover</td>
              <td>28" × 51"</td>
              <td>"24 × 48"</td>
            </tr>
            <tr>
              <td class="sku-code">NU-BC-2834</td>
              <td>1.5-Man Bucket Cover</td>
              <td>28" × 34"</td>
              <td>"24 × 34"</td>
            </tr>
            <tr>
              <td class="sku-code">NU-BC-2851-C</td>
              <td>2-Man Combo</td>
              <td>28" × 51"</td>
              <td>—</td>
            </tr>
            <tr>
              <td class="sku-code">NU-BC-2834-C</td>
              <td>1.5-Man Combo</td>
              <td>28" × 34"</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ACTION CALLOUT -->
      <div class="callout">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z"/></svg>
        <div class="callout-body">
          <strong>Get exact bucket measurements before modifying.</strong> Confirm bucket make, model, inside top opening (length × width × depth), and lip thickness in writing from the customer. A second mis-fit costs twice as much in shipping and damages trust. If the customer cannot measure, offer to send a measurement template or schedule a brief video call.
        </div>
      </div>

      <!-- CHECKLIST -->
      <div class="checklist-card">
        <h3>Execution Checklist</h3>
        <ol class="step-list">
          <li>
            <strong>Contact the customer today.</strong>
            <span class="step-detail">Confirm receipt of the wrong-size cover, apologize briefly, and request exact bucket dimensions (length × width × depth, plus lip thickness). Ask for one photo of the inside top of the bucket with a tape measure visible.</span>
          </li>
          <li>
            <strong>Verify the correct SKU.</strong>
            <span class="step-detail">Cross-reference the customer's measurements against the SKU table above. Confirm whether the order should be NU-BC-2851 (2-Man, 28" × 51") or NU-BC-2834 (1.5-Man, 28" × 34"), and whether a Combo (-C) configuration applies.</span>
          </li>
          <li>
            <strong>Issue prepaid return label.</strong>
            <span class="step-detail">Email the customer a prepaid shipping label so the wrong-size cover can be returned to the workshop at no cost to them. Note the tracking number in the order record.</span>
          </li>
          <li>
            <strong>Workshop modification work order.</strong>
            <span class="step-detail">Open a work order for the FlexPro Armor workshop with the corrected dimensions, the original SKU received, and the target SKU. Tag the work order as "Customer Re-Size — No Charge."</span>
          </li>
          <li>
            <strong>Inspect modified cover before re-ship.</strong>
            <span class="step-detail">Lay the modified cover against the work order specs. Confirm stitching, hardware, and dimensions match. Photograph the corrected cover for the order record.</span>
          </li>
          <li>
            <strong>Ship back to customer at Norris Utilities® expense.</strong>
            <span class="step-detail">Use shipping formula ROUNDUP(ROUNDUP(RegCost,0) × 1.10, 0) for internal cost tracking only — customer pays nothing for the return shipment.</span>
          </li>
          <li>
            <strong>Follow up 48 hours after delivery.</strong>
            <span class="step-detail">Call the customer to confirm the modified cover fits correctly. Document fit confirmation in the order record and close the action item.</span>
          </li>
          <li>
            <strong>Update internal QC log.</strong>
            <span class="step-detail">Log the original mis-size against the source order so we can identify whether it was a measurement intake error, a workshop production error, or a SKU selection error — and prevent recurrence.</span>
          </li>
        </ol>
      </div>

      <!-- COMMUNICATION TEMPLATE -->
      <div class="contact-block">
        <h3>Customer Communication — Voice Reminder</h3>
        <p>
          Open with "Name —" (em dash, no comma). Lead with ownership of the issue, not excuses. Make the path forward concrete: prepaid return label today, modification at the workshop, re-ship at our expense, target back in your hands within five business days. Close with "Sincerely," then "Aaron C. Norris" on the next line. No "just," no "touch base," no apologies that exceed one sentence.
        </p>
      </div>

      <!-- BUTTON ROW -->
      <div class="button-row">
        <a href="mailto:acnorris@norrisutilities.com?subject=Bucket%20Cover%20Re-Size%20%E2%80%94%20Status%20Update" class="nu-btn-primary">
          Email Status Update
        </a>
        <a href="tel:2055001343" class="nu-btn-secondary">
          Call Customer Now
        </a>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>