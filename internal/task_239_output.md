<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Brief — 4505 Buttewoods Estate — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-success: #16a34a;
      --nu-warning: #ea580c;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
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

    .nu-phoenix-ghost {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 400px;
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
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
    }
    .nu-doc-type {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-white);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      border-radius: 2px;
    }

    /* ══ CHEVRON ══ */
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

    /* ══ MAIN ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-main {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 80px;
    }

    /* ══ BRIEF HEADLINE ══ */
    .brief-head {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 30px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .brief-head h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .brief-head h1 .accent { color: var(--nu-blue); }
    .brief-head .sub {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      letter-spacing: 0.02em;
    }
    .brief-head .meta-row {
      margin-top: 18px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    .meta-chip {
      display: inline-block;
      padding: 6px 14px;
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 20px;
      font-size: 0.82rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .meta-chip.hot {
      background: #fff4e6;
      border-color: #ffd9a8;
      color: var(--nu-warning);
    }
    .meta-chip.blue {
      background: #e6e6ff;
      border-color: #ccccff;
      color: var(--nu-blue);
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 42px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-blue);
      margin-bottom: 20px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-blue);
      letter-spacing: 0.01em;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ PROPERTY CARD ══ */
    .prop-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 20px;
    }
    .prop-fact {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 16px 18px;
      border-radius: 0 6px 6px 0;
    }
    .prop-fact .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .prop-fact .value {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .prop-fact .value.big {
      font-size: 1.5rem;
      color: var(--nu-blue);
    }
    .prop-fact small {
      display: block;
      font-size: 0.78rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* ══ STRATEGY CARDS ══ */
    .strat-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .strat-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .strat-card.opening { border-top-color: var(--nu-success); }
    .strat-card.target { border-top-color: var(--nu-blue); }
    .strat-card.walk { border-top-color: var(--nu-warning); }
    .strat-card .tier {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .strat-card .price {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .strat-card .per-sqft {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      font-weight: 700;
      margin-bottom: 12px;
    }
    .strat-card .rationale {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--nu-body-text);
    }

    /* ══ NEGOTIATION LEVERS ══ */
    .levers {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }
    .lever {
      background: var(--nu-light-gray);
      padding: 18px 20px;
      border-radius: 6px;
      border-left: 4px solid var(--nu-blue);
    }
    .lever h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .lever p {
      font-size: 0.9rem;
      line-height: 1.55;
      color: var(--nu-body-text);
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 12px 0 12px 36px;
      border-bottom: 1px solid var(--nu-medium-gray);
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 14px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li strong {
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: var(--nu-medium-gray);
    }
    .time-step {
      position: relative;
      padding: 8px 0 18px;
    }
    .time-step::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 14px;
      width: 14px;
      height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .time-step .when {
      font-size: 0.8rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .time-step .what {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, #e6e6ff 0%, #d4f0ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 0 8px 8px 0;
      margin: 24px 0;
    }
    .callout h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout p {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--nu-dark-text);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 46px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
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
    .nu-footer-confidential {
      margin-top: 18px;
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-main { padding: 36px 22px 60px; }
      .brief-head h1 { font-size: 1.7rem; }
      .strat-grid { grid-template-columns: 1fr; }
      .levers { grid-template-columns: 1fr; }
      .prop-fact .value.big { font-size: 1.25rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .strat-card, .callout { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-ghost" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-type">Negotiation Brief — Confidential</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-main">

      <!-- BRIEF HEAD -->
      <div class="brief-head">
        <h1><span class="accent">Estate Acquisition Brief:</span> 4505 Buttewoods</h1>
        <div class="sub">7,098 sq ft private residence — negotiation strategy, offer ladder, and execution timeline</div>
        <div class="meta-row">
          <span class="meta-chip blue">Action Item — reMarkable</span>
          <span class="meta-chip">Prepared: April 24, 2026</span>
          <span class="meta-chip">Principal: Aaron C. Norris</span>
          <span class="meta-chip hot">Priority — Active</span>
        </div>
      </div>

      <!-- SECTION 1: PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Property <span class="rest">Snapshot</span></h2>
        <div class="prop-grid">
          <div class="prop-fact">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <small>Single-family estate</small>
          </div>
          <div class="prop-fact">
            <div class="label">Gross Living Area</div>
            <div class="value big">7,098 sq ft</div>
            <small>Confirmed from listing data</small>
          </div>
          <div class="prop-fact">
            <div class="label">Deal Type</div>
            <div class="value">Direct Purchase</div>
            <small>Principal-to-seller negotiation</small>
          </div>
          <div class="prop-fact">
            <div class="label">Buyer Role</div>
            <div class="value">Aaron C. Norris</div>
            <small>Personal / family residence</small>
          </div>
        </div>
      </section>

      <!-- SECTION 2: PRE-OFFER DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Pre-Offer <span class="rest">Due Diligence</span></h2>
        <ul class="checklist">
          <li><strong>Comparable sales:</strong> Pull last 12 months of closed sales in the Buttewoods submarket within ±1,500 sq ft. Compute median $/sq ft and days-on-market.</li>
          <li><strong>Tax & title history:</strong> Order the deed chain, current property tax bill, and any recorded liens or easements. Verify HOA status and covenants.</li>
          <li><strong>Seller motivation:</strong> Identify how long the property has been listed, prior price reductions, and life-event triggers (divorce, relocation, estate sale, downsizing).</li>
          <li><strong>Condition baseline:</strong> Walk-through with a licensed inspector before offer. Flag roof age, HVAC, foundation, and any deferred maintenance that reshapes the offer.</li>
          <li><strong>Financing pre-approval:</strong> Confirm lender pre-approval letter in hand before any offer goes out. A cash-strong position opens room on price.</li>
          <li><strong>Survey & boundary:</strong> Confirm lot lines, encroachments, and whether the 7,098 sq ft figure matches tax records and appraisal.</li>
        </ul>
      </section>

      <!-- SECTION 3: OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title">Offer <span class="rest">Ladder</span></h2>
        <div class="strat-grid">
          <div class="strat-card opening">
            <div class="tier">Opening Offer</div>
            <div class="price">~8–10% <br>below list</div>
            <div class="per-sqft">Anchored by comps</div>
            <div class="rationale">Submitted with a clean, short-fuse closing window (14–21 days) and a sizeable earnest deposit. Signals serious buyer without tipping the ceiling.</div>
          </div>
          <div class="strat-card target">
            <div class="tier">Target Settle</div>
            <div class="price">~3–5% <br>below list</div>
            <div class="per-sqft">Realistic close zone</div>
            <div class="rationale">Where most negotiations land once the seller tests the market. Hold firm on price; trade on timing, contingencies, or inclusions to close the gap.</div>
          </div>
          <div class="strat-card walk">
            <div class="tier">Walk-Away Ceiling</div>
            <div class="price">List price <br>(no higher)</div>
            <div class="per-sqft">Hard stop — no emotion</div>
            <div class="rationale">Above list only if comps and a fresh appraisal fully support it. The discipline: the deal has to make sense on paper before it makes sense in the gut.</div>
          </div>
        </div>
        <div class="callout">
          <h4>Pricing Discipline</h4>
          <p>The offer ladder is anchored to recent verified comps — not to the seller's list price. The list is a marker, not a valuation. Every tier must pencil out against market data before it moves.</p>
        </div>
      </section>

      <!-- SECTION 4: NEGOTIATION LEVERS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span class="rest">Levers</span></h2>
        <div class="levers">
          <div class="lever">
            <h4>Close Speed</h4>
            <p>Offer a 14–21 day close with pre-approved financing. Speed is worth real dollars to a motivated seller and costs the buyer nothing.</p>
          </div>
          <div class="lever">
            <h4>Earnest Money</h4>
            <p>Put up an above-average earnest deposit. Signals commitment, tightens seller confidence, and strengthens price leverage.</p>
          </div>
          <div class="lever">
            <h4>Clean Contingencies</h4>
            <p>Keep inspection and financing contingencies tight and reasonable. Do not waive inspection. A clean offer beats a cluttered one at the same price.</p>
          </div>
          <div class="lever">
            <h4>Flexible Possession</h4>
            <p>Offer a post-close rent-back (30–60 days) if seller needs time to move. Costs little, closes gaps.</p>
          </div>
          <div class="lever">
            <h4>Repair Credits vs. Price</h4>
            <p>After inspection, pursue repair credits instead of price reductions when possible. Protects appraisal and keeps the ladder intact.</p>
          </div>
          <div class="lever">
            <h4>Silent Walk-Away</h4>
            <p>Know the walk-away number before the first conversation. If the seller tests above it, disengage cleanly — do not argue. Deals die on emotion, not logic.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 5: EXECUTION TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Execution <span class="rest">Timeline</span></h2>
        <div class="timeline">
          <div class="time-step">
            <div class="when">Week 1 — Diligence</div>
            <div class="what">Pull comps, title, and tax history. Complete initial walk-through. Secure lender pre-approval letter.</div>
          </div>
          <div class="time-step">
            <div class="when">Week 2 — Opening Offer</div>
            <div class="what">Submit written offer at opening-tier price with 48-hour response window, earnest deposit attached, and financing evidence.</div>
          </div>
          <div class="time-step">
            <div class="when">Week 3 — Counter & Settle</div>
            <div class="what">Work the counter toward target settle price. Trade on terms (close date, rent-back, credits) before giving up ground on price.</div>
          </div>
          <div class="time-step">
            <div class="when">Week 4 — Inspection</div>
            <div class="what">Formal inspection. Convert material findings into credits or a price adjustment. Re-confirm lender terms.</div>
          </div>
          <div class="time-step">
            <div class="when">Week 5–6 — Appraisal & Underwriting</div>
            <div class="what">Lender appraisal and underwriting. Address any gap between appraised value and contract price with the seller if needed.</div>
          </div>
          <div class="time-step">
            <div class="when">Week 6–7 — Close</div>
            <div class="what">Final walk-through, closing disclosure review, funding, recordation. Keys transferred.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 6: RISK WATCHLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Risk <span class="rest">Watchlist</span></h2>
        <ul class="checklist">
          <li><strong>Appraisal gap:</strong> At 7,098 sq ft the property is above the typical comparable pool. Budget for a potential appraisal shortfall and know in advance how it will be covered.</li>
          <li><strong>Insurance cost:</strong> Price homeowner's insurance before contract. Large homes carry outsized replacement cost premiums that can change the deal math.</li>
          <li><strong>Carrying cost exposure:</strong> Model taxes, insurance, utilities, and maintenance over 24 months to stress-test the decision against a future sale.</li>
          <li><strong>Deferred maintenance surprises:</strong> On a 7,000+ sq ft home, deferred maintenance compounds fast. Do not skip specialty inspections — roof, HVAC, foundation, septic/sewer, pool if applicable.</li>
          <li><strong>Emotional anchoring:</strong> Document the walk-away number in writing before negotiations start. Do not re-set it mid-deal.</li>
        </ul>
      </section>

      <!-- SECTION 7: NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Next <span class="rest">Actions</span></h2>
        <div class="callout">
          <h4>Immediate — This Week</h4>
          <p>1) Commission a formal comp report on the Buttewoods submarket. 2) Confirm lender pre-approval is current and documented. 3) Schedule a private walk-through with an independent inspector before any offer dialogue. 4) Set the walk-away number in writing and lock it in before engaging the listing side.</p>
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
    <div class="nu-footer-confidential">Confidential — Prepared for Aaron C. Norris Only</div>
  </footer>

</body>
</html>