<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
    /* ══ ROOT VARIABLES ══ */
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
      --nu-success-green: #1B7A3E;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
    }

    /* ══ BASE ══ */
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 85%, var(--nu-cyan) 100%);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
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
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      z-index: 0;
      opacity: 0.07;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1080px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* ══ TITLE BAR ══ */
    .nu-task-banner {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 22px 30px;
      border-radius: 8px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 14px;
      box-shadow: 0 6px 20px rgba(0,0,255,0.18);
    }
    .nu-task-banner-label {
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      opacity: 0.85;
    }
    .nu-task-banner-id {
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: 0.05em;
    }
    .nu-status-pill {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 6px 16px;
      border-radius: 20px;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 6px;
      line-height: 1.25;
    }
    .nu-section-title .nu-first { color: #0033cc; }
    .nu-section-title .nu-rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      width: 60px; height: 4px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
      border-radius: 2px;
    }

    h1.page-headline {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 12px;
    }
    h1.page-headline .accent { color: var(--nu-blue); }
    .page-subhead {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 38px;
      max-width: 760px;
    }

    /* ══ FACT GRID ══ */
    .nu-facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 38px;
    }
    .nu-fact-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .nu-fact-value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .nu-fact-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* ══ SECTION CARDS ══ */
    .nu-section {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 32px 34px;
      margin-bottom: 26px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.05);
    }

    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-light-gray);
      font-size: 0.97rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist .num {
      flex-shrink: 0;
      width: 28px; height: 28px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900;
      font-size: 0.82rem;
      margin-right: 14px;
      margin-top: 1px;
    }
    .nu-checklist .item-body {
      flex: 1;
    }
    .nu-checklist .item-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 3px;
    }
    .nu-checklist .item-detail {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* ══ ALERT / RISK ══ */
    .nu-alert {
      background: #FFF8E1;
      border-left: 5px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 4px;
      margin-bottom: 22px;
    }
    .nu-alert-title {
      font-weight: 900;
      color: #8B6914;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.82rem;
      margin-bottom: 6px;
    }
    .nu-alert-body {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }

    /* ══ NEGOTIATION TABLE ══ */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.93rem;
    }
    table.nu-table thead th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-size: 0.75rem;
      padding: 12px 14px;
      text-align: left;
    }
    table.nu-table tbody td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    table.nu-table tbody tr:last-child td { border-bottom: none; }
    .price-cell { font-weight: 900; color: var(--nu-blue); white-space: nowrap; }

    /* ══ CTA ROW ══ */
    .nu-cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 8px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 13px 26px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
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

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 20px 50px; }
      h1.page-headline { font-size: 1.55rem; }
      .nu-section { padding: 22px 20px; }
      .nu-task-banner { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .nu-section { box-shadow: none; }
      .nu-cta-row { display: none; }
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
    <div class="nu-tagline">A Legacy of Commitment&reg;</div>
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

      <!-- TASK BANNER -->
      <div class="nu-task-banner">
        <div>
          <div class="nu-task-banner-label">reMarkable Action Item — Personal / Real Estate</div>
          <div class="nu-task-banner-id">Negotiate Purchase: 4505 Buttewoods Estate</div>
        </div>
        <div class="nu-status-pill">Open</div>
      </div>

      <!-- HEADLINE -->
      <h1 class="page-headline">
        Negotiate the purchase of the <span class="accent">7,098 sq ft estate</span> at 4505 Buttewoods.
      </h1>
      <p class="page-subhead">
        This worksheet captures the negotiation plan, supporting facts, and Aaron's next-step checklist for the
        Buttewoods property. It is a personal real-estate item — not a Norris Utilities commercial transaction —
        and is tracked here so it does not slip through the cracks during the work week.
      </p>

      <!-- KEY FACTS -->
      <div class="nu-facts-grid">
        <div class="nu-fact-tile">
          <div class="nu-fact-label">Property</div>
          <div class="nu-fact-value">4505 Buttewoods</div>
          <div class="nu-fact-sub">Verify exact street suffix &amp; ZIP at signing</div>
        </div>
        <div class="nu-fact-tile">
          <div class="nu-fact-label">Heated Square Footage</div>
          <div class="nu-fact-value">7,098 sq ft</div>
          <div class="nu-fact-sub">Confirm against tax appraisal &amp; survey</div>
        </div>
        <div class="nu-fact-tile">
          <div class="nu-fact-label">Action Owner</div>
          <div class="nu-fact-value">Aaron C. Norris</div>
          <div class="nu-fact-sub">Personal — not a Caroline Butler delegated item</div>
        </div>
        <div class="nu-fact-tile">
          <div class="nu-fact-label">Source</div>
          <div class="nu-fact-value">reMarkable Tablet</div>
          <div class="nu-fact-sub">Captured by Legacy reMarkable sync</div>
        </div>
      </div>

      <!-- NEGOTIATION CHECKLIST -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Negotiation</span> <span class="nu-rest">Checklist</span></h2>
        <div class="nu-section-rule"></div>

        <ol class="nu-checklist">
          <li>
            <div class="num">1</div>
            <div class="item-body">
              <div class="item-title">Pull current comparables.</div>
              <div class="item-detail">Request 3-mile radius comps from Aaron's agent — homes 6,500–7,800 sq ft sold in last 90 days. Filter for finished basement and lot size.</div>
            </div>
          </li>
          <li>
            <div class="num">2</div>
            <div class="item-body">
              <div class="item-title">Verify county records.</div>
              <div class="item-detail">Confirm tax-appraised value, current owner, mortgage status, and any liens. Check for unrecorded easements.</div>
            </div>
          </li>
          <li>
            <div class="num">3</div>
            <div class="item-body">
              <div class="item-title">Inspection contingencies in writing.</div>
              <div class="item-detail">Roof, foundation, HVAC, electrical service, plumbing, septic/sewer, and water-intrusion history. Reference H2O Waterproofing item already on the open list.</div>
            </div>
          </li>
          <li>
            <div class="num">4</div>
            <div class="item-body">
              <div class="item-title">Disclosure review.</div>
              <div class="item-detail">Confirm seller's disclosure addresses any prior water intrusion, repairs, and warranty transfers (related task: water-intrusion disclosure review).</div>
            </div>
          </li>
          <li>
            <div class="num">5</div>
            <div class="item-body">
              <div class="item-title">Financing pre-approval refresh.</div>
              <div class="item-detail">Re-confirm pre-approval letter with Patrick Lavette at Renasant Bank reflects current rate and target purchase price.</div>
            </div>
          </li>
          <li>
            <div class="num">6</div>
            <div class="item-body">
              <div class="item-title">Opening offer + walk-away number.</div>
              <div class="item-detail">Aaron sets two figures privately before any conversation: opening offer, and the absolute walk-away ceiling. Do not move past the ceiling under pressure.</div>
            </div>
          </li>
          <li>
            <div class="num">7</div>
            <div class="item-body">
              <div class="item-title">Ask seller to cover specific items.</div>
              <div class="item-detail">Closing costs, home warranty (12 months), pest bond transfer, and any deferred maintenance flagged by inspection.</div>
            </div>
          </li>
          <li>
            <div class="num">8</div>
            <div class="item-body">
              <div class="item-title">Close-date alignment.</div>
              <div class="item-detail">Coordinate close with Norris Utilities cash-flow calendar — avoid closing during a week where vendor wires (Boss Products, Skylift, Samson Rope) clear out operating account.</div>
            </div>
          </li>
        </ol>
      </div>

      <!-- RISK WATCHLIST -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Risk</span> <span class="nu-rest">Watchlist</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-alert">
          <div class="nu-alert-title">Water Intrusion — Open Item</div>
          <div class="nu-alert-body">
            Water-intrusion disclosure omission is already flagged as a separate reMarkable action item. Do not waive
            inspection contingency until that disclosure is corrected in writing and signed by seller. Tie this directly
            to the H2O Waterproofing scope-and-fee inquiry.
          </div>
        </div>

        <div class="nu-alert">
          <div class="nu-alert-title">Cash vs. Financed</div>
          <div class="nu-alert-body">
            A cash-strong offer typically buys 3–7% in negotiation room on a property of this size. Weigh that against
            keeping operating capital available for Q2/Q3 inventory commitments (Skylift, Bay Shore Systems).
          </div>
        </div>

        <div class="nu-alert">
          <div class="nu-alert-title">Time Pressure</div>
          <div class="nu-alert-body">
            Do not let listing-agent urgency dictate response timing. A 24-hour pause before counters is the rule.
            All signed documents go through Aaron's review — no exceptions, even when convenient.
          </div>
        </div>
      </div>

      <!-- NEGOTIATION POSTURE TABLE -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Negotiation</span> <span class="nu-rest">Posture &amp; Tactics</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width:22%;">Lever</th>
                <th style="width:38%;">Aaron's Position</th>
                <th>Response if Pushed Back</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Opening Offer</strong></td>
                <td>Below comparable median, justified by inspection items and market conditions.</td>
                <td>Hold firm 48 hours. Counter only after written justification from listing agent.</td>
              </tr>
              <tr>
                <td><strong>Earnest Money</strong></td>
                <td>Standard, refundable through inspection &amp; financing contingencies.</td>
                <td>Will not increase earnest in exchange for shortened contingency period.</td>
              </tr>
              <tr>
                <td><strong>Inspection Period</strong></td>
                <td>Minimum 14 calendar days. Specialized water-intrusion inspector required.</td>
                <td>Will not waive. Will extend if seller delays access.</td>
              </tr>
              <tr>
                <td><strong>Repairs</strong></td>
                <td>Itemized credit at closing in lieu of seller-managed repairs.</td>
                <td>If seller insists on doing repairs, require Aaron's selection of contractor and post-repair inspection.</td>
              </tr>
              <tr>
                <td><strong>Closing Date</strong></td>
                <td>Aaron's calendar dictates — not seller's preferred date.</td>
                <td>Offer flexible occupancy (seller post-possession) only at no rent and capped at 14 days.</td>
              </tr>
              <tr>
                <td><strong>Walk-Away Trigger</strong></td>
                <td>Any unresolved water/foundation issue, undisclosed lien, or seller refusal to provide records.</td>
                <td>Walk. Document reason in writing. Do not re-open.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- NEXT 72 HOURS -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Next</span> <span class="nu-rest">72 Hours</span></h2>
        <div class="nu-section-rule"></div>
        <ol class="nu-checklist">
          <li>
            <div class="num">A</div>
            <div class="item-body">
              <div class="item-title">Call Patrick Lavette — Renasant Bank.</div>
              <div class="item-detail">Confirm pre-approval letter is current and reflects the 4505 Buttewoods price range.</div>
            </div>
          </li>
          <li>
            <div class="num">B</div>
            <div class="item-body">
              <div class="item-title">Pull comps and tax record.</div>
              <div class="item-detail">Request from agent + pull county appraisal record directly. Save both to the property folder.</div>
            </div>
          </li>
          <li>
            <div class="num">C</div>
            <div class="item-body">
              <div class="item-title">Request seller disclosure documents.</div>
              <div class="item-detail">In writing. Include water-intrusion history and any prior insurance claims on the property.</div>
            </div>
          </li>
          <li>
            <div class="num">D</div>
            <div class="item-body">
              <div class="item-title">Decide opening offer + ceiling.</div>
              <div class="item-detail">Write both numbers down before any verbal exchange. Share with no one outside Aaron and his attorney.</div>
            </div>
          </li>
        </ol>

        <div class="nu-cta-row" style="margin-top:24px;">
          <a class="nu-btn-primary" href="tel:2055001343">Call Aaron — 205-500-1343</a>
          <a class="nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Negotiation%20Update">Email Update</a>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment&reg;</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities&reg;, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>