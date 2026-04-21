<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing — Call Action Item — Norris Utilities®</title>
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
      --nu-alert-red: #D32F2F;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
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

    .nu-phoenix-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
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
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      min-height: 60vh;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      opacity: 0.07;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PAGE TITLE */
    .page-intro {
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .breadcrumb {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 12px;
    }
    .breadcrumb span { color: var(--nu-blue); font-weight: 700; }

    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      line-height: 1.2;
    }
    .page-title span { color: var(--nu-blue); }

    .page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 780px;
    }

    /* PRIORITY STRIP */
    .priority-strip {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(135deg, var(--nu-alert-red) 0%, #B71C1C 100%);
      color: var(--nu-white);
      padding: 16px 24px;
      border-radius: 6px;
      margin-bottom: 40px;
      font-weight: 700;
      box-shadow: 0 4px 16px rgba(211,47,47,0.25);
    }
    .priority-strip .priority-label {
      background: rgba(255,255,255,0.2);
      padding: 4px 12px;
      border-radius: 3px;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 20px;
      padding-bottom: 8px;
      border-bottom: 3px solid var(--nu-cyan);
      display: inline-block;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CONTACT CARD */
    .contact-card {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      background: var(--nu-light-gray);
      border-left: 5px solid var(--nu-blue);
      padding: 24px;
      border-radius: 6px;
      margin-bottom: 32px;
    }
    .contact-item {
      display: flex;
      flex-direction: column;
    }
    .contact-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .contact-value {
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CONFIRMATION ITEMS */
    .confirm-list {
      list-style: none;
      counter-reset: confirm-counter;
    }
    .confirm-list li {
      counter-increment: confirm-counter;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-cyan);
      padding: 22px 24px 22px 72px;
      margin-bottom: 14px;
      border-radius: 6px;
      position: relative;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .confirm-list li:hover {
      transform: translateX(3px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .confirm-list li::before {
      content: counter(confirm-counter);
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .confirm-list .item-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .confirm-list .item-detail {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* SCRIPT / TALKING POINTS */
    .script-block {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 28px;
      border-radius: 8px;
      margin-bottom: 24px;
      position: relative;
      overflow: hidden;
    }
    .script-block::before {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(6,208,255,0.1) 0%, transparent 70%);
      pointer-events: none;
    }
    .script-block .script-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 12px;
    }
    .script-block .script-text {
      font-size: 1.05rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.95);
      font-style: italic;
      position: relative;
      z-index: 1;
    }

    /* FOLLOW-UP CHECKLIST */
    .checklist {
      list-style: none;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
    }
    .checklist li {
      padding: 16px 20px 16px 54px;
      border-bottom: 1px solid var(--nu-medium-gray);
      position: relative;
      font-size: 0.98rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* INFO CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(6,208,255,0.08) 0%, rgba(0,0,255,0.04) 100%);
      border-left: 5px solid var(--nu-cyan);
      padding: 20px 24px;
      border-radius: 6px;
      margin-bottom: 24px;
    }
    .callout .callout-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 8px;
    }
    .callout p {
      color: var(--nu-dark-text);
      font-size: 0.98rem;
    }

    /* STATUS ROW */
    .status-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }
    .status-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 20px;
      text-align: center;
    }
    .status-tile .status-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nu-body-text);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .status-tile .status-value {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-blue);
    }
    .status-tile.alert .status-value { color: var(--nu-alert-red); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #000099 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .nu-footer-contact a:hover {
      color: var(--nu-white);
    }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 20px auto;
      opacity: 0.5;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .page-title { font-size: 1.75rem; }
      .nu-container { padding: 40px 20px; }
      .priority-strip { flex-direction: column; align-items: flex-start; text-align: left; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .confirm-list li:hover { transform: none; }
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

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- INTRO -->
      <div class="page-intro">
        <div class="breadcrumb">Action Item &nbsp;›&nbsp; <span>Vendor Call</span></div>
        <h1 class="page-title">Call <span>H2O Waterproofing</span> — Get Transfer Terms in Writing</h1>
        <p class="page-subtitle">
          Phone call to H2O Waterproofing. Objective: secure written confirmation of transfer process and fees before proceeding with any further orders or customer commitments.
        </p>
      </div>

      <!-- PRIORITY STRIP -->
      <div class="priority-strip">
        <span class="priority-label">Priority</span>
        <span>Action required — do not advance vendor relationship until written confirmation received.</span>
      </div>

      <!-- STATUS ROW -->
      <div class="status-row">
        <div class="status-tile">
          <div class="status-label">Type</div>
          <div class="status-value">Vendor Call</div>
        </div>
        <div class="status-tile">
          <div class="status-label">Channel</div>
          <div class="status-value">Phone → Email</div>
        </div>
        <div class="status-tile alert">
          <div class="status-label">Deliverable</div>
          <div class="status-value">Written Confirmation</div>
        </div>
        <div class="status-tile">
          <div class="status-label">Owner</div>
          <div class="status-value">Aaron C. Norris</div>
        </div>
      </div>

      <!-- VENDOR CONTACT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Vendor <span>Contact</span></h2>
        <div class="contact-card">
          <div class="contact-item">
            <span class="contact-label">Company</span>
            <span class="contact-value">H2O Waterproofing</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">Aaron's Phone</span>
            <span class="contact-value">205-500-1343</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">Aaron's Email</span>
            <span class="contact-value">acnorris@norrisutilities.com</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">Company</span>
            <span class="contact-value">Norris Utilities, LLC</span>
          </div>
        </div>
      </section>

      <!-- ITEMS TO CONFIRM IN WRITING -->
      <section class="nu-section">
        <h2 class="nu-section-title">Get In <span>Writing</span></h2>
        <p style="margin-bottom: 20px; color: var(--nu-body-text);">
          Every item below must be confirmed by H2O Waterproofing via email — not voice, not text. If it is not in writing, it is not confirmed.
        </p>
        <ol class="confirm-list">
          <li>
            <div class="item-title">Transfer Process — Step by Step</div>
            <div class="item-detail">Request a written description of the full transfer process H2O Waterproofing uses: what forms are required, what authorizations, what documentation is exchanged, and who signs off at each step.</div>
          </li>
          <li>
            <div class="item-title">Transfer Fees — All-In Cost</div>
            <div class="item-detail">Request the complete fee schedule in writing. Base fees, handling fees, expedite fees, any pass-through costs. No verbal quotes. Total landed cost in dollars — not ranges.</div>
          </li>
          <li>
            <div class="item-title">Turnaround Time — Business Days Committed</div>
            <div class="item-detail">Written commitment: number of business days from initiation to completion. Include any conditions that could extend the timeline.</div>
          </li>
          <li>
            <div class="item-title">Points of Contact — Names &amp; Direct Lines</div>
            <div class="item-detail">The person at H2O responsible for managing the transfer, their direct phone and email, and the backup if they are unavailable.</div>
          </li>
          <li>
            <div class="item-title">What Can Block the Transfer</div>
            <div class="item-detail">Any conditions, missing documentation, or eligibility issues that could cause H2O to reject or delay a transfer. Get the exclusions in writing so there are no surprises.</div>
          </li>
        </ol>
      </section>

      <!-- PHONE SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Opening <span>Script</span></h2>
        <div class="script-block">
          <div class="script-label">When they pick up — Aaron says:</div>
          <div class="script-text">
            "This is Aaron Norris with Norris Utilities. I need to understand your transfer process and fee structure before we move any further. Walk me through how a transfer works on your end, and then please send me the process and the fee schedule in an email so I have it in writing. I want to make sure everyone on my team is working from the same information."
          </div>
        </div>

        <div class="callout">
          <div class="callout-label">Closing Line — Lock In the Email</div>
          <p>"Before we hang up, confirm the email address where you'll send the written process and fees. I'll watch for it today — send to <strong>acnorris@norrisutilities.com</strong>. Appreciate it."</p>
        </div>
      </section>

      <!-- POST-CALL CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">After The <span>Call</span></h2>
        <ul class="checklist">
          <li>Log call date, duration, and person spoken with in master tracker.</li>
          <li>Watch inbox for written confirmation email from H2O Waterproofing.</li>
          <li>If nothing received within 24 hours — follow up by phone and reference the call.</li>
          <li>File the written confirmation under Vendors → H2O Waterproofing.</li>
          <li>Share process summary with Caroline Butler so she can reference it when customers ask.</li>
          <li>Update master tracker: status = "Transfer terms documented — ready to proceed."</li>
        </ul>
      </section>

      <!-- WHY THIS MATTERS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Why <span>Written Matters</span></h2>
        <div class="callout">
          <div class="callout-label">Verbal Does Not Count</div>
          <p>Norris Utilities® operates on documented commitments. Verbal fee quotes change, verbal timelines slip, and verbal process descriptions get misremembered. Written terms protect the customer, protect the relationship with H2O Waterproofing, and protect the business. Do not commit a customer to H2O until the written terms are on file.</p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>