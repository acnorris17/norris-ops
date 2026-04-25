<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #1B873F;
      --nu-warn: #C9710C;
      --nu-danger: #B0142C;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 12px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    .nu-doc-badge {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(0, 0, 0, 0.28);
      border: 1px solid rgba(6, 208, 255, 0.4);
      border-radius: 30px;
      color: var(--nu-cyan);
      font-weight: 700;
      font-size: 0.78rem;
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
    .nu-chevron svg {
      width: 100%; height: 50px; display: block;
    }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding-bottom: 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.05) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 20px;
    }

    /* PAGE TITLE BLOCK */
    .nu-page-title {
      text-align: center;
      margin-bottom: 50px;
    }
    .nu-page-title h1 {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-page-title h1 span { color: var(--nu-blue); }
    .nu-page-title p {
      font-size: 1.05rem;
      color: #555;
      max-width: 720px;
      margin: 0 auto;
    }
    .nu-page-meta {
      margin-top: 18px;
      display: inline-flex;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
      font-size: 0.82rem;
      color: #666;
    }
    .nu-page-meta span {
      padding: 6px 14px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 20px;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .nu-page-meta b { color: var(--nu-blue); }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 22px;
      padding-bottom: 12px;
      border-bottom: 3px solid var(--nu-medium-gray);
      position: relative;
    }
    .nu-section-title::after {
      content: '';
      position: absolute;
      bottom: -3px; left: 0;
      width: 80px; height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY HERO CARD */
    .property-hero {
      background: var(--nu-white);
      border-radius: 12px;
      box-shadow: 0 6px 22px rgba(0,0,0,0.07);
      border: 1px solid var(--nu-medium-gray);
      overflow: hidden;
      margin-bottom: 50px;
      display: grid;
      grid-template-columns: 1.1fr 1fr;
    }
    .property-hero-graphic {
      position: relative;
      background: linear-gradient(135deg, var(--nu-navy) 0%, var(--nu-blue) 50%, var(--nu-cyan) 100%);
      padding: 40px;
      color: var(--nu-white);
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 320px;
      overflow: hidden;
    }
    .property-hero-graphic::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 22px);
      opacity: 0.6;
    }
    .property-hero-graphic > * { position: relative; z-index: 1; }
    .property-hero-graphic .label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .property-hero-graphic .address {
      font-size: 2.2rem;
      font-weight: 900;
      line-height: 1.1;
      letter-spacing: -0.01em;
      margin-bottom: 8px;
    }
    .property-hero-graphic .city {
      font-size: 1.05rem;
      font-weight: 400;
      color: rgba(255,255,255,0.85);
      letter-spacing: 0.04em;
      margin-bottom: 26px;
    }
    .property-hero-graphic .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    .property-hero-graphic .stat {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.18);
      border-radius: 8px;
      padding: 14px 12px;
      text-align: center;
    }
    .property-hero-graphic .stat .num {
      display: block;
      font-size: 1.55rem;
      font-weight: 900;
      color: var(--nu-white);
      line-height: 1.1;
    }
    .property-hero-graphic .stat .lbl {
      display: block;
      margin-top: 4px;
      font-size: 0.7rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.85);
    }

    .property-hero-summary {
      padding: 36px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .property-hero-summary h2 {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .property-hero-summary p {
      color: #4a4a4a;
      margin-bottom: 14px;
      font-size: 0.97rem;
    }
    .quick-status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: rgba(0, 0, 255, 0.06);
      border: 1px solid rgba(0, 0, 255, 0.2);
      border-radius: 20px;
      color: var(--nu-blue);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      margin-top: 6px;
      width: fit-content;
    }
    .quick-status .dot {
      width: 8px; height: 8px;
      background: var(--nu-blue);
      border-radius: 50%;
      animation: pulse 2.4s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.55; transform: scale(1.25); }
    }

    /* OBJECTIVES GRID */
    .objectives-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
      margin-bottom: 50px;
    }
    .objective-card {
      background: var(--nu-white);
      padding: 26px 24px;
      border-radius: 10px;
      border-left: 5px solid var(--nu-blue);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .objective-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.09);
    }
    .objective-card .num {
      display: inline-block;
      width: 30px; height: 30px;
      line-height: 30px;
      text-align: center;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-bottom: 12px;
    }
    .objective-card h3 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .objective-card p {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.5;
    }

    /* PHASE TIMELINE */
    .phase-list {
      list-style: none;
      counter-reset: phase;
      margin-bottom: 50px;
    }
    .phase-item {
      counter-increment: phase;
      position: relative;
      padding: 24px 28px 24px 96px;
      background: var(--nu-white);
      border-radius: 10px;
      box-shadow: 0 3px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 16px;
    }
    .phase-item::before {
      content: counter(phase);
      position: absolute;
      left: 24px; top: 24px;
      width: 50px; height: 50px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 10px rgba(0,0,255,0.25);
    }
    .phase-item h4 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .phase-item .window {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .phase-item p {
      color: #4a4a4a;
      font-size: 0.94rem;
      margin-bottom: 8px;
    }
    .phase-item ul {
      margin-left: 18px;
      color: #4a4a4a;
      font-size: 0.92rem;
    }
    .phase-item ul li {
      margin-bottom: 4px;
      position: relative;
      padding-left: 4px;
    }
    .phase-item ul li::marker { color: var(--nu-blue); }

    /* PRICING / OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }
    .offer-tier {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px 22px;
      text-align: center;
      border: 2px solid var(--nu-medium-gray);
      position: relative;
      transition: all 0.2s ease;
    }
    .offer-tier.target {
      border-color: var(--nu-blue);
      box-shadow: 0 6px 24px rgba(0,0,255,0.15);
      transform: translateY(-4px);
    }
    .offer-tier.target::before {
      content: 'TARGET';
      position: absolute;
      top: -12px; left: 50%;
      transform: translateX(-50%);
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      padding: 4px 14px;
      border-radius: 12px;
    }
    .offer-tier .tier-label {
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 14px;
    }
    .offer-tier.target .tier-label { color: var(--nu-blue); }
    .offer-tier .tier-price {
      font-size: 1.85rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 6px;
    }
    .offer-tier .tier-ppsf {
      font-size: 0.84rem;
      color: #666;
      margin-bottom: 12px;
    }
    .offer-tier .tier-note {
      font-size: 0.82rem;
      color: #555;
      line-height: 1.45;
      border-top: 1px solid var(--nu-medium-gray);
      padding-top: 12px;
    }

    /* TERMS TABLE */
    .terms-table-wrap {
      background: var(--nu-white);
      border-radius: 10px;
      box-shadow: 0 3px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      overflow: hidden;
      margin-bottom: 50px;
    }
    .terms-table {
      width: 100%;
      border-collapse: collapse;
    }
    .terms-table th, .terms-table td {
      padding: 14px 18px;
      text-align: left;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .terms-table th {
      background: linear-gradient(135deg, var(--nu-navy), var(--nu-blue));
      color: var(--nu-white);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }
    .terms-table tr:last-child td { border-bottom: none; }
    .terms-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .terms-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 28%;
    }

    /* DUE DILIGENCE */
    .dd-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
      margin-bottom: 50px;
    }
    .dd-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .dd-card h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .dd-checklist {
      list-style: none;
    }
    .dd-checklist li {
      padding: 7px 0 7px 28px;
      position: relative;
      font-size: 0.91rem;
      color: #444;
      border-bottom: 1px dashed #e8e8ec;
    }
    .dd-checklist li:last-child { border-bottom: none; }
    .dd-checklist li::before {
      content: '';
      position: absolute;
      left: 4px; top: 12px;
      width: 14px; height: 14px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* RISK FLAGS */
    .risk-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-bottom: 50px;
    }
    .risk-card {
      background: var(--nu-white);
      border-left: 5px solid var(--nu-warn);
      border-radius: 8px;
      padding: 20px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .risk-card.high { border-left-color: var(--nu-danger); }
    .risk-card.low { border-left-color: var(--nu-success); }
    .risk-card .rtag {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      padding: 3px 10px;
      border-radius: 4px;
      background: var(--nu-warn);
      color: var(--nu-white);
      margin-bottom: 10px;
    }
    .risk-card.high .rtag { background: var(--nu-danger); }
    .risk-card.low .rtag { background: var(--nu-success); }
    .risk-card h5 {
      font-size: 0.98rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .risk-card p {
      font-size: 0.88rem;
      color: #555;
    }

    /* DECISION GATE / ACTION FOOTER */
    .decision-gate {
      background: linear-gradient(135deg, var(--nu-navy), #001188);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 36px 40px;
      margin-bottom: 50px;
      position: relative;
      overflow: hidden;
    }
    .decision-gate::before {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 60%; height: 200%;
      background: radial-gradient(circle, rgba(6,208,255,0.18) 0%, transparent 70%);
    }
    .decision-gate > * { position: relative; z-index: 1; }
    .decision-gate h3 {
      font-size: 1.4rem;
      font-weight: 900;
      margin-bottom: 10px;
      color: var(--nu-cyan);
      letter-spacing: 0.02em;
    }
    .decision-gate p {
      color: rgba(255,255,255,0.92);
      font-size: 0.97rem;
      margin-bottom: 18px;
      max-width: 760px;
    }
    .decision-actions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 18px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 13px 26px;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: var(--nu-white);
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(6,208,255,0.4);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-white);
      padding: 13px 26px;
      border: 2px solid rgba(255,255,255,0.5);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      border-color: var(--nu-cyan);
      color: var(--nu-cyan);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .nu-footer-contact a:hover { color: var(--nu-white); }
    .nu-footer-meta {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 880px) {
      .property-hero { grid-template-columns: 1fr; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-page-title h1 { font-size: 1.7rem; }
      .property-hero-graphic .address { font-size: 1.65rem; }
      .property-hero-graphic .stats { grid-template-columns: repeat(3, 1fr); gap: 8px; }
      .property-hero-graphic .stat .num { font-size: 1.2rem; }
      .nu-container { padding: 40px 22px 10px; }
      .phase-item { padding: 22px 20px 22px 20px; }
      .phase-item::before {
        position: static;
        margin-bottom: 12px;
      }
      .terms-table th, .terms-table td { padding: 10px 12px; font-size: 0.86rem; }
      .terms-table td:first-child { width: auto; }
      .decision-gate { padding: 26px 22px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .objective-card, .phase-item, .dd-card, .risk-card, .property-hero, .terms-table-wrap {
        box-shadow: none;
        border: 1px solid #ccc;
        page-break-inside: avoid;
      }
      .decision-gate { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-doc-badge">Acquisition Strategy &middot; Confidential</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PAGE TITLE -->
      <div class="nu-page-title">
        <h1><span>Estate Acquisition</span> Negotiation Plan</h1>
        <p>Structured negotiation framework for the purchase of the 7,098 sq ft estate at 4505 Buttewoods. Scope, ladder, and decision gates for a clean, principled close.</p>
        <div class="nu-page-meta">
          <span>Prepared <b>2026-04-25</b></span>
          <span>Owner <b>Aaron C. Norris</b></span>
          <span>Status <b>Active</b></span>
          <span>Source <b>reMarkable Action Item</b></span>
        </div>
      </div>

      <!-- PROPERTY HERO -->
      <section class="property-hero">
        <div class="property-hero-graphic">
          <div class="label">Subject Property</div>
          <div class="address">4505 Buttewoods</div>
          <div class="city">Estate Residence &middot; Greater Birmingham, AL</div>
          <div class="stats">
            <div class="stat">
              <span class="num">7,098</span>
              <span class="lbl">Sq Ft</span>
            </div>
            <div class="stat">
              <span class="num">1</span>
              <span class="lbl">Parcel</span>
            </div>
            <div class="stat">
              <span class="num">Off-Mkt</span>
              <span class="lbl">Posture</span>
            </div>
          </div>
        </div>
        <div class="property-hero-summary">
          <h2>Negotiate Purchase &mdash; Direct Approach</h2>
          <p>Initiate a direct, founder-to-owner negotiation for the 7,098 sq ft residence at 4505 Buttewoods. Proceed off-market where possible to preserve leverage, control timing, and avoid public bidding dynamics.</p>
          <p>Anchor on a clean, cash-friendly offer with limited contingencies, paired with rigorous diligence on title, condition, and tax basis before any binding commitment is signed.</p>
          <div class="quick-status"><span class="dot"></span>Phase 1 &middot; Discovery &amp; Owner Outreach</div>
        </div>
      </section>

      <!-- OBJECTIVES -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objectives</span></h2>
      <div class="objectives-grid">
        <div class="objective-card">
          <div class="num">1</div>
          <h3>Acquire at Fair Basis</h3>
          <p>Land the deal at or below verified market value on a per-square-foot basis, supported by three comparable closed sales within twelve months.</p>
        </div>
        <div class="objective-card">
          <div class="num">2</div>
          <h3>Preserve Optionality</h3>
          <p>Structure terms so the property serves equally as long-term residence, hold asset, or eventual disposition without rework.</p>
        </div>
        <div class="objective-card">
          <div class="num">3</div>
          <h3>Clean Title &amp; Condition</h3>
          <p>Verify clear title, no encroachments, no open permits, and a defensible inspection report before any earnest money goes hard.</p>
        </div>
        <div class="objective-card">
          <div class="num">4</div>
          <h3>Discreet Process</h3>
          <p>Keep the negotiation off public boards. Communicate through known counsel, broker, or direct owner channel only.</p>
        </div>
      </div>

      <!-- PHASE PLAN -->
      <h2 class="nu-section-title"><span class="first">Phased</span> <span class="rest">Execution Plan</span></h2>
      <ol class="phase-list">
        <li class="phase-item">
          <h4>Discovery &amp; Owner Outreach</h4>
          <div class="window">Days 1 &ndash; 7</div>
          <p>Confirm ownership, vesting, and any LLC/trust structure on the title record. Identify the right person to approach &mdash; principal, spouse, or designated agent.</p>
          <ul>
            <li>Pull current deed, tax card, and last sale history for 4505 Buttewoods.</li>
            <li>Confirm 7,098 sq ft figure against assessor record &amp; appraisal district.</li>
            <li>Open dialogue via warm introduction; never cold-pitch a price first.</li>
          </ul>
        </li>
        <li class="phase-item">
          <h4>Comp Build &amp; Valuation Anchor</h4>
          <div class="window">Days 7 &ndash; 14</div>
          <p>Establish a defensible price band before the first offer. Triangulate three closed sales, two active comps, and at least one independent BPO or appraisal range.</p>
          <ul>
            <li>Closed comps within 3 miles, last 12 months, 6,000&ndash;8,000 sq ft.</li>
            <li>Adjust for lot size, finish level, garage count, and outbuildings.</li>
            <li>Document a "walk price," "target price," and "ceiling price" in writing.</li>
          </ul>
        </li>
        <li class="phase-item">
          <h4>Initial Offer &amp; Position</h4>
          <div class="window">Days 14 &ndash; 21</div>
          <p>Submit a written, principled offer with a short response window. Lead with terms strength &mdash; cash or strong proof of funds, limited contingencies, and a reasonable close window.</p>
          <ul>
            <li>Offer letter on Norris Utilities® letterhead with Aaron as buyer principal.</li>
            <li>Include earnest money figure, financing posture, and inspection period.</li>
            <li>Set a clean 5-business-day response window before refresh.</li>
          </ul>
        </li>
        <li class="phase-item">
          <h4>Counter, Concession Map &amp; Close</h4>
          <div class="window">Days 21 &ndash; 45</div>
          <p>Track each counter against the documented price ladder. Trade on terms before price &mdash; close date, repair credits, possession, and personal property &mdash; before moving the headline number.</p>
          <ul>
            <li>Maintain a written concession log; do not negotiate from memory.</li>
            <li>Push due diligence findings into pricing rather than walk-aways where viable.</li>
            <li>Sign only when title, survey, and inspection are all clean.</li>
          </ul>
        </li>
      </ol>

      <!-- OFFER LADDER -->
      <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder</span></h2>
      <p style="margin-bottom: 22px; color: #555; max-width: 780px;">
        Three tiers, all priced per finished square foot on the 7,098 sq ft basis. Final dollar figures populate after the comp build in Phase 2; the ladder structure itself does not change.
      </p>
      <div class="offer-ladder">
        <div class="offer-tier">
          <div class="tier-label">Opening Offer</div>
          <div class="tier-price">Comp Floor</div>
          <div class="tier-ppsf">Lowest defensible $/sq ft</div>
          <div class="tier-note">Anchored on the lowest comparable closed sale, adjusted for condition. Leaves room to move on price if terms hold.</div>
        </div>
        <div class="offer-tier target">
          <div class="tier-label">Target Close</div>
          <div class="tier-price">Comp Median</div>
          <div class="tier-ppsf">Median $/sq ft from triangulated comps</div>
          <div class="tier-note">Where the deal should land. Defensible to lender, appraiser, and future resale. This is the number to protect.</div>
        </div>
        <div class="offer-tier">
          <div class="tier-label">Walk Ceiling</div>
          <div class="tier-price">Comp Top</div>
          <div class="tier-ppsf">Hard ceiling $/sq ft</div>
          <div class="tier-note">No movement past this point. If the seller will not meet inside the band, the negotiation pauses or closes out cleanly.</div>
        </div>
      </div>

      <!-- KEY TERMS -->
      <h2 class="nu-section-title"><span class="first">Key</span> <span class="rest">Terms Framework</span></h2>
      <div class="terms-table-wrap">
        <table class="terms-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Norris Utilities Position</th>
              <th>Negotiable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Buyer of Record</td>
              <td>Aaron C. Norris &mdash; entity selection (personal vs. LLC) confirmed before contract.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Earnest Money</td>
              <td>1% of contract price, refundable through inspection &amp; title review.</td>
              <td>Limited &mdash; amount only.</td>
            </tr>
            <tr>
              <td>Financing</td>
              <td>Cash or strong conventional with proof of funds at offer. No contingency on appraisal under target.</td>
              <td>No on contingency, yes on close timing.</td>
            </tr>
            <tr>
              <td>Inspection Period</td>
              <td>10 business days from contract execution. Right to renegotiate or terminate on material findings.</td>
              <td>Yes &mdash; days only.</td>
            </tr>
            <tr>
              <td>Close Window</td>
              <td>30 &ndash; 45 days from binding agreement.</td>
              <td>Yes &mdash; trade for price.</td>
            </tr>
            <tr>
              <td>Possession</td>
              <td>At closing. No post-close occupancy unless paid at fair daily rate with damage deposit.</td>
              <td>Yes &mdash; with terms.</td>
            </tr>
            <tr>
              <td>Personal Property</td>
              <td>Itemized list attached to contract. Nothing assumed; nothing removed without notice.</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Title &amp; Survey</td>
              <td>Buyer&rsquo;s choice of title company. New survey required. Seller pays standard title work.</td>
              <td>Limited.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- DUE DILIGENCE -->
      <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
      <div class="dd-grid">
        <div class="dd-card">
          <h4>Title &amp; Legal</h4>
          <ul class="dd-checklist">
            <li>Pull current deed and chain of title.</li>
            <li>Confirm vesting &mdash; individual, joint, trust, or entity.</li>
            <li>Verify no liens, judgments, or recorded easements that limit use.</li>
            <li>Identify any HOA, deed restrictions, or covenants.</li>
            <li>Order new survey to confirm 7,098 sq ft and lot lines.</li>
          </ul>
        </div>
        <div class="dd-card">
          <h4>Condition &amp; Inspection</h4>
          <ul class="dd-checklist">
            <li>Full structural &amp; mechanical inspection by licensed inspector.</li>
            <li>Roof age, HVAC age, water heater age &mdash; documented.</li>
            <li>Foundation review with photographs and elevation notes.</li>
            <li>Termite / wood-destroying organism letter.</li>
            <li>Pool, well, septic, or specialty systems if present.</li>
          </ul>
        </div>
        <div class="dd-card">
          <h4>Financial &amp; Tax</h4>
          <ul class="dd-checklist">
            <li>Last three years of property tax assessments and bills.</li>
            <li>Confirm homestead status and any exemptions in place.</li>
            <li>Insurance binder quote and recent claims history.</li>
            <li>Utility cost history &mdash; 12 months minimum.</li>
            <li>Confirm any rental, lease, or short-term use history.</li>
          </ul>
        </div>
        <div class="dd-card">
          <h4>Permits &amp; Zoning</h4>
          <ul class="dd-checklist">
            <li>Pull permit history; flag any open or unresolved permits.</li>
            <li>Verify zoning classification and permitted uses.</li>
            <li>Confirm any known additions match recorded square footage.</li>
            <li>Check flood zone designation and elevation.</li>
            <li>Confirm no pending code enforcement actions.</li>
          </ul>
        </div>
      </div>

      <!-- RISK FLAGS -->
      <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Flags &amp; Mitigations</span></h2>
      <div class="risk-list">
        <div class="risk-card high">
          <span class="rtag">High</span>
          <h5>Square Footage Discrepancy</h5>
          <p>The 7,098 sq ft figure must reconcile with assessor records, appraisal, and survey. Any variance over 3% requires repricing before close.</p>
        </div>
        <div class="risk-card">
          <span class="rtag">Medium</span>
          <h5>Off-Market Comp Thinness</h5>
          <p>Estate-scale homes have fewer comparable sales. Build a wider radius and adjust carefully &mdash; do not stretch comps to support a number.</p>
        </div>
        <div class="risk-card">
          <span class="rtag">Medium</span>
          <h5>Deferred Maintenance</h5>
          <p>Larger homes carry larger systems &mdash; multiple HVAC units, complex roofs, long plumbing runs. Inspect every system, not just the obvious ones.</p>
        </div>
        <div class="risk-card low">
          <span class="rtag">Low</span>
          <h5>Process Discipline</h5>
          <p>Documented price ladder, written concession log, and clear walk ceiling control the negotiation. No verbal agreements outside contract.</p>
        </div>
      </div>

      <!-- DECISION GATE -->
      <section class="decision-gate">
        <h3>Decision Gates</h3>
        <p>Three checkpoints. The negotiation only proceeds past each gate when the gate&rsquo;s conditions are documented and met. No exceptions, no verbal overrides.</p>
        <ul style="list-style: none; padding-left: 0; color: rgba(255,255,255,0.92); font-size: 0.95rem; margin-bottom: 8px;">
          <li style="padding: 6px 0;"><b style="color: var(--nu-cyan);">Gate A &mdash;</b> Comp build complete, walk &amp; ceiling prices on paper before any number is named.</li>
          <li style="padding: 6px 0;"><b style="color: var(--nu-cyan);">Gate B &mdash;</b> Title preliminary clean, square footage verified within 3% before earnest money goes hard.</li>
          <li style="padding: 6px 0;"><b style="color: var(--nu-cyan);">Gate C &mdash;</b> Inspection report reviewed, all material items resolved by credit or repair before final signature.</li>
        </ul>
        <div class="decision-actions">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron &middot; 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Acquisition%20Update" class="nu-btn-secondary">Email Update</a>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &middot; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &middot;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &middot;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Confidential acquisition working document &middot; Internal use &middot; Generated 2026-04-25
    </div>
  </footer>

</body>
</html>