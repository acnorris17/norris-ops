<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Review — 7,098 Sq Ft on 2.11 Acres — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-success: #16a34a;
      --nu-warn: #d97706;
      --nu-danger: #dc2626;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
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
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-eyebrow {
      display: inline-block;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      padding: 6px 18px;
      border-radius: 999px;
      margin-bottom: 18px;
      backdrop-filter: blur(8px);
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-title {
      margin-top: 28px;
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT WRAPPER */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 40px 80px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-shell {
      max-width: 1180px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 36px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      letter-spacing: 0.02em;
      margin-bottom: 6px;
      color: var(--nu-dark-text);
    }
    .nu-section-title .lead {
      color: #0033cc;
    }
    .nu-section-sub {
      font-size: 0.95rem;
      color: #555;
      margin-bottom: 18px;
    }

    /* SUMMARY STRIP */
    .summary-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 14px;
      margin-bottom: 36px;
    }
    .strip-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .strip-label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #666;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .strip-value {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .strip-value.blue { color: #0033cc; }
    .strip-value.cyan { color: #0099cc; }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 24px;
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: #0033cc;
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .nu-card p { margin-bottom: 12px; color: var(--nu-body-text); }
    .nu-card ul { margin: 0 0 4px 18px; }
    .nu-card li { margin-bottom: 8px; }

    /* TWO-COLUMN GRID */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 820px) { .grid-2 { grid-template-columns: 1fr; } }

    /* BADGE / CHEVRON LABEL */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 16px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .nu-badge .dot {
      width: 8px; height: 8px; background: var(--nu-cyan);
      border-radius: 50%; box-shadow: 0 0 8px var(--nu-cyan);
    }

    /* PROPERTY TABLE */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
    }
    .data-table th, .data-table td {
      padding: 12px 14px;
      text-align: left;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .data-table th {
      background: #f0f0fa;
      color: var(--nu-dark-text);
      font-weight: 700;
      letter-spacing: 0.04em;
      font-size: 0.78rem;
      text-transform: uppercase;
    }
    .data-table tr:last-child td { border-bottom: none; }
    .data-table td.num {
      font-family: 'Lato', monospace;
      font-weight: 700;
      text-align: right;
      color: var(--nu-dark-text);
    }

    /* STATUS PILLS */
    .pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .pill.todo { background: #fef3c7; color: #92400e; }
    .pill.go { background: #dcfce7; color: #166534; }
    .pill.review { background: #dbeafe; color: #1e40af; }
    .pill.hold { background: #fee2e2; color: #991b1b; }

    /* CHECKLIST */
    .checklist { list-style: none; padding: 0; }
    .checklist li {
      padding: 12px 0 12px 36px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 22px; height: 22px;
      border: 2px solid #0033cc;
      border-radius: 5px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* OFFER LADDER */
    .ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 12px;
    }
    @media (max-width: 720px) { .ladder { grid-template-columns: 1fr; } }
    .rung {
      border: 2px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 18px;
      text-align: center;
      background: var(--nu-white);
      transition: transform .2s, box-shadow .2s;
    }
    .rung.open { border-color: #94a3b8; }
    .rung.target { border-color: #0033cc; box-shadow: 0 6px 18px rgba(0,51,204,0.15); transform: translateY(-3px); }
    .rung.walk { border-color: var(--nu-danger); }
    .rung-label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #666;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .rung-value {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
    }
    .rung.target .rung-value { color: #0033cc; }
    .rung.walk .rung-value { color: var(--nu-danger); }
    .rung-note { font-size: 0.82rem; color: #555; margin-top: 6px; }

    /* CALLOUT */
    .callout {
      border-left: 4px solid #0033cc;
      background: #f4f6ff;
      padding: 16px 20px;
      border-radius: 0 8px 8px 0;
      margin: 16px 0;
    }
    .callout strong { color: #0033cc; }

    .callout.warn {
      border-left-color: var(--nu-warn);
      background: #fff8e6;
    }
    .callout.warn strong { color: #92400e; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
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
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.55);
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 36px 18px 60px; }
      .nu-card { padding: 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; }
      .nu-footer { -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-eyebrow">Internal · Acquisition Review</div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-title">Estate Acquisition Review &amp; Negotiation Brief</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-shell">

      <!-- AT-A-GLANCE STRIP -->
      <div class="summary-strip">
        <div class="strip-cell">
          <div class="strip-label">Living Area</div>
          <div class="strip-value blue">7,098 SF</div>
        </div>
        <div class="strip-cell">
          <div class="strip-label">Lot Size</div>
          <div class="strip-value blue">2.11 AC</div>
        </div>
        <div class="strip-cell">
          <div class="strip-label">$ / SF (Heated)</div>
          <div class="strip-value cyan">TBD on review</div>
        </div>
        <div class="strip-cell">
          <div class="strip-label">Status</div>
          <div class="strip-value"><span class="pill review">Review &amp; Negotiate</span></div>
        </div>
        <div class="strip-cell">
          <div class="strip-label">Owner</div>
          <div class="strip-value">A. Norris</div>
        </div>
      </div>

      <!-- ITEM SOURCE -->
      <div class="nu-card">
        <span class="nu-badge"><span class="dot"></span>reMarkable Action Item</span>
        <h3>Origin &amp; Charter</h3>
        <p>This brief operationalizes the reMarkable note: <em>“Review and negotiate purchase of 7,098 sq ft estate on 2.11 [acres].”</em> It is a personal acquisition by Aaron C. Norris and is being managed alongside Norris Utilities® operations using the same disciplined process applied to commercial deals.</p>
        <p>Goal: arrive at a defensible target price and a clean walk-away number, validate the property’s condition and title, and execute on terms that protect cash and preserve operating runway for Norris Utilities®.</p>
      </div>

      <!-- SECTION 1 — PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Property</span> Snapshot</h2>
        <p class="nu-section-sub">Confirm every line below against the listing sheet and the appraiser’s file before the first offer is sent.</p>

        <div class="nu-card">
          <table class="data-table">
            <thead>
              <tr><th>Attribute</th><th>Captured</th><th>Source / Verify By</th></tr>
            </thead>
            <tbody>
              <tr><td>Heated living area</td><td class="num">7,098 sq ft</td><td>Listing sheet — confirm against appraisal &amp; tax card</td></tr>
              <tr><td>Lot size</td><td class="num">2.11 acres</td><td>Plat / survey — order if not on file</td></tr>
              <tr><td>Property address</td><td>Confirm with seller agent</td><td>Listing + tax parcel ID</td></tr>
              <tr><td>Tax parcel ID / APN</td><td>Confirm with seller agent</td><td>County tax assessor</td></tr>
              <tr><td>Year built / last major renovation</td><td>Confirm</td><td>Tax card + permits pulled from county</td></tr>
              <tr><td>Bed / bath count</td><td>Confirm</td><td>Listing &amp; in-person walk-through</td></tr>
              <tr><td>Roof age</td><td>Confirm</td><td>Inspection report; prior receipts</td></tr>
              <tr><td>HVAC count &amp; age</td><td>Confirm</td><td>Inspection; service records</td></tr>
              <tr><td>Septic vs. sewer</td><td>Confirm</td><td>Service records; county records</td></tr>
              <tr><td>Water (well vs. municipal)</td><td>Confirm</td><td>Service records; county records</td></tr>
              <tr><td>Outbuildings / detached structures</td><td>Confirm</td><td>Walk-through + plat</td></tr>
              <tr><td>Easements / encroachments</td><td>Confirm</td><td>Title commitment + survey</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 2 — VALUATION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Valuation</span> Triangulation</h2>
        <p class="nu-section-sub">Three independent methods. The number we offer is the one the data supports — not the asking price.</p>

        <div class="grid-2">
          <div class="nu-card">
            <h3>1. Comparable Sales (Sales Comp)</h3>
            <ul>
              <li>Pull 5 closed sales within 12 months, similar sq ft (±15%), similar lot.</li>
              <li>Adjust for: pool, finished basement, garage bays, age, condition, school district.</li>
              <li>Calculate adjusted $/sq ft median and apply to 7,098 sq ft.</li>
              <li>Discount for any outlier features the subject lacks.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>2. Income / Replacement Cost</h3>
            <ul>
              <li>Estimate replacement cost new at current build prices ($/sq ft × 7,098) plus land value of 2.11 acres at local raw-acre comp.</li>
              <li>Apply depreciation per effective age of structure.</li>
              <li>Compare to seller’s ask — flag any premium &gt;10%.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>3. Tax-Card &amp; County Appraised Value</h3>
            <ul>
              <li>County appraised value is a floor reference only — usually 70–85% of fair market.</li>
              <li>Pull last 3 years of assessed values to spot trend.</li>
              <li>Flag any pending re-appraisal that could shift property tax basis post-close.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>4. Independent Appraisal</h3>
            <ul>
              <li>Order a full appraisal — not a drive-by — once under contract.</li>
              <li>Use lender’s approved appraiser if financing; otherwise Aaron orders directly.</li>
              <li>Appraisal contingency stays in the contract until appraised value lands at or above target.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 3 — OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Offer</span> Ladder &amp; Walk-Away Discipline</h2>
        <p class="nu-section-sub">Three numbers. Decide them before the first conversation. Do not let the room move them.</p>
        <div class="nu-card">
          <div class="ladder">
            <div class="rung open">
              <div class="rung-label">Opening Offer</div>
              <div class="rung-value">— set after comp pull —</div>
              <div class="rung-note">Anchored ~10–15% below target; structured to leave room without offending.</div>
            </div>
            <div class="rung target">
              <div class="rung-label">Target Price</div>
              <div class="rung-value">— set after comp pull —</div>
              <div class="rung-note">The price the data supports. The number we will close at if we close.</div>
            </div>
            <div class="rung walk">
              <div class="rung-label">Walk-Away</div>
              <div class="rung-value">— set after comp pull —</div>
              <div class="rung-note">Hard ceiling. If terms cross this number, the answer is no — calmly.</div>
            </div>
          </div>
          <div class="callout" style="margin-top:18px;">
            <strong>Rule.</strong> Numbers above are filled in <em>before</em> the offer is written, signed off by Aaron, and not altered without a written reason that ties to new diligence findings — not seller pressure.
          </div>
        </div>
      </section>

      <!-- SECTION 4 — DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Due</span> Diligence Checklist</h2>
        <p class="nu-section-sub">Each item must be either complete or formally waived in writing before close.</p>

        <div class="grid-2">
          <div class="nu-card">
            <h3>Title &amp; Legal</h3>
            <ul class="checklist">
              <li><strong>Title commitment</strong> ordered and reviewed for liens, judgments, easements.</li>
              <li><strong>Owner-paid survey</strong> updated within 12 months of close.</li>
              <li><strong>HOA / restrictive covenants</strong> reviewed if applicable.</li>
              <li><strong>Mineral / timber rights</strong> status confirmed.</li>
              <li><strong>Property tax</strong> status current; no certificates outstanding.</li>
              <li><strong>Disclosure form</strong> signed by seller, reviewed for material defects.</li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Physical Inspection</h3>
            <ul class="checklist">
              <li><strong>General home inspection</strong> by licensed inspector, written report.</li>
              <li><strong>Roof</strong> separately inspected — age, leaks, expected remaining life.</li>
              <li><strong>HVAC</strong> all units serviced &amp; inspected; capacity matches sq ft.</li>
              <li><strong>Foundation / structural</strong> — engineer letter if any cracks noted.</li>
              <li><strong>Septic / sewer</strong> scoped if private septic.</li>
              <li><strong>Well / water</strong> potability test if private well.</li>
              <li><strong>Pest / termite</strong> WDIR letter (Wood Destroying Insect Report).</li>
              <li><strong>Radon</strong> screen if applicable to area.</li>
              <li><strong>Mold</strong> air-quality test if any visible water staining.</li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Land &amp; Environmental</h3>
            <ul class="checklist">
              <li><strong>Flood zone</strong> determination (FEMA map + lender’s).</li>
              <li><strong>Wetlands</strong> screening for the 2.11-acre parcel.</li>
              <li><strong>Drainage / runoff</strong> assessed during a wet-weather walk.</li>
              <li><strong>Tree health</strong> on mature hardwoods near structures.</li>
              <li><strong>Setbacks / building lines</strong> confirmed against any future build plans.</li>
              <li><strong>Zoning</strong> classification + permitted uses.</li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Carrying Cost &amp; Insurance</h3>
            <ul class="checklist">
              <li><strong>Property insurance</strong> bound and pricing locked.</li>
              <li><strong>Flood insurance</strong> quoted if zone X-shaded or higher.</li>
              <li><strong>Property tax estimate</strong> at new appraised value (not seller’s old basis).</li>
              <li><strong>Utilities (12-mo history)</strong> obtained from seller — power, water, gas.</li>
              <li><strong>Lawn / pool / pond service</strong> contracts identified.</li>
              <li><strong>Estimated annual carry</strong> calculated and pressure-tested vs. cash flow.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 5 — NEGOTIATION PLAYBOOK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Negotiation</span> Playbook</h2>
        <p class="nu-section-sub">The same posture used for utility-equipment deals: warm, direct, prepared, never apologetic.</p>

        <div class="nu-card">
          <h3>Posture &amp; Tone</h3>
          <ul>
            <li>Lead with the ask. The opening conversation states price, terms, and timeline in the first three sentences.</li>
            <li>Quiet confidence. Silence is a tool — let the seller fill space after a number is on the table.</li>
            <li>Never pushy. Never apologetic. Every concession comes with a counter-ask.</li>
            <li>Written follow-up after every conversation, same-day, summarizing what was agreed.</li>
          </ul>
        </div>

        <div class="grid-2">
          <div class="nu-card">
            <h3>Levers We Can Pull</h3>
            <ul>
              <li><strong>Price</strong> — the headline number.</li>
              <li><strong>Earnest money</strong> — bigger EM signals seriousness; smaller protects cash.</li>
              <li><strong>Inspection period</strong> — longer = safer for buyer; sellers want shorter.</li>
              <li><strong>Closing date</strong> — flexibility is a gift; use it for a price concession.</li>
              <li><strong>Possession date</strong> — post-close possession can be traded for price.</li>
              <li><strong>Repairs vs. credit</strong> — always prefer credit at close over seller-managed repairs.</li>
              <li><strong>Personal property</strong> — fixtures, equipment, furnishings as separate bill of sale where it helps.</li>
              <li><strong>Financing contingency</strong> — keep it in unless cash; do not waive lightly.</li>
              <li><strong>Appraisal contingency</strong> — keep it in. Period.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Lines We Do Not Cross</h3>
            <ul>
              <li>No verbal-only commitments — every term in writing.</li>
              <li>No waiving inspection on a 7,098 sq ft structure. Ever.</li>
              <li>No skipping survey on 2.11 acres — boundary surprises are expensive.</li>
              <li>No earnest money released to seller before close.</li>
              <li>No closing without a fully cleared title commitment in hand.</li>
              <li>No emotional bidding. The walk-away number is the walk-away number.</li>
            </ul>
          </div>
        </div>

        <div class="callout warn">
          <strong>Reminder.</strong> A great property at a bad price is a bad deal. A good property at a great price is the only thing worth signing.
        </div>
      </section>

      <!-- SECTION 6 — FINANCING -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Financing</span> &amp; Cash Plan</h2>
        <div class="grid-2">
          <div class="nu-card">
            <h3>Decision Path</h3>
            <ul>
              <li>Pre-approval letter in hand <em>before</em> first written offer.</li>
              <li>Renasant Bank — Patrick Lavette is the primary banking relationship; first call.</li>
              <li>Compare a second lender quote — rate, points, lock period, prepay terms.</li>
              <li>Decide cash-down structure that does not impair Norris Utilities® working capital.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Cash &amp; Liquidity Discipline</h3>
            <ul>
              <li>Down payment must not pull from accounts earmarked for inventory deposits or operating runway.</li>
              <li>Reserve at least 6 months of carry (mortgage + tax + insurance + utilities) post-close.</li>
              <li>Hold a clean line of separation between personal real estate cash and Norris Utilities® cash.</li>
              <li>Close-day wire instructions verified by phone with the title company — never trust emailed instructions alone.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 7 — TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Timeline</span> &amp; Milestones</h2>
        <div class="nu-card">
          <table class="data-table">
            <thead>
              <tr><th>Phase</th><th>Action</th><th>Owner</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>Day 0</td><td>Pull listing sheet, tax card, plat; confirm address &amp; APN</td><td>Aaron</td><td><span class="pill todo">To Do</span></td></tr>
              <tr><td>Day 1–2</td><td>Comp pull (5 closed sales, 12-mo window, similar sq ft &amp; lot)</td><td>Aaron / agent</td><td><span class="pill todo">To Do</span></td></tr>
              <tr><td>Day 2</td><td>Set Opening / Target / Walk-Away numbers in writing</td><td>Aaron</td><td><span class="pill todo">To Do</span></td></tr>
              <tr><td>Day 2–3</td><td>Pre-approval letter from Renasant (Patrick Lavette)</td><td>Aaron</td><td><span class="pill todo">To Do</span></td></tr>
              <tr><td>Day 3</td><td>Submit written offer with contingencies intact</td><td>Aaron / agent</td><td><span class="pill todo">To Do</span></td></tr>
              <tr><td>Day 3–10</td><td>Negotiate counter / counter-counter; sign contract</td><td>Aaron</td><td><span class="pill todo">To Do</span></td></tr>
              <tr><td>Day 10–24</td><td>Inspection period — every checklist item above</td><td>Aaron + inspectors</td><td><span class="pill todo">To Do</span></td></tr>
              <tr><td>Day 14–28</td><td>Appraisal ordered &amp; received</td><td>Lender</td><td><span class="pill todo">To Do</span></td></tr>
              <tr><td>Day 18–30</td><td>Title commitment cleared; survey in hand</td><td>Title co.</td><td><span class="pill todo">To Do</span></td></tr>
              <tr><td>Day 30–45</td><td>Final loan approval; close coordinated; insurance bound</td><td>Aaron / lender</td><td><span class="pill todo">To Do</span></td></tr>
              <tr><td>Close</td><td>Wire verified by phone; signing; keys</td><td>Aaron</td><td><span class="pill todo">To Do</span></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 8 — DECISION GATE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Decision</span> Gate — Aaron Sign-Off</h2>
        <div class="nu-card">
          <p>Move forward only if every answer below is honest and clear.</p>
          <ul class="checklist">
            <li><strong>Numbers</strong> — Opening, Target, and Walk-Away are written and the data supports them.</li>
            <li><strong>Diligence</strong> — every checklist item is complete or formally waived.</li>
            <li><strong>Cash</strong> — down payment + 6 months of carry held in reserve, separate from Norris Utilities® operating cash.</li>
            <li><strong>Carry</strong> — annual carrying cost is comfortably absorbed by personal income, not company distributions.</li>
            <li><strong>Exit</strong> — if life or business shifts, the property is liquid enough to sell within 6 months at or above purchase price.</li>
            <li><strong>Why</strong> — the reason for buying is articulated in one sentence and survives re-reading 24 hours later.</li>
          </ul>
          <div class="callout">
            If any answer is shaky, the right next step is more diligence — not a higher offer.
          </div>
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
    <div class="nu-footer-meta">Internal Acquisition Brief · Confidential</div>
  </footer>

</body>
</html>