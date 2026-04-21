<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
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
      --nu-success: #0E8A3E;
      --nu-warn: #B8860B;
      --nu-danger: #B42318;
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

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 18px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
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
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 180px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ACTION BANNER */
    .action-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0a0e5c 100%);
      color: var(--nu-white);
      padding: 22px 28px;
      border-radius: 10px;
      margin-bottom: 36px;
      display: flex;
      align-items: center;
      gap: 20px;
      box-shadow: 0 6px 24px rgba(0,0,51,0.18);
      border-left: 5px solid var(--nu-cyan);
    }
    .action-banner-label {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .action-banner-title {
      font-weight: 700;
      font-size: 1.05rem;
      line-height: 1.4;
    }
    .action-banner-icon {
      font-size: 2.4rem;
      flex-shrink: 0;
      line-height: 1;
    }

    /* SECTION */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 900;
    }
    .nu-section-sub {
      color: #666;
      font-size: 0.95rem;
      margin-bottom: 28px;
      max-width: 760px;
    }
    .nu-section { margin-bottom: 48px; }

    /* PROPERTY HERO */
    .property-hero {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 36px;
      background: var(--nu-white);
      border-radius: 12px;
      padding: 36px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 40px;
    }
    .hero-left h2 {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .hero-address {
      color: var(--nu-blue);
      font-weight: 700;
      font-size: 1.05rem;
      margin-bottom: 20px;
    }
    .hero-description {
      color: var(--nu-body-text);
      font-size: 0.98rem;
      line-height: 1.7;
      margin-bottom: 24px;
    }
    .hero-status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(6,208,255,0.1);
      border: 1px solid rgba(6,208,255,0.4);
      color: #005a6b;
      padding: 8px 16px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .hero-status::before {
      content: '';
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--nu-cyan);
      box-shadow: 0 0 0 4px rgba(6,208,255,0.25);
    }
    .hero-right {
      background: linear-gradient(160deg, #f8fafc 0%, #eef2ff 100%);
      border-radius: 10px;
      padding: 28px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .hero-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 20px 24px; }
    .hero-fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 4px;
    }
    .hero-fact-value {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .hero-fact-sub {
      font-size: 0.82rem;
      color: #777;
      margin-top: 2px;
    }

    /* NEGOTIATION POSITION GRID */
    .position-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 8px;
    }
    .position-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      border-top: 4px solid var(--nu-blue);
    }
    .position-card.opening { border-top-color: var(--nu-cyan); }
    .position-card.target { border-top-color: var(--nu-blue); }
    .position-card.walkaway { border-top-color: var(--nu-accent-gold); }

    .position-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 8px;
    }
    .position-value {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .position-note {
      font-size: 0.85rem;
      color: #666;
      line-height: 1.5;
    }

    /* CHEVRON BADGES */
    .badge-row { margin-bottom: 28px; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 20px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      max-width: 700px;
    }
    .nu-badge-num {
      display: inline-flex;
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
      border-left: 3px solid var(--nu-medium-gray);
    }
    .timeline-item {
      position: relative;
      margin-bottom: 28px;
      padding-bottom: 4px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -42px;
      top: 4px;
      width: 16px; height: 16px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 4px var(--nu-white);
    }
    .timeline-item.done::before { background: var(--nu-blue); }
    .timeline-item.next::before {
      background: var(--nu-cyan);
      border-color: var(--nu-cyan);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 4px var(--nu-white), 0 0 0 8px rgba(6,208,255,0.25); }
      50% { box-shadow: 0 0 0 4px var(--nu-white), 0 0 0 12px rgba(6,208,255,0); }
    }
    .timeline-date {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .timeline-body {
      font-size: 0.93rem;
      color: #555;
      line-height: 1.55;
    }

    /* DILIGENCE CHECKLIST */
    .diligence-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }
    .dil-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
      display: flex;
      gap: 14px;
      align-items: flex-start;
      transition: box-shadow 0.2s ease, border-color 0.2s ease;
    }
    .dil-item:hover {
      border-color: var(--nu-cyan);
      box-shadow: 0 4px 14px rgba(6,208,255,0.12);
    }
    .dil-check {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border-radius: 5px;
      border: 2px solid var(--nu-blue);
      margin-top: 2px;
    }
    .dil-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      margin-bottom: 3px;
    }
    .dil-body {
      font-size: 0.87rem;
      color: #666;
      line-height: 1.5;
    }

    /* LEVER TABLE */
    .lever-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .lever-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .lever-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .lever-table tr:nth-child(even) td { background: #fafbff; }
    .lever-lever {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .lever-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.04em;
    }
    .lever-pill.high { background: rgba(180,35,24,0.1); color: var(--nu-danger); }
    .lever-pill.med { background: rgba(184,134,11,0.12); color: var(--nu-warn); }
    .lever-pill.low { background: rgba(14,138,62,0.12); color: var(--nu-success); }

    /* DECISION PANEL */
    .decision-panel {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 50%, #0066ee 100%);
      color: var(--nu-white);
      border-radius: 14px;
      padding: 40px;
      margin-top: 8px;
      box-shadow: 0 10px 30px rgba(0,0,255,0.22);
      position: relative;
      overflow: hidden;
    }
    .decision-panel::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.22) 0%, transparent 70%);
      pointer-events: none;
    }
    .decision-panel > * { position: relative; z-index: 1; }
    .decision-label {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.22em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .decision-title {
      font-size: 1.6rem;
      font-weight: 900;
      margin-bottom: 16px;
      line-height: 1.2;
    }
    .decision-body {
      font-size: 1rem;
      line-height: 1.7;
      max-width: 820px;
      color: rgba(255,255,255,0.95);
      margin-bottom: 24px;
    }
    .decision-actions { display: flex; flex-wrap: wrap; gap: 12px; }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 26px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      border: 2px solid transparent;
    }
    .nu-btn-primary {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .nu-btn-primary:hover {
      background: var(--nu-white);
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(255,255,255,0.25);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-white);
      border-color: rgba(255,255,255,0.6);
    }
    .nu-btn-secondary:hover {
      border-color: var(--nu-white);
      background: rgba(255,255,255,0.08);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.88);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.06em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .property-hero { grid-template-columns: 1fr; }
      .position-grid { grid-template-columns: 1fr; }
      .diligence-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 50px 22px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-wrap { padding: 40px 22px 60px; }
      .property-hero { padding: 24px; }
      .hero-left h2 { font-size: 1.5rem; }
      .hero-facts { grid-template-columns: 1fr; gap: 16px; }
      .decision-panel { padding: 28px 22px; }
      .decision-title { font-size: 1.25rem; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .action-banner { flex-direction: column; align-items: flex-start; }
      .lever-table th, .lever-table td { padding: 10px 12px; font-size: 0.85rem; }
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

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- ACTION BANNER -->
      <div class="action-banner">
        <div class="action-banner-icon">⬣</div>
        <div>
          <div class="action-banner-label">reMarkable Action Item</div>
          <div class="action-banner-title">Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods</div>
        </div>
      </div>

      <!-- PROPERTY HERO -->
      <section class="property-hero">
        <div class="hero-left">
          <h2>4505 Buttewoods Estate Acquisition</h2>
          <div class="hero-address">4505 Buttewoods · Birmingham, Alabama area</div>
          <p class="hero-description">
            Structured negotiation plan for the acquisition of a 7,098 sq ft private estate.
            This file is the working negotiation board — opening position, target, walk-away,
            diligence checklist, leverage points, and the next concrete action — so every
            conversation with the seller, listing agent, and attorney is anchored to a single
            disciplined plan.
          </p>
          <div class="hero-status">Active · Negotiation Phase</div>
        </div>

        <div class="hero-right">
          <div class="hero-facts">
            <div>
              <div class="hero-fact-label">Livable Area</div>
              <div class="hero-fact-value">7,098 sq ft</div>
              <div class="hero-fact-sub">Single-family estate</div>
            </div>
            <div>
              <div class="hero-fact-label">Address</div>
              <div class="hero-fact-value">4505 Buttewoods</div>
              <div class="hero-fact-sub">Verify street suffix at closing</div>
            </div>
            <div>
              <div class="hero-fact-label">Use Case</div>
              <div class="hero-fact-value">Primary Residence</div>
              <div class="hero-fact-sub">Long-hold, legacy hold</div>
            </div>
            <div>
              <div class="hero-fact-label">Buyer</div>
              <div class="hero-fact-value">A. Norris</div>
              <div class="hero-fact-sub">Personal capacity, not NU LLC</div>
            </div>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION POSITIONS -->
      <section class="nu-section">
        <h3 class="nu-section-title">Negotiation <span>Positions</span></h3>
        <p class="nu-section-sub">
          Three numbers that must be set before the first offer is submitted. Fill
          the brackets with live comp data — never walk into a negotiation without
          all three anchored in writing.
        </p>

        <div class="position-grid">
          <div class="position-card opening">
            <div class="position-label">Opening Offer</div>
            <div class="position-value">$ ___ / sq ft</div>
            <div class="position-note">
              Aggressive but credible. Anchored to lowest defensible comp in the neighborhood
              within the last 9 months. Includes 15-day inspection contingency.
            </div>
          </div>
          <div class="position-card target">
            <div class="position-label">Target Settle</div>
            <div class="position-value">$ ___ / sq ft</div>
            <div class="position-note">
              The number we agree to shake hands on. Must land ≥ 8% below the initial
              ask price and leave budget for immediate post-close repairs.
            </div>
          </div>
          <div class="position-card walkaway">
            <div class="position-label">Walk-Away</div>
            <div class="position-value">$ ___ / sq ft</div>
            <div class="position-note">
              Hard ceiling. Written on paper, in the truck, before the meeting starts.
              If the seller crosses it, stand up and leave — no exceptions.
            </div>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION PLAYBOOK -->
      <section class="nu-section">
        <h3 class="nu-section-title">Negotiation <span>Playbook</span></h3>
        <p class="nu-section-sub">
          The six plays, in order. Do not skip steps. Every offer and counter goes
          through writing before it goes through voice.
        </p>

        <div class="badge-row">
          <div class="nu-badge"><span class="nu-badge-num">1</span>Establish seller motivation — time-on-market, reason for sale, prior offers</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>Pull three strongest comps within ½ mile, under 9 months, similar sq ft</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>Walk the property with contractor eyes — roof, HVAC, foundation, envelope</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>Present opening offer in writing with diligence contingency + 15-day inspection</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span>Counter with price reductions tied to specific defects, not round numbers</div>
          <div class="nu-badge"><span class="nu-badge-num">6</span>Close at target or walk — never negotiate against yourself</div>
        </div>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h3 class="nu-section-title">Due <span>Diligence Checklist</span></h3>
        <p class="nu-section-sub">
          Complete every item before signing the purchase agreement. A missed
          item here costs five figures later.
        </p>

        <div class="diligence-grid">
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">Title search — clean chain of custody</div>
              <div class="dil-body">Order binder through closing attorney. Confirm no outstanding liens, easements, or unreleased mortgages.</div>
            </div>
          </div>
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">Property tax history — last 5 years</div>
              <div class="dil-body">Confirm current assessment, paid-through date, pending millage changes, and homestead eligibility.</div>
            </div>
          </div>
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">Full inspection — licensed inspector</div>
              <div class="dil-body">Roof, foundation, HVAC (zones), electrical panel, plumbing, envelope, drainage, attic, crawlspace.</div>
            </div>
          </div>
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">Survey — current, stamped</div>
              <div class="dil-body">Encroachments, setbacks, lot lines, easements. Older surveys don't cover fence and pool additions.</div>
            </div>
          </div>
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">Seller disclosure — signed original</div>
              <div class="dil-body">Prior water intrusion, termite treatment history, known defects, insurance claims, renovation permits.</div>
            </div>
          </div>
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">Comps package — broker-pulled</div>
              <div class="dil-body">Three closed sales within ½ mile, last 9 months, ±15% square footage. Adjust for finish level.</div>
            </div>
          </div>
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">Insurance quote — preliminary binder</div>
              <div class="dil-body">Verify insurability, CLUE report, replacement cost. Alabama storm exposure changes the math.</div>
            </div>
          </div>
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">Financing pre-approval — hard letter</div>
              <div class="dil-body">Rate-locked pre-approval in hand before offer. Soft pre-qual is not leverage.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- LEVERS TABLE -->
      <section class="nu-section">
        <h3 class="nu-section-title">Leverage <span>Points</span></h3>
        <p class="nu-section-sub">
          Each lever is a lawful, ethical negotiation move. Pull them in priority
          order based on what the seller signals in conversation.
        </p>

        <table class="lever-table">
          <thead>
            <tr>
              <th style="width:28%">Lever</th>
              <th style="width:42%">How to Deploy</th>
              <th style="width:15%">Strength</th>
              <th style="width:15%">Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="lever-lever">Cash / fast close</td>
              <td>If financing-ready, offer a 21-day close. Speed is worth 2–4% to a motivated seller.</td>
              <td><span class="lever-pill high">High</span></td>
              <td>Seller time-sensitive</td>
            </tr>
            <tr>
              <td class="lever-lever">Inspection findings</td>
              <td>Document defects with photos and written contractor quotes. Counter with dollar-for-dollar reductions, never vague percentages.</td>
              <td><span class="lever-pill high">High</span></td>
              <td>Post-inspection</td>
            </tr>
            <tr>
              <td class="lever-lever">Days on market</td>
              <td>If listing > 60 days, reference it directly. Each week past 60 is a price concession opportunity.</td>
              <td><span class="lever-pill med">Medium</span></td>
              <td>DOM > 60</td>
            </tr>
            <tr>
              <td class="lever-lever">As-is terms</td>
              <td>Trade reduced contingencies for reduced price. Only if personal diligence is already done.</td>
              <td><span class="lever-pill med">Medium</span></td>
              <td>Diligence complete</td>
            </tr>
            <tr>
              <td class="lever-lever">Seller concessions</td>
              <td>If price won't move, ask for closing cost credit, appliance inclusions, or structural warranty.</td>
              <td><span class="lever-pill med">Medium</span></td>
              <td>Price ceiling hit</td>
            </tr>
            <tr>
              <td class="lever-lever">Walk-away credibility</td>
              <td>Be visibly willing to leave. One genuine walk resets the negotiation more than ten counters.</td>
              <td><span class="lever-pill high">High</span></td>
              <td>Target price firm</td>
            </tr>
            <tr>
              <td class="lever-lever">Silence</td>
              <td>After presenting a number, stop talking. Whoever speaks next usually concedes.</td>
              <td><span class="lever-pill low">Situational</span></td>
              <td>In-person only</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h3 class="nu-section-title">Negotiation <span>Timeline</span></h3>
        <p class="nu-section-sub">Stage gates, in sequence. Do not advance until the prior gate is closed.</p>

        <div class="timeline">
          <div class="timeline-item next">
            <div class="timeline-date">Stage 01 — This Week</div>
            <div class="timeline-title">Lock comps and pre-approval</div>
            <div class="timeline-body">
              Pull three strongest comps with broker. Call lender for hard pre-approval letter
              with rate lock. These two artifacts unlock the written offer.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Stage 02</div>
            <div class="timeline-title">Walk the property with contractor</div>
            <div class="timeline-body">
              Second showing with trade eyes. Photograph every defect. Get rough quotes on the
              top three repair items to use in counter-offers.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Stage 03</div>
            <div class="timeline-title">Submit opening offer in writing</div>
            <div class="timeline-body">
              Price at opening anchor. 15-day inspection contingency, financing contingency,
              earnest money calibrated to signal seriousness without overexposure.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Stage 04</div>
            <div class="timeline-title">Counter cycle</div>
            <div class="timeline-body">
              Maximum two written counters before declaring best-and-final. Every counter must
              tie to a specific defect, comp, or term — never round-number splits.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Stage 05</div>
            <div class="timeline-title">Inspection + final price reconciliation</div>
            <div class="timeline-body">
              Convert inspection findings into dollar-for-dollar price reductions or post-close credits.
              Re-confirm insurance binder before removing financing contingency.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Stage 06 — Close</div>
            <div class="timeline-title">Settlement at target, or walk</div>
            <div class="timeline-body">
              Final walk-through day of close. If anything material changed since inspection,
              pause, document, and re-price. Never sign under pressure.
            </div>
          </div>
        </div>
      </section>

      <!-- RISK & RED-LINES -->
      <section class="nu-section">
        <h3 class="nu-section-title">Red <span>Lines</span></h3>
        <p class="nu-section-sub">
          Non-negotiable terms. If the seller asks to cross any of these, the answer is no —
          or the price drops to compensate.
        </p>
        <div class="diligence-grid">
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">No waived inspection</div>
              <div class="dil-body">A 7,098 sq ft estate without inspection is uninsurable risk. Period.</div>
            </div>
          </div>
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">No as-is without written disclosure</div>
              <div class="dil-body">Seller must still sign the disclosure. As-is never overrides fraud statutes.</div>
            </div>
          </div>
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">No appraisal gap without cap</div>
              <div class="dil-body">If appraisal gap coverage is requested, cap it at a defined dollar amount.</div>
            </div>
          </div>
          <div class="dil-item">
            <div class="dil-check"></div>
            <div>
              <div class="dil-title">No post-close possession without rent</div>
              <div class="dil-body">Any seller rent-back must be priced at market + insurance rider. 72-hour maximum without legal review.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- DECISION PANEL -->
      <section class="nu-section">
        <div class="decision-panel">
          <div class="decision-label">Next Action · This Week</div>
          <div class="decision-title">Pull the comp package and pre-approval before the next conversation</div>
          <div class="decision-body">
            Before the next call or showing, two artifacts must exist on paper: (1) three closed
            comparable sales within ½ mile and 9 months, broker-pulled and printed; and (2) a
            hard, rate-locked pre-approval letter from the lender. Without both, no offer goes
            out. With both, the opening offer is a two-day exercise — not a two-week one.
          </div>
          <div class="decision-actions">
            <a href="tel:2055001343" class="nu-btn-primary">Call the broker</a>
            <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20—%20Comp%20Package%20Request" class="nu-btn-secondary">Email lender for pre-approval</a>
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
    <div class="nu-footer-meta">reMarkable Action Item · Private Negotiation Board · Confidential</div>
  </footer>

</body>
</html>