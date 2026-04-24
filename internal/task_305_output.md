<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>V5 to Production — Final Release Plan — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-success: #0a7c3f;
      --nu-warning: #b8870f;
      --nu-danger: #b42318;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 78px;
      height: 78px;
      margin: 0 auto 16px;
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-eyebrow {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 999px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 360px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 820px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      margin-bottom: 48px;
      padding-bottom: 28px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-page-kicker {
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.6rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }
    .nu-page-title span {
      color: var(--nu-blue);
    }
    .nu-page-lede {
      font-size: 1.12rem;
      color: var(--nu-body-text);
      max-width: 880px;
      line-height: 1.65;
    }

    /* METADATA STRIP */
    .nu-meta-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 48px;
    }
    .nu-meta-cell {
      background: var(--nu-white);
      padding: 18px 20px;
    }
    .nu-meta-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      opacity: 0.7;
      margin-bottom: 4px;
    }
    .nu-meta-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-meta-value.accent { color: var(--nu-blue); }

    /* SECTION */
    .nu-section {
      margin-bottom: 52px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 20px;
      display: flex;
      align-items: baseline;
      gap: 10px;
    }
    .nu-section-title .word-1 { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 24px;
      border-radius: 2px;
    }

    /* CHEVRON BADGES */
    .nu-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 8px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.02em;
    }
    .nu-badge.cyan {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }

    /* STATUS CARDS */
    .nu-status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }
    .nu-status-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 22px 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-status-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.09);
    }
    .nu-status-card.go { border-top-color: var(--nu-success); }
    .nu-status-card.watch { border-top-color: var(--nu-warning); }
    .nu-status-card.gate { border-top-color: var(--nu-blue); }

    .nu-card-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-status-card.go .nu-card-label { color: var(--nu-success); }
    .nu-status-card.watch .nu-card-label { color: var(--nu-warning); }
    .nu-status-card.gate .nu-card-label { color: var(--nu-blue); }

    .nu-card-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-card-body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .nu-card-metric {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 4px;
    }

    /* PHASE TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 28px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(var(--nu-blue), var(--nu-cyan));
    }
    .nu-phase {
      position: relative;
      margin-bottom: 28px;
      padding: 0 0 0 4px;
    }
    .nu-phase::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 4px;
      width: 18px;
      height: 18px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba(0,0,255,0.08);
    }
    .nu-phase.done::before {
      background: var(--nu-success);
      border-color: var(--nu-success);
    }
    .nu-phase.current::before {
      background: var(--nu-cyan);
      border-color: var(--nu-blue);
      box-shadow: 0 0 0 4px rgba(6,208,255,0.28), 0 0 0 8px rgba(0,0,255,0.08);
    }
    .nu-phase-heading {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: baseline;
      margin-bottom: 6px;
    }
    .nu-phase-name {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
    }
    .nu-phase-tag {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 4px;
    }
    .nu-phase-tag.done {
      background: rgba(10,124,63,0.12);
      color: var(--nu-success);
    }
    .nu-phase-tag.current {
      background: rgba(0,0,255,0.1);
      color: var(--nu-blue);
    }
    .nu-phase-tag.next {
      background: var(--nu-light-gray);
      color: var(--nu-body-text);
    }
    .nu-phase-body {
      color: var(--nu-body-text);
      font-size: 0.96rem;
      line-height: 1.6;
    }
    .nu-phase-body ul {
      margin-top: 8px;
      padding-left: 20px;
    }
    .nu-phase-body li { margin-bottom: 4px; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 14px;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 14px 18px;
      border-radius: 4px;
      font-size: 0.96rem;
      color: var(--nu-dark-text);
    }
    .nu-checklist li.done { border-left-color: var(--nu-success); }
    .nu-checkbox {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      border: 2px solid var(--nu-blue);
      background: var(--nu-white);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-top: 1px;
      font-weight: 900;
      font-size: 0.85rem;
      color: var(--nu-blue);
    }
    .nu-checklist li.done .nu-checkbox {
      background: var(--nu-success);
      border-color: var(--nu-success);
      color: var(--nu-white);
    }

    /* GATES TABLE */
    .nu-gate-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      font-size: 0.95rem;
    }
    .nu-gate-table th {
      background: linear-gradient(135deg, var(--nu-navy), #000066);
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      padding: 12px 16px;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-gate-table td {
      padding: 14px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-gate-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-gate-name {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-pill {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 999px;
      white-space: nowrap;
    }
    .nu-pill.pass { background: rgba(10,124,63,0.12); color: var(--nu-success); }
    .nu-pill.gate { background: rgba(0,0,255,0.1); color: var(--nu-blue); }
    .nu-pill.watch { background: rgba(184,135,15,0.14); color: var(--nu-warning); }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border: 1px solid rgba(0,0,255,0.15);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      margin-top: 12px;
    }
    .nu-callout-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-navy);
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .nu-callout-body {
      color: var(--nu-body-text);
      font-size: 0.96rem;
      line-height: 1.6;
    }

    /* GO/NO-GO */
    .nu-go-block {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      background: linear-gradient(135deg, #0a0e5c 0%, var(--nu-blue) 60%, #0066ee 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,255,0.25);
    }
    .nu-go-left {
      flex: 1 1 320px;
    }
    .nu-go-kicker {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .nu-go-title {
      font-weight: 900;
      font-size: 1.8rem;
      line-height: 1.2;
    }
    .nu-go-body {
      margin-top: 6px;
      font-size: 0.98rem;
      color: rgba(255,255,255,0.9);
      line-height: 1.55;
    }
    .nu-go-stamp {
      flex-shrink: 0;
      background: var(--nu-white);
      color: var(--nu-blue);
      font-weight: 900;
      padding: 14px 24px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-size: 0.9rem;
      box-shadow: 0 4px 14px rgba(0,0,0,0.18);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px 60px; }
      .nu-page-title { font-size: 1.9rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 10px 16px; }
      .nu-go-block { padding: 22px; }
      .nu-go-title { font-size: 1.4rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-status-card, .nu-gate-table { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment&reg;</div>
    <div class="nu-eyebrow">Internal Release Plan</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L550,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <section class="nu-title-block">
        <div class="nu-page-kicker">SA V5 &middot; Production Cutover</div>
        <h1 class="nu-page-title">Take V5 to Production <span>as the Final Version</span></h1>
        <p class="nu-page-lede">
          Lock V5 as the canonical Shipping Agent release across Norris Utilities&reg; operations. Phase A is live. Phase B is
          closed. The remaining work is a controlled, reversible cutover: retire legacy paths, freeze the schema, publish the
          runbook, and put V5 behind a single named gate so the whole shop operates on one version of the truth.
        </p>
      </section>

      <section class="nu-meta-strip">
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Decision Date</div>
          <div class="nu-meta-value accent">2026-04-24</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Owner</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Current Branch</div>
          <div class="nu-meta-value">feature/sa-v5-completion</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Target State</div>
          <div class="nu-meta-value accent">V5 = main</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Rollback Window</div>
          <div class="nu-meta-value">72 hours</div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="word-1">Status</span> <span class="rest">at a Glance</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-status-grid">
          <div class="nu-status-card go">
            <div class="nu-card-label">Phase A &mdash; Live</div>
            <div class="nu-card-metric">76 / 76</div>
            <div class="nu-card-title">Tests passing on norris-ops</div>
            <div class="nu-card-body">NU brand shipped. Gate A preserved. HEAD 1d86e5a. Live at ops.norrisutilities.com.</div>
          </div>
          <div class="nu-status-card go">
            <div class="nu-card-label">Phase B &mdash; Closed 2026-04-23</div>
            <div class="nu-card-title">Backend truth-up complete</div>
            <div class="nu-card-body">Fuzzy match + canonical enforcement, add_alias, morning brief, remediation scan, payment_rules, notes_auto, email automation, FlexPro filter, review queue, V1&rarr;V2.2 migration all merged.</div>
          </div>
          <div class="nu-status-card gate">
            <div class="nu-card-label">Phase C &mdash; Cutover</div>
            <div class="nu-card-title">This document</div>
            <div class="nu-card-body">Merge feature/sa-v5-completion to main, retire V1&ndash;V4 code paths, publish the runbook, tag v5.0.0.</div>
          </div>
          <div class="nu-status-card watch">
            <div class="nu-card-label">Watch Item</div>
            <div class="nu-card-title">Phoenix opacity pulse</div>
            <div class="nu-card-body">Assertion now accepts pulse window [0.10, 0.14] rather than exact 0.10. Hold across cutover; revisit only if renders drift.</div>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="word-1">Release</span> <span class="rest">Timeline</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-timeline">

          <div class="nu-phase done">
            <div class="nu-phase-heading">
              <span class="nu-phase-name">Phase A &mdash; Frame &amp; Brand</span>
              <span class="nu-phase-tag done">Shipped</span>
            </div>
            <div class="nu-phase-body">
              NU brand system, Line Card design language, Gate A preservation. 76 tests green on norris-ops HEAD 1d86e5a.
            </div>
          </div>

          <div class="nu-phase done">
            <div class="nu-phase-heading">
              <span class="nu-phase-name">Phase B &mdash; Backend Truth-Up</span>
              <span class="nu-phase-tag done">Closed 2026-04-23</span>
            </div>
            <div class="nu-phase-body">
              <ul>
                <li>&sect;7-full: fuzzy match, canonical enforcement, add_alias, morning brief, remediation scan.</li>
                <li>&sect;7-recon: data truth-up reconciliation across shipments and customers.</li>
                <li>&sect;8 backend: payment_rules + notes_auto with tests.</li>
                <li>&sect;1.5: phoenix opacity assertion widened to pulse window [0.10, 0.14].</li>
                <li>V2.2: email automation, FlexPro filter, review queue, V1&rarr;V2.2 migration.</li>
              </ul>
            </div>
          </div>

          <div class="nu-phase current">
            <div class="nu-phase-heading">
              <span class="nu-phase-name">Phase C &mdash; Production Cutover</span>
              <span class="nu-phase-tag current">In Progress &middot; Today</span>
            </div>
            <div class="nu-phase-body">
              Merge feature/sa-v5-completion into main, retire V1&ndash;V4 code paths, tag release v5.0.0, publish the
              cutover runbook, and point every operator-facing reference at V5 as the only supported version.
            </div>
          </div>

          <div class="nu-phase">
            <div class="nu-phase-heading">
              <span class="nu-phase-name">Phase D &mdash; Stabilization (72 hr)</span>
              <span class="nu-phase-tag next">Next</span>
            </div>
            <div class="nu-phase-body">
              Invoicing pulse KPI tiles watched on ops portal. Morning brief reviewed daily at 4:00 AM CT. Any
              anomaly triggers the documented rollback &mdash; not an ad-hoc patch.
            </div>
          </div>

          <div class="nu-phase">
            <div class="nu-phase-heading">
              <span class="nu-phase-name">Phase E &mdash; Freeze &amp; Handoff</span>
              <span class="nu-phase-tag next">After 72 hr clean</span>
            </div>
            <div class="nu-phase-body">
              V5 declared final. Schema frozen. Post-completion queue (Q1&ndash;Q15) released from block. CB silent-draft
              backlog ($3,685.15) and QB 150-series items enter normal operating cadence.
            </div>
          </div>

        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="word-1">Pre-Flight</span> <span class="rest">Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-badge-row">
          <div class="nu-badge">CODE &middot; TESTS &middot; DATA</div>
          <div class="nu-badge cyan">GREEN ACROSS THE BOARD</div>
        </div>
        <ul class="nu-checklist" style="margin-top:18px;">
          <li class="done"><span class="nu-checkbox">&check;</span><span>All 76 tests green on feature/sa-v5-completion.</span></li>
          <li class="done"><span class="nu-checkbox">&check;</span><span>Phase B backend merged: &sect;7-full, &sect;7-recon, &sect;8, V2.2.</span></li>
          <li class="done"><span class="nu-checkbox">&check;</span><span>Phoenix opacity pulse window [0.10, 0.14] accepted by brand test.</span></li>
          <li class="done"><span class="nu-checkbox">&check;</span><span>V1&rarr;V2.2 migration verified on ops.norrisutilities.com.</span></li>
          <li><span class="nu-checkbox">1</span><span>Diff review of feature/sa-v5-completion vs main &mdash; no stray V1&ndash;V4 imports.</span></li>
          <li><span class="nu-checkbox">2</span><span>Schema snapshot committed as schemas/v5-final.json (frozen reference).</span></li>
          <li><span class="nu-checkbox">3</span><span>Invoicing pulse KPI tiles smoke-tested on staging copy of ops portal.</span></li>
          <li><span class="nu-checkbox">4</span><span>Morning brief dry-run at 4:00 AM CT, Aaron confirms output is readable.</span></li>
          <li><span class="nu-checkbox">5</span><span>Rollback command rehearsed: <code>git revert</code> path + portal redeploy.</span></li>
          <li><span class="nu-checkbox">6</span><span>Telegram alert channel verified with a test ping.</span></li>
        </ul>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="word-1">Cutover</span> <span class="rest">Steps</span></h2>
        <div class="nu-section-rule"></div>
        <table class="nu-gate-table">
          <thead>
            <tr>
              <th style="width:56px;">#</th>
              <th>Step</th>
              <th style="width:30%;">What It Does</th>
              <th style="width:110px;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class="nu-gate-name">Merge feature/sa-v5-completion &rarr; main</td>
              <td>Single-commit PR with full Phase C diff. Aaron approves, squash-merges.</td>
              <td><span class="nu-pill gate">Gate</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td class="nu-gate-name">Tag release v5.0.0</td>
              <td>Annotated tag on main. Marks the final version &mdash; no further V-number rev.</td>
              <td><span class="nu-pill gate">Gate</span></td>
            </tr>
            <tr>
              <td>3</td>
              <td class="nu-gate-name">Retire V1&ndash;V4 code paths</td>
              <td>Delete legacy handlers, routers, and templates. Keep read-only archive in /legacy/.</td>
              <td><span class="nu-pill gate">Gate</span></td>
            </tr>
            <tr>
              <td>4</td>
              <td class="nu-gate-name">Freeze schema</td>
              <td>schemas/v5-final.json becomes the canonical reference. Migrations lock-down.</td>
              <td><span class="nu-pill gate">Gate</span></td>
            </tr>
            <tr>
              <td>5</td>
              <td class="nu-gate-name">Publish operator runbook</td>
              <td>One page on ops.norrisutilities.com describing daily flow, alerts, and rollback.</td>
              <td><span class="nu-pill gate">Gate</span></td>
            </tr>
            <tr>
              <td>6</td>
              <td class="nu-gate-name">Push to ops.norrisutilities.com</td>
              <td>Follow permanent GitHub push rule. Telegram alert on push failure.</td>
              <td><span class="nu-pill gate">Gate</span></td>
            </tr>
            <tr>
              <td>7</td>
              <td class="nu-gate-name">72-hour stabilization watch</td>
              <td>Daily morning brief review. Invoicing pulse KPI tiles monitored.</td>
              <td><span class="nu-pill watch">Watch</span></td>
            </tr>
            <tr>
              <td>8</td>
              <td class="nu-gate-name">Declare V5 Final</td>
              <td>Post-completion queue Q1&ndash;Q15 unblocked. V5 becomes the baseline for all future work.</td>
              <td><span class="nu-pill pass">Close</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="word-1">Risk</span> <span class="rest">&amp; Rollback</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-callout">
          <div class="nu-callout-title">If anything breaks within 72 hours&hellip;</div>
          <div class="nu-callout-body">
            Do not patch in place. Execute the rehearsed rollback: <code>git revert</code> the v5.0.0 merge commit on main,
            redeploy ops.norrisutilities.com from the prior tag, and send a Telegram alert so the operator (Aaron) knows V5
            was reverted and why. Treat the incident with Rule&nbsp;1 &mdash; honesty. No silent fixes, no &ldquo;probably
            nothing.&rdquo; Capture the failure signature, then plan a Phase&nbsp;C.1 before re-attempting cutover.
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;margin-top:22px;">
          <div class="nu-status-card watch">
            <div class="nu-card-label">Risk &middot; Data Drift</div>
            <div class="nu-card-title">Shipments not invoiced</div>
            <div class="nu-card-body">March 20 shipments (~$5,760+) remain uninvoiced in QuickBooks. Reconciliation is Phase E work &mdash; not a cutover blocker, but tracked on the open-invoices truth file.</div>
          </div>
          <div class="nu-status-card watch">
            <div class="nu-card-label">Risk &middot; Brand Render</div>
            <div class="nu-card-title">Phoenix pulse window</div>
            <div class="nu-card-body">Assertion widened from 0.10 exact to [0.10, 0.14]. If visual regression appears, narrow the window back and investigate renderer, do not disable the test.</div>
          </div>
          <div class="nu-status-card gate">
            <div class="nu-card-label">Control</div>
            <div class="nu-card-title">Morning brief at 4:00 AM CT</div>
            <div class="nu-card-body">First 72 hours, Aaron reads the brief daily on Telegram. Any anomaly &rarr; rollback first, diagnose second.</div>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="word-1">Post-Cutover</span> <span class="rest">&mdash; What Unlocks</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-status-grid">
          <div class="nu-status-card go">
            <div class="nu-card-label">Q1 Unblocks</div>
            <div class="nu-card-title">CB silent-draft backlog</div>
            <div class="nu-card-body">$3,685.15 across QB 150-series items can be reviewed and released through the normal review queue.</div>
          </div>
          <div class="nu-status-card go">
            <div class="nu-card-label">Ops Portal</div>
            <div class="nu-card-title">Invoicing pulse KPI live</div>
            <div class="nu-card-body">Six live tiles above the Shipments table. Time-window toggle: Today / Week / Month / Quarter / YTD.</div>
          </div>
          <div class="nu-status-card go">
            <div class="nu-card-label">Automation</div>
            <div class="nu-card-title">Email + FlexPro filter + Morning brief</div>
            <div class="nu-card-body">V2.2 automations run against V5 as the single source of truth &mdash; no legacy fallbacks reachable.</div>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="word-1">Go</span> <span class="rest">/ No-Go</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-go-block">
          <div class="nu-go-left">
            <div class="nu-go-kicker">Decision &middot; 2026-04-24</div>
            <div class="nu-go-title">V5 is the final version. Ship it to production.</div>
            <div class="nu-go-body">
              Phase A is live. Phase B is closed. Phase C is ready to merge with a rehearsed rollback. Approval is Aaron&rsquo;s,
              executed under the permanent GitHub push rule to ops.norrisutilities.com.
            </div>
          </div>
          <div class="nu-go-stamp">Approved &middot; GO</div>
        </div>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment&reg;</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &middot; Norris Utilities&reg;, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &middot;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &middot;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>