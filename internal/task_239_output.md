<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #2E7D32;
      --nu-warning: #E65100;
      --nu-danger: #C62828;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
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
    .nu-header * { position: relative; z-index: 2; }
    .nu-phoenix-icon {
      width: 70px; height: 70px;
      margin: 0 auto 14px;
      fill: var(--nu-white);
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
    }
    .nu-logo-text {
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* GHOST PHOENIX WATERMARK */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding-bottom: 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 600px;
      height: 600px;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230033cc' opacity='0.07'/></svg>");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      pointer-events: none;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    /* CONTAINER */
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px;
    }

    /* PAGE TITLE BLOCK */
    .page-title-block {
      text-align: center;
      margin-bottom: 40px;
    }
    .page-eyebrow {
      display: inline-block;
      background: linear-gradient(135deg, var(--nu-blue), #0044dd);
      color: var(--nu-white);
      padding: 8px 20px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .page-title {
      font-size: 2.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .page-title span { color: var(--nu-blue); }
    .page-sub {
      font-size: 1.1rem;
      color: #555;
      font-weight: 400;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* SNAPSHOT GRID */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .snapshot-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-left: 4px solid var(--nu-cyan);
    }
    .snapshot-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: #777;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .snapshot-value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .snapshot-value.accent { color: var(--nu-blue); }
    .snapshot-sub {
      font-size: 0.85rem;
      color: #666;
      margin-top: 4px;
    }

    /* TWO-COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      margin-bottom: 40px;
    }
    @media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }

    .content-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }

    .content-card h3 {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 14px;
    }

    .content-card p {
      margin-bottom: 12px;
      color: var(--nu-body-text);
    }

    .content-card ul {
      list-style: none;
      padding: 0;
    }
    .content-card ul li {
      padding: 9px 0 9px 24px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .content-card ul li:last-child { border-bottom: none; }
    .content-card ul li::before {
      content: '▸';
      position: absolute;
      left: 4px;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* NEGOTIATION STRATEGY */
    .strategy-section {
      margin-bottom: 40px;
    }
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .strategy-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      border-top: 4px solid var(--nu-blue);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .strategy-num {
      display: inline-flex;
      width: 32px; height: 32px;
      align-items: center;
      justify-content: center;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.9rem;
      margin-bottom: 10px;
    }
    .strategy-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .strategy-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* TIMELINE */
    .timeline {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 40px;
    }
    .timeline-item {
      display: flex;
      gap: 20px;
      padding: 16px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .timeline-item:last-child { border-bottom: none; }
    .timeline-phase {
      flex-shrink: 0;
      width: 110px;
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .timeline-content {
      flex: 1;
    }
    .timeline-content strong {
      display: block;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .timeline-content span {
      font-size: 0.9rem;
      color: #666;
    }

    /* FINANCIAL TABLE */
    .fin-table {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 40px;
      overflow-x: auto;
    }
    .fin-table table {
      width: 100%;
      border-collapse: collapse;
    }
    .fin-table th {
      text-align: left;
      padding: 12px 10px;
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      font-weight: 900;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 2px solid var(--nu-blue);
    }
    .fin-table td {
      padding: 14px 10px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .fin-table td.num {
      text-align: right;
      font-variant-numeric: tabular-nums;
      font-weight: 700;
    }
    .fin-table tr.total-row {
      background: #f0f4ff;
      font-weight: 900;
    }
    .fin-table tr.total-row td {
      border-bottom: none;
      font-size: 1.02rem;
      color: var(--nu-blue);
    }

    /* RISK BADGES */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .risk-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .risk-tag {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 14px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .risk-tag.high { background: #ffe6e6; color: var(--nu-danger); }
    .risk-tag.med { background: #fff3e0; color: var(--nu-warning); }
    .risk-tag.low { background: #e7f5e8; color: var(--nu-success); }
    .risk-title {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .risk-body {
      font-size: 0.9rem;
      color: #555;
    }

    /* NEXT ACTIONS BAR */
    .action-bar {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 32px;
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
    }
    .action-bar::before {
      content: '';
      position: absolute;
      top: -50%; right: -10%;
      width: 40%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
    }
    .action-bar > * { position: relative; }
    .action-bar h3 {
      font-size: 1.3rem;
      font-weight: 900;
      margin-bottom: 16px;
      color: var(--nu-cyan);
    }
    .action-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .action-item {
      background: rgba(255,255,255,0.08);
      border-left: 3px solid var(--nu-cyan);
      padding: 14px 16px;
      border-radius: 4px;
      font-size: 0.93rem;
    }
    .action-item strong {
      display: block;
      color: var(--nu-cyan);
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 12px;
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

    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.45em; }
      .page-title { font-size: 1.6rem; }
      .nu-container { padding: 30px 20px; }
      .timeline-item { flex-direction: column; gap: 6px; }
      .timeline-phase { width: auto; }
    }

    @media print {
      body { background: white; }
      .nu-header, .nu-footer, .action-bar { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .snapshot-card, .content-card, .strategy-card, .timeline, .fin-table, .risk-card { box-shadow: none; border: 1px solid #ccc; }
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

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="page-title-block">
        <div class="page-eyebrow">reMarkable Action Item · Strategic Acquisition</div>
        <h1 class="page-title">Negotiate Purchase — <span>4505 Buttewoods Estate</span></h1>
        <p class="page-sub">7,098 sq ft primary residence · Acquisition strategy and negotiation plan</p>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <div class="snapshot-grid">
        <div class="snapshot-card">
          <div class="snapshot-label">Address</div>
          <div class="snapshot-value">4505 Buttewoods</div>
          <div class="snapshot-sub">Target Property</div>
        </div>
        <div class="snapshot-card">
          <div class="snapshot-label">Total Living Area</div>
          <div class="snapshot-value accent">7,098 sq ft</div>
          <div class="snapshot-sub">Gross heated & cooled</div>
        </div>
        <div class="snapshot-card">
          <div class="snapshot-label">Status</div>
          <div class="snapshot-value">In Negotiation</div>
          <div class="snapshot-sub">Active discussion phase</div>
        </div>
        <div class="snapshot-card">
          <div class="snapshot-label">Decision Maker</div>
          <div class="snapshot-value">Aaron C. Norris</div>
          <div class="snapshot-sub">Direct principal</div>
        </div>
      </div>

      <!-- WHY & OBJECTIVES -->
      <div class="two-col">
        <div class="content-card">
          <h3>Acquisition Objective</h3>
          <p>Secure 4505 Buttewoods at a price and on terms that protect cash position, preserve business growth capital, and produce a defensible long-term appreciation profile for a 7,098 sq ft estate-class residence.</p>
          <p>The negotiation must deliver (1) a price anchored below appraised market value, (2) contingency protections covering inspection and financing, and (3) a closing calendar that does not collide with Norris Utilities® cash-flow cycles.</p>
        </div>
        <div class="content-card">
          <h3>What "Win" Looks Like</h3>
          <ul>
            <li>Purchase price 4–8% below asking, or below appraisal — whichever is lower</li>
            <li>Seller contribution toward closing costs or repair credits</li>
            <li>45- to 60-day close to align with quarter-end liquidity</li>
            <li>Clean title with full ALTA policy; survey matches recorded legal description</li>
            <li>All major-system inspections (roof, HVAC, electrical, foundation, plumbing) passed or credited</li>
            <li>No verbal side agreements — everything documented in the contract amendments</li>
          </ul>
        </div>
      </div>

      <!-- NEGOTIATION STRATEGY -->
      <div class="strategy-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Strategy</span></h2>
        <div class="strategy-grid">
          <div class="strategy-card">
            <div class="strategy-num">1</div>
            <div class="strategy-title">Anchor on Data, Not Emotion</div>
            <div class="strategy-body">Lead every conversation with comparable sales (3–5 comps within 1 mile, last 180 days), cost-per-square-foot analysis for 7,098 sq ft, and recorded-sale trend for the neighborhood. Never reveal ceiling; always cite sources.</div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">2</div>
            <div class="strategy-title">Understand Seller Motivation</div>
            <div class="strategy-body">Identify WHY they are selling — relocation, downsizing, estate, divorce, distress. Motivation determines leverage. Ask the listing agent direct questions: "How long has this been available? Any prior offers? What is their ideal closing date?"</div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">3</div>
            <div class="strategy-title">Open Below, Leave Room</div>
            <div class="strategy-body">First offer comes in 8–12% below asking, supported by comps and an inspection-contingent clause. Preserve 3–4 concession lanes so every counter can yield something meaningful without touching the ceiling.</div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">4</div>
            <div class="strategy-title">Use Non-Price Levers</div>
            <div class="strategy-body">Close timing, earnest money posture, inspection period length, rent-back window, included personal property (appliances, fixtures), and seller-paid home warranty. These often move more value than $5K of price.</div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">5</div>
            <div class="strategy-title">Protect Every Contingency</div>
            <div class="strategy-body">Inspection, financing, appraisal, and title contingencies stay in writing. Do not waive appraisal on a 7,098 sq ft estate-class home — the appraisal is the single best protective instrument against overpaying.</div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">6</div>
            <div class="strategy-title">Be Prepared to Walk</div>
            <div class="strategy-body">The strongest negotiating stance is genuine willingness to walk away. Set the walk-away number in writing before making the first offer and do not move it without new information from the market.</div>
          </div>
        </div>
      </div>

      <!-- NEGOTIATION TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Timeline</span></h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-phase">Week 1</div>
          <div class="timeline-content">
            <strong>Intelligence & Comps</strong>
            <span>Pull last-180-day sales within 1 mile. Get full tax record. Order preliminary title search. Identify days on market, prior listings, and price history. Interview listing agent to surface seller motivation.</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Week 1–2</div>
          <div class="timeline-content">
            <strong>Financing Pre-Commitment</strong>
            <span>Lock lender pre-approval at full purchase amount plus reserves. Confirm conforming vs. jumbo threshold for the 7,098 sq ft property. Have Patrick Lavette at Renasant Bank review the deal structure for portfolio-loan fit.</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Week 2</div>
          <div class="timeline-content">
            <strong>Submit Offer #1</strong>
            <span>Written offer 8–12% below asking, with full contingency package, earnest money appropriate for the price tier, 45–60 day close, and a 24–48 hour response clause to create urgency without aggression.</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Week 2–3</div>
          <div class="timeline-content">
            <strong>Counter Negotiation</strong>
            <span>Expect counter at 2–4% below asking. Counter back with movement on price AND a concession ask (seller-paid closing costs, home warranty, or extended due diligence). Target settlement 4–8% below asking.</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Week 3</div>
          <div class="timeline-content">
            <strong>Contract Executed · Due Diligence Opens</strong>
            <span>Order inspection, survey, and appraisal immediately. Schedule in this order: general inspection → specialty trades (HVAC, roof, foundation) → appraisal. A 7,098 sq ft home may need 2–3 inspectors across a full day.</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Week 4–5</div>
          <div class="timeline-content">
            <strong>Repair Request & Final Terms</strong>
            <span>Negotiate repair credits based on inspection findings — prefer cash credits at close over seller-performed repairs. Re-price if appraisal comes in low; use appraisal contingency as the final protection lever.</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Week 6–8</div>
          <div class="timeline-content">
            <strong>Close & Funding</strong>
            <span>Final walk-through 24 hours before close. Review ALTA settlement statement line by line. Wire transfer only — never check. Record deed same day. Confirm insurance in force at funding, not at recording.</span>
          </div>
        </div>
      </div>

      <!-- FINANCIAL FRAMEWORK -->
      <h2 class="nu-section-title"><span class="first">Financial</span> <span class="rest">Framework</span></h2>
      <div class="fin-table">
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Norris Position</th>
              <th>Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Opening Offer</td>
              <td class="num">8–12% below ask</td>
              <td>Leaves negotiation room; anchors conversation downward</td>
            </tr>
            <tr>
              <td>Target Purchase Price</td>
              <td class="num">4–8% below ask</td>
              <td>Meets appraisal discipline; reflects estate-class market</td>
            </tr>
            <tr>
              <td>Walk-Away Ceiling</td>
              <td class="num">At or below appraisal</td>
              <td>Never pay above third-party valuation</td>
            </tr>
            <tr>
              <td>Earnest Money</td>
              <td class="num">1–2% of purchase</td>
              <td>Shows commitment without over-exposing capital</td>
            </tr>
            <tr>
              <td>Inspection Period</td>
              <td class="num">10–14 days</td>
              <td>Sufficient for 7,098 sq ft plus specialty trades</td>
            </tr>
            <tr>
              <td>Seller Concessions Target</td>
              <td class="num">$8K–$15K</td>
              <td>Closing costs, home warranty, and/or repair credits</td>
            </tr>
            <tr>
              <td>Close Timeline</td>
              <td class="num">45–60 days</td>
              <td>Aligns with cash-flow cycle; no rush premium</td>
            </tr>
            <tr class="total-row">
              <td>Priority</td>
              <td class="num">Terms &gt; Price</td>
              <td>Contingencies protect the downside; price is one number</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- RISK REGISTER -->
      <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Register</span></h2>
      <div class="risk-grid">
        <div class="risk-card">
          <span class="risk-tag high">High</span>
          <div class="risk-title">Low Appraisal</div>
          <div class="risk-body">A 7,098 sq ft property is harder to comp accurately. Mitigate by keeping the appraisal contingency in force and by having comps ready to challenge a low valuation.</div>
        </div>
        <div class="risk-card">
          <span class="risk-tag high">High</span>
          <div class="risk-title">Deferred Maintenance</div>
          <div class="risk-body">Large homes hide expensive systems: roof, HVAC zones, pool equipment, mechanical rooms, well/septic. Budget for 2–3 inspectors and at least one specialty trade review.</div>
        </div>
        <div class="risk-card">
          <span class="risk-tag med">Medium</span>
          <div class="risk-title">Financing Tier Change</div>
          <div class="risk-body">Purchase price may exceed conforming-loan limits, pushing the deal into jumbo territory with stricter underwriting. Confirm loan tier with lender before offer, not after.</div>
        </div>
        <div class="risk-card">
          <span class="risk-tag med">Medium</span>
          <div class="risk-title">Title or Survey Defects</div>
          <div class="risk-body">Estate properties often have boundary encroachments, easement questions, or historical title gaps. Order the survey early and require seller to clear any defects before closing.</div>
        </div>
        <div class="risk-card">
          <span class="risk-tag med">Medium</span>
          <div class="risk-title">Seller Retrades</div>
          <div class="risk-body">Seller may try to renegotiate after repair requests. Hold line by referring to the written inspection report and the contractual right to terminate. Do not chase the deal.</div>
        </div>
        <div class="risk-card">
          <span class="risk-tag low">Low</span>
          <div class="risk-title">Insurance & Carrying Cost</div>
          <div class="risk-body">Estate-class homes carry higher insurance premiums and property taxes. Quote both lines during inspection period so there are no surprises at funding.</div>
        </div>
      </div>

      <!-- KEY PROFESSIONAL TEAM -->
      <div class="two-col" style="margin-top: 40px;">
        <div class="content-card">
          <h3>Professional Team to Engage</h3>
          <ul>
            <li>Buyer's real estate attorney — contract review, title review, closing representation</li>
            <li>Lender — Patrick Lavette, Renasant Bank, for portfolio or jumbo loan fit</li>
            <li>General home inspector — estate-class experience required</li>
            <li>Roof, HVAC, foundation specialists — at least one of each</li>
            <li>Licensed surveyor — boundary, encroachment, easement verification</li>
            <li>Insurance agent — quote homeowners plus excess liability umbrella</li>
            <li>CPA — confirm acquisition structure and property-tax posture</li>
          </ul>
        </div>
        <div class="content-card">
          <h3>What NOT to Do</h3>
          <ul>
            <li>Do not waive the appraisal contingency on a 7,098 sq ft property</li>
            <li>Do not sign any verbal agreements — everything written into the contract</li>
            <li>Do not show the ceiling or disclose the walk-away number</li>
            <li>Do not accelerate close beyond 45 days without a concession in return</li>
            <li>Do not skip specialty inspections to "save money" — a $500 inspection can surface a $25K repair</li>
            <li>Do not let emotion decide — if the math does not work, walk</li>
            <li>Do not wire funds to any party other than the title company, verified by phone</li>
          </ul>
        </div>
      </div>

      <!-- ACTION BAR -->
      <div class="action-bar" style="margin-top: 40px;">
        <h3>Next 48 Hours — Action List</h3>
        <div class="action-list">
          <div class="action-item">
            <strong>Step 1</strong>
            Pull comparable sales within 1 mile, last 180 days, for 6,500–7,500 sq ft properties.
          </div>
          <div class="action-item">
            <strong>Step 2</strong>
            Call Patrick Lavette at Renasant Bank to confirm financing tier and pre-approval posture.
          </div>
          <div class="action-item">
            <strong>Step 3</strong>
            Request disclosure packet and property history from listing agent — days on market, prior offers, prior listings.
          </div>
          <div class="action-item">
            <strong>Step 4</strong>
            Engage buyer's real estate attorney and confirm availability for contract review this week.
          </div>
          <div class="action-item">
            <strong>Step 5</strong>
            Set walk-away number in writing. Seal it. Do not move it without new market data.
          </div>
          <div class="action-item">
            <strong>Step 6</strong>
            Draft Offer #1 with full contingency package and 24–48 hour response clause.
          </div>
        </div>
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