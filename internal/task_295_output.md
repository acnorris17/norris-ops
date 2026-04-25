<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing Transfer Process & Fees — Action Brief — Norris Utilities®</title>
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
      --nu-warning: #B8860B;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
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
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
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
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* TASK HEADLINE */
    .task-headline {
      margin-bottom: 36px;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .task-meta-pill {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .task-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .task-title .highlight {
      color: var(--nu-blue);
    }
    .task-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      margin-top: 40px;
    }
    .nu-section-title .word-1 {
      color: var(--nu-blue);
    }
    .nu-section-title .word-rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CONTEXT CARD */
    .context-card {
      background: linear-gradient(135deg, #f7f9ff 0%, #eef4ff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 16px;
    }
    .context-card p {
      font-size: 1rem;
      line-height: 1.7;
      color: var(--nu-body-text);
    }
    .context-card strong {
      color: var(--nu-dark-text);
    }

    /* INFO GRID */
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }
    .info-block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .info-block-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .info-block-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.4;
    }
    .info-block-sub {
      font-size: 0.88rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* CHEVRON BADGES (Action Steps) */
    .step-list {
      list-style: none;
      counter-reset: step-counter;
      padding: 0;
      margin: 12px 0 16px;
    }
    .step-list li {
      counter-increment: step-counter;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 30px 16px 60px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 400;
      font-size: 0.97rem;
      line-height: 1.5;
      position: relative;
    }
    .step-list li::before {
      content: counter(step-counter);
      position: absolute;
      left: 26px;
      top: 50%;
      transform: translateY(-50%);
      width: 28px;
      height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .step-list li strong {
      color: var(--nu-cyan);
      font-weight: 700;
    }

    /* QUESTIONS BOX */
    .questions-box {
      background: var(--nu-white);
      border: 2px solid var(--nu-cyan);
      border-radius: 10px;
      padding: 26px 30px;
      margin-bottom: 16px;
    }
    .questions-box ol {
      padding-left: 22px;
    }
    .questions-box li {
      margin-bottom: 14px;
      color: var(--nu-body-text);
      font-size: 1rem;
      line-height: 1.55;
    }
    .questions-box li::marker {
      color: var(--nu-blue);
      font-weight: 900;
    }
    .questions-box li strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* FEE TABLE */
    .fee-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 16px;
    }
    .fee-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .fee-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .fee-table td {
      padding: 13px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-body-text);
      vertical-align: top;
    }
    .fee-table tr:last-child td { border-bottom: none; }
    .fee-table tr:nth-child(even) td { background: #fafbfd; }
    .fee-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 32%;
    }
    .pending-tag {
      display: inline-block;
      background: #fff4d6;
      color: var(--nu-warning);
      padding: 3px 10px;
      border-radius: 4px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    /* CALL SCRIPT */
    .call-script {
      background: #fafbfd;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 16px;
      font-size: 0.97rem;
      line-height: 1.7;
    }
    .call-script p {
      margin-bottom: 12px;
    }
    .call-script p:last-child { margin-bottom: 0; }
    .call-script .speaker {
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.04em;
    }

    /* PRIORITY BANNER */
    .priority-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 22px 28px;
      border-radius: 8px;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      gap: 18px;
    }
    .priority-banner-icon {
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.4rem;
    }
    .priority-banner-text {
      flex: 1;
    }
    .priority-banner-text .label {
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 4px;
    }
    .priority-banner-text .body {
      font-size: 1rem;
      color: rgba(255,255,255,0.92);
    }

    /* STATUS BAR */
    .status-bar {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      padding: 18px 24px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      margin-bottom: 16px;
    }
    .status-item {
      display: flex;
      flex-direction: column;
    }
    .status-item .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
    }
    .status-item .value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-top: 2px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
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
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 20px 56px; }
      .task-title { font-size: 1.55rem; }
      .nu-section-title { font-size: 1.25rem; }
      .step-list li {
        clip-path: none;
        border-radius: 8px;
        padding: 14px 20px 14px 56px;
      }
      .fee-table { font-size: 0.85rem; }
      .fee-table th, .fee-table td { padding: 10px 12px; }
      .priority-banner { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step-list li, .priority-banner, .nu-footer {
        -webkit-print-color-adjust: exact; print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
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

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- HEADLINE -->
      <div class="task-headline">
        <span class="task-meta-pill">reMarkable Action Item</span>
        <h1 class="task-title">Get <span class="highlight">Transfer Process &amp; Fees</span> Information from H2O Waterproofing</h1>
        <p class="task-subtitle">Distributor / dealer agreement transfer due diligence — collect process documentation and fee schedule before any next-step decision.</p>
      </div>

      <!-- STATUS -->
      <div class="status-bar">
        <div class="status-item">
          <span class="label">Owner</span>
          <span class="value">Aaron C. Norris</span>
        </div>
        <div class="status-item">
          <span class="label">Vendor</span>
          <span class="value">H2O Waterproofing</span>
        </div>
        <div class="status-item">
          <span class="label">Action Type</span>
          <span class="value">Information Request</span>
        </div>
        <div class="status-item">
          <span class="label">Status</span>
          <span class="value">Open — Pending Outreach</span>
        </div>
        <div class="status-item">
          <span class="label">Logged</span>
          <span class="value">2026-04-25</span>
        </div>
      </div>

      <!-- PRIORITY BANNER -->
      <div class="priority-banner">
        <div class="priority-banner-icon">!</div>
        <div class="priority-banner-text">
          <div class="label">Why This Matters</div>
          <div class="body">No commercial decision can move forward until the transfer process and fee schedule are in writing. Verbal terms are not enough — we need a document we can review with the team and price into any deal.</div>
        </div>
      </div>

      <!-- CONTEXT -->
      <h2 class="nu-section-title"><span class="word-1">Context</span> <span class="word-rest">&amp; Background</span></h2>
      <div class="context-card">
        <p>This action item came off Aaron's reMarkable as part of vendor due diligence work. Norris Utilities® needs to understand the full <strong>transfer process</strong> for H2O Waterproofing — what steps they require, what documentation they expect, what timelines apply — and the complete <strong>fee schedule</strong> that comes with it. Both pieces feed directly into how we evaluate the relationship and price any associated work to customers.</p>
      </div>

      <!-- INFORMATION TARGETS -->
      <h2 class="nu-section-title"><span class="word-1">Information</span> <span class="word-rest">to Collect</span></h2>
      <div class="info-grid">
        <div class="info-block">
          <div class="info-block-label">Transfer Process</div>
          <div class="info-block-value">Step-by-step procedure</div>
          <div class="info-block-sub">Forms, approvals, timelines, who initiates each step</div>
        </div>
        <div class="info-block">
          <div class="info-block-label">Fee Schedule</div>
          <div class="info-block-value">All-in cost breakdown</div>
          <div class="info-block-sub">Application fees, transfer fees, recurring fees, deposits</div>
        </div>
        <div class="info-block">
          <div class="info-block-label">Documentation</div>
          <div class="info-block-value">Written agreement copy</div>
          <div class="info-block-sub">PDF, email, or signed form — must be in writing</div>
        </div>
        <div class="info-block">
          <div class="info-block-label">Point of Contact</div>
          <div class="info-block-value">Authorized H2O rep</div>
          <div class="info-block-sub">Name, title, direct phone, direct email</div>
        </div>
      </div>

      <!-- ACTION STEPS -->
      <h2 class="nu-section-title"><span class="word-1">Action</span> <span class="word-rest">Steps</span></h2>
      <ol class="step-list">
        <li><strong>Identify the right contact</strong> at H2O Waterproofing — sales rep, distributor coordinator, or owner — and capture their direct line and email.</li>
        <li><strong>Send the formal information request</strong> (email preferred for paper trail) asking for the transfer process documentation and fee schedule in writing.</li>
        <li><strong>Confirm receipt</strong> and follow up by phone within 48 hours if no response.</li>
        <li><strong>Review the materials</strong> against our pricing and margin expectations — note any unusual fees, time limits, or volume requirements.</li>
        <li><strong>Log the response</strong> in the master tracker with vendor name, date received, and a one-line summary.</li>
        <li><strong>Decide next step</strong> — proceed, negotiate, or table — and document the decision before closing this item.</li>
      </ol>

      <!-- QUESTIONS TO ASK -->
      <h2 class="nu-section-title"><span class="word-1">Questions</span> <span class="word-rest">to Ask H2O</span></h2>
      <div class="questions-box">
        <ol>
          <li><strong>What is the full transfer process?</strong> Walk through every step from initial inquiry to active relationship.</li>
          <li><strong>What forms or documentation do you require from us?</strong> (Tax ID, certificate of insurance, business license, references, financials?)</li>
          <li><strong>What is your typical timeline</strong> from application submission to approval?</li>
          <li><strong>What are all the fees involved?</strong> One-time application, transfer, annual, minimum-volume penalties — every line item.</li>
          <li><strong>Are there minimum order or volume commitments</strong> tied to the agreement? Annual or quarterly?</li>
          <li><strong>Is there an exclusivity clause</strong>, geographic territory, or non-compete attached?</li>
          <li><strong>What is your standard payment term</strong> — Net 30, Net 60, prepay, credit application required?</li>
          <li><strong>Can you send a copy of the standard agreement</strong> in PDF for our review before we commit?</li>
          <li><strong>Who at H2O</strong> is our day-to-day point of contact after the transfer is complete?</li>
          <li><strong>Are there approved-product training</strong> or certification requirements before we can sell or install?</li>
        </ol>
      </div>

      <!-- FEES TO CONFIRM -->
      <h2 class="nu-section-title"><span class="word-1">Fee</span> <span class="word-rest">Categories to Capture</span></h2>
      <table class="fee-table">
        <thead>
          <tr>
            <th>Fee Category</th>
            <th>What to Confirm</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Application Fee</td>
            <td>One-time charge to submit transfer paperwork</td>
            <td><span class="pending-tag">Pending</span></td>
          </tr>
          <tr>
            <td>Transfer / Setup Fee</td>
            <td>Cost to formally process the transfer or change of relationship</td>
            <td><span class="pending-tag">Pending</span></td>
          </tr>
          <tr>
            <td>Annual / Recurring Fee</td>
            <td>Year-over-year cost to maintain dealer or distributor status</td>
            <td><span class="pending-tag">Pending</span></td>
          </tr>
          <tr>
            <td>Minimum Volume Penalty</td>
            <td>Charge if annual purchase volume is not met</td>
            <td><span class="pending-tag">Pending</span></td>
          </tr>
          <tr>
            <td>Training / Certification Fee</td>
            <td>Cost of required training, materials, or certification</td>
            <td><span class="pending-tag">Pending</span></td>
          </tr>
          <tr>
            <td>Deposit / Credit Hold</td>
            <td>Security deposit or credit reserve required at start</td>
            <td><span class="pending-tag">Pending</span></td>
          </tr>
          <tr>
            <td>Shipping / Freight Terms</td>
            <td>FOB point, freight responsibility, drop-ship fees</td>
            <td><span class="pending-tag">Pending</span></td>
          </tr>
          <tr>
            <td>Cancellation / Termination Fee</td>
            <td>Cost to exit the relationship if it is not a fit</td>
            <td><span class="pending-tag">Pending</span></td>
          </tr>
        </tbody>
      </table>

      <!-- CALL / EMAIL TEMPLATE -->
      <h2 class="nu-section-title"><span class="word-1">Outreach</span> <span class="word-rest">Template</span></h2>
      <div class="call-script">
        <p><span class="speaker">Subject:</span> Transfer Process &amp; Fee Schedule Request — Norris Utilities®</p>
        <p>Name —</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Aaron Norris with Norris Utilities® in Birmingham, Alabama. We are evaluating the H2O Waterproofing relationship and I would like to get the transfer process and fee schedule in writing so we can review on our end.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Specifically, please send:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;• Step-by-step transfer process and required documentation</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;• Complete fee schedule (application, transfer, recurring, minimum volume, training, deposits)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;• A copy of the standard dealer or distributor agreement for our review</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;• Day-to-day point of contact once the transfer is in place</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Happy to jump on a call if that is faster — 205-500-1343 is my direct line.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Sincerely,</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Founder &amp; CEO, Norris Utilities, LLC<br>
        &nbsp;&nbsp;&nbsp;&nbsp;205-500-1343 | acnorris@norrisutilities.com</p>
      </div>

      <!-- COMPLETION CRITERIA -->
      <h2 class="nu-section-title"><span class="word-1">Completion</span> <span class="word-rest">Criteria</span></h2>
      <div class="context-card">
        <p>This action item is closed when <strong>all of the following</strong> are true:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;• The transfer process is documented in writing from H2O Waterproofing.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;• The complete fee schedule is in writing and every category above has a value or a confirmed "not applicable."<br>
        &nbsp;&nbsp;&nbsp;&nbsp;• A copy of the standard agreement has been received and saved.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;• Master tracker is updated with response date, summary, and the next-step decision.</p>
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