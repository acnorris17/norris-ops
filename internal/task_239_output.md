<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buttewoods Estate Acquisition — Negotiation Brief — Norris Utilities®</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --nu-success: #0A7D2E;
      --nu-warning: #B8860B;
      --nu-alert: #B91C1C;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
    .nu-header * { position: relative; z-index: 2; }

    /* Ghost phoenix watermark */
    .nu-header .ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 520px;
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 400px; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-wrap {
      max-width: 1140px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ TITLE BLOCK ══ */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-blue);
      margin-bottom: 36px;
    }
    .doc-title h1 {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }
    .doc-title h1 .blue-word { color: var(--nu-blue); }
    .doc-title .subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-top: 8px;
    }
    .doc-stamp {
      text-align: right;
      font-size: 0.85rem;
      color: var(--nu-body-text);
      line-height: 1.8;
    }
    .doc-stamp strong { color: var(--nu-dark-text); font-weight: 700; }
    .doc-stamp .status-chip {
      display: inline-block;
      background: var(--nu-warning);
      color: var(--nu-white);
      padding: 4px 12px;
      border-radius: 3px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-top: 4px;
    }

    /* ══ SECTION ══ */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ PROPERTY SUMMARY PANEL ══ */
    .property-panel {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
      margin-bottom: 16px;
    }
    .property-address {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .property-sub {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 20px;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      padding-top: 18px;
      border-top: 1px dashed var(--nu-medium-gray);
    }
    .stat {
      text-align: center;
    }
    .stat .value {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 4px;
    }
    .stat .label {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
    }

    /* ══ BADGE ══ */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 20px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-badge-icon {
      width: 22px;
      height: 22px;
      margin-right: 12px;
      fill: var(--nu-cyan);
      flex-shrink: 0;
    }

    /* ══ OBJECTIVES / TERMS ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .nu-card ul { list-style: none; padding: 0; }
    .nu-card ul li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 10px;
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* ══ NEGOTIATION TABLE ══ */
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
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table td .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .pill-target { background: #DCFCE7; color: var(--nu-success); }
    .pill-walk { background: #FEE2E2; color: var(--nu-alert); }
    .pill-stretch { background: #FEF3C7; color: var(--nu-warning); }

    /* ══ PLAYBOOK STEPS ══ */
    .playbook {
      counter-reset: step;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .step {
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 22px 22px 56px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
      counter-increment: step;
    }
    .step::before {
      content: counter(step);
      position: absolute;
      top: 18px; left: 16px;
      width: 32px; height: 32px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,255,0.25);
    }
    .step h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ DUE DILIGENCE CHECKLIST ══ */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 10px 0;
    }
    .checklist-item {
      display: flex;
      gap: 14px;
      padding: 12px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: flex-start;
    }
    .checklist-item:last-child { border-bottom: none; }
    .checklist-item .box {
      width: 22px; height: 22px;
      flex-shrink: 0;
      margin-top: 2px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist-item .text {
      flex: 1;
      font-size: 0.95rem;
    }
    .checklist-item .text strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }
    .checklist-item .text span {
      color: var(--nu-body-text);
      font-size: 0.86rem;
    }

    /* ══ CONTINGENCIES ══ */
    .contingency-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .contingency {
      background: linear-gradient(135deg, #F0F9FF 0%, #FFFFFF 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 20px;
      border-radius: 6px;
    }
    .contingency h5 {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .contingency p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px; top: 8px; bottom: 8px;
      width: 3px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -27px; top: 6px;
      width: 13px; height: 13px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-item .when {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.9rem;
      margin-bottom: 2px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .timeline-item .what {
      color: var(--nu-body-text);
      font-size: 0.95rem;
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .callout .icon {
      width: 48px; height: 48px;
      flex-shrink: 0;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 1.5rem;
    }
    .callout .content h4 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-cyan);
      margin-bottom: 4px;
    }
    .callout .content p {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.9);
      line-height: 1.5;
    }

    /* ══ NOTES BOX ══ */
    .notes-box {
      background: var(--nu-light-gray);
      border: 1px dashed var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      min-height: 160px;
      background-image: repeating-linear-gradient(transparent, transparent 28px, var(--nu-medium-gray) 28px, var(--nu-medium-gray) 29px);
      background-position: 0 16px;
    }
    .notes-box .notes-label {
      font-weight: 900;
      font-size: 0.8rem;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 12px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact strong { color: var(--nu-white); font-weight: 700; }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-confidential {
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-wrap { padding: 40px 20px 60px; }
      .doc-title h1 { font-size: 1.5rem; }
      .doc-meta { flex-direction: column; }
      .doc-stamp { text-align: left; }
      .two-col { grid-template-columns: 1fr; }
      .nu-table { font-size: 0.82rem; }
      .nu-table th, .nu-table td { padding: 10px 10px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 10px 16px; }
      .callout { flex-direction: column; text-align: center; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-table, .step { box-shadow: none; }
      .nu-footer { -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="ghost-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- TITLE / META -->
      <div class="doc-meta">
        <div class="doc-title">
          <h1><span class="blue-word">Buttewoods</span> Estate — Negotiation Brief</h1>
          <div class="subtitle">Acquisition strategy &amp; playbook for 4505 Buttewoods | 7,098 sq ft residence</div>
        </div>
        <div class="doc-stamp">
          <strong>Prepared:</strong> April 20, 2026<br>
          <strong>Prepared by:</strong> Aaron C. Norris<br>
          <strong>Classification:</strong> Internal / Confidential<br>
          <span class="status-chip">Action Item — Open</span>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2L2 9h3v12h6v-7h2v7h6V9h3L12 2z"/></svg>
          Subject Property
        </div>
        <div class="property-panel">
          <div class="property-address">4505 Buttewoods</div>
          <div class="property-sub">Private residential estate — primary target for acquisition.</div>
          <div class="property-stats">
            <div class="stat">
              <div class="value">7,098</div>
              <div class="label">Sq Ft Residence</div>
            </div>
            <div class="stat">
              <div class="value">1</div>
              <div class="label">Parcel Under Review</div>
            </div>
            <div class="stat">
              <div class="value">TBV</div>
              <div class="label">Appraisal Pending</div>
            </div>
            <div class="stat">
              <div class="value">30–45</div>
              <div class="label">Target Close (Days)</div>
            </div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVES + RATIONALE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Acquisition</span> <span class="rest">Objectives</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Primary Objectives</h3>
            <ul>
              <li>Secure the 4505 Buttewoods estate at or below fair market value.</li>
              <li>Negotiate clean title transfer with no lingering liens or encumbrances.</li>
              <li>Close within 30–45 days of fully executed purchase agreement.</li>
              <li>Preserve cash position by structuring favorable financing terms.</li>
              <li>Protect downside with robust inspection and appraisal contingencies.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Strategic Rationale</h3>
            <ul>
              <li>7,098 sq ft footprint provides long-horizon optionality for residence, asset hold, or mixed use.</li>
              <li>Current market cycle favors informed, cash-capable buyers.</li>
              <li>Norris Utilities®, LLC asset base supports acquisition without disrupting operating capital.</li>
              <li>Aligned with Aaron's long-term legacy planning — A Legacy of Commitment®.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- PRICE LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Price</span> <span class="rest">&amp; Terms Ladder</span></h2>
        <p style="margin-bottom: 16px; color: var(--nu-body-text);">Negotiation anchors finalized once independent appraisal and comparable-sales analysis are complete. These rungs drive every counter.</p>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Price Anchor</th>
              <th>Terms</th>
              <th>Posture</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opening Offer</strong></td>
              <td>8–12% below list / appraisal</td>
              <td>Standard financing, 30-day inspection, 45-day close</td>
              <td><span class="pill pill-target">Starting Point</span></td>
            </tr>
            <tr>
              <td><strong>Target Close</strong></td>
              <td>At or just below appraised value</td>
              <td>Seller concessions toward closing costs or repairs</td>
              <td><span class="pill pill-target">Primary Goal</span></td>
            </tr>
            <tr>
              <td><strong>Stretch Price</strong></td>
              <td>Up to appraised value + 2%</td>
              <td>Only with unique inclusions (furnishings, adjoining land, lease-back)</td>
              <td><span class="pill pill-stretch">Conditional</span></td>
            </tr>
            <tr>
              <td><strong>Walk-Away Line</strong></td>
              <td>Any number above appraisal without offset</td>
              <td>Unwilling seller on inspection or title clearance</td>
              <td><span class="pill pill-walk">Hard Stop</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- PLAYBOOK STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Playbook</span></h2>
        <div class="playbook">
          <div class="step">
            <h4>Establish Value Baseline</h4>
            <p>Order independent appraisal. Pull three comparable-sales reports within a 2-mile radius and within the last 12 months.</p>
          </div>
          <div class="step">
            <h4>Confirm Seller Motivation</h4>
            <p>Identify timeline pressure, carrying costs, and prior offer history. Every motivator below list is leverage earned honestly.</p>
          </div>
          <div class="step">
            <h4>Lead With Credibility</h4>
            <p>Offer letter accompanied by proof of funds and pre-approval. Signal seriousness without overpaying for the privilege.</p>
          </div>
          <div class="step">
            <h4>Anchor the Opening</h4>
            <p>Open 8–12% below the target anchor. Justify with comps, condition notes, and current rate environment — never emotion.</p>
          </div>
          <div class="step">
            <h4>Trade Terms for Price</h4>
            <p>If seller won't move on price, capture value elsewhere: concessions, inclusions, rent-back waiver, or extended inspection.</p>
          </div>
          <div class="step">
            <h4>Protect the Exit</h4>
            <p>Keep inspection, appraisal, and financing contingencies intact until all reports clear. Walk calmly if the walk-away line is crossed.</p>
          </div>
        </div>
      </section>

      <!-- CONTINGENCIES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Contingencies</span> <span class="rest">to Hold Firm</span></h2>
        <div class="contingency-grid">
          <div class="contingency">
            <h5>Inspection</h5>
            <p>Minimum 10 business days. Full structural, roof, HVAC, electrical, plumbing, foundation, pest, and septic/well review.</p>
          </div>
          <div class="contingency">
            <h5>Appraisal</h5>
            <p>Purchase contingent on appraised value meeting or exceeding final contract price. Gap-cap defined in offer letter.</p>
          </div>
          <div class="contingency">
            <h5>Financing</h5>
            <p>Standard lender approval window. Rate-lock timeline disclosed. No waiver of financing contingency under any circumstance.</p>
          </div>
          <div class="contingency">
            <h5>Title &amp; Survey</h5>
            <p>Clear title required. Owner's title policy to be issued. Updated survey reviewed for encroachments, easements, setback issues.</p>
          </div>
          <div class="contingency">
            <h5>Disclosures</h5>
            <p>Seller disclosure reviewed for material defects, prior claims, repairs, environmental history. Any surprises trigger renegotiation.</p>
          </div>
          <div class="contingency">
            <h5>HOA / Covenants</h5>
            <p>Full review of CC&amp;Rs, assessments, pending litigation. Any restriction impacting intended use is a renegotiation trigger.</p>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="checklist">
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>Independent appraisal ordered &amp; reviewed</strong>
              <span>Licensed appraiser; comparable-sales analysis within 2 miles / 12 months.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>Full home inspection complete</strong>
              <span>Structural, mechanical, roof, foundation, HVAC, electrical, plumbing.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>Pest, radon, and specialty inspections</strong>
              <span>Termite, mold, radon, septic/well (if applicable), pool/spa if present.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>Title commitment reviewed</strong>
              <span>Chain of title, liens, judgments, easements, restrictive covenants confirmed clear.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>Survey updated and recorded</strong>
              <span>Boundary confirmation, encroachments, setback compliance.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>Property tax history &amp; assessment</strong>
              <span>Last 3 years of tax bills, pending reassessment, special-district levies.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>Insurance quote obtained</strong>
              <span>Homeowner's policy quote; verify floodplain status and premium impact.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>HOA &amp; covenant documents reviewed</strong>
              <span>CC&amp;Rs, bylaws, budget, reserves, pending special assessments.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>Seller disclosures reviewed</strong>
              <span>Material defects, past repairs, environmental concerns, prior claims.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>Financing pre-approval issued</strong>
              <span>Rate, terms, and lock window confirmed in writing.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>Closing-cost estimate received</strong>
              <span>Title, recording, transfer, prorations, escrow — full line-item projection.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="box"></div>
            <div class="text">
              <strong>Final walkthrough scheduled</strong>
              <span>Within 48 hours of closing. Condition verification, repair completion confirmation.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Close</span> <span class="rest">Timeline</span></h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="when">Day 0 — Offer Submitted</div>
            <div class="what">Opening offer delivered with proof of funds and pre-approval letter.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 1–5 — Negotiation Window</div>
            <div class="what">Counteroffers exchanged. Price, terms, and contingency language finalized.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 5–7 — Contract Execution</div>
            <div class="what">Purchase agreement signed. Earnest money deposited into escrow.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 7–17 — Inspection Period</div>
            <div class="what">All inspections ordered and completed. Repair requests negotiated.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 10–25 — Appraisal &amp; Title</div>
            <div class="what">Appraisal ordered, returned, and reviewed. Title commitment issued and cleared.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 25–40 — Financing Clearance</div>
            <div class="what">Lender underwriting complete. Clear-to-close issued. Closing disclosure delivered.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 40–45 — Close</div>
            <div class="what">Final walkthrough, signing, funding, and recording. Keys transferred.</div>
          </div>
        </div>
      </section>

      <!-- GUIDING PRINCIPLE -->
      <section class="nu-section">
        <div class="callout">
          <div class="icon">★</div>
          <div class="content">
            <h4>Guiding Principle</h4>
            <p>Negotiate with credibility, patience, and full information. Price follows preparation. Walk away from any deal that crosses the walk-away line — another property always exists; an overpaid purchase never unwinds cleanly.</p>
          </div>
        </div>
      </section>

      <!-- NOTES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Field</span> <span class="rest">Notes</span></h2>
        <div class="notes-box">
          <div class="notes-label">Aaron's Notes</div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO<br>
      Norris Utilities®, LLC &nbsp;|&nbsp; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-confidential">Internal Document — Confidential Negotiation Brief</div>
  </footer>

</body>
</html>