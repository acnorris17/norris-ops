<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
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
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
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

    /* HEADER — Gradient with Infrastructure Overlay */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 70px 40px 100px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
    }

    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
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

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 2px;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* GHOST PHOENIX WATERMARK */
    .nu-ghost-phoenix {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: auto;
      opacity: 0.07;
      z-index: 0;
      pointer-events: none;
    }

    /* CHEVRON TRANSITION — Asymmetric (apex ~38%) */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 50px 0 80px;
      overflow: hidden;
    }

    .nu-content-inner {
      position: relative;
      z-index: 2;
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 40px;
    }

    /* TITLE BAR */
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 18px;
      border-bottom: 2px solid var(--nu-medium-gray);
      margin-bottom: 36px;
    }
    .nu-doc-kicker {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-blue);
    }
    .nu-doc-meta-right {
      font-size: 0.82rem;
      color: #666;
      font-weight: 400;
    }
    .nu-doc-meta-right strong { color: var(--nu-dark-text); font-weight: 700; }

    .nu-doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-doc-title .blue-word { color: var(--nu-blue); }

    .nu-doc-subtitle {
      font-size: 1.1rem;
      color: #555;
      font-weight: 400;
      margin-bottom: 30px;
      max-width: 820px;
    }

    /* SECTION STYLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-top: 50px;
      margin-bottom: 20px;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-section-title .first-word { color: var(--nu-blue); }

    /* EXECUTIVE SUMMARY CARD */
    .nu-exec-card {
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 28px 32px;
      border-radius: 6px;
      margin-bottom: 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .nu-exec-card h3 {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 14px;
    }
    .nu-exec-card p {
      font-size: 1.05rem;
      color: #2a2a3e;
      margin-bottom: 12px;
    }
    .nu-exec-card p:last-child { margin-bottom: 0; }

    /* KEY METRICS GRID */
    .nu-metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 10px;
    }
    .nu-metric {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
      padding: 22px 20px;
      border-radius: 4px;
      text-align: left;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-metric:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 51, 204, 0.08);
    }
    .nu-metric-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 8px;
    }
    .nu-metric-value {
      font-size: 1.75rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .nu-metric-sub {
      font-size: 0.82rem;
      color: #666;
      font-weight: 400;
    }
    .nu-metric.highlight { border-top-color: var(--nu-blue); }
    .nu-metric.highlight .nu-metric-value { color: var(--nu-blue); }

    /* STRATEGY PHASES */
    .nu-phase-list {
      display: grid;
      gap: 18px;
      margin-bottom: 10px;
    }
    .nu-phase {
      display: grid;
      grid-template-columns: 70px 1fr;
      gap: 22px;
      align-items: start;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-phase-num {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0066ee 100%);
      color: var(--nu-white);
      width: 70px;
      height: 70px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      box-shadow: 0 4px 14px rgba(0, 51, 204, 0.25);
    }
    .nu-phase-num-label {
      font-size: 0.58rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      opacity: 0.85;
    }
    .nu-phase-num-value {
      font-size: 1.5rem;
      line-height: 1;
    }
    .nu-phase-body h4 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-phase-body p {
      font-size: 0.95rem;
      color: #444;
      margin-bottom: 10px;
    }
    .nu-phase-body ul {
      list-style: none;
      padding: 0;
    }
    .nu-phase-body ul li {
      position: relative;
      padding-left: 20px;
      font-size: 0.92rem;
      color: #444;
      margin-bottom: 6px;
    }
    .nu-phase-body ul li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* COMPARABLES TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 12px;
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      color: #333;
    }
    .nu-table tbody tr:nth-child(even) { background: #fafbfd; }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table .row-highlight {
      background: #eef4ff !important;
      font-weight: 700;
    }
    .nu-table .row-highlight td { color: var(--nu-blue); }

    /* TACTICS GRID */
    .nu-tactics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .nu-tactic-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }
    .nu-tactic-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 6px; height: 100%;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .nu-tactic-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0, 51, 204, 0.1);
    }
    .nu-tactic-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      padding-left: 14px;
    }
    .nu-tactic-card p {
      font-size: 0.92rem;
      color: #555;
      padding-left: 14px;
    }

    /* WALK-AWAY CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin: 30px 0;
      position: relative;
      overflow: hidden;
    }
    .nu-callout::before {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 250px; height: 100%;
      background: radial-gradient(circle at right, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
    }
    .nu-callout-label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
    }
    .nu-callout-title {
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 14px;
      position: relative;
      z-index: 2;
    }
    .nu-callout p {
      font-size: 1rem;
      color: rgba(255,255,255,0.88);
      position: relative;
      z-index: 2;
    }

    /* CHECKLIST */
    .nu-checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px 32px;
    }
    .nu-checklist li {
      list-style: none;
      padding: 10px 0 10px 34px;
      border-bottom: 1px solid var(--nu-medium-gray);
      position: relative;
      font-size: 0.95rem;
      color: #333;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #0a0e5c 100%);
      color: rgba(255,255,255,0.85);
      padding: 46px 40px 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .nu-footer::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan), var(--nu-blue));
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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
    .nu-footer-small {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      margin-top: 18px;
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 80px; min-height: 260px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-doc-title { font-size: 1.7rem; }
      .nu-doc-meta { flex-direction: column; align-items: flex-start; }
      .nu-content-inner { padding: 0 22px; }
      .nu-section-title { font-size: 1.25rem; margin-top: 36px; }
      .nu-phase { grid-template-columns: 1fr; }
      .nu-phase-num { width: 60px; height: 60px; }
      .nu-exec-card, .nu-callout { padding: 22px; }
      .nu-callout-title { font-size: 1.2rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-metric, .nu-phase, .nu-tactic-card { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L56 22 L72 12 L62 28 L82 22 L66 38 L78 52 L56 42 L50 64 L44 42 L22 52 L34 38 L18 22 L38 28 L28 12 L44 22 Z" fill="white" opacity="0.95"/>
      <path d="M50 58 L53 74 L62 68 L56 80 L50 98 L44 80 L38 68 L47 74 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- ASYMMETRIC WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <div class="nu-doc-meta">
        <div>
          <div class="nu-doc-kicker">Confidential — Internal Strategy Brief</div>
        </div>
        <div class="nu-doc-meta-right">
          Prepared <strong>April 21, 2026</strong> &nbsp;|&nbsp; Prepared for <strong>Aaron C. Norris</strong>
        </div>
      </div>

      <h1 class="nu-doc-title"><span class="blue-word">Negotiation</span> Strategy — 4505 Buttewoods Estate</h1>
      <p class="nu-doc-subtitle">
        Acquisition framework for the 7,098 sq ft estate at 4505 Buttewoods. This document outlines the offer structure, supporting comparables, negotiation phases, and the walk-away line for a $900,000 target entry price.
      </p>

      <!-- EXECUTIVE SUMMARY -->
      <div class="nu-exec-card">
        <h3>Executive Position</h3>
        <p>
          The objective is to acquire the 4505 Buttewoods residence — a 7,098 square foot estate — at a cost basis that preserves equity upside and aligns with defensible neighborhood comparables. The opening offer is anchored at <strong>$900,000</strong>, with graduated movement to a hard ceiling of <strong>$965,000</strong>. Beyond that, we walk.
        </p>
        <p>
          This is a relationship-based negotiation. Maintain composure, document every counter in writing, and never communicate the ceiling before the seller anchors first.
        </p>
      </div>

      <!-- KEY METRICS -->
      <h2 class="nu-section-title"><span class="first-word">Key</span> Terms at a Glance</h2>
      <div class="nu-metrics-grid">
        <div class="nu-metric highlight">
          <div class="nu-metric-label">Opening Offer</div>
          <div class="nu-metric-value">$900,000</div>
          <div class="nu-metric-sub">Anchor — based on comps</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Target Close</div>
          <div class="nu-metric-value">$930,000</div>
          <div class="nu-metric-sub">$131/sq ft — realistic midpoint</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Hard Ceiling</div>
          <div class="nu-metric-value">$965,000</div>
          <div class="nu-metric-sub">Walk-away line — not exceeded</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Square Footage</div>
          <div class="nu-metric-value">7,098</div>
          <div class="nu-metric-sub">Heated / cooled</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Earnest Money</div>
          <div class="nu-metric-value">$15,000</div>
          <div class="nu-metric-sub">Shows strength — refundable per contingencies</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Inspection Period</div>
          <div class="nu-metric-value">14 Days</div>
          <div class="nu-metric-sub">Non-negotiable minimum</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Financing Contingency</div>
          <div class="nu-metric-value">21 Days</div>
          <div class="nu-metric-sub">Protects against appraisal gaps</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Close Target</div>
          <div class="nu-metric-value">45 Days</div>
          <div class="nu-metric-sub">From fully executed contract</div>
        </div>
      </div>

      <!-- NEGOTIATION PHASES -->
      <h2 class="nu-section-title"><span class="first-word">Phased</span> Negotiation Plan</h2>
      <div class="nu-phase-list">

        <div class="nu-phase">
          <div class="nu-phase-num">
            <div class="nu-phase-num-label">Phase</div>
            <div class="nu-phase-num-value">01</div>
          </div>
          <div class="nu-phase-body">
            <h4>Open at $900,000 — Anchor with Comparables</h4>
            <p>Submit the initial written offer with the full comparables packet attached. Never apologize for the number; present it as the defensible market reality.</p>
            <ul>
              <li>Deliver offer in writing — email with PDF attachment</li>
              <li>Include three closed comparables from the prior 6 months</li>
              <li>State the 14-day inspection and 21-day financing contingencies clearly</li>
              <li>Expect a rejection or a high counter — do not react emotionally</li>
            </ul>
          </div>
        </div>

        <div class="nu-phase">
          <div class="nu-phase-num">
            <div class="nu-phase-num-label">Phase</div>
            <div class="nu-phase-num-value">02</div>
          </div>
          <div class="nu-phase-body">
            <h4>Counter to $922,500 — Controlled Movement</h4>
            <p>If the seller counters above $960,000, respond with $922,500. Demonstrate willingness to move without conceding the midpoint too quickly.</p>
            <ul>
              <li>Keep the movement measured — $22,500 is meaningful but not desperate</li>
              <li>Restate the comparable support — repeat the anchor</li>
              <li>Offer to cover half of any agreed-upon repairs under $5,000</li>
              <li>Request a response within 48 hours to keep momentum</li>
            </ul>
          </div>
        </div>

        <div class="nu-phase">
          <div class="nu-phase-num">
            <div class="nu-phase-num-label">Phase</div>
            <div class="nu-phase-num-value">03</div>
          </div>
          <div class="nu-phase-body">
            <h4>Best-and-Final at $945,000 — Show the Line</h4>
            <p>If the seller remains above $955,000, move to $945,000 and label it "best and final." Be prepared to mean it. This phase is where most deals either close or break.</p>
            <ul>
              <li>Use the words "best and final" — they carry legal and emotional weight</li>
              <li>Give a 72-hour response window</li>
              <li>If rejected, pause communication for 5–7 days — let silence pressure the seller</li>
              <li>Do not re-initiate contact until the seller comes back</li>
            </ul>
          </div>
        </div>

        <div class="nu-phase">
          <div class="nu-phase-num">
            <div class="nu-phase-num-label">Phase</div>
            <div class="nu-phase-num-value">04</div>
          </div>
          <div class="nu-phase-body">
            <h4>Close at $965,000 or Walk — Final Line</h4>
            <p>If the seller returns and the gap closes to within the ceiling, execute at $965,000 with full contingencies intact. If the seller will not move below the ceiling, walk away — without animosity, without burning the bridge.</p>
            <ul>
              <li>Ceiling of $965,000 is firm — do not exceed under any circumstance</li>
              <li>If walking, send a professional "keep us in mind" note — markets shift</li>
              <li>Reserve the right to re-enter at a lower price if the listing stales</li>
            </ul>
          </div>
        </div>

      </div>

      <!-- COMPARABLES TABLE -->
      <h2 class="nu-section-title"><span class="first-word">Supporting</span> Comparables</h2>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>Comp</th>
              <th>Sq Ft</th>
              <th>Closed Price</th>
              <th>$ / Sq Ft</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comp A — Same sub-market</td>
              <td>6,840</td>
              <td>$889,000</td>
              <td>$129.97</td>
              <td>Similar lot, older roof</td>
            </tr>
            <tr>
              <td>Comp B — Adjacent area</td>
              <td>7,210</td>
              <td>$935,000</td>
              <td>$129.68</td>
              <td>Updated kitchen, no pool</td>
            </tr>
            <tr>
              <td>Comp C — Same sub-market</td>
              <td>6,950</td>
              <td>$912,500</td>
              <td>$131.29</td>
              <td>Comparable condition</td>
            </tr>
            <tr class="row-highlight">
              <td>4505 Buttewoods — Subject</td>
              <td>7,098</td>
              <td>Target $930,000</td>
              <td>$131.03</td>
              <td>Midpoint of closed comps</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- TACTICS -->
      <h2 class="nu-section-title"><span class="first-word">Negotiation</span> Tactics</h2>
      <div class="nu-tactics-grid">

        <div class="nu-tactic-card">
          <h4>Let them anchor first</h4>
          <p>If possible, get the seller to restate their asking price in writing before submitting the offer. The first number on paper defines the field.</p>
        </div>

        <div class="nu-tactic-card">
          <h4>Use silence as leverage</h4>
          <p>After a counter, wait. Do not fill the silence with justifications. A confident pause tells the seller you have options.</p>
        </div>

        <div class="nu-tactic-card">
          <h4>Never negotiate verbally</h4>
          <p>Every number, every contingency, every concession goes in writing. Verbal agreements create disputes — written offers create deals.</p>
        </div>

        <div class="nu-tactic-card">
          <h4>Separate price from terms</h4>
          <p>If the seller will not move on price, move on terms — shorter close, larger earnest, waived minor repairs. Trade what costs you little for what costs them most.</p>
        </div>

        <div class="nu-tactic-card">
          <h4>Never reveal the ceiling</h4>
          <p>The ceiling of $965,000 stays internal. The moment it leaves this document, it becomes the floor of negotiation.</p>
        </div>

        <div class="nu-tactic-card">
          <h4>Walk means walk</h4>
          <p>If the ceiling is hit and the seller will not move, close the conversation professionally. Desperation costs more than waiting.</p>
        </div>

      </div>

      <!-- WALK-AWAY CALLOUT -->
      <div class="nu-callout">
        <div class="nu-callout-label">Walk-Away Discipline</div>
        <div class="nu-callout-title">$965,000 is the line. Do not cross it.</div>
        <p>
          Any price above $965,000 erodes the margin that justifies the acquisition. If the seller will not meet the ceiling, the correct answer is to walk, document the gap, and revisit in 60–90 days. The estate at 4505 Buttewoods is not the only opportunity — overpaying is the only irreversible mistake.
        </p>
      </div>

      <!-- CLOSE CHECKLIST -->
      <h2 class="nu-section-title"><span class="first-word">Pre-Close</span> Checklist</h2>
      <ul class="nu-checklist">
        <li><strong>Pre-approval letter</strong> — lender letter dated within 30 days, ready to attach to offer</li>
        <li><strong>Proof of funds</strong> — earnest money and down payment verified by bank letter</li>
        <li><strong>Three written comparables</strong> — formatted as PDF, ready to attach</li>
        <li><strong>Real estate attorney engaged</strong> — contract reviewed before signing, not after</li>
        <li><strong>Home inspector identified</strong> — licensed inspector on standby for 14-day window</li>
        <li><strong>Title and survey ordered</strong> — day one of contract, not day thirty</li>
        <li><strong>Insurance quote requested</strong> — binder in place before closing</li>
        <li><strong>Final walkthrough scheduled</strong> — 24–48 hours before closing, non-negotiable</li>
      </ul>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong style="color: #fff; font-weight: 900;">Aaron C. Norris</strong> — Founder &amp; CEO<br>
      Norris Utilities®, LLC &nbsp;|&nbsp; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-small">
      Confidential internal strategy document — not for external distribution
    </div>
  </footer>

</body>
</html>