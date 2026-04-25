<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Negotiation Strategy — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

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
      --nu-warning: #C77800;
      --nu-danger: #B30021;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
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
      width: 78px;
      height: 78px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 14px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    .nu-doc-label {
      display: inline-block;
      margin-top: 24px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.28);
      color: var(--nu-cyan);
      border: 1px solid rgba(6, 208, 255, 0.45);
      border-radius: 3px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.32em;
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

    /* CONTENT WITH PHOENIX WATERMARK */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 280px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 720px;
      aspect-ratio: 1;
      background:
        radial-gradient(circle, rgba(0,51,204,0.07) 0%, transparent 65%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 64px 40px;
    }

    /* TITLE BLOCK */
    .nu-page-title {
      text-align: center;
      margin-bottom: 56px;
      padding-bottom: 36px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-page-title h1 {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .nu-page-title h1 span {
      color: var(--nu-blue);
    }
    .nu-page-title .subtitle {
      font-weight: 400;
      font-size: 1.15rem;
      color: #555;
      max-width: 760px;
      margin: 0 auto;
    }
    .nu-meta-bar {
      display: flex;
      justify-content: center;
      gap: 32px;
      flex-wrap: wrap;
      margin-top: 22px;
      font-size: 0.85rem;
      color: #666;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .nu-meta-bar span strong {
      color: var(--nu-blue);
    }

    /* SECTION TITLES */
    .nu-section {
      margin-bottom: 56px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 20px;
      letter-spacing: 0.01em;
      text-transform: uppercase;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 64px;
      background: var(--nu-cyan);
      margin-bottom: 26px;
    }

    /* PROPERTY SUMMARY CARD */
    .nu-property-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-blue);
      border-radius: 8px;
      padding: 32px 36px;
      margin-bottom: 12px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.06);
    }
    .nu-property-card h3 {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-property-card .address {
      font-size: 1.05rem;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 18px;
    }

    .nu-spec-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 18px;
      margin-top: 16px;
    }
    .nu-spec {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 16px 18px;
      border-radius: 6px;
    }
    .nu-spec-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 6px;
    }
    .nu-spec-value {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .nu-spec-value small {
      font-size: 0.78rem;
      font-weight: 400;
      color: #777;
      display: block;
      margin-top: 2px;
    }

    /* OBJECTIVE BANNER */
    .nu-objective {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001a66 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 8px;
      margin-bottom: 12px;
      position: relative;
      overflow: hidden;
    }
    .nu-objective::before {
      content: '';
      position: absolute;
      top: 0; right: -40px;
      width: 240px; height: 100%;
      background: radial-gradient(ellipse at center, rgba(6,208,255,0.18) 0%, transparent 70%);
    }
    .nu-objective h3 {
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 12px;
      position: relative;
    }
    .nu-objective p {
      font-size: 1.15rem;
      line-height: 1.6;
      font-weight: 300;
      position: relative;
    }
    .nu-objective p strong {
      font-weight: 700;
      color: var(--nu-white);
    }

    /* PHASE TIMELINE */
    .nu-phase-list {
      display: grid;
      gap: 18px;
    }
    .nu-phase {
      display: grid;
      grid-template-columns: 90px 1fr;
      gap: 24px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 26px;
      transition: all 0.2s ease;
    }
    .nu-phase:hover {
      border-color: var(--nu-blue);
      box-shadow: 0 6px 20px rgba(0,0,255,0.08);
      transform: translateY(-1px);
    }
    .nu-phase-num {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 12px 8px;
      text-align: center;
    }
    .nu-phase-num .label {
      font-size: 0.62rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      opacity: 0.9;
    }
    .nu-phase-num .num {
      font-size: 1.8rem;
      font-weight: 900;
      line-height: 1;
      margin: 4px 0 2px;
    }
    .nu-phase-num .week {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.85;
    }
    .nu-phase-body h4 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-phase-body .phase-goal {
      font-size: 0.82rem;
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-phase-body ul {
      list-style: none;
      padding: 0;
    }
    .nu-phase-body ul li {
      padding-left: 18px;
      position: relative;
      margin-bottom: 6px;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .nu-phase-body ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 0;
      top: -2px;
      font-size: 1.1rem;
    }

    /* OFFER LADDER TABLE */
    .nu-offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-offer-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001a66 100%);
    }
    .nu-offer-table thead th {
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 16px 18px;
      text-align: left;
    }
    .nu-offer-table thead th:nth-child(n+2) {
      text-align: center;
    }
    .nu-offer-table tbody td {
      padding: 16px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-offer-table tbody td:nth-child(n+2) {
      text-align: center;
    }
    .nu-offer-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .nu-offer-table tbody tr:hover {
      background: rgba(6, 208, 255, 0.06);
    }
    .nu-offer-table tbody tr:last-child td {
      border-bottom: none;
    }
    .nu-tier-tag {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .tier-walkaway { background: #FFE5E8; color: var(--nu-danger); }
    .tier-target { background: #E5F4EA; color: var(--nu-success); }
    .tier-opening { background: #E5F0FF; color: var(--nu-blue); }
    .tier-stretch { background: #FFF2DD; color: var(--nu-warning); }

    .price-big {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
    }

    /* LEVERAGE GRID */
    .nu-leverage-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .nu-leverage-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 24px;
      transition: all 0.2s ease;
    }
    .nu-leverage-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.09);
    }
    .nu-leverage-card .icon {
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 14px;
    }
    .nu-leverage-card .icon svg {
      width: 24px;
      height: 24px;
      fill: var(--nu-white);
    }
    .nu-leverage-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-leverage-card p {
      font-size: 0.92rem;
      line-height: 1.55;
      color: var(--nu-body-text);
    }

    /* CONTINGENCIES */
    .nu-checklist {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 14px;
    }
    .nu-checklist li {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 14px 18px 14px 46px;
      border-radius: 4px;
      position: relative;
      font-size: 0.93rem;
      line-height: 1.5;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 16px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 2px;
    }

    /* WALKAWAY BOX */
    .nu-walkaway {
      background: linear-gradient(135deg, #FFF8F0 0%, #FFFFFF 100%);
      border: 2px solid var(--nu-warning);
      border-radius: 8px;
      padding: 28px 32px;
      margin-top: 8px;
    }
    .nu-walkaway h3 {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-warning);
      margin-bottom: 14px;
    }
    .nu-walkaway ul {
      list-style: none;
      padding: 0;
    }
    .nu-walkaway li {
      padding-left: 26px;
      position: relative;
      margin-bottom: 10px;
      font-size: 0.97rem;
      line-height: 1.55;
    }
    .nu-walkaway li::before {
      content: '✕';
      position: absolute;
      left: 0;
      top: 0;
      color: var(--nu-warning);
      font-weight: 900;
      font-size: 1.1rem;
    }

    /* OPENING SCRIPT */
    .nu-script {
      background: linear-gradient(135deg, #001144 0%, #000033 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 36px 40px;
      box-shadow: 0 8px 28px rgba(0,0,51,0.18);
      position: relative;
      overflow: hidden;
    }
    .nu-script::before {
      content: '"';
      position: absolute;
      top: -30px;
      left: 14px;
      font-family: Georgia, serif;
      font-size: 12rem;
      color: rgba(6, 208, 255, 0.12);
      line-height: 1;
      pointer-events: none;
    }
    .nu-script-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      position: relative;
    }
    .nu-script p {
      font-size: 1.05rem;
      line-height: 1.7;
      font-weight: 300;
      margin-bottom: 14px;
      position: relative;
    }
    .nu-script p:last-child { margin-bottom: 0; }
    .nu-script p strong {
      font-weight: 700;
      color: var(--nu-cyan);
    }

    /* DECISION RULES */
    .nu-decision-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .nu-decision {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 20px 22px;
    }
    .nu-decision .if {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-decision .condition {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-decision .then {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .nu-decision .action {
      font-size: 0.92rem;
      line-height: 1.5;
      color: var(--nu-body-text);
    }

    /* CTA BAR */
    .nu-cta {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 8px;
      text-align: center;
      margin-top: 12px;
    }
    .nu-cta h3 {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 8px;
    }
    .nu-cta p {
      font-size: 1rem;
      opacity: 0.95;
      max-width: 720px;
      margin: 0 auto 20px;
      line-height: 1.55;
    }
    .nu-cta .next-actions {
      display: flex;
      justify-content: center;
      gap: 14px;
      flex-wrap: wrap;
    }
    .nu-cta-pill {
      background: rgba(0,0,51,0.35);
      border: 1px solid rgba(255,255,255,0.4);
      color: var(--nu-white);
      padding: 10px 22px;
      border-radius: 24px;
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.04em;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
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
    .nu-footer-contact strong {
      color: var(--nu-white);
      font-weight: 700;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .nu-footer-contact a:hover { color: var(--nu-white); }
    .nu-footer-fineprint {
      margin-top: 22px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.12);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      max-width: 760px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.55;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 44px 22px; }
      .nu-page-title h1 { font-size: 1.8rem; }
      .nu-property-card, .nu-objective, .nu-script, .nu-cta { padding: 22px 22px; }
      .nu-phase { grid-template-columns: 1fr; }
      .nu-phase-num { flex-direction: row; gap: 10px; padding: 10px 14px; justify-content: flex-start; }
      .nu-phase-num .num { font-size: 1.4rem; margin: 0; }
      .nu-offer-table thead { display: none; }
      .nu-offer-table tbody td { display: block; text-align: left !important; padding: 8px 16px; border-bottom: none; }
      .nu-offer-table tbody td:first-child { padding-top: 16px; font-weight: 900; }
      .nu-offer-table tbody td:last-child { padding-bottom: 16px; border-bottom: 1px solid var(--nu-medium-gray); }
      .nu-offer-table tbody td::before {
        content: attr(data-label) ': ';
        font-weight: 700;
        color: var(--nu-blue);
        font-size: 0.72rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        display: block;
        margin-bottom: 2px;
      }
      .nu-offer-table tbody td:first-child::before { content: ''; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-phase, .nu-leverage-card { box-shadow: none; border: 1px solid #ccc; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-section { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Confidential — Acquisition Strategy</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-page-title">
        <h1>4505 Buttewoods <span>— Acquisition &amp; Negotiation Plan</span></h1>
        <p class="subtitle">A disciplined, written game plan for negotiating the purchase of the 7,098 sq ft estate at 4505 Buttewoods. Anchored to a fixed walk-away number, sequenced in five phases, and written so every offer, counter, and contingency is decided in advance — before emotion enters the room.</p>
        <div class="nu-meta-bar">
          <span>Owner: <strong>Aaron C. Norris</strong></span>
          <span>Prepared: <strong>April 24, 2026</strong></span>
          <span>Status: <strong>Pre-Offer</strong></span>
          <span>Classification: <strong>Confidential</strong></span>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-property-card">
          <h3>4505 Buttewoods Estate</h3>
          <div class="address">7,098 Square Feet · Single-Family Residential</div>
          <p style="font-size: 0.97rem; color: #555; max-width: 820px;">A 7,098 sq ft estate property identified by Aaron as a target acquisition. This document captures the negotiation framework only — not the financing decision, not the close decision. Those remain separate gates that must be cleared before any offer is signed.</p>

          <div class="nu-spec-grid">
            <div class="nu-spec">
              <div class="nu-spec-label">Address</div>
              <div class="nu-spec-value" style="font-size: 1rem;">4505 Buttewoods<small>Subject Property</small></div>
            </div>
            <div class="nu-spec">
              <div class="nu-spec-label">Living Area</div>
              <div class="nu-spec-value">7,098<small>square feet</small></div>
            </div>
            <div class="nu-spec">
              <div class="nu-spec-label">Property Type</div>
              <div class="nu-spec-value" style="font-size: 1rem;">Estate<small>Single-Family Residence</small></div>
            </div>
            <div class="nu-spec">
              <div class="nu-spec-label">Negotiation Stage</div>
              <div class="nu-spec-value" style="font-size: 1rem;">Pre-Offer<small>Diligence in progress</small></div>
            </div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Objective</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-objective">
          <h3>Single Sentence Goal</h3>
          <p>Acquire 4505 Buttewoods at or below the <strong>Target Price</strong> with seller-paid closing concessions, a clean inspection contingency, and a financing window long enough to lock terms — <strong>or walk away</strong> with the relationship intact and zero earnest money exposure.</p>
        </div>
      </section>

      <!-- DILIGENCE PHASES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Five-Phase <span>Negotiation Sequence</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-phase-list">

          <div class="nu-phase">
            <div class="nu-phase-num">
              <div class="label">Phase</div>
              <div class="num">1</div>
              <div class="week">Week 1</div>
            </div>
            <div class="nu-phase-body">
              <h4>Establish Independent Value</h4>
              <div class="phase-goal">Goal — Know the number before the seller does</div>
              <ul>
                <li>Pull the last 12 months of comparable sales within a 1-mile radius for homes 5,500–8,500 sq ft</li>
                <li>Order a desktop appraisal estimate and an independent BPO from a working agent who has no listing interest in the property</li>
                <li>Run two internal valuations: one based on price-per-sq-ft of comps, one based on income/replacement cost</li>
                <li>Document the gap between asking price and supported value — this is the entire negotiation in one number</li>
              </ul>
            </div>
          </div>

          <div class="nu-phase">
            <div class="nu-phase-num">
              <div class="label">Phase</div>
              <div class="num">2</div>
              <div class="week">Week 1–2</div>
            </div>
            <div class="nu-phase-body">
              <h4>Discover the Seller's Real Motivation</h4>
              <div class="phase-goal">Goal — Find the lever, not the price</div>
              <ul>
                <li>Identify why the property is on the market: relocation, estate, financial pressure, downsizing, divorce, tax timing</li>
                <li>Determine days on market, prior price reductions, prior offers fallen through, and any current contract activity</li>
                <li>Check public record: liens, judgments, mortgage balance, ownership entity, recent refis, tax delinquency</li>
                <li>Ask the listing agent (in person or by phone, never email) the four key questions: timing, flexibility, prior offers, seller priorities</li>
                <li>Decide: is the seller anchored to <strong>price</strong>, <strong>terms</strong>, <strong>timing</strong>, or <strong>certainty</strong>? The lever lives in whichever they care about most</li>
              </ul>
            </div>
          </div>

          <div class="nu-phase">
            <div class="nu-phase-num">
              <div class="label">Phase</div>
              <div class="num">3</div>
              <div class="week">Week 2</div>
            </div>
            <div class="nu-phase-body">
              <h4>Pre-Wire Financing &amp; Proof of Funds</h4>
              <div class="phase-goal">Goal — Walk in with the strongest non-price weapon a buyer carries</div>
              <ul>
                <li>Secure a written pre-approval letter from the bank, dollar amount left blank or sized to <em>opening offer</em>, never to walk-away</li>
                <li>Prepare a proof-of-funds letter for the down-payment + earnest money, dated within the last 14 days</li>
                <li>Confirm a closing window the bank can hit (typically 30–45 days for a property of this size)</li>
                <li>Retain a real estate attorney before the offer goes in — not after — so contract review is same-day, not next-week</li>
              </ul>
            </div>
          </div>

          <div class="nu-phase">
            <div class="nu-phase-num">
              <div class="label">Phase</div>
              <div class="num">4</div>
              <div class="week">Week 2–3</div>
            </div>
            <div class="nu-phase-body">
              <h4>Submit the Opening Offer</h4>
              <div class="phase-goal">Goal — Anchor low without offending</div>
              <ul>
                <li>Submit in writing on a state-standard purchase agreement, never verbally — verbal offers do not count and do not anchor</li>
                <li>Include a short, professional cover letter from buyer (not from agent) explaining the basis for the price — comps, condition, market</li>
                <li>Request a 72-hour response window. Anything longer signals weakness; anything shorter signals desperation</li>
                <li>Attach the pre-approval and proof-of-funds. The seller must <em>see</em> that this is a real, financeable offer before they read the price</li>
                <li>Hold all four contingencies in the opening offer: inspection, appraisal, financing, title — give them up later, one at a time, in exchange for price movement</li>
              </ul>
            </div>
          </div>

          <div class="nu-phase">
            <div class="nu-phase-num">
              <div class="label">Phase</div>
              <div class="num">5</div>
              <div class="week">Week 3–4</div>
            </div>
            <div class="nu-phase-body">
              <h4>Counter, Concede in Pairs, Close</h4>
              <div class="phase-goal">Goal — Trade structure for price; never give without getting</div>
              <ul>
                <li>Every concession must be paired: if buyer raises price, seller must move on closing costs, repair credits, possession date, or inclusions</li>
                <li>Move in <strong>shrinking increments</strong>: large step on first counter, half-step on second, quarter-step on third — the math signals "we're at the limit"</li>
                <li>Use the appraisal contingency as the price-protection backstop; if the appraisal comes in below the contract price, renegotiate or walk</li>
                <li>Protect the inspection period: 10 business days minimum, with a right to terminate AND a right to request repairs/credit</li>
                <li>Drive to a written, attorney-reviewed contract before the financing contingency expires — do not let momentum push past the safety gates</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title">Offer <span>Ladder &amp; Price Discipline</span></h2>
        <div class="nu-section-rule"></div>
        <p style="font-size: 0.97rem; color: #555; margin-bottom: 22px; max-width: 880px;">The four tiers below must be set <em>before</em> the first conversation. Once the ladder is locked, no number above the Walk-Away Tier gets spoken aloud. Aaron decides each cell with the bank, attorney, and supporting comps in hand — not in the moment.</p>

        <table class="nu-offer-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Trigger</th>
              <th>Use When</th>
              <th>Concessions Held</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Tier"><span class="nu-tier-tag tier-opening">Opening</span></td>
              <td data-label="Trigger" class="price-big">Lowest defensible offer backed by comps</td>
              <td data-label="Use When">First written offer. Submitted with full cover letter, pre-approval, and 72-hour deadline.</td>
              <td data-label="Concessions Held">All four contingencies + seller-paid closing + repair credit + 45-day close</td>
            </tr>
            <tr>
              <td data-label="Tier"><span class="nu-tier-tag tier-target">Target</span></td>
              <td data-label="Trigger" class="price-big">The "buy" number — comp-supported, bank-blessed</td>
              <td data-label="Use When">Final landing zone. Reached only after seller has moved at least once. Always paired with a concession from seller.</td>
              <td data-label="Concessions Held">Inspection + appraisal + financing contingencies; release title in exchange for repairs</td>
            </tr>
            <tr>
              <td data-label="Tier"><span class="nu-tier-tag tier-stretch">Stretch</span></td>
              <td data-label="Trigger" class="price-big">Target + one specific value-add (rare use)</td>
              <td data-label="Use When">Only if seller has conceded on closing costs, possession date, or major inclusions of measurable value. Must net Aaron back to Target effectively.</td>
              <td data-label="Concessions Held">Inspection + appraisal contingencies remain non-negotiable</td>
            </tr>
            <tr>
              <td data-label="Tier"><span class="nu-tier-tag tier-walkaway">Walk-Away</span></td>
              <td data-label="Trigger" class="price-big">Any price above Stretch — automatic NO</td>
              <td data-label="Use When">Triggered automatically. Aaron does not "think it over" above this number. The ladder decides, not the moment.</td>
              <td data-label="Concessions Held">Withdraw offer in writing. Thank the seller. Leave the door open for a 30-day return.</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 18px; padding: 18px 22px; background: var(--nu-light-gray); border-left: 4px solid var(--nu-blue); border-radius: 4px; font-size: 0.92rem; line-height: 1.55;">
          <strong style="color: var(--nu-blue); display: block; margin-bottom: 4px; font-size: 0.78rem; letter-spacing: 0.14em; text-transform: uppercase;">Discipline Rule</strong>
          The dollar values for each tier are set in writing, signed off by Aaron and the bank, and stored in a sealed copy of this plan <em>before</em> the opening offer is submitted. Once locked, the only way to change a tier is in writing, with a documented reason. No verbal changes. No "let me just stretch a little." That is how good buyers become bad buyers.
        </div>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Buyer-Side <span>Leverage Points</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-leverage-grid">

          <div class="nu-leverage-card">
            <div class="icon">
              <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
            </div>
            <h4>Verified Financing</h4>
            <p>A pre-approval letter from a real bank with proof of funds dated this month is worth more to a serious seller than a $5K bump from an unverified buyer. Lead the offer with it.</p>
          </div>

          <div class="nu-leverage-card">
            <div class="icon">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <h4>Clean Contract</h4>
            <p>Standard state forms. No unusual addenda. No carve-outs that signal trouble. Sellers value certainty almost as much as price — sometimes more, depending on motivation.</p>
          </div>

          <div class="nu-leverage-card">
            <div class="icon">
              <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            </div>
            <h4>Closing Speed</h4>
            <p>Offer 30-day close if the bank can hit it; 45-day max. Match the seller's preferred possession date. Speed and flexibility on timing often beat $10–25K in price.</p>
          </div>

          <div class="nu-leverage-card">
            <div class="icon">
              <svg viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
            </div>
            <h4>Comp-Backed Documentation</h4>
            <p>Every counter is delivered with a one-page summary of comparable sales. Numbers in writing convert "your low offer" into "your supported offer." Never argue value verbally.</p>
          </div>

          <div class="nu-leverage-card">
            <div class="icon">
              <svg viewBox="0 0 24 24"><path d="M19 6h-3.5l-1-1h-5l-1 1H5v2h14V6zm-9 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm9-12.5V19c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V7.5h2V19h10V7.5h2z"/></svg>
            </div>
            <h4>Inspection Findings</h4>
            <p>A 7,098 sq ft house has 7,098 sq ft of things that can fail inspection. Use the inspection period for genuine repair credits, not theatrics — credits move price; theatrics kill deals.</p>
          </div>

          <div class="nu-leverage-card">
            <div class="icon">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
            </div>
            <h4>Walk-Away Credibility</h4>
            <p>The buyer who can leave is the buyer who gets the deal. Aaron's leverage doubles the moment the seller knows the next call may not come. Use that quietly, never as a threat.</p>
          </div>

        </div>
      </section>

      <!-- CONTINGENCIES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Mandatory <span>Contract Contingencies</span></h2>
        <div class="nu-section-rule"></div>
        <p style="font-size: 0.97rem; color: #555; margin-bottom: 22px; max-width: 880px;">Each item below stays in the opening offer and is released only as a paired concession against price. Releasing a contingency without getting price movement in return is an unforced error.</p>

        <ul class="nu-checklist">
          <li>
            <strong>Inspection Contingency</strong>
            10 business days minimum. Right to terminate AND right to request repairs or credit. Non-negotiable on a 7,098 sq ft estate.
          </li>
          <li>
            <strong>Appraisal Contingency</strong>
            Contract price protected by a lender appraisal. Low appraisal = renegotiate or walk, no penalty.
          </li>
          <li>
            <strong>Financing Contingency</strong>
            21–30 days. Fully cooperative with lender timeline. Locks in earnest money protection until loan commitment is firm.
          </li>
          <li>
            <strong>Title &amp; Survey Review</strong>
            Clean title commitment. Updated boundary survey for an estate of this size. Easements and encroachments resolved before close.
          </li>
          <li>
            <strong>HOA &amp; Restrictive Covenants</strong>
            Full review of any HOA documents, restrictions, or special assessments before contingency release.
          </li>
          <li>
            <strong>Earnest Money Cap</strong>
            Earnest money sized to seriousness, never to vulnerability. Held by independent escrow agent — never by listing brokerage.
          </li>
        </ul>
      </section>

      <!-- WALKAWAY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Walk-Away <span>Triggers</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-walkaway">
          <h3>Any of these and Aaron walks — in writing, with thanks</h3>
          <ul>
            <li>Final price exceeds the locked Stretch tier — no exceptions, no "just one more bump"</li>
            <li>Seller refuses inspection contingency or compresses inspection window below 10 business days</li>
            <li>Appraisal returns materially below contract price and seller will not renegotiate or credit the gap</li>
            <li>Title issues surface that cannot be cured by closing — lien, undisclosed easement, boundary dispute</li>
            <li>Seller demands non-refundable earnest money up front, or escrow held at the listing brokerage</li>
            <li>Disclosed or discovered defect that materially changes the value (foundation, structural, undisclosed flood, prior insurance claim)</li>
            <li>Seller moves backward on terms previously agreed in writing — once, document it; twice, walk</li>
          </ul>
        </div>
      </section>

      <!-- OPENING SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Opening <span>Conversation Script</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-script">
          <div class="nu-script-label">First Call to the Listing Agent</div>
          <p>"This is Aaron Norris. I'm a serious, financed buyer looking at 4505 Buttewoods. Before I bring an offer to your seller, I want to make sure we're on the same page about <strong>what they're solving for</strong> — price, timing, certainty, or all three?"</p>
          <p>"I'm not the highest-bidder type. I'm the cleanest-contract, fastest-close, no-surprises type. I have written pre-approval and proof of funds I can send you today, and I have an attorney standing by for contract review."</p>
          <p>"Tell me what your seller cares about most — and tell me what's already happened on the property. Any prior offers? Any reductions coming? Any timing pressure I should know about? Then I'll structure something that works for both sides."</p>
          <p style="opacity: 0.8;"><strong>Closing line:</strong> "I'd rather walk away friendly than waste either of our time. Let's see if we can build something that fits."</p>
        </div>
      </section>

      <!-- DECISION RULES -->
      <section class="nu-section">
        <h2 class="nu-section-title">If/Then <span>Decision Rules</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-decision-grid">
          <div class="nu-decision">
            <div class="if">If</div>
            <div class="condition">Seller counters at full asking</div>
            <div class="then">Then</div>
            <div class="action">Hold opening offer for 24 hours. Reply with comp summary, no number movement. Test the anchor.</div>
          </div>
          <div class="nu-decision">
            <div class="if">If</div>
            <div class="condition">Seller counters with meaningful movement</div>
            <div class="then">Then</div>
            <div class="action">Move halfway to Target. Pair with one held concession (closing costs or possession date).</div>
          </div>
          <div class="nu-decision">
            <div class="if">If</div>
            <div class="condition">Seller will not move on price</div>
            <div class="then">Then</div>
            <div class="action">Pivot to terms: ask for closing credit, repair credit, longer rent-back, or included furnishings.</div>
          </div>
          <div class="nu-decision">
            <div class="if">If</div>
            <div class="condition">Inspection finds material defects</div>
            <div class="then">Then</div>
            <div class="action">Request credit equal to bid price from licensed contractor + 15% margin. Never ask seller to do the repair.</div>
          </div>
          <div class="nu-decision">
            <div class="if">If</div>
            <div class="condition">Appraisal lands below contract price</div>
            <div class="then">Then</div>
            <div class="action">Three-way conversation: lower price to appraisal, split the gap, or terminate without penalty.</div>
          </div>
          <div class="nu-decision">
            <div class="if">If</div>
            <div class="condition">Aaron is asked to "go up just $5K"</div>
            <div class="then">Then</div>
            <div class="action">Check the ladder. If above Stretch, the answer is no — automatic. If at or below, only with a paired concession.</div>
          </div>
          <div class="nu-decision">
            <div class="if">If</div>
            <div class="condition">A second buyer enters with a higher offer</div>
            <div class="then">Then</div>
            <div class="action">Submit highest-and-best at Stretch only if value still supports it. Otherwise withdraw cleanly. Never bid against yourself.</div>
          </div>
          <div class="nu-decision">
            <div class="if">If</div>
            <div class="condition">Negotiation stalls beyond 14 days</div>
            <div class="then">Then</div>
            <div class="action">Send a written final-position letter with a 7-day expiration. After expiration, withdraw and revisit in 30 days.</div>
          </div>
        </div>
      </section>

      <!-- CTA / NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Immediate <span>Next Steps</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-cta">
          <h3>Lock the Ladder Before the First Phone Call</h3>
          <p>Before Aaron speaks to the listing agent, the four tier prices must be set in writing, the bank pre-approval must be in hand, and the attorney must be on retainer. Every action below converts strategy into execution.</p>
          <div class="next-actions">
            <span class="nu-cta-pill">Pull comps within 1 mile</span>
            <span class="nu-cta-pill">Get bank pre-approval</span>
            <span class="nu-cta-pill">Engage real estate attorney</span>
            <span class="nu-cta-pill">Lock four tier prices in writing</span>
            <span class="nu-cta-pill">Schedule first listing-agent call</span>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO<br>
      Norris Utilities®, LLC &middot; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-fineprint">
      Confidential acquisition strategy. This document is internal planning material for the negotiation of the property at 4505 Buttewoods. It is not an offer, not a contract, and not legal or financial advice. All offers, counters, and terms must be reviewed by licensed counsel and a qualified lender before execution. Norris Utilities®, A Legacy of Commitment®, and the Phoenix Icon® are registered trademarks of Norris Utilities, LLC.
    </div>
  </footer>

</body>
</html>