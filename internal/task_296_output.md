<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Disclosure Discrepancy (Rental vs. For-Sale) — Norris Utilities®</title>
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
      --nu-warn-amber: #C47A00;
      --nu-warn-amber-bg: #FFF6E5;
      --nu-alert-red: #B3261E;
      --nu-alert-red-bg: #FDECEA;
      --nu-ok-green: #0B6E3F;
      --nu-ok-green-bg: #E8F5EC;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 35%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 520px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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
      font-size: 1.25rem;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 0 0 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1040px;
      margin: 0 auto;
      padding: 48px 28px 0;
    }

    /* ══ TITLE BLOCK ══ */
    .task-pill {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      padding: 6px 16px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    h1.page-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    h1.page-title .first-word { color: #0033cc; }
    .page-subtitle {
      font-size: 1.02rem;
      color: #555;
      margin-bottom: 28px;
      font-weight: 400;
    }

    /* ══ STATUS BAR ══ */
    .status-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 32px;
    }
    .status-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 14px 16px;
    }
    .status-cell .label {
      font-size: 0.68rem;
      font-weight: 700;
      color: #888;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .status-cell .value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.35;
    }
    .status-cell.amber { border-left-color: var(--nu-warn-amber); }
    .status-cell.amber .value { color: var(--nu-warn-amber); }

    /* ══ SECTION HEADERS ══ */
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-top: 36px;
      margin-bottom: 14px;
      color: var(--nu-dark-text);
    }
    .section-title .first-word { color: #0033cc; }

    /* ══ ALERT CARD ══ */
    .alert-card {
      background: var(--nu-alert-red-bg);
      border-left: 6px solid var(--nu-alert-red);
      border-radius: 6px;
      padding: 20px 24px;
      margin-bottom: 28px;
    }
    .alert-card .tag {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-alert-red);
      margin-bottom: 8px;
    }
    .alert-card p {
      color: #4a1a17;
      font-size: 1rem;
      line-height: 1.6;
    }

    /* ══ COMPARISON TABLE ══ */
    .compare {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 28px;
    }
    .compare-col {
      padding: 24px 26px;
    }
    .compare-col.rental {
      background: #F4F7FF;
      border-right: 1px solid var(--nu-medium-gray);
    }
    .compare-col.sale {
      background: var(--nu-white);
    }
    .compare-col h3 {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 6px;
    }
    .compare-col h3 .kicker {
      display: block;
      font-size: 1.2rem;
      font-weight: 900;
      letter-spacing: 0;
      text-transform: none;
      color: var(--nu-dark-text);
      margin-top: 4px;
    }
    .compare-col.rental h3 .kicker { color: #0033cc; }
    .compare-col ul {
      list-style: none;
      padding: 0;
      margin: 14px 0 0;
    }
    .compare-col li {
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .compare-col li:last-child { border-bottom: none; }
    .compare-col li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 3px;
    }
    .diff-flag {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 3px;
      margin-left: 6px;
      background: var(--nu-warn-amber-bg);
      color: var(--nu-warn-amber);
    }

    /* ══ ACTION STEPS ══ */
    .steps {
      list-style: none;
      counter-reset: step;
      padding: 0;
    }
    .steps li {
      counter-increment: step;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 24px 20px 74px;
      margin-bottom: 12px;
      position: relative;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .steps li::before {
      content: counter(step);
      position: absolute;
      left: 18px;
      top: 18px;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .steps li h4 {
      font-weight: 700;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .steps li p {
      font-size: 0.94rem;
      color: #555;
    }
    .steps li .meta {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-top: 8px;
    }

    /* ══ QUESTIONS ══ */
    .q-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 26px;
      margin-bottom: 12px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      display: grid;
      grid-template-columns: 44px 1fr;
      gap: 16px;
      align-items: start;
    }
    .q-card .qmark {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
    }
    .q-card p { color: var(--nu-dark-text); font-weight: 400; font-size: 0.98rem; }

    /* ══ DECISION TREE ══ */
    .decision-box {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 24px;
    }
    .decision-box h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      letter-spacing: 0.04em;
      margin-bottom: 14px;
    }
    .branches {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
    }
    .branch {
      padding: 16px 18px;
      border-radius: 8px;
      border-left: 4px solid;
    }
    .branch.ok { background: var(--nu-ok-green-bg); border-color: var(--nu-ok-green); }
    .branch.ok .head { color: var(--nu-ok-green); }
    .branch.amber { background: var(--nu-warn-amber-bg); border-color: var(--nu-warn-amber); }
    .branch.amber .head { color: var(--nu-warn-amber); }
    .branch.red { background: var(--nu-alert-red-bg); border-color: var(--nu-alert-red); }
    .branch.red .head { color: var(--nu-alert-red); }
    .branch .head {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .branch p { font-size: 0.92rem; color: #333; }

    /* ══ DOCUMENTS ══ */
    .docs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
    }
    .doc {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 16px 18px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .doc .name {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 0.95rem;
    }
    .doc .need {
      font-size: 0.78rem;
      color: #777;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px 24px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .compare { grid-template-columns: 1fr; }
      .compare-col.rental { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
      .status-bar { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 560px) {
      .nu-header { padding: 44px 20px 64px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1rem; }
      h1.page-title { font-size: 1.55rem; }
      .status-bar { grid-template-columns: 1fr; }
      .q-card { grid-template-columns: 1fr; }
      .q-card .qmark { margin-bottom: 6px; }
    }

    @media print {
      body { background: #fff; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .steps li, .q-card, .decision-box, .doc, .compare, .status-cell { box-shadow: none; }
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <span class="task-pill">reMarkable Action Item · Due Diligence</span>
      <h1 class="page-title"><span class="first-word">Address</span> Disclosure Discrepancy — Rental vs. For-Sale Listing</h1>
      <p class="page-subtitle">Material facts disclosed on the prior rental listing must reconcile with what appears on the current for-sale listing before any offer is advanced or any deposit is committed.</p>

      <!-- STATUS BAR -->
      <div class="status-bar">
        <div class="status-cell amber">
          <div class="label">Status</div>
          <div class="value">Open — Needs Reconciliation</div>
        </div>
        <div class="status-cell">
          <div class="label">Owner</div>
          <div class="value">Aaron C. Norris</div>
        </div>
        <div class="status-cell">
          <div class="label">Priority</div>
          <div class="value">High — Pre-Offer Gate</div>
        </div>
        <div class="status-cell">
          <div class="label">Source</div>
          <div class="value">reMarkable Notes · 2026-04-22</div>
        </div>
      </div>

      <!-- ALERT -->
      <div class="alert-card">
        <div class="tag">Why This Matters</div>
        <p>If the rental listing disclosed a condition (roof age, HVAC age, water issue, system defect, known repair, pest history, square footage, bedroom count, or any material fact) and the current for-sale listing either <strong>omits</strong> it or <strong>contradicts</strong> it, that gap is the most important thing to resolve before writing an offer. Unreconciled discrepancies become either a negotiating lever or a walk-away.</p>
      </div>

      <!-- SIDE BY SIDE -->
      <h2 class="section-title"><span class="first-word">Compare</span> Both Listings Line by Line</h2>
      <div class="compare">
        <div class="compare-col rental">
          <h3>Prior Listing<span class="kicker">Rental Version</span></h3>
          <ul>
            <li><strong>Bedrooms / Baths</strong>Record rental count exactly as published.</li>
            <li><strong>Square Footage</strong>Rental sqft figure (heated &amp; cooled).</li>
            <li><strong>Year Built / Renovated</strong>Any dates stated in rental copy.</li>
            <li><strong>Included Systems</strong>HVAC, appliances, water heater — as listed for tenant.</li>
            <li><strong>Known Conditions</strong>Any wear, age, or maintenance items stated to tenant.</li>
            <li><strong>Utilities / Fees</strong>Avg. utilities, HOA, special assessments listed for rental.</li>
            <li><strong>Restrictions</strong>Pets, short-term rental rules, leasebacks disclosed.</li>
          </ul>
        </div>
        <div class="compare-col sale">
          <h3>Current Listing<span class="kicker">For-Sale Version</span></h3>
          <ul>
            <li><strong>Bedrooms / Baths <span class="diff-flag">Verify</span></strong>Does count match? Flag any difference in room type coding.</li>
            <li><strong>Square Footage <span class="diff-flag">Verify</span></strong>Same sqft? Or does sale listing inflate/reduce?</li>
            <li><strong>Year Built / Renovated</strong>Does sale version add renovations not referenced at rental?</li>
            <li><strong>Included Systems <span class="diff-flag">Verify</span></strong>Same HVAC age? Any system swapped or downgraded?</li>
            <li><strong>Seller Disclosure Form</strong>Does SPD match conditions previously shared with tenants?</li>
            <li><strong>Utilities / Fees</strong>HOA figure consistent? New assessments not disclosed at rental?</li>
            <li><strong>Restrictions</strong>Any encumbrance, easement, or deed restriction newly relevant?</li>
          </ul>
        </div>
      </div>

      <!-- ACTION STEPS -->
      <h2 class="section-title"><span class="first-word">Action</span> Plan</h2>
      <ol class="steps">
        <li>
          <h4>Pull both listings in full, timestamped</h4>
          <p>Screenshot or save PDF of the prior rental listing (MLS archive, Zillow/Trulia history, Apartments.com, Facebook Marketplace, property manager archive) and the current for-sale listing. Preserve listing IDs, list dates, and agent of record on both.</p>
          <span class="meta">Deliverable: two PDFs saved to deal folder</span>
        </li>
        <li>
          <h4>Build a side-by-side reconciliation sheet</h4>
          <p>Column A = Attribute. Column B = Rental listing value. Column C = For-sale listing value. Column D = Match / Differ / Silent. Focus on material facts first: sqft, beds/baths, year built, HVAC/roof/water heater age, prior flooding, pest history, HOA/assessments, easements, and any renovations claimed.</p>
          <span class="meta">Deliverable: reconciliation sheet</span>
        </li>
        <li>
          <h4>Obtain the Seller's Property Disclosure (SPD)</h4>
          <p>Request the signed SPD from the listing agent. Compare every answer against what was stated or implied to prior tenants in the rental listing or rental agreement.</p>
          <span class="meta">Deliverable: signed SPD in file</span>
        </li>
        <li>
          <h4>Write the discrepancy log</h4>
          <p>For each item that differs or is silent on one side, note: (a) what the rental said, (b) what the sale listing/SPD says, (c) the real-world cost or risk if the more unfavorable version is true, (d) the question to put to the seller in writing.</p>
          <span class="meta">Deliverable: discrepancy log with dollar-risk column</span>
        </li>
        <li>
          <h4>Send written clarification request to listing agent</h4>
          <p>Request a written, dated response — not a phone call. Paper creates the record. Reference both listings by ID and date, and ask point-blank which version is accurate and why the other existed.</p>
          <span class="meta">Deliverable: email sent, reply saved</span>
        </li>
        <li>
          <h4>Decide: price adjustment, inspection scope-up, or walk</h4>
          <p>Based on the written response, pick one path from the decision tree below before any earnest money is committed.</p>
          <span class="meta">Deliverable: go / no-go decision documented</span>
        </li>
      </ol>

      <!-- QUESTIONS -->
      <h2 class="section-title"><span class="first-word">Questions</span> to Put in Writing</h2>
      <div class="q-card"><div class="qmark">?</div><p>The prior rental listing stated <em>[specific attribute/condition]</em>. The for-sale listing does not reference it. Is that item still present, and if so, what is its current condition, age, and warranty status?</p></div>
      <div class="q-card"><div class="qmark">?</div><p>Square footage differs between the rental listing (X sqft) and the for-sale listing (Y sqft). Which figure is accurate, and what is the source — tax card, appraisal, or builder plan?</p></div>
      <div class="q-card"><div class="qmark">?</div><p>Were any repairs, renovations, or system replacements performed between the end of the last tenancy and the current sale listing? Please provide receipts and permits.</p></div>
      <div class="q-card"><div class="qmark">?</div><p>Has the property had any insurance claims, flood events, pest treatments, or foundation work that were disclosed to prior tenants but do not appear on the SPD? If so, why?</p></div>
      <div class="q-card"><div class="qmark">?</div><p>Are the current HOA fees, special assessments, and deed restrictions identical to what was represented to tenants? Please provide the current HOA disclosure packet.</p></div>
      <div class="q-card"><div class="qmark">?</div><p>Is the current listing agent the same broker or related to the broker of the prior rental listing? If so, what steps were taken to reconcile the two representations?</p></div>

      <!-- DECISION TREE -->
      <h2 class="section-title"><span class="first-word">Decision</span> Tree — After the Written Reply</h2>
      <div class="decision-box">
        <h4>Based on the seller's written clarification, take one of three paths:</h4>
        <div class="branches">
          <div class="branch ok">
            <div class="head">Path A — Proceed</div>
            <p>Discrepancies are explained by documented updates (receipts, permits, warranties). Conditions match SPD. Proceed with offer at intended price.</p>
          </div>
          <div class="branch amber">
            <div class="head">Path B — Price / Scope Adjust</div>
            <p>Rental version reveals items the sale listing downplayed. Reduce offer by repair/risk cost, or expand inspection scope (sewer scope, roof cert, HVAC cert, pest letter) and make offer contingent on results.</p>
          </div>
          <div class="branch red">
            <div class="head">Path C — Walk</div>
            <p>Seller refuses to answer in writing, answers are evasive, or the SPD is inconsistent with demonstrable rental-listing facts. Signals concealment. Walk, and keep the written record.</p>
          </div>
        </div>
      </div>

      <!-- DOCUMENTS -->
      <h2 class="section-title"><span class="first-word">Documents</span> to Collect</h2>
      <div class="docs-grid">
        <div class="doc"><div class="name">Prior rental listing (full PDF)</div><div class="need">MLS archive or tenant platform</div></div>
        <div class="doc"><div class="name">Current for-sale listing (full PDF)</div><div class="need">MLS + syndicated feed</div></div>
        <div class="doc"><div class="name">Seller's Property Disclosure (signed)</div><div class="need">From listing agent</div></div>
        <div class="doc"><div class="name">Most recent rental lease + inspection move-in/out</div><div class="need">From seller / PM</div></div>
        <div class="doc"><div class="name">Renovation receipts &amp; permits</div><div class="need">From seller; verify with county</div></div>
        <div class="doc"><div class="name">HOA disclosure packet &amp; assessment history</div><div class="need">From HOA management</div></div>
        <div class="doc"><div class="name">Tax card / public record sqft</div><div class="need">County assessor site</div></div>
        <div class="doc"><div class="name">Insurance claim history (CLUE report)</div><div class="need">Request through carrier</div></div>
      </div>

      <!-- NEXT REVIEW -->
      <h2 class="section-title"><span class="first-word">Next</span> Review</h2>
      <div class="decision-box" style="margin-bottom:0;">
        <h4>Revisit this item once all three conditions are met:</h4>
        <div class="branches">
          <div class="branch ok">
            <div class="head">Condition 1</div>
            <p>Both listings archived side-by-side in the deal folder.</p>
          </div>
          <div class="branch ok">
            <div class="head">Condition 2</div>
            <p>Written reply from listing agent received and saved.</p>
          </div>
          <div class="branch ok">
            <div class="head">Condition 3</div>
            <p>Discrepancy log closed — every item marked Match, Explained, or Dealbreaker.</p>
          </div>
        </div>
      </div>

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
  </footer>

</body>
</html>