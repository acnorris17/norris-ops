<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disclosure Discrepancy Resolution — Rental vs. For-Sale Listing — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-warning-amber: #E59800;
      --nu-success-green: #2E7D32;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      opacity: 0.95;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 40px;
    }

    /* PRIORITY BANNER */
    .priority-banner {
      background: linear-gradient(135deg, var(--nu-alert-red) 0%, #8B0000 100%);
      color: var(--nu-white);
      padding: 18px 28px;
      border-radius: 6px;
      margin-bottom: 36px;
      display: flex;
      align-items: center;
      gap: 16px;
      box-shadow: 0 4px 16px rgba(200, 16, 46, 0.25);
    }
    .priority-banner-icon {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      background: rgba(255,255,255,0.2);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .priority-banner-text {
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .priority-banner-text small {
      display: block;
      font-weight: 400;
      font-size: 0.8rem;
      text-transform: none;
      letter-spacing: 0;
      opacity: 0.9;
      margin-top: 3px;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
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
    .nu-section { margin-bottom: 48px; }

    /* INTRO BLOCK */
    .intro-block {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 24px 28px;
      border-radius: 4px;
      margin-bottom: 36px;
    }
    .intro-block p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
    }
    .intro-block strong { color: var(--nu-blue); }

    /* COMPARISON GRID */
    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 32px;
    }
    .listing-card {
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      background: var(--nu-white);
    }
    .listing-card-header {
      padding: 16px 20px;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .listing-rental .listing-card-header {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
    }
    .listing-sale .listing-card-header {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
    }
    .listing-card-tag {
      font-size: 0.7rem;
      background: rgba(255,255,255,0.2);
      padding: 4px 10px;
      border-radius: 12px;
      letter-spacing: 0.08em;
    }
    .listing-card-body {
      padding: 22px 24px;
    }
    .listing-card-body h4 {
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 10px;
      margin-top: 18px;
    }
    .listing-card-body h4:first-child { margin-top: 0; }
    .listing-card-body ul {
      list-style: none;
      padding: 0;
    }
    .listing-card-body li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.93rem;
      color: var(--nu-body-text);
      border-bottom: 1px dotted var(--nu-medium-gray);
    }
    .listing-card-body li:last-child { border-bottom: none; }
    .listing-card-body li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      position: absolute;
      left: 6px;
      top: 4px;
    }
    .listing-card-body .flag {
      background: #FFF4E5;
      border-left: 3px solid var(--nu-warning-amber);
      padding: 10px 14px;
      margin-top: 14px;
      font-size: 0.85rem;
      color: #6B4500;
      border-radius: 3px;
    }
    .listing-card-body .flag strong { color: var(--nu-warning-amber); }

    /* DISCREPANCY TABLE */
    .discrepancy-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 16px;
    }
    .discrepancy-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .discrepancy-table th {
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-align: left;
    }
    .discrepancy-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .discrepancy-table tr:last-child td { border-bottom: none; }
    .discrepancy-table tr:nth-child(even) td { background: #FAFAFC; }
    .discrepancy-table .item-col { font-weight: 700; color: var(--nu-dark-text); width: 22%; }
    .discrepancy-table .risk-col { width: 18%; }
    .risk-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .risk-high { background: #FDE7EA; color: var(--nu-alert-red); }
    .risk-med { background: #FFF4E5; color: var(--nu-warning-amber); }
    .risk-low { background: #E6F4EA; color: var(--nu-success-green); }

    /* ACTION STEPS */
    .action-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
      margin-bottom: 24px;
    }
    .action-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      position: relative;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .action-step:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .action-step-num {
      position: absolute;
      top: -14px;
      left: 18px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,255,0.3);
    }
    .action-step h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin: 14px 0 10px;
      letter-spacing: 0.01em;
    }
    .action-step p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .action-step .owner {
      margin-top: 12px;
      padding-top: 10px;
      border-top: 1px dotted var(--nu-medium-gray);
      font-size: 0.78rem;
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    /* DECISION BOX */
    .decision-box {
      background: linear-gradient(135deg, #F0F4FF 0%, #E6EFFF 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
      margin-top: 24px;
    }
    .decision-box h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    .decision-box .options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 16px;
    }
    .decision-option {
      background: var(--nu-white);
      padding: 16px 18px;
      border-radius: 6px;
      border-left: 4px solid var(--nu-cyan);
    }
    .decision-option strong {
      display: block;
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      margin-bottom: 4px;
    }
    .decision-option span {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 36px;
      margin-bottom: 24px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 11px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: var(--nu-medium-gray);
    }
    .timeline-item {
      position: relative;
      padding-bottom: 18px;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -30px;
      top: 6px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--nu-cyan);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-item .when {
      font-weight: 700;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-item .what {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #001a99 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .nu-footer-contact a:hover { color: var(--nu-white); }
    .nu-footer-strong {
      font-weight: 700;
      color: var(--nu-white);
    }

    /* RESPONSIVE */
    @media (max-width: 820px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 22px 28px; }
      .comparison-grid { grid-template-columns: 1fr; }
      .discrepancy-table { font-size: 0.82rem; }
      .discrepancy-table th, .discrepancy-table td { padding: 10px 12px; }
      .discrepancy-table .item-col { width: auto; }
      .priority-banner { flex-direction: column; text-align: center; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .action-step:hover { transform: none; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PRIORITY BANNER -->
      <div class="priority-banner">
        <div class="priority-banner-icon">!</div>
        <div class="priority-banner-text">
          Action Item — Disclosure Discrepancy Resolution
          <small>Source: reMarkable scan • Logged 2026-04-25 • Owner: Aaron C. Norris</small>
        </div>
      </div>

      <!-- INTRO -->
      <section class="nu-section">
        <h2 class="nu-section-title">The <span>Issue</span></h2>
        <div class="nu-section-rule"></div>
        <div class="intro-block">
          <p>A property is currently listed in <strong>two parallel channels</strong> — one as a rental and one for sale. A material item present in the <strong>rental listing</strong> is <strong>omitted from the for-sale listing</strong>. That mismatch is a disclosure discrepancy that must be reconciled before either listing continues to circulate, because prospective buyers and prospective tenants are receiving different representations of the same property.</p>
        </div>
      </section>

      <!-- SIDE-BY-SIDE COMPARISON -->
      <section class="nu-section">
        <h2 class="nu-section-title">Listing <span>Comparison</span></h2>
        <div class="nu-section-rule"></div>

        <div class="comparison-grid">
          <!-- RENTAL CARD -->
          <div class="listing-card listing-rental">
            <div class="listing-card-header">
              <span>Rental Listing</span>
              <span class="listing-card-tag">As-Disclosed</span>
            </div>
            <div class="listing-card-body">
              <h4>Channel</h4>
              <ul>
                <li>Marketed for monthly tenancy</li>
                <li>Audience: prospective renters</li>
              </ul>
              <h4>Items Disclosed</h4>
              <ul>
                <li>Standard property features</li>
                <li>Material item present and listed</li>
                <li>Condition / use notes included</li>
              </ul>
              <div class="flag">
                <strong>Status:</strong> Item is openly disclosed here. This is the reference of record for what tenants have been told.
              </div>
            </div>
          </div>

          <!-- FOR-SALE CARD -->
          <div class="listing-card listing-sale">
            <div class="listing-card-header">
              <span>For-Sale Listing</span>
              <span class="listing-card-tag">Discrepant</span>
            </div>
            <div class="listing-card-body">
              <h4>Channel</h4>
              <ul>
                <li>Marketed for purchase</li>
                <li>Audience: prospective buyers / their agents</li>
              </ul>
              <h4>Items Disclosed</h4>
              <ul>
                <li>Standard property features</li>
                <li>Material item <strong>omitted</strong> from listing copy</li>
                <li>No corresponding condition / use note</li>
              </ul>
              <div class="flag">
                <strong>Risk:</strong> A buyer relying on this listing receives a less complete picture than a tenant viewing the rental version of the same property.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHY IT MATTERS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Why It <span>Matters</span></h2>
        <div class="nu-section-rule"></div>

        <table class="discrepancy-table">
          <thead>
            <tr>
              <th class="item-col">Concern</th>
              <th>Detail</th>
              <th class="risk-col">Risk Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="item-col">Buyer reliance</td>
              <td>A buyer can argue they relied on the for-sale listing as written. If a material item known to ownership was omitted, that exposure attaches to the seller and to the listing party.</td>
              <td><span class="risk-badge risk-high">High</span></td>
            </tr>
            <tr>
              <td class="item-col">Conflicting public record</td>
              <td>Both listings sit in publicly visible channels. A side-by-side comparison by a buyer's agent, an attorney, or an insurer is straightforward and damaging.</td>
              <td><span class="risk-badge risk-high">High</span></td>
            </tr>
            <tr>
              <td class="item-col">Tenant transition</td>
              <td>If the property sells while occupied, the new owner inherits whatever was disclosed to the tenant. Silence on the buyer side does not erase what the rental side already published.</td>
              <td><span class="risk-badge risk-med">Medium</span></td>
            </tr>
            <tr>
              <td class="item-col">Insurance / financing</td>
              <td>A lender or insurer reviewing the file post-closing may flag the omission and trigger a coverage or rate question.</td>
              <td><span class="risk-badge risk-med">Medium</span></td>
            </tr>
            <tr>
              <td class="item-col">Agent / broker liability</td>
              <td>The listing agent on the for-sale side carries an independent duty to verify disclosures match the property's known condition.</td>
              <td><span class="risk-badge risk-high">High</span></td>
            </tr>
            <tr>
              <td class="item-col">Quiet correction window</td>
              <td>Resolving the discrepancy now — before an offer is submitted — is significantly easier than amending after a contract is signed.</td>
              <td><span class="risk-badge risk-low">Time-Sensitive</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- ACTION PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title">Action <span>Plan</span></h2>
        <div class="nu-section-rule"></div>

        <div class="action-steps">
          <div class="action-step">
            <div class="action-step-num">1</div>
            <h4>Capture both listings</h4>
            <p>Pull current PDF/screenshots of the rental listing and the for-sale listing on the same day. Save with a date stamp so the discrepancy is preserved exactly as published.</p>
            <div class="owner">Owner: Aaron</div>
          </div>

          <div class="action-step">
            <div class="action-step-num">2</div>
            <h4>Identify the omitted item</h4>
            <p>Write a one-line description of what is on the rental listing but missing from the for-sale listing. Note whether it is a structure, system, condition, restriction, or use right.</p>
            <div class="owner">Owner: Aaron</div>
          </div>

          <div class="action-step">
            <div class="action-step-num">3</div>
            <h4>Decide truth of record</h4>
            <p>Confirm which version is accurate. If the item exists, the for-sale listing must be amended. If the item does not exist, the rental listing must be corrected and any tenant who relied on it notified.</p>
            <div class="owner">Owner: Aaron</div>
          </div>

          <div class="action-step">
            <div class="action-step-num">4</div>
            <h4>Loop in the listing agent</h4>
            <p>Send the comparison to the agent on the for-sale side in writing. Ask for the listing copy to be amended and re-published with a dated revision note.</p>
            <div class="owner">Owner: Aaron + Agent</div>
          </div>

          <div class="action-step">
            <div class="action-step-num">5</div>
            <h4>Update the seller's disclosure</h4>
            <p>If a written seller's disclosure has been delivered to any prospective buyer, issue a corrected version with today's date and route it through the same channel it originally went out on.</p>
            <div class="owner">Owner: Aaron + Agent</div>
          </div>

          <div class="action-step">
            <div class="action-step-num">6</div>
            <h4>Document the cure</h4>
            <p>File the captures from Step 1, the corrected listing, and the corrected disclosure together. Save under the property folder so the cure trail is intact for closing.</p>
            <div class="owner">Owner: Aaron</div>
          </div>
        </div>
      </section>

      <!-- DECISION BOX -->
      <section class="nu-section">
        <div class="decision-box">
          <h3>Decision Required From Aaron</h3>
          <p style="color: var(--nu-dark-text); font-size: 0.95rem;">Before the action plan can move forward, one call has to be made — does the omitted item belong on the for-sale listing, or was it incorrectly placed on the rental listing? The answer determines which document gets corrected.</p>
          <div class="options">
            <div class="decision-option">
              <strong>Option A — Add to For-Sale</strong>
              <span>Item is real and was simply left off the for-sale copy. Amend the for-sale listing and update buyer disclosures.</span>
            </div>
            <div class="decision-option">
              <strong>Option B — Remove from Rental</strong>
              <span>Item should not have been advertised on the rental side. Pull it from the rental copy and notify any tenant who saw the prior version.</span>
            </div>
            <div class="decision-option">
              <strong>Option C — Both Need Editing</strong>
              <span>Each listing has a partial truth. Reconcile to a single accurate description, then republish both.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Target <span>Timeline</span></h2>
        <div class="nu-section-rule"></div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="when">Today — 2026-04-25</div>
            <div class="what">Capture both listings as they appear right now. Identify and write down the specific omitted item.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Within 24 Hours — 2026-04-26</div>
            <div class="what">Aaron makes the truth-of-record decision (Option A, B, or C above).</div>
          </div>
          <div class="timeline-item">
            <div class="when">Within 48 Hours — 2026-04-27</div>
            <div class="what">Listing agent issues the corrected for-sale copy. Corrected seller's disclosure prepared.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Within 72 Hours — 2026-04-28</div>
            <div class="what">Corrected disclosure delivered to any prospective buyer already in the funnel. Cure file assembled.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Closing Reference</div>
            <div class="what">Cure file (captures + corrected listing + corrected disclosure) attached to closing packet so the resolution is on the permanent record.</div>
          </div>
        </div>
      </section>

      <!-- GUARDRAILS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Guardrails — <span>Do Not Skip</span></h2>
        <div class="nu-section-rule"></div>
        <table class="discrepancy-table">
          <tbody>
            <tr>
              <td class="item-col">Do not</td>
              <td>Quietly delete the rental listing without preserving a copy of what it said. The prior version is part of the record.</td>
            </tr>
            <tr>
              <td class="item-col">Do not</td>
              <td>Verbally walk back the omission to a single buyer. Corrections must be in writing and delivered through the same channel as the original.</td>
            </tr>
            <tr>
              <td class="item-col">Do not</td>
              <td>Wait until an offer is on the table. The cure window is largest right now.</td>
            </tr>
            <tr>
              <td class="item-col">Always</td>
              <td>Time-stamp every document — captures, amendments, corrected disclosures, and the cure file.</td>
            </tr>
            <tr>
              <td class="item-col">Always</td>
              <td>Route the corrected disclosure through the listing agent of record so the agent's file matches Aaron's file.</td>
            </tr>
            <tr>
              <td class="item-col">Always</td>
              <td>Keep the cure file with the property folder, not in email only. Email rots; the property folder follows the asset.</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <span class="nu-footer-strong">Aaron C. Norris</span>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      130 Inverness Plaza #210 | Birmingham, AL 35242<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>