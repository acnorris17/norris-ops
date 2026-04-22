<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Action Plan — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #0A8F3C;
      --nu-warning: #C9660A;
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
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
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      border: 1.5px solid rgba(255,255,255,0.55);
      border-radius: 3px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.28em;
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

    /* MAIN */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 50px 40px 70px;
    }
    .nu-container {
      max-width: 1120px;
      margin: 0 auto;
    }

    /* TITLE BLOCK */
    .page-title-block {
      border-bottom: 3px solid var(--nu-blue);
      padding-bottom: 22px;
      margin-bottom: 36px;
    }
    .page-eyebrow {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.24em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.15rem;
      color: var(--nu-blue);
      line-height: 1.15;
      margin-bottom: 6px;
    }
    .page-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .meta-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      margin-top: 18px;
      font-size: 0.88rem;
    }
    .meta-strip .pill {
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-blue);
      padding: 6px 14px;
      color: var(--nu-dark-text);
    }
    .meta-strip .pill strong {
      color: var(--nu-blue);
      letter-spacing: 0.04em;
      font-weight: 700;
    }

    /* SECTION */
    .section {
      margin-bottom: 40px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.45rem;
      margin-bottom: 16px;
      line-height: 1.2;
    }
    .section-title .w-blue { color: var(--nu-blue); }
    .section-title .w-dark { color: var(--nu-dark-text); font-weight: 700; }

    /* SUMMARY CARD */
    .summary-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 26px;
      border-radius: 4px;
      margin-bottom: 32px;
    }
    .summary-card p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
    }

    /* PROPERTY FACT GRID */
    .fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      border-radius: 4px;
      padding: 20px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .fact-card .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .fact-card .value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 4px;
    }
    .fact-card .sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }

    /* STRATEGY TWO-COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    .strat-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .strat-card h3 {
      font-size: 1.08rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .strat-card ul {
      list-style: none;
      padding: 0;
    }
    .strat-card ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.96rem;
      border-bottom: 1px dotted var(--nu-medium-gray);
    }
    .strat-card ul li:last-child { border-bottom: none; }
    .strat-card ul li::before {
      content: '▸';
      position: absolute;
      left: 0; top: 8px;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* ACTION CHECKLIST */
    .checklist {
      list-style: none;
      counter-reset: step;
      padding: 0;
    }
    .checklist li {
      counter-increment: step;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      padding: 18px 22px 18px 70px;
      margin-bottom: 10px;
      position: relative;
      font-size: 0.98rem;
    }
    .checklist li::before {
      content: counter(step);
      position: absolute;
      left: 18px; top: 50%;
      transform: translateY(-50%);
      width: 38px; height: 38px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.05rem;
    }
    .checklist li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      margin-bottom: 4px;
      font-size: 1.02rem;
    }

    /* OFFER TABLE */
    .offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .offer-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
    }
    .offer-table th {
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: left;
    }
    .offer-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .offer-table tr:last-child td { border-bottom: none; }
    .offer-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .offer-table .tier-label {
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.03em;
    }
    .offer-table .price-cell {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
    }

    /* RISK GRID */
    .risk-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .risk-item {
      padding: 18px 20px;
      border-radius: 4px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
    }
    .risk-item.warn { border-left: 4px solid var(--nu-warning); }
    .risk-item.go { border-left: 4px solid var(--nu-success); }
    .risk-item h4 {
      font-size: 0.95rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .risk-item p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.05) 0%, rgba(6,208,255,0.08) 100%);
      border: 1px solid rgba(0,0,255,0.15);
      border-radius: 6px;
      padding: 24px 28px;
      margin-top: 10px;
    }
    .callout .callout-title {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .callout p { font-size: 0.96rem; color: var(--nu-dark-text); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.9;
    }
    .nu-footer-contact strong {
      color: var(--nu-white);
      font-weight: 700;
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
      margin: 18px auto;
      opacity: 0.6;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 48px 20px 72px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-content-area { padding: 36px 22px 50px; }
      .page-title { font-size: 1.55rem; }
      .two-col, .risk-grid { grid-template-columns: 1fr; }
      .offer-table th, .offer-table td { padding: 10px 10px; font-size: 0.85rem; }
      .checklist li { padding: 16px 18px 16px 60px; }
      .checklist li::before { width: 32px; height: 32px; left: 14px; font-size: 0.95rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .strat-card, .fact-card, .checklist li, .risk-item { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment&reg;</div>
    <div class="nu-doc-label">Internal Action Plan</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="page-title-block">
        <div class="page-eyebrow">reMarkable Action Item &middot; Real Estate Acquisition</div>
        <h1 class="page-title">Negotiate Purchase of 7,098 sq ft Estate <span>&mdash; 4505 Buttewoods</span></h1>
        <div class="page-subtitle">Structured negotiation plan, offer ladder, and diligence checklist for the Buttewoods estate acquisition.</div>
        <div class="meta-strip">
          <div class="pill"><strong>Owner:</strong> Aaron C. Norris</div>
          <div class="pill"><strong>Status:</strong> Open &mdash; Priority High</div>
          <div class="pill"><strong>Logged:</strong> 2026-04-22 (reMarkable)</div>
          <div class="pill"><strong>Target:</strong> 4505 Buttewoods</div>
        </div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <div class="section">
        <div class="section-title"><span class="w-blue">Executive</span> <span class="w-dark">Summary</span></div>
        <div class="summary-card">
          <p>Pursue acquisition of the 7,098 square-foot estate at 4505 Buttewoods through a disciplined, data-led negotiation. The objective is to secure the property at fair market value or below, on terms that protect cash flow and preserve flexibility for Norris Utilities&reg; operating capital. Proceed step-by-step: establish the comparable baseline, verify condition and encumbrances, then execute a three-tier offer ladder with a firm walk-away price.</p>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <div class="section">
        <div class="section-title"><span class="w-blue">Property</span> <span class="w-dark">Snapshot</span></div>
        <div class="fact-grid">
          <div class="fact-card">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <div class="sub">Subject property</div>
          </div>
          <div class="fact-card">
            <div class="label">Living Area</div>
            <div class="value">7,098 sq ft</div>
            <div class="sub">Per listing source &mdash; verify with appraisal</div>
          </div>
          <div class="fact-card">
            <div class="label">Classification</div>
            <div class="value">Estate Residence</div>
            <div class="sub">Single-family, premium tier</div>
          </div>
          <div class="fact-card">
            <div class="label">Acquisition Posture</div>
            <div class="value">Buyer-Led</div>
            <div class="sub">Negotiated private purchase</div>
          </div>
        </div>
      </div>

      <!-- NEGOTIATION STRATEGY -->
      <div class="section">
        <div class="section-title"><span class="w-blue">Negotiation</span> <span class="w-dark">Strategy</span></div>
        <div class="two-col">
          <div class="strat-card">
            <h3>Leverage Points</h3>
            <ul>
              <li>Cash or highly-qualified financing &mdash; no loan contingency risk for seller</li>
              <li>Flexible close timeline &mdash; accommodate seller's move-out schedule</li>
              <li>Clean contract &mdash; minimal repair asks, no pre-close demands</li>
              <li>Days-on-market analysis &mdash; longer listing window strengthens buyer position</li>
              <li>Comparable sales within 0.5 mile, 12-month lookback</li>
            </ul>
          </div>
          <div class="strat-card">
            <h3>Seller Concerns to Address</h3>
            <ul>
              <li>Certainty of close &mdash; proof of funds letter attached to offer</li>
              <li>Short inspection window (7 business days) to reduce deal fatigue</li>
              <li>Earnest money commensurate with offer size (non-refundable after inspection)</li>
              <li>Personal note to seller acknowledging the home's history</li>
              <li>No request for seller-paid concessions beyond standard closing split</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- OFFER LADDER -->
      <div class="section">
        <div class="section-title"><span class="w-blue">Three-Tier</span> <span class="w-dark">Offer Ladder</span></div>
        <table class="offer-table">
          <thead>
            <tr>
              <th style="width:18%">Tier</th>
              <th style="width:22%">Position</th>
              <th style="width:30%">Terms</th>
              <th>Use When</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tier-label">Tier 1 &mdash; Opening</td>
              <td class="price-cell">Anchor low, defensible</td>
              <td>Comp-based, 7-day inspection, 21-day close, 1% earnest, proof of funds</td>
              <td>First written offer; leaves room to move up twice</td>
            </tr>
            <tr>
              <td class="tier-label">Tier 2 &mdash; Bridge</td>
              <td class="price-cell">Fair market midpoint</td>
              <td>Split inspection credits, add appliance inclusion ask, 25-day close</td>
              <td>Seller counters within 10% of opening</td>
            </tr>
            <tr>
              <td class="tier-label">Tier 3 &mdash; Final</td>
              <td class="price-cell">Walk-away ceiling</td>
              <td>As-is clause, waive minor repairs, 14-day close, escalated earnest</td>
              <td>Only if appraisal and diligence support it &mdash; no verbal increases</td>
            </tr>
          </tbody>
        </table>
        <div class="callout" style="margin-top:18px;">
          <div class="callout-title">Walk-Away Discipline</div>
          <p>Set the Tier 3 ceiling in writing <em>before</em> submitting Tier 1. Do not exceed it under any circumstance. If the seller counters above Tier 3, thank them, leave the offer on the table with a 48-hour expiration, and walk. Emotional escalation is the single largest risk in a premium-tier purchase.</p>
        </div>
      </div>

      <!-- ACTION CHECKLIST -->
      <div class="section">
        <div class="section-title"><span class="w-blue">Action</span> <span class="w-dark">Checklist &mdash; Next 14 Days</span></div>
        <ol class="checklist">
          <li><strong>Pull public records</strong>Tax history, prior sale price, ownership chain, recorded liens, and easements through county assessor and register of deeds.</li>
          <li><strong>Comparable sales analysis</strong>Identify six recent comps within 0.5 mile: similar square footage, same school zone, 12-month lookback. Compute price-per-sq-ft range.</li>
          <li><strong>Proof of funds / pre-approval</strong>Coordinate with Patrick Lavette at Renasant Bank. Request clean proof-of-funds letter and, if financed, pre-approval with no contingency language.</li>
          <li><strong>Retain buyer's agent or attorney</strong>If unrepresented, engage a buyer's representative or real estate attorney before any written offer is exchanged.</li>
          <li><strong>Property inspection pre-plan</strong>Line up qualified home inspector, HVAC specialist, and structural engineer for post-contract 7-day window.</li>
          <li><strong>Draft Tier 1 offer package</strong>Offer letter, proof of funds, earnest money instructions, personal seller note. Review with counsel before submission.</li>
          <li><strong>Set walk-away price in writing</strong>Private document, dated and signed by Aaron. Not shared. Governs all subsequent counter-offer decisions.</li>
          <li><strong>Submit and hold the line</strong>Deliver Tier 1 with 48-hour response deadline. Do not negotiate verbally. All counters in writing.</li>
        </ol>
      </div>

      <!-- DILIGENCE & RISK -->
      <div class="section">
        <div class="section-title"><span class="w-blue">Diligence</span> <span class="w-dark">&amp; Risk Controls</span></div>
        <div class="risk-grid">
          <div class="risk-item warn">
            <h4>Title &amp; Encumbrances</h4>
            <p>Order title commitment immediately after contract. Confirm no outstanding mechanics' liens, HOA dues, or unrecorded easements. Require clean title insurance policy.</p>
          </div>
          <div class="risk-item warn">
            <h4>Appraisal Gap</h4>
            <p>At 7,098 sq ft, premium-tier comps are thin. Budget for a private second opinion if the bank appraisal falls outside the expected range.</p>
          </div>
          <div class="risk-item warn">
            <h4>Deferred Maintenance</h4>
            <p>Large estates carry outsized maintenance cost. Roof age, HVAC zones, foundation, and pool/landscape systems must be inspected independently.</p>
          </div>
          <div class="risk-item warn">
            <h4>Cash Flow Impact</h4>
            <p>Model 24 months of carrying cost (taxes, insurance, utilities, upkeep) against Norris Utilities&reg; operating reserve. Do not let the purchase compromise working capital for equipment orders.</p>
          </div>
          <div class="risk-item go">
            <h4>Financing Structure</h4>
            <p>Separate personal real estate financing entirely from business lines. Keep Renasant business relationship clean and unencumbered.</p>
          </div>
          <div class="risk-item go">
            <h4>Close Timing</h4>
            <p>Target close that does not conflict with Skylift delivery windows or FlexPro Armor production cycles. Nothing about this purchase should pull Aaron's attention from active revenue work.</p>
          </div>
        </div>
      </div>

      <!-- DECISION POINT -->
      <div class="section">
        <div class="section-title"><span class="w-blue">Decision</span> <span class="w-dark">Gate</span></div>
        <div class="callout">
          <div class="callout-title">Go / No-Go Before Written Offer</div>
          <p>Before Tier 1 offer is submitted, confirm all six conditions: (1) comps support target price, (2) proof of funds in hand, (3) inspection team lined up, (4) walk-away price recorded, (5) title search preliminary clean, (6) 24-month cash flow model shows no impact to Norris Utilities&reg; operating reserve. If any of the six is not met, pause and resolve before proceeding. The property will still be there; a bad deal cannot be undone.</p>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment&reg;</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO<br>
      Norris Utilities&reg;, LLC &middot; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>