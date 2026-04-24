<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Follow Up: Last PO Inventory Order — Norris Utilities®</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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
  --nu-status-amber: #D97706;
  --nu-status-green: #059669;
  --nu-status-red: #DC2626;
  --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-tagline: 'Playfair Display', Georgia, serif;
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
  background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 55%, #00AAFF 80%, var(--nu-cyan) 100%);
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
  opacity: 0.7;
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
  width: 78px;
  height: 78px;
  margin: 0 auto 18px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
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
  font-size: 1.4rem;
  color: var(--nu-white);
  letter-spacing: 0.8em;
  text-transform: uppercase;
  margin-bottom: 18px;
  opacity: 0.98;
}
.nu-tagline {
  font-family: var(--font-tagline);
  font-style: italic;
  font-weight: 400;
  font-size: 1.35rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
}

/* CHEVRON TRANSITION */
.nu-chevron {
  position: relative;
  height: 54px;
  margin-top: -54px;
  z-index: 10;
  line-height: 0;
}
.nu-chevron svg {
  width: 100%;
  height: 54px;
  display: block;
}

/* CONTENT AREA + GHOST PHOENIX */
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
  max-width: 720px;
  aspect-ratio: 1;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 4 L56 20 L72 10 L62 26 L82 20 L66 36 L76 52 L56 42 L50 62 L44 42 L24 52 L34 36 L18 20 L38 26 L28 10 L44 20 Z M50 56 L53 70 L61 66 L56 76 L50 96 L44 76 L39 66 L47 70 Z' fill='%230000FF'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.07;
  z-index: 0;
  pointer-events: none;
}
.nu-content-area > * { position: relative; z-index: 1; }

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 40px 80px;
}

/* STATUS BANNER */
.status-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%);
  border-left: 6px solid var(--nu-status-amber);
  padding: 20px 28px;
  border-radius: 8px;
  margin-bottom: 36px;
  flex-wrap: wrap;
}
.status-banner .status-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.status-pill {
  display: inline-block;
  background: var(--nu-status-amber);
  color: var(--nu-white);
  font-weight: 900;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 999px;
  white-space: nowrap;
}
.status-text {
  font-weight: 700;
  color: var(--nu-dark-text);
  font-size: 0.98rem;
}
.status-meta {
  font-size: 0.85rem;
  color: #78350F;
  font-weight: 700;
}

/* PAGE TITLE */
.page-eyebrow {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 0.78rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 12px;
}
.page-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 2.8rem;
  line-height: 1.15;
  color: var(--nu-dark-text);
  margin-bottom: 14px;
  letter-spacing: -0.01em;
}
.page-title .accent { color: var(--nu-blue); }
.page-subtitle {
  font-size: 1.15rem;
  color: #525266;
  max-width: 780px;
  line-height: 1.55;
  margin-bottom: 44px;
}

/* SECTION */
.section {
  margin-bottom: 48px;
}
.nu-section-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--nu-blue);
  margin-bottom: 18px;
  letter-spacing: 0.01em;
}
.nu-section-title .after {
  color: var(--nu-dark-text);
  font-weight: 700;
}
.section-divider {
  height: 3px;
  width: 56px;
  background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
  border-radius: 2px;
  margin-bottom: 22px;
}

/* SUMMARY CARD */
.summary-card {
  background: var(--nu-white);
  border-radius: 12px;
  padding: 32px 36px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.07);
  border: 1px solid var(--nu-medium-gray);
  margin-bottom: 36px;
}
.summary-card p {
  font-size: 1.02rem;
  line-height: 1.7;
  color: var(--nu-body-text);
  margin-bottom: 14px;
}
.summary-card p:last-child { margin-bottom: 0; }

/* METRICS GRID */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 8px;
}
.metric {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  padding: 22px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.metric .label {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--nu-blue);
  margin-bottom: 10px;
}
.metric .value {
  font-size: 1.35rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1.25;
}
.metric .sub {
  font-size: 0.82rem;
  color: #6B7280;
  margin-top: 6px;
}

/* CHEVRON BADGES (action steps) */
.nu-badge {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 16px 32px 16px 20px;
  margin-bottom: 14px;
  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  gap: 14px;
}
.nu-badge .step-num {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--nu-cyan);
  color: var(--nu-navy);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 0.95rem;
}
.nu-badge .step-text { flex: 1; line-height: 1.45; }
.nu-badge .step-owner {
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--nu-cyan);
  white-space: nowrap;
  padding-left: 12px;
}

/* TABLE */
.nu-table-wrap {
  background: var(--nu-white);
  border-radius: 10px;
  border: 1px solid var(--nu-medium-gray);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
table.nu-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}
table.nu-table thead {
  background: var(--nu-light-gray);
}
table.nu-table th {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--nu-blue);
  text-align: left;
  padding: 14px 18px;
  border-bottom: 2px solid var(--nu-medium-gray);
}
table.nu-table td {
  padding: 14px 18px;
  border-bottom: 1px solid var(--nu-medium-gray);
  color: var(--nu-body-text);
  vertical-align: top;
}
table.nu-table tr:last-child td { border-bottom: none; }
table.nu-table tr:hover td { background: #FAFAFB; }
.tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}
.tag-open { background: #FEF3C7; color: #92400E; }
.tag-ship { background: #DBEAFE; color: #1E40AF; }
.tag-paid { background: #D1FAE5; color: #065F46; }

/* CONTACTS GRID */
.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
.contact-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  padding: 22px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.contact-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}
.contact-card .role {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--nu-blue);
  margin-bottom: 6px;
}
.contact-card .name {
  font-size: 1.12rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  margin-bottom: 4px;
}
.contact-card .company {
  font-size: 0.9rem;
  color: #6B7280;
  margin-bottom: 10px;
  font-weight: 700;
}
.contact-card .rule {
  font-size: 0.82rem;
  color: #92400E;
  background: #FEF3C7;
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 700;
}

/* TALKING POINTS */
.talking-points {
  background: linear-gradient(135deg, #F8FAFF 0%, #EEF4FF 100%);
  border: 1px solid #DBE2F5;
  border-radius: 12px;
  padding: 28px 32px;
}
.talking-points ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.talking-points li {
  padding-left: 28px;
  position: relative;
  margin-bottom: 14px;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--nu-dark-text);
}
.talking-points li:last-child { margin-bottom: 0; }
.talking-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 14px;
  height: 14px;
  background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}

/* EMAIL DRAFT */
.email-draft {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}
.email-header {
  background: var(--nu-light-gray);
  padding: 18px 26px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.9rem;
}
.email-header .row {
  display: flex;
  gap: 12px;
  margin-bottom: 6px;
}
.email-header .row:last-child { margin-bottom: 0; }
.email-header .field {
  font-weight: 900;
  color: var(--nu-blue);
  min-width: 72px;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-top: 2px;
}
.email-header .val { color: var(--nu-dark-text); flex: 1; }
.email-body {
  padding: 28px 32px;
  font-size: 0.98rem;
  line-height: 1.75;
  color: var(--nu-body-text);
  white-space: pre-wrap;
}
.email-body .signoff {
  margin-top: 22px;
  font-style: italic;
  color: var(--nu-dark-text);
}

/* CALLOUT */
.callout {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
  color: var(--nu-white);
  padding: 26px 32px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}
.callout .icon {
  width: 48px;
  height: 48px;
  background: var(--nu-cyan);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--nu-navy);
  flex-shrink: 0;
}
.callout .text { flex: 1; min-width: 240px; }
.callout .text strong { display: block; font-size: 1.05rem; margin-bottom: 4px; }
.callout .text span { font-size: 0.92rem; opacity: 0.9; }

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 48px 40px;
  text-align: center;
  font-family: var(--font-primary);
  position: relative;
  overflow: hidden;
}
.nu-footer::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan), var(--nu-blue));
}
.nu-footer-tagline {
  font-family: var(--font-tagline);
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
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
.nu-footer-meta {
  margin-top: 20px;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  font-weight: 700;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nu-header { padding: 46px 22px 70px; min-height: 240px; }
  .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.2em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1.05rem; }
  .container { padding: 44px 22px 60px; }
  .page-title { font-size: 2rem; }
  .nu-badge { clip-path: none; border-radius: 10px; padding: 14px 18px; flex-wrap: wrap; }
  .nu-badge .step-owner { padding-left: 46px; padding-top: 2px; }
  .summary-card { padding: 24px 22px; }
  .email-body { padding: 22px 22px; }
  table.nu-table { font-size: 0.88rem; }
  table.nu-table th, table.nu-table td { padding: 10px 12px; }
}

@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-badge { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .metric, .summary-card, .nu-table-wrap, .email-draft { box-shadow: none; border: 1px solid #ccc; }
  .callout { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
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
  <svg viewBox="0 0 1440 54" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,54 L1440,0 L1440,54 L0,54 Z" fill="#ffffff"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="container">

    <div class="status-banner">
      <div class="status-left">
        <span class="status-pill">Action Required</span>
        <span class="status-text">Purchase Order Follow-Up — Awaiting Vendor Confirmation</span>
      </div>
      <div class="status-meta">Opened 2026-04-24 • reMarkable Capture</div>
    </div>

    <div class="page-eyebrow">Internal Action Item • Inventory Operations</div>
    <h1 class="page-title">Follow Up on <span class="accent">Last PO Inventory Order</span></h1>
    <p class="page-subtitle">
      Aaron flagged this during morning reMarkable review. The most recent open inventory purchase order
      needs a status confirmation from the vendor before the next sales cycle. This page tracks the ask,
      the contact chain, the talking points, and a ready-to-send follow-up draft.
    </p>

    <div class="section">
      <div class="nu-section-title">Why <span class="after">This Matters</span></div>
      <div class="section-divider"></div>
      <div class="summary-card">
        <p>
          Norris Utilities® runs a lean inventory posture. Every open PO represents committed capital and
          committed customer promises. When a PO sits without confirmed ship dates, downstream commitments
          — FlexPro Armor deliveries, Samson Rope pulls, and Skylift coordination — drift out of alignment.
        </p>
        <p>
          The goal of this follow-up is simple: confirm the PO number on file with the vendor, verify what
          has shipped versus what remains open, secure a firm expected-delivery window, and get any updated
          tracking numbers into the shipments ledger. Once confirmed, the PO status moves from <em>Open — Awaiting</em>
          to <em>Open — Confirmed</em> and the downstream customer timeline can be held with confidence.
        </p>
      </div>
    </div>

    <div class="section">
      <div class="nu-section-title">Order <span class="after">Snapshot</span></div>
      <div class="section-divider"></div>
      <div class="metrics-grid">
        <div class="metric">
          <div class="label">Status</div>
          <div class="value">Open</div>
          <div class="sub">Awaiting vendor reply</div>
        </div>
        <div class="metric">
          <div class="label">Priority</div>
          <div class="value">High</div>
          <div class="sub">Affects next sales cycle</div>
        </div>
        <div class="metric">
          <div class="label">Owner</div>
          <div class="value">Aaron C. Norris</div>
          <div class="sub">CEO — Sole sales force</div>
        </div>
        <div class="metric">
          <div class="label">Target Reply</div>
          <div class="value">≤ 48 Hours</div>
          <div class="sub">From outbound send</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="nu-section-title">Action <span class="after">Sequence</span></div>
      <div class="section-divider"></div>

      <div class="nu-badge">
        <span class="step-num">1</span>
        <span class="step-text">Pull the PO from records — confirm PO number, ship-to address, line items, and agreed unit costs before reaching out.</span>
        <span class="step-owner">Aaron</span>
      </div>
      <div class="nu-badge">
        <span class="step-num">2</span>
        <span class="step-text">Cross-check against the shipments ledger to see what has already been received and what remains open.</span>
        <span class="step-owner">Aaron</span>
      </div>
      <div class="nu-badge">
        <span class="step-num">3</span>
        <span class="step-text">Send the follow-up email (draft below). Copy both primary vendor contacts per the standing CC rule.</span>
        <span class="step-owner">Aaron</span>
      </div>
      <div class="nu-badge">
        <span class="step-num">4</span>
        <span class="step-text">Log the outreach in the open-items tracker and set a 48-hour callback on the calendar.</span>
        <span class="step-owner">Caroline Butler</span>
      </div>
      <div class="nu-badge">
        <span class="step-num">5</span>
        <span class="step-text">On reply, update PO status to Confirmed, record ship dates and tracking numbers, and notify any customer whose delivery depends on this PO.</span>
        <span class="step-owner">Aaron + CB</span>
      </div>
    </div>

    <div class="section">
      <div class="nu-section-title">Line <span class="after">Items on the PO</span></div>
      <div class="section-divider"></div>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width: 22%;">SKU / Item</th>
              <th style="width: 34%;">Description</th>
              <th style="width: 12%;">Qty</th>
              <th style="width: 16%;">Status</th>
              <th style="width: 16%;">Next Step</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>NU-BC-2851</strong></td>
              <td>FlexPro Armor Bucket Cover — 2-Man, 28"×51"</td>
              <td>Confirm with vendor</td>
              <td><span class="tag tag-open">Awaiting</span></td>
              <td>Verify ship date</td>
            </tr>
            <tr>
              <td><strong>NU-BC-2834</strong></td>
              <td>FlexPro Armor Bucket Cover — 1.5-Man, 28"×34"</td>
              <td>Confirm with vendor</td>
              <td><span class="tag tag-open">Awaiting</span></td>
              <td>Verify ship date</td>
            </tr>
            <tr>
              <td><strong>NU-BC-2851-C</strong></td>
              <td>FlexPro Armor 2-Man Combo (cover + liner)</td>
              <td>Confirm with vendor</td>
              <td><span class="tag tag-open">Awaiting</span></td>
              <td>Verify ship date</td>
            </tr>
            <tr>
              <td><strong>NU-BC-2834-C</strong></td>
              <td>FlexPro Armor 1.5-Man Combo (cover + liner)</td>
              <td>Confirm with vendor</td>
              <td><span class="tag tag-open">Awaiting</span></td>
              <td>Verify ship date</td>
            </tr>
            <tr>
              <td><strong>PO Totals</strong></td>
              <td>Full line-item detail to be confirmed against the original PO document</td>
              <td>—</td>
              <td><span class="tag tag-ship">In Flight</span></td>
              <td>Request ledger update</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <div class="nu-section-title">Who <span class="after">To Contact</span></div>
      <div class="section-divider"></div>
      <div class="contacts-grid">
        <div class="contact-card">
          <div class="role">Primary — FlexPro Armor</div>
          <div class="name">Troy Gongwer</div>
          <div class="company">Boss Products</div>
          <div class="rule">CC Thayne Grove on every email — standing rule</div>
        </div>
        <div class="contact-card">
          <div class="role">Secondary — FlexPro Armor</div>
          <div class="name">Thayne Grove</div>
          <div class="company">Boss Products</div>
          <div class="rule">CC together with Troy — standing rule</div>
        </div>
        <div class="contact-card">
          <div class="role">Primary — Samson Rope</div>
          <div class="name">Donna Poll</div>
          <div class="company">Samson Rope</div>
          <div class="rule">CC Sarah Daniels — standing rule</div>
        </div>
        <div class="contact-card">
          <div class="role">Secondary — Samson Rope</div>
          <div class="name">Sarah Daniels</div>
          <div class="company">Samson Rope</div>
          <div class="rule">CC together with Donna — standing rule</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="nu-section-title">Talking <span class="after">Points</span></div>
      <div class="section-divider"></div>
      <div class="talking-points">
        <ul>
          <li>Lead with the PO number and original order date — anchor the conversation in the paperwork.</li>
          <li>Ask for a written confirmation of what has shipped versus what is still in production.</li>
          <li>Request firm expected-ship dates, not windows — customers are committed to delivery timelines.</li>
          <li>Confirm carrier and tracking numbers for anything already in transit so the shipments ledger stays current.</li>
          <li>If there is a delay, ask what can be partially released now so the customer-facing pipeline is not blocked.</li>
          <li>Close with a clean callback window: 48 hours for a reply, then escalate if needed.</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <div class="nu-section-title">Follow-Up <span class="after">Email Draft</span></div>
      <div class="section-divider"></div>
      <div class="email-draft">
        <div class="email-header">
          <div class="row">
            <span class="field">To</span>
            <span class="val">[Vendor Primary Contact]</span>
          </div>
          <div class="row">
            <span class="field">CC</span>
            <span class="val">[Vendor Secondary Contact per standing CC rule]</span>
          </div>
          <div class="row">
            <span class="field">From</span>
            <span class="val">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</span>
          </div>
          <div class="row">
            <span class="field">Subject</span>
            <span class="val">Quick check on our last PO — status and ship dates</span>
          </div>
        </div>
        <div class="email-body">[Name] —

    Hope the week is treating y'all well. Wanted to follow up on our last PO and get a clean status on where we stand.

    If it is easy, could you confirm back on the following:

    • PO number and original order date on your end
    • What has shipped to date versus what is still open
    • Firm expected-ship dates on the remaining line items
    • Carrier and tracking numbers for anything currently in transit

    I have customer deliveries tied to this order, and a written confirmation helps me hold the line on those timelines. If there is any piece that can be partially released sooner, I would rather get that moving than wait on the full quantity.

    Appreciate you pulling this together. Happy to get on a quick call if that is faster than email.

<span class="signoff">    Sincerely,

    Aaron C. Norris
    Founder &amp; CEO, Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</span></div>
      </div>
    </div>

    <div class="section">
      <div class="nu-section-title">When <span class="after">To Escalate</span></div>
      <div class="section-divider"></div>
      <div class="summary-card">
        <p>
          If there is no response within 48 hours of sending the follow-up, call the primary contact
          directly and reference the email. If the primary contact is unreachable, go to the secondary
          contact on the CC line — that is precisely why the standing CC rule exists.
        </p>
        <p>
          If neither contact responds within 72 hours, treat it as a supply-chain risk and flag it on the
          morning brief. A PO without confirmed dates is a customer-delivery risk, and customer-delivery
          risks move to the top of the open-items tracker until resolved.
        </p>
      </div>
    </div>

    <div class="callout">
      <div class="icon">!</div>
      <div class="text">
        <strong>Standing CC Rule Reminder</strong>
        <span>Every email to Boss Products copies both Troy Gongwer and Thayne Grove. Every email to Samson Rope copies both Donna Poll and Sarah Daniels. No exceptions.</span>
      </div>
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
  <div class="nu-footer-meta">Internal Action Item • reMarkable Capture • 2026-04-24</div>
</footer>

</body>
</html>