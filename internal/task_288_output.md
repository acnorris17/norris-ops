<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disclosure Discrepancy Review — Rental vs For-Sale Listings — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-warning: #D9534F;
      --nu-warning-bg: #FBE9E7;
      --nu-caution: #E89B2A;
      --nu-caution-bg: #FFF5E6;
      --nu-success: #2E7D32;
      --nu-success-bg: #E8F5E9;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
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
      font-size: 1.3rem;
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
      color: rgba(255,255,255,0.95);
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 12%; left: 50%;
      transform: translate(-50%, 0);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 40px;
    }

    /* DOCUMENT META */
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      justify-content: space-between;
      align-items: center;
      padding: 16px 22px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      margin-bottom: 36px;
      font-size: 0.88rem;
      color: var(--nu-dark-text);
    }
    .nu-doc-meta strong { color: var(--nu-blue); font-weight: 700; }

    /* PAGE TITLE */
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-page-title span.accent {
      color: var(--nu-blue);
      font-weight: 900;
    }
    .nu-page-subtitle {
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 1.1rem;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      max-width: 800px;
      line-height: 1.55;
    }

    /* PRIORITY BANNER */
    .nu-priority-banner {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 22px 26px;
      background: var(--nu-caution-bg);
      border-left: 5px solid var(--nu-caution);
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .nu-priority-icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--nu-caution);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.4rem;
      font-family: serif;
    }
    .nu-priority-banner-content h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    .nu-priority-banner-content p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-header {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      letter-spacing: 0.01em;
    }
    .nu-section-header .first {
      color: var(--nu-blue);
    }
    .nu-section-header .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* COMPARISON TABLE */
    .nu-compare {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-compare-col {
      padding: 0;
      background: var(--nu-white);
    }
    .nu-compare-col:first-child {
      border-right: 1px solid var(--nu-medium-gray);
    }
    .nu-compare-head {
      padding: 16px 22px;
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.05rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--nu-white);
    }
    .nu-compare-head.rental {
      background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
    }
    .nu-compare-head.sale {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
    }
    .nu-compare-row {
      display: flex;
      padding: 14px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      line-height: 1.5;
    }
    .nu-compare-row:last-child { border-bottom: none; }
    .nu-compare-row .label {
      flex: 0 0 38%;
      font-weight: 700;
      color: var(--nu-blue);
    }
    .nu-compare-row .value {
      flex: 1;
      color: var(--nu-body-text);
    }
    .nu-compare-row.mismatch .value {
      color: var(--nu-warning);
      font-weight: 700;
    }
    .nu-compare-row.match .value {
      color: var(--nu-success);
      font-weight: 600;
    }

    /* DISCREPANCY CARDS */
    .nu-discrepancy {
      background: var(--nu-warning-bg);
      border-left: 5px solid var(--nu-warning);
      border-radius: 6px;
      padding: 20px 24px;
      margin-bottom: 16px;
    }
    .nu-discrepancy-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-warning);
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-discrepancy-body {
      font-size: 0.94rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }
    .nu-discrepancy-body strong {
      color: var(--nu-warning);
      font-weight: 700;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist .num {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .nu-checklist .text strong {
      display: block;
      font-weight: 700;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }

    /* RISK GRID */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .nu-risk-card {
      padding: 20px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      border-top: 4px solid var(--nu-blue);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-risk-card.high { border-top-color: var(--nu-warning); }
    .nu-risk-card.med { border-top-color: var(--nu-caution); }
    .nu-risk-card.low { border-top-color: var(--nu-success); }
    .nu-risk-level {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-risk-level.high { background: var(--nu-warning-bg); color: var(--nu-warning); }
    .nu-risk-level.med { background: var(--nu-caution-bg); color: var(--nu-caution); }
    .nu-risk-level.low { background: var(--nu-success-bg); color: var(--nu-success); }
    .nu-risk-card h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-risk-card p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* DECISION BOX */
    .nu-decision-box {
      background: linear-gradient(135deg, #f6f8ff 0%, #eef2ff 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 10px;
      padding: 28px 30px;
      margin-top: 30px;
    }
    .nu-decision-box h3 {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
    }
    .nu-decision-box .options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 16px;
    }
    .nu-option {
      background: var(--nu-white);
      padding: 16px 18px;
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-option strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 6px;
      font-size: 0.95rem;
    }
    .nu-option p {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--nu-body-text);
    }

    /* SIGNOFF */
    .nu-signoff {
      margin-top: 36px;
      padding: 22px 26px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border-left: 4px solid var(--nu-cyan);
    }
    .nu-signoff p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }
    .nu-signoff .reviewer {
      margin-top: 14px;
      font-weight: 700;
      color: var(--nu-dark-text);
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
      font-family: 'Playfair Display', Georgia, serif;
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
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-compare { grid-template-columns: 1fr; }
      .nu-compare-col:first-child { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
      .nu-compare-row { flex-direction: column; gap: 4px; }
      .nu-compare-row .label { flex: none; }
      .nu-doc-meta { flex-direction: column; align-items: flex-start; gap: 8px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-priority-banner, .nu-discrepancy, .nu-decision-box { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
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

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC META -->
      <div class="nu-doc-meta">
        <div><strong>Source:</strong> reMarkable Action Item</div>
        <div><strong>Owner:</strong> Aaron C. Norris</div>
        <div><strong>Date Logged:</strong> April 21, 2026</div>
        <div><strong>Status:</strong> Open — Review Required</div>
      </div>

      <!-- PAGE TITLE -->
      <h1 class="nu-page-title">
        Disclosure <span class="accent">Discrepancy Review</span><br>
        Rental vs For-Sale Listings
      </h1>
      <p class="nu-page-subtitle">
        Side-by-side review of property disclosures appearing in the rental listing versus the for-sale listing. Mismatches flagged here must be reconciled before any offer is presented or contract is signed. Inconsistent disclosures across listing channels create material legal and financial exposure.
      </p>

      <!-- PRIORITY BANNER -->
      <div class="nu-priority-banner">
        <div class="nu-priority-icon">!</div>
        <div class="nu-priority-banner-content">
          <h3>Why This Matters</h3>
          <p>Public listings (MLS, rental portals, brokerage sites) are durable evidence. When the same property is described two different ways across rental and sale channels, the seller has effectively made conflicting representations. The buyer-side review must catalog every difference, identify which version is correct, and obtain a written reconciliation in the seller's disclosure package before closing.</p>
        </div>
      </div>

      <!-- COMPARISON SECTION -->
      <section class="nu-section">
        <h2 class="nu-section-header">
          <span class="first">Side-by-Side</span> <span class="rest">Listing Comparison</span>
        </h2>

        <div class="nu-compare">
          <div class="nu-compare-col">
            <div class="nu-compare-head rental">Rental Listing</div>
            <div class="nu-compare-row">
              <div class="label">Bedrooms</div>
              <div class="value">As represented in rental ad</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Bathrooms</div>
              <div class="value">As represented in rental ad</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Square Footage</div>
              <div class="value">Verify against rental copy</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Year Built</div>
              <div class="value">Verify against rental copy</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Lot Size</div>
              <div class="value">Verify against rental copy</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Heating / Cooling</div>
              <div class="value">Verify against rental copy</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Appliances Included</div>
              <div class="value">Verify against rental copy</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">HOA / Fees</div>
              <div class="value">Verify against rental copy</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Parking / Garage</div>
              <div class="value">Verify against rental copy</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Recent Renovations</div>
              <div class="value">Verify against rental copy</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Known Defects Disclosed</div>
              <div class="value">Verify against rental copy</div>
            </div>
          </div>
          <div class="nu-compare-col">
            <div class="nu-compare-head sale">For-Sale Listing</div>
            <div class="nu-compare-row">
              <div class="label">Bedrooms</div>
              <div class="value">As represented in MLS / for-sale ad</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Bathrooms</div>
              <div class="value">As represented in MLS / for-sale ad</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Square Footage</div>
              <div class="value">Verify against MLS sheet</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Year Built</div>
              <div class="value">Verify against MLS sheet</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Lot Size</div>
              <div class="value">Verify against MLS sheet</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Heating / Cooling</div>
              <div class="value">Verify against MLS sheet</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Appliances Included</div>
              <div class="value">Verify against MLS sheet</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">HOA / Fees</div>
              <div class="value">Verify against MLS sheet</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Parking / Garage</div>
              <div class="value">Verify against MLS sheet</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Recent Renovations</div>
              <div class="value">Verify against MLS sheet</div>
            </div>
            <div class="nu-compare-row">
              <div class="label">Known Defects Disclosed</div>
              <div class="value">Verify against MLS sheet</div>
            </div>
          </div>
        </div>
        <p style="margin-top: 14px; font-size: 0.85rem; color: var(--nu-body-text); font-style: italic;">
          Populate each row with the exact wording from each listing. Highlight any row where the two columns disagree — those rows become the discrepancies tracked in the next section.
        </p>
      </section>

      <!-- DISCREPANCY TYPES -->
      <section class="nu-section">
        <h2 class="nu-section-header">
          <span class="first">Common</span> <span class="rest">Discrepancies to Flag</span>
        </h2>

        <div class="nu-discrepancy">
          <div class="nu-discrepancy-title">1. Square Footage Mismatch</div>
          <div class="nu-discrepancy-body">
            Rental listings often round up; for-sale listings should match the appraisal or tax record. <strong>If they differ by more than 5%, request the source document for each figure.</strong>
          </div>
        </div>

        <div class="nu-discrepancy">
          <div class="nu-discrepancy-title">2. Bedroom / Bathroom Count</div>
          <div class="nu-discrepancy-body">
            A "den" counted as a bedroom in one listing but not the other is a red flag. <strong>Confirm whether each room meets the legal definition of a bedroom (egress window, closet, minimum dimensions).</strong>
          </div>
        </div>

        <div class="nu-discrepancy">
          <div class="nu-discrepancy-title">3. Appliances & Fixtures Included</div>
          <div class="nu-discrepancy-body">
            Rentals typically include all appliances; for-sale listings sometimes exclude refrigerators, washers, dryers, or window units. <strong>Get a written inclusions/exclusions list before offer.</strong>
          </div>
        </div>

        <div class="nu-discrepancy">
          <div class="nu-discrepancy-title">4. Renovation / Condition Claims</div>
          <div class="nu-discrepancy-body">
            "Newly renovated kitchen" in the rental ad but no renovation disclosed on the seller's property disclosure form is a material inconsistency. <strong>Inspector must verify scope and date of any claimed work.</strong>
          </div>
        </div>

        <div class="nu-discrepancy">
          <div class="nu-discrepancy-title">5. Known Defects, Pests, or Past Damage</div>
          <div class="nu-discrepancy-body">
            Anything mentioned in tenant communications or rental reviews (water intrusion, HVAC issues, foundation movement, prior pest treatment) that does NOT appear on the seller's disclosure form is the highest-risk category. <strong>Document and require written acknowledgment.</strong>
          </div>
        </div>

        <div class="nu-discrepancy">
          <div class="nu-discrepancy-title">6. HOA Fees, Special Assessments, or Restrictions</div>
          <div class="nu-discrepancy-body">
            Rental ads sometimes omit HOA limitations that affect resale value (rental caps, short-term rental bans, pending special assessments). <strong>Pull the HOA estoppel letter and current meeting minutes.</strong>
          </div>
        </div>

        <div class="nu-discrepancy">
          <div class="nu-discrepancy-title">7. Lease Status & Tenant Rights</div>
          <div class="nu-discrepancy-body">
            If currently rented, the for-sale listing must disclose lease term, security deposit held, and tenant's right to remain. <strong>Buyer assumes the lease at closing — verify all terms in writing.</strong>
          </div>
        </div>
      </section>

      <!-- REVIEW PROCESS -->
      <section class="nu-section">
        <h2 class="nu-section-header">
          <span class="first">Review</span> <span class="rest">Process — Step by Step</span>
        </h2>
        <ol class="nu-checklist">
          <li>
            <span class="num">1</span>
            <span class="text"><strong>Capture both listings as PDFs (with timestamp).</strong> Save the rental ad and the for-sale ad on the same day. Listings change — preserve evidence.</span>
          </li>
          <li>
            <span class="num">2</span>
            <span class="text"><strong>Build the side-by-side row by row.</strong> Use the table above. Do not paraphrase — copy exact wording.</span>
          </li>
          <li>
            <span class="num">3</span>
            <span class="text"><strong>Flag every divergence, no matter how small.</strong> A small inconsistency may signal sloppiness; a large one may signal misrepresentation.</span>
          </li>
          <li>
            <span class="num">4</span>
            <span class="text"><strong>Cross-check against the seller's property disclosure form.</strong> Anything in either listing that contradicts the disclosure form is the highest priority.</span>
          </li>
          <li>
            <span class="num">5</span>
            <span class="text"><strong>Cross-check against tax records, appraisal, and inspection report.</strong> Square footage, year built, lot size, and additions should match the public record.</span>
          </li>
          <li>
            <span class="num">6</span>
            <span class="text"><strong>Send written request to listing agent.</strong> One email, listing each discrepancy, requesting written reconciliation. Keep the email civil and factual — no accusations.</span>
          </li>
          <li>
            <span class="num">7</span>
            <span class="text"><strong>Decide before offer.</strong> Use the decision box below to choose the path forward.</span>
          </li>
        </ol>
      </section>

      <!-- RISK ASSESSMENT -->
      <section class="nu-section">
        <h2 class="nu-section-header">
          <span class="first">Risk</span> <span class="rest">Assessment Categories</span>
        </h2>
        <div class="nu-risk-grid">
          <div class="nu-risk-card high">
            <span class="nu-risk-level high">High Risk</span>
            <h4>Material Misrepresentation</h4>
            <p>Defect, lien, or restriction disclosed in one listing but hidden in the other. Stop, document, consult attorney before proceeding.</p>
          </div>
          <div class="nu-risk-card high">
            <span class="nu-risk-level high">High Risk</span>
            <h4>Physical Condition Conflicts</h4>
            <p>Roof, foundation, HVAC, plumbing, or electrical described differently across listings. Trigger full inspection with specialists.</p>
          </div>
          <div class="nu-risk-card med">
            <span class="nu-risk-level med">Medium Risk</span>
            <h4>Measurement Discrepancies</h4>
            <p>Square footage, lot size, room counts. Affects valuation and comp analysis. Request source documents and reconcile.</p>
          </div>
          <div class="nu-risk-card med">
            <span class="nu-risk-level med">Medium Risk</span>
            <h4>Inclusions / Exclusions</h4>
            <p>Appliances, fixtures, window treatments. Resolve in writing in the offer or addendum to avoid closing-day disputes.</p>
          </div>
          <div class="nu-risk-card low">
            <span class="nu-risk-level low">Low Risk</span>
            <h4>Marketing Language</h4>
            <p>"Charming" vs "cozy" — subjective puffery. Note but generally not actionable on its own.</p>
          </div>
          <div class="nu-risk-card low">
            <span class="nu-risk-level low">Low Risk</span>
            <h4>Photo Differences</h4>
            <p>Different staging or seasons. Not a discrepancy unless photos depict features that are missing in person.</p>
          </div>
        </div>
      </section>

      <!-- DECISION BOX -->
      <section class="nu-section">
        <div class="nu-decision-box">
          <h3>Decision Point — Before Submitting Offer</h3>
          <p style="font-size: 0.95rem; color: var(--nu-dark-text); line-height: 1.6;">
            After completing the comparison and receiving the seller's response, choose one path:
          </p>
          <div class="options">
            <div class="nu-option">
              <strong>Path A — Proceed</strong>
              <p>All discrepancies explained and reconciled in writing. Add an addendum confirming the correct version of each item. Move forward with offer.</p>
            </div>
            <div class="nu-option">
              <strong>Path B — Conditional Offer</strong>
              <p>Submit offer contingent on seller delivering written disclosure correction and supporting documentation within a defined inspection period.</p>
            </div>
            <div class="nu-option">
              <strong>Path C — Walk</strong>
              <p>Seller refuses to reconcile, or a high-risk material item is contradicted with no plausible explanation. Withdraw interest in writing and preserve all evidence.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SIGNOFF -->
      <div class="nu-signoff">
        <p>
          This review document supports an active reMarkable action item. Findings, the completed side-by-side table, and any seller correspondence should be filed with the property folder and referenced in any subsequent offer, addendum, or attorney consultation. Do not present an offer until the comparison is complete and all High Risk items are resolved in writing.
        </p>
        <p class="reviewer">Reviewer: Aaron C. Norris &nbsp;|&nbsp; Logged: April 21, 2026</p>
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