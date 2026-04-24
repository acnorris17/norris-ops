<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Water Intrusion Remediation — Action Item — Norris Utilities®</title>
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
      --nu-alert-red: #C41E3A;
      --nu-alert-amber: #D97706;
      --nu-success-green: #059669;
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
        linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      background-size: 40px 40px, 40px 40px, 60px 60px, 80px 80px;
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
    .nu-header > * { position: relative; z-index: 2; }

    /* Ghost phoenix watermark */
    .nu-header .nu-ghost-phoenix {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
      height: auto;
      opacity: 0.07;
      z-index: 1;
      fill: #ffffff;
    }

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
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ══ WHITE CHEVRON TRANSITION (asymmetric, apex ~38% from left) ══ */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 0 0 20px 0;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 36px 60px;
      position: relative;
      z-index: 1;
    }

    /* ══ ACTION ITEM HERO ══ */
    .action-hero {
      background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
      border-left: 6px solid var(--nu-alert-red);
      border-radius: 8px;
      padding: 32px 36px;
      margin-bottom: 36px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }
    .action-hero-label {
      display: inline-block;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 3px;
      margin-bottom: 14px;
    }
    .action-hero h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.2;
    }
    .action-hero h1 .accent {
      color: var(--nu-blue);
    }
    .action-hero-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .action-hero-meta .meta-item {
      display: flex;
      flex-direction: column;
    }
    .action-hero-meta .meta-label {
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      margin-bottom: 4px;
    }
    .action-hero-meta .meta-value {
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ SECTION ══ */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-section-title .first-word {
      color: var(--nu-blue);
    }
    .nu-section-subtitle {
      font-size: 0.95rem;
      color: #666;
      margin-bottom: 22px;
    }

    /* ══ CHEVRON BADGE (phase steps) ══ */
    .phase-steps {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .phase-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 36px 18px 22px;
      clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%, 24px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .phase-badge .phase-num {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
      flex-shrink: 0;
      font-size: 1rem;
    }
    .phase-badge .phase-text {
      flex: 1;
    }
    .phase-badge .phase-title {
      display: block;
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 2px;
    }
    .phase-badge .phase-sub {
      display: block;
      font-weight: 400;
      font-size: 0.82rem;
      color: rgba(255,255,255,0.75);
    }

    /* ══ TWO-COL CARDS ══ */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .nu-card h3 .icon {
      width: 22px;
      height: 22px;
      fill: var(--nu-blue);
      flex-shrink: 0;
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      padding: 6px 0 6px 18px;
      position: relative;
      font-size: 0.92rem;
      color: var(--nu-body-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 4px;
      font-size: 1.2rem;
      line-height: 1.2;
    }

    /* ══ SIGNS TABLE ══ */
    .signs-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .signs-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .signs-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .signs-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .signs-table tbody tr:last-child td { border-bottom: none; }
    .signs-table tbody tr:hover { background: var(--nu-light-gray); }
    .severity-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 0.72rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .severity-high { background: #FEE2E2; color: var(--nu-alert-red); }
    .severity-med { background: #FEF3C7; color: var(--nu-alert-amber); }
    .severity-low { background: #D1FAE5; color: var(--nu-success-green); }

    /* ══ CONTRACTOR CHECKLIST ══ */
    .checklist {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px 30px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .checklist ul {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 12px 0 12px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 14px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 3px;
    }
    .checklist li span {
      color: #666;
      font-size: 0.88rem;
    }

    /* ══ QUOTE PANEL ══ */
    .quote-panel {
      background: linear-gradient(135deg, #f0f7ff 0%, #e6f4ff 100%);
      border-left: 5px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 22px 26px;
      margin: 20px 0;
      font-size: 0.95rem;
    }
    .quote-panel strong {
      color: var(--nu-blue);
      font-weight: 900;
      display: block;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.8rem;
    }

    /* ══ BUTTONS ══ */
    .button-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 20px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 46px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
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
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 20px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.03em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 36px 20px 40px; }
      .action-hero { padding: 24px 22px; }
      .action-hero h1 { font-size: 1.5rem; }
      .phase-badge {
        clip-path: none;
        border-radius: 6px;
        padding: 16px 20px;
      }
      .signs-table th, .signs-table td { padding: 10px 12px; font-size: 0.82rem; }
    }
    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .signs-table, .checklist, .action-hero { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .button-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-ghost-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z"/>
    </svg>
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION — asymmetric apex at ~38% -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ACTION HERO -->
      <section class="action-hero">
        <span class="action-hero-label">reMarkable Action Item — Open</span>
        <h1><span class="accent">Water Intrusion</span> — Professional Waterproofing Required</h1>
        <p style="font-size: 1.05rem; color: var(--nu-body-text); margin-top: 6px;">
          Address active water intrusion issue at Norris Utilities® property. Scope a qualified waterproofing contractor, document the damage, and remediate before secondary damage (mold, drywall failure, structural compromise) sets in.
        </p>
        <div class="action-hero-meta">
          <div class="meta-item">
            <span class="meta-label">Logged</span>
            <span class="meta-value">2026-04-23</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Owner</span>
            <span class="meta-value">Aaron C. Norris</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Priority</span>
            <span class="meta-value" style="color: var(--nu-alert-red);">High — Time-Sensitive</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Source</span>
            <span class="meta-value">reMarkable handwritten note</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Status</span>
            <span class="meta-value">Contractor quotes pending</span>
          </div>
        </div>
      </section>

      <!-- PHASE PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Remediation</span> Phases</h2>
        <p class="nu-section-subtitle">Move in this sequence. Do not skip the documentation step — insurance and future resale both need it.</p>
        <div class="phase-steps">
          <div class="phase-badge">
            <div class="phase-num">1</div>
            <div class="phase-text">
              <span class="phase-title">Stop the Active Leak</span>
              <span class="phase-sub">Identify visible source, place buckets/tarps, shut off any plumbing feed if plumbing-related. Do this today.</span>
            </div>
          </div>
          <div class="phase-badge">
            <div class="phase-num">2</div>
            <div class="phase-text">
              <span class="phase-title">Document Before Touching</span>
              <span class="phase-sub">Dated photos/video of every affected surface — walls, floor, ceiling, exterior grading, gutters, any visible staining. Narrate conditions.</span>
            </div>
          </div>
          <div class="phase-badge">
            <div class="phase-num">3</div>
            <div class="phase-text">
              <span class="phase-title">Dry Out &amp; Mitigate</span>
              <span class="phase-sub">Fans, dehumidifier, open cavities only if safe. If standing water &gt; 24 hrs, engage a water mitigation firm before mold colonizes (48–72 hr window).</span>
            </div>
          </div>
          <div class="phase-badge">
            <div class="phase-num">4</div>
            <div class="phase-text">
              <span class="phase-title">Scope Professional Waterproofing</span>
              <span class="phase-sub">Minimum 3 written quotes. Interior vs. exterior waterproofing, French drain, sump pump, foundation crack injection — the diagnosis dictates the cure.</span>
            </div>
          </div>
          <div class="phase-badge">
            <div class="phase-num">5</div>
            <div class="phase-text">
              <span class="phase-title">Repair &amp; Restore</span>
              <span class="phase-sub">Drywall, insulation, flooring, paint — only after the source is permanently sealed and the cavity is verified dry with a moisture meter.</span>
            </div>
          </div>
          <div class="phase-badge">
            <div class="phase-num">6</div>
            <div class="phase-text">
              <span class="phase-title">Insurance &amp; Warranty</span>
              <span class="phase-sub">File claim with carrier. Retain transferable waterproofing warranty for future resale value. Log final invoice in master tracker.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- WARNING SIGNS TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Severity</span> Indicators</h2>
        <p class="nu-section-subtitle">Use this table when walking the property. If two or more High-severity indicators are present, skip to Phase 3 immediately.</p>
        <table class="signs-table">
          <thead>
            <tr>
              <th>Observation</th>
              <th>What It Points To</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Active drip or standing water after rain</td>
              <td>Roof, flashing, or foundation breach — active path</td>
              <td><span class="severity-pill severity-high">High</span></td>
            </tr>
            <tr>
              <td>Soft or sagging drywall, bubbled paint</td>
              <td>Sustained saturation, likely hidden mold behind surface</td>
              <td><span class="severity-pill severity-high">High</span></td>
            </tr>
            <tr>
              <td>Musty or earthy odor in a room or closet</td>
              <td>Mold VOCs — visible colonies may be hidden in cavity</td>
              <td><span class="severity-pill severity-high">High</span></td>
            </tr>
            <tr>
              <td>Efflorescence (white powder) on basement walls</td>
              <td>Moisture migrating through masonry from outside</td>
              <td><span class="severity-pill severity-med">Medium</span></td>
            </tr>
            <tr>
              <td>Rust streaks on fasteners, nail heads, or steel</td>
              <td>Chronic humidity behind the finish surface</td>
              <td><span class="severity-pill severity-med">Medium</span></td>
            </tr>
            <tr>
              <td>Discolored grout, tile, or warped wood trim</td>
              <td>Intermittent exposure — often gutter or grading issue</td>
              <td><span class="severity-pill severity-med">Medium</span></td>
            </tr>
            <tr>
              <td>Light staining on ceiling, dry to the touch</td>
              <td>Historic event — verify still inactive with moisture meter</td>
              <td><span class="severity-pill severity-low">Low</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- LIKELY CAUSES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Likely</span> Causes to Rule Out</h2>
        <p class="nu-section-subtitle">The contractor will diagnose, but walk in with a short list so you can pressure-test their answer.</p>
        <div class="card-grid">
          <div class="nu-card">
            <h3>
              <svg class="icon" viewBox="0 0 24 24"><path d="M12 2 L3 9 v13 h18 V9 Z M12 5.3 L18.5 10 V20 H5.5 V10 Z"/></svg>
              Roof &amp; Flashing
            </h3>
            <ul>
              <li>Failed shingles, exposed nail heads, lifted ridge cap</li>
              <li>Cracked or pulled flashing at chimney, vent stacks, skylights</li>
              <li>Clogged or detached gutters dumping water at the foundation</li>
              <li>Ice damming (if applicable) forcing water backward under shingles</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>
              <svg class="icon" viewBox="0 0 24 24"><path d="M3 12 L12 3 L21 12 V21 H3 Z M5 14 V19 H19 V14 L12 7 Z"/></svg>
              Foundation &amp; Grading
            </h3>
            <ul>
              <li>Cracks in foundation wall — hairline vs. structural</li>
              <li>Negative grading pushing runoff toward the building</li>
              <li>Missing or crushed perimeter drain tile</li>
              <li>Failed or absent exterior waterproofing membrane</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>
              <svg class="icon" viewBox="0 0 24 24"><path d="M8 2 v4 H6 v16 h12 V6 h-2 V2 Z M10 4 h4 v4 h-4 Z M8 10 h8 v10 H8 Z"/></svg>
              Plumbing &amp; Fixtures
            </h3>
            <ul>
              <li>Slow supply-line leak behind drywall — check meter with all fixtures off</li>
              <li>Failed wax ring or shower pan</li>
              <li>HVAC condensate drain backup</li>
              <li>Water heater corrosion, pan overflow</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>
              <svg class="icon" viewBox="0 0 24 24"><path d="M4 6 h16 v12 H4 Z M6 8 v8 h12 V8 Z M8 10 h8 v2 H8 Z M8 14 h6 v2 H8 Z"/></svg>
              Windows &amp; Envelope
            </h3>
            <ul>
              <li>Failed window pan flashing or caulk</li>
              <li>Separated siding, EIFS cracks, failed brick weep holes</li>
              <li>Door thresholds without proper kick-out flashing</li>
              <li>Deck ledger board improperly flashed to wall</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CONTRACTOR QUALIFICATION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Contractor</span> Qualification Checklist</h2>
        <p class="nu-section-subtitle">Use this verbatim before signing any waterproofing contract. Verify each item — don't assume.</p>
        <div class="checklist">
          <ul>
            <li>
              <strong>Licensed and insured in Alabama</strong>
              <span>Request current general liability certificate naming Norris Utilities, LLC as certificate holder. Verify license with state board.</span>
            </li>
            <li>
              <strong>Written diagnosis, not just a price</strong>
              <span>Quote must name the mechanism (e.g., hydrostatic pressure through cold joint, roof flashing failure at skylight), not just "waterproof basement $X."</span>
            </li>
            <li>
              <strong>Transferable warranty, minimum 10 years</strong>
              <span>Lifetime-of-owner is weak — transferable adds resale value. Read exclusions. "Acts of God" cannot include ordinary rainfall.</span>
            </li>
            <li>
              <strong>Minimum three local references — completed within last 12 months</strong>
              <span>Call all three. Ask: Did it leak again? Did cleanup match promise? Was pricing honored?</span>
            </li>
            <li>
              <strong>No pressure tactics, no same-day discounts</strong>
              <span>Legitimate waterproofers give you the weekend to read the contract. Walk from anyone who needs a signature today.</span>
            </li>
            <li>
              <strong>Scope separated from optional upgrades</strong>
              <span>Base repair must be priced separately from sump pumps, dehumidifiers, radon systems, or interior finishing.</span>
            </li>
            <li>
              <strong>Payment schedule tied to milestones, not calendar</strong>
              <span>No more than 10% deposit. Final payment only after post-cure inspection with a moisture meter reading on site.</span>
            </li>
            <li>
              <strong>Mold remediation protocol if visible growth is present</strong>
              <span>IICRC S520 standard. Containment, HEPA filtration, third-party clearance testing before reinstalling finishes.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- QUESTIONS TO ASK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Questions</span> for the Bid Walk-Through</h2>
        <div class="quote-panel">
          <strong>Diagnostic</strong>
          Can you show me the exact entry point and explain the water's path from outside to where I'm seeing it inside?
        </div>
        <div class="quote-panel">
          <strong>Method Defense</strong>
          Why is your proposed method (interior drain tile vs. exterior excavation vs. crack injection) the right fit here specifically — not just the one you install most often?
        </div>
        <div class="quote-panel">
          <strong>Failure Modes</strong>
          What happens to your system if the sump pump fails, the power goes out for a week, or we get a 100-year rain event? What's the backup?
        </div>
        <div class="quote-panel">
          <strong>Secondary Damage</strong>
          Have you evaluated for hidden mold, rotted framing, or compromised insulation behind the finish surfaces? What's the plan if you open it up and find more?
        </div>
        <div class="quote-panel">
          <strong>Warranty Claim Reality</strong>
          Walk me through exactly how a warranty claim works: who I call, response time, what's covered, what isn't, and do you still service jobs from 5 years ago?
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Next</span> Actions — This Week</h2>
        <p class="nu-section-subtitle">Three calls and a file — do not let this drift. Water damage compounds daily.</p>
        <div class="card-grid">
          <div class="nu-card">
            <h3>1. Today</h3>
            <ul>
              <li>Photograph every affected area with timestamps</li>
              <li>Contain active leak with buckets, tarps, towels</li>
              <li>Run dehumidifier and fans continuously</li>
              <li>Start a dated log of observations</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>2. Tomorrow</h3>
            <ul>
              <li>Call insurance carrier — open claim number, learn deductible</li>
              <li>Schedule 3 waterproofing contractor site visits</li>
              <li>Schedule 1 independent roofer if roof is a suspect</li>
              <li>Move anything valuable at least 6 ft from affected wall/area</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>3. This Week</h3>
            <ul>
              <li>Collect all 3 written quotes and compare on method, not just price</li>
              <li>Verify licenses, insurance, and 3 references per contractor</li>
              <li>Select contractor, sign scope, cut deposit ≤ 10%</li>
              <li>Log decision and contractor in master_tracker</li>
            </ul>
          </div>
        </div>

        <div class="button-row">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=Water%20Intrusion%20%E2%80%94%20Remediation%20Update" class="nu-btn-secondary">Email Update</a>
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
    <div class="nu-footer-meta">
      Internal Action Item — Water Intrusion Remediation · Generated 2026-04-23 · Phoenix Icon® · Norris Utilities® is a registered trademark of Norris Utilities, LLC
    </div>
  </footer>

</body>
</html>