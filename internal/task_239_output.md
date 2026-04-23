<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Negotiation Action Plan — Norris Utilities®</title>
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
      --nu-success: #0b8a3a;
      --nu-warn: #b36b00;
      --nu-danger: #a10e2b;
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
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.8;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.25) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
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
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* CONTENT AREA with watermark */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 10%; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-wrap {
      max-width: 1120px;
      margin: 0 auto;
      padding: 56px 40px 80px;
    }

    /* DOC META BAR */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 36px;
      font-size: 0.88rem;
    }
    .doc-meta strong { color: var(--nu-navy); }
    .doc-meta .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 700;
      letter-spacing: 0.04em;
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    /* PAGE TITLE */
    .page-title {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .page-title em {
      color: var(--nu-blue);
      font-style: normal;
    }
    .page-subtitle {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 36px;
      max-width: 820px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 42px 0 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* PROPERTY SNAPSHOT GRID */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 12px;
    }
    .snapshot-cell {
      background: linear-gradient(180deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 18px 16px;
    }
    .snapshot-cell .label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #666;
      margin-bottom: 6px;
      font-weight: 700;
    }
    .snapshot-cell .value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-navy);
      line-height: 1.2;
    }
    .snapshot-cell .value.sm { font-size: 1.05rem; }

    /* TWO-COL LAYOUT */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    @media (max-width: 800px) { .two-col { grid-template-columns: 1fr; } }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .nu-card ul { list-style: none; padding: 0; }
    .nu-card ul li {
      padding: 6px 0 6px 22px;
      position: relative;
      color: var(--nu-body-text);
    }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1.3;
    }

    /* NEGOTIATION BAND */
    .price-band {
      background: linear-gradient(135deg, #f5faff 0%, #eef6ff 100%);
      border: 1px solid #cfe0ff;
      border-radius: 10px;
      padding: 28px;
      margin-top: 8px;
    }
    .price-row {
      display: grid;
      grid-template-columns: 1.2fr 1fr 1fr 1fr;
      gap: 12px;
      align-items: end;
    }
    @media (max-width: 800px) { .price-row { grid-template-columns: 1fr 1fr; } }
    .price-cell .k {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #556;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .price-cell .v {
      font-size: 1.55rem;
      font-weight: 900;
      color: var(--nu-navy);
    }
    .price-cell .v.blue { color: var(--nu-blue); }
    .price-cell .v.warn { color: var(--nu-warn); }
    .price-cell .v.danger { color: var(--nu-danger); }
    .price-cell .n { font-size: 0.8rem; color: #666; margin-top: 2px; }

    /* PLAN STEPS */
    .step-list { counter-reset: stepc; list-style: none; padding: 0; margin-top: 8px; }
    .step-list li {
      counter-increment: stepc;
      position: relative;
      padding: 16px 18px 16px 62px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      margin-bottom: 10px;
    }
    .step-list li::before {
      content: counter(stepc);
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .step-list .step-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 3px;
    }
    .step-list .step-meta {
      display: inline-block;
      margin-left: 10px;
      font-size: 0.78rem;
      color: #666;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* TABLE */
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      font-size: 0.95rem;
    }
    .nu-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-weight: 700;
      letter-spacing: 0.03em;
      font-size: 0.85rem;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 12px 14px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }

    /* WALK-AWAY BOX */
    .walk-away {
      background: linear-gradient(135deg, #fff5f0 0%, #fff 100%);
      border: 1px solid #f0c2aa;
      border-left: 5px solid var(--nu-danger);
      border-radius: 8px;
      padding: 22px 26px;
    }
    .walk-away h3 {
      color: var(--nu-danger);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 10px;
      font-size: 1rem;
    }

    /* SCRIPT BOX */
    .script-box {
      background: #fbfcff;
      border: 1px solid #d6e0ff;
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      border-radius: 6px;
      font-size: 0.98rem;
      color: #222;
    }
    .script-box p { margin-bottom: 12px; }
    .script-box p:last-child { margin-bottom: 0; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .page-title { font-size: 1.85rem; }
      .nu-wrap { padding: 36px 22px 60px; }
    }

    @media print {
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .price-band, .walk-away, .script-box { box-shadow: none; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment<sup>&reg;</sup></div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-wrap">

      <div class="doc-meta">
        <div><span class="pill">Action Plan</span> &nbsp; <strong>Source:</strong> reMarkable action item &nbsp; | &nbsp; <strong>Owner:</strong> Aaron C. Norris</div>
        <div><strong>Prepared:</strong> 2026-04-23 &nbsp; | &nbsp; <strong>Status:</strong> Ready to execute</div>
      </div>

      <h1 class="page-title">Negotiate the Purchase of <em>4505 Buttewoods</em></h1>
      <p class="page-subtitle">
        A disciplined negotiation plan for acquiring the 7,098 sq ft Buttewoods estate &mdash;
        price strategy, counter-offer ladder, terms to protect, walk-away triggers, and
        the exact sequence of conversations needed to close.
      </p>

      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
      <div class="snapshot-grid">
        <div class="snapshot-cell">
          <div class="label">Address</div>
          <div class="value sm">4505 Buttewoods</div>
        </div>
        <div class="snapshot-cell">
          <div class="label">Interior Area</div>
          <div class="value">7,098 sq ft</div>
        </div>
        <div class="snapshot-cell">
          <div class="label">Classification</div>
          <div class="value sm">Estate / Single-family</div>
        </div>
        <div class="snapshot-cell">
          <div class="label">Transaction Type</div>
          <div class="value sm">Private Purchase</div>
        </div>
        <div class="snapshot-cell">
          <div class="label">Buyer</div>
          <div class="value sm">Aaron C. Norris</div>
        </div>
        <div class="snapshot-cell">
          <div class="label">Negotiation Stage</div>
          <div class="value sm">Offer &amp; Counter</div>
        </div>
      </div>

      <h2 class="nu-section-title"><span class="first">Price</span> <span class="rest">Strategy &mdash; Offer Ladder</span></h2>
      <p style="margin-bottom: 16px; color: #555;">
        Build the ladder around three numbers: a conservative opening that leaves room,
        a realistic target that reflects comparable sales, and a hard ceiling beyond which
        the deal no longer works. Never let the seller know the ceiling.
      </p>

      <div class="price-band">
        <div class="price-row">
          <div class="price-cell">
            <div class="k">Stated Seller Position</div>
            <div class="v">$900,000</div>
            <div class="n">Current ask on the table</div>
          </div>
          <div class="price-cell">
            <div class="k">Opening Offer</div>
            <div class="v blue">$825,000</div>
            <div class="n">~8.3% below ask &mdash; justified with comps</div>
          </div>
          <div class="price-cell">
            <div class="k">Target Close</div>
            <div class="v warn">$860,000</div>
            <div class="n">Realistic meeting point after two rounds</div>
          </div>
          <div class="price-cell">
            <div class="k">Hard Ceiling</div>
            <div class="v danger">$885,000</div>
            <div class="n">Walk away above this number</div>
          </div>
        </div>
      </div>

      <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Points to Emphasize</span></h2>
      <div class="two-col">
        <div class="nu-card">
          <h3>Use These in the Room</h3>
          <ul>
            <li><strong>Cash / fast close</strong> &mdash; reduced contingencies, no financing risk</li>
            <li><strong>Pre-qualified buyer</strong> &mdash; proof of funds ready to share</li>
            <li><strong>Flexible closing date</strong> &mdash; match seller's timeline</li>
            <li><strong>As-is purchase</strong> &mdash; limited repair negotiation after inspection</li>
            <li><strong>Comparable sales</strong> &mdash; 3 nearby estates in past 6 months</li>
            <li><strong>Current market conditions</strong> &mdash; interest rate environment, days-on-market average</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Seller Motivation &mdash; Discover</h3>
          <ul>
            <li>Why are they selling? (relocation, downsizing, estate, financial)</li>
            <li>How long has the property been listed?</li>
            <li>Have there been prior offers? At what level?</li>
            <li>Is there a target closing date they need to hit?</li>
            <li>Any items they want to exclude or include (furniture, fixtures)?</li>
            <li>Are they negotiating with any other buyer right now?</li>
          </ul>
        </div>
      </div>

      <h2 class="nu-section-title"><span class="first">Terms</span> <span class="rest">to Protect (Beyond Price)</span></h2>
      <table class="nu-table">
        <thead>
          <tr>
            <th style="width: 28%;">Term</th>
            <th style="width: 34%;">Aaron's Position</th>
            <th>Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Earnest Money</strong></td>
            <td>1% of purchase price, held in escrow</td>
            <td>Shows commitment without over-exposing capital before inspection</td>
          </tr>
          <tr>
            <td><strong>Inspection Period</strong></td>
            <td>14 business days, right to cancel</td>
            <td>Protects against undisclosed structural, mechanical, or environmental issues</td>
          </tr>
          <tr>
            <td><strong>Title &amp; Survey</strong></td>
            <td>Seller provides clean title; buyer orders current survey</td>
            <td>No easement, lien, or boundary surprises at closing</td>
          </tr>
          <tr>
            <td><strong>Appraisal Contingency</strong></td>
            <td>If financing: appraisal must meet or exceed purchase price</td>
            <td>Prevents paying above market when financed</td>
          </tr>
          <tr>
            <td><strong>Closing Costs</strong></td>
            <td>Each party pays customary costs; negotiate seller concession if price is firm</td>
            <td>Lever to use if seller will not move on price</td>
          </tr>
          <tr>
            <td><strong>Personal Property</strong></td>
            <td>Itemize included fixtures &amp; appliances in writing</td>
            <td>Avoids disputes at walkthrough</td>
          </tr>
          <tr>
            <td><strong>Closing Date</strong></td>
            <td>45&ndash;60 days; willing to flex for seller</td>
            <td>Flexibility is free leverage on price</td>
          </tr>
        </tbody>
      </table>

      <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Plan &mdash; Step by Step</span></h2>
      <ol class="step-list">
        <li>
          <span class="step-title">Pull comparable sales within 1 mile, past 6 months <span class="step-meta">Day 1</span></span>
          Pull 3&ndash;5 recent closings of comparable square footage and lot size. Save actual sold prices, days on market, and any price reductions. Build a one-page comp sheet to hand to the seller if needed.
        </li>
        <li>
          <span class="step-title">Confirm proof of funds / pre-approval letter <span class="step-meta">Day 1</span></span>
          Have letter dated within 30 days. If cash, banker's letter confirming available balance. This goes out with the written offer &mdash; it is the credibility anchor.
        </li>
        <li>
          <span class="step-title">Discovery call with listing agent or seller <span class="step-meta">Day 2</span></span>
          Before submitting a number, ask the seller-motivation questions from the card above. Listen for timeline pressure, prior offers, and emotional attachments. Do not reveal ceiling.
        </li>
        <li>
          <span class="step-title">Submit written opening offer at $825,000 <span class="step-meta">Day 3</span></span>
          Include all protective terms, earnest money, inspection window, desired closing date. Attach proof of funds. Give 48-hour response window to create urgency.
        </li>
        <li>
          <span class="step-title">Evaluate counter &mdash; move in measured increments <span class="step-meta">Day 4&ndash;7</span></span>
          If seller counters at $895K, respond at $845K. If they come back at $880K, respond at $860K. Never split the difference mechanically &mdash; it signals more room to give.
        </li>
        <li>
          <span class="step-title">If stuck on price, trade terms <span class="step-meta">Day 7&ndash;10</span></span>
          Offer faster close, waived concessions, or larger earnest money in exchange for price movement. Protect inspection period at all costs.
        </li>
        <li>
          <span class="step-title">Execute purchase agreement and open escrow <span class="step-meta">Day 10&ndash;14</span></span>
          Signed contract, earnest money wired, title company engaged, inspector scheduled within 5 days of acceptance.
        </li>
        <li>
          <span class="step-title">Inspection &amp; due diligence <span class="step-meta">Day 14&ndash;28</span></span>
          Full home inspection, termite, sewer scope, roof assessment. Address any major findings via repair credit or price reduction &mdash; do not re-open the headline number.
        </li>
        <li>
          <span class="step-title">Appraisal &amp; final walk-through <span class="step-meta">Day 28&ndash;44</span></span>
          Confirm value, verify all agreed items remain, test systems, confirm no new damage.
        </li>
        <li>
          <span class="step-title">Close &amp; fund <span class="step-meta">Day 45&ndash;60</span></span>
          Wire funds, sign, record, take possession. File closing binder and cost basis documentation.
        </li>
      </ol>

      <h2 class="nu-section-title"><span class="first">Opening</span> <span class="rest">Script &mdash; Call with Seller / Agent</span></h2>
      <div class="script-box">
        <p>
          &ldquo;Thanks for taking the call. I'm serious about 4505 Buttewoods
          and I've done my homework on what comparable estates have closed for in
          the last six months. I want to make you a real offer, not a throw-away number.&rdquo;
        </p>
        <p>
          &ldquo;Before I put it in writing, I want to understand what matters most
          to you &mdash; is it the closing date, the price, staying flexible on timing,
          or something else? The more I know, the better I can structure an offer
          that actually gets this done.&rdquo;
        </p>
        <p>
          &ldquo;My position is strong &mdash; proof of funds is ready, I can close
          quickly, and I'll take it as-is subject to a clean inspection. Where would
          you like me to send the offer?&rdquo;
        </p>
      </div>

      <h2 class="nu-section-title"><span class="first">Walk-Away</span> <span class="rest">Triggers</span></h2>
      <div class="walk-away">
        <h3>Disengage if any of the following occurs</h3>
        <ul style="list-style: none; padding: 0;">
          <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute;left:6px;color:var(--nu-danger);font-weight:900;">&#9632;</span> Seller will not accept inspection contingency or meaningful due-diligence window</li>
          <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute;left:6px;color:var(--nu-danger);font-weight:900;">&#9632;</span> Negotiation settles above $885,000 hard ceiling</li>
          <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute;left:6px;color:var(--nu-danger);font-weight:900;">&#9632;</span> Title defects, material undisclosed liens, or easement issues discovered</li>
          <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute;left:6px;color:var(--nu-danger);font-weight:900;">&#9632;</span> Inspection reveals structural, foundation, or environmental issues exceeding $50,000 that seller will not remediate or credit</li>
          <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute;left:6px;color:var(--nu-danger);font-weight:900;">&#9632;</span> Appraisal comes in more than 3% below accepted purchase price and seller refuses to adjust</li>
          <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute;left:6px;color:var(--nu-danger);font-weight:900;">&#9632;</span> Seller introduces new terms after agreement (scope creep) that materially shift risk to buyer</li>
        </ul>
      </div>

      <h2 class="nu-section-title"><span class="first">Key</span> <span class="rest">Reminders</span></h2>
      <div class="two-col">
        <div class="nu-card">
          <h3>Discipline</h3>
          <ul>
            <li>Every number goes in writing &mdash; no verbal commitments</li>
            <li>Do not disclose the ceiling or the timeline pressure</li>
            <li>Silence is a tool &mdash; let the seller fill the gap</li>
            <li>Always have a reason tied to each counter (comps, condition, terms)</li>
            <li>Sleep on anything above the target close before accepting</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Documentation</h3>
          <ul>
            <li>Save every email, text, and redline version of the contract</li>
            <li>Keep a running log: date, who said what, numbers on the table</li>
            <li>Engage a real estate attorney to review contract before signing</li>
            <li>Title and escrow through a firm Aaron has used before</li>
            <li>File all closing documents for cost-basis records</li>
          </ul>
        </div>
      </div>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment<sup>&reg;</sup></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities<sup>&reg;</sup>, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>