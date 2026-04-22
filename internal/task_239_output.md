<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
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

.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
  background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
  z-index: 1;
}
.nu-header * { position: relative; z-index: 2; }

.nu-phoenix-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
  opacity: 0.95;
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
  font-style: italic;
  font-weight: 300;
  font-size: 1.3rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.05em;
}

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

.nu-content-area {
  position: relative;
  background: var(--nu-white);
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  max-width: 700px;
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-content-area > * { position: relative; z-index: 1; }

.nu-wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 60px 40px 80px;
}

.nu-doc-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 24px;
  background: var(--nu-light-gray);
  border-left: 4px solid var(--nu-blue);
  border-radius: 6px;
  margin-bottom: 36px;
  font-size: 0.88rem;
}
.nu-doc-meta span strong {
  color: var(--nu-blue);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.78rem;
  display: block;
  margin-bottom: 2px;
}

.nu-page-title {
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-dark-text);
  line-height: 1.15;
  margin-bottom: 10px;
}
.nu-page-title .accent {
  color: var(--nu-blue);
}
.nu-page-sub {
  font-size: 1.05rem;
  color: #555;
  margin-bottom: 40px;
  max-width: 820px;
}

.nu-section-title {
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--nu-blue);
  margin: 40px 0 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--nu-medium-gray);
}
.nu-section-title span {
  color: var(--nu-dark-text);
  font-weight: 700;
}

.nu-grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
  margin-bottom: 12px;
}
.nu-fact {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 18px 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.nu-fact-label {
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: var(--nu-blue);
  text-transform: uppercase;
  margin-bottom: 6px;
}
.nu-fact-value {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--nu-dark-text);
}
.nu-fact-note {
  font-size: 0.85rem;
  color: #666;
  margin-top: 4px;
  font-weight: 400;
}

.nu-callout {
  background: linear-gradient(135deg, #f5f7ff 0%, #eaf6ff 100%);
  border: 1px solid #c8dcff;
  border-radius: 10px;
  padding: 22px 26px;
  margin: 24px 0;
}
.nu-callout-title {
  font-weight: 900;
  font-size: 0.85rem;
  color: var(--nu-blue);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.nu-callout p { font-size: 0.98rem; color: var(--nu-dark-text); }

.nu-list {
  list-style: none;
  padding: 0;
  margin: 12px 0 8px;
}
.nu-list li {
  position: relative;
  padding: 10px 0 10px 28px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.97rem;
}
.nu-list li:last-child { border-bottom: none; }
.nu-list li::before {
  content: '';
  position: absolute;
  left: 0; top: 18px;
  width: 14px; height: 14px;
  background: var(--nu-cyan);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.nu-step-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 16px;
}
.nu-step {
  background: var(--nu-white);
  border-radius: 10px;
  border: 1px solid var(--nu-medium-gray);
  padding: 22px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  position: relative;
}
.nu-step-num {
  position: absolute;
  top: -14px; left: 18px;
  background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
  color: var(--nu-white);
  font-weight: 900;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  padding: 5px 14px;
  border-radius: 14px;
}
.nu-step h4 {
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--nu-dark-text);
  margin: 8px 0 8px;
}
.nu-step p { font-size: 0.92rem; color: #555; }

.nu-num-table {
  width: 100%;
  border-collapse: collapse;
  margin: 18px 0;
  font-size: 0.93rem;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  overflow: hidden;
}
.nu-num-table th {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #0033CC 100%);
  color: var(--nu-white);
  text-align: left;
  padding: 12px 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-size: 0.82rem;
  text-transform: uppercase;
}
.nu-num-table td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--nu-medium-gray);
}
.nu-num-table tr:last-child td { border-bottom: none; }
.nu-num-table tr:nth-child(even) td { background: #fafbff; }
.nu-num-table .right { text-align: right; font-variant-numeric: tabular-nums; }
.nu-num-table .target {
  background: linear-gradient(90deg, rgba(6,208,255,0.10) 0%, rgba(6,208,255,0.02) 100%);
  font-weight: 700;
  color: var(--nu-blue);
}

.nu-warn {
  background: #fff8e1;
  border-left: 4px solid var(--nu-accent-gold);
  border-radius: 6px;
  padding: 16px 20px;
  margin: 18px 0;
  font-size: 0.93rem;
  color: #4a3c10;
}
.nu-warn strong {
  color: #6b4f00;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.78rem;
  display: block;
  margin-bottom: 4px;
}

.nu-script {
  background: var(--nu-light-gray);
  border-left: 4px solid var(--nu-blue);
  border-radius: 6px;
  padding: 18px 22px;
  margin: 14px 0;
  font-size: 0.95rem;
  color: var(--nu-dark-text);
  font-style: italic;
}
.nu-script::before {
  content: 'SCRIPT';
  display: block;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  color: var(--nu-blue);
  margin-bottom: 6px;
}

.nu-status-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 22px;
}
.nu-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--nu-dark-text);
}
.nu-pill .dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--nu-cyan);
}
.nu-pill.priority .dot { background: #ff6b35; }
.nu-pill.live .dot { background: #28c76f; }

.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-style: italic;
  font-weight: 300;
  font-size: 1.15rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
  font-family: 'Playfair Display', Georgia, serif;
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

@media (max-width: 768px) {
  .nu-header { padding: 40px 20px 60px; min-height: 200px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1rem; }
  .nu-page-title { font-size: 1.7rem; }
  .nu-wrap { padding: 40px 22px 60px; }
}
@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-fact, .nu-step, .nu-num-table { box-shadow: none; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
}
</style>
</head>
<body>

<header class="nu-header">
  <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
  </svg>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="nu-wrap">

    <div class="nu-status-row">
      <span class="nu-pill priority"><span class="dot"></span>Action Item — Personal</span>
      <span class="nu-pill live"><span class="dot"></span>Source: reMarkable</span>
      <span class="nu-pill"><span class="dot"></span>Confidential</span>
    </div>

    <h1 class="nu-page-title"><span class="accent">Negotiate</span> Acquisition — 4505 Buttewoods Estate</h1>
    <p class="nu-page-sub">7,098 sq ft estate property. Action plan, valuation framework, negotiation script, and decision gates. This is a PERSONAL acquisition — not a Norris Utilities® business asset — and is documented here for execution discipline only.</p>

    <div class="nu-doc-meta">
      <span><strong>Owner</strong>Aaron C. Norris</span>
      <span><strong>Property</strong>4505 Buttewoods</span>
      <span><strong>Square Footage</strong>7,098 sq ft</span>
      <span><strong>Source</strong>reMarkable Note</span>
      <span><strong>Date Logged</strong>2026-04-21</span>
      <span><strong>Status</strong>Pre-Offer Phase</span>
    </div>

    <div class="nu-callout">
      <div class="nu-callout-title">Stated Objective</div>
      <p>Negotiate the purchase of the 7,098 sq ft estate at 4505 Buttewoods. Move from "interested" to either (a) a written offer at a price that pencils, or (b) a documented decision to walk away — within 30 days.</p>
    </div>

    <h2 class="nu-section-title">Discovery <span>— Information to Gather Before Any Offer</span></h2>
    <div class="nu-grid-2">
      <div class="nu-fact">
        <div class="nu-fact-label">Listing Status</div>
        <div class="nu-fact-value">Confirm: On-market, off-market, FSBO, or pocket listing</div>
        <div class="nu-fact-note">Drives whether to engage agent, attorney, or owner directly.</div>
      </div>
      <div class="nu-fact">
        <div class="nu-fact-label">Owner of Record</div>
        <div class="nu-fact-value">Pull from county tax/parcel records</div>
        <div class="nu-fact-note">Confirm sole owner, trust, estate, or LLC. Influences who signs.</div>
      </div>
      <div class="nu-fact">
        <div class="nu-fact-label">Tax Assessed Value</div>
        <div class="nu-fact-value">Pull from county assessor</div>
        <div class="nu-fact-note">Anchor #1 for valuation discussion.</div>
      </div>
      <div class="nu-fact">
        <div class="nu-fact-label">Lien / Mortgage Position</div>
        <div class="nu-fact-value">Title search prior to offer</div>
        <div class="nu-fact-note">Avoid surprises at closing — never assume clear title.</div>
      </div>
      <div class="nu-fact">
        <div class="nu-fact-label">Days on Market</div>
        <div class="nu-fact-value">If listed — pull MLS history including price drops</div>
        <div class="nu-fact-note">&gt;90 days = leverage. Re-listings = stronger leverage.</div>
      </div>
      <div class="nu-fact">
        <div class="nu-fact-label">Comparable Sales</div>
        <div class="nu-fact-value">Last 6 months, ≥5,000 sq ft, ≤2 mi radius</div>
        <div class="nu-fact-note">$/sq ft median is the negotiating floor.</div>
      </div>
      <div class="nu-fact">
        <div class="nu-fact-label">Seller Motivation</div>
        <div class="nu-fact-value">Why selling? Timeline? Already in contract elsewhere?</div>
        <div class="nu-fact-note">Most important single data point in any negotiation.</div>
      </div>
      <div class="nu-fact">
        <div class="nu-fact-label">Condition / Inspections</div>
        <div class="nu-fact-value">Roof age, HVAC, foundation, plumbing, electrical</div>
        <div class="nu-fact-note">Each deferred system = a price-reduction lever.</div>
      </div>
    </div>

    <h2 class="nu-section-title">Valuation <span>— Build the Number Before the Conversation</span></h2>
    <p style="margin-bottom: 8px;">Three independent valuation lanes. Walk-away price is the lowest of the three; opening offer is meaningfully below it.</p>

    <table class="nu-num-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Inputs Required</th>
          <th class="right">Outcome</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Comp-Based</strong></td>
          <td>Median $/sq ft of last 5 closed comps × 7,098 sq ft, adjusted for condition</td>
          <td class="right">Market value</td>
        </tr>
        <tr>
          <td><strong>Income / Hold</strong></td>
          <td>Estimated rental rate × 12 ÷ target cap rate (rule-of-thumb 7–8%)</td>
          <td class="right">Investor floor</td>
        </tr>
        <tr>
          <td><strong>Replacement Cost</strong></td>
          <td>Land value + (build cost/sq ft × 7,098) – depreciation</td>
          <td class="right">Build-vs-buy ceiling</td>
        </tr>
        <tr class="target">
          <td><strong>Walk-Away Price</strong></td>
          <td>Minimum of the three lanes above, less repair/deferred maintenance estimate</td>
          <td class="right">Hard cap</td>
        </tr>
        <tr class="target">
          <td><strong>Opening Offer</strong></td>
          <td>Walk-away price × ~0.88 (12% below) — leaves room for one round of negotiation</td>
          <td class="right">First number on paper</td>
        </tr>
      </tbody>
    </table>

    <div class="nu-warn">
      <strong>Discipline</strong>
      Write the walk-away number down BEFORE the first conversation. Do not adjust upward in the room — only between meetings, only with new data. Emotion is the most expensive thing you can bring to a real-estate negotiation.
    </div>

    <h2 class="nu-section-title">Action Plan <span>— Next 30 Days</span></h2>
    <div class="nu-step-grid">
      <div class="nu-step">
        <span class="nu-step-num">DAY 1–3</span>
        <h4>Pull the Public Record</h4>
        <p>Tax assessor, parcel map, deed history, lien position. Confirm legal owner, year built, lot size, and last sale price.</p>
      </div>
      <div class="nu-step">
        <span class="nu-step-num">DAY 3–5</span>
        <h4>Comp Pull</h4>
        <p>Request a 5-comp analysis from a local agent or pull directly. Filter ≥5,000 sq ft, ≤2 mi, last 6 months. Calculate median $/sq ft.</p>
      </div>
      <div class="nu-step">
        <span class="nu-step-num">DAY 5–7</span>
        <h4>Build the Three Valuations</h4>
        <p>Comp-based, income, and replacement-cost. Lock the walk-away number in writing. Share with one trusted advisor for sanity check.</p>
      </div>
      <div class="nu-step">
        <span class="nu-step-num">DAY 7–10</span>
        <h4>Soft Approach to Seller</h4>
        <p>If FSBO/off-market: direct call or letter (script below). If listed: agent-to-agent inquiry — do not show urgency.</p>
      </div>
      <div class="nu-step">
        <span class="nu-step-num">DAY 10–14</span>
        <h4>Walkthrough &amp; Pre-Inspection</h4>
        <p>Bring a contractor or inspector friend, NOT just an agent. Photograph every deferred-maintenance item — these become price-reduction line items.</p>
      </div>
      <div class="nu-step">
        <span class="nu-step-num">DAY 14–21</span>
        <h4>Written Offer</h4>
        <p>Submit the opening offer in writing with a 72-hour response window. Include earnest money, proof of funds/financing, contingencies, and target close date.</p>
      </div>
      <div class="nu-step">
        <span class="nu-step-num">DAY 21–28</span>
        <h4>Negotiate or Walk</h4>
        <p>Respond once. If counter exceeds walk-away price, walk — politely, with the door left open. Most deals come back to motivated buyers within 60 days.</p>
      </div>
      <div class="nu-step">
        <span class="nu-step-num">DAY 28–30</span>
        <h4>Decision Gate</h4>
        <p>Either: (a) under contract at acceptable price, or (b) documented walk-away with reason. No third option. No "let me think about it longer."</p>
      </div>
    </div>

    <h2 class="nu-section-title">Negotiation <span>— Ground Rules &amp; Positioning</span></h2>
    <ul class="nu-list">
      <li><strong>Lead with respect for the property.</strong> Sellers of large estates are often emotionally invested. Acknowledge that before discussing numbers.</li>
      <li><strong>Anchor with data, not opinion.</strong> "Comparable sales in this area over the last six months ran a median of $X per square foot" is a fact. "I think it's overpriced" is an argument.</li>
      <li><strong>Never name the first number unless you have to.</strong> If they ask, defer: "I'd want to see the inspection items first." If forced, state your opening offer as a range, with the top of the range below your real cap.</li>
      <li><strong>Use silence.</strong> After stating an offer, stop talking. The next person to speak loses ground.</li>
      <li><strong>Trade concessions, never give them.</strong> If they want price, ask for terms (close date, repair credits, included furnishings, leaseback).</li>
      <li><strong>Document everything in writing.</strong> Verbal agreements on a property of this size do not exist.</li>
      <li><strong>Decide today how you'll feel if you lose it.</strong> If the answer is "fine," you'll negotiate well. If the answer is "devastated," do not enter the room.</li>
    </ul>

    <h2 class="nu-section-title">Opening <span>— Initial Contact Script</span></h2>
    <div class="nu-script">
      "Hi — my name is Aaron Norris. I've been following the property at 4505 Buttewoods and would like to learn more about it. Before I take up your time, can you tell me a little about what the seller is looking for in terms of price and timeline? I'm a serious buyer, I move quickly, and I'd rather know early if we're in the same ballpark than waste anyone's time."
    </div>

    <h2 class="nu-section-title">Counter <span>— When the Asking Price Is Above Walk-Away</span></h2>
    <div class="nu-script">
      "I appreciate where the seller is on price. Based on the comparable sales over the last six months and what I'm seeing on [specific deferred items: roof / HVAC / foundation / etc.], the number I can put in writing today is $X. That's a clean offer — proof of funds, short close, minimal contingencies. If the seller can meet me there, we have a deal today. If not, I understand, and I wish them well."
    </div>

    <h2 class="nu-section-title">Decision <span>— Hard Stop Criteria</span></h2>
    <ul class="nu-list">
      <li><strong>Walk if:</strong> Final accepted price exceeds the documented walk-away number — even by a dollar.</li>
      <li><strong>Walk if:</strong> Title is not clean and seller will not cure prior to close.</li>
      <li><strong>Walk if:</strong> Inspection reveals foundation, environmental, or structural issues that exceed 10% of purchase price to remediate.</li>
      <li><strong>Walk if:</strong> Seller refuses to allow a contingent inspection period.</li>
      <li><strong>Walk if:</strong> The acquisition would compromise capital reserves needed to operate Norris Utilities® at full capacity.</li>
    </ul>

    <div class="nu-warn">
      <strong>Capital Discipline</strong>
      Norris Utilities® operating capital, AR float, and inventory commitments come first. A personal real-estate acquisition cannot be funded with money that is committed to the business. Confirm separation of funds with the CPA before any earnest-money deposit is wired.
    </div>

    <h2 class="nu-section-title">Tracking <span>— Where This Lives</span></h2>
    <div class="nu-grid-2">
      <div class="nu-fact">
        <div class="nu-fact-label">Source Note</div>
        <div class="nu-fact-value">reMarkable action item, captured 2026-04-21</div>
      </div>
      <div class="nu-fact">
        <div class="nu-fact-label">Working File</div>
        <div class="nu-fact-value">~/norris-ops/internal/task_239_output.md</div>
      </div>
      <div class="nu-fact">
        <div class="nu-fact-label">Brain Wing</div>
        <div class="nu-fact-value">remarkable_tasks (action-item, personal, open, priority-info)</div>
      </div>
      <div class="nu-fact">
        <div class="nu-fact-label">Next Review</div>
        <div class="nu-fact-value">Weekly Sunday review until decision gate hit</div>
      </div>
    </div>

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
</footer>

</body>
</html>