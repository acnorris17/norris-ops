<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lifetime Warranty Clarification — Norris Utilities®</title>
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
      --nu-warning: #C0392B;
      --nu-success: #27AE60;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-header-eyebrow {
      display: inline-block;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-white);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      padding: 6px 16px;
      border-radius: 2px;
      margin-top: 28px;
    }

    /* CHEVRON TRANSITION */
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      height: 700px;
      background:
        radial-gradient(circle at center, rgba(0,51,204,0.04) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-wrap {
      position: relative;
      z-index: 1;
      max-width: 980px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.65rem;
      margin-bottom: 18px;
      color: #0033cc;
      letter-spacing: -0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-lead {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 32px;
      max-width: 780px;
    }
    .nu-section-divider {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      margin-bottom: 22px;
      border-radius: 2px;
    }

    /* SUMMARY CARD */
    .nu-summary-card {
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 28px 32px;
      border-radius: 6px;
      margin-bottom: 48px;
      box-shadow: 0 2px 14px rgba(0,0,51,0.06);
    }
    .nu-summary-card .label {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-summary-card .question {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.4;
    }

    /* DEFINITION CARDS */
    .definition-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 48px;
    }
    .definition-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 28px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .definition-card.option-b {
      border-top-color: var(--nu-cyan);
    }
    .definition-card h3 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .definition-card .option-tag {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      padding: 3px 10px;
      border-radius: 2px;
      margin-bottom: 14px;
    }
    .definition-card.option-b .option-tag {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .definition-card p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 12px;
    }
    .definition-card ul {
      list-style: none;
      padding: 0;
      margin-top: 10px;
    }
    .definition-card li {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      padding: 6px 0 6px 20px;
      position: relative;
    }
    .definition-card li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 4px;
      font-size: 1.1rem;
      line-height: 1;
    }
    .definition-card.option-b li::before {
      color: var(--nu-cyan);
    }

    /* COMPARISON TABLE */
    .compare-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 48px;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border-radius: 6px;
      overflow: hidden;
    }
    .compare-table thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 14px 18px;
      text-align: left;
    }
    .compare-table tbody td {
      padding: 16px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .compare-table tbody tr:last-child td {
      border-bottom: none;
    }
    .compare-table tbody tr:nth-child(even) {
      background: #fafbff;
    }
    .compare-table .criterion {
      font-weight: 700;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }

    /* DECISION BOX */
    .decision-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 40px;
      border-radius: 8px;
      margin-bottom: 48px;
      position: relative;
      overflow: hidden;
    }
    .decision-box::before {
      content: '';
      position: absolute;
      top: -50%; right: -10%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.12) 0%, transparent 70%);
      z-index: 0;
    }
    .decision-box > * { position: relative; z-index: 1; }
    .decision-box h2 {
      font-size: 1.4rem;
      font-weight: 900;
      margin-bottom: 6px;
      letter-spacing: 0.01em;
    }
    .decision-box h2 span {
      color: var(--nu-cyan);
    }
    .decision-box .subtitle {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.7);
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 22px;
    }
    .decision-box p {
      font-size: 1.02rem;
      color: rgba(255,255,255,0.92);
      margin-bottom: 16px;
    }
    .decision-box .recommendation {
      background: rgba(6,208,255,0.12);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 4px;
      margin-top: 18px;
    }
    .decision-box .recommendation strong {
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* IMPACT GRID */
    .impact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin-bottom: 48px;
    }
    .impact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .impact-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,51,0.08);
    }
    .impact-card .icon-wrap {
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 14px;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.2rem;
    }
    .impact-card h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .impact-card p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ACTION CHECKLIST */
    .action-list {
      background: #fafbff;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 28px 32px;
      margin-bottom: 48px;
    }
    .action-list h3 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
    }
    .action-list ol {
      list-style: none;
      padding: 0;
      counter-reset: action-counter;
    }
    .action-list li {
      counter-increment: action-counter;
      padding: 12px 0 12px 44px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .action-list li:last-child { border-bottom: none; }
    .action-list li::before {
      content: counter(action-counter);
      position: absolute;
      left: 0;
      top: 12px;
      width: 30px;
      height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .action-list li strong {
      color: var(--nu-dark-text);
    }

    /* META BAR */
    .meta-bar {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      padding: 16px 20px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      margin-bottom: 40px;
      font-size: 0.85rem;
    }
    .meta-bar .meta-item {
      display: flex;
      flex-direction: column;
    }
    .meta-bar .meta-label {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      margin-bottom: 3px;
    }
    .meta-bar .meta-value {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
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
      font-size: 0.95rem;
      line-height: 1.9;
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
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-wrap { padding: 40px 22px 60px; }
      .nu-section-title { font-size: 1.35rem; }
      .definition-grid { grid-template-columns: 1fr; }
      .decision-box { padding: 28px 24px; }
      .compare-table thead { display: none; }
      .compare-table tbody td {
        display: block;
        padding: 10px 16px;
      }
      .compare-table tbody td::before {
        content: attr(data-label);
        display: block;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--nu-blue);
        margin-bottom: 4px;
      }
      .compare-table tbody tr {
        display: block;
        padding: 14px 0;
        border-bottom: 2px solid var(--nu-medium-gray);
      }
      .action-list { padding: 22px 18px; }
      .action-list li { padding: 12px 0 12px 40px; font-size: 0.9rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .decision-box { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-header-eyebrow">Warranty Policy Clarification</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <!-- META BAR -->
      <div class="meta-bar">
        <div class="meta-item">
          <span class="meta-label">Source</span>
          <span class="meta-value">reMarkable Action Item</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Owner</span>
          <span class="meta-value">Aaron C. Norris</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Applies To</span>
          <span class="meta-value">FlexPro Armor Warranty</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Status</span>
          <span class="meta-value">Decision Required</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Prepared</span>
          <span class="meta-value">April 24, 2026</span>
        </div>
      </div>

      <!-- TITLE -->
      <div class="nu-section-divider"></div>
      <h1 class="nu-section-title">Clarify What <span>"Lifetime" Means</span></h1>
      <p class="nu-section-lead">
        The current FlexPro Armor warranty language uses the word "lifetime" without specifying whose lifetime.
        Before the next printed spec sheet or customer quote goes out, we need to lock down a single, written
        definition. This brief lays out the two options, the trade-offs, and the recommended path forward.
      </p>

      <!-- THE QUESTION -->
      <div class="nu-summary-card">
        <div class="label">The Question On The Table</div>
        <div class="question">
          Does "lifetime warranty" mean the <em>life of the bucket/structure it is installed on</em>,
          or the <em>life of the original owner/purchaser</em>?
        </div>
      </div>

      <!-- OPTION A & B -->
      <h2 class="nu-section-title">Two <span>Possible Definitions</span></h2>
      <div class="definition-grid">

        <div class="definition-card">
          <span class="option-tag">OPTION A</span>
          <h3>Life of the Structure</h3>
          <p>Warranty remains in effect for as long as the bucket or aerial device the cover is installed on
          remains in service — regardless of who owns the truck.</p>
          <ul>
            <li>Transfers with the equipment when sold</li>
            <li>Ends when the bucket is retired or scrapped</li>
            <li>Treats the cover as a permanent fitting</li>
            <li>Easier for utility fleet managers who rotate trucks</li>
          </ul>
        </div>

        <div class="definition-card option-b">
          <span class="option-tag">OPTION B</span>
          <h3>Life of the Original Owner</h3>
          <p>Warranty is tied to the company or individual who originally purchased the FlexPro Armor cover.
          It does not transfer to a second-hand buyer.</p>
          <ul>
            <li>Clean paper trail — one invoice, one owner</li>
            <li>Ends if the truck is sold or the company dissolves</li>
            <li>Limits long-tail warranty exposure</li>
            <li>Standard practice in the consumer goods industry</li>
          </ul>
        </div>

      </div>

      <!-- COMPARISON TABLE -->
      <h2 class="nu-section-title">Side-by-Side <span>Comparison</span></h2>
      <table class="compare-table">
        <thead>
          <tr>
            <th>Criterion</th>
            <th>Option A — Life of Structure</th>
            <th>Option B — Life of Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="criterion" data-label="Criterion">Transferability</td>
            <td data-label="Option A">Transfers with the bucket truck</td>
            <td data-label="Option B">Non-transferable; tied to original purchaser</td>
          </tr>
          <tr>
            <td class="criterion" data-label="Criterion">End Date Trigger</td>
            <td data-label="Option A">Bucket retired, scrapped, or structurally destroyed</td>
            <td data-label="Option B">Original owner sells the equipment or dissolves business</td>
          </tr>
          <tr>
            <td class="criterion" data-label="Criterion">Proof Required</td>
            <td data-label="Option A">Serial number on the bucket/cover</td>
            <td data-label="Option B">Original invoice + owner identity</td>
          </tr>
          <tr>
            <td class="criterion" data-label="Criterion">Exposure to Norris Utilities®</td>
            <td data-label="Option A">Higher — could span 20+ years across multiple owners</td>
            <td data-label="Option B">Lower — capped at original purchaser's tenure</td>
          </tr>
          <tr>
            <td class="criterion" data-label="Criterion">Sales / Marketing Impact</td>
            <td data-label="Option A">Stronger story — "covers outlast the truck"</td>
            <td data-label="Option B">Cleaner legal — fewer gray-area claims</td>
          </tr>
          <tr>
            <td class="criterion" data-label="Criterion">Fit With Fleet Buyers</td>
            <td data-label="Option A">Excellent — utilities rotate assets frequently</td>
            <td data-label="Option B">Weaker — breaks when equipment is redeployed</td>
          </tr>
          <tr>
            <td class="criterion" data-label="Criterion">Fit With Dealers / Resellers</td>
            <td data-label="Option A">Resale value holds; dealers prefer this</td>
            <td data-label="Option B">Resale value weaker; requires re-warranty</td>
          </tr>
        </tbody>
      </table>

      <!-- DECISION BOX -->
      <div class="decision-box">
        <div class="subtitle">Recommendation</div>
        <h2>Norris Utilities Recommends <span>Option A — Life of the Structure</span></h2>
        <p>
          FlexPro Armor is handmade in the USA and engineered to outlast the equipment it protects. The 50% margin
          gives us headroom to stand behind the product across multiple ownership cycles, and utilities — our core
          buyer — routinely rotate trucks between crews and sister companies. Tying the warranty to the structure
          protects the brand promise and keeps resale value intact.
        </p>
        <div class="recommendation">
          <strong>Proposed Written Definition:</strong> "Lifetime" means the operational service life of the
          bucket or aerial device on which the FlexPro Armor cover is originally installed. The warranty remains
          in force until that specific bucket is retired, scrapped, or structurally destroyed. The warranty
          transfers with the equipment and requires only the serial number for validation. Covered defects are
          limited to materials and workmanship under normal utility use.
        </div>
      </div>

      <!-- IMPACT -->
      <h2 class="nu-section-title">What <span>This Changes</span></h2>
      <div class="impact-grid">

        <div class="impact-card">
          <div class="icon-wrap">01</div>
          <h4>Spec Sheets</h4>
          <p>All printed FlexPro Armor spec sheets and the Line Card warranty block must carry the locked
          definition verbatim.</p>
        </div>

        <div class="impact-card">
          <div class="icon-wrap">02</div>
          <h4>Website Copy</h4>
          <p>Warranty section on NorrisUtilities.com rewritten to match. Replace "lifetime warranty" with the
          full definition on first use per page.</p>
        </div>

        <div class="impact-card">
          <div class="icon-wrap">03</div>
          <h4>Quotes &amp; Invoices</h4>
          <p>Standard quote template gets a single warranty line pointing to the written policy document. No
          verbal interpretation allowed.</p>
        </div>

        <div class="impact-card">
          <div class="icon-wrap">04</div>
          <h4>Dealer Agreements</h4>
          <p>Dealers and distributors reselling at 30% or 40% off must attach the same written definition to
          every customer-facing document.</p>
        </div>

        <div class="impact-card">
          <div class="icon-wrap">05</div>
          <h4>Claim Validation</h4>
          <p>CB intake form gains a "serial number" field. Claim is valid if the serial matches a shipped unit
          and the bucket is still in service.</p>
        </div>

        <div class="impact-card">
          <div class="icon-wrap">06</div>
          <h4>Internal Training</h4>
          <p>Aaron, CB, and MK get the same one-page warranty reference so customer answers are identical across
          every channel.</p>
        </div>

      </div>

      <!-- ACTION PLAN -->
      <h2 class="nu-section-title">Action <span>Plan</span></h2>
      <div class="action-list">
        <h3>Steps to Lock This Down</h3>
        <ol>
          <li><strong>Aaron approves the definition</strong> — accept Option A as written, or redline it and return.</li>
          <li><strong>Legal-grade wording finalized</strong> — brief review against standard warranty language; confirm no conflict with any existing dealer contract.</li>
          <li><strong>Master warranty policy document</strong> — single source of truth saved to ~/norris-ops/docs/ and linked from every outbound quote.</li>
          <li><strong>Update FlexPro Armor spec sheets</strong> — reprint with the locked definition before the next trade show or customer mailer.</li>
          <li><strong>Update NorrisUtilities.com</strong> — warranty page and product pages carry the same paragraph.</li>
          <li><strong>Brief CB and dealers</strong> — one email with the policy attached; CB updates her customer-response templates the same day.</li>
          <li><strong>Add serial-number capture</strong> — every outbound FlexPro Armor shipment logs the serial to the shipments ledger for future claim validation.</li>
        </ol>
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