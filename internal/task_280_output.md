<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — 2018 Compass Bank → McKnight Deed Pull — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-priority-red: #C00000;
      --nu-success-green: #008060;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
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

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 18px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
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

    /* MAIN */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* PRIORITY BANNER */
    .priority-banner {
      display: flex;
      align-items: center;
      gap: 14px;
      background: linear-gradient(135deg, #fff8e6 0%, #fff2cc 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 18px 24px;
      border-radius: 4px;
      margin-bottom: 32px;
    }
    .priority-banner .badge {
      background: var(--nu-accent-gold);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      padding: 5px 12px;
      border-radius: 3px;
      text-transform: uppercase;
    }
    .priority-banner .text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* PAGE TITLE */
    .page-title-block {
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .page-eyebrow {
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 12px;
    }
    .page-title .first-word {
      color: #0033cc;
    }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 800px;
    }

    /* META GRID */
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .meta-card {
      background: var(--nu-light-gray);
      padding: 18px 20px;
      border-radius: 6px;
      border-left: 3px solid var(--nu-cyan);
    }
    .meta-card .label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .meta-card .value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin: 36px 0 16px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first {
      color: #0033cc;
    }

    /* CONTEXT BOX */
    .context-box {
      background: var(--nu-light-gray);
      padding: 24px 28px;
      border-radius: 8px;
      margin-bottom: 24px;
      border-left: 4px solid var(--nu-blue);
    }
    .context-box p {
      margin-bottom: 12px;
    }
    .context-box p:last-child {
      margin-bottom: 0;
    }
    .context-box strong {
      color: var(--nu-dark-text);
    }

    /* STEPS */
    .step-list {
      list-style: none;
      counter-reset: step-counter;
    }
    .step-list li {
      counter-increment: step-counter;
      padding: 20px 24px 20px 72px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      margin-bottom: 14px;
      position: relative;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .step-list li:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .step-list li::before {
      content: counter(step-counter);
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,255,0.3);
    }
    .step-list .step-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step-list .step-desc {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .step-list .step-desc a {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* INSTRUMENT REFERENCE */
    .instrument-card {
      background: linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 24px;
    }
    .instrument-card .doc-label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 12px;
    }
    .instrument-card .doc-id {
      font-family: 'Courier New', monospace;
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      background: var(--nu-white);
      padding: 12px 20px;
      border-radius: 4px;
      display: inline-block;
      margin-bottom: 16px;
      letter-spacing: 0.05em;
      border: 1px solid var(--nu-medium-gray);
    }
    .instrument-card .doc-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-top: 14px;
    }
    .instrument-card .doc-meta div {
      font-size: 0.92rem;
    }
    .instrument-card .doc-meta strong {
      display: block;
      font-size: 0.7rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }

    /* PARTIES BLOCK */
    .parties-row {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 20px;
      align-items: center;
      margin: 20px 0;
    }
    .party-card {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 22px;
      text-align: center;
    }
    .party-card.grantor {
      border-color: var(--nu-blue);
    }
    .party-card.grantee {
      border-color: var(--nu-cyan);
    }
    .party-role {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .party-name {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .party-arrow {
      font-size: 2rem;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* SOURCE LIST */
    .source-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .source-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .source-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .source-card .source-tag {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      padding: 3px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .source-card .source-tag.fee { background: var(--nu-priority-red); }
    .source-card .source-tag.free { background: var(--nu-success-green); }
    .source-card .source-tag.phone { background: var(--nu-blue); }
    .source-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .source-card .contact {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--nu-blue);
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 12px 14px 12px 44px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.97rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 14px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-dark-text);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%);
      border-left: 4px solid var(--nu-priority-red);
      padding: 20px 24px;
      border-radius: 4px;
      margin: 24px 0;
    }
    .callout .callout-title {
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-priority-red);
      margin-bottom: 8px;
    }
    .callout p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }

    /* WHY IT MATTERS */
    .why-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
      margin: 20px 0;
    }
    .why-card {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 24px 26px;
      border-radius: 8px;
    }
    .why-card h4 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .why-card p {
      font-size: 0.93rem;
      color: rgba(255,255,255,0.9);
    }

    /* ACTIONS BAR */
    .actions-bar {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 32px;
      padding: 24px;
      background: var(--nu-light-gray);
      border-radius: 8px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 14px 28px;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-2px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.35);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.82rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px 60px; }
      .page-title { font-size: 1.7rem; }
      .parties-row { grid-template-columns: 1fr; }
      .party-arrow { transform: rotate(90deg); }
      .instrument-card .doc-id { font-size: 1.15rem; }
      .step-list li { padding-left: 64px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .actions-bar { display: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
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

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PRIORITY BANNER -->
      <div class="priority-banner">
        <span class="badge">Action Item</span>
        <span class="text">reMarkable capture — Pull Compass Bank → McKnight 2018 deed for chain-of-title verification</span>
      </div>

      <!-- TITLE -->
      <div class="page-title-block">
        <div class="page-eyebrow">Real Estate Due Diligence · Title Research</div>
        <h1 class="page-title"><span class="first-word">Pull</span> the 2018 Compass Bank → McKnight Deed</h1>
        <p class="page-subtitle">Locate, retrieve, and file Instrument 20180-series deed (Compass Bank, N.A. as grantor → McKnight as grantee, Jefferson County, Alabama probate records, 2018) in support of the active chain-of-title workup on the 4505 Butterworth estate review.</p>
      </div>

      <!-- META -->
      <div class="meta-grid">
        <div class="meta-card">
          <div class="label">Captured From</div>
          <div class="value">reMarkable Tablet — Aaron's Notes</div>
        </div>
        <div class="meta-card">
          <div class="label">Date Logged</div>
          <div class="value">2026-04-24</div>
        </div>
        <div class="meta-card">
          <div class="label">Owner</div>
          <div class="value">Aaron C. Norris</div>
        </div>
        <div class="meta-card">
          <div class="label">Status</div>
          <div class="value">Open — Action Required</div>
        </div>
      </div>

      <!-- INSTRUMENT REFERENCE -->
      <h2 class="nu-section-title"><span class="first">Document</span> Reference</h2>
      <div class="instrument-card">
        <div class="doc-label">Target Instrument Number</div>
        <div class="doc-id">20180_____ (Series)</div>
        <p style="font-size: 0.95rem; color: var(--nu-body-text); margin-bottom: 4px;">
          The reMarkable note captured the 2018 series prefix. The full instrument number must be confirmed at the Jefferson County Probate Court records system before retrieval. Once confirmed, record the full number on this sheet for permanent reference.
        </p>
        <div class="doc-meta">
          <div>
            <strong>Document Type</strong>
            Deed (Warranty / Statutory / Foreclosure — confirm)
          </div>
          <div>
            <strong>Recording Year</strong>
            2018
          </div>
          <div>
            <strong>County</strong>
            Jefferson County, Alabama
          </div>
          <div>
            <strong>Court</strong>
            Probate Court — Real Property Records
          </div>
        </div>
      </div>

      <!-- PARTIES -->
      <h2 class="nu-section-title"><span class="first">Parties</span> on the Deed</h2>
      <div class="parties-row">
        <div class="party-card grantor">
          <div class="party-role">Grantor</div>
          <div class="party-name">Compass Bank, N.A.</div>
          <div style="font-size: 0.85rem; color: var(--nu-body-text); margin-top: 6px;">(Acquired by BBVA; later merged into PNC Bank — relevant for any successor verification)</div>
        </div>
        <div class="party-arrow">→</div>
        <div class="party-card grantee">
          <div class="party-role">Grantee</div>
          <div class="party-name">McKnight</div>
          <div style="font-size: 0.85rem; color: var(--nu-body-text); margin-top: 6px;">(Confirm full legal name — individual or entity — at retrieval)</div>
        </div>
      </div>

      <!-- WHY IT MATTERS -->
      <h2 class="nu-section-title"><span class="first">Why</span> This Document Matters</h2>
      <div class="why-grid">
        <div class="why-card">
          <h4>Chain of Title</h4>
          <p>Establishes the bank-to-individual transfer in 2018, a critical link between the prior mortgagee and the current ownership history of the parcel.</p>
        </div>
        <div class="why-card">
          <h4>Foreclosure Indicator</h4>
          <p>Compass Bank as grantor in 2018 strongly suggests a foreclosure or post-default conveyance. The deed reveals whether title passed clean or with reservations.</p>
        </div>
        <div class="why-card">
          <h4>Legal Description</h4>
          <p>Locks in the precise legal description of the parcel — needed to cross-check against any current listing, plat, or survey before a purchase decision.</p>
        </div>
        <div class="why-card">
          <h4>Encumbrance Reference</h4>
          <p>Often references the original mortgage instrument number, allowing lookup of the recorded mortgage and any subsequent satisfactions or releases.</p>
        </div>
      </div>

      <!-- HOW TO PULL -->
      <h2 class="nu-section-title"><span class="first">How</span> to Pull This Deed — Step by Step</h2>

      <div class="context-box">
        <p><strong>Three retrieval paths are available.</strong> Path 1 (online) is fastest if the full instrument number is already known. Path 2 (in-person at Jefferson County Probate Court) is the most reliable when the instrument number is partial. Path 3 (title company assist) is appropriate if the deed is buried in a longer chain that needs full abstracting.</p>
      </div>

      <ol class="step-list">
        <li>
          <div class="step-title">Confirm the Full Instrument Number</div>
          <div class="step-desc">Search the Jefferson County Probate online records portal at <a href="https://probatesearch.jccal.org" target="_blank" rel="noopener">probatesearch.jccal.org</a> using grantor "Compass Bank" and grantee "McKnight" with date range 01/01/2018 to 12/31/2018. Record the full instrument number when the match is identified.</div>
        </li>
        <li>
          <div class="step-title">Run the Online Image Pull</div>
          <div class="step-desc">If the online portal allows image download (per-page fee typically applies), retrieve the PDF directly. Save as <em>Compass-McKnight-Deed-2018-INST20180______.pdf</em> in <em>~/norris-ops/operations/title-research/</em>.</div>
        </li>
        <li>
          <div class="step-title">If Online Pull Fails — Visit Probate Court</div>
          <div class="step-desc">Drive to Jefferson County Courthouse, 716 Richard Arrington Jr. Blvd N, Birmingham, AL 35203. Real Property Records counter is on the Probate Court floor. Request the instrument by number; certified copy fee is $1 per page plus a $5 certification stamp. Same-day pickup.</div>
        </li>
        <li>
          <div class="step-title">Capture Backside / Continuation Pages</div>
          <div class="step-desc">Verify the deed is complete — many warranty and foreclosure deeds run 4–8 pages with attached legal descriptions and exhibits. Confirm every page is captured before leaving the counter.</div>
        </li>
        <li>
          <div class="step-title">Cross-Reference the Mortgage</div>
          <div class="step-desc">If the deed cites a prior mortgage instrument number (typical for foreclosure deeds), pull that mortgage as well to complete the picture. Stash both documents together.</div>
        </li>
        <li>
          <div class="step-title">File and Index in NU Brain</div>
          <div class="step-desc">Add the deed to <em>~/norris-ops/operations/title-research/</em>, log it in <em>master_tracker.md</em> under the Buttesworth/4505 estate workup, and update the chain-of-title summary. Mark this action item complete.</div>
        </li>
      </ol>

      <!-- SOURCES -->
      <h2 class="nu-section-title"><span class="first">Where</span> to Get the Deed</h2>
      <div class="source-grid">
        <div class="source-card">
          <span class="source-tag fee">Primary · Online</span>
          <h4>Jefferson County Probate Search</h4>
          <p>Online deed image search and retrieval. Fee per page applies; some indexes go back to the 1990s, deeds back further.</p>
          <p class="contact">probatesearch.jccal.org</p>
        </div>
        <div class="source-card">
          <span class="source-tag">In-Person</span>
          <h4>Jefferson County Probate Court</h4>
          <p>716 Richard Arrington Jr. Blvd N, Birmingham, AL 35203. Real Property Records counter. Open Mon–Fri, 8:00 AM – 5:00 PM.</p>
          <p class="contact">205-325-5411</p>
        </div>
        <div class="source-card">
          <span class="source-tag phone">Phone</span>
          <h4>Probate Records Help Desk</h4>
          <p>Confirms instrument number ranges and verifies a record exists before trip. Identify yourself as a recorded-document requester.</p>
          <p class="contact">205-325-5411</p>
        </div>
        <div class="source-card">
          <span class="source-tag free">Free Preview</span>
          <h4>Alabama Title Company Network</h4>
          <p>If the deed is part of a broader title workup, a contracted title company can pull as part of a full abstract. Free preview if a closing is anticipated.</p>
          <p class="contact">Contact via Renasant — Patrick Lavette</p>
        </div>
      </div>

      <!-- CALLOUT -->
      <div class="callout">
        <div class="callout-title">Critical — Confirm Before Acting</div>
        <p>Compass Bank, N.A. was acquired by BBVA in 2007 and BBVA USA was subsequently acquired by PNC Bank in 2021. If contacting any party listed on the deed (e.g., for clarification on encumbrances or releases), route current inquiries through PNC Bank, not Compass — the Compass entity no longer exists as a chartered bank.</p>
      </div>

      <!-- WORKING CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Working</span> Checklist</h2>
      <ul class="checklist">
        <li><strong>Identify full instrument number.</strong> Confirm the trailing six or seven digits via online portal.</li>
        <li><strong>Pull deed image.</strong> PDF saved locally and to <em>norris-ops/operations/title-research/</em>.</li>
        <li><strong>Verify all pages captured.</strong> Including the legal description exhibit and any continuation sheets.</li>
        <li><strong>Read deed for foreclosure language.</strong> Note whether it is a foreclosure, warranty, or quitclaim conveyance.</li>
        <li><strong>Capture referenced prior instruments.</strong> Mortgage number, prior deed numbers, any cross-referenced filings.</li>
        <li><strong>Pull successor deeds (post-2018).</strong> Trace forward from McKnight to the present record owner.</li>
        <li><strong>Update master_tracker.md.</strong> Log the deed reference, file path, and finding summary.</li>
        <li><strong>Notify if anomaly found.</strong> Telegram alert to Aaron if title shows a defect, encumbrance, or unexpected party.</li>
      </ul>

      <!-- WHAT TO LOOK FOR -->
      <h2 class="nu-section-title"><span class="first">What</span> to Look For When You Read It</h2>
      <div class="context-box">
        <p><strong>Type of conveyance:</strong> Warranty deed, statutory warranty deed, special warranty, quitclaim, or foreclosure deed. Each carries different warranties of title.</p>
        <p><strong>Consideration recited:</strong> The dollar amount stated, even if nominal, indicates whether this was a sale, gift, or post-foreclosure transfer at credit-bid value.</p>
        <p><strong>Legal description:</strong> Lot/block, metes and bounds, or reference to a recorded plat. Compare against the parcel currently of interest.</p>
        <p><strong>Reservations and exceptions:</strong> Any mineral, easement, or right-of-way reservations carried forward affect current ownership.</p>
        <p><strong>Recording date and book/page:</strong> Confirm proper recording in 2018 with no gaps in the chain.</p>
        <p><strong>Notarization and witness block:</strong> Confirm proper execution — particularly important for foreclosure deeds where execution defects can void title.</p>
      </div>

      <!-- ACTIONS -->
      <div class="actions-bar">
        <a href="https://probatesearch.jccal.org" target="_blank" rel="noopener" class="nu-btn-primary">Open Probate Search Portal</a>
        <a href="tel:2053255411" class="nu-btn-secondary">Call Probate Records — 205-325-5411</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=Deed%20Pulled%20—%20Compass%20Bank%20to%20McKnight%202018" class="nu-btn-secondary">Mark Complete via Email</a>
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
      Internal Action Sheet · Generated 2026-04-24 · Norris Utilities® Autonomous Build Engine
    </div>
  </footer>

</body>
</html>