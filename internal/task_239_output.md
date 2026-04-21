<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Strategy — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-success: #0a7a3b;
      --nu-warn: #b8860b;
      --nu-danger: #a31c1c;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 35%, #0066ee 65%, #00aaff 85%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
      max-width: 520px;
      opacity: 0.07;
      z-index: 1;
    }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      margin-top: 18px;
      font-size: 0.78rem;
      letter-spacing: 0.45em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.85);
      font-weight: 700;
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
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOCUMENT TITLE */
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-subtitle {
      color: var(--nu-body-text);
      font-size: 1.1rem;
      margin-bottom: 28px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 40px 0 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SUMMARY GRID */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin: 10px 0 30px;
    }
    .summary-tile {
      background: linear-gradient(180deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
    }
    .summary-tile .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .summary-tile .value {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .summary-tile .note {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* BADGE ROW */
    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 10px 0 24px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 16px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.03em;
    }
    .nu-badge.cyan { background: linear-gradient(135deg, #003a7a 0%, #0066ee 100%); }
    .nu-badge.gold { background: linear-gradient(135deg, #6b4f1a 0%, #c9a84c 100%); color: #1a1a2e; }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .nu-card ul { list-style: none; padding: 0; }
    .nu-card ul li {
      padding: 8px 0 8px 20px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 0;
      font-size: 1.1rem;
    }
    .nu-card ul li strong { color: var(--nu-dark-text); }

    /* VALUATION TABLE */
    .val-table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0 22px;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border-radius: 8px;
      overflow: hidden;
    }
    .val-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .val-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .val-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .val-table tr:last-child td { border-bottom: none; }
    .val-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .val-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; color: var(--nu-dark-text); }
    .val-table tfoot td {
      background: #eef1ff !important;
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1rem;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      margin: 20px 0 30px;
      padding-left: 28px;
      border-left: 3px solid var(--nu-cyan);
    }
    .timeline-item {
      position: relative;
      padding: 10px 0 22px 20px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -36px;
      top: 14px;
      width: 14px;
      height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-cyan);
    }
    .timeline-item .day {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .timeline-item h4 {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      margin: 2px 0 6px;
    }
    .timeline-item p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* OFFER LADDER */
    .ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin: 10px 0 24px;
    }
    .ladder-step {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 20px 22px;
      position: relative;
    }
    .ladder-step.opening { border-color: var(--nu-cyan); }
    .ladder-step.target { border-color: var(--nu-blue); background: linear-gradient(180deg, #f6f7ff 0%, #ffffff 70%); }
    .ladder-step.walk { border-color: var(--nu-danger); }
    .ladder-step .tag {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .ladder-step.opening .tag { background: var(--nu-cyan); color: var(--nu-navy); }
    .ladder-step.target .tag { background: var(--nu-blue); color: var(--nu-white); }
    .ladder-step.walk .tag { background: var(--nu-danger); color: var(--nu-white); }
    .ladder-step .amt {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-dark-text);
      line-height: 1;
      margin-bottom: 6px;
    }
    .ladder-step .amt .per {
      font-size: 0.8rem;
      color: var(--nu-body-text);
      font-weight: 400;
      letter-spacing: 0;
    }
    .ladder-step p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* LEVERAGE LIST */
    .lev-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin: 10px 0 24px;
    }
    .lev-item {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 14px 18px;
      border-radius: 4px;
    }
    .lev-item strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 4px;
      font-size: 0.95rem;
    }
    .lev-item span {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* CHECKLIST */
    .checklist {
      background: #fff;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 20px 24px;
      margin: 10px 0 24px;
    }
    .checklist h3 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .checklist ul { list-style: none; padding: 0; }
    .checklist li {
      padding: 8px 0 8px 32px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 12px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #001a66 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 24px 28px;
      border-radius: 10px;
      margin: 24px 0 30px;
      box-shadow: 0 4px 20px rgba(0, 51, 204, 0.25);
    }
    .callout h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout p {
      font-size: 1rem;
      line-height: 1.6;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.9);
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
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 820px) {
      .two-col, .ladder, .lev-list { grid-template-columns: 1fr; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .doc-title { font-size: 1.55rem; }
      .nu-container { padding: 40px 22px; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 10px 14px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .val-table, .checklist { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-doc-label">Acquisition Strategy Brief</div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="doc-title">4505 Buttewoods <span class="accent">— Acquisition Strategy</span></div>
      <div class="doc-subtitle">7,098 sq ft estate · Negotiation plan, valuation, and execution timeline · Prepared 2026-04-21</div>

      <div class="badge-row">
        <span class="nu-badge">Subject Property · 4505 Buttewoods</span>
        <span class="nu-badge cyan">7,098 sq ft</span>
        <span class="nu-badge gold">Private Off-Market Negotiation</span>
      </div>

      <!-- SUMMARY GRID -->
      <div class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></div>
      <div class="summary-grid">
        <div class="summary-tile">
          <div class="label">Address</div>
          <div class="value">4505 Buttewoods</div>
          <div class="note">Subject estate · verify legal description at title pull</div>
        </div>
        <div class="summary-tile">
          <div class="label">Living Area</div>
          <div class="value">7,098 sq ft</div>
          <div class="note">Confirm with tax card + measured drawing on inspection</div>
        </div>
        <div class="summary-tile">
          <div class="label">Deal Posture</div>
          <div class="value">Off-Market</div>
          <div class="note">Direct-to-owner approach, no listing pressure</div>
        </div>
        <div class="summary-tile">
          <div class="label">Decision Lead</div>
          <div class="value">Aaron C. Norris</div>
          <div class="note">Principal buyer · sole decision authority</div>
        </div>
      </div>

      <!-- NEGOTIATION OBJECTIVE -->
      <div class="callout">
        <h3>Negotiation Objective</h3>
        <p>Acquire 4505 Buttewoods at a price that reflects the home's true condition, carrying cost, and lack of competing buyers — not a retail list-price comp. Every step below is built to protect the price by moving slowly, keeping the posture friendly, and letting the seller's timeline do the work.</p>
      </div>

      <!-- PRE-NEGOTIATION -->
      <div class="nu-section-title"><span class="first">Pre-Negotiation</span> <span class="rest">Due Diligence</span></div>
      <div class="two-col">
        <div class="nu-card">
          <h3>Title & Ownership</h3>
          <ul>
            <li><strong>Deed chain</strong> — pull last three recorded deeds for 4505 Buttewoods</li>
            <li><strong>Liens & mortgages</strong> — confirm current balance and any junior liens</li>
            <li><strong>Judgments / tax status</strong> — verify county taxes current, no lis pendens</li>
            <li><strong>Owner of record</strong> — confirm vesting (individual, trust, LLC)</li>
            <li><strong>Easements</strong> — review plat, note any utility or access restrictions</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Market & Condition</h3>
          <ul>
            <li><strong>Comparable sales</strong> — 3 closed sales in last 180 days, same submarket, 5,500+ sq ft</li>
            <li><strong>Active listings</strong> — competing inventory as leverage anchor</li>
            <li><strong>Days on market trend</strong> — months of supply for homes over 6,000 sq ft</li>
            <li><strong>Condition assessment</strong> — roof age, HVAC systems, foundation, pool/outbuildings</li>
            <li><strong>Seller motivation</strong> — relocation, estate, downsize, financial pressure</li>
          </ul>
        </div>
      </div>

      <!-- VALUATION -->
      <div class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Framework</span></div>
      <table class="val-table">
        <thead>
          <tr>
            <th>Input</th>
            <th>Basis</th>
            <th style="text-align:right;">Calculation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Living area</td>
            <td>Confirmed square footage</td>
            <td class="num">7,098 sq ft</td>
          </tr>
          <tr>
            <td>Blended comp $/sq ft</td>
            <td>Weight 3 closed comps (70% recency, 30% size match)</td>
            <td class="num">$/sq ft (TBD from pulled comps)</td>
          </tr>
          <tr>
            <td>Gross comparable value</td>
            <td>7,098 × blended $/sq ft</td>
            <td class="num">= Starting Anchor</td>
          </tr>
          <tr>
            <td>Condition adjustment</td>
            <td>Deferred maintenance, cosmetic updates, mechanical age</td>
            <td class="num">− itemized from inspection</td>
          </tr>
          <tr>
            <td>Carry-cost discount</td>
            <td>Off-market, no MLS exposure, cash-ready close</td>
            <td class="num">− 4% to 7%</td>
          </tr>
          <tr>
            <td>Reserve for renovation</td>
            <td>Set aside against needed CapEx</td>
            <td class="num">− itemized from bids</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">Walk-Away Ceiling = Gross Comp − Condition − Carry − Reserve</td>
            <td class="num">Locked before first offer</td>
          </tr>
        </tfoot>
      </table>

      <!-- OFFER LADDER -->
      <div class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder</span></div>
      <div class="ladder">
        <div class="ladder-step opening">
          <span class="tag">Opening</span>
          <div class="amt">Walk-Away ÷ 1.12<span class="per"> · leaves 12% of negotiation room</span></div>
          <p>Credible, documented, framed as "what the math supports today." Never apologized for.</p>
        </div>
        <div class="ladder-step target">
          <span class="tag">Target</span>
          <div class="amt">Walk-Away ÷ 1.05<span class="per"> · preferred landing price</span></div>
          <p>Where a normal seller meets a disciplined buyer. This is the number the plan is built to hit.</p>
        </div>
        <div class="ladder-step walk">
          <span class="tag">Walk-Away</span>
          <div class="amt">Ceiling<span class="per"> · never exceeded</span></div>
          <p>Pre-committed in writing before negotiation opens. Crossing it means passing on the deal.</p>
        </div>
      </div>

      <!-- LEVERAGE -->
      <div class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Points</span></div>
      <div class="lev-list">
        <div class="lev-item"><strong>Single qualified buyer</strong><span>Off-market means no bidding — seller is not comparing our offer to other offers, they are comparing it to waiting.</span></div>
        <div class="lev-item"><strong>Certainty of close</strong><span>Proof of funds ready, short contingency list, flexible closing date — certainty has measurable dollar value.</span></div>
        <div class="lev-item"><strong>Every day it carries</strong><span>Estate of this size costs meaningful dollars per month in taxes, insurance, utilities, and upkeep.</span></div>
        <div class="lev-item"><strong>Condition reality</strong><span>Any confirmed deferred maintenance moves into the price, not into a post-close repair escrow.</span></div>
        <div class="lev-item"><strong>No agent on our side</strong><span>Direct principal-to-principal conversation — one point of contact, no listing commission drag on the seller.</span></div>
        <div class="lev-item"><strong>Time is our ally</strong><span>We are not in a hurry. A patient buyer at a disciplined price wins against almost any seller timeline.</span></div>
      </div>

      <!-- TIMELINE -->
      <div class="nu-section-title"><span class="first">Execution</span> <span class="rest">Timeline</span></div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="day">Day 1 – 3</div>
          <h4>Kickoff & Title Pull</h4>
          <p>Open title search on 4505 Buttewoods, pull last three deeds, confirm owner of record and any open liens. Order comp package on homes 5,500+ sq ft closed in trailing 180 days.</p>
        </div>
        <div class="timeline-item">
          <div class="day">Day 4 – 7</div>
          <h4>Valuation Lock</h4>
          <p>Finalize blended $/sq ft, apply condition + carry + reserve deductions. Write walk-away ceiling down and sign it. Build opening offer and target landing number.</p>
        </div>
        <div class="timeline-item">
          <div class="day">Day 8 – 10</div>
          <h4>Seller Contact</h4>
          <p>Direct outreach to owner. Friendly, professional, principal-to-principal. Request brief walk-through at seller's convenience. No pressure, no urgency language.</p>
        </div>
        <div class="timeline-item">
          <div class="day">Day 11 – 14</div>
          <h4>Walk-Through & Inspection Scope</h4>
          <p>On-site visit. Document roof, HVAC, plumbing, foundation, pool/outbuildings. Note cosmetic and structural condition for the condition-adjustment line.</p>
        </div>
        <div class="timeline-item">
          <div class="day">Day 15 – 20</div>
          <h4>Written Offer Delivered</h4>
          <p>Opening offer delivered in writing with proof of funds. Price framed against documented comps, documented condition, and a cash-ready, short-contingency close.</p>
        </div>
        <div class="timeline-item">
          <div class="day">Day 21 – 30</div>
          <h4>Negotiate to Target or Walk</h4>
          <p>Work the ladder toward the target price. Every concession exchanged for something — never given freely. Cross the walk-away ceiling → stand down, stay friendly, leave door open.</p>
        </div>
        <div class="timeline-item">
          <div class="day">Day 31 – 60</div>
          <h4>Under Contract → Close</h4>
          <p>Due-diligence period executed on schedule. Title cleared, inspections completed, financing (if any) locked. Close on the agreed date, keys in hand, post-close repair file archived.</p>
        </div>
      </div>

      <!-- TALK TRACKS -->
      <div class="nu-section-title"><span class="first">Talk</span> <span class="rest">Tracks</span></div>
      <div class="two-col">
        <div class="nu-card">
          <h3>When the Seller Anchors High</h3>
          <ul>
            <li>Acknowledge the number without agreeing to it.</li>
            <li>Bring the conversation back to the comp set and the condition items on paper.</li>
            <li>Say: "I respect the number you're at. Here's what the math supports on my side — and here's what a certain close is worth to yours."</li>
            <li>Never defend the opening offer with emotion. Defend it with the spreadsheet.</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>When the Seller Asks "Is That Your Best?"</h3>
          <ul>
            <li>Pause. Silence is a tool.</li>
            <li>Say: "It's a considered offer. I'd rather raise it for a reason than just because you asked."</li>
            <li>Trade any price move for a counter-concession: faster close, lower earnest, as-is terms, seller credits reduced.</li>
            <li>Never move toward the walk-away ceiling in one jump — move in halves of halves.</li>
          </ul>
        </div>
      </div>

      <!-- RISKS -->
      <div class="nu-section-title"><span class="first">Risk</span> <span class="rest">Register</span></div>
      <div class="two-col">
        <div class="nu-card">
          <h3>Deal Risks</h3>
          <ul>
            <li><strong>Title defect</strong> — old lien, clouded deed, undisclosed heir</li>
            <li><strong>Structural surprise</strong> — foundation, roof, or envelope issue found at inspection</li>
            <li><strong>Seller shops the offer</strong> — our number becomes the floor for a listing</li>
            <li><strong>Appraisal gap</strong> — if financed, appraisal comes in below contract price</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Mitigations</h3>
          <ul>
            <li><strong>Title</strong> — full commitment pulled pre-offer; owner's policy at close</li>
            <li><strong>Structural</strong> — licensed inspector; itemized bids drive re-trade, not walk</li>
            <li><strong>Shopping</strong> — offer has a 72-hour expiration clause, re-issued only on revised terms</li>
            <li><strong>Appraisal</strong> — keep cash option live; appraisal-gap language only if absolutely needed</li>
          </ul>
        </div>
      </div>

      <!-- CHECKLIST -->
      <div class="nu-section-title"><span class="first">Aaron's</span> <span class="rest">Action Checklist</span></div>
      <div class="checklist">
        <h3>Before First Contact With Seller</h3>
        <ul>
          <li>Pull title and last three recorded deeds on 4505 Buttewoods</li>
          <li>Build comp package (3 closed, 3 active, 5,500+ sq ft, trailing 180 days)</li>
          <li>Lock blended $/sq ft and document the math</li>
          <li>Write walk-away ceiling on paper and sign it — this is non-negotiable</li>
          <li>Draft opening offer letter (principal-to-principal tone, no agent language)</li>
          <li>Confirm proof of funds letter is current and ready to attach</li>
          <li>Line up a preferred inspector and schedule a tentative window</li>
          <li>Prepare a 72-hour offer-expiration clause and the rationale for it</li>
        </ul>
      </div>

      <!-- CLOSING NOTE -->
      <div class="callout">
        <h3>Bottom Line</h3>
        <p>The buyer with the most discipline wins. We are not chasing 4505 Buttewoods — we are offering the seller certainty, a short close, and a number that reflects the real condition of the property. If the math works, we close. If it doesn't, we stay friendly, stay in touch, and the number we offered today becomes the floor for the conversation a quarter from now.</p>
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