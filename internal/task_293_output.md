<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>V5 Production Release — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-success: #00A86B;
      --nu-warning: #E6A817;
      --nu-danger: #C8102E;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', serif;
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
    .nu-header-inner { position: relative; z-index: 2; }

    /* GHOST PHOENIX WATERMARK */
    .nu-phoenix-ghost {
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
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-title {
      margin-top: 28px;
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: 0.4em;
      color: var(--nu-cyan);
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
      top: 100px; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* HERO BANNER */
    .release-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001a66 50%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 12px;
      margin-bottom: 50px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 30px;
      align-items: center;
      box-shadow: 0 10px 40px rgba(0,0,255,0.18);
      border-left: 6px solid var(--nu-cyan);
    }
    .release-banner-text h1 {
      font-weight: 900;
      font-size: 2rem;
      letter-spacing: 0.02em;
      margin-bottom: 8px;
      line-height: 1.2;
    }
    .release-banner-text p {
      font-size: 1.05rem;
      color: rgba(255,255,255,0.88);
      font-weight: 300;
    }
    .release-status {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 14px 24px;
      border-radius: 999px;
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .release-status::before {
      content: '';
      width: 12px; height: 12px;
      background: var(--nu-navy);
      border-radius: 50%;
      animation: pulse 1.8s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
    }

    /* SECTION TITLE */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.7rem;
      margin-bottom: 8px;
      color: #0033cc;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-divider {
      height: 4px;
      width: 80px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 28px;
      border-radius: 2px;
    }
    .nu-section { margin-bottom: 60px; }

    /* METRICS GRID */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 18px;
      margin-bottom: 24px;
    }
    .metric-card {
      background: var(--nu-white);
      padding: 26px 22px;
      border-radius: 10px;
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .metric-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,255,0.1);
    }
    .metric-card.cyan { border-top-color: var(--nu-cyan); }
    .metric-card.success { border-top-color: var(--nu-success); }
    .metric-card.gold { border-top-color: var(--nu-accent-gold); }

    .metric-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #6b7280;
      margin-bottom: 8px;
    }
    .metric-value {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .metric-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }

    /* GATE LIST */
    .gate-list {
      display: grid;
      gap: 14px;
    }
    .gate-row {
      display: grid;
      grid-template-columns: 56px 1fr auto;
      gap: 18px;
      align-items: center;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 18px 22px;
      transition: border-color 0.2s ease, transform 0.2s ease;
    }
    .gate-row:hover {
      border-color: var(--nu-cyan);
      transform: translateX(3px);
    }
    .gate-num {
      width: 48px; height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      flex-shrink: 0;
    }
    .gate-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .gate-desc {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .gate-status {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 999px;
      white-space: nowrap;
    }
    .gate-status.pass {
      background: rgba(0,168,107,0.12);
      color: var(--nu-success);
    }
    .gate-status.locked {
      background: rgba(0,0,255,0.1);
      color: var(--nu-blue);
    }
    .gate-status.review {
      background: rgba(230,168,23,0.15);
      color: #b8830c;
    }

    /* DELIVERABLES TABLE */
    .nu-table-wrap {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy), #001a66);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:hover { background: var(--nu-light-gray); }
    .nu-table .id-cell {
      font-family: 'SF Mono', Menlo, monospace;
      font-weight: 700;
      color: var(--nu-blue);
      font-size: 0.85rem;
      white-space: nowrap;
    }
    .pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .pill.green { background: rgba(0,168,107,0.12); color: var(--nu-success); }
    .pill.blue  { background: rgba(0,0,255,0.1); color: var(--nu-blue); }
    .pill.gold  { background: rgba(201,168,76,0.18); color: #8a6f1f; }

    /* CHEVRON BADGES */
    .badge-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 14px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 30px 16px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
    }
    .nu-badge-icon {
      width: 28px; height: 28px;
      margin-right: 14px;
      fill: var(--nu-cyan);
      flex-shrink: 0;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
      border-left: 3px solid var(--nu-medium-gray);
    }
    .timeline-item {
      position: relative;
      padding-bottom: 26px;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -36px; top: 6px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-item.now::before {
      background: var(--nu-cyan);
      box-shadow: 0 0 0 2px var(--nu-cyan), 0 0 0 8px rgba(6,208,255,0.2);
    }
    .timeline-date {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .timeline-text {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* TWO COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 24px 28px;
    }
    .checklist h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .checklist ul {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-body-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 13px;
      width: 20px; height: 20px;
      border-radius: 4px;
      background: var(--nu-success);
      box-shadow: inset 0 0 0 2px var(--nu-success);
    }
    .checklist li::after {
      content: '';
      position: absolute;
      left: 6px; top: 17px;
      width: 8px; height: 4px;
      border-left: 2px solid white;
      border-bottom: 2px solid white;
      transform: rotate(-45deg);
    }
    .checklist li.pending::before {
      background: transparent;
      border: 2px solid var(--nu-warning);
      box-shadow: none;
    }
    .checklist li.pending::after { display: none; }

    /* GO/NO-GO */
    .decision-card {
      background: linear-gradient(135deg, rgba(0,168,107,0.08) 0%, rgba(6,208,255,0.06) 100%);
      border: 2px solid var(--nu-success);
      border-radius: 12px;
      padding: 32px 36px;
      text-align: center;
      margin-top: 30px;
    }
    .decision-label {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-success);
      margin-bottom: 10px;
    }
    .decision-verdict {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      letter-spacing: 0.05em;
      margin-bottom: 12px;
    }
    .decision-sub {
      font-size: 1rem;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }

    /* SIGNATURE LINE */
    .sig-block {
      margin-top: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    .sig-line {
      border-top: 2px solid var(--nu-dark-text);
      padding-top: 8px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .sig-line strong {
      display: block;
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      margin-bottom: 2px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.12);
      font-size: 0.8rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.1rem; }
      .nu-container { padding: 40px 20px 60px; }
      .release-banner {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 28px 22px;
      }
      .release-banner-text h1 { font-size: 1.5rem; }
      .gate-row {
        grid-template-columns: 48px 1fr;
      }
      .gate-status { grid-column: 1 / -1; justify-self: start; }
      .two-col { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.85rem; }
      .sig-block { grid-template-columns: 1fr; gap: 28px; }
      .decision-verdict { font-size: 1.6rem; }
    }

    @media print {
      body { background: white; }
      .nu-header {
        background: var(--nu-blue) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .nu-footer {
        background: var(--nu-navy) !important;
        -webkit-print-color-adjust: exact;
      }
      .metric-card, .gate-row, .checklist { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-ghost" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-title">V5 — Production Release</div>
    </div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- RELEASE BANNER -->
      <div class="release-banner">
        <div class="release-banner-text">
          <h1>Take V5 to Production as Final Version</h1>
          <p>Sprint 2 is locked. The 9-method production order is approved, the Chain Electric regression is green, and tandem reconciliation is running at 78.7%. Cutover authorized for 2026-04-22.</p>
        </div>
        <div class="release-status">Live · Final</div>
      </div>

      <!-- WHAT V5 IS -->
      <section class="nu-section">
        <h2 class="nu-section-title">What <span>V5 Is</span></h2>
        <div class="nu-section-divider"></div>
        <div class="badge-row">
          <div class="nu-badge">
            <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2 L2 7 L12 12 L22 7 Z M2 17 L12 22 L22 17 M2 12 L12 17 L22 12"/></svg>
            9-Method Shipment Production Order
          </div>
          <div class="nu-badge">
            <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M3 3 H21 V21 H3 Z M7 8 H17 M7 12 H17 M7 16 H13"/></svg>
            4-Source Canonical Persistence
          </div>
          <div class="nu-badge">
            <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2 L15 9 L22 9 L17 14 L19 22 L12 18 L5 22 L7 14 L2 9 L9 9 Z"/></svg>
            Decimal-Math Invoice Prep Engine
          </div>
          <div class="nu-badge">
            <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M4 12 L9 17 L20 6"/></svg>
            Live UPS Tandem Reconciliation
          </div>
        </div>
      </section>

      <!-- KEY METRICS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Production <span>Readiness Metrics</span></h2>
        <div class="nu-section-divider"></div>
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-label">Branch</div>
            <div class="metric-value" style="font-size:1.3rem">feature/shipping-agent-v5</div>
            <div class="metric-sub">Promote to <strong>main</strong> on cutover</div>
          </div>
          <div class="metric-card cyan">
            <div class="metric-label">Unit Tests</div>
            <div class="metric-value">26 / 26</div>
            <div class="metric-sub">All green — including 15/15 invoice-prep tests</div>
          </div>
          <div class="metric-card success">
            <div class="metric-label">Tandem Agreement</div>
            <div class="metric-value">78.7%</div>
            <div class="metric-sub">63 of 80 shipments matched across sources</div>
          </div>
          <div class="metric-card gold">
            <div class="metric-label">Regression</div>
            <div class="metric-value">PASS</div>
            <div class="metric-sub">Chain Electric $8,930.48 — exact</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Sources Reconciled</div>
            <div class="metric-value">5 + V8</div>
            <div class="metric-sub">Email + Sheet back-process complete (D.6b)</div>
          </div>
          <div class="metric-card cyan">
            <div class="metric-label">UPS Methods</div>
            <div class="metric-value">9</div>
            <div class="metric-sub">Tandem mode w/ Apps Script enabled</div>
          </div>
          <div class="metric-card success">
            <div class="metric-label">Cutover Date</div>
            <div class="metric-value" style="font-size:1.5rem">2026-04-22</div>
            <div class="metric-sub">Today — final production tag</div>
          </div>
          <div class="metric-card gold">
            <div class="metric-label">Owner</div>
            <div class="metric-value" style="font-size:1.3rem">Aaron C. Norris</div>
            <div class="metric-sub">Founder &amp; CEO — sole approver</div>
          </div>
        </div>
      </section>

      <!-- GATES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Sprint 2 <span>Gate Status</span></h2>
        <div class="nu-section-divider"></div>
        <div class="gate-list">
          <div class="gate-row">
            <div class="gate-num">D.5</div>
            <div>
              <div class="gate-title">Invoice Prep Engine — Decimal Math</div>
              <div class="gate-desc">invoice_prep.py with Ben's shipping formula and Dealer's pricing logic. Chain Electric regression of $8,930.48 reproduces to the cent. 15/15 tests passing.</div>
            </div>
            <div class="gate-status pass">Passed</div>
          </div>
          <div class="gate-row">
            <div class="gate-num">D.6</div>
            <div>
              <div class="gate-title">UPS Tracking — Multi-Method (8 → 9)</div>
              <div class="gate-desc">8 tracking methods plus live probe and Gate 2 report. Akamai-blocks-browsers headline noted in environment report. 26 unit tests green.</div>
            </div>
            <div class="gate-status pass">Passed</div>
          </div>
          <div class="gate-row">
            <div class="gate-num">D.6b</div>
            <div>
              <div class="gate-title">Email + Sheet Back-Process (Dry-Run)</div>
              <div class="gate-desc">5 email sources reconciled against V8 sheet. Tandem agreement reached 63/80 = 78.7%. Historical gap inventory produced for closeout review.</div>
            </div>
            <div class="gate-status pass">Passed</div>
          </div>
          <div class="gate-row">
            <div class="gate-num">G2</div>
            <div>
              <div class="gate-title">9-Method Production Order — Locked</div>
              <div class="gate-desc">Order locked (was 8). ups_store_receipt added as explicit rung. Tandem mode with Apps Script enabled. 3-month silent-drop window documented.</div>
            </div>
            <div class="gate-status locked">Locked</div>
          </div>
          <div class="gate-row">
            <div class="gate-num">D.8</div>
            <div>
              <div class="gate-title">Benz Render + 4-Source Canonical Persistence</div>
              <div class="gate-desc">SD-2026-BENZ-SWEPCO-0320.html rendered. 4-source canonical persistence path live. Part 1 of 6 committed; remaining parts run in tandem.</div>
            </div>
            <div class="gate-status review">Part 1 / 6 — In Flight</div>
          </div>
        </div>
      </section>

      <!-- DELIVERABLES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Production <span>Deliverables</span></h2>
        <div class="nu-section-divider"></div>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width:130px">Commit</th>
                <th>Deliverable</th>
                <th style="width:140px">Component</th>
                <th style="width:110px">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="id-cell">8bc56aa</td>
                <td>Benz SD-2026-BENZ-SWEPCO-0320.html rendered + 4-source canonical persistence</td>
                <td><span class="pill blue">Render</span></td>
                <td><span class="pill green">Shipped</span></td>
              </tr>
              <tr>
                <td class="id-cell">5bda047</td>
                <td>Email + sheet back-process dry-run; 5 email sources + V8 sheet reconciled; 78.7% tandem agreement</td>
                <td><span class="pill blue">Reconcile</span></td>
                <td><span class="pill green">Shipped</span></td>
              </tr>
              <tr>
                <td class="id-cell">de3d096</td>
                <td>Sprint 2 Gate 2 — 9-method production order locked; ups_store_receipt added; tandem mode w/ Apps Script</td>
                <td><span class="pill gold">Gate</span></td>
                <td><span class="pill green">Locked</span></td>
              </tr>
              <tr>
                <td class="id-cell">7e371dd</td>
                <td>UPS tracking multi-method (8 methods) + live probe + Gate 2 report — 26 unit tests green</td>
                <td><span class="pill blue">Tracking</span></td>
                <td><span class="pill green">Shipped</span></td>
              </tr>
              <tr>
                <td class="id-cell">845c4be</td>
                <td>invoice_prep.py with Decimal math; Chain Electric $8,930.48 regression PASSING; 15/15 tests green</td>
                <td><span class="pill blue">Invoicing</span></td>
                <td><span class="pill green">Shipped</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- CUTOVER PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title">Cutover <span>Plan — 2026-04-22</span></h2>
        <div class="nu-section-divider"></div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">Step 1 · Pre-flight</div>
            <div class="timeline-title">Lock the branch and verify the green</div>
            <div class="timeline-text">Confirm 26/26 unit tests and the $8,930.48 Chain Electric regression. Snapshot data/ directory, capture audit_results.json. No outstanding writes against task_queue.md.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Step 2 · Tag</div>
            <div class="timeline-title">Tag v5.0.0 on feature/shipping-agent-v5</div>
            <div class="timeline-text">Annotated tag from the tip of the branch — same SHA that landed Benz render and 4-source canonical persistence (8bc56aa baseline + tandem D.8 follow-ons).</div>
          </div>
          <div class="timeline-item now">
            <div class="timeline-date">Step 3 · Promote</div>
            <div class="timeline-title">Merge feature/shipping-agent-v5 → main</div>
            <div class="timeline-text">Fast-forward where possible. Push to GitHub (acnorris17/norris-ops). Confirm ops.norrisutilities.com receives the build per the permanent push rule.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Step 4 · Switch</div>
            <div class="timeline-title">Flip production order from 8-method to 9-method</div>
            <div class="timeline-text">Activate ups_store_receipt as an explicit rung. Tandem mode runs against Apps Script. 3-month silent-drop window remains documented as a known gap.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Step 5 · Watch</div>
            <div class="timeline-title">First-72-hour observation window</div>
            <div class="timeline-text">Monitor invoice prep against open March 20 shipments. Watch tandem agreement to ensure it holds at or above 78.7%. Telegram alert on any push or invoice failure.</div>
          </div>
        </div>
      </section>

      <!-- CHECKLISTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Go-Live <span>Checklist</span></h2>
        <div class="nu-section-divider"></div>
        <div class="two-col">
          <div class="checklist">
            <h3>Engineering — Done</h3>
            <ul>
              <li>26 / 26 unit tests passing</li>
              <li>Decimal math in invoice_prep.py</li>
              <li>Chain Electric $8,930.48 regression exact</li>
              <li>9-method production order locked at G2</li>
              <li>ups_store_receipt explicit rung added</li>
              <li>4-source canonical persistence committed</li>
              <li>Benz SD-2026-BENZ-SWEPCO-0320.html rendered</li>
            </ul>
          </div>
          <div class="checklist">
            <h3>Operations — Final Pass</h3>
            <ul>
              <li>Tag v5.0.0 on shipping-agent-v5 tip</li>
              <li>Merge to main and push to acnorris17/norris-ops</li>
              <li>Verify live build at ops.norrisutilities.com</li>
              <li class="pending">Run first live invoice through 9-method order</li>
              <li class="pending">Validate tandem agreement holds ≥ 78.7%</li>
              <li class="pending">D.8 parts 2–6 completed in tandem</li>
              <li class="pending">CB notified — Tier 1 trust workflow unaffected</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- KNOWN CONSTRAINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Known <span>Constraints Carried Forward</span></h2>
        <div class="nu-section-divider"></div>
        <div class="two-col">
          <div class="checklist">
            <h3>Environment</h3>
            <ul>
              <li>Akamai blocks browsers — headlined in Gate 2 report</li>
              <li>3-month silent-drop window documented and accepted</li>
              <li>Tandem mode requires Apps Script remaining authorized</li>
              <li>Source of truth: GitHub repo acnorris17/norris-ops</li>
            </ul>
          </div>
          <div class="checklist">
            <h3>Open Follow-Ups</h3>
            <ul>
              <li class="pending">D.8 remaining parts (2 / 3 / 4 / 5 / 6)</li>
              <li class="pending">Close historical gap inventory from D.6b</li>
              <li class="pending">Lift tandem agreement above 80% target</li>
              <li class="pending">Telegram alert on any GitHub push failure</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- DECISION -->
      <section class="nu-section">
        <h2 class="nu-section-title">Final <span>Decision</span></h2>
        <div class="nu-section-divider"></div>
        <div class="decision-card">
          <div class="decision-label">Go / No-Go</div>
          <div class="decision-verdict">GO — V5 to Production</div>
          <div class="decision-sub">All Sprint 2 gates are passed or locked. Regression math is exact, tandem reconciliation is operating at 78.7%, and the 9-method production order is the new floor. V5 becomes the final version on 2026-04-22.</div>
        </div>

        <div class="sig-block">
          <div class="sig-line">
            <strong>Aaron C. Norris</strong>
            Founder &amp; CEO · Norris Utilities®, LLC
          </div>
          <div class="sig-line">
            <strong>Release Date</strong>
            2026-04-22 · feature/shipping-agent-v5 → main
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
    <div class="nu-footer-meta">
      V5 Production Release · Document generated 2026-04-22 · Phoenix Icon® · A Legacy of Commitment®
    </div>
  </footer>

</body>
</html>