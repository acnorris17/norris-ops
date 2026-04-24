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

    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      margin: 0 auto 16px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }

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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

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

    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .wrap {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 16px;
      padding: 20px 24px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 40px;
      font-size: 0.9rem;
    }
    .doc-meta div strong { color: var(--nu-blue); font-weight: 700; margin-right: 6px; }

    .page-title-block {
      margin-bottom: 50px;
      text-align: center;
    }
    .page-eyebrow {
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.25em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .page-title .accent { color: var(--nu-blue); }
    .page-subtitle {
      font-weight: 400;
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 780px;
      margin: 0 auto;
    }

    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 22px;
      border-radius: 2px;
    }

    .section { margin-bottom: 56px; }

    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 24px;
    }
    .prop-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .prop-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .prop-value {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .prop-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }

    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .strategy-card {
      background: var(--nu-white);
      border-radius: 10px;
      border: 1px solid var(--nu-medium-gray);
      padding: 24px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .strategy-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 4px; height: 100%;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .strategy-num {
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .strategy-head {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .strategy-body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      margin-right: 14px;
      border-radius: 50%;
      background: rgba(6, 208, 255, 0.15);
      color: var(--nu-cyan);
      font-weight: 900;
      flex-shrink: 0;
    }

    .checklist {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .checklist li {
      padding: 14px 0 14px 40px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.97rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 16px;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li::after {
      content: '';
      position: absolute;
      left: 7px; top: 19px;
      width: 8px; height: 14px;
      border-right: 3px solid var(--nu-cyan);
      border-bottom: 3px solid var(--nu-cyan);
      transform: rotate(45deg);
      opacity: 0;
    }
    .checklist li.complete::after { opacity: 1; }
    .checklist li.complete::before { background: rgba(6,208,255,0.08); }
    .checklist li strong { color: var(--nu-dark-text); font-weight: 700; }

    .price-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .price-table th {
      background: linear-gradient(135deg, var(--nu-blue), #0033CC);
      color: var(--nu-white);
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .price-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .price-table tr:last-child td { border-bottom: none; }
    .price-table tr.total td {
      background: var(--nu-light-gray);
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
    }
    .price-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }

    .timeline {
      position: relative;
      padding-left: 28px;
      margin-top: 16px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding: 0 0 24px 20px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -24px; top: 4px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-date {
      font-weight: 700;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-body { font-size: 0.92rem; color: var(--nu-body-text); }

    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .risk-card {
      border-left: 4px solid var(--nu-accent-gold);
      background: #FFFBF0;
      padding: 18px 20px;
      border-radius: 6px;
    }
    .risk-card.high { border-left-color: #C23B22; background: #FFF4F2; }
    .risk-card.medium { border-left-color: var(--nu-accent-gold); background: #FFFBF0; }
    .risk-card.low { border-left-color: #2B8A3E; background: #F2FBF5; }
    .risk-head {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      font-size: 1rem;
    }
    .risk-tag {
      display: inline-block;
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 3px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .risk-tag.high { background: #C23B22; color: white; }
    .risk-tag.medium { background: var(--nu-accent-gold); color: white; }
    .risk-tag.low { background: #2B8A3E; color: white; }
    .risk-body { font-size: 0.9rem; color: var(--nu-body-text); line-height: 1.5; }

    .action-cta {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #0033CC 100%);
      color: var(--nu-white);
      padding: 40px;
      border-radius: 12px;
      text-align: center;
      margin-top: 40px;
    }
    .action-cta h3 {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 10px;
    }
    .action-cta p {
      color: rgba(255,255,255,0.85);
      max-width: 620px;
      margin: 0 auto 24px;
      font-size: 1rem;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 14px 32px;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.06em;
      text-decoration: none;
      text-transform: uppercase;
      margin: 4px;
      transition: transform 0.2s;
    }
    .nu-btn-primary:hover { transform: translateY(-2px); }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-cyan);
      padding: 14px 32px;
      border: 2px solid var(--nu-cyan);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.06em;
      text-decoration: none;
      text-transform: uppercase;
      margin: 4px;
    }
    .nu-btn-secondary:hover { background: var(--nu-cyan); color: var(--nu-navy); }

    .confidential-banner {
      background: var(--nu-dark-text);
      color: var(--nu-cyan);
      text-align: center;
      padding: 10px;
      font-size: 0.75rem;
      letter-spacing: 0.3em;
      font-weight: 700;
      text-transform: uppercase;
    }

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
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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
    .nu-footer-rule {
      height: 1px;
      width: 80px;
      margin: 20px auto;
      background: rgba(6,208,255,0.4);
    }
    .nu-footer-fine {
      font-size: 0.72rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.1em;
      margin-top: 16px;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .page-title { font-size: 1.8rem; }
      .wrap { padding: 40px 22px; }
      .nu-badge { clip-path: none; border-radius: 8px; padding-left: 18px; }
      .doc-meta { flex-direction: column; gap: 8px; }
      .price-table th, .price-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .action-cta, .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .strategy-card, .prop-cell { box-shadow: none; }
    }
  </style>
</head>
<body>

  <div class="confidential-banner">Confidential · Internal Strategy Document · Norris Utilities®</div>

  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="wrap">

      <div class="doc-meta">
        <div><strong>File:</strong> RE-2026-04505BW</div>
        <div><strong>Prepared:</strong> April 24, 2026</div>
        <div><strong>Owner:</strong> Aaron C. Norris</div>
        <div><strong>Status:</strong> Active Negotiation</div>
      </div>

      <div class="page-title-block">
        <div class="page-eyebrow">Real Estate Acquisition · Strategy Brief</div>
        <h1 class="page-title">Negotiate Purchase of the <span class="accent">4505 Buttewoods</span> Estate</h1>
        <p class="page-subtitle">
          7,098 square-foot estate acquisition plan — negotiation playbook, financial framework,
          due-diligence checklist, and timeline to close.
        </p>
      </div>

      <section class="section">
        <h2 class="nu-section-title">Property <span>Summary</span></h2>
        <div class="section-rule"></div>
        <p style="max-width:820px;">
          Target property is a 7,098 sq ft estate located at 4505 Buttewoods. The acquisition is being
          pursued as a direct negotiation — no listing agent, no multiple-offer scenario. This brief
          captures the full negotiation posture, the offer framework, and the steps required to move
          from initial contact to a signed purchase agreement.
        </p>

        <div class="property-grid">
          <div class="prop-cell">
            <div class="prop-label">Address</div>
            <div class="prop-value">4505 Buttewoods</div>
            <div class="prop-sub">Full legal description pending title pull</div>
          </div>
          <div class="prop-cell">
            <div class="prop-label">Living Area</div>
            <div class="prop-value">7,098 sq ft</div>
            <div class="prop-sub">To be confirmed via tax card + appraisal</div>
          </div>
          <div class="prop-cell">
            <div class="prop-label">Classification</div>
            <div class="prop-value">Estate Property</div>
            <div class="prop-sub">Residential — single-owner transaction</div>
          </div>
          <div class="prop-cell">
            <div class="prop-label">Transaction Type</div>
            <div class="prop-value">Direct Negotiation</div>
            <div class="prop-sub">Off-market · principal-to-principal</div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="nu-section-title">Negotiation <span>Strategy</span></h2>
        <div class="section-rule"></div>
        <p style="max-width:820px;">
          The four pillars below govern every conversation, email, and written offer throughout this
          transaction. Aaron handles all principal-to-principal communication; all contracts route
          through counsel before signature.
        </p>

        <div class="strategy-grid" style="margin-top:26px;">
          <div class="strategy-card">
            <div class="strategy-num">PILLAR 01</div>
            <div class="strategy-head">Anchor With Independent Valuation</div>
            <div class="strategy-body">
              Order a certified appraisal and pull three arms-length comparables within a 1-mile radius
              before naming a number. Enter the conversation with a range — not a figure — grounded in
              documentation the seller can verify.
            </div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">PILLAR 02</div>
            <div class="strategy-head">Lead With Seller Motivation</div>
            <div class="strategy-body">
              First meeting is discovery only: timeline, reason for sale, existing encumbrances, and
              what &ldquo;a good outcome&rdquo; looks like to them. No offer is presented until those
              four answers are documented.
            </div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">PILLAR 03</div>
            <div class="strategy-head">Structure Beats Top-Line Price</div>
            <div class="strategy-body">
              Offer flexibility on closing date, leaseback window, and deposit schedule in exchange for
              tightened contingencies. A cleaner, faster close is often worth 3–5% to a motivated
              seller.
            </div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">PILLAR 04</div>
            <div class="strategy-head">Walk-Away Number Set in Writing</div>
            <div class="strategy-body">
              Before negotiation opens, Aaron commits a maximum in writing to counsel. That number
              does not move without a second written review. This prevents negotiation drift in the
              heat of a live conversation.
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="nu-section-title">Offer <span>Framework</span></h2>
        <div class="section-rule"></div>
        <p style="max-width:820px;">
          The table below reflects the negotiation ladder — opening position, realistic target, and
          walk-away. Actual numbers populate after the appraisal and comp set land.
        </p>

        <table class="price-table" aria-label="Offer framework">
          <thead>
            <tr>
              <th>Position</th>
              <th>Purpose</th>
              <th>Earnest Money</th>
              <th>Contingency Window</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opening Offer</strong></td>
              <td>Tests seller flexibility; leaves room to move</td>
              <td class="num">1% of offer</td>
              <td class="num">14 days</td>
            </tr>
            <tr>
              <td><strong>Target Price</strong></td>
              <td>Appraisal-backed fair value, Aaron's goal outcome</td>
              <td class="num">2% of offer</td>
              <td class="num">10 days</td>
            </tr>
            <tr>
              <td><strong>Stretch Ceiling</strong></td>
              <td>Maximum in competitive scenario; above = walk</td>
              <td class="num">3% of offer</td>
              <td class="num">7 days</td>
            </tr>
            <tr class="total">
              <td colspan="2">Walk-Away Rule</td>
              <td colspan="2">No verbal commitment above the Stretch Ceiling — ever.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="section">
        <h2 class="nu-section-title">Due-Diligence <span>Checklist</span></h2>
        <div class="section-rule"></div>

        <div class="nu-card" style="margin-top:20px;">
          <ul class="checklist">
            <li><strong>Title search &amp; encumbrance review</strong> — order through closing attorney; confirm no liens, judgments, or unreleased mortgages.</li>
            <li><strong>Certified appraisal</strong> — engage licensed appraiser familiar with 7,000+ sq ft comps in the submarket.</li>
            <li><strong>Comparable sales pull</strong> — three arms-length sales within 12 months, 1-mile radius, ±15% square footage.</li>
            <li><strong>Tax history &amp; assessed value</strong> — pull 5-year property tax history and current tax card.</li>
            <li><strong>Physical inspection</strong> — full structural, roof, HVAC, plumbing, and foundation inspection; separate termite report.</li>
            <li><strong>Environmental &amp; survey</strong> — boundary survey, flood-zone determination, radon/mold if applicable.</li>
            <li><strong>Deferred maintenance estimate</strong> — contractor walk-through to scope repair/renovation cost into offer math.</li>
            <li><strong>HOA / deed restrictions</strong> — obtain and review any CC&amp;Rs, easements, or subdivision covenants.</li>
            <li><strong>Insurance pre-quote</strong> — confirm property is insurable and at what premium before removing contingency.</li>
            <li><strong>Financing pre-clearance</strong> — lender letter or proof of funds staged and ready at offer submission.</li>
          </ul>
        </div>
      </section>

      <section class="section">
        <h2 class="nu-section-title">Communication <span>Cadence</span></h2>
        <div class="section-rule"></div>
        <p style="max-width:820px;">
          Every touchpoint is logged. Aaron is the single point of contact with the seller. Counsel
          owns all contract language. No third party speaks for Norris Utilities® on this matter.
        </p>

        <div style="margin-top:20px;">
          <div class="nu-badge">
            <span class="nu-badge-icon">1</span>
            Initial Outreach — Aaron &rarr; Seller (phone, then confirmation email)
          </div>
          <div class="nu-badge">
            <span class="nu-badge-icon">2</span>
            Discovery Meeting — in-person walkthrough, seller timeline documented
          </div>
          <div class="nu-badge">
            <span class="nu-badge-icon">3</span>
            Verbal Range Shared — no written offer until appraisal returns
          </div>
          <div class="nu-badge">
            <span class="nu-badge-icon">4</span>
            Written Offer Delivered — drafted by counsel, signed by Aaron
          </div>
          <div class="nu-badge">
            <span class="nu-badge-icon">5</span>
            Counter / Acceptance Window — 72-hour response expectation
          </div>
          <div class="nu-badge">
            <span class="nu-badge-icon">6</span>
            Due-Diligence Period Opens — inspections and contingencies executed
          </div>
          <div class="nu-badge">
            <span class="nu-badge-icon">7</span>
            Close — funds disbursed through closing attorney's escrow
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="nu-section-title">Target <span>Timeline</span></h2>
        <div class="section-rule"></div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">WEEK 1 · APR 28 – MAY 2, 2026</div>
            <div class="timeline-title">Valuation &amp; Intel Package Complete</div>
            <div class="timeline-body">Appraisal ordered, comps pulled, tax card obtained, title company engaged. No direct contact with seller yet.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">WEEK 2 · MAY 5 – MAY 9, 2026</div>
            <div class="timeline-title">Initial Seller Conversation</div>
            <div class="timeline-body">Aaron makes direct call, sets discovery meeting, documents seller motivation and timeline.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">WEEK 3 · MAY 12 – MAY 16, 2026</div>
            <div class="timeline-title">Written Offer Delivered</div>
            <div class="timeline-body">Counsel prepares contract, Aaron signs, offer delivered with financing letter and earnest money instructions.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">WEEKS 4–6 · MAY 19 – JUNE 6, 2026</div>
            <div class="timeline-title">Due-Diligence Period</div>
            <div class="timeline-body">Inspections, survey, environmental, insurance quote, final lender approval. Go/no-go decision by end of Week 6.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">WEEKS 7–8 · JUNE 9 – JUNE 20, 2026</div>
            <div class="timeline-title">Close of Escrow</div>
            <div class="timeline-body">Final walkthrough 48 hours pre-close. Funds wired through closing attorney's escrow. Deed recorded.</div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="nu-section-title">Risk <span>Register</span></h2>
        <div class="section-rule"></div>

        <div class="risk-grid" style="margin-top:20px;">
          <div class="risk-card high">
            <span class="risk-tag high">High</span>
            <div class="risk-head">Hidden Title Encumbrance</div>
            <div class="risk-body">Unreleased mortgage, tax lien, or boundary dispute. Mitigation: title search before any written offer; preliminary commitment from insurer.</div>
          </div>
          <div class="risk-card high">
            <span class="risk-tag high">High</span>
            <div class="risk-head">Over-Pay From Emotional Drift</div>
            <div class="risk-body">Negotiation creep above Stretch Ceiling in a live conversation. Mitigation: walk-away number held by counsel in writing; no verbal commitments over the cap.</div>
          </div>
          <div class="risk-card medium">
            <span class="risk-tag medium">Medium</span>
            <div class="risk-head">Appraisal Gap vs. Seller Expectation</div>
            <div class="risk-body">Seller's internal number exceeds independent appraisal. Mitigation: share the comp package early; frame offer as appraisal-backed, not opinion-backed.</div>
          </div>
          <div class="risk-card medium">
            <span class="risk-tag medium">Medium</span>
            <div class="risk-head">Undisclosed Deferred Maintenance</div>
            <div class="risk-body">Roof, HVAC, or foundation issues that surface in inspection. Mitigation: full inspection contingency + contractor walk-through before contingency release.</div>
          </div>
          <div class="risk-card low">
            <span class="risk-tag low">Low</span>
            <div class="risk-head">Competing Offer Emerges</div>
            <div class="risk-body">Off-market deal becomes known to other buyers. Mitigation: tight confidentiality, fast-moving timeline, clean offer structure.</div>
          </div>
          <div class="risk-card low">
            <span class="risk-tag low">Low</span>
            <div class="risk-head">Financing Delay</div>
            <div class="risk-body">Underwriting slips past contingency window. Mitigation: lender letter in hand before offer; proof-of-funds backup for all-cash pivot if needed.</div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="nu-section-title">Decision <span>Authority</span></h2>
        <div class="section-rule"></div>
        <div class="nu-card">
          <p style="margin-bottom:12px;">
            <strong style="color:var(--nu-blue);">Principal Negotiator:</strong>
            Aaron C. Norris, Founder &amp; CEO, Norris Utilities®, LLC. Sole authority for verbal
            positioning and final sign-off.
          </p>
          <p style="margin-bottom:12px;">
            <strong style="color:var(--nu-blue);">Contract Authority:</strong>
            Closing attorney of record. All written offers, counters, and amendments route through
            counsel before signature.
          </p>
          <p style="margin-bottom:12px;">
            <strong style="color:var(--nu-blue);">Financial Authority:</strong>
            All wires and earnest-money instructions originate from counsel's escrow, never
            principal-to-principal.
          </p>
          <p>
            <strong style="color:var(--nu-blue);">Communication Authority:</strong>
            Aaron is the only representative of Norris Utilities® authorized to speak on this
            transaction. Caroline Butler and all other staff are explicitly excluded from seller
            contact on this file.
          </p>
        </div>
      </section>

      <div class="action-cta">
        <h3>Next Action — This Week</h3>
        <p>
          Engage appraiser, pull comparable sales package, and instruct closing attorney to open a
          title file on 4505 Buttewoods. No seller contact until the intel package is complete.
        </p>
        <a href="tel:2055001343" class="nu-btn-primary">Call Aaron · 205-500-1343</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Acquisition" class="nu-btn-secondary">Email Acquisition Desk</a>
      </div>

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
    <div class="nu-footer-rule"></div>
    <div class="nu-footer-fine">
      Confidential — prepared for internal use by Norris Utilities®. Not a solicitation or binding offer.
    </div>
  </footer>

</body>
</html>