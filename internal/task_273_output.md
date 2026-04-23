<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Southern Company Standards Update — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-success-green: #0A8754;
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

    /* ═══ HEADER ═══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 60px),
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

    /* Ghost Phoenix Watermark */
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: 120%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }
    .nu-phoenix-watermark svg {
      width: 100%;
      height: 100%;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* ═══ CHEVRON TRANSITION ═══ */
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

    /* ═══ CONTENT AREA ═══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 60px 0 80px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 40px;
      position: relative;
      z-index: 1;
    }

    /* ═══ BREADCRUMB / META ═══ */
    .nu-meta-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      padding: 16px 24px;
      background: linear-gradient(90deg, #f8f9fc 0%, #eef1f8 100%);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      margin-bottom: 36px;
      font-size: 0.9rem;
    }
    .nu-meta-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-meta-item .label {
      color: var(--nu-body-text);
      font-weight: 400;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
    }
    .nu-priority-pill {
      display: inline-block;
      padding: 4px 12px;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      border-radius: 20px;
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* ═══ SECTION TITLES ═══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      line-height: 1.2;
      margin-bottom: 20px;
      color: var(--nu-dark-text);
    }
    .nu-section-title .accent {
      color: #0033cc;
    }

    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-page-title .accent {
      color: #0033cc;
    }
    .nu-page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 28px;
      max-width: 780px;
    }

    /* ═══ ACTION CARD ═══ */
    .nu-action-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 32px;
      box-shadow: 0 4px 20px rgba(0, 0, 51, 0.08);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 32px;
    }

    /* ═══ BADGES ═══ */
    .nu-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 24px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 16px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.02em;
    }
    .nu-badge.cyan {
      background: linear-gradient(135deg, #0033cc 0%, #06D0FF 100%);
    }
    .nu-badge.gold {
      background: linear-gradient(135deg, #8a6d2a 0%, #C9A84C 100%);
    }

    /* ═══ TWO-COLUMN LAYOUT ═══ */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 32px;
    }
    @media (max-width: 768px) {
      .nu-grid-2 { grid-template-columns: 1fr; }
    }

    .nu-info-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .nu-info-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: #0033cc;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-info-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-info-card ul li {
      padding: 8px 0;
      padding-left: 22px;
      position: relative;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .nu-info-card ul li::before {
      content: '▸';
      position: absolute;
      left: 0;
      top: 8px;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* ═══ STEP LIST ═══ */
    .nu-steps {
      list-style: none;
      counter-reset: stepcounter;
      padding: 0;
    }
    .nu-steps li {
      position: relative;
      padding: 18px 20px 18px 72px;
      margin-bottom: 12px;
      background: linear-gradient(90deg, #f8f9fc 0%, #ffffff 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      counter-increment: stepcounter;
    }
    .nu-steps li::before {
      content: counter(stepcounter);
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .nu-steps li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      margin-bottom: 4px;
    }
    .nu-steps li p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ═══ CONTACT TABLE ═══ */
    .nu-contact-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-contact-table th {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-contact-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-contact-table tr:last-child td {
      border-bottom: none;
    }
    .nu-contact-table tr:hover td {
      background: #f8f9fc;
    }

    /* ═══ ALERT / CALLOUT ═══ */
    .nu-callout {
      background: linear-gradient(90deg, #fff8e6 0%, #fffbf0 100%);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 24px;
      border-radius: 4px;
      margin-bottom: 32px;
    }
    .nu-callout strong {
      color: #8a6d2a;
      font-weight: 900;
    }
    .nu-callout p {
      font-size: 0.95rem;
      margin-top: 6px;
    }

    /* ═══ TALKING POINTS ═══ */
    .nu-talking-points {
      background: linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 100%);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 32px;
      border: 1px solid rgba(0, 51, 204, 0.15);
    }
    .nu-talking-points h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: #0033cc;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .nu-talking-points ol {
      padding-left: 22px;
    }
    .nu-talking-points ol li {
      margin-bottom: 10px;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    /* ═══ CTA ROW ═══ */
    .nu-cta-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 12px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 13px 28px;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(0, 0, 255, 0.25);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 13px 28px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ═══ STATUS STRIP ═══ */
    .nu-status-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-status-cell {
      background: var(--nu-white);
      padding: 20px 16px;
      text-align: center;
    }
    .nu-status-cell .label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--nu-body-text);
      margin-bottom: 6px;
      font-weight: 700;
    }
    .nu-status-cell .value {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .nu-status-cell .value.highlight {
      color: #0033cc;
    }
    @media (max-width: 768px) {
      .nu-status-strip { grid-template-columns: repeat(2, 1fr); }
    }

    /* ═══ FOOTER ═══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }
    .nu-footer-name {
      font-weight: 900;
      color: var(--nu-white);
      letter-spacing: 0.05em;
      margin-bottom: 6px;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-container { padding: 0 20px; }
      .nu-action-card { padding: 22px; }
      .nu-badge { clip-path: none; border-radius: 6px; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-watermark">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 20 L110 45 L140 30 L120 55 L160 45 L130 75 L150 110 L115 90 L100 130 L85 90 L50 110 L70 75 L40 45 L80 55 L60 30 L90 45 Z" fill="white"/>
        <path d="M100 120 L104 150 L120 140 L110 160 L100 195 L90 160 L80 140 L96 150 Z" fill="white"/>
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

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- META BAR -->
      <div class="nu-meta-bar">
        <div class="nu-meta-item">
          <span class="label">Source</span>
          <span>reMarkable Action Item</span>
        </div>
        <div class="nu-meta-item">
          <span class="label">Captured</span>
          <span>2026-04-22</span>
        </div>
        <div class="nu-meta-item">
          <span class="label">Owner</span>
          <span>Aaron C. Norris</span>
        </div>
        <div class="nu-meta-item">
          <span class="nu-priority-pill">Open — Action Required</span>
        </div>
      </div>

      <!-- PAGE TITLE -->
      <h1 class="nu-page-title"><span class="accent">Southern Company</span> — Get Standards Update</h1>
      <p class="nu-page-subtitle">Outreach brief for pulling the current Southern Company equipment standards (bucket trucks, digger derricks, bucket covers, rope, and rigging) so Norris Utilities® stays spec-aligned across its Southern Operating Company territories.</p>

      <!-- BADGES -->
      <div class="nu-badge-row">
        <div class="nu-badge cyan">ACCOUNT INTELLIGENCE</div>
        <div class="nu-badge">SPEC ALIGNMENT</div>
        <div class="nu-badge gold">HIGH-VALUE ACCOUNT</div>
      </div>

      <!-- STATUS STRIP -->
      <div class="nu-status-strip">
        <div class="nu-status-cell">
          <div class="label">Account Tier</div>
          <div class="value highlight">Strategic</div>
        </div>
        <div class="nu-status-cell">
          <div class="label">OpCo Count</div>
          <div class="value">4 States</div>
        </div>
        <div class="nu-status-cell">
          <div class="label">Last Standards Pull</div>
          <div class="value">Needs Refresh</div>
        </div>
        <div class="nu-status-cell">
          <div class="label">Target Close</div>
          <div class="value highlight">30 Days</div>
        </div>
      </div>

      <!-- WHY THIS MATTERS -->
      <div class="nu-action-card">
        <h2 class="nu-section-title"><span class="accent">Why</span> This Matters</h2>
        <p>Southern Company is one of the largest investor-owned utilities in the Southeast — the parent of Alabama Power, Georgia Power, Mississippi Power, and Southern Company Gas. Every unit, attachment, and safety product we sell into their operating companies has to match their current equipment and material standards. Spec documents get revised quarterly, and an out-of-date spec sheet on our end is how deals get bounced at the gate.</p>
        <p style="margin-top: 12px;">Pulling a fresh standards package lets Norris Utilities® pre-qualify FlexPro Armor bucket covers, Skylift boom trucks, Samson Rope, and BSS drill rigs against Southern's current approved-materials list <em>before</em> we quote — not after a rejection.</p>
      </div>

      <!-- ALERT / CALLOUT -->
      <div class="nu-callout">
        <strong>⚡ Critical Detail</strong>
        <p>Each operating company (Alabama Power, Georgia Power, Mississippi Power, Southern Company Gas) can carry <em>its own</em> supplement to the Southern Company master standard. Request the master plus each OpCo supplement — not just one.</p>
      </div>

      <!-- TWO-COLUMN: What to Request / What to Ask -->
      <div class="nu-grid-2">
        <div class="nu-info-card">
          <h3>What to Request</h3>
          <ul>
            <li>Aerial Device / Bucket Truck Standard (current revision)</li>
            <li>Digger Derrick Standard + preferred chassis list</li>
            <li>Approved Materials List — Dielectric Covers &amp; Guards</li>
            <li>Rigging &amp; Rope Standard (Samson Blue Streak, Nystron, AmSteel)</li>
            <li>Insulating Liner / Bucket Cover test spec (ASTM F914 / F2575 applicable)</li>
            <li>PPE &amp; Cover-Up compliance list</li>
            <li>Vendor onboarding checklist / EHS requirements</li>
            <li>Preferred purchasing channel (direct, distributor, or approved dealer)</li>
          </ul>
        </div>
        <div class="nu-info-card">
          <h3>What to Ask About</h3>
          <ul>
            <li>Any revisions since the last published edition</li>
            <li>Pending 2026 standard changes driven by OSHA 1910.269 interpretations</li>
            <li>Whether bucket-cover approvals are OpCo-level or corporate-level</li>
            <li>Who signs off on new-product evaluations (Engineering vs. Supply Chain)</li>
            <li>Field-trial process for non-listed products</li>
            <li>Whether FlexPro Armor is currently listed or needs re-submission</li>
            <li>Preferred file format (PDF package, SharePoint access, or printed copy)</li>
            <li>Any required NDA or supplier agreement to access the documents</li>
          </ul>
        </div>
      </div>

      <!-- ACTION STEPS -->
      <div class="nu-action-card">
        <h2 class="nu-section-title"><span class="accent">Action</span> Plan</h2>
        <ol class="nu-steps">
          <li>
            <strong>Identify the right gatekeeper</strong>
            <p>Route the request through Supply Chain / Category Management first (bucket trucks, aerial devices, rigging). If the standard is engineering-owned, expect a warm hand-off to T&amp;D Engineering Standards.</p>
          </li>
          <li>
            <strong>Send the written ask</strong>
            <p>Short, direct email: who we are, what products we represent, which OpCos we serve, and the exact standards we need. Offer to sign a supplier NDA if required.</p>
          </li>
          <li>
            <strong>Log the response in the master tracker</strong>
            <p>Record the date received, the document revision number, and the internal contact. Add to the Norris Utilities® vendor standards library under <em>southern_company/</em>.</p>
          </li>
          <li>
            <strong>Cross-check our SKUs against the approved list</strong>
            <p>Run FlexPro Armor, NU-BC-2851, NU-BC-2834, Skylift SBA40i-LW / SBA47i-MH, and Samson Rope line items against the AML. Flag any gaps and open a submittal if needed.</p>
          </li>
          <li>
            <strong>Set a standing quarterly refresh</strong>
            <p>Calendar reminder every 90 days to check for new revisions. Standards change silently; the first person who notices wins the quote.</p>
          </li>
        </ol>
      </div>

      <!-- TALKING POINTS -->
      <div class="nu-talking-points">
        <h3>Talking Points for the Call / Email</h3>
        <ol>
          <li>Norris Utilities®, LLC — 3rd-generation utility equipment dealer, Birmingham, Alabama. Authorized distributor for Samson Rope, SE territory rep for Bay Shore Systems, Skylift dealer, and manufacturer of FlexPro Armor bucket covers (handmade in the USA).</li>
          <li>We currently serve 20+ states and actively quote Alabama Power, Georgia Power, and Mississippi Power cooperatives and contractors. We want to make sure every Norris Utilities® quote into Southern Company matches the current spec exactly — not last year's.</li>
          <li>Request: the current aerial-device, digger-derrick, and approved-materials standards, plus any OpCo-level supplements. PDF or SharePoint link both work.</li>
          <li>Offer: We'll sign any vendor or NDA paperwork needed, and we can come to Atlanta for an in-person product review if that's preferable.</li>
          <li>Close with the ask: "Who is the best person on your side to keep us in the loop when these standards revise?"</li>
        </ol>
      </div>

      <!-- CONTACT TABLE -->
      <h2 class="nu-section-title" style="margin-top: 16px;"><span class="accent">Target</span> Contacts &amp; Routes</h2>
      <table class="nu-contact-table">
        <thead>
          <tr>
            <th>Entity</th>
            <th>Function</th>
            <th>Route</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Southern Company Services</strong><br>Atlanta, GA</td>
            <td>Corporate Supply Chain / Category Management</td>
            <td>Direct outreach via supplier portal or category buyer</td>
            <td>High</td>
          </tr>
          <tr>
            <td><strong>Alabama Power</strong><br>Birmingham, AL</td>
            <td>T&amp;D Engineering Standards &amp; Materials</td>
            <td>Local — Aaron can meet in person in Birmingham</td>
            <td>High</td>
          </tr>
          <tr>
            <td><strong>Georgia Power</strong><br>Atlanta, GA</td>
            <td>T&amp;D Standards, Distribution Engineering</td>
            <td>Phone / email intro; tie to existing Atlanta travel with Andy Barron</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td><strong>Mississippi Power</strong><br>Gulfport, MS</td>
            <td>Distribution Standards / Materials</td>
            <td>Phone intro; smaller OpCo, faster response</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td><strong>Southern Company Gas</strong><br>Atlanta, GA</td>
            <td>Field Operations / Fleet &amp; Equipment</td>
            <td>Secondary — only if product fit applies</td>
            <td>Low</td>
          </tr>
        </tbody>
      </table>

      <!-- CTA BLOCK -->
      <div class="nu-action-card" style="margin-top: 36px; text-align: center; background: linear-gradient(135deg, #f8f9fc 0%, #eef1f8 100%);">
        <h2 class="nu-section-title" style="justify-content: center;"><span class="accent">Next</span> Move</h2>
        <p style="max-width: 620px; margin: 0 auto 20px;">Draft the outreach email to Alabama Power Materials &amp; Standards first — it's the closest operating company and the fastest path into the rest of the Southern Company standards library.</p>
        <div class="nu-cta-row" style="justify-content: center;">
          <a href="mailto:acnorris@norrisutilities.com?subject=Southern%20Company%20Standards%20Update%20—%20Outreach%20Draft" class="nu-btn-primary">Draft Outreach Email</a>
          <a href="tel:2055001343" class="nu-btn-secondary">Call to Discuss</a>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-name">Aaron C. Norris, Founder &amp; CEO</div>
    <div class="nu-footer-contact">
      Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>