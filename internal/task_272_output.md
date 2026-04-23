<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Disclosure Discrepancy: Rental Listing Advertisement — Norris Utilities®</title>
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
      --nu-warning: #B8860B;
      --nu-alert: #C0392B;
      --nu-success: #1E7A3C;
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

    /* ══ HEADER ══ */
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
      inset: 0;
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
      font-size: 3rem;
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
      letter-spacing: 0.72em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.72em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-eyebrow {
      display: inline-block;
      margin-top: 20px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 20px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-inner {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ TITLE BLOCK ══ */
    .action-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .action-title .lead {
      color: var(--nu-blue);
    }
    .action-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 32px;
      padding-bottom: 20px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
    .meta-chip.priority { background: #FDECEA; color: var(--nu-alert); border: 1px solid #F5C2C0; }
    .meta-chip.source { background: #EEF1FF; color: var(--nu-blue); border: 1px solid #CBD4FF; }
    .meta-chip.status { background: #FFF4DC; color: var(--nu-warning); border: 1px solid #F2DB9A; }
    .meta-chip.owner { background: var(--nu-medium-gray); color: var(--nu-dark-text); }

    /* ══ SECTIONS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section { margin-bottom: 40px; }

    /* ══ ALERT BANNER ══ */
    .alert-banner {
      background: linear-gradient(135deg, #FFF8E7 0%, #FDF2D4 100%);
      border-left: 5px solid var(--nu-warning);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 36px;
      display: flex;
      gap: 18px;
      align-items: flex-start;
    }
    .alert-banner .icon {
      font-weight: 900;
      color: var(--nu-warning);
      font-size: 1.6rem;
      line-height: 1;
      flex-shrink: 0;
      width: 34px; height: 34px;
      border-radius: 50%;
      background: var(--nu-white);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--nu-warning);
    }
    .alert-banner h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .alert-banner p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ DISCREPANCY COMPARE ══ */
    .compare-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .compare-col {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .compare-col.listed { border-top: 4px solid var(--nu-blue); }
    .compare-col.disclosed { border-top: 4px solid var(--nu-alert); }
    .compare-col h4 {
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 14px;
      color: var(--nu-dark-text);
    }
    .compare-col.listed h4::before { content: '◆ '; color: var(--nu-blue); }
    .compare-col.disclosed h4::before { content: '◆ '; color: var(--nu-alert); }
    .compare-col dl {
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 8px 14px;
      font-size: 0.92rem;
    }
    .compare-col dt {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .compare-col dd {
      color: var(--nu-body-text);
    }
    .compare-col dd.flag {
      color: var(--nu-alert);
      font-weight: 700;
    }

    /* ══ ACTION STEPS ══ */
    .steps-list {
      list-style: none;
      counter-reset: step;
    }
    .steps-list li {
      counter-increment: step;
      position: relative;
      padding: 18px 18px 18px 68px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 12px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.03);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .steps-list li:hover {
      transform: translateX(3px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.08);
    }
    .steps-list li::before {
      content: counter(step, decimal-leading-zero);
      position: absolute;
      left: 18px; top: 18px;
      width: 36px; height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.85rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.02em;
    }
    .steps-list .step-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .steps-list .step-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .steps-list .step-meta {
      display: inline-block;
      margin-top: 8px;
      padding: 3px 10px;
      background: var(--nu-light-gray);
      border-radius: 3px;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ BADGES (chevron) ══ */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin: 0 8px 10px 0;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
    }
    .nu-badge.blue { background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%); }
    .nu-badge.cyan { background: linear-gradient(135deg, #0066ee 0%, var(--nu-cyan) 100%); }

    /* ══ RISK TABLE ══ */
    .risk-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .risk-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 16px;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
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
      border-radius: 3px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .sev.high { background: #FDECEA; color: var(--nu-alert); }
    .sev.med  { background: #FFF4DC; color: var(--nu-warning); }
    .sev.low  { background: #E6F4EA; color: var(--nu-success); }

    /* ══ CTA ══ */
    .cta-block {
      margin-top: 44px;
      padding: 32px;
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      border-radius: 10px;
      color: var(--nu-white);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    .cta-block h3 {
      font-weight: 900;
      font-size: 1.35rem;
      margin-bottom: 6px;
    }
    .cta-block p {
      color: rgba(255,255,255,0.85);
      font-size: 0.95rem;
    }
    .cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 13px 26px;
      border: none;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-decoration: none;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .nu-btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(6,208,255,0.35);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-white);
      padding: 13px 26px;
      border: 2px solid rgba(255,255,255,0.4);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.15s ease;
    }
    .nu-btn-secondary:hover {
      background: rgba(255,255,255,0.1);
      border-color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 68px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-inner { padding: 40px 22px 60px; }
      .action-title { font-size: 1.55rem; }
      .compare-grid { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 4px; padding: 10px 16px; }
      .cta-block { flex-direction: column; align-items: flex-start; }
      .risk-table { font-size: 0.85rem; }
      .risk-table th, .risk-table td { padding: 10px; }
    }
    @media print {
      body { background: var(--nu-white); }
      .nu-header, .cta-block, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .steps-list li { break-inside: avoid; }
      .cta-block { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-eyebrow">Action Item Briefing</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron" aria-hidden="true">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-inner">

      <!-- TITLE + META -->
      <h1 class="action-title">
        <span class="lead">Address</span> Disclosure Discrepancy — <br>
        Rental Listing Advertisement vs. Seller Disclosure
      </h1>
      <div class="action-meta">
        <span class="meta-chip priority">● Priority: High</span>
        <span class="meta-chip source">Source: reMarkable Action Item</span>
        <span class="meta-chip status">Status: Open — Requires Response</span>
        <span class="meta-chip owner">Owner: Aaron C. Norris</span>
        <span class="meta-chip owner">Logged: 2026-04-22</span>
      </div>

      <!-- ALERT BANNER -->
      <div class="alert-banner">
        <span class="icon">!</span>
        <div>
          <h3>Why this matters</h3>
          <p>
            A property's public rental listing advertises features, conditions, or disclosures that do not
            match the formal Seller's Disclosure Statement provided under the purchase agreement. This kind
            of gap creates material misrepresentation risk and must be resolved — in writing — before
            closing. Do not proceed to underwriting sign-off until the record is reconciled.
          </p>
        </div>
      </div>

      <!-- CONTEXT -->
      <section class="section">
        <h2 class="nu-section-title">Context <span>— What was flagged</span></h2>
        <p style="margin-bottom: 14px;">
          During pre-closing review the rental listing advertisement for the property was compared against
          the Seller's Disclosure Statement on file. Material items appear in one document but are either
          omitted, contradicted, or softened in the other. Under Alabama real estate practice, the buyer is
          entitled to rely on the Seller's Disclosure Statement — but any published advertisement that
          asserts the opposite is a parallel representation that cannot be ignored. This is the same family
          of issue that triggered the H2O Waterproofing disclosure follow-up on the 4505 Butterworth file.
        </p>
        <div>
          <span class="nu-badge blue">MATERIAL REPRESENTATION</span>
          <span class="nu-badge">PRE-CLOSING</span>
          <span class="nu-badge cyan">WRITTEN RECORD REQUIRED</span>
        </div>
      </section>

      <!-- COMPARE -->
      <section class="section">
        <h2 class="nu-section-title">Side-by-Side <span>— Items to reconcile</span></h2>
        <div class="compare-grid">
          <div class="compare-col listed">
            <h4>Rental Listing Advertisement</h4>
            <dl>
              <dt>Square footage claimed</dt><dd>Stated in ad</dd>
              <dt>Year built / renovated</dt><dd>As advertised</dd>
              <dt>Systems / appliances</dt><dd>Described as included &amp; operational</dd>
              <dt>Water &amp; moisture</dt><dd>Not mentioned or described as "dry"</dd>
              <dt>Roof / exterior</dt><dd>Described as recently serviced</dd>
              <dt>HOA / use restrictions</dt><dd>Rental use shown as permitted</dd>
            </dl>
          </div>
          <div class="compare-col disclosed">
            <h4>Seller's Disclosure Statement</h4>
            <dl>
              <dt>Square footage claimed</dt><dd class="flag">Different figure on record</dd>
              <dt>Year built / renovated</dt><dd class="flag">Conflict — confirm source</dd>
              <dt>Systems / appliances</dt><dd class="flag">One or more marked "unknown"</dd>
              <dt>Water &amp; moisture</dt><dd class="flag">Prior intrusion noted</dd>
              <dt>Roof / exterior</dt><dd class="flag">Age unspecified / no receipt</dd>
              <dt>HOA / use restrictions</dt><dd class="flag">Short-term rental may be restricted</dd>
            </dl>
          </div>
        </div>
        <p style="margin-top: 16px; font-size: 0.9rem; color: var(--nu-body-text); font-style: italic;">
          Fill the exact listed vs. disclosed values into this grid when the documents are pulled side by
          side. Every "flag" must be closed before closing — either with an updated disclosure, a written
          concession, or a price/repair credit.
        </p>
      </section>

      <!-- STEPS -->
      <section class="section">
        <h2 class="nu-section-title">Action Steps <span>— Run in order</span></h2>
        <ol class="steps-list">
          <li>
            <div class="step-title">Pull both documents and timestamp them</div>
            <div class="step-detail">
              Download the current rental listing advertisement (screenshot the live page plus a saved PDF
              of the listing) and the most recent Seller's Disclosure Statement. Save both to the deal
              folder with today's date, 2026-04-22.
            </div>
            <span class="step-meta">Owner: Aaron</span>
          </li>
          <li>
            <div class="step-title">Build the discrepancy log</div>
            <div class="step-detail">
              For every claim in the ad, note the matching line in the disclosure. Flag every conflict,
              omission, or softened statement. Do not accept verbal "it's the same thing" answers — every
              delta goes into the log in writing.
            </div>
            <span class="step-meta">Tool: side-by-side grid above</span>
          </li>
          <li>
            <div class="step-title">Send the written request to the listing agent / seller</div>
            <div class="step-detail">
              Email (not text, not phone) identifying each discrepancy and asking for one of three
              resolutions per item: updated disclosure, written correction of the advertisement, or a
              credit/price adjustment. Request written response within 48 hours.
            </div>
            <span class="step-meta">CC: buyer's agent + closing attorney</span>
          </li>
          <li>
            <div class="step-title">Loop in the closing attorney</div>
            <div class="step-detail">
              Share the discrepancy log and the email trail. Ask attorney whether any item rises to
              material misrepresentation under Alabama real estate law and whether the purchase agreement
              should be amended or the closing held.
            </div>
            <span class="step-meta">Deadline: before underwriting sign-off</span>
          </li>
          <li>
            <div class="step-title">Decide: amend, credit, or walk</div>
            <div class="step-detail">
              Based on the seller's response, pick one: (a) accept an amended disclosure and proceed,
              (b) accept a documented credit/repair at closing, or (c) exercise the inspection/disclosure
              contingency and withdraw. Do not proceed on a "handshake" fix.
            </div>
            <span class="step-meta">No closing until resolved</span>
          </li>
          <li>
            <div class="step-title">File the paper trail</div>
            <div class="step-detail">
              Every email, response, and amendment gets saved to the deal folder. Even if the deal closes
              cleanly, the record has to exist — this is the same discipline applied on the Butterworth
              closing and the reason it stayed out of trouble.
            </div>
            <span class="step-meta">Retention: life of ownership</span>
          </li>
        </ol>
      </section>

      <!-- RISK -->
      <section class="section">
        <h2 class="nu-section-title">Risk Register <span>— If we do nothing</span></h2>
        <table class="risk-table">
          <thead>
            <tr>
              <th style="width: 26%;">Risk</th>
              <th style="width: 14%;">Severity</th>
              <th>Exposure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Material misrepresentation claim post-closing</td>
              <td><span class="sev high">High</span></td>
              <td>Buyer sues for rescission or damages; repairs, diminution-in-value, and legal fees become our cost.</td>
            </tr>
            <tr>
              <td>Rental income underperforms advertised figure</td>
              <td><span class="sev high">High</span></td>
              <td>If the ad claimed features or use that the disclosure or HOA restricts, actual rent / occupancy falls short of pro forma.</td>
            </tr>
            <tr>
              <td>Insurance or lender clawback</td>
              <td><span class="sev med">Medium</span></td>
              <td>Lender relied on disclosure; advertised condition conflicts may trigger re-underwrite or rate change.</td>
            </tr>
            <tr>
              <td>HOA / short-term rental violation fine</td>
              <td><span class="sev med">Medium</span></td>
              <td>If ad implies short-term rental use the HOA has restricted, fines and cease-and-desist notices follow occupancy.</td>
            </tr>
            <tr>
              <td>Clean record closes — no issue</td>
              <td><span class="sev low">Low</span></td>
              <td>If discrepancy turns out to be cosmetic (wording only), resolution is a single amended line item and closing proceeds.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DECISION CRITERIA -->
      <section class="section">
        <h2 class="nu-section-title">Decision Criteria <span>— When to stop the closing</span></h2>
        <p>
          Stop the closing if any one of the following is true after the discrepancy log is built:
        </p>
        <ul style="margin: 14px 0 0 22px;">
          <li style="margin-bottom: 8px;">Any water-intrusion, roof, or foundation item is claimed as "sound" in the ad but marked "known issue" or "unknown" on the disclosure.</li>
          <li style="margin-bottom: 8px;">Advertised use (e.g., short-term rental) is not permitted under the HOA, deed restriction, or local ordinance.</li>
          <li style="margin-bottom: 8px;">Seller refuses to respond in writing within the 48-hour window.</li>
          <li style="margin-bottom: 8px;">Attorney flags any single item as material misrepresentation under Alabama law.</li>
        </ul>
      </section>

      <!-- CTA -->
      <div class="cta-block">
        <div>
          <h3>Ready to send the written request?</h3>
          <p>Pull the two documents into the deal folder, then fire the discrepancy email today.</p>
        </div>
        <div class="cta-actions">
          <a href="mailto:acnorris@norrisutilities.com?subject=Disclosure%20Discrepancy%20—%20Rental%20Listing%20vs.%20Seller%20Disclosure" class="nu-btn-primary">Draft the Email</a>
          <a href="tel:2055001343" class="nu-btn-secondary">Call the Attorney</a>
        </div>
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