<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Negotiation Brief — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #1B7A3E;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
      width: 80px; height: 80px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 24px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 20px;
      padding: 8px 20px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 4px;
      color: var(--nu-white);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.2em;
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
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .nu-page-title span { color: var(--nu-blue); }
    .nu-page-meta {
      font-size: 0.95rem;
      color: #666;
      margin-bottom: 32px;
      padding-bottom: 16px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-page-meta strong { color: var(--nu-dark-text); }

    .nu-intro {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 24px 28px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 40px;
      font-size: 1.05rem;
      line-height: 1.7;
    }
    .nu-intro strong { color: var(--nu-blue); }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first-word { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 20px;
      border-radius: 2px;
    }

    /* PROPERTY SUMMARY GRID */
    .nu-summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }
    .nu-summary-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      text-align: center;
    }
    .nu-summary-label {
      font-size: 0.75rem;
      font-weight: 700;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 6px;
    }
    .nu-summary-value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.2;
    }
    .nu-summary-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* OBJECTIVE BOX */
    .nu-objective {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin-bottom: 16px;
      position: relative;
      overflow: hidden;
    }
    .nu-objective::before {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(6,208,255,0.15) 0%, transparent 70%);
    }
    .nu-objective h3 {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 12px;
    }
    .nu-objective p {
      font-size: 1.1rem;
      line-height: 1.6;
      position: relative;
    }
    .nu-objective .target-price {
      display: block;
      margin-top: 16px;
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-cyan);
    }

    /* PRICE LADDER */
    .nu-ladder {
      background: var(--nu-light-gray);
      border-radius: 10px;
      padding: 28px;
    }
    .nu-ladder-row {
      display: grid;
      grid-template-columns: 180px 1fr 140px;
      align-items: center;
      gap: 16px;
      padding: 14px 16px;
      background: var(--nu-white);
      border-radius: 6px;
      margin-bottom: 8px;
      border-left: 4px solid var(--nu-medium-gray);
      transition: transform 0.15s;
    }
    .nu-ladder-row.opening { border-left-color: var(--nu-success); }
    .nu-ladder-row.target  { border-left-color: var(--nu-blue); background: #f0f4ff; }
    .nu-ladder-row.walkaway { border-left-color: var(--nu-danger); }
    .nu-ladder-row.list { border-left-color: var(--nu-warning); }
    .nu-ladder-label {
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-dark-text);
    }
    .nu-ladder-desc {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .nu-ladder-amount {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    .nu-ladder-row.target .nu-ladder-amount { color: var(--nu-blue); font-size: 1.45rem; }
    .nu-ladder-row.walkaway .nu-ladder-amount { color: var(--nu-danger); }
    .nu-ladder-row.list .nu-ladder-amount { color: var(--nu-warning); }

    /* LEVERAGE LIST */
    .nu-leverage-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .nu-leverage-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-leverage-card h4 {
      font-size: 1.0rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-leverage-card p {
      font-size: 0.92rem;
      line-height: 1.55;
      color: var(--nu-body-text);
    }
    .nu-leverage-card .tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      background: #eef2ff;
      color: var(--nu-blue);
      padding: 3px 8px;
      border-radius: 3px;
      margin-bottom: 10px;
    }

    /* CONCESSION TABLE */
    .nu-table-wrap { overflow-x: auto; }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 16px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: left;
    }
    .nu-table td {
      padding: 14px 16px;
      font-size: 0.94rem;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: #fafbff; }
    .nu-table .ask { font-weight: 900; color: var(--nu-blue); white-space: nowrap; }

    /* SCRIPT BLOCK */
    .nu-script {
      background: #fafbff;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 14px;
    }
    .nu-script h4 {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-script p {
      font-size: 0.98rem;
      line-height: 1.65;
      color: var(--nu-dark-text);
      font-style: italic;
    }
    .nu-script p::before { content: '"'; color: var(--nu-cyan); font-size: 1.5em; vertical-align: -0.2em; margin-right: 2px; }
    .nu-script p::after { content: '"'; color: var(--nu-cyan); font-size: 1.5em; vertical-align: -0.2em; margin-left: 2px; }

    /* CHECKLIST */
    .nu-checklist { list-style: none; padding: 0; }
    .nu-checklist li {
      padding: 12px 16px 12px 44px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 8px;
      position: relative;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 16px; top: 50%;
      transform: translateY(-50%);
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* RED FLAGS */
    .nu-flag-list { list-style: none; padding: 0; }
    .nu-flag-list li {
      padding: 14px 18px 14px 48px;
      background: #fff8f8;
      border-left: 4px solid var(--nu-danger);
      border-radius: 0 6px 6px 0;
      margin-bottom: 10px;
      position: relative;
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .nu-flag-list li::before {
      content: '!';
      position: absolute;
      left: 16px; top: 50%;
      transform: translateY(-50%);
      width: 22px; height: 22px;
      border-radius: 50%;
      background: var(--nu-danger);
      color: var(--nu-white);
      text-align: center;
      line-height: 22px;
      font-weight: 900;
      font-size: 0.9rem;
    }

    /* ACTION BAR */
    .nu-action-bar {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
    .nu-action-bar h3 {
      font-size: 1.25rem;
      font-weight: 900;
      margin-bottom: 4px;
    }
    .nu-action-bar p {
      font-size: 0.92rem;
      opacity: 0.92;
    }
    .nu-action-buttons { display: flex; gap: 10px; flex-wrap: wrap; }
    .nu-btn {
      display: inline-block;
      padding: 12px 22px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.9rem;
      text-decoration: none;
      letter-spacing: 0.03em;
      transition: transform 0.15s;
    }
    .nu-btn-primary {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }
    .nu-btn:hover { transform: translateY(-1px); }

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
      font-size: 1.25rem;
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
    .nu-footer-fineprint {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-ladder-row { grid-template-columns: 1fr; gap: 6px; padding: 14px; }
      .nu-ladder-amount { text-align: left; }
      .nu-action-bar { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-action-bar { display: none; }
      .nu-leverage-card, .nu-summary-card, .nu-script { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal — Real Estate Negotiation Brief</div>
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

      <h1 class="nu-page-title">Negotiate Purchase — <span>4505 Buttewoods Estate</span></h1>
      <div class="nu-page-meta">
        <strong>Property:</strong> 4505 Buttewoods &nbsp;|&nbsp;
        <strong>Footprint:</strong> 7,098 sq ft &nbsp;|&nbsp;
        <strong>Buyer:</strong> Aaron C. Norris &nbsp;|&nbsp;
        <strong>Brief Date:</strong> April 22, 2026 &nbsp;|&nbsp;
        <strong>Status:</strong> Negotiation Phase
      </div>

      <div class="nu-intro">
        This brief is the <strong>working playbook</strong> for negotiating the purchase of 4505 Buttewoods. It captures the price ladder, leverage points, concession trades, scripted talk-tracks, and walk-away conditions so the conversation can be run cleanly without improvising under pressure. Update this file after every contact with the seller or listing agent.
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-summary-grid">
          <div class="nu-summary-card">
            <div class="nu-summary-label">Address</div>
            <div class="nu-summary-value" style="font-size:1.1rem;">4505 Buttewoods</div>
            <div class="nu-summary-sub">Single-family estate</div>
          </div>
          <div class="nu-summary-card">
            <div class="nu-summary-label">Living Area</div>
            <div class="nu-summary-value">7,098</div>
            <div class="nu-summary-sub">square feet</div>
          </div>
          <div class="nu-summary-card">
            <div class="nu-summary-label">Property Type</div>
            <div class="nu-summary-value" style="font-size:1.1rem;">Estate</div>
            <div class="nu-summary-sub">Primary residence target</div>
          </div>
          <div class="nu-summary-card">
            <div class="nu-summary-label">Position</div>
            <div class="nu-summary-value" style="font-size:1.1rem;">Cash-Capable</div>
            <div class="nu-summary-sub">Pre-approved buyer</div>
          </div>
        </div>

        <p style="font-size:0.9rem; color:#666; margin-top:12px;">
          List price, days on market, lot size, bed/bath count, HOA status, and current property tax assessment must be filled in by Aaron or the buyer's agent before the next negotiation pass. Confirm via MLS pull and county assessor record.
        </p>
      </section>

      <!-- OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Objective</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-objective">
          <h3>Primary Objective</h3>
          <p>
            Acquire 4505 Buttewoods at a price and on terms that protect the family's working capital, preserve cash reserves needed to operate Norris Utilities®, and leave clean exit optionality if the property's condition or appraisal does not match the asking price.
          </p>
          <span class="target-price">Target: 88–92% of list price, seller-paid closing where possible</span>
        </div>
      </section>

      <!-- PRICE LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Price</span> <span class="rest">Ladder</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-ladder">

          <div class="nu-ladder-row list">
            <div class="nu-ladder-label">Seller List Price</div>
            <div class="nu-ladder-desc">Anchor — never negotiate against ourselves above this number.</div>
            <div class="nu-ladder-amount">List $</div>
          </div>

          <div class="nu-ladder-row opening">
            <div class="nu-ladder-label">Opening Offer</div>
            <div class="nu-ladder-desc">82–85% of list. Justified by inspection risk, market velocity, and cash close.</div>
            <div class="nu-ladder-amount">~ 0.83 × List</div>
          </div>

          <div class="nu-ladder-row target">
            <div class="nu-ladder-label">Target Close</div>
            <div class="nu-ladder-desc">88–92% of list with seller credit toward closing costs and repair allowance.</div>
            <div class="nu-ladder-amount">~ 0.90 × List</div>
          </div>

          <div class="nu-ladder-row walkaway">
            <div class="nu-ladder-label">Walk-Away Ceiling</div>
            <div class="nu-ladder-desc">Above this number, return on residence + opportunity cost no longer pencils. Walk.</div>
            <div class="nu-ladder-amount">≤ 0.95 × List</div>
          </div>

        </div>

        <p style="font-size:0.88rem; color:#666; margin-top:14px;">
          Replace the multipliers with the actual dollar values once the verified list price is confirmed. The ladder is the rule; the dollars are the application.
        </p>
      </section>

      <!-- LEVERAGE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Leverage</span> <span class="rest">Points</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-leverage-grid">

          <div class="nu-leverage-card">
            <span class="tag">Buyer Strength</span>
            <h4>Cash-Equivalent Close</h4>
            <p>Pre-approved financing or cash-equivalent terms remove appraisal and lending uncertainty for the seller. Worth 3–5% in price reduction by itself.</p>
          </div>

          <div class="nu-leverage-card">
            <span class="tag">Buyer Strength</span>
            <h4>Fast, Clean Close</h4>
            <p>21–30 day close with minimal contingencies (inspection only). Sellers price urgency in.</p>
          </div>

          <div class="nu-leverage-card">
            <span class="tag">Market</span>
            <h4>Days on Market</h4>
            <p>Each additional 30 DOM strengthens our position by ~2% in negotiable concession value. Pull current DOM from MLS before opening.</p>
          </div>

          <div class="nu-leverage-card">
            <span class="tag">Property</span>
            <h4>Carrying Cost on 7,098 sq ft</h4>
            <p>Large home = large utilities, insurance, taxes, maintenance. Every month vacant is a meaningful seller cost — quantify it in the conversation.</p>
          </div>

          <div class="nu-leverage-card">
            <span class="tag">Property</span>
            <h4>Inspection Findings</h4>
            <p>Estate-scale homes almost always surface deferred maintenance: roof, HVAC zones, foundation, drainage. Use the report — not feelings — to renegotiate after inspection.</p>
          </div>

          <div class="nu-leverage-card">
            <span class="tag">Comparables</span>
            <h4>Recent Sold Comps</h4>
            <p>Pull 3 most recent sold comps within 1 mile and ±15% sq ft. Adjust per square foot. Use the median, not the high.</p>
          </div>

        </div>
      </section>

      <!-- CONCESSION MATRIX -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Concession</span> <span class="rest">Matrix</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>What We Ask For</th>
                <th>Why It Matters</th>
                <th>What We Give Back</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="ask">Price reduction to target</td>
                <td>Protects working capital and aligns with comparable sales analysis.</td>
                <td>Faster close, fewer contingencies.</td>
                <td>1 — must</td>
              </tr>
              <tr>
                <td class="ask">Seller-paid closing costs</td>
                <td>Preserves cash at the table for furnishing, moving, and repair reserve.</td>
                <td>Accept "as-is on cosmetic items" language.</td>
                <td>1 — must</td>
              </tr>
              <tr>
                <td class="ask">Inspection contingency</td>
                <td>Right to walk or renegotiate on material defects.</td>
                <td>Tight inspection window (10 business days) so seller is not held hostage.</td>
                <td>1 — must</td>
              </tr>
              <tr>
                <td class="ask">Home warranty (1 year)</td>
                <td>Caps post-close repair surprises on systems and appliances.</td>
                <td>Trade against a small earnest money increase.</td>
                <td>2 — strong</td>
              </tr>
              <tr>
                <td class="ask">Repair credit at closing</td>
                <td>Cash-in-hand for prioritized fixes is worth more than seller-managed repairs.</td>
                <td>Accept seller's choice not to do the work.</td>
                <td>2 — strong</td>
              </tr>
              <tr>
                <td class="ask">Specific inclusions (appliances, fixtures, equipment)</td>
                <td>Replacement cost on an estate-scale property is significant.</td>
                <td>Itemize — do not lump. Listed items only.</td>
                <td>3 — nice</td>
              </tr>
              <tr>
                <td class="ask">Possession date flexibility</td>
                <td>Allows clean move coordination without storage costs.</td>
                <td>Offer rent-back at zero cost up to a defined date.</td>
                <td>3 — nice</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- TALK TRACKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Scripted</span> <span class="rest">Talk Tracks</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-script">
          <h4>Opening — Frame the Buyer</h4>
          <p>We are serious, qualified buyers. We have done our homework on this property and on what is selling in this neighborhood. We would like to put a number in front of you that closes quickly and cleanly — that is the trade we are offering.</p>
        </div>

        <div class="nu-script">
          <h4>Anchoring the Number</h4>
          <p>Based on comparable sold properties within the last 90 days and the current condition disclosed, our analysis supports a value at the lower end of the listed range. Here is where we are starting — and we are willing to move within a defined band, not above it.</p>
        </div>

        <div class="nu-script">
          <h4>When the Seller Pushes Back</h4>
          <p>I respect that. We are not here to insult the property. We are here to make a real deal that closes. If the price is what it is, then I would like to talk about closing costs, the home warranty, and the repair items in the inspection report — those have real dollar value to us as well.</p>
        </div>

        <div class="nu-script">
          <h4>Post-Inspection Renegotiation</h4>
          <p>The inspection surfaced items we did not know about when we made the offer. We would like to handle this with a credit at closing rather than asking you to manage the work. Here is the itemized list and the contractor estimates.</p>
        </div>

        <div class="nu-script">
          <h4>Walking Away — Calm and Final</h4>
          <p>We appreciate the time. At the number we have on the table, the deal does not work for us. If anything changes on your side, please call. We are easy to reach and we will move quickly when the math works.</p>
        </div>
      </section>

      <!-- PRE-NEGOTIATION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Pre-Negotiation</span> <span class="rest">Checklist</span></h2>
        <div class="nu-section-rule"></div>

        <ul class="nu-checklist">
          <li><strong>Pull MLS sheet</strong> — current list price, DOM, price history, prior listings, withdrawals.</li>
          <li><strong>Pull county assessor record</strong> — assessed value, tax bill, recent sale history, parcel notes.</li>
          <li><strong>Pull 3 sold comps</strong> within 1 mile, sold within 90 days, ±15% on square footage. Compute median price per sq ft.</li>
          <li><strong>Confirm financing</strong> — pre-approval letter on hand, dollar amount, lender contact.</li>
          <li><strong>Earnest money</strong> — confirm escrow account, source of funds, transfer time.</li>
          <li><strong>Inspector lined up</strong> — booked window, scope confirmed (structural, mechanical, sewer scope, roof, environmental).</li>
          <li><strong>Closing attorney / title</strong> — selected and notified that an offer is going out.</li>
          <li><strong>Walk-away number written down</strong> — committed in this brief before the call. Do not negotiate against the ceiling in real time.</li>
        </ul>
      </section>

      <!-- RED FLAGS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Red</span> <span class="rest">Flags — Walk Triggers</span></h2>
        <div class="nu-section-rule"></div>

        <ul class="nu-flag-list">
          <li><strong>Material structural finding</strong> on inspection (foundation, roof system, framing) with seller refusing meaningful credit or repair.</li>
          <li><strong>Title clouds</strong> — unresolved liens, easements that affect use, boundary disputes, or unrecorded encumbrances.</li>
          <li><strong>Appraisal short of contract price</strong> by more than 5% with seller refusing to renegotiate.</li>
          <li><strong>Disclosure inconsistencies</strong> — material facts in the inspection that contradict the seller's written disclosure.</li>
          <li><strong>Insurance issues</strong> — property uninsurable at standard rates due to roof age, location, or claims history.</li>
          <li><strong>Pressure tactics</strong> — artificial deadlines, "another offer" without proof, or refusal to extend reasonable inspection windows.</li>
          <li><strong>Final number above the walk-away ceiling.</strong> No exceptions — emotion is the enemy at the ceiling line.</li>
        </ul>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Next</span> <span class="rest">Actions</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Owner</th>
                <th>Due</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Confirm verified list price + DOM from MLS</td>
                <td>Buyer's agent</td>
                <td>Before next contact</td>
                <td>Open</td>
              </tr>
              <tr>
                <td>Pull 3 sold comps + compute median $/sq ft</td>
                <td>Buyer's agent</td>
                <td>Before opening offer</td>
                <td>Open</td>
              </tr>
              <tr>
                <td>Update walk-away ceiling in this brief (dollar amount)</td>
                <td>Aaron C. Norris</td>
                <td>Before opening offer</td>
                <td>Open</td>
              </tr>
              <tr>
                <td>Pre-approval letter ready in PDF</td>
                <td>Lender / Aaron</td>
                <td>Before opening offer</td>
                <td>Open</td>
              </tr>
              <tr>
                <td>Inspector booking window reserved</td>
                <td>Aaron</td>
                <td>Within 48 hours of accepted offer</td>
                <td>Open</td>
              </tr>
              <tr>
                <td>Closing attorney engaged</td>
                <td>Aaron</td>
                <td>Within 48 hours of accepted offer</td>
                <td>Open</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="nu-action-bar">
          <div>
            <h3>Ready to make the call?</h3>
            <p>Confirm the checklist is green, the ceiling is written down, and the talk track is reviewed before dialing.</p>
          </div>
          <div class="nu-action-buttons">
            <a class="nu-btn nu-btn-primary" href="tel:2055001343">Call Aaron — 205-500-1343</a>
            <a class="nu-btn nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Negotiation%20Update">Email Update</a>
          </div>
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
    <div class="nu-footer-fineprint">
      Internal negotiation working document. Not an offer, advertisement, or solicitation. All financial figures are placeholders for ladder structure only and must be confirmed against the verified list price and lender pre-approval before any communication with the seller or listing agent. Norris Utilities®, A Legacy of Commitment®, and the Phoenix Icon® are registered trademarks of Norris Utilities, LLC.
    </div>
  </footer>

</body>
</html>