<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rental Listing Disclosure Discrepancy — Action Plan — Norris Utilities®</title>
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
      --nu-warning-amber: #F59E0B;
      --nu-success-green: #0F8A3F;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 40px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 260px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-container {
      max-width: 1160px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* TITLE BAR */
    .nu-title-bar {
      margin-bottom: 36px;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-doc-type {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 5px 14px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    h1.nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
      letter-spacing: -0.01em;
    }
    h1.nu-page-title .highlight { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-size: 1.08rem;
      color: #555;
      font-weight: 400;
      max-width: 860px;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 22px;
      margin-top: 18px;
      font-size: 0.85rem;
      color: #6a6a78;
    }
    .nu-meta-row span strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.72rem;
      margin-right: 6px;
    }

    /* ALERT BANNER */
    .nu-alert {
      background: linear-gradient(135deg, #fff6f7 0%, #ffeaee 100%);
      border-left: 6px solid var(--nu-alert-red);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 40px;
      display: flex;
      gap: 18px;
      align-items: flex-start;
    }
    .nu-alert-icon {
      width: 38px; height: 38px;
      flex-shrink: 0;
      background: var(--nu-alert-red);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.3rem;
    }
    .nu-alert-title {
      font-weight: 900;
      color: var(--nu-alert-red);
      font-size: 1.05rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 6px;
    }
    .nu-alert-body {
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      line-height: 1.55;
    }

    /* SECTIONS */
    .nu-section { margin-bottom: 52px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-lede {
      font-size: 1rem;
      color: #555;
      margin-bottom: 24px;
      max-width: 860px;
    }

    /* COMPARISON TABLE */
    .nu-compare {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 10px;
    }
    .nu-compare-card {
      border-radius: 8px;
      padding: 24px;
      border: 1px solid var(--nu-medium-gray);
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-compare-card.listed {
      border-top: 5px solid var(--nu-warning-amber);
    }
    .nu-compare-card.actual {
      border-top: 5px solid var(--nu-blue);
    }
    .nu-compare-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-compare-card.listed .nu-compare-label { color: var(--nu-warning-amber); }
    .nu-compare-card.actual .nu-compare-label { color: var(--nu-blue); }
    .nu-compare-heading {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .nu-compare-list {
      list-style: none;
      padding: 0;
    }
    .nu-compare-list li {
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }
    .nu-compare-list li:last-child { border-bottom: none; }
    .nu-compare-list .k {
      color: #7a7a88;
      font-weight: 700;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      flex-shrink: 0;
    }
    .nu-compare-list .v {
      color: var(--nu-dark-text);
      text-align: right;
      font-weight: 400;
    }

    /* STEPS */
    .nu-steps {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .nu-step {
      display: grid;
      grid-template-columns: 70px 1fr auto;
      gap: 22px;
      padding: 22px 26px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      align-items: flex-start;
    }
    .nu-step-num {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-blue);
      line-height: 1;
      letter-spacing: -0.02em;
    }
    .nu-step-body h3 {
      font-weight: 900;
      font-size: 1.08rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-step-body p {
      color: #555;
      font-size: 0.95rem;
      margin-bottom: 8px;
    }
    .nu-step-body .why {
      font-size: 0.85rem;
      color: #7a7a88;
      font-style: italic;
      border-top: 1px dashed var(--nu-medium-gray);
      padding-top: 8px;
      margin-top: 8px;
    }
    .nu-step-tag {
      align-self: center;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      font-weight: 700;
      font-size: 0.72rem;
      padding: 6px 12px;
      border-radius: 20px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .nu-step-tag.priority { background: var(--nu-alert-red); color: white; }
    .nu-step-tag.followup { background: var(--nu-warning-amber); color: var(--nu-dark-text); }

    /* CALL SCRIPT */
    .nu-script {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px 32px;
      border-left: 5px solid var(--nu-cyan);
    }
    .nu-script-header {
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      font-size: 0.82rem;
      letter-spacing: 0.15em;
      margin-bottom: 14px;
    }
    .nu-script-body {
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .nu-script-body p {
      margin-bottom: 14px;
    }
    .nu-script-body p:last-child { margin-bottom: 0; }
    .nu-script-body em {
      color: var(--nu-blue);
      font-style: italic;
      font-weight: 400;
    }

    /* EVIDENCE CHECKLIST */
    .nu-checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 8px 0;
    }
    .nu-check-item {
      display: flex;
      gap: 14px;
      padding: 14px 24px;
      align-items: flex-start;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-check-item:last-child { border-bottom: none; }
    .nu-check-box {
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 3px;
    }
    .nu-check-body { flex: 1; }
    .nu-check-body strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 3px;
      font-size: 0.98rem;
    }
    .nu-check-body span {
      color: #666;
      font-size: 0.88rem;
    }

    /* OUTCOMES GRID */
    .nu-outcomes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .nu-outcome {
      padding: 22px;
      border-radius: 8px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-outcome-badge {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .nu-outcome.best .nu-outcome-badge { background: #d9f0e0; color: var(--nu-success-green); }
    .nu-outcome.fair .nu-outcome-badge { background: #fef3d5; color: #a16207; }
    .nu-outcome.walk .nu-outcome-badge { background: #ffe0e0; color: var(--nu-alert-red); }
    .nu-outcome h4 {
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-outcome p {
      font-size: 0.9rem;
      color: #555;
    }

    /* LEGAL NOTE */
    .nu-legal {
      margin-top: 40px;
      background: var(--nu-navy);
      color: rgba(255,255,255,0.88);
      padding: 26px 30px;
      border-radius: 8px;
      font-size: 0.92rem;
      line-height: 1.65;
    }
    .nu-legal h4 {
      color: var(--nu-cyan);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.85rem;
      margin-bottom: 10px;
      font-weight: 900;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.82);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
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
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.85rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 60px; }
      h1.nu-page-title { font-size: 1.7rem; }
      .nu-compare { grid-template-columns: 1fr; }
      .nu-step { grid-template-columns: 1fr; gap: 10px; padding: 18px; }
      .nu-step-num { font-size: 1.8rem; }
      .nu-step-tag { justify-self: start; }
      .nu-compare-list li { flex-direction: column; gap: 2px; }
      .nu-compare-list .v { text-align: left; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-step, .nu-compare-card, .nu-outcome { box-shadow: none; page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-badge">Action Plan · Rental Disclosure</div>
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

      <!-- TITLE -->
      <div class="nu-title-bar">
        <div class="nu-doc-type">reMarkable Action Item · Priority</div>
        <h1 class="nu-page-title">
          Address the <span class="highlight">Disclosure Discrepancy</span> Between the Rental Listing Advertisement and Actual Conditions
        </h1>
        <p class="nu-page-subtitle">
          A written and verbal plan to reconcile what was advertised in the rental listing with what was delivered on arrival — protect the tenancy, preserve the record, and drive to a clean resolution (corrected listing, concession, or release) without escalation.
        </p>
        <div class="nu-meta-row">
          <span><strong>Owner</strong> Aaron C. Norris</span>
          <span><strong>Prepared</strong> 2026-04-22</span>
          <span><strong>Source</strong> reMarkable Tablet</span>
          <span><strong>Status</strong> Open — 48 hr window</span>
        </div>
      </div>

      <!-- ALERT -->
      <div class="nu-alert">
        <div class="nu-alert-icon">!</div>
        <div>
          <div class="nu-alert-title">Act within 48 hours of move-in</div>
          <div class="nu-alert-body">
            Most states (including Alabama) treat the first 24–72 hours post-occupancy as the window to document move-in conditions and register written objections to material discrepancies. After that window, silence can be read as acceptance. Get the paper trail started today — phone calls alone are not enough.
          </div>
        </div>
      </div>

      <!-- SECTION 1: COMPARISON -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Document</span> <span class="rest">— Listing vs. Reality</span></h2>
        <p class="nu-section-lede">
          Build a side-by-side record before you call the landlord or agent. Fill in each row from the advertisement (MLS, Zillow, Apartments.com, agent email, or flyer) and from what you observed on arrival. Be specific. "Dishwasher listed — dishwasher missing" beats "kitchen not as described."
        </p>
        <div class="nu-compare">
          <div class="nu-compare-card listed">
            <div class="nu-compare-label">As Advertised</div>
            <div class="nu-compare-heading">Listing Advertisement</div>
            <ul class="nu-compare-list">
              <li><span class="k">Source</span><span class="v">Listing URL / screenshot</span></li>
              <li><span class="k">Listed Date</span><span class="v">Date of ad</span></li>
              <li><span class="k">Rent</span><span class="v">Advertised $/mo</span></li>
              <li><span class="k">Sq Ft</span><span class="v">Advertised square footage</span></li>
              <li><span class="k">Bed / Bath</span><span class="v">Advertised count</span></li>
              <li><span class="k">Included</span><span class="v">Appliances / utilities / parking stated</span></li>
              <li><span class="k">Condition</span><span class="v">"Move-in ready," "renovated," "like new"</span></li>
              <li><span class="k">Photos</span><span class="v">What the photos showed</span></li>
            </ul>
          </div>
          <div class="nu-compare-card actual">
            <div class="nu-compare-label">As Delivered</div>
            <div class="nu-compare-heading">Actual Condition on Arrival</div>
            <ul class="nu-compare-list">
              <li><span class="k">Source</span><span class="v">Your move-in photos / video (2026-04-22)</span></li>
              <li><span class="k">Inspected</span><span class="v">Date / time walkthrough completed</span></li>
              <li><span class="k">Rent Billed</span><span class="v">Actual $/mo on lease</span></li>
              <li><span class="k">Measured Sq Ft</span><span class="v">If measurable — note tape-measured result</span></li>
              <li><span class="k">Bed / Bath Found</span><span class="v">Actual count — note converted/den rooms</span></li>
              <li><span class="k">Included on Arrival</span><span class="v">What was actually present / working</span></li>
              <li><span class="k">Actual Condition</span><span class="v">Notes: damage, missing items, cleanliness</span></li>
              <li><span class="k">Photos Match?</span><span class="v">Point-by-point note on any staged/deceptive photos</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 2: STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Plan — Ordered Steps</span></h2>
        <p class="nu-section-lede">
          Work top to bottom. Do not skip the written notice step — a phone call alone doesn't protect you if this goes sideways.
        </p>
        <div class="nu-steps">

          <div class="nu-step">
            <div class="nu-step-num">01</div>
            <div class="nu-step-body">
              <h3>Preserve the Original Listing</h3>
              <p>Screenshot the ad exactly as published — URL, date, photos, description text, bed/bath count, amenities list, included items, and rent. Save the PDF to your file. If the listing has since been edited or pulled, pull the Google cache or the Wayback Machine copy (web.archive.org).</p>
              <p class="why">Why: advertisements are evidence. If the listing disappears, your claim becomes "he said / she said." A captured copy anchors the truth.</p>
            </div>
            <div class="nu-step-tag priority">Do First</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">02</div>
            <div class="nu-step-body">
              <h3>Photograph & Timestamp Actual Conditions</h3>
              <p>Walk every room with your phone camera. Record a continuous video plus individual stills. Confirm timestamps are turned on. Capture missing appliances, cosmetic damage, broken fixtures, and any safety issues (smoke detector, water leaks, HVAC). Photograph the thermostat, breaker panel, and water heater too.</p>
              <p class="why">Why: the move-in checklist is your baseline. Without it, the landlord can later claim pre-existing issues are your damage.</p>
            </div>
            <div class="nu-step-tag priority">Do First</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">03</div>
            <div class="nu-step-body">
              <h3>Complete the Move-In Inspection Checklist</h3>
              <p>If the lease or property manager provided an inspection form, fill it out today. If not, create one: room by room, condition rating, and a "matches listing: yes/no" column. Sign, date, and scan. Email a PDF copy to the landlord and cc yourself.</p>
              <p class="why">Why: a signed, dated, emailed checklist makes the record hard to dispute later and establishes the discrepancy formally.</p>
            </div>
            <div class="nu-step-tag">Same Day</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">04</div>
            <div class="nu-step-body">
              <h3>Send a Written Notice of Discrepancy</h3>
              <p>Email (and text as backup) the landlord or leasing agent. Subject line: "Move-In Discrepancy — [Property Address] — Written Notice." State the date of occupancy, list the specific discrepancies, attach the listing screenshots and your move-in photos, and request a written response within 5 business days. Keep tone professional, not adversarial.</p>
              <p class="why">Why: a written notice starts the clock on the landlord's duty to cure. Verbal complaints don't.</p>
            </div>
            <div class="nu-step-tag priority">Within 48 hrs</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">05</div>
            <div class="nu-step-body">
              <h3>Phone Call — Same Day as the Email</h3>
              <p>Call the landlord or agent right after sending the email so it's not a surprise. Keep it brief and civil. Use the call script on this page. End by confirming you've sent the written notice and asking what day you can expect a written response.</p>
              <p class="why">Why: a calm phone call preserves the relationship and often resolves things faster than email alone.</p>
            </div>
            <div class="nu-step-tag">Same Day</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">06</div>
            <div class="nu-step-body">
              <h3>Review the Lease Language</h3>
              <p>Pull up the signed lease. Check: (a) does it incorporate the listing by reference, (b) does it contain an "as-is" or "entire agreement" clause that purports to override the ad, (c) what are the notice, repair, and termination provisions, and (d) is there a mandatory arbitration or small-claims clause? Flag anything unusual.</p>
              <p class="why">Why: many leases have clauses that try to disclaim the advertisement. Alabama courts have held that material misrepresentation in advertising can still be actionable despite an as-is clause, but the lease terms frame the remedy.</p>
            </div>
            <div class="nu-step-tag">Within 48 hrs</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">07</div>
            <div class="nu-step-body">
              <h3>Determine the Remedy You'll Accept</h3>
              <p>Before the landlord responds, decide what "fixed" looks like to you. Options range from (a) cure the defect — install the missing appliance, complete the repair, by a specific date; (b) rent concession — reduce monthly rent for the delta in value; (c) release from lease without penalty plus return of deposit and first/last. Pick a first ask and a walk-away number.</p>
              <p class="why">Why: negotiations go faster when you've defined success before the other side replies.</p>
            </div>
            <div class="nu-step-tag">Before Reply</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">08</div>
            <div class="nu-step-body">
              <h3>Follow Up & Escalation Path</h3>
              <p>If there's no written response in 5 business days, send a second written notice referencing the first. If the listing was on MLS, file a report with the listing brokerage's managing broker (Alabama Real Estate Commission complaint is a last resort). For apartment listing sites, report the misleading ad. Preserve certified-mail receipts.</p>
              <p class="why">Why: a documented escalation path turns a landlord dispute into a provable claim if you ever need to go to small claims court or withhold rent under a repair-and-deduct theory.</p>
            </div>
            <div class="nu-step-tag followup">Day 6+</div>
          </div>

        </div>
      </section>

      <!-- CALL SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Call</span> <span class="rest">Script — Step 5</span></h2>
        <p class="nu-section-lede">
          Direct, warm, not apologetic. Lead with the ask. Keep it under three minutes.
        </p>
        <div class="nu-script">
          <div class="nu-script-header">Phone Script — Landlord / Agent</div>
          <div class="nu-script-body">
            <p>"[Name] — Aaron Norris. I'm calling about the [property address] rental."</p>
            <p>"I moved in yesterday, and there are a few items that don't line up with what was in the listing. I wanted to call before I followed up so you hear it from me directly. I also just emailed you a written summary with the listing screenshots and my move-in photos."</p>
            <p>"The main items are <em>[list your top 2-3 discrepancies — be specific]</em>. I'm not looking to make this harder than it needs to be. I'd like to find a fair resolution — either getting those items corrected by a set date, or a rent adjustment that reflects the actual condition."</p>
            <p>"Can you take a look at the email today and get me a written response by [date 5 business days out]? I'd rather handle this between us than escalate it."</p>
            <p>"Sincerely — 205-500-1343 if anything comes up before then."</p>
          </div>
        </div>
      </section>

      <!-- EVIDENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Evidence</span> <span class="rest">Checklist — Save to File</span></h2>
        <p class="nu-section-lede">
          Keep all of the following in one folder (cloud + local backup). If this ends up in mediation or small claims court, this folder is your case.
        </p>
        <div class="nu-checklist">
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Listing advertisement — full capture</strong>
              <span>Screenshots of every page, photos, descriptions. Save URL and date accessed. If pulled, grab web.archive.org version.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Signed lease & all addenda</strong>
              <span>Every page, initialed where required. Note any inconsistencies with the listing inside the lease itself.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Move-in photos & walkthrough video</strong>
              <span>Timestamped, every room, every reported issue. Back up to cloud storage the same day.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Completed inspection checklist</strong>
              <span>Signed, dated, scanned. Email-delivered copy to landlord with a read receipt if possible.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Written notice of discrepancy</strong>
              <span>Email + text. Save the sent copy with timestamp. Note the phone call date and time beside it.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Payment records</strong>
              <span>Security deposit, first/last, any application fees. Receipts or bank statements showing the transfers.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Correspondence log</strong>
              <span>Running log of every email, text, call, and voicemail — date, time, duration, summary. One line per contact.</span>
            </div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Comparable-rent research</strong>
              <span>Three nearby comparable listings at actual delivered condition. Supports a rent-concession ask.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- OUTCOMES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Target</span> <span class="rest">Outcomes — Pick Your Ask</span></h2>
        <p class="nu-section-lede">
          Decide in advance which outcome you'll accept so negotiation stays clean. Don't telegraph the walk-away until you have to.
        </p>
        <div class="nu-outcomes">
          <div class="nu-outcome best">
            <div class="nu-outcome-badge">Best Case</div>
            <h4>Cure the Discrepancy</h4>
            <p>Landlord fixes, installs, or provides the missing/misrepresented item within a stated deadline (typically 14–30 days). Written amendment to the lease memorializing the fix.</p>
          </div>
          <div class="nu-outcome fair">
            <div class="nu-outcome-badge">Fair Case</div>
            <h4>Rent Concession</h4>
            <p>Landlord can't or won't cure — accept a monthly rent reduction proportional to the lost value (often 5–15% depending on severity), documented as a signed lease addendum.</p>
          </div>
          <div class="nu-outcome walk">
            <div class="nu-outcome-badge">Walk-Away</div>
            <h4>Release Without Penalty</h4>
            <p>Misrepresentation is material and uncurable — lease void or terminated, full return of deposit and pre-paid rent, no early-termination fee. Get it in writing before you move out.</p>
          </div>
        </div>
      </section>

      <!-- LEGAL NOTE -->
      <div class="nu-legal">
        <h4>Important Note</h4>
        This page is an operational action plan — not legal advice. If the discrepancy is material (habitability, safety, significant value impact) or if the landlord refuses to respond in writing, consult an Alabama landlord-tenant attorney before withholding rent, breaking the lease, or filing any complaint. Alabama Legal Aid (866-456-4995) offers free consultation if cost is a barrier. Keep every document in this plan; your case is only as strong as your file.
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