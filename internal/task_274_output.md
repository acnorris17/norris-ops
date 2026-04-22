<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Follow-Up: Last PO Inventory Status — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
  --nu-amber: #F59E0B;
  --nu-red: #DC2626;
  --nu-green: #059669;
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
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 70px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 90px);
  z-index: 1;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -50%; right: -20%;
  width: 80%; height: 200%;
  background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
  z-index: 1;
}
.nu-header > * { position: relative; z-index: 2; }

.nu-phoenix-watermark {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  max-width: 600px;
  opacity: 0.07;
  z-index: 1;
  pointer-events: none;
}

.nu-phoenix-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
}

.nu-logo-text {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 3.4rem;
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
}
.nu-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.35rem;
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
.nu-chevron svg {
  width: 100%;
  height: 50px;
  display: block;
}

/* CONTENT AREA */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}
.nu-content-area > * { position: relative; z-index: 1; }

.nu-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
}

/* TASK BANNER */
.nu-task-banner {
  background: linear-gradient(135deg, #fff8e6 0%, #fff3d4 100%);
  border-left: 6px solid var(--nu-amber);
  padding: 24px 28px;
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}
.nu-task-banner-label {
  display: inline-block;
  background: var(--nu-amber);
  color: var(--nu-white);
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 3px;
  margin-bottom: 10px;
}
.nu-task-banner-title {
  font-weight: 900;
  font-size: 1.4rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.nu-task-banner-meta {
  font-size: 0.9rem;
  color: #6b6b7a;
}

/* SECTION HEADERS */
.nu-section-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.6rem;
  color: #0033cc;
  margin-bottom: 8px;
  margin-top: 40px;
}
.nu-section-title span {
  color: var(--nu-dark-text);
  font-weight: 700;
}
.nu-section-rule {
  height: 3px;
  width: 60px;
  background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
  margin-bottom: 24px;
  border-radius: 2px;
}

/* CARDS */
.nu-card {
  background: var(--nu-white);
  border-radius: 8px;
  padding: 24px 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid var(--nu-medium-gray);
  margin-bottom: 16px;
}
.nu-card h3 {
  font-weight: 900;
  font-size: 1.1rem;
  color: var(--nu-dark-text);
  margin-bottom: 10px;
}
.nu-card p {
  color: var(--nu-body-text);
  font-size: 0.97rem;
}
.nu-card ul {
  margin-left: 20px;
  margin-top: 8px;
  color: var(--nu-body-text);
}
.nu-card ul li { margin-bottom: 6px; }

/* CHECKLIST */
.nu-checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nu-checklist li {
  display: flex;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid var(--nu-medium-gray);
}
.nu-checklist li:last-child { border-bottom: none; }
.nu-checklist .nu-check-box {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border: 2px solid var(--nu-blue);
  border-radius: 4px;
  margin-right: 14px;
  margin-top: 2px;
  background: var(--nu-white);
}
.nu-checklist .nu-check-text {
  flex: 1;
  font-size: 0.97rem;
}
.nu-checklist .nu-check-text strong {
  color: var(--nu-dark-text);
  display: block;
  margin-bottom: 2px;
}
.nu-checklist .nu-check-text span {
  color: #6b6b7a;
  font-size: 0.88rem;
}

/* GRID */
.nu-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 768px) {
  .nu-two-col { grid-template-columns: 1fr; }
}

/* EMAIL DRAFT */
.nu-email-draft {
  background: #f8f9fb;
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 28px;
  font-family: 'Georgia', serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--nu-dark-text);
}
.nu-email-meta {
  font-family: var(--font-primary);
  font-size: 0.85rem;
  color: #6b6b7a;
  border-bottom: 1px solid var(--nu-medium-gray);
  padding-bottom: 12px;
  margin-bottom: 16px;
}
.nu-email-meta strong { color: var(--nu-dark-text); }
.nu-email-body p {
  margin-bottom: 14px;
  text-indent: 24px;
}
.nu-email-body p.no-indent { text-indent: 0; }
.nu-email-body ul {
  margin-left: 40px;
  margin-bottom: 14px;
  list-style-type: none;
}
.nu-email-body ul li::before {
  content: '• ';
  color: var(--nu-blue);
  margin-right: 6px;
}
.nu-email-body .signature {
  margin-top: 24px;
  padding-left: 24px;
}

/* TABLE */
.nu-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  overflow: hidden;
}
.nu-table th {
  background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
  color: var(--nu-white);
  font-weight: 700;
  text-align: left;
  padding: 14px 16px;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.nu-table td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.94rem;
}
.nu-table tbody tr:last-child td { border-bottom: none; }
.nu-table tbody tr:hover { background: #f8f9fb; }

.nu-status-pill {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.nu-status-pill.pending { background: #fff3d4; color: #92400e; }
.nu-status-pill.followup { background: #dbeafe; color: #1e3a8a; }
.nu-status-pill.urgent { background: #fee2e2; color: #991b1b; }

/* CHEVRON BADGES */
.nu-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}
.nu-badge {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 12px 22px 12px 16px;
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
}
.nu-badge .nu-badge-icon {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  fill: var(--nu-cyan);
  flex-shrink: 0;
}

/* CALLOUT */
.nu-callout {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-left: 4px solid var(--nu-blue);
  padding: 18px 22px;
  border-radius: 6px;
  margin: 20px 0;
}
.nu-callout strong { color: #0033cc; }

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 50px 40px;
  text-align: center;
  font-family: var(--font-primary);
}
.nu-footer-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--nu-cyan);
  margin-bottom: 18px;
}
.nu-footer-contact {
  font-size: 1rem;
  line-height: 1.9;
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
}
.nu-footer-contact a:hover { text-decoration: underline; }
.nu-footer-divider {
  height: 1px;
  background: rgba(255,255,255,0.15);
  margin: 24px auto;
  max-width: 400px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nu-header { padding: 50px 20px 70px; min-height: 240px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-container { padding: 40px 20px; }
  .nu-section-title { font-size: 1.3rem; }
  .nu-task-banner-title { font-size: 1.15rem; }
  .nu-table th, .nu-table td { padding: 10px 8px; font-size: 0.82rem; }
  .nu-badge { clip-path: none; border-radius: 6px; }
}

@media print {
  body { background: var(--nu-white); }
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-card { box-shadow: none; border: 1px solid #ccc; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
}
</style>
</head>
<body>

<header class="nu-header">
  <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
  </svg>
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
    <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="nu-container">

    <div class="nu-task-banner">
      <span class="nu-task-banner-label">reMarkable Action Item</span>
      <div class="nu-task-banner-title">Follow Up on Last PO — Inventory Status Check</div>
      <div class="nu-task-banner-meta">Captured: 2026-04-22 &nbsp;|&nbsp; Source: reMarkable handwritten note &nbsp;|&nbsp; Owner: Aaron C. Norris &nbsp;|&nbsp; Priority: HIGH (anxiously waiting)</div>
    </div>

    <div class="nu-badge-row">
      <span class="nu-badge">
        <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        OPEN PO TRACKING
      </span>
      <span class="nu-badge">
        <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M21 10H3M21 6H3M21 14H3M21 18H3"/></svg>
        VENDOR FOLLOW-UP
      </span>
      <span class="nu-badge">
        <svg class="nu-badge-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        TIME-SENSITIVE
      </span>
    </div>

    <h2 class="nu-section-title">Open <span>Purchase Orders Awaiting Inventory</span></h2>
    <div class="nu-section-rule"></div>

    <p style="margin-bottom: 20px; color: var(--nu-body-text);">
      Below are the active POs Norris Utilities® has placed where inventory has not yet arrived or been confirmed. Aaron's reMarkable note flagged at least one of these as anxiously awaited — most likely the Skylift PO for SBA40i-LW units. Confirm which PO Aaron meant before sending vendor follow-ups.
    </p>

    <table class="nu-table">
      <thead>
        <tr>
          <th>PO Reference</th>
          <th>Vendor</th>
          <th>PO Date</th>
          <th>Items / Qty</th>
          <th>Promised</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Skylift PO 1/12/26</strong></td>
          <td>Skylift (Andrew Jarmoszuk)</td>
          <td>2026-01-12</td>
          <td>5× SBA40i-LW + 1× SBA47i-MH</td>
          <td>~3 weeks (per Nick Gordon)</td>
          <td><span class="nu-status-pill urgent">Overdue Inquiry</span></td>
        </tr>
        <tr>
          <td><strong>FlexPro Armor Restock</strong></td>
          <td>BOSS Products (Troy / Thayne)</td>
          <td>Confirm in QB</td>
          <td>NU-BC-2851 / NU-BC-2834 series</td>
          <td>Confirm with vendor</td>
          <td><span class="nu-status-pill followup">Follow Up</span></td>
        </tr>
        <tr>
          <td><strong>Samson Rope Order</strong></td>
          <td>Samson (Donna Poll / Sarah Daniels)</td>
          <td>Confirm in QB</td>
          <td>Per last PO — confirm SKU mix</td>
          <td>Confirm with vendor</td>
          <td><span class="nu-status-pill pending">Pending</span></td>
        </tr>
        <tr>
          <td><strong>Bay Shore Drill Rig</strong></td>
          <td>Bay Shore Systems (Andy Barron)</td>
          <td>Confirm in QB</td>
          <td>Per last territory order</td>
          <td>Confirm with vendor</td>
          <td><span class="nu-status-pill pending">Pending</span></td>
        </tr>
      </tbody>
    </table>

    <div class="nu-callout" style="margin-top: 20px;">
      <strong>STEP 1 — Identify which PO.</strong> Aaron's note said "last PO." Open QuickBooks and the master tracker to confirm the most recent open PO before sending follow-up. Best guess based on January correspondence: <strong>Skylift PO 1/12/26 ($1,091,402.50)</strong>.
    </div>

    <h2 class="nu-section-title">Follow-Up <span>Action Checklist</span></h2>
    <div class="nu-section-rule"></div>

    <div class="nu-card">
      <ul class="nu-checklist">
        <li>
          <span class="nu-check-box"></span>
          <span class="nu-check-text">
            <strong>Confirm which PO Aaron is referring to</strong>
            <span>Open QuickBooks → Vendors → Open POs. Cross-reference master tracker for "last PO." Default to Skylift 1/12/26 unless a newer PO surfaces.</span>
          </span>
        </li>
        <li>
          <span class="nu-check-box"></span>
          <span class="nu-check-text">
            <strong>Pull the original PO + any prior correspondence</strong>
            <span>Search Gmail for the vendor name + PO number. Note the most recent ETA they committed to.</span>
          </span>
        </li>
        <li>
          <span class="nu-check-box"></span>
          <span class="nu-check-text">
            <strong>Calculate days elapsed since last vendor update</strong>
            <span>If &gt; 14 days from last update or &gt; promised ETA, send follow-up today. Otherwise schedule for the ETA date + 3 days.</span>
          </span>
        </li>
        <li>
          <span class="nu-check-box"></span>
          <span class="nu-check-text">
            <strong>Send the follow-up email (draft below)</strong>
            <span>CC requirements per CLAUDE.md: Boss Products → CC Troy + Thayne. Samson → CC Donna + Sarah. Skylift → CC Andrew, Dale, and Nick Jr.</span>
          </span>
        </li>
        <li>
          <span class="nu-check-box"></span>
          <span class="nu-check-text">
            <strong>Log the outreach in master tracker</strong>
            <span>Update operations/master_tracker with date sent, contact, and expected response date (3 business days).</span>
          </span>
        </li>
        <li>
          <span class="nu-check-box"></span>
          <span class="nu-check-text">
            <strong>Set Telegram reminder for 3 business days out</strong>
            <span>If no vendor reply by then, escalate with phone call to primary contact.</span>
          </span>
        </li>
        <li>
          <span class="nu-check-box"></span>
          <span class="nu-check-text">
            <strong>If inventory has shipped — capture tracking + ETA</strong>
            <span>Add to operations/open-invoices and update any waiting customers (especially active deals depending on this stock).</span>
          </span>
        </li>
      </ul>
    </div>

    <h2 class="nu-section-title">Email <span>Draft — Vendor Follow-Up</span></h2>
    <div class="nu-section-rule"></div>

    <p style="margin-bottom: 20px; color: var(--nu-body-text);">
      Default draft below assumes Skylift PO 1/12/26. Swap vendor name, contact, and PO reference if confirmed otherwise. Keep the tone direct and warm — never apologetic.
    </p>

    <div class="nu-email-draft">
      <div class="nu-email-meta">
        <strong>To:</strong> Andrew Jarmoszuk &lt;andrew@skylift.com&gt;<br>
        <strong>CC:</strong> Dale Williams &lt;dale@skylift.com&gt;; Nick Jarmoszuk Jr &lt;nick@skylift.com&gt;<br>
        <strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;<br>
        <strong>Subject:</strong> PO 1/12/26 — Status Check on SBA40i-LW &amp; SBA47i-MH Build Slots
      </div>
      <div class="nu-email-body">
        <p class="no-indent">Andrew —</p>
        <p>Checking in on our PO from January 12th — the five SBA40i-LW units and the one SBA47i-MH ($1,091,402.50 total). It has been a couple of months since our last update, and I have customers leaning on me for delivery dates on the SBA40i-LWs in particular.</p>
        <p>Could you confirm the following so I can get back to them with real numbers:</p>
        <ul>
          <li>Current build status of each unit (in queue, on the line, ready for paint, etc.)</li>
          <li>Updated delivery window for each unit — even rough weeks help</li>
          <li>Any spec changes or supplier delays we should plan around</li>
        </ul>
        <p>If a quick phone call is easier, I am at 205-500-1343 — happy to work around your schedule. Y'all have always come through, and I want to make sure I am communicating accurately with the end customers waiting on this inventory.</p>
        <p>Appreciate you.</p>
        <p class="no-indent">Sincerely,</p>
        <div class="signature">
          Aaron C. Norris<br>
          Founder &amp; CEO<br>
          Norris Utilities, LLC<br>
          Cell: 205-500-1343<br>
          acnorris@norrisutilities.com
        </div>
      </div>
    </div>

    <h2 class="nu-section-title">Vendor <span>Contact Reference</span></h2>
    <div class="nu-section-rule"></div>

    <div class="nu-two-col">
      <div class="nu-card">
        <h3>Skylift</h3>
        <p>Primary: Andrew Jarmoszuk<br>CC: Dale Williams, Nick Jarmoszuk Jr</p>
        <ul>
          <li>Open PO: 5× SBA40i-LW + 1× SBA47i-MH (1/12/26)</li>
          <li>ETA window: ~3 weeks per Nick Gordon</li>
          <li>Pricing/specs contact: Nick Gordon</li>
        </ul>
      </div>
      <div class="nu-card">
        <h3>BOSS Products (FlexPro Armor)</h3>
        <p>Primary: Troy Gongwer + Thayne Grove (always CC both)</p>
        <ul>
          <li>SKUs: NU-BC-2851, NU-BC-2834, combo variants</li>
          <li>Margin: 50% on all FlexPro Armor sales</li>
          <li>Handmade USA — confirm batch lead time</li>
        </ul>
      </div>
      <div class="nu-card">
        <h3>Samson Rope</h3>
        <p>Primary: Donna Poll + Sarah Daniels (always CC both)</p>
        <ul>
          <li>Authorized distributor</li>
          <li>Margin: 30%</li>
          <li>Confirm SKU mix on outstanding PO</li>
        </ul>
      </div>
      <div class="nu-card">
        <h3>Bay Shore Systems</h3>
        <p>Owner: Herb Minatre &nbsp;|&nbsp; Primary: Andy Barron</p>
        <ul>
          <li>Drill rigs — SE territory rep</li>
          <li>Equipment margin: 12-15%</li>
          <li>Andy is also a travel/sales partner</li>
        </ul>
      </div>
    </div>

    <h2 class="nu-section-title">Escalation <span>Plan</span></h2>
    <div class="nu-section-rule"></div>

    <div class="nu-card">
      <ul style="list-style: decimal; margin-left: 22px;">
        <li><strong>Day 0 (today):</strong> Send vendor email per draft above. Log in master tracker.</li>
        <li><strong>Day +3 business days:</strong> If no reply, call primary contact directly at known number.</li>
        <li><strong>Day +5 business days:</strong> If still no resolution, escalate to secondary contact (e.g., Nick Jarmoszuk Jr at Skylift, or Herb Minatre at BSS).</li>
        <li><strong>Day +7 business days:</strong> If inventory will miss any committed customer date, prepare proactive customer-side communication — never let the customer learn of a delay from anyone but Aaron.</li>
      </ul>
    </div>

    <div class="nu-callout">
      <strong>Customer impact note:</strong> If the Skylift inventory is the one in question, downstream customers may include the active deal pipeline tied to the SBA40i-LW units. Cross-check operations/deals-pipeline before any external communication so commitments stay coordinated.
    </div>

  </div>
</main>

<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
  <div class="nu-footer-divider"></div>
  <div style="font-size: 0.8rem; color: rgba(255,255,255,0.55);">
    Internal action page — generated from reMarkable handwritten capture, 2026-04-22
  </div>
</footer>

</body>
</html>