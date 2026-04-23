<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Strategy | Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #0A7A3B;
      --nu-warning: #B8860B;
      --nu-danger: #A02020;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
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
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
    }
    .nu-doc-label {
      margin-top: 22px;
      display: inline-block;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      padding: 7px 18px;
      border-radius: 2px;
    }

    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: -100px;
      width: 65%; max-width: 900px; height: 900px;
      background:
        radial-gradient(circle at center, rgba(0,0,255,0.035) 0%, rgba(0,0,255,0.015) 40%, transparent 70%);
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

    .doc-title {
      font-weight: 900;
      font-size: 2.3rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: #666;
      margin-bottom: 28px;
    }

    .meta-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 40px;
    }
    .meta-cell {
      background: var(--nu-white);
      padding: 16px 20px;
    }
    .meta-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .meta-value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin: 44px 0 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 24px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 24px 10px 14px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-badge.cyan { background: linear-gradient(135deg, #004477 0%, #0077aa 100%); }
    .nu-badge.gold { background: linear-gradient(135deg, #8a6d2e 0%, #c9a84c 100%); color: #1a1a2e; }

    p { margin-bottom: 14px; color: var(--nu-body-text); }
    p.lead { font-size: 1.08rem; color: var(--nu-dark-text); }

    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 28px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-bottom: 28px;
    }

    .nu-card {
      background: var(--nu-white);
      border-radius: 6px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
    }
    .nu-card.cyan { border-left-color: var(--nu-cyan); }
    .nu-card.gold { border-left-color: var(--nu-accent-gold); }
    .nu-card.navy { border-left-color: var(--nu-navy); }
    .nu-card h3 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card .stat {
      font-size: 1.7rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 6px;
    }
    .nu-card .stat-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #777;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      margin-bottom: 24px;
      font-size: 0.92rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    thead th {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0044dd 100%);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 12px 14px;
      text-align: left;
    }
    tbody td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      color: var(--nu-body-text);
    }
    tbody tr:nth-child(even) td { background: #fafafc; }
    tbody tr:hover td { background: #eef4ff; }
    td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; color: var(--nu-dark-text); }
    tfoot td {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 900;
      padding: 14px;
    }

    .ladder {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 28px;
    }
    .ladder-rung {
      display: grid;
      grid-template-columns: 70px 1fr auto;
      align-items: center;
      gap: 18px;
      background: var(--nu-white);
      padding: 16px 20px;
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .ladder-rung.r2 { border-left-color: var(--nu-cyan); }
    .ladder-rung.r3 { border-left-color: var(--nu-accent-gold); }
    .ladder-rung.r4 { border-left-color: var(--nu-danger); }
    .rung-num {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      line-height: 1;
    }
    .rung-num small {
      display: block;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: #888;
      margin-top: 4px;
    }
    .rung-body h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
    }
    .rung-body p { font-size: 0.9rem; margin: 0; color: #555; }
    .rung-price {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
      font-variant-numeric: tabular-nums;
    }

    ol.leverage, ul.clean {
      list-style: none;
      padding: 0;
      margin: 0 0 24px;
    }
    ol.leverage li, ul.clean li {
      position: relative;
      padding: 10px 0 10px 36px;
      border-bottom: 1px solid var(--nu-medium-gray);
      color: var(--nu-body-text);
    }
    ol.leverage { counter-reset: lev; }
    ol.leverage li::before {
      counter-increment: lev;
      content: counter(lev);
      position: absolute;
      left: 0; top: 10px;
      width: 26px; height: 26px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      display: flex; align-items: center; justify-content: center;
    }
    ul.clean li::before {
      content: '';
      position: absolute;
      left: 6px; top: 19px;
      width: 8px; height: 8px;
      background: var(--nu-cyan);
      transform: rotate(45deg);
    }
    ul.clean li strong { color: var(--nu-dark-text); }

    .callout {
      background: linear-gradient(135deg, #f0f7ff 0%, #e0efff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 20px 24px;
      margin-bottom: 28px;
      border-radius: 0 4px 4px 0;
    }
    .callout h4 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout.warn {
      background: linear-gradient(135deg, #fff8e8 0%, #ffeecc 100%);
      border-left-color: var(--nu-warning);
    }
    .callout.warn h4 { color: var(--nu-warning); }
    .callout.danger {
      background: linear-gradient(135deg, #fff0f0 0%, #ffe0e0 100%);
      border-left-color: var(--nu-danger);
    }
    .callout.danger h4 { color: var(--nu-danger); }
    .callout p:last-child { margin-bottom: 0; }

    .timeline {
      position: relative;
      padding-left: 32px;
      margin-bottom: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .tl-item {
      position: relative;
      padding: 0 0 20px 0;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -32px; top: 4px;
      width: 19px; height: 19px;
      background: var(--nu-white);
      border: 4px solid var(--nu-blue);
      border-radius: 50%;
    }
    .tl-item h5 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      margin-bottom: 4px;
    }
    .tl-item .tl-date {
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .tl-item p { font-size: 0.9rem; margin: 0; color: #555; }

    .nu-btn {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 12px 26px;
      border-radius: 3px;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      margin-right: 8px;
    }
    .nu-btn.outline {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }

    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #001177 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 16px auto;
      opacity: 0.6;
    }
    .nu-footer-micro {
      margin-top: 14px;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
    }

    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 230px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px 60px; }
      .doc-title { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-badge { clip-path: none; border-radius: 4px; padding: 8px 14px; }
      .ladder-rung { grid-template-columns: 1fr; gap: 8px; }
      .rung-price { font-size: 1.1rem; }
      table { font-size: 0.84rem; }
      thead th, tbody td { padding: 9px 10px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, table { box-shadow: none; break-inside: avoid; }
      .callout { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Acquisition Brief</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L550,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="doc-title">4505 Buttewoods Estate<br><span class="accent">Acquisition &amp; Negotiation Strategy</span></h1>
      <p class="doc-subtitle">7,098 sq ft residential estate — purchase negotiation playbook prepared for Aaron C. Norris</p>

      <div class="meta-bar">
        <div class="meta-cell">
          <div class="meta-label">Property</div>
          <div class="meta-value">4505 Buttewoods</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Size</div>
          <div class="meta-value">7,098 sq ft</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Use Type</div>
          <div class="meta-value">Residential Estate</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Brief Date</div>
          <div class="meta-value">April 23, 2026</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Prepared For</div>
          <div class="meta-value">Aaron C. Norris</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Status</div>
          <div class="meta-value" style="color: var(--nu-warning);">Negotiation Open</div>
        </div>
      </div>

      <div class="badge-row">
        <span class="nu-badge">▶ Source reMarkable</span>
        <span class="nu-badge cyan">▶ Action Item</span>
        <span class="nu-badge gold">▶ High Value</span>
      </div>

      <div class="callout">
        <h4>Objective</h4>
        <p>Negotiate the purchase of the 7,098 sq ft estate located at <strong>4505 Buttewoods</strong> at the lowest defensible price without losing the deal to a competing buyer. This document provides the valuation framework, the offer ladder, the leverage points, and the step-by-step execution plan.</p>
      </div>

      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
      <div class="grid-3">
        <div class="nu-card">
          <div class="stat-label">Living Area</div>
          <div class="stat">7,098</div>
          <p style="margin:0; font-size:0.85rem;">Square feet — substantially above Birmingham metro estate median of ~4,200 sq ft.</p>
        </div>
        <div class="nu-card cyan">
          <div class="stat-label">Address</div>
          <div class="stat" style="font-size:1.2rem; padding-top:6px;">4505 Buttewoods</div>
          <p style="margin:0; font-size:0.85rem;">Full parcel ID and deed reference to be pulled from county records prior to offer.</p>
        </div>
        <div class="nu-card gold">
          <div class="stat-label">Class</div>
          <div class="stat" style="font-size:1.2rem; padding-top:6px;">Luxury Estate</div>
          <p style="margin:0; font-size:0.85rem;">Price discovery required — verify comps in same subdivision or within 2-mile radius.</p>
        </div>
      </div>

      <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Intelligence Checklist</span></h2>
      <p>Before a number is ever put on paper, these seven items must be in hand. Walking into a negotiation without them means negotiating against yourself.</p>

      <ol class="leverage">
        <li><strong>Pull the deed chain</strong> — Last three transfers, purchase prices, and any liens or mortgages recorded against the property.</li>
        <li><strong>Current tax assessed value</strong> — County appraiser&rsquo;s assessment and year-over-year trend.</li>
        <li><strong>Three comparable sales</strong> — Closed transactions within 12 months, same subdivision if possible, normalized to $/sq ft.</li>
        <li><strong>Days on market (DOM)</strong> — If listed: how long, how many price cuts, by what amount.</li>
        <li><strong>Seller motivation</strong> — Divorce, estate sale, relocation, financial pressure. Each changes the leverage profile.</li>
        <li><strong>Deferred maintenance estimate</strong> — Roof age, HVAC age, foundation, drainage. Walk the property with a builder before submitting.</li>
        <li><strong>Title &amp; survey status</strong> — Any encroachments, easements, or open permits that complicate closing.</li>
      </ol>

      <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Framework</span></h2>
      <p class="lead">Three independent valuation lenses. The lowest defensible number inside the intersection of the three is the opening offer.</p>

      <table>
        <thead>
          <tr>
            <th>Lens</th>
            <th>Method</th>
            <th>Anchor</th>
            <th class="num">Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Comparable Sales</strong></td>
            <td>3 closed comps within 12 months, ± 15% sq ft range</td>
            <td>Blended $/sq ft &times; 7,098</td>
            <td class="num">50%</td>
          </tr>
          <tr>
            <td><strong>Replacement Cost</strong></td>
            <td>Cost to rebuild today (land + hard + soft) minus depreciation</td>
            <td>Marshall &amp; Swift or local GC estimate</td>
            <td class="num">25%</td>
          </tr>
          <tr>
            <td><strong>Income / Use Value</strong></td>
            <td>Owner-equivalent rent &times; cap rate, or business-use cash flow</td>
            <td>Local luxury rent &divide; market cap rate</td>
            <td class="num">25%</td>
          </tr>
          <tr>
            <td><strong>Deductions</strong></td>
            <td>Deferred maintenance, closing costs, carrying cost during fix</td>
            <td>Builder walk-through estimate</td>
            <td class="num">&minus;</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">FAIR MARKET VALUE RANGE (low &ndash; mid &ndash; high)</td>
            <td class="num">100%</td>
          </tr>
        </tfoot>
      </table>

      <div class="callout warn">
        <h4>Discipline Rule</h4>
        <p>Never bid above the midpoint of the three-lens blended range unless at least two lenses push the midpoint up. Emotion is the most expensive line item in any real estate transaction — protect the walk-away number.</p>
      </div>

      <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder &mdash; Four Escalation Rungs</span></h2>
      <p>The opening offer is deliberately low but defensible. Each rung increases only in response to a concrete concession from the seller, never in response to silence or posturing.</p>

      <div class="ladder">
        <div class="ladder-rung">
          <div class="rung-num">1<small>OPEN</small></div>
          <div class="rung-body">
            <h4>Anchor Offer — 82% of Fair Market Low</h4>
            <p>Written LOI citing comps, deferred maintenance, and 30-day close. Force seller to engage with data, not emotion.</p>
          </div>
          <div class="rung-price">82%</div>
        </div>
        <div class="ladder-rung r2">
          <div class="rung-num">2<small>RESPOND</small></div>
          <div class="rung-body">
            <h4>First Counter — 88% of Fair Market Low</h4>
            <p>Only if seller counters. Pair the number with a concession request: inspection credit, closing cost split, or included personal property.</p>
          </div>
          <div class="rung-price">88%</div>
        </div>
        <div class="ladder-rung r3">
          <div class="rung-num">3<small>CLOSE</small></div>
          <div class="rung-body">
            <h4>Final Move — Fair Market Midpoint, Less Deductions</h4>
            <p>Pre-approved financing letter or cash proof-of-funds attached. This is the best-and-final. Set a 72-hour expiration.</p>
          </div>
          <div class="rung-price">~94%</div>
        </div>
        <div class="ladder-rung r4">
          <div class="rung-num">4<small>WALK</small></div>
          <div class="rung-body">
            <h4>Walk-Away Line</h4>
            <p>Fair market midpoint with deductions folded in. One dollar above this, the deal loses its margin of safety. Discipline beats desire.</p>
          </div>
          <div class="rung-price">STOP</div>
        </div>
      </div>

      <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Points to Deploy</span></h2>
      <div class="grid-2">
        <div class="nu-card">
          <h3>Financial Leverage</h3>
          <ul class="clean">
            <li><strong>Cash or equivalent proof of funds</strong> — eliminates financing contingency risk for the seller.</li>
            <li><strong>Short inspection window</strong> — 7 days instead of 14 signals seriousness.</li>
            <li><strong>Flexible close date</strong> — lets seller align with their next purchase or tax year-end.</li>
            <li><strong>Earnest money escalation</strong> — larger deposit signals conviction without raising price.</li>
          </ul>
        </div>
        <div class="nu-card cyan">
          <h3>Condition Leverage</h3>
          <ul class="clean">
            <li><strong>Roof, HVAC, and foundation age</strong> — quantify in dollars, present as a credit request.</li>
            <li><strong>Cosmetic or systems updates</strong> — document with photos, cite local contractor estimates.</li>
            <li><strong>Permit or code issues</strong> — any open permits become the seller&rsquo;s problem, reducing their negotiating room.</li>
            <li><strong>Drainage, grading, landscape</strong> — site issues often overlooked by first appraisal.</li>
          </ul>
        </div>
        <div class="nu-card gold">
          <h3>Timing Leverage</h3>
          <ul class="clean">
            <li><strong>Days on market</strong> — each week past 30 days increases buyer leverage by ~1%.</li>
            <li><strong>Seasonal pressure</strong> — end-of-quarter and end-of-year close faster and cheaper.</li>
            <li><strong>Seller carrying costs</strong> — each month of vacancy is mortgage + tax + insurance against them.</li>
            <li><strong>Competing listings</strong> — note nearby comparable inventory; option-value is leverage.</li>
          </ul>
        </div>
        <div class="nu-card navy">
          <h3>Behavioral Leverage</h3>
          <ul class="clean">
            <li><strong>Single written offer</strong> — never negotiate verbally against yourself.</li>
            <li><strong>Patience between rungs</strong> — silence costs nothing; haste costs money.</li>
            <li><strong>Expiration dates on every offer</strong> — forces decision without seeming hostile.</li>
            <li><strong>Agent-to-agent tone</strong> — warm, direct, no apology language. Let numbers do the work.</li>
          </ul>
        </div>
      </div>

      <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Timeline &mdash; 30 Days to Close</span></h2>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">Day 1 &ndash; Day 3</div>
          <h5>Intelligence Sweep</h5>
          <p>Pull deed chain, tax assessment, three comps, DOM, and public records. Walk the property with a trusted builder for deferred maintenance count.</p>
        </div>
        <div class="tl-item">
          <div class="tl-date">Day 4 &ndash; Day 5</div>
          <h5>Valuation &amp; Strategy Lock</h5>
          <p>Complete three-lens valuation. Lock the offer ladder numbers and the walk-away line in writing before any contact with seller side.</p>
        </div>
        <div class="tl-item">
          <div class="tl-date">Day 6</div>
          <h5>Anchor Offer Submitted</h5>
          <p>Written LOI delivered with 72-hour expiration. Cover letter cites comps and condition — not emotion or fit.</p>
        </div>
        <div class="tl-item">
          <div class="tl-date">Day 7 &ndash; Day 10</div>
          <h5>Counter &amp; Respond</h5>
          <p>Move to rung 2 only on written counter. Every concession request paired with the number. No verbal promises.</p>
        </div>
        <div class="tl-item">
          <div class="tl-date">Day 11 &ndash; Day 14</div>
          <h5>Best &amp; Final</h5>
          <p>If still open: deliver rung 3 with proof of funds, 72-hour expiration. This is the close-or-walk moment.</p>
        </div>
        <div class="tl-item">
          <div class="tl-date">Day 15 &ndash; Day 22</div>
          <h5>Inspection &amp; Diligence</h5>
          <p>Professional inspection, survey, title review. Any material findings trigger a credit negotiation, not a price reopener.</p>
        </div>
        <div class="tl-item">
          <div class="tl-date">Day 23 &ndash; Day 30</div>
          <h5>Close</h5>
          <p>Final walk-through, attorney review, wire funds, record deed. Keys in hand on or before day 30.</p>
        </div>
      </div>

      <h2 class="nu-section-title"><span class="first">Deal</span> <span class="rest">Killers to Watch</span></h2>
      <div class="callout danger">
        <h4>Red Flags — If You See These, Slow Down or Walk</h4>
        <ul class="clean" style="margin-bottom:0;">
          <li><strong>Title cloud</strong> — unreleased liens, heir disputes, or survey disagreements. Non-negotiable until cleared.</li>
          <li><strong>Seller refuses inspection</strong> — the only reason to refuse is to hide something.</li>
          <li><strong>Pressure to close &lt; 14 days without discount</strong> — speed without price concession means the seller knows something you don&rsquo;t.</li>
          <li><strong>Foundation, drainage, or environmental issue</strong> — these compound. Walk unless credit fully covers remediation plus contingency.</li>
          <li><strong>Verbal-only concessions</strong> — if it is not in the signed contract, it does not exist.</li>
        </ul>
      </div>

      <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">Log &mdash; Track Every Move</span></h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Rung</th>
            <th>Offer / Counter</th>
            <th>Seller Response</th>
            <th>Next Step</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026-04-23</td>
            <td>Pre-0</td>
            <td>Intelligence sweep initiated</td>
            <td>&mdash;</td>
            <td>Pull deed &amp; tax records</td>
          </tr>
          <tr>
            <td>&mdash;</td>
            <td>1</td>
            <td>Anchor offer &mdash; 82% FMV low</td>
            <td>Pending</td>
            <td>Await written response</td>
          </tr>
          <tr>
            <td>&mdash;</td>
            <td>2</td>
            <td>First counter &mdash; 88% FMV low</td>
            <td>Pending</td>
            <td>Condition-based concessions</td>
          </tr>
          <tr>
            <td>&mdash;</td>
            <td>3</td>
            <td>Best &amp; final &mdash; midpoint less deductions</td>
            <td>Pending</td>
            <td>72-hour expiration</td>
          </tr>
        </tbody>
      </table>

      <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Actions</span></h2>
      <ol class="leverage">
        <li><strong>Order the county records pull today</strong> — deed chain, tax card, any recorded instruments.</li>
        <li><strong>Identify three closed comps</strong> — same subdivision first, then within 2 miles, ± 15% sq ft.</li>
        <li><strong>Schedule a builder walk-through</strong> — 90 minutes on site, with a punch list and dollar estimate.</li>
        <li><strong>Confirm proof of funds or financing letter</strong> — in hand before any offer is submitted.</li>
        <li><strong>Draft the anchor offer letter</strong> — LOI plus one-page cover. Have counsel review before sending.</li>
      </ol>

      <div style="margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--nu-medium-gray);">
        <a href="tel:2055001343" class="nu-btn">Call Aaron — 205-500-1343</a>
        <a href="mailto:acnorris@norrisutilities.com" class="nu-btn outline">Email Decision</a>
      </div>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong style="color: #fff; font-size: 1rem;">Aaron C. Norris</strong> &nbsp;|&nbsp; Founder &amp; CEO<br>
      Norris Utilities®, LLC &nbsp;|&nbsp; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-micro">Internal Document &middot; Prepared 2026-04-23 &middot; Confidential</div>
  </footer>

</body>
</html>