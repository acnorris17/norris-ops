<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Southern Company Standards Update — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --nu-blue: #0000FF;
      --nu-blue-dark: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-success: #0E8A4E;
      --nu-warning: #D97706;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, var(--nu-blue-dark) 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-wrap {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.25));
    }
    .nu-phoenix-wrap svg { width: 100%; height: 100%; }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.78em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.78em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* GHOST WATERMARK ON HEADER */
    .nu-ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 50px 20px 70px;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }

    /* ACTION CARD HEADER */
    .action-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
      margin-bottom: 28px;
    }
    .meta-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      border: 1px solid var(--nu-medium-gray);
      padding: 8px 16px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .meta-pill.priority {
      background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);
      color: #8B4513;
      border-color: #FFCC80;
    }
    .meta-pill.source {
      background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
      color: var(--nu-blue-dark);
      border-color: #90CAF9;
    }
    .meta-pill.status {
      background: linear-gradient(135deg, #FFF9C4 0%, #FFF59D 100%);
      color: #6B5B00;
      border-color: #FFE082;
    }

    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      text-align: center;
      margin-bottom: 10px;
      line-height: 1.2;
    }
    .page-title .first-word { color: var(--nu-blue-dark); }

    .page-subtitle {
      text-align: center;
      color: var(--nu-body-text);
      font-size: 1.1rem;
      max-width: 720px;
      margin: 0 auto 40px;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 32px 0 16px;
      line-height: 1.3;
      border-bottom: 3px solid var(--nu-cyan);
      padding-bottom: 10px;
    }
    .nu-section-title .first-word { color: var(--nu-blue-dark); }
    .nu-section-title .rest { color: var(--nu-dark-text); }

    /* OBJECTIVE CARD */
    .objective-card {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 50%, var(--nu-blue-dark) 100%);
      color: var(--nu-white);
      padding: 32px 28px;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(0, 0, 51, 0.25);
    }
    .objective-card::before {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
    }
    .objective-card > * { position: relative; z-index: 2; }
    .objective-label {
      font-size: 0.8rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .objective-statement {
      font-size: 1.35rem;
      font-weight: 400;
      line-height: 1.5;
      max-width: 800px;
    }
    .objective-statement strong { font-weight: 900; color: var(--nu-cyan); }

    /* CONTEXT GRID */
    .context-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-bottom: 10px;
    }
    .context-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .context-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .context-card h3 {
      font-weight: 900;
      font-size: 0.85rem;
      color: var(--nu-blue-dark);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }
    .context-card p {
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      line-height: 1.55;
    }

    /* STEP LIST */
    .steps {
      counter-reset: step-counter;
      list-style: none;
      margin-top: 8px;
    }
    .steps li {
      counter-increment: step-counter;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 22px 20px 72px;
      margin-bottom: 12px;
      position: relative;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }
    .steps li::before {
      content: counter(step-counter);
      position: absolute;
      left: 18px;
      top: 18px;
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.1rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 255, 0.3);
    }
    .steps li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 4px;
    }
    .steps li span {
      color: var(--nu-body-text);
      font-size: 0.96rem;
    }

    /* QUESTIONS TABLE */
    .qa-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-top: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .qa-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-blue-dark) 100%);
      color: var(--nu-white);
    }
    .qa-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 900;
      font-size: 0.88rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .qa-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .qa-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .qa-table td.num {
      font-weight: 900;
      color: var(--nu-blue-dark);
      width: 48px;
    }

    /* CONTACT CALLOUT */
    .contact-callout {
      background: linear-gradient(135deg, #E8F4FF 0%, #F0F9FF 100%);
      border: 1px solid #BBDEFB;
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 26px;
      margin-top: 12px;
    }
    .contact-callout h3 {
      color: var(--nu-blue-dark);
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 8px;
    }
    .contact-callout p {
      color: var(--nu-dark-text);
      font-size: 0.96rem;
      line-height: 1.65;
    }
    .contact-callout a {
      color: var(--nu-blue);
      font-weight: 700;
      text-decoration: none;
    }
    .contact-callout a:hover { text-decoration: underline; }

    /* WHY IT MATTERS */
    .why-matters {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 26px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .why-matters ul {
      list-style: none;
      padding: 0;
    }
    .why-matters li {
      position: relative;
      padding-left: 28px;
      margin-bottom: 10px;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
    }
    .why-matters li::before {
      content: '';
      position: absolute;
      left: 0; top: 8px;
      width: 14px; height: 14px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }

    /* EMAIL DRAFT BLOCK */
    .email-draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      overflow: hidden;
      margin-top: 12px;
    }
    .email-header {
      background: var(--nu-light-gray);
      padding: 14px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
      color: var(--nu-dark-text);
    }
    .email-header div { margin-bottom: 4px; }
    .email-header strong {
      display: inline-block;
      min-width: 70px;
      color: var(--nu-blue-dark);
      font-weight: 900;
    }
    .email-body {
      padding: 24px 26px;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      line-height: 1.7;
      white-space: pre-wrap;
      font-family: var(--font-primary);
    }
    .email-body .greeting { margin-bottom: 12px; }
    .email-body .para { margin-bottom: 14px; padding-left: 0; }
    .email-body .close { margin-top: 18px; }
    .email-body .sig { margin-top: 12px; font-size: 0.92rem; color: var(--nu-body-text); }

    /* NEXT ACTION BAR */
    .next-action {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 28px;
      margin-top: 40px;
      text-align: center;
      box-shadow: 0 8px 24px rgba(0, 0, 255, 0.25);
    }
    .next-action h2 {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 8px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .next-action p {
      font-size: 1.05rem;
      max-width: 640px;
      margin: 0 auto 18px;
      opacity: 0.95;
    }
    .action-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
    }
    .btn {
      display: inline-block;
      padding: 12px 26px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
      letter-spacing: 0.03em;
    }
    .btn-primary {
      background: var(--nu-white);
      color: var(--nu-blue);
    }
    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .btn-outline {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }
    .btn-outline:hover {
      background: rgba(255,255,255,0.15);
      transform: translateY(-1px);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
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

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .page-title { font-size: 1.7rem; }
      .objective-statement { font-size: 1.1rem; }
      .steps li { padding-left: 62px; }
      .qa-table th, .qa-table td { padding: 10px 12px; font-size: 0.9rem; }
    }

    @media print {
      body { background: white; }
      .nu-header, .next-action, .nu-footer {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .next-action, .action-buttons { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-ghost-phoenix" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 10 L110 40 L140 20 L120 50 L160 40 L130 70 L150 100 L110 80 L100 120 L90 80 L50 100 L70 70 L40 40 L80 50 L60 20 L90 40 Z" fill="white"/>
      <path d="M100 110 L104 140 L120 130 L110 150 L100 190 L90 150 L80 130 L96 140 Z" fill="white"/>
    </svg>
    <div class="nu-phoenix-wrap">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
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
    <div class="container">

      <div class="action-meta">
        <span class="meta-pill source">reMarkable Action Item</span>
        <span class="meta-pill priority">Priority — Open</span>
        <span class="meta-pill status">Status — Awaiting Contact</span>
      </div>

      <h1 class="page-title"><span class="first-word">Get</span> Southern Company Standards Update</h1>
      <p class="page-subtitle">Secure the current Southern Company equipment and material standards so every quote, cover, and truck spec we send into their footprint lands inside the lines — the first time.</p>

      <!-- OBJECTIVE -->
      <div class="objective-card">
        <div class="objective-label">Objective</div>
        <div class="objective-statement">
          Obtain the <strong>current Southern Company Standards</strong> — the published specification document that governs approved equipment, materials, and construction practices across the Southern Company operating companies (Alabama Power, Georgia Power, Mississippi Power, Southern Company Gas) — and confirm any revisions that have been issued since our last reference copy.
        </div>
      </div>

      <!-- WHY IT MATTERS -->
      <h2 class="nu-section-title"><span class="first-word">Why</span> <span class="rest">This Matters</span></h2>
      <div class="why-matters">
        <ul>
          <li><strong>Alabama Power is the anchor utility in our home territory.</strong> Every bucket cover, Skylift, Samson Rope spec, and BSS drill rig sold into Southern Company's service area must trace back to their approved standards.</li>
          <li><strong>Standards drive approved vendor lists.</strong> An out-of-date reference can waste weeks quoting a product that has already been deprecated or superseded at the utility level.</li>
          <li><strong>Procurement alignment.</strong> Irby (Jared Lemoine) and our other stocking distributors build their stocking plans off these standards — keeping us current keeps our pricing competitive and our lead times honest.</li>
          <li><strong>FlexPro Armor fit and coverage.</strong> Standards updates frequently touch approved fiberglass boom and bucket geometry — we need to confirm our NU-BC-2851 and NU-BC-2834 cover dimensions still match the fleet actually running in the field.</li>
          <li><strong>Safety language changes drive buyer behavior.</strong> When Southern Company tightens a standard (fall protection, de-energization, dielectric testing intervals), buyers shift dollars quickly. We want to be in front of that, not reacting to it.</li>
        </ul>
      </div>

      <!-- CONTEXT -->
      <h2 class="nu-section-title"><span class="first-word">Context</span> <span class="rest">&amp; Key Facts</span></h2>
      <div class="context-grid">
        <div class="context-card">
          <h3>Who Issues The Standard</h3>
          <p>Southern Company issues engineering and construction standards at the holding-company level, with operating-company-specific overlays at Alabama Power, Georgia Power, Mississippi Power, and Southern Company Gas.</p>
        </div>
        <div class="context-card">
          <h3>Territory Covered</h3>
          <p>Alabama, Georgia, Mississippi, and portions of Florida and Tennessee. This is the heart of Norris Utilities® home territory and a top-three revenue driver across FlexPro Armor and Skylift programs.</p>
        </div>
        <div class="context-card">
          <h3>Where Our Products Live In The Standard</h3>
          <p>Bucket covers, fiberglass dielectric equipment, synthetic rope (Samson), aerial lift spec approvals (Skylift), and drilling equipment category listings (Bay Shore Systems).</p>
        </div>
        <div class="context-card">
          <h3>Revision Cadence</h3>
          <p>Southern Company publishes standards revisions on a rolling basis. Confirm the version number and revision date of the copy we are working from, then request any bulletins issued since.</p>
        </div>
      </div>

      <!-- STEPS -->
      <h2 class="nu-section-title"><span class="first-word">Execution</span> <span class="rest">Steps</span></h2>
      <ol class="steps">
        <li>
          <strong>Pull our current reference copy.</strong>
          <span>Locate the Southern Company Standards document already on file and note the version number and revision date printed on the cover sheet. This sets the baseline for the update request.</span>
        </li>
        <li>
          <strong>Identify the right point of contact inside Southern Company.</strong>
          <span>Target the Supply Chain / Standards Engineering group at Alabama Power first (home territory, closest relationships). Secondary path: Georgia Power standards desk. Tertiary path: ask Irby (Jared Lemoine) who their standards liaison is — distributors almost always know.</span>
        </li>
        <li>
          <strong>Request the current revision in writing.</strong>
          <span>Email a short, direct request asking for the latest revision of the Southern Company equipment and material standards, plus any bulletins issued since our reference version. Keep it professional and brief — no sales pitch attached to the request.</span>
        </li>
        <li>
          <strong>Log the response into the ops portal.</strong>
          <span>Drop the updated standard (or links to it) into ~/norris-ops/internal/ with a dated filename. Update the master tracker with the revision number received and the date it arrived.</span>
        </li>
        <li>
          <strong>Run a diff against the prior version.</strong>
          <span>Identify every change that touches: approved equipment lists, bucket and boom geometry, dielectric testing intervals, fall protection language, synthetic rope specifications, and aerial lift approvals. These are the lines that move money.</span>
        </li>
        <li>
          <strong>Brief the distribution channel.</strong>
          <span>Send a short summary to Irby (Jared Lemoine), Troy Gongwer and Thayne Grove at BOSS Products, and Donna Poll and Sarah Daniels at Samson Rope — each on the items in the revision that affect their product lines. CC both contacts on each vendor per standing rule.</span>
        </li>
        <li>
          <strong>Update internal pricing and spec sheets.</strong>
          <span>Refresh any Norris Utilities® quote templates, line card entries, and FlexPro Armor sizing references that are affected by the revision. No customer quote should go out referencing a superseded spec.</span>
        </li>
      </ol>

      <!-- QUESTIONS TO ASK -->
      <h2 class="nu-section-title"><span class="first-word">Questions</span> <span class="rest">To Ask On The Call</span></h2>
      <table class="qa-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="num">1</td>
            <td>What is the current revision number and issue date of the Southern Company Standards master document?</td>
            <td>Establishes the authoritative version we should be working from.</td>
          </tr>
          <tr>
            <td class="num">2</td>
            <td>Have any bulletins, addenda, or interim revisions been issued since that date?</td>
            <td>Interim bulletins are how standards actually evolve between full revisions.</td>
          </tr>
          <tr>
            <td class="num">3</td>
            <td>Who on the standards engineering team owns the equipment and material sections relevant to aerial lifts, fiberglass booms, and synthetic rope?</td>
            <td>Builds the direct relationship so future questions route faster.</td>
          </tr>
          <tr>
            <td class="num">4</td>
            <td>Are there any sections currently under review or scheduled for revision in the next 90 days?</td>
            <td>Tells us where the puck is going — early visibility on upcoming changes.</td>
          </tr>
          <tr>
            <td class="num">5</td>
            <td>What is the preferred channel for distributors and approved vendors to submit product data packages for standards review?</td>
            <td>Opens the door for FlexPro Armor, Skylift, and BSS submissions on the correct path.</td>
          </tr>
          <tr>
            <td class="num">6</td>
            <td>Do the operating companies (Alabama Power, Georgia Power, Mississippi Power) maintain overlays, or is the holding-company document controlling?</td>
            <td>Determines whether one document or four need to be tracked.</td>
          </tr>
          <tr>
            <td class="num">7</td>
            <td>Is there a standards distribution list we can be added to for automatic notification of future revisions?</td>
            <td>Turns a one-time task into a maintained signal — exactly what we want.</td>
          </tr>
        </tbody>
      </table>

      <!-- EMAIL DRAFT -->
      <h2 class="nu-section-title"><span class="first-word">Draft</span> <span class="rest">Email — For Aaron's Review</span></h2>
      <div class="email-draft">
        <div class="email-header">
          <div><strong>To:</strong> Southern Company Standards Engineering — contact to confirm</div>
          <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          <div><strong>Subject:</strong> Request — Current Revision Of Southern Company Equipment And Material Standards</div>
        </div>
        <div class="email-body"><div class="greeting">Name —</div><div class="para">I'm reaching out from Norris Utilities®, a distributor and authorized rep serving Southern Company operating companies across Alabama, Georgia, and Mississippi. We distribute FlexPro Armor bucket covers, Skylift aerial devices, Samson Rope synthetic lines, and Bay Shore Systems drill rigs, and we want to make sure every product we bring into your footprint aligns with the current Southern Company standards.</div><div class="para">Would you please share the current revision number and issue date of the Southern Company equipment and material standards, along with any bulletins or addenda issued since? If there is a distribution list we can be added to for future revisions, I would appreciate the path to get on it.</div><div class="para">Happy to route any follow-up through your preferred channel. We want to earn the business the right way — with product that matches your specs the first time, every time.</div><div class="close">Sincerely,</div><div class="sig">Aaron C. Norris<br>Founder &amp; CEO<br>Norris Utilities, LLC<br>Cell: 205-500-1343<br>acnorris@norrisutilities.com</div></div>
      </div>

      <!-- CONTACT -->
      <h2 class="nu-section-title"><span class="first-word">Internal</span> <span class="rest">Points Of Contact</span></h2>
      <div class="contact-callout">
        <h3>Confirm Before Sending</h3>
        <p>Before the email goes out, confirm the right Southern Company standards engineering contact name through one of the following paths:</p>
        <p>
          • <strong>Irby Construction:</strong> Jared Lemoine — primary distributor contact, will know the Alabama Power and Mississippi Power standards liaisons.<br>
          • <strong>Alabama Power direct:</strong> Route through Supply Chain / Materials Engineering.<br>
          • <strong>Internal records:</strong> Check previous correspondence in Gmail and the master tracker for any existing Southern Company engineering contact already on file.
        </p>
      </div>

      <!-- NEXT ACTION -->
      <div class="next-action">
        <h2>Next Action</h2>
        <p>Confirm the Southern Company standards engineering contact, send the draft request email today, and log the response into the ops portal the moment it arrives.</p>
        <div class="action-buttons">
          <a href="mailto:acnorris@norrisutilities.com?subject=Southern%20Company%20Standards%20Update%20%E2%80%94%20Status" class="btn btn-primary">Email Aaron With Status</a>
          <a href="tel:2055001343" class="btn btn-outline">Call 205-500-1343</a>
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