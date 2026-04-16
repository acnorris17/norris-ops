<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Property Acquisition Review — 4505 Buttewoods Lane — Norris Utilities®</title>
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
      --nu-success: #0F9D58;
      --nu-warning: #E8A100;
      --nu-alert: #D93025;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-inner { position: relative; z-index: 2; }
    .nu-phoenix-watermark {
      position: absolute;
      left: 50%;
      top: 50%;
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
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
      margin-bottom: 28px;
    }
    .nu-doc-badge {
      display: inline-block;
      background: rgba(0,0,0,0.35);
      color: var(--nu-white);
      padding: 10px 24px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      border: 1px solid rgba(255,255,255,0.3);
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area { position: relative; background: var(--nu-white); }
    .nu-content-wrap { max-width: 1100px; margin: 0 auto; padding: 50px 40px 70px; }

    /* INTRO BANNER */
    .nu-intro {
      background: linear-gradient(135deg, #f8faff 0%, #ecf2ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 28px 32px;
      margin-bottom: 40px;
      border-radius: 4px;
    }
    .nu-intro h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-intro h1 .nu-first-word { color: var(--nu-blue); }
    .nu-intro .nu-meta {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.8;
    }
    .nu-intro .nu-meta strong { color: var(--nu-dark-text); }

    /* SECTIONS */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .nu-section-title .nu-first-word { color: var(--nu-blue); }

    /* GRID */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    .nu-grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-card-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-card-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      line-height: 1.3;
    }
    .nu-card-note {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }

    /* ACTION LIST */
    .nu-action-list { list-style: none; padding: 0; margin: 0; }
    .nu-action-list li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 20px;
      margin-bottom: 10px;
      border-radius: 4px;
      display: grid;
      grid-template-columns: 36px 1fr;
      gap: 14px;
      align-items: start;
    }
    .nu-action-num {
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
      flex-shrink: 0;
    }
    .nu-action-body { font-size: 0.95rem; }
    .nu-action-body strong { color: var(--nu-dark-text); display: block; margin-bottom: 4px; font-size: 1rem; }

    /* CHEVRON BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .nu-badge-num {
      color: var(--nu-cyan);
      font-weight: 900;
      margin-right: 14px;
      font-size: 1.1rem;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .nu-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 14px 16px;
      text-align: left;
    }
    .nu-table td {
      padding: 14px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td { background: #fafbfd; }

    /* RED FLAGS */
    .nu-flag {
      background: #fff8f7;
      border: 1px solid #f5d2ce;
      border-left: 4px solid var(--nu-alert);
      padding: 14px 18px;
      border-radius: 4px;
      margin-bottom: 10px;
      font-size: 0.93rem;
    }
    .nu-flag strong { color: var(--nu-alert); }

    /* NEGOTIATION BOX */
    .nu-negotiate-box {
      background: linear-gradient(135deg, var(--nu-dark-text) 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 32px;
      border-radius: 8px;
      margin-top: 20px;
    }
    .nu-negotiate-box h3 {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.05em;
    }
    .nu-negotiate-box ul { padding-left: 22px; }
    .nu-negotiate-box li { margin-bottom: 10px; line-height: 1.55; }
    .nu-negotiate-box li strong { color: var(--nu-cyan); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-sep { color: rgba(255,255,255,0.4); margin: 0 8px; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-wrap { padding: 32px 20px 50px; }
      .nu-intro { padding: 20px; }
      .nu-intro h1 { font-size: 1.4rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 12px 16px; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.85rem; }
      .nu-footer-contact { font-size: 0.9rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-table { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-badge">Property Acquisition — Internal Review</div>
    </div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <div class="nu-intro">
        <h1><span class="nu-first-word">Property</span> Acquisition — 4505 Buttewoods Lane</h1>
        <div class="nu-meta">
          <strong>Action Source:</strong> reMarkable handwritten note — review and negotiate property purchase<br>
          <strong>Prepared for:</strong> Aaron C. Norris, Founder &amp; CEO<br>
          <strong>Status:</strong> Pre-offer — due diligence &amp; negotiation strategy<br>
          <strong>Date Opened:</strong> April 16, 2026
        </div>
      </div>

      <!-- SITUATION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Situation</span> Summary</h2>
        <div class="nu-grid-2">
          <div class="nu-card">
            <div class="nu-card-label">Subject Property</div>
            <div class="nu-card-value">4505 Buttewoods Lane</div>
            <div class="nu-card-note">Confirm exact municipality, county, and zip before offer is extended. Verify street spelling on county records (Buttewoods vs. Butterwoods vs. Buttewood).</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Objective</div>
            <div class="nu-card-value">Review &amp; Negotiate Purchase</div>
            <div class="nu-card-note">Aaron to complete diligence, establish walk-away number, and open negotiation with seller on defensible terms.</div>
          </div>
        </div>
      </section>

      <!-- DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Due</span> Diligence Checklist</h2>
        <ul class="nu-action-list">
          <li>
            <div class="nu-action-num">1</div>
            <div class="nu-action-body">
              <strong>Pull County Records</strong>
              Confirm parcel ID, legal description, current deed-of-record owner, acreage, and frontage. Verify against seller's representations line-by-line.
            </div>
          </li>
          <li>
            <div class="nu-action-num">2</div>
            <div class="nu-action-body">
              <strong>Tax History &amp; Assessed Value</strong>
              Pull last 3 years of property tax bills. Compare assessed value to asking price. Confirm taxes are current — arrears become a negotiation lever.
            </div>
          </li>
          <li>
            <div class="nu-action-num">3</div>
            <div class="nu-action-body">
              <strong>Title Search / Lien Check</strong>
              Order a preliminary title search. Identify all mortgages, judgments, mechanic's liens, HOA liens, and IRS liens. Any cloud on title must be resolved before closing.
            </div>
          </li>
          <li>
            <div class="nu-action-num">4</div>
            <div class="nu-action-body">
              <strong>Zoning &amp; Use Verification</strong>
              Confirm zoning classification and permitted uses. Confirm the intended use (personal, rental, commercial, or storage/operations yard) is allowed as-of-right — not subject to variance.
            </div>
          </li>
          <li>
            <div class="nu-action-num">5</div>
            <div class="nu-action-body">
              <strong>Survey &amp; Boundary</strong>
              Order (or obtain from seller) a current boundary survey. Identify easements, setbacks, encroachments, and access rights.
            </div>
          </li>
          <li>
            <div class="nu-action-num">6</div>
            <div class="nu-action-body">
              <strong>Utilities &amp; Infrastructure</strong>
              Verify water/sewer/electric/gas availability and capacity. If septic or well: inspection required. If on utility line: pull service records.
            </div>
          </li>
          <li>
            <div class="nu-action-num">7</div>
            <div class="nu-action-body">
              <strong>Environmental / Flood</strong>
              Pull FEMA flood map. If Zone A or V, price insurance. Check for underground storage tanks, historical industrial use, and wetlands designation.
            </div>
          </li>
          <li>
            <div class="nu-action-num">8</div>
            <div class="nu-action-body">
              <strong>Structural Inspection</strong>
              Licensed inspector — roof, foundation, HVAC, plumbing, electrical, pest/termite. Condition report feeds directly into price negotiation.
            </div>
          </li>
          <li>
            <div class="nu-action-num">9</div>
            <div class="nu-action-body">
              <strong>Comparable Sales (Comps)</strong>
              Pull 3–5 comparable sales within 1 mile over the past 6–12 months. Establish defensible fair market value before making an offer.
            </div>
          </li>
          <li>
            <div class="nu-action-num">10</div>
            <div class="nu-action-body">
              <strong>Seller Motivation</strong>
              Understand why the seller is selling. Days on market, prior price reductions, and life circumstances all shape leverage.
            </div>
          </li>
        </ul>
      </section>

      <!-- VALUATION INPUTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Valuation</span> Inputs to Populate</h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width:38%">Input</th>
              <th style="width:32%">Source</th>
              <th>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Asking Price</td>
              <td>Seller / listing</td>
              <td>Opening number — rarely the final number.</td>
            </tr>
            <tr>
              <td>Assessed Tax Value</td>
              <td>County tax assessor</td>
              <td>Floor of the value conversation.</td>
            </tr>
            <tr>
              <td>Recent Comps (3–5)</td>
              <td>MLS / Redfin / Zillow / agent</td>
              <td>Market reality check — the number an appraiser will defend.</td>
            </tr>
            <tr>
              <td>Cost of Needed Repairs</td>
              <td>Inspection report</td>
              <td>Direct deduction from offer.</td>
            </tr>
            <tr>
              <td>Holding Costs / Month</td>
              <td>Calculated</td>
              <td>Taxes + insurance + utilities + debt service. Pressures timeline.</td>
            </tr>
            <tr>
              <td>Days on Market</td>
              <td>Listing history</td>
              <td>&gt;60 days = negotiating leverage grows.</td>
            </tr>
            <tr>
              <td>Previous Price Reductions</td>
              <td>Listing history</td>
              <td>Shows how flexible the seller already is.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- RED FLAGS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Red</span> Flags — Do Not Skip</h2>
        <div class="nu-flag"><strong>Title defects.</strong> Any lien, judgment, or unresolved estate issue halts closing. Require seller to clear at their cost.</div>
        <div class="nu-flag"><strong>Undisclosed easements.</strong> Utility, access, or drainage easements can materially limit use. Confirm on survey — do not rely on seller memory.</div>
        <div class="nu-flag"><strong>Zoning mismatch.</strong> If intended use requires a variance or conditional use permit, that is a deal-reshaping risk — not a closing formality.</div>
        <div class="nu-flag"><strong>Flood zone.</strong> Zone A/V properties require flood insurance and may have lender constraints. Price it in before the offer.</div>
        <div class="nu-flag"><strong>Structural deferred maintenance.</strong> Roof, foundation, HVAC over end-of-life. Either seller repairs, seller credits, or price drops.</div>
        <div class="nu-flag"><strong>Seller financing friction.</strong> If seller balks at standard diligence (title, survey, inspection), treat as warning — not inconvenience.</div>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Negotiation</span> Strategy</h2>

        <h3 style="font-weight:900; font-size:1.05rem; color:var(--nu-dark-text); margin: 16px 0 12px;">Decision Numbers — Set Before Offer</h3>
        <div class="nu-grid-3">
          <div class="nu-card">
            <div class="nu-card-label">Opening Offer</div>
            <div class="nu-card-value">Comps −10%</div>
            <div class="nu-card-note">Anchored below market but not insulting. Leaves room to move up.</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Target Price</div>
            <div class="nu-card-value">Comps −3% to −5%</div>
            <div class="nu-card-note">The number Aaron is satisfied closing at.</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Walk-Away</div>
            <div class="nu-card-value">Hard Ceiling</div>
            <div class="nu-card-note">Set it in writing before the first call. Do not cross it under time pressure.</div>
          </div>
        </div>

        <h3 style="font-weight:900; font-size:1.05rem; color:var(--nu-dark-text); margin: 28px 0 14px;">Negotiation Sequence</h3>
        <div class="nu-badge"><span class="nu-badge-num">01</span> Written offer with earnest money, financing contingency, inspection period, and closing date</div>
        <div class="nu-badge"><span class="nu-badge-num">02</span> Inspection contingency — renegotiate on findings before removing</div>
        <div class="nu-badge"><span class="nu-badge-num">03</span> Appraisal contingency — if under, seller drops or deal restructures</div>
        <div class="nu-badge"><span class="nu-badge-num">04</span> Title contingency — all clouds resolved at seller expense</div>
        <div class="nu-badge"><span class="nu-badge-num">05</span> Final walk-through — verify condition matches contract at closing</div>

        <div class="nu-negotiate-box">
          <h3>Aaron's Leverage Points</h3>
          <ul>
            <li><strong>Cash or pre-approved buyer.</strong> If Aaron is financing, have the pre-approval letter in hand before the offer. If cash, lead with it — it compresses timeline and removes appraisal risk for the seller.</li>
            <li><strong>Flexible closing date.</strong> Sellers often need a specific date (relocation, estate, tax year). Matching their timeline is worth real dollars.</li>
            <li><strong>Fewer contingencies, not zero.</strong> Waive what is verified; keep title, inspection, and survey. Never waive inspection on a property you have not personally walked.</li>
            <li><strong>Every concession must be traded, not given.</strong> Raise price → in exchange for seller credit on repairs. Shorter inspection period → in exchange for tighter closing window.</li>
            <li><strong>Silence is a tool.</strong> After presenting an offer, stop talking. The first party to fill silence typically concedes.</li>
            <li><strong>Walk-away is real.</strong> The only reason the walk-away works is because it is real. If Aaron would accept "a little higher," that is the new walk-away.</li>
          </ul>
        </div>
      </section>

      <!-- IMMEDIATE NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Immediate</span> Next Steps</h2>
        <ul class="nu-action-list">
          <li>
            <div class="nu-action-num">A</div>
            <div class="nu-action-body">
              <strong>Confirm property address &amp; parcel ID</strong>
              Verify "Buttewoods Lane" spelling on county records. Capture parcel ID before any further work.
            </div>
          </li>
          <li>
            <div class="nu-action-num">B</div>
            <div class="nu-action-body">
              <strong>Pull tax records &amp; deed history</strong>
              Assessed value, current owner of record, last sale price and date, outstanding taxes.
            </div>
          </li>
          <li>
            <div class="nu-action-num">C</div>
            <div class="nu-action-body">
              <strong>Request seller's disclosure &amp; listing documents</strong>
              Seller property disclosure, MLS listing history, any existing inspection or appraisal reports.
            </div>
          </li>
          <li>
            <div class="nu-action-num">D</div>
            <div class="nu-action-body">
              <strong>Pull 3–5 comparable sales</strong>
              Within 1 mile, past 6–12 months. Establish defensible fair market value.
            </div>
          </li>
          <li>
            <div class="nu-action-num">E</div>
            <div class="nu-action-body">
              <strong>Engage real-estate attorney</strong>
              For title review, contract drafting, and closing — especially if buying through an LLC or using seller financing.
            </div>
          </li>
          <li>
            <div class="nu-action-num">F</div>
            <div class="nu-action-body">
              <strong>Set walk-away number in writing</strong>
              Before the first negotiation conversation. Kept in this file so it is not "adjusted" under pressure.
            </div>
          </li>
          <li>
            <div class="nu-action-num">G</div>
            <div class="nu-action-body">
              <strong>Schedule inspection &amp; survey</strong>
              Contingent on offer acceptance. Line up inspector and surveyor in advance so the clock doesn't kill the contingency window.
            </div>
          </li>
        </ul>
      </section>

      <!-- DECISION LOG -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Decision</span> Log</h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width:18%">Date</th>
              <th style="width:28%">Decision / Finding</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2026-04-16</td>
              <td>Action opened</td>
              <td>reMarkable note: review and negotiate purchase at 4505 Buttewoods Lane. Diligence package queued.</td>
            </tr>
            <tr>
              <td></td>
              <td>Parcel ID confirmed</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Comps pulled</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Walk-away set</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Offer extended</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Outcome</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO <span class="nu-footer-sep">|</span> Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a>
      <span class="nu-footer-sep">|</span>
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a>
      <span class="nu-footer-sep">|</span>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>