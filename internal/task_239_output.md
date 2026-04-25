<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-success: #00875A;
      --nu-warning: #DE7C00;
      --nu-danger: #C9372C;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 20px;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-white);
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
      width: 100%;
      height: 50px;
      display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,51,204,0.04) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* TITLE BLOCK */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 18px;
      border-bottom: 2px solid var(--nu-medium-gray);
      margin-bottom: 32px;
      gap: 12px;
    }
    .doc-meta-item {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .doc-meta-item strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .doc-meta-status {
      display: inline-block;
      padding: 4px 12px;
      background: var(--nu-warning);
      color: var(--nu-white);
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    h1.page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    h1.page-title .accent { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 40px;
      max-width: 780px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 48px 0 18px;
      padding-bottom: 8px;
      border-bottom: 3px solid var(--nu-blue);
      display: flex;
      align-items: baseline;
      gap: 10px;
    }
    .nu-section-title .first {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* PROPERTY SNAPSHOT GRID */
    .property-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 24px;
    }
    .snap-cell {
      background: var(--nu-white);
      padding: 22px 18px;
      text-align: center;
    }
    .snap-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .snap-value {
      font-size: 1.55rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .snap-sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }
    .nu-card h3 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card p { margin-bottom: 10px; }
    .nu-card p:last-child { margin-bottom: 0; }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    @media (max-width: 720px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* CHEVRON BADGES */
    .badge-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 24px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
    }
    .nu-badge-num {
      width: 32px; height: 32px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
      font-size: 0.95rem;
    }
    @media (max-width: 600px) {
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
    }

    /* OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-bottom: 18px;
    }
    @media (max-width: 720px) {
      .offer-ladder { grid-template-columns: 1fr; }
    }
    .offer-rung {
      padding: 22px 18px;
      border-radius: 8px;
      text-align: center;
      border: 2px solid var(--nu-medium-gray);
      background: var(--nu-white);
    }
    .offer-rung.opener {
      border-color: var(--nu-cyan);
      background: linear-gradient(180deg, rgba(6,208,255,0.06), var(--nu-white));
    }
    .offer-rung.target {
      border-color: var(--nu-blue);
      background: linear-gradient(180deg, rgba(0,0,255,0.06), var(--nu-white));
    }
    .offer-rung.walkaway {
      border-color: var(--nu-danger);
      background: linear-gradient(180deg, rgba(201,55,44,0.06), var(--nu-white));
    }
    .offer-stage {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--nu-body-text);
    }
    .offer-amount {
      font-size: 1.7rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .offer-note {
      font-size: 0.83rem;
      color: var(--nu-body-text);
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 12px 14px 12px 44px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 14px; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }
    .checklist li.done {
      color: var(--nu-body-text);
      text-decoration: line-through;
      opacity: 0.65;
    }
    .checklist li.done::before {
      background: var(--nu-blue);
    }
    .checklist li.done::after {
      content: '';
      position: absolute;
      left: 19px; top: 16px;
      width: 6px; height: 11px;
      border: solid var(--nu-white);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 8px;
      overflow: hidden;
    }
    .nu-table thead th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .nu-table tbody td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table .num { text-align: right; font-weight: 700; color: var(--nu-dark-text); }

    /* CALLOUT BOX */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.04) 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 0 8px 8px 0;
      margin: 20px 0;
    }
    .callout strong { color: var(--nu-blue); }
    .callout.warn {
      background: linear-gradient(135deg, rgba(222,124,0,0.06) 0%, rgba(222,124,0,0.02) 100%);
      border-left-color: var(--nu-warning);
    }
    .callout.warn strong { color: var(--nu-warning); }

    /* SCRIPT BOX */
    .script-box {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 22px 26px;
      margin-bottom: 14px;
      border-left: 3px solid var(--nu-cyan);
    }
    .script-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .script-text {
      font-style: italic;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      line-height: 1.6;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 18px auto;
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      h1.page-title { font-size: 1.7rem; }
      .nu-container { padding: 40px 22px; }
      .snap-value { font-size: 1.25rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Acquisition Strategy Brief</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC META -->
      <div class="doc-meta">
        <div class="doc-meta-item"><strong>Prepared For:</strong> Aaron C. Norris</div>
        <div class="doc-meta-item"><strong>Date:</strong> April 25, 2026</div>
        <div class="doc-meta-item"><strong>Source:</strong> reMarkable Action Item</div>
        <div class="doc-meta-item"><span class="doc-meta-status">Active — Negotiation Phase</span></div>
      </div>

      <h1 class="page-title">Negotiate Purchase of <span class="accent">4505 Buttewoods</span></h1>
      <p class="page-subtitle">A 7,098 sq ft estate acquisition strategy — covering property fundamentals, the disclosure discrepancy flagged earlier this month, the offer ladder, financing posture, and the next-72-hour action plan.</p>

      <!-- PROPERTY SNAPSHOT -->
      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
      <div class="property-snapshot">
        <div class="snap-cell">
          <div class="snap-label">Address</div>
          <div class="snap-value" style="font-size: 1.05rem;">4505 Buttewoods</div>
          <div class="snap-sub">Subject Property</div>
        </div>
        <div class="snap-cell">
          <div class="snap-label">Heated Sq Ft</div>
          <div class="snap-value">7,098</div>
          <div class="snap-sub">Per listing</div>
        </div>
        <div class="snap-cell">
          <div class="snap-label">Property Class</div>
          <div class="snap-value" style="font-size: 1.15rem;">Estate</div>
          <div class="snap-sub">Premium tier</div>
        </div>
        <div class="snap-cell">
          <div class="snap-label">Status</div>
          <div class="snap-value" style="font-size: 1.15rem; color: var(--nu-warning);">Dual-Use</div>
          <div class="snap-sub">Rental + For-Sale</div>
        </div>
        <div class="snap-cell">
          <div class="snap-label">Disclosure Flag</div>
          <div class="snap-value" style="font-size: 1.15rem; color: var(--nu-danger);">Open</div>
          <div class="snap-sub">Under review</div>
        </div>
      </div>

      <div class="callout warn">
        <strong>Heads-Up:</strong> A discrepancy was identified between the rental listing and the for-sale listing for this same property. That diligence item (Task 288) must close before any purchase agreement is signed. Treat the gap as leverage — not as an obstacle.
      </div>

      <!-- WHY THIS PROPERTY -->
      <h2 class="nu-section-title"><span class="first">Why</span> <span class="rest">This Property Matters</span></h2>
      <div class="two-col">
        <div class="nu-card">
          <h3>Footprint &amp; Scale</h3>
          <p>At 7,098 heated square feet, the property sits in a tier where comparable sales are thin and pricing has wide bid-ask spreads. That is an opportunity if the negotiation is patient, and a trap if it is rushed.</p>
        </div>
        <div class="nu-card">
          <h3>Strategic Use</h3>
          <p>An estate of this size supports multiple long-horizon uses — primary residence, multigenerational living, on-site office, or future-rental hold. Decide the primary use before opening on price; it dictates which terms matter.</p>
        </div>
        <div class="nu-card">
          <h3>Dual-Listing Signal</h3>
          <p>The owner has the property listed for sale <em>and</em> for rent. That signals (a) flexibility, (b) carrying-cost pressure, or (c) both. Each interpretation creates a different optimal opening bid.</p>
        </div>
        <div class="nu-card">
          <h3>Legacy Lens</h3>
          <p>This is a personal acquisition, not a Norris Utilities® transaction. The decision framework should weigh family use, hold period, and total carrying cost — not yield alone.</p>
        </div>
      </div>

      <!-- DISCLOSURE WORK -->
      <h2 class="nu-section-title"><span class="first">Disclosure</span> <span class="rest">&amp; Diligence Items</span></h2>
      <table class="nu-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Why It Matters</th>
            <th>Owner</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rental vs. For-Sale listing discrepancy</td>
            <td>Indicates which terms (price vs. condition vs. timing) are firm and which are flexible</td>
            <td>Aaron + agent</td>
            <td>Open — review pending</td>
          </tr>
          <tr>
            <td>Verified heated sq ft (7,098)</td>
            <td>Anchor for any per-foot offer math</td>
            <td>Appraiser / tax record</td>
            <td>Listing-stated; verify</td>
          </tr>
          <tr>
            <td>Comparable sales (last 12 months, ≥6,000 sq ft)</td>
            <td>Defines the realistic ceiling and the credible opening bid</td>
            <td>Buyer's agent</td>
            <td>Request</td>
          </tr>
          <tr>
            <td>Property tax history &amp; assessed value</td>
            <td>Carrying-cost projection; signals seller's basis</td>
            <td>County records</td>
            <td>Pull</td>
          </tr>
          <tr>
            <td>Days on market — both listings</td>
            <td>Direct read on seller motivation</td>
            <td>MLS / rental sites</td>
            <td>Pull</td>
          </tr>
          <tr>
            <td>Survey, plat, and any easements</td>
            <td>Estate-tier properties commonly have setback or HOA covenants worth knowing</td>
            <td>Title company</td>
            <td>Order with title</td>
          </tr>
          <tr>
            <td>Roof / HVAC / mechanical age</td>
            <td>Driver of inspection-credit ask</td>
            <td>Inspector</td>
            <td>Schedule post-acceptance</td>
          </tr>
        </tbody>
      </table>

      <!-- NEGOTIATION PRINCIPLES -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Principles</span></h2>
      <div class="badge-row">
        <div class="nu-badge"><span class="nu-badge-num">1</span>Open with the disclosure question — not the price. Make the seller respond first.</div>
        <div class="nu-badge"><span class="nu-badge-num">2</span>Anchor on a verified comp, not the listing price. List price is a wish; comps are the rule.</div>
        <div class="nu-badge"><span class="nu-badge-num">3</span>Earn the deal — never beg for it. If the math does not work, walk and stay friendly.</div>
        <div class="nu-badge"><span class="nu-badge-num">4</span>Keep terms separable from price — inspection credit, closing date, and chattel are bargaining levers.</div>
        <div class="nu-badge"><span class="nu-badge-num">5</span>Commit nothing in writing until the disclosure gap is reconciled in writing.</div>
        <div class="nu-badge"><span class="nu-badge-num">6</span>Set the walkaway number on paper, not in the moment. Honor it.</div>
      </div>

      <!-- OFFER LADDER -->
      <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder Framework</span></h2>
      <p style="margin-bottom: 18px; color: var(--nu-body-text);">Set all three numbers <em>before</em> opening conversations. Fill in the dollar figures once the comp set is pulled — the structure below is the playbook. Do not deviate from the structure under emotional pressure.</p>
      <div class="offer-ladder">
        <div class="offer-rung opener">
          <div class="offer-stage">Opening Bid</div>
          <div class="offer-amount">Comp Floor − 5%</div>
          <div class="offer-note">Anchored to lowest defensible comp from the past 12 months. Must be justified, not lowballed.</div>
        </div>
        <div class="offer-rung target">
          <div class="offer-stage">Target Close</div>
          <div class="offer-amount">Comp Median</div>
          <div class="offer-note">Where the deal should land after one to two rounds of counter and concession on terms.</div>
        </div>
        <div class="offer-rung walkaway">
          <div class="offer-stage">Hard Walkaway</div>
          <div class="offer-amount">Comp Median + 4%</div>
          <div class="offer-note">Above this, the math does not support the hold. Walk politely; leave the door open.</div>
        </div>
      </div>
      <div class="callout">
        <strong>Aaron's rule:</strong> Three numbers, written down, before the first call. If a number changes mid-negotiation, it changes on paper first, with a stated reason — not on the phone.
      </div>

      <!-- TERM LEVERS -->
      <h2 class="nu-section-title"><span class="first">Term</span> <span class="rest">Levers (Beyond Price)</span></h2>
      <div class="two-col">
        <div class="nu-card">
          <h3>Closing Date</h3>
          <p>If the seller is dual-listed because of carry-cost pressure, a fast close (21–30 days) is worth real dollars to them. Trade speed for price.</p>
        </div>
        <div class="nu-card">
          <h3>Inspection Credit</h3>
          <p>On a 7,098 sq ft estate, mechanicals alone justify a meaningful credit. Hold this lever for the second counter, not the first.</p>
        </div>
        <div class="nu-card">
          <h3>Chattel &amp; Fixtures</h3>
          <p>Furniture, appliances, outdoor equipment, lawn gear. On an estate, these total real money. Negotiate inclusion as a price-neutral concession.</p>
        </div>
        <div class="nu-card">
          <h3>Earnest Money &amp; Financing</h3>
          <p>A larger earnest deposit and a clean financing letter signal you are real. Use them to win on price without raising it.</p>
        </div>
        <div class="nu-card">
          <h3>Leaseback</h3>
          <p>If the seller needs occupancy past close, a paid 30–60 day leaseback is cheap to give and expensive to ask for. Offer it before they ask.</p>
        </div>
        <div class="nu-card">
          <h3>Contingency Cleanliness</h3>
          <p>Fewer contingencies = stronger offer at the same dollar. Tighten timelines on inspection and financing rather than waiving them entirely.</p>
        </div>
      </div>

      <!-- SCRIPT -->
      <h2 class="nu-section-title"><span class="first">Opening</span> <span class="rest">Conversation Scripts</span></h2>
      <div class="script-box">
        <div class="script-label">When asked about price first</div>
        <div class="script-text">"Before we get to a number, I want to understand the property the same way you do. The listing shows the home as available for rent and for sale at the same time — can you walk me through which path the family prefers and why? That will tell me whether we are even the right buyer for it."</div>
      </div>
      <div class="script-box">
        <div class="script-label">When the disclosure gap comes up</div>
        <div class="script-text">"There is a difference between what is described on the rental side and what is described on the for-sale side. I am not raising that as a problem — I am raising it because I want to make sure we are buying the same house we are talking about. Can your side put the reconciled facts in writing? That makes the rest easy."</div>
      </div>
      <div class="script-box">
        <div class="script-label">Opening the price</div>
        <div class="script-text">"Based on the comparable sales we pulled and the verified square footage, our number is [opening bid]. That is not a wish — it is what the data supports. We can move on terms; we want to be straight with you on the price."</div>
      </div>
      <div class="script-box">
        <div class="script-label">When the seller pushes back hard</div>
        <div class="script-text">"I understand. I am not going to chase the deal past the math. If we can find common ground, we will. If we cannot, I want you to land the right buyer at the right number. Either way, I appreciate the time."</div>
      </div>

      <!-- ACTION CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">72 Hours — Action Checklist</span></h2>
      <div class="nu-card" style="padding: 8px 22px;">
        <ul class="checklist">
          <li>Confirm reMarkable action item logged and assigned (Aaron — personal)</li>
          <li>Pull MLS comp set: estates ≥6,000 sq ft sold within 12 months</li>
          <li>Pull rental listing snapshot &amp; for-sale listing snapshot side by side</li>
          <li>Document every disclosure discrepancy (Task 288) in a single PDF</li>
          <li>Verify 7,098 sq ft via county/tax records — do not trust listing</li>
          <li>Pull tax history — last five years assessed value &amp; tax paid</li>
          <li>Set opening bid, target close, and walkaway in writing — initial &amp; date</li>
          <li>Pre-qualify financing letter; confirm earnest deposit availability</li>
          <li>Brief buyer's agent on three-number ladder and term levers</li>
          <li>Schedule first call with seller's side — open with the disclosure question</li>
          <li>Block calendar for inspection window 7–14 days post-acceptance</li>
          <li>Identify title company; confirm survey can be ordered same day as contract</li>
        </ul>
      </div>

      <!-- DECISION CRITERIA -->
      <h2 class="nu-section-title"><span class="first">Walk-Away</span> <span class="rest">Triggers</span></h2>
      <div class="callout warn">
        <strong>Stop the deal — and stay friendly — if any of these are true:</strong>
        <ul style="margin-top: 12px; padding-left: 20px;">
          <li style="margin-bottom: 6px;">Seller refuses to reconcile the rental-vs-for-sale disclosure gap in writing.</li>
          <li style="margin-bottom: 6px;">Verified square footage comes in materially below the listed 7,098.</li>
          <li style="margin-bottom: 6px;">Comp-supported price exceeds the hard walkaway number set up front.</li>
          <li style="margin-bottom: 6px;">Title issues — easements, liens, boundary disputes — that cannot close before contract.</li>
          <li>Inspection reveals deferred maintenance whose cost erases the term concessions you negotiated.</li>
        </ul>
      </div>

      <!-- BOTTOM LINE -->
      <h2 class="nu-section-title"><span class="first">Bottom</span> <span class="rest">Line</span></h2>
      <div class="nu-card" style="border-left: 4px solid var(--nu-blue);">
        <p>This is a patient, data-led negotiation. The disclosure discrepancy is the first lever — not an obstacle. Set the three numbers in writing, anchor on verified comps, and trade term concessions for price. Walk away cleanly if the math fails. Aaron's voice on this stays direct, warm, and unhurried — the same voice that has earned business from Coy Crosby, Bill Kugler, and Andy Barron. The right deal at the right number, or no deal — and either is a win.</p>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong> | Founder &amp; CEO<br>
      Norris Utilities®, LLC | Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>