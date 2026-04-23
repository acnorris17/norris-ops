<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Negotiation Strategy — Norris Utilities®</title>
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
      --nu-success: #0B8A3E;
      --nu-warning: #C9560C;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
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
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 20px;
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 2px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.35em;
      text-transform: uppercase;
      background: rgba(0,0,0,0.15);
    }

    /* ══ CHEVRON ══ */
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

    /* ══ CONTENT AREA ══ */
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
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-wrap {
      max-width: 1160px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ TITLE BLOCK ══ */
    .nu-doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-doc-title span { color: var(--nu-blue); }
    .nu-doc-sub {
      font-weight: 400;
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 28px;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 18px;
      padding: 14px 18px;
      background: linear-gradient(135deg, #f7f8ff 0%, #eef3ff 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 2px;
      font-size: 0.92rem;
      margin-bottom: 40px;
    }
    .nu-meta-row b { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ SECTION HEADER ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 14px;
      line-height: 1.3;
    }
    .nu-section-title .hi { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      height: 3px;
      width: 54px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 18px;
      border-radius: 2px;
    }
    .nu-section p { margin-bottom: 14px; }
    .nu-section p:last-child { margin-bottom: 0; }

    /* ══ KEY FACTS GRID ══ */
    .nu-facts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 10px;
    }
    .nu-fact {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: #777;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-fact-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-fact-note {
      font-size: 0.82rem;
      color: #666;
      margin-top: 4px;
    }

    /* ══ BADGES ══ */
    .nu-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 20px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 16px;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-badge.cyan {
      background: linear-gradient(135deg, #003d9c 0%, #0066ee 100%);
    }

    /* ══ PRICING TABLE ══ */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.94rem;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 4px;
      overflow: hidden;
    }
    .nu-table thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001a66 100%);
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      padding: 14px 16px;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: #fafbff; }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tr.row-target { background: #eef8ff !important; }
    .nu-table tr.row-target td { font-weight: 700; color: var(--nu-blue); }
    .nu-table .num { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }

    /* ══ PHASE CARDS ══ */
    .nu-phases {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 20px;
    }
    .nu-phase {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px;
      position: relative;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-phase-num {
      position: absolute;
      top: -14px; left: 20px;
      background: linear-gradient(135deg, var(--nu-blue), #0066ee);
      color: var(--nu-white);
      width: 36px; height: 36px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900;
      font-size: 1rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .nu-phase h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin: 6px 0 6px;
    }
    .nu-phase .phase-when {
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-phase ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-phase li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 8px;
      font-size: 0.92rem;
    }
    .nu-phase li::before {
      content: '';
      position: absolute;
      left: 0; top: 9px;
      width: 8px; height: 8px;
      background: var(--nu-cyan);
      transform: rotate(45deg);
    }

    /* ══ SCRIPT BLOCKS ══ */
    .nu-script {
      background: linear-gradient(135deg, #f7f8ff 0%, #eef3ff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 22px;
      border-radius: 2px;
      margin-bottom: 16px;
      font-size: 0.95rem;
    }
    .nu-script .speaker {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-script p { margin-bottom: 10px; }
    .nu-script p:last-child { margin-bottom: 0; }

    /* ══ CALLOUTS ══ */
    .nu-callout {
      padding: 18px 22px;
      border-radius: 4px;
      margin-bottom: 18px;
      font-size: 0.95rem;
    }
    .nu-callout.warn {
      background: #fff7ee;
      border-left: 4px solid var(--nu-warning);
      color: #5c3a15;
    }
    .nu-callout.win {
      background: #edfaf2;
      border-left: 4px solid var(--nu-success);
      color: #0e4a28;
    }
    .nu-callout.stop {
      background: #fdecee;
      border-left: 4px solid var(--nu-danger);
      color: #5f0f18;
    }
    .nu-callout b { font-weight: 900; }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-checklist li {
      position: relative;
      padding: 10px 14px 10px 42px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      margin-bottom: 8px;
      font-size: 0.94rem;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 16px; height: 16px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* ══ RED LINES ══ */
    .nu-redlines {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      padding: 26px 28px;
      border-radius: 6px;
      border-top: 4px solid var(--nu-danger);
    }
    .nu-redlines h3 {
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.15rem;
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .nu-redlines ul {
      list-style: none;
      padding: 0;
    }
    .nu-redlines li {
      padding: 8px 0 8px 24px;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      font-size: 0.94rem;
    }
    .nu-redlines li:last-child { border-bottom: none; }
    .nu-redlines li::before {
      content: '✕';
      position: absolute;
      left: 0; top: 8px;
      color: #ff6b77;
      font-weight: 900;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 45px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-doc-title { font-size: 1.7rem; }
      .nu-wrap { padding: 40px 22px 60px; }
      .nu-badge { clip-path: none; border-radius: 4px; }
      .nu-table { font-size: 0.85rem; }
      .nu-table thead th, .nu-table tbody td { padding: 10px 10px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-phase, .nu-fact, .nu-table { box-shadow: none; border: 1px solid #ccc; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Briefing — Confidential</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- TITLE BLOCK -->
      <h1 class="nu-doc-title">Negotiation Strategy — <span>4505 Buttewoods</span></h1>
      <div class="nu-doc-sub">7,098 sq ft estate acquisition — positioning, pricing, and playbook for Aaron C. Norris</div>

      <div class="nu-meta-row">
        <span><b>Property:</b> 4505 Buttewoods</span>
        <span><b>Size:</b> 7,098 sq ft</span>
        <span><b>Classification:</b> Single-family estate</span>
        <span><b>Prepared:</b> 2026-04-22</span>
        <span><b>Principal:</b> Aaron C. Norris</span>
        <span><b>Status:</b> Pre-offer</span>
      </div>

      <!-- SECTION: OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="hi">Objective</span> <span class="rest">— what a good outcome looks like</span></h2>
        <div class="nu-section-rule"></div>
        <p>Acquire 4505 Buttewoods at a price that preserves long-term equity, transfers known repair risk to the seller where possible, and keeps Aaron in a defensible cash position through the first twelve months of ownership. The goal is not the lowest headline price — it is the lowest <i>total cost of ownership</i> in the first year, after inspections, repairs, insurance, and carrying costs are netted out.</p>
        <div class="nu-badge-row">
          <span class="nu-badge">Win Condition #1 — Price ≤ Target</span>
          <span class="nu-badge cyan">Win Condition #2 — Repairs Credited</span>
          <span class="nu-badge">Win Condition #3 — 30-Day Close</span>
        </div>
      </section>

      <!-- SECTION: KEY FACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="hi">Facts</span> <span class="rest">on the table</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-facts">
          <div class="nu-fact">
            <div class="nu-fact-label">Square Footage</div>
            <div class="nu-fact-value">7,098</div>
            <div class="nu-fact-note">heated / finished</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Classification</div>
            <div class="nu-fact-value">Estate</div>
            <div class="nu-fact-note">single-family, primary residence use</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Buyer</div>
            <div class="nu-fact-value">A.C. Norris</div>
            <div class="nu-fact-note">cash-capable, financing optional</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Timeline</div>
            <div class="nu-fact-value">30–45 Days</div>
            <div class="nu-fact-note">close target from accepted offer</div>
          </div>
        </div>
      </section>

      <!-- SECTION: PRICING FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="hi">Pricing</span> <span class="rest">framework — anchors, walks, targets</span></h2>
        <div class="nu-section-rule"></div>
        <p>Before Aaron writes a number on paper, he needs three prices fixed in his own mind. Everything during the negotiation is a move between these three. He should <b>never</b> verbalize the top of his range — that is for him alone.</p>
        <table class="nu-table" aria-label="Pricing framework">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Definition</th>
              <th>Posture</th>
              <th class="num">% of List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Opening Offer</b></td>
              <td>First written bid. Leaves room to move without insulting.</td>
              <td>Low but justified by comps + condition notes.</td>
              <td class="num">~88%</td>
            </tr>
            <tr class="row-target">
              <td><b>Target Price</b></td>
              <td>The price Aaron actually wants to land on.</td>
              <td>Where the deal should settle after one or two counters.</td>
              <td class="num">~93%</td>
            </tr>
            <tr>
              <td><b>Walk-Away</b></td>
              <td>The number above which total cost of ownership no longer works.</td>
              <td>Non-negotiable. Write it down before the first call.</td>
              <td class="num">~96%</td>
            </tr>
            <tr>
              <td><b>Gift Zone</b></td>
              <td>Anything above Walk-Away.</td>
              <td>Not a deal — it is charity to the seller.</td>
              <td class="num">&gt;96%</td>
            </tr>
          </tbody>
        </table>
        <div class="nu-callout warn" style="margin-top:18px;">
          <b>Rule:</b> the Walk-Away number gets written on a sticky note and stays in Aaron's pocket. It does not move mid-negotiation. It moves only after new diligence data comes back (inspection, survey, title).
        </div>
      </section>

      <!-- SECTION: PHASES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="hi">Playbook</span> <span class="rest">— four phases, in order</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-phases">
          <div class="nu-phase">
            <div class="nu-phase-num">1</div>
            <div class="phase-when">Days 1–3</div>
            <h4>Diligence &amp; Anchor</h4>
            <ul>
              <li>Pull last 12 months of comparable sales within 1 mile, 6,000+ sq ft.</li>
              <li>Confirm tax assessment, lot size, HOA status, any easements.</li>
              <li>Drive the property twice — once weekday, once weekend evening.</li>
              <li>Identify the seller's motivation (relocation, estate, divorce, tired landlord).</li>
              <li>Decide Opening / Target / Walk-Away numbers in writing.</li>
            </ul>
          </div>
          <div class="nu-phase">
            <div class="nu-phase-num">2</div>
            <div class="phase-when">Days 4–7</div>
            <h4>Opening Offer</h4>
            <ul>
              <li>Submit written offer at Opening number with 48-hour response window.</li>
              <li>Include earnest money that signals seriousness — not so large it hurts.</li>
              <li>Attach a short cover letter: who Aaron is, why this house, clean close.</li>
              <li>Request the inspection period begin on acceptance, not on binder.</li>
              <li>Keep phone tone warm; keep paper tone firm.</li>
            </ul>
          </div>
          <div class="nu-phase">
            <div class="nu-phase-num">3</div>
            <div class="phase-when">Days 8–18</div>
            <h4>Counter &amp; Inspect</h4>
            <ul>
              <li>Expect a counter near list — respond to Target, not to midpoint.</li>
              <li>Independent inspection: roof, HVAC, foundation, electrical, plumbing, termite.</li>
              <li>Convert every verified defect into a <i>credit request</i>, not a price drop.</li>
              <li>Hold firm on Walk-Away — silence is a tool, not an insult.</li>
              <li>Document all concessions in writing the same day.</li>
            </ul>
          </div>
          <div class="nu-phase">
            <div class="nu-phase-num">4</div>
            <div class="phase-when">Days 19–45</div>
            <h4>Close &amp; Confirm</h4>
            <ul>
              <li>Title search, survey, insurance binder, wire instructions — double-verified.</li>
              <li>Final walk-through within 48 hours of closing.</li>
              <li>Funds wired only after title confirms clear.</li>
              <li>Keep a full paper trail: offers, counters, credits, signed addenda.</li>
              <li>Post-close: change locks, re-key, confirm utilities transferred.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: LEVERAGE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="hi">Leverage</span> <span class="rest">— what Aaron brings to the table</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-facts">
          <div class="nu-fact">
            <div class="nu-fact-label">Certainty of Close</div>
            <div class="nu-fact-value">Cash-Capable</div>
            <div class="nu-fact-note">no financing contingency risk to seller</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Speed</div>
            <div class="nu-fact-value">30 Days</div>
            <div class="nu-fact-note">most contracts in the market run 45–60</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Clean Terms</div>
            <div class="nu-fact-value">As-Is*</div>
            <div class="nu-fact-note">with inspection-period credit language</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Flexibility</div>
            <div class="nu-fact-value">Leaseback</div>
            <div class="nu-fact-note">offer 30–60 day rent-back if seller needs it</div>
          </div>
        </div>
        <div class="nu-callout win">
          <b>The quiet power move:</b> a cash buyer offering a 30-day leaseback at zero rent is worth roughly 2–3% of price to a seller who hasn't picked their next home yet. Use that lever when the gap is small.
        </div>
      </section>

      <!-- SECTION: SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="hi">Scripts</span> <span class="rest">— what to say, verbatim</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-script">
          <div class="speaker">Opening call to the listing agent</div>
          <p>"I'm Aaron Norris. I've walked 4505 Buttewoods and I'm serious. I'm cash-capable, I can close in thirty days, and I won't waste anyone's time. Before I write a number, I want to understand what matters most to the seller — price, timing, or a clean close. What are they telling you?"</p>
        </div>

        <div class="nu-script">
          <div class="speaker">After receiving a counter at or near list</div>
          <p>"I appreciate the response. I'm not here to go back and forth on small moves. Here is where I can be — and here is why, based on comps and condition. If that works, we can have a signed contract before the weekend. If it doesn't, I understand, and I wish the seller well."</p>
        </div>

        <div class="nu-script">
          <div class="speaker">Inspection credit request</div>
          <p>"The inspection surfaced items I wasn't able to price at the offer stage. I'm not asking the seller to do the work — I'd rather close on time and handle it myself. I'm asking for a credit at closing equal to the verified repair scope. Here's the report, here are the line items, here's the number."</p>
        </div>

        <div class="nu-script">
          <div class="speaker">Walking away — only if needed</div>
          <p>"I've stretched to where I can stretch. I respect the seller's position, and I don't want to drag this out. I'll withdraw my offer today. If anything changes on their side in the next two weeks, I'm still a one-call-away cash close. Thank you for your time."</p>
        </div>
      </section>

      <!-- SECTION: RISK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="hi">Risk</span> <span class="rest">— where deals go sideways</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-callout warn">
          <b>Emotional anchoring.</b> Large, beautiful estates can pull a buyer past his Walk-Away. Decide the number in the kitchen at 5 AM, not in the driveway at sunset.
        </div>
        <div class="nu-callout warn">
          <b>Hidden deferred maintenance.</b> A 7,000+ sq ft home can hide $100K of roof, HVAC, and water-intrusion work. Inspection is cheap relative to that risk.
        </div>
        <div class="nu-callout warn">
          <b>Title surprises.</b> Estates sometimes carry easements, unrecorded contractor liens, or old mineral rights. Order the full title commitment early.
        </div>
        <div class="nu-callout stop">
          <b>Wire fraud.</b> The closing week is when fraudulent wire-change emails get sent. Confirm wire instructions by phone using a number Aaron dialed — never a number in an email.
        </div>
      </section>

      <!-- SECTION: RED LINES -->
      <section class="nu-section">
        <div class="nu-redlines">
          <h3>Red Lines — non-negotiable</h3>
          <ul>
            <li>No closing without a clear title commitment in hand.</li>
            <li>No waiving of inspection period. Ever. Regardless of market pressure.</li>
            <li>No price above the Walk-Away. Walk-Away moves only on new diligence data.</li>
            <li>No verbal concessions. Everything in writing, same day, signed.</li>
            <li>No wire of funds without phone-verified instructions to a known contact.</li>
            <li>No earnest money release before contingencies are satisfied in writing.</li>
          </ul>
        </div>
      </section>

      <!-- SECTION: CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="hi">Checklist</span> <span class="rest">— before Aaron signs anything</span></h2>
        <div class="nu-section-rule"></div>
        <ul class="nu-checklist">
          <li>Comparable sales pulled (12 months, 1-mile radius, 6,000+ sq ft).</li>
          <li>Opening, Target, and Walk-Away numbers written and dated.</li>
          <li>Seller motivation identified in one sentence.</li>
          <li>Independent inspector booked (roof, HVAC, foundation, electrical, plumbing, termite).</li>
          <li>Title commitment ordered from a firm Aaron has used before.</li>
          <li>Insurance binder quote obtained before offer submitted.</li>
          <li>Proof-of-funds letter dated within 10 days of offer.</li>
          <li>Closing attorney or escrow agent selected and briefed.</li>
          <li>Wire instructions confirmed by phone — not by email.</li>
          <li>Final walk-through scheduled within 48 hours of closing.</li>
        </ul>
      </section>

      <!-- SECTION: DECISION SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="hi">Bottom</span> <span class="rest">line</span></h2>
        <div class="nu-section-rule"></div>
        <p>4505 Buttewoods is a 7,098 sq ft estate acquisition. The negotiation wins when Aaron enters with three fixed prices, a documented comp set, and a cash-plus-speed leverage package — and when he treats inspection findings as credit requests rather than price re-trades. The posture is calm, warm on the phone, firm on paper, and unmoved past the Walk-Away.</p>
        <p>Next action: set the Opening / Target / Walk-Away numbers today, pull the comp set, and book the inspector before submitting the written offer.</p>
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
    <div class="nu-footer-meta">Internal Briefing — Prepared 2026-04-22 — Confidential</div>
  </footer>

</body>
</html>