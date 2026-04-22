<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inventory Receiving Workflow — Last PO Order — Norris Utilities®</title>
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
      --nu-success: #00A651;
      --nu-warning: #F39C12;
      --nu-danger: #E74C3C;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
    .nu-header * { position: relative; z-index: 2; }
    .nu-phoenix-icon {
      width: 80px; height: 80px;
      margin: 0 auto 16px;
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
      font-family: var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PAGE TITLE */
    .page-title-block {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 30px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .page-eyebrow {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 18px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 20px;
      border-radius: 3px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.5rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 14px;
    }
    .page-title span { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }

    /* SECTION */
    .nu-section { margin-bottom: 50px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first-word { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* STATUS BANNER */
    .status-banner {
      display: flex;
      align-items: center;
      gap: 20px;
      background: linear-gradient(135deg, #fff8e1 0%, #fffbf0 100%);
      border-left: 5px solid var(--nu-warning);
      padding: 22px 28px;
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .status-banner-icon {
      flex-shrink: 0;
      width: 48px; height: 48px;
      background: var(--nu-warning);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.4rem;
    }
    .status-banner-text strong {
      display: block;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      margin-bottom: 4px;
    }
    .status-banner-text span {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* WORKFLOW STEPS */
    .workflow-grid {
      display: grid;
      gap: 18px;
    }
    .workflow-step {
      display: grid;
      grid-template-columns: 60px 1fr;
      gap: 20px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .workflow-step:hover {
      transform: translateX(3px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .step-number {
      width: 50px; height: 50px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.3rem;
    }
    .step-content h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .step-content p {
      font-size: 0.96rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .step-content ul {
      list-style: none;
      padding-left: 0;
    }
    .step-content ul li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 6px;
      font-size: 0.94rem;
    }
    .step-content ul li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px 32px;
      border: 1px solid var(--nu-medium-gray);
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist-item:last-child { border-bottom: none; }
    .check-box {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .check-text {
      font-size: 0.97rem;
      color: var(--nu-dark-text);
    }
    .check-text strong { color: var(--nu-blue); }

    /* INFO CARDS */
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }
    .info-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      padding: 20px 22px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .info-card-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .info-card-value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.4;
    }
    .info-card-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* INSPECTION TABLE */
    .inspection-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .inspection-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .inspection-table th {
      padding: 14px 16px;
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: left;
    }
    .inspection-table td {
      padding: 14px 16px;
      font-size: 0.93rem;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .inspection-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .inspection-table tbody tr:last-child td { border-bottom: none; }
    .pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .pill-required {
      background: #fde7e9;
      color: var(--nu-danger);
    }
    .pill-recommended {
      background: #e6f4ff;
      color: var(--nu-blue);
    }

    /* BADGE ROW */
    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 30px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 26px 12px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
    }
    .nu-badge-dot {
      width: 10px; height: 10px;
      background: var(--nu-cyan);
      border-radius: 50%;
      margin-right: 10px;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f0f8ff 0%, #e6f4ff 100%);
      border: 1px solid #b3d9ff;
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 28px;
      margin: 30px 0;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.05rem;
      margin-bottom: 8px;
    }
    .callout p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .callout p:last-child { margin-bottom: 0; }

    /* SIGN-OFF */
    .signoff-block {
      margin-top: 40px;
      padding: 30px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
    }
    .signoff-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 24px;
      margin-top: 16px;
    }
    .signoff-field {
      border-bottom: 2px solid var(--nu-blue);
      padding-bottom: 4px;
      min-height: 38px;
    }
    .signoff-label {
      display: block;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-top: 6px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
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

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .page-title { font-size: 1.7rem; }
      .nu-container { padding: 40px 20px; }
      .workflow-step { grid-template-columns: 1fr; gap: 14px; }
      .step-number { margin: 0 auto; }
      .nu-badge { clip-path: none; border-radius: 6px; }
      .inspection-table { font-size: 0.85rem; }
      .inspection-table th, .inspection-table td { padding: 10px 12px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .workflow-step, .info-card, .callout { box-shadow: none; }
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="page-title-block">
        <span class="page-eyebrow">Action Item — Inventory Receiving</span>
        <h1 class="page-title">Receive &amp; Process Inventory<br><span>From Last PO Order</span></h1>
        <p class="page-subtitle">Step-by-step receiving workflow for the most recent Purchase Order. Verify, inspect, log, stock, and reconcile so every unit is accounted for and ready to ship to a customer.</p>
      </div>

      <!-- STATUS -->
      <div class="status-banner">
        <div class="status-banner-icon">!</div>
        <div class="status-banner-text">
          <strong>Status: Open Action Item</strong>
          <span>Inventory from the last PO must be received, inspected, counted, and logged into the inventory tracker before any units are committed to open quotes or shipped to customers.</span>
        </div>
      </div>

      <!-- BADGES -->
      <div class="badge-row">
        <div class="nu-badge"><span class="nu-badge-dot"></span>Owner: Aaron C. Norris</div>
        <div class="nu-badge"><span class="nu-badge-dot"></span>Support: Caroline Butler</div>
        <div class="nu-badge"><span class="nu-badge-dot"></span>Source: reMarkable Action Item</div>
        <div class="nu-badge"><span class="nu-badge-dot"></span>Priority: High</div>
      </div>

      <!-- KEY INFO -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">PO</span> <span class="rest">Reference Information</span></h2>
        <div class="info-grid">
          <div class="info-card">
            <div class="info-card-label">PO Number</div>
            <div class="info-card-value">Last PO on file</div>
            <div class="info-card-sub">Pull exact PO# from QuickBooks before receiving</div>
          </div>
          <div class="info-card">
            <div class="info-card-label">Vendor</div>
            <div class="info-card-value">Confirm at receipt</div>
            <div class="info-card-sub">Match packing slip vendor to PO vendor</div>
          </div>
          <div class="info-card">
            <div class="info-card-label">Expected Items</div>
            <div class="info-card-value">Per PO line items</div>
            <div class="info-card-sub">FlexPro Armor SKUs and/or Samson Rope</div>
          </div>
          <div class="info-card">
            <div class="info-card-label">Receiving Location</div>
            <div class="info-card-value">Birmingham, AL</div>
            <div class="info-card-sub">130 Inverness Plaza #210</div>
          </div>
        </div>
      </section>

      <!-- WORKFLOW -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Receiving</span> <span class="rest">Workflow — 7 Steps</span></h2>
        <div class="workflow-grid">

          <div class="workflow-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Pull the PO &amp; Match the Carrier Documents</h3>
              <p>Before opening any boxes, pull the PO from QuickBooks and lay it next to the carrier's packing slip and bill of lading.</p>
              <ul>
                <li>Confirm PO number, vendor name, and ship-to address match</li>
                <li>Confirm carton count on BOL matches what was physically delivered</li>
                <li>Note any visible damage to cartons on the BOL <strong>before signing</strong></li>
              </ul>
            </div>
          </div>

          <div class="workflow-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Photograph Pallet &amp; Cartons On Arrival</h3>
              <p>Take dated photos of the pallet as received and each carton individually. This is the only proof of condition we have if a freight claim is needed.</p>
              <ul>
                <li>Wide shot of full pallet (4 sides)</li>
                <li>Close-up of any shrink wrap, strapping, or damage</li>
                <li>Save photos to PO folder by PO number</li>
              </ul>
            </div>
          </div>

          <div class="workflow-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Open &amp; Count Against the Packing Slip</h3>
              <p>Open every carton and count each unit against the packing slip. Do not assume case quantities are correct.</p>
              <ul>
                <li>Count each SKU separately (NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C)</li>
                <li>Mark slip with actual quantity received next to expected quantity</li>
                <li>Flag overages, shortages, or substitutions immediately</li>
              </ul>
            </div>
          </div>

          <div class="workflow-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Inspect Each Unit for Quality</h3>
              <p>Pull every unit and run the quality checklist below. FlexPro Armor is hand-built USA — defects do happen and must be caught here, not by the customer.</p>
              <ul>
                <li>Check stitching, grommets, snaps, and webbing</li>
                <li>Confirm correct size and color match PO specification</li>
                <li>Set aside any defective units in a marked "HOLD" area</li>
              </ul>
            </div>
          </div>

          <div class="workflow-step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3>Log Into Inventory Tracker</h3>
              <p>Update the inventory tracker the same day items are received. No exceptions — un-logged inventory cannot be quoted or sold.</p>
              <ul>
                <li>Open <strong>~/norris-agent/data/remarkable_items.json</strong> and the inventory sheet</li>
                <li>Enter PO#, vendor, date received, SKU, qty received, qty defective, qty available</li>
                <li>Tag units with location code if multiple storage areas in use</li>
              </ul>
            </div>
          </div>

          <div class="workflow-step">
            <div class="step-number">6</div>
            <div class="step-content">
              <h3>Reconcile to QuickBooks &amp; Approve Vendor Invoice</h3>
              <p>Match received quantities to the vendor's invoice. Do not pay until quantities, pricing, and condition all reconcile.</p>
              <ul>
                <li>Mark PO as "Received" in QuickBooks with actual quantities</li>
                <li>Adjust invoice for any shortages, defects, or substitutions</li>
                <li>Route approved invoice to A/P queue for payment</li>
              </ul>
            </div>
          </div>

          <div class="workflow-step">
            <div class="step-number">7</div>
            <div class="step-content">
              <h3>Release to Open Orders &amp; Notify Sales</h3>
              <p>Once stock is logged and invoiced, allocate against any open quotes or back-orders waiting on this PO.</p>
              <ul>
                <li>Cross-check open quotes against newly available SKUs</li>
                <li>Notify Aaron of any back-orders that can now ship</li>
                <li>Send Telegram confirmation: "PO# [X] received, logged, available for sale"</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <!-- INSPECTION TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Quality</span> <span class="rest">Inspection Checkpoints</span></h2>
        <table class="inspection-table">
          <thead>
            <tr>
              <th>Checkpoint</th>
              <th>What to Verify</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>SKU &amp; Size</strong></td>
              <td>Tag matches PO line item: NU-BC-2851 (28"×51"), NU-BC-2834 (28"×34"), or combo variant</td>
              <td><span class="pill pill-required">Required</span></td>
            </tr>
            <tr>
              <td><strong>Stitching</strong></td>
              <td>All seams continuous, no skipped stitches, bar-tacked at stress points</td>
              <td><span class="pill pill-required">Required</span></td>
            </tr>
            <tr>
              <td><strong>Grommets &amp; Hardware</strong></td>
              <td>Grommets seated, snaps engage, webbing tight, no rust or burrs</td>
              <td><span class="pill pill-required">Required</span></td>
            </tr>
            <tr>
              <td><strong>Material Condition</strong></td>
              <td>No tears, abrasions, oil staining, or fade — fabric uniform across the cover</td>
              <td><span class="pill pill-required">Required</span></td>
            </tr>
            <tr>
              <td><strong>Combo Components</strong></td>
              <td>Combo SKUs include both top cover and floor; serial numbers match if applicable</td>
              <td><span class="pill pill-required">Required</span></td>
            </tr>
            <tr>
              <td><strong>Packaging</strong></td>
              <td>Each unit folded and bagged, ready for direct ship to customer without rework</td>
              <td><span class="pill pill-recommended">Recommended</span></td>
            </tr>
            <tr>
              <td><strong>Lot / Batch Tag</strong></td>
              <td>Manufacturing lot or build date visible — recorded with inventory log entry</td>
              <td><span class="pill pill-recommended">Recommended</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- COMPLETION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Completion</span> <span class="rest">Checklist</span></h2>
        <div class="checklist">
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>PO pulled</strong> from QuickBooks and matched to packing slip + BOL</div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Photos taken</strong> of pallet, cartons, and any damage prior to opening</div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Physical count</strong> completed for each SKU and recorded on packing slip</div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Quality inspection</strong> run on every unit; defects pulled and tagged HOLD</div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Inventory tracker</strong> updated with PO#, date, SKU, qty received, qty available</div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>QuickBooks PO</strong> marked received and vendor invoice reconciled</div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Open quotes</strong> reviewed and back-orders released as stock allows</div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Telegram confirmation</strong> sent to Aaron — PO closed and stock available</div>
          </div>
        </div>
      </section>

      <!-- CALLOUT -->
      <div class="callout">
        <div class="callout-title">Discrepancy Protocol</div>
        <p>If any shortage, overage, defect, or substitution is found, do <strong>not</strong> mark the PO complete in QuickBooks. Open a discrepancy note in the PO folder, photograph the affected units, and email the vendor the same day. Hold payment on the disputed line until resolution is confirmed in writing.</p>
        <p>For FlexPro Armor builds, document the lot/build date and the specific defect type so the manufacturer can trace the issue back to a production run.</p>
      </div>

      <!-- SIGN-OFF -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Receiving</span> <span class="rest">Sign-Off</span></h2>
        <div class="signoff-block">
          <p style="margin-bottom: 8px; color: var(--nu-body-text);">Once all checklist items above are complete, sign and date below. Scan or photograph the completed sheet and file it in the PO folder.</p>
          <div class="signoff-row">
            <div>
              <div class="signoff-field"></div>
              <span class="signoff-label">Received By</span>
            </div>
            <div>
              <div class="signoff-field"></div>
              <span class="signoff-label">Date Received</span>
            </div>
            <div>
              <div class="signoff-field"></div>
              <span class="signoff-label">PO Number</span>
            </div>
            <div>
              <div class="signoff-field"></div>
              <span class="signoff-label">Approved By (Aaron)</span>
            </div>
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