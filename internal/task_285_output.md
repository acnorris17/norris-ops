<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Remove Pricing from Boss Online Store — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-alert-amber: #E8A317;
      --nu-success-green: #2E8540;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 28%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 64px 40px 90px;
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA with ghost phoenix watermark */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 30%; left: 50%;
      transform: translate(-50%, -30%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230000FF'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230000FF'/></svg>");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      opacity: 0.07;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* DOCUMENT METADATA STRIP */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 28px;
      align-items: center;
    }
    .doc-meta-pill {
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      border: 1px solid var(--nu-medium-gray);
    }
    .doc-meta-pill.priority-high {
      background: var(--nu-alert-red);
      color: var(--nu-white);
      border-color: var(--nu-alert-red);
    }
    .doc-meta-pill.status-open {
      background: var(--nu-alert-amber);
      color: var(--nu-white);
      border-color: var(--nu-alert-amber);
    }
    .doc-meta-pill.source {
      background: var(--nu-blue);
      color: var(--nu-white);
      border-color: var(--nu-blue);
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      line-height: 1.2;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 24px;
      line-height: 1.55;
    }

    /* PAGE TITLE */
    .page-title {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .page-title-accent { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.15rem;
      color: var(--nu-body-text);
      max-width: 760px;
      margin-bottom: 36px;
      line-height: 1.6;
    }

    /* CALLOUT BOX */
    .callout {
      background: linear-gradient(135deg, #f6f9ff 0%, #eef3ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 32px;
    }
    .callout-label {
      font-size: 0.78rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout-text {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }

    /* CHEVRON BADGES (action steps) */
    .step-list { list-style: none; padding: 0; }
    .step-badge {
      display: flex;
      align-items: flex-start;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 30px 18px 22px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.96rem;
      letter-spacing: 0.01em;
      gap: 16px;
    }
    .step-num {
      flex-shrink: 0;
      width: 32px; height: 32px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .step-body { flex: 1; line-height: 1.5; }
    .step-body strong { color: var(--nu-cyan); display: block; margin-bottom: 2px; font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; }

    /* TWO-COL GRID */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin-bottom: 32px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
    }
    .nu-card p { font-size: 0.96rem; line-height: 1.6; color: var(--nu-body-text); }
    .nu-card ul { padding-left: 20px; margin-top: 8px; }
    .nu-card li { font-size: 0.95rem; line-height: 1.7; color: var(--nu-body-text); }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 18px;
    }
    .nu-table thead { background: var(--nu-navy); color: var(--nu-white); }
    .nu-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }

    /* CONTACT BAR */
    .contact-bar {
      background: linear-gradient(135deg, #f6f9ff 0%, #e6f1ff 100%);
      border: 1px solid #cfe0ff;
      border-radius: 10px;
      padding: 24px 28px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 32px;
    }
    .contact-bar h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.1rem;
      margin-bottom: 4px;
    }
    .contact-bar p { font-size: 0.92rem; color: var(--nu-body-text); }
    .contact-bar .nu-btn-primary { white-space: nowrap; }

    /* BUTTONS */
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 13px 28px;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }

    /* CHECKLIST */
    .checklist { list-style: none; padding: 0; }
    .checklist li {
      padding: 12px 14px 12px 44px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.97rem;
      line-height: 1.55;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 14px; top: 16px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* WHY-IT-MATTERS */
    .why-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-bottom: 12px;
    }
    .why-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
      border-radius: 8px;
      padding: 22px;
      text-align: left;
    }
    .why-cell-num {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 8px;
    }
    .why-cell-label {
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      color: var(--nu-dark-text);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .why-cell-body { font-size: 0.92rem; color: var(--nu-body-text); line-height: 1.55; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 820px) {
      .two-col { grid-template-columns: 1fr; }
      .why-grid { grid-template-columns: 1fr; }
      .nu-table { display: block; overflow-x: auto; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 44px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.18em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px 56px; }
      .page-title { font-size: 1.85rem; }
      .nu-section-title { font-size: 1.4rem; }
      .step-badge { clip-path: none; border-radius: 8px; padding: 16px 20px; }
      .contact-bar { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-table { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-btn-primary { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#FFFFFF" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#FFFFFF" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOCUMENT META -->
      <div class="doc-meta">
        <span class="doc-meta-pill source">reMarkable Action Item</span>
        <span class="doc-meta-pill priority-high">Priority: High</span>
        <span class="doc-meta-pill status-open">Status: Open</span>
        <span class="doc-meta-pill">Owner: Aaron C. Norris</span>
        <span class="doc-meta-pill">Vendor: BOSS Products</span>
        <span class="doc-meta-pill">Logged: 2026-04-24</span>
      </div>

      <!-- TITLE -->
      <h1 class="page-title">
        Remove Pricing from <span class="page-title-accent">BOSS Online Store</span>
      </h1>
      <p class="page-subtitle">
        Pull all customer-facing pricing from the BOSS Products section of the Norris Utilities® online store. Pricing on BOSS line items must be quote-only going forward to protect MAP discipline, preserve dealer/distributor channel margins, and keep BOSS's posted policy in good standing with Troy Gongwer and Thayne Grove.
      </p>

      <!-- CALLOUT -->
      <div class="callout">
        <div class="callout-label">Why this matters now</div>
        <div class="callout-text">
          BOSS Products operates a tiered channel: Direct → Dealers (30% off) → Distributors (40% off). Posting public retail pricing on the Norris Utilities® storefront undercuts dealer trust and risks our authorized status. Until BOSS publishes an updated MAP policy, all BOSS items must read <strong>"Call for Pricing — 205-500-1343"</strong> instead of a dollar figure.
        </div>
      </div>

      <!-- WHY GRID -->
      <section class="nu-section">
        <h2 class="nu-section-title">Three <span>Reasons This Is Urgent</span></h2>
        <div class="why-grid">
          <div class="why-cell">
            <div class="why-cell-num">01</div>
            <div class="why-cell-label">Channel Integrity</div>
            <div class="why-cell-body">Public pricing exposes the 30/40% dealer-distributor stack and undercuts every BOSS dealer who finds it on Google.</div>
          </div>
          <div class="why-cell">
            <div class="why-cell-num">02</div>
            <div class="why-cell-label">Vendor Relationship</div>
            <div class="why-cell-body">Troy Gongwer and Thayne Grove have asked partners to keep pricing off public storefronts. Compliance protects our authorized status.</div>
          </div>
          <div class="why-cell">
            <div class="why-cell-num">03</div>
            <div class="why-cell-label">Margin Protection</div>
            <div class="why-cell-body">Quote-only posture lets us tailor shipping (Ben's Formula) and bundle freight without anchoring the customer to a static number.</div>
          </div>
        </div>
      </section>

      <!-- ACTION STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Action <span>Steps</span></h2>
        <p class="nu-section-subtitle">Execute in order. Each step takes ~5–15 minutes. Total estimated time: 60–90 minutes.</p>

        <ol class="step-list">
          <li class="step-badge">
            <div class="step-num">1</div>
            <div class="step-body">
              <strong>Inventory the affected pages</strong>
              List every BOSS Products page on the Norris Utilities® storefront and ops portal. Capture the URL, the SKU, and the current displayed price for the rollback record.
            </div>
          </li>
          <li class="step-badge">
            <div class="step-num">2</div>
            <div class="step-body">
              <strong>Replace dollar amounts with "Call for Pricing"</strong>
              Swap each price field with: <em>Call for Pricing — 205-500-1343</em>. Keep the SKU, description, photos, and spec sheet links untouched.
            </div>
          </li>
          <li class="step-badge">
            <div class="step-num">3</div>
            <div class="step-body">
              <strong>Add a clear "Request a Quote" button</strong>
              Each BOSS product card needs a primary CTA that opens a mailto: link to acnorris@norrisutilities.com with subject "BOSS Quote Request — [SKU]".
            </div>
          </li>
          <li class="step-badge">
            <div class="step-num">4</div>
            <div class="step-body">
              <strong>Disable add-to-cart on BOSS SKUs</strong>
              Cart checkout is incompatible with quote-only items. Hide or disable the cart button on every BOSS SKU until quote workflow is in place.
            </div>
          </li>
          <li class="step-badge">
            <div class="step-num">5</div>
            <div class="step-body">
              <strong>Update the BOSS landing copy</strong>
              Add one short line near the top: "Pricing on BOSS Products is quote-only. Call 205-500-1343 or email for current cost, freight, and lead time."
            </div>
          </li>
          <li class="step-badge">
            <div class="step-num">6</div>
            <div class="step-body">
              <strong>Push to GitHub and verify live</strong>
              Commit changes to acnorris17/norris-ops, push to main, and confirm the changes are live at ops.norrisutilities.com on a real device — not just localhost.
            </div>
          </li>
          <li class="step-badge">
            <div class="step-num">7</div>
            <div class="step-body">
              <strong>Notify Troy and Thayne</strong>
              Send a single email to Troy Gongwer with Thayne Grove on CC confirming the change is complete. Include the live URL so they can verify.
            </div>
          </li>
        </ol>
      </section>

      <!-- AFFECTED PAGES TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Affected <span>Pages — Inventory Template</span></h2>
        <p class="nu-section-subtitle">Fill this table while executing Step 1. This becomes the rollback record if BOSS later issues an updated MAP policy that allows posted pricing.</p>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Page / Section</th>
              <th>What to Update</th>
              <th>Verified Live</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>norrisutilities.com</td>
              <td>BOSS Products category page</td>
              <td>Remove price column; add "Call for Pricing" badge</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>norrisutilities.com</td>
              <td>Individual BOSS SKU detail pages</td>
              <td>Replace price field; disable add-to-cart</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>ops.norrisutilities.com</td>
              <td>Internal BOSS quoting tool</td>
              <td>Internal cost stays — only public storefront affected</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>norrisutilities.com</td>
              <td>Homepage carousel / featured products</td>
              <td>Remove BOSS price tags from any feature tiles</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>norrisutilities.com</td>
              <td>Search results and filters</td>
              <td>Confirm BOSS SKUs render "Call for Pricing" in search</td>
              <td>☐</td>
            </tr>
            <tr>
              <td>norrisutilities.com</td>
              <td>Sitemap / structured data</td>
              <td>Remove price properties from BOSS schema.org markup</td>
              <td>☐</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- RULES + GUARDRAILS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Rules <span>and Guardrails</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Do</h3>
            <ul>
              <li>Use exact phrase: "Call for Pricing — 205-500-1343"</li>
              <li>Keep all product photos, SKUs, and spec sheets visible</li>
              <li>Route every quote request to acnorris@norrisutilities.com</li>
              <li>Always CC Troy Gongwer and Thayne Grove on BOSS communications</li>
              <li>Apply Ben's shipping formula at quote time, not on the page</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Do Not</h3>
            <ul>
              <li>Do not delete the BOSS pages — quote-only, not removed</li>
              <li>Do not list MSRP, "starting at," or any anchor figure</li>
              <li>Do not post freight or shipping cost publicly</li>
              <li>Do not enable add-to-cart until quote workflow is finalized</li>
              <li>Do not push without verifying live on a real device</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- VERIFICATION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Final <span>Verification Checklist</span></h2>
        <p class="nu-section-subtitle">Run this before marking the action item complete. If any item fails, fix before reporting done.</p>
        <div class="nu-card" style="padding: 8px 8px;">
          <ul class="checklist">
            <li>Every BOSS SKU on the public store reads "Call for Pricing — 205-500-1343"</li>
            <li>No dollar amounts appear in product cards, search results, or feature tiles</li>
            <li>Add-to-cart is disabled or hidden on every BOSS SKU</li>
            <li>"Request a Quote" CTA opens mailto: with the correct SKU in the subject line</li>
            <li>BOSS landing page includes the quote-only explanation line</li>
            <li>Changes are committed and pushed to acnorris17/norris-ops</li>
            <li>Live verified on iPhone Safari and a desktop browser at ops.norrisutilities.com</li>
            <li>Confirmation email sent to Troy Gongwer with Thayne Grove on CC</li>
            <li>This action item closed in the master tracker with completion date</li>
          </ul>
        </div>
      </section>

      <!-- CONTACT BAR -->
      <div class="contact-bar">
        <div>
          <h3>Need Pricing on BOSS Products?</h3>
          <p>BOSS items are quote-only. Aaron will respond same business day with cost, freight, and lead time.</p>
        </div>
        <a href="mailto:acnorris@norrisutilities.com?subject=BOSS%20Quote%20Request" class="nu-btn-primary">Request a Quote</a>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities, LLC<br>
      130 Inverness Plaza #210, Birmingham, AL 35242<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Internal action document — Norris Utilities® and A Legacy of Commitment® are registered trademarks of Norris Utilities, LLC. Phoenix Icon® is a registered trademark.
    </div>
  </footer>

</body>
</html>