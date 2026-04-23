<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Inventory PO Follow-Up — Norris Utilities®</title>
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
  --nu-warn: #C9302C;
  --nu-success: #1E7F3E;
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
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
.nu-header * { position: relative; z-index: 2; }
.nu-phoenix-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
  font-family: var(--font-italic);
  font-style: italic;
  font-weight: 400;
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
.nu-chevron svg {
  width: 100%;
  height: 50px;
  display: block;
}

/* CONTENT */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
  padding: 60px 40px 80px;
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%; max-width: 600px; aspect-ratio: 1;
  background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-wrap {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* TITLE BAR */
.nu-title-block {
  border-left: 6px solid var(--nu-cyan);
  padding: 8px 0 8px 22px;
  margin-bottom: 36px;
}
.nu-eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 8px;
}
.nu-page-title {
  font-size: 2.4rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1.2;
}
.nu-page-title span {
  color: var(--nu-blue);
}
.nu-page-sub {
  margin-top: 10px;
  color: #555;
  font-size: 1.05rem;
}

/* SECTION */
.nu-section {
  margin-bottom: 40px;
}
.nu-section-title {
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--nu-dark-text);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--nu-medium-gray);
}
.nu-section-title span {
  color: var(--nu-blue);
}

/* STATUS CARDS */
.nu-status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 12px;
}
.nu-stat-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-top: 4px solid var(--nu-blue);
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}
.nu-stat-card.accent-cyan { border-top-color: var(--nu-cyan); }
.nu-stat-card.accent-warn { border-top-color: var(--nu-warn); }
.nu-stat-card.accent-gold { border-top-color: var(--nu-accent-gold); }
.nu-stat-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #777;
  margin-bottom: 8px;
}
.nu-stat-value {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1.25;
}
.nu-stat-note {
  margin-top: 6px;
  font-size: 0.9rem;
  color: #555;
}

/* BADGES */
.nu-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}
.nu-badge {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 10px 20px 10px 14px;
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
}
.nu-badge.warn { background: linear-gradient(135deg, #7a1919 0%, #c9302c 100%); }
.nu-badge.cyan { background: linear-gradient(135deg, #0033cc 0%, var(--nu-cyan) 100%); }

/* TABLE */
.nu-table-wrap {
  overflow-x: auto;
  border: 1px solid var(--nu-medium-gray);
  border-radius: 6px;
}
table.nu-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  font-size: 0.95rem;
}
table.nu-table th {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: var(--nu-white);
  text-align: left;
  padding: 12px 14px;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
table.nu-table td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--nu-medium-gray);
  vertical-align: top;
}
table.nu-table tr:last-child td { border-bottom: none; }
table.nu-table tr:nth-child(even) td { background: #fafaff; }
.td-strong { font-weight: 700; color: var(--nu-dark-text); }

/* ACTION LIST */
.nu-actions {
  list-style: none;
  counter-reset: step;
}
.nu-actions li {
  counter-increment: step;
  position: relative;
  padding: 16px 16px 16px 64px;
  margin-bottom: 12px;
  background: var(--nu-light-gray);
  border-left: 4px solid var(--nu-blue);
  border-radius: 4px;
}
.nu-actions li::before {
  content: counter(step);
  position: absolute;
  left: 16px; top: 50%;
  transform: translateY(-50%);
  width: 36px; height: 36px;
  background: var(--nu-blue);
  color: var(--nu-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1rem;
}
.nu-actions li strong { color: var(--nu-dark-text); }

/* CALLOUT */
.nu-callout {
  background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
  border: 1px solid rgba(0,0,255,0.15);
  border-left: 6px solid var(--nu-blue);
  padding: 20px 24px;
  border-radius: 6px;
  margin-bottom: 24px;
}
.nu-callout h3 {
  font-weight: 900;
  color: var(--nu-blue);
  margin-bottom: 8px;
  font-size: 1.1rem;
}
.nu-callout p { color: #333; }

/* DRAFT EMAIL */
.nu-email {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 6px;
  padding: 24px 28px;
  font-size: 0.98rem;
  line-height: 1.7;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}
.nu-email .meta {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 4px 14px;
  padding-bottom: 14px;
  margin-bottom: 18px;
  border-bottom: 1px dashed var(--nu-medium-gray);
  font-size: 0.9rem;
}
.nu-email .meta dt {
  font-weight: 700;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.78rem;
  padding-top: 2px;
}
.nu-email .meta dd { color: var(--nu-dark-text); }
.nu-email p { margin-bottom: 14px; padding-left: 12px; }
.nu-email .bullet { padding-left: 28px; margin-bottom: 6px; }
.nu-email .sig {
  margin-top: 22px;
  padding-left: 12px;
  color: var(--nu-dark-text);
}
.nu-email .sig-name { font-weight: 700; }

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: var(--font-italic);
  font-style: italic;
  font-weight: 400;
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

/* RESPONSIVE */
@media (max-width: 768px) {
  .nu-header { padding: 40px 20px 60px; min-height: 200px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-content-area { padding: 40px 20px 60px; }
  .nu-page-title { font-size: 1.7rem; }
  .nu-badge { clip-path: none; border-radius: 6px; }
  .nu-email .meta { grid-template-columns: 1fr; }
  .nu-email .meta dt { padding-top: 10px; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <div class="nu-phoenix-icon">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
  </svg>
</div>

<!-- MAIN -->
<main class="nu-content-area">
  <div class="nu-wrap">

    <!-- TITLE -->
    <div class="nu-title-block">
      <div class="nu-eyebrow">Action Item · reMarkable · Inbound Inventory</div>
      <h1 class="nu-page-title">Inventory PO <span>Follow-Up</span></h1>
      <p class="nu-page-sub">Last purchase order — anxiously waiting on ship date, tracking, and ETA so we can invoice and deliver on open customer commitments.</p>
    </div>

    <!-- BADGES -->
    <div class="nu-badge-row">
      <span class="nu-badge warn">PRIORITY: HIGH</span>
      <span class="nu-badge">SOURCE: reMarkable</span>
      <span class="nu-badge cyan">OWNER: Aaron C. Norris</span>
      <span class="nu-badge">STATUS: AWAITING SUPPLIER REPLY</span>
    </div>

    <!-- STATUS CARDS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span>At-a-Glance</span> Snapshot</h2>
      <div class="nu-status-grid">
        <div class="nu-stat-card">
          <div class="nu-stat-label">Action Captured</div>
          <div class="nu-stat-value">2026-04-23</div>
          <div class="nu-stat-note">reMarkable notebook entry</div>
        </div>
        <div class="nu-stat-card accent-cyan">
          <div class="nu-stat-label">PO Reference</div>
          <div class="nu-stat-value">Last PO on File</div>
          <div class="nu-stat-note">Pull PO#, date, and line items before calling</div>
        </div>
        <div class="nu-stat-card accent-warn">
          <div class="nu-stat-label">Customer Pressure</div>
          <div class="nu-stat-value">Open Orders Waiting</div>
          <div class="nu-stat-note">Anxious — ship ASAP once inventory lands</div>
        </div>
        <div class="nu-stat-card accent-gold">
          <div class="nu-stat-label">Next Touch</div>
          <div class="nu-stat-value">Supplier Call + Email</div>
          <div class="nu-stat-note">Same-day. Log reply in tracker.</div>
        </div>
      </div>
    </section>

    <!-- CALLOUT -->
    <div class="nu-callout">
      <h3>Why This Matters</h3>
      <p>Inventory from the last PO is the bottleneck on several open customer commitments. Every day of silence from the supplier pushes shipping, invoicing, and cash collection further to the right. We need a hard ETA on the books today.</p>
    </div>

    <!-- WHAT WE NEED -->
    <section class="nu-section">
      <h2 class="nu-section-title">What We <span>Need To Confirm</span></h2>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Data Point</th>
              <th>Why We Need It</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td-strong">1</td>
              <td class="td-strong">PO Number &amp; Date</td>
              <td>Anchor point for every follow-up and every tracker update.</td>
            </tr>
            <tr>
              <td class="td-strong">2</td>
              <td class="td-strong">Line Items &amp; Quantities</td>
              <td>Confirm nothing dropped, split, or back-ordered without notice.</td>
            </tr>
            <tr>
              <td class="td-strong">3</td>
              <td class="td-strong">Production Status</td>
              <td>In queue, in production, or ready to ship — determines the ask.</td>
            </tr>
            <tr>
              <td class="td-strong">4</td>
              <td class="td-strong">Ship Date</td>
              <td>Needed to sequence customer commitments and shipping quotes.</td>
            </tr>
            <tr>
              <td class="td-strong">5</td>
              <td class="td-strong">Carrier &amp; Tracking</td>
              <td>So we can stage receiving and update the customer proactively.</td>
            </tr>
            <tr>
              <td class="td-strong">6</td>
              <td class="td-strong">Delivered ETA</td>
              <td>Trigger to finalize customer invoice, shipping charge, and delivery.</td>
            </tr>
            <tr>
              <td class="td-strong">7</td>
              <td class="td-strong">Any Changes to Pricing</td>
              <td>Rare — but if it happened, we re-run margin before invoicing.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ACTION PLAN -->
    <section class="nu-section">
      <h2 class="nu-section-title">Action <span>Plan</span></h2>
      <ol class="nu-actions">
        <li><strong>Pull the last PO</strong> from records — confirm PO number, date, line items, and agreed lead time before making contact.</li>
        <li><strong>Call the supplier rep</strong> first. Voice gets the straight answer faster than email on anything time-sensitive.</li>
        <li><strong>Send the follow-up email</strong> (draft below) so there is a written record with a clear list of what we need back.</li>
        <li><strong>Log the reply</strong> — ship date, tracking, ETA — in the master tracker and mark the reMarkable action item closed.</li>
        <li><strong>Notify affected customers</strong> with a concrete ETA the moment the ship date is confirmed. No vague promises.</li>
        <li><strong>Queue invoicing</strong> on delivery — shipping charge calculated via Ben's Formula: ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0).</li>
      </ol>
    </section>

    <!-- EMAIL DRAFT -->
    <section class="nu-section">
      <h2 class="nu-section-title">Follow-Up <span>Email Draft</span></h2>
      <div class="nu-email" role="article" aria-label="Draft email to supplier">
        <dl class="meta">
          <dt>To</dt><dd>[Supplier Rep — confirm before sending]</dd>
          <dt>CC</dt><dd>[Secondary contact per vendor protocol]</dd>
          <dt>From</dt><dd>Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</dd>
          <dt>Subject</dt><dd>Status Check — Last PO, Inventory Follow-Up</dd>
        </dl>

        <p>Name —</p>

        <p>Checking in on our last purchase order. We have customers lined up against this inventory and I want to get them an accurate delivery date today.</p>

        <p>Could y'all confirm the following so I can update the orders on my side:</p>

        <p class="bullet">• PO number and order date on your side</p>
        <p class="bullet">• Current production status (in queue / in production / packed)</p>
        <p class="bullet">• Ship date and carrier</p>
        <p class="bullet">• Tracking number once it moves</p>
        <p class="bullet">• Delivered ETA</p>

        <p>If anything on the order changed — quantities, split shipment, pricing — please flag it so I can square it with the customer before it hits the dock.</p>

        <p>I appreciate you jumping on this. Happy to hop on a quick call if that is faster.</p>

        <div class="sig">
          Sincerely,<br>
          <span class="sig-name">Aaron C. Norris</span><br>
          Founder &amp; CEO<br>
          Norris Utilities, LLC<br>
          Cell: 205-500-1343<br>
          acnorris@norrisutilities.com
        </div>
      </div>
    </section>

    <!-- DEFINITION OF DONE -->
    <section class="nu-section">
      <h2 class="nu-section-title">Definition <span>of Done</span></h2>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>Checkpoint</th>
              <th>Evidence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td-strong">Supplier confirmed ship date</td>
              <td>Written reply on file; date logged in master tracker.</td>
            </tr>
            <tr>
              <td class="td-strong">Tracking captured</td>
              <td>Carrier + tracking number in the tracker and on the customer record.</td>
            </tr>
            <tr>
              <td class="td-strong">Customers notified</td>
              <td>Each affected customer has a concrete ETA in writing.</td>
            </tr>
            <tr>
              <td class="td-strong">Invoicing queued</td>
              <td>Invoice draft staged with shipping calculated via Ben's Formula.</td>
            </tr>
            <tr>
              <td class="td-strong">reMarkable item closed</td>
              <td>Action item checked off; resolution noted in session summary.</td>
            </tr>
          </tbody>
        </table>
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
</footer>

</body>
</html>