<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-status-amber: #F59E0B;
      --nu-status-green: #10B981;
      --nu-status-red: #DC2626;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-serif: 'Playfair Display', Georgia, serif;
    }

    /* ══ BASE ══ */
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
      top: 0; left: 0; right: 0; bottom: 0;
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 18px;
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
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-serif);
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

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ PAGE HEADING BLOCK ══ */
    .page-intro {
      border-left: 6px solid var(--nu-blue);
      padding: 4px 0 4px 24px;
      margin-bottom: 36px;
    }
    .page-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .page-title {
      font-size: 2.2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .page-title em {
      color: var(--nu-blue);
      font-style: normal;
    }
    .page-meta {
      font-size: 0.95rem;
      color: #555;
      font-weight: 400;
    }

    /* ══ STATUS STRIP ══ */
    .status-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .status-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .status-tile.accent-cyan { border-top-color: var(--nu-cyan); }
    .status-tile.accent-amber { border-top-color: var(--nu-status-amber); }
    .status-tile.accent-gold { border-top-color: var(--nu-accent-gold); }
    .status-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 6px;
    }
    .status-value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .status-sub {
      font-size: 0.85rem;
      color: #555;
      margin-top: 4px;
      font-weight: 400;
    }

    /* ══ SECTION ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .nu-first {
      color: var(--nu-blue);
    }
    .nu-section-title .nu-rest {
      color: var(--nu-dark-text);
    }

    /* ══ PROPERTY SPEC GRID ══ */
    .spec-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
      margin-bottom: 12px;
    }
    .spec-item {
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-cyan);
      padding: 14px 18px;
      border-radius: 0 4px 4px 0;
    }
    .spec-item-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 4px;
    }
    .spec-item-value {
      font-size: 1.02rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      padding: 14px 18px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      transition: all 0.2s ease;
    }
    .checklist li:hover {
      border-color: var(--nu-blue);
      box-shadow: 0 2px 10px rgba(0,0,255,0.08);
      transform: translateX(2px);
    }
    .check-box {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      margin-top: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.85rem;
    }
    .check-body { flex: 1; }
    .check-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 3px;
    }
    .check-desc {
      font-size: 0.9rem;
      color: #555;
    }
    .check-tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 3px;
      margin-left: 8px;
      vertical-align: 1px;
    }
    .tag-priority { background: var(--nu-status-red); color: var(--nu-white); }
    .tag-followup { background: var(--nu-status-amber); color: var(--nu-white); }
    .tag-research { background: var(--nu-cyan); color: var(--nu-navy); }
    .tag-decision { background: var(--nu-blue); color: var(--nu-white); }

    /* ══ NEGOTIATION LEVERS ══ */
    .lever-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .lever-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .lever-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 24px rgba(0,0,0,0.08);
    }
    .lever-number {
      display: inline-block;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.9rem;
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-radius: 50%;
      margin-bottom: 12px;
    }
    .lever-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .lever-body {
      font-size: 0.92rem;
      color: #555;
      line-height: 1.55;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 32px;
      border-left: 3px solid var(--nu-medium-gray);
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -40px;
      top: 4px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-item.done::before {
      background: var(--nu-status-green);
      box-shadow: 0 0 0 2px var(--nu-status-green);
    }
    .timeline-item.next::before {
      background: var(--nu-status-amber);
      box-shadow: 0 0 0 2px var(--nu-status-amber);
    }
    .timeline-date {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 3px;
    }
    .timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 3px;
    }
    .timeline-note {
      font-size: 0.9rem;
      color: #555;
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 28px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 28px;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 6px;
      font-size: 1.05rem;
      letter-spacing: 0.02em;
    }
    .callout p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.65;
    }

    /* ══ TWO-COLUMN TABLE ══ */
    .dt-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .dt-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: left;
      padding: 12px 16px;
    }
    .dt-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-body-text);
      vertical-align: top;
    }
    .dt-table tr:last-child td { border-bottom: none; }
    .dt-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .dt-table .col-label {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 32%;
    }

    /* ══ ACTION BAR ══ */
    .action-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      padding: 22px;
      background: var(--nu-navy);
      border-radius: 8px;
      margin-top: 24px;
      align-items: center;
      justify-content: space-between;
    }
    .action-bar-text {
      color: var(--nu-white);
      font-weight: 700;
      font-size: 1rem;
    }
    .action-bar-text span {
      color: var(--nu-cyan);
      font-weight: 900;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 12px 24px;
      border: none;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-primary:hover {
      background: var(--nu-white);
      color: var(--nu-blue);
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(6,208,255,0.4);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-serif);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.85;
      font-weight: 400;
    }
    .nu-footer-contact strong {
      display: block;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-legal {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.82rem;
      color: rgba(255,255,255,0.6);
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px; }
      .page-title { font-size: 1.6rem; }
      .action-bar { flex-direction: column; align-items: stretch; text-align: center; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .checklist li:hover, .lever-card:hover { transform: none; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- INTRO -->
      <div class="page-intro">
        <div class="page-eyebrow">reMarkable Action Item &nbsp;•&nbsp; Internal Strategy</div>
        <h1 class="page-title">Negotiate Purchase of <em>4505 Buttewoods Estate</em></h1>
        <div class="page-meta">7,098 sq ft residence &nbsp;|&nbsp; Captured: reMarkable notebook &nbsp;|&nbsp; Last updated: 2026-04-21</div>
      </div>

      <!-- STATUS STRIP -->
      <div class="status-strip">
        <div class="status-tile">
          <div class="status-label">Property</div>
          <div class="status-value">4505 Buttewoods</div>
          <div class="status-sub">7,098 sq ft estate</div>
        </div>
        <div class="status-tile accent-cyan">
          <div class="status-label">Action Type</div>
          <div class="status-value">Purchase Negotiation</div>
          <div class="status-sub">Owner-direct preferred</div>
        </div>
        <div class="status-tile accent-amber">
          <div class="status-label">Stage</div>
          <div class="status-value">Open — Pre-Offer</div>
          <div class="status-sub">Intel gathering phase</div>
        </div>
        <div class="status-tile accent-gold">
          <div class="status-label">Owner</div>
          <div class="status-value">Aaron C. Norris</div>
          <div class="status-sub">Direct-led, personal capital</div>
        </div>
      </div>

      <!-- OBJECTIVE CALLOUT -->
      <div class="callout">
        <div class="callout-title">Objective</div>
        <p>Acquire the 7,098 sq ft estate at 4505 Buttewoods on terms that reflect a fair-market price adjusted for current holding cost, condition, and the seller's motivation. Move with discipline: verify before offering, build rapport before negotiating, and keep every figure documented in this file so every subsequent step has a clean reference point.</p>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Property</span> <span class="nu-rest">Snapshot</span></h2>
        <div class="spec-grid">
          <div class="spec-item">
            <div class="spec-item-label">Street Address</div>
            <div class="spec-item-value">4505 Buttewoods</div>
          </div>
          <div class="spec-item">
            <div class="spec-item-label">Living Area</div>
            <div class="spec-item-value">7,098 sq ft</div>
          </div>
          <div class="spec-item">
            <div class="spec-item-label">Classification</div>
            <div class="spec-item-value">Single-Family Estate</div>
          </div>
          <div class="spec-item">
            <div class="spec-item-label">Transaction Type</div>
            <div class="spec-item-value">Private Purchase</div>
          </div>
          <div class="spec-item">
            <div class="spec-item-label">Capture Source</div>
            <div class="spec-item-value">reMarkable Notebook</div>
          </div>
          <div class="spec-item">
            <div class="spec-item-label">Priority Level</div>
            <div class="spec-item-value">High — Personal</div>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Due</span> <span class="nu-rest">Diligence Checklist</span></h2>
        <ul class="checklist">
          <li>
            <div class="check-box">1</div>
            <div class="check-body">
              <div class="check-title">Confirm ownership of record<span class="check-tag tag-priority">Priority</span></div>
              <div class="check-desc">Pull the current deed and tax record for 4505 Buttewoods. Verify legal owner, tax parcel ID, legal description, and whether title is held individually, jointly, or in a trust/LLC. This single step drives who the negotiation is actually with.</div>
            </div>
          </li>
          <li>
            <div class="check-box">2</div>
            <div class="check-body">
              <div class="check-title">Pull tax and assessment history<span class="check-tag tag-research">Research</span></div>
              <div class="check-desc">Request the last three years of county tax assessments and note the most recent appraised value. Compare assessed to market to gauge how aggressive or conservative the assessor has been.</div>
            </div>
          </li>
          <li>
            <div class="check-box">3</div>
            <div class="check-body">
              <div class="check-title">Build comparable sales set<span class="check-tag tag-research">Research</span></div>
              <div class="check-desc">Identify three to five closed sales in the last twelve months at or above 5,500 sq ft within a two-mile radius. Weight heavier for matching lot size and finish quality. This is the anchor for the offer.</div>
            </div>
          </li>
          <li>
            <div class="check-box">4</div>
            <div class="check-body">
              <div class="check-title">Check for active or expired listing<span class="check-tag tag-research">Research</span></div>
              <div class="check-desc">Determine whether the property is currently listed, recently expired, or fully off-market. Expired listings and long days-on-market are the strongest signals of negotiating room.</div>
            </div>
          </li>
          <li>
            <div class="check-box">5</div>
            <div class="check-body">
              <div class="check-title">Confirm liens and encumbrances<span class="check-tag tag-priority">Priority</span></div>
              <div class="check-desc">Order a preliminary title rundown. Identify any mortgage balance, mechanic's liens, HOA balances, judgments, or easements. Never make a real offer until the title picture is clean.</div>
            </div>
          </li>
          <li>
            <div class="check-box">6</div>
            <div class="check-body">
              <div class="check-title">Physical and condition review<span class="check-tag tag-followup">Follow-Up</span></div>
              <div class="check-desc">Schedule a walkthrough. Note roof age, HVAC tonnage and age, foundation, any deferred maintenance, and items that will drive either repair credits or a lower opening offer.</div>
            </div>
          </li>
          <li>
            <div class="check-box">7</div>
            <div class="check-body">
              <div class="check-title">Identify seller's motivation<span class="check-tag tag-decision">Decision</span></div>
              <div class="check-desc">Through the agent, neighbor conversations, or direct outreach, understand why the seller wants to move: downsizing, relocation, estate, divorce, financial. Motivation is worth more than square footage in negotiation.</div>
            </div>
          </li>
          <li>
            <div class="check-box">8</div>
            <div class="check-body">
              <div class="check-title">Financing and proof-of-funds ready<span class="check-tag tag-priority">Priority</span></div>
              <div class="check-desc">Have Patrick Lavette at Renasant Bank issue an updated proof-of-funds or pre-approval letter sized for the target offer. Sellers weight certainty heavily at this price point.</div>
            </div>
          </li>
        </ul>
      </section>

      <!-- NEGOTIATION LEVERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Negotiation</span> <span class="nu-rest">Levers</span></h2>
        <div class="lever-grid">
          <div class="lever-card">
            <div class="lever-number">1</div>
            <div class="lever-title">Price Anchor From Comparables</div>
            <div class="lever-body">Lead with a written offer tied to a specific comp set, not a round number. A comps-backed offer is harder to dismiss as "lowball" and re-frames the conversation around data the seller cannot argue with.</div>
          </div>
          <div class="lever-card">
            <div class="lever-number">2</div>
            <div class="lever-title">Speed and Certainty of Close</div>
            <div class="lever-body">If diligence checks out, offer a 21–30 day close with proof-of-funds attached. On a 7,098 sq ft estate, most sellers will concede meaningful dollars for a cash-certain, short-timeline buyer.</div>
          </div>
          <div class="lever-card">
            <div class="lever-number">3</div>
            <div class="lever-title">Minimal Contingencies</div>
            <div class="lever-body">Keep the offer to inspection and title only — no financing contingency if cash or if pre-approval is solid, no sale-of-home contingency. Every removed contingency is real negotiating currency.</div>
          </div>
          <div class="lever-card">
            <div class="lever-number">4</div>
            <div class="lever-title">Repair and Condition Credits</div>
            <div class="lever-body">Use the inspection honestly. Request credits for anything that is legitimately end-of-life — roof, HVAC, water heater, major systems — instead of chasing cosmetic items. Credits at close are usually easier than price drops.</div>
          </div>
          <div class="lever-card">
            <div class="lever-number">5</div>
            <div class="lever-title">Flexible Possession Date</div>
            <div class="lever-body">If the seller needs time to move, offer a short rent-back at no charge or at a fair daily rate. Giving the seller control of the move-out date can outweigh a 1–2% price bump in buyer concession.</div>
          </div>
          <div class="lever-card">
            <div class="lever-number">6</div>
            <div class="lever-title">Personal Letter — Used Sparingly</div>
            <div class="lever-body">If the seller profile supports it and Alabama fair-housing rules permit, a short note from Aaron as the buyer can matter. Keep it brief, factual, and focused on stewardship of the property — never sentimental filler.</div>
          </div>
        </div>
      </section>

      <!-- OFFER FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Offer</span> <span class="nu-rest">Framework</span></h2>
        <table class="dt-table">
          <thead>
            <tr><th>Component</th><th>Standard Approach for This Deal</th></tr>
          </thead>
          <tbody>
            <tr>
              <td class="col-label">Initial Offer Anchor</td>
              <td>Weighted average price per sq ft from the comps set × 7,098 sq ft, then adjusted down for any condition deficits documented during the walkthrough.</td>
            </tr>
            <tr>
              <td class="col-label">Earnest Money</td>
              <td>1% of purchase price, held in escrow with the closing attorney. Enough to demonstrate seriousness; not so much that it becomes a psychological anchor for the seller.</td>
            </tr>
            <tr>
              <td class="col-label">Inspection Period</td>
              <td>10 business days. Short enough to signal decisiveness; long enough to get a proper structural and systems review on a 7,000+ sq ft home.</td>
            </tr>
            <tr>
              <td class="col-label">Financing Contingency</td>
              <td>Remove if cash; otherwise 21 days with an appraisal gap clause if a competitive situation emerges.</td>
            </tr>
            <tr>
              <td class="col-label">Closing Timeline</td>
              <td>21–30 days from acceptance. Renasant Bank has the file; this timeline is realistic and reinforces the speed-and-certainty lever.</td>
            </tr>
            <tr>
              <td class="col-label">Possession</td>
              <td>At funding, with optional 7-day no-charge rent-back if seller needs it. This single concession often closes gaps that money alone will not.</td>
            </tr>
            <tr>
              <td class="col-label">Walk-Away Number</td>
              <td>Set privately before the first offer goes out. Written in this file. Never exceeded under pressure. The walk-away number is the single most important figure in any negotiation.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Timeline</span> <span class="nu-rest">&amp; Next Steps</span></h2>
        <div class="timeline">
          <div class="timeline-item done">
            <div class="timeline-date">2026-04-21 — Captured</div>
            <div class="timeline-title">Action item logged from reMarkable notebook</div>
            <div class="timeline-note">Source entry: "Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods." Converted into this structured action plan.</div>
          </div>
          <div class="timeline-item next">
            <div class="timeline-date">Week of 2026-04-21 — Next</div>
            <div class="timeline-title">Pull deed, tax record, and ownership details</div>
            <div class="timeline-note">Confirm legal owner and parcel ID. This unlocks every other step. Target: within 3 business days of this item being opened.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Within 7 Days</div>
            <div class="timeline-title">Complete comp set and listing history review</div>
            <div class="timeline-note">Five comparable closings, listing and expiration history for the subject property, and days-on-market analysis for similar estates in the area.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Within 14 Days</div>
            <div class="timeline-title">Refresh proof-of-funds with Renasant Bank</div>
            <div class="timeline-note">Contact: Patrick Lavette, Renasant Bank. Size the letter to the planned offer range plus a comfortable cushion.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Within 21 Days</div>
            <div class="timeline-title">Walkthrough and initial condition assessment</div>
            <div class="timeline-note">Document roof, HVAC, foundation, plumbing, and any visible deferred maintenance. Photos of every major system. This feeds both the offer and the later inspection strategy.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Upon Clean Diligence</div>
            <div class="timeline-title">Prepare and submit written offer</div>
            <div class="timeline-note">Offer package: signed purchase agreement, proof-of-funds, earnest money receipt, and — if appropriate — a short buyer letter. Deliver through the correct channel identified in step 1 above.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Post-Acceptance</div>
            <div class="timeline-title">Inspection, title work, closing</div>
            <div class="timeline-note">10-day inspection, title review in parallel, close within 21–30 days. Possession per agreed terms. Update this file with the final numbers at close.</div>
          </div>
        </div>
      </section>

      <!-- RISK AND DISCIPLINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Risk</span> <span class="nu-rest">&amp; Discipline Notes</span></h2>
        <div class="callout">
          <div class="callout-title">Guardrails for this deal</div>
          <p>
            The walk-away number is set before the first offer and is not revisited in the heat of negotiation. Every counter is evaluated against written comps, not against the seller's emotional anchor. If diligence uncovers unresolved title issues, undisclosed easements, or structural concerns, the correct move is to pause — not to power through. A 7,098 sq ft estate is a long-horizon asset; the cost of waiting for a clean deal is always smaller than the cost of forcing a flawed one.
          </p>
        </div>
      </section>

      <!-- ACTION BAR -->
      <div class="action-bar">
        <div class="action-bar-text">Immediate next action: <span>Pull ownership and tax record for 4505 Buttewoods.</span></div>
        <a href="tel:2055001343" class="nu-btn-primary">Call To Coordinate</a>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris — Founder &amp; CEO</strong>
      Norris Utilities®, LLC &nbsp;|&nbsp; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-legal">
      Internal action-item record. Prepared from reMarkable capture on 2026-04-21. Norris Utilities® and A Legacy of Commitment® are registered trademarks of Norris Utilities, LLC.
    </div>
  </footer>

</body>
</html>