<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-alert-red: #C03030;
      --nu-success-green: #2D7D3F;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }

    /* Ghost phoenix watermark behind content */
    .nu-header-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    /* WHITE CHEVRON */
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 40px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 10%; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 20px;
    }

    /* DOC TITLE BLOCK */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 24px;
    }
    .doc-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 8px 18px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 3px;
    }
    .doc-badge.alert {
      background: linear-gradient(135deg, #8a1f1f 0%, #c03030 100%);
    }
    .doc-badge.status {
      background: linear-gradient(135deg, #0033cc 0%, #06D0FF 100%);
    }

    h1.doc-title {
      font-size: 2.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    h1.doc-title .accent { color: var(--nu-blue); }

    .doc-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 12px;
    }

    .source-line {
      font-size: 0.85rem;
      color: #666;
      font-style: italic;
      padding-bottom: 28px;
      border-bottom: 3px solid var(--nu-blue);
      margin-bottom: 40px;
    }

    /* SECTION HEADERS */
    .section {
      margin-bottom: 44px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      line-height: 1.3;
    }
    .section-title .first { color: var(--nu-blue); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SNAPSHOT GRID */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 20px;
    }
    .snapshot-tile {
      background: linear-gradient(180deg, var(--nu-white) 0%, #fafbff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 22px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .snapshot-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: #666;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .snapshot-value {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .snapshot-value .unit {
      font-size: 0.85rem;
      font-weight: 400;
      color: var(--nu-body-text);
    }

    /* CALLOUT BOX */
    .callout {
      background: linear-gradient(135deg, #f0f4ff 0%, #e8f1ff 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 28px;
      border-radius: 4px;
      margin-bottom: 24px;
    }
    .callout-title {
      font-size: 0.8rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout-body {
      color: var(--nu-dark-text);
      font-size: 1rem;
      line-height: 1.65;
    }

    .callout.warning {
      background: linear-gradient(135deg, #fff8ee 0%, #fff3e0 100%);
      border-left-color: var(--nu-accent-gold);
    }
    .callout.warning .callout-title { color: #8a6d1a; }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-card h3 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .nu-card p { margin-bottom: 10px; }
    .nu-card p:last-child { margin-bottom: 0; }

    /* FINANCIAL TABLE */
    .fin-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .fin-table thead {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
    }
    .fin-table thead th {
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .fin-table thead th.num { text-align: right; }
    .fin-table tbody td {
      padding: 13px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .fin-table tbody td.num {
      text-align: right;
      font-variant-numeric: tabular-nums;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .fin-table tbody tr:last-child td { border-bottom: none; }
    .fin-table tbody tr:hover { background: #fafbff; }
    .fin-table tfoot td {
      padding: 14px 18px;
      background: #f4f6ff;
      font-weight: 900;
      color: var(--nu-blue);
      border-top: 2px solid var(--nu-blue);
    }
    .fin-table tfoot td.num {
      text-align: right;
      font-variant-numeric: tabular-nums;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      position: relative;
      padding: 12px 0 12px 36px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
      line-height: 1.5;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 4px; top: 16px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CHEVRON BADGES */
    .chev-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin: 0 8px 10px 0;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.03em;
    }
    .chev-badge .label {
      font-weight: 300;
      margin-right: 8px;
      color: var(--nu-cyan);
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin-top: 12px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .timeline-item {
      position: relative;
      padding: 0 0 22px 0;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -31px; top: 4px;
      width: 12px; height: 12px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
    }
    .timeline-date {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-body {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* PARAGRAPH CONTENT */
    .section p {
      margin-bottom: 14px;
      font-size: 1rem;
      line-height: 1.7;
    }
    .section ul {
      margin: 0 0 14px 0;
      padding-left: 20px;
    }
    .section ul li {
      padding: 4px 0;
      list-style: none;
      position: relative;
      padding-left: 18px;
    }
    .section ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2em;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #000044 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.03em;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact strong { color: var(--nu-white); }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 16px auto;
      opacity: 0.5;
    }
    .nu-footer-note {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      margin-top: 18px;
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 230px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      h1.doc-title { font-size: 1.75rem; }
      .container { padding: 40px 22px 12px; }
      .two-col { grid-template-columns: 1fr; }
      .fin-table thead th,
      .fin-table tbody td { padding: 10px 12px; font-size: 0.85rem; }
      .chev-badge { clip-path: none; border-radius: 6px; padding: 10px 16px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .snapshot-tile { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
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
    <div class="container">

      <!-- META + TITLE -->
      <div class="doc-meta">
        <span class="doc-badge">Action Item</span>
        <span class="doc-badge status">Source: reMarkable</span>
        <span class="doc-badge alert">Personal — Aaron</span>
      </div>

      <h1 class="doc-title"><span class="accent">Negotiate</span> Purchase of 4505 Buttewoods Estate</h1>
      <p class="doc-subtitle">7,098 sq ft private residence acquisition — negotiation framework, offer structure, and decision checklist.</p>
      <div class="source-line">Captured from reMarkable handwritten notes — owner: Aaron C. Norris | File type: Personal real estate action item (not a Norris Utilities®, LLC transaction).</div>

      <!-- PROPERTY SNAPSHOT -->
      <div class="section">
        <h2 class="section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>

        <div class="snapshot-grid">
          <div class="snapshot-tile">
            <div class="snapshot-label">Address</div>
            <div class="snapshot-value" style="font-size: 1.05rem;">4505 Buttewoods</div>
          </div>
          <div class="snapshot-tile">
            <div class="snapshot-label">Total Living Area</div>
            <div class="snapshot-value">7,098 <span class="unit">sq ft</span></div>
          </div>
          <div class="snapshot-tile">
            <div class="snapshot-label">Property Class</div>
            <div class="snapshot-value" style="font-size: 1.05rem;">Estate Residence</div>
          </div>
          <div class="snapshot-tile">
            <div class="snapshot-label">Transaction Stage</div>
            <div class="snapshot-value" style="font-size: 1.05rem;">Negotiation</div>
          </div>
        </div>

        <div class="callout">
          <div class="callout-title">Why This Is Captured Here</div>
          <div class="callout-body">Aaron made this note on the reMarkable while working through personal priorities. It is logged in the Norris system so the negotiation does not slip through the cracks during a busy operations cycle, and so follow-ups have a clean reference point. This is a personal real estate matter — not a Norris Utilities® transaction.</div>
        </div>
      </div>

      <!-- NEGOTIATION OBJECTIVE -->
      <div class="section">
        <h2 class="section-title"><span class="first">Negotiation</span> <span class="rest">Objective</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Primary Goal</h3>
            <p>Acquire 4505 Buttewoods at a price that reflects true market value for a 7,098 sq ft residence in the area — not the asking price, and not a number padded by seller sentiment.</p>
            <p>Walk-away discipline matters more than winning the property. If the terms do not work, the next property does.</p>
          </div>
          <div class="nu-card">
            <h3>Secondary Goals</h3>
            <p>Secure seller concessions that reduce cash-at-close: closing cost credits, repair allowances for any issues found in inspection, and flexible possession date.</p>
            <p>Preserve leverage throughout — never telegraph emotional attachment.</p>
          </div>
        </div>
      </div>

      <!-- OFFER STRUCTURE WORKSHEET -->
      <div class="section">
        <h2 class="section-title"><span class="first">Offer</span> <span class="rest">Structure Worksheet</span></h2>
        <p>Three price points to define before the first conversation with the listing agent. Fill each cell with a hard number before submitting an offer — no placeholders, no rounding up out of excitement.</p>

        <table class="fin-table">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Strategy</th>
              <th class="num">Price Point</th>
              <th class="num">$/sq ft</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opening Offer</strong></td>
              <td>Anchor low — leaves room to move up. Supported by comps.</td>
              <td class="num">To be set</td>
              <td class="num">—</td>
            </tr>
            <tr>
              <td><strong>Target Price</strong></td>
              <td>Aaron's internal "fair deal" number. Where the transaction should land.</td>
              <td class="num">To be set</td>
              <td class="num">—</td>
            </tr>
            <tr>
              <td><strong>Walk-Away Price</strong></td>
              <td>One dollar above this, the answer is no. Decide this before emotion enters.</td>
              <td class="num">To be set</td>
              <td class="num">—</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">Comp-derived price per sq ft (enter after pulling 3-5 recent sales)</td>
              <td class="num" colspan="2">To be set</td>
            </tr>
          </tfoot>
        </table>

        <div class="callout warning">
          <div class="callout-title">Rule: No Number Until Comps Are Pulled</div>
          <div class="callout-body">Do not submit a number — or even discuss a range — until at least three comparable sales within a 1-mile radius in the last 12 months are in hand. 7,098 sq ft is a narrow comp set; if local comps are thin, pull the nearest similar estates and adjust for size, lot, and condition.</div>
        </div>
      </div>

      <!-- DILIGENCE CHECKLIST -->
      <div class="section">
        <h2 class="section-title"><span class="first">Diligence</span> <span class="rest">Checklist — Before Offer</span></h2>
        <div class="nu-card">
          <ul class="checklist">
            <li><strong>Pull tax assessment history.</strong> Confirm the 7,098 sq ft figure matches county records. Discrepancy between MLS and tax records is a negotiation lever.</li>
            <li><strong>Confirm lot size, zoning, and easements.</strong> Check for utility, drainage, or access easements that affect value.</li>
            <li><strong>Check days-on-market and price history.</strong> Prior price drops signal softness. A stale listing pressures the seller, not the buyer.</li>
            <li><strong>Identify the seller's motivation.</strong> Estate sale, relocation, divorce, downsize — each drives a different negotiating posture.</li>
            <li><strong>Pull 3-5 comparable sales.</strong> Same neighborhood, similar size, closed within 12 months. Adjust for condition and lot.</li>
            <li><strong>Review HOA or neighborhood covenants.</strong> Fees, restrictions, litigation — any of these can kill a deal post-contract.</li>
            <li><strong>Pre-approval letter current and in hand.</strong> Offers without financing pre-approval get discounted by every experienced listing agent.</li>
            <li><strong>Inspector and attorney identified.</strong> Do not start negotiation without the post-contract team ready to move.</li>
          </ul>
        </div>
      </div>

      <!-- CONTINGENCY STRATEGY -->
      <div class="section">
        <h2 class="section-title"><span class="first">Contingency</span> <span class="rest">Strategy</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Must-Have Protections</h3>
            <ul>
              <li>Inspection contingency — full right to terminate or renegotiate.</li>
              <li>Financing contingency — protects earnest money if loan falls through.</li>
              <li>Appraisal contingency — if home appraises below purchase price, right to renegotiate.</li>
              <li>Title review — clean title is non-negotiable.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Levers to Trade</h3>
            <ul>
              <li>Shorter close window (if financing allows).</li>
              <li>Larger earnest money deposit — shows seriousness, can be refunded on contingencies.</li>
              <li>Flexible possession date — leaseback to seller post-close if needed.</li>
              <li>Waive minor cosmetic repair requests — keep inspection leverage for structural/mechanical.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- NEGOTIATION PLAYBOOK -->
      <div class="section">
        <h2 class="section-title"><span class="first">Negotiation</span> <span class="rest">Playbook</span></h2>

        <div style="margin-bottom: 20px;">
          <span class="chev-badge"><span class="label">Step 1</span>Pull Comps</span>
          <span class="chev-badge"><span class="label">Step 2</span>Set Three Numbers</span>
          <span class="chev-badge"><span class="label">Step 3</span>Open Low with Rationale</span>
          <span class="chev-badge"><span class="label">Step 4</span>Counter by Facts, Not Feelings</span>
          <span class="chev-badge"><span class="label">Step 5</span>Inspection Re-Negotiation</span>
          <span class="chev-badge"><span class="label">Step 6</span>Close or Walk</span>
        </div>

        <div class="nu-card">
          <h3>Principles</h3>
          <p><strong>Lead with the number, not the story.</strong> Listing agents respect buyers who anchor with a supported price. They tune out emotional appeals.</p>
          <p><strong>Every counter in writing.</strong> Verbal ranges leak leverage. Keep the paper trail clean — useful if the deal reopens later.</p>
          <p><strong>Silence is a tool.</strong> After submitting the offer or counter, stop talking. The next party to speak typically concedes.</p>
          <p><strong>Post-inspection is a second negotiation.</strong> Legitimate findings justify price reduction, credit, or repair. Do not waste that leverage on cosmetic items.</p>
          <p><strong>Walk-away number is sacred.</strong> If the seller won't meet it, the property is someone else's problem. There is always another house.</p>
        </div>
      </div>

      <!-- TIMELINE -->
      <div class="section">
        <h2 class="section-title"><span class="first">Target</span> <span class="rest">Timeline</span></h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">Week 1 — Preparation</div>
            <div class="timeline-title">Comps, tax records, pre-approval, team assembled</div>
            <div class="timeline-body">No offer moves before all diligence items are complete. This is where walk-away discipline starts.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Week 2 — Opening Offer</div>
            <div class="timeline-title">Submit written offer with comp package attached</div>
            <div class="timeline-body">Include financing pre-approval, earnest money amount, and proposed close timeline. Keep cover letter brief and factual.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Week 2-3 — Counter Cycle</div>
            <div class="timeline-title">Two counter rounds maximum before decision</div>
            <div class="timeline-body">If seller won't move into the target range within two counters, reassess — either walk, raise walk-away number by a disciplined amount, or hold firm.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Week 3-5 — Under Contract</div>
            <div class="timeline-title">Inspection, appraisal, title review</div>
            <div class="timeline-body">Use inspection findings to re-negotiate if warranted. Appraisal shortfall triggers contingency — renegotiate or terminate.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Week 5-7 — Close</div>
            <div class="timeline-title">Financing finalized, walk-through, closing</div>
            <div class="timeline-body">Final walk-through 24-48 hours before close. Confirm all negotiated repairs complete.</div>
          </div>
        </div>
      </div>

      <!-- DECISION GATES -->
      <div class="section">
        <h2 class="section-title"><span class="first">Decision</span> <span class="rest">Gates</span></h2>
        <div class="callout warning">
          <div class="callout-title">Three Points Where Aaron Stops and Re-Decides</div>
          <div class="callout-body">
            <strong>Gate 1 — After comps:</strong> Is the asking price within 10% of comp-derived fair value? If no, proceed cautiously or walk before investing more time.<br><br>
            <strong>Gate 2 — After second counter:</strong> Is the current negotiated price inside the target-to-walk-away band? If no, one more counter or terminate.<br><br>
            <strong>Gate 3 — After inspection:</strong> Are the findings within expected tolerance for a 7,098 sq ft property of this age? Structural or systems surprises reset the negotiation or end it.
          </div>
        </div>
      </div>

      <!-- IMMEDIATE NEXT ACTIONS -->
      <div class="section">
        <h2 class="section-title"><span class="first">Immediate</span> <span class="rest">Next Actions</span></h2>
        <div class="nu-card">
          <ul class="checklist">
            <li><strong>Pull county tax record</strong> for 4505 Buttewoods — confirm square footage, lot size, last sale price and date, current assessed value.</li>
            <li><strong>Request MLS comp package</strong> from a buyer's agent covering estate-scale sales within 1 mile in the last 12 months.</li>
            <li><strong>Refresh mortgage pre-approval letter</strong> — lenders typically issue valid 60-90 days; confirm the dollar amount covers target-to-walk-away band.</li>
            <li><strong>Identify preferred home inspector</strong> experienced with estate properties over 5,000 sq ft. Book tentatively.</li>
            <li><strong>Set the three price numbers</strong> (opening, target, walk-away) in writing before any conversation with the listing agent.</li>
            <li><strong>Schedule a sit-down</strong> to walk the property in person. First impression matters — bring a tape measure and notepad, not enthusiasm.</li>
          </ul>
        </div>
      </div>

      <!-- FILING NOTE -->
      <div class="section">
        <div class="callout">
          <div class="callout-title">Filing &amp; Status</div>
          <div class="callout-body">
            This document is a live working file. Update it as comps come in, offers are exchanged, and decisions are made. Keep a dated revision note at the bottom so the full negotiation history is preserved. Because this is a personal transaction, it is stored separately from Norris Utilities®, LLC operational records and is not subject to the ops-portal GitHub push rule.
          </div>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong> | Founder &amp; CEO<br>
      Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-note">Personal action item captured from reMarkable. Not a Norris Utilities®, LLC transaction.</div>
  </footer>

</body>
</html>