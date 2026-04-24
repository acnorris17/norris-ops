<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Negotiation — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #0a7a3f;
      --nu-warning: #b8860b;
      --nu-danger: #b02a37;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.12;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
      margin-bottom: 18px;
    }
    .nu-doc-title {
      margin-top: 16px;
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-white);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 10px 24px;
      display: inline-block;
      background: rgba(0,0,51,0.35);
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 2px;
    }

    /* CHEVRON — asymmetric apex ~38% */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
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
      top: 240px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 48px 40px 60px;
      position: relative;
      z-index: 1;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: #0033cc;
      margin-bottom: 16px;
      letter-spacing: 0.01em;
      border-bottom: 3px solid var(--nu-medium-gray);
      padding-bottom: 10px;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* OVERVIEW CARD */
    .property-overview {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 16px;
    }
    .overview-card {
      background: linear-gradient(135deg, #f8faff 0%, #eef3ff 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 24px;
    }
    .overview-card h3 {
      font-weight: 900;
      font-size: 0.85rem;
      color: #0033cc;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .overview-card .big-value {
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .overview-card .sub-value {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }

    /* FACT TABLE */
    .fact-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .fact-table th {
      background: #0033cc;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 12px 18px;
      text-align: left;
    }
    .fact-table td {
      padding: 12px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .fact-table td.label {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 32%;
      background: #fafbff;
    }
    .fact-table tr:hover td:not(.label) { background: #fafcff; }

    /* NEGOTIATION STRATEGY — badges */
    .strategy-badges {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
      margin-bottom: 20px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 28px 16px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
      min-height: 62px;
    }
    .nu-badge .badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px; height: 34px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
      font-size: 1rem;
    }

    /* STEP LIST */
    .step-list {
      list-style: none;
      counter-reset: step;
    }
    .step-list li {
      counter-increment: step;
      position: relative;
      padding: 14px 18px 14px 62px;
      margin-bottom: 10px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
    }
    .step-list li::before {
      content: counter(step);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 34px; height: 34px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .step-list li strong { color: #0033cc; font-weight: 700; }

    /* OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }
    .offer-tier {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 20px;
      text-align: center;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .offer-tier:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .offer-tier .tier-label {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 10px;
      padding: 5px 12px;
      border-radius: 12px;
      display: inline-block;
    }
    .offer-tier.opening { border-color: var(--nu-success); }
    .offer-tier.opening .tier-label { background: #e8f5ec; color: var(--nu-success); }
    .offer-tier.target { border-color: var(--nu-blue); background: #f8faff; }
    .offer-tier.target .tier-label { background: var(--nu-blue); color: var(--nu-white); }
    .offer-tier.walk { border-color: var(--nu-danger); }
    .offer-tier.walk .tier-label { background: #fdeaec; color: var(--nu-danger); }
    .offer-tier .tier-range {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-dark-text);
      margin: 8px 0;
    }
    .offer-tier .tier-note {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* RISK GRID */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 16px;
    }
    .risk-card {
      background: var(--nu-white);
      border-top: 4px solid var(--nu-warning);
      border-radius: 6px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .risk-card h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .risk-card .mitigation {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.9rem;
    }
    .risk-card .mitigation strong { color: var(--nu-success); }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      background: #fafbff;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 20px 24px;
    }
    .checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 13px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin: 28px 0;
      border-left: 6px solid var(--nu-cyan);
    }
    .nu-callout h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-cyan);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-callout p { font-size: 0.98rem; line-height: 1.7; }

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
      font-weight: 400;
      font-size: 1.25rem;
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
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .property-overview { grid-template-columns: 1fr; }
      .offer-ladder { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 32px 20px 40px; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-badge { clip-path: none; border-radius: 6px; }
      .fact-table td.label { width: 40%; font-size: 0.88rem; }
      .fact-table td { font-size: 0.88rem; padding: 10px 12px; }
      .overview-card .big-value { font-size: 1.4rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .offer-tier:hover { transform: none; box-shadow: none; }
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
    <div class="nu-doc-title">Estate Acquisition Brief — 4505 Buttewoods</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- OVERVIEW -->
      <section class="nu-section">
        <h2 class="nu-section-title">Property <span>Overview</span></h2>
        <div class="property-overview">
          <div class="overview-card">
            <h3>Subject Property</h3>
            <div class="big-value">4505 Buttewoods</div>
            <div class="sub-value">Private estate — target acquisition</div>
          </div>
          <div class="overview-card">
            <h3>Building Footprint</h3>
            <div class="big-value">7,098 sq ft</div>
            <div class="sub-value">Main residence — total conditioned space</div>
          </div>
        </div>

        <table class="fact-table" style="margin-top: 20px;">
          <thead>
            <tr><th colspan="2">Recorded Facts &amp; Assumptions</th></tr>
          </thead>
          <tbody>
            <tr><td class="label">Address</td><td>4505 Buttewoods</td></tr>
            <tr><td class="label">Square Footage</td><td>7,098 sq ft (per reMarkable note, 2026-04-24)</td></tr>
            <tr><td class="label">Property Type</td><td>Single-family estate residence</td></tr>
            <tr><td class="label">Buyer of Record</td><td>Aaron C. Norris (pending entity selection — personal vs. holding LLC)</td></tr>
            <tr><td class="label">Transaction Type</td><td>Negotiated private-party purchase</td></tr>
            <tr><td class="label">Action Source</td><td>reMarkable action item — 2026-04-24</td></tr>
            <tr><td class="label">Status</td><td>Pre-offer / intelligence gathering</td></tr>
          </tbody>
        </table>
      </section>

      <!-- STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Strategy — Five Pillars</span></h2>
        <div class="strategy-badges">
          <div class="nu-badge"><span class="badge-num">1</span>KNOW THE COMPS</div>
          <div class="nu-badge"><span class="badge-num">2</span>VERIFY TITLE &amp; LIENS</div>
          <div class="nu-badge"><span class="badge-num">3</span>LEAD WITH DATA, NOT EMOTION</div>
          <div class="nu-badge"><span class="badge-num">4</span>EARN THE RELATIONSHIP</div>
          <div class="nu-badge"><span class="badge-num">5</span>ALWAYS KEEP THE WALK-AWAY</div>
        </div>
      </section>

      <!-- ACTION PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title">Action <span>Plan — Sequenced Steps</span></h2>
        <ol class="step-list">
          <li><strong>Pull recorded deed &amp; tax record.</strong> Confirm legal description, current owner of record, assessed value, and most recent sale date for 4505 Buttewoods before any conversation.</li>
          <li><strong>Run comps within 1 mile, last 12 months.</strong> Target estates in the 5,500–8,500 sq ft range. Compute $/sq ft median and range.</li>
          <li><strong>Order a pre-inspection walk-through.</strong> Engage a licensed inspector for roof, foundation, HVAC, and water intrusion before any written offer.</li>
          <li><strong>Retain real-estate attorney.</strong> Alabama-licensed counsel to draft the purchase agreement, review title commitment, and handle closing.</li>
          <li><strong>Confirm financing posture.</strong> Cash vs. conventional vs. private — secure proof of funds or pre-approval letter before offer.</li>
          <li><strong>Open conversation with seller or listing agent.</strong> Set the tone: serious, informed, respectful. No lowball opener below the documented market floor.</li>
          <li><strong>Submit written offer with earnest money.</strong> Anchor to comps, not list price. Include inspection and appraisal contingencies.</li>
          <li><strong>Negotiate in writing only.</strong> All counter-offers and concessions reduced to signed addenda. No verbal side deals.</li>
          <li><strong>Close through title company with wire verification.</strong> Confirm wire instructions by phone with a known contact at the title office. Never trust emailed wire instructions without verbal callback.</li>
        </ol>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title">Offer <span>Ladder</span></h2>
        <div class="offer-ladder">
          <div class="offer-tier opening">
            <div class="tier-label">Opening</div>
            <div class="tier-range">Comps − 8% to −12%</div>
            <div class="tier-note">Data-driven anchor. Justified in writing with comp sheet attached.</div>
          </div>
          <div class="offer-tier target">
            <div class="tier-label">Target</div>
            <div class="tier-range">Market Median</div>
            <div class="tier-range" style="font-size:1.1rem; color: var(--nu-blue);">$/sq ft × 7,098</div>
            <div class="tier-note">The price Aaron is willing to pay after one or two rounds of counter.</div>
          </div>
          <div class="offer-tier walk">
            <div class="tier-label">Walk-Away</div>
            <div class="tier-range">Comps + 5%</div>
            <div class="tier-note">Hard ceiling. Past this line, the deal is declined in writing. No exceptions.</div>
          </div>
        </div>
      </section>

      <!-- CALLOUT -->
      <div class="nu-callout">
        <h3>Aaron's Rule</h3>
        <p>Every offer is grounded in recorded data — tax records, comps, and title facts. Emotion does not buy real estate profitably. If the numbers do not work at the walk-away line, the deal does not get done. Honor the walk-away every single time.</p>
      </div>

      <!-- RISKS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Risk <span>Register &amp; Mitigations</span></h2>
        <div class="risk-grid">
          <div class="risk-card">
            <h4>Undisclosed Liens</h4>
            <p>Mortgages, tax liens, mechanics liens, or HOA dues encumbering title.</p>
            <div class="mitigation"><strong>Mitigation:</strong> Full title search and owner's title insurance policy at closing.</div>
          </div>
          <div class="risk-card">
            <h4>Deferred Maintenance</h4>
            <p>Roof, foundation, HVAC, or water intrusion issues that inflate true cost of ownership.</p>
            <div class="mitigation"><strong>Mitigation:</strong> Independent pre-offer inspection. Price adjustment or repair credit negotiated before closing.</div>
          </div>
          <div class="risk-card">
            <h4>Appraisal Gap</h4>
            <p>Lender appraisal comes in below contract price.</p>
            <div class="mitigation"><strong>Mitigation:</strong> Appraisal contingency in contract. Renegotiate, bring cash to gap, or terminate.</div>
          </div>
          <div class="risk-card">
            <h4>Seller Bad Faith</h4>
            <p>Competing offers, retrades, or verbal side agreements that break down in writing.</p>
            <div class="mitigation"><strong>Mitigation:</strong> Everything in writing, reasonable earnest money, attorney-drafted agreement.</div>
          </div>
          <div class="risk-card">
            <h4>Easement / Setback Surprises</h4>
            <p>Utility easements, zoning restrictions, or setback requirements that limit future use.</p>
            <div class="mitigation"><strong>Mitigation:</strong> Survey with easements flagged. Zoning letter from municipality.</div>
          </div>
          <div class="risk-card">
            <h4>Wire Fraud</h4>
            <p>Impersonated closing instructions diverting escrow funds.</p>
            <div class="mitigation"><strong>Mitigation:</strong> Verbal callback to title office using a known-good number before any wire transfer.</div>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Due Diligence <span>Checklist</span></h2>
        <ul class="checklist">
          <li>Recorded deed and chain-of-title pulled from county probate</li>
          <li>Current tax assessment and ad valorem tax status confirmed</li>
          <li>Twelve-month comp sheet with median and range $/sq ft compiled</li>
          <li>Attorney retained and engagement letter signed</li>
          <li>Proof of funds or mortgage pre-approval in hand</li>
          <li>Pre-offer professional inspection scheduled</li>
          <li>Survey ordered showing easements, setbacks, and encroachments</li>
          <li>Title commitment reviewed; exceptions evaluated</li>
          <li>Insurance quote obtained (hazard + flood if applicable)</li>
          <li>HOA covenants, conditions, and restrictions reviewed if any</li>
          <li>Utility history (water, power, gas) last 24 months reviewed</li>
          <li>Written offer prepared with all contingencies itemized</li>
          <li>Earnest money amount and escrow agent confirmed</li>
          <li>Closing date and possession terms defined</li>
          <li>Wire instructions verified by voice callback before funding</li>
        </ul>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Immediate <span>Next Actions</span></h2>
        <table class="fact-table">
          <thead>
            <tr><th>Step</th><th>Owner</th></tr>
          </thead>
          <tbody>
            <tr><td class="label">Pull deed and tax record for 4505 Buttewoods</td><td>Aaron C. Norris</td></tr>
            <tr><td class="label">Request 12-month comp sheet from Realtor</td><td>Aaron C. Norris</td></tr>
            <tr><td class="label">Retain Alabama real-estate attorney</td><td>Aaron C. Norris</td></tr>
            <tr><td class="label">Confirm financing posture (cash or lender)</td><td>Aaron C. Norris</td></tr>
            <tr><td class="label">Schedule pre-offer inspection</td><td>Aaron C. Norris</td></tr>
            <tr><td class="label">Open respectful conversation with seller / listing agent</td><td>Aaron C. Norris</td></tr>
          </tbody>
        </table>
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
    <div class="nu-footer-meta">
      Estate Acquisition Brief — 4505 Buttewoods — prepared 2026-04-24
    </div>
  </footer>

</body>
</html>