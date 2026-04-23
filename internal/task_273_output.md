<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Southern Company Standards Update | Norris Utilities®</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

    :root {
      --nu-blue: #0000FF;
      --nu-blue-deep: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-status-open: #E8901C;
      --nu-status-red: #D93025;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, #06D0FF 100%);
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
      opacity: 0.8;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
      pointer-events: none;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 65%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ TASK HEADER ══ */
    .task-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-cyan);
      padding: 8px 18px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .task-eyebrow::before {
      content: '';
      width: 8px; height: 8px;
      background: var(--nu-cyan);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--nu-cyan);
    }

    h1.task-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    h1.task-title span.accent { color: var(--nu-blue-deep); }

    .task-sub {
      font-size: 1.1rem;
      color: #555;
      max-width: 780px;
      margin-bottom: 36px;
    }

    /* ══ META BAR ══ */
    .meta-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 44px;
      padding: 22px 24px;
      background: linear-gradient(180deg, #fafafd 0%, #f0f2f8 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
    }
    .meta-cell .label {
      display: block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #7a7a8a;
      margin-bottom: 4px;
    }
    .meta-cell .value {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
    }
    .pill {
      display: inline-block;
      padding: 3px 12px;
      border-radius: 999px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .pill-open { background: #FFF3E0; color: var(--nu-status-open); border: 1px solid #F8C98A; }
    .pill-priority { background: #FCE8E6; color: var(--nu-status-red); border: 1px solid #F4B6B1; }
    .pill-source { background: #E8F4FD; color: var(--nu-blue-deep); border: 1px solid #B8DCF5; }

    /* ══ SECTION TITLES ══ */
    .section {
      margin-bottom: 40px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-title .first { color: var(--nu-blue-deep); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ CONTEXT BOX ══ */
    .context-box {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 26px 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.04);
    }
    .context-box p {
      margin-bottom: 14px;
      color: #3a3a4a;
      font-size: 1rem;
    }
    .context-box p:last-child { margin-bottom: 0; }
    .context-box strong { color: var(--nu-dark-text); }

    /* ══ STEP CARDS ══ */
    .steps {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .step {
      display: grid;
      grid-template-columns: 58px 1fr;
      gap: 18px;
      align-items: flex-start;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 20px 22px;
      transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
    }
    .step:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(0,0,255,0.08);
      border-color: #cdd6f4;
    }
    .step-num {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-blue-deep) 70%, var(--nu-cyan) 130%);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
      box-shadow: 0 3px 10px rgba(0,0,255,0.25);
    }
    .step-body h3 {
      font-size: 1.08rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step-body p {
      color: #4a4a58;
      font-size: 0.96rem;
    }
    .step-body ul {
      margin-top: 8px;
      padding-left: 0;
      list-style: none;
    }
    .step-body ul li {
      padding: 4px 0 4px 22px;
      position: relative;
      color: #4a4a58;
      font-size: 0.94rem;
    }
    .step-body ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 6px;
      top: 3px;
      font-size: 1.1rem;
    }

    /* ══ CONTACT CARD ══ */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .contact-card .role {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 4px;
    }
    .contact-card .name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .contact-card .detail {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.5;
    }

    /* ══ STANDARDS CHECKLIST ══ */
    .check-list {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 8px 4px;
    }
    .check-item {
      display: grid;
      grid-template-columns: 44px 1fr;
      gap: 14px;
      align-items: flex-start;
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .check-item:last-child { border-bottom: none; }
    .check-box {
      width: 26px;
      height: 26px;
      border: 2px solid var(--nu-blue);
      border-radius: 6px;
      background: var(--nu-white);
      margin-top: 2px;
      position: relative;
    }
    .check-item h4 {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 2px;
    }
    .check-item p {
      color: #5a5a6a;
      font-size: 0.92rem;
    }

    /* ══ CTA STRIP ══ */
    .cta-strip {
      margin-top: 20px;
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 13px 26px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      text-decoration: none;
      transition: all 0.18s ease;
    }
    .btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      box-shadow: 0 3px 12px rgba(0,0,255,0.25);
    }
    .btn-primary:hover {
      background: var(--nu-blue-deep);
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(0,0,255,0.35);
    }
    .btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ NOTES ══ */
    .notes-block {
      background: #FFFBEF;
      border: 1px solid #F1E4B6;
      border-left: 4px solid var(--nu-accent-gold);
      border-radius: 8px;
      padding: 20px 24px;
    }
    .notes-block h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      font-size: 1rem;
      letter-spacing: 0.03em;
    }
    .notes-block p { color: #5a4e20; font-size: 0.95rem; }

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
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 44px 22px 60px; }
      h1.task-title { font-size: 1.8rem; }
      .step { grid-template-columns: 44px 1fr; gap: 14px; padding: 16px 18px; }
      .step-num { width: 40px; height: 40px; font-size: 1rem; }
      .meta-bar { padding: 18px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step:hover { transform: none; box-shadow: none; }
      .cta-strip { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon" aria-hidden="true">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
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
    <div class="nu-wrap">

      <div class="task-eyebrow">reMarkable Action Item</div>

      <h1 class="task-title"><span class="accent">Southern Company</span> Standards Update</h1>
      <p class="task-sub">
        Confirm the current revision of Southern Company's material and construction
        standards, document what has changed since our last pull, and align our
        FlexPro Armor, Skylift, and Samson Rope offerings to the spec in use across
        Alabama Power, Georgia Power, Mississippi Power, and Southern Company
        Services.
      </p>

      <!-- META BAR -->
      <div class="meta-bar">
        <div class="meta-cell">
          <span class="label">Status</span>
          <span class="value"><span class="pill pill-open">Open</span></span>
        </div>
        <div class="meta-cell">
          <span class="label">Priority</span>
          <span class="value"><span class="pill pill-priority">High</span></span>
        </div>
        <div class="meta-cell">
          <span class="label">Source</span>
          <span class="value"><span class="pill pill-source">reMarkable</span></span>
        </div>
        <div class="meta-cell">
          <span class="label">Owner</span>
          <span class="value">Aaron C. Norris</span>
        </div>
        <div class="meta-cell">
          <span class="label">Logged</span>
          <span class="value">2026-04-23</span>
        </div>
      </div>

      <!-- WHY THIS MATTERS -->
      <section class="section">
        <h2 class="section-title"><span class="first">Why</span> <span class="rest">This Matters</span></h2>
        <div class="context-box">
          <p>
            Southern Company's operating companies &mdash; <strong>Alabama Power,
            Georgia Power, Mississippi Power,</strong> and Southern Company Services
            &mdash; drive the bulk of utility equipment and PPE purchasing across our
            core Southeast territory. Contractors working on Southern Co. projects
            (Chain Electric, Irby, Linetec, Pike, and others) must buy to the
            standard in force at the time of the award.
          </p>
          <p>
            If our FlexPro Armor bucket cover dimensions, Skylift configurations, or
            Samson Rope strength and splice callouts fall behind the current
            revision, we lose bids on technicalities and we create rework risk for
            customers already in the field.
          </p>
          <p>
            This action pulls the latest revision on file, maps the deltas against
            what we quoted in the last quarter, and pushes any required updates
            into the line card, quote templates, and contractor-facing SKU
            crosswalks.
          </p>
        </div>
      </section>

      <!-- ACTION STEPS -->
      <section class="section">
        <h2 class="section-title"><span class="first">Action</span> <span class="rest">Steps</span></h2>
        <div class="steps">

          <div class="step">
            <div class="step-num">1</div>
            <div class="step-body">
              <h3>Request the current standards package</h3>
              <p>Reach out to our Southern Co. contacts and confirm we have the active revision on file (document numbers, revision letter, and effective date).</p>
              <ul>
                <li>Target documents: Overhead Construction Standards, Substation Standards, PPE &amp; Fall Protection Standards, Line Tool Standards.</li>
                <li>Confirm whether the package is public or requires a signed distribution agreement.</li>
              </ul>
            </div>
          </div>

          <div class="step">
            <div class="step-num">2</div>
            <div class="step-body">
              <h3>Pull revision history since last quote cycle</h3>
              <p>Identify what changed since our most recent pull. Flag anything that touches bucket truck, bucket cover, rope, or drill rig scope.</p>
              <ul>
                <li>Bucket cover material callouts and size language (NU-BC-2851 / NU-BC-2834 mapping).</li>
                <li>Dielectric ratings, cover-up, and PPE categories.</li>
                <li>Rope MBS, splice type, and rated-capacity labeling.</li>
                <li>Platform and boom inspection criteria for Skylift units.</li>
              </ul>
            </div>
          </div>

          <div class="step">
            <div class="step-num">3</div>
            <div class="step-body">
              <h3>Cross-check against Norris Utilities® SKUs</h3>
              <p>Walk each open opportunity through the updated spec and confirm our line card still matches. Note any SKU that needs a data-sheet update.</p>
              <ul>
                <li>FlexPro Armor: NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C.</li>
                <li>Samson Rope &mdash; confirm Donna Poll and Sarah Daniels are copied when spec updates require new part numbers.</li>
                <li>Skylift &mdash; loop in Nick Gordon on any aerial-device spec movement.</li>
              </ul>
            </div>
          </div>

          <div class="step">
            <div class="step-num">4</div>
            <div class="step-body">
              <h3>Update customer-facing materials</h3>
              <p>Push the confirmed language into the line card, quote template, and contractor crosswalks so every new proposal quotes to the current revision.</p>
              <ul>
                <li>Stamp revision number and effective date on the quote cover sheet.</li>
                <li>Archive the prior revision into /norris-ops/internal/standards-archive/.</li>
                <li>Post a one-page summary to the ops portal so CB can reference during customer calls.</li>
              </ul>
            </div>
          </div>

          <div class="step">
            <div class="step-num">5</div>
            <div class="step-body">
              <h3>Notify customers on open deals</h3>
              <p>Send a short, direct note to every contractor with a Southern Co. job in the pipeline confirming the revision we are quoting to and asking them to flag any deviations.</p>
              <ul>
                <li>Chain Electric, Irby (Jared Lemoine), Linetec, Pike, Matthews Contracting.</li>
                <li>Short paragraph format, no filler &mdash; Aaron's voice.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <!-- STANDARDS TO REFRESH -->
      <section class="section">
        <h2 class="section-title"><span class="first">Standards</span> <span class="rest">Targeted for Refresh</span></h2>
        <div class="check-list">
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <h4>Overhead Construction Standards</h4>
              <p>Pole framing, cover-up placement, and rubber goods categories used on distribution builds.</p>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <h4>PPE &amp; Fall Protection</h4>
              <p>Bucket cover dimensions, dielectric requirements, harness and lanyard spec &mdash; directly drives FlexPro Armor SKU selection.</p>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <h4>Line Tool &amp; Rope Standards</h4>
              <p>Rope minimum breaking strength, splice type, rated capacity tags, and inspection cadence &mdash; Samson Rope line.</p>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <h4>Aerial Device Inspection Criteria</h4>
              <p>Boom, platform, and dielectric test requirements that apply to Skylift bucket trucks in service on Southern Co. work.</p>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <h4>Substation &amp; Underground Scope</h4>
              <p>Confirm any spec overlap that would affect Bay Shore Systems drill rig quoting in the Southeast territory.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACTS -->
      <section class="section">
        <h2 class="section-title"><span class="first">Contacts</span> <span class="rest">to Work</span></h2>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="role">Contractor &mdash; Irby Construction</div>
            <div class="name">Jared Lemoine</div>
            <div class="detail">
              Primary contact replacing Gary Wiggs and Scott Argyle (both retired April 2026). Works Southern Co. distribution jobs. Confirm which Southern Co. revision he is bidding to on current work.
            </div>
          </div>
          <div class="contact-card">
            <div class="role">Manufacturer &mdash; Skylift</div>
            <div class="name">Nick Gordon</div>
            <div class="detail">
              Pricing and specs. Pull any bucket-truck compliance notes tied to Southern Co. aerial-device requirements.
            </div>
          </div>
          <div class="contact-card">
            <div class="role">Manufacturer &mdash; Samson Rope</div>
            <div class="name">Donna Poll &amp; Sarah Daniels</div>
            <div class="detail">
              Always CC both. Verify current rope spec language matches the Southern Co. line-tool standard, especially MBS and splice callouts.
            </div>
          </div>
          <div class="contact-card">
            <div class="role">Utility &mdash; Southern Co. Operating</div>
            <div class="name">Alabama Power / Georgia Power / Mississippi Power</div>
            <div class="detail">
              Purchasing and standards desks. Confirm revision in force, document number, and effective date. Request distribution agreement if required.
            </div>
          </div>
        </div>
      </section>

      <!-- NOTES -->
      <section class="section">
        <div class="notes-block">
          <h4>Field Notes</h4>
          <p>
            Southern Co. operating companies run separate purchasing desks but share
            core standards through Southern Company Services. Pull from Southern
            Company Services first for the authoritative revision, then confirm each
            operating company has adopted it. Any lag between OpCo adoption is where
            contractors get caught &mdash; flag the gap when it appears.
          </p>
        </div>
      </section>

      <!-- CTA -->
      <section class="section">
        <h2 class="section-title"><span class="first">Next</span> <span class="rest">Moves</span></h2>
        <div class="cta-strip">
          <a href="mailto:acnorris@norrisutilities.com?subject=Southern%20Co%20Standards%20Update%20%E2%80%94%20Action%20Item&amp;body=Aaron%20%E2%80%94%0A%0AStatus%20of%20the%20Southern%20Company%20standards%20pull%3A%0A%0A%E2%80%A2%20Revision%20confirmed%3A%0A%E2%80%A2%20Deltas%20vs%20last%20quote%20cycle%3A%0A%E2%80%A2%20SKU%20changes%20required%3A%0A%0ASincerely%2C%0A" class="btn btn-primary">Log Status Update</a>
          <a href="tel:2055001343" class="btn btn-secondary">Call Aaron &mdash; 205-500-1343</a>
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
  </footer>

</body>
</html>