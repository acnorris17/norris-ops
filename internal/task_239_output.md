<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Acquisition Strategy — 4505 Buttewoods Estate — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-red: #C0392B;
      --nu-green: #27AE60;
      --nu-amber: #E67E22;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
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
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    .nu-doc-label {
      display: inline-block;
      margin-top: 20px;
      padding: 8px 20px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.25em;
      color: var(--nu-white);
      text-transform: uppercase;
    }

    /* CHEVRON */
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-title-block h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .nu-title-block h1 .highlight {
      color: var(--nu-blue);
    }
    .nu-title-block .subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 800px;
      margin: 0 auto;
    }
    .nu-meta-row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px 24px;
      margin-top: 20px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .nu-meta-row span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .nu-meta-row strong {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
      display: flex;
      align-items: baseline;
      gap: 12px;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-title .num {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-white);
      background: var(--nu-blue);
      padding: 4px 10px;
      border-radius: 3px;
      letter-spacing: 0.1em;
    }

    /* EXECUTIVE SUMMARY */
    .nu-exec-summary {
      background: linear-gradient(135deg, #f7f9ff 0%, #eef3ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 28px 32px;
      border-radius: 4px;
      margin-bottom: 40px;
    }
    .nu-exec-summary h3 {
      font-family: var(--font-primary);
      font-weight: 900;
      color: var(--nu-navy);
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 12px;
    }
    .nu-exec-summary p {
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-exec-summary p:last-child {
      margin-bottom: 0;
    }

    /* PROPERTY FACTS GRID */
    .nu-facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 8px;
    }
    .nu-fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-fact-card .label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }
    .nu-fact-card .value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-fact-card .sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* VALUATION TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
      background: var(--nu-white);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      border-radius: 4px;
      overflow: hidden;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-table th.num, .nu-table td.num {
      text-align: right;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-table tbody tr:hover {
      background: var(--nu-light-gray);
    }
    .nu-table tr.highlight-row {
      background: #fff8e6;
      font-weight: 700;
    }
    .nu-table tr.highlight-row:hover {
      background: #fff3d1;
    }
    .nu-table tr.target-row {
      background: #e8f4ec;
      font-weight: 900;
      color: var(--nu-green);
    }
    .nu-table tr.target-row td {
      border-bottom: 2px solid var(--nu-green);
    }

    /* STRATEGY LADDER */
    .nu-ladder {
      display: grid;
      gap: 14px;
    }
    .nu-ladder-step {
      display: grid;
      grid-template-columns: 60px 1fr;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    }
    .nu-ladder-num {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
    }
    .nu-ladder-body {
      padding: 16px 20px;
    }
    .nu-ladder-body h4 {
      font-family: var(--font-primary);
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .nu-ladder-body p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      margin-bottom: 4px;
    }
    .nu-ladder-body .price {
      font-weight: 900;
      color: var(--nu-blue);
    }

    /* TERMS LIST */
    .nu-terms {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 14px;
    }
    .nu-term {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 16px 18px;
      border-radius: 4px;
    }
    .nu-term .term-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 6px;
    }
    .nu-term .term-value {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      font-weight: 400;
    }

    /* RISK MATRIX */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 14px;
    }
    .nu-risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 18px 20px;
      border-radius: 4px;
      border-top: 4px solid var(--nu-amber);
    }
    .nu-risk-card.risk-high { border-top-color: var(--nu-red); }
    .nu-risk-card.risk-med { border-top-color: var(--nu-amber); }
    .nu-risk-card.risk-low { border-top-color: var(--nu-green); }
    .nu-risk-card h5 {
      font-family: var(--font-primary);
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nu-risk-pill {
      font-size: 0.68rem;
      font-weight: 700;
      padding: 3px 9px;
      border-radius: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .risk-high .nu-risk-pill { background: #fdecea; color: var(--nu-red); }
    .risk-med .nu-risk-pill { background: #fdf0e1; color: var(--nu-amber); }
    .risk-low .nu-risk-pill { background: #e7f5ec; color: var(--nu-green); }
    .nu-risk-card p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .nu-risk-card .mitigation {
      font-size: 0.82rem;
      color: var(--nu-navy);
      font-weight: 700;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px dashed var(--nu-medium-gray);
    }

    /* ACTION CHECKLIST */
    .nu-checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      overflow: hidden;
    }
    .nu-check-row {
      display: grid;
      grid-template-columns: 40px 1fr 160px 140px;
      align-items: center;
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      gap: 12px;
    }
    .nu-check-row:last-child { border-bottom: none; }
    .nu-check-row:nth-child(even) { background: var(--nu-light-gray); }
    .nu-check-box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }
    .nu-check-task {
      font-size: 0.92rem;
      color: var(--nu-dark-text);
      font-weight: 400;
    }
    .nu-check-task strong {
      font-weight: 900;
      color: var(--nu-navy);
    }
    .nu-check-owner {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      font-weight: 700;
    }
    .nu-check-due {
      font-size: 0.82rem;
      color: var(--nu-blue);
      font-weight: 700;
      text-align: right;
    }

    /* SCRIPT BLOCK */
    .nu-script {
      background: var(--nu-dark-text);
      color: var(--nu-light-gray);
      padding: 26px 30px;
      border-radius: 6px;
      font-family: 'Courier New', monospace;
      font-size: 0.92rem;
      line-height: 1.75;
      border-left: 5px solid var(--nu-cyan);
    }
    .nu-script .speaker {
      color: var(--nu-cyan);
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 0.75rem;
      display: block;
      margin-top: 14px;
      margin-bottom: 4px;
    }
    .nu-script .speaker:first-child { margin-top: 0; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 42px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-disclaimer {
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.75rem;
      color: rgba(255,255,255,0.6);
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 30px 20px 40px; }
      .nu-title-block h1 { font-size: 1.6rem; }
      .nu-section-title { font-size: 1.2rem; flex-wrap: wrap; }
      .nu-check-row {
        grid-template-columns: 30px 1fr;
        gap: 8px;
      }
      .nu-check-owner, .nu-check-due {
        grid-column: 2;
        text-align: left;
      }
      .nu-ladder-step { grid-template-columns: 48px 1fr; }
      .nu-ladder-num { font-size: 1.3rem; }
      .nu-table { font-size: 0.85rem; }
      .nu-table th, .nu-table td { padding: 10px 8px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-section { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Confidential Acquisition Strategy</div>
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

      <!-- TITLE -->
      <div class="nu-title-block">
        <h1><span class="highlight">Acquisition</span> Strategy — 4505 Buttewoods Estate</h1>
        <p class="subtitle">Negotiation playbook for a 7,098 sq ft private estate. Prepared for Aaron C. Norris, Founder &amp; CEO, to guide offer structure, counter strategy, and walk-away thresholds.</p>
        <div class="nu-meta-row">
          <span><strong>Property:</strong> 4505 Buttewoods</span>
          <span><strong>Size:</strong> 7,098 sq ft</span>
          <span><strong>Prepared:</strong> April 22, 2026</span>
          <span><strong>Status:</strong> Pre-Offer / Intake</span>
          <span><strong>Classification:</strong> Confidential</span>
        </div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <div class="nu-exec-summary">
        <h3>Executive Summary</h3>
        <p>This document frames the negotiation approach for 4505 Buttewoods, a 7,098 square-foot estate. The goal is to secure the property at or below fair market value with clean terms, favorable financing, and contingencies that protect Norris Utilities®, LLC against undisclosed defects or title issues.</p>
        <p>Approach is three-step: confirm comparable values before writing, open with a disciplined initial offer that leaves room for concessions, and reserve a defined walk-away ceiling so emotion never drives the final number. Every commitment — price, financing, inspection rights, closing date — stays in writing and nothing is conceded verbally.</p>
      </div>

      <!-- SECTION 1: PROPERTY FACTS -->
      <section class="nu-section">
        <div class="nu-section-title">
          <span class="num">01</span>
          <span class="first">Property</span>
          <span class="rest">Facts on Record</span>
        </div>
        <div class="nu-facts-grid">
          <div class="nu-fact-card">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <div class="sub">Verify full street &amp; parcel ID pre-offer</div>
          </div>
          <div class="nu-fact-card">
            <div class="label">Total Living Area</div>
            <div class="value">7,098 sq ft</div>
            <div class="sub">Confirm against tax assessor record</div>
          </div>
          <div class="nu-fact-card">
            <div class="label">Property Class</div>
            <div class="value">Estate / Single-Family</div>
            <div class="sub">Large lot, likely custom construction</div>
          </div>
          <div class="nu-fact-card">
            <div class="label">Intended Use</div>
            <div class="value">Personal / Legacy</div>
            <div class="sub">Long-hold acquisition</div>
          </div>
          <div class="nu-fact-card">
            <div class="label">Record Owner</div>
            <div class="value">Pull from deed</div>
            <div class="sub">Trust, LLC, or individual — affects talk track</div>
          </div>
          <div class="nu-fact-card">
            <div class="label">Listing Status</div>
            <div class="value">Confirm on-market vs. off-market</div>
            <div class="sub">Drives buyer agent vs. direct approach</div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: VALUATION FRAMEWORK -->
      <section class="nu-section">
        <div class="nu-section-title">
          <span class="num">02</span>
          <span class="first">Valuation</span>
          <span class="rest">Framework &amp; Offer Bands</span>
        </div>
        <p style="margin-bottom: 16px; color: var(--nu-body-text);">Bands below are placeholders until three live comparables within two miles and the last 180 days are pulled. Formula: Comp Avg $/sq ft × 7,098 sq ft, with adjustments for condition, lot size, and pool/outbuildings.</p>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Offer Band</th>
              <th>Posture</th>
              <th class="num">$ / sq ft</th>
              <th class="num">Implied Value (7,098 sf)</th>
              <th>Use When</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opening Offer</strong></td>
              <td>Anchored low, defensible</td>
              <td class="num">Comp avg × 0.88</td>
              <td class="num">Per comp pull</td>
              <td>First written offer</td>
            </tr>
            <tr class="highlight-row">
              <td><strong>Target</strong></td>
              <td>Deal we want</td>
              <td class="num">Comp avg × 0.94</td>
              <td class="num">Per comp pull</td>
              <td>After one counter cycle</td>
            </tr>
            <tr>
              <td><strong>Ceiling</strong></td>
              <td>Maximum authorized</td>
              <td class="num">Comp avg × 1.02</td>
              <td class="num">Per comp pull</td>
              <td>Only if seller concedes on closing costs / repairs</td>
            </tr>
            <tr class="target-row">
              <td><strong>Walk-Away</strong></td>
              <td>Firm no</td>
              <td class="num">Above × 1.02</td>
              <td class="num">Do not cross</td>
              <td>Walk without counter; document in file</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size: 0.82rem; color: var(--nu-body-text); font-style: italic;">Every band remains advisory until a certified appraisal and three verified comps are in hand. No offer goes out before that verification.</p>
      </section>

      <!-- SECTION 3: NEGOTIATION LADDER -->
      <section class="nu-section">
        <div class="nu-section-title">
          <span class="num">03</span>
          <span class="first">Negotiation</span>
          <span class="rest">Step Ladder</span>
        </div>
        <div class="nu-ladder">
          <div class="nu-ladder-step">
            <div class="nu-ladder-num">1</div>
            <div class="nu-ladder-body">
              <h4>Intake &amp; Intelligence</h4>
              <p>Pull deed, tax record, prior listing history, mortgage balance (if public), liens, easements, flood zone. Identify motivation: estate sale, relocation, downsize, divorce, or investor.</p>
              <p class="price">Cost: $0 — courthouse &amp; public records</p>
            </div>
          </div>
          <div class="nu-ladder-step">
            <div class="nu-ladder-num">2</div>
            <div class="nu-ladder-body">
              <h4>Comp Pull &amp; Walk-Through</h4>
              <p>Three comps within 2 miles, closed in the last 180 days, within ±20% square footage. Schedule 90-minute in-person walk-through. Photograph every mechanical, roof access, and foundation line.</p>
              <p class="price">Cost: $0–$450 (licensed inspector pre-walk optional)</p>
            </div>
          </div>
          <div class="nu-ladder-step">
            <div class="nu-ladder-num">3</div>
            <div class="nu-ladder-body">
              <h4>Opening Written Offer</h4>
              <p>Anchored below comp average. Escrow deposit modest but credible. 10-day inspection period. 30-day financing contingency. Closing 45 days. Every condition in writing.</p>
              <p class="price">Opening: Comp Avg × 0.88 per sq ft</p>
            </div>
          </div>
          <div class="nu-ladder-step">
            <div class="nu-ladder-num">4</div>
            <div class="nu-ladder-body">
              <h4>First Counter Cycle</h4>
              <p>Expect counter at or above list. Move up in measured increments — no more than 40% of the gap in any one move. Trade price concessions for term concessions (closing cost credits, appliance inclusion, survey paid).</p>
              <p class="price">Target: Comp Avg × 0.94 per sq ft</p>
            </div>
          </div>
          <div class="nu-ladder-step">
            <div class="nu-ladder-num">5</div>
            <div class="nu-ladder-body">
              <h4>Inspection Re-Trade</h4>
              <p>Full inspection triggers a second negotiation. Every documented defect with a licensed contractor quote becomes a credit request or price reduction. Do not accept cosmetic promises in lieu of dollars.</p>
              <p class="price">Typical re-trade: 1%–3% of purchase price</p>
            </div>
          </div>
          <div class="nu-ladder-step">
            <div class="nu-ladder-num">6</div>
            <div class="nu-ladder-body">
              <h4>Close or Walk</h4>
              <p>Final walk-through 24 hours before closing. If any material change, stop the clock and re-trade. Sign only when title is clean, insurance is bound, and wire instructions are verified by phone — never by email alone.</p>
              <p class="price">Ceiling: Comp Avg × 1.02 per sq ft — not one dollar above</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: TERM SHEET -->
      <section class="nu-section">
        <div class="nu-section-title">
          <span class="num">04</span>
          <span class="first">Proposed</span>
          <span class="rest">Term Sheet</span>
        </div>
        <div class="nu-terms">
          <div class="nu-term">
            <div class="term-label">Buyer</div>
            <div class="term-value">Aaron C. Norris or Norris family entity to be designated prior to closing</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Subject Property</div>
            <div class="term-value">4505 Buttewoods — 7,098 sq ft estate</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Earnest Money</div>
            <div class="term-value">1% of purchase price, refundable during inspection period</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Inspection Period</div>
            <div class="term-value">10 business days from acceptance</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Financing Contingency</div>
            <div class="term-value">30 days, subject to appraisal at or above purchase price</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Closing Date</div>
            <div class="term-value">45 days from acceptance; extension by mutual written consent only</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Title &amp; Survey</div>
            <div class="term-value">Title insurance at seller expense; survey at buyer expense; all exceptions approved in writing</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Fixtures &amp; Personal Property</div>
            <div class="term-value">Itemized schedule attached; nothing conveyed without written inclusion</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Possession</div>
            <div class="term-value">At closing, keys and garage/alarm codes delivered in person</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Right of Final Walk-Through</div>
            <div class="term-value">Within 24 hours of closing, mandatory and non-waivable</div>
          </div>
        </div>
      </section>

      <!-- SECTION 5: RISKS -->
      <section class="nu-section">
        <div class="nu-section-title">
          <span class="num">05</span>
          <span class="first">Risk</span>
          <span class="rest">Register &amp; Mitigation</span>
        </div>
        <div class="nu-risk-grid">
          <div class="nu-risk-card risk-high">
            <h5>Overpaying <span class="nu-risk-pill">High</span></h5>
            <p>Large custom estates carry emotional premiums that distort value. A 7,098 sq ft home can price-per-square-foot lower than smaller comps — adjust models accordingly.</p>
            <div class="mitigation">Mitigation: Independent appraisal before final counter; hard walk-away discipline.</div>
          </div>
          <div class="nu-risk-card risk-high">
            <h5>Hidden Defects <span class="nu-risk-pill">High</span></h5>
            <p>Roof, foundation, HVAC on a 7,000+ sq ft home can each exceed $40,000. Concealed moisture, pest, or structural issues are common in older estates.</p>
            <div class="mitigation">Mitigation: Separate specialist inspections — roof, foundation, HVAC, sewer scope, termite.</div>
          </div>
          <div class="nu-risk-card risk-med">
            <h5>Title &amp; Easement Issues <span class="nu-risk-pill">Medium</span></h5>
            <p>Estates often have decades of amendments: utility easements, deed restrictions, unrecorded shared-driveway arrangements.</p>
            <div class="mitigation">Mitigation: 50-year title abstract; attorney review of every exception before closing.</div>
          </div>
          <div class="nu-risk-card risk-med">
            <h5>Carrying Cost Shock <span class="nu-risk-pill">Medium</span></h5>
            <p>Property tax, insurance, HOA, utilities on a home this size often run 2–3× a typical residence. Budget surprises can erode the financial case.</p>
            <div class="mitigation">Mitigation: Pull three years of tax bills and utility history before offer.</div>
          </div>
          <div class="nu-risk-card risk-med">
            <h5>Seller Emotional Anchor <span class="nu-risk-pill">Medium</span></h5>
            <p>Long-tenured owners anchor on original construction cost or last refinance appraisal, not current market.</p>
            <div class="mitigation">Mitigation: Deliver comps in writing with the offer; let the data do the talking, not the messenger.</div>
          </div>
          <div class="nu-risk-card risk-low">
            <h5>Financing Delay <span class="nu-risk-pill">Low</span></h5>
            <p>Jumbo loans on estates can extend appraisal and underwriting timelines.</p>
            <div class="mitigation">Mitigation: Pre-underwriting with Renasant Bank (Patrick Lavette) before offer is signed.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 6: OPENING SCRIPT -->
      <section class="nu-section">
        <div class="nu-section-title">
          <span class="num">06</span>
          <span class="first">Opening</span>
          <span class="rest">Conversation Script</span>
        </div>
        <div class="nu-script">
          <span class="speaker">Aaron</span>
          Thanks for taking the time. I want to be straightforward with you. I have real interest in 4505 Buttewoods, and I'd rather build this conversation on respect than on posturing.
          <span class="speaker">Aaron</span>
          I've done my homework. I've pulled three comparable sales within two miles over the last six months, and I've had the property walked by someone I trust. I know what I have to offer to make the math work for my family, and I know what I'd need to walk away from.
          <span class="speaker">Aaron</span>
          Here's what I can do. I'm prepared to submit a written offer today at a price backed by those comps, with a meaningful earnest deposit, a clean 10-day inspection, and a 45-day close. I'll pay for my own survey and accept the property as you've shown it, with standard inspection rights.
          <span class="speaker">Aaron</span>
          I'm not going to waste your time negotiating a number I can't stand behind. Whatever we land on, I'll honor it. What I'd ask in return is the same — once we agree, we agree, and we don't re-open the price after inspection unless something material surfaces.
          <span class="speaker">Aaron</span>
          Before we talk numbers, help me understand one thing: what's the single most important outcome you need from this sale? Certainty, speed, top dollar, or a clean walk-away from the house itself? If I know that, I can shape an offer that actually serves you.
        </div>
      </section>

      <!-- SECTION 7: ACTION CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-title">
          <span class="num">07</span>
          <span class="first">Action</span>
          <span class="rest">Checklist — 14-Day Window</span>
        </div>
        <div class="nu-checklist">
          <div class="nu-check-row">
            <div class="nu-check-box"></div>
            <div class="nu-check-task"><strong>1.</strong> Pull current deed, tax record, and prior listing history for 4505 Buttewoods</div>
            <div class="nu-check-owner">Aaron</div>
            <div class="nu-check-due">Day 1</div>
          </div>
          <div class="nu-check-row">
            <div class="nu-check-box"></div>
            <div class="nu-check-task"><strong>2.</strong> Confirm record owner type — individual, trust, or LLC — to shape talk track</div>
            <div class="nu-check-owner">Aaron</div>
            <div class="nu-check-due">Day 1</div>
          </div>
          <div class="nu-check-row">
            <div class="nu-check-box"></div>
            <div class="nu-check-task"><strong>3.</strong> Pull three closed comps within 2 miles / 180 days / ±20% sq ft</div>
            <div class="nu-check-owner">Aaron</div>
            <div class="nu-check-due">Day 3</div>
          </div>
          <div class="nu-check-row">
            <div class="nu-check-box"></div>
            <div class="nu-check-task"><strong>4.</strong> Contact Patrick Lavette at Renasant Bank for jumbo pre-underwriting letter</div>
            <div class="nu-check-owner">Aaron</div>
            <div class="nu-check-due">Day 3</div>
          </div>
          <div class="nu-check-row">
            <div class="nu-check-box"></div>
            <div class="nu-check-task"><strong>5.</strong> Schedule in-person walk-through with listing agent or owner</div>
            <div class="nu-check-owner">Aaron</div>
            <div class="nu-check-due">Day 5</div>
          </div>
          <div class="nu-check-row">
            <div class="nu-check-box"></div>
            <div class="nu-check-task"><strong>6.</strong> Book independent pre-offer inspection (roof, foundation, HVAC, sewer scope)</div>
            <div class="nu-check-owner">Aaron</div>
            <div class="nu-check-due">Day 7</div>
          </div>
          <div class="nu-check-row">
            <div class="nu-check-box"></div>
            <div class="nu-check-task"><strong>7.</strong> Real estate attorney review of draft purchase contract &amp; title strategy</div>
            <div class="nu-check-owner">Aaron / Counsel</div>
            <div class="nu-check-due">Day 9</div>
          </div>
          <div class="nu-check-row">
            <div class="nu-check-box"></div>
            <div class="nu-check-task"><strong>8.</strong> Finalize opening offer, target, ceiling, and walk-away numbers in writing</div>
            <div class="nu-check-owner">Aaron</div>
            <div class="nu-check-due">Day 10</div>
          </div>
          <div class="nu-check-row">
            <div class="nu-check-box"></div>
            <div class="nu-check-task"><strong>9.</strong> Submit written offer with earnest money and pre-underwriting letter attached</div>
            <div class="nu-check-owner">Aaron</div>
            <div class="nu-check-due">Day 12</div>
          </div>
          <div class="nu-check-row">
            <div class="nu-check-box"></div>
            <div class="nu-check-task"><strong>10.</strong> Log every counter, verbal exchange, and seller concession in the deal file</div>
            <div class="nu-check-owner">Aaron</div>
            <div class="nu-check-due">Ongoing</div>
          </div>
        </div>
      </section>

      <!-- SECTION 8: PRINCIPLES -->
      <section class="nu-section">
        <div class="nu-section-title">
          <span class="num">08</span>
          <span class="first">Negotiation</span>
          <span class="rest">Principles — Non-Negotiable</span>
        </div>
        <div class="nu-terms">
          <div class="nu-term">
            <div class="term-label">Principle 1</div>
            <div class="term-value">Nothing verbal becomes binding. Every commitment goes in writing, initialed, and dated.</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Principle 2</div>
            <div class="term-value">The walk-away number exists before the first offer is submitted — not discovered during the fight.</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Principle 3</div>
            <div class="term-value">Move in measured increments. No more than 40% of the remaining gap in any single counter.</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Principle 4</div>
            <div class="term-value">Trade across categories. Price, terms, fixtures, closing costs, possession date — all currency, all tradeable.</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Principle 5</div>
            <div class="term-value">Silence is a tool. After every offer, stop talking. Let the counter come.</div>
          </div>
          <div class="nu-term">
            <div class="term-label">Principle 6</div>
            <div class="term-value">Respect the seller as a person. Pressure the price, never the human across the table.</div>
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
    <div class="nu-footer-disclaimer">
      Confidential Acquisition Strategy — prepared for internal use by Aaron C. Norris. This document is not an offer to purchase, a commitment to finance, or legal advice. All price bands are placeholders pending independent appraisal and comparable sales verification. Final offer terms must be reviewed by qualified legal and financial counsel before submission.
    </div>
  </footer>

</body>
</html>