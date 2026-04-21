<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>4505 Buttewoods Estate — Acquisition Brief — Norris Utilities®</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');

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
  margin: 0 auto 18px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
  font-size: 1.3rem;
  color: var(--nu-white);
  letter-spacing: 0.8em;
  text-transform: uppercase;
  margin-bottom: 22px;
}

.nu-tagline {
  font-family: 'Playfair Display', var(--font-primary);
  font-style: italic;
  font-weight: 300;
  font-size: 1.25rem;
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
  overflow: hidden;
}

.nu-content-area::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%; aspect-ratio: 1;
  background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0.7;
  z-index: 0;
  pointer-events: none;
}

.nu-content-area > * { position: relative; z-index: 1; }

.nu-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 40px;
}

.nu-doc-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: var(--nu-light-gray);
  border-left: 4px solid var(--nu-blue);
  margin-bottom: 40px;
  font-size: 0.88rem;
  flex-wrap: wrap;
  gap: 12px;
}
.nu-doc-meta strong { color: var(--nu-navy); font-weight: 700; }

.nu-section-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.6rem;
  color: #0033cc;
  margin-bottom: 10px;
  letter-spacing: 0.01em;
}
.nu-section-title span {
  color: var(--nu-dark-text);
  font-weight: 700;
}

.nu-section-rule {
  height: 3px;
  width: 60px;
  background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
  margin-bottom: 24px;
}

.nu-section { margin-bottom: 48px; }

.nu-lead {
  font-size: 1.05rem;
  color: var(--nu-body-text);
  margin-bottom: 18px;
}

.nu-card {
  background: var(--nu-white);
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid var(--nu-medium-gray);
  margin-bottom: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.nu-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.nu-fact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin-bottom: 24px;
}
.nu-fact {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-top: 3px solid var(--nu-blue);
  padding: 18px 20px;
  border-radius: 6px;
}
.nu-fact-label {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--nu-blue);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.nu-fact-value {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--nu-dark-text);
  line-height: 1.3;
}
.nu-fact-value small {
  display: block;
  font-weight: 400;
  font-size: 0.85rem;
  color: var(--nu-body-text);
  margin-top: 4px;
}

.nu-badge {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 12px 28px 12px 18px;
  margin-bottom: 18px;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 16px 50%);
  font-weight: 700;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.nu-checklist {
  list-style: none;
  padding: 0;
}
.nu-checklist li {
  position: relative;
  padding: 12px 0 12px 36px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.98rem;
}
.nu-checklist li:last-child { border-bottom: none; }
.nu-checklist li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 18px;
  width: 20px;
  height: 20px;
  border: 2px solid var(--nu-blue);
  border-radius: 3px;
  background: var(--nu-white);
}
.nu-checklist li strong {
  color: var(--nu-navy);
  font-weight: 700;
}

.nu-stage-list {
  list-style: none;
  padding: 0;
  counter-reset: stage;
}
.nu-stage-list li {
  counter-increment: stage;
  position: relative;
  padding: 18px 0 18px 58px;
  border-bottom: 1px solid var(--nu-medium-gray);
}
.nu-stage-list li:last-child { border-bottom: none; }
.nu-stage-list li::before {
  content: counter(stage);
  position: absolute;
  left: 0;
  top: 18px;
  width: 40px;
  height: 40px;
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
.nu-stage-list h4 {
  color: var(--nu-navy);
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 4px;
}
.nu-stage-list p {
  font-size: 0.95rem;
  color: var(--nu-body-text);
}

.nu-price-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 8px;
  font-size: 0.95rem;
}
.nu-price-table th {
  background: var(--nu-navy);
  color: var(--nu-white);
  text-align: left;
  padding: 12px 16px;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.nu-price-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--nu-medium-gray);
}
.nu-price-table tr:nth-child(even) { background: var(--nu-light-gray); }
.nu-price-table tr.total-row td {
  font-weight: 900;
  color: var(--nu-blue);
  border-top: 2px solid var(--nu-navy);
  border-bottom: none;
  background: #eef2ff;
}
.nu-price-table td.right { text-align: right; }

.nu-callout {
  background: linear-gradient(135deg, #eef4ff 0%, #ffffff 100%);
  border-left: 4px solid var(--nu-cyan);
  padding: 20px 24px;
  border-radius: 4px;
  margin: 20px 0;
}
.nu-callout strong { color: var(--nu-navy); }

.nu-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.nu-risk-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-left: 4px solid var(--nu-accent-gold);
  padding: 18px 20px;
  border-radius: 4px;
}
.nu-risk-card h4 {
  font-weight: 700;
  color: var(--nu-navy);
  margin-bottom: 6px;
  font-size: 1rem;
}
.nu-risk-card p {
  font-size: 0.92rem;
  color: var(--nu-body-text);
}

.nu-btn-row { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 10px; }

.nu-btn-primary,
.nu-btn-secondary {
  display: inline-block;
  padding: 13px 30px;
  border-radius: 4px;
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid var(--nu-blue);
}
.nu-btn-primary {
  background: var(--nu-blue);
  color: var(--nu-white);
}
.nu-btn-primary:hover {
  background: #0000CC;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,255,0.3);
}
.nu-btn-secondary {
  background: transparent;
  color: var(--nu-blue);
}
.nu-btn-secondary:hover {
  background: var(--nu-blue);
  color: var(--nu-white);
}

.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 44px 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: 'Playfair Display', var(--font-primary);
  font-style: italic;
  font-weight: 300;
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

@media (max-width: 768px) {
  .nu-header { padding: 44px 20px 70px; min-height: 220px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1rem; }
  .nu-container { padding: 40px 22px; }
  .nu-two-col { grid-template-columns: 1fr; }
  .nu-badge { clip-path: none; border-radius: 6px; }
  .nu-price-table th, .nu-price-table td { padding: 10px 10px; font-size: 0.85rem; }
}

@media print {
  .nu-header {
    background: var(--nu-blue) !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .nu-card { box-shadow: none; border: 1px solid #ccc; }
  .nu-footer {
    background: var(--nu-navy) !important;
    -webkit-print-color-adjust: exact;
  }
  .nu-btn-row { display: none; }
}
</style>
</head>
<body>

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
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-doc-meta">
        <div><strong>Action Item:</strong> Estate Acquisition — Negotiation Brief</div>
        <div><strong>Property:</strong> 4505 Buttewoods</div>
        <div><strong>Prepared:</strong> April 21, 2026</div>
      </div>

      <div class="nu-section">
        <div class="nu-badge">Action Item Brief</div>
        <h1 class="nu-section-title">Negotiate <span>Purchase — 4505 Buttewoods Estate</span></h1>
        <div class="nu-section-rule"></div>
        <p class="nu-lead">
          Source: reMarkable action item captured on Aaron's tablet. This brief organizes the negotiation
          plan for acquiring the 7,098 sq ft estate at 4505 Buttewoods — defining the property facts,
          the decision framework, the staged negotiation approach, and the diligence items that must
          close before any signed purchase agreement.
        </p>
      </div>

      <div class="nu-section">
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-fact-grid">
          <div class="nu-fact">
            <div class="nu-fact-label">Address</div>
            <div class="nu-fact-value">4505 Buttewoods</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Home Size</div>
            <div class="nu-fact-value">7,098 sq ft</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Classification</div>
            <div class="nu-fact-value">Estate<small>Single-family residential, premium tier</small></div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Status</div>
            <div class="nu-fact-value">Active Negotiation<small>Buyer-side</small></div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Buyer</div>
            <div class="nu-fact-value">Aaron C. Norris</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Source</div>
            <div class="nu-fact-value">reMarkable capture<small>Personal action item</small></div>
          </div>
        </div>
        <div class="nu-callout">
          <strong>Note on data discipline:</strong> Listing price, seller identity, agent, and any offer
          figures are intentionally not recorded here until confirmed in writing. Per Norris house
          rule, we do not carry approximations into negotiation briefs — we add each fact only once
          it has a verifiable source (MLS printout, agent email, or signed document).
        </div>
      </div>

      <div class="nu-section">
        <h2 class="nu-section-title">Pre-Offer <span>Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-lead">Every item below must be confirmed in writing before any number is put on paper.</p>
        <div class="nu-card">
          <ul class="nu-checklist">
            <li><strong>Confirm square footage</strong> — Pull county tax-appraisal record and compare to listing's 7,098 sq ft claim. Resolve any delta before offer.</li>
            <li><strong>Pull recent comparable sales</strong> — Three to five closed estates over 6,000 sq ft within the immediate submarket, last 12 months.</li>
            <li><strong>Order title history</strong> — Chain of title, any active liens, HOA/POA status, easements, mineral rights.</li>
            <li><strong>Verify property taxes</strong> — Current year assessment plus trailing three years, confirm no outstanding balance.</li>
            <li><strong>Confirm disclosures are complete</strong> — Seller's disclosure statement signed, lead-based paint (if pre-1978), any prior water intrusion, foundation, or roof claims.</li>
            <li><strong>Inspection team identified</strong> — General inspector, foundation engineer, roofing specialist, HVAC, and termite — on standby before offer lands.</li>
            <li><strong>Financing posture decided</strong> — Cash, conventional, or bridged. Proof-of-funds letter ready if cash. Pre-approval letter refreshed if financed.</li>
            <li><strong>Legal review lined up</strong> — Real-estate attorney briefed on timeline and ready to review contract within 24 hours of draft.</li>
          </ul>
        </div>
      </div>

      <div class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Stages</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <ol class="nu-stage-list">
            <li>
              <h4>Discovery</h4>
              <p>Gather listing history (DOM, price changes, prior contracts fallen through), walk the property in person, confirm seller's motivation — relocation, estate sale, financial pressure, or elective move. Motivation drives leverage.</p>
            </li>
            <li>
              <h4>Anchor</h4>
              <p>Open with a documented offer tied to comps, not emotion. Include proof-of-funds, short inspection window, and a clean earnest-money deposit. Written offer only — no verbal anchors.</p>
            </li>
            <li>
              <h4>Counter &amp; Concession</h4>
              <p>Trade concessions in pairs: every dollar you move on price should buy a concession the other direction — closing timeline, repairs credit, fixtures included, or leaseback terms.</p>
            </li>
            <li>
              <h4>Diligence Period</h4>
              <p>Inspections run in parallel, not sequentially. Any adverse findings trigger a repair-credit request or walk-away — this is the most important renegotiation window and cannot be wasted.</p>
            </li>
            <li>
              <h4>Contract Finalization</h4>
              <p>Attorney review before signature. Every addendum initialed. Closing disclosure reconciled line-by-line against the purchase agreement. No verbal side deals — everything in writing.</p>
            </li>
            <li>
              <h4>Close &amp; Record</h4>
              <p>Wire instructions verified by phone against a known-good number. Title policy issued. Deed recorded. Keys, codes, and remotes transferred and logged.</p>
            </li>
          </ol>
        </div>
      </div>

      <div class="nu-section">
        <h2 class="nu-section-title">Decision <span>Framework</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-lead">
          A large estate purchase lives or dies on three numbers. Fill each with verified data before the
          offer — not after — so the walk-away line is defined in advance and defended under pressure.
        </p>
        <div class="nu-card">
          <table class="nu-price-table">
            <thead>
              <tr>
                <th>Line</th>
                <th>Definition</th>
                <th class="right">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Comp-Based Value</strong></td>
                <td>Median price-per-sq-ft from 3–5 recent comparable estates × 7,098 sq ft, adjusted for lot, condition, and features.</td>
                <td class="right">Pending comps</td>
              </tr>
              <tr>
                <td><strong>Opening Offer</strong></td>
                <td>Anchor price — typically 3–7% below comp-based value depending on days-on-market and seller motivation.</td>
                <td class="right">Pending</td>
              </tr>
              <tr>
                <td><strong>Walk-Away Ceiling</strong></td>
                <td>Absolute maximum — written down before the first counter is received, not negotiated in the moment.</td>
                <td class="right">Pending</td>
              </tr>
              <tr class="total-row">
                <td colspan="2">Spread Between Anchor and Walk-Away Ceiling</td>
                <td class="right">To be set</td>
              </tr>
            </tbody>
          </table>
          <p style="font-size: 0.88rem; color: var(--nu-body-text); margin-top: 10px;">
            Aaron's rule: the walk-away ceiling is written in ink before negotiation begins. If the
            deal requires exceeding it, that is a different deal — it gets a new brief, not a quiet exception.
          </p>
        </div>
      </div>

      <div class="nu-section">
        <h2 class="nu-section-title">Risk &amp; <span>Contingency Log</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-two-col">
          <div class="nu-risk-card">
            <h4>Disclosure Gaps</h4>
            <p>Omissions in seller disclosures (water intrusion, foundation, prior flood) are a pattern. Verify independently via inspection and neighbor inquiry.</p>
          </div>
          <div class="nu-risk-card">
            <h4>Title Clouds</h4>
            <p>Old mortgages, unreleased liens, and boundary disputes show up more often on large estates. Full chain-of-title required before contract.</p>
          </div>
          <div class="nu-risk-card">
            <h4>Timing Pressure</h4>
            <p>Do not let a seller-imposed deadline collapse diligence. A shortened inspection period is a price concession — price it accordingly or decline.</p>
          </div>
          <div class="nu-risk-card">
            <h4>Appraisal Gap</h4>
            <p>If financed, appraisal can fall short on large unique estates. Decide the appraisal-gap coverage policy before signing, not after.</p>
          </div>
          <div class="nu-risk-card">
            <h4>Renovation Scope</h4>
            <p>7,098 sq ft amplifies every cost. Any planned updates need a written scope and contractor estimate before the walk-away ceiling is finalized.</p>
          </div>
          <div class="nu-risk-card">
            <h4>Personal Property</h4>
            <p>Fixtures, chandeliers, appliances, outbuildings, and yard equipment must be listed explicitly in the contract — "what's there at the walk-through stays" is not binding.</p>
          </div>
        </div>
      </div>

      <div class="nu-section">
        <h2 class="nu-section-title">Next <span>Actions</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <ul class="nu-checklist">
            <li><strong>Pull county property card</strong> for 4505 Buttewoods — verify square footage, lot size, year built, last sale date and amount.</li>
            <li><strong>Request full MLS printout</strong> from buyer-side agent including price history and days-on-market.</li>
            <li><strong>Line up inspection team</strong> — confirm availability inside a 10-day window.</li>
            <li><strong>Refresh proof-of-funds</strong> or pre-approval letter so an offer can go out same-day once comps land.</li>
            <li><strong>Schedule in-person walkthrough</strong> — Aaron present, not delegated.</li>
            <li><strong>Brief attorney</strong> — put the file on their desk before offer, not after counter.</li>
          </ul>
          <div class="nu-btn-row">
            <a href="tel:2055001343" class="nu-btn-primary">Call 205-500-1343</a>
            <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Acquisition%20Brief" class="nu-btn-secondary">Email Aaron</a>
          </div>
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