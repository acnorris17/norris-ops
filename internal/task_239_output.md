<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
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
      letter-spacing: 0.03em;
    }

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

    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 60px 40px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 20%; left: 50%;
      transform: translate(-50%, 0);
      width: 65%; height: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.07;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .page-meta {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      padding: 14px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 32px;
      font-size: 0.85rem;
      color: var(--nu-dark-text);
    }
    .page-meta strong { color: var(--nu-blue); font-weight: 700; }

    .hero-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .hero-title .first { color: var(--nu-blue); }
    .hero-sub {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      margin-bottom: 40px;
      font-weight: 300;
    }

    .property-panel {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 2px;
      background: var(--nu-medium-gray);
      margin-bottom: 48px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }
    .property-address {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 36px 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .property-address .label {
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 12px;
      font-weight: 700;
    }
    .property-address .street {
      font-size: 1.8rem;
      font-weight: 900;
      line-height: 1.15;
      margin-bottom: 6px;
    }
    .property-address .city {
      font-size: 1rem;
      color: rgba(255,255,255,0.8);
      font-weight: 300;
    }
    .property-stats {
      background: var(--nu-white);
      padding: 36px 32px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .stat-block .stat-value {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1;
    }
    .stat-block .stat-label {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-top: 6px;
      font-weight: 700;
    }

    .section-header {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 48px 0 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-header .first {
      color: var(--nu-blue);
    }
    .section-header .rest { color: var(--nu-dark-text); }

    .phase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      margin-bottom: 16px;
    }
    .phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
    }
    .phase-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .phase-num {
      position: absolute;
      top: -14px;
      left: 20px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.85rem;
      padding: 4px 14px;
      border-radius: 4px;
      letter-spacing: 0.05em;
    }
    .phase-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin: 8px 0 10px;
    }
    .phase-card ul {
      list-style: none;
      padding: 0;
    }
    .phase-card ul li {
      padding: 6px 0 6px 18px;
      position: relative;
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .phase-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    .diligence-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .diligence-table th {
      background: var(--nu-blue);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 16px;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .diligence-table td {
      padding: 12px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .diligence-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .diligence-table td.pri {
      font-weight: 700;
      color: var(--nu-blue);
      white-space: nowrap;
    }

    .leverage-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
    }
    .leverage-card {
      background: linear-gradient(135deg, #f8f8ff 0%, var(--nu-white) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 20px;
      border-radius: 6px;
    }
    .leverage-card h4 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.95rem;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .leverage-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    .offer-strategy {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 32px;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    .offer-strategy h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .offer-rungs {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
    }
    .rung {
      padding: 16px;
      background: rgba(255,255,255,0.08);
      border-radius: 6px;
      border-top: 3px solid var(--nu-cyan);
    }
    .rung .rung-label {
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
      font-weight: 700;
    }
    .rung .rung-note {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.85);
      margin-top: 8px;
      line-height: 1.5;
    }
    .rung .rung-price {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-white);
    }

    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 24px 28px;
    }
    .checklist h3 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .checklist ul {
      list-style: none;
    }
    .checklist ul li {
      padding: 8px 0 8px 28px;
      position: relative;
      font-size: 0.95rem;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist ul li:last-child { border-bottom: none; }
    .checklist ul li::before {
      content: '☐';
      position: absolute;
      left: 0;
      top: 6px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.1rem;
    }

    .callout {
      background: #fff9e6;
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 4px;
      margin: 20px 0;
      font-size: 0.95rem;
    }
    .callout strong { color: #8a6a1a; }

    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 12px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .hero-title { font-size: 1.75rem; }
      .property-panel { grid-template-columns: 1fr; }
      .property-stats { grid-template-columns: repeat(2, 1fr); }
      .nu-content-area { padding: 40px 20px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .phase-card, .diligence-table, .leverage-card { box-shadow: none; border: 1px solid #ccc; }
      .offer-strategy, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

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
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <div class="page-meta">
        <div><strong>ACTION ITEM</strong> — Estate Acquisition Strategy</div>
        <div><strong>SOURCE</strong> — reMarkable Capture</div>
        <div><strong>DATE</strong> — April 21, 2026</div>
        <div><strong>OWNER</strong> — Aaron C. Norris</div>
      </div>

      <h1 class="hero-title"><span class="first">Negotiate</span> the Purchase of 4505 Buttewoods</h1>
      <p class="hero-sub">A 7,098 sq ft estate acquisition — structured approach covering diligence, valuation leverage, offer laddering, and closing milestones.</p>

      <div class="property-panel">
        <div class="property-address">
          <div class="label">Subject Property</div>
          <div class="street">4505 Buttewoods</div>
          <div class="city">Single-family estate — full address to confirm at title search</div>
        </div>
        <div class="property-stats">
          <div class="stat-block">
            <div class="stat-value">7,098</div>
            <div class="stat-label">Living Sq Ft</div>
          </div>
          <div class="stat-block">
            <div class="stat-value">Estate</div>
            <div class="stat-label">Property Class</div>
          </div>
          <div class="stat-block">
            <div class="stat-value">Target</div>
            <div class="stat-label">Primary / Investment</div>
          </div>
          <div class="stat-block">
            <div class="stat-value">Active</div>
            <div class="stat-label">Negotiation Status</div>
          </div>
        </div>
      </div>

      <h2 class="section-header"><span class="first">Negotiation</span><span class="rest"> Phase Plan</span></h2>
      <div class="phase-grid">

        <div class="phase-card">
          <div class="phase-num">PHASE 1</div>
          <h3>Intelligence &amp; Baseline</h3>
          <ul>
            <li>Pull public records: deed history, last sale, tax assessment, lien status</li>
            <li>Pull three comparable sales within 1-mile, 12 months, 6,500–7,800 sq ft</li>
            <li>Days-on-market and prior price reductions</li>
            <li>Seller motivation profile — estate, relocation, divorce, downsizing</li>
            <li>Confirm listing agent vs for-sale-by-owner</li>
          </ul>
        </div>

        <div class="phase-card">
          <div class="phase-num">PHASE 2</div>
          <h3>Valuation &amp; Financing</h3>
          <ul>
            <li>Independent drive-by appraisal opinion from a trusted local appraiser</li>
            <li>Pre-approval letter from Renasant (Patrick Lavette) — jumbo range confirmed</li>
            <li>Cash-equivalent alternative: portfolio loan backed by existing equity</li>
            <li>Establish Walk-Away Number and share it with no one</li>
            <li>Identify 1–2 repairs or updates that justify a price concession</li>
          </ul>
        </div>

        <div class="phase-card">
          <div class="phase-num">PHASE 3</div>
          <h3>Offer &amp; Terms</h3>
          <ul>
            <li>Open with a respectful but disciplined number — not the ask</li>
            <li>Lead with clean terms: short DD window, earnest money in escrow, flexible close</li>
            <li>Ask seller to cover title policy and transfer taxes where customary</li>
            <li>Include appraisal and financing contingencies — do not waive on first offer</li>
            <li>Expiration on offer: 48–72 hours to force a decision</li>
          </ul>
        </div>

        <div class="phase-card">
          <div class="phase-num">PHASE 4</div>
          <h3>Diligence &amp; Close</h3>
          <ul>
            <li>Whole-home inspection + roof, HVAC, foundation, septic or sewer, pool</li>
            <li>Survey &amp; boundary verification — especially on estate-scale lots</li>
            <li>Title commitment review — easements, restrictions, unpaid taxes</li>
            <li>Final walk-through 24 hours before closing</li>
            <li>Wire funds only from confirmed title company instructions (call to verify)</li>
          </ul>
        </div>

      </div>

      <h2 class="section-header"><span class="first">Diligence</span><span class="rest"> Checklist</span></h2>
      <table class="diligence-table">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Item</th>
            <th>Source / Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="pri">HIGH</td><td>Tax-assessed value vs list price gap</td><td>County assessor</td></tr>
          <tr><td class="pri">HIGH</td><td>Recent comps — 1 mile / 12 months / similar sq ft</td><td>MLS / agent</td></tr>
          <tr><td class="pri">HIGH</td><td>Seller's disclosures — roof, HVAC, foundation, moisture</td><td>Listing side</td></tr>
          <tr><td class="pri">HIGH</td><td>Mortgage &amp; lien search — payoff vs sale price</td><td>Title company</td></tr>
          <tr><td class="pri">MED</td><td>HOA dues, covenants, architectural restrictions</td><td>HOA docs</td></tr>
          <tr><td class="pri">MED</td><td>School district + resale profile</td><td>Public data</td></tr>
          <tr><td class="pri">MED</td><td>Insurance quote — rate class, wind/flood zone</td><td>Insurance agent</td></tr>
          <tr><td class="pri">LOW</td><td>Utility bill history (12 mo)</td><td>Seller request</td></tr>
          <tr><td class="pri">LOW</td><td>Appliance warranties and age of major systems</td><td>Seller request</td></tr>
        </tbody>
      </table>

      <h2 class="section-header"><span class="first">Leverage</span><span class="rest"> Points</span></h2>
      <div class="leverage-grid">
        <div class="leverage-card">
          <h4>Days on Market</h4>
          <p>Every week past day 30 shifts leverage toward the buyer. Use DOM as the anchor for your opening price.</p>
        </div>
        <div class="leverage-card">
          <h4>Clean Terms</h4>
          <p>Short DD, strong earnest, flexible close — sometimes worth $15–30K in effective price to a motivated seller.</p>
        </div>
        <div class="leverage-card">
          <h4>Deferred Maintenance</h4>
          <p>Roof age, HVAC age, any structural concern is a hard-dollar concession request, not a soft ask.</p>
        </div>
        <div class="leverage-card">
          <h4>Concurrent Alternatives</h4>
          <p>Be willing to walk. A buyer who has a named backup property negotiates from a very different chair.</p>
        </div>
        <div class="leverage-card">
          <h4>Financing Certainty</h4>
          <p>Jumbo pre-approval + verified proof of funds removes the #1 seller fear and lets you push on price.</p>
        </div>
        <div class="leverage-card">
          <h4>Timing the Ask</h4>
          <p>Friday afternoon offers that expire Sunday evening force action over the weekend — and often win.</p>
        </div>
      </div>

      <h2 class="section-header"><span class="first">Offer</span><span class="rest"> Ladder</span></h2>
      <div class="offer-strategy">
        <h3>Three-Rung Price Discipline</h3>
        <div class="offer-rungs">
          <div class="rung">
            <div class="rung-label">Rung 1 — Opening</div>
            <div class="rung-price">~88% of ask</div>
            <div class="rung-note">Respectful floor. Establishes you are a real buyer with real money, not a bargain hunter.</div>
          </div>
          <div class="rung">
            <div class="rung-label">Rung 2 — Target</div>
            <div class="rung-price">~93% of ask</div>
            <div class="rung-note">The number you actually expect to close at, pending inspection. Anchored by comps.</div>
          </div>
          <div class="rung">
            <div class="rung-label">Rung 3 — Walk-Away</div>
            <div class="rung-price">Hard ceiling</div>
            <div class="rung-note">Set privately before first offer. Do not exceed under any circumstance — emotional anchoring is the enemy.</div>
          </div>
        </div>
      </div>

      <div class="callout">
        <strong>Discipline Rule:</strong> The price you will actually pay is decided <em>before</em> you sit at the table — not during the exchange. Write the walk-away number on paper, seal it in an envelope, and do not open it until closing.
      </div>

      <h2 class="section-header"><span class="first">Next</span><span class="rest"> 7 Days — Action List</span></h2>
      <div class="checklist">
        <h3>This Week</h3>
        <ul>
          <li>Confirm full subject address and parcel ID — pull county record on 4505 Buttewoods</li>
          <li>Request three comparable sales from a neighborhood agent</li>
          <li>Call Patrick Lavette at Renasant — request jumbo pre-approval up to ceiling</li>
          <li>Order a drive-by appraisal opinion from trusted local appraiser</li>
          <li>Pull listing history — DOM, any prior price reductions, prior under-contract events</li>
          <li>Identify seller motivation — estate sale, divorce, relocation, downsizing</li>
          <li>Draft offer letter with 48–72 hour expiration</li>
          <li>Schedule inspection contacts in advance so DD window can stay tight</li>
          <li>Set written Walk-Away Number — seal and do not revisit</li>
        </ul>
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
  </footer>

</body>
</html>