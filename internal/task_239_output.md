<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Purchase Negotiation — 4505 Buttewoods — Norris Utilities®</title>
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      background-size: 60px 60px, 80px 80px;
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
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ACTION ITEM BANNER */
    .action-banner {
      background: linear-gradient(90deg, rgba(0,0,255,0.05) 0%, rgba(6,208,255,0.05) 100%);
      border-left: 6px solid var(--nu-blue);
      padding: 20px 28px;
      margin-bottom: 40px;
      border-radius: 4px;
    }
    .action-banner-label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .action-banner-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* PAGE TITLE */
    .page-title {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .page-title span {
      color: var(--nu-blue);
    }
    .page-subtitle {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 48px;
      font-weight: 400;
    }

    /* PROPERTY SNAPSHOT */
    .snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 48px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .snapshot-cell {
      background: var(--nu-white);
      padding: 28px 20px;
      text-align: center;
    }
    .snapshot-value {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 6px;
    }
    .snapshot-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #666;
    }

    /* SECTION */
    .section {
      margin-bottom: 48px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 20px;
      letter-spacing: 0.01em;
    }
    .section-title .accent { color: var(--nu-blue); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* CARDS */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-card h3 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .nu-card p, .nu-card li {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      padding: 6px 0;
      padding-left: 18px;
      position: relative;
    }
    .nu-card ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 0;
      font-size: 1.2rem;
      line-height: 1;
      top: 8px;
    }

    /* NEGOTIATION STAGES — chevron badges */
    .stage-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .stage {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 32px 16px 22px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
    }
    .stage-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px; height: 32px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.95rem;
      margin-right: 16px;
      flex-shrink: 0;
    }
    .stage-title {
      font-size: 1rem;
      letter-spacing: 0.02em;
      flex: 1;
    }
    .stage-meta {
      font-size: 0.8rem;
      color: var(--nu-cyan);
      font-weight: 400;
      margin-left: 16px;
      white-space: nowrap;
    }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px;
      border-left: 4px solid var(--nu-cyan);
    }
    .checklist h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .checklist ul {
      list-style: none;
    }
    .checklist li {
      padding: 8px 0 8px 30px;
      position: relative;
      font-size: 0.94rem;
      border-bottom: 1px dashed #d6d6db;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 13px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* TABLE */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .data-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .data-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .data-table tr:last-child td { border-bottom: none; }
    .data-table tr:nth-child(even) { background: var(--nu-light-gray); }
    .data-table td.right { text-align: right; font-variant-numeric: tabular-nums; }
    .data-table td.amt {
      font-weight: 700;
      color: var(--nu-blue);
      font-variant-numeric: tabular-nums;
    }

    /* CTA */
    .cta-strip {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0044dd 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      margin-top: 48px;
      flex-wrap: wrap;
    }
    .cta-strip .msg {
      font-size: 1.1rem;
      font-weight: 700;
      max-width: 620px;
      line-height: 1.4;
    }
    .nu-btn-secondary-white {
      display: inline-block;
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 14px 32px;
      border: none;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary-white:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.25);
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
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.45);
      margin-top: 20px;
      letter-spacing: 0.06em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .wrap { padding: 40px 20px 60px; }
      .page-title { font-size: 1.85rem; }
      .two-col { grid-template-columns: 1fr; }
      .stage { clip-path: none; border-radius: 8px; }
      .cta-strip { flex-direction: column; text-align: center; }
      .data-table th, .data-table td { padding: 10px 12px; font-size: 0.85rem; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
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
    <div class="wrap">

      <!-- ACTION BANNER -->
      <div class="action-banner">
        <div class="action-banner-label">reMarkable Action Item — Personal / Real Estate</div>
        <div class="action-banner-title">Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods</div>
      </div>

      <!-- TITLE -->
      <h1 class="page-title">Estate Acquisition <span>Negotiation Plan</span></h1>
      <p class="page-subtitle">4505 Buttewoods · 7,098 sq ft residence · structured offer and walk-away plan</p>

      <!-- SNAPSHOT -->
      <div class="snapshot">
        <div class="snapshot-cell">
          <div class="snapshot-value">4505</div>
          <div class="snapshot-label">Buttewoods</div>
        </div>
        <div class="snapshot-cell">
          <div class="snapshot-value">7,098</div>
          <div class="snapshot-label">Square Feet</div>
        </div>
        <div class="snapshot-cell">
          <div class="snapshot-value">1</div>
          <div class="snapshot-label">Parcel / Listing</div>
        </div>
        <div class="snapshot-cell">
          <div class="snapshot-value">30d</div>
          <div class="snapshot-label">Target Close Window</div>
        </div>
      </div>

      <!-- POSITION -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Negotiating</span> <span class="rest">Position</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>What I Bring to the Table</h3>
            <ul>
              <li>Qualified buyer with Renasant Bank relationship (Patrick Lavette) — proof of funds available within 48 hours</li>
              <li>Flexible close timing — can accelerate to 21 days or extend to 60 days to match seller's needs</li>
              <li>No contingency chain — not tied to sale of another primary residence</li>
              <li>Local Birmingham buyer, long-term intent, not a flip</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>What I Need to Learn</h3>
            <ul>
              <li>Seller's motivation — relocation, estate, downsizing, or investor disposition</li>
              <li>Days on market and prior price movements</li>
              <li>Any outstanding title, HOA, or easement issues</li>
              <li>Latest inspection findings and deferred maintenance line items</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- STAGES -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Negotiation</span> <span class="rest">Stages</span></h2>
        <div class="stage-list">
          <div class="stage">
            <span class="stage-num">1</span>
            <span class="stage-title">Intelligence — pull comps, tax record, and ownership history</span>
            <span class="stage-meta">Day 1–2</span>
          </div>
          <div class="stage">
            <span class="stage-num">2</span>
            <span class="stage-title">Lender pre-approval letter refreshed with Patrick Lavette at Renasant</span>
            <span class="stage-meta">Day 1</span>
          </div>
          <div class="stage">
            <span class="stage-num">3</span>
            <span class="stage-title">Initial offer — anchored below list, with clear terms and short response window</span>
            <span class="stage-meta">Day 3</span>
          </div>
          <div class="stage">
            <span class="stage-num">4</span>
            <span class="stage-title">Counter review — hold firm on price, give on close date or repair credits</span>
            <span class="stage-meta">Day 5–7</span>
          </div>
          <div class="stage">
            <span class="stage-num">5</span>
            <span class="stage-title">Inspection period — professional inspection + foundation + roof specialists</span>
            <span class="stage-meta">Day 8–17</span>
          </div>
          <div class="stage">
            <span class="stage-num">6</span>
            <span class="stage-title">Repair negotiation — request credit, not repairs, for known-unknowns</span>
            <span class="stage-meta">Day 17–22</span>
          </div>
          <div class="stage">
            <span class="stage-num">7</span>
            <span class="stage-title">Close — funding, walk-through, title transfer</span>
            <span class="stage-meta">Day 30</span>
          </div>
        </div>
      </section>

      <!-- OFFER STRUCTURE -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Offer</span> <span class="rest">Structure &amp; Walk-Away</span></h2>
        <table class="data-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Price Anchor</th>
              <th>Terms</th>
              <th>Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opening</strong></td>
              <td class="amt">~88% of list</td>
              <td>21-day close, earnest money 1%, 10-day inspection</td>
              <td>Anchors low; leaves real room to climb on counter</td>
            </tr>
            <tr>
              <td><strong>Target</strong></td>
              <td class="amt">~93% of list</td>
              <td>30-day close, earnest money 1.5%, repair credit only</td>
              <td>Acceptable comp-supported number; protects resale basis</td>
            </tr>
            <tr>
              <td><strong>Ceiling</strong></td>
              <td class="amt">~97% of list</td>
              <td>30-day close, full contingencies, repair cap $15K</td>
              <td>Absolute top; only if inspection is clean and comps justify</td>
            </tr>
            <tr>
              <td><strong>Walk-Away</strong></td>
              <td class="amt">&gt; 97% of list</td>
              <td>—</td>
              <td>Exit cleanly and revisit in 60 days if still listed</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DILIGENCE -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="two-col">
          <div class="checklist">
            <h4>Property &amp; Title</h4>
            <ul>
              <li>Pull plat, survey, and legal description for 4505 Buttewoods</li>
              <li>Order title search with preferred closing attorney</li>
              <li>Confirm no outstanding liens, judgments, or mechanic's claims</li>
              <li>Verify HOA / POA status, dues, transfer fees, and restrictions</li>
              <li>Pull last three years of property tax history</li>
              <li>Check flood zone, basement water history, and drainage easements</li>
            </ul>
          </div>
          <div class="checklist">
            <h4>Physical &amp; Financial</h4>
            <ul>
              <li>Licensed home inspection — Birmingham preferred vendor</li>
              <li>Separate foundation and roof inspections at 7,098 sq ft scale</li>
              <li>HVAC system audit — expect multiple zones on a home this size</li>
              <li>Utility bill history — 12 months of power, gas, water</li>
              <li>Insurance quote with Renasant-approved carrier</li>
              <li>Proof of funds + updated pre-approval from Patrick Lavette</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- STAKEHOLDERS / LEVERAGE -->
      <section class="section">
        <h2 class="section-title"><span class="accent">Stakeholders</span> <span class="rest">&amp; Leverage Points</span></h2>
        <div class="card-grid">
          <div class="nu-card">
            <h3>Buyer Side — Aaron</h3>
            <p>Primary decision-maker. Single signer. Owner-occupant intent. Keeps negotiation direct and avoids layered approval chains that slow sellers down.</p>
          </div>
          <div class="nu-card">
            <h3>Lender — Renasant Bank</h3>
            <p>Patrick Lavette is the relationship officer. Request refreshed pre-approval and proof-of-funds letter before delivering any offer — speed signals seriousness.</p>
          </div>
          <div class="nu-card">
            <h3>Seller &amp; Agent</h3>
            <p>Establish communication cadence with listing agent. Clarify whether seller is testing the market or motivated. Motivation defines the opening anchor.</p>
          </div>
          <div class="nu-card">
            <h3>Closing Attorney</h3>
            <p>Engage a Birmingham-area closing attorney with experience on larger residential estates. Flag basement water intrusion and survey discrepancies early.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="cta-strip">
        <div class="msg">Ready to move. Lender letter refreshed, inspection vendors on standby, offer structure defined. Next step: gather intel and submit Tier 1 offer.</div>
        <a class="nu-btn-secondary-white" href="tel:2055001343">Call 205-500-1343</a>
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
    <div class="nu-footer-meta">Internal planning document · reMarkable action item · 2026-04-24</div>
  </footer>

</body>
</html>