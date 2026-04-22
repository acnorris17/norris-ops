<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estate Acquisition Brief — 4505 Buttewoods — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { font-size: 16px; scroll-behavior: smooth; }
body {
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--nu-body-text);
  background: var(--nu-white);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* HEADER */
.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, #06D0FF 100%);
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
.nu-header * { position: relative; z-index: 2; }

.nu-phoenix-watermark {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  opacity: 0.07;
  z-index: 1;
  pointer-events: none;
}

.nu-logo-text {
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 3.2rem;
  color: var(--nu-white);
  letter-spacing: 0.35em;
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
  margin-bottom: 24px;
}
.nu-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.4rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
}

/* CHEVRON */
.nu-chevron {
  position: relative;
  height: 50px;
  margin-top: -50px;
  z-index: 10;
}
.nu-chevron svg { width: 100%; height: 50px; display: block; }

/* DOCUMENT META */
.nu-doc-meta {
  background: var(--nu-light-gray);
  padding: 18px 40px;
  border-bottom: 3px solid var(--nu-cyan);
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  font-size: 0.85rem;
  color: var(--nu-dark-text);
}
.nu-doc-meta strong { color: var(--nu-blue); font-weight: 700; }

/* CONTENT */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
  padding: 60px 40px;
}
.nu-container { max-width: 1100px; margin: 0 auto; }

.nu-section { margin-bottom: 56px; }

.nu-section-title {
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 8px;
  letter-spacing: 0.01em;
}
.nu-section-title .first-word { color: #0033cc; }
.nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

.nu-section-rule {
  width: 60px;
  height: 3px;
  background: var(--nu-cyan);
  margin-bottom: 24px;
}

/* HERO STRATEGIC SUMMARY */
.nu-strategic-summary {
  background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
  border-left: 5px solid var(--nu-blue);
  padding: 28px 32px;
  border-radius: 0 8px 8px 0;
  margin-bottom: 40px;
}
.nu-strategic-summary h3 {
  color: var(--nu-blue);
  font-weight: 900;
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.nu-strategic-summary p {
  font-size: 1.05rem;
  color: var(--nu-dark-text);
  line-height: 1.7;
}

/* PROPERTY CARD */
.nu-property-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  margin-bottom: 32px;
}
.nu-property-visual {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #0033cc 100%);
  color: var(--nu-white);
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.nu-property-visual::before {
  content: '';
  position: absolute;
  top: -50%; right: -30%;
  width: 100%; height: 200%;
  background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 60%);
}
.nu-property-visual > * { position: relative; z-index: 2; }
.nu-property-visual .label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--nu-cyan);
  margin-bottom: 8px;
  font-weight: 700;
}
.nu-property-visual .address {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 16px;
}
.nu-property-visual .sqft {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--nu-cyan);
  line-height: 1;
  margin-bottom: 4px;
}
.nu-property-visual .sqft-label {
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.85;
}

.nu-property-facts {
  padding: 32px;
  background: var(--nu-white);
}
.nu-fact-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--nu-medium-gray);
}
.nu-fact-row:last-child { border-bottom: none; }
.nu-fact-label {
  font-weight: 700;
  color: var(--nu-dark-text);
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}
.nu-fact-value {
  color: var(--nu-blue);
  font-weight: 900;
  font-size: 1rem;
  text-align: right;
}
.nu-fact-value.muted {
  color: var(--nu-body-text);
  font-weight: 400;
  font-style: italic;
  font-size: 0.9rem;
}

/* NEGOTIATION FRAMEWORK */
.nu-framework-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.nu-framework-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
}
.nu-framework-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 4px; height: 100%;
  background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
}
.nu-framework-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}
.nu-framework-number {
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-cyan);
  line-height: 1;
  margin-bottom: 8px;
  opacity: 0.9;
}
.nu-framework-title {
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--nu-blue);
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.nu-framework-body {
  font-size: 0.92rem;
  color: var(--nu-body-text);
  line-height: 1.6;
}

/* CHEVRON BADGES */
.nu-badge-list { margin-top: 16px; }
.nu-badge {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 14px 28px 14px 18px;
  margin-bottom: 12px;
  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
}
.nu-badge-icon {
  width: 28px; height: 28px;
  margin-right: 14px;
  flex-shrink: 0;
  fill: var(--nu-cyan);
}

/* TIMELINE */
.nu-timeline {
  position: relative;
  padding-left: 32px;
}
.nu-timeline::before {
  content: '';
  position: absolute;
  left: 8px; top: 8px; bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
}
.nu-timeline-item {
  position: relative;
  margin-bottom: 28px;
  padding-bottom: 4px;
}
.nu-timeline-item::before {
  content: '';
  position: absolute;
  left: -32px; top: 6px;
  width: 18px; height: 18px;
  background: var(--nu-white);
  border: 3px solid var(--nu-blue);
  border-radius: 50%;
  z-index: 2;
}
.nu-timeline-phase {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.nu-timeline-title {
  font-weight: 700;
  color: var(--nu-dark-text);
  font-size: 1.1rem;
  margin-bottom: 6px;
}
.nu-timeline-body {
  color: var(--nu-body-text);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* RISK TABLE */
.nu-risk-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.nu-risk-table th {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
  color: var(--nu-white);
  font-weight: 700;
  text-align: left;
  padding: 14px 18px;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.nu-risk-table td {
  padding: 16px 18px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.95rem;
  vertical-align: top;
}
.nu-risk-table tr:last-child td { border-bottom: none; }
.nu-risk-table tr:nth-child(even) td { background: var(--nu-light-gray); }
.nu-risk-level {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.nu-risk-level.high { background: #ffe5e5; color: #b30000; }
.nu-risk-level.med { background: #fff4d6; color: #8a6500; }
.nu-risk-level.low { background: #e0f5e9; color: #1a6b3a; }

/* CTA */
.nu-cta {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 50%, var(--nu-cyan) 100%);
  color: var(--nu-white);
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  margin-top: 40px;
}
.nu-cta h3 {
  font-weight: 900;
  font-size: 1.6rem;
  margin-bottom: 12px;
  letter-spacing: 0.02em;
}
.nu-cta p {
  font-size: 1.05rem;
  opacity: 0.95;
  max-width: 720px;
  margin: 0 auto 24px;
  line-height: 1.6;
}
.nu-btn-primary {
  display: inline-block;
  background: var(--nu-white);
  color: var(--nu-blue);
  padding: 14px 32px;
  border-radius: 4px;
  font-weight: 900;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease;
  margin: 6px;
}
.nu-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.2);
}
.nu-btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--nu-white);
  padding: 14px 32px;
  border: 2px solid var(--nu-white);
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease;
  margin: 6px;
}
.nu-btn-secondary:hover {
  background: var(--nu-white);
  color: var(--nu-blue);
}

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 50px 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.3rem;
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

/* RESPONSIVE */
@media (max-width: 768px) {
  .nu-header { padding: 40px 20px 60px; min-height: 200px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
  .nu-tagline { font-size: 1.1rem; }
  .nu-content-area { padding: 40px 20px; }
  .nu-property-card { grid-template-columns: 1fr; }
  .nu-property-visual .address { font-size: 1.5rem; }
  .nu-property-visual .sqft { font-size: 2.6rem; }
  .nu-badge { clip-path: none; border-radius: 8px; }
  .nu-doc-meta { padding: 14px 20px; gap: 14px; font-size: 0.78rem; }
  .nu-risk-table th, .nu-risk-table td { padding: 10px 12px; font-size: 0.85rem; }
  .nu-cta { padding: 28px 20px; }
  .nu-cta h3 { font-size: 1.3rem; }
}

@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-cta, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-framework-card, .nu-property-card { box-shadow: none; border: 1px solid #ccc; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
  </svg>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
</header>

<!-- CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<!-- DOC META -->
<div class="nu-doc-meta">
  <div><strong>Document:</strong> Estate Acquisition Brief</div>
  <div><strong>Property:</strong> 4505 Buttewoods</div>
  <div><strong>Prepared:</strong> April 21, 2026</div>
  <div><strong>Owner:</strong> Aaron C. Norris</div>
  <div><strong>Status:</strong> Negotiation Phase</div>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <!-- STRATEGIC SUMMARY -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Strategic</span> <span class="rest">Summary</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-strategic-summary">
        <h3>Action Item — From reMarkable Notebook</h3>
        <p>Negotiate purchase of the 7,098 sq ft estate located at 4505 Buttewoods. This document captures the negotiation framework, key facts, target price logic, contingencies, and the sequenced playbook to move from initial position to executed purchase agreement without losing leverage.</p>
      </div>
    </section>

    <!-- PROPERTY -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Property</span> <span class="rest">Snapshot</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-property-card">
        <div class="nu-property-visual">
          <div class="label">Subject Property</div>
          <div class="address">4505 Buttewoods</div>
          <div class="sqft">7,098</div>
          <div class="sqft-label">Square Feet — Heated &amp; Cooled</div>
        </div>
        <div class="nu-property-facts">
          <div class="nu-fact-row">
            <div class="nu-fact-label">Property Class</div>
            <div class="nu-fact-value">Estate Residential</div>
          </div>
          <div class="nu-fact-row">
            <div class="nu-fact-label">Living Area</div>
            <div class="nu-fact-value">7,098 sq ft</div>
          </div>
          <div class="nu-fact-row">
            <div class="nu-fact-label">Address</div>
            <div class="nu-fact-value">4505 Buttewoods</div>
          </div>
          <div class="nu-fact-row">
            <div class="nu-fact-label">Acquisition Type</div>
            <div class="nu-fact-value">Direct Negotiation</div>
          </div>
          <div class="nu-fact-row">
            <div class="nu-fact-label">List Price</div>
            <div class="nu-fact-value muted">To be confirmed with seller</div>
          </div>
          <div class="nu-fact-row">
            <div class="nu-fact-label">Comparable Sales Pulled</div>
            <div class="nu-fact-value muted">Pending — order from agent</div>
          </div>
        </div>
      </div>

      <div class="nu-badge-list">
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z"/></svg>
          7,098 sq ft — measured living area is the anchor metric for every dollar discussion
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
          Estate-class transaction — requires title work, survey, and inspection contingencies
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          Single-buyer position — preserve leverage; no public bidding posture
        </div>
      </div>
    </section>

    <!-- NEGOTIATION FRAMEWORK -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Framework</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-framework-grid">
        <div class="nu-framework-card">
          <div class="nu-framework-number">01</div>
          <div class="nu-framework-title">Establish Anchor</div>
          <div class="nu-framework-body">Open below the price-per-square-foot of the three lowest comparable sales in a one-mile radius over the last twelve months. The 7,098 sq ft figure is the multiplier — every dollar moves the total by $7,098.</div>
        </div>
        <div class="nu-framework-card">
          <div class="nu-framework-number">02</div>
          <div class="nu-framework-title">Discover Motivation</div>
          <div class="nu-framework-body">Why is the seller selling, and what is their timeline? Estate-class sales often hinge on closing date, leaseback flexibility, or personal property carve-outs — not just headline price.</div>
        </div>
        <div class="nu-framework-card">
          <div class="nu-framework-number">03</div>
          <div class="nu-framework-title">Stack Contingencies</div>
          <div class="nu-framework-body">Inspection, financing (or proof of funds), survey, title, and HOA/restriction review. Each contingency is a real protection and a legitimate price-discovery lever.</div>
        </div>
        <div class="nu-framework-card">
          <div class="nu-framework-number">04</div>
          <div class="nu-framework-title">Reserve the Walk</div>
          <div class="nu-framework-body">Set a hard maximum before the first conversation. Write it down. The willingness to walk away is the only true negotiating power; everything else is theater.</div>
        </div>
        <div class="nu-framework-card">
          <div class="nu-framework-number">05</div>
          <div class="nu-framework-title">Concede Slowly</div>
          <div class="nu-framework-body">Move in shrinking increments — never round numbers. A move from offer to $X,250 signals math; a move to $X,000 signals capitulation. Each concession asks for one in return.</div>
        </div>
        <div class="nu-framework-card">
          <div class="nu-framework-number">06</div>
          <div class="nu-framework-title">Close in Writing</div>
          <div class="nu-framework-body">Verbal alignment is not a deal. Move to LOI within 24 hours of price agreement, then to purchase agreement within 5 business days. Momentum favors the buyer who is ready.</div>
        </div>
      </div>
    </section>

    <!-- PLAYBOOK / TIMELINE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Playbook</span> <span class="rest">— Sequenced Steps</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-timeline">
        <div class="nu-timeline-item">
          <div class="nu-timeline-phase">Phase 1 — Intelligence</div>
          <div class="nu-timeline-title">Order full comp set and ownership history</div>
          <div class="nu-timeline-body">Pull last 24 months of estate-class sales above 5,000 sq ft within a one-mile radius. Confirm seller's deed history, current mortgage if public, length of ownership, and any prior listing history. Without this, every number is a guess.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-phase">Phase 2 — Position</div>
          <div class="nu-timeline-title">Set walk-away ceiling and opening anchor</div>
          <div class="nu-timeline-body">Write the maximum acceptable price, the opening offer, and the three intermediate landing points on a single page. Sign and date it. This document never changes mid-negotiation under emotional pressure.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-phase">Phase 3 — Contact</div>
          <div class="nu-timeline-title">Open the conversation in person or by phone</div>
          <div class="nu-timeline-body">First contact is for relationship and motivation discovery — not price. Listen 80%, talk 20%. End the call with a scheduled follow-up, not a number.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-phase">Phase 4 — Offer</div>
          <div class="nu-timeline-title">Submit written offer with proof of funds</div>
          <div class="nu-timeline-body">Written offer carries 10× the weight of a verbal one. Include earnest money, target close date, and a 72-hour response window to create gentle urgency without ultimatum.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-phase">Phase 5 — Negotiate</div>
          <div class="nu-timeline-title">Counter, hold, and close</div>
          <div class="nu-timeline-body">Expect 2–3 counter rounds. Concede shrinking dollar amounts. Trade price for terms wherever the seller values terms more — close date, repair credits, fixtures included, leaseback period.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-phase">Phase 6 — Execute</div>
          <div class="nu-timeline-title">Inspection, title, survey, close</div>
          <div class="nu-timeline-body">Use the contingency period to verify everything claimed. Material defects re-open price discussion. Clear title and clean survey are non-negotiable. Fund and record on the agreed date.</div>
        </div>
      </div>
    </section>

    <!-- RISK TABLE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Risk</span> <span class="rest">Register</span></h2>
      <div class="nu-section-rule"></div>

      <table class="nu-risk-table">
        <thead>
          <tr>
            <th>Risk</th>
            <th>Level</th>
            <th>Mitigation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seller anchors high; refuses to move from list</td>
            <td><span class="nu-risk-level high">High</span></td>
            <td>Present comp set in writing; offer terms-for-price trade (faster close, fewer contingencies, leaseback).</td>
          </tr>
          <tr>
            <td>Hidden defect discovered at inspection</td>
            <td><span class="nu-risk-level med">Medium</span></td>
            <td>Inspection contingency in offer. Use written estimates from licensed contractors as basis for price reduction or repair credit.</td>
          </tr>
          <tr>
            <td>Title cloud, easement, or boundary dispute</td>
            <td><span class="nu-risk-level med">Medium</span></td>
            <td>Order title commitment and current survey within 5 days of contract. Clear all exceptions before funding; do not waive.</td>
          </tr>
          <tr>
            <td>Competing buyer enters during negotiation</td>
            <td><span class="nu-risk-level med">Medium</span></td>
            <td>Move from verbal to written quickly. Earnest money speaks louder than promises. Stay disciplined to the walk-away ceiling.</td>
          </tr>
          <tr>
            <td>Financing or appraisal gap on 7,098 sq ft asset</td>
            <td><span class="nu-risk-level med">Medium</span></td>
            <td>Confirm lender comfort with estate-class sq ft before offering. If cash, use proof-of-funds as price leverage.</td>
          </tr>
          <tr>
            <td>Emotional escalation drives over-offering</td>
            <td><span class="nu-risk-level low">Low</span></td>
            <td>Walk-away ceiling is written and signed before first contact. Sleep on every counter above the prior round. No same-day yes.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- DECISION CHECKLIST -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Decision</span> <span class="rest">Checklist</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-badge-list">
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          Comparable sales pulled and reviewed (last 24 months, 1-mile radius, 5,000+ sq ft)
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          Walk-away ceiling written, signed, and dated before first contact
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          Proof of funds or pre-approval letter ready to attach to offer
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          Real estate attorney engaged for purchase agreement review
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          Title company and inspector identified and on standby
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          Seller motivation, timeline, and constraints documented before first offer
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="nu-cta">
      <h3>Next Action — Pull the Comp Set</h3>
      <p>The negotiation does not begin with an offer. It begins with comparable sales data for estate-class properties at or near 7,098 sq ft within a one-mile radius. Without that anchor, every number on the table is a guess. Order it today.</p>
      <a href="tel:2055001343" class="nu-btn-primary">Call 205-500-1343</a>
      <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20—%20Negotiation%20Update" class="nu-btn-secondary">Email Update</a>
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