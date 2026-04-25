<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Negotiation Brief — Norris Utilities®</title>
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
      --nu-warning: #C97A1B;
      --nu-danger: #B11E1E;
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

    /* ══ HEADER ══ */
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
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
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 30px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 380px; left: 50%;
      transform: translateX(-65%);
      width: 65vw; max-width: 720px; height: 720px;
      background: radial-gradient(circle, rgba(0,0,255,0.045) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* ══ DOC TITLE ══ */
    .nu-doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
      letter-spacing: -0.01em;
    }
    .nu-doc-title span { color: var(--nu-blue); }
    .nu-doc-subtitle {
      font-size: 1.1rem;
      color: #5a5a6a;
      font-weight: 400;
      margin-bottom: 8px;
    }
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 28px;
      padding: 18px 0 0;
      border-top: 0;
      margin-bottom: 40px;
      font-size: 0.88rem;
      color: #5a5a6a;
    }
    .nu-doc-meta strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-right: 6px;
    }

    /* ══ PROPERTY HERO CARD ══ */
    .nu-hero {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 0;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 28px rgba(0,0,0,0.08);
      margin-bottom: 50px;
    }
    .nu-hero-visual {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001a4d 50%, #002a7a 100%);
      padding: 38px 32px;
      color: var(--nu-white);
      position: relative;
      overflow: hidden;
    }
    .nu-hero-visual::before {
      content: '';
      position: absolute;
      top: -40%; right: -30%;
      width: 100%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 65%);
    }
    .nu-hero-visual > * { position: relative; }
    .nu-hero-eyebrow {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-hero-address {
      font-weight: 900;
      font-size: 2rem;
      line-height: 1.15;
      margin-bottom: 6px;
    }
    .nu-hero-city {
      font-weight: 400;
      font-size: 1.05rem;
      color: rgba(255,255,255,0.85);
      margin-bottom: 28px;
    }
    .nu-hero-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px 14px;
    }
    .nu-stat {
      padding: 12px 0;
      border-top: 1px solid rgba(255,255,255,0.15);
    }
    .nu-stat-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(255,255,255,0.6);
      margin-bottom: 4px;
    }
    .nu-stat-value {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
    }
    .nu-stat-value small {
      font-size: 0.75rem;
      font-weight: 400;
      color: rgba(255,255,255,0.7);
      margin-left: 4px;
    }

    .nu-hero-summary {
      padding: 38px 36px;
      background: var(--nu-white);
    }
    .nu-hero-summary h2 {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .nu-hero-summary h2 span { color: var(--nu-blue); }
    .nu-hero-summary p {
      font-size: 0.96rem;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    .nu-status-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 18px;
    }
    .nu-pill {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .nu-pill-action { background: rgba(0,0,255,0.1); color: var(--nu-blue); }
    .nu-pill-priority { background: rgba(177,30,30,0.1); color: var(--nu-danger); }
    .nu-pill-personal { background: rgba(201,168,76,0.18); color: #8a6f1f; }

    /* ══ SECTION ══ */
    .nu-section { margin-bottom: 56px; }
    .nu-section-header {
      display: flex;
      align-items: baseline;
      gap: 14px;
      margin-bottom: 24px;
      padding-bottom: 14px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-num {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-cyan);
      letter-spacing: 0.1em;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-dark-text);
    }
    .nu-section-title span { color: var(--nu-blue); }

    /* ══ INFO GRID ══ */
    .nu-info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-card-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: #6a6a7a;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .nu-card-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 6px;
    }
    .nu-card-note {
      font-size: 0.82rem;
      color: #6a6a7a;
      line-height: 1.5;
    }
    .nu-card-cyan { border-left-color: var(--nu-cyan); }
    .nu-card-navy { border-left-color: var(--nu-navy); }
    .nu-card-gold { border-left-color: var(--nu-accent-gold); }

    /* ══ PRICE LADDER ══ */
    .nu-price-ladder {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-ladder-row {
      display: grid;
      grid-template-columns: 70px 1fr 1.2fr 130px;
      align-items: center;
      padding: 18px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      gap: 18px;
    }
    .nu-ladder-row:last-child { border-bottom: none; }
    .nu-ladder-row.head {
      background: var(--nu-light-gray);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #6a6a7a;
      padding: 12px 22px;
    }
    .nu-ladder-tag {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 8px;
      background: var(--nu-blue);
      color: var(--nu-white);
      text-align: center;
      line-height: 50px;
      font-weight: 900;
      font-size: 1.2rem;
    }
    .nu-ladder-tag.opening { background: var(--nu-cyan); color: var(--nu-navy); }
    .nu-ladder-tag.target { background: var(--nu-blue); }
    .nu-ladder-tag.walk { background: var(--nu-danger); }
    .nu-ladder-tag.list { background: #6a6a7a; }
    .nu-ladder-label {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
    }
    .nu-ladder-rationale {
      font-size: 0.86rem;
      color: var(--nu-body-text);
    }
    .nu-ladder-amount {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-dark-text);
      text-align: right;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      display: flex;
      gap: 14px;
      align-items: flex-start;
      padding: 14px 18px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      margin-bottom: 10px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
    }
    .nu-check-num {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      text-align: center;
      line-height: 28px;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .nu-check-content { flex: 1; }
    .nu-check-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 0.98rem;
    }
    .nu-check-desc {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* ══ TWO COL ══ */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .nu-col-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-col-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-cyan);
      letter-spacing: 0.02em;
    }
    .nu-col-card.leverage h3 { border-bottom-color: var(--nu-success); }
    .nu-col-card.risks h3 { border-bottom-color: var(--nu-danger); }
    .nu-col-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-col-card li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.92rem;
      color: var(--nu-body-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-col-card li:last-child { border-bottom: none; }
    .nu-col-card.leverage li::before {
      content: '✓';
      position: absolute;
      left: 0; top: 8px;
      color: var(--nu-success);
      font-weight: 900;
    }
    .nu-col-card.risks li::before {
      content: '!';
      position: absolute;
      left: 6px; top: 7px;
      color: var(--nu-danger);
      font-weight: 900;
      font-size: 1rem;
    }

    /* ══ TIMELINE ══ */
    .nu-timeline {
      position: relative;
      padding-left: 32px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 9px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .nu-tl-item {
      position: relative;
      padding: 0 0 22px 0;
    }
    .nu-tl-item::before {
      content: '';
      position: absolute;
      left: -28px; top: 6px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
    }
    .nu-tl-when {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-tl-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .nu-tl-desc {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* ══ SCRIPT BOX ══ */
    .nu-script {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef0ff 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 26px;
      margin-bottom: 16px;
    }
    .nu-script-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-script p {
      font-size: 0.96rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.65;
    }
    .nu-script p:last-child { margin-bottom: 0; }
    .nu-script em {
      font-style: italic;
      color: #5a5a6a;
    }

    /* ══ NEXT ACTION CALLOUT ══ */
    .nu-callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001a66 50%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 36px 38px;
      margin-bottom: 50px;
      position: relative;
      overflow: hidden;
    }
    .nu-callout::before {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.2) 0%, transparent 65%);
    }
    .nu-callout > * { position: relative; }
    .nu-callout-eyebrow {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
    }
    .nu-callout h2 {
      font-weight: 900;
      font-size: 1.7rem;
      margin-bottom: 12px;
      line-height: 1.2;
    }
    .nu-callout p {
      font-size: 1.02rem;
      color: rgba(255,255,255,0.92);
      margin-bottom: 20px;
      max-width: 700px;
    }
    .nu-callout-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .nu-btn {
      display: inline-block;
      padding: 12px 24px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.92rem;
      text-decoration: none;
      letter-spacing: 0.03em;
      transition: all 0.2s ease;
    }
    .nu-btn-primary {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .nu-btn-primary:hover { background: var(--nu-white); transform: translateY(-1px); }
    .nu-btn-ghost {
      background: transparent;
      color: var(--nu-white);
      border: 1.5px solid rgba(255,255,255,0.5);
    }
    .nu-btn-ghost:hover { background: rgba(255,255,255,0.1); }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .nu-hero { grid-template-columns: 1fr; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-ladder-row { grid-template-columns: 50px 1fr 110px; }
      .nu-ladder-row .nu-ladder-rationale { display: none; }
      .nu-ladder-row.head .nu-ladder-rationale { display: none; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 50px 22px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 60px; }
      .nu-doc-title { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.3rem; }
      .nu-hero-visual, .nu-hero-summary { padding: 28px 24px; }
      .nu-hero-address { font-size: 1.6rem; }
      .nu-hero-stats { grid-template-columns: 1fr 1fr; }
      .nu-callout { padding: 28px 24px; }
      .nu-callout h2 { font-size: 1.35rem; }
    }

    @media print {
      body { background: white; }
      .nu-header, .nu-footer, .nu-hero-visual, .nu-callout {
        -webkit-print-color-adjust: exact; print-color-adjust: exact;
      }
      .nu-card, .nu-col-card, .nu-script { box-shadow: none; }
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
    <div class="nu-doc-badge">Personal · Real Estate · Negotiation Brief</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC HEADER -->
      <div class="nu-doc-title"><span>4505 Buttewoods</span> — Negotiation Brief</div>
      <div class="nu-doc-subtitle">Acquisition strategy for the 7,098 sq ft Buttewoods estate</div>
      <div class="nu-doc-meta">
        <div><strong>Prepared for:</strong> Aaron C. Norris</div>
        <div><strong>Date:</strong> April 25, 2026</div>
        <div><strong>Source:</strong> reMarkable action item</div>
        <div><strong>Status:</strong> Pre-offer planning</div>
      </div>

      <!-- HERO -->
      <section class="nu-hero">
        <div class="nu-hero-visual">
          <div class="nu-hero-eyebrow">The Property</div>
          <div class="nu-hero-address">4505 Buttewoods</div>
          <div class="nu-hero-city">Estate residence · 7,098 sq ft</div>
          <div class="nu-hero-stats">
            <div class="nu-stat">
              <div class="nu-stat-label">Living Area</div>
              <div class="nu-stat-value">7,098<small>sq ft</small></div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Class</div>
              <div class="nu-stat-value">Estate</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Buyer Profile</div>
              <div class="nu-stat-value">Cash-Strong</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Action Type</div>
              <div class="nu-stat-value">Negotiate</div>
            </div>
          </div>
        </div>
        <div class="nu-hero-summary">
          <h2>The <span>Objective</span></h2>
          <p>Open negotiations on the 4505 Buttewoods estate at a price that reflects current carry costs and property condition — not list. Lead with diligence, negotiate from informed terms, and protect the option to walk if the seller will not move into the target band.</p>
          <p>This is a personal real estate transaction for Aaron C. Norris. All correspondence and offer paperwork stays separate from Norris Utilities®, LLC.</p>
          <div class="nu-status-row">
            <span class="nu-pill nu-pill-action">ACTION ITEM</span>
            <span class="nu-pill nu-pill-priority">HIGH PRIORITY</span>
            <span class="nu-pill nu-pill-personal">PERSONAL — NOT NU</span>
          </div>
        </div>
      </section>

      <!-- SECTION 1 — KEY DATA POINTS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">01</div>
          <div class="nu-section-title">Key <span>Data Points</span> to Confirm Before Offer</div>
        </div>
        <div class="nu-info-grid">
          <div class="nu-card">
            <div class="nu-card-label">List Price</div>
            <div class="nu-card-value">Confirm</div>
            <div class="nu-card-note">Pull current MLS/agent sheet. Note original list, current list, and total $ in reductions to date.</div>
          </div>
          <div class="nu-card nu-card-cyan">
            <div class="nu-card-label">Days on Market</div>
            <div class="nu-card-value">Confirm</div>
            <div class="nu-card-note">Anything over 90 days is leverage. Over 180 days the seller is carrying real pain.</div>
          </div>
          <div class="nu-card nu-card-navy">
            <div class="nu-card-label">Last Sale / Tax Basis</div>
            <div class="nu-card-value">Pull from county</div>
            <div class="nu-card-note">Prior sale price, year, and current assessed value set the floor for the negotiating range.</div>
          </div>
          <div class="nu-card nu-card-gold">
            <div class="nu-card-label">Annual Carry</div>
            <div class="nu-card-value">Estimate</div>
            <div class="nu-card-note">Property tax + insurance + utilities on a 7,098 sq ft home is meaningful — quantify it.</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Comparable Sales</div>
            <div class="nu-card-value">3–5 closed</div>
            <div class="nu-card-note">Same submarket, 5,000–8,000 sq ft, closed in last 12 months. Build the $/sq ft range.</div>
          </div>
          <div class="nu-card nu-card-cyan">
            <div class="nu-card-label">Seller Motivation</div>
            <div class="nu-card-value">Diagnose</div>
            <div class="nu-card-note">Estate sale, divorce, relocation, or trade-up? Each profile changes the negotiation lever.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 2 — PRICE LADDER -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">02</div>
          <div class="nu-section-title">Price <span>Ladder</span> — Frame the Negotiation</div>
        </div>
        <div class="nu-price-ladder">
          <div class="nu-ladder-row head">
            <div></div>
            <div>Position</div>
            <div class="nu-ladder-rationale">Rationale</div>
            <div style="text-align:right;">Anchor</div>
          </div>
          <div class="nu-ladder-row">
            <div class="nu-ladder-tag list">L</div>
            <div class="nu-ladder-label">Seller list price</div>
            <div class="nu-ladder-rationale">Reference only. Confirm before any conversation; do not echo it back.</div>
            <div class="nu-ladder-amount">List</div>
          </div>
          <div class="nu-ladder-row">
            <div class="nu-ladder-tag opening">A</div>
            <div class="nu-ladder-label">Opening offer</div>
            <div class="nu-ladder-rationale">List minus 12–18%. Justified in writing with comp data and identified items needing work.</div>
            <div class="nu-ladder-amount">−12 to −18%</div>
          </div>
          <div class="nu-ladder-row">
            <div class="nu-ladder-tag target">T</div>
            <div class="nu-ladder-label">Target close</div>
            <div class="nu-ladder-rationale">List minus 7–10%. The number you are actually willing to sign at on standard terms.</div>
            <div class="nu-ladder-amount">−7 to −10%</div>
          </div>
          <div class="nu-ladder-row">
            <div class="nu-ladder-tag walk">W</div>
            <div class="nu-ladder-label">Walk number</div>
            <div class="nu-ladder-rationale">Hard ceiling. Above this you walk and revisit in 30–45 days if still on market.</div>
            <div class="nu-ladder-amount">−4 to −5%</div>
          </div>
        </div>
      </section>

      <!-- SECTION 3 — LEVERAGE & RISKS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">03</div>
          <div class="nu-section-title">Leverage <span>vs. Risk</span></div>
        </div>
        <div class="nu-two-col">
          <div class="nu-col-card leverage">
            <h3>What works in your favor</h3>
            <ul>
              <li>Cash-strong buyer profile — clean offer, no financing contingency drama.</li>
              <li>7,098 sq ft is a thin buyer pool — most families want 3,500–5,000 sq ft.</li>
              <li>Carry costs on this size of home compound seller pressure every month.</li>
              <li>Norris reputation in the Birmingham market — credibility shortens the loop.</li>
              <li>Willingness and ability to close on the seller's preferred timeline.</li>
            </ul>
          </div>
          <div class="nu-col-card risks">
            <h3>What you must watch for</h3>
            <ul>
              <li>Estate-class homes have hidden capex — roof, HVAC zones, foundation, pool.</li>
              <li>Personal use of business cash flow — keep this transaction off the NU balance sheet.</li>
              <li>Property tax reassessment after sale at the new basis — model it.</li>
              <li>Seller emotional attachment can override math; do not burn the relationship.</li>
              <li>Time burn — cap diligence to a defined window so it does not displace NU work.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 4 — DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">04</div>
          <div class="nu-section-title">Pre-Offer <span>Diligence</span> Checklist</div>
        </div>
        <ol class="nu-checklist">
          <li>
            <div class="nu-check-num">1</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Pull MLS history</div>
              <div class="nu-check-desc">Original list, every reduction, total days on market, prior expired/withdrawn listings.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">2</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Pull county records</div>
              <div class="nu-check-desc">Last sale price + date, current assessed value, annual property tax, lien/judgment search.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">3</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Build comp set</div>
              <div class="nu-check-desc">3–5 closed sales, last 12 months, 5,000–8,000 sq ft, same submarket. Adjust for lot, finish, age.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">4</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Drive-by + interior walk</div>
              <div class="nu-check-desc">Note roof age, HVAC equipment, foundation cracks, drainage, pool, mechanical room. Photograph everything.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">5</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Independent inspection bid</div>
              <div class="nu-check-desc">Get a ballpark from a trusted inspector for a home this size before writing the offer.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">6</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Lender + cash structure</div>
              <div class="nu-check-desc">Decide cash, conventional, or hybrid. Pull proof-of-funds letter dated within 30 days.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">7</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Loop in CPA</div>
              <div class="nu-check-desc">Confirm tax handling, basis tracking, and that the structure does not entangle Norris Utilities® entity.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">8</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Identify listing agent + seller's posture</div>
              <div class="nu-check-desc">Who's the agent? Who is the seller? What is driving the sale? Confirm before the first call.</div>
            </div>
          </li>
        </ol>
      </section>

      <!-- SECTION 5 — TIMELINE -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">05</div>
          <div class="nu-section-title">Negotiation <span>Timeline</span></div>
        </div>
        <div class="nu-timeline">
          <div class="nu-tl-item">
            <div class="nu-tl-when">Week 1 — Diligence</div>
            <div class="nu-tl-title">Gather all data, walk the property</div>
            <div class="nu-tl-desc">Complete the diligence checklist above. Do not call the listing agent yet beyond a basic showing request.</div>
          </div>
          <div class="nu-tl-item">
            <div class="nu-tl-when">Week 2 — Position</div>
            <div class="nu-tl-title">Lock the price ladder and terms</div>
            <div class="nu-tl-desc">Confirm opening offer, target, and walk number. Write the offer letter and supporting comp memo.</div>
          </div>
          <div class="nu-tl-item">
            <div class="nu-tl-when">Week 3 — Open</div>
            <div class="nu-tl-title">Submit written offer with proof of funds</div>
            <div class="nu-tl-desc">Lead with terms — close timeline, earnest money, inspection window. Anchor the discussion on data, not emotion.</div>
          </div>
          <div class="nu-tl-item">
            <div class="nu-tl-when">Week 3–4 — Counter</div>
            <div class="nu-tl-title">Single counter, then patience</div>
            <div class="nu-tl-desc">If the seller counters, respond once at or near target. Do not chase. Silence is a tool.</div>
          </div>
          <div class="nu-tl-item">
            <div class="nu-tl-when">Week 4–5 — Decision</div>
            <div class="nu-tl-title">Sign at target — or walk cleanly</div>
            <div class="nu-tl-desc">If terms land at or below target, sign. If not, withdraw without rancor and revisit in 30–45 days.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 6 — TALK TRACK -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">06</div>
          <div class="nu-section-title">Talk <span>Tracks</span> for Aaron's Voice</div>
        </div>

        <div class="nu-script">
          <div class="nu-script-label">Opening — to listing agent</div>
          <p>"I'm a serious cash-strong buyer working through Buttewoods carefully. I'd like a real conversation about the property's condition, the seller's timeline, and what would make a deal work for both sides. I'm not here to lowball — I'm here to close on terms that make sense."</p>
        </div>

        <div class="nu-script">
          <div class="nu-script-label">Anchoring the offer</div>
          <p>"My offer reflects three things: closed comps in this submarket over the last twelve months, the items the home will need on day one, and the carry profile your seller has been absorbing. I've put it in writing so we're working off the same numbers."</p>
        </div>

        <div class="nu-script">
          <div class="nu-script-label">Holding the line on counter</div>
          <p>"I appreciate the counter. My math hasn't changed. I'll move to <em>[target number]</em> with a clean close and a fast inspection window — that's where this works for me. If that's not the right home for your seller, I respect that completely."</p>
        </div>

        <div class="nu-script">
          <div class="nu-script-label">Walking — keep the door open</div>
          <p>"It sounds like we're not going to land in the same place today, and that's fine. Please keep my number. If anything changes on the seller's side over the next 30 to 45 days, I'm a phone call away."</p>
        </div>
      </section>

      <!-- SECTION 7 — DECISION GUARDRAILS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">07</div>
          <div class="nu-section-title">Decision <span>Guardrails</span></div>
        </div>
        <div class="nu-info-grid">
          <div class="nu-card">
            <div class="nu-card-label">Sign When</div>
            <div class="nu-card-value">Target ≤ Walk</div>
            <div class="nu-card-note">Final price + closing costs land at or below the walk number, with inspection contingency intact.</div>
          </div>
          <div class="nu-card nu-card-cyan">
            <div class="nu-card-label">Renegotiate When</div>
            <div class="nu-card-value">Inspection finds &gt; 2% repair</div>
            <div class="nu-card-note">Document, get written bids, and ask for credit equal to bid total or seller-paid repair.</div>
          </div>
          <div class="nu-card nu-card-navy">
            <div class="nu-card-label">Walk When</div>
            <div class="nu-card-value">Seller refuses to move</div>
            <div class="nu-card-note">If counters stall above the walk number, exit cleanly. The leverage compounds in your favor.</div>
          </div>
          <div class="nu-card nu-card-gold">
            <div class="nu-card-label">Reset When</div>
            <div class="nu-card-value">+30 to +45 days</div>
            <div class="nu-card-note">If still listed and unsold, reopen at the same target. Time has done the work for you.</div>
          </div>
        </div>
      </section>

      <!-- NEXT ACTION CALLOUT -->
      <section class="nu-callout">
        <div class="nu-callout-eyebrow">Aaron — Next Action</div>
        <h2>This Week: Pull MLS history + county records on 4505 Buttewoods.</h2>
        <p>Before any conversation with the listing agent, lock down the data set: list history, days on market, last sale, taxes, and three closed comps. That single hour of work sets the entire negotiation. Block 60 minutes Monday morning.</p>
        <div class="nu-callout-actions">
          <a href="tel:2055001343" class="nu-btn nu-btn-primary">Call 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Negotiation%20Brief" class="nu-btn nu-btn-ghost">Email Acknowledgement</a>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      130 Inverness Plaza #210, Birmingham, AL 35242
    </div>
    <div class="nu-footer-meta">
      Personal real estate brief · Prepared April 25, 2026 · Source: reMarkable action item
    </div>
  </footer>

</body>
</html>