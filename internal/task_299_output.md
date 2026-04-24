<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Peace of Mind Program Verification — Norris Utilities®</title>
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
      --nu-success-green: #1A7F37;
      --nu-warning-amber: #D97706;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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

    /* Ghost phoenix watermark */
    .nu-header-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.12;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 20px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 30px;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-white);
      letter-spacing: 0.18em;
      text-transform: uppercase;
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
      top: 25%; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 700px;
      height: 700px;
      background-image: radial-gradient(circle, rgba(0,51,204,0.05) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 40px;
      z-index: 1;
    }

    /* ══ PAGE TITLE ══ */
    .nu-page-title {
      font-weight: 900;
      font-size: 2.3rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.2;
    }
    .nu-page-title .nu-accent-word {
      color: #0033cc;
    }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: #5a5a6e;
      margin-bottom: 12px;
      font-weight: 400;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 14px 0;
      border-top: 1px solid var(--nu-medium-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
      margin-bottom: 40px;
      font-size: 0.82rem;
      color: #666;
    }
    .nu-meta-row strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.75rem;
    }

    /* ══ STATUS BANNER ══ */
    .nu-status-banner {
      display: flex;
      align-items: center;
      gap: 18px;
      background: linear-gradient(135deg, #FFF4E5 0%, #FFE8CC 100%);
      border-left: 5px solid var(--nu-warning-amber);
      padding: 20px 24px;
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .nu-status-icon {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      background: var(--nu-warning-amber);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 900;
      font-size: 1.5rem;
    }
    .nu-status-text h3 {
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      font-weight: 900;
      margin-bottom: 2px;
    }
    .nu-status-text p {
      font-size: 0.9rem;
      color: #704000;
      margin: 0;
    }

    /* ══ SECTION HEADER ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-header {
      display: flex;
      align-items: baseline;
      gap: 14px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-number {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-cyan);
      font-family: 'Courier New', monospace;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: #0033cc;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ QUESTIONS CARD ══ */
    .nu-question-list {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .nu-question {
      display: grid;
      grid-template-columns: 44px 1fr;
      gap: 16px;
      padding: 20px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: start;
    }
    .nu-question:last-child { border-bottom: none; }
    .nu-q-number {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      flex-shrink: 0;
    }
    .nu-q-body {
      padding-top: 4px;
    }
    .nu-q-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .nu-q-detail {
      font-size: 0.9rem;
      color: #5a5a6e;
      line-height: 1.5;
    }

    /* ══ OPTIONS GRID ══ */
    .nu-options-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .nu-option-card {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 24px;
      transition: all 0.2s ease;
      position: relative;
    }
    .nu-option-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
      border-color: var(--nu-cyan);
    }
    .nu-option-card.is-required { border-color: var(--nu-alert-red); }
    .nu-option-card.is-optional { border-color: var(--nu-success-green); }
    .nu-option-card.is-investigate { border-color: var(--nu-warning-amber); }

    .nu-option-flag {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .nu-option-card.is-required .nu-option-flag { background: #FDECEF; color: var(--nu-alert-red); }
    .nu-option-card.is-optional .nu-option-flag { background: #E7F5EC; color: var(--nu-success-green); }
    .nu-option-card.is-investigate .nu-option-flag { background: #FFF4E5; color: var(--nu-warning-amber); }

    .nu-option-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-option-desc {
      font-size: 0.9rem;
      color: #5a5a6e;
      margin-bottom: 12px;
    }
    .nu-option-impact {
      padding-top: 12px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.82rem;
      color: #666;
    }
    .nu-option-impact strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      display: grid;
      grid-template-columns: 28px 1fr;
      gap: 14px;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: start;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-check-box {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .nu-check-content strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 2px;
    }
    .nu-check-content span {
      font-size: 0.88rem;
      color: #5a5a6e;
    }

    /* ══ DECISION TABLE ══ */
    .nu-decision-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    .nu-decision-table th {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: white;
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-decision-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .nu-decision-table tr:last-child td { border-bottom: none; }
    .nu-decision-table tr:nth-child(even) td { background: #FAFAFD; }
    .nu-decision-table .nu-outcome-yes { color: var(--nu-alert-red); font-weight: 700; }
    .nu-decision-table .nu-outcome-no { color: var(--nu-success-green); font-weight: 700; }
    .nu-decision-table .nu-outcome-maybe { color: var(--nu-warning-amber); font-weight: 700; }

    /* ══ CONTACT CARD ══ */
    .nu-contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
      margin-top: 8px;
    }
    .nu-contact-card {
      background: linear-gradient(135deg, #F8F9FC 0%, var(--nu-white) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 20px;
      border-radius: 0 6px 6px 0;
    }
    .nu-contact-role {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-contact-name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-contact-detail {
      font-size: 0.85rem;
      color: #5a5a6e;
      line-height: 1.5;
    }

    /* ══ NEXT ACTION ══ */
    .nu-next-action {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 50%, #0066ee 100%);
      color: white;
      padding: 32px 36px;
      border-radius: 12px;
      margin-top: 40px;
      position: relative;
      overflow: hidden;
    }
    .nu-next-action::before {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 50%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
    }
    .nu-next-action > * { position: relative; z-index: 2; }
    .nu-next-label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-next-title {
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 10px;
    }
    .nu-next-body {
      font-size: 0.98rem;
      line-height: 1.6;
      color: rgba(255,255,255,0.9);
      margin-bottom: 20px;
    }
    .nu-next-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      background: var(--nu-white);
      color: #0033cc;
      font-weight: 900;
      font-size: 0.9rem;
      text-decoration: none;
      border-radius: 6px;
      letter-spacing: 0.05em;
      transition: transform 0.2s ease;
    }
    .nu-next-cta:hover { transform: translateY(-2px); }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #0a0e5c 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
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
      margin-top: 18px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.05em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 20px; }
      .nu-page-title { font-size: 1.6rem; }
      .nu-section-title { font-size: 1.2rem; }
      .nu-question { grid-template-columns: 36px 1fr; padding: 16px; }
      .nu-next-action { padding: 24px; }
      .nu-next-title { font-size: 1.2rem; }
      .nu-decision-table th, .nu-decision-table td { padding: 10px 12px; font-size: 0.8rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-next-action, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-option-card, .nu-question-list { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Action Item · Verification Brief</div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div>
        <h1 class="nu-page-title"><span class="nu-accent-word">Peace of Mind</span> Maintenance Program — Requirement Verification</h1>
        <p class="nu-page-subtitle">Determine whether the Peace of Mind maintenance program is required on active and pending equipment orders, who it applies to, and how it affects price, warranty, and customer terms.</p>
        <div class="nu-meta-row">
          <div><strong>Source</strong><br>reMarkable Action Item</div>
          <div><strong>Owner</strong><br>Aaron C. Norris</div>
          <div><strong>Opened</strong><br>April 24, 2026</div>
          <div><strong>Priority</strong><br>Medium — Verify within 72 hours</div>
          <div><strong>Status</strong><br>Open — Awaiting supplier confirmation</div>
        </div>
      </div>

      <!-- STATUS BANNER -->
      <div class="nu-status-banner">
        <div class="nu-status-icon">!</div>
        <div class="nu-status-text">
          <h3>Pending Verification</h3>
          <p>Aaron flagged this on the reMarkable — the "Peace of Mind" program has surfaced on a supplier quote or customer conversation. Root question: is it required, optional, or already bundled? Resolve before the next quote or invoice goes out.</p>
        </div>
      </div>

      <!-- SECTION 1 — WHY THIS MATTERS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">01</div>
          <div class="nu-section-title"><span>Why This</span> Verification Matters</div>
        </div>
        <div class="nu-options-grid">
          <div class="nu-option-card is-investigate">
            <span class="nu-option-flag">Pricing Impact</span>
            <div class="nu-option-title">Affects customer price</div>
            <div class="nu-option-desc">If Peace of Mind is a line-item add-on, it shifts quoted totals. Customers may already have costs locked in — a retroactive add-on damages trust.</div>
            <div class="nu-option-impact"><strong>Risk:</strong> Quoting a unit without the program when it is mandatory = margin loss or broken quote.</div>
          </div>
          <div class="nu-option-card is-investigate">
            <span class="nu-option-flag">Warranty Exposure</span>
            <div class="nu-option-title">Changes warranty posture</div>
            <div class="nu-option-desc">Maintenance programs often gate extended warranty coverage. Skipping a required program can void manufacturer support downstream.</div>
            <div class="nu-option-impact"><strong>Risk:</strong> Customer claim denied 18 months out — Norris Utilities® left covering the gap.</div>
          </div>
          <div class="nu-option-card is-investigate">
            <span class="nu-option-flag">Contract Terms</span>
            <div class="nu-option-title">May appear in T&Cs</div>
            <div class="nu-option-desc">Supplier order acknowledgments sometimes list "required service programs" in boilerplate. Easy to miss; binding if signed.</div>
            <div class="nu-option-impact"><strong>Risk:</strong> Exposure to recurring service fees we never factored into margin.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 2 — QUESTIONS TO ANSWER -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">02</div>
          <div class="nu-section-title"><span>Questions to</span> Answer</div>
        </div>
        <div class="nu-question-list">
          <div class="nu-question">
            <div class="nu-q-number">1</div>
            <div class="nu-q-body">
              <div class="nu-q-title">Which supplier's Peace of Mind program is this?</div>
              <div class="nu-q-detail">Skylift, Bay Shore Systems (BSS), Terex, or another? Each manufacturer has its own maintenance/service bundle and its own rules. Identify the source quote, PO, or email where the term appeared.</div>
            </div>
          </div>
          <div class="nu-question">
            <div class="nu-q-number">2</div>
            <div class="nu-q-body">
              <div class="nu-q-title">Is the program mandatory, optional, or auto-bundled?</div>
              <div class="nu-q-detail">"Required" means the unit cannot ship without it. "Optional" means we can offer it or decline. "Bundled" means it is already inside the quoted unit price — no action needed.</div>
            </div>
          </div>
          <div class="nu-question">
            <div class="nu-q-number">3</div>
            <div class="nu-q-body">
              <div class="nu-q-title">What is the cost, term length, and scope?</div>
              <div class="nu-q-detail">One-time fee or recurring annual? Covers what — inspections, parts, labor, travel? Is there a deductible? Who performs the service (dealer vs. manufacturer)?</div>
            </div>
          </div>
          <div class="nu-question">
            <div class="nu-q-number">4</div>
            <div class="nu-q-body">
              <div class="nu-q-title">Does it affect the warranty?</div>
              <div class="nu-q-detail">Some programs are prerequisite to extended warranty or to fleet-grade terms. Confirm whether enrollment or non-enrollment modifies the base warranty.</div>
            </div>
          </div>
          <div class="nu-question">
            <div class="nu-q-number">5</div>
            <div class="nu-q-body">
              <div class="nu-q-title">Which customers/orders are affected?</div>
              <div class="nu-q-detail">Skylift PO from 1/12/26 (5× SBA40i-LW + 1× SBA47i-MH)? Pending Bill Kugler / Terex deal? Any outstanding quotes? Map the exposure before answering customers.</div>
            </div>
          </div>
          <div class="nu-question">
            <div class="nu-q-number">6</div>
            <div class="nu-q-body">
              <div class="nu-q-title">How do we pass it through — and at what margin?</div>
              <div class="nu-q-detail">If required and added to cost, apply standard 12-15% equipment margin unless the program is a pure pass-through. Confirm the supplier's published pricing versus Norris's quote.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3 — POSSIBLE OUTCOMES -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">03</div>
          <div class="nu-section-title"><span>Possible</span> Outcomes &amp; Response</div>
        </div>
        <div class="nu-options-grid">
          <div class="nu-option-card is-required">
            <span class="nu-option-flag">Outcome A — Required</span>
            <div class="nu-option-title">Mandatory on all new units</div>
            <div class="nu-option-desc">Supplier will not release the unit unless the program is enrolled. Standard practice on some lift/crane lines to maintain certification.</div>
            <div class="nu-option-impact"><strong>Action:</strong> Add as separate line item on every quote going forward. Update master tracker. Re-quote any open deals that did not include it.</div>
          </div>
          <div class="nu-option-card is-optional">
            <span class="nu-option-flag">Outcome B — Optional</span>
            <div class="nu-option-title">Customer-elect add-on</div>
            <div class="nu-option-desc">Offered at customer discretion. Norris earns margin when attached but no deal breaks if declined.</div>
            <div class="nu-option-impact"><strong>Action:</strong> Build standard "Peace of Mind" line-item sheet with price, term, scope. Offer on every quote. Log attach rate in CRM.</div>
          </div>
          <div class="nu-option-card is-investigate">
            <span class="nu-option-flag">Outcome C — Bundled</span>
            <div class="nu-option-title">Already inside unit price</div>
            <div class="nu-option-desc">No separate charge — program is part of what the customer already paid for. Most customer-friendly outcome.</div>
            <div class="nu-option-impact"><strong>Action:</strong> Document on internal one-pager so Aaron and CB can reference when customers ask. No quote changes needed.</div>
          </div>
          <div class="nu-option-card is-required">
            <span class="nu-option-flag">Outcome D — Not Applicable</span>
            <div class="nu-option-title">Does not apply to Norris's channel</div>
            <div class="nu-option-desc">Program exists but only applies to direct-manufacturer customers, not dealer/distributor sales. Confirm in writing.</div>
            <div class="nu-option-impact"><strong>Action:</strong> File confirmation email. Add note to supplier profile. No further action unless policy changes.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 4 — VERIFICATION CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">04</div>
          <div class="nu-section-title"><span>Verification</span> Checklist</div>
        </div>
        <ul class="nu-checklist">
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <strong>1. Identify the source document</strong>
              <span>Find where "Peace of Mind" first appeared — reMarkable note, supplier quote, customer email, or PO acknowledgment. Save the exact reference in the master tracker.</span>
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <strong>2. Email the manufacturer directly</strong>
              <span>Contact the relevant rep with a written question. Request a written answer — not a phone response — so the reply is filed. If Skylift: Nick Jarmoszuk Jr, Andrew Jarmoszuk, or Dale Williams. If BSS: Andy Barron (primary) with Herb Minatre on CC.</span>
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <strong>3. Request the program spec sheet in writing</strong>
              <span>Ask for the one-page description: cost, term, what is covered, what is excluded, dealer responsibilities. Without documentation, Norris cannot quote it consistently.</span>
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <strong>4. Map exposure across open deals</strong>
              <span>Cross-check the active deals pipeline — Skylift 1/12/26 PO, pending Terex / Bill Kugler opportunity, any Samson or BOSS orders — to confirm where this might apply.</span>
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <strong>5. Update the master tracker with the answer</strong>
              <span>Record: (a) which program, (b) required / optional / bundled, (c) cost and margin treatment, (d) date confirmed, (e) who confirmed. Flag any re-quotes needed.</span>
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <strong>6. Brief CB and adjust quote templates</strong>
              <span>If program is required or routinely offered, update Norris quote templates so CB can attach it automatically. Confirm language matches supplier's official description.</span>
            </div>
          </li>
          <li>
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <strong>7. Notify affected customers (only if changes apply)</strong>
              <span>If an open quote needs correction, Aaron contacts the customer personally — not CB. Explain the change, give the customer the option, re-issue the quote.</span>
            </div>
          </li>
        </ul>
      </section>

      <!-- SECTION 5 — DECISION MATRIX -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">05</div>
          <div class="nu-section-title"><span>Decision</span> Matrix — What Triggers Required Status</div>
        </div>
        <table class="nu-decision-table">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Required?</th>
              <th>Norris Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Supplier quote lists program as a separate line with the word "required" or "mandatory"</td>
              <td class="nu-outcome-yes">YES</td>
              <td>Pass through on every customer quote. Apply standard equipment margin unless supplier stipulates pass-through pricing.</td>
            </tr>
            <tr>
              <td>Supplier quote lists program as "recommended" or "optional"</td>
              <td class="nu-outcome-no">NO</td>
              <td>Offer to the customer as an add-on. Track attach rate. Do not re-quote existing deals without customer consent.</td>
            </tr>
            <tr>
              <td>Program appears only in boilerplate T&Cs, not on pricing</td>
              <td class="nu-outcome-maybe">MAYBE</td>
              <td>Email the rep for written clarification before the next quote goes out. Do not sign until resolved.</td>
            </tr>
            <tr>
              <td>Program is named but Norris cannot find pricing or scope</td>
              <td class="nu-outcome-maybe">MAYBE</td>
              <td>Treat as unverified. Do not offer to customers. Request spec sheet in writing.</td>
            </tr>
            <tr>
              <td>Manufacturer confirms program is bundled in unit cost</td>
              <td class="nu-outcome-no">NO</td>
              <td>Document once. Use as selling point: "Your unit already includes manufacturer's Peace of Mind program."</td>
            </tr>
            <tr>
              <td>Manufacturer confirms program applies to direct sales only, not dealer channel</td>
              <td class="nu-outcome-no">NO</td>
              <td>Save the confirmation email. No customer-facing change.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION 6 — WHO TO CONTACT -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">06</div>
          <div class="nu-section-title"><span>Who to</span> Contact (By Supplier)</div>
        </div>
        <div class="nu-contact-grid">
          <div class="nu-contact-card">
            <div class="nu-contact-role">Skylift (Most Likely Source)</div>
            <div class="nu-contact-name">Nick Jarmoszuk Jr / Andrew Jarmoszuk / Dale Williams</div>
            <div class="nu-contact-detail">Pricing and specs — request written confirmation of whether Peace of Mind applies to the 1/12/26 PO (5× SBA40i-LW + 1× SBA47i-MH).</div>
          </div>
          <div class="nu-contact-card">
            <div class="nu-contact-role">Bay Shore Systems</div>
            <div class="nu-contact-name">Andy Barron (primary)</div>
            <div class="nu-contact-detail">CC Herb Minatre (owner). Ask whether BSS drill rigs in the Southeast territory are subject to any required maintenance enrollment.</div>
          </div>
          <div class="nu-contact-card">
            <div class="nu-contact-role">Terex</div>
            <div class="nu-contact-name">Bill Kugler</div>
            <div class="nu-contact-detail">Confirm before the pending opportunity closes. Peace of Mind may surface inside Terex fleet support bundles.</div>
          </div>
          <div class="nu-contact-card">
            <div class="nu-contact-role">BOSS Products</div>
            <div class="nu-contact-name">Troy Gongwer + Thayne Grove</div>
            <div class="nu-contact-detail">CC both on any inquiry. Confirm whether their accessory/warranty programs carry a Peace of Mind designation.</div>
          </div>
          <div class="nu-contact-card">
            <div class="nu-contact-role">Samson Rope</div>
            <div class="nu-contact-name">Donna Poll + Sarah Daniels</div>
            <div class="nu-contact-detail">CC both. Unlikely to apply — rope is consumable — but confirm for completeness since Norris is authorized distributor.</div>
          </div>
          <div class="nu-contact-card">
            <div class="nu-contact-role">Internal — Admin Review</div>
            <div class="nu-contact-name">Caroline Butler (CB)</div>
            <div class="nu-contact-detail">Once answer confirmed, brief CB on quote template change. Any customer-facing correspondence still routes through Aaron for review (Tier 1 trust rule).</div>
          </div>
        </div>
      </section>

      <!-- NEXT ACTION -->
      <div class="nu-next-action">
        <div class="nu-next-label">Next Action — This Week</div>
        <div class="nu-next-title">Send one email to each active supplier asking the same four questions.</div>
        <div class="nu-next-body">Same email, different recipients: (1) Is Peace of Mind required or optional on current Norris Utilities® orders? (2) What does it cost and what does it cover? (3) Does it affect warranty? (4) Please confirm in writing. File all replies in the supplier folders, then update the master tracker before the next quote is sent.</div>
        <a href="mailto:acnorris@norrisutilities.com?subject=Peace%20of%20Mind%20Program%20Verification%20%E2%80%94%20Draft%20Email%20Review" class="nu-next-cta">Draft the Email → acnorris@norrisutilities.com</a>
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
    <div class="nu-footer-meta">
      Internal verification brief · Generated 2026-04-24 · reMarkable Action Item
    </div>
  </footer>

</body>
</html>