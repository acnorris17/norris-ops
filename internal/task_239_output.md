<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Negotiation Brief — Norris Utilities®</title>
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
      --nu-success: #1B7F3A;
      --nu-warning: #C77700;
      --nu-danger: #B00020;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

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
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 24px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 20px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 2px;
      color: var(--nu-white);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.3em;
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

    /* ══ MAIN ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 80px;
      position: relative;
      z-index: 2;
    }

    .nu-doc-header {
      text-align: center;
      margin-bottom: 40px;
      padding-bottom: 28px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-doc-header h1 {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      margin-bottom: 10px;
      line-height: 1.2;
    }
    .nu-doc-header h1 .accent { color: var(--nu-blue); }
    .nu-doc-header .subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .nu-doc-meta {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 18px;
      margin-top: 16px;
      font-size: 0.82rem;
      color: #666;
      letter-spacing: 0.02em;
    }
    .nu-doc-meta span { padding: 3px 12px; border-left: 2px solid var(--nu-cyan); }

    /* ══ SECTIONS ══ */
    .nu-section { margin-bottom: 40px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ PROPERTY SNAPSHOT ══ */
    .nu-snapshot {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px;
      margin-bottom: 32px;
    }
    .nu-snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
    }
    .nu-snapshot-item .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-snapshot-item .value {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .nu-snapshot-item .sub {
      font-size: 0.82rem;
      color: #666;
      margin-top: 2px;
    }

    /* ══ DATA TABLE ══ */
    .nu-table-wrap {
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    .nu-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      padding: 12px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-table td.label-cell { font-weight: 700; color: var(--nu-dark-text); }

    /* ══ ANCHOR PRICE ══ */
    .nu-anchors {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 20px;
    }
    .nu-anchor {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 18px;
      text-align: center;
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }
    .nu-anchor:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .nu-anchor .tier {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 8px;
    }
    .nu-anchor .price {
      font-size: 1.75rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      letter-spacing: -0.02em;
      margin-bottom: 4px;
    }
    .nu-anchor .psf {
      font-size: 0.82rem;
      color: #666;
    }
    .nu-anchor.target {
      border-color: var(--nu-blue);
      background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%);
    }
    .nu-anchor.target .tier { color: var(--nu-blue); }
    .nu-anchor.walk {
      border-color: var(--nu-danger);
    }
    .nu-anchor.walk .tier { color: var(--nu-danger); }

    /* ══ LEVERAGE CARDS ══ */
    .nu-leverage-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .nu-leverage-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 22px;
      border-top: 3px solid var(--nu-cyan);
    }
    .nu-leverage-card.pro { border-top-color: var(--nu-success); }
    .nu-leverage-card.con { border-top-color: var(--nu-warning); }
    .nu-leverage-card h4 {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .nu-leverage-card .tag {
      display: inline-block;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 2px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .nu-leverage-card.pro .tag { background: var(--nu-success); color: var(--nu-white); }
    .nu-leverage-card.con .tag { background: var(--nu-warning); color: var(--nu-white); }
    .nu-leverage-card p { font-size: 0.92rem; line-height: 1.55; }

    /* ══ NEGOTIATION FLOW ══ */
    .nu-flow {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      counter-reset: step;
    }
    .nu-flow-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
      position: relative;
      counter-increment: step;
    }
    .nu-flow-step::before {
      content: counter(step);
      position: absolute;
      top: -14px;
      left: 18px;
      width: 32px;
      height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .nu-flow-step h5 {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 6px;
      margin-top: 10px;
    }
    .nu-flow-step p {
      font-size: 0.88rem;
      line-height: 1.5;
    }

    /* ══ TERM BADGES ══ */
    .nu-terms {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 12px;
    }
    .nu-term {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 22px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.9rem;
    }
    .nu-term .term-label {
      font-size: 0.68rem;
      font-weight: 400;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      display: block;
      margin-bottom: 2px;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
    }
    .nu-check-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 20px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-check-item:last-child { border-bottom: none; }
    .nu-check-box {
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .nu-check-item .text {
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .nu-check-item .text strong {
      color: var(--nu-dark-text);
    }

    /* ══ CALLOUT ══ */
    .nu-callout {
      background: linear-gradient(135deg, #f0f4ff 0%, #e0ecff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 0 8px 8px 0;
      margin: 24px 0;
    }
    .nu-callout h4 {
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 6px;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .nu-callout p { font-size: 0.95rem; line-height: 1.55; }

    .nu-disclaimer {
      margin-top: 30px;
      padding: 16px 20px;
      background: var(--nu-light-gray);
      border: 1px dashed var(--nu-medium-gray);
      border-radius: 6px;
      font-size: 0.78rem;
      line-height: 1.55;
      color: #666;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 32px 20px 60px; }
      .nu-doc-header h1 { font-size: 1.55rem; }
      .nu-term { clip-path: none; border-radius: 6px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-container { padding: 20px; }
      .nu-anchor, .nu-leverage-card, .nu-snapshot { break-inside: avoid; }
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
    <div class="nu-doc-label">Acquisition Brief — Confidential</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-doc-header">
        <h1><span class="accent">4505 Buttewoods</span> — Estate Acquisition Brief</h1>
        <div class="subtitle">Negotiation strategy & price anchoring for a 7,098 sq ft estate purchase</div>
        <div class="nu-doc-meta">
          <span>Prepared For: Aaron C. Norris</span>
          <span>Prepared: April 24, 2026</span>
          <span>Status: Active Negotiation</span>
          <span>Classification: Internal / Confidential</span>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="nu-snapshot">
          <div class="nu-snapshot-grid">
            <div class="nu-snapshot-item">
              <div class="label">Address</div>
              <div class="value">4505 Buttewoods</div>
              <div class="sub">Subject property — estate</div>
            </div>
            <div class="nu-snapshot-item">
              <div class="label">Living Area</div>
              <div class="value">7,098 sq ft</div>
              <div class="sub">Per seller listing / source doc</div>
            </div>
            <div class="nu-snapshot-item">
              <div class="label">Transaction Type</div>
              <div class="value">Private Negotiation</div>
              <div class="sub">Off-market or owner-direct</div>
            </div>
            <div class="nu-snapshot-item">
              <div class="label">Target Close</div>
              <div class="value">60–90 Days</div>
              <div class="sub">Subject to due diligence</div>
            </div>
          </div>
        </div>

        <div class="nu-callout">
          <h4>Data Required Before First Counter</h4>
          <p>Final pricing analysis depends on seller-confirmed: asking price, lot size, year built, recent comps within 1-mile radius, tax assessed value, HVAC/roof/foundation age, and any pending liens. The anchors below are decision-ready frameworks — fill in actual dollar figures once the listing package is received from the seller or listing agent.</p>
        </div>
      </section>

      <!-- PRICE ANCHORS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Price</span> <span class="rest">Anchors</span></h2>
        <p style="margin-bottom:18px; font-size:0.95rem;">Three anchor points define the negotiating range. Enter dollar figures once the listing price and comp analysis are finalized. The target PSF range for 7,000+ sq ft estates typically sits 8–14% below initial ask on off-market deals.</p>
        <div class="nu-anchors">
          <div class="nu-anchor">
            <div class="tier">Seller Ask</div>
            <div class="price">$ _____</div>
            <div class="psf">Listing / opening price</div>
          </div>
          <div class="nu-anchor target">
            <div class="tier">Target Close</div>
            <div class="price">$ _____</div>
            <div class="psf">8–12% below ask</div>
          </div>
          <div class="nu-anchor">
            <div class="tier">Opening Offer</div>
            <div class="price">$ _____</div>
            <div class="psf">15–18% below ask</div>
          </div>
          <div class="nu-anchor walk">
            <div class="tier">Walk-Away</div>
            <div class="price">$ _____</div>
            <div class="psf">Ceiling — hard stop</div>
          </div>
        </div>
      </section>

      <!-- COMPS TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Comparable</span> <span class="rest">Sales Worksheet</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Comp Address</th>
                <th>Sq Ft</th>
                <th>Sold Date</th>
                <th>Sale Price</th>
                <th>Price / Sq Ft</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="label-cell">Comp 1 — within 1 mi</td>
                <td class="num">_____</td>
                <td>_____</td>
                <td class="num">$_____</td>
                <td class="num">$_____</td>
                <td>Pull from MLS / Zillow</td>
              </tr>
              <tr>
                <td class="label-cell">Comp 2 — within 1 mi</td>
                <td class="num">_____</td>
                <td>_____</td>
                <td class="num">$_____</td>
                <td class="num">$_____</td>
                <td>Closest square footage match</td>
              </tr>
              <tr>
                <td class="label-cell">Comp 3 — within 1 mi</td>
                <td class="num">_____</td>
                <td>_____</td>
                <td class="num">$_____</td>
                <td class="num">$_____</td>
                <td>Same subdivision if possible</td>
              </tr>
              <tr>
                <td class="label-cell">Median PSF (comps)</td>
                <td class="num">—</td>
                <td>—</td>
                <td class="num">—</td>
                <td class="num">$_____</td>
                <td>Baseline for counter logic</td>
              </tr>
              <tr>
                <td class="label-cell">4505 Buttewoods (subject)</td>
                <td class="num">7,098</td>
                <td>Pending</td>
                <td class="num">$_____</td>
                <td class="num">$_____</td>
                <td>Ask ÷ 7,098</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- LEVERAGE ANALYSIS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Analysis</span></h2>
        <div class="nu-leverage-grid">
          <div class="nu-leverage-card pro">
            <h4><span class="tag">Our Leverage</span></h4>
            <p><strong>Cash / fast close.</strong> Willingness to close in 30–60 days with minimal contingencies is worth 3–6% off list in most estate transactions. Lead with the close timeline when opening.</p>
          </div>
          <div class="nu-leverage-card pro">
            <h4><span class="tag">Our Leverage</span></h4>
            <p><strong>No contingency stack.</strong> Waiving financing or home-sale contingencies (only keeping inspection + title) signals seriousness. Do not waive inspection — always preserve that escape hatch.</p>
          </div>
          <div class="nu-leverage-card pro">
            <h4><span class="tag">Our Leverage</span></h4>
            <p><strong>Days on market.</strong> Every 30 days past the listing date compounds seller fatigue. If the property has been listed 60+ days, the seller has already absorbed the sunk-cost signal — press on price.</p>
          </div>
          <div class="nu-leverage-card con">
            <h4><span class="tag">Seller Leverage</span></h4>
            <p><strong>Scarcity at size.</strong> 7,000+ sq ft estates are rare in most markets. If comps are thin, the seller can argue "priceless" — counter with PSF medians from the closest size-tier available.</p>
          </div>
          <div class="nu-leverage-card con">
            <h4><span class="tag">Seller Leverage</span></h4>
            <p><strong>Emotional attachment.</strong> Estates often involve family history. Do not denigrate the property during negotiation — attack the price through data, not through finding fault with the home.</p>
          </div>
          <div class="nu-leverage-card">
            <h4><span class="tag">Unknown</span></h4>
            <p><strong>Seller motivation.</strong> Estate sale? Relocation? Divorce? Downsizing? Agent-driven signal of urgency is worth more than any price data. Ask the listing agent directly before the first offer.</p>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION FLOW -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Flow — 5 Moves</span></h2>
        <div class="nu-flow">
          <div class="nu-flow-step">
            <h5>Discovery</h5>
            <p>Tour the property. Confirm sq ft, lot size, systems ages. Ask the listing agent: "What is motivating the sale, and what is the timeline?" Listen more than speak.</p>
          </div>
          <div class="nu-flow-step">
            <h5>Anchor Low</h5>
            <p>Open at 15–18% below ask in writing. Justify with comps table, not opinion. Include a pre-approval letter or proof of funds with the offer.</p>
          </div>
          <div class="nu-flow-step">
            <h5>Concede Slowly</h5>
            <p>Move in decreasing increments (e.g., $25K, then $10K, then $5K). Decreasing jumps signal you are approaching your ceiling — sellers read this and stop counter-raising.</p>
          </div>
          <div class="nu-flow-step">
            <h5>Trade Terms</h5>
            <p>When price stalls, introduce non-price value: flexible close date, post-close leaseback, seller-kept fixtures, or cosmetic credits at closing. Terms are cheap; price is permanent.</p>
          </div>
          <div class="nu-flow-step">
            <h5>Close or Walk</h5>
            <p>If the seller will not meet the walk-away ceiling, exit gracefully and leave the door open in writing: "We remain interested should circumstances change." Markets shift — 60 days later, the same seller may return.</p>
          </div>
        </div>
      </section>

      <!-- TERM SHEET SHORTHAND -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Terms — Cheat Sheet</span></h2>
        <div class="nu-terms">
          <div class="nu-term">
            <div>
              <span class="term-label">Earnest Money</span>
              1–2% of offer
            </div>
          </div>
          <div class="nu-term">
            <div>
              <span class="term-label">Inspection Period</span>
              10–14 days
            </div>
          </div>
          <div class="nu-term">
            <div>
              <span class="term-label">Financing Contingency</span>
              Waive if cash
            </div>
          </div>
          <div class="nu-term">
            <div>
              <span class="term-label">Appraisal Gap</span>
              Cap at 3% above value
            </div>
          </div>
          <div class="nu-term">
            <div>
              <span class="term-label">Close Timeline</span>
              30–45 days preferred
            </div>
          </div>
          <div class="nu-term">
            <div>
              <span class="term-label">Title Company</span>
              Buyer selects
            </div>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="nu-checklist">
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="text"><strong>Confirm square footage.</strong> Order appraisal measurement — listing sq ft is often 3–7% overstated on estate-class properties.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="text"><strong>Title search.</strong> Confirm no liens, easements, or right-of-way issues. Estates sometimes carry legacy encumbrances.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="text"><strong>Property tax review.</strong> Pull 5 years of tax assessments. A sudden reassessment post-sale can add thousands annually.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="text"><strong>Systems inspection.</strong> HVAC (multiple zones on 7,000+ sq ft), roof age, foundation, plumbing trunk lines, electrical panel capacity.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="text"><strong>Termite / pest / moisture.</strong> Separate specialist — especially for older estates in the Southeast.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="text"><strong>Survey.</strong> Confirm lot boundaries, encroachments, and acreage. Estates often have inherited survey ambiguity.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="text"><strong>Insurance quote.</strong> Get binder quote before closing — carriers are tightening on older/larger homes; premium surprises kill deals at the table.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="text"><strong>HOA / covenants.</strong> Pull declarations, bylaws, and any pending special assessments.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="text"><strong>Utility history.</strong> Request 12 months of utility bills to benchmark operating cost at this size.</div>
          </div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Steps</span></h2>
        <div class="nu-callout">
          <h4>Immediate Actions — This Week</h4>
          <p>
            <strong>1.</strong> Request full listing package and property disclosures from seller or listing agent.<br>
            <strong>2.</strong> Pull 3 closest comps within 1-mile radius, sorted by closing date (most recent first).<br>
            <strong>3.</strong> Calculate median PSF and fill in the Price Anchors section above.<br>
            <strong>4.</strong> Schedule private walkthrough — ask pointed questions about seller motivation.<br>
            <strong>5.</strong> Line up pre-approval letter or proof of funds before first written offer.
          </p>
        </div>

        <div class="nu-disclaimer">
          <strong>Internal use only.</strong> This brief is a negotiation framework prepared for Aaron C. Norris. All pricing anchors, comp data, and dollar figures are placeholders pending confirmed inputs from the seller's listing package and a qualified local real estate professional. This document does not constitute legal, tax, or investment advice. Engage a licensed real estate attorney and broker before executing any offer or purchase agreement. Norris Utilities® is not a real estate entity; this acquisition is a personal/investment matter for the principal.
        </div>
      </section>

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