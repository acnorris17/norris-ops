<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Negotiation Brief — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #2E7D32;
      --nu-warning: #E65100;
      --nu-danger: #C62828;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ══ DOCUMENT BADGE ══ */
    .doc-badge {
      display: inline-block;
      margin-top: 22px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.35);
      backdrop-filter: blur(6px);
      padding: 8px 20px;
      border-radius: 999px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
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
      max-width: 1200px;
      margin: 0 auto;
      padding: 50px 40px;
    }

    /* ══ DOC TITLE ══ */
    .doc-meta {
      border-left: 4px solid var(--nu-blue);
      padding: 16px 22px;
      background: var(--nu-light-gray);
      margin-bottom: 40px;
      border-radius: 0 6px 6px 0;
    }
    .doc-meta-label {
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .doc-subtitle {
      font-size: 1rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .doc-meta-row {
      margin-top: 14px;
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      font-size: 0.85rem;
    }
    .doc-meta-row span {
      display: inline-flex;
      align-items: center;
      color: var(--nu-body-text);
    }
    .doc-meta-row strong {
      color: var(--nu-dark-text);
      margin-right: 6px;
    }

    /* ══ SECTION ══ */
    .section {
      margin-bottom: 44px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
    }
    .section-title .first {
      color: var(--nu-blue);
    }
    .section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 20px;
      border-radius: 2px;
    }
    .section p {
      margin-bottom: 14px;
    }

    /* ══ PROPERTY CARD ══ */
    .property-card {
      background: linear-gradient(135deg, var(--nu-white) 0%, #fafbff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 14px rgba(0,0,51,0.05);
    }
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 22px;
      margin-top: 8px;
    }
    .prop-stat {
      border-left: 3px solid var(--nu-cyan);
      padding-left: 14px;
    }
    .prop-stat-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nu-body-text);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .prop-stat-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .prop-stat-sub {
      font-size: 0.8rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* ══ BADGES ══ */
    .nu-badge-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 12px;
      margin-top: 16px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.88rem;
    }
    .nu-badge-num {
      width: 32px; height: 32px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
      font-size: 0.9rem;
    }

    /* ══ NEGOTIATION TACTICS TABLE ══ */
    .tactics-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 14px rgba(0,0,51,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .tactics-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .tactics-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .tactics-table td {
      padding: 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .tactics-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .tactics-table .phase-tag {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.72rem;
      padding: 3px 10px;
      border-radius: 4px;
      letter-spacing: 0.06em;
      white-space: nowrap;
    }

    /* ══ PRICE LADDER ══ */
    .price-ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }
    .price-tier {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px;
      position: relative;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .price-tier:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,51,0.08);
    }
    .price-tier.opening { border-color: var(--nu-cyan); }
    .price-tier.target { border-color: var(--nu-blue); background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); }
    .price-tier.walk { border-color: var(--nu-warning); }
    .price-tier-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      font-weight: 900;
      margin-bottom: 8px;
    }
    .price-tier.opening .price-tier-label { color: #0088cc; }
    .price-tier.target .price-tier-label { color: var(--nu-blue); }
    .price-tier.walk .price-tier-label { color: var(--nu-warning); }
    .price-tier-value {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 6px;
    }
    .price-tier-ppsf {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .price-tier-desc {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      margin-top: 14px;
    }
    .checklist li {
      padding: 12px 0 12px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 5px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 2px;
    }
    .checklist li span.due {
      display: inline-block;
      margin-left: 10px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-size: 0.72rem;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 3px;
      letter-spacing: 0.04em;
    }

    /* ══ TWO COLUMN ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 14px;
    }
    .col-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px;
      box-shadow: 0 2px 10px rgba(0,0,51,0.04);
    }
    .col-card.leverage {
      border-top: 4px solid var(--nu-success);
    }
    .col-card.risk {
      border-top: 4px solid var(--nu-danger);
    }
    .col-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .col-card h4::before {
      content: '';
      width: 10px; height: 10px;
      border-radius: 50%;
    }
    .col-card.leverage h4::before { background: var(--nu-success); }
    .col-card.risk h4::before { background: var(--nu-danger); }
    .col-card ul {
      list-style: none;
    }
    .col-card li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.9rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .col-card li:last-child { border-bottom: none; }
    .col-card li::before {
      content: '•';
      position: absolute;
      left: 6px;
      font-weight: 900;
      color: var(--nu-blue);
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, #fff9e6 0%, #fef3c7 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 0 8px 8px 0;
      margin: 20px 0;
    }
    .callout-label {
      font-weight: 900;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #8a6d1c;
      margin-bottom: 6px;
    }
    .callout p { margin-bottom: 0; font-size: 0.95rem; }

    .callout.brand {
      background: linear-gradient(135deg, #eef1ff 0%, #e6ebff 100%);
      border-left-color: var(--nu-blue);
    }
    .callout.brand .callout-label { color: var(--nu-blue); }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 30px;
      margin-top: 18px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding: 12px 0 12px 14px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -24px; top: 18px;
      width: 12px; height: 12px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
    }
    .timeline-phase {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 2px;
    }
    .timeline-desc {
      font-size: 0.94rem;
      color: var(--nu-dark-text);
    }
    .timeline-desc small {
      display: block;
      color: var(--nu-body-text);
      font-size: 0.84rem;
      margin-top: 3px;
    }

    /* ══ SCRIPT BLOCK ══ */
    .script {
      background: var(--nu-navy);
      color: #e6ebff;
      padding: 22px 26px;
      border-radius: 10px;
      font-family: 'Lato', sans-serif;
      position: relative;
      margin-top: 14px;
      border-left: 4px solid var(--nu-cyan);
    }
    .script::before {
      content: 'APPROACH SCRIPT';
      position: absolute;
      top: -10px; left: 18px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.7rem;
      padding: 3px 10px;
      border-radius: 3px;
      letter-spacing: 0.14em;
    }
    .script p {
      margin-bottom: 12px;
      font-size: 0.95rem;
      line-height: 1.7;
    }
    .script p:last-child { margin-bottom: 0; }
    .script em { color: var(--nu-cyan); font-style: normal; font-weight: 700; }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #000099 100%);
      color: rgba(255,255,255,0.9);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
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
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--nu-cyan), transparent);
      margin: 20px auto;
    }
    .nu-footer-meta {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      margin-top: 10px;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 30px 20px; }
      .doc-title { font-size: 1.5rem; }
      .two-col { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .tactics-table { font-size: 0.85rem; }
      .tactics-table th, .tactics-table td { padding: 10px; }
      .price-tier-value { font-size: 1.6rem; }
      .nu-footer-contact { font-size: 0.9rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .col-card, .property-card, .tactics-table { box-shadow: none; }
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
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="doc-badge">Internal Acquisition Brief</div>
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

      <!-- META -->
      <div class="doc-meta">
        <div class="doc-meta-label">reMarkable Action Item — Real Estate Acquisition</div>
        <h1 class="doc-title">Negotiate Purchase of 7,098 SqFt Estate at 4505 Buttewoods</h1>
        <p class="doc-subtitle">Strategy, price ladder, and execution plan for a deliberate off-market approach.</p>
        <div class="doc-meta-row">
          <span><strong>Principal:</strong> Aaron C. Norris</span>
          <span><strong>Prepared:</strong> April 23, 2026</span>
          <span><strong>Property:</strong> 4505 Buttewoods</span>
          <span><strong>Size:</strong> 7,098 sq ft</span>
          <span><strong>Status:</strong> Pre-offer — research phase</span>
        </div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <div class="section">
        <div class="section-title"><span class="first">Executive</span> <span class="rest">Summary</span></div>
        <div class="section-rule"></div>
        <p>This brief organizes the approach to acquiring the 7,098-square-foot estate located at 4505 Buttewoods. The objective is a structured, unhurried negotiation that positions Aaron as a credible, well-prepared buyer — winning on terms, diligence, and certainty-of-close rather than on pure price. Every phase below is designed so Aaron stays in control of pacing and never negotiates against himself.</p>
        <p>The three-tier price ladder (Opening / Target / Walk-Away) is set once, before contact, and not revised in the moment. Diligence items and leverage points are pre-built so that counter-offers are answered with facts, not reactions.</p>
        <div class="callout brand">
          <div class="callout-label">Core Principle</div>
          <p>Earn the deal by being the most prepared party at the table. Patience is the asset. The best price follows the best process.</p>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <div class="section">
        <div class="section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></div>
        <div class="section-rule"></div>
        <div class="property-card">
          <div class="property-grid">
            <div class="prop-stat">
              <div class="prop-stat-label">Address</div>
              <div class="prop-stat-value">4505 Buttewoods</div>
              <div class="prop-stat-sub">Full legal description pending title pull</div>
            </div>
            <div class="prop-stat">
              <div class="prop-stat-label">Heated Square Footage</div>
              <div class="prop-stat-value">7,098</div>
              <div class="prop-stat-sub">Verify against tax card &amp; appraisal</div>
            </div>
            <div class="prop-stat">
              <div class="prop-stat-label">Classification</div>
              <div class="prop-stat-value">Estate Residential</div>
              <div class="prop-stat-sub">Confirm zoning, easements, covenants</div>
            </div>
            <div class="prop-stat">
              <div class="prop-stat-label">Acquisition Approach</div>
              <div class="prop-stat-value">Off-Market</div>
              <div class="prop-stat-sub">Direct-to-owner, attorney-prepared contract</div>
            </div>
          </div>
        </div>
      </div>

      <!-- PHASE ROADMAP -->
      <div class="section">
        <div class="section-title"><span class="first">Negotiation</span> <span class="rest">Phases</span></div>
        <div class="section-rule"></div>
        <div class="nu-badge-row">
          <div class="nu-badge"><span class="nu-badge-num">1</span>Research &amp; Comp Build</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>Seller Outreach</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>Walk-Through &amp; Discovery</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>Written Offer</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span>Counter &amp; Term Shaping</div>
          <div class="nu-badge"><span class="nu-badge-num">6</span>Contract &amp; Diligence</div>
          <div class="nu-badge"><span class="nu-badge-num">7</span>Close &amp; Funding</div>
        </div>
      </div>

      <!-- PRICE LADDER -->
      <div class="section">
        <div class="section-title"><span class="first">Price</span> <span class="rest">Ladder</span></div>
        <div class="section-rule"></div>
        <p>Numbers below are placeholders for the final figures — Aaron will lock each tier after the comp study is complete. The structure, however, is non-negotiable: three tiers, set in advance, in writing, never widened mid-negotiation.</p>
        <div class="price-ladder">
          <div class="price-tier opening">
            <div class="price-tier-label">Opening Offer</div>
            <div class="price-tier-value">TBD — Lock before call</div>
            <div class="price-tier-ppsf">Anchor low enough to allow room, high enough to be taken seriously</div>
            <div class="price-tier-desc">Accompanied by a short written rationale: comp summary, condition items, close certainty, cash or pre-approved financing.</div>
          </div>
          <div class="price-tier target">
            <div class="price-tier-label">Target Price</div>
            <div class="price-tier-value">TBD — Lock before call</div>
            <div class="price-tier-ppsf">The number we would gladly close at today</div>
            <div class="price-tier-desc">Reached only after two counters. Aaron is willing to concede terms (close date, earnest money) to hit this figure.</div>
          </div>
          <div class="price-tier walk">
            <div class="price-tier-label">Walk-Away</div>
            <div class="price-tier-value">TBD — Lock before call</div>
            <div class="price-tier-ppsf">The ceiling — written, dated, not shared with seller</div>
            <div class="price-tier-desc">If negotiation crosses this, Aaron thanks the seller, leaves the door open for future contact, and disengages without pressure.</div>
          </div>
        </div>
        <div class="callout">
          <div class="callout-label">Rule</div>
          <p>Set the three numbers before the first phone call. Do not revise them in real time. If new information appears in diligence, pause, reset the ladder on paper, and then resume.</p>
        </div>
      </div>

      <!-- LEVERAGE & RISK -->
      <div class="section">
        <div class="section-title"><span class="first">Leverage</span> <span class="rest">&amp; Risk Scan</span></div>
        <div class="section-rule"></div>
        <div class="two-col">
          <div class="col-card leverage">
            <h4>Our Leverage</h4>
            <ul>
              <li>Off-market approach — seller avoids commissions and showings</li>
              <li>Cash or fully-pre-approved financing — certainty-of-close advantage</li>
              <li>Flexible close date — can accommodate seller’s move-out timeline</li>
              <li>Short diligence window if inspections come clean</li>
              <li>No contingent sale — we are not tied to another home closing first</li>
              <li>Local, credible principal — Aaron is known in the Birmingham market</li>
            </ul>
          </div>
          <div class="col-card risk">
            <h4>Risks to Control</h4>
            <ul>
              <li>Undisclosed title issues, easements, or lien history</li>
              <li>Deferred maintenance on a 7,098 sqft estate (roof, HVAC, foundation)</li>
              <li>Appraisal gap if financing is used — know the backup plan</li>
              <li>Seller anchored to a fantasy price from online estimators</li>
              <li>Competing quiet buyer — assume we are not the only one circling</li>
              <li>Property tax reassessment upon sale — model before offer</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- TACTICS TABLE -->
      <div class="section">
        <div class="section-title"><span class="first">Tactics</span> <span class="rest">by Phase</span></div>
        <div class="section-rule"></div>
        <table class="tactics-table">
          <thead>
            <tr>
              <th style="width:18%;">Phase</th>
              <th style="width:32%;">Action</th>
              <th style="width:50%;">Tactical Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="phase-tag">Phase 1</span></td>
              <td>Comp study &amp; title pull</td>
              <td>Pull three closed comps within 1 mile and 1,500 sqft; pull two active listings; pull recorded deed and any open liens before first contact.</td>
            </tr>
            <tr>
              <td><span class="phase-tag">Phase 2</span></td>
              <td>Direct-to-owner approach</td>
              <td>Hand-written note or brief phone call. Identify self, intent, and that the approach is serious and private. No pressure, no deadline on the first touch.</td>
            </tr>
            <tr>
              <td><span class="phase-tag">Phase 3</span></td>
              <td>Private walk-through</td>
              <td>Walk the property with a contractor or inspector in the background. Take structured notes. Ask open questions; listen more than speak.</td>
            </tr>
            <tr>
              <td><span class="phase-tag">Phase 4</span></td>
              <td>Written offer with rationale</td>
              <td>Lead with the opening number, close date, earnest money, and a one-page rationale citing comps and condition. Letter is attorney-prepared, not verbal.</td>
            </tr>
            <tr>
              <td><span class="phase-tag">Phase 5</span></td>
              <td>Counter strategy</td>
              <td>Never jump directly to the Target. Use two measured counters. Trade terms (close date, earnest, as-is clauses) for price. Silence is a tool — allow the seller to fill pauses.</td>
            </tr>
            <tr>
              <td><span class="phase-tag">Phase 6</span></td>
              <td>Diligence execution</td>
              <td>Full inspection, survey, termite, structural, HVAC, septic/sewer, roof. Title commitment review with attorney. Any material finding triggers a documented price or credit request.</td>
            </tr>
            <tr>
              <td><span class="phase-tag">Phase 7</span></td>
              <td>Close &amp; fund</td>
              <td>Confirm wire instructions by phone with a known party. Attend closing in person. File recorded deed in home records the same day.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- TIMELINE -->
      <div class="section">
        <div class="section-title"><span class="first">Target</span> <span class="rest">Timeline</span></div>
        <div class="section-rule"></div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-phase">Week 1 — Research</div>
            <div class="timeline-desc">
              Pull tax record, deed chain, and three closed comps. Drive past the property.
              <small>Deliverable: single-page comp summary filed in acquisition folder.</small>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 2 — Outreach</div>
            <div class="timeline-desc">
              Hand-written note to owner. If no response in 7 days, polite phone follow-up.
              <small>Keep tone conversational — never pressure, never name a number before a walk-through.</small>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 3 — Walk &amp; Offer</div>
            <div class="timeline-desc">
              Walk the property. Within 72 hours, deliver the written offer with rationale.
              <small>Lock the three price tiers in writing before stepping on site.</small>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Weeks 4–5 — Negotiation</div>
            <div class="timeline-desc">
              Two measured counters max. Trade terms for price. Walk calmly if the Walk-Away is breached.
              <small>Every counter goes through Aaron — no verbal commitments from anyone else.</small>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Weeks 6–9 — Diligence</div>
            <div class="timeline-desc">
              Inspections, survey, title commitment, appraisal (if financed). Attorney review of contract and closing documents.
              <small>Any material finding = written request for credit or re-price, no exceptions.</small>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 10 — Close</div>
            <div class="timeline-desc">
              Wire verification by phone, attend closing, record deed same day.
              <small>Post-close: file all originals in fire-safe; scan to acquisition folder.</small>
            </div>
          </div>
        </div>
      </div>

      <!-- APPROACH SCRIPT -->
      <div class="section">
        <div class="section-title"><span class="first">Opening</span> <span class="rest">Approach Script</span></div>
        <div class="section-rule"></div>
        <p>Use on the first phone call or written note. The goal of the first contact is not to buy the house — it is to earn the right to a walk-through.</p>
        <div class="script">
          <p><em>[Owner first name] —</em> my name is Aaron Norris. I am a local business owner here in Birmingham and I have long admired your home at 4505 Buttewoods.</p>
          <p>I am reaching out directly, not through an agent, because I wanted this to be a private conversation. If you have ever thought about selling — even casually — I would welcome the chance to walk the property with you and put a fair, serious offer in writing.</p>
          <p>No pressure, no timeline on your end. If the answer is no today, I respect that completely. If the timing is ever right, please keep my number. You can reach me anytime at <em>205-500-1343</em>.</p>
          <p>Thank you for your time. I appreciate you.</p>
        </div>
      </div>

      <!-- PRE-OFFER CHECKLIST -->
      <div class="section">
        <div class="section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></div>
        <div class="section-rule"></div>
        <ul class="checklist">
          <li>
            <strong>Pull tax card &amp; recorded deed</strong><span class="due">Week 1</span>
            Confirm exact square footage, lot size, legal description, and current assessed value.
          </li>
          <li>
            <strong>Build comp package — three closed, two active</strong><span class="due">Week 1</span>
            Within 1 mile, within 1,500 sqft band, sold in past 12 months. Adjust for condition.
          </li>
          <li>
            <strong>Confirm title is clean</strong><span class="due">Week 1</span>
            No open mortgages, liens, judgments, or lis pendens. Note any easements.
          </li>
          <li>
            <strong>Lock the three-tier price ladder in writing</strong><span class="due">Week 2</span>
            Signed and dated by Aaron before any price is discussed aloud.
          </li>
          <li>
            <strong>Line up financing letter or proof of funds</strong><span class="due">Week 2</span>
            Lender letter dated within 30 days, or bank letter for cash position.
          </li>
          <li>
            <strong>Retain closing attorney</strong><span class="due">Week 2</span>
            Engagement letter executed. Attorney prepares the offer letter and contract.
          </li>
          <li>
            <strong>Identify inspection &amp; survey vendors</strong><span class="due">Week 3</span>
            Ready to mobilize within 5 business days of contract execution.
          </li>
          <li>
            <strong>Document talking points &amp; walk-through questions</strong><span class="due">Week 3</span>
            One page, printed, taken to the walk-through. Never negotiate from memory.
          </li>
        </ul>
      </div>

      <!-- FINAL RULES -->
      <div class="section">
        <div class="section-title"><span class="first">Rules</span> <span class="rest">of Engagement</span></div>
        <div class="section-rule"></div>
        <div class="callout brand">
          <div class="callout-label">Non-Negotiables</div>
          <p>1) Every offer, counter, and acceptance is in writing. 2) Nothing verbal binds us or them. 3) All communication flows through Aaron. 4) The Walk-Away is sacred — if it is breached, we leave calmly and keep the door open. 5) Attorney review before any signature. 6) No surprises at closing — every number reconciles to the contract.</p>
        </div>
        <div class="callout">
          <div class="callout-label">Posture</div>
          <p>Calm, prepared, patient, and respectful. The best negotiating position is indifference earned by having other options. Aaron walks in with options; the seller feels that without being told.</p>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Internal acquisition brief — 4505 Buttewoods • Prepared April 23, 2026 • Confidential
    </div>
  </footer>

</body>
</html>