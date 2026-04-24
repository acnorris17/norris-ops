<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Negotiation Brief — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #0A7E3F;
      --nu-warning: #B8860B;
      --nu-danger: #B0302E;
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
      min-height: 300px;
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
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
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
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      margin-top: 22px;
      display: inline-block;
      padding: 7px 22px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      border-radius: 2px;
    }

    /* CHEVRON */
    .nu-chevron { position: relative; height: 54px; margin-top: -54px; z-index: 10; line-height: 0; }
    .nu-chevron svg { width: 100%; height: 54px; display: block; }

    /* GHOST PHOENIX CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 280px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 720px; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 64px 40px 72px;
    }

    /* DOC TITLE BLOCK */
    .doc-title {
      border-left: 6px solid var(--nu-blue);
      padding: 4px 0 4px 22px;
      margin-bottom: 10px;
    }
    .doc-title h1 {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      letter-spacing: -0.01em;
    }
    .doc-title h1 .accent { color: var(--nu-blue); }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 18px 32px;
      margin: 18px 0 40px 28px;
      font-size: 0.88rem;
      color: #555;
    }
    .doc-meta div strong {
      display: block;
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 2px;
    }

    /* SECTION HEADINGS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.45rem;
      margin: 40px 0 16px;
      line-height: 1.2;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    p { margin-bottom: 12px; font-size: 0.98rem; }
    ul, ol { margin: 10px 0 14px 22px; }
    li { margin-bottom: 7px; font-size: 0.96rem; }

    /* SUMMARY CARD */
    .summary-card {
      background: linear-gradient(135deg, #f7f9ff 0%, #eef4ff 100%);
      border: 1px solid #d4defc;
      border-left: 5px solid var(--nu-cyan);
      border-radius: 8px;
      padding: 22px 26px;
      margin-bottom: 14px;
    }
    .summary-card h3 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .summary-card p { margin-bottom: 0; color: var(--nu-dark-text); }

    /* PROPERTY SNAPSHOT GRID */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin: 14px 0 8px;
    }
    .snap-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      border-radius: 6px;
      padding: 16px 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .snap-cell .label {
      font-size: 0.7rem;
      font-weight: 700;
      color: #666;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .snap-cell .value {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .snap-cell .sub {
      font-size: 0.82rem;
      color: #777;
      margin-top: 4px;
      font-weight: 400;
    }

    /* CHEVRON BADGE */
    .nu-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 14px 0 18px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 24px 10px 18px;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      padding-left: 26px;
    }
    .nu-badge .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--nu-cyan);
      margin-right: 10px;
      box-shadow: 0 0 8px var(--nu-cyan);
    }

    /* NEGOTIATION TABLE */
    .neg-table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0 18px;
      background: var(--nu-white);
      font-size: 0.92rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      border-radius: 6px;
      overflow: hidden;
    }
    .neg-table thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      padding: 12px 14px;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .neg-table tbody td {
      padding: 11px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .neg-table tbody tr:nth-child(even) { background: #fafbff; }
    .neg-table tbody tr:last-child td { border-bottom: none; }
    .neg-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; color: var(--nu-dark-text); }
    .neg-table .total-row td { background: #eef4ff; font-weight: 900; color: var(--nu-blue); }

    /* OFFER LADDER */
    .ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin: 14px 0 20px;
    }
    .ladder-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
      position: relative;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .ladder-step:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }
    .ladder-step .step-label {
      position: absolute;
      top: -10px;
      left: 16px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 2px;
    }
    .ladder-step.anchor { border-top: 4px solid var(--nu-blue); }
    .ladder-step.target { border-top: 4px solid var(--nu-cyan); }
    .ladder-step.walk { border-top: 4px solid var(--nu-accent-gold); }
    .ladder-step.anchor .step-label { background: var(--nu-blue); }
    .ladder-step.target .step-label { background: var(--nu-cyan); color: var(--nu-navy); }
    .ladder-step.walk .step-label { background: var(--nu-accent-gold); color: var(--nu-navy); }
    .ladder-step h4 {
      margin-top: 6px;
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .ladder-step .psf {
      font-size: 0.85rem;
      color: #666;
      margin: 4px 0 10px;
      font-weight: 700;
    }
    .ladder-step p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      margin-bottom: 0;
    }

    /* SCRIPT / QUOTE BLOCKS */
    .script-block {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 20px;
      margin: 10px 0 16px;
      font-size: 0.94rem;
      font-style: italic;
      color: #2a2a3e;
      border-radius: 0 6px 6px 0;
    }
    .script-block strong { font-style: normal; color: var(--nu-blue); display: block; margin-bottom: 6px; font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      margin-left: 0;
      padding: 0;
    }
    .checklist li {
      position: relative;
      padding: 8px 0 8px 32px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 12px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* TWO-COLUMN GRID */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin: 12px 0 20px;
    }
    .col-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .col-card h4 {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .col-card.pro h4 { color: var(--nu-success); }
    .col-card.con h4 { color: var(--nu-danger); }
    .col-card ul { margin: 0 0 0 18px; }
    .col-card li { font-size: 0.92rem; }

    /* TIMELINE */
    .timeline {
      position: relative;
      margin: 16px 0 10px 10px;
      padding-left: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      margin-bottom: 16px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -24px; top: 5px;
      width: 12px; height: 12px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 2px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-item .when {
      font-size: 0.74rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .timeline-item .what {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-top: 2px;
    }
    .timeline-item .detail {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #fffdf4 0%, #fdf4d9 100%);
      border: 1px solid #e7d492;
      border-left: 5px solid var(--nu-accent-gold);
      border-radius: 6px;
      padding: 16px 20px;
      margin: 14px 0 18px;
      font-size: 0.94rem;
      color: #5a4a0a;
    }
    .callout strong { color: #704d00; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact { font-size: 0.92rem; line-height: 1.9; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-small {
      margin-top: 18px;
      font-size: 0.74rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-content-inner { padding: 44px 22px 56px; }
      .doc-title h1 { font-size: 1.55rem; }
      .doc-meta { margin-left: 0; gap: 12px 22px; }
      .two-col { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 10px 16px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .ladder-step, .col-card, .snap-cell, .neg-table { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-label">Acquisition Negotiation Brief</div>
    </div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 54" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,54 L1440,0 L1440,54 L0,54 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-content-inner">

      <div class="doc-title">
        <h1><span class="accent">4505 Buttewoods</span> — 7,098 sq ft Estate Acquisition</h1>
      </div>
      <div class="doc-meta">
        <div><strong>Subject</strong>4505 Buttewoods Estate</div>
        <div><strong>Size</strong>7,098 sq ft</div>
        <div><strong>Prepared For</strong>Aaron C. Norris</div>
        <div><strong>Date</strong>April 24, 2026</div>
        <div><strong>Status</strong>Pre-Offer / Negotiation Prep</div>
      </div>

      <div class="summary-card">
        <h3>Executive Summary</h3>
        <p>This brief frames the negotiation strategy for the 7,098 sq ft estate at 4505 Buttewoods. The objective is to secure the property at a price and terms that protect Aaron's position, preserve optionality on the Birmingham operation, and avoid the two classic buyer mistakes: overpaying on emotion and over-conceding on terms. Recommended approach: open anchored 12–15% below the seller's ask, hold a firm target at 8–10% below, and walk if the seller will not engage on inspection credits or a clean financing contingency.</p>
      </div>

      <div class="nu-badge-row">
        <span class="nu-badge"><span class="dot"></span>PRIORITY: HIGH</span>
        <span class="nu-badge"><span class="dot"></span>ACTION: PREP BEFORE OFFER</span>
        <span class="nu-badge"><span class="dot"></span>OWNER: AARON C. NORRIS</span>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
      <p>The facts below are the anchor for every number that follows. If any of these shift during diligence, every downstream number in this brief must be re-validated.</p>

      <div class="snapshot-grid">
        <div class="snap-cell">
          <div class="label">Address</div>
          <div class="value">4505 Buttewoods</div>
          <div class="sub">Estate property</div>
        </div>
        <div class="snap-cell">
          <div class="label">Living Area</div>
          <div class="value">7,098 sq ft</div>
          <div class="sub">Confirm via appraisal</div>
        </div>
        <div class="snap-cell">
          <div class="label">Property Class</div>
          <div class="value">Estate</div>
          <div class="sub">Luxury residential tier</div>
        </div>
        <div class="snap-cell">
          <div class="label">Transaction Type</div>
          <div class="value">Private Purchase</div>
          <div class="sub">Negotiated, not auction</div>
        </div>
      </div>

      <div class="callout">
        <strong>Data to confirm before writing the offer:</strong> asking price, year built, lot size, tax assessment, HOA status, most recent sale price &amp; date, comparable sales within 1 mile in last 180 days, known roof/HVAC/structural history, and any estate/probate constraints on the seller's side.
      </div>

      <!-- NEGOTIATION LEVERS -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Levers</span></h2>
      <p>In a 7,098 sq ft estate purchase, the price is only one of six variables. The buyer who negotiates all six wins; the buyer who negotiates only price overpays.</p>

      <table class="neg-table">
        <thead>
          <tr>
            <th>Lever</th>
            <th>Buyer-Favorable Position</th>
            <th>Expected Seller Pushback</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Purchase Price</strong></td>
            <td>8–10% below list; anchor with recent comps and any deferred maintenance</td>
            <td>Seller holds line on list price; cites square footage and finish level</td>
          </tr>
          <tr>
            <td><strong>Earnest Money</strong></td>
            <td>1% of purchase price, held by neutral title company, refundable on contingencies</td>
            <td>Seller may demand 2–3% non-refundable after inspection period</td>
          </tr>
          <tr>
            <td><strong>Inspection Period</strong></td>
            <td>10–14 business days, right to terminate for any reason</td>
            <td>Seller pushes for 7 days and "material defects only"</td>
          </tr>
          <tr>
            <td><strong>Financing Contingency</strong></td>
            <td>30-day financing contingency at market rate; cash option priced lower</td>
            <td>Seller prefers cash or pre-approved jumbo with 21-day close</td>
          </tr>
          <tr>
            <td><strong>Closing Costs</strong></td>
            <td>Seller credits 1–2% toward closing or rate buy-down</td>
            <td>Seller insists buyer pays all customary buyer costs</td>
          </tr>
          <tr>
            <td><strong>Close &amp; Possession</strong></td>
            <td>45-day close, possession at funding, no leaseback</td>
            <td>Seller requests 30–60 day post-close rent-back at no charge</td>
          </tr>
        </tbody>
      </table>

      <!-- OFFER LADDER -->
      <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder</span></h2>
      <p>Three-tier ladder. Set all three numbers before the first conversation with the listing agent — never in the middle of one. All percentages are relative to the seller's published ask. Once the ask is confirmed, drop the real dollar figures into the table, initial it, and hold the line.</p>

      <div class="ladder">
        <div class="ladder-step anchor">
          <span class="step-label">Opening Anchor</span>
          <h4>−12% to −15%</h4>
          <div class="psf">Below asking price</div>
          <p>First written offer. Paired with a 1-page cover letter from Aaron, proof of funds, and a 10-day response deadline. Anchors the bargaining range low without insulting.</p>
        </div>
        <div class="ladder-step target">
          <span class="step-label">Target Settlement</span>
          <h4>−8% to −10%</h4>
          <div class="psf">Below asking price</div>
          <p>The number Aaron actually expects to close at. Reached in one counter, tied to concrete inspection findings, comp sales, and a willingness to close in 45 days.</p>
        </div>
        <div class="ladder-step walk">
          <span class="step-label">Walk-Away Line</span>
          <h4>−5%</h4>
          <div class="psf">Below asking price</div>
          <p>The hard ceiling. Above this number with no seller concessions on inspection credits or financing terms, Aaron walks. Decided in advance, not in the moment.</p>
        </div>
      </div>

      <div class="callout">
        <strong>Rule of the ladder:</strong> Aaron does not move up to the next rung unless the seller gives something real on a non-price lever. A price concession with no improvement on earnest, inspection, or close terms is not a concession — it's a re-list.
      </div>

      <!-- INSPECTION & DILIGENCE -->
      <h2 class="nu-section-title"><span class="first">Inspection</span> <span class="rest">&amp; Diligence Checklist</span></h2>
      <p>On a 7,098 sq ft estate, the inspection period is where most of the price is won or lost. Every finding below can be converted into a credit, a repair, or a renegotiated price.</p>

      <ul class="checklist">
        <li><strong>General home inspection</strong> — licensed inspector, full crawl/attic, minimum 4-hour walk-through appropriate for square footage</li>
        <li><strong>Roof inspection</strong> — separate roofer, age and remaining life in writing</li>
        <li><strong>HVAC inspection</strong> — each zone tested; expect multiple units at this size</li>
        <li><strong>Foundation &amp; structural</strong> — structural engineer if any cracks, settlement, or sloped floors</li>
        <li><strong>Plumbing &amp; water intrusion</strong> — scope main line, check for any history of leaks, mold, or past water damage</li>
        <li><strong>Electrical panel &amp; load</strong> — panel age, amperage, aluminum wiring, generator tie-in if present</li>
        <li><strong>Pest &amp; termite</strong> — CL-100 letter; Alabama is active termite territory</li>
        <li><strong>Radon &amp; air quality</strong> — 48-hour test minimum, especially on finished basements</li>
        <li><strong>Pool / spa / outdoor systems</strong> — dedicated specialist if on site</li>
        <li><strong>Survey &amp; boundary</strong> — fresh survey, easements, encroachments, setbacks</li>
        <li><strong>Title &amp; liens</strong> — clean title commitment, estate/probate chain verified, no unreleased mortgages</li>
        <li><strong>Insurance quote</strong> — bind quote before removing financing contingency; flood, wind, fire</li>
      </ul>

      <!-- DEAL STRENGTHS / RISKS -->
      <h2 class="nu-section-title"><span class="first">Deal</span> <span class="rest">Strengths &amp; Risks</span></h2>
      <div class="two-col">
        <div class="col-card pro">
          <h4>Buyer Strengths</h4>
          <ul>
            <li>Aaron is a known, serious buyer with documented proof of funds</li>
            <li>Clean, simple offer structure — no contingent home sale</li>
            <li>Willingness to close in 45 days or less on a cash or pre-approved jumbo</li>
            <li>Fewer qualified buyers at this price tier means longer days-on-market favor the buyer</li>
            <li>A single negotiator (Aaron) means decisions are fast and unambiguous</li>
          </ul>
        </div>
        <div class="col-card con">
          <h4>Risks to Price In</h4>
          <ul>
            <li>Carrying cost on 7,098 sq ft: property tax, insurance, utilities, landscaping at estate scale</li>
            <li>Deferred maintenance is always larger than it looks until inspection is complete</li>
            <li>Resale liquidity at this tier is thin — hold period must be assumed at 7+ years</li>
            <li>Emotional attachment from a seller in an estate situation can override market logic</li>
            <li>Interest-rate movement during the close window can erase a negotiated price concession</li>
          </ul>
        </div>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Timeline</span></h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="when">Week 1 — Preparation</div>
          <div class="what">Confirm asking price, pull comparable sales, obtain proof-of-funds letter</div>
          <div class="detail">Gather three pre-approval or proof-of-funds sources. Lock in inspector, attorney, and insurance broker so no delays during contingency window.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Week 1–2 — Opening Anchor</div>
          <div class="what">Submit written offer at −12% to −15% with 10-day response deadline</div>
          <div class="detail">Cover letter signed by Aaron. Earnest money at 1%. Inspection period 14 business days. Financing contingency 30 days. Close in 45 days.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Week 2 — Counter &amp; Settle</div>
          <div class="what">Counter once, land at −8% to −10%; trade minor terms for price</div>
          <div class="detail">If seller counters within −6% of ask with no term improvements, do not split the difference. Hold the line. Silence is a lever.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Week 3–5 — Diligence</div>
          <div class="what">Execute full inspection checklist; convert findings into credits or walk</div>
          <div class="detail">Do not use inspection as a pretext for a second price cut unless the findings are real and documented. Protect Aaron's reputation as a straight-dealing buyer.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Week 6–7 — Close</div>
          <div class="what">Final walk-through 24 hours before funding; fund &amp; record</div>
          <div class="detail">Confirm possession at funding. No verbal side agreements. Everything in writing, signed, and in the closing binder.</div>
        </div>
      </div>

      <!-- SCRIPT -->
      <h2 class="nu-section-title"><span class="first">Opening</span> <span class="rest">Conversation Script</span></h2>
      <p>Aaron's voice, same tone as his business emails — direct, warm, confident, never apologetic. Use verbatim on the first call with the listing agent.</p>

      <div class="script-block">
        <strong>Aaron to Listing Agent</strong>
        "Name — appreciate the time. I've toured the property at 4505 Buttewoods, I've run my numbers, and I'm a real buyer with proof of funds. I'd like to put a written offer in front of your seller this week. Before I do, three questions: what is the seller's actual timing, what has the seller said about a reasonable path on price, and has any earnest money already been forfeited by a prior buyer. Answers to those three shape my offer. I'm prepared to close clean and fast once we're aligned."
      </div>

      <div class="script-block">
        <strong>Aaron on Counter</strong>
        "I hear you. Here's where I am. I'm willing to move on price to the target number — not further — and I can firm up earnest and shorten the close to 45 days. Those are real concessions that protect your seller. If that works, we have a deal tonight. If not, I understand, and I'll step back."
      </div>

      <div class="script-block">
        <strong>Aaron on Walk-Away</strong>
        "I respect the seller's position. At that number and those terms, it isn't the right deal for me. Please keep my information on file — if circumstances change in the next 60 days, I'd be glad to revisit."
      </div>

      <!-- NEXT ACTIONS -->
      <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Actions</span></h2>
      <ul class="checklist">
        <li><strong>Confirm asking price</strong> and days-on-market in writing from the listing agent</li>
        <li><strong>Pull comparable sales</strong> within 1 mile, 180 days, 5,000–8,500 sq ft; document price per sq ft range</li>
        <li><strong>Secure proof of funds</strong> or pre-approval letter at offer amount plus 10% cushion</li>
        <li><strong>Engage real estate attorney</strong> to review contract form and estate/probate status of seller</li>
        <li><strong>Line up inspector and roofer</strong> so they can be on-site within 5 days of contract</li>
        <li><strong>Run carrying-cost model</strong>: annual tax, insurance, utilities, maintenance at 1.5% of price per year</li>
        <li><strong>Set opening-anchor, target, and walk numbers</strong> in writing before the first negotiation conversation</li>
        <li><strong>Block calendar</strong>: two 1-hour windows this week for offer prep and listing-agent call</li>
      </ul>

      <div class="callout">
        <strong>Decision point for Aaron:</strong> Before the opening anchor goes out, confirm two things on the personal side — (1) this purchase does not compromise Norris Utilities® operating capital or the Skylift PO schedule, and (2) Aaron is prepared to own this property for 7+ years even if the Birmingham residential market softens 10–15%. If either answer is "no," revise the offer downward or pass.
      </div>

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
    <div class="nu-footer-small">Acquisition Negotiation Brief · Prepared 2026-04-24 · Confidential</div>
  </footer>

</body>
</html>