<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Acquisition Brief — Norris Utilities®</title>
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
      --nu-warning: #C77A1F;
      --nu-danger: #B23A3A;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
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
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* DOCUMENT META */
    .doc-meta {
      max-width: 1200px;
      margin: 30px auto 0;
      padding: 0 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .doc-meta .pill {
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 20px;
      font-weight: 700;
      letter-spacing: 0.08em;
    }
    .doc-meta .pill.confidential {
      background: var(--nu-danger);
    }

    /* MAIN CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      max-width: 1200px;
      margin: 30px auto 40px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.08);
      border-radius: 8px;
      overflow: hidden;
    }
    .content-inner {
      padding: 50px 50px 60px;
    }

    /* SECTION TITLE */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: -0.005em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin-bottom: 24px;
      border-radius: 2px;
    }
    section { margin-bottom: 48px; }

    /* HERO PROPERTY CARD */
    .property-hero {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 50%, #002299 100%);
      color: var(--nu-white);
      padding: 36px 36px 32px;
      border-radius: 8px;
      margin-bottom: 36px;
      position: relative;
      overflow: hidden;
    }
    .property-hero::before {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 60%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
    }
    .property-hero > * { position: relative; z-index: 2; }
    .property-eyebrow {
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .property-address {
      font-size: 2rem;
      font-weight: 900;
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .property-sub {
      font-size: 1rem;
      color: rgba(255,255,255,0.8);
      margin-bottom: 24px;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      padding-top: 22px;
      border-top: 1px solid rgba(255,255,255,0.18);
    }
    .stat-block .stat-label {
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.7);
      margin-bottom: 6px;
    }
    .stat-block .stat-value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-white);
      line-height: 1.1;
    }
    .stat-block .stat-unit {
      font-size: 0.85rem;
      color: var(--nu-cyan);
      font-weight: 400;
    }

    /* OBJECTIVE BOX */
    .objective-box {
      background: var(--nu-light-gray);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 4px;
      margin-bottom: 16px;
    }
    .objective-box h4 {
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 8px;
      font-size: 1.05rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .objective-box p {
      color: var(--nu-dark-text);
      font-size: 1rem;
    }

    /* PRICING TABLE */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-bottom: 16px;
    }
    .price-card {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 20px;
      text-align: center;
      transition: all 0.2s ease;
    }
    .price-card.target {
      border-color: var(--nu-blue);
      background: linear-gradient(180deg, #f0f4ff 0%, var(--nu-white) 100%);
      transform: scale(1.03);
      box-shadow: 0 6px 20px rgba(0, 0, 255, 0.12);
    }
    .price-card-label {
      font-size: 0.75rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .price-card.target .price-card-label { color: var(--nu-blue); }
    .price-card-value {
      font-size: 1.85rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .price-card.target .price-card-value { color: var(--nu-blue); }
    .price-card-note {
      font-size: 0.82rem;
      color: var(--nu-body-text);
    }
    .price-card-tag {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.65rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 12px;
      margin-bottom: 10px;
    }

    /* STRATEGY TABLE */
    table.strategy-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .strategy-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 100%);
      color: var(--nu-white);
    }
    .strategy-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .strategy-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .strategy-table tr:nth-child(even) td {
      background: #fafafc;
    }
    .strategy-table .phase-num {
      font-weight: 900;
      color: var(--nu-blue);
      width: 60px;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 12px 0 12px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.97rem;
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 16px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 900;
      display: block;
      margin-bottom: 2px;
    }
    .checklist li .meta {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      font-style: italic;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }

    /* INFO LIST */
    .info-list {
      background: var(--nu-light-gray);
      border-radius: 6px;
      padding: 20px 22px;
    }
    .info-list h4 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.95rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .info-list dl {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px 14px;
      font-size: 0.92rem;
    }
    .info-list dt {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .info-list dd { color: var(--nu-body-text); }

    /* RISK CARDS */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .risk-card {
      border-left: 4px solid var(--nu-warning);
      background: #fff8ed;
      padding: 16px 18px;
      border-radius: 4px;
    }
    .risk-card.high {
      border-left-color: var(--nu-danger);
      background: #fdf0f0;
    }
    .risk-card.low {
      border-left-color: var(--nu-success);
      background: #f0f8f2;
    }
    .risk-card h5 {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .risk-level {
      display: inline-block;
      font-size: 0.65rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 10px;
      margin-bottom: 8px;
      color: var(--nu-white);
      background: var(--nu-warning);
    }
    .risk-card.high .risk-level { background: var(--nu-danger); }
    .risk-card.low .risk-level { background: var(--nu-success); }
    .risk-card p { font-size: 0.88rem; line-height: 1.5; }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
      border-left: 3px solid var(--nu-cyan);
      margin-left: 8px;
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -41px;
      top: 4px;
      width: 16px;
      height: 16px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-cyan);
    }
    .timeline-day {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-action { font-size: 0.95rem; color: var(--nu-dark-text); }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f0f7ff 0%, #e6f2ff 100%);
      border: 1px solid #c8def5;
      border-radius: 8px;
      padding: 22px 26px;
      margin: 16px 0;
    }
    .callout strong { color: var(--nu-blue); }

    /* DECISION BOX */
    .decision-box {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0044dd 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin-top: 36px;
    }
    .decision-box h3 {
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .decision-box p { font-size: 1rem; margin-bottom: 14px; opacity: 0.95; }
    .decision-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 16px;
    }
    .decision-btn {
      display: inline-block;
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 12px 22px;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .decision-btn.outline {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }
    .decision-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px 36px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .property-stats { grid-template-columns: repeat(2, 1fr); gap: 14px; }
      .pricing-grid { grid-template-columns: 1fr; }
      .price-card.target { transform: none; }
      .two-col { grid-template-columns: 1fr; }
      .risk-grid { grid-template-columns: 1fr; }
      .content-inner { padding: 32px 24px 40px; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .property-address { font-size: 1.4rem; }
      .property-hero { padding: 24px 22px 22px; }
      .doc-meta { padding: 0 20px; font-size: 0.75rem; }
      .strategy-table th, .strategy-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-content-area { box-shadow: none; margin: 0; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .decision-box { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC META -->
  <div class="doc-meta">
    <div>
      <span class="pill confidential">Confidential</span>
      <span style="margin-left:10px;">Acquisition Brief · Internal Working Document</span>
    </div>
    <div>Prepared 2026-04-25 · Aaron C. Norris</div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="content-inner">

      <!-- HERO PROPERTY CARD -->
      <section style="margin-bottom: 36px;">
        <div class="property-hero">
          <div class="property-eyebrow">Target Property · Negotiation Brief</div>
          <div class="property-address">4505 Buttewoods</div>
          <div class="property-sub">Single-family estate · Birmingham metro · Off-market negotiation</div>
          <div class="property-stats">
            <div class="stat-block">
              <div class="stat-label">Living Area</div>
              <div class="stat-value">7,098 <span class="stat-unit">sq ft</span></div>
            </div>
            <div class="stat-block">
              <div class="stat-label">Property Type</div>
              <div class="stat-value">Estate</div>
            </div>
            <div class="stat-block">
              <div class="stat-label">Approach</div>
              <div class="stat-value">Direct</div>
            </div>
            <div class="stat-block">
              <div class="stat-label">Status</div>
              <div class="stat-value">Active</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 1. OBJECTIVE -->
      <section>
        <h2 class="nu-section-title">Objective<span> &amp; Scope</span></h2>
        <div class="nu-section-rule"></div>
        <div class="objective-box">
          <h4>Primary Objective</h4>
          <p>Negotiate the purchase of the 7,098 sq ft estate located at 4505 Buttewoods at terms that protect downside risk, secure clean title, and close on a timeline that aligns with Aaron's personal financing window.</p>
        </div>
        <p style="margin-top: 14px;">This brief is a working document. It captures the offer ladder, due-diligence checklist, negotiation script, and decision criteria so the transaction can move at the pace of the seller without losing leverage. Figures are entered as soon as comparable sales, appraisal data, and inspection results become available — no estimates are recorded as fact until verified.</p>
      </section>

      <!-- 2. OFFER LADDER -->
      <section>
        <h2 class="nu-section-title">Offer<span> Ladder</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 20px;">Three-tier ladder. Open at the anchor, hold the target as the walk-up, and never cross the ceiling without written justification (new comp, repaired major defect, seller financing concession). Final dollar figures populate after Round 1 of comp pulls.</p>

        <div class="pricing-grid">
          <div class="price-card">
            <div class="price-card-label">Anchor (Opening)</div>
            <div class="price-card-value">— Pending Comps —</div>
            <div class="price-card-note">Tied to lowest defensible CMA</div>
          </div>
          <div class="price-card target">
            <div class="price-card-tag">Target Close</div>
            <div class="price-card-label">Target Strike</div>
            <div class="price-card-value">— Pending Comps —</div>
            <div class="price-card-note">Within 3% of appraised value</div>
          </div>
          <div class="price-card">
            <div class="price-card-label">Ceiling (Walk-Away)</div>
            <div class="price-card-value">— Pending Comps —</div>
            <div class="price-card-note">Above this, deal is dead</div>
          </div>
        </div>

        <div class="callout">
          <strong>Pricing rule:</strong> Final numbers are not entered until (1) three closed comps within 12 months and 1 mile are in hand, (2) independent appraisal is ordered, and (3) repair credits from inspection are quantified. Aaron approves the three figures in writing before Round 1 offer is presented.
        </div>
      </section>

      <!-- 3. NEGOTIATION STRATEGY -->
      <section>
        <h2 class="nu-section-title">Negotiation<span> Strategy</span></h2>
        <div class="nu-section-rule"></div>
        <table class="strategy-table">
          <thead>
            <tr>
              <th>Phase</th>
              <th>Action</th>
              <th>Owner</th>
              <th>Outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="phase-num">01</td>
              <td>Verify ownership of record, mortgage balance, lien status, and prior listing history through county records.</td>
              <td>Aaron</td>
              <td>Confirm seller's true motivation and equity position before first contact.</td>
            </tr>
            <tr>
              <td class="phase-num">02</td>
              <td>Pull three closed comps within 1 mile, last 12 months, similar sq ft, and order broker price opinion.</td>
              <td>Aaron / Agent</td>
              <td>Establish the anchor, target, and ceiling figures with defensible math.</td>
            </tr>
            <tr>
              <td class="phase-num">03</td>
              <td>Open dialogue directly with seller. Lead with respect for the property; ask why they are open to selling.</td>
              <td>Aaron</td>
              <td>Identify whether this is a price, timeline, or terms negotiation. Listen first.</td>
            </tr>
            <tr>
              <td class="phase-num">04</td>
              <td>Present Round 1 written offer at the anchor. Include earnest money, financing contingency, and 14-day inspection window.</td>
              <td>Aaron</td>
              <td>Anchor the conversation. Force a written counter so terms are on paper.</td>
            </tr>
            <tr>
              <td class="phase-num">05</td>
              <td>Negotiate to target. Use repair credits, closing-cost concessions, and possession date as currency before raising price.</td>
              <td>Aaron</td>
              <td>Land within 3% of appraisal with terms in our favor.</td>
            </tr>
            <tr>
              <td class="phase-num">06</td>
              <td>Execute purchase agreement, open escrow, and start the 14-day inspection / 30-day close clock.</td>
              <td>Aaron / Closing Attorney</td>
              <td>Binding contract with clear contingency outs.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 4. DUE DILIGENCE CHECKLIST -->
      <section>
        <h2 class="nu-section-title">Due-Diligence<span> Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <ul class="checklist">
          <li>
            <strong>Title search and 50-year chain of ownership</strong>
            <span class="meta">Closing attorney · before binding offer</span>
          </li>
          <li>
            <strong>County tax assessor record — current valuation, exemptions, delinquencies</strong>
            <span class="meta">Aaron · within 48 hours of first contact</span>
          </li>
          <li>
            <strong>Three closed comparable sales — within 12 months, 1 mile, similar sq ft</strong>
            <span class="meta">Listing agent or independent broker · before Round 1 offer</span>
          </li>
          <li>
            <strong>Independent appraisal (not bank-ordered)</strong>
            <span class="meta">Licensed appraiser · once seller agrees to negotiate</span>
          </li>
          <li>
            <strong>Full structural, electrical, plumbing, HVAC, and roof inspection</strong>
            <span class="meta">Licensed inspector · within 14-day inspection window</span>
          </li>
          <li>
            <strong>Termite letter and moisture report</strong>
            <span class="meta">Licensed pest control · within inspection window</span>
          </li>
          <li>
            <strong>Survey to confirm acreage, easements, and setback compliance</strong>
            <span class="meta">Surveyor · before clear-to-close</span>
          </li>
          <li>
            <strong>HOA / covenant review if applicable, including any pending assessments</strong>
            <span class="meta">Aaron · before binding offer</span>
          </li>
          <li>
            <strong>Insurance bind quote — confirm property is insurable at reasonable rate</strong>
            <span class="meta">Aaron's broker · within inspection window</span>
          </li>
          <li>
            <strong>Verify no probate, divorce, or judgment encumbrance on seller</strong>
            <span class="meta">Closing attorney · concurrent with title</span>
          </li>
        </ul>
      </section>

      <!-- 5. SELLER PROFILE & FINANCING -->
      <section>
        <h2 class="nu-section-title">Seller Profile<span> &amp; Financing</span></h2>
        <div class="nu-section-rule"></div>
        <div class="two-col">
          <div class="info-list">
            <h4>Seller Intelligence to Confirm</h4>
            <dl>
              <dt>Owner of record:</dt><dd>Pull from Jefferson County records</dd>
              <dt>Years held:</dt><dd>Calculate from deed date</dd>
              <dt>Mortgage balance:</dt><dd>Estimate from public lien filings</dd>
              <dt>Listing history:</dt><dd>Prior MLS attempts and price points</dd>
              <dt>Motivation signal:</dt><dd>Relocation / estate / financial / lifestyle</dd>
              <dt>Decision makers:</dt><dd>Sole owner, joint, or trust</dd>
            </dl>
          </div>
          <div class="info-list">
            <h4>Aaron's Financing Posture</h4>
            <dl>
              <dt>Financing path:</dt><dd>Pre-approval required before written offer</dd>
              <dt>Lender:</dt><dd>Patrick Lavette — Renasant Bank</dd>
              <dt>Earnest money:</dt><dd>1%–2% of purchase, refundable until end of inspection window</dd>
              <dt>Down payment:</dt><dd>Confirmed before contract signature</dd>
              <dt>Closing timeline:</dt><dd>30 days from binding offer, target</dd>
              <dt>Closing attorney:</dt><dd>To be confirmed by Aaron</dd>
            </dl>
          </div>
        </div>
        <div class="callout" style="margin-top: 22px;">
          <strong>Personal vs. business:</strong> This transaction is personal — it is not on Norris Utilities®, LLC's books and does not draw on the company's working capital, vendor credit, or insurance. All correspondence on this property uses Aaron's personal email and phone, kept entirely separate from Norris Utilities® customer-facing channels.
        </div>
      </section>

      <!-- 6. RISK REGISTER -->
      <section>
        <h2 class="nu-section-title">Risk<span> Register</span></h2>
        <div class="nu-section-rule"></div>
        <div class="risk-grid">
          <div class="risk-card high">
            <span class="risk-level">High</span>
            <h5>Title or Lien Defect</h5>
            <p>An unresolved lien, easement dispute, or chain-of-title gap on a 7,098 sq ft estate can stall closing or compromise resale. Mitigation: full attorney title opinion before binding offer.</p>
          </div>
          <div class="risk-card high">
            <span class="risk-level">High</span>
            <h5>Hidden Structural Defect</h5>
            <p>Estates of this size carry concealed roof, foundation, or HVAC issues that exceed $50K to remediate. Mitigation: licensed inspection and reserve a written repair-credit clause in the offer.</p>
          </div>
          <div class="risk-card">
            <span class="risk-level">Med</span>
            <h5>Appraisal Gap</h5>
            <p>Independent appraisal may come in below the negotiated price, triggering a financing shortfall. Mitigation: appraisal contingency written into Round 1 offer.</p>
          </div>
          <div class="risk-card">
            <span class="risk-level">Med</span>
            <h5>Seller Withdrawal</h5>
            <p>Off-market sellers can pull back when the offer becomes real. Mitigation: capture verbal alignment in writing within 72 hours of first conversation.</p>
          </div>
          <div class="risk-card low">
            <span class="risk-level">Low</span>
            <h5>Insurance Refusal</h5>
            <p>Property age or claims history could limit coverage. Mitigation: bind quote ordered the same day inspection is scheduled.</p>
          </div>
          <div class="risk-card low">
            <span class="risk-level">Low</span>
            <h5>Tax Reassessment</h5>
            <p>Sale price may trigger an upward county reassessment. Mitigation: model post-close annual carrying cost before submitting Round 1 offer.</p>
          </div>
        </div>
      </section>

      <!-- 7. TIMELINE -->
      <section>
        <h2 class="nu-section-title">30-Day<span> Negotiation Timeline</span></h2>
        <div class="nu-section-rule"></div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-day">Day 1–2</div>
            <div class="timeline-action">Pull county records, ownership history, lien filings, and tax data on 4505 Buttewoods. Confirm seller identity and decision authority.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 3–5</div>
            <div class="timeline-action">Pull three closed comps. Run anchor / target / ceiling math. Aaron approves the three figures in writing.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 6</div>
            <div class="timeline-action">Direct conversation with seller. Goal: understand motivation, build rapport, and request authorization to put a written offer on paper.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 7–9</div>
            <div class="timeline-action">Submit Round 1 offer at anchor. Include earnest money, 14-day inspection window, financing contingency, and target close date.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 10–14</div>
            <div class="timeline-action">Negotiate counter-offers. Trade non-price terms (closing date, possession, fixtures, repair credits) before raising price toward target.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 15</div>
            <div class="timeline-action">Sign binding purchase agreement. Open escrow. Order inspection, appraisal, survey, and termite letter the same day.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 16–28</div>
            <div class="timeline-action">Inspection window. Negotiate repair credits if findings exceed $5K. Lock financing. Confirm clear title.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 29–30</div>
            <div class="timeline-action">Final walk-through. Close. Possession transfers per agreement.</div>
          </div>
        </div>
      </section>

      <!-- 8. WALK-AWAY TRIGGERS -->
      <section>
        <h2 class="nu-section-title">Walk-Away<span> Triggers</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 16px;">If any one of the following surfaces, the deal is paused or terminated. No exception is made for emotional momentum.</p>
        <ul class="checklist">
          <li><strong>Seller refuses to provide written disclosure of known defects.</strong></li>
          <li><strong>Title search reveals unresolved lien, easement, or ownership dispute that cannot be cleared before close.</strong></li>
          <li><strong>Inspection identifies more than $50,000 in mandatory repairs and seller refuses credit.</strong></li>
          <li><strong>Independent appraisal returns more than 5% below the negotiated price and seller refuses to adjust.</strong></li>
          <li><strong>Property is uninsurable at standard rates.</strong></li>
          <li><strong>Final price exceeds the written ceiling without a documented justification.</strong></li>
        </ul>
      </section>

      <!-- DECISION BOX -->
      <div class="decision-box">
        <h3>Aaron's Next Decision</h3>
        <p>Approve the three offer figures (anchor / target / ceiling) once comps are in hand, then green-light the Day 6 direct conversation with the seller. No outreach happens before that approval.</p>
        <p style="margin-bottom: 0; font-size: 0.92rem;">Owner: Aaron C. Norris · Status: Awaiting comp pull · Next checkpoint: within 5 business days</p>
        <div class="decision-actions">
          <a href="tel:2055001343" class="decision-btn">Call to Approve · 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Acquisition%20Brief%20Approval" class="decision-btn outline">Reply by Email</a>
        </div>
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
    <div class="nu-footer-meta">
      Confidential — internal acquisition brief. Not a binding offer. Prepared 2026-04-25.
    </div>
  </footer>

</body>
</html>