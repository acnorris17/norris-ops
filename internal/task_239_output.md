<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');

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
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
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
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      margin-top: 22px;
      display: inline-block;
      padding: 8px 20px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 4px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.25em;
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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 280px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 800px; height: 800px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      z-index: 1;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first {
      color: #0033CC;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 22px;
      border-radius: 2px;
    }
    .nu-section {
      margin-bottom: 52px;
    }

    /* INTRO CARD */
    .nu-intro {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 26px 30px;
      border-radius: 4px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .nu-intro p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
    }
    .nu-intro strong {
      color: var(--nu-blue);
    }

    /* PROPERTY SNAPSHOT */
    .nu-snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 16px;
    }
    .nu-snapshot-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 20px 18px;
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-snapshot-tile:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .nu-snapshot-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-snapshot-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-snapshot-sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 4px;
      font-weight: 400;
    }

    /* BADGE (chevron) */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 20px;
      margin-bottom: 16px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
    }
    .nu-badge-num {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      width: 28px; height: 28px;
      border-radius: 50%;
      text-align: center;
      line-height: 28px;
      margin-right: 14px;
      font-weight: 900;
      font-size: 0.85rem;
      flex-shrink: 0;
    }

    /* STRATEGY LIST */
    .nu-strategy-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-strategy-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      margin-bottom: 12px;
      border-radius: 4px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }
    .nu-strategy-item .step-num {
      flex-shrink: 0;
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
    }
    .nu-strategy-item .step-body {
      flex: 1;
    }
    .nu-strategy-item .step-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .nu-strategy-item .step-desc {
      color: var(--nu-body-text);
      font-size: 0.93rem;
    }

    /* OFFER TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 6px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.95rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.03em;
      font-size: 0.85rem;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      color: var(--nu-dark-text);
    }
    .nu-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .nu-table tbody tr:hover {
      background: rgba(6,208,255,0.06);
    }
    .nu-table .amount {
      font-weight: 700;
      color: var(--nu-blue);
      white-space: nowrap;
    }
    .nu-table .target-row td {
      background: rgba(6,208,255,0.10);
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* CHECKLIST */
    .nu-check-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 14px;
    }
    .nu-check-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 14px 18px;
      border-radius: 4px;
    }
    .nu-check-box {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
    }
    .nu-check-text {
      font-size: 0.94rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .nu-check-text strong { color: var(--nu-blue); }

    /* RISK BOX */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 18px;
    }
    .nu-risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-accent-gold);
      border-radius: 6px;
      padding: 22px;
    }
    .nu-risk-card.green { border-top-color: #2a9d5f; }
    .nu-risk-card h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      margin-bottom: 10px;
    }
    .nu-risk-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-risk-card li {
      padding: 6px 0 6px 20px;
      position: relative;
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }
    .nu-risk-card li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 0;
      font-size: 1.2rem;
      line-height: 1;
      top: 8px;
    }

    /* NEXT ACTIONS */
    .nu-next-box {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 34px 36px;
      border-radius: 8px;
      box-shadow: 0 6px 24px rgba(0,0,51,0.2);
    }
    .nu-next-box h3 {
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 16px;
      color: var(--nu-cyan);
      letter-spacing: 0.02em;
    }
    .nu-next-box ol {
      list-style: none;
      counter-reset: step;
      padding: 0;
    }
    .nu-next-box ol li {
      counter-increment: step;
      padding: 10px 0 10px 44px;
      position: relative;
      font-size: 1rem;
      border-bottom: 1px solid rgba(255,255,255,0.12);
    }
    .nu-next-box ol li:last-child { border-bottom: none; }
    .nu-next-box ol li::before {
      content: counter(step);
      position: absolute;
      left: 0; top: 10px;
      width: 30px; height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      font-weight: 900;
      font-size: 0.88rem;
    }
    .nu-next-box strong { color: var(--nu-cyan); }

    /* META STRIP */
    .nu-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      padding: 14px 20px;
      background: var(--nu-light-gray);
      border-radius: 4px;
      margin-bottom: 40px;
      font-size: 0.85rem;
    }
    .nu-meta div {
      flex: 1;
      min-width: 180px;
    }
    .nu-meta .label {
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.72rem;
      margin-bottom: 2px;
    }
    .nu-meta .value {
      color: var(--nu-dark-text);
      font-weight: 700;
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
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 80px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 18px auto;
      opacity: 0.5;
    }
    .nu-footer-confidential {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 60px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 12px 18px; }
      .nu-next-box { padding: 24px 22px; }
      .nu-section-title { font-size: 1.25rem; }
    }

    @media print {
      .nu-header, .nu-footer, .nu-next-box { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-snapshot-tile, .nu-strategy-item, .nu-risk-card { box-shadow: none; border: 1px solid #ccc; }
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
    <div class="nu-doc-label">Action Item · Real Estate</div>
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

      <!-- META STRIP -->
      <div class="nu-meta">
        <div>
          <div class="label">Action Item</div>
          <div class="value">Negotiate Estate Purchase</div>
        </div>
        <div>
          <div class="label">Property</div>
          <div class="value">4505 Buttewoods</div>
        </div>
        <div>
          <div class="label">Source</div>
          <div class="value">reMarkable Capture</div>
        </div>
        <div>
          <div class="label">Owner</div>
          <div class="value">Aaron C. Norris</div>
        </div>
        <div>
          <div class="label">Status</div>
          <div class="value">Open · Prep Phase</div>
        </div>
      </div>

      <!-- INTRO -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Brief</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-intro">
          <p>Open a disciplined, relationship-first negotiation for the <strong>7,098 sq ft estate at 4505 Buttewoods</strong>. This working brief frames the offer, the structure, and the decision gates so the conversation moves from initial contact to a signed agreement without drift. Every step is recorded for clarity — no assumptions, no placeholders, no verbal-only commitments.</p>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-snapshot-grid">
          <div class="nu-snapshot-tile">
            <div class="nu-snapshot-label">Address</div>
            <div class="nu-snapshot-value">4505</div>
            <div class="nu-snapshot-sub">Buttewoods</div>
          </div>
          <div class="nu-snapshot-tile">
            <div class="nu-snapshot-label">Living Area</div>
            <div class="nu-snapshot-value">7,098</div>
            <div class="nu-snapshot-sub">Square Feet</div>
          </div>
          <div class="nu-snapshot-tile">
            <div class="nu-snapshot-label">Classification</div>
            <div class="nu-snapshot-value">Estate</div>
            <div class="nu-snapshot-sub">Single-Family</div>
          </div>
          <div class="nu-snapshot-tile">
            <div class="nu-snapshot-label">Deal Phase</div>
            <div class="nu-snapshot-value">Prep</div>
            <div class="nu-snapshot-sub">Pre-Offer</div>
          </div>
          <div class="nu-snapshot-tile">
            <div class="nu-snapshot-label">Capture Source</div>
            <div class="nu-snapshot-value">reMarkable</div>
            <div class="nu-snapshot-sub">Hand-Noted Priority</div>
          </div>
        </div>
      </div>

      <!-- STRATEGY -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Strategy</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-badge">
          <span class="nu-badge-num">A</span>
          PREPARATION — Know the property and the seller before opening the door
        </div>

        <ul class="nu-strategy-list">
          <li class="nu-strategy-item">
            <div class="step-num">1</div>
            <div class="step-body">
              <div class="step-title">Confirm title and lien status</div>
              <div class="step-desc">Pull the deed, tax record, and any recorded mortgages or judgments. Verify the legal seller, any co-owners, and outstanding encumbrances before making any verbal commitment.</div>
            </div>
          </li>
          <li class="nu-strategy-item">
            <div class="step-num">2</div>
            <div class="step-body">
              <div class="step-title">Pull three comparable sales (last 12 months)</div>
              <div class="step-desc">Target estates 6,500 to 7,800 sq ft in the same submarket. Establish a floor price per sq ft and a ceiling — write both numbers down before the first conversation with the seller.</div>
            </div>
          </li>
          <li class="nu-strategy-item">
            <div class="step-num">3</div>
            <div class="step-body">
              <div class="step-title">Inspect the physical condition</div>
              <div class="step-desc">Roof age, HVAC count and age, foundation, grade, drainage, and any visible deferred maintenance. Note everything that will become a negotiation lever after the walk-through.</div>
            </div>
          </li>
        </ul>

        <div class="nu-badge" style="margin-top: 28px;">
          <span class="nu-badge-num">B</span>
          OPENING — Lead with respect, anchor with clarity
        </div>

        <ul class="nu-strategy-list">
          <li class="nu-strategy-item">
            <div class="step-num">4</div>
            <div class="step-body">
              <div class="step-title">Open in person or by phone — never by text</div>
              <div class="step-desc">A 7,098 sq ft estate is a relationship sale. Set a short meeting, bring a written one-page offer summary, and listen first. Ask what the seller wants the property to become.</div>
            </div>
          </li>
          <li class="nu-strategy-item">
            <div class="step-num">5</div>
            <div class="step-body">
              <div class="step-title">Anchor with a real number, not a range</div>
              <div class="step-desc">Open with a specific dollar figure tied to a documented comp. Explain the math in one sentence. A specific anchor signals seriousness and controls the conversation.</div>
            </div>
          </li>
          <li class="nu-strategy-item">
            <div class="step-num">6</div>
            <div class="step-body">
              <div class="step-title">State the walk-away clearly to yourself</div>
              <div class="step-desc">Write the ceiling number on paper before the meeting. If the negotiation crosses it, the answer is "thank you" and a polite exit. The discipline to walk is the discipline to win.</div>
            </div>
          </li>
        </ul>

        <div class="nu-badge" style="margin-top: 28px;">
          <span class="nu-badge-num">C</span>
          CLOSING — Structure, not speed
        </div>

        <ul class="nu-strategy-list">
          <li class="nu-strategy-item">
            <div class="step-num">7</div>
            <div class="step-body">
              <div class="step-title">Put every term in writing the same day</div>
              <div class="step-desc">Price, earnest money, inspection period, financing contingency, closing date, and any included fixtures. If it isn't on paper, it didn't happen.</div>
            </div>
          </li>
          <li class="nu-strategy-item">
            <div class="step-num">8</div>
            <div class="step-body">
              <div class="step-title">Inspection period drives the final price</div>
              <div class="step-desc">Use the inspection window to surface real repair costs and come back with a documented, itemized counter. Written invoices, not estimates — that is what moves the seller.</div>
            </div>
          </li>
          <li class="nu-strategy-item">
            <div class="step-num">9</div>
            <div class="step-body">
              <div class="step-title">Close calmly and on time</div>
              <div class="step-desc">Line up financing, survey, title, and insurance well before the scheduled closing. A clean close protects the relationship for future transactions and referrals.</div>
            </div>
          </li>
        </ul>
      </div>

      <!-- OFFER MATH -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Structure &amp; Math</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Basis</th>
                <th>Price Per Sq Ft</th>
                <th>Gross Price (7,098 sf)</th>
                <th>Posture</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Opening Offer</td>
                <td>Low comp, adjusted for condition</td>
                <td class="amount">Lowest verified comp</td>
                <td class="amount">Documented anchor</td>
                <td>Firm, polite, written one-pager</td>
              </tr>
              <tr class="target-row">
                <td>Target Close</td>
                <td>Median of 3 comps</td>
                <td class="amount">Midpoint per sq ft</td>
                <td class="amount">Target contract price</td>
                <td>Goal — hit within 2 counters</td>
              </tr>
              <tr>
                <td>Ceiling / Walk-Away</td>
                <td>Highest comp minus repair reserve</td>
                <td class="amount">Upper boundary</td>
                <td class="amount">Hard stop</td>
                <td>Cross it = exit, no drama</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="margin-top: 14px; font-size: 0.88rem; color: var(--nu-body-text); font-style: italic;">Fill in each tier with the actual comp-pull numbers before opening conversation. No verbal anchor until the three tiers are written on paper.</p>
      </div>

      <!-- DUE DILIGENCE CHECKLIST -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-check-grid">
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Title search</strong> through a closing attorney — clear chain of ownership and lien search.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Property tax</strong> assessment, current balance, and three-year payment history.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Survey and plat</strong> verified — confirm lot boundaries match the listing.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Professional inspection</strong> — structure, roof, HVAC, electrical, plumbing, foundation.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>HOA &amp; covenants</strong> — dues, transfer fees, architectural restrictions reviewed.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Insurance quote</strong> pulled before closing — cost confirms carrying economics.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Financing pre-approval</strong> letter in hand matching the target offer.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Zoning &amp; use</strong> check — any restriction that affects intended use documented.</div>
          </div>
        </div>
      </div>

      <!-- RISK / LEVERAGE -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">&amp; Risk</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-risk-grid">
          <div class="nu-risk-card green">
            <h4>Where the Leverage Is</h4>
            <ul>
              <li>Cash or strong financing shortens the close — worth real dollars to the seller.</li>
              <li>Documented repair costs from the inspection report.</li>
              <li>Flexible close date that matches the seller's own move-out.</li>
              <li>Clean offer — few contingencies, clear earnest money.</li>
            </ul>
          </div>
          <div class="nu-risk-card">
            <h4>Where the Risk Is</h4>
            <ul>
              <li>Hidden structural or moisture issues in a 7,098 sq ft footprint.</li>
              <li>Title defect or lien not surfaced until late in the process.</li>
              <li>Seller emotional attachment that breaks the math — stay disciplined.</li>
              <li>Carrying cost if the close slips — taxes, insurance, utilities accrue daily.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- NEXT ACTIONS -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Actions</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-next-box">
          <h3>Execution Order — Do These in Sequence</h3>
          <ol>
            <li><strong>Pull the deed and tax record</strong> for 4505 Buttewoods and confirm the legal owner on record.</li>
            <li><strong>Identify three comparable sales</strong> within the last 12 months, 6,500 to 7,800 sq ft, same submarket.</li>
            <li><strong>Write the three-tier offer sheet</strong> — opening, target, ceiling — in dollars, on paper.</li>
            <li><strong>Secure financing pre-approval</strong> matching the target price before the first seller conversation.</li>
            <li><strong>Schedule the in-person meeting</strong> with the seller, bring the one-page summary, listen first.</li>
            <li><strong>Deliver the written offer</strong> the same day as the verbal anchor — no next-day gaps.</li>
            <li><strong>Run the inspection</strong> inside the contingency window and document every finding with costs.</li>
            <li><strong>Close clean and on time</strong> — financing, survey, title, and insurance lined up a week early.</li>
          </ol>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-confidential">Internal Working Document · Confidential</div>
  </footer>

</body>
</html>