<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --nu-success: #2E7D32;
      --nu-warning: #E65100;
      --nu-danger: #C62828;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px; height: 70px;
      margin: 0 auto 14px;
      fill: var(--nu-white);
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ TITLE BAR ══ */
    .nu-title-bar {
      background: var(--nu-white);
      padding: 50px 40px 30px;
      text-align: center;
      border-bottom: 3px solid var(--nu-cyan);
      position: relative;
    }
    .nu-title-bar::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-title-bar > * { position: relative; z-index: 1; }
    .nu-eyebrow {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      background: var(--nu-navy);
      padding: 6px 16px;
      border-radius: 3px;
      margin-bottom: 18px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-page-title span { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
    }
    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* ══ PROPERTY SNAPSHOT GRID ══ */
    .nu-stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .nu-stat-card {
      background: var(--nu-white);
      padding: 22px 20px;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      opacity: 0.7;
      margin-bottom: 6px;
    }
    .nu-stat-value {
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .nu-stat-sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      opacity: 0.75;
    }

    /* ══ SECTIONS ══ */
    .nu-section {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 36px 36px 32px;
      margin-bottom: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 4px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-kicker {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      opacity: 0.75;
      margin-bottom: 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      padding-bottom: 14px;
    }

    /* ══ DETAIL ROWS ══ */
    .nu-detail-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px 32px;
    }
    .nu-detail-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 10px 0;
      border-bottom: 1px dotted var(--nu-medium-gray);
    }
    .nu-detail-label {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.92rem;
    }
    .nu-detail-value {
      color: var(--nu-body-text);
      font-size: 0.92rem;
      text-align: right;
    }

    /* ══ BADGES ══ */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 16px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      margin-right: 8px;
      margin-bottom: 8px;
    }
    .nu-badge-status {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 3px;
    }
    .nu-badge-status.planning { background: #FFF3E0; color: var(--nu-warning); }
    .nu-badge-status.priority { background: #FFEBEE; color: var(--nu-danger); }
    .nu-badge-status.confidential { background: var(--nu-navy); color: var(--nu-cyan); }

    /* ══ PHASE TIMELINE ══ */
    .nu-phase-list {
      list-style: none;
      counter-reset: phase;
    }
    .nu-phase-item {
      counter-increment: phase;
      position: relative;
      padding: 18px 20px 18px 70px;
      margin-bottom: 12px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 0 6px 6px 0;
    }
    .nu-phase-item::before {
      content: counter(phase);
      position: absolute;
      left: 18px;
      top: 18px;
      width: 36px;
      height: 36px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nu-phase-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-phase-timing {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-phase-desc {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* ══ PRICING TABLE ══ */
    .nu-price-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    .nu-price-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-price-table th:last-child,
    .nu-price-table td:last-child { text-align: right; }
    .nu-price-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
    }
    .nu-price-table tr:nth-child(even) td { background: #FAFAFC; }
    .nu-price-table tr.total-row td {
      background: #EFF3FF !important;
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-blue);
      border-top: 2px solid var(--nu-blue);
      border-bottom: none;
    }
    .nu-price-table tr.subtotal-row td {
      font-weight: 700;
      background: #F5F5F7 !important;
    }

    /* ══ CALLOUT ══ */
    .nu-callout {
      background: linear-gradient(135deg, #EFF3FF 0%, #E6F7FF 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 0 8px 8px 0;
      margin: 20px 0;
    }
    .nu-callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-callout p { font-size: 0.93rem; color: var(--nu-dark-text); }
    .nu-callout.warning {
      background: linear-gradient(135deg, #FFF8E1 0%, #FFF3E0 100%);
      border-left-color: var(--nu-warning);
    }
    .nu-callout.warning .nu-callout-title { color: var(--nu-warning); }

    /* ══ CHECK LIST ══ */
    .nu-checklist { list-style: none; margin-top: 8px; }
    .nu-checklist li {
      position: relative;
      padding: 8px 8px 8px 32px;
      font-size: 0.93rem;
      border-bottom: 1px dotted var(--nu-medium-gray);
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 4px;
      top: 12px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .nu-checklist li:last-child { border-bottom: none; }

    /* ══ NEGOTIATION TIERS ══ */
    .nu-tier-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 10px;
    }
    .nu-tier-card {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 20px;
      text-align: center;
      position: relative;
    }
    .nu-tier-card.target {
      border-color: var(--nu-blue);
      background: linear-gradient(180deg, #F0F4FF 0%, var(--nu-white) 100%);
      box-shadow: 0 4px 16px rgba(0,0,255,0.08);
    }
    .nu-tier-card.target::before {
      content: 'TARGET';
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      padding: 4px 14px;
      border-radius: 3px;
    }
    .nu-tier-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      opacity: 0.8;
      margin-bottom: 8px;
    }
    .nu-tier-price {
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-tier-card.target .nu-tier-price { color: var(--nu-blue); }
    .nu-tier-ppsf {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      opacity: 0.75;
    }

    /* ══ TWO COL ══ */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    /* ══ CONTACTS ══ */
    .nu-contact-card {
      background: var(--nu-light-gray);
      padding: 16px 18px;
      border-radius: 6px;
      border-left: 3px solid var(--nu-cyan);
      margin-bottom: 10px;
    }
    .nu-contact-role {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }
    .nu-contact-name {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
    }
    .nu-contact-detail {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 45px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 14px auto;
      opacity: 0.6;
    }
    .nu-footer-fine {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      margin-top: 14px;
      letter-spacing: 0.02em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .nu-detail-grid { grid-template-columns: 1fr; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-tier-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 50px 22px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-title-bar, .nu-section { padding-left: 22px; padding-right: 22px; }
      .nu-section { padding-top: 26px; padding-bottom: 22px; }
      .nu-container { padding: 30px 18px 50px; }
      .nu-badge { clip-path: none; border-radius: 6px; }
      .nu-detail-row { flex-direction: column; align-items: flex-start; gap: 2px; }
      .nu-detail-value { text-align: left; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- TITLE BAR -->
  <section class="nu-title-bar">
    <div class="nu-eyebrow">Confidential Action Plan</div>
    <h1 class="nu-page-title">Estate Acquisition <span>— 4505 Buttewoods</span></h1>
    <p class="nu-page-subtitle">Negotiation strategy for the purchase of a 7,098 sq ft private estate. Prepared for Aaron C. Norris, Founder &amp; CEO, Norris Utilities®.</p>
  </section>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- STATUS BADGES -->
      <div style="margin-bottom: 24px; text-align: center;">
        <span class="nu-badge-status priority">Personal — High Priority</span>
        <span class="nu-badge-status confidential">Confidential</span>
        <span class="nu-badge-status planning">Pre-Offer Phase</span>
      </div>

      <!-- SNAPSHOT -->
      <div class="nu-stats-grid">
        <div class="nu-stat-card">
          <div class="nu-stat-label">Address</div>
          <div class="nu-stat-value" style="font-size: 1.15rem;">4505 Buttewoods</div>
          <div class="nu-stat-sub">Residential estate property</div>
        </div>
        <div class="nu-stat-card">
          <div class="nu-stat-label">Heated Square Footage</div>
          <div class="nu-stat-value">7,098 sq ft</div>
          <div class="nu-stat-sub">Estate-class residence</div>
        </div>
        <div class="nu-stat-card">
          <div class="nu-stat-label">Transaction Type</div>
          <div class="nu-stat-value" style="font-size: 1.15rem;">Negotiated Purchase</div>
          <div class="nu-stat-sub">Direct owner engagement</div>
        </div>
        <div class="nu-stat-card">
          <div class="nu-stat-label">Action Source</div>
          <div class="nu-stat-value" style="font-size: 1.15rem;">reMarkable</div>
          <div class="nu-stat-sub">Logged 2026-04-22</div>
        </div>
      </div>

      <!-- DEAL OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Deal</span> <span class="rest">Objective</span></h2>
        <div class="nu-section-kicker">What success looks like for this acquisition</div>

        <p style="margin-bottom: 14px;">Acquire the 7,098 sq ft estate at 4505 Buttewoods at a price and on terms that protect long-term equity, preserve liquidity needed to run Norris Utilities®, and position the home as a multi-generational asset consistent with A Legacy of Commitment®.</p>

        <div class="nu-callout">
          <div class="nu-callout-title">Primary Win Conditions</div>
          <p>• Purchase price at or below appraised value.<br>
          • Seller concessions on closing costs or pre-close repairs.<br>
          • Flexible closing window to align with business cash flow.<br>
          • Clean title, clean survey, no hidden encumbrances.</p>
        </div>

        <div class="nu-callout warning">
          <div class="nu-callout-title">Walk-Away Triggers</div>
          <p>• Price materially above appraisal with no concessions.<br>
          • Structural, foundation, or water intrusion issues the seller will not cure.<br>
          • Title defects, unresolved liens, or easement conflicts.<br>
          • Seller refuses independent inspection or appraisal contingency.</p>
        </div>
      </section>

      <!-- PROPERTY INTEL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Intelligence &amp; Due Diligence</span></h2>
        <div class="nu-section-kicker">Information to gather before the first formal offer</div>

        <div class="nu-detail-grid">
          <div class="nu-detail-row"><span class="nu-detail-label">Subject Property</span><span class="nu-detail-value">4505 Buttewoods</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Heated Area</span><span class="nu-detail-value">7,098 sq ft</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Ownership History</span><span class="nu-detail-value">Pull deed chain — county records</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Current Assessment</span><span class="nu-detail-value">Confirm with county assessor</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Most Recent Sale</span><span class="nu-detail-value">Research prior transfer price</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Tax Record</span><span class="nu-detail-value">Last 3 years — verify current</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Mortgages / Liens</span><span class="nu-detail-value">Title search required</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Easements / HOA</span><span class="nu-detail-value">Review covenants &amp; plat</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Flood Zone Status</span><span class="nu-detail-value">FEMA map verification</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Comparable Sales</span><span class="nu-detail-value">3–5 comps, last 12 months</span></div>
        </div>
      </section>

      <!-- NEGOTIATION TIERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Strategy — Anchor, Target, Ceiling</span></h2>
        <div class="nu-section-kicker">Three-price framework. Firm numbers locked after appraisal &amp; comps.</div>

        <div class="nu-tier-grid">
          <div class="nu-tier-card">
            <div class="nu-tier-label">Anchor Offer</div>
            <div class="nu-tier-price">~85%</div>
            <div class="nu-tier-ppsf">of appraised value<br>Opens negotiation; must include rationale</div>
          </div>
          <div class="nu-tier-card target">
            <div class="nu-tier-label">Target Price</div>
            <div class="nu-tier-price">~92%</div>
            <div class="nu-tier-ppsf">of appraised value<br>Aaron's true buy zone</div>
          </div>
          <div class="nu-tier-card">
            <div class="nu-tier-label">Ceiling</div>
            <div class="nu-tier-price">100%</div>
            <div class="nu-tier-ppsf">of appraised value<br>Hard walk-away above this line</div>
          </div>
        </div>

        <div class="nu-callout" style="margin-top: 24px;">
          <div class="nu-callout-title">How To Use This Framework</div>
          <p>Replace percentages with dollar figures once the appraisal comes back. Never disclose the target or ceiling to the seller's side. Anchor must be defensible — accompanied by two comps and at least one specific condition concern (roof age, HVAC, water issue, etc.) so it reads as reasoned, not insulting.</p>
        </div>
      </section>

      <!-- PHASE TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Roadmap</span></h2>
        <div class="nu-section-kicker">Sequential phases from first contact to closing</div>

        <ul class="nu-phase-list">
          <li class="nu-phase-item">
            <div class="nu-phase-timing">Phase 1 — Week 1</div>
            <div class="nu-phase-title">Intelligence &amp; Comps</div>
            <div class="nu-phase-desc">Pull deed history, tax records, prior sale, and 3–5 comparable sales within the last 12 months. Confirm heated sq ft on record matches the 7,098 figure. Establish defensible price-per-sq-ft range.</div>
          </li>
          <li class="nu-phase-item">
            <div class="nu-phase-timing">Phase 2 — Week 1–2</div>
            <div class="nu-phase-title">Seller Motivation Read</div>
            <div class="nu-phase-desc">Identify why the owner is selling: relocation, estate, downsizing, distress. Motivation determines leverage. Approach via listing agent if listed, or direct letter if off-market.</div>
          </li>
          <li class="nu-phase-item">
            <div class="nu-phase-timing">Phase 3 — Week 2</div>
            <div class="nu-phase-title">Financing Pre-Position</div>
            <div class="nu-phase-desc">Secure written pre-approval from Renasant Bank (Patrick Lavette) at target loan amount. A firm pre-approval letter accompanies every offer; it signals seriousness and shortens seller consideration time.</div>
          </li>
          <li class="nu-phase-item">
            <div class="nu-phase-timing">Phase 4 — Week 2–3</div>
            <div class="nu-phase-title">Anchor Offer Submitted</div>
            <div class="nu-phase-desc">Written offer at anchor price with earnest money, contingencies for inspection, appraisal, and clean title. Request 45–60 day close to protect business cash flow and allow full due diligence.</div>
          </li>
          <li class="nu-phase-item">
            <div class="nu-phase-timing">Phase 5 — Week 3–4</div>
            <div class="nu-phase-title">Counter &amp; Move To Target</div>
            <div class="nu-phase-desc">Expect seller counter. Move incrementally — never jump to ceiling. Each concession from Norris side requires a concession from seller: price, closing costs, repairs, or closing date. No free moves.</div>
          </li>
          <li class="nu-phase-item">
            <div class="nu-phase-timing">Phase 6 — Week 4–6</div>
            <div class="nu-phase-title">Inspection &amp; Appraisal</div>
            <div class="nu-phase-desc">Full home inspection, foundation, roof, HVAC, septic/sewer, well if applicable, water intrusion survey, and bank-ordered appraisal. Inspection findings become a second negotiation lever — use them.</div>
          </li>
          <li class="nu-phase-item">
            <div class="nu-phase-timing">Phase 7 — Week 6–8</div>
            <div class="nu-phase-title">Title, Survey, Close</div>
            <div class="nu-phase-desc">Title commitment, boundary survey, final walkthrough 24–48 hours before closing. Funds wired per bank instructions only — verified by phone. Keys, deed recorded, transaction closed.</div>
          </li>
        </ul>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Points In Norris' Favor</span></h2>
        <div class="nu-section-kicker">Strengths to emphasize during negotiation</div>

        <div class="nu-two-col">
          <div>
            <div class="nu-badge">
              <svg class="nu-badge-icon" style="width:22px;height:22px;margin-right:8px;fill:var(--nu-cyan);vertical-align:middle;" viewBox="0 0 24 24"><path d="M12 2L2 7v7c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7L12 2z"/></svg>
              QUALIFIED BUYER
            </div>
            <p style="font-size: 0.92rem; margin-bottom: 18px;">Strong banking relationship, pre-approval in hand, established Alabama business ownership. Not a speculative investor.</p>

            <div class="nu-badge">
              <svg class="nu-badge-icon" style="width:22px;height:22px;margin-right:8px;fill:var(--nu-cyan);vertical-align:middle;" viewBox="0 0 24 24"><path d="M12 2L2 7v7c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7L12 2z"/></svg>
              FAST DECISION
            </div>
            <p style="font-size: 0.92rem;">Single decision-maker on the buyer side. No committee. No spousal delay. Offers can be issued or revised within 24 hours.</p>
          </div>
          <div>
            <div class="nu-badge">
              <svg class="nu-badge-icon" style="width:22px;height:22px;margin-right:8px;fill:var(--nu-cyan);vertical-align:middle;" viewBox="0 0 24 24"><path d="M12 2L2 7v7c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7L12 2z"/></svg>
              CLEAN CONTINGENCIES
            </div>
            <p style="font-size: 0.92rem; margin-bottom: 18px;">No existing home to sell first. No buyer-side contingency chain. Seller gets a direct, uncomplicated path to close.</p>

            <div class="nu-badge">
              <svg class="nu-badge-icon" style="width:22px;height:22px;margin-right:8px;fill:var(--nu-cyan);vertical-align:middle;" viewBox="0 0 24 24"><path d="M12 2L2 7v7c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7L12 2z"/></svg>
              FLEXIBLE CLOSE
            </div>
            <p style="font-size: 0.92rem;">If the seller needs a lease-back or extended move-out, Norris can accommodate. That flexibility is often worth real dollars to sellers with relocation timing.</p>
          </div>
        </div>
      </section>

      <!-- BUDGET FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Budget</span> <span class="rest">Framework &amp; Total Cost Of Acquisition</span></h2>
        <div class="nu-section-kicker">All-in cost modeling — line items to quantify once appraisal is in</div>

        <table class="nu-price-table">
          <thead>
            <tr>
              <th>Cost Line</th>
              <th>Basis</th>
              <th>Estimate Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Purchase Price (Target)</td>
              <td>Negotiated</td>
              <td>~92% of appraised value</td>
            </tr>
            <tr>
              <td>Earnest Money Deposit</td>
              <td>Good Faith</td>
              <td>1% of purchase price</td>
            </tr>
            <tr>
              <td>Down Payment</td>
              <td>Cash at close</td>
              <td>20% of purchase price</td>
            </tr>
            <tr>
              <td>Loan Origination &amp; Bank Fees</td>
              <td>Lender</td>
              <td>Confirm with Renasant</td>
            </tr>
            <tr>
              <td>Title Insurance (Owner + Lender)</td>
              <td>Title Co.</td>
              <td>Quote at offer acceptance</td>
            </tr>
            <tr>
              <td>Appraisal Fee</td>
              <td>Lender-ordered</td>
              <td>Quoted at loan app</td>
            </tr>
            <tr>
              <td>Inspection Package</td>
              <td>Independent</td>
              <td>Home + foundation + water intrusion</td>
            </tr>
            <tr>
              <td>Boundary Survey</td>
              <td>Licensed surveyor</td>
              <td>Quote from 2 vendors</td>
            </tr>
            <tr>
              <td>Recording Fees &amp; Transfer Tax</td>
              <td>County</td>
              <td>Set by county schedule</td>
            </tr>
            <tr>
              <td>Attorney / Closing Counsel</td>
              <td>Buyer-side</td>
              <td>Flat fee</td>
            </tr>
            <tr class="subtotal-row">
              <td>First-Year Operating</td>
              <td>Property Tax + Insurance + Utilities</td>
              <td>Budget 12 months ahead</td>
            </tr>
            <tr class="total-row">
              <td colspan="2">Total Acquisition Cost Model</td>
              <td>Complete after appraisal</td>
            </tr>
          </tbody>
        </table>

        <div class="nu-callout" style="margin-top: 18px;">
          <div class="nu-callout-title">Aaron's Financial Rule</div>
          <p>This acquisition cannot impair Norris Utilities® working capital. Protect the business line of credit and keep at least 6 months of operating reserves untouched. If the deal requires tapping those reserves, restructure the down payment or walk.</p>
        </div>
      </section>

      <!-- CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Key</span> <span class="rest">Contacts &amp; Advisors</span></h2>
        <div class="nu-section-kicker">The team on Aaron's side of the transaction</div>

        <div class="nu-two-col">
          <div>
            <div class="nu-contact-card">
              <div class="nu-contact-role">Banking / Lender</div>
              <div class="nu-contact-name">Patrick Lavette</div>
              <div class="nu-contact-detail">Renasant Bank — pre-approval &amp; mortgage origination</div>
            </div>
            <div class="nu-contact-card">
              <div class="nu-contact-role">Buyer</div>
              <div class="nu-contact-name">Aaron C. Norris</div>
              <div class="nu-contact-detail">205-500-1343 · acnorris@norrisutilities.com</div>
            </div>
            <div class="nu-contact-card">
              <div class="nu-contact-role">Administrative Support</div>
              <div class="nu-contact-name">Caroline Butler (CB)</div>
              <div class="nu-contact-detail">Document routing — Aaron reviews all outbound</div>
            </div>
          </div>
          <div>
            <div class="nu-contact-card">
              <div class="nu-contact-role">To Be Engaged</div>
              <div class="nu-contact-name">Real Estate Attorney</div>
              <div class="nu-contact-detail">Buyer-side closing counsel — select before Phase 4</div>
            </div>
            <div class="nu-contact-card">
              <div class="nu-contact-role">To Be Engaged</div>
              <div class="nu-contact-name">Home Inspector</div>
              <div class="nu-contact-detail">Licensed AL inspector + specialty water intrusion</div>
            </div>
            <div class="nu-contact-card">
              <div class="nu-contact-role">To Be Engaged</div>
              <div class="nu-contact-name">Licensed Surveyor</div>
              <div class="nu-contact-detail">Boundary &amp; encroachment survey — Phase 7</div>
            </div>
          </div>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></h2>
        <div class="nu-section-kicker">Every item completed before the anchor offer goes out</div>

        <ul class="nu-checklist">
          <li>Pull deed chain and prior sale price from county records</li>
          <li>Confirm current assessed value and last three years of property taxes</li>
          <li>Verify heated square footage (7,098 sq ft) matches official record</li>
          <li>Compile 3–5 comparable sales within 12 months / same submarket</li>
          <li>Confirm FEMA flood zone and any insurance rating implications</li>
          <li>Review HOA covenants, easements, and plat for restrictions</li>
          <li>Obtain written mortgage pre-approval from Renasant Bank</li>
          <li>Determine seller motivation (listed vs. off-market, urgency)</li>
          <li>Set anchor, target, and ceiling as dollar figures (not percentages)</li>
          <li>Select buyer-side closing attorney and home inspector</li>
          <li>Draft offer letter tone — professional, specific, contingency-aware</li>
          <li>Confirm 6-month operating reserve for Norris Utilities® remains untouched</li>
        </ul>
      </section>

      <!-- COMMUNICATION DISCIPLINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Communication</span> <span class="rest">Discipline</span></h2>
        <div class="nu-section-kicker">Rules Aaron follows during the negotiation</div>

        <div class="nu-detail-grid">
          <div class="nu-detail-row"><span class="nu-detail-label">Who speaks</span><span class="nu-detail-value">Aaron only — never delegate price talk</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Channel</span><span class="nu-detail-value">Written offers; verbal follow-up</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Tone</span><span class="nu-detail-value">Warm, direct, confident, patient</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Pace</span><span class="nu-detail-value">Respond inside 24 hours; never rush</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Anchoring</span><span class="nu-detail-value">Always defensible — comps + condition</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Concessions</span><span class="nu-detail-value">Never unilateral — always matched</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Walk-away</span><span class="nu-detail-value">Quiet, respectful, on paper</span></div>
          <div class="nu-detail-row"><span class="nu-detail-label">Confidentiality</span><span class="nu-detail-value">Target price shared with no one</span></div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Steps</span></h2>
        <div class="nu-section-kicker">Action items for the next 7 days</div>

        <ul class="nu-phase-list">
          <li class="nu-phase-item">
            <div class="nu-phase-timing">Day 1–2</div>
            <div class="nu-phase-title">Pull county records on 4505 Buttewoods</div>
            <div class="nu-phase-desc">Deed chain, tax assessment, prior sale history, plat map, HOA documents if applicable.</div>
          </li>
          <li class="nu-phase-item">
            <div class="nu-phase-timing">Day 2–3</div>
            <div class="nu-phase-title">Compile comparable sales</div>
            <div class="nu-phase-desc">3–5 comps, last 12 months, same submarket, adjusted for square footage and condition.</div>
          </li>
          <li class="nu-phase-item">
            <div class="nu-phase-timing">Day 3–5</div>
            <div class="nu-phase-title">Call Patrick Lavette at Renasant</div>
            <div class="nu-phase-desc">Request written mortgage pre-approval at target loan amount. Confirm fee schedule and rate lock options.</div>
          </li>
          <li class="nu-phase-item">
            <div class="nu-phase-timing">Day 5–7</div>
            <div class="nu-phase-title">Lock anchor / target / ceiling numbers</div>
            <div class="nu-phase-desc">Convert percentages to firm dollar figures. Document in private Norris Utilities® file only. Do not share outside the buyer team.</div>
          </li>
        </ul>
      </section>

      <!-- FOOTNOTE -->
      <div style="text-align: center; padding: 20px 10px; font-size: 0.82rem; color: var(--nu-body-text); opacity: 0.7;">
        Document prepared 2026-04-22 · Internal Norris Utilities® planning record · Not for external distribution<br>
        Source: reMarkable action item logged by Aaron C. Norris
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-fine">
      Confidential personal planning document · © 2026 Norris Utilities®, LLC · All rights reserved
    </div>
  </footer>

</body>
</html>