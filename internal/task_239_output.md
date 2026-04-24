<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066EE 55%, #00AAFF 80%, var(--nu-cyan) 100%);
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ══ CHEVRON ══ */
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
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
      pointer-events: none;
    }
    .nu-wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* ══ DOCUMENT TITLE BLOCK ══ */
    .doc-meta {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 20px;
      border-bottom: 3px solid var(--nu-blue);
      padding-bottom: 20px;
      margin-bottom: 40px;
    }
    .doc-title-group h1 {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 6px;
    }
    .doc-title-group h1 .accent { color: var(--nu-blue); }
    .doc-subtitle {
      font-weight: 400;
      font-size: 1rem;
      color: #555;
      letter-spacing: 0.02em;
    }
    .doc-stamp {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 20px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .doc-stamp::before {
      content: '';
      width: 10px; height: 10px;
      background: var(--nu-cyan);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--nu-cyan);
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 48px 0 18px;
      line-height: 1.2;
    }
    .nu-section-title .lead { color: var(--nu-blue); }
    .nu-section-title .tail { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-title:first-of-type { margin-top: 0; }

    p { margin-bottom: 14px; }

    /* ══ SUMMARY CARD ══ */
    .summary-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
      border-left: 6px solid var(--nu-blue);
      padding: 28px 32px;
      border-radius: 0 8px 8px 0;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 30px;
    }
    .summary-card p {
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin: 0;
    }

    /* ══ PROPERTY FACT GRID ══ */
    .fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin: 24px 0 10px;
    }
    .fact {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 22px;
      position: relative;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .fact:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .fact::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 4px; height: 100%;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: #777;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .fact-value.small { font-size: 1.05rem; font-weight: 700; }

    /* ══ BADGE CHEVRONS ══ */
    .badge-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 20px 0 10px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 20px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .num {
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

    /* ══ TWO-COL TABLE ══ */
    .kv-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0 10px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
    }
    .kv-table tr + tr td { border-top: 1px solid var(--nu-medium-gray); }
    .kv-table td {
      padding: 14px 20px;
      vertical-align: top;
      font-size: 0.95rem;
    }
    .kv-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 38%;
      background: var(--nu-light-gray);
    }

    /* ══ STRATEGY GRID ══ */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin: 20px 0;
    }
    .strategy-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .strategy-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .strategy-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .strategy-card p {
      font-size: 0.92rem;
      color: #444;
      margin: 0;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      margin: 10px 0;
    }
    .checklist li {
      padding: 10px 0 10px 36px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .checklist li:last-child { border-bottom: 0; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 6px; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li::after {
      content: '';
      position: absolute;
      left: 11px; top: 16px;
      width: 8px; height: 12px;
      border-right: 3px solid var(--nu-cyan);
      border-bottom: 3px solid var(--nu-cyan);
      transform: rotate(45deg);
      opacity: 0;
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* ══ OFFER LADDER ══ */
    .ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin: 20px 0;
    }
    .ladder-step {
      background: var(--nu-white);
      padding: 22px 20px;
      text-align: center;
      position: relative;
    }
    .ladder-step .tier {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 8px;
    }
    .ladder-step .price {
      font-size: 1.55rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .ladder-step.opening { background: linear-gradient(135deg, #e8f4ff 0%, #ffffff 100%); }
    .ladder-step.walkaway { background: linear-gradient(135deg, #fff5e6 0%, #ffffff 100%); }
    .ladder-step .note {
      font-size: 0.82rem;
      color: #666;
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin: 30px 0;
      position: relative;
      overflow: hidden;
    }
    .callout::before {
      content: '';
      position: absolute;
      top: -60%; right: -10%;
      width: 60%; height: 220%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
    }
    .callout * { position: relative; z-index: 1; }
    .callout h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .callout p {
      color: rgba(255,255,255,0.92);
      font-size: 0.98rem;
      margin: 0;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin: 20px 0;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 9px; top: 4px; bottom: 4px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .timeline-item {
      position: relative;
      padding: 8px 0 22px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -28px; top: 14px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-item h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .timeline-item p {
      font-size: 0.94rem;
      color: #444;
      margin: 0;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
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
      line-height: 1.8;
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
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 40px 20px; }
      .doc-title-group h1 { font-size: 1.6rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .kv-table td:first-child { width: 44%; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .strategy-card, .fact { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer, .callout { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">U T I L I T I E S</div>
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
    <div class="nu-wrap">

      <!-- DOC META -->
      <div class="doc-meta">
        <div class="doc-title-group">
          <h1><span class="accent">Estate Acquisition</span> — 4505 Buttewoods</h1>
          <div class="doc-subtitle">Negotiation Brief &amp; Strategy Plan · 7,098 sq ft residence</div>
        </div>
        <div class="doc-stamp">Action Item · Active</div>
      </div>

      <!-- SUMMARY -->
      <div class="summary-card">
        <p><strong>Objective:</strong> Open and conduct negotiations to purchase the 7,098 sq ft estate located at 4505 Buttewoods. This brief sets the target price range, diligence checklist, offer ladder, and the sequence of moves from introduction through closing — so the negotiation runs with the same discipline Norris Utilities® brings to every deal.</p>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <h2 class="nu-section-title"><span class="lead">Property</span> <span class="tail">Snapshot</span></h2>
      <div class="fact-grid">
        <div class="fact">
          <div class="fact-label">Address</div>
          <div class="fact-value small">4505 Buttewoods</div>
        </div>
        <div class="fact">
          <div class="fact-label">Interior</div>
          <div class="fact-value">7,098 sq ft</div>
        </div>
        <div class="fact">
          <div class="fact-label">Asset Class</div>
          <div class="fact-value small">Estate Residence</div>
        </div>
        <div class="fact">
          <div class="fact-label">Status</div>
          <div class="fact-value small">Negotiation Stage</div>
        </div>
      </div>

      <p style="margin-top: 18px;">A 7,098 sq ft estate home is a large-format residence — well above the local median. Pricing, financing, and diligence must be treated with the rigor of a commercial transaction, not a routine residential purchase. The brief below is framed accordingly.</p>

      <!-- NEGOTIATION PLAYBOOK -->
      <h2 class="nu-section-title"><span class="lead">Negotiation</span> <span class="tail">Playbook</span></h2>

      <div class="badge-row">
        <div class="nu-badge"><span class="num">1</span>Open with a warm, informed introduction — signal capability, not urgency</div>
        <div class="nu-badge"><span class="num">2</span>Establish seller motivation before naming a number</div>
        <div class="nu-badge"><span class="num">3</span>Anchor with data-backed offer; leave room for two counters</div>
        <div class="nu-badge"><span class="num">4</span>Negotiate terms (close date, contingencies) as aggressively as price</div>
        <div class="nu-badge"><span class="num">5</span>Confirm walk-away line before the first call — do not move it mid-negotiation</div>
      </div>

      <div class="strategy-grid">
        <div class="strategy-card">
          <h3>Discover Motivation</h3>
          <p>Why is the seller selling — relocation, estate settlement, downsizing, change in circumstances? Motivation drives flexibility far more than list price does.</p>
        </div>
        <div class="strategy-card">
          <h3>Comp the Market</h3>
          <p>Pull three to five comparable sales of 6,000–8,000 sq ft estates within the same submarket over the last 12–18 months. Adjust for lot size, finishes, and condition.</p>
        </div>
        <div class="strategy-card">
          <h3>Price the Defects</h3>
          <p>Every deferred-maintenance item, every dated system (HVAC, roof, pool) becomes a negotiating lever. Inspection findings belong in the final offer.</p>
        </div>
        <div class="strategy-card">
          <h3>Lead with Terms</h3>
          <p>Cash, shorter close, fewer contingencies, or a rent-back can often buy 3–7% off the price. Sellers remember certainty as much as dollars.</p>
        </div>
        <div class="strategy-card">
          <h3>Control the Pace</h3>
          <p>Respond to counters within 24–48 hours — never faster, never slower. Fast replies signal desperation; slow replies lose momentum.</p>
        </div>
        <div class="strategy-card">
          <h3>Silence Is a Tool</h3>
          <p>After naming a number, stop talking. Let the seller fill the space. The first side to explain the number is usually the side that moves.</p>
        </div>
      </div>

      <!-- DUE DILIGENCE -->
      <h2 class="nu-section-title"><span class="lead">Due Diligence</span> <span class="tail">Checklist</span></h2>
      <p>Close no offer before these items are in hand. For a 7,098 sq ft home, each line item can swing the final price by tens of thousands.</p>

      <ul class="checklist">
        <li><strong>Title &amp; deed history</strong> — clean chain, no liens, no easement surprises, verified through a local title company.</li>
        <li><strong>Tax history</strong> — last 5 years of property tax, including millage shifts and any homestead reclassification risk.</li>
        <li><strong>Recent comparable sales</strong> — minimum 3 comparable estates, adjusted for square footage, lot, and finish level.</li>
        <li><strong>Full structural inspection</strong> — foundation, roof, envelope, moisture intrusion; retain a licensed structural engineer, not just a general inspector.</li>
        <li><strong>Mechanical systems audit</strong> — age and condition of HVAC zones (a 7,098 sq ft home will have several), water heaters, electrical panel capacity.</li>
        <li><strong>Septic / well or utility connection</strong> — capacity, permit status, recent service records.</li>
        <li><strong>Survey</strong> — current, not older than 10 years; confirm boundaries, encroachments, setbacks.</li>
        <li><strong>HOA / deed restrictions</strong> — read every page; verify dues, reserves, and any pending special assessments.</li>
        <li><strong>Insurance quotes</strong> — obtain preliminary quotes before offer expiration. Older estates can insure painfully.</li>
        <li><strong>Disclosure review</strong> — cross-check seller disclosures against inspection findings for material inconsistencies.</li>
      </ul>

      <!-- OFFER LADDER -->
      <h2 class="nu-section-title"><span class="lead">Offer</span> <span class="tail">Ladder</span></h2>
      <p>The ladder is a discipline, not a suggestion. Once the ceiling is set, it does not move. Every step is anchored to comps and inspection findings.</p>

      <div class="ladder">
        <div class="ladder-step opening">
          <div class="tier">Step 1 — Opening</div>
          <div class="price">Comp-Adjusted Anchor</div>
          <div class="note">Price derived from low end of comparable sales, minus deferred-maintenance estimate.</div>
        </div>
        <div class="ladder-step">
          <div class="tier">Step 2 — First Counter</div>
          <div class="price">Mid-Comp + Terms</div>
          <div class="note">Small price move paired with meaningful term concessions (close date, contingencies).</div>
        </div>
        <div class="ladder-step">
          <div class="tier">Step 3 — Best &amp; Final</div>
          <div class="price">Ceiling Price</div>
          <div class="note">Maximum supportable number. Delivered with explicit expiration.</div>
        </div>
        <div class="ladder-step walkaway">
          <div class="tier">Step 4 — Walk-Away</div>
          <div class="price">Defined in Advance</div>
          <div class="note">The number above which the deal no longer makes sense. Written down before Step 1.</div>
        </div>
      </div>

      <!-- KEY TERMS -->
      <h2 class="nu-section-title"><span class="lead">Key Terms</span> <span class="tail">to Negotiate</span></h2>
      <table class="kv-table">
        <tr>
          <td>Earnest Money</td>
          <td>1–2% of purchase price held in escrow. Refundable against stated contingencies.</td>
        </tr>
        <tr>
          <td>Inspection Period</td>
          <td>10–14 calendar days. Right to terminate or renegotiate based on material findings.</td>
        </tr>
        <tr>
          <td>Financing Contingency</td>
          <td>Either waive (for leverage) or retain with a firm loan-commitment deadline. Do not leave open-ended.</td>
        </tr>
        <tr>
          <td>Appraisal Contingency</td>
          <td>Retain if financing; negotiate a gap strategy if the appraisal comes in low on an estate-sized property.</td>
        </tr>
        <tr>
          <td>Closing Date</td>
          <td>Flexibility on this line item is often worth more to the seller than price. Use it.</td>
        </tr>
        <tr>
          <td>Possession</td>
          <td>At closing, or a short post-close occupancy. Define per-day cost if the seller stays past close.</td>
        </tr>
        <tr>
          <td>Included Fixtures</td>
          <td>List every conveyed item — appliances, chandeliers, wall-mounted televisions, outdoor equipment. If it is not listed, it can walk.</td>
        </tr>
      </table>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="lead">Negotiation</span> <span class="tail">Timeline</span></h2>
      <div class="timeline">
        <div class="timeline-item">
          <h4>Week 1 — Preparation</h4>
          <p>Pull comps, set ceiling and walk-away, line up financing pre-approval or proof of funds, confirm counsel and title contacts.</p>
        </div>
        <div class="timeline-item">
          <h4>Week 1–2 — Introduction</h4>
          <p>Schedule a showing. Meet the seller or listing agent in person if possible. Ask more than you tell. Take notes.</p>
        </div>
        <div class="timeline-item">
          <h4>Week 2 — Initial Offer</h4>
          <p>Deliver written offer with a firm expiration (typically 72 hours). Include pre-approval letter or proof of funds for credibility.</p>
        </div>
        <div class="timeline-item">
          <h4>Week 2–3 — Counters</h4>
          <p>Two counter-cycles maximum. Each counter pairs a price move with a term adjustment. Silence between rounds is normal and useful.</p>
        </div>
        <div class="timeline-item">
          <h4>Week 3 — Contract</h4>
          <p>Execute purchase agreement. Deposit earnest money. Inspection period begins.</p>
        </div>
        <div class="timeline-item">
          <h4>Week 3–5 — Inspection &amp; Re-Trade</h4>
          <p>Complete all diligence. If material defects surface, re-open price on findings only — with written estimates, not opinions.</p>
        </div>
        <div class="timeline-item">
          <h4>Week 5–8 — Close</h4>
          <p>Final walk-through 24 hours pre-close. Confirm title, funding, and utility transfers. Close. Take possession.</p>
        </div>
      </div>

      <!-- CALLOUT -->
      <div class="callout">
        <h3>The Norris Rule</h3>
        <p>Set the ceiling before the first conversation. Every number above it is someone else's deal. Discipline on a large purchase is not about being cheap — it is about being unshakeable.</p>
      </div>

      <!-- NEXT ACTIONS -->
      <h2 class="nu-section-title"><span class="lead">Next</span> <span class="tail">Actions</span></h2>
      <ul class="checklist">
        <li><strong>Confirm ceiling and walk-away</strong> — put both numbers in writing before any outreach.</li>
        <li><strong>Pull comps</strong> — minimum three sold 6,000–8,000 sq ft estates in the submarket, last 18 months.</li>
        <li><strong>Line up financing or proof of funds</strong> — pre-approval letter ready to attach to the opening offer.</li>
        <li><strong>Engage counsel</strong> — local real-estate attorney on standby for contract review.</li>
        <li><strong>Schedule the showing</strong> — request seller or listing agent attend; read the room.</li>
        <li><strong>Draft the opening offer</strong> — price, terms, contingencies, expiration.</li>
        <li><strong>Set a 48-hour response cadence</strong> — not faster, not slower, through every round.</li>
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