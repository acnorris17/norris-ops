<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Brief — 4505 Buttewoods — Norris Utilities®</title>
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    /* Ghost phoenix watermark */
    .nu-ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: auto;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.02) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px; }

    /* DOC META STRIP */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      padding: 16px 22px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
      font-size: 0.85rem;
    }
    .doc-meta .label {
      display: block;
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.7rem;
      margin-bottom: 4px;
    }
    .doc-meta .value {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 64px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 22px;
    }
    section { margin-bottom: 48px; }

    /* BADGE */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 30px 12px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    /* KEY FACTS GRID */
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 10px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      padding: 18px 20px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .fact-card .k {
      display: block;
      font-size: 0.7rem;
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 6px;
    }
    .fact-card .v {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .fact-card .v.big {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-blue);
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-table thead th {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      font-weight: 700;
      padding: 14px 18px;
      text-align: left;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    .nu-table tbody td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }

    /* LIST */
    .nu-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-list li {
      position: relative;
      padding: 10px 0 10px 30px;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-list li::before {
      content: '';
      position: absolute;
      left: 0; top: 18px;
      width: 14px; height: 14px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }
    .nu-list li:last-child { border-bottom: none; }
    .nu-list li strong { color: var(--nu-dark-text); display: block; margin-bottom: 3px; }

    /* STEP ROW */
    .steps {
      counter-reset: step;
      display: grid;
      gap: 14px;
    }
    .step {
      display: grid;
      grid-template-columns: 54px 1fr;
      gap: 18px;
      padding: 18px 20px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      align-items: flex-start;
    }
    .step .num {
      counter-increment: step;
      width: 44px; height: 44px;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.1rem;
      border-radius: 50%;
    }
    .step .num::before { content: counter(step); }
    .step h4 {
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      font-weight: 900;
      margin-bottom: 4px;
    }
    .step p { font-size: 0.95rem; }

    /* NOTE BOX */
    .note-box {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
      border: 1px solid #d0d9ff;
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      border-radius: 4px;
      margin: 20px 0;
    }
    .note-box .lbl {
      font-size: 0.7rem;
      color: var(--nu-blue);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 6px;
    }
    .note-box p { font-size: 0.95rem; color: var(--nu-dark-text); }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .panel {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 22px 24px;
      border-radius: 6px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .panel h3 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.1rem;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .panel ul { list-style: none; }
    .panel ul li {
      padding: 6px 0 6px 20px;
      position: relative;
      font-size: 0.93rem;
    }
    .panel ul li::before {
      content: '•';
      position: absolute; left: 6px; top: 6px;
      color: var(--nu-blue); font-weight: 900;
    }

    /* BUTTONS */
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 28px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 30px;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 14px 30px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
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
      font-weight: 400;
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
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .wrap { padding: 40px 22px; }
      .two-col { grid-template-columns: 1fr; }
      .step { grid-template-columns: 1fr; }
      .doc-meta { flex-direction: column; gap: 12px; }
      .nu-table { font-size: 0.85rem; }
      .nu-table thead th, .nu-table tbody td { padding: 10px 12px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .panel, .fact-card, .step { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .actions { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="wrap">

      <div class="nu-badge">Internal Brief — Confidential</div>

      <h1 class="nu-section-title" style="font-size:2.1rem; line-height:1.2;">
        Estate Acquisition <span>— 4505 Buttewoods</span>
      </h1>
      <div class="nu-section-rule"></div>

      <p style="font-size:1.05rem; max-width: 780px; margin-bottom: 28px;">
        Negotiation brief for the proposed purchase of a 7,098 sq ft estate located at
        <strong>4505 Buttewoods</strong>. This document captures the property profile,
        preparation checklist, negotiation strategy, and decision framework to guide
        Aaron C. Norris through offer, counter-offer, and close.
      </p>

      <div class="doc-meta">
        <div>
          <span class="label">Prepared For</span>
          <span class="value">Aaron C. Norris, Founder &amp; CEO</span>
        </div>
        <div>
          <span class="label">Subject Property</span>
          <span class="value">4505 Buttewoods — 7,098 sq ft estate</span>
        </div>
        <div>
          <span class="label">Action Origin</span>
          <span class="value">reMarkable action item</span>
        </div>
        <div>
          <span class="label">Status</span>
          <span class="value">Negotiation — Preparation Phase</span>
        </div>
      </div>

      <!-- KEY FACTS -->
      <section>
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <div class="nu-section-rule"></div>
        <div class="facts-grid">
          <div class="fact-card">
            <span class="k">Address</span>
            <span class="v">4505 Buttewoods</span>
          </div>
          <div class="fact-card">
            <span class="k">Total Interior</span>
            <span class="v big">7,098 sq ft</span>
          </div>
          <div class="fact-card">
            <span class="k">Asset Class</span>
            <span class="v">Luxury Estate</span>
          </div>
          <div class="fact-card">
            <span class="k">Transaction Type</span>
            <span class="v">Private Negotiation</span>
          </div>
          <div class="fact-card">
            <span class="k">Intended Use</span>
            <span class="v">Primary Residence</span>
          </div>
          <div class="fact-card">
            <span class="k">Timeline</span>
            <span class="v">Aaron-directed</span>
          </div>
        </div>

        <div class="note-box">
          <div class="lbl">Missing Data — To Confirm with Seller / Listing</div>
          <p>
            List price, lot acreage, bed/bath count, year built, HOA or covenant terms,
            current tax assessment, and most recent comparable sales within a 1-mile
            radius. These must be pulled before offer is finalized so the negotiation
            anchors to verifiable numbers rather than assumptions.
          </p>
        </div>
      </section>

      <!-- PRE-NEGOTIATION CHECKLIST -->
      <section>
        <h2 class="nu-section-title">Pre-Negotiation <span>Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <ul class="nu-list">
          <li>
            <strong>Pull comparable sales (last 12 months, 1-mile radius)</strong>
            Compare price-per-square-foot against the asking price to establish a
            defensible ceiling. 7,098 sq ft places this in the upper-tier bracket,
            so comp pool may be thin — expand radius if fewer than five matches.
          </li>
          <li>
            <strong>Confirm financing posture with Patrick Lavette (Renasant Bank)</strong>
            Pre-qualification or proof-of-funds letter strengthens the offer and
            short-circuits seller objections. Aaron should coordinate directly.
          </li>
          <li>
            <strong>Independent appraisal scheduled before earnest money</strong>
            Do not accept the seller's appraisal. Use an independent, third-party
            appraiser familiar with Birmingham luxury inventory.
          </li>
          <li>
            <strong>Title, lien, and encumbrance search</strong>
            Verify clean title, no outstanding mechanic's liens, no unrecorded
            easements or shared-driveway agreements that could affect use.
          </li>
          <li>
            <strong>Structural, roof, HVAC, and foundation inspection</strong>
            7,098 sq ft is substantial — a full four-system inspection is required,
            not a standard single-family walkthrough. Add pool/landscape if applicable.
          </li>
          <li>
            <strong>Tax history and assessment review</strong>
            Three-year tax trend indicates both assessor behavior and potential
            post-sale tax reassessment exposure.
          </li>
          <li>
            <strong>Insurance quote secured before close</strong>
            Luxury insurance carriers require bindable quotes. Secure early to avoid
            close-day surprises.
          </li>
        </ul>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section>
        <h2 class="nu-section-title">Negotiation <span>Strategy</span></h2>
        <div class="nu-section-rule"></div>

        <div class="steps">
          <div class="step">
            <div class="num"></div>
            <div>
              <h4>Open Below Asking with a Defensible Anchor</h4>
              <p>
                Submit initial offer at <strong>88–92% of asking price</strong>, referenced
                directly to verified comps and a written appraisal range. An anchored
                offer signals seriousness and keeps the ceiling intact without offending
                the seller.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="num"></div>
            <div>
              <h4>Isolate Seller Motivation Early</h4>
              <p>
                Ask the listing agent three questions before any price talk:
                why is the seller moving, how long has the property been on market,
                and are there competing offers. The answers dictate leverage and pace.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="num"></div>
            <div>
              <h4>Structure Contingencies as Value, Not Barriers</h4>
              <p>
                Inspection, appraisal, and financing contingencies are standard.
                Present them as routine protections, not bargaining leverage — saves
                leverage for price and concession discussions.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="num"></div>
            <div>
              <h4>Bundle Concessions in the Counter-Offer</h4>
              <p>
                If the seller counters, respond with a <strong>single bundled counter</strong>:
                price, closing date, repairs, and included personal property all in one
                round. Multiple small rounds erode goodwill and invite competing offers.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="num"></div>
            <div>
              <h4>Hold the Walk-Away Number in Writing</h4>
              <p>
                Before negotiation begins, write down the maximum price Aaron will pay
                and put it somewhere outside the room. That number does not move
                during negotiation — it only moves with new verified information.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="num"></div>
            <div>
              <h4>Close Fast Once Terms Align</h4>
              <p>
                Target a <strong>30-day close</strong> once price is agreed. Longer
                windows invite seller's remorse, competing backup offers, and
                market-timing risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- DECISION FRAMEWORK -->
      <section>
        <h2 class="nu-section-title">Decision <span>Framework</span></h2>
        <div class="nu-section-rule"></div>

        <table class="nu-table">
          <thead>
            <tr>
              <th>Signal</th>
              <th>Green Light</th>
              <th>Yellow Light</th>
              <th>Red Light — Walk Away</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price vs. Comps</td>
              <td>Within 5% of median $/sqft</td>
              <td>5–12% above median</td>
              <td>More than 12% above median</td>
            </tr>
            <tr>
              <td>Inspection Findings</td>
              <td>Minor cosmetic items</td>
              <td>Single major system needs repair</td>
              <td>Two or more major systems failing</td>
            </tr>
            <tr>
              <td>Title &amp; Liens</td>
              <td>Clean title, no encumbrances</td>
              <td>Minor easement, disclosed</td>
              <td>Unresolved lien or dispute</td>
            </tr>
            <tr>
              <td>Seller Behavior</td>
              <td>Transparent, responsive</td>
              <td>Slow responses, incomplete disclosures</td>
              <td>Misrepresentation or evasion</td>
            </tr>
            <tr>
              <td>Financing Terms</td>
              <td>Rate and LTV pre-confirmed</td>
              <td>Conditional approval pending</td>
              <td>Denial or material rate change</td>
            </tr>
            <tr>
              <td>Market Timing</td>
              <td>Days-on-market under 30</td>
              <td>30–90 DOM</td>
              <td>90+ DOM with no price drop</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- RISK + OPPORTUNITY -->
      <section>
        <h2 class="nu-section-title">Risk &amp; <span>Opportunity</span></h2>
        <div class="nu-section-rule"></div>
        <div class="two-col">
          <div class="panel">
            <h3>Risks to Flag</h3>
            <ul>
              <li>Property has been improved beyond neighborhood comps, making resale a function of a narrow buyer pool</li>
              <li>Carrying cost on 7,098 sq ft (utilities, insurance, maintenance) runs materially higher than a standard home</li>
              <li>Luxury tier can face slower sales cycles — exit liquidity lower than starter/mid-market inventory</li>
              <li>Any undisclosed structural, foundation, or water-intrusion issue scales with square footage</li>
              <li>Tax reassessment post-sale may spike property tax liability</li>
            </ul>
          </div>
          <div class="panel">
            <h3>Opportunity Angles</h3>
            <ul>
              <li>Motivated seller or extended DOM opens meaningful discount room</li>
              <li>Cash or fast-close posture is often worth a 3–5% price concession to a tired seller</li>
              <li>Seller-paid repairs or closing-cost credits preserve cash reserves at close</li>
              <li>Bundled personal property (furnishings, equipment) can offset price on a second counter</li>
              <li>Appraisal gap clause — if well-structured — removes a common deal-killer</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section>
        <h2 class="nu-section-title">Immediate <span>Next Steps</span></h2>
        <div class="nu-section-rule"></div>
        <ul class="nu-list">
          <li><strong>Aaron</strong> — Confirm list price, lot size, and key property data; forward listing to this file</li>
          <li><strong>Financing</strong> — Contact Patrick Lavette at Renasant Bank to secure proof-of-funds or pre-qualification letter</li>
          <li><strong>Comps</strong> — Pull three-year sales history within 1-mile radius for properties 5,000+ sq ft</li>
          <li><strong>Inspection</strong> — Line up independent inspector with luxury-tier experience; schedule before earnest money</li>
          <li><strong>Walk-Away Number</strong> — Aaron sets the maximum price in writing before first counter-offer is submitted</li>
          <li><strong>Legal</strong> — Route offer letter through attorney review before transmission</li>
        </ul>

        <div class="actions">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Acquisition%20Discussion" class="nu-btn-secondary">Email on 4505 Buttewoods</a>
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