<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
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
      --nu-success: #0A8043;
      --nu-warning: #D97706;
      --nu-danger: #B91C1C;
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
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 2px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      backdrop-filter: blur(4px);
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
      max-width: 1180px;
      margin: 0 auto;
      padding: 50px 40px 80px;
    }

    /* PAGE TITLE */
    .page-title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .page-title-eyebrow {
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.35em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .page-title-main {
      font-size: 2.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .page-title-main span { color: var(--nu-blue); }
    .page-title-sub {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 820px;
      margin: 0 auto;
      font-weight: 400;
    }

    /* PROPERTY HERO */
    .property-hero {
      background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 36px;
      margin-bottom: 48px;
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 36px;
      align-items: center;
    }
    .property-hero-visual {
      background: linear-gradient(135deg, var(--nu-navy) 0%, var(--nu-blue) 100%);
      border-radius: 8px;
      padding: 40px 30px;
      color: var(--nu-white);
      text-align: center;
      position: relative;
      overflow: hidden;
      min-height: 280px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .property-hero-visual::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(45deg, rgba(6,208,255,0.06) 0px, rgba(6,208,255,0.06) 1px, transparent 1px, transparent 18px);
    }
    .property-hero-visual > * { position: relative; z-index: 2; }
    .property-sqft {
      font-size: 3.8rem;
      font-weight: 900;
      line-height: 1;
      color: var(--nu-cyan);
      letter-spacing: -0.02em;
    }
    .property-sqft-label {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-top: 6px;
      margin-bottom: 22px;
      color: rgba(255,255,255,0.8);
    }
    .property-address {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .property-address-sub {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.75);
      font-weight: 300;
    }

    .property-hero-details h2 {
      font-size: 1.7rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .property-hero-details h2 span { color: var(--nu-blue); }
    .property-hero-details p {
      color: var(--nu-body-text);
      margin-bottom: 20px;
      font-size: 1rem;
    }

    .property-facts {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }
    .fact-item {
      padding: 12px 14px;
      background: var(--nu-white);
      border-left: 3px solid var(--nu-cyan);
      border-radius: 2px;
    }
    .fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }
    .fact-value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTIONS */
    .nu-section {
      margin-bottom: 56px;
    }
    .nu-section-header {
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
      display: flex;
      align-items: baseline;
      gap: 14px;
    }
    .nu-section-number {
      font-size: 0.85rem;
      font-weight: 900;
      color: var(--nu-cyan);
      letter-spacing: 0.1em;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* OBJECTIVES GRID */
    .objectives-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }
    .objective-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      border-top: 4px solid var(--nu-blue);
    }
    .objective-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,255,0.08);
    }
    .objective-icon {
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.1rem;
      margin-bottom: 14px;
    }
    .objective-card h3 {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .objective-card p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }

    /* STRATEGY TABLE */
    .strategy-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
    }
    .strategy-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
    }
    .strategy-table th {
      padding: 14px 18px;
      text-align: left;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .strategy-table td {
      padding: 16px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
      vertical-align: top;
    }
    .strategy-table tr:last-child td { border-bottom: none; }
    .strategy-table tr:hover td { background: #fafbff; }
    .strategy-table td strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .priority-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .priority-pill.high { background: #FEE2E2; color: var(--nu-danger); }
    .priority-pill.med { background: #FEF3C7; color: var(--nu-warning); }
    .priority-pill.essential { background: #DCFCE7; color: var(--nu-success); }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 40px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 8px;
      bottom: 8px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      margin-bottom: 28px;
      padding-left: 8px;
    }
    .timeline-item:last-child { margin-bottom: 0; }
    .timeline-dot {
      position: absolute;
      left: -40px;
      top: 4px;
      width: 30px;
      height: 30px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.78rem;
      font-weight: 900;
      color: var(--nu-blue);
    }
    .timeline-phase {
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 4px;
    }
    .timeline-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .timeline-desc {
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }
    .timeline-desc ul {
      margin-top: 8px;
      padding-left: 18px;
    }
    .timeline-desc ul li {
      margin-bottom: 4px;
    }

    /* DILIGENCE CHECKLIST */
    .diligence-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .diligence-col {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
    }
    .diligence-col h3 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      letter-spacing: 0.03em;
    }
    .checklist {
      list-style: none;
    }
    .checklist li {
      padding: 10px 0 10px 30px;
      position: relative;
      font-size: 0.93rem;
      color: var(--nu-body-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 13px;
      width: 16px;
      height: 16px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* NEGOTIATION POSTURE */
    .posture-panel {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000055 100%);
      border-radius: 10px;
      padding: 40px;
      color: var(--nu-white);
      position: relative;
      overflow: hidden;
    }
    .posture-panel::before {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 60%; height: 180%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.15) 0%, transparent 70%);
    }
    .posture-panel > * { position: relative; z-index: 2; }
    .posture-panel h3 {
      color: var(--nu-cyan);
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .posture-panel .posture-quote {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.35rem;
      line-height: 1.5;
      margin-bottom: 24px;
      color: rgba(255,255,255,0.95);
    }
    .posture-points {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 22px;
    }
    .posture-point {
      padding: 18px;
      background: rgba(255,255,255,0.05);
      border-left: 3px solid var(--nu-cyan);
      border-radius: 4px;
    }
    .posture-point strong {
      display: block;
      color: var(--nu-cyan);
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 6px;
      font-weight: 700;
    }
    .posture-point span {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.88);
      line-height: 1.55;
    }

    /* VALUATION BOX */
    .valuation-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-bottom: 24px;
    }
    .val-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      text-align: center;
      border-top: 4px solid var(--nu-cyan);
    }
    .val-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .val-anchor {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      line-height: 1.1;
    }
    .val-note {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }

    /* NEXT ACTION */
    .next-action-panel {
      background: linear-gradient(135deg, #fff9e6 0%, #fffbea 100%);
      border: 2px solid var(--nu-accent-gold);
      border-radius: 10px;
      padding: 32px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 28px;
      align-items: center;
    }
    .next-action-icon {
      width: 60px;
      height: 60px;
      background: var(--nu-accent-gold);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.6rem;
      flex-shrink: 0;
    }
    .next-action-body h3 {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .next-action-body p {
      color: var(--nu-body-text);
      font-size: 0.95rem;
    }
    .next-action-btn {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.05em;
      text-decoration: none;
      white-space: nowrap;
      transition: all 0.2s ease;
    }
    .next-action-btn:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.82rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .property-hero { grid-template-columns: 1fr; }
      .valuation-grid { grid-template-columns: 1fr; }
      .diligence-grid { grid-template-columns: 1fr; }
      .next-action-panel { grid-template-columns: 1fr; text-align: center; }
      .next-action-icon { margin: 0 auto; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 50px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 20px 60px; }
      .page-title-main { font-size: 1.7rem; }
      .property-hero { padding: 24px; }
      .property-facts { grid-template-columns: 1fr; }
      .property-sqft { font-size: 2.8rem; }
      .strategy-table th, .strategy-table td { padding: 10px 12px; font-size: 0.85rem; }
      .posture-panel { padding: 28px 22px; }
      .posture-panel .posture-quote { font-size: 1.1rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .objective-card, .diligence-col, .val-card { box-shadow: none; break-inside: avoid; }
      .posture-panel, .property-hero-visual { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Acquisition Brief · Internal Use</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <div class="page-title-block">
        <div class="page-title-eyebrow">reMarkable Action Item · Negotiation Playbook</div>
        <h1 class="page-title-main">Negotiate Purchase of the <span>4505 Buttewoods Estate</span></h1>
        <p class="page-title-sub">A structured approach to opening, advancing, and closing the acquisition of a 7,098 sq ft private estate. This brief captures the objectives, diligence, negotiation posture, and timeline so the conversation can move decisively once it begins.</p>
      </div>

      <!-- PROPERTY HERO -->
      <div class="property-hero">
        <div class="property-hero-visual">
          <div class="property-sqft">7,098</div>
          <div class="property-sqft-label">Square Feet · Estate</div>
          <div class="property-address">4505 Buttewoods</div>
          <div class="property-address-sub">Private Residence · Acquisition Target</div>
        </div>
        <div class="property-hero-details">
          <h2>Target <span>Overview</span></h2>
          <p>This is a negotiation for a 7,098 sq ft estate property at 4505 Buttewoods. The brief below frames the conversation so it can move from introductory contact through a written offer with minimum friction and maximum clarity on both sides.</p>
          <div class="property-facts">
            <div class="fact-item">
              <div class="fact-label">Living Area</div>
              <div class="fact-value">7,098 sq ft</div>
            </div>
            <div class="fact-item">
              <div class="fact-label">Property Type</div>
              <div class="fact-value">Private Estate</div>
            </div>
            <div class="fact-item">
              <div class="fact-label">Address</div>
              <div class="fact-value">4505 Buttewoods</div>
            </div>
            <div class="fact-item">
              <div class="fact-label">Status</div>
              <div class="fact-value">Opening Negotiation</div>
            </div>
          </div>
        </div>
      </div>

      <!-- OBJECTIVES -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-number">01</span>
          <h2 class="nu-section-title">Negotiation <span>Objectives</span></h2>
        </div>
        <div class="objectives-grid">
          <div class="objective-card">
            <div class="objective-icon">1</div>
            <h3>Establish a Fair Anchor</h3>
            <p>Set an opening number grounded in verified comps, land value, and replacement cost — not emotion or list pressure. The first number shapes every number that follows.</p>
          </div>
          <div class="objective-card">
            <div class="objective-icon">2</div>
            <h3>Protect Downside</h3>
            <p>Structure contingencies for inspection, financing, appraisal, and title so that surprises can be priced or renegotiated before closing — never absorbed quietly.</p>
          </div>
          <div class="objective-card">
            <div class="objective-icon">3</div>
            <h3>Keep the Seller Engaged</h3>
            <p>Move the process forward at a professional cadence. Warm, direct, and confident — never pushy or apologetic. Earn the right to the final number.</p>
          </div>
          <div class="objective-card">
            <div class="objective-icon">4</div>
            <h3>Close Cleanly</h3>
            <p>Reach a written, executed contract with terms that can actually be delivered. A clean close is worth more than shaving the last dollar off price.</p>
          </div>
        </div>
      </section>

      <!-- STRATEGY TABLE -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-number">02</span>
          <h2 class="nu-section-title">Leverage <span>& Strategy Matrix</span></h2>
        </div>
        <table class="strategy-table">
          <thead>
            <tr>
              <th>Lever</th>
              <th>Why It Matters</th>
              <th>Action</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Recent Comparable Sales</strong></td>
              <td>Defends the offer price against any list-price anchor.</td>
              <td>Pull last 12 months of 6,000+ sq ft comps within 2-mile radius; normalize per sq ft.</td>
              <td><span class="priority-pill essential">Essential</span></td>
            </tr>
            <tr>
              <td><strong>Time on Market</strong></td>
              <td>Long DOM weakens seller leverage and widens the negotiation range.</td>
              <td>Verify listing history, prior price changes, and any contract fall-throughs.</td>
              <td><span class="priority-pill high">High</span></td>
            </tr>
            <tr>
              <td><strong>Seller Motivation</strong></td>
              <td>Understanding the "why" reveals which terms — not just price — create real value.</td>
              <td>Ask agent open-ended questions: timeline, next move, flexibility on close date.</td>
              <td><span class="priority-pill high">High</span></td>
            </tr>
            <tr>
              <td><strong>Financing Proof</strong></td>
              <td>A real pre-approval or proof-of-funds separates the offer from tire-kickers.</td>
              <td>Have Renasant Bank (Patrick Lavette) letter ready before the first verbal offer.</td>
              <td><span class="priority-pill essential">Essential</span></td>
            </tr>
            <tr>
              <td><strong>Inspection Contingency</strong></td>
              <td>A 7,098 sq ft estate has more systems — more surface area for hidden issues.</td>
              <td>Structure 10–14 day inspection window with right to renegotiate or terminate.</td>
              <td><span class="priority-pill essential">Essential</span></td>
            </tr>
            <tr>
              <td><strong>Close-Date Flexibility</strong></td>
              <td>If seller needs a specific date, flexibility is currency that buys price concessions.</td>
              <td>Offer rent-back or delayed close where it costs little and buys material savings.</td>
              <td><span class="priority-pill med">Medium</span></td>
            </tr>
            <tr>
              <td><strong>Earnest Money Size</strong></td>
              <td>Signals seriousness — large EMD strengthens weaker-price offers.</td>
              <td>Scale earnest money to offer gap; larger EMD when offering below list.</td>
              <td><span class="priority-pill med">Medium</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- VALUATION ANCHORS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-number">03</span>
          <h2 class="nu-section-title">Valuation <span>Anchors</span></h2>
        </div>
        <div class="valuation-grid">
          <div class="val-card">
            <div class="val-label">Market Comps</div>
            <div class="val-anchor">$/sq ft × 7,098</div>
            <div class="val-note">Closed-sale comparables from the prior 12 months, adjusted for condition and lot.</div>
          </div>
          <div class="val-card">
            <div class="val-label">Replacement Cost</div>
            <div class="val-anchor">Land + Build</div>
            <div class="val-note">Lot value plus new-construction cost per sq ft at current local rates.</div>
          </div>
          <div class="val-card">
            <div class="val-label">Income / Alt-Use</div>
            <div class="val-anchor">Hold · Lease · Reno</div>
            <div class="val-note">What the property would yield under each realistic use case — never overpay for an unknown.</div>
          </div>
        </div>
        <p style="font-size:0.95rem; color:var(--nu-body-text); padding-left:16px; border-left:3px solid var(--nu-cyan); margin-top:12px;">
          The opening offer should be at the low end of the defensible range — backed by math, not apology. The walk-away number should be set before the first conversation, in writing, and never crossed in the heat of the moment.
        </p>
      </section>

      <!-- DILIGENCE -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-number">04</span>
          <h2 class="nu-section-title">Due <span>Diligence Checklist</span></h2>
        </div>
        <div class="diligence-grid">
          <div class="diligence-col">
            <h3>Property & Physical</h3>
            <ul class="checklist">
              <li><strong>Survey & boundaries</strong> — confirm lot lines, easements, encroachments.</li>
              <li><strong>Roof & structural</strong> — age, warranty, visible settling, foundation reports.</li>
              <li><strong>HVAC / mechanical</strong> — age, capacity for 7,098 sq ft, service records.</li>
              <li><strong>Plumbing & electrical</strong> — panel capacity, code compliance, permits.</li>
              <li><strong>Water, septic, sewer</strong> — city or private; inspect and test.</li>
              <li><strong>Environmental</strong> — radon, mold, asbestos, lead paint where relevant.</li>
              <li><strong>Improvements & permits</strong> — confirm every addition was permitted.</li>
            </ul>
          </div>
          <div class="diligence-col">
            <h3>Legal, Financial & Title</h3>
            <ul class="checklist">
              <li><strong>Title search</strong> — clear chain of title, no unresolved liens.</li>
              <li><strong>Property taxes</strong> — current assessment, trajectory, any exemptions.</li>
              <li><strong>HOA or covenants</strong> — restrictions, fees, capital reserves.</li>
              <li><strong>Insurance quotes</strong> — wind, flood zone, replacement cost estimate.</li>
              <li><strong>Seller's disclosure</strong> — read line by line, cross-check with inspection.</li>
              <li><strong>Appraisal</strong> — lender-ordered, independent of seller input.</li>
              <li><strong>Closing cost estimate</strong> — title, transfer, recording, prorations.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- POSTURE -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-number">05</span>
          <h2 class="nu-section-title">Negotiation <span>Posture</span></h2>
        </div>
        <div class="posture-panel">
          <h3>Principles That Govern the Conversation</h3>
          <div class="posture-quote">"Lead with the ask. Back every number with a reason. Stay warm, stay direct, and be willing to walk away from any deal that no longer makes sense."</div>
          <div class="posture-points">
            <div class="posture-point">
              <strong>Warm & Direct</strong>
              <span>Open every call with courtesy. Deliver the ask plainly. No filler, no apology for the number.</span>
            </div>
            <div class="posture-point">
              <strong>Math, Not Mood</strong>
              <span>Every counter is tied to a comp, inspection finding, or documented cost. The number is never personal.</span>
            </div>
            <div class="posture-point">
              <strong>Listen First</strong>
              <span>Ask what success looks like for the seller. Often the unlock is terms — date, rent-back, fixtures — not price.</span>
            </div>
            <div class="posture-point">
              <strong>Walk-Away Set</strong>
              <span>The ceiling is decided in writing before the first conversation and does not move under pressure.</span>
            </div>
            <div class="posture-point">
              <strong>In Writing, Quickly</strong>
              <span>Verbal alignment is good; a written offer is real. Move to paper as soon as principles align.</span>
            </div>
            <div class="posture-point">
              <strong>One Voice</strong>
              <span>All communication routes through a single negotiator — no mixed signals, no freelance concessions.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-number">06</span>
          <h2 class="nu-section-title">Process <span>Timeline</span></h2>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot">1</div>
            <div class="timeline-phase">Week 1 · Preparation</div>
            <div class="timeline-title">Assemble the File</div>
            <div class="timeline-desc">
              <ul>
                <li>Gather recent comparable sales within 2-mile radius.</li>
                <li>Confirm listing history and days on market.</li>
                <li>Secure proof-of-funds or financing pre-approval letter.</li>
                <li>Define opening offer, target price, and walk-away number in writing.</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">2</div>
            <div class="timeline-phase">Week 2 · Opening Contact</div>
            <div class="timeline-title">Initial Conversation with Seller / Agent</div>
            <div class="timeline-desc">
              <ul>
                <li>Schedule a property walk-through with a clear objective.</li>
                <li>Ask open-ended questions about seller timeline and motivation.</li>
                <li>Signal seriousness without disclosing the offer number yet.</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">3</div>
            <div class="timeline-phase">Week 2–3 · Written Offer</div>
            <div class="timeline-title">Submit the Opening Offer</div>
            <div class="timeline-desc">
              <ul>
                <li>Anchor offer supported by comps and replacement-cost analysis.</li>
                <li>Inspection (10–14 days), financing, and appraisal contingencies.</li>
                <li>Earnest money sized to signal seriousness.</li>
                <li>Target close date with built-in flexibility.</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">4</div>
            <div class="timeline-phase">Week 3–4 · Negotiation</div>
            <div class="timeline-title">Counter & Close the Gap</div>
            <div class="timeline-desc">
              <ul>
                <li>Each counter is math-backed; every concession trades for a term.</li>
                <li>Trade non-price terms where they cost little and buy real savings.</li>
                <li>Move to signed contract once principles align in writing.</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">5</div>
            <div class="timeline-phase">Week 4–6 · Under Contract</div>
            <div class="timeline-title">Inspection, Appraisal, Title</div>
            <div class="timeline-desc">
              <ul>
                <li>Complete full physical inspection with specialists as needed.</li>
                <li>Re-price or request credits for material findings, not cosmetic ones.</li>
                <li>Clear appraisal and title review; confirm insurance coverage.</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">6</div>
            <div class="timeline-phase">Week 6–8 · Closing</div>
            <div class="timeline-title">Funding & Recording</div>
            <div class="timeline-desc">
              <ul>
                <li>Final walk-through within 24–48 hours of close.</li>
                <li>Closing disclosure reviewed; funds wired; deed recorded.</li>
                <li>Keys and documentation package transferred.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- NEXT ACTION -->
      <section class="nu-section" style="margin-bottom: 16px;">
        <div class="nu-section-header">
          <span class="nu-section-number">07</span>
          <h2 class="nu-section-title">Immediate <span>Next Action</span></h2>
        </div>
        <div class="next-action-panel">
          <div class="next-action-icon">→</div>
          <div class="next-action-body">
            <h3>Pull Comps & Confirm Financing, Then Open the Conversation</h3>
            <p>Before any seller contact, finalize the comparable-sales file and have the Renasant Bank pre-approval letter in hand. The opening call with the listing agent happens only after both are ready.</p>
          </div>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Acquisition%20%E2%80%94%20Next%20Steps" class="next-action-btn">Advance This File</a>
        </div>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO · Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Internal Acquisition Brief · Prepared for Aaron C. Norris · 2026-04-22
    </div>
  </footer>

</body>
</html>