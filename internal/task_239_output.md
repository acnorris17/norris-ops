<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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

    /* ══ HEADER ══ */
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }

    .nu-header > * { position: relative; z-index: 2; }

    /* Phoenix watermark */
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }

    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }

    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    .nu-page-label {
      display: inline-block;
      margin-top: 26px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 4px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area { position: relative; background: var(--nu-white); }
    .nu-container { max-width: 1200px; margin: 0 auto; padding: 56px 40px 80px; }

    /* ══ SECTION ══ */
    .nu-section { margin-bottom: 48px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.65rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-underline {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
    }

    /* ══ HERO CARD ══ */
    .property-hero {
      background: linear-gradient(135deg, #f8fafe 0%, #eaf4ff 100%);
      border-left: 6px solid var(--nu-blue);
      border-radius: 10px;
      padding: 36px 40px;
      margin-bottom: 48px;
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 36px;
      align-items: center;
    }
    .property-hero-head {
      font-size: 0.85rem;
      color: var(--nu-blue);
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .property-hero-title {
      font-size: 1.9rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .property-hero-sub {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 18px;
    }
    .property-hero-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .stat-box {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 14px 16px;
    }
    .stat-label {
      font-size: 0.72rem;
      color: #777;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .stat-value {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-blue);
    }

    /* ══ GRID ══ */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .nu-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    /* ══ CARD ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-card h3 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card h3 .num {
      display: inline-block;
      width: 28px;
      height: 28px;
      line-height: 28px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      text-align: center;
      font-size: 0.85rem;
      margin-right: 10px;
    }
    .nu-card p { font-size: 0.95rem; color: var(--nu-body-text); }
    .nu-card ul {
      list-style: none;
      padding: 0;
      margin-top: 10px;
    }
    .nu-card li {
      padding-left: 18px;
      position: relative;
      margin-bottom: 7px;
      font-size: 0.94rem;
    }
    .nu-card li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* ══ BADGE ROW ══ */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 22px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-label {
      color: var(--nu-cyan);
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-size: 0.78rem;
      margin-right: 14px;
      min-width: 100px;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 40px;
      margin-top: 20px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 12px;
      top: 6px;
      bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .timeline-item {
      position: relative;
      margin-bottom: 24px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -34px;
      top: 6px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.12);
    }
    .timeline-phase {
      font-size: 0.78rem;
      color: var(--nu-blue);
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-desc { font-size: 0.94rem; color: var(--nu-body-text); }

    /* ══ OFFER TABLE ══ */
    .offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .offer-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .offer-table th, .offer-table td {
      padding: 14px 18px;
      text-align: left;
      font-size: 0.95rem;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .offer-table th {
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    .offer-table tbody tr:last-child td { border-bottom: none; }
    .offer-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .offer-table .tier {
      font-weight: 900;
      color: var(--nu-blue);
    }
    .offer-table .amount {
      font-weight: 900;
      color: var(--nu-dark-text);
    }

    /* ══ DUE DILIGENCE CHECKLIST ══ */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px 32px;
    }
    .checklist h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 14px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px dashed #d0d0d8;
    }
    .checklist-item:last-child { border-bottom: none; }
    .checklist-box {
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      margin-right: 14px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-text {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .checklist-text strong { color: var(--nu-dark-text); }

    /* ══ TALK TRACK ══ */
    .talk-track {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 36px 40px;
    }
    .talk-track h3 {
      font-size: 1.3rem;
      font-weight: 900;
      margin-bottom: 8px;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .talk-track .talk-sub {
      font-size: 0.95rem;
      opacity: 0.85;
      margin-bottom: 22px;
    }
    .talk-block {
      background: rgba(255,255,255,0.08);
      border-left: 3px solid var(--nu-cyan);
      padding: 16px 20px;
      margin-bottom: 14px;
      border-radius: 4px;
    }
    .talk-block .talk-label {
      font-size: 0.75rem;
      color: var(--nu-cyan);
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .talk-block p {
      font-size: 0.98rem;
      line-height: 1.65;
      font-style: italic;
    }

    /* ══ RISK MATRIX ══ */
    .risk-row {
      display: grid;
      grid-template-columns: 140px 1fr 120px;
      gap: 16px;
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: center;
    }
    .risk-row:last-child { border-bottom: none; }
    .risk-label { font-weight: 700; color: var(--nu-dark-text); font-size: 0.95rem; }
    .risk-desc { font-size: 0.9rem; color: var(--nu-body-text); }
    .risk-level {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 0.78rem;
      font-weight: 900;
      text-align: center;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .risk-high { background: #fde8e8; color: #c02020; }
    .risk-med { background: #fff4d9; color: #b37600; }
    .risk-low { background: #e1f6e6; color: #1e7a3a; }

    /* ══ NEXT STEPS ══ */
    .next-steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 18px;
    }
    .next-step {
      background: var(--nu-white);
      border: 2px solid var(--nu-blue);
      border-radius: 8px;
      padding: 18px 20px;
      text-align: left;
      position: relative;
    }
    .next-step .num {
      position: absolute;
      top: -12px; left: 16px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      width: 26px; height: 26px;
      line-height: 26px;
      text-align: center;
      border-radius: 50%;
      font-size: 0.82rem;
    }
    .next-step h5 {
      font-size: 0.95rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin: 8px 0 6px;
    }
    .next-step p {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.8rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.06em;
    }

    /* ══ CONFIDENTIAL STRIPE ══ */
    .confidential {
      background: #1a1a2e;
      color: var(--nu-cyan);
      text-align: center;
      padding: 10px;
      font-size: 0.78rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      font-weight: 700;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .nu-grid-2, .nu-grid-3 { grid-template-columns: 1fr; }
      .property-hero { grid-template-columns: 1fr; padding: 26px; }
      .next-steps { grid-template-columns: 1fr 1fr; }
      .risk-row { grid-template-columns: 1fr; gap: 6px; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 44px 22px 66px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px 60px; }
      .property-hero-title { font-size: 1.4rem; }
      .next-steps { grid-template-columns: 1fr; }
      .offer-table th, .offer-table td { padding: 10px; font-size: 0.85rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .confidential { background: #1a1a2e !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <div class="confidential">Confidential &middot; Aaron C. Norris &middot; Personal Acquisition Strategy</div>

  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-page-label">Estate Acquisition Strategy</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <!-- HERO CARD -->
      <section class="property-hero">
        <div>
          <div class="property-hero-head">Negotiation Target</div>
          <h1 class="property-hero-title">4505 Buttewoods — 7,098 sq ft Estate</h1>
          <p class="property-hero-sub">Private acquisition strategy for the Buttewoods estate. Objective: secure the property below market, with terms that protect the business (Norris Utilities®) and the household during closing and post-possession.</p>
          <p class="property-hero-sub"><strong>Action item source:</strong> reMarkable capture &middot; Logged 2026-04-21 &middot; Owner: Aaron C. Norris</p>
        </div>
        <div class="property-hero-stats">
          <div class="stat-box">
            <div class="stat-label">Address</div>
            <div class="stat-value" style="font-size:1rem;">4505 Buttewoods</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Living Area</div>
            <div class="stat-value">7,098 sq ft</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Status</div>
            <div class="stat-value" style="font-size:1rem;">Negotiation Phase</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Priority</div>
            <div class="stat-value" style="font-size:1rem;">High</div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Acquisition <span>Objectives</span></h2>
        <div class="nu-section-underline"></div>
        <div class="nu-grid-3">
          <div class="nu-card">
            <h3><span class="num">1</span>Price</h3>
            <p>Secure an accepted price at or below comparable sales for 6,500–7,500 sq ft estates in the submarket, with documented appraisal support.</p>
          </div>
          <div class="nu-card">
            <h3><span class="num">2</span>Terms</h3>
            <p>Contingency-protected contract: appraisal, financing, inspection, title, and survey. Earnest money structured to minimize exposure.</p>
          </div>
          <div class="nu-card">
            <h3><span class="num">3</span>Timing</h3>
            <p>Close timeline that aligns with business cash flow and does not compete with active inventory purchases or open Skylift PO obligations.</p>
          </div>
        </div>
      </section>

      <!-- KEY FACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Property <span>Intelligence to Gather</span></h2>
        <div class="nu-section-underline"></div>
        <div class="nu-grid-2">
          <div class="nu-card">
            <h3>Hard Data</h3>
            <ul>
              <li>Current listing price vs. original list price &mdash; and count of price drops</li>
              <li>Days on market (DOM) &mdash; long DOM strengthens buyer leverage</li>
              <li>Last sale price and date &mdash; seller's cost basis</li>
              <li>Tax assessed value and most recent appraisal</li>
              <li>Bedrooms, bathrooms, lot size, year built, major systems age</li>
              <li>Active liens, back taxes, or HOA arrears (title pull)</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Seller Intelligence</h3>
            <ul>
              <li>Motivation for selling &mdash; relocation, divorce, estate, downsizing</li>
              <li>Timeline urgency &mdash; are they carrying two mortgages?</li>
              <li>Prior offers received and why they fell through</li>
              <li>Is the seller the original owner or an investor?</li>
              <li>Any known defects disclosed or rumored</li>
              <li>Listing agent's temperament &mdash; aggressive vs. collaborative</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- OFFER STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Offer <span>Strategy &amp; Tiers</span></h2>
        <div class="nu-section-underline"></div>
        <p style="margin-bottom:18px; color:var(--nu-body-text);">Three-tier offer ladder. Open low with strong terms, escalate only if the seller counters with movement. Do not bid against yourself.</p>
        <table class="offer-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Price Posture</th>
              <th>Terms</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tier">Tier 1 — Opening</td>
              <td class="amount">85–88% of list</td>
              <td>All standard contingencies, 30-day close, 1% earnest</td>
              <td>First offer. Signals seriousness without overcommitting.</td>
            </tr>
            <tr>
              <td class="tier">Tier 2 — Walk-Point</td>
              <td class="amount">90–93% of list</td>
              <td>Shortened inspection window, 2% earnest, appraisal gap of $10K</td>
              <td>If seller counters within 5% of list. This is the target close range.</td>
            </tr>
            <tr>
              <td class="tier">Tier 3 — Ceiling</td>
              <td class="amount">95% of list &mdash; firm</td>
              <td>Clean contract, flexible close date, seller-favorable possession</td>
              <td>Only if inspection and appraisal support it. Beyond this, walk.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Timeline</span></h2>
        <div class="nu-section-underline"></div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-phase">Phase 1 &middot; Week 1</div>
            <div class="timeline-title">Intelligence &amp; Pre-Offer Prep</div>
            <div class="timeline-desc">Pull comps, tax records, and title. Drive-by property. Talk to listing agent in discovery mode only &mdash; no price commitment. Pre-qualify financing before showing hand.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 2 &middot; Week 2</div>
            <div class="timeline-title">Walk-Through &amp; Seller Read</div>
            <div class="timeline-desc">Schedule showing. Assess condition firsthand. Read seller's body language and agent's urgency. Identify any specific condition issues usable as negotiation leverage.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 3 &middot; Week 2–3</div>
            <div class="timeline-title">Tier 1 Offer Submitted</div>
            <div class="timeline-desc">Written offer at 85–88% of list with 48-hour response deadline. Include pre-approval letter. Never verbal &mdash; always on paper with a deadline.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 4 &middot; Week 3–4</div>
            <div class="timeline-title">Counter &amp; Escalation</div>
            <div class="timeline-desc">Evaluate counter against Tier 2 walk-point. Counter once with real movement, not cosmetic. If seller will not cross the threshold, pause negotiations &mdash; silence is leverage.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 5 &middot; Week 5–6</div>
            <div class="timeline-title">Inspection &amp; Re-Trade</div>
            <div class="timeline-desc">Professional inspection. Use findings to request price reduction or seller credits. This is the second negotiation &mdash; frequently worth 1–3% of contract price.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 6 &middot; Week 7–8</div>
            <div class="timeline-title">Close</div>
            <div class="timeline-desc">Final walk-through 24 hours before close. Wire funds from a dedicated, pre-verified account. Title transfer, keys, possession handover.</div>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Due <span>Diligence Checklist</span></h2>
        <div class="nu-section-underline"></div>
        <div class="nu-grid-2">
          <div class="checklist">
            <h4>Property</h4>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>Inspection</strong> &mdash; full professional, including roof, HVAC, electrical, plumbing, foundation</div></div>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>Termite / WDI</strong> &mdash; separate Alabama-specific inspection</div></div>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>Sewer scope</strong> &mdash; cheap, prevents six-figure surprises</div></div>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>Appraisal</strong> &mdash; lender-ordered, independent</div></div>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>Survey</strong> &mdash; boundary and easement verification</div></div>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>Flood zone</strong> &mdash; FEMA map check + insurance quote</div></div>
          </div>
          <div class="checklist">
            <h4>Legal &amp; Financial</h4>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>Title search</strong> &mdash; liens, judgments, easements, chain of title</div></div>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>Title insurance</strong> &mdash; owner's policy, not just lender's</div></div>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>HOA documents</strong> &mdash; covenants, bylaws, financials, reserve study</div></div>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>Property tax history</strong> &mdash; 5-year trend, reassessment risk</div></div>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>Insurance binder</strong> &mdash; quote in hand before inspection period ends</div></div>
            <div class="checklist-item"><div class="checklist-box"></div><div class="checklist-text"><strong>Disclosure review</strong> &mdash; seller disclosure vs. inspection findings</div></div>
          </div>
        </div>
      </section>

      <!-- LEVERAGE & BADGES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Leverage <span>Points in Your Favor</span></h2>
        <div class="nu-section-underline"></div>
        <div class="nu-badge"><span class="nu-badge-label">Cash Strength</span>Pre-approved financing and documented liquidity — sellers value certainty of close over a slightly higher-priced but risky buyer.</div>
        <div class="nu-badge"><span class="nu-badge-label">No Home Sale</span>Not contingent on selling an existing home — removes a common deal-killer and justifies lower offers.</div>
        <div class="nu-badge"><span class="nu-badge-label">Flex Close</span>Offer the seller their preferred close date (fast or slow) — timing flexibility is often worth 2–3%.</div>
        <div class="nu-badge"><span class="nu-badge-label">Clean Contract</span>Minimum modifications to standard purchase agreement — fewer red flags for the seller's attorney to chase.</div>
        <div class="nu-badge"><span class="nu-badge-label">Local Reputation</span>Third-generation Birmingham business owner, Norris Utilities® — reputation precedes the offer and reduces perceived risk.</div>
      </section>

      <!-- RISK MATRIX -->
      <section class="nu-section">
        <h2 class="nu-section-title">Risk <span>Matrix</span></h2>
        <div class="nu-section-underline"></div>
        <div class="nu-card" style="padding:12px 18px;">
          <div class="risk-row">
            <div class="risk-label">Overpaying</div>
            <div class="risk-desc">Seller anchors high; emotions override comps. Mitigate: strict appraisal contingency, predetermined walk-point.</div>
            <div><span class="risk-level risk-high">High</span></div>
          </div>
          <div class="risk-row">
            <div class="risk-label">Hidden Defects</div>
            <div class="risk-desc">7,098 sq ft means long systems runs and large roof area. Mitigate: full inspection + sewer scope + WDI.</div>
            <div><span class="risk-level risk-high">High</span></div>
          </div>
          <div class="risk-row">
            <div class="risk-label">Title Issues</div>
            <div class="risk-desc">Large estates often carry easements or prior-owner liens. Mitigate: owner's title policy, full title search.</div>
            <div><span class="risk-level risk-med">Medium</span></div>
          </div>
          <div class="risk-row">
            <div class="risk-label">Financing Delay</div>
            <div class="risk-desc">Jumbo loan process can extend close timeline. Mitigate: pre-approval in writing, lender selected before offer.</div>
            <div><span class="risk-level risk-med">Medium</span></div>
          </div>
          <div class="risk-row">
            <div class="risk-label">Tax Reassessment</div>
            <div class="risk-desc">Large property sale may trigger upward reassessment in subsequent tax year. Mitigate: model future tax burden into affordability.</div>
            <div><span class="risk-level risk-med">Medium</span></div>
          </div>
          <div class="risk-row">
            <div class="risk-label">Business Cash Flow Impact</div>
            <div class="risk-desc">Norris Utilities® carrying open Skylift PO and inventory obligations. Mitigate: keep business operating capital untouched; separate personal funds for closing.</div>
            <div><span class="risk-level risk-high">High</span></div>
          </div>
          <div class="risk-row">
            <div class="risk-label">Market Shift</div>
            <div class="risk-desc">High-end Birmingham inventory can sit. Mitigate: patience — time is on the buyer's side for 7,000+ sq ft homes.</div>
            <div><span class="risk-level risk-low">Low</span></div>
          </div>
        </div>
      </section>

      <!-- TALK TRACK -->
      <section class="nu-section">
        <div class="talk-track">
          <h3>Negotiation Talk Track</h3>
          <div class="talk-sub">Scripts for the first three conversations. Warm, direct, confident — Aaron's voice.</div>

          <div class="talk-block">
            <div class="talk-label">Opening Call with Listing Agent</div>
            <p>"Appreciate you taking the time. I'm looking seriously at 4505 Buttewoods. Before we talk price, help me understand the seller — what's their timeline, and what's pushing them to sell? I want to make sure any offer I put together actually works for them."</p>
          </div>

          <div class="talk-block">
            <div class="talk-label">Submitting the Tier 1 Offer</div>
            <p>"My offer is on paper, pre-approval attached, 48-hour response. It's below list — I know that. I'm not insulting your seller; I'm starting a conversation. Inspection comes next, and I'd rather we both know where we stand up front. If this isn't workable, tell me what is."</p>
          </div>

          <div class="talk-block">
            <div class="talk-label">Responding to a Soft Counter</div>
            <p>"I hear where the seller is. I'm not there today, but I can move if the terms make sense. Here's what I can do — [Tier 2 number] with [specific term]. That's a real number. If it works, let's paper it. If not, I'll step back and let the market tell us both where this should land."</p>
          </div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Immediate <span>Next Steps</span></h2>
        <div class="nu-section-underline"></div>
        <div class="next-steps">
          <div class="next-step">
            <div class="num">1</div>
            <h5>Pull Comps</h5>
            <p>Last 12 months, 6,000–8,000 sq ft within 2-mile radius. Attorney + agent cross-check.</p>
          </div>
          <div class="next-step">
            <div class="num">2</div>
            <h5>Financing Letter</h5>
            <p>Pre-approval from Patrick Lavette at Renasant Bank before any offer is submitted.</p>
          </div>
          <div class="next-step">
            <div class="num">3</div>
            <h5>Attorney Retained</h5>
            <p>Real estate attorney engaged for contract review and title opinion before offer.</p>
          </div>
          <div class="next-step">
            <div class="num">4</div>
            <h5>Schedule Showing</h5>
            <p>In-person walk-through within 7 days. Bring contractor for informal condition read.</p>
          </div>
        </div>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Confidential — Personal Acquisition Strategy — 4505 Buttewoods — Logged 2026-04-21</div>
  </footer>

</body>
</html>