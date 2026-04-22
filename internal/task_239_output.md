<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — 4505 Buttewoods Negotiation — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap" rel="stylesheet">
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

    /* ══ HEADER ══ */
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
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      background-size: 60px 60px, 80px 80px;
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
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%; height: 50px; display: block;
    }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.02) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ PAGE TITLE ══ */
    .page-title-block {
      border-left: 6px solid var(--nu-cyan);
      padding: 8px 0 8px 24px;
      margin-bottom: 40px;
    }
    .page-kicker {
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--nu-blue);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .page-subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: #666;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 20px;
      margin-top: 40px;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ PROPERTY SUMMARY CARD ══ */
    .property-card {
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px;
      margin-bottom: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .property-address {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .property-detail-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .detail-item {
      text-align: left;
    }
    .detail-label {
      font-weight: 700;
      font-size: 0.75rem;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .detail-value {
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--nu-dark-text);
    }

    /* ══ STATUS BADGE ══ */
    .status-badge {
      display: inline-block;
      background: linear-gradient(135deg, #C9A84C 0%, #E5C874 100%);
      color: var(--nu-navy);
      padding: 6px 16px;
      border-radius: 20px;
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    /* ══ CHEVRON BADGES ══ */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 20px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px; height: 32px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* ══ NEGOTIATION STRATEGY GRID ══ */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    .strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .strategy-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .strategy-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .strategy-card p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px;
      margin-bottom: 24px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist-item:last-child {
      border-bottom: none;
    }
    .check-box {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      flex-shrink: 0;
      background: var(--nu-white);
    }
    .check-text {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .check-text strong {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* ══ KEY FIGURE CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px;
      border-radius: 8px;
      margin: 24px 0;
      text-align: center;
    }
    .callout-label {
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .callout-figure {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-white);
      line-height: 1.1;
    }
    .callout-note {
      font-size: 0.9rem;
      color: rgba(255,255,255,0.8);
      margin-top: 10px;
      font-style: italic;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 28px;
      margin-bottom: 24px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 0; bottom: 0;
      width: 2px;
      background: var(--nu-cyan);
    }
    .timeline-item {
      position: relative;
      padding: 10px 0 20px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -28px; top: 14px;
      width: 18px; height: 18px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-cyan);
      border-radius: 50%;
    }
    .timeline-phase {
      font-weight: 900;
      font-size: 0.78rem;
      color: var(--nu-blue);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .timeline-body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ RISK FLAGS ══ */
    .risk-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .risk-list li {
      padding: 12px 0 12px 32px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .risk-list li::before {
      content: '⚠';
      position: absolute;
      left: 0; top: 12px;
      color: var(--nu-accent-gold);
      font-size: 1.2rem;
      font-weight: 900;
    }
    .risk-list li:last-child {
      border-bottom: none;
    }
    .risk-list strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 20px; }
      .page-title { font-size: 1.6rem; }
      .callout-figure { font-size: 1.9rem; }
      .nu-badge { clip-path: none; border-radius: 8px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .strategy-card, .property-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-logo-subtitle">U T I L I T I E S</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- PAGE TITLE -->
      <div class="page-title-block">
        <div class="page-kicker">Action Item · reMarkable Capture</div>
        <h1 class="page-title">Negotiate Purchase — 4505 Buttewoods Estate</h1>
        <p class="page-subtitle">7,098 sq ft residence · Strategy &amp; pre-close checklist</p>
      </div>

      <!-- PROPERTY SUMMARY -->
      <div class="property-card">
        <span class="status-badge">Active Negotiation</span>
        <div class="property-address">4505 Buttewoods</div>
        <div style="color:#666; font-size:0.95rem;">Primary target property — negotiation phase</div>

        <div class="property-detail-row">
          <div class="detail-item">
            <div class="detail-label">Square Footage</div>
            <div class="detail-value">7,098 sq ft</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Property Type</div>
            <div class="detail-value">Estate</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Address</div>
            <div class="detail-value">4505 Buttewoods</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Source</div>
            <div class="detail-value">reMarkable</div>
          </div>
        </div>
      </div>

      <!-- NEGOTIATION STRATEGY -->
      <h2 class="nu-section-title">Negotiation <span>Strategy</span></h2>

      <div class="strategy-grid">
        <div class="strategy-card">
          <h3>01 · Establish Walk-Away Price</h3>
          <p>Fix the maximum number before any counter goes back. Emotion is the enemy of price discipline on a 7,098 sq ft estate — the ceiling must be written down before the first offer.</p>
        </div>
        <div class="strategy-card">
          <h3>02 · Pull Comps First</h3>
          <p>Three to five comparable estate sales within the last 12 months. Price per square foot matters less than condition-adjusted comps at this size.</p>
        </div>
        <div class="strategy-card">
          <h3>03 · Inspection Leverage</h3>
          <p>Any 7,098 sq ft home carries deferred maintenance somewhere. A thorough inspection is the strongest lever for a post-offer price reduction — budget for it.</p>
        </div>
        <div class="strategy-card">
          <h3>04 · Close-Date Flexibility</h3>
          <p>Sellers of large estates often value a clean, flexible close over the top dollar. Ask what timeline they need and offer to meet it in exchange for price.</p>
        </div>
        <div class="strategy-card">
          <h3>05 · Financing Letter Ready</h3>
          <p>Pre-approval or proof-of-funds in hand before the first offer. A strong financing position at this price point can be worth 2–3% versus a stretched competing buyer.</p>
        </div>
        <div class="strategy-card">
          <h3>06 · Silent Anchor</h3>
          <p>Lead with a defensible low anchor — justified by comps, not hostile. The first number sets the range; let the seller narrow the gap, not you.</p>
        </div>
      </div>

      <!-- CALLOUT -->
      <div class="callout">
        <div class="callout-label">Property Size Reference</div>
        <div class="callout-figure">7,098 sq ft</div>
        <div class="callout-note">Estate-class property — negotiation rules differ from standard residential</div>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title">Deal <span>Timeline</span></h2>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-phase">Phase 1 · Pre-Offer</div>
          <div class="timeline-title">Comps, walk-away price, financing letter</div>
          <div class="timeline-body">Complete before the first written offer leaves. Do not respond to listing agent pressure without these three in hand.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Phase 2 · Offer</div>
          <div class="timeline-title">Written offer with silent anchor price</div>
          <div class="timeline-body">Below market but defensible. Include contingencies: inspection, financing, clean title, appraisal.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Phase 3 · Counter</div>
          <div class="timeline-title">Let the seller close the gap</div>
          <div class="timeline-body">Do not split the difference on the first counter. Hold position, propose non-price concessions if needed (close date, earnest money).</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Phase 4 · Under Contract</div>
          <div class="timeline-title">Inspection &amp; re-negotiation</div>
          <div class="timeline-body">A 7,098 sq ft home will reveal items. Use them — request credit or price reduction in writing, not verbal commitments.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Phase 5 · Close</div>
          <div class="timeline-title">Final walk-through, title, funding</div>
          <div class="timeline-body">Confirm every negotiated item is in the final settlement statement. Never assume — verify each line.</div>
        </div>
      </div>

      <!-- CHECKLIST -->
      <h2 class="nu-section-title">Pre-Offer <span>Checklist</span></h2>

      <div class="checklist">
        <div class="checklist-item">
          <div class="check-box"></div>
          <div class="check-text"><strong>Walk-away price</strong> — Set the ceiling in writing before any negotiation begins.</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div class="check-text"><strong>Recent comps</strong> — Pull 3–5 comparable estate sales within 12 months and within 5 miles.</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div class="check-text"><strong>Days on market</strong> — Know how long 4505 Buttewoods has been listed. Longer = more leverage.</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div class="check-text"><strong>Seller motivation</strong> — Identify why they are selling. Relocation, estate settlement, divorce, and timeline pressure all drive negotiation room.</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div class="check-text"><strong>Financing letter</strong> — Pre-approval or proof-of-funds dated within 30 days.</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div class="check-text"><strong>Title search pre-run</strong> — Flag easements, liens, or boundary issues before offer.</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div class="check-text"><strong>Inspector lined up</strong> — Book a qualified estate-size inspector now, not after the offer is accepted.</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div class="check-text"><strong>Attorney review</strong> — All contract terms reviewed by real estate counsel before signature.</div>
        </div>
      </div>

      <!-- RISK FLAGS -->
      <h2 class="nu-section-title">Risk <span>Flags</span></h2>

      <ul class="risk-list">
        <li><strong>Hidden maintenance backlog.</strong> A 7,098 sq ft home carries exponentially more mechanical, roofing, and structural risk than a standard residence. Budget inspection time accordingly.</li>
        <li><strong>Appraisal gap.</strong> Estate-class homes are harder to appraise — the lender's number may come in below the contract price. Plan the gap coverage in advance.</li>
        <li><strong>Insurance cost.</strong> Get a binding insurance quote before closing. Large estates can carry annual premiums that reshape the total cost of ownership.</li>
        <li><strong>Property tax reassessment.</strong> Confirm the reassessment impact post-sale — taxes can rise materially the year after purchase.</li>
        <li><strong>Water &amp; disclosure history.</strong> Request full seller disclosures in writing. Any omission is a negotiation lever or a reason to walk.</li>
        <li><strong>HOA / deed restrictions.</strong> If applicable, review the full CC&amp;R document, not the summary. Restrictions can affect renovation and resale.</li>
      </ul>

      <!-- CHEVRON BADGES — NEXT ACTIONS -->
      <h2 class="nu-section-title">Immediate <span>Next Actions</span></h2>

      <div class="nu-badge">
        <span class="nu-badge-number">1</span>
        Confirm listing status, days on market, and current asking price
      </div>
      <div class="nu-badge">
        <span class="nu-badge-number">2</span>
        Pull comparable estate sales within 12 months
      </div>
      <div class="nu-badge">
        <span class="nu-badge-number">3</span>
        Secure written financing pre-approval or proof of funds
      </div>
      <div class="nu-badge">
        <span class="nu-badge-number">4</span>
        Engage real estate attorney for contract review
      </div>
      <div class="nu-badge">
        <span class="nu-badge-number">5</span>
        Book estate-qualified home inspector
      </div>
      <div class="nu-badge">
        <span class="nu-badge-number">6</span>
        Draft walk-away price and silent-anchor opening offer
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
  </footer>

</body>
</html>