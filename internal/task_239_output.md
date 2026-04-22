<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Action Brief — 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
<style>
:root{
  --nu-blue:#0000FF;
  --nu-blue-deep:#0033CC;
  --nu-cyan:#06D0FF;
  --nu-navy:#000033;
  --nu-white:#FFFFFF;
  --nu-light-gray:#F5F5F7;
  --nu-medium-gray:#E8E8EC;
  --nu-dark-text:#1A1A2E;
  --nu-body-text:#333333;
  --nu-accent-gold:#C9A84C;
  --nu-success:#1f8a3a;
  --nu-warning:#b8861b;
  --nu-danger:#a61a1a;
  --font-primary:'Lato',-apple-system,BlinkMacSystemFont,sans-serif;
  --font-display:'Playfair Display',Georgia,serif;
}

*{margin:0;padding:0;box-sizing:border-box;}
html{font-size:16px;scroll-behavior:smooth;}
body{
  font-family:var(--font-primary);
  color:var(--nu-body-text);
  background:var(--nu-light-gray);
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
}

/* HEADER */
.nu-header{
  position:relative;
  background:linear-gradient(135deg,#0a0e5c 0%,#0033cc 30%,#0066ee 60%,#00aaff 85%,var(--nu-cyan) 100%);
  padding:60px 40px 80px;
  text-align:center;
  overflow:hidden;
  min-height:280px;
}
.nu-header::before{
  content:'';
  position:absolute;
  top:0;left:0;right:0;bottom:0;
  background:
    repeating-linear-gradient(90deg,rgba(255,255,255,0.025) 0,rgba(255,255,255,0.025) 2px,transparent 2px,transparent 60px),
    repeating-linear-gradient(0deg,rgba(255,255,255,0.02) 0,rgba(255,255,255,0.02) 1px,transparent 1px,transparent 80px);
  z-index:1;
}
.nu-header::after{
  content:'';
  position:absolute;
  top:-50%;right:-20%;
  width:80%;height:200%;
  background:radial-gradient(ellipse,rgba(6,208,255,0.18) 0%,transparent 70%);
  z-index:1;
}
.nu-header *{position:relative;z-index:2;}

.nu-phoenix{
  width:84px;height:84px;
  margin:0 auto 18px;
  filter:drop-shadow(0 2px 12px rgba(0,0,0,0.35));
}
.nu-logo-text{
  font-family:var(--font-primary);
  font-weight:900;
  font-size:3.2rem;
  color:var(--nu-white);
  letter-spacing:0.35em;
  text-transform:uppercase;
  margin-bottom:6px;
  text-shadow:0 2px 20px rgba(0,0,0,0.3);
}
.nu-logo-subtitle{
  font-weight:900;
  font-size:1.4rem;
  color:var(--nu-white);
  letter-spacing:0.8em;
  text-transform:uppercase;
  margin-bottom:18px;
}
.nu-tagline{
  font-family:var(--font-display);
  font-style:italic;
  font-weight:400;
  font-size:1.35rem;
  color:rgba(255,255,255,0.95);
  letter-spacing:0.04em;
}

/* CHEVRON */
.nu-chevron{
  position:relative;
  height:50px;
  margin-top:-50px;
  z-index:10;
  background:transparent;
}
.nu-chevron svg{width:100%;height:50px;display:block;}

/* CONTENT WRAPPER */
.nu-content-area{
  position:relative;
  background:var(--nu-white);
  overflow:hidden;
}
.nu-content-area::before{
  content:'';
  position:absolute;
  top:240px;left:50%;
  transform:translateX(-50%);
  width:65%;height:520px;
  background:radial-gradient(circle,rgba(0,0,255,0.05) 0%,transparent 70%);
  border-radius:50%;
  z-index:0;
  pointer-events:none;
}
.nu-content-area > *{position:relative;z-index:1;}
.nu-container{
  max-width:1100px;
  margin:0 auto;
  padding:60px 40px 80px;
}

/* DOCUMENT META BAR */
.doc-meta{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  gap:14px;
  background:var(--nu-light-gray);
  border-left:6px solid var(--nu-blue);
  border-radius:6px;
  padding:18px 24px;
  margin-bottom:36px;
  font-size:0.92rem;
}
.doc-meta-item{display:flex;flex-direction:column;}
.doc-meta-label{
  font-size:0.7rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:0.12em;
  color:var(--nu-blue-deep);
  margin-bottom:3px;
}
.doc-meta-value{
  font-weight:700;
  color:var(--nu-dark-text);
}
.doc-pill{
  display:inline-block;
  padding:5px 12px;
  border-radius:99px;
  background:var(--nu-blue);
  color:var(--nu-white);
  font-size:0.72rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:0.1em;
}
.doc-pill.priority{background:var(--nu-warning);color:#fff;}

/* PAGE TITLE */
.doc-title-block{margin-bottom:42px;}
.doc-eyebrow{
  font-size:0.78rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:0.2em;
  color:var(--nu-cyan);
  background:var(--nu-navy);
  display:inline-block;
  padding:6px 14px;
  border-radius:3px;
  margin-bottom:16px;
}
.doc-title{
  font-family:var(--font-primary);
  font-weight:900;
  font-size:2.4rem;
  line-height:1.15;
  color:var(--nu-dark-text);
  margin-bottom:14px;
}
.doc-title .accent{color:var(--nu-blue);}
.doc-subtitle{
  font-weight:300;
  font-size:1.15rem;
  color:#555;
  max-width:780px;
}

/* SECTION HEADERS */
.nu-section{margin-bottom:48px;}
.nu-section-title{
  font-family:var(--font-primary);
  font-weight:900;
  font-size:1.55rem;
  margin-bottom:18px;
  padding-bottom:10px;
  border-bottom:2px solid var(--nu-medium-gray);
}
.nu-section-title .first{color:var(--nu-blue-deep);}
.nu-section-title .rest{color:var(--nu-dark-text);font-weight:700;}

/* PROPERTY SNAPSHOT GRID */
.snapshot-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:14px;
}
.snapshot-tile{
  background:linear-gradient(180deg,var(--nu-white) 0%,var(--nu-light-gray) 100%);
  border:1px solid var(--nu-medium-gray);
  border-top:4px solid var(--nu-blue);
  border-radius:6px;
  padding:18px 20px;
  text-align:center;
}
.snapshot-tile .stat{
  font-weight:900;
  font-size:1.7rem;
  color:var(--nu-blue-deep);
  line-height:1.1;
  margin-bottom:6px;
}
.snapshot-tile .label{
  font-size:0.72rem;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:0.08em;
  color:#555;
}

/* TWO COLUMN */
.two-col{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:24px;
}
@media (max-width:768px){.two-col{grid-template-columns:1fr;}}

.info-card{
  background:var(--nu-white);
  border:1px solid var(--nu-medium-gray);
  border-radius:8px;
  padding:24px;
  box-shadow:0 2px 12px rgba(0,0,0,0.05);
}
.info-card h3{
  font-weight:900;
  font-size:1.05rem;
  color:var(--nu-blue-deep);
  text-transform:uppercase;
  letter-spacing:0.06em;
  margin-bottom:14px;
  padding-bottom:8px;
  border-bottom:1px solid var(--nu-medium-gray);
}
.info-card dl{display:grid;grid-template-columns:auto 1fr;gap:8px 14px;font-size:0.94rem;}
.info-card dt{font-weight:700;color:#555;}
.info-card dd{color:var(--nu-dark-text);font-weight:400;}

/* NEGOTIATION STRATEGY TABLE */
.strategy-table{
  width:100%;
  border-collapse:collapse;
  background:var(--nu-white);
  box-shadow:0 2px 12px rgba(0,0,0,0.05);
  border-radius:8px;
  overflow:hidden;
}
.strategy-table thead{
  background:linear-gradient(135deg,var(--nu-blue) 0%,var(--nu-blue-deep) 100%);
  color:var(--nu-white);
}
.strategy-table th{
  text-align:left;
  padding:14px 18px;
  font-size:0.78rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:0.08em;
}
.strategy-table td{
  padding:14px 18px;
  border-top:1px solid var(--nu-medium-gray);
  font-size:0.93rem;
  vertical-align:top;
}
.strategy-table tbody tr:hover{background:var(--nu-light-gray);}
.tag{
  display:inline-block;
  padding:3px 10px;
  border-radius:99px;
  font-size:0.72rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:0.05em;
}
.tag-anchor{background:#e6f4ea;color:var(--nu-success);}
.tag-target{background:#e6efff;color:var(--nu-blue-deep);}
.tag-walk{background:#fde7e7;color:var(--nu-danger);}

/* OFFER LADDER */
.ladder{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
}
@media (max-width:768px){.ladder{grid-template-columns:1fr;}}
.rung{
  position:relative;
  background:var(--nu-white);
  border-radius:8px;
  padding:24px 22px;
  border-top:6px solid var(--nu-blue);
  box-shadow:0 2px 14px rgba(0,0,0,0.06);
}
.rung.opening{border-top-color:var(--nu-success);}
.rung.target{border-top-color:var(--nu-blue);}
.rung.ceiling{border-top-color:var(--nu-warning);}
.rung-label{
  font-size:0.72rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:0.12em;
  color:#666;
  margin-bottom:6px;
}
.rung-amount{
  font-family:var(--font-primary);
  font-weight:900;
  font-size:2rem;
  color:var(--nu-dark-text);
  line-height:1;
  margin-bottom:6px;
}
.rung-ppsf{
  font-size:0.85rem;
  color:#555;
  margin-bottom:10px;
}
.rung-rationale{
  font-size:0.88rem;
  color:#444;
  line-height:1.5;
}

/* CHECKLIST */
.checklist{list-style:none;padding:0;margin:0;}
.checklist li{
  position:relative;
  padding:14px 16px 14px 56px;
  background:var(--nu-white);
  border:1px solid var(--nu-medium-gray);
  border-radius:6px;
  margin-bottom:10px;
  font-size:0.95rem;
}
.checklist li::before{
  content:'';
  position:absolute;
  left:18px;top:50%;
  width:22px;height:22px;
  margin-top:-11px;
  border:2px solid var(--nu-blue);
  border-radius:5px;
  background:var(--nu-white);
}
.checklist li strong{color:var(--nu-blue-deep);}

/* TIMELINE */
.timeline{
  position:relative;
  padding-left:32px;
  border-left:3px solid var(--nu-cyan);
  margin-left:8px;
}
.timeline-item{
  position:relative;
  margin-bottom:22px;
  padding:16px 20px;
  background:var(--nu-white);
  border:1px solid var(--nu-medium-gray);
  border-radius:6px;
}
.timeline-item::before{
  content:'';
  position:absolute;
  left:-42px;top:18px;
  width:18px;height:18px;
  background:var(--nu-blue);
  border:3px solid var(--nu-white);
  border-radius:50%;
  box-shadow:0 0 0 2px var(--nu-cyan);
}
.timeline-day{
  font-weight:900;
  color:var(--nu-blue-deep);
  font-size:0.85rem;
  text-transform:uppercase;
  letter-spacing:0.06em;
  margin-bottom:4px;
}
.timeline-event{font-weight:700;color:var(--nu-dark-text);font-size:1rem;margin-bottom:4px;}
.timeline-detail{font-size:0.9rem;color:#555;}

/* CALLOUT */
.callout{
  background:linear-gradient(135deg,#f7faff 0%,#eaf2ff 100%);
  border-left:5px solid var(--nu-blue);
  padding:20px 26px;
  border-radius:6px;
  margin-bottom:24px;
}
.callout.warn{
  background:linear-gradient(135deg,#fff8e6 0%,#fff1c8 100%);
  border-left-color:var(--nu-warning);
}
.callout-title{
  font-weight:900;
  font-size:0.85rem;
  text-transform:uppercase;
  letter-spacing:0.1em;
  color:var(--nu-blue-deep);
  margin-bottom:8px;
}
.callout.warn .callout-title{color:var(--nu-warning);}
.callout p{font-size:0.95rem;color:var(--nu-dark-text);}

/* LEVERAGE LIST */
.leverage-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;
}
@media (max-width:768px){.leverage-grid{grid-template-columns:1fr;}}
.lev-card{
  background:var(--nu-white);
  border:1px solid var(--nu-medium-gray);
  border-left:5px solid var(--nu-cyan);
  border-radius:6px;
  padding:18px 22px;
}
.lev-card h4{
  font-weight:900;
  font-size:0.95rem;
  color:var(--nu-blue-deep);
  margin-bottom:8px;
}
.lev-card p{font-size:0.9rem;color:#444;line-height:1.5;}
.lev-card.theirs{border-left-color:var(--nu-warning);}
.lev-card.theirs h4{color:var(--nu-warning);}

/* SCRIPT BLOCK */
.script-block{
  background:var(--nu-navy);
  color:#e8edff;
  border-radius:8px;
  padding:24px 28px;
  font-family:var(--font-primary);
  font-size:0.95rem;
  line-height:1.7;
  position:relative;
}
.script-block::before{
  content:'OPENING SCRIPT';
  position:absolute;
  top:-12px;left:20px;
  background:var(--nu-cyan);
  color:var(--nu-navy);
  padding:4px 12px;
  border-radius:3px;
  font-weight:900;
  font-size:0.7rem;
  letter-spacing:0.12em;
}
.script-block em{color:var(--nu-cyan);font-style:normal;font-weight:700;}

/* FOOTER */
.nu-footer{
  background:linear-gradient(135deg,var(--nu-navy) 0%,#000066 100%);
  color:rgba(255,255,255,0.85);
  padding:50px 40px;
  text-align:center;
  font-family:var(--font-primary);
}
.nu-footer-tagline{
  font-family:var(--font-display);
  font-style:italic;
  font-weight:400;
  font-size:1.2rem;
  color:var(--nu-cyan);
  margin-bottom:14px;
}
.nu-footer-contact{
  font-size:0.92rem;
  line-height:1.8;
}
.nu-footer-contact a{color:var(--nu-cyan);text-decoration:none;}
.nu-footer-contact a:hover{text-decoration:underline;}
.nu-footer-rule{
  width:60px;height:2px;
  background:var(--nu-cyan);
  margin:0 auto 18px;
  opacity:0.6;
}

@media (max-width:768px){
  .nu-header{padding:40px 20px 60px;min-height:200px;}
  .nu-logo-text{font-size:2rem;letter-spacing:0.2em;}
  .nu-logo-subtitle{font-size:1rem;letter-spacing:0.5em;}
  .nu-tagline{font-size:1.05rem;}
  .doc-title{font-size:1.7rem;}
  .nu-container{padding:40px 20px 60px;}
}

@media print{
  body{background:#fff;}
  .nu-header{background:var(--nu-blue) !important;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
  .info-card,.rung,.timeline-item{box-shadow:none;break-inside:avoid;}
  .nu-footer{background:var(--nu-navy) !important;-webkit-print-color-adjust:exact;}
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <svg class="nu-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
  </svg>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
</header>

<!-- WHITE CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <!-- META BAR -->
    <div class="doc-meta">
      <div class="doc-meta-item">
        <span class="doc-meta-label">Document Type</span>
        <span class="doc-meta-value">Action Brief — Personal</span>
      </div>
      <div class="doc-meta-item">
        <span class="doc-meta-label">Source</span>
        <span class="doc-meta-value">reMarkable Action Item</span>
      </div>
      <div class="doc-meta-item">
        <span class="doc-meta-label">Owner</span>
        <span class="doc-meta-value">Aaron C. Norris</span>
      </div>
      <div class="doc-meta-item">
        <span class="doc-meta-label">Date Issued</span>
        <span class="doc-meta-value">April 22, 2026</span>
      </div>
      <div>
        <span class="doc-pill priority">High Priority</span>
      </div>
    </div>

    <!-- TITLE -->
    <div class="doc-title-block">
      <div class="doc-eyebrow">Negotiation Action Brief</div>
      <h1 class="doc-title">Purchase Negotiation — <span class="accent">4505 Buttewoods</span><br>7,098 Sq Ft Estate</h1>
      <p class="doc-subtitle">Structured negotiation plan, offer ladder, leverage analysis, and contingency framework for the Buttewoods estate acquisition. Prepared as a working document for Aaron's personal use during direct negotiation with the seller and seller's agent.</p>
    </div>

    <!-- PROPERTY SNAPSHOT -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
      <div class="snapshot-grid">
        <div class="snapshot-tile">
          <div class="stat">7,098</div>
          <div class="label">Heated Sq Ft</div>
        </div>
        <div class="snapshot-tile">
          <div class="stat">4505</div>
          <div class="label">Buttewoods</div>
        </div>
        <div class="snapshot-tile">
          <div class="stat">Est.</div>
          <div class="label">Single-Family Estate</div>
        </div>
        <div class="snapshot-tile">
          <div class="stat">1</div>
          <div class="label">Active Negotiation</div>
        </div>
        <div class="snapshot-tile">
          <div class="stat">Cash<br>or Conv.</div>
          <div class="label">Financing Path</div>
        </div>
      </div>
    </section>

    <!-- OBJECTIVE & STAKES -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Objective</span> <span class="rest">&amp; Stakes</span></h2>
      <div class="two-col">
        <div class="info-card">
          <h3>Primary Objective</h3>
          <p style="font-size:0.95rem;line-height:1.6;color:var(--nu-dark-text);">Acquire 4505 Buttewoods at a price and on terms that protect downside if the disclosure issues already flagged (water intrusion, listing-vs-disclosure discrepancy, H2O Waterproofing scope) prove worse than represented at closing.</p>
        </div>
        <div class="info-card">
          <h3>What Success Looks Like</h3>
          <ul style="padding-left:18px;font-size:0.94rem;line-height:1.7;color:var(--nu-dark-text);">
            <li>Purchase price at or below appraised value, net of repair credits</li>
            <li>Seller-paid H2O Waterproofing scope in writing pre-closing</li>
            <li>Repair escrow holdback for any latent moisture defects</li>
            <li>Clean title, no surprise liens, full survey, transferable warranties</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- OFFER LADDER -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder — Anchor, Target, Ceiling</span></h2>
      <div class="ladder">
        <div class="rung opening">
          <div class="rung-label">Opening Anchor</div>
          <div class="rung-amount">List − 12%</div>
          <div class="rung-ppsf">Justified by disclosure gap + waterproofing scope</div>
          <div class="rung-rationale">Open below market only when supported by documented condition issues. Tie the discount directly to the H2O Waterproofing estimate and the rental-listing-vs-disclosure discrepancy already in writing.</div>
        </div>
        <div class="rung target">
          <div class="rung-label">Target (Settle Here)</div>
          <div class="rung-amount">List − 6%</div>
          <div class="rung-ppsf">Plus seller-paid waterproofing &amp; closing</div>
          <div class="rung-rationale">The realistic landing zone. Trade dollars for terms: keep the price closer to ask if the seller funds waterproofing in writing, contributes to closing costs, and accepts a 30-day inspection contingency.</div>
        </div>
        <div class="rung ceiling">
          <div class="rung-label">Walk-Away Ceiling</div>
          <div class="rung-amount">List − 2%</div>
          <div class="rung-ppsf">Only if every contingency holds</div>
          <div class="rung-rationale">Above this number the deal does not work given the disclosed defects. No emotional anchoring above ceiling — walk and let the seller come back. Buttewoods is desirable but not unique.</div>
        </div>
      </div>
      <div class="callout warn" style="margin-top:22px;">
        <div class="callout-title">Discipline Note</div>
        <p>Aaron — the ceiling is the ceiling. If the seller will not move past list − 2%, the right move is a written final-and-best, then silence. A 7,098 sq ft estate with documented water issues is not a property where the buyer chases.</p>
      </div>
    </section>

    <!-- NEGOTIATION STRATEGY -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Strategy Matrix</span></h2>
      <table class="strategy-table">
        <thead>
          <tr>
            <th>Lever</th>
            <th>Our Position</th>
            <th>Tactic</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Price</strong></td>
            <td>Tied to documented condition + comparable sales</td>
            <td>Open at list − 12% with written H2O scope as the anchor document</td>
            <td><span class="tag tag-anchor">Anchor</span></td>
          </tr>
          <tr>
            <td><strong>Waterproofing</strong></td>
            <td>Must be addressed in writing pre-closing</td>
            <td>Require H2O Waterproofing written warranty before closing or full credit</td>
            <td><span class="tag tag-target">Target</span></td>
          </tr>
          <tr>
            <td><strong>Disclosure Discrepancy</strong></td>
            <td>Rental listing contradicts seller disclosure — that is leverage</td>
            <td>Reference the discrepancy in writing in the offer cover letter</td>
            <td><span class="tag tag-anchor">Anchor</span></td>
          </tr>
          <tr>
            <td><strong>Inspection Period</strong></td>
            <td>14–21 days, with right to renegotiate on findings</td>
            <td>Decline any "as-is" or waived-inspection clauses</td>
            <td><span class="tag tag-walk">Walk-Stop</span></td>
          </tr>
          <tr>
            <td><strong>Earnest Money</strong></td>
            <td>Standard 1% — no escalation</td>
            <td>Refundable through inspection period; no non-refundable wrinkles</td>
            <td><span class="tag tag-target">Target</span></td>
          </tr>
          <tr>
            <td><strong>Closing Date</strong></td>
            <td>Flexible — use as a trade good</td>
            <td>Offer seller's preferred close date in exchange for price/repair concession</td>
            <td><span class="tag tag-target">Target</span></td>
          </tr>
          <tr>
            <td><strong>Survey &amp; Title</strong></td>
            <td>New survey, full title commitment, owner's title policy</td>
            <td>Buyer chooses title company; no exceptions to standard policy</td>
            <td><span class="tag tag-walk">Walk-Stop</span></td>
          </tr>
          <tr>
            <td><strong>Appraisal Gap</strong></td>
            <td>None offered</td>
            <td>If financed, appraisal contingency stays — no gap coverage given disclosed issues</td>
            <td><span class="tag tag-walk">Walk-Stop</span></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- LEVERAGE ANALYSIS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Analysis</span></h2>
      <div class="leverage-grid">
        <div class="lev-card">
          <h4>Our Leverage</h4>
          <p>Documented water intrusion disclosure omission. Documented disclosure-vs-rental-listing discrepancy. Quote in hand from H2O Waterproofing. Cash or conventional financing — clean buyer profile, no contingent sale.</p>
        </div>
        <div class="lev-card theirs">
          <h4>Seller's Leverage</h4>
          <p>Buttewoods is a desirable address. 7,098 sq ft estates do not list often. If there are competing offers, the seller may walk before negotiating on price. Mitigate by moving with conviction once terms are aligned.</p>
        </div>
        <div class="lev-card">
          <h4>Information Asymmetry — In Our Favor</h4>
          <p>Aaron's team has already cataloged the disclosure issues in writing. Most buyers will not have done that work. That preparation is the single biggest negotiation lever on the table.</p>
        </div>
        <div class="lev-card theirs">
          <h4>Information Asymmetry — Against Us</h4>
          <p>Seller knows their bottom number; we are estimating it. Watch for tells in the listing agent's responses on timing and on which terms generate friction versus flexibility.</p>
        </div>
      </div>
    </section>

    <!-- OPENING SCRIPT -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Opening</span> <span class="rest">Script — Verbal Anchor</span></h2>
      <div class="script-block">
        <p>"<em>We're serious buyers and we want this property.</em> We've done our homework — survey, title pull, and an inspection-pattern review on the waterproofing concerns we already flagged in writing. Based on what we've documented, plus the discrepancy between the rental listing description and the seller's disclosure, we are coming in at <em>list minus twelve percent</em>, with the seller funding the H2O Waterproofing scope in writing before closing. We can close on the seller's timeline. We don't need a long courtship — if we can align on price and the waterproofing, we sign this week."</p>
      </div>
      <div class="callout" style="margin-top:18px;">
        <div class="callout-title">Delivery Notes</div>
        <p>Calm, factual, no apology, no over-explanation. Lead with conviction ("we want this property"), present the documented basis, name the number, name the term. Then stop talking. The first person to fill silence loses leverage.</p>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">14-Day</span> <span class="rest">Negotiation Timeline</span></h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-day">Day 0 — April 22</div>
          <div class="timeline-event">Brief locked, attorney loop-in</div>
          <div class="timeline-detail">This document finalized. Real estate attorney reviewed offer structure and contingency language before submission.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-day">Day 1 — April 23</div>
          <div class="timeline-event">Written offer delivered</div>
          <div class="timeline-detail">Submit at opening anchor (list − 12%) with H2O Waterproofing quote and disclosure discrepancy attached as supporting documents. 48-hour response window.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-day">Days 2–3 — April 24–25</div>
          <div class="timeline-event">Counter received and analyzed</div>
          <div class="timeline-detail">Do not respond same-day to any counter. Sleep on every counter at least one night before replying.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-day">Days 4–7 — April 26–29</div>
          <div class="timeline-event">Iterative counter-offers toward target</div>
          <div class="timeline-detail">Trade price for terms (closing date, waterproofing in writing, repair escrow). Stay disciplined to ladder.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-day">Day 8 — April 30</div>
          <div class="timeline-event">Final-and-best, if needed</div>
          <div class="timeline-detail">If the gap won't close at target, deliver written final-and-best at ceiling with a hard 24-hour expiration. Then silence.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-day">Days 9–14 — May 1–6</div>
          <div class="timeline-event">Contract executed or walk</div>
          <div class="timeline-detail">Either fully executed contract under terms, or a clean walk with a written door-open note. No protracted limbo.</div>
        </div>
      </div>
    </section>

    <!-- CONTINGENCY CHECKLIST -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Contract</span> <span class="rest">Contingency Checklist</span></h2>
      <ul class="checklist">
        <li><strong>Inspection contingency</strong> — 14–21 days, right to renegotiate or terminate on findings, full earnest money refund if terminated within window.</li>
        <li><strong>Waterproofing contingency</strong> — H2O Waterproofing scope, price, and warranty in writing pre-closing OR equivalent dollar credit at closing.</li>
        <li><strong>Disclosure attachment</strong> — Seller's disclosure form attached to contract, signed; rental-listing description referenced as part of the file.</li>
        <li><strong>Title contingency</strong> — Clean title commitment, no exceptions to standard owner's policy, buyer's choice of title company.</li>
        <li><strong>Survey contingency</strong> — New ALTA survey, no encroachments, easements identified and acceptable.</li>
        <li><strong>Appraisal contingency</strong> — If financed, appraisal must support contract price; no appraisal-gap coverage.</li>
        <li><strong>Repair escrow holdback</strong> — Seller funds escrow at closing for any latent moisture defects discovered within 90 days post-closing.</li>
        <li><strong>Walk-away clause</strong> — Earnest money fully refundable if any documented disclosure proves materially false at inspection.</li>
      </ul>
    </section>

    <!-- DECISION LOG / NEXT STEPS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Steps — This Week</span></h2>
      <div class="two-col">
        <div class="info-card">
          <h3>Aaron — Action Items</h3>
          <dl>
            <dt>Today</dt><dd>Confirm H2O Waterproofing written estimate is in hand</dd>
            <dt>Today</dt><dd>Loop in real estate attorney on offer language</dd>
            <dt>Tomorrow</dt><dd>Submit written offer at opening anchor</dd>
            <dt>This week</dt><dd>Hold ladder discipline through every counter</dd>
          </dl>
        </div>
        <div class="info-card">
          <h3>Hold-the-Line Reminders</h3>
          <dl>
            <dt>Rule 1</dt><dd>Never raise without getting something in return</dd>
            <dt>Rule 2</dt><dd>Always sleep one night before responding to a counter</dd>
            <dt>Rule 3</dt><dd>Walk-away ceiling is non-negotiable</dd>
            <dt>Rule 4</dt><dd>Documents beat conversation — get every term in writing</dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- CLOSING NOTE -->
    <section class="nu-section" style="margin-bottom:0;">
      <div class="callout">
        <div class="callout-title">Why This Matters</div>
        <p>This is a personal real estate negotiation, not a Norris Utilities® transaction — but the same principles apply: documented preparation beats verbal positioning, terms are worth as much as price, and the buyer who is willing to walk wins more often than the buyer who falls in love. A 7,098 sq ft estate is a long-term commitment; the negotiation is the cheapest opportunity to protect that commitment.</p>
      </div>
    </section>

  </div>
</main>

<!-- FOOTER -->
<footer class="nu-footer">
  <div class="nu-footer-rule"></div>
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