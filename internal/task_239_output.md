<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Buttewoods Estate — Norris Utilities®</title>
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

    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
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
      background-size: 60px 60px, 80px 80px;
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
      width: 70px;
      height: 70px;
      margin: 0 auto 18px;
      fill: var(--nu-white);
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

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

    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }

    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 65%);
      z-index: 0;
      pointer-events: none;
    }

    .nu-content-area > * { position: relative; z-index: 1; }

    .content-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    .page-title-block {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 30px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }

    .page-eyebrow {
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 12px;
    }

    .page-title {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 14px;
    }

    .page-subtitle {
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-body-text);
      max-width: 780px;
      margin: 0 auto;
    }

    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: -0.005em;
    }

    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
    }

    section { margin-bottom: 55px; }

    .property-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 20px;
    }

    .snapshot-cell {
      background: var(--nu-white);
      padding: 22px 18px;
      text-align: center;
    }

    .snapshot-cell .label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }

    .snapshot-cell .value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }

    .snapshot-cell .sub {
      display: block;
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 36px 14px 20px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }

    .nu-badge .badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    .offer-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 18px;
    }

    .offer-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      position: relative;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .offer-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.1);
    }

    .offer-card.anchor { border-top: 4px solid var(--nu-cyan); }
    .offer-card.target { border-top: 4px solid var(--nu-blue); background: linear-gradient(180deg, rgba(0,0,255,0.03) 0%, transparent 60%); }
    .offer-card.walk { border-top: 4px solid var(--nu-accent-gold); }

    .offer-card .stage {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }

    .offer-card .amount {
      font-size: 2.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1;
      margin-bottom: 8px;
    }

    .offer-card .psf {
      font-size: 0.88rem;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 14px;
    }

    .offer-card p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    .leverage-list {
      list-style: none;
      padding: 0;
    }

    .leverage-list li {
      display: flex;
      align-items: flex-start;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }

    .leverage-list li:last-child { border-bottom: none; }

    .leverage-list .marker {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 16px;
      margin-top: 2px;
    }

    .leverage-list .content strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      margin-bottom: 3px;
      font-size: 1.02rem;
    }

    .leverage-list .content span {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    .comps-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }

    .comps-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .comps-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    .comps-table tr:last-child td { border-bottom: none; }
    .comps-table tr:hover td { background: var(--nu-light-gray); }
    .comps-table td.highlight { color: var(--nu-blue); font-weight: 700; }

    .playbook {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #FAFAFC 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 28px 32px;
      border-radius: 0 8px 8px 0;
    }

    .playbook-step {
      display: flex;
      padding: 14px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }

    .playbook-step:last-child { border-bottom: none; }

    .playbook-step .step-num {
      flex-shrink: 0;
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-cyan);
      line-height: 1;
      margin-right: 20px;
      min-width: 50px;
    }

    .playbook-step .step-body h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1.05rem;
    }

    .playbook-step .step-body p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    .risk-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }

    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 20px;
    }

    .risk-card .tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }

    .risk-card .tag.red { background: #FFEAEA; color: #B00020; }
    .risk-card .tag.yellow { background: #FFF6D6; color: #8A6A00; }
    .risk-card .tag.green { background: #E3F7E8; color: #1B6E33; }

    .risk-card h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      font-size: 1rem;
    }

    .risk-card p { font-size: 0.9rem; color: var(--nu-body-text); }

    .scripts {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }

    .script-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }

    .script-card h4 {
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 12px;
      font-size: 1rem;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }

    .script-card blockquote {
      font-style: italic;
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      line-height: 1.65;
      padding-left: 14px;
      border-left: 3px solid var(--nu-cyan);
    }

    .next-actions {
      background: linear-gradient(135deg, #000033 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 36px;
      margin-top: 20px;
    }

    .next-actions h3 {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 18px;
      color: var(--nu-cyan);
      letter-spacing: 0.01em;
    }

    .next-actions ol {
      list-style: none;
      padding: 0;
      counter-reset: na;
    }

    .next-actions ol li {
      counter-increment: na;
      padding: 12px 0 12px 44px;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.12);
      font-size: 0.98rem;
    }

    .next-actions ol li:last-child { border-bottom: none; }

    .next-actions ol li::before {
      content: counter(na, decimal-leading-zero);
      position: absolute;
      left: 0;
      top: 10px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.05em;
    }

    .next-actions strong { color: var(--nu-white); }
    .next-actions span.due { color: var(--nu-cyan); font-weight: 700; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; margin-left: 8px; }

    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }

    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
    }

    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }

    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .nu-footer-contact a:hover { color: var(--nu-white); }

    .nu-footer-meta {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    @media (max-width: 900px) {
      .offer-grid { grid-template-columns: 1fr; }
      .risk-grid { grid-template-columns: 1fr; }
      .scripts { grid-template-columns: 1fr; }
      .page-title { font-size: 2rem; }
      .content-wrapper { padding: 40px 22px; }
    }

    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .comps-table th, .comps-table td { padding: 10px 10px; font-size: 0.85rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .offer-card, .risk-card, .script-card { box-shadow: none; border: 1px solid #ccc; }
      .next-actions { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

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

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="content-wrapper">

      <div class="page-title-block">
        <div class="page-eyebrow">Acquisition Negotiation Brief &middot; Confidential</div>
        <h1 class="page-title">4505 Buttewoods Estate &mdash; Negotiation Strategy</h1>
        <p class="page-subtitle">7,098 sq ft private residence acquisition. Structured bid framework, leverage inventory, and step-by-step playbook for the negotiation conversation.</p>
      </div>

      <section>
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <div class="section-rule"></div>
        <div class="property-snapshot">
          <div class="snapshot-cell">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <span class="sub">Subject Property</span>
          </div>
          <div class="snapshot-cell">
            <div class="label">Living Area</div>
            <div class="value">7,098</div>
            <span class="sub">sq ft conditioned</span>
          </div>
          <div class="snapshot-cell">
            <div class="label">Classification</div>
            <div class="value">Estate</div>
            <span class="sub">Single family</span>
          </div>
          <div class="snapshot-cell">
            <div class="label">Deal Stage</div>
            <div class="value">Open</div>
            <span class="sub">Pre-offer</span>
          </div>
          <div class="snapshot-cell">
            <div class="label">Buyer</div>
            <div class="value">A. Norris</div>
            <span class="sub">Personal acquisition</span>
          </div>
        </div>
      </section>

      <section>
        <h2 class="nu-section-title">Three-Tier <span>Offer Framework</span></h2>
        <div class="section-rule"></div>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">Enter the negotiation with three numbers fixed in advance. Never improvise the walk-away. Every tier below is a per-square-foot anchor &mdash; the final number depends on verified comps and condition, but the framework holds.</p>

        <div class="offer-grid">
          <div class="offer-card anchor">
            <div class="stage">Opening Anchor</div>
            <div class="amount">Low Anchor</div>
            <div class="psf">&asymp; 80% of comp midpoint &times; 7,098 sq ft</div>
            <p>First written offer. Supported by two below-midpoint comps and a documented condition/repair allowance. Opens the bargaining zone below the seller's mental floor.</p>
          </div>
          <div class="offer-card target">
            <div class="stage">Target / Fair</div>
            <div class="amount">Target</div>
            <div class="psf">&asymp; 92&ndash;95% of comp midpoint &times; 7,098 sq ft</div>
            <p>The honest number &mdash; the price that lets both sides close without resentment. This is where the deal actually wants to land. Sell the close terms, not the dollars.</p>
          </div>
          <div class="offer-card walk">
            <div class="stage">Walk-Away Ceiling</div>
            <div class="amount">Walk Point</div>
            <div class="psf">&asymp; 102% of comp midpoint &times; 7,098 sq ft</div>
            <p>Written in ink before the first phone call. Above this number, the answer is &ldquo;no&rdquo; &mdash; independent of sunk time, emotion, or the other party's posture.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="nu-section-title">Leverage <span>Inventory</span></h2>
        <div class="section-rule"></div>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">Leverage = what the other party loses if this deal fails. Name each lever explicitly before the call so none are left on the table.</p>
        <ul class="leverage-list">
          <li>
            <span class="marker">1</span>
            <div class="content">
              <strong>Cash / Clean Financing Posture</strong>
              <span>A cash or 50%+ down offer shortens the seller's risk window dramatically vs. a financed contingency. Quantify this as a time-value discount baked into your target number.</span>
            </div>
          </li>
          <li>
            <span class="marker">2</span>
            <div class="content">
              <strong>Flexible Close Date</strong>
              <span>If the seller's next move has a timing constraint (school year, probate, relocation), you can trade calendar for dollars. Ask early, concede late.</span>
            </div>
          </li>
          <li>
            <span class="marker">3</span>
            <div class="content">
              <strong>Days on Market / Staleness</strong>
              <span>Every day past the listing's 30-day mark erodes the seller's anchor. Pull the full listing history before the first conversation &mdash; prior price drops are public and they are leverage.</span>
            </div>
          </li>
          <li>
            <span class="marker">4</span>
            <div class="content">
              <strong>Inspection-Documented Condition</strong>
              <span>A written repair/reserve estimate from a licensed inspector converts &ldquo;opinion&rdquo; into &ldquo;quote.&rdquo; Roof age, HVAC count, foundation, and known water history each carry a dollar figure that justifies a lower number.</span>
            </div>
          </li>
          <li>
            <span class="marker">5</span>
            <div class="content">
              <strong>No-Contingency Optionality</strong>
              <span>Waiving appraisal or inspection is worth real money to the seller. Never waive without pricing it explicitly into the target number &mdash; these are trades, not gifts.</span>
            </div>
          </li>
          <li>
            <span class="marker">6</span>
            <div class="content">
              <strong>Walk-Away Credibility</strong>
              <span>The strongest lever is a documented alternative. Identify one backup property and confirm it is available before making the first offer. Never bluff the walk.</span>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 class="nu-section-title">Comp <span>Stack &amp; Dollar Anchor</span></h2>
        <div class="section-rule"></div>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">Fill this table with three verified sales &mdash; closed, not listed &mdash; within the last 120 days, within one mile, within 15% of 7,098 sq ft. The midpoint of the three per-square-foot numbers becomes the anchor the whole tier framework prices against.</p>
        <table class="comps-table">
          <thead>
            <tr>
              <th>Ref</th>
              <th>Address</th>
              <th>Sq Ft</th>
              <th>Sold Price</th>
              <th>$/Sq Ft</th>
              <th>Close Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight">Comp A</td>
              <td>Pull from MLS</td>
              <td>&plusmn; 15%</td>
              <td>Closed</td>
              <td class="highlight">$/sf A</td>
              <td>&lt; 120 days</td>
              <td>Most similar layout</td>
            </tr>
            <tr>
              <td class="highlight">Comp B</td>
              <td>Pull from MLS</td>
              <td>&plusmn; 15%</td>
              <td>Closed</td>
              <td class="highlight">$/sf B</td>
              <td>&lt; 120 days</td>
              <td>Most similar condition</td>
            </tr>
            <tr>
              <td class="highlight">Comp C</td>
              <td>Pull from MLS</td>
              <td>&plusmn; 15%</td>
              <td>Closed</td>
              <td class="highlight">$/sf C</td>
              <td>&lt; 120 days</td>
              <td>Closest geographic comp</td>
            </tr>
            <tr style="background: var(--nu-light-gray); font-weight: 900;">
              <td>Midpoint</td>
              <td colspan="3">Median &times; 7,098 sq ft = anchor valuation</td>
              <td class="highlight">$/sf midpoint</td>
              <td colspan="2">Drives all three tiers above</td>
            </tr>
          </tbody>
        </table>
        <p style="margin-top: 14px; font-size: 0.88rem; color: var(--nu-body-text); font-style: italic;">Comp cells populated with source identifiers before the first conversation. Do not negotiate with unverified comp data.</p>
      </section>

      <section>
        <h2 class="nu-section-title">Sequenced <span>Playbook</span></h2>
        <div class="section-rule"></div>
        <div class="nu-badge"><span class="badge-num">&#9881;</span> Run these seven steps in order. Do not skip steps to save time.</div>

        <div class="playbook">
          <div class="playbook-step">
            <div class="step-num">01</div>
            <div class="step-body">
              <h4>Pre-offer Diligence Pack</h4>
              <p>Full listing history, recorded deed chain, tax assessment trend (3 yr), HOA letter if any, survey, and visible-defect photo log. No offer goes out before this packet is complete.</p>
            </div>
          </div>
          <div class="playbook-step">
            <div class="step-num">02</div>
            <div class="step-body">
              <h4>Seller Discovery Call</h4>
              <p>Before writing an offer, have one phone conversation with the listing agent. Three open questions only: &ldquo;Why are they selling?&rdquo; &ldquo;What is their timeline?&rdquo; &ldquo;What would make an offer actually work for them?&rdquo; Listen, do not pitch.</p>
            </div>
          </div>
          <div class="playbook-step">
            <div class="step-num">03</div>
            <div class="step-body">
              <h4>Written Opening Anchor</h4>
              <p>Deliver the low anchor in writing &mdash; letter of intent or full contract. Include the comp table. Anchors written on paper hold. Anchors spoken out loud do not.</p>
            </div>
          </div>
          <div class="playbook-step">
            <div class="step-num">04</div>
            <div class="step-body">
              <h4>Silence After the Number</h4>
              <p>Once the number lands, stop talking. Do not justify it, do not apologize, do not pre-negotiate against yourself. The next move is theirs.</p>
            </div>
          </div>
          <div class="playbook-step">
            <div class="step-num">05</div>
            <div class="step-body">
              <h4>Second Offer: Terms, Not Just Price</h4>
              <p>If countered, the second move is never price-only. Move price plus change close date, earnest money, inspection window, or seller-held items. Every bump in dollars must buy something in terms.</p>
            </div>
          </div>
          <div class="playbook-step">
            <div class="step-num">06</div>
            <div class="step-body">
              <h4>Inspection as Second Negotiation</h4>
              <p>Budget for and expect a price reopen after inspection findings. Licensed repair estimates &mdash; not opinions &mdash; justify concessions. Pre-screen inspector so the report lands in writing, not hearsay.</p>
            </div>
          </div>
          <div class="playbook-step">
            <div class="step-num">07</div>
            <div class="step-body">
              <h4>Walk If Walk Is Required</h4>
              <p>If the counter crosses the walk-away ceiling set in Step 01, walk. Leave the door open politely &mdash; roughly 40% of blown deals come back inside 60 days at the buyer's number.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="nu-section-title">Risk <span>Register</span></h2>
        <div class="section-rule"></div>
        <div class="risk-grid">
          <div class="risk-card">
            <span class="tag red">High</span>
            <h4>Anchor Bias from Asking Price</h4>
            <p>The list price is a seller assertion, not a fact. Never let it set your expectations. Price against verified comps only.</p>
          </div>
          <div class="risk-card">
            <span class="tag red">High</span>
            <h4>Hidden Condition Cost</h4>
            <p>A 7,098 sq ft home can carry six-figure deferred maintenance that is invisible until inspection. Reserve for roof, HVAC, foundation, and envelope surprises before signing.</p>
          </div>
          <div class="risk-card">
            <span class="tag yellow">Medium</span>
            <h4>Financing / Appraisal Gap</h4>
            <p>If an appraisal lands under the contract price, someone absorbs the gap. Decide in advance who &mdash; and price that risk into the opening anchor.</p>
          </div>
          <div class="risk-card">
            <span class="tag yellow">Medium</span>
            <h4>Emotional Escalation</h4>
            <p>Sunk-cost bias grows with every week spent under contract. The walk-away number set before Day 1 is the discipline that beats it.</p>
          </div>
          <div class="risk-card">
            <span class="tag green">Low</span>
            <h4>Title / Lien Issues</h4>
            <p>Standard title search mitigates. Confirm the commitment is clean before signing, and verify payoff on any recorded mortgages.</p>
          </div>
          <div class="risk-card">
            <span class="tag green">Low</span>
            <h4>HOA / Covenant Exposure</h4>
            <p>Pull the recorded covenants and any HOA financials before close. Budget for special assessment risk as a known, quantifiable line.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="nu-section-title">Conversation <span>Scripts</span></h2>
        <div class="section-rule"></div>
        <div class="scripts">
          <div class="script-card">
            <h4>Opening &mdash; Delivering the Anchor</h4>
            <blockquote>&ldquo;We've studied three closed sales inside the last four months. Against that midpoint, our number on 4505 Buttewoods is the one in the letter. It reflects the comp midpoint, documented repair reserve, and our ability to close clean on the seller's timeline. We'd rather earn the deal at this number than chase it beyond what the comps support.&rdquo;</blockquote>
          </div>
          <div class="script-card">
            <h4>Counter &mdash; Holding the Line</h4>
            <blockquote>&ldquo;I hear the counter. Before I move on price, tell me which of these is most useful to you: a faster close, larger earnest, or shorter inspection window. I can shift terms that cost us less than the gap &mdash; but I can't move price without getting something back.&rdquo;</blockquote>
          </div>
          <div class="script-card">
            <h4>Inspection Reopen</h4>
            <blockquote>&ldquo;The inspector came back with three licensed estimates totaling what you'll see attached. I'm not trying to renegotiate the whole deal &mdash; I'd like a credit equal to the repair bid, the seller does not have to touch the work, and we close on the original date.&rdquo;</blockquote>
          </div>
          <div class="script-card">
            <h4>The Walk</h4>
            <blockquote>&ldquo;I appreciate the time the seller has put in. At that number, the math stops working for us, so we're going to step back. If anything changes on their end in the next 60 days, my number stays the same and my phone is the same.&rdquo;</blockquote>
          </div>
        </div>
      </section>

      <section>
        <h2 class="nu-section-title">Aaron's <span>Next Actions</span></h2>
        <div class="section-rule"></div>
        <div class="next-actions">
          <h3>Before the first negotiation conversation</h3>
          <ol>
            <li><strong>Pull three closed comps</strong> within 120 days, one mile, &plusmn; 15% sq ft &mdash; populate the comp table above. <span class="due">&middot; This week</span></li>
            <li><strong>Commit the three numbers to paper</strong> &mdash; opening anchor, target, walk-away ceiling. Sign and date before any call. <span class="due">&middot; Before Day 1</span></li>
            <li><strong>Confirm financing posture</strong> &mdash; pre-qual letter, proof of funds, or written lender commitment in hand. <span class="due">&middot; Before offer</span></li>
            <li><strong>Identify one backup property</strong> and verify availability. The walk-away only works if there is somewhere to walk to. <span class="due">&middot; Parallel track</span></li>
            <li><strong>Line up a licensed inspector</strong> who delivers written repair estimates, not verbal opinions. <span class="due">&middot; Pre-contract</span></li>
            <li><strong>Do the seller discovery call first.</strong> Listen before you pitch. Write down their answer to &ldquo;what would make this actually work?&rdquo; <span class="due">&middot; Before offer</span></li>
            <li><strong>Submit the opening anchor in writing</strong> with the comp sheet attached. Then stop talking. <span class="due">&middot; Day of offer</span></li>
          </ol>
        </div>
      </section>

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
    <div class="nu-footer-meta">
      Confidential Negotiation Brief &middot; Prepared for Aaron C. Norris &middot; For internal planning use only
    </div>
  </footer>

</body>
</html>