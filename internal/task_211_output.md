<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Modify & Re-Ship Bucket Cover for Correct Sizing — Norris Utilities®</title>
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
      --nu-alert-red: #C83232;
      --nu-alert-amber: #E8A317;
      --nu-success-green: #2D8A4A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
      opacity: 0.95;
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 60px; display: block; }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 40px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 650px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 20px;
    }

    /* ══ DOCUMENT META STRIP ══ */
    .doc-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      padding: 14px 22px;
      background: linear-gradient(90deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      margin-bottom: 32px;
      font-size: 0.88rem;
      color: var(--nu-dark-text);
    }
    .doc-meta strong { color: var(--nu-blue); font-weight: 700; letter-spacing: 0.03em; text-transform: uppercase; font-size: 0.78rem; margin-right: 6px; }
    .doc-meta .meta-pill {
      display: inline-flex;
      align-items: center;
      padding: 5px 12px;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    /* ══ PAGE TITLE ══ */
    .page-title-block {
      margin-bottom: 36px;
      padding-bottom: 22px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .eyebrow {
      display: inline-block;
      font-weight: 900;
      color: var(--nu-cyan);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-size: 0.78rem;
      margin-bottom: 10px;
      padding: 4px 10px;
      background: var(--nu-navy);
      border-radius: 3px;
    }
    h1.page-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }
    h1.page-title .accent { color: var(--nu-blue); }
    .subtitle {
      margin-top: 10px;
      font-size: 1.05rem;
      color: #555;
      font-weight: 400;
    }

    /* ══ SECTION HEADERS ══ */
    .section-title {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
      margin: 36px 0 14px;
      letter-spacing: 0.01em;
    }
    .section-title span { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ ALERT BANNER ══ */
    .alert-banner {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      background: linear-gradient(135deg, #FFF8E1 0%, #FFF3CC 100%);
      border: 1px solid var(--nu-alert-amber);
      border-left: 5px solid var(--nu-alert-amber);
      padding: 18px 22px;
      border-radius: 6px;
      margin-bottom: 28px;
    }
    .alert-banner .icon {
      flex-shrink: 0;
      width: 28px; height: 28px;
      background: var(--nu-alert-amber);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900;
    }
    .alert-banner .body strong { color: #8a5a00; display: block; font-size: 1rem; margin-bottom: 3px; }
    .alert-banner .body { color: #5e3f00; font-size: 0.94rem; }

    /* ══ BADGE ROW ══ */
    .badge-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin: 28px 0;
    }
    .info-badge {
      display: flex;
      align-items: center;
      gap: 14px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 20px;
      border-radius: 6px;
      border-left: 4px solid var(--nu-cyan);
    }
    .info-badge .label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--nu-cyan); display: block; margin-bottom: 3px; }
    .info-badge .value { font-weight: 700; font-size: 1rem; }

    /* ══ CARDS ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }
    .nu-card h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.15rem;
      margin-bottom: 12px;
    }
    .nu-card p { margin-bottom: 10px; }

    /* ══ STEPS LIST ══ */
    .steps-list {
      counter-reset: step;
      list-style: none;
      padding: 0;
    }
    .steps-list li {
      counter-increment: step;
      display: flex;
      gap: 18px;
      padding: 18px 20px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      margin-bottom: 10px;
      transition: all 0.2s ease;
    }
    .steps-list li:hover {
      border-left-color: var(--nu-cyan);
      box-shadow: 0 4px 14px rgba(0,0,0,0.06);
    }
    .steps-list li::before {
      content: counter(step);
      flex-shrink: 0;
      width: 38px; height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900;
      font-size: 1.05rem;
    }
    .steps-list .step-body { flex: 1; }
    .steps-list .step-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .steps-list .step-detail {
      font-size: 0.92rem;
      color: #555;
    }

    /* ══ SPEC TABLE ══ */
    .spec-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 1px 6px rgba(0,0,0,0.05);
      margin-bottom: 18px;
    }
    .spec-table th, .spec-table td {
      padding: 12px 18px;
      text-align: left;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .spec-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }
    .spec-table tr:last-child td { border-bottom: none; }
    .spec-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .spec-table .label-cell { font-weight: 700; color: var(--nu-dark-text); width: 35%; }
    .spec-table .delta { color: var(--nu-alert-red); font-weight: 700; }
    .spec-table .good { color: var(--nu-success-green); font-weight: 700; }

    /* ══ CHECKLIST ══ */
    .check-list {
      list-style: none;
      padding: 0;
    }
    .check-list li {
      display: flex;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .check-list li:last-child { border-bottom: none; }
    .check-list .checkbox {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
    }

    /* ══ CALLOUT QUOTE ══ */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.03) 0%, rgba(6,208,255,0.05) 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 4px;
      margin: 22px 0;
      font-style: italic;
      color: var(--nu-dark-text);
    }
    .callout strong { font-style: normal; color: var(--nu-blue); display: block; margin-bottom: 5px; letter-spacing: 0.04em; text-transform: uppercase; font-size: 0.8rem; }

    /* ══ TWO COLUMN ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 18px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #000099 100%);
      color: rgba(255,255,255,0.85);
      padding: 46px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.85;
    }
    .nu-footer-contact strong { color: var(--nu-white); }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .nu-footer-contact a:hover { color: var(--nu-white); }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-wrap { padding: 32px 20px 20px; }
      h1.page-title { font-size: 1.65rem; }
      .two-col { grid-template-columns: 1fr; }
      .doc-meta { font-size: 0.82rem; }
      .steps-list li { padding: 14px; gap: 12px; }
      .steps-list li::before { width: 32px; height: 32px; font-size: 0.95rem; }
      .nu-footer-contact { font-size: 0.9rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .steps-list li { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L58 22 L72 12 L62 28 L80 24 L66 38 L76 52 L56 42 L50 62 L44 42 L24 52 L34 38 L20 24 L38 28 L28 12 L42 22 Z" fill="white" opacity="0.92"/>
      <path d="M50 58 L53 72 L60 67 L55 78 L50 96 L45 78 L40 67 L47 72 Z" fill="white" opacity="0.82"/>
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

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- DOC META -->
      <div class="doc-meta">
        <div><strong>Source</strong> reMarkable Capture → Action Queue</div>
        <div><strong>Captured</strong> 2026-04-15</div>
        <div><strong>Owner</strong> Aaron C. Norris</div>
        <span class="meta-pill">Open · High Priority</span>
      </div>

      <!-- PAGE TITLE -->
      <div class="page-title-block">
        <span class="eyebrow">Internal Action Item</span>
        <h1 class="page-title">Modify Shipped <span class="accent">Bucket Cover</span> &amp; Re-Ship for Correct Sizing</h1>
        <p class="subtitle">Recall the unit from the customer, correct the dimensions in-shop, confirm fit, and re-ship — protecting the FlexPro Armor fit guarantee and the customer relationship.</p>
      </div>

      <!-- ALERT BANNER -->
      <div class="alert-banner">
        <div class="icon">!</div>
        <div class="body">
          <strong>Customer has a sizing issue on a delivered unit.</strong>
          Unit must be retrieved, re-sized to the confirmed bucket dimensions, and returned to the customer. Freight and turnaround time are on Norris Utilities® — this is our fit commitment.
        </div>
      </div>

      <!-- INFO BADGES -->
      <div class="badge-row">
        <div class="info-badge">
          <div>
            <span class="label">Product</span>
            <span class="value">FlexPro Armor Bucket Cover</span>
          </div>
        </div>
        <div class="info-badge">
          <div>
            <span class="label">Action Type</span>
            <span class="value">Re-size &amp; Re-ship</span>
          </div>
        </div>
        <div class="info-badge">
          <div>
            <span class="label">Cost Center</span>
            <span class="value">Fit Warranty (Norris-absorbed)</span>
          </div>
        </div>
      </div>

      <!-- SITUATION -->
      <h2 class="section-title"><span>The</span> Situation</h2>
      <div class="nu-card">
        <p>A FlexPro Armor bucket cover was shipped to the customer but does not fit the bucket correctly. Per the action note captured on the reMarkable, the next step is to <strong>modify the cover to the proper size and ship it back to the customer</strong>.</p>
        <p>Because FlexPro Armor covers are handmade in the USA to customer-supplied bucket measurements, a sizing miss typically traces to one of three points: (1) the measurement taken at quote, (2) the dimension entered on the build ticket, or (3) a change to the bucket or liner after measurement. Root cause must be logged before the unit goes back to production — so the same gap does not repeat.</p>
        <div class="callout">
          <strong>Promise to the customer</strong>
          The cover will fit the bucket it was built for. If it doesn't, we pick it up, fix it, and ship it back — on our dime and on a tight clock.
        </div>
      </div>

      <!-- MEASUREMENT CONFIRMATION -->
      <h2 class="section-title"><span>Measurement</span> Confirmation</h2>
      <p style="margin-bottom: 12px; font-size: 0.95rem;">Before the cover leaves the shop a second time, confirm the bucket dimensions in writing with the customer. Standard Norris Utilities® sizing reference:</p>

      <table class="spec-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Configuration</th>
            <th>Nominal Dimensions</th>
            <th>Competitor Equivalent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">NU-BC-2851</td>
            <td>2-Man Cover</td>
            <td>28" × 51"</td>
            <td>Their "24 × 48"</td>
          </tr>
          <tr>
            <td class="label-cell">NU-BC-2834</td>
            <td>1.5-Man Cover</td>
            <td>28" × 34"</td>
            <td>Their "24 × 34"</td>
          </tr>
          <tr>
            <td class="label-cell">NU-BC-2851-C</td>
            <td>2-Man Combo</td>
            <td>28" × 51" + liner</td>
            <td>—</td>
          </tr>
          <tr>
            <td class="label-cell">NU-BC-2834-C</td>
            <td>1.5-Man Combo</td>
            <td>28" × 34" + liner</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      <!-- EXECUTION STEPS -->
      <h2 class="section-title"><span>Execution</span> Plan</h2>
      <ol class="steps-list">
        <li>
          <div class="step-body">
            <div class="step-title">Call the customer — same day</div>
            <div class="step-detail">Apologize for the miss. Confirm the exact bucket make/model and re-measure inside length, inside width, and depth. Note any hardware (controls, liners, top rails) that affect fit.</div>
          </div>
        </li>
        <li>
          <div class="step-body">
            <div class="step-title">Issue a return label</div>
            <div class="step-detail">Prepaid UPS/FedEx Ground return label emailed directly to the customer. Do not make the customer pay or wait. Freight cost posts to the Fit Warranty cost center.</div>
          </div>
        </li>
        <li>
          <div class="step-body">
            <div class="step-title">Receive &amp; inspect the returned unit</div>
            <div class="step-detail">Log receipt in the shop ticket. Photograph the cover on the bench, note original build dimensions stamped on the tag, and confirm which panels/seams require re-work.</div>
          </div>
        </li>
        <li>
          <div class="step-body">
            <div class="step-title">Re-measure against confirmed bucket dimensions</div>
            <div class="step-detail">Cross-check corrected measurements against the NU SKU table above. If the bucket is closer to a different SKU than originally built, re-build rather than alter — a re-sized cover is only acceptable when the delta is within rework tolerance.</div>
          </div>
        </li>
        <li>
          <div class="step-body">
            <div class="step-title">Modify the cover in-shop</div>
            <div class="step-detail">Adjust panels, re-stitch per FlexPro Armor construction spec, and re-apply the Norris Utilities® tag with corrected dimensions and revised build date.</div>
          </div>
        </li>
        <li>
          <div class="step-body">
            <div class="step-title">QC — fit mock &amp; photo record</div>
            <div class="step-detail">If a matching test bucket is in-shop, dry-fit before boxing. Take four photos: flat, folded, tag close-up, and dry-fit (or dimension-on-tape if no bucket available). Attach to the job file.</div>
          </div>
        </li>
        <li>
          <div class="step-body">
            <div class="step-title">Re-ship with expedited freight</div>
            <div class="step-detail">Standard FlexPro Armor packaging. Tracking number texted to the customer. Apply Ben's Shipping Formula for internal accounting: CustomerCost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0) — but this shipment is <strong>no-charge</strong> to the customer.</div>
          </div>
        </li>
        <li>
          <div class="step-body">
            <div class="step-title">Confirmation call — 48 hours after delivery</div>
            <div class="step-detail">Aaron calls personally. Confirm fit, ask about feel on the bucket, and close the loop. Update the customer record and close the action item.</div>
          </div>
        </li>
      </ol>

      <!-- QUALITY TRACKING -->
      <h2 class="section-title"><span>Quality &amp;</span> Root Cause</h2>
      <div class="two-col">
        <div class="nu-card">
          <h3>Where Did the Miss Happen?</h3>
          <ul class="check-list">
            <li><span class="checkbox"></span><span>Measurement at quote (customer-supplied)</span></li>
            <li><span class="checkbox"></span><span>Measurement at quote (Norris-taken)</span></li>
            <li><span class="checkbox"></span><span>Dimension entry on build ticket</span></li>
            <li><span class="checkbox"></span><span>Production cut / stitch variance</span></li>
            <li><span class="checkbox"></span><span>Bucket changed between measure &amp; ship</span></li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Prevent the Next One</h3>
          <ul class="check-list">
            <li><span class="checkbox"></span><span>Log this customer &amp; bucket model in the measurement crib-sheet</span></li>
            <li><span class="checkbox"></span><span>Add a measurement photo requirement to the quote step</span></li>
            <li><span class="checkbox"></span><span>Second set of eyes on build ticket before cut</span></li>
            <li><span class="checkbox"></span><span>Stamp-check dimensions on the tag before pack-out</span></li>
          </ul>
        </div>
      </div>

      <!-- COMMUNICATION -->
      <h2 class="section-title"><span>Customer</span> Communication</h2>
      <div class="nu-card">
        <h3>Tone &amp; Message</h3>
        <p>Lead with ownership — not excuses. Aaron's voice: direct, warm, no filler. Confirm we are handling everything: pickup, re-work, return freight, and a personal call after delivery. The customer should not have to ask where their cover is at any point in this cycle.</p>
        <div class="callout" style="font-style: normal;">
          <strong>Draft line Aaron can send</strong>
          <em>"Name —</em><br><br>
          <em>Appreciate you flagging the fit issue. That's on us to fix, and we're picking it up today. A prepaid return label is on its way to your inbox. Once it hits the shop, we'll correct the sizing, re-tag it, and get it back to you this week. I'll call you personally after it arrives to make sure it's right.</em><br><br>
          <em>Sincerely,</em><br>
          <em>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris"</em>
        </div>
      </div>

      <!-- CLOSE-OUT -->
      <h2 class="section-title"><span>Close-Out</span> Checklist</h2>
      <div class="nu-card">
        <ul class="check-list">
          <li><span class="checkbox"></span><span><strong>Customer confirmed fit is correct</strong> — verbal and in writing (email/text)</span></li>
          <li><span class="checkbox"></span><span>Job file updated with before/after photos and corrected tag data</span></li>
          <li><span class="checkbox"></span><span>Fit Warranty cost tracked (freight both ways + re-work hours)</span></li>
          <li><span class="checkbox"></span><span>Root-cause note added to the shop quality log</span></li>
          <li><span class="checkbox"></span><span>Action item marked closed in the reMarkable capture queue</span></li>
        </ul>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>