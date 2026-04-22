<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Brief — 4505 Buttewoods — Norris Utilities®</title>
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 40%, #0066ee 70%, var(--nu-cyan) 100%);
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
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-eyebrow {
      display: inline-block;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      padding: 6px 16px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-top: 22px;
    }

    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 280px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 800px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.6;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1160px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px 28px;
      padding: 18px 0 28px;
      border-bottom: 2px solid var(--nu-medium-gray);
      margin-bottom: 40px;
      color: var(--nu-body-text);
      font-size: 0.92rem;
    }
    .doc-meta strong {
      display: block;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.72rem;
      font-weight: 900;
      margin-bottom: 4px;
    }

    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 20px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .kw { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    section.block { margin-bottom: 48px; }

    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
    }
    .snap {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .snap-label {
      display: block;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .snap-value {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .snap-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    .summary-box {
      background: linear-gradient(135deg, #F6F9FF 0%, #EEF4FF 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 16px;
    }
    .summary-box p { color: var(--nu-dark-text); font-size: 1.02rem; }

    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 24px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 18px;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
    }
    .badge .dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--nu-cyan);
    }

    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-card h3 span { color: var(--nu-blue); }

    ul.clean { list-style: none; }
    ul.clean li {
      padding: 6px 0 6px 22px;
      position: relative;
      color: var(--nu-body-text);
    }
    ul.clean li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 4px;
      font-size: 1.2rem;
      line-height: 1.4;
    }

    .kv-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
    }
    .kv-table td {
      padding: 10px 12px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .kv-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 42%;
    }
    .kv-table td:last-child {
      color: var(--nu-body-text);
    }
    .kv-table tr:last-child td { border-bottom: none; }

    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .offer-card {
      border: 1px solid var(--nu-medium-gray);
      border-top: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .offer-card.mid { border-top-color: var(--nu-cyan); }
    .offer-card.high { border-top-color: var(--nu-accent-gold); }
    .offer-card .label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .offer-card.mid .label { color: #0099C8; }
    .offer-card.high .label { color: #a07a10; }
    .offer-card .amount {
      font-size: 1.95rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      line-height: 1.1;
    }
    .offer-card .psf {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    .offer-card .note {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    .timeline {
      position: relative;
      padding-left: 36px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .step {
      position: relative;
      margin-bottom: 22px;
      padding-bottom: 4px;
    }
    .step::before {
      content: '';
      position: absolute;
      left: -29px;
      top: 6px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.12);
    }
    .step h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .step h4 .phase {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 2px 10px;
      border-radius: 999px;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      margin-right: 10px;
      vertical-align: middle;
    }
    .step p {
      color: var(--nu-body-text);
      font-size: 0.95rem;
      line-height: 1.55;
    }

    .risk-table {
      width: 100%;
      border-collapse: collapse;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      border-radius: 6px;
      overflow: hidden;
    }
    .risk-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .risk-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
      vertical-align: top;
    }
    .risk-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .risk-table tr:last-child td { border-bottom: none; }
    .sev {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .sev.high { background: #FDE7E7; color: #8B0000; }
    .sev.med { background: #FFF3DA; color: #8B5A00; }
    .sev.low { background: #E1F4E8; color: #155724; }

    .action-list {
      background: var(--nu-navy);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 32px 36px;
      box-shadow: 0 8px 24px rgba(0,0,51,0.15);
      background-image:
        radial-gradient(circle at top right, rgba(6,208,255,0.12) 0%, transparent 50%),
        linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
    }
    .action-list h3 {
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 8px;
    }
    .action-list h3 span { color: var(--nu-cyan); }
    .action-list .sub {
      color: rgba(255,255,255,0.75);
      font-size: 0.92rem;
      margin-bottom: 20px;
    }
    .action-list ol {
      list-style: none;
      counter-reset: step;
    }
    .action-list ol li {
      counter-increment: step;
      padding: 12px 0 12px 48px;
      position: relative;
      border-top: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.92);
      font-size: 0.97rem;
      line-height: 1.55;
    }
    .action-list ol li:first-child { border-top: none; }
    .action-list ol li::before {
      content: counter(step, decimal-leading-zero);
      position: absolute;
      left: 0;
      top: 12px;
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
    }
    .action-list ol li strong { color: var(--nu-white); }

    .quote-block {
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      background: var(--nu-light-gray);
      border-radius: 0 6px 6px 0;
      font-style: italic;
      color: var(--nu-dark-text);
      margin-top: 24px;
    }

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
      font-size: 0.98rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 820px) {
      .two-col { grid-template-columns: 1fr; }
      .nu-header { padding: 40px 22px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .container { padding: 40px 22px 60px; }
      .doc-title { font-size: 1.8rem; }
      .action-list { padding: 26px 22px; }
      .action-list ol li { padding-left: 40px; font-size: 0.94rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .offer-card, .snap { box-shadow: none; }
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
    <div class="nu-eyebrow">Action Item · Real Estate Acquisition</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="container">

      <h1 class="doc-title">Negotiate Purchase of the <span>7,098 sq ft Estate</span> at 4505 Buttewoods</h1>
      <div class="doc-meta">
        <div><strong>Source</strong>reMarkable action item · Aaron C. Norris</div>
        <div><strong>Prepared</strong>April 22, 2026</div>
        <div><strong>Property</strong>4505 Buttewoods · 7,098 sq ft</div>
        <div><strong>Status</strong>Pre-offer — negotiation planning</div>
      </div>

      <section class="block">
        <h2 class="nu-section-title"><span class="kw">Executive</span> <span class="rest">Summary</span></h2>
        <div class="summary-box">
          <p>This brief organizes the negotiation approach for the 7,098 square foot estate at 4505 Buttewoods. It locks the key facts, sets three disciplined offer tiers tied to a verified price-per-square-foot basis, and sequences the work from diligence through close so that every move is intentional. The objective is to acquire the property on defensible terms — never chasing price, never committing before diligence is complete.</p>
        </div>
        <div class="badge-row">
          <span class="badge"><span class="dot"></span>Discipline over speed</span>
          <span class="badge"><span class="dot"></span>Data-driven ceiling</span>
          <span class="badge"><span class="dot"></span>Written terms only</span>
          <span class="badge"><span class="dot"></span>Walk-away defined</span>
        </div>
      </section>

      <section class="block">
        <h2 class="nu-section-title"><span class="kw">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="snapshot-grid">
          <div class="snap">
            <span class="snap-label">Address</span>
            <div class="snap-value">4505 Buttewoods</div>
            <div class="snap-sub">Estate property — single-owner</div>
          </div>
          <div class="snap">
            <span class="snap-label">Heated Area</span>
            <div class="snap-value">7,098 sq ft</div>
            <div class="snap-sub">Confirm against tax card and appraisal</div>
          </div>
          <div class="snap">
            <span class="snap-label">Classification</span>
            <div class="snap-value">Estate — luxury tier</div>
            <div class="snap-sub">Comp set: 6,500–8,000 sq ft homes within 3 mi</div>
          </div>
          <div class="snap">
            <span class="snap-label">Negotiation Role</span>
            <div class="snap-value">Buyer — Aaron C. Norris</div>
            <div class="snap-sub">Direct principal; attorney-represented</div>
          </div>
        </div>
      </section>

      <section class="block">
        <h2 class="nu-section-title"><span class="kw">Verify</span> <span class="rest">Before Offer — Diligence Facts</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3><span>1.</span> Property &amp; Title</h3>
            <ul class="clean">
              <li>Pull deed history — chain of title last 10 years</li>
              <li>Pull tax assessor card — confirm 7,098 sq ft, lot size, year built</li>
              <li>Pull current tax bill and any delinquencies</li>
              <li>Check for liens, judgments, mortgages on record</li>
              <li>Survey status — existing plat vs. new survey required</li>
              <li>HOA / covenants / easements on file</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span>2.</span> Market &amp; Valuation</h3>
            <ul class="clean">
              <li>Comparable sales: 3 closed in last 12 months, same sq ft band</li>
              <li>Active listings same tier within 3-mile radius</li>
              <li>Days-on-market trend for the estate bracket</li>
              <li>Price-per-square-foot low, median, and top</li>
              <li>Order independent appraisal before offer ceiling is fixed</li>
              <li>Confirm seller motivation — estate sale, relocation, distress?</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span>3.</span> Condition &amp; Physical</h3>
            <ul class="clean">
              <li>Full home inspection — licensed inspector</li>
              <li>Roof, HVAC, foundation, plumbing, electrical — each separately</li>
              <li>Pool / pond / outbuildings if present</li>
              <li>Termite/WDI letter</li>
              <li>Environmental — radon, buried tanks, septic scope</li>
              <li>Estimate deferred maintenance in dollars, not adjectives</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span>4.</span> Financial Readiness</h3>
            <ul class="clean">
              <li>Proof-of-funds letter — dated within 10 days</li>
              <li>Lender pre-approval if financing (not pre-qual)</li>
              <li>Earnest money source confirmed and liquid</li>
              <li>Closing cost estimate from attorney</li>
              <li>Insurance quote — replacement cost confirmed available</li>
              <li>After-acquisition capital reserve for known repairs</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="block">
        <h2 class="nu-section-title"><span class="kw">Offer</span> <span class="rest">Strategy — Three Disciplined Tiers</span></h2>
        <p style="margin-bottom:18px; color:var(--nu-body-text);">Each tier is a function of the confirmed price-per-square-foot from comps and the independent appraisal. Dollar figures are placed only after the appraisal is in hand. Do not set the ceiling before the data sets the ceiling.</p>
        <div class="strategy-grid">
          <div class="offer-card">
            <div class="label">Tier 1 — Opening</div>
            <div class="amount">Comp Low</div>
            <div class="psf">Target: lowest defensible $/sq ft from closed comps</div>
            <p class="note">Starts the conversation with room to move. Must be justifiable line-by-line with the three comp sales. Never so low it offends — always backed by documentation attached to the offer.</p>
          </div>
          <div class="offer-card mid">
            <div class="label">Tier 2 — Working</div>
            <div class="amount">Comp Median</div>
            <div class="psf">Target: median $/sq ft of verified comp set</div>
            <p class="note">The most likely meeting point. Ties to independent appraisal. Use here only after seller has responded and shown real concession. Couple with concrete terms — close date, contingencies removed, earnest increase.</p>
          </div>
          <div class="offer-card high">
            <div class="label">Tier 3 — Ceiling</div>
            <div class="amount">Walk-Away</div>
            <div class="psf">Max: appraised value minus known repair cost</div>
            <p class="note">Hard ceiling. Written down before negotiation starts and not revisited emotionally. If the seller will not meet this number on terms, we walk. The offer without the walk-away is not a negotiation — it's a purchase at their price.</p>
          </div>
        </div>
      </section>

      <section class="block">
        <h2 class="nu-section-title"><span class="kw">Key</span> <span class="rest">Terms Beyond Price</span></h2>
        <div class="nu-card">
          <table class="kv-table">
            <tr>
              <td>Earnest money</td>
              <td>Held in attorney or title company escrow. Amount scaled to show commitment without excessive exposure before inspection period clears.</td>
            </tr>
            <tr>
              <td>Inspection period</td>
              <td>10–14 calendar days from executed contract. Right to terminate and recover earnest during this window — in writing.</td>
            </tr>
            <tr>
              <td>Appraisal contingency</td>
              <td>Keep in place unless Tier 3 already sits below confirmed appraised value. Never waive appraisal without written valuation backup.</td>
            </tr>
            <tr>
              <td>Financing contingency</td>
              <td>Match lender timeline + 3-day buffer. Strike only when in hand with final loan commitment.</td>
            </tr>
            <tr>
              <td>Title contingency</td>
              <td>Clear marketable title required. Any defects cured by seller at seller expense before close.</td>
            </tr>
            <tr>
              <td>Closing date</td>
              <td>Propose a date that benefits seller — gives leverage on price. Flexibility on timing often unlocks dollars.</td>
            </tr>
            <tr>
              <td>Possession</td>
              <td>Keys at close. If seller needs post-close occupancy, charge rent at market day-rate with security deposit.</td>
            </tr>
            <tr>
              <td>Fixtures &amp; personal property</td>
              <td>Schedule attached to contract — every appliance, chandelier, mounted item itemized. No verbal inclusions.</td>
            </tr>
            <tr>
              <td>Repair credits</td>
              <td>Issues from inspection addressed as closing credit — cleaner than seller-managed repairs before closing.</td>
            </tr>
          </table>
        </div>
      </section>

      <section class="block">
        <h2 class="nu-section-title"><span class="kw">Execution</span> <span class="rest">Timeline</span></h2>
        <div class="timeline">
          <div class="step">
            <h4><span class="phase">Phase 1</span>Data Lock — Days 1–5</h4>
            <p>Complete every line of the diligence checklist. No offer is drafted until the comp set, appraisal order, and title search are in motion. Walk-away number written on paper and signed by Aaron before any number goes to the seller.</p>
          </div>
          <div class="step">
            <h4><span class="phase">Phase 2</span>Opening Move — Days 6–10</h4>
            <p>Deliver Tier 1 written offer through attorney or buyer's agent. Include proof-of-funds, comp attachments, and clean timeline. Ask for 72-hour response. Silence is not rejection — it is information about seller urgency.</p>
          </div>
          <div class="step">
            <h4><span class="phase">Phase 3</span>Counter &amp; Terms — Days 10–20</h4>
            <p>Work the counter toward Tier 2. Trade non-price terms — close date, earnest increase, contingency waivers — for dollars off. Every concession is exchanged, never given. Written only. No handshake changes to the contract.</p>
          </div>
          <div class="step">
            <h4><span class="phase">Phase 4</span>Inspection &amp; Re-trade — Days 21–35</h4>
            <p>Inspection completed. Real issues priced. Re-trade as repair credit, not price reduction, so the recorded sale price stays at the contract figure. Hold the ceiling. If the seller will not move on verified material issues, exercise the inspection termination right.</p>
          </div>
          <div class="step">
            <h4><span class="phase">Phase 5</span>Close — Days 36–45</h4>
            <p>Final walkthrough day of close. Attorney-reviewed closing disclosure. Wire in advance through verified instructions — never from an email alone. Keys, final utility reads, insurance bound effective date of close.</p>
          </div>
        </div>
      </section>

      <section class="block">
        <h2 class="nu-section-title"><span class="kw">Risk</span> <span class="rest">Register</span></h2>
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
              <td>Seller rejects and relists higher</td>
              <td><span class="sev med">Medium</span></td>
              <td>Maintain relationship; Tier 1 documented so a 30-day re-approach is credible. Walk-away holds.</td>
            </tr>
            <tr>
              <td>Appraisal comes in below contract</td>
              <td><span class="sev high">High</span></td>
              <td>Appraisal contingency preserved. Renegotiate to appraised value or terminate with earnest returned.</td>
            </tr>
            <tr>
              <td>Hidden defects surface after close</td>
              <td><span class="sev high">High</span></td>
              <td>Full inspection suite, including roof, foundation, septic, environmental. Sellers' disclosure signed and retained.</td>
            </tr>
            <tr>
              <td>Title defect or unrecorded lien</td>
              <td><span class="sev med">Medium</span></td>
              <td>Title search and owner's title insurance required. Seller cures defects before close or contract terminates.</td>
            </tr>
            <tr>
              <td>Wire fraud during closing</td>
              <td><span class="sev high">High</span></td>
              <td>Wire instructions confirmed by voice with attorney using known phone number. Never trust emailed instructions alone.</td>
            </tr>
            <tr>
              <td>Bidding war pulls price above ceiling</td>
              <td><span class="sev med">Medium</span></td>
              <td>Walk-away holds. No escalation clauses without a ceiling stated in writing.</td>
            </tr>
            <tr>
              <td>Insurance unavailable or excessive</td>
              <td><span class="sev med">Medium</span></td>
              <td>Bind replacement-cost quote before contingency expires. Walk if property is uninsurable at market rate.</td>
            </tr>
            <tr>
              <td>Financing delay past close</td>
              <td><span class="sev low">Low</span></td>
              <td>Lender commitment in writing before financing contingency lifts. Per-diem penalty capped in contract.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="block">
        <h2 class="nu-section-title"><span class="kw">Aaron's</span> <span class="rest">Negotiation Principles</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3><span>Rules</span> of Engagement</h3>
            <ul class="clean">
              <li>Every number justified by data — not intuition, not seller pressure</li>
              <li>Every concession is traded, never given</li>
              <li>Walk-away is written down and signed before opening offer</li>
              <li>Written terms only — no verbal side agreements</li>
              <li>Lead with the ask; no burying the price in the email</li>
              <li>Respect the seller — never pushy, never apologetic</li>
              <li>Time is leverage — whoever can walk holds it</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span>What</span> We Will Not Do</h3>
            <ul class="clean">
              <li>Waive appraisal without written valuation support</li>
              <li>Skip inspection for speed</li>
              <li>Raise the ceiling after it is set unless diligence changes the data</li>
              <li>Accept verbal fixture lists or post-close repairs on trust</li>
              <li>Send funds off emailed wire instructions alone</li>
              <li>Let sunk time or sunk emotion extend the ceiling</li>
            </ul>
          </div>
        </div>
        <div class="quote-block">
          Earn the business on terms that are advantageous to both sides. If the math does not work, the handshake will not fix it.
        </div>
      </section>

      <section class="block">
        <div class="action-list">
          <h3>Immediate <span>Action Checklist</span></h3>
          <div class="sub">Next seven days — Aaron-owned items in order of execution</div>
          <ol>
            <li><strong>Engage real estate attorney</strong> familiar with Alabama estate transactions — confirmed before any written communication to seller.</li>
            <li><strong>Pull tax card and recorded deed</strong> for 4505 Buttewoods — verify 7,098 sq ft, lot acreage, current owner of record.</li>
            <li><strong>Order independent appraisal</strong> from a licensed appraiser not affiliated with seller's agent.</li>
            <li><strong>Build comp set</strong> — three closed sales within 12 months and 3 miles, same square-foot band, documented with MLS sheets.</li>
            <li><strong>Secure proof-of-funds letter</strong> dated within 10 days, plus lender pre-approval if financing is in the plan.</li>
            <li><strong>Write the walk-away number</strong> on paper, sign it, and file it before any offer is drafted.</li>
            <li><strong>Draft Tier 1 offer</strong> with attorney — include comp attachments, proof-of-funds, and proposed timeline in a single package.</li>
            <li><strong>Schedule full inspection suite</strong> contingent on mutual contract — inspector, termite, environmental, and roof specialist on standby.</li>
            <li><strong>Set communication cadence</strong> — all material offers and counters in writing; verbal updates summarized by email same day.</li>
            <li><strong>Protect the wire</strong> — at closing, confirm every dollar movement by voice with the attorney using a known phone number.</li>
          </ol>
        </div>
      </section>

      <section class="block">
        <h2 class="nu-section-title"><span class="kw">Decision</span> <span class="rest">Gate</span></h2>
        <div class="summary-box">
          <p><strong>Proceed to Tier 1 offer only when all four are true:</strong> (1) diligence checklist complete and documented; (2) comp set verified with three closed sales; (3) independent appraisal ordered or in hand; (4) walk-away number written, signed, and filed. If any of the four is missing, the correct next move is diligence — not an offer.</p>
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
  </footer>

</body>
</html>