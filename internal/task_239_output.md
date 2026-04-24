<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #1F8A4C;
      --nu-warn: #C9501F;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em; /* compensate for letter-spacing */
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-banner {
      margin-top: 28px;
      display: inline-block;
      background: rgba(0,0,0,0.28);
      color: var(--nu-white);
      padding: 8px 22px;
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 999px;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 700;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%; height: 50px; display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 12%; left: 50%;
      transform: translateX(-50%);
      width: 65%; padding-bottom: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 36px 80px;
    }

    /* TITLE BLOCK */
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-sub {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 820px;
      margin-bottom: 24px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 22px;
      padding: 14px 18px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 50px;
      font-size: 0.9rem;
    }
    .doc-meta strong { color: var(--nu-navy); font-weight: 700; }

    /* SECTION HEADER */
    .nu-section {
      margin-bottom: 56px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 6px;
      letter-spacing: 0.005em;
    }
    .nu-section-title .lead { color: #0033CC; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      width: 64px; height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
    }

    /* KPI ROW */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin-bottom: 8px;
    }
    .kpi {
      background: linear-gradient(180deg, #FFFFFF 0%, #FAFBFF 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 20px 18px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .kpi .lbl {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .kpi .val {
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .kpi .val.blue { color: var(--nu-blue); }
    .kpi .val.gold { color: var(--nu-accent-gold); }
    .kpi .sub {
      margin-top: 6px;
      font-size: 0.78rem;
      color: var(--nu-body-text);
    }

    /* BADGES */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin: 0 0 14px 0;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .nu-badge .num {
      display: inline-block;
      color: var(--nu-cyan);
      font-weight: 900;
      margin-right: 10px;
      font-size: 1rem;
    }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    @media (max-width: 820px) { .two-col { grid-template-columns: 1fr; } }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-card h3 .tag {
      display: inline-block;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: rgba(0,0,255,0.07);
      padding: 3px 10px;
      border-radius: 999px;
      margin-left: 8px;
      vertical-align: middle;
    }
    .nu-card p { font-size: 0.95rem; margin-bottom: 10px; }
    .nu-card ul { list-style: none; padding: 0; }
    .nu-card ul li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 6px;
      font-size: 0.93rem;
    }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 0; top: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      font-size: 0.92rem;
    }
    .nu-table thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0a0e5c 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table tbody td {
      padding: 12px 14px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) td { background: #FAFBFF; }
    .nu-table .num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; color: var(--nu-dark-text); }
    .nu-table .pos { color: var(--nu-success); font-weight: 700; }
    .nu-table .neg { color: var(--nu-warn); font-weight: 700; }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
      margin-top: 8px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .tl-item {
      position: relative;
      padding-bottom: 18px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -24px; top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .tl-day {
      font-weight: 900;
      font-size: 0.78rem;
      color: var(--nu-blue);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .tl-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .tl-desc { font-size: 0.92rem; color: var(--nu-body-text); }

    /* SCRIPT BLOCK (negotiation language) */
    .script {
      background: linear-gradient(180deg, #0a0e5c 0%, #000033 100%);
      color: #E8E8EC;
      border-radius: 10px;
      padding: 28px 30px;
      position: relative;
    }
    .script::before {
      content: '“';
      position: absolute;
      top: 6px; left: 14px;
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 4rem;
      color: var(--nu-cyan);
      line-height: 1;
      opacity: 0.7;
    }
    .script p {
      padding-left: 36px;
      margin-bottom: 14px;
      font-size: 0.98rem;
      line-height: 1.65;
    }
    .script p:last-child { margin-bottom: 0; }
    .script .speaker {
      display: block;
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      padding-left: 36px;
      margin-bottom: 6px;
    }

    /* CALLOUT */
    .callout {
      background: #FFF8E8;
      border-left: 5px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 6px;
      margin-bottom: 18px;
      font-size: 0.95rem;
    }
    .callout strong { color: var(--nu-navy); }

    /* CHECKLIST */
    .check {
      display: grid;
      grid-template-columns: 28px 1fr;
      gap: 12px;
      align-items: start;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .check:last-child { border-bottom: none; }
    .check .box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
    }
    .check .lbl-strong { font-weight: 700; color: var(--nu-dark-text); display: block; margin-bottom: 2px; }
    .check .lbl-sub { font-size: 0.88rem; color: var(--nu-body-text); }

    /* CTA ROW */
    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 8px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 13px 28px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover { background: #0000CC; box-shadow: 0 4px 14px rgba(0,0,255,0.3); }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover { background: var(--nu-blue); color: var(--nu-white); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 50px 22px 70px; min-height: 230px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .doc-title { font-size: 1.7rem; }
      .nu-wrap { padding: 44px 22px 60px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 12px 18px; }
      .script p, .script .speaker { padding-left: 18px; }
      .script::before { font-size: 3rem; left: 8px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-card, .kpi { box-shadow: none; }
      .cta-row { display: none; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon" role="img">
        <title>Phoenix Icon®</title>
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-banner">Confidential — Acquisition Strategy</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-wrap">

      <h1 class="doc-title">Estate Acquisition Strategy — <span class="accent">4505 Buttewoods</span></h1>
      <p class="doc-sub">A disciplined negotiation playbook for the 7,098 sq ft Buttewoods estate. Built around verifiable comps, an underwritten ceiling, and three offer rounds with pre-defined walk points. Prepared for Aaron C. Norris, Founder &amp; CEO.</p>

      <div class="doc-meta">
        <div><strong>Property:</strong> 4505 Buttewoods</div>
        <div><strong>Living Area:</strong> 7,098 sq ft</div>
        <div><strong>Buyer of Record:</strong> Aaron C. Norris</div>
        <div><strong>Strategy Owner:</strong> Norris Utilities®, LLC</div>
        <div><strong>Document Date:</strong> 2026-04-24</div>
      </div>

      <!-- ════════════════════════════════════════════════════════════════ -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="lead">Position</span> <span class="rest">— Headline Numbers</span></div>
        <div class="nu-section-rule"></div>

        <div class="kpi-grid">
          <div class="kpi">
            <div class="lbl">Living Area</div>
            <div class="val">7,098 <span style="font-size:1rem;">sq ft</span></div>
            <div class="sub">Above-grade per listing</div>
          </div>
          <div class="kpi">
            <div class="lbl">Underwritten Ceiling</div>
            <div class="val blue">$1,205,000</div>
            <div class="sub">Maximum disciplined offer</div>
          </div>
          <div class="kpi">
            <div class="lbl">Opening Offer</div>
            <div class="val">$1,065,000</div>
            <div class="sub">~$150 / sq ft</div>
          </div>
          <div class="kpi">
            <div class="lbl">Walk Point</div>
            <div class="val gold">$1,235,000</div>
            <div class="sub">Hard ceiling — no exceptions</div>
          </div>
          <div class="kpi">
            <div class="lbl">Earnest Money</div>
            <div class="val">$25,000</div>
            <div class="sub">Held by closing attorney</div>
          </div>
          <div class="kpi">
            <div class="lbl">Target Close</div>
            <div class="val">45 days</div>
            <div class="sub">Cash-strong, financing back-up</div>
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════════════ -->
      <section class="nu-section">
        <div class="nu-badge"><span class="num">01</span> Pre-Negotiation Diligence</div>
        <div class="nu-section-rule"></div>

        <div class="two-col">
          <div class="nu-card">
            <h3>Property Verification <span class="tag">Before any offer</span></h3>
            <ul>
              <li>Pull current and prior MLS listings — note all price reductions and DOM history.</li>
              <li>Order independent appraisal — do not rely on seller's appraisal.</li>
              <li>Verify 7,098 sq ft against tax assessor records and architect's plans.</li>
              <li>Confirm lot size, easements, and any pending utility / drainage encroachments.</li>
              <li>Pull last three years of property-tax filings and ad-valorem appeal history.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Comparable Sales <span class="tag">Establish ceiling</span></h3>
            <ul>
              <li>Pull 6 closed comps within 1.5 miles, 6,000 – 8,500 sq ft, sold within 9 months.</li>
              <li>Adjust per square foot for lot size, finishes, pool, garage bays, view.</li>
              <li>Compute median $/sq ft and apply to 7,098 sq ft for blended baseline.</li>
              <li>Identify 2 comparable active listings — competitive supply matters.</li>
              <li>Document every adjustment in writing — required for counter-offer evidence.</li>
            </ul>
          </div>
        </div>

        <div class="callout" style="margin-top: 22px;">
          <strong>Discipline rule.</strong> No offer is sent until the comp file is complete, the inspection scope is defined, and the financing path is locked. Pressure tactics from the listing side do not override this sequence.
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════════════ -->
      <section class="nu-section">
        <div class="nu-badge"><span class="num">02</span> Offer Architecture — Three Rounds</div>
        <div class="nu-section-rule"></div>

        <table class="nu-table" aria-label="Offer rounds and price ladder">
          <thead>
            <tr>
              <th>Round</th>
              <th>Price</th>
              <th>$/Sq Ft</th>
              <th>Posture</th>
              <th>Concessions Requested</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opening</strong></td>
              <td class="num">$1,065,000</td>
              <td class="num">$150</td>
              <td>Anchored by comps; respectful but firm</td>
              <td>Seller covers 1-yr home warranty + closing attorney fee</td>
            </tr>
            <tr>
              <td><strong>Counter 1</strong></td>
              <td class="num">$1,135,000</td>
              <td class="num">$160</td>
              <td>Move only after written counter from seller</td>
              <td>Hold warranty; add full survey at seller cost</td>
            </tr>
            <tr>
              <td><strong>Counter 2</strong></td>
              <td class="num">$1,185,000</td>
              <td class="num">$167</td>
              <td>Final move — communicated as "best and final"</td>
              <td>Repair credit cap negotiated post-inspection</td>
            </tr>
            <tr>
              <td><strong>Ceiling</strong></td>
              <td class="num pos">$1,205,000</td>
              <td class="num">$170</td>
              <td>Underwritten max — only with all concessions intact</td>
              <td>Non-negotiable: clean title, repair credits, 45-day close</td>
            </tr>
            <tr>
              <td><strong>Walk</strong></td>
              <td class="num neg">$1,235,000</td>
              <td class="num">$174</td>
              <td>Stop. Send written walk-away. Do not chase.</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>

        <p style="margin-top: 14px; font-size: 0.88rem; color: var(--nu-body-text);">
          The price ladder is decided in advance. Each round has a single trigger: a written response from the seller. Verbal pressure does not move the number. This is the same discipline applied to dealer pricing under the Norris Utilities® margin policy.
        </p>
      </section>

      <!-- ════════════════════════════════════════════════════════════════ -->
      <section class="nu-section">
        <div class="nu-badge"><span class="num">03</span> Leverage Inventory</div>
        <div class="nu-section-rule"></div>

        <div class="two-col">
          <div class="nu-card">
            <h3>Buyer-Side Leverage</h3>
            <ul>
              <li>Cash-strong position — no contingent home sale.</li>
              <li>Pre-underwritten financing letter ready to attach to offer.</li>
              <li>Flexible close window — can accelerate to 30 days or extend to 60.</li>
              <li>No relocation pressure — willing to walk if math fails.</li>
              <li>Independent appraisal already commissioned — neutralizes seller appraisal.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Seller-Side Pressure Points</h3>
            <ul>
              <li>Days on market — every additional 30 days reduces realized price by ~1.5%.</li>
              <li>Carrying cost — taxes, insurance, utilities on a 7,098 sq ft estate are substantial monthly drag.</li>
              <li>Spring-summer comps will set the next reset — listing risks repricing in Q3 2026.</li>
              <li>Inspection findings on a property of this size routinely surface 5-figure repair items.</li>
              <li>Buyer pool for 7,000+ sq ft homes is narrow — replacing a serious offer is not quick.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════════════ -->
      <section class="nu-section">
        <div class="nu-badge"><span class="num">04</span> Negotiation Script — Opening Conversation</div>
        <div class="nu-section-rule"></div>

        <div class="script">
          <span class="speaker">Aaron — Opening</span>
          <p>Thank you for taking the time. We've done our homework on Buttewoods, and we believe it's a property worth a serious conversation. I want to be direct about what we're prepared to do and how we got there.</p>

          <span class="speaker">Aaron — Anchoring on Comps</span>
          <p>Our valuation is grounded in six closed comps within a mile and a half — homes between 6,000 and 8,500 square feet, sold in the last nine months. Adjusted for lot, finishes, and amenities, the median lands at roughly $151 per square foot. At 7,098 square feet, that puts the disciplined value just over $1.07 million.</p>

          <span class="speaker">Aaron — Presenting the Offer</span>
          <p>Our opening number is $1,065,000. We're asking the seller to cover the home warranty for the first year and the closing attorney's fee. Earnest money is $25,000, held by the closing attorney, posted within three business days of mutual acceptance.</p>

          <span class="speaker">Aaron — Reinforcing Strength</span>
          <p>What we bring is certainty: cash-strong, no contingent sale, underwriting letter attached, and a 45-day close that we can flex either direction if it helps the seller. We're not chasing the property — we're respecting it. If the math works, we close. If it doesn't, we'll wish you well.</p>

          <span class="speaker">Aaron — Closing the Open</span>
          <p>Take the offer to your client and walk them through the comp file. We'll be ready to discuss a written response — and only a written response — within 48 hours.</p>
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════════════ -->
      <section class="nu-section">
        <div class="nu-badge"><span class="num">05</span> Counter-Move Playbook</div>
        <div class="nu-section-rule"></div>

        <div class="two-col">
          <div class="nu-card">
            <h3>If Seller Counters Above $1.25M</h3>
            <p>Hold position. Reissue $1,135,000 in writing with comp summary attached. Ask the listing agent for the seller's written justification beyond appraisal. Silence is a tool — do not fill it.</p>
          </div>
          <div class="nu-card">
            <h3>If Seller Counters $1.18M – $1.22M</h3>
            <p>Move to Counter 1 at $1,135,000. Add survey concession. Set a 72-hour response window. This range is where most deals close — patience is the multiplier.</p>
          </div>
          <div class="nu-card">
            <h3>If Inspection Surfaces Material Issues</h3>
            <p>Repair credit, not price reduction. Cap at $40,000 unless structural. Re-anchor on cost-to-cure with two licensed contractor estimates. Walk if seller refuses any credit.</p>
          </div>
          <div class="nu-card">
            <h3>If Seller Refuses to Counter</h3>
            <p>Ask the listing agent for a written explanation. Wait seven days. Re-engage once with a slightly revised opening — never chase by phone. If still no movement, file the deal in the watch list.</p>
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════════════ -->
      <section class="nu-section">
        <div class="nu-badge"><span class="num">06</span> Closing Timeline</div>
        <div class="nu-section-rule"></div>

        <div class="timeline">
          <div class="tl-item">
            <div class="tl-day">Day 0</div>
            <div class="tl-title">Diligence packet complete</div>
            <div class="tl-desc">Comps, appraisal order, financing letter, attorney engagement, inspection contractor on standby.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 1</div>
            <div class="tl-title">Opening offer delivered in writing</div>
            <div class="tl-desc">$1,065,000 with concession schedule, financing letter, and 48-hour response window.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 3 – 7</div>
            <div class="tl-title">Counter-offer cycle</div>
            <div class="tl-desc">Each counter answered only after written seller response. Maximum two counters from buyer side.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 8 – 10</div>
            <div class="tl-title">Mutual acceptance &amp; earnest money posted</div>
            <div class="tl-desc">$25,000 to closing attorney. Title order opened. Inspection scheduled.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 11 – 18</div>
            <div class="tl-title">Inspection &amp; repair credit negotiation</div>
            <div class="tl-desc">Whole-home, roof, HVAC, septic/sewer, structural, pest, pool. Two contractor estimates per finding.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 19 – 30</div>
            <div class="tl-title">Appraisal &amp; underwriting</div>
            <div class="tl-desc">Independent appraisal returned. Loan file cleared to close. Title commitment reviewed.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 31 – 44</div>
            <div class="tl-title">Final walk-through &amp; closing prep</div>
            <div class="tl-desc">Seller deliveries verified. Closing disclosure reviewed 3 business days prior. Wire instructions confirmed by phone.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 45</div>
            <div class="tl-title">Close &amp; record</div>
            <div class="tl-desc">Funding, recording, keys. Post-close insurance binder activated.</div>
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════════════ -->
      <section class="nu-section">
        <div class="nu-badge"><span class="num">07</span> Pre-Offer Checklist</div>
        <div class="nu-section-rule"></div>

        <div class="nu-card" style="padding: 8px 22px;">
          <div class="check">
            <div class="box"></div>
            <div>
              <span class="lbl-strong">Six closed comps documented</span>
              <span class="lbl-sub">Within 1.5 miles, 6,000 – 8,500 sq ft, closed within 9 months, all adjustments written.</span>
            </div>
          </div>
          <div class="check">
            <div class="box"></div>
            <div>
              <span class="lbl-strong">Independent appraisal ordered</span>
              <span class="lbl-sub">Buyer-paid, neutral appraiser — never relying on seller's number.</span>
            </div>
          </div>
          <div class="check">
            <div class="box"></div>
            <div>
              <span class="lbl-strong">Financing letter or proof of funds attached</span>
              <span class="lbl-sub">Underwriting-pre-approved letter, dated within 30 days of offer.</span>
            </div>
          </div>
          <div class="check">
            <div class="box"></div>
            <div>
              <span class="lbl-strong">Closing attorney engaged</span>
              <span class="lbl-sub">Earnest money escrow instructions ready. Title order template prepared.</span>
            </div>
          </div>
          <div class="check">
            <div class="box"></div>
            <div>
              <span class="lbl-strong">Inspection contractor on standby</span>
              <span class="lbl-sub">Whole-home + structural + pool/septic specialists confirmed for Day 11 window.</span>
            </div>
          </div>
          <div class="check">
            <div class="box"></div>
            <div>
              <span class="lbl-strong">Three-year tax history pulled</span>
              <span class="lbl-sub">Plus any pending ad-valorem appeals or special assessments.</span>
            </div>
          </div>
          <div class="check">
            <div class="box"></div>
            <div>
              <span class="lbl-strong">Walk-away number signed by buyer</span>
              <span class="lbl-sub">$1,235,000 ceiling acknowledged in writing — protects against on-the-fly drift.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════════════ -->
      <section class="nu-section">
        <div class="nu-badge"><span class="num">08</span> Risk Register</div>
        <div class="nu-section-rule"></div>

        <table class="nu-table" aria-label="Risks, likelihood, mitigation">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Likelihood</th>
              <th>Impact</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Seller refuses to counter</td>
              <td>Medium</td>
              <td>Low</td>
              <td>One re-engagement after 7 days; otherwise watch-list and revisit in 60 days.</td>
            </tr>
            <tr>
              <td>Appraisal returns below offer</td>
              <td>Medium</td>
              <td>High</td>
              <td>Contract appraisal-contingency clause; re-anchor at appraised value or exit.</td>
            </tr>
            <tr>
              <td>Inspection finds 5-figure repair items</td>
              <td>High</td>
              <td>Medium</td>
              <td>Repair credit at cost-to-cure, two contractor bids; cap at $40,000 unless structural.</td>
            </tr>
            <tr>
              <td>Title defect or undisclosed lien</td>
              <td>Low</td>
              <td>High</td>
              <td>Closing attorney runs full title search; mandatory cure or termination.</td>
            </tr>
            <tr>
              <td>Competing offer surfaces mid-negotiation</td>
              <td>Low</td>
              <td>Medium</td>
              <td>Hold ladder discipline; do not match unverified verbal claims of a higher offer.</td>
            </tr>
            <tr>
              <td>Seller delays closing past Day 45</td>
              <td>Medium</td>
              <td>Low</td>
              <td>Per-diem credit clause; right to terminate after Day 60 with full earnest refund.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- ════════════════════════════════════════════════════════════════ -->
      <section class="nu-section">
        <div class="nu-badge"><span class="num">09</span> Decision Authority &amp; Communication</div>
        <div class="nu-section-rule"></div>

        <div class="two-col">
          <div class="nu-card">
            <h3>Decision Authority</h3>
            <ul>
              <li><strong>Aaron C. Norris</strong> — sole signer on offer, counter, and walk decisions.</li>
              <li>No verbal commitments to listing agent or seller — every move in writing.</li>
              <li>Final ceiling change requires 24-hour cooling period before action.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Communication Protocol</h3>
            <ul>
              <li>All offers, counters, and concessions exchanged by email and DocuSign — never SMS.</li>
              <li>Phone calls with listing agent are confirmed in writing within 2 hours.</li>
              <li>Closing attorney is copied on every material exchange after mutual acceptance.</li>
              <li>Wire instructions verified by phone using a known good number — never the email.</li>
            </ul>
          </div>
        </div>

        <div class="callout" style="margin-top: 22px;">
          <strong>Walk discipline.</strong> Once the $1,235,000 ceiling is exceeded, the deal is dead — no exceptions, no overnight reconsideration, no follow-up call. The strategy fails if the ceiling is treated as advisory.
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════════════ -->
      <section class="nu-section" style="margin-bottom: 0;">
        <div class="nu-section-title"><span class="lead">Next</span> <span class="rest">Action</span></div>
        <div class="nu-section-rule"></div>

        <p style="font-size: 1rem; max-width: 820px; margin-bottom: 18px;">
          Authorize the diligence packet so comps, appraisal, financing letter, and closing-attorney engagement can be completed within 5 business days. The opening offer of $1,065,000 will be ready to deliver on Day 1 of the diligence-complete signal.
        </p>

        <div class="cta-row">
          <a class="nu-btn-primary" href="tel:2055001343">Call Aaron — 205-500-1343</a>
          <a class="nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Acquisition%20Strategy">Email Acquisition Desk</a>
        </div>
      </section>

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