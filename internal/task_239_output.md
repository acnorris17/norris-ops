<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Negotiation — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066ee 50%, #00aaff 75%, var(--nu-cyan) 100%);
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
      opacity: 0.07;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: auto;
      z-index: 1;
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
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      margin-top: 18px;
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--nu-cyan);
      letter-spacing: 0.3em;
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
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.02) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* DOC HEADER */
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .doc-title span {
      color: var(--nu-blue);
    }
    .doc-subtitle {
      font-weight: 400;
      font-size: 1.1rem;
      color: #666;
      margin-bottom: 8px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 16px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 40px;
      font-size: 0.9rem;
    }
    .doc-meta div strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 2px;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 48px;
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

    /* PROPERTY HERO */
    .property-hero {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 8px;
      margin-bottom: 32px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      align-items: center;
    }
    .property-address {
      font-weight: 900;
      font-size: 1.8rem;
      letter-spacing: 0.02em;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .property-locale {
      font-size: 1rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      font-style: italic;
    }
    .property-stat-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .property-stat {
      background: rgba(255,255,255,0.08);
      padding: 14px;
      border-radius: 4px;
      border-left: 3px solid var(--nu-cyan);
    }
    .property-stat-label {
      font-size: 0.7rem;
      color: rgba(255,255,255,0.6);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 4px;
    }
    .property-stat-value {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
    }

    /* CARDS / GRID */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card p { font-size: 0.95rem; }

    /* NEGOTIATION TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
      background: var(--nu-white);
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      border-radius: 6px;
      overflow: hidden;
    }
    .nu-table th {
      background: var(--nu-blue);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      font-size: 0.95rem;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) { background: var(--nu-light-gray); }

    /* CHEVRON BADGES (PHASES) */
    .phase-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 36px 16px 20px;
      clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%, 24px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px; height: 32px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.9rem;
      margin-right: 14px;
      flex-shrink: 0;
    }
    .nu-badge-text strong {
      display: block;
      color: var(--nu-cyan);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.03) 0%, rgba(6,208,255,0.05) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      margin: 24px 0;
      border-radius: 0 6px 6px 0;
    }
    .callout strong {
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 14px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }

    /* BUTTONS */
    .btn-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 24px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 30px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 14px 30px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-confidential {
      margin-top: 18px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 24px; }
      .doc-title { font-size: 1.7rem; }
      .property-hero { grid-template-columns: 1fr; padding: 24px; }
      .property-address { font-size: 1.4rem; }
      .property-stat-grid { grid-template-columns: 1fr 1fr; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.85rem; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Confidential • Internal Negotiation Brief</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="doc-title">Estate Acquisition <span>Negotiation Brief</span></h1>
      <p class="doc-subtitle">Residential real estate purchase strategy and action plan</p>

      <div class="doc-meta">
        <div><strong>Document</strong>Negotiation Brief</div>
        <div><strong>Subject</strong>Estate Acquisition — 4505 Buttewoods</div>
        <div><strong>Prepared For</strong>Aaron C. Norris</div>
        <div><strong>Date</strong>April 23, 2026</div>
        <div><strong>Status</strong>Pre-Offer / Strategy Phase</div>
      </div>

      <!-- PROPERTY HERO -->
      <div class="property-hero">
        <div>
          <div class="property-address">4505 Buttewoods</div>
          <div class="property-locale">Estate Property — Negotiation Target</div>
          <p style="font-size: 0.95rem; color: rgba(255,255,255,0.85);">
            Action item captured from reMarkable handwritten notes. This brief frames
            the purchase negotiation, captures known facts, flags required diligence,
            and sets the next-step plan before any offer is extended.
          </p>
        </div>
        <div class="property-stat-grid">
          <div class="property-stat">
            <div class="property-stat-label">Total Living Area</div>
            <div class="property-stat-value">7,098 sq ft</div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Property Type</div>
            <div class="property-stat-value">Estate</div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Address</div>
            <div class="property-stat-value">4505 Buttewoods</div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Phase</div>
            <div class="property-stat-value">Negotiation</div>
          </div>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Objective</span> <span class="rest">&amp; Rationale</span></h2>
        <div class="card-grid">
          <div class="nu-card">
            <h3>Primary Objective</h3>
            <p>Secure 4505 Buttewoods under contract at a price and set of terms that protect Aaron C. Norris and preserve flexibility for use, hold, or resale.</p>
          </div>
          <div class="nu-card">
            <h3>Scope of Action</h3>
            <p>7,098 sq ft estate acquisition. Residential transaction — separate and distinct from Norris Utilities® operating business.</p>
          </div>
          <div class="nu-card">
            <h3>Decision Criteria</h3>
            <p>Purchase price must reflect verified market value. Terms must include an inspection window, financing contingency, and clear title.</p>
          </div>
        </div>
      </section>

      <!-- DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Pre-Offer</span> <span class="rest">Diligence Checklist</span></h2>
        <p style="margin-bottom: 16px;">Each item below must have a written answer before an offer is extended. If any line is unknown, pause — do not sign.</p>
        <ul class="checklist">
          <li><strong>Verified asking price</strong> — confirmed in writing with the listing agent or seller.</li>
          <li><strong>Comparable sales</strong> — three comps within 1 mile, same size class, last 12 months.</li>
          <li><strong>Property tax history</strong> — last 5 years of assessed value and paid taxes.</li>
          <li><strong>Title status</strong> — preliminary title report ordered; confirm no liens or easements of concern.</li>
          <li><strong>Survey</strong> — most recent survey reviewed; lot lines confirmed.</li>
          <li><strong>Condition</strong> — licensed inspector engaged; roof, HVAC, foundation, and systems reported.</li>
          <li><strong>Mechanical &amp; structural age</strong> — build year, roof age, HVAC age, water heater age.</li>
          <li><strong>HOA / covenants</strong> — any restrictions, dues, or pending special assessments.</li>
          <li><strong>Zoning</strong> — confirm current zoning and any overlays that affect use.</li>
          <li><strong>Insurance quote</strong> — preliminary homeowner quote obtained; flood zone confirmed.</li>
          <li><strong>Utilities</strong> — 12 months of power, gas, water bills if available.</li>
          <li><strong>Financing</strong> — pre-approval letter from Patrick Lavette at Renasant Bank on file.</li>
        </ul>
      </section>

      <!-- VALUATION FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Valuation</span> <span class="rest">Framework</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Data Point</th>
              <th>Source</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Asking price</td>
              <td>Listing agent / seller</td>
              <td>To confirm</td>
              <td>Request in writing before any verbal discussion.</td>
            </tr>
            <tr>
              <td>Price per sq ft (asking)</td>
              <td>Asking ÷ 7,098 sq ft</td>
              <td>Pending</td>
              <td>Benchmark against submarket average.</td>
            </tr>
            <tr>
              <td>3 recent comparable sales</td>
              <td>MLS / county records</td>
              <td>Pending</td>
              <td>Within 1 mile, similar size, last 12 months.</td>
            </tr>
            <tr>
              <td>County assessed value</td>
              <td>County assessor</td>
              <td>Pending</td>
              <td>Pull 5-year trend.</td>
            </tr>
            <tr>
              <td>Independent appraisal</td>
              <td>Licensed appraiser</td>
              <td>Order after offer acceptance</td>
              <td>Required for lender; also used as negotiation leverage.</td>
            </tr>
            <tr>
              <td>Replacement cost estimate</td>
              <td>Insurance carrier / builder</td>
              <td>Pending</td>
              <td>Useful floor for insurance and long-term view.</td>
            </tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>Rule:</strong> Do not anchor on the asking price. Build the independent valuation
          first. The offer is justified by the comps and the condition — not by what the seller wants.
        </div>
      </section>

      <!-- NEGOTIATION PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Plan — 5 Phases</span></h2>
        <div class="phase-list">
          <div class="nu-badge">
            <span class="nu-badge-num">1</span>
            <span class="nu-badge-text">
              <strong>Phase 1 — Information</strong>
              Collect all facts listed in the diligence checklist. Do not reveal interest level or urgency.
            </span>
          </div>
          <div class="nu-badge">
            <span class="nu-badge-num">2</span>
            <span class="nu-badge-text">
              <strong>Phase 2 — Position</strong>
              Establish walk-away price and target price from comps. Document both before first contact.
            </span>
          </div>
          <div class="nu-badge">
            <span class="nu-badge-num">3</span>
            <span class="nu-badge-text">
              <strong>Phase 3 — Initial Offer</strong>
              Written offer with inspection, appraisal, and financing contingencies. Short response window.
            </span>
          </div>
          <div class="nu-badge">
            <span class="nu-badge-num">4</span>
            <span class="nu-badge-text">
              <strong>Phase 4 — Counter &amp; Close Terms</strong>
              Negotiate on total package, not price alone — closing date, repairs credit, fixtures, earnest money.
            </span>
          </div>
          <div class="nu-badge">
            <span class="nu-badge-num">5</span>
            <span class="nu-badge-text">
              <strong>Phase 5 — Under Contract</strong>
              Execute inspections, appraisal, and title work. Use findings to renegotiate or release per contingencies.
            </span>
          </div>
        </div>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Leverage</span> <span class="rest">Points</span></h2>
        <div class="card-grid">
          <div class="nu-card">
            <h3>Financing Readiness</h3>
            <p>Pre-approval letter from Patrick Lavette at Renasant Bank signals a serious, low-risk buyer. Attach to offer.</p>
          </div>
          <div class="nu-card">
            <h3>Clean Offer Structure</h3>
            <p>Few contingencies, clear earnest money, firm closing date — often worth more than a higher price with a messy package.</p>
          </div>
          <div class="nu-card">
            <h3>Days on Market</h3>
            <p>Longer time on market = stronger buyer position. Pull the listing history before making the offer.</p>
          </div>
          <div class="nu-card">
            <h3>Inspection Findings</h3>
            <p>A detailed, written inspection report is a legitimate basis to re-price — never emotional, always documented.</p>
          </div>
          <div class="nu-card">
            <h3>Seller Situation</h3>
            <p>If the listing agent shares motivation (estate, relocation, divorce), this shapes terms — especially closing timing.</p>
          </div>
          <div class="nu-card">
            <h3>Willingness to Walk</h3>
            <p>The clearest leverage is a documented walk-away number. Decide it in writing before negotiations begin.</p>
          </div>
        </div>
      </section>

      <!-- RISK REGISTER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Risk</span> <span class="rest">Register</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Overpaying due to emotional anchoring on the property</td>
              <td>Set walk-away price in writing before any offer; share with one trusted advisor.</td>
            </tr>
            <tr>
              <td>Hidden structural, roof, or system defects</td>
              <td>Licensed inspector + separate specialists (roof, HVAC, foundation) during contingency window.</td>
            </tr>
            <tr>
              <td>Title defects, easements, or liens</td>
              <td>Preliminary title report ordered prior to offer where possible; full title insurance at close.</td>
            </tr>
            <tr>
              <td>Appraisal coming in below contract price</td>
              <td>Contract includes appraisal contingency; pre-identify fallback negotiation position.</td>
            </tr>
            <tr>
              <td>Insurance cost higher than expected</td>
              <td>Obtain binding quote during inspection period, not after close.</td>
            </tr>
            <tr>
              <td>Commingling with Norris Utilities® business assets</td>
              <td>Purchase in personal name or dedicated entity — not through the operating company.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- ADVISORY TEAM -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Advisory</span> <span class="rest">Team to Engage</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Purpose</th>
              <th>Candidate / Relationship</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Buyer&rsquo;s Real Estate Attorney</td>
              <td>Review contract, contingencies, title commitment, closing documents</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Buyer&rsquo;s Agent (optional)</td>
              <td>Comps, market reads, negotiation support</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Mortgage / Banking</td>
              <td>Pre-approval, rate lock, closing funds</td>
              <td>Patrick Lavette, Renasant Bank</td>
            </tr>
            <tr>
              <td>Licensed Home Inspector</td>
              <td>Overall condition and systems inspection</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Specialty Inspectors (as needed)</td>
              <td>Roof, HVAC, foundation, pool, septic</td>
              <td>Engaged after initial inspection findings</td>
            </tr>
            <tr>
              <td>Insurance Agent</td>
              <td>Binding homeowner quote, flood review, replacement cost</td>
              <td>To confirm</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Immediate</span> <span class="rest">Next Actions</span></h2>
        <ul class="checklist">
          <li>Confirm current asking price and days on market in writing.</li>
          <li>Pull 3 comparable sales within 1 mile, same size class, last 12 months.</li>
          <li>Order preliminary title report and county tax history.</li>
          <li>Request updated pre-approval letter from Patrick Lavette at Renasant Bank.</li>
          <li>Engage a buyer&rsquo;s real estate attorney to review the offer before it is sent.</li>
          <li>Set the walk-away price in writing and store it with this brief.</li>
          <li>Schedule licensed home inspection slot on standby for post-acceptance.</li>
        </ul>

        <div class="btn-row">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Negotiation%20Brief" class="nu-btn-secondary">Email Update</a>
        </div>
      </section>

      <div class="callout">
        <strong>Reminder:</strong> This is a personal real estate transaction. Keep documents, funds, and
        correspondence separate from Norris Utilities® business records. The operating business and the
        personal estate acquisition must stay on independent tracks.
      </div>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-confidential">Confidential — Internal Use Only</div>
  </footer>

</body>
</html>