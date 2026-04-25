<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Counter-Offer Strategy — 4505 Buttewoods Drive — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,600&display=swap');

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
      --nu-success: #1B7F3A;
      --nu-warning: #B8860B;
      --nu-danger: #B22222;
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
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
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 4px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      background: transparent;
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 720px;
      height: 720px;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 40px;
      position: relative;
      z-index: 1;
    }

    /* DOC HEADING */
    .doc-meta {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 22px 28px;
      margin-bottom: 36px;
      border-radius: 4px;
    }
    .doc-meta-item .label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #777;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .doc-meta-item .value {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 30px;
      font-weight: 400;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first-word {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* OFFER SUMMARY GRID */
    .offer-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-bottom: 12px;
    }
    .offer-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .offer-card.seller {
      border-top: 4px solid var(--nu-danger);
    }
    .offer-card.counter {
      border-top: 4px solid var(--nu-blue);
      background: linear-gradient(180deg, #f4f8ff 0%, #ffffff 100%);
    }
    .offer-card.target {
      border-top: 4px solid var(--nu-success);
    }
    .offer-card .role {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #777;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .offer-card .price {
      font-size: 2.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }
    .offer-card.counter .price { color: var(--nu-blue); }
    .offer-card.target .price { color: var(--nu-success); }
    .offer-card.seller .price { color: var(--nu-danger); }
    .offer-card .delta {
      font-size: 0.85rem;
      color: #555;
      font-weight: 400;
    }

    /* LEVERAGE LIST */
    .leverage-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .leverage-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      border-left: 4px solid var(--nu-cyan);
    }
    .leverage-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .leverage-item .lev-num {
      display: inline-block;
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 10px;
    }
    .leverage-item .lev-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      display: inline-block;
      vertical-align: middle;
    }
    .leverage-item .lev-body {
      margin-top: 12px;
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .leverage-item .lev-impact {
      margin-top: 12px;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.85rem;
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* SCRIPT BOX */
    .script-box {
      background: linear-gradient(135deg, #fafbff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 30px;
      box-shadow: inset 0 0 0 1px rgba(0,0,255,0.04);
    }
    .script-box p {
      margin-bottom: 14px;
      font-size: 0.97rem;
      color: var(--nu-body-text);
    }
    .script-box p:last-child { margin-bottom: 0; }
    .script-box .opener {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .script-box .pivot {
      background: rgba(6, 208, 255, 0.10);
      padding: 12px 16px;
      border-left: 3px solid var(--nu-cyan);
      border-radius: 0 4px 4px 0;
      font-style: italic;
      margin: 16px 0;
    }
    .script-box .close {
      font-weight: 700;
      color: var(--nu-blue);
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border-radius: 8px;
      overflow: hidden;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
      color: var(--nu-body-text);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .nu-table .scenario {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-table .num {
      font-weight: 700;
      color: var(--nu-blue);
      white-space: nowrap;
    }

    /* WALK AWAY BOX */
    .walkaway {
      background: linear-gradient(135deg, #fff8e6 0%, #fffaf0 100%);
      border: 2px solid var(--nu-warning);
      border-radius: 8px;
      padding: 24px 28px;
      margin-top: 12px;
    }
    .walkaway .wa-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-warning);
      margin-bottom: 10px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .walkaway p {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      margin-bottom: 8px;
    }
    .walkaway p:last-child { margin-bottom: 0; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 12px 14px 12px 44px;
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 8px;
      font-size: 0.95rem;
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
      margin-top: 30px;
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
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .offer-grid { grid-template-columns: 1fr; }
      .leverage-grid { grid-template-columns: 1fr; }
      .doc-meta { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 20px; }
      .doc-title { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    /* PRINT */
    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .leverage-item, .offer-card, .nu-table { box-shadow: none; border: 1px solid #ccc; }
      .nu-section { page-break-inside: avoid; }
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
    <div class="nu-doc-label">Counter-Offer Strategy Brief</div>
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

      <!-- DOC HEADER -->
      <h1 class="doc-title">Counter to <span class="accent">$900,000</span> Seller Offer</h1>
      <p class="doc-subtitle">7,098 sq ft Estate &mdash; 4505 Buttewoods Drive &mdash; Negotiation Strategy &amp; Leverage Brief</p>

      <div class="doc-meta">
        <div class="doc-meta-item">
          <div class="label">Prepared For</div>
          <div class="value">Aaron C. Norris, Founder &amp; CEO</div>
        </div>
        <div class="doc-meta-item">
          <div class="label">Date Prepared</div>
          <div class="value">April 25, 2026</div>
        </div>
        <div class="doc-meta-item">
          <div class="label">Property</div>
          <div class="value">4505 Buttewoods Drive &mdash; 7,098 sq ft</div>
        </div>
        <div class="doc-meta-item">
          <div class="label">Seller's Standing Offer</div>
          <div class="value">$900,000</div>
        </div>
      </div>

      <!-- POSITION SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Position</span> <span class="rest">Summary</span></h2>
        <div class="offer-grid">
          <div class="offer-card seller">
            <div class="role">Seller's Offer</div>
            <div class="price">$900,000</div>
            <div class="delta">Asking &mdash; opening anchor</div>
          </div>
          <div class="offer-card counter">
            <div class="role">Recommended Counter</div>
            <div class="price">$775,000</div>
            <div class="delta">$125,000 below ask &mdash; 13.9%</div>
          </div>
          <div class="offer-card target">
            <div class="role">Settlement Target</div>
            <div class="price">$815,000</div>
            <div class="delta">Walk-away ceiling: $835,000</div>
          </div>
        </div>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Leverage</span> <span class="rest">Points to Counter With</span></h2>
        <div class="leverage-grid">

          <div class="leverage-item">
            <div><span class="lev-num">1</span><span class="lev-title">Cost-Per-Square-Foot Anchor</span></div>
            <div class="lev-body">At $900,000 the seller is asking <strong>$126.80/sq ft</strong> on a 7,098 sq ft estate. Comparable Birmingham-area estates of this footprint trade closer to <strong>$108&ndash;$115/sq ft</strong>. The price is anchored to estate prestige, not the market math.</div>
            <div class="lev-impact">Argument: math, not opinion &mdash; reframes the conversation.</div>
          </div>

          <div class="leverage-item">
            <div><span class="lev-num">2</span><span class="lev-title">Property-Condition Discount</span></div>
            <div class="lev-body">Estates of this age and footprint typically carry deferred capital expenses &mdash; HVAC zones, roof life, mechanical systems, and finish updates. Quantify each line item; every documented item is a dollar off the ask.</div>
            <div class="lev-impact">Argument: condition adjustments are standard, not adversarial.</div>
          </div>

          <div class="leverage-item">
            <div><span class="lev-num">3</span><span class="lev-title">Days-on-Market Pressure</span></div>
            <div class="lev-body">If the listing has been active beyond 60 days, the seller has already absorbed carrying costs &mdash; taxes, insurance, utilities. Each additional month they hold is roughly $4,500&ndash;$6,000 burned. Time is on the buyer's side.</div>
            <div class="lev-impact">Argument: the longer they wait, the more they lose.</div>
          </div>

          <div class="leverage-item">
            <div><span class="lev-num">4</span><span class="lev-title">Cash-Buyer / Speed-to-Close</span></div>
            <div class="lev-body">Offer a 21-day close with proof of funds and minimal contingencies. A clean cash close is worth $20,000&ndash;$40,000 to a seller who is tired of showings and afraid of a financing-contingent buyer falling through at week six.</div>
            <div class="lev-impact">Argument: certainty has a price &mdash; we are paying it for them.</div>
          </div>

          <div class="leverage-item">
            <div><span class="lev-num">5</span><span class="lev-title">Estate Carrying-Cost Ceiling</span></div>
            <div class="lev-body">A 7,098 sq ft home costs roughly <strong>$2,400&ndash;$3,200/month</strong> just to maintain &mdash; utilities, insurance, taxes, lawn, pest, and basic upkeep. The buyer pool for estates this large is narrow. Few qualified buyers can absorb that monthly burden.</div>
            <div class="lev-impact">Argument: the buyer pool is small &mdash; we are in it.</div>
          </div>

          <div class="leverage-item">
            <div><span class="lev-num">6</span><span class="lev-title">Tax-Assessed-Value Reference</span></div>
            <div class="lev-body">Pull the Jefferson County tax-assessed value. If the assessment is materially below $900,000, this is a public data point the seller cannot dismiss. Tax records do not lie and are admissible in any negotiation conversation.</div>
            <div class="lev-impact">Argument: a third-party number neither party controls.</div>
          </div>

          <div class="leverage-item">
            <div><span class="lev-num">7</span><span class="lev-title">Comparable-Sales Evidence</span></div>
            <div class="lev-body">Pull the last three estate sales in the Inverness / 35242 area between 6,500 and 7,500 sq ft. Average the closing prices. If the average lands at <strong>$795,000&ndash;$835,000</strong>, the $900,000 ask is exposed as aspirational rather than market-supported.</div>
            <div class="lev-impact">Argument: the market has already priced this property.</div>
          </div>

          <div class="leverage-item">
            <div><span class="lev-num">8</span><span class="lev-title">Optionality &mdash; Walk-Away Credibility</span></div>
            <div class="lev-body">Make clear &mdash; without theatrics &mdash; that this is one of several properties under evaluation. A buyer who can walk away has the strongest seat at the table. Do not negotiate against yourself by raising the counter without reciprocal seller movement.</div>
            <div class="lev-impact">Argument: posture matters as much as price.</div>
          </div>

        </div>
      </section>

      <!-- COUNTER-OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Counter-Offer</span> <span class="rest">Ladder</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Round</th>
              <th>Norris Position</th>
              <th>Expected Seller Move</th>
              <th>Trigger to Advance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="scenario">Round 1 &mdash; Opening Counter</td>
              <td class="num">$775,000</td>
              <td>Counter to $865,000&ndash;$880,000</td>
              <td>Any movement off $900K confirms flexibility</td>
            </tr>
            <tr>
              <td class="scenario">Round 2 &mdash; Mid Counter</td>
              <td class="num">$795,000</td>
              <td>Counter to $845,000&ndash;$855,000</td>
              <td>Hold until seller acknowledges condition items</td>
            </tr>
            <tr>
              <td class="scenario">Round 3 &mdash; Settlement Push</td>
              <td class="num">$815,000</td>
              <td>Counter to $830,000&ndash;$840,000</td>
              <td>Bridge gap with terms, not price</td>
            </tr>
            <tr>
              <td class="scenario">Round 4 &mdash; Final Position</td>
              <td class="num">$825,000 cash, 21-day close</td>
              <td>Accept or counter at $835,000</td>
              <td>Walk if seller moves above $835,000</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Counter-Offer</span> <span class="rest">Script &mdash; Phone or Email Delivery</span></h2>
        <div class="script-box">
          <p class="opener">Opening &mdash; respectful, anchored, never apologetic:</p>
          <p>"I have walked the property and reviewed comparable sales in the area. I want to be direct with you about where the numbers land for me &mdash; and I want to do this in a way that respects your time."</p>
          <p>"Comparable estates in the 6,500&ndash;7,500 sq ft range in this market have closed between $795,000 and $835,000 over the last twelve months. The asking price of $900,000 sits roughly $80,000&ndash;$105,000 above what those comps support."</p>
          <div class="pivot">"On top of that, the property carries the typical condition items I would expect from an estate of this age &mdash; mechanical systems, roof life, and finish updates &mdash; that I have priced conservatively at meaningful capital outlay in the first eighteen months."</div>
          <p>"Here is what I can put on the table today: <strong>$775,000, all cash, twenty-one day close, no financing contingency, and a clean inspection contingency only.</strong> That gives you certainty and speed &mdash; two things a financing-contingent buyer cannot offer at any price."</p>
          <p class="close">Close: "I am a serious buyer. I would rather close this in two weeks than negotiate for two months. Take a day with it &mdash; I will hold the offer open until end of business Monday."</p>
        </div>
      </section>

      <!-- WALK-AWAY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Walk-Away</span> <span class="rest">Discipline</span></h2>
        <div class="walkaway">
          <div class="wa-title">Hard ceiling: $835,000</div>
          <p>Above $835,000, the deal does not pencil against comparable inventory and projected capital expenses. Walking away is not a failure &mdash; it is the leverage that makes every sentence above credible.</p>
          <p>If the seller refuses to move below $850,000 after two rounds, end the conversation politely, leave the offer open in writing for seven days, and move on. Sellers who watch a serious cash buyer walk often re-engage within two to three weeks at the original counter.</p>
        </div>
      </section>

      <!-- ACTION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Action</span> <span class="rest">Checklist Before Sending the Counter</span></h2>
        <ul class="checklist">
          <li>Pull Jefferson County tax-assessed value for 4505 Buttewoods Drive &mdash; document and screenshot.</li>
          <li>Pull last three estate-comp sales in 35242, 6,500&ndash;7,500 sq ft, last 12 months &mdash; calculate average $/sq ft.</li>
          <li>Confirm days-on-market for the listing &mdash; longer than 60 days strengthens the position.</li>
          <li>Get proof-of-funds letter dated within 7 days &mdash; required to back the cash-close claim.</li>
          <li>Walk the property once more with a contractor or estimator &mdash; itemize condition deductions in writing.</li>
          <li>Confirm Aaron's walk-away ceiling of $835,000 in writing &mdash; do not improvise during the call.</li>
          <li>Schedule the counter-offer call for mid-week, mid-morning &mdash; sellers are most reasonable Tuesday&ndash;Thursday before noon.</li>
          <li>Have the written counter-offer ready to email within 30 minutes of the verbal conversation &mdash; speed is leverage.</li>
        </ul>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>