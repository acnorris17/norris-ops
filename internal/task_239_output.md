<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Acquisition Strategy — Norris Utilities®</title>
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
      --nu-success: #0A7A3E;
      --nu-warning: #B8860B;
      --nu-danger: #A1252C;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
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
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
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
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
    }
    .nu-doc-label {
      margin-top: 22px;
      display: inline-block;
      padding: 8px 22px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 24px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-white);
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 20%; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.028) 0%, transparent 65%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 36px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .nu-title-eyebrow {
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 14px;
    }
    .nu-title-main {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .nu-title-main span { color: var(--nu-blue); }
    .nu-title-sub {
      font-weight: 400;
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 780px;
      margin: 0 auto;
    }
    .nu-title-meta {
      margin-top: 20px;
      font-size: 0.85rem;
      color: #6b6b7a;
      letter-spacing: 0.04em;
    }

    /* PROPERTY SNAPSHOT CARD */
    .nu-snapshot {
      background: linear-gradient(135deg, #f7f9ff 0%, #eef3ff 100%);
      border: 1px solid #d4defa;
      border-left: 6px solid var(--nu-blue);
      border-radius: 10px;
      padding: 32px 36px;
      margin-bottom: 50px;
      box-shadow: 0 4px 16px rgba(0,0,51,0.06);
    }
    .nu-snapshot-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }
    .nu-snapshot-addr {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .nu-snapshot-addr span {
      display: block;
      font-weight: 400;
      font-size: 0.95rem;
      color: #666;
      margin-top: 4px;
    }
    .nu-snapshot-status {
      padding: 8px 18px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .nu-snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1px;
      background: #d4defa;
      border-radius: 6px;
      overflow: hidden;
    }
    .nu-snapshot-stat {
      background: var(--nu-white);
      padding: 16px 18px;
    }
    .nu-snapshot-stat-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #6b6b7a;
      margin-bottom: 6px;
    }
    .nu-snapshot-stat-value {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .nu-snapshot-stat-value small {
      display: block;
      font-size: 0.72rem;
      font-weight: 400;
      color: #888;
      margin-top: 3px;
      letter-spacing: 0.02em;
      text-transform: none;
    }

    /* SECTION */
    .nu-section { margin-bottom: 54px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 8px;
      color: var(--nu-dark-text);
    }
    .nu-section-title span:first-child { color: var(--nu-blue); }
    .nu-section-rule {
      width: 60px;
      height: 4px;
      background: var(--nu-cyan);
      margin-bottom: 24px;
      border-radius: 2px;
    }
    .nu-section-intro {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 26px;
      max-width: 860px;
    }

    /* STRATEGY GRID */
    .nu-strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }
    .nu-strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 26px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s, box-shadow 0.2s;
      position: relative;
      overflow: hidden;
    }
    .nu-strategy-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
    }
    .nu-strategy-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0,0,51,0.1);
    }
    .nu-strategy-num {
      display: inline-block;
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 2.4rem;
      color: var(--nu-cyan);
      line-height: 1;
      margin-bottom: 6px;
    }
    .nu-strategy-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .nu-strategy-body {
      font-size: 0.93rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* OFFER TABLE */
    .nu-offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-offer-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-offer-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .nu-offer-table td {
      padding: 16px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-offer-table tbody tr:last-child td { border-bottom: none; }
    .nu-offer-table tbody tr:nth-child(even) { background: #fafbfd; }
    .nu-offer-scenario {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.95rem;
    }
    .nu-offer-amount {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      white-space: nowrap;
    }
    .nu-badge-pill {
      display: inline-block;
      padding: 3px 10px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 12px;
      white-space: nowrap;
    }
    .nu-pill-aggressive { background: #fdecee; color: var(--nu-danger); }
    .nu-pill-target { background: #fff6e0; color: var(--nu-warning); }
    .nu-pill-walk { background: #e4f3ea; color: var(--nu-success); }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 14px;
    }
    .nu-checklist li {
      display: flex;
      gap: 14px;
      padding: 16px 18px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border-left: 4px solid var(--nu-blue);
    }
    .nu-check-box {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
    }
    .nu-check-text {
      font-size: 0.93rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .nu-check-text strong {
      display: block;
      font-weight: 900;
      margin-bottom: 2px;
      font-size: 0.98rem;
    }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 34px;
      margin-top: 10px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 6px;
      bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .nu-timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .nu-timeline-item:last-child { padding-bottom: 0; }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -31px;
      top: 4px;
      width: 16px;
      height: 16px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .nu-timeline-phase {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 3px;
    }
    .nu-timeline-action {
      font-weight: 700;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-timeline-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* ANALYSIS BOX */
    .nu-analysis {
      background: var(--nu-navy);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 36px 40px;
      margin-top: 10px;
      background-image: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
    }
    .nu-analysis-title {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .nu-analysis-rule {
      width: 40px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 20px;
      border-radius: 2px;
    }
    .nu-analysis-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
    .nu-analysis-col h4 {
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 12px;
    }
    .nu-analysis-col ul {
      list-style: none;
      padding: 0;
    }
    .nu-analysis-col li {
      padding: 8px 0 8px 20px;
      font-size: 0.93rem;
      line-height: 1.55;
      color: rgba(255,255,255,0.88);
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .nu-analysis-col li:last-child { border-bottom: none; }
    .nu-analysis-col li::before {
      content: '•';
      position: absolute;
      left: 0;
      top: 8px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #fffbe6 0%, #fff3c7 100%);
      border-left: 6px solid var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 8px;
      margin-top: 30px;
    }
    .nu-callout-label {
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-accent-gold);
      margin-bottom: 6px;
    }
    .nu-callout p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }

    /* SCRIPT / TALKING POINTS */
    .nu-script {
      background: #f8f9ff;
      border: 1px solid #dbe2fb;
      border-radius: 10px;
      padding: 28px 32px;
    }
    .nu-script-quote {
      border-left: 4px solid var(--nu-cyan);
      padding: 4px 0 4px 18px;
      margin-bottom: 18px;
      font-size: 0.98rem;
      font-style: italic;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }
    .nu-script-quote:last-child { margin-bottom: 0; }
    .nu-script-quote-label {
      display: block;
      font-style: normal;
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }

    /* SIGN-OFF */
    .nu-signoff {
      margin-top: 60px;
      padding-top: 32px;
      border-top: 3px solid var(--nu-medium-gray);
      text-align: center;
      font-size: 0.88rem;
      color: #6b6b7a;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
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
    .nu-footer-small {
      margin-top: 18px;
      font-size: 0.72rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.06em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-container { padding: 40px 20px; }
      .nu-title-main { font-size: 1.9rem; }
      .nu-snapshot { padding: 24px 22px; }
      .nu-snapshot-addr { font-size: 1.3rem; }
      .nu-analysis { padding: 26px 22px; }
      .nu-analysis-grid { grid-template-columns: 1fr; gap: 20px; }
      .nu-script { padding: 22px 20px; }
      .nu-offer-table th, .nu-offer-table td { padding: 12px 12px; font-size: 0.85rem; }
    }

    @media print {
      body { background: #fff; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-strategy-card, .nu-snapshot, .nu-analysis, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Private Acquisition Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-title-block">
        <div class="nu-title-eyebrow">Confidential — Aaron C. Norris</div>
        <h1 class="nu-title-main">4505 Buttewoods <span>Acquisition Strategy</span></h1>
        <p class="nu-title-sub">Negotiation playbook for the 7,098 sq ft estate at 4505 Buttewoods — structured offer framework, timeline, talking points, and decision framework.</p>
        <div class="nu-title-meta">Prepared 2026-04-22 &nbsp;·&nbsp; Source: reMarkable action item &nbsp;·&nbsp; Classification: Private</div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-snapshot">
        <div class="nu-snapshot-header">
          <div>
            <div class="nu-snapshot-addr">
              4505 Buttewoods Estate
              <span>Target Property — Private Residential Acquisition</span>
            </div>
          </div>
          <div class="nu-snapshot-status">Active — Negotiation Phase</div>
        </div>
        <div class="nu-snapshot-grid">
          <div class="nu-snapshot-stat">
            <div class="nu-snapshot-stat-label">Living Area</div>
            <div class="nu-snapshot-stat-value">7,098<small>Square Feet</small></div>
          </div>
          <div class="nu-snapshot-stat">
            <div class="nu-snapshot-stat-label">Address</div>
            <div class="nu-snapshot-stat-value">4505<small>Buttewoods</small></div>
          </div>
          <div class="nu-snapshot-stat">
            <div class="nu-snapshot-stat-label">Stage</div>
            <div class="nu-snapshot-stat-value">Negotiate<small>Pre-Offer Prep</small></div>
          </div>
          <div class="nu-snapshot-stat">
            <div class="nu-snapshot-stat-label">Lead</div>
            <div class="nu-snapshot-stat-value">ACN<small>Principal Buyer</small></div>
          </div>
          <div class="nu-snapshot-stat">
            <div class="nu-snapshot-stat-label">Target Close</div>
            <div class="nu-snapshot-stat-value">Q2–Q3<small>2026</small></div>
          </div>
        </div>
      </section>

      <!-- STRATEGY PILLARS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Negotiation</span> <span>Strategy — Four Pillars</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">A disciplined acquisition starts with clear pillars. The goal is not the lowest possible price — it is the right price, under terms that preserve cash flow and close certainty for Norris Utilities® operating capital.</p>

        <div class="nu-strategy-grid">
          <div class="nu-strategy-card">
            <div class="nu-strategy-num">01</div>
            <div class="nu-strategy-title">Know the Comps Cold</div>
            <p class="nu-strategy-body">Pull three arm's-length sales within one mile and twelve months. Establish a defensible price-per-square-foot band. Anchor every counter to comps, not emotion.</p>
          </div>
          <div class="nu-strategy-card">
            <div class="nu-strategy-num">02</div>
            <div class="nu-strategy-title">Lead with Strength</div>
            <p class="nu-strategy-body">Proof of funds in hand before the first number is exchanged. Sellers discount the offer from an unvetted buyer. Walk in credible — walk out with leverage.</p>
          </div>
          <div class="nu-strategy-card">
            <div class="nu-strategy-num">03</div>
            <div class="nu-strategy-title">Anchor Below Target</div>
            <p class="nu-strategy-body">Opening offer sits 10–12% under target. Never open at target. The sellers expect to counter — give them room to feel the win while protecting ours.</p>
          </div>
          <div class="nu-strategy-card">
            <div class="nu-strategy-num">04</div>
            <div class="nu-strategy-title">Walk-Away Number</div>
            <p class="nu-strategy-body">The walk-away is written down before the first conversation. Not spoken aloud, not negotiated against. When the line moves past it — we leave, politely, and stay cordial.</p>
          </div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Offer</span> <span>Ladder &amp; Counter Framework</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">Three scenarios — aggressive opener, realistic target, and walk-away line. Every counter from the seller gets measured against this ladder before a response is issued. No counter is made in the room.</p>

        <table class="nu-offer-table">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Position</th>
              <th>Action Rule</th>
              <th>Terms Lever</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="nu-offer-scenario">Opening Offer</td>
              <td><span class="nu-badge-pill nu-pill-aggressive">Aggressive</span><div class="nu-offer-amount" style="margin-top:6px;">10–12% below market</div></td>
              <td>Written offer only. 7-day expiration. Earnest money at 1%.</td>
              <td>As-is clause, 30-day inspection, flexible close date.</td>
            </tr>
            <tr>
              <td class="nu-offer-scenario">Target Landing</td>
              <td><span class="nu-badge-pill nu-pill-target">Target</span><div class="nu-offer-amount" style="margin-top:6px;">At or 3% below market</div></td>
              <td>Accept if total dollars land here after repairs credit.</td>
              <td>Standard financing contingency, 45-day close.</td>
            </tr>
            <tr>
              <td class="nu-offer-scenario">Walk-Away Line</td>
              <td><span class="nu-badge-pill nu-pill-walk">Hard Stop</span><div class="nu-offer-amount" style="margin-top:6px;">5% above market</div></td>
              <td>Thank them, leave the door open, do not counter again.</td>
              <td>Irrelevant — the math stops working above this line.</td>
            </tr>
          </tbody>
        </table>

        <div class="nu-callout">
          <div class="nu-callout-label">Discipline Note</div>
          <p>The dollar amounts in this ladder are placeholders tied to market comps yet to be pulled. Before the first offer goes out, the comp band must be confirmed in writing and the three tiers filled in with firm numbers. An offer without a prepared walk-away line is not a negotiation — it is an emotional event.</p>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Due</span> <span>Diligence Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">Ten-item discipline list. Every item is completed before the offer is signed — not after. Each unresolved item is a potential credit at the closing table or a reason to walk.</p>

        <ul class="nu-checklist">
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Proof of Funds Letter</strong>
              Current within 30 days, on bank letterhead, blind amount (no account number).
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Pre-Approval (if financed)</strong>
              Local lender preferred. Tight timeline, no last-minute surprises.
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Comp Pull — 1 mile / 12 months</strong>
              Three closed arm's-length sales, adjusted for sq ft, lot, and condition.
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Title Pre-Check</strong>
              Run chain of title for liens, easements, encroachments before offer.
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Property Tax History</strong>
              Last 5 years. Flag any assessment challenges or exemptions that lapse on sale.
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Insurance Pre-Quote</strong>
              HO-3 estimate plus flood zone verification. Big houses, big premiums.
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Inspector Scheduled</strong>
              Licensed, at-large estate experience. HVAC, roof, foundation, pool, septic if applicable.
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Seller Disclosures Reviewed</strong>
              Read every line twice. Past repairs, insurance claims, disputes, HOA history.
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Survey Ordered</strong>
              Recent survey preferred. If older than 5 years, new survey is non-negotiable.
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Attorney On Standby</strong>
              Real estate attorney briefed. No contract signed without legal read.
            </div>
          </li>
        </ul>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Negotiation</span> <span>Timeline</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">Target-path timeline from first conversation to closing. Each phase has a hard gate — do not advance to the next phase until the current one is complete.</p>

        <div class="nu-timeline">
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Week 0 — Preparation</div>
            <div class="nu-timeline-action">Build the file before touching the seller</div>
            <div class="nu-timeline-detail">Comps pulled. Proof of funds in hand. Walk-away line written down and sealed. Attorney briefed. Opening number agreed with spouse/partner before any outbound contact.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Week 1 — First Contact</div>
            <div class="nu-timeline-action">Warm, direct, no price</div>
            <div class="nu-timeline-detail">In-person walk-through if possible. Ask about seller's timeline and motivation — not price. The best leverage is learning why they are selling before they learn how much we have.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Week 2 — Written Opening Offer</div>
            <div class="nu-timeline-action">Offer in writing, 7-day expiration</div>
            <div class="nu-timeline-detail">Hand-delivered if possible, with proof of funds attached. Anchor 10–12% below market with clean terms. Written offers are taken seriously — verbal numbers die in 48 hours.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Week 3 — Counter &amp; Close the Gap</div>
            <div class="nu-timeline-action">Move to target, not past it</div>
            <div class="nu-timeline-detail">Take 24 hours on any counter — never respond same-day. Each move smaller than the last (signals approaching the line). Trade terms for price: accept their number if they take our inspection window.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Weeks 4–6 — Under Contract, Inspection</div>
            <div class="nu-timeline-action">Inspection period is the second negotiation</div>
            <div class="nu-timeline-detail">Full inspection report. Material findings convert to either a price credit or repairs completed before closing. Do not accept a "we'll credit at closing" without a firm dollar number and scope.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Weeks 7–8 — Financing, Title, Close</div>
            <div class="nu-timeline-action">Protect the close date</div>
            <div class="nu-timeline-detail">Weekly check-ins with lender and title. Final walk-through 24 hours before close. Wire instructions verified by phone call to a known number — never by email.</div>
          </div>
        </div>
      </section>

      <!-- ANALYSIS: LEVERAGE & RISKS -->
      <section class="nu-section">
        <div class="nu-analysis">
          <div class="nu-analysis-title">Leverage &amp; Risk Read</div>
          <div class="nu-analysis-rule"></div>
          <div class="nu-analysis-grid">
            <div class="nu-analysis-col">
              <h4>Our Leverage</h4>
              <ul>
                <li>Cash-capable buyer (proof of funds letter in hand)</li>
                <li>Flexible close date — seller pain points we can absorb</li>
                <li>Willing to buy as-is for the right price</li>
                <li>Local buyer — no out-of-state financing risk</li>
                <li>Patient — no deadline forcing our hand</li>
              </ul>
            </div>
            <div class="nu-analysis-col">
              <h4>Risk Factors to Watch</h4>
              <ul>
                <li>7,098 sq ft carries high holding cost if market softens</li>
                <li>Emotional attachment — walk-away line exists for a reason</li>
                <li>Property tax reassessment on sale — confirm new basis</li>
                <li>Competing offers in hot pockets — timing is leverage</li>
                <li>Financing contingency risk if lender appraises under</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Talking</span> <span>Points — Conversation Anchors</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">Phrases prepared in advance for the first seller conversation. Warmth plus discipline. Never explain our number. Never apologize for a low offer. Let silence do the work.</p>

        <div class="nu-script">
          <div class="nu-script-quote">
            <span class="nu-script-quote-label">Opening</span>
            "I appreciate you taking the time — this is a beautiful property. Before we talk numbers, can you share a bit about your timeline and what would make this transition easiest for your family?"
          </div>
          <div class="nu-script-quote">
            <span class="nu-script-quote-label">Anchoring</span>
            "Based on the comps we've pulled and the condition profile, the number I can put on paper today is [X]. I know that may be below where you're starting. I'd rather make you a real offer than a polite one."
          </div>
          <div class="nu-script-quote">
            <span class="nu-script-quote-label">When Pressed</span>
            "I want to get this done, and I can close quickly. The price reflects what the market supports — I can show you the comps. What would it take on the terms side to make this work for you?"
          </div>
          <div class="nu-script-quote">
            <span class="nu-script-quote-label">Walking Away</span>
            "I understand — and I respect where you are on price. If anything changes, I'm a phone call away. Either way, thank you for having me in your home."
          </div>
        </div>
      </section>

      <!-- DECISION FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Before</span> <span>We Sign Anything</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">Five-question decision gate. If any answer is "no" or "unknown," the pen stops moving until it becomes a confident "yes."</p>

        <ul class="nu-checklist">
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Does the total dollar figure sit at or below the target line?</strong>
              Purchase price + concessions + immediate repairs must land inside the target band.
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Have all ten due diligence items been cleared?</strong>
              No unchecked boxes on the list. No verbal "we'll handle it later."
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Has the contract been read by the attorney?</strong>
              Every page. Every rider. Every blank filled or struck through.
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Is the cash flow plan intact at Norris Utilities®?</strong>
              Personal acquisition cannot impair operating capital. This is non-negotiable.
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-text">
              <strong>Would I be comfortable if the market dropped 15% tomorrow?</strong>
              If the answer is "only barely," the price is too high. Revise or walk.
            </div>
          </li>
        </ul>
      </section>

      <!-- SIGN-OFF -->
      <div class="nu-signoff">
        Private acquisition brief prepared for Aaron C. Norris. Contents confidential. Revise before each seller conversation.<br>
        This document does not constitute legal, financial, or real estate advice — consult licensed counsel before executing any agreement.
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
    <div class="nu-footer-small">Private document — Acquisition Strategy — 2026-04-22</div>
  </footer>

</body>
</html>