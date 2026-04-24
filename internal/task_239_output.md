<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Action Plan — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-success: #0F7B3F;
      --nu-warn: #B8860B;
      --nu-danger: #B22222;
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
      padding: 60px 40px 80px;
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
      opacity: 0.65;
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 20px;
      color: var(--nu-white);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.25em;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 120px; left: 50%;
      transform: translateX(-50%);
      width: 65%; aspect-ratio: 1;
      background-image: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      opacity: 0.7;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-wrap {
      max-width: 1120px;
      margin: 0 auto;
      padding: 60px 40px 40px;
    }

    /* ══ TITLE BLOCK ══ */
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .doc-title span { color: #0033cc; }
    .doc-subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 28px;
    }

    /* ══ META STRIP ══ */
    .meta-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0;
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 40px;
    }
    .meta-cell {
      padding: 16px 20px;
      border-right: 1px solid var(--nu-medium-gray);
    }
    .meta-cell:last-child { border-right: none; }
    .meta-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 4px;
    }
    .meta-value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ SECTION ══ */
    .section {
      margin-bottom: 44px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 4px;
    }
    .section-title .first { color: #0033cc; }
    .section-title .rest { color: var(--nu-dark-text); }
    .section-rule {
      height: 3px;
      width: 56px;
      background: var(--nu-cyan);
      margin-bottom: 20px;
      border-radius: 2px;
    }
    .section p {
      margin-bottom: 12px;
      color: #2a2a2a;
    }

    /* ══ BADGE (chevron) ══ */
    .badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 14px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-right: 8px;
    }

    /* ══ KEY FACTS GRID ══ */
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .fact-card .k {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .fact-card .v {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .fact-card .sub {
      font-size: 0.8rem;
      color: #666;
      margin-top: 4px;
      font-weight: 400;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .tl-item {
      position: relative;
      margin-bottom: 22px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -25px;
      top: 6px;
      width: 14px;
      height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .tl-item.done::before { background: var(--nu-blue); }
    .tl-step {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 3px;
    }
    .tl-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .tl-body {
      font-size: 0.95rem;
      color: #444;
    }

    /* ══ TABLE ══ */
    .tbl-wrap {
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 12px;
    }
    table.negtable {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    table.negtable thead {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    table.negtable th {
      padding: 12px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    table.negtable td {
      padding: 12px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.negtable tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .pill {
      display: inline-block;
      padding: 3px 10px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 12px;
    }
    .pill.target { background: #e6f4ff; color: #0033cc; }
    .pill.walk { background: #fdecec; color: var(--nu-danger); }
    .pill.stretch { background: #fff6df; color: var(--nu-warn); }

    /* ══ CHECKLIST ══ */
    ul.checklist {
      list-style: none;
      padding: 0;
    }
    ul.checklist li {
      position: relative;
      padding: 10px 0 10px 34px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.97rem;
      color: #2a2a2a;
    }
    ul.checklist li:last-child { border-bottom: none; }
    ul.checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 12px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    ul.checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ CALLOUT ══ */
    .callout {
      display: flex;
      gap: 16px;
      padding: 20px 24px;
      border-radius: 8px;
      background: linear-gradient(135deg, #f0f7ff 0%, #e6f2ff 100%);
      border-left: 5px solid var(--nu-blue);
      margin: 20px 0;
    }
    .callout.warn {
      background: linear-gradient(135deg, #fff8e6 0%, #fff2cc 100%);
      border-left-color: var(--nu-warn);
    }
    .callout.danger {
      background: linear-gradient(135deg, #fdecec 0%, #fce0e0 100%);
      border-left-color: var(--nu-danger);
    }
    .callout-icon {
      flex-shrink: 0;
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .callout.warn .callout-icon { background: var(--nu-warn); }
    .callout.danger .callout-icon { background: var(--nu-danger); }
    .callout-body { flex: 1; }
    .callout-body strong { color: var(--nu-dark-text); }

    /* ══ TWO COLUMN ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .col-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .col-card h4 {
      font-size: 1.05rem;
      font-weight: 900;
      color: #0033cc;
      margin-bottom: 10px;
    }
    .col-card ul { padding-left: 20px; }
    .col-card ul li { margin-bottom: 6px; font-size: 0.95rem; }

    /* ══ SCRIPT BLOCK ══ */
    .script {
      background: #0a0e5c;
      color: #e8f3ff;
      border-radius: 8px;
      padding: 24px 26px;
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 12px;
      border-left: 4px solid var(--nu-cyan);
    }
    .script .label {
      display: block;
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .script em { color: var(--nu-cyan); font-style: normal; font-weight: 700; }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #000099 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 14px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 1.9rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 40px 22px 30px; }
      .doc-title { font-size: 1.6rem; }
      .two-col { grid-template-columns: 1fr; }
      .meta-cell { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
      .meta-cell:last-child { border-bottom: none; }
      table.negtable th, table.negtable td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: #0033cc !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .fact-card, .col-card, .tbl-wrap { box-shadow: none; border: 1px solid #ccc; }
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
    <div class="nu-doc-label">Private &nbsp;•&nbsp; Negotiation Playbook</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- TITLE -->
      <div>
        <div class="doc-title"><span>Estate Acquisition</span> — 4505 Buttewoods</div>
        <div class="doc-subtitle">Negotiation action plan for 7,098 sq ft residence. Prepared for Aaron C. Norris.</div>
      </div>

      <!-- META STRIP -->
      <div class="meta-strip">
        <div class="meta-cell">
          <div class="meta-label">Property</div>
          <div class="meta-value">4505 Buttewoods</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Size</div>
          <div class="meta-value">7,098 sq ft</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Doc Date</div>
          <div class="meta-value">April 24, 2026</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Owner</div>
          <div class="meta-value">Aaron C. Norris</div>
        </div>
      </div>

      <!-- SECTION: OBJECTIVE -->
      <section class="section">
        <div class="section-title"><span class="first">Objective</span> <span class="rest">&amp; Context</span></div>
        <div class="section-rule"></div>
        <p>Secure 4505 Buttewoods on terms that protect capital, keep monthly cash flow aligned with Norris Utilities® operating needs, and leave working capital available for FlexPro Armor inventory and Skylift commitments already in motion.</p>
        <p>This is a buy-side negotiation. The goal is not to "win" the list price war — the goal is to close at a number and on terms that look smart two years from now, after closing costs, carrying costs, and any deferred maintenance are on the books.</p>

        <div class="callout">
          <div class="callout-icon">i</div>
          <div class="callout-body">
            <strong>Rule of engagement.</strong> No offer goes out without (1) current comp pull, (2) H2O Waterproofing quote in writing, and (3) Peace of Mind maintenance program clarified. These three items anchor every number below.
          </div>
        </div>
      </section>

      <!-- SECTION: KEY FACTS -->
      <section class="section">
        <div class="section-title"><span class="first">Key</span> <span class="rest">Facts</span></div>
        <div class="section-rule"></div>
        <div class="facts-grid">
          <div class="fact-card">
            <div class="k">Living Area</div>
            <div class="v">7,098 sq ft</div>
            <div class="sub">Estate-scale residence</div>
          </div>
          <div class="fact-card">
            <div class="k">Address</div>
            <div class="v">4505 Buttewoods</div>
            <div class="sub">Subject property</div>
          </div>
          <div class="fact-card">
            <div class="k">Buyer</div>
            <div class="v">Aaron C. Norris</div>
            <div class="sub">Principal &amp; decision-maker</div>
          </div>
          <div class="fact-card">
            <div class="k">Stance</div>
            <div class="v">Ready, Not Desperate</div>
            <div class="sub">Walk-away enabled</div>
          </div>
        </div>
      </section>

      <!-- SECTION: PRE-OFFER CHECKLIST -->
      <section class="section">
        <div class="section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></div>
        <div class="section-rule"></div>
        <p>Every item on this list must be complete — in writing — before the written offer leaves the table.</p>
        <ul class="checklist">
          <li><strong>Comparable sales pulled</strong> for homes 6,000–8,000 sq ft within 3 miles, closed in the last 12 months. Note price-per-square-foot range and days on market.</li>
          <li><strong>H2O Waterproofing written quote</strong> obtained before closing. Scope, price, and warranty terms in writing — not verbal, not "ballpark."</li>
          <li><strong>Peace of Mind maintenance program verified</strong> — determine whether it is required by HOA/covenant or optional. Cost, renewal terms, transferability at closing.</li>
          <li><strong>Independent inspection ordered</strong> — structural, roof, HVAC (likely multiple systems at 7,098 sq ft), plumbing, electrical panel capacity, and foundation moisture readings.</li>
          <li><strong>Property tax history</strong> last 3 years and millage trend. Project year-one tax at the target purchase price.</li>
          <li><strong>Insurance binder quote</strong> from Aaron's current carrier. Confirm wind/hail, water backup, and replacement cost coverage.</li>
          <li><strong>Financing pre-approval or proof of funds</strong> current within 30 days. Cash-ready signal strengthens every lever below.</li>
          <li><strong>Title search preliminary</strong> — check for easements, liens, restrictive covenants, and any shared-access or drainage agreements.</li>
          <li><strong>Survey reviewed</strong> — lot lines, setbacks, encroachments, and any outbuilding permit history.</li>
          <li><strong>Seller motivation assessed</strong> — days on market, prior price reductions, reason for sale, competing offers (ask directly).</li>
        </ul>
      </section>

      <!-- SECTION: NEGOTIATION POSITIONS -->
      <section class="section">
        <div class="section-title"><span class="first">Price</span> <span class="rest">Ladder</span></div>
        <div class="section-rule"></div>
        <p>Set the three numbers below <em>before</em> the first conversation. Do not recalculate them mid-negotiation. Anchoring discipline is the single biggest lever on final price.</p>
        <div class="tbl-wrap">
          <table class="negtable">
            <thead>
              <tr>
                <th>Position</th>
                <th>Definition</th>
                <th>Action Trigger</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="pill target">Target</span></td>
                <td>The number Aaron is pleased to pay after comps, inspection findings, and a reasonable discount for size illiquidity (7,098 sq ft has a narrow buyer pool).</td>
                <td>Lead with this or slightly below. If seller meets target, close fast.</td>
              </tr>
              <tr>
                <td><span class="pill stretch">Stretch</span></td>
                <td>Above target, but acceptable if non-price terms (credits, timeline, repairs) swing in Norris's favor.</td>
                <td>Move here only after seller gives meaningful concession — a credit, a repair, or closing-cost help.</td>
              </tr>
              <tr>
                <td><span class="pill walk">Walk-Away</span></td>
                <td>The absolute ceiling. Past this number, Aaron walks, period. Written down in advance to eliminate emotional drift at the table.</td>
                <td>If seller refuses to come below this, end the negotiation cleanly and do not return without a price drop from the seller's side.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="callout warn">
          <div class="callout-icon">!</div>
          <div class="callout-body">
            <strong>Fill these numbers in on paper before the first offer.</strong> Leaving them blank until the table is "live" is how buyers overpay. Write them on the inside cover of the offer folder and don't erase.
          </div>
        </div>
      </section>

      <!-- SECTION: NON-PRICE LEVERS -->
      <section class="section">
        <div class="section-title"><span class="first">Non-Price</span> <span class="rest">Levers</span></div>
        <div class="section-rule"></div>
        <p>Price gets the headline. Terms get the deal. These levers often move farther than price once a seller is dug in.</p>
        <div class="two-col">
          <div class="col-card">
            <h4>Levers Aaron Can Offer</h4>
            <ul>
              <li><strong>Shorter close</strong> — 21–30 days if financing is clean, valuable to a motivated seller.</li>
              <li><strong>Cash (or largely cash) offer</strong> — removes appraisal and financing contingencies.</li>
              <li><strong>Flexible possession</strong> — allow seller a short post-close rent-back if they need it.</li>
              <li><strong>Minimal contingencies</strong> — inspection only, with a tight window.</li>
              <li><strong>Larger earnest money</strong> — signals commitment without raising purchase price.</li>
            </ul>
          </div>
          <div class="col-card">
            <h4>Concessions Aaron Should Ask For</h4>
            <ul>
              <li><strong>H2O Waterproofing work</strong> completed and paid by seller before close — or dollar-for-dollar credit at closing.</li>
              <li><strong>Peace of Mind program</strong> prepaid or transferred current if required.</li>
              <li><strong>Seller closing-cost credit</strong> — common, often worth 1–3% of price.</li>
              <li><strong>Home warranty</strong> one-year, seller-paid.</li>
              <li><strong>Inspection-driven repair credit</strong> for any material finding.</li>
              <li><strong>Included personal property</strong> — any fixtures, appliances, or outbuildings in writing.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: TIMELINE -->
      <section class="section">
        <div class="section-title"><span class="first">Negotiation</span> <span class="rest">Timeline</span></div>
        <div class="section-rule"></div>
        <div class="timeline">
          <div class="tl-item done">
            <div class="tl-step">Step 01 — Discovery</div>
            <div class="tl-title">Own the facts before the first conversation</div>
            <div class="tl-body">Complete the pre-offer checklist above. Comps, H2O quote, Peace of Mind status, tax history, insurance quote, pre-approval.</div>
          </div>
          <div class="tl-item">
            <div class="tl-step">Step 02 — Set Walk-Away</div>
            <div class="tl-title">Fix the three numbers: Target, Stretch, Walk-Away</div>
            <div class="tl-body">Written down, dated, signed by Aaron. Not revisited mid-negotiation.</div>
          </div>
          <div class="tl-item">
            <div class="tl-step">Step 03 — Seller Discovery Call</div>
            <div class="tl-title">Learn the motivation before showing a number</div>
            <div class="tl-body">Why are they selling? Timeline? Prior offers? Competing interest? Use the script in the next section.</div>
          </div>
          <div class="tl-item">
            <div class="tl-step">Step 04 — Written Offer</div>
            <div class="tl-title">Lead with Target, with 2–3 ask-for concessions</div>
            <div class="tl-body">Include H2O credit, closing-cost credit, one-year home warranty, short close. Put a time limit on acceptance — 48 to 72 hours.</div>
          </div>
          <div class="tl-item">
            <div class="tl-step">Step 05 — Counter Response</div>
            <div class="tl-title">Move in terms, not just price</div>
            <div class="tl-body">If seller counters high on price, offer to hold one non-price concession in exchange. Never increase price without getting something in return.</div>
          </div>
          <div class="tl-item">
            <div class="tl-step">Step 06 — Inspection &amp; Final Lever</div>
            <div class="tl-title">Use inspection findings for final price adjustment</div>
            <div class="tl-body">Material findings get written credit requests. Treat the inspection as a second negotiation window, not a formality.</div>
          </div>
          <div class="tl-item">
            <div class="tl-step">Step 07 — Close or Walk</div>
            <div class="tl-title">Execute cleanly either way</div>
            <div class="tl-body">If terms land at or below Walk-Away with acceptable concessions, close. If not, walk without drama — the door stays open for a future price drop.</div>
          </div>
        </div>
      </section>

      <!-- SECTION: OPENING SCRIPTS -->
      <section class="section">
        <div class="section-title"><span class="first">Opening</span> <span class="rest">Scripts</span></div>
        <div class="section-rule"></div>
        <p>Aaron's voice: direct, warm, unhurried. Lead with the ask. No filler. No apology.</p>

        <div class="script">
          <span class="label">Seller Discovery (Verbal)</span>
          "I'm Aaron Norris. I'm looking at 4505 Buttewoods seriously. Before I write anything up, I'd like to understand your timeline and what matters most to you on this sale — <em>is it price, is it close date, is it a clean contract with few strings?</em> The more I know on the front end, the better the offer I can put in front of you."
        </div>

        <div class="script">
          <span class="label">Anchoring the Price (Written)</span>
          "Based on recent comparable sales, the written waterproofing estimate we secured from H2O Waterproofing, and the carrying costs at this size, our number is <em>[TARGET]</em>. We're prepared to close in <em>[30 days]</em> with <em>[earnest money figure]</em> down and only an inspection contingency. We're asking for a <em>[closing-cost credit]</em> and for the waterproofing work to be completed by seller prior to close — or credited at the table."
        </div>

        <div class="script">
          <span class="label">Responding to a High Counter</span>
          "I appreciate you coming off the list price. The gap between your number and ours is <em>[$X]</em>. I can move on price if we can solve <em>[the waterproofing / the closing credit / the Peace of Mind transfer]</em> cleanly. Which of those works on your end?"
        </div>

        <div class="script">
          <span class="label">Walk-Away (Used Rarely, Used Cleanly)</span>
          "Thank you — the number you need and the number I can pay aren't the same today. I'm going to step back. If the situation changes, please reach out directly and we can pick this up again. I mean that."
        </div>
      </section>

      <!-- SECTION: RED FLAGS -->
      <section class="section">
        <div class="section-title"><span class="first">Red</span> <span class="rest">Flags</span></div>
        <div class="section-rule"></div>
        <div class="callout danger">
          <div class="callout-icon">!</div>
          <div class="callout-body">
            <strong>Do not proceed past inspection if any of these surface without a written fix.</strong>
            <ul style="margin-top:8px; padding-left:20px;">
              <li>Active water intrusion, chronic basement moisture, or efflorescence on foundation walls.</li>
              <li>H2O Waterproofing quote Aaron cannot verify in writing before closing.</li>
              <li>Peace of Mind program required by covenant with unclear transfer terms.</li>
              <li>Structural movement signs — stair-step cracks in masonry, sloping floors, sticking doors on load-bearing walls.</li>
              <li>Roof age at or beyond useful life with no seller credit offered.</li>
              <li>Tax assessment trajectory significantly outpacing recent comps.</li>
              <li>Title exceptions — unresolved easements, encroachments, or shared-access disputes.</li>
              <li>Seller pressure to skip inspection or shorten contingency periods beyond reason.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: ADVISORS -->
      <section class="section">
        <div class="section-title"><span class="first">Advisor</span> <span class="rest">Loop</span></div>
        <div class="section-rule"></div>
        <p>A purchase at this size is a team sport. Loop these roles in before the offer goes live.</p>
        <div class="two-col">
          <div class="col-card">
            <h4>Required Before Offer</h4>
            <ul>
              <li>Real estate attorney — contract review, title, closing structure.</li>
              <li>Lender / banker — pre-approval or funds letter current within 30 days.</li>
              <li>Insurance agent — binder quote with wind, hail, water backup, replacement cost.</li>
              <li>Inspector — general plus specialists for foundation and HVAC at this square footage.</li>
              <li>H2O Waterproofing — written quote, warranty terms, transferability.</li>
            </ul>
          </div>
          <div class="col-card">
            <h4>Loop In During Negotiation</h4>
            <ul>
              <li>CPA — tax implications of cash vs. financed close, primary-residence treatment.</li>
              <li>Renasant Bank (Patrick Lavette) — if financing is part of the stack.</li>
              <li>Real estate agent / buyer's rep — if representation is in play, confirm commission structure up front.</li>
              <li>Caroline Butler — calendar holds, document routing, closing logistics support.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NEXT ACTION -->
      <section class="section">
        <div class="section-title"><span class="first">Immediate</span> <span class="rest">Next Actions</span></div>
        <div class="section-rule"></div>
        <ul class="checklist">
          <li><strong>Call H2O Waterproofing</strong> and get the quote in writing before any closing discussion.</li>
          <li><strong>Verify Peace of Mind maintenance program</strong> — required or optional, cost, transfer at closing.</li>
          <li><strong>Pull comparable sales</strong> for 6,000–8,000 sq ft homes within 3 miles, closed in the last 12 months.</li>
          <li><strong>Set the three numbers</strong> — Target, Stretch, Walk-Away — on paper before the first seller conversation.</li>
          <li><strong>Open the advisor loop</strong> — attorney, lender, insurance, inspector, CPA.</li>
        </ul>
        <div class="callout">
          <div class="callout-icon">→</div>
          <div class="callout-body">
            <strong>Owner: Aaron C. Norris.</strong> This document is the working plan. Revisions happen here, not in email threads.
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a>
      &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a>
      &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Private Document &nbsp;•&nbsp; Prepared April 24, 2026</div>
  </footer>

</body>
</html>