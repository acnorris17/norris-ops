<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disclosure Discrepancy Review — Rental vs. For-Sale Listing — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --nu-alert-red: #C62828;
      --nu-warn-amber: #E67E22;
      --nu-success-green: #2E7D32;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 50%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 12px;
      opacity: 0.92;
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
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 16px;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      border-radius: 2px;
      backdrop-filter: blur(4px);
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      min-height: 100vh;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 120px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ DOCUMENT TITLE ══ */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-bottom: 28px;
      padding-bottom: 20px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-meta-item { font-size: 0.82rem; }
    .doc-meta-item .label {
      display: block;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.7rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .doc-meta-item .value {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 780px;
      margin-bottom: 36px;
    }

    /* ══ PRIORITY STRIP ══ */
    .priority-strip {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 24px;
      border-radius: 6px;
      margin-bottom: 40px;
      border-left: 6px solid var(--nu-warn-amber);
    }
    .priority-strip .pill {
      background: var(--nu-warn-amber);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      padding: 6px 12px;
      border-radius: 3px;
      white-space: nowrap;
    }
    .priority-strip .msg {
      font-size: 0.95rem;
      font-weight: 400;
    }
    .priority-strip .msg strong { color: var(--nu-cyan); font-weight: 700; }

    /* ══ SECTION HEADER ══ */
    .section {
      margin-bottom: 44px;
    }
    .section-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 18px;
    }
    .section-num {
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.85rem;
      padding: 6px 12px;
      border-radius: 2px;
      min-width: 38px;
      text-align: center;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
    }
    .section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ COMPARE TABLE ══ */
    .compare-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .compare-col {
      background: var(--nu-white);
      padding: 24px;
    }
    .compare-col h3 {
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-white);
      background: var(--nu-blue);
      padding: 10px 14px;
      margin: -24px -24px 18px -24px;
    }
    .compare-col.rental h3 { background: #0033CC; }
    .compare-col.for-sale h3 { background: var(--nu-navy); }
    .compare-row {
      display: grid;
      grid-template-columns: 150px 1fr;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.9rem;
    }
    .compare-row:last-child { border-bottom: none; }
    .compare-row .k {
      color: var(--nu-blue);
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .compare-row .v {
      color: var(--nu-dark-text);
      font-weight: 400;
    }
    .compare-row .v.flag {
      color: var(--nu-alert-red);
      font-weight: 700;
    }
    .compare-row .v.match {
      color: var(--nu-success-green);
      font-weight: 700;
    }

    /* ══ DISCREPANCY CARDS ══ */
    .disc-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 18px;
    }
    .disc-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-alert-red);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .disc-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .disc-card.medium { border-left-color: var(--nu-warn-amber); }
    .disc-card.low { border-left-color: var(--nu-accent-gold); }
    .disc-card .risk {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 2px;
      margin-bottom: 10px;
      color: var(--nu-white);
      background: var(--nu-alert-red);
    }
    .disc-card.medium .risk { background: var(--nu-warn-amber); }
    .disc-card.low .risk { background: var(--nu-accent-gold); }
    .disc-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .disc-card .findings {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .disc-card .findings b { color: var(--nu-blue); }
    .disc-card .impact {
      font-size: 0.82rem;
      color: var(--nu-dark-text);
      background: var(--nu-light-gray);
      padding: 10px 12px;
      border-radius: 4px;
      border-left: 3px solid var(--nu-blue);
    }
    .disc-card .impact b {
      display: block;
      color: var(--nu-blue);
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    /* ══ ACTION LIST ══ */
    .action-list {
      list-style: none;
      counter-reset: action;
    }
    .action-list li {
      counter-increment: action;
      position: relative;
      padding: 18px 20px 18px 70px;
      margin-bottom: 12px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .action-list li::before {
      content: counter(action, decimal-leading-zero);
      position: absolute;
      left: 18px; top: 18px;
      width: 38px; height: 38px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }
    .action-list h5 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .action-list p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .action-list .owner {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-top: 6px;
    }

    /* ══ SIGN-OFF ══ */
    .signoff {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
    .signoff h4 {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 14px;
    }
    .sign-line {
      border-bottom: 1.5px solid var(--nu-dark-text);
      height: 40px;
      margin-bottom: 6px;
    }
    .sign-label {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      font-weight: 700;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      font-size: 0.72rem;
      color: rgba(255,255,255,0.4);
      margin-top: 16px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 40px 20px 60px; }
      .doc-title { font-size: 1.7rem; }
      .compare-grid { grid-template-columns: 1fr; }
      .compare-row { grid-template-columns: 110px 1fr; }
      .signoff { grid-template-columns: 1fr; }
      .priority-strip { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .disc-card, .action-list li { box-shadow: none; border: 1px solid #ccc; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-doc-badge">Due Diligence Review</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- META -->
      <div class="doc-meta">
        <div class="doc-meta-item">
          <span class="label">Action Item</span>
          <span class="value">reMarkable — Listing Audit</span>
        </div>
        <div class="doc-meta-item">
          <span class="label">Prepared For</span>
          <span class="value">Aaron C. Norris, Founder &amp; CEO</span>
        </div>
        <div class="doc-meta-item">
          <span class="label">Date</span>
          <span class="value">April 21, 2026</span>
        </div>
        <div class="doc-meta-item">
          <span class="label">Status</span>
          <span class="value">Open — Review Required</span>
        </div>
      </div>

      <!-- TITLE -->
      <h1 class="doc-title">
        Review Disclosure <span class="accent">Discrepancy</span><br>
        Between Rental and For-Sale Listings
      </h1>
      <p class="doc-subtitle">
        Structured comparison and action plan for reconciling facts, features, condition, and legal disclosures
        that differ between a property's active rental listing and its for-sale listing. Protects buyer/seller position,
        limits liability, and creates a single source of truth before any offer, contract, or closing.
      </p>

      <!-- PRIORITY STRIP -->
      <div class="priority-strip">
        <span class="pill">PRIORITY — REVIEW</span>
        <span class="msg">
          Discrepancies between rental and for-sale marketing of the <strong>same asset</strong> create material-misrepresentation exposure.
          Reconcile both listings before the next buyer inquiry or tenant renewal.
        </span>
      </div>

      <!-- SECTION 1 -->
      <section class="section">
        <div class="section-header">
          <span class="section-num">01</span>
          <h2 class="section-title">Side-by-Side <span>Listing Comparison</span></h2>
        </div>
        <p style="margin-bottom: 18px; font-size: 0.95rem;">
          Pull both the active rental listing and the active for-sale listing into the fields below. Flag every row
          where the two listings describe the same property differently. The columns are the record of truth for this review.
        </p>

        <div class="compare-grid">
          <div class="compare-col rental">
            <h3>Rental Listing</h3>
            <div class="compare-row"><span class="k">Address</span><span class="v">As listed on rental platform</span></div>
            <div class="compare-row"><span class="k">Sq. Footage</span><span class="v flag">Verify — often differs</span></div>
            <div class="compare-row"><span class="k">Bedrooms / Baths</span><span class="v">Confirm count matches title</span></div>
            <div class="compare-row"><span class="k">Year Built</span><span class="v">Per rental record</span></div>
            <div class="compare-row"><span class="k">Lot Size</span><span class="v">Often omitted on rental</span></div>
            <div class="compare-row"><span class="k">Features / Amenities</span><span class="v flag">Check HVAC, appliances, roof</span></div>
            <div class="compare-row"><span class="k">Condition Notes</span><span class="v">Pet policy, wear, as-is?</span></div>
            <div class="compare-row"><span class="k">Disclosures</span><span class="v">Typically lighter on rental</span></div>
            <div class="compare-row"><span class="k">Photos / Date</span><span class="v">Capture rental photo set date</span></div>
            <div class="compare-row"><span class="k">Agent / Landlord</span><span class="v">Listing representative</span></div>
          </div>
          <div class="compare-col for-sale">
            <h3>For-Sale Listing</h3>
            <div class="compare-row"><span class="k">Address</span><span class="v match">Must match exactly</span></div>
            <div class="compare-row"><span class="k">Sq. Footage</span><span class="v flag">Verify — often differs</span></div>
            <div class="compare-row"><span class="k">Bedrooms / Baths</span><span class="v">Per MLS / tax record</span></div>
            <div class="compare-row"><span class="k">Year Built</span><span class="v">Per MLS / tax record</span></div>
            <div class="compare-row"><span class="k">Lot Size</span><span class="v">Per survey / tax parcel</span></div>
            <div class="compare-row"><span class="k">Features / Amenities</span><span class="v flag">Roof / HVAC / systems age</span></div>
            <div class="compare-row"><span class="k">Condition Notes</span><span class="v">Per seller disclosure form</span></div>
            <div class="compare-row"><span class="k">Disclosures</span><span class="v">Formal state disclosure required</span></div>
            <div class="compare-row"><span class="k">Photos / Date</span><span class="v">Capture MLS photo set date</span></div>
            <div class="compare-row"><span class="k">Agent / Landlord</span><span class="v">Listing representative</span></div>
          </div>
        </div>
      </section>

      <!-- SECTION 2 -->
      <section class="section">
        <div class="section-header">
          <span class="section-num">02</span>
          <h2 class="section-title">Common <span>Discrepancy Patterns</span></h2>
        </div>
        <p style="margin-bottom: 18px; font-size: 0.95rem;">
          The categories below are the most frequent sources of conflict between rental and sale marketing
          of the same property. Rate each one for the subject listing as High, Medium, or Low risk.
        </p>

        <div class="disc-grid">

          <div class="disc-card">
            <span class="risk">High Risk</span>
            <h4>Square Footage Mismatch</h4>
            <p class="findings">
              <b>What to check:</b> Rental listings often use measured interior; for-sale listings pull from tax assessor.
              Differences of more than 5&ndash;10% are material.
            </p>
            <div class="impact">
              <b>Impact</b>
              Drives price-per-square-foot analysis, appraisal, and buyer valuation. Inconsistency invites claims of misrepresentation.
            </div>
          </div>

          <div class="disc-card">
            <span class="risk">High Risk</span>
            <h4>Condition / Known Defects</h4>
            <p class="findings">
              <b>What to check:</b> Roof age, HVAC age, plumbing, foundation, prior water intrusion, pest treatment.
              Rental may disclose less; seller disclosure on sale must be complete.
            </p>
            <div class="impact">
              <b>Impact</b>
              Failure to disclose on sale — when the rental file already documents it — is a classic failure-to-disclose lawsuit path.
            </div>
          </div>

          <div class="disc-card medium">
            <span class="risk">Medium Risk</span>
            <h4>Bed / Bath / Room Count</h4>
            <p class="findings">
              <b>What to check:</b> A room marketed as a bedroom on the rental (no closet, no egress window) may not qualify
              legally as a bedroom on the for-sale listing.
            </p>
            <div class="impact">
              <b>Impact</b>
              Changes MLS classification, comparable sales set, and appraisal. Correct before listing.
            </div>
          </div>

          <div class="disc-card medium">
            <span class="risk">Medium Risk</span>
            <h4>Appliances &amp; Fixtures Included</h4>
            <p class="findings">
              <b>What to check:</b> Rental may list washer/dryer/refrigerator as included; for-sale listing may treat them
              as personal property excluded from sale.
            </p>
            <div class="impact">
              <b>Impact</b>
              Handled in purchase agreement, but inconsistent marketing sets false expectations and delays closing.
            </div>
          </div>

          <div class="disc-card medium">
            <span class="risk">Medium Risk</span>
            <h4>HOA, Covenants, or Rental Restrictions</h4>
            <p class="findings">
              <b>What to check:</b> If the rental exists, confirm the HOA actually permits rentals and the sale listing
              accurately represents rental rights to investor buyers.
            </p>
            <div class="impact">
              <b>Impact</b>
              Misrepresenting rental-capability is a frequent cause of rescission for investor buyers.
            </div>
          </div>

          <div class="disc-card low">
            <span class="risk">Low Risk</span>
            <h4>Photography &amp; Staging Differences</h4>
            <p class="findings">
              <b>What to check:</b> Photo set age, staging vs. tenant-occupied condition, seasonal differences in
              landscaping or exterior.
            </p>
            <div class="impact">
              <b>Impact</b>
              Not usually actionable, but outdated photos erode buyer trust and can be used against the seller at negotiation.
            </div>
          </div>

          <div class="disc-card">
            <span class="risk">High Risk</span>
            <h4>Existing Lease Terms</h4>
            <p class="findings">
              <b>What to check:</b> Lease end date, monthly rent, security deposit held, tenant-right-to-remain.
              Sale listing must disclose whether buyer inherits a lease.
            </p>
            <div class="impact">
              <b>Impact</b>
              A lease conveys with title. Nondisclosure is grounds for rescission in most states.
            </div>
          </div>

          <div class="disc-card medium">
            <span class="risk">Medium Risk</span>
            <h4>Utilities &amp; Operating Costs</h4>
            <p class="findings">
              <b>What to check:</b> Average monthly utilities quoted on rental vs. operating-cost summary on sale.
              Should reconcile within reasonable range.
            </p>
            <div class="impact">
              <b>Impact</b>
              Investor buyers underwrite cap rate from these figures. Mismatched numbers kill deals at due diligence.
            </div>
          </div>

          <div class="disc-card low">
            <span class="risk">Low Risk</span>
            <h4>Neighborhood / School District Copy</h4>
            <p class="findings">
              <b>What to check:</b> Marketing language about schools, walkability, and community should not
              contradict itself between the two listings.
            </p>
            <div class="impact">
              <b>Impact</b>
              Rarely litigated, but inconsistencies undermine the professionalism of both listings.
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 3 -->
      <section class="section">
        <div class="section-header">
          <span class="section-num">03</span>
          <h2 class="section-title">Review <span>Action Plan</span></h2>
        </div>

        <ol class="action-list">
          <li>
            <h5>Pull both listings into one file</h5>
            <p>Capture both listings as PDFs with timestamps. Preserve original text, photos, and disclosures exactly as published.</p>
            <span class="owner">Owner: Caroline Butler</span>
          </li>
          <li>
            <h5>Populate the side-by-side comparison (Section 01)</h5>
            <p>Fill every field from each listing. Where a field is blank on one side but present on the other, treat the omission itself as a potential discrepancy.</p>
            <span class="owner">Owner: Caroline Butler</span>
          </li>
          <li>
            <h5>Verify against authoritative records</h5>
            <p>Tax assessor, recorded survey, HOA bylaws, seller disclosure form, and current lease. Treat these — not either listing — as the source of truth.</p>
            <span class="owner">Owner: Aaron C. Norris / Attorney</span>
          </li>
          <li>
            <h5>Rate each discrepancy (High / Medium / Low)</h5>
            <p>Use the Section 02 categories. Any item rated High requires written resolution before the next listing update or buyer inquiry.</p>
            <span class="owner">Owner: Aaron C. Norris</span>
          </li>
          <li>
            <h5>Reconcile the listings</h5>
            <p>Update both listings so facts match. Keep a brief change-log: what was changed, when, and why. Retain the original copies in the file.</p>
            <span class="owner">Owner: Caroline Butler</span>
          </li>
          <li>
            <h5>Formalize disclosure</h5>
            <p>Anything material found during this review must appear in writing on the seller disclosure form and in any buyer information packet. Do not rely on verbal disclosure.</p>
            <span class="owner">Owner: Attorney / Listing Agent</span>
          </li>
          <li>
            <h5>Attorney sign-off for High-risk items</h5>
            <p>Route any High-risk discrepancy to counsel before the listing goes back live or before any offer is accepted. Get written clearance.</p>
            <span class="owner">Owner: Aaron C. Norris</span>
          </li>
          <li>
            <h5>Close the review</h5>
            <p>Mark the action item complete only after all High-risk items are reconciled, attorney sign-off is on file, and both listings reflect identical material facts.</p>
            <span class="owner">Owner: Aaron C. Norris</span>
          </li>
        </ol>
      </section>

      <!-- SECTION 4 -->
      <section class="section">
        <div class="section-header">
          <span class="section-num">04</span>
          <h2 class="section-title">Review <span>Sign-Off</span></h2>
        </div>

        <div class="signoff">
          <div>
            <h4>Prepared By</h4>
            <div class="sign-line"></div>
            <div class="sign-label">Caroline Butler — Administration</div>
          </div>
          <div>
            <h4>Approved By</h4>
            <div class="sign-line"></div>
            <div class="sign-label">Aaron C. Norris — Founder &amp; CEO</div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Internal Review Document — Norris Utilities® — April 21, 2026</div>
  </footer>

</body>
</html>