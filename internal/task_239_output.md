<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Strategy — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-success: #2E7D32;
      --nu-warning: #E65100;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-white);
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 30%; left: 50%;
      transform: translate(-50%, -50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* PAGE TITLE */
    .page-title {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 30px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .page-title h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.2;
    }
    .page-title h1 .blue { color: var(--nu-blue); }
    .page-title .subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      font-style: italic;
    }
    .page-title .date-stamp {
      display: inline-block;
      margin-top: 14px;
      padding: 4px 14px;
      background: var(--nu-light-gray);
      color: var(--nu-navy);
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 18px;
      letter-spacing: 0.01em;
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

    /* PROPERTY SUMMARY CARD */
    .property-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-blue);
      border-radius: 10px;
      padding: 32px;
      margin-bottom: 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .property-card .address {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .property-card .type-label {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin-top: 16px;
    }
    .property-stat {
      text-align: center;
      padding: 16px 12px;
      background: var(--nu-white);
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
    }
    .property-stat .stat-value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 4px;
    }
    .property-stat .stat-label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-body-text);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* STRATEGY PHASES */
    .phase-list {
      list-style: none;
      counter-reset: phase;
    }
    .phase-item {
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 24px 24px 80px;
      margin-bottom: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      counter-increment: phase;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .phase-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .phase-item::before {
      content: counter(phase);
      position: absolute;
      left: 20px;
      top: 24px;
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
      box-shadow: 0 3px 10px rgba(0,0,255,0.3);
    }
    .phase-title {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .phase-meta {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .phase-body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .phase-body ul {
      margin-top: 10px;
      padding-left: 20px;
    }
    .phase-body li {
      margin-bottom: 6px;
    }

    /* NEGOTIATION LEVERS TABLE */
    .levers-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .levers-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .levers-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .levers-table tr:last-child td { border-bottom: none; }
    .levers-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .levers-table .lever-name {
      font-weight: 700;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .impact-tag {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .impact-high { background: #FFEBEE; color: #C62828; }
    .impact-med { background: #FFF3E0; color: #E65100; }
    .impact-low { background: #E8F5E9; color: var(--nu-success); }

    /* DUE DILIGENCE CHECKLIST */
    .checklist {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 16px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      transition: border-color 0.2s ease;
    }
    .checklist-item:hover {
      border-color: var(--nu-blue);
    }
    .checkbox {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 12px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-text {
      font-size: 0.93rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .checklist-text strong {
      color: var(--nu-dark-text);
    }

    /* RED FLAGS */
    .flag-box {
      background: #FFF8E1;
      border-left: 5px solid var(--nu-warning);
      border-radius: 6px;
      padding: 20px 24px;
      margin-bottom: 14px;
    }
    .flag-box .flag-title {
      font-weight: 900;
      color: var(--nu-warning);
      font-size: 1rem;
      margin-bottom: 6px;
      letter-spacing: 0.03em;
    }
    .flag-box .flag-body {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* OPENING POSITION BOX */
    .position-box {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 32px;
      box-shadow: 0 6px 20px rgba(0,0,255,0.15);
    }
    .position-box .position-label {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
    }
    .position-box h3 {
      font-size: 1.6rem;
      font-weight: 900;
      margin-bottom: 18px;
      line-height: 1.3;
    }
    .position-box p {
      font-size: 1rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.92);
      margin-bottom: 12px;
    }
    .position-box p:last-child { margin-bottom: 0; }
    .position-box strong {
      color: var(--nu-cyan);
      font-weight: 700;
    }

    /* NEXT ACTIONS */
    .action-list {
      list-style: none;
      padding: 0;
    }
    .action-list li {
      display: flex;
      align-items: flex-start;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .action-list li:last-child { border-bottom: none; }
    .action-number {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
    }
    .action-text strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 2px;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 1rem;
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
      margin: 20px auto;
      opacity: 0.5;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .page-title h1 { font-size: 1.7rem; }
      .property-card .address { font-size: 1.25rem; }
      .phase-item { padding: 20px 20px 20px 20px; }
      .phase-item::before { position: static; margin-bottom: 12px; }
      .levers-table th, .levers-table td { padding: 10px 8px; font-size: 0.85rem; }
      .position-box { padding: 24px 20px; }
      .position-box h3 { font-size: 1.3rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .phase-item, .property-card, .checklist-item { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-badge">Acquisition Strategy Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PAGE TITLE -->
      <div class="page-title">
        <h1><span class="blue">Negotiate</span> Purchase of 4505 Buttewoods Estate</h1>
        <div class="subtitle">7,098 sq ft private residence acquisition — strategy, diligence, and opening position</div>
        <div class="date-stamp">DRAFTED: APRIL 22, 2026</div>
      </div>

      <!-- PROPERTY SUMMARY -->
      <section class="nu-section">
        <div class="nu-section-title">Subject <span>Property</span></div>
        <div class="nu-section-rule"></div>
        <div class="property-card">
          <div class="type-label">Target Acquisition · Private Residence</div>
          <div class="address">4505 Buttewoods</div>
          <div class="property-stats">
            <div class="property-stat">
              <div class="stat-value">7,098</div>
              <div class="stat-label">Square Feet</div>
            </div>
            <div class="property-stat">
              <div class="stat-value">Estate</div>
              <div class="stat-label">Classification</div>
            </div>
            <div class="property-stat">
              <div class="stat-value">Private</div>
              <div class="stat-label">Negotiation Mode</div>
            </div>
            <div class="property-stat">
              <div class="stat-value">Active</div>
              <div class="stat-label">Status</div>
            </div>
          </div>
        </div>
      </section>

      <!-- OPENING POSITION -->
      <section class="nu-section">
        <div class="nu-section-title">Opening <span>Position</span></div>
        <div class="nu-section-rule"></div>
        <div class="position-box">
          <div class="position-label">Anchor Strategy</div>
          <h3>Lead with a Cash-Ready, Clean-Terms Offer — Let the Seller Anchor Price First</h3>
          <p>Aaron does not disclose a ceiling. The goal of the first conversation is to surface the seller's <strong>number, motivation, and timeline</strong> — in that order. Whoever names a price first loses anchor leverage.</p>
          <p>If forced to open, come in at roughly <strong>80–85% of recent comparable closings</strong> for estate-class properties in the immediate submarket, framed around documented inspection findings rather than market weakness. Never open with a round number — specificity signals analysis.</p>
          <p>Clean terms carry real value to a seller of a 7,098 sq ft estate: <strong>proof of funds, flexible close, no contingency on sale of existing property, and willingness to take the home "as-is" above a diligence threshold</strong>. Trade terms for price before trading price for price.</p>
        </div>
      </section>

      <!-- STRATEGY PHASES -->
      <section class="nu-section">
        <div class="nu-section-title">Negotiation <span>Phases</span></div>
        <div class="nu-section-rule"></div>
        <ul class="phase-list">

          <li class="phase-item">
            <div class="phase-title">Intelligence Gathering</div>
            <div class="phase-meta">Days 1–3 · Before Any Offer</div>
            <div class="phase-body">
              Before contact, understand the full picture. A 7,098 sq ft estate is a narrow market — comps, days-on-market, and prior listing history tell the story.
              <ul>
                <li>Pull last 5 years of sale history for 4505 Buttewoods (prior purchase price, any prior listings, withdrawals)</li>
                <li>Assemble three comparable sales of estate-class homes (6,500–8,000 sq ft) within the same submarket, last 12–18 months</li>
                <li>Check county assessor value, current tax burden, and any liens or unpaid assessments</li>
                <li>Identify seller motivation: relocation, estate disposition, financial, downsizing — each implies different leverage</li>
                <li>Verify HOA status, deed restrictions, and any architectural review constraints</li>
              </ul>
            </div>
          </li>

          <li class="phase-item">
            <div class="phase-title">First Contact — Discovery Call</div>
            <div class="phase-meta">Day 3 · Listing Agent or Seller Directly</div>
            <div class="phase-body">
              The first call is a listening exercise. Aaron asks questions and takes notes. No offer discussed. No ceiling disclosed.
              <ul>
                <li>"What brought you to the decision to sell?" (motivation)</li>
                <li>"How flexible is your timeline?" (urgency)</li>
                <li>"What's the seller hoping to see happen with the home after?" (emotional anchor)</li>
                <li>"Have there been prior offers, and what didn't work about them?" (anchor discovery)</li>
                <li>"Are there any updates or systems the seller is particularly proud of?" (value signals)</li>
              </ul>
            </div>
          </li>

          <li class="phase-item">
            <div class="phase-title">Written Offer — Structured Terms</div>
            <div class="phase-meta">Days 5–7 · After Inspection Access</div>
            <div class="phase-body">
              Submit a written offer with a cover letter. The cover letter is the most important document — it frames the offer as thoughtful, serious, and clean, not opportunistic.
              <ul>
                <li>Earnest money at 1–2% of offer (serious, not reckless)</li>
                <li>Proof of funds attached — removes the "can they actually close" friction</li>
                <li>Inspection period: 10 days (short enough to signal intent, long enough to actually inspect 7,098 sq ft)</li>
                <li>Close in 30 days from acceptance — rewards motivated sellers</li>
                <li>Offer expires in 72 hours — creates urgency without being abrasive</li>
              </ul>
            </div>
          </li>

          <li class="phase-item">
            <div class="phase-title">Counter Response Framework</div>
            <div class="phase-meta">Days 7–14 · Iteration</div>
            <div class="phase-body">
              Expect 1–3 rounds of counters. The rule is: <strong>every concession is paired with a concession request</strong>. Never give something without asking for something.
              <ul>
                <li>If they raise price → ask for appliances, furniture, credit, or extended close</li>
                <li>If they shorten inspection → ask for repair credit cap or seller concession</li>
                <li>If they refuse a credit → counter with price reduction of equal value</li>
                <li>Walk-away point is private — never telegraphed, never threatened unless it's real</li>
              </ul>
            </div>
          </li>

          <li class="phase-item">
            <div class="phase-title">Inspection & Re-Negotiation</div>
            <div class="phase-meta">Days 15–25 · Post-Acceptance Leverage</div>
            <div class="phase-body">
              A 7,098 sq ft home has systems — HVAC zones, roof, foundation, plumbing, electrical panels, pool/outdoor if applicable. Inspection almost always surfaces $15k–$50k of findings on estate-class homes. This is the second negotiation window.
              <ul>
                <li>Licensed general inspector + specialty trades (roof, HVAC, structural, sewer scope)</li>
                <li>Present findings as a written request — dollar amounts, not vague concerns</li>
                <li>Prioritize credit over seller-performed repairs (better quality control)</li>
                <li>Reserve the right to terminate — but only use it if findings are genuinely material</li>
              </ul>
            </div>
          </li>

          <li class="phase-item">
            <div class="phase-title">Close & Post-Close</div>
            <div class="phase-meta">Days 26–30 · Execution</div>
            <div class="phase-body">
              Closing is execution — surprises here mean diligence failed. Title search, final walk-through, wire verification (call the title company to verify wire instructions — never trust email).
              <ul>
                <li>Title commitment reviewed 5+ days before close</li>
                <li>Final walk-through within 24 hours of close</li>
                <li>Utility transfers scheduled for close day</li>
                <li>Insurance bound effective close day</li>
                <li>Retain all closing documents in permanent records</li>
              </ul>
            </div>
          </li>

        </ul>
      </section>

      <!-- NEGOTIATION LEVERS -->
      <section class="nu-section">
        <div class="nu-section-title">Negotiation <span>Levers</span></div>
        <div class="nu-section-rule"></div>
        <table class="levers-table">
          <thead>
            <tr>
              <th>Lever</th>
              <th>How to Use It</th>
              <th>Price Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="lever-name">Cash / No Financing Contingency</td>
              <td>Eliminates appraisal risk and bank timelines. Worth 3–5% of price to a motivated seller.</td>
              <td><span class="impact-tag impact-high">High</span></td>
            </tr>
            <tr>
              <td class="lever-name">Proof of Funds Upfront</td>
              <td>Attach with initial offer. Removes "tire kicker" filter and separates offer from competing bids.</td>
              <td><span class="impact-tag impact-high">High</span></td>
            </tr>
            <tr>
              <td class="lever-name">Flexible Close Date</td>
              <td>Ask: "When is your ideal close date?" Then match it. Costs nothing; extremely valuable to relocation sellers.</td>
              <td><span class="impact-tag impact-high">High</span></td>
            </tr>
            <tr>
              <td class="lever-name">"As-Is" Above Threshold</td>
              <td>Offer to accept property as-is for any finding under $5,000. Sellers hate open-ended repair lists.</td>
              <td><span class="impact-tag impact-med">Medium</span></td>
            </tr>
            <tr>
              <td class="lever-name">Short Inspection Window</td>
              <td>10 days vs. standard 14–21. Signals seriousness; reduces seller's "what if it falls through" risk.</td>
              <td><span class="impact-tag impact-med">Medium</span></td>
            </tr>
            <tr>
              <td class="lever-name">Waive Home Sale Contingency</td>
              <td>If applicable — not dependent on selling another property. Major differentiator in seller's eyes.</td>
              <td><span class="impact-tag impact-high">High</span></td>
            </tr>
            <tr>
              <td class="lever-name">Seller Occupancy Rent-Back</td>
              <td>Offer 30–60 days free occupancy post-close. Costs carrying charges but can win deals over higher offers.</td>
              <td><span class="impact-tag impact-med">Medium</span></td>
            </tr>
            <tr>
              <td class="lever-name">Personal Cover Letter</td>
              <td>Handwritten or printed on letterhead. Humanizes the buyer. On estate properties, sellers often choose the buyer they trust.</td>
              <td><span class="impact-tag impact-low">Low–Med</span></td>
            </tr>
            <tr>
              <td class="lever-name">Include Furnishings Request</td>
              <td>If furnished, ask for selected pieces. Gives seller easy concession alternative to price reduction.</td>
              <td><span class="impact-tag impact-low">Low</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-title">Due Diligence <span>Checklist</span></div>
        <div class="nu-section-rule"></div>
        <div class="checklist">
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Title Search</strong> — Clear title, no clouds, no unreleased liens, no unresolved judgments.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Survey</strong> — Boundary verification, easements, encroachments. Critical on 7,098 sq ft estates.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>General Home Inspection</strong> — Licensed, experienced with estate-class homes.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Roof Inspection</strong> — Separate specialist. Estate roofs are often expensive ($40k–$120k replacement).</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>HVAC Inspection</strong> — Large homes typically have 3–5 zones; each system evaluated for age and capacity.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Foundation / Structural</strong> — Engineer report if any cracking, settlement, or grading concerns.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Sewer Scope</strong> — $200 cost; can surface $10k+ problems. Mandatory on any home over 20 years old.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Pest / Termite / WDO</strong> — Required by most lenders; valuable regardless.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Radon & Water Quality</strong> — Especially if well water is present.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Appraisal</strong> — Independent valuation, even for cash purchase. Sanity check on price.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>HOA Documents</strong> — CC&Rs, bylaws, recent minutes, financial statements, pending assessments.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Property Tax History</strong> — 5-year trend; upcoming reassessment risk.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Insurance Quote</strong> — Before closing. Estate homes can carry high premiums or flood-zone surprises.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Utility Averages</strong> — Last 12 months of electric, gas, water. Large homes hide large costs.</div>
          </div>
        </div>
      </section>

      <!-- RED FLAGS -->
      <section class="nu-section">
        <div class="nu-section-title">Red <span>Flags to Watch</span></div>
        <div class="nu-section-rule"></div>

        <div class="flag-box">
          <div class="flag-title">Seller Refuses Inspection Access or Imposes Unreasonable Limits</div>
          <div class="flag-body">Legitimate sellers want the inspection to happen — it removes a common deal-killer. Restrictive access signals something is being hidden.</div>
        </div>

        <div class="flag-box">
          <div class="flag-title">Prior Sale Contracts Fell Through Late in Escrow</div>
          <div class="flag-body">If the property has gone under contract twice and both deals died after inspection, assume there's a major unresolved issue.</div>
        </div>

        <div class="flag-box">
          <div class="flag-title">Price Well Below Comps with No Explanation</div>
          <div class="flag-body">Underpriced estates usually indicate distress, structural, title, or environmental issues. Investigate before celebrating.</div>
        </div>

        <div class="flag-box">
          <div class="flag-title">Seller Unwilling to Provide Disclosures in Writing</div>
          <div class="flag-body">Verbal assurances do not survive closing. Everything material must be disclosed in writing, signed, and part of the closing file.</div>
        </div>

        <div class="flag-box">
          <div class="flag-title">HOA or Deed Restrictions That Limit Use</div>
          <div class="flag-body">On estate properties: architectural review boards, tear-down restrictions, short-term rental prohibitions, and easements can materially affect future flexibility.</div>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <div class="nu-section-title">Next <span>Actions</span></div>
        <div class="nu-section-rule"></div>
        <ul class="action-list">
          <li>
            <div class="action-number">1</div>
            <div class="action-text">
              <strong>Pull Property Record (Today)</strong>
              County assessor record, deed history, tax status, any recorded liens or easements at 4505 Buttewoods.
            </div>
          </li>
          <li>
            <div class="action-number">2</div>
            <div class="action-text">
              <strong>Assemble Comparable Sales File (Day 1–2)</strong>
              Three estate-class sales (6,500–8,000 sq ft) within the same submarket, closed in last 18 months.
            </div>
          </li>
          <li>
            <div class="action-number">3</div>
            <div class="action-text">
              <strong>Proof of Funds Letter (Day 2)</strong>
              Bank letter dated within 30 days, on letterhead, addressed generically or to the seller upon request.
            </div>
          </li>
          <li>
            <div class="action-number">4</div>
            <div class="action-text">
              <strong>First Contact — Discovery Call (Day 3)</strong>
              Listening call only. Goal: surface motivation, timeline, and prior offers. No price discussion.
            </div>
          </li>
          <li>
            <div class="action-number">5</div>
            <div class="action-text">
              <strong>Retain Real Estate Attorney (Day 3–4)</strong>
              Review contract language before submission. Alabama real estate law has specific disclosure requirements.
            </div>
          </li>
          <li>
            <div class="action-number">6</div>
            <div class="action-text">
              <strong>Submit Written Offer (Day 5–7)</strong>
              Structured offer with cover letter, proof of funds, 72-hour expiration, 10-day inspection, 30-day close.
            </div>
          </li>
          <li>
            <div class="action-number">7</div>
            <div class="action-text">
              <strong>Schedule Full Inspection Package (Upon Acceptance)</strong>
              General inspector, roof, HVAC, structural, sewer scope, pest. Book same week as contract signing.
            </div>
          </li>
        </ul>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>