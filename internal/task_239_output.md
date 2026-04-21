<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Purchase Negotiation Strategy — Norris Utilities®</title>
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
      --nu-alert-red: #C62828;
      --nu-success-green: #2E7D32;
      --nu-warning-amber: #E65100;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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
      font-size: 1.1rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 24px;
      padding: 8px 20px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: var(--nu-white);
      text-transform: uppercase;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ TITLE BLOCK ══ */
    .nu-title-block {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 30px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-title-block h1 {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: -0.01em;
    }
    .nu-title-block h1 span { color: var(--nu-blue); }
    .nu-title-block .subtitle {
      font-size: 1.05rem;
      color: #666;
      font-weight: 400;
    }
    .nu-title-block .meta {
      margin-top: 16px;
      display: inline-flex;
      gap: 24px;
      flex-wrap: wrap;
      justify-content: center;
      font-size: 0.85rem;
      color: #555;
    }
    .nu-title-block .meta span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .nu-title-block .meta strong { color: var(--nu-blue); font-weight: 700; }

    /* ══ SECTION ══ */
    .nu-section { margin-bottom: 50px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .blue { color: var(--nu-blue); }
    .nu-section-title .dark { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ PROPERTY SNAPSHOT ══ */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }
    .snapshot-card {
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px;
    }
    .snapshot-label {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .snapshot-value {
      font-size: 1.3rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .snapshot-sub {
      font-size: 0.85rem;
      color: #666;
      margin-top: 4px;
    }

    /* ══ PRIORITY BANNER ══ */
    .priority-banner {
      background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
      border-left: 6px solid var(--nu-warning-amber);
      padding: 20px 24px;
      border-radius: 6px;
      margin-bottom: 30px;
    }
    .priority-banner h3 {
      color: var(--nu-warning-amber);
      font-weight: 900;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }
    .priority-banner p {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }

    /* ══ STRATEGY CARDS ══ */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .strategy-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .strategy-card .num {
      position: absolute;
      top: -14px; left: 20px;
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 32px; height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.3);
    }
    .strategy-card h4 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.1rem;
      margin-bottom: 12px;
      margin-top: 6px;
    }
    .strategy-card p {
      color: var(--nu-body-text);
      font-size: 0.92rem;
      line-height: 1.6;
    }
    .strategy-card ul {
      margin-top: 10px;
      padding-left: 0;
      list-style: none;
    }
    .strategy-card ul li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 6px;
      font-size: 0.9rem;
    }
    .strategy-card ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 0;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* ══ NEGOTIATION TABLE ══ */
    .neg-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    .neg-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .neg-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .neg-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .neg-table tr:last-child td { border-bottom: none; }
    .neg-table tr:nth-child(even) td { background: #fafbff; }
    .neg-table .scenario {
      font-weight: 700;
      color: var(--nu-blue);
    }
    .neg-table .amt {
      font-weight: 900;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .tag {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .tag-open { background: #e3f2fd; color: var(--nu-blue); }
    .tag-target { background: #e8f5e9; color: var(--nu-success-green); }
    .tag-walk { background: #ffebee; color: var(--nu-alert-red); }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
      border: 1px solid #c5d9ff;
      border-radius: 8px;
      padding: 28px 32px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 12px 0;
      border-bottom: 1px dashed #d0dcef;
    }
    .checklist-item:last-child { border-bottom: none; }
    .checklist-box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .checklist-text strong {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* ══ SCRIPTS / TALKING POINTS ══ */
    .script-block {
      background: #fafafa;
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      border-radius: 4px;
      margin-bottom: 16px;
    }
    .script-block .label {
      font-size: 0.75rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 8px;
    }
    .script-block .text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
      font-style: italic;
    }

    /* ══ CONTINGENCY LIST ══ */
    .contingency-list {
      list-style: none;
      padding: 0;
    }
    .contingency-list li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 16px 20px;
      margin-bottom: 10px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }
    .contingency-list .icon {
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      flex-shrink: 0;
    }
    .contingency-list .body strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .contingency-list .body span {
      font-size: 0.9rem;
      color: #555;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 40px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      top: 0; bottom: 0;
      left: 12px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .timeline-item {
      position: relative;
      margin-bottom: 28px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -34px;
      top: 4px;
      width: 18px; height: 18px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.1);
    }
    .timeline-item .phase {
      font-size: 0.75rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 4px;
    }
    .timeline-item h5 {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .timeline-item p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* ══ FOOTER ══ */
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
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-contact strong { color: var(--nu-white); font-weight: 700; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.85rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .nu-title-block h1 { font-size: 1.7rem; }
      .neg-table { font-size: 0.85rem; }
      .neg-table th, .neg-table td { padding: 10px 12px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
      .strategy-card, .neg-table { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">U T I L I T I E S</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-label">Private — Negotiation Playbook</div>
    </div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-title-block">
        <h1><span>4505 Buttewoods</span> — Purchase Negotiation Strategy</h1>
        <div class="subtitle">7,098 sq ft Estate · Position, Leverage, and Path to Close</div>
        <div class="meta">
          <span><strong>Action:</strong> reMarkable Task</span>
          <span><strong>Subject:</strong> 4505 Buttewoods</span>
          <span><strong>Size:</strong> 7,098 sq ft</span>
          <span><strong>Prepared:</strong> April 21, 2026</span>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Property</span> <span class="dark">Snapshot</span></h2>
        <div class="snapshot-grid">
          <div class="snapshot-card">
            <div class="snapshot-label">Address</div>
            <div class="snapshot-value">4505 Buttewoods</div>
            <div class="snapshot-sub">Private residential estate</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Heated Square Footage</div>
            <div class="snapshot-value">7,098 sq ft</div>
            <div class="snapshot-sub">Estate-class footprint</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Transaction Type</div>
            <div class="snapshot-value">Direct Negotiation</div>
            <div class="snapshot-sub">Principal-to-principal posture</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Status</div>
            <div class="snapshot-value">Active</div>
            <div class="snapshot-sub">Action item captured on reMarkable</div>
          </div>
        </div>

        <div class="priority-banner">
          <h3>⚠ Pre-Negotiation Checklist — Complete Before First Offer</h3>
          <p>Independent appraisal, comparable sales pull (last 12 months, ≥6,500 sq ft, same submarket), title search, disclosure review, and inspection contingency scope. Do not make a written offer until all five items are in hand.</p>
        </div>
      </section>

      <!-- CORE STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Core</span> <span class="dark">Negotiation Strategy</span></h2>
        <div class="strategy-grid">

          <div class="strategy-card">
            <div class="num">1</div>
            <h4>Anchor on Data, Not Emotion</h4>
            <p>Lead every conversation with comparable sales, appraisal outcomes, and defensible math. A 7,098 sq ft estate is a narrow comp set — lean on price-per-square-foot bands from the three closest sales within 12 months.</p>
            <ul>
              <li>Pull three comparable sales ≥6,500 sq ft</li>
              <li>Adjust for lot, condition, updates</li>
              <li>Establish a defended $/sq ft range</li>
            </ul>
          </div>

          <div class="strategy-card">
            <div class="num">2</div>
            <h4>Establish Walk-Away Discipline</h4>
            <p>Set target price, ceiling price, and walk-away line in writing — before the first offer. Once set, do not adjust them mid-conversation. Emotional concessions at the table are where estate deals lose five and six figures.</p>
            <ul>
              <li>Target price — where you want to land</li>
              <li>Ceiling price — maximum acceptable</li>
              <li>Walk-away — below which you leave</li>
            </ul>
          </div>

          <div class="strategy-card">
            <div class="num">3</div>
            <h4>Open Low, But Credibly</h4>
            <p>An opening offer too low damages credibility and closes the seller emotionally. Open below target but within a defensible data range — typically 8–12% under the seller's ask, supported by at least one written comp.</p>
            <ul>
              <li>Opening: 8–12% under ask</li>
              <li>Tied to at least one written comp</li>
              <li>Written, not verbal</li>
            </ul>
          </div>

          <div class="strategy-card">
            <div class="num">4</div>
            <h4>Use Silence as a Tool</h4>
            <p>After presenting the offer and the reasoning, stop talking. The party who fills the silence typically concedes. Counteroffers should come back to you — not be volunteered by you.</p>
            <ul>
              <li>State the offer and the why</li>
              <li>Do not defend or expand unprompted</li>
              <li>Let the seller respond first</li>
            </ul>
          </div>

          <div class="strategy-card">
            <div class="num">5</div>
            <h4>Bundle Concessions, Don't Split</h4>
            <p>When price is contested, trade non-price terms as a package: closing date, fixtures, repairs, earnest money, inspection period. Never surrender concessions one at a time — bundle them into a single "this is the package" move.</p>
            <ul>
              <li>Closing flexibility</li>
              <li>Earnest money size</li>
              <li>Inspection scope and timeline</li>
            </ul>
          </div>

          <div class="strategy-card">
            <div class="num">6</div>
            <h4>Protect With Contingencies</h4>
            <p>On a 7,098 sq ft estate, the defects that hurt most are the ones you cannot see at showing: foundation, roof, HVAC zones, plumbing lines, and disclosure gaps. Contingencies are leverage — write them tight and use them.</p>
            <ul>
              <li>Inspection contingency with teeth</li>
              <li>Financing contingency (if applicable)</li>
              <li>Appraisal contingency — firm</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- PRICE FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Price</span> <span class="dark">Framework & Position Ladder</span></h2>
        <p style="margin-bottom: 18px; color: #555;">Fill in absolute dollar amounts after comparable sales and appraisal are in hand. Do not negotiate without these three numbers locked.</p>
        <table class="neg-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Definition</th>
              <th>Tag</th>
              <th>Discipline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="scenario">Opening Offer</td>
              <td>8–12% under seller's ask, defended by at least one written comp</td>
              <td><span class="tag tag-open">Open</span></td>
              <td>Written only — never verbal</td>
            </tr>
            <tr>
              <td class="scenario">Target Price</td>
              <td>Where you want to close — supported by median $/sq ft of three nearest comps</td>
              <td><span class="tag tag-target">Target</span></td>
              <td>Move here only after seller's first counter</td>
            </tr>
            <tr>
              <td class="scenario">Ceiling Price</td>
              <td>Absolute maximum acceptable — tied to appraisal + inspection outcome</td>
              <td><span class="tag tag-target">Ceiling</span></td>
              <td>Never disclose; never reveal the number</td>
            </tr>
            <tr>
              <td class="scenario">Walk-Away Line</td>
              <td>Below this number, the deal does not make sense — leave the table</td>
              <td><span class="tag tag-walk">Walk</span></td>
              <td>Set in writing before first conversation</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TALKING POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Talking</span> <span class="dark">Points & Script Lines</span></h2>

        <div class="script-block">
          <div class="label">Opening the Conversation</div>
          <div class="text">"I've run the comparable sales and the math on 4505 Buttewoods. I want to make a serious offer, but I want it grounded in what this market is actually paying for 7,000+ square foot homes in the last twelve months. Here's where the data puts us."</div>
        </div>

        <div class="script-block">
          <div class="label">Countering the Seller's Ask</div>
          <div class="text">"I respect the number you're asking. The three closest comps over 6,500 square feet put the range at [X] to [Y]. I want to be inside that range — that's where we can get this done cleanly."</div>
        </div>

        <div class="script-block">
          <div class="label">Responding to Emotional Pressure</div>
          <div class="text">"I understand this house means a lot. I want to honor that by writing a deal that actually closes — which means it has to make sense on paper, too. Let's work through the numbers together."</div>
        </div>

        <div class="script-block">
          <div class="label">When the Seller Says "That's My Final Number"</div>
          <div class="text">"I hear you. Let me take that back and look at whether the inspection and appraisal can support it. If they do, we have a deal. If they don't, I'll come back with what the data shows — not to argue, just to share it."</div>
        </div>

        <div class="script-block">
          <div class="label">Walking Away — Cleanly</div>
          <div class="text">"I don't think we're going to land in the same place today, and I'd rather leave this on good terms than force a deal neither of us is happy with. If the situation changes, please call me first."</div>
        </div>
      </section>

      <!-- CONTINGENCIES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Contingency</span> <span class="dark">Protections — Non-Negotiable</span></h2>
        <ul class="contingency-list">
          <li>
            <div class="icon">A</div>
            <div class="body">
              <strong>Inspection Contingency</strong>
              <span>Full structural, roof, foundation, HVAC-per-zone, electrical, plumbing. Minimum 10 business days. Right to renegotiate or terminate on material findings.</span>
            </div>
          </li>
          <li>
            <div class="icon">B</div>
            <div class="body">
              <strong>Appraisal Contingency</strong>
              <span>Purchase price supported by independent appraisal. If appraisal falls short, right to renegotiate down to appraised value or terminate without penalty.</span>
            </div>
          </li>
          <li>
            <div class="icon">C</div>
            <div class="body">
              <strong>Title & Disclosure</strong>
              <span>Clean title, full written seller disclosures, survey confirming lot lines, no undisclosed easements or encroachments. Any gap = right to renegotiate.</span>
            </div>
          </li>
          <li>
            <div class="icon">D</div>
            <div class="body">
              <strong>Financing Contingency</strong>
              <span>If financed, firm loan-approval window with right to terminate if financing fails. If cash, proof of funds provided only after earnest money is escrowed.</span>
            </div>
          </li>
          <li>
            <div class="icon">E</div>
            <div class="body">
              <strong>Closing Date Flexibility</strong>
              <span>Target close within 45 days of contract execution, with 15-day extension option on either side for financing, title, or inspection-remediation delays.</span>
            </div>
          </li>
        </ul>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Execution</span> <span class="dark">Timeline</span></h2>
        <div class="timeline">

          <div class="timeline-item">
            <div class="phase">Phase 1 — Preparation (Days 1–7)</div>
            <h5>Data in Hand Before First Conversation</h5>
            <p>Pull three comparable sales ≥6,500 sq ft within 12 months. Commission independent appraisal. Request full seller disclosures. Identify walk-away line in writing. Do not engage the seller on price until this is complete.</p>
          </div>

          <div class="timeline-item">
            <div class="phase">Phase 2 — Opening Offer (Days 7–10)</div>
            <h5>Written Offer Delivered</h5>
            <p>Deliver opening offer in writing, 8–12% under seller's ask, supported by at least one comp reference. Include earnest money, closing date, and full contingency package. Do not expand or defend beyond the cover letter.</p>
          </div>

          <div class="timeline-item">
            <div class="phase">Phase 3 — Counter & Negotiation (Days 10–21)</div>
            <h5>Work Back Toward Target</h5>
            <p>Move from opening to target only after seller's first counter. Bundle concessions on closing, fixtures, and earnest money rather than giving up price alone. Silence after each move — let the seller respond.</p>
          </div>

          <div class="timeline-item">
            <div class="phase">Phase 4 — Inspection & Appraisal (Days 21–35)</div>
            <h5>Leverage Findings, Protect Contingencies</h5>
            <p>Use inspection and appraisal outcomes to renegotiate — or walk. Any material defect or valuation gap is a lever: renegotiate in writing, request credits, or terminate cleanly. Do not close over an unresolved material issue.</p>
          </div>

          <div class="timeline-item">
            <div class="phase">Phase 5 — Close (Days 35–50)</div>
            <h5>Execute With Discipline</h5>
            <p>Title clear, financing locked (if applicable), disclosures reviewed in full, walkthrough complete within 48 hours of closing. Wire instructions verified by phone to escrow — never act on emailed wire changes without voice confirmation.</p>
          </div>

        </div>
      </section>

      <!-- ACTION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Aaron's</span> <span class="dark">Action Checklist</span></h2>
        <div class="checklist">

          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Pull comparables:</strong> three sales ≥6,500 sq ft within 12 months, same submarket</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Commission independent appraisal</strong> — not seller's appraisal, not agent's BPO</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Request full written seller disclosures</strong> before any offer is made</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Set target, ceiling, and walk-away</strong> in writing — signed and dated, kept private</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Line up attorney review</strong> of the purchase contract before signature</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Confirm financing path</strong> (cash, conventional, portfolio) before opening offer</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Write opening offer</strong> — 8–12% under ask, with one comp reference attached</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Schedule inspection</strong> — structural, roof, foundation, HVAC-per-zone, electrical, plumbing</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Verify title and survey</strong> — no undisclosed easements, encroachments, or liens</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Voice-verify all wire instructions</strong> with escrow — never act on emailed changes</div>
          </div>

        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong> &nbsp;|&nbsp; Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>