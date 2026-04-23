<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --nu-success: #1a7f4e;
      --nu-warning: #b8860b;
      --nu-danger: #b91c1c;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 40px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 800px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOC HEADER */
    .doc-header {
      border-bottom: 3px solid var(--nu-blue);
      padding-bottom: 24px;
      margin-bottom: 36px;
    }
    .doc-kicker {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      font-size: 0.9rem;
      color: #666;
      margin-top: 12px;
    }
    .doc-meta-item strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first-word { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SNAPSHOT GRID */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 8px;
    }
    .snapshot-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .snapshot-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 6px;
    }
    .snapshot-value {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .snapshot-sub {
      font-size: 0.82rem;
      color: #666;
      margin-top: 4px;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 28px;
    }
    .callout-label {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .callout p {
      color: var(--nu-dark-text);
      font-size: 1rem;
      line-height: 1.7;
    }

    /* PHASE TABLE */
    .phase-list {
      list-style: none;
      counter-reset: phase;
    }
    .phase-item {
      counter-increment: phase;
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 24px 20px 72px;
      margin-bottom: 14px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
    }
    .phase-item::before {
      content: counter(phase);
      position: absolute;
      top: 20px;
      left: 20px;
      width: 36px;
      height: 36px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.05rem;
    }
    .phase-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .phase-desc {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }
    .phase-meta {
      display: inline-block;
      margin-top: 10px;
      padding: 3px 10px;
      background: var(--nu-light-gray);
      border-radius: 4px;
      font-size: 0.78rem;
      font-weight: 700;
      color: #555;
      letter-spacing: 0.04em;
    }

    /* NEGOTIATION TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      font-size: 0.92rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000055 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 12px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 12px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: #fafbfd; }
    .nu-table .num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
    }
    .checklist li {
      position: relative;
      padding: 10px 0 10px 34px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.98rem;
      color: var(--nu-dark-text);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 13px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-blue); font-weight: 700; }

    /* RISK CARDS */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-warning);
      border-radius: 6px;
      padding: 18px 20px;
    }
    .risk-card.high { border-top-color: var(--nu-danger); }
    .risk-card.low { border-top-color: var(--nu-success); }
    .risk-label {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 3px;
      margin-bottom: 8px;
      color: var(--nu-white);
      background: var(--nu-warning);
    }
    .risk-card.high .risk-label { background: var(--nu-danger); }
    .risk-card.low .risk-label { background: var(--nu-success); }
    .risk-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      font-size: 1rem;
    }
    .risk-desc {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .risk-mitigation {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.85rem;
      color: #555;
    }
    .risk-mitigation strong { color: var(--nu-blue); }

    /* SCRIPT BLOCK */
    .script-block {
      background: #0a0e2a;
      color: #e8eaf6;
      border-radius: 8px;
      padding: 24px 28px;
      font-size: 0.93rem;
      line-height: 1.7;
      border-left: 5px solid var(--nu-cyan);
      margin-bottom: 16px;
    }
    .script-block .speaker {
      color: var(--nu-cyan);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.78rem;
      display: block;
      margin-bottom: 6px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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
      opacity: 0.5;
    }
    .nu-footer-small {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      margin-top: 10px;
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 66px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px; }
      .doc-title { font-size: 1.7rem; }
      .phase-item { padding: 18px 18px 18px 62px; }
      .phase-item::before { top: 16px; left: 14px; width: 32px; height: 32px; font-size: 0.95rem; }
      .nu-table { font-size: 0.82rem; }
      .nu-table th, .nu-table td { padding: 10px 10px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .phase-item, .risk-card, .snapshot-card { box-shadow: none; }
      .script-block { background: #0a0e2a !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-badge">Internal Action Brief</div>
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

      <!-- DOC HEADER -->
      <div class="doc-header">
        <div class="doc-kicker">reMarkable Action Item · Real Estate · Personal</div>
        <h1 class="doc-title">Estate Acquisition Playbook — <span>4505 Buttewoods</span></h1>
        <p style="color: var(--nu-body-text); font-size: 1.05rem; margin-top: 8px;">
          Negotiation strategy, diligence checklist, and step-by-step workflow for the 7,098 sq ft residence at 4505 Buttewoods.
        </p>
        <div class="doc-meta">
          <div class="doc-meta-item"><strong>Principal:</strong> Aaron C. Norris</div>
          <div class="doc-meta-item"><strong>Prepared:</strong> April 23, 2026</div>
          <div class="doc-meta-item"><strong>Status:</strong> Active Action Item</div>
          <div class="doc-meta-item"><strong>Category:</strong> Personal / Non-Business</div>
        </div>
      </div>

      <!-- OBJECTIVE CALLOUT -->
      <div class="callout">
        <div class="callout-label">Objective</div>
        <p>
          Negotiate and close the purchase of the 7,098 sq ft estate at 4505 Buttewoods at a price that reflects an honest, defensible valuation — then execute the transaction with a written timeline, a firm walk-away number, and clean documentation from first conversation through closing. Keep the purchase fully separated from Norris Utilities® books and operations.
        </p>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="snapshot-grid">
          <div class="snapshot-card">
            <div class="snapshot-label">Address</div>
            <div class="snapshot-value">4505 Buttewoods</div>
            <div class="snapshot-sub">Full legal description to be confirmed from county records</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Heated Area</div>
            <div class="snapshot-value">7,098 sq ft</div>
            <div class="snapshot-sub">Verify against county tax card + appraisal</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Use Classification</div>
            <div class="snapshot-value">Estate Residence</div>
            <div class="snapshot-sub">Personal acquisition — not a Norris Utilities® asset</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Funding Source</div>
            <div class="snapshot-value">Personal / Bank</div>
            <div class="snapshot-sub">Coordinate with Patrick Lavette, Renasant Bank</div>
          </div>
        </div>
      </section>

      <!-- PHASED WORKFLOW -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Workflow — Phased Plan</span></h2>
        <ol class="phase-list">

          <li class="phase-item">
            <div class="phase-title">Ground Truth the Property</div>
            <div class="phase-desc">
              Pull the county tax card, current assessed value, latest sales record, property tax history, plat map, and any recorded easements or liens. Confirm actual heated area against the 7,098 sq ft figure, lot size, year built, and any permitted renovations. This is the factual foundation for every number that follows.
            </div>
            <span class="phase-meta">Owner: Aaron · Due: Within 3 business days</span>
          </li>

          <li class="phase-item">
            <div class="phase-title">Build the Comparable Set</div>
            <div class="phase-desc">
              Identify five to seven true comparables — homes of similar size, lot, condition, and school district that have closed within the last twelve months. Calculate a price-per-square-foot range, then adjust for condition, lot, and renovation delta. Document the math on a single page so the negotiating position is defensible and repeatable.
            </div>
            <span class="phase-meta">Owner: Aaron + Agent · Tool: MLS + county records</span>
          </li>

          <li class="phase-item">
            <div class="phase-title">Set Ceiling, Target, and Walk-Away</div>
            <div class="phase-desc">
              Before any conversation with the seller, write down three numbers and do not move them: the ceiling (highest price that still makes financial sense), the target (the realistic successful close), and the walk-away (the price below which the deal is wrong regardless of emotion). Honor the walk-away number — it is the whole point of having one.
            </div>
            <span class="phase-meta">Owner: Aaron · Private document — do not share with seller</span>
          </li>

          <li class="phase-item">
            <div class="phase-title">Pre-Qualify Financing</div>
            <div class="phase-desc">
              Call Patrick Lavette at Renasant Bank for a written pre-approval at or above the ceiling number. A formal pre-approval letter is leverage: it signals a serious, capable buyer and accelerates seller response. Confirm rate environment, loan product options, and any portfolio-lending flexibility given existing Norris Utilities® business relationship.
            </div>
            <span class="phase-meta">Owner: Aaron · Contact: Patrick Lavette, Renasant Bank</span>
          </li>

          <li class="phase-item">
            <div class="phase-title">Open the Conversation — Warm, Not Eager</div>
            <div class="phase-desc">
              Approach the seller or listing agent directly. Lead with genuine interest in the home and a short, honest statement of financial readiness. Ask open questions about their timeline and motivation before discussing price. Listen twice as long as you speak in the first call — motivation data is more valuable than any comp.
            </div>
            <span class="phase-meta">Owner: Aaron · Tone: warm, confident, never apologetic</span>
          </li>

          <li class="phase-item">
            <div class="phase-title">Deliver the Written Offer</div>
            <div class="phase-desc">
              Submit the written offer at or slightly below target, with a clear inspection period, financing contingency, closing window, and earnest money that demonstrates seriousness without giving away leverage. Every term is a negotiating tool — do not surrender price and terms in the same round.
            </div>
            <span class="phase-meta">Owner: Aaron + Attorney · Format: written, dated, signed</span>
          </li>

          <li class="phase-item">
            <div class="phase-title">Inspections and Diligence</div>
            <div class="phase-desc">
              A home of 7,098 sq ft deserves a thorough whole-house inspection, a dedicated HVAC assessment (multiple systems likely), a roof and envelope inspection, a structural walk if anything in the whole-house report flags it, and a sewer scope. Document every finding with dated photos. Material defects are re-opened negotiation, not a reason to walk unless the sum is disqualifying.
            </div>
            <span class="phase-meta">Owner: Aaron · Budget: plan $1,200–$2,500 for full diligence</span>
          </li>

          <li class="phase-item">
            <div class="phase-title">Counter with Evidence</div>
            <div class="phase-desc">
              If inspections surface real issues, counter with specific numbers tied to contractor estimates, not a handwave. "The HVAC life expectancy is three years, replacement quote attached at $X" is negotiation. "It feels high" is not. The written estimates do the arguing.
            </div>
            <span class="phase-meta">Owner: Aaron · Tool: contractor quotes in writing</span>
          </li>

          <li class="phase-item">
            <div class="phase-title">Close Cleanly</div>
            <div class="phase-desc">
              Final walk-through 24 hours before closing. Confirm title commitment, homeowner's insurance bound, wire instructions verified by phone (never email-only — fraud vector), and closing figures match expectations. Keep the file organized: every signed document, disclosure, inspection, and receipt in one folder, digitally backed up.
            </div>
            <span class="phase-meta">Owner: Aaron + Closing Attorney · Never wire from email-only instructions</span>
          </li>
        </ol>
      </section>

      <!-- NEGOTIATION FRAMEWORK TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Framework — Lever by Lever</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Lever</th>
              <th>How It Helps the Buyer</th>
              <th>How to Use It</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Price</strong></td>
              <td>Primary cost driver; easiest to anchor low early.</td>
              <td>Open below target by a defensible margin tied to comps — never insultingly low.</td>
            </tr>
            <tr>
              <td><strong>Earnest Money</strong></td>
              <td>Signals seriousness; credited at closing.</td>
              <td>Use enough to be taken seriously; pair with tight contingency windows to reassure seller.</td>
            </tr>
            <tr>
              <td><strong>Close Date</strong></td>
              <td>Flexibility here can move price.</td>
              <td>Ask the seller what date helps them most; if you can meet it, trade that for price.</td>
            </tr>
            <tr>
              <td><strong>Inspection Period</strong></td>
              <td>Protects buyer from unknown defects.</td>
              <td>Keep full inspection rights; do not waive due diligence to win a bidding war.</td>
            </tr>
            <tr>
              <td><strong>Financing Contingency</strong></td>
              <td>Protects buyer if loan falls through.</td>
              <td>Keep it in; a strong pre-approval letter offsets any seller concern.</td>
            </tr>
            <tr>
              <td><strong>Seller Concessions</strong></td>
              <td>Closing-cost credits effectively lower cash needed at closing.</td>
              <td>Ask for specific, tied-to-inspection credits rather than generic "concessions."</td>
            </tr>
            <tr>
              <td><strong>Post-Close Occupancy</strong></td>
              <td>Lets seller stay short-term; valuable to them, cheap to buyer.</td>
              <td>Offer a short rent-back if seller needs it — often worth 1–3% in price movement.</td>
            </tr>
            <tr>
              <td><strong>Inclusions / Exclusions</strong></td>
              <td>Appliances, fixtures, furniture line items.</td>
              <td>List every inclusion in writing. Verbal inclusions disappear at closing.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <ul class="checklist">
          <li><strong>Title search</strong> — clear chain of ownership, no undisclosed liens or encumbrances</li>
          <li><strong>Survey</strong> — current, with boundary pins located and encroachments flagged</li>
          <li><strong>Property tax history</strong> — three-year trend with any appeals or reassessments noted</li>
          <li><strong>HOA / covenants</strong> — if applicable, obtain governing docs and confirm dues, special assessments, and restrictions</li>
          <li><strong>Whole-house inspection</strong> — licensed inspector, written report with dated photos</li>
          <li><strong>HVAC assessment</strong> — age, capacity, and remaining life on each system; large home likely has multiple units</li>
          <li><strong>Roof inspection</strong> — age, condition, expected remaining life, flashing integrity</li>
          <li><strong>Sewer scope</strong> — camera the line from the house to the main; expensive surprise if skipped</li>
          <li><strong>Radon test</strong> — 48-hour minimum, especially lower levels and basements</li>
          <li><strong>Termite / WDO letter</strong> — required for most conventional financing in the Southeast</li>
          <li><strong>Well and septic</strong> — if applicable, water quality panel and septic inspection with tank pumping</li>
          <li><strong>Pool / spa inspection</strong> — if applicable, equipment age and condition</li>
          <li><strong>Permit history</strong> — confirm any renovations or additions were permitted and closed out</li>
          <li><strong>Insurance quote</strong> — obtain before closing; large estates can carry surprising carrier limitations</li>
          <li><strong>Utility history</strong> — twelve months of power, gas, water for realistic operating budget</li>
          <li><strong>Flood zone determination</strong> — official FEMA flood zone letter</li>
          <li><strong>Neighborhood scan</strong> — drive the street at three different times of day and one weekend</li>
        </ul>
      </section>

      <!-- RISK MATRIX -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Risk</span> <span class="rest">Matrix</span></h2>
        <div class="risk-grid">
          <div class="risk-card high">
            <span class="risk-label">High Risk</span>
            <div class="risk-title">Emotional Overpay</div>
            <p class="risk-desc">A 7,098 sq ft home invites attachment. The walk-away number loses meaning the moment you fall in love with the house.</p>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Write the walk-away number before the second visit. Reread it before every counter. If tempted to move it, sleep on it — never same-day.</div>
          </div>

          <div class="risk-card high">
            <span class="risk-label">High Risk</span>
            <div class="risk-title">Hidden Deferred Maintenance</div>
            <p class="risk-desc">Large estates accumulate maintenance debt invisible at walkthrough: HVAC near end-of-life, roof in final third, grading or drainage issues.</p>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Full diligence stack — inspection, HVAC, roof, sewer scope. Budget up-front for items &gt;10 years old regardless of inspector opinion.</div>
          </div>

          <div class="risk-card">
            <span class="risk-label">Medium Risk</span>
            <div class="risk-title">Financing Slippage</div>
            <p class="risk-desc">Appraisal coming in below contract price, rate movement, or underwriter surprises can shake a deal in the last two weeks.</p>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Lock rate early. Keep appraisal gap language realistic. Stay in weekly contact with loan officer.</div>
          </div>

          <div class="risk-card">
            <span class="risk-label">Medium Risk</span>
            <div class="risk-title">Title or Easement Surprise</div>
            <p class="risk-desc">Undisclosed easement, shared driveway, or encroachment discovered in survey.</p>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Commission the survey early. Read the title commitment exceptions line by line with the closing attorney.</div>
          </div>

          <div class="risk-card">
            <span class="risk-label">Medium Risk</span>
            <div class="risk-title">Wire Fraud at Closing</div>
            <p class="risk-desc">Email-based wire instructions are the single most common real estate fraud vector. Six- and seven-figure losses are routine.</p>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Always verify wire instructions by phone to a number you independently look up — never a number from the wire email itself.</div>
          </div>

          <div class="risk-card low">
            <span class="risk-label">Low Risk</span>
            <div class="risk-title">Insurance Declinations</div>
            <p class="risk-desc">Large or older estates occasionally face carrier limits on replacement cost or specific perils.</p>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Get bound quotes in hand 14 days before closing. Shop at least two carriers.</div>
          </div>
        </div>
      </section>

      <!-- OPENING SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Opening</span> <span class="rest">Conversation — Draft Script</span></h2>

        <div class="script-block">
          <span class="speaker">Aaron — Opening Call (seller or listing agent)</span>
          "Good morning — this is Aaron Norris. I'm calling about 4505 Buttewoods. I've walked the property on paper and I'm serious about it. Before we talk numbers, could you tell me a little about the seller's timeline and what a good outcome looks like for them? I'd rather understand that first so my offer actually fits what they need."
        </div>

        <div class="script-block">
          <span class="speaker">Aaron — After Listening</span>
          "Thank you — that's helpful. Here is where I stand: I'm a qualified buyer with financing pre-approved through Renasant Bank. I'm not going to waste your client's time with a low-ball, and I don't need to win a bidding war. I'd like to put a fair written offer in front of them this week with a reasonable inspection period and a close date that works for their timeline. What's the best way to make that move?"
        </div>

        <div class="script-block">
          <span class="speaker">Aaron — Counter After Inspection</span>
          "The house is everything I hoped it would be, and I want to close. The inspection did flag two items worth discussing — I have written estimates attached. I'm not asking for the full replacement cost, only a fair credit so we can both walk away comfortable. Here is what I propose."
        </div>
      </section>

      <!-- DECISION GATES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Decision</span> <span class="rest">Gates — When to Walk</span></h2>
        <ul class="checklist">
          <li>Seller refuses to allow a full inspection period &mdash; <strong>walk</strong></li>
          <li>Title commitment shows unresolved liens or clouded ownership &mdash; <strong>walk unless cured before closing</strong></li>
          <li>Sewer scope shows failed line or collapsed section and seller refuses credit &mdash; <strong>walk or renegotiate hard</strong></li>
          <li>Appraisal comes in materially below contract price and seller will not meet halfway &mdash; <strong>walk</strong></li>
          <li>Price creeps above the written walk-away number &mdash; <strong>walk — the number exists for exactly this moment</strong></li>
          <li>Financing contingency looks shaky and seller will not extend reasonable deadline &mdash; <strong>walk</strong></li>
        </ul>
      </section>

      <!-- SEPARATION NOTE -->
      <div class="callout" style="border-left-color: var(--nu-accent-gold); background: linear-gradient(135deg, #fdfaf0 0%, #faf3dc 100%);">
        <div class="callout-label" style="color: #8a6a1a;">Clean Separation from Norris Utilities®</div>
        <p>
          This is a personal acquisition. Do not mix it into Norris Utilities®, LLC books, email, or vendor communications. Use personal banking, a personal email thread, and a personal folder. The only business-side overlap permitted is the existing relationship with Patrick Lavette at Renasant Bank for pre-approval, and even there the loan instrument is personal, not company-backed. Protect the corporate veil &mdash; it matters.
        </p>
      </div>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Next</span> <span class="rest">Actions — This Week</span></h2>
        <ul class="checklist">
          <li><strong>Monday:</strong> Pull county tax card, plat map, and recent sales history for 4505 Buttewoods</li>
          <li><strong>Tuesday:</strong> Call Patrick Lavette to secure written pre-approval letter at target loan amount</li>
          <li><strong>Wednesday:</strong> Build the comparable set — five to seven closings within twelve months</li>
          <li><strong>Thursday:</strong> Write the ceiling, target, and walk-away numbers; seal the envelope</li>
          <li><strong>Friday:</strong> Open the conversation with seller or listing agent using the opening script</li>
          <li><strong>Ongoing:</strong> Keep every document, email, and phone-note in a single dated folder</li>
        </ul>
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
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-small">Internal Action Brief · Personal Acquisition · Not a Norris Utilities®, LLC Asset</div>
  </footer>

</body>
</html>