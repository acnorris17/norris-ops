<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Brief — Norris Utilities®</title>
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
      --font-display: 'Playfair Display', Georgia, serif;
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
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    /* GHOST PHOENIX WATERMARK IN HEADER */
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

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 52px;
      margin-top: -52px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 52px;
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
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* INTRO BLOCK */
    .nu-intro {
      text-align: center;
      margin-bottom: 56px;
      padding-bottom: 40px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-eyebrow {
      display: inline-block;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: rgba(0,0,255,0.06);
      padding: 8px 18px;
      border-radius: 4px;
      margin-bottom: 22px;
    }
    .nu-intro h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
      letter-spacing: -0.01em;
    }
    .nu-intro h1 span { color: var(--nu-blue); }
    .nu-intro .nu-address {
      font-size: 1.15rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 8px;
    }
    .nu-intro .nu-prepared {
      font-size: 0.92rem;
      color: #777;
      font-style: italic;
    }

    /* SECTION TITLES */
    .nu-section { margin-bottom: 52px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 22px;
      padding-bottom: 12px;
      border-bottom: 3px solid var(--nu-blue);
      display: inline-block;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SNAPSHOT — DIAMOND-INSPIRED GRID */
    .nu-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .nu-snap-cell {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #fff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 20px;
      border-radius: 6px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-snap-cell:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .nu-snap-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-snap-value {
      font-size: 1.45rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .nu-snap-sub {
      font-size: 0.85rem;
      color: #777;
      margin-top: 4px;
    }

    /* CHEVRON BADGES */
    .nu-badges {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      max-width: 720px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 36px 16px 22px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px; height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.95rem;
      border-radius: 50%;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TWO-COLUMN GRID */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-body-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* OFFER STRATEGY TABLE */
    .nu-strategy-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-strategy-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-strategy-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-strategy-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-strategy-table tbody tr:hover { background: var(--nu-light-gray); }
    .nu-strategy-table tbody tr:last-child td { border-bottom: none; }
    .nu-strategy-table .price {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.05rem;
    }
    .nu-strategy-table .anchor td { background: rgba(6,208,255,0.08); }
    .nu-strategy-table .anchor .price { color: #0033cc; }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 36px;
      margin-top: 12px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 12px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .nu-timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .nu-timeline-item:last-child { padding-bottom: 0; }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -29px; top: 6px;
      width: 12px; height: 12px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .nu-timeline-day {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.88rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-timeline-action {
      color: var(--nu-body-text);
      font-size: 0.96rem;
    }

    /* WALK-AWAY BLOCK */
    .nu-walkaway {
      background: linear-gradient(135deg, #fff8e6 0%, #fffdf2 100%);
      border-left: 6px solid var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 6px;
      margin-top: 24px;
    }
    .nu-walkaway h4 {
      color: #8a6e1f;
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-walkaway p {
      color: var(--nu-dark-text);
      font-size: 0.96rem;
      line-height: 1.7;
    }

    /* QUICK CALC */
    .nu-calc {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 30px 32px;
      border-radius: 10px;
      margin-top: 28px;
    }
    .nu-calc h4 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-calc-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.12);
      font-size: 0.96rem;
    }
    .nu-calc-row:last-child {
      border-bottom: none;
      border-top: 2px solid var(--nu-cyan);
      margin-top: 8px;
      padding-top: 16px;
      font-size: 1.15rem;
      font-weight: 900;
    }
    .nu-calc-row .val { color: var(--nu-cyan); font-weight: 900; }
    .nu-calc-row .val-em { color: var(--nu-white); font-weight: 900; font-size: 1.4rem; }

    /* CTA */
    .nu-cta {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 44px 36px;
      border-radius: 10px;
      text-align: center;
      margin-top: 16px;
    }
    .nu-cta h3 {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 12px;
    }
    .nu-cta p {
      font-size: 1.02rem;
      max-width: 720px;
      margin: 0 auto 22px;
      opacity: 0.95;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 14px 32px;
      border: none;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s ease;
      margin: 4px 6px;
    }
    .nu-btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.25);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-white);
      padding: 14px 32px;
      border: 2px solid var(--nu-white);
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s ease;
      margin: 4px 6px;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-white);
      color: var(--nu-blue);
    }

    /* DISCLOSURE NOTE */
    .nu-disclosure {
      background: #fdf3f3;
      border-left: 4px solid #c83a3a;
      padding: 18px 22px;
      border-radius: 4px;
      margin-top: 18px;
    }
    .nu-disclosure strong {
      color: #c83a3a;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.85rem;
      display: block;
      margin-bottom: 6px;
    }
    .nu-disclosure p { font-size: 0.94rem; color: var(--nu-dark-text); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 22px 64px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px; }
      .nu-intro h1 { font-size: 1.65rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
      .nu-strategy-table { font-size: 0.85rem; }
      .nu-strategy-table th, .nu-strategy-table td { padding: 10px 12px; }
      .nu-snap-value { font-size: 1.2rem; }
      .nu-cta h3 { font-size: 1.25rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-cta, .nu-footer, .nu-calc { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 52" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,52 L1440,0 L1440,52 L0,52 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- INTRO -->
      <section class="nu-intro">
        <span class="nu-eyebrow">Confidential Acquisition Brief</span>
        <h1>4505 Buttewoods <span>Estate</span><br>Negotiation Strategy</h1>
        <div class="nu-address">7,098 sq ft custom estate &nbsp;•&nbsp; Birmingham, Alabama</div>
        <div class="nu-prepared">Prepared for Aaron C. Norris &nbsp;•&nbsp; Founder &amp; CEO, Norris Utilities® &nbsp;•&nbsp; April 25, 2026</div>
      </section>

      <!-- SECTION 1: PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="nu-snapshot">
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Address</div>
            <div class="nu-snap-value">4505 Buttewoods</div>
            <div class="nu-snap-sub">Birmingham, AL</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Living Area</div>
            <div class="nu-snap-value">7,098 sq ft</div>
            <div class="nu-snap-sub">Custom estate</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Status</div>
            <div class="nu-snap-value">Dual-Listed</div>
            <div class="nu-snap-sub">Rental &amp; for-sale</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Buyer Position</div>
            <div class="nu-snap-value">Strong</div>
            <div class="nu-snap-sub">Cash / pre-qualified</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Disclosure Flag</div>
            <div class="nu-snap-value">Open</div>
            <div class="nu-snap-sub">Discrepancy noted</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Decision Window</div>
            <div class="nu-snap-value">14 Days</div>
            <div class="nu-snap-sub">From offer date</div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: NEGOTIATION OBJECTIVES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objectives</span></h2>
        <div class="nu-badges">
          <div class="nu-badge"><span class="nu-badge-num">1</span>Lock the property at the lowest defensible price — anchored on rental valuation, not list.</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>Resolve the rental-vs-for-sale disclosure discrepancy in writing before earnest money is hard.</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>Preserve full inspection rights, financing contingency, and a clean walk-away path.</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>Close on Aaron's timeline (45–60 days) — not the seller's pressure schedule.</div>
        </div>
      </section>

      <!-- SECTION 3: LEVERAGE & RISK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">&amp; Risk Map</span></h2>
        <div class="nu-two-col">
          <div class="nu-card">
            <h3>Aaron's Leverage</h3>
            <ul>
              <li>Property has been dual-listed (rental + sale) — signals motivated seller, holding cost pressure</li>
              <li>Disclosure discrepancy gives a defensible reason to revise downward without insulting the seller</li>
              <li>7,098 sq ft is a thin buyer pool in this price band — few qualified competing offers</li>
              <li>Norris Utilities® cash flow supports a fast, certain close — most buyers cannot</li>
              <li>No contingent home sale on Aaron's side</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Seller's Leverage / Risks to Aaron</h3>
            <ul>
              <li>Premium custom build — emotional attachment can trump market math</li>
              <li>Comparable Birmingham estate inventory (5,000+ sq ft) is tight — seller may wait</li>
              <li>Dual-listing may shift to rental-only if no offer lands — removes urgency</li>
              <li>Hidden condition issues common in 7,000+ sq ft homes (HVAC zones, roof, foundation)</li>
              <li>Property tax reassessment will spike post-purchase — model the year-2 cost</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 4: OFFER STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Strategy — Three Tiers</span></h2>
        <table class="nu-strategy-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Offer Position</th>
              <th>% of List</th>
              <th>Purpose</th>
              <th>Concession Path</th>
            </tr>
          </thead>
          <tbody>
            <tr class="anchor">
              <td><strong>Anchor</strong></td>
              <td class="price">First Offer</td>
              <td>82–85%</td>
              <td>Reset seller expectations using disclosure issue + rental yield math</td>
              <td>Hold for 72 hours — no movement</td>
            </tr>
            <tr>
              <td><strong>Counter</strong></td>
              <td class="price">Mid Position</td>
              <td>88–90%</td>
              <td>Demonstrate good faith; trade price for repair credit + closing-cost split</td>
              <td>Tie to disclosure resolution &amp; clean inspection</td>
            </tr>
            <tr>
              <td><strong>Walk-Up</strong></td>
              <td class="price">Final Position</td>
              <td>92–93%</td>
              <td>Last move before walk — only with concessions banked</td>
              <td>Cash close, 30 days, AS-IS waiver of cosmetic items only</td>
            </tr>
          </tbody>
        </table>

        <div class="nu-walkaway">
          <h4>Walk-Away Line</h4>
          <p>Above 93% of list with no repair credit, or above 95% under any condition, the deal stops penciling against rental comparables and Aaron's ROI threshold. Walking away is the right answer — Birmingham inventory will produce another candidate within 60–90 days.</p>
        </div>
      </section>

      <!-- SECTION 5: DISCLOSURE LEVERAGE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Disclosure</span> <span class="rest">Discrepancy — Use It Carefully</span></h2>
        <div class="nu-card" style="border-top-color: #c83a3a;">
          <h3>How to deploy the discrepancy without poisoning the deal</h3>
          <ul>
            <li>Frame it factually, never accusatorially: "We noticed the rental listing and sale listing describe the property differently. We need a written reconciliation before we can finalize price."</li>
            <li>Request seller's statement in writing — square footage, included fixtures/appliances, HVAC zones, finished vs. unfinished space</li>
            <li>If the rental listing claims more sq ft than the sale listing, anchor the offer to the smaller number</li>
            <li>If amenities differ (pool, outbuilding, finished basement), assume the lesser version when pricing</li>
            <li>Have the agent put the seller's clarification in the response — creates a paper trail for future remedy</li>
          </ul>
        </div>
        <div class="nu-disclosure">
          <strong>Risk Note</strong>
          <p>Do not lead with the disclosure issue in the first conversation. Lead with respect for the property and a serious offer. Introduce the discrepancy in the counter-cycle, where it justifies holding the line on price without burning the relationship.</p>
        </div>
      </section>

      <!-- SECTION 6: TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">14-Day</span> <span class="rest">Negotiation Timeline</span></h2>
        <div class="nu-timeline">
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Day 1–2 &nbsp;•&nbsp; Foundation</div>
            <div class="nu-timeline-action">Pull rental comp data + last 12 months of Birmingham 5,000+ sq ft sales. Confirm pre-qualification letter is current. Brief listing agent — Aaron is a serious cash-positioned buyer.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Day 3 &nbsp;•&nbsp; Anchor Offer</div>
            <div class="nu-timeline-action">Submit Tier 1 offer at 82–85% of list. Cover letter cites rental valuation and requests written disclosure reconciliation. 72-hour response window.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Day 4–6 &nbsp;•&nbsp; Hold the Line</div>
            <div class="nu-timeline-action">No counter movement until seller responds in writing. Use silence — it shifts pressure back to the seller.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Day 7–9 &nbsp;•&nbsp; Counter Cycle</div>
            <div class="nu-timeline-action">Review seller counter. If reasonable, move to Tier 2 (88–90%) tied to inspection findings + closing-cost split. Lock disclosure clarifications into the contract.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Day 10–12 &nbsp;•&nbsp; Final Position</div>
            <div class="nu-timeline-action">If still apart, deploy Tier 3 (92–93%) only if seller has conceded on disclosure and repair credit. Otherwise — walk.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Day 13–14 &nbsp;•&nbsp; Decision</div>
            <div class="nu-timeline-action">Bind the contract or release the property. No middle-ground extensions — extensions favor the seller.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 7: QUICK CALC -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Working</span> <span class="rest">Numbers — Reference Frame</span></h2>
        <p style="margin-bottom: 14px; color: #666; font-size: 0.94rem; font-style: italic;">Illustrative tier math only — to be replaced with actual list price once confirmed.</p>
        <div class="nu-calc">
          <h4>Offer Tier Reference (assumes list = $X)</h4>
          <div class="nu-calc-row"><span>Tier 1 — Anchor Offer (83%)</span><span class="val">0.83 × List</span></div>
          <div class="nu-calc-row"><span>Tier 2 — Counter Position (89%)</span><span class="val">0.89 × List</span></div>
          <div class="nu-calc-row"><span>Tier 3 — Walk-Up Cap (92%)</span><span class="val">0.92 × List</span></div>
          <div class="nu-calc-row"><span>Hard Walk-Away Line (93%)</span><span class="val">0.93 × List</span></div>
          <div class="nu-calc-row"><span>Earnest Money — Recommended</span><span class="val-em">1% — refundable</span></div>
        </div>
      </section>

      <!-- SECTION 8: CONTRACT TERMS TO LOCK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Contract</span> <span class="rest">Terms to Lock</span></h2>
        <div class="nu-two-col">
          <div class="nu-card">
            <h3>Aaron Insists On</h3>
            <ul>
              <li>10-day inspection period — full structural, HVAC, roof, foundation, septic/sewer</li>
              <li>Written reconciliation of rental vs. sale disclosures, attached as exhibit</li>
              <li>Financing contingency (even if cash) — preserves walk path</li>
              <li>Repair credit cap of 2% of purchase price minimum</li>
              <li>Seller pays title insurance owner's policy</li>
              <li>Possession at closing — no post-closing rent-back</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Aaron Will Trade</h3>
            <ul>
              <li>Faster close (30 days vs. 60) in exchange for price concession</li>
              <li>AS-IS on cosmetic-only items in exchange for major-systems repair credit</li>
              <li>Larger earnest deposit at price agreement, in exchange for inspection extension</li>
              <li>Flexibility on small fixtures the seller wants to keep, in exchange for clean disclosure</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="nu-cta">
        <h3>Next Move — Brief the Listing Agent</h3>
        <p>Schedule the introductory call this week. Position Aaron as a Birmingham-based, cash-capable, decisive buyer. Request the seller's written disclosure clarification before submitting Tier 1. The negotiation begins with the question, not the offer.</p>
        <a href="tel:2055001343" class="nu-btn-primary">Call to Discuss — 205-500-1343</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Negotiation" class="nu-btn-secondary">Email Strategy Notes</a>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      <span style="font-size: 0.8rem; opacity: 0.7; display: inline-block; margin-top: 10px;">Confidential — Prepared for internal negotiation use only — April 25, 2026</span>
    </div>
  </footer>

</body>
</html>