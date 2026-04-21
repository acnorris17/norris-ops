<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods | Norris Utilities®</title>
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
      --nu-success: #0A7F3F;
      --nu-warn: #B8860B;
      --nu-danger: #A82020;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
        linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      background-size: 40px 40px, 40px 40px, 60px 60px, 80px 80px;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }

    /* Ghost phoenix watermark in header */
    .nu-ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 55px;
      margin-top: -55px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 55px;
      display: block;
    }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 50px 0 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.02) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 40px;
    }

    /* ══ STATUS BANNER ══ */
    .nu-status-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 28px;
      border-radius: 8px;
      margin-bottom: 36px;
      box-shadow: 0 4px 16px rgba(0,0,51,0.15);
      flex-wrap: wrap;
      gap: 16px;
    }
    .nu-status-banner .status-label {
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 2px;
    }
    .nu-status-banner .status-value {
      font-size: 1rem;
      font-weight: 700;
    }
    .nu-status-banner .status-item { flex: 1; min-width: 140px; }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
      display: flex;
      align-items: baseline;
      gap: 0.4em;
    }
    .nu-section-title .first {
      color: #0033cc;
      font-weight: 900;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-subtitle {
      font-size: 0.95rem;
      color: #666;
      margin-bottom: 20px;
      font-style: italic;
    }

    /* ══ PROPERTY OVERVIEW CARD ══ */
    .nu-property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .nu-metric-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-metric-card .label {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #666;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .nu-metric-card .value {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-metric-card .sub {
      font-size: 0.82rem;
      color: #888;
      margin-top: 4px;
    }

    /* ══ NEGOTIATION STRATEGY PANEL ══ */
    .nu-strategy-panel {
      background: linear-gradient(135deg, #f8f9ff 0%, #edf1ff 100%);
      border: 1px solid #d0d8f5;
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 24px;
    }
    .nu-strategy-panel h3 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.15rem;
      margin-bottom: 14px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON BADGES (phases) ══ */
    .nu-phase-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 12px;
    }
    .nu-phase-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 20px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
      gap: 14px;
    }
    .nu-phase-badge .num {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.95rem;
      flex-shrink: 0;
    }
    .nu-phase-badge .label {
      flex: 1;
    }

    /* ══ ACTION TABLE ══ */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 16px;
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.92rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:hover { background: #fafbff; }
    .nu-table .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 10px;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .pill-open { background: #fff4d6; color: var(--nu-warn); }
    .pill-done { background: #d8f0de; color: var(--nu-success); }
    .pill-wait { background: #e5e8ef; color: #4a5268; }

    /* ══ LEVERAGE / RISK SPLIT ══ */
    .nu-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 24px;
    }
    @media (max-width: 720px) { .nu-split { grid-template-columns: 1fr; } }
    .nu-split-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-split-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .nu-split-card.leverage h4 { color: var(--nu-success); border-color: var(--nu-success); }
    .nu-split-card.risk h4 { color: var(--nu-danger); border-color: var(--nu-danger); }
    .nu-split-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-split-card li {
      padding: 8px 0 8px 24px;
      position: relative;
      font-size: 0.93rem;
      line-height: 1.5;
    }
    .nu-split-card.leverage li::before {
      content: '▲';
      position: absolute;
      left: 0; top: 8px;
      color: var(--nu-success);
      font-size: 0.8rem;
    }
    .nu-split-card.risk li::before {
      content: '▼';
      position: absolute;
      left: 0; top: 8px;
      color: var(--nu-danger);
      font-size: 0.8rem;
    }

    /* ══ PRICE LADDER ══ */
    .nu-ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 16px;
    }
    .nu-ladder-step {
      padding: 22px 20px;
      text-align: center;
      border-right: 1px solid var(--nu-medium-gray);
      position: relative;
    }
    .nu-ladder-step:last-child { border-right: none; }
    .nu-ladder-step .tier {
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 6px;
      color: #666;
    }
    .nu-ladder-step .price {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-ladder-step .note {
      font-size: 0.78rem;
      color: #888;
    }
    .nu-ladder-step.anchor { background: #fff4d6; }
    .nu-ladder-step.target { background: #e6f7ff; border-top: 3px solid var(--nu-cyan); }
    .nu-ladder-step.walk { background: #fde6e6; }

    /* ══ CALLOUT BOX ══ */
    .nu-callout {
      background: linear-gradient(135deg, #001a4d 0%, #002e8c 100%);
      color: var(--nu-white);
      padding: 26px 32px;
      border-radius: 10px;
      margin-bottom: 24px;
      border-left: 6px solid var(--nu-cyan);
    }
    .nu-callout .tag {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .nu-callout p {
      font-size: 1rem;
      line-height: 1.6;
    }

    /* ══ NOTES LIST ══ */
    .nu-notes {
      background: #fafbff;
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 26px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 20px;
    }
    .nu-notes p {
      margin-bottom: 10px;
      font-size: 0.93rem;
    }
    .nu-notes p:last-child { margin-bottom: 0; }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 10px 0 10px 34px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
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
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 0 22px; }
      .nu-section-title { font-size: 1.3rem; }
      .nu-phase-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .nu-strategy-panel { padding: 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-status-banner { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-ghost-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 55" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,55 L1440,0 L1440,55 L0,55 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="nu-section" style="text-align:center; margin-bottom: 34px;">
        <div style="font-size:0.8rem; letter-spacing:0.2em; text-transform:uppercase; color:#666; font-weight:700; margin-bottom:10px;">
          Internal Strategy Document · Confidential
        </div>
        <h1 style="font-size:2.1rem; font-weight:900; color:var(--nu-dark-text); line-height:1.2; margin-bottom:10px;">
          Estate Acquisition — <span style="color:var(--nu-blue);">4505 Buttewoods</span>
        </h1>
        <p style="font-size:1.05rem; color:#555; max-width:760px; margin:0 auto;">
          Negotiation plan for the purchase of the 7,098 sq ft estate at 4505 Buttewoods. Prepared for Aaron C. Norris, Founder &amp; CEO, Norris Utilities®.
        </p>
      </div>

      <!-- STATUS BANNER -->
      <div class="nu-status-banner">
        <div class="status-item">
          <div class="status-label">Status</div>
          <div class="status-value">Pre-Offer · Strategy Build</div>
        </div>
        <div class="status-item">
          <div class="status-label">Property</div>
          <div class="status-value">4505 Buttewoods</div>
        </div>
        <div class="status-item">
          <div class="status-label">Size</div>
          <div class="status-value">7,098 sq ft</div>
        </div>
        <div class="status-item">
          <div class="status-label">Owner / Buyer</div>
          <div class="status-value">Aaron C. Norris</div>
        </div>
        <div class="status-item">
          <div class="status-label">Prepared</div>
          <div class="status-value">April 21, 2026</div>
        </div>
      </div>

      <!-- SECTION: PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span><span class="rest">Snapshot</span></h2>
        <p class="nu-section-subtitle">Core facts as captured from the reMarkable action item. Fields marked "To confirm" require a title search or listing detail verification before the first offer is submitted.</p>

        <div class="nu-property-grid">
          <div class="nu-metric-card">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <div class="sub">Full street suffix and municipality to confirm via title search</div>
          </div>
          <div class="nu-metric-card">
            <div class="label">Gross Living Area</div>
            <div class="value">7,098 sq ft</div>
            <div class="sub">Estate classification — large-format residence</div>
          </div>
          <div class="nu-metric-card">
            <div class="label">Asset Class</div>
            <div class="value">Single-Family Estate</div>
            <div class="sub">Negotiation approach: private-treaty offer</div>
          </div>
          <div class="nu-metric-card">
            <div class="label">Intended Use</div>
            <div class="value">Primary Residence</div>
            <div class="sub">Personal acquisition — not a business asset</div>
          </div>
          <div class="nu-metric-card">
            <div class="label">Target Close</div>
            <div class="value">Q3 2026</div>
            <div class="sub">Aligns with business cash-flow window</div>
          </div>
          <div class="nu-metric-card">
            <div class="label">Financing Posture</div>
            <div class="value">Cash-Preferred</div>
            <div class="sub">Conventional jumbo as backup — Renasant (Patrick Lavette)</div>
          </div>
        </div>
      </section>

      <!-- SECTION: NEGOTIATION POSTURE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span><span class="rest">Posture</span></h2>
        <p class="nu-section-subtitle">Aaron's standing position before the first price is exchanged. Posture stays the same across every phase of the deal.</p>

        <div class="nu-callout">
          <div class="tag">Guiding Principle</div>
          <p>Walk in prepared, walk in warm, walk in able to leave. A 7,098 sq ft estate is a legacy purchase — the best outcome is a fair price paid once, not an aggressive price paid with regret. Lead with respect for the seller; close with clarity on numbers.</p>
        </div>

        <div class="nu-split">
          <div class="nu-split-card leverage">
            <h4>Buyer-Side Leverage</h4>
            <ul>
              <li>Cash-preferred buyer — removes financing contingency risk for the seller</li>
              <li>No contingent sale of an existing residence to unwind the deal</li>
              <li>Flexible close window — can accelerate or extend to match the seller's next move</li>
              <li>Local, verifiable identity — 3rd-generation Birmingham principal, not a pseudo-anonymous LLC</li>
              <li>Willing to absorb cosmetic deferred maintenance without price concession being tied to every item</li>
            </ul>
          </div>
          <div class="nu-split-card risk">
            <h4>Risks to Guard Against</h4>
            <ul>
              <li>Emotional attachment inflating the price above comparable sales data</li>
              <li>Deferred structural maintenance hidden behind finishes — inspection is non-negotiable</li>
              <li>Title defects or easements (utility, access, HOA) on an older estate footprint</li>
              <li>Tax reassessment on transfer that changes carry cost materially</li>
              <li>Seller-side "second buyer" leverage attempts late in the process</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: PRICE LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Price</span><span class="rest">Ladder</span></h2>
        <p class="nu-section-subtitle">Three-point frame: where the first number lands, where the deal should settle, and where Aaron walks. Exact dollar values are set once the appraisal and three comps are in hand.</p>

        <div class="nu-ladder">
          <div class="nu-ladder-step anchor">
            <div class="tier">Opening Anchor</div>
            <div class="price">Comp Low − 8%</div>
            <div class="note">First written offer. Defensible with data, not lowball.</div>
          </div>
          <div class="nu-ladder-step target">
            <div class="tier">Target Close</div>
            <div class="price">Comp Median</div>
            <div class="note">Where Aaron is satisfied. All counter-offers aim here.</div>
          </div>
          <div class="nu-ladder-step walk">
            <div class="tier">Walk-Away</div>
            <div class="price">Comp High − 2%</div>
            <div class="note">Above this number the deal stops. No exceptions.</div>
          </div>
        </div>

        <div class="nu-notes">
          <p><strong>Comp set to pull:</strong> three closed sales within 12 months, within 2 miles, within ±15% of 7,098 sq ft, same school zone. Adjust for lot size, garage count, and any waterfront/view premium.</p>
          <p><strong>Appraisal:</strong> order from an independent appraiser Aaron has not used before — avoid any firm tied to the listing side or to the prior refinance history of the property.</p>
        </div>
      </section>

      <!-- SECTION: PHASE PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Phase</span><span class="rest">Plan</span></h2>
        <p class="nu-section-subtitle">Six phases from diligence to deed. Each phase has one exit criterion — do not advance until it is met.</p>

        <div class="nu-phase-list">
          <div class="nu-phase-badge">
            <div class="num">1</div>
            <div class="label">DILIGENCE — Order title report, pull tax history, collect three comps, order independent appraisal</div>
          </div>
          <div class="nu-phase-badge">
            <div class="num">2</div>
            <div class="label">RAPPORT — Meet the seller in person where possible, understand their "why" and their timeline before any number is spoken</div>
          </div>
          <div class="nu-phase-badge">
            <div class="num">3</div>
            <div class="label">OPENING OFFER — Written, signed, with proof of funds attached, 72-hour expiration</div>
          </div>
          <div class="nu-phase-badge">
            <div class="num">4</div>
            <div class="label">COUNTER CYCLE — No more than three exchanges before a decision; after the third, close or walk</div>
          </div>
          <div class="nu-phase-badge">
            <div class="num">5</div>
            <div class="label">INSPECTION &amp; FINAL — Full inspection, structural walk, final price adjustment only for material defects</div>
          </div>
          <div class="nu-phase-badge">
            <div class="num">6</div>
            <div class="label">CLOSE — Attorney review of the closing package the night before, wire wire-verified by voice, deed recorded same day</div>
          </div>
        </div>
      </section>

      <!-- SECTION: ACTION ITEMS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span><span class="rest">Items</span></h2>
        <p class="nu-section-subtitle">Concrete next steps. Owner + due column keep the file accountable. Update status in-line as each item clears.</p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width: 5%;">#</th>
                <th style="width: 36%;">Action</th>
                <th style="width: 18%;">Owner</th>
                <th style="width: 18%;">Due</th>
                <th style="width: 13%;">Status</th>
                <th style="width: 10%;">Phase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Confirm full street address, municipality, parcel ID, and legal description for 4505 Buttewoods</td>
                <td>Aaron</td>
                <td>Week of Apr 28</td>
                <td><span class="pill pill-open">Open</span></td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Order title search and preliminary title report</td>
                <td>Closing attorney</td>
                <td>May 2</td>
                <td><span class="pill pill-wait">Queued</span></td>
                <td>1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Pull three comparable sales within 12 months, 2-mile radius, ±15% GLA</td>
                <td>Aaron</td>
                <td>May 5</td>
                <td><span class="pill pill-open">Open</span></td>
                <td>1</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Engage independent appraiser with no listing-side history on the property</td>
                <td>Aaron</td>
                <td>May 8</td>
                <td><span class="pill pill-wait">Queued</span></td>
                <td>1</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Confirm cash-at-close availability and cut-off; obtain standby jumbo quote from Patrick Lavette at Renasant as fallback</td>
                <td>Aaron</td>
                <td>May 10</td>
                <td><span class="pill pill-open">Open</span></td>
                <td>1</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Understand seller's circumstances and timeline — why selling, when must it close, next home already lined up?</td>
                <td>Aaron</td>
                <td>Pre-offer</td>
                <td><span class="pill pill-open">Open</span></td>
                <td>2</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Draft opening offer letter — price, terms, contingencies, 72-hour expiration, proof-of-funds attached</td>
                <td>Aaron + attorney</td>
                <td>After Phase 1</td>
                <td><span class="pill pill-wait">Queued</span></td>
                <td>3</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Schedule whole-house inspection and structural walk-through, contingent on accepted offer</td>
                <td>Aaron</td>
                <td>Post-accept</td>
                <td><span class="pill pill-wait">Queued</span></td>
                <td>5</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Verify wiring instructions by voice with the title company before any funds move</td>
                <td>Aaron</td>
                <td>Day before close</td>
                <td><span class="pill pill-wait">Queued</span></td>
                <td>6</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Record deed same day; update insurance, homestead filing, and utility transfers</td>
                <td>Aaron + attorney</td>
                <td>Close day</td>
                <td><span class="pill pill-wait">Queued</span></td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION: DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Diligence</span><span class="rest">Checklist</span></h2>
        <p class="nu-section-subtitle">Check each item off before the opening offer is delivered. Anything left open is a concession Aaron cannot make later without losing ground.</p>

        <ul class="nu-checklist">
          <li>Preliminary title report reviewed; no open liens, unreleased mortgages, or mechanic's claims</li>
          <li>Easements identified — utility, access, drainage, shared driveway, encroachment on setbacks</li>
          <li>Survey reviewed against recorded plat; any fence/structure encroachments documented</li>
          <li>Tax history pulled for last 10 years; reassessment impact on transfer modeled</li>
          <li>HOA or neighborhood covenant documents obtained and reviewed for restrictions</li>
          <li>Flood zone determination pulled and elevation certificate verified if applicable</li>
          <li>Three closed comps obtained — same school zone, within 2 miles, within 12 months, ±15% GLA</li>
          <li>Independent appraisal ordered and delivered; no listing-side conflict of interest</li>
          <li>Proof of funds letter dated within 30 days, from a lender or bank relationship manager by name</li>
          <li>Whole-house inspector lined up; structural engineer on standby for any foundation concern</li>
          <li>Closing attorney engagement letter signed; scope of work defined</li>
          <li>Insurance quote obtained — binder ready to activate at close</li>
        </ul>
      </section>

      <!-- SECTION: DO NOTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Do</span><span class="rest">Nots</span></h2>
        <p class="nu-section-subtitle">Bright-line behaviors that destroy leverage or create risk. Follow these without exception.</p>

        <div class="nu-strategy-panel">
          <h3>During Negotiation</h3>
          <ul style="list-style:none; padding:0;">
            <li style="padding:8px 0 8px 26px; position:relative; font-size:0.94rem;">
              <span style="position:absolute; left:0; top:8px; color:var(--nu-danger); font-weight:900;">✕</span>
              Never share the walk-away number, the target number, or the financing ceiling with the other side
            </li>
            <li style="padding:8px 0 8px 26px; position:relative; font-size:0.94rem;">
              <span style="position:absolute; left:0; top:8px; color:var(--nu-danger); font-weight:900;">✕</span>
              Never verbally commit to a price — every number goes in writing with an expiration
            </li>
            <li style="padding:8px 0 8px 26px; position:relative; font-size:0.94rem;">
              <span style="position:absolute; left:0; top:8px; color:var(--nu-danger); font-weight:900;">✕</span>
              Never wire funds on the day of close without a voice verification of the wiring instructions
            </li>
            <li style="padding:8px 0 8px 26px; position:relative; font-size:0.94rem;">
              <span style="position:absolute; left:0; top:8px; color:var(--nu-danger); font-weight:900;">✕</span>
              Never waive inspection to "win" the deal — the inspection is the last line of defense on a 7,098 sq ft home
            </li>
            <li style="padding:8px 0 8px 26px; position:relative; font-size:0.94rem;">
              <span style="position:absolute; left:0; top:8px; color:var(--nu-danger); font-weight:900;">✕</span>
              Never let the process drag past the third counter — close at the target or walk, no middle ground
            </li>
            <li style="padding:8px 0 8px 26px; position:relative; font-size:0.94rem;">
              <span style="position:absolute; left:0; top:8px; color:var(--nu-danger); font-weight:900;">✕</span>
              Never enter the negotiation with a specific move-in date communicated to the seller — it is free leverage for them
            </li>
          </ul>
        </div>
      </section>

      <!-- SECTION: DOCUMENT CONTROL -->
      <section class="nu-section" style="margin-bottom: 0;">
        <h2 class="nu-section-title"><span class="first">Document</span><span class="rest">Control</span></h2>
        <p class="nu-section-subtitle">This is an internal strategy document. It is not a contract, a listing, or a public offer.</p>

        <div class="nu-notes">
          <p><strong>Confidentiality:</strong> Do not share this file outside of Aaron C. Norris and the retained closing attorney. It contains negotiation posture, walk-away math, and financing structure that would damage buyer leverage if disclosed to the seller or seller's representation.</p>
          <p><strong>Source:</strong> Generated from reMarkable action item — "Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods."</p>
          <p><strong>Version:</strong> 1.0 · April 21, 2026 · Norris Utilities® Autonomous Build Engine.</p>
          <p><strong>Next Review:</strong> Before the first offer is delivered, confirm that the price ladder has been populated with live comp data and the diligence checklist is complete.</p>
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
    <div class="nu-footer-meta">
      Internal Strategy Document · Confidential · Prepared April 21, 2026
    </div>
  </footer>

</body>
</html>