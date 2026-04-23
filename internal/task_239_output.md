<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
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
      --nu-success: #0a7c3a;
      --nu-warning: #b87600;
      --nu-danger: #a42020;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA */
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
      width: 65%;
      padding-bottom: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* INTRO BLOCK */
    .nu-intro {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-eyebrow {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: rgba(6, 208, 255, 0.12);
      padding: 6px 18px;
      border-radius: 3px;
      margin-bottom: 18px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .nu-page-title .nu-accent { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 760px;
      margin: 0 auto;
    }

    /* SECTION HEADINGS */
    .nu-section { margin-bottom: 52px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
      color: var(--nu-blue);
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 24px;
    }

    /* PROPERTY SNAPSHOT GRID */
    .nu-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 16px;
    }
    .nu-snap-cell {
      background: var(--nu-white);
      padding: 22px 20px;
      text-align: center;
    }
    .nu-snap-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      opacity: 0.7;
      margin-bottom: 6px;
    }
    .nu-snap-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.2;
    }
    .nu-snap-sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* TWO COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .nu-card p + p { margin-top: 10px; }

    /* BADGES (chevron) */
    .nu-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 18px 0 6px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 14px;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
    }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 28px;
      border-left: 3px solid var(--nu-cyan);
    }
    .nu-timeline-item {
      position: relative;
      padding: 0 0 24px 18px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -34px;
      top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-cyan);
    }
    .nu-timeline-phase {
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }
    .nu-timeline-title {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-timeline-body { font-size: 0.93rem; }

    /* LIST */
    .nu-list {
      list-style: none;
      padding: 0;
    }
    .nu-list li {
      position: relative;
      padding: 8px 0 8px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-list li:last-child { border-bottom: none; }
    .nu-list li::before {
      content: '';
      position: absolute;
      left: 0; top: 16px;
      width: 10px; height: 10px;
      background: var(--nu-cyan);
      transform: rotate(45deg);
    }

    /* TABLE */
    .nu-table-wrap {
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
    }
    .nu-table thead th {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 14px 16px;
      text-align: left;
    }
    .nu-table tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table .num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-table .total-row td {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      font-weight: 900;
    }

    /* OFFER BLOCK */
    .nu-offer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 36px;
      border-radius: 10px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .nu-offer::before {
      content: '';
      position: absolute;
      top: -60%; right: -30%;
      width: 80%; height: 220%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 65%);
    }
    .nu-offer-inner { position: relative; z-index: 1; }
    .nu-offer-label {
      font-size: 0.78rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 10px;
    }
    .nu-offer-amount {
      font-weight: 900;
      font-size: 3rem;
      line-height: 1;
      margin-bottom: 8px;
    }
    .nu-offer-note {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.85);
      max-width: 620px;
      margin: 8px auto 0;
    }

    /* STATUS PILL */
    .nu-status {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-status.pending { background: rgba(184, 118, 0, 0.12); color: var(--nu-warning); }
    .nu-status.active { background: rgba(10, 124, 58, 0.12); color: var(--nu-success); }
    .nu-status.risk { background: rgba(164, 32, 32, 0.12); color: var(--nu-danger); }

    /* CONTACTS */
    .nu-contacts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
    }
    .nu-contact {
      background: var(--nu-light-gray);
      padding: 18px 20px;
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
    }
    .nu-contact-role {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-contact-name {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-contact-detail { font-size: 0.88rem; }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 20px;
    }
    .nu-callout strong { color: var(--nu-blue); }

    /* BUTTONS */
    .nu-btn-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
      margin-top: 24px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.35);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-cyan);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #000099 100%);
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
    }
    .nu-footer-contact { font-size: 0.95rem; line-height: 1.9; }
    .nu-footer-contact strong { color: var(--nu-white); font-weight: 700; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 22px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em;
    }

    /* RESPONSIVE */
    @media (max-width: 860px) {
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.45em; }
      .nu-page-title { font-size: 1.75rem; }
      .nu-offer-amount { font-size: 2.2rem; }
      .nu-container { padding: 44px 22px 60px; }
      .nu-header { padding: 50px 24px 70px; }
    }
    @media (max-width: 560px) {
      .nu-snap-value { font-size: 1.15rem; }
      .nu-badge { clip-path: none; border-radius: 4px; padding: 10px 16px; }
      .nu-offer { padding: 28px 20px; }
    }

    @media print {
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-offer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-btn-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <div class="nu-phoenix-icon" aria-hidden="true">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
          <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
        </svg>
      </div>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
    </div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron" aria-hidden="true">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- INTRO -->
      <div class="nu-intro">
        <div class="nu-eyebrow">Acquisition Strategy · Internal Brief</div>
        <h1 class="nu-page-title">4505 Buttewoods Estate <span class="nu-accent">Negotiation Plan</span></h1>
        <p class="nu-page-subtitle">
          Framework and offer strategy for the private acquisition of the 7,098 sq ft residential estate at 4505 Buttewoods.
          Prepared for Aaron C. Norris, Founder &amp; CEO, Norris Utilities®.
        </p>
        <div class="nu-badge-row" style="justify-content:center;">
          <span class="nu-badge">Off-Market Negotiation</span>
          <span class="nu-badge">Residential Estate — 7,098 SF</span>
          <span class="nu-badge">Target Close: 60–90 Days</span>
        </div>
      </div>

      <!-- SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Property</span> Snapshot</h2>
        <div class="nu-section-rule"></div>

        <div class="nu-snapshot">
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Address</div>
            <div class="nu-snap-value">4505</div>
            <div class="nu-snap-sub">Buttewoods</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Living Area</div>
            <div class="nu-snap-value">7,098</div>
            <div class="nu-snap-sub">Square Feet</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Property Type</div>
            <div class="nu-snap-value">Estate</div>
            <div class="nu-snap-sub">Single-Family Residence</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Acquisition Path</div>
            <div class="nu-snap-value">Direct</div>
            <div class="nu-snap-sub">Private, Off-Market</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Status</div>
            <div class="nu-snap-value" style="font-size:1rem; padding-top:8px;">
              <span class="nu-status pending">Negotiation Open</span>
            </div>
            <div class="nu-snap-sub">Initial Outreach Phase</div>
          </div>
        </div>

        <div class="nu-callout" style="margin-top:24px;">
          <strong>Action Captured:</strong> reMarkable note — "Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods."
          This brief operationalizes that action item into a sequenced plan with a defensible offer anchor,
          comparable analysis, and a contingency framework.
        </div>
      </section>

      <!-- OBJECTIVES / CONSIDERATIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Objectives</span> &amp; Strategic Considerations</h2>
        <div class="nu-section-rule"></div>

        <div class="nu-two-col">
          <div class="nu-card">
            <h3>Primary Objectives</h3>
            <ul class="nu-list">
              <li>Secure 4505 Buttewoods under contract at or below assessed market value.</li>
              <li>Protect liquidity — structure earnest money and financing to preserve Norris Utilities® operating capital.</li>
              <li>Complete due diligence (title, inspection, survey, environmental) before removing contingencies.</li>
              <li>Close within a 60–90 day window barring discovery items.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Risk Factors to Control</h3>
            <ul class="nu-list">
              <li>Seller motivation unknown — avoid opening above an anchored, defensible number.</li>
              <li>7,098 sq ft scale magnifies carrying cost: property tax, insurance, maintenance reserves.</li>
              <li>Potential deferred maintenance on estate-sized property — budget inspection contingency.</li>
              <li>Appraisal gap risk if financing — pre-underwrite before signed offer.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Negotiation</span> Timeline</h2>
        <div class="nu-section-rule"></div>

        <div class="nu-timeline">
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 1 · Days 1–7</div>
            <div class="nu-timeline-title">Intelligence &amp; Comparable Analysis</div>
            <div class="nu-timeline-body">
              Pull deed history, tax assessment, current mortgage status, and recent comparable sales within a 3-mile radius
              for properties 5,500–8,500 sq ft. Confirm seller identity and known motivators (estate, relocation, downsize).
              Identify the listing agent or, if off-market, the preferred intermediary.
            </div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 2 · Days 7–14</div>
            <div class="nu-timeline-title">Initial Outreach &amp; Anchor Conversation</div>
            <div class="nu-timeline-body">
              Private conversation with seller or representative. Position as a clean, qualified buyer with flexible close
              timing. Anchor expectations around the assessed/appraised band before discussing a number. No written offer yet.
            </div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 3 · Days 14–25</div>
            <div class="nu-timeline-title">Written Offer &amp; Counter Cycle</div>
            <div class="nu-timeline-body">
              Deliver a written offer at the Opening Anchor (see Offer Ladder below). Include inspection, financing, and
              appraisal contingencies. Limit response window to 72 hours. Plan two planned counter increments before
              best-and-final.
            </div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 4 · Days 25–45</div>
            <div class="nu-timeline-title">Due Diligence Window</div>
            <div class="nu-timeline-body">
              Inspection (structural, roof, HVAC, plumbing, electrical), termite/pest, survey, title search, environmental
              screen if land adjacency or historical use warrants. Negotiate repair credits or price reduction based on
              findings — this is the second negotiation, not a given.
            </div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 5 · Days 45–90</div>
            <div class="nu-timeline-title">Financing, Appraisal &amp; Close</div>
            <div class="nu-timeline-body">
              Lock rate. Complete appraisal; resolve any gap via price adjustment, additional down, or walk. Final
              walkthrough 48 hours before close. Fund and record. Transfer utilities, insurance, and security.
            </div>
          </div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Offer</span> Ladder &amp; Walk-Away Line</h2>
        <div class="nu-section-rule"></div>

        <p style="margin-bottom: 18px; font-size: 0.98rem;">
          Exact dollar figures are anchored to the assessed/appraised band once tax records and comparables are pulled in Phase 1.
          The ladder below is the discipline — the price is decided after data, not before.
        </p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Position</th>
                <th>% of Market Anchor</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Opening Anchor</strong></td>
                <td>Written offer #1</td>
                <td class="num">85–88%</td>
                <td>Establish low defensible anchor; signal serious but disciplined buyer.</td>
              </tr>
              <tr>
                <td><strong>Counter 1</strong></td>
                <td>After first seller reply</td>
                <td class="num">90–92%</td>
                <td>Demonstrate movement; preserve room for one more increment.</td>
              </tr>
              <tr>
                <td><strong>Counter 2</strong></td>
                <td>After second seller reply</td>
                <td class="num">94–96%</td>
                <td>Close proximity; tie final increments to seller concessions (closing costs, repairs, timing).</td>
              </tr>
              <tr>
                <td><strong>Best &amp; Final</strong></td>
                <td>Walk-away line</td>
                <td class="num">97–98%</td>
                <td>Signed ceiling. Above this we walk — no exceptions without new information.</td>
              </tr>
              <tr class="total-row">
                <td colspan="2">Walk-Away Rule</td>
                <td class="num">&gt; 98%</td>
                <td>Deal closes at another party. Maintain relationship for future re-engagement.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="nu-offer" style="margin-top:28px;">
          <div class="nu-offer-inner">
            <div class="nu-offer-label">Authorized Ceiling</div>
            <div class="nu-offer-amount">97–98%</div>
            <div class="nu-offer-note">
              Of verified market anchor established in Phase 1. Any number above this ceiling requires a written re-authorization
              from Aaron before extension. Discipline over desire — this property, or the next one.
            </div>
          </div>
        </div>
      </section>

      <!-- OFFER TERMS CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Offer</span> Terms &amp; Contingencies</h2>
        <div class="nu-section-rule"></div>

        <div class="nu-two-col">
          <div class="nu-card">
            <h3>Financial Terms</h3>
            <ul class="nu-list">
              <li>Earnest money: 1–2% of purchase price, held in escrow.</li>
              <li>Down payment: 20–25% if financed; 100% if cash.</li>
              <li>Financing: pre-approval letter attached; rate lock at contract signing.</li>
              <li>Closing costs: seller concession requested on Counter 2.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Contingencies &amp; Protections</h3>
            <ul class="nu-list">
              <li>Inspection — 10-day window, right to renegotiate or terminate.</li>
              <li>Appraisal — contract void if appraised value falls below agreed purchase price.</li>
              <li>Financing — 30-day window, lender written commitment required.</li>
              <li>Title — clean marketable title, seller cures any clouds before close.</li>
              <li>Survey — confirms acreage, easements, and no encroachments.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- STAKEHOLDERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Deal</span> Team &amp; Contacts</h2>
        <div class="nu-section-rule"></div>

        <div class="nu-contacts">
          <div class="nu-contact">
            <div class="nu-contact-role">Principal / Buyer</div>
            <div class="nu-contact-name">Aaron C. Norris</div>
            <div class="nu-contact-detail">
              Founder &amp; CEO<br>
              Norris Utilities®, LLC<br>
              205-500-1343
            </div>
          </div>
          <div class="nu-contact">
            <div class="nu-contact-role">Real Estate Counsel</div>
            <div class="nu-contact-name">To Be Engaged</div>
            <div class="nu-contact-detail">
              Residential closing attorney — confirm before written offer. Handles title, escrow, contract review.
            </div>
          </div>
          <div class="nu-contact">
            <div class="nu-contact-role">Lender / Financing</div>
            <div class="nu-contact-name">Patrick Lavette — Renasant Bank</div>
            <div class="nu-contact-detail">
              Existing banking relationship. Confirm pre-approval amount and rate environment before Phase 2 anchor call.
            </div>
          </div>
          <div class="nu-contact">
            <div class="nu-contact-role">Inspection / Diligence</div>
            <div class="nu-contact-name">To Be Scheduled</div>
            <div class="nu-contact-detail">
              Estate-qualified inspector for 7,098 SF; add roof, HVAC, structural, termite, survey specialists.
            </div>
          </div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Immediate</span> Next Steps</h2>
        <div class="nu-section-rule"></div>

        <div class="nu-card">
          <ul class="nu-list">
            <li><strong>This Week:</strong> Pull county tax assessment, deed history, and comparable sales within 3 miles.</li>
            <li><strong>This Week:</strong> Confirm seller identity and preferred channel (direct or through an intermediary).</li>
            <li><strong>Next Week:</strong> Pre-approval letter confirmed with Renasant. Engage closing attorney.</li>
            <li><strong>Week 2:</strong> Initial private conversation with seller — anchor expectations, no number yet.</li>
            <li><strong>Week 3:</strong> Deliver Opening Anchor written offer per ladder above.</li>
          </ul>

          <div class="nu-btn-row">
            <a class="nu-btn-primary" href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20-%20Negotiation%20Update">Log Negotiation Update</a>
            <a class="nu-btn-primary" style="background:transparent; color:var(--nu-blue); border:2px solid var(--nu-blue);" href="tel:2055001343">Call 205-500-1343</a>
          </div>
        </div>
      </section>

      <div class="nu-callout" style="margin-top:12px;">
        <strong>Discipline Note:</strong> The plan succeeds when the walk-away line holds. Anchoring, two counter
        increments, and a written best-and-final protect against emotional overpay. Revisit this brief before every
        verbal or written communication with the seller.
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO<br>
      Norris Utilities®, LLC &middot; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &middot;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &middot;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Internal Acquisition Brief &middot; Confidential &middot; Phoenix Icon®
    </div>
  </footer>

</body>
</html>