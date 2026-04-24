<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disclosure Discrepancy Action Item — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-alert-red: #C8102E;
      --nu-alert-amber: #E8A317;
      --nu-success-green: #1B8E4F;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066EE 55%, #00AAFF 80%, var(--nu-cyan) 100%);
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
        linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      background-size: 40px 40px, 40px 40px, 60px 60px, 80px 80px;
      z-index: 1;
      opacity: 0.6;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON ══ */
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

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 45%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 65%;
      background-image: radial-gradient(circle, rgba(0, 51, 204, 0.06) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ ACTION ITEM BANNER ══ */
    .nu-action-banner {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 60%, #0033CC 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-bottom: 48px;
      display: flex;
      align-items: center;
      gap: 24px;
      box-shadow: 0 8px 24px rgba(0, 51, 204, 0.18);
      border-left: 6px solid var(--nu-cyan);
    }
    .nu-action-banner-icon {
      width: 56px;
      height: 56px;
      flex-shrink: 0;
      background: rgba(6, 208, 255, 0.15);
      border: 2px solid var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.6rem;
    }
    .nu-action-banner-text .label {
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .nu-action-banner-text .title {
      font-size: 1.45rem;
      font-weight: 900;
      line-height: 1.3;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: #0033CC;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-medium-gray);
      position: relative;
    }
    .nu-section-title::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 80px;
      height: 3px;
      background: var(--nu-cyan);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-intro {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 20px;
    }

    /* ══ COMPARISON GRID ══ */
    .nu-compare-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 16px;
    }
    .nu-listing-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-listing-card .card-header {
      padding: 14px 20px;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nu-listing-card.rental .card-header {
      background: linear-gradient(135deg, #0033CC 0%, #0066EE 100%);
    }
    .nu-listing-card.forsale .card-header {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
    }
    .nu-listing-card .card-body {
      padding: 22px 20px;
    }
    .nu-listing-card .field {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-listing-card .field:last-child { border-bottom: none; }
    .nu-listing-card .field .label {
      color: #666;
      font-weight: 400;
    }
    .nu-listing-card .field .value {
      color: var(--nu-dark-text);
      font-weight: 700;
      text-align: right;
    }
    .nu-listing-card .field .value.flag {
      color: var(--nu-alert-red);
    }

    /* ══ DISCREPANCY CALLOUT ══ */
    .nu-discrepancy {
      background: linear-gradient(135deg, #fff5f0 0%, #ffeee0 100%);
      border: 2px solid var(--nu-alert-amber);
      border-left: 6px solid var(--nu-alert-red);
      border-radius: 8px;
      padding: 24px 28px;
      margin: 24px 0;
    }
    .nu-discrepancy h3 {
      color: var(--nu-alert-red);
      font-weight: 900;
      font-size: 1.1rem;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-discrepancy p {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }
    .nu-discrepancy ul {
      margin-top: 12px;
      padding-left: 22px;
    }
    .nu-discrepancy ul li {
      padding: 4px 0;
      color: var(--nu-dark-text);
    }

    /* ══ BADGES ══ */
    .nu-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 14px;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-badge.cyan {
      background: linear-gradient(135deg, #0033CC 0%, var(--nu-cyan) 100%);
    }

    /* ══ ACTION PLAN ══ */
    .nu-steps {
      list-style: none;
      counter-reset: step;
      padding: 0;
    }
    .nu-steps li {
      position: relative;
      counter-increment: step;
      padding: 18px 20px 18px 72px;
      margin-bottom: 14px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
    }
    .nu-steps li::before {
      content: counter(step);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 38px;
      height: 38px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.05rem;
    }
    .nu-steps li .step-title {
      display: block;
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .nu-steps li .step-body {
      font-size: 0.94rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ RISK TABLE ══ */
    .nu-risk-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .nu-risk-table thead {
      background: linear-gradient(135deg, #0033CC 0%, #0066EE 100%);
      color: var(--nu-white);
    }
    .nu-risk-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-risk-table td {
      padding: 14px 16px;
      font-size: 0.94rem;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-risk-table tr:last-child td { border-bottom: none; }
    .nu-risk-table tr:nth-child(even) td { background: #fafafa; }
    .nu-severity {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-severity.high { background: #fde2e4; color: var(--nu-alert-red); }
    .nu-severity.med { background: #fff0d6; color: var(--nu-alert-amber); }
    .nu-severity.low { background: #e0f5e9; color: var(--nu-success-green); }

    /* ══ RECOMMENDATION ══ */
    .nu-recommendation {
      background: linear-gradient(135deg, #0033CC 0%, #0066EE 60%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin-top: 16px;
      box-shadow: 0 8px 24px rgba(0, 51, 204, 0.22);
    }
    .nu-recommendation h3 {
      font-weight: 900;
      font-size: 1.25rem;
      margin-bottom: 12px;
      letter-spacing: 0.04em;
    }
    .nu-recommendation p {
      font-size: 1rem;
      line-height: 1.7;
      margin-bottom: 10px;
    }
    .nu-recommendation .decision-line {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.25);
      font-weight: 700;
      font-size: 1.02rem;
    }

    /* ══ META STRIP ══ */
    .nu-meta-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
      background: var(--nu-light-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 36px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-meta-strip .cell {
      padding: 16px 20px;
      text-align: center;
      border-right: 1px solid var(--nu-medium-gray);
    }
    .nu-meta-strip .cell:last-child { border-right: none; }
    .nu-meta-strip .cell .label {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #777;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .nu-meta-strip .cell .value {
      font-size: 0.98rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }

    /* ══ FOOTER ══ */
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
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact strong { color: var(--nu-white); }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .nu-compare-grid { grid-template-columns: 1fr; }
      .nu-meta-strip { grid-template-columns: repeat(2, 1fr); }
      .nu-meta-strip .cell:nth-child(2) { border-right: none; }
      .nu-meta-strip .cell:nth-child(1),
      .nu-meta-strip .cell:nth-child(2) { border-bottom: 1px solid var(--nu-medium-gray); }
      .nu-action-banner { flex-direction: column; text-align: center; padding: 22px; }
      .nu-risk-table thead { display: none; }
      .nu-risk-table, .nu-risk-table tbody, .nu-risk-table tr, .nu-risk-table td { display: block; width: 100%; }
      .nu-risk-table tr { margin-bottom: 14px; border: 1px solid var(--nu-medium-gray); border-radius: 6px; }
      .nu-risk-table td { border-bottom: 1px dashed var(--nu-medium-gray); }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#FFFFFF" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#FFFFFF" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ACTION BANNER -->
      <div class="nu-action-banner">
        <div class="nu-action-banner-icon">!</div>
        <div class="nu-action-banner-text">
          <div class="label">reMarkable Action Item — Disclosure Review</div>
          <div class="title">Address disclosure discrepancy between rental and for-sale listings before further negotiation</div>
        </div>
      </div>

      <!-- META STRIP -->
      <div class="nu-meta-strip">
        <div class="cell">
          <div class="label">Source</div>
          <div class="value">reMarkable</div>
        </div>
        <div class="cell">
          <div class="label">Logged</div>
          <div class="value">April 24, 2026</div>
        </div>
        <div class="cell">
          <div class="label">Owner</div>
          <div class="value">Aaron C. Norris</div>
        </div>
        <div class="cell">
          <div class="label">Priority</div>
          <div class="value" style="color:#C8102E;">High</div>
        </div>
      </div>

      <!-- THE SITUATION -->
      <section class="nu-section">
        <h2 class="nu-section-title">The <span>Situation</span></h2>
        <p class="nu-section-intro">
          A property currently carries <strong>two active listings</strong> — one as a rental and one as a for-sale
          offering. The disclosures attached to those listings do not agree. Before we go further on any offer,
          negotiation, or signed intent, the gap between those two disclosures needs to be identified on paper and
          reconciled in writing by the listing party.
        </p>
        <div class="nu-badge-row">
          <span class="nu-badge cyan">Dual Listing</span>
          <span class="nu-badge">Disclosure Mismatch</span>
          <span class="nu-badge">Pre-Offer Due Diligence</span>
        </div>
      </section>

      <!-- SIDE-BY-SIDE COMPARISON -->
      <section class="nu-section">
        <h2 class="nu-section-title">Side-by-Side <span>Listing Review</span></h2>
        <p class="nu-section-intro">
          Pull both listing packets, line them up, and mark every field where the two disclosures do not match.
          Below is the template we use to compare the two records.
        </p>
        <div class="nu-compare-grid">
          <div class="nu-listing-card rental">
            <div class="card-header">
              <span>Rental Listing</span>
              <span>A</span>
            </div>
            <div class="card-body">
              <div class="field"><span class="label">Property Condition</span><span class="value">Per rental disclosure</span></div>
              <div class="field"><span class="label">Known Defects</span><span class="value flag">Review for match</span></div>
              <div class="field"><span class="label">Systems (HVAC, roof, plumbing)</span><span class="value">Per rental disclosure</span></div>
              <div class="field"><span class="label">Repairs / Work History</span><span class="value flag">Review for match</span></div>
              <div class="field"><span class="label">Flood / Water / Mold</span><span class="value flag">Review for match</span></div>
              <div class="field"><span class="label">HOA / Restrictions</span><span class="value">Per rental disclosure</span></div>
              <div class="field"><span class="label">Lead Paint / Asbestos</span><span class="value flag">Review for match</span></div>
              <div class="field"><span class="label">Seller / Landlord Signed</span><span class="value">Confirm signature date</span></div>
            </div>
          </div>

          <div class="nu-listing-card forsale">
            <div class="card-header">
              <span>For-Sale Listing</span>
              <span>B</span>
            </div>
            <div class="card-body">
              <div class="field"><span class="label">Property Condition</span><span class="value">Per sale disclosure</span></div>
              <div class="field"><span class="label">Known Defects</span><span class="value flag">Review for match</span></div>
              <div class="field"><span class="label">Systems (HVAC, roof, plumbing)</span><span class="value">Per sale disclosure</span></div>
              <div class="field"><span class="label">Repairs / Work History</span><span class="value flag">Review for match</span></div>
              <div class="field"><span class="label">Flood / Water / Mold</span><span class="value flag">Review for match</span></div>
              <div class="field"><span class="label">HOA / Restrictions</span><span class="value">Per sale disclosure</span></div>
              <div class="field"><span class="label">Lead Paint / Asbestos</span><span class="value flag">Review for match</span></div>
              <div class="field"><span class="label">Seller / Landlord Signed</span><span class="value">Confirm signature date</span></div>
            </div>
          </div>
        </div>

        <div class="nu-discrepancy">
          <h3>Why This Matters</h3>
          <p>
            A disclosure attached to a rental listing and a disclosure attached to a for-sale listing are two
            separate legal representations. If they contradict each other, one of three things is true:
          </p>
          <ul>
            <li>One listing was updated and the other was not — simple lag.</li>
            <li>The property condition materially changed between listings.</li>
            <li>A material fact is being under-stated on one of the two listings.</li>
          </ul>
          <p style="margin-top:12px;">
            In every case, the buyer (us) needs the gap <em>in writing</em> before moving forward. Verbal
            clarifications do not protect the buyer at closing or in litigation.
          </p>
        </div>
      </section>

      <!-- ACTION PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title">Action <span>Plan</span></h2>
        <p class="nu-section-intro">
          Five steps, in order. Do not skip. Each step produces a written artifact we keep in the deal file.
        </p>
        <ol class="nu-steps">
          <li>
            <span class="step-title">Pull both listing disclosure packets</span>
            <span class="step-body">
              Download the rental listing disclosure (and any addenda) and the for-sale listing disclosure (and any
              addenda). Save PDFs with clear filenames to the property folder. Include the MLS printout and the
              rental site printout as evidence of what was publicly represented.
            </span>
          </li>
          <li>
            <span class="step-title">Build a line-by-line comparison</span>
            <span class="step-body">
              Using the side-by-side template above, mark every field where rental and sale disclosures disagree,
              or where one has data and the other does not. List the discrepancies in a single written document —
              do not work from memory.
            </span>
          </li>
          <li>
            <span class="step-title">Request written clarification from the listing agent / owner</span>
            <span class="step-body">
              Send the discrepancy list to the listing agent (copy the owner where appropriate). Ask for a written
              response item-by-item: which disclosure is current, why the other differs, and a signed amended
              disclosure if facts have changed. Give a reasonable response deadline (suggest 5 business days).
            </span>
          </li>
          <li>
            <span class="step-title">Have attorney review the response</span>
            <span class="step-body">
              Before acting on any answer, run the response past our real-estate attorney. Material
              misrepresentation and failure-to-disclose exposure varies by state; the attorney confirms whether the
              written answer closes the gap or whether a survey, inspection, or environmental report is still
              needed.
            </span>
          </li>
          <li>
            <span class="step-title">Decide: proceed, re-price, or walk</span>
            <span class="step-body">
              Only after steps 1–4 are documented do we decide. Options: proceed with full written amended
              disclosure in hand; re-price to account for unknowns; walk. Do not sign, wire, or deposit anything
              until the file is clean.
            </span>
          </li>
        </ol>
      </section>

      <!-- RISK TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Risk <span>Assessment</span></h2>
        <p class="nu-section-intro">
          What we are protecting against by not skipping this step.
        </p>
        <table class="nu-risk-table">
          <thead>
            <tr>
              <th>Risk</th>
              <th>What It Looks Like</th>
              <th>Severity</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Undisclosed material defect</td>
              <td>Condition noted on rental listing (leak, prior damage) omitted from sale disclosure.</td>
              <td><span class="nu-severity high">High</span></td>
              <td>Written amended sale disclosure required before offer.</td>
            </tr>
            <tr>
              <td>Conflicting condition representations</td>
              <td>Rental says "as-is, tenant-maintained"; sale says "move-in ready." Buyer relying on sale version has weaker footing.</td>
              <td><span class="nu-severity high">High</span></td>
              <td>Reconcile in writing; inspection contingency stays active until reconciled.</td>
            </tr>
            <tr>
              <td>Stale disclosure</td>
              <td>One of the two listings was not updated after a recent repair, addition, or claim.</td>
              <td><span class="nu-severity med">Medium</span></td>
              <td>Request signed amended disclosure dated within 30 days of offer.</td>
            </tr>
            <tr>
              <td>HOA / restriction mismatch</td>
              <td>Rental says no HOA restrictions; sale says HOA governs exterior changes, or vice versa.</td>
              <td><span class="nu-severity med">Medium</span></td>
              <td>Pull HOA documents directly — do not rely on listing summary.</td>
            </tr>
            <tr>
              <td>Signature / date gap</td>
              <td>One disclosure is unsigned or outdated by more than 6 months.</td>
              <td><span class="nu-severity low">Low</span></td>
              <td>Request fresh signature and date from seller.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- RECOMMENDATION -->
      <section class="nu-section">
        <h2 class="nu-section-title">Recommendation <span>from the File</span></h2>
        <div class="nu-recommendation">
          <h3>Do Not Move Forward Until the Disclosures Agree — In Writing</h3>
          <p>
            A two-track listing (rental + for-sale) with non-matching disclosures is a yellow flag, not a deal
            killer. It is resolvable. But it must be resolved on paper, signed by the seller, and reviewed by our
            attorney before any earnest money or letter of intent moves.
          </p>
          <p>
            The cost of pausing to reconcile is a few days and a few attorney hours. The cost of skipping
            reconciliation and discovering the defect after closing is materially larger.
          </p>
          <div class="decision-line">
            Next action: pull both listing packets, build the discrepancy list, send written request to listing
            agent. Then — and only then — schedule the attorney review call.
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>