<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Southern Company Standards Update — Norris Utilities®</title>
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
      --nu-amber: #F59E0B;
      --nu-amber-bg: #FEF3C7;
      --nu-green: #059669;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 0 0 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 32px 0;
    }

    /* DOCUMENT META BAR */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 28px;
      align-items: center;
    }
    .doc-tag {
      display: inline-flex;
      align-items: center;
      padding: 6px 14px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--nu-dark-text);
    }
    .doc-tag.priority {
      background: var(--nu-amber-bg);
      border-color: var(--nu-amber);
      color: #92400E;
    }
    .doc-tag.source {
      background: #EFF6FF;
      border-color: #BFDBFE;
      color: #1E40AF;
    }
    .doc-tag.status {
      background: #FEF2F2;
      border-color: #FCA5A5;
      color: var(--nu-red);
    }

    /* PAGE TITLE */
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .page-title .accent {
      color: var(--nu-blue);
    }
    .page-subtitle {
      font-size: 1.1rem;
      color: #666;
      font-weight: 400;
      margin-bottom: 36px;
      max-width: 800px;
    }

    /* SECTION */
    .nu-section { margin-bottom: 32px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 14px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
    }
    .nu-section-title::after {
      content: '';
      display: block;
      width: 48px;
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-top: 8px;
      border-radius: 2px;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }
    .nu-card p { margin-bottom: 12px; }
    .nu-card p:last-child { margin-bottom: 0; }

    /* TWO-COLUMN GRID */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    @media (max-width: 720px) {
      .grid-2 { grid-template-columns: 1fr; }
    }

    /* CONTACT CARDS */
    .contact-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px 24px;
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .contact-name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .contact-role {
      font-size: 0.85rem;
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 10px;
    }
    .contact-line {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      margin-bottom: 4px;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      padding: 14px 16px;
      margin-bottom: 8px;
      background: var(--nu-white);
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
      transition: border-color 0.15s ease, transform 0.15s ease;
    }
    .checklist li:hover {
      border-color: var(--nu-cyan);
      transform: translateX(2px);
    }
    .checklist .num {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.85rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 14px;
      margin-top: 1px;
    }
    .checklist .text {
      flex: 1;
      font-size: 0.97rem;
      color: var(--nu-dark-text);
    }
    .checklist .text strong { color: var(--nu-blue); }

    /* WHY-IT-MATTERS BOX */
    .why-box {
      background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 18px;
    }
    .why-box-title {
      font-weight: 900;
      font-size: 0.85rem;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .why-box-text {
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }

    /* STANDARDS TABLE */
    .standards-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .standards-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .standards-table td {
      padding: 14px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .standards-table tr:nth-child(even) td {
      background: #FAFAFC;
    }
    .standards-table .topic {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 32%;
    }
    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .pill.unknown { background: var(--nu-amber-bg); color: #92400E; }
    .pill.confirm { background: #E0E7FF; color: #3730A3; }

    /* OPCO GRID */
    .opco-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px;
      margin-top: 12px;
    }
    .opco-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 14px 16px;
      text-align: center;
    }
    .opco-name {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }
    .opco-region {
      font-size: 0.78rem;
      color: #666;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    /* EMAIL DRAFT */
    .email-draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .email-header {
      background: var(--nu-light-gray);
      padding: 14px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .email-header div { margin-bottom: 4px; }
    .email-header strong { color: var(--nu-dark-text); margin-right: 8px; }
    .email-body {
      padding: 26px 28px;
      font-size: 0.97rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .email-body p { margin-bottom: 14px; padding-left: 14px; }
    .email-body .greeting { padding-left: 0; }
    .email-body ul { padding-left: 32px; margin-bottom: 14px; }
    .email-body ul li { margin-bottom: 6px; list-style: none; position: relative; }
    .email-body ul li::before { content: '•'; position: absolute; left: -16px; color: var(--nu-blue); font-weight: 700; }
    .email-body .closing { padding-left: 0; margin-bottom: 4px; }
    .email-body .signature { padding-left: 14px; font-weight: 700; color: var(--nu-dark-text); margin-bottom: 0; }

    /* NEXT-ACTION BANNER */
    .next-action {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 60%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin-bottom: 30px;
      box-shadow: 0 4px 20px rgba(0,0,255,0.2);
    }
    .next-action-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      opacity: 0.85;
      margin-bottom: 8px;
    }
    .next-action-text {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.4;
    }

    /* FOOTER */
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
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 18px 0; }
      .page-title { font-size: 1.7rem; }
      .nu-card { padding: 22px 20px; }
      .standards-table th, .standards-table td { padding: 10px 12px; font-size: 0.85rem; }
      .next-action-text { font-size: 1.05rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .contact-card, .standards-table, .email-draft { box-shadow: none; }
      .next-action { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- META BAR -->
      <div class="doc-meta">
        <span class="doc-tag source">reMarkable Action Item</span>
        <span class="doc-tag priority">Priority: High</span>
        <span class="doc-tag status">Status: Open</span>
        <span class="doc-tag">Captured: 2026-04-20</span>
        <span class="doc-tag">Owner: Aaron C. Norris</span>
      </div>

      <!-- TITLE -->
      <h1 class="page-title"><span class="accent">Action Item:</span> Get Southern Company Standards Update</h1>
      <p class="page-subtitle">
        Confirm the current Southern Company® bucket-cover and equipment standards across all OpCos so Norris Utilities® can quote, ship, and spec FlexPro Armor and bucket-truck offerings with zero rework.
      </p>

      <!-- NEXT ACTION -->
      <div class="next-action">
        <div class="next-action-label">Next Action</div>
        <div class="next-action-text">Identify the current Southern Company Standards engineer for bucket covers &amp; aerial PPE — request the latest revision of the spec, the effective date, and the approved-vendor list.</div>
      </div>

      <!-- WHY IT MATTERS -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Why</span> <span class="rest">This Matters</span></h2>
        <div class="why-box">
          <div class="why-box-title">Business Impact</div>
          <div class="why-box-text">
            Southern Company is the parent of Alabama Power, Georgia Power, Mississippi Power, and Southern Company Gas — the dominant utilities across our home territory. Their standards trickle down through every OpCo and through every contractor that touches their lines (Irby, Linetec, Henkels &amp; McCoy, MasTec, Power &amp; Telephone Supply). If FlexPro Armor and the NU-BC SKU family are not on the current approved-vendor list — or if a revision quietly bumped a dimension or material spec — every quote we send into the Southern footprint is at risk of being rejected at receiving. We need the current document, the effective date, and the engineer's name in writing.
          </div>
        </div>
      </div>

      <!-- WHAT WE NEED TO LEARN -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">What</span> <span class="rest">We Need to Learn</span></h2>
        <table class="standards-table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Question to Answer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="topic">Approved Vendor List (AVL)</td>
              <td>Is FlexPro Armor (Norris Utilities) currently on the Southern Company AVL for bucket covers? If not, what is the path to add us?</td>
              <td><span class="pill unknown">Confirm</span></td>
            </tr>
            <tr>
              <td class="topic">Spec Revision &amp; Effective Date</td>
              <td>What is the current revision number and effective date of the bucket-cover / aerial PPE standard? When is the next planned revision?</td>
              <td><span class="pill unknown">Confirm</span></td>
            </tr>
            <tr>
              <td class="topic">Dimensional Requirements</td>
              <td>Confirm Southern Co's dimensional callouts map cleanly to NU-BC-2851 (28"×51", 2-Man) and NU-BC-2834 (28"×34", 1.5-Man). Translate any 24"×48" / 24"×34" legacy callouts.</td>
              <td><span class="pill unknown">Confirm</span></td>
            </tr>
            <tr>
              <td class="topic">Material / ANSI / ASTM Spec</td>
              <td>What ANSI/ASTM/ASTM F2412 or dielectric callouts apply? Does the spec require a specific weight of vinyl-coated polyester, double-stitched seams, or UV rating?</td>
              <td><span class="pill unknown">Confirm</span></td>
            </tr>
            <tr>
              <td class="topic">Combo Products</td>
              <td>Does the standard address bucket-cover + step combos (NU-BC-2851-C, NU-BC-2834-C) or treat them as separate line items?</td>
              <td><span class="pill confirm">Confirm</span></td>
            </tr>
            <tr>
              <td class="topic">Marking &amp; Labeling</td>
              <td>What stitched-in label, lot number, or QR/serialization requirements apply? Are there color-coding rules for transmission vs. distribution crews?</td>
              <td><span class="pill unknown">Confirm</span></td>
            </tr>
            <tr>
              <td class="topic">Bucket Truck &amp; Aerial Equipment</td>
              <td>Are Skylift bucket trucks (insulated booms, material handlers) and Bay Shore Systems drill rigs on the approved equipment list for the Southern footprint? Any new dielectric test cadence?</td>
              <td><span class="pill unknown">Confirm</span></td>
            </tr>
            <tr>
              <td class="topic">Samson Rope</td>
              <td>Confirm Samson Rope SKUs in current use across Southern Co line crews and whether any have been added/dropped since last revision.</td>
              <td><span class="pill confirm">Confirm</span></td>
            </tr>
            <tr>
              <td class="topic">Submission &amp; Approval Path</td>
              <td>If a new product needs to be added, what is the submission package (test reports, drawings, MSDS) and the typical timeline for approval?</td>
              <td><span class="pill unknown">Confirm</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- OPCOS IN SCOPE -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Operating</span> <span class="rest">Companies in Scope</span></h2>
        <div class="opco-grid">
          <div class="opco-tile">
            <div class="opco-name">Alabama Power</div>
            <div class="opco-region">AL — Home Turf</div>
          </div>
          <div class="opco-tile">
            <div class="opco-name">Georgia Power</div>
            <div class="opco-region">GA</div>
          </div>
          <div class="opco-tile">
            <div class="opco-name">Mississippi Power</div>
            <div class="opco-region">MS Gulf Coast</div>
          </div>
          <div class="opco-tile">
            <div class="opco-name">Southern Co Gas</div>
            <div class="opco-region">AL · GA · TN · VA</div>
          </div>
          <div class="opco-tile">
            <div class="opco-name">Southern Power</div>
            <div class="opco-region">Wholesale Generation</div>
          </div>
          <div class="opco-tile">
            <div class="opco-name">PowerSecure</div>
            <div class="opco-region">Distributed Infrastructure</div>
          </div>
        </div>
      </div>

      <!-- WHO TO CONTACT -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Who</span> <span class="rest">to Contact First</span></h2>
        <div class="grid-2">
          <div class="contact-card">
            <div class="contact-name">Jared Lemoine</div>
            <div class="contact-role">Irby Construction — Primary</div>
            <div class="contact-line">Irby is one of Southern Co's largest installation contractors. Jared can route us to the right Standards engineer and tell us which spec revision Irby is currently buying to.</div>
            <div class="contact-line"><strong>Why first:</strong> warm relationship, direct line to the spec.</div>
          </div>
          <div class="contact-card">
            <div class="contact-name">Alabama Power — Supply Chain</div>
            <div class="contact-role">Materials &amp; Standards Group</div>
            <div class="contact-line">Identify the current Standards engineer responsible for aerial PPE and bucket-cover specs. Request the latest revision in PDF and the AVL line item.</div>
            <div class="contact-line"><strong>Why second:</strong> AL Power sets the tone for the Southern Co family.</div>
          </div>
          <div class="contact-card">
            <div class="contact-name">Linetec Services</div>
            <div class="contact-role">Storm &amp; Distribution Contractor</div>
            <div class="contact-line">Linetec already buys FlexPro Armor through us — confirm what spec revision they are quoting against and whether Southern Co has pushed any new requirements down to them recently.</div>
            <div class="contact-line"><strong>Why third:</strong> field reality-check on the paper spec.</div>
          </div>
          <div class="contact-card">
            <div class="contact-name">Caroline Butler (CB)</div>
            <div class="contact-role">Norris Utilities — Admin</div>
            <div class="contact-line">Owns inbound document tracking. Once the spec PDF arrives, CB files it under <em>Standards/Southern_Co/</em> with revision number and effective date in the filename, and flags Aaron for review.</div>
            <div class="contact-line"><strong>Internal:</strong> document custody only — never contacts utility direct.</div>
          </div>
        </div>
      </div>

      <!-- ACTION CHECKLIST -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Checklist</span></h2>
        <ol class="checklist">
          <li>
            <span class="num">1</span>
            <span class="text">Email <strong>Jared Lemoine at Irby</strong> — ask for the name of the current Southern Company Standards engineer responsible for bucket covers and aerial PPE, and which spec revision Irby is currently buying to.</span>
          </li>
          <li>
            <span class="num">2</span>
            <span class="text">Once identified, send a direct request to the <strong>Southern Co Standards engineer</strong> for the current revision PDF, the effective date, the AVL excerpt, and the next planned revision date.</span>
          </li>
          <li>
            <span class="num">3</span>
            <span class="text">Cross-check the dimensional callouts against the <strong>NU-BC SKU family</strong> (NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C). Translate any legacy 24"×48" / 24"×34" callouts to our current sizes.</span>
          </li>
          <li>
            <span class="num">4</span>
            <span class="text">Verify FlexPro Armor and Norris Utilities® are listed on the <strong>Approved Vendor List</strong>. If not, request the submission package and timeline.</span>
          </li>
          <li>
            <span class="num">5</span>
            <span class="text">Confirm <strong>Skylift bucket trucks</strong> (insulated booms, material handlers) and <strong>Bay Shore Systems drill rigs</strong> meet current Southern Co equipment specs.</span>
          </li>
          <li>
            <span class="num">6</span>
            <span class="text">CC <strong>Donna Poll &amp; Sarah Daniels at Samson Rope</strong> on any rope-spec questions; CC <strong>Troy Gongwer &amp; Thayne Grove at BOSS Products</strong> on any related component questions.</span>
          </li>
          <li>
            <span class="num">7</span>
            <span class="text">CB files the received spec PDF under <strong>Standards/Southern_Co/</strong> with the revision number and effective date in the filename, then flags Aaron for review.</span>
          </li>
          <li>
            <span class="num">8</span>
            <span class="text">Update <strong>master_tracker</strong> and <strong>palace-rules</strong> with: spec revision, effective date, AVL status, and any required product changes. Set a 90-day reminder to re-verify before each new RFP cycle.</span>
          </li>
        </ol>
      </div>

      <!-- DRAFT EMAIL -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Draft</span> <span class="rest">Email — Jared Lemoine, Irby</span></h2>
        <div class="email-draft">
          <div class="email-header">
            <div><strong>To:</strong> Jared Lemoine — Irby Construction</div>
            <div><strong>From:</strong> Aaron C. Norris — Norris Utilities®, LLC</div>
            <div><strong>Subject:</strong> Southern Company Standards — current revision &amp; AVL check</div>
          </div>
          <div class="email-body">
            <p class="greeting">Jared —</p>
            <p>Hope y'all are running strong this week. Quick ask while we line up the next round of FlexPro Armor and bucket-truck quotes into the Southern Company footprint.</p>
            <p>I want to make sure we're quoting against the current Southern Co standard for bucket covers and aerial PPE, not a revision behind. Anything you can share would be advantageous:</p>
            <ul>
              <li>Name of the current Standards engineer at Southern Co (or Alabama Power) responsible for bucket covers and aerial PPE</li>
              <li>The revision number and effective date of the spec Irby is currently buying to</li>
              <li>Whether Norris Utilities and FlexPro Armor are listed on the current Approved Vendor List, or if there is a submission path we should be running</li>
              <li>Any equipment-spec changes on bucket trucks (Skylift) or drill rigs (Bay Shore Systems) that have come down recently</li>
            </ul>
            <p>Happy to drive over and pick up a copy in person if that's easier than sending. I want to earn the business the right way, and that starts with quoting against the right paperwork.</p>
            <p>Appreciate you, as always.</p>
            <p class="closing">Sincerely,</p>
            <p class="signature">Aaron C. Norris</p>
          </div>
        </div>
      </div>

      <!-- DEFINITION OF DONE -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Definition</span> <span class="rest">of Done</span></h2>
        <div class="nu-card">
          <p>This action item is closed when <strong>all</strong> of the following are true:</p>
          <p>• The current Southern Company bucket-cover / aerial PPE spec is on file as a PDF in <em>Standards/Southern_Co/</em>, named with the revision number and effective date.</p>
          <p>• The Standards engineer's name, title, email, and phone are recorded in palace-customers.</p>
          <p>• Norris Utilities® / FlexPro Armor AVL status is confirmed in writing — listed, or with a submission package in motion and an expected approval date.</p>
          <p>• The NU-BC SKU family is confirmed to map to the current dimensional and material requirements; any gaps are written up as product-action items.</p>
          <p>• A 90-day re-verification reminder is set in master_tracker.</p>
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
  </footer>

</body>
</html>