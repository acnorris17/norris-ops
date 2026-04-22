<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Negotiation Brief — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

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
      --nu-success: #0d7a3d;
      --nu-warn: #b45309;
      --nu-danger: #b91c1c;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
    .nu-header-inner { position: relative; z-index: 2; }

    /* Ghost phoenix watermark */
    .nu-header-inner::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 200%;
      background-image: radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, transparent 60%);
      z-index: -1;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
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
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 4px;
      color: var(--nu-white);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
    }

    /* Asymmetric white chevron transition */
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
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-inner {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* ══ DOC HEADER ══ */
    .doc-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 24px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 28px;
      padding: 16px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
      font-size: 0.9rem;
    }
    .doc-meta div strong { color: var(--nu-dark-text); font-weight: 700; }
    .doc-meta div span { color: var(--nu-body-text); }

    /* ══ SECTION ══ */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 8px;
      line-height: 1.2;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-underline {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
    }
    .nu-section p { margin-bottom: 12px; }

    /* ══ PROPERTY FACT GRID ══ */
    .fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }
    .fact {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .fact-label {
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .fact-note {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* ══ CHEVRON BADGES (goals list) ══ */
    .nu-goals { margin-top: 10px; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 20px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.98rem;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px; height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
      font-size: 0.9rem;
    }

    /* ══ STRATEGY TABLE ══ */
    .nu-table-wrap { overflow-x: auto; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.93rem;
      min-width: 640px;
    }
    .nu-table thead th {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table td.price { font-weight: 900; color: var(--nu-blue); white-space: nowrap; }

    /* ══ LEVERAGE CARDS ══ */
    .leverage-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .leverage-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .leverage-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.09);
    }
    .leverage-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .leverage-card h4 .bullet {
      width: 10px; height: 10px;
      background: var(--nu-cyan);
      transform: rotate(45deg);
      flex-shrink: 0;
    }
    .leverage-card p { font-size: 0.93rem; line-height: 1.55; }

    /* ══ CHECKLIST ══ */
    .nu-checklist { list-style: none; padding: 0; }
    .nu-checklist li {
      position: relative;
      padding: 10px 0 10px 36px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 4px; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }
    .nu-checklist li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 30px;
      border-left: 3px solid var(--nu-cyan);
      margin-left: 8px;
    }
    .timeline-item {
      position: relative;
      padding: 0 0 22px 10px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -40px; top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-cyan);
      border-radius: 50%;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-phase {
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }
    .timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .timeline-desc { font-size: 0.92rem; }

    /* ══ WALK-AWAY CALLOUT ══ */
    .walk-away {
      background: linear-gradient(135deg, #fff8e1 0%, #fff 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 4px;
      margin-top: 24px;
    }
    .walk-away h4 {
      color: var(--nu-warn);
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 8px;
      letter-spacing: 0.03em;
    }

    /* ══ FOOTER ══ */
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
      font-size: 1.2rem;
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
    .nu-footer-note {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      margin-top: 20px;
      letter-spacing: 0.04em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .doc-title { font-size: 1.6rem; }
      .nu-inner { padding: 40px 22px 60px; }
      .nu-badge { clip-path: none; border-radius: 8px; }
    }

    /* ══ PRINT ══ */
    @media print {
      body { background: #fff; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .leverage-card, .fact { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-label">Confidential — Negotiation Brief</div>
    </div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-inner">

      <!-- DOC TITLE -->
      <h1 class="doc-title"><span>4505 Buttewoods</span> Estate — Acquisition &amp; Negotiation Brief</h1>
      <p class="doc-subtitle">Strategy and action plan for the negotiated purchase of the 7,098 sq ft estate at 4505 Buttewoods.</p>

      <div class="doc-meta">
        <div><strong>Subject Property:</strong> <span>4505 Buttewoods — 7,098 sq ft residence</span></div>
        <div><strong>Status:</strong> <span>Negotiation phase — active</span></div>
        <div><strong>Prepared:</strong> <span>April 22, 2026</span></div>
        <div><strong>Principal:</strong> <span>Aaron C. Norris</span></div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="nu-section-underline"></div>
        <p>The subject is a 7,098 square foot single-family estate at 4505 Buttewoods. All data points below anchor the negotiation position; anything still pending confirmation from the listing agent, inspector, or title officer is flagged so that no number is relied upon before it is verified.</p>

        <div class="fact-grid" style="margin-top: 18px;">
          <div class="fact">
            <div class="fact-label">Address</div>
            <div class="fact-value">4505 Buttewoods</div>
            <div class="fact-note">Subject property of record</div>
          </div>
          <div class="fact">
            <div class="fact-label">Living Area</div>
            <div class="fact-value">7,098 sq ft</div>
            <div class="fact-note">Per listing — confirm with appraisal</div>
          </div>
          <div class="fact">
            <div class="fact-label">Property Type</div>
            <div class="fact-value">Estate Residence</div>
            <div class="fact-note">Single-family</div>
          </div>
          <div class="fact">
            <div class="fact-label">Transaction Phase</div>
            <div class="fact-value">Negotiation</div>
            <div class="fact-note">Pre-offer / counter stage</div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objectives</span></h2>
        <div class="nu-section-underline"></div>
        <div class="nu-goals">
          <div class="nu-badge"><span class="nu-badge-num">1</span> Acquire 4505 Buttewoods at or below verified fair market value</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span> Protect Norris Utilities® cash position — no contingency-free cash offer</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span> Retain inspection, financing, title, and appraisal contingencies in full</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span> Close within an agreed window — no open-ended closing date</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span> Walk away cleanly if price, condition, or terms slip past the defined ceiling</div>
        </div>
      </section>

      <!-- VALUATION STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Framework</span></h2>
        <div class="nu-section-underline"></div>
        <p>Three independent price anchors will be built before any offer or counter is submitted. The <strong>lowest defensible anchor</strong> sets the opening offer; the <strong>highest defensible anchor</strong> sets the walk-away ceiling.</p>

        <div class="nu-table-wrap" style="margin-top: 18px;">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Anchor</th>
                <th>Method</th>
                <th>Source</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Comparable Sales</strong></td>
                <td>3–5 closed sales within 12 months, similar sq ft, same submarket</td>
                <td>MLS / licensed buyer's agent</td>
                <td>Buyer's agent</td>
              </tr>
              <tr>
                <td><strong>Licensed Appraisal</strong></td>
                <td>Ordered through lender post-acceptance; also order independent pre-offer BPO if time allows</td>
                <td>Certified residential appraiser</td>
                <td>Lender / buyer</td>
              </tr>
              <tr>
                <td><strong>Replacement-Cost Check</strong></td>
                <td>7,098 sq ft × local construction cost/sq ft + land value</td>
                <td>Builder quote or cost service (Marshall &amp; Swift)</td>
                <td>Buyer's agent</td>
              </tr>
              <tr>
                <td><strong>Days on Market</strong></td>
                <td>Longer DOM → stronger buyer leverage; map price drops</td>
                <td>MLS history</td>
                <td>Buyer's agent</td>
              </tr>
              <tr>
                <td><strong>Seller Motivation</strong></td>
                <td>Relocation, estate, divorce, or dual-carry all strengthen buyer position</td>
                <td>Listing agent dialogue</td>
                <td>Buyer's agent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- LEVERAGE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Buyer</span> <span class="rest">Leverage Points</span></h2>
        <div class="nu-section-underline"></div>
        <div class="leverage-grid">
          <div class="leverage-card">
            <h4><span class="bullet"></span> Pre-Approval, Not Pre-Qualification</h4>
            <p>Enter with a written pre-approval from Renasant Bank (Patrick Lavette). A documented financing strength letter at or above asking price signals seriousness and reduces seller's financing risk.</p>
          </div>
          <div class="leverage-card">
            <h4><span class="bullet"></span> Flexible Close Date</h4>
            <p>Offer to match the seller's preferred possession window — whether fast close or extended occupancy. Flexibility on dates is frequently worth real dollars on price.</p>
          </div>
          <div class="leverage-card">
            <h4><span class="bullet"></span> Clean Earnest Money</h4>
            <p>Standard earnest money held in licensed escrow — enough to show commitment, not so much that it becomes leverage against the buyer if a legitimate contingency triggers.</p>
          </div>
          <div class="leverage-card">
            <h4><span class="bullet"></span> Inspection Findings as Counter Basis</h4>
            <p>Price concessions or repair credits must be tied to specific inspection, structural, environmental, or title findings — not vague feelings about the market.</p>
          </div>
          <div class="leverage-card">
            <h4><span class="bullet"></span> Seller Concessions Over Price Cuts</h4>
            <p>If seller will not drop price, pivot to closing cost credits, rate buy-down contributions, or included fixtures. Economic equivalent, different line on the settlement statement.</p>
          </div>
          <div class="leverage-card">
            <h4><span class="bullet"></span> Silence as a Tool</h4>
            <p>Never chase. After a counter is delivered, give the seller time to respond. Pressure in a buyer-side negotiation almost always works in the patient party's favor.</p>
          </div>
        </div>
      </section>

      <!-- PRE-OFFER CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></h2>
        <div class="nu-section-underline"></div>
        <ul class="nu-checklist">
          <li><strong>Engage buyer's agent</strong> — licensed representation with a signed exclusive agency agreement. Pull comps and DOM history.</li>
          <li><strong>Secure written pre-approval</strong> — full underwriting letter, not prequal. Lock rate timeline aligned to projected close.</li>
          <li><strong>Order preliminary title search</strong> — identify liens, easements, unreleased mortgages, or boundary encroachments before offer.</li>
          <li><strong>Confirm square footage</strong> — 7,098 sq ft claim cross-checked against tax roll and, if possible, tape-measured pre-offer.</li>
          <li><strong>Pull tax and utility records</strong> — last 3 years of property tax, water, power usage. Unusual spikes signal hidden issues.</li>
          <li><strong>Research zoning &amp; HOA</strong> — any use restrictions, pending assessments, architectural review constraints.</li>
          <li><strong>Flood, insurance, environmental</strong> — flood zone determination, quick insurance quote, and any known environmental overlays.</li>
          <li><strong>Set walk-away ceiling in writing</strong> — fixed number, signed off by Aaron before the first offer leaves the table.</li>
        </ul>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Timeline</span></h2>
        <div class="nu-section-underline"></div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-phase">Phase 1 — Discovery</div>
            <div class="timeline-title">Comps, condition, and seller motivation</div>
            <div class="timeline-desc">Buyer's agent produces comp packet, photos, and DOM analysis. Targeted conversation with listing agent to identify seller's real drivers.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 2 — Position</div>
            <div class="timeline-title">Set opening, target, and ceiling numbers</div>
            <div class="timeline-desc">Three-number model confirmed with Aaron. Contingency language pre-drafted. Earnest money and close date options locked.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 3 — Offer</div>
            <div class="timeline-title">Written offer submitted with pre-approval letter</div>
            <div class="timeline-desc">Opening offer below target but defensible from comps. Clean, readable, and responsive to seller's likely priorities.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 4 — Counter</div>
            <div class="timeline-title">Structured counter sequence — price, terms, credits</div>
            <div class="timeline-desc">Each counter narrows one variable at a time. No concessions without a reciprocal movement from the seller.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 5 — Binding Contract</div>
            <div class="timeline-title">Fully executed purchase &amp; sale agreement</div>
            <div class="timeline-desc">Attorney review completed. Earnest money delivered to escrow. Inspection, appraisal, and financing clocks started.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 6 — Due Diligence</div>
            <div class="timeline-title">Inspection, appraisal, and title clearance</div>
            <div class="timeline-desc">All contingency findings resolved in writing. Any re-negotiation strictly tied to documented findings.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 7 — Close</div>
            <div class="timeline-title">Settlement, funding, deed recorded</div>
            <div class="timeline-desc">Clear-to-close letter received. Final walkthrough 24–48 hours before closing. Deed recorded and keys transferred.</div>
          </div>
        </div>
      </section>

      <!-- RED FLAGS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Red</span> <span class="rest">Flags — Walk Away If&hellip;</span></h2>
        <div class="nu-section-underline"></div>
        <ul class="nu-checklist">
          <li><strong>Structural or foundation findings</strong> that cannot be bonded, warranted, or fully priced before closing.</li>
          <li><strong>Environmental issues</strong> — basement water intrusion, mold, asbestos, radon, or prior flood without remediation documentation.</li>
          <li><strong>Title defects</strong> that cannot be cleared or insured around — unreleased liens, heirship gaps, easement conflicts.</li>
          <li><strong>Appraisal gap</strong> larger than what the walk-away ceiling can absorb without breaching cash-reserve rules for the business.</li>
          <li><strong>Seller refuses standard contingencies</strong> — inspection, financing, appraisal, or title should never be waived to "win" this house.</li>
          <li><strong>Undisclosed material facts surface</strong> mid-negotiation — prior insurance claims, permit issues, pending code violations.</li>
        </ul>

        <div class="walk-away">
          <h4>Walk-Away Discipline</h4>
          <p>A ceiling price that was approved in writing does not move during negotiation. Emotional escalation is the single largest destroyer of buyer returns in residential real estate. There is always another house; there is not always another dollar.</p>
        </div>
      </section>

      <!-- ADVISORY TEAM -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Advisory</span> <span class="rest">Team</span></h2>
        <div class="nu-section-underline"></div>
        <div class="leverage-grid">
          <div class="leverage-card">
            <h4><span class="bullet"></span> Real Estate Attorney</h4>
            <p>Reviews purchase &amp; sale agreement, addenda, and closing documents. Confirms title opinion or title insurance coverage language.</p>
          </div>
          <div class="leverage-card">
            <h4><span class="bullet"></span> Buyer's Agent</h4>
            <p>Licensed agent under exclusive representation. Runs comps, delivers offers, manages counter sequence, coordinates inspections.</p>
          </div>
          <div class="leverage-card">
            <h4><span class="bullet"></span> Mortgage Banker</h4>
            <p>Primary contact: Patrick Lavette, Renasant Bank. Written pre-approval, rate lock strategy, underwriting timeline.</p>
          </div>
          <div class="leverage-card">
            <h4><span class="bullet"></span> Certified Inspector</h4>
            <p>Licensed residential inspector plus, if warranted, a structural engineer and a specialty water-intrusion inspector for any basement concerns.</p>
          </div>
          <div class="leverage-card">
            <h4><span class="bullet"></span> Appraiser</h4>
            <p>Lender-ordered appraisal at minimum. Optional independent BPO pre-offer to test the listing price against an outside professional opinion.</p>
          </div>
          <div class="leverage-card">
            <h4><span class="bullet"></span> Insurance Agent</h4>
            <p>Binder quote confirmed before removing financing contingency. Flood, windstorm, and liability riders specified in writing.</p>
          </div>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Actions</span></h2>
        <div class="nu-section-underline"></div>
        <ul class="nu-checklist">
          <li><strong>Retain buyer's agent</strong> — sign exclusive representation; brief on this strategy document.</li>
          <li><strong>Request pre-approval letter</strong> from Patrick Lavette, Renasant Bank, sized to the approved ceiling.</li>
          <li><strong>Commission comp &amp; DOM packet</strong> from buyer's agent; deliver within 5 business days.</li>
          <li><strong>Schedule pre-offer property walkthrough</strong> with buyer's agent present; document condition with photos.</li>
          <li><strong>Set three-number model</strong> (opening / target / ceiling); Aaron signs before offer is drafted.</li>
          <li><strong>Draft offer package</strong> — offer, pre-approval, proof of funds, contingency language, proposed close date options.</li>
          <li><strong>Confirm attorney engagement</strong> for purchase &amp; sale review before execution.</li>
        </ul>
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
    <div class="nu-footer-note">
      Confidential — prepared for Aaron C. Norris. Not for redistribution. All figures subject to independent verification before reliance.
    </div>
  </footer>

</body>
</html>