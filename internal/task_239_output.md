<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estate Negotiation Strategy — 4505 Buttewoods — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
<style>
:root{
  --nu-blue:#0000FF;
  --nu-cyan:#06D0FF;
  --nu-navy:#000033;
  --nu-white:#FFFFFF;
  --nu-light-gray:#F5F5F7;
  --nu-medium-gray:#E8E8EC;
  --nu-dark-text:#1A1A2E;
  --nu-body-text:#333333;
  --nu-accent-gold:#C9A84C;
  --nu-success:#16a34a;
  --nu-warning:#d97706;
  --nu-danger:#dc2626;
  --font-primary:'Lato',-apple-system,BlinkMacSystemFont,sans-serif;
  --font-italic:'Playfair Display',serif;
}
*{margin:0;padding:0;box-sizing:border-box;}
html{font-size:16px;scroll-behavior:smooth;}
body{font-family:var(--font-primary);color:var(--nu-body-text);background:var(--nu-light-gray);line-height:1.6;-webkit-font-smoothing:antialiased;}

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
  content:'';position:absolute;top:0;left:0;right:0;bottom:0;
  background:
    repeating-linear-gradient(90deg,rgba(255,255,255,0.02) 0px,rgba(255,255,255,0.02) 2px,transparent 2px,transparent 60px),
    repeating-linear-gradient(0deg,rgba(255,255,255,0.015) 0px,rgba(255,255,255,0.015) 1px,transparent 1px,transparent 80px);
  z-index:1;
}
.nu-header::after{
  content:'';position:absolute;top:-50%;right:-20%;width:80%;height:200%;
  background:radial-gradient(ellipse,rgba(6,208,255,0.15) 0%,transparent 70%);z-index:1;
}
.nu-header *{position:relative;z-index:2;}
.nu-phoenix-icon{width:80px;height:80px;margin:0 auto 16px;filter:drop-shadow(0 2px 10px rgba(0,0,0,0.3));}
.nu-logo-text{font-family:var(--font-primary);font-weight:900;font-size:3.2rem;color:var(--nu-white);letter-spacing:0.35em;text-transform:uppercase;margin-bottom:4px;text-shadow:0 2px 20px rgba(0,0,0,0.3);}
.nu-logo-subtitle{font-family:var(--font-primary);font-weight:900;font-size:1.4rem;color:var(--nu-white);letter-spacing:0.8em;text-transform:uppercase;margin-bottom:20px;}
.nu-tagline{font-family:var(--font-italic);font-style:italic;font-weight:400;font-size:1.4rem;color:var(--nu-cyan);letter-spacing:0.05em;}

/* CHEVRON */
.nu-chevron{position:relative;height:50px;margin-top:-50px;z-index:10;}
.nu-chevron svg{width:100%;height:50px;display:block;}

/* DOC TITLE BAR */
.doc-titlebar{
  background:var(--nu-white);
  border-bottom:1px solid var(--nu-medium-gray);
  padding:24px 40px;
  text-align:center;
}
.doc-titlebar .doc-kicker{
  font-weight:700;font-size:0.75rem;letter-spacing:0.25em;text-transform:uppercase;
  color:var(--nu-blue);margin-bottom:6px;
}
.doc-titlebar h1{
  font-weight:900;font-size:2rem;color:var(--nu-dark-text);letter-spacing:-0.01em;line-height:1.2;
}
.doc-titlebar h1 span{color:var(--nu-blue);}
.doc-titlebar .doc-meta{
  margin-top:10px;font-size:0.9rem;color:#666;font-weight:400;
}

/* CONTENT */
.nu-content-area{position:relative;background:var(--nu-light-gray);}
.nu-content-area::before{
  content:'';position:absolute;top:200px;left:50%;transform:translateX(-50%);
  width:65%;max-width:700px;height:700px;
  background:radial-gradient(circle,rgba(0,0,255,0.04) 0%,transparent 60%);
  z-index:0;pointer-events:none;
}
.nu-content-area > *{position:relative;z-index:1;}
.container{max-width:1100px;margin:0 auto;padding:50px 40px;}

/* SECTION */
.section{margin-bottom:40px;}
.nu-section-title{
  font-family:var(--font-primary);font-weight:900;font-size:1.5rem;
  margin-bottom:16px;letter-spacing:-0.01em;
}
.nu-section-title .first{color:var(--nu-blue);}
.nu-section-title .rest{color:var(--nu-dark-text);font-weight:700;}
.section-rule{
  height:3px;width:60px;background:var(--nu-cyan);margin-bottom:20px;border-radius:2px;
}

/* SUMMARY GRID */
.summary-grid{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:16px;margin-bottom:8px;
}
.summary-cell{
  background:var(--nu-white);border:1px solid var(--nu-medium-gray);
  border-radius:8px;padding:18px;
  box-shadow:0 1px 3px rgba(0,0,0,0.04);
}
.summary-cell .label{
  font-size:0.7rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;
  color:#666;margin-bottom:8px;
}
.summary-cell .value{
  font-size:1.4rem;font-weight:900;color:var(--nu-dark-text);line-height:1.1;
}
.summary-cell .value.blue{color:var(--nu-blue);}
.summary-cell .sub{font-size:0.8rem;color:#888;margin-top:4px;font-weight:400;}

/* PROPERTY CARD */
.property-card{
  background:var(--nu-white);border-radius:10px;
  border:1px solid var(--nu-medium-gray);overflow:hidden;
  box-shadow:0 2px 12px rgba(0,0,0,0.06);
}
.property-card .pc-head{
  background:linear-gradient(135deg,var(--nu-navy) 0%,#000066 100%);
  color:var(--nu-white);padding:20px 24px;
}
.property-card .pc-head .addr{font-weight:900;font-size:1.3rem;letter-spacing:0.01em;}
.property-card .pc-head .sub{font-size:0.85rem;color:rgba(255,255,255,0.75);margin-top:4px;font-weight:400;letter-spacing:0.04em;}
.property-card .pc-body{padding:0;}
.facts-table{width:100%;border-collapse:collapse;}
.facts-table tr{border-bottom:1px solid var(--nu-medium-gray);}
.facts-table tr:last-child{border-bottom:none;}
.facts-table td{padding:14px 24px;font-size:0.95rem;}
.facts-table td:first-child{
  font-weight:700;color:#555;width:40%;
  background:#fafafb;letter-spacing:0.01em;
}
.facts-table td:last-child{color:var(--nu-dark-text);font-weight:400;}

/* PHASE STEPS */
.phase-list{display:flex;flex-direction:column;gap:14px;}
.phase{
  background:var(--nu-white);border:1px solid var(--nu-medium-gray);
  border-radius:8px;padding:20px 24px 20px 70px;position:relative;
  box-shadow:0 1px 3px rgba(0,0,0,0.04);
}
.phase .num{
  position:absolute;left:18px;top:18px;
  width:36px;height:36px;border-radius:50%;
  background:linear-gradient(135deg,var(--nu-blue) 0%,var(--nu-cyan) 100%);
  color:var(--nu-white);font-weight:900;font-size:1rem;
  display:flex;align-items:center;justify-content:center;
}
.phase h3{font-weight:900;font-size:1.05rem;color:var(--nu-dark-text);margin-bottom:6px;}
.phase .timing{
  display:inline-block;font-size:0.7rem;font-weight:700;letter-spacing:0.12em;
  text-transform:uppercase;color:var(--nu-blue);margin-bottom:8px;
  background:#e6e6ff;padding:3px 10px;border-radius:12px;
}
.phase p{font-size:0.93rem;color:var(--nu-body-text);}
.phase ul{margin-top:8px;padding-left:18px;}
.phase ul li{font-size:0.92rem;color:var(--nu-body-text);margin-bottom:4px;}

/* PRICE LADDER */
.ladder{
  background:var(--nu-white);border-radius:10px;border:1px solid var(--nu-medium-gray);
  overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);
}
.ladder-row{
  display:grid;grid-template-columns:80px 1fr 180px 140px;
  align-items:center;gap:16px;
  padding:18px 24px;border-bottom:1px solid var(--nu-medium-gray);
}
.ladder-row:last-child{border-bottom:none;}
.ladder-row.header{
  background:#f4f4f8;font-size:0.7rem;font-weight:700;letter-spacing:0.15em;
  text-transform:uppercase;color:#555;padding:12px 24px;
}
.ladder-row .badge{
  display:inline-flex;align-items:center;justify-content:center;
  width:60px;height:28px;border-radius:14px;font-weight:900;font-size:0.85rem;
}
.ladder-row .b-open{background:#dbeafe;color:#1e40af;}
.ladder-row .b-target{background:#dcfce7;color:#15803d;}
.ladder-row .b-walk{background:#fee2e2;color:#b91c1c;}
.ladder-row .label{font-weight:700;color:var(--nu-dark-text);font-size:0.95rem;}
.ladder-row .label .sub{font-weight:400;font-size:0.82rem;color:#666;display:block;margin-top:2px;}
.ladder-row .price{font-weight:900;font-size:1.15rem;color:var(--nu-dark-text);font-variant-numeric:tabular-nums;}
.ladder-row .delta{font-size:0.85rem;color:#666;font-weight:700;font-variant-numeric:tabular-nums;}
.ladder-row .delta.neg{color:var(--nu-success);}
.ladder-row .delta.pos{color:var(--nu-danger);}

/* TWO COL */
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
.col-card{
  background:var(--nu-white);border:1px solid var(--nu-medium-gray);
  border-radius:10px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.04);
}
.col-card.leverage{border-top:4px solid var(--nu-success);}
.col-card.risk{border-top:4px solid var(--nu-warning);}
.col-card h3{
  font-weight:900;font-size:1.05rem;color:var(--nu-dark-text);
  margin-bottom:14px;display:flex;align-items:center;gap:10px;
}
.col-card h3 .dot{width:10px;height:10px;border-radius:50%;}
.col-card.leverage h3 .dot{background:var(--nu-success);}
.col-card.risk h3 .dot{background:var(--nu-warning);}
.col-card ul{list-style:none;padding:0;}
.col-card ul li{
  padding:10px 0 10px 24px;border-bottom:1px solid #f1f1f5;
  font-size:0.92rem;position:relative;color:var(--nu-body-text);
}
.col-card ul li:last-child{border-bottom:none;}
.col-card ul li::before{
  content:'';position:absolute;left:0;top:18px;
  width:10px;height:2px;background:var(--nu-cyan);
}
.col-card ul li b{color:var(--nu-dark-text);font-weight:700;}

/* CONTINGENCIES */
.cx-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;}
.cx{
  background:var(--nu-white);border:1px solid var(--nu-medium-gray);
  border-radius:8px;padding:18px;
  box-shadow:0 1px 3px rgba(0,0,0,0.04);
}
.cx .cx-tag{
  display:inline-block;font-size:0.65rem;font-weight:700;letter-spacing:0.15em;
  text-transform:uppercase;color:var(--nu-white);background:var(--nu-blue);
  padding:3px 10px;border-radius:10px;margin-bottom:10px;
}
.cx h4{font-weight:900;font-size:0.98rem;color:var(--nu-dark-text);margin-bottom:6px;}
.cx p{font-size:0.88rem;color:var(--nu-body-text);}

/* ACTION CHECKLIST */
.checklist{
  background:var(--nu-white);border-radius:10px;
  border:1px solid var(--nu-medium-gray);overflow:hidden;
}
.check-row{
  display:grid;grid-template-columns:40px 1fr 130px 110px;
  gap:14px;align-items:center;
  padding:14px 20px;border-bottom:1px solid var(--nu-medium-gray);
  font-size:0.92rem;
}
.check-row:last-child{border-bottom:none;}
.check-row.header{
  background:#f4f4f8;font-size:0.7rem;font-weight:700;letter-spacing:0.15em;
  text-transform:uppercase;color:#555;
}
.check-row .box{
  width:22px;height:22px;border:2px solid var(--nu-medium-gray);
  border-radius:4px;
}
.check-row .task{color:var(--nu-dark-text);font-weight:400;}
.check-row .task b{font-weight:700;}
.check-row .owner{font-weight:700;color:var(--nu-blue);font-size:0.85rem;}
.check-row .when{font-size:0.82rem;color:#666;font-weight:700;}

/* CALLOUT */
.callout{
  background:linear-gradient(135deg,#fff8e6 0%,#fffdf5 100%);
  border-left:4px solid var(--nu-accent-gold);
  border-radius:8px;padding:20px 24px;
  margin:24px 0;
}
.callout .title{
  font-weight:900;color:var(--nu-dark-text);font-size:0.95rem;
  margin-bottom:6px;letter-spacing:0.02em;
}
.callout p{font-size:0.92rem;color:var(--nu-body-text);}

/* SCRIPT */
.script-block{
  background:var(--nu-white);border:1px solid var(--nu-medium-gray);
  border-radius:10px;padding:24px 28px;font-style:italic;color:var(--nu-body-text);
  font-size:0.95rem;line-height:1.7;position:relative;
  box-shadow:0 1px 3px rgba(0,0,0,0.04);
}
.script-block::before{
  content:'\201C';position:absolute;top:-10px;left:18px;
  font-family:var(--font-italic);font-size:4rem;color:var(--nu-cyan);
  font-weight:900;line-height:1;
}
.script-block p{margin-bottom:12px;padding-left:30px;}
.script-block p:last-child{margin-bottom:0;}

/* FOOTER */
.nu-footer{
  background:linear-gradient(135deg,var(--nu-navy) 0%,#000066 100%);
  color:rgba(255,255,255,0.85);padding:48px 40px;text-align:center;
  font-family:var(--font-primary);
}
.nu-footer-tagline{
  font-family:var(--font-italic);font-style:italic;font-weight:400;
  font-size:1.3rem;color:var(--nu-cyan);margin-bottom:14px;letter-spacing:0.02em;
}
.nu-footer-contact{font-size:0.95rem;line-height:1.9;}
.nu-footer-contact a{color:var(--nu-cyan);text-decoration:none;}
.nu-footer-contact a:hover{text-decoration:underline;}
.nu-footer-fineprint{
  margin-top:18px;font-size:0.78rem;color:rgba(255,255,255,0.5);letter-spacing:0.02em;
}

@media (max-width:768px){
  .nu-header{padding:40px 20px 60px;min-height:200px;}
  .nu-logo-text{font-size:2rem;letter-spacing:0.2em;}
  .nu-logo-subtitle{font-size:1rem;letter-spacing:0.5em;}
  .nu-tagline{font-size:1.05rem;}
  .container{padding:30px 20px;}
  .doc-titlebar{padding:20px;}
  .doc-titlebar h1{font-size:1.4rem;}
  .two-col{grid-template-columns:1fr;}
  .ladder-row{grid-template-columns:70px 1fr;gap:10px;padding:14px 16px;}
  .ladder-row .price,.ladder-row .delta{grid-column:2;font-size:1rem;}
  .ladder-row.header{display:none;}
  .check-row{grid-template-columns:30px 1fr;gap:8px;}
  .check-row .owner,.check-row .when{grid-column:2;font-size:0.78rem;}
  .check-row.header{display:none;}
  .facts-table td{padding:12px 16px;font-size:0.88rem;}
}
@media print{
  body{background:var(--nu-white);}
  .nu-header{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
  .phase,.col-card,.summary-cell,.cx,.property-card,.ladder,.checklist,.script-block{box-shadow:none;}
}
</style>
</head>
<body>

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
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
  </svg>
</div>

<div class="doc-titlebar">
  <div class="doc-kicker">Internal Action Plan · Confidential</div>
  <h1>Estate Negotiation Strategy — <span>4505 Buttewoods</span></h1>
  <div class="doc-meta">7,098 sq ft Estate Acquisition · Prepared 2026-04-25 · Owner: Aaron C. Norris</div>
</div>

<main class="nu-content-area">
  <div class="container">

    <!-- DEAL SUMMARY -->
    <section class="section">
      <div class="nu-section-title"><span class="first">Deal</span> <span class="rest">Snapshot</span></div>
      <div class="section-rule"></div>
      <div class="summary-grid">
        <div class="summary-cell">
          <div class="label">Subject Property</div>
          <div class="value">4505 Buttewoods</div>
          <div class="sub">7,098 sq ft estate</div>
        </div>
        <div class="summary-cell">
          <div class="label">Buyer Posture</div>
          <div class="value blue">Negotiate</div>
          <div class="sub">Active — not yet under contract</div>
        </div>
        <div class="summary-cell">
          <div class="label">Source</div>
          <div class="value">reMarkable</div>
          <div class="sub">Action item — handwritten note</div>
        </div>
        <div class="summary-cell">
          <div class="label">Owner of Action</div>
          <div class="value">Aaron C. Norris</div>
          <div class="sub">Personal acquisition</div>
        </div>
      </div>
    </section>

    <!-- PROPERTY FACTS -->
    <section class="section">
      <div class="nu-section-title"><span class="first">Property</span> <span class="rest">Fact Sheet</span></div>
      <div class="section-rule"></div>
      <div class="property-card">
        <div class="pc-head">
          <div class="addr">4505 Buttewoods</div>
          <div class="sub">Single-Family Estate · 7,098 sq ft Conditioned Space</div>
        </div>
        <div class="pc-body">
          <table class="facts-table">
            <tr><td>Address</td><td>4505 Buttewoods (full street designation to confirm at title)</td></tr>
            <tr><td>Conditioned Square Footage</td><td>7,098 sq ft</td></tr>
            <tr><td>Property Type</td><td>Estate / single-family residence</td></tr>
            <tr><td>Transaction Type</td><td>Direct purchase negotiation (off-market or listed — confirm)</td></tr>
            <tr><td>Negotiation Stage</td><td>Pre-offer / opening positioning</td></tr>
            <tr><td>Decision Maker</td><td>Aaron C. Norris</td></tr>
            <tr><td>Counterparty</td><td>Seller / seller's agent (identify and document)</td></tr>
            <tr><td>Source of Lead</td><td>reMarkable handwritten action item</td></tr>
          </table>
        </div>
      </div>
      <div class="callout">
        <div class="title">Data Verification Required Before First Offer</div>
        <p>Before opening price is communicated, confirm the following at title and from public record: full legal address, parcel ID, current owner of record, lien position, tax assessment, last sale price &amp; date, square footage by appraiser of record, lot acreage, and HOA / restrictions. Do not anchor on a number until these are documented.</p>
      </div>
    </section>

    <!-- NEGOTIATION PHASES -->
    <section class="section">
      <div class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Phases</span></div>
      <div class="section-rule"></div>
      <div class="phase-list">

        <div class="phase">
          <div class="num">1</div>
          <span class="timing">Days 0 – 3 · Discovery</span>
          <h3>Pull the Truth on the Property</h3>
          <p>Build the file before any number is spoken. Verifiable facts are leverage; assumptions are weakness.</p>
          <ul>
            <li>Pull deed, tax record, parcel ID, last sale price &amp; date.</li>
            <li>Pull comparable sales — three sold within 12 months, same school zone, ±15% sq ft.</li>
            <li>Identify motivation: estate sale, divorce, relocation, distressed, or discretionary.</li>
            <li>Note days on market (if listed); price reduction history.</li>
            <li>Walk the property with eyes on roof, HVAC, foundation, water intrusion, and grounds.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="num">2</div>
          <span class="timing">Days 3 – 7 · Position</span>
          <h3>Establish the Range and the Walk-Away</h3>
          <p>Three numbers go on paper before contact: opening, target, walk-away. Once those are locked, do not move them mid-conversation under emotional pressure.</p>
          <ul>
            <li>Set opening offer 12 – 15% below comp-supported market.</li>
            <li>Set target inside comp range, accounting for repair credits.</li>
            <li>Set hard walk-away at the price where the deal stops being advantageous.</li>
            <li>Decide cash vs. financed posture — cash buys 3 – 5% in price concession typically.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="num">3</div>
          <span class="timing">Days 7 – 10 · Open</span>
          <h3>Deliver the Opening Offer in Writing</h3>
          <p>Open in writing through counsel or licensed agent. Verbal opens leak. Written opens earn the business.</p>
          <ul>
            <li>Letter of intent or formal purchase offer — never a casual text.</li>
            <li>Include earnest money commensurate with seriousness (1 – 2%).</li>
            <li>Include short due-diligence window (10 – 15 days) to compress seller's optionality.</li>
            <li>Do not anchor against the asking price — anchor against the comps.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="num">4</div>
          <span class="timing">Days 10 – 21 · Counter Cycles</span>
          <h3>Move in Decreasing Increments</h3>
          <p>The shape of the move tells the story. Every counter from us should be smaller than the last — that signals we are approaching the wall.</p>
          <ul>
            <li>First counter from us: roughly 50% of the gap.</li>
            <li>Second counter from us: roughly 25% of remaining gap.</li>
            <li>Third counter: small, paired with non-price asks (closing date, repair credits, fixtures).</li>
            <li>Hold silence after each counter — patience compresses the seller's expectations.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="num">5</div>
          <span class="timing">Days 21 – 30 · Inspect &amp; Re-Negotiate</span>
          <h3>Use the Inspection as a Second Negotiation</h3>
          <p>Most contracts move twice: at price agreement, and at inspection response. Plan for the second move now.</p>
          <ul>
            <li>Independent licensed inspector — no agent referral.</li>
            <li>Roof, HVAC age, electrical panel, plumbing, foundation, basement / water intrusion, sewer scope.</li>
            <li>Quantify findings into a credit request — supported by contractor estimates, not opinions.</li>
            <li>Decide in advance: take credit, take repairs, walk, or proceed as-is.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="num">6</div>
          <span class="timing">Days 30 – 45 · Close</span>
          <h3>Title, Funds, and Final Walk-Through</h3>
          <p>The last 10 days are administrative — but execution risk is highest here. Stay in close contact with title and lender.</p>
          <ul>
            <li>Clear title: confirm no surprise liens, easements, or encroachments.</li>
            <li>Survey ordered before closing — never optional on a 7,098 sq ft estate.</li>
            <li>Final walk-through within 24 hours of closing.</li>
            <li>Wire fraud protocol: confirm wire instructions by phone with title only.</li>
          </ul>
        </div>

      </div>
    </section>

    <!-- PRICE LADDER -->
    <section class="section">
      <div class="nu-section-title"><span class="first">Price</span> <span class="rest">Ladder &amp; Walk-Away</span></div>
      <div class="section-rule"></div>
      <p style="margin-bottom:16px;color:#555;font-size:0.95rem;">All figures are placeholders for the discipline of the structure — populate the dollar columns once comps and appraised value are pulled. Never enter the conversation without these three numbers locked.</p>
      <div class="ladder">
        <div class="ladder-row header">
          <div>Stage</div><div>Definition</div><div>Price</div><div>Delta</div>
        </div>
        <div class="ladder-row">
          <span class="badge b-open">OPEN</span>
          <div class="label">Opening Offer
            <span class="sub">Anchored 12 – 15% below comp-supported value</span></div>
          <div class="price">— populate from comps —</div>
          <div class="delta neg">−12% to −15%</div>
        </div>
        <div class="ladder-row">
          <span class="badge b-target">TARGET</span>
          <div class="label">Target Close
            <span class="sub">Inside comp range, net of inspection credits</span></div>
          <div class="price">— populate from comps —</div>
          <div class="delta">at market</div>
        </div>
        <div class="ladder-row">
          <span class="badge b-walk">WALK</span>
          <div class="label">Hard Walk-Away
            <span class="sub">Price where deal is no longer advantageous</span></div>
          <div class="price">— populate from comps —</div>
          <div class="delta pos">do not exceed</div>
        </div>
      </div>
      <div class="callout">
        <div class="title">Discipline Rule</div>
        <p>The walk-away number is written on paper before the first conversation, and is not adjusted during a negotiation. Adjusting it mid-cycle is how good buyers overpay. If the deal can't close inside the ladder, we walk and revisit in 30 days.</p>
      </div>
    </section>

    <!-- LEVERAGE & RISK -->
    <section class="section">
      <div class="nu-section-title"><span class="first">Leverage</span> <span class="rest">&amp; Risk Map</span></div>
      <div class="section-rule"></div>
      <div class="two-col">
        <div class="col-card leverage">
          <h3><span class="dot"></span>Buyer Leverage</h3>
          <ul>
            <li><b>Cash &amp; speed.</b> Ability to close in 30 days without financing contingency.</li>
            <li><b>Clean offer.</b> Few contingencies, short inspection window, flexible close date.</li>
            <li><b>Patience.</b> No deadline driving us — the seller has the deadline.</li>
            <li><b>Comps in hand.</b> Documented market value beats the seller's emotional asking price.</li>
            <li><b>Walk credibility.</b> Willingness to walk is the single largest source of leverage.</li>
          </ul>
        </div>
        <div class="col-card risk">
          <h3><span class="dot"></span>Risks &amp; Watch-Outs</h3>
          <ul>
            <li><b>Hidden defects.</b> 7,098 sq ft means more roof, more mechanicals, more failure surface — inspect aggressively.</li>
            <li><b>Title surprises.</b> Estates often carry old liens, easements, or family-trust complications.</li>
            <li><b>Foundation &amp; water.</b> Large footprint and basement (if present) raise water-intrusion risk.</li>
            <li><b>Tax reassessment.</b> New assessed value at sale could materially raise carrying cost.</li>
            <li><b>Anchoring bias.</b> Seller's asking price is not the value — refuse to anchor on it.</li>
            <li><b>Emotional drift.</b> Walking the property creates attachment — keep numbers in writing.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CONTINGENCIES -->
    <section class="section">
      <div class="nu-section-title"><span class="first">Contract</span> <span class="rest">Contingencies</span></div>
      <div class="section-rule"></div>
      <div class="cx-grid">
        <div class="cx">
          <span class="cx-tag">Inspection</span>
          <h4>10 – 15 Day Window</h4>
          <p>Right to inspect with licensed inspector. Right to renegotiate or terminate based on findings. Sewer scope, foundation, and roof must be itemized.</p>
        </div>
        <div class="cx">
          <span class="cx-tag">Appraisal</span>
          <h4>Value Floor</h4>
          <p>If financed, appraisal contingency mandatory. If cash, optional appraisal at our cost — still useful as a re-trade tool.</p>
        </div>
        <div class="cx">
          <span class="cx-tag">Title</span>
          <h4>Clear &amp; Marketable</h4>
          <p>Title commitment reviewed by counsel. Owner's title insurance non-negotiable on a property this size. Survey before close.</p>
        </div>
        <div class="cx">
          <span class="cx-tag">Financing</span>
          <h4>Method Decision</h4>
          <p>Cash vs. financed decided before opening offer. Cash earns price concession; financing widens the close window. Pick once, stick with it.</p>
        </div>
        <div class="cx">
          <span class="cx-tag">Disclosures</span>
          <h4>Seller Disclosure</h4>
          <p>Full written disclosure required. Specifically request prior water intrusion, foundation work, roof age, HVAC age, and any insurance claims in last 5 years.</p>
        </div>
        <div class="cx">
          <span class="cx-tag">Possession</span>
          <h4>Possession at Close</h4>
          <p>No post-occupancy lease-back unless paid market rate with deposit. Avoid handing the seller free residency.</p>
        </div>
      </div>
    </section>

    <!-- ACTION CHECKLIST -->
    <section class="section">
      <div class="nu-section-title"><span class="first">Aaron's</span> <span class="rest">Action Checklist</span></div>
      <div class="section-rule"></div>
      <div class="checklist">
        <div class="check-row header">
          <div></div><div>Action</div><div>Owner</div><div>Window</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Confirm full address &amp; parcel ID</b> at title / county property records.</div>
          <div class="owner">Aaron</div>
          <div class="when">Day 1</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Pull comparable sales</b> — three closed within 12 months.</div>
          <div class="owner">Aaron</div>
          <div class="when">Day 1 – 2</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Identify seller motivation</b> through agent or direct conversation.</div>
          <div class="owner">Aaron</div>
          <div class="when">Day 2 – 3</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Decide financing posture</b> — cash, conventional, or hybrid.</div>
          <div class="owner">Aaron</div>
          <div class="when">Day 3</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Lock open / target / walk-away numbers</b> in writing — do not change once set.</div>
          <div class="owner">Aaron</div>
          <div class="when">Day 4</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Engage real estate counsel</b> for letter of intent and contract review.</div>
          <div class="owner">Aaron</div>
          <div class="when">Day 4 – 5</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Submit written opening offer</b> with earnest money and contingencies.</div>
          <div class="owner">Aaron / Counsel</div>
          <div class="when">Day 7</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Schedule licensed inspection</b> — independent, not agent-referred.</div>
          <div class="owner">Aaron</div>
          <div class="when">Day 12 – 15</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Order survey &amp; title commitment</b>; review for liens / easements.</div>
          <div class="owner">Counsel</div>
          <div class="when">Day 15 – 20</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Inspection re-trade</b> if findings warrant credit request.</div>
          <div class="owner">Aaron</div>
          <div class="when">Day 20 – 25</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Final walk-through</b> within 24 hours of closing.</div>
          <div class="owner">Aaron</div>
          <div class="when">Day 44</div>
        </div>
        <div class="check-row">
          <div class="box"></div>
          <div class="task"><b>Close &amp; record deed</b>; confirm wire instructions by phone with title.</div>
          <div class="owner">Aaron / Title</div>
          <div class="when">Day 45</div>
        </div>
      </div>
    </section>

    <!-- OPENING SCRIPT -->
    <section class="section">
      <div class="nu-section-title"><span class="first">Opening</span> <span class="rest">Conversation Script</span></div>
      <div class="section-rule"></div>
      <div class="script-block">
        <p>I appreciate you taking the time. I've walked the property and I've been through the comps in the area. The home is well-kept and the footprint is significant, and I respect what you've put into it.</p>
        <p>That said, I'm a serious buyer making a serious offer — not a fishing expedition. I'm prepared to move on a 30-day close, with earnest money, a short inspection window, and minimal contingencies. The number I'm coming in at is supported by comparable closed sales in the area, not a list price.</p>
        <p>I'd rather be straightforward with you than waste your time. Take a look at the offer and let me know where you stand. If we can find common ground, we can be at closing in five to six weeks. If we can't, I genuinely wish you well and we'll part on good terms.</p>
      </div>
      <div class="callout">
        <div class="title">Voice Notes for Aaron</div>
        <p>Greeting with em dash. Lead with respect, not flattery. State the ask clearly. Use "earn the business" framing. Close with the walk option — silently. Do not negotiate against yourself in the same call.</p>
      </div>
    </section>

    <!-- DECISION GATES -->
    <section class="section">
      <div class="nu-section-title"><span class="first">Decision</span> <span class="rest">Gates</span></div>
      <div class="section-rule"></div>
      <div class="cx-grid">
        <div class="cx">
          <span class="cx-tag">Gate 1</span>
          <h4>Proceed to Offer?</h4>
          <p>After Phase 1 discovery: do comps, condition, and seller motivation justify making a written offer? If NO — shelve and revisit in 60 days.</p>
        </div>
        <div class="cx">
          <span class="cx-tag">Gate 2</span>
          <h4>Counter or Walk?</h4>
          <p>After seller's first response: does the gap to our walk-away make a deal possible inside three counter cycles? If NO — walk now.</p>
        </div>
        <div class="cx">
          <span class="cx-tag">Gate 3</span>
          <h4>Close As-Is or Re-Trade?</h4>
          <p>After inspection: do findings exceed 2% of contract price? If YES — re-trade. If under — proceed to close.</p>
        </div>
        <div class="cx">
          <span class="cx-tag">Gate 4</span>
          <h4>Final Close Authorization</h4>
          <p>72 hours before closing: title clear, survey clean, walk-through scheduled, wire instructions verified by phone. Any NO — pause closing.</p>
        </div>
      </div>
    </section>

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
  <div class="nu-footer-fineprint">
    Internal action plan — confidential. Generated 2026-04-25 from reMarkable action item.<br>
    Phoenix Icon® is a registered trademark of Norris Utilities®, LLC.
  </div>
</footer>

</body>
</html>