<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods Lane — Norris Utilities®</title>
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
      --nu-success: #0B7D3E;
      --nu-warning: #B8860B;
      --nu-danger: #A8211E;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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

    /* HEADER — Line Card Gradient */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 28%, #0066ee 55%, #00aaff 82%, var(--nu-cyan) 100%);
      padding: 70px 40px 100px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -20%;
      width: 80%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
      pointer-events: none;
    }
    .nu-header > * { position: relative; z-index: 2; }

    /* Ghost Phoenix Watermark */
    .nu-phoenix-ghost {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* White Chevron Transition */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 60px; display: block; }

    /* Page Title Bar */
    .nu-title-bar {
      background: var(--nu-white);
      padding: 36px 40px 28px;
      text-align: center;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-title-bar h1 {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      margin-bottom: 8px;
    }
    .nu-title-bar h1 .first-word { color: #0033cc; }
    .nu-title-bar .nu-subtitle {
      color: var(--nu-body-text);
      font-size: 1rem;
      font-weight: 400;
      max-width: 720px;
      margin: 0 auto;
    }
    .nu-status-pill {
      display: inline-block;
      background: linear-gradient(135deg, var(--nu-warning), #d4a017);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 6px 16px;
      border-radius: 20px;
      margin-bottom: 14px;
    }

    /* Main Content */
    .nu-main {
      max-width: 1100px;
      margin: 0 auto;
      padding: 48px 28px 64px;
    }

    .nu-section {
      background: var(--nu-white);
      border-radius: 10px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 28px;
      overflow: hidden;
    }
    .nu-section-head {
      padding: 22px 28px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-dark-text);
      letter-spacing: 0;
    }
    .nu-section-title .accent { color: #0033cc; }
    .nu-section-body { padding: 24px 28px 28px; }

    /* Property Snapshot Grid */
    .nu-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 18px;
    }
    .nu-stat {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 18px 16px;
      border-left: 4px solid var(--nu-cyan);
    }
    .nu-stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .nu-stat-value {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-stat-sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* Chevron Badge Objectives */
    .nu-badge-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* Negotiation Playbook Cards */
    .nu-play-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .nu-play-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-play-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-play-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-play-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-play-card li {
      position: relative;
      padding-left: 16px;
      font-size: 0.92rem;
      margin-bottom: 6px;
      color: var(--nu-body-text);
    }
    .nu-play-card li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 0;
    }

    /* Offer Scenario Table */
    .nu-table-wrap { overflow-x: auto; }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    table.nu-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    table.nu-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .scenario-tag {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 12px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .tag-anchor { background: #ffebd6; color: #8a4b00; }
    .tag-target { background: #d6f5ff; color: #005a7a; }
    .tag-walkaway { background: #ffd6d6; color: #7a0000; }

    /* Timeline */
    .nu-timeline {
      position: relative;
      padding-left: 28px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .nu-timeline-item {
      position: relative;
      margin-bottom: 18px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -26px; top: 6px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .nu-timeline-date {
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 3px;
    }
    .nu-timeline-title {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 3px;
    }
    .nu-timeline-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* Risk / Checklist */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 10px 0 10px 30px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 12px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* Callout */
    .nu-callout {
      background: linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 18px 0;
    }
    .nu-callout strong { color: #7a5a00; }

    .nu-callout.danger {
      background: linear-gradient(135deg, #fff0f0 0%, #ffe0e0 100%);
      border-left-color: var(--nu-danger);
    }
    .nu-callout.danger strong { color: #7a0000; }

    .nu-callout.info {
      background: linear-gradient(135deg, #e6f4ff 0%, #d0ebff 100%);
      border-left-color: var(--nu-blue);
    }
    .nu-callout.info strong { color: #002a7a; }

    /* Contact Grid */
    .nu-contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .nu-contact {
      padding: 14px 16px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border-left: 3px solid var(--nu-blue);
    }
    .nu-contact-role {
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      font-weight: 700;
    }
    .nu-contact-name {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin: 3px 0;
    }
    .nu-contact-detail {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* Footer */
    .nu-footer {
      background: linear-gradient(135deg, #000033 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 32px 36px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.82rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.02em;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-title-bar h1 { font-size: 1.5rem; }
      .nu-main { padding: 28px 16px 48px; }
      .nu-section-body { padding: 20px 18px 22px; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .nu-footer-contact { font-size: 0.94rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-section { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-ghost" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- TITLE BAR -->
  <div class="nu-title-bar">
    <div class="nu-status-pill">Active Negotiation — Personal</div>
    <h1><span class="first-word">Estate</span> Acquisition — 4505 Buttewoods Lane</h1>
    <div class="nu-subtitle">
      Action-item brief for the purchase negotiation on the 7,098 sq ft estate at 4505 Buttewoods.
      Pulled from reMarkable field notes. Drafted for Aaron's decision-making — no commitments without signed Buyer Representation Agreement and attorney review.
    </div>
  </div>

  <!-- MAIN -->
  <main class="nu-main">

    <!-- PROPERTY SNAPSHOT -->
    <section class="nu-section">
      <div class="nu-section-head">
        <div class="nu-section-title"><span class="accent">Property</span> Snapshot</div>
      </div>
      <div class="nu-section-body">
        <div class="nu-snapshot">
          <div class="nu-stat">
            <div class="nu-stat-label">Address</div>
            <div class="nu-stat-value">4505 Buttewoods Ln</div>
            <div class="nu-stat-sub">Primary target — verify spelling on deed vs. "Buttewoods / Buttonwoods"</div>
          </div>
          <div class="nu-stat">
            <div class="nu-stat-label">Gross Living Area</div>
            <div class="nu-stat-value">7,098 sq ft</div>
            <div class="nu-stat-sub">Estate-class; confirm with tax assessor and MLS sheet</div>
          </div>
          <div class="nu-stat">
            <div class="nu-stat-label">Asset Class</div>
            <div class="nu-stat-value">Single-family estate</div>
            <div class="nu-stat-sub">Owner-occupied acquisition scenario assumed</div>
          </div>
          <div class="nu-stat">
            <div class="nu-stat-label">Deal Stage</div>
            <div class="nu-stat-value">Negotiate Offer</div>
            <div class="nu-stat-sub">Pre-contract — no LOI submitted as of 2026-04-22</div>
          </div>
        </div>

        <div class="nu-callout info" style="margin-top: 22px;">
          <strong>Data-verification task before any offer:</strong> pull full county tax card, prior deed (grantor/grantee chain last 10 years),
          outstanding liens/mortgages, easements, HOA status, flood zone, and permit history. Any figure in this brief marked <em>"verify"</em>
          must be confirmed from primary-source documents before it enters a written offer.
        </div>
      </div>
    </section>

    <!-- NEGOTIATION OBJECTIVES -->
    <section class="nu-section">
      <div class="nu-section-head">
        <div class="nu-section-title"><span class="accent">Negotiation</span> Objectives</div>
      </div>
      <div class="nu-section-body">
        <div class="nu-badge-list">
          <div class="nu-badge"><span class="nu-badge-num">1</span>Acquire at or below verified market value per independent appraisal</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>Structure terms that preserve Norris Utilities®, LLC operating cash — no personal-side pressure on business liquidity</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>Secure inspection, financing, and title contingencies — keep earnest money protected</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>Close on a timeline that matches lender commitment, not seller pressure</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span>Document every counter in writing — no verbal concessions on price or credits</div>
        </div>
      </div>
    </section>

    <!-- PRE-OFFER INTEL -->
    <section class="nu-section">
      <div class="nu-section-head">
        <div class="nu-section-title"><span class="accent">Pre-Offer</span> Intel to Pull</div>
      </div>
      <div class="nu-section-body">
        <div class="nu-play-grid">
          <div class="nu-play-card">
            <h3>Title &amp; Ownership</h3>
            <ul>
              <li>Current deed holder (grantee) &amp; date of acquisition</li>
              <li>Prior 2018 deed if chain touches Compass Bank → McKnight (cross-check Task 280 note)</li>
              <li>Open mortgages, HELOCs, mechanic's liens, judgments</li>
              <li>Easements — utility, drainage, access</li>
              <li>HOA/subdivision covenants &amp; assessments</li>
            </ul>
          </div>
          <div class="nu-play-card">
            <h3>Valuation Inputs</h3>
            <ul>
              <li>Tax assessor appraised value (current + 3-year trend)</li>
              <li>Three comparable sales ≥ 5,500 sq ft within 2 miles, last 12 months</li>
              <li>Active listings competing at same size band</li>
              <li>Days-on-market for seller's listing — leverage signal</li>
              <li>Independent appraisal ordered through lender-approved AMC</li>
            </ul>
          </div>
          <div class="nu-play-card">
            <h3>Physical Condition</h3>
            <ul>
              <li>Roof age, HVAC systems, water heaters</li>
              <li>Foundation &amp; drainage inspection (estate-class liability)</li>
              <li>Pool/spa, outbuildings, generator — condition &amp; warranties</li>
              <li>Radon, termite, mold — standard Alabama protocol</li>
              <li>Permit history — unpermitted additions kill appraisals</li>
            </ul>
          </div>
          <div class="nu-play-card">
            <h3>Seller Motivation</h3>
            <ul>
              <li>Reason for sale — relocation, estate, downsize, distress</li>
              <li>Listing history — prior price drops, withdrawn listings</li>
              <li>Closing timeline they need vs. the one they want</li>
              <li>Concessions already offered to other buyers (ask listing agent)</li>
              <li>Whether home is vacant, occupied, or tenant-held</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- OFFER STRATEGY TABLE -->
    <section class="nu-section">
      <div class="nu-section-head">
        <div class="nu-section-title"><span class="accent">Offer</span> Strategy — Three-Number Framework</div>
      </div>
      <div class="nu-section-body">
        <p style="margin-bottom: 16px;">
          Before any written offer, Aaron defines three numbers based on verified comps and appraisal.
          The table below is the <em>structure</em> — actual dollar figures filled in once valuation data is in hand.
          Discipline rule: walk-away price is decided in writing <strong>before</strong> the first counter, not during it.
        </p>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width: 18%;">Scenario</th>
                <th style="width: 22%;">Price Anchor</th>
                <th style="width: 30%;">Purpose</th>
                <th style="width: 30%;">Trigger to Move</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="scenario-tag tag-anchor">Opening</span></td>
                <td>Appraised value − 8% to 12%</td>
                <td>Anchor low, leave room to raise without crossing target</td>
                <td>Never the first verbal number — always written, with contingencies attached</td>
              </tr>
              <tr>
                <td><span class="scenario-tag tag-target">Target</span></td>
                <td>Appraised value − 3% to 5%</td>
                <td>Where Aaron is happy to sign — bracket the market</td>
                <td>Reach here only if inspection clean, title clean, financing confirmed</td>
              </tr>
              <tr>
                <td><span class="scenario-tag tag-walkaway">Walk-Away</span></td>
                <td>Appraised value flat</td>
                <td>Absolute ceiling — no emotion crosses this line</td>
                <td>If seller won't meet it, the deal is dead. No exceptions.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="nu-callout">
          <strong>Written rule:</strong> every counter is delivered through the buyer's agent / closing attorney in writing.
          No price commitments by phone. No "we can work it out at closing" handshakes. Paper or it didn't happen.
        </div>
      </div>
    </section>

    <!-- TERM LEVERS -->
    <section class="nu-section">
      <div class="nu-section-head">
        <div class="nu-section-title"><span class="accent">Term</span> Levers Beyond Price</div>
      </div>
      <div class="nu-section-body">
        <p style="margin-bottom: 14px;">
          Price is one variable. On an estate this size the <em>terms</em> often move the deal more than another $10K.
          Use these levers selectively — give on what costs least, hold firm on what protects you most.
        </p>
        <div class="nu-play-grid">
          <div class="nu-play-card">
            <h3>Levers to Offer</h3>
            <ul>
              <li>Faster close (if lender is ready)</li>
              <li>Larger earnest money — shows seriousness, still refundable on contingency failure</li>
              <li>Proof-of-funds letter up front</li>
              <li>Flexibility on seller's post-close occupancy (leaseback 15–30 days)</li>
              <li>As-is on cosmetic items (never structural)</li>
            </ul>
          </div>
          <div class="nu-play-card">
            <h3>Levers to Request</h3>
            <ul>
              <li>Seller-paid closing costs (1%–3% of price)</li>
              <li>Home warranty (1 year, seller-paid)</li>
              <li>Repair credit in lieu of seller doing work</li>
              <li>Inclusion of appliances, generator, outdoor equipment</li>
              <li>Survey paid by seller if boundary uncertainty exists</li>
            </ul>
          </div>
          <div class="nu-play-card">
            <h3>Levers to Hold Firm</h3>
            <ul>
              <li>Inspection contingency — minimum 10 business days</li>
              <li>Financing contingency through commitment</li>
              <li>Appraisal contingency — right to renegotiate or walk if low</li>
              <li>Title contingency — clean title or no deal</li>
              <li>Right to re-inspect within 48 hours of closing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="nu-section">
      <div class="nu-section-head">
        <div class="nu-section-title"><span class="accent">Target</span> Timeline</div>
      </div>
      <div class="nu-section-body">
        <div class="nu-timeline">
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Week 1 — Intel</div>
            <div class="nu-timeline-title">Verification Pack Assembled</div>
            <div class="nu-timeline-body">
              Tax card, deed chain, comps, HOA docs, flood zone pulled.
              Buyer's agent engaged with written Buyer Representation Agreement. Closing attorney identified.
            </div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Week 2 — Walkthrough</div>
            <div class="nu-timeline-title">Private Showing &amp; Seller Motivation Read</div>
            <div class="nu-timeline-body">
              Aaron walks property with agent; takes condition notes independent of MLS description.
              Agent pulls listing-agent intel: why selling, how flexible, other offers.
            </div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Week 3 — Financing</div>
            <div class="nu-timeline-title">Pre-Approval &amp; Proof-of-Funds</div>
            <div class="nu-timeline-body">
              Full mortgage pre-approval letter (not pre-qualification). Proof-of-funds for earnest + down payment.
              Rate lock options priced.
            </div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Week 4 — Offer</div>
            <div class="nu-timeline-title">Written Offer at Opening Anchor</div>
            <div class="nu-timeline-body">
              Offer drafted with full contingency package. Submitted by buyer's agent in writing with deadline for seller response (48–72 hrs).
            </div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Weeks 5–6 — Counter / Contract</div>
            <div class="nu-timeline-title">Counter Rounds, Then Under Contract</div>
            <div class="nu-timeline-body">
              Expect 1–3 counters. Every counter in writing. Land between Opening and Target; never above Walk-Away.
              Contract executed with attorney review in parallel.
            </div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Weeks 7–10 — Due Diligence</div>
            <div class="nu-timeline-title">Inspections, Appraisal, Title</div>
            <div class="nu-timeline-body">
              Full home inspection + specialty inspections (foundation, roof, HVAC). Appraisal ordered through lender.
              Title search and commitment reviewed by attorney. Repair requests negotiated in writing.
            </div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Weeks 11–12 — Close</div>
            <div class="nu-timeline-title">Clear-to-Close &amp; Signing</div>
            <div class="nu-timeline-body">
              Final walkthrough 24–48 hours before close. Wire instructions verified by phone to attorney (never by email).
              Keys, garage remotes, alarm codes handed over at table.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RISK REGISTER -->
    <section class="nu-section">
      <div class="nu-section-head">
        <div class="nu-section-title"><span class="accent">Risk</span> Register &amp; Mitigations</div>
      </div>
      <div class="nu-section-body">
        <ul class="nu-checklist">
          <li><strong>Wire fraud.</strong> Verify wire instructions by phone with closing attorney from a known number. Never trust emailed changes.</li>
          <li><strong>Low appraisal.</strong> Appraisal contingency preserves the right to renegotiate or walk without losing earnest money.</li>
          <li><strong>Title defects.</strong> Owner's title insurance policy, not just lender's. Attorney reviews exceptions before closing.</li>
          <li><strong>Undisclosed defects.</strong> Specialty inspections on foundation, roof, HVAC, pool; document condition independent of seller's disclosures.</li>
          <li><strong>HOA surprises.</strong> Pull current assessment letter, covenants, and minutes. Confirm no pending special assessments.</li>
          <li><strong>Survey / boundary.</strong> Order a new survey — old surveys miss encroachments that block title insurance.</li>
          <li><strong>Emotional drift past walk-away.</strong> Walk-away number committed in writing before round one. No exceptions, even if Aaron wants the house.</li>
          <li><strong>Norris Utilities® operating cash.</strong> Personal real-estate purchase cannot touch business liquidity. Verify separation with CPA before signing.</li>
        </ul>

        <div class="nu-callout danger">
          <strong>Hard stop:</strong> if the seller (or their agent) asks for any price commitment, earnest release, or contingency waiver
          by phone, on text, or in person — the answer is "I'll get that to you in writing through my agent." Nothing else. This rule applies
          even if the seller is a friend or a known acquaintance.
        </div>
      </div>
    </section>

    <!-- TEAM / CONTACTS -->
    <section class="nu-section">
      <div class="nu-section-head">
        <div class="nu-section-title"><span class="accent">Deal</span> Team Roles</div>
      </div>
      <div class="nu-section-body">
        <div class="nu-contact-grid">
          <div class="nu-contact">
            <div class="nu-contact-role">Buyer / Principal</div>
            <div class="nu-contact-name">Aaron C. Norris</div>
            <div class="nu-contact-detail">Final decision on price, terms, walk-away. Sole signatory.</div>
          </div>
          <div class="nu-contact">
            <div class="nu-contact-role">Buyer's Agent</div>
            <div class="nu-contact-name">To be engaged</div>
            <div class="nu-contact-detail">Written Buyer Representation Agreement required before showings. Estate-tier experience preferred.</div>
          </div>
          <div class="nu-contact">
            <div class="nu-contact-role">Closing Attorney</div>
            <div class="nu-contact-name">To be engaged</div>
            <div class="nu-contact-detail">Alabama-licensed. Reviews contract, title commitment, closing docs.</div>
          </div>
          <div class="nu-contact">
            <div class="nu-contact-role">Lender</div>
            <div class="nu-contact-name">Patrick Lavette — Renasant Bank</div>
            <div class="nu-contact-detail">Existing banking relationship. Pre-approval + rate-lock consult.</div>
          </div>
          <div class="nu-contact">
            <div class="nu-contact-role">CPA / Tax</div>
            <div class="nu-contact-name">Existing CPA of record</div>
            <div class="nu-contact-detail">Confirms personal-vs-business cash separation; advises on property tax and deduction treatment.</div>
          </div>
          <div class="nu-contact">
            <div class="nu-contact-role">Inspector Team</div>
            <div class="nu-contact-name">General + Specialty</div>
            <div class="nu-contact-detail">General home inspector plus roof, foundation, HVAC, and pest specialists — estate-scale requires multiple sets of eyes.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT ACTIONS -->
    <section class="nu-section">
      <div class="nu-section-head">
        <div class="nu-section-title"><span class="accent">Aaron's</span> Next Actions</div>
      </div>
      <div class="nu-section-body">
        <ul class="nu-checklist">
          <li><strong>Confirm property name/spelling.</strong> Resolve "Buttewoods" vs. "Buttonwoods" against county records before any agent call.</li>
          <li><strong>Engage buyer's agent.</strong> Written Buyer Representation Agreement signed before touring.</li>
          <li><strong>Pull tax card + deed chain.</strong> County records lookup; deliver to attorney for preliminary title read.</li>
          <li><strong>Order three comparable-sales reports.</strong> Via buyer's agent — pre-written comp package from MLS.</li>
          <li><strong>Mortgage pre-approval letter.</strong> Call Patrick Lavette at Renasant; request pre-approval in Aaron's personal name, not the LLC.</li>
          <li><strong>Write the walk-away number.</strong> In a sealed envelope or locked note — not shared with agent until counter stage.</li>
          <li><strong>CPA consult.</strong> Confirm personal purchase does not impact Norris Utilities® operating reserves.</li>
          <li><strong>Draft first offer letter.</strong> With attorney review before submission.</li>
        </ul>

        <div class="nu-callout info">
          <strong>Reporting cadence:</strong> Aaron updates Norris Utilities® Brain (Master Tracker) with every milestone.
          No commitments signed without attorney review. No terms changed by phone — paper trail only.
          A Legacy of Commitment® applies to personal dealings too: quiet competence, clean paperwork, no pressure plays.
        </div>
      </div>
    </section>

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
      Internal Brief — Estate Acquisition, 4505 Buttewoods Lane &middot; Generated 2026-04-22 &middot; Source: reMarkable action item
    </div>
  </footer>

</body>
</html>