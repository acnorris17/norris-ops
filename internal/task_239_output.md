<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estate Acquisition Brief — 4505 Buttewoods — Norris Utilities®</title>
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
  --nu-success: #2E7D32;
  --nu-warning: #E65100;
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
  inset: 0;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
  z-index: 1;
  opacity: 0.7;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -50%; right: -20%;
  width: 80%; height: 200%;
  background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
  z-index: 1;
}
.nu-header > * { position: relative; z-index: 2; }

.nu-phoenix {
  width: 70px;
  height: 70px;
  margin: 0 auto 14px;
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
  font-size: 1.3rem;
  color: var(--nu-white);
  letter-spacing: 0.8em;
  margin-bottom: 22px;
}
.nu-tagline {
  font-family: var(--font-italic);
  font-style: italic;
  font-weight: 400;
  font-size: 1.35rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.03em;
}

/* CHEVRON */
.nu-chevron {
  position: relative;
  height: 55px;
  margin-top: -55px;
  z-index: 10;
}
.nu-chevron svg { width: 100%; height: 55px; display: block; }

/* DOCUMENT BAR */
.doc-bar {
  background: var(--nu-navy);
  color: var(--nu-white);
  padding: 14px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 700;
}
.doc-bar .confidential {
  color: var(--nu-cyan);
  border: 1px solid var(--nu-cyan);
  padding: 4px 12px;
  border-radius: 3px;
  font-size: 0.75rem;
}

/* CONTENT */
.nu-content {
  position: relative;
  background: var(--nu-white);
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px 80px;
}

.section-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.75rem;
  margin-bottom: 8px;
  color: var(--nu-dark-text);
  border-bottom: 3px solid var(--nu-blue);
  padding-bottom: 10px;
  margin-top: 50px;
}
.section-title:first-child { margin-top: 0; }
.section-title .accent { color: var(--nu-blue); }

.lede {
  font-size: 1.15rem;
  color: var(--nu-body-text);
  margin-bottom: 30px;
  line-height: 1.7;
}

/* PROPERTY SNAPSHOT GRID */
.snapshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2px;
  background: var(--nu-medium-gray);
  margin: 20px 0 40px;
  border: 2px solid var(--nu-blue);
}
.snap-cell {
  background: var(--nu-white);
  padding: 22px 18px;
  text-align: center;
}
.snap-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--nu-blue);
  font-weight: 700;
  margin-bottom: 8px;
}
.snap-value {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1.2;
}
.snap-value small {
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--nu-body-text);
  margin-top: 4px;
  letter-spacing: 0;
  text-transform: none;
}

/* TWO-COLUMN */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 25px 0;
}
@media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }

.info-card {
  background: var(--nu-white);
  border-left: 4px solid var(--nu-blue);
  padding: 22px 26px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  border-radius: 4px;
}
.info-card h3 {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 1.1rem;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.info-card ul { list-style: none; padding: 0; }
.info-card li {
  padding: 6px 0;
  border-bottom: 1px solid var(--nu-medium-gray);
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
.info-card li:last-child { border-bottom: none; }
.info-card li strong { color: var(--nu-dark-text); }

/* NEGOTIATION STRATEGY */
.strategy-block {
  background: linear-gradient(135deg, #f0f4ff 0%, #e0eefc 100%);
  border: 1px solid #cfd8f5;
  border-left: 5px solid var(--nu-blue);
  padding: 26px 30px;
  margin: 25px 0;
  border-radius: 4px;
}
.strategy-block h3 {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 1.15rem;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.strategy-block p { margin-bottom: 12px; }
.strategy-block p:last-child { margin-bottom: 0; }

/* OFFER LADDER */
.ladder {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 20px 0;
}
@media (max-width: 768px) { .ladder { grid-template-columns: 1fr; } }
.rung {
  padding: 22px;
  border-radius: 6px;
  text-align: center;
  color: var(--nu-white);
  box-shadow: 0 4px 14px rgba(0,0,0,0.12);
}
.rung.opening { background: linear-gradient(135deg, #1a3a8f 0%, #0033cc 100%); }
.rung.target { background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%); transform: scale(1.04); border: 2px solid var(--nu-cyan); }
.rung.walkaway { background: linear-gradient(135deg, #004499 0%, #06a8d6 100%); }
.rung .label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.9;
  margin-bottom: 8px;
}
.rung .price {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 4px;
}
.rung .ppsf {
  font-size: 0.8rem;
  opacity: 0.85;
  margin-bottom: 8px;
}
.rung .note {
  font-size: 0.8rem;
  opacity: 0.9;
  font-style: italic;
}

/* CHECKLIST */
.checklist {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}
.checklist li {
  position: relative;
  padding: 12px 14px 12px 46px;
  background: var(--nu-light-gray);
  border-radius: 4px;
  margin-bottom: 8px;
  border-left: 3px solid var(--nu-cyan);
}
.checklist li::before {
  content: '';
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border: 2px solid var(--nu-blue);
  border-radius: 3px;
  background: var(--nu-white);
}
.checklist li strong {
  display: block;
  color: var(--nu-dark-text);
  margin-bottom: 2px;
}
.checklist li span {
  font-size: 0.9rem;
  color: var(--nu-body-text);
}

/* TIMELINE */
.timeline {
  position: relative;
  padding-left: 30px;
  margin: 20px 0;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
}
.tl-item {
  position: relative;
  padding: 10px 0 18px 20px;
}
.tl-item::before {
  content: '';
  position: absolute;
  left: -27px;
  top: 16px;
  width: 15px;
  height: 15px;
  background: var(--nu-white);
  border: 3px solid var(--nu-blue);
  border-radius: 50%;
}
.tl-item .tl-phase {
  font-weight: 900;
  color: var(--nu-blue);
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}
.tl-item .tl-action {
  font-weight: 700;
  color: var(--nu-dark-text);
  margin: 2px 0;
}
.tl-item .tl-detail { font-size: 0.92rem; color: var(--nu-body-text); }

/* RISK TABLE */
.risk-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 0.92rem;
}
.risk-table th {
  background: var(--nu-navy);
  color: var(--nu-white);
  padding: 12px 14px;
  text-align: left;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.risk-table td {
  padding: 14px;
  border-bottom: 1px solid var(--nu-medium-gray);
  vertical-align: top;
}
.risk-table tr:nth-child(even) td { background: var(--nu-light-gray); }
.risk-tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--nu-white);
}
.risk-high { background: #c62828; }
.risk-med { background: var(--nu-warning); }
.risk-low { background: var(--nu-success); }

/* CALLOUT */
.callout {
  background: var(--nu-navy);
  color: var(--nu-white);
  padding: 28px 32px;
  border-radius: 6px;
  margin: 30px 0;
  border-left: 6px solid var(--nu-cyan);
}
.callout h3 {
  color: var(--nu-cyan);
  font-weight: 900;
  font-size: 1.15rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* TALKING POINTS */
.talking {
  background: var(--nu-white);
  border: 2px dashed var(--nu-blue);
  padding: 24px 28px;
  margin: 20px 0;
  border-radius: 6px;
}
.talking h3 {
  color: var(--nu-blue);
  font-weight: 900;
  margin-bottom: 12px;
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.talking ul { padding-left: 0; list-style: none; }
.talking li {
  padding: 8px 0 8px 22px;
  position: relative;
}
.talking li::before {
  content: '•';
  position: absolute;
  left: 4px;
  color: var(--nu-blue);
  font-weight: 900;
  font-size: 1.2rem;
  top: 4px;
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
.nu-footer-disclaimer {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.2);
  font-size: 0.8rem;
  color: rgba(255,255,255,0.6);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .nu-header { padding: 40px 20px 60px; min-height: 220px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-content { padding: 40px 22px 60px; }
  .section-title { font-size: 1.4rem; }
  .doc-bar { padding: 12px 22px; font-size: 0.75rem; }
}
</style>
</head>
<body>

<header class="nu-header">
  <svg class="nu-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
  </svg>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 55" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,55 L1440,0 L1440,55 L0,55 Z" fill="white"/>
  </svg>
</div>

<div class="doc-bar">
  <span>Estate Acquisition Brief &nbsp;|&nbsp; 4505 Buttewoods</span>
  <span class="confidential">Confidential — Internal</span>
  <span>Prepared 2026-04-23</span>
</div>

<main class="nu-content">

  <h1 class="section-title"><span class="accent">Negotiation</span> Brief — 4505 Buttewoods Estate</h1>
  <p class="lede">
    Action item from reMarkable: <strong>negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods</strong>.
    This brief consolidates the working data points, defines an offer ladder, maps the due-diligence sequence,
    and sets the talking points Aaron will carry into first contact with the listing side. Treat every figure
    below as a working assumption until verified against recorded documents and on-site inspection.
  </p>

  <div class="snapshot-grid">
    <div class="snap-cell">
      <div class="snap-label">Address</div>
      <div class="snap-value" style="font-size:1rem;">4505 Buttewoods<small>Subject property</small></div>
    </div>
    <div class="snap-cell">
      <div class="snap-label">Living Area</div>
      <div class="snap-value">7,098<small>square feet</small></div>
    </div>
    <div class="snap-cell">
      <div class="snap-label">Property Class</div>
      <div class="snap-value" style="font-size:1.1rem;">Estate<small>Luxury single-family</small></div>
    </div>
    <div class="snap-cell">
      <div class="snap-label">Status</div>
      <div class="snap-value" style="font-size:1.1rem;">Negotiation<small>Pre-offer stage</small></div>
    </div>
  </div>

  <h2 class="section-title"><span class="accent">Property</span> Working File</h2>
  <p style="margin-bottom:18px;">
    The data block below is the running worksheet. Any field marked <em>Confirm</em> must be verified
    against MLS, tax records, or the seller's disclosure before the written offer is submitted. Do not
    cite these numbers to counterparties until verified.
  </p>

  <div class="two-col">
    <div class="info-card">
      <h3>Physical &amp; Legal</h3>
      <ul>
        <li><span>Street Address</span><strong>4505 Buttewoods</strong></li>
        <li><span>Living Area</span><strong>7,098 sq ft</strong></li>
        <li><span>Lot Size</span><strong>Confirm (deed / plat)</strong></li>
        <li><span>Year Built</span><strong>Confirm (tax card)</strong></li>
        <li><span>Bed / Bath</span><strong>Confirm (MLS)</strong></li>
        <li><span>Garage / Outbldgs</span><strong>Confirm on site</strong></li>
        <li><span>Zoning / HOA</span><strong>Confirm (county / HOA)</strong></li>
        <li><span>Flood Zone</span><strong>Confirm (FEMA map)</strong></li>
      </ul>
    </div>
    <div class="info-card">
      <h3>Financial &amp; Market</h3>
      <ul>
        <li><span>Current List Price</span><strong>Confirm (MLS)</strong></li>
        <li><span>Last Sale Price / Date</span><strong>Confirm (deed)</strong></li>
        <li><span>Tax Assessed Value</span><strong>Confirm (county)</strong></li>
        <li><span>Annual Property Tax</span><strong>Confirm (county)</strong></li>
        <li><span>Days on Market</span><strong>Confirm (MLS)</strong></li>
        <li><span>Previous Price Cuts</span><strong>Confirm (MLS history)</strong></li>
        <li><span>Title / Liens</span><strong>Confirm (title search)</strong></li>
        <li><span>Motivation Signal</span><strong>Assess in person</strong></li>
      </ul>
    </div>
  </div>

  <h2 class="section-title"><span class="accent">Negotiation</span> Strategy</h2>
  <div class="strategy-block">
    <h3>Posture &amp; Anchor</h3>
    <p>
      Approach as a serious, prepared buyer — cash-capable, quick to close, uncomplicated. Lead with the
      relationship, not the price. Anchor the first conversation on <strong>condition, timeline, and seller motivation</strong>,
      not the list number. The first number that leaves Aaron's mouth must be defensible from three comps.
    </p>
    <p>
      Until the offer ladder below is locked to real market data, no price is offered verbally.
      Every dollar figure goes on paper, signed, with a time fuse.
    </p>
  </div>

  <h3 style="margin-top:30px; font-weight:900; color:var(--nu-dark-text); font-size:1.2rem;">Offer Ladder (per-sq-ft framework, 7,098 sq ft basis)</h3>
  <p style="margin:10px 0 18px; font-size:0.95rem;">
    Dollar figures below are placeholder anchors driven by a $/sq ft framework. Lock the three tiers the
    moment verified comps are in hand; do not present an offer before that happens.
  </p>

  <div class="ladder">
    <div class="rung opening">
      <div class="label">Opening Offer</div>
      <div class="price">List &minus; 12%</div>
      <div class="ppsf">Leaves room to move</div>
      <div class="note">Written, 72-hr response window</div>
    </div>
    <div class="rung target">
      <div class="label">Target Close</div>
      <div class="price">List &minus; 6%</div>
      <div class="ppsf">Where this should land</div>
      <div class="note">Walk price at inspection re-trade</div>
    </div>
    <div class="rung walkaway">
      <div class="label">Walk-Away</div>
      <div class="price">List &minus; 2%</div>
      <div class="ppsf">Hard ceiling — no exceptions</div>
      <div class="note">Above this, deal is not math-positive</div>
    </div>
  </div>

  <div class="callout">
    <h3>Discipline Rule</h3>
    <p>
      The walk-away is not a suggestion. Aaron sets it in writing before the first counter and does not
      move it under pressure, charm, or timeline squeeze. The only events that legitimately move a
      walk-away: a new verified comp, a disclosed improvement not previously known, or seller concessions
      that transfer real cost. Nothing else.
    </p>
  </div>

  <h2 class="section-title"><span class="accent">Due</span> Diligence Checklist</h2>
  <p style="margin-bottom:14px;">
    Complete in this order. An item marked open means the offer is not yet written.
  </p>
  <ul class="checklist">
    <li>
      <strong>Pull MLS history &amp; current listing packet</strong>
      <span>Price cuts, DOM, previous listings, photo archive. Listing agent, buyer's agent, or public MLS portal.</span>
    </li>
    <li>
      <strong>Run three verified comparable sales (past 180 days)</strong>
      <span>Same submarket, within 20% of 7,098 sq ft, closed — not pending. Anchor the offer ladder against these.</span>
    </li>
    <li>
      <strong>Pull deed, plat, and tax card from the county</strong>
      <span>Confirms lot size, year built, bed/bath, ownership chain, last sale price, and annual taxes.</span>
    </li>
    <li>
      <strong>Title search &amp; lien review</strong>
      <span>Confirms marketable title. Any clouds, IRS liens, or mechanics liens get flagged before offer.</span>
    </li>
    <li>
      <strong>FEMA flood determination + insurance binder estimate</strong>
      <span>A 7,098 sq ft structure in the wrong flood zone changes the math materially.</span>
    </li>
    <li>
      <strong>Drive-by + on-site walk-through</strong>
      <span>Roof age, HVAC count and condition, foundation, drainage, neighboring parcels, noise/traffic.</span>
    </li>
    <li>
      <strong>Seller motivation read</strong>
      <span>Why are they selling? Timeline pressure? Relocating? Estate? The motivation determines negotiation leverage.</span>
    </li>
    <li>
      <strong>Financing or proof-of-funds letter</strong>
      <span>Must accompany the written offer. Cash buyers with documentation move to the front of the line.</span>
    </li>
    <li>
      <strong>Legal review of purchase contract by real estate attorney</strong>
      <span>Alabama attorney reviews before signature. No exceptions on a property at this price range.</span>
    </li>
  </ul>

  <h2 class="section-title"><span class="accent">Execution</span> Timeline</h2>
  <div class="timeline">
    <div class="tl-item">
      <div class="tl-phase">Phase 1 — Intel (Days 1–3)</div>
      <div class="tl-action">Gather verified data</div>
      <div class="tl-detail">MLS packet, deed, tax card, flood zone, three closed comps. No contact with seller side yet.</div>
    </div>
    <div class="tl-item">
      <div class="tl-phase">Phase 2 — First Contact (Days 4–5)</div>
      <div class="tl-action">Listing side introduction</div>
      <div class="tl-detail">Warm, serious, professional. Ask questions; offer nothing. Walk the property.</div>
    </div>
    <div class="tl-item">
      <div class="tl-phase">Phase 3 — Written Offer (Days 6–7)</div>
      <div class="tl-action">Submit opening offer</div>
      <div class="tl-detail">Written, with proof of funds, 72-hour response window, standard inspection and financing contingencies.</div>
    </div>
    <div class="tl-item">
      <div class="tl-phase">Phase 4 — Counter &amp; Close (Days 8–21)</div>
      <div class="tl-action">Work to target price</div>
      <div class="tl-detail">One or two counters max. Use inspection findings for the final re-trade if warranted.</div>
    </div>
    <div class="tl-item">
      <div class="tl-phase">Phase 5 — Close (Days 22–45)</div>
      <div class="tl-action">Attorney &amp; title</div>
      <div class="tl-detail">Standard closing window. Walk-through the day before funding.</div>
    </div>
  </div>

  <h2 class="section-title"><span class="accent">Risk</span> Register</h2>
  <table class="risk-table">
    <thead>
      <tr>
        <th>Risk</th>
        <th>Impact</th>
        <th>Mitigation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Overpaying — no comp floor before offer</td>
        <td><span class="risk-tag risk-high">High</span></td>
        <td>No verbal or written price until three closed comps verified.</td>
      </tr>
      <tr>
        <td>Hidden structural / foundation / moisture issues</td>
        <td><span class="risk-tag risk-high">High</span></td>
        <td>Dedicated structural inspection. Re-trade or walk if findings material.</td>
      </tr>
      <tr>
        <td>Title cloud, lien, or easement surprise</td>
        <td><span class="risk-tag risk-med">Medium</span></td>
        <td>Full title search before offer; title insurance at close.</td>
      </tr>
      <tr>
        <td>Flood zone / insurance cost escalation</td>
        <td><span class="risk-tag risk-med">Medium</span></td>
        <td>FEMA determination + binder estimate during Phase 1.</td>
      </tr>
      <tr>
        <td>Emotional negotiation drift past walk-away</td>
        <td><span class="risk-tag risk-med">Medium</span></td>
        <td>Walk-away locked in writing before first counter; review with trusted second opinion.</td>
      </tr>
      <tr>
        <td>Tax reassessment on purchase</td>
        <td><span class="risk-tag risk-low">Low</span></td>
        <td>Model post-sale reassessment into annual carrying cost up front.</td>
      </tr>
      <tr>
        <td>Competing bidder arrives during diligence</td>
        <td><span class="risk-tag risk-low">Low</span></td>
        <td>Keep Phase 1 short; once diligence is clean, move fast on written offer.</td>
      </tr>
    </tbody>
  </table>

  <h2 class="section-title"><span class="accent">First-Call</span> Talking Points</h2>
  <div class="talking">
    <h3>For the listing agent</h3>
    <ul>
      <li>Introduce: third-generation Birmingham business owner, serious buyer, prepared to close on a short timeline.</li>
      <li>Ask: "What is the seller's timeline, and what matters most to them besides price?"</li>
      <li>Ask: "Walk me through the price history — what drove any reductions?"</li>
      <li>Ask: "Are there any known issues you'd want me to see before we get to inspection?"</li>
      <li>Close the call: request a showing; commit to a written offer within a defined window; do not float a number.</li>
    </ul>
  </div>

  <div class="talking">
    <h3>Language to avoid</h3>
    <ul>
      <li>No "I love this house." Emotional tells raise the counter.</li>
      <li>No verbal price floats. Every number goes on paper.</li>
      <li>No disclosure of walk-away, target, or maximum — ever.</li>
      <li>No commitment to close earlier than the written contract requires.</li>
    </ul>
  </div>

  <h2 class="section-title"><span class="accent">Next</span> Step</h2>
  <div class="strategy-block">
    <h3>Immediate Action — 2026-04-23</h3>
    <p>
      Pull the MLS listing, deed, and tax card for 4505 Buttewoods and populate the working file above.
      Once the list price, DOM, and last-sale data are in, the offer ladder gets locked to dollars and the
      Phase 1 comp pull begins. Target written offer submission: <strong>seven calendar days from data pull</strong>.
    </p>
    <p>
      Assign legal review to an Alabama real estate attorney before any signature. Route a one-page summary
      to the working file and Telegram so the deal stays visible across sessions.
    </p>
  </div>

</main>

<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> |
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
  <div class="nu-footer-disclaimer">
    Confidential internal negotiation brief. All property figures marked "Confirm" are working assumptions
    until verified against recorded documents, MLS data, and on-site inspection. This document does not
    constitute an offer, a commitment to purchase, or legal or financial advice. Final terms subject to
    attorney review, title clearance, and inspection findings.
  </div>
</footer>

</body>
</html>