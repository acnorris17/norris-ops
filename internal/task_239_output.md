<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Strategy — Norris Utilities®</title>
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
      background: var(--nu-light-gray);
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
      width: 70px;
      height: 70px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 24px;
      padding: 8px 22px;
      border: 1.5px solid rgba(255,255,255,0.5);
      border-radius: 2px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.32em;
      text-transform: uppercase;
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
      top: 8%; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* TITLE BLOCK */
    .doc-title {
      font-weight: 900;
      font-size: 2.25rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .doc-title span {
      color: var(--nu-blue);
    }
    .doc-meta {
      font-size: 0.92rem;
      color: #666;
      letter-spacing: 0.04em;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-blue);
      margin-bottom: 40px;
    }
    .doc-meta strong { color: var(--nu-dark-text); }

    /* PROPERTY SUMMARY CARD */
    .property-card {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef1ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 28px 32px;
      margin-bottom: 40px;
      border-radius: 4px;
    }
    .property-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
    }
    .property-stat {
      padding: 4px 0;
    }
    .property-stat-label {
      font-size: 0.75rem;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 4px;
    }
    .property-stat-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .property-stat-value small {
      font-size: 0.85rem;
      font-weight: 400;
      color: #666;
    }

    /* SECTION */
    .section {
      margin-bottom: 44px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-title .first {
      color: var(--nu-blue);
    }
    .section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    p {
      margin-bottom: 14px;
      font-size: 1rem;
      color: var(--nu-body-text);
    }
    p strong { color: var(--nu-dark-text); }

    ul.bullets {
      list-style: none;
      margin: 14px 0;
      padding: 0;
    }
    ul.bullets li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 10px;
      font-size: 1rem;
    }
    ul.bullets li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
      top: -2px;
    }

    /* PHASE CARDS */
    .phase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .phase-card .phase-num {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      padding: 4px 10px;
      border-radius: 2px;
      margin-bottom: 10px;
    }
    .phase-card h4 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .phase-card p, .phase-card li {
      font-size: 0.92rem;
    }

    /* OFFER LADDER */
    .offer-ladder {
      background: var(--nu-light-gray);
      border-radius: 6px;
      overflow: hidden;
      margin: 20px 0;
    }
    .offer-row {
      display: grid;
      grid-template-columns: 110px 1fr 160px;
      gap: 16px;
      padding: 16px 20px;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: center;
    }
    .offer-row:last-child { border-bottom: none; }
    .offer-row.header {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .offer-tier {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.95rem;
    }
    .offer-row.header .offer-tier { color: var(--nu-cyan); }
    .offer-amount {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      text-align: right;
    }
    .offer-row.header .offer-amount {
      color: var(--nu-white);
      font-size: 0.78rem;
    }

    /* LEVERAGE TABLE */
    .leverage-table {
      width: 100%;
      border-collapse: collapse;
      margin: 18px 0;
      font-size: 0.95rem;
    }
    .leverage-table th {
      background: var(--nu-blue);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 16px;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-size: 0.85rem;
      text-transform: uppercase;
    }
    .leverage-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .leverage-table tr:nth-child(even) td {
      background: #fafbff;
    }
    .leverage-table .tag {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .tag-pro { background: #d4edda; color: #155724; }
    .tag-con { background: #f8d7da; color: #721c24; }
    .tag-neu { background: #fff3cd; color: #856404; }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 6px;
      margin: 30px 0;
    }
    .callout h4 {
      font-weight: 900;
      color: var(--nu-cyan);
      font-size: 1rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .callout p {
      color: rgba(255,255,255,0.92);
      margin-bottom: 0;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
      margin: 18px 0;
    }
    .checklist li {
      position: relative;
      padding: 10px 14px 10px 38px;
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-cyan);
      margin-bottom: 8px;
      border-radius: 2px;
      font-size: 0.95rem;
    }
    .checklist li::before {
      content: '☐';
      position: absolute;
      left: 12px;
      top: 9px;
      color: var(--nu-blue);
      font-size: 1.15rem;
      font-weight: 700;
    }

    /* WALK-AWAY */
    .walkaway {
      background: #fff8e1;
      border: 2px dashed var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 6px;
      margin: 24px 0;
    }
    .walkaway h4 {
      color: #8a6d00;
      font-weight: 900;
      margin-bottom: 8px;
      font-size: 1rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .walkaway p { color: #5a4900; margin-bottom: 0; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 22px 60px; }
      .doc-title { font-size: 1.55rem; }
      .property-card { padding: 22px; }
      .offer-row { grid-template-columns: 1fr; gap: 6px; padding: 14px 16px; }
      .offer-amount { text-align: left; }
      .offer-row.header { display: none; }
      .leverage-table th, .leverage-table td { padding: 10px 12px; font-size: 0.88rem; }
      .nu-footer-contact { font-size: 0.95rem; }
    }
  </style>
</head>
<body>

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
    <div class="nu-doc-label">Acquisition Strategy — Confidential</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="container">

      <h1 class="doc-title"><span>4505 Buttewoods</span> — Estate Acquisition Negotiation Strategy</h1>
      <div class="doc-meta">
        <strong>Subject:</strong> 7,098 sq ft estate at 4505 Buttewoods &nbsp;•&nbsp;
        <strong>Prepared for:</strong> Aaron C. Norris, Founder &amp; CEO &nbsp;•&nbsp;
        <strong>Date:</strong> April 21, 2026 &nbsp;•&nbsp;
        <strong>Status:</strong> Pre-offer planning
      </div>

      <!-- PROPERTY SUMMARY -->
      <div class="property-card">
        <h3>Subject Property at a Glance</h3>
        <div class="property-grid">
          <div class="property-stat">
            <div class="property-stat-label">Address</div>
            <div class="property-stat-value">4505 Buttewoods</div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Living Area</div>
            <div class="property-stat-value">7,098 <small>sq ft</small></div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Property Type</div>
            <div class="property-stat-value">Estate</div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Action Source</div>
            <div class="property-stat-value">reMarkable note</div>
          </div>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Objective</span> <span class="rest">— What "Win" Looks Like</span></h2>
        <p>Acquire 4505 Buttewoods at a price and on terms that protect family liquidity, preserve operating capital for Norris Utilities®, and leave room for inspection-driven price adjustments. The goal is not the lowest possible number — it is the <strong>best total deal</strong>: price, contingencies, closing timeline, repairs credit, and seller cooperation on personal property and possession.</p>
        <ul class="bullets">
          <li><strong>Primary win:</strong> Contract executed within 14 days at or below ceiling, with a working inspection contingency and a reasonable financing window.</li>
          <li><strong>Secondary win:</strong> Seller credits or repairs concessions equal to or greater than 1% of contract price.</li>
          <li><strong>Walk-away win:</strong> Cleanly exit if seller refuses inspection contingency or if appraisal gap exceeds tolerance — no emotional override.</li>
        </ul>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Phase 1</span> <span class="rest">— Due Diligence Before Any Number Crosses the Table</span></h2>
        <div class="phase-grid">
          <div class="phase-card">
            <span class="phase-num">STEP 1</span>
            <h4>Pull Comparable Sales</h4>
            <p>Comps for 6,000–8,000 sq ft homes within 3 miles, sold in last 9 months. Adjust for lot size, finish quality, and pool/outbuildings. Establish a defensible price-per-sq-ft range.</p>
          </div>
          <div class="phase-card">
            <span class="phase-num">STEP 2</span>
            <h4>Days on Market &amp; Price History</h4>
            <p>Listed how long? Any prior price reductions? Multiple cancelled listings? Each data point shifts leverage. A long DOM at one price is a strong signal for a sub-list opening offer.</p>
          </div>
          <div class="phase-card">
            <span class="phase-num">STEP 3</span>
            <h4>Seller Motivation Discovery</h4>
            <p>Why selling? Estate, relocation, divorce, downsizing, financial pressure? Have agent ask listing agent open-ended questions. Motivation determines whether to lead with price or terms.</p>
          </div>
          <div class="phase-card">
            <span class="phase-num">STEP 4</span>
            <h4>Title, Survey, &amp; Tax Review</h4>
            <p>Order preliminary title search. Pull tax assessment vs. asking price. Verify lot lines, easements, and any encumbrances. Surprises here break deals — catch them now.</p>
          </div>
          <div class="phase-card">
            <span class="phase-num">STEP 5</span>
            <h4>Pre-Inspection Walk-Through</h4>
            <p>Personal walk before any offer — roof age, HVAC count and age, foundation, water staining, pool/septic condition, deferred maintenance. Build a private repairs estimate.</p>
          </div>
          <div class="phase-card">
            <span class="phase-num">STEP 6</span>
            <h4>Financing Pre-Approval</h4>
            <p>Coordinate with Patrick Lavette at Renasant Bank. Pre-approval letter in hand, loan structure decided, and target appraised value confirmed before submitting offer.</p>
          </div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="section">
        <h2 class="section-title"><span class="first">Phase 2</span> <span class="rest">— The Offer Ladder</span></h2>
        <p>Define three numbers <em>before</em> the first offer goes in. Write them down. Do not move beyond the ceiling. Discipline at this step is what separates a successful negotiation from a regretted purchase.</p>

        <div class="offer-ladder">
          <div class="offer-row header">
            <div class="offer-tier">Tier</div>
            <div>Definition &amp; When To Use</div>
            <div class="offer-amount">% of Asking</div>
          </div>
          <div class="offer-row">
            <div class="offer-tier">Opening</div>
            <div>First written offer. Leaves room to negotiate up. Justified by comps, DOM, and condition findings. Submit with strong earnest money to signal seriousness.</div>
            <div class="offer-amount">85–90%</div>
          </div>
          <div class="offer-row">
            <div class="offer-tier">Target</div>
            <div>The number you genuinely want to land at after one or two rounds. Reach this in counter-offer two or three, paired with terms concessions.</div>
            <div class="offer-amount">92–95%</div>
          </div>
          <div class="offer-row">
            <div class="offer-tier">Ceiling</div>
            <div>The absolute maximum — non-negotiable internal limit. If seller will not meet at or below ceiling, walk. Do not adjust this number mid-negotiation.</div>
            <div class="offer-amount">≤ 98%</div>
          </div>
        </div>

        <p><strong>Note:</strong> Asking-price percentages above are the framework. Actual dollar values must be set <em>after</em> Phase 1 comps are complete. Never set the ceiling based on "what the seller wants" — set it based on "what the property is worth, plus what it is worth to me."</p>
      </section>

      <!-- LEVERAGE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Phase 3</span> <span class="rest">— Leverage Inventory</span></h2>
        <p>Every negotiation is a balance of pressure points. Identify which side holds which lever before talking dollars.</p>

        <table class="leverage-table">
          <thead>
            <tr>
              <th>Lever</th>
              <th>Description</th>
              <th>Side</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cash position / financing strength</strong></td>
              <td>Pre-approved at Renasant, low contingency risk for seller. Stronger than typical financed buyer.</td>
              <td><span class="tag tag-pro">Buyer</span></td>
            </tr>
            <tr>
              <td><strong>Time pressure</strong></td>
              <td>No urgency to move. Can wait for the right deal — or walk and look elsewhere.</td>
              <td><span class="tag tag-pro">Buyer</span></td>
            </tr>
            <tr>
              <td><strong>Inspection findings</strong></td>
              <td>Any meaningful defect found becomes a re-trade opportunity for price or repairs credit.</td>
              <td><span class="tag tag-pro">Buyer</span></td>
            </tr>
            <tr>
              <td><strong>Days on market</strong></td>
              <td>Long DOM erodes seller leverage. Each week on market increases buyer leverage.</td>
              <td><span class="tag tag-neu">Variable</span></td>
            </tr>
            <tr>
              <td><strong>Competing offers</strong></td>
              <td>If multiple offers exist, seller leverage rises sharply. Confirm or disprove before bidding against ghosts.</td>
              <td><span class="tag tag-con">Seller</span></td>
            </tr>
            <tr>
              <td><strong>Unique property characteristics</strong></td>
              <td>If 4505 Buttewoods is genuinely unique in the market, seller has scarcity leverage. If not, buyer has substitutes.</td>
              <td><span class="tag tag-neu">Property-driven</span></td>
            </tr>
            <tr>
              <td><strong>Seller carry costs</strong></td>
              <td>Mortgage, taxes, insurance, utilities on a 7,098 sq ft estate add up monthly. Time pressures the seller too.</td>
              <td><span class="tag tag-pro">Buyer</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TERMS BEYOND PRICE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Phase 4</span> <span class="rest">— Terms That Often Matter More Than Price</span></h2>
        <ul class="bullets">
          <li><strong>Closing timeline:</strong> Match seller's preferred timing. Sellers will trade dollars for the right close date — especially if they are coordinating a move, school year, or another purchase.</li>
          <li><strong>Earnest money:</strong> Strong earnest money signals commitment. Consider escalating deposits at milestones rather than one large up-front sum.</li>
          <li><strong>Inspection contingency:</strong> Non-negotiable. Pair with a tight inspection window (10–14 days) so seller is not held up.</li>
          <li><strong>Financing contingency:</strong> Keep it. Pre-approved is not "approved." A clean financing window protects earnest money.</li>
          <li><strong>Appraisal gap clause:</strong> If competition is real, offer a defined appraisal gap (e.g., cover up to a fixed dollar shortfall) — but cap it at the ceiling number.</li>
          <li><strong>Possession date:</strong> Build in a short post-close occupancy if seller needs it. This often unlocks price concessions.</li>
          <li><strong>Personal property &amp; fixtures:</strong> List in the offer exactly what conveys (chandeliers, appliances, mounted TVs, outdoor equipment, pool gear). Avoid post-contract disputes.</li>
          <li><strong>Repair credits vs. price reductions:</strong> Generally prefer credits at closing — keeps cash for repairs done your way, on your timeline.</li>
        </ul>
      </section>

      <!-- COUNTER-OFFER PLAYBOOK -->
      <section class="section">
        <h2 class="section-title"><span class="first">Phase 5</span> <span class="rest">— Counter-Offer Playbook</span></h2>
        <p>Every counter has a purpose. Move in measured steps. Never reveal the ceiling.</p>
        <ul class="bullets">
          <li><strong>Round 1:</strong> Submit Opening offer with strongest possible terms — quick close, strong earnest money, financing pre-approval letter attached. Provide one page of comp justification — make the offer feel rational, not insulting.</li>
          <li><strong>Round 2:</strong> If seller counters near asking, raise modestly (typically 25–40% of the gap) and ask for a meaningful concession in return — closing cost credit, included personal property, or accelerated timeline.</li>
          <li><strong>Round 3:</strong> Move toward Target. Pair every dollar of price increase with a non-price concession. Do not move on price without getting something back.</li>
          <li><strong>Round 4 (if needed):</strong> Best and final at or below Ceiling. Set a 24-hour response window. Be willing to walk if the answer is no.</li>
          <li><strong>Silence as a tool:</strong> After submitting a counter, do not call. Do not chase. Let seller sit with the offer. Patience compounds leverage.</li>
        </ul>
      </section>

      <!-- INSPECTION RE-TRADE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Phase 6</span> <span class="rest">— The Inspection Re-Trade</span></h2>
        <p>The inspection period is a second negotiation, often more productive than the first. Approach it deliberately.</p>
        <ul class="bullets">
          <li>Hire a licensed, thorough inspector — not the cheapest. On a 7,098 sq ft estate, also commission specialists: HVAC, roof, pool/spa, septic if applicable, structural if any settlement signs are visible.</li>
          <li>Compile findings into a single, professional repairs request. Do not nickel-and-dime — focus on safety, structural, mechanical, and material items.</li>
          <li>Ask for credit, repair, or price reduction — let the seller choose the form. Sellers often accept credits more readily than price drops.</li>
          <li>Document everything in writing through the agent. No verbal agreements.</li>
        </ul>
      </section>

      <!-- WALK-AWAY -->
      <div class="walkaway">
        <h4>★ Walk-Away Conditions — Define Now, Honor Later</h4>
        <p>Walk if any of the following occur: (1) seller refuses an inspection contingency, (2) inspection reveals structural, foundation, or environmental defects exceeding 5% of contract price with no concession, (3) appraisal comes in more than the agreed gap below contract, (4) title issues cannot be cleared by closing, or (5) negotiations push beyond the Ceiling number set in Phase 2. Discipline here protects every other deal Norris Utilities® is working on.</p>
      </div>

      <!-- CALLOUT -->
      <div class="callout">
        <h4>★ Negotiation Mindset</h4>
        <p>Negotiate from strength, not need. The seller has one buyer in front of them — you have many properties available. Stay warm and respectful in every interaction. Be the buyer the listing agent <em>wants</em> to recommend their seller take. Reputation in a market this size travels — every negotiation is also a future relationship.</p>
      </div>

      <!-- ACTION CHECKLIST -->
      <section class="section">
        <h2 class="section-title"><span class="first">Action</span> <span class="rest">Checklist — Next 14 Days</span></h2>
        <ul class="checklist">
          <li>Pull and review 6–8 comparable sales within 3-mile radius (target: 48 hours)</li>
          <li>Confirm seller motivation through listing agent — terms, timeline, reason for sale</li>
          <li>Personal walk-through of 4505 Buttewoods — build private repairs estimate</li>
          <li>Order preliminary title search and review tax assessment history</li>
          <li>Confirm financing pre-approval letter from Patrick Lavette / Renasant Bank</li>
          <li>Set Opening, Target, and Ceiling dollar figures in writing — share with no one outside trusted advisors</li>
          <li>Draft Round 1 offer with full terms package — submit through buyer's agent</li>
          <li>Establish 24–48 hour response windows on every counter to maintain pace</li>
          <li>Schedule full inspection plus specialist inspections immediately upon contract execution</li>
          <li>Decision review: re-confirm walk-away conditions before each counter-offer round</li>
        </ul>
      </section>

      <!-- CLOSING NOTE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Closing</span> <span class="rest">Note</span></h2>
        <p>This document is a private negotiation framework — not a contract, not legal advice, and not a commitment to purchase. All dollar values must be set by Aaron after Phase 1 comp work is complete. Engage a real estate attorney for contract review before any signature. The discipline of this framework — define, document, decide — is the difference between buying a property and being bought by one.</p>
      </section>

    </div>
  </main>

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