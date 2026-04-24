<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Acquisition — Negotiation Brief — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap');

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
      --nu-green: #1B7F3F;
      --nu-red: #B7351C;
      --nu-amber: #C9871F;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin: 4px 0 18px;
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
      margin-top: 18px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-cyan);
      letter-spacing: 0.3em;
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 25%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 800px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.02) 40%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
      opacity: 0.7;
    }
    .nu-wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* TITLE BLOCK */
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .doc-title .blue { color: var(--nu-blue); }
    .doc-sub {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 28px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 28px;
      padding: 16px 22px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 42px;
      font-size: 0.92rem;
    }
    .doc-meta b { color: var(--nu-dark-text); font-weight: 700; }

    /* SECTION */
    .nu-section { margin-bottom: 48px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .blue { color: var(--nu-blue); }
    .nu-section-title .dark { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      height: 3px;
      width: 80px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 22px;
      border-radius: 2px;
    }

    /* BADGE CHEVRON */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    /* TOP CALLOUTS */
    .top-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 44px;
    }
    .top-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .top-card .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .top-card .value {
      font-size: 1.3rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .top-card .sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }
    .nu-card h3 {
      font-size: 1.08rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card p + p { margin-top: 10px; }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border-radius: 8px;
      overflow: hidden;
      font-size: 0.94rem;
    }
    .nu-table thead { background: linear-gradient(135deg, var(--nu-blue), #0033cc); }
    .nu-table th {
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-table td.pos { color: var(--nu-green); }
    .nu-table td.neg { color: var(--nu-red); }

    /* STEPS */
    .step-list {
      counter-reset: step;
      list-style: none;
    }
    .step-list li {
      counter-increment: step;
      position: relative;
      padding: 16px 18px 16px 66px;
      margin-bottom: 12px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 6px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .step-list li::before {
      content: counter(step);
      position: absolute;
      left: 16px;
      top: 14px;
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
    .step-list li b { color: var(--nu-dark-text); }

    /* BULLETS */
    .nu-bullets { list-style: none; padding-left: 0; }
    .nu-bullets li {
      position: relative;
      padding: 6px 0 6px 24px;
    }
    .nu-bullets li::before {
      content: '•';
      position: absolute;
      left: 6px;
      top: 4px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
    }

    /* TAG */
    .tag {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .tag-green { background: rgba(27,127,63,0.12); color: var(--nu-green); }
    .tag-red   { background: rgba(183,53,28,0.12); color: var(--nu-red); }
    .tag-amber { background: rgba(201,135,31,0.14); color: var(--nu-amber); }
    .tag-blue  { background: rgba(0,0,255,0.10); color: var(--nu-blue); }

    /* WALKAWAY */
    .walkaway {
      background: linear-gradient(135deg, #fff5f3 0%, #fff 100%);
      border: 1px solid rgba(183,53,28,0.25);
      border-left: 5px solid var(--nu-red);
      border-radius: 8px;
      padding: 22px 26px;
    }
    .walkaway h3 {
      color: var(--nu-red);
      font-weight: 900;
      margin-bottom: 8px;
      font-size: 1.05rem;
    }

    /* CTA */
    .cta-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 10px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 12px 28px;
      border-radius: 4px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 12px 28px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      text-decoration: none;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.82);
      padding: 44px 30px;
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
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 46px 20px 66px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 40px 22px 60px; }
      .doc-title { font-size: 1.65rem; }
      .two-col { grid-template-columns: 1fr; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.85rem; }
      .nu-badge { clip-path: none; border-radius: 6px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .top-card { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .cta-row { display: none; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Real Estate — Negotiation Brief</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-wrap">

      <h1 class="doc-title"><span class="blue">4505 Buttewoods</span> — Acquisition &amp; Negotiation Brief</h1>
      <p class="doc-sub">7,098 sq ft estate — negotiating purchase terms, price, and closing conditions.</p>

      <div class="doc-meta">
        <div><b>Subject Property:</b> 4505 Buttewoods</div>
        <div><b>Size:</b> 7,098 sq ft</div>
        <div><b>Type:</b> Single-family estate</div>
        <div><b>Stage:</b> Active Negotiation</div>
        <div><b>Prepared:</b> 2026-04-24</div>
        <div><b>Principal:</b> Aaron C. Norris</div>
      </div>

      <!-- TOP CALLOUTS -->
      <div class="top-grid">
        <div class="top-card">
          <div class="label">Property Size</div>
          <div class="value">7,098 sq ft</div>
          <div class="sub">Per listing sheet — verify on appraisal</div>
        </div>
        <div class="top-card">
          <div class="label">Negotiation Status</div>
          <div class="value">Open — Terms Active</div>
          <div class="sub">Price, repairs, and close date in play</div>
        </div>
        <div class="top-card">
          <div class="label">Known Risk Items</div>
          <div class="value">Water Intrusion Disclosure</div>
          <div class="sub">Linked to H2O Waterproofing inquiry</div>
        </div>
        <div class="top-card">
          <div class="label">Next Gate</div>
          <div class="value">Written Seller Concessions</div>
          <div class="sub">Required before earnest money release</div>
        </div>
      </div>

      <!-- SECTION 1: SITUATION -->
      <section class="nu-section">
        <div class="nu-badge">Situation Overview</div>
        <h2 class="nu-section-title"><span class="blue">Where</span> <span class="dark">we stand today</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-card">
          <p>Aaron is negotiating the purchase of the 7,098 sq ft estate at <b>4505 Buttewoods</b>. This is an active acquisition, not an exploratory look. Two related reMarkable items are already in the queue:</p>
          <ul class="nu-bullets" style="margin-top:10px;">
            <li><b>Water intrusion disclosure</b> — omission flagged in the for-sale listing and must be reconciled before closing.</li>
            <li><b>H2O Waterproofing</b> — pre-close inquiry required; their findings need to be in writing prior to contract finalization.</li>
          </ul>
          <p style="margin-top:12px;">This brief organizes the price, terms, diligence, and walkaway conditions so the negotiation is driven by numbers and evidence — not pressure from the listing side.</p>
        </div>
      </section>

      <!-- SECTION 2: OBJECTIVES -->
      <section class="nu-section">
        <div class="nu-badge">Objectives</div>
        <h2 class="nu-section-title"><span class="blue">What</span> <span class="dark">a good deal looks like</span></h2>
        <div class="nu-section-rule"></div>

        <div class="two-col">
          <div class="nu-card">
            <h3>Primary Objectives</h3>
            <ul class="nu-bullets">
              <li>Purchase at or below verified fair market value for 7,098 sq ft in the submarket.</li>
              <li>Seller-funded remediation for any water intrusion findings, or equivalent price reduction.</li>
              <li>Clean title, full disclosure addendum signed, and warranty deed at closing.</li>
              <li>Flexible close date that lets diligence finish — no artificial pressure.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Non-Negotiables</h3>
            <ul class="nu-bullets">
              <li>Written H2O Waterproofing findings before earnest money goes hard.</li>
              <li>Seller acknowledges the prior omitted disclosure in writing.</li>
              <li>Inspection contingency period long enough to cover crawl/basement &amp; envelope review.</li>
              <li>No escalation clause. No waiver of appraisal. No waiver of inspection.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 3: KEY TERMS -->
      <section class="nu-section">
        <div class="nu-badge">Key Terms On The Table</div>
        <h2 class="nu-section-title"><span class="blue">Terms</span> <span class="dark">being negotiated</span></h2>
        <div class="nu-section-rule"></div>

        <table class="nu-table">
          <thead>
            <tr>
              <th style="width:24%">Term</th>
              <th>Aaron's Position</th>
              <th style="width:16%">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Purchase Price</b></td>
              <td>At or below appraised value; adjust downward for disclosed water intrusion issues.</td>
              <td><span class="tag tag-amber">Open</span></td>
            </tr>
            <tr>
              <td><b>Earnest Money</b></td>
              <td>Refundable during inspection &amp; diligence period; released only after H2O report is in hand.</td>
              <td><span class="tag tag-amber">Open</span></td>
            </tr>
            <tr>
              <td><b>Inspection Period</b></td>
              <td>Minimum sufficient to complete water intrusion, roof, envelope, and mechanicals review.</td>
              <td><span class="tag tag-amber">Open</span></td>
            </tr>
            <tr>
              <td><b>Disclosure Addendum</b></td>
              <td>Seller signs addendum acknowledging prior omission and current known conditions.</td>
              <td><span class="tag tag-red">Required</span></td>
            </tr>
            <tr>
              <td><b>Repairs / Credits</b></td>
              <td>Seller-funded remediation for water intrusion, or price credit at closing equal to H2O scope.</td>
              <td><span class="tag tag-amber">Open</span></td>
            </tr>
            <tr>
              <td><b>Appraisal Contingency</b></td>
              <td>Retained. No waiver.</td>
              <td><span class="tag tag-green">Locked</span></td>
            </tr>
            <tr>
              <td><b>Financing Contingency</b></td>
              <td>Retained — structure under review with lender.</td>
              <td><span class="tag tag-green">Locked</span></td>
            </tr>
            <tr>
              <td><b>Close Date</b></td>
              <td>Flexible — set after diligence completes, not before.</td>
              <td><span class="tag tag-amber">Open</span></td>
            </tr>
            <tr>
              <td><b>Title &amp; Deed</b></td>
              <td>Warranty deed, owner's title policy, clean survey, taxes current.</td>
              <td><span class="tag tag-blue">Standard</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION 4: DILIGENCE -->
      <section class="nu-section">
        <div class="nu-badge">Diligence Checklist</div>
        <h2 class="nu-section-title"><span class="blue">Proof</span> <span class="dark">before price agreement</span></h2>
        <div class="nu-section-rule"></div>

        <div class="two-col">
          <div class="nu-card">
            <h3>Property &amp; Condition</h3>
            <ul class="nu-bullets">
              <li>H2O Waterproofing written assessment of intrusion issue and remediation scope.</li>
              <li>General home inspection — full report with photos.</li>
              <li>Roof condition &amp; age verification.</li>
              <li>HVAC, plumbing, and electrical systems inspection.</li>
              <li>Foundation &amp; drainage review.</li>
              <li>Sewer / septic scope if applicable.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Legal, Title &amp; Financial</h3>
            <ul class="nu-bullets">
              <li>Full seller disclosure form — updated and signed.</li>
              <li>Prior disclosure review — document the omission formally.</li>
              <li>Preliminary title commitment &amp; survey.</li>
              <li>Property tax history (last 3 years).</li>
              <li>Independent appraisal from lender-approved appraiser.</li>
              <li>Comparable sales analysis for 7,098 sq ft estates in the submarket.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 5: NEGOTIATION PLAYBOOK -->
      <section class="nu-section">
        <div class="nu-badge">Negotiation Playbook</div>
        <h2 class="nu-section-title"><span class="blue">How</span> <span class="dark">we move the deal forward</span></h2>
        <div class="nu-section-rule"></div>

        <ol class="step-list">
          <li><b>Anchor on verified value.</b> Lead with the appraisal and comps for a 7,098 sq ft estate — not the listing number. Price discussion stays tied to documented evidence.</li>
          <li><b>Get the H2O report in writing.</b> Before any price concession discussion closes, H2O Waterproofing's findings must be documented. No verbal summaries, no "we think it's fine."</li>
          <li><b>Reconcile the prior disclosure omission.</b> Ask the seller — in writing — to acknowledge the omission and sign an updated disclosure addendum covering current known conditions.</li>
          <li><b>Convert findings to dollars.</b> Every diligence finding becomes a line item: either seller repair, price credit, or walkaway trigger. Nothing stays vague.</li>
          <li><b>Protect the earnest money.</b> Keep earnest refundable through the inspection window. Do not let earnest go hard until H2O and disclosure items are resolved on paper.</li>
          <li><b>Keep the close date flexible.</b> Do not agree to a seller-driven close date that shortens diligence. If pressured, push back — the estate has been on the market; the timeline serves the buyer.</li>
          <li><b>One channel of communication.</b> All offers, counters, and concessions go in writing through the agent. No sidebar agreements.</li>
        </ol>
      </section>

      <!-- SECTION 6: WALKAWAY -->
      <section class="nu-section">
        <div class="nu-badge">Walkaway Conditions</div>
        <h2 class="nu-section-title"><span class="blue">When</span> <span class="dark">we stop</span></h2>
        <div class="nu-section-rule"></div>

        <div class="walkaway">
          <h3>Deal stops if any of these happen</h3>
          <ul class="nu-bullets">
            <li>Seller refuses to provide written disclosure addendum covering water intrusion.</li>
            <li>H2O Waterproofing documents a remediation scope the seller will neither fund nor credit.</li>
            <li>Seller demands waiver of appraisal, inspection, or financing contingencies.</li>
            <li>Title defects, easement problems, or unresolved liens appear and are not cleared before closing.</li>
            <li>Appraisal comes in materially below the negotiated price and seller refuses to adjust.</li>
            <li>Seller pressures a close date that prevents full diligence.</li>
          </ul>
          <p style="margin-top:12px;"><b>Rule:</b> any one of the above is enough. The estate is a major acquisition — we only buy on clean terms.</p>
        </div>
      </section>

      <!-- SECTION 7: IMMEDIATE ACTIONS -->
      <section class="nu-section">
        <div class="nu-badge">Immediate Actions</div>
        <h2 class="nu-section-title"><span class="blue">Next</span> <span class="dark">moves this week</span></h2>
        <div class="nu-section-rule"></div>

        <table class="nu-table">
          <thead>
            <tr>
              <th style="width:8%">#</th>
              <th>Action</th>
              <th style="width:18%">Owner</th>
              <th style="width:18%">Trigger / Deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Call H2O Waterproofing — schedule site visit and request written findings.</td>
              <td>Aaron</td>
              <td>Before earnest hardens</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Request updated seller disclosure addendum addressing the prior omission.</td>
              <td>Aaron via agent</td>
              <td>This week</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Order independent appraisal through lender.</td>
              <td>Aaron / Lender</td>
              <td>Contract execution</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Schedule general home inspection (full — not abbreviated).</td>
              <td>Aaron</td>
              <td>Within inspection window</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Pull comps for 7,098 sq ft homes in submarket — last 12 months closed.</td>
              <td>Agent</td>
              <td>Before counter-offer</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Confirm title commitment &amp; survey ordered.</td>
              <td>Closing attorney</td>
              <td>Post-contract</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Log every offer, counter, and concession in the deal file — written record only.</td>
              <td>Aaron</td>
              <td>Ongoing</td>
            </tr>
          </tbody>
        </table>

        <div class="cta-row" style="margin-top:26px;">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Negotiation%20Update" class="nu-btn-secondary">Email Update</a>
        </div>
      </section>

      <!-- SECTION 8: DECISION LOG -->
      <section class="nu-section">
        <div class="nu-badge">Decision Log</div>
        <h2 class="nu-section-title"><span class="blue">Record</span> <span class="dark">of key calls</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-card">
          <p><b>2026-04-24 — Brief opened.</b> Negotiation stance documented. Appraisal and inspection contingencies retained. Earnest money remains refundable until H2O Waterproofing findings and disclosure addendum are in hand. No waivers offered.</p>
          <p><b>Open question:</b> final counter price pending appraisal and H2O scope.</p>
          <p><b>Owner:</b> Aaron C. Norris — all decisions run through principal, not delegated.</p>
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