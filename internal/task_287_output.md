<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lifetime Warranty Clarification — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --nu-blue: #0000FF;
      --nu-blue-deep: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-warning: #C75300;
      --nu-success: #1F7A3A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, #06D0FF 100%);
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 84px;
      height: 84px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
      opacity: 0.95;
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 800px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,51,204,0.07) 0%, transparent 60%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOC META BAR */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding: 18px 24px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 40px;
      font-size: 0.88rem;
    }
    .doc-meta-item { display: flex; flex-direction: column; }
    .doc-meta-label {
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--nu-blue-deep);
      font-size: 0.72rem;
      margin-bottom: 2px;
    }
    .doc-meta-value {
      font-weight: 400;
      color: var(--nu-dark-text);
    }

    /* SECTION HEADERS — first word blue, rest dark */
    .section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 48px 0 16px;
      letter-spacing: -0.01em;
    }
    .section-title-first {
      color: var(--nu-blue-deep);
    }
    .section-title-rest {
      color: var(--nu-dark-text);
    }

    h1.page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.25rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      letter-spacing: -0.02em;
      line-height: 1.15;
    }
    h1.page-title .accent { color: var(--nu-blue-deep); }

    .subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      margin-bottom: 32px;
      max-width: 720px;
    }

    /* THE QUESTION CALLOUT */
    .question-callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001a66 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 8px;
      margin: 24px 0 40px;
      box-shadow: 0 8px 28px rgba(0,0,51,0.25);
    }
    .question-label {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 12px;
    }
    .question-text {
      font-size: 1.35rem;
      font-weight: 700;
      line-height: 1.4;
      color: var(--nu-white);
    }
    .question-text em {
      font-style: italic;
      color: var(--nu-cyan);
    }

    /* TWO-COLUMN COMPARE */
    .compare-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin: 24px 0 16px;
    }
    .compare-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .compare-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .compare-card.option-b {
      border-top-color: var(--nu-cyan);
    }
    .compare-card-label {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 6px 12px;
      border-radius: 3px;
      margin-bottom: 14px;
    }
    .compare-card.option-b .compare-card-label {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .compare-card-title {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      line-height: 1.3;
    }
    .compare-card-body {
      font-size: 0.96rem;
      color: var(--nu-body-text);
      margin-bottom: 16px;
    }
    .compare-card ul {
      list-style: none;
      padding: 0;
      margin: 12px 0;
    }
    .compare-card ul li {
      padding: 6px 0 6px 20px;
      position: relative;
      font-size: 0.92rem;
    }
    .compare-card ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 4px;
      top: 4px;
    }
    .compare-card.option-b ul li::before {
      color: var(--nu-cyan);
    }
    .pros-label, .cons-label {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-top: 14px;
      margin-bottom: 4px;
    }
    .pros-label { color: var(--nu-success); }
    .cons-label { color: var(--nu-warning); }

    /* SCENARIO TABLE */
    .scenario-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0 24px;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .scenario-table thead {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .scenario-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .scenario-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
      vertical-align: top;
    }
    .scenario-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .scenario-table .scenario-name {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 28%;
    }
    .badge-structure {
      display: inline-block;
      background: rgba(0,51,204,0.12);
      color: var(--nu-blue-deep);
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.78rem;
      font-weight: 700;
    }
    .badge-owner {
      display: inline-block;
      background: rgba(6,208,255,0.18);
      color: #006080;
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.78rem;
      font-weight: 700;
    }

    /* RECOMMENDATION BOX */
    .recommendation {
      background: linear-gradient(135deg, #f0f4ff 0%, #e6efff 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
      margin: 32px 0;
    }
    .recommendation-label {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
      margin-bottom: 10px;
    }
    .recommendation h3 {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      line-height: 1.3;
    }
    .recommendation p {
      margin-bottom: 12px;
    }
    .recommendation p:last-child { margin-bottom: 0; }

    /* DECISION CHECKLIST */
    .decision-list {
      list-style: none;
      padding: 0;
      margin: 16px 0 24px;
    }
    .decision-list li {
      padding: 14px 16px 14px 48px;
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-blue);
      margin-bottom: 8px;
      position: relative;
      border-radius: 0 4px 4px 0;
    }
    .decision-list li::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* SAMPLE LANGUAGE BOX */
    .sample-language {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 26px;
      margin: 16px 0 24px;
      border-radius: 0 6px 6px 0;
    }
    .sample-language-label {
      font-weight: 900;
      font-size: 0.74rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
      margin-bottom: 8px;
    }
    .sample-language p {
      font-style: italic;
      color: var(--nu-dark-text);
      font-size: 0.96rem;
      line-height: 1.7;
    }

    p { margin-bottom: 14px; }
    strong { color: var(--nu-dark-text); font-weight: 700; }

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
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .compare-grid { grid-template-columns: 1fr; }
      .container { padding: 40px 24px; }
      h1.page-title { font-size: 1.8rem; }
      .question-text { font-size: 1.15rem; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .scenario-table th, .scenario-table td { padding: 10px 12px; font-size: 0.86rem; }
      .doc-meta { flex-direction: column; gap: 10px; }
    }

    /* PRINT */
    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .compare-card { box-shadow: none; border: 1px solid #ccc; }
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
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <h1 class="page-title"><span class="accent">"Lifetime"</span> — What Does It Actually Mean?</h1>
      <p class="subtitle">An internal clarification document for Norris Utilities® product warranty language. Resolves ambiguity in marketing, quoting, and warranty registration before the language goes to print or to a customer.</p>

      <!-- DOC META -->
      <div class="doc-meta">
        <div class="doc-meta-item">
          <span class="doc-meta-label">Document Type</span>
          <span class="doc-meta-value">Internal Clarification — Action Item</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Source</span>
          <span class="doc-meta-value">reMarkable Action Item</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Owner</span>
          <span class="doc-meta-value">Aaron C. Norris</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Status</span>
          <span class="doc-meta-value">Awaiting Decision</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Affects</span>
          <span class="doc-meta-value">FlexPro Armor warranty language, quotes, line card, web copy</span>
        </div>
      </div>

      <!-- THE QUESTION -->
      <div class="question-callout">
        <div class="question-label">The Question</div>
        <div class="question-text">
          When we say a product carries a <em>"lifetime"</em> guarantee, do we mean the <em>life of the structure</em> (the bucket cover itself) — or the <em>life of the original owner</em> (the person who bought it)?
        </div>
      </div>

      <h2 class="section-title"><span class="section-title-first">Why</span> <span class="section-title-rest">This Matters Now</span></h2>
      <p>The word "lifetime" appears in informal product conversations and in some draft marketing language. Before that wording lands on a printed line card, a quote PDF, a website page, or an invoice line, we have to lock in exactly what the obligation is. Two customers with the same handshake can walk away with two completely different expectations — and the difference is real money the day a claim shows up.</p>
      <p>This sheet lays out both options, the trade-offs, real-world scenarios, and a recommendation Aaron can sign off on or override.</p>

      <!-- TWO OPTIONS -->
      <h2 class="section-title"><span class="section-title-first">Two</span> <span class="section-title-rest">Possible Definitions</span></h2>

      <div class="compare-grid">

        <div class="compare-card">
          <div class="compare-card-label">Option A</div>
          <div class="compare-card-title">Life of the Structure</div>
          <div class="compare-card-body">
            "Lifetime" = as long as the physical product (the FlexPro Armor cover, the rope, the equipment) remains in normal service. The warranty travels with the product, not the buyer. When the product is retired, scrapped, or damaged beyond repair, the warranty ends.
          </div>

          <div class="pros-label">Strengths</div>
          <ul>
            <li>Warranty is transferable — supports the secondhand market and resale value.</li>
            <li>Easier to administer: no need to verify original purchaser's identity years later.</li>
            <li>Fits a manufacturer-grade promise on a USA-made product.</li>
          </ul>

          <div class="cons-label">Risks</div>
          <ul>
            <li>Open-ended exposure if a product is well-maintained for 15+ years.</li>
            <li>Requires a clear definition of "normal service" to exclude abuse.</li>
          </ul>
        </div>

        <div class="compare-card option-b">
          <div class="compare-card-label">Option B</div>
          <div class="compare-card-title">Life of the Original Owner</div>
          <div class="compare-card-body">
            "Lifetime" = as long as the original purchaser owns and uses the product in the role it was bought for. Once the product is sold, transferred to a different company, or the original owner exits the business, the warranty ends.
          </div>

          <div class="pros-label">Strengths</div>
          <ul>
            <li>Caps long-tail liability — no warranty claim from a third or fourth owner.</li>
            <li>Encourages customer retention and direct repurchase relationships.</li>
            <li>Cleaner accounting for warranty reserve.</li>
          </ul>

          <div class="cons-label">Risks</div>
          <ul>
            <li>Customer goodwill suffers if a unit is sold to a sister company and warranty is voided.</li>
            <li>Resale value of used FlexPro Armor units drops without transferable coverage.</li>
            <li>Verification overhead: who is the "original owner" — the company, the contractor's business entity, the fleet manager?</li>
          </ul>
        </div>

      </div>

      <!-- SCENARIO TABLE -->
      <h2 class="section-title"><span class="section-title-first">Real</span> <span class="section-title-rest">Scenarios — How Each Definition Plays Out</span></h2>
      <table class="scenario-table">
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Option A — Life of Structure</th>
            <th>Option B — Life of Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="scenario-name">Cover sold from contractor to subcontractor in year 4. Stitching fails in year 6.</td>
            <td><span class="badge-structure">Covered</span> Warranty travels with the product.</td>
            <td><span class="badge-owner">Not covered</span> Original owner no longer holds it.</td>
          </tr>
          <tr>
            <td class="scenario-name">Original buyer sells the business and retires. New owner files a claim in year 3.</td>
            <td><span class="badge-structure">Covered</span> Same product, normal service.</td>
            <td><span class="badge-owner">Not covered</span> Original owner is out of the picture.</td>
          </tr>
          <tr>
            <td class="scenario-name">Bucket truck involved in an accident; cover is destroyed.</td>
            <td><span class="badge-structure">Ends</span> Product no longer exists.</td>
            <td><span class="badge-owner">Ends</span> Same outcome.</td>
          </tr>
          <tr>
            <td class="scenario-name">Cover used hard for 12 years on the same truck, same fleet, same buyer. Failure due to wear.</td>
            <td><span class="badge-structure">Judgment call</span> Need a "normal service" threshold.</td>
            <td><span class="badge-owner">Judgment call</span> Same threshold question applies.</td>
          </tr>
          <tr>
            <td class="scenario-name">Buyer transfers the cover from their bucket truck to a rented unit.</td>
            <td><span class="badge-structure">Covered</span> Same product in service.</td>
            <td><span class="badge-owner">Covered</span> Same owner still controls it.</td>
          </tr>
          <tr>
            <td class="scenario-name">Customer's company merges with another. Asset roll-up to new parent.</td>
            <td><span class="badge-structure">Covered</span> Product unchanged.</td>
            <td><span class="badge-owner">Gray area</span> Need to define "owner" — entity vs. person.</td>
          </tr>
        </tbody>
      </table>

      <!-- DEFINITIONAL ISSUES -->
      <h2 class="section-title"><span class="section-title-first">What</span> <span class="section-title-rest">Either Definition Still Has to Solve</span></h2>
      <p>No matter which path is chosen, the warranty language has to cover four supporting questions. These are the real source of disputes — not the headline word "lifetime."</p>

      <ul class="decision-list">
        <li><strong>"Owner" definition.</strong> Is the owner the legal entity (LLC, corporation), the named individual on the invoice, or the operating fleet? Each leads to different outcomes in mergers and resales.</li>
        <li><strong>"Normal service" definition.</strong> What separates expected wear from a covered defect? Recommend a written exclusion list (UV degradation past year X, abrasion from off-spec mounting, exposure to industrial chemicals, etc.).</li>
        <li><strong>Proof of original purchase.</strong> Required for any claim. Recommend tying the warranty to the SKU + invoice number + date so it is provable from QuickBooks records.</li>
        <li><strong>Remedy ladder.</strong> Repair first, replace second, refund last — and define who pays freight in each case (Norris Utilities® for defects, customer for non-warranty service).</li>
      </ul>

      <!-- RECOMMENDATION -->
      <div class="recommendation">
        <div class="recommendation-label">Recommendation</div>
        <h3>Use Option A — "Life of the Structure" — with named exclusions and a registration step.</h3>
        <p><strong>Why:</strong> FlexPro Armor is a handmade, USA-built, premium-margin product. A transferable, structure-life guarantee matches the brand promise on the line card and supports resale value, which contractors notice when they buy. It is the stronger sales story and the easier story to explain in a quote.</p>
        <p><strong>How we cap exposure:</strong> Pair "life of the structure" with a written exclusion list (abrasion outside spec, chemical exposure, modification, accident damage), a 30-day-from-receipt warranty registration via the SKU and invoice number, and a remedy ladder (repair → replace → credit). That keeps the open-ended risk Option B is trying to solve, without giving up the customer-facing benefit.</p>
        <p><strong>Where Option B still applies:</strong> For Samson Rope and equipment lines (Skylift, Bay Shore Systems), defer to the manufacturer's published warranty terms. We do not extend "lifetime" language on resold equipment under any definition.</p>
      </div>

      <!-- SAMPLE LANGUAGE -->
      <h2 class="section-title"><span class="section-title-first">Draft</span> <span class="section-title-rest">Warranty Language for FlexPro Armor</span></h2>
      <p>The wording below applies the recommendation. It is a draft for Aaron's edit — not yet approved for customer-facing use.</p>

      <div class="sample-language">
        <div class="sample-language-label">Draft — Not Yet Approved</div>
        <p>"FlexPro Armor bucket covers, manufactured by Norris Utilities®, LLC, are guaranteed for the working life of the cover against defects in materials and workmanship, when used in normal utility service and registered within 30 days of receipt. Coverage transfers with the product. Repair or replacement is provided at the discretion of Norris Utilities®. The guarantee does not cover damage from accidents, modification, chemical exposure outside published service conditions, or wear from use beyond the cover's intended specification. Original invoice and SKU are required for any claim."</p>
      </div>

      <!-- DECISIONS NEEDED -->
      <h2 class="section-title"><span class="section-title-first">Decisions</span> <span class="section-title-rest">Aaron Needs to Make</span></h2>
      <ul class="decision-list">
        <li><strong>Approve Option A, Option B, or a hybrid.</strong> Pick one before "lifetime" is used in any quote, line card revision, or web page.</li>
        <li><strong>Lock the exclusion list.</strong> Three to six bullet points, written plainly, that everyone (Aaron, CB, MK Smith) reads the same way.</li>
        <li><strong>Lock the registration step.</strong> Decide whether a buyer must register the product (form, email, SKU + invoice) for the guarantee to attach.</li>
        <li><strong>Lock who can speak to a claim.</strong> Recommend Aaron only — CB documents and routes, Aaron decides outcome.</li>
        <li><strong>Approve final warranty paragraph.</strong> Once locked, this paragraph goes on the line card, the website, every FlexPro Armor quote PDF, and the inside flap of any printed packaging.</li>
      </ul>

      <p style="margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--nu-medium-gray); font-size: 0.9rem; color: #555;">
        <strong>Next step:</strong> Aaron reviews this sheet, marks Option A / Option B / hybrid, and edits the draft language. Once locked, the wording propagates to the line card, the FlexPro Armor product page, the standard quote template, and the warranty registration flow. Until then, "lifetime" should not appear in any new customer-facing document.
      </p>

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