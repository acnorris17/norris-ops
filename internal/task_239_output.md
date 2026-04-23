<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Plan — 4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
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
      --nu-alert-red: #B22222;
      --nu-success-green: #1E7A3E;
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
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 100px);
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
      opacity: 0.07;
      z-index: 1;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.4rem;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }
    .nu-doctype {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 30px;
      color: var(--nu-white);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
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
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 32px;
      padding: 18px 24px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
      font-size: 0.9rem;
    }
    .nu-doc-meta div { color: var(--nu-dark-text); }
    .nu-doc-meta strong {
      color: var(--nu-blue);
      font-weight: 900;
      display: block;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    h1.nu-page-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .nu-page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      margin-bottom: 30px;
      font-weight: 400;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .accent { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); }

    /* PROPERTY SNAPSHOT */
    .nu-property-card {
      background: linear-gradient(135deg, #FAFBFF 0%, #F0F4FF 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 28px 30px;
      margin-bottom: 30px;
    }
    .nu-property-addr {
      font-size: 1.3rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-property-tagline {
      color: var(--nu-body-text);
      font-style: italic;
      margin-bottom: 18px;
    }
    .nu-stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 18px;
    }
    .nu-stat {
      background: var(--nu-white);
      padding: 14px 16px;
      border-radius: 6px;
      border-top: 3px solid var(--nu-cyan);
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .nu-stat-label {
      font-size: 0.7rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-stat-value {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* BADGES */
    .nu-badge-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 20px 0;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 26px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* STRATEGY GRID */
    .nu-strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
      margin-bottom: 28px;
    }
    .nu-strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }
    .nu-strategy-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .nu-strategy-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-strategy-card ul {
      padding-left: 18px;
    }
    .nu-strategy-card li {
      margin-bottom: 6px;
      font-size: 0.95rem;
    }

    /* TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      margin-bottom: 24px;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.93rem;
      background: var(--nu-white);
    }
    .nu-table th {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 12px 16px;
      text-align: left;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: #FAFBFF; }
    .nu-table td strong { color: var(--nu-blue); }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #FFF8E1 0%, #FFFDF5 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 24px 0;
    }
    .nu-callout strong { color: #8B6914; }

    .nu-callout-alert {
      background: linear-gradient(135deg, #FDEEEE 0%, #FFF8F8 100%);
      border-left: 5px solid var(--nu-alert-red);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 24px 0;
    }
    .nu-callout-alert strong { color: var(--nu-alert-red); }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 10px 0 10px 34px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

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
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 16px auto;
      opacity: 0.5;
    }
    .nu-footer-confidential {
      margin-top: 18px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.08em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 30px 22px 50px; }
      h1.nu-page-title { font-size: 1.65rem; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .nu-section-title { font-size: 1.25rem; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">U T I L I T I E S</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doctype">Acquisition Strategy Brief</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-doc-meta">
        <div><strong>Document</strong>Acquisition Negotiation Plan</div>
        <div><strong>Subject Property</strong>4505 Buttewoods</div>
        <div><strong>Prepared For</strong>Aaron C. Norris</div>
        <div><strong>Date</strong>April 22, 2026</div>
        <div><strong>Status</strong>Active — Pre-Offer</div>
      </div>

      <h1 class="nu-page-title">Negotiate Purchase — 7,098 sq ft Estate at 4505 Buttewoods</h1>
      <p class="nu-page-subtitle">A structured negotiation playbook covering diligence, offer strategy, counter-position readiness, and closing path for a personal real estate acquisition.</p>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <div class="nu-property-card">
          <div class="nu-property-addr">4505 Buttewoods</div>
          <div class="nu-property-tagline">Private estate — 7,098 square feet under roof</div>
          <div class="nu-stat-grid">
            <div class="nu-stat">
              <div class="nu-stat-label">Square Footage</div>
              <div class="nu-stat-value">7,098 sq ft</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Property Type</div>
              <div class="nu-stat-value">Estate / SFR</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Buyer</div>
              <div class="nu-stat-value">A. Norris</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Phase</div>
              <div class="nu-stat-value">Negotiation</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Priority</div>
              <div class="nu-stat-value">High</div>
            </div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Negotiation</span> <span class="rest">Objective</span></h2>
        <p>Secure the property at a price and on terms that reflect its true condition and market comparables, protecting Aaron from hidden repair liability — especially the water intrusion concerns already surfaced in the disclosure review — and establishing a clean title-to-close path with no loose ends.</p>

        <div class="nu-callout">
          <strong>Target Outcome —</strong> Price reduction and/or seller-funded repair credits sufficient to cover the H2O Waterproofing remediation scope, a written disclosure reconciliation, and a closing schedule that allows full inspection and lender coordination without artificial pressure.
        </div>
      </section>

      <!-- DILIGENCE STATUS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Pre-Negotiation</span> <span class="rest">Diligence Status</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Status</th>
                <th>Impact on Offer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Disclosure Review</strong> — Water intrusion omission identified</td>
                <td>Open — flagged</td>
                <td>Direct price lever — quantify remediation cost</td>
              </tr>
              <tr>
                <td><strong>Disclosure Discrepancy</strong> — Rental listing vs. seller disclosure</td>
                <td>Open — flagged</td>
                <td>Material misrepresentation risk — strengthens buyer position</td>
              </tr>
              <tr>
                <td><strong>H2O Waterproofing</strong> — Written remediation quote</td>
                <td>Required pre-close</td>
                <td>Establishes dollar figure for credit or reduction</td>
              </tr>
              <tr>
                <td><strong>Inspection Report</strong> — Full home</td>
                <td>Schedule before offer if possible</td>
                <td>Second leverage point; protects against undiscovered issues</td>
              </tr>
              <tr>
                <td><strong>Comparable Sales</strong> — 7,000+ sq ft estate comps</td>
                <td>Compile</td>
                <td>Anchors opening offer to market, not list</td>
              </tr>
              <tr>
                <td><strong>Title & Survey</strong></td>
                <td>Order upon contract</td>
                <td>Confirms boundary, easements, liens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- STRATEGY PILLARS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Four</span> <span class="rest">Strategy Pillars</span></h2>
        <div class="nu-strategy-grid">
          <div class="nu-strategy-card">
            <h3>1. Anchor on Data, Not Emotion</h3>
            <ul>
              <li>Open with recent comparable sales per sq ft</li>
              <li>Cite specific remediation dollar figures</li>
              <li>Frame every concession ask with written documentation</li>
            </ul>
          </div>
          <div class="nu-strategy-card">
            <h3>2. Use Disclosure Leverage</h3>
            <ul>
              <li>Water intrusion gap is a material factor — quantify it</li>
              <li>Rental vs. disclosure discrepancy reinforces credibility concern</li>
              <li>Request written seller acknowledgment of all known issues</li>
            </ul>
          </div>
          <div class="nu-strategy-card">
            <h3>3. Control the Pace</h3>
            <ul>
              <li>Do not respond to counters inside 24 hours without review</li>
              <li>Silence is a negotiation tool — don't fill it</li>
              <li>Every deadline in writing; nothing verbal</li>
            </ul>
          </div>
          <div class="nu-strategy-card">
            <h3>4. Protect Walk-Away Power</h3>
            <ul>
              <li>Set hard price and condition ceilings before offer</li>
              <li>Maintain backup property or alternative scenario</li>
              <li>Document walk-away number privately — never signal it</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION SEQUENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Negotiation</span> <span class="rest">Sequence</span></h2>
        <div class="nu-badge-row">
          <div class="nu-badge"><span class="nu-badge-num">1</span>Compile comps, disclosure findings, and H2O quote into offer packet</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>Submit written offer — price anchored to market, not list</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>Include inspection, financing, and appraisal contingencies</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>Attach disclosure discrepancy letter requiring written seller response</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span>Evaluate counter — do not respond same day</div>
          <div class="nu-badge"><span class="nu-badge-num">6</span>Counter with repair credit or price adjustment tied to remediation</div>
          <div class="nu-badge"><span class="nu-badge-num">7</span>Lock final terms in writing; schedule inspection & title</div>
          <div class="nu-badge"><span class="nu-badge-num">8</span>Close only after every open item is resolved in writing</div>
        </div>
      </section>

      <!-- PRICE & TERMS FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Price &amp;</span> <span class="rest">Terms Framework</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Lever</th>
                <th>Buyer Position</th>
                <th>Acceptable Seller Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Base Price</strong></td>
                <td>Anchored to verified sq ft comps for the submarket</td>
                <td>Within 3% of buyer anchor, adjusted for condition</td>
              </tr>
              <tr>
                <td><strong>Water Intrusion Credit</strong></td>
                <td>Dollar-for-dollar equal to H2O Waterproofing written quote</td>
                <td>Full credit at close OR pre-close remediation with warranty</td>
              </tr>
              <tr>
                <td><strong>Disclosure Reconciliation</strong></td>
                <td>Written supplement signed by seller addressing rental-listing discrepancy</td>
                <td>Signed written response — no verbal assurances</td>
              </tr>
              <tr>
                <td><strong>Inspection Window</strong></td>
                <td>Minimum 10 business days, right to re-negotiate on findings</td>
                <td>10+ days; all findings curable or credited</td>
              </tr>
              <tr>
                <td><strong>Closing Date</strong></td>
                <td>Set by buyer, aligned to lender & inspection completion</td>
                <td>No artificial seller-imposed acceleration</td>
              </tr>
              <tr>
                <td><strong>Earnest Money</strong></td>
                <td>Standard market; refundable through contingency periods</td>
                <td>Held by neutral title/escrow</td>
              </tr>
              <tr>
                <td><strong>Repairs Post-Inspection</strong></td>
                <td>Seller to cure material items or credit at close</td>
                <td>Credit or licensed-contractor repair — buyer's choice</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="nu-callout-alert">
          <strong>Non-Negotiable —</strong> The water intrusion finding and the rental-listing-vs-disclosure discrepancy are already documented. The deal does not move forward without a written seller response to both, and a remediation credit or repair supported by a licensed waterproofing contractor.
        </div>
      </section>

      <!-- COUNTER TACTICS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Anticipated</span> <span class="rest">Counters &amp; Responses</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Seller Move</th>
                <th>Buyer Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"Price is firm — multiple buyers interested."</td>
                <td>Restate comp-backed value; request proof of competing offers in writing. If none produced, hold anchor.</td>
              </tr>
              <tr>
                <td>"We already disclosed everything."</td>
                <td>Present rental-listing vs. disclosure discrepancy side-by-side. Request written reconciliation as contract addendum.</td>
              </tr>
              <tr>
                <td>"Water issue is minor — no credit needed."</td>
                <td>Require independent H2O Waterproofing inspection and written quote before removing the contingency.</td>
              </tr>
              <tr>
                <td>"Closing must happen by [date]."</td>
                <td>Buyer sets closing date consistent with lender and inspection timelines. No acceleration without corresponding concession.</td>
              </tr>
              <tr>
                <td>"Take it as-is or walk."</td>
                <td>Be prepared to walk. Walk-away number is set before negotiation starts and is never revealed.</td>
              </tr>
              <tr>
                <td>"We'll fix it ourselves before close."</td>
                <td>Only acceptable with licensed contractor, written scope, transferable warranty, and right of final inspection.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- PRE-OFFER CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Pre-Offer</span> <span class="rest">Checklist</span></h2>
        <ul class="nu-checklist">
          <li><strong>Comparable sales pulled</strong> — minimum 3 sold within last 12 months, similar sq ft and condition</li>
          <li><strong>H2O Waterproofing quote</strong> — in writing, before any offer is delivered</li>
          <li><strong>Disclosure vs. rental-listing letter</strong> — drafted for inclusion with offer</li>
          <li><strong>Lender pre-approval letter</strong> — current within 30 days</li>
          <li><strong>Earnest money source</strong> — confirmed and liquid</li>
          <li><strong>Walk-away price</strong> — set privately; never shared</li>
          <li><strong>Attorney / closing agent</strong> — identified and on standby</li>
          <li><strong>Insurance quote</strong> — obtained (water history can affect premium)</li>
          <li><strong>Communication log</strong> — started; every call and email dated and saved</li>
        </ul>
      </section>

      <!-- CLOSING PATH -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Path</span> <span class="rest">to Close</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Phase</th>
                <th>Key Actions</th>
                <th>Buyer Protection</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Offer</strong></td>
                <td>Written offer with contingencies and disclosure addendum</td>
                <td>All protections reduced to paper</td>
              </tr>
              <tr>
                <td><strong>Acceptance</strong></td>
                <td>Executed contract; earnest money deposited to neutral escrow</td>
                <td>Refund rights intact through contingency periods</td>
              </tr>
              <tr>
                <td><strong>Inspection</strong></td>
                <td>Full home inspection + H2O Waterproofing specialist</td>
                <td>Right to renegotiate or withdraw on material findings</td>
              </tr>
              <tr>
                <td><strong>Appraisal &amp; Loan</strong></td>
                <td>Lender ordered appraisal; final underwriting</td>
                <td>Appraisal contingency protects against over-pay</td>
              </tr>
              <tr>
                <td><strong>Title &amp; Survey</strong></td>
                <td>Clear title, reviewed survey, no undisclosed encumbrances</td>
                <td>Title insurance issued at close</td>
              </tr>
              <tr>
                <td><strong>Final Walk-Through</strong></td>
                <td>Confirm repairs completed, property condition matches contract</td>
                <td>Right to delay close on unresolved items</td>
              </tr>
              <tr>
                <td><strong>Close</strong></td>
                <td>Fund, record deed, receive keys</td>
                <td>Every condition satisfied in writing prior to funding</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- PRINCIPLES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Guiding</span> <span class="rest">Principles</span></h2>
        <div class="nu-strategy-grid">
          <div class="nu-strategy-card">
            <h3>Everything in Writing</h3>
            <ul>
              <li>Verbal assurances have no weight at close</li>
              <li>Every concession, credit, and repair committed to paper</li>
            </ul>
          </div>
          <div class="nu-strategy-card">
            <h3>Protect Optionality</h3>
            <ul>
              <li>Contingencies are leverage — don't waive them without cause</li>
              <li>The ability to walk is the strongest negotiating position</li>
            </ul>
          </div>
          <div class="nu-strategy-card">
            <h3>Data Over Pressure</h3>
            <ul>
              <li>Comps, quotes, and disclosure evidence carry the argument</li>
              <li>Decline to negotiate against seller emotion or deadlines</li>
            </ul>
          </div>
          <div class="nu-strategy-card">
            <h3>Close Clean</h3>
            <ul>
              <li>No post-close dependencies on the seller</li>
              <li>Every open item resolved before funding</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-confidential">CONFIDENTIAL — PERSONAL ACQUISITION STRATEGY — NOT FOR DISTRIBUTION</div>
  </footer>

</body>
</html>