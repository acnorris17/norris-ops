<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Plan — 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
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

    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      opacity: 0.07;
      position: absolute !important;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65% !important;
      height: auto !important;
      z-index: 1 !important;
    }

    .nu-header-content {
      position: relative;
      z-index: 3;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
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

    .page-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 80px;
    }

    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      padding-bottom: 20px;
      border-bottom: 3px solid var(--nu-blue);
      margin-bottom: 36px;
    }
    .doc-type {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 14px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }
    .doc-date {
      color: var(--nu-dark-text);
      font-size: 0.9rem;
      font-weight: 700;
    }

    h1.page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    h1.page-title .accent {
      color: var(--nu-blue);
    }
    .subtitle {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 36px;
      font-weight: 400;
    }

    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      margin-top: 40px;
      padding-bottom: 6px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .summary-bar {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border-left: 5px solid var(--nu-cyan);
      padding: 22px 26px;
      margin-bottom: 10px;
      border-radius: 4px;
    }
    .summary-bar p {
      font-size: 1.05rem;
      color: var(--nu-dark-text);
    }

    .fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin: 18px 0 12px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .fact-label {
      font-size: 0.72rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.35;
    }
    .fact-note {
      font-size: 0.82rem;
      color: #666;
      margin-top: 4px;
      font-weight: 400;
    }

    .phase-list {
      counter-reset: phase;
      list-style: none;
      padding: 0;
      margin: 10px 0;
    }
    .phase-list > li {
      counter-increment: phase;
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px 24px 22px 76px;
      margin-bottom: 14px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .phase-list > li::before {
      content: counter(phase);
      position: absolute;
      left: 18px;
      top: 22px;
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
      box-shadow: 0 3px 8px rgba(0,0,255,0.25);
    }
    .phase-title {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .phase-body {
      color: var(--nu-body-text);
    }
    .phase-body ul {
      padding-left: 20px;
      margin-top: 6px;
    }
    .phase-body li {
      margin-bottom: 4px;
    }

    .offer-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .offer-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .offer-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .offer-table tr:nth-child(even) td {
      background: var(--nu-light-gray);
    }
    .offer-table .strategy-label {
      font-weight: 700;
      color: var(--nu-blue);
    }
    .offer-table .amount {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
    }

    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 14px;
      margin: 16px 0;
    }
    .risk-card {
      background: #FFF9F0;
      border: 1px solid #E8D9B8;
      border-left: 4px solid var(--nu-accent-gold);
      padding: 16px 18px;
      border-radius: 4px;
    }
    .risk-card .risk-title {
      font-weight: 900;
      color: #7A5C1E;
      margin-bottom: 6px;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .risk-card .risk-body {
      font-size: 0.93rem;
      color: #4A3A15;
    }

    .next-actions {
      background: linear-gradient(135deg, #E6F0FF 0%, #F5FBFF 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 6px;
      padding: 26px 30px;
      margin-top: 16px;
    }
    .next-actions h3 {
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 14px;
      font-size: 1.15rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .next-actions ol {
      padding-left: 20px;
    }
    .next-actions li {
      margin-bottom: 10px;
      font-size: 1rem;
    }
    .next-actions li strong {
      color: var(--nu-dark-text);
    }

    .callout-box {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 22px 28px;
      border-radius: 6px;
      margin: 24px 0;
      font-size: 1rem;
      line-height: 1.7;
    }
    .callout-box strong {
      color: var(--nu-cyan);
    }

    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      h1.page-title { font-size: 1.7rem; }
      .page-wrap { padding: 30px 20px 50px; }
      .phase-list > li { padding: 18px 18px 18px 70px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .phase-list > li, .fact-card, .risk-card { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-header-content">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
    </div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="page-wrap">

      <div class="doc-meta">
        <span class="doc-type">Action Plan — Real Estate Acquisition</span>
        <span class="doc-date">Prepared 2026-04-21 · Aaron C. Norris</span>
      </div>

      <h1 class="page-title">Negotiate Purchase of <span class="accent">4505 Buttewoods</span></h1>
      <p class="subtitle">7,098 sq ft estate acquisition — structured negotiation playbook, due diligence path, and offer framework.</p>

      <div class="summary-bar">
        <p>This plan converts the reMarkable note "Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods" into a disciplined, step-by-step negotiation and closing workflow. The objective: acquire the property at a price and terms that reflect verified condition, comparable sales, and strategic value — without emotional commitment driving the price up.</p>
      </div>

      <h2 class="nu-section-title">Property <span class="rest">Snapshot</span></h2>
      <div class="fact-grid">
        <div class="fact-card">
          <div class="fact-label">Subject Property</div>
          <div class="fact-value">4505 Buttewoods</div>
          <div class="fact-note">Address to be confirmed in writing on offer</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Heated Sq Ft</div>
          <div class="fact-value">7,098</div>
          <div class="fact-note">Verify via county tax records & appraisal</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Asset Class</div>
          <div class="fact-value">Estate / Residential</div>
          <div class="fact-note">Luxury tier — comps must match size & finish</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Current Status</div>
          <div class="fact-value">Negotiation Stage</div>
          <div class="fact-note">Pre-contract — leverage window open</div>
        </div>
      </div>

      <h2 class="nu-section-title">Pre-Negotiation <span class="rest">Intelligence</span></h2>
      <p>Before a single number is put in writing, these five data points must be gathered and cross-checked. Walking into a negotiation on a 7,098 sq ft property without them is walking in blind.</p>

      <div class="fact-grid" style="margin-top: 16px;">
        <div class="fact-card">
          <div class="fact-label">01 — Tax Record</div>
          <div class="fact-value">Pull assessor file</div>
          <div class="fact-note">Confirm sq ft, lot size, year built, prior sale history, current tax basis</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">02 — Comparable Sales</div>
          <div class="fact-value">Last 180 days</div>
          <div class="fact-note">6,000–8,000 sq ft closed sales within 3 miles — establish $/sq ft range</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">03 — Days On Market</div>
          <div class="fact-value">Seller motivation</div>
          <div class="fact-note">DOM over 90 = pricing issue or property issue. Over 180 = strong buyer leverage</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">04 — Title & Liens</div>
          <div class="fact-value">Preliminary search</div>
          <div class="fact-note">Identify any encumbrances, HOA covenants, easements before offer</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">05 — Rehab Scope</div>
          <div class="fact-value">Walk with trades</div>
          <div class="fact-note">HVAC, roof, foundation, electrical. Estimate dollars needed before livable</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">06 — Seller Story</div>
          <div class="fact-value">Why selling?</div>
          <div class="fact-note">Relocation, estate, divorce, financial distress — dictates negotiation posture</div>
        </div>
      </div>

      <h2 class="nu-section-title">Negotiation <span class="rest">Playbook — 6 Phases</span></h2>
      <ol class="phase-list">
        <li>
          <div class="phase-title">Establish Discipline — Walk-Away Price</div>
          <div class="phase-body">
            Before any conversation, write down the maximum number you will pay and the reasons backing it. This number lives in a sealed envelope mentally. Every counter-offer from the seller is measured against it — not against the asking price.
            <ul>
              <li>Walk-away = verified comp value + strategic premium cap (no more than 5–8%)</li>
              <li>Subtract all known repair costs from walk-away before first offer is sent</li>
              <li>If negotiation pushes past walk-away, the answer is "thank you, but we're done" — delivered warmly</li>
            </ul>
          </div>
        </li>
        <li>
          <div class="phase-title">Open the Relationship — Not the Deal</div>
          <div class="phase-body">
            First conversation is relational, not transactional. The goal is to understand the seller's timeline, priorities, and pain points. People sell houses to solve problems — identify the problem, and the number becomes secondary.
            <ul>
              <li>Questions to ask: "What's the ideal closing timeline for you?"</li>
              <li>"What would make this sale feel like a win, beyond price?"</li>
              <li>"Is there anything about the property you want a buyer to know up front?"</li>
            </ul>
          </div>
        </li>
        <li>
          <div class="phase-title">Anchor Low — But Never Insultingly</div>
          <div class="phase-body">
            First written offer comes in below market comp value, but with a clear justification tied to documented comps, documented repair scope, and documented DOM. An offer with reasoning is a negotiation opener. An offer without reasoning is an insult.
            <ul>
              <li>Include a one-page offer summary: comps pulled, repair estimates, proposed close date</li>
              <li>Request seller response within 72 hours — sets pace, signals seriousness</li>
              <li>Offer should be "executable" — earnest money ready, lender letter attached if financing</li>
            </ul>
          </div>
        </li>
        <li>
          <div class="phase-title">Trade Terms, Not Just Price</div>
          <div class="phase-body">
            Once the seller counters, the conversation shifts from price alone to the full shape of the deal. Closing date, post-close occupancy, fixtures included, repair credits, financing contingency length — each of these has dollar value and each is a lever.
            <ul>
              <li>Offer flexibility on close date in exchange for price concession</li>
              <li>Offer to buy as-is in exchange for meaningful price reduction</li>
              <li>Offer larger earnest money deposit in exchange for locked terms</li>
            </ul>
          </div>
        </li>
        <li>
          <div class="phase-title">Under Contract — Protect With Inspections</div>
          <div class="phase-body">
            Once a number and terms are agreed, the negotiation is not over. Inspection period is the second negotiation window. Any material finding — roof age, HVAC end-of-life, foundation concerns, electrical code issues — is renegotiation leverage.
            <ul>
              <li>Hire three inspectors: general, structural (if any concern), and HVAC/mechanical</li>
              <li>Document every finding with photos and repair estimates from licensed trades</li>
              <li>Submit repair request or price credit request in writing, professionally, within inspection window</li>
            </ul>
          </div>
        </li>
        <li>
          <div class="phase-title">Close Clean — Title, Survey, Walk-Through</div>
          <div class="phase-body">
            Final phase. Title work must be clean, survey must match the legal description, and final walk-through must confirm the property is in the same condition as when under contract.
            <ul>
              <li>Review title commitment the day it arrives — don't wait until closing table</li>
              <li>Walk the property 24 hours before closing — verify no damage, all agreed repairs complete</li>
              <li>Wire instructions verified by phone call to the closing attorney, not by email reply</li>
            </ul>
          </div>
        </li>
      </ol>

      <h2 class="nu-section-title">Offer <span class="rest">Framework</span></h2>
      <p>Three-tier offer strategy. Each tier has a defined purpose and a defined ceiling. No tier is activated without the data from the Pre-Negotiation Intelligence section above.</p>

      <table class="offer-table">
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Offer Position</th>
            <th>When to Use</th>
            <th>Ceiling</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="strategy-label">Tier 1 — Opening</td>
            <td class="amount">~85% of verified comp value</td>
            <td>DOM > 90 days; seller shows motivation signals</td>
            <td>Hard wall — do not open above this</td>
          </tr>
          <tr>
            <td class="strategy-label">Tier 2 — Working</td>
            <td class="amount">~92% of verified comp value</td>
            <td>First counter received; repair scope documented</td>
            <td>Only move here after inspection contingency locked</td>
          </tr>
          <tr>
            <td class="strategy-label">Tier 3 — Final</td>
            <td class="amount">≤100% of verified comp value minus repair scope</td>
            <td>Seller at firm number; strategic value justifies</td>
            <td>This is the walk-away ceiling — no exceptions</td>
          </tr>
        </tbody>
      </table>

      <div class="callout-box">
        <strong>Discipline rule:</strong> The ceiling is the ceiling. A property at 7,098 sq ft is large enough that a 3% overpay equals tens of thousands of dollars — money better kept for rehab, reserves, or the next deal. If the seller refuses to meet a disciplined number, there will always be another estate. Walking away is not failure — it is the negotiation finishing correctly for us.
      </div>

      <h2 class="nu-section-title">Risk <span class="rest">Watch</span></h2>
      <div class="risk-grid">
        <div class="risk-card">
          <div class="risk-title">Title Defects</div>
          <div class="risk-body">Estate properties of this size often carry unresolved probate, unreleased liens, or prior owner easements. Order the title search early — before inspection, not after.</div>
        </div>
        <div class="risk-card">
          <div class="risk-title">Deferred Maintenance</div>
          <div class="risk-body">A 7,098 sq ft home has 7,098 sq ft of roof, HVAC load, plumbing runs, and finish work to maintain. Assume 10–15% of purchase price in deferred maintenance unless documented otherwise.</div>
        </div>
        <div class="risk-card">
          <div class="risk-title">Appraisal Gap</div>
          <div class="risk-body">If financed, lender appraisal can come in below contract price. Decide in advance: cover the gap, renegotiate, or walk. Do not decide under pressure.</div>
        </div>
        <div class="risk-card">
          <div class="risk-title">HOA / Restrictive Covenants</div>
          <div class="risk-body">Buttewoods may have neighborhood restrictions on use, rental, exterior changes, or additional structures. Request full covenant package before contract.</div>
        </div>
        <div class="risk-card">
          <div class="risk-title">Insurance Cost</div>
          <div class="risk-body">Insuring 7,098 sq ft is materially more expensive than typical housing. Get a bindable quote before closing — not after. Carry cost changes the deal math.</div>
        </div>
        <div class="risk-card">
          <div class="risk-title">Emotional Drift</div>
          <div class="risk-body">Large homes produce emotional attachment fast. Walk through with a trusted second set of eyes who will say "this is not worth the stretch" if the numbers stop working.</div>
        </div>
      </div>

      <h2 class="nu-section-title">Immediate <span class="rest">Next Actions</span></h2>
      <div class="next-actions">
        <h3>Owner: Aaron C. Norris — Execute This Week</h3>
        <ol>
          <li><strong>Pull the tax record</strong> for 4505 Buttewoods — verify sq ft, lot, year, prior sales, tax basis.</li>
          <li><strong>Commission comp analysis</strong> — 6,000–8,000 sq ft closed sales within a 3-mile radius, last 180 days.</li>
          <li><strong>Confirm days on market</strong> and seller motivation signals through direct agent contact.</li>
          <li><strong>Schedule walk-through</strong> with a general contractor and a structural inspector — document repair scope.</li>
          <li><strong>Order preliminary title search</strong> — identify liens, covenants, and easements before making any offer.</li>
          <li><strong>Write the walk-away number</strong> and the reasoning behind it before any verbal negotiation begins.</li>
          <li><strong>Prepare the Tier 1 offer packet</strong> — one-page offer letter, comp summary, repair scope, proof of funds or lender letter.</li>
        </ol>
      </div>

      <div class="callout-box" style="margin-top: 40px;">
        Negotiation is discipline, not drama. Every decision on 4505 Buttewoods should trace back to a verified comp, a written ceiling, and a seller problem we can solve. If those three inputs aren't in place, no offer goes out. <strong>Measure twice, cut once.</strong>
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