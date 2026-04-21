<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-alert-red: #C62828;
      --nu-success-green: #2E7D32;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
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
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 800px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOC META */
    .doc-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      padding-bottom: 24px;
      margin-bottom: 40px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-meta-label {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .doc-meta-value { font-size: 0.95rem; color: var(--nu-dark-text); font-weight: 400; }
    .doc-status {
      display: inline-block;
      padding: 6px 14px;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 3px;
    }

    /* PAGE TITLE */
    h1.page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    h1.page-title .highlight { color: var(--nu-blue); }
    .page-subtitle {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-body-text);
      margin-bottom: 40px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-top: 40px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
      display: flex;
      align-items: baseline;
      gap: 12px;
    }
    .nu-section-title .section-num {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      font-weight: 700;
      letter-spacing: 0.1em;
    }
    .nu-section-title .section-label { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SNAPSHOT GRID */
    .property-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 2px solid var(--nu-blue);
      margin-bottom: 32px;
    }
    .snapshot-cell {
      background: var(--nu-white);
      padding: 22px 18px;
      text-align: center;
    }
    .snapshot-cell .snap-label {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .snapshot-cell .snap-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .snapshot-cell .snap-sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* INFO TABLES */
    .info-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
      background: var(--nu-white);
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .info-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 12px 16px;
      text-align: left;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .info-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .info-table tr:last-child td { border-bottom: none; }
    .info-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .info-table .label-col {
      font-weight: 700;
      color: var(--nu-blue);
      width: 34%;
    }
    .info-table .amount { font-weight: 900; color: var(--nu-dark-text); font-variant-numeric: tabular-nums; }

    /* CHEVRON BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .badge-num {
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* STRATEGY CARDS */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    .strategy-card {
      background: var(--nu-white);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
    }
    .strategy-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .strategy-card p { font-size: 0.94rem; line-height: 1.65; }
    .strategy-card.caution { border-left-color: var(--nu-alert-red); }
    .strategy-card.caution h3 { color: var(--nu-alert-red); }
    .strategy-card.win { border-left-color: var(--nu-success-green); }
    .strategy-card.win h3 { color: var(--nu-success-green); }

    /* CALLOUT BOX */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px;
      margin: 28px 0;
      position: relative;
    }
    .callout-label {
      position: absolute;
      top: -12px;
      left: 20px;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 4px 14px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      border-radius: 3px;
    }
    .callout p { font-size: 1rem; line-height: 1.7; margin-bottom: 10px; }
    .callout p:last-child { margin-bottom: 0; }

    /* CHECKLIST */
    .checklist { list-style: none; padding: 0; }
    .checklist li {
      padding: 14px 16px 14px 48px;
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      margin-bottom: 8px;
      border-radius: 4px;
      font-size: 0.95rem;
    }
    .checklist li::before {
      content: '☐';
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.4rem;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* PRICING LADDER */
    .price-ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }
    .price-step {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 16px;
      text-align: center;
      position: relative;
    }
    .price-step.step-opening { border-color: var(--nu-success-green); background: rgba(46,125,50,0.04); }
    .price-step.step-target { border-color: var(--nu-blue); background: rgba(0,0,255,0.04); box-shadow: 0 4px 16px rgba(0,0,255,0.15); }
    .price-step.step-walkaway { border-color: var(--nu-alert-red); background: rgba(198,40,40,0.04); }
    .step-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .step-price {
      font-size: 1.7rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      font-variant-numeric: tabular-nums;
      line-height: 1.1;
    }
    .step-note {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 6px;
      line-height: 1.4;
    }

    /* CONTINGENCY LIST */
    .contingency-list {
      list-style: none;
      padding: 0;
    }
    .contingency-list li {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      display: flex;
      gap: 14px;
      align-items: flex-start;
    }
    .contingency-list li:last-child { border-bottom: none; }
    .contingency-list .days {
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 4px 10px;
      border-radius: 3px;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.05em;
      flex-shrink: 0;
      min-width: 60px;
      text-align: center;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #0a0e5c 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.8rem;
      color: rgba(255,255,255,0.6);
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 45px 20px 65px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      h1.page-title { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.2rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 12px 16px; }
      .info-table th, .info-table td { padding: 10px 12px; font-size: 0.88rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .strategy-card, .nu-badge, .callout { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
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

      <!-- DOC META -->
      <div class="doc-meta">
        <div>
          <div class="doc-meta-label">Document</div>
          <div class="doc-meta-value">Personal Real Estate — Acquisition Strategy</div>
        </div>
        <div>
          <div class="doc-meta-label">Prepared For</div>
          <div class="doc-meta-value">Aaron C. Norris</div>
        </div>
        <div>
          <div class="doc-meta-label">Date</div>
          <div class="doc-meta-value">April 20, 2026</div>
        </div>
        <div>
          <div class="doc-status">Active — Negotiation</div>
        </div>
      </div>

      <!-- TITLE -->
      <h1 class="page-title">Estate <span class="highlight">Acquisition Playbook</span></h1>
      <p class="page-subtitle">4505 Buttewoods Drive &mdash; 7,098 Square Foot Residence</p>

      <!-- PROPERTY SNAPSHOT -->
      <h2 class="nu-section-title"><span class="section-num">§ 1</span><span class="section-label">Property Snapshot</span></h2>
      <div class="property-snapshot">
        <div class="snapshot-cell">
          <div class="snap-label">Address</div>
          <div class="snap-value" style="font-size:1.05rem;">4505 Buttewoods</div>
          <div class="snap-sub">Single-family estate</div>
        </div>
        <div class="snapshot-cell">
          <div class="snap-label">Living Area</div>
          <div class="snap-value">7,098</div>
          <div class="snap-sub">square feet</div>
        </div>
        <div class="snapshot-cell">
          <div class="snap-label">Classification</div>
          <div class="snap-value" style="font-size:1.05rem;">Luxury Estate</div>
          <div class="snap-sub">Custom residence</div>
        </div>
        <div class="snapshot-cell">
          <div class="snap-label">Transaction Role</div>
          <div class="snap-value" style="font-size:1.05rem;">Buyer</div>
          <div class="snap-sub">Aaron C. Norris</div>
        </div>
      </div>

      <!-- CRITICAL CONTEXT -->
      <div class="callout">
        <div class="callout-label">CRITICAL CONTEXT</div>
        <p><strong>This is a personal transaction — not a Norris Utilities business matter.</strong> The estate is being acquired as the Norris family residence. Norris Utilities, LLC, its capital, and its financial instruments are not parties to this purchase.</p>
        <p>Two disclosed property concerns are already in the file and must be leveraged during price negotiation: (1) an <strong>undisclosed water intrusion issue</strong> and (2) a <strong>square footage discrepancy</strong> between MLS listing and sale paperwork. These materially affect the offer strategy outlined below.</p>
      </div>

      <!-- OBJECTIVE -->
      <h2 class="nu-section-title"><span class="section-num">§ 2</span><span class="section-label">Negotiation Objective</span></h2>
      <table class="info-table">
        <tbody>
          <tr>
            <td class="label-col">Primary Goal</td>
            <td>Secure 4505 Buttewoods at a price that accounts for disclosed defects, with all repair and warranty risk shifted to seller prior to close.</td>
          </tr>
          <tr>
            <td class="label-col">Secondary Goal</td>
            <td>Hold an independent inspection and H2O Waterproofing written certification as contingencies that cannot be waived.</td>
          </tr>
          <tr>
            <td class="label-col">Hard Constraints</td>
            <td>Do not close without: (a) written water intrusion remediation warranty, (b) independent square footage measurement, (c) fully executed seller disclosure amendment.</td>
          </tr>
          <tr>
            <td class="label-col">Walk-Away Trigger</td>
            <td>Seller refuses to amend disclosure OR refuses any of the three contingencies above. A deal this large does not need to happen today — better deals exist.</td>
          </tr>
        </tbody>
      </table>

      <!-- LEVERAGE POINTS -->
      <h2 class="nu-section-title"><span class="section-num">§ 3</span><span class="section-label">Leverage Points</span></h2>
      <div class="nu-badge"><span class="badge-num">1</span>Water intrusion issue was omitted from the listing disclosure — material defect.</div>
      <div class="nu-badge"><span class="badge-num">2</span>Square footage discrepancy between listed area and sale paperwork — price-per-foot ambiguity.</div>
      <div class="nu-badge"><span class="badge-num">3</span>Luxury estate at 7,098 sq ft serves a narrow buyer pool — seller has limited alternate offers.</div>
      <div class="nu-badge"><span class="badge-num">4</span>Buyer (Aaron) is cash-ready, pre-qualified, decisive — a clean close has real value to the seller.</div>
      <div class="nu-badge"><span class="badge-num">5</span>H2O Waterproofing written opinion becomes a documented third-party basis for any price concession.</div>

      <!-- STRATEGY PILLARS -->
      <h2 class="nu-section-title"><span class="section-num">§ 4</span><span class="section-label">Strategy Pillars</span></h2>
      <div class="strategy-grid">
        <div class="strategy-card win">
          <h3>Anchor Low, Justify Every Dollar</h3>
          <p>Opening offer sits below asking and is tied directly to two written justifications: the H2O Waterproofing repair estimate and the square-footage price adjustment. Every concession from list price is documented.</p>
        </div>
        <div class="strategy-card">
          <h3>Silence After the Offer</h3>
          <p>Submit the offer package, then wait. Do not justify verbally, do not soften, do not follow up within 24 hours. Let the seller's agent do the selling back to their client.</p>
        </div>
        <div class="strategy-card">
          <h3>Bundle the Contingencies</h3>
          <p>Inspection, H2O certification, and disclosure amendment move as one package. Seller does not get to accept the price and reject the contingencies, or vice versa.</p>
        </div>
        <div class="strategy-card caution">
          <h3>Never Fall in Love</h3>
          <p>Emotional attachment to the property is the single largest threat to negotiation posture. If the seller senses urgency on your side, leverage collapses. Walk-away readiness is not a bluff — it is the posture.</p>
        </div>
        <div class="strategy-card">
          <h3>Trade Price vs. Concessions</h3>
          <p>If seller resists the target price, hold the line on price and ask for seller-paid closing costs, remediation escrow, or extended warranty instead. Every dollar of concession is real.</p>
        </div>
        <div class="strategy-card win">
          <h3>Close on Paper, Not on Handshake</h3>
          <p>Every concession — including verbal assurances from the seller's agent — must appear in the executed purchase agreement or a written addendum. Nothing closes on a promise.</p>
        </div>
      </div>

      <!-- PRICING LADDER -->
      <h2 class="nu-section-title"><span class="section-num">§ 5</span><span class="section-label">Pricing Ladder</span></h2>
      <p style="margin-bottom:20px;">Set three numbers before negotiation opens. Never move past the ceiling.</p>
      <div class="price-ladder">
        <div class="price-step step-opening">
          <div class="step-label">Opening Offer</div>
          <div class="step-price">Low Anchor</div>
          <div class="step-note">List price minus H2O repair estimate minus sq-ft correction</div>
        </div>
        <div class="price-step step-target">
          <div class="step-label">Target Close</div>
          <div class="step-price">Fair Number</div>
          <div class="step-note">Supported by written comps and third-party defect cost</div>
        </div>
        <div class="price-step step-walkaway">
          <div class="step-label">Walk-Away Ceiling</div>
          <div class="step-price">Hard Stop</div>
          <div class="step-note">Above this, the deal loses — no exceptions</div>
        </div>
      </div>

      <!-- CONTINGENCY TIMELINE -->
      <h2 class="nu-section-title"><span class="section-num">§ 6</span><span class="section-label">Contingency Timeline</span></h2>
      <ul class="contingency-list">
        <li>
          <span class="days">Day 0</span>
          <span><strong>Submit purchase agreement</strong> with all three contingencies embedded. Include H2O Waterproofing written report and signed seller disclosure amendment requirement.</span>
        </li>
        <li>
          <span class="days">Day 1-3</span>
          <span><strong>Silence on buyer side.</strong> Let the offer sit. No follow-up calls, no soft-sell. Seller's agent works the seller.</span>
        </li>
        <li>
          <span class="days">Day 4-7</span>
          <span><strong>Counter-offer window.</strong> Any counter is evaluated against the pricing ladder, not against emotional anchors.</span>
        </li>
        <li>
          <span class="days">Day 7-14</span>
          <span><strong>Independent inspection</strong> plus H2O Waterproofing site visit and written certification of remediation scope.</span>
        </li>
        <li>
          <span class="days">Day 14-21</span>
          <span><strong>Disclosure amendment executed</strong> by seller. Square footage reconciled with independent measurement. Both attached to final agreement.</span>
        </li>
        <li>
          <span class="days">Day 21-30</span>
          <span><strong>Financing, title, and closing coordination.</strong> No concession is final until it is on the HUD-1 or closing statement.</span>
        </li>
      </ul>

      <!-- DUE DILIGENCE CHECKLIST -->
      <h2 class="nu-section-title"><span class="section-num">§ 7</span><span class="section-label">Due-Diligence Checklist</span></h2>
      <ul class="checklist">
        <li><strong>H2O Waterproofing written opinion</strong> — cause, remediation scope, warranty, cost — signed and on letterhead before offer submission.</li>
        <li><strong>Seller disclosure amendment</strong> — water intrusion must be added in writing, acknowledged by seller, and date-stamped.</li>
        <li><strong>Independent square-footage measurement</strong> — licensed appraiser or certified measurement, reconciled against both MLS and sale paperwork.</li>
        <li><strong>Independent whole-house inspection</strong> — structural, HVAC, electrical, plumbing, roof, foundation. Separate from H2O certification.</li>
        <li><strong>Title report and survey</strong> — easements, setbacks, encroachments, recorded liens — no surprises at close.</li>
        <li><strong>Comparable sales analysis</strong> — 5+ comps within 1 mile and 12 months, adjusted for square footage and estate class.</li>
        <li><strong>Insurance pre-quote</strong> — homeowner's insurance quote based on current condition before price is finalized.</li>
        <li><strong>Financing pre-approval letter</strong> — written, current, submitted with offer to demonstrate close certainty.</li>
        <li><strong>Legal review of purchase agreement</strong> — attorney confirms all three contingencies and disclosure amendment language survive to closing.</li>
        <li><strong>Walk-away letter drafted in advance</strong> — written, signed, ready to transmit if seller rejects any hard constraint.</li>
      </ul>

      <!-- TALKING POINTS -->
      <h2 class="nu-section-title"><span class="section-num">§ 8</span><span class="section-label">Talking Points for Seller's Agent</span></h2>
      <table class="info-table">
        <thead>
          <tr><th style="width:38%;">Position</th><th>Delivery</th></tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-col">On the water intrusion</td>
            <td>"The H2O Waterproofing report is in writing. The repair and warranty scope has a documented cost. The offer reflects that number — not a negotiating position."</td>
          </tr>
          <tr>
            <td class="label-col">On the square footage gap</td>
            <td>"The listing and the sale paperwork do not match. We are buying at measured square footage, priced at your neighborhood's dollar-per-foot comparables."</td>
          </tr>
          <tr>
            <td class="label-col">On the disclosure amendment</td>
            <td>"The amendment protects both sides. Without it, this transaction carries legal exposure that neither your client nor mine wants to own at close."</td>
          </tr>
          <tr>
            <td class="label-col">On the timeline</td>
            <td>"Financing is in place. Inspection is scheduled. If the paperwork is clean, this closes on your client's timeline — not ours."</td>
          </tr>
          <tr>
            <td class="label-col">On a counter we cannot accept</td>
            <td>"I appreciate the response. We will need to pass. Please keep our information on file should circumstances change."</td>
          </tr>
        </tbody>
      </table>

      <!-- KEY CONTACTS -->
      <h2 class="nu-section-title"><span class="section-num">§ 9</span><span class="section-label">Key Contacts</span></h2>
      <table class="info-table">
        <thead>
          <tr><th>Role</th><th>Function</th></tr>
        </thead>
        <tbody>
          <tr><td class="label-col">Buyer</td><td>Aaron C. Norris &mdash; personal purchaser</td></tr>
          <tr><td class="label-col">Buyer's Agent / Attorney</td><td>Retained counsel &mdash; reviews purchase agreement, contingencies, closing documents</td></tr>
          <tr><td class="label-col">H2O Waterproofing</td><td>Written assessment of water intrusion; remediation scope, warranty, cost</td></tr>
          <tr><td class="label-col">Licensed Appraiser</td><td>Independent square footage measurement and market valuation</td></tr>
          <tr><td class="label-col">Home Inspector</td><td>Whole-house inspection &mdash; separate from H2O certification</td></tr>
          <tr><td class="label-col">Lender</td><td>Renasant Bank &mdash; primary financing relationship; Patrick Lavette primary contact</td></tr>
          <tr><td class="label-col">Title / Closing</td><td>Independent title company &mdash; not seller-selected</td></tr>
        </tbody>
      </table>

      <!-- FINAL POSTURE -->
      <div class="callout">
        <div class="callout-label">FINAL POSTURE</div>
        <p><strong>A Legacy of Commitment®</strong> is built on measured decisions, not emotional ones. This acquisition is a wealth decision — it must be executed the same way the Norris Utilities® business is executed: with documentation, with third-party verification, with clear walk-away criteria, and with every concession in writing.</p>
        <p>Close on the number that makes sense — or do not close.</p>
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
      Prepared April 20, 2026 &middot; Personal &amp; Confidential &middot; Negotiation Playbook
    </div>
  </footer>

</body>
</html>