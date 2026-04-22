<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buttewoods Estate Acquisition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-danger: #C62828;
      --nu-success: #2E7D32;
      --nu-warning: #E65100;
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

    /* ══ HEADER ══ */
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
    .nu-header-inner {
      position: relative;
      z-index: 2;
    }
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
      opacity: 0.07;
      z-index: 0;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 24px;
      padding: 8px 20px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 4px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      backdrop-filter: blur(6px);
    }

    /* ══ CHEVRON ══ */
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

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ DOC HEADER ══ */
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .doc-title .accent { color: #0033cc; }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 20px;
      font-weight: 400;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      padding: 16px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
      font-size: 0.9rem;
    }
    .doc-meta-item { color: var(--nu-body-text); }
    .doc-meta-item strong { color: var(--nu-dark-text); margin-right: 6px; }
    .doc-meta-item:not(:last-child)::after {
      content: '|';
      margin-left: 12px;
      color: var(--nu-medium-gray);
    }

    /* ══ SECTION HEADER ══ */
    .section {
      margin-bottom: 44px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-title .accent {
      color: #0033cc;
    }
    .section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ ALERT / FLAG BANNER ══ */
    .flag-banner {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 18px 22px;
      background: linear-gradient(135deg, #fff4e5 0%, #ffe0b2 100%);
      border-left: 5px solid var(--nu-warning);
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .flag-banner-icon {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-warning);
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      border: 2px solid var(--nu-warning);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }
    .flag-banner-content h3 {
      font-weight: 900;
      color: var(--nu-warning);
      margin-bottom: 6px;
      font-size: 1rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .flag-banner-content p {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }

    /* ══ PROPERTY SUMMARY GRID ══ */
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
    .prop-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .prop-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,51,0.08);
    }
    .prop-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .prop-value {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .prop-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* ══ NEGOTIATION PLAYBOOK ══ */
    .playbook-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }
    .play-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .play-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .play-card ul {
      list-style: none;
      padding: 0;
    }
    .play-card li {
      padding: 6px 0 6px 20px;
      position: relative;
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .play-card li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* ══ OFFER LADDER TABLE ══ */
    .ladder-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .ladder-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .ladder-table th {
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-align: left;
    }
    .ladder-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .ladder-table tr:last-child td { border-bottom: none; }
    .ladder-table tr:nth-child(even) { background: var(--nu-light-gray); }
    .ladder-table .tier {
      font-weight: 900;
      color: #0033cc;
      white-space: nowrap;
    }
    .ladder-table .price {
      font-weight: 900;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 12px;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      background: var(--nu-light-gray);
      border-radius: 4px;
      border-left: 3px solid var(--nu-cyan);
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .checkbox {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      margin-top: 1px;
    }

    /* ══ NEXT ACTIONS ══ */
    .actions-list {
      counter-reset: action-counter;
      list-style: none;
      padding: 0;
    }
    .actions-list li {
      counter-increment: action-counter;
      position: relative;
      padding: 18px 20px 18px 64px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 12px;
    }
    .actions-list li::before {
      content: counter(action-counter);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 34px;
      height: 34px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .actions-list li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .actions-list li span {
      color: var(--nu-body-text);
      font-size: 0.9rem;
    }
    .actions-list li .owner {
      display: inline-block;
      margin-left: 8px;
      padding: 2px 10px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 10px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    /* ══ NOTES BLOCK ══ */
    .notes-block {
      padding: 24px;
      background: linear-gradient(135deg, #f0f4ff 0%, #e8efff 100%);
      border-radius: 8px;
      border: 1px solid #c5d2f7;
    }
    .notes-block p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .notes-block p:last-child { margin-bottom: 0; }
    .notes-block strong { color: var(--nu-blue); }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-legal {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.8rem;
      color: rgba(255,255,255,0.6);
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .doc-title { font-size: 1.6rem; }
      .doc-meta { flex-direction: column; gap: 6px; }
      .doc-meta-item::after { display: none !important; }
      .ladder-table { font-size: 0.82rem; }
      .ladder-table th, .ladder-table td { padding: 10px 8px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .prop-card, .play-card, .actions-list li { break-inside: avoid; box-shadow: none; }
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
    <div class="nu-header-inner">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment&reg;</div>
      <div class="nu-doc-badge">Confidential Acquisition Brief</div>
    </div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC TITLE -->
      <h1 class="doc-title"><span class="accent">Buttewoods Estate</span> — Acquisition Negotiation Plan</h1>
      <p class="doc-subtitle">reMarkable action item: Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods</p>

      <div class="doc-meta">
        <div class="doc-meta-item"><strong>Property:</strong> 4505 Buttewoods</div>
        <div class="doc-meta-item"><strong>Size:</strong> 7,098 sq ft</div>
        <div class="doc-meta-item"><strong>Lead:</strong> Aaron C. Norris</div>
        <div class="doc-meta-item"><strong>Status:</strong> Negotiation Prep</div>
        <div class="doc-meta-item"><strong>Doc Date:</strong> April 22, 2026</div>
      </div>

      <!-- FLAG BANNER -->
      <div class="flag-banner">
        <div class="flag-banner-icon">!</div>
        <div class="flag-banner-content">
          <h3>Personal Transaction — Not a Norris Utilities&reg; Business Expense</h3>
          <p>This acquisition is a personal real estate matter for Aaron C. Norris. It does not touch Norris Utilities&reg;, LLC finances, accounts, or credit. Keep all documentation in a personal file separate from company records. Loop in a personal real estate attorney and CPA before signing anything.</p>
        </div>
      </div>

      <!-- SECTION 1: PROPERTY SNAPSHOT -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="property-grid">
          <div class="prop-card">
            <div class="prop-label">Address</div>
            <div class="prop-value">4505 Buttewoods</div>
            <div class="prop-sub">Verify full street address, city, ZIP before offer</div>
          </div>
          <div class="prop-card">
            <div class="prop-label">Heated Area</div>
            <div class="prop-value">7,098 sq ft</div>
            <div class="prop-sub">Confirm against tax records</div>
          </div>
          <div class="prop-card">
            <div class="prop-label">Classification</div>
            <div class="prop-value">Estate</div>
            <div class="prop-sub">Likely luxury / custom build</div>
          </div>
          <div class="prop-card">
            <div class="prop-label">Transaction Type</div>
            <div class="prop-value">Personal</div>
            <div class="prop-sub">Separate from Norris Utilities&reg;</div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: DATA TO PULL BEFORE NEGOTIATING -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Due</span> <span class="rest">Diligence — Pull Before Offer</span></h2>
        <ul class="checklist">
          <li><span class="checkbox"></span><span>County tax appraisal (last 3 years) and current assessed value</span></li>
          <li><span class="checkbox"></span><span>MLS listing history — days on market, prior list prices, pending/withdrawn history</span></li>
          <li><span class="checkbox"></span><span>Recent sold comps within 1 mile, 5,000+ sq ft, last 12 months</span></li>
          <li><span class="checkbox"></span><span>Current mortgage balance (public records if available)</span></li>
          <li><span class="checkbox"></span><span>Ownership chain and deed history</span></li>
          <li><span class="checkbox"></span><span>Any liens, easements, or HOA covenants</span></li>
          <li><span class="checkbox"></span><span>Seller motivation — estate sale, relocation, distressed, etc.</span></li>
          <li><span class="checkbox"></span><span>Septic, well, flood zone, and school district status</span></li>
          <li><span class="checkbox"></span><span>Deferred maintenance noted in listing photos or past inspections</span></li>
          <li><span class="checkbox"></span><span>Average $/sq ft for luxury comps vs asking $/sq ft</span></li>
        </ul>
      </section>

      <!-- SECTION 3: NEGOTIATION PLAYBOOK -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Negotiation</span> <span class="rest">Playbook</span></h2>
        <div class="playbook-grid">
          <div class="play-card">
            <h4>1. Establish Anchor</h4>
            <ul>
              <li>Lead with a comp-based number, not a percentage of list</li>
              <li>Anchor low but defensible — 8&ndash;12% under comp-supported value</li>
              <li>Put anchor in writing, never verbal only</li>
            </ul>
          </div>
          <div class="play-card">
            <h4>2. Build Seller Empathy</h4>
            <ul>
              <li>Understand why they are selling before you counter</li>
              <li>Ask: timeline, next move, any contingencies they need</li>
              <li>Align your close date with their need date</li>
            </ul>
          </div>
          <div class="play-card">
            <h4>3. Use Structure, Not Just Price</h4>
            <ul>
              <li>Larger earnest money as a credibility lever</li>
              <li>Short inspection / financing windows</li>
              <li>Offer lease-back if seller needs time to move</li>
              <li>Cover certain closing costs in exchange for price relief</li>
            </ul>
          </div>
          <div class="play-card">
            <h4>4. Protect Walk-Away Room</h4>
            <ul>
              <li>Set a hard ceiling before you start — write it down</li>
              <li>Keep inspection, appraisal, and financing contingencies</li>
              <li>Be willing to pause for 48 hours to create pressure</li>
            </ul>
          </div>
          <div class="play-card">
            <h4>5. Control the Narrative</h4>
            <ul>
              <li>Cover-letter approach: professional, warm, specific</li>
              <li>Show proof of funds / pre-approval upfront</li>
              <li>Never apologize for your number — defend with data</li>
            </ul>
          </div>
          <div class="play-card">
            <h4>6. Price Relief Levers</h4>
            <ul>
              <li>Deferred maintenance (roof, HVAC age, driveway)</li>
              <li>Dated kitchens/baths vs remodeled comps</li>
              <li>Lot size or orientation issues</li>
              <li>Time on market &gt; 60 days</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 4: OFFER LADDER -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Offer</span> <span class="rest">Ladder</span></h2>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">Fill in dollar amounts once comp pull is complete. The ladder keeps each counter inside a pre-approved budget and prevents bidding against yourself.</p>
        <table class="ladder-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Offer Amount</th>
              <th>Positioning</th>
              <th>Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tier">Anchor</td>
              <td class="price">8&ndash;12% under supported value</td>
              <td>Comp-based, written, credible</td>
              <td>All standard contingencies, 30-day close</td>
            </tr>
            <tr>
              <td class="tier">Counter 1</td>
              <td class="price">4&ndash;6% under supported value</td>
              <td>Concede only after seller counter</td>
              <td>Tighten inspection to 7 days</td>
            </tr>
            <tr>
              <td class="tier">Counter 2</td>
              <td class="price">1&ndash;2% under supported value</td>
              <td>Add structural value (earnest money up)</td>
              <td>Offer flexible close date</td>
            </tr>
            <tr>
              <td class="tier">Ceiling</td>
              <td class="price">At supported value</td>
              <td>Hard stop — do not exceed</td>
              <td>Keep appraisal contingency in place</td>
            </tr>
            <tr>
              <td class="tier">Walk</td>
              <td class="price">Over supported value</td>
              <td>Decline &mdash; revisit in 30&ndash;60 days</td>
              <td>Keep agent relationship warm</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION 5: RED LINES -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Red</span> <span class="rest">Lines &amp; Protections</span></h2>
        <div class="notes-block">
          <p><strong>Appraisal contingency</strong> — Required. Do not waive on a 7,098 sq ft estate in any market.</p>
          <p><strong>Inspection contingency</strong> — Required. General, structural, HVAC, roof, termite, septic/well, pool if applicable.</p>
          <p><strong>Financing contingency</strong> — Hold unless paying all-cash with funds verified by personal banker.</p>
          <p><strong>Title &amp; survey</strong> — Owner's title policy; new survey if no recent one on file.</p>
          <p><strong>Earnest money</strong> — Held by a neutral escrow or title company, never by the seller or listing agent directly.</p>
          <p><strong>Attorney review</strong> — Every version of the contract reviewed by personal real estate attorney before signature.</p>
        </div>
      </section>

      <!-- SECTION 6: NEXT ACTIONS -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Next</span> <span class="rest">Actions</span></h2>
        <ol class="actions-list">
          <li>
            <strong>Confirm full property address and current list status <span class="owner">Aaron</span></strong>
            <span>Pull county record and current MLS listing for 4505 Buttewoods to verify exact street, city, ZIP, list price, and agent of record.</span>
          </li>
          <li>
            <strong>Engage buyer's agent or go direct <span class="owner">Aaron</span></strong>
            <span>Decide whether to use a buyer's agent for representation and comp access, or approach seller direct with attorney support.</span>
          </li>
          <li>
            <strong>Order comp report and tax history <span class="owner">Agent / Aaron</span></strong>
            <span>Pull 12-month solds &ge; 5,000 sq ft within 1 mile plus 3-year tax appraisal history.</span>
          </li>
          <li>
            <strong>Obtain proof of funds / pre-approval <span class="owner">Aaron</span></strong>
            <span>Personal banker &mdash; do not use any Norris Utilities&reg; line of credit. Letter dated within 30 days of offer.</span>
          </li>
          <li>
            <strong>Set personal ceiling in writing <span class="owner">Aaron</span></strong>
            <span>Lock maximum purchase price before first contact with seller. Share only with attorney and spouse.</span>
          </li>
          <li>
            <strong>Draft opening offer and cover letter <span class="owner">Attorney + Aaron</span></strong>
            <span>Anchor number, standard contingencies, earnest money amount, proposed close date, and professional cover letter.</span>
          </li>
          <li>
            <strong>Submit offer with supporting package <span class="owner">Agent / Attorney</span></strong>
            <span>Offer + proof of funds + cover letter delivered as one clean package. Request 48-hour response window.</span>
          </li>
          <li>
            <strong>Work the ladder &mdash; never skip tiers <span class="owner">Aaron</span></strong>
            <span>Respond to counters using the ladder above. Do not jump to ceiling on first counter.</span>
          </li>
          <li>
            <strong>Inspection &amp; appraisal <span class="owner">Aaron</span></strong>
            <span>Schedule inspections within contingency window; use findings as second price-relief lever if warranted.</span>
          </li>
          <li>
            <strong>Close &amp; document <span class="owner">Attorney</span></strong>
            <span>Final walkthrough, signed closing documents, wire instructions verified by voice, deed recorded.</span>
          </li>
        </ol>
      </section>

      <!-- SECTION 7: COMMUNICATION RULES -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Communication</span> <span class="rest">Rules</span></h2>
        <div class="notes-block">
          <p><strong>Single channel for offers</strong> &mdash; All offers and counters in writing through the agent or attorney. No verbal price commitments.</p>
          <p><strong>48-hour rule</strong> &mdash; Always request 48 hours to respond. Never counter same day under pressure.</p>
          <p><strong>Silence is leverage</strong> &mdash; If negotiations stall, a pause of 2&ndash;3 days often resets the seller's expectations.</p>
          <p><strong>Separate from business</strong> &mdash; Do not discuss this transaction in Norris Utilities&reg; email threads, Telegram channels, or with the Norris Utilities&reg; team. Use personal email only.</p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment&reg;</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities&reg;, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-legal">
      Confidential &mdash; personal real estate planning document. Not a Norris Utilities&reg; business record.
    </div>
  </footer>

</body>
</html>