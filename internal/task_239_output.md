<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Strategy — Norris Utilities®</title>
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
      --nu-warning: #B8860B;
      --nu-alert: #B22222;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
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
      width: 76px;
      height: 76px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
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
      width: 65%; max-width: 700px; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.02) 40%, transparent 70%);
      border-radius: 50%;
      opacity: 0.7;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOC HEADER */
    .doc-classification {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      padding: 6px 16px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      border-radius: 3px;
      margin-bottom: 18px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
      letter-spacing: -0.01em;
    }
    .doc-title .accent {
      color: var(--nu-blue);
    }
    .doc-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 28px;
    }
    .doc-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      padding: 18px 22px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
    }
    .doc-meta-item .label {
      display: block;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .doc-meta-item .value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin: 44px 0 16px;
      line-height: 1.2;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 22px;
      border-radius: 2px;
    }

    p { margin-bottom: 14px; font-size: 1rem; }

    /* BADGE ROW */
    .nu-badge-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
      margin-bottom: 30px;
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
      letter-spacing: 0.02em;
    }
    .nu-badge-icon {
      width: 28px; height: 28px;
      margin-right: 14px;
      fill: var(--nu-cyan);
      flex-shrink: 0;
    }

    /* PROPERTY DOSSIER */
    .property-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.06);
      overflow: hidden;
      margin-bottom: 30px;
    }
    .property-headline {
      grid-column: 1 / -1;
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 22px 26px;
    }
    .property-headline .addr {
      font-size: 1.4rem;
      font-weight: 900;
      letter-spacing: 0.01em;
      margin-bottom: 4px;
    }
    .property-headline .sub {
      color: var(--nu-cyan);
      font-style: italic;
      font-weight: 400;
      font-size: 0.95rem;
    }
    .property-spec {
      padding: 18px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      border-right: 1px solid var(--nu-medium-gray);
    }
    .property-spec:nth-child(2n+1) { border-right: 1px solid var(--nu-medium-gray); }
    .property-spec:nth-child(2n) { border-right: none; }
    .property-spec .lbl {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .property-spec .val {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .property-spec .val small {
      display: block;
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* OBJECTIVES GRID */
    .objectives-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }
    .objective-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .objective-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .objective-card .num {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.85rem;
      padding: 4px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
      letter-spacing: 0.05em;
    }
    .objective-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .objective-card p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      margin-bottom: 0;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 6px;
      overflow: hidden;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 16px;
      font-size: 0.94rem;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table .right { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-table .center { text-align: center; }

    /* PHASES */
    .phase-block {
      display: grid;
      grid-template-columns: 80px 1fr;
      gap: 20px;
      padding: 22px 24px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 14px;
    }
    .phase-block .phase-num {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-blue);
      line-height: 1;
      letter-spacing: -0.02em;
    }
    .phase-block .phase-num small {
      display: block;
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: var(--nu-body-text);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .phase-block h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .phase-block .timing {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .phase-block ul {
      margin-left: 18px;
      font-size: 0.94rem;
    }
    .phase-block ul li { margin-bottom: 5px; }
    .phase-block ul li::marker { color: var(--nu-cyan); }

    /* LEVERAGE LIST */
    .leverage-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 30px;
    }
    .leverage-col h3 {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding-bottom: 8px;
      margin-bottom: 12px;
      border-bottom: 2px solid currentColor;
    }
    .leverage-col.our h3 { color: var(--nu-success); }
    .leverage-col.their h3 { color: var(--nu-alert); }
    .leverage-col ul {
      list-style: none;
      padding: 0;
    }
    .leverage-col li {
      padding: 10px 12px 10px 30px;
      font-size: 0.92rem;
      position: relative;
      background: var(--nu-light-gray);
      border-radius: 4px;
      margin-bottom: 6px;
    }
    .leverage-col.our li::before {
      content: '+';
      position: absolute;
      left: 10px; top: 9px;
      width: 16px; height: 16px;
      background: var(--nu-success);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.75rem;
      line-height: 16px;
      text-align: center;
    }
    .leverage-col.their li::before {
      content: '!';
      position: absolute;
      left: 10px; top: 9px;
      width: 16px; height: 16px;
      background: var(--nu-alert);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.75rem;
      line-height: 16px;
      text-align: center;
    }

    /* OFFER BAND */
    .offer-band {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin-bottom: 30px;
      box-shadow: 0 8px 28px rgba(0,0,255,0.18);
    }
    .offer-band .lbl {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.85);
      margin-bottom: 8px;
    }
    .offer-band .price {
      font-size: 2.6rem;
      font-weight: 900;
      letter-spacing: -0.01em;
      line-height: 1;
      margin-bottom: 8px;
    }
    .offer-band .terms {
      font-size: 1rem;
      color: rgba(255,255,255,0.95);
      font-style: italic;
    }
    .offer-band-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.25);
    }
    .offer-band-grid div .h {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.8);
      margin-bottom: 4px;
    }
    .offer-band-grid div .v {
      font-size: 1.1rem;
      font-weight: 700;
    }

    /* SCRIPT BOX */
    .script-box {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 22px 24px;
      margin-bottom: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .script-box .ctx {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .script-box .quote {
      font-style: italic;
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
      padding-left: 14px;
      border-left: 2px solid var(--nu-cyan);
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
      counter-reset: cl;
    }
    .checklist li {
      counter-increment: cl;
      padding: 12px 12px 12px 50px;
      position: relative;
      background: var(--nu-light-gray);
      border-radius: 4px;
      margin-bottom: 8px;
      font-size: 0.95rem;
    }
    .checklist li::before {
      content: counter(cl);
      position: absolute;
      left: 12px; top: 50%;
      transform: translateY(-50%);
      width: 26px; height: 26px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      line-height: 26px;
      text-align: center;
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* WALK-AWAY */
    .walkaway-box {
      background: linear-gradient(135deg, #fff7e8 0%, #fffaf0 100%);
      border: 2px solid var(--nu-warning);
      border-radius: 8px;
      padding: 22px 26px;
      margin-bottom: 30px;
    }
    .walkaway-box h3 {
      color: var(--nu-warning);
      font-weight: 900;
      font-size: 1.1rem;
      margin-bottom: 10px;
      letter-spacing: 0.04em;
    }
    .walkaway-box p { font-size: 0.95rem; margin-bottom: 6px; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #001a99 100%);
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
      letter-spacing: 0.02em;
    }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
      opacity: 0.5;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact strong {
      display: block;
      color: var(--nu-white);
      font-weight: 700;
      margin-bottom: 4px;
      letter-spacing: 0.04em;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .doc-title { font-size: 1.7rem; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .property-card { grid-template-columns: 1fr; }
      .property-spec { border-right: none !important; }
      .leverage-grid { grid-template-columns: 1fr; }
      .offer-band .price { font-size: 1.9rem; }
      .offer-band-grid { grid-template-columns: 1fr; }
      .phase-block { grid-template-columns: 1fr; gap: 8px; }
      .phase-block .phase-num { font-size: 1.6rem; }
      .nu-table { font-size: 0.85rem; }
      .nu-table th, .nu-table td { padding: 10px 10px; }
      .nu-footer { padding: 36px 22px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .objective-card, .nu-table { box-shadow: none; }
      .offer-band, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
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
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <span class="doc-classification">Acquisition Strategy · Confidential</span>
      <h1 class="doc-title">4505 Buttewoods Estate <span class="accent">— Negotiation Plan</span></h1>
      <p class="doc-subtitle">Acquisition strategy, offer framework, and negotiation playbook for the 7,098 sq ft residential estate at 4505 Buttewoods.</p>

      <div class="doc-meta">
        <div class="doc-meta-item"><span class="label">Subject Property</span><span class="value">4505 Buttewoods</span></div>
        <div class="doc-meta-item"><span class="label">Square Footage</span><span class="value">7,098 sq ft</span></div>
        <div class="doc-meta-item"><span class="label">Use Classification</span><span class="value">Estate / Residential</span></div>
        <div class="doc-meta-item"><span class="label">Document Date</span><span class="value">April 23, 2026</span></div>
        <div class="doc-meta-item"><span class="label">Prepared By</span><span class="value">Aaron C. Norris</span></div>
        <div class="doc-meta-item"><span class="label">Status</span><span class="value">Pre-Offer</span></div>
      </div>

      <!-- ENGAGEMENT BADGES -->
      <div class="nu-badge-row">
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2L2 9v13h6v-7h8v7h6V9z"/></svg>
          ESTATE ACQUISITION
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5z"/></svg>
          DUE DILIGENCE
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M3 3h18v2H3zm2 4h14v14H5zm2 2v10h10V9z"/></svg>
          OFFER FRAMEWORK
        </div>
      </div>

      <!-- 1. PROPERTY DOSSIER -->
      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Dossier</span></h2>
      <div class="nu-section-rule"></div>
      <p>The subject is a 7,098 square-foot estate at 4505 Buttewoods. The negotiation plan below treats this as a private, off-market or limited-market acquisition where Norris Utilities® has both interest and discipline. All financial figures below are placeholders awaiting Aaron's verified comps, appraisal, and seller-disclosed numbers — they are formatted for replacement and are not commitments.</p>

      <div class="property-card">
        <div class="property-headline">
          <div class="addr">4505 Buttewoods</div>
          <div class="sub">7,098 sq ft estate · Subject of negotiation</div>
        </div>
        <div class="property-spec">
          <div class="lbl">Total Living Area</div>
          <div class="val">7,098 sq ft<small>Per public records / listing summary</small></div>
        </div>
        <div class="property-spec">
          <div class="lbl">Property Type</div>
          <div class="val">Single-family estate<small>Confirm zoning &amp; HOA, if any</small></div>
        </div>
        <div class="property-spec">
          <div class="lbl">Lot &amp; Improvements</div>
          <div class="val">To verify on inspection<small>Lot size, outbuildings, easements</small></div>
        </div>
        <div class="property-spec">
          <div class="lbl">Year Built / Condition</div>
          <div class="val">To verify pre-offer<small>Roof, HVAC, foundation, water</small></div>
        </div>
        <div class="property-spec">
          <div class="lbl">Title &amp; Liens</div>
          <div class="val">Pull at title commitment<small>Aaron has prior experience pulling probate / instrument records</small></div>
        </div>
        <div class="property-spec">
          <div class="lbl">Disclosures Pending</div>
          <div class="val">Seller's property disclosure<small>Cross-check against listing agent statements</small></div>
        </div>
      </div>

      <!-- 2. NEGOTIATION OBJECTIVES -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objectives</span></h2>
      <div class="nu-section-rule"></div>
      <p>Five outcomes define a successful close. These run in priority order — price discipline first, structure second, contingencies third.</p>

      <div class="objectives-grid">
        <div class="objective-card">
          <span class="num">01</span>
          <h3>Buy Below Replacement Cost</h3>
          <p>Anchor the offer to verified comps and replacement-cost analysis, not to seller's emotional list price. A 7,098 sq ft estate must pencil on a per-square-foot basis against the local high-end market.</p>
        </div>
        <div class="objective-card">
          <span class="num">02</span>
          <h3>Preserve Walk-Away Authority</h3>
          <p>No verbal commitments, no escalation clauses, no pressure timelines. Aaron retains the right to walk at any decision point through inspection.</p>
        </div>
        <div class="objective-card">
          <span class="num">03</span>
          <h3>Full Contingency Stack</h3>
          <p>Inspection, financing (if applicable), title, appraisal, and disclosure-discrepancy contingencies. Each is a real out — not a courtesy.</p>
        </div>
        <div class="objective-card">
          <span class="num">04</span>
          <h3>Clean Title at Closing</h3>
          <p>Title commitment reviewed, Schedule B exceptions priced or cured, all liens released. No assumption of seller's title problems.</p>
        </div>
        <div class="objective-card">
          <span class="num">05</span>
          <h3>Tight Possession Terms</h3>
          <p>Possession at funding, no post-close occupancy by seller without escrowed daily rent, written walk-through 24 hours pre-close.</p>
        </div>
      </div>

      <!-- 3. VALUATION FRAMEWORK -->
      <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Framework</span></h2>
      <div class="nu-section-rule"></div>
      <p>Three valuation lenses inform the offer band. The lowest of the three is Aaron's defensible ceiling.</p>

      <table class="nu-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Inputs Required</th>
            <th>Output</th>
            <th class="right">Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Comparable Sales</strong></td>
            <td>3-5 closed sales within 6 months, similar sq ft &amp; lot, same submarket</td>
            <td>$/sq ft × 7,098</td>
            <td class="right">50%</td>
          </tr>
          <tr>
            <td><strong>Replacement Cost</strong></td>
            <td>Current build cost ÷ sq ft × 7,098 minus depreciation, plus land</td>
            <td>Defensible floor</td>
            <td class="right">30%</td>
          </tr>
          <tr>
            <td><strong>Income / Yield</strong></td>
            <td>Comparable rents if held, or carry cost analysis if owner-occupied</td>
            <td>Cap-rate sanity check</td>
            <td class="right">20%</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Discipline rule:</strong> if the comp method produces a number more than 10% above replacement cost, treat the gap as market froth and bid against the lower number.</p>

      <!-- 4. OFFER BAND -->
      <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Band &amp; Structure</span></h2>
      <div class="nu-section-rule"></div>
      <p>The offer is tiered. The opening bid leaves room to move; the ceiling is the walk number.</p>

      <div class="offer-band">
        <div class="lbl">Opening Bid</div>
        <div class="price">Comp Median × 0.88</div>
        <div class="terms">Cash or financed, 30-day close, full contingencies, earnest money 1% of price</div>
        <div class="offer-band-grid">
          <div>
            <div class="h">Target Strike Price</div>
            <div class="v">Comp Median × 0.94</div>
          </div>
          <div>
            <div class="h">Walk-Away Ceiling</div>
            <div class="v">Comp Median × 0.97 — never the list</div>
          </div>
        </div>
      </div>

      <table class="nu-table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Aaron's Position</th>
            <th>Acceptable Concession</th>
            <th>Hard Line</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Earnest Money</td>
            <td>1% of purchase price</td>
            <td>Up to 2%, refundable through inspection</td>
            <td>Never non-refundable at signing</td>
          </tr>
          <tr>
            <td>Inspection Period</td>
            <td>14 calendar days</td>
            <td>10 days minimum</td>
            <td>Below 7 days = walk</td>
          </tr>
          <tr>
            <td>Financing Contingency</td>
            <td>21 days</td>
            <td>14 days if pre-underwritten</td>
            <td>No waiver until loan commitment in hand</td>
          </tr>
          <tr>
            <td>Appraisal Contingency</td>
            <td>Required</td>
            <td>Allow gap of up to 3% of price</td>
            <td>Never waive in full</td>
          </tr>
          <tr>
            <td>Closing Date</td>
            <td>30 days from acceptance</td>
            <td>45 days if seller needs time</td>
            <td>No open-ended close</td>
          </tr>
          <tr>
            <td>Possession</td>
            <td>At funding</td>
            <td>3 days post-close, escrowed daily rent</td>
            <td>No leaseback past 7 days</td>
          </tr>
          <tr>
            <td>Repairs</td>
            <td>Seller cures all health/safety items</td>
            <td>Credit at close in lieu of work</td>
            <td>"As-is" only with full price reduction</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>Buyer-selected title company</td>
            <td>Split escrow fees</td>
            <td>No seller-controlled closing agent</td>
          </tr>
        </tbody>
      </table>

      <!-- 5. PHASED PLAN -->
      <h2 class="nu-section-title"><span class="first">Phased</span> <span class="rest">Negotiation Plan</span></h2>
      <div class="nu-section-rule"></div>

      <div class="phase-block">
        <div class="phase-num"><small>Phase</small>01</div>
        <div>
          <h3>Intelligence Gathering</h3>
          <span class="timing">Days 1 – 5 · Before any verbal offer</span>
          <ul>
            <li>Pull tax records, deed history, and any recorded liens for 4505 Buttewoods.</li>
            <li>Build comp set: 5 closed sales within 6 months, same submarket, ±15% sq ft.</li>
            <li>Verify listing-vs-public-record disclosure parity (use prior reMarkable note on disclosure discrepancies as a methodology check).</li>
            <li>Drive-by; do not engage neighbors or seller's agent informally.</li>
          </ul>
        </div>
      </div>

      <div class="phase-block">
        <div class="phase-num"><small>Phase</small>02</div>
        <div>
          <h3>First Contact &amp; Posture</h3>
          <span class="timing">Day 6 – 7 · Listing agent or seller</span>
          <ul>
            <li>Open warm, brief. State Norris Utilities®-style: direct, no filler, no pressure.</li>
            <li>Ask three questions only: timeline, motivation, what's already moved through.</li>
            <li>Do not name a number. Do not signal urgency. Do not disclose financing structure.</li>
          </ul>
        </div>
      </div>

      <div class="phase-block">
        <div class="phase-num"><small>Phase</small>03</div>
        <div>
          <h3>Written Opening Offer</h3>
          <span class="timing">Day 8 – 10 · Anchor the negotiation</span>
          <ul>
            <li>Submit at "Comp Median × 0.88" with the contingency stack from the term table.</li>
            <li>Attach a short cover letter: clean buyer, ready to perform, valuation rationale in two sentences.</li>
            <li>72-hour response window. No automatic extension.</li>
          </ul>
        </div>
      </div>

      <div class="phase-block">
        <div class="phase-num"><small>Phase</small>04</div>
        <div>
          <h3>Counter Discipline</h3>
          <span class="timing">Day 10 – 17 · One round, possibly two</span>
          <ul>
            <li>If countered above ceiling: respond once at "× 0.94," cite comps, hold there.</li>
            <li>If countered between target and ceiling: accept with terms tightened (shorter inspection, faster close).</li>
            <li>Concede on terms before price; concede on price only against documented condition issues.</li>
          </ul>
        </div>
      </div>

      <div class="phase-block">
        <div class="phase-num"><small>Phase</small>05</div>
        <div>
          <h3>Inspection &amp; Re-Trade</h3>
          <span class="timing">Days 18 – 30 · Verify what was promised</span>
          <ul>
            <li>Full general inspection plus roof, HVAC, foundation, sewer scope, and termite.</li>
            <li>Convert any material defect into a price credit at close — never trust seller-completed repairs.</li>
            <li>If discrepancies emerge between disclosure and inspection findings: re-trade or walk.</li>
          </ul>
        </div>
      </div>

      <div class="phase-block">
        <div class="phase-num"><small>Phase</small>06</div>
        <div>
          <h3>Title, Funding, Close</h3>
          <span class="timing">Days 28 – 35 · Disciplined finish</span>
          <ul>
            <li>Title commitment reviewed; Schedule B exceptions priced or cured before closing.</li>
            <li>Walk-through 24 hours before funding. Photos of every system in operating order.</li>
            <li>Wire instructions verbally re-verified with title company by phone — never trust emailed wires.</li>
          </ul>
        </div>
      </div>

      <!-- 6. LEVERAGE MAP -->
      <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Map</span></h2>
      <div class="nu-section-rule"></div>
      <p>Know what each side brings to the table before naming a number.</p>

      <div class="leverage-grid">
        <div class="leverage-col our">
          <h3>Our Leverage</h3>
          <ul>
            <li>Ready, willing buyer with a defensible valuation framework</li>
            <li>Clean financing path or cash — no contingent home sale</li>
            <li>Flexible close window to accommodate seller's timing</li>
            <li>Discipline to walk; no emotional attachment to this address</li>
            <li>Track record of doing what we say (third-generation reputation)</li>
          </ul>
        </div>
        <div class="leverage-col their">
          <h3>Their Leverage / Risks</h3>
          <ul>
            <li>Days on market — every week is information for us</li>
            <li>Carrying cost (taxes, insurance, utilities) on a 7,098 sq ft home</li>
            <li>Backup offers (verify, do not assume they are real)</li>
            <li>Possible disclosure discrepancies that complicate other buyers</li>
            <li>Seasonality of the local high-end market</li>
          </ul>
        </div>
      </div>

      <!-- 7. SCRIPTS -->
      <h2 class="nu-section-title"><span class="first">Conversation</span> <span class="rest">Scripts</span></h2>
      <div class="nu-section-rule"></div>
      <p>Aaron's voice — direct, warm, no filler. Each script is a starting line, not a script to read.</p>

      <div class="script-box">
        <div class="ctx">First call to listing agent</div>
        <div class="quote">"Name — Aaron Norris with Norris Utilities®. I'm taking a serious look at 4505 Buttewoods. Before I waste your time or mine, can you tell me the seller's timeline, what's motivating the sale, and whether anything has already been under contract on this one? I'd rather know now than learn it in inspection."</div>
      </div>

      <div class="script-box">
        <div class="ctx">Submitting the opening offer</div>
        <div class="quote">"Name — attached is a written offer on 4505 Buttewoods. The number reflects the comps I can defend and the condition I'll need to verify. The terms are clean. I'm a real buyer, I'll perform, and I'd rather move quickly than haggle. Let's hear back inside 72 hours."</div>
      </div>

      <div class="script-box">
        <div class="ctx">Receiving a high counter</div>
        <div class="quote">"Name — appreciate the response. The number doesn't pencil against the comps I'm working from. I can come up to [target × 0.94] with the same terms and we close inside 30 days. That's where the math lives. If we're far apart from there, no hard feelings."</div>
      </div>

      <div class="script-box">
        <div class="ctx">Re-trade after inspection finds issues</div>
        <div class="quote">"Name — inspection turned up [items]. I'm not asking the seller to do the work — I'd rather take a credit at close and handle it myself. The credit needs to be [amount]. If that doesn't work on their side, we'll release the earnest money and part on good terms."</div>
      </div>

      <!-- 8. PRE-FLIGHT CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></h2>
      <div class="nu-section-rule"></div>

      <ol class="checklist">
        <li><strong>Comps pulled</strong> — 5 closed sales, same submarket, within 6 months, ±15% sq ft.</li>
        <li><strong>Replacement-cost estimate</strong> — current build cost per sq ft × 7,098, plus land.</li>
        <li><strong>Title scrub</strong> — deed history, instrument numbers, any recorded liens or easements.</li>
        <li><strong>Listing-vs-record disclosure check</strong> — confirm seller's listing matches public record on bedrooms, baths, sq ft, lot.</li>
        <li><strong>Financing path confirmed</strong> — pre-underwriting letter or funds verification ready.</li>
        <li><strong>Inspector booked</strong> — generalist plus roof / HVAC / sewer scope / termite.</li>
        <li><strong>Title company chosen</strong> — buyer-controlled, Aaron's relationship.</li>
        <li><strong>Walk-away number written down</strong> — kept private, not negotiable in the moment.</li>
        <li><strong>Offer letter drafted</strong> — terms, contingencies, response window, signatures ready.</li>
        <li><strong>Communication log opened</strong> — every call, every text, dated and saved.</li>
      </ol>

      <!-- 9. WALK-AWAY TRIGGERS -->
      <h2 class="nu-section-title"><span class="first">Walk-Away</span> <span class="rest">Triggers</span></h2>
      <div class="nu-section-rule"></div>

      <div class="walkaway-box">
        <h3>Aaron walks — no second-guessing — if any of these surface</h3>
        <p>· Seller refuses to sign a Seller's Property Disclosure or hides material facts.</p>
        <p>· Title commitment reveals undisclosed liens, easements, or boundary disputes that will not be cured before close.</p>
        <p>· Inspection finds structural, foundation, or environmental issues with cost-to-cure exceeding 5% of price and seller will not credit.</p>
        <p>· Any pressure to waive inspection, appraisal, or financing contingencies.</p>
        <p>· Listing agent or seller cannot answer basic factual questions about the home consistently across two conversations.</p>
        <p>· Required earnest money becomes non-refundable at signing.</p>
        <p>· Counter-offer pushes price above the walk-away ceiling, even on better terms.</p>
      </div>

      <!-- 10. POST-CLOSE -->
      <h2 class="nu-section-title"><span class="first">Post-Close</span> <span class="rest">Hand-Off</span></h2>
      <div class="nu-section-rule"></div>
      <p>The negotiation does not end at the wire. Document, file, and update.</p>

      <table class="nu-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>Owner</th>
            <th>When</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Recorded deed copy filed in property folder</td>
            <td>Aaron</td>
            <td>Within 7 days of recording</td>
          </tr>
          <tr>
            <td>Closing statement (HUD / ALTA) saved &amp; reconciled to wire</td>
            <td>Aaron</td>
            <td>Day of close</td>
          </tr>
          <tr>
            <td>Insurance bound, effective date of close</td>
            <td>Aaron</td>
            <td>Pre-close, verified day of</td>
          </tr>
          <tr>
            <td>Utilities transferred (power, water, gas, internet)</td>
            <td>Caroline Butler (CB)</td>
            <td>Day of possession</td>
          </tr>
          <tr>
            <td>Locks rekeyed, alarm reprogrammed</td>
            <td>Aaron / vendor</td>
            <td>Within 24 hours of possession</td>
          </tr>
          <tr>
            <td>Walk-through punch list closed out</td>
            <td>Aaron</td>
            <td>Within 14 days</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top: 30px; font-size: 0.85rem; color: var(--nu-body-text); font-style: italic;">This document is an internal negotiation framework prepared for Aaron C. Norris. All numerical bands are formula-driven and require Aaron's verified comps, financing posture, and final walk-away number before any offer is submitted. Nothing herein constitutes a binding offer or representation to any party.</p>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris &mdash; Founder &amp; CEO</strong>
      Norris Utilities®, LLC &middot; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>