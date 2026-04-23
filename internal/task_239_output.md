<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estate Negotiation Brief — 4505 Buttewoods — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
  --nu-success: #00A86B;
  --nu-warn: #E67E22;
  --nu-danger: #C0392B;
  --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-italic: 'Playfair Display', Georgia, serif;
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
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 80px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 100px);
  opacity: 0.6;
  z-index: 1;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -40%; right: -20%;
  width: 80%; height: 200%;
  background: radial-gradient(ellipse, rgba(6, 208, 255, 0.20) 0%, transparent 70%);
  z-index: 1;
}
.nu-header * { position: relative; z-index: 2; }

/* GHOST PHOENIX */
.nu-ghost-phoenix {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  max-width: 500px;
  opacity: 0.07;
  z-index: 1;
  pointer-events: none;
}

.nu-phoenix-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 18px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
}
.nu-logo-text {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 3.4rem;
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
  letter-spacing: 0.8em;
  text-transform: uppercase;
  margin-bottom: 22px;
  padding-left: 0.8em;
}
.nu-tagline {
  font-family: var(--font-italic);
  font-style: italic;
  font-weight: 400;
  font-size: 1.35rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
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
  padding: 0 0 40px 0;
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 10%; left: 50%;
  transform: translateX(-50%);
  width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 40px;
  position: relative;
  z-index: 1;
}

/* DOC META */
.nu-doc-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 30px;
}
.nu-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 20px;
  background: var(--nu-medium-gray);
  color: var(--nu-dark-text);
}
.nu-tag.priority { background: var(--nu-warn); color: var(--nu-white); }
.nu-tag.type { background: var(--nu-blue); color: var(--nu-white); }
.nu-tag.status { background: var(--nu-navy); color: var(--nu-cyan); }
.nu-tag.source { background: var(--nu-light-gray); color: var(--nu-dark-text); border: 1px solid var(--nu-medium-gray); }

.nu-doc-title {
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-dark-text);
  text-align: center;
  line-height: 1.15;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}
.nu-doc-title span { color: var(--nu-blue); }
.nu-doc-sub {
  text-align: center;
  font-size: 1.05rem;
  color: #666;
  margin-bottom: 40px;
}

/* SECTION HEADER */
.nu-section {
  margin-top: 48px;
}
.nu-section-title {
  font-weight: 900;
  font-size: 1.55rem;
  color: var(--nu-dark-text);
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 3px solid var(--nu-medium-gray);
  position: relative;
}
.nu-section-title::before {
  content: '';
  position: absolute;
  bottom: -3px; left: 0;
  width: 60px; height: 3px;
  background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
}
.nu-section-title span { color: var(--nu-blue); margin-right: 6px; }

/* CHEVRON BADGE */
.nu-badge {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 12px 30px 12px 18px;
  margin: 4px 8px 4px 0;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
  font-weight: 700;
  font-size: 0.88rem;
  letter-spacing: 0.03em;
  padding-left: 30px;
}
.nu-badge.cyan { background: linear-gradient(135deg, #0033CC 0%, var(--nu-cyan) 100%); }

/* FACT GRID */
.nu-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2px;
  background: var(--nu-medium-gray);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  overflow: hidden;
}
.nu-fact {
  background: var(--nu-white);
  padding: 20px 22px;
}
.nu-fact-label {
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 6px;
}
.nu-fact-value {
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--nu-dark-text);
  line-height: 1.35;
}
.nu-fact-value small {
  display: block;
  font-size: 0.85rem;
  font-weight: 400;
  color: #777;
  margin-top: 3px;
}

/* CARD */
.nu-card {
  background: var(--nu-white);
  border-radius: 10px;
  padding: 26px 28px;
  box-shadow: 0 2px 14px rgba(0,0,0,0.07);
  border: 1px solid var(--nu-medium-gray);
  margin-bottom: 18px;
}
.nu-card-accent {
  border-left: 4px solid var(--nu-blue);
}
.nu-card-warn {
  border-left: 4px solid var(--nu-warn);
  background: #FFF8F0;
}
.nu-card-ok {
  border-left: 4px solid var(--nu-success);
  background: #F2FBF6;
}
.nu-card h3 {
  font-weight: 900;
  font-size: 1.1rem;
  color: var(--nu-dark-text);
  margin-bottom: 10px;
}
.nu-card p { margin-bottom: 10px; }
.nu-card p:last-child { margin-bottom: 0; }

/* LISTS */
.nu-list { list-style: none; padding: 0; margin: 8px 0; }
.nu-list li {
  padding: 8px 0 8px 26px;
  position: relative;
  line-height: 1.55;
}
.nu-list li::before {
  content: '•';
  position: absolute;
  left: 8px;
  color: var(--nu-blue);
  font-weight: 900;
  font-size: 1.2rem;
  top: 4px;
}
.nu-list.checks li::before {
  content: '▸';
  color: var(--nu-cyan);
}

/* NUMBERED STEPS */
.nu-steps {
  counter-reset: step;
  list-style: none;
  padding: 0;
}
.nu-steps li {
  counter-increment: step;
  position: relative;
  padding: 18px 22px 18px 70px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  margin-bottom: 12px;
  line-height: 1.55;
}
.nu-steps li::before {
  content: counter(step);
  position: absolute;
  left: 18px; top: 50%;
  transform: translateY(-50%);
  width: 38px; height: 38px;
  background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
  color: var(--nu-white);
  font-weight: 900;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,255,0.25);
}
.nu-steps li strong {
  display: block;
  color: var(--nu-dark-text);
  margin-bottom: 4px;
  font-weight: 900;
}

/* TWO-COL */
.nu-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
@media (max-width: 768px) { .nu-two-col { grid-template-columns: 1fr; } }

/* TABLE */
.nu-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  overflow: hidden;
  margin: 8px 0;
}
.nu-table th {
  background: linear-gradient(135deg, var(--nu-navy), #000066);
  color: var(--nu-cyan);
  text-align: left;
  padding: 14px 16px;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.nu-table td {
  padding: 12px 16px;
  border-top: 1px solid var(--nu-medium-gray);
  vertical-align: top;
  font-size: 0.95rem;
}
.nu-table tr:nth-child(even) td { background: #FAFAFC; }
.nu-table td.num { font-variant-numeric: tabular-nums; font-weight: 700; }

/* CALLOUT */
.nu-callout {
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
  color: var(--nu-white);
  padding: 28px 32px;
  border-radius: 10px;
  margin: 24px 0;
  position: relative;
  overflow: hidden;
}
.nu-callout::before {
  content: '';
  position: absolute;
  right: -50px; top: -50px;
  width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(6,208,255,0.3), transparent 70%);
  border-radius: 50%;
}
.nu-callout h3 {
  font-weight: 900;
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--nu-white);
  position: relative;
  z-index: 1;
}
.nu-callout p, .nu-callout ul { position: relative; z-index: 1; }
.nu-callout a { color: var(--nu-cyan); font-weight: 700; }

/* SIGNATURE LINES */
.nu-sig-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  margin-top: 20px;
}
.nu-sig {
  border-top: 2px solid var(--nu-dark-text);
  padding-top: 8px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--nu-dark-text);
}
.nu-sig small {
  display: block;
  font-weight: 400;
  font-size: 0.72rem;
  color: #888;
  text-transform: none;
  letter-spacing: 0;
  margin-top: 4px;
}

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 50px 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: var(--font-italic);
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
  letter-spacing: 0.03em;
}
.nu-footer-contact {
  font-size: 0.92rem;
  line-height: 1.85;
}
.nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
.nu-footer-contact a:hover { text-decoration: underline; }
.nu-footer-fine {
  margin-top: 18px;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.08em;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nu-header { padding: 44px 20px 70px; min-height: 220px; }
  .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-container { padding: 40px 20px; }
  .nu-doc-title { font-size: 1.7rem; }
  .nu-badge { clip-path: none; border-radius: 8px; padding: 10px 16px; }
  .nu-section-title { font-size: 1.25rem; }
}
@media print {
  body { background: var(--nu-white); }
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-card { box-shadow: none; break-inside: avoid; }
  .nu-section { break-inside: avoid; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <svg class="nu-ghost-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
  </svg>
  <div class="nu-phoenix-icon">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
  </div>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <!-- DOC META -->
    <div class="nu-doc-meta">
      <span class="nu-tag type">Negotiation Brief</span>
      <span class="nu-tag priority">High Priority</span>
      <span class="nu-tag status">Active — Open</span>
      <span class="nu-tag source">Source: reMarkable</span>
      <span class="nu-tag">Owner: Aaron C. Norris</span>
    </div>

    <h1 class="nu-doc-title">Estate Acquisition — <span>4505 Buttewoods</span></h1>
    <p class="nu-doc-sub">7,098 sq ft residence — negotiation strategy, diligence checklist, and offer framework</p>

    <!-- EXECUTIVE SUMMARY -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span>Executive</span>Summary</h2>
      <div class="nu-card nu-card-accent">
        <p><strong>Action item (reMarkable, 2026-04-23):</strong> Negotiate purchase of the 7,098 sq ft estate at 4505 Buttewoods.</p>
        <p>This brief captures what we know, what we must verify, and the negotiation framework Aaron will use before submitting or responding to any offer. It is intended to keep the conversation disciplined around price, terms, diligence contingencies, and walk-away conditions — and to protect against disclosure gaps, appraisal surprise, and financing risk.</p>
        <p>Nothing in this document is legal or tax advice. Final offer terms will be drafted by the transaction attorney before signature.</p>
      </div>
    </section>

    <!-- KEY FACTS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span>Key</span>Facts on Record</h2>
      <div class="nu-facts">
        <div class="nu-fact">
          <div class="nu-fact-label">Property Address</div>
          <div class="nu-fact-value">4505 Buttewoods<small>Full legal description to be confirmed at title</small></div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Total Heated Area</div>
          <div class="nu-fact-value">7,098 sq ft<small>Per reMarkable note — verify against tax card &amp; appraisal</small></div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Property Type</div>
          <div class="nu-fact-value">Estate residence<small>Single-family; primary/secondary use to be confirmed</small></div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Transaction Posture</div>
          <div class="nu-fact-value">Buyer (negotiating)<small>Aaron C. Norris, individually or entity TBD</small></div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Action Opened</div>
          <div class="nu-fact-value">2026-04-23<small>Recorded from reMarkable handwritten note</small></div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Target Decision Window</div>
          <div class="nu-fact-value">14 days to signed LOI<small>30 days to executed purchase agreement</small></div>
        </div>
      </div>
    </section>

    <!-- DILIGENCE CHECKLIST -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span>Pre-Offer</span>Diligence Checklist</h2>
      <p style="margin-bottom:16px;">These items must be answered, in writing, before Aaron submits a number. A missing item is not a reason to wait — it is a reason to condition the offer.</p>
      <div class="nu-two-col">
        <div>
          <span class="nu-badge">Property &amp; Title</span>
          <ul class="nu-list">
            <li>Pull tax card; confirm square footage, lot size, year built, and last improvement date</li>
            <li>Order owner &amp; encumbrance report; flag any liens, easements, or lis pendens</li>
            <li>Plat / survey on file vs. walking the actual boundary</li>
            <li>Deed restrictions, HOA covenants, and any active architectural reviews</li>
            <li>Confirm municipal zoning and any pending rezoning or code changes</li>
          </ul>
        </div>
        <div>
          <span class="nu-badge cyan">Condition &amp; Risk</span>
          <ul class="nu-list">
            <li>Independent whole-house inspection — roof, foundation, envelope, HVAC, electrical</li>
            <li>Sewer scope and well/septic inspection if applicable</li>
            <li>Mold, radon, asbestos, and lead-based paint assessment (age dependent)</li>
            <li>Flood zone determination, elevation certificate, and insurance quote in writing</li>
            <li>Environmental Phase I if property history suggests any prior commercial use</li>
          </ul>
        </div>
      </div>
      <div class="nu-two-col" style="margin-top:18px;">
        <div>
          <span class="nu-badge">Financial &amp; Tax</span>
          <ul class="nu-list">
            <li>Last three years of property taxes; any reassessment pending</li>
            <li>Utilities — 12-month bill history (electric, gas, water, sewer)</li>
            <li>Insurance — current premium, claims history (CLUE report), replacement cost</li>
            <li>Any special assessments, back-taxes, or code enforcement actions</li>
            <li>Comparable sales (closed in last 12 months, within 1 mile, 15% sq ft band)</li>
          </ul>
        </div>
        <div>
          <span class="nu-badge cyan">Seller Motivation</span>
          <ul class="nu-list">
            <li>Why is the seller moving — timeline, relocation, estate, divorce, financial</li>
            <li>Days on market, prior price reductions, prior contracts fallen through</li>
            <li>Is the seller willing to carry paper or offer a rate buy-down</li>
            <li>Are personal property, furnishings, or equipment included or negotiable</li>
            <li>Preferred closing date and any required leaseback</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- VALUATION FRAMEWORK -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span>Valuation</span>Framework</h2>
      <p style="margin-bottom:16px;">Aaron anchors every number to a defensible basis. The offer price will be derived from the lower of: (1) comparable sales per square foot adjusted for condition, (2) replacement cost minus depreciation, and (3) income approach if the property will be held as a rental.</p>
      <table class="nu-table">
        <thead>
          <tr>
            <th>Valuation Method</th>
            <th>How It Is Calculated</th>
            <th>Governs When</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Comparable Sales</strong></td>
            <td>Median $/sq ft of three closed sales within 1 mi, 12 mo, ±15% size — applied to verified 7,098 sq ft</td>
            <td>Primary residence, stable market, enough comps exist</td>
          </tr>
          <tr>
            <td><strong>Replacement Cost</strong></td>
            <td>Insurance replacement value × condition factor + improved land value</td>
            <td>Unique construction, low comp volume, custom estate</td>
          </tr>
          <tr>
            <td><strong>Income Approach</strong></td>
            <td>Net operating income ÷ market cap rate</td>
            <td>If Aaron elects to hold as a rental or estate-use asset</td>
          </tr>
          <tr>
            <td><strong>Appraisal (bank)</strong></td>
            <td>Independent licensed appraiser engaged by lender</td>
            <td>Always — governs financing and appraisal contingency</td>
          </tr>
        </tbody>
      </table>
      <div class="nu-callout">
        <h3>Walk-Away Discipline</h3>
        <p>If the lowest of the three independent valuations above is more than 7% below the seller's asking price and the seller will not move on price, terms, or contingencies, Aaron walks. A good deal that strains cash is a bad deal — we keep powder dry for the utility business.</p>
      </div>
    </section>

    <!-- NEGOTIATION PLAYBOOK -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span>Negotiation</span>Playbook</h2>
      <ol class="nu-steps">
        <li>
          <strong>Listen first — diagnose before prescribing.</strong>
          In the first conversation with the seller or listing agent, ask why they are selling, what timeline they need, and what would make this easy on them. Do not float a number.
        </li>
        <li>
          <strong>Anchor to written data, not feelings.</strong>
          When a price is discussed, tie it to comparable sales, the appraisal, and the inspection findings. Hand the other side paper they can defend to their own principal.
        </li>
        <li>
          <strong>Lead with terms, not just price.</strong>
          Close date certainty, clean financing, minimal contingencies, and earnest money signaling are often worth more to a seller than another half-point on price.
        </li>
        <li>
          <strong>Make the first written offer specific and serious.</strong>
          Submit a full LOI or purchase agreement — not a verbal indication — with earnest money defined, contingency windows capped, and closing date fixed.
        </li>
        <li>
          <strong>Bracket, don't escalate.</strong>
          If pushed to counter, do so in narrow, pre-planned increments tied to new information (inspection items, appraisal, title surprises) — never "just to keep it moving."
        </li>
        <li>
          <strong>Preserve the right to walk in writing.</strong>
          Every contingency (inspection, appraisal, financing, title, survey) stays live until each is affirmatively released. No verbal waivers.
        </li>
        <li>
          <strong>Close with a lawyer reading every page.</strong>
          The transaction attorney reviews the final agreement, title commitment, survey, and closing statement before Aaron signs. No exceptions.
        </li>
      </ol>
    </section>

    <!-- OFFER FRAMEWORK -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span>Offer</span>Framework &amp; Contingencies</h2>
      <div class="nu-card nu-card-accent">
        <h3>Core Commercial Terms to Lock</h3>
        <ul class="nu-list checks">
          <li><strong>Purchase price</strong> — derived from the valuation table above, not the asking price</li>
          <li><strong>Earnest money</strong> — sized to be credible but not trapped; escrowed with title/attorney</li>
          <li><strong>Inspection period</strong> — 10–14 calendar days; right to cancel and recover earnest money</li>
          <li><strong>Appraisal contingency</strong> — property must appraise at or above purchase price</li>
          <li><strong>Financing contingency</strong> — contingent on written loan commitment by a defined date</li>
          <li><strong>Title &amp; survey</strong> — clean, marketable, insurable title; survey exceptions reviewed</li>
          <li><strong>Closing date</strong> — fixed, with explicit extension mechanics if either side needs them</li>
          <li><strong>Possession</strong> — at closing, unless a paid post-closing occupancy is negotiated in writing</li>
          <li><strong>Personal property / inclusions</strong> — listed item-by-item in the agreement, not "as shown"</li>
          <li><strong>Risk of loss</strong> — seller bears risk of damage until closing</li>
        </ul>
      </div>

      <div class="nu-two-col" style="margin-top:14px;">
        <div class="nu-card nu-card-warn">
          <h3>Red Flags — Pause and Investigate</h3>
          <ul class="nu-list">
            <li>Seller pressure to waive inspection or appraisal</li>
            <li>"As-is" sale with no disclosures and no prior inspection</li>
            <li>Un-permitted additions or square footage disputes</li>
            <li>Recent insurance non-renewal or large past claims</li>
            <li>Pending litigation, boundary disputes, or HOA enforcement</li>
            <li>Price well below comps with no stated reason</li>
          </ul>
        </div>
        <div class="nu-card nu-card-ok">
          <h3>Green Lights — Move Decisively</h3>
          <ul class="nu-list">
            <li>Clean title commitment with no unexpected exceptions</li>
            <li>Survey matches deed and fence lines</li>
            <li>Inspection findings are cosmetic or routine maintenance</li>
            <li>Appraisal meets or exceeds purchase price</li>
            <li>Seller willing to fix defined items or credit at closing</li>
            <li>Financing commitment letter issued on schedule</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span>Deal</span>Team</h2>
      <table class="nu-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Who</th>
            <th>What They Own</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Principal / Buyer</strong></td>
            <td>Aaron C. Norris</td>
            <td>Final price, final terms, final signature</td>
          </tr>
          <tr>
            <td><strong>Transaction Attorney</strong></td>
            <td>To be engaged prior to LOI</td>
            <td>Purchase agreement, title review, closing</td>
          </tr>
          <tr>
            <td><strong>Buyer's Agent (optional)</strong></td>
            <td>To be confirmed</td>
            <td>Comps, local market color, logistics</td>
          </tr>
          <tr>
            <td><strong>Lender</strong></td>
            <td>Patrick Lavette — Renasant Bank (first call)</td>
            <td>Pre-approval, term sheet, appraisal order</td>
          </tr>
          <tr>
            <td><strong>Inspector</strong></td>
            <td>Licensed, independent, no referral back to listing agent</td>
            <td>Whole-house, specialty, sewer/well/septic as needed</td>
          </tr>
          <tr>
            <td><strong>Title / Escrow</strong></td>
            <td>Attorney-directed title company</td>
            <td>Title search, title insurance, closing disbursement</td>
          </tr>
          <tr>
            <td><strong>Insurance Broker</strong></td>
            <td>Incumbent Norris Utilities carrier relationship</td>
            <td>Homeowners quote, flood, umbrella as applicable</td>
          </tr>
          <tr>
            <td><strong>Tax / Accounting</strong></td>
            <td>CPA of record</td>
            <td>Ownership structure (individual vs. entity), tax impact</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- TIMELINE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span>Target</span>Timeline</h2>
      <table class="nu-table">
        <thead>
          <tr>
            <th>Milestone</th>
            <th>Days from Today</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Attorney engaged; lender pre-approval letter in hand</td><td class="num">Day 0–3</td><td>Aaron</td></tr>
          <tr><td>Diligence packet complete (tax, title, survey, disclosures)</td><td class="num">Day 3–7</td><td>Attorney / Agent</td></tr>
          <tr><td>Comparable-sales analysis and valuation memo finalized</td><td class="num">Day 5–8</td><td>Aaron</td></tr>
          <tr><td>LOI or first written offer submitted</td><td class="num">Day 8–10</td><td>Aaron + Attorney</td></tr>
          <tr><td>Purchase agreement signed; earnest money in escrow</td><td class="num">Day 12–15</td><td>Attorney</td></tr>
          <tr><td>Inspections complete; responses negotiated</td><td class="num">Day 20–25</td><td>Aaron + Inspector</td></tr>
          <tr><td>Appraisal complete; loan commitment issued</td><td class="num">Day 25–35</td><td>Lender</td></tr>
          <tr><td>Final walkthrough and closing</td><td class="num">Day 40–45</td><td>Attorney</td></tr>
        </tbody>
      </table>
    </section>

    <!-- OPEN QUESTIONS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span>Open</span>Questions for Aaron</h2>
      <div class="nu-card nu-card-warn">
        <p>These must be answered before the next revision of this brief is drafted. Each materially affects price, financing, and structure.</p>
        <ul class="nu-list">
          <li>Is 4505 Buttewoods intended as a primary residence, secondary residence, or investment hold?</li>
          <li>Will ownership be individual, joint, or through an LLC / trust?</li>
          <li>What is the asking price, and is there a published listing, or is this off-market?</li>
          <li>Cash, financed, or blended — and if financed, target loan-to-value?</li>
          <li>Is there a firm target closing date driven by seller, tax year, or schedule?</li>
          <li>Any existing relationship with the seller that changes tone, pace, or leverage?</li>
        </ul>
      </div>
    </section>

    <!-- SIGNATURES -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span>Approvals</span>&amp; Acknowledgments</h2>
      <div class="nu-sig-grid">
        <div class="nu-sig">Aaron C. Norris<small>Principal / Buyer — approves price, terms, and signature authority</small></div>
        <div class="nu-sig">Transaction Attorney<small>Reviews purchase agreement and closing documents</small></div>
        <div class="nu-sig">Lender<small>Patrick Lavette, Renasant Bank — confirms pre-approval and commitment</small></div>
      </div>
    </section>

    <!-- FOOTNOTE -->
    <section class="nu-section">
      <div class="nu-card">
        <p style="font-size:0.85rem; color:#666;"><strong>Internal document.</strong> This brief was generated from a reMarkable handwritten action item dated 2026-04-23 and is intended for Aaron C. Norris and the Norris Utilities® deal team. It does not constitute a binding offer, commitment, or legal advice. All figures, inclusions, and dates are subject to verification and attorney review prior to execution.</p>
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
  <div class="nu-footer-fine">130 Inverness Plaza #210 · Birmingham, Alabama · Serving 20+ states</div>
</footer>

</body>
</html>