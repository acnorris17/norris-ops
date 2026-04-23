<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
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
      --nu-success: #2E7D32;
      --nu-warning: #F57C00;
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
      width: 70px;
      height: 70px;
      margin: 0 auto 16px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 20px;
      color: var(--nu-white);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.15em;
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
      min-height: 60vh;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 10%; left: 50%;
      transform: translate(-50%, 0);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      margin-bottom: 40px;
      padding-bottom: 30px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-eyebrow {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-title {
      font-size: 2.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .nu-title .accent { color: var(--nu-blue); }
    .nu-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 820px;
    }

    /* PROPERTY SNAPSHOT */
    .nu-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      margin-bottom: 50px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
    }
    .nu-snap-cell {
      background: var(--nu-white);
      padding: 24px 20px;
      text-align: center;
    }
    .nu-snap-cell .label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-snap-cell .value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .nu-snap-cell .sub {
      font-size: 0.8rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* SECTION */
    .nu-section { margin-bottom: 50px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); }

    /* BADGE */
    .nu-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 24px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 20px 10px 14px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.03em;
      border-radius: 4px;
    }
    .nu-badge-dot {
      width: 10px; height: 10px;
      background: var(--nu-cyan);
      border-radius: 50%;
      margin-right: 10px;
      flex-shrink: 0;
    }
    .nu-badge.alt {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0055dd 100%);
    }

    /* STRATEGY GRID */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.1);
    }
    .nu-card h3 {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-card .card-eyebrow {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-card p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 12px;
    }
    .nu-card ul { padding-left: 20px; }
    .nu-card ul li {
      font-size: 0.93rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }

    /* NEGOTIATION TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 10px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      min-width: 640px;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: #fafafc; }
    .nu-table td strong { color: var(--nu-dark-text); }

    /* CHECKLIST */
    .nu-checklist {
      background: var(--nu-light-gray);
      border-left: 5px solid var(--nu-cyan);
      padding: 28px 32px;
      border-radius: 6px;
    }
    .nu-checklist ul {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 12px 0;
      padding-left: 34px;
      position: relative;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      border-bottom: 1px solid rgba(0,0,0,0.06);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 16px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-blue); }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 30px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 0; bottom: 0;
      width: 3px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .nu-step {
      position: relative;
      padding: 0 0 30px 30px;
    }
    .nu-step::before {
      content: '';
      position: absolute;
      left: -30px; top: 4px;
      width: 19px; height: 19px;
      background: var(--nu-white);
      border: 4px solid var(--nu-blue);
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(0,0,255,0.1);
    }
    .nu-step h4 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-step .phase-tag {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-step p {
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #001166 0%, var(--nu-navy) 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
    }
    .nu-callout::after {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 50%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
    }
    .nu-callout * { position: relative; z-index: 1; }
    .nu-callout h3 {
      font-size: 1.3rem;
      font-weight: 900;
      color: var(--nu-cyan);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .nu-callout p {
      font-size: 1rem;
      color: rgba(255,255,255,0.9);
      max-width: 780px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
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
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 20px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-title { font-size: 1.7rem; }
      .nu-container { padding: 40px 20px; }
      .nu-section-title { font-size: 1.3rem; }
      .nu-callout { padding: 24px; }
      .nu-checklist { padding: 20px 22px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Strategic Acquisition Brief</div>
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
      <section class="nu-title-block">
        <div class="nu-eyebrow">Action Item · Real Estate Negotiation</div>
        <h1 class="nu-title">Negotiate Purchase of <span class="accent">4505 Buttewoods</span></h1>
        <p class="nu-subtitle">
          Strategic negotiation framework and action plan for the acquisition of the 7,098 sq ft estate
          at 4505 Buttewoods. This brief outlines valuation anchors, negotiation levers, due diligence
          milestones, and a disciplined timeline to close on favorable terms.
        </p>
      </section>

      <!-- SNAPSHOT -->
      <section class="nu-snapshot">
        <div class="nu-snap-cell">
          <div class="label">Property</div>
          <div class="value">4505</div>
          <div class="sub">Buttewoods</div>
        </div>
        <div class="nu-snap-cell">
          <div class="label">Interior Size</div>
          <div class="value">7,098</div>
          <div class="sub">square feet</div>
        </div>
        <div class="nu-snap-cell">
          <div class="label">Category</div>
          <div class="value">Estate</div>
          <div class="sub">single-family</div>
        </div>
        <div class="nu-snap-cell">
          <div class="label">Status</div>
          <div class="value">Active</div>
          <div class="sub">negotiation phase</div>
        </div>
        <div class="nu-snap-cell">
          <div class="label">Owner</div>
          <div class="value">ACN</div>
          <div class="sub">Aaron C. Norris</div>
        </div>
      </section>

      <!-- BADGES -->
      <div class="nu-badge-row">
        <span class="nu-badge"><span class="nu-badge-dot"></span>High Priority</span>
        <span class="nu-badge alt"><span class="nu-badge-dot"></span>Aaron Direct</span>
        <span class="nu-badge"><span class="nu-badge-dot"></span>Confidential</span>
        <span class="nu-badge alt"><span class="nu-badge-dot"></span>Personal Acquisition</span>
      </div>

      <!-- OBJECTIVE CALLOUT -->
      <div class="nu-callout">
        <h3>Objective</h3>
        <p>
          Acquire 4505 Buttewoods at a price and set of terms that reflects the true condition and
          comparable market value of the 7,098 sq ft estate. Enter every conversation informed,
          unhurried, and willing to walk. The strongest position in any negotiation is the one
          that does not need the deal.
        </p>
      </div>

      <!-- STRATEGY PILLARS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Strategy Pillars</span></h2>
        <div class="nu-grid-2">

          <div class="nu-card">
            <div class="card-eyebrow">Pillar 01</div>
            <h3>Anchor on Comparables</h3>
            <p>Pull three to five closed comps within the last 6 months — same school zone, similar square footage (6,500 – 7,500 sq ft), similar lot size.</p>
            <ul>
              <li>Sort by $/sq ft, not list price</li>
              <li>Adjust for updates, pool, garage, acreage</li>
              <li>Walk into every offer with comp sheet in hand</li>
            </ul>
          </div>

          <div class="nu-card">
            <div class="card-eyebrow">Pillar 02</div>
            <h3>Pre-Inspection Leverage</h3>
            <p>Schedule an inspection before any price is locked. Every deficiency — roof, HVAC, foundation, plumbing — becomes a dollar-for-dollar concession or seller-paid repair.</p>
            <ul>
              <li>Roof age and remaining life</li>
              <li>HVAC units (quantity, age, condition)</li>
              <li>Foundation, drainage, moisture</li>
              <li>Pool / septic / well if applicable</li>
            </ul>
          </div>

          <div class="nu-card">
            <div class="card-eyebrow">Pillar 03</div>
            <h3>Terms Over Price</h3>
            <p>Price is one variable. Closing date, possession, rent-back, earnest money, contingencies, and seller-paid items all carry real dollar value.</p>
            <ul>
              <li>Flexible close = lower price</li>
              <li>Strong earnest money = credibility</li>
              <li>Short contingencies = perceived strength</li>
            </ul>
          </div>

          <div class="nu-card">
            <div class="card-eyebrow">Pillar 04</div>
            <h3>Silence Is a Tool</h3>
            <p>After the offer is delivered, do not fill the silence. Let the seller respond first. Every concession made before a counter-offer is money left on the table.</p>
            <ul>
              <li>Submit offer in writing with justification</li>
              <li>Set a 48 – 72 hour response window</li>
              <li>Never raise your own offer without a counter</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- NEGOTIATION LEVERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Price</span> <span class="rest">Levers &amp; Walk-Away Points</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Lever</th>
                <th>What It Does</th>
                <th>Target Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Comps Adjustment</strong></td>
                <td>Anchors price to actual closed sales, not optimistic list prices.</td>
                <td>List price reduced to comp-verified $/sq ft value.</td>
              </tr>
              <tr>
                <td><strong>Days on Market</strong></td>
                <td>Longer DOM signals seller fatigue and softer position.</td>
                <td>Reference DOM directly in negotiation justification.</td>
              </tr>
              <tr>
                <td><strong>Inspection Findings</strong></td>
                <td>Converts every repair item into price reduction or credit.</td>
                <td>Seller covers material repairs or $5K – $25K credit at close.</td>
              </tr>
              <tr>
                <td><strong>Seller Financing</strong></td>
                <td>Removes bank friction, lowers monthly cost, keeps cash liquid.</td>
                <td>Partial seller-held note at below-market rate.</td>
              </tr>
              <tr>
                <td><strong>Cash or Fast Close</strong></td>
                <td>Certainty of close is itself worth a discount to most sellers.</td>
                <td>Price concession in exchange for 14 – 21 day close.</td>
              </tr>
              <tr>
                <td><strong>Rent-Back</strong></td>
                <td>Lets seller stay post-close — solves their timing problem.</td>
                <td>Trade 30 – 60 day rent-back for lower purchase price.</td>
              </tr>
              <tr>
                <td><strong>Walk-Away Discipline</strong></td>
                <td>Willingness to walk is the single largest source of leverage.</td>
                <td>Hard ceiling documented before first offer is submitted.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="nu-checklist">
          <ul>
            <li><strong>Title search</strong> — verify clean title, no liens, no easements surprises.</li>
            <li><strong>Property tax history</strong> — pull last 3 years, model reassessment post-sale.</li>
            <li><strong>Recent comps</strong> — 3 to 5 closed sales within 6 months, same zone, 6,500 – 7,500 sq ft.</li>
            <li><strong>Full home inspection</strong> — roof, HVAC, foundation, electrical, plumbing, mechanicals.</li>
            <li><strong>Survey &amp; boundaries</strong> — confirm lot lines, setbacks, encroachments.</li>
            <li><strong>Pool / septic / well</strong> — independent inspection if present on property.</li>
            <li><strong>Insurance quote</strong> — confirm coverage available and at what premium.</li>
            <li><strong>Utility history</strong> — last 12 months of power, water, gas for true cost of ownership.</li>
            <li><strong>HOA / deed restrictions</strong> — review CC&amp;Rs and any active assessments.</li>
            <li><strong>Financing pre-approval</strong> — lender letter in hand before submitting offer.</li>
          </ul>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Timeline &amp; Milestones</span></h2>
        <div class="nu-timeline">

          <div class="nu-step">
            <div class="phase-tag">Phase 1 · Week 1</div>
            <h4>Research &amp; Valuation</h4>
            <p>Pull comps, tax records, and ownership history. Drive the neighborhood at different times of day. Draft a one-page valuation with documented walk-away price.</p>
          </div>

          <div class="nu-step">
            <div class="phase-tag">Phase 2 · Week 2</div>
            <h4>Walkthrough &amp; Inspection</h4>
            <p>On-site walkthrough followed by licensed inspection. Document every deficiency with photos. Build a credit-justification memo.</p>
          </div>

          <div class="nu-step">
            <div class="phase-tag">Phase 3 · Week 3</div>
            <h4>First Offer Submitted</h4>
            <p>Written offer at anchor price with detailed rationale. Strong earnest money, tight contingencies, 48 – 72 hour response deadline.</p>
          </div>

          <div class="nu-step">
            <div class="phase-tag">Phase 4 · Week 4</div>
            <h4>Counter &amp; Re-Negotiation</h4>
            <p>Respond to counter with a disciplined step toward target — never leap. Use inspection findings and comps to justify every dollar of movement.</p>
          </div>

          <div class="nu-step">
            <div class="phase-tag">Phase 5 · Weeks 5 – 7</div>
            <h4>Under Contract &amp; Due Diligence</h4>
            <p>Execute appraisal, financing, title, survey. Hold the option to renegotiate on any material finding. Clear contingencies only when fully satisfied.</p>
          </div>

          <div class="nu-step">
            <div class="phase-tag">Phase 6 · Week 8</div>
            <h4>Close &amp; Take Possession</h4>
            <p>Final walkthrough 24 hours before close. Verify all agreed repairs complete. Funds wired. Possession per contract. Files archived.</p>
          </div>

        </div>
      </section>

      <!-- DISCIPLINE NOTE -->
      <div class="nu-callout">
        <h3>Norris Discipline</h3>
        <p>
          This acquisition is run like every Norris Utilities® deal — on documented comps, written terms,
          disciplined walk-away points, and decisions made on paper before emotions enter the room.
          A Legacy of Commitment® applies to the home as much as it does to the business.
        </p>
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
    <div class="nu-footer-meta">
      Internal working document · Strategic Acquisition Brief · 4505 Buttewoods
    </div>
  </footer>

</body>
</html>