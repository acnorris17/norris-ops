<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods — Negotiation Strategy — Norris Utilities®</title>
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
      --nu-green: #2D7A3E;
      --nu-red: #B91C1C;
      --nu-amber: #B45309;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      margin-top: 18px;
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--nu-cyan);
      letter-spacing: 0.3em;
      text-transform: uppercase;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 80px;
    }

    /* ══ TITLE BLOCK ══ */
    .nu-title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-title-eyebrow {
      font-weight: 700;
      font-size: 0.82rem;
      color: var(--nu-blue);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .nu-title-main {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .nu-title-main .accent { color: var(--nu-blue); }
    .nu-title-sub {
      font-weight: 400;
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 6px;
      line-height: 1.2;
    }
    .nu-section-title .first-word { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
    }

    /* ══ SUMMARY GRID ══ */
    .nu-summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }
    .nu-summary-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 4px;
    }
    .nu-summary-label {
      font-weight: 700;
      font-size: 0.72rem;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-summary-value {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-summary-sub {
      font-weight: 400;
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* ══ BADGES ══ */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 20px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* ══ CARDS ══ */
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 28px;
      margin-bottom: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card p { margin-bottom: 10px; }
    .nu-card p:last-child { margin-bottom: 0; }
    .nu-card ul {
      list-style: none;
      margin-top: 10px;
    }
    .nu-card ul li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 8px;
      font-size: 0.98rem;
    }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
      top: 2px;
    }

    /* ══ TWO-COL GRID ══ */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }

    /* ══ TABLE ══ */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      font-size: 0.95rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table td.num {
      font-weight: 700;
      color: var(--nu-dark-text);
      text-align: right;
      white-space: nowrap;
    }

    /* ══ STRATEGY COLUMNS ══ */
    .nu-strategy-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    .nu-strategy-card {
      padding: 22px;
      border-radius: 8px;
      border: 2px solid transparent;
    }
    .nu-strategy-card.floor {
      background: #F0F7F2;
      border-color: var(--nu-green);
    }
    .nu-strategy-card.target {
      background: #EEF2FF;
      border-color: var(--nu-blue);
    }
    .nu-strategy-card.ceiling {
      background: #FEF3E7;
      border-color: var(--nu-amber);
    }
    .nu-strategy-label {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-strategy-card.floor .nu-strategy-label { color: var(--nu-green); }
    .nu-strategy-card.target .nu-strategy-label { color: var(--nu-blue); }
    .nu-strategy-card.ceiling .nu-strategy-label { color: var(--nu-amber); }
    .nu-strategy-price {
      font-weight: 900;
      font-size: 1.75rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-strategy-note {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* ══ CALLOUT ══ */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 4px;
      margin: 18px 0;
    }
    .nu-callout strong { color: var(--nu-blue); }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 8px 0;
    }
    .nu-checklist li {
      padding: 12px 22px 12px 52px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 20px;
      top: 16px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
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

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 46px 22px 70px; min-height: 230px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 22px 56px; }
      .nu-title-main { font-size: 1.7rem; }
      .nu-strategy-grid { grid-template-columns: 1fr; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 20px; }
      .nu-table { font-size: 0.85rem; }
      .nu-table th, .nu-table td { padding: 10px 12px; }
    }

    @media print {
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; break-inside: avoid; }
      .nu-section { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Confidential — Negotiation Strategy</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="nu-title-block">
        <div class="nu-title-eyebrow">Residential Acquisition — Negotiation Playbook</div>
        <h1 class="nu-title-main">4505 Buttewoods — <span class="accent">7,098 sq ft Estate</span></h1>
        <p class="nu-title-sub">
          Structured negotiation plan for the Buttewoods estate acquisition. Includes opening position, walk-away floor, counter-offer ladder, and closing conditions.
        </p>
      </div>

      <!-- DEAL SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Deal</span> <span class="rest">Snapshot</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-summary-grid">
          <div class="nu-summary-card">
            <div class="nu-summary-label">Property</div>
            <div class="nu-summary-value">4505 Buttewoods</div>
            <div class="nu-summary-sub">Single-family estate</div>
          </div>
          <div class="nu-summary-card">
            <div class="nu-summary-label">Living Area</div>
            <div class="nu-summary-value">7,098 sq ft</div>
            <div class="nu-summary-sub">Heated / finished</div>
          </div>
          <div class="nu-summary-card">
            <div class="nu-summary-label">Standing Offer</div>
            <div class="nu-summary-value">$900,000</div>
            <div class="nu-summary-sub">Presented by seller</div>
          </div>
          <div class="nu-summary-card">
            <div class="nu-summary-label">Indicated PSF</div>
            <div class="nu-summary-value">$126.80</div>
            <div class="nu-summary-sub">$900,000 ÷ 7,098</div>
          </div>
        </div>
        <div class="nu-callout">
          <strong>Context:</strong> The $900,000 figure is the seller's opening number. Our goal is not to accept or reject it — it is to reframe the conversation around verified data: inspection, title, comps, and the cost of work required to bring the home to the condition we are paying for.
        </div>
      </section>

      <!-- PRICING LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Price</span> <span class="rest">Ladder</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-strategy-grid">
          <div class="nu-strategy-card floor">
            <div class="nu-strategy-label">Floor — Walk Away</div>
            <div class="nu-strategy-price">$810,000</div>
            <div class="nu-strategy-note">10% below ask. If we cannot reach this number with reasonable terms, we walk. No chasing.</div>
          </div>
          <div class="nu-strategy-card target">
            <div class="nu-strategy-label">Target — Signed Price</div>
            <div class="nu-strategy-price">$845,000</div>
            <div class="nu-strategy-note">Mid-point. Leaves room for inspection credits while holding seller near ask.</div>
          </div>
          <div class="nu-strategy-card ceiling">
            <div class="nu-strategy-label">Ceiling — Absolute Max</div>
            <div class="nu-strategy-price">$875,000</div>
            <div class="nu-strategy-note">Only with clean inspection, seller-paid closing, and home warranty included.</div>
          </div>
        </div>
      </section>

      <!-- OPENING POSITION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Opening</span> <span class="rest">Position</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-badge"><span class="nu-badge-num">1</span>Counter at $795,000 — written, with rationale attached</div>
        <div class="nu-card">
          <h3>Why $795,000 as the first counter</h3>
          <p>Opening roughly 11.7% below ask gives real room to move toward the target without ever crossing our ceiling. It also signals we are a serious, data-driven buyer — not a lowballer.</p>
          <ul>
            <li>Positions $845,000 as a natural meeting point (our mid, their expected movement down).</li>
            <li>Forces the seller to defend the $900,000 number with data rather than sentiment.</li>
            <li>Keeps $810,000 (our floor) invisible and protected.</li>
          </ul>
        </div>

        <div class="nu-badge"><span class="nu-badge-num">2</span>Attach a one-page justification — not a verbal pitch</div>
        <div class="nu-card">
          <h3>What goes in the justification sheet</h3>
          <ul>
            <li>Three recent comparable sales within 1 mile, sorted by closed $/sq ft.</li>
            <li>Any public days-on-market history for 4505 Buttewoods.</li>
            <li>Deferred maintenance observations from initial walk-through (roof age, HVAC age, visible moisture).</li>
            <li>Current 30-year rate environment and its effect on buyer pool.</li>
          </ul>
        </div>
      </section>

      <!-- COUNTER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Counter-Offer</span> <span class="rest">Ladder</span></h2>
        <div class="nu-section-rule"></div>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Round</th>
              <th>Our Move</th>
              <th>If Seller Counters At</th>
              <th class="num">Our Response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Open at $795,000 + justification</td>
              <td>$880,000 or higher</td>
              <td class="num">$820,000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Move to $820,000</td>
              <td>$865,000 – $879,000</td>
              <td class="num">$840,000 — best &amp; final trigger</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Best &amp; final at $840,000</td>
              <td>$855,000 – $864,000</td>
              <td class="num">$845,000 — target, with terms</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lock at $845,000 with terms</td>
              <td>$850,000 + seller-paid closing</td>
              <td class="num">Accept if under ceiling</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Walk if above $875,000 net</td>
              <td>$880,000+ with no concessions</td>
              <td class="num">Respectful decline. No chase.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Leverage</span> <span class="rest">Points</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-two-col">
          <div class="nu-card">
            <h3>What strengthens our position</h3>
            <ul>
              <li>Cash or near-cash position (pre-approval letter in hand).</li>
              <li>Flexible close date — can match the seller's calendar.</li>
              <li>Limited-contingency offer: inspection only, no home-sale contingency.</li>
              <li>Clean paper: proof of funds, earnest money ready to wire.</li>
              <li>Willingness to hold earnest money non-refundable after inspection period.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>What we do NOT concede verbally</h3>
            <ul>
              <li>Our ceiling. Never anchor the seller above the midpoint.</li>
              <li>Our timeline urgency. "We like it" is the most we ever say.</li>
              <li>Our financing buffer. Seller does not need to know our max approval.</li>
              <li>The existence of other properties we are considering — neither confirm nor deny.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TERMS TO TRADE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Terms</span> <span class="rest">to Trade</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 16px;">When price movement stalls, trade on terms. These are concessions the seller often values more than a few thousand dollars on price — and they protect us at the same time.</p>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Ask From Seller</th>
              <th>What We Offer In Exchange</th>
              <th class="num">Estimated Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Seller-paid closing costs</td>
              <td>Faster close (21 days vs 30)</td>
              <td class="num">$18,000 – $22,000</td>
            </tr>
            <tr>
              <td>1-year home warranty (seller funded)</td>
              <td>Release contingency faster</td>
              <td class="num">$650 – $900</td>
            </tr>
            <tr>
              <td>Roof repair credit or replacement</td>
              <td>Accept as-is elsewhere</td>
              <td class="num">$12,000 – $28,000</td>
            </tr>
            <tr>
              <td>HVAC service records + credit if past life</td>
              <td>Waive cosmetic requests</td>
              <td class="num">$6,000 – $14,000 per unit</td>
            </tr>
            <tr>
              <td>Keep existing appliances &amp; generator</td>
              <td>Non-refundable earnest after inspection</td>
              <td class="num">$8,000 – $15,000</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <ul class="nu-checklist">
          <li><strong>Comparable sales pull</strong> — three closed within 12 months, same zip, 6,000–8,000 sq ft.</li>
          <li><strong>Tax assessor value</strong> — compare county assessment to $900,000 ask.</li>
          <li><strong>Days on market history</strong> — prior listings, price changes, expired listings.</li>
          <li><strong>Roof age &amp; remaining life</strong> — pull invoice or schedule roofer inspection.</li>
          <li><strong>HVAC age</strong> — each system, with model/serial and service history.</li>
          <li><strong>Foundation + drainage</strong> — engineer walk-through on a home this size is mandatory.</li>
          <li><strong>Water intrusion history</strong> — crawl space, basement, and any finished lower level.</li>
          <li><strong>Title search &amp; easements</strong> — confirm no utility or drainage encumbrances.</li>
          <li><strong>HOA or restrictive covenants</strong> — dues, transfer fees, architectural committee.</li>
          <li><strong>Property survey</strong> — verify lot lines match the listing.</li>
          <li><strong>Insurance quote before offer is signed</strong> — premium drives monthly carry cost.</li>
          <li><strong>Utility cost history</strong> — 12 months of gas and electric for a 7,098 sq ft home.</li>
        </ul>
      </section>

      <!-- CLOSING CONDITIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Closing</span> <span class="rest">Conditions</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-two-col">
          <div class="nu-card">
            <h3>Must-have in contract</h3>
            <ul>
              <li>Inspection contingency — minimum 10 business days.</li>
              <li>Appraisal contingency unless we waive in writing for leverage.</li>
              <li>Financing contingency matched to lender's timeline.</li>
              <li>Clear title delivered at closing, seller pays owner's title policy.</li>
              <li>Survey delivered 5 days before closing.</li>
              <li>Final walk-through within 48 hours of closing.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Walk-away triggers</h3>
            <ul>
              <li>Seller refuses inspection contingency.</li>
              <li>Structural or foundation issue not credited.</li>
              <li>Undisclosed water intrusion history discovered.</li>
              <li>Title defect the seller will not cure.</li>
              <li>Final number lands above $875,000 net with no material concessions.</li>
              <li>Seller demands non-refundable earnest before inspection.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Talking</span> <span class="rest">Points &amp; Scripts</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-card">
          <h3>Opening — when presenting the $795,000 offer</h3>
          <p>"We like the home, and we're offering from a place of serious interest. The number we've put together reflects what comparable homes in this corridor have actually closed at over the last twelve months, adjusted for the condition items we saw during our walk-through. We've attached the comps so your seller can see the math we used."</p>
        </div>

        <div class="nu-card">
          <h3>Mid-negotiation — when seller pushes back hard</h3>
          <p>"We understand the home has meaning to the seller. Our offer isn't a reflection of the home's value to them — it's a reflection of what a lender will appraise and what a buyer market will support today. We're willing to move, but movement has to be tied to either price or terms, not both."</p>
        </div>

        <div class="nu-card">
          <h3>Best &amp; final — when ready to lock at $840,000</h3>
          <p>"This is our best and final number. It's not a strategic line — we've done the math, and going above this changes the underwriting for us. If the seller can meet us here, we can be under contract today and close in 21 days. If not, we'll respectfully step back, and we'll wish them well on the next buyer."</p>
        </div>

        <div class="nu-card">
          <h3>If seller stays at $900,000 — closing the door with grace</h3>
          <p>"We appreciate the time and the tour. The gap between our positions is too wide for us to close responsibly. If the seller's thinking changes in the next 30 days, we'd welcome a call. Otherwise, we wish them the best."</p>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Next</span> <span class="rest">Actions — Aaron</span></h2>
        <div class="nu-section-rule"></div>
        <ul class="nu-checklist">
          <li><strong>Pull comps</strong> — three closed sales, 4505 Buttewoods corridor, last 12 months.</li>
          <li><strong>Confirm pre-approval letter</strong> — up to $875,000, dated within 30 days.</li>
          <li><strong>Schedule walk-through</strong> — with a contractor or engineer, not just a home inspector.</li>
          <li><strong>Draft $795,000 offer</strong> — with justification sheet attached as exhibit A.</li>
          <li><strong>Set negotiation calendar</strong> — one counter per 48 hours, not faster.</li>
          <li><strong>Line up insurance quote</strong> — before contract is signed.</li>
          <li><strong>Pre-commit a walk-away date</strong> — if not under contract by that date, move on.</li>
        </ul>
      </section>

      <!-- CONFIDENTIALITY -->
      <section class="nu-section">
        <div class="nu-callout">
          <strong>Confidential — internal use only.</strong> This document is prepared for Aaron C. Norris and is not to be shared with the seller, seller's agent, or any third party. Numbers, floors, and ceilings in this playbook are the negotiating position of Norris Utilities®, LLC and are protected as such.
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