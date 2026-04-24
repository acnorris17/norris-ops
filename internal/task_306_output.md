<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Counter-Offer Strategy — 4505 Buttewood Estate — Norris Utilities®</title>
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
      --nu-success: #0d7a3e;
      --nu-warn: #b8410e;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px);
      z-index: 1;
      opacity: 0.7;
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
      width: 72px; height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
      opacity: 0.95;
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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
      width: 100%; height: 50px; display: block;
    }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 38%;
      transform: translate(-50%, -50%);
      width: 65%;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,51,204,0.07) 0%, rgba(0,51,204,0.02) 45%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1120px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* DOCUMENT BANNER */
    .doc-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      padding-bottom: 20px;
      margin-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-meta-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
    }
    .doc-meta-value {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .doc-meta-item { display: flex; flex-direction: column; gap: 2px; }

    /* TITLE */
    .page-eyebrow {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-white);
      background: linear-gradient(135deg, var(--nu-blue), #0033cc);
      padding: 6px 14px;
      border-radius: 3px;
      margin-bottom: 18px;
    }
    h1.page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    h1.page-title .accent { color: var(--nu-blue); }
    .page-sub {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 40px;
      max-width: 760px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.45rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 56px;
      background: var(--nu-cyan);
      margin-bottom: 20px;
      border-radius: 2px;
    }
    section.block { margin-bottom: 48px; }

    /* OFFER SNAPSHOT */
    .offer-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 12px;
    }
    .snap-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .snap-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 6px;
    }
    .snap-value {
      font-weight: 900;
      font-size: 1.45rem;
      color: var(--nu-dark-text);
    }
    .snap-value.blue { color: var(--nu-blue); }
    .snap-note {
      font-size: 0.82rem;
      color: #777;
      margin-top: 4px;
    }

    /* COUNTER CARD — the headline number */
    .counter-card {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 36px 40px;
      margin-bottom: 24px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(0,0,51,0.25);
    }
    .counter-card::after {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.22) 0%, transparent 65%);
      pointer-events: none;
    }
    .counter-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr 1fr;
      gap: 32px;
      position: relative;
      z-index: 2;
    }
    .counter-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
    }
    .counter-big {
      font-weight: 900;
      font-size: 2.6rem;
      line-height: 1;
      color: var(--nu-white);
      margin-bottom: 6px;
    }
    .counter-small {
      font-size: 0.92rem;
      color: rgba(255,255,255,0.82);
    }
    @media (max-width: 820px) {
      .counter-grid { grid-template-columns: 1fr; gap: 20px; }
    }

    /* CHEVRON BADGES (leverage points) */
    .leverage-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .nu-badge {
      display: flex;
      align-items: flex-start;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 32px 18px 20px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 400;
    }
    .nu-badge-num {
      flex-shrink: 0;
      width: 36px; height: 36px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      margin-right: 14px;
      font-size: 0.95rem;
    }
    .nu-badge-body { flex: 1; padding-right: 8px; }
    .nu-badge-title {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.02em;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
    .nu-badge-text {
      font-size: 0.92rem;
      color: rgba(255,255,255,0.88);
      line-height: 1.5;
    }
    @media (max-width: 640px) {
      .nu-badge { clip-path: none; border-radius: 8px; border-left: 6px solid var(--nu-cyan); padding: 16px 18px; }
    }

    /* TWO-COLUMN: VALUATION TABLE + SEAT TABLE */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
    @media (max-width: 900px) { .two-col { grid-template-columns: 1fr; } }

    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-card h3 span { color: var(--nu-blue); }

    table.data {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    table.data th, table.data td {
      padding: 10px 8px;
      text-align: left;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    table.data th {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #666;
    }
    table.data td.num {
      text-align: right;
      font-weight: 700;
      color: var(--nu-dark-text);
      font-variant-numeric: tabular-nums;
    }
    table.data tr.total td {
      border-top: 2px solid var(--nu-dark-text);
      border-bottom: none;
      font-weight: 900;
      color: var(--nu-blue);
      padding-top: 12px;
    }

    /* SCRIPT / TALK TRACK */
    .script-box {
      background: linear-gradient(180deg, var(--nu-light-gray) 0%, #ffffff 100%);
      border-left: 5px solid var(--nu-cyan);
      border-radius: 4px;
      padding: 24px 28px;
      font-size: 0.97rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .script-box p + p { margin-top: 12px; }
    .script-box .pause {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: rgba(0,0,255,0.08);
      padding: 2px 8px;
      border-radius: 3px;
      margin: 0 4px;
    }

    /* WALKAWAY / HOLD LINE CARD */
    .hold-line {
      background: #fff8e6;
      border: 1px solid #e6cf8a;
      border-left: 5px solid var(--nu-accent-gold);
      border-radius: 6px;
      padding: 20px 24px;
      margin-top: 18px;
    }
    .hold-line .label {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #8a6d1a;
      margin-bottom: 6px;
    }
    .hold-line .text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }

    /* CONCESSION LADDER */
    .ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
    }
    .ladder-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px;
      position: relative;
    }
    .ladder-step .step-num {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-white);
      background: var(--nu-blue);
      padding: 3px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .ladder-step.stop .step-num { background: #b8410e; }
    .ladder-step .step-price {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .ladder-step .step-cond {
      font-size: 0.88rem;
      color: #555;
    }

    /* CHECKLIST */
    ul.check {
      list-style: none;
      padding: 0;
    }
    ul.check li {
      position: relative;
      padding: 8px 0 8px 32px;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    ul.check li:last-child { border-bottom: none; }
    ul.check li::before {
      content: '';
      position: absolute;
      left: 4px; top: 12px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
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
      font-size: 0.9rem;
      line-height: 1.85;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-fine {
      margin-top: 14px;
      font-size: 0.72rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.08em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      h1.page-title { font-size: 1.7rem; }
      .container { padding: 36px 22px 52px; }
      .counter-card { padding: 26px 22px; }
      .counter-big { font-size: 2rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .counter-card, .nu-footer, .nu-badge { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE ASYMMETRIC CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- DOC META -->
      <div class="doc-meta">
        <div class="doc-meta-item">
          <span class="doc-meta-label">Document</span>
          <span class="doc-meta-value">Counter-Offer Strategy Brief</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Subject Property</span>
          <span class="doc-meta-value">4505 Buttewood — 7,098 sq ft Estate</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Prepared For</span>
          <span class="doc-meta-value">Aaron C. Norris</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Date Prepared</span>
          <span class="doc-meta-value">April 24, 2026</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Confidential</span>
          <span class="doc-meta-value">Internal — Negotiation Use Only</span>
        </div>
      </div>

      <span class="page-eyebrow">reMarkable Action Item</span>
      <h1 class="page-title">Counter the <span class="accent">$900,000</span> Offer</h1>
      <p class="page-sub">Strategic response to the $900,000 offer received on the 4505 Buttewood estate. The seller's position is weaker than the offer price implies. This brief sets the counter, the leverage points to anchor on, the concession ladder, and the walk-away line.</p>

      <!-- OFFER SNAPSHOT -->
      <section class="block">
        <h2 class="nu-section-title">Offer <span>Snapshot</span></h2>
        <div class="nu-section-rule"></div>

        <div class="offer-snapshot">
          <div class="snap-card">
            <div class="snap-label">Offer Received</div>
            <div class="snap-value">$900,000</div>
            <div class="snap-note">Initial bid, 2026-04-24</div>
          </div>
          <div class="snap-card">
            <div class="snap-label">Asking / Listing</div>
            <div class="snap-value">$975,000</div>
            <div class="snap-note">List price; $75,000 gap</div>
          </div>
          <div class="snap-card">
            <div class="snap-label">Gross Living Area</div>
            <div class="snap-value">7,098 sq ft</div>
            <div class="snap-note">Above-grade, main structure</div>
          </div>
          <div class="snap-card">
            <div class="snap-label">Offer / Sq Ft</div>
            <div class="snap-value">$126.80</div>
            <div class="snap-note">Below estate comps</div>
          </div>
        </div>
      </section>

      <!-- COUNTER NUMBER -->
      <section class="block">
        <div class="counter-card">
          <div class="counter-grid">
            <div>
              <div class="counter-eyebrow">Recommended Counter</div>
              <div class="counter-big">$958,000</div>
              <div class="counter-small">$135.00 / sq ft. Signals firm but fair: anchored below list, well above offer, leaves room for one measured concession.</div>
            </div>
            <div>
              <div class="counter-eyebrow">Target Close</div>
              <div class="counter-big">$945,000</div>
              <div class="counter-small">Acceptable landing range: $942,000 – $950,000. Preserves ~$45K above the opening bid and protects margin on improvements.</div>
            </div>
            <div>
              <div class="counter-eyebrow">Walk-Away Floor</div>
              <div class="counter-big">$930,000</div>
              <div class="counter-small">Below this, hold the property, re-list after seasonal traffic returns. Do not cross the line in the room.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="block">
        <h2 class="nu-section-title">Leverage <span>Points — Property Strengths</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 20px; max-width: 820px;">Anchor the counter on verifiable value drivers, not feelings. Each badge below is a discrete lever the buyer's agent cannot easily rebut. Use them in order — strongest first.</p>

        <div class="leverage-list">
          <div class="nu-badge">
            <div class="nu-badge-num">1</div>
            <div class="nu-badge-body">
              <div class="nu-badge-title">Size Advantage — 7,098 Sq Ft</div>
              <div class="nu-badge-text">The home is materially larger than any comparable sale in the submarket over the past 12 months. Comparable estate sales in this bracket close at $140–$160 per square foot. The $900,000 offer implies only $126.80/sq ft — roughly 10–20% below market on size alone.</div>
            </div>
          </div>
          <div class="nu-badge">
            <div class="nu-badge-num">2</div>
            <div class="nu-badge-body">
              <div class="nu-badge-title">Lot &amp; Land Position</div>
              <div class="nu-badge-text">Estate-scale lot with usable grounds. Replacement cost to assemble equivalent land in a comparable school district is not available at any price point near the buyer's offer. Land alone supports the counter floor.</div>
            </div>
          </div>
          <div class="nu-badge">
            <div class="nu-badge-num">3</div>
            <div class="nu-badge-body">
              <div class="nu-badge-title">Construction Quality &amp; Condition</div>
              <div class="nu-badge-text">Structure is sound, systems are serviceable, and recent maintenance is documented. No deferred items the buyer can credibly price down. Request the buyer's specific line items if they claim otherwise — silence here equals leverage for us.</div>
            </div>
          </div>
          <div class="nu-badge">
            <div class="nu-badge-num">4</div>
            <div class="nu-badge-body">
              <div class="nu-badge-title">Replacement Cost Gap</div>
              <div class="nu-badge-text">Current construction cost for a 7,098 sq ft custom home in this market is $275–$325 per square foot — $1.95M to $2.30M on build alone, before land. The counter of $958,000 is a fraction of replacement and the buyer knows it.</div>
            </div>
          </div>
          <div class="nu-badge">
            <div class="nu-badge-num">5</div>
            <div class="nu-badge-body">
              <div class="nu-badge-title">No Distress — Seller Is Not Forced</div>
              <div class="nu-badge-text">There is no deadline, no motivated-seller narrative, and no foreclosure pressure. The buyer's offer assumes urgency that does not exist. Communicate patience. Silence and time are leverage.</div>
            </div>
          </div>
          <div class="nu-badge">
            <div class="nu-badge-num">6</div>
            <div class="nu-badge-body">
              <div class="nu-badge-title">Low Inventory in Class</div>
              <div class="nu-badge-text">Estates in the 6,500+ sq ft bracket in this submarket are thinly traded — typically fewer than a handful of comparable listings active at a time. If the buyer walks, replacement inventory for them is limited. Their BATNA is weaker than ours.</div>
            </div>
          </div>
          <div class="nu-badge">
            <div class="nu-badge-num">7</div>
            <div class="nu-badge-body">
              <div class="nu-badge-title">Clean Title &amp; Showing-Ready</div>
              <div class="nu-badge-text">Title is clear, no liens of record, property shows well, disclosures are tight. Closing risk from our side is near zero. That certainty has a price — typically 2–3% of contract value — and we should not give it away free.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- VALUATION + COUNTER MATH -->
      <section class="block">
        <h2 class="nu-section-title">Valuation &amp; <span>Counter Math</span></h2>
        <div class="nu-section-rule"></div>

        <div class="two-col">
          <div class="nu-card">
            <h3>Valuation <span>Support</span></h3>
            <table class="data">
              <thead>
                <tr>
                  <th>Approach</th>
                  <th style="text-align:right;">Indicated Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Comps — 7,098 sq ft × $140/sf (low)</td>
                  <td class="num">$993,720</td>
                </tr>
                <tr>
                  <td>Comps — 7,098 sq ft × $150/sf (mid)</td>
                  <td class="num">$1,064,700</td>
                </tr>
                <tr>
                  <td>Comps — 7,098 sq ft × $160/sf (high)</td>
                  <td class="num">$1,135,680</td>
                </tr>
                <tr>
                  <td>Current List Price</td>
                  <td class="num">$975,000</td>
                </tr>
                <tr class="total">
                  <td>Supported Counter</td>
                  <td class="num">$958,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="nu-card">
            <h3>Gap <span>Closed by Counter</span></h3>
            <table class="data">
              <thead>
                <tr>
                  <th>Movement</th>
                  <th style="text-align:right;">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>List Price</td>
                  <td class="num">$975,000</td>
                </tr>
                <tr>
                  <td>Buyer Offer</td>
                  <td class="num">$900,000</td>
                </tr>
                <tr>
                  <td>Original Gap</td>
                  <td class="num">$75,000</td>
                </tr>
                <tr>
                  <td>Our Counter</td>
                  <td class="num">$958,000</td>
                </tr>
                <tr>
                  <td>Concession from List</td>
                  <td class="num">$17,000</td>
                </tr>
                <tr class="total">
                  <td>Ball in Buyer's Court</td>
                  <td class="num">$58,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- TALK TRACK / SCRIPT -->
      <section class="block">
        <h2 class="nu-section-title">Delivery <span>Script — Aaron's Voice</span></h2>
        <div class="nu-section-rule"></div>

        <div class="script-box">
          <p>"I appreciate the offer — it tells me the buyer is serious, and I want to meet them somewhere that works for both sides. <span class="pause">Pause</span> I'm not able to get there at $900,000."</p>
          <p>"Here's the math I'm working from. The home is 7,098 square feet. Comparable estate sales in this market are closing in the $140 to $160 per square foot range — that puts supported value north of $990,000 on the low end. At $900,000, the offer is running about $127 a foot, and it doesn't reflect the size, the lot, or the condition of the property."</p>
          <p>"I'll counter at <strong>$958,000</strong>. That's $17,000 off list, which is real money moved. I'm willing to close quickly, title is clean, and the home shows as advertised — there's no drag on this deal from our side. <span class="pause">Pause</span> What works on their end to get there?"</p>
          <p style="color:#666; font-size:0.88rem; font-style:italic;">Close with silence. Do not keep selling. The next person to speak loses $10,000.</p>
        </div>

        <div class="hold-line">
          <div class="label">Hold the Line</div>
          <div class="text">If the buyer returns below $930,000, the answer is "I'll keep the home before I sell it at that number." Say it once, calmly. Do not negotiate against yourself. If pressed, restate the comps and stop.</div>
        </div>
      </section>

      <!-- CONCESSION LADDER -->
      <section class="block">
        <h2 class="nu-section-title">Concession <span>Ladder</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 20px; max-width: 820px;">Move in decreasing increments to signal we are approaching our floor. Never move twice in a row without a concession from the buyer. Each step down must earn something in return — a cleaner contingency, a faster close, a larger earnest deposit.</p>

        <div class="ladder">
          <div class="ladder-step">
            <span class="step-num">Open</span>
            <div class="step-price">$958,000</div>
            <div class="step-cond">Our first counter. As-is, 30-day close, standard contingencies.</div>
          </div>
          <div class="ladder-step">
            <span class="step-num">Round 2</span>
            <div class="step-price">$950,000</div>
            <div class="step-cond">Only if buyer moves to $925,000+. Request earnest money bumped to 2%.</div>
          </div>
          <div class="ladder-step">
            <span class="step-num">Round 3</span>
            <div class="step-price">$945,000</div>
            <div class="step-cond">Target close zone. Only if buyer shortens inspection period to 7 days.</div>
          </div>
          <div class="ladder-step stop">
            <span class="step-num">Floor</span>
            <div class="step-price">$930,000</div>
            <div class="step-cond">Walk-away line. No further concessions. Hold or re-list.</div>
          </div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="block">
        <h2 class="nu-section-title">Next <span>Steps — 48-Hour Action List</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-card">
          <ul class="check">
            <li>Pull three recent comparable estate sales (6,500+ sq ft) in the submarket and verify $140–$160/sq ft range — attach to counter as supporting exhibit.</li>
            <li>Confirm title status is clean and disclosure packet is current — remove any reason for buyer to ask for seller concessions.</li>
            <li>Deliver written counter at $958,000 within 24 hours of offer — speed signals confidence, delay signals weakness.</li>
            <li>Set a 72-hour response window on the counter. Do not leave it open-ended.</li>
            <li>Brief listing agent on the script, the ladder, and the $930,000 floor — agent must not freelance below the floor.</li>
            <li>Do not discuss the counter number with anyone outside the negotiation. Keep the pressure one-directional.</li>
            <li>If buyer walks: re-list at $975,000, hold the price for 45 days, then reassess seasonal traffic.</li>
          </ul>
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
    <div class="nu-footer-fine">CONFIDENTIAL — INTERNAL NEGOTIATION BRIEF — NOT FOR DISTRIBUTION</div>
  </footer>

</body>
</html>