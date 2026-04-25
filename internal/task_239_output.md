<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    /* ══ ROOT VARIABLES ══ */
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

    /* ══ BASE ══ */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
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
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* ══ CHEVRON TRANSITION ══ */
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

    /* ══ CONTENT ══ */
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
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-content-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* ══ DOC LABEL ══ */
    .nu-doc-label {
      display: inline-block;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 8px 18px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .nu-page-subtitle {
      font-weight: 400;
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 12px;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 14px 0;
      margin-bottom: 32px;
      border-top: 2px solid var(--nu-medium-gray);
      border-bottom: 2px solid var(--nu-medium-gray);
      font-size: 0.85rem;
    }
    .nu-meta-item span {
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      display: block;
      font-size: 0.7rem;
      margin-bottom: 2px;
    }
    .nu-meta-item strong { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 36px 0 14px;
      line-height: 1.3;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ BADGES ══ */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin: 4px 8px 8px 0;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.03em;
    }
    .nu-badge.cyan {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }

    /* ══ PROPERTY HERO CARD ══ */
    .nu-hero-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border-left: 6px solid var(--nu-blue);
      border-radius: 6px;
      padding: 28px 32px;
      margin-bottom: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-hero-card h3 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.15rem;
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .nu-hero-card .address {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-hero-card .meta-line {
      color: #555;
      font-size: 0.95rem;
    }

    /* ══ FACT GRID ══ */
    .nu-fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin: 20px 0 30px;
    }
    .nu-fact-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
      padding: 20px 18px;
      border-radius: 4px;
      text-align: center;
    }
    .nu-fact-cell .label {
      font-size: 0.7rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-fact-cell .value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .nu-fact-cell .sub {
      font-size: 0.78rem;
      color: #777;
      margin-top: 4px;
    }

    /* ══ NEGOTIATION TABLE ══ */
    .nu-table-wrap { overflow-x: auto; margin-bottom: 24px; }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    table.nu-table thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.75rem;
    }
    table.nu-table tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    table.nu-table .num { font-weight: 700; color: var(--nu-blue); white-space: nowrap; }

    /* ══ STEP LIST ══ */
    .nu-steps { list-style: none; margin: 14px 0 24px; padding: 0; }
    .nu-steps li {
      position: relative;
      padding: 14px 18px 14px 60px;
      margin-bottom: 10px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .nu-steps li::before {
      counter-increment: step-counter;
      content: counter(step-counter);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 34px; height: 34px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .nu-steps { counter-reset: step-counter; }
    .nu-steps li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      margin-bottom: 4px;
      font-size: 0.98rem;
    }
    .nu-steps li span {
      color: #555;
      font-size: 0.9rem;
    }

    /* ══ ACTION BOX ══ */
    .nu-action {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 6px;
      margin: 32px 0;
      box-shadow: 0 4px 16px rgba(0, 0, 255, 0.2);
    }
    .nu-action h3 {
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .nu-action p { font-size: 0.98rem; line-height: 1.7; }
    .nu-action strong { color: var(--nu-cyan); }

    /* ══ NOTE / DUE DILIGENCE LIST ══ */
    .nu-bullets {
      list-style: none;
      padding: 0;
      margin: 12px 0 24px;
    }
    .nu-bullets li {
      position: relative;
      padding: 8px 0 8px 26px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-bullets li::before {
      content: '◆';
      position: absolute;
      left: 0; top: 8px;
      color: var(--nu-cyan);
      font-size: 0.85rem;
    }
    .nu-bullets li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
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

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.1rem; }
      .nu-content-wrap { padding: 40px 20px 60px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.2rem; }
      .nu-badge { clip-path: none; border-radius: 6px; }
      .nu-hero-card { padding: 20px; }
      .nu-action { padding: 22px; }
    }

    /* ══ PRINT ══ */
    @media print {
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-action, .nu-fact-cell, table.nu-table thead th { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
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
    <div class="nu-content-wrap">

      <div class="nu-doc-label">Action Brief — Personal / Confidential</div>
      <h1 class="nu-page-title">Estate Acquisition Strategy: 4505 Buttewoods</h1>
      <p class="nu-page-subtitle">Negotiate purchase of 7,098 sq ft estate property</p>

      <div class="nu-meta-row">
        <div class="nu-meta-item">
          <span>Origin</span>
          <strong>reMarkable Action Item</strong>
        </div>
        <div class="nu-meta-item">
          <span>Owner</span>
          <strong>Aaron C. Norris</strong>
        </div>
        <div class="nu-meta-item">
          <span>Date Logged</span>
          <strong>April 25, 2026</strong>
        </div>
        <div class="nu-meta-item">
          <span>Status</span>
          <strong>Open — Pre-Offer Strategy</strong>
        </div>
        <div class="nu-meta-item">
          <span>Priority</span>
          <strong>High — Personal</strong>
        </div>
      </div>

      <!-- HERO PROPERTY CARD -->
      <div class="nu-hero-card">
        <h3>SUBJECT PROPERTY</h3>
        <div class="address">4505 Buttewoods</div>
        <div class="meta-line">7,098 sq ft estate residence — full negotiation strategy below</div>
      </div>

      <!-- BADGES -->
      <div>
        <div class="nu-badge">RESIDENTIAL ESTATE</div>
        <div class="nu-badge cyan">7,098 SQ FT</div>
        <div class="nu-badge">NEGOTIATION ACTIVE</div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
      <div class="nu-fact-grid">
        <div class="nu-fact-cell">
          <div class="label">Living Area</div>
          <div class="value">7,098</div>
          <div class="sub">square feet</div>
        </div>
        <div class="nu-fact-cell">
          <div class="label">Address</div>
          <div class="value" style="font-size:1.1rem;">4505</div>
          <div class="sub">Buttewoods</div>
        </div>
        <div class="nu-fact-cell">
          <div class="label">Class</div>
          <div class="value" style="font-size:1.1rem;">Estate</div>
          <div class="sub">residential</div>
        </div>
        <div class="nu-fact-cell">
          <div class="label">Stage</div>
          <div class="value" style="font-size:1.1rem;">Pre-Offer</div>
          <div class="sub">strategy phase</div>
        </div>
      </div>

      <!-- NEGOTIATION FRAMEWORK -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Framework</span></h2>
      <p style="margin-bottom:14px;">A disciplined acquisition follows a fixed sequence. Skipping any step weakens leverage at the closing table.</p>

      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width:60px;">#</th>
              <th>Phase</th>
              <th>Objective</th>
              <th style="width:140px;">Target Window</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="num">1</td>
              <td><strong>Market Comp Pull</strong></td>
              <td>Pull 6 most recent estate-class comps within a 1-mile radius. Establish defensible price-per-square-foot floor and ceiling.</td>
              <td class="num">Week 1</td>
            </tr>
            <tr>
              <td class="num">2</td>
              <td><strong>Title &amp; Lien Search</strong></td>
              <td>Probate County records check — confirm clean title, identify liens, easements, restrictive covenants tied to the parcel.</td>
              <td class="num">Week 1–2</td>
            </tr>
            <tr>
              <td class="num">3</td>
              <td><strong>Seller Motivation Read</strong></td>
              <td>Determine seller's reason for sale — relocation, downsizing, estate settlement, financial pressure. Each carries different leverage.</td>
              <td class="num">Week 2</td>
            </tr>
            <tr>
              <td class="num">4</td>
              <td><strong>Initial Written Offer</strong></td>
              <td>Submit first offer 8–12% below asking with concise justification cover letter. Lead with terms, not just price.</td>
              <td class="num">Week 2–3</td>
            </tr>
            <tr>
              <td class="num">5</td>
              <td><strong>Inspection Contingency</strong></td>
              <td>10-day inspection window — structural, mechanical, roof, foundation. Use findings as legitimate price-reduction leverage.</td>
              <td class="num">Week 3–4</td>
            </tr>
            <tr>
              <td class="num">6</td>
              <td><strong>Final Counter &amp; Lock</strong></td>
              <td>Counter to settlement. Earnest money deposited. Closing date locked. Walk if seller refuses post-inspection adjustment.</td>
              <td class="num">Week 4–5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- NEXT STEPS -->
      <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Steps</span></h2>
      <ol class="nu-steps">
        <li>
          <strong>Engage Real Estate Counsel</strong>
          <span>Brief Patrick Lavette at Renasant Bank for financing pre-qualification. Identify closing attorney before submitting any written offer.</span>
        </li>
        <li>
          <strong>Pull Public Records on 4505 Buttewoods</strong>
          <span>Probate County Recorder — deed history, last sale price, current tax assessment, ownership chain.</span>
        </li>
        <li>
          <strong>Drive-By &amp; Photograph</strong>
          <span>Visual inspection of exterior, roof, grounds, neighboring properties. Note visible deferred maintenance for offer justification.</span>
        </li>
        <li>
          <strong>Comp Sheet Build</strong>
          <span>Six recent estate sales within radius. Compute average and median price per sq ft. This becomes your offer floor.</span>
        </li>
        <li>
          <strong>Draft Offer Cover Letter</strong>
          <span>One page. Lead with proof of funds. State terms (price, closing date, contingencies). No emotional appeals — stay clinical.</span>
        </li>
        <li>
          <strong>Submit Offer + Track Response Window</strong>
          <span>Standard 48–72 hour response window. Silence past 72 hours = soft "no" — follow up once, then move on.</span>
        </li>
      </ol>

      <!-- DUE DILIGENCE -->
      <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
      <ul class="nu-bullets">
        <li><strong>Title insurance commitment</strong> — confirm marketable title and ALTA exceptions.</li>
        <li><strong>Survey of record</strong> — verify boundary, encroachments, setbacks.</li>
        <li><strong>Mechanical inspection</strong> — HVAC, plumbing, electrical, roof age and condition.</li>
        <li><strong>Structural &amp; foundation inspection</strong> — required on any 7,000+ sq ft residence.</li>
        <li><strong>Termite &amp; moisture report</strong> — Alabama market standard, non-negotiable.</li>
        <li><strong>Property tax &amp; insurance estimate</strong> — confirm carrying cost fits annual budget.</li>
        <li><strong>HOA / restrictive covenants</strong> — review CC&amp;Rs if applicable; flag any commercial-use restrictions.</li>
        <li><strong>Zoning verification</strong> — confirm any future use plans are compliant with current zoning.</li>
      </ul>

      <!-- LEVERAGE PRINCIPLES -->
      <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Principles</span></h2>
      <ul class="nu-bullets">
        <li><strong>Cash terms beat headline price.</strong> A clean cash offer at 90% often defeats a financed offer at 100%.</li>
        <li><strong>Walk-away credibility is the strongest tool.</strong> If you cannot walk, you have no leverage.</li>
        <li><strong>Use inspection findings — not opinions — for re-trades.</strong> Specifics (estimates, contractor bids) win; complaints lose.</li>
        <li><strong>Control the closing date.</strong> Whoever picks the date controls the urgency curve.</li>
        <li><strong>Never reveal the ceiling.</strong> Always leave 3–5% of negotiation room undisclosed.</li>
      </ul>

      <!-- ACTION BOX -->
      <div class="nu-action">
        <h3>Decision Point — Next 7 Days</h3>
        <p>
          The first move is information, not an offer. Pull <strong>title, tax, and comp data</strong> on 4505 Buttewoods this week. Once those three documents are in hand, the price ceiling, the price floor, and the seller's likely motivation become measurable — not speculative.
          <br><br>
          Owner: <strong>Aaron C. Norris</strong> &nbsp;|&nbsp; Action Window: <strong>April 25 – May 2, 2026</strong> &nbsp;|&nbsp; Source: <strong>reMarkable Action Item</strong>
        </p>
      </div>

      <h2 class="nu-section-title"><span class="first">Reference</span> <span class="rest">Notes</span></h2>
      <ul class="nu-bullets">
        <li><strong>Origin:</strong> Captured from Aaron's reMarkable on April 25, 2026 as a high-priority personal action item.</li>
        <li><strong>Document scope:</strong> Negotiation strategy framework only — not a binding offer or financial commitment.</li>
        <li><strong>Confidentiality:</strong> Personal acquisition; do not discuss outside Aaron's direct counsel and lender.</li>
        <li><strong>Update cadence:</strong> Refresh this brief at the close of each negotiation phase.</li>
      </ul>

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