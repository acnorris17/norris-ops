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
      --nu-alert-red: #C62828;
      --nu-alert-amber: #F57C00;
      --nu-success-green: #2E7D32;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.04em;
    }

    /* ═══ CHEVRON TRANSITION ═══ */
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

    /* ═══ PAGE BANNER ═══ */
    .page-banner {
      background: var(--nu-white);
      padding: 40px 40px 30px;
      text-align: center;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .page-kicker {
      display: inline-block;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 6px 18px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .page-title span {
      color: var(--nu-blue);
    }
    .page-subtitle {
      font-size: 1.05rem;
      color: #555;
      max-width: 720px;
      margin: 0 auto;
      font-weight: 400;
    }
    .page-meta {
      display: inline-flex;
      align-items: center;
      gap: 16px;
      margin-top: 18px;
      padding: 10px 22px;
      background: var(--nu-light-gray);
      border-radius: 30px;
      font-size: 0.85rem;
      color: #555;
      flex-wrap: wrap;
      justify-content: center;
    }
    .page-meta strong {
      color: var(--nu-dark-text);
    }
    .page-meta .dot {
      width: 6px;
      height: 6px;
      background: var(--nu-cyan);
      border-radius: 50%;
    }

    /* ═══ MAIN CONTENT ═══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 40px 60px;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* ═══ PRIORITY ALERT STRIP ═══ */
    .alert-strip {
      background: linear-gradient(135deg, #fff4e6 0%, #ffe8cc 100%);
      border-left: 6px solid var(--nu-alert-amber);
      padding: 22px 28px;
      border-radius: 8px;
      margin-bottom: 36px;
      display: flex;
      align-items: center;
      gap: 20px;
      box-shadow: 0 2px 10px rgba(245, 124, 0, 0.12);
    }
    .alert-icon {
      width: 48px;
      height: 48px;
      background: var(--nu-alert-amber);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 900;
      flex-shrink: 0;
    }
    .alert-text strong {
      display: block;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 3px;
      font-weight: 900;
      letter-spacing: 0.03em;
    }
    .alert-text span {
      font-size: 0.92rem;
      color: #5a4a2a;
    }

    /* ═══ SECTION TITLES ═══ */
    .section-title {
      font-weight: 900;
      font-size: 1.45rem;
      color: var(--nu-dark-text);
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .section-title::before {
      content: '';
      width: 6px;
      height: 24px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 3px;
    }
    .section-title .first-word {
      color: var(--nu-blue);
    }

    /* ═══ STATUS GRID ═══ */
    .status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 18px;
      margin-bottom: 40px;
    }
    .status-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .status-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .status-card.amber { border-top-color: var(--nu-alert-amber); }
    .status-card.cyan { border-top-color: var(--nu-cyan); }
    .status-card.navy { border-top-color: var(--nu-navy); }
    .status-card-label {
      font-size: 0.72rem;
      font-weight: 900;
      color: #888;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .status-card-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      line-height: 1.2;
    }
    .status-card-detail {
      font-size: 0.88rem;
      color: #666;
      line-height: 1.5;
    }

    /* ═══ ACTION PLAN ═══ */
    .action-plan {
      background: var(--nu-white);
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      margin-bottom: 40px;
    }
    .action-list {
      list-style: none;
      counter-reset: step-counter;
    }
    .action-item {
      counter-increment: step-counter;
      position: relative;
      padding: 18px 0 18px 68px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .action-item:last-child {
      border-bottom: none;
    }
    .action-item::before {
      content: counter(step-counter);
      position: absolute;
      left: 0;
      top: 18px;
      width: 46px;
      height: 46px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      font-weight: 900;
      box-shadow: 0 3px 8px rgba(0,0,255,0.25);
    }
    .action-title {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .action-desc {
      font-size: 0.93rem;
      color: #555;
      line-height: 1.6;
    }
    .action-desc strong {
      color: var(--nu-dark-text);
    }

    /* ═══ CALL SCRIPT BOX ═══ */
    .script-box {
      background: linear-gradient(135deg, #f8fafe 0%, #eef4fc 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 10px;
      padding: 28px;
      margin-bottom: 40px;
      position: relative;
    }
    .script-box::before {
      content: '"';
      position: absolute;
      top: -10px;
      left: 20px;
      font-family: Georgia, serif;
      font-size: 4rem;
      color: var(--nu-blue);
      line-height: 1;
      background: var(--nu-light-gray);
      padding: 0 12px;
    }
    .script-label {
      font-size: 0.72rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 14px;
      padding-left: 32px;
    }
    .script-text {
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.75;
      font-style: italic;
    }
    .script-text p {
      margin-bottom: 14px;
    }
    .script-text p:last-child { margin-bottom: 0; }

    /* ═══ TWO COLUMN GRID ═══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 40px;
    }
    .panel {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .panel-title {
      font-size: 0.95rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .panel ul {
      list-style: none;
    }
    .panel li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.93rem;
      color: #444;
      line-height: 1.55;
    }
    .panel li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
    }
    .panel li strong {
      color: var(--nu-dark-text);
    }

    /* ═══ ESCALATION LADDER ═══ */
    .escalation {
      background: var(--nu-white);
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 40px;
    }
    .esc-row {
      display: grid;
      grid-template-columns: 100px 1fr;
      gap: 20px;
      padding: 16px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      align-items: center;
    }
    .esc-row:last-child { border-bottom: none; }
    .esc-day {
      font-weight: 900;
      color: var(--nu-white);
      background: var(--nu-blue);
      padding: 10px 8px;
      border-radius: 6px;
      text-align: center;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
    }
    .esc-row:nth-child(1) .esc-day { background: var(--nu-success-green); }
    .esc-row:nth-child(2) .esc-day { background: var(--nu-blue); }
    .esc-row:nth-child(3) .esc-day { background: var(--nu-alert-amber); }
    .esc-row:nth-child(4) .esc-day { background: var(--nu-alert-red); }

    .esc-content strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .esc-content span {
      font-size: 0.9rem;
      color: #555;
    }

    /* ═══ CTA BAR ═══ */
    .cta-bar {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000099 50%, var(--nu-blue) 100%);
      border-radius: 12px;
      padding: 36px;
      color: var(--nu-white);
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 4px 20px rgba(0,0,51,0.25);
    }
    .cta-bar h3 {
      font-size: 1.4rem;
      font-weight: 900;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .cta-bar p {
      font-size: 1rem;
      opacity: 0.9;
      margin-bottom: 22px;
    }
    .cta-buttons {
      display: flex;
      gap: 14px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      letter-spacing: 0.03em;
      transition: all 0.2s ease;
    }
    .btn-primary {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .btn-primary:hover {
      background: var(--nu-white);
      transform: translateY(-2px);
      box-shadow: 0 4px 14px rgba(6, 208, 255, 0.35);
    }
    .btn-outline {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }
    .btn-outline:hover {
      background: var(--nu-white);
      color: var(--nu-navy);
    }

    /* ═══ FOOTER ═══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact strong {
      color: var(--nu-white);
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    /* ═══ RESPONSIVE ═══ */
    @media (max-width: 768px) {
      .nu-header { padding: 45px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .page-banner { padding: 28px 20px 22px; }
      .page-title { font-size: 1.55rem; }
      .nu-content-area { padding: 30px 20px 40px; }
      .two-col { grid-template-columns: 1fr; }
      .action-plan { padding: 22px 18px; }
      .action-item { padding-left: 58px; }
      .action-item::before { width: 40px; height: 40px; font-size: 1.1rem; }
      .esc-row { grid-template-columns: 1fr; gap: 8px; }
      .esc-day { text-align: left; padding: 6px 10px; display: inline-block; }
      .cta-bar { padding: 26px 20px; }
      .nu-footer { padding: 32px 20px; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- PAGE BANNER -->
  <section class="page-banner">
    <div class="page-kicker">Action Item • reMarkable Follow-Up</div>
    <h1 class="page-title"><span>Follow Up</span> on Inventory Order from Last PO</h1>
    <p class="page-subtitle">Anxiously waiting on the last purchase order. Vendor contact, shipment status, and invoicing readiness all need confirmation before customer commitments slip.</p>
    <div class="page-meta">
      <span><strong>Opened:</strong> 2026-04-22</span>
      <span class="dot"></span>
      <span><strong>Owner:</strong> Aaron C. Norris</span>
      <span class="dot"></span>
      <span><strong>Priority:</strong> High</span>
      <span class="dot"></span>
      <span><strong>Source:</strong> reMarkable</span>
    </div>
  </section>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ALERT -->
      <div class="alert-strip">
        <div class="alert-icon">!</div>
        <div class="alert-text">
          <strong>Inventory is blocking downstream commitments.</strong>
          <span>Until the last PO ships and is received, FlexPro Armor stock is constrained and customer quotes cannot be firmed. Close this loop today.</span>
        </div>
      </div>

      <!-- STATUS GRID -->
      <h2 class="section-title"><span class="first-word">Order</span> Snapshot</h2>
      <div class="status-grid">
        <div class="status-card">
          <div class="status-card-label">Order Status</div>
          <div class="status-card-value">Awaiting Ship Date</div>
          <div class="status-card-detail">Last confirmed PO has not been updated with a ship/delivery ETA.</div>
        </div>
        <div class="status-card amber">
          <div class="status-card-label">Days Since Last Contact</div>
          <div class="status-card-value">Pending Confirm</div>
          <div class="status-card-detail">Verify last email/call timestamp before dialing vendor.</div>
        </div>
        <div class="status-card cyan">
          <div class="status-card-label">Customer Impact</div>
          <div class="status-card-value">Quotes Pending</div>
          <div class="status-card-detail">Bucket cover quotes awaiting confirmed inventory before commit.</div>
        </div>
        <div class="status-card navy">
          <div class="status-card-label">Next Checkpoint</div>
          <div class="status-card-value">Today — 4 PM CT</div>
          <div class="status-card-detail">Vendor callback expected, or escalate per ladder below.</div>
        </div>
      </div>

      <!-- ACTION PLAN -->
      <h2 class="section-title"><span class="first-word">Action</span> Plan</h2>
      <div class="action-plan">
        <ol class="action-list">
          <li class="action-item">
            <div class="action-title">Pull the PO from records</div>
            <div class="action-desc">Locate the last purchase order — PDF + email thread. Confirm <strong>PO number, order date, SKU mix, quantities, and dollar amount</strong>. Note who at the vendor confirmed the order.</div>
          </li>
          <li class="action-item">
            <div class="action-title">Call the vendor rep directly</div>
            <div class="action-desc">Phone beats email here. Ask for <strong>production status, shipment date, carrier, and tracking</strong>. Do not accept "soon" — get a dated commitment.</div>
          </li>
          <li class="action-item">
            <div class="action-title">CC the full contact list on follow-up email</div>
            <div class="action-desc">For BOSS Products: CC <strong>Troy Gongwer + Thayne Grove</strong>. For Samson Rope: CC <strong>Donna Poll + Sarah Daniels</strong>. Never single-thread with one rep on inventory.</div>
          </li>
          <li class="action-item">
            <div class="action-title">Confirm receiving readiness</div>
            <div class="action-desc">Check inbound dock / warehouse: space cleared, labels prepped, QuickBooks receipt template ready. Pre-stage so there is no delay between truck arrival and customer fulfillment.</div>
          </li>
          <li class="action-item">
            <div class="action-title">Update master tracker and notify CB</div>
            <div class="action-desc">Log ETA in the master tracker with confirmed ship/receive dates. Brief <strong>Caroline Butler</strong> so any downstream customer emails reference an accurate timeline — not a guess.</div>
          </li>
          <li class="action-item">
            <div class="action-title">Re-quote held customers</div>
            <div class="action-desc">Once inventory is confirmed in-transit, release any held quotes. FlexPro Armor margin stays at 50%. Shipping per Ben's formula: <strong>ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)</strong>.</div>
          </li>
        </ol>
      </div>

      <!-- CALL SCRIPT -->
      <h2 class="section-title"><span class="first-word">Vendor</span> Call Script</h2>
      <div class="script-box">
        <div class="script-label">Opening line — keep it short, warm, direct</div>
        <div class="script-text">
          <p>Hey [Rep] — Aaron with Norris Utilities. I'm checking on PO [number] we placed on [date]. I've got customers that are ready to move and I want to give them a real date.</p>
          <p>Where is the order in production right now, and when can we expect it to ship? If it's already on a truck, can you shoot me the tracking so I can plan receiving on this end?</p>
          <p>Appreciate you jumping on this — I'll stay by the phone, and I'll send a confirmation email right after we hang up so Troy and Thayne are in the loop.</p>
        </div>
      </div>

      <!-- TWO COLUMN: INFO TO CAPTURE + RED FLAGS -->
      <div class="two-col">
        <div class="panel">
          <div class="panel-title">Information to Capture</div>
          <ul>
            <li><strong>PO number</strong> and original order date</li>
            <li><strong>SKU + quantity</strong> confirmation line-by-line</li>
            <li><strong>Ship date</strong> — dated commitment, not "soon"</li>
            <li><strong>Carrier + tracking number</strong> once shipped</li>
            <li><strong>Expected receive date</strong> at Birmingham</li>
            <li><strong>Freight cost</strong> confirmation for Ben's formula</li>
            <li><strong>Any back-ordered lines</strong> or substitutions</li>
            <li><strong>Invoice terms</strong> — Net 30 vs. at-shipment</li>
          </ul>
        </div>
        <div class="panel">
          <div class="panel-title">Red Flags — Escalate Immediately</div>
          <ul>
            <li>Rep <strong>cannot locate</strong> the PO in their system</li>
            <li>Ship date pushed <strong>more than 5 business days</strong> past original</li>
            <li>Any line item switched to <strong>back-order</strong> without notice</li>
            <li>Pricing on confirmation <strong>differs from the quote</strong></li>
            <li>Rep asks to <strong>split the shipment</strong> without discussing freight</li>
            <li>No written confirmation within <strong>24 hours</strong> of the call</li>
          </ul>
        </div>
      </div>

      <!-- ESCALATION LADDER -->
      <h2 class="section-title"><span class="first-word">Escalation</span> Ladder</h2>
      <div class="escalation">
        <div class="esc-row">
          <div class="esc-day">DAY 0</div>
          <div class="esc-content">
            <strong>Phone call + confirmation email to primary rep</strong>
            <span>Log call outcome in master tracker. Set follow-up reminder for 24 hours if no written reply.</span>
          </div>
        </div>
        <div class="esc-row">
          <div class="esc-day">DAY 1</div>
          <div class="esc-content">
            <strong>Second email — CC both primary contacts</strong>
            <span>BOSS: Troy + Thayne. Samson: Donna + Sarah. Reference PO number and request ship date in writing.</span>
          </div>
        </div>
        <div class="esc-row">
          <div class="esc-day">DAY 2-3</div>
          <div class="esc-content">
            <strong>Escalate to senior account contact</strong>
            <span>Polite but firm. Note customer commitments at risk. Request production floor update, not a sales-desk guess.</span>
          </div>
        </div>
        <div class="esc-row">
          <div class="esc-day">DAY 4+</div>
          <div class="esc-content">
            <strong>Owner-level contact + activate backup sourcing</strong>
            <span>For BOSS: Herb Minatre / Andy Barron level. Begin side-channel conversation on alternate stock to protect customer delivery dates.</span>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-bar">
        <h3>Close the loop today — don't let the waiting drift.</h3>
        <p>A dated ship commitment in writing is the finish line. Anything less stays on tomorrow's list.</p>
        <div class="cta-buttons">
          <a href="tel:2055001343" class="btn btn-primary">Log Call Outcome</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=PO%20Follow-Up%20Update" class="btn btn-outline">Email Master Tracker Update</a>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>