<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

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
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
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
      width: 76px;
      height: 76px;
      margin: 0 auto 14px;
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      margin-top: 18px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.85);
      letter-spacing: 0.3em;
      text-transform: uppercase;
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 5%; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PAGE TITLE BLOCK */
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .nu-page-title span {
      color: var(--nu-blue);
    }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 12px;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      margin-bottom: 36px;
      padding: 16px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
    }
    .nu-meta-item {
      font-size: 0.9rem;
    }
    .nu-meta-item strong {
      display: block;
      color: var(--nu-blue);
      text-transform: uppercase;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      margin-bottom: 2px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-top: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CARDS / GRID */
    .nu-summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
    }
    .nu-stat-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-stat-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-stat-note {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* CHEVRON BADGE */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin: 18px 0;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
    }

    /* TABLES */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    table.nu-table th {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    table.nu-table td {
      padding: 11px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tr:nth-child(even) td {
      background: var(--nu-light-gray);
    }
    table.nu-table tr:hover td {
      background: rgba(6, 208, 255, 0.06);
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 12px 0;
    }
    .nu-checklist li {
      padding: 10px 12px 10px 38px;
      margin-bottom: 8px;
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-blue);
      border-radius: 4px;
      position: relative;
      font-size: 0.95rem;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 12px;
      top: 14px;
      width: 16px;
      height: 16px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .nu-checklist li.done::before {
      background: var(--nu-blue);
    }
    .nu-checklist li.done::after {
      content: '';
      position: absolute;
      left: 17px;
      top: 16px;
      width: 6px;
      height: 10px;
      border-right: 2px solid var(--nu-white);
      border-bottom: 2px solid var(--nu-white);
      transform: rotate(45deg);
    }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 28px;
      margin: 16px 0;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      top: 6px;
      bottom: 6px;
      left: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .nu-timeline-item {
      position: relative;
      padding: 6px 0 16px 8px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -24px;
      top: 10px;
      width: 12px;
      height: 12px;
      background: var(--nu-blue);
      border: 2px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .nu-timeline-date {
      font-weight: 700;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      display: block;
      margin-bottom: 2px;
    }
    .nu-timeline-text {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 4px;
      margin: 18px 0;
      font-size: 0.95rem;
    }
    .nu-callout strong {
      color: var(--nu-blue);
    }

    .nu-callout-warn {
      background: rgba(201, 168, 76, 0.08);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 4px;
      margin: 18px 0;
      font-size: 0.95rem;
    }
    .nu-callout-warn strong {
      color: #8a6f1f;
    }

    /* TWO COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin: 18px 0;
    }
    .nu-col h3 {
      font-size: 0.9rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }
    .nu-col ul {
      padding-left: 20px;
      font-size: 0.93rem;
    }
    .nu-col ul li {
      margin-bottom: 6px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
      margin-top: 60px;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
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
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }
    .nu-footer-confidential {
      margin-top: 18px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-container { padding: 40px 20px; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 6px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-stat-card { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-doc-label">Confidential Acquisition Plan</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="nu-page-title"><span>4505 Buttewoods</span> — Estate Acquisition</h1>
      <p class="nu-page-subtitle">Negotiation framework, valuation guardrails, and execution checklist for the 7,098 sq ft Buttewoods estate.</p>

      <div class="nu-meta-row">
        <div class="nu-meta-item">
          <strong>Property</strong>
          4505 Buttewoods
        </div>
        <div class="nu-meta-item">
          <strong>Size</strong>
          7,098 sq ft
        </div>
        <div class="nu-meta-item">
          <strong>Type</strong>
          Single-Family Estate
        </div>
        <div class="nu-meta-item">
          <strong>Action Source</strong>
          reMarkable — 2026-04-25
        </div>
        <div class="nu-meta-item">
          <strong>Owner of Action</strong>
          Aaron C. Norris
        </div>
        <div class="nu-meta-item">
          <strong>Status</strong>
          Pre-Offer / Diligence
        </div>
      </div>

      <div class="nu-callout">
        <strong>Objective.</strong> Acquire 4505 Buttewoods at a price and on terms that protect Norris Utilities® cash position, preserve flexibility for the Skylift PO and FlexPro Armor inventory build, and create long-term legacy value for the Norris family.
      </div>

      <!-- KEY TARGETS -->
      <div class="nu-section">
        <div class="nu-section-title">Negotiation <span>Targets</span></div>
        <div class="nu-summary-grid">
          <div class="nu-stat-card">
            <div class="nu-stat-label">Square Footage</div>
            <div class="nu-stat-value">7,098 sq ft</div>
            <div class="nu-stat-note">Confirm via deed and tax record</div>
          </div>
          <div class="nu-stat-card">
            <div class="nu-stat-label">Walk-Away Discipline</div>
            <div class="nu-stat-value">Hard ceiling</div>
            <div class="nu-stat-note">No emotional bidding past max</div>
          </div>
          <div class="nu-stat-card">
            <div class="nu-stat-label">Earnest Money</div>
            <div class="nu-stat-value">≤ 1%</div>
            <div class="nu-stat-note">Refundable during diligence</div>
          </div>
          <div class="nu-stat-card">
            <div class="nu-stat-label">Diligence Window</div>
            <div class="nu-stat-value">30 days</div>
            <div class="nu-stat-note">Inspection + appraisal + title</div>
          </div>
        </div>
      </div>

      <!-- DUE DILIGENCE -->
      <div class="nu-section">
        <div class="nu-section-title">Due <span>Diligence Checklist</span></div>
        <ul class="nu-checklist">
          <li>Pull deed, plat, and full chain of title from probate court</li>
          <li>Confirm 7,098 sq ft via county tax record and independent measure</li>
          <li>Order Phase I environmental review if any prior commercial use</li>
          <li>Termite, structural, roof, HVAC, electrical, plumbing inspections</li>
          <li>Sewer scope and septic/well inspection if applicable</li>
          <li>Survey to confirm property lines, easements, encroachments</li>
          <li>Pull last 24 months utility bills to model carrying cost</li>
          <li>Verify insurance binder cost (replacement value, not market)</li>
          <li>Confirm zoning, deed restrictions, and HOA bylaws if any</li>
          <li>Tax history — check for assessment changes or unpaid liens</li>
        </ul>
      </div>

      <!-- VALUATION FRAMEWORK -->
      <div class="nu-section">
        <div class="nu-section-title">Valuation <span>Framework</span></div>
        <p style="margin-bottom: 12px;">Anchor every offer to documented evidence — never seller asking price alone. Bring three independent comps to the table.</p>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Lever</th>
                <th>What To Pull</th>
                <th>How It Moves The Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Closed comps (12 mo)</td>
                <td>3 closed sales within 1 mile, 6,500–7,800 sq ft</td>
                <td>Establishes blended price-per-sq-ft floor and ceiling</td>
              </tr>
              <tr>
                <td>Active listings</td>
                <td>Current competing inventory in same school zone</td>
                <td>Tests urgency — heavy supply means leverage to buyer</td>
              </tr>
              <tr>
                <td>Days on market</td>
                <td>Listing history including prior pulls and re-lists</td>
                <td>Each 30-day stretch typically opens 1–3% concession room</td>
              </tr>
              <tr>
                <td>Inspection findings</td>
                <td>Itemized contractor bids for any major repair</td>
                <td>Direct credit or price reduction in writing — never verbal</td>
              </tr>
              <tr>
                <td>Appraisal</td>
                <td>Lender-ordered appraisal at contract</td>
                <td>If under contract price, renegotiate or terminate</td>
              </tr>
              <tr>
                <td>Tax assessment</td>
                <td>Current and prior 3-year assessed values</td>
                <td>Anchor for what county records support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TERMS LEVERAGE -->
      <div class="nu-section">
        <div class="nu-section-title">Terms <span>That Move Sellers</span></div>
        <div class="nu-two-col">
          <div class="nu-col">
            <h3>Buyer-Favored Levers</h3>
            <ul>
              <li>Refundable earnest money during inspection period</li>
              <li>Financing contingency tied to appraisal value</li>
              <li>Repair credit instead of seller-managed repairs</li>
              <li>Possession at closing — no rent-back unless paid market</li>
              <li>Right to assign — opens LLC closing flexibility</li>
              <li>Title and survey paid by seller per local custom</li>
            </ul>
          </div>
          <div class="nu-col">
            <h3>Concessions Worth Trading</h3>
            <ul>
              <li>Faster close (21–30 days) if title is clean</li>
              <li>Larger earnest money <em>only</em> after inspection passes</li>
              <li>As-is on cosmetic items (paint, carpet) — never structural</li>
              <li>Flexible move-out date if seller is downsizing</li>
              <li>Letter of intent / family story — humanize the offer</li>
              <li>All-cash close if liquidity allows — typical 3–5% discount</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- TIMELINE -->
      <div class="nu-section">
        <div class="nu-section-title">Negotiation <span>Timeline</span></div>
        <div class="nu-timeline">
          <div class="nu-timeline-item">
            <span class="nu-timeline-date">Week 0 — 2026-04-25</span>
            <div class="nu-timeline-text">Action item logged from reMarkable. Open file, assign Aaron as principal negotiator. CB to set up shared folder under <em>Personal / Real Estate / 4505 Buttewoods</em>.</div>
          </div>
          <div class="nu-timeline-item">
            <span class="nu-timeline-date">Week 1</span>
            <div class="nu-timeline-text">Pull closed comps, tax record, deed history. Confirm seller motivation, days on market, and any back-channel notes from listing agent.</div>
          </div>
          <div class="nu-timeline-item">
            <span class="nu-timeline-date">Week 2</span>
            <div class="nu-timeline-text">Walk the property a second time. Pre-qualify financing or confirm cash structure. Set hard ceiling number in writing — Aaron and family advisor must both sign off.</div>
          </div>
          <div class="nu-timeline-item">
            <span class="nu-timeline-date">Week 3</span>
            <div class="nu-timeline-text">Submit written offer with personal letter of intent. Open below ceiling with documented comp basis. Hold ground on inspection and appraisal contingencies.</div>
          </div>
          <div class="nu-timeline-item">
            <span class="nu-timeline-date">Weeks 4–7</span>
            <div class="nu-timeline-text">Run full diligence inside refundable window. Negotiate any inspection-driven credit. If appraisal lands short, return to the table; if not, proceed to close.</div>
          </div>
          <div class="nu-timeline-item">
            <span class="nu-timeline-date">Week 8</span>
            <div class="nu-timeline-text">Close, fund, and record. CB updates Open Items and personal asset register. File deed and title docs in legacy archive.</div>
          </div>
        </div>
      </div>

      <!-- CASH POSITION -->
      <div class="nu-section">
        <div class="nu-section-title">Cash <span>Position Guardrails</span></div>
        <div class="nu-callout-warn">
          <strong>Do not deplete operating reserves.</strong> Norris Utilities® has open commitments — Skylift PO (5× SBA40i-LW + 1× SBA47i-MH = $1,091,402.50), FlexPro Armor build inventory, and outstanding A/R timing. Estate acquisition cash must come from personal capital lines, not operating cash. Confirm with banking partner before any offer is signed.
        </div>
        <div class="nu-summary-grid">
          <div class="nu-stat-card">
            <div class="nu-stat-label">Funding Source</div>
            <div class="nu-stat-value">Personal</div>
            <div class="nu-stat-note">Not Norris Utilities operating cash</div>
          </div>
          <div class="nu-stat-card">
            <div class="nu-stat-label">Banking Partner</div>
            <div class="nu-stat-value">Renasant</div>
            <div class="nu-stat-note">Patrick Lavette — confirm structure first</div>
          </div>
          <div class="nu-stat-card">
            <div class="nu-stat-label">Reserve Discipline</div>
            <div class="nu-stat-value">6 months</div>
            <div class="nu-stat-note">Operating reserve untouched</div>
          </div>
        </div>
      </div>

      <!-- TEAM -->
      <div class="nu-section">
        <div class="nu-section-title">Negotiation <span>Team</span></div>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Person</th>
                <th>Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Principal / Buyer</td>
                <td>Aaron C. Norris</td>
                <td>Final decision authority, signs all offers and counters</td>
              </tr>
              <tr>
                <td>Admin / File Owner</td>
                <td>Caroline Butler (CB)</td>
                <td>Maintains shared folder, calendar holds, document tracking</td>
              </tr>
              <tr>
                <td>Banking</td>
                <td>Patrick Lavette — Renasant Bank</td>
                <td>Pre-qualification, financing structure, proof of funds</td>
              </tr>
              <tr>
                <td>Title / Closing Attorney</td>
                <td>To confirm</td>
                <td>Title search, escrow, closing disclosure review</td>
              </tr>
              <tr>
                <td>Inspector</td>
                <td>To confirm — licensed AL home inspector</td>
                <td>Structural, mechanical, environmental inspections</td>
              </tr>
              <tr>
                <td>Family Advisor</td>
                <td>Wayne Norris (Dad)</td>
                <td>Sounding board on hard ceiling and family legacy fit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- WALK-AWAY TRIGGERS -->
      <div class="nu-section">
        <div class="nu-section-title">Walk-Away <span>Triggers</span></div>
        <span class="nu-badge">▲ Discipline Beats Desire</span>
        <ul class="nu-checklist">
          <li>Seller refuses standard inspection contingency</li>
          <li>Title shows unresolved liens, easement disputes, or boundary issues</li>
          <li>Inspection uncovers >$50k in undisclosed structural / system repair without seller credit</li>
          <li>Appraisal lands short and seller will not adjust</li>
          <li>Final price would force tapping Norris Utilities® operating cash</li>
          <li>Any term that strips refundable earnest money before diligence completes</li>
        </ul>
      </div>

      <!-- NEXT ACTIONS -->
      <div class="nu-section">
        <div class="nu-section-title">Next <span>Actions This Week</span></div>
        <ul class="nu-checklist">
          <li>Aaron — Confirm seller, listing status, and asking price for 4505 Buttewoods</li>
          <li>CB — Create shared folder <em>Personal / Real Estate / 4505 Buttewoods</em> with subfolders: Comps, Inspection, Title, Financing, Correspondence</li>
          <li>Aaron — Call Patrick Lavette at Renasant to discuss financing structure</li>
          <li>CB — Pull current public records: tax assessment, last sale, ownership history</li>
          <li>Aaron — Pull 3 closed comps and 3 actives within 1 mile</li>
          <li>Aaron — Set hard ceiling number in writing, sign off with Wayne</li>
          <li>Aaron — Update Open Items log under <em>Personal / Real Estate</em></li>
        </ul>
        <div class="nu-callout">
          <strong>Discipline reminder.</strong> Negotiate the deal you would still walk away from. The walk-away leverage is the only leverage that actually closes the gap — every other tool depends on it.
        </div>
      </div>

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
    <div class="nu-footer-confidential">Confidential — Personal Acquisition Planning Document</div>
  </footer>

</body>
</html>