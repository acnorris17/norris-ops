<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action: Modify Shipped Bucket Cover &amp; Return for Proper Sizing — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-alert-amber: #E89B1F;
      --nu-success-green: #2B7A3E;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      padding-left: 0.75em;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* PAGE TITLE BAND */
    .page-title-band {
      background: var(--nu-white);
      padding: 36px 40px 12px;
      text-align: center;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .page-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.28em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .page-title .hl {
      color: var(--nu-blue);
    }
    .page-subtitle {
      font-size: 1rem;
      color: #666;
      max-width: 780px;
      margin: 0 auto 20px;
    }
    .page-meta {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
      margin-bottom: 24px;
    }
    .meta-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      color: var(--nu-dark-text);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
    }
    .meta-pill.priority-high { background: #FFF3E0; border-color: var(--nu-alert-amber); color: #B45309; }
    .meta-pill.status-open { background: #E3F2FD; border-color: var(--nu-blue); color: var(--nu-blue); }
    .meta-pill.owner { background: #F3E8FF; border-color: #6B46C1; color: #6B46C1; }

    /* MAIN */
    main {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 24px 60px;
    }

    /* SECTION */
    .section {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 32px 36px;
      margin-bottom: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .section-title {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 18px;
      line-height: 1.2;
    }
    .section-title .lead { color: var(--nu-blue); }
    .section-title .tail { color: var(--nu-dark-text); font-weight: 700; }

    /* KEY-VALUE GRID */
    .kv-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px 28px;
      margin-top: 8px;
    }
    .kv-item {
      border-left: 3px solid var(--nu-cyan);
      padding-left: 14px;
    }
    .kv-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      color: #777;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .kv-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .kv-value.big { font-size: 1.15rem; }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 16px 0;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout p { margin-bottom: 8px; }
    .callout p:last-child { margin-bottom: 0; }

    .callout.amber {
      background: linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%);
      border-left-color: var(--nu-alert-amber);
    }
    .callout.amber .callout-title { color: #B45309; }

    /* STEPS */
    .steps {
      counter-reset: step;
      list-style: none;
      padding: 0;
      margin: 8px 0 0;
    }
    .steps li {
      position: relative;
      padding: 16px 16px 16px 60px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border-left: 3px solid var(--nu-blue);
      counter-increment: step;
    }
    .steps li::before {
      content: counter(step);
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 34px;
      height: 34px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .steps li .step-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .steps li .step-detail {
      font-size: 0.92rem;
      color: #555;
    }
    .steps li .step-detail strong { color: var(--nu-dark-text); }

    /* SIZE TABLE */
    .size-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 0.92rem;
    }
    .size-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .size-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .size-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .size-table tr:hover td { background: #E3F2FD; }
    .size-table .sku { font-weight: 900; color: var(--nu-blue); white-space: nowrap; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .checklist li {
      position: relative;
      padding: 10px 10px 10px 38px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 14px;
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 30px;
      margin-top: 8px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .tl-item {
      position: relative;
      padding: 0 0 20px 12px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -27px;
      top: 6px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
    }
    .tl-item:last-child { padding-bottom: 0; }
    .tl-date {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 3px;
    }
    .tl-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
    }
    .tl-detail {
      font-size: 0.9rem;
      color: #555;
    }

    /* CONTACT CARDS */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .contact-card {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 18px 20px;
      border-top: 3px solid var(--nu-cyan);
    }
    .contact-name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
    }
    .contact-role {
      font-size: 0.82rem;
      color: #666;
      margin-bottom: 10px;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .contact-line {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin: 3px 0;
    }
    .contact-line a { color: var(--nu-blue); text-decoration: none; }
    .contact-line a:hover { text-decoration: underline; }

    /* DECISION BOX */
    .decision-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-top: 12px;
    }
    .decision-card {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
    }
    .decision-card.recommended {
      border-color: var(--nu-success-green);
      background: #F1F8E9;
    }
    .decision-card-title {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .decision-card.recommended .decision-card-title::after {
      content: ' • RECOMMENDED';
      color: var(--nu-success-green);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
    }
    .decision-card ul { padding-left: 18px; font-size: 0.9rem; margin-top: 6px; }
    .decision-card li { margin-bottom: 4px; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 42px 30px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.75;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      display: inline-block;
      margin: 0 8px;
      opacity: 0.5;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 1.9rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .page-title { font-size: 1.55rem; }
      .section { padding: 22px 20px; }
      .decision-box { grid-template-columns: 1fr; }
      .size-table { font-size: 0.82rem; }
      .size-table th, .size-table td { padding: 8px 10px; }
    }

    /* PRINT */
    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .section { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon®">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- PAGE TITLE BAND -->
  <div class="page-title-band">
    <div class="page-eyebrow">reMarkable Action Item • Task #211</div>
    <h1 class="page-title"><span class="hl">Modify</span> Shipped Bucket Cover &amp; Return for Proper Sizing</h1>
    <p class="page-subtitle">Action plan for intercepting an incorrectly sized FlexPro Armor bucket cover, re-working it to spec, and shipping the corrected unit back to the customer.</p>
    <div class="page-meta">
      <span class="meta-pill priority-high">Priority: HIGH</span>
      <span class="meta-pill status-open">Status: OPEN</span>
      <span class="meta-pill owner">Owner: Aaron C. Norris</span>
      <span class="meta-pill">Captured: reMarkable notebook</span>
    </div>
  </div>

  <main>

    <!-- SUMMARY -->
    <section class="section">
      <h2 class="section-title"><span class="lead">Action</span> <span class="tail">Summary</span></h2>
      <p>A FlexPro Armor bucket cover was shipped at the wrong dimensions for the customer's platform. Before another unit is cut, we are recovering the shipped cover, modifying it to the correct size, and returning it to the customer. This is the fastest path to a fit — and the cheapest, because the shell and stitching are already 80% of the work.</p>

      <div class="callout">
        <div class="callout-title">Objective</div>
        <p>Re-size the returned FlexPro Armor cover to match the customer's actual bucket dimensions, confirm fit via photos before the second leg of shipping, and close the loop with a delivery confirmation plus a short "what changed" note.</p>
      </div>

      <div class="kv-grid">
        <div class="kv-item">
          <div class="kv-label">Product</div>
          <div class="kv-value big">FlexPro Armor Bucket Cover</div>
        </div>
        <div class="kv-item">
          <div class="kv-label">Issue Type</div>
          <div class="kv-value">Dimensional mismatch — cover too large / too small for platform</div>
        </div>
        <div class="kv-item">
          <div class="kv-label">Resolution Path</div>
          <div class="kv-value">Rework existing unit → reship</div>
        </div>
        <div class="kv-item">
          <div class="kv-label">Cost Posture</div>
          <div class="kv-value">Norris Utilities® covers all return + reship freight</div>
        </div>
        <div class="kv-item">
          <div class="kv-label">Target Turnaround</div>
          <div class="kv-value">7 business days door-to-door</div>
        </div>
        <div class="kv-item">
          <div class="kv-label">Channel</div>
          <div class="kv-value">Direct (no dealer/distributor markup)</div>
        </div>
      </div>
    </section>

    <!-- SIZE REFERENCE -->
    <section class="section">
      <h2 class="section-title"><span class="lead">Size</span> <span class="tail">Reference &amp; Translation</span></h2>
      <p>Before modification, confirm the target SKU. Competitor sizing runs small — their "24×48" is our <strong>NU-BC-2851</strong>; their "24×34" is our <strong>NU-BC-2834</strong>. Measure the bucket, not the old cover.</p>

      <table class="size-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Dimensions (W × H)</th>
            <th>Competitor Equivalent</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="sku">NU-BC-2851</td>
            <td>2-Man FlexPro Armor Cover</td>
            <td>28" × 51"</td>
            <td>"24 × 48"</td>
            <td>Standard for 2-person bucket platforms</td>
          </tr>
          <tr>
            <td class="sku">NU-BC-2834</td>
            <td>1.5-Man FlexPro Armor Cover</td>
            <td>28" × 34"</td>
            <td>"24 × 34"</td>
            <td>Standard for single / 1.5-man platforms</td>
          </tr>
          <tr>
            <td class="sku">NU-BC-2851-C</td>
            <td>2-Man Combo (cover + liner)</td>
            <td>28" × 51"</td>
            <td>"24 × 48" combo</td>
            <td>Full system — confirm liner also fits</td>
          </tr>
          <tr>
            <td class="sku">NU-BC-2834-C</td>
            <td>1.5-Man Combo (cover + liner)</td>
            <td>28" × 34"</td>
            <td>"24 × 34" combo</td>
            <td>Full system — confirm liner also fits</td>
          </tr>
        </tbody>
      </table>

      <div class="callout amber">
        <div class="callout-title">Measurement Rule</div>
        <p>Always measure the <strong>bucket</strong>: inside length × inside width at the rim, plus overall height from floor to rim. Do not size off an old cover — old covers stretch, shrink, and mis-read the platform.</p>
      </div>
    </section>

    <!-- DECISION -->
    <section class="section">
      <h2 class="section-title"><span class="lead">Decision</span> <span class="tail">Path: Rework vs. Replace</span></h2>
      <p>Two options were on the table. The rework path wins on every axis that matters to the customer.</p>

      <div class="decision-box">
        <div class="decision-card recommended">
          <div class="decision-card-title">Option A — Rework &amp; Reship</div>
          <ul>
            <li>Customer ships unit back on our FedEx return label.</li>
            <li>Shop modifies seams, panels, and mounting strap length to correct dimensions.</li>
            <li>We photograph the reworked unit alongside spec sheet before it leaves.</li>
            <li>Reshipped on Norris Utilities® account — no customer freight cost.</li>
            <li>Turnaround: ~7 business days total.</li>
            <li>Zero cost to customer. Zero margin erosion beyond freight.</li>
          </ul>
        </div>
        <div class="decision-card">
          <div class="decision-card-title">Option B — Cut New, Scrap Old</div>
          <ul>
            <li>Cut a brand-new cover to spec and overnight ship.</li>
            <li>Original unit returned separately or written off.</li>
            <li>Faster (3–5 days) but doubles material cost.</li>
            <li>Margin impact: ~$180–$240 depending on SKU.</li>
            <li>Only use if rework is infeasible (wrong shell size, damaged seams).</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- PROCESS STEPS -->
    <section class="section">
      <h2 class="section-title"><span class="lead">Execution</span> <span class="tail">Steps</span></h2>
      <ol class="steps">
        <li>
          <div class="step-title">Confirm correct dimensions with the customer</div>
          <div class="step-detail">Call or email. Ask for bucket <strong>inside length × inside width at rim</strong> plus <strong>inside height</strong>. Get a photo of a tape measure across the bucket rim. Match against the SKU table above.</div>
        </li>
        <li>
          <div class="step-title">Issue FedEx prepaid return label</div>
          <div class="step-detail">Generate a FedEx Ground return label on the Norris Utilities® account. Email the label as PDF with clear packing instructions. Set the "return reason" memo to <strong>"size modification — rework in progress."</strong></div>
        </li>
        <li>
          <div class="step-title">Log return in tracker + flag the shop</div>
          <div class="step-detail">Add an entry to the FlexPro Armor rework log. Send Caroline (CB) a heads-up so she can watch inbound freight and route the package straight to the cut-and-sew bench — not general receiving.</div>
        </li>
        <li>
          <div class="step-title">Rework at the bench</div>
          <div class="step-detail">On arrival: measure received cover against spec. Mark new seam lines with chalk. Re-stitch to target dimensions. Re-set hook-and-loop closures and mounting straps. Pressure-check the final fit over a jig matching the customer's bucket.</div>
        </li>
        <li>
          <div class="step-title">Photo verification before reship</div>
          <div class="step-detail">Lay the reworked cover flat. Photograph with a tape measure across the opening showing the corrected dimension. Second photo: the spec sheet next to the cover. Save both to the customer's file and text them to the customer for sign-off if they want it.</div>
        </li>
        <li>
          <div class="step-title">Ship back — overnight if promised, ground if not</div>
          <div class="step-detail">Pack with a handwritten thank-you card. Include spec sheet and a short "what changed" note. Ship on our account. Email tracking number same day.</div>
        </li>
        <li>
          <div class="step-title">Follow up 48 hours after delivery</div>
          <div class="step-detail">Call the customer. Ask: "Does it fit the way you need it to?" If yes, close the ticket and ask for a photo on the bucket for our install library. If no, escalate to cut-new (Option B) immediately — no further rework attempts.</div>
        </li>
      </ol>
    </section>

    <!-- CHECKLIST -->
    <section class="section">
      <h2 class="section-title"><span class="lead">Verification</span> <span class="tail">Checklist</span></h2>
      <p>Every box must be checked before the unit leaves the shop a second time.</p>
      <ul class="checklist">
        <li><strong>Correct dimensions confirmed</strong> in writing (email or text) from the customer.</li>
        <li><strong>Bucket photo with tape measure</strong> received and filed under the customer's account.</li>
        <li><strong>FedEx return label sent</strong> and inbound tracking monitored.</li>
        <li><strong>Cover received at shop</strong> — logged in the rework ledger with date/time.</li>
        <li><strong>Seam integrity inspected</strong> — no compromise from original stitching before rework.</li>
        <li><strong>Rework completed</strong> — new dimensions measured against spec, variance under ±0.5".</li>
        <li><strong>Two verification photos</strong> taken and saved to the customer file.</li>
        <li><strong>Outbound tracking emailed</strong> to the customer with ETA.</li>
        <li><strong>Handwritten thank-you card</strong> packed inside the box.</li>
        <li><strong>48-hour follow-up call</strong> completed and logged.</li>
      </ul>
    </section>

    <!-- TIMELINE -->
    <section class="section">
      <h2 class="section-title"><span class="lead">Target</span> <span class="tail">Timeline</span></h2>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-date">Day 0 — Today</div>
          <div class="tl-title">Capture action, call customer, generate FedEx return label</div>
          <div class="tl-detail">Confirm dimensions in writing. Email return label within 2 hours of the call. CB is copied on the thread.</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">Day 1–3</div>
          <div class="tl-title">Inbound transit</div>
          <div class="tl-detail">Monitor FedEx tracking daily. If no scan by end of Day 1, call the customer to confirm drop-off.</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">Day 3–4</div>
          <div class="tl-title">Rework at the bench</div>
          <div class="tl-detail">Dimensions marked, re-stitched, pressure-tested on jig. Photos taken before repack.</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">Day 4–6</div>
          <div class="tl-title">Outbound transit</div>
          <div class="tl-detail">Shipped on our FedEx account. Tracking emailed to customer. Delivery confirmation saved to file.</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">Day 7–9</div>
          <div class="tl-title">Follow-up &amp; close</div>
          <div class="tl-detail">48-hour post-delivery call. On-bucket install photo requested. Ticket closed.</div>
        </div>
      </div>
    </section>

    <!-- ROLES -->
    <section class="section">
      <h2 class="section-title"><span class="lead">Responsible</span> <span class="tail">Parties</span></h2>
      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-name">Aaron C. Norris</div>
          <div class="contact-role">Founder &amp; CEO — Owner of the Fix</div>
          <div class="contact-line">Customer call, dimension confirmation, follow-up, and final sign-off.</div>
          <div class="contact-line"><a href="tel:2055001343">205-500-1343</a></div>
          <div class="contact-line"><a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a></div>
        </div>
        <div class="contact-card">
          <div class="contact-name">Caroline Butler (CB)</div>
          <div class="contact-role">Admin — Logistics &amp; Tracking</div>
          <div class="contact-line">Generates return label, watches inbound freight, routes package to rework bench, confirms outbound tracking is emailed same day.</div>
          <div class="contact-line">All customer-facing drafts go to Aaron for review before sending.</div>
        </div>
        <div class="contact-card">
          <div class="contact-name">FlexPro Armor Shop</div>
          <div class="contact-role">Cut &amp; Sew — Rework Execution</div>
          <div class="contact-line">Handmade in USA. Responsible for dimensional rework, seam integrity, jig fit test, and verification photos.</div>
        </div>
      </div>
    </section>

    <!-- CUSTOMER MESSAGE TEMPLATE -->
    <section class="section">
      <h2 class="section-title"><span class="lead">Customer</span> <span class="tail">Message — First Contact</span></h2>
      <p>Draft for Aaron. Adjust the opening name, then send.</p>
      <div class="callout">
        <div class="callout-title">Subject: Getting Your Cover Sized Right</div>
        <p>Name —</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;The cover we shipped is not the right size for your platform. That is on us, and we are going to fix it at no cost to you.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Here is what I need from you so we can get it right on the next pass:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;• Inside length of the bucket at the rim<br>
        &nbsp;&nbsp;&nbsp;&nbsp;• Inside width of the bucket at the rim<br>
        &nbsp;&nbsp;&nbsp;&nbsp;• Inside height from floor to rim<br>
        &nbsp;&nbsp;&nbsp;&nbsp;• A photo with a tape measure across the rim if you can</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;I will email a prepaid FedEx return label as soon as I have those numbers. Our shop will rework the cover to the correct size and ship it back to you on our account. Target door-to-door turnaround is seven business days.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Y'all have been patient, and I want to earn the rest of the business. If you want to talk through dimensions by phone, my cell is below.</p>
        <p>Sincerely,</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Founder &amp; CEO, Norris Utilities, LLC<br>
        &nbsp;&nbsp;&nbsp;&nbsp;205-500-1343 | acnorris@norrisutilities.com</p>
      </div>
    </section>

    <!-- RISK -->
    <section class="section">
      <h2 class="section-title"><span class="lead">Risk</span> <span class="tail">&amp; Escalation</span></h2>
      <p>If any of the following happens, stop the rework path and switch to Option B (cut new):</p>
      <ul class="checklist">
        <li><strong>Shell material is damaged</strong> on arrival — tears, punctures, or compromised hook-and-loop.</li>
        <li><strong>Target dimensions are smaller than the existing shell by more than 6 inches</strong> on either axis — reworking would leave visible seam bulk.</li>
        <li><strong>Target dimensions are larger than the shell</strong> — cannot grow a cover from existing material.</li>
        <li><strong>Customer needs it in under 5 business days</strong> — overnight a new cut instead.</li>
      </ul>
      <div class="callout amber">
        <div class="callout-title">Escalation Path</div>
        <p>If any trigger above fires, Aaron approves the cut-new decision before the shop starts a new unit. CB logs the scrap disposition of the original cover in the rework ledger so margin impact is tracked.</p>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO
      <span class="nu-footer-divider">|</span>
      Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a>
      <span class="nu-footer-divider">|</span>
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a>
      <span class="nu-footer-divider">|</span>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>