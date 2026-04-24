<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Take V5 to Production — Final Version Action Plan — Norris Utilities®</title>
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
      --nu-success: #1B7F3A;
      --nu-warn: #C77800;
      --nu-danger: #B91C1C;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      width: 70%;
      max-width: 420px;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.12;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
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
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-eyebrow {
      display: inline-block;
      margin-top: 26px;
      padding: 6px 16px;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 999px;
      color: var(--nu-white);
      font-size: 0.78rem;
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
      padding: 50px 0 60px;
    }
    .nu-wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* DOC TITLE */
    .doc-title {
      text-align: center;
      margin-bottom: 36px;
    }
    .doc-title h1 {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.2;
    }
    .doc-title h1 .lead {
      color: var(--nu-blue);
      display: block;
      font-size: 1rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      margin-bottom: 10px;
      font-weight: 900;
    }
    .doc-title .meta {
      margin-top: 14px;
      color: #555;
      font-size: 0.92rem;
    }
    .doc-title .meta strong { color: var(--nu-dark-text); }

    /* BANNER */
    .status-banner {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 20px;
      align-items: center;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 60%, #0066ee 100%);
      color: var(--nu-white);
      padding: 22px 26px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,80,0.18);
      margin-bottom: 36px;
    }
    .status-banner .badge {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 8px 14px;
      border-radius: 8px;
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .status-banner h2 {
      font-weight: 900;
      font-size: 1.15rem;
      letter-spacing: 0.02em;
      margin-bottom: 4px;
    }
    .status-banner p {
      font-size: 0.92rem;
      color: rgba(255,255,255,0.88);
    }
    .status-banner .pill {
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.35);
      padding: 8px 14px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.05em;
    }

    /* SECTION HEAD */
    .section-head {
      margin: 40px 0 18px;
    }
    .section-head h2 {
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .section-head h2 .first {
      color: var(--nu-blue);
    }
    .section-head .sub {
      color: #555;
      font-size: 0.95rem;
      margin-top: 4px;
    }

    /* CARDS */
    .grid {
      display: grid;
      gap: 16px;
    }
    .grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
    .grid.cols-4 { grid-template-columns: repeat(4, 1fr); }
    .grid.cols-2 { grid-template-columns: repeat(2, 1fr); }

    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-card .kpi {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-blue);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .nu-card .label {
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #777;
      font-weight: 700;
    }
    .nu-card p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* PHASE TABLE */
    .phase-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .phase-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-weight: 900;
    }
    .phase-table td {
      padding: 14px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .phase-table tr:nth-child(even) td { background: #fafafc; }
    .phase-table .phase-tag {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .tag-done { background: #E0F4E7; color: var(--nu-success); }
    .tag-active { background: #E6EFFF; color: var(--nu-blue); }
    .tag-next { background: #FFF1DA; color: var(--nu-warn); }
    .tag-block { background: #FDE2E2; color: var(--nu-danger); }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      display: grid;
      gap: 10px;
    }
    .checklist li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 14px 16px;
      border-radius: 8px;
      display: grid;
      grid-template-columns: 28px 1fr auto;
      gap: 12px;
      align-items: start;
      font-size: 0.93rem;
    }
    .checklist li .num {
      width: 26px; height: 26px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.78rem;
    }
    .checklist li .owner {
      font-size: 0.74rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #777;
      font-weight: 700;
      white-space: nowrap;
    }
    .checklist li.done { border-left-color: var(--nu-success); }
    .checklist li.done .num { background: var(--nu-success); }
    .checklist li.active { border-left-color: var(--nu-cyan); }
    .checklist li.active .num { background: var(--nu-cyan); color: var(--nu-navy); }

    /* GATES */
    .gate-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .gate {
      background: var(--nu-white);
      border-radius: 10px;
      border: 1px solid var(--nu-medium-gray);
      padding: 20px;
      position: relative;
      overflow: hidden;
    }
    .gate::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 6px; height: 100%;
      background: var(--nu-blue);
    }
    .gate.pass::before { background: var(--nu-success); }
    .gate.review::before { background: var(--nu-warn); }
    .gate h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .gate .sub {
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #777;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .gate .stat {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-blue);
    }
    .gate.pass .stat { color: var(--nu-success); }
    .gate.review .stat { color: var(--nu-warn); }
    .gate p { font-size: 0.9rem; margin-top: 6px; }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #fff 0%, #f4f7ff 100%);
      border: 1px solid #d9e2ff;
      border-left: 6px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 10px;
      margin: 28px 0;
    }
    .callout h3 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .callout p { font-size: 0.95rem; color: var(--nu-dark-text); }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
      margin-top: 10px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .timeline .t-row {
      position: relative;
      margin-bottom: 16px;
      padding: 14px 18px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
    }
    .timeline .t-row::before {
      content: '';
      position: absolute;
      left: -24px; top: 22px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-cyan);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline .t-when {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .timeline .t-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      margin-bottom: 4px;
    }
    .timeline .t-body { font-size: 0.9rem; color: #555; }

    /* RISK TABLE */
    .risk {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
    }
    .risk th {
      background: #f1f4fa;
      color: var(--nu-dark-text);
      padding: 12px 14px;
      text-align: left;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 900;
    }
    .risk td {
      padding: 12px 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
      vertical-align: top;
    }
    .sev {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 6px;
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .sev-low { background: #E0F4E7; color: var(--nu-success); }
    .sev-med { background: #FFF1DA; color: var(--nu-warn); }
    .sev-high { background: #FDE2E2; color: var(--nu-danger); }

    /* SIGNOFF */
    .signoff {
      margin-top: 36px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 12px;
      padding: 26px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .signoff h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .sign-line {
      margin-top: 30px;
      border-top: 2px solid var(--nu-dark-text);
      padding-top: 6px;
      font-size: 0.85rem;
      color: #555;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 32px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
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
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 980px) {
      .grid.cols-4 { grid-template-columns: repeat(2, 1fr); }
      .grid.cols-3 { grid-template-columns: repeat(2, 1fr); }
      .gate-grid { grid-template-columns: 1fr; }
      .signoff { grid-template-columns: 1fr; }
      .status-banner { grid-template-columns: 1fr; text-align: left; }
      .status-banner .pill { justify-self: start; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .doc-title h1 { font-size: 1.5rem; }
      .nu-wrap { padding: 0 18px; }
      .grid.cols-4, .grid.cols-3, .grid.cols-2 { grid-template-columns: 1fr; }
      .phase-table th, .phase-table td { font-size: 0.82rem; padding: 10px 12px; }
      .checklist li { grid-template-columns: 26px 1fr; }
      .checklist li .owner { grid-column: 2 / -1; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">U T I L I T I E S</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-eyebrow">Internal Action Plan · reMarkable</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- DOC TITLE -->
      <div class="doc-title">
        <h1>
          <span class="lead">reMarkable Action Item</span>
          Take SA V5 to Production — Final Version
        </h1>
        <div class="meta">
          Owner: <strong>Aaron C. Norris</strong> ·
          Captured: <strong>2026-04-24</strong> ·
          Working branch: <strong>feature/sa-v5-completion</strong> ·
          Target portal: <strong>ops.norrisutilities.com</strong>
        </div>
      </div>

      <!-- STATUS BANNER -->
      <div class="status-banner">
        <span class="badge">Phase B</span>
        <div>
          <h2>SA V5 is feature-complete — promote to Production as the FINAL version</h2>
          <p>Phase A live since 2026-04-23 (76/76 tests passing, norris-ops HEAD 1d86e5a). Phase B §1.5 through §8 backend merged on feature branch. Final cut is the last version of SA — no V6 planned.</p>
        </div>
        <span class="pill">No V6 — V5 is final</span>
      </div>

      <!-- KPI CARDS -->
      <div class="section-head">
        <h2><span class="first">Production</span> Readiness Snapshot</h2>
        <div class="sub">Real numbers from the working branch as of capture date.</div>
      </div>

      <div class="grid cols-4" style="margin-bottom: 12px;">
        <div class="nu-card">
          <div class="label">Tests Passing</div>
          <div class="kpi">76 / 76</div>
          <p>Phase A baseline locked in production since 2026-04-23.</p>
        </div>
        <div class="nu-card">
          <div class="label">Branch Commits Ahead</div>
          <div class="kpi">5</div>
          <p>§1.5 phoenix opacity, §6 notes editor, §7 fuzzy/canonical, §7-recon, §8 payment_rules.</p>
        </div>
        <div class="nu-card">
          <div class="label">New Backend Subsystems</div>
          <div class="kpi">3</div>
          <p>payment_rules, notes_auto, fuzzy/alias canonical enforcement.</p>
        </div>
        <div class="nu-card">
          <div class="label">Days Since Phase A Live</div>
          <div class="kpi">1</div>
          <p>Soak window for Phase A in production before Phase B promotion.</p>
        </div>
      </div>

      <!-- PHASE TABLE -->
      <div class="section-head">
        <h2><span class="first">Phase</span> Status — Promote in This Order</h2>
        <div class="sub">Phase A is already live. Phase B is what gets promoted in this push.</div>
      </div>

      <table class="phase-table" aria-label="Phase status">
        <thead>
          <tr>
            <th style="width: 14%;">Phase</th>
            <th style="width: 38%;">Scope</th>
            <th style="width: 16%;">State</th>
            <th>Evidence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Phase A</strong></td>
            <td>NU brand applied; Gate A preserved; baseline shipments + invoicing UI.</td>
            <td><span class="phase-tag tag-done">Live</span></td>
            <td>norris-ops HEAD 1d86e5a · 76/76 tests · 2026-04-23</td>
          </tr>
          <tr>
            <td><strong>B §1.5</strong></td>
            <td>Phoenix opacity assertion accepts pulse window [0.10, 0.14].</td>
            <td><span class="phase-tag tag-done">Merged</span></td>
            <td>commit b1fa954</td>
          </tr>
          <tr>
            <td><strong>B §6</strong></td>
            <td>Notes editor + invoice archive tests (Playwright + ledger writes).</td>
            <td><span class="phase-tag tag-done">Merged</span></td>
            <td>commit be37590</td>
          </tr>
          <tr>
            <td><strong>B §7-full</strong></td>
            <td>Fuzzy match + canonical enforcement + add_alias + morning brief + remediation scan.</td>
            <td><span class="phase-tag tag-done">Merged</span></td>
            <td>commit ca27f5a</td>
          </tr>
          <tr>
            <td><strong>B §7-recon</strong></td>
            <td>Data truth-up reconciliation (backend).</td>
            <td><span class="phase-tag tag-done">Merged</span></td>
            <td>commit 6a7a915</td>
          </tr>
          <tr>
            <td><strong>B §8 backend</strong></td>
            <td>payment_rules + notes_auto + tests.</td>
            <td><span class="phase-tag tag-done">Merged</span></td>
            <td>commit fb60ba7</td>
          </tr>
          <tr>
            <td><strong>B Promotion</strong></td>
            <td>Squash-merge feature/sa-v5-completion → main, deploy to ops.norrisutilities.com.</td>
            <td><span class="phase-tag tag-active">In progress</span></td>
            <td>This document</td>
          </tr>
          <tr>
            <td><strong>V5 Final Tag</strong></td>
            <td>Cut release tag <code>sa-v5.0.0-final</code> on main; archive working branches.</td>
            <td><span class="phase-tag tag-next">Next</span></td>
            <td>Pending promotion</td>
          </tr>
        </tbody>
      </table>

      <!-- CALLOUT -->
      <div class="callout">
        <h3>Why this is the FINAL version</h3>
        <p>SA V5 closes the open scope: NU brand, Gate A invoicing pulse, payment_rules, notes_auto, fuzzy/alias canonical enforcement, and reconciliation. There is no V6 on the roadmap. Once <strong>sa-v5.0.0-final</strong> is tagged, the post-completion queue (Q1–Q15) becomes the next workstream — not an SA version bump.</p>
      </div>

      <!-- GO-LIVE CHECKLIST -->
      <div class="section-head">
        <h2><span class="first">Go-Live</span> Checklist — In Order</h2>
        <div class="sub">Each item must verify GREEN before the next runs. No skipping.</div>
      </div>

      <ul class="checklist" aria-label="Go-live checklist">
        <li class="active">
          <span class="num">1</span>
          <div>
            <strong>Run full test suite on feature/sa-v5-completion locally.</strong>
            Expect 76/76 + the new Phase B suites added in §1.5, §6, §7, §8. Any RED here halts promotion.
          </div>
          <span class="owner">Aaron · M1 Mac</span>
        </li>
        <li>
          <span class="num">2</span>
          <div>
            <strong>Verify untracked working files are intentional.</strong>
            Resolve modifications to <code>audit_results.json</code>, <code>palace/index.json</code>, <code>task_queue.md</code>, ledger files, and the journal entries dated 2026-04-23 / 2026-04-24 before commit.
          </div>
          <span class="owner">Aaron</span>
        </li>
        <li>
          <span class="num">3</span>
          <div>
            <strong>Open PR: feature/sa-v5-completion → main.</strong>
            Title: "SA V5 Final — Phase B promotion (§1.5, §6, §7, §7-recon, §8)". Body lists each commit and links the test evidence.
          </div>
          <span class="owner">Aaron</span>
        </li>
        <li>
          <span class="num">4</span>
          <div>
            <strong>Run /ultrareview on the PR for independent sign-off.</strong>
            Multi-agent cloud review covers regressions in payment_rules and fuzzy/alias enforcement before merge.
          </div>
          <span class="owner">Aaron · cloud</span>
        </li>
        <li>
          <span class="num">5</span>
          <div>
            <strong>Squash-merge to main.</strong>
            Squash so V5 final lands as one commit on main, making the rollback target unambiguous.
          </div>
          <span class="owner">Aaron</span>
        </li>
        <li>
          <span class="num">6</span>
          <div>
            <strong>Copy build artifacts to ~/norris-ops/ and push.</strong>
            Per Permanent GitHub Push Rule: copy to website/, internal/, tools/, docs/ as appropriate, then <code>git add -A && git commit && git push</code> from <code>~/norris-ops</code>.
          </div>
          <span class="owner">Aaron</span>
        </li>
        <li>
          <span class="num">7</span>
          <div>
            <strong>Confirm ops.norrisutilities.com serves the new HEAD.</strong>
            Hard-refresh, click through Shipments → Invoicing Pulse → Notes → Morning Brief. All Gate A tiles must render.
          </div>
          <span class="owner">Aaron · browser</span>
        </li>
        <li>
          <span class="num">8</span>
          <div>
            <strong>Tag the release: <code>sa-v5.0.0-final</code>.</strong>
            Annotated tag on the squash-merge commit. Push tags to origin. This freezes V5 as the final version.
          </div>
          <span class="owner">Aaron</span>
        </li>
        <li>
          <span class="num">9</span>
          <div>
            <strong>Run remediation scan + morning brief once against production.</strong>
            Confirms §7-full canonical enforcement does not flag legitimate aliases as remediation candidates.
          </div>
          <span class="owner">Aaron</span>
        </li>
        <li>
          <span class="num">10</span>
          <div>
            <strong>Send Telegram confirmation: "SA V5 FINAL is live."</strong>
            Include: HEAD short-SHA on main, tag name, ops.norrisutilities.com timestamp, link to PR.
          </div>
          <span class="owner">Aaron</span>
        </li>
      </ul>

      <!-- GATES -->
      <div class="section-head">
        <h2><span class="first">Promotion</span> Gates — Must Be GREEN</h2>
        <div class="sub">A gate that turns YELLOW pauses the cut. RED rolls back.</div>
      </div>

      <div class="gate-grid">
        <div class="gate pass">
          <h4>Gate A — Test Suite</h4>
          <div class="sub">Phase A Baseline</div>
          <div class="stat">76 / 76 PASSING</div>
          <p>Phase A baseline preserved. New Phase B suites must extend, not replace, this count before merge.</p>
        </div>
        <div class="gate pass">
          <h4>Gate B — Brand Compliance</h4>
          <div class="sub">NU Line Card Design Language</div>
          <div class="stat">PASSING</div>
          <p>Phoenix Icon® opacity inside [0.10, 0.14] window. Norris Utilities® and A Legacy of Commitment® used correctly. FlexPro Armor never carries ®.</p>
        </div>
        <div class="gate review">
          <h4>Gate C — Working Tree Clean</h4>
          <div class="sub">Pre-Merge Hygiene</div>
          <div class="stat">REVIEW</div>
          <p>Untracked task_272–task_292 outputs and modified ledgers (shipments_ledger.jsonl, status_audit_log.jsonl) need a triage commit or .gitignore entry before squash.</p>
        </div>
        <div class="gate pass">
          <h4>Gate D — Backend Subsystems</h4>
          <div class="sub">payment_rules · notes_auto · fuzzy/alias</div>
          <div class="stat">MERGED</div>
          <p>All three backend subsystems committed with passing tests. Canonical enforcement + add_alias verified by §7-full and §7-recon.</p>
        </div>
      </div>

      <!-- TIMELINE -->
      <div class="section-head">
        <h2><span class="first">Cutover</span> Timeline — One-Day Window</h2>
        <div class="sub">Aaron starts at 04:00 CT. Promotion completes inside business hours so customer-facing portal is observed live.</div>
      </div>

      <div class="timeline">
        <div class="t-row">
          <div class="t-when">04:00 CT · 2026-04-25</div>
          <div class="t-title">Local test sweep + working-tree triage</div>
          <div class="t-body">Steps 1–2 of the Go-Live Checklist. Resolve untracked output/internal/task_*.md files and uncommitted ledgers.</div>
        </div>
        <div class="t-row">
          <div class="t-when">06:00 CT</div>
          <div class="t-title">Open PR + run /ultrareview</div>
          <div class="t-body">Steps 3–4. PR targets main. /ultrareview is the independent second opinion before any production touch.</div>
        </div>
        <div class="t-row">
          <div class="t-when">08:30 CT</div>
          <div class="t-title">Squash-merge + push to norris-ops</div>
          <div class="t-body">Steps 5–6. Single commit on main; portal artifacts copied per Permanent GitHub Push Rule.</div>
        </div>
        <div class="t-row">
          <div class="t-when">09:00 CT</div>
          <div class="t-title">Verify ops.norrisutilities.com</div>
          <div class="t-body">Step 7. Click through the Gate A pulse tiles, Notes editor, and morning brief in the live portal.</div>
        </div>
        <div class="t-row">
          <div class="t-when">09:30 CT</div>
          <div class="t-title">Tag sa-v5.0.0-final + production smoke</div>
          <div class="t-body">Steps 8–9. Annotated tag pushed; remediation scan + morning brief executed once against production data.</div>
        </div>
        <div class="t-row">
          <div class="t-when">10:00 CT</div>
          <div class="t-title">Telegram confirmation + post-completion queue activates</div>
          <div class="t-body">Step 10. SA V5 declared FINAL. Q1 (CB silent-draft backlog $3,685.15) becomes the next workstream.</div>
        </div>
      </div>

      <!-- RISK -->
      <div class="section-head">
        <h2><span class="first">Risk</span> Register &amp; Rollback</h2>
        <div class="sub">If anything below trips, follow the Mitigation column before continuing the checklist.</div>
      </div>

      <table class="risk" aria-label="Risk register">
        <thead>
          <tr>
            <th style="width: 22%;">Risk</th>
            <th style="width: 12%;">Severity</th>
            <th style="width: 33%;">Trigger</th>
            <th>Mitigation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Regression in payment_rules</td>
            <td><span class="sev sev-high">High</span></td>
            <td>§8 tests pass locally but production invoice flow misclassifies a payment.</td>
            <td>Roll back to Phase A HEAD 1d86e5a on norris-ops; revert squash commit on main; keep feature branch live for fix.</td>
          </tr>
          <tr>
            <td>Fuzzy / alias false-positive</td>
            <td><span class="sev sev-med">Med</span></td>
            <td>Remediation scan flags a legitimate canonical name as needing remediation post-deploy.</td>
            <td>Run <code>add_alias</code> with the false-positive pair; re-run scan; document the alias in palace rules.</td>
          </tr>
          <tr>
            <td>Phoenix opacity outside [0.10, 0.14]</td>
            <td><span class="sev sev-low">Low</span></td>
            <td>Visual regression test fails on Phase B promotion.</td>
            <td>§1.5 already widened the assertion to the pulse window — confirm asset render matches CSS variable, not a hard-coded literal.</td>
          </tr>
          <tr>
            <td>norris-ops push auth failure</td>
            <td><span class="sev sev-med">Med</span></td>
            <td>Token expired or remote rejects push during Step 6.</td>
            <td>Send Telegram alert per Permanent GitHub Push Rule; refresh token; re-push. Do NOT skip — the build is not live until ops.norrisutilities.com serves it.</td>
          </tr>
          <tr>
            <td>Working-tree contamination</td>
            <td><span class="sev sev-low">Low</span></td>
            <td>Uncommitted task_*.md outputs accidentally squashed into the V5 final commit.</td>
            <td>Move task outputs to <code>output/internal/</code> archive; add pattern to <code>.gitignore</code> if disposable; commit deliberately or stash before squash.</td>
          </tr>
          <tr>
            <td>Brand drift in promoted artifacts</td>
            <td><span class="sev sev-med">Med</span></td>
            <td>Any FlexPro Armor reference picks up an ® symbol; Norris Utilities® or A Legacy of Commitment® missing on first use.</td>
            <td>Pre-push grep on norris-ops for "FlexPro Armor®" — must return zero matches. Verify Phoenix Icon® present where used.</td>
          </tr>
        </tbody>
      </table>

      <!-- POST-COMPLETION -->
      <div class="section-head">
        <h2><span class="first">After</span> V5 Final — Post-Completion Queue Unlocks</h2>
        <div class="sub">These items have been parked behind SA V5 promotion. They become workable the moment the tag is pushed.</div>
      </div>

      <div class="grid cols-2">
        <div class="nu-card">
          <div class="label">Q1 — Highest Priority</div>
          <h3>CB silent-draft backlog</h3>
          <p><strong>$3,685.15</strong> across QuickBooks drafts authored by Caroline Butler awaiting Aaron's review per Tier 1 trust rule.</p>
        </div>
        <div class="nu-card">
          <div class="label">Q2–Q15</div>
          <h3>Remaining post-completion items</h3>
          <p>Captured in <code>palace/post-completion-queue-q1-q15</code>. Triaged in priority order once SA V5 final is tagged and Telegram confirmation is sent.</p>
        </div>
        <div class="nu-card">
          <div class="label">Branch hygiene</div>
          <h3>Archive feature/sa-v5-completion</h3>
          <p>After successful tag, mark the working branch as merged in GitHub UI. Do not delete remotely until 7-day soak completes.</p>
        </div>
        <div class="nu-card">
          <div class="label">Documentation</div>
          <h3>Update palace SA index</h3>
          <p>Refresh <code>palace/sa-v5-phase-a-live-2026-04-23</code> with a final-state record listing the V5 final tag, the squash-merge SHA, and the phase B subsystems shipped.</p>
        </div>
      </div>

      <!-- SIGNOFF -->
      <div class="signoff">
        <div>
          <h3>Approved to Promote</h3>
          <p>By signing, Aaron confirms that all 10 Go-Live Checklist items completed GREEN, all four Promotion Gates are PASS, and the V5 final tag has been pushed to origin.</p>
          <div class="sign-line">Aaron C. Norris · Founder &amp; CEO · Date</div>
        </div>
        <div>
          <h3>Verified Live</h3>
          <p>Production verification: ops.norrisutilities.com serves the squash-merge HEAD; Gate A pulse tiles, Notes editor, and morning brief render correctly; remediation scan completed without false-positives.</p>
          <div class="sign-line">Verification timestamp · Telegram confirmation ID</div>
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