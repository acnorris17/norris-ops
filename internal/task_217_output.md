<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ship Out — Chad Brink Order — Norris Utilities®</title>
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
      --nu-red: #D42F2F;
      --nu-green: #1B8A3A;
      --nu-amber: #E89A2B;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      opacity: 0.95;
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
      font-weight: 700;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      margin-right: -0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* WATERMARK PHOENIX BEHIND HEADER */
    .nu-header-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 420px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 80px;
    }
    .nu-container {
      max-width: 1120px;
      margin: 0 auto;
      padding: 50px 40px 20px;
    }

    /* TASK META BAR */
    .task-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
      margin-bottom: 28px;
    }
    .task-pill {
      display: inline-flex;
      align-items: center;
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .task-pill.priority {
      background: var(--nu-red);
      color: var(--nu-white);
    }
    .task-pill.source {
      background: var(--nu-medium-gray);
      color: var(--nu-dark-text);
    }
    .task-pill.owner {
      background: rgba(0,0,255,0.08);
      color: var(--nu-blue);
      border: 1px solid rgba(0,0,255,0.25);
    }
    .task-pill.date {
      background: transparent;
      color: var(--nu-body-text);
      border: 1px solid var(--nu-medium-gray);
    }

    /* PAGE TITLE */
    h1.page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.15;
    }
    h1.page-title .title-accent {
      color: var(--nu-blue);
    }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      max-width: 760px;
    }

    /* SECTION HEADER */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 36px 0 16px;
      line-height: 1.2;
    }
    .nu-section-title .accent { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }
    .nu-card.highlight {
      border-left: 5px solid var(--nu-blue);
    }

    /* ORDER SUMMARY GRID */
    .order-grid {
      display: grid;
      grid-template-columns: 220px 1fr;
      gap: 10px 22px;
      font-size: 0.98rem;
    }
    .order-grid dt {
      font-weight: 700;
      color: var(--nu-dark-text);
      text-transform: uppercase;
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      padding-top: 3px;
    }
    .order-grid dd {
      color: var(--nu-body-text);
    }
    .order-grid dd strong {
      color: var(--nu-dark-text);
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      counter-reset: stepcounter;
      margin: 8px 0;
    }
    .checklist li {
      counter-increment: stepcounter;
      position: relative;
      padding: 14px 16px 14px 60px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border-left: 4px solid var(--nu-cyan);
      font-size: 0.98rem;
    }
    .checklist li::before {
      content: counter(stepcounter);
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 34px;
      height: 34px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .checklist li strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 3px;
    }
    .checklist li .detail {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* BADGES / CHEVRON */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-right: 8px;
    }

    /* SHIPPING TABLE */
    table.ship-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 6px;
      font-size: 0.95rem;
    }
    table.ship-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      padding: 10px 14px;
      font-size: 0.8rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    table.ship-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.ship-table tr:last-child td { border-bottom: none; }
    table.ship-table td.label { font-weight: 700; color: var(--nu-dark-text); width: 210px; }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.08) 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 18px 0;
      font-size: 0.98rem;
    }
    .callout strong { color: var(--nu-blue); }

    .callout.warn {
      background: rgba(232, 154, 43, 0.08);
      border-left-color: var(--nu-amber);
    }
    .callout.warn strong { color: var(--nu-amber); }

    /* TWO-COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    /* SIGN-OFF */
    .signoff {
      background: var(--nu-white);
      border: 2px dashed var(--nu-blue);
      border-radius: 10px;
      padding: 24px;
      margin-top: 12px;
    }
    .signoff h3 {
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 10px;
      font-size: 1.15rem;
    }
    .signoff ul {
      list-style: none;
    }
    .signoff li {
      padding: 8px 0 8px 30px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .signoff li:last-child { border-bottom: none; }
    .signoff li::before {
      content: '';
      position: absolute;
      left: 0; top: 12px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
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
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-name {
      font-weight: 700;
      color: var(--nu-white);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; margin-right: -0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 32px 20px 10px; }
      h1.page-title { font-size: 1.7rem; }
      .order-grid { grid-template-columns: 1fr; gap: 4px 0; }
      .order-grid dt { padding-top: 10px; }
      .two-col { grid-template-columns: 1fr; }
      table.ship-table td.label { width: auto; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon®">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- META -->
      <div class="task-meta">
        <span class="task-pill priority">Action Required</span>
        <span class="task-pill source">Source: reMarkable</span>
        <span class="task-pill owner">Owner: Aaron C. Norris</span>
        <span class="task-pill date">Opened: 2026-04-16</span>
      </div>

      <h1 class="page-title"><span class="title-accent">Ship Out —</span> Chad Brink Order</h1>
      <p class="page-subtitle">
        Close out the outstanding Chad Brink order: confirm SKUs and quantity, finalize shipping charges
        using Ben's Formula, hand off to CB for pack &amp; label, send tracking to Chad, and invoice in QuickBooks.
      </p>

      <!-- ORDER SUMMARY -->
      <h2 class="nu-section-title"><span class="accent">Order</span> <span class="rest">Summary</span></h2>
      <div class="nu-card highlight">
        <dl class="order-grid">
          <dt>Customer</dt>
          <dd><strong>Chad Brink</strong></dd>

          <dt>Item(s)</dt>
          <dd>FlexPro Armor Bucket Cover — SKU &amp; quantity to be confirmed against Chad's written order before packing</dd>

          <dt>Ship-To Address</dt>
          <dd>Confirm with Chad in writing before label creation — do not use any prior address from memory without verification</dd>

          <dt>Carrier</dt>
          <dd>UPS Ground (default) — upgrade if Chad requests expedited service</dd>

          <dt>Pricing Basis</dt>
          <dd>FlexPro Armor at 50% margin (<strong>Cost ÷ 0.50</strong>)</dd>

          <dt>Shipping Formula</dt>
          <dd>Customer Shipping = <strong>ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)</strong> — Ben's Formula</dd>

          <dt>Status</dt>
          <dd>Ready to pack once SKU, quantity, and ship-to are confirmed</dd>
        </dl>
      </div>

      <!-- SHIP-OUT CHECKLIST -->
      <h2 class="nu-section-title"><span class="accent">Ship-Out</span> <span class="rest">Checklist</span></h2>
      <ol class="checklist">
        <li>
          <strong>Confirm the order in writing</strong>
          <span class="detail">Pull Chad's latest email or text. Verify exact SKU (NU-BC-2851, NU-BC-2834, NU-BC-2851-C, or NU-BC-2834-C), quantity, and ship-to address. No assumptions.</span>
        </li>
        <li>
          <strong>Verify stock on hand</strong>
          <span class="detail">Check inventory for the confirmed SKU/quantity. If short, flag immediately — do not promise a ship date until FlexPro Armor confirms availability.</span>
        </li>
        <li>
          <strong>Pull regular shipping cost</strong>
          <span class="detail">Quote UPS Ground from origin to Chad's ZIP code. Record "RegCost" exactly as quoted — this is the input to Ben's Formula.</span>
        </li>
        <li>
          <strong>Calculate customer shipping charge</strong>
          <span class="detail">CustomerShip = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0). Round the raw cost up first, then apply 10%, then round up again.</span>
        </li>
        <li>
          <strong>Hand off to CB for pack &amp; label</strong>
          <span class="detail">Caroline Butler prepares the carton, prints the UPS label, and adds "Shipping" as its own line item on the invoice (not rolled into product price).</span>
        </li>
        <li>
          <strong>Send tracking number to Chad</strong>
          <span class="detail">Short email: greeting "Chad —", one line confirming shipment, UPS tracking link, expected delivery date, then "Sincerely," / "Aaron C. Norris" block. No filler.</span>
        </li>
        <li>
          <strong>Invoice in QuickBooks the same day</strong>
          <span class="detail">Create the invoice immediately after the label prints. Shipping is its own line. Mark the order "Invoiced" in the master tracker with date and invoice number.</span>
        </li>
        <li>
          <strong>Log in the open-invoices file</strong>
          <span class="detail">Add Chad Brink to open-invoices until payment clears. Clear it off once funds post — shipments that aren't invoiced are revenue already earned but not collected.</span>
        </li>
      </ol>

      <!-- PRICING WORKSHEET -->
      <h2 class="nu-section-title"><span class="accent">Pricing</span> <span class="rest">Worksheet</span></h2>
      <div class="nu-card">
        <table class="ship-table">
          <thead>
            <tr><th style="width: 230px;">Line</th><th>Rule / Value</th></tr>
          </thead>
          <tbody>
            <tr><td class="label">FlexPro Armor margin</td><td>50% — Customer price = Cost ÷ 0.50</td></tr>
            <tr><td class="label">Customer channel</td><td>Direct (full price). Adjust only if Chad is set up as a Dealer (30% off) or Distributor (40% off) in the customer record.</td></tr>
            <tr><td class="label">Shipping input (RegCost)</td><td>UPS Ground quote, origin to Chad's ship-to ZIP, confirmed on the day of the label print</td></tr>
            <tr><td class="label">Ben's Shipping Formula</td><td><strong>ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)</strong></td></tr>
            <tr><td class="label">Worked example</td><td>If RegCost = $42.35 → ROUNDUP(42.35) = 43 → 43 × 1.10 = 47.30 → ROUNDUP(47.30) = <strong>$48.00 charged to Chad</strong></td></tr>
            <tr><td class="label">Shipping on invoice</td><td>Separate line item labeled "Shipping" — never bury it in the product price</td></tr>
          </tbody>
        </table>
      </div>

      <!-- CONFIRMATION EMAIL -->
      <h2 class="nu-section-title"><span class="accent">Confirmation</span> <span class="rest">Email Template</span></h2>
      <div class="nu-card">
        <div class="nu-badge">Send after label prints</div>
        <div style="background: var(--nu-light-gray); padding: 20px; border-radius: 8px; font-family: Georgia, serif; line-height: 1.8; margin-top: 14px;">
          <p><strong>Subject:</strong> Your order is on the way — tracking inside</p>
          <p style="margin-top: 12px;">Chad —</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Your FlexPro Armor order shipped today via UPS Ground.</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Tracking: [UPS tracking number + link]<br>
          &nbsp;&nbsp;&nbsp;&nbsp;Expected delivery: [date from UPS estimate]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Invoice is on its way separately. Let me know the second it lands so we know it made it safely.</p>
          <p>Sincerely,</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris<br>
          &nbsp;&nbsp;&nbsp;&nbsp;Founder &amp; CEO<br>
          &nbsp;&nbsp;&nbsp;&nbsp;Norris Utilities, LLC<br>
          &nbsp;&nbsp;&nbsp;&nbsp;Cell: 205-500-1343<br>
          &nbsp;&nbsp;&nbsp;&nbsp;acnorris@norrisutilities.com</p>
        </div>
      </div>

      <!-- TWO COLUMN -->
      <div class="two-col">
        <div>
          <h2 class="nu-section-title"><span class="accent">Do</span> <span class="rest">Now</span></h2>
          <div class="nu-card">
            <ul style="list-style: none; padding-left: 0;">
              <li style="padding: 8px 0; border-bottom: 1px solid var(--nu-medium-gray);">• Confirm SKU, quantity, and ship-to in writing</li>
              <li style="padding: 8px 0; border-bottom: 1px solid var(--nu-medium-gray);">• Pull UPS Ground RegCost for the ship-to ZIP</li>
              <li style="padding: 8px 0; border-bottom: 1px solid var(--nu-medium-gray);">• Apply Ben's Formula to set customer shipping</li>
              <li style="padding: 8px 0;">• Hand packing + label off to CB</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 class="nu-section-title"><span class="accent">Do</span> <span class="rest">Same Day</span></h2>
          <div class="nu-card">
            <ul style="list-style: none; padding-left: 0;">
              <li style="padding: 8px 0; border-bottom: 1px solid var(--nu-medium-gray);">• Send tracking email to Chad</li>
              <li style="padding: 8px 0; border-bottom: 1px solid var(--nu-medium-gray);">• Create QuickBooks invoice (shipping as its own line)</li>
              <li style="padding: 8px 0; border-bottom: 1px solid var(--nu-medium-gray);">• Mark order "Invoiced" in master tracker</li>
              <li style="padding: 8px 0;">• Add Chad to open-invoices until paid</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CALLOUTS -->
      <div class="callout warn">
        <strong>Do not ship unverified.</strong> Confirm SKU, quantity, and ship-to address directly from Chad's written communication before CB touches a label. A wrong address is a revenue leak and a trust hit.
      </div>

      <div class="callout">
        <strong>Invoice the same day the label prints.</strong> Shipments that aren't invoiced are revenue already earned but not collected. QuickBooks entry, tracker update, and open-invoices log happen together — not later.
      </div>

      <!-- SIGN-OFF -->
      <h2 class="nu-section-title"><span class="accent">Completion</span> <span class="rest">Sign-Off</span></h2>
      <div class="signoff">
        <h3>Mark this task done only after all of the following are true</h3>
        <ul>
          <li>SKU, quantity, and ship-to were confirmed in writing with Chad</li>
          <li>Customer shipping charge was calculated via Ben's Formula and recorded</li>
          <li>UPS label printed and package handed to the carrier</li>
          <li>Tracking email sent to Chad with expected delivery date</li>
          <li>QuickBooks invoice created with shipping as its own line item</li>
          <li>Master tracker updated to "Invoiced" with date and invoice number</li>
          <li>Chad added to open-invoices file until payment clears</li>
        </ul>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <span class="nu-footer-name">Aaron C. Norris</span>, Founder &amp; CEO<br>
      Norris Utilities®, LLC · Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>