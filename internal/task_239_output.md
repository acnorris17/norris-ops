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

    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 12px;
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
      font-weight: 900;
      font-size: 1.4rem;
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
      letter-spacing: 0.04em;
    }

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

    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      padding-bottom: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 56px 40px 64px;
    }

    /* Task banner */
    .task-banner {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 60%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 28px 32px;
      margin-bottom: 40px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 24px;
      align-items: center;
      box-shadow: 0 10px 30px rgba(0,0,255,0.18);
    }
    .task-banner h1 {
      font-weight: 900;
      font-size: 1.65rem;
      letter-spacing: 0.01em;
      margin-bottom: 6px;
    }
    .task-banner .sub {
      font-size: 1rem;
      opacity: 0.92;
      font-weight: 400;
    }
    .task-banner .pill {
      display: inline-block;
      background: rgba(255,255,255,0.18);
      padding: 6px 14px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .banner-meta {
      text-align: right;
      font-size: 0.85rem;
      line-height: 1.8;
    }
    .banner-meta strong { font-weight: 900; }

    /* Section titles */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 16px;
      letter-spacing: 0.005em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* Property snapshot */
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin-bottom: 36px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 20px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .fact-card .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .fact-card .value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .fact-card .value small {
      display: block;
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* Two-column block */
    .two-col {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 28px;
      margin-bottom: 40px;
    }
    @media (max-width: 820px) {
      .two-col { grid-template-columns: 1fr; }
      .task-banner { grid-template-columns: 1fr; }
      .banner-meta { text-align: left; }
    }

    .panel {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .panel h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .panel p { margin-bottom: 10px; }
    .panel ul { list-style: none; padding: 0; }
    .panel ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .panel ul li:last-child { border-bottom: none; }
    .panel ul li::before {
      content: '•';
      position: absolute;
      left: 4px;
      top: 8px;
      color: var(--nu-cyan);
      font-size: 1.3rem;
      line-height: 1;
      font-weight: 900;
    }

    /* Timeline */
    .timeline {
      position: relative;
      margin: 12px 0 36px 0;
      padding-left: 24px;
      border-left: 3px solid var(--nu-cyan);
    }
    .timeline .step {
      position: relative;
      padding: 0 0 24px 20px;
    }
    .timeline .step::before {
      content: '';
      position: absolute;
      left: -32px;
      top: 2px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-cyan);
    }
    .timeline .step .when {
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      color: var(--nu-blue);
      text-transform: uppercase;
    }
    .timeline .step .title {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin: 2px 0 6px;
    }
    .timeline .step .body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* Negotiation lanes */
    .lanes {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 40px;
    }
    @media (max-width: 820px) { .lanes { grid-template-columns: 1fr; } }
    .lane {
      border-radius: 12px;
      padding: 22px;
      color: var(--nu-white);
      position: relative;
      overflow: hidden;
      min-height: 190px;
    }
    .lane.low { background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%); }
    .lane.mid { background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%); }
    .lane.top { background: linear-gradient(135deg, #0066ee 0%, var(--nu-cyan) 100%); }
    .lane .tag {
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      font-weight: 700;
      opacity: 0.9;
      text-transform: uppercase;
    }
    .lane .price {
      font-weight: 900;
      font-size: 1.9rem;
      margin: 6px 0 4px;
    }
    .lane .per {
      font-size: 0.8rem;
      opacity: 0.9;
      margin-bottom: 12px;
    }
    .lane .note {
      font-size: 0.88rem;
      line-height: 1.5;
      border-top: 1px solid rgba(255,255,255,0.25);
      padding-top: 12px;
    }

    /* Checklist */
    .checklist {
      background: var(--nu-light-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 36px;
    }
    .checklist h3 {
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 14px;
      font-size: 1.1rem;
    }
    .checklist label {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      padding: 8px 0;
      font-size: 0.98rem;
      cursor: pointer;
    }
    .checklist input[type="checkbox"] {
      margin-top: 4px;
      width: 18px;
      height: 18px;
      accent-color: var(--nu-blue);
      flex-shrink: 0;
    }

    /* Contacts */
    .contacts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 18px 20px;
    }
    .contact-card .role {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .contact-card .name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
    }
    .contact-card .detail {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* Risk flags */
    .risk-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      margin-bottom: 40px;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .risk-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    .risk-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .risk-table tr:last-child td { border-bottom: none; }
    .risk-table .sev {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-white);
    }
    .sev.high { background: #b91c1c; }
    .sev.med { background: var(--nu-accent-gold); color: var(--nu-navy); }
    .sev.low { background: var(--nu-blue); }

    /* CTA */
    .cta-row {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 32px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 20px;
      align-items: center;
      margin-bottom: 16px;
    }
    @media (max-width: 820px) {
      .cta-row { grid-template-columns: 1fr; }
    }
    .cta-row h3 {
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 6px;
    }
    .cta-row p {
      opacity: 0.88;
      font-size: 0.95rem;
    }
    .cta-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-block;
      padding: 12px 22px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .btn-cyan {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .btn-cyan:hover { background: #33dcff; transform: translateY(-1px); }
    .btn-outline {
      border: 2px solid var(--nu-cyan);
      color: var(--nu-cyan);
    }
    .btn-outline:hover { background: var(--nu-cyan); color: var(--nu-navy); }

    /* Footer */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .wrap { padding: 36px 22px 40px; }
      .task-banner h1 { font-size: 1.3rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .panel, .fact-card, .contact-card { box-shadow: none; }
      .cta-row, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
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
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,60 L1440,0 L1440,60 L0,60 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="wrap">

      <section class="task-banner">
        <div>
          <span class="pill">reMarkable Action Item</span>
          <h1 style="margin-top:10px;">Estate Acquisition — 4505 Buttewoods</h1>
          <div class="sub">Negotiate purchase of 7,098 sq ft estate — prepare offer, diligence plan, and negotiation posture.</div>
        </div>
        <div class="banner-meta">
          <div><strong>Status:</strong> Open</div>
          <div><strong>Priority:</strong> High</div>
          <div><strong>Opened:</strong> 2026-04-23</div>
          <div><strong>Owner:</strong> Aaron C. Norris</div>
        </div>
      </section>

      <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
      <div class="property-grid">
        <div class="fact-card">
          <div class="label">Address</div>
          <div class="value">4505 Buttewoods<small>Primary residence — estate</small></div>
        </div>
        <div class="fact-card">
          <div class="label">Living Area</div>
          <div class="value">7,098 sq ft<small>Main dwelling, heated &amp; cooled</small></div>
        </div>
        <div class="fact-card">
          <div class="label">Classification</div>
          <div class="value">Estate<small>Single-family, premium tier</small></div>
        </div>
        <div class="fact-card">
          <div class="label">Transaction</div>
          <div class="value">Acquisition<small>Direct negotiation</small></div>
        </div>
      </div>

      <h2 class="nu-section-title">Negotiation <span>Strategy</span></h2>
      <div class="two-col">
        <div class="panel">
          <h3>Opening Posture</h3>
          <p>Lead with a clean, cash-credible offer anchored below list but above the distressed-comp floor. The goal is to establish seriousness without giving up price leverage on first contact.</p>
          <ul>
            <li>Walk the property in person before any written offer — photograph every flagged condition item.</li>
            <li>Pull the last three comparable estate sales within one mile and within the last 12 months.</li>
            <li>Verify the seller's timeline — a motivated seller unlocks 3–5% of additional discount on estates this size.</li>
            <li>Open at the bottom of the defensible range with a 10-day inspection contingency and 30-day close.</li>
            <li>Reserve one full price concession to trade for survey waiver or repair credit — never give it away on the first counter.</li>
          </ul>
        </div>
        <div class="panel">
          <h3>Leverage Points</h3>
          <ul>
            <li><strong>Cash position.</strong> A non-financed close removes the appraisal contingency — worth roughly 2–4% to the seller.</li>
            <li><strong>Close speed.</strong> 30 days beats the typical 45–60 day financed close by 4–6 weeks.</li>
            <li><strong>Inspection findings.</strong> 7,098 sq ft invites HVAC, roof, and foundation exposure — each is a legitimate renegotiation lane.</li>
            <li><strong>Property tax posture.</strong> Confirm current assessment vs. list; a high list-to-assessment ratio strengthens the buyer.</li>
            <li><strong>Carrying cost pressure.</strong> Estates of this size carry $3,000–$5,000/month in taxes, insurance, and upkeep — time favors the buyer.</li>
          </ul>
        </div>
      </div>

      <h2 class="nu-section-title">Price <span>Lanes</span></h2>
      <div class="lanes">
        <div class="lane low">
          <div class="tag">Floor — Walk-Away</div>
          <div class="price">Opening Offer</div>
          <div class="per">Anchor below list, supported by comps &amp; condition report</div>
          <div class="note">Used only as the first written offer. Never exceed without one concrete concession returned by the seller.</div>
        </div>
        <div class="lane mid">
          <div class="tag">Target — Walk-In Goal</div>
          <div class="price">Negotiated Price</div>
          <div class="per">Reached through 2–3 round counters with traded concessions</div>
          <div class="note">Expected landing zone after inspection credits and closing-cost allocation. This is the number Aaron signs at.</div>
        </div>
        <div class="lane top">
          <div class="tag">Ceiling — Hard Stop</div>
          <div class="price">Walk-Away</div>
          <div class="per">Price at which yield &amp; risk no longer justify the acquisition</div>
          <div class="note">Above this number the deal is declined in writing, politely, with the door left open for a future price.</div>
        </div>
      </div>

      <h2 class="nu-section-title">Action <span>Timeline</span></h2>
      <div class="timeline">
        <div class="step">
          <div class="when">Day 1 — 2026-04-23</div>
          <div class="title">Open the file &amp; confirm the seller's position</div>
          <div class="body">Pull MLS history, public records, and current tax assessment on 4505 Buttewoods. Confirm seller representation, motivation, and any prior offers. Document starting data in the negotiation log.</div>
        </div>
        <div class="step">
          <div class="when">Days 2–3</div>
          <div class="title">Comparable sales &amp; condition scan</div>
          <div class="body">Identify three to five estate comps above 6,000 sq ft within one mile. Drive the street. Photograph exterior, roof age indicators, grading, and driveway condition.</div>
        </div>
        <div class="step">
          <div class="when">Days 4–5</div>
          <div class="title">In-person walkthrough</div>
          <div class="body">Schedule a full walkthrough with listing agent. Flag HVAC age, roof condition, foundation signs, plumbing stacks, electrical panel, and any water-intrusion signals before writing an offer.</div>
        </div>
        <div class="step">
          <div class="when">Day 6</div>
          <div class="title">Financing &amp; proof-of-funds package</div>
          <div class="body">Assemble proof-of-funds letter sized to the ceiling, not the opening offer. Confirm title company selection and preferred closing attorney.</div>
        </div>
        <div class="step">
          <div class="when">Day 7</div>
          <div class="title">Written offer transmitted</div>
          <div class="body">Deliver the opening offer with a 48-hour response window. Inspection contingency: 10 days. Financing contingency: none (cash-credible). Close: 30 days.</div>
        </div>
        <div class="step">
          <div class="when">Days 8–14</div>
          <div class="title">Counter rounds &amp; inspection</div>
          <div class="body">Trade one concession per round. Use the inspection report to recover 1–3% via repair credit or price reduction. Do not improve the offer without a written counter.</div>
        </div>
        <div class="step">
          <div class="when">Day 15</div>
          <div class="title">Go / no-go decision</div>
          <div class="body">If the negotiated price sits at or below target — sign. If above ceiling — decline in writing, leave the door open for a 30-day return.</div>
        </div>
      </div>

      <h2 class="nu-section-title">Due Diligence <span>Checklist</span></h2>
      <div class="checklist">
        <h3>Before writing any offer</h3>
        <label><input type="checkbox"> Confirm legal description and parcel boundaries against county records</label>
        <label><input type="checkbox"> Pull last 10 years of ownership and transaction history</label>
        <label><input type="checkbox"> Verify current tax assessment vs. list price (ratio flag)</label>
        <label><input type="checkbox"> Pull three to five estate comps &gt; 6,000 sq ft within one mile</label>
        <label><input type="checkbox"> Confirm zoning, deed restrictions, and any HOA covenants</label>
        <label><input type="checkbox"> Screen for easements, encroachments, and recorded liens</label>
        <label><input type="checkbox"> Identify septic vs. sewer, water source, and utility providers</label>
        <label><input type="checkbox"> Confirm flood zone, FEMA map, and insurance baseline quote</label>
        <label><input type="checkbox"> Document seller timeline, motivation, and any contingent moves</label>
        <label><input type="checkbox"> Pre-arrange home inspector, roof inspector, and structural engineer</label>
        <label><input type="checkbox"> Issue proof-of-funds letter sized to ceiling price</label>
        <label><input type="checkbox"> Final review with Aaron before offer transmits</label>
      </div>

      <h2 class="nu-section-title">Risk <span>Register</span></h2>
      <table class="risk-table">
        <thead>
          <tr>
            <th>Risk</th>
            <th>Severity</th>
            <th>Mitigation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hidden structural or foundation issue on 7,098 sq ft footprint</td>
            <td><span class="sev high">High</span></td>
            <td>Structural engineer inspection mandatory before contingency release — not optional.</td>
          </tr>
          <tr>
            <td>Roof past service life on large estate roof</td>
            <td><span class="sev high">High</span></td>
            <td>Roof inspection with moisture scan — trade repair credit or full replacement allowance.</td>
          </tr>
          <tr>
            <td>HVAC system age and cost-to-replace on large footprint</td>
            <td><span class="sev med">Medium</span></td>
            <td>Inventory every air handler and condenser — quote replacement before finalizing price.</td>
          </tr>
          <tr>
            <td>Title defect, easement, or unrecorded encroachment</td>
            <td><span class="sev med">Medium</span></td>
            <td>Full title commitment + current survey — no waivers, even for close-speed leverage.</td>
          </tr>
          <tr>
            <td>Property tax reassessment post-sale</td>
            <td><span class="sev med">Medium</span></td>
            <td>Model carrying cost at 100% reassessment — do not underwrite with stale tax line.</td>
          </tr>
          <tr>
            <td>Seller's refusal to move off list price</td>
            <td><span class="sev low">Low</span></td>
            <td>Walk away cleanly at ceiling. Leave the written door open for a 30-day return at target.</td>
          </tr>
          <tr>
            <td>Water intrusion history</td>
            <td><span class="sev high">High</span></td>
            <td>Request seller's disclosure and any prior remediation invoices. Independent moisture survey on the walkthrough.</td>
          </tr>
        </tbody>
      </table>

      <h2 class="nu-section-title">Deal <span>Team</span></h2>
      <div class="contacts">
        <div class="contact-card">
          <div class="role">Principal / Buyer</div>
          <div class="name">Aaron C. Norris</div>
          <div class="detail">Founder &amp; CEO — decision authority on final price, terms, and close date</div>
        </div>
        <div class="contact-card">
          <div class="role">Admin &amp; Coordination</div>
          <div class="name">Caroline Butler</div>
          <div class="detail">Document handling, calendar, walkthrough scheduling — Tier 1 trust; customer-facing items route through Aaron</div>
        </div>
        <div class="contact-card">
          <div class="role">Title &amp; Closing Attorney</div>
          <div class="name">To confirm before Day 6</div>
          <div class="detail">Preferred Birmingham closing counsel — must be locked before proof-of-funds letter issues</div>
        </div>
        <div class="contact-card">
          <div class="role">Home &amp; Structural Inspection</div>
          <div class="name">To confirm before Day 4</div>
          <div class="detail">Licensed home inspector + independent structural engineer for foundation review</div>
        </div>
        <div class="contact-card">
          <div class="role">Roof &amp; HVAC</div>
          <div class="name">To confirm before Day 4</div>
          <div class="detail">Licensed roofer for age &amp; moisture scan; HVAC tech to inventory and quote replacement</div>
        </div>
        <div class="contact-card">
          <div class="role">Insurance</div>
          <div class="name">To confirm before Day 6</div>
          <div class="detail">Bind-ready quote — flood, wind, and dwelling rebuild cost on 7,098 sq ft</div>
        </div>
      </div>

      <div class="cta-row">
        <div>
          <h3>Next Move — Open the File Today</h3>
          <p>Pull MLS history on 4505 Buttewoods, confirm seller representation, and schedule the in-person walkthrough for this week. No written offer transmits until the condition scan and comp package are complete.</p>
        </div>
        <div class="cta-buttons">
          <a class="btn btn-cyan" href="tel:2055001343">Call Aaron — 205-500-1343</a>
          <a class="btn btn-outline" href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Negotiation%20File">Open Email Thread</a>
        </div>
      </div>

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