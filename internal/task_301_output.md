<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Inventory PO Follow-Up — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
  --nu-success: #2D7D3F;
  --nu-warning: #D97706;
  --nu-danger: #B91C1C;
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
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
  padding: 60px 40px 90px;
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
    repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
  width: 72px;
  height: 72px;
  margin: 0 auto 18px;
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
  font-size: 1.25rem;
  color: var(--nu-white);
  letter-spacing: 0.7em;
  text-transform: uppercase;
  margin-bottom: 22px;
  padding-left: 0.7em;
}
.nu-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
}

/* CHEVRON TRANSITION */
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

/* CONTENT AREA */
.nu-content-area {
  position: relative;
  background: var(--nu-light-gray);
  padding: 60px 40px 80px;
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 80px; left: 50%;
  transform: translateX(-50%);
  width: 65%; max-width: 800px; height: 800px;
  background: radial-gradient(circle, rgba(0,0,255,0.045) 0%, transparent 65%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-content-inner {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
}

/* PAGE TITLE */
.page-title-block {
  text-align: center;
  margin-bottom: 50px;
}
.page-eyebrow {
  display: inline-block;
  background: var(--nu-blue);
  color: var(--nu-white);
  padding: 6px 18px;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 18px;
  border-radius: 2px;
}
.page-title {
  font-weight: 900;
  font-size: 2.6rem;
  color: var(--nu-dark-text);
  line-height: 1.15;
  margin-bottom: 14px;
  letter-spacing: -0.01em;
}
.page-title .accent {
  color: var(--nu-blue);
}
.page-subtitle {
  font-weight: 400;
  font-size: 1.1rem;
  color: var(--nu-body-text);
  max-width: 720px;
  margin: 0 auto;
}

/* SECTION HEADERS */
.nu-section-title {
  font-weight: 900;
  font-size: 1.5rem;
  margin: 50px 0 22px;
  letter-spacing: -0.005em;
}
.nu-section-title .accent {
  color: var(--nu-blue);
}
.nu-section-title .rest {
  color: var(--nu-dark-text);
  font-weight: 700;
}

/* STATUS DASHBOARD */
.status-dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 16px;
}
.status-tile {
  background: var(--nu-white);
  border-radius: 10px;
  padding: 22px 20px;
  border-left: 5px solid var(--nu-blue);
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.status-tile.urgent { border-left-color: var(--nu-danger); }
.status-tile.watch { border-left-color: var(--nu-warning); }
.status-tile.confirmed { border-left-color: var(--nu-success); }
.status-tile-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--nu-body-text);
  opacity: 0.75;
  margin-bottom: 8px;
}
.status-tile-value {
  font-weight: 900;
  font-size: 2rem;
  color: var(--nu-dark-text);
  line-height: 1;
  margin-bottom: 6px;
}
.status-tile-detail {
  font-size: 0.82rem;
  color: var(--nu-body-text);
}

/* CHEVRON BADGES */
.priority-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}
.nu-badge {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 12px 28px 12px 18px;
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
}
.nu-badge.alt { background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%); }
.nu-badge .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--nu-cyan);
  margin-right: 10px;
  box-shadow: 0 0 8px var(--nu-cyan);
}

/* PO TABLE */
.po-grid {
  display: grid;
  gap: 18px;
}
.po-card {
  background: var(--nu-white);
  border-radius: 12px;
  padding: 26px 28px;
  box-shadow: 0 2px 14px rgba(0,0,0,0.07);
  border: 1px solid var(--nu-medium-gray);
  display: grid;
  grid-template-columns: 220px 1fr 220px;
  gap: 28px;
  align-items: start;
}
.po-card.priority-high {
  border-left: 6px solid var(--nu-danger);
}
.po-card.priority-medium {
  border-left: 6px solid var(--nu-warning);
}
.po-card.priority-track {
  border-left: 6px solid var(--nu-blue);
}
.po-vendor {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.po-vendor-name {
  font-weight: 900;
  font-size: 1.2rem;
  color: var(--nu-dark-text);
  line-height: 1.2;
}
.po-vendor-tag {
  display: inline-block;
  width: fit-content;
  background: var(--nu-light-gray);
  color: var(--nu-blue);
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.po-amount {
  font-weight: 900;
  font-size: 1.35rem;
  color: var(--nu-blue);
  margin-top: 4px;
}
.po-detail {
  font-size: 0.93rem;
  line-height: 1.65;
}
.po-detail .label {
  font-weight: 700;
  color: var(--nu-dark-text);
  display: inline-block;
  min-width: 88px;
}
.po-detail .row { margin-bottom: 5px; }
.po-action {
  background: var(--nu-light-gray);
  border-radius: 8px;
  padding: 16px 18px;
}
.po-action-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 8px;
}
.po-action-text {
  font-size: 0.9rem;
  color: var(--nu-dark-text);
  font-weight: 700;
  line-height: 1.45;
  margin-bottom: 10px;
}
.po-action-meta {
  font-size: 0.78rem;
  color: var(--nu-body-text);
  line-height: 1.5;
}

/* SCRIPT BLOCKS */
.script-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.script-card {
  background: var(--nu-white);
  border-radius: 10px;
  padding: 24px 26px;
  border: 1px solid var(--nu-medium-gray);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.script-card-title {
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.script-card-vendor {
  font-size: 0.78rem;
  color: var(--nu-blue);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.script-block {
  background: var(--nu-light-gray);
  border-left: 3px solid var(--nu-cyan);
  padding: 14px 16px;
  border-radius: 0 6px 6px 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--nu-dark-text);
  font-style: italic;
}

/* CHECKLIST */
.checklist {
  background: var(--nu-white);
  border-radius: 12px;
  padding: 28px 32px;
  box-shadow: 0 2px 14px rgba(0,0,0,0.06);
  border: 1px solid var(--nu-medium-gray);
}
.check-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid var(--nu-medium-gray);
}
.check-row:last-child { border-bottom: none; }
.check-box {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border: 2px solid var(--nu-blue);
  border-radius: 4px;
  margin-top: 2px;
}
.check-content { flex: 1; }
.check-title {
  font-weight: 700;
  font-size: 1rem;
  color: var(--nu-dark-text);
  margin-bottom: 3px;
}
.check-meta {
  font-size: 0.85rem;
  color: var(--nu-body-text);
}
.check-meta strong { color: var(--nu-blue); }

/* CALLOUT */
.callout {
  background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
  color: var(--nu-white);
  border-radius: 12px;
  padding: 28px 32px;
  margin: 36px 0;
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 22px;
  align-items: center;
}
.callout-icon {
  width: 60px;
  height: 60px;
  background: rgba(255,255,255,0.18);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 900;
}
.callout-title {
  font-weight: 900;
  font-size: 1.15rem;
  margin-bottom: 6px;
  letter-spacing: 0.01em;
}
.callout-body {
  font-size: 0.95rem;
  line-height: 1.55;
  opacity: 0.95;
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
  font-size: 0.93rem;
  line-height: 1.85;
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
}
.nu-footer-contact a:hover { text-decoration: underline; }

/* RESPONSIVE */
@media (max-width: 980px) {
  .status-dashboard { grid-template-columns: repeat(2, 1fr); }
  .po-card { grid-template-columns: 1fr; gap: 18px; }
  .script-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .nu-header { padding: 40px 20px 70px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-content-area { padding: 40px 20px 60px; }
  .page-title { font-size: 1.85rem; }
  .status-dashboard { grid-template-columns: 1fr; }
  .nu-badge { clip-path: none; border-radius: 6px; padding: 10px 16px; }
  .callout { grid-template-columns: 1fr; text-align: center; }
  .callout-icon { margin: 0 auto; }
}

@media print {
  body { background: white; }
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .po-card, .script-card, .checklist { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
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
</header>

<!-- CHEVRON TRANSITION -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="nu-content-inner">

    <!-- PAGE TITLE -->
    <div class="page-title-block">
      <span class="page-eyebrow">Action Item · reMarkable</span>
      <h1 class="page-title"><span class="accent">Inventory</span> PO Follow-Up</h1>
      <p class="page-subtitle">Open purchase orders awaiting status confirmation, ETA updates, or shipment receipt. Work the list top to bottom — highest dollar / longest open first.</p>
    </div>

    <!-- STATUS DASHBOARD -->
    <div class="priority-row">
      <div class="nu-badge"><span class="dot"></span>4 OPEN POs</div>
      <div class="nu-badge alt"><span class="dot"></span>$1.09M LARGEST</div>
      <div class="nu-badge"><span class="dot"></span>2 STALE &gt; 14 DAYS</div>
    </div>

    <div class="status-dashboard">
      <div class="status-tile urgent">
        <div class="status-tile-label">Highest Priority</div>
        <div class="status-tile-value">Skylift</div>
        <div class="status-tile-detail">$1,091,402.50 · PO 1/12/26 · ~3 wks per Nick Gordon</div>
      </div>
      <div class="status-tile watch">
        <div class="status-tile-label">FlexPro Stock</div>
        <div class="status-tile-value">Boss</div>
        <div class="status-tile-detail">2-Man &amp; 1.5-Man covers · confirm next batch ETA</div>
      </div>
      <div class="status-tile">
        <div class="status-tile-label">Rope Inventory</div>
        <div class="status-tile-value">Samson</div>
        <div class="status-tile-detail">Reorder threshold check · 30% margin</div>
      </div>
      <div class="status-tile confirmed">
        <div class="status-tile-label">Drill Rigs</div>
        <div class="status-tile-value">BSS</div>
        <div class="status-tile-detail">Bay Shore Systems · territory rep status</div>
      </div>
    </div>

    <!-- OPEN PO DETAIL -->
    <h2 class="nu-section-title"><span class="accent">Open</span><span class="rest"> Purchase Orders</span></h2>

    <div class="po-grid">

      <!-- SKYLIFT -->
      <div class="po-card priority-high">
        <div class="po-vendor">
          <div class="po-vendor-name">Skylift, Inc.</div>
          <span class="po-vendor-tag">Bucket Trucks</span>
          <div class="po-amount">$1,091,402.50</div>
        </div>
        <div class="po-detail">
          <div class="row"><span class="label">PO Date:</span> January 12, 2026</div>
          <div class="row"><span class="label">Items:</span> 5× SBA40i-LW + 1× SBA47i-MH</div>
          <div class="row"><span class="label">Last ETA:</span> ~3 weeks to delivery (per Nick Gordon)</div>
          <div class="row"><span class="label">Status:</span> Awaiting build progress / firm ship date confirmation</div>
          <div class="row"><span class="label">Risk:</span> Largest open PO — customer commitments tied to this delivery window</div>
        </div>
        <div class="po-action">
          <div class="po-action-label">Next Action</div>
          <div class="po-action-text">Call Nick Gordon for firm ship date and chassis status on each unit.</div>
          <div class="po-action-meta">
            Primary: Andrew Jarmoszuk<br>
            Backup: Dale Williams, Nick Jarmoszuk Jr<br>
            Pricing/specs: Nick Gordon
          </div>
        </div>
      </div>

      <!-- BOSS / FLEXPRO -->
      <div class="po-card priority-medium">
        <div class="po-vendor">
          <div class="po-vendor-name">Boss Products</div>
          <span class="po-vendor-tag">FlexPro Armor</span>
          <div class="po-amount">Restock Batch</div>
        </div>
        <div class="po-detail">
          <div class="row"><span class="label">SKUs:</span> NU-BC-2851 (2-Man, 28"×51"), NU-BC-2834 (1.5-Man, 28"×34")</div>
          <div class="row"><span class="label">Combos:</span> NU-BC-2851-C, NU-BC-2834-C</div>
          <div class="row"><span class="label">Manufacturing:</span> Handmade USA — lead time confirmation required</div>
          <div class="row"><span class="label">Margin:</span> 50% (Customer Price = Cost ÷ 0.50)</div>
          <div class="row"><span class="label">Pending demand:</span> Coy Crosby / Dominion · Sammy Myers / AEP Appalachian (2× ARCH + 1× Combo 1.5-Man)</div>
        </div>
        <div class="po-action">
          <div class="po-action-label">Next Action</div>
          <div class="po-action-text">Confirm batch quantities shipped, in-transit, and next production slot.</div>
          <div class="po-action-meta">
            CC BOTH on every email:<br>
            • Troy Gongwer<br>
            • Thayne Grove
          </div>
        </div>
      </div>

      <!-- SAMSON -->
      <div class="po-card priority-track">
        <div class="po-vendor">
          <div class="po-vendor-name">Samson Rope</div>
          <span class="po-vendor-tag">Authorized Distributor</span>
          <div class="po-amount">Stock Reorder</div>
        </div>
        <div class="po-detail">
          <div class="row"><span class="label">Margin:</span> 30% (Customer Price = Cost ÷ 0.70)</div>
          <div class="row"><span class="label">Channels:</span> Direct full · Dealers 30% off · Distributors 40% off</div>
          <div class="row"><span class="label">Confirm:</span> Last PO ship date, freight terms, backorder status</div>
          <div class="row"><span class="label">Reminder:</span> Update tracker to "Invoiced" with date + amount on confirmation</div>
        </div>
        <div class="po-action">
          <div class="po-action-label">Next Action</div>
          <div class="po-action-text">Pull last PO# from QuickBooks and request shipment confirmation + tracking.</div>
          <div class="po-action-meta">
            CC BOTH on every email:<br>
            • Donna Poll<br>
            • Sarah Daniels
          </div>
        </div>
      </div>

      <!-- BSS -->
      <div class="po-card priority-track">
        <div class="po-vendor">
          <div class="po-vendor-name">Bay Shore Systems</div>
          <span class="po-vendor-tag">SE Territory Rep</span>
          <div class="po-amount">Drill Rigs</div>
        </div>
        <div class="po-detail">
          <div class="row"><span class="label">Role:</span> SE territory representative — confirm any open inventory commitments</div>
          <div class="row"><span class="label">Travel/Sales partner:</span> Andy Barron</div>
          <div class="row"><span class="label">Owner:</span> Herb Minatre</div>
          <div class="row"><span class="label">Confirm:</span> Any units allocated to NU customers, expected ship windows</div>
        </div>
        <div class="po-action">
          <div class="po-action-label">Next Action</div>
          <div class="po-action-text">Call Andy Barron — review pipeline allocations and any units in production for our customers.</div>
          <div class="po-action-meta">
            Primary: Andy Barron<br>
            Owner: Herb Minatre
          </div>
        </div>
      </div>

    </div>

    <!-- CALL/EMAIL SCRIPTS -->
    <h2 class="nu-section-title"><span class="accent">Follow-Up</span><span class="rest"> Scripts</span></h2>

    <div class="script-grid">

      <div class="script-card">
        <div class="script-card-title">Skylift — Nick Gordon</div>
        <div class="script-card-vendor">PHONE CALL · 5 MIN</div>
        <div class="script-block">Nick — checking in on PO from January 12 for the five SBA40i-LW units and the SBA47i-MH. You quoted ~3 weeks back to me earlier. Where are the chassis on each unit, and do you have a firm ship window I can take back to the customer?</div>
      </div>

      <div class="script-card">
        <div class="script-card-title">Boss — Troy &amp; Thayne</div>
        <div class="script-card-vendor">EMAIL · CC BOTH</div>
        <div class="script-block">Troy &amp; Thayne —<br><br>Checking on the latest FlexPro Armor batch. What ship dates do we have for NU-BC-2851 and NU-BC-2834, and when is the next production run after this one? I have demand from Dominion and AEP Appalachian I'd like to commit to a date.<br><br>Sincerely,<br>Aaron C. Norris</div>
      </div>

      <div class="script-card">
        <div class="script-card-title">Samson — Donna &amp; Sarah</div>
        <div class="script-card-vendor">EMAIL · CC BOTH</div>
        <div class="script-block">Donna &amp; Sarah —<br><br>Could y'all confirm shipment status and tracking on our last PO? I'd also like to know current backorder status on the items we typically reorder so I can plan the next pull.<br><br>Sincerely,<br>Aaron C. Norris</div>
      </div>

      <div class="script-card">
        <div class="script-card-title">Bay Shore — Andy Barron</div>
        <div class="script-card-vendor">PHONE CALL · 5 MIN</div>
        <div class="script-block">Andy — wanted to walk through any units we have allocated or in production for the SE territory. What's the current pipeline look like, and is there anything I should be promoting in front of customers right now?</div>
      </div>

    </div>

    <!-- CALLOUT -->
    <div class="callout">
      <div class="callout-icon">!</div>
      <div>
        <div class="callout-title">Update the master tracker the moment a vendor responds</div>
        <div class="callout-body">As soon as a ship date, tracking number, or invoice confirmation comes back, log it in the master tracker. Stale PO data is the #1 reason customer commitments slip. If a vendor confirms invoiced — update tracker status to "Invoiced" with date and amount in the same step.</div>
      </div>
    </div>

    <!-- WORKFLOW CHECKLIST -->
    <h2 class="nu-section-title"><span class="accent">Today's</span><span class="rest"> Checklist</span></h2>

    <div class="checklist">
      <div class="check-row">
        <div class="check-box"></div>
        <div class="check-content">
          <div class="check-title">Pull last PO numbers from QuickBooks for each vendor above</div>
          <div class="check-meta">Reference for every call and email — <strong>do this first</strong> so you have specifics to ask about.</div>
        </div>
      </div>
      <div class="check-row">
        <div class="check-box"></div>
        <div class="check-content">
          <div class="check-title">Call Nick Gordon at Skylift — firm ship date on the six-unit PO</div>
          <div class="check-meta">Largest open dollar amount · <strong>$1,091,402.50</strong> · 5× SBA40i-LW + 1× SBA47i-MH</div>
        </div>
      </div>
      <div class="check-row">
        <div class="check-box"></div>
        <div class="check-content">
          <div class="check-title">Email Troy Gongwer + Thayne Grove (CC both) — FlexPro Armor batch ETA</div>
          <div class="check-meta">Confirm next production slot · note Dominion and AEP demand</div>
        </div>
      </div>
      <div class="check-row">
        <div class="check-box"></div>
        <div class="check-content">
          <div class="check-title">Email Donna Poll + Sarah Daniels (CC both) — Samson Rope shipment + backorders</div>
          <div class="check-meta">Pull tracking · review reorder thresholds</div>
        </div>
      </div>
      <div class="check-row">
        <div class="check-box"></div>
        <div class="check-content">
          <div class="check-title">Call Andy Barron at Bay Shore Systems — drill rig allocations</div>
          <div class="check-meta">Confirm any SE territory commitments and active production units</div>
        </div>
      </div>
      <div class="check-row">
        <div class="check-box"></div>
        <div class="check-content">
          <div class="check-title">Update master tracker with every confirmed ship date, tracking number, and invoice</div>
          <div class="check-meta">Status field, date, amount — <strong>same session, no batching</strong></div>
        </div>
      </div>
      <div class="check-row">
        <div class="check-box"></div>
        <div class="check-content">
          <div class="check-title">Re-flag any PO that does not respond within 48 hours</div>
          <div class="check-meta">Escalate to owner/secondary contact (Herb Minatre at BSS, Andrew Jarmoszuk at Skylift)</div>
        </div>
      </div>
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