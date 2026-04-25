<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>4505 Buttewoods Estate — Acquisition Strategy — Norris Utilities®</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap');

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
  --nu-success: #1B7F3A;
  --nu-warn: #B8860B;
  --nu-danger: #B22222;
  --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-italic: 'Playfair Display', Georgia, serif;
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
  background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 28%, #0066EE 55%, #00AAFF 80%, #06D0FF 100%);
  padding: 60px 40px 90px;
  text-align: center;
  overflow: hidden;
  min-height: 320px;
}
.nu-header::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
  z-index: 1;
  opacity: 0.7;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -50%; right: -20%;
  width: 80%; height: 200%;
  background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
  z-index: 1;
}
.nu-header-inner { position: relative; z-index: 2; }

.nu-phoenix-icon {
  width: 72px; height: 72px;
  margin: 0 auto 14px;
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
  opacity: 0.95;
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
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.2rem;
  color: var(--nu-white);
  letter-spacing: 0.7em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.nu-tagline {
  font-family: var(--font-italic);
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
}
.nu-doc-label {
  margin-top: 22px;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.4em;
  color: var(--nu-cyan);
  text-transform: uppercase;
}

/* CHEVRON */
.nu-chevron {
  position: relative;
  height: 56px;
  margin-top: -56px;
  z-index: 10;
}
.nu-chevron svg { width: 100%; height: 56px; display: block; }

/* CONTENT */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
  overflow: hidden;
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 240px; left: 50%;
  transform: translateX(-50%);
  width: 65%; max-width: 800px; aspect-ratio: 1;
  background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-wrap {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 60px 40px 80px;
}

/* TITLE BLOCK */
.title-block {
  border-left: 6px solid var(--nu-blue);
  padding: 8px 0 8px 24px;
  margin-bottom: 36px;
}
.title-block h1 {
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-dark-text);
  line-height: 1.15;
  letter-spacing: -0.01em;
}
.title-block h1 span { color: var(--nu-blue); }
.title-block .sub {
  margin-top: 8px;
  font-size: 1.05rem;
  color: #555;
  font-weight: 400;
}
.title-block .meta {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.title-block .meta span strong { color: var(--nu-blue-deep); }

/* SECTION */
.nu-section { margin-bottom: 44px; }
.nu-section-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 18px;
  letter-spacing: 0.01em;
}
.nu-section-title .lead { color: var(--nu-blue-deep); }
.nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
.nu-section-rule {
  height: 3px;
  width: 60px;
  background: linear-gradient(90deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
  margin-bottom: 22px;
  border-radius: 2px;
}

/* PROPERTY HERO */
.property-hero {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 28px;
  background: linear-gradient(135deg, var(--nu-light-gray) 0%, #FFFFFF 100%);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 18px rgba(0,0,51,0.06);
}
.property-hero h2 {
  font-weight: 900;
  font-size: 1.6rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.property-hero .addr {
  font-weight: 700;
  font-size: 1rem;
  color: var(--nu-blue-deep);
  margin-bottom: 18px;
}
.property-hero p { font-size: 0.97rem; color: var(--nu-body-text); margin-bottom: 12px; }
.fact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
.fact {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-left: 4px solid var(--nu-cyan);
  padding: 14px 16px;
  border-radius: 6px;
}
.fact .label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #777;
  margin-bottom: 4px;
}
.fact .value {
  font-weight: 900;
  font-size: 1.15rem;
  color: var(--nu-dark-text);
}
.fact .value.blue { color: var(--nu-blue); }

/* VALUATION */
.valuation-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.val-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  padding: 22px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.val-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
}
.val-card .tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 10px;
  border-radius: 99px;
  margin-bottom: 12px;
}
.val-card.ask .tag { background: rgba(178,34,34,0.1); color: var(--nu-danger); }
.val-card.target .tag { background: rgba(0,0,255,0.1); color: var(--nu-blue); }
.val-card.walk .tag { background: rgba(27,127,58,0.12); color: var(--nu-success); }
.val-card .amt {
  font-weight: 900;
  font-size: 2rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
  letter-spacing: -0.02em;
}
.val-card .ppsf {
  font-size: 0.88rem;
  color: #666;
  margin-bottom: 10px;
}
.val-card .note {
  font-size: 0.88rem;
  color: var(--nu-body-text);
  line-height: 1.5;
}

/* LEVERAGE LIST */
.leverage-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.lev-block {
  background: var(--nu-white);
  border-radius: 10px;
  border: 1px solid var(--nu-medium-gray);
  padding: 22px 24px;
}
.lev-block.pro { border-top: 4px solid var(--nu-success); }
.lev-block.con { border-top: 4px solid var(--nu-danger); }
.lev-block h3 {
  font-weight: 900;
  font-size: 1.1rem;
  margin-bottom: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.lev-block.pro h3 { color: var(--nu-success); }
.lev-block.con h3 { color: var(--nu-danger); }
.lev-block ul { list-style: none; padding: 0; }
.lev-block li {
  padding: 8px 0 8px 22px;
  position: relative;
  font-size: 0.94rem;
  border-bottom: 1px solid var(--nu-medium-gray);
}
.lev-block li:last-child { border-bottom: none; }
.lev-block li::before {
  position: absolute; left: 0; top: 8px;
  font-weight: 900;
  font-size: 1rem;
}
.lev-block.pro li::before { content: '+'; color: var(--nu-success); }
.lev-block.con li::before { content: '−'; color: var(--nu-danger); }
.lev-block li strong { color: var(--nu-dark-text); }

/* STRATEGY STEPS */
.strategy-steps { counter-reset: step; }
.step {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 18px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  padding: 22px 24px;
  margin-bottom: 14px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  align-items: start;
}
.step-num {
  width: 48px; height: 48px;
  background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
  color: var(--nu-white);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900;
  font-size: 1.2rem;
  box-shadow: 0 4px 10px rgba(0,0,255,0.25);
}
.step h4 {
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
  letter-spacing: 0.01em;
}
.step .when {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--nu-blue-deep);
  background: rgba(0,51,204,0.08);
  padding: 3px 8px;
  border-radius: 99px;
  margin-left: 8px;
}
.step p { font-size: 0.94rem; color: var(--nu-body-text); }
.step p + p { margin-top: 6px; }

/* SCRIPT BOX */
.script-box {
  background: linear-gradient(135deg, #FAFAFC 0%, #F0F2F8 100%);
  border-left: 4px solid var(--nu-blue);
  border-radius: 0 8px 8px 0;
  padding: 22px 26px;
  margin: 14px 0;
  font-style: italic;
  font-size: 0.97rem;
  color: var(--nu-dark-text);
  line-height: 1.7;
}
.script-box::before {
  content: '"';
  font-family: Georgia, serif;
  font-size: 3rem;
  line-height: 0.5;
  color: var(--nu-cyan);
  margin-right: 6px;
  vertical-align: -8px;
  font-weight: 700;
}
.script-box .speaker {
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #777;
  margin-top: 10px;
}

/* FINANCING TABLE */
.fin-table-wrap { overflow-x: auto; border-radius: 10px; border: 1px solid var(--nu-medium-gray); }
.fin-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  font-size: 0.92rem;
}
.fin-table thead th {
  background: linear-gradient(135deg, var(--nu-navy) 0%, var(--nu-blue-deep) 100%);
  color: var(--nu-white);
  text-align: left;
  padding: 14px 16px;
  font-weight: 700;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.fin-table tbody td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--nu-medium-gray);
}
.fin-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
.fin-table tbody tr:last-child td { border-bottom: none; }
.fin-table .num { font-weight: 700; color: var(--nu-dark-text); white-space: nowrap; }
.fin-table .total { background: rgba(0,0,255,0.04) !important; }
.fin-table .total td { font-weight: 900; color: var(--nu-blue-deep); }

/* DEAL BREAKERS */
.breaker-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.breaker {
  background: rgba(178,34,34,0.05);
  border: 1px solid rgba(178,34,34,0.2);
  border-left: 4px solid var(--nu-danger);
  border-radius: 6px;
  padding: 14px 16px;
}
.breaker .label {
  display: block;
  font-weight: 900;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--nu-danger);
  margin-bottom: 4px;
}
.breaker p { font-size: 0.9rem; color: var(--nu-body-text); }

/* ACTION CALLOUT */
.action-callout {
  background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-blue-deep) 50%, var(--nu-cyan) 100%);
  color: var(--nu-white);
  border-radius: 12px;
  padding: 32px 36px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0,0,255,0.2);
}
.action-callout h3 {
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 8px;
}
.action-callout p {
  font-size: 0.98rem;
  opacity: 0.95;
  max-width: 640px;
}
.action-callout .actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
}
.btn-white {
  background: var(--nu-white);
  color: var(--nu-blue);
}
.btn-white:hover { transform: translateY(-1px); box-shadow: 0 6px 14px rgba(0,0,0,0.2); }
.btn-outline {
  border: 2px solid var(--nu-white);
  color: var(--nu-white);
}
.btn-outline:hover { background: var(--nu-white); color: var(--nu-blue); }

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 44px 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: var(--font-italic);
  font-style: italic;
  font-size: 1.25rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
  letter-spacing: 0.03em;
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
.nu-footer .fine {
  margin-top: 18px;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.05em;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .property-hero { grid-template-columns: 1fr; }
  .valuation-grid { grid-template-columns: 1fr; }
  .leverage-grid { grid-template-columns: 1fr; }
  .breaker-list { grid-template-columns: 1fr; }
  .action-callout { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .nu-header { padding: 40px 20px 70px; min-height: 240px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-wrap { padding: 40px 20px 60px; }
  .title-block h1 { font-size: 1.7rem; }
  .step { grid-template-columns: 48px 1fr; gap: 12px; padding: 18px; }
  .step-num { width: 40px; height: 40px; font-size: 1rem; }
  .fact-grid { grid-template-columns: 1fr; }
}

@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .val-card, .step, .lev-block { box-shadow: none; break-inside: avoid; }
  .action-callout { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
}
</style>
</head>
<body>

<header class="nu-header">
  <div class="nu-header-inner">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal · Acquisition Strategy</div>
  </div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L548,56 L1440,0 L1440,56 L0,56 Z" fill="white"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="nu-wrap">

    <div class="title-block">
      <h1><span>Negotiation Playbook</span> — 4505 Buttewoods Estate Acquisition</h1>
      <div class="sub">7,098 sq ft estate · structured offer strategy, leverage points, walk-away discipline.</div>
      <div class="meta">
        <span><strong>Prepared for:</strong> Aaron C. Norris</span>
        <span><strong>Property:</strong> 4505 Buttewoods</span>
        <span><strong>Status:</strong> Pre-Offer Strategy</span>
        <span><strong>Action By:</strong> Set inspection + draft LOI</span>
      </div>
    </div>

    <!-- PROPERTY HERO -->
    <section class="nu-section">
      <div class="property-hero">
        <div>
          <h2>The Property</h2>
          <div class="addr">4505 Buttewoods · 7,098 sq ft estate</div>
          <p>This is a substantial estate-class property — large enough to function as a primary residence, a multi-generational compound, or a hybrid residence/operations base. At ~7,098 sq ft, the home sits in a tier where buyer pool is thin and carrying cost is high. That is the source of our negotiating leverage.</p>
          <p>The objective is not the listed price. The objective is the right deal for the long term — terms that absorb roof, HVAC, foundation, and any deferred maintenance that an estate of this size will inevitably reveal during inspection.</p>
        </div>
        <div class="fact-grid">
          <div class="fact">
            <div class="label">Living Area</div>
            <div class="value">7,098 sq ft</div>
          </div>
          <div class="fact">
            <div class="label">Property Type</div>
            <div class="value">Estate / SFR</div>
          </div>
          <div class="fact">
            <div class="label">Location</div>
            <div class="value blue">4505 Buttewoods</div>
          </div>
          <div class="fact">
            <div class="label">Buyer Pool Size</div>
            <div class="value">Thin (advantage: us)</div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUATION TIERS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="lead">Offer</span> <span class="rest">Tiers — Anchor, Target, Walk</span></h2>
      <div class="nu-section-rule"></div>
      <p style="margin-bottom: 20px; font-size: 0.97rem;">Three numbers must be locked in writing <strong>before any conversation with the seller or listing agent</strong>. Never cross the walk number, regardless of emotion or sunk-cost feeling. The target is the deal we sign; the anchor opens the negotiation.</p>
      <div class="valuation-grid">
        <div class="val-card ask">
          <span class="tag">Opening Anchor</span>
          <div class="amt">List −12%</div>
          <div class="ppsf">Initial written offer</div>
          <p class="note">Justified in writing by inspection scope (estates this size always have deferred items), thin comparable buyer pool, and current carrying-cost pressure on seller.</p>
        </div>
        <div class="val-card target">
          <span class="tag">Target — Sign Here</span>
          <div class="amt">List −7%</div>
          <div class="ppsf">Acceptable settlement zone</div>
          <p class="note">The number we walk into closing with after concessions, repair credits, or seller-paid closing costs are stacked back onto a higher gross price.</p>
        </div>
        <div class="val-card walk">
          <span class="tag">Hard Walk</span>
          <div class="amt">List −4%</div>
          <div class="ppsf">Above this = pass</div>
          <p class="note">Above this number, the math no longer works against carrying costs, capex reserve, and opportunity cost on Norris Utilities® capital. We walk and revisit in 60 days.</p>
        </div>
      </div>
    </section>

    <!-- LEVERAGE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="lead">Leverage</span> <span class="rest">Map — Use What You Have</span></h2>
      <div class="nu-section-rule"></div>
      <div class="leverage-grid">
        <div class="lev-block pro">
          <h3>Our Leverage</h3>
          <ul>
            <li><strong>Thin buyer pool.</strong> Estates over 7,000 sq ft sit longer than median inventory — every week on market is pressure on seller.</li>
            <li><strong>Carrying cost.</strong> Property tax, insurance, utilities, and lawn on 7,098 sq ft is meaningful monthly drag.</li>
            <li><strong>Cash or quick-close credibility.</strong> A clean financing letter or cash-equivalent posture beats a higher offer with shaky terms.</li>
            <li><strong>No contingency chain.</strong> If we are not selling another property to fund this, we say so loudly — sellers value certainty.</li>
            <li><strong>Inspection scope.</strong> Estate roofs, HVAC zones, foundation, and pools are predictable concession sources.</li>
          </ul>
        </div>
        <div class="lev-block con">
          <h3>Seller's Leverage</h3>
          <ul>
            <li><strong>Emotional anchoring.</strong> Owners of estate properties often anchor to a cost-basis or memory-value, not a market value.</li>
            <li><strong>Listing agent posture.</strong> Agent paid on price will resist concessions — do not let them frame the conversation.</li>
            <li><strong>Comparable sales.</strong> If a recent estate in the same submarket closed strong, seller will cite it. We must have our own comp set ready.</li>
            <li><strong>Patience.</strong> If the seller has no carrying-cost pain, time is on their side. Verify before assuming pressure.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- STRATEGY STEPS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="lead">Negotiation</span> <span class="rest">Sequence — Step by Step</span></h2>
      <div class="nu-section-rule"></div>
      <div class="strategy-steps">

        <div class="step">
          <div class="step-num">1</div>
          <div>
            <h4>Diligence Before Dialogue <span class="when">Days 1–3</span></h4>
            <p>Pull tax record, prior listing history, days-on-market, and any prior price reductions. Pull last 6 estate-class comparable sales within 5 miles. Map the seller's likely motivation: relocation, downsizing, estate settlement, or financial pressure.</p>
            <p><strong>Do not skip.</strong> Every number we say in negotiation must trace back to a written comp or document.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">2</div>
          <div>
            <h4>Lock the Three Numbers in Writing <span class="when">Day 3</span></h4>
            <p>Anchor, target, walk — written down, dated, signed by Aaron. Stored in the deal folder. The walk number is the firewall. If emotion or rapport begins pushing it, stop the conversation and revisit cold the next morning.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">3</div>
          <div>
            <h4>Open With a Documented Anchor <span class="when">Day 4–7</span></h4>
            <p>Submit the anchor offer in writing — never verbally first. Attach a one-page rationale: comp summary, days-on-market context, and inspection scope reserve. This makes our offer look professional, not lowball.</p>
            <p>Frame the offer as <strong>"a serious number we can close on quickly"</strong> — not as a starting point that invites haggling without basis.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">4</div>
          <div>
            <h4>Use the Three-Question Pause <span class="when">First Counter</span></h4>
            <p>When the counter arrives, we do not respond same-day. We respond inside 36–48 hours with three questions: (1) what comparable sales support this number, (2) what is the seller's flexibility on closing date or repair credits, (3) what items are negotiable beyond price.</p>
            <p>This re-frames the negotiation around <strong>terms</strong>, not just price — where we have the most room.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">5</div>
          <div>
            <h4>Trade Price for Terms <span class="when">Round 2</span></h4>
            <p>If the seller will not move on price, move on terms: closing date that aligns with their next purchase, leaseback at zero rent for 30 days, repair credits at closing, seller-paid title and warranty. Each term has a dollar value — we translate every concession into hard math.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">6</div>
          <div>
            <h4>Inspection-Based Repricing <span class="when">Under Contract</span></h4>
            <p>Estates of 7,098 sq ft never inspect clean. Roof age, HVAC zones, foundation, drainage, and pool/system items are the leverage. Use the inspection report — not opinions — to renegotiate. Target a credit of 1.5–3% of contract price.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">7</div>
          <div>
            <h4>Final Walk Discipline <span class="when">Closing −7 days</span></h4>
            <p>If the seller pulls a last-minute reversal on a credit or repair item — common in estate deals — refer back to the walk number. Do not fold to keep the deal alive. The market still has more 7,000+ sq ft estates than buyers for them.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- SCRIPTS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="lead">Scripts</span> <span class="rest">— What to Say, What Not to Say</span></h2>
      <div class="nu-section-rule"></div>

      <div class="script-box">
        We have done our homework on 4505 Buttewoods. Estates in this size class sit longer than median inventory in this submarket — that is documented, not opinion. Our offer reflects that reality plus the inspection reserve any 7,098 sq ft home requires. We are positioned to close quickly and clean. The number is the number we can write today.
        <span class="speaker">— Opening, when submitting anchor offer</span>
      </div>

      <div class="script-box">
        I appreciate the counter. Before we respond, I want to understand a few things. What recent comparable sales support that number? Is the seller flexible on closing date or repair credits? Are there items beyond price that matter to them? When I have those answers, we can put a serious response back to you.
        <span class="speaker">— Response to first counter (slows the pace, shifts to terms)</span>
      </div>

      <div class="script-box">
        We have flexibility on closing timeline and on items beyond price. We do not have flexibility on a number that does not work against the carrying and capital math on a property this size. If the gap is real, let's see what terms can close it.
        <span class="speaker">— When seller pushes back on price</span>
      </div>

      <div class="script-box">
        The inspection report is the report. We are not asking for a discount on the home — we are asking for the credit the report itself documents. If the seller would prefer to make the repairs before closing, that works equally well for us.
        <span class="speaker">— After inspection, requesting credit</span>
      </div>

      <div style="margin-top: 22px; padding: 18px 22px; background: rgba(178,34,34,0.06); border-left: 4px solid var(--nu-danger); border-radius: 0 8px 8px 0;">
        <strong style="color: var(--nu-danger); display:block; margin-bottom: 6px; font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase;">Phrases to Avoid</strong>
        <ul style="margin: 0; padding-left: 18px; font-size: 0.93rem; line-height: 1.8;">
          <li>"This is the most we can do." — closes the door; instead, "this is what works at this number."</li>
          <li>"We love the house." — gives away leverage. Stay neutral until terms are set.</li>
          <li>"What's your bottom line?" — invites the seller to anchor high. Make them counter to our number.</li>
          <li>"It needs a lot of work." — creates an adversarial tone. Cite the inspection report instead.</li>
        </ul>
      </div>
    </section>

    <!-- FINANCING / NUMBERS TABLE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="lead">Cost</span> <span class="rest">Stack — All-In Number</span></h2>
      <div class="nu-section-rule"></div>
      <p style="margin-bottom: 16px; font-size: 0.95rem;">Negotiate to the all-in number, not the contract price. The bracketed cells are sized as a percentage of the agreed contract price — Aaron fills the contract price once we have the target locked.</p>
      <div class="fin-table-wrap">
        <table class="fin-table">
          <thead>
            <tr>
              <th>Line Item</th>
              <th>Basis</th>
              <th>Notes for Negotiation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contract Price</td>
              <td class="num">Target = List −7%</td>
              <td>Settlement zone; never above List −4%.</td>
            </tr>
            <tr>
              <td>Earnest Money</td>
              <td class="num">1.0% of contract</td>
              <td>Held in escrow — refundable per inspection contingency.</td>
            </tr>
            <tr>
              <td>Inspection Reserve</td>
              <td class="num">1.5–3.0% of contract</td>
              <td>Target as repair credit at closing, not pre-close repairs.</td>
            </tr>
            <tr>
              <td>Title &amp; Closing Fees</td>
              <td class="num">~1.0% of contract</td>
              <td>Negotiate seller-paid as a "term concession" instead of price drop.</td>
            </tr>
            <tr>
              <td>First-Year Insurance</td>
              <td class="num">Quote at LOI</td>
              <td>Estates &gt; 7,000 sq ft trigger surcharge — quote before going hard.</td>
            </tr>
            <tr>
              <td>First-Year Property Tax Escrow</td>
              <td class="num">Pull from county record</td>
              <td>Verify millage and any homestead/exemption status before LOI.</td>
            </tr>
            <tr>
              <td>Capex Reserve (Year 1)</td>
              <td class="num">2.0% of contract</td>
              <td>Roof patches, HVAC service, pool/system, drainage. Non-negotiable budget.</td>
            </tr>
            <tr class="total">
              <td>All-In Cost (Year 1, before mortgage)</td>
              <td class="num">~Contract +5.5–7.0%</td>
              <td>This is the number that must clear. Compare against walk.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- DEAL BREAKERS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="lead">Deal</span> <span class="rest">Breakers — Walk Without Hesitation</span></h2>
      <div class="nu-section-rule"></div>
      <div class="breaker-list">
        <div class="breaker">
          <span class="label">Title Cloud</span>
          <p>Any unresolved lien, easement, or boundary dispute that cannot be cleared at closing — we walk.</p>
        </div>
        <div class="breaker">
          <span class="label">Foundation Movement</span>
          <p>Engineer's report showing active settlement — repair scope unknown is unbounded risk.</p>
        </div>
        <div class="breaker">
          <span class="label">Material Misrepresentation</span>
          <p>Square footage, lot size, or improvements that differ materially from listing — credibility is gone.</p>
        </div>
        <div class="breaker">
          <span class="label">Above Walk Number</span>
          <p>Total all-in above List −4% with full inspection credits — the math doesn't work, period.</p>
        </div>
        <div class="breaker">
          <span class="label">Insurance Refusal</span>
          <p>If standard carriers refuse the structure or quote 2× market — there is a structural reason, not a paperwork issue.</p>
        </div>
        <div class="breaker">
          <span class="label">Seller Reverses on Closing</span>
          <p>Last-minute removal of agreed credits or repairs — pattern of bad faith. Do not chase the deal.</p>
        </div>
      </div>
    </section>

    <!-- ACTION CALLOUT -->
    <section class="nu-section">
      <div class="action-callout">
        <div>
          <h3>Next 72 Hours</h3>
          <p>Pull tax record and listing history on 4505 Buttewoods. Order the comp set for estate-class sales within 5 miles, last 12 months. Lock anchor / target / walk in writing. Then — and only then — request the showing and inspection. Do not engage the listing agent on price until those four steps are complete.</p>
        </div>
        <div class="actions">
          <a href="tel:2055001343" class="btn btn-white">Call Aaron · 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Acquisition%20File" class="btn btn-outline">Email Acquisition File</a>
        </div>
      </div>
    </section>

  </div>
</main>

<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
  <div class="fine">Internal acquisition strategy document. Not for distribution outside Norris Utilities®, LLC.</div>
</footer>

</body>
</html>