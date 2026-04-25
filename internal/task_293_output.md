<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>V5 Production Release Plan — Norris Utilities®</title>
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
      --nu-success: #1A8754;
      --nu-warning: #C9700C;
      --nu-danger: #B12A2A;
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
      padding: 60px 40px 90px;
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
    .nu-header > * { position: relative; z-index: 2; }

    /* Ghost phoenix watermark in header */
    .nu-header-phoenix {
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
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON TRANSITION */
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOC HEADER */
    .doc-header {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 30px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .doc-eyebrow {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 18px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.15rem;
      color: var(--nu-body-text);
      max-width: 760px;
      margin: 0 auto;
      font-weight: 400;
    }
    .doc-meta {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;
      margin-top: 22px;
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .doc-meta span strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 50px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 8px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .lead {
      color: var(--nu-blue);
      margin-right: 8px;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 24px;
    }

    /* GO/NO-GO BANNER */
    .gng-banner {
      background: linear-gradient(135deg, #1a8754 0%, #0d6e44 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 24px;
      box-shadow: 0 6px 20px rgba(26, 135, 84, 0.25);
    }
    .gng-icon {
      width: 60px;
      height: 60px;
      background: rgba(255,255,255,0.18);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.8rem;
      flex-shrink: 0;
    }
    .gng-text h2 {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 4px;
    }
    .gng-text p {
      font-size: 0.95rem;
      opacity: 0.95;
    }

    /* CHEVRON BADGES */
    .badge-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 14px;
      margin-bottom: 30px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 32px 18px 22px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      width: 34px;
      height: 34px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* RELEASE PHASES */
    .phase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 22px;
      margin-bottom: 16px;
    }
    .phase-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      position: relative;
    }
    .phase-card.done { border-top-color: var(--nu-success); }
    .phase-card.active { border-top-color: var(--nu-cyan); box-shadow: 0 4px 18px rgba(6,208,255,0.18); }
    .phase-card.pending { border-top-color: var(--nu-medium-gray); }

    .phase-tag {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .tag-done { background: rgba(26, 135, 84, 0.12); color: var(--nu-success); }
    .tag-active { background: rgba(6, 208, 255, 0.18); color: #0570a0; }
    .tag-pending { background: var(--nu-medium-gray); color: var(--nu-body-text); }

    .phase-card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .phase-card .phase-when {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      font-weight: 700;
      margin-bottom: 14px;
    }
    .phase-card ul {
      list-style: none;
      padding: 0;
      font-size: 0.9rem;
    }
    .phase-card ul li {
      padding-left: 18px;
      position: relative;
      margin-bottom: 6px;
      line-height: 1.5;
    }
    .phase-card ul li::before {
      content: '•';
      color: var(--nu-blue);
      position: absolute;
      left: 4px;
      font-weight: 900;
    }

    /* CHECKLIST TABLE */
    .checklist-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .checklist-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .checklist-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .checklist-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .checklist-table tbody tr:last-child td { border-bottom: none; }
    .checklist-table tbody tr:hover { background: var(--nu-light-gray); }
    .checklist-table .col-status { width: 110px; text-align: center; }
    .checklist-table .col-num { width: 50px; font-weight: 700; color: var(--nu-blue); }
    .checklist-table .col-owner { width: 110px; }

    .status-pill {
      display: inline-block;
      padding: 3px 12px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .pill-pass { background: rgba(26, 135, 84, 0.15); color: var(--nu-success); }
    .pill-todo { background: rgba(201, 112, 12, 0.15); color: var(--nu-warning); }
    .pill-block { background: rgba(177, 42, 42, 0.15); color: var(--nu-danger); }

    /* ROLLBACK BOX */
    .rollback-box {
      background: linear-gradient(135deg, #fff8f0 0%, #ffeedd 100%);
      border-left: 4px solid var(--nu-warning);
      padding: 24px 28px;
      border-radius: 6px;
      margin-bottom: 30px;
    }
    .rollback-box h3 {
      color: var(--nu-warning);
      font-weight: 900;
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
    .rollback-box ol {
      padding-left: 22px;
      font-size: 0.95rem;
    }
    .rollback-box ol li {
      margin-bottom: 6px;
    }
    .rollback-box code {
      background: rgba(0,0,0,0.06);
      padding: 1px 7px;
      border-radius: 3px;
      font-family: 'SF Mono', Menlo, monospace;
      font-size: 0.85rem;
      color: var(--nu-navy);
    }

    /* METRIC TILES */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }
    .metric-tile {
      background: linear-gradient(135deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      padding: 22px;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      text-align: center;
    }
    .metric-value {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 6px;
    }
    .metric-value.green { color: var(--nu-success); }
    .metric-label {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 38px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      margin-bottom: 24px;
      padding-bottom: 4px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -32px;
      top: 4px;
      width: 14px;
      height: 14px;
      background: var(--nu-blue);
      border-radius: 50%;
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-item.now::before {
      background: var(--nu-cyan);
      box-shadow: 0 0 0 2px var(--nu-cyan), 0 0 0 6px rgba(6,208,255,0.25);
    }
    .timeline-time {
      font-weight: 700;
      font-size: 0.82rem;
      color: var(--nu-blue);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-detail {
      font-size: 0.92rem;
    }

    /* AARON ASK BOX */
    .ask-box {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin-bottom: 40px;
      box-shadow: 0 8px 24px rgba(0, 51, 204, 0.3);
    }
    .ask-box h2 {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 14px;
      letter-spacing: -0.01em;
    }
    .ask-box p {
      font-size: 1rem;
      margin-bottom: 16px;
      opacity: 0.95;
    }
    .ask-box .ask-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 18px;
    }
    .ask-btn {
      display: inline-block;
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .ask-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 14px rgba(0,0,0,0.2);
    }
    .ask-btn.outline {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, #000033 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px 36px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact strong { color: var(--nu-white); }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 80px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 20px auto;
      opacity: 0.5;
    }
    .nu-footer-fine {
      font-size: 0.78rem;
      opacity: 0.6;
      margin-top: 14px;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px; }
      .doc-title { font-size: 1.8rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
      .gng-banner { flex-direction: column; text-align: center; padding: 22px; }
      .checklist-table { font-size: 0.85rem; }
      .checklist-table th, .checklist-table td { padding: 10px 8px; }
      .checklist-table .col-owner { display: none; }
      .ask-box { padding: 24px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .phase-card, .nu-badge, .checklist-table, .ask-box, .gng-banner { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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

      <!-- DOC HEADER -->
      <div class="doc-header">
        <div class="doc-eyebrow">Production Release Plan</div>
        <h1 class="doc-title">Take <span class="accent">V5</span> to Production —<br>Final Version</h1>
        <p class="doc-subtitle">Shipment-Aware Order System V5 graduates from Phase A live build to the locked, single-source-of-truth invoicing engine for Norris Utilities.</p>
        <div class="doc-meta">
          <span><strong>Source:</strong> reMarkable action item</span>
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Date filed:</strong> 2026-04-25</span>
          <span><strong>Status:</strong> Cut-over staged</span>
        </div>
      </div>

      <!-- GO/NO-GO -->
      <div class="gng-banner">
        <div class="gng-icon">✓</div>
        <div class="gng-text">
          <h2>V5 Phase A is LIVE — proceed to FINAL cut-over</h2>
          <p>76 / 76 tests passing on norris-ops HEAD 1d86e5a. V5 becomes the single source of truth for all invoicing once the cut-over checklist clears.</p>
        </div>
      </div>

      <!-- KEY METRICS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Where</span><span class="rest">V5 Stands Today</span></h2>
        <div class="nu-section-rule"></div>

        <div class="metrics-grid">
          <div class="metric-tile">
            <div class="metric-value green">76 / 76</div>
            <div class="metric-label">Tests Passing</div>
          </div>
          <div class="metric-tile">
            <div class="metric-value">7</div>
            <div class="metric-label">Status States</div>
          </div>
          <div class="metric-tile">
            <div class="metric-value">23</div>
            <div class="metric-label">Locked Order Rules</div>
          </div>
          <div class="metric-tile">
            <div class="metric-value">5</div>
            <div class="metric-label">Source Priorities</div>
          </div>
          <div class="metric-tile">
            <div class="metric-value">$3,685.15</div>
            <div class="metric-label">CB Silent-Draft Backlog</div>
          </div>
        </div>
      </section>

      <!-- WHAT FINAL MEANS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">What</span><span class="rest">"Final Version" Means</span></h2>
        <div class="nu-section-rule"></div>

        <div class="badge-row">
          <div class="nu-badge"><div class="nu-badge-num">1</div>V5 = single source of truth</div>
          <div class="nu-badge"><div class="nu-badge-num">2</div>V1–V4 placed in archive — read-only</div>
          <div class="nu-badge"><div class="nu-badge-num">3</div>Gate A preserved on every PR</div>
          <div class="nu-badge"><div class="nu-badge-num">4</div>Phase B post-completion queue unlocks</div>
        </div>
      </section>

      <!-- RELEASE PHASES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Release</span><span class="rest">Phases — Phase A through Final</span></h2>
        <div class="nu-section-rule"></div>

        <div class="phase-grid">
          <div class="phase-card done">
            <span class="phase-tag tag-done">Complete</span>
            <h3>Phase A — Live Build</h3>
            <div class="phase-when">2026-04-23 — DONE</div>
            <ul>
              <li>NU brand wiring shipped</li>
              <li>Gate A preserved on PRs</li>
              <li>76 / 76 tests green</li>
              <li>HEAD 1d86e5a deployed</li>
            </ul>
          </div>

          <div class="phase-card done">
            <span class="phase-tag tag-done">Complete</span>
            <h3>Phase B §1 — Status Engine</h3>
            <div class="phase-when">Last commit a8b2f86</div>
            <ul>
              <li>7-state status engine</li>
              <li>INVOICED state immutability</li>
              <li>Phase 1 tests passing</li>
            </ul>
          </div>

          <div class="phase-card done">
            <span class="phase-tag tag-done">Complete</span>
            <h3>Phase B §2 + §3 — Writer + Payments</h3>
            <div class="phase-when">Last commit 3cd699e</div>
            <ul>
              <li>sa_v1_writer endpoints live</li>
              <li>Payment rules enforced</li>
              <li>Tests passing</li>
            </ul>
          </div>

          <div class="phase-card active">
            <span class="phase-tag tag-active">Active — Cut-Over</span>
            <h3>V2 UI Completion → FINAL</h3>
            <div class="phase-when">2026-04-25 — TODAY</div>
            <ul>
              <li>sa_v1_writer 7 endpoints + lib backing</li>
              <li>Latest commit aab7530</li>
              <li>Gate A clear → flip the switch</li>
              <li>V5 declared FINAL</li>
            </ul>
          </div>

          <div class="phase-card pending">
            <span class="phase-tag tag-pending">Queued</span>
            <h3>Post-Completion Q1–Q15</h3>
            <div class="phase-when">Unlocks after FINAL</div>
            <ul>
              <li>CB silent-draft backlog ($3,685.15, QB 150)</li>
              <li>QB invoice PDF auto-capture pipeline</li>
              <li>Invoicing Pulse KPI tiles</li>
            </ul>
          </div>

          <div class="phase-card pending">
            <span class="phase-tag tag-pending">Queued</span>
            <h3>V2.2 Email Automation</h3>
            <div class="phase-when">Already merged commit 08d371b</div>
            <ul>
              <li>FlexPro Armor filter</li>
              <li>Review queue</li>
              <li>V1 → V2.2 migration</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CUT-OVER CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Cut-Over</span><span class="rest">Checklist — Must Clear Before "FINAL" Tag</span></h2>
        <div class="nu-section-rule"></div>

        <table class="checklist-table">
          <thead>
            <tr>
              <th class="col-num">#</th>
              <th>Gate</th>
              <th class="col-owner">Owner</th>
              <th class="col-status">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="col-num">1</td>
              <td>All 76 tests green on a clean checkout (no skips, no xfails)</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="col-num">2</td>
              <td>Gate A preserved — no merge to main without it</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="col-num">3</td>
              <td>sa_v1_writer all 7 endpoints respond 200 against live data sample</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="col-num">4</td>
              <td>INVOICED-state immutability test confirmed against QB sandbox</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-todo">Verify</span></td>
            </tr>
            <tr>
              <td class="col-num">5</td>
              <td>Source priority hierarchy locked (SA_AUTO=10, UPS_RECEIPT=20, QB_SNAPSHOT=30, QB_LIVE=40, MANUAL=50)</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="col-num">6</td>
              <td>23 V5 order rules locked — no edits without bumping rule version</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="col-num">7</td>
              <td>Payment rules pass against Chain Electric reconciliation fixture</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="col-num">8</td>
              <td>Multi-ship-to rule (one parent_order, many ship-to) verified end-to-end</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-todo">Verify</span></td>
            </tr>
            <tr>
              <td class="col-num">9</td>
              <td>V1–V4 archive directory created and labeled READ-ONLY</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-todo">Do</span></td>
            </tr>
            <tr>
              <td class="col-num">10</td>
              <td>FlexPro Armor email filter operational on V2.2 inbox</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="col-num">11</td>
              <td>Phoenix Icon® opacity assertion holds in pulse window [0.10, 0.14]</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="col-num">12</td>
              <td>Tag commit on main: <em>v5.0-FINAL</em>, push to GitHub, Telegram alert sent</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-todo">Do</span></td>
            </tr>
            <tr>
              <td class="col-num">13</td>
              <td>ops.norrisutilities.com displays "V5 — FINAL" badge on internal dashboard</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-todo">Do</span></td>
            </tr>
            <tr>
              <td class="col-num">14</td>
              <td>CB silent-draft backlog ($3,685.15, QB 150) processed on V5 path — no V1 fallback</td>
              <td class="col-owner">CB + Aaron review</td>
              <td class="col-status"><span class="status-pill pill-todo">Do</span></td>
            </tr>
            <tr>
              <td class="col-num">15</td>
              <td>Master Tracker row "V5 Production" closed with FINAL date stamped</td>
              <td class="col-owner">Aaron</td>
              <td class="col-status"><span class="status-pill pill-todo">Do</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Cut-Over</span><span class="rest">Day Timeline — 2026-04-25</span></h2>
        <div class="nu-section-rule"></div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-time">04:00 — Pre-flight</div>
            <div class="timeline-title">Aaron pulls latest main, runs full test suite locally</div>
            <div class="timeline-detail">All 76 tests must pass before anything moves. If a test fails, STOP and Telegram alert.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">04:30 — Verify Items 4 + 8</div>
            <div class="timeline-title">INVOICED immutability + multi-ship-to end-to-end check</div>
            <div class="timeline-detail">Both must clear against the QB sandbox before tagging.</div>
          </div>
          <div class="timeline-item now">
            <div class="timeline-time">05:00 — Archive V1–V4</div>
            <div class="timeline-title">Move legacy versions into <code>/archive/</code> and mark READ-ONLY</div>
            <div class="timeline-detail">Drop a one-line README in each pointing to V5 as the active path.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">05:30 — Tag &amp; Push</div>
            <div class="timeline-title">Tag commit <code>v5.0-FINAL</code>, push to GitHub, push norris-ops</div>
            <div class="timeline-detail">Tag message: "V5 final — single source of truth for invoicing."</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">06:00 — Verify Live</div>
            <div class="timeline-title">Confirm "V5 — FINAL" badge live at ops.norrisutilities.com</div>
            <div class="timeline-detail">If badge missing, run norris-ops deploy script and re-check.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">06:15 — Process CB Backlog</div>
            <div class="timeline-title">Run the $3,685.15 silent-draft batch through V5 — verify QB 150 path</div>
            <div class="timeline-detail">CB drafts → Aaron review → invoiced. Confirm NO V1 fallback fires.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">06:45 — Telegram + Master Tracker</div>
            <div class="timeline-title">Aaron sends Telegram: "V5 is FINAL." Master Tracker row closed.</div>
            <div class="timeline-detail">Post-Completion Queue Q1–Q15 unlocks. Phase B §4+ scheduling begins.</div>
          </div>
        </div>
      </section>

      <!-- ROLLBACK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Rollback</span><span class="rest">Plan — If Something Breaks</span></h2>
        <div class="nu-section-rule"></div>

        <div class="rollback-box">
          <h3>If a check fails or production misbehaves</h3>
          <ol>
            <li><strong>STOP the cut-over.</strong> Do not push the <code>v5.0-FINAL</code> tag.</li>
            <li>Revert main to commit <code>aab7530</code> (last known-green V2 UI completion).</li>
            <li>Run <code>git push origin main --force-with-lease</code> ONLY after Telegram confirmation from Aaron — never silent.</li>
            <li>Send Telegram alert: "V5 cut-over rolled back. Reason: [error]. Phase A still live."</li>
            <li>Open a journal entry under <code>journal/2026-04-25.md</code> documenting the failure mode.</li>
            <li>Phase A LIVE state is preserved — no customer impact.</li>
          </ol>
        </div>
      </section>

      <!-- WHAT UNLOCKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">What</span><span class="rest">Unlocks Once V5 = FINAL</span></h2>
        <div class="nu-section-rule"></div>

        <div class="badge-row">
          <div class="nu-badge"><div class="nu-badge-num">Q1</div>CB silent-draft backlog clears</div>
          <div class="nu-badge"><div class="nu-badge-num">Q2</div>QB invoice PDF auto-capture</div>
          <div class="nu-badge"><div class="nu-badge-num">Q3</div>Invoicing Pulse KPI tiles go live</div>
          <div class="nu-badge"><div class="nu-badge-num">Q4</div>Phase B §4+ build queue starts</div>
        </div>
      </section>

      <!-- ASK -->
      <div class="ask-box">
        <h2>Aaron — your call to lock V5 as FINAL</h2>
        <p>Phase A is live, all 76 tests are green, the V2 UI is complete, and the cut-over checklist is staged. Three items still need your direct verification (Items 4, 8, 14) before the <code style="background:rgba(255,255,255,0.18); padding:1px 6px; border-radius:3px; font-family:Menlo, monospace;">v5.0-FINAL</code> tag goes on main.</p>
        <p>Reply with <strong>"GO"</strong> to start the 04:00–06:45 cut-over, or flag any item above for re-work.</p>
        <div class="ask-actions">
          <a href="tel:2055001343" class="ask-btn">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=V5%20FINAL%20Cut-Over%20—%20GO" class="ask-btn outline">Email: GO for V5 FINAL</a>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong> | Founder &amp; CEO<br>
      Norris Utilities®, LLC | 130 Inverness Plaza #210, Birmingham, AL 35242<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-fine">
      Norris Utilities® and A Legacy of Commitment® are registered trademarks of Norris Utilities, LLC. Phoenix Icon® is a registered trademark.<br>
      V5 Production Release Plan — generated 2026-04-25 from reMarkable action item.
    </div>
  </footer>

</body>
</html>