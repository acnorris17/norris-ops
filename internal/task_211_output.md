<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action: Modify Shipped Bucket Cover & Ship Back for Proper Sizing — Norris Utilities®</title>
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
      --nu-warning: #C9501C;
      --nu-success: #1C7A3E;
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
      min-height: 260px;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 40px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 60%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .container { max-width: 1150px; margin: 0 auto; padding: 60px 40px 20px; position: relative; z-index: 1; }

    /* TITLE BLOCK */
    .action-label {
      display: inline-block;
      background: var(--nu-warning);
      color: var(--nu-white);
      padding: 6px 16px;
      border-radius: 3px;
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    h1.page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    h1.page-title .accent { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 32px;
      max-width: 780px;
    }

    /* META STRIP */
    .meta-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      padding: 18px 24px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      border-radius: 6px;
      color: var(--nu-white);
      margin-bottom: 40px;
      box-shadow: 0 4px 16px rgba(0,0,51,0.15);
    }
    .meta-item { flex: 1 1 200px; min-width: 180px; }
    .meta-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .meta-value { font-size: 1rem; font-weight: 700; color: var(--nu-white); }

    /* SECTION HEADERS */
    .section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 0 0 18px 0;
      letter-spacing: -0.005em;
    }
    .section-title .first { color: var(--nu-blue); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .section-rule {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
      margin-bottom: 22px;
    }
    section { margin-bottom: 48px; }

    /* SITUATION CARD */
    .situation-card {
      background: var(--nu-white);
      border-left: 5px solid var(--nu-warning);
      border-radius: 6px;
      padding: 24px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-top: 1px solid var(--nu-medium-gray);
      border-right: 1px solid var(--nu-medium-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .situation-card p { margin-bottom: 12px; font-size: 1rem; color: var(--nu-body-text); }
    .situation-card p:last-child { margin-bottom: 0; }
    .situation-card strong { color: var(--nu-dark-text); }

    /* SIZING TABLE */
    .sizing-wrap { overflow-x: auto; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
    table.sizing {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.95rem;
    }
    table.sizing th {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 900;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    table.sizing td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.sizing tr:last-child td { border-bottom: none; }
    table.sizing tr.highlight { background: rgba(6, 208, 255, 0.08); }
    table.sizing tr.highlight td { font-weight: 700; }
    .sku-chip {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      padding: 3px 10px;
      border-radius: 3px;
      font-family: 'Lato', monospace;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.03em;
    }

    /* STEP TIMELINE */
    .steps {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .step {
      display: grid;
      grid-template-columns: 60px 1fr;
      gap: 18px;
      background: var(--nu-white);
      border-radius: 8px;
      padding: 20px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .step:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
    .step-number {
      width: 48px; height: 48px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-weight: 900;
      font-size: 1.3rem;
      flex-shrink: 0;
    }
    .step-body h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step-body p { font-size: 0.96rem; color: var(--nu-body-text); margin-bottom: 8px; }
    .step-body p:last-child { margin-bottom: 0; }
    .step-body ul { margin: 6px 0 0 18px; }
    .step-body ul li { margin-bottom: 4px; font-size: 0.94rem; }
    .step-meta {
      display: inline-block;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 3px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-right: 8px;
    }
    .step-meta.owner { background: #E8F0FF; color: var(--nu-blue); }
    .step-meta.time { background: #FFF6E0; color: #8A6C00; }
    .step-meta.done { background: #E4F5EA; color: var(--nu-success); }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .info-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .info-card h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.05rem;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .info-card ul { margin-left: 18px; }
    .info-card ul li { margin-bottom: 8px; font-size: 0.96rem; }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 28px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .checklist ul { list-style: none; margin: 0; }
    .checklist li {
      padding: 10px 0 10px 36px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 13px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* BADGE ROW */
    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 18px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 20px 10px 16px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.02em;
    }
    .badge .dot {
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--nu-cyan); margin-right: 10px; flex-shrink: 0;
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
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      h1.page-title { font-size: 1.7rem; }
      .container { padding: 40px 20px 10px; }
      .two-col { grid-template-columns: 1fr; }
      .badge { clip-path: none; border-radius: 6px; }
      .step { grid-template-columns: 44px 1fr; gap: 12px; padding: 16px; }
      .step-number { width: 40px; height: 40px; font-size: 1.1rem; }
    }
    @media print {
      body { background: #fff; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step, .info-card, .situation-card, .checklist, .sizing-wrap { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#ffffff" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#ffffff" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <div class="action-label">Action Item · Field Fit Issue</div>
      <h1 class="page-title"><span class="accent">Modify</span> the Shipped Bucket Cover &amp; Ship Back for Proper Sizing</h1>
      <p class="page-subtitle">Customer received a FlexPro Armor bucket cover that does not fit their bucket dimensions. Recover the unit, correct the fit, and redeliver without charging the customer — protect the relationship, document the root cause, and prevent repeat.</p>

      <!-- META STRIP -->
      <div class="meta-strip">
        <div class="meta-item">
          <div class="meta-label">Owner</div>
          <div class="meta-value">Aaron C. Norris</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Support</div>
          <div class="meta-value">Caroline Butler (CB)</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Product Line</div>
          <div class="meta-value">FlexPro Armor</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Priority</div>
          <div class="meta-value">High — Customer Waiting</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Source</div>
          <div class="meta-value">reMarkable note, 2026-04</div>
        </div>
      </div>

      <!-- SITUATION -->
      <section>
        <h2 class="section-title"><span class="first">The</span> <span class="rest">Situation</span></h2>
        <div class="section-rule"></div>
        <div class="situation-card">
          <p><strong>What happened.</strong> A FlexPro Armor bucket cover was shipped to the customer based on bucket dimensions on file. Once test-fitted on the truck, the cover does not seat correctly — either the top opening, depth, or platform cutout is off enough that the customer cannot use it in the field.</p>
          <p><strong>What the customer expects.</strong> A cover that fits their bucket the first time, minimal downtime on the truck, and no back-and-forth. Norris Utilities® owns the fix — not the customer.</p>
          <p><strong>What Aaron expects.</strong> Recover the unit, modify to the correct dimensions (or remake if modification compromises the cover), and get it back on the truck with no re-invoice. Capture the learning so the next order is right the first time.</p>
        </div>
      </section>

      <!-- SIZE REFERENCE -->
      <section>
        <h2 class="section-title"><span class="first">Size</span> <span class="rest">Reference — Know Before You Cut</span></h2>
        <div class="section-rule"></div>
        <div class="sizing-wrap">
          <table class="sizing">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Description</th>
                <th>Bucket Opening</th>
                <th>Platform / Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="sku-chip">NU-BC-2851</span></td>
                <td>2-Man FlexPro Armor Bucket Cover</td>
                <td>28" × 51"</td>
                <td>Standard 2-man platform; competitor "24×48" typically = this SKU</td>
              </tr>
              <tr>
                <td><span class="sku-chip">NU-BC-2834</span></td>
                <td>1.5-Man FlexPro Armor Bucket Cover</td>
                <td>28" × 34"</td>
                <td>1.5-man / single-man platform; competitor "24×34" typically = this SKU</td>
              </tr>
              <tr>
                <td><span class="sku-chip">NU-BC-2851-C</span></td>
                <td>2-Man Combo (Cover + accessories)</td>
                <td>28" × 51"</td>
                <td>Includes bundled accessories — verify included items before shipping replacement</td>
              </tr>
              <tr>
                <td><span class="sku-chip">NU-BC-2834-C</span></td>
                <td>1.5-Man Combo (Cover + accessories)</td>
                <td>28" × 34"</td>
                <td>Includes bundled accessories</td>
              </tr>
              <tr class="highlight">
                <td colspan="4"><strong>Before any rework:</strong> confirm actual bucket inside-dimensions in inches with the customer — top opening width × length, depth, and any cutout for the control console / upper. Photograph tape-measure-on-bucket when possible.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ACTION PLAN -->
      <section>
        <h2 class="section-title"><span class="first">Action</span> <span class="rest">Plan — Step by Step</span></h2>
        <div class="section-rule"></div>

        <div class="steps">

          <div class="step">
            <div class="step-number">1</div>
            <div class="step-body">
              <h3>Confirm Actual Bucket Dimensions with the Customer</h3>
              <p>Call the customer directly. Do not rely on the original order dimensions — those are what caused the miss.</p>
              <ul>
                <li>Inside length &amp; width at the top opening (tape on the inside lip)</li>
                <li>Bucket depth, top of rim to floor</li>
                <li>Location and size of any upper-control cutout</li>
                <li>Bucket make, model, and year if available (Altec, Terex/HiRanger, Versalift, etc.)</li>
              </ul>
              <p><span class="step-meta owner">Owner: Aaron</span><span class="step-meta time">Same day</span></p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">2</div>
            <div class="step-body">
              <h3>Arrange Return Shipping — At Our Cost</h3>
              <p>Caroline generates the return label and emails it to the customer. Use Ben's formula on the replacement leg, not this recovery leg. Recovery ships on us.</p>
              <ul>
                <li>FedEx or UPS Ground, fully insured at declared value</li>
                <li>Include a plain-English note: "Norris Utilities is covering return shipping. Please fold cover as received and seal in original packaging if available."</li>
                <li>Log tracking number in the order record the moment it is created</li>
              </ul>
              <p><span class="step-meta owner">Owner: Caroline</span><span class="step-meta time">Within 24 hrs</span></p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">3</div>
            <div class="step-body">
              <h3>Inspect &amp; Diagnose on Arrival</h3>
              <p>When the cover arrives back, measure it against the confirmed bucket dimensions from Step 1 before touching it. Photograph every side, and photograph any stitching, seams, or panel sections that will be affected by the rework.</p>
              <ul>
                <li>Is the miss a small trim (≤ 2") that can be re-seamed?</li>
                <li>Is the miss dimensional across length AND width — requiring panel replacement?</li>
                <li>Is the zipper run or console cutout in the wrong location?</li>
              </ul>
              <p><span class="step-meta owner">Owner: Aaron</span><span class="step-meta time">Day of arrival</span></p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">4</div>
            <div class="step-body">
              <h3>Decide: Modify vs. Remake</h3>
              <p>Do not compromise the warranty to save a cover. FlexPro Armor is a handmade USA product — its value is a cover that actually fits and lasts. If modification would weaken a seam, cut across a waterproof panel, or leave visible patchwork on a customer-facing surface, remake the unit from new stock and retire the original to internal demo use.</p>
              <ul>
                <li><strong>Modify</strong> — when change is ≤ 2" on one axis and can be re-seamed cleanly on a non-load surface</li>
                <li><strong>Remake</strong> — when both axes are off, the console cutout is wrong, or a waterproof panel would be compromised</li>
              </ul>
              <p><span class="step-meta owner">Owner: Aaron + Shop</span><span class="step-meta time">1 business day to decide</span></p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">5</div>
            <div class="step-body">
              <h3>Execute Rework or Remake</h3>
              <p>Whichever path is chosen, the finished cover must match the confirmed bucket dimensions from Step 1 exactly, pass the in-house water/fit check, and ship with the original warranty intact.</p>
              <ul>
                <li>Template the cover against the confirmed dimensions on a bench fixture before stitching</li>
                <li>Water-test any re-seamed area before final packaging</li>
                <li>Tag the finished unit with the customer's name, bucket make/model, and final verified dimensions</li>
              </ul>
              <p><span class="step-meta owner">Owner: Shop</span><span class="step-meta time">2–4 business days</span></p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">6</div>
            <div class="step-body">
              <h3>Ship Back to Customer — Expedited, No Re-Invoice</h3>
              <p>Replacement goes out expedited Ground or 2-Day, depending on customer location and urgency. Shipping is absorbed on our side — there is no adjusted invoice to the customer for this recovery leg.</p>
              <ul>
                <li>Include a hand-signed note from Aaron in the box</li>
                <li>Text or call the customer the tracking number the moment it ships</li>
                <li>Schedule a 48-hr post-delivery follow-up call to confirm fit on the bucket</li>
              </ul>
              <p><span class="step-meta owner">Owner: Caroline + Aaron</span><span class="step-meta time">Same day as finish</span></p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">7</div>
            <div class="step-body">
              <h3>Confirm Fit on the Truck &amp; Close the Loop</h3>
              <p>Do not mark this action closed until the customer confirms — verbally or in writing — that the cover fits and is in use.</p>
              <ul>
                <li>Photo of the cover installed on the bucket is ideal</li>
                <li>Update the order record with final verified dimensions as the new "truth" for this customer's future orders</li>
                <li>Send a thank-you note acknowledging the inconvenience</li>
              </ul>
              <p><span class="step-meta owner">Owner: Aaron</span><span class="step-meta done">Closes the action</span></p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">8</div>
            <div class="step-body">
              <h3>Root-Cause &amp; Prevent Repeat</h3>
              <p>Log what went wrong in the order intake step so the same miss does not happen to the next customer. Update the intake checklist if needed.</p>
              <ul>
                <li>Was the sizing estimated from a competitor part number that translated incorrectly?</li>
                <li>Were only two dimensions captured when three were needed (length × width × depth)?</li>
                <li>Should the order form now require a photo of the tape on the bucket before build?</li>
              </ul>
              <p><span class="step-meta owner">Owner: Aaron + CB</span><span class="step-meta time">Before next build</span></p>
            </div>
          </div>

        </div>
      </section>

      <!-- TWO COLUMN -->
      <section>
        <div class="two-col">
          <div class="info-card">
            <h3>Customer Talking Points</h3>
            <ul>
              <li>Lead with ownership: "This one is on us — we're going to make it right."</li>
              <li>No excuses, no blame-shifting to the intake form or the customer's measurements.</li>
              <li>Give a specific, realistic timeline, not a vague "soon."</li>
              <li>Follow up unsolicited at each step — do not make the customer chase us.</li>
              <li>Close with: "Does this keep you where you need to be? What else can I do?"</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>Cost &amp; Billing Posture</h3>
            <ul>
              <li>Return shipping: absorbed by Norris Utilities®.</li>
              <li>Rework or remake labor + materials: absorbed by Norris Utilities®.</li>
              <li>Replacement outbound shipping: absorbed by Norris Utilities®.</li>
              <li>Do <strong>not</strong> issue a credit memo or adjust the original invoice — the invoice stands; the fix is at our cost.</li>
              <li>Track all internal cost against a "field fit recovery" line so we can see the true cost of sizing misses over the year.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section>
        <h2 class="section-title"><span class="first">Working</span> <span class="rest">Checklist</span></h2>
        <div class="section-rule"></div>
        <div class="checklist">
          <ul>
            <li>Called customer; captured exact bucket length, width, depth, and cutout locations</li>
            <li>Emailed paid return shipping label to customer (tracking logged in order record)</li>
            <li>Cover received back at shop; inspected and photographed from all sides</li>
            <li>Modify-vs.-remake decision made and documented in the order file</li>
            <li>Rework / remake completed; water-tested and bench-fit against confirmed dimensions</li>
            <li>Finished cover tagged with customer name, bucket make/model, verified dimensions</li>
            <li>Replacement shipped expedited; tracking number sent to customer</li>
            <li>48-hour post-delivery follow-up call completed</li>
            <li>Customer confirmed cover fits and is in use on the truck</li>
            <li>Root cause captured; intake form / checklist updated if needed</li>
            <li>Thank-you note sent to customer from Aaron</li>
          </ul>
        </div>
      </section>

      <!-- BADGE ROW -->
      <section>
        <h2 class="section-title"><span class="first">Brand</span> <span class="rest">Reminders on This Recovery</span></h2>
        <div class="section-rule"></div>
        <div class="badge-row">
          <div class="badge"><span class="dot"></span>FlexPro Armor — never "FlexPro Armor Guard"</div>
          <div class="badge"><span class="dot"></span>FlexPro Armor — no ® symbol, ever</div>
          <div class="badge"><span class="dot"></span>Norris Utilities® — always ® on first use</div>
          <div class="badge"><span class="dot"></span>A Legacy of Commitment® — registered</div>
          <div class="badge"><span class="dot"></span>Handmade in the USA — lead with this</div>
          <div class="badge"><span class="dot"></span>Fit &amp; waterproof warranty is our promise</div>
        </div>
      </section>

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