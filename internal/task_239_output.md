<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods — Negotiation Strategy — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-success-green: #1B7F3A;
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }

    .nu-doc-title {
      margin-top: 28px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.25);
      display: inline-block;
      padding-left: 40px;
      padding-right: 40px;
    }
    .nu-doc-title .kicker {
      color: var(--nu-cyan);
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-doc-title h1 {
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.8rem;
      letter-spacing: 0.02em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 55px;
      margin-top: -55px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 55px;
      display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 20px 0 60px;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 20px 40px;
    }

    /* META BAR */
    .nu-meta-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 40px;
    }
    .nu-meta-cell {
      background: var(--nu-white);
      padding: 18px 22px;
    }
    .nu-meta-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-meta-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .first-word {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
    }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 22px;
    }
    .nu-section-intro {
      color: var(--nu-body-text);
      margin-bottom: 22px;
      font-size: 1.02rem;
    }

    /* PROPERTY SUMMARY CARD */
    .property-hero {
      background: linear-gradient(135deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 28px 32px;
      margin-bottom: 40px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.04);
    }
    .property-address {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-navy);
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }
    .property-sub {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 18px;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 18px;
      padding-top: 18px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .property-stat-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 4px;
    }
    .property-stat-value {
      font-size: 1.3rem;
      font-weight: 900;
      color: var(--nu-navy);
    }

    /* OFFER STACK */
    .offer-stack {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .offer-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .offer-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.08);
    }
    .offer-card.opening {
      border-top: 4px solid var(--nu-success-green);
    }
    .offer-card.target {
      border-top: 4px solid var(--nu-blue);
      background: linear-gradient(180deg, #F0F4FF 0%, var(--nu-white) 100%);
    }
    .offer-card.walkaway {
      border-top: 4px solid var(--nu-alert-red);
    }
    .offer-tag {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .offer-card.opening .offer-tag { color: var(--nu-success-green); }
    .offer-card.walkaway .offer-tag { color: var(--nu-alert-red); }
    .offer-name {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .offer-price {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-navy);
      margin-bottom: 4px;
      letter-spacing: -0.02em;
    }
    .offer-delta {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    .offer-rationale {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* CHEVRON BADGES (tactics) */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 20px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
    }
    .nu-badge-num {
      width: 28px;
      height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* LEVERAGE GRID */
    .leverage-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }
    .leverage-col h3 {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .leverage-col.our h3 { color: var(--nu-success-green); border-bottom-color: var(--nu-success-green); }
    .leverage-col.their h3 { color: var(--nu-alert-red); border-bottom-color: var(--nu-alert-red); }
    .leverage-col ul {
      list-style: none;
    }
    .leverage-col li {
      padding: 10px 0 10px 22px;
      position: relative;
      font-size: 0.93rem;
      line-height: 1.5;
      border-bottom: 1px solid var(--nu-light-gray);
    }
    .leverage-col li:last-child { border-bottom: none; }
    .leverage-col li::before {
      position: absolute;
      left: 0;
      top: 11px;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .leverage-col.our li::before { content: '▲'; color: var(--nu-success-green); }
    .leverage-col.their li::before { content: '▼'; color: var(--nu-alert-red); }

    /* CONDITIONS TABLE */
    .conditions-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
    }
    .conditions-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .conditions-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .conditions-table tr:last-child td { border-bottom: none; }
    .conditions-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .priority-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .priority-must { background: #FFE5E8; color: var(--nu-alert-red); }
    .priority-strong { background: #FFF4D6; color: #8A6D00; }
    .priority-nice { background: #E3F2E9; color: var(--nu-success-green); }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 36px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 11px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-dot {
      position: absolute;
      left: -36px;
      top: 2px;
      width: 24px;
      height: 24px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-phase {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 3px;
    }
    .timeline-title {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .timeline-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* SCRIPT BOX */
    .script-box {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      margin-bottom: 14px;
      border-radius: 0 4px 4px 0;
    }
    .script-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 8px;
    }
    .script-text {
      font-size: 0.98rem;
      font-style: italic;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #001155 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .callout-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .callout-text {
      font-size: 1.12rem;
      font-weight: 400;
      line-height: 1.5;
    }
    .callout-text strong { font-weight: 900; }

    /* DO/DONT */
    .do-dont {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .dd-box {
      padding: 22px;
      border-radius: 6px;
    }
    .dd-box.do {
      background: #E8F5ED;
      border: 1px solid var(--nu-success-green);
    }
    .dd-box.dont {
      background: #FCE9EC;
      border: 1px solid var(--nu-alert-red);
    }
    .dd-title {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .dd-box.do .dd-title { color: var(--nu-success-green); }
    .dd-box.dont .dd-title { color: var(--nu-alert-red); }
    .dd-box ul { list-style: none; }
    .dd-box li {
      font-size: 0.92rem;
      padding: 6px 0 6px 22px;
      position: relative;
      line-height: 1.5;
    }
    .dd-box li::before {
      position: absolute;
      left: 0;
      font-weight: 900;
    }
    .dd-box.do li::before { content: '✓'; color: var(--nu-success-green); }
    .dd-box.dont li::before { content: '✕'; color: var(--nu-alert-red); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #000033 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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
    .nu-footer-fine {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-doc-title h1 { font-size: 1.25rem; }
      .nu-container { padding: 20px 22px; }
      .leverage-grid, .do-dont { grid-template-columns: 1fr; }
      .property-address { font-size: 1.3rem; }
      .offer-price { font-size: 1.6rem; }
      .conditions-table th, .conditions-table td { padding: 10px; font-size: 0.85rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .offer-card, .property-hero { box-shadow: none; page-break-inside: avoid; }
      .nu-section { page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 10 L115 45 L150 25 L130 60 L170 55 L140 85 L165 120 L125 105 L115 150 L100 115 L85 150 L75 105 L35 120 L60 85 L30 55 L70 60 L50 25 L85 45 Z" fill="white"/>
      <path d="M100 120 L105 150 L120 140 L112 165 L100 190 L88 165 L80 140 L95 150 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment&reg;</div>
    <div class="nu-doc-title">
      <div class="kicker">Confidential Negotiation Strategy</div>
      <h1>4505 Buttewoods &mdash; Estate Acquisition</h1>
    </div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 55" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,55 L1440,0 L1440,55 L0,55 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- META BAR -->
      <div class="nu-meta-bar">
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Prepared For</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Document Date</div>
          <div class="nu-meta-value">April 21, 2026</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Classification</div>
          <div class="nu-meta-value">Confidential &mdash; Personal</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Source</div>
          <div class="nu-meta-value">reMarkable Action Item</div>
        </div>
      </div>

      <!-- PROPERTY HERO -->
      <div class="property-hero">
        <div class="property-address">4505 Buttewoods Drive</div>
        <div class="property-sub">Estate-class residence &mdash; 7,098 sq ft of heated &amp; cooled living area</div>
        <div class="property-stats">
          <div>
            <div class="property-stat-label">Living Area</div>
            <div class="property-stat-value">7,098 sq ft</div>
          </div>
          <div>
            <div class="property-stat-label">Class</div>
            <div class="property-stat-value">Estate</div>
          </div>
          <div>
            <div class="property-stat-label">Stage</div>
            <div class="property-stat-value">Active Negotiation</div>
          </div>
          <div>
            <div class="property-stat-label">Decision Owner</div>
            <div class="property-stat-value">Aaron C. Norris</div>
          </div>
        </div>
      </div>

      <!-- CALLOUT -->
      <div class="callout">
        <div class="callout-label">Mission</div>
        <div class="callout-text">
          Secure 4505 Buttewoods on terms that <strong>protect capital, preserve optionality, and close cleanly</strong>. Move deliberately. Lead with facts, not emotion. Every concession must earn a concession back.
        </div>
      </div>

      <!-- SECTION: OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Offer</span> <span class="rest">Ladder &amp; Price Anchors</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Three anchors drive every conversation: an opening number that leaves room, a target that represents honest fair value, and a walk-away that prevents an emotional overpay. Do not share any of these figures with the seller &mdash; only work from them internally.
        </p>

        <div class="offer-stack">
          <div class="offer-card opening">
            <div class="offer-tag">Opening Anchor</div>
            <div class="offer-name">Initial Written Offer</div>
            <div class="offer-price">Low Anchor</div>
            <div class="offer-delta">Set 10&ndash;15% below target</div>
            <div class="offer-rationale">
              Back the number with real comps, inspection conditions, and carrying-cost math. Never apologize for the opening. Let silence do the work after you deliver it.
            </div>
          </div>

          <div class="offer-card target">
            <div class="offer-tag">Strategic Target</div>
            <div class="offer-name">Fair-Value Landing Price</div>
            <div class="offer-price">Target</div>
            <div class="offer-delta">Defensible by at least 3 comparable sales</div>
            <div class="offer-rationale">
              This is the number the deal should close at. Protect it with inspection, appraisal, and financing contingencies. Concede only in exchange for seller concessions of equal or greater value.
            </div>
          </div>

          <div class="offer-card walkaway">
            <div class="offer-tag">Hard Ceiling</div>
            <div class="offer-name">Walk-Away Price</div>
            <div class="offer-price">Ceiling</div>
            <div class="offer-delta">Written. Fixed. Not revisited mid-negotiation.</div>
            <div class="offer-rationale">
              Above this number, the deal breaks even or loses on a 7&ndash;10 year hold after repairs and carrying costs. Walking away is a win when the math says walk.
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: LEVERAGE MAP -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Leverage</span> <span class="rest">Map &mdash; Know the Board</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Before the next conversation, pressure-test both sides. The side with more documented leverage wins the middle of the negotiation &mdash; not the side that talks the loudest.
        </p>

        <div class="leverage-grid">
          <div class="leverage-col our">
            <h3>Our Leverage</h3>
            <ul>
              <li>Qualified, motivated, and able to close on a schedule the seller chooses</li>
              <li>No contingent sale &mdash; no &quot;sell first, then buy&quot; chain to break the deal</li>
              <li>Willingness to walk: documented walk-away price protects us from overpay</li>
              <li>Private, professional communication &mdash; no public listing drama</li>
              <li>Capital posture and financing relationships that make the offer credible</li>
            </ul>
          </div>
          <div class="leverage-col their">
            <h3>Seller's Leverage</h3>
            <ul>
              <li>Unique 7,098 sq ft inventory &mdash; limited true comparables in the market</li>
              <li>Potential for competing interest from other buyers</li>
              <li>Control of timeline if they are not pressured to sell</li>
              <li>Existing condition disclosures and prior inspection reports</li>
              <li>Any emotional premium attached to the home &mdash; expect it, do not match it</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: TACTICS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Tactics &mdash; Play the Sequence</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Run the conversation in this order. Do not skip steps &mdash; each one earns information or leverage that supports the next.
        </p>

        <div>
          <div class="nu-badge"><div class="nu-badge-num">1</div>Anchor with a written offer. Verbal prices get negotiated down; written prices get negotiated against.</div>
          <div class="nu-badge"><div class="nu-badge-num">2</div>Lead with rationale, not apology. Deliver comps, condition notes, and carrying-cost logic calmly.</div>
          <div class="nu-badge"><div class="nu-badge-num">3</div>Use silence after delivering the number. Do not fill the pause. The first to speak loses margin.</div>
          <div class="nu-badge"><div class="nu-badge-num">4</div>Trade concessions, do not give them. Every price concession earns a term concession in return.</div>
          <div class="nu-badge"><div class="nu-badge-num">5</div>Protect contingencies: inspection, appraisal, financing, clean title. These are the escape hatches.</div>
          <div class="nu-badge"><div class="nu-badge-num">6</div>Shrink the gap in uneven steps. A $10K move answered with a $5K counter signals we are near the floor.</div>
          <div class="nu-badge"><div class="nu-badge-num">7</div>Make walk-away credible without threatening. &quot;This may not be the right fit at that number&quot; beats ultimatums.</div>
        </div>
      </section>

      <!-- SECTION: TERMS TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Deal</span> <span class="rest">Terms &mdash; Priorities Beyond Price</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Price is one lever. These terms can be worth tens of thousands of dollars and are often where the best value is won.
        </p>

        <table class="conditions-table">
          <thead>
            <tr>
              <th style="width: 28%;">Term</th>
              <th style="width: 52%;">Our Position</th>
              <th style="width: 20%;">Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Inspection Period</strong></td>
              <td>Minimum 10 business days with unrestricted access for licensed inspectors (general, HVAC, roof, structural, termite, sewer scope).</td>
              <td><span class="priority-pill priority-must">Must Have</span></td>
            </tr>
            <tr>
              <td><strong>Financing Contingency</strong></td>
              <td>Full financing contingency with lender-of-choice. No pre-commitment to an appraisal waiver.</td>
              <td><span class="priority-pill priority-must">Must Have</span></td>
            </tr>
            <tr>
              <td><strong>Appraisal Contingency</strong></td>
              <td>Right to renegotiate or terminate if appraisal comes in below contract price.</td>
              <td><span class="priority-pill priority-must">Must Have</span></td>
            </tr>
            <tr>
              <td><strong>Title &amp; Survey</strong></td>
              <td>Clean title commitment, owner's title policy, and current survey at seller expense (or credit at closing).</td>
              <td><span class="priority-pill priority-strong">Strong</span></td>
            </tr>
            <tr>
              <td><strong>Repairs from Inspection</strong></td>
              <td>Seller cures material defects or provides credit at closing. Cosmetics stay with buyer.</td>
              <td><span class="priority-pill priority-strong">Strong</span></td>
            </tr>
            <tr>
              <td><strong>Earnest Money</strong></td>
              <td>Standard amount in escrow, fully refundable during contingency periods.</td>
              <td><span class="priority-pill priority-strong">Strong</span></td>
            </tr>
            <tr>
              <td><strong>Closing Timeline</strong></td>
              <td>Target 30&ndash;45 days. Willing to flex on date in exchange for price or repair concessions.</td>
              <td><span class="priority-pill priority-strong">Strong</span></td>
            </tr>
            <tr>
              <td><strong>Possession</strong></td>
              <td>Possession at closing. No extended leaseback without rent at market + seller insurance.</td>
              <td><span class="priority-pill priority-nice">Nice</span></td>
            </tr>
            <tr>
              <td><strong>Included Personal Property</strong></td>
              <td>Itemize appliances, fixtures, window treatments, and any specified furnishings in writing.</td>
              <td><span class="priority-pill priority-nice">Nice</span></td>
            </tr>
            <tr>
              <td><strong>Home Warranty</strong></td>
              <td>One-year buyer's home warranty at seller expense.</td>
              <td><span class="priority-pill priority-nice">Nice</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION: TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Execution</span> <span class="rest">Timeline &mdash; From Offer to Keys</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Move through these phases in order. Document everything in writing. Verbal commitments do not close deals.
        </p>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-phase">Phase 1 &mdash; Intelligence</div>
            <div class="timeline-title">Comps, Condition, &amp; Seller Motivation</div>
            <div class="timeline-body">
              Pull 3&ndash;5 true comparable sales within 12 months. Note days on market, price reductions, and any seller notes. Ask the listing side: &quot;What is the seller's timeline, and what has to be true for this to close?&quot;
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-phase">Phase 2 &mdash; Written Anchor</div>
            <div class="timeline-title">Submit Opening Offer in Writing</div>
            <div class="timeline-body">
              Deliver the opening offer with a one-page rationale and a 48&ndash;72 hour response window. Clean document, professional presentation, no emotional language.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-phase">Phase 3 &mdash; Counter Exchange</div>
            <div class="timeline-title">Shrink the Gap in Uneven Steps</div>
            <div class="timeline-body">
              Expect 2&ndash;3 rounds. Move toward target deliberately. Each price concession should earn a term concession (repairs, warranty, closing costs, included items).
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-phase">Phase 4 &mdash; Due Diligence</div>
            <div class="timeline-title">Inspection, Appraisal, Title</div>
            <div class="timeline-body">
              Use the inspection period aggressively but fairly. Material findings become the second negotiation &mdash; price reduction, credit, or seller-performed repairs. Re-trade only on real findings, not wish-list items.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-phase">Phase 5 &mdash; Closing</div>
            <div class="timeline-title">Clean Close, Documented Possession</div>
            <div class="timeline-body">
              Final walk-through 24&ndash;48 hours before closing. Confirm repairs complete, included items present, and property in contracted condition. Funds wired through verified channels only.
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Conversation</span> <span class="rest">Scripts &mdash; Words That Work</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Use these openers. They are calm, direct, and put the burden of response on the seller's side.
        </p>

        <div class="script-box">
          <div class="script-label">Delivering the Opening Offer</div>
          <div class="script-text">
            &quot;Based on comparable sales, condition notes, and our carrying-cost analysis, here is a written offer at [price] with the terms outlined. I have tried to build a proposal that is fair to both sides and that can actually close.&quot;
          </div>
        </div>

        <div class="script-box">
          <div class="script-label">After a High Counter</div>
          <div class="script-text">
            &quot;I appreciate the counter. To move toward that number I would need to understand what is supporting it on the comps side &mdash; and we would need to talk about [inspection findings / included items / repairs / closing costs] to bridge the gap.&quot;
          </div>
        </div>

        <div class="script-box">
          <div class="script-label">Signaling the Ceiling</div>
          <div class="script-text">
            &quot;I respect what the home is worth to the seller. The number that works on our side, with clean terms and a fast close, is [target]. If that is not workable, I understand &mdash; this may not be the right fit, and there is no hard feeling either way.&quot;
          </div>
        </div>

        <div class="script-box">
          <div class="script-label">Re-Trading on Inspection Findings</div>
          <div class="script-text">
            &quot;The inspection turned up [specific findings] that were not visible before. The estimates to cure total [amount]. We would like to address this through a price adjustment or a closing credit &mdash; whichever is cleaner for the seller.&quot;
          </div>
        </div>
      </section>

      <!-- SECTION: DO / DON'T -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Discipline</span> <span class="rest">Checklist &mdash; Do &amp; Do Not</span></h2>
        <div class="nu-section-rule"></div>

        <div class="do-dont">
          <div class="dd-box do">
            <div class="dd-title">Do</div>
            <ul>
              <li>Put every offer and counter in writing</li>
              <li>Anchor first whenever possible</li>
              <li>Let silence work after delivering a number</li>
              <li>Trade concessions, never give them away</li>
              <li>Document everything agreed verbally within 24 hours</li>
              <li>Re-trade only on real inspection findings with quoted numbers</li>
              <li>Stay calm, professional, and slow to react</li>
            </ul>
          </div>
          <div class="dd-box dont">
            <div class="dd-title">Do Not</div>
            <ul>
              <li>Share the target or walk-away price with the other side</li>
              <li>Justify or apologize for the opening offer</li>
              <li>Get emotionally attached to the home</li>
              <li>Negotiate against ourselves by raising without a counter</li>
              <li>Waive inspection, appraisal, or financing to &quot;win&quot; the deal</li>
              <li>Accept verbal promises &mdash; get every term in the contract</li>
              <li>Rush the close to accommodate a seller deadline without a concession</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Next</span> <span class="rest">Actions &mdash; This Week</span></h2>
        <div class="nu-section-rule"></div>

        <table class="conditions-table">
          <thead>
            <tr>
              <th style="width: 8%;">#</th>
              <th style="width: 52%;">Action</th>
              <th style="width: 20%;">Owner</th>
              <th style="width: 20%;">Target Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Pull 3&ndash;5 true comparable sales within 12 months; document square footage, condition, and sold price.</td>
              <td>Aaron</td>
              <td>This week</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lock opening, target, and walk-away numbers in writing. Do not share externally.</td>
              <td>Aaron</td>
              <td>Before offer</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Confirm financing pre-approval and proof of funds documentation are current.</td>
              <td>Aaron</td>
              <td>Before offer</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Line up licensed inspectors (general, HVAC, roof, structural, termite, sewer scope).</td>
              <td>Aaron</td>
              <td>Pre-contract</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Draft the written offer and one-page rationale. Review before transmission.</td>
              <td>Aaron</td>
              <td>This week</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Identify real-estate attorney for contract review before signature.</td>
              <td>Aaron</td>
              <td>Pre-contract</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment&reg;</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO &mdash; Norris Utilities&reg;, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-fine">
      Confidential negotiation strategy &mdash; for internal use only. Not an offer, contract, or binding commitment. Consult licensed counsel before execution.
    </div>
  </footer>

</body>
</html>