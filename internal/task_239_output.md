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
      --nu-success: #2D7A3E;
      --nu-warn: #C9881C;
      --nu-danger: #B82D2D;
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

    .nu-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      border: 1px solid rgba(255,255,255,0.5);
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-white);
      background: rgba(0,0,0,0.15);
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

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
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* SECTION HEADER */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 48px 0 18px;
      letter-spacing: 0.01em;
      line-height: 1.2;
    }
    .nu-section-title:first-child { margin-top: 0; }
    .nu-section-title .accent {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
    }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 28px;
      border-radius: 2px;
    }

    /* PROPERTY HERO */
    .property-hero {
      background: linear-gradient(135deg, #f8fafe 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-blue);
      border-radius: 10px;
      padding: 32px;
      margin-bottom: 40px;
      box-shadow: 0 4px 24px rgba(0, 51, 204, 0.06);
    }
    .property-address {
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .property-meta {
      color: var(--nu-body-text);
      font-size: 1rem;
      margin-bottom: 20px;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 16px;
      margin-top: 20px;
    }
    .stat-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 16px;
      text-align: center;
    }
    .stat-value {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .stat-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #666;
      margin-top: 6px;
      font-weight: 700;
    }

    /* INTRO */
    .intro-text {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 16px;
    }
    .intro-text strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* BADGE LIST (chevron-style action items) */
    .nu-badge-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 24px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 32px 16px 22px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      max-width: 720px;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.95rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      margin-bottom: 24px;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.95rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, #0033cc, #0066ee);
      color: var(--nu-white);
    }
    .nu-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td {
      background: var(--nu-light-gray);
    }
    .nu-table .num {
      font-weight: 900;
      color: var(--nu-blue);
      white-space: nowrap;
    }
    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .pill-go { background: #d8f0de; color: var(--nu-success); }
    .pill-watch { background: #fcefcf; color: var(--nu-warn); }
    .pill-stop { background: #f6dbdb; color: var(--nu-danger); }
    .pill-info { background: #d6e4ff; color: #0033cc; }

    /* PHASE CARDS */
    .phase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    .phase-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 14px rgba(0,0,0,0.05);
      position: relative;
      overflow: hidden;
    }
    .phase-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 4px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
    }
    .phase-marker {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      margin-bottom: 12px;
    }
    .phase-title {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .phase-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .phase-list li {
      padding: 6px 0 6px 22px;
      position: relative;
      font-size: 0.93rem;
      color: var(--nu-body-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .phase-list li:last-child { border-bottom: none; }
    .phase-list li::before {
      content: '◆';
      position: absolute;
      left: 0;
      top: 6px;
      color: var(--nu-cyan);
      font-size: 0.7rem;
    }

    /* CALLOUT BOX */
    .nu-callout {
      background: linear-gradient(135deg, #fff8e6 0%, #fffdf6 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 24px;
    }
    .nu-callout-title {
      font-weight: 900;
      color: #8a6e1c;
      font-size: 1.05rem;
      margin-bottom: 8px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-callout p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .nu-callout p:last-child { margin-bottom: 0; }

    .nu-callout-blue {
      background: linear-gradient(135deg, #f0f4ff 0%, #fafcff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 24px;
    }
    .nu-callout-blue .nu-callout-title {
      color: #0033cc;
    }

    /* SCRIPT BLOCK */
    .script-block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 16px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.03);
    }
    .script-block h4 {
      font-weight: 900;
      font-size: 1rem;
      color: #0033cc;
      margin-bottom: 10px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .script-block .quoted {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
      padding: 12px 18px;
      border-left: 3px solid var(--nu-cyan);
      background: var(--nu-light-gray);
      border-radius: 4px;
    }

    /* LADDER (price scale) */
    .ladder {
      background: linear-gradient(180deg, #fafbff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 28px;
      margin-bottom: 24px;
    }
    .ladder-row {
      display: grid;
      grid-template-columns: 110px 1fr 130px;
      align-items: center;
      gap: 18px;
      padding: 14px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .ladder-row:last-child { border-bottom: none; }
    .ladder-tag {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 6px 10px;
      border-radius: 4px;
      text-align: center;
    }
    .tag-walk { background: #f6dbdb; color: var(--nu-danger); }
    .tag-target { background: #d8f0de; color: var(--nu-success); }
    .tag-anchor { background: #fcefcf; color: var(--nu-warn); }
    .tag-ceiling { background: #d6e4ff; color: #0033cc; }
    .ladder-desc { color: var(--nu-body-text); font-size: 0.95rem; }
    .ladder-price { font-weight: 900; color: var(--nu-blue); font-size: 1.15rem; text-align: right; }

    /* DUE DILIGENCE GRID */
    .dd-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .dd-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .dd-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .dd-item h5 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.95rem;
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .dd-item p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 30px;
      margin-bottom: 24px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 9px;
      top: 6px;
      bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -27px;
      top: 4px;
      width: 15px; height: 15px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
    }
    .timeline-day {
      font-weight: 900;
      color: #0033cc;
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-action {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }

    /* SIGN-OFF */
    .signoff {
      background: linear-gradient(135deg, #f8fafe 0%, #eef3fc 100%);
      border-radius: 10px;
      padding: 28px;
      margin-top: 32px;
      border: 1px solid #d6e0f0;
    }
    .signoff h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .signoff-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px dashed #c8d4ea;
      font-size: 0.95rem;
    }
    .signoff-line:last-child { border-bottom: none; }
    .signoff-label { color: #555; font-weight: 700; }
    .signoff-blank {
      flex: 1;
      margin-left: 14px;
      border-bottom: 1px solid #999;
      height: 22px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #001a99 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
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
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 22px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 60px; }
      .property-address { font-size: 1.4rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 16px; }
      .ladder-row { grid-template-columns: 90px 1fr; }
      .ladder-price { grid-column: 1 / -1; text-align: left; padding-left: 108px; }
      .signoff-line { flex-direction: column; align-items: flex-start; gap: 6px; }
      .signoff-blank { width: 100%; margin-left: 0; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .phase-card, .nu-card, .dd-item { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Estate Acquisition Strategy</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,60 L1440,0 L1440,60 L0,60 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PROPERTY HERO -->
      <div class="property-hero">
        <div class="property-address">4505 Buttewoods</div>
        <div class="property-meta">7,098 sq ft estate property — acquisition negotiation playbook</div>
        <div class="property-stats">
          <div class="stat-tile">
            <div class="stat-value">7,098</div>
            <div class="stat-label">Square Feet</div>
          </div>
          <div class="stat-tile">
            <div class="stat-value">Active</div>
            <div class="stat-label">Negotiation</div>
          </div>
          <div class="stat-tile">
            <div class="stat-value">2026-04-25</div>
            <div class="stat-label">Plan Date</div>
          </div>
          <div class="stat-tile">
            <div class="stat-value">ACN</div>
            <div class="stat-label">Lead</div>
          </div>
        </div>
      </div>

      <!-- ORIGIN -->
      <h2 class="nu-section-title"><span class="accent">Origin</span> <span class="rest">&amp; Objective</span></h2>
      <div class="nu-section-rule"></div>
      <p class="intro-text">
        This action item was captured from the reMarkable tablet on <strong>2026-04-25</strong> during morning planning:
        <em>“Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods.”</em>
        It is a personal/business real-estate move outside the normal sales pipeline and warrants a structured, written
        negotiation plan before any verbal offer is made.
      </p>
      <p class="intro-text">
        <strong>Objective:</strong> acquire the 7,098 sq ft Buttewoods estate at the lowest defensible price, on terms
        that protect Aaron’s cash position and preserve flexibility for Norris Utilities® operating capital.
      </p>

      <!-- NEXT STEPS BADGES -->
      <h2 class="nu-section-title"><span class="accent">Immediate</span> <span class="rest">Next Steps</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-badge-list">
        <div class="nu-badge"><span class="nu-badge-num">1</span>Pull recent comps and full property record before any conversation with seller or agent</div>
        <div class="nu-badge"><span class="nu-badge-num">2</span>Confirm financing posture — cash, conventional, or seller-finance — before opening offer</div>
        <div class="nu-badge"><span class="nu-badge-num">3</span>Set walk-away number in writing and protect it from negotiation drift</div>
        <div class="nu-badge"><span class="nu-badge-num">4</span>Open with anchor offer below target; never lead with the target price itself</div>
        <div class="nu-badge"><span class="nu-badge-num">5</span>Tie every concession to a counter-concession (price down, terms tighten — and vice versa)</div>
      </div>

      <!-- VALUATION LADDER -->
      <h2 class="nu-section-title"><span class="accent">Price</span> <span class="rest">Ladder &amp; Walk-Away Discipline</span></h2>
      <div class="nu-section-rule"></div>
      <p class="intro-text">
        Decide these four numbers <strong>before</strong> the first phone call. Write them down. Do not adjust them mid-conversation.
        The only number the other side ever hears is the <em>Anchor</em>.
      </p>
      <div class="ladder">
        <div class="ladder-row">
          <span class="ladder-tag tag-walk">Walk-Away</span>
          <span class="ladder-desc">Hard ceiling — above this number, the deal makes no economic sense. Reject and exit politely.</span>
          <span class="ladder-price">Set in advance</span>
        </div>
        <div class="ladder-row">
          <span class="ladder-tag tag-ceiling">Ceiling</span>
          <span class="ladder-desc">Maximum we’d pay <em>only</em> if all terms break our way (closing date, fixtures, financing, repairs).</span>
          <span class="ladder-price">Walk-Away − 5%</span>
        </div>
        <div class="ladder-row">
          <span class="ladder-tag tag-target">Target</span>
          <span class="ladder-desc">The price we genuinely expect to close at. Drives total cost-of-carry math.</span>
          <span class="ladder-price">Comp-driven</span>
        </div>
        <div class="ladder-row">
          <span class="ladder-tag tag-anchor">Anchor (Open)</span>
          <span class="ladder-desc">First offer on the table. Aggressive but defensible — backed by comps, condition, and time-on-market.</span>
          <span class="ladder-price">Target − 8–12%</span>
        </div>
      </div>
      <div class="nu-callout">
        <div class="nu-callout-title">Discipline Rule</div>
        <p>If counter-offers push above the Ceiling, do not say yes in the moment. Take 24 hours, re-run the math against
        comps and cash flow, and respond in writing. Real estate negotiations reward patience and punish urgency.</p>
      </div>

      <!-- DUE DILIGENCE -->
      <h2 class="nu-section-title"><span class="accent">Due</span> <span class="rest">Diligence Checklist</span></h2>
      <div class="nu-section-rule"></div>
      <p class="intro-text">Complete these before any binding offer. Each item either confirms value or gives leverage.</p>
      <div class="dd-grid">
        <div class="dd-item">
          <h5>Property Record</h5>
          <p>Pull tax assessor record, ownership history, and mortgage liens. Verify the 7,098 sq ft figure against the official record.</p>
        </div>
        <div class="dd-item">
          <h5>Comparable Sales</h5>
          <p>Pull last 12 months of closed comps within ½ mile, similar sq ft and lot size. Adjust for condition and date.</p>
        </div>
        <div class="dd-item">
          <h5>Time on Market</h5>
          <p>Days on market, prior price drops, and any expired/withdrawn listings. Long DOM is leverage; fresh listings are not.</p>
        </div>
        <div class="dd-item">
          <h5>Seller Motivation</h5>
          <p>Estate sale? Relocation? Tax pressure? Why are they selling — and how soon do they need to close?</p>
        </div>
        <div class="dd-item">
          <h5>Title &amp; Survey</h5>
          <p>Order preliminary title work and a current survey. Look for easements, encroachments, and restrictive covenants.</p>
        </div>
        <div class="dd-item">
          <h5>Inspection Scope</h5>
          <p>General home inspection, HVAC, roof, foundation, septic/sewer, pest, radon. Each finding becomes a price lever.</p>
        </div>
        <div class="dd-item">
          <h5>Insurance Quote</h5>
          <p>Get a binder quote up-front. Surprise premium loads on older or large estate properties have killed deals before.</p>
        </div>
        <div class="dd-item">
          <h5>Property Tax Outlook</h5>
          <p>Check millage and any pending re-assessment. A reset on sale can swing carrying cost by thousands per year.</p>
        </div>
      </div>

      <!-- NEGOTIATION PHASES -->
      <h2 class="nu-section-title"><span class="accent">Negotiation</span> <span class="rest">Phases</span></h2>
      <div class="nu-section-rule"></div>
      <div class="phase-grid">
        <div class="phase-card">
          <div class="phase-marker">PHASE 01</div>
          <div class="phase-title">Discovery</div>
          <ul class="phase-list">
            <li>Listening tour with agent — let them talk first</li>
            <li>Ask about seller goals before discussing price</li>
            <li>Walk the property; document condition issues</li>
            <li>Catalog every defect with photos for leverage</li>
          </ul>
        </div>
        <div class="phase-card">
          <div class="phase-marker">PHASE 02</div>
          <div class="phase-title">Anchor</div>
          <ul class="phase-list">
            <li>Submit written offer at Anchor price</li>
            <li>Include comp-supported letter explaining basis</li>
            <li>Reasonable earnest money — not aggressive</li>
            <li>Clean contingencies: inspection, financing, title</li>
          </ul>
        </div>
        <div class="phase-card">
          <div class="phase-marker">PHASE 03</div>
          <div class="phase-title">Counter Cycle</div>
          <ul class="phase-list">
            <li>Move price up only when seller moves on terms</li>
            <li>Trade closing date, fixtures, repairs as currency</li>
            <li>Smaller increments each round (signal final approach)</li>
            <li>Stop at Target unless terms exceed expectations</li>
          </ul>
        </div>
        <div class="phase-card">
          <div class="phase-marker">PHASE 04</div>
          <div class="phase-title">Inspection Reset</div>
          <ul class="phase-list">
            <li>Use inspection findings for second price reduction</li>
            <li>Quote real repair estimates, not retail panic numbers</li>
            <li>Choose: credit at closing OR price reduction</li>
            <li>Walk if seller refuses material defects</li>
          </ul>
        </div>
        <div class="phase-card">
          <div class="phase-marker">PHASE 05</div>
          <div class="phase-title">Close</div>
          <ul class="phase-list">
            <li>Final walk-through 24–48 hours pre-close</li>
            <li>Verify all agreed repairs documented and complete</li>
            <li>Wire instructions confirmed by phone, never email-only</li>
            <li>Title insurance and survey in hand at closing</li>
          </ul>
        </div>
        <div class="phase-card">
          <div class="phase-marker">PHASE 06</div>
          <div class="phase-title">Post-Close</div>
          <ul class="phase-list">
            <li>File homestead exemption if applicable</li>
            <li>Update insurance from binder to permanent policy</li>
            <li>Set tax escrow or direct-pay calendar reminder</li>
            <li>Archive closing package — paper + cloud backup</li>
          </ul>
        </div>
      </div>

      <!-- LEVERAGE TABLE -->
      <h2 class="nu-section-title"><span class="accent">Leverage</span> <span class="rest">Inventory</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width: 26%;">Lever</th>
              <th>How It Lowers the Price</th>
              <th style="width: 14%;">Strength</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cash or fast close</strong></td>
              <td>Removes financing risk and shrinks seller’s exposure window. Often worth 2–5% on its own.</td>
              <td><span class="pill pill-go">High</span></td>
            </tr>
            <tr>
              <td><strong>Time on market</strong></td>
              <td>Each week past 60 days erodes seller resolve. Quote DOM directly in cover letter.</td>
              <td><span class="pill pill-go">High</span></td>
            </tr>
            <tr>
              <td><strong>Inspection findings</strong></td>
              <td>Real, contractor-quoted repairs convert into hard credits or reductions.</td>
              <td><span class="pill pill-go">High</span></td>
            </tr>
            <tr>
              <td><strong>Comparable sales</strong></td>
              <td>Anchors the conversation in data, not opinion. Defends Anchor price.</td>
              <td><span class="pill pill-go">High</span></td>
            </tr>
            <tr>
              <td><strong>Walk-away willingness</strong></td>
              <td>Genuine readiness to leave is the single strongest lever. Sellers feel it.</td>
              <td><span class="pill pill-go">High</span></td>
            </tr>
            <tr>
              <td><strong>Closing date flexibility</strong></td>
              <td>Match seller’s ideal close to soften price; trade calendar for dollars.</td>
              <td><span class="pill pill-watch">Medium</span></td>
            </tr>
            <tr>
              <td><strong>Earnest money level</strong></td>
              <td>Higher EM signals seriousness without raising contract price.</td>
              <td><span class="pill pill-watch">Medium</span></td>
            </tr>
            <tr>
              <td><strong>Fixtures &amp; chattel</strong></td>
              <td>Negotiate inclusions (appliances, fixtures, furniture) instead of cash discounts.</td>
              <td><span class="pill pill-watch">Medium</span></td>
            </tr>
            <tr>
              <td><strong>Bidding wars</strong></td>
              <td>Avoid them. Multiple-offer scenarios destroy buyer leverage. Walk if escalation starts.</td>
              <td><span class="pill pill-stop">Avoid</span></td>
            </tr>
            <tr>
              <td><strong>Emotional attachment</strong></td>
              <td>Never let the seller (or your own enthusiasm) know which property is “the one.”</td>
              <td><span class="pill pill-stop">Avoid</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- SCRIPTS -->
      <h2 class="nu-section-title"><span class="accent">Conversation</span> <span class="rest">Scripts</span></h2>
      <div class="nu-section-rule"></div>
      <p class="intro-text">Pre-loaded language for the moments where most buyers leak leverage.</p>

      <div class="script-block">
        <h4>Opening — first call to listing agent</h4>
        <div class="quoted">
          “I’m a serious buyer doing my homework on 4505 Buttewoods. Before we talk price, I’d like to understand the
          seller’s timeline and what’s most important to them on the closing side. Then I’ll come back with a written
          offer that respects both of those.”
        </div>
      </div>

      <div class="script-block">
        <h4>Submitting the Anchor</h4>
        <div class="quoted">
          “The offer reflects three things — recent closed comps within a half-mile, the property’s time on market,
          and the condition items I noted during the walk-through. I’m prepared to close on the seller’s preferred
          timeline. I think this is fair, and I’d rather be straight with you than start high and dance.”
        </div>
      </div>

      <div class="script-block">
        <h4>Holding the line on a high counter</h4>
        <div class="quoted">
          “I appreciate the counter, but the comps don’t support that number. I can move on price <em>or</em> on terms,
          but not both. If we can agree on a [closing date / repair credit / fixtures], I have room. If we can’t,
          I understand and I’ll respectfully step aside.”
        </div>
      </div>

      <div class="script-block">
        <h4>Inspection re-trade</h4>
        <div class="quoted">
          “Inspection turned up [items]. Two contractor estimates put the repair work at $[X]. I’d like to handle this
          with a credit at closing rather than asking the seller to do the work. Same outcome, cleaner close.”
        </div>
      </div>

      <div class="script-block">
        <h4>Walk-away — used only when meant</h4>
        <div class="quoted">
          “We’ve been fair on both sides. The number you need is past where this works for me. I’d rather end this
          conversation on good terms than push it. If anything changes, you have my number.”
        </div>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="accent">Suggested</span> <span class="rest">Timeline</span></h2>
      <div class="nu-section-rule"></div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-day">Day 0 — 2026-04-25</div>
          <div class="timeline-action">Action item logged. Begin gathering comps, tax record, and ownership history.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-day">Day 1–3</div>
          <div class="timeline-action">Set Walk-Away, Ceiling, Target, Anchor numbers in writing. Confirm financing path.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-day">Day 4</div>
          <div class="timeline-action">Listening call with listing agent. Walk the property. Photograph every defect.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-day">Day 5–7</div>
          <div class="timeline-action">Submit written Anchor offer with comp letter and clean contingencies.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-day">Day 8–14</div>
          <div class="timeline-action">Counter cycle. Trade terms for price. Stop at Target unless overall package improves.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-day">Day 15–25</div>
          <div class="timeline-action">Inspection window. Re-trade on real findings. Order title and survey.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-day">Day 26–45</div>
          <div class="timeline-action">Financing finalization, insurance binder, final walk-through, close.</div>
        </div>
      </div>

      <!-- RISK -->
      <h2 class="nu-section-title"><span class="accent">Risk</span> <span class="rest">Watch List</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-callout-blue">
        <div class="nu-callout-title">Watch For</div>
        <p>• <strong>Cash drag on Norris Utilities®:</strong> a personal real-estate buy must not starve operating capital. Confirm working-capital floor before bidding.</p>
        <p>• <strong>Insurance shock:</strong> 7,098 sq ft estates often carry premiums 2–3× a normal home. Get a binder quote up-front.</p>
        <p>• <strong>Tax re-assessment:</strong> a sale price well above current assessed value often triggers a property-tax reset.</p>
        <p>• <strong>Maintenance burden:</strong> larger square footage means proportionally higher HVAC, roofing, and grounds carrying cost.</p>
        <p>• <strong>Emotional anchoring:</strong> walking the home before pricing is locked invites attachment that costs money.</p>
      </div>

      <!-- DECISION SIGN-OFF -->
      <h2 class="nu-section-title"><span class="accent">Decision</span> <span class="rest">Sign-Off</span></h2>
      <div class="nu-section-rule"></div>
      <p class="intro-text">Before any offer leaves Aaron’s hand, lock these numbers in writing.</p>
      <div class="signoff">
        <h3>4505 Buttewoods — Number Lock</h3>
        <div class="signoff-line">
          <span class="signoff-label">Anchor (Open Offer)</span>
          <span class="signoff-blank"></span>
        </div>
        <div class="signoff-line">
          <span class="signoff-label">Target (Expected Close)</span>
          <span class="signoff-blank"></span>
        </div>
        <div class="signoff-line">
          <span class="signoff-label">Ceiling (Best Terms Only)</span>
          <span class="signoff-blank"></span>
        </div>
        <div class="signoff-line">
          <span class="signoff-label">Walk-Away (Hard Stop)</span>
          <span class="signoff-blank"></span>
        </div>
        <div class="signoff-line">
          <span class="signoff-label">Financing Path</span>
          <span class="signoff-blank"></span>
        </div>
        <div class="signoff-line">
          <span class="signoff-label">Operating Capital Floor Protected</span>
          <span class="signoff-blank"></span>
        </div>
        <div class="signoff-line">
          <span class="signoff-label">Aaron — Initials &amp; Date</span>
          <span class="signoff-blank"></span>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO<br>
      Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Estate Acquisition Strategy — 4505 Buttewoods — Generated 2026-04-25</div>
  </footer>

</body>
</html>