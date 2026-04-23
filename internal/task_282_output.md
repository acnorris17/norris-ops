<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inventory Order Follow-Up — Norris Utilities®</title>
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
      --nu-urgent: #C62828;
      --nu-warning: #E65100;
      --nu-success: #2E7D32;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.8;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 420px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.35);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
      text-shadow: 0 2px 15px rgba(0,0,0,0.3);
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ MAIN ══ */
    main {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 80px;
    }

    /* ══ PAGE TITLE ══ */
    .page-title-block {
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .breadcrumb {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-bottom: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .breadcrumb .chip {
      display: inline-block;
      background: var(--nu-urgent);
      color: var(--nu-white);
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.75rem;
      margin-right: 8px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .page-title span { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 800px;
    }

    /* ══ ACTION BANNER ══ */
    .action-banner {
      background: linear-gradient(135deg, #fff8e1 0%, #fffde7 100%);
      border-left: 6px solid var(--nu-warning);
      padding: 20px 26px;
      border-radius: 6px;
      margin-bottom: 36px;
      display: flex;
      align-items: center;
      gap: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .action-banner-icon {
      flex-shrink: 0;
      width: 44px; height: 44px;
      background: var(--nu-warning);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.4rem;
    }
    .action-banner-text strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 2px;
    }
    .action-banner-text span {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ SECTION TITLE ══ */
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 36px 0 18px;
      line-height: 1.2;
    }
    .section-title .lead { color: var(--nu-blue); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ CARDS ══ */
    .card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 20px;
    }
    .card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .card p { margin-bottom: 10px; }
    .card p:last-child { margin-bottom: 0; }

    /* ══ GRID ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .three-col {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    /* ══ STATUS BADGES ══ */
    .status-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 14px 0 6px;
    }
    .status {
      display: inline-flex;
      align-items: center;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .status-open { background: #fff3e0; color: var(--nu-warning); }
    .status-pending { background: #e3f2fd; color: var(--nu-blue); }
    .status-urgent { background: #ffebee; color: var(--nu-urgent); }
    .status-done { background: #e8f5e9; color: var(--nu-success); }

    /* ══ STEP LIST ══ */
    .step-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .step-list li {
      position: relative;
      padding: 16px 16px 16px 60px;
      margin-bottom: 12px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border-left: 4px solid var(--nu-blue);
    }
    .step-list li::before {
      counter-increment: step-counter;
      content: counter(step-counter);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 34px; height: 34px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .step-list { counter-reset: step-counter; }
    .step-list li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .step-list li span {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* ══ EMAIL TEMPLATE ══ */
    .email-template {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      margin-bottom: 20px;
      overflow: hidden;
    }
    .email-header {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .email-header-title {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.03em;
    }
    .email-header-type {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.75rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .email-meta {
      padding: 14px 22px;
      background: var(--nu-light-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .email-meta-row {
      display: flex;
      padding: 3px 0;
      gap: 8px;
    }
    .email-meta-label {
      font-weight: 900;
      color: var(--nu-dark-text);
      min-width: 70px;
    }
    .email-body {
      padding: 22px 26px;
      font-size: 0.95rem;
      line-height: 1.7;
    }
    .email-body p { margin-bottom: 14px; }
    .email-body ul { margin: 10px 0 14px 0; padding-left: 22px; list-style: none; }
    .email-body ul li { padding: 3px 0; position: relative; }
    .email-body ul li::before {
      content: '•';
      position: absolute;
      left: -18px;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .email-signature {
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* ══ INFO TABLE ══ */
    .info-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
    }
    .info-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 900;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .info-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .info-table tr:last-child td { border-bottom: none; }
    .info-table tr:nth-child(even) { background: var(--nu-light-gray); }

    /* ══ CALL OUT ══ */
    .callout {
      padding: 22px 26px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 5px solid;
    }
    .callout-blue {
      background: #e3f2fd;
      border-color: var(--nu-blue);
    }
    .callout-red {
      background: #ffebee;
      border-color: var(--nu-urgent);
    }
    .callout strong {
      display: block;
      font-weight: 900;
      margin-bottom: 6px;
      color: var(--nu-dark-text);
    }

    /* ══ BUTTON ══ */
    .btn {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 13px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      letter-spacing: 0.03em;
      margin: 8px 8px 8px 0;
      transition: all 0.2s ease;
    }
    .btn:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .btn-outline {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
      padding: 11px 26px;
    }
    .btn-outline:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
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
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-small {
      margin-top: 20px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 45px 20px 65px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      main { padding: 36px 20px 60px; }
      .page-title { font-size: 1.7rem; }
      .two-col, .three-col { grid-template-columns: 1fr; }
      .email-header { flex-direction: column; align-items: flex-start; }
      .info-table { font-size: 0.85rem; }
      .info-table th, .info-table td { padding: 10px 12px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
      .card, .email-template { box-shadow: none; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <main>

    <!-- PAGE TITLE -->
    <div class="page-title-block">
      <div class="breadcrumb"><span class="chip">ACTION ITEM</span> reMarkable · Inventory · Vendor Follow-Up</div>
      <h1 class="page-title">Follow Up on <span>Inventory Order</span> from Last PO</h1>
      <p class="page-subtitle">Anxiously waiting on our last purchase order. Need a firm ship date and tracking to keep customer commitments on track and rebuild working stock.</p>
    </div>

    <!-- ACTION BANNER -->
    <div class="action-banner">
      <div class="action-banner-icon">!</div>
      <div class="action-banner-text">
        <strong>OWNER: Aaron C. Norris — DUE TODAY (2026-04-23)</strong>
        <span>Send vendor follow-up email by 10:00 AM. Log response in master tracker. Update Caroline with ship date the moment it lands.</span>
      </div>
    </div>

    <!-- WHY THIS MATTERS -->
    <h2 class="section-title"><span class="lead">Why</span> <span class="rest">This Matters Right Now</span></h2>
    <div class="two-col">
      <div class="card">
        <h3>Customer Commitments Tied to This Stock</h3>
        <p>Open quotes and in-flight orders are counting on this PO landing. Every day it slips is a day customers are waiting — and a day our credibility is on the line.</p>
        <div class="status-row">
          <span class="status status-urgent">Customer Impact</span>
          <span class="status status-open">Revenue On Hold</span>
        </div>
      </div>
      <div class="card">
        <h3>Working Inventory Running Thin</h3>
        <p>Shop stock on standard SKUs (NU-BC-2851, NU-BC-2834) and supporting hardware is at reorder trigger. Without this PO, next walk-in or emergency order has nothing to pull from.</p>
        <div class="status-row">
          <span class="status status-pending">Stock Thin</span>
          <span class="status status-open">Reorder Window</span>
        </div>
      </div>
    </div>

    <!-- INFORMATION NEEDED -->
    <h2 class="section-title"><span class="lead">Information</span> <span class="rest">to Confirm from Vendor</span></h2>
    <table class="info-table">
      <thead>
        <tr>
          <th>Item to Confirm</th>
          <th>Why It Matters</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>PO acknowledgement</strong> — is the order in production or still queued?</td>
          <td>Tells us whether we have a real timeline or still waiting on raw materials.</td>
          <td><span class="status status-urgent">High</span></td>
        </tr>
        <tr>
          <td><strong>Firm ship date</strong> (not "end of month" — actual date)</td>
          <td>Customer commitments require calendar dates, not ranges. Used to update quotes.</td>
          <td><span class="status status-urgent">High</span></td>
        </tr>
        <tr>
          <td><strong>Carrier &amp; tracking</strong> number as soon as it ships</td>
          <td>Caroline adds to tracker the day it ships. Aaron relays to affected customers.</td>
          <td><span class="status status-open">Med</span></td>
        </tr>
        <tr>
          <td><strong>Quantity confirmation</strong> — full order or partial?</td>
          <td>Partial ships force allocation decisions. Must know before stock hits the dock.</td>
          <td><span class="status status-open">Med</span></td>
        </tr>
        <tr>
          <td><strong>Invoice terms &amp; due date</strong></td>
          <td>Keeps A/P timing clean. Net-30 vs. Net-15 changes cash flow plan.</td>
          <td><span class="status status-pending">Std</span></td>
        </tr>
        <tr>
          <td><strong>Back-order risk</strong> — any line items slipping a second round?</td>
          <td>Flags items to substitute or source elsewhere before customers notice.</td>
          <td><span class="status status-open">Med</span></td>
        </tr>
      </tbody>
    </table>

    <!-- STEPS -->
    <h2 class="section-title"><span class="lead">Step-by-Step</span> <span class="rest">Follow-Up Protocol</span></h2>
    <ol class="step-list">
      <li>
        <strong>Pull the PO file and confirm the exact order</strong>
        <span>Open the original PO (date, PO number, line items, dollar total). Confirm last vendor acknowledgement or lack thereof. No follow-up goes out without the PO number in hand.</span>
      </li>
      <li>
        <strong>Call the rep first — email second</strong>
        <span>A live call pulls a real answer faster than a queued email. If voicemail, leave a specific message: PO number, the four questions, and a callback window. Send the email immediately after as a written record.</span>
      </li>
      <li>
        <strong>Send the written follow-up (template below)</strong>
        <span>CC the appropriate secondary contact per vendor rules — Boss Products always CC Troy Gongwer + Thayne Grove; Samson Rope always CC Donna Poll + Sarah Daniels.</span>
      </li>
      <li>
        <strong>Log the outreach in the master tracker</strong>
        <span>Record date, contact, method, and the answer (or "awaiting response"). This is the audit trail when customers ask "where's my stuff?"</span>
      </li>
      <li>
        <strong>Set a hard 48-hour re-ping</strong>
        <span>If no vendor reply by Friday 2026-04-25 end of day, escalate: call again, copy the owner/VP level if needed. Silence is not an answer.</span>
      </li>
      <li>
        <strong>Propagate the update to Caroline &amp; affected customers</strong>
        <span>The moment a firm ship date lands, Caroline updates the customer-facing tracker and Aaron sends one-line status notes to customers whose orders depend on this PO.</span>
      </li>
    </ol>

    <!-- EMAIL TEMPLATE -->
    <h2 class="section-title"><span class="lead">Email</span> <span class="rest">Template — Ready to Send</span></h2>
    <div class="email-template">
      <div class="email-header">
        <div class="email-header-title">Vendor Follow-Up — Last PO Status</div>
        <div class="email-header-type">SEND TODAY</div>
      </div>
      <div class="email-meta">
        <div class="email-meta-row"><span class="email-meta-label">From:</span><span>Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</span></div>
        <div class="email-meta-row"><span class="email-meta-label">To:</span><span>[Vendor primary contact]</span></div>
        <div class="email-meta-row"><span class="email-meta-label">CC:</span><span>[Secondary contact per vendor rules] · Caroline Butler</span></div>
        <div class="email-meta-row"><span class="email-meta-label">Subject:</span><span>PO [#####] — Status Check &amp; Ship Date Request</span></div>
      </div>
      <div class="email-body">
        <p>[First Name] —</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;Checking in on PO [#####], placed on [date]. I have customer commitments tied to this order and need a firm ship date so I can keep them informed.</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;If y'all can confirm the following today, that'd be advantageous on our end:</p>

        <ul>
          <li>Order status — in production, queued, or shipped?</li>
          <li>Firm ship date (calendar date, not a window)</li>
          <li>Carrier and tracking number once available</li>
          <li>Full order vs. partial — any back-orders to flag?</li>
        </ul>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;Happy to jump on a quick call if easier. My cell is below.</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;Appreciate the update — we've got customers waiting and I want to earn the business by keeping my word to them.</p>

        <p>Sincerely,</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>

        <div class="email-signature">
          Aaron C. Norris<br>
          Founder &amp; CEO<br>
          Norris Utilities®, LLC<br>
          Cell: 205-500-1343<br>
          acnorris@norrisutilities.com
        </div>
      </div>
    </div>

    <!-- VENDOR CC RULES -->
    <div class="callout callout-blue">
      <strong>Vendor CC Rules — Don't Forget</strong>
      Boss Products: always CC Troy Gongwer + Thayne Grove. Samson Rope: always CC Donna Poll + Sarah Daniels. Skylift: Andrew Jarmoszuk + Dale Williams + Nick Jarmoszuk Jr. Bay Shore Systems: Andy Barron (primary), Herb Minatre (owner, escalation only).
    </div>

    <!-- BEFORE YOU SEND -->
    <h2 class="section-title"><span class="lead">Before</span> <span class="rest">You Hit Send — Checklist</span></h2>
    <div class="card">
      <ul class="checklist">
        <li>Exact PO number and date in the subject line</li>
        <li>Correct primary contact + secondary CC per vendor rule</li>
        <li>Caroline Butler on CC so she can update the tracker</li>
        <li>Four questions listed clearly, not buried in a paragraph</li>
        <li>Cell phone in signature for live call fallback</li>
        <li>No "just checking in" or "touching base" — direct language only</li>
        <li>Proof: read it aloud once before clicking send</li>
      </ul>
    </div>

    <!-- IF VENDOR SILENT -->
    <h2 class="section-title"><span class="lead">Escalation</span> <span class="rest">— If Vendor Goes Silent</span></h2>
    <div class="three-col">
      <div class="card">
        <h3>+24 Hours</h3>
        <p>Call rep's cell directly. Leave voicemail referencing the email and PO number. Log the call attempt in the tracker.</p>
      </div>
      <div class="card">
        <h3>+48 Hours</h3>
        <p>Re-send the email with "2nd Notice — Ship Date Needed" in the subject. Add owner/VP to CC line.</p>
      </div>
      <div class="card">
        <h3>+72 Hours</h3>
        <p>Escalate to vendor leadership. Begin parallel sourcing on critical line items so customer commitments are not left exposed.</p>
      </div>
    </div>

    <div class="callout callout-red">
      <strong>Do Not Promise a Customer a Date Until the Vendor Gives One</strong>
      A guessed date that slips is worse than no date. Tell customers "confirming with vendor today, I'll have a ship date back to you within 24 hours" — and then actually deliver that update, even if the answer is "still waiting."
    </div>

    <!-- ACTION BUTTONS -->
    <h2 class="section-title"><span class="lead">Quick</span> <span class="rest">Actions</span></h2>
    <div>
      <a href="tel:2055001343" class="btn">Call From Cell</a>
      <a href="mailto:?subject=PO%20Status%20Check" class="btn btn-outline">Start Email</a>
      <a href="#" class="btn btn-outline">Open Master Tracker</a>
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
    <div class="nu-footer-small">
      Norris Utilities® and A Legacy of Commitment® are registered trademarks of Norris Utilities, LLC. Phoenix Icon® is a registered trademark of Norris Utilities, LLC.
    </div>
  </footer>

</body>
</html>