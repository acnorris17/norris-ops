<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Negotiation Strategy — Norris Utilities®</title>
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
      --nu-caution: #B8860B;
      --nu-go: #0B6E4F;
      --nu-stop: #A8323A;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 35%, #0066EE 65%, #00AAFF 85%, var(--nu-cyan) 100%);
      padding: 72px 40px 88px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
      z-index: 1;
      pointer-events: none;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 78px; height: 78px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.28);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 2px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 52px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 52px; display: block; }

    /* MAIN CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      aspect-ratio: 1;
      max-width: 700px;
      background: radial-gradient(circle, rgba(0,51,204,0.04) 0%, rgba(0,0,255,0.015) 45%, transparent 72%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1140px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* TITLE BLOCK */
    .doc-title {
      font-weight: 900;
      font-size: 2.3rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      letter-spacing: -0.01em;
      margin-bottom: 10px;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 28px;
      font-weight: 400;
    }

    .fact-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0;
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0a0a55 100%);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 48px;
      box-shadow: 0 6px 20px rgba(0,0,51,0.18);
    }
    .fact-cell {
      padding: 20px 22px;
      color: var(--nu-white);
      border-right: 1px solid rgba(255,255,255,0.12);
    }
    .fact-cell:last-child { border-right: none; }
    .fact-label {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-white);
    }
    .fact-value small {
      font-size: 0.8rem;
      font-weight: 400;
      color: rgba(255,255,255,0.75);
      display: block;
      margin-top: 2px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 40px 0 16px;
      line-height: 1.25;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-lead {
      font-size: 1.02rem;
      color: #444;
      margin-bottom: 22px;
      max-width: 880px;
    }

    /* BADGES */
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
      padding: 12px 30px 12px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
    }
    .nu-badge .dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--nu-cyan);
      margin-right: 10px;
      box-shadow: 0 0 8px var(--nu-cyan);
    }

    /* CARDS */
    .card-grid {
      display: grid;
      gap: 18px;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      margin-bottom: 12px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 26px rgba(0,0,0,0.1);
    }
    .nu-card.cyan { border-top-color: var(--nu-cyan); }
    .nu-card.navy { border-top-color: var(--nu-navy); }
    .card-kicker {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .card-title {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.25;
    }
    .card-body { font-size: 0.95rem; color: #444; }
    .card-body p + p { margin-top: 10px; }

    /* ESCALATION LADDER */
    .ladder {
      display: grid;
      gap: 0;
      margin-top: 20px;
      border-left: 4px solid var(--nu-blue);
      padding-left: 24px;
    }
    .rung {
      position: relative;
      padding: 18px 0 18px 0;
      border-bottom: 1px dashed #d0d0d8;
    }
    .rung:last-child { border-bottom: none; }
    .rung::before {
      content: '';
      position: absolute;
      left: -32px;
      top: 24px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px var(--nu-white);
    }
    .rung-offer {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-blue);
      display: flex;
      align-items: baseline;
      gap: 10px;
      flex-wrap: wrap;
    }
    .rung-offer .pct {
      font-size: 0.8rem;
      font-weight: 700;
      color: #555;
      background: var(--nu-light-gray);
      padding: 3px 10px;
      border-radius: 20px;
      letter-spacing: 0.04em;
    }
    .rung-label {
      font-weight: 700;
      font-size: 0.78rem;
      color: var(--nu-cyan);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .rung-note {
      font-size: 0.96rem;
      color: #444;
      margin-top: 4px;
    }

    /* CHECKLIST */
    .check-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .check-list li {
      position: relative;
      padding: 10px 0 10px 34px;
      font-size: 0.96rem;
      color: #333;
      border-bottom: 1px solid #eee;
    }
    .check-list li:last-child { border-bottom: none; }
    .check-list li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
    }
    .check-list li::after {
      content: '';
      position: absolute;
      left: 5px; top: 17px;
      width: 9px; height: 5px;
      border-left: 2px solid var(--nu-cyan);
      border-bottom: 2px solid var(--nu-cyan);
      transform: rotate(-45deg);
      opacity: 0;
    }
    .check-list li strong { color: var(--nu-dark-text); }

    /* WALKAWAY TRIGGERS */
    .walkaway-box {
      background: linear-gradient(135deg, #fff 0%, #fbf7f2 100%);
      border: 2px solid var(--nu-stop);
      border-left-width: 8px;
      border-radius: 6px;
      padding: 24px 28px;
      margin-top: 14px;
    }
    .walkaway-box h4 {
      color: var(--nu-stop);
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 10px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .walkaway-box ul { padding-left: 20px; }
    .walkaway-box li { margin-bottom: 6px; font-size: 0.95rem; color: #333; }

    /* SCRIPT QUOTES */
    .script-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      margin: 14px 0;
      font-style: italic;
      color: #333;
      font-size: 0.97rem;
      border-radius: 0 4px 4px 0;
    }
    .script-card::before {
      content: 'SAY IT LIKE THIS';
      display: block;
      font-style: normal;
      font-weight: 900;
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }

    /* TIMELINE */
    .timeline {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 12px;
      margin-top: 16px;
    }
    .tl-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 16px 18px;
      position: relative;
    }
    .tl-step::before {
      content: attr(data-step);
      position: absolute;
      top: -12px;
      left: 14px;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.12em;
    }
    .tl-step h5 {
      font-weight: 900;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      margin: 8px 0 6px;
    }
    .tl-step p { font-size: 0.88rem; color: #555; line-height: 1.5; }

    /* TABLE */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
      font-size: 0.93rem;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .data-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 16px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
    .data-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      color: #333;
    }
    .data-table tr:last-child td { border-bottom: none; }
    .data-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .data-table td.num { font-weight: 700; color: var(--nu-dark-text); text-align: right; font-variant-numeric: tabular-nums; }

    /* PRIVATE NOTICE */
    .private-notice {
      background: linear-gradient(135deg, #fffbe8 0%, #fff6d1 100%);
      border: 1px solid #e6c85c;
      border-radius: 6px;
      padding: 16px 20px;
      margin-top: 34px;
      font-size: 0.88rem;
      color: #5a4a10;
    }
    .private-notice strong { color: #3d3208; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px 36px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
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
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 56px; }
      .doc-title { font-size: 1.7rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 12px 18px; }
      .fact-cell { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.12); }
      .fact-cell:last-child { border-bottom: none; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .tl-step { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .private-notice { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon" aria-hidden="true">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Private &middot; Negotiation Strategy</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <h1 class="doc-title"><span class="accent">4505 Buttewoods</span> &mdash; Estate Acquisition Playbook</h1>
      <p class="doc-subtitle">Negotiation strategy, offer ladder, and walkaway discipline for a 7,098 sq ft residence. Prepared for Aaron C. Norris.</p>

      <!-- FACT STRIP -->
      <div class="fact-strip" role="region" aria-label="Deal facts">
        <div class="fact-cell">
          <div class="fact-label">Property</div>
          <div class="fact-value">4505 Buttewoods<small>7,098 sq ft residence</small></div>
        </div>
        <div class="fact-cell">
          <div class="fact-label">Buyer</div>
          <div class="fact-value">A. Norris<small>Personal / trust TBD by counsel</small></div>
        </div>
        <div class="fact-cell">
          <div class="fact-label">Prepared</div>
          <div class="fact-value">April 24, 2026<small>Revision 1.0</small></div>
        </div>
        <div class="fact-cell">
          <div class="fact-label">Status</div>
          <div class="fact-value">Pre-Offer<small>Awaiting comps &amp; inspection window</small></div>
        </div>
      </div>

      <!-- STRATEGIC POSTURE -->
      <h2 class="nu-section-title"><span class="first">Posture.</span> <span class="rest">Calm money, not desperate money.</span></h2>
      <p class="nu-section-lead">The 7,098 sq ft footprint puts 4505 Buttewoods into a thin buyer pool. That narrows competition and widens the seller&rsquo;s carry cost every month the listing sits. Aaron negotiates from patience &mdash; never from urgency. The goal is a contract that wins on <strong>price, terms, and concessions</strong>, not a trophy at a premium.</p>

      <div class="nu-badge-row">
        <span class="nu-badge"><span class="dot"></span>Price Discipline</span>
        <span class="nu-badge"><span class="dot"></span>Clean Contingencies</span>
        <span class="nu-badge"><span class="dot"></span>Documented Deltas</span>
        <span class="nu-badge"><span class="dot"></span>Walk-Away Ready</span>
      </div>

      <!-- CARDS: PRE-OFFER INTEL -->
      <h2 class="nu-section-title"><span class="first">Step 1.</span> <span class="rest">Lock the intel before the number.</span></h2>
      <p class="nu-section-lead">No number goes out until these four files are complete. If any line item is missing, the offer holds.</p>

      <div class="card-grid">
        <div class="nu-card">
          <div class="card-kicker">Market File</div>
          <div class="card-title">Comps at 6,500&ndash;7,800 sq ft within 3 miles</div>
          <div class="card-body">
            <p>Pull last 12 months sold, last 6 months active, and last 6 months expired/withdrawn. Price-per-sq-ft median is the anchor. Expireds show the ceiling the market rejected.</p>
          </div>
        </div>
        <div class="nu-card cyan">
          <div class="card-kicker">Carry File</div>
          <div class="card-title">Seller&rsquo;s days on market &amp; price history</div>
          <div class="card-body">
            <p>Every price drop is leverage. Every month of DOM at this size class is real money in taxes, insurance, and maintenance. Quantify it before the first call.</p>
          </div>
        </div>
        <div class="nu-card navy">
          <div class="card-kicker">Condition File</div>
          <div class="card-title">Roof age, HVAC count, foundation, water intrusion</div>
          <div class="card-body">
            <p>Large homes carry large deferred maintenance. Budget a licensed inspector plus a roofer and HVAC tech on separate visits. Every finding is a dollar-for-dollar credit ask.</p>
          </div>
        </div>
        <div class="nu-card">
          <div class="card-kicker">Title &amp; Tax File</div>
          <div class="card-title">Liens, easements, tax assessment</div>
          <div class="card-body">
            <p>Pull the full title chain and the current assessor card. A misaligned assessment, prior probate, or pending special assessment all become price adjustments or terms concessions.</p>
          </div>
        </div>
      </div>

      <!-- OFFER LADDER -->
      <h2 class="nu-section-title"><span class="first">Step 2.</span> <span class="rest">The offer ladder.</span></h2>
      <p class="nu-section-lead">Four rungs. Aaron authorizes each rung in writing before it is spoken. The ladder is built once &mdash; pricing fills in when comps and condition are finalized. <em>Never exceed Rung 4 without a 24-hour cooling window.</em></p>

      <div class="ladder">
        <div class="rung">
          <div class="rung-label">Rung 1 &mdash; Opening</div>
          <div class="rung-offer">Fair Market Value minus condition deltas <span class="pct">Target anchor</span></div>
          <div class="rung-note">Written offer, 72-hour acceptance clock, 10-day inspection, financing and appraisal contingencies intact. This is the number the file supports, not a lowball.</div>
        </div>
        <div class="rung">
          <div class="rung-label">Rung 2 &mdash; First Counter</div>
          <div class="rung-offer">Meet half the gap, hold all contingencies <span class="pct">Moderate move</span></div>
          <div class="rung-note">Concede on price, not on terms. Shorten nothing. Give the seller a face-saving narrative: &ldquo;Our inspection budget held, so we can move the price.&rdquo;</div>
        </div>
        <div class="rung">
          <div class="rung-label">Rung 3 &mdash; Second Counter</div>
          <div class="rung-offer">Small price move, trade for concession <span class="pct">Value swap</span></div>
          <div class="rung-note">Examples: seller-paid closing costs, home warranty, retain specific fixtures, extended possession, or repair credit cap. Every dollar of price is bought with a documented concession.</div>
        </div>
        <div class="rung">
          <div class="rung-label">Rung 4 &mdash; Final &amp; Best</div>
          <div class="rung-offer">Ceiling. Non-negotiable. <span class="pct">Walk line</span></div>
          <div class="rung-note">Written, signed, dated, with an expiration. If rejected or countered, the file closes. No &ldquo;one more round.&rdquo; The ceiling is the ceiling.</div>
        </div>
      </div>

      <!-- WALKAWAY -->
      <h2 class="nu-section-title"><span class="first">Step 3.</span> <span class="rest">Walkaway triggers.</span></h2>
      <p class="nu-section-lead">These are not negotiation items &mdash; these end the deal. Aaron signs off on the list before an offer is submitted so emotion cannot override it mid-stream.</p>

      <div class="walkaway-box">
        <h4>Hard Walk Conditions</h4>
        <ul>
          <li><strong>Title defects</strong> that cannot be cured before closing (unresolved liens, boundary disputes, easement conflicts).</li>
          <li><strong>Structural findings</strong> exceeding credit cap &mdash; foundation movement, active roof failure, major water intrusion (recall the Buttewoods-adjacent precedent on disclosure).</li>
          <li><strong>Seller refusal to disclose</strong> prior insurance claims, water events, or repair history on a home of this size.</li>
          <li><strong>Appraisal shortfall</strong> greater than the Rung 3 concession envelope with no seller willingness to bridge.</li>
          <li><strong>Contract language creep</strong> &mdash; any attempt to weaken inspection, financing, or appraisal contingencies past the pre-authorized limits.</li>
          <li><strong>Escalation outside the ladder</strong> &mdash; if the seller demands movement above Rung 4, the file closes the same business day.</li>
        </ul>
      </div>

      <!-- SCRIPTS -->
      <h2 class="nu-section-title"><span class="first">Step 4.</span> <span class="rest">Language at the table.</span></h2>
      <p class="nu-section-lead">Short sentences. Declarative, not apologetic. Aaron&rsquo;s voice: direct, warm, never pushy.</p>

      <div class="script-card">
        &ldquo;We&rsquo;ve done our work on the comps and the condition. This is a number we can close on &mdash; cash-clean terms, reasonable timelines, no surprises.&rdquo;
      </div>
      <div class="script-card">
        &ldquo;I&rsquo;m not asking you to take my word on the price. The file backs it. I&rsquo;m happy to walk you through the comps and the inspection items we&rsquo;re absorbing.&rdquo;
      </div>
      <div class="script-card">
        &ldquo;If there&rsquo;s a path to yes, I&rsquo;d like to find it tonight. If there isn&rsquo;t, I respect that and I appreciate the time.&rdquo;
      </div>
      <div class="script-card">
        &ldquo;This is our final and best offer. It&rsquo;s in writing, it&rsquo;s signed, and it expires Friday at 5. After that we&rsquo;ll move on &mdash; no hard feelings.&rdquo;
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Step 5.</span> <span class="rest">Transaction timeline.</span></h2>
      <p class="nu-section-lead">From contract acceptance to keys-in-hand, the operating schedule. Every milestone has a named owner and a written deliverable.</p>

      <div class="timeline">
        <div class="tl-step" data-step="DAY 0">
          <h5>Offer Accepted</h5>
          <p>Earnest money wired. Fully executed contract distributed to buyer, seller, lender, title, and inspector on the same day.</p>
        </div>
        <div class="tl-step" data-step="DAYS 1&ndash;10">
          <h5>Inspection Window</h5>
          <p>General inspection, roof, HVAC, foundation, sewer scope, and moisture/water intrusion survey. Written repair-credit ask goes to seller by Day 10.</p>
        </div>
        <div class="tl-step" data-step="DAYS 11&ndash;20">
          <h5>Appraisal &amp; Title</h5>
          <p>Lender orders appraisal. Title commitment reviewed line-by-line by counsel. Any cloud or easement question answered in writing before proceeding.</p>
        </div>
        <div class="tl-step" data-step="DAYS 21&ndash;30">
          <h5>Financing &amp; Underwriting</h5>
          <p>Clear-to-close confirmed in writing. Final walk-through scheduled within 48 hours of closing. Insurance binder secured before closing table.</p>
        </div>
        <div class="tl-step" data-step="DAY 30&ndash;35">
          <h5>Close &amp; Possession</h5>
          <p>Funds confirmed, deed recorded, keys &amp; manuals delivered, utility transfer complete. Post-close punch list to seller within 7 days if applicable.</p>
        </div>
      </div>

      <!-- AUTHORIZED BUDGETS -->
      <h2 class="nu-section-title"><span class="first">Step 6.</span> <span class="rest">Authorized line-item budget.</span></h2>
      <p class="nu-section-lead">Pre-approved spend envelopes. Anything outside these lines comes back to Aaron for sign-off before commitment.</p>

      <table class="data-table" aria-label="Authorized budget envelopes">
        <thead>
          <tr>
            <th>Line Item</th>
            <th>Owner</th>
            <th>Envelope</th>
            <th>Trigger to Escalate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>General home inspection (7,098 sq ft)</td>
            <td>Licensed inspector, Birmingham</td>
            <td class="num">Standard rate + sq-ft uplift</td>
            <td>Any single finding over $10,000 est. repair</td>
          </tr>
          <tr>
            <td>Roof &amp; HVAC specialty inspections</td>
            <td>Independent roofer + HVAC tech</td>
            <td class="num">Separate trade visits</td>
            <td>End-of-life assessment on either system</td>
          </tr>
          <tr>
            <td>Sewer scope &amp; foundation review</td>
            <td>Specialty subs</td>
            <td class="num">Per-visit pricing</td>
            <td>Any movement, leak, or intrusion evidence</td>
          </tr>
          <tr>
            <td>Title &amp; legal review</td>
            <td>Real estate attorney</td>
            <td class="num">Flat fee + hourly if disputed</td>
            <td>Any lien, easement, or boundary question</td>
          </tr>
          <tr>
            <td>Earnest money deposit</td>
            <td>Buyer &mdash; Aaron C. Norris</td>
            <td class="num">Held in title-company escrow</td>
            <td>Any request to release pre-closing</td>
          </tr>
        </tbody>
      </table>

      <!-- ROLE CLARITY -->
      <h2 class="nu-section-title"><span class="first">Step 7.</span> <span class="rest">Who does what.</span></h2>
      <ul class="check-list">
        <li><strong>Aaron C. Norris</strong> &mdash; Principal. Sole decision authority on price, terms, and walkaway. Signs every document.</li>
        <li><strong>Buyer&rsquo;s agent</strong> &mdash; Represents Aaron only. No dual agency. Prepares offers, routes counters, maintains paper trail.</li>
        <li><strong>Real estate attorney</strong> &mdash; Reviews contract, title commitment, and closing docs. Flags any deviation from pre-approved terms.</li>
        <li><strong>Licensed home inspector</strong> &mdash; Independent, not seller-recommended. Written report within 48 hours of inspection.</li>
        <li><strong>Lender</strong> &mdash; Pre-approval letter in hand before offer; clear-to-close in writing before final walk-through.</li>
        <li><strong>Insurance broker</strong> &mdash; Binder quoted during inspection window, bound before closing.</li>
        <li><strong>Title &amp; escrow</strong> &mdash; Neutral closer. Receives earnest money, holds until close or release conditions met.</li>
      </ul>

      <!-- GUARDRAILS -->
      <h2 class="nu-section-title"><span class="first">Step 8.</span> <span class="rest">Guardrails Aaron does not cross.</span></h2>
      <ul class="check-list">
        <li><strong>No verbal agreements.</strong> Every price, term, concession, and repair credit goes in writing before it is considered live.</li>
        <li><strong>No waived inspection on a 7,098 sq ft home.</strong> The square footage alone defeats any argument for skipping the inspection window.</li>
        <li><strong>No shortened financing contingency</strong> below what the lender confirms is safe in writing.</li>
        <li><strong>No seller-selected inspector, title company, or attorney.</strong> Buyer picks all three.</li>
        <li><strong>No emotional bid-up.</strong> The offer ladder is the boundary. Rung 4 is the ceiling, and the ceiling is signed before negotiations start.</li>
        <li><strong>No undisclosed water, insurance, or structural history accepted.</strong> Seller provides in writing or the file closes.</li>
      </ul>

      <!-- PRIVATE NOTICE -->
      <div class="private-notice">
        <strong>Private &amp; Personal.</strong> This document is an internal negotiation strategy for Aaron C. Norris. It is not marketing material, not a public listing, and not a sworn offer. All dollar values, dates, and vendor selections are placeholders governed by the Authorized Budget section and remain subject to Aaron&rsquo;s written sign-off at each rung of the ladder. Share only with counsel, buyer&rsquo;s agent, and lender as required to close the transaction. A Legacy of Commitment® begins with discipline at the table.
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
  </footer>

</body>
</html>