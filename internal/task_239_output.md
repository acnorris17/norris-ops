<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Brief — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      opacity: 0.6;
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
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON TRANSITION */
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

    /* CONTENT AREA with ghost phoenix */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 700px;
      height: 700px;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230000FF' opacity='0.07'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230000FF' opacity='0.07'/></svg>");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* INTRO BANNER */
    .intro-banner {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
      border-left: 6px solid var(--nu-blue);
      padding: 28px 32px;
      margin-bottom: 48px;
      border-radius: 4px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .intro-banner .label {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .intro-banner h1 {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.25;
      margin-bottom: 10px;
    }
    .intro-banner .meta {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .intro-banner .meta strong { color: var(--nu-dark-text); }

    /* SECTION TITLES */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    section { margin-bottom: 48px; }

    /* KEY FACTS GRID */
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .fact-card .label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .fact-card .value {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .fact-card .sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* PHASE BADGES */
    .phase {
      display: flex;
      align-items: flex-start;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 32px 18px 24px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
    }
    .phase .num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 1rem;
      margin-right: 16px;
      flex-shrink: 0;
    }
    .phase .phase-body { flex: 1; }
    .phase .phase-title {
      font-size: 1.05rem;
      font-weight: 900;
      letter-spacing: 0.02em;
      margin-bottom: 4px;
    }
    .phase .phase-detail {
      font-size: 0.9rem;
      font-weight: 400;
      color: rgba(255,255,255,0.85);
      line-height: 1.5;
    }

    /* TWO-COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-card h3 {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 10px;
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 4px;
      top: 0;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
    }

    /* OFFER LADDER TABLE */
    .offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      font-size: 0.95rem;
    }
    .offer-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .offer-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.03em;
      font-size: 0.85rem;
      text-transform: uppercase;
    }
    .offer-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .offer-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .offer-table .round { font-weight: 900; color: var(--nu-blue); }
    .offer-table .amount { font-weight: 900; color: var(--nu-dark-text); }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #fff9e6 0%, #fffbf0 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 20px 26px;
      border-radius: 4px;
      margin: 24px 0;
    }
    .callout .callout-label {
      font-size: 0.8rem;
      font-weight: 900;
      color: #8a6d1f;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .callout p { font-size: 0.95rem; color: var(--nu-dark-text); }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 14px 18px;
      margin-bottom: 10px;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .checklist li::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* NEXT ACTION BOX */
    .next-action {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 32px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 8px 24px rgba(0, 0, 255, 0.2);
    }
    .next-action .label {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-cyan);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .next-action h3 {
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 12px;
    }
    .next-action p {
      font-size: 1rem;
      color: rgba(255,255,255,0.9);
      margin-bottom: 20px;
    }
    .next-action .btns {
      display: flex;
      gap: 14px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .btn-white {
      background: var(--nu-white);
      color: var(--nu-blue);
    }
    .btn-white:hover {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .btn-outline {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }
    .btn-outline:hover {
      background: var(--nu-white);
      color: var(--nu-blue);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
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
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 20px; }
      .intro-banner h1 { font-size: 1.5rem; }
      .nu-section-title { font-size: 1.3rem; }
      .two-col { grid-template-columns: 1fr; }
      .phase { clip-path: none; border-radius: 8px; padding: 18px 20px; }
      .offer-table { font-size: 0.85rem; }
      .offer-table th, .offer-table td { padding: 10px 12px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .fact-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .next-action { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="container">

      <!-- INTRO BANNER -->
      <div class="intro-banner">
        <div class="label">Acquisition Brief &nbsp;•&nbsp; Personal / Confidential</div>
        <h1>Estate Negotiation — 4505 Buttewoods</h1>
        <div class="meta">
          <strong>Target:</strong> 7,098 sq ft residential estate &nbsp;|&nbsp;
          <strong>Prepared for:</strong> Aaron C. Norris &nbsp;|&nbsp;
          <strong>Date:</strong> April 24, 2026
        </div>
      </div>

      <!-- KEY FACTS -->
      <section>
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <div class="facts-grid">
          <div class="fact-card">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <div class="sub">Confirm full street / city on listing</div>
          </div>
          <div class="fact-card">
            <div class="label">Heated Area</div>
            <div class="value">7,098 sq ft</div>
            <div class="sub">Verify via appraisal + tax records</div>
          </div>
          <div class="fact-card">
            <div class="label">Target Use</div>
            <div class="value">Primary Residence</div>
            <div class="sub">Long-term family estate</div>
          </div>
          <div class="fact-card">
            <div class="label">Status</div>
            <div class="value">Negotiation Phase</div>
            <div class="sub">Offer strategy below</div>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION PHASES -->
      <section>
        <h2 class="nu-section-title">Negotiation <span>Phases</span></h2>

        <div class="phase">
          <div class="num">1</div>
          <div class="phase-body">
            <div class="phase-title">DISCOVERY — Know the Ground Before the First Word</div>
            <div class="phase-detail">Pull recent comps within 1 mile (past 180 days). Confirm days-on-market, prior list-price reductions, tax-assessed value, and any HOA or easement documents. Learn seller motivation: relocation, estate, downsize, or divorce. Every lever starts here.</div>
          </div>
        </div>

        <div class="phase">
          <div class="num">2</div>
          <div class="phase-body">
            <div class="phase-title">INSPECTION &amp; APPRAISAL BASELINE</div>
            <div class="phase-detail">Order independent appraisal. Book a full structural + systems inspection (roof, HVAC, foundation, septic/sewer, pool/spa if applicable). Document all deferred maintenance with photos — these become dollar-for-dollar concessions at the table.</div>
          </div>
        </div>

        <div class="phase">
          <div class="num">3</div>
          <div class="phase-body">
            <div class="phase-title">OPENING OFFER — Anchor Low, Backed by Data</div>
            <div class="phase-detail">Submit written offer 8–12% below appraisal, with clear justification tied to comps and inspection findings. Short response window (48–72 hrs). Pre-approval letter from Patrick Lavette at Renasant Bank attached to signal credibility.</div>
          </div>
        </div>

        <div class="phase">
          <div class="num">4</div>
          <div class="phase-body">
            <div class="phase-title">COUNTER — Trade Concessions, Not Just Price</div>
            <div class="phase-detail">When the seller counters, trade on terms: closing-cost credits, repair allowances, personal property inclusions, rent-back, appliance/fixture riders. Every non-price win preserves cash at closing.</div>
          </div>
        </div>

        <div class="phase">
          <div class="num">5</div>
          <div class="phase-body">
            <div class="phase-title">CLOSE — Written, Wire-Ready, On Time</div>
            <div class="phase-detail">Lock financing with Patrick Lavette. Confirm title, survey, and deed prior to closing week. Walk-through 24 hours prior. Funds wired from a verified channel only. Keys, warranties, and manuals delivered at the table.</div>
          </div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section>
        <h2 class="nu-section-title">Offer <span>Ladder</span></h2>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">
          Suggested sequence once appraisal lands. Replace placeholder "AV" (Appraised Value) with the actual figure once the report is delivered. Do not exceed the ceiling without renewed justification.
        </p>
        <table class="offer-table">
          <thead>
            <tr>
              <th>Round</th>
              <th>Offer</th>
              <th>Concessions Requested</th>
              <th>Strategic Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="round">Round 1 — Opening</td>
              <td class="amount">AV × 0.88</td>
              <td>Closing costs (3%), home warranty, all appliances</td>
              <td>Anchor low; force a serious counter rather than a rejection.</td>
            </tr>
            <tr>
              <td class="round">Round 2 — Counter</td>
              <td class="amount">AV × 0.93</td>
              <td>Closing costs (2%), repair credits from inspection list</td>
              <td>Show good-faith movement while keeping repair leverage.</td>
            </tr>
            <tr>
              <td class="round">Round 3 — Near-Final</td>
              <td class="amount">AV × 0.97</td>
              <td>Repair credits only, no closing-cost ask</td>
              <td>Signal willingness to close; protect structural repair budget.</td>
            </tr>
            <tr>
              <td class="round">Ceiling</td>
              <td class="amount">AV × 1.00</td>
              <td>Seller pays for agreed-upon repairs at close</td>
              <td>Walk-away line. Do not exceed unless comps or appraisal change.</td>
            </tr>
          </tbody>
        </table>

        <div class="callout">
          <div class="callout-label">Decision Rule</div>
          <p>If seller holds above 100% of appraisal without a written comp justification, pause the negotiation for 10 days. A cooled seller is a workable seller. Time is on the buyer's side when the property has been shown but not sold.</p>
        </div>
      </section>

      <!-- LEVERAGE + RISK -->
      <section>
        <h2 class="nu-section-title">Leverage &amp; <span>Risk</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Leverage in Our Favor</h3>
            <ul>
              <li>Pre-approved financing through Patrick Lavette at Renasant Bank — fast, clean close.</li>
              <li>No contingent home-sale clause needed — cash-like posture.</li>
              <li>Flexible closing date — can match the seller's timeline to earn a price concession.</li>
              <li>Independent appraisal in hand = objective anchor the seller cannot dispute emotionally.</li>
              <li>Documented inspection findings convert directly into repair credits or price cuts.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Risks to Manage</h3>
            <ul>
              <li>Emotional attachment — this is a family estate decision, not a trade. Do not negotiate when tired or rushed.</li>
              <li>Appraisal gap — lender will only finance up to appraised value. Price-to-appraisal discipline is essential.</li>
              <li>Hidden deferred maintenance — 7,098 sq ft multiplies every HVAC, roof, or foundation issue.</li>
              <li>Property-tax reassessment at sale — confirm post-sale tax estimate before committing.</li>
              <li>Title &amp; easement surprises — require full title search and updated survey.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- DILIGENCE CHECKLIST -->
      <section>
        <h2 class="nu-section-title">Due Diligence <span>Checklist</span></h2>
        <ul class="checklist">
          <li>Pull tax-assessor records and property history (2016–2026).</li>
          <li>Order licensed appraisal from a lender-approved appraiser.</li>
          <li>Schedule full structural inspection — include roof, foundation, and HVAC specialty reports.</li>
          <li>Request seller disclosure form and last 3 years of utility bills.</li>
          <li>Obtain updated survey and title commitment from attorney.</li>
          <li>Confirm HOA dues, CC&amp;Rs, and any restrictive covenants on the lot.</li>
          <li>Verify flood zone, wind zone, and insurance quote before offer is submitted.</li>
          <li>Confirm financing terms, rate lock, and closing timeline with Patrick Lavette.</li>
          <li>Document every call and email — all negotiations in writing after verbal agreements.</li>
          <li>Final walk-through 24 hours before closing — camera in hand.</li>
        </ul>
      </section>

      <!-- TONE / VOICE -->
      <section>
        <h2 class="nu-section-title">Tone at <span>the Table</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>How We Negotiate</h3>
            <ul>
              <li>Direct, warm, genuine, confident — never pushy or apologetic.</li>
              <li>Lead with the ask or key point — never bury it.</li>
              <li>Every concession is documented and written before moving to the next point.</li>
              <li>Silence is a tool. Do not fill it.</li>
              <li>Walk-away readiness is the single most powerful position.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>What We Never Do</h3>
            <ul>
              <li>Never negotiate verbally without a written follow-up within 24 hours.</li>
              <li>Never show emotional attachment to the seller or their agent.</li>
              <li>Never exceed the ceiling without fresh appraisal or comp data.</li>
              <li>Never waive inspection to beat a competing bid.</li>
              <li>Never close without a final walk-through.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NEXT ACTION -->
      <section>
        <div class="next-action">
          <div class="label">Next Action</div>
          <h3>Order Appraisal &amp; Book Full Inspection</h3>
          <p>Before any offer is drafted, lock the baseline. Call Patrick Lavette at Renasant Bank to start the lender-ordered appraisal process.</p>
          <div class="btns">
            <a href="tel:2055001343" class="btn btn-white">Call Aaron — 205-500-1343</a>
            <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Estate%20—%20Next%20Steps" class="btn btn-outline">Email Plan Follow-Up</a>
          </div>
        </div>
      </section>

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