<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Action Item: Negotiate 4505 Buttewoods Estate Purchase — Norris Utilities®</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');

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
  --nu-status-yellow: #F5C518;
  --nu-status-green: #2E8B57;
  --nu-status-red: #C0392B;
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
  padding: 60px 40px 80px;
  text-align: center;
  overflow: hidden;
  min-height: 280px;
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
  top: -50%; right: -20%;
  width: 80%; height: 200%;
  background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
  z-index: 1;
}
.nu-header * { position: relative; z-index: 2; }

.nu-phoenix-icon {
  width: 84px;
  height: 84px;
  margin: 0 auto 16px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
}
.nu-logo-text {
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
  font-size: 1.4rem;
  color: var(--nu-white);
  letter-spacing: 0.8em;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.nu-tagline {
  font-family: 'Playfair Display', 'Lato', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 1.3rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.05em;
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
  background: var(--nu-white);
  padding-bottom: 60px;
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 200px; left: 50%;
  transform: translateX(-50%);
  width: 65%; max-width: 700px;
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-content-area > * { position: relative; z-index: 1; }

.nu-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 40px 20px;
}

/* TITLE BLOCK */
.nu-action-banner {
  display: inline-block;
  background: var(--nu-status-yellow);
  color: var(--nu-dark-text);
  padding: 6px 16px;
  border-radius: 4px;
  font-weight: 900;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.nu-page-title {
  font-weight: 900;
  font-size: 2.6rem;
  color: var(--nu-dark-text);
  line-height: 1.15;
  margin-bottom: 14px;
}
.nu-page-title .accent { color: var(--nu-blue); }
.nu-page-subtitle {
  font-size: 1.15rem;
  color: #555;
  font-weight: 400;
  max-width: 800px;
  margin-bottom: 36px;
}

/* SECTION HEADERS */
.nu-section {
  margin-bottom: 48px;
}
.nu-section-title {
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--nu-dark-text);
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 3px solid var(--nu-blue);
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.nu-section-title .lead { color: var(--nu-blue); }
.nu-section-title .num {
  font-size: 0.85rem;
  color: var(--nu-cyan);
  letter-spacing: 0.15em;
  font-weight: 700;
}

/* PROPERTY SUMMARY CARD */
.nu-property-card {
  background: linear-gradient(135deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
  border: 1px solid var(--nu-medium-gray);
  border-left: 6px solid var(--nu-blue);
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 30px;
}
.nu-prop-address {
  font-weight: 900;
  font-size: 1.6rem;
  color: var(--nu-blue);
  margin-bottom: 6px;
}
.nu-prop-meta {
  color: #555;
  font-size: 0.95rem;
  margin-bottom: 18px;
}
.nu-stat-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.nu-stat {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 6px;
  padding: 14px 16px;
  text-align: center;
}
.nu-stat-value {
  font-weight: 900;
  font-size: 1.4rem;
  color: var(--nu-blue);
  line-height: 1.1;
}
.nu-stat-label {
  font-size: 0.72rem;
  color: #777;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 4px;
}

/* OBJECTIVE LIST */
.nu-objectives {
  list-style: none;
  display: grid;
  gap: 14px;
}
.nu-objective {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-left: 4px solid var(--nu-cyan);
  padding: 18px 22px;
  border-radius: 6px;
  display: flex;
  gap: 18px;
  align-items: flex-start;
}
.nu-objective-num {
  flex-shrink: 0;
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--nu-blue);
  color: var(--nu-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1rem;
}
.nu-objective-body strong {
  display: block;
  color: var(--nu-dark-text);
  font-weight: 700;
  margin-bottom: 4px;
  font-size: 1.05rem;
}
.nu-objective-body span {
  color: #555;
  font-size: 0.95rem;
}

/* PHASES */
.nu-phase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}
.nu-phase {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-top: 4px solid var(--nu-blue);
  border-radius: 6px;
  padding: 20px;
  position: relative;
}
.nu-phase-tag {
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--nu-cyan);
  font-weight: 700;
  margin-bottom: 8px;
}
.nu-phase-title {
  font-weight: 900;
  font-size: 1.1rem;
  color: var(--nu-dark-text);
  margin-bottom: 8px;
}
.nu-phase-meta {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 12px;
}
.nu-phase ul {
  list-style: none;
  font-size: 0.9rem;
}
.nu-phase ul li {
  padding-left: 16px;
  position: relative;
  margin-bottom: 6px;
  color: #444;
}
.nu-phase ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--nu-blue);
  font-weight: 900;
}

/* OFFER STRATEGY */
.nu-offer-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 6px;
  overflow: hidden;
}
.nu-offer-table th {
  background: var(--nu-dark-text);
  color: var(--nu-white);
  padding: 14px 16px;
  text-align: left;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}
.nu-offer-table td {
  padding: 14px 16px;
  border-top: 1px solid var(--nu-medium-gray);
  font-size: 0.95rem;
  vertical-align: top;
}
.nu-offer-table tr:nth-child(even) td { background: var(--nu-light-gray); }
.nu-offer-table .price {
  font-weight: 900;
  color: var(--nu-blue);
  white-space: nowrap;
}
.nu-tier-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.tier-open { background: #E8F4FF; color: var(--nu-blue); }
.tier-mid { background: #FFF6E0; color: #8a6d00; }
.tier-walk { background: #FBE3E0; color: var(--nu-status-red); }

/* DUE DILIGENCE */
.nu-dd-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
.nu-dd-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 6px;
  padding: 20px;
}
.nu-dd-card h4 {
  font-weight: 900;
  font-size: 1rem;
  color: var(--nu-dark-text);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.nu-dd-card h4::before {
  content: '';
  display: inline-block;
  width: 10px; height: 10px;
  background: var(--nu-cyan);
  border-radius: 2px;
  transform: rotate(45deg);
}
.nu-dd-card ul {
  list-style: none;
  font-size: 0.9rem;
}
.nu-dd-card ul li {
  padding: 6px 0 6px 22px;
  position: relative;
  border-bottom: 1px dashed var(--nu-medium-gray);
}
.nu-dd-card ul li:last-child { border-bottom: none; }
.nu-dd-card ul li::before {
  content: '☐';
  position: absolute;
  left: 0;
  color: var(--nu-blue);
  font-weight: 900;
}

/* RISK PANEL */
.nu-risk-panel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
}
.nu-risk {
  border-radius: 6px;
  padding: 18px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-left: 5px solid var(--nu-status-red);
}
.nu-risk.medium { border-left-color: var(--nu-status-yellow); }
.nu-risk.low { border-left-color: var(--nu-status-green); }
.nu-risk h4 {
  font-weight: 900;
  font-size: 1rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.nu-risk-level {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.level-high { background: var(--nu-status-red); color: #fff; }
.level-med { background: var(--nu-status-yellow); color: var(--nu-dark-text); }
.level-low { background: var(--nu-status-green); color: #fff; }
.nu-risk p { font-size: 0.9rem; color: #444; }

/* TIMELINE */
.nu-timeline {
  position: relative;
  padding-left: 32px;
}
.nu-timeline::before {
  content: '';
  position: absolute;
  left: 10px; top: 6px; bottom: 6px;
  width: 3px;
  background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
  border-radius: 2px;
}
.nu-timeline-item {
  position: relative;
  margin-bottom: 22px;
}
.nu-timeline-item::before {
  content: '';
  position: absolute;
  left: -27px; top: 4px;
  width: 14px; height: 14px;
  border-radius: 50%;
  background: var(--nu-blue);
  border: 3px solid var(--nu-white);
  box-shadow: 0 0 0 2px var(--nu-blue);
}
.nu-tl-date {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.nu-tl-event {
  font-size: 0.98rem;
  color: var(--nu-dark-text);
  margin-top: 2px;
}

/* NEXT STEPS */
.nu-next {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
  color: var(--nu-white);
  padding: 32px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 30px;
  align-items: center;
}
.nu-next h3 {
  font-weight: 900;
  font-size: 1.4rem;
  margin-bottom: 10px;
}
.nu-next p {
  font-size: 0.98rem;
  opacity: 0.92;
  line-height: 1.55;
}
.nu-next-cta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.nu-btn-primary {
  display: inline-block;
  background: var(--nu-cyan);
  color: var(--nu-dark-text);
  padding: 14px 28px;
  border: none;
  border-radius: 4px;
  font-weight: 900;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
}
.nu-btn-primary:hover {
  background: var(--nu-white);
  transform: translateY(-1px);
}
.nu-btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--nu-white);
  padding: 12px 28px;
  border: 2px solid var(--nu-white);
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
}
.nu-btn-secondary:hover {
  background: var(--nu-white);
  color: var(--nu-blue);
}

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 44px 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: 'Playfair Display', 'Lato', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 1.25rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
}
.nu-footer-contact {
  font-size: 0.95rem;
  line-height: 1.8;
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
}
.nu-footer-contact a:hover { text-decoration: underline; }
.nu-footer-confidential {
  margin-top: 18px;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .nu-header { padding: 40px 20px 60px; min-height: 200px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1rem; }
  .nu-container { padding: 40px 20px 20px; }
  .nu-page-title { font-size: 1.8rem; }
  .nu-property-card { grid-template-columns: 1fr; }
  .nu-next { grid-template-columns: 1fr; }
  .nu-section-title { font-size: 1.2rem; }
}

@media print {
  body { background: var(--nu-white); }
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
  .nu-next { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
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
    <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <span class="nu-action-banner">reMarkable Action Item — Personal / Confidential</span>
    <h1 class="nu-page-title"><span class="accent">Negotiate Purchase</span> — 4505 Buttewoods Estate (7,098 sq ft)</h1>
    <p class="nu-page-subtitle">
      Structured negotiation playbook for the acquisition of the 7,098 sq ft estate at 4505 Buttewoods.
      Walks the deal from initial intel through contract execution, closing, and post-closing transition —
      with offer ladders, due diligence checklists, risk panels, and a hard timeline.
    </p>

    <!-- PROPERTY SUMMARY -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="num">01 /</span><span><span class="lead">Property</span> Snapshot</span></h2>
      <div class="nu-property-card">
        <div>
          <div class="nu-prop-address">4505 Buttewoods</div>
          <div class="nu-prop-meta">Single-family estate · Personal residence acquisition · Negotiated private purchase</div>
          <p style="font-size:0.95rem;color:#444;">
            7,098 square feet of finished living space. Estate-class property targeted for a direct negotiated
            purchase rather than a competitive listing process. The objective is to secure favorable terms
            with the seller before any open-market exposure, while protecting Aaron's downside through
            inspection, financing, and appraisal contingencies.
          </p>
        </div>
        <div class="nu-stat-grid">
          <div class="nu-stat"><div class="nu-stat-value">7,098</div><div class="nu-stat-label">Finished Sq Ft</div></div>
          <div class="nu-stat"><div class="nu-stat-value">4505</div><div class="nu-stat-label">Buttewoods Address</div></div>
          <div class="nu-stat"><div class="nu-stat-value">1</div><div class="nu-stat-label">Primary Decision Maker</div></div>
          <div class="nu-stat"><div class="nu-stat-value">Active</div><div class="nu-stat-label">Negotiation Status</div></div>
        </div>
      </div>
    </section>

    <!-- OBJECTIVES -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="num">02 /</span><span><span class="lead">Negotiation</span> Objectives</span></h2>
      <ul class="nu-objectives">
        <li class="nu-objective">
          <div class="nu-objective-num">1</div>
          <div class="nu-objective-body">
            <strong>Acquire below replacement cost</strong>
            <span>Anchor the conversation around current cost-to-build for a 7,098 sq ft custom estate. Use that
              ceiling to justify any opening offer that lands meaningfully under it.</span>
          </div>
        </li>
        <li class="nu-objective">
          <div class="nu-objective-num">2</div>
          <div class="nu-objective-body">
            <strong>Lock favorable terms before market exposure</strong>
            <span>Close the deal privately. Avoid creating a public listing that triggers a bidding event.
              Move with quiet urgency — never with desperation.</span>
          </div>
        </li>
        <li class="nu-objective">
          <div class="nu-objective-num">3</div>
          <div class="nu-objective-body">
            <strong>Preserve full inspection &amp; financing contingencies</strong>
            <span>No waivers on inspection, appraisal, or financing in the initial offer. Only relax those if
              the seller meets a meaningful price concession in writing.</span>
          </div>
        </li>
        <li class="nu-objective">
          <div class="nu-objective-num">4</div>
          <div class="nu-objective-body">
            <strong>Protect Norris Utilities® cash position</strong>
            <span>Personal acquisition — must not draw operational capital or working credit from the company.
              Confirm financing structure with Patrick Lavette at Renasant Bank before any signed offer.</span>
          </div>
        </li>
        <li class="nu-objective">
          <div class="nu-objective-num">5</div>
          <div class="nu-objective-body">
            <strong>Define the walk-away number in advance</strong>
            <span>Set the maximum total acquisition cost (purchase + estimated repairs + closing costs +
              first-year carry) before opening the conversation. Do not move past that number under any
              circumstance.</span>
          </div>
        </li>
      </ul>
    </section>

    <!-- PHASES -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="num">03 /</span><span><span class="lead">Negotiation</span> Phases</span></h2>
      <div class="nu-phase-grid">
        <div class="nu-phase">
          <div class="nu-phase-tag">Phase 1 — Intel</div>
          <div class="nu-phase-title">Discovery &amp; Comparables</div>
          <div class="nu-phase-meta">Days 1–7</div>
          <ul>
            <li>Pull last 24 months of estate sales 5,000+ sq ft within the immediate submarket</li>
            <li>Confirm tax assessment, mortgage status, and any liens on public record</li>
            <li>Identify seller's motivation: estate, relocation, downsizing, or financial pressure</li>
            <li>Establish the cost-to-build benchmark for 7,098 sq ft custom construction</li>
          </ul>
        </div>
        <div class="nu-phase">
          <div class="nu-phase-tag">Phase 2 — Approach</div>
          <div class="nu-phase-title">Opening the Conversation</div>
          <div class="nu-phase-meta">Days 7–14</div>
          <ul>
            <li>Direct approach — Aaron only, no broker on Norris side at first contact</li>
            <li>Position as a serious, qualified, private buyer — not a flipper or speculator</li>
            <li>Request a private walk-through and a written seller disclosure</li>
            <li>Listen for emotional cues — kids' rooms, pets, time-in-home, future plans</li>
          </ul>
        </div>
        <div class="nu-phase">
          <div class="nu-phase-tag">Phase 3 — Offer</div>
          <div class="nu-phase-title">Written Offer Cycle</div>
          <div class="nu-phase-meta">Days 14–21</div>
          <ul>
            <li>Lead with the Opening Tier number (see Section 04)</li>
            <li>Include 10-day inspection, 30-day appraisal, 45-day financing contingencies</li>
            <li>Earnest money sized to signal seriousness without overcommitting cash</li>
            <li>Counters move in measured steps — never split the difference reflexively</li>
          </ul>
        </div>
        <div class="nu-phase">
          <div class="nu-phase-tag">Phase 4 — Diligence</div>
          <div class="nu-phase-title">Inspection &amp; Underwriting</div>
          <div class="nu-phase-meta">Days 21–45</div>
          <ul>
            <li>Full home inspection + structural, HVAC, roof, septic/sewer, foundation</li>
            <li>Order appraisal through Renasant lender pipeline</li>
            <li>Title search, survey, encroachment review</li>
            <li>Re-trade only on material findings, never on cosmetic items</li>
          </ul>
        </div>
        <div class="nu-phase">
          <div class="nu-phase-tag">Phase 5 — Close</div>
          <div class="nu-phase-title">Contract to Closing</div>
          <div class="nu-phase-meta">Days 45–60</div>
          <ul>
            <li>Finalize loan docs, lock rate, confirm clear-to-close</li>
            <li>Final walk-through 24–48 hours before close</li>
            <li>Sign at Renasant or attorney's office — funds wired same day</li>
            <li>Possession transfer per contract — confirm in writing</li>
          </ul>
        </div>
        <div class="nu-phase">
          <div class="nu-phase-tag">Phase 6 — Transition</div>
          <div class="nu-phase-title">Post-Closing Setup</div>
          <div class="nu-phase-meta">Days 60–90</div>
          <ul>
            <li>Locks rekeyed within 24 hours of possession</li>
            <li>Insurance bound and active before transfer of title</li>
            <li>Utilities transferred — power, gas, water, internet, security</li>
            <li>Estate operations plan: maintenance vendors, lawn, pool, HVAC schedule</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- OFFER STRATEGY -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="num">04 /</span><span><span class="lead">Offer</span> Ladder &amp; Tier Strategy</span></h2>
      <table class="nu-offer-table">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Position</th>
            <th>What It Signals</th>
            <th>When To Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="nu-tier-badge tier-open">Opening</span></td>
            <td class="price">Anchor — well below comp ceiling</td>
            <td>Disciplined private buyer with cash certainty and no urgency</td>
            <td>First written offer. Always in writing. Never verbal-only.</td>
          </tr>
          <tr>
            <td><span class="nu-tier-badge tier-mid">Mid Tier</span></td>
            <td class="price">Comp-justified fair-value range</td>
            <td>Willingness to meet the market when seller engages in good faith</td>
            <td>After seller counter, supported by comparable sales pulled in Phase 1</td>
          </tr>
          <tr>
            <td><span class="nu-tier-badge tier-mid">Concession Tier</span></td>
            <td class="price">Mid-tier + targeted seller concessions</td>
            <td>Flexibility on price in exchange for closing costs, repair credits, or a faster close</td>
            <td>When inspection findings or appraisal create legitimate leverage</td>
          </tr>
          <tr>
            <td><span class="nu-tier-badge tier-walk">Walk-Away</span></td>
            <td class="price">Hard ceiling — set in writing before negotiation begins</td>
            <td>Discipline. Aaron leaves the table — quietly, professionally, without drama.</td>
            <td>Any seller demand above the walk-away number, regardless of justification</td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top:14px;font-size:0.9rem;color:#666;font-style:italic;">
        Numeric values for each tier are intentionally not printed in this document. Aaron sets and confirms
        the four numbers in private with Patrick Lavette before opening the conversation. The walk-away
        number, once set, does not move during the deal.
      </p>
    </section>

    <!-- DUE DILIGENCE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="num">05 /</span><span><span class="lead">Due</span> Diligence Checklist</span></h2>
      <div class="nu-dd-grid">
        <div class="nu-dd-card">
          <h4>Title &amp; Legal</h4>
          <ul>
            <li>Title search — confirm clear chain of ownership</li>
            <li>Lien check — mortgages, mechanic's, tax, judgment</li>
            <li>Easements, right-of-way, utility encroachments</li>
            <li>HOA documents, covenants, restrictions, dues</li>
            <li>Survey — boundaries, setback compliance</li>
          </ul>
        </div>
        <div class="nu-dd-card">
          <h4>Structural &amp; Systems</h4>
          <ul>
            <li>Full home inspection by independent inspector</li>
            <li>Roof age, condition, remaining service life</li>
            <li>Foundation, drainage, grading review</li>
            <li>HVAC systems — age, capacity, service records</li>
            <li>Plumbing, electrical, panel capacity</li>
            <li>Septic / sewer connection and condition</li>
          </ul>
        </div>
        <div class="nu-dd-card">
          <h4>Financial &amp; Carry</h4>
          <ul>
            <li>Property tax history — last 5 years</li>
            <li>Insurance quote bound before close</li>
            <li>Utility bill history — power, gas, water</li>
            <li>Estimated annual maintenance reserve</li>
            <li>Lender appraisal vs. agreed purchase price</li>
          </ul>
        </div>
        <div class="nu-dd-card">
          <h4>Environmental</h4>
          <ul>
            <li>Flood zone designation — FEMA map</li>
            <li>Radon, mold, asbestos screening if age warrants</li>
            <li>Underground storage tanks (if applicable)</li>
            <li>Tree health — large hardwoods near structure</li>
          </ul>
        </div>
        <div class="nu-dd-card">
          <h4>Personal Use Fit</h4>
          <ul>
            <li>Commute &amp; access for Aaron's work patterns</li>
            <li>Home office capacity — dedicated, quiet, fast internet</li>
            <li>Garage / shop space for tools, gear, vehicles</li>
            <li>Privacy and security posture</li>
          </ul>
        </div>
        <div class="nu-dd-card">
          <h4>Documentation Capture</h4>
          <ul>
            <li>All inspection reports archived to personal records</li>
            <li>Seller disclosures — signed copy retained</li>
            <li>Appraisal — full report, not summary</li>
            <li>Closing disclosure and final settlement statement</li>
            <li>Insurance binder, deed, title policy</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- RISKS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="num">06 /</span><span><span class="lead">Risk</span> Panel</span></h2>
      <div class="nu-risk-panel">
        <div class="nu-risk">
          <span class="nu-risk-level level-high">High</span>
          <h4>Overpayment relative to replacement cost</h4>
          <p>An estate-sized home is the largest write-down risk. The cost-to-build benchmark sets the ceiling.
            Walk before exceeding it.</p>
        </div>
        <div class="nu-risk medium">
          <span class="nu-risk-level level-med">Medium</span>
          <h4>Hidden structural or systems repair</h4>
          <p>7,098 sq ft means major HVAC, roof, and mechanical exposure. Inspection contingency is non-negotiable.</p>
        </div>
        <div class="nu-risk medium">
          <span class="nu-risk-level level-med">Medium</span>
          <h4>Appraisal gap</h4>
          <p>Estate properties often appraise below contract. Confirm Renasant lender flexibility on appraisal
            gap coverage before signing.</p>
        </div>
        <div class="nu-risk medium">
          <span class="nu-risk-level level-med">Medium</span>
          <h4>Seller emotional re-trade</h4>
          <p>Long-time owners frequently pull back at the closing table. Lock terms in writing early; re-confirm
            at every milestone.</p>
        </div>
        <div class="nu-risk low">
          <span class="nu-risk-level level-low">Low</span>
          <h4>Norris Utilities® operational impact</h4>
          <p>This is a personal acquisition — financed personally, closed personally, owned personally. Deal
            cleanly separated from company books and credit.</p>
        </div>
        <div class="nu-risk low">
          <span class="nu-risk-level level-low">Low</span>
          <h4>Title or legal defects</h4>
          <p>Title insurance and a clean survey close this exposure. Standard process if the title company is
            engaged early.</p>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="num">07 /</span><span><span class="lead">Working</span> Timeline</span></h2>
      <div class="nu-timeline">
        <div class="nu-timeline-item">
          <div class="nu-tl-date">Week 1 — Intel</div>
          <div class="nu-tl-event">Comparable sales pulled, replacement cost benchmark established, seller motivation assessed, financing pre-confirmed with Patrick Lavette at Renasant Bank.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-tl-date">Week 2 — First Contact</div>
          <div class="nu-tl-event">Direct, private approach to seller. Walk-through scheduled. Listen, learn, do not negotiate at the property.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-tl-date">Week 3 — Opening Offer</div>
          <div class="nu-tl-event">Written offer delivered at the Opening Tier with full inspection, appraisal, and financing contingencies. Earnest money set.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-tl-date">Weeks 4–5 — Counter Cycle</div>
          <div class="nu-tl-event">Seller counter received. Aaron responds at Mid Tier with comp-justified narrative. Walk-away number remains private and locked.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-tl-date">Week 6 — Under Contract</div>
          <div class="nu-tl-event">Inspection ordered, appraisal ordered, title search initiated. Insurance quoted and reserved.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-tl-date">Week 7 — Diligence Resolution</div>
          <div class="nu-tl-event">Inspection findings reviewed. Re-trade only on material items. Seller credits or repair concessions documented in writing.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-tl-date">Week 8 — Clear to Close</div>
          <div class="nu-tl-event">Lender clears file. Final closing disclosure reviewed. Final walk-through 24–48 hours pre-close.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-tl-date">Week 9 — Close &amp; Possession</div>
          <div class="nu-tl-event">Sign, fund, take possession. Locks rekeyed same day. Insurance active. Estate operations plan begins.</div>
        </div>
      </div>
    </section>

    <!-- NEXT STEPS -->
    <section class="nu-section">
      <div class="nu-next">
        <div>
          <h3>Next 72 Hours</h3>
          <p>
            Aaron sets the four-tier offer numbers in private and confirms financing structure with
            Patrick Lavette at Renasant Bank. Comp study and replacement cost benchmark must be in
            writing before first contact with the seller. Nothing verbal — every concession and every
            counter goes on paper.
          </p>
        </div>
        <div class="nu-next-cta">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com" class="nu-btn-secondary">Email Aaron Direct</a>
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
  <div class="nu-footer-confidential">Confidential — Personal Acquisition Planning Document</div>
</footer>

</body>
</html>