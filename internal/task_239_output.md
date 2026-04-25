<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
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
      --nu-red: #C8102E;
      --nu-green: #2E7D32;
      --nu-amber: #E8A317;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, #06D0FF 100%);
      padding: 50px 40px 70px;
      text-align: center;
      overflow: hidden;
      min-height: 240px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 64px; height: 64px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-phoenix-icon svg { width: 100%; height: 100%; fill: var(--nu-white); }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.8rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 20%; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px;
    }

    /* TASK HEADER BANNER */
    .task-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-bottom: 36px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    .task-banner-left .task-label {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-cyan);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .task-banner-left h1 {
      font-size: 1.7rem;
      font-weight: 900;
      letter-spacing: 0.01em;
      line-height: 1.2;
    }
    .task-banner-right {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .badge-pill {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .badge-pill.urgent { background: var(--nu-amber); color: var(--nu-navy); }
    .badge-pill.source { background: rgba(255,255,255,0.15); color: var(--nu-white); border: 1px solid rgba(255,255,255,0.3); }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
      letter-spacing: 0.01em;
    }
    .nu-section-title .first-word { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); }

    .section-block {
      margin-bottom: 44px;
    }

    /* PROPERTY SNAPSHOT */
    .property-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .snap-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .snap-cell .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 6px;
    }
    .snap-cell .value {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .snap-cell .sub {
      font-size: 0.82rem;
      color: #666;
      margin-top: 4px;
    }

    /* CHEVRON BADGES (negotiation levers) */
    .chevron-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 28px 16px 20px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.98rem;
      letter-spacing: 0.01em;
      min-height: 56px;
    }
    .nu-badge .num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }

    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      letter-spacing: 0.01em;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-card ul { list-style: none; }
    .nu-card ul li {
      padding: 8px 0 8px 20px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-body-text);
      border-bottom: 1px solid var(--nu-light-gray);
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.3rem;
      line-height: 1;
    }
    .nu-card ul li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 0;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
    }
    .ladder-step {
      padding: 22px 24px;
      text-align: center;
      border-right: 1px solid var(--nu-medium-gray);
      background: var(--nu-white);
    }
    .ladder-step:last-child { border-right: none; }
    .ladder-step .step-name {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #888;
      margin-bottom: 8px;
    }
    .ladder-step .step-price {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .ladder-step .step-detail {
      font-size: 0.82rem;
      color: #666;
      line-height: 1.4;
    }
    .ladder-step.opening { background: linear-gradient(135deg, #f0f9ff, #e0f2fe); }
    .ladder-step.opening .step-name { color: var(--nu-blue); }
    .ladder-step.target { background: linear-gradient(135deg, #e8f5e9, #c8e6c9); }
    .ladder-step.target .step-name { color: var(--nu-green); }
    .ladder-step.walkaway { background: linear-gradient(135deg, #fff3e0, #ffe0b2); }
    .ladder-step.walkaway .step-name { color: var(--nu-amber); }
    @media (max-width: 768px) {
      .ladder-step { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
      .ladder-step:last-child { border-bottom: none; }
    }

    /* ACTION LIST */
    .action-list {
      counter-reset: step;
      list-style: none;
    }
    .action-list li {
      counter-increment: step;
      position: relative;
      padding: 18px 20px 18px 68px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      margin-bottom: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    }
    .action-list li::before {
      content: counter(step);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 36px; height: 36px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .action-list li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .action-list li span.due {
      display: inline-block;
      margin-top: 6px;
      font-size: 0.78rem;
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #fff9e6 0%, #fff3d1 100%);
      border-left: 6px solid var(--nu-amber);
      padding: 22px 26px;
      border-radius: 8px;
      margin: 24px 0;
    }
    .callout .callout-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .callout p { font-size: 0.95rem; color: var(--nu-body-text); }

    /* RISK GRID */
    .risk-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    @media (max-width: 768px) { .risk-grid { grid-template-columns: 1fr; } }

    .risk-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 20px 22px;
      border: 1px solid var(--nu-medium-gray);
    }
    .risk-card.risk { border-top: 4px solid var(--nu-red); }
    .risk-card.lever { border-top: 4px solid var(--nu-green); }
    .risk-card h4 {
      font-weight: 900;
      font-size: 0.98rem;
      margin-bottom: 8px;
      color: var(--nu-dark-text);
    }
    .risk-card p { font-size: 0.9rem; color: var(--nu-body-text); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 36px 20px 54px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 20px; }
      .task-banner { padding: 22px 22px; }
      .task-banner-left h1 { font-size: 1.35rem; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .nu-section-title { font-size: 1.25rem; }
    }

    @media print {
      body { background: #fff; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .action-list li, .snap-cell { box-shadow: none; }
      .nu-footer { -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TASK BANNER -->
      <div class="task-banner">
        <div class="task-banner-left">
          <div class="task-label">Negotiation Briefing · Real Estate</div>
          <h1>4505 Buttewoods — 7,098 sq ft Estate Purchase</h1>
        </div>
        <div class="task-banner-right">
          <span class="badge-pill urgent">High Priority</span>
          <span class="badge-pill source">reMarkable Action Item</span>
          <span class="badge-pill">Owner: Aaron</span>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="property-snapshot">
          <div class="snap-cell">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <div class="sub">Subject property</div>
          </div>
          <div class="snap-cell">
            <div class="label">Building Size</div>
            <div class="value">7,098 sq ft</div>
            <div class="sub">Primary residence / estate</div>
          </div>
          <div class="snap-cell">
            <div class="label">Transaction Type</div>
            <div class="value">Purchase Negotiation</div>
            <div class="sub">Buyer-side representation</div>
          </div>
          <div class="snap-cell">
            <div class="label">Current Stage</div>
            <div class="value">Pre-Offer</div>
            <div class="sub">Strategy &amp; valuation</div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVE -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Objective</span> <span class="rest">&amp; Position</span></h2>
        <div class="nu-card" style="border-left: 6px solid var(--nu-blue);">
          <p style="font-size: 1.02rem; line-height: 1.75;">
            Negotiate purchase of the 7,098 square foot estate at <strong>4505 Buttewoods</strong> on terms that
            preserve capital, protect against undiscovered defects, and lock price before any public exposure
            moves the market. Objective is a clean, well-documented purchase agreement with seller concessions
            on closing costs and a due-diligence window long enough to complete inspection, title review,
            and financing contingencies.
          </p>
        </div>
      </section>

      <!-- NEGOTIATION LEVERS -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Levers</span></h2>
        <div class="chevron-list">
          <div class="nu-badge"><span class="num">1</span>Serious, well-funded, ready-to-close buyer — reduces seller's market risk</div>
          <div class="nu-badge"><span class="num">2</span>Short, clean due-diligence period in exchange for price concession</div>
          <div class="nu-badge"><span class="num">3</span>Flexible closing timeline — accommodate seller's move-out schedule</div>
          <div class="nu-badge"><span class="num">4</span>Pre-approved financing or proof of funds ready at offer submission</div>
          <div class="nu-badge"><span class="num">5</span>Minimal contingencies beyond inspection, title, appraisal, and financing</div>
          <div class="nu-badge"><span class="num">6</span>Willingness to purchase "as-is" on cosmetic items, not structural</div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Offer</span> <span class="rest">Ladder</span></h2>
        <div class="offer-ladder">
          <div class="ladder-step opening">
            <div class="step-name">Opening Offer</div>
            <div class="step-price">Anchor Low</div>
            <div class="step-detail">Justified by inspection risk, carrying cost, and recent comps. Must be defensible — not insulting.</div>
          </div>
          <div class="ladder-step target">
            <div class="step-name">Target Close</div>
            <div class="step-price">Fair Market</div>
            <div class="step-detail">The number Aaron walks away happy with. Supported by appraisal + pulled comps within 1 mile / 6 months.</div>
          </div>
          <div class="ladder-step walkaway">
            <div class="step-name">Walk-Away Ceiling</div>
            <div class="step-price">Hard Cap</div>
            <div class="step-detail">Price above which the deal no longer makes financial sense. Written down before negotiation starts.</div>
          </div>
        </div>
        <div class="callout">
          <div class="callout-title">Before you sign any offer</div>
          <p>Aaron — fill in the three specific dollar figures above before the first call with the listing agent.
          Never verbalize a number you have not already committed to in writing. The walk-away ceiling is the most
          important of the three: once it is set, the rest of the negotiation protects it.</p>
        </div>
      </section>

      <!-- DUE DILIGENCE + TERMS -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Due</span> <span class="rest">Diligence &amp; Terms</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Must-Have Contingencies</h3>
            <ul>
              <li><strong>Professional inspection</strong> — structural, roof, mechanical, electrical, plumbing</li>
              <li><strong>Clean title</strong> — attorney review, owner's title insurance issued</li>
              <li><strong>Appraisal</strong> — must meet or exceed contract price</li>
              <li><strong>Financing approval</strong> — mortgage commitment in writing</li>
              <li><strong>Survey</strong> — confirm lot lines, encroachments, easements</li>
              <li><strong>Disclosures reviewed</strong> — lead paint, radon, flood, HOA, prior repairs</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Terms to Negotiate</h3>
            <ul>
              <li><strong>Earnest money</strong> — high enough to show seriousness, low enough to protect if deal falls</li>
              <li><strong>Closing cost credits</strong> — ask for 2–3% seller contribution</li>
              <li><strong>Home warranty</strong> — one-year policy paid by seller</li>
              <li><strong>Repair credits</strong> — dollars in lieu of seller repairs after inspection</li>
              <li><strong>Possession date</strong> — at closing or short rent-back if seller needs it</li>
              <li><strong>Included fixtures</strong> — appliances, window treatments, mounted items spelled out</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- RISKS -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Risks</span> <span class="rest">&amp; Counter-Levers</span></h2>
        <div class="risk-grid">
          <div class="risk-card risk">
            <h4>Risk · Multiple Competing Offers</h4>
            <p>On a 7,098 sq ft estate the listing could attract institutional or cash buyers. Counter with escalation
            clause capped at the walk-away ceiling, or stronger earnest money deposit.</p>
          </div>
          <div class="risk-card risk">
            <h4>Risk · Appraisal Gap</h4>
            <p>Large homes often appraise below contract in a soft market. Negotiate an appraisal-gap clause that
            caps Aaron's cash exposure at a specific dollar figure — do not sign an open-ended gap waiver.</p>
          </div>
          <div class="risk-card risk">
            <h4>Risk · Undisclosed Defects</h4>
            <p>Older or custom estates hide expensive surprises: roof, foundation, HVAC zoning, septic. Use inspection
            findings as the primary lever to re-price after contract acceptance, not before.</p>
          </div>
          <div class="risk-card lever">
            <h4>Lever · Market Timing</h4>
            <p>Pull current Days-on-Market for the listing and the 90-day absorption rate for comparable homes.
            Stale listings give room to negotiate; fresh listings favor the seller.</p>
          </div>
          <div class="risk-card lever">
            <h4>Lever · Seller Motivation</h4>
            <p>Learn why the seller is selling — relocation, estate sale, downsize, or financial pressure. Motivation
            drives the deepest concessions and is the single most valuable data point in the negotiation.</p>
          </div>
          <div class="risk-card lever">
            <h4>Lever · Clean Paper</h4>
            <p>Pre-approval letter, proof of funds, and ability to close in 30 days is worth real dollars.
            A clean offer from a qualified buyer often beats a higher offer with more contingencies.</p>
          </div>
        </div>
      </section>

      <!-- ACTION PLAN -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Action</span> <span class="rest">Plan</span></h2>
        <ol class="action-list">
          <li>
            <strong>Pull comparable sales</strong>
            Request 6-month closed comps within 1 mile, 6,000–8,000 sq ft range, plus active and pending listings.
            <span class="due">Before first contact</span>
          </li>
          <li>
            <strong>Set the three numbers</strong>
            Write down opening offer, target close, and walk-away ceiling. Do not start negotiating without them.
            <span class="due">This week</span>
          </li>
          <li>
            <strong>Secure financing documentation</strong>
            Pre-approval letter and proof of funds in hand, dated within 30 days of offer submission.
            <span class="due">Before offer</span>
          </li>
          <li>
            <strong>Identify seller motivation</strong>
            Through listing agent conversation: why selling, timeline, any prior offers, any known defects.
            <span class="due">First call</span>
          </li>
          <li>
            <strong>Line up inspection team</strong>
            Primary inspector plus specialty reviews (roof, foundation, HVAC) booked and on standby.
            <span class="due">Before offer</span>
          </li>
          <li>
            <strong>Submit written offer</strong>
            Complete offer package: price, earnest money, contingencies, closing date, included items, deadline for response.
            <span class="due">Upon strategy lock</span>
          </li>
          <li>
            <strong>Counter with data, not emotion</strong>
            Every counter-offer references comps, inspection findings, or appraisal — never feelings or ego.
            <span class="due">Throughout</span>
          </li>
          <li>
            <strong>Document every conversation</strong>
            Email recap after every phone call. Nothing material is real until it is in writing.
            <span class="due">Continuous</span>
          </li>
        </ol>
      </section>

      <!-- DECISION RULES -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Decision</span> <span class="rest">Rules</span></h2>
        <div class="nu-card" style="border-left: 6px solid var(--nu-cyan);">
          <ul style="list-style: none;">
            <li style="padding: 10px 0 10px 22px; position: relative; border-bottom: 1px solid var(--nu-light-gray);">
              <span style="position: absolute; left: 0; color: var(--nu-cyan); font-weight: 900;">→</span>
              If the inspection uncovers any structural, roof, foundation, or septic issue estimated over
              a pre-set dollar threshold — renegotiate price, secure credits, or walk. No exceptions.
            </li>
            <li style="padding: 10px 0 10px 22px; position: relative; border-bottom: 1px solid var(--nu-light-gray);">
              <span style="position: absolute; left: 0; color: var(--nu-cyan); font-weight: 900;">→</span>
              If the appraisal comes in below the contract price — renegotiate to appraised value or exercise the
              appraisal-gap cap. Never overpay versus an independent third-party valuation.
            </li>
            <li style="padding: 10px 0 10px 22px; position: relative; border-bottom: 1px solid var(--nu-light-gray);">
              <span style="position: absolute; left: 0; color: var(--nu-cyan); font-weight: 900;">→</span>
              If a counter-offer pushes past the walk-away ceiling — walk. Discipline beats ego, and there
              will be another property.
            </li>
            <li style="padding: 10px 0 10px 22px; position: relative;">
              <span style="position: absolute; left: 0; color: var(--nu-cyan); font-weight: 900;">→</span>
              If seller refuses any of the six must-have contingencies — walk. Buying a 7,098 sq ft estate
              without inspection, title, or appraisal protection is not negotiation; it is gambling.
            </li>
          </ul>
        </div>
      </section>

      <!-- OWNER FOOTER -->
      <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 2px solid var(--nu-medium-gray);">
        <p style="font-size: 0.9rem; color: #666;">
          Task owner: <strong style="color: var(--nu-dark-text);">Aaron C. Norris</strong>
          &nbsp;·&nbsp; Source: reMarkable action item
          &nbsp;·&nbsp; Generated: 2026-04-24
        </p>
      </div>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>