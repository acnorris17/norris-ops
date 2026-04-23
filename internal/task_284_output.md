<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-amber: #FF9500;
      --nu-green: #0A8F3A;
      --nu-red: #C8102E;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 28%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 320%;
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='white' opacity='0.07'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='white' opacity='0.07'/></svg>") no-repeat center;
      background-size: contain;
      z-index: 1;
      pointer-events: none;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
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
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 0;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 60px; left: 50%;
      transform: translateX(-50%);
      width: 65%; padding-bottom: 65%;
      max-width: 700px; max-height: 700px;
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230033cc' opacity='0.07'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230033cc' opacity='0.07'/></svg>") no-repeat center;
      background-size: contain;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ STATUS BAR ══ */
    .nu-status-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 40px;
      padding: 20px 24px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      border-radius: 8px;
      color: var(--nu-white);
    }
    .nu-status-item {
      flex: 1;
      min-width: 180px;
    }
    .nu-status-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 4px;
    }
    .nu-status-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-white);
    }
    .nu-priority-tag {
      display: inline-block;
      background: var(--nu-amber);
      color: var(--nu-navy);
      padding: 4px 12px;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 24px;
    }

    /* ══ PROPERTY CARD ══ */
    .nu-property-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-blue);
      border-radius: 8px;
      padding: 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 32px;
    }
    .nu-property-title {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-property-address {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 24px;
    }
    .nu-property-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }
    .nu-stat {
      background: var(--nu-light-gray);
      padding: 16px;
      border-radius: 6px;
      border-top: 3px solid var(--nu-cyan);
    }
    .nu-stat-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-stat-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-stat-sub {
      font-size: 0.8rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* ══ CHEVRON BADGES ══ */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 20px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
      font-size: 0.85rem;
    }

    /* ══ ACTION PLAN ══ */
    .nu-plan-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-top: 24px;
    }
    .nu-plan-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-plan-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-plan-num {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 36px; height: 36px;
      line-height: 36px;
      text-align: center;
      border-radius: 50%;
      font-weight: 900;
      margin-bottom: 14px;
    }
    .nu-plan-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-plan-desc {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ TABLE ══ */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-top: 16px;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-num { font-weight: 900; color: var(--nu-blue); font-variant-numeric: tabular-nums; }

    /* ══ CALLOUT ══ */
    .nu-callout {
      background: linear-gradient(135deg, #fff8e1 0%, #fffbf0 100%);
      border-left: 4px solid var(--nu-amber);
      padding: 20px 24px;
      border-radius: 6px;
      margin: 24px 0;
    }
    .nu-callout-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-callout p { font-size: 0.95rem; color: var(--nu-body-text); }

    .nu-callout-blue {
      background: linear-gradient(135deg, #e6f5ff 0%, #f0fbff 100%);
      border-left-color: var(--nu-blue);
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      margin-top: 16px;
    }
    .nu-checklist li {
      padding: 12px 0 12px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 900;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact strong { color: var(--nu-white); font-weight: 900; }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.8rem;
      color: rgba(255,255,255,0.6);
      letter-spacing: 0.05em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px; }
      .nu-property-card { padding: 22px; }
      .nu-property-title { font-size: 1.4rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 12px 18px; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-plan-card, .nu-table, .nu-property-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <!-- STATUS BAR -->
      <div class="nu-status-bar">
        <div class="nu-status-item">
          <div class="nu-status-label">Action Item</div>
          <div class="nu-status-value">Real Estate Negotiation</div>
        </div>
        <div class="nu-status-item">
          <div class="nu-status-label">Source</div>
          <div class="nu-status-value">reMarkable Tablet</div>
        </div>
        <div class="nu-status-item">
          <div class="nu-status-label">Owner</div>
          <div class="nu-status-value">Aaron C. Norris</div>
        </div>
        <div class="nu-status-item">
          <div class="nu-status-label">Status</div>
          <div class="nu-status-value"><span class="nu-priority-tag">Open — Strategic</span></div>
        </div>
      </div>

      <!-- HEADLINE / PROPERTY CARD -->
      <section class="nu-section">
        <h1 class="nu-section-title">Negotiate <span>Buttewoods Estate Purchase</span></h1>
        <div class="nu-section-rule"></div>

        <div class="nu-property-card">
          <div class="nu-property-title">4505 Buttewoods — 7,098 Sq Ft Estate</div>
          <div class="nu-property-address">4505 Buttewoods Drive · Birmingham metro area · Alabama</div>

          <div class="nu-property-stats">
            <div class="nu-stat">
              <div class="nu-stat-label">Living Area</div>
              <div class="nu-stat-value">7,098</div>
              <div class="nu-stat-sub">Square feet</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Property Type</div>
              <div class="nu-stat-value">Estate</div>
              <div class="nu-stat-sub">Residential</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Intent</div>
              <div class="nu-stat-value">Acquire</div>
              <div class="nu-stat-sub">Buyer-side</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Stage</div>
              <div class="nu-stat-value">Negotiation</div>
              <div class="nu-stat-sub">Offer prep</div>
            </div>
          </div>
        </div>

        <div class="nu-callout nu-callout-blue">
          <div class="nu-callout-title">Context</div>
          <p>This action item was captured on Aaron's reMarkable tablet and carried forward into the Norris Utilities® command system. Buttewoods represents a significant personal real estate decision running parallel to business operations. This page consolidates the negotiation into trackable steps so it does not stall between handwritten notes and a live offer.</p>
        </div>
      </section>

      <!-- NEGOTIATION PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Playbook</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-plan-grid">
          <div class="nu-plan-card">
            <div class="nu-plan-num">1</div>
            <div class="nu-plan-title">Establish Fair Market Value</div>
            <div class="nu-plan-desc">Pull comparable sales for 6,500–7,500 sq ft estates within a three-mile radius, closed within the last 12 months. Confirm price-per-sq-ft range and identify the seller's likely floor.</div>
          </div>
          <div class="nu-plan-card">
            <div class="nu-plan-num">2</div>
            <div class="nu-plan-title">Verify Property Condition</div>
            <div class="nu-plan-desc">Order inspection, roof evaluation, HVAC age check, and encroachment survey. Document every deferred-maintenance item with a dollar figure — each becomes a price-reduction lever.</div>
          </div>
          <div class="nu-plan-card">
            <div class="nu-plan-num">3</div>
            <div class="nu-plan-title">Confirm Financing Posture</div>
            <div class="nu-plan-desc">Pre-approval letter in hand before opening offer. Speak with Patrick Lavette at Renasant Bank to size the right loan structure for a 7,098 sq ft property and confirm appraisal comfort.</div>
          </div>
          <div class="nu-plan-card">
            <div class="nu-plan-num">4</div>
            <div class="nu-plan-title">Draft Opening Offer</div>
            <div class="nu-plan-desc">Open 5–8% below target close price with a clean contingency stack: inspection, appraisal, financing. Include a short response window (48–72 hours) to control pace.</div>
          </div>
          <div class="nu-plan-card">
            <div class="nu-plan-num">5</div>
            <div class="nu-plan-title">Counter Strategy</div>
            <div class="nu-plan-desc">Pre-decide walk-away price, target price, and stretch price before any counter. Never negotiate against yourself — require a seller counter before any movement.</div>
          </div>
          <div class="nu-plan-card">
            <div class="nu-plan-num">6</div>
            <div class="nu-plan-title">Close Clean</div>
            <div class="nu-plan-desc">Title search, homeowner's insurance binder, final walk-through 24 hours before closing. All wire instructions confirmed by voice call to a known number — never by email alone.</div>
          </div>
        </div>
      </section>

      <!-- DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Due <span>Diligence Checklist</span></h2>
        <div class="nu-section-rule"></div>

        <ul class="nu-checklist">
          <li><strong>Title search</strong> — confirm clean chain of title, identify any liens, easements, or unresolved claims on record.</li>
          <li><strong>Tax assessment history</strong> — pull five years of county tax records to understand trajectory and accuracy of valuation.</li>
          <li><strong>Survey &amp; boundary</strong> — certified survey locating all improvements, fences, driveways relative to the recorded lot lines.</li>
          <li><strong>Inspection report</strong> — licensed inspector walkthrough covering structure, roof, HVAC, electrical, plumbing, foundation.</li>
          <li><strong>Termite &amp; moisture</strong> — CL-100 letter required in Alabama for any mortgaged purchase.</li>
          <li><strong>HOA / covenants</strong> — full CC&amp;R review, monthly dues, assessment history, pending special assessments.</li>
          <li><strong>Utility verification</strong> — public water/sewer vs. well/septic, electric service capacity, natural gas availability.</li>
          <li><strong>Insurance bindability</strong> — confirm a standard HO-3 policy will bind at reasonable cost before going under contract.</li>
          <li><strong>Appraisal contingency</strong> — protect against bank valuation coming in below contract price.</li>
          <li><strong>Financing contingency</strong> — loan commitment deadline locked in calendar, with clear cure period.</li>
        </ul>
      </section>

      <!-- OFFER MATRIX -->
      <section class="nu-section">
        <h2 class="nu-section-title">Offer <span>Matrix &amp; Pricing Levers</span></h2>
        <div class="nu-section-rule"></div>

        <table class="nu-table">
          <thead>
            <tr>
              <th>Lever</th>
              <th>Seller Wants</th>
              <th>Buyer Gives</th>
              <th>Buyer Gets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Close Speed</strong></td>
              <td>Fast, certain close</td>
              <td>21–30 day close</td>
              <td>Price concession</td>
            </tr>
            <tr>
              <td><strong>Earnest Money</strong></td>
              <td>Skin in the game</td>
              <td>Larger EMD (1–2%)</td>
              <td>Seller confidence, softer price</td>
            </tr>
            <tr>
              <td><strong>Repair Credits</strong></td>
              <td>No post-close headaches</td>
              <td>Take as credit, not repair</td>
              <td>Control of work &amp; cost</td>
            </tr>
            <tr>
              <td><strong>Rent-back</strong></td>
              <td>Time to move out</td>
              <td>30–60 day post-close rental</td>
              <td>Price concession</td>
            </tr>
            <tr>
              <td><strong>Contingency Waivers</strong></td>
              <td>Certainty</td>
              <td>Waive only what is verified</td>
              <td>Price concession</td>
            </tr>
            <tr>
              <td><strong>Cash vs. Financed</strong></td>
              <td>Reliable funding</td>
              <td>Strong pre-approval, reserves</td>
              <td>Competitive advantage</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- RISK BADGES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Risks <span>To Watch</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-badge"><span class="nu-badge-num">1</span>Overpaying based on emotion — every concession must tie to verified comps or inspection findings.</div>
        <div class="nu-badge"><span class="nu-badge-num">2</span>Appraisal gap on a 7,098 sq ft property in a thin-comp neighborhood.</div>
        <div class="nu-badge"><span class="nu-badge-num">3</span>Hidden deferred maintenance on a large estate — roof, HVAC, and foundation risk scale with square footage.</div>
        <div class="nu-badge"><span class="nu-badge-num">4</span>Wire fraud at closing — verify every instruction by voice to a known number.</div>
        <div class="nu-badge"><span class="nu-badge-num">5</span>Insurance carrier pullback — confirm bindability before hard-money dates.</div>
      </section>

      <!-- WALK-AWAY TRIGGERS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Walk-Away <span>Triggers</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-callout">
          <div class="nu-callout-title">Non-Negotiable Exit Conditions</div>
          <p>Price exceeds target ceiling by more than 3% without offsetting concessions. Structural, foundation, or roof findings exceeding $25,000 that seller refuses to credit. Title defect that cannot be cured before closing. Appraisal gap greater than 5% that seller will not bridge. Financing falls through with no replacement path within the contingency window. Any of these triggers a clean, documented walk.</p>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Immediate <span>Next Actions</span></h2>
        <div class="nu-section-rule"></div>

        <table class="nu-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Owner</th>
              <th>By When</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Request comparable sales report from buyer-side agent</td>
              <td>Aaron C. Norris</td>
              <td>This week</td>
            </tr>
            <tr>
              <td>Call Patrick Lavette at Renasant Bank to update pre-approval</td>
              <td>Aaron C. Norris</td>
              <td>This week</td>
            </tr>
            <tr>
              <td>Retain attorney for contract review</td>
              <td>Aaron C. Norris</td>
              <td>Before offer</td>
            </tr>
            <tr>
              <td>Order licensed home inspection + CL-100</td>
              <td>Aaron C. Norris</td>
              <td>Under contract</td>
            </tr>
            <tr>
              <td>Quote homeowner's insurance bindability</td>
              <td>Aaron C. Norris</td>
              <td>Under contract</td>
            </tr>
            <tr>
              <td>Lock walk-away / target / stretch pricing on paper</td>
              <td>Aaron C. Norris</td>
              <td>Before first counter</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO<br>
      Norris Utilities®, LLC · Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Internal action-item reference · Sourced from reMarkable capture · Norris Utilities® command system
    </div>
  </footer>

</body>
</html>