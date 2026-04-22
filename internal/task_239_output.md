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
      --nu-success: #0a8f3c;
      --nu-warn: #d97706;
      --nu-danger: #b91c1c;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.65;
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
    }
    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      fill: var(--nu-white);
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
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
      font-size: 1.35rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
    }
    .nu-doc-title {
      margin-top: 28px;
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-white);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-doc-sub {
      font-weight: 400;
      font-size: 1rem;
      color: rgba(255,255,255,0.92);
      margin-top: 6px;
      letter-spacing: 0.03em;
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
      padding-bottom: 40px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 400px; left: 50%;
      transform: translateX(-50%);
      width: 620px; height: 620px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: var(--nu-dark-text);
      letter-spacing: 0.01em;
    }
    .nu-section-title .lead { color: var(--nu-blue); }
    .nu-section-rule {
      height: 3px;
      width: 80px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 28px;
      border-radius: 2px;
    }

    /* EXECUTIVE STRIP */
    .nu-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 48px;
      box-shadow: 0 8px 28px rgba(0, 0, 51, 0.18);
    }
    .nu-strip-cell {
      padding: 22px 24px;
      color: var(--nu-white);
      border-right: 1px solid rgba(255,255,255,0.1);
    }
    .nu-strip-cell:last-child { border-right: none; }
    .nu-strip-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .nu-strip-value {
      font-weight: 900;
      font-size: 1.15rem;
      line-height: 1.25;
    }
    .nu-strip-sub {
      font-size: 0.82rem;
      font-weight: 400;
      color: rgba(255,255,255,0.75);
      margin-top: 4px;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #f8faff 0%, #eef3ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 24px 28px;
      border-radius: 6px;
      margin-bottom: 36px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }
    .nu-callout-body { color: var(--nu-dark-text); font-size: 1rem; line-height: 1.7; }

    /* TWO COL */
    .nu-two-col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.07);
      border: 1px solid var(--nu-medium-gray);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.1);
    }
    .nu-card-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.1rem;
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .nu-card-title span { color: var(--nu-dark-text); font-weight: 700; }
    .nu-card-body { font-size: 0.96rem; color: var(--nu-body-text); }

    /* VALUATION TABLE */
    .nu-table-wrap {
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 14px rgba(0,0,0,0.07);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 40px;
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-dark-text) 0%, #2a2a5e 100%);
    }
    .nu-table thead th {
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 16px 18px;
      text-align: left;
    }
    .nu-table tbody td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:hover { background: #fafbff; }
    .nu-table tbody tr.highlight { background: #eef3ff; }
    .nu-table tbody tr.highlight td { font-weight: 700; color: var(--nu-dark-text); }
    .nu-num { text-align: right; font-variant-numeric: tabular-nums; }
    .nu-pos { color: var(--nu-success); font-weight: 700; }
    .nu-neg { color: var(--nu-danger); font-weight: 700; }
    .nu-neutral { color: var(--nu-warn); font-weight: 700; }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 38px;
      margin-bottom: 40px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 10px;
      bottom: 10px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .nu-step {
      position: relative;
      padding-bottom: 28px;
    }
    .nu-step:last-child { padding-bottom: 0; }
    .nu-step::before {
      content: '';
      position: absolute;
      left: -31px;
      top: 6px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px var(--nu-white), 0 0 0 4px rgba(0,0,255,0.15);
    }
    .nu-step.done::before { background: var(--nu-blue); }
    .nu-step-head {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .nu-step-meta {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-step-body {
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }

    /* BADGE */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 14px;
      margin-bottom: 10px;
      margin-right: 10px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
    }
    .nu-badge-cyan {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }

    /* SCENARIO CARDS */
    .nu-scenarios {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }
    .nu-scenario {
      border-radius: 10px;
      padding: 24px;
      border: 2px solid;
      background: var(--nu-white);
      transition: transform 0.2s ease;
    }
    .nu-scenario:hover { transform: translateY(-3px); }
    .nu-scenario-walk { border-color: var(--nu-danger); }
    .nu-scenario-target { border-color: var(--nu-success); box-shadow: 0 6px 20px rgba(10, 143, 60, 0.12); }
    .nu-scenario-stretch { border-color: var(--nu-warn); }
    .nu-scenario-head {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-scenario-target .nu-scenario-head { color: var(--nu-success); }
    .nu-scenario-walk .nu-scenario-head { color: var(--nu-danger); }
    .nu-scenario-stretch .nu-scenario-head { color: var(--nu-warn); }
    .nu-scenario-price {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-variant-numeric: tabular-nums;
    }
    .nu-scenario-ppsf {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-bottom: 16px;
    }
    .nu-scenario-body {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.65;
    }

    /* CHECKLIST */
    .nu-checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 28px 32px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      margin-bottom: 40px;
    }
    .nu-checklist ul {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 10px 0 10px 34px;
      position: relative;
      border-bottom: 1px solid var(--nu-light-gray);
      font-size: 0.96rem;
      line-height: 1.55;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* TALKING POINTS */
    .nu-talk {
      background: linear-gradient(135deg, #fff 0%, #fafbff 100%);
      border-radius: 10px;
      padding: 28px;
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-talk-label {
      font-size: 0.72rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-talk-quote {
      font-family: var(--font-italic);
      font-style: italic;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
      border-left: 4px solid var(--nu-cyan);
      padding-left: 18px;
    }

    /* RISK LIST */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
      margin-bottom: 40px;
    }
    .nu-risk {
      background: var(--nu-white);
      padding: 22px 24px;
      border-radius: 10px;
      border-top: 4px solid var(--nu-warn);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-risk-head {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 6px;
    }
    .nu-risk-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .nu-risk-mitigation {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .nu-risk-mitigation strong { color: var(--nu-success); }

    /* FOOTER */
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
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 22px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.06em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-doc-title { font-size: 1.15rem; }
      .nu-container { padding: 40px 22px; }
      .nu-strip-cell { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
      .nu-table thead { display: none; }
      .nu-table, .nu-table tbody, .nu-table tr, .nu-table td { display: block; width: 100%; }
      .nu-table tbody tr { padding: 12px 0; border-bottom: 1px solid var(--nu-medium-gray); }
      .nu-table tbody td { border: none; padding: 6px 18px; }
      .nu-table tbody td::before { content: attr(data-label) ": "; font-weight: 700; color: var(--nu-blue); }
      .nu-scenario-price { font-size: 1.65rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-card, .nu-scenario, .nu-risk, .nu-talk, .nu-checklist, .nu-table-wrap { box-shadow: none; break-inside: avoid; }
      .nu-timeline { break-inside: avoid; }
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
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-title">Estate Acquisition Strategy</div>
    <div class="nu-doc-sub">4505 Buttewoods &middot; 7,098 sq ft &middot; Prepared 2026-04-22</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- EXECUTIVE STRIP -->
      <section class="nu-strip" aria-label="Deal Snapshot">
        <div class="nu-strip-cell">
          <div class="nu-strip-label">Property</div>
          <div class="nu-strip-value">4505 Buttewoods</div>
          <div class="nu-strip-sub">Estate &middot; 7,098 sq ft</div>
        </div>
        <div class="nu-strip-cell">
          <div class="nu-strip-label">Prepared For</div>
          <div class="nu-strip-value">Aaron C. Norris</div>
          <div class="nu-strip-sub">Founder &amp; CEO</div>
        </div>
        <div class="nu-strip-cell">
          <div class="nu-strip-label">Target Offer</div>
          <div class="nu-strip-value">$900,000</div>
          <div class="nu-strip-sub">~$127 / sq ft opening</div>
        </div>
        <div class="nu-strip-cell">
          <div class="nu-strip-label">Walk-Away Ceiling</div>
          <div class="nu-strip-value">$975,000</div>
          <div class="nu-strip-sub">All-in, pre-due diligence</div>
        </div>
      </section>

      <!-- PURPOSE -->
      <section>
        <h2 class="nu-section-title"><span class="lead">Deal</span> Thesis</h2>
        <div class="nu-section-rule"></div>
        <div class="nu-callout">
          <div class="nu-callout-title">Why this estate, why now</div>
          <div class="nu-callout-body">
            A 7,098 sq ft residence at a competitive per-foot basis gives Aaron a long-hold Birmingham anchor property — appreciation, tax-advantaged capital placement, and a venue that fits the Norris Utilities® brand profile for hosting customers, principals, and strategic partners. The discipline of this page is to negotiate on data, not on attachment, and to walk if the numbers don't clear.
          </div>
        </div>

        <div style="margin-bottom: 14px;">
          <span class="nu-badge nu-badge-cyan">LONG-HOLD CAPITAL</span>
          <span class="nu-badge">BRAND-ALIGNED VENUE</span>
          <span class="nu-badge nu-badge-cyan">DATA-DRIVEN OFFER</span>
          <span class="nu-badge">WALK-IF-NEEDED DISCIPLINE</span>
        </div>
      </section>

      <!-- PROPERTY BRIEF -->
      <section style="margin-top: 48px;">
        <h2 class="nu-section-title"><span class="lead">Property</span> Brief</h2>
        <div class="nu-section-rule"></div>
        <div class="nu-two-col">
          <div class="nu-card">
            <div class="nu-card-title">4505 <span>Buttewoods</span></div>
            <div class="nu-card-body">
              <p><strong>Size:</strong> 7,098 sq ft of finished area.</p>
              <p style="margin-top:10px;"><strong>Posture:</strong> Estate-class residence &mdash; targeting a buy that holds for 10&nbsp;+ years and fits the family's Birmingham footprint.</p>
              <p style="margin-top:10px;"><strong>Use:</strong> Primary residence with optional entertainment/meeting use aligned to Norris Utilities® relationship-building (Samson Rope, Skylift, Bay Shore Systems, utility principals).</p>
            </div>
          </div>
          <div class="nu-card">
            <div class="nu-card-title">What <span>must be verified</span> before offer</div>
            <div class="nu-card-body">
              <ul style="margin:6px 0 0 18px;">
                <li>Recorded deed, legal description, parcel ID &mdash; public records pull.</li>
                <li>Tax-assessed value and trailing three years of tax history.</li>
                <li>HOA / covenants, if any &mdash; dues, assessments, restrictions.</li>
                <li>Structural, roof, HVAC, electrical, plumbing reports.</li>
                <li>Flood / elevation, prior insurance claims (C.L.U.E. report).</li>
                <li>Permit history &mdash; additions, finished basement, pool, outbuildings.</li>
                <li>Clear title, survey, any easements or encroachments.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- VALUATION FRAMEWORK -->
      <section>
        <h2 class="nu-section-title"><span class="lead">Valuation</span> Framework</h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 22px; max-width: 880px;">
          Price is a function of per-square-foot comps, condition adjustments, and carrying cost. The table below translates common Birmingham estate-tier price bands at 7,098 sq ft, so the offer can be anchored to a specific per-foot number &mdash; not a round figure.
        </p>

        <div class="nu-table-wrap">
          <table class="nu-table" aria-label="Per-square-foot valuation bands">
            <thead>
              <tr>
                <th>Per Sq Ft</th>
                <th>Total Price (7,098 sf)</th>
                <th>Positioning</th>
                <th>Use In Negotiation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Per Sq Ft" class="nu-num">$110</td>
                <td data-label="Total Price" class="nu-num">$780,780</td>
                <td data-label="Positioning"><span class="nu-pos">Distressed / condition-adjusted</span></td>
                <td data-label="Use">Only if inspection uncovers material defects.</td>
              </tr>
              <tr class="highlight">
                <td data-label="Per Sq Ft" class="nu-num">$127</td>
                <td data-label="Total Price" class="nu-num">$901,446</td>
                <td data-label="Positioning"><span class="nu-pos">Target opening offer</span></td>
                <td data-label="Use">Rounded presentation: <strong>$900,000</strong>.</td>
              </tr>
              <tr>
                <td data-label="Per Sq Ft" class="nu-num">$137</td>
                <td data-label="Total Price" class="nu-num">$972,426</td>
                <td data-label="Positioning"><span class="nu-neutral">Walk-away ceiling</span></td>
                <td data-label="Use">Rounded presentation: <strong>$975,000</strong>.</td>
              </tr>
              <tr>
                <td data-label="Per Sq Ft" class="nu-num">$150</td>
                <td data-label="Total Price" class="nu-num">$1,064,700</td>
                <td data-label="Positioning"><span class="nu-neg">Above market for this sf</span></td>
                <td data-label="Use">Do not meet without significant upside (acreage, new build, pristine updates).</td>
              </tr>
              <tr>
                <td data-label="Per Sq Ft" class="nu-num">$165</td>
                <td data-label="Total Price" class="nu-num">$1,171,170</td>
                <td data-label="Positioning"><span class="nu-neg">Seller ask zone &mdash; reject</span></td>
                <td data-label="Use">Use comps to demonstrate this is above market.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="nu-callout">
          <div class="nu-callout-title">Anchor your first number</div>
          <div class="nu-callout-body">
            Opening at <strong>$900,000</strong> ($126.80 / sq ft) signals respect for the property while giving room to close at or below the $975,000 ceiling. Never lead with the ceiling. Never negotiate against yourself.
          </div>
        </div>
      </section>

      <!-- SCENARIOS -->
      <section style="margin-top: 48px;">
        <h2 class="nu-section-title"><span class="lead">Three-Scenario</span> Price Ladder</h2>
        <div class="nu-section-rule"></div>
        <div class="nu-scenarios">
          <div class="nu-scenario nu-scenario-target">
            <div class="nu-scenario-head">Open &mdash; Target</div>
            <div class="nu-scenario-price">$900,000</div>
            <div class="nu-scenario-ppsf">~$127 / sq ft &middot; opening position</div>
            <div class="nu-scenario-body">
              Firm, data-backed first offer. Cash or strong financing posture. Earnest money proportionate. 30-day close if inspection clears. This is the preferred outcome.
            </div>
          </div>
          <div class="nu-scenario nu-scenario-stretch">
            <div class="nu-scenario-head">Move &mdash; Best / Final</div>
            <div class="nu-scenario-price">$950,000</div>
            <div class="nu-scenario-ppsf">~$134 / sq ft &middot; stretch position</div>
            <div class="nu-scenario-body">
              Reached only if listing is clean, inspection is green, and seller meets on terms (seller-paid closing costs, repair credits, or flexible close date). Do not volunteer this number.
            </div>
          </div>
          <div class="nu-scenario nu-scenario-walk">
            <div class="nu-scenario-head">Walk &mdash; Ceiling</div>
            <div class="nu-scenario-price">$975,000</div>
            <div class="nu-scenario-ppsf">~$137 / sq ft &middot; hard stop</div>
            <div class="nu-scenario-body">
              Absolute maximum pre-inspection, pre-credits. Any dollar above $975,000 requires Aaron's explicit re-authorization &mdash; no exceptions, no drift, no "only $10K more."
            </div>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section>
        <h2 class="nu-section-title"><span class="lead">Negotiation</span> Timeline</h2>
        <div class="nu-section-rule"></div>
        <div class="nu-timeline">
          <div class="nu-step done">
            <div class="nu-step-meta">Step 1 &middot; Pre-Offer</div>
            <div class="nu-step-head">Assemble facts &mdash; no offers yet</div>
            <div class="nu-step-body">Pull recorded deed, tax history, and last three sold comps within one mile at 6,000&ndash;8,000 sq ft. Confirm HOA/covenants. Obtain pre-approval letter or proof-of-funds. <strong>Target: 48 hours.</strong></div>
          </div>
          <div class="nu-step">
            <div class="nu-step-meta">Step 2 &middot; Relationship Contact</div>
            <div class="nu-step-head">Open dialogue with seller/listing agent</div>
            <div class="nu-step-body">Warm introduction. Convey serious interest and buyer credibility (cash-strong, Birmingham-based owner/operator). Ask the questions &mdash; don't pitch the price yet.</div>
          </div>
          <div class="nu-step">
            <div class="nu-step-meta">Step 3 &middot; Written Offer</div>
            <div class="nu-step-head">Deliver $900,000 offer with full package</div>
            <div class="nu-step-body">Signed offer, proof-of-funds / pre-approval, earnest money commitment. Contingencies: inspection, appraisal, clear title. Close timeline: 30&ndash;45 days.</div>
          </div>
          <div class="nu-step">
            <div class="nu-step-meta">Step 4 &middot; Counter / Counter</div>
            <div class="nu-step-head">Respond in data, not emotion</div>
            <div class="nu-step-body">If countered, respond with: per-sq-ft justification, comp list, any condition notes from pre-inspection. Move in $15K&ndash;$25K increments. Hold the $975,000 line.</div>
          </div>
          <div class="nu-step">
            <div class="nu-step-meta">Step 5 &middot; Under Contract</div>
            <div class="nu-step-head">Execute inspection &amp; title</div>
            <div class="nu-step-body">Licensed inspector + specialty inspectors (roof, HVAC, pool if applicable). Title order, survey, insurance quote. Renegotiate on verified defects, not opinion.</div>
          </div>
          <div class="nu-step">
            <div class="nu-step-meta">Step 6 &middot; Close or Walk</div>
            <div class="nu-step-head">Close cleanly, or walk with earnest money protected</div>
            <div class="nu-step-body">If terms hold and inspection is acceptable &mdash; close on schedule. If anything material surfaces and can't be resolved inside the $975,000 ceiling &mdash; terminate in writing, recover earnest money, thank the seller.</div>
          </div>
        </div>
      </section>

      <!-- TALKING POINTS -->
      <section>
        <h2 class="nu-section-title"><span class="lead">Opening</span> Talking Points</h2>
        <div class="nu-section-rule"></div>

        <div class="nu-talk">
          <div class="nu-talk-label">Opening Positioning (to seller / agent)</div>
          <div class="nu-talk-quote">
            "I'm a Birmingham owner-operator, third-generation in my trade. I'm a serious buyer, not a speculator &mdash; this would be a long-hold family home. I've run the per-foot math against recent comps and I'd like to write a clean, data-backed offer on 4505 Buttewoods."
          </div>
        </div>

        <div class="nu-talk">
          <div class="nu-talk-label">Anchoring the Opening Price</div>
          <div class="nu-talk-quote">
            "At 7,098 square feet, comparable sales in this submarket support a per-foot basis near $127. That puts my opening at $900,000. It's not a low-ball &mdash; it's what the comps say. I'm prepared to move on condition, terms, or timing, but the number has to stand on the data."
          </div>
        </div>

        <div class="nu-talk">
          <div class="nu-talk-label">Responding to an Above-Ask Counter</div>
          <div class="nu-talk-quote">
            "I hear where you are. My ceiling moves when the property gives me a reason to move &mdash; acreage, condition, or terms. Help me understand what I'm missing in the comps, and I'll come back with a revised number."
          </div>
        </div>

        <div class="nu-talk">
          <div class="nu-talk-label">Preparing the Walk</div>
          <div class="nu-talk-quote">
            "I appreciate your position and I respect the property. I've shown you a strong, cash-capable offer backed by comps. If we can't find each other inside my ceiling, I'll have to step back &mdash; but I'd rather close with you than anyone else. Here's my number if anything changes."
          </div>
        </div>
      </section>

      <!-- RISKS -->
      <section style="margin-top: 48px;">
        <h2 class="nu-section-title"><span class="lead">Risk</span> Register &amp; Mitigations</h2>
        <div class="nu-section-rule"></div>
        <div class="nu-risk-grid">
          <div class="nu-risk">
            <div class="nu-risk-head">Seller holds firm above $975,000</div>
            <div class="nu-risk-body">Anchor sentiment on ask price; seller unwilling to move below the ceiling even with comps on the table.</div>
            <div class="nu-risk-mitigation"><strong>Mitigation:</strong> Walk, leave the number on the table, circle back in 45&ndash;60 days if the listing ages. Do not chase.</div>
          </div>
          <div class="nu-risk">
            <div class="nu-risk-head">Major inspection issue surfaces</div>
            <div class="nu-risk-body">Roof, foundation, or mechanicals uncovered during due diligence push repair cost above budget.</div>
            <div class="nu-risk-mitigation"><strong>Mitigation:</strong> Require licensed repair estimates. Seek price credit or repair credit equal to 100% of documented cost, not "half-and-half."</div>
          </div>
          <div class="nu-risk">
            <div class="nu-risk-head">Appraisal comes in below contract</div>
            <div class="nu-risk-body">Financed portion of purchase capped by appraised value; shortfall requires cash, price drop, or walk.</div>
            <div class="nu-risk-mitigation"><strong>Mitigation:</strong> Appraisal contingency in the offer. Renegotiate to appraised value or terminate.</div>
          </div>
          <div class="nu-risk">
            <div class="nu-risk-head">Title / survey defect</div>
            <div class="nu-risk-body">Encroachment, boundary dispute, unreleased lien, or easement that impairs use or resale.</div>
            <div class="nu-risk-mitigation"><strong>Mitigation:</strong> Title contingency. Require clear title and full owner's title insurance at close.</div>
          </div>
          <div class="nu-risk">
            <div class="nu-risk-head">Competing buyer enters</div>
            <div class="nu-risk-body">Back-up offer or bidding pressure pushes the listing above the ceiling.</div>
            <div class="nu-risk-mitigation"><strong>Mitigation:</strong> Tight, credible written offer with proof-of-funds and a short decision window. Do not chase past $975,000.</div>
          </div>
          <div class="nu-risk">
            <div class="nu-risk-head">Emotional drift</div>
            <div class="nu-risk-body">Buyer gets attached; pays above ceiling "just to get it done."</div>
            <div class="nu-risk-mitigation"><strong>Mitigation:</strong> This page is the rule. Any move above $975,000 requires Aaron to write it down, re-sign, and date it.</div>
          </div>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section>
        <h2 class="nu-section-title"><span class="lead">Pre-Offer</span> Checklist</h2>
        <div class="nu-section-rule"></div>
        <div class="nu-checklist">
          <ul>
            <li><strong>Proof of funds or pre-approval</strong> &mdash; letter in hand, dated within 30 days.</li>
            <li><strong>Recorded deed &amp; legal description</strong> &mdash; pulled from county records.</li>
            <li><strong>Tax history</strong> &mdash; prior three years of assessments and paid taxes.</li>
            <li><strong>Comp set</strong> &mdash; three to five closed sales within one mile, 6,000&ndash;8,000 sq ft, last 12 months.</li>
            <li><strong>HOA / covenants</strong> &mdash; dues, restrictions, pending special assessments.</li>
            <li><strong>C.L.U.E. / insurance history</strong> &mdash; prior claims on the property.</li>
            <li><strong>Flood / elevation certificate</strong> &mdash; FEMA map pull.</li>
            <li><strong>Permit history</strong> &mdash; additions, basement, pool, outbuildings all permitted and closed.</li>
            <li><strong>Attorney on standby</strong> &mdash; for contract review and closing.</li>
            <li><strong>Inspector list</strong> &mdash; general, roof, HVAC, and any specialty (pool, foundation).</li>
            <li><strong>Insurance quote</strong> &mdash; bindable quote in advance so premium isn't a surprise.</li>
            <li><strong>Written walk-away ceiling</strong> &mdash; $975,000 &mdash; signed and dated by Aaron before the first offer.</li>
          </ul>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section>
        <h2 class="nu-section-title"><span class="lead">Next</span> Actions</h2>
        <div class="nu-section-rule"></div>
        <div class="nu-two-col">
          <div class="nu-card">
            <div class="nu-card-title">This <span>Week</span></div>
            <div class="nu-card-body">
              <ol style="margin-left: 18px;">
                <li>Pull recorded deed, tax history, and parcel data for 4505 Buttewoods.</li>
                <li>Build the three-to-five comp set and confirm $127 / sq ft anchor.</li>
                <li>Secure proof-of-funds or pre-approval letter dated within 30 days.</li>
                <li>Engage real estate attorney on standby for contract review.</li>
              </ol>
            </div>
          </div>
          <div class="nu-card">
            <div class="nu-card-title">Before <span>First Offer</span></div>
            <div class="nu-card-body">
              <ol style="margin-left: 18px;">
                <li>Sign and date the $975,000 walk-away ceiling.</li>
                <li>Confirm inspector short list &amp; insurance quote bindable.</li>
                <li>Warm-contact the listing agent &mdash; questions only, no price.</li>
                <li>Deliver a clean, written $900,000 offer with the full proof package.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Internal Negotiation Brief &middot; 4505 Buttewoods &middot; Prepared 2026-04-22</div>
  </footer>

</body>
</html>