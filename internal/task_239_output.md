<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>4505 Buttewoods Estate Acquisition Brief — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
    padding: 60px 40px 80px;
    text-align: center;
    overflow: hidden;
    min-height: 280px;
  }
  .nu-header::before {
    content: '';
    position: absolute; inset: 0;
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
    background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
    z-index: 1;
  }
  .nu-header > * { position: relative; z-index: 2; }

  .nu-phoenix-icon {
    width: 80px; height: 80px;
    margin: 0 auto 16px;
    filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
  }
  .nu-logo-text {
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
    font-family: 'Playfair Display', Georgia, serif;
    font-style: italic;
    font-weight: 400;
    font-size: 1.3rem;
    color: rgba(255,255,255,0.95);
    letter-spacing: 0.03em;
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
    overflow: hidden;
  }
  .nu-content-area::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 65%; padding-bottom: 65%;
    background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
    opacity: 0.07;
  }
  .nu-inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 40px;
  }

  /* DOC HEADER */
  .doc-title {
    text-align: center;
    margin-bottom: 8px;
  }
  .doc-eyebrow {
    display: inline-block;
    background: var(--nu-navy);
    color: var(--nu-cyan);
    padding: 6px 18px;
    border-radius: 2px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }
  .doc-title h1 {
    font-weight: 900;
    font-size: 2.4rem;
    color: var(--nu-dark-text);
    letter-spacing: -0.01em;
    line-height: 1.15;
    margin-bottom: 10px;
  }
  .doc-title h1 .accent { color: #0033cc; }
  .doc-subtitle {
    font-size: 1.05rem;
    color: #555;
    max-width: 740px;
    margin: 0 auto 40px;
  }

  /* META STRIP */
  .meta-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    background: var(--nu-medium-gray);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 48px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  }
  .meta-cell {
    background: var(--nu-white);
    padding: 20px 18px;
    text-align: center;
  }
  .meta-label {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--nu-blue);
    margin-bottom: 6px;
  }
  .meta-value {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--nu-dark-text);
  }

  /* SECTION HEADERS */
  .nu-section-title {
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 8px;
    letter-spacing: -0.005em;
  }
  .nu-section-title .first { color: #0033cc; }
  .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
  .section-rule {
    width: 60px; height: 3px;
    background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
    margin-bottom: 22px;
  }
  section.block { margin-bottom: 48px; }

  /* CHEVRON BADGES */
  .nu-badge {
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
    color: var(--nu-white);
    padding: 14px 30px 14px 20px;
    margin-bottom: 14px;
    clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
    font-weight: 700;
    font-size: 0.95rem;
  }
  .nu-badge .num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px; height: 30px;
    border-radius: 50%;
    background: var(--nu-cyan);
    color: var(--nu-navy);
    font-weight: 900;
    font-size: 0.85rem;
    margin-right: 14px;
    flex-shrink: 0;
  }

  /* CARDS */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 18px;
  }
  .nu-card {
    background: var(--nu-white);
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border: 1px solid var(--nu-medium-gray);
    border-top: 4px solid var(--nu-blue);
  }
  .nu-card h3 {
    font-weight: 900;
    font-size: 1.05rem;
    color: var(--nu-dark-text);
    margin-bottom: 8px;
  }
  .nu-card p {
    font-size: 0.92rem;
    color: #444;
  }
  .nu-card ul {
    margin-top: 8px;
    padding-left: 18px;
    font-size: 0.92rem;
    color: #444;
  }
  .nu-card ul li { margin-bottom: 4px; }

  /* TABLE */
  .nu-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--nu-white);
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border-radius: 8px;
    overflow: hidden;
  }
  .nu-table th {
    background: linear-gradient(135deg, var(--nu-navy), #000066);
    color: var(--nu-white);
    padding: 14px 18px;
    text-align: left;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 700;
  }
  .nu-table td {
    padding: 14px 18px;
    border-bottom: 1px solid var(--nu-medium-gray);
    font-size: 0.92rem;
  }
  .nu-table tr:last-child td { border-bottom: none; }
  .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }
  .nu-table .phase-col { font-weight: 700; color: var(--nu-blue); white-space: nowrap; }

  /* CALLOUT */
  .callout {
    background: linear-gradient(135deg, rgba(0,0,255,0.04), rgba(6,208,255,0.08));
    border-left: 5px solid var(--nu-blue);
    padding: 22px 26px;
    border-radius: 0 8px 8px 0;
    margin-bottom: 22px;
  }
  .callout strong { color: var(--nu-blue); }
  .callout.warn {
    background: linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.04));
    border-left-color: var(--nu-accent-gold);
  }
  .callout.warn strong { color: #8a7028; }

  /* NEGOTIATION LEVERS */
  .lever-list {
    list-style: none;
    padding: 0;
  }
  .lever-list li {
    background: var(--nu-white);
    border: 1px solid var(--nu-medium-gray);
    border-radius: 6px;
    padding: 16px 20px 16px 56px;
    margin-bottom: 10px;
    position: relative;
    font-size: 0.95rem;
  }
  .lever-list li::before {
    content: '→';
    position: absolute;
    left: 18px; top: 50%;
    transform: translateY(-50%);
    width: 28px; height: 28px;
    background: var(--nu-blue);
    color: var(--nu-white);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 0.9rem;
  }
  .lever-list li strong { color: var(--nu-dark-text); }

  /* ACTIONS */
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    justify-content: center;
    margin-top: 16px;
  }
  .nu-btn-primary, .nu-btn-secondary {
    display: inline-block;
    padding: 14px 30px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .nu-btn-primary {
    background: var(--nu-blue);
    color: var(--nu-white);
    border: 2px solid var(--nu-blue);
  }
  .nu-btn-primary:hover {
    background: #0000CC;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,255,0.3);
  }
  .nu-btn-secondary {
    background: transparent;
    color: var(--nu-blue);
    border: 2px solid var(--nu-blue);
  }
  .nu-btn-secondary:hover {
    background: var(--nu-blue);
    color: var(--nu-white);
  }

  /* FOOTER */
  .nu-footer {
    background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
    color: rgba(255,255,255,0.85);
    padding: 48px 40px;
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
    font-size: 0.95rem;
    line-height: 1.85;
  }
  .nu-footer-contact a {
    color: var(--nu-cyan);
    text-decoration: none;
  }
  .nu-footer-contact a:hover { text-decoration: underline; }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .nu-header { padding: 40px 20px 60px; min-height: 200px; }
    .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
    .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
    .nu-tagline { font-size: 1rem; }
    .nu-inner { padding: 40px 22px; }
    .doc-title h1 { font-size: 1.7rem; }
    .meta-strip { grid-template-columns: repeat(2, 1fr); }
    .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 20px; }
    .nu-table { font-size: 0.85rem; }
    .nu-table th, .nu-table td { padding: 10px 12px; }
  }

  @media print {
    .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .nu-card, .nu-table { box-shadow: none; border: 1px solid #ccc; }
    .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    .actions { display: none; }
  }
</style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-inner">

      <!-- DOC TITLE -->
      <div class="doc-title">
        <span class="doc-eyebrow">Strategic Acquisition Brief · Confidential</span>
        <h1><span class="accent">Negotiation Plan:</span> 4505 Buttewoods Estate</h1>
        <p class="doc-subtitle">
          7,098 sq ft residence — negotiation strategy, valuation framework, diligence checklist, and action plan for Aaron C. Norris, Founder &amp; CEO, Norris Utilities®.
        </p>
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
          <div class="meta-label">Source</div>
          <div class="meta-value">reMarkable Note</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Status</div>
          <div class="meta-value">Action Required</div>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first">Objective</span> <span class="rest">&amp; Guiding Principles</span></h2>
        <div class="section-rule"></div>
        <div class="callout">
          Negotiate acquisition of the 7,098 sq ft estate at <strong>4505 Buttewoods</strong> on terms that preserve operating capital for Norris Utilities®, protect personal cash flow, and secure a long-term residence aligned with Aaron's family and business goals.
        </div>
        <div class="card-grid">
          <div class="nu-card">
            <h3>Discipline on Price</h3>
            <p>Anchor to verified comps and independent appraisal, not listing aspirations. Walk-away price is set before the first conversation.</p>
          </div>
          <div class="nu-card">
            <h3>Protect the Business</h3>
            <p>No personal guarantee or loan structure that creates exposure against Norris Utilities® operating cash flow or FlexPro Armor growth capital.</p>
          </div>
          <div class="nu-card">
            <h3>Leverage, Not Pressure</h3>
            <p>Position as a ready, credible buyer. Never reveal emotional attachment. Every concession earned — nothing volunteered.</p>
          </div>
        </div>
      </section>

      <!-- VALUATION FRAMEWORK -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Framework</span></h2>
        <div class="section-rule"></div>
        <p style="margin-bottom: 18px;">Build three independent price anchors before first offer. The <strong>lowest</strong> defensible number among the three becomes the opening position; the <strong>midpoint</strong> becomes target; the <strong>highest</strong> becomes the ceiling.</p>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Anchor</th>
              <th>Method</th>
              <th>What It Tells You</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="phase-col">Comparable Sales</td>
              <td>Closed sales within 12 months, 5,500–8,000 sq ft, same ZIP / school zone</td>
              <td>Market reality — what real buyers actually paid</td>
            </tr>
            <tr>
              <td class="phase-col">Independent Appraisal</td>
              <td>Licensed appraiser — NOT the listing agent's recommendation</td>
              <td>Defensible number if financing is involved</td>
            </tr>
            <tr>
              <td class="phase-col">Replacement Cost</td>
              <td>Land value + current build cost per sq ft − depreciation</td>
              <td>Ceiling: never pay more than it would cost to build</td>
            </tr>
            <tr>
              <td class="phase-col">Days on Market</td>
              <td>How long has it sat? Any prior price cuts?</td>
              <td>Seller motivation signal — longer DOM = more leverage</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- NEGOTIATION PHASES -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Sequence</span></h2>
        <div class="section-rule"></div>

        <div class="nu-badge"><span class="num">1</span> PREPARE — Complete valuation before any conversation</div>
        <div class="nu-badge"><span class="num">2</span> ENGAGE — Request seller disclosures, survey, tax records</div>
        <div class="nu-badge"><span class="num">3</span> OPEN — Written offer at anchor low, cash or clean financing</div>
        <div class="nu-badge"><span class="num">4</span> COUNTER — Trade terms, not price; extract concessions each round</div>
        <div class="nu-badge"><span class="num">5</span> CLOSE — Contract reviewed by attorney before signature</div>
      </section>

      <!-- LEVERS -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Levers</span></h2>
        <div class="section-rule"></div>
        <ul class="lever-list">
          <li><strong>Proof of funds up front.</strong> Credibility converts to price — a ready buyer buys cheaper than three maybe-buyers.</li>
          <li><strong>Short, clean inspection window.</strong> Speed and certainty are worth real dollars to any seller with carrying costs.</li>
          <li><strong>Flexible closing date.</strong> Match the seller's next-move timeline; convert their convenience into a price concession.</li>
          <li><strong>Limited contingencies.</strong> Waive the trivial, keep the critical: inspection, title, financing (if applicable), survey.</li>
          <li><strong>Include furniture / fixtures.</strong> Ask for everything bolted and unbolted — pool equipment, lawn equipment, appliances, media. Seller often trades easier than on price.</li>
          <li><strong>Seller-paid closing costs.</strong> Effective 1–3% price reduction without changing the headline number.</li>
          <li><strong>Repair credits, not repairs.</strong> Take cash at closing instead of letting seller pick the cheapest contractor.</li>
          <li><strong>Silence.</strong> After every offer, stop talking. The next person to speak loses value.</li>
        </ul>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="section-rule"></div>
        <div class="card-grid">
          <div class="nu-card">
            <h3>Title &amp; Legal</h3>
            <ul>
              <li>Full title search (clean chain of title, no liens)</li>
              <li>Survey — verify lot lines &amp; easements</li>
              <li>HOA documents &amp; any pending assessments</li>
              <li>Zoning, deed restrictions, covenants</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Structural &amp; Systems</h3>
            <ul>
              <li>Licensed home inspection (foundation, roof, framing)</li>
              <li>HVAC, electrical, plumbing individually assessed</li>
              <li>Sewer scope &amp; well/water quality (if applicable)</li>
              <li>Termite / WDO inspection</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Environmental</h3>
            <ul>
              <li>Radon, mold, lead-based paint, asbestos</li>
              <li>Flood zone determination &amp; elevation certificate</li>
              <li>Prior insurance claim history (CLUE report)</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Financial</h3>
            <ul>
              <li>Property tax history &amp; current assessment</li>
              <li>Utility cost history (12 months)</li>
              <li>Insurance quote before offer acceptance</li>
              <li>Title insurance policy cost estimate</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- WALK-AWAY -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first">Walk-Away</span> <span class="rest">Discipline</span></h2>
        <div class="section-rule"></div>
        <div class="callout warn">
          <strong>Rule:</strong> Walk-away price is written down <em>before</em> the first conversation with the seller. If counters exceed it, the deal dies — no exceptions.
          The strongest position in any negotiation is genuine willingness to leave. The second-strongest is knowing exactly where the line is.
        </div>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Trigger</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="phase-col">Appraisal below offer</td>
              <td>Renegotiate to appraised value or walk</td>
            </tr>
            <tr>
              <td class="phase-col">Inspection reveals major defect</td>
              <td>Full price reduction or credit — no splitting</td>
            </tr>
            <tr>
              <td class="phase-col">Title cloud / easement surprise</td>
              <td>Seller cures before closing or deal terminates</td>
            </tr>
            <tr>
              <td class="phase-col">Seller pulls a term mid-escrow</td>
              <td>Put it in writing or walk; never on verbal</td>
            </tr>
            <tr>
              <td class="phase-col">Personal financial stress signal</td>
              <td>Pause. The right deal does not require a stretch.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- ADVISORY TEAM -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first">Advisory</span> <span class="rest">Team to Engage</span></h2>
        <div class="section-rule"></div>
        <div class="card-grid">
          <div class="nu-card">
            <h3>Real Estate Attorney</h3>
            <p>Contract review before any signature. Not the seller's attorney, not the listing agent's referral — an independent attorney whose only loyalty is Aaron's.</p>
          </div>
          <div class="nu-card">
            <h3>Buyer's Agent (Optional)</h3>
            <p>Negotiated commission only — no dual agency. Consider going direct if commission savings fund concessions.</p>
          </div>
          <div class="nu-card">
            <h3>Licensed Appraiser</h3>
            <p>Buyer-paid, buyer-selected. Independent of the lender's panel if possible.</p>
          </div>
          <div class="nu-card">
            <h3>Banker — Renasant</h3>
            <p>Patrick Lavette — pre-qualification letter if financing; discuss personal vs. entity structure before offer.</p>
          </div>
          <div class="nu-card">
            <h3>CPA</h3>
            <p>Evaluate tax impact of ownership structure (personal / LLC / trust) before closing, not after.</p>
          </div>
          <div class="nu-card">
            <h3>Home Inspector</h3>
            <p>Licensed, insured, not affiliated with seller or listing brokerage.</p>
          </div>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Actions</span></h2>
        <div class="section-rule"></div>
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width:10%;">#</th>
              <th>Action</th>
              <th style="width:20%;">Owner</th>
              <th style="width:20%;">Due</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="phase-col">1</td>
              <td>Pull closed comps (5,500–8,000 sq ft) within 12 months</td>
              <td>Aaron</td>
              <td>Within 48 hours</td>
            </tr>
            <tr>
              <td class="phase-col">2</td>
              <td>Call Patrick Lavette — pre-qualification &amp; structure options</td>
              <td>Aaron</td>
              <td>This week</td>
            </tr>
            <tr>
              <td class="phase-col">3</td>
              <td>Engage real estate attorney — contract &amp; entity review</td>
              <td>Aaron</td>
              <td>This week</td>
            </tr>
            <tr>
              <td class="phase-col">4</td>
              <td>Document target / walk-away prices in writing</td>
              <td>Aaron</td>
              <td>Before first offer</td>
            </tr>
            <tr>
              <td class="phase-col">5</td>
              <td>Request seller disclosures, survey, tax records</td>
              <td>Aaron / Agent</td>
              <td>Before first offer</td>
            </tr>
            <tr>
              <td class="phase-col">6</td>
              <td>Schedule independent appraisal &amp; licensed inspection</td>
              <td>Aaron</td>
              <td>Post-acceptance, pre-contingency release</td>
            </tr>
          </tbody>
        </table>

        <div class="actions">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron · 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Acquisition" class="nu-btn-secondary">Email Aaron</a>
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
  </footer>

</body>
</html>