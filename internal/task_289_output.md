<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Follow Up: Last PO for Inventory Order — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-success: #2D8F47;
      --nu-warning: #D97706;
      --nu-danger: #B91C1C;
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
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
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* DOCUMENT META BAR */
    .nu-doc-meta {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 18px 40px;
    }
    .nu-doc-meta-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 0.85rem;
    }
    .nu-doc-id {
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.06em;
    }
    .nu-doc-date {
      color: var(--nu-body-text);
    }
    .nu-doc-status {
      display: inline-block;
      background: var(--nu-warning);
      color: var(--nu-white);
      padding: 4px 12px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 40px 60px;
    }
    .nu-content-inner {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* PAGE INTRO */
    .nu-page-intro {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 36px;
      margin-bottom: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-left: 6px solid var(--nu-blue);
    }
    .nu-page-eyebrow {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 14px;
    }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 780px;
    }

    /* SECTION */
    .nu-section {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .accent { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checkbox {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .nu-checklist-text {
      flex: 1;
    }
    .nu-checklist-text strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 4px;
    }
    .nu-checklist-text span {
      color: var(--nu-body-text);
      font-size: 0.92rem;
    }

    /* TWO-COLUMN GRID */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 24px;
    }

    /* INFO CARD */
    .nu-info-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-info-card h3 {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 12px;
    }
    .nu-info-card p {
      color: var(--nu-dark-text);
      font-size: 1rem;
      line-height: 1.5;
    }

    /* PRIORITY BADGE */
    .nu-badge-row {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }
    .nu-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .nu-pill-blue { background: rgba(0,0,255,0.08); color: var(--nu-blue); }
    .nu-pill-cyan { background: rgba(6,208,255,0.15); color: #006B8C; }
    .nu-pill-warn { background: rgba(217,119,6,0.12); color: var(--nu-warning); }

    /* STEP TABLE */
    .nu-step-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
    }
    .nu-step-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-step-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-step-table tr:last-child td { border-bottom: none; }
    .nu-step-num {
      display: inline-block;
      width: 28px;
      height: 28px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      text-align: center;
      line-height: 28px;
      font-weight: 900;
      font-size: 0.9rem;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      border-radius: 6px;
      margin-bottom: 24px;
    }
    .nu-callout strong {
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* SCRIPT BLOCK */
    .nu-script {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 6px;
      margin-top: 14px;
      font-style: italic;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .nu-script-label {
      font-style: normal;
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      display: block;
      margin-bottom: 8px;
    }

    /* OUTCOME GRID */
    .nu-outcomes {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-top: 16px;
    }
    .nu-outcome-card {
      padding: 18px;
      border-radius: 8px;
      text-align: center;
    }
    .nu-outcome-card.green { background: rgba(45,143,71,0.08); border: 1px solid rgba(45,143,71,0.25); }
    .nu-outcome-card.amber { background: rgba(217,119,6,0.08); border: 1px solid rgba(217,119,6,0.25); }
    .nu-outcome-card.red { background: rgba(185,28,28,0.06); border: 1px solid rgba(185,28,28,0.25); }
    .nu-outcome-card h4 {
      font-size: 0.95rem;
      font-weight: 900;
      margin-bottom: 6px;
    }
    .nu-outcome-card.green h4 { color: var(--nu-success); }
    .nu-outcome-card.amber h4 { color: var(--nu-warning); }
    .nu-outcome-card.red h4 { color: var(--nu-danger); }
    .nu-outcome-card p {
      font-size: 0.85rem;
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
      font-weight: 400;
      font-size: 1.2rem;
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
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 30px 20px 40px; }
      .nu-page-intro, .nu-section { padding: 22px; }
      .nu-page-title { font-size: 1.6rem; }
      .nu-grid-2 { grid-template-columns: 1fr; }
      .nu-outcomes { grid-template-columns: 1fr; }
      .nu-step-table th, .nu-step-table td { padding: 10px 12px; font-size: 0.88rem; }
      .nu-doc-meta { padding: 14px 20px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-section, .nu-info-card, .nu-page-intro { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- DOC META -->
  <div class="nu-doc-meta">
    <div class="nu-doc-meta-inner">
      <span class="nu-doc-id">ACTION ITEM · INV-FOLLOWUP-LASTPO</span>
      <span class="nu-doc-date">Generated: April 21, 2026</span>
      <span class="nu-doc-status">Open — Action Required</span>
    </div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <!-- INTRO -->
      <section class="nu-page-intro">
        <div class="nu-page-eyebrow">reMarkable Action Item</div>
        <h1 class="nu-page-title">Follow Up on Last PO for Inventory Order</h1>
        <p class="nu-page-subtitle">
          The most recent purchase order placed for inventory replenishment has not yet been
          confirmed as shipped, scheduled, or invoiced. This page walks the follow-up call
          start to finish — what to ask, what to confirm, and what to update once the answer
          is in hand.
        </p>
        <div class="nu-badge-row" style="margin-top: 22px; margin-bottom: 0;">
          <span class="nu-pill nu-pill-blue">Inventory Operations</span>
          <span class="nu-pill nu-pill-cyan">Vendor Follow-Up</span>
          <span class="nu-pill nu-pill-warn">Time-Sensitive</span>
        </div>
      </section>

      <!-- WHY THIS MATTERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Why</span> <span class="rest">This Follow-Up Matters</span></h2>
        <p style="margin-bottom: 14px;">
          Every open PO without a confirmed ship date is a customer order at risk. Aaron's
          downstream commitments — FlexPro Armor bucket cover dispatches, Samson Rope reorders,
          and equipment quotes — depend on knowing exactly what is in motion and what is stuck.
        </p>
        <div class="nu-callout">
          <strong>Rule:</strong> No PO is "done" until three things are confirmed in writing —
          (1) order accepted, (2) ship date scheduled, and (3) tracking or invoice on the way.
          A verbal "yes, it's coming" does not close the loop.
        </div>
      </section>

      <!-- BEFORE THE CALL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Before</span> <span class="rest">the Call — Pull This Up</span></h2>
        <ul class="nu-checklist">
          <li>
            <span class="nu-checkbox"></span>
            <div class="nu-checklist-text">
              <strong>The PO number and date placed</strong>
              <span>From the master tracker or the original confirmation email. Have it on screen before dialing.</span>
            </div>
          </li>
          <li>
            <span class="nu-checkbox"></span>
            <div class="nu-checklist-text">
              <strong>Line items, SKUs, and quantities</strong>
              <span>So nothing on the call is paraphrased. If it is FlexPro Armor, list the SKUs (NU-BC-2851, NU-BC-2834, combo variants) and quantities exactly.</span>
            </div>
          </li>
          <li>
            <span class="nu-checkbox"></span>
            <div class="nu-checklist-text">
              <strong>The dollar total and payment terms</strong>
              <span>If the vendor is waiting on payment to release the order, that is the answer — and it can be solved on the spot.</span>
            </div>
          </li>
          <li>
            <span class="nu-checkbox"></span>
            <div class="nu-checklist-text">
              <strong>The promised lead time at the time of order</strong>
              <span>So the question becomes "we are at week X of a Y-week lead time" rather than open-ended.</span>
            </div>
          </li>
          <li>
            <span class="nu-checkbox"></span>
            <div class="nu-checklist-text">
              <strong>Customer commitments tied to this PO</strong>
              <span>Any customer order, quote, or shipment depending on this inventory landing — name them so the urgency is real, not abstract.</span>
            </div>
          </li>
        </ul>
      </section>

      <!-- TWO COLUMN: VENDOR + CONTACT -->
      <div class="nu-grid-2">
        <div class="nu-info-card">
          <h3>Primary Vendor Contact</h3>
          <p><strong>Confirm direct contact</strong> for the supplier on this PO before calling. For Boss Products, CC Troy Gongwer and Thayne Grove on every email. For Samson Rope, CC Donna Poll and Sarah Daniels.</p>
        </div>
        <div class="nu-info-card">
          <h3>Channel Preference</h3>
          <p><strong>Phone first, email follow-up.</strong> A phone call surfaces the real status in two minutes. Send a written summary right after so the answer is documented in the thread.</p>
        </div>
      </div>

      <!-- THE STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">The</span> <span class="rest">Follow-Up — Step by Step</span></h2>
        <table class="nu-step-table">
          <thead>
            <tr>
              <th style="width: 60px;">#</th>
              <th>Action</th>
              <th>What to Confirm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="nu-step-num">1</span></td>
              <td><strong>Open the PO record</strong></td>
              <td>PO number, date placed, total dollars, payment status, expected lead time.</td>
            </tr>
            <tr>
              <td><span class="nu-step-num">2</span></td>
              <td><strong>Call the vendor contact</strong></td>
              <td>Greet by name. State the PO number first. Ask for current status, not a generic update.</td>
            </tr>
            <tr>
              <td><span class="nu-step-num">3</span></td>
              <td><strong>Get a date, not an adjective</strong></td>
              <td>"Soon" is not an answer. Push gently for a calendar date — production, ship, or delivery.</td>
            </tr>
            <tr>
              <td><span class="nu-step-num">4</span></td>
              <td><strong>Identify any blocker</strong></td>
              <td>Payment? PO format issue? Component on backorder? Resolve on the call if possible.</td>
            </tr>
            <tr>
              <td><span class="nu-step-num">5</span></td>
              <td><strong>Lock in next contact</strong></td>
              <td>"You will email tracking by Friday." Repeat the commitment back to confirm it.</td>
            </tr>
            <tr>
              <td><span class="nu-step-num">6</span></td>
              <td><strong>Send the recap email</strong></td>
              <td>Within 30 minutes. Subject: "PO [#] — Status Confirmed." Capture date, ship target, and next step.</td>
            </tr>
            <tr>
              <td><span class="nu-step-num">7</span></td>
              <td><strong>Update the master tracker</strong></td>
              <td>New status, new ship date, vendor contact, and date of this follow-up.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Suggested</span> <span class="rest">Opening Script</span></h2>
        <p>Direct, warm, and to the point — Aaron's voice. Use phone first, then send the written recap.</p>
        <div class="nu-script">
          <span class="nu-script-label">When they pick up</span>
          "[Name] — Aaron Norris with Norris Utilities. I am calling on PO [number] we placed on
          [date] for [brief description]. I want to make sure we are still on track and find out
          what your current ship target looks like. What does the timeline show on your end?"
        </div>
        <div class="nu-script">
          <span class="nu-script-label">If they need to check</span>
          "No problem at all. Can you take a quick look and either send me an email today or
          give me a call back before end of business? I have a customer commitment tied to this
          one and I want to give them a real date."
        </div>
        <div class="nu-script">
          <span class="nu-script-label">Closing the loop</span>
          "Appreciate the update. So I am hearing [restate: ship date, tracking method, who
          sends what]. I will send a short note over so we both have it in writing. Thank you."
        </div>
      </section>

      <!-- POSSIBLE OUTCOMES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Possible</span> <span class="rest">Outcomes & Next Step</span></h2>
        <p>Match the answer to a path. Then update the tracker before doing anything else.</p>
        <div class="nu-outcomes">
          <div class="nu-outcome-card green">
            <h4>Confirmed Shipping</h4>
            <p>Vendor provides ship date and tracking. Update tracker. Notify any customer who is waiting on this inventory.</p>
          </div>
          <div class="nu-outcome-card amber">
            <h4>Delayed</h4>
            <p>New target date provided. Document the reason. Reach out to affected customers proactively before they ask.</p>
          </div>
          <div class="nu-outcome-card red">
            <h4>Blocked</h4>
            <p>Order on hold (payment, spec, backorder). Resolve the blocker today. Escalate to vendor's senior contact if not cleared in 24 hours.</p>
          </div>
        </div>
      </section>

      <!-- AFTER THE CALL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">After</span> <span class="rest">the Call — Close the Loop</span></h2>
        <ul class="nu-checklist">
          <li>
            <span class="nu-checkbox"></span>
            <div class="nu-checklist-text">
              <strong>Send recap email within 30 minutes</strong>
              <span>Subject line includes PO number. Body restates ship date, tracking method, and next-action owner.</span>
            </div>
          </li>
          <li>
            <span class="nu-checkbox"></span>
            <div class="nu-checklist-text">
              <strong>Update the master tracker</strong>
              <span>Status, new ship target, vendor contact name, and the date of this follow-up call.</span>
            </div>
          </li>
          <li>
            <span class="nu-checkbox"></span>
            <div class="nu-checklist-text">
              <strong>Notify affected customers</strong>
              <span>Anyone whose order, quote, or shipment depends on this inventory landing — proactively, not reactively.</span>
            </div>
          </li>
          <li>
            <span class="nu-checkbox"></span>
            <div class="nu-checklist-text">
              <strong>Set a calendar reminder for the promised date</strong>
              <span>If tracking does not arrive on the committed day, the next follow-up triggers automatically rather than being remembered.</span>
            </div>
          </li>
          <li>
            <span class="nu-checkbox"></span>
            <div class="nu-checklist-text">
              <strong>Mark the reMarkable action complete</strong>
              <span>Only after all four steps above are done. Verbal confirmation alone does not close the item.</span>
            </div>
          </li>
        </ul>
      </section>

      <!-- DECISION REMINDER -->
      <section class="nu-section" style="border-top: 4px solid var(--nu-cyan);">
        <h2 class="nu-section-title"><span class="accent">If</span> <span class="rest">You Need to Decide on the Spot</span></h2>
        <p style="margin-bottom: 12px;">
          Two judgment calls come up most often during these calls. Pre-decide them so the
          conversation does not stall.
        </p>
        <div class="nu-callout">
          <strong>Pay to release?</strong> If the order is held for payment and the dollar
          amount is within normal terms, authorize payment on the call. Get the inventory moving.
          Reconcile the paperwork after.
        </div>
        <div class="nu-callout" style="margin-top: 12px;">
          <strong>Split the order?</strong> If part of the PO is ready and part is delayed,
          ask the vendor to ship what is ready now and follow with the balance. Partial inventory
          beats waiting for a full shipment when customers are queued.
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>