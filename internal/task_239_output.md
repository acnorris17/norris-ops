<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estate Acquisition Action Plan — 4505 Buttewoods — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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

.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
  padding: 70px 40px 90px;
  text-align: center;
  overflow: hidden;
  min-height: 280px;
}
.nu-header::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
  pointer-events: none;
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
  font-size: 3rem;
  color: var(--nu-white);
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-bottom: 2px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.nu-logo-subtitle {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.2rem;
  color: var(--nu-white);
  letter-spacing: 0.75em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.nu-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.3rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.03em;
}
.nu-header-eyebrow {
  display: inline-block;
  margin-top: 18px;
  padding: 6px 18px;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.35);
  border-radius: 999px;
  color: var(--nu-white);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.nu-chevron {
  position: relative;
  height: 50px;
  margin-top: -50px;
  z-index: 10;
}
.nu-chevron svg { width: 100%; height: 50px; display: block; }

.nu-content-area {
  position: relative;
  background: var(--nu-white);
  overflow: hidden;
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 300px; left: 50%;
  transform: translateX(-50%);
  width: 65%; max-width: 700px; aspect-ratio: 1;
  background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-content-area > * { position: relative; z-index: 1; }

.wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px; }

.nu-section-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--nu-blue);
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--nu-medium-gray);
}
.nu-section-title span {
  color: var(--nu-dark-text);
  font-weight: 700;
}

.doc-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
  padding: 18px 22px;
  background: var(--nu-light-gray);
  border-left: 4px solid var(--nu-blue);
  border-radius: 4px;
  font-size: 0.92rem;
}
.doc-meta div { flex: 1 1 180px; }
.doc-meta .label {
  display: block;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--nu-blue);
  font-size: 0.7rem;
  margin-bottom: 2px;
}
.doc-meta .val { color: var(--nu-dark-text); font-weight: 700; }

.summary-card {
  background: linear-gradient(135deg, #f7fbff 0%, #eaf3ff 100%);
  border: 1px solid #cfe0f7;
  padding: 28px 30px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 2px 12px rgba(0,0,255,0.05);
}
.summary-card h2 {
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--nu-blue);
  margin-bottom: 10px;
  letter-spacing: 0.02em;
}
.summary-card p { color: var(--nu-dark-text); font-size: 1rem; }

.prop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
  margin-bottom: 40px;
}
.prop-cell {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-top: 3px solid var(--nu-cyan);
  padding: 18px 18px;
  border-radius: 6px;
  transition: all 0.2s ease;
}
.prop-cell:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  border-top-color: var(--nu-blue);
}
.prop-cell .k {
  display: block;
  font-size: 0.7rem;
  font-weight: 900;
  color: var(--nu-blue);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
}
.prop-cell .v {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--nu-dark-text);
  line-height: 1.35;
}
.prop-cell .sub {
  display: block;
  margin-top: 4px;
  font-size: 0.82rem;
  font-weight: 400;
  color: #666;
}

.step-list { margin-bottom: 40px; }
.step {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 20px;
  padding: 22px 24px;
  margin-bottom: 14px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: all 0.2s ease;
}
.step:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
.step-num {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
  color: var(--nu-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.3rem;
  box-shadow: 0 4px 12px rgba(0,0,255,0.25);
}
.step-body h3 {
  font-weight: 900;
  font-size: 1.12rem;
  color: var(--nu-dark-text);
  margin-bottom: 8px;
}
.step-body p { color: var(--nu-body-text); margin-bottom: 8px; font-size: 0.96rem; }
.step-body .due {
  display: inline-block;
  padding: 3px 10px;
  font-size: 0.72rem;
  font-weight: 700;
  background: var(--nu-cyan);
  color: var(--nu-navy);
  border-radius: 3px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-right: 8px;
}
.step-body .owner {
  display: inline-block;
  padding: 3px 10px;
  font-size: 0.72rem;
  font-weight: 700;
  background: var(--nu-light-gray);
  color: var(--nu-dark-text);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 3px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.twocol {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 22px;
  margin-bottom: 40px;
}
.panel {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 24px 26px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.panel h3 {
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--nu-blue);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--nu-medium-gray);
}
.panel ul { list-style: none; padding: 0; }
.panel ul li {
  padding: 8px 0;
  border-bottom: 1px dashed var(--nu-medium-gray);
  font-size: 0.95rem;
  color: var(--nu-body-text);
  display: flex;
  align-items: flex-start;
}
.panel ul li:last-child { border-bottom: none; }
.panel ul li::before {
  content: '•';
  color: var(--nu-cyan);
  font-weight: 900;
  margin-right: 10px;
  font-size: 1.2rem;
  line-height: 1;
}
.panel strong { color: var(--nu-dark-text); font-weight: 700; }

.risk-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
  font-size: 0.94rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  border-radius: 8px;
  overflow: hidden;
}
.risk-table thead th {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
  color: var(--nu-white);
  padding: 14px 16px;
  text-align: left;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.78rem;
}
.risk-table tbody td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--nu-medium-gray);
  vertical-align: top;
}
.risk-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
.risk-table .sev {
  display: inline-block;
  padding: 3px 10px;
  font-size: 0.72rem;
  font-weight: 900;
  border-radius: 3px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.sev-high { background: #ffe3e3; color: #c92a2a; }
.sev-med { background: #fff4d6; color: #8d6708; }
.sev-low { background: #e3f5e3; color: #1f7a1f; }

.offer-ladder {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin-bottom: 40px;
}
.offer-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 22px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.offer-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: var(--nu-cyan);
}
.offer-card.walk::before { background: #c92a2a; }
.offer-card.target::before { background: var(--nu-accent-gold); }
.offer-card.ceiling::before { background: var(--nu-blue); }
.offer-card .tier {
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--nu-blue);
  margin-bottom: 6px;
}
.offer-card .amt {
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  margin-bottom: 4px;
  line-height: 1.1;
}
.offer-card .ppsf {
  font-size: 0.88rem;
  color: #666;
  margin-bottom: 10px;
}
.offer-card .note {
  font-size: 0.82rem;
  color: var(--nu-body-text);
  padding-top: 10px;
  border-top: 1px dashed var(--nu-medium-gray);
  line-height: 1.45;
}

.disclaimer {
  background: var(--nu-light-gray);
  border-left: 4px solid var(--nu-accent-gold);
  padding: 16px 20px;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 40px;
  line-height: 1.55;
}
.disclaimer strong { color: var(--nu-dark-text); }

.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 48px 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.2rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
  letter-spacing: 0.02em;
}
.nu-footer-contact {
  font-size: 0.98rem;
  line-height: 1.9;
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
  font-weight: 700;
}
.nu-footer-contact a:hover { text-decoration: underline; }

@media (max-width: 768px) {
  .nu-header { padding: 44px 20px 70px; min-height: 220px; }
  .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1.05rem; }
  .wrap { padding: 40px 22px; }
  .step { grid-template-columns: 44px 1fr; gap: 14px; padding: 18px; }
  .step-num { width: 38px; height: 38px; font-size: 1.05rem; }
  .risk-table thead { display: none; }
  .risk-table, .risk-table tbody, .risk-table tr, .risk-table td { display: block; width: 100%; }
  .risk-table tr { margin-bottom: 14px; border: 1px solid var(--nu-medium-gray); border-radius: 6px; }
  .risk-table td { border-bottom: 1px dashed var(--nu-medium-gray); }
  .risk-table td:last-child { border-bottom: none; }
}

@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .panel, .step, .offer-card, .prop-cell { box-shadow: none; border: 1px solid #ccc; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
}
</style>
</head>
<body>

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
  <div class="nu-header-eyebrow">Principal Action Plan · Real Estate</div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="wrap">

    <div class="doc-meta">
      <div><span class="label">Subject</span><span class="val">Estate Purchase — 4505 Buttewoods</span></div>
      <div><span class="label">Gross Living Area</span><span class="val">7,098 sq ft</span></div>
      <div><span class="label">Prepared For</span><span class="val">Aaron C. Norris</span></div>
      <div><span class="label">Date Issued</span><span class="val">April 22, 2026</span></div>
      <div><span class="label">Status</span><span class="val">Pre-Offer Due Diligence</span></div>
    </div>

    <div class="summary-card">
      <h2>Executive Summary</h2>
      <p>This action plan structures the negotiation for the 7,098 sq ft estate at 4505 Buttewoods. The objective is to secure the property at or below independent appraised value, with financing contingency, a full inspection period, and clean title — while preserving the option to walk without penalty. The plan sequences diligence before an offer is written, establishes a three-tier price ladder (walk / target / ceiling), and locks in the professionals (attorney, inspector, lender) required to close cleanly.</p>
    </div>

    <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
    <div class="prop-grid">
      <div class="prop-cell">
        <span class="k">Address</span>
        <span class="v">4505 Buttewoods<span class="sub">Full street suffix + city/state to confirm before offer</span></span>
      </div>
      <div class="prop-cell">
        <span class="k">Living Area</span>
        <span class="v">7,098 sq ft<span class="sub">Verify against tax records + survey</span></span>
      </div>
      <div class="prop-cell">
        <span class="k">Property Type</span>
        <span class="v">Single-Family Estate<span class="sub">Primary residence classification</span></span>
      </div>
      <div class="prop-cell">
        <span class="k">Transaction Role</span>
        <span class="v">Principal Buyer<span class="sub">Aaron C. Norris, personal capacity</span></span>
      </div>
      <div class="prop-cell">
        <span class="k">Intended Use</span>
        <span class="v">Personal Residence<span class="sub">Not a Norris Utilities® asset</span></span>
      </div>
      <div class="prop-cell">
        <span class="k">Source</span>
        <span class="v">reMarkable Note<span class="sub">Captured action item, April 2026</span></span>
      </div>
    </div>

    <h2 class="nu-section-title">Negotiation <span>Playbook — 10 Steps</span></h2>
    <div class="step-list">

      <div class="step">
        <div class="step-num">1</div>
        <div class="step-body">
          <h3>Confirm full address + lock professional team</h3>
          <p>Confirm city, ZIP, parcel ID. Retain a real estate attorney to draft/review contract and lender (first call: Patrick Lavette, Renasant Bank). Engage licensed home inspector and, if warranted, structural engineer.</p>
          <span class="due">Day 1–3</span><span class="owner">Aaron</span>
        </div>
      </div>

      <div class="step">
        <div class="step-num">2</div>
        <div class="step-body">
          <h3>Pull independent comps (CMA)</h3>
          <p>Request a buyer-side comparative market analysis covering sold estate-class properties ≥ 6,000 sq ft within the same school district, past 12 months. Adjust for lot size, age, condition, and pool/outbuildings.</p>
          <span class="due">Day 2–5</span><span class="owner">Buyer Agent</span>
        </div>
      </div>

      <div class="step">
        <div class="step-num">3</div>
        <div class="step-body">
          <h3>Order independent appraisal (pre-offer)</h3>
          <p>Commission a pre-offer appraisal from a certified residential appraiser. Cost typically $600–$1,200 for a 7,000+ sq ft property. This anchors the price discussion in an arm's-length number, not the list price.</p>
          <span class="due">Day 3–10</span><span class="owner">Aaron + Appraiser</span>
        </div>
      </div>

      <div class="step">
        <div class="step-num">4</div>
        <div class="step-body">
          <h3>Review seller disclosures + tax history</h3>
          <p>Request the seller's property disclosure, last 3 years of property tax bills, HOA docs (if any), easements, deed restrictions, and any open permits. Cross-check assessed value vs. list price.</p>
          <span class="due">Day 3–7</span><span class="owner">Attorney</span>
        </div>
      </div>

      <div class="step">
        <div class="step-num">5</div>
        <div class="step-body">
          <h3>Establish walk / target / ceiling prices</h3>
          <p>Using the appraisal and CMA, set three numbers in writing before any conversation with the listing agent: the walk-away price, the opening offer, and the absolute ceiling. Never reveal the ceiling.</p>
          <span class="due">Day 10</span><span class="owner">Aaron</span>
        </div>
      </div>

      <div class="step">
        <div class="step-num">6</div>
        <div class="step-body">
          <h3>Secure financing pre-approval</h3>
          <p>Obtain a full underwriting pre-approval (not just pre-qualification). A jumbo loan is likely given size and price tier — confirm rate lock terms, down payment, and debt-to-income capacity. Keep business cash flow (Norris Utilities®) separate from the personal file.</p>
          <span class="due">Day 5–12</span><span class="owner">Aaron + Lender</span>
        </div>
      </div>

      <div class="step">
        <div class="step-num">7</div>
        <div class="step-body">
          <h3>Submit written offer with contingencies</h3>
          <p>Offer below target (leave room to move up twice). Mandatory contingencies: financing, inspection (10 business days), appraisal, clear title. Earnest money 1–2% held in escrow. Close 30–45 days. Include expiration of 48–72 hours on the offer.</p>
          <span class="due">Day 12–14</span><span class="owner">Attorney + Aaron</span>
        </div>
      </div>

      <div class="step">
        <div class="step-num">8</div>
        <div class="step-body">
          <h3>Inspection period — leverage findings</h3>
          <p>On a 7,098 sq ft home, inspect roof, HVAC (expect 2–3 systems), foundation, plumbing, electrical, pool/spa, septic (if applicable), and any outbuildings. Any material defect becomes a credit request or a price reduction — not a cosmetic walk-away.</p>
          <span class="due">Day 15–25</span><span class="owner">Inspector</span>
        </div>
      </div>

      <div class="step">
        <div class="step-num">9</div>
        <div class="step-body">
          <h3>Appraisal + final loan commitment</h3>
          <p>Lender-ordered appraisal must support the contract price. If it comes in low, use the gap to renegotiate (seller reduces, buyer adds cash, or split). Final loan commitment before lifting financing contingency.</p>
          <span class="due">Day 20–30</span><span class="owner">Lender</span>
        </div>
      </div>

      <div class="step">
        <div class="step-num">10</div>
        <div class="step-body">
          <h3>Title, survey, close</h3>
          <p>Title commitment and owner's title insurance. New boundary survey (strongly recommended on estate parcels). Final walk-through 24 hours before closing. Wire funds only after attorney verifies wiring instructions by phone — never by email (wire fraud risk).</p>
          <span class="due">Day 35–45</span><span class="owner">Attorney + Aaron</span>
        </div>
      </div>

    </div>

    <h2 class="nu-section-title">Offer <span>Ladder</span></h2>
    <div class="offer-ladder">
      <div class="offer-card walk">
        <div class="tier">Opening Offer</div>
        <div class="amt">Appraisal − 6%</div>
        <div class="ppsf">Starting anchor</div>
        <div class="note">Leaves room for two concessions. Backed by written appraisal so it reads as data-driven, not lowball.</div>
      </div>
      <div class="offer-card target">
        <div class="tier">Target Price</div>
        <div class="amt">Appraisal − 2%</div>
        <div class="ppsf">Goal close price</div>
        <div class="note">Fair-value transaction. Honors the appraisal with a modest buyer margin for condition, carry costs, and holdover risk.</div>
      </div>
      <div class="offer-card ceiling">
        <div class="tier">Ceiling</div>
        <div class="amt">Appraisal</div>
        <div class="ppsf">Absolute maximum</div>
        <div class="note">Never pay above the independent appraised value on a private-residence purchase. Hold this number private; never signal it to the listing agent.</div>
      </div>
      <div class="offer-card walk">
        <div class="tier">Walk-Away</div>
        <div class="amt">Any counter &gt; Ceiling</div>
        <div class="ppsf">Exit trigger</div>
        <div class="note">If seller refuses to meet appraisal-backed value, walk. Deposit returns via financing or appraisal contingency. Another estate will come to market.</div>
      </div>
    </div>

    <h2 class="nu-section-title">Risks &amp; <span>Mitigations</span></h2>
    <table class="risk-table">
      <thead>
        <tr><th>Risk</th><th>Severity</th><th>Mitigation</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Appraisal gap — loan-appraised value below contract price</td>
          <td><span class="sev sev-high">High</span></td>
          <td>Appraisal contingency in writing. Pre-offer independent appraisal reduces surprise. Pre-negotiated gap split language.</td>
        </tr>
        <tr>
          <td>Undisclosed structural or systems defects on a 7,098 sq ft footprint</td>
          <td><span class="sev sev-high">High</span></td>
          <td>Full inspection + structural engineer review. Request repair credits, not seller-performed repairs.</td>
        </tr>
        <tr>
          <td>Title defects, easements, or unrecorded liens</td>
          <td><span class="sev sev-med">Med</span></td>
          <td>Attorney title review. Owner's title insurance policy. Boundary survey on file before closing.</td>
        </tr>
        <tr>
          <td>Financing delays or rate drift during contract period</td>
          <td><span class="sev sev-med">Med</span></td>
          <td>Full underwriting pre-approval before offer. Lock rate at contract signing if terms favor. 45-day close, not 30.</td>
        </tr>
        <tr>
          <td>Wire fraud during closing</td>
          <td><span class="sev sev-high">High</span></td>
          <td>Verify wire instructions by phone to a known attorney number. Never trust emailed wiring changes. Use established title company.</td>
        </tr>
        <tr>
          <td>Property tax reassessment post-purchase (stepped-up basis)</td>
          <td><span class="sev sev-med">Med</span></td>
          <td>Pull current millage + model reassessment at purchase price. Budget for year-two tax bump in carry analysis.</td>
        </tr>
        <tr>
          <td>Concentration of personal capital outside the business</td>
          <td><span class="sev sev-med">Med</span></td>
          <td>Keep Norris Utilities® operating cash, A/R lines, and inventory financing untouched. Use personal reserves + jumbo mortgage only.</td>
        </tr>
        <tr>
          <td>Seller refuses standard contingencies</td>
          <td><span class="sev sev-low">Low</span></td>
          <td>Non-starter. Walk. No principal-side waiver of inspection or financing contingency on an estate purchase.</td>
        </tr>
      </tbody>
    </table>

    <h2 class="nu-section-title">Team &amp; <span>Contingencies</span></h2>
    <div class="twocol">
      <div class="panel">
        <h3>Professional Team to Engage</h3>
        <ul>
          <li><strong>Real Estate Attorney</strong> — contract drafting, title review, closing representation</li>
          <li><strong>Buyer's Agent</strong> — CMA, market access, offer submission (confirm representation agreement + commission source)</li>
          <li><strong>Lender</strong> — Patrick Lavette, Renasant Bank as first call for jumbo pre-approval</li>
          <li><strong>Independent Appraiser</strong> — certified residential, estate-tier experience</li>
          <li><strong>Home Inspector</strong> — licensed, minimum 5 years on 5,000+ sq ft homes</li>
          <li><strong>Structural Engineer</strong> — on-call pending inspector flag</li>
          <li><strong>Title / Closing Company</strong> — attorney's preferred, insured</li>
          <li><strong>Insurance Broker</strong> — homeowner's + umbrella policy quote before closing</li>
        </ul>
      </div>
      <div class="panel">
        <h3>Non-Negotiable Contract Contingencies</h3>
        <ul>
          <li><strong>Financing Contingency</strong> — earnest money refundable if loan denied</li>
          <li><strong>Inspection Contingency</strong> — 10 business days, right to cancel for any reason</li>
          <li><strong>Appraisal Contingency</strong> — right to renegotiate if appraisal &lt; contract</li>
          <li><strong>Clear &amp; Marketable Title</strong> — attorney approval required</li>
          <li><strong>Survey Contingency</strong> — acceptance of boundary survey</li>
          <li><strong>Final Walk-Through</strong> — 24 hours before closing, property in contracted condition</li>
          <li><strong>Seller Disclosures</strong> — complete, signed, subject to buyer review and acceptance</li>
          <li><strong>No Waiver of Earnest Money</strong> — held in attorney / title escrow, not seller account</li>
        </ul>
      </div>
    </div>

    <h2 class="nu-section-title">Negotiation <span>Principles</span></h2>
    <div class="twocol">
      <div class="panel">
        <h3>Tactics That Work</h3>
        <ul>
          <li><strong>Anchor with data.</strong> Independent appraisal makes every counter a factual discussion, not a feelings discussion.</li>
          <li><strong>Never negotiate against yourself.</strong> After an offer, silence until the seller responds. No mid-wait "improvements."</li>
          <li><strong>Time pressure on offers.</strong> 48–72 hour response windows keep the seller from shopping your bid.</li>
          <li><strong>Ask for credits, not repairs.</strong> Seller-completed repairs are frequently substandard. Cash at closing always cleaner.</li>
          <li><strong>Use the walk-away.</strong> A buyer willing to leave controls the negotiation. Pre-commit the number in writing.</li>
        </ul>
      </div>
      <div class="panel">
        <h3>Mistakes to Avoid</h3>
        <ul>
          <li><strong>Emotional anchoring.</strong> The right price is the appraised price, not the list price.</li>
          <li><strong>Waived contingencies.</strong> Never waive financing, inspection, or appraisal on a 7,000+ sq ft property.</li>
          <li><strong>Signaling the ceiling.</strong> Body language, casual remarks, and agent chatter all leak numbers — keep the ceiling private.</li>
          <li><strong>Skipping the survey.</strong> Estate parcels frequently have encroachments, easements, or acreage discrepancies.</li>
          <li><strong>Mixing business and personal capital.</strong> Norris Utilities® working capital stays in the business. Period.</li>
        </ul>
      </div>
    </div>

    <div class="disclaimer">
      <strong>Advisory Note:</strong> This document is a personal negotiation framework for Aaron C. Norris. It is not legal, tax, or financial advice. All dollar figures are keyed to an independent appraisal that has not yet been ordered — specific numbers must be filled in before any offer is written. Real estate laws, contingency norms, and closing procedures vary by state; all contract language must be drafted and reviewed by a licensed real estate attorney in the state where the property is located. This plan relates to a personal residence acquisition and is independent of Norris Utilities®, LLC operations, capital, and creditworthiness.
    </div>

  </div>
</main>

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