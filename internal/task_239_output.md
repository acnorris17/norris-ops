<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Buttewoods Estate — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
    :root {
      --nu-blue: #0000FF;
      --nu-blue-deep: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-success: #0B8A4E;
      --nu-warning: #B8860B;
      --nu-danger: #B22222;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, var(--nu-blue-deep) 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
        linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px);
      background-size: 40px 40px, 40px 40px, 60px 60px;
      opacity: 0.6;
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

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65vw; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* ══ DOC TITLE BLOCK ══ */
    .doc-eyebrow {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      padding: 8px 18px;
      border-radius: 3px;
      margin-bottom: 18px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
      letter-spacing: -0.01em;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-subtitle {
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-body-text);
      max-width: 820px;
      margin-bottom: 32px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 28px;
      padding: 18px 22px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 0 6px 6px 0;
      margin-bottom: 40px;
      font-size: 0.92rem;
    }
    .doc-meta-item { display: flex; flex-direction: column; }
    .doc-meta-label {
      font-weight: 700;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
      margin-bottom: 2px;
    }
    .doc-meta-value {
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ SECTION ══ */
    section { margin-bottom: 54px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 6px;
      line-height: 1.2;
    }
    .nu-section-title .first { color: var(--nu-blue-deep); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      height: 3px;
      width: 64px;
      background: var(--nu-cyan);
      margin-bottom: 20px;
      border-radius: 2px;
    }
    .nu-section-intro {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 22px;
      max-width: 900px;
    }

    /* ══ PROPERTY SNAPSHOT GRID ══ */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 30px;
    }
    .snapshot-card {
      background: linear-gradient(180deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 20px;
      text-align: left;
      position: relative;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .snapshot-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 4px; height: 100%;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .snapshot-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.07);
    }
    .snapshot-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
      margin-bottom: 6px;
    }
    .snapshot-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 2px;
    }
    .snapshot-sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
    }

    /* ══ BADGE ══ */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin: 0 0 14px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-badge .bullet {
      display: inline-block;
      width: 10px; height: 10px;
      border-radius: 50%;
      background: var(--nu-cyan);
      margin-right: 12px;
      box-shadow: 0 0 0 3px rgba(6,208,255,0.25);
    }

    /* ══ TWO COLUMN ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }
    @media (max-width: 760px) { .two-col { grid-template-columns: 1fr; } }

    /* ══ CARDS ══ */
    .strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 26px 26px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      height: 100%;
    }
    .strategy-card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .strategy-card h3 .num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px; height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-size: 0.85rem;
      font-weight: 900;
      flex-shrink: 0;
    }
    .strategy-card p { font-size: 0.96rem; margin-bottom: 10px; }
    .strategy-card ul { list-style: none; padding-left: 0; }
    .strategy-card ul li {
      font-size: 0.94rem;
      padding: 6px 0 6px 22px;
      position: relative;
      color: var(--nu-body-text);
    }
    .strategy-card ul li::before {
      content: '●';
      position: absolute;
      left: 4px; top: 6px;
      color: var(--nu-cyan);
      font-size: 0.7rem;
    }

    /* ══ PRICE ANCHORS ══ */
    .price-anchors {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      margin: 24px 0 8px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    }
    @media (max-width: 760px) {
      .price-anchors { grid-template-columns: 1fr; }
    }
    .price-tier {
      padding: 28px 22px;
      text-align: center;
      color: var(--nu-white);
      position: relative;
    }
    .price-tier.low    { background: linear-gradient(135deg, #0B8A4E 0%, #0e6b3e 100%); }
    .price-tier.target { background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-blue-deep) 100%); }
    .price-tier.walk   { background: linear-gradient(135deg, #B22222 0%, #7f1a1a 100%); }
    .price-tier .tier-label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 700;
      opacity: 0.85;
      margin-bottom: 8px;
    }
    .price-tier .tier-amount {
      font-size: 1.95rem;
      font-weight: 900;
      margin-bottom: 4px;
      letter-spacing: -0.02em;
    }
    .price-tier .tier-sub {
      font-size: 0.85rem;
      opacity: 0.95;
    }
    .price-tier.target::before {
      content: 'TARGET';
      position: absolute;
      top: 10px; right: 10px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-size: 0.65rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      padding: 3px 8px;
      border-radius: 3px;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 16px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist-item:last-child { border-bottom: none; }
    .check-box {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
      margin-top: 2px;
    }
    .check-body { flex: 1; }
    .check-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      margin-bottom: 2px;
    }
    .check-detail {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .check-owner {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
      padding: 3px 10px;
      background: rgba(0,0,255,0.06);
      border-radius: 3px;
      margin-left: 10px;
      white-space: nowrap;
      align-self: center;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 30px;
      margin-top: 10px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 9px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .timeline-item {
      position: relative;
      padding: 0 0 20px 8px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -29px; top: 6px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.1);
    }
    .timeline-day {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
      margin-bottom: 2px;
    }
    .timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* ══ LEVERAGE TABLE ══ */
    .leverage-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      font-size: 0.95rem;
    }
    .leverage-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .leverage-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .leverage-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .leverage-table tbody tr:nth-child(odd) { background: var(--nu-light-gray); }
    .leverage-table .pill {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 20px;
    }
    .pill.high { background: rgba(11,138,78,0.12); color: var(--nu-success); }
    .pill.med  { background: rgba(184,134,11,0.15); color: var(--nu-warning); }
    .pill.low  { background: rgba(178,34,34,0.1); color: var(--nu-danger); }

    /* ══ TALK TRACK ══ */
    .talk-track {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 0 10px 10px 0;
      padding: 22px 26px;
      margin-bottom: 14px;
    }
    .talk-track-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
      margin-bottom: 6px;
    }
    .talk-track-body {
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }
    .talk-track-body em {
      color: var(--nu-blue-deep);
      font-weight: 700;
      font-style: normal;
    }

    /* ══ RISK BOX ══ */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-danger);
      border-radius: 8px;
      padding: 22px 22px 20px;
    }
    .risk-card.mitigation { border-top-color: var(--nu-success); }
    .risk-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .risk-card p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* ══ CTA ══ */
    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 28px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 14px 30px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      border: 2px solid transparent;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: var(--nu-blue-deep);
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border-color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 46px 40px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
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
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-fine {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px; }
      .doc-title { font-size: 1.9rem; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .leverage-table { font-size: 0.85rem; }
      .leverage-table th, .leverage-table td { padding: 10px 12px; }
    }

    /* ══ PRINT ══ */
    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .strategy-card, .snapshot-card, .checklist, .leverage-table { box-shadow: none; }
      .cta-row, .nu-btn-primary, .nu-btn-secondary { display: none; }
      section { page-break-inside: avoid; }
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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="doc-eyebrow">Action Brief · Personal · Real Estate</div>
      <h1 class="doc-title"><span class="accent">Negotiation Strategy</span> — 4505 Buttewoods Estate</h1>
      <p class="doc-subtitle">
        Structured approach to negotiate the purchase of the 7,098 sq ft estate at 4505 Buttewoods.
        Prepared for Aaron C. Norris. Sourced from reMarkable action item. Use as the live playbook
        through closing — update as facts change.
      </p>

      <div class="doc-meta">
        <div class="doc-meta-item">
          <span class="doc-meta-label">Subject Property</span>
          <span class="doc-meta-value">4505 Buttewoods</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Size</span>
          <span class="doc-meta-value">7,098 sq ft</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Prepared For</span>
          <span class="doc-meta-value">Aaron C. Norris</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Brief Date</span>
          <span class="doc-meta-value">2026-04-21</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Source</span>
          <span class="doc-meta-value">reMarkable Action Item</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Status</span>
          <span class="doc-meta-value">Pre-Offer Strategy</span>
        </div>
      </div>

      <!-- SECTION 1: PROPERTY SNAPSHOT -->
      <section>
        <div class="nu-badge"><span class="bullet"></span>Section 1 — Property Snapshot</div>
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Baseline facts known at brief time. Fields marked <strong>to verify</strong> must be
          confirmed before the offer is signed. Do not negotiate on unverified numbers.
        </p>

        <div class="snapshot-grid">
          <div class="snapshot-card">
            <div class="snapshot-label">Address</div>
            <div class="snapshot-value" style="font-size:1.15rem;">4505 Buttewoods</div>
            <div class="snapshot-sub">Confirm full street suffix &amp; jurisdiction</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Living Area</div>
            <div class="snapshot-value">7,098</div>
            <div class="snapshot-sub">sq ft (heated &amp; cooled)</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Classification</div>
            <div class="snapshot-value" style="font-size:1.15rem;">Estate</div>
            <div class="snapshot-sub">Single-family residential</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Lot Size</div>
            <div class="snapshot-value" style="font-size:1.15rem;">To verify</div>
            <div class="snapshot-sub">Pull county parcel record</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Year Built</div>
            <div class="snapshot-value" style="font-size:1.15rem;">To verify</div>
            <div class="snapshot-sub">Critical for condition discount</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">List Price</div>
            <div class="snapshot-value" style="font-size:1.15rem;">To verify</div>
            <div class="snapshot-sub">Last reduction date matters</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Days on Market</div>
            <div class="snapshot-value" style="font-size:1.15rem;">To verify</div>
            <div class="snapshot-sub">Leverage indicator</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Seller Motivation</div>
            <div class="snapshot-value" style="font-size:1.15rem;">To verify</div>
            <div class="snapshot-sub">Life event, estate sale, relocation?</div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: NEGOTIATION OBJECTIVE -->
      <section>
        <div class="nu-badge"><span class="bullet"></span>Section 2 — Objective &amp; Price Anchors</div>
        <h2 class="nu-section-title"><span class="first">Price</span> <span class="rest">Anchors &amp; Walk-Away</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Set the three anchors <em>before</em> the first conversation and do not adjust them in
          the moment. The target is where you want to close. The opening is lower on purpose to give
          room to move up. The walk-away is the price above which the deal is no longer worth doing.
        </p>

        <div class="price-anchors">
          <div class="price-tier low">
            <div class="tier-label">Opening Offer</div>
            <div class="tier-amount">$825,000</div>
            <div class="tier-sub">Supported by condition + DOM</div>
          </div>
          <div class="price-tier target">
            <div class="tier-label">Target Close</div>
            <div class="tier-amount">$900,000</div>
            <div class="tier-sub">Plan to land here after 2-3 rounds</div>
          </div>
          <div class="price-tier walk">
            <div class="tier-label">Walk-Away Ceiling</div>
            <div class="tier-amount">$950,000</div>
            <div class="tier-sub">Above this number, pass &amp; move on</div>
          </div>
        </div>

        <p class="nu-section-intro" style="margin-top:18px;">
          Anchors assume the 7,098 sq ft figure is accurate and the property is in habitable
          condition with no major deferred maintenance. Verify appraised value and recent comparable
          sales within 1 mile before the opening offer is sent.
        </p>
      </section>

      <!-- SECTION 3: PRE-OFFER DUE DILIGENCE -->
      <section>
        <div class="nu-badge"><span class="bullet"></span>Section 3 — Pre-Offer Due Diligence</div>
        <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Due Diligence</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Every item below must be complete before the written offer goes out. Missing even one of
          these gives the seller's side a reason to push back or stall.
        </p>

        <div class="checklist">
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">Pull county parcel record &amp; tax history</div>
              <div class="check-detail">
                Confirm lot size, tax-assessed value, owner of record, last sale date &amp; price.
                Wide gap between assessed and list price is your first lever.
              </div>
            </div>
            <div class="check-owner">Aaron</div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">Confirm 7,098 sq ft figure</div>
              <div class="check-detail">
                Cross-check MLS against tax record. Estates often have heated vs unheated sq ft
                disputes — any overstated square footage is direct price reduction.
              </div>
            </div>
            <div class="check-owner">Aaron</div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">Pull 3 closed comps within 1 mile (last 6 months)</div>
              <div class="check-detail">
                Target homes 5,500–8,500 sq ft. Produce a written $/sq ft average. This is the
                empirical backbone of the opening offer.
              </div>
            </div>
            <div class="check-owner">Agent</div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">Days on market &amp; price-reduction history</div>
              <div class="check-detail">
                More than 60 DOM or two reductions = seller side is tired. Use it as quiet leverage,
                not as a talking point.
              </div>
            </div>
            <div class="check-owner">Agent</div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">Walkthrough — flag every deferred maintenance item</div>
              <div class="check-detail">
                Roof age, HVAC count &amp; age, foundation cracks, water staining, pool/exterior,
                windows. Photograph everything. Each line = dollar-for-dollar credit request later.
              </div>
            </div>
            <div class="check-owner">Aaron</div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">Proof of funds / pre-approval letter ready</div>
              <div class="check-detail">
                Non-negotiable. No seller on a 7,000+ sq ft estate takes an offer seriously without
                it. Renasant Bank — Patrick Lavette — is the fast path if financing any portion.
              </div>
            </div>
            <div class="check-owner">Aaron</div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">Title search preview</div>
              <div class="check-detail">
                Liens, easements, HOA encumbrances. Surfacing a title issue first lets you use it as
                a price tool before the seller "fixes" it quietly.
              </div>
            </div>
            <div class="check-owner">Title Co.</div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">Seller-motivation intel</div>
              <div class="check-detail">
                Why is it for sale — estate, divorce, relocation, upgrade, downsize? Ask the listing
                agent directly: "What's the seller's ideal closing timeline?" The answer tells you
                everything.
              </div>
            </div>
            <div class="check-owner">Agent</div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: LEVERAGE MATRIX -->
      <section>
        <div class="nu-badge"><span class="bullet"></span>Section 4 — Leverage Matrix</div>
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Matrix</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Map every lever before the conversation. In the room, use the high-value levers first and
          keep one high lever in reserve for the closing push.
        </p>

        <div style="overflow-x:auto;">
          <table class="leverage-table">
            <thead>
              <tr>
                <th style="width:28%;">Lever</th>
                <th style="width:18%;">Strength</th>
                <th>How to Use It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cash or strong financing</strong></td>
                <td><span class="pill high">High</span></td>
                <td>Offer certainty of close. Waive financing contingency only if genuinely able. Sellers of high-$ estates prize certainty over top dollar.</td>
              </tr>
              <tr>
                <td><strong>Flexible close date</strong></td>
                <td><span class="pill high">High</span></td>
                <td>Match the seller's timeline exactly — whether it's 15 days or 90. Ask for it before you offer price; then trade matched timing for price.</td>
              </tr>
              <tr>
                <td><strong>Days on market</strong></td>
                <td><span class="pill med">Medium</span></td>
                <td>Do not cite DOM out loud. Use it to justify the opening anchor internally.</td>
              </tr>
              <tr>
                <td><strong>Inspection findings</strong></td>
                <td><span class="pill high">High</span></td>
                <td>After contract, a documented inspection list is the strongest mid-deal re-trade tool. Keep opening offer firm enough that you still have room to re-trade later.</td>
              </tr>
              <tr>
                <td><strong>Comparable sales</strong></td>
                <td><span class="pill high">High</span></td>
                <td>Three written comps attached to the offer. Frame opening price as "comp-supported," not "lowball."</td>
              </tr>
              <tr>
                <td><strong>Appraisal risk</strong></td>
                <td><span class="pill med">Medium</span></td>
                <td>If listing is optimistic vs comps, point out appraisal risk to the listing agent. Listing agents fear deals dying at appraisal.</td>
              </tr>
              <tr>
                <td><strong>Competing interest</strong></td>
                <td><span class="pill med">Medium</span></td>
                <td>Assume the seller may have or claim competing offers. Do not chase. If they escalate, step back to your walk-away line.</td>
              </tr>
              <tr>
                <td><strong>Contingency stacking</strong></td>
                <td><span class="pill low">Low-Med</span></td>
                <td>Fewer contingencies = cleaner offer. Only waive what you can absolutely afford to lose on.</td>
              </tr>
              <tr>
                <td><strong>Earnest money</strong></td>
                <td><span class="pill med">Medium</span></td>
                <td>Above-market earnest money (1.5–2%) signals seriousness and often wins over a higher-priced weaker offer.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 5: STRATEGY -->
      <section>
        <div class="nu-badge"><span class="bullet"></span>Section 5 — Negotiation Play</div>
        <h2 class="nu-section-title"><span class="first">Five-Move</span> <span class="rest">Negotiation Play</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Run the same playbook you would on a six-figure equipment deal. Anchor early, silence
          wins rounds, never counter yourself.
        </p>

        <div class="two-col">
          <div class="strategy-card">
            <h3><span class="num">1</span>Anchor first, anchor low-but-defensible</h3>
            <p>Open at $825,000 with three written comps and a one-page condition summary attached.
               The offer should read professional, not punitive.</p>
            <ul>
              <li>Offer in writing, not by phone</li>
              <li>Include proof of funds same envelope</li>
              <li>48-hour response window — not 24, not 72</li>
            </ul>
          </div>

          <div class="strategy-card">
            <h3><span class="num">2</span>Listen before you talk price</h3>
            <p>Before countering, ask the listing agent one question: "What does the seller need
               most from this deal?" Price? Speed? A rent-back? Build the next counter around
               <em>their</em> need, not the number.</p>
            <ul>
              <li>Take notes verbatim</li>
              <li>Silence is a tool — do not fill it</li>
              <li>Confirm by email what was said verbally</li>
            </ul>
          </div>

          <div class="strategy-card">
            <h3><span class="num">3</span>Move in measured steps</h3>
            <p>Never counter yourself. Move up only after they move down. First counter:
               $860,000 with a matched close date. Second counter (if needed): $890,000 with a
               concession ask. Hold $900,000 in reserve.</p>
            <ul>
              <li>Each move should get smaller, not larger</li>
              <li>Trade value for value — concede nothing for free</li>
              <li>Stay at or under the $950,000 ceiling</li>
            </ul>
          </div>

          <div class="strategy-card">
            <h3><span class="num">4</span>Keep the re-trade in reserve</h3>
            <p>Plan for a post-inspection re-trade of $8,000–$25,000 depending on findings.
               Build that expectation into the spread between target ($900,000) and
               walk-away ($950,000).</p>
            <ul>
              <li>Document every inspection finding with photos + contractor estimates</li>
              <li>Ask for credit, not for repair — credits close faster</li>
              <li>Do not threaten to walk unless you are genuinely prepared to walk</li>
            </ul>
          </div>

          <div class="strategy-card">
            <h3><span class="num">5</span>Be willing to walk</h3>
            <p>The negotiating power on any deal comes entirely from the credibility of the walk.
               If the seller insists above $950,000 and the comps don't support it, pause the deal
               for 10 days and move on to other priorities.</p>
            <ul>
              <li>Write the walk-away email in advance so emotion doesn't drive it</li>
              <li>Re-engage only if they return with new terms</li>
              <li>Do not chase. The market re-opens doors.</li>
            </ul>
          </div>

          <div class="strategy-card">
            <h3><span class="num">6</span>Close tight</h3>
            <p>Once at terms, pivot from negotiation to execution. Sellers read every delay as a
               price-drop signal — do not give them one.</p>
            <ul>
              <li>Earnest money wired same or next business day</li>
              <li>Inspection booked within 72 hours</li>
              <li>All communication in writing; avoid verbal-only commitments</li>
              <li>Caroline Butler as point-of-contact for admin/paperwork</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 6: TALK TRACKS -->
      <section>
        <div class="nu-badge"><span class="bullet"></span>Section 6 — Talk Tracks</div>
        <h2 class="nu-section-title"><span class="first">Talk</span> <span class="rest">Tracks — Aaron's Voice</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Use these as starting points. Direct, warm, never apologetic. Lead with the ask. No
          filler. Replace bracketed items with current facts.
        </p>

        <div class="talk-track">
          <div class="talk-track-label">Opening — to the listing agent</div>
          <div class="talk-track-body">
            <em>"I'm serious about 4505 Buttewoods and I'd like to put a written offer in front
            of your seller this week. Before I do, I'd like to understand what the seller cares
            most about — price, speed, or a specific close date? I can structure around any of
            those, but I want to earn the business, not waste anyone's time."</em>
          </div>
        </div>

        <div class="talk-track">
          <div class="talk-track-label">Presenting the opening offer</div>
          <div class="talk-track-body">
            <em>"My offer is $825,000 with proof of funds attached and three closed comps
            supporting the number. I can close on your seller's timeline — 30 days, 60 days,
            or whatever works. If the seller can come down to a number that reflects the
            comparable sales in the neighborhood, we have a deal."</em>
          </div>
        </div>

        <div class="talk-track">
          <div class="talk-track-label">Handling "that's too low"</div>
          <div class="talk-track-body">
            <em>"I understand. The number isn't arbitrary — it's built from three recent closed
            sales within a mile on similar square footage. I'd rather start with numbers we can
            both defend than open with a number I can't justify. What does the seller need to
            see to get us to a deal?"</em>
          </div>
        </div>

        <div class="talk-track">
          <div class="talk-track-label">Mid-deal — after inspection findings</div>
          <div class="talk-track-body">
            <em>"The inspection came back with $[X] in documented items. I'm not asking for
            every dollar — I'm asking for $[75% of X] as a credit at close so we keep the deal
            moving. The alternative is pricing the repairs and extending, which isn't good for
            either of us."</em>
          </div>
        </div>

        <div class="talk-track">
          <div class="talk-track-label">Walk-away — only if needed</div>
          <div class="talk-track-body">
            <em>"I've appreciated working with you. At $[price above walk-away], the numbers
            don't work against the comps. I'm going to step back. If the seller revisits the
            number, I'd welcome a call."</em>
          </div>
        </div>
      </section>

      <!-- SECTION 7: TIMELINE -->
      <section>
        <div class="nu-badge"><span class="bullet"></span>Section 7 — Timeline</div>
        <h2 class="nu-section-title"><span class="first">Timeline</span> <span class="rest">— From Brief to Close</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Target window: brief to close in approximately 45 days. Each stage has a trigger — if the
          trigger slips more than 3 business days, reassess.
        </p>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-day">Day 1 — 2026-04-21</div>
            <div class="timeline-title">Brief complete &amp; due diligence kicked off</div>
            <div class="timeline-detail">Pull parcel, comps, walkthrough booked.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 2–4</div>
            <div class="timeline-title">Walkthrough + comps compiled</div>
            <div class="timeline-detail">Photos of all deferred maintenance. Three written comps printed.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 4–6</div>
            <div class="timeline-title">Proof of funds / pre-approval secured</div>
            <div class="timeline-detail">Patrick Lavette at Renasant Bank if financing any portion.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 7</div>
            <div class="timeline-title">Opening offer submitted ($825,000)</div>
            <div class="timeline-detail">Written, with comps, proof of funds, 48-hour response window.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 8–14</div>
            <div class="timeline-title">Counter rounds + terms agreement</div>
            <div class="timeline-detail">Target land spot: $900,000 or lower.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 15</div>
            <div class="timeline-title">Earnest money wired, inspection booked</div>
            <div class="timeline-detail">Same or next business day after executed contract.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 18–22</div>
            <div class="timeline-title">Inspection + post-inspection re-trade</div>
            <div class="timeline-detail">Credit, not repairs. Move fast to close.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 23–40</div>
            <div class="timeline-title">Appraisal, title, final walkthrough</div>
            <div class="timeline-detail">Address any title issues immediately; do not let appraisal slip.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 41–45</div>
            <div class="timeline-title">Close</div>
            <div class="timeline-detail">Keys in hand. File all paperwork in permanent folder.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 8: RISKS -->
      <section>
        <div class="nu-badge"><span class="bullet"></span>Section 8 — Risks &amp; Mitigations</div>
        <h2 class="nu-section-title"><span class="first">Risks</span> <span class="rest">&amp; Mitigations</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          The four most common ways a high-dollar residential negotiation derails. Plan for each
          before the offer is sent.
        </p>

        <div class="risk-grid">
          <div class="risk-card">
            <h4>Risk — Appraisal gap</h4>
            <p>Property appraises below agreed price. Lender will only fund to appraised value,
               leaving a cash shortfall.</p>
          </div>
          <div class="risk-card mitigation">
            <h4>Mitigation</h4>
            <p>Keep an appraisal contingency unless paying cash. Pre-select one backup lender. Do
               not emotionally commit to the house before the number is defended by the comps.</p>
          </div>

          <div class="risk-card">
            <h4>Risk — Competing offers</h4>
            <p>Seller claims another offer to pressure you above your ceiling.</p>
          </div>
          <div class="risk-card mitigation">
            <h4>Mitigation</h4>
            <p>Congratulate them and bow out. Do not counter above $950,000. Competing-offer
               claims are often posture; the house returns to market if the other deal is thin.</p>
          </div>

          <div class="risk-card">
            <h4>Risk — Hidden material defects</h4>
            <p>Foundation, roof, HVAC, mold, water intrusion not visible until inspection.</p>
          </div>
          <div class="risk-card mitigation">
            <h4>Mitigation</h4>
            <p>Keep a firm inspection contingency. Use licensed inspector plus a contractor
               walk for any findings above $3,000. Convert findings to credit, not repairs.</p>
          </div>

          <div class="risk-card">
            <h4>Risk — Title or HOA surprises</h4>
            <p>Liens, easements, boundary issues, HOA assessments not disclosed upfront.</p>
          </div>
          <div class="risk-card mitigation">
            <h4>Mitigation</h4>
            <p>Order preliminary title search before opening offer. Request last 24 months of
               HOA minutes and any special assessments in writing.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 9: NEXT STEPS -->
      <section>
        <div class="nu-badge"><span class="bullet"></span>Section 9 — Immediate Next Steps</div>
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Steps</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-intro">
          Three actions to take today, in this order.
        </p>

        <div class="checklist">
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">1 — Pull the parcel record &amp; confirm full address</div>
              <div class="check-detail">
                Confirm "Buttewoods" spelling (possibly "Butterwoods" or a private road),
                jurisdiction, and tax-assessed value. Fifteen-minute task.
              </div>
            </div>
            <div class="check-owner">Today</div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">2 — Ask the listing agent the seller-motivation question</div>
              <div class="check-detail">
                One sentence: "What does your seller need most from this deal?" Everything else
                flows from the answer.
              </div>
            </div>
            <div class="check-owner">Today</div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">3 — Request 3 closed comps from buyer's agent</div>
              <div class="check-detail">
                1-mile radius, 5,500–8,500 sq ft, closed within last 6 months. Build the written
                $/sq ft average that anchors your opening offer.
              </div>
            </div>
            <div class="check-owner">Today</div>
          </div>
        </div>

        <div class="cta-row">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Negotiation" class="nu-btn-secondary">Email Aaron</a>
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
    <div class="nu-footer-fine">
      Confidential working document — Prepared 2026-04-21 — For Aaron C. Norris only.
    </div>
  </footer>

</body>
</html>