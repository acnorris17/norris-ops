<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #1F7A3A;
      --nu-warn: #B8860B;
      --nu-danger: #B22222;
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix {
      width: 70px; height: 70px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
    }
    .nu-doc-title {
      margin-top: 22px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.3em;
      color: var(--nu-cyan);
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
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
      top: 220px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .container {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PROPERTY HERO */
    .property-hero {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 12px;
      padding: 36px;
      margin-bottom: 40px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.05);
    }
    .property-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .property-address {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 6px;
    }
    .property-sub {
      font-style: italic;
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 24px;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 16px;
      padding-top: 22px;
      border-top: 2px solid var(--nu-medium-gray);
    }
    .stat {
      text-align: center;
      padding: 8px;
    }
    .stat-num {
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 6px;
    }
    .stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-body-text);
    }

    /* SECTION TITLE */
    .section {
      margin-bottom: 48px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 8px;
      color: var(--nu-dark-text);
    }
    .section-title .lead {
      color: var(--nu-blue);
    }
    .section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
      border-radius: 2px;
    }

    /* CARDS / GRIDS */
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 22px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-card.cyan { border-top-color: var(--nu-cyan); }
    .nu-card.gold { border-top-color: var(--nu-accent-gold); }
    .nu-card.navy { border-top-color: var(--nu-navy); }
    .card-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .card-body {
      font-size: 0.95rem;
      line-height: 1.65;
    }
    .card-body p { margin-bottom: 10px; }
    .card-body ul { padding-left: 18px; margin-top: 6px; }
    .card-body li { margin-bottom: 6px; }

    /* BADGES */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 14px;
      margin: 0 8px 10px 0;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
    }

    /* PRICE LADDER */
    .price-ladder {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .ladder-row {
      display: grid;
      grid-template-columns: 1fr 1.4fr 1fr 1fr;
      gap: 14px;
      padding: 16px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: center;
    }
    .ladder-row.header {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .ladder-row:last-child { border-bottom: none; }
    .ladder-tier {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1rem;
    }
    .ladder-price {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
    }
    .ladder-ppsf {
      font-weight: 700;
      color: var(--nu-body-text);
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 8px; bottom: 8px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .tl-item {
      position: relative;
      margin-bottom: 22px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -28px; top: 6px;
      width: 14px; height: 14px;
      background: var(--nu-cyan);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .tl-day {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .tl-title {
      font-weight: 700;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .tl-body {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 12px 14px 12px 38px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 12px; top: 16px;
      width: 16px; height: 16px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #fff8e6 0%, #fff 100%);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 20px 24px;
      border-radius: 0 8px 8px 0;
      margin: 24px 0;
    }
    .callout-title {
      font-weight: 900;
      color: #8a6d10;
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout-body {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }

    /* WALK-AWAY */
    .walk-away {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin: 28px 0;
    }
    .walk-away h3 {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.04em;
    }
    .walk-away ul {
      padding-left: 22px;
    }
    .walk-away li {
      margin-bottom: 8px;
      color: rgba(255,255,255,0.92);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.2rem;
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
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.06em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 20px; }
      .property-address { font-size: 1.5rem; }
      .property-hero { padding: 24px; }
      .ladder-row { grid-template-columns: 1fr 1fr; padding: 12px 14px; font-size: 0.88rem; }
      .ladder-row.header { display: none; }
      .ladder-row > div::before {
        content: attr(data-label);
        display: block;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--nu-blue);
        margin-bottom: 2px;
      }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 8px 14px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-title">Estate Acquisition · Negotiation Strategy</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- PROPERTY HERO -->
      <div class="property-hero">
        <div class="property-eyebrow">Subject Property</div>
        <div class="property-address">4505 Buttewoods</div>
        <div class="property-sub">7,098 sq ft estate · negotiation strategy &amp; offer framework</div>
        <div class="property-stats">
          <div class="stat">
            <div class="stat-num">7,098</div>
            <div class="stat-label">Square Feet</div>
          </div>
          <div class="stat">
            <div class="stat-num">1</div>
            <div class="stat-label">Sole Buyer (Aaron)</div>
          </div>
          <div class="stat">
            <div class="stat-num">30</div>
            <div class="stat-label">Day Close Target</div>
          </div>
          <div class="stat">
            <div class="stat-num">3</div>
            <div class="stat-label">Offer Tiers Ready</div>
          </div>
        </div>
      </div>

      <!-- BADGES -->
      <div style="margin-bottom: 36px;">
        <span class="nu-badge">Pre-Offer Diligence</span>
        <span class="nu-badge">Comp-Backed Pricing</span>
        <span class="nu-badge">Cash-Equivalent Terms</span>
        <span class="nu-badge">Inspection &amp; Survey Contingencies</span>
        <span class="nu-badge">Walk-Away Discipline</span>
      </div>

      <!-- SECTION 1: PRE-OFFER DILIGENCE -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Step 1.</span> Pre-Offer Diligence</h2>
        <div class="section-rule"></div>
        <div class="grid-3">
          <div class="nu-card">
            <div class="card-title">Title &amp; Ownership</div>
            <div class="card-body">
              <p>Pull the deed, current owner of record, and chain of title at the Jefferson County Probate office. Confirm any liens, mortgages, judgments, or tax sales.</p>
            </div>
          </div>
          <div class="nu-card cyan">
            <div class="card-title">Tax &amp; Assessed Value</div>
            <div class="card-body">
              <p>Pull the most recent assessed value and tax bill. Compare assessed value against the asking price — establishes the floor for negotiation.</p>
            </div>
          </div>
          <div class="nu-card gold">
            <div class="card-title">Comparable Sales</div>
            <div class="card-body">
              <p>Pull 6–10 comps within 1.5 miles, 6,000–8,500 sq ft, sold in the last 18 months. Calculate price per sq ft range and median.</p>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title">Days on Market</div>
            <div class="card-body">
              <p>Confirm DOM, prior list-price changes, prior expired listings. Long DOM and prior price drops materially weaken the seller's position.</p>
            </div>
          </div>
          <div class="nu-card cyan">
            <div class="card-title">Seller Motivation</div>
            <div class="card-body">
              <p>Identify why selling: estate, divorce, relocation, downsize. Motivation drives flexibility on price, terms, and close date.</p>
            </div>
          </div>
          <div class="nu-card navy">
            <div class="card-title">Property Condition</div>
            <div class="card-body">
              <p>Walk-through with a checklist: roof age, HVAC age, foundation, drainage, kitchen/bath updates. Document every defect — these become price levers.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: PRICE LADDER -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Step 2.</span> Three-Tier Offer Ladder</h2>
        <div class="section-rule"></div>
        <p style="margin-bottom: 18px; font-size: 0.98rem;">Build the ladder before the first call. Anchor low, justify with comps, leave room to climb. The walk-away number is non-negotiable and known only to Aaron.</p>

        <div class="price-ladder">
          <div class="ladder-row header">
            <div>Tier</div>
            <div>Strategy</div>
            <div>Position vs List</div>
            <div>Action</div>
          </div>
          <div class="ladder-row">
            <div class="ladder-tier" data-label="Tier">Opening</div>
            <div data-label="Strategy">Anchor below comps median, supported by inspection items</div>
            <div data-label="Position" class="ladder-ppsf">−12% to −15%</div>
            <div data-label="Action">Written offer with 7-day expiration</div>
          </div>
          <div class="ladder-row">
            <div class="ladder-tier" data-label="Tier">Counter</div>
            <div data-label="Strategy">Move only after seller counters; use repair credits, not price increases</div>
            <div data-label="Position" class="ladder-ppsf">−8% to −10%</div>
            <div data-label="Action">Counter in writing, same day</div>
          </div>
          <div class="ladder-row">
            <div class="ladder-tier" data-label="Tier">Final</div>
            <div data-label="Strategy">Best-and-final, take-it-or-walk; tighten contingencies for leverage</div>
            <div data-label="Position" class="ladder-ppsf">−4% to −6%</div>
            <div data-label="Action">48-hour deadline, signed in person</div>
          </div>
        </div>

        <div class="callout">
          <div class="callout-title">Pricing Discipline</div>
          <div class="callout-body">Never lead with the walk-away number. Each tier must be justified in writing — comps, inspection findings, market DOM. Anchoring without justification feels like a lowball; anchoring with data feels like a serious buyer.</div>
        </div>
      </section>

      <!-- SECTION 3: TERMS THAT MOVE PRICE -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Step 3.</span> Terms That Move Price</h2>
        <div class="section-rule"></div>
        <div class="grid-2">
          <div class="nu-card">
            <div class="card-title">Cash or Cash-Equivalent</div>
            <div class="card-body">
              <p>Cash terms — or proof of funds plus financing contingency removed — are typically worth 4–7% off list. Sellers value certainty of close more than headline price.</p>
            </div>
          </div>
          <div class="nu-card cyan">
            <div class="card-title">Short Close Window</div>
            <div class="card-body">
              <p>Offer 21–30 day close vs the standard 45–60. Short close is leverage when the seller is carrying two mortgages or has already moved.</p>
            </div>
          </div>
          <div class="nu-card gold">
            <div class="card-title">Earnest Money</div>
            <div class="card-body">
              <p>Above-standard earnest money (3–5% vs 1–2%) signals seriousness without conceding price. Ties up less capital than a higher offer would.</p>
            </div>
          </div>
          <div class="nu-card navy">
            <div class="card-title">Seller Lease-Back</div>
            <div class="card-body">
              <p>If seller needs time to relocate, offer 30–60 days post-close lease-back at fair market rent. Removes their biggest objection at low cost.</p>
            </div>
          </div>
          <div class="nu-card cyan">
            <div class="card-title">As-Is with Inspection Right</div>
            <div class="card-body">
              <p>Take the property "as-is" — but keep the right to inspect and walk. Removes seller repair anxiety; preserves Aaron's exit if defects appear.</p>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title">Waive Appraisal Gap (Bounded)</div>
            <div class="card-body">
              <p>Cover an appraisal gap up to a hard ceiling (e.g., $25K). Strong signal in a competitive bid; capped to protect against blown valuation.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: NEGOTIATION SCRIPT -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Step 4.</span> First-Call Talking Points</h2>
        <div class="section-rule"></div>
        <div class="grid-2">
          <div class="nu-card">
            <div class="card-title">Open Strong, Quiet Listener</div>
            <div class="card-body">
              <p>"I'm a serious buyer with proof of funds. I'd like to understand what matters to you on this sale before I make an offer."</p>
              <p>Then stop talking. Let the seller or listing agent reveal motivation, deadlines, prior offers, and pain points.</p>
            </div>
          </div>
          <div class="nu-card cyan">
            <div class="card-title">Anchor with Data, Not Apology</div>
            <div class="card-body">
              <p>"My number is based on three closed comps within a half mile, all in the last six months. I'd rather make one fair offer than negotiate three rounds."</p>
              <p>Confidence comes from preparation, not from raising the number.</p>
            </div>
          </div>
          <div class="nu-card gold">
            <div class="card-title">Trade Terms, Not Price</div>
            <div class="card-body">
              <p>"I can hold price if you can move on close date / lease-back / repair credits / earnest money."</p>
              <p>Always trade across categories — never give two concessions in the same response.</p>
            </div>
          </div>
          <div class="nu-card navy">
            <div class="card-title">Silence Is a Tool</div>
            <div class="card-body">
              <p>After stating the offer, do not fill the silence. The first party to talk after a number lands typically loses ground.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 5: TIMELINE -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Step 5.</span> 30-Day Execution Timeline</h2>
        <div class="section-rule"></div>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-day">Day 1–2 · Diligence</div>
            <div class="tl-title">Pull title, taxes, comps, prior listings</div>
            <div class="tl-body">Build the data file. No call to seller until file is complete.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 3 · Walk-Through</div>
            <div class="tl-title">Document every defect with photos and notes</div>
            <div class="tl-body">Bring a contractor or inspector for an informal walk if possible.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 4 · First Call</div>
            <div class="tl-title">Probe motivation; do not offer a number</div>
            <div class="tl-body">Listen for deadlines, prior offers, repair concerns, and seller's "must-haves."</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 5 · Written Opening Offer</div>
            <div class="tl-title">Tier 1 anchor with 7-day expiration</div>
            <div class="tl-body">Cover letter explaining the comps and the certainty of close.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 6–10 · Counter Cycle</div>
            <div class="tl-title">Move to Tier 2 only if seller counters in writing</div>
            <div class="tl-body">Trade terms, not price, on each round.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 11 · Best-and-Final</div>
            <div class="tl-title">Tier 3 with 48-hour deadline</div>
            <div class="tl-body">If rejected, walk. Re-engage in 14–21 days only if listing remains active.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 12–18 · Inspection</div>
            <div class="tl-title">Licensed inspector + structural + HVAC + roof</div>
            <div class="tl-body">Use findings to negotiate credits at close, not to renegotiate price.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 19–25 · Title &amp; Survey</div>
            <div class="tl-title">Title commitment, survey, lender appraisal if applicable</div>
            <div class="tl-body">Resolve any cloud on title before signing CD.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 26–30 · Close</div>
            <div class="tl-title">Wire funds, sign, record</div>
            <div class="tl-body">Confirm recording with the probate office before walking out.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 6: CHECKLIST -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Step 6.</span> Pre-Offer Checklist</h2>
        <div class="section-rule"></div>
        <ul class="checklist">
          <li>Confirm seller name and ownership via Jefferson County Probate records</li>
          <li>Pull current tax assessment and last three years of tax bills</li>
          <li>Verify zoning, easements, and any HOA covenants on file</li>
          <li>Run 6–10 comparable sales within 1.5 miles, last 18 months</li>
          <li>Document days on market and any prior price reductions</li>
          <li>Walk the property with photo log of every defect or deferred maintenance item</li>
          <li>Obtain proof-of-funds letter or pre-approval before first written offer</li>
          <li>Identify and engage closing attorney (Alabama is attorney-state)</li>
          <li>Set walk-away number in writing, sealed, before any verbal exchange</li>
          <li>Draft Tier 1, Tier 2, and Tier 3 offers in advance with cover letters</li>
        </ul>
      </section>

      <!-- WALK-AWAY -->
      <div class="walk-away">
        <h3>Walk-Away Discipline</h3>
        <p style="margin-bottom: 14px;">The single most valuable tool in any real estate negotiation is the credible willingness to walk. Set the walk-away number before the first conversation and do not move it.</p>
        <ul>
          <li>If seller will not engage in writing within 5 business days — walk.</li>
          <li>If inspection reveals foundation, drainage, or structural defects above 5% of contract price — walk or re-trade.</li>
          <li>If title shows unresolvable clouds, undisclosed liens, or boundary disputes — walk.</li>
          <li>If final price exceeds the walk-away number by even one dollar — walk.</li>
        </ul>
      </div>

      <!-- FINAL CALLOUT -->
      <div class="callout">
        <div class="callout-title">Note from Norris Utilities®</div>
        <div class="callout-body">This document is a negotiation framework prepared for Aaron C. Norris in his personal capacity. It is not legal, tax, or investment advice. Engage a licensed Alabama real-estate attorney before executing any binding offer or contract on 4505 Buttewoods.</div>
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
    <div class="nu-footer-meta">Estate Acquisition Strategy · 4505 Buttewoods · Prepared 2026-04-21</div>
  </footer>

</body>
</html>