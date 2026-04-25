<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Action Plan — 4505 Buttewoods Estate — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
    /* ══ ROOT VARIABLES ══ */
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
      --nu-warn: #C8881C;
      --nu-danger: #B0241B;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
    }

    /* ══ BASE ══ */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
      width: 78px;
      height: 78px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.78em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 22px;
      padding: 7px 18px;
      background: rgba(0,0,0,0.28);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 3px;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-white);
    }

    /* ══ CHEVRON TRANSITION (asymmetric apex ~38%) ══ */
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

    /* ══ CONTENT AREA — Ghost phoenix watermark ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 380px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 720px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, rgba(0,0,255,0.02) 45%, transparent 75%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ DOCUMENT TITLE BLOCK ══ */
    .doc-title {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 28px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .doc-eyebrow {
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 14px;
    }
    .doc-title h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.5rem;
      color: var(--nu-dark-text);
      line-height: 1.18;
      margin-bottom: 14px;
    }
    .doc-title h1 span {
      color: var(--nu-blue);
    }
    .doc-meta {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 22px;
      margin-top: 18px;
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .doc-meta-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .doc-meta-label {
      font-weight: 700;
      color: var(--nu-dark-text);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 52px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      letter-spacing: 0.01em;
      margin-bottom: 6px;
      text-transform: uppercase;
    }
    .nu-section-title .first {
      color: #0033cc;
    }
    .nu-section-rule {
      width: 56px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
      border-radius: 2px;
    }
    .nu-section-lede {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 24px;
      max-width: 820px;
    }

    /* ══ EXECUTIVE SUMMARY CALLOUT ══ */
    .exec-summary {
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 28px 32px;
      border-radius: 4px;
      margin-bottom: 52px;
    }
    .exec-summary h2 {
      font-size: 0.85rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 12px;
    }
    .exec-summary p {
      font-size: 1.04rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }
    .exec-summary strong {
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* ══ PROPERTY FACT GRID ══ */
    .fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
    }
    .fact-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      border-radius: 4px;
      padding: 20px 22px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .fact-tile:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,255,0.08);
    }
    .fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .fact-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 4px;
    }
    .fact-note {
      font-size: 0.82rem;
      color: var(--nu-body-text);
    }

    /* ══ NEGOTIATION POSTURE TABLE ══ */
    .posture-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 18px;
    }
    .posture-table th {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-size: 0.78rem;
      padding: 14px 18px;
      text-align: left;
    }
    .posture-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .posture-table tr:nth-child(even) td {
      background: #fafbfd;
    }
    .posture-table .col-anchor { font-weight: 900; color: var(--nu-blue); white-space: nowrap; }
    .posture-table .col-amount { font-weight: 700; color: var(--nu-dark-text); white-space: nowrap; }

    /* ══ STRATEGY CARDS ══ */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .strategy-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.1);
    }
    .strategy-card-num {
      position: absolute;
      top: -14px;
      left: 22px;
      width: 32px;
      height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 4px 10px rgba(0,0,255,0.35);
    }
    .strategy-card h3 {
      font-size: 1.08rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin: 6px 0 10px;
      line-height: 1.3;
    }
    .strategy-card p {
      font-size: 0.94rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }

    /* ══ ACTION CHECKLIST ══ */
    .action-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .action-item {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 18px 22px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 10px;
    }
    .action-item.priority-now { border-left-color: var(--nu-danger); }
    .action-item.priority-week { border-left-color: var(--nu-warn); }
    .action-item.priority-after { border-left-color: var(--nu-success); }

    .action-check {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-medium-gray);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .action-body { flex: 1; }
    .action-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .action-desc {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .action-tag {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-left: 10px;
      vertical-align: middle;
    }
    .tag-now { background: #fdecea; color: var(--nu-danger); }
    .tag-week { background: #fdf3e0; color: var(--nu-warn); }
    .tag-after { background: #e7f5ec; color: var(--nu-success); }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin-top: 14px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 8px;
      bottom: 8px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .timeline-step {
      position: relative;
      padding-bottom: 24px;
    }
    .timeline-step::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 4px;
      width: 16px;
      height: 16px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-day {
      font-weight: 900;
      font-size: 0.78rem;
      color: var(--nu-blue);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .timeline-desc {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ RISK / LEVERAGE GRID ══ */
    .pro-con {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .pc-box {
      padding: 22px 24px;
      border-radius: 6px;
    }
    .pc-leverage {
      background: linear-gradient(135deg, #f0fbf3 0%, #e2f5e8 100%);
      border-left: 4px solid var(--nu-success);
    }
    .pc-risk {
      background: linear-gradient(135deg, #fef6f5 0%, #fbe5e3 100%);
      border-left: 4px solid var(--nu-danger);
    }
    .pc-box h3 {
      font-size: 0.82rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .pc-leverage h3 { color: var(--nu-success); }
    .pc-risk h3 { color: var(--nu-danger); }
    .pc-box ul {
      list-style: none;
      padding: 0;
    }
    .pc-box li {
      position: relative;
      padding: 6px 0 6px 22px;
      font-size: 0.94rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .pc-box li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 14px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .pc-leverage li::before { background: var(--nu-success); }
    .pc-risk li::before { background: var(--nu-danger); }

    /* ══ SCRIPTS / TALK TRACKS ══ */
    .script-block {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 14px;
      font-size: 0.96rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
    }
    .script-label {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .script-block p { margin-bottom: 10px; }
    .script-block p:last-child { margin-bottom: 0; }
    .script-block em {
      color: var(--nu-body-text);
      font-style: italic;
    }

    /* ══ SIGNOFF ══ */
    .signoff {
      margin-top: 50px;
      padding: 30px;
      background: linear-gradient(135deg, #fafbff 0%, #f3f6ff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      text-align: center;
    }
    .signoff p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .signoff strong {
      color: var(--nu-dark-text);
      font-weight: 900;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #001188 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.94rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 18px auto;
      border-radius: 1px;
    }
    .nu-footer-fineprint {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
      margin-top: 14px;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px; }
      .doc-title h1 { font-size: 1.7rem; }
      .doc-meta { gap: 14px; font-size: 0.85rem; }
      .nu-section-title { font-size: 1.2rem; }
      .posture-table th, .posture-table td { padding: 10px 12px; font-size: 0.85rem; }
      .nu-footer { padding: 36px 22px; }
    }

    /* ══ PRINT ══ */
    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .strategy-card, .fact-tile, .action-item { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-badge">Internal Action Plan · Confidential</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION (asymmetric apex ~38%) -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOCUMENT TITLE -->
      <div class="doc-title">
        <div class="doc-eyebrow">reMarkable Action Item · Real Estate Acquisition</div>
        <h1>Negotiate Purchase: <span>4505 Buttewoods Estate</span></h1>
        <div class="doc-meta">
          <div class="doc-meta-item"><span class="doc-meta-label">Property:</span> 7,098 sq ft Estate</div>
          <div class="doc-meta-item"><span class="doc-meta-label">Address:</span> 4505 Buttewoods</div>
          <div class="doc-meta-item"><span class="doc-meta-label">Owner / Buyer:</span> Aaron C. Norris</div>
          <div class="doc-meta-item"><span class="doc-meta-label">Plan Date:</span> 2026-04-25</div>
        </div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <div class="exec-summary">
        <h2>Executive Summary</h2>
        <p>
          Action item lifted directly from the reMarkable: <strong>negotiate the purchase of the 7,098 sq ft estate at 4505 Buttewoods.</strong>
          This document is the working playbook — opening posture, fact base, leverage points, scripted talk tracks, and the day-by-day action sequence — so the negotiation runs the way Aaron runs his business: prepared, direct, and on his terms.
          Nothing leaves this file customer-facing without Aaron's review.
        </p>
      </div>

      <!-- §1 PROPERTY FACT BASE -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">PROPERTY</span> FACT BASE</div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lede">
          Locked facts from the reMarkable note. Anything marked <em>“to confirm”</em> must be verified through public records, the listing agent, or direct seller before an offer is signed — never carried as an assumption into negotiation.
        </p>

        <div class="fact-grid">
          <div class="fact-tile">
            <div class="fact-label">Address</div>
            <div class="fact-value">4505 Buttewoods</div>
            <div class="fact-note">Locked from reMarkable</div>
          </div>
          <div class="fact-tile">
            <div class="fact-label">Living Area</div>
            <div class="fact-value">7,098 sq ft</div>
            <div class="fact-note">Confirmed in note</div>
          </div>
          <div class="fact-tile">
            <div class="fact-label">Property Type</div>
            <div class="fact-value">Estate</div>
            <div class="fact-note">Higher-end, custom build assumed</div>
          </div>
          <div class="fact-tile">
            <div class="fact-label">Lot / Acreage</div>
            <div class="fact-value">To confirm</div>
            <div class="fact-note">Pull from county GIS</div>
          </div>
          <div class="fact-tile">
            <div class="fact-label">Year Built</div>
            <div class="fact-value">To confirm</div>
            <div class="fact-note">County tax record</div>
          </div>
          <div class="fact-tile">
            <div class="fact-label">Tax Appraisal</div>
            <div class="fact-value">To confirm</div>
            <div class="fact-note">Most recent assessor cycle</div>
          </div>
          <div class="fact-tile">
            <div class="fact-label">Listing Status</div>
            <div class="fact-value">To confirm</div>
            <div class="fact-note">Active / off-market / pocket</div>
          </div>
          <div class="fact-tile">
            <div class="fact-label">Current Owner</div>
            <div class="fact-value">To confirm</div>
            <div class="fact-note">Deed of record</div>
          </div>
        </div>
      </section>

      <!-- §2 NEGOTIATION POSTURE -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">NEGOTIATION</span> POSTURE &amp; ANCHORS</div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lede">
          Three numbers govern every offer: the opening anchor, the target close, and the walk-away.
          Fill the dollar columns once the comp pull and tax record are in hand. Until those are confirmed, do not share a number with the listing side.
        </p>

        <table class="posture-table">
          <thead>
            <tr>
              <th>Anchor</th>
              <th>Definition</th>
              <th>Position</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="col-anchor">Opening Offer</td>
              <td>Below appraised value, justified by comps and any deferred maintenance found in walk-through.</td>
              <td class="col-amount">Set after comps</td>
              <td>Pending CMA</td>
            </tr>
            <tr>
              <td class="col-anchor">Target Close</td>
              <td>The number we'd shake on today — pricing in clean financing and a 30-day close.</td>
              <td class="col-amount">Set after comps</td>
              <td>Pending CMA</td>
            </tr>
            <tr>
              <td class="col-anchor">Walk-Away</td>
              <td>Hard ceiling. Above this, the deal stops penciling out and we close the file.</td>
              <td class="col-amount">Set after comps</td>
              <td>Pending CMA</td>
            </tr>
            <tr>
              <td class="col-anchor">Earnest Money</td>
              <td>Show seriousness without overcommitting before inspection contingencies clear.</td>
              <td class="col-amount">1% of offer</td>
              <td>Standard</td>
            </tr>
            <tr>
              <td class="col-anchor">Closing Window</td>
              <td>Tighter close = stronger offer. Lender pre-approval needs to be in hand before this is offered.</td>
              <td class="col-amount">30 days</td>
              <td>Pending lender</td>
            </tr>
            <tr>
              <td class="col-anchor">Inspection Period</td>
              <td>Long enough for structural, septic/well, HVAC, roof, and any pool/outbuilding inspections.</td>
              <td class="col-amount">10 business days</td>
              <td>Standard</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- §3 STRATEGY -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">STRATEGY</span> — FIVE MOVES</div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lede">
          Negotiate from preparation, not from emotion. These five moves are the ones to lean on for a 7,098 sq ft estate where there are typically fewer comps and more discretionary value drivers.
        </p>

        <div class="strategy-grid">
          <div class="strategy-card">
            <div class="strategy-card-num">1</div>
            <h3>Lead with the relationship, not the offer</h3>
            <p>First meeting is fact-finding. Walk the property, listen for the seller's <em>why</em> — relocation, downsize, settlement, estate. Motivation determines what levers actually matter.</p>
          </div>
          <div class="strategy-card">
            <div class="strategy-card-num">2</div>
            <h3>Anchor with comps, not opinions</h3>
            <p>Pull three to five sold comparables in the last 12 months at 6,000–8,500 sq ft within a tight radius. Bring the print-out to the table. Numbers from paper move sellers; numbers from mouths get argued with.</p>
          </div>
          <div class="strategy-card">
            <div class="strategy-card-num">3</div>
            <h3>Trade terms for price</h3>
            <p>If the seller won't move on price, move on terms: tighter close, fewer contingencies, leaseback, taking furnishings, covering survey or title. Each concession on terms should buy a price concession in return.</p>
          </div>
          <div class="strategy-card">
            <div class="strategy-card-num">4</div>
            <h3>Use silence on purpose</h3>
            <p>After making the offer, stop talking. The next person to speak loses ground. This is especially true at this price point — sellers want validation as much as money.</p>
          </div>
          <div class="strategy-card">
            <div class="strategy-card-num">5</div>
            <h3>Keep the walk-away credible</h3>
            <p>The walk-away only works if the seller believes it. That means having a real second option lined up — even informally — and being willing to put the file down for 48 hours if pushed past the ceiling.</p>
          </div>
          <div class="strategy-card">
            <div class="strategy-card-num">6</div>
            <h3>Document everything in writing</h3>
            <p>Verbal promises evaporate at closing. Every concession, repair credit, included item, and timeline goes into the contract or an addendum signed by both parties — or it does not exist.</p>
          </div>
        </div>
      </section>

      <!-- §4 LEVERAGE / RISK -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">LEVERAGE</span> &amp; RISK MAP</div>
        <div class="nu-section-rule"></div>

        <div class="pro-con">
          <div class="pc-box pc-leverage">
            <h3>Our Leverage</h3>
            <ul>
              <li>Cash or pre-approved buyer with proof of funds in hand.</li>
              <li>No contingent home to sell — clean buyer profile.</li>
              <li>Flexibility on close date — can match the seller's relocation window.</li>
              <li>Quiet, off-market posture — no auction dynamic working against price.</li>
              <li>Local Birmingham relationships (banking, title, inspection) that can move fast.</li>
            </ul>
          </div>
          <div class="pc-box pc-risk">
            <h3>Risk Watch</h3>
            <ul>
              <li>Limited recent comps at 7,000+ sq ft can swing valuation either direction.</li>
              <li>Any unpermitted additions, septic age, or roof age could surface in inspection.</li>
              <li>Seller emotional anchor to the home — common in estates owned 10+ years.</li>
              <li>Multiple-offer scenario if the property hits MLS during negotiation.</li>
              <li>Title/lien complications on long-held estates — order title commitment early.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- §5 ACTION CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">ACTION</span> CHECKLIST</div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lede">
          Sequenced from immediate to post-offer. The red items are blockers — until each is done, no offer leaves the building.
        </p>

        <ul class="action-list">

          <li class="action-item priority-now">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Pull deed, tax record, and parcel data <span class="action-tag tag-now">Today</span></div>
              <div class="action-desc">County GIS and assessor: confirm owner of record, lot size, tax appraisal history, year built, last sale price, any liens.</div>
            </div>
          </li>

          <li class="action-item priority-now">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Order CMA — sold comps, 12 months, 6,000–8,500 sq ft <span class="action-tag tag-now">Today</span></div>
              <div class="action-desc">Three to five comps minimum. Sort by $/sq ft. This is the foundation for the opening anchor and the walk-away ceiling.</div>
            </div>
          </li>

          <li class="action-item priority-now">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Confirm financing posture with Patrick Lavette / Renasant Bank <span class="action-tag tag-now">Today</span></div>
              <div class="action-desc">Pre-approval letter at the appropriate dollar band. Cash equivalency disclosure if going cash-route. No offer goes out until this is in writing.</div>
            </div>
          </li>

          <li class="action-item priority-week">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Drive-by and exterior assessment <span class="action-tag tag-week">This Week</span></div>
              <div class="action-desc">Roof age signal, landscape grade, driveway, outbuildings, neighbor proximity, school zoning. Document with photos.</div>
            </div>
          </li>

          <li class="action-item priority-week">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">First seller / agent contact — discovery meeting <span class="action-tag tag-week">This Week</span></div>
              <div class="action-desc">Use the discovery script in §6. Goal: motivation, timeline, any prior offers, what they care about beyond price.</div>
            </div>
          </li>

          <li class="action-item priority-week">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Walk-through and visual inspection <span class="action-tag tag-week">This Week</span></div>
              <div class="action-desc">Bring a notepad. Note HVAC age plates, water heater date, roof material, any moisture/foundation tells, kitchen and bath finish levels.</div>
            </div>
          </li>

          <li class="action-item priority-week">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Set anchor numbers — opening / target / walk-away <span class="action-tag tag-week">This Week</span></div>
              <div class="action-desc">Sit with the comps and the walk-through notes, then write the three numbers down on paper. They do not change without new information.</div>
            </div>
          </li>

          <li class="action-item priority-week">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Submit written offer with letter of intent <span class="action-tag tag-week">This Week</span></div>
              <div class="action-desc">Offer + earnest money receipt + pre-approval + brief cover letter. Tight close window. Inspection contingency intact.</div>
            </div>
          </li>

          <li class="action-item priority-after">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Order title commitment and survey <span class="action-tag tag-after">Post-Offer</span></div>
              <div class="action-desc">As soon as offer is accepted. Estates often carry surprises — easements, old liens, boundary inconsistencies. Catch them early.</div>
            </div>
          </li>

          <li class="action-item priority-after">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Schedule inspection slate <span class="action-tag tag-after">Post-Offer</span></div>
              <div class="action-desc">General, structural, HVAC, roof, septic/well if applicable, termite/WDI. All inside the 10-business-day window.</div>
            </div>
          </li>

          <li class="action-item priority-after">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Re-trade if inspection findings warrant <span class="action-tag tag-after">Post-Offer</span></div>
              <div class="action-desc">Repair credits or price reduction in writing. Do not chase cosmetic items — focus on big-ticket: roof, HVAC, foundation, water intrusion, septic.</div>
            </div>
          </li>

          <li class="action-item priority-after">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Closing prep — final walk-through, wire instructions, insurance bind <span class="action-tag tag-after">Post-Offer</span></div>
              <div class="action-desc">Walk-through 24 hours before closing. Wire instructions verified by phone, never just email. Homeowners insurance bound and effective at closing.</div>
            </div>
          </li>
        </ul>
      </section>

      <!-- §6 TALK TRACKS -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">TALK</span> TRACKS</div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lede">
          Aaron's voice — direct, warm, never apologetic. Use these as starting points, not scripts read verbatim.
        </p>

        <div class="script-block">
          <div class="script-label">Discovery — first call to the listing agent or seller</div>
          <p>"Appreciate you taking the call. I'm Aaron Norris — I'm a local buyer, third-generation Birmingham, and I've been keeping an eye on 4505 Buttewoods. Before we talk numbers, I'd like to understand the property and what the seller is hoping to accomplish. Mind walking me through the timeline they're working on and what's most important to them on the back end of this — price, speed, certainty?"</p>
          <p><em>Goal: get them talking. Listen for motivation. Take notes.</em></p>
        </div>

        <div class="script-block">
          <div class="script-label">Presenting the offer</div>
          <p>"I've put together what I think is a fair, clean offer. It's backed by pre-approved financing, earnest money is in escrow, and I can close in 30 days. The number reflects the comps in the area and what the property pencils out to for a buyer who's serious about taking care of it. I'd rather give you my real number first than waste your time going back and forth."</p>
          <p><em>Then stop. Do not keep selling. Silence is the next move.</em></p>
        </div>

        <div class="script-block">
          <div class="script-label">Trading terms when price stalls</div>
          <p>"I hear where you are on price. If the seller can meet me at [target], I can do a few things on my end that may matter more than the last few thousand dollars: I can shorten the close to two weeks, I can take it as-is past the inspection items I've flagged, or I can flex on the date if they need a leaseback. What's most useful to them?"</p>
        </div>

        <div class="script-block">
          <div class="script-label">Walk-away — protective, not hostile</div>
          <p>"That number doesn't work for me on this property, and I'd rather be straight with you about that now than waste another two weeks of inspections and earnest money on a deal that won't close. If the seller's position changes, you've got my cell. Either way, I appreciate you working with me on this one."</p>
          <p><em>Walk away calmly. Do not negotiate against yourself afterward by calling back the next day.</em></p>
        </div>
      </section>

      <!-- §7 TIMELINE -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">TIMELINE</span> — IDEAL PATH</div>
        <div class="nu-section-rule"></div>

        <div class="timeline">
          <div class="timeline-step">
            <div class="timeline-day">Day 1 — 2026-04-25</div>
            <div class="timeline-title">Fact base assembled</div>
            <div class="timeline-desc">County records pulled. CMA ordered. Lender pinged.</div>
          </div>
          <div class="timeline-step">
            <div class="timeline-day">Day 2–3</div>
            <div class="timeline-title">Pre-approval and CMA in hand</div>
            <div class="timeline-desc">Anchor numbers locked on paper. Drive-by completed.</div>
          </div>
          <div class="timeline-step">
            <div class="timeline-day">Day 4–6</div>
            <div class="timeline-title">First contact, walk-through, written offer</div>
            <div class="timeline-desc">Discovery call → property tour → offer submitted with cover letter and pre-approval.</div>
          </div>
          <div class="timeline-step">
            <div class="timeline-day">Day 7–10</div>
            <div class="timeline-title">Negotiation window</div>
            <div class="timeline-desc">Counter, counter-counter, terms-for-price trades. Walk-away if pushed past ceiling.</div>
          </div>
          <div class="timeline-step">
            <div class="timeline-day">Day 11–25</div>
            <div class="timeline-title">Under contract</div>
            <div class="timeline-desc">Inspections, title commitment, survey, appraisal. Re-trade if warranted.</div>
          </div>
          <div class="timeline-step">
            <div class="timeline-day">Day 26–35</div>
            <div class="timeline-title">Close</div>
            <div class="timeline-desc">Final walk-through 24 hours prior. Funds wired. Keys in hand.</div>
          </div>
        </div>
      </section>

      <!-- §8 OPEN ITEMS -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">OPEN</span> ITEMS — AARON TO CONFIRM</div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lede">
          The note on the reMarkable specified the address and the square footage. Everything else needs to be confirmed before this plan converts to a written offer.
        </p>

        <ul class="action-list">
          <li class="action-item priority-now">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Confirm full address and county</div>
              <div class="action-desc">"Buttewoods" spelling and exact municipality — verify with county GIS or the listing record.</div>
            </div>
          </li>
          <li class="action-item priority-now">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Confirm intended use — primary residence, investment, hold-and-rent?</div>
              <div class="action-desc">Drives the financing structure (conventional vs. investor product) and the after-tax math.</div>
            </div>
          </li>
          <li class="action-item priority-now">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Confirm budget ceiling</div>
              <div class="action-desc">The walk-away number can only be set when Aaron confirms the maximum he's willing to fund all-in including closing costs and reserves.</div>
            </div>
          </li>
          <li class="action-item priority-week">
            <span class="action-check"></span>
            <div class="action-body">
              <div class="action-title">Decide on representation</div>
              <div class="action-desc">Buyer's agent vs. unrepresented. Either is workable — affects negotiation channel and commission math.</div>
            </div>
          </li>
        </ul>

        <div class="signoff">
          <p><strong>Next move:</strong> Pull the county record and order the CMA today. Once those two pieces hit the desk, the anchor numbers can be set, and this plan converts to a live offer within the week.</p>
          <p>Document maintained by the Norris Utilities® autonomous build engine — for Aaron's review only.</p>
        </div>

      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      130 Inverness Plaza #210, Birmingham, AL 35242
    </div>
    <div class="nu-footer-fineprint">
      Confidential — Internal Action Plan · Generated 2026-04-25 · Phoenix Icon® and Norris Utilities® are registered trademarks of Norris Utilities, LLC.
    </div>
  </footer>

</body>
</html>