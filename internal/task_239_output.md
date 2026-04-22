<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
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
      background: var(--nu-light-gray);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      background-size: 60px 60px, 80px 80px;
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
      width: 72px;
      height: 72px;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 280px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 720px; height: 720px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 32px 20px;
    }

    /* DOC HEAD */
    .doc-head {
      text-align: center;
      padding-bottom: 32px;
      margin-bottom: 40px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-eyebrow {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 3px;
      margin-bottom: 16px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-sub {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .doc-meta {
      display: inline-flex;
      gap: 22px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 18px;
      font-size: 0.88rem;
      color: #666;
    }
    .doc-meta strong { color: var(--nu-dark-text); font-weight: 700; }

    /* SECTION */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      color: var(--nu-blue);
      letter-spacing: 0.01em;
    }
    .nu-section-title span { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-lead {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 22px;
      max-width: 860px;
    }

    /* PROPERTY SNAPSHOT */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .snapshot-cell {
      background: var(--nu-white);
      padding: 22px 18px;
      text-align: center;
    }
    .snap-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .snap-value {
      font-size: 1.55rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }
    .snap-unit {
      font-size: 0.82rem;
      color: #777;
      font-weight: 400;
      margin-top: 4px;
    }

    /* BADGES */
    .nu-badge-row { display: flex; flex-direction: column; gap: 10px; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      width: 28px; height: 28px;
      display: inline-flex; align-items: center; justify-content: center;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .nu-card.cyan { border-top-color: var(--nu-cyan); }
    .nu-card.gold { border-top-color: var(--nu-accent-gold); }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .nu-card ul { list-style: none; padding: 0; margin: 0; }
    .nu-card ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.95rem;
      border-bottom: 1px solid var(--nu-light-gray);
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '';
      position: absolute;
      left: 0; top: 16px;
      width: 10px; height: 10px;
      background: var(--nu-cyan);
      transform: rotate(45deg);
    }
    .nu-card ul li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      font-size: 0.94rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.05em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table td strong { color: var(--nu-dark-text); }
    .price-col { text-align: right; font-weight: 700; color: var(--nu-blue); white-space: nowrap; }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
      margin-top: 12px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .tl-item {
      position: relative;
      margin-bottom: 22px;
      padding-left: 22px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -26px; top: 4px;
      width: 16px; height: 16px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .tl-phase {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .tl-title {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .tl-body { font-size: 0.94rem; color: var(--nu-body-text); }

    /* OFFER LADDER */
    .ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 14px;
    }
    .rung {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px;
      text-align: center;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .rung:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
    .rung.mid {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      border-color: var(--nu-blue);
    }
    .rung.mid .rung-label,
    .rung.mid .rung-note { color: rgba(255,255,255,0.85); }
    .rung.mid .rung-value { color: var(--nu-white); }
    .rung-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .rung-value {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .rung-note {
      font-size: 0.86rem;
      color: #666;
      line-height: 1.45;
    }
    .rung-pin {
      display: inline-block;
      position: absolute;
      top: -12px; left: 50%;
      transform: translateX(-50%);
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      padding: 4px 12px;
      border-radius: 20px;
      text-transform: uppercase;
    }

    /* CHECKLIST */
    .checklist {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
    }
    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      font-size: 0.94rem;
    }
    .check-box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #0033cc08 0%, #06d0ff0f 100%);
      border: 1px solid #0000ff1a;
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 26px;
      margin: 24px 0;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout p { font-size: 0.98rem; color: var(--nu-dark-text); }

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
      font-size: 1.15rem;
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
    .nu-footer-rule {
      width: 60px; height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
      opacity: 0.6;
    }

    /* RESPONSIVE */
    @media (max-width: 820px) {
      .two-col { grid-template-columns: 1fr; }
      .ladder { grid-template-columns: 1fr; }
      .doc-title { font-size: 1.7rem; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 20px 20px; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .nu-table { font-size: 0.85rem; }
      .nu-table th, .nu-table td { padding: 10px 10px; }
    }

    /* PRINT */
    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-table, .snapshot-grid { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .rung:hover { transform: none; box-shadow: none; }
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
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC HEAD -->
      <div class="doc-head">
        <span class="doc-eyebrow">Confidential — Internal Strategy</span>
        <h1 class="doc-title">Estate Acquisition Strategy<br><span>4505 Buttewoods</span></h1>
        <p class="doc-sub">Negotiation plan for the 7,098 sq ft estate acquisition</p>
        <div class="doc-meta">
          <span><strong>Prepared For:</strong> Aaron C. Norris, Founder &amp; CEO</span>
          <span><strong>Prepared:</strong> April 22, 2026</span>
          <span><strong>Status:</strong> Active Negotiation</span>
        </div>
      </div>

      <!-- SECTION: PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <p class="nu-section-lead">Reference facts drawn from the source listing. Verify every figure against the MLS sheet, county records, and any seller disclosures before any written offer is submitted.</p>
        <div class="snapshot-grid">
          <div class="snapshot-cell">
            <div class="snap-label">Address</div>
            <div class="snap-value" style="font-size:1.15rem;">4505 Buttewoods</div>
            <div class="snap-unit">Subject estate</div>
          </div>
          <div class="snapshot-cell">
            <div class="snap-label">Living Area</div>
            <div class="snap-value">7,098</div>
            <div class="snap-unit">square feet</div>
          </div>
          <div class="snapshot-cell">
            <div class="snap-label">Property Type</div>
            <div class="snap-value" style="font-size:1.15rem;">Estate</div>
            <div class="snap-unit">Single-family residence</div>
          </div>
          <div class="snapshot-cell">
            <div class="snap-label">Transaction</div>
            <div class="snap-value" style="font-size:1.15rem;">Purchase</div>
            <div class="snap-unit">Negotiated acquisition</div>
          </div>
        </div>

        <div class="callout">
          <div class="callout-title">Source Of Record</div>
          <p>This action item originated from Aaron's reMarkable capture dated 2026-04-22. Before moving to written offer, confirm lot size, year built, last sale, tax assessment, and any HOA or easement notes with the listing agent and the county assessor. Do not approximate square footage — use the recorded figure on the deed.</p>
        </div>
      </section>

      <!-- SECTION: STRATEGIC OBJECTIVES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Strategic <span>Objectives</span></h2>
        <p class="nu-section-lead">What a successful negotiation has to deliver — in priority order. Anything below the line is a trade chip; anything above is a walk-away condition.</p>

        <div class="nu-badge-row">
          <div class="nu-badge"><span class="nu-badge-num">1</span>Acquire the property at a price that leaves room for capital improvements without overleveraging cash reserves</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>Preserve operating capital for Norris Utilities® inventory, FlexPro Armor tooling, and the Skylift PO pipeline</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>Secure contingency protection — inspection, financing, appraisal, and clean title — no waived contingencies</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>Close on a timeline that aligns with the business cash-flow cycle and avoids distressed borrowing</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span>Structure terms to protect personal liability separately from Norris Utilities, LLC balance sheet exposure</div>
        </div>
      </section>

      <!-- SECTION: OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title">Offer <span>Ladder</span></h2>
        <p class="nu-section-lead">A three-rung bid framework. Opening, target, and ceiling are set only after broker-priced-opinion (BPO) and comparable sales (CMA) pull — the percentages below are Aaron's default negotiating posture, not the final numbers.</p>

        <div class="ladder">
          <div class="rung">
            <div class="rung-label">Opening Offer</div>
            <div class="rung-value">−12% to −15%</div>
            <div class="rung-note">Below list (or below BPO, whichever is lower). Anchors the conversation. Submit with earnest money and a clean contingency package.</div>
          </div>
          <div class="rung mid">
            <span class="rung-pin">Target</span>
            <div class="rung-label">Target Close</div>
            <div class="rung-value">−5% to −8%</div>
            <div class="rung-note">Where Aaron wants to land. Defensible by comps and inspection findings — the number that still hits the return threshold.</div>
          </div>
          <div class="rung">
            <div class="rung-label">Walk-Away Ceiling</div>
            <div class="rung-value">List / BPO</div>
            <div class="rung-note">Absolute maximum. Never pay over appraisal without a written, signed, and data-backed reason. If the seller won't close here, the deal dies.</div>
          </div>
        </div>

        <div class="callout" style="margin-top:28px;">
          <div class="callout-title">Pricing Discipline</div>
          <p>The opening number exists to create movement. The target is where the deal closes. The ceiling is the line Aaron does not cross — not for the right school district, not for a sentimental feature, not to avoid "losing" the deal. Discipline here is what keeps Norris Utilities® capital intact.</p>
        </div>
      </section>

      <!-- SECTION: LEVERAGE ANALYSIS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Leverage <span>Analysis</span></h2>
        <p class="nu-section-lead">Where each side has strength. Push on their weaknesses; defend your own.</p>

        <div class="two-col">
          <div class="nu-card">
            <h3>Our Leverage</h3>
            <ul>
              <li><strong>Qualified buyer.</strong> Pre-approval letter or proof of funds ready before offer submission</li>
              <li><strong>Flexible close date.</strong> Can accommodate seller's timeline — a genuine concession worth real dollars</li>
              <li><strong>Clean offer discipline.</strong> No contingency waiver, but no frivolous ones either</li>
              <li><strong>Cash reserves.</strong> Ability to cover appraisal gap up to a pre-set limit if it serves the target</li>
              <li><strong>Market data.</strong> Recent comparable sales in the submarket support a below-list entry point</li>
              <li><strong>No home to sell.</strong> Offer is not contingent on disposing of another property</li>
            </ul>
          </div>
          <div class="nu-card cyan">
            <h3>Seller Leverage (and how we blunt it)</h3>
            <ul>
              <li><strong>Scarcity of 7,098 sq ft estates.</strong> Neutralize by naming two alternative properties in writing</li>
              <li><strong>Multiple offers (real or claimed).</strong> Require written proof before escalating — "best and final" demands must be verified</li>
              <li><strong>Emotional attachment to list price.</strong> Anchor the conversation to appraisal and comps, not their list</li>
              <li><strong>Strong market narrative.</strong> Counter with sold-price (not list-price) data; ignore days-on-market spin</li>
              <li><strong>Preferred close timing.</strong> Match it freely — this concession costs nothing and is worth real basis points</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Due-Diligence <span>Pull List</span></h2>
        <p class="nu-section-lead">Before any written offer goes out, confirm every line item below. A 7,098 sq ft estate moves a lot of dollars — you earn them back in diligence, not in the closing room.</p>

        <table class="nu-table">
          <thead>
            <tr>
              <th style="width:32%;">Item</th>
              <th>What To Confirm</th>
              <th style="width:22%;">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Recorded square footage</strong></td>
              <td>Does 7,098 match county assessor, deed, and last appraisal? Reconcile any variance before offer</td>
              <td>County assessor, prior appraisal</td>
            </tr>
            <tr>
              <td><strong>Title &amp; encumbrances</strong></td>
              <td>Liens, judgments, unreleased mortgages, HOA liens, unpaid taxes, easements, restrictive covenants</td>
              <td>Title company preliminary report</td>
            </tr>
            <tr>
              <td><strong>Tax assessment &amp; history</strong></td>
              <td>Current millage, any reassessment triggered by sale, homestead status, pending special assessments</td>
              <td>Tax collector, county records</td>
            </tr>
            <tr>
              <td><strong>Sale history</strong></td>
              <td>Last recorded sale price, date, and any short-sale or foreclosure history — sets realistic bid ceiling</td>
              <td>MLS history, county records</td>
            </tr>
            <tr>
              <td><strong>Inspection scope</strong></td>
              <td>General, HVAC, roof, foundation, termite, septic or sewer, pool, well, radon — scope to the house</td>
              <td>Licensed inspector(s)</td>
            </tr>
            <tr>
              <td><strong>Insurance &amp; hazard</strong></td>
              <td>Flood zone status, wind/hail exposure, prior claims (CLUE report), cost to insure at close</td>
              <td>Insurance agent, CLUE report</td>
            </tr>
            <tr>
              <td><strong>Utilities &amp; carrying cost</strong></td>
              <td>Average 12-month power, water, gas bills — a 7,098 sq ft home is expensive to run; model it</td>
              <td>Seller disclosure, utility companies</td>
            </tr>
            <tr>
              <td><strong>HOA / covenants</strong></td>
              <td>Dues, assessments, architectural review, rental restrictions, pending litigation</td>
              <td>HOA management</td>
            </tr>
            <tr>
              <td><strong>Permits &amp; code compliance</strong></td>
              <td>Permits pulled for additions, finished basement, pool, outbuildings; any open permits must close pre-sale</td>
              <td>Municipal building department</td>
            </tr>
            <tr>
              <td><strong>Comparable sales (CMA)</strong></td>
              <td>Minimum three closed comps within 0.5–1.0 miles in the last six months — sold, not listed</td>
              <td>Buyer's agent, MLS pull</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION: NEGOTIATION TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Timeline</span></h2>
        <p class="nu-section-lead">Sequence of engagement. Each phase has a trigger to advance and a trigger to walk.</p>

        <div class="timeline">
          <div class="tl-item">
            <div class="tl-phase">Phase 1 — Diligence &amp; Setup</div>
            <div class="tl-title">Pull comps, engage buyer's agent, confirm financing</div>
            <div class="tl-body">Complete the full due-diligence pull list. Lock pre-approval or proof of funds. Interview and retain a buyer's agent with a fiduciary duty to Aaron — not a dual agent.</div>
          </div>
          <div class="tl-item">
            <div class="tl-phase">Phase 2 — Opening Offer</div>
            <div class="tl-title">Submit written offer at opening rung</div>
            <div class="tl-body">Offer, earnest money, pre-approval, and a short, professional cover letter. Contingencies preserved: inspection, financing, appraisal, clean title. Response window: 48–72 hours.</div>
          </div>
          <div class="tl-item">
            <div class="tl-phase">Phase 3 — Counter &amp; Response</div>
            <div class="tl-title">Evaluate counter, close gap toward target</div>
            <div class="tl-body">If seller counters above the ceiling: decline, restate position in writing, reference comps. If counter lands between opening and target: one responsive move, not two.</div>
          </div>
          <div class="tl-item">
            <div class="tl-phase">Phase 4 — Under Contract</div>
            <div class="tl-title">Inspection period, appraisal, renegotiation window</div>
            <div class="tl-body">Inspections, appraisal, and title work run in parallel. Material defects reopen price — not cosmetic ones. Do not re-trade on items we already knew about.</div>
          </div>
          <div class="tl-item">
            <div class="tl-phase">Phase 5 — Close</div>
            <div class="tl-title">Clear to close, final walk-through, funding</div>
            <div class="tl-body">Final walk-through within 24 hours of closing. Review settlement statement line-by-line against the contract. Fund, record, take possession per contract terms.</div>
          </div>
        </div>
      </section>

      <!-- SECTION: RISK & RED LINES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Risks &amp; <span>Red Lines</span></h2>
        <p class="nu-section-lead">Known risks on this type of acquisition and the non-negotiable positions that protect Aaron.</p>

        <div class="two-col">
          <div class="nu-card gold">
            <h3>Primary Risks</h3>
            <ul>
              <li><strong>Appraisal gap.</strong> A 7,098 sq ft home can over-appraise on list and under-appraise in a cooling market</li>
              <li><strong>Carrying cost surprise.</strong> Utilities, insurance, and property tax on a home this size can exceed the mortgage payment</li>
              <li><strong>Deferred maintenance.</strong> Older estates accumulate five- and six-figure deferred-maintenance line items</li>
              <li><strong>Illiquid asset.</strong> Properties at this size have a shallower buyer pool on resale — price in the exit, not just the entry</li>
              <li><strong>Title defects.</strong> Unreleased mortgages, easements, and inherited-property clouds are more common at this price point</li>
              <li><strong>Scope creep.</strong> Sellers who accept a discounted price sometimes strip fixtures or leave junk — spell it out in the contract</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Non-Negotiable Red Lines</h3>
            <ul>
              <li><strong>No waived inspection.</strong> Ever. Non-negotiable regardless of market pressure</li>
              <li><strong>No waived appraisal.</strong> Cap appraisal gap coverage at a pre-set figure, never open-ended</li>
              <li><strong>No waived financing contingency</strong> unless paying all cash and can prove it</li>
              <li><strong>Clean, insurable title</strong> at close — no title exceptions accepted without written review</li>
              <li><strong>No purchase over appraised value</strong> without a written, data-backed business reason</li>
              <li><strong>Personal name — not Norris Utilities, LLC</strong> — unless formally structured as a business real-estate holding</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Immediate <span>Next Actions</span></h2>
        <p class="nu-section-lead">The punch list for the next 72 hours. Each item has a clear owner. Nothing sits.</p>

        <div class="checklist">
          <div class="check-item"><div class="check-box"></div><div><strong>Retain buyer's agent</strong> (fiduciary to Aaron — not dual agency)</div></div>
          <div class="check-item"><div class="check-box"></div><div><strong>Lock pre-approval</strong> or document proof of funds</div></div>
          <div class="check-item"><div class="check-box"></div><div><strong>Order full CMA</strong> — minimum three closed comps, last six months</div></div>
          <div class="check-item"><div class="check-box"></div><div><strong>Pull county records</strong> — deed, tax history, last sale, permits</div></div>
          <div class="check-item"><div class="check-box"></div><div><strong>Request MLS sheet</strong> and any seller disclosures</div></div>
          <div class="check-item"><div class="check-box"></div><div><strong>Model carrying cost</strong> — mortgage + tax + insurance + utilities</div></div>
          <div class="check-item"><div class="check-box"></div><div><strong>Confirm holding entity</strong> — personal name vs. separate RE LLC</div></div>
          <div class="check-item"><div class="check-box"></div><div><strong>Set opening, target, ceiling</strong> in writing before any contact with seller</div></div>
          <div class="check-item"><div class="check-box"></div><div><strong>Draft offer package</strong> — contract, earnest money, pre-approval, cover</div></div>
          <div class="check-item"><div class="check-box"></div><div><strong>Schedule pre-offer walkthrough</strong> — verify condition matches listing</div></div>
        </div>
      </section>

      <!-- SECTION: DECISION FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title">Decision <span>Framework</span></h2>
        <p class="nu-section-lead">A short, testable standard for go/no-go at each inflection point. If the answer to any of these is "no," the deal pauses until it flips.</p>

        <table class="nu-table">
          <thead>
            <tr>
              <th style="width:35%;">Checkpoint</th>
              <th>Go / No-Go Question</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Before Opening Offer</strong></td>
              <td>Do comps, CMA, and carrying-cost model support the target price? Is the walk-away ceiling set and written down?</td>
            </tr>
            <tr>
              <td><strong>Before Counter-Response</strong></td>
              <td>Does the counter move us toward target, or does it anchor above ceiling? Would accepting increase discipline risk?</td>
            </tr>
            <tr>
              <td><strong>Post-Inspection</strong></td>
              <td>Are material defects present? Does repair/credit offset make sense, or is the deferred-maintenance load too heavy?</td>
            </tr>
            <tr>
              <td><strong>Post-Appraisal</strong></td>
              <td>Did the home appraise at or above contract? If not, does seller reduce, or is gap coverage within pre-set limit?</td>
            </tr>
            <tr>
              <td><strong>Pre-Close</strong></td>
              <td>Is title clean and insurable? Walk-through satisfactory? Settlement statement matches contract line-for-line?</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- PRINCIPLES -->
      <section class="nu-section">
        <div class="callout">
          <div class="callout-title">Aaron's Negotiation Principles</div>
          <p><strong>Lead with respect, not posture.</strong> Sellers remember how buyers made them feel. Make every written communication professional, unambiguous, and signed. Do not negotiate by text. Do not negotiate on weekends unless the seller's side initiates. Once an offer is in writing, don't re-trade without new information. The property either pencils at the target or it doesn't — and "A Legacy of Commitment®" applies to the word we give as buyers as much as to the word we give as sellers.</p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-rule"></div>
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