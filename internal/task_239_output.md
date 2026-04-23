<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Negotiation Strategy — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    /* ══ ROOT VARIABLES ══ */
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
      --nu-success: #1a7f37;
      --nu-warning: #b35c00;
      --nu-caution: #a11e2a;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
    }

    /* ══ BASE ══ */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* ══ HEADER ══ */
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

    /* ══ GHOST PHOENIX WATERMARK ══ */
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.4rem;
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
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
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

    /* ══ DOCUMENT TITLE BLOCK ══ */
    .doc-title-block {
      background: linear-gradient(to bottom, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      padding: 40px 40px 30px;
      text-align: center;
      border-bottom: 3px solid var(--nu-blue);
    }
    .doc-category {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      padding: 6px 18px;
      border-radius: 2px;
      margin-bottom: 18px;
    }
    .doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.3rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .doc-title span {
      color: var(--nu-blue);
    }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 720px;
      margin: 0 auto;
    }
    .doc-meta {
      margin-top: 22px;
      font-size: 0.85rem;
      color: #666;
      letter-spacing: 0.03em;
    }
    .doc-meta strong { color: var(--nu-dark-text); }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 30%; left: 50%;
      transform: translate(-50%, -30%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* ══ SECTION ══ */
    .section {
      margin-bottom: 48px;
    }
    .section-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 22px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1rem;
      border-radius: 4px;
      flex-shrink: 0;
    }
    .section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      letter-spacing: -0.01em;
    }
    .section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ PROPERTY HERO CARD ══ */
    .property-hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 6px 28px rgba(0,0,51,0.2);
      color: var(--nu-white);
    }
    .property-hero-left {
      padding: 36px 32px;
    }
    .property-hero-right {
      padding: 36px 32px;
      background: rgba(255,255,255,0.06);
      border-left: 1px solid rgba(255,255,255,0.12);
    }
    .property-hero-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .property-hero-address {
      font-size: 1.95rem;
      font-weight: 900;
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .property-hero-sub {
      font-size: 1.05rem;
      color: rgba(255,255,255,0.85);
      margin-bottom: 24px;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px 20px;
    }
    .stat {
      border-left: 3px solid var(--nu-cyan);
      padding: 4px 0 4px 12px;
    }
    .stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.75);
      margin-bottom: 4px;
    }
    .stat-value {
      font-size: 1.3rem;
      font-weight: 900;
      color: var(--nu-white);
    }
    .stat-value small {
      font-size: 0.72rem;
      font-weight: 400;
      color: rgba(255,255,255,0.7);
      display: block;
      margin-top: 2px;
    }

    /* ══ OFFER SPOTLIGHT ══ */
    .offer-spotlight {
      margin-top: 10px;
      padding: 20px 22px;
      background: linear-gradient(135deg, rgba(6,208,255,0.15) 0%, rgba(6,208,255,0.05) 100%);
      border: 1px solid rgba(6,208,255,0.4);
      border-radius: 8px;
    }
    .offer-spotlight-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .offer-spotlight-value {
      font-size: 2.2rem;
      font-weight: 900;
      color: var(--nu-white);
      line-height: 1;
    }
    .offer-spotlight-note {
      margin-top: 8px;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.9);
    }

    /* ══ GENERIC CARDS ══ */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .nu-card h4 {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-card .metric {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 6px;
    }
    .nu-card .metric-note {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* ══ STRATEGY TABLE ══ */
    .strategy-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .strategy-table thead {
      background: var(--nu-navy);
      color: var(--nu-white);
    }
    .strategy-table th {
      padding: 14px 16px;
      text-align: left;
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .strategy-table td {
      padding: 14px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .strategy-table tr:nth-child(even) td {
      background: var(--nu-light-gray);
    }
    .strategy-table strong { color: var(--nu-dark-text); }
    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .pill-anchor { background: #d6e4ff; color: #0033cc; }
    .pill-target { background: #d4f4dd; color: #1a7f37; }
    .pill-walk   { background: #fde2e4; color: #a11e2a; }
    .pill-high   { background: #fde2b3; color: #b35c00; }
    .pill-med    { background: #e6e6f2; color: #3a3a6a; }

    /* ══ PLAYBOOK LIST ══ */
    .playbook {
      display: grid;
      gap: 14px;
    }
    .play {
      display: grid;
      grid-template-columns: 48px 1fr;
      gap: 16px;
      align-items: start;
      background: var(--nu-white);
      padding: 18px 22px;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-cyan);
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .play-num {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-blue);
      line-height: 1;
      padding-top: 2px;
    }
    .play-body h4 {
      font-size: 1.02rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .play-body p {
      font-size: 0.94rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ LEVERAGE / RISK COLUMNS ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .lev-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px 24px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .lev-card.positive { border-top: 5px solid var(--nu-success); }
    .lev-card.caution  { border-top: 5px solid var(--nu-warning); }
    .lev-card h4 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .lev-card ul {
      list-style: none;
      padding: 0;
    }
    .lev-card li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.93rem;
      line-height: 1.55;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .lev-card li:last-child { border-bottom: none; }
    .lev-card.positive li::before {
      content: '▲';
      position: absolute;
      left: 0; top: 9px;
      color: var(--nu-success);
      font-size: 0.8rem;
    }
    .lev-card.caution li::before {
      content: '●';
      position: absolute;
      left: 0; top: 9px;
      color: var(--nu-warning);
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 9px;
      top: 6px;
      bottom: 6px;
      width: 3px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .tl-item {
      position: relative;
      padding: 12px 0 20px 10px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -27px;
      top: 18px;
      width: 15px;
      height: 15px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .tl-day {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .tl-title {
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .tl-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ TERMS LIST ══ */
    .terms-list {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
    }
    .terms-row {
      display: grid;
      grid-template-columns: 220px 1fr;
      gap: 20px;
      padding: 16px 22px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .terms-row:first-child { border-top: none; }
    .terms-row:nth-child(even) { background: var(--nu-light-gray); }
    .terms-label {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .terms-value {
      color: var(--nu-body-text);
      font-size: 0.95rem;
      line-height: 1.55;
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, #fff9e6 0%, #fffef5 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 22px 0;
    }
    .callout-title {
      font-weight: 900;
      color: #7a5c00;
      margin-bottom: 6px;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .callout p {
      font-size: 0.94rem;
      line-height: 1.6;
      color: var(--nu-dark-text);
    }

    .callout.private {
      background: linear-gradient(135deg, #f0f4ff 0%, #fafcff 100%);
      border-left-color: var(--nu-blue);
    }
    .callout.private .callout-title { color: #0033cc; }

    /* ══ SCRIPT BLOCK ══ */
    .script-block {
      background: var(--nu-navy);
      color: rgba(255,255,255,0.92);
      padding: 22px 26px;
      border-radius: 8px;
      border-left: 5px solid var(--nu-cyan);
      font-size: 0.96rem;
      line-height: 1.7;
      font-style: italic;
    }
    .script-block::before {
      content: '“';
      display: block;
      font-size: 2.4rem;
      font-family: Georgia, serif;
      color: var(--nu-cyan);
      line-height: 0.7;
      margin-bottom: 8px;
      font-style: normal;
    }
    .script-block .attribution {
      display: block;
      margin-top: 14px;
      font-size: 0.82rem;
      font-style: normal;
      color: rgba(255,255,255,0.7);
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px 36px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.03em;
    }
    .nu-footer-name {
      font-weight: 700;
      color: var(--nu-white);
      font-size: 1rem;
      margin-bottom: 8px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-confidential {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 860px) {
      .property-hero { grid-template-columns: 1fr; }
      .property-hero-right { border-left: none; border-top: 1px solid rgba(255,255,255,0.12); }
      .two-col { grid-template-columns: 1fr; }
      .terms-row { grid-template-columns: 1fr; gap: 4px; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 50px 22px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; padding-left: 0.55em; }
      .nu-tagline { font-size: 1rem; }
      .doc-title { font-size: 1.7rem; }
      .container { padding: 36px 22px 48px; }
      .section-title { font-size: 1.25rem; }
      .property-hero-left, .property-hero-right { padding: 26px 22px; }
      .property-hero-address { font-size: 1.55rem; }
      .offer-spotlight-value { font-size: 1.75rem; }
      .play { grid-template-columns: 38px 1fr; gap: 12px; padding: 14px 16px; }
      .play-num { font-size: 1.4rem; }
      .strategy-table { font-size: 0.85rem; }
      .strategy-table th, .strategy-table td { padding: 10px 12px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .property-hero { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .script-block { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .play, .nu-card, .lev-card { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOCUMENT TITLE BLOCK -->
  <section class="doc-title-block">
    <div class="doc-category">Private &middot; Personal &middot; Negotiation Brief</div>
    <h1 class="doc-title">4505 <span>Buttewoods</span> Estate</h1>
    <p class="doc-subtitle">Negotiation strategy and offer framework for the 7,098 sq ft estate — prepared for Aaron C. Norris.</p>
    <div class="doc-meta">
      <strong>Prepared:</strong> April 23, 2026 &nbsp;•&nbsp; <strong>Target Offer:</strong> $900,000 &nbsp;•&nbsp; <strong>Status:</strong> Pre-offer positioning
    </div>
  </section>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- PROPERTY HERO -->
      <section class="section">
        <div class="property-hero">
          <div class="property-hero-left">
            <div class="property-hero-label">Subject Property</div>
            <div class="property-hero-address">4505 Buttewoods</div>
            <div class="property-hero-sub">Private residential estate — 7,098 square feet under roof.</div>
            <div class="property-stats">
              <div class="stat">
                <div class="stat-label">Size</div>
                <div class="stat-value">7,098 sq ft<small>Under roof, confirmed</small></div>
              </div>
              <div class="stat">
                <div class="stat-label">Use</div>
                <div class="stat-value">Personal residence<small>Long-hold family property</small></div>
              </div>
              <div class="stat">
                <div class="stat-label">Buyer</div>
                <div class="stat-value">A. C. Norris<small>Cash-capable, pre-qualified</small></div>
              </div>
              <div class="stat">
                <div class="stat-label">Timeline</div>
                <div class="stat-value">30–45 days<small>Close target, flexible</small></div>
              </div>
            </div>
          </div>
          <div class="property-hero-right">
            <div class="property-hero-label">Opening Offer Framework</div>
            <div class="offer-spotlight">
              <div class="offer-spotlight-label">Opening Number</div>
              <div class="offer-spotlight-value">$900,000</div>
              <div class="offer-spotlight-note">Firm, clean, and fast-close. Leaves room for counter without re-anchoring.</div>
            </div>
            <div class="offer-spotlight" style="margin-top:14px;">
              <div class="offer-spotlight-label">Walk-Away Ceiling</div>
              <div class="offer-spotlight-value">$975,000</div>
              <div class="offer-spotlight-note">Private cap. Not disclosed to seller or listing agent under any circumstance.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 1 — OBJECTIVE -->
      <section class="section">
        <div class="section-header">
          <span class="section-number">1</span>
          <h2 class="section-title">Objective <span>&amp; Deal Shape</span></h2>
        </div>
        <p style="font-size:1.02rem; line-height:1.7; margin-bottom:18px;">
          Acquire 4505 Buttewoods at a price and on terms that protect cash position,
          preserve flexibility for Norris Utilities®' ongoing capital needs, and close
          cleanly without financing contingencies that give the seller reason to shop
          the offer. This brief converts a round-number target into a disciplined
          negotiation playbook — opening anchor, stretch target, walk-away number,
          and a written sequence of moves for each likely counter.
        </p>
        <div class="card-grid">
          <div class="nu-card">
            <h4>Opening Anchor</h4>
            <div class="metric">$900,000</div>
            <div class="metric-note">Defensible number, not a lowball. Signals serious buyer.</div>
          </div>
          <div class="nu-card">
            <h4>Target Close</h4>
            <div class="metric">$925,000</div>
            <div class="metric-note">Expected landing zone after one or two counters.</div>
          </div>
          <div class="nu-card">
            <h4>Walk-Away</h4>
            <div class="metric">$975,000</div>
            <div class="metric-note">Private ceiling. Above this, the deal stops making sense.</div>
          </div>
          <div class="nu-card">
            <h4>Priority Terms</h4>
            <div class="metric">Cash &amp; Speed</div>
            <div class="metric-note">No financing contingency. 30-day close on demand.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 2 — PRICE ZONES -->
      <section class="section">
        <div class="section-header">
          <span class="section-number">2</span>
          <h2 class="section-title">Price <span>Zones</span></h2>
        </div>
        <table class="strategy-table">
          <thead>
            <tr>
              <th>Zone</th>
              <th>Price</th>
              <th>$/sq ft</th>
              <th>Posture</th>
              <th>What It Signals</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="pill pill-anchor">Opening Anchor</span></td>
              <td><strong>$900,000</strong></td>
              <td>$126.80</td>
              <td>Assertive, defensible</td>
              <td>Serious buyer, not a tire-kicker. Room to move up with concessions.</td>
            </tr>
            <tr>
              <td><span class="pill pill-target">Target Close</span></td>
              <td><strong>$925,000</strong></td>
              <td>$130.32</td>
              <td>Expected meeting point</td>
              <td>Realistic after one counter. Where most comparable estates settle.</td>
            </tr>
            <tr>
              <td><span class="pill pill-high">Stretch</span></td>
              <td><strong>$950,000</strong></td>
              <td>$133.84</td>
              <td>Pay only with earned concessions</td>
              <td>Requires seller flexibility on closing costs, timeline, or inclusions.</td>
            </tr>
            <tr>
              <td><span class="pill pill-walk">Walk-Away</span></td>
              <td><strong>$975,000</strong></td>
              <td>$137.36</td>
              <td>Absolute ceiling — private</td>
              <td>Beyond this the numbers don't work. No exception, no sentiment.</td>
            </tr>
          </tbody>
        </table>
        <div class="callout private">
          <div class="callout-title">Private — Do Not Share</div>
          <p>The walk-away number ($975,000) never leaves this document. Anchoring theory is clear: the moment the seller hears a number, it becomes the new floor. The opening anchor of $900,000 is the only price disclosed until the seller moves.</p>
        </div>
      </section>

      <!-- SECTION 3 — LEVERAGE -->
      <section class="section">
        <div class="section-header">
          <span class="section-number">3</span>
          <h2 class="section-title">Leverage <span>&amp; Risks</span></h2>
        </div>
        <div class="two-col">
          <div class="lev-card positive">
            <h4>Leverage — Work With These</h4>
            <ul>
              <li><strong>Cash offer.</strong> No financing contingency eliminates appraisal risk and lender timelines — worth real money to a seller.</li>
              <li><strong>Fast close.</strong> 30 days if the seller wants it. Few retail buyers can move that fast.</li>
              <li><strong>Clean buyer profile.</strong> Established business owner, no contingent sale, no out-of-state wire complications.</li>
              <li><strong>No concession stack.</strong> Not asking for seller credits, rate buydowns, or repairs up front.</li>
              <li><strong>Willingness to walk.</strong> This is a want, not a need. That posture is itself leverage.</li>
            </ul>
          </div>
          <div class="lev-card caution">
            <h4>Risks — Manage These</h4>
            <ul>
              <li><strong>Emotional attachment.</strong> A 7,098 sq ft estate is a signature property. Decision must stay financial, not aspirational.</li>
              <li><strong>Seller market position.</strong> If the seller is not motivated, time is on their side — pace the offer accordingly.</li>
              <li><strong>Competing offers.</strong> Assume the property is being shopped. Don't let a phantom second bidder push the number up.</li>
              <li><strong>Inspection surprises.</strong> 7,098 sq ft = more roof, more mechanicals, more potential deferred maintenance. Budget for findings.</li>
              <li><strong>Opportunity cost.</strong> Capital tied up in the house is capital not deployed in Norris Utilities inventory or growth.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 4 — NEGOTIATION PLAYBOOK -->
      <section class="section">
        <div class="section-header">
          <span class="section-number">4</span>
          <h2 class="section-title">Negotiation <span>Playbook</span></h2>
        </div>
        <div class="playbook">
          <div class="play">
            <div class="play-num">01</div>
            <div class="play-body">
              <h4>Anchor with $900,000 — in writing</h4>
              <p>Verbal offers disappear. A written offer with proof of funds attached forces the seller to respond in writing, which preserves the record and removes emotion from the channel.</p>
            </div>
          </div>
          <div class="play">
            <div class="play-num">02</div>
            <div class="play-body">
              <h4>Lead with terms, not price</h4>
              <p>Open the conversation with cash, no financing contingency, and a 30-day close. Let the seller's agent hear value before they hear the number. Terms soften the anchor.</p>
            </div>
          </div>
          <div class="play">
            <div class="play-num">03</div>
            <div class="play-body">
              <h4>Silence after the offer</h4>
              <p>Deliver the offer, then stop talking. Do not justify, sweeten, or explain. The first party to fill the silence concedes something. Let the seller go first.</p>
            </div>
          </div>
          <div class="play">
            <div class="play-num">04</div>
            <div class="play-body">
              <h4>Move in small, uneven increments</h4>
              <p>If countered at $975K, counter at $915K — not $925K. Small, odd-number moves signal a buyer operating on analysis, not emotion. Round jumps telegraph flexibility.</p>
            </div>
          </div>
          <div class="play">
            <div class="play-num">05</div>
            <div class="play-body">
              <h4>Trade terms for price, never give both</h4>
              <p>If pushed above $925K, extract something in return: furniture inclusion, seller-paid closing, rent-back on favorable terms, or warranty coverage. Never move price without earning a concession.</p>
            </div>
          </div>
          <div class="play">
            <div class="play-num">06</div>
            <div class="play-body">
              <h4>Use the inspection as a second negotiation</h4>
              <p>The first negotiation sets the price. The inspection is a fresh, legitimate round for credits or reductions — roof, HVAC, foundation, electrical. Plan for it; don't treat it as a surprise.</p>
            </div>
          </div>
          <div class="play">
            <div class="play-num">07</div>
            <div class="play-body">
              <h4>Set a written expiration</h4>
              <p>Every offer and counter includes an expiration (48–72 hours). It creates decision pressure on the seller without creating urgency on the buyer. Missed deadlines reset the leverage.</p>
            </div>
          </div>
          <div class="play">
            <div class="play-num">08</div>
            <div class="play-body">
              <h4>Be willing — visibly — to walk</h4>
              <p>Walking is the strongest single tool in the brief. If the seller stalls above the ceiling, pause for 7–10 days of silence. Most of the time, the counter comes back softer.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 5 — OFFER TERMS -->
      <section class="section">
        <div class="section-header">
          <span class="section-number">5</span>
          <h2 class="section-title">Offer <span>Terms</span></h2>
        </div>
        <div class="terms-list">
          <div class="terms-row">
            <div class="terms-label">Purchase Price</div>
            <div class="terms-value"><strong>$900,000</strong> — opening offer, firm in writing, expires 72 hours from delivery.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Financing</div>
            <div class="terms-value">All cash. No mortgage contingency. Proof of funds letter attached to offer package.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Earnest Money</div>
            <div class="terms-value">$15,000 held in escrow with a mutually acceptable title company, non-refundable after inspection period.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Inspection Period</div>
            <div class="terms-value">10 business days for inspection, appraisal (informational only), and title review. Right to terminate or renegotiate for material findings.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Closing Date</div>
            <div class="terms-value">30 days from fully executed agreement. Flexible to 45 days if it wins price concessions.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Possession</div>
            <div class="terms-value">At closing. Short post-closing occupancy (≤14 days) negotiable in exchange for price concession.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Closing Costs</div>
            <div class="terms-value">Standard local split. Request seller cover title insurance and transfer tax as a concession if price rises above $925,000.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Inclusions Requested</div>
            <div class="terms-value">All built-in appliances, window treatments, fixtures, and any listed personal property. Separate itemized list to accompany offer.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Contingencies</div>
            <div class="terms-value">Inspection and clear title only. No financing, no sale-of-home, no survey waiver.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Representation</div>
            <div class="terms-value">Buyer represented by real-estate attorney of record. Offer drafted and reviewed by counsel before delivery.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 6 — COUNTER-OFFER DECISION TREE -->
      <section class="section">
        <div class="section-header">
          <span class="section-number">6</span>
          <h2 class="section-title">Counter-Offer <span>Decision Tree</span></h2>
        </div>
        <table class="strategy-table">
          <thead>
            <tr>
              <th>If Seller Counters At…</th>
              <th>Interpretation</th>
              <th>Recommended Response</th>
              <th>Terms Lever</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$900,000 (accept)</td>
              <td>Highly motivated. Possible undisclosed issue — inspect carefully.</td>
              <td>Accept. Move fast on inspection and title. Lock it down.</td>
              <td>None needed.</td>
            </tr>
            <tr>
              <td>$910,000 – $925,000</td>
              <td>Normal market response. Within target zone.</td>
              <td>Counter at $915,000 or accept $925,000 if terms hold.</td>
              <td>Hold closing costs on seller.</td>
            </tr>
            <tr>
              <td>$935,000 – $950,000</td>
              <td>Seller testing ceiling. Firm but open.</td>
              <td>Counter $925,000 with 48-hour expiration. Do not split the difference.</td>
              <td>Require furniture inclusion or $5K credit.</td>
            </tr>
            <tr>
              <td>$960,000 – $975,000</td>
              <td>Top of acceptable range. Approaching ceiling.</td>
              <td>Final number: $950,000, best and final, written expiration.</td>
              <td>Demand closing-cost credit + inclusions.</td>
            </tr>
            <tr>
              <td>Above $975,000</td>
              <td>Seller not serious or expects bidding war.</td>
              <td>Walk. Thank them in writing. Leave the door open for 30 days.</td>
              <td>None. Walking is the lever.</td>
            </tr>
          </tbody>
        </table>
        <div class="callout">
          <div class="callout-title">Discipline Check</div>
          <p>Every number above is pre-committed, in writing, before the offer goes in. The seller's response does not change the tree. Emotion in the moment is the single biggest threat to this deal — the tree exists to remove it.</p>
        </div>
      </section>

      <!-- SECTION 7 — TIMELINE -->
      <section class="section">
        <div class="section-header">
          <span class="section-number">7</span>
          <h2 class="section-title">Execution <span>Timeline</span></h2>
        </div>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-day">Day 0 — This Week</div>
            <div class="tl-title">Finalize proof of funds &amp; attorney engagement</div>
            <div class="tl-body">Confirm liquid capital verification letter from bank. Engage real-estate attorney to draft offer package. Pull recent comps for the neighborhood to pressure-test the $900K anchor.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 1–2</div>
            <div class="tl-title">Deliver written offer</div>
            <div class="tl-body">Offer delivered through listing agent in writing with proof of funds attached. 72-hour expiration. No verbal preamble on price — lead with terms.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 3–5</div>
            <div class="tl-title">Seller response window</div>
            <div class="tl-body">Expect counter in the $925K–$960K range. Apply decision tree — do not negotiate live on the phone. All responses in writing, 48-hour turnarounds.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 5–10</div>
            <div class="tl-title">Close out terms</div>
            <div class="tl-body">Reach executed agreement or walk. If walking, send a clean written close-out — no burned bridges. Leave the seller a pathway back.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 11–20</div>
            <div class="tl-title">Inspection &amp; second negotiation</div>
            <div class="tl-body">Full inspection, roof, HVAC, foundation, electrical, sewer scope. Request credits or reductions on any material findings. This is a fresh negotiation, not a reopening of price.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 21–30</div>
            <div class="tl-title">Title, escrow, closing</div>
            <div class="tl-body">Clear title, wire earnest money balance, final walk-through, close. Possession at closing unless rent-back was negotiated.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 8 — SCRIPT -->
      <section class="section">
        <div class="section-header">
          <span class="section-number">8</span>
          <h2 class="section-title">Opening <span>Language</span></h2>
        </div>
        <p style="margin-bottom:16px; font-size:0.98rem;">Draft language for the initial conversation with the listing agent — delivered warmly, firmly, and without apology:</p>
        <div class="script-block">
          We've reviewed the property at 4505 Buttewoods carefully, and we're
          prepared to move quickly. Our offer is nine hundred thousand, all cash,
          no financing contingency, thirty-day close. Proof of funds is attached.
          We're a serious buyer, our capital is ready, and we can be at the table
          this week. The offer is firm through Friday at five o'clock.
          <span class="attribution">— Delivered in writing; mirrored verbally if the agent calls.</span>
        </div>
        <div class="callout">
          <div class="callout-title">After Delivery — Stop Talking</div>
          <p>Do not justify the number. Do not hedge. Do not volunteer the walk-away ceiling, the timeline flexibility, or the stretch zone. Silence is the second sentence.</p>
        </div>
      </section>

      <!-- SECTION 9 — DUE DILIGENCE -->
      <section class="section">
        <div class="section-header">
          <span class="section-number">9</span>
          <h2 class="section-title">Due <span>Diligence Checklist</span></h2>
        </div>
        <div class="card-grid">
          <div class="nu-card">
            <h4>Title &amp; Survey</h4>
            <div class="metric-note">Title commitment, survey on file, easements, restrictive covenants, HOA documents if applicable, lien search.</div>
          </div>
          <div class="nu-card">
            <h4>Structural</h4>
            <div class="metric-note">Foundation, framing, roof age &amp; condition, exterior envelope, water intrusion history, drainage.</div>
          </div>
          <div class="nu-card">
            <h4>Mechanical</h4>
            <div class="metric-note">HVAC zones (7,098 sq ft likely multi-zone), plumbing, electrical service &amp; panel, generator if present, water heater(s).</div>
          </div>
          <div class="nu-card">
            <h4>Environmental</h4>
            <div class="metric-note">Radon, mold, termite/WDI letter, lead paint (if pre-1978), septic or sewer scope, well water if applicable.</div>
          </div>
          <div class="nu-card">
            <h4>Tax &amp; Insurance</h4>
            <div class="metric-note">Last three years of property tax bills, current insurance quote at replacement cost, flood zone determination.</div>
          </div>
          <div class="nu-card">
            <h4>Utility History</h4>
            <div class="metric-note">12-month utility history — gas, electric, water. A 7,098 sq ft estate has meaningful carrying cost.</div>
          </div>
          <div class="nu-card">
            <h4>Comparable Sales</h4>
            <div class="metric-note">Three closed comps within 12 months and within ±15% square footage. Use to sanity-check counter numbers live.</div>
          </div>
          <div class="nu-card">
            <h4>Legal Review</h4>
            <div class="metric-note">Attorney review of all contract language, title, survey, and HOA/covenant documents before final signature.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 10 — DECISION SUMMARY -->
      <section class="section">
        <div class="section-header">
          <span class="section-number">10</span>
          <h2 class="section-title">Decision <span>Summary</span></h2>
        </div>
        <div class="terms-list">
          <div class="terms-row">
            <div class="terms-label">Proceed To Offer</div>
            <div class="terms-value">Yes — at $900,000 cash, 30-day close, inspection contingency only. Offer package ready for delivery this week.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Expected Close Price</div>
            <div class="terms-value">$920,000 – $935,000 range based on seller motivation and counter cadence.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Hard Ceiling</div>
            <div class="terms-value">$975,000. Non-negotiable, undisclosed, self-enforced.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Walk-Away Trigger</div>
            <div class="terms-value">Any seller position above $975,000; or any refusal of inspection contingency; or discovery of undisclosed material defects.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Primary Risk</div>
            <div class="terms-value">Emotional anchoring — not price. The discipline to follow the decision tree in the moment is the single biggest determinant of outcome.</div>
          </div>
          <div class="terms-row">
            <div class="terms-label">Confidentiality</div>
            <div class="terms-value">This brief is internal. Not shared with listing agent, seller, or third parties. Target, ceiling, and playbook stay private.</div>
          </div>
        </div>
        <div class="callout private">
          <div class="callout-title">Final Discipline Note</div>
          <p>A 7,098 sq ft estate is a beautiful property and an easy place to overpay. This brief is the discipline. The numbers in this document are the numbers — no exceptions, no emotional overrides, no "just this once." If the seller won't meet terms, the correct answer is to walk and let time reset the negotiation.</p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-name">Aaron C. Norris, Founder &amp; CEO</div>
    <div class="nu-footer-contact">
      Norris Utilities®, LLC &nbsp;|&nbsp; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-confidential">
      Confidential &middot; Private negotiation brief &middot; Not for distribution
    </div>
  </footer>

</body>
</html>