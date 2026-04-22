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
      --nu-success: #1B7F3A;
      --nu-warn: #B8860B;
      --nu-danger: #B22222;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-top: 4px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      margin-top: 18px;
      letter-spacing: 0.03em;
    }
    .nu-doc-eyebrow {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      border-radius: 2px;
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
      top: 380px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 800px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 65%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 56px 40px 72px;
      position: relative;
      z-index: 1;
    }

    /* DOC TITLE BLOCK */
    .doc-title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .doc-title-block h1 {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .doc-title-block h1 .accent { color: var(--nu-blue); }
    .doc-title-block .subtitle {
      font-weight: 400;
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto 18px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px 18px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 18px;
    }
    .doc-meta span {
      background: var(--nu-light-gray);
      padding: 6px 14px;
      border-radius: 20px;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
    .doc-meta span strong { color: var(--nu-blue); }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 22px;
      border-radius: 2px;
    }
    section.block { margin-bottom: 56px; }

    /* PROPERTY SNAPSHOT */
    .property-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
    }
    .snapshot-cell {
      background: var(--nu-white);
      padding: 22px 18px;
      text-align: center;
    }
    .snapshot-cell .label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--nu-body-text);
      margin-bottom: 8px;
      font-weight: 700;
    }
    .snapshot-cell .value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .snapshot-cell .value-sub {
      display: block;
      font-size: 0.78rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* CHEVRON BADGES (objectives) */
    .objective-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 28px 16px 18px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .objective-badge .num {
      width: 30px; height: 30px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* PRICE STACK */
    .price-stack {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-bottom: 28px;
    }
    .price-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
      border: 1px solid var(--nu-medium-gray);
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .price-card:hover { transform: translateY(-3px); box-shadow: 0 8px 22px rgba(0,0,0,0.1); }
    .price-card .pc-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--nu-body-text);
    }
    .price-card .pc-value {
      font-size: 1.85rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 6px;
    }
    .price-card .pc-note {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .price-card.ask { border-left: 5px solid var(--nu-medium-gray); }
    .price-card.opening { border-left: 5px solid var(--nu-warn); }
    .price-card.opening .pc-value { color: var(--nu-warn); }
    .price-card.target { border-left: 5px solid var(--nu-blue); }
    .price-card.target .pc-value { color: var(--nu-blue); }
    .price-card.walkaway { border-left: 5px solid var(--nu-danger); }
    .price-card.walkaway .pc-value { color: var(--nu-danger); }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      font-size: 0.92rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-table .num-cell { font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-table .pos { color: var(--nu-success); font-weight: 700; }
    .nu-table .neg { color: var(--nu-danger); font-weight: 700; }

    /* TWO COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }

    .leverage-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .leverage-card.ours { border-top: 4px solid var(--nu-blue); }
    .leverage-card.theirs { border-top: 4px solid var(--nu-cyan); }
    .leverage-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      margin-bottom: 14px;
      color: var(--nu-dark-text);
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .leverage-card h3 .pip {
      width: 10px; height: 10px;
      border-radius: 50%;
      background: var(--nu-blue);
    }
    .leverage-card.theirs h3 .pip { background: var(--nu-cyan); }
    .leverage-card ul {
      list-style: none;
      padding: 0;
    }
    .leverage-card li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.94rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .leverage-card li:last-child { border-bottom: none; }
    .leverage-card li::before {
      content: '▸';
      position: absolute;
      left: 4px;
      top: 8px;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .leverage-card.theirs li::before { color: var(--nu-cyan); }

    /* TIMELINE */
    .phase-list {
      position: relative;
      padding-left: 36px;
    }
    .phase-list::before {
      content: '';
      position: absolute;
      left: 12px;
      top: 8px;
      bottom: 8px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .phase {
      position: relative;
      margin-bottom: 22px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 20px 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .phase::before {
      content: '';
      position: absolute;
      left: -29px;
      top: 22px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .phase .phase-head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 8px;
    }
    .phase .phase-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
    }
    .phase .phase-when {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: rgba(0,0,255,0.08);
      padding: 4px 10px;
      border-radius: 12px;
    }
    .phase p { font-size: 0.94rem; }
    .phase ul { margin-top: 8px; padding-left: 22px; font-size: 0.92rem; }
    .phase ul li { margin-bottom: 4px; }

    /* CONCESSIONS */
    .concession-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .concession-card {
      background: linear-gradient(135deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      border-left: 5px solid var(--nu-cyan);
      padding: 20px 22px;
      border-radius: 6px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .concession-card .ask {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1rem;
      margin-bottom: 6px;
    }
    .concession-card .why {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .concession-card .value-tag {
      display: inline-block;
      margin-top: 10px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      padding: 4px 10px;
      border-radius: 12px;
      text-transform: uppercase;
    }

    /* RED FLAGS */
    .flag-list {
      background: #FFF8F0;
      border: 1px solid #F0D9A8;
      border-left: 5px solid var(--nu-warn);
      border-radius: 8px;
      padding: 22px 26px;
    }
    .flag-list h3 {
      font-weight: 900;
      color: #8B6914;
      margin-bottom: 12px;
      font-size: 1.05rem;
    }
    .flag-list ul { padding-left: 20px; }
    .flag-list li { margin-bottom: 8px; font-size: 0.94rem; color: #5A4410; }

    /* SCRIPT BOX */
    .script-box {
      background: var(--nu-navy);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 28px 30px;
      box-shadow: 0 6px 20px rgba(0,0,51,0.25);
      position: relative;
    }
    .script-box::before {
      content: '"';
      position: absolute;
      top: 8px;
      left: 18px;
      font-family: Georgia, serif;
      font-size: 5rem;
      color: var(--nu-cyan);
      opacity: 0.4;
      line-height: 1;
    }
    .script-box h3 {
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      padding-left: 24px;
    }
    .script-box p {
      font-style: italic;
      font-size: 1rem;
      line-height: 1.7;
      padding-left: 24px;
      color: rgba(255,255,255,0.92);
      margin-bottom: 12px;
    }
    .script-box p:last-child { margin-bottom: 0; }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border: 1px solid rgba(0,0,255,0.15);
      border-radius: 10px;
      padding: 22px 26px;
      margin-top: 18px;
    }
    .callout .label {
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .callout p { font-size: 0.96rem; color: var(--nu-dark-text); }

    /* DECISION GATE */
    .decision-gate {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 36px 32px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 8px 28px rgba(0,0,255,0.25);
    }
    .decision-gate h3 {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .decision-gate p {
      font-size: 1rem;
      max-width: 720px;
      margin: 0 auto 20px;
      color: rgba(255,255,255,0.95);
    }
    .gate-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
    }
    .gate-btn {
      display: inline-block;
      padding: 12px 26px;
      background: var(--nu-white);
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.92rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .gate-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.2); }
    .gate-btn.outline {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.85;
      font-weight: 400;
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
      letter-spacing: 0.04em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 56px; }
      .doc-title-block h1 { font-size: 1.7rem; }
      .objective-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .price-card .pc-value { font-size: 1.5rem; }
      .nu-table { font-size: 0.82rem; }
      .nu-table th, .nu-table td { padding: 10px 10px; }
      .phase-list { padding-left: 28px; }
      .phase::before { left: -25px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer, .decision-gate, .script-box {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .price-card, .leverage-card, .phase, .nu-table { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-eyebrow">Confidential — Personal / Real Estate</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC TITLE -->
      <div class="doc-title-block">
        <h1><span class="accent">4505 Buttewoods —</span> Estate Acquisition Negotiation Strategy</h1>
        <p class="subtitle">7,098 sq ft estate purchase. Negotiation playbook covering price targets, leverage points, concession ladder, walk-away terms, and a phased timeline from offer to closing.</p>
        <div class="doc-meta">
          <span><strong>Property:</strong> 4505 Buttewoods</span>
          <span><strong>Size:</strong> 7,098 sq ft</span>
          <span><strong>Prepared:</strong> April 22, 2026</span>
          <span><strong>For:</strong> Aaron C. Norris</span>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="block">
        <div class="nu-section-title">Property <span>Snapshot</span></div>
        <div class="nu-section-rule"></div>
        <div class="property-snapshot">
          <div class="snapshot-cell">
            <div class="label">Address</div>
            <div class="value" style="font-size:1.15rem;">4505 Buttewoods</div>
            <span class="value-sub">Subject Property</span>
          </div>
          <div class="snapshot-cell">
            <div class="label">Living Area</div>
            <div class="value">7,098</div>
            <span class="value-sub">square feet</span>
          </div>
          <div class="snapshot-cell">
            <div class="label">Type</div>
            <div class="value" style="font-size:1.2rem;">Estate</div>
            <span class="value-sub">Single Family</span>
          </div>
          <div class="snapshot-cell">
            <div class="label">Posture</div>
            <div class="value" style="font-size:1.2rem;">Buyer</div>
            <span class="value-sub">Cash-Capable</span>
          </div>
          <div class="snapshot-cell">
            <div class="label">Status</div>
            <div class="value" style="font-size:1.2rem; color: var(--nu-warn);">Active</div>
            <span class="value-sub">Negotiation Phase</span>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION OBJECTIVES -->
      <section class="block">
        <div class="nu-section-title">Negotiation <span>Objectives</span></div>
        <div class="nu-section-rule"></div>
        <div class="objective-badge"><span class="num">1</span>Acquire 4505 Buttewoods at or below fair market value, with seller-paid closing costs where possible</div>
        <div class="objective-badge"><span class="num">2</span>Secure all major systems, roof, foundation, and HVAC inspections without seller objection</div>
        <div class="objective-badge"><span class="num">3</span>Lock a closing window that aligns with personal financing readiness and estate disclosure timelines</div>
        <div class="objective-badge"><span class="num">4</span>Preserve walk-away authority — no emotional commitment until the inspection contingency clears</div>
      </section>

      <!-- PRICE STRATEGY -->
      <section class="block">
        <div class="nu-section-title">Price <span>Strategy</span></div>
        <div class="nu-section-rule"></div>
        <div class="price-stack">
          <div class="price-card ask">
            <div class="pc-label">List / Ask Price</div>
            <div class="pc-value">As Listed</div>
            <div class="pc-note">Confirm seller's published asking before written offer.</div>
          </div>
          <div class="price-card opening">
            <div class="pc-label">Opening Offer</div>
            <div class="pc-value">List − 12%</div>
            <div class="pc-note">Anchored low but defensible with comps and condition findings.</div>
          </div>
          <div class="price-card target">
            <div class="pc-label">Target Strike</div>
            <div class="pc-value">List − 6 to 8%</div>
            <div class="pc-note">Realistic landing zone after one to two rounds of counters.</div>
          </div>
          <div class="price-card walkaway">
            <div class="pc-label">Walk-Away Ceiling</div>
            <div class="pc-value">List − 3%</div>
            <div class="pc-note">Above this, return-on-equity math breaks — release the property.</div>
          </div>
        </div>

        <div class="callout">
          <div class="label">Pricing Rule</div>
          <p>Never lead with the target. Always open at the opening offer with documentation behind it (recent comparable sales, condition observations, days on market). The first number you say is the gravity well — set it where you can be moved upward in two visible concessions and still land at target.</p>
        </div>
      </section>

      <!-- COMPS / VALUATION TABLE -->
      <section class="block">
        <div class="nu-section-title">Valuation <span>Anchor Points</span></div>
        <div class="nu-section-rule"></div>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Anchor</th>
              <th>What to Pull</th>
              <th>Why It Matters</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Recent Comparable Sales</strong></td>
              <td>3 closed sales within 1.5 mi, last 6 months, 5,500–8,500 sq ft</td>
              <td>Establishes market $/sq ft range — backbone of opening number</td>
              <td class="num-cell">Buyer's Agent</td>
            </tr>
            <tr>
              <td><strong>Active Listings</strong></td>
              <td>All competing estate-class listings, same submarket</td>
              <td>Demonstrates supply pressure and seller's true competition</td>
              <td class="num-cell">Buyer's Agent</td>
            </tr>
            <tr>
              <td><strong>Days on Market</strong></td>
              <td>4505 Buttewoods DOM + neighborhood median DOM</td>
              <td>Long DOM = leverage shifts buyer's way; short DOM = restraint</td>
              <td class="num-cell">Aaron / Agent</td>
            </tr>
            <tr>
              <td><strong>Tax Assessed Value</strong></td>
              <td>Most recent county assessment + last 3 yrs trend</td>
              <td>Counter-anchor against an inflated ask</td>
              <td class="num-cell">Aaron</td>
            </tr>
            <tr>
              <td><strong>Pre-Inspection Walk</strong></td>
              <td>Visible roof age, HVAC tags, foundation cracks, water staining</td>
              <td>Surface-level findings convert directly into price reductions</td>
              <td class="num-cell">Aaron + Inspector</td>
            </tr>
            <tr>
              <td><strong>Carry Cost Math</strong></td>
              <td>Annual taxes + insurance + utility baseline + reserves</td>
              <td>Defines the true monthly cost — informs walk-away ceiling</td>
              <td class="num-cell">Aaron</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- LEVERAGE -->
      <section class="block">
        <div class="nu-section-title">Leverage <span>Map</span></div>
        <div class="nu-section-rule"></div>
        <div class="two-col">
          <div class="leverage-card ours">
            <h3><span class="pip"></span>Our Leverage</h3>
            <ul>
              <li><strong>Cash-or-near-cash buyer.</strong> Faster, surer close than financed buyers — sellers price certainty highly on estate-tier properties.</li>
              <li><strong>Flexible closing date.</strong> Can match seller's preferred timeline or extend to accommodate their next purchase.</li>
              <li><strong>No home-sale contingency.</strong> Removes the most common deal-killer condition — should be priced into the offer.</li>
              <li><strong>Qualified principal.</strong> Founder/CEO of an established LLC — credibility documentation on hand.</li>
              <li><strong>Patience.</strong> Not rushed. Walk-away authority is real and should be visible to seller from day one.</li>
              <li><strong>Pre-arranged inspector and attorney.</strong> Can move from accepted offer to closing on a tight, predictable schedule.</li>
            </ul>
          </div>
          <div class="leverage-card theirs">
            <h3><span class="pip"></span>Their Leverage</h3>
            <ul>
              <li><strong>Unique inventory.</strong> 7,098 sq ft estate — limited substitutes in this submarket.</li>
              <li><strong>Emotional attachment.</strong> Sellers may price legacy and improvements above market.</li>
              <li><strong>Multiple-offer potential.</strong> Estate-class buyers exist; assume at least one shadow bidder.</li>
              <li><strong>Time on their side.</strong> If they don't need to sell, they wait — neutralizes price pressure.</li>
              <li><strong>Property condition.</strong> If well-maintained with recent capex, deferred-maintenance arguments fail.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CONCESSION LADDER -->
      <section class="block">
        <div class="nu-section-title">Concession <span>Ladder</span></div>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom:18px; max-width: 880px;">Items to ask for on top of price. Some are gives, some are gets — never trade two for one. Every concession must be paired with a movement they make in return.</p>
        <div class="concession-grid">
          <div class="concession-card">
            <div class="ask">Seller-Paid Closing Costs</div>
            <div class="why">Request seller cover title insurance, recording fees, and transfer taxes — typically 1.5–2.5% of price.</div>
            <span class="value-tag">High-Value Ask</span>
          </div>
          <div class="concession-card">
            <div class="ask">Home Warranty (12 mo)</div>
            <div class="why">Request seller-paid one-year home warranty. Cheap for them, real risk reduction for us.</div>
            <span class="value-tag">Easy Win</span>
          </div>
          <div class="concession-card">
            <div class="ask">Major Systems Inspection Window</div>
            <div class="why">Minimum 10-business-day inspection contingency covering roof, foundation, HVAC, plumbing, electrical, and pest.</div>
            <span class="value-tag">Non-Negotiable</span>
          </div>
          <div class="concession-card">
            <div class="ask">Repair Credit at Closing</div>
            <div class="why">Convert inspection findings to a closing credit — cleaner than seller-arranged repairs and faster to close.</div>
            <span class="value-tag">Preferred Format</span>
          </div>
          <div class="concession-card">
            <div class="ask">Personal Property Inclusions</div>
            <div class="why">Itemize any furnishings, appliances, fixtures, or outdoor equipment to convey with the property.</div>
            <span class="value-tag">Anchor Item</span>
          </div>
          <div class="concession-card">
            <div class="ask">Earnest Money Sized Sensibly</div>
            <div class="why">Offer 1–2% earnest, fully refundable through inspection period. Larger only if needed to win against competing offers.</div>
            <span class="value-tag">Risk Control</span>
          </div>
        </div>
      </section>

      <!-- TIMELINE / PHASES -->
      <section class="block">
        <div class="nu-section-title">Negotiation <span>Phases</span></div>
        <div class="nu-section-rule"></div>
        <div class="phase-list">

          <div class="phase">
            <div class="phase-head">
              <div class="phase-title">Phase 1 — Intelligence Gathering</div>
              <div class="phase-when">Days 1–3</div>
            </div>
            <p>Build the negotiating file before anything is said in writing. Information advantage = price advantage.</p>
            <ul>
              <li>Pull comps, active listings, DOM, and tax history (see Valuation Anchor Points)</li>
              <li>Walk the property in person; document condition with timestamped photos</li>
              <li>Identify seller's situation — listing duration, prior price changes, motivation signals</li>
              <li>Confirm financing posture and earnest money source</li>
            </ul>
          </div>

          <div class="phase">
            <div class="phase-head">
              <div class="phase-title">Phase 2 — Opening Offer Submitted</div>
              <div class="phase-when">Day 4</div>
            </div>
            <p>Written offer at <strong>List − 12%</strong>. Accompanied by a one-page rationale referencing the strongest two comps and any condition concerns. Tone is matter-of-fact and respectful — never apologetic.</p>
            <ul>
              <li>Earnest money: 1–2% of offer, refundable through inspection</li>
              <li>Inspection contingency: 10 business days minimum</li>
              <li>Financing contingency: 21 days (or none if cash)</li>
              <li>Closing date: 35–45 days, flexible to seller</li>
              <li>Offer expiration: 48–72 hours — keeps urgency on their side</li>
            </ul>
          </div>

          <div class="phase">
            <div class="phase-head">
              <div class="phase-title">Phase 3 — First Counter Received</div>
              <div class="phase-when">Days 5–7</div>
            </div>
            <p>Expect a counter near list or only modestly off list. Do not respond same-day. Acknowledge receipt; respond within 24 hours with a measured second offer.</p>
            <ul>
              <li>Move halfway between opening and target — visible movement, not capitulation</li>
              <li>Add or remove ONE concession item to signal active negotiation</li>
              <li>Reference any new condition data or comp data as the reason for the counter shape</li>
            </ul>
          </div>

          <div class="phase">
            <div class="phase-head">
              <div class="phase-title">Phase 4 — Second Counter / Strike Zone</div>
              <div class="phase-when">Days 7–10</div>
            </div>
            <p>If their counter lands in the strike zone (List − 6 to 8%), accept with the standard concession package. If it does not, send a firm final-position letter with the walk-away ceiling and a clear timeline.</p>
            <ul>
              <li>Keep the email tone professional, not adversarial</li>
              <li>Explicitly identify what would cause us to walk</li>
              <li>Do NOT bluff a walk you would not actually take</li>
            </ul>
          </div>

          <div class="phase">
            <div class="phase-head">
              <div class="phase-title">Phase 5 — Inspection Period</div>
              <div class="phase-when">Days 11–25</div>
            </div>
            <p>Once under contract, the inspection contingency is the second negotiation. Findings convert to a repair credit — never accept seller-arranged repairs without explicit scope and licensed-contractor warranty.</p>
            <ul>
              <li>Schedule general inspection within first 3 days of contingency window</li>
              <li>Add specialist inspections (foundation, sewer scope, HVAC) where general inspector flags concerns</li>
              <li>Submit repair credit request within 7 days of inspection report</li>
              <li>Walk away if material defects exceed credit limits or seller refuses to negotiate</li>
            </ul>
          </div>

          <div class="phase">
            <div class="phase-head">
              <div class="phase-title">Phase 6 — Close</div>
              <div class="phase-when">Days 35–45</div>
            </div>
            <p>Final walkthrough 24–48 hours before closing. Verify all agreed inclusions remain. Confirm clean utility transfer and HOA standing. Funds wired only to verified attorney/escrow account.</p>
            <ul>
              <li>Confirm wire instructions verbally with attorney before sending funds</li>
              <li>Receive deed, keys, garage codes, security codes, manuals at close</li>
              <li>File closing documents in personal records and update insurance binder</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- RED FLAGS -->
      <section class="block">
        <div class="nu-section-title">Red Flags <span>— Pause &amp; Reassess</span></div>
        <div class="nu-section-rule"></div>
        <div class="flag-list">
          <h3>If any of the following surface, stop the clock and reassess before continuing:</h3>
          <ul>
            <li>Seller refuses any inspection contingency, or attempts to limit inspection scope</li>
            <li>Disclosure schedule omits known repairs, prior insurance claims, or boundary disputes</li>
            <li>Foundation, structural, or roof findings exceed 5% of purchase price in repair value</li>
            <li>Title commitment shows liens, easements, or unresolved estate matters that cannot be cleared by closing</li>
            <li>Survey reveals encroachments, setback violations, or square-footage discrepancies vs listing</li>
            <li>Seller or seller's agent attempts to pressure waiver of contingencies in exchange for offer acceptance</li>
            <li>HOA documents reveal pending special assessments or material restrictions on use</li>
            <li>Comparable sales data does not support price within walk-away ceiling after inspection</li>
          </ul>
        </div>
      </section>

      <!-- SCRIPT -->
      <section class="block">
        <div class="nu-section-title">Opening <span>Script — Verbal &amp; Written</span></div>
        <div class="nu-section-rule"></div>
        <div class="script-box">
          <h3>Cover Note Accompanying the Opening Offer</h3>
          <p>I appreciate you taking the time to consider this offer on 4505 Buttewoods. The property is well presented, and we recognize the care that has gone into it.</p>
          <p>Our offer reflects a careful review of recent comparable sales in the immediate area, current days on market for estate-class properties, and condition observations from the walkthrough. We are a serious, qualified buyer with a flexible closing window and no contingent home sale.</p>
          <p>We would welcome a counter and are prepared to move quickly through inspection and to closing. The offer remains open until [date / 48–72 hours]. Whatever the outcome, thank you for your consideration.</p>
          <p>Sincerely,<br>Aaron C. Norris</p>
        </div>

        <div class="callout">
          <div class="label">Tone Discipline</div>
          <p>Warm, direct, never pushy. Never apologize for the offer. Never explain at length — let the rationale and the comps do the work. Aaron's voice: confident, respectful, brief.</p>
        </div>
      </section>

      <!-- WALK AWAY -->
      <section class="block">
        <div class="nu-section-title">Walk-Away <span>Conditions</span></div>
        <div class="nu-section-rule"></div>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Trigger</th>
              <th>Threshold</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Final price exceeds walk-away ceiling</td>
              <td class="num-cell">&gt; List − 3%</td>
              <td class="neg">Walk</td>
            </tr>
            <tr>
              <td>Inspection findings + repair credit gap</td>
              <td class="num-cell">&gt; 5% of price uncovered</td>
              <td class="neg">Walk</td>
            </tr>
            <tr>
              <td>Title or estate cloud cannot clear by close</td>
              <td>Any unresolved cloud</td>
              <td class="neg">Walk</td>
            </tr>
            <tr>
              <td>Seller refuses standard inspection contingency</td>
              <td>Any waiver demand</td>
              <td class="neg">Walk</td>
            </tr>
            <tr>
              <td>Survey discrepancy vs listed sq ft</td>
              <td class="num-cell">&gt; 3% deviation</td>
              <td class="neg">Renegotiate or walk</td>
            </tr>
            <tr>
              <td>Carry cost exceeds personal capacity</td>
              <td>Tax + insurance + reserves over budget</td>
              <td class="neg">Walk</td>
            </tr>
            <tr>
              <td>Strike-zone outcome reached</td>
              <td class="num-cell">List − 6 to 8% with concessions</td>
              <td class="pos">Accept</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DECISION GATE -->
      <section class="block">
        <div class="decision-gate">
          <h3>Decision Gate — Aaron Approves Before Submission</h3>
          <p>No written offer, counter, repair credit demand, or walk-away letter is issued without Aaron's explicit GO. This document is the strategy; the trigger is always Aaron.</p>
          <div class="gate-actions">
            <a class="gate-btn" href="tel:2055001343">Discuss — 205-500-1343</a>
            <a class="gate-btn outline" href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Negotiation%20Strategy">Send Edits / Approve</a>
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
    <div class="nu-footer-meta">Confidential — Personal real estate negotiation strategy. Not for external distribution.</div>
  </footer>

</body>
</html>