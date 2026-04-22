<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Southern Company Standards Update — Action Item — Norris Utilities®</title>
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
    --nu-alert-red: #C0392B;
    --nu-success-green: #1E8449;
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

  /* ══ HEADER ══ */
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
    background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
    z-index: 1;
  }
  .nu-header * { position: relative; z-index: 2; }

  .nu-phoenix-icon {
    width: 72px;
    height: 72px;
    margin: 0 auto 14px;
    filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
  }
  .nu-logo-text {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: 3rem;
    color: var(--nu-white);
    letter-spacing: 0.32em;
    text-transform: uppercase;
    margin-bottom: 4px;
    text-shadow: 0 2px 20px rgba(0,0,0,0.3);
  }
  .nu-logo-subtitle {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: 1.25rem;
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
    font-size: 1.25rem;
    color: rgba(255,255,255,0.95);
    letter-spacing: 0.04em;
  }

  /* ══ CHEVRON TRANSITION ══ */
  .nu-chevron {
    position: relative;
    height: 50px;
    margin-top: -50px;
    z-index: 10;
    line-height: 0;
  }
  .nu-chevron svg {
    width: 100%;
    height: 50px;
    display: block;
  }

  /* ══ ACTION BAR ══ */
  .action-bar {
    background: var(--nu-navy);
    color: var(--nu-white);
    padding: 20px 40px;
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.9rem;
  }
  .action-bar .pill {
    display: inline-block;
    background: var(--nu-cyan);
    color: var(--nu-navy);
    padding: 4px 14px;
    border-radius: 20px;
    margin-right: 12px;
    font-weight: 900;
  }

  /* ══ CONTENT ══ */
  .nu-content-area {
    position: relative;
    background: var(--nu-white);
    padding: 0 0 60px;
  }
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 40px;
  }

  /* ══ HERO ══ */
  .hero-block {
    background: linear-gradient(135deg, #f8f9fc 0%, #eef2fa 100%);
    border-left: 6px solid var(--nu-blue);
    padding: 32px 36px;
    margin-bottom: 48px;
    border-radius: 4px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  }
  .hero-eyebrow {
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--nu-blue);
    margin-bottom: 10px;
  }
  .hero-title {
    font-size: 2.2rem;
    font-weight: 900;
    color: var(--nu-dark-text);
    line-height: 1.15;
    margin-bottom: 14px;
  }
  .hero-title span { color: var(--nu-blue); }
  .hero-subtitle {
    font-size: 1.05rem;
    color: var(--nu-body-text);
    max-width: 720px;
  }

  /* ══ SECTION ══ */
  section { margin-bottom: 48px; }
  .section-title {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: 1.6rem;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--nu-medium-gray);
  }
  .section-title span.lead {
    color: var(--nu-blue);
  }
  .section-title span.trail {
    color: var(--nu-dark-text);
    font-weight: 700;
  }

  /* ══ GRID — WHY ══ */
  .why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 18px;
  }
  .why-card {
    background: var(--nu-white);
    border: 1px solid var(--nu-medium-gray);
    border-top: 4px solid var(--nu-cyan);
    padding: 22px;
    border-radius: 6px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .why-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(0,0,0,0.08);
  }
  .why-card h3 {
    font-size: 1rem;
    font-weight: 900;
    color: var(--nu-blue);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 10px;
  }
  .why-card p {
    font-size: 0.95rem;
    color: var(--nu-body-text);
  }

  /* ══ CONTACTS ══ */
  .contacts-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--nu-white);
    border: 1px solid var(--nu-medium-gray);
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  }
  .contacts-table th {
    background: var(--nu-navy);
    color: var(--nu-white);
    text-align: left;
    padding: 14px 18px;
    font-size: 0.82rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .contacts-table td {
    padding: 14px 18px;
    border-top: 1px solid var(--nu-medium-gray);
    font-size: 0.95rem;
    vertical-align: top;
  }
  .contacts-table tr:nth-child(even) td {
    background: #fafbfd;
  }
  .contacts-table .op-co {
    font-weight: 700;
    color: var(--nu-blue);
  }
  .contacts-table .note {
    color: #6a6a7a;
    font-size: 0.88rem;
    font-style: italic;
  }

  /* ══ TIMELINE ══ */
  .timeline {
    position: relative;
    padding-left: 28px;
  }
  .timeline::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 6px;
    bottom: 6px;
    width: 3px;
    background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    border-radius: 2px;
  }
  .tl-step {
    position: relative;
    padding-bottom: 22px;
  }
  .tl-step::before {
    content: '';
    position: absolute;
    left: -27px;
    top: 4px;
    width: 16px;
    height: 16px;
    background: var(--nu-white);
    border: 3px solid var(--nu-blue);
    border-radius: 50%;
  }
  .tl-step h4 {
    font-size: 1rem;
    font-weight: 900;
    color: var(--nu-dark-text);
    margin-bottom: 4px;
  }
  .tl-step .when {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--nu-blue);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 4px;
  }
  .tl-step p {
    font-size: 0.95rem;
    color: var(--nu-body-text);
  }

  /* ══ QUESTIONS ══ */
  .questions-list {
    list-style: none;
    counter-reset: q;
  }
  .questions-list li {
    counter-increment: q;
    position: relative;
    padding: 16px 18px 16px 60px;
    background: var(--nu-white);
    border: 1px solid var(--nu-medium-gray);
    border-radius: 6px;
    margin-bottom: 10px;
    font-size: 0.98rem;
    color: var(--nu-dark-text);
    box-shadow: 0 1px 6px rgba(0,0,0,0.03);
  }
  .questions-list li::before {
    content: counter(q);
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    background: var(--nu-blue);
    color: var(--nu-white);
    border-radius: 50%;
    font-weight: 900;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ══ PRODUCT ALIGNMENT ══ */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
  }
  .product-card {
    background: linear-gradient(135deg, #ffffff 0%, #f7f9fd 100%);
    border: 1px solid var(--nu-medium-gray);
    padding: 22px;
    border-radius: 6px;
  }
  .product-card .sku {
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--nu-cyan);
    background: var(--nu-navy);
    padding: 4px 10px;
    border-radius: 3px;
    display: inline-block;
    margin-bottom: 10px;
  }
  .product-card h4 {
    font-size: 1.05rem;
    font-weight: 900;
    color: var(--nu-dark-text);
    margin-bottom: 8px;
  }
  .product-card p {
    font-size: 0.92rem;
    color: var(--nu-body-text);
  }

  /* ══ CALLOUT ══ */
  .callout {
    background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
    color: var(--nu-white);
    padding: 32px 36px;
    border-radius: 6px;
    margin-top: 30px;
  }
  .callout h3 {
    color: var(--nu-cyan);
    font-size: 0.82rem;
    font-weight: 900;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .callout p {
    font-size: 1rem;
    line-height: 1.7;
  }
  .callout strong { color: var(--nu-cyan); }

  /* ══ META CARD ══ */
  .meta-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0;
    background: var(--nu-white);
    border: 1px solid var(--nu-medium-gray);
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 40px;
  }
  .meta-item {
    padding: 18px 22px;
    border-right: 1px solid var(--nu-medium-gray);
  }
  .meta-item:last-child { border-right: none; }
  .meta-item .label {
    font-size: 0.72rem;
    font-weight: 900;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--nu-blue);
    margin-bottom: 6px;
  }
  .meta-item .value {
    font-size: 0.98rem;
    font-weight: 700;
    color: var(--nu-dark-text);
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
    font-size: 1.2rem;
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
    .nu-header { padding: 44px 20px 64px; min-height: 220px; }
    .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
    .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
    .hero-title { font-size: 1.55rem; }
    .container { padding: 40px 22px; }
    .meta-item { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
    .meta-item:last-child { border-bottom: none; }
    .contacts-table th, .contacts-table td { padding: 10px 12px; font-size: 0.88rem; }
    .action-bar { padding: 16px 20px; font-size: 0.78rem; }
  }

  @media print {
    body { background: var(--nu-white); }
    .nu-header, .nu-footer, .callout, .action-bar {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
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
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- ACTION BAR -->
  <div class="action-bar">
    <span class="pill">Action Item</span>
    reMarkable Task — Southern Company Standards Update
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- META -->
      <div class="meta-card">
        <div class="meta-item">
          <div class="label">Item Type</div>
          <div class="value">reMarkable Action</div>
        </div>
        <div class="meta-item">
          <div class="label">Logged</div>
          <div class="value">2026-04-22</div>
        </div>
        <div class="meta-item">
          <div class="label">Owner</div>
          <div class="value">Aaron C. Norris</div>
        </div>
        <div class="meta-item">
          <div class="label">Priority</div>
          <div class="value">Standard</div>
        </div>
        <div class="meta-item">
          <div class="label">Status</div>
          <div class="value">Open</div>
        </div>
      </div>

      <!-- HERO -->
      <div class="hero-block">
        <div class="hero-eyebrow">Action Item</div>
        <h1 class="hero-title">Get <span>Southern Company</span> Standards Update</h1>
        <p class="hero-subtitle">
          Confirm the current revision of the Southern Company construction and materials standards that govern FlexPro Armor bucket covers, Skylift bucket trucks, Samson Rope, and Bay Shore Systems drill rigs across Alabama Power, Georgia Power, Mississippi Power, and Southern Company Services. Lock in the revision date, the document numbers, and any changes that affect product specifications Norris Utilities® quotes into the territory.
        </p>
      </div>

      <!-- WHY -->
      <section>
        <h2 class="section-title"><span class="lead">Why</span> <span class="trail">This Matters</span></h2>
        <div class="why-grid">
          <div class="why-card">
            <h3>Territory Scale</h3>
            <p>Southern Company operating companies touch four of the twenty states Norris Utilities serves. A specification change ripples across dozens of active and pending quotes.</p>
          </div>
          <div class="why-card">
            <h3>Spec-Driven Quoting</h3>
            <p>Bucket truck, rope, and drill rig quotes must match the approved materials list. An outdated revision on file creates billing disputes and delayed POs.</p>
          </div>
          <div class="why-card">
            <h3>FlexPro Armor Approval</h3>
            <p>FlexPro Armor bucket covers are quoted against Southern Company line-truck equipment lists. Current revision confirms whether NU-BC-2851 and NU-BC-2834 remain accepted.</p>
          </div>
          <div class="why-card">
            <h3>Competitive Window</h3>
            <p>Being first to quote on the updated standard gives Norris Utilities a clean advantage before competitors reformat their line cards.</p>
          </div>
        </div>
      </section>

      <!-- CONTACTS -->
      <section>
        <h2 class="section-title"><span class="lead">Who</span> <span class="trail">to Contact</span></h2>
        <table class="contacts-table">
          <thead>
            <tr>
              <th>Operating Company</th>
              <th>Owner of Standards</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="op-co">Alabama Power</td>
              <td>Standards &amp; Materials — Distribution Engineering</td>
              <td class="note">Primary target. Birmingham-based. Leverage local presence.</td>
            </tr>
            <tr>
              <td class="op-co">Georgia Power</td>
              <td>Transmission &amp; Distribution Standards</td>
              <td class="note">Coordinate through Atlanta procurement contacts.</td>
            </tr>
            <tr>
              <td class="op-co">Mississippi Power</td>
              <td>Line Construction Standards</td>
              <td class="note">Smaller footprint — usually mirrors Alabama Power revisions.</td>
            </tr>
            <tr>
              <td class="op-co">Southern Company Services</td>
              <td>Corporate Supply Chain &amp; Standards</td>
              <td class="note">Umbrella standards that flow down to all operating companies.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- QUESTIONS -->
      <section>
        <h2 class="section-title"><span class="lead">Questions</span> <span class="trail">to Ask</span></h2>
        <ol class="questions-list">
          <li>What is the current revision number and effective date of the distribution construction standards?</li>
          <li>Have any changes been made to bucket cover acceptance criteria, including dimensions and rating language?</li>
          <li>Are the NU-BC-2851 (2-Man, 28"×51") and NU-BC-2834 (1.5-Man, 28"×34") specifications still on the approved list?</li>
          <li>Do the updated standards reference Samson Rope for hoist, winch line, or rigging applications?</li>
          <li>Are there new Skylift bucket truck model requirements — specifically SBA40i-LW and SBA47i-MH?</li>
          <li>Have auger and drill rig specifications changed in a way that affects Bay Shore Systems positioning in the Southeast?</li>
          <li>What is the approved-vendor submission window for the next revision cycle?</li>
          <li>Who signs off on deviations and substitutions when a spec change puts existing inventory at risk?</li>
        </ol>
      </section>

      <!-- TIMELINE -->
      <section>
        <h2 class="section-title"><span class="lead">How</span> <span class="trail">Norris Will Execute</span></h2>
        <div class="timeline">
          <div class="tl-step">
            <div class="when">Step 1 — This Week</div>
            <h4>Outreach Emails</h4>
            <p>Aaron sends one email per operating company to standards &amp; materials owners requesting the current revision and any change notices from the last twelve months.</p>
          </div>
          <div class="tl-step">
            <div class="when">Step 2 — Within 5 Business Days</div>
            <h4>Document Collection</h4>
            <p>Caroline Butler files every revision received into the Norris Utilities standards library under ~/norris-ops/internal/standards/southern-company/. Each file named by operating company and revision date.</p>
          </div>
          <div class="tl-step">
            <div class="when">Step 3 — Within 10 Business Days</div>
            <h4>Delta Review</h4>
            <p>Aaron reads every revision side-by-side with the prior version on file. Any change affecting FlexPro Armor, Samson Rope, Skylift, or Bay Shore Systems is flagged for immediate quote review.</p>
          </div>
          <div class="tl-step">
            <div class="when">Step 4 — Within 15 Business Days</div>
            <h4>Quote Audit</h4>
            <p>Every open quote and pending PO in Southern Company territory is audited against the new standard. Any mismatch triggers a customer conversation before the quote expires.</p>
          </div>
          <div class="tl-step">
            <div class="when">Step 5 — Ongoing</div>
            <h4>Standards Watch</h4>
            <p>Quarterly check-in added to the Norris Utilities master tracker. Southern Company standards revision status is reviewed on the first Monday of each quarter.</p>
          </div>
        </div>
      </section>

      <!-- PRODUCT ALIGNMENT -->
      <section>
        <h2 class="section-title"><span class="lead">Products</span> <span class="trail">Affected</span></h2>
        <div class="product-grid">
          <div class="product-card">
            <div class="sku">NU-BC-2851</div>
            <h4>FlexPro Armor — 2-Man Cover</h4>
            <p>28"×51" handmade USA bucket cover. Verify acceptance on Southern Company line trucks.</p>
          </div>
          <div class="product-card">
            <div class="sku">NU-BC-2834</div>
            <h4>FlexPro Armor — 1.5-Man Cover</h4>
            <p>28"×34" handmade USA bucket cover. Confirm dimensional spec still matches the approved list.</p>
          </div>
          <div class="product-card">
            <div class="sku">NU-BC-2851-C</div>
            <h4>FlexPro Armor — 2-Man Combo</h4>
            <p>Combo kit for 2-Man bucket. Check if combo configurations carry the same approval path.</p>
          </div>
          <div class="product-card">
            <div class="sku">SKYLIFT</div>
            <h4>Skylift Bucket Trucks</h4>
            <p>SBA40i-LW and SBA47i-MH units referenced in the open Skylift PO. Confirm spec language still matches.</p>
          </div>
          <div class="product-card">
            <div class="sku">SAMSON</div>
            <h4>Samson Rope</h4>
            <p>Authorized distributor lines used in line construction. Verify rope type and diameter requirements.</p>
          </div>
          <div class="product-card">
            <div class="sku">BSS</div>
            <h4>Bay Shore Systems Drill Rigs</h4>
            <p>Southeast territory rep. Standards language around auger and drill rigs drives quoting confidence.</p>
          </div>
        </div>
      </section>

      <!-- CALLOUT -->
      <div class="callout">
        <h3>Bottom Line for Aaron</h3>
        <p>
          Confirming the current <strong>Southern Company</strong> standards revision protects every open and future quote in <strong>Alabama Power, Georgia Power, Mississippi Power, and Southern Company Services</strong> territory. Once the revision is in hand, the Norris Utilities line — <strong>FlexPro Armor, Skylift, Samson Rope, and Bay Shore Systems</strong> — is audited against the new language so every proposal goes out clean, current, and defensible.
        </p>
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