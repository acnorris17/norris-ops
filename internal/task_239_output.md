<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estate Negotiation Playbook — 4505 Buttewoods — Norris Utilities®</title>
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
  --nu-red: #C9302C;
  --nu-green: #2E7D32;
  --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-tagline: 'Playfair Display', Georgia, serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { font-size: 16px; scroll-behavior: smooth; }
body {
  font-family: var(--font-primary);
  color: var(--nu-body-text);
  background: var(--nu-white);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

/* ══ HEADER ══ */
.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, #06D0FF 100%);
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
    repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
.nu-header > * { position: relative; z-index: 2; }

.nu-phoenix-icon {
  width: 80px; height: 80px;
  margin: 0 auto 16px;
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
}
.nu-logo-text {
  font-weight: 900;
  font-size: 3rem;
  color: var(--nu-white);
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.nu-logo-subtitle {
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--nu-white);
  letter-spacing: 0.7em;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.nu-tagline {
  font-family: var(--font-tagline);
  font-style: italic;
  font-weight: 400;
  font-size: 1.3rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.03em;
}
.nu-page-label {
  margin-top: 28px;
  display: inline-block;
  padding: 8px 22px;
  background: rgba(0,0,0,0.28);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 3px;
  color: var(--nu-white);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

/* ══ WHITE CHEVRON ══ */
.nu-chevron {
  position: relative;
  height: 50px;
  margin-top: -50px;
  z-index: 10;
}
.nu-chevron svg { width: 100%; height: 50px; display: block; }

/* ══ CONTENT AREA ══ */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
  overflow: hidden;
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 400px; left: 50%;
  transform: translateX(-50%);
  width: 65%; height: 800px;
  background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 65%);
  opacity: 0.7;
  z-index: 0;
  pointer-events: none;
}
.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 60px 40px;
  position: relative;
  z-index: 1;
}

/* ══ TITLE BLOCK ══ */
.title-block {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 40px;
  border-bottom: 3px solid var(--nu-medium-gray);
}
.title-block h1 {
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-dark-text);
  margin-bottom: 12px;
  line-height: 1.15;
}
.title-block h1 .accent {
  color: var(--nu-blue);
}
.title-block .subtitle {
  font-weight: 400;
  font-size: 1.1rem;
  color: var(--nu-body-text);
  max-width: 720px;
  margin: 0 auto;
}
.title-block .meta-row {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: #555;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 700;
}
.title-block .meta-row span {
  padding: 6px 14px;
  background: var(--nu-light-gray);
  border-left: 3px solid var(--nu-cyan);
}

/* ══ PROPERTY SUMMARY BAR ══ */
.property-bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 2px;
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  margin-bottom: 50px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0,0,51,0.18);
}
.property-bar-cell {
  padding: 24px 20px;
  text-align: center;
  color: var(--nu-white);
  background: linear-gradient(135deg, rgba(0,0,102,0.6) 0%, rgba(0,0,51,0.9) 100%);
}
.property-bar-cell .label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--nu-cyan);
  margin-bottom: 8px;
}
.property-bar-cell .value {
  font-size: 1.35rem;
  font-weight: 900;
  color: var(--nu-white);
  line-height: 1.2;
}
.property-bar-cell .value small {
  display: block;
  font-size: 0.7rem;
  font-weight: 400;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.05em;
  margin-top: 4px;
}

/* ══ SECTION HEADERS ══ */
.section {
  margin-bottom: 60px;
}
.section-title {
  font-weight: 900;
  font-size: 1.65rem;
  margin-bottom: 8px;
  line-height: 1.2;
}
.section-title .first-word { color: var(--nu-blue); }
.section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
.section-subtitle {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--nu-medium-gray);
}

/* ══ PHASE CARDS ══ */
.phase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.phase-card {
  background: var(--nu-white);
  border-radius: 10px;
  padding: 26px 24px;
  box-shadow: 0 2px 14px rgba(0,0,0,0.07);
  border: 1px solid var(--nu-medium-gray);
  border-top: 5px solid var(--nu-blue);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
}
.phase-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.11);
}
.phase-card .phase-num {
  position: absolute;
  top: -16px; right: 20px;
  background: var(--nu-blue);
  color: var(--nu-white);
  width: 36px; height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 0.95rem;
  box-shadow: 0 3px 10px rgba(0,0,255,0.35);
}
.phase-card h3 {
  font-weight: 900;
  font-size: 1.1rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.phase-card .duration {
  font-size: 0.78rem;
  color: var(--nu-blue);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.phase-card ul {
  list-style: none;
  padding: 0;
}
.phase-card ul li {
  padding: 8px 0 8px 22px;
  position: relative;
  font-size: 0.92rem;
  line-height: 1.5;
  border-bottom: 1px dashed #eee;
}
.phase-card ul li:last-child { border-bottom: none; }
.phase-card ul li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--nu-cyan);
  font-weight: 900;
}

/* ══ PILLARS — negotiation strategy ══ */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}
.pillar {
  padding: 26px;
  background: linear-gradient(135deg, var(--nu-light-gray) 0%, #FAFAFA 100%);
  border-radius: 10px;
  border-left: 5px solid var(--nu-cyan);
}
.pillar .icon-box {
  width: 48px; height: 48px;
  background: var(--nu-blue);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--nu-white);
  font-weight: 900;
  font-size: 1.3rem;
  margin-bottom: 14px;
  box-shadow: 0 3px 10px rgba(0,0,255,0.25);
}
.pillar h4 {
  font-weight: 900;
  color: var(--nu-dark-text);
  font-size: 1.05rem;
  margin-bottom: 8px;
}
.pillar p {
  font-size: 0.9rem;
  color: var(--nu-body-text);
  line-height: 1.55;
}

/* ══ CHECKLIST ══ */
.checklist {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}
.checklist-header {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
  color: var(--nu-white);
  padding: 16px 24px;
  font-weight: 900;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checklist-header .count {
  background: rgba(255,255,255,0.18);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
}
.checklist-item {
  padding: 14px 24px;
  display: grid;
  grid-template-columns: 32px 1fr auto;
  gap: 16px;
  align-items: center;
  border-bottom: 1px solid var(--nu-medium-gray);
  transition: background 0.15s ease;
}
.checklist-item:last-child { border-bottom: none; }
.checklist-item:hover { background: var(--nu-light-gray); }
.check-box {
  width: 22px; height: 22px;
  border: 2px solid var(--nu-blue);
  border-radius: 4px;
  display: inline-block;
}
.checklist-item .task-text {
  font-size: 0.95rem;
  color: var(--nu-dark-text);
  line-height: 1.45;
}
.checklist-item .task-text strong {
  color: var(--nu-blue);
  font-weight: 900;
}
.checklist-item .pill {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 3px;
  white-space: nowrap;
}
.pill.critical { background: #FFF0ED; color: var(--nu-red); border: 1px solid #F5C6C0; }
.pill.high { background: #FFF8E4; color: #946200; border: 1px solid #F7E09E; }
.pill.normal { background: #E8F4FF; color: var(--nu-blue); border: 1px solid #B8D9F7; }
.pill.done { background: #E8F5E9; color: var(--nu-green); border: 1px solid #B3E0B7; }

/* ══ Q&A BLOCK ══ */
.qa-block {
  background: var(--nu-white);
  border-radius: 10px;
  padding: 28px 30px;
  border: 1px solid var(--nu-medium-gray);
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.qa-item {
  padding: 16px 0;
  border-bottom: 1px dashed var(--nu-medium-gray);
}
.qa-item:last-child { border-bottom: none; padding-bottom: 0; }
.qa-item:first-child { padding-top: 0; }
.qa-item .q {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 0.95rem;
  margin-bottom: 6px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.qa-item .q::before {
  content: 'Q';
  background: var(--nu-blue);
  color: var(--nu-white);
  width: 22px; height: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 900;
  flex-shrink: 0;
}
.qa-item .rationale {
  font-size: 0.85rem;
  color: #666;
  padding-left: 32px;
  line-height: 1.55;
  font-style: italic;
}

/* ══ LEVERAGE TABLE ══ */
.leverage-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}
.leverage-table thead tr {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
}
.leverage-table thead th {
  color: var(--nu-white);
  padding: 14px 18px;
  text-align: left;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 900;
}
.leverage-table tbody td {
  padding: 16px 18px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.92rem;
  vertical-align: top;
  line-height: 1.5;
}
.leverage-table tbody tr:last-child td { border-bottom: none; }
.leverage-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
.leverage-table .lev-label {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 0.88rem;
}
.leverage-table .impact-high { color: var(--nu-red); font-weight: 700; }
.leverage-table .impact-med { color: #946200; font-weight: 700; }
.leverage-table .impact-low { color: var(--nu-green); font-weight: 700; }

/* ══ NUMBERS FRAMEWORK ══ */
.numbers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
.number-card {
  background: var(--nu-white);
  border: 2px solid var(--nu-medium-gray);
  border-radius: 10px;
  padding: 22px;
  text-align: center;
  transition: border-color 0.2s ease;
}
.number-card.blue { border-color: var(--nu-blue); }
.number-card.cyan { border-color: var(--nu-cyan); }
.number-card.navy { border-color: var(--nu-navy); }
.number-card .label {
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 10px;
}
.number-card .formula {
  font-weight: 900;
  font-size: 1rem;
  color: var(--nu-dark-text);
  line-height: 1.4;
  margin-bottom: 8px;
}
.number-card .note {
  font-size: 0.8rem;
  color: #777;
  font-style: italic;
}

/* ══ ALERT BOX ══ */
.alert-box {
  background: linear-gradient(135deg, #FFF8E4 0%, #FFFDF0 100%);
  border-left: 5px solid var(--nu-accent-gold);
  padding: 20px 26px;
  border-radius: 0 8px 8px 0;
  margin: 30px 0;
}
.alert-box .alert-title {
  font-weight: 900;
  color: #8B6914;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.alert-box p {
  font-size: 0.95rem;
  color: #5A4A1D;
  line-height: 1.6;
}

/* ══ NEXT ACTION PANEL ══ */
.next-action {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 50%, var(--nu-cyan) 100%);
  color: var(--nu-white);
  padding: 36px 40px;
  border-radius: 12px;
  margin-top: 40px;
  box-shadow: 0 8px 28px rgba(0,0,255,0.22);
}
.next-action .eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
  font-weight: 700;
  margin-bottom: 8px;
}
.next-action h3 {
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 14px;
}
.next-action p {
  font-size: 0.98rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.95);
  max-width: 820px;
}
.next-action .action-row {
  margin-top: 22px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.next-action .action-btn {
  background: var(--nu-white);
  color: var(--nu-blue);
  padding: 12px 26px;
  border-radius: 4px;
  font-weight: 900;
  font-size: 0.88rem;
  letter-spacing: 0.05em;
  text-decoration: none;
  display: inline-block;
}
.next-action .action-btn.ghost {
  background: transparent;
  color: var(--nu-white);
  border: 2px solid var(--nu-white);
}

/* ══ FOOTER ══ */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 50px 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: var(--font-tagline);
  font-style: italic;
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--nu-cyan);
  margin-bottom: 16px;
  letter-spacing: 0.02em;
}
.nu-footer-contact {
  font-size: 0.92rem;
  line-height: 1.9;
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
  font-weight: 700;
}
.nu-footer-contact a:hover { text-decoration: underline; }
.nu-footer-divider {
  width: 80px;
  height: 2px;
  background: var(--nu-cyan);
  margin: 20px auto;
  opacity: 0.5;
}
.nu-footer-meta {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 10px;
}

/* ══ RESPONSIVE ══ */
@media (max-width: 768px) {
  .nu-header { padding: 40px 20px 60px; min-height: 240px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
  .nu-tagline { font-size: 1.05rem; }
  .container { padding: 40px 20px; }
  .title-block h1 { font-size: 1.7rem; }
  .section-title { font-size: 1.3rem; }
  .property-bar { grid-template-columns: repeat(2, 1fr); }
  .checklist-item { grid-template-columns: 24px 1fr; }
  .checklist-item .pill { grid-column: 2; justify-self: start; margin-top: 4px; }
  .next-action { padding: 26px 22px; }
  .leverage-table thead { display: none; }
  .leverage-table tbody td { display: block; border-bottom: none; padding: 6px 18px; }
  .leverage-table tbody tr {
    display: block;
    border-bottom: 2px solid var(--nu-medium-gray);
    padding: 12px 0;
  }
}

@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .phase-card, .pillar, .checklist, .qa-block, .leverage-table { box-shadow: none; }
  .next-action { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
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
  <div class="nu-page-label">Executive Negotiation Playbook</div>
</header>

<!-- CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<!-- MAIN CONTENT -->
<main class="nu-content-area">
  <div class="container">

    <!-- TITLE BLOCK -->
    <div class="title-block">
      <h1><span class="accent">Estate</span> Acquisition Negotiation Playbook</h1>
      <div class="subtitle">A structured framework for negotiating the purchase of the 7,098 sq ft estate at 4505 Buttewoods — disciplined approach, leverage mapped, walk-away boundaries defined.</div>
      <div class="meta-row">
        <span>Property: 4505 Buttewoods</span>
        <span>Size: 7,098 sq ft</span>
        <span>Owner: Aaron C. Norris</span>
        <span>Status: Pre-Offer</span>
      </div>
    </div>

    <!-- PROPERTY SUMMARY BAR -->
    <div class="property-bar">
      <div class="property-bar-cell">
        <div class="label">Address</div>
        <div class="value">4505 Buttewoods<small>Subject Property</small></div>
      </div>
      <div class="property-bar-cell">
        <div class="label">Interior SF</div>
        <div class="value">7,098<small>Heated &amp; Cooled</small></div>
      </div>
      <div class="property-bar-cell">
        <div class="label">Classification</div>
        <div class="value">Estate<small>Luxury Residential</small></div>
      </div>
      <div class="property-bar-cell">
        <div class="label">Phase</div>
        <div class="value">Pre-Offer<small>Diligence &amp; Leverage</small></div>
      </div>
      <div class="property-bar-cell">
        <div class="label">Financing</div>
        <div class="value">Renasant<small>Patrick Lavette</small></div>
      </div>
      <div class="property-bar-cell">
        <div class="label">Walk-Away</div>
        <div class="value">Defined<small>See Section 6</small></div>
      </div>
    </div>

    <!-- SECTION 1 — STRATEGIC OBJECTIVE -->
    <div class="section">
      <h2 class="section-title"><span class="first-word">Strategic</span> <span class="rest">Objective</span></h2>
      <div class="section-subtitle">Why we are buying this property — and the specific terms that define success.</div>

      <div class="pillars-grid">
        <div class="pillar">
          <div class="icon-box">1</div>
          <h4>Acquire Below Ask</h4>
          <p>Every dollar under asking is a dollar earned. Target is a final price that reflects a market-validated number — not the seller&rsquo;s opening anchor. Success = measurable basis-point discount vs. last list.</p>
        </div>
        <div class="pillar">
          <div class="icon-box">2</div>
          <h4>Protect the Balance Sheet</h4>
          <p>This purchase must not constrain working capital for Norris Utilities® inventory positions — FlexPro Armor, Samson Rope, Skylift PO&rsquo;s. Structure preserves business liquidity.</p>
        </div>
        <div class="pillar">
          <div class="icon-box">3</div>
          <h4>Close Clean</h4>
          <p>No contingencies that leak leverage back to the seller. Clear title, clean inspection outcomes, fixed closing date. A clean close is often worth more to a seller than an extra 1&ndash;2% on price.</p>
        </div>
        <div class="pillar">
          <div class="icon-box">4</div>
          <h4>Walk Away if Needed</h4>
          <p>The best negotiation leverage is a demonstrated willingness to walk. Identify ceiling number before first offer. Do not raise it in the heat of counter-exchange.</p>
        </div>
      </div>
    </div>

    <!-- SECTION 2 — FIVE PHASE TIMELINE -->
    <div class="section">
      <h2 class="section-title"><span class="first-word">Five-Phase</span> <span class="rest">Negotiation Timeline</span></h2>
      <div class="section-subtitle">Each phase has specific deliverables. Do not advance to the next phase until this phase&rsquo;s gates are cleared.</div>

      <div class="phase-grid">
        <div class="phase-card">
          <div class="phase-num">1</div>
          <h3>Intelligence Gathering</h3>
          <div class="duration">Week 1</div>
          <ul>
            <li>Pull tax records, deed history, lien status</li>
            <li>Identify seller motivation (life event, job move, estate)</li>
            <li>Confirm days-on-market &amp; price history</li>
            <li>Order independent appraisal prep</li>
            <li>Pull 3 hard comps within 0.5 mi, same SF band</li>
          </ul>
        </div>
        <div class="phase-card">
          <div class="phase-num">2</div>
          <h3>Financing Lock-In</h3>
          <div class="duration">Week 1&ndash;2</div>
          <ul>
            <li>Meet Patrick Lavette at Renasant Bank</li>
            <li>Pre-approval letter at target offer number</li>
            <li>Confirm rate lock window vs. closing date</li>
            <li>Map cash-to-close against business obligations</li>
            <li>Do NOT over-disclose ceiling to seller agent</li>
          </ul>
        </div>
        <div class="phase-card">
          <div class="phase-num">3</div>
          <h3>Opening Offer</h3>
          <div class="duration">Week 2</div>
          <ul>
            <li>Written offer with tight contingency list</li>
            <li>Earnest money sized to show conviction</li>
            <li>Closing date favorable to seller (leverage)</li>
            <li>30-day inspection window — hold as leverage</li>
            <li>Expiration on offer: 48&ndash;72 hours</li>
          </ul>
        </div>
        <div class="phase-card">
          <div class="phase-num">4</div>
          <h3>Counter &amp; Inspection</h3>
          <div class="duration">Week 3&ndash;5</div>
          <ul>
            <li>Expect 1&ndash;3 counter rounds — budget patience</li>
            <li>Move slow on price, fast on terms</li>
            <li>Full inspection: structural, HVAC, roof, foundation</li>
            <li>Use inspection findings to re-open price</li>
            <li>Hold walk-away line firmly</li>
          </ul>
        </div>
        <div class="phase-card">
          <div class="phase-num">5</div>
          <h3>Close &amp; Fund</h3>
          <div class="duration">Week 5&ndash;8</div>
          <ul>
            <li>Title commitment clean &mdash; no surprises</li>
            <li>Final walkthrough 24 hrs before funding</li>
            <li>Wire funds only to verified title company</li>
            <li>Verify seller disclosures match inspection</li>
            <li>Confirm occupancy date &amp; key transfer</li>
          </ul>
        </div>
        <div class="phase-card">
          <div class="phase-num">6</div>
          <h3>Post-Close Integration</h3>
          <div class="duration">Week 8+</div>
          <ul>
            <li>Update insurance &amp; property tax records</li>
            <li>Change locks, alarm codes, utility accounts</li>
            <li>Engage contractors for any deferred items</li>
            <li>File homestead exemption if applicable</li>
            <li>Archive closing docs to secure storage</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- SECTION 3 — KEY QUESTIONS -->
    <div class="section">
      <h2 class="section-title"><span class="first-word">Intelligence</span> <span class="rest">Questions to Answer Before First Offer</span></h2>
      <div class="section-subtitle">Every answer sharpens the offer. Missing answers mean bidding blind.</div>

      <div class="qa-block">
        <div class="qa-item">
          <div class="q">How long has the property been on market?</div>
          <div class="rationale">Days-on-market above local median signals seller fatigue and pricing that the market has rejected. Long DOM = leverage.</div>
        </div>
        <div class="qa-item">
          <div class="q">What is the price history &mdash; any cuts already?</div>
          <div class="rationale">Prior reductions show seller&rsquo;s movement capacity. Each cut typically signals the next one will come if the property sits.</div>
        </div>
        <div class="qa-item">
          <div class="q">Why is the seller selling?</div>
          <div class="rationale">Relocation, divorce, estate settlement, upsizing, financial pressure &mdash; motivation dictates flexibility. Ask the listing agent directly.</div>
        </div>
        <div class="qa-item">
          <div class="q">What are 3 true comparable sales in the last 6 months?</div>
          <div class="rationale">Hard comps &mdash; same SF band, same neighborhood, closed transactions (not list prices). This is the anchor for the offer number, not the seller&rsquo;s list price.</div>
        </div>
        <div class="qa-item">
          <div class="q">Are there any known title defects, easements, or liens?</div>
          <div class="rationale">Surprises at closing kill timelines. Pre-title search protects both the offer price and the close date.</div>
        </div>
        <div class="qa-item">
          <div class="q">What is the condition of roof, HVAC, foundation, plumbing?</div>
          <div class="rationale">Estate-size properties carry 6-figure deferred-maintenance risk. Every known issue becomes a price lever before or after inspection.</div>
        </div>
        <div class="qa-item">
          <div class="q">What are the annual property taxes and HOA fees?</div>
          <div class="rationale">Carrying cost is the true long-term price. A property $50K cheaper with $8K/yr higher taxes is not cheaper &mdash; it&rsquo;s the same in 6 years.</div>
        </div>
        <div class="qa-item">
          <div class="q">Are there competing offers?</div>
          <div class="rationale">Real competing offers change strategy &mdash; bluffed ones do not. Ask for written proof before raising offer in response.</div>
        </div>
      </div>
    </div>

    <!-- SECTION 4 — LEVERAGE MATRIX -->
    <div class="section">
      <h2 class="section-title"><span class="first-word">Leverage</span> <span class="rest">Matrix &mdash; What Moves Price</span></h2>
      <div class="section-subtitle">Know what you are trading. Every term has a dollar value to the seller.</div>

      <table class="leverage-table">
        <thead>
          <tr>
            <th>Lever</th>
            <th>How It Helps Us</th>
            <th>What It Costs Seller</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="lev-label">Days on Market</td>
            <td>Longer DOM signals pricing resistance &mdash; justifies lower opening bid.</td>
            <td>Each additional month = carrying cost, tax, insurance, lost opportunity.</td>
            <td class="impact-high">HIGH</td>
          </tr>
          <tr>
            <td class="lev-label">Flexible Close Date</td>
            <td>We offer the seller their preferred closing window.</td>
            <td>Seller avoids gap housing, rent-back costs, timing stress.</td>
            <td class="impact-high">HIGH</td>
          </tr>
          <tr>
            <td class="lev-label">Clean Contingencies</td>
            <td>Fewer escape hatches signal serious buyer.</td>
            <td>Seller gets certainty of close &mdash; highly valued.</td>
            <td class="impact-high">HIGH</td>
          </tr>
          <tr>
            <td class="lev-label">Strong Pre-Approval</td>
            <td>Renasant letter backed by Patrick Lavette.</td>
            <td>Removes financing-fallout risk, #1 deal killer.</td>
            <td class="impact-high">HIGH</td>
          </tr>
          <tr>
            <td class="lev-label">Inspection Findings</td>
            <td>Documented issues justify post-offer price reduction.</td>
            <td>Seller faces disclosure obligation to next buyer.</td>
            <td class="impact-med">MEDIUM</td>
          </tr>
          <tr>
            <td class="lev-label">Earnest Money Size</td>
            <td>Larger earnest money signals commitment.</td>
            <td>Seller perceives lower risk of collapse.</td>
            <td class="impact-med">MEDIUM</td>
          </tr>
          <tr>
            <td class="lev-label">Appraisal Gap Coverage</td>
            <td>Used sparingly &mdash; offer to cover small appraisal gaps.</td>
            <td>Removes appraisal as a deal-blocker for the seller.</td>
            <td class="impact-med">MEDIUM</td>
          </tr>
          <tr>
            <td class="lev-label">Seller Concessions</td>
            <td>Request credits for repairs, closing costs, or rate buy-down.</td>
            <td>Seller net is same, we improve effective price.</td>
            <td class="impact-med">MEDIUM</td>
          </tr>
          <tr>
            <td class="lev-label">Silence &amp; Patience</td>
            <td>Not responding quickly forces seller to move.</td>
            <td>Every day without counter is a day on market.</td>
            <td class="impact-high">HIGH</td>
          </tr>
          <tr>
            <td class="lev-label">Walk-Away Posture</td>
            <td>Credible ability to walk = strongest lever of all.</td>
            <td>Seller recalculates from true market demand.</td>
            <td class="impact-high">HIGH</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 5 — PRICING FRAMEWORK -->
    <div class="section">
      <h2 class="section-title"><span class="first-word">Pricing</span> <span class="rest">Framework &mdash; Three Numbers Before First Offer</span></h2>
      <div class="section-subtitle">Discipline = writing these three numbers down BEFORE the seller communicates anything.</div>

      <div class="numbers-grid">
        <div class="number-card cyan">
          <div class="label">Opening Offer</div>
          <div class="formula">Below comp-based fair value</div>
          <div class="note">Built from closed comps, not list price. Leaves room to move upward during counters.</div>
        </div>
        <div class="number-card blue">
          <div class="label">Target Close Price</div>
          <div class="formula">Comp-validated fair value</div>
          <div class="note">Where we actually expect to land. This is the real number. Everything else is theater around it.</div>
        </div>
        <div class="number-card navy">
          <div class="label">Walk-Away Ceiling</div>
          <div class="formula">Target + max acceptable premium</div>
          <div class="note">If seller demands more than this, walk. Do not raise this number mid-negotiation, ever.</div>
        </div>
      </div>

      <div class="alert-box">
        <div class="alert-title">Discipline Rule</div>
        <p>Write the three numbers down. Put them in a sealed envelope or a dated file. When counters fly and emotion rises, open the envelope and read what sober-Aaron decided. The number does not change just because the seller pushed back.</p>
      </div>
    </div>

    <!-- SECTION 6 — DUE DILIGENCE CHECKLIST -->
    <div class="section">
      <h2 class="section-title"><span class="first-word">Due</span> <span class="rest">Diligence Checklist</span></h2>
      <div class="section-subtitle">Clear these items before wire. A missed item becomes the next owner&rsquo;s problem &mdash; don&rsquo;t be that owner.</div>

      <div class="checklist">
        <div class="checklist-header">
          Pre-Close Verification
          <span class="count">16 items</span>
        </div>

        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Title search</strong> ordered and reviewed for liens, easements, encumbrances</span>
          <span class="pill critical">Critical</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Survey</strong> pulled to confirm lot lines, setbacks, and any encroachment</span>
          <span class="pill critical">Critical</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Full home inspection</strong> by licensed inspector &mdash; structural, mechanical, envelope</span>
          <span class="pill critical">Critical</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Foundation evaluation</strong> &mdash; separate from general inspection for estates this size</span>
          <span class="pill critical">Critical</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Roof inspection</strong> with age, remaining life estimate, hail/wind history</span>
          <span class="pill high">High</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>HVAC inspection</strong> &mdash; age, tonnage, service history on every unit</span>
          <span class="pill high">High</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Termite &amp; pest letter</strong> &mdash; current clearance required</span>
          <span class="pill high">High</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Radon test</strong> if applicable to the area</span>
          <span class="pill normal">Normal</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Sewer scope</strong> &mdash; camera the main line from house to tap</span>
          <span class="pill high">High</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Insurance binder</strong> quoted &amp; locked for closing day</span>
          <span class="pill critical">Critical</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Flood zone verification</strong> &amp; need for flood insurance confirmed</span>
          <span class="pill high">High</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Property tax history</strong> last 3 years &mdash; confirm no delinquency, note trajectory</span>
          <span class="pill normal">Normal</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>HOA documents</strong> reviewed: CC&amp;Rs, financials, pending assessments, minutes</span>
          <span class="pill normal">Normal</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Appraisal</strong> ordered via Renasant &mdash; confirm it supports contract price</span>
          <span class="pill critical">Critical</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Seller disclosure form</strong> reviewed line-by-line against inspection findings</span>
          <span class="pill high">High</span>
        </div>
        <div class="checklist-item">
          <span class="check-box"></span>
          <span class="task-text"><strong>Final walkthrough</strong> within 24 hours of funding &mdash; confirm no new damage</span>
          <span class="pill critical">Critical</span>
        </div>
      </div>
    </div>

    <!-- SECTION 7 — RULES OF ENGAGEMENT -->
    <div class="section">
      <h2 class="section-title"><span class="first-word">Rules</span> <span class="rest">of Engagement</span></h2>
      <div class="section-subtitle">Internal discipline rules. Read before every agent call or counter-offer response.</div>

      <div class="pillars-grid">
        <div class="pillar">
          <div class="icon-box">A</div>
          <h4>Never First, Never Last</h4>
          <p>Don&rsquo;t be the first to name a number when you can avoid it. When you must counter, don&rsquo;t be the last to move either &mdash; save movement for where it&rsquo;s decisive.</p>
        </div>
        <div class="pillar">
          <div class="icon-box">B</div>
          <h4>Silence Is a Tool</h4>
          <p>After sending an offer, let it breathe. No follow-up calls. No "just checking." Silence signals confidence and forces the seller to respond from their side of the table.</p>
        </div>
        <div class="pillar">
          <div class="icon-box">C</div>
          <h4>Written, Not Verbal</h4>
          <p>All offers, counters, and concessions in writing. Verbal understandings die in closing rooms. If it matters, it gets initialed.</p>
        </div>
        <div class="pillar">
          <div class="icon-box">D</div>
          <h4>Trade, Don&rsquo;t Give</h4>
          <p>Every concession gets something back. Extend inspection? Get a price concession. Accept a term? Request a credit. Never give for free.</p>
        </div>
        <div class="pillar">
          <div class="icon-box">E</div>
          <h4>Decouple Emotion From Price</h4>
          <p>Liking the house is fine. Needing the house is expensive. Buyer posture that says "there are other houses" is worth real money at the table.</p>
        </div>
        <div class="pillar">
          <div class="icon-box">F</div>
          <h4>Document Everything</h4>
          <p>Date-stamp every communication. Keep a deal journal. Post-close, this becomes the paper trail for disputes, taxes, and future sale diligence.</p>
        </div>
      </div>

      <div class="alert-box">
        <div class="alert-title">Business-First Constraint</div>
        <p>Norris Utilities® operating capital must not be used to fund this purchase. Personal balance sheet only. Inventory positions &mdash; FlexPro Armor, Samson Rope pre-buys, Skylift PO commitments &mdash; take priority on working capital.</p>
      </div>
    </div>

    <!-- NEXT ACTION -->
    <div class="next-action">
      <div class="eyebrow">Immediate Next Action</div>
      <h3>Call Patrick Lavette at Renasant Bank this week.</h3>
      <p>Open the financing conversation first. A pre-approval letter in hand before any offer conversation strengthens everything that follows. Patrick knows the deal structures that work cleanest for estate-size residential. Once financing is framed, pull comps &mdash; 3 hard closed sales, same SF band, 0.5-mile radius. Those three numbers set the opening offer, the target, and the walk-away. Everything else in this playbook executes against those three numbers.</p>
      <div class="action-row">
        <a href="tel:2055001343" class="action-btn">Call Patrick at Renasant</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=Estate%20Acquisition%20%E2%80%94%204505%20Buttewoods" class="action-btn ghost">Email Agent for DOM + Comps</a>
      </div>
    </div>

  </div>
</main>

<!-- FOOTER -->
<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    <strong style="color: var(--nu-white); font-size: 1rem;">Aaron C. Norris</strong><br>
    Founder &amp; CEO | Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
    130 Inverness Plaza #210 &middot; Birmingham, AL 35242
  </div>
  <div class="nu-footer-divider"></div>
  <div class="nu-footer-meta">Confidential &middot; Personal Negotiation Document &middot; Not for Distribution</div>
</footer>

</body>
</html>