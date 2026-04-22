<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Purchase Negotiation Brief — Norris Utilities®</title>
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
      --nu-success: #2D7A3E;
      --nu-warning: #C9A84C;
      --nu-danger: #B03030;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, #06D0FF 100%);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix {
      width: 70px; height: 70px;
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
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-top: 2px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
      margin-top: 18px;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 3px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* MAIN */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 400px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 20px;
    }

    /* DOC META */
    .doc-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      padding: 22px 26px;
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .doc-meta-item .label {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin-bottom: 4px;
    }
    .doc-meta-item .value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION */
    .nu-section { margin-bottom: 48px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 6px;
      color: var(--nu-dark-text);
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-rule {
      height: 3px;
      width: 64px;
      background: linear-gradient(90deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      margin-bottom: 20px;
      border-radius: 2px;
    }

    /* EXECUTIVE SUMMARY BOX */
    .exec-summary {
      background: linear-gradient(135deg, #f7f9ff 0%, var(--nu-white) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .exec-summary p { margin-bottom: 12px; }
    .exec-summary p:last-child { margin-bottom: 0; }

    /* PROPERTY GRID */
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .property-cell {
      background: var(--nu-white);
      padding: 22px 20px;
      text-align: center;
    }
    .property-cell .stat {
      font-weight: 900;
      font-size: 1.9rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 6px;
    }
    .property-cell .stat-unit {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .property-cell .stat-label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-body-text);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-top: 8px;
    }

    /* CHEVRON BADGES */
    .chevron-list { margin-top: 8px; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 20px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
    }
    .nu-badge .num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      margin-right: 14px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      flex-shrink: 0;
    }

    /* TWO-COL CARDS */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.09);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .nu-card ul {
      list-style: none;
    }
    .nu-card ul li {
      padding: 6px 0 6px 18px;
      position: relative;
      font-size: 0.93rem;
    }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1.1;
    }

    /* OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
    }
    .offer-tier {
      position: relative;
      padding: 22px 22px 22px 26px;
      border-radius: 6px;
      border-left: 5px solid;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .offer-tier.opener { border-left-color: var(--nu-success); }
    .offer-tier.target { border-left-color: var(--nu-blue); }
    .offer-tier.walkaway { border-left-color: var(--nu-danger); }
    .offer-tier .tier-label {
      font-size: 0.72rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      margin-bottom: 8px;
    }
    .offer-tier.opener .tier-label { color: var(--nu-success); }
    .offer-tier.target .tier-label { color: var(--nu-blue); }
    .offer-tier.walkaway .tier-label { color: var(--nu-danger); }
    .offer-tier .tier-price {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      line-height: 1.1;
    }
    .offer-tier .tier-note {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 14px 18px;
      text-align: left;
      font-size: 0.82rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 12px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: #fafbfd; }

    /* ACTION ITEMS */
    .action-list {
      counter-reset: action;
      list-style: none;
    }
    .action-list li {
      counter-increment: action;
      position: relative;
      padding: 14px 18px 14px 56px;
      margin-bottom: 10px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      font-size: 0.94rem;
    }
    .action-list li::before {
      content: counter(action);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 30px; height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.88rem;
    }

    /* NOTE BOX */
    .note-box {
      padding: 18px 22px;
      background: #fffaeb;
      border-left: 4px solid var(--nu-accent-gold);
      border-radius: 4px;
      font-size: 0.9rem;
      color: #5a4a1a;
      margin-top: 20px;
    }
    .note-box strong { color: #3a3000; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.03em;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-confidential {
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.76rem;
      color: rgba(255,255,255,0.6);
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 20px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 20px; }
      .nu-section-title { font-size: 1.35rem; }
      .offer-tier .tier-price { font-size: 1.45rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .offer-tier, .nu-table { box-shadow: none; border: 1px solid #ccc; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal · Personal · Confidential</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE / META -->
      <div class="nu-section">
        <h1 style="font-weight: 900; font-size: 2.1rem; color: var(--nu-dark-text); margin-bottom: 8px; line-height: 1.15;">
          Purchase Negotiation Brief — <span style="color: var(--nu-blue);">4505 Buttewoods</span>
        </h1>
        <p style="color: var(--nu-body-text); font-size: 1.02rem; margin-bottom: 22px;">
          7,098 sq ft estate acquisition — strategy, offer ladder, and action list for Aaron C. Norris.
        </p>

        <div class="doc-meta">
          <div class="doc-meta-item">
            <div class="label">Property</div>
            <div class="value">4505 Buttewoods</div>
          </div>
          <div class="doc-meta-item">
            <div class="label">Size</div>
            <div class="value">7,098 sq ft</div>
          </div>
          <div class="doc-meta-item">
            <div class="label">Classification</div>
            <div class="value">Estate / Single Family</div>
          </div>
          <div class="doc-meta-item">
            <div class="label">Document Date</div>
            <div class="value">April 22, 2026</div>
          </div>
          <div class="doc-meta-item">
            <div class="label">Prepared For</div>
            <div class="value">Aaron C. Norris</div>
          </div>
          <div class="doc-meta-item">
            <div class="label">Status</div>
            <div class="value">Active Negotiation</div>
          </div>
        </div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="first">Executive</span> Summary</div>
        <div class="nu-section-rule"></div>
        <div class="exec-summary">
          <p>
            The target is a 7,098 square-foot estate at 4505 Buttewoods. The negotiation objective is to acquire the home at a price that reflects its true condition — accounting for known water intrusion concerns flagged in a prior disclosure review — while preserving a walk-away position that protects capital.
          </p>
          <p>
            Approach the seller from strength. Known issues, third-party inspection findings, and H2O Waterproofing's written evaluation give Norris Utilities® legitimate grounds to negotiate below list. The goal is a signed contract at or below the Target price, with water intrusion remediation documented in writing before close.
          </p>
          <p>
            This brief is personal and confidential. It is not a public listing document and must not be shared with the seller, the seller's agent, or any third party outside the buyer's representation team.
          </p>
        </div>
      </div>

      <!-- PROPERTY AT A GLANCE -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="first">Property</span> At a Glance</div>
        <div class="nu-section-rule"></div>
        <div class="property-grid">
          <div class="property-cell">
            <div class="stat">7,098</div>
            <div class="stat-unit">square feet</div>
            <div class="stat-label">Total Area</div>
          </div>
          <div class="property-cell">
            <div class="stat">4505</div>
            <div class="stat-unit">Buttewoods</div>
            <div class="stat-label">Address</div>
          </div>
          <div class="property-cell">
            <div class="stat">Estate</div>
            <div class="stat-unit">single family</div>
            <div class="stat-label">Classification</div>
          </div>
          <div class="property-cell">
            <div class="stat">Active</div>
            <div class="stat-unit">negotiation</div>
            <div class="stat-label">Current Status</div>
          </div>
        </div>
      </div>

      <!-- NEGOTIATION STRATEGY -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="first">Negotiation</span> Strategy — Five Moves</div>
        <div class="nu-section-rule"></div>
        <div class="chevron-list">
          <div class="nu-badge"><span class="num">1</span>Anchor low but credible — justify every dollar with inspection and comparables</div>
          <div class="nu-badge"><span class="num">2</span>Lead with condition findings; water intrusion disclosure is the leverage</div>
          <div class="nu-badge"><span class="num">3</span>Require H2O Waterproofing written statement before final offer is signed</div>
          <div class="nu-badge"><span class="num">4</span>Offer speed and certainty — clean financing, short contingency windows</div>
          <div class="nu-badge"><span class="num">5</span>Hold the walk-away line — never negotiate past the maximum under pressure</div>
        </div>
      </div>

      <!-- OFFER LADDER -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="first">Offer</span> Ladder</div>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">
          Three anchored positions. Populate the dollar figures once comparable-sales review and the H2O Waterproofing estimate are in hand.
        </p>
        <div class="offer-ladder">
          <div class="offer-tier opener">
            <div class="tier-label">Opening Offer</div>
            <div class="tier-price">To be set</div>
            <div class="tier-note">Anchored below list. Justified by condition findings and comparable-sales analysis. Expect counter.</div>
          </div>
          <div class="offer-tier target">
            <div class="tier-label">Target / Fair Price</div>
            <div class="tier-price">To be set</div>
            <div class="tier-note">The signed-contract goal. Reflects true condition net of documented remediation cost.</div>
          </div>
          <div class="offer-tier walkaway">
            <div class="tier-label">Walk-Away Ceiling</div>
            <div class="tier-price">To be set</div>
            <div class="tier-note">Absolute maximum. Beyond this number the deal stops making sense. Hold the line.</div>
          </div>
        </div>
        <div class="note-box">
          <strong>Rule:</strong> Never verbalize the walk-away number to the seller, the seller's agent, or your own agent during live negotiation. It exists for Aaron only.
        </div>
      </div>

      <!-- KEY CONDITIONS -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="first">Key</span> Conditions Driving Price</div>
        <div class="nu-section-rule"></div>
        <div class="card-grid">
          <div class="nu-card">
            <h3>Water Intrusion</h3>
            <ul>
              <li>Disclosure omission flagged in prior review</li>
              <li>H2O Waterproofing written evaluation required before signing</li>
              <li>Remediation scope and cost must be in writing</li>
              <li>Either seller repairs pre-close or credit is issued at close</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Inspection Findings</h3>
            <ul>
              <li>Full professional home inspection</li>
              <li>Roof, HVAC, plumbing, electrical separate scopes</li>
              <li>Foundation review given estate size</li>
              <li>Termite / wood-destroying organism letter</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Comparable Sales</h3>
            <ul>
              <li>Recent closings within half-mile radius</li>
              <li>Adjust for square footage and lot size</li>
              <li>Weight condition-adjusted comps more heavily</li>
              <li>Document price-per-square-foot range</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Title &amp; Legal</h3>
            <ul>
              <li>Clean title search</li>
              <li>Verify no open liens or judgments</li>
              <li>Confirm survey and lot boundaries</li>
              <li>Review HOA or deed restrictions</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- OFFER TERMS TABLE -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="first">Offer</span> Terms — Non-Price Levers</div>
        <div class="nu-section-rule"></div>
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width: 28%;">Term</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Earnest Money</strong></td>
              <td>Market-standard deposit. Demonstrates seriousness without over-exposing capital before inspection period ends.</td>
            </tr>
            <tr>
              <td><strong>Financing</strong></td>
              <td>Pre-approval letter from Patrick Lavette at Renasant Bank included with offer. Short financing contingency window.</td>
            </tr>
            <tr>
              <td><strong>Inspection Period</strong></td>
              <td>Adequate to complete full inspection plus H2O Waterproofing evaluation. No shorter than needed.</td>
            </tr>
            <tr>
              <td><strong>Close Date</strong></td>
              <td>Flexible on seller's preferred timeline — use as a concession chip in exchange for price.</td>
            </tr>
            <tr>
              <td><strong>Repairs / Credits</strong></td>
              <td>Water intrusion either repaired by licensed contractor pre-close or a documented credit applied at closing.</td>
            </tr>
            <tr>
              <td><strong>Contingencies</strong></td>
              <td>Inspection, financing, appraisal, clean title. No sale-of-home contingency.</td>
            </tr>
            <tr>
              <td><strong>Appliances &amp; Fixtures</strong></td>
              <td>Confirm what conveys in writing. Assume nothing verbal.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- LEVERAGE & RISKS -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="first">Leverage</span> vs. Risk</div>
        <div class="nu-section-rule"></div>
        <div class="card-grid">
          <div class="nu-card" style="border-left: 4px solid var(--nu-success);">
            <h3 style="color: var(--nu-success);">Buyer Leverage</h3>
            <ul>
              <li>Water intrusion disclosure gap is documented</li>
              <li>Strong financing position and clean pre-approval</li>
              <li>No contingent home sale to slow the deal</li>
              <li>Ability to close on seller's timeline</li>
              <li>Cash-equivalent certainty to seller</li>
            </ul>
          </div>
          <div class="nu-card" style="border-left: 4px solid var(--nu-danger);">
            <h3 style="color: var(--nu-danger);">Buyer Risk</h3>
            <ul>
              <li>Undisclosed remediation cost if H2O scope grows</li>
              <li>Competing offers could push price past target</li>
              <li>Appraisal risk on a 7,098 sq ft estate</li>
              <li>Insurance cost at this size and condition</li>
              <li>Carrying cost of estate-scale property</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ACTION LIST -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="first">Action</span> List — Before Submitting Offer</div>
        <div class="nu-section-rule"></div>
        <ol class="action-list">
          <li>Call H2O Waterproofing before closing and get remediation scope in writing.</li>
          <li>Schedule full home inspection with specific scope for 7,098 sq ft estate.</li>
          <li>Pull comparable closings within a half-mile radius over the last 12 months.</li>
          <li>Confirm Patrick Lavette at Renasant Bank has pre-approval letter ready.</li>
          <li>Order title search and survey review.</li>
          <li>Lock the three offer-ladder numbers — Opening, Target, Walk-Away — before first call.</li>
          <li>Brief buyer's agent on the walk-away discipline without revealing the number.</li>
          <li>Draft the written offer with short contingency windows and flexible close date.</li>
          <li>Run final go / no-go review with Aaron the morning of submission.</li>
        </ol>
      </div>

      <!-- SCRIPT / TALK TRACKS -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="first">Talk</span> Tracks</div>
        <div class="nu-section-rule"></div>
        <div class="card-grid">
          <div class="nu-card">
            <h3>Opening</h3>
            <p style="font-size: 0.93rem;">
              "We're serious buyers with financing in place. We've done our homework on the property — including the condition items. The offer we're bringing reflects that work, and we're prepared to move quickly on the seller's timeline."
            </p>
          </div>
          <div class="nu-card">
            <h3>When Countered</h3>
            <p style="font-size: 0.93rem;">
              "We understand the seller's position. Our number is built from comparable closings and the documented remediation scope. We have room on terms — close date, contingency windows — but the price reflects the condition findings."
            </p>
          </div>
          <div class="nu-card">
            <h3>On the Water Issue</h3>
            <p style="font-size: 0.93rem;">
              "We're not asking for speculation. We have a written scope from H2O Waterproofing. The number is what the number is. We'd rather see it handled pre-close by a licensed contractor than take a credit — but either works."
            </p>
          </div>
          <div class="nu-card">
            <h3>Walk-Away</h3>
            <p style="font-size: 0.93rem;">
              "Thank you for the time. This one isn't a fit at that number, but we appreciate the transparency. If the seller reconsiders in the next ten days, our offer remains on the table as written."
            </p>
          </div>
        </div>
      </div>

      <!-- CLOSING NOTE -->
      <div class="nu-section">
        <div class="note-box">
          <strong>Final reminder — </strong>
          Negotiation is won in preparation, not at the table. Inspection, H2O Waterproofing scope, comparable sales, and the three-number offer ladder locked before the first call. Then execute. Hold the walk-away line.
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
    <div class="nu-footer-confidential">
      Internal · Personal · Confidential — Not for Distribution
    </div>
  </footer>

</body>
</html>