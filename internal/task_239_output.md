<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      padding: 60px 40px 80px;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* TASK HEADLINE */
    .task-badge {
      display: inline-block;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-cyan);
      padding: 8px 18px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .task-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .task-title span.accent {
      color: var(--nu-blue);
    }
    .task-subtitle {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 40px;
      font-weight: 400;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 20px;
      padding-bottom: 8px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* PROPERTY STATS GRID */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }
    .stat-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 22px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .stat-label {
      font-size: 0.75rem;
      font-weight: 700;
      color: #666;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .stat-value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .stat-sub {
      font-size: 0.85rem;
      color: #777;
      margin-top: 4px;
    }

    /* CHEVRON BADGES (action items) */
    .action-list {
      list-style: none;
    }
    .action-item {
      display: flex;
      align-items: flex-start;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 32px 16px 20px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      gap: 14px;
    }
    .action-item .num {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.1rem;
      flex-shrink: 0;
      min-width: 28px;
    }
    .action-item .txt {
      font-weight: 400;
      line-height: 1.5;
    }
    .action-item .txt strong {
      color: var(--nu-cyan);
      font-weight: 700;
    }

    /* NEGOTIATION STRATEGY */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .strategy-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .strategy-card h3 {
      color: var(--nu-blue);
      font-size: 1.1rem;
      font-weight: 900;
      margin-bottom: 10px;
    }
    .strategy-card p {
      font-size: 0.95rem;
      color: #444;
      line-height: 1.55;
    }
    .strategy-card .icon-badge {
      display: inline-block;
      width: 32px; height: 32px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: white;
      border-radius: 50%;
      text-align: center;
      line-height: 32px;
      font-weight: 900;
      margin-bottom: 12px;
    }

    /* DUE DILIGENCE CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px 32px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      gap: 14px;
    }
    .checklist-item:last-child { border-bottom: none; }
    .check-box {
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-item .label {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .checklist-item .detail {
      font-weight: 400;
      color: #555;
      font-size: 0.9rem;
      display: block;
      margin-top: 2px;
    }

    /* KEY TERMS TABLE */
    .terms-table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .terms-table th {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: white;
      padding: 14px 18px;
      text-align: left;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 900;
    }
    .terms-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .terms-table tr:last-child td { border-bottom: none; }
    .terms-table tr:nth-child(even) { background: var(--nu-light-gray); }
    .terms-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 38%;
    }

    /* TIMELINE */
    .timeline {
      border-left: 3px solid var(--nu-cyan);
      padding-left: 28px;
      margin-left: 8px;
    }
    .timeline-step {
      position: relative;
      padding-bottom: 24px;
    }
    .timeline-step::before {
      content: '';
      position: absolute;
      left: -37px;
      top: 4px;
      width: 15px;
      height: 15px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-cyan);
      border-radius: 50%;
    }
    .timeline-step h4 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 4px;
    }
    .timeline-step p {
      color: #444;
      font-size: 0.95rem;
    }

    /* NOTE BOX */
    .note-box {
      background: linear-gradient(135deg, #fff9e6 0%, #fff4cc 100%);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 24px;
      border-radius: 4px;
      margin-top: 24px;
      font-size: 0.95rem;
    }
    .note-box strong {
      color: #8a6d1a;
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
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .task-title { font-size: 1.8rem; }
      .nu-content-area { padding: 40px 20px 60px; }
      .action-item { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .terms-table th, .terms-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .strategy-card, .terms-table { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
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

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="task-badge">Action Item · Real Estate Acquisition</div>
      <h1 class="task-title">Negotiate Purchase —<br><span class="accent">4505 Buttewoods</span> Estate</h1>
      <p class="task-subtitle">7,098 sq ft residence · Strategy, due diligence, and negotiation playbook for Aaron C. Norris</p>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-label">Address</div>
            <div class="stat-value">4505 Buttewoods</div>
            <div class="stat-sub">Subject property</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Living Area</div>
            <div class="stat-value">7,098 sq ft</div>
            <div class="stat-sub">Estate-class residence</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Transaction</div>
            <div class="stat-value">Purchase Negotiation</div>
            <div class="stat-sub">Aaron as buyer</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Status</div>
            <div class="stat-value">Open — Active</div>
            <div class="stat-sub">Move from reMarkable to action</div>
          </div>
        </div>
      </section>

      <!-- IMMEDIATE ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Immediate <span>Actions</span></h2>
        <ul class="action-list">
          <li class="action-item">
            <span class="num">01</span>
            <span class="txt">Pull the current <strong>MLS listing, tax record, and deed history</strong> for 4505 Buttewoods — confirm legal owner, lot size, assessed value, and last sale price.</span>
          </li>
          <li class="action-item">
            <span class="num">02</span>
            <span class="txt">Order a <strong>CMA (comparative market analysis)</strong> on 7,000+ sq ft homes within a 2-mile radius, sold in the last 12 months, to anchor the offer range.</span>
          </li>
          <li class="action-item">
            <span class="num">03</span>
            <span class="txt">Line up financing — confirm <strong>Patrick Lavette at Renasant Bank</strong> for pre-approval letter before the first offer is submitted.</span>
          </li>
          <li class="action-item">
            <span class="num">04</span>
            <span class="txt">Walk the property with a trusted inspector. Document <strong>roof, HVAC, foundation, and any deferred maintenance</strong> that becomes a negotiation lever.</span>
          </li>
          <li class="action-item">
            <span class="num">05</span>
            <span class="txt">Set the <strong>walk-away number</strong> before drafting the offer. Write it down. Do not move off it in the moment.</span>
          </li>
        </ul>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Strategy</span></h2>
        <div class="strategy-grid">
          <div class="strategy-card">
            <div class="icon-badge">1</div>
            <h3>Open Low, Justify Every Dollar</h3>
            <p>First offer should sit 8–12% below the CMA median. Back it with comps, not feelings. Sellers accept anchored numbers; they reject insults.</p>
          </div>
          <div class="strategy-card">
            <div class="icon-badge">2</div>
            <h3>Lead with Terms, Not Just Price</h3>
            <p>Faster close, larger earnest money, shorter inspection window, and a clean financing contingency often beat a higher headline number.</p>
          </div>
          <div class="strategy-card">
            <div class="icon-badge">3</div>
            <h3>Use the Inspection as a Second Negotiation</h3>
            <p>Every estate this size has $15–40k of deferred items. Price in repairs as a credit at close, not a re-list of the contract.</p>
          </div>
          <div class="strategy-card">
            <div class="icon-badge">4</div>
            <h3>Create Silence. Let It Work.</h3>
            <p>After each counter, respond once — then wait. Urgency is the seller's problem, not the buyer's. Time favors whoever is willing to walk.</p>
          </div>
          <div class="strategy-card">
            <div class="icon-badge">5</div>
            <h3>Build a Written Walk-Away</h3>
            <p>Cap price. Cap repair concessions. Cap closing timeline. If any line is crossed, the deal dies without renegotiation of Aaron's position.</p>
          </div>
          <div class="strategy-card">
            <div class="icon-badge">6</div>
            <h3>Protect the Relationship</h3>
            <p>Negotiate hard on the contract, gracious on the phone. If the deal closes, Aaron lives in this house — and sees this seller again.</p>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Due Diligence <span>Checklist</span></h2>
        <div class="checklist">
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Title Search &amp; Deed History</span>
              <span class="detail">Confirm clean chain of title. Pull any prior liens, judgments, or easements of record.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Property Tax Verification</span>
              <span class="detail">Confirm current assessed value, tax millage, any exemptions, and whether taxes are current.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Professional Home Inspection</span>
              <span class="detail">Full inspection on a 7,098 sq ft estate — structural, roof, HVAC (likely multiple units), plumbing, electrical.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Foundation &amp; Drainage Review</span>
              <span class="detail">Estate-size footprints hide drainage problems. Dedicated foundation inspector if any cracks or grading concerns.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">HVAC &amp; Mechanical Audit</span>
              <span class="detail">Age of every unit, last service date, anticipated replacement cost. This is a common $20k+ surprise.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Roof &amp; Envelope</span>
              <span class="detail">Roof age, remaining life, penetrations, flashing, any insurance claims in the property's history.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Insurance Quote</span>
              <span class="detail">Get a binding quote before contract. Large estates get rate-shocked — know the real carrying cost.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Appraisal Ordered Through Lender</span>
              <span class="detail">Financed deal — lender appraisal sets the financed ceiling. Plan for any gap between appraisal and contract.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">HOA / Deed Restrictions</span>
              <span class="detail">Review covenants. Confirm there are no restrictions that limit home-business use, external modifications, or future resale.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Survey</span>
              <span class="detail">Current survey. Confirm lot lines, setbacks, any encroachments. Critical on estate-size lots.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- KEY CONTRACT TERMS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Key Contract <span>Terms to Lock</span></h2>
        <table class="terms-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Aaron's Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Earnest Money</td>
              <td>1% of purchase price, held in escrow with the closing attorney, refundable through inspection period.</td>
            </tr>
            <tr>
              <td>Inspection Period</td>
              <td>10–14 days. Right to terminate for any reason and receive full earnest money refund.</td>
            </tr>
            <tr>
              <td>Financing Contingency</td>
              <td>Keep it in. Confirm commitment letter from Renasant before waiving.</td>
            </tr>
            <tr>
              <td>Appraisal Contingency</td>
              <td>Buyer may terminate or renegotiate if appraisal comes in below contract.</td>
            </tr>
            <tr>
              <td>Closing Date</td>
              <td>30–45 days from binding agreement. Shorter is leverage; do not overcommit.</td>
            </tr>
            <tr>
              <td>Seller Concessions</td>
              <td>Request closing costs paid by seller up to 3% of contract price.</td>
            </tr>
            <tr>
              <td>Home Warranty</td>
              <td>Seller-paid, minimum $700, one-year coverage from closing.</td>
            </tr>
            <tr>
              <td>Possession</td>
              <td>At closing and funding — no post-occupancy unless at a daily rate Aaron sets.</td>
            </tr>
            <tr>
              <td>Personal Property</td>
              <td>List every fixture, appliance, and item of personal property included. Get it in writing on the contract.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Deal <span>Timeline</span></h2>
        <div class="timeline">
          <div class="timeline-step">
            <h4>Week 1 — Research &amp; Financing</h4>
            <p>Pull MLS, tax record, deed history. Order CMA. Confirm Renasant pre-approval and hand letter to the listing agent on request only.</p>
          </div>
          <div class="timeline-step">
            <h4>Week 2 — Property Walk &amp; Offer Prep</h4>
            <p>Walk the property with a contractor's eye. Finalize walk-away number. Draft offer with competitive terms but disciplined price.</p>
          </div>
          <div class="timeline-step">
            <h4>Week 3 — Offer &amp; Negotiation</h4>
            <p>Submit first offer. Expect 1–2 rounds of counters. Stay silent between rounds. Hold the walk-away line.</p>
          </div>
          <div class="timeline-step">
            <h4>Weeks 4–5 — Due Diligence</h4>
            <p>Full inspection. Foundation and HVAC specialist if flagged. Insurance quote. Survey. Negotiate repair credit from findings.</p>
          </div>
          <div class="timeline-step">
            <h4>Weeks 6–7 — Appraisal &amp; Loan Commitment</h4>
            <p>Lender appraisal ordered. Final underwriting. If appraisal short — renegotiate price or apply gap strategy.</p>
          </div>
          <div class="timeline-step">
            <h4>Weeks 7–8 — Close</h4>
            <p>Final walkthrough 24 hours before closing. Clear-to-close confirmed. Sign, fund, take keys at the table.</p>
          </div>
        </div>
      </section>

      <!-- NOTE -->
      <section class="nu-section">
        <div class="note-box">
          <strong>Aaron's discipline rule:</strong> The written walk-away number is the contract with yourself. Every concession beyond it costs real money — either now at closing or later at resale. Negotiate the house you want at the price the comps support. Walk if the seller won't meet you there.
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
  </footer>

</body>
</html>