<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 78px;
      height: 78px;
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
      font-weight: 900;
      font-size: 1.4rem;
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
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 54px;
      margin-top: -54px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 54px;
      display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 48px 0 72px;
    }
    .nu-container {
      max-width: 1080px;
      margin: 0 auto;
      padding: 0 40px;
    }

    /* DOCUMENT HEADING */
    .nu-doc-eyebrow {
      display: inline-block;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-cyan);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 8px 18px;
      border-radius: 3px;
      margin-bottom: 18px;
    }
    .nu-doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-doc-title span {
      color: #0033cc;
    }
    .nu-doc-sub {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 8px;
      font-weight: 400;
    }
    .nu-doc-meta {
      font-size: 0.9rem;
      color: #777;
      letter-spacing: 0.04em;
      margin-bottom: 38px;
    }

    /* SECTION */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* KEY FACTS BAR */
    .nu-facts {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 44px;
    }
    .nu-fact {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 4px;
    }
    .nu-fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: #666;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-fact-value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-fact-value small {
      display: block;
      font-size: 0.78rem;
      font-weight: 400;
      color: #666;
      margin-top: 3px;
    }

    /* BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
      max-width: 560px;
    }
    .nu-badge-num {
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

    /* STEP CARDS */
    .nu-steps {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .nu-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-step-head {
      display: flex;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 8px;
    }
    .nu-step-num {
      font-weight: 900;
      font-size: 0.82rem;
      color: var(--nu-cyan);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      background: #0033cc;
      padding: 3px 10px;
      border-radius: 3px;
    }
    .nu-step-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
    }
    .nu-step-body {
      color: var(--nu-body-text);
      font-size: 0.95rem;
    }
    .nu-step-body ul { margin: 8px 0 0 20px; }
    .nu-step-body li { margin-bottom: 4px; }

    /* PROPERTY DETAIL TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      border-radius: 6px;
      overflow: hidden;
    }
    .nu-table th, .nu-table td {
      padding: 14px 18px;
      text-align: left;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 36%;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 4px;
      margin: 10px 0 20px;
    }
    .nu-callout-title {
      font-weight: 900;
      color: #0033cc;
      margin-bottom: 8px;
      font-size: 1rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .nu-callout p { margin-bottom: 10px; }
    .nu-callout p:last-child { margin-bottom: 0; }

    .nu-danger {
      background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%);
      border-left-color: #c92a2a;
    }
    .nu-danger .nu-callout-title { color: #c92a2a; }

    .nu-warn {
      background: linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%);
      border-left-color: #b8860b;
    }
    .nu-warn .nu-callout-title { color: #b8860b; }

    /* CHECKLIST */
    .nu-check-list {
      list-style: none;
      padding: 0;
    }
    .nu-check-list li {
      padding: 10px 0 10px 34px;
      border-bottom: 1px solid var(--nu-medium-gray);
      position: relative;
      font-size: 0.96rem;
    }
    .nu-check-list li:last-child { border-bottom: none; }
    .nu-check-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 13px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }

    /* BUTTONS */
    .nu-cta-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 24px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
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
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 820px) {
      .nu-facts { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 46px 20px 66px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1rem; }
      .nu-doc-title { font-size: 1.7rem; }
      .nu-container { padding: 0 22px; }
      .nu-facts { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 6px; }
      .nu-table td:first-child { width: 44%; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-cta-row { display: none; }
      .nu-step, .nu-table { box-shadow: none; border: 1px solid #ccc; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#FFFFFF"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#FFFFFF"/>
    </svg>
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 54" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,54 L1440,0 L1440,54 L0,54 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="nu-doc-eyebrow">reMarkable Action Item · Internal</div>
      <h1 class="nu-doc-title"><span>Negotiate Purchase</span> — 4505 Buttewoods Estate</h1>
      <p class="nu-doc-sub">7,098 sq ft residential estate acquisition — strategy, due diligence, and negotiation playbook.</p>
      <p class="nu-doc-meta">Captured 2026-04-23 · Owner: Aaron C. Norris · Status: Open — Pre-Offer</p>

      <!-- KEY FACTS -->
      <div class="nu-facts">
        <div class="nu-fact">
          <div class="nu-fact-label">Address</div>
          <div class="nu-fact-value">4505 Buttewoods<small>Primary target</small></div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Size</div>
          <div class="nu-fact-value">7,098 sq ft<small>Heated / living area</small></div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Asset Class</div>
          <div class="nu-fact-value">Residential Estate<small>Single-family</small></div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Current Phase</div>
          <div class="nu-fact-value">Negotiation<small>Pre-offer workup</small></div>
        </div>
      </div>

      <!-- SCOPE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Scope</span> <span class="rest">of This Action Item</span></h2>
        <p>This page captures the action Aaron recorded on the reMarkable: <strong>negotiate the purchase of the 7,098 sq ft estate at 4505 Buttewoods.</strong> The objective is a clean acquisition at a price that reflects verified market value, not asking price. Every step below is work that must happen before an offer is written — and after it is submitted.</p>

        <div class="nu-callout">
          <div class="nu-callout-title">Guiding Principle</div>
          <p>Aaron's rule on every negotiation: <em>"Lead with the ask, verify the number, and earn the business."</em> The same applies in reverse when we are the buyer — verify what we are paying for before we pay for it.</p>
        </div>
      </section>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <table class="nu-table">
          <thead>
            <tr><th>Field</th><th>Value / Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Property Address</td><td>4505 Buttewoods</td></tr>
            <tr><td>Heated Square Footage</td><td>7,098 sq ft</td></tr>
            <tr><td>Property Type</td><td>Residential — single-family estate</td></tr>
            <tr><td>Parcel / Tax ID</td><td>Pull from county assessor prior to offer</td></tr>
            <tr><td>Current Owner of Record</td><td>Confirm via county deed search</td></tr>
            <tr><td>Outstanding Liens / Mortgages</td><td>Confirm via title search before earnest money</td></tr>
            <tr><td>Last Recorded Sale (price & date)</td><td>Pull from county records; use for basis analysis</td></tr>
            <tr><td>Current Tax Assessed Value</td><td>Pull from most recent tax notice</td></tr>
            <tr><td>Listing Status</td><td>On-market / off-market / FSBO — confirm before approach</td></tr>
          </tbody>
        </table>
      </section>

      <!-- NEGOTIATION PLAYBOOK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Playbook</span></h2>

        <div class="nu-badge"><span class="nu-badge-num">1</span> Due Diligence Before Any Offer</div>
        <div class="nu-badge"><span class="nu-badge-num">2</span> Value Anchoring &amp; Comp Analysis</div>
        <div class="nu-badge"><span class="nu-badge-num">3</span> Opening Position &amp; Walk-Away Number</div>
        <div class="nu-badge"><span class="nu-badge-num">4</span> Offer, Counter, Close</div>

        <div class="nu-steps" style="margin-top: 24px;">

          <div class="nu-step">
            <div class="nu-step-head">
              <span class="nu-step-num">Step 1</span>
              <span class="nu-step-title">Due Diligence Before Any Offer</span>
            </div>
            <div class="nu-step-body">
              <ul>
                <li>Pull full deed history, chain of title, and any recorded encumbrances from the county.</li>
                <li>Confirm property lines, acreage, easements, and any HOA or deed restrictions.</li>
                <li>Order or review inspection: structural, roof, HVAC, plumbing, electrical, foundation. On a 7,098 sq ft home, deferred maintenance adds up fast.</li>
                <li>Check for flood zone, wetlands, or any environmental designations.</li>
                <li>Pull current tax assessment and three prior years of tax history.</li>
                <li>Confirm school district, zoning classification, and any pending rezoning actions.</li>
              </ul>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-head">
              <span class="nu-step-num">Step 2</span>
              <span class="nu-step-title">Value Anchoring &amp; Comp Analysis</span>
            </div>
            <div class="nu-step-body">
              <ul>
                <li>Pull at minimum five comparable sales (5,500–8,500 sq ft) within the same submarket over the last 12 months.</li>
                <li>Calculate $/sq ft on each comp, adjust for lot size, finish level, pool, garage count, and age.</li>
                <li>Document the defensible fair-market range — low, mid, high — on paper before any conversation with the seller.</li>
                <li>Identify the seller's motivation: estate sale, relocation, job change, divorce, tax pressure, or simple equity harvest. Motivation drives flexibility.</li>
                <li>Identify days-on-market and any prior price reductions. Each reduction is leverage.</li>
              </ul>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-head">
              <span class="nu-step-num">Step 3</span>
              <span class="nu-step-title">Opening Position &amp; Walk-Away Number</span>
            </div>
            <div class="nu-step-body">
              <ul>
                <li>Set the walk-away number first — the price above which we do not buy, regardless of counter-pressure.</li>
                <li>Set the target number — the price we believe reflects true market value after inspection adjustments.</li>
                <li>Set the opening offer — below target, defensible, tied to specific findings (comps, condition, carrying cost).</li>
                <li>Write every number down before the first call. Do not negotiate from memory.</li>
                <li>Lock financing pre-approval or proof of funds before offer submission so the seller sees a serious buyer.</li>
              </ul>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-head">
              <span class="nu-step-num">Step 4</span>
              <span class="nu-step-title">Offer, Counter, Close</span>
            </div>
            <div class="nu-step-body">
              <ul>
                <li>Submit written offer with clear contingencies: inspection, appraisal, financing, clear title.</li>
                <li>Include a short, respectful cover note — explain the basis for the number, not an apology for it.</li>
                <li>On counter: never split the difference by reflex. Respond to the counter with justification tied back to comps or condition.</li>
                <li>Hold earnest money in escrow with a reputable title company — never direct to seller.</li>
                <li>Schedule closing only after clear title, satisfactory inspection resolution, and final appraisal.</li>
                <li>Final walkthrough within 48 hours of closing — confirm property condition matches contract.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <!-- RISKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Key</span> <span class="rest">Risks &amp; Watch-Outs</span></h2>

        <div class="nu-callout nu-danger">
          <div class="nu-callout-title">Do Not Skip Title &amp; Survey</div>
          <p>On a 7,098 sq ft estate, parcel lines and undocumented easements can affect usable acreage and future resale. A clear title commitment and current survey are non-negotiable before earnest money becomes non-refundable.</p>
        </div>

        <div class="nu-callout nu-warn">
          <div class="nu-callout-title">Hidden-Cost Reality Check</div>
          <p>A home this size carries real annual carrying cost: property tax, insurance, HVAC zone replacement cycles, roof replacement reserves, and utility load. Run a 5-year hold pro-forma before finalizing offer price — a home that cash-flows on year one can bleed by year three.</p>
        </div>

        <div class="nu-callout">
          <div class="nu-callout-title">Emotional Leak Guard</div>
          <p>The seller's motivation is leverage; our motivation is not. Never signal urgency, never disclose the walk-away, never negotiate against ourselves between the offer and the counter.</p>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></h2>
        <ul class="nu-check-list">
          <li>Deed &amp; chain of title pulled from county</li>
          <li>Tax assessment &amp; 3-year tax history documented</li>
          <li>Comp set of 5+ sales within 12 months, same submarket</li>
          <li>$/sq ft calculated and adjusted for condition &amp; features</li>
          <li>Structural, roof, HVAC, plumbing, electrical inspection scheduled</li>
          <li>Flood zone, survey, and easement map confirmed</li>
          <li>Walk-away number set, written, and signed off</li>
          <li>Target number set, with defensible comp basis</li>
          <li>Opening offer drafted with specific justification</li>
          <li>Proof of funds or pre-approval letter in hand</li>
          <li>Title company identified and earnest money escrow account ready</li>
          <li>5-year carrying-cost pro-forma completed</li>
        </ul>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Actions — This Week</span></h2>

        <div class="nu-steps">
          <div class="nu-step">
            <div class="nu-step-head">
              <span class="nu-step-num">Owner</span>
              <span class="nu-step-title">Aaron C. Norris</span>
            </div>
            <div class="nu-step-body">
              <ul>
                <li>Pull 4505 Buttewoods deed, tax record, and listing history from county records.</li>
                <li>Identify listing agent (if any) or owner of record for direct approach.</li>
                <li>Confirm financing path: cash, conventional, or seller-financed structure.</li>
                <li>Engage real-estate attorney for contract review before any written offer.</li>
              </ul>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-head">
              <span class="nu-step-num">Support</span>
              <span class="nu-step-title">CB — Administrative Prep</span>
            </div>
            <div class="nu-step-body">
              <ul>
                <li>Build a property folder: deed, tax, comps, inspection reports, correspondence log.</li>
                <li>Track all seller and agent communications with date, channel, and summary.</li>
                <li>Maintain the offer/counter log so nothing is negotiated from memory.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="nu-cta-row">
          <a class="nu-btn-primary" href="tel:2055001343">Call Aaron — 205-500-1343</a>
          <a class="nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20—%20Negotiation%20Update">Email Update</a>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO · Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> ·
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> ·
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>