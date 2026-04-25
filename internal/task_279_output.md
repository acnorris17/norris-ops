<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Water Intrusion Remediation Action Plan — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-warning-amber: #E89923;
      --nu-success-green: #2D7A3E;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }
    .nu-header * { position: relative; z-index: 2; }
    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
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
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 14px 40px;
    }
    .nu-meta-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: 18px 32px;
      justify-content: space-between;
      align-items: center;
      font-size: 0.82rem;
      color: var(--nu-body-text);
    }
    .nu-meta-item strong {
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.72rem;
      display: block;
      margin-bottom: 2px;
    }

    /* ══ MAIN CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 40px 60px;
    }
    .nu-content-inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* ══ PAGE TITLE ══ */
    .nu-page-title-block {
      margin-bottom: 32px;
      padding-bottom: 20px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-page-eyebrow {
      display: inline-block;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 5px 14px;
      border-radius: 3px;
      margin-bottom: 14px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .nu-page-title span {
      color: var(--nu-blue);
    }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 820px;
    }

    /* ══ SECTION ══ */
    .nu-section {
      margin-bottom: 36px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .nu-first {
      color: var(--nu-blue);
    }
    .nu-section-title .nu-rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ ALERT BANNER ══ */
    .nu-alert {
      background: var(--nu-white);
      border-left: 6px solid var(--nu-alert-red);
      border-radius: 6px;
      padding: 22px 26px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      margin-bottom: 36px;
      display: flex;
      gap: 18px;
      align-items: flex-start;
    }
    .nu-alert-icon {
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      background: var(--nu-alert-red);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.4rem;
    }
    .nu-alert-body h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-alert-red);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .nu-alert-body p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }

    /* ══ STATUS GRID ══ */
    .nu-status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 12px;
    }
    .nu-status-tile {
      background: var(--nu-white);
      border-top: 4px solid var(--nu-blue);
      border-radius: 4px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-status-tile.tile-amber { border-top-color: var(--nu-warning-amber); }
    .nu-status-tile.tile-cyan { border-top-color: var(--nu-cyan); }
    .nu-status-tile.tile-navy { border-top-color: var(--nu-navy); }
    .nu-status-label {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .nu-status-value {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-status-note {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 6px;
    }

    /* ══ BADGES (chevron) ══ */
    .nu-badge-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 10px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      width: 28px;
      height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 12px;
      flex-shrink: 0;
    }

    /* ══ ACTION CARDS ══ */
    .nu-action-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 18px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      display: flex;
      flex-direction: column;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-card-head {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-light-gray);
    }
    .nu-card-num {
      width: 36px;
      height: 36px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
      flex-shrink: 0;
    }
    .nu-card-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .nu-card-meta {
      font-size: 0.78rem;
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 2px;
    }
    .nu-card-body p {
      font-size: 0.93rem;
      margin-bottom: 10px;
    }
    .nu-card-body ul {
      list-style: none;
      padding: 0;
      margin: 0 0 10px 0;
    }
    .nu-card-body ul li {
      font-size: 0.92rem;
      padding: 5px 0 5px 20px;
      position: relative;
    }
    .nu-card-body ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 6px;
      font-size: 1.1rem;
      line-height: 1;
      top: 7px;
    }
    .nu-card-foot {
      margin-top: auto;
      padding-top: 12px;
      border-top: 1px dashed var(--nu-medium-gray);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.82rem;
    }
    .nu-card-foot .owner {
      color: var(--nu-body-text);
    }
    .nu-card-foot .owner strong {
      color: var(--nu-dark-text);
    }
    .nu-pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .pill-now { background: var(--nu-alert-red); color: var(--nu-white); }
    .pill-72 { background: var(--nu-warning-amber); color: var(--nu-white); }
    .pill-week { background: var(--nu-cyan); color: var(--nu-navy); }
    .pill-30 { background: var(--nu-navy); color: var(--nu-white); }

    /* ══ CONTRACTOR TABLE ══ */
    .nu-table-wrap {
      background: var(--nu-white);
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      overflow: hidden;
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
    }
    .nu-table thead th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .nu-table tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:hover { background: var(--nu-light-gray); }
    .nu-table tbody td.contractor {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-table tbody td.scope {
      color: var(--nu-body-text);
    }
    .nu-table tbody td.phone {
      white-space: nowrap;
      font-weight: 700;
      color: var(--nu-blue);
    }

    /* ══ SPLIT INFO ══ */
    .nu-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .nu-info-box {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-info-box h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-light-gray);
    }
    .nu-info-box p, .nu-info-box li {
      font-size: 0.9rem;
      margin-bottom: 6px;
    }
    .nu-info-box ul {
      list-style: none;
      padding: 0;
    }
    .nu-info-box ul li {
      padding: 3px 0 3px 18px;
      position: relative;
    }
    .nu-info-box ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 4px;
    }

    /* ══ COST TABLE ══ */
    .nu-cost-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      font-size: 0.9rem;
    }
    .nu-cost-table td {
      padding: 8px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-cost-table td.amt {
      text-align: right;
      font-weight: 700;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .nu-cost-table tr.total td {
      border-top: 2px solid var(--nu-navy);
      border-bottom: none;
      padding-top: 12px;
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
    }

    /* ══ RISK CALLOUT ══ */
    .nu-risk-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .nu-risk {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-warning-amber);
      padding: 14px 18px;
      border-radius: 4px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .nu-risk h5 {
      font-weight: 900;
      font-size: 0.88rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-risk p {
      font-size: 0.84rem;
      color: var(--nu-body-text);
    }

    /* ══ SIGN-OFF ══ */
    .nu-signoff {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 28px 32px;
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      align-items: center;
      justify-content: space-between;
    }
    .nu-signoff h4 {
      font-weight: 900;
      font-size: 1.2rem;
      margin-bottom: 4px;
    }
    .nu-signoff p {
      font-size: 0.92rem;
      opacity: 0.95;
    }
    .nu-signoff .sign-lines {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
    }
    .nu-signoff .sig-line {
      border-bottom: 2px solid var(--nu-white);
      width: 200px;
      padding-bottom: 4px;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      opacity: 0.9;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 1.9rem; letter-spacing: 0.18em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 36px 20px 40px; }
      .nu-meta-bar { padding: 14px 20px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 12px 18px; }
      .nu-split { grid-template-columns: 1fr; }
      .nu-table thead { display: none; }
      .nu-table, .nu-table tbody, .nu-table tr, .nu-table td { display: block; width: 100%; }
      .nu-table tbody tr { border-bottom: 2px solid var(--nu-medium-gray); padding: 10px 0; }
      .nu-table tbody td { border-bottom: none; padding: 6px 16px; }
      .nu-table tbody td.contractor { font-size: 1rem; padding-top: 12px; }
      .nu-signoff { flex-direction: column; align-items: flex-start; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-ghost-phoenix" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 10 L110 35 L140 20 L120 50 L160 40 L130 70 L150 100 L110 80 L100 120 L90 80 L50 100 L70 70 L40 40 L80 50 L60 20 L90 35 Z" fill="white"/>
      <path d="M100 110 L104 140 L120 130 L110 150 L100 190 L90 150 L80 130 L96 140 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- META BAR -->
  <div class="nu-meta-bar">
    <div class="nu-meta-inner">
      <div class="nu-meta-item"><strong>Document</strong>Action Plan — Water Intrusion Remediation</div>
      <div class="nu-meta-item"><strong>Prepared</strong>April 24, 2026</div>
      <div class="nu-meta-item"><strong>Owner</strong>Aaron C. Norris, Founder &amp; CEO</div>
      <div class="nu-meta-item"><strong>Source</strong>reMarkable Action Item</div>
      <div class="nu-meta-item"><strong>Status</strong>OPEN — Action Required</div>
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <!-- TITLE -->
      <div class="nu-page-title-block">
        <div class="nu-page-eyebrow">Priority — Building Envelope</div>
        <h1 class="nu-page-title"><span>Water Intrusion</span> Remediation Action Plan</h1>
        <p class="nu-page-subtitle">Captured action item: address active water intrusion requiring professional waterproofing assessment, remediation, and verified repair. This document defines the scope, sequence, contractor pool, decision points, and budget envelope so the issue moves from "noted" to "closed" without losing days to coordination drift.</p>
      </div>

      <!-- ALERT -->
      <div class="nu-alert">
        <div class="nu-alert-icon">!</div>
        <div class="nu-alert-body">
          <h3>Active Water Intrusion — Time-Sensitive</h3>
          <p>Standing or recurring moisture inside the building envelope drives mold, structural decay, and insurance exposure. Every 24 hours of delay materially increases remediation cost. Initiate Phase 1 (Stabilize &amp; Document) within the next business day even before the contractor walk is booked.</p>
        </div>
      </div>

      <!-- STATUS TILES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Current</span> <span class="nu-rest">Status Snapshot</span></h2>
        <div class="nu-status-grid">
          <div class="nu-status-tile">
            <div class="nu-status-label">Issue</div>
            <div class="nu-status-value">Water Intrusion</div>
            <div class="nu-status-note">Source &amp; severity to be confirmed by Phase 1 inspection</div>
          </div>
          <div class="nu-status-tile tile-amber">
            <div class="nu-status-label">Urgency</div>
            <div class="nu-status-value">High</div>
            <div class="nu-status-note">Active moisture — 72-hour window to dry-out</div>
          </div>
          <div class="nu-status-tile tile-cyan">
            <div class="nu-status-label">Phase</div>
            <div class="nu-status-value">Phase 0 → 1</div>
            <div class="nu-status-note">Captured. Moving to Stabilize &amp; Document.</div>
          </div>
          <div class="nu-status-tile tile-navy">
            <div class="nu-status-label">Owner</div>
            <div class="nu-status-value">Aaron C. Norris</div>
            <div class="nu-status-note">Direct line: 205-500-1343</div>
          </div>
        </div>
      </section>

      <!-- 5 PHASES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Five-Phase</span> <span class="nu-rest">Remediation Sequence</span></h2>
        <div class="nu-badge-list">
          <div class="nu-badge"><span class="nu-badge-num">1</span>STABILIZE &amp; DOCUMENT</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>PROFESSIONAL ASSESSMENT</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>SCOPE &amp; BIDS</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>REMEDIATION &amp; WATERPROOFING</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span>VERIFY &amp; WARRANTY</div>
        </div>
      </section>

      <!-- ACTION CARDS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Action</span> <span class="nu-rest">Plan — Step by Step</span></h2>
        <div class="nu-action-grid">

          <!-- CARD 1 -->
          <div class="nu-card">
            <div class="nu-card-head">
              <div class="nu-card-num">1</div>
              <div>
                <div class="nu-card-title">Stop the Active Intrusion &amp; Protect Contents</div>
                <div class="nu-card-meta">Phase 1 — Stabilize</div>
              </div>
            </div>
            <div class="nu-card-body">
              <p>Before any contractor arrives, contain the damage and preserve the evidence trail.</p>
              <ul>
                <li>Identify visible source: roof, window, foundation, plumbing, HVAC condensate</li>
                <li>Move contents, documents, and equipment out of the wet zone</li>
                <li>Place buckets / tarps / plastic sheeting where water still enters</li>
                <li>Photograph everything — wide shot + close-up + timestamp</li>
                <li>Shut off water main if leak is suspected to be plumbing</li>
              </ul>
            </div>
            <div class="nu-card-foot">
              <div class="owner">Owner: <strong>Aaron C. Norris</strong></div>
              <span class="nu-pill pill-now">Today</span>
            </div>
          </div>

          <!-- CARD 2 -->
          <div class="nu-card">
            <div class="nu-card-head">
              <div class="nu-card-num">2</div>
              <div>
                <div class="nu-card-title">Run Dehumidifiers &amp; Air Movers</div>
                <div class="nu-card-meta">Phase 1 — Dry-Out Window</div>
              </div>
            </div>
            <div class="nu-card-body">
              <p>Mold colonies establish in 24–48 hours of sustained moisture. Force air movement now.</p>
              <ul>
                <li>Set commercial dehumidifier to 35–45% RH target</li>
                <li>Run two air movers at minimum on the affected wall &amp; floor</li>
                <li>Pull baseboards if water tracked behind them</li>
                <li>Drill weep holes only if directed by the assessor — do not guess</li>
              </ul>
            </div>
            <div class="nu-card-foot">
              <div class="owner">Owner: <strong>Aaron C. Norris</strong></div>
              <span class="nu-pill pill-72">≤ 72 hours</span>
            </div>
          </div>

          <!-- CARD 3 -->
          <div class="nu-card">
            <div class="nu-card-head">
              <div class="nu-card-num">3</div>
              <div>
                <div class="nu-card-title">Book Professional Waterproofing Assessment</div>
                <div class="nu-card-meta">Phase 2 — Diagnose Source</div>
              </div>
            </div>
            <div class="nu-card-body">
              <p>The amateur question is "where is the water?" — the professional question is "what is the water path?" Do not skip this step.</p>
              <ul>
                <li>Schedule licensed waterproofing contractor with moisture meter &amp; thermal imaging</li>
                <li>Request written assessment with: source, path, scope of damage, recommended fix</li>
                <li>Ask for photos of every test point — moisture readings logged</li>
                <li>Confirm credentials: state license, GL insurance, workers comp</li>
              </ul>
            </div>
            <div class="nu-card-foot">
              <div class="owner">Owner: <strong>Aaron C. Norris</strong></div>
              <span class="nu-pill pill-72">≤ 72 hours</span>
            </div>
          </div>

          <!-- CARD 4 -->
          <div class="nu-card">
            <div class="nu-card-head">
              <div class="nu-card-num">4</div>
              <div>
                <div class="nu-card-title">Collect Three Written Bids — Apples to Apples</div>
                <div class="nu-card-meta">Phase 3 — Scope &amp; Bids</div>
              </div>
            </div>
            <div class="nu-card-body">
              <p>One bid is a price. Three bids is a market. Use the same scope sheet for all three so the comparison is honest.</p>
              <ul>
                <li>Define scope from the assessment: exterior waterproofing, interior membrane, drainage, repair</li>
                <li>Require itemized line items — not lump-sum "waterproofing package"</li>
                <li>Demand warranty terms in writing: years, what's covered, transferability</li>
                <li>Verify license + insurance before bid review — drop unlicensed bidders</li>
              </ul>
            </div>
            <div class="nu-card-foot">
              <div class="owner">Owner: <strong>Aaron C. Norris</strong></div>
              <span class="nu-pill pill-week">Within 1 Week</span>
            </div>
          </div>

          <!-- CARD 5 -->
          <div class="nu-card">
            <div class="nu-card-head">
              <div class="nu-card-num">5</div>
              <div>
                <div class="nu-card-title">Notify Insurance Carrier &amp; Open Claim File</div>
                <div class="nu-card-meta">Phase 3 — Risk Transfer</div>
              </div>
            </div>
            <div class="nu-card-body">
              <p>Even if the claim is not filed, opening a documented file protects coverage if hidden damage surfaces later.</p>
              <ul>
                <li>Call carrier — report date, source, photos, mitigation steps already taken</li>
                <li>Request claim number even if dollars don't yet exceed deductible</li>
                <li>Save the adjuster's contact info and any reference numbers in this file</li>
                <li>Do NOT begin permanent repairs until adjuster has signed off (if claim filed)</li>
              </ul>
            </div>
            <div class="nu-card-foot">
              <div class="owner">Owner: <strong>Aaron C. Norris</strong></div>
              <span class="nu-pill pill-72">≤ 72 hours</span>
            </div>
          </div>

          <!-- CARD 6 -->
          <div class="nu-card">
            <div class="nu-card-head">
              <div class="nu-card-num">6</div>
              <div>
                <div class="nu-card-title">Execute Remediation &amp; Waterproofing</div>
                <div class="nu-card-meta">Phase 4 — Repair</div>
              </div>
            </div>
            <div class="nu-card-body">
              <p>Award contract on signed scope, signed price, and signed warranty. Track daily.</p>
              <ul>
                <li>Pay schedule: deposit at start, progress at midpoint, final on verified completion</li>
                <li>Daily photo log — kept by contractor, copied to Aaron via Telegram</li>
                <li>Mold remediation only by IICRC-certified firm if fungal growth is found</li>
                <li>Replace damaged drywall, insulation, flooring with new — no patch over wet</li>
              </ul>
            </div>
            <div class="nu-card-foot">
              <div class="owner">Owner: <strong>Awarded Contractor</strong></div>
              <span class="nu-pill pill-30">Within 30 Days</span>
            </div>
          </div>

          <!-- CARD 7 -->
          <div class="nu-card">
            <div class="nu-card-head">
              <div class="nu-card-num">7</div>
              <div>
                <div class="nu-card-title">Verify the Fix Held — Don't Trust, Test</div>
                <div class="nu-card-meta">Phase 5 — Verify</div>
              </div>
            </div>
            <div class="nu-card-body">
              <p>The job is not done when the contractor leaves. The job is done when the next heavy rain proves it.</p>
              <ul>
                <li>Hose test or wait for next significant rainfall — re-inspect after</li>
                <li>Re-take moisture readings on the same points logged in Phase 2</li>
                <li>Walk the area at 30 days post-completion with the contractor present</li>
                <li>Hold final 10% retainage until 30-day verification is signed off</li>
              </ul>
            </div>
            <div class="nu-card-foot">
              <div class="owner">Owner: <strong>Aaron C. Norris</strong></div>
              <span class="nu-pill pill-30">+30 Days Post-Repair</span>
            </div>
          </div>

          <!-- CARD 8 -->
          <div class="nu-card">
            <div class="nu-card-head">
              <div class="nu-card-num">8</div>
              <div>
                <div class="nu-card-title">File Warranty &amp; Close the Loop</div>
                <div class="nu-card-meta">Phase 5 — Warranty &amp; Records</div>
              </div>
            </div>
            <div class="nu-card-body">
              <p>Convert the project into a permanent record so future owners, insurers, and inspectors can verify the work.</p>
              <ul>
                <li>Save signed warranty document — paper + digital scan</li>
                <li>Log all invoices, photos, moisture readings to project file</li>
                <li>Update insurance policy with completion documentation</li>
                <li>Add 6-month and 12-month follow-up inspections to calendar</li>
              </ul>
            </div>
            <div class="nu-card-foot">
              <div class="owner">Owner: <strong>Aaron C. Norris</strong></div>
              <span class="nu-pill pill-30">Project Close</span>
            </div>
          </div>

        </div>
      </section>

      <!-- CONTRACTOR POOL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Birmingham</span> <span class="nu-rest">Contractor Pool — Get Three Bids</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Contractor Type</th>
                <th>Scope</th>
                <th>Action</th>
                <th>Lead Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="contractor">Licensed Waterproofing Contractor</td>
                <td class="scope">Foundation, basement, exterior membrane, French drain, sump pump systems</td>
                <td class="phone">Get 3 bids — verify AL state license</td>
                <td>3–7 days to walk</td>
              </tr>
              <tr>
                <td class="contractor">Roofing Contractor</td>
                <td class="scope">If source is roof penetration, flashing, or attic — coordinate with waterproofer</td>
                <td class="phone">Get 2 bids — require photo report</td>
                <td>2–5 days to walk</td>
              </tr>
              <tr>
                <td class="contractor">Water Mitigation / IICRC Firm</td>
                <td class="scope">Emergency dry-out, anti-microbial, contents removal, mold testing</td>
                <td class="phone">Call within 24 hours</td>
                <td>Same day to 24 hours</td>
              </tr>
              <tr>
                <td class="contractor">Licensed Plumber</td>
                <td class="scope">Rule out supply line, drain line, water heater, slab leak as source</td>
                <td class="phone">Book leak detection service</td>
                <td>1–3 days</td>
              </tr>
              <tr>
                <td class="contractor">Independent Mold Inspector</td>
                <td class="scope">Third-party air sampling &amp; surface testing — independent of remediation firm</td>
                <td class="phone">Only if mold growth is visible</td>
                <td>5–10 days for lab</td>
              </tr>
              <tr>
                <td class="contractor">Insurance Adjuster</td>
                <td class="scope">Document loss, authorize covered repairs, set claim reserve</td>
                <td class="phone">Call carrier first — adjuster assigned</td>
                <td>2–5 days to inspect</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- BUDGET + DECISION CRITERIA -->
      <section class="nu-section">
        <div class="nu-split">
          <div class="nu-info-box">
            <h4>Estimated Budget Envelope</h4>
            <p>Working ranges to set expectations. Final scope drives final price.</p>
            <table class="nu-cost-table">
              <tr>
                <td>Emergency Dry-Out (3–5 days)</td>
                <td class="amt">$1,200 – $3,500</td>
              </tr>
              <tr>
                <td>Professional Assessment</td>
                <td class="amt">$300 – $850</td>
              </tr>
              <tr>
                <td>Plumbing Leak Detection</td>
                <td class="amt">$250 – $600</td>
              </tr>
              <tr>
                <td>Mold Testing (if needed)</td>
                <td class="amt">$400 – $900</td>
              </tr>
              <tr>
                <td>Interior Waterproofing &amp; Repair</td>
                <td class="amt">$3,500 – $9,500</td>
              </tr>
              <tr>
                <td>Exterior Waterproofing (if foundation)</td>
                <td class="amt">$8,000 – $22,000</td>
              </tr>
              <tr class="total">
                <td>Working Reserve to Set Aside</td>
                <td class="amt">$15,000 – $25,000</td>
              </tr>
            </table>
          </div>

          <div class="nu-info-box">
            <h4>Bid Selection Criteria</h4>
            <p>Lowest bid is rarely the right bid for waterproofing — judge on full picture.</p>
            <ul>
              <li><strong>License &amp; Insurance.</strong> Active AL contractor license, GL minimum $1M, workers comp current</li>
              <li><strong>Warranty.</strong> Minimum 5-year transferable on workmanship; manufacturer warranty on materials</li>
              <li><strong>References.</strong> Three local jobs completed within 24 months — call them</li>
              <li><strong>Scope Clarity.</strong> Itemized — not lump sum. Materials brand &amp; spec listed.</li>
              <li><strong>Pay Schedule.</strong> No more than 25–30% deposit. Final 10% retainage held 30 days.</li>
              <li><strong>Communication.</strong> Daily photo updates required. PM cell on file.</li>
              <li><strong>Permit.</strong> Pulled by contractor — never homeowner-pulled to bypass inspection.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- RISK CALLOUTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first">Risk</span> <span class="nu-rest">Watch — Don't Get Burned</span></h2>
        <div class="nu-risk-row">
          <div class="nu-risk">
            <h5>Door-to-Door "Inspectors"</h5>
            <p>If anyone shows up unsolicited offering free inspections after rain, send them away. Real contractors are booked, not cruising neighborhoods.</p>
          </div>
          <div class="nu-risk">
            <h5>Mold Test + Mold Removal Same Firm</h5>
            <p>Conflict of interest. The firm that tests should not be the firm that profits from "finding" mold to remove. Use independent inspector.</p>
          </div>
          <div class="nu-risk">
            <h5>Lump-Sum Bids</h5>
            <p>"Waterproofing — $14,500." That's not a bid; that's a number. Demand line items. If they refuse, walk.</p>
          </div>
          <div class="nu-risk">
            <h5>Cash-Only Discounts</h5>
            <p>Unlicensed, uninsured, or running cash-side of a real business. You lose all warranty leverage. Never pay cash for waterproofing.</p>
          </div>
          <div class="nu-risk">
            <h5>Painting Over Damage</h5>
            <p>Mold-resistant paint is not a remediation strategy. Remove the wet material, fix the source, then finish. No shortcuts.</p>
          </div>
          <div class="nu-risk">
            <h5>Skipping the 30-Day Verification</h5>
            <p>Pay-and-walk-away ends warranty leverage. Hold the final retainage. Verify after the next real rain event.</p>
          </div>
        </div>
      </section>

      <!-- SIGN-OFF -->
      <div class="nu-signoff">
        <div>
          <h4>Action Plan Acknowledged</h4>
          <p>Document owner accepts the sequence above and authorizes Phase 1 execution today.</p>
        </div>
        <div class="sign-lines">
          <div class="sig-line">Aaron C. Norris — Date</div>
          <div class="sig-line">Contractor Awarded — Date</div>
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