<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inventory PO Follow-Up — Action Tracker — Norris Utilities®</title>
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
      --nu-warning-amber: #D97706;
      --nu-success-green: #047857;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      pointer-events: none;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.04em;
    }
    .nu-header-eyebrow {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 999px;
      color: var(--nu-cyan);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1140px;
      margin: 0 auto;
      padding: 50px 32px 60px;
    }

    /* PAGE TITLE BLOCK */
    .nu-page-title {
      margin-bottom: 36px;
      padding-bottom: 20px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-page-title .eyebrow {
      display: block;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-page-title h1 {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .nu-page-title h1 span { color: var(--nu-blue); }
    .nu-page-title .meta {
      font-size: 0.95rem;
      color: #555;
      margin-top: 6px;
    }

    /* STATUS BANNER */
    .nu-status-banner {
      display: flex;
      align-items: center;
      gap: 18px;
      background: linear-gradient(135deg, #fff5e6 0%, #fff8ec 100%);
      border: 1px solid #f3d28a;
      border-left: 6px solid var(--nu-warning-amber);
      padding: 20px 24px;
      border-radius: 8px;
      margin-bottom: 36px;
    }
    .nu-status-banner .icon {
      flex-shrink: 0;
      width: 44px; height: 44px;
      background: var(--nu-warning-amber);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.4rem;
    }
    .nu-status-banner .text strong {
      display: block;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-status-banner .text span {
      font-size: 0.92rem;
      color: #5a4a20;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.45rem;
      margin: 36px 0 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* BADGES (Action Steps) */
    .nu-badge-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 24px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .step-num {
      flex-shrink: 0;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
    }

    /* TWO-COLUMN GRID */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 28px;
    }
    @media (max-width: 760px) {
      .nu-grid-2 { grid-template-columns: 1fr; }
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-card .label {
      display: block;
      font-size: 0.72rem;
      font-weight: 700;
      color: #888;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-top: 12px;
      margin-bottom: 4px;
    }
    .nu-card .value {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 400;
    }
    .nu-card .value strong { font-weight: 700; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.97rem;
      color: var(--nu-body-text);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist .box {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
      background: white;
    }

    /* TABLE */
    .nu-table-wrap {
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      margin-bottom: 28px;
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: #fafafd; }

    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .pill-amber { background: #fff3e0; color: var(--nu-warning-amber); }
    .pill-red { background: #ffe5e9; color: var(--nu-alert-red); }
    .pill-green { background: #e0f5ed; color: var(--nu-success-green); }
    .pill-blue { background: #e6e6ff; color: var(--nu-blue); }

    /* CTA BLOCK */
    .nu-cta {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: white;
      padding: 36px;
      border-radius: 12px;
      text-align: center;
      margin: 40px 0 20px;
      box-shadow: 0 6px 24px rgba(0,0,255,0.18);
    }
    .nu-cta h2 {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .nu-cta p {
      font-size: 1rem;
      opacity: 0.95;
      max-width: 650px;
      margin: 0 auto 22px;
    }
    .nu-cta-buttons {
      display: flex;
      gap: 14px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .nu-btn {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary {
      background: white;
      color: var(--nu-blue);
    }
    .nu-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.2); }
    .nu-btn-outline {
      background: transparent;
      color: white;
      border: 2px solid rgba(255,255,255,0.7);
    }
    .nu-btn-outline:hover { background: rgba(255,255,255,0.15); }

    /* SCRIPT BLOCK */
    .nu-script {
      background: var(--nu-white);
      border-left: 5px solid var(--nu-blue);
      border-radius: 0 8px 8px 0;
      padding: 22px 26px;
      margin-bottom: 18px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-script .role {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.16em;
      margin-bottom: 10px;
    }
    .nu-script p {
      font-size: 0.97rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-script p:last-child { margin-bottom: 0; }
    .nu-script p em {
      color: #666;
      font-style: italic;
    }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 28px;
      margin-bottom: 28px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      top: 6px; bottom: 6px;
      left: 7px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .nu-timeline-item {
      position: relative;
      padding: 0 0 22px 12px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -28px; top: 6px;
      width: 16px; height: 16px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid white;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .nu-timeline-item .when {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-timeline-item .what {
      font-size: 0.97rem;
      color: var(--nu-dark-text);
    }
    .nu-timeline-item .what strong { font-weight: 700; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 32px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      font-family: 'Playfair Display', Georgia, serif;
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

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-page-title h1 { font-size: 1.7rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .nu-container { padding: 32px 18px 40px; }
      .nu-cta { padding: 28px 20px; }
      .nu-cta h2 { font-size: 1.3rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-cta { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-card, .nu-table-wrap { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon" aria-label="Phoenix Icon (registered)">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-header-eyebrow">Action Tracker · Internal</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
      <path d="M0,0 L548,46 L720,50 L892,46 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-page-title">
        <span class="eyebrow">reMarkable Action Item · Inventory</span>
        <h1>Follow Up on <span>Inventory Order</span> from Last PO</h1>
        <div class="meta">Source: reMarkable handwritten note · Captured 2026-04-25 · Owner: Aaron C. Norris</div>
      </div>

      <!-- STATUS BANNER -->
      <div class="nu-status-banner">
        <div class="icon">!</div>
        <div class="text">
          <strong>Status — Anxiously Waiting on Vendor Confirmation</strong>
          <span>Action requested in Aaron's note: Follow up on inventory order from last PO. Tone is urgent — supply pipeline is exposed until ETA is locked in.</span>
        </div>
      </div>

      <!-- SECTION 1: ACTION STEPS -->
      <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Steps — In Order</span></h2>
      <div class="nu-badge-list">
        <div class="nu-badge"><span class="step-num">1</span>Pull last PO from QuickBooks — confirm PO #, date, line items, total</div>
        <div class="nu-badge"><span class="step-num">2</span>Identify supplier rep from CC list on PO email — confirm primary + secondary contacts</div>
        <div class="nu-badge"><span class="step-num">3</span>Call rep — ask for production status, ship date, tracking, any back-order risk</div>
        <div class="nu-badge"><span class="step-num">4</span>Send written follow-up email immediately after call — capture answers in writing</div>
        <div class="nu-badge"><span class="step-num">5</span>Update Master Tracker — log call date, ETA, tracking #, rep name</div>
        <div class="nu-badge"><span class="step-num">6</span>Set follow-up reminder — re-check in 48 hours if no tracking yet</div>
      </div>

      <!-- SECTION 2: VENDOR INFO + PO INFO -->
      <h2 class="nu-section-title"><span class="first">PO</span> <span class="rest">Confirmation Worksheet</span></h2>
      <div class="nu-grid-2">
        <div class="nu-card">
          <h3>Last PO — Lookup</h3>
          <span class="label">PO Number</span>
          <span class="value">Pull from QuickBooks (most recent open PO with vendor)</span>
          <span class="label">PO Date</span>
          <span class="value">Confirm against QB record</span>
          <span class="label">Line Items</span>
          <span class="value">SKU · Description · Qty · Unit Cost · Extended</span>
          <span class="label">PO Total</span>
          <span class="value">$ ____ — confirm freight terms (FOB origin / FOB destination)</span>
          <span class="label">Promised Lead Time</span>
          <span class="value">Original ETA quoted at order placement</span>
        </div>
        <div class="nu-card">
          <h3>Vendor Contact</h3>
          <span class="label">Vendor</span>
          <span class="value"><strong>Confirm from PO header</strong></span>
          <span class="label">Primary Rep</span>
          <span class="value">Direct phone + email from PO file</span>
          <span class="label">Secondary Rep / CC</span>
          <span class="value">Always CC the secondary on every reply (per Norris Utilities® standard practice)</span>
          <span class="label">Aaron's Cell</span>
          <span class="value">205-500-1343 — give to rep for direct text updates</span>
          <span class="label">Aaron's Email</span>
          <span class="value">acnorris@norrisutilities.com</span>
        </div>
      </div>

      <!-- VENDOR-SPECIFIC CC RULES -->
      <h2 class="nu-section-title"><span class="first">CC</span> <span class="rest">Rules — Always Both Reps</span></h2>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Primary Contact</th>
              <th>Secondary Contact</th>
              <th>CC Rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BOSS Products</td>
              <td>Troy Gongwer</td>
              <td>Thayne Grove</td>
              <td><span class="pill pill-blue">CC Both</span></td>
            </tr>
            <tr>
              <td>Samson Rope</td>
              <td>Donna Poll</td>
              <td>Sarah Daniels</td>
              <td><span class="pill pill-blue">CC Both</span></td>
            </tr>
            <tr>
              <td>Skylift</td>
              <td>Andrew Jarmoszuk</td>
              <td>Dale Williams · Nick Jarmoszuk Jr.</td>
              <td><span class="pill pill-blue">CC Both</span></td>
            </tr>
            <tr>
              <td>Irby Construction</td>
              <td>Jared Lemoine</td>
              <td>(Gary Wiggs &amp; Scott Argyle retired)</td>
              <td><span class="pill pill-blue">Single Contact</span></td>
            </tr>
            <tr>
              <td>Bay Shore Systems</td>
              <td>Andy Barron</td>
              <td>Herb Minatre (owner)</td>
              <td><span class="pill pill-blue">CC Both on escalations</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- CALL SCRIPT -->
      <h2 class="nu-section-title"><span class="first">Call</span> <span class="rest">Script — Aaron's Voice</span></h2>
      <div class="nu-script">
        <div class="role">Opener</div>
        <p>"[Rep] — Aaron Norris with Norris Utilities®. I'm following up on PO [#____] we placed [date]. Where are we on production and ship date?"</p>
      </div>
      <div class="nu-script">
        <div class="role">Probe — Status</div>
        <p>"Walk me through where the order is right now. Has it shipped, is it staged for shipping, or is it still in production?"</p>
        <p><em>Listen for: production complete, in-staging, partial back-order, full back-order, awaiting raw material.</em></p>
      </div>
      <div class="nu-script">
        <div class="role">Probe — Tracking</div>
        <p>"Once it ships, can you send me tracking the same day? And go ahead and CC [secondary rep] on that email."</p>
      </div>
      <div class="nu-script">
        <div class="role">Probe — Risk</div>
        <p>"Anything on this order that's at risk of slipping further — material shortage, freight, anything? I'd rather know now than find out next week."</p>
      </div>
      <div class="nu-script">
        <div class="role">Close</div>
        <p>"Appreciate it. I'll send you a quick email summarizing what we just confirmed so we both have it in writing. Y'all earn the business by being straight with me, and I appreciate that."</p>
        <p><em>Sincerely,</em><br>Aaron C. Norris</p>
      </div>

      <!-- WRITTEN FOLLOW-UP EMAIL -->
      <h2 class="nu-section-title"><span class="first">Email</span> <span class="rest">Template — Send After Call</span></h2>
      <div class="nu-card" style="margin-bottom:28px;">
        <span class="label">Subject Line</span>
        <span class="value"><strong>Following up — PO #____ status confirmation</strong></span>

        <span class="label">To / CC</span>
        <span class="value">[Primary Rep] · CC: [Secondary Rep] · CC: acnorris@norrisutilities.com</span>

        <span class="label">Body</span>
        <div style="margin-top:8px; padding:18px; background:#fafafd; border-radius:6px; border:1px solid #e5e5ea;">
          <p style="margin-bottom:10px;">[Rep first name] —</p>
          <p style="margin:0 0 10px 1.2em;">Following up on our call today. Confirming what we discussed on PO #____ placed [date]:</p>
          <p style="margin:0 0 10px 2em;">• Production status: [____]</p>
          <p style="margin:0 0 10px 2em;">• Expected ship date: [____]</p>
          <p style="margin:0 0 10px 2em;">• Tracking will come to me and [secondary rep] same day as shipment</p>
          <p style="margin:0 0 10px 2em;">• No back-order risk identified / [risk noted: ____]</p>
          <p style="margin:0 0 10px 1.2em;">If anything changes between now and ship date, please give me a heads up. Customers are anxiously waiting on this inventory and I want to keep them informed.</p>
          <p style="margin:0 0 10px 1.2em;">Appreciate y'all.</p>
          <p style="margin:14px 0 0 0;">Sincerely,</p>
          <p style="margin:2px 0 0 1.2em;">Aaron C. Norris<br>Founder &amp; CEO<br>Norris Utilities, LLC<br>Cell: 205-500-1343<br>acnorris@norrisutilities.com</p>
        </div>
      </div>

      <!-- WHAT-IF MATRIX -->
      <h2 class="nu-section-title"><span class="first">What-If</span> <span class="rest">Decision Matrix</span></h2>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>Vendor Says</th>
              <th>Aaron's Response</th>
              <th>Update Tracker?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"Shipped, tracking attached"</td>
              <td>Forward to CB. Update Master Tracker. Notify customers their items are on the way.</td>
              <td><span class="pill pill-green">Yes — Shipped</span></td>
            </tr>
            <tr>
              <td>"Ships next week"</td>
              <td>Get exact day. Set 48-hour reminder for confirmation. Notify any waiting customer of new ETA.</td>
              <td><span class="pill pill-amber">Yes — In Production</span></td>
            </tr>
            <tr>
              <td>"Back-ordered — no firm date"</td>
              <td>Escalate to secondary rep + owner if available. Identify alternate supplier. Notify customers proactively.</td>
              <td><span class="pill pill-red">Yes — Back-Order Risk</span></td>
            </tr>
            <tr>
              <td>"Partial ship available"</td>
              <td>Take the partial. Confirm balance ETA. Decide allocation among waiting customers (longest waiting first).</td>
              <td><span class="pill pill-amber">Yes — Partial</span></td>
            </tr>
            <tr>
              <td>Rep unreachable</td>
              <td>Email both primary and secondary. Call main office. Escalate to owner-level contact if 24 hrs silent.</td>
              <td><span class="pill pill-red">Flag — Escalation</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Today's</span> <span class="rest">Verification Checklist</span></h2>
      <div class="nu-card" style="margin-bottom:28px;">
        <ul class="nu-checklist">
          <li><span class="box"></span><span><strong>QuickBooks pulled</strong> — last PO #, date, line items, total confirmed</span></li>
          <li><span class="box"></span><span><strong>Vendor rep contact verified</strong> — primary + secondary names and emails on file</span></li>
          <li><span class="box"></span><span><strong>Phone call placed</strong> — production status, ship date, tracking commitment captured</span></li>
          <li><span class="box"></span><span><strong>Follow-up email sent</strong> — primary rep + secondary CC'd + Aaron self-CC'd</span></li>
          <li><span class="box"></span><span><strong>Master Tracker updated</strong> — call date, rep, ETA, tracking expected, risk flag if any</span></li>
          <li><span class="box"></span><span><strong>Waiting customers notified</strong> — proactive ETA update sent (CB to draft for Aaron review)</span></li>
          <li><span class="box"></span><span><strong>48-hour follow-up reminder set</strong> — re-check tracking if not received</span></li>
        </ul>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Today's</span> <span class="rest">Timeline</span></h2>
      <div class="nu-timeline">
        <div class="nu-timeline-item">
          <div class="when">04:30 — Morning Block</div>
          <div class="what"><strong>Pull last PO from QuickBooks.</strong> Note PO #, date, vendor, line items, total. Open Master Tracker on second monitor.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="when">07:30 — Vendor Hours Open</div>
          <div class="what"><strong>Place call to vendor rep.</strong> Use script above. Take notes inline on this page (printable). Get firm ship date.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="when">08:00 — Documentation</div>
          <div class="what"><strong>Send written follow-up email.</strong> CC secondary rep, self-CC for record. Save in QuickBooks attachment.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="when">08:30 — Customer Comms</div>
          <div class="what"><strong>Hand to CB:</strong> draft customer notification with confirmed ETA. Aaron reviews before send (CB Tier-1 trust rule).</div>
        </div>
        <div class="nu-timeline-item">
          <div class="when">+48 Hours</div>
          <div class="what"><strong>Verify tracking received.</strong> If silent, escalate to secondary rep and owner-level contact.</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="nu-cta">
        <h2>Lock the ETA. Tell the Customer.</h2>
        <p>Anxiously waiting customers don't need apologies — they need a date. Get the date today, communicate it within the hour, and the trust holds.</p>
        <div class="nu-cta-buttons">
          <a class="nu-btn nu-btn-primary" href="tel:2055001343">Aaron's Cell: 205-500-1343</a>
          <a class="nu-btn nu-btn-outline" href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a>
        </div>
      </div>

      <!-- NOTES -->
      <h2 class="nu-section-title"><span class="first">Standing</span> <span class="rest">Operating Principles</span></h2>
      <div class="nu-grid-2">
        <div class="nu-card">
          <h3>Honesty Over Optimism</h3>
          <p style="font-size:0.95rem; color:var(--nu-body-text);">Never tell a customer "should be next week" if the rep didn't say next week. Repeat the rep's words exactly. If the answer is uncertain, the answer is uncertain — and that's a fine answer to give.</p>
        </div>
        <div class="nu-card">
          <h3>Proactive Beats Reactive</h3>
          <p style="font-size:0.95rem; color:var(--nu-body-text);">If a customer is anxiously waiting, they should hear from us before they have to ask. The follow-up call to the vendor exists so we can make the call to the customer.</p>
        </div>
        <div class="nu-card">
          <h3>Always Document</h3>
          <p style="font-size:0.95rem; color:var(--nu-body-text);">Verbal commitments evaporate. Send the email. CC the secondary. Save to QuickBooks. Update Master Tracker. The system runs because the records are clean.</p>
        </div>
        <div class="nu-card">
          <h3>CC Both Reps Always</h3>
          <p style="font-size:0.95rem; color:var(--nu-body-text);">For BOSS, Samson, and Skylift, every email goes to both contacts. It eliminates "I didn't see that" and protects continuity when one rep is out.</p>
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