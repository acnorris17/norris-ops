<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Butterworth Estate — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

    :root {
      --nu-blue: #0000FF;
      --nu-blue-deep: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-success: #1B7A3E;
      --nu-warn: #B8860B;
      --nu-danger: #B22222;
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }

    /* WHITE CHEVRON TRANSITION */
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 100%;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230033cc'/></svg>");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      opacity: 0.07;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* DOC META BAR */
    .nu-meta-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 14px 20px;
      margin-bottom: 36px;
      font-size: 0.85rem;
      color: var(--nu-dark-text);
    }
    .nu-meta-bar strong { color: var(--nu-blue-deep); font-weight: 700; }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 18px;
      margin-top: 44px;
      line-height: 1.2;
    }
    .nu-section-title .first {
      color: var(--nu-blue-deep);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-divider {
      width: 60px;
      height: 4px;
      background: var(--nu-cyan);
      margin-bottom: 24px;
    }

    /* HERO SUMMARY */
    .nu-hero {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #001e8a 100%);
      color: var(--nu-white);
      padding: 36px 32px;
      border-radius: 10px;
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
    }
    .nu-hero::after {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 50%; height: 180%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.25) 0%, transparent 70%);
    }
    .nu-hero-label {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .nu-hero-title {
      font-size: 1.9rem;
      font-weight: 900;
      line-height: 1.25;
      margin-bottom: 14px;
    }
    .nu-hero-sub {
      font-size: 1.05rem;
      font-weight: 300;
      max-width: 720px;
      color: rgba(255,255,255,0.92);
    }

    /* KEY FIGURES GRID */
    .nu-figures {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 18px;
      margin-bottom: 32px;
    }
    .nu-figure {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      padding: 22px 18px;
      text-align: center;
      border-radius: 6px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-figure-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .nu-figure-value {
      font-size: 1.7rem;
      font-weight: 900;
      color: var(--nu-blue-deep);
      line-height: 1.1;
    }
    .nu-figure-note {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 6px;
      font-weight: 400;
    }

    /* CHEVRON BADGES (phase markers) */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 14px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.04em;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px; height: 24px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.8rem;
      margin-right: 10px;
      margin-left: 10px;
    }

    /* PHASE / STRATEGY CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 22px;
    }
    .nu-card h3 {
      color: var(--nu-blue-deep);
      font-weight: 900;
      font-size: 1.15rem;
      margin-bottom: 12px;
    }
    .nu-card p { margin-bottom: 12px; }
    .nu-card ul { padding-left: 20px; margin-bottom: 8px; }
    .nu-card ul li {
      list-style: none;
      position: relative;
      padding-left: 18px;
      margin-bottom: 8px;
    }
    .nu-card ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 0;
      font-size: 1.1rem;
      line-height: 1;
      top: 4px;
    }

    /* TWO COLUMN COMPARE */
    .nu-compare {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 26px;
    }
    .nu-compare-col {
      padding: 22px;
      border-radius: 8px;
    }
    .nu-compare-col.ours {
      background: #EAF4FF;
      border-left: 4px solid var(--nu-blue);
    }
    .nu-compare-col.theirs {
      background: #FFF8E5;
      border-left: 4px solid var(--nu-warn);
    }
    .nu-compare-col h4 {
      font-size: 1rem;
      font-weight: 900;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-compare-col.ours h4 { color: var(--nu-blue-deep); }
    .nu-compare-col.theirs h4 { color: #8B6914; }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 28px;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border-radius: 8px;
      overflow: hidden;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue-deep) 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .nu-table .pill-go { background: #DDF3E4; color: var(--nu-success); }
    .nu-table .pill-watch { background: #FBEBC8; color: var(--nu-warn); }
    .nu-table .pill-stop { background: #F4D6D6; color: var(--nu-danger); }

    /* WALK-AWAY CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #FFF5F5 0%, #FFE8E8 100%);
      border: 1px solid #F4C8C8;
      border-left: 5px solid var(--nu-danger);
      padding: 20px 24px;
      border-radius: 6px;
      margin: 26px 0;
    }
    .nu-callout h4 {
      color: var(--nu-danger);
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-callout p { color: #5C1A1A; font-weight: 400; }

    .nu-callout.go {
      background: linear-gradient(135deg, #F0FAF4 0%, #DEF1E6 100%);
      border: 1px solid #B6DFC4;
      border-left: 5px solid var(--nu-success);
    }
    .nu-callout.go h4 { color: var(--nu-success); }
    .nu-callout.go p { color: #1F4D31; }

    /* SCRIPT BLOCK */
    .nu-script {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      margin: 14px 0;
      font-family: Georgia, 'Times New Roman', serif;
      font-style: italic;
      color: var(--nu-dark-text);
      border-radius: 0 6px 6px 0;
    }
    .nu-script::before {
      content: '“';
      font-size: 1.6rem;
      color: var(--nu-blue);
      vertical-align: -8px;
      margin-right: 4px;
      font-style: normal;
    }
    .nu-script::after {
      content: '”';
      font-size: 1.6rem;
      color: var(--nu-blue);
      vertical-align: -12px;
      margin-left: 4px;
      font-style: normal;
    }

    /* CHECKLIST */
    .nu-checklist {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .nu-check-item {
      display: flex;
      align-items: flex-start;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 14px 16px;
      border-radius: 6px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
    }
    .nu-check-box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 12px;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .nu-check-text { font-size: 0.93rem; color: var(--nu-dark-text); }
    .nu-check-text strong { color: var(--nu-blue-deep); }

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
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 60px; }
      .nu-hero { padding: 26px 22px; }
      .nu-hero-title { font-size: 1.4rem; }
      .nu-section-title { font-size: 1.3rem; margin-top: 32px; }
      .nu-compare { grid-template-columns: 1fr; }
      .nu-table th, .nu-table td { padding: 10px 10px; font-size: 0.85rem; }
      .nu-badge { clip-path: none; border-radius: 6px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-figure { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- META BAR -->
      <div class="nu-meta-bar">
        <div><strong>DOCUMENT:</strong> Negotiation Strategy — 4505 Butterworth Estate</div>
        <div><strong>OFFER:</strong> $900,000</div>
        <div><strong>PREPARED:</strong> April 21, 2026</div>
        <div><strong>AUTHOR:</strong> Aaron C. Norris</div>
      </div>

      <!-- HERO -->
      <div class="nu-hero">
        <div class="nu-hero-label">Acquisition Brief</div>
        <h1 class="nu-hero-title">Prepare Negotiation Strategy — $900,000 Offer on 4505 Butterworth Estate (7,098 sq ft)</h1>
        <p class="nu-hero-sub">A disciplined, written framework for opening, countering, and closing the offer. Built to protect cash position, honor the seller's relationship, and keep Aaron in command of every move at the table.</p>
      </div>

      <!-- KEY FIGURES -->
      <div class="nu-figures">
        <div class="nu-figure">
          <div class="nu-figure-label">Property Size</div>
          <div class="nu-figure-value">7,098 <span style="font-size:1rem;">sq ft</span></div>
          <div class="nu-figure-note">Single-family estate</div>
        </div>
        <div class="nu-figure">
          <div class="nu-figure-label">Opening Offer</div>
          <div class="nu-figure-value">$900,000</div>
          <div class="nu-figure-note">Initial written position</div>
        </div>
        <div class="nu-figure">
          <div class="nu-figure-label">Per Sq Ft</div>
          <div class="nu-figure-value">$126.80</div>
          <div class="nu-figure-note">At opening offer</div>
        </div>
        <div class="nu-figure">
          <div class="nu-figure-label">Walk-Away Ceiling</div>
          <div class="nu-figure-value">$960,000</div>
          <div class="nu-figure-note">Hard cap — non-negotiable</div>
        </div>
      </div>

      <!-- OBJECTIVES -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objectives</span></h2>
      <div class="nu-section-divider"></div>

      <div class="nu-card">
        <ul>
          <li><strong>Primary objective:</strong> Acquire 4505 Butterworth at or below $930,000 with seller-paid closing costs and a 30-day inspection period.</li>
          <li><strong>Secondary objective:</strong> Lock in a free-and-clear title transfer with no contingencies left to interpretation.</li>
          <li><strong>Relationship objective:</strong> Leave the seller feeling respected — no scorched-earth tactics. The Birmingham market is small; reputation compounds.</li>
          <li><strong>Risk objective:</strong> Preserve enough working capital to keep Norris Utilities® inventory and operations untouched. This purchase cannot weaken the business.</li>
        </ul>
      </div>

      <!-- POSITION STRENGTH -->
      <h2 class="nu-section-title"><span class="first">Position</span> <span class="rest">Assessment</span></h2>
      <div class="nu-section-divider"></div>

      <div class="nu-compare">
        <div class="nu-compare-col ours">
          <h4>Our Strengths</h4>
          <ul style="padding-left:18px;">
            <li>Pre-qualified, ready to close on a defined timeline</li>
            <li>No contingent home sale — clean, simple buyer profile</li>
            <li>Local Birmingham buyer with established business credit</li>
            <li>Willing to flex on closing date to fit seller's schedule</li>
            <li>Cash reserves sufficient to cover earnest money meaningfully</li>
          </ul>
        </div>
        <div class="nu-compare-col theirs">
          <h4>Seller Leverage</h4>
          <ul style="padding-left:18px;">
            <li>Estate of this size has limited qualified buyers — but each one is serious</li>
            <li>Seller may have emotional attachment if long-tenured ownership</li>
            <li>If estate sale, executor may push for fastest cleanest offer</li>
            <li>Current Birmingham luxury comps may favor seller asking</li>
            <li>Time on market to date is the single biggest variable to confirm</li>
          </ul>
        </div>
      </div>

      <!-- PHASED PLAN -->
      <h2 class="nu-section-title"><span class="first">Three-Phase</span> <span class="rest">Negotiation Plan</span></h2>
      <div class="nu-section-divider"></div>

      <!-- PHASE 1 -->
      <div class="nu-badge"><span class="nu-badge-num">1</span> OPENING POSITION</div>
      <div class="nu-card">
        <h3>Submit $900,000 Written Offer With Discipline</h3>
        <p>The opening number is anchored low enough to leave real room to move, but high enough to be taken seriously and avoid an immediate rejection that ends the conversation.</p>
        <ul>
          <li><strong>Offer price:</strong> $900,000 — written, not verbal</li>
          <li><strong>Earnest money:</strong> $15,000 — signals seriousness without overcommitting</li>
          <li><strong>Inspection period:</strong> 30 days, with right to terminate for material defect</li>
          <li><strong>Financing contingency:</strong> 21 days from acceptance</li>
          <li><strong>Closing date:</strong> Offer two windows — 45 days standard or 60 days if seller needs flexibility</li>
          <li><strong>Closing costs:</strong> Request seller to pay standard transfer costs and title insurance</li>
          <li><strong>Personal property:</strong> Itemize anything to be conveyed (appliances, fixtures, equipment) — no assumptions</li>
        </ul>
        <p><strong>Cover note tone:</strong> Respectful, businesslike, brief. No apology, no over-explanation. State the offer is firm and the buyer is ready to move.</p>
      </div>

      <!-- PHASE 2 -->
      <div class="nu-badge"><span class="nu-badge-num">2</span> COUNTER MANAGEMENT</div>
      <div class="nu-card">
        <h3>Respond to Counter With Pre-Set Tiers — Never Improvise</h3>
        <p>Decide every move in advance. Walking into a counter without a pre-committed response is how buyers overpay. The numbers below are the only authorized counters.</p>

        <table class="nu-table">
          <thead>
            <tr>
              <th>Seller Counter Range</th>
              <th>Our Authorized Response</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$915,000 or below</td>
              <td>Accept directly. Move to closing.</td>
              <td><span class="pill pill-go">GO</span></td>
            </tr>
            <tr>
              <td>$916,000 – $935,000</td>
              <td>Counter at midpoint between offer and their counter. Hold inspection and earnest terms.</td>
              <td><span class="pill pill-go">GO</span></td>
            </tr>
            <tr>
              <td>$936,000 – $960,000</td>
              <td>One-step counter at $945,000 firm — best and final language. Add 24-hr response window.</td>
              <td><span class="pill pill-watch">CAUTION</span></td>
            </tr>
            <tr>
              <td>$961,000 – $985,000</td>
              <td>Politely decline in writing. Request seller revisit if circumstances change. Leave the door open.</td>
              <td><span class="pill pill-stop">WALK</span></td>
            </tr>
            <tr>
              <td>$986,000 or above</td>
              <td>Walk away. Send a courteous decline. Do not chase.</td>
              <td><span class="pill pill-stop">WALK</span></td>
            </tr>
          </tbody>
        </table>

        <p><strong>Concession order — give the cheapest first:</strong></p>
        <ul>
          <li>Closing date flexibility (costs nothing, often valued highly by sellers)</li>
          <li>Larger earnest money deposit (still our money, just earlier commitment)</li>
          <li>Shorter inspection window (only if confident in property condition)</li>
          <li>Reduce or remove ask for seller-paid closing costs (mid-tier concession)</li>
          <li>Price increase — only as the final lever, only inside the authorized tiers above</li>
        </ul>
      </div>

      <!-- PHASE 3 -->
      <div class="nu-badge"><span class="nu-badge-num">3</span> CLOSE &amp; PROTECT</div>
      <div class="nu-card">
        <h3>Lock the Deal Without Losing the Margin Won at the Table</h3>
        <p>Most negotiated dollars are lost between contract acceptance and closing — through scope creep on repairs, last-minute requests, or sloppy contract language. Hold the line.</p>
        <ul>
          <li>Inspection findings: address only material structural, mechanical, electrical, plumbing, or roof issues. No cosmetic asks.</li>
          <li>Repair credits: prefer dollar credit at closing over seller-completed repairs — protects timeline and quality control.</li>
          <li>Title commitment review within 48 hours of receipt. Flag any easements, liens, or use restrictions immediately.</li>
          <li>Survey: order independently. Do not rely on prior survey unless under one year old.</li>
          <li>Final walk-through within 48 hours of closing — non-negotiable.</li>
          <li>Wire fraud protection: verify wire instructions by phone using a previously known number, never by email reply.</li>
        </ul>
      </div>

      <!-- WALK-AWAY CALLOUT -->
      <div class="nu-callout">
        <h4>Walk-Away Discipline — The Most Important Rule</h4>
        <p>If the seller will not come below <strong>$960,000 all-in</strong>, walk. The math does not work above that ceiling, and there is no version of this deal worth raiding the operating capital of Norris Utilities® to close. Reputation is built by keeping commitments to ourselves first.</p>
      </div>

      <div class="nu-callout go">
        <h4>Acceptance Discipline — When To Move Without Hesitation</h4>
        <p>If the seller accepts at or below <strong>$915,000</strong> on the opening, sign and move. Do not second-guess, do not try to extract a final percent. The cost of losing this property to a competing buyer over a small discount is far higher than the discount itself.</p>
      </div>

      <!-- SCRIPTS -->
      <h2 class="nu-section-title"><span class="first">Conversation</span> <span class="rest">Scripts</span></h2>
      <div class="nu-section-divider"></div>

      <div class="nu-card">
        <h3>Opening Phone Call to Listing Agent</h3>
        <div class="nu-script">Hello — Aaron Norris with Norris Utilities. I'm submitting a written offer this afternoon on 4505 Butterworth at $900,000. I'm a Birmingham buyer, ready to close, no contingent sale on my end. I'd like to walk you through the terms briefly so there are no surprises when you see the paperwork.</div>
        <p><strong>Goal:</strong> Set tone — serious, prepared, local, easy to work with. Establish that the offer is real and the buyer is qualified.</p>
      </div>

      <div class="nu-card">
        <h3>If Seller Counters Above the Walk-Away</h3>
        <div class="nu-script">I appreciate the seller's response. The number simply doesn't work for me at that level. I want to be straight with you so neither of us wastes time — my best and final is firm. If the seller wants to revisit at any point, my offer stands for the next seven days. After that, I'll need to put the funds elsewhere.</div>
        <p><strong>Goal:</strong> Decline with respect. Leave a written door open. Never close angrily or burn the relationship.</p>
      </div>

      <div class="nu-card">
        <h3>If Pressured for an Immediate Verbal Increase</h3>
        <div class="nu-script">I'm not going to negotiate against myself on the phone. Send me the seller's written counter and I'll respond in writing within 24 hours. That's how I do business — it's cleaner for both sides.</div>
        <p><strong>Goal:</strong> Hold the line. Force every move into writing. Buy time to think.</p>
      </div>

      <!-- INFORMATION TO CONFIRM -->
      <h2 class="nu-section-title"><span class="first">Information</span> <span class="rest">To Confirm Before Submitting</span></h2>
      <div class="nu-section-divider"></div>

      <div class="nu-checklist">
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-text"><strong>Days on market:</strong> Confirm exact listing date and any prior price reductions.</div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-text"><strong>Recent comps:</strong> Pull last six months of sold comps within one mile, 6,000–8,000 sq ft.</div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-text"><strong>Tax assessment:</strong> Pull Jefferson County / Shelby County property card.</div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-text"><strong>Title history:</strong> Check chain of title for liens, easements, or unresolved probate.</div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-text"><strong>Prior offers:</strong> Ask listing agent if any prior offers were rejected and at what level.</div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-text"><strong>Seller motivation:</strong> Estate sale, relocation, downsizing, divorce — each changes the negotiation.</div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-text"><strong>HOA / restrictions:</strong> Any covenants that affect future use or resale.</div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-text"><strong>Mechanical age:</strong> HVAC, roof, water heater service age — drives inspection ask.</div>
        </div>
      </div>

      <!-- ROLES & TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Timeline</span></h2>
      <div class="nu-section-divider"></div>

      <table class="nu-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Action</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Day 0</td>
            <td>Confirm comps, tax record, days on market, seller motivation. Lock final opening number.</td>
            <td>Aaron C. Norris</td>
          </tr>
          <tr>
            <td>Day 1</td>
            <td>Submit written $900,000 offer with cover letter. Phone listing agent within one hour of submission.</td>
            <td>Aaron C. Norris</td>
          </tr>
          <tr>
            <td>Day 2–4</td>
            <td>Field counter. Respond only in writing. Stay inside the authorized tier table.</td>
            <td>Aaron C. Norris</td>
          </tr>
          <tr>
            <td>Day 5–7</td>
            <td>Final acceptance or written walk-away. Door stays open if walk-away.</td>
            <td>Aaron C. Norris</td>
          </tr>
          <tr>
            <td>Day 8–14</td>
            <td>Earnest money wired. Inspection scheduled. Title search opened.</td>
            <td>Closing attorney</td>
          </tr>
          <tr>
            <td>Day 15–37</td>
            <td>Inspection complete. Repair credits negotiated only on material findings.</td>
            <td>Aaron + inspector</td>
          </tr>
          <tr>
            <td>Day 38–44</td>
            <td>Title commitment review, survey, financing clear-to-close.</td>
            <td>Closing attorney</td>
          </tr>
          <tr>
            <td>Day 45</td>
            <td>Final walk-through and closing. Verify wire instructions by phone.</td>
            <td>Aaron C. Norris</td>
          </tr>
        </tbody>
      </table>

      <!-- CLOSING DISCIPLINE -->
      <h2 class="nu-section-title"><span class="first">Negotiator's</span> <span class="rest">Code</span></h2>
      <div class="nu-section-divider"></div>

      <div class="nu-card">
        <ul>
          <li><strong>Every move in writing.</strong> Verbal numbers do not count. Anything material is on paper or it did not happen.</li>
          <li><strong>Never negotiate against yourself.</strong> If the seller goes silent, wait. Silence is a position.</li>
          <li><strong>The first number sets the anchor.</strong> Open at $900,000 with confidence — no caveats, no "best I can do" language.</li>
          <li><strong>Speed is leverage.</strong> A seller who waits 72 hours for a response is a seller losing interest. Respond fast, decide slow.</li>
          <li><strong>Walk-away is real.</strong> The discipline of $960,000 is what gives every other tier its meaning. Without a willingness to walk, there is no negotiation — only purchase.</li>
          <li><strong>Protect the operating business.</strong> Norris Utilities® comes first. No real estate move puts inventory, payroll, or customer commitments at risk.</li>
        </ul>
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
    <div class="nu-footer-confidential">Confidential — Negotiation Strategy — Internal Use Only</div>
  </footer>

</body>
</html>