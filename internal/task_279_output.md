<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Water Intrusion Remediation Action Plan — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-warning-amber: #E67E22;
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
      min-height: 300px;
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
      width: 80px; height: 80px;
      margin: 0 auto 16px;
      opacity: 0.95;
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
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 60%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOCUMENT META */
    .doc-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      padding-bottom: 24px;
      border-bottom: 2px solid var(--nu-medium-gray);
      margin-bottom: 40px;
    }
    .doc-type {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 16px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      border-radius: 2px;
    }
    .doc-date {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .doc-date strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* PAGE TITLE */
    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .page-title span {
      color: var(--nu-blue);
    }
    .page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 40px;
      max-width: 800px;
    }

    /* ALERT BANNER */
    .alert-banner {
      background: linear-gradient(135deg, #fff4f0 0%, #ffe8e0 100%);
      border-left: 6px solid var(--nu-alert-red);
      padding: 24px 28px;
      border-radius: 4px;
      margin-bottom: 40px;
      display: flex;
      gap: 18px;
      align-items: flex-start;
    }
    .alert-icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      font-weight: 900;
    }
    .alert-content h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-alert-red);
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .alert-content p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }

    /* SECTION */
    .section {
      margin-bottom: 48px;
    }
    .section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .section-title .first-word {
      color: var(--nu-blue);
    }
    .section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* SITUATION GRID */
    .situation-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .situation-card {
      background: var(--nu-light-gray);
      border-top: 4px solid var(--nu-blue);
      padding: 20px;
      border-radius: 4px;
    }
    .situation-card .label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .situation-card .value {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      line-height: 1.4;
    }

    /* ACTION STEPS */
    .action-steps {
      list-style: none;
      counter-reset: step;
      padding: 0;
    }
    .action-step {
      counter-increment: step;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px 24px 80px;
      margin-bottom: 16px;
      position: relative;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .action-step:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    }
    .action-step::before {
      content: counter(step);
      position: absolute;
      top: 22px;
      left: 22px;
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .action-step h4 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .action-step p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }
    .action-step .timing {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 3px;
      margin-top: 10px;
    }

    /* CONTRACTOR CARDS */
    .contractor-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .contractor-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
    }
    .contractor-card h4 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .contractor-card .specialty {
      font-size: 0.8rem;
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .contractor-card ul {
      list-style: none;
      padding: 0;
    }
    .contractor-card li {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      padding: 4px 0;
      padding-left: 20px;
      position: relative;
    }
    .contractor-card li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 0;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px 32px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist-item:last-child { border-bottom: none; }
    .checkbox {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .checklist-item .text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .checklist-item .text strong {
      font-weight: 700;
      color: var(--nu-blue);
    }

    /* BUDGET TABLE */
    .budget-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 6px;
      overflow: hidden;
    }
    .budget-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .budget-table th {
      padding: 14px 18px;
      text-align: left;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .budget-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .budget-table tr:last-child td { border-bottom: none; }
    .budget-table tr:hover { background: var(--nu-light-gray); }
    .budget-table td.amount {
      text-align: right;
      font-weight: 700;
      color: var(--nu-blue);
    }
    .budget-table tfoot {
      background: var(--nu-light-gray);
      font-weight: 900;
    }
    .budget-table tfoot td {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 900;
      padding: 16px 18px;
      border-top: 2px solid var(--nu-blue);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 8px;
      margin-top: 32px;
      position: relative;
      overflow: hidden;
    }
    .callout::before {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
    }
    .callout > * { position: relative; z-index: 1; }
    .callout h3 {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .callout p {
      color: rgba(255,255,255,0.92);
      font-size: 1rem;
      line-height: 1.7;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 20px; }
      .page-title { font-size: 1.7rem; }
      .action-step { padding: 20px 20px 20px 70px; }
      .action-step::before { top: 18px; left: 16px; width: 38px; height: 38px; font-size: 1rem; }
      .budget-table th, .budget-table td { padding: 10px 12px; font-size: 0.85rem; }
      .doc-meta { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .action-step { box-shadow: none; border: 1px solid #ccc; break-inside: avoid; }
      .callout { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- DOC META -->
      <div class="doc-meta">
        <span class="doc-type">Facility Action Plan</span>
        <div class="doc-date">
          <strong>Issued:</strong> April 22, 2026 &nbsp;|&nbsp;
          <strong>Source:</strong> reMarkable Action Item &nbsp;|&nbsp;
          <strong>Owner:</strong> Aaron C. Norris
        </div>
      </div>

      <!-- PAGE TITLE -->
      <h1 class="page-title">Water <span>Intrusion</span> Remediation</h1>
      <p class="page-subtitle">
        Action plan for addressing an active water intrusion issue requiring professional
        waterproofing intervention. Left unresolved, moisture breaches compromise structural
        integrity, trigger mold, and erode the value of every asset stored behind the wall.
      </p>

      <!-- ALERT BANNER -->
      <div class="alert-banner">
        <div class="alert-icon">!</div>
        <div class="alert-content">
          <h3>PRIORITY — ACT WITHIN 72 HOURS</h3>
          <p>
            Every day an active leak is ignored compounds damage. Drywall wicks, framing rots,
            and insurance carriers reduce claim coverage when delay is documented. Photograph
            the intrusion site today and begin contractor outreach tomorrow morning.
          </p>
        </div>
      </div>

      <!-- SITUATION -->
      <section class="section">
        <h2 class="section-title">
          <span class="first-word">Situation</span> <span class="rest">Summary</span>
        </h2>
        <div class="situation-grid">
          <div class="situation-card">
            <div class="label">Issue Type</div>
            <div class="value">Active Water Intrusion</div>
          </div>
          <div class="situation-card">
            <div class="label">Source (Suspected)</div>
            <div class="value">Exterior wall / foundation seal failure</div>
          </div>
          <div class="situation-card">
            <div class="label">Remediation Level</div>
            <div class="value">Professional Waterproofing Required</div>
          </div>
          <div class="situation-card">
            <div class="label">Captured Via</div>
            <div class="value">reMarkable Action Item — April 22, 2026</div>
          </div>
        </div>
      </section>

      <!-- ACTION STEPS -->
      <section class="section">
        <h2 class="section-title">
          <span class="first-word">Action</span> <span class="rest">Steps</span>
        </h2>
        <ol class="action-steps">
          <li class="action-step">
            <h4>Document the Intrusion Site</h4>
            <p>
              Photograph the affected wall, floor, and ceiling from at least four angles.
              Include close-ups of staining, efflorescence, peeling paint, or visible mold.
              Save images to the Norris Utilities® asset drive with the filename format
              <em>water_intrusion_2026-04-22_[location].jpg</em>.
            </p>
            <span class="timing">Today</span>
          </li>
          <li class="action-step">
            <h4>Isolate and Protect Inventory</h4>
            <p>
              Move any FlexPro Armor stock, Samson Rope inventory, tools, records, or
              electronics out of the zone within 5 feet of the intrusion. Water damage to
              product inventory is not recoverable — the move is cheaper than the loss.
            </p>
            <span class="timing">Today</span>
          </li>
          <li class="action-step">
            <h4>Place a Moisture Meter or Visual Dye Test</h4>
            <p>
              Confirm whether intrusion is active or residual. A meter reading above 20%
              on drywall indicates active moisture. For exterior-source suspicion, garden
              hose the exterior wall in 10-minute zones and watch for interior seepage.
            </p>
            <span class="timing">24–48 Hours</span>
          </li>
          <li class="action-step">
            <h4>Obtain Three Waterproofing Bids</h4>
            <p>
              Reach out to three licensed, bonded waterproofing contractors in the
              Birmingham metro. Require written scope, materials spec, warranty length,
              and lien waiver language. Do not accept verbal bids — the paper protects us.
            </p>
            <span class="timing">Within 5 Days</span>
          </li>
          <li class="action-step">
            <h4>Review &amp; Award the Contract</h4>
            <p>
              Compare bids on total value — not lowest price. Warranty transferability,
              drainage system specification (French drain, interior perimeter, or
              exterior excavation), and crew experience matter more than $500 in savings.
            </p>
            <span class="timing">Within 7 Days</span>
          </li>
          <li class="action-step">
            <h4>Notify Insurance Carrier</h4>
            <p>
              Open a claim record even if we intend to self-pay. Carriers require timely
              notice; silence can void future related coverage. Share photos and contractor
              scope once secured.
            </p>
            <span class="timing">Within 10 Days</span>
          </li>
          <li class="action-step">
            <h4>Post-Work Verification</h4>
            <p>
              After waterproofing is complete, run a second hose test and return with the
              moisture meter. Require the contractor to return at no charge if a new leak
              appears within the warranty window. File warranty paperwork in the Norris
              Utilities® facility records folder.
            </p>
            <span class="timing">After Completion</span>
          </li>
        </ol>
      </section>

      <!-- CONTRACTOR SHORTLIST GUIDANCE -->
      <section class="section">
        <h2 class="section-title">
          <span class="first-word">Contractor</span> <span class="rest">Shortlist Criteria</span>
        </h2>
        <div class="contractor-grid">
          <div class="contractor-card">
            <h4>Interior Waterproofing</h4>
            <div class="specialty">Basement / Crawl Space</div>
            <ul>
              <li>Licensed &amp; bonded in Alabama</li>
              <li>Minimum 10 years in business</li>
              <li>Transferable warranty (minimum 10 years)</li>
              <li>Sump pump + interior perimeter drain experience</li>
            </ul>
          </div>
          <div class="contractor-card">
            <h4>Exterior Waterproofing</h4>
            <div class="specialty">Excavation / Foundation Seal</div>
            <ul>
              <li>Membrane system spec must be documented</li>
              <li>Excavation insurance coverage in writing</li>
              <li>Landscape restoration clause included</li>
              <li>Drain tile + backfill specification</li>
            </ul>
          </div>
          <div class="contractor-card">
            <h4>Commercial Restoration</h4>
            <div class="specialty">Drying / Mold Remediation</div>
            <ul>
              <li>IICRC-certified technicians</li>
              <li>Containment protocol documentation</li>
              <li>Third-party air quality testing</li>
              <li>Direct-bill with insurance carriers</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="section">
        <h2 class="section-title">
          <span class="first-word">Pre-Bid</span> <span class="rest">Checklist</span>
        </h2>
        <div class="checklist">
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="text">
              Photographs of <strong>all affected areas</strong> saved and dated
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="text">
              Inventory within <strong>5-foot radius</strong> relocated to dry area
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="text">
              Moisture meter reading logged on <strong>three points</strong> of affected wall
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="text">
              Exterior wall inspected for <strong>grading, downspouts, and drainage</strong> issues
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="text">
              Three <strong>written bids</strong> obtained with matching scope of work
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="text">
              Contractor <strong>license, insurance, and references</strong> verified
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="text">
              Warranty terms reviewed — <strong>minimum 10 years transferable</strong>
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="text">
              Insurance carrier <strong>notified and claim number</strong> recorded
            </div>
          </div>
        </div>
      </section>

      <!-- BUDGET -->
      <section class="section">
        <h2 class="section-title">
          <span class="first-word">Budget</span> <span class="rest">Planning Range</span>
        </h2>
        <table class="budget-table">
          <thead>
            <tr>
              <th>Scope Item</th>
              <th>Detail</th>
              <th style="text-align:right;">Est. Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inspection &amp; Diagnosis</td>
              <td>Professional site assessment + moisture mapping</td>
              <td class="amount">$250 – $500</td>
            </tr>
            <tr>
              <td>Interior Perimeter Drain</td>
              <td>Trench + drain tile + sump pump install</td>
              <td class="amount">$4,500 – $9,500</td>
            </tr>
            <tr>
              <td>Exterior Membrane System</td>
              <td>Excavation + membrane + drain tile + backfill</td>
              <td class="amount">$8,000 – $18,000</td>
            </tr>
            <tr>
              <td>Drywall / Insulation Replacement</td>
              <td>After dry-out, restore interior finish</td>
              <td class="amount">$1,200 – $3,500</td>
            </tr>
            <tr>
              <td>Mold Remediation (if required)</td>
              <td>Containment, removal, air scrubbing, testing</td>
              <td class="amount">$1,500 – $6,000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">Total Working Budget Range</td>
              <td class="amount">$15,450 – $37,500</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <!-- CALLOUT -->
      <div class="callout">
        <h3>Aaron's Standing Rule</h3>
        <p>
          We never cut corners on the building that houses the inventory that feeds the
          business. A dry warehouse protects FlexPro Armor stock, Samson Rope reels, and
          every dollar of equipment we represent. Fix it right the first time. Document
          every step. Keep the paper. Third-generation thinking means the building outlasts
          the problem — and outlasts us.
        </p>
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