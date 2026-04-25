<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Negotiation — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-warning: #C75A1F;
      --nu-danger: #B22234;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 65%);
      opacity: 0.7;
      pointer-events: none;
      z-index: 0;
    }
    .nu-content-wrap {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOCUMENT META */
    .nu-doc-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      padding: 16px 24px;
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .nu-doc-meta strong { color: var(--nu-navy); font-weight: 900; letter-spacing: 0.04em; text-transform: uppercase; font-size: 0.78rem; }
    .nu-doc-meta-item span { display: block; color: var(--nu-dark-text); font-weight: 700; margin-top: 2px; }

    /* HERO BLOCK */
    .nu-hero-block {
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 36px 40px;
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
    }
    .nu-hero-block::after {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 6px; height: 100%;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .nu-eyebrow {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-hero-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 14px;
    }
    .nu-hero-title span { color: var(--nu-blue); }
    .nu-hero-summary {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 780px;
    }

    /* SECTION TITLES */
    .nu-section { margin-bottom: 48px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
    }

    /* PROPERTY GRID */
    .nu-prop-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .nu-prop-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
      transition: all 0.2s ease;
    }
    .nu-prop-cell:hover {
      border-color: var(--nu-blue);
      box-shadow: 0 4px 14px rgba(0,0,255,0.08);
      transform: translateY(-2px);
    }
    .nu-prop-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-prop-value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.35;
    }
    .nu-prop-sub {
      font-size: 0.82rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* OBJECTIVES — chevron badges */
    .nu-badge-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 28px 16px 20px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.01em;
    }
    .nu-badge-num {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      margin-right: 16px;
    }

    /* TWO-COLUMN INFO */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 768px) { .nu-two-col { grid-template-columns: 1fr; } }
    .nu-info-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-info-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-light-gray);
    }
    .nu-info-card ul { list-style: none; padding: 0; }
    .nu-info-card li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-body-text);
      border-bottom: 1px solid var(--nu-light-gray);
    }
    .nu-info-card li:last-child { border-bottom: none; }
    .nu-info-card li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
    }
    .nu-info-card li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* VALUATION TABLE */
    .nu-table-wrap {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-table { width: 100%; border-collapse: collapse; }
    .nu-table thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #1a1a4e 100%);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 14px 18px;
      text-align: left;
    }
    .nu-table tbody td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-light-gray);
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }
    .nu-table tbody tr:nth-child(even) { background: #fbfbfd; }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table .num { font-weight: 700; color: var(--nu-dark-text); text-align: right; font-variant-numeric: tabular-nums; }
    .nu-table tr.highlight td { background: rgba(6, 208, 255, 0.08); font-weight: 700; color: var(--nu-navy); }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 36px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      top: 8px; bottom: 8px; left: 12px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .nu-tl-item {
      position: relative;
      padding: 0 0 22px 0;
    }
    .nu-tl-item::before {
      content: '';
      position: absolute;
      left: -30px;
      top: 4px;
      width: 14px;
      height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .nu-tl-date {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-tl-title { font-weight: 700; color: var(--nu-dark-text); font-size: 1rem; margin-bottom: 4px; }
    .nu-tl-desc { font-size: 0.92rem; color: var(--nu-body-text); }

    /* CALLOUTS */
    .nu-callout {
      padding: 18px 22px;
      border-radius: 6px;
      margin: 18px 0;
      font-size: 0.95rem;
    }
    .nu-callout-warn {
      background: #fff7e6;
      border-left: 4px solid var(--nu-warning);
      color: #5a3a14;
    }
    .nu-callout-good {
      background: #e8f5ec;
      border-left: 4px solid var(--nu-success);
      color: #14401f;
    }
    .nu-callout strong { display: block; margin-bottom: 4px; font-weight: 900; letter-spacing: 0.04em; text-transform: uppercase; font-size: 0.78rem; }

    /* WALK-AWAY BANNER */
    .nu-walkaway {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .nu-walkaway::before {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
    }
    .nu-walkaway > * { position: relative; z-index: 1; }
    .nu-walkaway .label {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
    }
    .nu-walkaway .price {
      font-size: 2.6rem;
      font-weight: 900;
      letter-spacing: 0.02em;
      margin-bottom: 8px;
    }
    .nu-walkaway .note {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.85);
      max-width: 600px;
      margin: 0 auto;
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
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact { font-size: 0.92rem; line-height: 1.85; }
    .nu-footer-contact strong { color: var(--nu-white); font-weight: 700; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-wrap { padding: 40px 20px; }
      .nu-hero-block { padding: 24px; }
      .nu-hero-title { font-size: 1.5rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .nu-walkaway .price { font-size: 1.9rem; }
      .nu-table thead th, .nu-table tbody td { padding: 10px 12px; font-size: 0.85rem; }
    }

    /* PRINT */
    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-walkaway { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-prop-cell, .nu-info-card { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
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

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <!-- DOCUMENT META -->
      <div class="nu-doc-meta">
        <div class="nu-doc-meta-item">
          <strong>Document</strong>
          <span>Estate Acquisition Strategy</span>
        </div>
        <div class="nu-doc-meta-item">
          <strong>Property</strong>
          <span>4505 Buttewoods</span>
        </div>
        <div class="nu-doc-meta-item">
          <strong>Prepared By</strong>
          <span>Aaron C. Norris</span>
        </div>
        <div class="nu-doc-meta-item">
          <strong>Date</strong>
          <span>April 25, 2026</span>
        </div>
        <div class="nu-doc-meta-item">
          <strong>Classification</strong>
          <span>Confidential — Personal</span>
        </div>
      </div>

      <!-- HERO -->
      <div class="nu-hero-block">
        <div class="nu-eyebrow">Action Item — reMarkable Capture</div>
        <h1 class="nu-hero-title">Negotiate Purchase of <span>7,098 sq ft Estate</span> at 4505 Buttewoods</h1>
        <p class="nu-hero-summary">
          A disciplined acquisition playbook for the 4505 Buttewoods estate. The objective is to secure favorable terms on a substantial residential property while protecting cash position, preserving optionality, and avoiding the most common emotional traps that drive buyers above their walk-away number.
        </p>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-prop-grid">
          <div class="nu-prop-cell">
            <div class="nu-prop-label">Address</div>
            <div class="nu-prop-value">4505 Buttewoods</div>
            <div class="nu-prop-sub">Confirm exact city / zip in MLS pull</div>
          </div>
          <div class="nu-prop-cell">
            <div class="nu-prop-label">Heated Square Footage</div>
            <div class="nu-prop-value">7,098 sq ft</div>
            <div class="nu-prop-sub">Verify against tax records &amp; appraiser</div>
          </div>
          <div class="nu-prop-cell">
            <div class="nu-prop-label">Asset Class</div>
            <div class="nu-prop-value">Residential Estate</div>
            <div class="nu-prop-sub">Luxury single-family</div>
          </div>
          <div class="nu-prop-cell">
            <div class="nu-prop-label">Listing Status</div>
            <div class="nu-prop-value">Pull from MLS</div>
            <div class="nu-prop-sub">DOM, list price, prior price drops</div>
          </div>
          <div class="nu-prop-cell">
            <div class="nu-prop-label">Tax Assessed Value</div>
            <div class="nu-prop-value">Pull from county</div>
            <div class="nu-prop-sub">Use as anchor in negotiation</div>
          </div>
          <div class="nu-prop-cell">
            <div class="nu-prop-label">Last Sale</div>
            <div class="nu-prop-value">Pull deed history</div>
            <div class="nu-prop-sub">Year acquired, price paid by current owner</div>
          </div>
        </div>

        <div class="nu-callout nu-callout-warn">
          <strong>Data to confirm before first offer</strong>
          Square footage discrepancy (heated vs. total under roof), HVAC zones &amp; age, roof age, septic vs. sewer, well vs. utility water, foundation type, flood zone designation, and any unrecorded liens or open permits.
        </div>
      </section>

      <!-- NEGOTIATION OBJECTIVES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objectives</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-badge-list">
          <div class="nu-badge"><div class="nu-badge-num">1</div>Buy below appraised value — never pay full list on a 7,000+ sq ft estate.</div>
          <div class="nu-badge"><div class="nu-badge-num">2</div>Protect liquidity — preserve operating cash for Norris Utilities® inventory and growth.</div>
          <div class="nu-badge"><div class="nu-badge-num">3</div>Lock in seller-paid concessions — closing costs, rate buy-down, or repair credits.</div>
          <div class="nu-badge"><div class="nu-badge-num">4</div>Keep contingencies live — inspection, financing, appraisal — all written in.</div>
          <div class="nu-badge"><div class="nu-badge-num">5</div>Hold a hard walk-away number and never disclose it to the listing agent.</div>
        </div>
      </section>

      <!-- VALUATION FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Framework</span></h2>
        <div class="nu-section-rule"></div>

        <p style="margin-bottom: 18px; color: var(--nu-body-text);">
          Build the offer from data, not from the listing price. Triangulate from three independent sources — comparable sales, replacement cost, and income/use value. Take the lower-middle of the range as your opening number.
        </p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width: 36%;">Method</th>
                <th>Inputs Required</th>
                <th style="width: 22%; text-align: right;">Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Comparable Sales (Comps)</strong></td>
                <td>3–5 closed sales of 5,500–8,500 sq ft homes within 2 miles, last 12 months</td>
                <td class="num">50%</td>
              </tr>
              <tr>
                <td><strong>Replacement Cost</strong></td>
                <td>Construction $/sq ft × 7,098, plus land value, less depreciation</td>
                <td class="num">25%</td>
              </tr>
              <tr>
                <td><strong>Tax Assessed × Adjustment</strong></td>
                <td>County assessed value, adjusted to local market ratio</td>
                <td class="num">15%</td>
              </tr>
              <tr>
                <td><strong>Days on Market Discount</strong></td>
                <td>Reduce 0.5%–1.0% per 30 DOM beyond 60 days</td>
                <td class="num">10%</td>
              </tr>
              <tr class="highlight">
                <td><strong>Blended Fair Value</strong></td>
                <td>Weighted average becomes the ceiling for opening offer</td>
                <td class="num">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder</span></h2>
        <div class="nu-section-rule"></div>

        <p style="margin-bottom: 18px;">
          Negotiate in pre-planned increments. Each step has a defined trigger and a defined ceiling — when you hit the ceiling, you stop. Never improvise the next bump in the room.
        </p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Step</th>
                <th>Position</th>
                <th>Anchored At</th>
                <th>Trigger to Move</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Opening</strong></td>
                <td>Initial written offer</td>
                <td>85% of blended fair value</td>
                <td>Submit after diligence is complete</td>
              </tr>
              <tr>
                <td><strong>Counter 1</strong></td>
                <td>Respond to seller counter</td>
                <td>90% of blended fair value</td>
                <td>Seller moves down ≥3% from list</td>
              </tr>
              <tr>
                <td><strong>Counter 2</strong></td>
                <td>Final price-only push</td>
                <td>94% of blended fair value</td>
                <td>Seller agrees to credits or repairs</td>
              </tr>
              <tr class="highlight">
                <td><strong>Walk-Away</strong></td>
                <td>Hard ceiling, non-negotiable</td>
                <td>100% of blended fair value</td>
                <td>Past this number, walk — period.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="nu-callout nu-callout-good">
          <strong>Leverage levers beyond price</strong>
          Closing date flexibility, leaseback to seller, appliance/furniture inclusions, repair credits in lieu of price reduction, rate buy-down funded by seller, and earnest money structure. Trade these before raising the offer.
        </div>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-two-col">
          <div class="nu-info-card">
            <h4>Property &amp; Structural</h4>
            <ul>
              <li><strong>Independent appraisal</strong> — separate from lender's</li>
              <li><strong>Full home inspection</strong> with sewer scope</li>
              <li><strong>Roof certification</strong> from licensed roofer</li>
              <li><strong>HVAC service history</strong> — all units</li>
              <li><strong>Foundation &amp; structural engineer</strong> letter for 7,000+ sq ft</li>
              <li><strong>Termite / wood-destroying insect</strong> bond status</li>
              <li><strong>Pool / spa / outbuildings</strong> separate inspection</li>
            </ul>
          </div>
          <div class="nu-info-card">
            <h4>Title, Legal &amp; Financial</h4>
            <ul>
              <li><strong>Title commitment</strong> with all exceptions reviewed</li>
              <li><strong>Survey</strong> — confirm boundary, easements, encroachments</li>
              <li><strong>HOA / covenants</strong> — read every page</li>
              <li><strong>Property tax history</strong> — last 5 years</li>
              <li><strong>Utility cost history</strong> — 12 months of bills</li>
              <li><strong>Open permits</strong> with the county</li>
              <li><strong>Flood zone &amp; insurance quote</strong> before going hard</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Timeline</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-timeline">
          <div class="nu-tl-item">
            <div class="nu-tl-date">Week 1 — Intelligence</div>
            <div class="nu-tl-title">Pull comps, deed history, and tax record</div>
            <div class="nu-tl-desc">Build the blended fair value model. Drive the property at three different times of day. Talk to two neighbors if possible.</div>
          </div>
          <div class="nu-tl-item">
            <div class="nu-tl-date">Week 2 — Pre-Approval</div>
            <div class="nu-tl-title">Lock financing posture and proof of funds</div>
            <div class="nu-tl-desc">Decide cash vs. financed vs. hybrid. If financed, pre-approval letter at the offer price — not above. Renasant Bank — Patrick Lavette is the first call.</div>
          </div>
          <div class="nu-tl-item">
            <div class="nu-tl-date">Week 3 — First Offer</div>
            <div class="nu-tl-title">Submit written opening offer at 85% of blended value</div>
            <div class="nu-tl-desc">Short response window (48–72 hours). Earnest money modest. All contingencies live: inspection, appraisal, financing, title.</div>
          </div>
          <div class="nu-tl-item">
            <div class="nu-tl-date">Weeks 4–5 — Counters</div>
            <div class="nu-tl-title">Work the offer ladder, never above walk-away</div>
            <div class="nu-tl-desc">Trade non-price terms before raising price. Document every counter in writing. No verbal agreements.</div>
          </div>
          <div class="nu-tl-item">
            <div class="nu-tl-date">Weeks 6–8 — Diligence</div>
            <div class="nu-tl-title">Inspections, appraisal, title, survey</div>
            <div class="nu-tl-desc">Use findings to renegotiate price or credits. Re-trade only on material issues — not cosmetic items.</div>
          </div>
          <div class="nu-tl-item">
            <div class="nu-tl-date">Weeks 9–10 — Close</div>
            <div class="nu-tl-title">Final walk-through &amp; closing</div>
            <div class="nu-tl-desc">Walk-through within 24 hours of closing. Wire funds only after verbal verification with the closing attorney via known phone number — wire fraud is the #1 risk at this stage.</div>
          </div>
        </div>
      </section>

      <!-- RISK MANAGEMENT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Management</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-two-col">
          <div class="nu-info-card">
            <h4>Discipline Rules</h4>
            <ul>
              <li><strong>Never disclose</strong> the walk-away number — not to the agent, not to the seller, not in passing</li>
              <li><strong>Sleep on every counter</strong> — no decisions made the same hour they arrive</li>
              <li><strong>Get everything in writing</strong> — verbal seller promises do not survive closing</li>
              <li><strong>Keep the loan-to-value</strong> conservative — preserve cash for Norris Utilities® operations</li>
              <li><strong>Walk away once</strong> if needed — it is the strongest position in any negotiation</li>
            </ul>
          </div>
          <div class="nu-info-card">
            <h4>Red Flags — Pause &amp; Reassess</h4>
            <ul>
              <li>Seller refuses inspection or limits scope</li>
              <li>Title commitment shows unresolved liens or judgments</li>
              <li>Permits open with the county for major work</li>
              <li>Insurance quote materially exceeds projection</li>
              <li>Appraisal more than 5% below contract price</li>
              <li>Comps show declining trend in the immediate area</li>
              <li>Any pressure to skip a contingency to "stay competitive"</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- WALK-AWAY BANNER -->
      <section class="nu-section">
        <div class="nu-walkaway">
          <div class="label">The Discipline</div>
          <div class="price">Hold the Walk-Away Number</div>
          <div class="note">
            On a 7,098 sq ft estate, every 1% above fair value is a meaningful sum. Set the walk-away number before the first offer is written, in private. Then negotiate from data, not from emotion. The best offer is the one you can leave behind.
          </div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="nu-section" style="margin-bottom: 0;">
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Steps</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-info-card">
          <ul>
            <li><strong>Confirm full address</strong> (city/zip) and pull MLS sheet for 4505 Buttewoods</li>
            <li><strong>Order tax record &amp; deed history</strong> from county records</li>
            <li><strong>Pull 5 closed comps</strong> within 2 miles, 5,500–8,500 sq ft, last 12 months</li>
            <li><strong>Call Patrick Lavette</strong> at Renasant Bank to scope financing options</li>
            <li><strong>Build blended fair value model</strong> using the framework above</li>
            <li><strong>Set walk-away number</strong> in writing — keep it confidential</li>
            <li><strong>Schedule a drive-by</strong> at three different times before submitting any offer</li>
          </ul>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO<br>
      Norris Utilities®, LLC | Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>