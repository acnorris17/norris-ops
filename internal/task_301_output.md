<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inventory Order Follow-Up — Norris Utilities®</title>
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
      --nu-urgent-red: #C8102E;
      --nu-success-green: #2E7D32;
      --nu-warning-amber: #E8A317;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      margin-top: 22px;
      display: inline-block;
      padding: 8px 22px;
      background: rgba(0,0,0,0.22);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 2px;
      color: var(--nu-white);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* GHOST PHOENIX WATERMARK */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 10%; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      height: 80%;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230000FF' opacity='0.07'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230000FF' opacity='0.07'/></svg>");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      opacity: 0.55;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PAGE TITLE */
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .nu-page-title .accent { color: var(--nu-blue); }
    .nu-page-title .dark { color: var(--nu-dark-text); }
    .nu-page-subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 36px;
      padding-bottom: 20px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: var(--nu-light-gray);
      border-radius: 3px;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-meta-chip.priority {
      background: var(--nu-urgent-red);
      color: var(--nu-white);
    }
    .nu-meta-chip.status {
      background: var(--nu-warning-amber);
      color: var(--nu-dark-text);
    }

    /* SECTION */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ACTION CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 6px;
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
    }
    .nu-callout::before {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 180px; height: 100%;
      background: radial-gradient(ellipse at right, rgba(6,208,255,0.22) 0%, transparent 70%);
    }
    .nu-callout-label {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .nu-callout-headline {
      font-size: 1.35rem;
      font-weight: 700;
      line-height: 1.35;
      margin-bottom: 6px;
    }
    .nu-callout-sub {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.82);
      font-weight: 300;
    }

    /* STEP GRID */
    .nu-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .nu-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 22px 24px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }
    .nu-step:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.09);
    }
    .nu-step-number {
      display: inline-block;
      font-weight: 900;
      font-size: 0.75rem;
      color: var(--nu-cyan);
      letter-spacing: 0.2em;
      margin-bottom: 6px;
    }
    .nu-step-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-step-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* CHECKLIST */
    .nu-check-list {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      padding: 8px 0;
    }
    .nu-check-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-check-item:last-child { border-bottom: none; }
    .nu-check-box {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      margin-top: 2px;
    }
    .nu-check-text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .nu-check-text strong { color: var(--nu-blue); font-weight: 900; }

    /* SUPPLIER GRID */
    .nu-supplier-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .nu-supplier-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-supplier-head {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 14px 20px;
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.05em;
    }
    .nu-supplier-body { padding: 18px 20px; }
    .nu-supplier-row {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding: 6px 0;
      font-size: 0.88rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-supplier-row:last-child { border-bottom: none; }
    .nu-supplier-row .label {
      color: var(--nu-body-text);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
    }
    .nu-supplier-row .value {
      color: var(--nu-dark-text);
      font-weight: 400;
      text-align: right;
    }
    .nu-supplier-cc {
      background: var(--nu-light-gray);
      padding: 10px 20px;
      font-size: 0.8rem;
      color: var(--nu-body-text);
      border-top: 1px solid var(--nu-medium-gray);
    }
    .nu-supplier-cc strong { color: var(--nu-urgent-red); }

    /* EMAIL SCRIPT */
    .nu-script {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 26px;
      border-radius: 4px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
      white-space: pre-wrap;
    }
    .nu-script-label {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 4px 12px;
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 10px;
      border-radius: 2px;
    }

    /* QUESTION BANK */
    .nu-question-list {
      list-style: none;
      counter-reset: qcount;
    }
    .nu-question-list li {
      counter-increment: qcount;
      padding: 14px 20px 14px 60px;
      margin-bottom: 10px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .nu-question-list li::before {
      content: counter(qcount);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
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

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact { font-size: 0.92rem; line-height: 1.8; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-callout { padding: 22px 20px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-step:hover { transform: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Action Item · Inventory Follow-Up</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PAGE TITLE -->
      <h1 class="nu-page-title">
        <span class="accent">Follow Up</span> <span class="dark">on Inventory Order from Last PO</span>
      </h1>
      <p class="nu-page-subtitle">
        reMarkable action item captured 2026-04-24 — confirm status, ship dates, and open balances on the most recent purchase orders issued by Norris Utilities®.
      </p>
      <div class="nu-meta-row">
        <span class="nu-meta-chip priority">Priority · High</span>
        <span class="nu-meta-chip status">Status · Open</span>
        <span class="nu-meta-chip">Owner · Aaron C. Norris</span>
        <span class="nu-meta-chip">Source · reMarkable</span>
        <span class="nu-meta-chip">Captured · 2026-04-24</span>
      </div>

      <!-- CALLOUT -->
      <div class="nu-callout">
        <div class="nu-callout-label">Today&rsquo;s Objective</div>
        <div class="nu-callout-headline">Close the loop on every open PO: confirm production status, ship dates, tracking, and pricing in writing — no verbal-only answers.</div>
        <div class="nu-callout-sub">Every open PO either moves forward today, or we get a firm written date. No &ldquo;I&rsquo;ll check and get back to you&rdquo; without a callback commitment.</div>
      </div>

      <!-- STEP-BY-STEP -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Sequence</span></h2>
        <div class="nu-steps">
          <div class="nu-step">
            <div class="nu-step-number">STEP 01</div>
            <div class="nu-step-title">Pull the PO Ledger</div>
            <div class="nu-step-body">Open the master tracker and pull every PO issued in the last 90 days that is not marked &ldquo;Received&rdquo; or &ldquo;Invoiced&rdquo;. Sort by age — oldest first.</div>
          </div>
          <div class="nu-step">
            <div class="nu-step-number">STEP 02</div>
            <div class="nu-step-title">Confirm Ship Method</div>
            <div class="nu-step-body">For each PO, verify whether supplier is shipping direct-to-customer or to Birmingham. Apply Ben&rsquo;s Shipping Formula: CustomerCost = ROUNDUP(ROUNDUP(RegCost,0) × 1.10, 0).</div>
          </div>
          <div class="nu-step">
            <div class="nu-step-number">STEP 03</div>
            <div class="nu-step-title">Call or Email Each Supplier</div>
            <div class="nu-step-body">Use the supplier grid below. Always CC the required pair (Boss: Troy + Thayne / Samson: Donna + Sarah). Ask the six status questions word-for-word.</div>
          </div>
          <div class="nu-step">
            <div class="nu-step-number">STEP 04</div>
            <div class="nu-step-title">Capture Tracking Numbers</div>
            <div class="nu-step-body">Every shipment tracking number goes into the shipments ledger the moment it arrives. No tracking number = the PO is not &ldquo;shipped&rdquo; regardless of what the supplier claims.</div>
          </div>
          <div class="nu-step">
            <div class="nu-step-number">STEP 05</div>
            <div class="nu-step-title">Flag Exceptions</div>
            <div class="nu-step-body">Anything more than 14 days past promised ship date — escalate to the supplier&rsquo;s owner or senior rep. Log escalations in the deals pipeline with timestamp.</div>
          </div>
          <div class="nu-step">
            <div class="nu-step-number">STEP 06</div>
            <div class="nu-step-title">Invoice &amp; Close</div>
            <div class="nu-step-body">Once received and verified against the PO, trigger the QuickBooks invoice to the end customer. Update tracker to &ldquo;Invoiced&rdquo; with date and invoice number.</div>
          </div>
        </div>
      </section>

      <!-- SUPPLIER CONTACT GRID -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Supplier</span> <span class="rest">Contact Matrix</span></h2>
        <div class="nu-supplier-grid">

          <div class="nu-supplier-card">
            <div class="nu-supplier-head">SKYLIFT</div>
            <div class="nu-supplier-body">
              <div class="nu-supplier-row"><span class="label">Primary</span><span class="value">Andrew Jarmoszuk</span></div>
              <div class="nu-supplier-row"><span class="label">Pricing &amp; Specs</span><span class="value">Nick Gordon</span></div>
              <div class="nu-supplier-row"><span class="label">Also</span><span class="value">Dale Williams, Nick Jarmoszuk Jr</span></div>
              <div class="nu-supplier-row"><span class="label">Open PO</span><span class="value">5× SBA40i-LW + 1× SBA47i-MH · $1,091,402.50</span></div>
              <div class="nu-supplier-row"><span class="label">PO Date</span><span class="value">2026-01-12</span></div>
              <div class="nu-supplier-row"><span class="label">Lead Time</span><span class="value">~3 weeks per Nick Gordon (confirm current)</span></div>
            </div>
            <div class="nu-supplier-cc">Ask: production status of each unit, serial numbers, ship week, tracking.</div>
          </div>

          <div class="nu-supplier-card">
            <div class="nu-supplier-head">BOSS PRODUCTS</div>
            <div class="nu-supplier-body">
              <div class="nu-supplier-row"><span class="label">Primary</span><span class="value">Troy Gongwer</span></div>
              <div class="nu-supplier-row"><span class="label">Secondary</span><span class="value">Thayne Grove</span></div>
              <div class="nu-supplier-row"><span class="label">Product</span><span class="value">FlexPro Armor bucket covers — 50% margin</span></div>
              <div class="nu-supplier-row"><span class="label">Active SKUs</span><span class="value">NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C</span></div>
            </div>
            <div class="nu-supplier-cc"><strong>CC BOTH Troy and Thayne on every message — always.</strong></div>
          </div>

          <div class="nu-supplier-card">
            <div class="nu-supplier-head">SAMSON ROPE</div>
            <div class="nu-supplier-body">
              <div class="nu-supplier-row"><span class="label">Primary</span><span class="value">Donna Poll</span></div>
              <div class="nu-supplier-row"><span class="label">Secondary</span><span class="value">Sarah Daniels</span></div>
              <div class="nu-supplier-row"><span class="label">Margin</span><span class="value">30% (Cost ÷ 0.70 = Price)</span></div>
              <div class="nu-supplier-row"><span class="label">Status</span><span class="value">Authorized Distributor</span></div>
            </div>
            <div class="nu-supplier-cc"><strong>CC BOTH Donna and Sarah on every message — always.</strong></div>
          </div>

          <div class="nu-supplier-card">
            <div class="nu-supplier-head">BAY SHORE SYSTEMS (BSS)</div>
            <div class="nu-supplier-body">
              <div class="nu-supplier-row"><span class="label">Owner</span><span class="value">Herb Minatre</span></div>
              <div class="nu-supplier-row"><span class="label">Primary</span><span class="value">Andy Barron</span></div>
              <div class="nu-supplier-row"><span class="label">Role</span><span class="value">Drill Rigs · SE territory rep</span></div>
              <div class="nu-supplier-row"><span class="label">Margin Band</span><span class="value">Equipment 12–15%</span></div>
            </div>
            <div class="nu-supplier-cc">Contact Andy first. Escalate to Herb only if Andy is unreachable.</div>
          </div>

          <div class="nu-supplier-card">
            <div class="nu-supplier-head">IRBY CONSTRUCTION</div>
            <div class="nu-supplier-body">
              <div class="nu-supplier-row"><span class="label">New Primary</span><span class="value">Jared Lemoine</span></div>
              <div class="nu-supplier-row"><span class="label">Retired</span><span class="value">Gary Wiggs · Scott Argyle (Apr 2026)</span></div>
              <div class="nu-supplier-row"><span class="label">Address</span><span class="value">318 Old Hwy 49 S</span></div>
            </div>
            <div class="nu-supplier-cc">Introduce any open PO handoff to Jared explicitly — confirm he has the file.</div>
          </div>

          <div class="nu-supplier-card">
            <div class="nu-supplier-head">TEREX</div>
            <div class="nu-supplier-body">
              <div class="nu-supplier-row"><span class="label">Primary</span><span class="value">Bill Kugler</span></div>
              <div class="nu-supplier-row"><span class="label">Margin Band</span><span class="value">Equipment 12–15%</span></div>
              <div class="nu-supplier-row"><span class="label">Pipeline</span><span class="value">Highest-priority opportunity tracked in deals pipeline</span></div>
            </div>
            <div class="nu-supplier-cc">Check status of any open unit orders and forecasted delivery windows.</div>
          </div>

        </div>
      </section>

      <!-- SIX QUESTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Six</span> <span class="rest">Questions to Ask Every Supplier</span></h2>
        <ol class="nu-question-list">
          <li>Is our PO in production right now, or is it still in the queue?</li>
          <li>What is the confirmed ship date — not estimate, confirmed?</li>
          <li>What carrier, and when will the tracking number be emailed to me?</li>
          <li>Has anything changed on price, freight, or line items since the PO was issued?</li>
          <li>Are there any shortages, backorders, or substitutions I need to approve?</li>
          <li>Is the billing address and shipping address on file still correct for this order?</li>
        </ol>
      </section>

      <!-- EMAIL SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Email</span> <span class="rest">Script — Drop-In Template</span></h2>
        <div class="nu-script">
<span class="nu-script-label">Copy &amp; Send</span>
Subject: PO Follow-Up — Status Check &amp; Ship Date Confirmation

[Name] —

    Following up on the purchase order we issued on [PO date]. I need to close the loop on a few items so I can update my customer and plan receiving.

    • What is the current production status on our order?
    • What is the confirmed ship date, and which carrier?
    • Please email the tracking number the moment it is generated.
    • Any change in price, freight, or line items versus the PO?
    • Any shortages, backorders, or substitutions I need to approve?
    • Are billing and shipping addresses on file still correct?

    A written reply is easiest for my records. A quick call back at 205-500-1343 also works if that&rsquo;s faster on your end.

    Appreciate you.

Sincerely,

    Aaron C. Norris
    Founder &amp; CEO
    Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com
        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Before</span> <span class="rest">You Mark This Task Done</span></h2>
        <div class="nu-check-list">
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Every open PO</strong> has a written status response on file (email, not phone notes).</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Every shipment</strong> has a tracking number logged in the shipments ledger.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Every customer</strong> expecting product this week has been sent their confirmed ship date.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Any PO past 14 days</strong> of its promised date is escalated and logged.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Master tracker updated</strong> with current status, ship date, tracking, and next action.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>QuickBooks invoices</strong> triggered for anything received and verified against its PO.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Telegram summary</strong> sent to Aaron with the final PO status snapshot.</div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO · Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> ·
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> ·
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>