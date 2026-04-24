<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Brief — 4505 Buttewoods — Norris Utilities®</title>
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
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
      pointer-events: none;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-phoenix-icon svg { width: 100%; height: 100%; }

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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    .nu-doc-meta {
      margin-top: 28px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.25);
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-wrap: wrap;
      gap: 18px 40px;
      justify-content: center;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .nu-doc-meta span strong { color: var(--nu-cyan); margin-right: 6px; }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
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
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 720px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 70px 40px 80px;
    }

    /* DOCUMENT TITLE */
    .doc-title-block {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-eyebrow {
      display: inline-block;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.32em;
      color: var(--nu-blue);
      text-transform: uppercase;
      padding: 6px 18px;
      border: 1.5px solid var(--nu-blue);
      border-radius: 2px;
      margin-bottom: 18px;
    }
    .doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-subtitle {
      font-family: var(--font-primary);
      font-weight: 400;
      font-style: italic;
      font-size: 1.1rem;
      color: #555;
      max-width: 760px;
      margin: 0 auto;
    }

    /* SECTION HEADERS */
    .nu-section { margin-bottom: 48px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* SUMMARY GRID — KEY FACTS */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 12px;
    }
    .summary-tile {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 22px;
    }
    .summary-tile .label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .summary-tile .value {
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .summary-tile.priority { border-left-color: #C9302C; }
    .summary-tile.priority .label { color: #C9302C; }
    .summary-tile.accent { border-left-color: var(--nu-cyan); }
    .summary-tile.accent .label { color: #0288c4; }

    /* CHEVRON BADGE */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 18px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-badge.cyan { background: linear-gradient(135deg, #0033CC 0%, var(--nu-cyan) 100%); }
    .nu-badge .num {
      display: inline-flex;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* BODY TEXT */
    .body-text { font-size: 1rem; line-height: 1.75; color: var(--nu-body-text); }
    .body-text p { margin-bottom: 14px; }
    .body-text strong { color: var(--nu-dark-text); font-weight: 700; }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      margin-bottom: 12px;
    }
    @media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .nu-card h3 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      letter-spacing: 0.01em;
    }
    .nu-card ul { list-style: none; }
    .nu-card ul li {
      padding: 8px 0 8px 20px;
      position: relative;
      font-size: 0.95rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0;
      font-size: 0.95rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table tbody tr:hover { background: #eef4ff; }
    .nu-table .num { font-weight: 700; color: var(--nu-blue); white-space: nowrap; }

    /* TIMELINE */
    .timeline { position: relative; padding-left: 32px; margin-top: 8px; }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item { position: relative; padding-bottom: 22px; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -27px;
      top: 6px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.1);
    }
    .timeline-item .when {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-item .what {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-item .desc { font-size: 0.93rem; color: #555; }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f4f7ff 0%, #e8f4ff 100%);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      margin: 18px 0;
      position: relative;
    }
    .callout-label {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .callout p { font-size: 1rem; color: var(--nu-dark-text); }
    .callout.warn { background: linear-gradient(135deg, #fff8e6 0%, #fffaf0 100%); border-left-color: var(--nu-accent-gold); }
    .callout.warn .callout-label { color: #B8860B; }

    /* CHECKLIST */
    .checklist { list-style: none; }
    .checklist li {
      padding: 12px 14px 12px 44px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.97rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 14px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* CONTACT BLOCK */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .contact-card {
      background: var(--nu-light-gray);
      border-radius: 6px;
      padding: 18px 20px;
      border-left: 3px solid var(--nu-cyan);
    }
    .contact-card .role {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .contact-card .name {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .contact-card .meta {
      font-size: 0.88rem;
      color: #555;
      line-height: 1.5;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, #000022 0%, var(--nu-navy) 50%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
      letter-spacing: 0.02em;
    }
    .nu-footer-divider {
      width: 80px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
      opacity: 0.6;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
      color: rgba(255,255,255,0.9);
    }
    .nu-footer-contact strong { color: var(--nu-white); font-weight: 700; }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-fineprint {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.6);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 45px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 50px 22px 60px; }
      .doc-title { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 12px 16px; }
      .nu-doc-meta { gap: 12px 22px; font-size: 0.75rem; }
      .nu-table { font-size: 0.85rem; }
      .nu-table th, .nu-table td { padding: 10px 10px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .summary-tile { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>

    <div class="nu-doc-meta">
      <span><strong>DOC</strong> Acquisition Brief</span>
      <span><strong>DATE</strong> 2026-04-23</span>
      <span><strong>OWNER</strong> Aaron C. Norris</span>
      <span><strong>STATUS</strong> Active Negotiation</span>
    </div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="doc-title-block">
        <div class="doc-eyebrow">Real Estate Acquisition</div>
        <h1 class="doc-title">Negotiate Purchase of <span>4505 Buttewoods</span></h1>
        <p class="doc-subtitle">7,098 sq ft estate — strategic acquisition brief, negotiation framework, and execution timeline. Sourced from reMarkable action item, 2026-04-23.</p>
      </div>

      <!-- KEY FACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Key <span>Facts at a Glance</span></h2>
        <div class="summary-grid">
          <div class="summary-tile">
            <div class="label">Property Address</div>
            <div class="value">4505 Buttewoods</div>
          </div>
          <div class="summary-tile">
            <div class="label">Square Footage</div>
            <div class="value">7,098 sq ft</div>
          </div>
          <div class="summary-tile accent">
            <div class="label">Asset Class</div>
            <div class="value">Estate Residence</div>
          </div>
          <div class="summary-tile priority">
            <div class="label">Action Required</div>
            <div class="value">Open Negotiation</div>
          </div>
        </div>
        <div class="callout warn" style="margin-top: 22px;">
          <span class="callout-label">⚐ Source Note</span>
          <p>This action item was captured from Aaron's reMarkable on 2026-04-23. Listing price, seller name, and broker assignment have not yet been entered into the system. Confirm and append to this brief before the first offer letter is drafted.</p>
        </div>
      </section>

      <!-- ACQUISITION OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Acquisition <span>Objective</span></h2>
        <div class="body-text">
          <p>Open formal negotiations for the <strong>7,098 sq ft estate at 4505 Buttewoods</strong>. The objective is to secure the property at the best defensible price the market and the seller's situation will support, with terms structured to protect Aaron's downside (financing, inspection, title) while preserving credibility as a serious cash-capable buyer.</p>
          <p>This brief is the playbook for the negotiation: due diligence checklist, opening position, walk-away point, escalation ladder, and the closing-day execution plan.</p>
        </div>
      </section>

      <!-- NEGOTIATION PHASES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Phases</span></h2>

        <div class="nu-badge"><span class="num">1</span>Pre-Offer Intelligence &amp; Comp Workup</div>
        <div class="body-text" style="margin-bottom: 22px;">
          <p>Before a number is ever quoted, build the full picture: tax-assessed value, last sale price, days on market, list-to-sale ratio in the immediate radius, and any identifiable seller motivation (relocation, estate sale, divorce, distress). Pull at minimum <strong>three closed comps within the prior 6 months</strong> and three active comps within 0.5 miles. The opening offer is anchored to that comp set, not to the asking price.</p>
        </div>

        <div class="nu-badge cyan"><span class="num">2</span>Opening Offer &amp; Terms Letter</div>
        <div class="body-text" style="margin-bottom: 22px;">
          <p>First offer goes in writing on Aaron's letterhead with: purchase price, earnest money amount, financing contingency window, inspection window, title/survey responsibility, requested seller concessions, and a hard expiration on the offer (48–72 hours). Tone is direct and respectful — never apologetic, never aggressive. Lead with the price; bury nothing.</p>
        </div>

        <div class="nu-badge"><span class="num">3</span>Counter Cycle &amp; Concession Strategy</div>
        <div class="body-text" style="margin-bottom: 22px;">
          <p>Counters are pre-mapped, not improvised. For every dollar conceded on price, request a corresponding dollar of value back: closing-cost credit, repair credit, longer free leaseback, or kept appliances/fixtures. Never split the difference reflexively — that telegraphs eagerness.</p>
        </div>

        <div class="nu-badge cyan"><span class="num">4</span>Inspection &amp; Re-Trade Window</div>
        <div class="body-text" style="margin-bottom: 22px;">
          <p>The inspection report is the second negotiation. Identify items above the materiality threshold; request credits, not seller-managed repairs (Aaron controls quality if money flows to him). For a 7,098 sq ft footprint, expect roof, HVAC, foundation, and any pool/well/septic to be the critical line items.</p>
        </div>

        <div class="nu-badge"><span class="num">5</span>Final Walk &amp; Close</div>
        <div class="body-text">
          <p>Final walk-through within 24 hours of closing. Confirm every negotiated repair, every included fixture, every utility on. Wire instructions verified by phone call to the closing attorney — <strong>never</strong> by reply to an inbound email. Funds released only after deed and title package are confirmed in escrow.</p>
        </div>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Due Diligence <span>Checklist</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Property &amp; Title</h3>
            <ul>
              <li>Pull current deed, prior deed chain (last 20 yrs), and any recorded mortgages</li>
              <li>Order ALTA title commitment with extended endorsements</li>
              <li>New boundary survey — confirm 7,098 sq ft and lot lines</li>
              <li>Verify zoning, setbacks, easements, HOA covenants</li>
              <li>County tax records: 5-year assessed value history and millage</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Physical &amp; Environmental</h3>
            <ul>
              <li>General home inspection (licensed, written report)</li>
              <li>Roof inspection — separate roofer, written quote on remaining life</li>
              <li>HVAC inspection on every unit, age and refrigerant type</li>
              <li>Foundation/structural review if any cosmetic cracks present</li>
              <li>Termite (WDIR) letter required for closing</li>
              <li>Radon, mold, lead-paint disclosures per state law</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Financial &amp; Legal</h3>
            <ul>
              <li>Financing pre-approval letter dated within 30 days of offer</li>
              <li>Proof-of-funds letter from Renasant for earnest &amp; down</li>
              <li>Insurability quote — confirm coverage available before binding</li>
              <li>Attorney review of contract, addenda, and disclosures</li>
              <li>Closing-cost estimate from title company in writing</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Seller &amp; Market Context</h3>
            <ul>
              <li>Days on market, prior list-price changes, prior contracts that fell</li>
              <li>Reason for sale (motivation drives the deal)</li>
              <li>Other offers outstanding — confirm in writing if claimed</li>
              <li>Three closed comps within 6 months, 0.5-mile radius</li>
              <li>Three active comps and one pending in same submarket</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- PRICING FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title">Pricing <span>Framework</span></h2>
        <div class="body-text">
          <p>Three numbers must be set before the first offer is sent. Aaron does not deviate from these in real time without a documented new fact (new comp, new defect, new disclosure).</p>
        </div>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Definition</th>
              <th>Formula / Anchor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opening Offer</strong></td>
              <td>First written number to seller. Calibrated to leave room for at least two counters.</td>
              <td class="num">Comp median × 0.92</td>
            </tr>
            <tr>
              <td><strong>Target (Likely Close)</strong></td>
              <td>Realistic expected closing price after counter cycle and inspection re-trade.</td>
              <td class="num">Comp median × 0.97</td>
            </tr>
            <tr>
              <td><strong>Walk-Away Ceiling</strong></td>
              <td>The number above which the deal does not pencil. Hard line — no exceptions in the moment.</td>
              <td class="num">Comp median × 1.02</td>
            </tr>
            <tr>
              <td><strong>Earnest Money</strong></td>
              <td>Demonstrates seriousness without exposing more capital than necessary pre-inspection.</td>
              <td class="num">1% of contract price</td>
            </tr>
            <tr>
              <td><strong>Inspection Re-Trade Threshold</strong></td>
              <td>Below this, eat the cost; above, request credit or terminate.</td>
              <td class="num">$2,500 per finding</td>
            </tr>
          </tbody>
        </table>
        <div class="callout">
          <span class="callout-label">⊕ Discipline Rule</span>
          <p>The ceiling is set in writing on the day the offer goes out and is not revisited verbally. If Aaron is tempted to push past the ceiling, the trigger is to step away for 24 hours and reconfirm in writing — never in the heat of a phone call from a listing agent.</p>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Execution <span>Timeline</span></h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="when">Day 0 — 2026-04-23</div>
            <div class="what">Action captured from reMarkable</div>
            <div class="desc">Brief drafted and filed in Norris Utilities® internal portal. Acquisition file opened.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Days 1–3</div>
            <div class="what">Comp workup &amp; pre-approval refresh</div>
            <div class="desc">Pull MLS comps, order tax history, request updated pre-approval letter from Renasant Bank (Patrick Lavette).</div>
          </div>
          <div class="timeline-item">
            <div class="when">Days 4–5</div>
            <div class="what">Site visit &amp; informal seller-side intel</div>
            <div class="desc">Walk the property, photograph defects, gather neighbor and listing-agent context. Confirm seller motivation.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 6</div>
            <div class="what">Opening offer transmitted</div>
            <div class="desc">Letter delivered with 72-hour expiration. Earnest check held by title company, not by listing agent.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Days 7–14</div>
            <div class="what">Counter cycle &amp; binding contract</div>
            <div class="desc">Two counter rounds anticipated. Attorney review prior to signature on final contract.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Days 15–25</div>
            <div class="what">Inspection &amp; re-trade window</div>
            <div class="desc">Inspections complete, re-trade negotiated within the contractual window. No verbal agreements — all credits in writing as an addendum.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Days 26–45</div>
            <div class="what">Financing, appraisal, title clearance</div>
            <div class="desc">Underwriting completes, appraisal ordered, title cures finalized, insurance bound.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 46</div>
            <div class="what">Closing &amp; possession</div>
            <div class="desc">Final walk in the morning, fund and record in the afternoon. Keys at the closing table.</div>
          </div>
        </div>
      </section>

      <!-- RISK -->
      <section class="nu-section">
        <h2 class="nu-section-title">Risk <span>Register</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Likelihood</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Square footage misrepresented (county vs. appraiser disagreement)</td>
              <td>Moderate</td>
              <td>Independent measurement; price-per-sf clause in contract</td>
            </tr>
            <tr>
              <td>Undisclosed prior water intrusion or structural settlement</td>
              <td>Moderate</td>
              <td>Forensic inspection; seller property-condition disclosure; thermal-imaging scan</td>
            </tr>
            <tr>
              <td>Title cloud (unresolved lien, easement, or boundary dispute)</td>
              <td>Low–Moderate</td>
              <td>ALTA extended title policy; new boundary survey at buyer expense</td>
            </tr>
            <tr>
              <td>Appraisal comes in under contract price</td>
              <td>Moderate</td>
              <td>Appraisal-gap clause capped at agreed amount; right to renegotiate if exceeded</td>
            </tr>
            <tr>
              <td>Insurance binder denied or premium spikes (roof age, claim history)</td>
              <td>Low</td>
              <td>Insurability contingency in the contract; quote sourced before binding offer</td>
            </tr>
            <tr>
              <td>Seller receives competing offer mid-negotiation</td>
              <td>Variable</td>
              <td>Right of first refusal in counter; documented best-and-final to remove uncertainty</td>
            </tr>
            <tr>
              <td>Wire fraud at closing</td>
              <td>Low (consequences high)</td>
              <td>Voice-verify wire instructions with closing attorney by known phone number; never wire on emailed instructions alone</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DEAL TEAM -->
      <section class="nu-section">
        <h2 class="nu-section-title">Deal <span>Team</span></h2>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="role">Principal &amp; Buyer</div>
            <div class="name">Aaron C. Norris</div>
            <div class="meta">Founder &amp; CEO, Norris Utilities®<br>205-500-1343<br>acnorris@norrisutilities.com</div>
          </div>
          <div class="contact-card">
            <div class="role">Bank / Financing</div>
            <div class="name">Patrick Lavette</div>
            <div class="meta">Renasant Bank<br>Pre-approval &amp; proof-of-funds<br>Confirm refresh before offer</div>
          </div>
          <div class="contact-card">
            <div class="role">Real Estate Counsel</div>
            <div class="name">To Be Engaged</div>
            <div class="meta">Contract review, title curative<br>Closing attorney coordination<br>Confirm with Aaron before retention</div>
          </div>
          <div class="contact-card">
            <div class="role">Buyer's Agent</div>
            <div class="name">To Be Engaged</div>
            <div class="meta">Comp workup &amp; market intel<br>MLS access &amp; offer transmittal<br>Confirm with Aaron before retention</div>
          </div>
          <div class="contact-card">
            <div class="role">Inspector</div>
            <div class="name">To Be Engaged</div>
            <div class="meta">Licensed general inspector<br>Roof/HVAC/foundation specialists as needed<br>Schedule within inspection window</div>
          </div>
          <div class="contact-card">
            <div class="role">Admin Support</div>
            <div class="name">Caroline Butler</div>
            <div class="meta">Document tracking &amp; calendar<br>Customer-facing replies route through Aaron<br>Tier 1 trust</div>
          </div>
        </div>
      </section>

      <!-- IMMEDIATE NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Immediate <span>Next Steps</span></h2>
        <ul class="checklist">
          <li><strong>Confirm listing details.</strong> Capture asking price, listing agent, days on market, and seller name. Append to this brief.</li>
          <li><strong>Pull comps.</strong> Three closed and three active within 0.5 miles in the prior six months.</li>
          <li><strong>Refresh financing.</strong> Request a current pre-approval letter from Patrick Lavette at Renasant Bank.</li>
          <li><strong>Engage real-estate counsel.</strong> Identify and retain a closing attorney before the first offer.</li>
          <li><strong>Site visit.</strong> Walk the property in person; photograph every defect; meet the listing agent on site.</li>
          <li><strong>Set the three numbers.</strong> Lock opening offer, target, and walk-away ceiling in writing before drafting the offer.</li>
          <li><strong>Draft the offer letter.</strong> Use Aaron's letterhead, em-dash greeting, indented paragraphs, "Sincerely," close.</li>
          <li><strong>Calendar the windows.</strong> Inspection deadline, financing contingency, and closing date entered into both Aaron's calendar and CB's tracker.</li>
        </ul>
      </section>

      <!-- CLOSING NOTE -->
      <section class="nu-section" style="margin-bottom: 0;">
        <div class="callout">
          <span class="callout-label">✓ Discipline Reminder</span>
          <p>Real-estate negotiation rewards patience and punishes urgency. The number is set at the desk in advance — phone calls do not move it. Every concession is documented. Every credit is in writing. Every wire is verified by voice. The deal that does not close on Aaron's terms is the deal that protects Aaron's capital for the next one.</p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong> &nbsp;|&nbsp; Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      130 Inverness Plaza #210, Birmingham, AL 35242
    </div>
    <div class="nu-footer-fineprint">
      Internal acquisition brief — confidential. Generated 2026-04-23 from reMarkable action item. Not a contract or offer to purchase.
    </div>
  </footer>

</body>
</html>