<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-success: #0a8043;
      --nu-warning: #b8860b;
      --nu-danger: #b91c1c;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      min-height: 320px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }
    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 18px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.02em;
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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 280px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* PAGE TITLE BLOCK */
    .doc-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      padding-bottom: 18px;
      border-bottom: 3px solid var(--nu-blue);
      margin-bottom: 30px;
    }
    .doc-eyebrow {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      color: var(--nu-blue);
      text-transform: uppercase;
    }
    .doc-eyebrow span { color: var(--nu-cyan); }
    .doc-stamp {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-body-text);
      letter-spacing: 0.05em;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .page-title span {
      color: var(--nu-blue);
      display: block;
      font-size: 1.1rem;
      letter-spacing: 0.18em;
      font-weight: 900;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 820px;
      margin-top: 8px;
    }

    /* PROPERTY HERO */
    .property-hero {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 0;
      margin: 36px 0 50px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 12px 40px rgba(0,0,51,0.12);
      border: 1px solid var(--nu-medium-gray);
    }
    .property-visual {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 50%, var(--nu-blue) 100%);
      padding: 40px;
      color: var(--nu-white);
      position: relative;
      overflow: hidden;
      min-height: 280px;
    }
    .property-visual::before {
      content: '';
      position: absolute;
      top: -30%; right: -30%;
      width: 80%; height: 160%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.22) 0%, transparent 70%);
    }
    .property-visual-content { position: relative; z-index: 2; }
    .property-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.3em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .property-address {
      font-size: 1.7rem;
      font-weight: 900;
      line-height: 1.2;
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }
    .property-locality {
      font-size: 1rem;
      font-weight: 400;
      color: rgba(255,255,255,0.85);
      margin-bottom: 26px;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
      padding-top: 22px;
      border-top: 1px solid rgba(255,255,255,0.18);
    }
    .property-stat .stat-num {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-cyan);
      line-height: 1;
      margin-bottom: 4px;
    }
    .property-stat .stat-label {
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.8);
      font-weight: 700;
    }

    .property-summary {
      background: var(--nu-white);
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .summary-headline {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
      line-height: 1.4;
    }
    .summary-row {
      display: flex;
      justify-content: space-between;
      padding: 11px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
    }
    .summary-row:last-child { border-bottom: none; }
    .summary-row .lbl { color: var(--nu-body-text); font-weight: 400; }
    .summary-row .val { color: var(--nu-dark-text); font-weight: 700; text-align: right; }
    .status-pill {
      display: inline-block;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      color: #78350f;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* SECTION */
    section { margin-bottom: 50px; }
    .section-heading {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 22px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1rem;
      border-radius: 50%;
      letter-spacing: 0;
      flex-shrink: 0;
    }
    .section-heading h2 {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .section-heading h2 span:first-child {
      color: var(--nu-blue);
    }

    /* OBJECTIVES */
    .objectives-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
    }
    .objective-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 24px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .objective-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,255,0.08);
    }
    .objective-card.alt { border-left-color: var(--nu-cyan); }
    .objective-card .obj-num {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .objective-card.alt .obj-num { color: #0099bb; }
    .objective-card h3 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .objective-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* DUE DILIGENCE TABLE */
    .dd-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      font-size: 0.92rem;
    }
    .dd-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .dd-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .dd-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .dd-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .dd-table .item-name { font-weight: 700; color: var(--nu-dark-text); }
    .dd-table .priority {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 10px;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .priority.critical { background: #fee2e2; color: var(--nu-danger); }
    .priority.high { background: #fef3c7; color: #92400e; }
    .priority.standard { background: #dbeafe; color: var(--nu-blue); }

    /* NEGOTIATION POSITIONING */
    .position-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }
    .position-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      border: 1px solid var(--nu-medium-gray);
      position: relative;
      overflow: hidden;
    }
    .position-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 5px;
    }
    .position-card.opening::before { background: linear-gradient(90deg, var(--nu-cyan), #00aaff); }
    .position-card.target::before { background: linear-gradient(90deg, var(--nu-blue), #0066ee); }
    .position-card.walkaway::before { background: linear-gradient(90deg, var(--nu-navy), var(--nu-blue)); }
    .position-card .pos-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.22em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .position-card .pos-amount {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1;
      margin-bottom: 6px;
    }
    .position-card .pos-psf {
      font-size: 0.85rem;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 14px;
    }
    .position-card .pos-rationale {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* CHEVRON BADGES (action items) */
    .action-list { display: flex; flex-direction: column; gap: 10px; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 32px 16px 22px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.01em;
    }
    .nu-badge .badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px; height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 16px;
      flex-shrink: 0;
    }
    .nu-badge .badge-task { flex: 1; }
    .nu-badge .badge-owner {
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-left: 18px;
      font-weight: 900;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 11px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -27px; top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-item .tl-when {
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .timeline-item .tl-title {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 5px;
    }
    .timeline-item .tl-detail {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* RISK BLOCK */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
    }
    .risk-card .risk-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }
    .risk-flag {
      width: 12px; height: 12px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .risk-flag.red { background: var(--nu-danger); }
    .risk-flag.amber { background: var(--nu-warning); }
    .risk-flag.green { background: var(--nu-success); }
    .risk-card h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .risk-card p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
      line-height: 1.55;
    }
    .risk-card .mitigation {
      font-size: 0.82rem;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      color: var(--nu-dark-text);
    }
    .risk-card .mitigation strong {
      color: var(--nu-blue);
      font-weight: 900;
      display: block;
      margin-bottom: 3px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 0.7rem;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #eef2ff 100%);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 24px 28px;
      margin: 30px 0 0;
    }
    .callout h4 {
      font-size: 0.85rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .callout p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }
    .callout p + p { margin-top: 10px; }

    /* CONTACTS */
    .contacts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 22px;
    }
    .contact-card .role {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .contact-card .who {
      font-size: 1.02rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .contact-card .desc {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      line-height: 1.45;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #000099 100%);
      color: rgba(255,255,255,0.88);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
      font-weight: 400;
    }
    .nu-footer-contact strong { color: var(--nu-white); font-weight: 900; }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 22px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 880px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px 60px; }
      .page-title { font-size: 1.7rem; }
      .property-hero { grid-template-columns: 1fr; }
      .position-grid { grid-template-columns: 1fr; }
      .nu-badge {
        clip-path: none;
        border-radius: 6px;
        padding: 14px 18px;
        flex-wrap: wrap;
      }
      .nu-badge .badge-owner { margin-left: 0; margin-top: 8px; }
      .dd-table thead { display: none; }
      .dd-table, .dd-table tbody, .dd-table tr, .dd-table td { display: block; width: 100%; }
      .dd-table tr {
        margin-bottom: 12px;
        border: 1px solid var(--nu-medium-gray);
        border-radius: 6px;
      }
      .dd-table td { border-top: none; padding: 8px 14px; }
      .dd-table td:first-child { padding-top: 14px; }
      .dd-table td:last-child { padding-bottom: 14px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .objective-card, .position-card, .risk-card, .contact-card { box-shadow: none; }
      section { page-break-inside: avoid; }
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
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC META -->
      <div class="doc-meta">
        <div class="doc-eyebrow">Acquisition Strategy <span>·</span> Confidential Working Document</div>
        <div class="doc-stamp">Prepared 2026-04-25 · Author: Aaron C. Norris</div>
      </div>

      <!-- TITLE -->
      <h1 class="page-title">
        <span>Estate Acquisition Negotiation Plan</span>
        4505 Buttewoods — 7,098 Sq Ft Estate
      </h1>
      <p class="page-subtitle">
        This working document captures the negotiation strategy, due-diligence list, valuation positioning, and execution timeline for the
        proposed acquisition of the 4505 Buttewoods estate. It is built to drive a disciplined process from first offer through closing — with
        every decision documented in writing, every concession traded, and a defined walk-away point that protects both Aaron's family and
        Norris Utilities®.
      </p>

      <!-- PROPERTY HERO -->
      <div class="property-hero">
        <div class="property-visual">
          <div class="property-visual-content">
            <div class="property-label">Subject Property</div>
            <div class="property-address">4505 Buttewoods</div>
            <div class="property-locality">Birmingham metro · Single-family estate</div>

            <div class="property-stats">
              <div class="property-stat">
                <div class="stat-num">7,098</div>
                <div class="stat-label">Heated Sq Ft</div>
              </div>
              <div class="property-stat">
                <div class="stat-num">1</div>
                <div class="stat-label">Negotiation Track</div>
              </div>
              <div class="property-stat">
                <div class="stat-num">30 Days</div>
                <div class="stat-label">Target to Contract</div>
              </div>
              <div class="property-stat">
                <div class="stat-num">All Cash / Conv.</div>
                <div class="stat-label">Financing Stance</div>
              </div>
            </div>
          </div>
        </div>
        <div class="property-summary">
          <div>
            <div class="summary-headline">Establish position, control pace, leverage facts. Win the property at the right price — or walk
              away cleanly.</div>
            <div class="summary-row"><span class="lbl">Property Address</span><span class="val">4505 Buttewoods</span></div>
            <div class="summary-row"><span class="lbl">Square Footage</span><span class="val">7,098 sq ft</span></div>
            <div class="summary-row"><span class="lbl">Buyer</span><span class="val">Aaron C. Norris (personal)</span></div>
            <div class="summary-row"><span class="lbl">Engagement Stage</span><span class="val"><span class="status-pill">Pre-Offer · Strategy</span></span></div>
            <div class="summary-row"><span class="lbl">Decision Deadline</span><span class="val">2026-05-25 (30 days)</span></div>
            <div class="summary-row"><span class="lbl">Document Status</span><span class="val">Active · v1.0</span></div>
          </div>
        </div>
      </div>

      <!-- SECTION 1 — OBJECTIVES -->
      <section>
        <div class="section-heading">
          <span class="section-num">1</span>
          <h2><span>Strategic</span> <span>Objectives</span></h2>
        </div>
        <div class="objectives-grid">
          <div class="objective-card">
            <div class="obj-num">Objective 01</div>
            <h3>Acquire at Defensible Basis</h3>
            <p>Close at a price-per-square-foot that holds up against the most recent three comparable Birmingham metro estate sales — protecting
              future resale and ensuring the home is an asset, not a liability.</p>
          </div>
          <div class="objective-card alt">
            <div class="obj-num">Objective 02</div>
            <h3>Control the Pace</h3>
            <p>Run the negotiation on Aaron's timeline. No emotional anchoring, no verbal commitments before written terms, no concessions
              given without something traded back.</p>
          </div>
          <div class="objective-card">
            <div class="obj-num">Objective 03</div>
            <h3>Protect Operating Capital</h3>
            <p>Structure financing so that the acquisition does not constrain Norris Utilities® inventory positions, FlexPro Armor production
              cash, or the Skylift / Bay Shore pipeline through 2026.</p>
          </div>
          <div class="objective-card alt">
            <div class="obj-num">Objective 04</div>
            <h3>Engineer Clean Diligence</h3>
            <p>Lead with a tight, specific inspection and financial-review checklist so any seller-side defects are surfaced before earnest money
              becomes non-refundable.</p>
          </div>
          <div class="objective-card">
            <div class="obj-num">Objective 05</div>
            <h3>Walk-Away Discipline</h3>
            <p>A pre-defined ceiling and walk-away script removes the risk of closing on emotion. If terms breach the ceiling, Aaron walks — and
              the document below is what he points to.</p>
          </div>
          <div class="objective-card alt">
            <div class="obj-num">Objective 06</div>
            <h3>Family Alignment</h3>
            <p>Confirm full alignment with Aaron's wife, attorney, and CPA before the offer is submitted. No surprises post-contract.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 2 — VALUATION POSITIONING -->
      <section>
        <div class="section-heading">
          <span class="section-num">2</span>
          <h2><span>Valuation</span> <span>Positioning &amp; Anchors</span></h2>
        </div>
        <div class="position-grid">
          <div class="position-card opening">
            <div class="pos-label">Opening Offer</div>
            <div class="pos-amount">~88% of Ask</div>
            <div class="pos-psf">Justified by 3-comp PSF analysis</div>
            <div class="pos-rationale">First written offer is anchored to the lowest defensible price-per-square-foot drawn from three recent
              comparable estates. Submitted in writing with a 72-hour acceptance window and inspection contingency.</div>
          </div>
          <div class="position-card target">
            <div class="pos-label">Target Close</div>
            <div class="pos-amount">~92–94% of Ask</div>
            <div class="pos-psf">Final negotiated PSF inside comp range</div>
            <div class="pos-rationale">The realistic landing zone after one or two trade rounds. Aaron concedes price only in exchange for
              seller-paid items: closing costs, repairs identified in inspection, retained personal-property fixtures, or extended due-diligence
              window.</div>
          </div>
          <div class="position-card walkaway">
            <div class="pos-label">Walk-Away Ceiling</div>
            <div class="pos-amount">List Price</div>
            <div class="pos-psf">Above ceiling = no deal</div>
            <div class="pos-rationale">Above this number the math no longer works against comps and against Aaron's capital plan. If the seller
              will not move below, Aaron disengages politely, in writing, and keeps the file open for re-engagement in 60-90 days.</div>
          </div>
        </div>
        <div class="callout">
          <h4>Anchor Discipline</h4>
          <p>Every dollar conceded must be matched by a dollar pulled back from the seller. Closing costs, appliance retention, repair credits,
            extended diligence, and post-closing occupancy are all currency. Price is not the only lever — and it is rarely the cheapest.</p>
          <p>If the seller holds firm on price, do not raise the offer without first extracting a concession of equivalent value elsewhere in
            the contract.</p>
        </div>
      </section>

      <!-- SECTION 3 — DUE DILIGENCE -->
      <section>
        <div class="section-heading">
          <span class="section-num">3</span>
          <h2><span>Due</span> <span>Diligence Checklist</span></h2>
        </div>
        <table class="dd-table">
          <thead>
            <tr>
              <th style="width: 28%;">Item</th>
              <th style="width: 16%;">Priority</th>
              <th>Detail / Acceptance Criterion</th>
              <th style="width: 14%;">Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="item-name">Title Search &amp; Survey</td>
              <td><span class="priority critical">Critical</span></td>
              <td>Pull current title, confirm no liens, easements, encroachments, or boundary disputes. Order updated survey.</td>
              <td>Closing Attorney</td>
            </tr>
            <tr>
              <td class="item-name">Whole-Home Inspection</td>
              <td><span class="priority critical">Critical</span></td>
              <td>Licensed inspector with estate-home experience. Specific scope: foundation, roof, HVAC (every unit), electrical panels, plumbing
                supply lines, attic moisture.</td>
              <td>Aaron</td>
            </tr>
            <tr>
              <td class="item-name">Roof Certification</td>
              <td><span class="priority high">High</span></td>
              <td>Independent roof-only inspection with remaining-life estimate in writing. Estate-size roofs are six-figure replacements.</td>
              <td>Aaron</td>
            </tr>
            <tr>
              <td class="item-name">HVAC Inventory &amp; Age Audit</td>
              <td><span class="priority high">High</span></td>
              <td>Document every unit: tonnage, install date, last service, refrigerant type. 7,098 sq ft typically runs 4–6 systems.</td>
              <td>Aaron</td>
            </tr>
            <tr>
              <td class="item-name">Foundation &amp; Drainage</td>
              <td><span class="priority critical">Critical</span></td>
              <td>Structural engineer assessment if any cracking, settling, or water intrusion is observed. Birmingham clay soils warrant
                independent review.</td>
              <td>Structural Engineer</td>
            </tr>
            <tr>
              <td class="item-name">Termite / WDI Letter</td>
              <td><span class="priority high">High</span></td>
              <td>Current Wood-Destroying Insect letter and active treatment bond. Required for most lenders regardless.</td>
              <td>Aaron</td>
            </tr>
            <tr>
              <td class="item-name">Property Tax History (5 yrs)</td>
              <td><span class="priority standard">Standard</span></td>
              <td>Confirm assessed value, millage, exemptions. Project forward post-sale to forecast carry cost.</td>
              <td>CPA</td>
            </tr>
            <tr>
              <td class="item-name">Insurance Quote (HO-3 / HO-5)</td>
              <td><span class="priority high">High</span></td>
              <td>Estate-class quote with replacement cost on dwelling, liability, umbrella tie-in. Two independent carriers minimum.</td>
              <td>Aaron / Insurance Broker</td>
            </tr>
            <tr>
              <td class="item-name">HOA / Covenants Review</td>
              <td><span class="priority standard">Standard</span></td>
              <td>Pull all CC&amp;Rs, dues, special assessments, architectural review board procedures.</td>
              <td>Closing Attorney</td>
            </tr>
            <tr>
              <td class="item-name">Utility Cost History (12 mo)</td>
              <td><span class="priority standard">Standard</span></td>
              <td>Request 12 months of electric, gas, water, sewer. True carry cost on a 7,098 sq ft home is often double a buyer's first guess.</td>
              <td>Aaron</td>
            </tr>
            <tr>
              <td class="item-name">Appliance &amp; Fixture Schedule</td>
              <td><span class="priority standard">Standard</span></td>
              <td>Itemize every appliance, chandelier, mounted TV, drapery, and built-in. List exactly what conveys in writing.</td>
              <td>Aaron</td>
            </tr>
            <tr>
              <td class="item-name">Comparable Sales (3-Comp)</td>
              <td><span class="priority critical">Critical</span></td>
              <td>Three closed sales within 12 months, within 15% sq ft, same submarket. The PSF range becomes the entire negotiation anchor.</td>
              <td>Aaron / Buyer's Agent</td>
            </tr>
            <tr>
              <td class="item-name">Seller Disclosure Form</td>
              <td><span class="priority critical">Critical</span></td>
              <td>Signed seller disclosure addressing every known defect, repair, and prior insurance claim. Cross-check against inspection.</td>
              <td>Aaron / Buyer's Agent</td>
            </tr>
            <tr>
              <td class="item-name">CPA Capital &amp; Tax Review</td>
              <td><span class="priority critical">Critical</span></td>
              <td>Confirm cash sourcing, document mortgage interest deduction posture, model property tax impact for tax year 2026 and 2027.</td>
              <td>CPA</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION 4 — TIMELINE -->
      <section>
        <div class="section-heading">
          <span class="section-num">4</span>
          <h2><span>Negotiation</span> <span>Timeline (Target Cadence)</span></h2>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="tl-when">Day 0 · 2026-04-25</div>
            <div class="tl-title">Strategy Locked &amp; Family Aligned</div>
            <div class="tl-detail">This document approved. Wife, CPA, and closing attorney briefed. Pre-approval letter or proof of funds prepared.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-when">Day 1–3</div>
            <div class="tl-title">Comp Pull &amp; Drive-By</div>
            <div class="tl-detail">Buyer's agent assembles 3-comp PSF analysis. Aaron drives the property and immediate area at two different
              times of day. Photograph any deferred maintenance visible from the street.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-when">Day 4–6</div>
            <div class="tl-title">Opening Offer Submitted (Written)</div>
            <div class="tl-detail">Written offer at the opening number with: 72-hour acceptance window, 14-day inspection contingency, 30-day
              close, financing contingency if applicable, retention of named fixtures.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-when">Day 7–10</div>
            <div class="tl-title">Counter / Trade Round 1</div>
            <div class="tl-detail">Expected counter from seller. Aaron concedes only in exchange for traded value. No verbal "yes" — every move
              goes in writing through the agent.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-when">Day 11–14</div>
            <div class="tl-title">Contract Executed or Walk</div>
            <div class="tl-detail">Either landed inside the target zone with concessions traded, or the walk-away letter goes out and the file
              closes for 60 days.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-when">Day 15–28</div>
            <div class="tl-title">Diligence Period</div>
            <div class="tl-detail">All inspections, surveys, structural review, and disclosures complete. Repair credits or price reductions
              negotiated in writing before earnest money becomes hard.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-when">Day 29–30</div>
            <div class="tl-title">Diligence Decision Point</div>
            <div class="tl-detail">Either: (a) all items resolved, proceed to clear-to-close; (b) outstanding items material — renegotiate or
              terminate per contract.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-when">Day 45–60</div>
            <div class="tl-title">Closing &amp; Funding</div>
            <div class="tl-detail">Wire instructions verified by phone with closing attorney directly. Signed at attorney's office. Keys and
              fixture inventory exchanged in person.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 5 — ACTION ITEMS -->
      <section>
        <div class="section-heading">
          <span class="section-num">5</span>
          <h2><span>Immediate</span> <span>Action Items</span></h2>
        </div>
        <div class="action-list">
          <div class="nu-badge">
            <span class="badge-num">1</span>
            <span class="badge-task">Brief wife in full — strategy, walk-away ceiling, timeline. No offer goes out without her sign-off.</span>
            <span class="badge-owner">Owner: Aaron</span>
          </div>
          <div class="nu-badge">
            <span class="badge-num">2</span>
            <span class="badge-task">Engage closing attorney; confirm conflicts cleared and engagement letter executed.</span>
            <span class="badge-owner">Owner: Aaron</span>
          </div>
          <div class="nu-badge">
            <span class="badge-num">3</span>
            <span class="badge-task">CPA review — document cash sourcing, model tax-year impact, confirm operating-capital firewall is intact.</span>
            <span class="badge-owner">Owner: Aaron / CPA</span>
          </div>
          <div class="nu-badge">
            <span class="badge-num">4</span>
            <span class="badge-task">Buyer's agent pulls 3-comp PSF analysis and submits written valuation memo within 72 hours.</span>
            <span class="badge-owner">Owner: Buyer's Agent</span>
          </div>
          <div class="nu-badge">
            <span class="badge-num">5</span>
            <span class="badge-task">Schedule whole-home inspection, structural engineer, and roof-only inspector; hold dates for diligence window.</span>
            <span class="badge-owner">Owner: Aaron</span>
          </div>
          <div class="nu-badge">
            <span class="badge-num">6</span>
            <span class="badge-task">Pre-approval letter or proof of funds prepared and held — release only with written offer.</span>
            <span class="badge-owner">Owner: Aaron</span>
          </div>
          <div class="nu-badge">
            <span class="badge-num">7</span>
            <span class="badge-task">Draft walk-away letter in advance so it is ready to send the moment the ceiling is breached.</span>
            <span class="badge-owner">Owner: Aaron</span>
          </div>
        </div>
      </section>

      <!-- SECTION 6 — RISKS -->
      <section>
        <div class="section-heading">
          <span class="section-num">6</span>
          <h2><span>Risks</span> <span>&amp; Mitigations</span></h2>
        </div>
        <div class="risk-grid">
          <div class="risk-card">
            <div class="risk-header">
              <span class="risk-flag red"></span>
              <h4>Emotional Anchoring</h4>
            </div>
            <p>The estate is large, polished, and easy to fall in love with. Emotional buyers overpay. The walk-away ceiling exists for this
              reason.</p>
            <div class="mitigation"><strong>Mitigation</strong>This document is the source of truth. Every counter is checked against it, not
              against feeling.</div>
          </div>
          <div class="risk-card">
            <div class="risk-header">
              <span class="risk-flag amber"></span>
              <h4>Hidden Capex on a 7,098 Sq Ft Home</h4>
            </div>
            <p>Estate homes carry estate-size roofs, HVAC banks, and irrigation systems. A $40K–$80K surprise in year one is real if diligence is
              shallow.</p>
            <div class="mitigation"><strong>Mitigation</strong>Specialized roof and structural inspections in addition to the general inspection.
              Bid out anything the inspector flags.</div>
          </div>
          <div class="risk-card">
            <div class="risk-header">
              <span class="risk-flag red"></span>
              <h4>Operating-Capital Bleed</h4>
            </div>
            <p>Inventory builds for FlexPro Armor, Samson Rope, and Skylift PO commitments through 2026 must not be starved by personal real
              estate.</p>
            <div class="mitigation"><strong>Mitigation</strong>CPA-modeled separation of personal and business cash. No cross-collateralization
              with any business asset.</div>
          </div>
          <div class="risk-card">
            <div class="risk-header">
              <span class="risk-flag amber"></span>
              <h4>Title or Easement Surprise</h4>
            </div>
            <p>Older estate parcels frequently carry easements, encroachments, or boundary issues that surface only during survey.</p>
            <div class="mitigation"><strong>Mitigation</strong>Updated survey and title commitment ordered Day 1 of diligence. Owner's title
              policy mandatory at closing.</div>
          </div>
          <div class="risk-card">
            <div class="risk-header">
              <span class="risk-flag amber"></span>
              <h4>Seller Slow-Walks Disclosures</h4>
            </div>
            <p>If the seller delays the disclosure form or stonewalls inspection access, that is itself a signal — and a contractual basis to
              extend or terminate.</p>
            <div class="mitigation"><strong>Mitigation</strong>All deadlines defined in writing in the contract. Missed seller deadlines extend
              Aaron's diligence period accordingly.</div>
          </div>
          <div class="risk-card">
            <div class="risk-header">
              <span class="risk-flag green"></span>
              <h4>Walk-Away Reputation Cost</h4>
            </div>
            <p>Concern that walking damages the relationship with the buyer's agent or seller's network.</p>
            <div class="mitigation"><strong>Mitigation</strong>Walking on principle, in writing, and respectfully is normal in estate
              transactions. Re-engagement after 60–90 days is a standard pattern.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 7 — CONTACTS -->
      <section>
        <div class="section-heading">
          <span class="section-num">7</span>
          <h2><span>Internal</span> <span>Stakeholders &amp; Advisors</span></h2>
        </div>
        <div class="contacts-grid">
          <div class="contact-card">
            <div class="role">Buyer / Decision Maker</div>
            <div class="who">Aaron C. Norris</div>
            <div class="desc">Founder &amp; CEO, Norris Utilities®. Sole signing authority on this transaction. Reachable at 205-500-1343 / acnorris@norrisutilities.com.</div>
          </div>
          <div class="contact-card">
            <div class="role">Family Alignment</div>
            <div class="who">Aaron's Wife</div>
            <div class="desc">Co-decision maker on family residence. Must approve walk-away ceiling and final terms before any signed offer.</div>
          </div>
          <div class="contact-card">
            <div class="role">Closing Attorney</div>
            <div class="who">Birmingham Real-Estate Counsel</div>
            <div class="desc">Title work, contract review, walk-away letter draft, wire-instruction verification, closing.</div>
          </div>
          <div class="contact-card">
            <div class="role">CPA</div>
            <div class="who">Norris Utilities® CPA</div>
            <div class="desc">Cash sourcing memo, mortgage-interest posture, property-tax model, separation of business and personal capital.</div>
          </div>
          <div class="contact-card">
            <div class="role">Buyer's Agent</div>
            <div class="who">Licensed Buyer's Representative</div>
            <div class="desc">3-comp PSF analysis, written-offer logistics, communication with seller's agent, ensures all moves are in writing.</div>
          </div>
          <div class="contact-card">
            <div class="role">Inspection Bench</div>
            <div class="who">Whole-Home + Roof + Structural</div>
            <div class="desc">Three independent inspectors. No single inspector clears an estate-size purchase. Each report becomes negotiation
              currency.</div>
          </div>
        </div>
      </section>

      <!-- FINAL CALLOUT -->
      <div class="callout" style="margin-top: 8px;">
        <h4>Decision Discipline</h4>
        <p>This is a personal acquisition, not a business deal — but the same rules apply: define the math first, document the strategy in
          writing, never concede without trading, and always have the walk-away letter drafted before the first offer goes out.</p>
        <p>Aaron's competitive edge in 30 years of utility-equipment transactions has always been the same: a calm, written, time-disciplined
          process. That edge is what wins this house at the right number — or correctly walks Aaron away from the wrong one.</p>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong> · Founder &amp; CEO · Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      130 Inverness Plaza #210 · Birmingham, Alabama 35242
    </div>
    <div class="nu-footer-meta">
      Confidential Working Document · 4505 Buttewoods Acquisition Strategy · Prepared 2026-04-25 · Norris Utilities®, LLC · A Legacy of Commitment®
    </div>
  </footer>

</body>
</html>