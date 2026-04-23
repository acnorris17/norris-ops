<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Negotiation Brief — 4505 Buttewoods — Norris Utilities®</title>
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
    .nu-header > * { position: relative; z-index: 2; }

    /* Ghost phoenix watermark */
    .nu-header-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.8em;
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
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* DOCUMENT BANNER */
    .doc-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 24px 40px;
      text-align: center;
      border-top: 3px solid var(--nu-cyan);
      border-bottom: 3px solid var(--nu-cyan);
    }
    .doc-banner-label {
      font-size: 0.8rem;
      letter-spacing: 0.35em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .doc-banner-title {
      font-size: 1.8rem;
      font-weight: 900;
      letter-spacing: 0.02em;
      margin-bottom: 6px;
    }
    .doc-banner-sub {
      font-size: 1rem;
      font-weight: 300;
      opacity: 0.9;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .content-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 60px;
      position: relative;
    }

    /* META STRIP */
    .meta-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      margin-bottom: 40px;
      border-radius: 8px;
      overflow: hidden;
    }
    .meta-cell {
      background: var(--nu-white);
      padding: 18px 20px;
      text-align: center;
    }
    .meta-cell-label {
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .meta-cell-value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION */
    .section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
      color: var(--nu-blue);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section p {
      margin-bottom: 14px;
      font-size: 1rem;
    }
    .section ul, .section ol {
      margin: 0 0 16px 22px;
    }
    .section li {
      margin-bottom: 8px;
    }

    /* BADGE */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin: 6px 8px 6px 0;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.03em;
    }

    /* FACT CARDS */
    .fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .fact-card-label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 10px;
    }
    .fact-card-value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .fact-card-note {
      font-size: 0.85rem;
      color: #666;
      font-style: italic;
    }

    /* PRICE ANCHOR */
    .price-anchor {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #fafbff 100%);
      border-left: 6px solid var(--nu-blue);
      padding: 24px 28px;
      margin: 24px 0;
      border-radius: 4px;
    }
    .price-anchor-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 8px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .price-anchor-row:last-child { border-bottom: none; font-weight: 900; color: var(--nu-blue); font-size: 1.15rem; padding-top: 14px; }
    .price-anchor-row span:first-child { color: var(--nu-body-text); }
    .price-anchor-row span:last-child { color: var(--nu-dark-text); font-weight: 700; }

    /* NEGOTIATION TABLE */
    .neg-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 6px;
      overflow: hidden;
    }
    .neg-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .neg-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .neg-table tr:nth-child(even) td {
      background: var(--nu-light-gray);
    }
    .neg-table td:first-child {
      font-weight: 700;
      color: var(--nu-blue);
      white-space: nowrap;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(90deg, rgba(6,208,255,0.08) 0%, rgba(0,0,255,0.04) 100%);
      border-left: 5px solid var(--nu-cyan);
      padding: 18px 24px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 8px;
      font-size: 1.05rem;
    }
    .callout-warn {
      background: linear-gradient(90deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.03) 100%);
      border-left-color: var(--nu-accent-gold);
    }
    .callout-warn .callout-title { color: #8B6F1F; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      margin-left: 0 !important;
    }
    .checklist li {
      padding-left: 34px;
      position: relative;
      margin-bottom: 12px;
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 4px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
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
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .doc-banner-title { font-size: 1.35rem; }
      .content-wrap { padding: 40px 20px; }
      .nu-badge { clip-path: none; border-radius: 6px; }
      .neg-table thead { display: none; }
      .neg-table, .neg-table tbody, .neg-table tr, .neg-table td { display: block; width: 100%; }
      .neg-table tr { margin-bottom: 14px; border: 1px solid var(--nu-medium-gray); border-radius: 6px; }
      .neg-table td { border-bottom: 1px dashed var(--nu-medium-gray); }
      .neg-table td:first-child { background: var(--nu-navy); color: var(--nu-white); border-radius: 6px 6px 0 0; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .fact-card, .neg-table { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
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
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOCUMENT BANNER -->
  <div class="doc-banner">
    <div class="doc-banner-label">Executive Action Brief — Confidential</div>
    <div class="doc-banner-title">Estate Purchase Negotiation — 4505 Buttewoods</div>
    <div class="doc-banner-sub">7,098 sq ft Private Residence — Preparation Dossier for Aaron C. Norris</div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="content-wrap">

      <!-- META STRIP -->
      <div class="meta-strip">
        <div class="meta-cell">
          <div class="meta-cell-label">Document Date</div>
          <div class="meta-cell-value">April 23, 2026</div>
        </div>
        <div class="meta-cell">
          <div class="meta-cell-label">Prepared For</div>
          <div class="meta-cell-value">Aaron C. Norris</div>
        </div>
        <div class="meta-cell">
          <div class="meta-cell-label">Source</div>
          <div class="meta-cell-value">reMarkable Action</div>
        </div>
        <div class="meta-cell">
          <div class="meta-cell-label">Status</div>
          <div class="meta-cell-value">Prep Phase — Pre-Offer</div>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="section">
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <div class="fact-grid">
          <div class="fact-card">
            <div class="fact-card-label">Address</div>
            <div class="fact-card-value" style="font-size:1.15rem;">4505 Buttewoods</div>
            <div class="fact-card-note">Subject property — full address to be confirmed against county records</div>
          </div>
          <div class="fact-card">
            <div class="fact-card-label">Heated Living Area</div>
            <div class="fact-card-value">7,098 sq ft</div>
            <div class="fact-card-note">Per reMarkable note — verify against tax assessor</div>
          </div>
          <div class="fact-card">
            <div class="fact-card-label">Classification</div>
            <div class="fact-card-value" style="font-size:1.2rem;">Estate-Class</div>
            <div class="fact-card-note">Above 5,000 sq ft — specialty comp set required</div>
          </div>
          <div class="fact-card">
            <div class="fact-card-label">Transaction Type</div>
            <div class="fact-card-value" style="font-size:1.2rem;">Purchase</div>
            <div class="fact-card-note">Negotiated acquisition — not a listing response</div>
          </div>
        </div>

        <div class="callout callout-warn">
          <div class="callout-title">Data To Confirm Before First Offer</div>
          Full street name spelling (Buttewoods vs. Buttewood), city/county/state, parcel ID, current assessed value, listing price (if MLS-listed) or owner's asking number, days on market, and legal owner of record. No offer or counter should move without these items documented.
        </div>
      </section>

      <!-- PHASE 1: DILIGENCE -->
      <section class="section">
        <h2 class="nu-section-title">Phase 1 — <span>Pre-Negotiation Diligence</span></h2>
        <p>Every lever Aaron will pull at the table comes from homework done before the first phone call. Complete every line below before sending a written offer.</p>

        <ul class="checklist">
          <li><strong>Pull the deed and tax history.</strong> County probate/recorder's office — confirm chain of title, last sale price, and any recorded liens, mortgages, or mechanic's liens.</li>
          <li><strong>Order a title search.</strong> Independent of the seller — uncovers easements, covenants, HOA restrictions, boundary disputes before they become closing surprises.</li>
          <li><strong>Comp the neighborhood.</strong> Last 6 sales of estate-class homes (5,000+ sq ft) within 3 miles. Note $/sq ft range — that is the anchor number.</li>
          <li><strong>Review current tax assessment.</strong> Compare assessed value to owner's ask. Gaps &gt; 20% are leverage.</li>
          <li><strong>Pre-inspection walk-through.</strong> Roof age, HVAC age (multiple units at 7K sq ft), foundation, moisture, electrical service panel. Estate homes often have deferred maintenance disguised by finish-work.</li>
          <li><strong>Lender pre-approval or proof of funds.</strong> Sellers of estate-class property will not take a verbal seriously without it.</li>
          <li><strong>Know the seller's story.</strong> Why are they selling? Estate sale, divorce, relocation, downsizing, financial distress — each changes the play.</li>
        </ul>
      </section>

      <!-- PRICE ANCHOR MATH -->
      <section class="section">
        <h2 class="nu-section-title">Price Anchor <span>Framework</span></h2>
        <p>A 7,098 sq ft house does not get valued on price-per-square-foot alone — but that figure is still the first number every party reaches for. Build three anchors before entering the conversation.</p>

        <div class="price-anchor">
          <div class="price-anchor-row">
            <span>Neighborhood $/sq ft average (fill from comps)</span>
            <span>Anchor A</span>
          </div>
          <div class="price-anchor-row">
            <span>$/sq ft × 7,098 sq ft</span>
            <span>Anchor A × 7,098</span>
          </div>
          <div class="price-anchor-row">
            <span>Tax assessor valuation</span>
            <span>Anchor B</span>
          </div>
          <div class="price-anchor-row">
            <span>Last sale price + regional appreciation curve</span>
            <span>Anchor C</span>
          </div>
          <div class="price-anchor-row">
            <span>Target Opening Offer (85–92% of lowest anchor)</span>
            <span>Offer Range</span>
          </div>
        </div>

        <div class="callout">
          <div class="callout-title">Aaron's Negotiation Principle</div>
          Lead with the ask. Never open with flattery, apology, or padding. State the number, state the close date, state the contingencies, and stop talking. Silence after an offer is the most expensive thing the other side can break.
        </div>
      </section>

      <!-- NEGOTIATION LEVERS -->
      <section class="section">
        <h2 class="nu-section-title">Negotiation <span>Levers</span></h2>
        <p>Price is one lever. These are the others — every one is worth money, and several cost the seller nothing.</p>

        <table class="neg-table">
          <thead>
            <tr>
              <th style="width:22%;">Lever</th>
              <th>How It Moves the Deal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Closing Date</td>
              <td>Estate sellers often want to close fast or slow. Match their need and capture 1–3% in price concession.</td>
            </tr>
            <tr>
              <td>Earnest Money</td>
              <td>Higher earnest signals seriousness without raising price. Use when seller is skeptical of buyer capacity.</td>
            </tr>
            <tr>
              <td>Financing Contingency</td>
              <td>Shorter window (10–14 days vs. 30) is worth real money. Waiving it entirely is a trump card — only if pre-approval is rock solid.</td>
            </tr>
            <tr>
              <td>Inspection Period</td>
              <td>Shortening or waiving inspection concessions (with a pre-inspection done) trades risk for price.</td>
            </tr>
            <tr>
              <td>As-Is Clause</td>
              <td>Offering as-is after a private inspection removes seller's repair anxiety — often gets a 2–4% discount.</td>
            </tr>
            <tr>
              <td>Leaseback / Rent-Back</td>
              <td>If seller needs time to relocate, offer free or reduced rent for 30–60 days post-close. Costs little, saves them a move twice.</td>
            </tr>
            <tr>
              <td>Personal Property</td>
              <td>Chandeliers, built-ins, riding mowers, appliances, pool equipment — negotiate what conveys. Never assume anything is included.</td>
            </tr>
            <tr>
              <td>Escalation Clause</td>
              <td>Only if a competing offer is confirmed in writing. Caps the top, still demonstrates commitment.</td>
            </tr>
            <tr>
              <td>Seller Concessions</td>
              <td>Instead of a lower price, ask for credit at closing for rate buy-down or repairs. Often easier for the seller emotionally.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- OFFER STRUCTURE -->
      <section class="section">
        <h2 class="nu-section-title">Offer <span>Structure</span></h2>
        <p>Any written offer should land on the seller's desk as a clean, professional document. Terms to specify on the first pass:</p>
        <ul>
          <li><strong>Purchase price</strong> — firm number, not a range.</li>
          <li><strong>Earnest money amount</strong> and deposit timeline (typically within 3 business days of acceptance).</li>
          <li><strong>Financing terms</strong> — conventional, cash, or bridge financing; lender name if applicable.</li>
          <li><strong>Inspection period</strong> — number of calendar days, not business days.</li>
          <li><strong>Title company of record</strong> — Aaron's choice or negotiated split of closing costs.</li>
          <li><strong>Closing date</strong> — specific calendar date, not "on or about."</li>
          <li><strong>Possession date</strong> — at closing or defined leaseback terms.</li>
          <li><strong>Contingencies</strong> — appraisal, sale of existing residence (if any), HOA document review.</li>
          <li><strong>Offer expiration</strong> — 24 to 72 hours. Prevents shopping of the offer.</li>
        </ul>
      </section>

      <!-- RED FLAGS -->
      <section class="section">
        <h2 class="nu-section-title">Red Flag <span>Watch List</span></h2>
        <div class="callout callout-warn">
          <div class="callout-title">Estate-Specific Risks</div>
          Homes above 7,000 sq ft frequently carry invisible costs. Budget for all of them before finalizing a price.
        </div>
        <ul>
          <li><strong>Multiple HVAC systems</strong> at different ages. Full replacement on a 7K sq ft home can exceed $40,000.</li>
          <li><strong>Deferred roof maintenance</strong> — steeper pitches and dormer-heavy estate roofs run 2–3× the per-square cost of standard roofs.</li>
          <li><strong>Private well or septic</strong> — if present, budget a full septic inspection and well potability test.</li>
          <li><strong>Pool, outbuildings, gates, driveways</strong> — each carries its own deferred-maintenance liability.</li>
          <li><strong>Property taxes reset</strong> at new purchase price in many jurisdictions. Model the new annual tax line, not the current line.</li>
          <li><strong>Insurance reclassification</strong> — an estate-class home may require a separate carrier. Bind quote before removing contingencies.</li>
          <li><strong>HOA or restrictive covenants</strong> on estates often include approval rights over exterior changes. Read the entire CCR document, not the summary.</li>
        </ul>
      </section>

      <!-- SCRIPT -->
      <section class="section">
        <h2 class="nu-section-title">Opening <span>Script</span></h2>
        <p>Rough-draft language for the first direct conversation with the seller or seller's agent — to be personalized before use.</p>

        <div class="callout">
          <div class="callout-title">Suggested Opening</div>
          <p style="margin-bottom:10px;">"I've done my homework on 4505 Buttewoods. I'm a serious, financed buyer looking for the right long-term property, not a flip. I'm ready to move on a clean, straightforward offer this week. Before I put something in writing, I'd like to understand two things — what the seller's timeline looks like, and whether there are any specifics about the property I should factor in. After that, you'll have my number by end of day."</p>
        </div>

        <div class="callout">
          <div class="callout-title">Aaron's Tone Reminder</div>
          Direct, warm, genuine, confident — never pushy or apologetic. Lead with the ask. Use "y'all" if it fits the region. End sentences; do not run them together.
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="section">
        <h2 class="nu-section-title">Next <span>Actions</span></h2>
        <span class="nu-badge">Step 1 — Verify Address &amp; Pull Deed</span>
        <span class="nu-badge">Step 2 — Run Comp Set</span>
        <span class="nu-badge">Step 3 — Pre-Inspection Walk</span>
        <span class="nu-badge">Step 4 — Confirm Financing</span>
        <span class="nu-badge">Step 5 — Draft Written Offer</span>
        <span class="nu-badge">Step 6 — Present &amp; Hold Silence</span>
        <p style="margin-top:18px;">Each step above should be dated and initialed as it closes. No offer letter leaves Aaron's desk without steps 1 through 4 marked complete.</p>
      </section>

      <!-- LEGAL -->
      <section class="section">
        <h2 class="nu-section-title">Legal &amp; <span>Advisory Note</span></h2>
        <p style="font-size:0.9rem; color:#666; font-style:italic;">This document is an internal negotiation preparation brief for Aaron C. Norris, Founder &amp; CEO of Norris Utilities®, LLC. It is not legal, tax, or financial advice. Before executing any purchase agreement, consult a licensed real estate attorney, a CPA, and a licensed insurance professional. All numerical anchors are frameworks only — actual figures must be confirmed against current county records, appraisal, and lender documents.</p>
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