<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Negotiation Brief — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      width: 80px; height: 80px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 300px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.05) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PAGE TITLE */
    .brief-hero {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .brief-label {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 16px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      border-radius: 2px;
      margin-bottom: 16px;
    }
    .brief-hero h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .brief-hero h1 span { color: var(--nu-blue); }
    .brief-hero .subtitle {
      font-size: 1.05rem;
      color: #666;
      font-weight: 400;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      margin-bottom: 20px;
      letter-spacing: -0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    section { margin-bottom: 48px; }

    /* PROPERTY FACTS GRID */
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .fact-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 20px;
      border-radius: 4px;
    }
    .fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: #666;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1.3rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .fact-sub {
      font-size: 0.8rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* STRATEGY CARDS */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .strategy-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .strategy-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .strategy-card ul {
      list-style: none;
      padding: 0;
    }
    .strategy-card ul li {
      padding: 6px 0 6px 20px;
      position: relative;
      font-size: 0.95rem;
    }
    .strategy-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* CHEVRON BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 20px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.9rem;
      border-radius: 50%;
      margin-right: 14px;
      margin-left: 8px;
      flex-shrink: 0;
    }

    /* NEGOTIATION TABLE */
    table.price-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 8px;
      overflow: hidden;
    }
    table.price-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    table.price-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    table.price-table tr.highlight {
      background: rgba(6, 208, 255, 0.08);
    }
    table.price-table tr.highlight td {
      font-weight: 700;
      color: var(--nu-blue);
    }
    .price-figure { font-weight: 900; text-align: right; }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px 32px;
      border-left: 6px solid var(--nu-blue);
    }
    .checklist h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
    }
    .checklist ol {
      padding-left: 22px;
    }
    .checklist ol li {
      padding: 8px 0;
      font-size: 0.98rem;
    }
    .checklist ol li strong { color: var(--nu-blue); }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin: 32px 0;
    }
    .callout h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .callout p {
      font-size: 1.05rem;
      line-height: 1.6;
    }

    /* SCRIPT BOX */
    .script-box {
      background: var(--nu-white);
      border: 2px dashed var(--nu-cyan);
      border-radius: 8px;
      padding: 24px 28px;
      font-style: italic;
      color: #444;
      line-height: 1.7;
    }
    .script-box p + p { margin-top: 14px; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
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
      .nu-inner { padding: 40px 22px; }
      .brief-hero h1 { font-size: 1.65rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 20px; }
      table.price-table th, table.price-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .strategy-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-inner">

      <!-- HERO -->
      <div class="brief-hero">
        <span class="brief-label">Negotiation Brief · Personal Acquisition</span>
        <h1>4505 Buttewoods <span>— 7,098 SF Estate Purchase</span></h1>
        <p class="subtitle">Prepared for Aaron C. Norris — Founder &amp; CEO, Norris Utilities®, LLC</p>
      </div>

      <!-- PROPERTY FACTS -->
      <section>
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <div class="facts-grid">
          <div class="fact-card">
            <div class="fact-label">Address</div>
            <div class="fact-value">4505 Buttewoods</div>
            <div class="fact-sub">Target estate property</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Living Area</div>
            <div class="fact-value">7,098 SF</div>
            <div class="fact-sub">Above-grade, per listing</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Property Type</div>
            <div class="fact-value">Private Estate</div>
            <div class="fact-sub">Residential acquisition</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Stage</div>
            <div class="fact-value">Negotiation</div>
            <div class="fact-sub">Pre-offer positioning</div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVE -->
      <section>
        <h2 class="nu-section-title">Deal <span>Objective</span></h2>
        <div class="callout">
          <h3>Outcome Aaron Is Negotiating Toward</h3>
          <p>Secure 4505 Buttewoods at a defensible price below current list, with clean financing contingencies, a fair-but-firm inspection window, and closing terms that do not interfere with Norris Utilities® operations or outstanding Q2 commitments.</p>
        </div>
      </section>

      <!-- PRE-OFFER DILIGENCE -->
      <section>
        <h2 class="nu-section-title">Pre-Offer <span>Diligence Checklist</span></h2>
        <div class="strategy-grid">
          <div class="strategy-card">
            <h3>Market Comparables</h3>
            <ul>
              <li>Pull 3 closed sales within 1 mile, 6,500–7,500 SF, last 12 months</li>
              <li>Calculate $/SF range — build the anchor</li>
              <li>Flag any active listings still unsold after 90+ days</li>
              <li>Note seller concessions on comps (credits, rate buydowns)</li>
            </ul>
          </div>
          <div class="strategy-card">
            <h3>Property Condition</h3>
            <ul>
              <li>Roof age, HVAC systems count &amp; age</li>
              <li>Foundation walk — cracks, settling, drainage</li>
              <li>Pool/outdoor structures if present</li>
              <li>Any known flood / drainage history</li>
            </ul>
          </div>
          <div class="strategy-card">
            <h3>Seller Motivation</h3>
            <ul>
              <li>Days on market — how stale is the listing</li>
              <li>Price reductions to date</li>
              <li>Why are they selling? Relocation, downsizing, estate</li>
              <li>Timeline pressure — do they need to close by a date</li>
            </ul>
          </div>
          <div class="strategy-card">
            <h3>Financial Frame</h3>
            <ul>
              <li>Pre-approval letter locked in before offer</li>
              <li>Proof of funds for earnest money &amp; down payment</li>
              <li>Confirm cash reserves untouched by NU Q2 shipments</li>
              <li>Tax/insurance estimate — true cost of carry</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION LADDER -->
      <section>
        <h2 class="nu-section-title">Offer <span>Ladder</span></h2>
        <p style="margin-bottom:18px;">Three-step ladder. Start low enough to leave room for two counters, never so low it insults the seller. Anchor on comps, not list price.</p>
        <table class="price-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Target %</th>
              <th>Rationale</th>
              <th style="text-align:right;">Walk-Away Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opening Offer</strong></td>
              <td>88–92% of list</td>
              <td>Comp-anchored, signals serious buyer</td>
              <td class="price-figure">Low</td>
            </tr>
            <tr class="highlight">
              <td><strong>Mid-Point (Target)</strong></td>
              <td>93–95% of list</td>
              <td>Fair market, defensible by data</td>
              <td class="price-figure">Sweet Spot</td>
            </tr>
            <tr>
              <td><strong>Walk-Away Ceiling</strong></td>
              <td>97% of list</td>
              <td>Only with seller-paid closing or rate buydown</td>
              <td class="price-figure">High</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- LEVERAGE POINTS -->
      <section>
        <h2 class="nu-section-title">Leverage <span>Points</span></h2>
        <div class="nu-badge">
          <span class="badge-num">1</span>
          <span>Cash-strong buyer with clean financing — low fall-through risk</span>
        </div>
        <div class="nu-badge">
          <span class="badge-num">2</span>
          <span>Flexible close date — can accommodate seller's move-out timing</span>
        </div>
        <div class="nu-badge">
          <span class="badge-num">3</span>
          <span>Local Birmingham buyer — no relocation contingency, no home sale contingency</span>
        </div>
        <div class="nu-badge">
          <span class="badge-num">4</span>
          <span>Willing to write a short inspection window in exchange for price concession</span>
        </div>
        <div class="nu-badge">
          <span class="badge-num">5</span>
          <span>Established local business owner — credibility, financial stability documented</span>
        </div>
      </section>

      <!-- SCRIPT -->
      <section>
        <h2 class="nu-section-title">Opening <span>Conversation — Agent Script</span></h2>
        <div class="script-box">
          <p>"We've run the comps on Buttewoods and the homes closing in the last year in that pocket come in at a $/SF range we can defend. We're prepared to move quickly with a clean offer — pre-approval in hand, no home-sale contingency, flexible on closing date."</p>
          <p>"Our number reflects current market conditions and the specifics of this home. We're not trying to steal it, and we're not going to chase list price. If the sellers are serious, we'll get to the middle. What's their timing look like, and is there flexibility on price if we make closing easy on them?"</p>
        </div>
      </section>

      <!-- RED LINES -->
      <section>
        <h2 class="nu-section-title">Red <span>Lines — Walk If…</span></h2>
        <div class="checklist">
          <h3>Conditions That Kill the Deal</h3>
          <ol>
            <li><strong>Foundation issues</strong> discovered on inspection with no seller credit</li>
            <li><strong>Roof beyond useful life</strong> (15+ years) with no replacement credit</li>
            <li><strong>Flood zone classification</strong> requiring flood insurance not previously disclosed</li>
            <li><strong>Appraisal gap of more than 3%</strong> that seller refuses to meet halfway</li>
            <li><strong>Any title clouds</strong> — liens, boundary disputes, unresolved easements</li>
            <li><strong>Closing date slippage</strong> past 60 days without compensating concessions</li>
            <li><strong>Price exceeding 97% of list</strong> with no offsetting seller contributions</li>
          </ol>
        </div>
      </section>

      <!-- TERMS TO PROTECT -->
      <section>
        <h2 class="nu-section-title">Terms <span>to Protect</span></h2>
        <div class="strategy-grid">
          <div class="strategy-card">
            <h3>Financing Contingency</h3>
            <ul>
              <li>21 days minimum — do not compress below this</li>
              <li>Appraisal contingency stays</li>
              <li>Right to renegotiate or walk if appraisal comes in short</li>
            </ul>
          </div>
          <div class="strategy-card">
            <h3>Inspection Period</h3>
            <ul>
              <li>10 business days for general + specialty inspections</li>
              <li>Right to renegotiate price OR walk with full earnest money return</li>
              <li>Never waive inspection entirely — no matter the pressure</li>
            </ul>
          </div>
          <div class="strategy-card">
            <h3>Earnest Money</h3>
            <ul>
              <li>1% of purchase price, standard</li>
              <li>Held by neutral title company, not seller's agent</li>
              <li>Refundable during contingency periods</li>
            </ul>
          </div>
          <div class="strategy-card">
            <h3>Seller Disclosures</h3>
            <ul>
              <li>Written property disclosure statement required</li>
              <li>Any known defects, repairs, insurance claims — in writing</li>
              <li>Survey provided by seller or split 50/50</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ACTION STEPS -->
      <section>
        <h2 class="nu-section-title">Action <span>Steps — This Week</span></h2>
        <div class="checklist">
          <h3>Execution Sequence</h3>
          <ol>
            <li><strong>Monday —</strong> Pull comps. Confirm pre-approval letter is current (&lt;30 days old).</li>
            <li><strong>Tuesday —</strong> Second walk-through with a critical eye. Photograph every concern.</li>
            <li><strong>Wednesday —</strong> Agent call with listing agent. Gather seller motivation intel.</li>
            <li><strong>Thursday —</strong> Finalize opening offer number and written terms. Review with counsel if needed.</li>
            <li><strong>Friday —</strong> Submit written offer with proof of funds and pre-approval. 48-hour response deadline.</li>
            <li><strong>Weekend —</strong> Be responsive but not available. Silence is negotiating leverage.</li>
          </ol>
        </div>
      </section>

      <!-- CONTEXT NOTE -->
      <section>
        <div class="callout" style="background: linear-gradient(135deg, #000033 0%, #000066 100%);">
          <h3>Personal vs. Business Firewall</h3>
          <p>This is a personal acquisition, not a Norris Utilities® transaction. Keep the paperwork, financing, and entity structure cleanly separated from NU operations. Do not commingle earnest money with business accounts. Any entity-held purchase should be reviewed with Aaron's attorney and CPA before signing.</p>
        </div>
      </section>

      <!-- STATUS -->
      <section>
        <h2 class="nu-section-title">Brief <span>Status</span></h2>
        <div class="facts-grid">
          <div class="fact-card">
            <div class="fact-label">Prepared</div>
            <div class="fact-value">2026-04-20</div>
            <div class="fact-sub">Source: reMarkable capture</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Next Review</div>
            <div class="fact-value">Weekly</div>
            <div class="fact-sub">Until under contract</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Owner</div>
            <div class="fact-value">Aaron C. Norris</div>
            <div class="fact-sub">Personal — not NU entity</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Classification</div>
            <div class="fact-value">Private</div>
            <div class="fact-sub">Do not distribute</div>
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
  </footer>

</body>
</html>