<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buttewoods Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-success: #0a7a3d;
      --nu-warn: #b56b00;
      --nu-danger: #a3141a;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 35%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
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
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.28);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 22px;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--nu-white);
      letter-spacing: 0.15em;
      text-transform: uppercase;
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
      transform: translate(-50%, 0);
      width: 560px; height: 560px;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* DOC HEADING */
    .doc-heading {
      border-bottom: 3px solid var(--nu-blue);
      padding-bottom: 22px;
      margin-bottom: 36px;
    }
    .doc-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.18;
      margin-bottom: 10px;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.05rem;
      color: #555;
      font-weight: 400;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 22px;
      margin-top: 16px;
      font-size: 0.88rem;
      color: #555;
    }
    .doc-meta strong { color: var(--nu-dark-text); font-weight: 700; }

    /* SECTION */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.45rem;
      margin-bottom: 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* SUMMARY CALLOUT */
    .summary-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .summary-callout p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
    }
    .summary-callout p + p { margin-top: 10px; }

    /* PROPERTY FACTS GRID */
    .fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(195px, 1fr));
      gap: 14px;
    }
    .fact-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .fact-sub {
      font-size: 0.82rem;
      color: #666;
      margin-top: 4px;
      font-weight: 400;
    }

    /* CHEVRON BADGES — Phase rows */
    .phase-row {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 20px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .phase-num {
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
    .phase-label { flex: 1; }
    .phase-meta {
      font-size: 0.78rem;
      color: var(--nu-cyan);
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-left: 10px;
    }

    /* NEGOTIATION TABLE */
    .neg-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    table.neg-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.94rem;
    }
    .neg-table thead th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      padding: 13px 16px;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .neg-table tbody td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .neg-table tbody tr:nth-child(even) td { background: #fafafd; }
    .neg-table tbody tr:last-child td { border-bottom: none; }
    .neg-table td.lead {
      font-weight: 700;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .neg-table td.num {
      font-weight: 900;
      color: var(--nu-blue);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .tag {
      display: inline-block;
      padding: 3px 9px;
      border-radius: 10px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .tag-anchor { background: rgba(10,122,61,0.12); color: var(--nu-success); }
    .tag-target { background: rgba(0,0,255,0.10); color: var(--nu-blue); }
    .tag-walk   { background: rgba(163,20,26,0.10); color: var(--nu-danger); }
    .tag-watch  { background: rgba(181,107,0,0.12); color: var(--nu-warn); }

    /* TWO-COL PROS/CONS */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .col-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .col-card.pros { border-top: 4px solid var(--nu-success); }
    .col-card.cons { border-top: 4px solid var(--nu-danger); }
    .col-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 12px;
      color: var(--nu-dark-text);
      letter-spacing: 0.02em;
    }
    .col-card h3 .dot {
      display: inline-block;
      width: 10px; height: 10px;
      border-radius: 50%;
      margin-right: 8px;
      vertical-align: middle;
    }
    .col-card.pros h3 .dot { background: var(--nu-success); }
    .col-card.cons h3 .dot { background: var(--nu-danger); }
    .col-card ul { list-style: none; padding: 0; }
    .col-card li {
      padding: 8px 0 8px 20px;
      position: relative;
      font-size: 0.93rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .col-card li:last-child { border-bottom: none; }
    .col-card li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 10px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .check-item {
      display: flex;
      align-items: flex-start;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .check-item:last-child { border-bottom: none; }
    .check-box {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      margin-top: 2px;
    }
    .check-text {
      flex: 1;
      font-size: 0.96rem;
      color: var(--nu-dark-text);
    }
    .check-text strong { color: var(--nu-blue); font-weight: 900; }
    .check-sub {
      display: block;
      font-size: 0.84rem;
      color: #666;
      margin-top: 3px;
      font-weight: 400;
    }

    /* SCRIPT BLOCKS */
    .script-block {
      background: #fafbff;
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 14px;
    }
    .script-label {
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .script-body {
      font-style: italic;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
    }

    /* RISK / RED FLAGS */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
    }
    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-warn);
      border-radius: 0 6px 6px 0;
      padding: 16px 20px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .risk-card.high { border-left-color: var(--nu-danger); }
    .risk-head {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      margin-bottom: 6px;
    }
    .risk-body {
      font-size: 0.9rem;
      color: #555;
    }

    /* NEXT STEP STRIP */
    .next-strip {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 26px 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      box-shadow: 0 6px 24px rgba(0,0,255,0.18);
    }
    .next-strip-text {
      font-size: 1.02rem;
      font-weight: 700;
      line-height: 1.5;
    }
    .next-strip-text .sub {
      display: block;
      font-weight: 400;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.88);
      margin-top: 4px;
    }
    .nu-btn-white {
      display: inline-block;
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 12px 26px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.94rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .nu-btn-white:hover {
      background: var(--nu-navy);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 42px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.94rem;
      line-height: 1.8;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-fine {
      margin-top: 16px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 860px) {
      .two-col { grid-template-columns: 1fr; }
      .doc-title { font-size: 1.6rem; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-container { padding: 40px 22px 50px; }
      .phase-row { clip-path: none; border-radius: 6px; }
      .next-strip { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .next-strip, .phase-row { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 78 L50 95 L45 78 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-badge">Internal Action Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- HEADING -->
      <div class="doc-heading">
        <div class="doc-eyebrow">reMarkable Action Item · Real Estate Negotiation</div>
        <h1 class="doc-title"><span class="accent">Negotiate Purchase</span> — 4505 Buttewoods Estate</h1>
        <p class="doc-subtitle">7,098 sq ft estate acquisition — strategy, offer structure, and walk-through checklist.</p>
        <div class="doc-meta">
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Prepared:</strong> April 23, 2026</span>
          <span><strong>Source:</strong> reMarkable tablet</span>
          <span><strong>Status:</strong> Pre-offer — diligence phase</span>
        </div>
      </div>

      <!-- SUMMARY -->
      <div class="summary-callout">
        <p><strong>Objective —</strong> Acquire the 7,098 sq ft estate at 4505 Buttewoods on favorable terms: structured offer, full title and inspection diligence, and a disciplined walk-away number set before the first counter.</p>
        <p><strong>Rule of thumb —</strong> The anchor is the ask; the target is the decision; the walk-away is the discipline. Never reveal the walk-away. Never negotiate against yourself. Get everything in writing.</p>
      </div>

      <!-- PROPERTY FACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="fact-grid">
          <div class="fact-cell">
            <div class="fact-label">Address</div>
            <div class="fact-value">4505 Buttewoods</div>
            <div class="fact-sub">Target subject property</div>
          </div>
          <div class="fact-cell">
            <div class="fact-label">Heated Sq Ft</div>
            <div class="fact-value">7,098</div>
            <div class="fact-sub">Per reMarkable notes</div>
          </div>
          <div class="fact-cell">
            <div class="fact-label">Classification</div>
            <div class="fact-value">Estate-class single family</div>
            <div class="fact-sub">High-end residential</div>
          </div>
          <div class="fact-cell">
            <div class="fact-label">Acquisition Purpose</div>
            <div class="fact-value">Owner-use / legacy</div>
            <div class="fact-sub">Confirm final intent before LOI</div>
          </div>
          <div class="fact-cell">
            <div class="fact-label">Source</div>
            <div class="fact-value">Off-market / negotiated</div>
            <div class="fact-sub">Direct-to-seller dialogue</div>
          </div>
          <div class="fact-cell">
            <div class="fact-label">Representation</div>
            <div class="fact-value">Buyer-side counsel required</div>
            <div class="fact-sub">Attorney review before signature</div>
          </div>
        </div>
      </section>

      <!-- PHASES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Phases</span></h2>

        <div class="phase-row">
          <span class="phase-num">1</span>
          <span class="phase-label">Pre-offer diligence — tax, title search, prior sales history, survey, permits</span>
          <span class="phase-meta">Week 1</span>
        </div>
        <div class="phase-row">
          <span class="phase-num">2</span>
          <span class="phase-label">Comp analysis — last 12 months, 1-mile radius, adjusted for sq ft and lot</span>
          <span class="phase-meta">Week 1</span>
        </div>
        <div class="phase-row">
          <span class="phase-num">3</span>
          <span class="phase-label">Set anchor / target / walk-away numbers in writing before any verbal offer</span>
          <span class="phase-meta">Week 1–2</span>
        </div>
        <div class="phase-row">
          <span class="phase-num">4</span>
          <span class="phase-label">Letter of Intent (non-binding) — attorney drafts, buyer reviews, seller receives</span>
          <span class="phase-meta">Week 2</span>
        </div>
        <div class="phase-row">
          <span class="phase-num">5</span>
          <span class="phase-label">Inspection window — structural, roof, HVAC, electrical, plumbing, foundation, radon, termite</span>
          <span class="phase-meta">Week 3–4</span>
        </div>
        <div class="phase-row">
          <span class="phase-num">6</span>
          <span class="phase-label">Purchase agreement + financing contingency + appraisal + earnest money escrow</span>
          <span class="phase-meta">Week 4–5</span>
        </div>
        <div class="phase-row">
          <span class="phase-num">7</span>
          <span class="phase-label">Close — title insurance, deed recorded, keys and warranty transferred</span>
          <span class="phase-meta">Week 6–8</span>
        </div>
      </section>

      <!-- NEGOTIATION LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder &amp; Discipline</span></h2>
        <div class="neg-table-wrap">
          <table class="neg-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Role</th>
                <th>Rule</th>
                <th>Visibility to Seller</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="lead"><span class="tag tag-anchor">Anchor</span></td>
                <td class="num">Seller's asking price</td>
                <td>Starting reference, never accepted as-is without independent validation</td>
                <td>Known — public</td>
              </tr>
              <tr>
                <td class="lead"><span class="tag tag-target">Target</span></td>
                <td class="num">Fair-market price</td>
                <td>Based on adjusted comps, not emotion or list-price math</td>
                <td>Partial — revealed via counter strategy</td>
              </tr>
              <tr>
                <td class="lead"><span class="tag tag-watch">Stretch</span></td>
                <td class="num">Target + concessions</td>
                <td>Acceptable if seller concedes on closing costs, repairs, or fixtures</td>
                <td>Disclosed only if anchor won't move</td>
              </tr>
              <tr>
                <td class="lead"><span class="tag tag-walk">Walk-away</span></td>
                <td class="num">Hard ceiling</td>
                <td>Set before first offer; never shared; never violated under time pressure</td>
                <td>Private — never disclosed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- LEVERAGE / RISK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">vs. Risk</span></h2>
        <div class="two-col">
          <div class="col-card pros">
            <h3><span class="dot"></span>Leverage in Aaron's Favor</h3>
            <ul>
              <li>Cash-ready or strong pre-approval signals seriousness and shortens the seller's timeline</li>
              <li>Estate-class inventory has a shallow buyer pool — seller motivation rises with days-on-market</li>
              <li>Flexible close date can be a concession Aaron trades rather than a concession he pays for</li>
              <li>No contingent home sale — clean offer is worth real dollars to most sellers</li>
              <li>Third-generation utility CEO: stable, documentable income profile for any lender</li>
            </ul>
          </div>
          <div class="col-card cons">
            <h3><span class="dot"></span>Risks &amp; Red Flags</h3>
            <ul>
              <li>7,098 sq ft carries high carrying cost — taxes, insurance, utilities, maintenance</li>
              <li>Older estate may hide foundation, roof, or systems issues worth 5–7% of value</li>
              <li>Emotional attachment on either side inflates price and weakens walk-away discipline</li>
              <li>Verbal promises on fixtures, warranties, or repairs are worthless — must be in writing</li>
              <li>Title issues (liens, easements, setback violations) can kill the deal after money is spent</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- RED FLAGS DETAIL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Diligence</span> <span class="rest">Red Flags to Confirm Before LOI</span></h2>
        <div class="risk-grid">
          <div class="risk-card high">
            <div class="risk-head">Title &amp; Liens</div>
            <div class="risk-body">Order a full title search. Any unreleased mortgage, judgment lien, or mechanic's lien must be cleared at closing — seller's cost, not Aaron's.</div>
          </div>
          <div class="risk-card high">
            <div class="risk-head">Foundation &amp; Structure</div>
            <div class="risk-body">Estate-size homes magnify foundation movement. Require a structural engineer's report, not just a generalist home inspection.</div>
          </div>
          <div class="risk-card">
            <div class="risk-head">Roof, HVAC, Electrical</div>
            <div class="risk-body">Age and remaining life on each system. Anything under 5 years of remaining life becomes a price-reduction conversation.</div>
          </div>
          <div class="risk-card">
            <div class="risk-head">Survey &amp; Easements</div>
            <div class="risk-body">Current boundary survey. Identify utility easements, rights-of-way, and encroachments. Estate lots often have surprises near the rear line.</div>
          </div>
          <div class="risk-card">
            <div class="risk-head">Permitting History</div>
            <div class="risk-body">Pull permit records for additions, pools, outbuildings. Unpermitted work becomes Aaron's problem after closing.</div>
          </div>
          <div class="risk-card">
            <div class="risk-head">HOA / Restrictive Covenants</div>
            <div class="risk-body">Read covenants in full. Look for architectural review requirements, short-term rental bans, or assessments in reserve shortfall.</div>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Seller</span> <span class="rest">Dialogue — Ready Scripts</span></h2>

        <div class="script-block">
          <div class="script-label">Opening — Rapport, not price</div>
          <div class="script-body">"I appreciate the time. Before I talk price, I want to understand what matters most to you — timing, terms, or the number itself. If I can match two of those three, we can usually find the third together."</div>
        </div>

        <div class="script-block">
          <div class="script-label">After the anchor — Anchor the conversation on value, not list</div>
          <div class="script-body">"The asking price is a good starting point. My number is built from the last twelve months of closed comps in this area, adjusted for square footage and lot. Let me walk you through how I got there."</div>
        </div>

        <div class="script-block">
          <div class="script-label">After a counter — Never split the difference by default</div>
          <div class="script-body">"I hear you. Let me think about that overnight and come back with a structured response — price, closing date, and what stays with the house. I want to give you a clean answer, not a quick one."</div>
        </div>

        <div class="script-block">
          <div class="script-label">Trading non-price terms — Concessions that cost less than they look</div>
          <div class="script-body">"If we can agree that the generator, the chandelier in the foyer, and the workshop equipment convey, and close on a date that works for your move, I can meet you on the number. One clean offer, in writing, this week."</div>
        </div>

        <div class="script-block">
          <div class="script-label">Walk-away — Calm, not ultimatum</div>
          <div class="script-body">"I respect where you are. This one isn't going to work for me at that number. If circumstances change, you have my cell. Either way, sincerely — good luck with the sale."</div>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></h2>
        <div class="checklist">
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>Comp analysis completed</strong>
              <span class="check-sub">Last 12 months, 1-mile radius, minimum three closed sales, adjusted for sq ft, lot, and condition.</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>Anchor, target, walk-away written down</strong>
              <span class="check-sub">On paper, before any conversation with the seller. Signed and dated by Aaron.</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>Real estate attorney engaged</strong>
              <span class="check-sub">Buyer-side counsel, not the seller's. Retainer in place; LOI and contract on their desk before anything is signed.</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>Lender pre-approval in hand</strong>
              <span class="check-sub">Or proof-of-funds letter if cash. Patrick Lavette at Renasant Bank is the starting point.</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>Title company and escrow agent selected</strong>
              <span class="check-sub">Independent of seller. Confirm E&amp;O insurance coverage and turnaround time.</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>Inspector roster built</strong>
              <span class="check-sub">General inspector, structural engineer, HVAC tech, roofer, termite/WDI, radon, sewer scope — scheduled within 10-day window.</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>Survey ordered</strong>
              <span class="check-sub">Current boundary survey, dated within 90 days. Old surveys do not satisfy title insurers on estate-class properties.</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>Tax and permit records pulled</strong>
              <span class="check-sub">County assessor records, last 5 years of property tax history, all permits tied to the parcel.</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>Carrying-cost model built</strong>
              <span class="check-sub">Taxes + insurance + utilities + landscaping + HOA + reserve for repairs. Monthly total confirms the decision.</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>Exit plan defined</strong>
              <span class="check-sub">If circumstances change, can this property be resold or rented without loss? Answer in writing before offer.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- NEXT STEP -->
      <section class="nu-section">
        <div class="next-strip">
          <div class="next-strip-text">
            Next step — engage buyer-side counsel and complete the comp analysis this week.
            <span class="sub">Do not disclose the target or walk-away number to the seller, ever.</span>
          </div>
          <a class="nu-btn-white" href="tel:2055001343">Call Aaron · 205-500-1343</a>
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
    <div class="nu-footer-fine">Internal action brief — prepared from reMarkable notes. Not a binding offer, appraisal, or legal advice.</div>
  </footer>

</body>
</html>