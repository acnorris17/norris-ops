<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #1a7f3c;
      --nu-warning: #d97706;
      --nu-danger: #c1272d;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
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
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -30%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 65%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px; height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.25);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.03em;
    }

    /* GHOST PHOENIX WATERMARK IN HEADER */
    .nu-header-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: auto;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 0 0 60px;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 50px 40px;
    }

    /* PAGE TITLE BLOCK */
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 3px solid var(--nu-blue);
      margin-bottom: 30px;
    }
    .nu-doc-label {
      font-size: 0.78rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      letter-spacing: -0.01em;
    }
    .nu-doc-title span { color: var(--nu-blue); }
    .nu-doc-status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #fef3c7;
      color: #92400e;
      border: 1px solid #f59e0b;
      padding: 8px 16px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-doc-status::before {
      content: '';
      display: inline-block;
      width: 8px; height: 8px;
      background: #f59e0b;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .accent {
      color: var(--nu-blue);
    }

    /* PROPERTY CARD */
    .property-card {
      background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.05);
      margin-bottom: 24px;
    }
    .property-address {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .property-subtitle {
      font-style: italic;
      color: var(--nu-body-text);
      margin-bottom: 20px;
      font-size: 0.95rem;
    }

    .specs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .spec-cell {
      background: var(--nu-white);
      padding: 18px 16px;
      text-align: center;
    }
    .spec-value {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 4px;
    }
    .spec-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-body-text);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* STRATEGY GRID */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      transition: all 0.2s ease;
      position: relative;
    }
    .strategy-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,255,0.08);
      border-color: var(--nu-blue);
    }
    .strategy-number {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 28px; height: 28px;
      border-radius: 50%;
      text-align: center;
      line-height: 28px;
      font-weight: 900;
      font-size: 0.85rem;
      margin-bottom: 12px;
    }
    .strategy-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .strategy-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ACTION TIMELINE */
    .timeline {
      position: relative;
      padding-left: 40px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .timeline-item {
      position: relative;
      padding-bottom: 24px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -32px;
      top: 4px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 4px rgba(0,0,255,0.08);
    }
    .timeline-item.active::before {
      background: var(--nu-cyan);
      border-color: var(--nu-blue);
      animation: pulse 2s infinite;
    }
    .timeline-phase {
      font-weight: 900;
      font-size: 0.78rem;
      color: var(--nu-blue);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .timeline-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 24px;
      border: 1px solid var(--nu-medium-gray);
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist-item:last-child { border-bottom: none; }
    .checklist-check {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
      margin-top: 2px;
    }
    .checklist-text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .checklist-text strong { color: var(--nu-blue); }

    /* FINANCIAL TABLE */
    .finance-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .finance-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .finance-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .finance-table tr:last-child td { border-bottom: none; }
    .finance-table tr:nth-child(even) { background: var(--nu-light-gray); }
    .finance-table .num {
      text-align: right;
      font-variant-numeric: tabular-nums;
      font-weight: 700;
    }
    .finance-table .total-row {
      background: #eff6ff !important;
      font-weight: 900;
    }
    .finance-table .total-row td {
      border-top: 2px solid var(--nu-blue);
      color: var(--nu-dark-text);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 0 8px 8px 0;
      margin: 24px 0;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout-body {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .callout.warning {
      background: linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%);
      border-left-color: #f59e0b;
    }
    .callout.warning .callout-title { color: #92400e; }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    /* CONTACT CARD */
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .contact-role {
      font-size: 0.75rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .contact-name {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .contact-detail {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .contact-detail a {
      color: var(--nu-blue);
      text-decoration: none;
      font-weight: 700;
    }

    /* BUTTONS */
    .nu-btn-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 28px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 13px 28px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.2s ease;
      border: 2px solid transparent;
      cursor: pointer;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border-color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #000044 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .nu-footer::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan), var(--nu-blue));
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 16px;
      opacity: 0.5;
    }
    .nu-footer-legal {
      margin-top: 20px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.85rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 30px 20px; }
      .nu-doc-title { font-size: 1.5rem; }
      .two-col { grid-template-columns: 1fr; }
      .nu-doc-meta { flex-direction: column; align-items: flex-start; gap: 14px; }
      .timeline { padding-left: 30px; }
      .timeline-item::before { left: -26px; }
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
        print-color-adjust: exact;
      }
      .strategy-card:hover { transform: none; box-shadow: none; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-header-watermark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 20 L112 50 L145 35 L125 70 L165 65 L130 95 L150 135 L115 115 L100 165 L85 115 L50 135 L70 95 L35 65 L75 70 L55 35 L88 50 Z" fill="white"/>
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

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOCUMENT HEADER -->
      <div class="nu-doc-meta">
        <div>
          <div class="nu-doc-label">Private Action Brief · reMarkable Capture</div>
          <h1 class="nu-doc-title">Estate Acquisition — <span>4505 Buttewoods</span></h1>
        </div>
        <div class="nu-doc-status">Negotiation · Active</div>
      </div>

      <div class="callout">
        <div class="callout-title">Objective</div>
        <div class="callout-body">
          Negotiate the purchase of the 7,098 sq ft estate at <strong>4505 Buttewoods</strong>. Arrive at a defensible offer price, secure financing readiness, and open formal dialogue with the listing side with a written letter of intent.
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Property</span> Snapshot</h2>
        <div class="property-card">
          <div class="property-address">4505 Buttewoods</div>
          <div class="property-subtitle">Single-family estate — subject of private acquisition negotiation</div>
          <div class="specs-grid">
            <div class="spec-cell">
              <div class="spec-value">7,098</div>
              <div class="spec-label">Square Feet</div>
            </div>
            <div class="spec-cell">
              <div class="spec-value">Estate</div>
              <div class="spec-label">Property Class</div>
            </div>
            <div class="spec-cell">
              <div class="spec-value">Private</div>
              <div class="spec-label">Deal Track</div>
            </div>
            <div class="spec-cell">
              <div class="spec-value">Open</div>
              <div class="spec-label">Negotiation State</div>
            </div>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Negotiation</span> Strategy</h2>
        <div class="strategy-grid">

          <div class="strategy-card">
            <div class="strategy-number">1</div>
            <div class="strategy-title">Establish Price Anchor</div>
            <div class="strategy-body">
              Pull three independent comparables within a 1-mile radius for homes between 6,000 and 8,500 sq ft, closed in the last 18 months. Use median $/sq ft — not list price — as the anchor.
            </div>
          </div>

          <div class="strategy-card">
            <div class="strategy-number">2</div>
            <div class="strategy-title">Identify Seller Motivation</div>
            <div class="strategy-body">
              Determine days on market, prior list-price reductions, and whether the sale is driven by relocation, estate, divorce, or distress. Motivation dictates leverage.
            </div>
          </div>

          <div class="strategy-card">
            <div class="strategy-number">3</div>
            <div class="strategy-title">Open With Written LOI</div>
            <div class="strategy-body">
              Lead with a clean, signed letter of intent — not a verbal number. Show earnest, proof of funds or pre-approval, and a defined close window. Written beats verbal every time.
            </div>
          </div>

          <div class="strategy-card">
            <div class="strategy-number">4</div>
            <div class="strategy-title">Protect With Contingencies</div>
            <div class="strategy-body">
              Inspection, financing, appraisal, and clear-title contingencies are non-negotiable. Short due-diligence windows can be traded for price concessions where appropriate.
            </div>
          </div>

          <div class="strategy-card">
            <div class="strategy-number">5</div>
            <div class="strategy-title">Hold the Walk-Away Line</div>
            <div class="strategy-body">
              Set the maximum number before the first conversation. If the seller's floor exceeds it, walk. The strongest position in any negotiation is a documented alternative.
            </div>
          </div>

          <div class="strategy-card">
            <div class="strategy-number">6</div>
            <div class="strategy-title">Silence as a Tool</div>
            <div class="strategy-body">
              After the LOI is delivered, do not volunteer a higher number. Let the seller respond. Rushing the follow-up signals weakness — patience signals confidence.
            </div>
          </div>

        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Action</span> Timeline</h2>
        <div class="timeline">

          <div class="timeline-item active">
            <div class="timeline-phase">Phase 1 · This Week</div>
            <div class="timeline-title">Due Diligence &amp; Price Discovery</div>
            <div class="timeline-body">
              Order comparables, county tax records, most recent deed, survey, and any available inspection history. Drive the property. Photograph from the street. Note condition relative to comps.
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-phase">Phase 2 · Days 4–7</div>
            <div class="timeline-title">Financing Confirmation</div>
            <div class="timeline-body">
              Confirm financing path with Patrick Lavette at Renasant Bank — or alternative — and secure a current proof-of-funds or pre-approval letter to accompany the LOI. Do not approach the seller without it.
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-phase">Phase 3 · Week 2</div>
            <div class="timeline-title">Letter of Intent Drafted &amp; Delivered</div>
            <div class="timeline-body">
              Written LOI prepared by counsel, not an agent. Includes offer price, earnest deposit, inspection period, financing contingency, target close date, and expiration. Delivered with POF attached.
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-phase">Phase 4 · Week 3</div>
            <div class="timeline-title">Counter &amp; Negotiate</div>
            <div class="timeline-body">
              Evaluate seller response. Adjust terms — not just price. Consider trading close speed, earnest amount, or contingency timing for price concessions. Document every round in writing.
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-phase">Phase 5 · Week 4+</div>
            <div class="timeline-title">Purchase Agreement &amp; Close</div>
            <div class="timeline-body">
              Upon verbal agreement, move immediately to signed purchase agreement. Open title, schedule inspection, order appraisal. Close within the defined window.
            </div>
          </div>

        </div>
      </section>

      <!-- FINANCIAL FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Financial</span> Framework</h2>
        <table class="finance-table">
          <thead>
            <tr>
              <th>Line Item</th>
              <th>Basis</th>
              <th class="num">Amount / Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ceiling Price (Walk-Away)</td>
              <td>Set before first offer — hard line</td>
              <td class="num">To be set</td>
            </tr>
            <tr>
              <td>Target Offer Price</td>
              <td>Anchored to comp median $/sq ft × 7,098</td>
              <td class="num">To be calculated</td>
            </tr>
            <tr>
              <td>Opening LOI Price</td>
              <td>~5–8% below target to leave negotiation room</td>
              <td class="num">To be calculated</td>
            </tr>
            <tr>
              <td>Earnest Money</td>
              <td>1–3% of offer price, refundable per contingencies</td>
              <td class="num">To be set</td>
            </tr>
            <tr>
              <td>Inspection Reserve</td>
              <td>Estimated repair buffer pending inspection</td>
              <td class="num">To be set</td>
            </tr>
            <tr>
              <td>Closing Costs Estimate</td>
              <td>~2–3% of purchase price</td>
              <td class="num">To be estimated</td>
            </tr>
            <tr class="total-row">
              <td>Total Cash to Close</td>
              <td>Down payment + closing + reserves</td>
              <td class="num">Pending model</td>
            </tr>
          </tbody>
        </table>

        <div class="callout warning" style="margin-top: 20px;">
          <div class="callout-title">Pricing Discipline</div>
          <div class="callout-body">
            Do not fill in target numbers until the comp pull is complete. Anchoring to the list price — rather than to closed comparables — is the single most common negotiating error on estate-class properties.
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Due Diligence</span> Checklist</h2>
        <div class="checklist">

          <div class="checklist-item">
            <div class="checklist-check"></div>
            <div class="checklist-text"><strong>County records pull</strong> — deed history, tax assessment, prior sale prices, and any outstanding liens against the parcel.</div>
          </div>

          <div class="checklist-item">
            <div class="checklist-check"></div>
            <div class="checklist-text"><strong>Comparable sales analysis</strong> — three closed comps minimum, within 18 months, within 1 mile, within 15% of subject square footage.</div>
          </div>

          <div class="checklist-item">
            <div class="checklist-check"></div>
            <div class="checklist-text"><strong>Listing history review</strong> — days on market, price-change history, prior contracts that fell through, and any withdrawal-and-relist pattern.</div>
          </div>

          <div class="checklist-item">
            <div class="checklist-check"></div>
            <div class="checklist-text"><strong>Survey and boundary confirmation</strong> — current or recent survey, easements, and any encroachments.</div>
          </div>

          <div class="checklist-item">
            <div class="checklist-check"></div>
            <div class="checklist-text"><strong>Title search preview</strong> — preliminary title report ordered through counsel before LOI delivery.</div>
          </div>

          <div class="checklist-item">
            <div class="checklist-check"></div>
            <div class="checklist-text"><strong>Financing letter</strong> — current proof of funds or pre-approval dated within 30 days of LOI delivery.</div>
          </div>

          <div class="checklist-item">
            <div class="checklist-check"></div>
            <div class="checklist-text"><strong>Drive-by inspection</strong> — physical visit, roof and exterior condition notes, neighborhood quality at different times of day.</div>
          </div>

          <div class="checklist-item">
            <div class="checklist-check"></div>
            <div class="checklist-text"><strong>Legal counsel engaged</strong> — real estate attorney retained to draft LOI and purchase agreement, not a standard agent form.</div>
          </div>

          <div class="checklist-item">
            <div class="checklist-check"></div>
            <div class="checklist-text"><strong>Walk-away price committed to writing</strong> — private memo stating the maximum, signed and dated before any offer is made.</div>
          </div>

        </div>
      </section>

      <!-- KEY CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Key</span> Contacts</h2>
        <div class="two-col">

          <div class="contact-card">
            <div class="contact-role">Banking — Primary</div>
            <div class="contact-name">Patrick Lavette</div>
            <div class="contact-detail">
              Renasant Bank<br>
              Confirm financing path, pre-approval letter, and proof-of-funds documentation before LOI delivery.
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-role">Legal Counsel — To Engage</div>
            <div class="contact-name">Real Estate Attorney</div>
            <div class="contact-detail">
              Retain counsel to draft the Letter of Intent and purchase agreement. Avoid using a stock agent form for an estate-class acquisition.
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-role">Buyer / Principal</div>
            <div class="contact-name">Aaron C. Norris</div>
            <div class="contact-detail">
              Founder &amp; CEO, Norris Utilities®, LLC<br>
              <a href="tel:2055001343">205-500-1343</a><br>
              <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-role">Administrative Support</div>
            <div class="contact-name">Caroline Butler</div>
            <div class="contact-detail">
              Norris Utilities® Administration<br>
              Document routing, calendar coordination. Customer-facing correspondence requires Aaron's review prior to send.
            </div>
          </div>

        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Next</span> Actions — This Week</h2>
        <div class="callout">
          <div class="callout-title">Immediate</div>
          <div class="callout-body">
            <strong>1.</strong> Pull closed comparables for 4505 Buttewoods — median $/sq ft and date-weighted.<br>
            <strong>2.</strong> Confirm financing path with Patrick Lavette at Renasant Bank.<br>
            <strong>3.</strong> Drive the property. Photograph and document condition.<br>
            <strong>4.</strong> Set the walk-away price in writing — before any conversation with the listing side.<br>
            <strong>5.</strong> Engage counsel to draft the Letter of Intent.
          </div>
        </div>

        <div class="nu-btn-row">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20—%20Acquisition%20Update" class="nu-btn-secondary">Email Update</a>
        </div>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong style="color:#fff;">Aaron C. Norris</strong>, Founder &amp; CEO · Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-legal">
      Private acquisition brief — confidential. Norris Utilities® and A Legacy of Commitment® are registered trademarks of Norris Utilities, LLC.
    </div>
  </footer>

</body>
</html>