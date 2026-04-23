<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
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
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 20px 0 60px;
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
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 40px 20px;
    }

    /* ACTION BAR */
    .nu-action-bar {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 28px;
      border-radius: 6px;
      margin-bottom: 32px;
      border-left: 5px solid var(--nu-cyan);
      flex-wrap: wrap;
    }
    .nu-action-bar .label {
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      color: var(--nu-cyan);
      text-transform: uppercase;
    }
    .nu-action-bar .source {
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--nu-white);
      padding: 4px 10px;
      background: rgba(6, 208, 255, 0.15);
      border-radius: 4px;
    }
    .nu-action-bar .status {
      margin-left: auto;
      font-weight: 700;
      font-size: 0.85rem;
      color: #FFD166;
      letter-spacing: 0.1em;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      margin-bottom: 32px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-blue);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 900;
    }
    .nu-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 780px;
    }

    /* GRID LAYOUT */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 28px;
      margin-bottom: 32px;
    }
    @media (max-width: 820px) {
      .nu-grid-2 { grid-template-columns: 1fr; }
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.07);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-card h3 span { color: var(--nu-dark-text); }

    /* PROPERTY STATS (diamond-inspired tiles) */
    .nu-stat-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-bottom: 28px;
    }
    @media (max-width: 700px) {
      .nu-stat-row { grid-template-columns: repeat(2, 1fr); }
    }
    .nu-stat {
      background: linear-gradient(135deg, #f7f9ff 0%, #eef3ff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      padding: 18px 16px;
      text-align: center;
      border-radius: 4px;
    }
    .nu-stat .num {
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-blue);
      line-height: 1.1;
      display: block;
    }
    .nu-stat .lbl {
      font-weight: 700;
      font-size: 0.72rem;
      color: var(--nu-dark-text);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-top: 6px;
      display: block;
    }

    /* DETAIL LIST */
    .nu-detail-list {
      list-style: none;
    }
    .nu-detail-list li {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-detail-list li:last-child { border-bottom: none; }
    .nu-detail-list .k {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-detail-list .v {
      color: var(--nu-body-text);
      text-align: right;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
    }
    .nu-checklist li {
      position: relative;
      padding: 12px 0 12px 36px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.97rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 14px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 900;
    }

    /* PHASES */
    .nu-phases {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 32px;
    }
    @media (max-width: 820px) {
      .nu-phases { grid-template-columns: repeat(2, 1fr); }
    }
    .nu-phase {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 20px 18px;
      position: relative;
      border-top: 4px solid var(--nu-cyan);
    }
    .nu-phase .pnum {
      position: absolute;
      top: -14px;
      left: 16px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.75rem;
      padding: 4px 10px;
      border-radius: 3px;
      letter-spacing: 0.1em;
    }
    .nu-phase h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin: 8px 0 10px;
    }
    .nu-phase p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* NEGOTIATION POSTURE */
    .nu-posture {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 32px;
      margin-bottom: 32px;
    }
    .nu-posture h3 {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
      letter-spacing: 0.03em;
    }
    .nu-posture-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }
    @media (max-width: 700px) {
      .nu-posture-grid { grid-template-columns: 1fr; }
    }
    .nu-posture-col h4 {
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(6, 208, 255, 0.3);
    }
    .nu-posture-col ul {
      list-style: none;
    }
    .nu-posture-col ul li {
      padding: 6px 0 6px 18px;
      position: relative;
      font-size: 0.92rem;
      color: rgba(255,255,255,0.88);
    }
    .nu-posture-col ul li::before {
      content: '\25C6';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-size: 0.7rem;
      top: 9px;
    }

    /* RISK TABLE */
    .nu-risk-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 4px;
    }
    .nu-risk-table th {
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-risk-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .nu-risk-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-risk-table .sev-high { color: #b00020; font-weight: 700; }
    .nu-risk-table .sev-med { color: #b8860b; font-weight: 700; }
    .nu-risk-table .sev-low { color: #0a7d2e; font-weight: 700; }

    /* NEXT STEP BANNER */
    .nu-next-step {
      background: linear-gradient(90deg, var(--nu-blue) 0%, #0066ee 60%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 26px 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 22px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .nu-next-step .badge {
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      background: rgba(0,0,0,0.25);
      padding: 6px 12px;
      border-radius: 3px;
    }
    .nu-next-step .text {
      font-weight: 700;
      font-size: 1.05rem;
      flex: 1;
      min-width: 240px;
    }
    .nu-next-step .owner {
      font-weight: 400;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.9);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
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
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 30px 20px; }
      .nu-section-title { font-size: 1.6rem; }
      .nu-posture { padding: 24px 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-phase { box-shadow: none; border: 1px solid #ccc; }
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
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- ACTION BAR -->
      <div class="nu-action-bar">
        <span class="label">reMarkable Action Item</span>
        <span class="source">Captured on Aaron's Tablet</span>
        <span class="status">● OPEN — AWAITING KICKOFF</span>
      </div>

      <!-- TITLE -->
      <div class="nu-title-block">
        <h1 class="nu-section-title">Negotiate <span>Purchase of 4505 Buttewoods Estate</span></h1>
        <p class="nu-subtitle">
          7,098 sq ft residence — structured acquisition workflow for a private, non-business transaction.
          This page captures the action item, the data required to move forward, and the negotiation plan.
        </p>
      </div>

      <!-- STAT ROW -->
      <div class="nu-stat-row">
        <div class="nu-stat">
          <span class="num">7,098</span>
          <span class="lbl">Square Feet</span>
        </div>
        <div class="nu-stat">
          <span class="num">4505</span>
          <span class="lbl">Buttewoods</span>
        </div>
        <div class="nu-stat">
          <span class="num">Private</span>
          <span class="lbl">Transaction</span>
        </div>
        <div class="nu-stat">
          <span class="num">Phase 1</span>
          <span class="lbl">Of 4 — Research</span>
        </div>
      </div>

      <!-- GRID: DETAILS + CHECKLIST -->
      <div class="nu-grid-2">

        <div class="nu-card">
          <h3>Property <span>Record</span></h3>
          <ul class="nu-detail-list">
            <li><span class="k">Address</span><span class="v">4505 Buttewoods</span></li>
            <li><span class="k">Structure Size</span><span class="v">7,098 sq ft</span></li>
            <li><span class="k">Property Class</span><span class="v">Estate / Residential</span></li>
            <li><span class="k">Acquisition Type</span><span class="v">Private Purchase (Aaron, personal)</span></li>
            <li><span class="k">Source of Action</span><span class="v">reMarkable handwritten note</span></li>
            <li><span class="k">Logged Date</span><span class="v">2026-04-23</span></li>
            <li><span class="k">Business Ledger Impact</span><span class="v">None — personal matter</span></li>
            <li><span class="k">Priority</span><span class="v">Medium — not time-locked</span></li>
          </ul>
        </div>

        <div class="nu-card">
          <h3>Pre-Offer <span>Checklist</span></h3>
          <ul class="nu-checklist">
            <li><strong>Confirm full address</strong> — city, state, ZIP, parcel ID</li>
            <li><strong>Pull county tax records</strong> — assessed value, tax history</li>
            <li><strong>Verify owner of record</strong> — individual, trust, or LLC</li>
            <li><strong>Run recent comps</strong> — 3-5 similar estates within 5 miles</li>
            <li><strong>Determine listing status</strong> — MLS, off-market, FSBO</li>
          </ul>
        </div>
      </div>

      <!-- PHASES -->
      <h2 class="nu-section-title" style="font-size:1.6rem;margin-bottom:24px;">Negotiation <span>Phases</span></h2>
      <div class="nu-phases">
        <div class="nu-phase">
          <span class="pnum">PHASE 1</span>
          <h4>Research &amp; Discovery</h4>
          <p>Pull tax records, title history, comps, and listing status. Identify the seller and any intermediary (agent, attorney, or family representative).</p>
        </div>
        <div class="nu-phase">
          <span class="pnum">PHASE 2</span>
          <h4>Valuation &amp; Position</h4>
          <p>Establish fair market value range. Set a target price, walk-away price, and opening bid. Secure financing pre-approval or proof of funds.</p>
        </div>
        <div class="nu-phase">
          <span class="pnum">PHASE 3</span>
          <h4>Outreach &amp; Offer</h4>
          <p>Make first contact through the appropriate channel. Deliver a written letter of intent or formal offer with contingencies and timeline.</p>
        </div>
        <div class="nu-phase">
          <span class="pnum">PHASE 4</span>
          <h4>Diligence &amp; Close</h4>
          <p>Inspection, survey, appraisal, title search, and closing. Retain a real estate attorney for contract review before signature.</p>
        </div>
      </div>

      <!-- POSTURE -->
      <div class="nu-posture">
        <h3>Negotiation Posture — Aaron's Principles Applied</h3>
        <div class="nu-posture-grid">
          <div class="nu-posture-col">
            <h4>What We Lead With</h4>
            <ul>
              <li>Direct, warm, genuine — never pushy or apologetic</li>
              <li>A clear ask at the top of every conversation</li>
              <li>Proof of funds or financing ready before first offer</li>
              <li>Respect for the seller's timeline and relationship to the property</li>
              <li>Written record of every verbal agreement, same day</li>
            </ul>
          </div>
          <div class="nu-posture-col">
            <h4>What We Never Do</h4>
            <ul>
              <li>Lead with price before establishing rapport</li>
              <li>Waive inspection, survey, or title contingencies</li>
              <li>Commit verbally to terms that haven't been run past an attorney</li>
              <li>Negotiate against ourselves — one offer at a time</li>
              <li>Rush a signature before clean title is confirmed</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- RISK -->
      <div class="nu-card" style="margin-bottom:32px;">
        <h3>Risk <span>Register</span></h3>
        <table class="nu-risk-table">
          <thead>
            <tr>
              <th style="width:28%;">Risk</th>
              <th style="width:14%;">Severity</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title defects, liens, or easement issues on a 7,098 sq ft estate</td>
              <td class="sev-high">High</td>
              <td>Full title search before offer; attorney-reviewed contract; title insurance at close</td>
            </tr>
            <tr>
              <td>Hidden structural, roof, or system defects in a large residence</td>
              <td class="sev-high">High</td>
              <td>Licensed inspection + specialty inspections (HVAC, roof, foundation); inspection contingency</td>
            </tr>
            <tr>
              <td>Appraisal comes in below negotiated price</td>
              <td class="sev-med">Medium</td>
              <td>Appraisal contingency in contract; comp research done up front to price within defensible range</td>
            </tr>
            <tr>
              <td>Seller circumstances change mid-negotiation</td>
              <td class="sev-med">Medium</td>
              <td>Short exclusivity windows; clear written timelines; weekly cadence of contact</td>
            </tr>
            <tr>
              <td>Personal liquidity or financing impact on Norris Utilities® operations</td>
              <td class="sev-low">Low</td>
              <td>Strict separation of personal and business funds; no business capital routed to personal purchase</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- NEXT STEP -->
      <div class="nu-next-step">
        <span class="badge">NEXT STEP</span>
        <span class="text">
          Confirm the full property record for 4505 Buttewoods (city, state, ZIP, parcel ID) and pull the county tax card before any outreach.
          <br><span class="owner">Owner: Aaron C. Norris — personal matter, not delegated to Caroline.</span>
        </span>
      </div>

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
  </footer>

</body>
</html>