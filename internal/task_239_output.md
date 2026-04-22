<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Negotiation Strategy — Norris Utilities®</title>
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
      --nu-success: #0B8F3E;
      --nu-warning: #C47A00;
      --nu-danger: #B00020;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 70px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 90px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 65%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 60px; display: block; }

    /* DOC BADGE */
    .nu-doc-badge {
      max-width: 1100px;
      margin: -20px auto 0;
      padding: 0 40px;
      position: relative;
      z-index: 11;
    }
    .doc-badge-inner {
      background: var(--nu-white);
      border-left: 5px solid var(--nu-blue);
      padding: 18px 28px;
      box-shadow: 0 6px 24px rgba(0,0,51,0.08);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 14px;
      border-radius: 4px;
    }
    .doc-badge-label {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .doc-badge-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
    }
    .doc-badge-meta {
      color: var(--nu-body-text);
      font-size: 0.85rem;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      max-width: 1100px;
      margin: 30px auto 0;
      padding: 50px 40px 60px;
      box-shadow: 0 4px 20px rgba(0,0,51,0.04);
      border-radius: 6px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    h1.page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      line-height: 1.2;
    }
    h1.page-title .accent { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      padding-bottom: 18px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }

    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin: 38px 0 14px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* PROPERTY SNAPSHOT */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 30px;
    }
    .snapshot-card {
      background: linear-gradient(135deg, #F8F9FE 0%, #EEF1FC 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 4px;
    }
    .snapshot-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 6px;
    }
    .snapshot-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .snapshot-sub {
      font-size: 0.8rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      margin: 20px 0;
      border-radius: 0 4px 4px 0;
    }
    .nu-callout.warn {
      background: linear-gradient(135deg, rgba(196,122,0,0.06) 0%, rgba(201,168,76,0.08) 100%);
      border-left-color: var(--nu-warning);
    }
    .nu-callout.good {
      background: linear-gradient(135deg, rgba(11,143,62,0.05) 0%, rgba(11,143,62,0.08) 100%);
      border-left-color: var(--nu-success);
    }
    .nu-callout-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* TABLE */
    .nu-table-wrap { overflow-x: auto; margin: 14px 0 20px; }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
      background: var(--nu-white);
    }
    table.nu-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      padding: 12px 14px;
      letter-spacing: 0.03em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    table.nu-table td {
      padding: 11px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tr:nth-child(even) td { background: #FAFBFE; }
    table.nu-table tr:hover td { background: #F0F4FE; }
    table.nu-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    table.nu-table .row-total td {
      background: var(--nu-dark-text) !important;
      color: var(--nu-white);
      font-weight: 900;
    }
    table.nu-table .row-total td.num { color: var(--nu-cyan); }

    /* TIER TABLE highlighting */
    table.nu-table tr.tier-target td {
      background: rgba(6,208,255,0.12) !important;
      font-weight: 700;
    }
    table.nu-table tr.tier-walk td {
      background: rgba(176,0,32,0.07) !important;
    }

    /* PHASES */
    .phase-list { counter-reset: phase; list-style: none; margin: 10px 0; }
    .phase-list > li {
      counter-increment: phase;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 20px 16px 62px;
      margin-bottom: 12px;
      border-radius: 0 4px 4px 0;
      position: relative;
    }
    .phase-list > li::before {
      content: counter(phase);
      position: absolute;
      left: 14px;
      top: 14px;
      width: 34px;
      height: 34px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .phase-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .phase-goal {
      font-size: 0.85rem;
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }
    .phase-body { font-size: 0.95rem; color: var(--nu-body-text); }
    .phase-body ul { margin: 6px 0 0 18px; }
    .phase-body li { margin-bottom: 4px; }

    /* CHECK LIST */
    .nu-checklist { list-style: none; }
    .nu-checklist li {
      padding: 8px 0 8px 34px;
      position: relative;
      border-bottom: 1px dotted var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-checklist li:last-child { border-bottom: 0; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 11px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* SCRIPT BLOCK */
    .script-block {
      background: #FAFBFE;
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      margin: 14px 0;
      font-size: 0.95rem;
      line-height: 1.75;
      border-radius: 0 4px 4px 0;
    }
    .script-label {
      font-size: 0.72rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .script-block p { margin-bottom: 10px; }
    .script-block p:last-child { margin-bottom: 0; }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin: 14px 0;
    }
    .pro-card, .con-card {
      padding: 18px 20px;
      border-radius: 4px;
      border: 1px solid var(--nu-medium-gray);
    }
    .pro-card {
      background: rgba(11,143,62,0.05);
      border-left: 4px solid var(--nu-success);
    }
    .con-card {
      background: rgba(176,0,32,0.05);
      border-left: 4px solid var(--nu-danger);
    }
    .pro-card h4, .con-card h4 {
      font-size: 0.85rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .pro-card h4 { color: var(--nu-success); }
    .con-card h4 { color: var(--nu-danger); }
    .pro-card ul, .con-card ul { margin-left: 18px; font-size: 0.92rem; }
    .pro-card li, .con-card li { margin-bottom: 6px; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
      margin-top: 40px;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 12px auto 18px;
      opacity: 0.6;
    }
    .nu-footer-confidential {
      margin-top: 18px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-content-area { padding: 30px 22px 40px; margin: 20px 12px 0; }
      h1.page-title { font-size: 1.5rem; }
      .two-col { grid-template-columns: 1fr; }
      .doc-badge-inner { flex-direction: column; align-items: flex-start; }
      .nu-footer { padding: 36px 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-content-area { box-shadow: none; margin: 0; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .phase-list > li { break-inside: avoid; }
      .nu-callout { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC BADGE -->
  <div class="nu-doc-badge">
    <div class="doc-badge-inner">
      <div>
        <div class="doc-badge-label">Personal Negotiation Strategy · Confidential</div>
        <div class="doc-badge-title">4505 Buttewoods — 7,098 sq ft Estate Acquisition</div>
      </div>
      <div class="doc-badge-meta">
        Prepared: April 22, 2026<br>
        Principal: Aaron C. Norris
      </div>
    </div>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">

    <h1 class="page-title"><span class="accent">Negotiation</span> Playbook — 4505 Buttewoods</h1>
    <div class="page-subtitle">A step-by-step negotiation framework to acquire the 7,098 sq ft Buttewoods estate at the best possible terms — built from the reMarkable action item logged April 22, 2026, and cross-referenced with the $900,000 offer strategy already on file.</div>

    <!-- SNAPSHOT -->
    <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
    <div class="snapshot-grid">
      <div class="snapshot-card">
        <div class="snapshot-label">Address</div>
        <div class="snapshot-value" style="font-size:1.1rem;">4505 Buttewoods</div>
        <div class="snapshot-sub">Birmingham market area</div>
      </div>
      <div class="snapshot-card">
        <div class="snapshot-label">Living Area</div>
        <div class="snapshot-value">7,098 sq ft</div>
        <div class="snapshot-sub">Estate classification</div>
      </div>
      <div class="snapshot-card">
        <div class="snapshot-label">Opening Offer</div>
        <div class="snapshot-value">$900,000</div>
        <div class="snapshot-sub">~$127 / sq ft</div>
      </div>
      <div class="snapshot-card">
        <div class="snapshot-label">Walk-Away</div>
        <div class="snapshot-value">$985,000</div>
        <div class="snapshot-sub">Hard ceiling — do not exceed</div>
      </div>
      <div class="snapshot-card">
        <div class="snapshot-label">Target Close</div>
        <div class="snapshot-value">$940–960K</div>
        <div class="snapshot-sub">Mid-range negotiated price</div>
      </div>
      <div class="snapshot-card">
        <div class="snapshot-label">Status</div>
        <div class="snapshot-value" style="font-size:1.1rem;color:var(--nu-blue);">Strategy Phase</div>
        <div class="snapshot-sub">Pre-offer preparation</div>
      </div>
    </div>

    <!-- OBJECTIVE -->
    <h2 class="nu-section-title">Negotiation <span>Objective</span></h2>
    <div class="nu-callout">
      <div class="nu-callout-title">Primary Goal</div>
      Acquire 4505 Buttewoods at a price that preserves cash reserves for Norris Utilities® equipment purchases and growth, while securing terms (inspection, financing, closing timeline) that protect Aaron from post-close surprises.
    </div>
    <div class="nu-callout good">
      <div class="nu-callout-title">Success Looks Like</div>
      Contract signed between <strong>$940,000 and $960,000</strong>, with a 10-day due diligence window, seller-covered title policy, and a 45–60 day close that aligns with business cash flow cycles.
    </div>

    <!-- PRICE TIERS -->
    <h2 class="nu-section-title">Price <span>Tier Ladder</span></h2>
    <p style="margin-bottom: 12px;">Every offer and counter-offer is scripted in advance. Never negotiate in the moment — work the ladder.</p>
    <div class="nu-table-wrap">
      <table class="nu-table">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Action</th>
            <th>Price</th>
            <th>$ / sq ft</th>
            <th>Posture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Tier 1</strong></td>
            <td>Opening offer — anchor low, defensible with comps</td>
            <td class="num">$900,000</td>
            <td class="num">$126.80</td>
            <td>Polite, data-backed, signal seriousness</td>
          </tr>
          <tr>
            <td><strong>Tier 2</strong></td>
            <td>First counter — hold firm, request seller concession</td>
            <td class="num">$920,000</td>
            <td class="num">$129.62</td>
            <td>Cite inspection unknowns, market conditions</td>
          </tr>
          <tr class="tier-target">
            <td><strong>Tier 3</strong></td>
            <td>Target landing zone — split the difference</td>
            <td class="num">$940,000 – $960,000</td>
            <td class="num">$132.43 – $135.25</td>
            <td>Willing to close here with favorable terms</td>
          </tr>
          <tr>
            <td><strong>Tier 4</strong></td>
            <td>Stretch ceiling — only with seller concessions</td>
            <td class="num">$975,000</td>
            <td class="num">$137.36</td>
            <td>Must include credits, repairs, or closing cost help</td>
          </tr>
          <tr class="tier-walk">
            <td><strong>Tier 5</strong></td>
            <td>Walk-away — firm NO above this line</td>
            <td class="num">$985,000</td>
            <td class="num">$138.77</td>
            <td>Shake hands, leave number, move on</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="nu-callout warn">
      <div class="nu-callout-title">Discipline Rule</div>
      The walk-away number was set cold, with a clear head, on April 22, 2026. If you feel the urge to exceed $985,000 mid-negotiation, that is emotion talking — not math. Call it a night, revisit in 24 hours, and let the seller wonder.
    </div>

    <!-- PHASES -->
    <h2 class="nu-section-title">Six-Phase <span>Negotiation Plan</span></h2>
    <ol class="phase-list">
      <li>
        <div class="phase-title">Pre-Offer Preparation</div>
        <div class="phase-goal">Goal — Arrive armed with data</div>
        <div class="phase-body">
          <ul>
            <li>Pull last 12 months of Buttewoods / comparable 6,500–7,500 sq ft estate sales within 3 miles.</li>
            <li>Document days-on-market, list-to-sold ratio, and any price reductions on the subject property.</li>
            <li>Secure pre-approval or proof-of-funds letter dated within 30 days of offer.</li>
            <li>Identify 2–3 genuine alternative properties so the walk-away is real, not theatrical.</li>
          </ul>
        </div>
      </li>
      <li>
        <div class="phase-title">Seller Motivation Discovery</div>
        <div class="phase-goal">Goal — Know why they're selling</div>
        <div class="phase-body">
          <ul>
            <li>Ask agent: how long on market, any prior offers, why is the seller moving?</li>
            <li>Drive-by at different times — is the house occupied, vacant, staged?</li>
            <li>Look for estate/probate, job relocation, divorce, or carrying-cost signals — each changes leverage.</li>
            <li>Check county records for liens, tax delinquency, or mortgage balance clues.</li>
          </ul>
        </div>
      </li>
      <li>
        <div class="phase-title">Opening Offer Delivery</div>
        <div class="phase-goal">Goal — Anchor at $900,000 with credibility</div>
        <div class="phase-body">
          <ul>
            <li>Submit written offer at $900,000 with 10-day due diligence and 45-day close.</li>
            <li>Include a short personal letter — Aaron as 3rd-generation Birmingham business owner, intent to own long-term.</li>
            <li>Attach comps packet as justification — never just a number.</li>
            <li>Set response deadline: 72 hours. Respect creates urgency.</li>
          </ul>
        </div>
      </li>
      <li>
        <div class="phase-title">Counter-Offer Management</div>
        <div class="phase-goal">Goal — Work the ladder, never the emotion</div>
        <div class="phase-body">
          <ul>
            <li>When seller counters, wait a full business day before responding — patience signals strength.</li>
            <li>Move in measured increments: $900K → $920K → $940K. Never jump $50K in one move.</li>
            <li>Trade price for terms: every concession you give must earn you something (repair credits, inclusions, closing cost contribution).</li>
            <li>If seller refuses below $975K, shift conversation to terms: "I can meet your number if you cover X."</li>
          </ul>
        </div>
      </li>
      <li>
        <div class="phase-title">Inspection & Renegotiation</div>
        <div class="phase-goal">Goal — Reopen price via legitimate findings</div>
        <div class="phase-body">
          <ul>
            <li>Commission full inspection: structural, roof, HVAC, electrical, plumbing, foundation, radon, sewer scope.</li>
            <li>Obtain 2–3 written repair estimates for any material findings.</li>
            <li>Request repair credit (not repairs performed by seller) — credits at closing are cleaner and reduce cash-to-close.</li>
            <li>Be willing to walk here if the property has hidden material defects. Due diligence period is sacred.</li>
          </ul>
        </div>
      </li>
      <li>
        <div class="phase-title">Close the Deal</div>
        <div class="phase-goal">Goal — Sign clean, fund on time</div>
        <div class="phase-body">
          <ul>
            <li>Lock mortgage rate 30 days before close.</li>
            <li>Final walkthrough within 48 hours of closing — confirm property condition and included items.</li>
            <li>Review closing disclosure line-by-line — verify prorations, credits, and all agreed concessions.</li>
            <li>Wire funds only after voice-verifying instructions with title company at a known number.</li>
          </ul>
        </div>
      </li>
    </ol>

    <!-- SCRIPT -->
    <h2 class="nu-section-title">Aaron's <span>Opening Script</span></h2>
    <div class="script-block">
      <div class="script-label">What to say to the listing agent on first contact</div>
      <p><em>"Good morning — this is Aaron Norris. I run Norris Utilities here in Birmingham and I've been looking at 4505 Buttewoods seriously. I'm a cash-strong buyer with business financing already in place, and I'm prepared to move on a reasonable timeline. Before I put pen to paper, help me understand — how long has it been on the market, and is the seller flexible on price or terms?"</em></p>
      <p><em>"I'll be straight with you: I'm not here to waste anyone's time. I've studied the comps, and I'll bring a fair written offer with real money backing it. What I won't do is chase a number. Walk me through where your seller's head is, and let's see if we can build something that works for both sides."</em></p>
    </div>

    <div class="script-block">
      <div class="script-label">Response if seller counters above $975,000</div>
      <p><em>"I appreciate the counter, but at that number the math stops working for me as a long-term owner. Where I can get closer is if we talk terms — a repair credit after inspection, a seller-paid title policy, or a shorter close. Tell your seller I'd rather find a way to make this happen than trade dollars we don't have."</em></p>
    </div>

    <!-- LEVERAGE -->
    <h2 class="nu-section-title">Leverage <span>Analysis</span></h2>
    <div class="two-col">
      <div class="pro-card">
        <h4>Aaron's Advantages</h4>
        <ul>
          <li>Business owner with documented income and reserves</li>
          <li>No home-sale contingency — can move fast</li>
          <li>Local Birmingham roots, long-term hold intention</li>
          <li>Disciplined walk-away number in writing</li>
          <li>Willingness to close on seller's preferred timeline</li>
          <li>Proof of funds ready on day one</li>
        </ul>
      </div>
      <div class="con-card">
        <h4>Seller's Potential Advantages</h4>
        <ul>
          <li>Rare 7,098 sq ft estate — limited comparable inventory</li>
          <li>If priced aggressively, may attract competing offers</li>
          <li>Seller may have no pressure to sell quickly</li>
          <li>Emotional attachment can inflate asking price</li>
          <li>Agent motivated to push Aaron above walk-away line</li>
        </ul>
      </div>
    </div>

    <!-- TERMS -->
    <h2 class="nu-section-title">Non-Price <span>Terms That Matter</span></h2>
    <p style="margin-bottom: 10px;">Price gets the headline. Terms win the deal. These are the levers Aaron can pull to land inside the target tier.</p>
    <div class="nu-table-wrap">
      <table class="nu-table">
        <thead>
          <tr><th>Term</th><th>Ask</th><th>Value to Aaron</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Due Diligence Period</td>
            <td class="num">10 business days</td>
            <td>Full inspection window without losing earnest money</td>
          </tr>
          <tr>
            <td>Earnest Money</td>
            <td class="num">1% of purchase price</td>
            <td>Shows commitment; keep low enough to stay protected</td>
          </tr>
          <tr>
            <td>Repair Credit</td>
            <td class="num">$8,000–$15,000</td>
            <td>Post-inspection concession — cleaner than seller repairs</td>
          </tr>
          <tr>
            <td>Closing Cost Contribution</td>
            <td class="num">Up to 2% from seller</td>
            <td>Reduces cash-to-close by $18K–$19K at $940K price</td>
          </tr>
          <tr>
            <td>Title Policy</td>
            <td>Seller-paid owner's policy</td>
            <td>Standard in Alabama — don't leave it on the table</td>
          </tr>
          <tr>
            <td>Home Warranty</td>
            <td>1-year, seller-paid</td>
            <td>Covers major systems during first year of ownership</td>
          </tr>
          <tr>
            <td>Closing Date</td>
            <td class="num">45–60 days</td>
            <td>Aligns with NU cash cycle; lets Aaron time lock-in</td>
          </tr>
          <tr>
            <td>Possession</td>
            <td>At funding, no rent-back</td>
            <td>Avoid post-close tenant/seller complications</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- PRE-OFFER CHECKLIST -->
    <h2 class="nu-section-title">Pre-Offer <span>Checklist</span></h2>
    <ul class="nu-checklist">
      <li><strong>Pre-approval letter</strong> — current within 30 days, lender contact verified</li>
      <li><strong>Proof of funds</strong> — statement showing earnest money + closing cash available</li>
      <li><strong>Comp analysis</strong> — minimum 5 comparable sales with full printouts</li>
      <li><strong>Days-on-market history</strong> — including any prior price reductions</li>
      <li><strong>Seller motivation intel</strong> — why are they selling, any deadline, any prior offers?</li>
      <li><strong>Property visit</strong> — in person, with camera, with spouse/partner if applicable</li>
      <li><strong>Drive-by at different times</strong> — morning, evening, weekend</li>
      <li><strong>School district / zoning check</strong> — confirm future use aligns with intent</li>
      <li><strong>Insurance quote</strong> — homeowners estimate to verify annual carrying cost</li>
      <li><strong>Property tax verification</strong> — current millage and any pending reassessment</li>
      <li><strong>Flood zone / survey review</strong> — pull FEMA map and prior survey if available</li>
      <li><strong>Walk-away number confirmed</strong> — signed by Aaron, filed, not moved</li>
      <li><strong>Alternative properties identified</strong> — 2–3 real options to preserve leverage</li>
      <li><strong>Offer letter drafted</strong> — written, reviewed, ready to sign on 24-hour notice</li>
    </ul>

    <!-- RED FLAGS -->
    <h2 class="nu-section-title">Red Flags <span>to Watch For</span></h2>
    <div class="nu-callout warn">
      <div class="nu-callout-title">Walk Away If…</div>
      <ul style="margin-left: 18px; margin-top: 8px;">
        <li>Seller refuses to allow a standard inspection or insists on a shortened due-diligence window.</li>
        <li>Inspection reveals foundation, structural, or major water-intrusion issues that cannot be remediated for under $25,000.</li>
        <li>Title search returns unresolved liens, boundary disputes, or easement issues.</li>
        <li>Seller will not go below $985,000 even with repair credits and a reasonable close.</li>
        <li>Agent pressure tactics escalate — "another offer just came in" without proof is usually noise.</li>
        <li>Aaron's gut is telling him no. The discipline to walk is worth more than any single deal.</li>
      </ul>
    </div>

    <!-- FINANCIAL REALITY -->
    <h2 class="nu-section-title">Financial <span>Reality Check</span></h2>
    <div class="nu-table-wrap">
      <table class="nu-table">
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Purchase Price</th>
            <th>Down (20%)</th>
            <th>Est. Closing Costs (3%)</th>
            <th>Cash to Close</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Opening win (dream)</td>
            <td class="num">$900,000</td>
            <td class="num">$180,000</td>
            <td class="num">$27,000</td>
            <td class="num">$207,000</td>
          </tr>
          <tr class="tier-target">
            <td>Target landing zone</td>
            <td class="num">$950,000</td>
            <td class="num">$190,000</td>
            <td class="num">$28,500</td>
            <td class="num">$218,500</td>
          </tr>
          <tr>
            <td>Stretch ceiling</td>
            <td class="num">$975,000</td>
            <td class="num">$195,000</td>
            <td class="num">$29,250</td>
            <td class="num">$224,250</td>
          </tr>
          <tr class="row-total">
            <td>Walk-away limit</td>
            <td class="num">$985,000</td>
            <td class="num">$197,000</td>
            <td class="num">$29,550</td>
            <td class="num">$226,550</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="nu-callout">
      <div class="nu-callout-title">Business Impact</div>
      Every $10,000 negotiated off the purchase price preserves <strong>$2,000 in down-payment capital</strong> and roughly <strong>$60 / month in principal and interest</strong> at current rates. That capital can go directly into FlexPro Armor inventory, Samson Rope stocking, or Skylift deposits — so negotiation discipline isn't personal, it's business.
    </div>

    <!-- NEXT ACTIONS -->
    <h2 class="nu-section-title">Next <span>Actions — This Week</span></h2>
    <ul class="nu-checklist">
      <li><strong>Day 1 (today):</strong> Order comparable sales packet from licensed Birmingham agent</li>
      <li><strong>Day 2:</strong> Confirm financing — call lender, lock pre-approval at $985K ceiling</li>
      <li><strong>Day 3:</strong> Schedule first in-person property tour with listing agent</li>
      <li><strong>Day 4:</strong> Pull county tax records, permit history, and title preliminary</li>
      <li><strong>Day 5:</strong> Identify 2 backup properties — real alternatives, not decoys</li>
      <li><strong>Day 6:</strong> Draft opening offer letter + personal cover note</li>
      <li><strong>Day 7:</strong> Review strategy one final time — sleep on it — submit Monday morning</li>
    </ul>

  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-confidential">Confidential — Personal Negotiation Strategy — Not for Distribution</div>
  </footer>

</body>
</html>