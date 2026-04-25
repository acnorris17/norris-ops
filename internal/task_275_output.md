<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Negotiation Strategy — 4505 Buttewood Offer — Norris Utilities®</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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
  --nu-success: #10b981;
  --nu-warning: #f59e0b;
  --nu-danger: #dc2626;
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
  min-height: 320px;
}

.nu-header::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
  margin: 0 auto 16px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
  font-weight: 900;
  font-size: 1.3rem;
  color: var(--nu-white);
  letter-spacing: 0.75em;
  text-transform: uppercase;
  margin-bottom: 18px;
  padding-left: 0.75em;
}

.nu-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
  margin-bottom: 24px;
}

.nu-doc-tag {
  display: inline-block;
  background: rgba(0,0,0,0.25);
  color: var(--nu-cyan);
  padding: 8px 22px;
  border: 1px solid rgba(6,208,255,0.4);
  border-radius: 2px;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.25em;
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
  padding-bottom: 60px;
}

.nu-content-area::before {
  content: '';
  position: absolute;
  top: 80px; left: 50%;
  transform: translateX(-50%);
  width: 65%; max-width: 700px;
  aspect-ratio: 1;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230000FF' opacity='0.07'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230000FF' opacity='0.07'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  pointer-events: none;
  z-index: 0;
}

.nu-container {
  position: relative;
  z-index: 2;
  max-width: 1180px;
  margin: 0 auto;
  padding: 60px 40px 20px;
}

/* DOC TITLE */
.doc-title-block {
  text-align: center;
  margin-bottom: 50px;
}
.doc-title-block h1 {
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-dark-text);
  margin-bottom: 8px;
  line-height: 1.15;
}
.doc-title-block h1 .blue { color: #0033cc; }
.doc-title-block .doc-meta {
  font-size: 0.95rem;
  color: #666;
  margin-top: 14px;
}

/* DEAL SUMMARY BAR */
.deal-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0;
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 50px;
  box-shadow: 0 8px 28px rgba(0, 0, 51, 0.18);
}
.deal-summary-cell {
  padding: 22px 18px;
  border-right: 1px solid rgba(255,255,255,0.1);
  text-align: center;
}
.deal-summary-cell:last-child { border-right: none; }
.deal-summary-cell .label {
  display: block;
  font-size: 0.72rem;
  color: var(--nu-cyan);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 700;
  margin-bottom: 8px;
}
.deal-summary-cell .value {
  font-size: 1.35rem;
  color: var(--nu-white);
  font-weight: 900;
  line-height: 1.2;
}
.deal-summary-cell .sub {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.7);
  margin-top: 4px;
}

/* SECTION */
.nu-section { margin-bottom: 44px; }
.nu-section-title {
  font-weight: 900;
  font-size: 1.55rem;
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 3px solid var(--nu-cyan);
  display: flex;
  align-items: baseline;
  gap: 14px;
}
.nu-section-title .num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  background: var(--nu-blue);
  color: var(--nu-white);
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 900;
  flex-shrink: 0;
}
.nu-section-title .first { color: #0033cc; }
.nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

.nu-card {
  background: var(--nu-white);
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid var(--nu-medium-gray);
  margin-bottom: 18px;
}

/* PRICE LADDER */
.price-ladder {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 12px;
}
.price-rung {
  background: var(--nu-white);
  border-radius: 8px;
  padding: 22px;
  border-left: 5px solid #ccc;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.price-rung.opening { border-left-color: var(--nu-success); }
.price-rung.target { border-left-color: var(--nu-blue); background: linear-gradient(135deg, #f0f5ff 0%, #ffffff 100%); }
.price-rung.walkaway { border-left-color: var(--nu-danger); }
.price-rung .rung-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: #666;
  margin-bottom: 6px;
}
.price-rung .rung-value {
  font-size: 1.85rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1;
  margin-bottom: 8px;
}
.price-rung.target .rung-value { color: var(--nu-blue); }
.price-rung .rung-note {
  font-size: 0.85rem;
  color: #555;
  line-height: 1.45;
}
.price-rung .rung-tag {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
}
.price-rung.opening .rung-tag { background: #d1fae5; color: #065f46; }
.price-rung.target .rung-tag { background: #dbeafe; color: #1e40af; }
.price-rung.walkaway .rung-tag { background: #fee2e2; color: #991b1b; }

/* PROPERTY FACTS GRID */
.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
}
.fact {
  background: var(--nu-white);
  border-radius: 6px;
  padding: 16px 18px;
  border: 1px solid var(--nu-medium-gray);
}
.fact .fact-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #777;
  font-weight: 700;
  margin-bottom: 4px;
}
.fact .fact-value {
  font-size: 1.05rem;
  color: var(--nu-dark-text);
  font-weight: 700;
}

/* LEVERAGE TABLE */
.lev-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.lev-table th {
  background: var(--nu-navy);
  color: var(--nu-white);
  padding: 14px 16px;
  text-align: left;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.lev-table td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--nu-medium-gray);
  vertical-align: top;
  font-size: 0.95rem;
}
.lev-table tr:last-child td { border-bottom: none; }
.lev-table tr:nth-child(even) td { background: #fafafd; }
.lev-table .lev-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.lev-badge.ours { background: #d1fae5; color: #065f46; }
.lev-badge.theirs { background: #fef3c7; color: #92400e; }

/* PLAYBOOK STEPS */
.playbook {
  display: grid;
  gap: 14px;
}
.play-step {
  background: var(--nu-white);
  border-radius: 8px;
  padding: 20px 22px 20px 70px;
  position: relative;
  border: 1px solid var(--nu-medium-gray);
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}
.play-step::before {
  content: counter(step-counter);
  counter-increment: step-counter;
  position: absolute;
  left: 18px; top: 18px;
  width: 38px; height: 38px;
  background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
  color: var(--nu-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1rem;
}
.playbook { counter-reset: step-counter; }
.play-step h4 {
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.play-step p {
  font-size: 0.92rem;
  color: #444;
  line-height: 1.55;
}
.play-step .script {
  margin-top: 10px;
  padding: 12px 14px;
  background: #f7f9ff;
  border-left: 3px solid var(--nu-cyan);
  font-style: italic;
  font-size: 0.9rem;
  color: #333;
  border-radius: 0 4px 4px 0;
}

/* ANCHOR / CONCESSION COLUMNS */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.col-card {
  background: var(--nu-white);
  border-radius: 8px;
  padding: 22px 24px;
  border-top: 4px solid var(--nu-blue);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.col-card.give-up { border-top-color: var(--nu-warning); }
.col-card.hold-firm { border-top-color: var(--nu-success); }
.col-card h3 {
  font-weight: 900;
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: var(--nu-dark-text);
}
.col-card ul { list-style: none; padding: 0; }
.col-card li {
  padding: 8px 0 8px 22px;
  position: relative;
  font-size: 0.93rem;
  border-bottom: 1px dashed #eee;
}
.col-card li:last-child { border-bottom: none; }
.col-card li::before {
  content: '•';
  position: absolute;
  left: 6px;
  color: var(--nu-blue);
  font-weight: 900;
}
.col-card.give-up li::before { color: var(--nu-warning); }
.col-card.hold-firm li::before { color: var(--nu-success); }

/* COUNTER MOVES */
.counter-move {
  background: var(--nu-white);
  border-radius: 8px;
  padding: 18px 22px;
  margin-bottom: 12px;
  border-left: 4px solid var(--nu-cyan);
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}
.counter-move .if-line {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--nu-blue);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}
.counter-move .if-text {
  font-weight: 700;
  color: var(--nu-dark-text);
  font-size: 1rem;
  margin-bottom: 8px;
}
.counter-move .then-line {
  font-size: 0.78rem;
  font-weight: 700;
  color: #0033cc;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}
.counter-move .then-text {
  color: #444;
  font-size: 0.93rem;
  line-height: 1.5;
}

/* TIMELINE */
.timeline {
  position: relative;
  padding-left: 32px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 12px; top: 0; bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
  border-radius: 2px;
}
.tl-item {
  position: relative;
  padding-bottom: 22px;
}
.tl-item::before {
  content: '';
  position: absolute;
  left: -26px; top: 4px;
  width: 14px; height: 14px;
  background: var(--nu-white);
  border: 3px solid var(--nu-blue);
  border-radius: 50%;
}
.tl-item .tl-when {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--nu-blue);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2px;
}
.tl-item .tl-what {
  font-weight: 700;
  color: var(--nu-dark-text);
  margin-bottom: 4px;
}
.tl-item .tl-detail {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
}

/* RED FLAGS */
.flag-list { display: grid; gap: 10px; }
.flag {
  background: #fff7ed;
  border: 1px solid #fed7aa;
  border-left: 4px solid var(--nu-warning);
  border-radius: 6px;
  padding: 14px 18px;
  font-size: 0.93rem;
  color: #7c2d12;
}
.flag strong { color: #9a3412; display: block; margin-bottom: 3px; }

/* FINAL ASK CARD */
.final-ask {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, var(--nu-blue) 100%);
  color: var(--nu-white);
  border-radius: 10px;
  padding: 36px 40px;
  text-align: center;
  box-shadow: 0 12px 36px rgba(0,0,51,0.25);
}
.final-ask .label {
  font-size: 0.78rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--nu-cyan);
  font-weight: 700;
  margin-bottom: 10px;
}
.final-ask h2 {
  font-weight: 900;
  font-size: 2.1rem;
  margin-bottom: 12px;
  line-height: 1.25;
}
.final-ask .price {
  font-size: 3rem;
  font-weight: 900;
  color: var(--nu-cyan);
  margin: 8px 0 18px;
  letter-spacing: -0.02em;
}
.final-ask .terms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
  margin-top: 22px;
  text-align: left;
}
.final-ask .term {
  background: rgba(255,255,255,0.08);
  padding: 14px 16px;
  border-radius: 6px;
  border-left: 3px solid var(--nu-cyan);
}
.final-ask .term .t-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--nu-cyan);
  font-weight: 700;
  margin-bottom: 3px;
}
.final-ask .term .t-value {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--nu-white);
}

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 44px 40px;
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
.nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
.nu-footer-contact a:hover { text-decoration: underline; }
.nu-footer-confidential {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid rgba(255,255,255,0.15);
  font-size: 0.75rem;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .two-col { grid-template-columns: 1fr; }
  .deal-summary-cell { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
}
@media (max-width: 768px) {
  .nu-header { padding: 50px 24px 70px; min-height: 240px; }
  .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-container { padding: 40px 22px 20px; }
  .doc-title-block h1 { font-size: 1.7rem; }
  .nu-section-title { font-size: 1.25rem; }
  .final-ask { padding: 28px 22px; }
  .final-ask h2 { font-size: 1.55rem; }
  .final-ask .price { font-size: 2.3rem; }
  .play-step { padding-left: 60px; }
}

@media print {
  body { background: white; }
  .nu-header, .final-ask, .deal-summary, .nu-footer {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .nu-card, .price-rung, .play-step, .counter-move { box-shadow: none; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <div class="nu-phoenix-icon">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
  </div>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
  <div class="nu-doc-tag">Confidential — Negotiation Brief</div>
</header>

<!-- CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <!-- DOC TITLE -->
    <div class="doc-title-block">
      <h1><span class="blue">Negotiation</span> Strategy — 4505 Buttewood Estate</h1>
      <div class="doc-meta">
        Prepared for Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Drafted 2026-04-24 &nbsp;|&nbsp; Internal use only
      </div>
    </div>

    <!-- DEAL SUMMARY -->
    <div class="deal-summary">
      <div class="deal-summary-cell">
        <span class="label">Property</span>
        <div class="value">4505 Buttewood</div>
        <div class="sub">7,098 sq ft estate</div>
      </div>
      <div class="deal-summary-cell">
        <span class="label">Our Offer</span>
        <div class="value">$900,000</div>
        <div class="sub">All-cash track</div>
      </div>
      <div class="deal-summary-cell">
        <span class="label">Price / SqFt</span>
        <div class="value">$126.80</div>
        <div class="sub">Land + structure</div>
      </div>
      <div class="deal-summary-cell">
        <span class="label">Walk-Away</span>
        <div class="value">$945,000</div>
        <div class="sub">Hard ceiling</div>
      </div>
      <div class="deal-summary-cell">
        <span class="label">Status</span>
        <div class="value">Pre-Submit</div>
        <div class="sub">Strategy locked</div>
      </div>
    </div>

    <!-- SECTION 1: OBJECTIVE -->
    <section class="nu-section">
      <div class="nu-section-title">
        <span class="num">1</span><span class="first">Objective</span><span class="rest">&amp; Position</span>
      </div>
      <div class="nu-card">
        <p style="margin-bottom: 14px;">
          Submit a <strong>$900,000 all-cash offer</strong> on the 7,098 sq ft estate at 4505 Buttewood and close at or below the
          $945,000 walk-away. The strategy below frames our opening as a <em>fair, fast, finance-free</em> path for the seller — the kind of
          buyer most listings never see — while preserving leverage to hold price if they counter at list.
        </p>
        <p>
          The goal is not to "win" against the seller. The goal is to make the seller's choice between our certainty and the risk of a
          financed buyer feel obvious. We negotiate with patience, the only emotional tool we bring to the table.
        </p>
      </div>
    </section>

    <!-- SECTION 2: PROPERTY FACTS -->
    <section class="nu-section">
      <div class="nu-section-title">
        <span class="num">2</span><span class="first">Property</span><span class="rest">Facts We Built On</span>
      </div>
      <div class="facts-grid">
        <div class="fact">
          <div class="fact-label">Address</div>
          <div class="fact-value">4505 Buttewood</div>
        </div>
        <div class="fact">
          <div class="fact-label">Living Area</div>
          <div class="fact-value">7,098 sq ft</div>
        </div>
        <div class="fact">
          <div class="fact-label">Our Offer Price</div>
          <div class="fact-value">$900,000</div>
        </div>
        <div class="fact">
          <div class="fact-label">$ / SqFt at Offer</div>
          <div class="fact-value">$126.80 / sq ft</div>
        </div>
        <div class="fact">
          <div class="fact-label">Financing Track</div>
          <div class="fact-value">Cash — no contingency</div>
        </div>
        <div class="fact">
          <div class="fact-label">Buyer Posture</div>
          <div class="fact-value">Patient, principal-led</div>
        </div>
        <div class="fact">
          <div class="fact-label">Decision Maker</div>
          <div class="fact-value">Aaron C. Norris</div>
        </div>
        <div class="fact">
          <div class="fact-label">Negotiation Window</div>
          <div class="fact-value">10 business days</div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: PRICE LADDER -->
    <section class="nu-section">
      <div class="nu-section-title">
        <span class="num">3</span><span class="first">Price</span><span class="rest">Ladder — Three Numbers, One Plan</span>
      </div>
      <div class="price-ladder">
        <div class="price-rung opening">
          <div class="rung-label">Opening Offer</div>
          <div class="rung-value">$900,000</div>
          <div class="rung-note">First written number. Anchors low without insulting. Cash, fast close, no inspection re-trade.</div>
          <span class="rung-tag">Anchor</span>
        </div>
        <div class="price-rung target">
          <div class="rung-label">Target Close</div>
          <div class="rung-value">$915,000</div>
          <div class="rung-note">Where we expect to land after one round. Add concessions (closing date, appliances) before adding price.</div>
          <span class="rung-tag">Goal</span>
        </div>
        <div class="price-rung walkaway">
          <div class="rung-label">Walk-Away</div>
          <div class="rung-value">$945,000</div>
          <div class="rung-note">Hard ceiling. Above this number, the deal stops penciling. We walk politely, leave the door open.</div>
          <span class="rung-tag">Hard Stop</span>
        </div>
      </div>
      <p style="margin-top: 18px; font-size: 0.92rem; color: #555;">
        <strong>Discipline:</strong> never reveal the walk-away. Never concede price in the first counter — concede terms first. Every $5,000
        movement up should be matched by something the seller gives up (closing date, repair credit, fixture).
      </p>
    </section>

    <!-- SECTION 4: LEVERAGE -->
    <section class="nu-section">
      <div class="nu-section-title">
        <span class="num">4</span><span class="first">Leverage</span><span class="rest">Map — Who Holds What</span>
      </div>
      <table class="lev-table">
        <thead>
          <tr>
            <th style="width: 22%;">Lever</th>
            <th style="width: 14%;">Side</th>
            <th>How We Use It (or Defuse It)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>All-Cash, No Loan</strong></td>
            <td><span class="lev-badge ours">Ours</span></td>
            <td>Eliminates appraisal risk and 30–45 day finance contingency. Lead with this in the cover letter — it is the single largest discount we offer.</td>
          </tr>
          <tr>
            <td><strong>Proof of Funds</strong></td>
            <td><span class="lev-badge ours">Ours</span></td>
            <td>Attach bank letter dated within 7 days. Removes seller doubt before they ask.</td>
          </tr>
          <tr>
            <td><strong>Fast Close (≤21 days)</strong></td>
            <td><span class="lev-badge ours">Ours</span></td>
            <td>Trade for price. If seller counters at $935K+, ask "Would $915K cash, 14-day close work?"</td>
          </tr>
          <tr>
            <td><strong>No Sale Contingency</strong></td>
            <td><span class="lev-badge ours">Ours</span></td>
            <td>We are not waiting on another house to sell. Mention plainly — most retail buyers cannot say this.</td>
          </tr>
          <tr>
            <td><strong>Days on Market</strong></td>
            <td><span class="lev-badge ours">Ours</span></td>
            <td>If listing has aged past 45 days, every additional week tilts the seller toward our offer. Patience is a weapon.</td>
          </tr>
          <tr>
            <td><strong>List Price Anchor</strong></td>
            <td><span class="lev-badge theirs">Theirs</span></td>
            <td>Sellers feel entitled to the list. Counter with comps and condition notes — never with insults.</td>
          </tr>
          <tr>
            <td><strong>Comparable Recent Sales</strong></td>
            <td><span class="lev-badge theirs">Theirs</span></td>
            <td>If they pull strong comps, concede the data is real and pivot to our terms (cash, no-loan).</td>
          </tr>
          <tr>
            <td><strong>Backup Offers</strong></td>
            <td><span class="lev-badge theirs">Theirs</span></td>
            <td>Assume bluff until verified. Ask agent for offer count in writing. Real backups have a name attached.</td>
          </tr>
          <tr>
            <td><strong>Emotional Attachment</strong></td>
            <td><span class="lev-badge theirs">Theirs</span></td>
            <td>If sellers built or raised a family there, write a respectful cover letter. Costs nothing. Closes deals.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- SECTION 5: PLAYBOOK -->
    <section class="nu-section">
      <div class="nu-section-title">
        <span class="num">5</span><span class="first">Playbook</span><span class="rest">— Step-by-Step Sequence</span>
      </div>
      <div class="playbook">

        <div class="play-step">
          <h4>Pre-Submit Diligence (Day 0)</h4>
          <p>Pull last 90 days of comparable sales within 1 mile. Confirm tax assessment, recent permits, HOA status. Get bank proof-of-funds letter dated within 7 days. Lock walk-away in writing — share with no one outside the deal team.</p>
        </div>

        <div class="play-step">
          <h4>Submit Written Offer at $900,000 (Day 1)</h4>
          <p>Cash, 21-day close, $5,000 earnest money, standard inspection (information only, no repair re-trade). Include POF letter and a one-page cover letter from Aaron — short, plain, no lawyer language.</p>
          <div class="script">"Mr./Ms. Seller — Our offer is firm at $900,000 cash. We can close in 21 days, no financing, no sale of another property. You will know on day 22 the funds are in your account. Sincerely, Aaron C. Norris."</div>
        </div>

        <div class="play-step">
          <h4>Silent Window (Days 2–4)</h4>
          <p>Do not follow up. Do not call the listing agent twice. Patience is a tell — sellers read urgency as weakness and silence as strength. If the agent calls, our agent answers; Aaron stays out of direct dialogue.</p>
        </div>

        <div class="play-step">
          <h4>First Counter Received (Day 4–7)</h4>
          <p>Expect a counter between $940K and list price. Do not move price first. Move <strong>terms</strong>: offer to take possession sooner, accept "as-is," waive minor repairs. If they hold firm above $945K, prepare to walk.</p>
        </div>

        <div class="play-step">
          <h4>Our Counter at $912,500 — $915,000 (Day 5–8)</h4>
          <p>Move toward target in one disciplined step. Pair the price bump with a give-back: faster close, take their fridge as a "favor," cover their title insurance share. Never two raises in a row.</p>
        </div>

        <div class="play-step">
          <h4>Final Round (Day 8–10)</h4>
          <p>If seller counters between $915K and $945K, accept at the lowest defensible number. If above $945K, deliver the walk-away letter — polite, dated, with a 48-hour expiration. Sellers often re-engage at hour 47.</p>
          <div class="script">"We respect the position. Our final number remains $945,000 cash, 21-day close. This offer expires Friday at 5:00 PM Central. We wish you the best either way."</div>
        </div>

        <div class="play-step">
          <h4>Acceptance &amp; Lockdown (Day 10+)</h4>
          <p>Open escrow same day. Wire earnest money within 24 hours. Schedule inspection inside 5 days. No re-trades on inspection unless something material (foundation, roof, septic) emerges. Close on time.</p>
        </div>

      </div>
    </section>

    <!-- SECTION 6: GIVE / HOLD -->
    <section class="nu-section">
      <div class="nu-section-title">
        <span class="num">6</span><span class="first">Give</span><span class="rest">/ Hold — What Trades, What Doesn't</span>
      </div>
      <div class="two-col">
        <div class="col-card give-up">
          <h3>Concessions We Will Trade</h3>
          <ul>
            <li>Closing date — flexible from 14 to 45 days, whichever helps the seller</li>
            <li>Earnest money — willing to go to $10,000 if it unlocks the deal</li>
            <li>Inspection scope — accept "as-is" if condition is reasonable</li>
            <li>Minor repairs (paint, landscaping, cosmetic) — absorb without credit</li>
            <li>Personal property — take fridge, washer/dryer, mounted TVs as-is</li>
            <li>Rent-back — up to 30 days at market rate if seller needs time</li>
            <li>Title fees — split evenly if seller pushes; we cover if it closes the gap</li>
          </ul>
        </div>
        <div class="col-card hold-firm">
          <h3>Lines We Hold Firm</h3>
          <ul>
            <li>$945,000 walk-away ceiling — absolutely no movement above</li>
            <li>All-cash structure — no last-minute financing accommodation</li>
            <li>Right to inspect for information — non-waivable</li>
            <li>Material defect re-trade right — if foundation/roof/septic fails</li>
            <li>Clear title at close — no liens, no encroachments inherited</li>
            <li>Survey contingency for any property line dispute</li>
            <li>Walk-away letter is final — no re-opening once delivered and expired</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 7: COUNTERMOVES -->
    <section class="nu-section">
      <div class="nu-section-title">
        <span class="num">7</span><span class="first">Counter</span><span class="rest">Moves — If/Then Decision Tree</span>
      </div>

      <div class="counter-move">
        <div class="if-line">If seller</div>
        <div class="if-text">accepts the $900,000 offer outright</div>
        <div class="then-line">Then we</div>
        <div class="then-text">Open escrow same day. Do not celebrate — sellers who accept fast sometimes have second thoughts. Lock the contract before sundown.</div>
      </div>

      <div class="counter-move">
        <div class="if-line">If seller</div>
        <div class="if-text">counters at full list price (no movement)</div>
        <div class="then-line">Then we</div>
        <div class="then-text">Hold for 48 hours. Do not respond. Have agent indicate "buyer is reviewing comps." Sellers who refuse to move on a cash offer rarely close at list with a financed buyer — time pressure works in our favor.</div>
      </div>

      <div class="counter-move">
        <div class="if-line">If seller</div>
        <div class="if-text">counters between $935K and $945K</div>
        <div class="then-line">Then we</div>
        <div class="then-text">Counter at $920K with terms sweeteners (faster close, $10K earnest, take appliances). Prepare to meet at $930K–$935K. Stay below walk-away.</div>
      </div>

      <div class="counter-move">
        <div class="if-line">If seller</div>
        <div class="if-text">counters above $945K</div>
        <div class="then-line">Then we</div>
        <div class="then-text">Deliver walk-away letter at $945K with 48-hour expiration. Stop calling. Stop showing interest. If they come back inside the window, accept and close fast. If not, the deal is dead — move on without regret.</div>
      </div>

      <div class="counter-move">
        <div class="if-line">If seller</div>
        <div class="if-text">claims multiple competing offers</div>
        <div class="then-line">Then we</div>
        <div class="then-text">Ask in writing for the offer count and best competing price. If unverified, treat as bluff and hold. If verified, raise to $925K cash with all terms locked — let the financed competition trip on appraisal.</div>
      </div>

      <div class="counter-move">
        <div class="if-line">If inspection</div>
        <div class="if-text">surfaces a material defect (>$15K to fix)</div>
        <div class="then-line">Then we</div>
        <div class="then-text">Re-trade for a credit equal to 80% of repair cost — not a price reduction. Credit at close is cleaner and protects the deal structure.</div>
      </div>

      <div class="counter-move">
        <div class="if-line">If seller</div>
        <div class="if-text">tries to add post-acceptance contingencies (rent-back surprise, fixture exclusions)</div>
        <div class="then-line">Then we</div>
        <div class="then-text">Refuse politely. Reference the original signed contract. Sellers who chip after acceptance signal future friction — protect the close date and document everything in writing.</div>
      </div>

    </section>

    <!-- SECTION 8: TIMELINE -->
    <section class="nu-section">
      <div class="nu-section-title">
        <span class="num">8</span><span class="first">Timeline</span><span class="rest">— 10 Business Days, Start to Signed</span>
      </div>
      <div class="nu-card">
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-when">Day 0 — Today</div>
            <div class="tl-what">Pull comps, secure POF letter, finalize cover letter</div>
            <div class="tl-detail">All preparation done before any number is shared with the seller's side.</div>
          </div>
          <div class="tl-item">
            <div class="tl-when">Day 1</div>
            <div class="tl-what">Submit $900,000 written offer, cash, 21-day close</div>
            <div class="tl-detail">Delivered through our agent. POF and cover letter attached. Earnest $5,000.</div>
          </div>
          <div class="tl-item">
            <div class="tl-when">Days 2–4</div>
            <div class="tl-what">Silent window — no follow-up calls</div>
            <div class="tl-detail">Aaron stays out of direct contact. Agent fields routine questions only.</div>
          </div>
          <div class="tl-item">
            <div class="tl-when">Days 4–7</div>
            <div class="tl-what">Receive first counter; respond inside 24 hours</div>
            <div class="tl-detail">Move terms first, price second. One concession at a time.</div>
          </div>
          <div class="tl-item">
            <div class="tl-when">Days 7–9</div>
            <div class="tl-what">Final round — land target at $912,500–$925,000</div>
            <div class="tl-detail">If seller exceeds $945K, walk-away letter delivered with 48-hour expiration.</div>
          </div>
          <div class="tl-item">
            <div class="tl-when">Day 10</div>
            <div class="tl-what">Contract signed; escrow opened</div>
            <div class="tl-detail">Wire earnest within 24 hours. Inspection scheduled within 5 days.</div>
          </div>
          <div class="tl-item">
            <div class="tl-when">Day 31 (target close)</div>
            <div class="tl-what">Funds wired, deed recorded, keys in hand</div>
            <div class="tl-detail">21-day close from contract execution if seller picks our fastest term.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 9: RED FLAGS -->
    <section class="nu-section">
      <div class="nu-section-title">
        <span class="num">9</span><span class="first">Red</span><span class="rest">Flags — Walk Conditions</span>
      </div>
      <div class="flag-list">
        <div class="flag">
          <strong>Title cannot be cleared inside the contract window</strong>
          Old liens, sibling-heir disputes, or boundary fights — these never resolve faster than a real estate attorney's hourly rate suggests. Walk.
        </div>
        <div class="flag">
          <strong>Seller refuses to allow inspection</strong>
          Even an information-only inspection. Refusal is a confession. Walk immediately, no second meeting.
        </div>
        <div class="flag">
          <strong>Material defect found mid-contract that exceeds $40,000 to remedy</strong>
          Re-trade once. If seller refuses meaningful credit, walk and forfeit earnest if necessary — better to lose $5K than $40K.
        </div>
        <div class="flag">
          <strong>Seller demands escalating contingencies after acceptance</strong>
          Each new ask is a tell. Two requests is a pattern. Walk before signature drift turns into post-close litigation.
        </div>
        <div class="flag">
          <strong>Listing agent will not put representations in writing</strong>
          If they will not write it down, they will not stand behind it. Walk.
        </div>
        <div class="flag">
          <strong>Walk-away ceiling is breached and seller refuses to come back inside it</strong>
          The number is the number. Discipline is the entire strategy.
        </div>
      </div>
    </section>

    <!-- SECTION 10: FINAL ASK CARD -->
    <section class="nu-section">
      <div class="final-ask">
        <div class="label">Negotiation Position — Locked</div>
        <h2>Open at $900,000 Cash. Land at or Below $945,000.</h2>
        <div class="price">$900,000</div>
        <div style="font-size: 0.95rem; color: rgba(255,255,255,0.85); max-width: 640px; margin: 0 auto;">
          One offer. One walk-away. Discipline beats enthusiasm in every real estate negotiation.
        </div>
        <div class="terms">
          <div class="term">
            <div class="t-label">Structure</div>
            <div class="t-value">All-cash, no contingency</div>
          </div>
          <div class="term">
            <div class="t-label">Close Window</div>
            <div class="t-value">21 days, flexible to 14 or 45</div>
          </div>
          <div class="term">
            <div class="t-label">Earnest</div>
            <div class="t-value">$5,000 (up to $10K)</div>
          </div>
          <div class="term">
            <div class="t-label">Inspection</div>
            <div class="t-value">Information-only, material defect right reserved</div>
          </div>
          <div class="term">
            <div class="t-label">Walk-Away</div>
            <div class="t-value">$945,000 — non-negotiable</div>
          </div>
          <div class="term">
            <div class="t-label">Author</div>
            <div class="t-value">Aaron C. Norris, Founder &amp; CEO</div>
          </div>
        </div>
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
  <div class="nu-footer-confidential">
    Confidential negotiation brief — internal use only — do not distribute outside the deal team
  </div>
</footer>

</body>
</html>