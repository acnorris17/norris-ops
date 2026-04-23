<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #1B7F3A;
      --nu-warn: #C77700;
      --nu-danger: #B8272B;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      padding: 64px 40px 96px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute; inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
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
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.78em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.78em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      margin-top: 22px;
      display: inline-block;
      padding: 6px 18px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      border-radius: 2px;
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
      top: 180px; left: 50%;
      transform: translateX(-50%);
      width: 65%; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 70%);
      border-radius: 50%;
      opacity: 0.5;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-wrap {
      max-width: 1120px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* TITLE BLOCK */
    .doc-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .doc-title .blue { color: var(--nu-blue); }
    .doc-sub {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 6px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin: 22px 0 36px;
      padding: 14px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      font-size: 0.9rem;
    }
    .doc-meta div { min-width: 160px; }
    .doc-meta .lbl {
      display: block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .doc-meta .val {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }

    /* SECTION */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    p { margin-bottom: 14px; }
    ul, ol { margin: 0 0 14px 22px; }
    li { margin-bottom: 8px; }

    /* STAT GRID */
    .stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .stat {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .stat .num {
      font-weight: 900;
      font-size: 1.65rem;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .stat .lbl {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: #666;
      text-transform: uppercase;
      margin-top: 6px;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 18px;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
    }
    .nu-table th {
      padding: 12px 14px;
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      font-size: 0.82rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 11px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: #FAFAFC; }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table .num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }

    .pill {
      display: inline-block;
      padding: 2px 10px;
      border-radius: 12px;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .pill-ok   { background: #E4F3E9; color: var(--nu-success); }
    .pill-warn { background: #FBEFD9; color: var(--nu-warn); }
    .pill-alert{ background: #F7DBDC; color: var(--nu-danger); }
    .pill-info { background: #D8E9FF; color: var(--nu-blue); }

    /* CARDS */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
      margin-bottom: 18px;
    }
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-card p { font-size: 0.93rem; }

    /* CHEVRON BADGES */
    .badge-row { margin-bottom: 10px; }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.03em;
      margin-right: 6px;
    }
    .nu-badge .ico {
      width: 14px; height: 14px;
      margin-right: 10px;
      background: var(--nu-cyan);
      border-radius: 50%;
      flex-shrink: 0;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin: 10px 0 18px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .tl-item { position: relative; margin-bottom: 18px; }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -28px; top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .tl-date {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .tl-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-top: 2px;
    }
    .tl-body {
      font-size: 0.92rem;
      margin-top: 4px;
      color: #555;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #F0F4FF 0%, #E8F8FF 100%);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 22px;
      margin: 18px 0;
    }
    .callout strong { color: var(--nu-blue); }

    .callout-caution {
      background: #FFF7E6;
      border-left-color: var(--nu-warn);
    }
    .callout-caution strong { color: var(--nu-warn); }

    /* CHECKLIST */
    .checklist { list-style: none; margin-left: 0; }
    .checklist li {
      padding: 10px 14px 10px 40px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      margin-bottom: 8px;
      position: relative;
      font-size: 0.95rem;
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 16px; height: 16px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
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
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact { font-size: 0.92rem; line-height: 1.85; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-small {
      margin-top: 14px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 68px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 36px 20px 50px; }
      .doc-title { font-size: 1.55rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 10px 16px; }
      .nu-table { font-size: 0.85rem; }
      .nu-table th, .nu-table td { padding: 8px 10px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .stat, .nu-table { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Private &bull; Principal Action Plan</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- TITLE -->
      <h1 class="doc-title"><span class="blue">Estate Acquisition</span> &mdash; 4505 Buttewoods</h1>
      <p class="doc-sub">Negotiation strategy and action plan for 7,098 sq ft primary residence purchase.</p>

      <div class="doc-meta">
        <div><span class="lbl">Property</span><span class="val">4505 Buttewoods</span></div>
        <div><span class="lbl">Size</span><span class="val">7,098 sq ft</span></div>
        <div><span class="lbl">Principal</span><span class="val">Aaron C. Norris</span></div>
        <div><span class="lbl">Document Date</span><span class="val">April 23, 2026</span></div>
        <div><span class="lbl">Status</span><span class="val"><span class="pill pill-warn">Active Negotiation</span></span></div>
      </div>

      <!-- CONTEXT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Context</span> <span class="rest">&amp; Objective</span></h2>
        <p>
          This action plan frames the acquisition of the estate at 4505 Buttewoods &mdash; a 7,098 sq ft
          property &mdash; as a disciplined, data-driven negotiation. The objective is to secure the property
          at terms that reflect actual market comparables, protect Aaron and the family balance sheet,
          and preserve the capital runway required to continue building Norris Utilities®.
        </p>
        <p>
          This is a personal transaction, separate from Norris Utilities®, LLC. All documentation,
          funding, and counsel must be compartmentalized from the company. Business cash flow, FlexPro
          Armor receivables, and the Skylift purchase order must not be pledged, comingled, or disclosed
          in the real-estate transaction file.
        </p>

        <div class="stat-grid">
          <div class="stat"><div class="num">7,098</div><div class="lbl">Square Feet</div></div>
          <div class="stat"><div class="num">1</div><div class="lbl">Listing</div></div>
          <div class="stat"><div class="num">30</div><div class="lbl">Day Close Target</div></div>
          <div class="stat"><div class="num">20%</div><div class="lbl">Target Down Payment</div></div>
        </div>
      </section>

      <!-- PRE-NEGOTIATION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Pre-Negotiation</span> <span class="rest">Preparation</span></h2>

        <div class="card-grid">
          <div class="nu-card">
            <h3>1. Establish the Comparable Set</h3>
            <p>
              Pull three to five closed sales within 12 months, 6,500 &ndash; 7,500 sq ft, same school district
              and submarket. Focus on price per square foot, lot size, year built, and time on market.
              A written comp sheet is the single most powerful anchor at the table.
            </p>
          </div>
          <div class="nu-card">
            <h3>2. Independent Appraisal-Ready File</h3>
            <p>
              Commission a pre-offer broker price opinion (BPO) from an agent who is not the listing
              agent. The number on their letterhead is the ceiling. Anything above it must be justified
              by specific, documented upgrades on the subject property.
            </p>
          </div>
          <div class="nu-card">
            <h3>3. Financing Pre-Approval</h3>
            <p>
              Secure a jumbo pre-approval letter from Patrick Lavette at Renasant Bank. Letter must be
              dated within 10 days of offer, state maximum approved amount, and be addressed generically
              ("To Whom It May Concern") so the top of the approved range is not disclosed to the seller.
            </p>
          </div>
          <div class="nu-card">
            <h3>4. Inspection Team On Standby</h3>
            <p>
              Line up the general inspector, structural engineer, HVAC specialist, and roofer in advance.
              A 7,098 sq ft home needs more than a standard inspection. Being able to start inspections
              the day after contract shortens the option period and tightens your leverage window.
            </p>
          </div>
          <div class="nu-card">
            <h3>5. Title &amp; Survey History</h3>
            <p>
              Order a title commitment and a current boundary survey before offer is accepted.
              Easement issues, lot-line disputes, and unrecorded encroachments are the three items
              most likely to kill an estate deal in the last week.
            </p>
          </div>
          <div class="nu-card">
            <h3>6. Walk Alone, Twice</h3>
            <p>
              Walk the property once with the listing agent present, and a second time alone with
              only the buyer's agent. Agents narrate features; silence reveals deferred maintenance.
              Document every item with photos, time-stamped.
            </p>
          </div>
        </div>
      </section>

      <!-- OFFER STRUCTURE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Structure</span></h2>
        <p>The written offer is the frame of the entire negotiation. Every clause is a lever.</p>

        <table class="nu-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Target Position</th>
              <th>Fallback</th>
              <th>Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Purchase Price</strong></td>
              <td>92&ndash;94% of list</td>
              <td>96% of list</td>
              <td>Anchor below appraised comp set; preserve appraisal cushion.</td>
            </tr>
            <tr>
              <td><strong>Earnest Money</strong></td>
              <td>1% of offer</td>
              <td>1.5%</td>
              <td>Signals seriousness without over-exposing capital pre-inspection.</td>
            </tr>
            <tr>
              <td><strong>Option / Due Diligence</strong></td>
              <td>10 business days</td>
              <td>7 business days</td>
              <td>Enough to complete full inspection stack on 7,098 sq ft.</td>
            </tr>
            <tr>
              <td><strong>Financing Contingency</strong></td>
              <td>21 days</td>
              <td>18 days</td>
              <td>Matches Renasant underwriting cadence on jumbo files.</td>
            </tr>
            <tr>
              <td><strong>Appraisal Contingency</strong></td>
              <td>Full appraisal protection</td>
              <td>Gap up to 2% of price</td>
              <td>Never waive in full on a seven-figure estate.</td>
            </tr>
            <tr>
              <td><strong>Close Date</strong></td>
              <td>30 days from acceptance</td>
              <td>45 days</td>
              <td>Fast close is a concession worth real dollars to the right seller.</td>
            </tr>
            <tr>
              <td><strong>Seller Concessions</strong></td>
              <td>2% toward closing costs</td>
              <td>0%</td>
              <td>Trade concessions for price only when it nets favorably.</td>
            </tr>
            <tr>
              <td><strong>Possession</strong></td>
              <td>At funding</td>
              <td>3-day rent-back at cost</td>
              <td>Avoid post-close seller occupancy beyond 3 days.</td>
            </tr>
          </tbody>
        </table>

        <div class="callout">
          <strong>Anchor rule:</strong> The first number on paper sets the range. Do not make verbal offers,
          do not negotiate by phone before a written offer is in hand, and never agree to an escalation clause.
          Escalation clauses only help the seller.
        </div>
      </section>

      <!-- LEVERAGE & POSITIONING -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Levers</span></h2>

        <div class="badge-row">
          <span class="nu-badge"><span class="ico"></span>Clean Buyer Profile</span>
          <span class="nu-badge"><span class="ico"></span>Short Close</span>
          <span class="nu-badge"><span class="ico"></span>No Home Sale Contingency</span>
          <span class="nu-badge"><span class="ico"></span>Flexible Possession</span>
          <span class="nu-badge"><span class="ico"></span>Local Lender</span>
        </div>

        <ol>
          <li>
            <strong>Time on Market.</strong> Every additional week of Days on Market is roughly 1&ndash;1.5%
            of negotiating power. If the property is past 60 days, open below 90% of list and justify with comps.
          </li>
          <li>
            <strong>Seller motivation.</strong> Ask the listing agent &mdash; on the record &mdash; why the sellers
            are moving, their timeline, and whether they have purchased their next home. Motivated sellers accept
            structure; unmotivated sellers only move on price.
          </li>
          <li>
            <strong>Condition gaps.</strong> Roof age, HVAC units, foundation movement, pool equipment, and
            kitchen appliances are the five highest-dollar items on a 7,098 sq ft estate. Price each replacement
            at retail and bring written bids to the repair negotiation.
          </li>
          <li>
            <strong>Cash-equivalent positioning.</strong> A 20% down, pre-underwritten, local-bank jumbo reads
            to a sophisticated seller almost identical to cash. Push the listing agent to frame it that way.
          </li>
          <li>
            <strong>Walk-away number.</strong> Decide the number above which the deal is worse than no deal,
            in writing, before submitting the first offer. Share it with no one except counsel. Revisit only
            if new information changes the comp set.
          </li>
        </ol>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Scope</span></h2>

        <table class="nu-table">
          <thead>
            <tr>
              <th>Inspection</th>
              <th>Provider Type</th>
              <th>Deliverable</th>
              <th>Window</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>General Home</td><td>Licensed GC inspector</td><td>Full report w/ photos</td><td>Day 1&ndash;3</td></tr>
            <tr><td>Structural / Foundation</td><td>Licensed structural engineer</td><td>Stamped letter</td><td>Day 2&ndash;4</td></tr>
            <tr><td>Roof</td><td>Independent roofer (not seller&rsquo;s)</td><td>Age, remaining life, bid</td><td>Day 2&ndash;4</td></tr>
            <tr><td>HVAC (multi-zone)</td><td>Licensed HVAC</td><td>Per-unit age, refrigerant, bid</td><td>Day 3&ndash;5</td></tr>
            <tr><td>Plumbing / Sewer Scope</td><td>Licensed plumber</td><td>Video of main line to street</td><td>Day 3&ndash;5</td></tr>
            <tr><td>Electrical</td><td>Licensed electrician</td><td>Panel capacity, grounding, aluminum</td><td>Day 3&ndash;5</td></tr>
            <tr><td>Termite / WDI</td><td>Certified pest co.</td><td>Clearance letter</td><td>Day 4&ndash;6</td></tr>
            <tr><td>Pool / Spa / Outbuildings</td><td>Specialty</td><td>Equipment age + bid</td><td>Day 5&ndash;7</td></tr>
            <tr><td>Survey &amp; Title</td><td>Licensed surveyor + title co.</td><td>Plat + commitment</td><td>Day 1&ndash;10</td></tr>
          </tbody>
        </table>
      </section>

      <!-- REPAIR NEGOTIATION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Repair</span> <span class="rest">Negotiation</span></h2>
        <p>
          At the end of the option period, Aaron has three levers and should pick the one that
          yields the most net dollars, not the one that feels most complete:
        </p>
        <div class="card-grid">
          <div class="nu-card">
            <h3>Option A &mdash; Price Reduction</h3>
            <p>
              Request a price concession equal to 100% of documented bids. Simplest, cleanest, and
              reduces basis &mdash; which reduces property tax assessment and loan principal.
              <strong>Preferred in most cases.</strong>
            </p>
          </div>
          <div class="nu-card">
            <h3>Option B &mdash; Seller Completes Repairs</h3>
            <p>
              Only acceptable for items that must be fixed to close (active leaks, non-functioning
              HVAC, safety issues). Require licensed contractor, paid invoices, and a re-inspection
              right &mdash; no handyman work.
            </p>
          </div>
          <div class="nu-card">
            <h3>Option C &mdash; Closing-Cost Credit</h3>
            <p>
              Useful when at the loan&rsquo;s maximum contribution cap, or when cash at close is tight.
              Watch lender caps on seller-paid closing costs for jumbo loans &mdash; typically 3%.
            </p>
          </div>
        </div>

        <div class="callout callout-caution">
          <strong>Caution:</strong> Never re-open the entire negotiation during the repair amendment.
          Keep the scope to objective, documented items with written bids. Subjective "preference"
          items kill goodwill and invite the seller to terminate.
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Target</span> <span class="rest">Timeline</span></h2>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-date">Week 0 &mdash; Preparation</div>
            <div class="tl-title">Comps, pre-approval, inspector shortlist</div>
            <div class="tl-body">Pull comp set, commission independent BPO, secure dated pre-approval letter, line up all inspectors, order preliminary title.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Week 1 &mdash; Offer</div>
            <div class="tl-title">Written offer submitted</div>
            <div class="tl-body">Offer at 92&ndash;94% of list with full contingencies. Response required within 48 hours. Do not negotiate verbally between rounds.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Week 1&ndash;2 &mdash; Counters</div>
            <div class="tl-title">Maximum three rounds</div>
            <div class="tl-body">Each counter moves closer to walk-away number in declining increments (e.g. 40% / 30% / 20% of gap). Stop at walk-away.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Week 2&ndash;3 &mdash; Option Period</div>
            <div class="tl-title">Full inspection stack</div>
            <div class="tl-body">Complete inspections within first 5&ndash;7 days. Reserve final 3&ndash;5 days for written bids and repair amendment.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Week 3&ndash;4 &mdash; Underwriting</div>
            <div class="tl-title">Appraisal + loan conditions</div>
            <div class="tl-body">Appraisal ordered day after option release. Respond to underwriter conditions within 24 hours. No new credit inquiries until after closing.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Day 28&ndash;30 &mdash; Close</div>
            <div class="tl-title">Final walk + funding</div>
            <div class="tl-body">Final walk-through morning of close. Confirm every agreed repair, every included fixture, and possession date in writing before signing.</div>
          </div>
        </div>
      </section>

      <!-- SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Scripts</span></h2>

        <div class="nu-card" style="margin-bottom:14px;">
          <h3>Opening call to listing agent</h3>
          <p>
            &ldquo;Thanks for the tour. I&rsquo;m working with Renasant Bank on the financing side and I&rsquo;m
            a local buyer in a strong cash-equivalent position. Before I put pen to paper &mdash; what&rsquo;s
            the sellers&rsquo; ideal close date, and is there anything about the property they want us
            to be aware of?&rdquo;
          </p>
        </div>

        <div class="nu-card" style="margin-bottom:14px;">
          <h3>After seller counter</h3>
          <p>
            &ldquo;We appreciate the counter. Based on the comp set we&rsquo;ve pulled &mdash; and I&rsquo;m happy
            to share it &mdash; we&rsquo;re not able to move past a figure that the appraiser will
            support. Here&rsquo;s where we land, and this is our best number on the price line.&rdquo;
          </p>
        </div>

        <div class="nu-card">
          <h3>Repair amendment</h3>
          <p>
            &ldquo;We had three licensed contractors walk the property. Here are the written bids.
            We&rsquo;re requesting a price reduction equal to the bid total. We&rsquo;re not asking the
            sellers to do the work &mdash; we just need the basis adjusted so the numbers reflect
            the true condition.&rdquo;
          </p>
        </div>
      </section>

      <!-- RED LINES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Red</span> <span class="rest">Lines</span></h2>
        <ul class="checklist">
          <li>No escalation clauses. Ever.</li>
          <li>No waiver of appraisal contingency in full.</li>
          <li>No financing waiver before underwriting is complete.</li>
          <li>No disclosure of the top of Aaron&rsquo;s pre-approval range.</li>
          <li>No side deals involving personal property outside of closing.</li>
          <li>No post-close seller occupancy beyond 3 days without paid rent-back + holdback.</li>
          <li>No commingling with Norris Utilities®, LLC finances, receivables, or inventory.</li>
          <li>No verbal amendments. Every term reduced to a written, initialed addendum.</li>
        </ul>
      </section>

      <!-- PRINCIPALS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Principals</span> <span class="rest">&amp; Advisors</span></h2>
        <table class="nu-table">
          <thead>
            <tr><th>Role</th><th>Name</th><th>Scope</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Principal / Buyer</td><td>Aaron C. Norris</td><td>Decision authority</td><td><span class="pill pill-ok">Engaged</span></td></tr>
            <tr><td>Lender</td><td>Patrick Lavette &mdash; Renasant Bank</td><td>Jumbo pre-approval, underwriting</td><td><span class="pill pill-info">Contact</span></td></tr>
            <tr><td>Buyer&rsquo;s Counsel</td><td>To be engaged</td><td>Contract review, title, closing</td><td><span class="pill pill-warn">To Engage</span></td></tr>
            <tr><td>Buyer&rsquo;s Agent</td><td>To be engaged (independent of listing)</td><td>Showings, offer, negotiation support</td><td><span class="pill pill-warn">To Engage</span></td></tr>
            <tr><td>Structural Engineer</td><td>Independent, licensed AL</td><td>Foundation letter</td><td><span class="pill pill-warn">To Engage</span></td></tr>
            <tr><td>Title &amp; Escrow</td><td>Buyer&rsquo;s choice</td><td>Commitment, survey, closing</td><td><span class="pill pill-warn">To Engage</span></td></tr>
          </tbody>
        </table>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Actions</span></h2>
        <ul class="checklist">
          <li>Call Patrick Lavette at Renasant Bank; request dated jumbo pre-approval (generic addressee).</li>
          <li>Engage an independent buyer&rsquo;s agent &mdash; not the listing agent &mdash; with fiduciary representation in writing.</li>
          <li>Commission BPO from a separate broker to establish the upper-bound appraisal number.</li>
          <li>Retain real-estate counsel to pre-review the state-form contract and proposed addenda.</li>
          <li>Schedule a second walk-through at a different time of day than the first showing.</li>
          <li>Build the comp sheet: 3&ndash;5 closed sales, 6,500&ndash;7,500 sq ft, same submarket, last 12 months.</li>
          <li>Write down the walk-away number in a sealed document; share only with counsel.</li>
          <li>Confirm the negotiation stays personal; no Norris Utilities®, LLC documents touch this file.</li>
        </ul>

        <div class="callout">
          <strong>Closing thought.</strong> The discipline that built Norris Utilities® &mdash; written
          terms, verified data, honest communication, and a willingness to walk &mdash; is the same
          discipline that wins this negotiation. Price is what you pay. Terms are what you live with.
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
    <div class="nu-footer-small">
      130 Inverness Plaza #210 &bull; Birmingham, AL 35242 &bull; Private document &mdash; personal matter
    </div>
  </footer>

</body>
</html>