<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>4505 Buttewoods Estate — Negotiation Strategy | Norris Utilities®</title>
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
  --nu-success: #0a7a3a;
  --nu-warn: #b8860b;
  --nu-danger: #8b1a1a;
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

/* ══ HEADER ══ */
.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
  background-size: 40px 40px, 40px 40px, 60px 60px, 80px 80px;
  z-index: 1;
  opacity: 0.6;
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
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
  font-size: 1.3rem;
  color: var(--nu-white);
  letter-spacing: 0.75em;
  text-transform: uppercase;
  margin-bottom: 18px;
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
  background: rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.35);
  border-radius: 30px;
  color: var(--nu-white);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
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

/* ══ CONTENT AREA ══ */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
  overflow: hidden;
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 40%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  max-width: 700px;
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 65%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-content-area > * { position: relative; z-index: 1; }

.nu-container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 60px 40px;
}

/* ══ TITLE BLOCK ══ */
.nu-title-block {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--nu-medium-gray);
}
.nu-title-eyebrow {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: var(--nu-blue);
  text-transform: uppercase;
  margin-bottom: 14px;
}
.nu-title-h1 {
  font-weight: 900;
  font-size: 2.6rem;
  color: var(--nu-dark-text);
  line-height: 1.15;
  margin-bottom: 12px;
}
.nu-title-h1 span { color: var(--nu-blue); }
.nu-title-sub {
  font-weight: 300;
  font-size: 1.15rem;
  color: var(--nu-body-text);
  max-width: 780px;
  margin: 0 auto;
}

/* ══ SECTION HEADERS ══ */
.nu-section {
  margin-bottom: 50px;
}
.nu-section-title {
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 6px;
  line-height: 1.2;
}
.nu-section-title .first {
  color: var(--nu-blue);
}
.nu-section-title .rest {
  color: var(--nu-dark-text);
  font-weight: 700;
}
.nu-section-rule {
  width: 60px;
  height: 3px;
  background: var(--nu-cyan);
  margin: 10px 0 24px;
}

/* ══ PROPERTY SUMMARY ══ */
.nu-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}
.nu-summary-card {
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  border: 1px solid var(--nu-medium-gray);
  border-left: 4px solid var(--nu-blue);
  border-radius: 6px;
  padding: 20px 22px;
}
.nu-summary-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--nu-blue);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.nu-summary-value {
  font-size: 1.35rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1.2;
}
.nu-summary-sub {
  font-size: 0.82rem;
  font-weight: 400;
  color: var(--nu-body-text);
  margin-top: 4px;
}

/* ══ STRATEGY BADGES (chevron style) ══ */
.nu-strategy-list {
  display: grid;
  gap: 10px;
  margin-bottom: 10px;
}
.nu-badge {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 16px 30px 16px 22px;
  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
}
.nu-badge-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--nu-cyan);
  color: var(--nu-navy);
  border-radius: 50%;
  font-weight: 900;
  font-size: 0.9rem;
  margin-right: 14px;
  flex-shrink: 0;
}
.nu-badge-text {
  flex: 1;
}
.nu-badge-text strong {
  display: block;
  font-size: 1rem;
  margin-bottom: 2px;
  color: var(--nu-cyan);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.78rem;
}
.nu-badge-text span {
  font-weight: 400;
  font-size: 0.92rem;
  color: rgba(255,255,255,0.9);
}

/* ══ CARDS ══ */
.nu-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  margin-bottom: 18px;
}
.nu-card h3 {
  font-weight: 900;
  font-size: 1.1rem;
  color: var(--nu-dark-text);
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--nu-cyan);
}
.nu-card p {
  margin-bottom: 10px;
  font-size: 0.98rem;
}
.nu-card ul {
  list-style: none;
  padding: 0;
}
.nu-card ul li {
  padding: 6px 0 6px 20px;
  position: relative;
  font-size: 0.96rem;
}
.nu-card ul li::before {
  content: '•';
  color: var(--nu-blue);
  font-weight: 900;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
  line-height: 1;
}

/* Two-column grid */
.nu-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

/* ══ PRICE ANCHOR ══ */
.nu-anchor-band {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, var(--nu-blue) 100%);
  color: var(--nu-white);
  border-radius: 10px;
  padding: 36px 32px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}
.nu-anchor-band::after {
  content: '';
  position: absolute;
  top: -30%; right: -10%;
  width: 60%; height: 160%;
  background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 65%);
  pointer-events: none;
}
.nu-anchor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  position: relative;
  z-index: 2;
}
.nu-anchor-item {
  text-align: center;
  padding: 10px;
  border-right: 1px solid rgba(255,255,255,0.18);
}
.nu-anchor-item:last-child { border-right: none; }
.nu-anchor-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--nu-cyan);
  margin-bottom: 10px;
  font-weight: 700;
}
.nu-anchor-value {
  font-size: 2rem;
  font-weight: 900;
  color: var(--nu-white);
  line-height: 1.1;
  margin-bottom: 4px;
}
.nu-anchor-note {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.8);
  font-weight: 400;
}

/* ══ TABLE ══ */
.nu-table-wrap {
  overflow-x: auto;
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  margin-bottom: 20px;
}
.nu-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.94rem;
}
.nu-table thead th {
  background: var(--nu-navy);
  color: var(--nu-white);
  padding: 14px 16px;
  text-align: left;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.nu-table tbody td {
  padding: 13px 16px;
  border-top: 1px solid var(--nu-medium-gray);
  color: var(--nu-body-text);
}
.nu-table tbody tr:nth-child(even) td {
  background: var(--nu-light-gray);
}
.nu-table tbody tr:hover td {
  background: #eef2ff;
}
.nu-table .num {
  text-align: right;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: var(--nu-dark-text);
}
.nu-table .tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.tag-ok { background: #d9f2e4; color: var(--nu-success); }
.tag-warn { background: #faeccd; color: var(--nu-warn); }
.tag-hot { background: #fad7d7; color: var(--nu-danger); }

/* ══ LEVERAGE ══ */
.nu-leverage-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.nu-leverage {
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--nu-medium-gray);
}
.nu-leverage.pro {
  background: linear-gradient(135deg, #e8f5ee 0%, #ffffff 100%);
  border-left: 4px solid var(--nu-success);
}
.nu-leverage.risk {
  background: linear-gradient(135deg, #fcecec 0%, #ffffff 100%);
  border-left: 4px solid var(--nu-danger);
}
.nu-leverage h4 {
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.nu-leverage.pro h4 { color: var(--nu-success); }
.nu-leverage.risk h4 { color: var(--nu-danger); }
.nu-leverage ul {
  list-style: none;
  padding: 0;
}
.nu-leverage li {
  padding: 6px 0 6px 24px;
  position: relative;
  font-size: 0.94rem;
}
.nu-leverage.pro li::before {
  content: '▲';
  position: absolute;
  left: 0;
  color: var(--nu-success);
  font-size: 0.75rem;
  top: 9px;
}
.nu-leverage.risk li::before {
  content: '▼';
  position: absolute;
  left: 0;
  color: var(--nu-danger);
  font-size: 0.75rem;
  top: 9px;
}

/* ══ TIMELINE ══ */
.nu-timeline {
  position: relative;
  padding-left: 40px;
  margin-top: 12px;
}
.nu-timeline::before {
  content: '';
  position: absolute;
  left: 12px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: linear-gradient(var(--nu-blue), var(--nu-cyan));
}
.nu-tl-item {
  position: relative;
  margin-bottom: 22px;
}
.nu-tl-item::before {
  content: '';
  position: absolute;
  left: -34px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--nu-cyan);
  border: 3px solid var(--nu-blue);
  box-shadow: 0 0 0 3px var(--nu-white);
}
.nu-tl-phase {
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 4px;
}
.nu-tl-title {
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.nu-tl-text {
  font-size: 0.94rem;
  color: var(--nu-body-text);
}

/* ══ CALLOUT ══ */
.nu-callout {
  background: linear-gradient(135deg, #fff8e1 0%, #fffbf0 100%);
  border: 1px solid #f0d57c;
  border-left: 5px solid var(--nu-accent-gold);
  border-radius: 6px;
  padding: 20px 24px;
  margin: 20px 0;
}
.nu-callout-head {
  font-weight: 900;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #8a6d1a;
  margin-bottom: 8px;
}
.nu-callout p {
  font-size: 0.96rem;
  color: var(--nu-dark-text);
}

/* ══ SCRIPTS ══ */
.nu-script {
  background: var(--nu-light-gray);
  border-left: 4px solid var(--nu-blue);
  border-radius: 4px;
  padding: 18px 22px;
  margin-bottom: 14px;
  font-size: 0.96rem;
  line-height: 1.7;
}
.nu-script em {
  display: block;
  font-weight: 700;
  font-style: normal;
  color: var(--nu-blue);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

/* ══ CHECKLIST ══ */
.nu-checklist {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 10px;
}
.nu-check-item {
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  background: var(--nu-light-gray);
  border-radius: 6px;
  border: 1px solid var(--nu-medium-gray);
  font-size: 0.94rem;
}
.nu-check-box {
  width: 18px;
  height: 18px;
  border: 2px solid var(--nu-blue);
  border-radius: 3px;
  margin-right: 12px;
  flex-shrink: 0;
  margin-top: 2px;
  background: var(--nu-white);
}

/* ══ FOOTER ══ */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.9);
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
  letter-spacing: 0.03em;
}
.nu-footer-contact {
  font-size: 0.92rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.85);
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
}
.nu-footer-contact a:hover { text-decoration: underline; }
.nu-footer-meta {
  margin-top: 18px;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.05em;
}

/* ══ RESPONSIVE ══ */
@media (max-width: 860px) {
  .nu-header { padding: 50px 20px 70px; min-height: 240px; }
  .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1rem; }
  .nu-title-h1 { font-size: 1.9rem; }
  .nu-container { padding: 40px 22px; }
  .nu-two-col, .nu-leverage-grid { grid-template-columns: 1fr; }
  .nu-anchor-grid { grid-template-columns: 1fr; gap: 14px; }
  .nu-anchor-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.18); padding-bottom: 14px; }
  .nu-anchor-item:last-child { border-bottom: none; }
  .nu-badge { clip-path: none; border-radius: 8px; padding: 16px 20px; }
}

@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-card, .nu-leverage { box-shadow: none; }
  .nu-anchor-band, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
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
  <div class="nu-doc-badge">Confidential · Negotiation Strategy</div>
</header>

<!-- CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <!-- TITLE -->
    <div class="nu-title-block">
      <div class="nu-title-eyebrow">Estate Acquisition · Private &amp; Confidential</div>
      <h1 class="nu-title-h1">4505 <span>Buttewoods</span> — 7,098 Sq Ft Estate</h1>
      <p class="nu-title-sub">Negotiation playbook prepared for Aaron C. Norris. This document outlines the target terms, leverage points, counter-offer ladder, and discussion scripts for an offer-based acquisition of the 4505 Buttewoods estate.</p>
    </div>

    <!-- PROPERTY SNAPSHOT -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-summary-grid">
        <div class="nu-summary-card">
          <div class="nu-summary-label">Address</div>
          <div class="nu-summary-value">4505 Buttewoods</div>
          <div class="nu-summary-sub">Residential Estate</div>
        </div>
        <div class="nu-summary-card">
          <div class="nu-summary-label">Living Area</div>
          <div class="nu-summary-value">7,098 sq ft</div>
          <div class="nu-summary-sub">Above-grade heated</div>
        </div>
        <div class="nu-summary-card">
          <div class="nu-summary-label">Target Offer</div>
          <div class="nu-summary-value">$900,000</div>
          <div class="nu-summary-sub">Initial written offer</div>
        </div>
        <div class="nu-summary-card">
          <div class="nu-summary-label">Walk-Away</div>
          <div class="nu-summary-value">$1,050,000</div>
          <div class="nu-summary-sub">Ceiling · cash deal terms</div>
        </div>
        <div class="nu-summary-card">
          <div class="nu-summary-label">$/Sq Ft Target</div>
          <div class="nu-summary-value">$126.80</div>
          <div class="nu-summary-sub">At $900K offer price</div>
        </div>
        <div class="nu-summary-card">
          <div class="nu-summary-label">Close Window</div>
          <div class="nu-summary-value">30–45 Days</div>
          <div class="nu-summary-sub">Cash · no financing contingency</div>
        </div>
      </div>
    </section>

    <!-- OBJECTIVE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objective</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-card">
        <h3>Primary Goal</h3>
        <p>Secure 4505 Buttewoods at or below <strong>$975,000</strong> with seller-paid title insurance, a 30–45 day cash close, and a 10-day inspection window that preserves full right of withdrawal. The estate will serve as a long-hold personal residence; no resale pressure, which allows patience and price discipline.</p>
        <h3 style="margin-top:22px;">Decision Framework</h3>
        <ul>
          <li><strong>Green — proceed to contract:</strong> $900K–$975K, clean title, no major structural findings.</li>
          <li><strong>Yellow — pause and re-evaluate:</strong> $975K–$1,050K or inspection items $25K+.</li>
          <li><strong>Red — walk away:</strong> above $1,050K, unresolved title clouds, or foundation/moisture findings that exceed $75K to cure.</li>
        </ul>
      </div>
    </section>

    <!-- FOUR PILLARS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Four</span> <span class="rest">Strategy Pillars</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-strategy-list">
        <div class="nu-badge">
          <span class="nu-badge-num">1</span>
          <div class="nu-badge-text">
            <strong>Anchor Low</strong>
            <span>Open with $900K supported by written comps and carrying-cost analysis — not as a lowball, but as a defensible, documented position.</span>
          </div>
        </div>
        <div class="nu-badge">
          <span class="nu-badge-num">2</span>
          <div class="nu-badge-text">
            <strong>Lead With Certainty</strong>
            <span>Cash, proof of funds attached, no financing or sale-of-current-home contingency. Certainty of close is worth 3–5% to the seller.</span>
          </div>
        </div>
        <div class="nu-badge">
          <span class="nu-badge-num">3</span>
          <div class="nu-badge-text">
            <strong>Trade Terms, Not Just Price</strong>
            <span>Seller credits for repairs, seller-paid title, flexible closing date, or post-close occupancy are all negotiable currency with zero carry cost to us.</span>
          </div>
        </div>
        <div class="nu-badge">
          <span class="nu-badge-num">4</span>
          <div class="nu-badge-text">
            <strong>Patience Is Leverage</strong>
            <span>The longer the property sits, the more days-on-market pressure works in our favor. There is no rush. Every two weeks we do not respond is a price concession we can request.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICE ANCHOR BAND -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-anchor-band">
        <div class="nu-anchor-grid">
          <div class="nu-anchor-item">
            <div class="nu-anchor-label">Opening Offer</div>
            <div class="nu-anchor-value">$900,000</div>
            <div class="nu-anchor-note">Day 1 · written · 72-hr response</div>
          </div>
          <div class="nu-anchor-item">
            <div class="nu-anchor-label">Stretch Target</div>
            <div class="nu-anchor-value">$975,000</div>
            <div class="nu-anchor-note">Acceptable close price</div>
          </div>
          <div class="nu-anchor-item">
            <div class="nu-anchor-label">Absolute Ceiling</div>
            <div class="nu-anchor-value">$1,050,000</div>
            <div class="nu-anchor-note">Walk if exceeded</div>
          </div>
        </div>
      </div>

      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>Round</th>
              <th>Our Move</th>
              <th>Price</th>
              <th class="num">$/Sq Ft</th>
              <th>Trigger Terms</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Opening offer, written</td>
              <td>$900,000</td>
              <td class="num">$126.80</td>
              <td>Cash · 10-day inspection · 30-day close</td>
              <td><span class="tag tag-ok">Anchor</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td>First counter from seller</td>
              <td>$925,000</td>
              <td class="num">$130.32</td>
              <td>Request seller-paid title + survey</td>
              <td><span class="tag tag-warn">Soft</span></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Second counter — hold firm</td>
              <td>$950,000</td>
              <td class="num">$133.84</td>
              <td>Hold line · 48-hr expiration on next reply</td>
              <td><span class="tag tag-warn">Firm</span></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Stretch close</td>
              <td>$975,000</td>
              <td class="num">$137.36</td>
              <td>Trade up only if seller concedes title + credits</td>
              <td><span class="tag tag-hot">Final</span></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Ceiling — last offer</td>
              <td>$1,050,000</td>
              <td class="num">$147.93</td>
              <td>Only with inspection credits of $25K+ back</td>
              <td><span class="tag tag-hot">Walk point</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="nu-callout">
        <div class="nu-callout-head">Discipline Rule</div>
        <p>Do not move up the ladder faster than the seller moves down. If the seller countered from their list price by $10K, we step up $10K — not $25K. The cadence of concessions teaches the other side how we value dollars.</p>
      </div>
    </section>

    <!-- LEVERAGE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Map</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-leverage-grid">
        <div class="nu-leverage pro">
          <h4>Working For Us</h4>
          <ul>
            <li>Cash offer — no lender, no appraisal contingency, no 45-day underwriting risk.</li>
            <li>Proof of funds attached to offer removes any question of buyer capacity.</li>
            <li>No contingent sale — we are not tied to moving another property first.</li>
            <li>No emotional attachment — we can walk, and the seller knows it.</li>
            <li>Flexible on closing date — allows us to trade timing for price.</li>
            <li>Willingness to waive minor repair requests in exchange for dollar credits.</li>
            <li>Professional, documented process signals a serious, low-friction counterparty.</li>
          </ul>
        </div>
        <div class="nu-leverage risk">
          <h4>Working Against Us</h4>
          <ul>
            <li>7,098 sq ft is a narrow buyer pool — but the seller knows that too.</li>
            <li>Seller may have pride-of-ownership pricing disconnected from market comps.</li>
            <li>Possible multiple-offer scenario — we must be ready with a best-and-final.</li>
            <li>Carrying cost for us is real — taxes, insurance, utilities after close.</li>
            <li>Local market comps at this price point are thin — price discovery takes effort.</li>
            <li>Potential hidden condition issues (roof, HVAC, foundation) on a large estate.</li>
            <li>Seller's agent may be pressing the listing price hard for commission reasons.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- TERMS TO TRADE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Terms</span> <span class="rest">to Trade</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-two-col">
        <div class="nu-card">
          <h3>Things We Can Give</h3>
          <ul>
            <li><strong>Fast close:</strong> 21 days instead of 45 if they need liquidity.</li>
            <li><strong>Slow close:</strong> 60 days if they need time to find a next home.</li>
            <li><strong>Rent-back:</strong> 30–60 day post-close occupancy at no rent.</li>
            <li><strong>As-is waiver on cosmetic items:</strong> carpet, paint, minor finishes.</li>
            <li><strong>Earnest money:</strong> 2–3% hard at signing signals commitment.</li>
            <li><strong>Private, off-market close:</strong> avoids further listing exposure.</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Things We Want</h3>
          <ul>
            <li><strong>Price:</strong> at or below $975,000 final.</li>
            <li><strong>Seller-paid owner's title insurance</strong> and survey.</li>
            <li><strong>Home warranty</strong> — 1 year, seller-paid premium.</li>
            <li><strong>10-day inspection period</strong> with full right of withdrawal.</li>
            <li><strong>Repair credits</strong> — cash at close for any findings over $5K.</li>
            <li><strong>Appliance / fixture inventory</strong> attached and binding.</li>
            <li><strong>Disclosure on all prior foundation / water / roof work.</strong></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Timeline</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-timeline">
        <div class="nu-tl-item">
          <div class="nu-tl-phase">Phase 1 · Days 1–3</div>
          <div class="nu-tl-title">Preparation &amp; Intelligence</div>
          <div class="nu-tl-text">Pull 12-month comps within a 1-mile radius, tax assessment history, days-on-market for the listing, and any prior price reductions. Confirm proof of funds letter from bank is current and dated within 14 days. Quiet drive-by of the property at different times.</div>
        </div>
        <div class="nu-tl-item">
          <div class="nu-tl-phase">Phase 2 · Day 4</div>
          <div class="nu-tl-title">Submit Written Offer — $900,000</div>
          <div class="nu-tl-text">Delivered in writing with proof of funds. 72-hour response window. Short cover note from Aaron: direct, respectful, one page. No verbal offer first — everything in writing sets the tone.</div>
        </div>
        <div class="nu-tl-item">
          <div class="nu-tl-phase">Phase 3 · Days 5–10</div>
          <div class="nu-tl-title">Counter &amp; Conditional Hold</div>
          <div class="nu-tl-text">Receive seller counter. Respond with step 2 of ladder ($925K) only after 24-hour pause. Every reply shortens their next response window. Never counter within an hour of receiving theirs — it signals flexibility we do not want to telegraph.</div>
        </div>
        <div class="nu-tl-item">
          <div class="nu-tl-phase">Phase 4 · Days 10–14</div>
          <div class="nu-tl-title">Final Round · Best-and-Final</div>
          <div class="nu-tl-text">If seller does not accept by round 3, deliver best-and-final at $975K with 48-hour expiration. If declined, walk cleanly with door left open: "If circumstances change in the next 60 days, we remain a ready cash buyer at our last position."</div>
        </div>
        <div class="nu-tl-item">
          <div class="nu-tl-phase">Phase 5 · Days 15–45</div>
          <div class="nu-tl-title">Due Diligence &amp; Close</div>
          <div class="nu-tl-text">Upon acceptance: 10-day inspection window, title commitment review, final walk-through 48 hours before close. Wire funds day before close. Receive keys and recorded deed. Utilities, insurance, and homestead filing in first 7 days post-close.</div>
        </div>
      </div>
    </section>

    <!-- SCRIPTS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Talking</span> <span class="rest">Scripts</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-script">
        <em>Opening — to the seller's agent</em>
        "We appreciate the time you've taken to present the property. Our offer is written, it's cash, and it's backed by proof of funds attached. We've looked at this property carefully, we've looked at the comps, and $900,000 is where a documented buyer lands today. We are not here to go back and forth ten times — we're here to get to a deal that makes sense for both sides. We can close in 30 days or less."
      </div>

      <div class="nu-script">
        <em>When the seller rejects the opening offer</em>
        "Understood. We respect where they are. Rather than ping-pong prices, tell us what their absolute best number is — we will give it one serious look and respond with our absolute best back. That saves both sides a week of emails."
      </div>

      <div class="nu-script">
        <em>When the seller counters high</em>
        "I can appreciate the number they'd love to see. The market we can defend to our people tops out closer to $950K on this square footage. If they can meet us at $950K with seller-paid title and a one-year home warranty, we can sign today."
      </div>

      <div class="nu-script">
        <em>When the seller pushes hard on price</em>
        "Price is one dial. We have others. We can shorten the close to 21 days. We can offer a 60-day rent-back. We can waive cosmetic repair requests. Tell us which of those has value to them — we'll trade terms for a number that works."
      </div>

      <div class="nu-script">
        <em>At walk-away — $1,050K exceeded</em>
        "We've made our best offer. If the property sits for 60–90 more days and the seller reconsiders, we remain a ready cash buyer at the last number we offered. We wish them well. No hard feelings, and please keep our contact on file."
      </div>
    </section>

    <!-- INSPECTION RISK -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Inspection</span> <span class="rest">Risk Watchlist</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-card">
        <h3>High-Cost Items to Investigate First</h3>
        <ul>
          <li><strong>Foundation &amp; structural:</strong> 7,098 sq ft means long spans — any settlement is expensive. Structural engineer inspection, not just a general inspector.</li>
          <li><strong>Roof age and condition:</strong> replacement on a house this size can run $45K–$90K. Get current age from seller disclosure and confirm visually.</li>
          <li><strong>HVAC systems:</strong> likely multi-zone. Each unit is $8K–$15K replaced. Age, SEER rating, service history required.</li>
          <li><strong>Water intrusion:</strong> basement, crawlspace, around windows. Moisture meter during inspection. Prior insurance claims should be disclosed.</li>
          <li><strong>Electrical service and panel:</strong> large estates often need 400-amp service and updated panels. Any aluminum branch wiring is a hard stop.</li>
          <li><strong>Plumbing materials:</strong> polybutylene, galvanized, or cast iron under slab are all price-adjustment triggers.</li>
          <li><strong>Septic / sewer scope:</strong> camera the main line before removing the inspection contingency.</li>
          <li><strong>Pool, outbuildings, gates, irrigation:</strong> inspected separately, not under the general inspection.</li>
        </ul>
      </div>
    </section>

    <!-- PRE-FLIGHT CHECK -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-checklist">
        <div class="nu-check-item"><span class="nu-check-box"></span>Proof of funds letter, dated within 14 days</div>
        <div class="nu-check-item"><span class="nu-check-box"></span>12-month comparable sales pulled and annotated</div>
        <div class="nu-check-item"><span class="nu-check-box"></span>Tax assessment history reviewed (5 years)</div>
        <div class="nu-check-item"><span class="nu-check-box"></span>Days-on-market and prior price reductions logged</div>
        <div class="nu-check-item"><span class="nu-check-box"></span>Drive-by photos at two different times of day</div>
        <div class="nu-check-item"><span class="nu-check-box"></span>Title company and closing attorney selected</div>
        <div class="nu-check-item"><span class="nu-check-box"></span>Structural engineer on standby for inspection</div>
        <div class="nu-check-item"><span class="nu-check-box"></span>Insurance quote obtained at target price</div>
        <div class="nu-check-item"><span class="nu-check-box"></span>Walk-away number ($1,050K) written down and signed</div>
        <div class="nu-check-item"><span class="nu-check-box"></span>Offer letter drafted — one page, direct, in Aaron's voice</div>
        <div class="nu-check-item"><span class="nu-check-box"></span>Earnest money wire instructions pre-confirmed</div>
        <div class="nu-check-item"><span class="nu-check-box"></span>Phone script rehearsed for first seller response</div>
      </div>
    </section>

    <!-- CLOSING NOTE -->
    <section class="nu-section">
      <div class="nu-callout">
        <div class="nu-callout-head">Final Discipline</div>
        <p>Great negotiation is not about winning every round — it is about protecting the walk-away number. If the deal gets above $1,050K, this property becomes the wrong property. There are other estates. There is only one Aaron. Trade dollars for peace of mind, not the reverse.</p>
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
  <div class="nu-footer-meta">
    Confidential negotiation strategy — 4505 Buttewoods Estate · Prepared 2026-04-22
  </div>
</footer>

</body>
</html>