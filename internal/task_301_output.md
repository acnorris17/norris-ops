<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Follow Up on Inventory Order from Last PO — Norris Utilities®</title>
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
      --nu-warning: #C9A84C;
      --nu-success: #2A8C4A;
      --nu-alert: #B83232;
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
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
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* MAIN */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 0;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 30%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
      z-index: 1;
    }

    /* TITLE BLOCK */
    .action-banner {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 28px 36px;
      border-radius: 10px;
      margin-bottom: 36px;
      display: flex;
      align-items: center;
      gap: 22px;
      box-shadow: 0 6px 20px rgba(0,0,51,0.18);
    }
    .action-banner-icon {
      width: 56px;
      height: 56px;
      flex-shrink: 0;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 1.6rem;
    }
    .action-banner-content { flex: 1; min-width: 0; }
    .action-banner-label {
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .action-banner-title {
      font-size: 1.55rem;
      font-weight: 900;
      line-height: 1.25;
      letter-spacing: -0.005em;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 36px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* META BAR */
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin-bottom: 36px;
    }
    .meta-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 14px 18px;
    }
    .meta-card.priority { border-left-color: var(--nu-alert); }
    .meta-card.owner { border-left-color: var(--nu-cyan); }
    .meta-card.status { border-left-color: var(--nu-warning); }
    .meta-label {
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #666;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .meta-value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* OBJECTIVE BOX */
    .objective-box {
      background: linear-gradient(135deg, #f0f4ff 0%, #e6f4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 24px 28px;
      border-radius: 8px;
      margin-bottom: 36px;
    }
    .objective-box p {
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }

    /* CHEVRON BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* STEP LIST */
    .step-list {
      list-style: none;
      counter-reset: step;
    }
    .step-list li {
      position: relative;
      padding: 18px 22px 18px 70px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      margin-bottom: 12px;
      counter-increment: step;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .step-list li:hover {
      transform: translateX(2px);
      box-shadow: 0 4px 14px rgba(0,0,0,0.06);
    }
    .step-list li::before {
      content: counter(step);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 38px;
      height: 38px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .step-list .step-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1.02rem;
    }
    .step-list .step-detail {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* PO TABLE */
    .po-table-wrapper {
      overflow-x: auto;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      background: var(--nu-white);
    }
    .po-table {
      width: 100%;
      border-collapse: collapse;
      min-width: 600px;
    }
    .po-table thead {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .po-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .po-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .po-table tbody tr:last-child td { border-bottom: none; }
    .po-table tbody tr:nth-child(even) { background: #fafbfd; }
    .po-table .col-label {
      font-weight: 700;
      color: var(--nu-blue);
      width: 32%;
    }

    /* CONTACT GRID */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .contact-name {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .contact-role {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 12px;
      font-style: italic;
    }
    .contact-detail {
      font-size: 0.9rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .contact-detail strong { color: var(--nu-blue); }

    /* SCRIPT BLOCK */
    .script-block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-cyan);
      padding: 24px 28px;
      border-radius: 8px;
      font-style: italic;
      color: var(--nu-dark-text);
      line-height: 1.75;
    }
    .script-block p { margin-bottom: 12px; }
    .script-block p:last-child { margin-bottom: 0; font-style: normal; font-weight: 700; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
    }
    .checklist li {
      padding: 12px 16px 12px 42px;
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 8px;
      font-size: 0.97rem;
      color: var(--nu-dark-text);
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* OUTCOME GRID */
    .outcome-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .outcome-card {
      padding: 20px 22px;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      background: var(--nu-white);
    }
    .outcome-card.go { border-top: 4px solid var(--nu-success); }
    .outcome-card.delay { border-top: 4px solid var(--nu-warning); }
    .outcome-card.silent { border-top: 4px solid var(--nu-alert); }
    .outcome-title {
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 8px;
      color: var(--nu-dark-text);
    }
    .outcome-action {
      font-size: 0.92rem;
      color: var(--nu-body-text);
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
      font-weight: 300;
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
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 230px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px; }
      .action-banner { flex-direction: column; align-items: flex-start; padding: 22px; }
      .action-banner-title { font-size: 1.25rem; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .step-list li { padding: 16px 18px 16px 60px; }
      .nu-footer-contact { font-size: 0.92rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step-list li, .nu-card, .contact-card { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ACTION BANNER -->
      <div class="action-banner">
        <div class="action-banner-icon">!</div>
        <div class="action-banner-content">
          <div class="action-banner-label">reMarkable Action Item • 2026-04-22</div>
          <div class="action-banner-title">Follow Up on Inventory Order from Last PO</div>
        </div>
      </div>

      <!-- META GRID -->
      <div class="meta-grid">
        <div class="meta-card priority">
          <div class="meta-label">Priority</div>
          <div class="meta-value">High</div>
        </div>
        <div class="meta-card owner">
          <div class="meta-label">Owner</div>
          <div class="meta-value">Aaron C. Norris</div>
        </div>
        <div class="meta-card status">
          <div class="meta-label">Status</div>
          <div class="meta-value">Open — Action Required</div>
        </div>
        <div class="meta-card">
          <div class="meta-label">Source</div>
          <div class="meta-value">reMarkable Capture</div>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <div class="objective-box">
        <p><strong>Objective:</strong> Confirm the production status, ship date, and tracking for the inventory items on the most recent purchase order so that we can update the customer-facing tracker, schedule fulfillment, and protect downstream commitments. Silence on a PO is the single biggest source of margin erosion — close the loop today.</p>
      </div>

      <!-- SECTION 1: PO IDENTIFICATION -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Step 1 — Identify</span> the Last PO</h2>
        <div class="po-table-wrapper">
          <table class="po-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Where to Find It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="col-label">PO Number</td>
                <td>Master Tracker → Inventory tab → most recent row with status "Ordered" or "In Production"</td>
              </tr>
              <tr>
                <td class="col-label">Vendor</td>
                <td>Same row — confirm the vendor name (FlexPro Armor, Skylift, Samson Rope, BSS, BOSS, etc.)</td>
              </tr>
              <tr>
                <td class="col-label">PO Date</td>
                <td>Date the PO was issued — needed to calculate days outstanding</td>
              </tr>
              <tr>
                <td class="col-label">Promised Ship Date</td>
                <td>Vendor confirmation email or ship-date field on the PO record</td>
              </tr>
              <tr>
                <td class="col-label">Customer Tied To It</td>
                <td>If the inventory backs a specific customer order, capture name + their expected delivery date</td>
              </tr>
              <tr>
                <td class="col-label">Last Communication</td>
                <td>Gmail thread with vendor — note the date of the last message either direction</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- SECTION 2: VENDOR CONTACTS -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Step 2 — Reach</span> the Right Vendor Contact</h2>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">Always CC the secondary contact when the vendor has a known pair. This prevents the PO from stalling if the primary is out of office.</p>

        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-name">BOSS Products</div>
            <div class="contact-role">Always CC both</div>
            <div class="contact-detail"><strong>Primary:</strong> Troy Gongwer</div>
            <div class="contact-detail"><strong>Secondary:</strong> Thayne Grove</div>
          </div>
          <div class="contact-card">
            <div class="contact-name">Samson Rope</div>
            <div class="contact-role">Always CC both</div>
            <div class="contact-detail"><strong>Primary:</strong> Donna Poll</div>
            <div class="contact-detail"><strong>Secondary:</strong> Sarah Daniels</div>
          </div>
          <div class="contact-card">
            <div class="contact-name">Skylift</div>
            <div class="contact-role">Pricing/specs via Nick Gordon</div>
            <div class="contact-detail"><strong>Andrew Jarmoszuk</strong></div>
            <div class="contact-detail"><strong>Dale Williams</strong></div>
            <div class="contact-detail"><strong>Nick Jarmoszuk Jr.</strong></div>
          </div>
          <div class="contact-card">
            <div class="contact-name">Bay Shore Systems</div>
            <div class="contact-role">SE territory</div>
            <div class="contact-detail"><strong>Owner:</strong> Herb Minatre</div>
            <div class="contact-detail"><strong>Primary:</strong> Andy Barron</div>
          </div>
          <div class="contact-card">
            <div class="contact-name">Irby Construction</div>
            <div class="contact-role">New primary contact</div>
            <div class="contact-detail"><strong>Primary:</strong> Jared Lemoine</div>
            <div class="contact-detail" style="color:#888; font-size:0.85rem;">(Gary Wiggs &amp; Scott Argyle retired)</div>
          </div>
          <div class="contact-card">
            <div class="contact-name">FlexPro Armor</div>
            <div class="contact-role">Handmade USA — verify run schedule</div>
            <div class="contact-detail"><strong>Confirm:</strong> SKU breakdown (NU-BC-2851, NU-BC-2834, combos)</div>
            <div class="contact-detail"><strong>Confirm:</strong> Ship-from facility + carrier</div>
          </div>
        </div>
      </div>

      <!-- SECTION 3: FOLLOW-UP STEPS -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Step 3 — Execute</span> the Follow-Up Sequence</h2>
        <ol class="step-list">
          <li>
            <div class="step-title">Pull the PO file and the last vendor email thread.</div>
            <div class="step-detail">Open the Master Tracker, locate the most recent PO, then jump to Gmail and read the entire thread — do not rely on memory of the last status.</div>
          </li>
          <li>
            <div class="step-title">Verify what is actually outstanding vs. delivered.</div>
            <div class="step-detail">Check the warehouse / receiving notes against the PO line items. Mark any line that has already arrived as Received so the follow-up is precise.</div>
          </li>
          <li>
            <div class="step-title">Send the follow-up email today.</div>
            <div class="step-detail">Use the script below. CC the secondary vendor contact and CC Caroline Butler (CB) so she has the trail for invoicing.</div>
          </li>
          <li>
            <div class="step-title">Set a 48-hour callback if no email reply.</div>
            <div class="step-detail">Add a calendar reminder. If 48 hours pass with no response, call the vendor directly and document the call in the tracker.</div>
          </li>
          <li>
            <div class="step-title">Update the Master Tracker the moment information arrives.</div>
            <div class="step-detail">New ship date, tracking number, partial shipments, or delays — log immediately. Do not let the update wait until end-of-day.</div>
          </li>
          <li>
            <div class="step-title">Notify the downstream customer if the date has shifted.</div>
            <div class="step-detail">If the inventory backs a specific customer order, send a proactive note before they ask. Lead with the new date and the reason.</div>
          </li>
          <li>
            <div class="step-title">Close the loop with CB for invoicing readiness.</div>
            <div class="step-detail">Once ship date and tracking are confirmed, hand off to CB to stage the invoice in QuickBooks (with shipping line per Ben's Formula).</div>
          </li>
        </ol>
      </div>

      <!-- SECTION 4: EMAIL SCRIPT -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Step 4 — Send</span> the Follow-Up Email</h2>
        <div class="script-block">
          <p>Subject: <strong>PO [Number] — Status &amp; Ship Date Confirmation Request</strong></p>
          <p>[Primary Contact First Name] —</p>
          <p>Following up on PO [Number], placed [Date]. We are preparing the customer-facing fulfillment schedule and need to confirm three items on your end:</p>
          <p>&nbsp;&nbsp;• Current production status of the line items on this PO<br>
             &nbsp;&nbsp;• Confirmed ship date (or revised date, if the original has moved)<br>
             &nbsp;&nbsp;• Carrier and tracking number once available</p>
          <p>If anything is held up — material, scheduling, freight — let me know today so we can adjust on our end and keep the customer informed before they ask. Appreciate y'all staying in front of this.</p>
          <p>Sincerely,<br>Aaron C. Norris</p>
        </div>
      </div>

      <!-- SECTION 5: CHECKLIST -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Step 5 — Today's</span> Checklist</h2>
        <ul class="checklist">
          <li>PO number and vendor confirmed from Master Tracker</li>
          <li>Last vendor email thread reviewed — last touch date noted</li>
          <li>Outstanding line items separated from already-received items</li>
          <li>Follow-up email sent with correct CCs (secondary vendor + CB)</li>
          <li>48-hour callback reminder set on calendar</li>
          <li>Downstream customer notified if ship date will slip</li>
          <li>Master Tracker updated with new status the moment vendor replies</li>
          <li>CB looped in once ship date + tracking are confirmed for invoicing</li>
        </ul>
      </div>

      <!-- SECTION 6: OUTCOME PATHS -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Step 6 — Outcome</span> Paths</h2>
        <div class="outcome-grid">
          <div class="outcome-card go">
            <div class="outcome-title">Vendor Confirms On Time</div>
            <div class="outcome-action">Log ship date + tracking in Master Tracker. Hand to CB for invoice prep with Ben's Formula shipping line.</div>
          </div>
          <div class="outcome-card delay">
            <div class="outcome-title">Vendor Reports Delay</div>
            <div class="outcome-action">Capture new date and reason. Notify downstream customer same day. Update tracker and revisit in 1 week.</div>
          </div>
          <div class="outcome-card silent">
            <div class="outcome-title">No Response in 48 Hours</div>
            <div class="outcome-action">Call vendor directly. Document call in tracker. If still silent, escalate to secondary contact or vendor management.</div>
          </div>
        </div>
      </div>

      <!-- KEY BADGES -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Why This</span> Matters</h2>
        <div class="nu-badge"><span class="nu-badge-num">1</span> Silent POs become missed customer commitments — protect the relationship</div>
        <div class="nu-badge"><span class="nu-badge-num">2</span> Confirmed ship dates unlock invoicing — protect the cash flow</div>
        <div class="nu-badge"><span class="nu-badge-num">3</span> Tracker accuracy prevents Aaron and CB from working off stale data</div>
        <div class="nu-badge"><span class="nu-badge-num">4</span> Proactive follow-up earns vendor goodwill and faster future runs</div>
      </div>

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