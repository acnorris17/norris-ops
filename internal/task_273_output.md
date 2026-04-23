<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Southern Company Standards Update — Action Item — Norris Utilities®</title>
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
      --nu-amber: #F59E0B;
      --nu-green: #10B981;
      --nu-red: #DC2626;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.35);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.04em;
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

    /* ══ DOCUMENT META BAR ══ */
    .nu-meta-bar {
      background: var(--nu-white);
      border-bottom: 2px solid var(--nu-medium-gray);
      padding: 18px 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
    .nu-meta-bar .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: #666;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .nu-meta-bar .value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-status-pill {
      display: inline-block;
      background: var(--nu-amber);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* ══ MAIN CONTENT ══ */
    .nu-content-area {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 60px;
      background: var(--nu-white);
      position: relative;
    }

    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .nu-page-title .highlight {
      color: #0033cc;
    }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 32px;
      font-weight: 400;
    }

    /* ══ SECTION HEADER ══ */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-header {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 8px;
      border-bottom: 3px solid var(--nu-cyan);
      line-height: 1.2;
    }
    .nu-section-header .first {
      color: #0033cc;
    }
    .nu-section-header .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ ACTION BOX ══ */
    .nu-action-box {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-bottom: 36px;
      box-shadow: 0 6px 20px rgba(0, 51, 204, 0.25);
      position: relative;
      overflow: hidden;
    }
    .nu-action-box::before {
      content: '';
      position: absolute;
      top: -50%; right: -10%;
      width: 40%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.25) 0%, transparent 70%);
    }
    .nu-action-box > * { position: relative; }
    .nu-action-box .eyebrow {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .nu-action-box h2 {
      font-size: 1.45rem;
      font-weight: 900;
      margin-bottom: 10px;
      line-height: 1.3;
    }
    .nu-action-box p {
      font-size: 1rem;
      color: rgba(255,255,255,0.9);
      line-height: 1.65;
    }

    /* ══ CONTACT GRID ══ */
    .nu-contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
      margin-bottom: 12px;
    }
    .nu-contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-contact-card .name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
    }
    .nu-contact-card .title {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 10px;
      font-weight: 400;
    }
    .nu-contact-card .org {
      font-size: 0.78rem;
      font-weight: 700;
      color: #0033cc;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .nu-contact-card .note {
      font-size: 0.88rem;
      color: #444;
      line-height: 1.55;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 22px 26px;
      margin-bottom: 20px;
    }
    .nu-checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-checklist-item:last-child { border-bottom: none; }
    .nu-checklist-item .box {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .nu-checklist-item .text {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .nu-checklist-item .text strong {
      color: #0033cc;
      font-weight: 900;
    }

    /* ══ QUESTIONS LIST ══ */
    .nu-questions {
      counter-reset: qcounter;
      list-style: none;
    }
    .nu-questions li {
      counter-increment: qcounter;
      position: relative;
      padding: 16px 20px 16px 60px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }
    .nu-questions li::before {
      content: counter(qcounter);
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 34px;
      height: 34px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ══ CONTEXT TABLE ══ */
    .nu-context-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      font-size: 0.95rem;
    }
    .nu-context-table th {
      background: #0033cc;
      color: var(--nu-white);
      text-align: left;
      padding: 12px 16px;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 900;
    }
    .nu-context-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-context-table tr:last-child td { border-bottom: none; }
    .nu-context-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 32%;
    }

    /* ══ CALLOUT ══ */
    .nu-callout {
      background: #FFF8E1;
      border-left: 4px solid var(--nu-amber);
      padding: 18px 22px;
      border-radius: 4px;
      margin: 24px 0;
      font-size: 0.95rem;
      color: #5C4A10;
      line-height: 1.6;
    }
    .nu-callout strong {
      color: #B45309;
      font-weight: 900;
    }

    /* ══ NEXT STEPS ══ */
    .nu-next-steps {
      background: linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%);
      border: 1px solid #BAE6FD;
      border-radius: 8px;
      padding: 24px 28px;
    }
    .nu-next-steps .label {
      font-size: 0.78rem;
      font-weight: 900;
      color: #0033cc;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-next-steps ol {
      padding-left: 22px;
    }
    .nu-next-steps li {
      padding: 8px 0;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      line-height: 1.55;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 45px 20px 65px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-page-title { font-size: 1.6rem; }
      .nu-content-area { padding: 36px 22px 40px; }
      .nu-meta-bar { padding: 14px 22px; }
      .nu-action-box { padding: 22px 20px; }
      .nu-questions li { padding-left: 54px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: #0033cc !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-action-box, .nu-next-steps { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- META BAR -->
  <div class="nu-meta-bar">
    <div>
      <div class="label">Document Type</div>
      <div class="value">Action Item — Internal</div>
    </div>
    <div>
      <div class="label">Source</div>
      <div class="value">reMarkable Note</div>
    </div>
    <div>
      <div class="label">Date Opened</div>
      <div class="value">April 23, 2026</div>
    </div>
    <div>
      <div class="label">Owner</div>
      <div class="value">Aaron C. Norris</div>
    </div>
    <div>
      <span class="nu-status-pill">Open — Action Required</span>
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">

    <h1 class="nu-page-title">
      <span class="highlight">Southern Company</span> — Standards Update Inquiry
    </h1>
    <p class="nu-page-subtitle">
      Action item captured from reMarkable notes. Objective: obtain the current Southern Company material and equipment standards to align Norris Utilities® product offerings (FlexPro Armor, Skylift, Samson Rope, Bay Shore Systems) with operating-company specifications across Alabama Power, Georgia Power, Mississippi Power, and Southern Company Gas.
    </p>

    <!-- ACTION BOX -->
    <div class="nu-action-box">
      <div class="eyebrow">Primary Action</div>
      <h2>Obtain the current Southern Company standards package and confirm the approved-vendor pathway for bucket covers, bucket trucks, drill rigs, and synthetic rope.</h2>
      <p>
        Southern Company operating companies work off material standards that gate every product carried on utility and contractor line trucks in our territory. Confirming which Norris Utilities® SKUs sit inside (or outside) those standards drives quote strategy for every linked Alabama Power, Georgia Power, and Mississippi Power contractor relationship.
      </p>
    </div>

    <!-- WHY THIS MATTERS -->
    <section class="nu-section">
      <h2 class="nu-section-header"><span class="first">Why</span> <span class="rest">This Matters</span></h2>
      <table class="nu-context-table">
        <thead>
          <tr>
            <th>Factor</th>
            <th>Impact on Norris Utilities®</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Territory overlap</td>
            <td>Southern Company operating companies cover Alabama, Georgia, Mississippi, and parts of Florida — the core of our 20-state service footprint, with Alabama Power headquartered in our home market of Birmingham.</td>
          </tr>
          <tr>
            <td>Contractor pull-through</td>
            <td>Irby Construction (Jared Lemoine) and other line contractors buy against Southern Co standards. If FlexPro Armor bucket covers and Skylift bucket trucks are not inside the current spec, our contractor quotes lose on compliance, not price.</td>
          </tr>
          <tr>
            <td>Safety &amp; PPE posture</td>
            <td>Bucket cover PPE requirements have tightened nationally. Southern Co's current revision will tell us whether our 28"×51" and 28"×34" SKUs meet the dimensional and material spec called out in their tool &amp; equipment standards.</td>
          </tr>
          <tr>
            <td>Samson Rope alignment</td>
            <td>Dielectric rope standards are revision-sensitive. Confirming the Southern Co approved rope list protects Donna Poll and Sarah Daniels' authorized-distributor position through Norris Utilities®.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- WHO TO CONTACT -->
    <section class="nu-section">
      <h2 class="nu-section-header"><span class="first">Who</span> <span class="rest">To Contact</span></h2>
      <div class="nu-contact-grid">

        <div class="nu-contact-card">
          <div class="org">Alabama Power — Supply Chain</div>
          <div class="name">Supply Chain / Materials Standards Group</div>
          <div class="title">Tool &amp; Equipment Standards Owner</div>
          <div class="note">
            Primary route in. Alabama Power sits in Birmingham and historically owns the tool &amp; equipment standards that cascade across the Southern Co operating companies. Ask by title if a named owner is not yet identified.
          </div>
        </div>

        <div class="nu-contact-card">
          <div class="org">Irby Construction</div>
          <div class="name">Jared Lemoine</div>
          <div class="title">Primary Irby contact (replacing Gary Wiggs &amp; Scott Argyle, both retired April 2026)</div>
          <div class="note">
            Fastest contractor-side path to a current standards copy. Irby operates inside Southern Co footprints daily and will know which revision their crews are holding.
          </div>
        </div>

        <div class="nu-contact-card">
          <div class="org">Southern Company Gas</div>
          <div class="name">Standards &amp; Specifications Group</div>
          <div class="title">Gas-side standards owner</div>
          <div class="note">
            Relevant for Bay Shore Systems drill rigs in our SE territory rep role. Gas construction standards often reference the electric T&amp;D book by shared index.
          </div>
        </div>

        <div class="nu-contact-card">
          <div class="org">Georgia Power / Mississippi Power</div>
          <div class="name">Operating-company Supply Chain</div>
          <div class="title">Parallel routes if Alabama Power channel is slow</div>
          <div class="note">
            Southern Co standards are commonly shared across operating companies but may carry company-specific addenda. Worth a cross-check once the base document is in hand.
          </div>
        </div>

      </div>
    </section>

    <!-- CHECKLIST -->
    <section class="nu-section">
      <h2 class="nu-section-header"><span class="first">Action</span> <span class="rest">Checklist</span></h2>
      <div class="nu-checklist">
        <div class="nu-checklist-item">
          <div class="box"></div>
          <div class="text"><strong>1.</strong> Call Jared Lemoine at Irby Construction — ask what Southern Co standards revision Irby crews are currently working against and how he obtains updates.</div>
        </div>
        <div class="nu-checklist-item">
          <div class="box"></div>
          <div class="text"><strong>2.</strong> Identify the Alabama Power tool &amp; equipment standards owner by name, title, and email. Log the contact in the master tracker.</div>
        </div>
        <div class="nu-checklist-item">
          <div class="box"></div>
          <div class="text"><strong>3.</strong> Request the current standards package — specifically the sections covering bucket cover PPE, aerial device / bucket truck specification, synthetic rope, and drill rig construction equipment.</div>
        </div>
        <div class="nu-checklist-item">
          <div class="box"></div>
          <div class="text"><strong>4.</strong> Map Norris Utilities® SKUs (NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C, Skylift SBA40i-LW / SBA47i-MH, Samson dielectric lines, Bay Shore drill rigs) against each Southern Co spec line item.</div>
        </div>
        <div class="nu-checklist-item">
          <div class="box"></div>
          <div class="text"><strong>5.</strong> Flag any gaps where a Norris Utilities® product is not listed — start the approved-vendor add process for the gap items.</div>
        </div>
        <div class="nu-checklist-item">
          <div class="box"></div>
          <div class="text"><strong>6.</strong> File the standards package in <em>~/norris-ops/internal/</em> under a dated folder and link it from the master tracker so future contractor quotes reference the current revision, not memory.</div>
        </div>
        <div class="nu-checklist-item">
          <div class="box"></div>
          <div class="text"><strong>7.</strong> Set a 90-day recurring review — utility standards revise frequently, and a stale copy is worse than no copy during a contractor quote.</div>
        </div>
      </div>
    </section>

    <!-- QUESTIONS -->
    <section class="nu-section">
      <h2 class="nu-section-header"><span class="first">Questions</span> <span class="rest">To Ask</span></h2>
      <ol class="nu-questions">
        <li>What is the current revision number and effective date of the Southern Company material &amp; equipment standards document?</li>
        <li>Is the standards package shared across Alabama Power, Georgia Power, and Mississippi Power — or does each operating company publish its own addenda?</li>
        <li>Does the current spec call out bucket cover PPE by dimension, material, or manufacturer? What are the accepted sizes?</li>
        <li>What is the approved-vendor list for aerial devices / bucket trucks in the utility-owned and contractor-owned fleets? Is Skylift currently named?</li>
        <li>What synthetic rope specifications apply for hot-line and construction work? Is Samson Rope named as an approved manufacturer?</li>
        <li>For Southern Company Gas construction, what are the current drill rig specifications — is Bay Shore Systems on the approved equipment list?</li>
        <li>What is the process for adding a product line to the approved-vendor list where a gap exists?</li>
        <li>How are standards revisions communicated — scheduled bulletins, posted portal, or contact-on-request?</li>
      </ol>
    </section>

    <!-- CALLOUT -->
    <div class="nu-callout">
      <strong>Tone note —</strong> Lead with the relationship and the ask. Aaron is a third-generation utility dealer serving Southern Company operating territory — frame the request as making sure Norris Utilities® products ship to their crews inside current spec. Never push, never apologize. Aaron's voice: direct, warm, confident. Y'all-friendly where appropriate.
    </div>

    <!-- NEXT STEPS -->
    <section class="nu-section">
      <div class="nu-next-steps">
        <div class="label">Next Steps — Week Of April 23, 2026</div>
        <ol>
          <li>Call Jared Lemoine (Irby) first — shortest path to a working copy of the current standards and the internal naming convention.</li>
          <li>Draft a short, direct email to the Alabama Power supply chain / standards contact once identified. Request the current standards package and the update distribution channel.</li>
          <li>Log findings in the master tracker and open a standards-mapping worksheet alongside the FlexPro Armor, Skylift, Samson Rope, and Bay Shore Systems product sheets.</li>
          <li>Report outcome and approved-vendor gap list back to Aaron by end of week. No half answers — if a channel is slow, escalate to parallel contacts at Georgia Power or Mississippi Power.</li>
        </ol>
      </div>
    </section>

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