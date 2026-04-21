<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Butterwood — $900,000 Offer — Norris Utilities®</title>
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
      --nu-warn: #D9480F;
      --nu-success: #1F7A3A;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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
      position: absolute; inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 4px;
      color: var(--nu-white);
      font-weight: 700;
      letter-spacing: 0.18em;
      font-size: 0.8rem;
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
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 20%; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 720px; height: 720px;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1140px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* DOC TITLE BLOCK */
    .doc-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 24px;
      padding: 14px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 3px;
      margin: 18px 0 40px;
      font-size: 0.92rem;
    }
    .doc-meta b { color: var(--nu-dark-text); font-weight: 700; }

    /* SECTION */
    .section { margin-bottom: 44px; }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      line-height: 1.3;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-title .lead { color: var(--nu-blue); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    p { margin-bottom: 12px; }
    ul, ol { margin: 10px 0 14px 22px; }
    li { margin-bottom: 6px; }

    /* KEY NUMBERS ROW */
    .numbers-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 14px;
      margin-bottom: 20px;
    }
    .number-tile {
      background: linear-gradient(135deg, #f7f9ff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 18px 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .number-tile .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-body-text);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 6px;
    }
    .number-tile .value {
      font-size: 1.55rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .number-tile .sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }
    .number-tile.accent { border-top-color: var(--nu-cyan); }
    .number-tile.accent .value { color: var(--nu-blue); }

    /* WALK-THROUGH LADDER */
    .ladder {
      display: grid;
      gap: 10px;
      margin: 14px 0 20px;
    }
    .rung {
      display: grid;
      grid-template-columns: 72px 1fr;
      align-items: stretch;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .rung-num {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .rung-body { padding: 14px 18px; }
    .rung-body h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1.02rem;
    }
    .rung-body h4 em {
      font-style: normal;
      color: var(--nu-blue);
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      margin-left: 8px;
    }
    .rung-body p { margin: 0; font-size: 0.94rem; }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 18px;
    }
    .col-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .col-card.ours { border-top: 3px solid var(--nu-success); }
    .col-card.theirs { border-top: 3px solid var(--nu-warn); }
    .col-card h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      font-size: 1.05rem;
    }
    .col-card.ours h4::before { content: '▲ '; color: var(--nu-success); }
    .col-card.theirs h4::before { content: '▼ '; color: var(--nu-warn); }

    /* TABLE */
    .price-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .price-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0a0e5c 100%);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .price-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .price-table tr:last-child td { border-bottom: none; }
    .price-table tr.target td {
      background: #eaf3ff;
      font-weight: 700;
    }
    .price-table tr.walk td {
      background: #fff4ed;
      font-weight: 700;
    }
    .price-table td.num {
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SCRIPT BLOCK */
    .script {
      background: linear-gradient(135deg, #0a0e5c 0%, #000033 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 22px 26px;
      margin: 12px 0 18px;
      box-shadow: 0 4px 16px rgba(0,0,51,0.25);
    }
    .script .who {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .script blockquote {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.08rem;
      line-height: 1.55;
      color: rgba(255,255,255,0.96);
      border-left: 3px solid var(--nu-cyan);
      padding-left: 14px;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      margin-left: 0;
      padding: 0;
    }
    .checklist li {
      padding: 10px 12px 10px 36px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      margin-bottom: 6px;
      position: relative;
      font-size: 0.95rem;
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f7f9ff 0%, #ffffff 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 16px 20px;
      border-radius: 4px;
      margin: 14px 0;
      font-size: 0.96rem;
    }
    .callout b { color: var(--nu-blue); }
    .callout.warn {
      border-left-color: var(--nu-warn);
      background: #fff7f2;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #000099 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 16px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 820px) {
      .two-col { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-wrap { padding: 40px 22px 60px; }
      .doc-title { font-size: 1.55rem; }
      .section-title { font-size: 1.2rem; }
      .rung { grid-template-columns: 56px 1fr; }
      .rung-num { font-size: 1.15rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header {
        background: var(--nu-blue) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .nu-footer {
        background: var(--nu-navy) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .rung, .col-card, .number-tile, .callout, .script, .checklist li, .price-table {
        box-shadow: none;
        break-inside: avoid;
      }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal — Negotiation Strategy</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <h1 class="doc-title">Negotiation Strategy — <span>4505 Butterwood</span></h1>
      <p class="doc-subtitle">7,098 sq ft estate — opening offer at <b>$900,000</b> cash or conventional</p>

      <div class="doc-meta">
        <span><b>Prepared for:</b> Aaron C. Norris</span>
        <span><b>Date:</b> April 21, 2026</span>
        <span><b>Property:</b> 4505 Butterwood, 7,098 sq ft</span>
        <span><b>Opening Offer:</b> $900,000</span>
        <span><b>Classification:</b> Confidential — internal use only</span>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Executive</span> <span class="rest">Summary</span></h2>
        <p>The objective is to acquire 4505 Butterwood at a price that preserves ~$150K–$250K of equity headroom post-close, while protecting the relationship with the seller and leaving clean optionality if the deal does not come together.</p>
        <p>The opening offer of <b>$900,000</b> is positioned as a credible, well-supported number — not a low-ball. The strategy below walks through anchor-setting, concession ladder, counteroffer response scripts, and a firm walk-away discipline. This document is the playbook, not a commitment. Nothing is signed until terms, inspection, and financing line up.</p>

        <div class="numbers-row">
          <div class="number-tile">
            <div class="label">Opening Offer</div>
            <div class="value">$900,000</div>
            <div class="sub">Our anchor — credible, supported</div>
          </div>
          <div class="number-tile accent">
            <div class="label">Target Close</div>
            <div class="value">$925,000</div>
            <div class="sub">Midpoint we are happy to land at</div>
          </div>
          <div class="number-tile">
            <div class="label">Stretch Ceiling</div>
            <div class="value">$950,000</div>
            <div class="sub">Only with full concessions bundled</div>
          </div>
          <div class="number-tile accent">
            <div class="label">Walk-Away</div>
            <div class="value">$965,000</div>
            <div class="sub">Above this, deal no longer pencils</div>
          </div>
        </div>
      </section>

      <!-- PRINCIPLES -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Operating</span> <span class="rest">Principles</span></h2>
        <ul>
          <li><b>Be the easiest buyer to work with.</b> Clean offer, fast responses, proof of funds ready, no drama. Sellers take less money from buyers they trust to close.</li>
          <li><b>Price is only one lever.</b> Closing date, earnest money, inspection period, contingencies, and what conveys (fixtures, appliances, furniture) are all negotiable and often cheaper concessions than dollars.</li>
          <li><b>Never negotiate against yourself.</b> No second offer until the seller responds. Silence is a tool.</li>
          <li><b>Protect the relationship.</b> Even if this deal dies, the broker, attorney, and seller should come out of it willing to take our next call.</li>
          <li><b>Walk-away is real.</b> $965,000 is the ceiling. Above that line, no emotional override — we wait for the next property.</li>
        </ul>
      </section>

      <!-- ANCHOR -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Anchor</span> <span class="rest">— Why $900,000 is the Right Opening</span></h2>
        <p>An opening that is too low insults the seller and poisons the trust needed to close. An opening that is too close to ask leaves no room to negotiate. $900,000 is the number that lets us justify every dollar, shows we did the work, and still leaves room for both sides to move.</p>

        <table class="price-table">
          <thead>
            <tr>
              <th>Anchor Support Point</th>
              <th>How to Present It</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Price per square foot</b></td>
              <td>$900K ÷ 7,098 sq ft = ~$127/sq ft. Frame as "fair market for the envelope, before we factor in any updates we're going to put in."</td>
            </tr>
            <tr>
              <td><b>Comparable sales</b></td>
              <td>Pull 3 closed comps within 0.5 miles, past 6 months. Bring printed sheet to the counter-conversation — do not email it in advance.</td>
            </tr>
            <tr>
              <td><b>Known condition items</b></td>
              <td>Whatever the walk-through and disclosure surface — roof age, HVAC age, any deferred maintenance — gets dollar-costed and folded in. Numbers, not adjectives.</td>
            </tr>
            <tr>
              <td><b>Days on market / carry cost</b></td>
              <td>Every month the seller carries the property is taxes + insurance + upkeep. If DOM is over 60 days, that fact supports our number without us needing to say it harshly.</td>
            </tr>
            <tr>
              <td><b>Proof of funds / financing strength</b></td>
              <td>Attach a pre-approval letter or POF with the offer. Certainty of close is worth real dollars to a seller.</td>
            </tr>
          </tbody>
        </table>

        <div class="callout">
          <b>Principle:</b> Do not apologize for the number. Do not pad it with "we can go higher if you need us to." Deliver the offer flat, let the seller talk first.
        </div>
      </section>

      <!-- CONCESSION LADDER -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Concession</span> <span class="rest">Ladder</span></h2>
        <p>If the seller counters above $900,000, we do not move in one big jump. We move in deliberate, shrinking rungs — each increase paired with something the seller gives us back.</p>

        <div class="ladder">
          <div class="rung">
            <div class="rung-num">1</div>
            <div class="rung-body">
              <h4>Open at $900,000 <em>Anchor</em></h4>
              <p>Clean, supported, earnest money 1% of price, 14-day inspection, 30-day close if cash / 45-day if financed. No escalator.</p>
            </div>
          </div>
          <div class="rung">
            <div class="rung-num">2</div>
            <div class="rung-body">
              <h4>First move: $915,000 <em>+$15K</em></h4>
              <p>Only after seller counters. Ask for: appliances + washer/dryer convey, 15-day close shift in our direction, or closing-cost credit equal to ~1% of price.</p>
            </div>
          </div>
          <div class="rung">
            <div class="rung-num">3</div>
            <div class="rung-body">
              <h4>Target landing: $925,000 <em>+$10K</em></h4>
              <p>This is where we are happy to sign. If the seller meets us here with reasonable terms, do not chase a smaller win and risk the deal.</p>
            </div>
          </div>
          <div class="rung">
            <div class="rung-num">4</div>
            <div class="rung-body">
              <h4>Stretch: $940,000 <em>+$15K</em></h4>
              <p>Only if seller also concedes meaningful value — inspection items repaired pre-close, furniture package included, or extended possession flexibility. Never raise without a pair.</p>
            </div>
          </div>
          <div class="rung">
            <div class="rung-num">5</div>
            <div class="rung-body">
              <h4>Ceiling: $950,000 <em>+$10K — final</em></h4>
              <p>Final number only. Deliver with: "This is our best and final. We'd love to make this work. If the answer is no, we'll wish you well on the sale."</p>
            </div>
          </div>
          <div class="rung">
            <div class="rung-num">✕</div>
            <div class="rung-body">
              <h4>Walk at $965,000 <em>Hard stop</em></h4>
              <p>Above this line we thank them, step back, and leave the door open for a later call. No emotional override. No exceptions.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- LEVERAGE / WEAKNESSES -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Leverage</span> <span class="rest">Map</span></h2>
        <div class="two-col">
          <div class="col-card ours">
            <h4>What we bring to the table</h4>
            <ul>
              <li>Serious, funded buyer — proof of funds on day one</li>
              <li>Flexible close timeline — we can accommodate seller's move-out</li>
              <li>Clean offer — minimal contingencies, reasonable inspection period</li>
              <li>Decisive — Aaron signs; no committee, no delay</li>
              <li>Local, credible, long-term hold buyer — not a flipper</li>
            </ul>
          </div>
          <div class="col-card theirs">
            <h4>Where the seller feels pressure</h4>
            <ul>
              <li>Days on market — every month is carry cost</li>
              <li>Price reductions already posted signal motivation</li>
              <li>Showing traffic vs. offer volume — low conversion is pressure</li>
              <li>Life-event timing (relocation, estate, divorce) if disclosed or visible</li>
              <li>Season / rate environment at time of negotiation</li>
            </ul>
          </div>
        </div>
        <div class="callout warn">
          <b>Don't weaponize leverage you can't verify.</b> If we don't know the seller's life situation, we do not guess at it, and we never bring it up at the table. Facts from the listing (DOM, price cuts, comps) are fair game. Rumor is not.
        </div>
      </section>

      <!-- NON-PRICE LEVERS -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Non-Price</span> <span class="rest">Levers</span></h2>
        <p>Every lever below is cheaper than a $1 price increase. Use them first when the seller is close but not closing.</p>
        <table class="price-table">
          <thead>
            <tr>
              <th style="width: 28%;">Lever</th>
              <th>Use it when...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Earnest money increase</b></td>
              <td>Seller questions whether we're serious. Bump from 1% to 2% shows skin in the game without raising the purchase price.</td>
            </tr>
            <tr>
              <td><b>Shorter inspection period</b></td>
              <td>Seller wants certainty fast. Offer 10 days instead of 14 — only if we have our inspector pre-booked.</td>
            </tr>
            <tr>
              <td><b>Close-date flex</b></td>
              <td>Seller needs time to move out or to line up next purchase. Offer rent-back (seller stays up to 60 days post-close at cost) — often worth real dollars to them.</td>
            </tr>
            <tr>
              <td><b>"As-is" with inspection</b></td>
              <td>We still inspect and can walk, but we don't nickel-and-dime for repairs. Powerful with sellers who fear a repair-item ambush.</td>
            </tr>
            <tr>
              <td><b>Waive minor contingencies</b></td>
              <td>Only those we've already cleared in advance (financing if pre-approved firm, appraisal gap coverage up to a capped amount).</td>
            </tr>
            <tr>
              <td><b>What conveys</b></td>
              <td>Appliances, window treatments, riding mower, workshop equipment, generator, furniture package. Ask for it — cost to seller often near zero.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- COUNTER PLAYBOOK -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Counter-Offer</span> <span class="rest">Playbook</span></h2>
        <p>Three scenarios to expect and the tested response for each.</p>

        <h3 style="font-weight:900; color: var(--nu-dark-text); margin: 14px 0 6px; font-size: 1.05rem;">Scenario A — Seller counters near ask (e.g. $985K+)</h3>
        <p>They're signaling they don't believe our number or don't feel pressure yet. Do not chase.</p>
        <div class="script">
          <div class="who">Aaron — on the call</div>
          <blockquote>"I appreciate you coming back. $900,000 was our number based on the comps and the condition items we walked. We have a little room, but not that much. If we can land around $925,000 with the appliances conveying and a 30-day close, we're ready to sign today. If that's not workable, I completely understand, and I'd still like you to keep us in mind if the situation changes."</blockquote>
        </div>

        <h3 style="font-weight:900; color: var(--nu-dark-text); margin: 14px 0 6px; font-size: 1.05rem;">Scenario B — Seller counters in the middle (e.g. $950K–$960K)</h3>
        <p>Live deal. This is where deals are won or lost on how we handle the next two exchanges.</p>
        <div class="script">
          <div class="who">Aaron — on the call</div>
          <blockquote>"That's movement in the right direction, thank you. Here's where we are: we can come up to $940,000 if the inspection items we flag get addressed before close, and if we can lock a close date that works for both sides. That's a real stretch for us on the number. If that works, let's paper it today."</blockquote>
        </div>

        <h3 style="font-weight:900; color: var(--nu-dark-text); margin: 14px 0 6px; font-size: 1.05rem;">Scenario C — Seller counters close to us (e.g. $925K–$935K)</h3>
        <p>They want to close. Do not over-negotiate and break it.</p>
        <div class="script">
          <div class="who">Aaron — on the call</div>
          <blockquote>"That's fair. Let's meet at $925,000 with the appliances conveying, 14-day inspection, and a 30-day close. If you're good with that, I'll have the contract to you inside the hour."</blockquote>
        </div>

        <div class="callout">
          <b>Rule:</b> Never raise our price without asking for something back. Every dollar up is paired with a term that moves in our direction.
        </div>
      </section>

      <!-- WALK-AWAY -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Walk-Away</span> <span class="rest">Discipline</span></h2>
        <p>$965,000 is the ceiling. Above that, the math stops working on resale, hold economics, or redevelopment — whichever lens this purchase is being judged on. Above the line, we step back.</p>
        <p>When we walk, we walk <b>warm</b> — not hurt, not angry. The message is simple:</p>
        <div class="script">
          <div class="who">Aaron — exit line</div>
          <blockquote>"We couldn't make the numbers work this time, and I respect where you're coming from. Please keep our offer on file. If anything changes on your end, pick up the phone — we can be back at the table in 24 hours."</blockquote>
        </div>
        <p>Seller circumstances change. We have seen deals come back 30–90 days later at our number because we walked warm and left a clean door open.</p>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Pre-Offer</span> <span class="rest">Checklist</span></h2>
        <p>Everything below must be in hand before the offer goes out. Do not let pace outrun preparation.</p>
        <ul class="checklist">
          <li>Proof of funds letter dated within 30 days (or pre-approval letter if financed)</li>
          <li>Three closed comparable sales within 0.5 miles, printed, last 6 months</li>
          <li>Days-on-market and price-reduction history for the subject property</li>
          <li>Property disclosure reviewed and condition items dollar-costed</li>
          <li>Inspector booked and ready to schedule within the inspection window</li>
          <li>Attorney reviewed contract template (Alabama — not a realtor form alone)</li>
          <li>Title/closing company identified</li>
          <li>Insurance quote in hand (material for lender, and for flood-zone check)</li>
          <li>Walk-away number confirmed in writing to self: <b>$965,000</b></li>
          <li>Calendar cleared for ~48 hours after offer submission to handle counters fast</li>
        </ul>
      </section>

      <!-- TIMING -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Timing</span> <span class="rest">&amp; Cadence</span></h2>
        <table class="price-table">
          <thead>
            <tr>
              <th style="width: 18%;">When</th>
              <th>What happens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Day 0</b></td>
              <td>Offer delivered at $900,000 with 48-hour response window. POF attached. Inspection 14 days, close 30/45 days.</td>
            </tr>
            <tr>
              <td><b>Day 1–2</b></td>
              <td>Expect counter. Do not respond within first hour of receiving it — take the time to think. Same-day response is fine; instant is not.</td>
            </tr>
            <tr>
              <td><b>Day 2–5</b></td>
              <td>One to two counter exchanges. We follow the ladder. We pair every price move with a term.</td>
            </tr>
            <tr>
              <td><b>Day 5–7</b></td>
              <td>Signed or done. If still bouncing past day 7, re-evaluate — this is a signal the deal is not landing.</td>
            </tr>
            <tr class="target">
              <td><b>Target ink</b></td>
              <td class="num">$925,000 at 14-day inspection, 30-day close (or 45 if financed).</td>
            </tr>
            <tr class="walk">
              <td><b>Walk line</b></td>
              <td class="num">$965,000 — above this, thank them and step back.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TRAPS -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Traps</span> <span class="rest">to Avoid</span></h2>
        <ul>
          <li><b>Falling in love with the property.</b> Emotion is the most expensive line item in any deal. If the number doesn't work, the number doesn't work.</li>
          <li><b>Negotiating against ourselves.</b> If the seller goes silent, we go silent too. We do not re-offer, re-explain, or sweeten unprompted.</li>
          <li><b>Small talk that turns into disclosure.</b> Do not tell the listing agent what our ceiling is, what we plan to do with the property, or how much we want it.</li>
          <li><b>Splitting the difference reflex.</b> When a seller says "let's just split it," that's a negotiating move — not a fair-math move. Treat it like any other counter: pair it with a term, or decline politely.</li>
          <li><b>Getting dragged past the walk-away.</b> $965K is $965K. Not $966K "because we're this close."</li>
          <li><b>Skipping the attorney review.</b> Every contract goes to counsel before signing. No exceptions on a seven-figure purchase.</li>
        </ul>
      </section>

      <!-- NEXT STEPS -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Next</span> <span class="rest">Steps</span></h2>
        <ol>
          <li>Confirm POF/financing packet is current and the attorney is engaged for contract review.</li>
          <li>Pull comps and disclosure; walk the property one more time with condition items costed.</li>
          <li>Write the offer: $900,000, earnest 1%, 14-day inspection, 30/45-day close, as-is with inspection.</li>
          <li>Deliver offer with a 48-hour response window. Do not chase.</li>
          <li>Run the counter playbook above. Hold the ladder. Hold the walk-away.</li>
          <li>Win at the target, or walk warm at the ceiling. Either outcome is acceptable.</li>
        </ol>
        <div class="callout">
          <b>Bottom line:</b> The goal is not to "win" the negotiation — it is to end up owning 4505 Butterwood at a number we'd be happy to own it at for the next ten years. Everything in this document is in service of that one measurement.
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
    <div class="nu-footer-meta">
      Internal document — negotiation strategy — confidential. Prepared April 21, 2026.
    </div>
  </footer>

</body>
</html>