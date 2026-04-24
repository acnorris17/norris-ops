<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Butterworth Estate — Norris Utilities®</title>
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
      --nu-success: #0d7a3f;
      --nu-warning: #C9A84C;
      --nu-danger: #b71c1c;
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

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* DOCUMENT TITLE BAR */
    .doc-titlebar {
      background: var(--nu-white);
      padding: 28px 40px 20px;
      text-align: center;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .doc-kicker {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .doc-title {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1rem;
      font-weight: 400;
      color: var(--nu-body-text);
    }
    .doc-meta {
      display: inline-flex;
      gap: 20px;
      margin-top: 14px;
      font-size: 0.82rem;
      color: #666;
      flex-wrap: wrap;
      justify-content: center;
    }
    .doc-meta span { display: inline-flex; align-items: center; gap: 6px; }
    .doc-meta strong { color: var(--nu-dark-text); font-weight: 700; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 40px 20px 60px;
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    .section-header {
      font-weight: 900;
      font-size: 1.55rem;
      margin: 36px 0 16px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-header .sh-blue { color: var(--nu-blue); }
    .section-header .sh-dark { color: var(--nu-dark-text); font-weight: 700; }
    .section-header:first-of-type { margin-top: 8px; }

    /* SUMMARY CARDS */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 16px;
      margin-bottom: 12px;
    }
    .summary-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 20px 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-left: 4px solid var(--nu-blue);
    }
    .summary-card.cyan { border-left-color: var(--nu-cyan); }
    .summary-card.gold { border-left-color: var(--nu-accent-gold); }
    .summary-card.navy { border-left-color: var(--nu-navy); }
    .sc-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 6px;
    }
    .sc-value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .sc-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* PANEL */
    .panel {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }
    .panel h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .panel h3 .tag {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 3px 10px;
      border-radius: 3px;
      vertical-align: middle;
      margin-right: 10px;
    }
    .panel p { margin-bottom: 10px; }
    .panel ul, .panel ol { padding-left: 22px; margin-bottom: 10px; }
    .panel li { margin-bottom: 6px; }

    /* STRATEGY GRID */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
    }
    .strategy-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-top: 4px solid var(--nu-blue);
    }
    .strategy-card.offensive { border-top-color: var(--nu-success); }
    .strategy-card.defensive { border-top-color: var(--nu-danger); }
    .strategy-card.leverage { border-top-color: var(--nu-accent-gold); }
    .sc-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .sc-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px; height: 32px;
      border-radius: 6px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.95rem;
      flex-shrink: 0;
    }
    .strategy-card.offensive .sc-icon { background: var(--nu-success); }
    .strategy-card.defensive .sc-icon { background: var(--nu-danger); }
    .strategy-card.leverage .sc-icon { background: var(--nu-accent-gold); color: var(--nu-navy); }
    .strategy-card ul { padding-left: 18px; }
    .strategy-card li { margin-bottom: 6px; font-size: 0.93rem; }

    /* OFFER LADDER TABLE */
    .ladder {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .ladder th {
      background: linear-gradient(135deg, var(--nu-navy), #000066);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .ladder td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .ladder tr:last-child td { border-bottom: none; }
    .ladder tr.highlight { background: rgba(6, 208, 255, 0.07); }
    .ladder .price {
      font-weight: 900;
      color: var(--nu-blue);
      white-space: nowrap;
    }
    .ladder .step {
      font-weight: 900;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .ladder .tactic-name {
      font-weight: 700;
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 3px;
    }

    /* SCRIPT BLOCKS */
    .script {
      background: #fbfbfd;
      border-left: 4px solid var(--nu-cyan);
      padding: 16px 20px;
      margin: 10px 0;
      font-style: italic;
      color: var(--nu-dark-text);
      border-radius: 4px;
    }
    .script::before {
      content: '"';
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-cyan);
      vertical-align: -6px;
      margin-right: 4px;
      font-style: normal;
    }

    /* WALK-AWAY CALLOUT */
    .walkaway {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 28px 32px;
      margin-top: 20px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    }
    .walkaway h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.15rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .walkaway p, .walkaway li { color: rgba(255,255,255,0.92); }
    .walkaway strong { color: var(--nu-white); }
    .walkaway ul { padding-left: 20px; margin-top: 8px; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      position: relative;
      padding: 10px 10px 10px 36px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 8px; top: 13px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px; top: 6px; bottom: 6px;
      width: 2px;
      background: var(--nu-cyan);
    }
    .timeline-item {
      position: relative;
      margin-bottom: 18px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -28px; top: 5px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-cyan);
    }
    .tl-day {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 3px;
    }
    .tl-action {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .tl-detail {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-reg {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      margin-top: 14px;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .doc-title { font-size: 1.4rem; }
      .doc-titlebar { padding: 22px 20px 18px; }
      .panel { padding: 20px 18px; }
      .ladder th, .ladder td { padding: 10px 10px; font-size: 0.85rem; }
      .section-header { font-size: 1.25rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer, .walkaway {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .summary-card, .strategy-card, .panel, .ladder { box-shadow: none; border: 1px solid #ccc; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- TITLE BAR -->
  <div class="doc-titlebar">
    <div class="doc-kicker">Confidential Negotiation Brief</div>
    <div class="doc-title">Negotiation Strategy — <span>$900,000 Offer</span></div>
    <div class="doc-subtitle">4505 Butterworth Estate &mdash; 7,098 sq ft Residential Acquisition</div>
    <div class="doc-meta">
      <span><strong>Prepared:</strong> April 23, 2026</span>
      <span><strong>Principal:</strong> Aaron C. Norris</span>
      <span><strong>Status:</strong> Pre-Offer — Strategy Lock</span>
      <span><strong>Classification:</strong> Internal Only</span>
    </div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- EXECUTIVE SUMMARY -->
      <div class="summary-grid">
        <div class="summary-card">
          <div class="sc-label">Opening Offer</div>
          <div class="sc-value">$900,000</div>
          <div class="sc-sub">Firm written offer &mdash; cash terms preferred</div>
        </div>
        <div class="summary-card cyan">
          <div class="sc-label">Target Close Price</div>
          <div class="sc-value">$925,000</div>
          <div class="sc-sub">Mid-point — acceptable without concession</div>
        </div>
        <div class="summary-card gold">
          <div class="sc-label">Maximum Walk-Away</div>
          <div class="sc-value">$950,000</div>
          <div class="sc-sub">Hard ceiling &mdash; exit if exceeded</div>
        </div>
        <div class="summary-card navy">
          <div class="sc-label">Subject Property</div>
          <div class="sc-value">7,098 sq ft</div>
          <div class="sc-sub">4505 Butterworth &mdash; estate residence</div>
        </div>
      </div>

      <!-- POSITION BRIEF -->
      <h2 class="section-header"><span class="sh-blue">Position</span> <span class="sh-dark">Brief</span></h2>

      <div class="panel">
        <h3><span class="tag">CONTEXT</span>Why This Property, Why Now</h3>
        <p>The 4505 Butterworth estate is a 7,098 sq ft residential property previously identified as a strategic acquisition target. Prior action-item captured on reMarkable established intent to negotiate purchase. This brief finalizes the offer framework before Aaron initiates contact with the seller or listing agent.</p>
        <p>Opening at $900,000 establishes a serious, credible position without overpaying the first round. The range $900K &rarr; $950K reflects the estate's size, location, and carry costs relative to comparable 7,000+ sq ft inventory in the submarket. Anchoring below the midpoint forces the seller to work toward us rather than the other direction.</p>
      </div>

      <div class="panel">
        <h3><span class="tag">OBJECTIVE</span>What Winning Looks Like</h3>
        <ul>
          <li><strong>Primary:</strong> Close at or below $925,000 with standard financing contingencies and a 30&ndash;45 day close.</li>
          <li><strong>Secondary:</strong> If seller resists price, extract non-price concessions &mdash; seller-paid closing costs, inspection credits, furniture inclusions, or extended possession.</li>
          <li><strong>Tertiary:</strong> Preserve the option to walk cleanly at $950K without burning the relationship &mdash; seller may come back in 30&ndash;60 days.</li>
        </ul>
      </div>

      <!-- OFFER LADDER -->
      <h2 class="section-header"><span class="sh-blue">Offer</span> <span class="sh-dark">Ladder &amp; Counter-Script</span></h2>

      <table class="ladder">
        <thead>
          <tr>
            <th style="width: 70px;">Step</th>
            <th style="width: 130px;">Our Number</th>
            <th>Tactic &amp; Scripted Response</th>
            <th style="width: 140px;">Seller Expected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="step">1</td>
            <td class="price">$900,000</td>
            <td>
              <span class="tactic-name">Opening Offer &mdash; Written, Cash Preferred</span>
              Submit via written LOI with proof of funds attached. Short expiration (72 hours) to force seller into decision mode. No verbal offers.
            </td>
            <td>Counter at full asking or near ask</td>
          </tr>
          <tr class="highlight">
            <td class="step">2</td>
            <td class="price">$915,000</td>
            <td>
              <span class="tactic-name">Split-the-Difference Probe</span>
              Move modestly, hold concessions in reserve. Signal willingness to close but not desperation. Add 10-day inspection window.
            </td>
            <td>Counter $935K&ndash;$945K</td>
          </tr>
          <tr>
            <td class="step">3</td>
            <td class="price">$925,000</td>
            <td>
              <span class="tactic-name">Target Landing &mdash; "Best &amp; Final" Frame</span>
              Present as the genuine close number. Bundle concession asks here: seller-paid closing (~1%), home warranty, or minor repair credit.
            </td>
            <td>Counter $935K or accept</td>
          </tr>
          <tr>
            <td class="step">4</td>
            <td class="price">$940,000</td>
            <td>
              <span class="tactic-name">Reluctant Stretch &mdash; Non-Price Extraction</span>
              Only if seller holds firm above $935K. Trade price for terms: extended possession, furniture, or closing-cost credit that claws back $8K&ndash;$12K effective.
            </td>
            <td>Accept or counter $945K</td>
          </tr>
          <tr>
            <td class="step">5</td>
            <td class="price">$950,000</td>
            <td>
              <span class="tactic-name">Hard Ceiling &mdash; Walk-Away Threshold</span>
              Last possible number. Only touch this if non-price concessions are fully extracted AND financing math still works. Above this = exit.
            </td>
            <td>Accept or we walk</td>
          </tr>
        </tbody>
      </table>

      <!-- STRATEGY PILLARS -->
      <h2 class="section-header"><span class="sh-blue">Three</span> <span class="sh-dark">Strategy Pillars</span></h2>

      <div class="strategy-grid">
        <div class="strategy-card offensive">
          <div class="sc-title"><span class="sc-icon">1</span>Offensive Posture</div>
          <ul>
            <li>Lead with written offer + proof of funds &mdash; eliminates seller doubt on buyer seriousness.</li>
            <li>Short acceptance window (72 hours) on every round to maintain tempo.</li>
            <li>Use silence as leverage &mdash; after each counter, wait 24 hours before responding.</li>
            <li>Never reveal the ceiling. Seller should believe $925K is genuinely our best.</li>
          </ul>
        </div>
        <div class="strategy-card defensive">
          <div class="sc-title"><span class="sc-icon">2</span>Defensive Guardrails</div>
          <ul>
            <li><strong>$950,000 is a hard wall.</strong> No emotional escalation above this number.</li>
            <li>Every counter must be in writing &mdash; no handshake or verbal commitments.</li>
            <li>Retain attorney review contingency through step 4. Do not waive.</li>
            <li>Independent appraisal before final signature &mdash; protects against overpayment.</li>
          </ul>
        </div>
        <div class="strategy-card leverage">
          <div class="sc-title"><span class="sc-icon">3</span>Leverage Points</div>
          <ul>
            <li><strong>Cash or minimal-financing offer</strong> &mdash; fastest close, fewest contingencies.</li>
            <li>Days-on-market &mdash; every week seller sits raises our leverage. Pull this data before opening.</li>
            <li>Inspection findings &mdash; use legitimate defects as post-offer price-reduction tool.</li>
            <li>Alternate properties in reserve &mdash; genuine walk-away credibility is the strongest card.</li>
          </ul>
        </div>
      </div>

      <!-- SCRIPTS -->
      <h2 class="section-header"><span class="sh-blue">Key</span> <span class="sh-dark">Scripts &amp; Language</span></h2>

      <div class="panel">
        <h3><span class="tag">OPEN</span>Written Offer Cover Note</h3>
        <div class="script">
          I am submitting a firm written offer of $900,000 on the 4505 Butterworth property. Proof of funds is attached. My schedule allows a 30&ndash;45 day close with minimal contingencies. This offer is open for 72 hours. I am reachable directly at 205-500-1343. Sincerely, Aaron C. Norris.
        </div>

        <h3 style="margin-top: 20px;"><span class="tag">COUNTER</span>Responding to a High Counter (Step 2&rarr;3)</h3>
        <div class="script">
          I appreciate the counter. Based on comparable inventory and the carry at this price point, I can move to $915,000. I would want to set a 10-day inspection window and close within 40 days. If this does not work, I understand &mdash; and I will need to finalize my decision on alternate properties by end of week.
        </div>

        <h3 style="margin-top: 20px;"><span class="tag">CLOSE</span>Landing at $925,000 (Best &amp; Final Frame)</h3>
        <div class="script">
          $925,000 is my best number. I am willing to close quickly, waive minor-repair demands, and close on the seller&rsquo;s preferred date &mdash; but I cannot go higher. If we can shake on $925,000 with seller-paid closing costs, I will have signatures back the same day.
        </div>

        <h3 style="margin-top: 20px;"><span class="tag">WALK</span>Exiting Cleanly Above $950,000</h3>
        <div class="script">
          I understand the position, and I respect it. $950,000 is beyond where I can go on this property. If circumstances change in the next 30&ndash;60 days and the seller wants to revisit, my number will still be here. Thank you for the time.
        </div>
      </div>

      <!-- TIMELINE -->
      <h2 class="section-header"><span class="sh-blue">Execution</span> <span class="sh-dark">Timeline</span></h2>

      <div class="panel">
        <div class="timeline">
          <div class="timeline-item">
            <div class="tl-day">Day 0 &mdash; Pre-Launch</div>
            <div class="tl-action">Complete pre-offer package</div>
            <div class="tl-detail">Pull days-on-market, most-recent comps (90-day, 2,500+ sq ft radius), secure proof-of-funds letter, draft LOI with 72-hour expiration.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-day">Day 1 &mdash; Opening</div>
            <div class="tl-action">Submit $900,000 written offer</div>
            <div class="tl-detail">Deliver via email with read-receipt + text notification. No phone call until written response received.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-day">Day 2&ndash;4 &mdash; First Counter</div>
            <div class="tl-action">Evaluate seller response against Step 2</div>
            <div class="tl-detail">If counter is &gt;$945K &mdash; wait 24 hours, then move to $915K. If counter is $935K&ndash;$945K &mdash; move to $925K best-and-final.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-day">Day 5&ndash;8 &mdash; Landing Window</div>
            <div class="tl-action">Target close at $925K, flex to $940K with concessions</div>
            <div class="tl-detail">Non-price levers: closing costs, furniture, home warranty, possession date. Extract before agreeing to price.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-day">Day 9&ndash;10 &mdash; Decision Point</div>
            <div class="tl-action">Accept at &le;$950K or walk</div>
            <div class="tl-detail">No number above $950K under any circumstance. Clean exit with option to return in 30&ndash;60 days.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-day">Day 11+ &mdash; Contract to Close</div>
            <div class="tl-action">Inspection, appraisal, attorney review, fund</div>
            <div class="tl-detail">Standard 30&ndash;45 day close. Use inspection findings for final price adjustment if legitimate defects discovered.</div>
          </div>
        </div>
      </div>

      <!-- WALK-AWAY -->
      <div class="walkaway">
        <h3>Walk-Away Discipline &mdash; Read Before Every Call</h3>
        <p>The single most valuable asset in this negotiation is <strong>credible willingness to walk</strong>. If the seller believes Aaron cannot walk, every number above $900,000 goes to them. If the seller believes Aaron will walk, every number below $950,000 goes to us.</p>
        <ul>
          <li><strong>$950,000 is not a stretch &mdash; it is a wall.</strong> No one-more-dollar, no emotional run-up.</li>
          <li>Never show urgency. Schedule gaps of 24 hours between counters on purpose.</li>
          <li>Have at least one alternate property identified and ready to pivot to publicly.</li>
          <li>If the seller goes silent, <strong>we do not chase.</strong> Silence is a seller tell, not a buyer trigger.</li>
          <li>Written only. Every number, every condition, every timeline &mdash; in writing.</li>
        </ul>
      </div>

      <!-- PRE-OFFER CHECKLIST -->
      <h2 class="section-header"><span class="sh-blue">Pre-Offer</span> <span class="sh-dark">Checklist</span></h2>

      <div class="panel">
        <ul class="checklist">
          <li>Current days-on-market pulled from MLS/listing source</li>
          <li>90-day comp set for 6,500+ sq ft residential in submarket compiled</li>
          <li>Proof-of-funds letter dated within 30 days, attached to LOI</li>
          <li>Written LOI drafted with 72-hour expiration clause</li>
          <li>Attorney reviewed LOI language before submission</li>
          <li>Alternate property short-list (2&ndash;3 options) identified for credible walk-away</li>
          <li>Inspection contractor identified and on standby for rapid scheduling</li>
          <li>Appraisal lender or independent appraiser lined up</li>
          <li>Financing pre-approval confirmed in writing (if not all-cash)</li>
          <li>Close date preference and flexibility confirmed against Aaron's calendar</li>
        </ul>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      130 Inverness Plaza #210, Birmingham, AL 35242<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-reg">
      Confidential negotiation brief &mdash; internal use only &mdash; not for distribution to counterparties.<br>
      Norris Utilities®, A Legacy of Commitment®, and the Phoenix Icon® are registered trademarks of Norris Utilities, LLC.
    </div>
  </footer>

</body>
</html>