<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Follow-Up — Awaiting Inventory — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-alert-amber: #F2A900;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      pointer-events: none;
    }
    .nu-header > * { position: relative; z-index: 2; }

    /* Ghost phoenix watermark in header */
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 520px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
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
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 16px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON TRANSITION ══ */
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

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 48px 0 64px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px;
      position: relative;
      z-index: 1;
    }

    /* ══ PAGE TITLE ══ */
    .nu-page-title {
      font-weight: 900;
      font-size: 2.3rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .nu-page-title .nu-blue-word {
      color: var(--nu-blue);
    }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 32px;
      max-width: 780px;
    }

    /* ══ PRIORITY BANNER ══ */
    .priority-banner {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 26px;
      border-radius: 8px;
      margin-bottom: 32px;
      border-left: 6px solid var(--nu-cyan);
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
    }
    .priority-banner .pb-icon {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      fill: var(--nu-cyan);
    }
    .priority-banner .pb-text { flex: 1; }
    .priority-banner .pb-label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .priority-banner .pb-headline {
      font-size: 1.1rem;
      font-weight: 700;
      line-height: 1.35;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 36px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first-word {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ ACTION CARD ══ */
    .action-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 30px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.07);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 20px;
    }
    .action-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .action-card h3 .step-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-size: 0.95rem;
      font-weight: 900;
      flex-shrink: 0;
    }
    .action-card p {
      font-size: 0.98rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .action-card ul {
      padding-left: 0;
      list-style: none;
    }
    .action-card ul li {
      padding: 6px 0 6px 22px;
      position: relative;
      font-size: 0.97rem;
    }
    .action-card ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 6px;
      font-size: 1.3rem;
      line-height: 1;
      top: 8px;
    }

    /* ══ INFO GRID ══ */
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 16px;
      margin-bottom: 20px;
    }
    .info-tile {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #fdfdff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 16px 18px;
    }
    .info-tile .it-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .info-tile .it-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.4;
    }

    /* ══ EMAIL DRAFT ══ */
    .email-draft {
      background: #fdfdfd;
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1rem;
      color: #222;
      line-height: 1.75;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .email-draft .email-meta {
      font-family: var(--font-primary);
      font-size: 0.85rem;
      color: #666;
      border-bottom: 1px dashed var(--nu-medium-gray);
      padding-bottom: 14px;
      margin-bottom: 18px;
    }
    .email-draft .email-meta div {
      margin-bottom: 4px;
    }
    .email-draft .email-meta strong {
      color: var(--nu-dark-text);
      display: inline-block;
      min-width: 70px;
    }
    .email-draft .email-body p {
      margin-bottom: 14px;
      text-indent: 1.5em;
    }
    .email-draft .email-body p.no-indent {
      text-indent: 0;
    }
    .email-draft .email-body ul {
      list-style: none;
      padding-left: 1.8em;
      margin-bottom: 14px;
    }
    .email-draft .email-body ul li {
      padding: 3px 0;
      position: relative;
    }
    .email-draft .email-body ul li::before {
      content: '•';
      position: absolute;
      left: -1em;
    }
    .email-draft .email-sig {
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-family: var(--font-primary);
      font-size: 0.92rem;
      color: #444;
      line-height: 1.55;
    }
    .email-draft .email-sig strong {
      color: var(--nu-dark-text);
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 26px;
    }
    .checklist li {
      list-style: none;
      padding: 10px 0 10px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-light-gray);
      font-size: 0.97rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, rgba(6,208,255,0.08) 0%, rgba(0,0,255,0.04) 100%);
      border-left: 5px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 6px;
      margin-bottom: 20px;
      font-size: 0.97rem;
    }
    .callout strong {
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* ══ BUTTON ROW ══ */
    .button-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin: 24px 0 8px;
    }
    .nu-btn-primary,
    .nu-btn-secondary {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      text-align: center;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover {
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: opacity 0.2s ease;
    }
    .nu-footer-contact a:hover {
      opacity: 0.75;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-container { padding: 0 20px; }
      .email-draft { padding: 20px 22px; }
      .action-card { padding: 22px 20px; }
      .priority-banner { flex-direction: column; text-align: center; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .action-card, .email-draft { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .button-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 10 L115 35 L140 20 L125 50 L160 40 L135 70 L170 85 L130 85 L140 115 L110 95 L100 130 L90 95 L60 115 L70 85 L30 85 L65 70 L40 40 L75 50 L60 20 L85 35 Z" fill="#ffffff"/>
      <path d="M100 125 L105 150 L120 140 L112 160 L100 210 L88 160 L80 140 L95 150 Z" fill="#ffffff"/>
    </svg>

    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="nu-page-title"><span class="nu-blue-word">Order</span> Follow-Up — Awaiting Inventory</h1>
      <p class="nu-page-subtitle">
        Action item from reMarkable: follow up on the order placed against the last PO. Customer is anxiously waiting on inventory. Confirm status, surface any vendor-side delays, and set a realistic delivery window.
      </p>

      <!-- PRIORITY BANNER -->
      <div class="priority-banner">
        <svg class="pb-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2 L1 21 H23 Z M12 9 V14 M12 17 V17.5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="pb-text">
          <div class="pb-label">High Priority — Customer Expectation</div>
          <div class="pb-headline">Customer is anxiously waiting. A check-in today — even without a delivery date — preserves trust.</div>
        </div>
      </div>

      <!-- WHAT WE KNOW -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">What</span> <span class="rest">We Know</span></h2>

        <div class="info-grid">
          <div class="info-tile">
            <div class="it-label">Source</div>
            <div class="it-value">reMarkable action item (handwritten)</div>
          </div>
          <div class="info-tile">
            <div class="it-label">Action Type</div>
            <div class="it-value">Vendor + Customer Follow-Up</div>
          </div>
          <div class="info-tile">
            <div class="it-label">Status</div>
            <div class="it-value">Awaiting Inventory Confirmation</div>
          </div>
          <div class="info-tile">
            <div class="it-label">Owner</div>
            <div class="it-value">Aaron C. Norris</div>
          </div>
          <div class="info-tile">
            <div class="it-label">Customer Sentiment</div>
            <div class="it-value">Anxious — wants visibility</div>
          </div>
          <div class="info-tile">
            <div class="it-label">Trigger Date</div>
            <div class="it-value">2026-04-23</div>
          </div>
        </div>

        <div class="callout">
          <strong>Context needed before sending:</strong> confirm which customer PO this references (likely from master_tracker), the vendor on the back-end (Skylift, BOSS, or Samson Rope), and whether the order is equipment, FlexPro Armor, or rope. If the PO number or line items are unclear, pull the last three open POs from QuickBooks and cross-check against recent Telegram traffic before calling the customer.
        </div>
      </section>

      <!-- STEP-BY-STEP PLAYBOOK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Action</span> <span class="rest">Playbook</span></h2>

        <div class="action-card">
          <h3><span class="step-num">1</span> Identify the exact PO and customer</h3>
          <p>Before touching the phone or keyboard, confirm which order this refers to.</p>
          <ul>
            <li>Open the master tracker and filter for status = "Ordered, awaiting delivery"</li>
            <li>Cross-reference the most recent PO issued (QuickBooks → Purchase Orders → sort by date)</li>
            <li>Note the customer contact, SKU(s), quantity, and ship-to address</li>
            <li>Pull any prior Telegram or email threads on this specific PO for tone context</li>
          </ul>
        </div>

        <div class="action-card">
          <h3><span class="step-num">2</span> Contact the vendor for real status</h3>
          <p>Get the truth before you talk to the customer. Never guess a delivery date.</p>
          <ul>
            <li><strong>If Skylift:</strong> call Nick Gordon or Andrew Jarmoszuk for a build/ship update</li>
            <li><strong>If BOSS Products:</strong> email Troy Gongwer and Thayne Grove (CC both) — ask for PO status and revised ETA</li>
            <li><strong>If Samson Rope:</strong> email Donna Poll and Sarah Daniels (CC both) — request inventory confirmation and ship date</li>
            <li><strong>If FlexPro Armor (handmade):</strong> confirm with the Foley, AL fabrication team — production queue position and expected completion date</li>
            <li><strong>If Bay Shore Systems:</strong> contact Andy Barron (primary) or Herb Minatre — request drill rig build status</li>
            <li>Ask specifically: "Is it on the floor, on the truck, or still in the queue?"</li>
          </ul>
        </div>

        <div class="action-card">
          <h3><span class="step-num">3</span> Call the customer personally</h3>
          <p>A phone call beats an email when the customer is anxious. Voice carries commitment.</p>
          <ul>
            <li>Open with: "I wanted to give you a direct update on your order before you had to ask again."</li>
            <li>Share the vendor-confirmed status — be specific, not vague</li>
            <li>Give the best-known delivery window; if you don't know, say so and commit to a follow-up date</li>
            <li>Ask: "Is there anything pressing on your end that changes the urgency?"</li>
            <li>End with: "I'll text/email you the tracking number the moment it ships."</li>
          </ul>
        </div>

        <div class="action-card">
          <h3><span class="step-num">4</span> Follow the call with a written confirmation</h3>
          <p>Every verbal update gets documented in writing within 30 minutes.</p>
          <ul>
            <li>Send the email draft below (customize to match the specific PO)</li>
            <li>Copy Caroline Butler (CB) so she has the commitment on file</li>
            <li>Log the interaction in the master tracker with today's date and the next check-in date</li>
            <li>Set a calendar reminder for the promised follow-up date — do not miss it</li>
          </ul>
        </div>

        <div class="action-card">
          <h3><span class="step-num">5</span> Update internal systems</h3>
          <p>Close the loop so the team can pick it up without asking.</p>
          <ul>
            <li>Update master_tracker.md with: last contact date, vendor status, promised delivery window, next action</li>
            <li>If delivery is materially delayed, flag it in the next daily summary</li>
            <li>If this customer has an open invoice too, note that separately — do not combine the conversations</li>
          </ul>
        </div>
      </section>

      <!-- EMAIL DRAFT TEMPLATE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Customer</span> <span class="rest">Email Draft</span></h2>

        <div class="callout">
          <strong>Voice check:</strong> em dash after the greeting, indented paragraphs, blank line between each, bullets with •, "Sincerely," close. No filler words. Lead with the status — do not bury it.
        </div>

        <div class="email-draft">
          <div class="email-meta">
            <div><strong>To:</strong> [Customer contact name and email]</div>
            <div><strong>CC:</strong> Caroline Butler — cb@norrisutilities.com</div>
            <div><strong>Subject:</strong> Your Order — Status Update from Norris Utilities</div>
          </div>
          <div class="email-body">
            <p class="no-indent">[First name] —</p>

            <p>I wanted to reach out directly with an update on your recent PO before you had to ask again. I know waiting on inventory without visibility is the worst part of any order, and I appreciate your patience.</p>

            <p>Here is where we stand today:</p>

            <ul>
              <li>PO #[number] — [SKU / item description, quantity]</li>
              <li>Current status: [confirmed with vendor — production / shipped / in transit]</li>
              <li>Expected delivery window: [date range]</li>
              <li>Tracking: [will be provided the moment it leaves the dock / tracking # here]</li>
            </ul>

            <p>If anything shifts on the vendor side between now and delivery, you will hear from me first — not after the fact. My goal is to earn your next order, and that means keeping you informed on this one.</p>

            <p>Please call or text me directly at 205-500-1343 if anything on your end has changed — timing, ship-to location, or quantity. Y'all have been advantageous partners and I want to make sure we land this one clean.</p>

            <p class="no-indent">Sincerely,</p>
            <p class="no-indent" style="margin-left: 1.5em;">Aaron C. Norris</p>
          </div>
          <div class="email-sig">
            <strong>Aaron C. Norris</strong><br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Pre-Call</span> <span class="rest">Checklist</span></h2>
        <ul class="checklist">
          <li>Confirm which PO this action item refers to (master_tracker cross-check)</li>
          <li>Pull the customer's recent order history and any open invoices</li>
          <li>Contact the vendor for a real, dated status — not a guess</li>
          <li>Write down the ETA window before dialing the customer</li>
          <li>Call the customer personally (do not lead with email)</li>
          <li>Send written confirmation within 30 minutes of the call</li>
          <li>CC Caroline Butler on the confirmation email</li>
          <li>Update master_tracker with today's contact and next follow-up date</li>
          <li>Set a calendar reminder for the promised check-in</li>
          <li>If material delay: flag in the next daily summary</li>
        </ul>
      </section>

      <!-- BUTTON ROW -->
      <div class="button-row">
        <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=Order%20Status%20Update" class="nu-btn-secondary">Email Aaron</a>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      130 Inverness Plaza #210, Birmingham, AL 35242<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>