<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Negotiation Strategy — Norris Utilities®</title>
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
      --nu-success: #0a7a3f;
      --nu-warning: #b25800;
      --nu-danger: #a11212;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
    .nu-header > * { position: relative; z-index: 2; }

    /* Ghost phoenix watermark in header */
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 420px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.72em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.72em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-page-title {
      margin-top: 26px;
      color: var(--nu-white);
      font-weight: 300;
      font-size: 1.15rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      opacity: 0.92;
    }

    /* ══ WHITE ASYMMETRIC CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 56px;
      margin-top: -56px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 56px;
      display: block;
    }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 60px 40px 80px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 220px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* ══ CONFIDENTIAL BANNER ══ */
    .nu-confidential {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 24px;
      text-align: center;
      font-weight: 700;
      letter-spacing: 0.2em;
      font-size: 0.82rem;
      text-transform: uppercase;
      margin-bottom: 36px;
      border-left: 4px solid var(--nu-cyan);
    }
    .nu-confidential span { color: var(--nu-cyan); }

    /* ══ PROPERTY SUMMARY CARD ══ */
    .nu-property-card {
      background: linear-gradient(135deg, var(--nu-white) 0%, #fafbff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-blue);
      border-radius: 10px;
      padding: 32px;
      margin-bottom: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }
    .nu-property-address {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      line-height: 1.15;
    }
    .nu-property-sub {
      color: var(--nu-blue);
      font-weight: 700;
      font-size: 1.05rem;
      margin-bottom: 20px;
      letter-spacing: 0.02em;
    }
    .nu-stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 18px;
      margin-top: 8px;
    }
    .nu-stat {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 16px;
      text-align: center;
    }
    .nu-stat-value {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .nu-stat-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--nu-body-text);
      margin-top: 6px;
      font-weight: 700;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-intro {
      color: var(--nu-body-text);
      margin: 14px 0 22px;
      max-width: 780px;
    }

    /* ══ CHEVRON BADGES (phase list) ══ */
    .nu-phase-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin: 20px 0 10px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 32px 16px 20px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
    }
    .nu-badge-text { flex: 1; }
    .nu-badge-text .label {
      display: block;
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 2px;
    }

    /* ══ TWO-COLUMN GRID ══ */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 760px) { .nu-grid-2 { grid-template-columns: 1fr; } }

    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-card h3 .tag {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.68rem;
      padding: 3px 8px;
      border-radius: 3px;
      margin-right: 8px;
      letter-spacing: 0.08em;
      vertical-align: middle;
    }
    .nu-card ul { list-style: none; padding: 0; }
    .nu-card li {
      padding: 8px 0 8px 22px;
      position: relative;
      border-bottom: 1px solid #f2f2f5;
      font-size: 0.95rem;
    }
    .nu-card li:last-child { border-bottom: none; }
    .nu-card li::before {
      content: '▸';
      position: absolute;
      left: 4px;
      top: 8px;
      color: var(--nu-cyan);
      font-weight: 900;
    }
    .nu-card li strong { color: var(--nu-dark-text); }

    /* ══ NUMBER TABLE ══ */
    .nu-table-wrap {
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue), #0033CC);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-table tr:nth-child(even) td { background: #fafbfd; }
    .nu-table .num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-row-anchor td { background: #fff8e5 !important; }
    .nu-row-target td { background: #e8f4ff !important; font-weight: 700; }
    .nu-row-walk td { background: #ffecec !important; }

    /* ══ CALLOUT BOXES ══ */
    .nu-callout {
      padding: 22px 26px;
      border-radius: 8px;
      margin: 18px 0;
    }
    .nu-callout.warn {
      background: #fff7e8;
      border-left: 5px solid var(--nu-warning);
    }
    .nu-callout.info {
      background: #edf4ff;
      border-left: 5px solid var(--nu-blue);
    }
    .nu-callout.go {
      background: #eaf7ef;
      border-left: 5px solid var(--nu-success);
    }
    .nu-callout h4 {
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-callout.warn h4 { color: var(--nu-warning); }
    .nu-callout.info h4 { color: var(--nu-blue); }
    .nu-callout.go h4 { color: var(--nu-success); }
    .nu-callout p + p { margin-top: 10px; }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 16px 0;
    }
    .nu-checklist li {
      padding: 12px 14px 12px 44px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 8px;
      position: relative;
      font-size: 0.95rem;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 14px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* ══ SCRIPT QUOTE ══ */
    .nu-script {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      margin: 14px 0;
      font-style: italic;
      color: var(--nu-dark-text);
      border-radius: 0 6px 6px 0;
    }
    .nu-script::before {
      content: '\201C';
      font-family: var(--font-italic);
      font-size: 2.2rem;
      color: var(--nu-cyan);
      line-height: 0.5;
      margin-right: 6px;
      vertical-align: -10px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      opacity: 0.6;
      letter-spacing: 0.05em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-page-title { font-size: 0.9rem; letter-spacing: 0.18em; }
      .nu-content-area { padding: 40px 20px 60px; }
      .nu-property-address { font-size: 1.5rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .nu-table th, .nu-table td { padding: 10px 10px; font-size: 0.85rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-property-card { box-shadow: none; }
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
    <div class="nu-page-title">Estate Acquisition — Negotiation Playbook</div>
  </header>

  <!-- WHITE ASYMMETRIC CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,56 L1440,0 L1440,56 L0,56 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT AREA -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- Confidential banner -->
      <div class="nu-confidential">
        <span>Confidential</span> &nbsp;·&nbsp; Personal Real Estate Negotiation &nbsp;·&nbsp; Prepared for Aaron C. Norris &nbsp;·&nbsp; <span>2026-04-21</span>
      </div>

      <!-- PROPERTY SUMMARY -->
      <section class="nu-property-card">
        <div class="nu-property-address">4505 Buttewoods</div>
        <div class="nu-property-sub">Target Estate Acquisition — Private Negotiation</div>
        <p style="margin-bottom: 6px;">Action item captured on reMarkable: negotiate the purchase of the 7,098 sq ft estate at 4505 Buttewoods. This document is the working playbook Aaron will use to walk into that conversation prepared — numbers, terms, leverage, and language.</p>
        <div class="nu-stats-grid">
          <div class="nu-stat">
            <div class="nu-stat-value">7,098</div>
            <div class="nu-stat-label">Sq Ft (Estate)</div>
          </div>
          <div class="nu-stat">
            <div class="nu-stat-value">4505</div>
            <div class="nu-stat-label">Buttewoods</div>
          </div>
          <div class="nu-stat">
            <div class="nu-stat-value">Private</div>
            <div class="nu-stat-label">Off-Market Approach</div>
          </div>
          <div class="nu-stat">
            <div class="nu-stat-value">30–45</div>
            <div class="nu-stat-label">Day Close Target</div>
          </div>
        </div>
      </section>

      <!-- PHASES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Phases at a Glance</span></h2>
        <p class="nu-section-intro">Five phases, executed in order. Do not skip to offer stage without completing discovery — the anchor number is only as good as the data behind it.</p>

        <div class="nu-phase-list">
          <div class="nu-badge">
            <span class="nu-badge-num">1</span>
            <span class="nu-badge-text"><span class="label">Phase 1 · Days 1–3</span>Discovery — comps, tax record, days on market, seller motivation</span>
          </div>
          <div class="nu-badge">
            <span class="nu-badge-num">2</span>
            <span class="nu-badge-text"><span class="label">Phase 2 · Days 4–5</span>Financing pre-position — proof of funds letter, lender pre-approval, attorney on standby</span>
          </div>
          <div class="nu-badge">
            <span class="nu-badge-num">3</span>
            <span class="nu-badge-text"><span class="label">Phase 3 · Days 6–8</span>Opening offer — written, clean, with expiration date</span>
          </div>
          <div class="nu-badge">
            <span class="nu-badge-num">4</span>
            <span class="nu-badge-text"><span class="label">Phase 4 · Days 9–14</span>Counter-cycle — hold anchor, concede on terms before price, protect walk number</span>
          </div>
          <div class="nu-badge">
            <span class="nu-badge-num">5</span>
            <span class="nu-badge-text"><span class="label">Phase 5 · Days 15–30</span>Contract, inspection, close — earnest money, due diligence, funding</span>
          </div>
        </div>
      </section>

      <!-- DISCOVERY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Discovery</span> <span class="rest">— What to Confirm Before the First Call</span></h2>
        <p class="nu-section-intro">You do not name a number until these six data points are on paper. The seller will sense preparation in the first sixty seconds of conversation.</p>

        <div class="nu-grid-2">
          <div class="nu-card">
            <h3><span class="tag">PROPERTY</span>The Asset</h3>
            <ul>
              <li><strong>Gross living area:</strong> 7,098 sq ft — confirm finished vs. unfinished basement split</li>
              <li><strong>Lot size:</strong> pull from parcel record</li>
              <li><strong>Year built + last major renovation:</strong> impacts roof, HVAC, mechanicals cost curve</li>
              <li><strong>Assessed value vs. market:</strong> county assessor number vs. Zillow/Redfin estimate</li>
              <li><strong>Tax bill:</strong> most recent paid amount and millage rate</li>
              <li><strong>HOA / covenants:</strong> deed restrictions, dues, any pending assessments</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span class="tag">SELLER</span>The Other Side</h3>
            <ul>
              <li><strong>Owner of record:</strong> individual, trust, LLC, or estate (probate changes everything)</li>
              <li><strong>Length of ownership:</strong> longer tenure = more equity = more flexibility</li>
              <li><strong>Current mortgage balance:</strong> tells you their price floor</li>
              <li><strong>Motivation:</strong> relocation, downsizing, financial, estate settlement</li>
              <li><strong>Days on market (if listed):</strong> past 60 days = leverage tilts to buyer</li>
              <li><strong>Agent representation:</strong> listed, FSBO, or pocket listing</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- PRICING TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Number</span> <span class="rest">Framework — Anchor, Target, Walk</span></h2>
        <p class="nu-section-intro">Fill in the dollar figures only after Discovery (above). The framework stays the same regardless of the final numbers: three points on a line, decided before the conversation starts, never shifted mid-call.</p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Definition</th>
                <th>Source</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="nu-row-anchor">
                <td><strong>Anchor (Opening Offer)</strong></td>
                <td>8–12% below fair market — leaves room to move up without crossing the target</td>
                <td>Discovery comps, recent sales within 0.5 mi</td>
                <td>Calculate after Phase 1</td>
              </tr>
              <tr class="nu-row-target">
                <td><strong>Target (Deal Price)</strong></td>
                <td>The price at which this is a good buy for Aaron — the actual goal</td>
                <td>Fair market value adjusted for condition + carrying cost</td>
                <td>Calculate after Phase 1</td>
              </tr>
              <tr>
                <td><strong>Stretch Ceiling</strong></td>
                <td>Highest number Aaron will pay if everything else in terms is favorable</td>
                <td>Target + 3–5% (never more)</td>
                <td>Calculate after Phase 1</td>
              </tr>
              <tr class="nu-row-walk">
                <td><strong>Walk Number</strong></td>
                <td>Above this, you leave the table. Written down before first call, not reconsidered.</td>
                <td>Stretch ceiling + hard cap; committed in writing to self</td>
                <td>Calculate after Phase 1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="nu-callout warn">
          <h4>Rule: Never shift the walk number during the negotiation</h4>
          <p>Rewriting the ceiling mid-conversation is the single most common mistake in real estate negotiation. If new information appears that would justify a higher number, end the call politely, sleep on it, and re-calibrate in writing before the next conversation. Emotional concession is how you overpay.</p>
        </div>
      </section>

      <!-- LEVERAGE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">— What Aaron Brings to the Table</span></h2>
        <p class="nu-section-intro">Every buyer has three currencies: price, certainty, and speed. Aaron's edge is certainty and speed. Price is last.</p>

        <div class="nu-grid-2">
          <div class="nu-card">
            <h3><span class="tag">USE</span>Certainty Plays</h3>
            <ul>
              <li><strong>Proof of funds letter</strong> dated within 7 days</li>
              <li><strong>Pre-approval or cash confirmation</strong> from a known lender or bank statement</li>
              <li><strong>Short inspection window</strong> — 5 business days instead of the standard 10–14</li>
              <li><strong>Waive minor contingencies</strong> (never waive inspection or title)</li>
              <li><strong>Name the closing attorney</strong> up front so the seller knows the transaction is real</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span class="tag">USE</span>Speed Plays</h3>
            <ul>
              <li><strong>30-day close</strong> if financed, 14–21 if cash</li>
              <li><strong>Flexible possession date</strong> — offer seller a rent-back window if they need time to move</li>
              <li><strong>Signed offer within 48 hours</strong> of mutual price agreement</li>
              <li><strong>Earnest money at the high end of normal</strong> (1–2%) — shows conviction</li>
              <li><strong>No sale-contingent clause</strong> — nothing on Aaron's side has to happen first</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span class="tag">HOLD</span>Price Plays (Use Last)</h3>
            <ul>
              <li><strong>Condition adjustments</strong> backed by inspection findings, not opinion</li>
              <li><strong>Comparable sales</strong> within 0.5 mi, last 6 months, same sq ft range</li>
              <li><strong>Carrying cost math</strong> — days on market × daily carrying cost = seller's cost of waiting</li>
              <li><strong>Tax basis</strong> — assessed value as anchor against seller's asking number</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span class="tag">AVOID</span>What Not to Do</h3>
            <ul>
              <li>Do not name a number first if you can help it — let the seller anchor</li>
              <li>Do not disclose emotional interest in the property</li>
              <li>Do not negotiate against yourself — if they go silent, wait them out</li>
              <li>Do not counter a counter with a counter within the same call — take the night</li>
              <li>Do not let an agent pressure you with a fabricated second buyer</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- OPENING OFFER LANGUAGE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Opening</span> <span class="rest">Offer — Written Language</span></h2>
        <p class="nu-section-intro">The offer goes in writing, not over the phone. The phone call frames the conversation; the written offer is what the seller takes to their spouse, their attorney, and their banker. Keep it short, professional, and clean.</p>

        <div class="nu-callout info">
          <h4>Cover note to seller</h4>
          <p>Name —</p>
          <p>Attached is a written offer for the property at 4505 Buttewoods. The terms reflect what we believe is a fair, serious, and closable transaction. We have the funds in place, have a closing attorney on standby, and can move to contract within 48 hours of mutual agreement.</p>
          <p>The offer is open through [date + 72 hours]. If the terms don't work as written, I'd welcome a direct counter — we've tried to make this simple enough that we can get to yes quickly.</p>
          <p>Sincerely,<br>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>
        </div>

        <h3 style="margin-top: 20px; margin-bottom: 10px; color: var(--nu-dark-text); font-weight: 900;">Key clauses to include in the written offer</h3>
        <ul class="nu-checklist">
          <li><strong>Purchase price:</strong> the anchor number, expressed in dollars not "around"</li>
          <li><strong>Earnest money:</strong> 1–2% of purchase price, held by named closing attorney</li>
          <li><strong>Inspection period:</strong> 7 business days from mutual acceptance</li>
          <li><strong>Financing contingency:</strong> 21 days or removed (cash offer omits this entirely)</li>
          <li><strong>Closing date:</strong> 30 days from mutual acceptance (or faster if cash)</li>
          <li><strong>Offer expiration:</strong> 72 hours from delivery — creates mild urgency without threat</li>
          <li><strong>Attorney / title:</strong> named, with contact, pre-agreed to represent the transaction</li>
          <li><strong>Possession:</strong> at closing, unless rent-back negotiated separately</li>
        </ul>
      </section>

      <!-- SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Live</span> <span class="rest">Scripts — First Conversation</span></h2>
        <p class="nu-section-intro">These are openers, not scripts to read. Memorize the shape. Let Aaron's voice fill the content.</p>

        <h3 style="margin-top: 16px; margin-bottom: 6px; color: var(--nu-dark-text); font-weight: 900;">Opening a cold conversation (off-market)</h3>
        <div class="nu-script">Name, thanks for taking the call. I'll be direct: I've been looking closely at 4505 Buttewoods and I'd like to understand whether there's a scenario where we could come to terms on a private purchase. I'm not here to waste your time, and I'm not looking to lowball you — I'd rather have a short, honest conversation about whether this could work, and if it can't, I'll leave you alone.</div>

        <h3 style="margin-top: 20px; margin-bottom: 6px; color: var(--nu-dark-text); font-weight: 900;">When the seller names a number first</h3>
        <div class="nu-script">I appreciate you putting a number on the table. I want to be honest with you — that's higher than where my numbers land, but I don't want to push back on it blind. Can you walk me through how you arrived at it? I'd rather understand your reasoning than just counter with a number of my own.</div>

        <h3 style="margin-top: 20px; margin-bottom: 6px; color: var(--nu-dark-text); font-weight: 900;">When they push you to name the first number</h3>
        <div class="nu-script">I'd rather hear your expectation before I pin a number down. I've done my homework on comparable sales, and I can give you a fair, serious offer in writing — but I want to hear what you're actually looking for first, so we're not wasting each other's time dancing around.</div>

        <h3 style="margin-top: 20px; margin-bottom: 6px; color: var(--nu-dark-text); font-weight: 900;">When you need to walk away</h3>
        <div class="nu-script">Name, I've thought hard about where we are. At those terms, this isn't a deal I can make work — and I respect that it may be the right price for the right buyer. If anything changes on your side, I'd welcome the call. Thanks for the time.</div>
      </section>

      <!-- RISKS & DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence — Non-Negotiable Checks</span></h2>
        <p class="nu-section-intro">A 7,000+ sq ft estate has more surface area for problems than a typical home. Skip none of these.</p>

        <ul class="nu-checklist">
          <li><strong>Title search:</strong> clean chain, no liens, no unreleased mortgages, no easement disputes</li>
          <li><strong>Survey:</strong> current or recent — verify lot lines, encroachments, setbacks</li>
          <li><strong>Full home inspection:</strong> structural, mechanical, electrical, plumbing</li>
          <li><strong>Roof inspection (separate):</strong> roofs on large homes are large expenses — get a specialist</li>
          <li><strong>HVAC system count and age:</strong> 7,098 sq ft typically means 2–4 systems; replacement is $15k–$40k+ per system</li>
          <li><strong>Foundation and drainage:</strong> especially for estate-era homes</li>
          <li><strong>Sewer line scope:</strong> camera inspection, not just pressure test</li>
          <li><strong>Termite / wood-destroying organism letter</strong></li>
          <li><strong>Radon test</strong> (lowest level of the home, minimum 48 hours)</li>
          <li><strong>Mold inspection</strong> if any visible moisture history or basement</li>
          <li><strong>Pool / outbuildings / specialty systems</strong> inspected by their respective specialists</li>
          <li><strong>Insurance quote in hand</strong> before inspection period closes — high-value homes can have surprises</li>
          <li><strong>Appraisal</strong> (lender-ordered if financed, independent if cash)</li>
          <li><strong>Property tax projection</strong> at new assessed value post-sale</li>
          <li><strong>HOA / covenant review</strong> by attorney</li>
        </ul>

        <div class="nu-callout warn">
          <h4>Red-flag triggers — pause and reassess</h4>
          <p><strong>·</strong> Seller refuses inspection extension for specialist findings &nbsp; <strong>·</strong> Title issues discovered mid-escrow &nbsp; <strong>·</strong> Prior unpermitted additions on square footage &nbsp; <strong>·</strong> Environmental concerns (oil tank, septic, well contamination) &nbsp; <strong>·</strong> Disclosure inconsistencies between public record and seller statement</p>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Timeline</span> <span class="rest">— 45-Day Path to Close</span></h2>
        <p class="nu-section-intro">The schedule below assumes mutual acceptance on day 8. Adjust backward from Aaron's preferred closing date.</p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Milestone</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="num">1–3</td><td>Discovery — parcel, comps, seller, mortgage, tax</td><td>Aaron</td></tr>
              <tr><td class="num">4</td><td>Proof of funds letter pulled, attorney briefed</td><td>Aaron + attorney</td></tr>
              <tr><td class="num">5</td><td>Anchor/target/walk numbers finalized in writing</td><td>Aaron</td></tr>
              <tr><td class="num">6</td><td>First conversation with seller or listing agent</td><td>Aaron</td></tr>
              <tr><td class="num">7</td><td>Written offer delivered with 72-hour expiration</td><td>Aaron</td></tr>
              <tr><td class="num">8–10</td><td>Counter cycle, mutual acceptance</td><td>Aaron + seller</td></tr>
              <tr><td class="num">11</td><td>Earnest money wired, inspection ordered</td><td>Aaron + attorney</td></tr>
              <tr><td class="num">12–18</td><td>Inspection period — all specialists</td><td>Aaron</td></tr>
              <tr><td class="num">19–21</td><td>Inspection response / repair negotiation</td><td>Aaron + seller</td></tr>
              <tr><td class="num">22–28</td><td>Financing finalization (if financed), appraisal</td><td>Lender</td></tr>
              <tr><td class="num">29–35</td><td>Title, survey, insurance bound</td><td>Attorney + Aaron</td></tr>
              <tr><td class="num">36–38</td><td>Final walkthrough</td><td>Aaron</td></tr>
              <tr><td class="num">39–45</td><td>Closing, funding, recording, possession</td><td>Attorney</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- GO / NO-GO -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Go</span> <span class="rest">/ No-Go Decision Criteria</span></h2>
        <div class="nu-grid-2">
          <div class="nu-callout go" style="margin: 0;">
            <h4>Move forward if</h4>
            <p>· Price lands at or below target<br>
            · Title is clean and free of disputes<br>
            · Inspection findings are normal wear or negotiable<br>
            · Financing (or cash) is confirmed and deliverable<br>
            · Aaron's carrying cost calculus works for a 5+ year hold<br>
            · The property fits the long-term plan, not just the moment</p>
          </div>
          <div class="nu-callout warn" style="margin: 0;">
            <h4>Walk away if</h4>
            <p>· Price sits above the pre-committed walk number<br>
            · Seller will not allow required inspections<br>
            · Title issues cannot be cured before closing<br>
            · Foundation, structural, or environmental surprises emerge<br>
            · Seller's motivation or timeline drifts beyond workable<br>
            · Anything feels rushed, opaque, or emotionally leveraged</p>
          </div>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Actions for Aaron</span></h2>
        <p class="nu-section-intro">Captured from the reMarkable action item. Execute in order. Each row is short enough to finish in a single sitting.</p>

        <ul class="nu-checklist">
          <li><strong>This week:</strong> Pull county parcel record, tax record, and recent sales for 4505 Buttewoods and the five nearest comparables</li>
          <li><strong>This week:</strong> Confirm ownership status (individual / trust / LLC / estate) and tenure of current owner</li>
          <li><strong>This week:</strong> Identify closing attorney and pre-brief on potential transaction</li>
          <li><strong>This week:</strong> Secure dated proof of funds letter from bank or lender pre-approval</li>
          <li><strong>Next week:</strong> Finalize anchor, target, stretch ceiling, and walk numbers — in writing</li>
          <li><strong>Next week:</strong> First outreach call to seller or listing agent, using the cold-approach script</li>
          <li><strong>Within 14 days:</strong> Deliver written offer with 72-hour expiration, cover note above</li>
          <li><strong>Throughout:</strong> Log every conversation, every number discussed, every date — build a paper trail in case this closes or in case it doesn't</li>
        </ul>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;·&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;·&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Internal Planning Document · Confidential · Prepared 2026-04-21 · Source: reMarkable Action Item
    </div>
  </footer>

</body>
</html>