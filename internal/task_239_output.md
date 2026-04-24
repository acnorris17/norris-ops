<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-alert-red: #C9302C;
      --nu-alert-amber: #D48806;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      min-height: 280px;
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 400px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 80px;
      position: relative;
      z-index: 2;
    }

    /* ACTION ITEM BANNER */
    .action-banner {
      display: flex;
      align-items: center;
      gap: 20px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 20px 28px;
      border-radius: 6px;
      margin-bottom: 40px;
      border-left: 6px solid var(--nu-cyan);
    }
    .action-banner-icon {
      width: 48px;
      height: 48px;
      flex-shrink: 0;
      fill: var(--nu-cyan);
    }
    .action-banner-label {
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .action-banner-title {
      font-weight: 900;
      font-size: 1.35rem;
      line-height: 1.3;
      color: var(--nu-white);
    }
    .action-banner-source {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.7);
      margin-top: 6px;
      font-style: italic;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      margin-top: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first-word {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* PROPERTY SUMMARY GRID */
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .property-stat {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .property-stat-label {
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #666;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .property-stat-value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .property-stat-sub {
      font-size: 0.85rem;
      color: #666;
      margin-top: 4px;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px 30px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 30px;
    }

    .nu-card p {
      margin-bottom: 14px;
      color: var(--nu-body-text);
    }
    .nu-card p:last-child { margin-bottom: 0; }

    /* STEP LIST */
    .step-list {
      list-style: none;
      counter-reset: step;
    }
    .step-list li {
      counter-increment: step;
      position: relative;
      padding: 16px 16px 16px 60px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-blue);
      border-radius: 4px;
    }
    .step-list li::before {
      content: counter(step);
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
    }
    .step-list li strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 2px;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 14px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* LEVERAGE / RISK BOXES */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 30px;
    }
    @media (max-width: 720px) {
      .two-col { grid-template-columns: 1fr; }
    }
    .insight-box {
      padding: 22px 24px;
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
    }
    .insight-box.leverage {
      background: #f0f7ff;
      border-left: 4px solid var(--nu-blue);
    }
    .insight-box.risk {
      background: #fff8ed;
      border-left: 4px solid var(--nu-alert-amber);
    }
    .insight-box h4 {
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 900;
      margin-bottom: 12px;
    }
    .insight-box.leverage h4 { color: var(--nu-blue); }
    .insight-box.risk h4 { color: var(--nu-alert-amber); }
    .insight-box ul {
      padding-left: 18px;
      font-size: 0.95rem;
    }
    .insight-box ul li { margin-bottom: 8px; }

    /* OFFER TABLE */
    .offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      border: 1px solid var(--nu-medium-gray);
    }
    .offer-table th,
    .offer-table td {
      padding: 14px 18px;
      text-align: left;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .offer-table thead th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .offer-table tbody tr:last-child td { border-bottom: none; }
    .offer-table tbody tr:hover { background: var(--nu-light-gray); }
    .offer-table .tier-label {
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .offer-table .amount {
      font-weight: 700;
      color: var(--nu-blue);
      font-variant-numeric: tabular-nums;
    }

    /* TALKING POINTS */
    .talking-points {
      background: #f7f9ff;
      border: 1px solid #d8e0ff;
      border-radius: 6px;
      padding: 24px 28px;
    }
    .talking-points h4 {
      font-size: 1rem;
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .talking-points blockquote {
      font-style: italic;
      color: var(--nu-dark-text);
      padding: 12px 16px;
      border-left: 3px solid var(--nu-cyan);
      background: var(--nu-white);
      margin-bottom: 10px;
      font-size: 0.95rem;
    }

    /* META STRIP */
    .meta-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding: 16px 20px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      margin-bottom: 30px;
      font-size: 0.85rem;
    }
    .meta-strip .meta-item strong {
      display: block;
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 2px;
    }
    .meta-strip .meta-item span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
      font-family: var(--font-primary);
      font-size: 0.95rem;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact { line-height: 1.9; }
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
      .nu-content-wrap { padding: 30px 20px 60px; }
      .action-banner { flex-direction: column; text-align: center; align-items: center; }
      .property-stat-value { font-size: 1.3rem; }
      .offer-table th, .offer-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-card, .property-stat { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
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

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <!-- ACTION BANNER -->
      <div class="action-banner">
        <svg class="action-banner-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7v6c0 5.55 3.84 10.74 10 12 6.16-1.26 10-6.45 10-12V7l-10-5zm-1 14l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 7z"/>
        </svg>
        <div>
          <div class="action-banner-label">reMarkable Action Item</div>
          <div class="action-banner-title">Negotiate Purchase — 7,098 sq ft Estate at 4505 Buttewoods</div>
          <div class="action-banner-source">Captured from reMarkable handwritten note · Personal real estate matter</div>
        </div>
      </div>

      <!-- META -->
      <div class="meta-strip">
        <div class="meta-item">
          <strong>Action Date</strong>
          <span>2026-04-23</span>
        </div>
        <div class="meta-item">
          <strong>Owner</strong>
          <span>Aaron C. Norris</span>
        </div>
        <div class="meta-item">
          <strong>Status</strong>
          <span>Open — Pre-Negotiation Prep</span>
        </div>
        <div class="meta-item">
          <strong>Category</strong>
          <span>Personal Real Estate</span>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <h2 class="nu-section-title"><span class="first-word">Property</span> <span class="rest">Snapshot</span></h2>

      <div class="property-grid">
        <div class="property-stat">
          <div class="property-stat-label">Address</div>
          <div class="property-stat-value">4505 Buttewoods</div>
          <div class="property-stat-sub">Target estate property</div>
        </div>
        <div class="property-stat">
          <div class="property-stat-label">Square Footage</div>
          <div class="property-stat-value">7,098 sq ft</div>
          <div class="property-stat-sub">Estate-class footprint</div>
        </div>
        <div class="property-stat">
          <div class="property-stat-label">Stage</div>
          <div class="property-stat-value">Pre-Offer</div>
          <div class="property-stat-sub">Due diligence underway</div>
        </div>
        <div class="property-stat">
          <div class="property-stat-label">Next Step</div>
          <div class="property-stat-value">Open Negotiation</div>
          <div class="property-stat-sub">Contact seller / listing agent</div>
        </div>
      </div>

      <!-- NEGOTIATION PLAN -->
      <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Game Plan</span></h2>

      <div class="nu-card">
        <ol class="step-list">
          <li>
            <strong>Confirm the fundamentals</strong>
            Pull the current listing (MLS or public record) for 4505 Buttewoods. Confirm list price, days on market, price history, tax assessment, lot size, year built, and last sale. Note any price reductions — each one is a lever.
          </li>
          <li>
            <strong>Run three comparable sales (comps)</strong>
            Closed sales within the last 6 months, same submarket, within 15% of the 7,098 sq ft footprint. Calculate the price-per-sq-ft range. This anchors the offer and gives a defensible counter.
          </li>
          <li>
            <strong>Order a quiet pre-inspection walk</strong>
            Before an offer, walk the property with a trusted inspector or contractor. Identify deferred maintenance, roof age, HVAC age, foundation notes, and any water intrusion. Every material finding becomes a negotiation point.
          </li>
          <li>
            <strong>Confirm financing &amp; close timeline</strong>
            Pre-approval letter in hand (amount at least matching top offer tier). A fast, clean close is often more valuable to an estate seller than a marginally higher price.
          </li>
          <li>
            <strong>Open with the low tier — hold the middle &amp; top in reserve</strong>
            Deliver offer in writing with comps attached so the price is anchored to data, not emotion. Keep a 72-hour response deadline.
          </li>
          <li>
            <strong>Negotiate concessions, not just price</strong>
            Closing cost credits, repair allowance, furniture/contents, rent-back flexibility, or extended inspection period can be worth more than a $5–15k price move.
          </li>
          <li>
            <strong>Confirm any easements, encumbrances, or HOA rules</strong>
            Title search early. For a 7,098 sq ft estate, verify lot lines, any utility easements, deed restrictions, and survey status before signing.
          </li>
        </ol>
      </div>

      <!-- LEVERAGE & RISK -->
      <h2 class="nu-section-title"><span class="first-word">Leverage</span> <span class="rest">&amp; Risk</span></h2>

      <div class="two-col">
        <div class="insight-box leverage">
          <h4>Leverage (use these)</h4>
          <ul>
            <li>Days on market — every week past 30 days strengthens the buyer's position.</li>
            <li>Any prior price reductions signal motivated seller.</li>
            <li>Estate sales often prioritize a certain, quick close over top-dollar.</li>
            <li>Cash-equivalent or large-down financing is a strong differentiator.</li>
            <li>Inspection findings translate directly to dollar concessions.</li>
            <li>Flexible closing date to match the seller's timeline.</li>
          </ul>
        </div>

        <div class="insight-box risk">
          <h4>Risk (manage these)</h4>
          <ul>
            <li>Emotional overpay — set a walk-away number before negotiating and stick to it.</li>
            <li>Deferred maintenance on a 7,098 sq ft home can exceed $50k fast.</li>
            <li>Insurance and property tax on an estate can shift total cost of ownership significantly.</li>
            <li>If estate has multiple heirs, decision-making may be slow — plan timelines accordingly.</li>
            <li>Skipping a full inspection to "win" the deal is the most common high-cost mistake.</li>
          </ul>
        </div>
      </div>

      <!-- OFFER TIER FRAMEWORK -->
      <h2 class="nu-section-title"><span class="first-word">Offer</span> <span class="rest">Tier Framework</span></h2>

      <p style="margin-bottom: 20px; color: var(--nu-body-text);">
        Before making an offer, lock a list price &amp; comp range. Then build three tiers. Open at Tier 1, hold Tier 2 as the expected landing zone, and never cross Tier 3 without a clear, documented reason.
      </p>

      <table class="offer-table">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Purpose</th>
            <th>Typical Range vs. List</th>
            <th>When to Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tier-label">Tier 1 — Opening</td>
            <td>Anchor low with data</td>
            <td class="amount">−10% to −15%</td>
            <td>First written offer, attach comps</td>
          </tr>
          <tr>
            <td class="tier-label">Tier 2 — Working</td>
            <td>Expected landing zone</td>
            <td class="amount">−5% to −8%</td>
            <td>After first counter, tied to concessions</td>
          </tr>
          <tr>
            <td class="tier-label">Tier 3 — Ceiling</td>
            <td>Absolute walk-away</td>
            <td class="amount">−0% to −3%</td>
            <td>Only if inspection is clean &amp; comps justify</td>
          </tr>
          <tr>
            <td class="tier-label">Walk Away</td>
            <td>Discipline line</td>
            <td class="amount">Above Tier 3</td>
            <td>Thank seller, leave door open for 30 days</td>
          </tr>
        </tbody>
      </table>

      <!-- TALKING POINTS -->
      <h2 class="nu-section-title" style="margin-top: 40px;"><span class="first-word">Talking</span> <span class="rest">Points for the Call</span></h2>

      <div class="talking-points">
        <h4>Open with respect, close with clarity</h4>

        <blockquote>
          "I've done my homework on 4505 Buttewoods and on recent sales in the area. I'm a serious, financed buyer, and I'd like to put something credible in writing this week."
        </blockquote>

        <blockquote>
          "My offer is anchored to three closed comps I'll send alongside the letter. I'm confident the number is fair, and I'm equally confident we can work through it together."
        </blockquote>

        <blockquote>
          "I can be flexible on closing date and rent-back. Tell me what the seller actually needs out of this transaction and I'll build my offer around it."
        </blockquote>

        <blockquote>
          "If there are repair items I haven't seen yet, I'd rather know now than re-trade after inspection. I'm not looking to nickel-and-dime — I'm looking for one clean number we both live with."
        </blockquote>
      </div>

      <!-- DUE DILIGENCE CHECKLIST -->
      <h2 class="nu-section-title" style="margin-top: 40px;"><span class="first-word">Due</span> <span class="rest">Diligence Checklist</span></h2>

      <div class="nu-card">
        <ul class="checklist">
          <li>Pull MLS listing, price history, photos, and any disclosures on file</li>
          <li>Order three closed comps within 6 months and 15% of 7,098 sq ft</li>
          <li>Pull public record: last sale price, assessed value, property taxes, lot size</li>
          <li>Confirm ownership &amp; whether sale is estate, trust, or individual</li>
          <li>Walk the property with a trusted inspector or contractor pre-offer</li>
          <li>Review title for easements, liens, and deed restrictions</li>
          <li>Verify HOA status, dues, and any special assessments</li>
          <li>Get homeowners insurance quote based on 7,098 sq ft footprint</li>
          <li>Confirm pre-approval letter amount covers Tier 3 ceiling</li>
          <li>Draft written offer with comps attached &amp; 72-hour response clause</li>
          <li>Set walk-away number in writing before picking up the phone</li>
          <li>Schedule formal inspection window and survey once under contract</li>
        </ul>
      </div>

      <!-- NEXT STEPS -->
      <h2 class="nu-section-title" style="margin-top: 40px;"><span class="first-word">Immediate</span> <span class="rest">Next Steps (This Week)</span></h2>

      <div class="nu-card">
        <p><strong>1. Data gather (Day 1–2).</strong> Pull the MLS listing, public record, and three comps. Get every number on paper before any conversation starts.</p>
        <p><strong>2. Field walk (Day 3–4).</strong> Schedule a quiet walk-through with a contractor. Document material findings with photos.</p>
        <p><strong>3. Financing confirm (Day 3–5).</strong> Refresh pre-approval letter to cover the Tier 3 ceiling. Lender name, loan officer, contact on file.</p>
        <p><strong>4. Written offer (Day 5–7).</strong> Deliver Tier 1 offer with comps attached and a 72-hour response window. Keep tone respectful, data-led, not adversarial.</p>
        <p><strong>5. Review &amp; iterate.</strong> Track counters, concessions, and walk-away discipline in this document. Update status on each change.</p>
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