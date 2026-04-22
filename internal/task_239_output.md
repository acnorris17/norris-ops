<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods | Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* WHITE CHEVRON TRANSITION */
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
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PAGE TITLE */
    .page-eyebrow {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 16px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 18px;
      border-radius: 2px;
    }
    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .page-title .accent {
      color: #0033cc;
    }
    .page-subtitle {
      font-size: 1.1rem;
      color: #555;
      font-weight: 400;
      margin-bottom: 40px;
      max-width: 800px;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: #0033cc;
      margin: 48px 0 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* PROPERTY HERO CARD */
    .property-hero {
      background: linear-gradient(135deg, #f7f8fc 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 12px;
      padding: 36px;
      margin-bottom: 24px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
      align-items: center;
      box-shadow: 0 4px 18px rgba(0,0,0,0.05);
    }
    .property-address {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-dark-text);
      line-height: 1.25;
      margin-bottom: 8px;
    }
    .property-meta {
      font-size: 0.95rem;
      color: #666;
      margin-bottom: 18px;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }
    .stat-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 16px 18px;
      border-radius: 8px;
      border-left: 4px solid var(--nu-cyan);
    }
    .stat-label {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #888;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .stat-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .stat-value small {
      font-size: 0.75rem;
      font-weight: 400;
      color: #777;
      letter-spacing: normal;
      text-transform: none;
    }

    /* STRATEGIC FRAME */
    .frame-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-bottom: 24px;
    }
    .frame-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .frame-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: 0.01em;
    }
    .frame-card p {
      font-size: 0.92rem;
      color: #555;
      line-height: 1.6;
    }

    /* PHASE BADGES */
    .phase-row {
      display: flex;
      align-items: stretch;
      margin-bottom: 14px;
      background: var(--nu-white);
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      overflow: hidden;
    }
    .phase-badge {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 22px 26px;
      min-width: 220px;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%);
    }
    .phase-num {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-cyan);
      margin-right: 14px;
      line-height: 1;
    }
    .phase-content {
      padding: 22px 26px 22px 14px;
      flex: 1;
      font-size: 0.95rem;
      color: #444;
    }
    .phase-content strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 4px;
      font-size: 1rem;
    }

    /* OFFER LADDER TABLE */
    .ladder-wrap {
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .ladder-table {
      width: 100%;
      border-collapse: collapse;
    }
    .ladder-table th {
      background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .ladder-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .ladder-table tr:last-child td { border-bottom: none; }
    .ladder-table tr.opening td { background: #fffbe9; }
    .ladder-table tr.walk td { background: #fff0f0; }
    .tier-tag {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .tier-tag.open { background: #fff3c2; color: #7a5b00; }
    .tier-tag.target { background: #d6f3ff; color: #00557a; }
    .tier-tag.walk { background: #ffd6d6; color: #8a0000; }
    .tier-tag.cap { background: #e2d6ff; color: #3a1d8a; }

    /* DUE DILIGENCE CHECKLIST */
    .checklist-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }
    .check-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 18px;
      border-radius: 6px;
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }
    .check-box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .check-text {
      font-size: 0.92rem;
      color: #444;
    }
    .check-text strong {
      display: block;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
      font-size: 0.98rem;
    }

    /* LEVERAGE LIST */
    .leverage-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .leverage-list li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 14px 18px;
      margin-bottom: 10px;
      border-radius: 6px;
      font-size: 0.94rem;
      color: #444;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .leverage-list li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.4rem;
      line-height: 1;
      flex-shrink: 0;
    }
    .leverage-list li strong {
      color: var(--nu-dark-text);
    }

    /* ACTION CTA */
    .action-bar {
      background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 32px 36px;
      margin: 36px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
    }
    .action-bar h3 {
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 4px;
    }
    .action-bar p {
      font-size: 0.95rem;
      opacity: 0.92;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 14px 30px;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      transform: translateY(-1px);
    }

    /* FOOTNOTES */
    .footnote {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 4px;
      margin-top: 28px;
      font-size: 0.87rem;
      color: #555;
      line-height: 1.6;
    }
    .footnote strong { color: var(--nu-dark-text); }

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
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 880px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 20px; }
      .page-title { font-size: 1.9rem; }
      .property-hero { grid-template-columns: 1fr; padding: 24px; }
      .frame-grid { grid-template-columns: 1fr; }
      .phase-badge { clip-path: none; min-width: 0; padding: 16px 20px; }
      .phase-row { flex-direction: column; }
      .phase-content { padding: 16px 20px; }
      .checklist-grid { grid-template-columns: 1fr; }
      .ladder-table th, .ladder-table td { padding: 10px 10px; font-size: 0.85rem; }
      .action-bar { padding: 24px; }
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
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="container">

      <span class="page-eyebrow">Acquisition Strategy Brief</span>
      <h1 class="page-title">Estate Acquisition <span class="accent">— 4505 Buttewoods</span></h1>
      <p class="page-subtitle">A 7,098 sq ft estate negotiation playbook prepared for Aaron C. Norris, Founder &amp; CEO. This brief frames the property profile, valuation anchors, offer ladder, and due-diligence path so the negotiation is run on Norris terms — not the seller's.</p>

      <!-- HERO -->
      <div class="property-hero">
        <div>
          <div class="property-address">4505 Buttewoods</div>
          <div class="property-meta">Subject Property &middot; Estate-Class Residence</div>
          <p style="font-size: 0.95rem; color: #555; line-height: 1.65;">
            A 7,098 sq ft single-family estate identified by Aaron as a strategic personal acquisition. Negotiation posture is patient and disciplined: we anchor low on data, move only on disclosed leverage, and walk if the seller cannot meet the target band.
          </p>
        </div>
        <div class="stats-grid">
          <div class="stat-tile">
            <div class="stat-label">Square Footage</div>
            <div class="stat-value">7,098 <small>sq ft</small></div>
          </div>
          <div class="stat-tile">
            <div class="stat-label">Property Class</div>
            <div class="stat-value">Estate</div>
          </div>
          <div class="stat-tile">
            <div class="stat-label">Action Source</div>
            <div class="stat-value" style="font-size: 1rem;">reMarkable</div>
          </div>
          <div class="stat-tile">
            <div class="stat-label">Posture</div>
            <div class="stat-value" style="font-size: 1rem;">Patient Buyer</div>
          </div>
        </div>
      </div>

      <!-- STRATEGIC FRAME -->
      <h2 class="nu-section-title">Strategic <span class="rest">Frame</span></h2>
      <div class="frame-grid">
        <div class="frame-card">
          <h3>Anchor Low on Data</h3>
          <p>Open with a number tied to comparable sales, condition, and carry cost — not the asking price. The first number written wins the conversation.</p>
        </div>
        <div class="frame-card">
          <h3>Move Only on Leverage</h3>
          <p>Every concession must be paid for. If we move on price, the seller covers a closing cost, a repair, or a date concession in exchange.</p>
        </div>
        <div class="frame-card">
          <h3>Walk-Away Discipline</h3>
          <p>The walk number is set in writing before the first call. If the seller cannot reach the target band, we close the file with no hard feelings.</p>
        </div>
      </div>

      <!-- PHASES -->
      <h2 class="nu-section-title">Negotiation <span class="rest">Phases</span></h2>

      <div class="phase-row">
        <div class="phase-badge"><span class="phase-num">1</span>DISCOVERY &amp; INTEL</div>
        <div class="phase-content">
          <strong>Build the file before the call.</strong>
          Pull last-sale price, tax assessment, days-on-market history, lien/HOA records, and three closest comparable estate sales within twelve months. Identify the seller's motivation: divorce, estate, relocation, or carry stress.
        </div>
      </div>

      <div class="phase-row">
        <div class="phase-badge"><span class="phase-num">2</span>RAPPORT &amp; INSPECTION</div>
        <div class="phase-content">
          <strong>Walk the property before mentioning a number.</strong>
          One slow walkthrough with the listing agent. Ask about roof age, HVAC age, foundation, drainage, and any insurance claims. Take notes — every defect becomes a price line later.
        </div>
      </div>

      <div class="phase-row">
        <div class="phase-badge"><span class="phase-num">3</span>OPENING OFFER</div>
        <div class="phase-content">
          <strong>Written, dated, signed — never verbal.</strong>
          Submit the opening offer at the bottom of the value band with a short response window (48–72 hours). Attach the comp sheet. The deadline disciplines the seller and frames us as a serious buyer with options.
        </div>
      </div>

      <div class="phase-row">
        <div class="phase-badge"><span class="phase-num">4</span>COUNTER &amp; CLOSE</div>
        <div class="phase-content">
          <strong>Counters move in shrinking increments.</strong>
          Each counter moves less than the last — the gap between offers narrows visibly. Once inside the target band, lock the deal with a clean contract: short inspection window, certified-funds earnest money, and no financing contingency where possible.
        </div>
      </div>

      <!-- OFFER LADDER -->
      <h2 class="nu-section-title">Offer <span class="rest">Ladder</span></h2>
      <p style="margin-bottom: 18px; color: #555; font-size: 0.95rem;">
        Numerical bands are intentionally left to be set after Aaron's appraisal review and comp pull. Tier discipline — not the dollar value — is what wins the deal.
      </p>
      <div class="ladder-wrap">
        <table class="ladder-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Purpose</th>
              <th>Trigger to Move</th>
              <th>Concession Required</th>
            </tr>
          </thead>
          <tbody>
            <tr class="opening">
              <td><span class="tier-tag open">Opening</span></td>
              <td>Anchor the conversation; tie price to data, not asking.</td>
              <td>Submission with 48–72 hr response window.</td>
              <td>None — this is the floor.</td>
            </tr>
            <tr>
              <td><span class="tier-tag target">Target</span></td>
              <td>The number we are happy to pay and close at.</td>
              <td>Seller counters within reasonable distance of opening.</td>
              <td>Seller covers one of: closing costs, repair credit, or extended close.</td>
            </tr>
            <tr>
              <td><span class="tier-tag cap">Hard Cap</span></td>
              <td>The absolute ceiling — every additional dollar above is paid in concessions.</td>
              <td>Seller proves a competing offer in writing or major comp shifts.</td>
              <td>Inspection findings, date flexibility, or contingency removal exchanged dollar-for-dollar.</td>
            </tr>
            <tr class="walk">
              <td><span class="tier-tag walk">Walk</span></td>
              <td>Above hard cap = no deal. We close the file and move on.</td>
              <td>Seller cannot reach the cap after two full counter rounds.</td>
              <td>None — withdraw cleanly, keep the relationship intact.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- DUE DILIGENCE -->
      <h2 class="nu-section-title">Due-Diligence <span class="rest">Checklist</span></h2>
      <div class="checklist-grid">
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Title &amp; Lien Search</strong>
            Pull a full title abstract. Confirm no judgments, mechanics' liens, or unpaid HOA assessments tied to the parcel.
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Tax History (5 years)</strong>
            Verify assessed value, paid status, and any pending reassessment. Flag any millage-rate increases scheduled for next cycle.
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Comparable Sales (12 mo)</strong>
            Three closest sold comps within one mile, similar sq footage and lot size. Adjust for condition, finishes, and acreage.
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Roof, HVAC, Foundation</strong>
            Independent inspector — not the seller's referral. Estimate remaining service life on roof, HVAC, water heater, and major systems.
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Insurance Claim History</strong>
            Pull a CLUE report. Prior water, fire, or wind claims affect future premiums and may indicate undisclosed damage.
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Zoning, Easements, Setbacks</strong>
            Confirm permitted use, any utility easements crossing the lot, and setback rules that affect future improvements.
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Survey &amp; Lot Lines</strong>
            New stamped survey before close. Estate-class lots routinely have fence lines that disagree with the recorded plat.
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Days on Market &amp; Price History</strong>
            Every prior list/relist and price reduction is a leverage point. Long DOM = motivated seller, period.
          </div>
        </div>
      </div>

      <!-- LEVERAGE -->
      <h2 class="nu-section-title">Leverage <span class="rest">Points</span></h2>
      <ul class="leverage-list">
        <li><span><strong>Certified-funds earnest money</strong> — signals serious buyer; raises the cost to the seller of letting the deal drift.</span></li>
        <li><span><strong>No financing contingency</strong> where cash or pre-cleared underwriting is in hand — removes the seller's biggest fear.</span></li>
        <li><span><strong>Short, firm inspection window</strong> — closes the deal faster, which most motivated sellers value above an extra few thousand dollars.</span></li>
        <li><span><strong>Flexible close date</strong> tailored to the seller's actual move-out timing — frequently worth more than price to estate sellers and relocators.</span></li>
        <li><span><strong>Inspection findings as concession currency</strong> — every defect documented becomes a credit, a repair, or a price reduction.</span></li>
        <li><span><strong>Documented walk-away alternative</strong> — knowing the next property in the pipeline keeps emotion out of the room.</span></li>
      </ul>

      <!-- ACTION BAR -->
      <div class="action-bar">
        <div>
          <h3>Next Step</h3>
          <p>Pull the comp sheet, title abstract, and tax history before the first walkthrough is scheduled.</p>
        </div>
        <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
      </div>

      <!-- FOOTNOTE -->
      <div class="footnote">
        <strong>Discipline note —</strong> No verbal numbers, no exploding offers from the other side accepted on the spot, no concessions without a written exchange. The walk number is set before negotiation opens and is not revised during the negotiation itself. This brief is for Norris-internal planning only and does not constitute a signed offer.
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>