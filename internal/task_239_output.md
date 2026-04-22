<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — 4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
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
      --nu-alert-amber: #B8860B;
      --nu-success-green: #1B7A3E;
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
      width: 70px;
      height: 70px;
      margin: 0 auto 12px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      opacity: 0.7;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* BREADCRUMB */
    .nu-breadcrumb {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    .nu-breadcrumb span {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* PAGE TITLE */
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .nu-page-title .accent {
      color: #0033cc;
    }
    .nu-page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 720px;
      margin-bottom: 32px;
    }

    /* STATUS BAR */
    .nu-status-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 40px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-status-cell {
      background: var(--nu-white);
      padding: 20px 18px;
    }
    .nu-status-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      opacity: 0.7;
      margin-bottom: 6px;
    }
    .nu-status-value {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .nu-status-value.priority-high {
      color: var(--nu-alert-amber);
    }
    .nu-status-value.open {
      color: var(--nu-blue);
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CHEVRON BADGE (milestone) */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 18px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      margin-right: 14px;
      font-size: 0.85rem;
      flex-shrink: 0;
    }

    /* PROPERTY OVERVIEW CARD */
    .nu-property-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 28px;
      margin-bottom: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-property-address {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-property-meta {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 18px;
    }
    .nu-property-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 16px;
      padding-top: 18px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .nu-stat {
      text-align: left;
    }
    .nu-stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      opacity: 0.7;
      margin-bottom: 4px;
    }
    .nu-stat-value {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-blue);
    }

    /* TWO COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 768px) {
      .nu-two-col { grid-template-columns: 1fr; }
    }

    .nu-info-card {
      background: var(--nu-light-gray);
      border-radius: 6px;
      padding: 24px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-info-card h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .nu-info-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-info-card ul li {
      padding: 6px 0;
      padding-left: 18px;
      position: relative;
      font-size: 0.95rem;
    }
    .nu-info-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 14px 16px 14px 48px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      margin-bottom: 8px;
      position: relative;
      font-size: 0.98rem;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* NEGOTIATION STRATEGY TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      margin-bottom: 16px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
    }
    .nu-table thead {
      background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .nu-table td strong {
      color: var(--nu-dark-text);
    }

    /* RISK CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #fff8e6 0%, #fff4d4 100%);
      border-left: 4px solid var(--nu-alert-amber);
      padding: 20px 24px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 16px;
    }
    .nu-callout-title {
      font-weight: 900;
      color: var(--nu-alert-amber);
      font-size: 0.9rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-callout p {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }

    .nu-callout.info {
      background: linear-gradient(135deg, #e6f4ff 0%, #d4ecff 100%);
      border-left-color: var(--nu-blue);
    }
    .nu-callout.info .nu-callout-title {
      color: var(--nu-blue);
    }

    /* BUTTONS */
    .nu-actions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 12px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 12px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

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
      margin-bottom: 16px;
      letter-spacing: 0.02em;
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
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.8rem;
      opacity: 0.6;
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 60px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-actions { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
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
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-breadcrumb">Internal <span>›</span> Action Items <span>›</span> Real Estate <span>›</span> 4505 Buttewoods</div>

      <h1 class="nu-page-title">Negotiate Purchase — <span class="accent">4505 Buttewoods Estate</span></h1>
      <p class="nu-page-subtitle">reMarkable action item captured by Aaron C. Norris. Private residence acquisition — 7,098 sq ft estate. This page tracks the negotiation plan, diligence checklist, and next actions.</p>

      <!-- STATUS BAR -->
      <div class="nu-status-bar">
        <div class="nu-status-cell">
          <div class="nu-status-label">Status</div>
          <div class="nu-status-value open">Open — Negotiation</div>
        </div>
        <div class="nu-status-cell">
          <div class="nu-status-label">Priority</div>
          <div class="nu-status-value priority-high">High</div>
        </div>
        <div class="nu-status-cell">
          <div class="nu-status-label">Owner</div>
          <div class="nu-status-value">Aaron C. Norris</div>
        </div>
        <div class="nu-status-cell">
          <div class="nu-status-label">Source</div>
          <div class="nu-status-value">reMarkable</div>
        </div>
        <div class="nu-status-cell">
          <div class="nu-status-label">Logged</div>
          <div class="nu-status-value">2026-04-22</div>
        </div>
      </div>

      <!-- PROPERTY OVERVIEW -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Overview</span></h2>
        <div class="nu-property-card">
          <div class="nu-property-address">4505 Buttewoods</div>
          <div class="nu-property-meta">Private residence — estate-class property under consideration for personal acquisition</div>
          <div class="nu-property-stats">
            <div class="nu-stat">
              <div class="nu-stat-label">Size</div>
              <div class="nu-stat-value">7,098 sq ft</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Type</div>
              <div class="nu-stat-value">Estate</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Role</div>
              <div class="nu-stat-value">Buyer</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Stage</div>
              <div class="nu-stat-value">Pre-offer</div>
            </div>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION MILESTONES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Milestones</span></h2>
        <div class="nu-badge"><span class="nu-badge-number">1</span>Confirm asking price, days on market, prior offers</div>
        <div class="nu-badge"><span class="nu-badge-number">2</span>Commission comparable-sales analysis within 1 mile</div>
        <div class="nu-badge"><span class="nu-badge-number">3</span>Assemble financing letter — lender of record Renasant Bank (Patrick Lavette)</div>
        <div class="nu-badge"><span class="nu-badge-number">4</span>Schedule walkthrough + private inspection window</div>
        <div class="nu-badge"><span class="nu-badge-number">5</span>Submit written offer with contingencies on inspection, financing, appraisal</div>
        <div class="nu-badge"><span class="nu-badge-number">6</span>Counter-offer strategy reviewed with legal counsel before signature</div>
        <div class="nu-badge"><span class="nu-badge-number">7</span>Close, fund, record deed</div>
      </section>

      <!-- TWO-COLUMN DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Diligence</span></h2>
        <div class="nu-two-col">
          <div class="nu-info-card">
            <h4>Property &amp; Legal</h4>
            <ul>
              <li>Confirm exact square footage — 7,098 sq ft — against tax records</li>
              <li>Pull full chain of title and any liens</li>
              <li>Verify zoning, easements, and HOA/covenant restrictions</li>
              <li>Request seller disclosures in writing</li>
              <li>Order independent survey and elevation certificate</li>
            </ul>
          </div>
          <div class="nu-info-card">
            <h4>Condition &amp; Systems</h4>
            <ul>
              <li>Structural inspection — foundation, framing, roof</li>
              <li>HVAC, electrical, plumbing age and condition reports</li>
              <li>Water intrusion / waterproofing history</li>
              <li>Pest and termite clearance letter</li>
              <li>Septic/sewer and well testing where applicable</li>
            </ul>
          </div>
          <div class="nu-info-card">
            <h4>Financial</h4>
            <ul>
              <li>Pre-approval letter on file with Renasant Bank</li>
              <li>Model monthly carrying cost — P&amp;I, taxes, insurance, utilities</li>
              <li>Annualized maintenance reserve (estimate 1.0% of purchase price)</li>
              <li>Independent appraisal contingency in offer</li>
              <li>Compare net-present-value of cash vs. financed scenarios</li>
            </ul>
          </div>
          <div class="nu-info-card">
            <h4>Insurance &amp; Tax</h4>
            <ul>
              <li>Homeowner quote from two carriers before closing</li>
              <li>Flood, wind, and hail rider cost</li>
              <li>Millage rate and most recent tax assessment</li>
              <li>Homestead exemption eligibility timing</li>
              <li>CPA review of holding structure — personal vs. LLC title</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Strategy</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Lever</th>
                <th>Approach</th>
                <th>Expected Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Price</strong></td>
                <td>Open with comp-backed offer below asking; leave room for two rounds</td>
                <td>Anchors down without breaking rapport</td>
              </tr>
              <tr>
                <td><strong>Earnest Money</strong></td>
                <td>Strong earnest deposit signals serious, qualified buyer</td>
                <td>Offsets a lower headline price</td>
              </tr>
              <tr>
                <td><strong>Close Timing</strong></td>
                <td>Flex close date to seller's preferred schedule</td>
                <td>Non-price concession that often wins the deal</td>
              </tr>
              <tr>
                <td><strong>Contingencies</strong></td>
                <td>Keep inspection, financing, and appraisal clauses tight but firm</td>
                <td>Protects downside without signaling weakness</td>
              </tr>
              <tr>
                <td><strong>Repair Credits</strong></td>
                <td>Use inspection report for targeted credit requests, not re-opening price</td>
                <td>Recoups value after diligence without restarting negotiation</td>
              </tr>
              <tr>
                <td><strong>Personal Tone</strong></td>
                <td>Direct, warm, confident — no pressure, no apology</td>
                <td>Consistent with Aaron's voice; sellers respond to respect</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- RISKS & WATCH-OUTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risks</span> <span class="rest">&amp; Watch-Outs</span></h2>
        <div class="nu-callout">
          <div class="nu-callout-title">Watch-out — Undisclosed Condition</div>
          <p>Large estates routinely hide expensive deferred maintenance in roofing, drainage, and HVAC. Never waive inspection. Never accept verbal assurances of condition.</p>
        </div>
        <div class="nu-callout">
          <div class="nu-callout-title">Watch-out — Appraisal Gap</div>
          <p>On estates, appraised value can lag asking price because of thin comparable inventory. Have a written plan for how to bridge any appraisal gap before signing.</p>
        </div>
        <div class="nu-callout info">
          <div class="nu-callout-title">Reminder — Waterproofing Diligence</div>
          <p>Cross-reference open reMarkable action item: "Call H2O Waterproofing before closing and get in writing." Obtain any waterproofing warranty or scope-of-work documentation in writing before funds move.</p>
        </div>
      </section>

      <!-- NEXT ACTIONS CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Actions</span></h2>
        <ul class="nu-checklist">
          <li><strong>Day 1 — </strong>Confirm current asking price and list status with listing agent</li>
          <li><strong>Day 1 — </strong>Email Patrick Lavette at Renasant Bank for updated pre-approval at target price band</li>
          <li><strong>Day 2 — </strong>Pull three comparable sales within 1 mile closed in last 12 months</li>
          <li><strong>Day 2 — </strong>Draft offer terms — price, earnest money, close date, contingencies</li>
          <li><strong>Day 3 — </strong>Walkthrough with camera documentation of every room, systems, exterior</li>
          <li><strong>Day 3 — </strong>Schedule independent inspector and structural engineer</li>
          <li><strong>Day 5 — </strong>Legal review of offer before delivery to listing agent</li>
          <li><strong>Day 5 — </strong>Submit written offer with 48-hour response window</li>
          <li><strong>Ongoing — </strong>Log every call, email, and counter to this action item record</li>
        </ul>
      </section>

      <!-- ACTION BUTTONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Owner</span> <span class="rest">Contact</span></h2>
        <p style="margin-bottom: 16px;">This is an Aaron-only action item. All negotiation correspondence, diligence reports, and offer documents route directly to the Founder &amp; CEO.</p>
        <div class="nu-actions">
          <a href="tel:2055001343" class="nu-btn-primary">Call 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Negotiation" class="nu-btn-secondary">Email Aaron</a>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Internal Action Item Record — reMarkable Source — Generated 2026-04-22</div>
  </footer>

</body>
</html>