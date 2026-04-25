<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Negotiation — 4505 Buttewoods | Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #00A86B;
      --nu-warning: #E8A33D;
      --nu-danger: #C8312A;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 12px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-classification {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 4px;
      color: var(--nu-white);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    /* Ghost watermark phoenix at 7% opacity */
    .nu-watermark-phoenix {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
      opacity: 0.07;
      z-index: 0;
      pointer-events: none;
    }

    /* ══ CHEVRON ══ */
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

    /* ══ MAIN CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
    }
    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 50px 40px 80px;
      position: relative;
    }

    /* ══ DOC HEADER ══ */
    .doc-title-block {
      background: var(--nu-white);
      padding: 36px 40px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border-left: 6px solid var(--nu-blue);
      margin-bottom: 32px;
    }
    .doc-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .doc-title span {
      color: var(--nu-blue);
    }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 18px;
    }
    .doc-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding-top: 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .doc-meta-item strong {
      display: block;
      font-size: 0.7rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }
    .doc-meta-item span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ SECTION ══ */
    .nu-section {
      background: var(--nu-white);
      padding: 32px 40px;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 24px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
    }

    /* ══ PROPERTY GRID ══ */
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 8px;
    }
    .prop-card {
      background: var(--nu-light-gray);
      padding: 18px;
      border-radius: 6px;
      border-left: 4px solid var(--nu-cyan);
    }
    .prop-card .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .prop-card .value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .prop-card .sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* ══ STRATEGY TABLE ══ */
    .strat-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    .strat-table thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.05em;
      font-size: 0.8rem;
      text-transform: uppercase;
    }
    .strat-table tbody td {
      padding: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .strat-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .strat-table tbody tr:last-child td {
      border-bottom: none;
    }
    .strat-table .scenario {
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .strat-table .price-col {
      font-weight: 700;
      color: var(--nu-blue);
      white-space: nowrap;
    }

    /* ══ CHEVRON BADGES (negotiation phases) ══ */
    .phase-list {
      list-style: none;
      counter-reset: phase;
    }
    .phase-list li {
      counter-increment: phase;
      display: flex;
      align-items: flex-start;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 30px 18px 22px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
    }
    .phase-list li::before {
      content: counter(phase);
      flex-shrink: 0;
      width: 38px;
      height: 38px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      margin-right: 16px;
    }
    .phase-content .phase-title {
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
    }
    .phase-content .phase-detail {
      font-size: 0.88rem;
      font-weight: 400;
      line-height: 1.5;
      color: rgba(255,255,255,0.9);
    }

    /* ══ TWO COLUMN LISTS ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 720px) {
      .two-col { grid-template-columns: 1fr; }
    }
    .leverage-block h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      padding-bottom: 6px;
      border-bottom: 2px solid var(--nu-cyan);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .leverage-block.risks h4 {
      color: var(--nu-danger);
      border-bottom-color: var(--nu-danger);
    }
    .leverage-block ul {
      list-style: none;
    }
    .leverage-block li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.93rem;
      border-bottom: 1px dotted var(--nu-medium-gray);
    }
    .leverage-block li:last-child { border-bottom: none; }
    .leverage-block li::before {
      content: '▸';
      position: absolute;
      left: 4px;
      top: 8px;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .leverage-block.risks li::before {
      content: '!';
      color: var(--nu-danger);
      background: var(--nu-danger);
      color: var(--nu-white);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      font-size: 0.65rem;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 12px;
      left: 0;
    }

    /* ══ KEY TERMS GRID ══ */
    .terms-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .term-cell {
      padding: 16px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border-top: 3px solid var(--nu-blue);
    }
    .term-cell .key {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-navy);
      margin-bottom: 6px;
    }
    .term-cell .val {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      font-weight: 400;
      line-height: 1.5;
    }
    .term-cell .val strong {
      color: var(--nu-blue);
    }

    /* ══ WALK-AWAY BOX ══ */
    .walkaway {
      background: linear-gradient(135deg, #fff8f0 0%, #fdf0e0 100%);
      border: 2px solid var(--nu-warning);
      border-radius: 8px;
      padding: 22px 26px;
      margin-top: 16px;
    }
    .walkaway-label {
      display: inline-block;
      background: var(--nu-warning);
      color: var(--nu-white);
      padding: 4px 12px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .walkaway p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }
    .walkaway p + p { margin-top: 8px; }

    /* ══ TARGET PRICE CALLOUT ══ */
    .target-callout {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 24px;
      align-items: center;
      margin-bottom: 24px;
    }
    @media (max-width: 720px) {
      .target-callout { grid-template-columns: 1fr; text-align: center; }
    }
    .target-callout .lbl {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      opacity: 0.92;
      margin-bottom: 4px;
    }
    .target-callout h3 {
      font-weight: 900;
      font-size: 1.5rem;
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .target-callout p {
      font-size: 0.95rem;
      opacity: 0.95;
      line-height: 1.5;
    }
    .target-price-stack {
      text-align: right;
    }
    @media (max-width: 720px) { .target-price-stack { text-align: center; } }
    .target-price-stack .biggest {
      font-size: 2.3rem;
      font-weight: 900;
      line-height: 1;
      letter-spacing: -0.01em;
    }
    .target-price-stack .smallest {
      font-size: 0.78rem;
      opacity: 0.85;
      margin-top: 4px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* ══ NEXT STEP CHECKLIST ══ */
    .checklist {
      list-style: none;
    }
    .checklist li {
      padding: 12px 12px 12px 44px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 12px;
      top: 14px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-blue);
      font-weight: 900;
    }
    .checklist li .due {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 2px 8px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      margin-left: 8px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact strong {
      color: var(--nu-white);
      font-weight: 700;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-confidential {
      margin-top: 24px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 30px 18px 50px; }
      .nu-section { padding: 24px 20px; }
      .doc-title-block { padding: 24px 20px; }
      .doc-title { font-size: 1.5rem; }
      .phase-list li { clip-path: none; border-radius: 8px; }
      .strat-table { font-size: 0.85rem; }
      .strat-table thead th, .strat-table tbody td { padding: 10px; }
      .target-price-stack .biggest { font-size: 1.8rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-section, .doc-title-block { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .phase-list li, .strat-table thead th, .target-callout { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 78 L50 95 L45 78 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-classification">Confidential — Negotiation Strategy</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC TITLE BLOCK -->
      <section class="doc-title-block">
        <div class="doc-eyebrow">Personal Acquisition — Action Plan</div>
        <h1 class="doc-title">Estate Negotiation <span>— 4505 Buttewoods</span></h1>
        <p class="doc-subtitle">7,098 sq ft estate | Strategy, leverage, target price, and walk-away terms</p>
        <div class="doc-meta-row">
          <div class="doc-meta-item">
            <strong>Date Prepared</strong>
            <span>April 25, 2026</span>
          </div>
          <div class="doc-meta-item">
            <strong>Prepared By</strong>
            <span>Aaron C. Norris</span>
          </div>
          <div class="doc-meta-item">
            <strong>Source</strong>
            <span>reMarkable Action Item</span>
          </div>
          <div class="doc-meta-item">
            <strong>Status</strong>
            <span>Active — Pre-Offer</span>
          </div>
        </div>
      </section>

      <!-- TARGET CALLOUT -->
      <div class="target-callout">
        <div>
          <div class="lbl">Strategic Objective</div>
          <h3>Acquire 4505 Buttewoods at the lowest defensible price with the cleanest possible terms</h3>
          <p>Move decisively when leverage is highest. Walk away cleanly if walk-away conditions are crossed.</p>
        </div>
        <div class="target-price-stack">
          <div class="lbl">Target Price Discipline</div>
          <div class="biggest">7,098 sq ft</div>
          <div class="smallest">Comp-anchored | Inspection-leveraged</div>
        </div>
      </div>

      <!-- PROPERTY SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Summary</span></h2>
        <div class="property-grid">
          <div class="prop-card">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <div class="sub">Subject property</div>
          </div>
          <div class="prop-card">
            <div class="label">Size</div>
            <div class="value">7,098 sq ft</div>
            <div class="sub">Estate-class residence</div>
          </div>
          <div class="prop-card">
            <div class="label">Use Case</div>
            <div class="value">Personal Residence</div>
            <div class="sub">Long-term hold</div>
          </div>
          <div class="prop-card">
            <div class="label">Buyer Posture</div>
            <div class="value">Disciplined &amp; Patient</div>
            <div class="sub">Willing to walk</div>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION PHASES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Phases</span></h2>
        <ol class="phase-list">
          <li>
            <div class="phase-content">
              <div class="phase-title">Diligence &amp; Comp Anchor</div>
              <div class="phase-detail">Pull sold comps for estate-class homes within a 2-mile radius over the last 12 months. Establish a defensible price-per-square-foot range. Document days-on-market, price reductions, and final close-to-list ratios.</div>
            </div>
          </li>
          <li>
            <div class="phase-content">
              <div class="phase-title">Seller Motivation Read</div>
              <div class="phase-detail">Identify why the property is on the market: relocation, downsizing, estate sale, financial pressure, or test-the-market. Each motivation maps to a different leverage profile and a different opening offer.</div>
            </div>
          </li>
          <li>
            <div class="phase-content">
              <div class="phase-title">Opening Offer — Anchored Below List</div>
              <div class="phase-detail">Submit a written offer well-supported by comp data. Include a clean cover letter, lender pre-approval, and proof of funds for earnest money. Anchor the conversation in numbers, not emotion.</div>
            </div>
          </li>
          <li>
            <div class="phase-content">
              <div class="phase-title">Inspection &amp; Repair Renegotiation</div>
              <div class="phase-detail">Use a thorough inspection to surface every legitimate defect on a 7,098 sq ft estate (roof, HVAC zones, plumbing, electrical, foundation, drainage). Convert findings into a credit at closing or a price reduction.</div>
            </div>
          </li>
          <li>
            <div class="phase-content">
              <div class="phase-title">Final Terms Lock &amp; Close</div>
              <div class="phase-detail">Tighten the contract: clean financing contingency, reasonable closing window, seller-paid title where appropriate, and clear language on inclusions, warranties, and possession date. Close with no surprises.</div>
            </div>
          </li>
        </ol>
      </section>

      <!-- LEVERAGE & RISKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">&amp; Risks</span></h2>
        <div class="two-col">
          <div class="leverage-block">
            <h4>Buyer Leverage</h4>
            <ul>
              <li>Disciplined cash position — no contingent home sale.</li>
              <li>Lender pre-approval letter ready before first offer.</li>
              <li>Willingness to walk away — single best leverage tool.</li>
              <li>Estate-class homes have a thin buyer pool; days-on-market favors patient capital.</li>
              <li>Inspection items on a 7,098 sq ft home are inherently numerous and meaningful.</li>
              <li>Flexible closing date — accommodate seller's timeline if it earns price.</li>
            </ul>
          </div>
          <div class="leverage-block risks">
            <h4>Negotiation Risks</h4>
            <ul>
              <li>Emotional attachment — pay only what the comps and pro-formas defend.</li>
              <li>Bidding-war dynamics if multiple offers surface; do not chase.</li>
              <li>Hidden defects: foundation, roof, drainage, septic — verify in writing.</li>
              <li>Seller who treats list price as floor: walk if there is no room to negotiate.</li>
              <li>Title or deed issues on older estates — order title work early.</li>
              <li>Timing pressure that erodes due diligence — protect the timeline.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SCENARIO TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Scenarios</span></h2>
        <table class="strat-table">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Position</th>
              <th>Anchor</th>
              <th>Concession Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="scenario">Aggressive Open</td>
              <td>Initial written offer</td>
              <td class="price-col">List minus 8–12%</td>
              <td>Hold strong on price; offer flexibility on closing date and possession.</td>
            </tr>
            <tr>
              <td class="scenario">Counter Response</td>
              <td>Mid-negotiation</td>
              <td class="price-col">Comp midpoint</td>
              <td>Move on price only when seller concedes inspection items or terms.</td>
            </tr>
            <tr>
              <td class="scenario">Inspection Re-trade</td>
              <td>Post-inspection</td>
              <td class="price-col">Repair credit anchored to actual quotes</td>
              <td>Use itemized contractor quotes — never round numbers — to justify the credit.</td>
            </tr>
            <tr>
              <td class="scenario">Best &amp; Final</td>
              <td>Late-stage</td>
              <td class="price-col">Walk-away minus buffer</td>
              <td>One last move, in writing, with a 24-hour decision window.</td>
            </tr>
            <tr>
              <td class="scenario">Walk-Away</td>
              <td>If terms degrade</td>
              <td class="price-col">No deal beats a bad deal</td>
              <td>Disengage politely; leave the door open for seller re-engagement.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- KEY TERMS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Contract</span> <span class="rest">Terms to Negotiate</span></h2>
        <div class="terms-grid">
          <div class="term-cell">
            <div class="key">Earnest Money</div>
            <div class="val">Reasonable but not excessive — <strong>refundable</strong> through inspection and appraisal contingencies.</div>
          </div>
          <div class="term-cell">
            <div class="key">Inspection Period</div>
            <div class="val">Minimum <strong>10–14 days</strong> for a 7,098 sq ft home — enough time for specialty inspections.</div>
          </div>
          <div class="term-cell">
            <div class="key">Financing Contingency</div>
            <div class="val">Standard appraisal and financing contingency — <strong>do not waive</strong> unless price reflects the waiver.</div>
          </div>
          <div class="term-cell">
            <div class="key">Closing Date</div>
            <div class="val">Flexible — used as <strong>concession currency</strong> in exchange for price movement.</div>
          </div>
          <div class="term-cell">
            <div class="key">Possession</div>
            <div class="val">Full possession at closing — no <strong>seller post-occupancy</strong> without rent and security.</div>
          </div>
          <div class="term-cell">
            <div class="key">Inclusions</div>
            <div class="val">Itemized list — appliances, fixtures, mounted equipment — <strong>in writing</strong>.</div>
          </div>
          <div class="term-cell">
            <div class="key">Title &amp; Survey</div>
            <div class="val">Buyer-friendly title work; <strong>current survey</strong> required for an estate-sized lot.</div>
          </div>
          <div class="term-cell">
            <div class="key">Disclosures</div>
            <div class="val">Full seller disclosure package — <strong>roof, foundation, water, HVAC</strong> — required before final commitment.</div>
          </div>
        </div>
      </section>

      <!-- WALK-AWAY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Walk-Away</span> <span class="rest">Discipline</span></h2>
        <div class="walkaway">
          <div class="walkaway-label">Non-Negotiable</div>
          <p><strong>Walk if any of the following occur:</strong> the price exceeds the comp-defended ceiling; the seller refuses a professional inspection; material defects (foundation, structural, water intrusion) are uncovered without an appropriate price adjustment; financing and appraisal contingencies are pressured for waiver without a corresponding price reduction.</p>
          <p>The strongest negotiating position is genuine willingness to walk. Maintain it. The estate market is patient — so is the buyer.</p>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Steps</span></h2>
        <ul class="checklist">
          <li><strong>Pull recent sold comps</strong> for estate-class homes within a 2-mile radius (last 12 months). <span class="due">Week 1</span></li>
          <li><strong>Confirm lender pre-approval letter</strong> at the right loan size and loan-to-value. <span class="due">Week 1</span></li>
          <li><strong>Engage real estate counsel</strong> familiar with estate-class transactions. <span class="due">Week 1</span></li>
          <li><strong>Drive the property</strong> at multiple times of day — traffic, noise, drainage, neighborhood feel. <span class="due">Week 1</span></li>
          <li><strong>Identify seller motivation</strong> through agent-to-agent conversation; document findings. <span class="due">Week 2</span></li>
          <li><strong>Draft initial written offer</strong> with comp justification, clean contingencies, and proof of funds. <span class="due">Week 2</span></li>
          <li><strong>Line up inspectors</strong> — general, structural, roof, HVAC, plumbing, septic if applicable. <span class="due">Week 2</span></li>
          <li><strong>Set walk-away price &amp; terms in writing</strong> before any conversation with the listing agent. <span class="due">Before Offer</span></li>
        </ul>
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
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-confidential">
      Confidential — Personal Negotiation Strategy. Not for distribution.
    </div>
  </footer>

</body>
</html>