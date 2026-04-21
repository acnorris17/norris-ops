<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Strategy | Norris Utilities®</title>
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
      --nu-success: #0a8043;
      --nu-warning: #c97b0a;
      --nu-danger: #c4302b;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3.4rem;
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
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* ══ DOC HEADER BAND ══ */
    .nu-doc-band {
      background: var(--nu-light-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 24px 40px;
    }
    .nu-doc-band-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
    .nu-doc-title {
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-navy);
      line-height: 1.2;
    }
    .nu-doc-title span {
      color: var(--nu-blue);
    }
    .nu-doc-meta {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      text-align: right;
    }
    .nu-doc-meta strong { color: var(--nu-navy); }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 50px 40px;
    }

    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-blue);
      line-height: 1.2;
    }
    .nu-section-title .first-word {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ ACTION BANNER ══ */
    .nu-action-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin-bottom: 40px;
      box-shadow: 0 6px 24px rgba(0,0,51,0.2);
      position: relative;
      overflow: hidden;
    }
    .nu-action-banner::before {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 200px; height: 100%;
      background: radial-gradient(circle at right, rgba(6,208,255,0.25) 0%, transparent 70%);
    }
    .nu-action-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-action-headline {
      font-weight: 900;
      font-size: 1.7rem;
      margin-bottom: 10px;
      line-height: 1.25;
    }
    .nu-action-sub {
      font-size: 1rem;
      font-weight: 400;
      color: rgba(255,255,255,0.9);
    }

    /* ══ PROPERTY SNAPSHOT GRID ══ */
    .nu-snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
    }
    .nu-snap-cell {
      background: var(--nu-white);
      padding: 22px 20px;
      text-align: center;
    }
    .nu-snap-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-snap-value {
      font-weight: 900;
      font-size: 1.45rem;
      color: var(--nu-navy);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .nu-snap-sub {
      font-size: 0.8rem;
      color: var(--nu-body-text);
    }

    /* ══ CARDS ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 20px;
    }
    .nu-card-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-navy);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .nu-card-title::before {
      content: '';
      display: inline-block;
      width: 10px; height: 10px;
      background: var(--nu-cyan);
      border-radius: 50%;
    }

    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    /* ══ NEGOTIATION LADDER ══ */
    .nu-ladder {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .nu-ladder-rung {
      display: flex;
      align-items: stretch;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-ladder-step {
      flex: 0 0 70px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nu-ladder-body {
      padding: 18px 22px;
      flex: 1;
    }
    .nu-ladder-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-navy);
      margin-bottom: 4px;
    }
    .nu-ladder-price {
      font-weight: 700;
      color: var(--nu-blue);
      font-size: 1rem;
      margin-bottom: 6px;
    }
    .nu-ladder-desc {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* ══ LEVERAGE LIST ══ */
    .nu-leverage-list {
      list-style: none;
      padding: 0;
    }
    .nu-leverage-list li {
      position: relative;
      padding: 12px 0 12px 36px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-leverage-list li:last-child { border-bottom: none; }
    .nu-leverage-list li::before {
      content: '▸';
      position: absolute;
      left: 10px;
      top: 12px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.1rem;
    }
    .nu-leverage-list li strong {
      color: var(--nu-navy);
      display: block;
      margin-bottom: 2px;
    }

    /* ══ TIMELINE ══ */
    .nu-timeline {
      border-left: 3px solid var(--nu-cyan);
      padding-left: 24px;
      margin-left: 10px;
    }
    .nu-timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -34px;
      top: 4px;
      width: 16px; height: 16px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-cyan);
      border-radius: 50%;
    }
    .nu-timeline-date {
      font-weight: 900;
      font-size: 0.88rem;
      color: var(--nu-blue);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 3px;
    }
    .nu-timeline-title {
      font-weight: 700;
      color: var(--nu-navy);
      margin-bottom: 3px;
    }
    .nu-timeline-desc {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* ══ TABLE ══ */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      padding: 14px 18px;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-table .nu-num {
      text-align: right;
      font-weight: 700;
      color: var(--nu-navy);
      white-space: nowrap;
    }

    /* ══ ALERT ══ */
    .nu-alert {
      background: #fff8e8;
      border-left: 4px solid var(--nu-warning);
      padding: 16px 20px;
      border-radius: 6px;
      margin-bottom: 20px;
    }
    .nu-alert-title {
      font-weight: 900;
      color: var(--nu-warning);
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-alert-body {
      font-size: 0.92rem;
      color: var(--nu-dark-text);
    }

    /* ══ SCRIPT BOX ══ */
    .nu-script {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 6px;
      font-style: italic;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      font-size: 0.96rem;
      line-height: 1.65;
    }
    .nu-script-label {
      display: block;
      font-style: normal;
      font-weight: 700;
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    /* ══ CHECKLIST ══ */
    .nu-check-list {
      list-style: none;
      padding: 0;
    }
    .nu-check-list li {
      position: relative;
      padding: 10px 0 10px 34px;
      font-size: 0.95rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-check-list li:last-child { border-bottom: none; }
    .nu-check-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 12px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-rule {
      width: 80px;
      height: 3px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 36px 22px; }
      .nu-doc-title { font-size: 1.4rem; }
      .nu-doc-meta { text-align: left; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-action-headline { font-size: 1.3rem; }
      .nu-ladder-step { flex: 0 0 56px; font-size: 1.3rem; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-action-banner, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-ladder-rung { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- DOC BAND -->
  <div class="nu-doc-band">
    <div class="nu-doc-band-inner">
      <div class="nu-doc-title">
        <span>Acquisition</span> Strategy — 4505 Buttewoods
      </div>
      <div class="nu-doc-meta">
        <strong>Document:</strong> Negotiation Playbook<br>
        <strong>Prepared:</strong> April 20, 2026 &middot; <strong>Owner:</strong> Aaron C. Norris
      </div>
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ACTION BANNER -->
      <div class="nu-action-banner">
        <div class="nu-action-label">reMarkable Action Item — Personal Real Estate</div>
        <div class="nu-action-headline">Negotiate Purchase of 7,098 sq ft Estate at 4505 Buttewoods</div>
        <div class="nu-action-sub">Target: structured offer with disclosure-driven price reductions and closing protections. Anchor low, justify with documented defects, walk if seller will not address water intrusion and permit gaps.</div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first-word">Property</span> <span class="rest">Snapshot</span>
        </h2>
        <div class="nu-snapshot-grid">
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Address</div>
            <div class="nu-snap-value">4505 Buttewoods</div>
            <div class="nu-snap-sub">Single-family estate</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Heated Area</div>
            <div class="nu-snap-value">7,098 sq ft</div>
            <div class="nu-snap-sub">Per listing</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Buyer</div>
            <div class="nu-snap-value">A. Norris</div>
            <div class="nu-snap-sub">Personal, not NU®</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Status</div>
            <div class="nu-snap-value">Active</div>
            <div class="nu-snap-sub">Pre-contract</div>
          </div>
        </div>
      </section>

      <!-- KNOWN ISSUES ALERT -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first-word">Known</span> <span class="rest">Defects &amp; Disclosure Concerns</span>
        </h2>

        <div class="nu-alert">
          <div class="nu-alert-title">Open Items Before Contract</div>
          <div class="nu-alert-body">
            The prior reMarkable audit surfaced water-intrusion history, a disclosure discrepancy between the rental listing and the for-sale listing, and a pending H2O Waterproofing scope. Each of these is a concrete price and terms lever. Do not sign anything until they are documented in writing.
          </div>
        </div>

        <div class="nu-two-col">
          <div class="nu-card">
            <div class="nu-card-title">Water Intrusion Disclosure Gap</div>
            <p>History present in prior rental disclosure, omitted from the current for-sale listing. Require an updated Seller Property Disclosure, remediation records, and a transferable warranty from H2O Waterproofing before any earnest money is deposited.</p>
          </div>
          <div class="nu-card">
            <div class="nu-card-title">H2O Waterproofing Transfer</div>
            <p>Get transfer process, fees, and warranty terms in writing from H2O Waterproofing before closing. If the warranty is not assignable, that cost shifts to the seller as a credit at close.</p>
          </div>
          <div class="nu-card">
            <div class="nu-card-title">Listing Discrepancy</div>
            <p>Rental listing and for-sale listing describe the home differently. That inconsistency is a negotiation anchor — price the property to the less-favorable of the two descriptions until the seller reconciles.</p>
          </div>
          <div class="nu-card">
            <div class="nu-card-title">Permit &amp; Square Footage Audit</div>
            <p>7,098 sq ft claim must be verified against Jefferson County records, final permits, and any additions. Unpermitted work is a seller credit or price reduction, not a buyer problem.</p>
          </div>
        </div>
      </section>

      <!-- PRICE ANCHOR -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first-word">Price</span> <span class="rest">Ladder — Anchor, Target, Walk</span>
        </h2>
        <div class="nu-ladder">
          <div class="nu-ladder-rung">
            <div class="nu-ladder-step">1</div>
            <div class="nu-ladder-body">
              <div class="nu-ladder-title">Opening Offer — Anchor Low, Fully Justified</div>
              <div class="nu-ladder-price">List × 0.85 (minus documented defects)</div>
              <div class="nu-ladder-desc">Written offer with an itemized defect schedule: water intrusion history, disclosure discrepancy, warranty transfer uncertainty, any unpermitted area. Earnest money placed only after seller response.</div>
            </div>
          </div>
          <div class="nu-ladder-rung">
            <div class="nu-ladder-step">2</div>
            <div class="nu-ladder-body">
              <div class="nu-ladder-title">Target Landing — The Deal Aaron Will Sign</div>
              <div class="nu-ladder-price">List × 0.90 to 0.92 + seller credits</div>
              <div class="nu-ladder-desc">Seller absorbs H2O warranty transfer fee, issues updated written disclosure, and delivers a credit (or price reduction) equal to two independent remediation bids on any active intrusion path.</div>
            </div>
          </div>
          <div class="nu-ladder-rung">
            <div class="nu-ladder-step">3</div>
            <div class="nu-ladder-body">
              <div class="nu-ladder-title">Ceiling — Do Not Exceed</div>
              <div class="nu-ladder-price">List × 0.95, only with full remediation</div>
              <div class="nu-ladder-desc">Only pay within 5% of list if seller completes waterproofing with transferable warranty, delivers corrected disclosures in writing, and clears all permits before close. No verbal promises.</div>
            </div>
          </div>
          <div class="nu-ladder-rung">
            <div class="nu-ladder-step">4</div>
            <div class="nu-ladder-body">
              <div class="nu-ladder-title">Walk-Away Trigger</div>
              <div class="nu-ladder-price">Any refusal to correct disclosure</div>
              <div class="nu-ladder-desc">If seller refuses to update the Seller Property Disclosure or refuses to put H2O warranty transfer in writing — walk. The liability exposure is worse than the missed deal.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- LEVERAGE & COUNTER -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first-word">Leverage</span> <span class="rest">Aaron Brings to the Table</span>
        </h2>
        <div class="nu-two-col">
          <div class="nu-card">
            <div class="nu-card-title">Strength Signals</div>
            <ul class="nu-leverage-list">
              <li><strong>Documented Defect File</strong>Written record of disclosure gap, rental vs. sale listing conflict, and water intrusion history.</li>
              <li><strong>Pre-Approved Buyer</strong>Financing conversation with Patrick Lavette at Renasant Bank; letter available on request — signals seriousness, not desperation.</li>
              <li><strong>Independent Verification</strong>Ready to commission H2O Waterproofing scope review and a permit/square-footage audit at Aaron's cost.</li>
              <li><strong>Willing to Close Fast — On Terms</strong>Clean, cash-positioned buyer. Speed is a concession, not a default.</li>
            </ul>
          </div>
          <div class="nu-card">
            <div class="nu-card-title">Seller Pressure Points</div>
            <ul class="nu-leverage-list">
              <li><strong>Disclosure Exposure</strong>Omitting known water history from the for-sale listing is a legal and market-reputation risk for the seller.</li>
              <li><strong>Days on Market</strong>Every week on market at current price weakens the seller's position — patience is a weapon.</li>
              <li><strong>Re-Listing Cost</strong>If Aaron walks late in diligence, seller must re-disclose the failed inspection findings to every future buyer.</li>
              <li><strong>Specialty Buyer Pool</strong>A 7,098 sq ft estate is not an impulse purchase. The replacement buyer may be months out.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first-word">Scripts</span> <span class="rest">— Aaron's Voice, Keep It Direct</span>
        </h2>

        <div class="nu-script">
          <span class="nu-script-label">Opening the Conversation — to Listing Agent</span>
          "I'm a serious buyer on 4505 Buttewoods. Before I put earnest money down, I need the seller to update the property disclosure with the water-intrusion history that appears in the prior rental listing. I also need the H2O Waterproofing transfer terms in writing. Once those two items are on paper, I'll deliver a written offer the same day."
        </div>

        <div class="nu-script">
          <span class="nu-script-label">Presenting the Opening Number</span>
          "My number reflects three things: the disclosure gap, the unresolved waterproofing warranty transfer, and the square-footage we haven't verified against county records. When those clear up, the number moves. Until they do, this is where I am."
        </div>

        <div class="nu-script">
          <span class="nu-script-label">When They Push Back on Price</span>
          "I understand. I'm not trying to win the negotiation — I'm trying to close on a house that doesn't come back to me in two years. If the seller wants to meet in the middle on price, I need the middle on disclosure and warranty too. Otherwise the risk premium stays in my number."
        </div>

        <div class="nu-script">
          <span class="nu-script-label">Walk-Away Line</span>
          "I respect the seller's position. I can't buy a home whose disclosure conflicts with itself. If they can't correct the record in writing, I'm out. Keep my contact on file — if the home doesn't close, I'm still interested at the right number and terms."
        </div>
      </section>

      <!-- CONTRACT TERMS -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first-word">Contract</span> <span class="rest">Terms — Non-Negotiable Protections</span>
        </h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Aaron's Position</th>
              <th class="nu-num">Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Updated Seller Property Disclosure</td>
              <td>Required before binding contract. Must include water intrusion history.</td>
              <td class="nu-num">Must</td>
            </tr>
            <tr>
              <td>H2O Waterproofing Warranty</td>
              <td>Transferable to Aaron at close; transfer fee paid by seller.</td>
              <td class="nu-num">Must</td>
            </tr>
            <tr>
              <td>Inspection Period</td>
              <td>Minimum 14 business days. Full right to terminate with earnest money returned.</td>
              <td class="nu-num">Must</td>
            </tr>
            <tr>
              <td>Permit &amp; Square Footage Verification</td>
              <td>Any unpermitted work cured by seller or credited at close.</td>
              <td class="nu-num">Must</td>
            </tr>
            <tr>
              <td>Earnest Money</td>
              <td>Held in attorney trust account, not agent brokerage. Refundable during diligence.</td>
              <td class="nu-num">Must</td>
            </tr>
            <tr>
              <td>Financing Contingency</td>
              <td>Keep in place even with strong pre-approval — Renasant processing window requires it.</td>
              <td class="nu-num">Must</td>
            </tr>
            <tr>
              <td>Closing Date</td>
              <td>45 days from clear disclosure, not from contract signing.</td>
              <td class="nu-num">Strong</td>
            </tr>
            <tr>
              <td>Post-Close Warranty Claims</td>
              <td>Survival clause: latent defect claims remain live for 12 months post-close.</td>
              <td class="nu-num">Strong</td>
            </tr>
            <tr>
              <td>Appliance &amp; Fixture Schedule</td>
              <td>Exhibit A to contract. What's in the house at showing stays at close.</td>
              <td class="nu-num">Standard</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first-word">Execution</span> <span class="rest">Timeline</span>
        </h2>
        <div class="nu-timeline">
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Week 1 — This Week</div>
            <div class="nu-timeline-title">Request updated disclosure + H2O warranty terms in writing</div>
            <div class="nu-timeline-desc">Written request to listing agent. No offer, no earnest money, no verbal commitments until those two documents are in hand.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Week 1–2</div>
            <div class="nu-timeline-title">Commission independent reviews</div>
            <div class="nu-timeline-desc">Third-party waterproofing opinion, Jefferson County permit pull, licensed appraiser's square-footage measurement.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Week 2</div>
            <div class="nu-timeline-title">Deliver written opening offer</div>
            <div class="nu-timeline-desc">Anchor at List × 0.85 with attached defect schedule and independent reports. Offer expires in 72 hours.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Week 2–3</div>
            <div class="nu-timeline-title">Counter round — push to target</div>
            <div class="nu-timeline-desc">Negotiate toward List × 0.90–0.92 with seller credits. Hold walk-away line if disclosure correction is refused.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Week 3–4</div>
            <div class="nu-timeline-title">Contract signing &amp; earnest money</div>
            <div class="nu-timeline-desc">Only after updated disclosure is signed and H2O transfer confirmed. Earnest money to attorney trust.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Week 4–6</div>
            <div class="nu-timeline-title">Inspection &amp; appraisal</div>
            <div class="nu-timeline-desc">Full inspection, HVAC separate, septic/well if applicable, Renasant-ordered appraisal.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Week 7–9</div>
            <div class="nu-timeline-title">Clear to close</div>
            <div class="nu-timeline-desc">Financing clear, title clear, final walk-through 48 hours before close. Fund and record.</div>
          </div>
        </div>
      </section>

      <!-- PRE-OFFER CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first-word">Pre-Offer</span> <span class="rest">Checklist</span>
        </h2>
        <div class="nu-card">
          <ul class="nu-check-list">
            <li>Updated Seller Property Disclosure received in writing with water intrusion history</li>
            <li>H2O Waterproofing transfer process, fee, and warranty terms documented</li>
            <li>Jefferson County permit history pulled and reconciled against listing</li>
            <li>Independent square-footage measurement ordered (licensed appraiser)</li>
            <li>Third-party waterproofing opinion scheduled</li>
            <li>Renasant pre-approval letter refreshed (Patrick Lavette)</li>
            <li>Title company &amp; real-estate attorney selected</li>
            <li>Rental listing vs. for-sale listing discrepancy documented in writing</li>
            <li>Opening offer drafted with defect schedule attached</li>
            <li>Walk-away conditions reviewed and committed to in advance</li>
          </ul>
        </div>
      </section>

      <!-- CLOSING NOTE -->
      <section class="nu-section">
        <div class="nu-alert" style="border-left-color: var(--nu-blue); background: #f0f4ff;">
          <div class="nu-alert-title" style="color: var(--nu-blue);">Aaron's Rule of Thumb</div>
          <div class="nu-alert-body">
            The best negotiation leverage is a buyer who is genuinely willing to walk. Every item in this playbook is designed to make walking as easy as closing — so the seller responds to the strength of the position, not the urgency of the buyer. Anchor low. Document everything. Move only when paper moves.
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-rule"></div>
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