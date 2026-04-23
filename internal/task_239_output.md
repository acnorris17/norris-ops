<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Negotiation Strategy — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-alert-red: #C8102E;
      --nu-success-green: #2E7D32;
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
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-type {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(0,0,0,0.25);
      color: var(--nu-cyan);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      border: 1px solid rgba(6,208,255,0.4);
      border-radius: 2px;
    }

    /* CHEVRON */
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      padding-bottom: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
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

    /* DOCUMENT TITLE */
    .nu-doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .nu-doc-title span { color: var(--nu-blue); }
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding: 16px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      margin: 24px 0 40px;
      font-size: 0.9rem;
    }
    .nu-doc-meta div { color: var(--nu-body-text); }
    .nu-doc-meta strong { color: var(--nu-dark-text); font-weight: 700; }

    /* SECTION */
    .nu-section { margin-bottom: 48px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ASSET SUMMARY BLOCK */
    .nu-asset-summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 32px;
    }
    .nu-asset-cell {
      background: var(--nu-white);
      padding: 22px 18px;
      text-align: center;
    }
    .nu-asset-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .nu-asset-value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .nu-asset-value small {
      display: block;
      font-size: 0.7rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 4px;
      letter-spacing: 0.05em;
    }

    /* NEGOTIATION LADDER */
    .nu-ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin: 24px 0;
    }
    .nu-ladder-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 4px;
      padding: 22px;
      position: relative;
    }
    .nu-ladder-step.anchor { border-top-color: var(--nu-cyan); }
    .nu-ladder-step.target { border-top-color: var(--nu-accent-gold); }
    .nu-ladder-step.walk { border-top-color: var(--nu-alert-red); }
    .nu-step-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .nu-step-price {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1;
      margin-bottom: 6px;
    }
    .nu-step-psf {
      font-size: 0.85rem;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 10px;
    }
    .nu-step-note {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* CHEVRON BADGE */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 24px 12px 16px;
      margin: 0 8px 10px 0;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.88rem;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0 28px;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tbody tr:hover { background: var(--nu-light-gray); }
    .nu-table td strong { color: var(--nu-dark-text); }

    /* PLAYBOOK */
    .nu-play {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 24px;
      margin-bottom: 14px;
      border-radius: 0 4px 4px 0;
    }
    .nu-play-title {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-play-number {
      display: inline-block;
      width: 26px; height: 26px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      text-align: center;
      line-height: 26px;
      font-size: 0.8rem;
      font-weight: 900;
      margin-right: 10px;
    }
    .nu-play-body {
      font-size: 0.93rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }
    .nu-play-body strong { color: var(--nu-dark-text); }

    /* SCRIPT BOX */
    .nu-script {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 24px 28px;
      border-radius: 4px;
      margin: 16px 0;
      border-left: 4px solid var(--nu-cyan);
    }
    .nu-script-label {
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 900;
      margin-bottom: 10px;
    }
    .nu-script-text {
      font-style: italic;
      font-weight: 300;
      font-size: 1.02rem;
      line-height: 1.65;
      color: rgba(255,255,255,0.95);
    }

    /* CALLOUT */
    .nu-callout {
      padding: 20px 24px;
      border-radius: 4px;
      margin: 20px 0;
      border-left: 4px solid;
    }
    .nu-callout.warn {
      background: #FFF8E1;
      border-left-color: var(--nu-accent-gold);
      color: #5D4A0F;
    }
    .nu-callout.alert {
      background: #FDE8EC;
      border-left-color: var(--nu-alert-red);
      color: #6B0A1A;
    }
    .nu-callout.info {
      background: #E3F4FF;
      border-left-color: var(--nu-cyan);
      color: #003B5C;
    }
    .nu-callout-title {
      font-weight: 900;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 16px 0;
    }
    .nu-checklist li {
      padding: 12px 16px 12px 44px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      margin-bottom: 8px;
      position: relative;
      font-size: 0.95rem;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 16px; top: 15px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* TWO-COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    .nu-col-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      padding: 22px;
    }
    .nu-col-card h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-col-card ul { padding-left: 20px; }
    .nu-col-card li {
      margin-bottom: 6px;
      font-size: 0.92rem;
      list-style: none;
      position: relative;
      padding-left: 16px;
    }
    .nu-col-card li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 0;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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
    .nu-footer-sep {
      display: inline-block;
      margin: 0 8px;
      color: rgba(255,255,255,0.4);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .nu-doc-title { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 4px; }
      .nu-doc-meta { flex-direction: column; gap: 8px; }
    }

    @media print {
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-ladder-step, .nu-play, .nu-callout { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-type">Confidential Negotiation Playbook</div>
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

      <!-- TITLE BLOCK -->
      <h1 class="nu-doc-title"><span>4505 Buttewoods</span> — Estate Acquisition Negotiation Strategy</h1>
      <div class="nu-doc-meta">
        <div><strong>Property:</strong> 4505 Buttewoods</div>
        <div><strong>Size:</strong> 7,098 sq ft</div>
        <div><strong>Buyer:</strong> Aaron C. Norris</div>
        <div><strong>Prepared:</strong> April 23, 2026</div>
        <div><strong>Status:</strong> Pre-offer / Strategy Set</div>
      </div>

      <!-- EXECUTIVE OVERVIEW -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Executive</span> Overview</h2>
        <p style="margin-bottom: 14px;">
          This document sets the negotiation framework for the acquisition of the 7,098 square foot
          estate at <strong>4505 Buttewoods</strong>. The objective is to secure the property at or below
          the target price while preserving the optionality to walk away if terms exceed the ceiling.
          Every move is planned: anchor, target, ceiling, walk-away. No improvisation on price.
        </p>
        <p>
          The guiding principle: the best price is won at the table, not at closing. The second-best
          price is won by being willing — visibly, believably — to leave the table. The table is
          always a two-way door.
        </p>
      </section>

      <!-- ASSET SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Asset</span> Snapshot</h2>
        <div class="nu-asset-summary">
          <div class="nu-asset-cell">
            <div class="nu-asset-label">Address</div>
            <div class="nu-asset-value" style="font-size: 1.05rem; line-height: 1.3;">4505 Buttewoods</div>
          </div>
          <div class="nu-asset-cell">
            <div class="nu-asset-label">Living Area</div>
            <div class="nu-asset-value">7,098<small>SQUARE FEET</small></div>
          </div>
          <div class="nu-asset-cell">
            <div class="nu-asset-label">Classification</div>
            <div class="nu-asset-value" style="font-size: 1.15rem;">Estate<small>SINGLE FAMILY</small></div>
          </div>
          <div class="nu-asset-cell">
            <div class="nu-asset-label">Transaction</div>
            <div class="nu-asset-value" style="font-size: 1.15rem;">Acquisition<small>DIRECT PURCHASE</small></div>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>The Four-Price</span> Ladder</h2>
        <p style="margin-bottom: 20px;">
          Before a single number is spoken aloud, four prices are locked in writing. These numbers
          do not shift mid-negotiation. Seller behavior tells us where on the ladder the deal will land
          — our job is to read the behavior, not rewrite the ladder.
        </p>
        <div class="nu-ladder">
          <div class="nu-ladder-step anchor">
            <div class="nu-step-label">Opening Anchor</div>
            <div class="nu-step-price">Low</div>
            <div class="nu-step-psf">Written, defensible, justified</div>
            <div class="nu-step-note">
              Anchor low enough to leave negotiation room, high enough to signal serious buyer.
              Delivered with a one-page comparables brief. Never a round number.
            </div>
          </div>
          <div class="nu-ladder-step target">
            <div class="nu-step-label">Target Landing</div>
            <div class="nu-step-price">Mid</div>
            <div class="nu-step-psf">The number we want to sign</div>
            <div class="nu-step-note">
              The realistic close. Should feel like a meaningful concession to seller while
              remaining well inside our ceiling. This is where most deals settle.
            </div>
          </div>
          <div class="nu-ladder-step">
            <div class="nu-step-label">Hard Ceiling</div>
            <div class="nu-step-price">Max</div>
            <div class="nu-step-psf">Only with concessions attached</div>
            <div class="nu-step-note">
              Absolute top we will pay — and only if seller adds inspections credit, closing-cost
              contribution, rate buydown, or extended possession terms equivalent in value.
            </div>
          </div>
          <div class="nu-ladder-step walk">
            <div class="nu-step-label">Walk-Away Line</div>
            <div class="nu-step-price">Stop</div>
            <div class="nu-step-psf">One dollar past ceiling = exit</div>
            <div class="nu-step-note">
              Above this line, we thank the seller and leave. No counter. No re-engagement for
              14 days minimum. The willingness to walk is the entire leverage structure.
            </div>
          </div>
        </div>
        <div class="nu-callout warn">
          <div class="nu-callout-title">⚠ Fill Before First Contact</div>
          The four dollar figures above must be written into the Master Tracker and confirmed by
          Aaron before any offer communication goes out. Numbers live on paper, not in memory.
        </div>
      </section>

      <!-- PRE-NEGOTIATION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Pre-Negotiation</span> Checklist</h2>
        <p style="margin-bottom: 14px;">
          Every item must be complete before the first number is floated. Preparation is the
          negotiation. The conversation is just closing the deal preparation already won.
        </p>
        <ul class="nu-checklist">
          <li><strong>Comparable sales pulled</strong> — minimum six closed sales within 12 months, same submarket, estate-grade square footage (6,000+ sq ft). Adjusted for condition, lot, vintage.</li>
          <li><strong>Days on market history</strong> — current and any prior listings. Re-listed properties signal price sensitivity.</li>
          <li><strong>Seller motivation</strong> — estate sale, relocation, divorce, tax year, carrying costs. Every reason is leverage.</li>
          <li><strong>Title and encumbrances</strong> — preliminary title run. Known liens, easements, HOA status.</li>
          <li><strong>Property condition</strong> — drive-by minimum, full inspection post-acceptance. Deferred maintenance = negotiation ammunition.</li>
          <li><strong>Financing letter</strong> — proof-of-funds or pre-approval staged and ready. Delivered only when asked, never volunteered early.</li>
          <li><strong>Attorney on standby</strong> — real estate counsel briefed and contract-ready before offer goes out.</li>
          <li><strong>Walk-away confirmed</strong> — Aaron has verbally and in writing confirmed the ceiling and the walk-away line.</li>
        </ul>
      </section>

      <!-- PLAYBOOK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Tactical</span> Playbook</h2>

        <div class="nu-play">
          <div class="nu-play-title"><span class="nu-play-number">1</span>Let the seller speak first whenever possible</div>
          <div class="nu-play-body">
            When the other side names a number first, they define the zone. If forced to open,
            anchor low with a written rationale — never verbally, never unjustified. <strong>The
            first written number sets the ceiling of the deal, not the floor.</strong>
          </div>
        </div>

        <div class="nu-play">
          <div class="nu-play-title"><span class="nu-play-number">2</span>The flinch</div>
          <div class="nu-play-body">
            When the seller states their asking price, pause. Visible reaction. Silence for a full
            three seconds. <strong>Every dollar between asking and our target is earned in that silence.</strong>
            The flinch says "that number surprises me" without saying it — which is exactly what we want.
          </div>
        </div>

        <div class="nu-play">
          <div class="nu-play-title"><span class="nu-play-number">3</span>Never split the difference</div>
          <div class="nu-play-body">
            Seller at X, we at Y, they propose meeting at (X+Y)/2. Decline. Splitting locks in the
            midpoint as the new anchor and gives away half the remaining negotiation. <strong>Counter
            with a smaller move toward the midpoint, supported by a reason</strong> — inspection
            finding, comparable sale, carrying cost math.
          </div>
        </div>

        <div class="nu-play">
          <div class="nu-play-title"><span class="nu-play-number">4</span>Concession trading, not conceding</div>
          <div class="nu-play-body">
            Every concession we give must pull a concession in return. Agree to raise price? Demand
            closing-cost credit, extended possession, furniture left in place, or repair credit.
            <strong>"I can do that if you can do this"</strong> — the only sentence that moves both numbers in parallel.
          </div>
        </div>

        <div class="nu-play">
          <div class="nu-play-title"><span class="nu-play-number">5</span>Create time pressure without fabricating it</div>
          <div class="nu-play-body">
            Real deadlines: inspection period windows, rate lock expiration, 1031 exchange clocks,
            other properties under evaluation. <strong>Never lie about another offer.</strong> If we're
            looking at a second property, say so. If we're not, don't pretend.
          </div>
        </div>

        <div class="nu-play">
          <div class="nu-play-title"><span class="nu-play-number">6</span>Silence after the counter</div>
          <div class="nu-play-body">
            Deliver our counter, then stop talking. Do not justify. Do not soften. Do not fill the
            air. <strong>The first party to break silence negotiates against themselves.</strong>
            It should be them.
          </div>
        </div>

        <div class="nu-play">
          <div class="nu-play-title"><span class="nu-play-number">7</span>Inspection period is a second negotiation</div>
          <div class="nu-play-body">
            Price is negotiated before the inspection. Repairs, credits, and "as-is adjustments"
            are negotiated after. Build inspection-contingent reopening into the contract so the
            ceiling has a release valve if the roof, HVAC, foundation, or plumbing surface surprises.
          </div>
        </div>

        <div class="nu-play">
          <div class="nu-play-title"><span class="nu-play-number">8</span>The walk</div>
          <div class="nu-play-body">
            If ceiling + concessions still doesn't clear, walk. Courteous. Clean. Door left open.
            <strong>"I appreciate your time — the numbers don't work for me at that level. If the
            market shifts or circumstances change, please call me."</strong> Then leave. Half of
            walk-aways come back within 30 days.
          </div>
        </div>
      </section>

      <!-- COUNTER SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Field</span> Scripts</h2>
        <p style="margin-bottom: 16px;">
          Rehearsed language for the moments that matter most. Read these aloud before any call
          or meeting. Delivered calmly, deliberately — never rushed.
        </p>

        <div class="nu-script">
          <div class="nu-script-label">Opening — First Number Delivery</div>
          <div class="nu-script-text">
            "I've looked at six comparable estates that closed in the last year in this
            submarket. Adjusting for condition, lot size, and vintage, the number I can make work
            is [ANCHOR]. I'd like to structure a clean offer — proof of funds, short inspection
            window, and a close date that works for you. I'm serious about this property. Where
            do we go from here?"
          </div>
        </div>

        <div class="nu-script">
          <div class="nu-script-label">Response to Over-Ceiling Counter</div>
          <div class="nu-script-text">
            "I hear you. That number's above where I can go on price alone. If you can include
            [CREDIT / CONCESSION / EXTENDED POSSESSION], I can stretch to [CEILING]. Otherwise I'm
            at [LAST OFFER]. Take your time — I'd rather you think about it than rush into a
            no."
          </div>
        </div>

        <div class="nu-script">
          <div class="nu-script-label">The Walk-Away</div>
          <div class="nu-script-text">
            "I've enjoyed working through this with you and I respect where you've landed. The
            numbers don't work for me at that level, and I'd rather be honest than drag this
            out. If anything changes, my number's 205-500-1343 — call me directly. Thank you for
            your time."
          </div>
        </div>

        <div class="nu-script">
          <div class="nu-script-label">Re-Entry (14+ Days Later)</div>
          <div class="nu-script-text">
            "I wanted to check back and see where things stand with the property. My position
            hasn't changed, but I wanted you to know I'm still interested if you are. No pressure
            either way."
          </div>
        </div>
      </section>

      <!-- LEVERAGE MATRIX -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Leverage</span> Matrix</h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Lever</th>
              <th>How It Reduces Price</th>
              <th>When To Deploy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cash / clean financing</strong></td>
              <td>Eliminates appraisal risk, shortens timeline, removes lender contingencies</td>
              <td>Opening anchor — disclose strategically, not immediately</td>
            </tr>
            <tr>
              <td><strong>Short close timeline</strong></td>
              <td>Removes seller carrying cost; especially valuable on vacant estates</td>
              <td>When seller signals urgency (estate, relocation, tax deadline)</td>
            </tr>
            <tr>
              <td><strong>Flexible possession</strong></td>
              <td>Rent-back or delayed move-in relieves seller pressure; trades for price cut</td>
              <td>When seller still lives in property and needs transition time</td>
            </tr>
            <tr>
              <td><strong>Minimal contingencies</strong></td>
              <td>As-is acceptance, waived inspections (with caution), no finance contingency</td>
              <td>Only with thorough pre-offer due diligence — never blind</td>
            </tr>
            <tr>
              <td><strong>Inspection findings</strong></td>
              <td>Documented deferred maintenance reopens price conversation post-contract</td>
              <td>Always run full inspection — every finding is a dollar</td>
            </tr>
            <tr>
              <td><strong>Days on market</strong></td>
              <td>Each week without offer weakens seller position; second listings weaker still</td>
              <td>If DOM exceeds 60 days, reference it respectfully in written offer rationale</td>
            </tr>
            <tr>
              <td><strong>Appraisal gap coverage</strong></td>
              <td>Trades buyer risk for seller certainty — converts to price concession</td>
              <td>Offer gap coverage only in exchange for corresponding price movement</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SELLER PSYCHOLOGY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Seller</span> Psychology Read</h2>
        <div class="nu-two-col">
          <div class="nu-col-card">
            <h4>Signs Seller Will Move</h4>
            <ul>
              <li>Property listed more than 45 days</li>
              <li>One or more prior price reductions</li>
              <li>Prior expired / withdrawn listings</li>
              <li>Vacant property (carrying cost bleed)</li>
              <li>Estate, relocation, or divorce-motivated</li>
              <li>Dual agent incentive to close</li>
              <li>End-of-quarter or end-of-year pressure</li>
              <li>Verbal tells: "flexible," "motivated," "open"</li>
            </ul>
          </div>
          <div class="nu-col-card">
            <h4>Signs Seller Will Hold</h4>
            <ul>
              <li>Recently listed (under 21 days)</li>
              <li>Multiple offers referenced credibly</li>
              <li>Seller has no urgency (no move deadline)</li>
              <li>Emotional attachment (long-term ownership)</li>
              <li>Cash buyer, no carrying pressure</li>
              <li>Listed below market intentionally</li>
              <li>Agent with reputation for "no low balls"</li>
              <li>Verbal tells: "firm," "won't move," "priced right"</li>
            </ul>
          </div>
        </div>
        <div class="nu-callout info">
          <div class="nu-callout-title">▲ Read the room before you read your number</div>
          Two minutes of listening at the property walkthrough is worth five comparable sales.
          What the seller <em>doesn't</em> say is often louder than what they do.
        </div>
      </section>

      <!-- DEAL BREAKERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Deal</span> Breakers</h2>
        <div class="nu-callout alert">
          <div class="nu-callout-title">✕ Non-Negotiable Walk Conditions</div>
          Any one of the following triggers an immediate walk-away, regardless of price movement.
          These are not negotiation levers — they are exits.
        </div>
        <ul class="nu-checklist">
          <li><strong>Title defects that cannot be cured</strong> — unresolved liens, boundary disputes, fraudulent prior conveyances.</li>
          <li><strong>Undisclosed major structural damage</strong> — foundation failure, significant termite, roof replacement needed in first 12 months.</li>
          <li><strong>Environmental issues</strong> — mold, asbestos, buried oil tank, radon above remediation threshold.</li>
          <li><strong>Zoning or use restrictions</strong> that prevent intended use of the property.</li>
          <li><strong>Seller refusal to provide disclosures</strong> — missing or incomplete property condition disclosures are an automatic stop.</li>
          <li><strong>Price pushed above ceiling without equivalent concessions</strong> — ceiling is ceiling.</li>
        </ul>
      </section>

      <!-- ACTION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Next</span> Actions</h2>
        <div class="nu-badge">Step 01 · Lock Ladder</div>
        <div class="nu-badge">Step 02 · Pull Comps</div>
        <div class="nu-badge">Step 03 · Brief Attorney</div>
        <div class="nu-badge">Step 04 · Deliver Anchor</div>
        <div class="nu-badge">Step 05 · Hold The Line</div>

        <ul class="nu-checklist" style="margin-top: 24px;">
          <li><strong>Today:</strong> Aaron confirms anchor / target / ceiling / walk-away figures in writing. File to Master Tracker under 4505 Buttewoods.</li>
          <li><strong>Within 48 hours:</strong> Comparable sales brief completed — six closed estates, adjusted and summarized on one page.</li>
          <li><strong>Within 48 hours:</strong> Preliminary title search ordered. Proof of funds / pre-approval letter staged.</li>
          <li><strong>Before first offer:</strong> Attorney briefed, contract skeleton prepared, inspection contingency language confirmed.</li>
          <li><strong>At offer delivery:</strong> Written anchor with one-page rationale. Delivered directly — not via email attachment only.</li>
          <li><strong>Throughout:</strong> Every communication logged. Every number confirmed in writing before moving to next step.</li>
          <li><strong>Post-deal:</strong> Recap written within 24 hours of close or walk. Lessons captured for next acquisition.</li>
        </ul>
      </section>

      <!-- CLOSING PRINCIPLE -->
      <section class="nu-section">
        <div class="nu-callout info" style="padding: 28px 32px;">
          <div class="nu-callout-title">Governing Principle</div>
          <p style="font-size: 1.05rem; line-height: 1.7; color: #003B5C;">
            The deal is won before the conversation begins. Every number is decided in advance.
            Every concession has a price. Every word has a purpose. The buyer who can walk away
            is the buyer who gets the right price — and the right price is the only price worth
            signing.
          </p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong style="color: var(--nu-white);">Aaron C. Norris</strong>, Founder &amp; CEO
      <span class="nu-footer-sep">|</span>
      Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a>
      <span class="nu-footer-sep">|</span>
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a>
      <span class="nu-footer-sep">|</span>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div style="margin-top: 18px; font-size: 0.8rem; color: rgba(255,255,255,0.55); letter-spacing: 0.1em;">
      CONFIDENTIAL · NEGOTIATION STRATEGY · INTERNAL USE
    </div>
  </footer>

</body>
</html>