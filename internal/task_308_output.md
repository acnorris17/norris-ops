<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Caroline Forecast & Meeting Brief — Norris Utilities®</title>
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
  --nu-green: #1f8a3b;
  --nu-amber: #c08a00;
  --nu-red: #b4231f;
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
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
  padding: 64px 40px 90px;
  text-align: center;
  overflow: hidden;
  min-height: 300px;
}
.nu-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
  z-index: 1;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -40%; right: -10%;
  width: 70%; height: 200%;
  background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
  z-index: 1;
}
.nu-header > * { position: relative; z-index: 2; }

.nu-phoenix-watermark {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  max-width: 520px;
  opacity: 0.07;
  z-index: 1;
  pointer-events: none;
}

.nu-logo-text {
  font-weight: 900;
  font-size: 3rem;
  color: var(--nu-white);
  letter-spacing: 0.35em;
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
  margin-bottom: 18px;
  padding-left: 0.7em;
}
.nu-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
  margin-bottom: 12px;
}
.nu-doc-label {
  display: inline-block;
  margin-top: 14px;
  padding: 6px 18px;
  background: rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.35);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--nu-white);
}

/* WHITE CHEVRON */
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
}
.nu-wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 54px 40px 70px;
  position: relative;
  z-index: 2;
}

/* TITLE BLOCK */
.nu-title-block {
  margin-bottom: 36px;
  padding-bottom: 22px;
  border-bottom: 3px solid var(--nu-blue);
}
.nu-kicker {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 10px;
}
.nu-h1 {
  font-weight: 900;
  font-size: 2.35rem;
  line-height: 1.15;
  color: var(--nu-dark-text);
  margin-bottom: 10px;
}
.nu-h1 .accent { color: var(--nu-blue); }
.nu-sub {
  font-size: 1.05rem;
  color: #555;
  max-width: 820px;
}
.nu-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 28px;
  margin-top: 18px;
  font-size: 0.88rem;
}
.nu-meta-row span b {
  color: var(--nu-navy);
  font-weight: 700;
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 2px;
  color: #777;
}

/* SECTION HEADERS */
.nu-section-title {
  font-weight: 900;
  font-size: 1.5rem;
  margin: 42px 0 16px;
  line-height: 1.2;
}
.nu-section-title .first { color: var(--nu-blue); }
.nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

/* CARDS */
.nu-card {
  background: var(--nu-white);
  border-radius: 10px;
  padding: 26px 28px;
  box-shadow: 0 2px 14px rgba(0,0,0,0.06);
  border: 1px solid var(--nu-medium-gray);
  margin-bottom: 16px;
}
.nu-card h3 {
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--nu-navy);
  margin-bottom: 10px;
  letter-spacing: 0.02em;
}
.nu-card p { margin-bottom: 8px; }
.nu-card ul { margin: 8px 0 4px 20px; }
.nu-card li { margin-bottom: 6px; }

/* KPI TILES */
.nu-kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}
.nu-kpi {
  background: linear-gradient(135deg, #ffffff 0%, #f3f7ff 100%);
  border: 1px solid var(--nu-medium-gray);
  border-left: 4px solid var(--nu-blue);
  border-radius: 8px;
  padding: 18px 20px;
}
.nu-kpi .label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #777;
  margin-bottom: 6px;
}
.nu-kpi .value {
  font-size: 1.65rem;
  font-weight: 900;
  color: var(--nu-navy);
  line-height: 1.1;
}
.nu-kpi .note {
  font-size: 0.82rem;
  color: #666;
  margin-top: 4px;
}
.nu-kpi.cyan { border-left-color: var(--nu-cyan); }
.nu-kpi.gold { border-left-color: var(--nu-accent-gold); }

/* TABLES */
.nu-table-wrap {
  overflow-x: auto;
  border-radius: 10px;
  border: 1px solid var(--nu-medium-gray);
  margin-bottom: 18px;
  background: var(--nu-white);
}
table.nu-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.93rem;
}
table.nu-table thead {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: var(--nu-white);
}
table.nu-table th {
  text-align: left;
  padding: 12px 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-size: 0.82rem;
  text-transform: uppercase;
}
table.nu-table td {
  padding: 11px 14px;
  border-top: 1px solid var(--nu-medium-gray);
  vertical-align: top;
}
table.nu-table tbody tr:nth-child(even) { background: #fafbfd; }
table.nu-table tbody tr:hover { background: #eef4ff; }
table.nu-table td.num, table.nu-table th.num { text-align: right; font-variant-numeric: tabular-nums; }
table.nu-table tfoot td {
  font-weight: 900;
  background: #f0f4ff;
  color: var(--nu-navy);
  border-top: 2px solid var(--nu-blue);
}

/* BADGES */
.pill {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.pill.green { background: #e6f5ea; color: var(--nu-green); }
.pill.amber { background: #fff4dc; color: var(--nu-amber); }
.pill.red { background: #fde5e4; color: var(--nu-red); }
.pill.blue { background: #e6e9ff; color: var(--nu-blue); }

/* AGENDA */
.agenda-list { counter-reset: step; list-style: none; padding: 0; }
.agenda-list li {
  counter-increment: step;
  position: relative;
  padding: 16px 18px 16px 60px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  margin-bottom: 10px;
}
.agenda-list li::before {
  content: counter(step);
  position: absolute;
  left: 16px; top: 14px;
  width: 32px; height: 32px;
  border-radius: 50%;
  background: var(--nu-blue);
  color: var(--nu-white);
  font-weight: 900;
  font-size: 0.95rem;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 3px 8px rgba(0,0,255,0.22);
}
.agenda-list li b {
  display: block;
  color: var(--nu-navy);
  font-weight: 900;
  margin-bottom: 4px;
}
.agenda-list li .tm {
  font-size: 0.78rem;
  color: var(--nu-blue);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-right: 10px;
}

/* TWO COL */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

/* CALLOUT */
.callout {
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
  color: var(--nu-white);
  border-radius: 12px;
  padding: 26px 30px;
  margin: 24px 0;
  position: relative;
  overflow: hidden;
}
.callout::before {
  content: '';
  position: absolute;
  top: -30%; right: -10%;
  width: 50%; height: 200%;
  background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 65%);
  pointer-events: none;
}
.callout h3 {
  font-weight: 900;
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: var(--nu-cyan);
  letter-spacing: 0.04em;
}
.callout p { color: rgba(255,255,255,0.93); }

/* CHECKLIST */
.checklist { list-style: none; padding: 0; }
.checklist li {
  padding: 9px 0 9px 32px;
  position: relative;
  border-bottom: 1px dashed #dfe3ec;
}
.checklist li:last-child { border-bottom: none; }
.checklist li::before {
  content: '';
  position: absolute;
  left: 0; top: 13px;
  width: 18px; height: 18px;
  border: 2px solid var(--nu-blue);
  border-radius: 4px;
  background: var(--nu-white);
}

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #000099 100%);
  color: rgba(255,255,255,0.85);
  padding: 44px 40px 40px;
  text-align: center;
  font-family: var(--font-primary);
}
.nu-footer-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.2rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
}
.nu-footer-contact { font-size: 0.92rem; line-height: 1.85; }
.nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
.nu-footer-contact a:hover { text-decoration: underline; }

@media (max-width: 768px) {
  .nu-header { padding: 44px 20px 70px; min-height: 220px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1rem; }
  .nu-wrap { padding: 36px 20px 50px; }
  .nu-h1 { font-size: 1.7rem; }
  .two-col { grid-template-columns: 1fr; }
}

@media print {
  body { background: var(--nu-white); }
  .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-card, .nu-kpi, .agenda-list li { box-shadow: none; }
  .callout { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
</style>
</head>
<body>

<header class="nu-header">
  <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#ffffff"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#ffffff"/>
  </svg>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
  <div class="nu-doc-label">Internal Planning Brief</div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L548,56 L1440,0 L1440,56 L0,56 Z" fill="#ffffff"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="nu-wrap">

    <div class="nu-title-block">
      <div class="nu-kicker">Action Brief · CEO → Admin Operations</div>
      <h1 class="nu-h1">Run the <span class="accent">Numbers</span> &amp; Forecast for Caroline — Then Meet</h1>
      <p class="nu-sub">Pre-meeting financial pack and agenda for Aaron C. Norris's working session with Caroline Butler (Admin, Tier 1 trust). Purpose: align Caroline on the current AR picture, the April–June revenue forecast, and the admin workload required to support it.</p>
      <div class="nu-meta-row">
        <span><b>Prepared For</b>Caroline Butler (CB)</span>
        <span><b>Prepared By</b>Aaron C. Norris, Founder &amp; CEO</span>
        <span><b>Meeting Length</b>45 minutes</span>
        <span><b>Document Date</b>April 24, 2026</span>
        <span><b>Location</b>130 Inverness Plaza #210 · or video call</span>
      </div>
    </div>

    <!-- SNAPSHOT -->
    <h2 class="nu-section-title"><span class="first">Financial</span> <span class="rest">Snapshot</span></h2>
    <div class="nu-kpi-grid">
      <div class="nu-kpi">
        <div class="label">Open AR (Uninvoiced)</div>
        <div class="value">~$5,760+</div>
        <div class="note">March 20 shipments — not yet entered in QuickBooks</div>
      </div>
      <div class="nu-kpi cyan">
        <div class="label">CB Silent-Draft Backlog</div>
        <div class="value">$3,685.15</div>
        <div class="note">QB 150 drafts awaiting Aaron review</div>
      </div>
      <div class="nu-kpi gold">
        <div class="label">FlexPro Armor Margin</div>
        <div class="value">50%</div>
        <div class="note">Locked per pricing rule — no exceptions</div>
      </div>
      <div class="nu-kpi">
        <div class="label">Active Deals Pipeline</div>
        <div class="value">8 records</div>
        <div class="note">Palace wing: deals · incl. Crosby / Dominion 3-order</div>
      </div>
    </div>

    <!-- OPEN AR -->
    <h2 class="nu-section-title"><span class="first">Open</span> <span class="rest">Invoices to Close Before Meeting</span></h2>
    <p style="margin-bottom:14px;">Every shipment below is revenue already earned. Caroline's first-week priority is converting them to QuickBooks invoices with the correct Ben's Shipping Formula applied: <b>CustomerCost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)</b>.</p>

    <div class="nu-table-wrap">
      <table class="nu-table">
        <thead>
          <tr>
            <th>Ship Date</th>
            <th>Customer</th>
            <th>Item / SKU</th>
            <th class="num">Qty</th>
            <th class="num">Est. Value</th>
            <th>Status</th>
            <th>Next Step (CB)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026-03-20</td>
            <td>Matthews Contracting Co.</td>
            <td>NU-BC-2834 (1.5-Man)</td>
            <td class="num">5</td>
            <td class="num">~$1,525</td>
            <td><span class="pill red">Uninvoiced</span></td>
            <td>Draft QB invoice · apply shipping formula</td>
          </tr>
          <tr>
            <td>2026-03-20</td>
            <td>Chain Electric (reconciled)</td>
            <td>NU-BC-2851 + combo</td>
            <td class="num">—</td>
            <td class="num">TBD from SA V5</td>
            <td><span class="pill amber">Reconciled, pending invoice</span></td>
            <td>Pull canonical totals from Shipping Agent V5</td>
          </tr>
          <tr>
            <td>2026-04-09</td>
            <td>Coy Crosby / Dominion Energy</td>
            <td>NU-BC-2851 @ $305 each</td>
            <td class="num">5</td>
            <td class="num">$1,525 + ship</td>
            <td><span class="pill amber">Quoted — confirm PO</span></td>
            <td>Confirm PO number, then draft invoice</td>
          </tr>
          <tr>
            <td>2026-04-16</td>
            <td>Richard Thornhill / Linetec</td>
            <td>Flagged CRITICAL</td>
            <td class="num">—</td>
            <td class="num">TBD</td>
            <td><span class="pill red">Aaron review first</span></td>
            <td>Wait for Aaron green light before drafting</td>
          </tr>
          <tr>
            <td>Silent queue</td>
            <td>Multiple accounts</td>
            <td>CB silent drafts (QB 150)</td>
            <td class="num">—</td>
            <td class="num">$3,685.15</td>
            <td><span class="pill blue">Awaiting review</span></td>
            <td>Route each through Aaron's morning brief</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">Minimum uninvoiced revenue to recover this week</td>
            <td class="num">~$6,735+</td>
            <td colspan="2">Target: zero uninvoiced shipments by Friday</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- FORECAST -->
    <h2 class="nu-section-title"><span class="first">90-Day</span> <span class="rest">Revenue Forecast · Q2 2026</span></h2>
    <p style="margin-bottom:14px;">Forecast bands are conservative (Low), expected (Base), and aggressive (High). Based on pipeline records in Palace <i>deals</i> wing, current quote velocity, and FlexPro Armor reorder cadence observed in Q1.</p>

    <div class="nu-table-wrap">
      <table class="nu-table">
        <thead>
          <tr>
            <th>Channel</th>
            <th class="num">May 2026 (Low)</th>
            <th class="num">May 2026 (Base)</th>
            <th class="num">May 2026 (High)</th>
            <th class="num">Jun 2026 (Base)</th>
            <th>Key Assumption</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>FlexPro Armor · Direct</b></td>
            <td class="num">$8,400</td>
            <td class="num">$12,500</td>
            <td class="num">$18,000</td>
            <td class="num">$14,000</td>
            <td>50% margin · 40–60 covers/mo</td>
          </tr>
          <tr>
            <td><b>FlexPro Armor · Dealer (30% off)</b></td>
            <td class="num">$4,200</td>
            <td class="num">$6,800</td>
            <td class="num">$9,500</td>
            <td class="num">$7,500</td>
            <td>Irby (Lemoine) reorder in May</td>
          </tr>
          <tr>
            <td><b>Samson Rope</b></td>
            <td class="num">$1,800</td>
            <td class="num">$3,200</td>
            <td class="num">$5,400</td>
            <td class="num">$3,500</td>
            <td>30% margin · H&amp;D Reel Cover follow-up</td>
          </tr>
          <tr>
            <td><b>Skylift / Equipment</b></td>
            <td class="num">$0</td>
            <td class="num">$42,000</td>
            <td class="num">$118,000</td>
            <td class="num">$55,000</td>
            <td>12–15% · Kugler/Terex unit close probable</td>
          </tr>
          <tr>
            <td><b>Bay Shore Drill Rigs (SE rep)</b></td>
            <td class="num">$0</td>
            <td class="num">$0</td>
            <td class="num">$26,000</td>
            <td class="num">$9,000</td>
            <td>Long cycle; commission-style</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Forecast Totals</td>
            <td class="num">$14,400</td>
            <td class="num">$64,500</td>
            <td class="num">$176,900</td>
            <td class="num">$89,000</td>
            <td>Base = planning number for CB workload</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="two-col">
      <div class="nu-card">
        <h3>What the Base Forecast Means for Caroline</h3>
        <ul>
          <li>~25–35 invoices per month (direct + dealer combined)</li>
          <li>~15 shipping calculations per month using Ben's Formula</li>
          <li>2–3 multi-ship-to parent orders per month (Rule 19)</li>
          <li>One equipment invoice (Skylift/Terex) requires Aaron-only review</li>
          <li>Weekly AR aging report every Monday 7:00 AM CT</li>
        </ul>
      </div>
      <div class="nu-card">
        <h3>What Would Move the High Case</h3>
        <ul>
          <li>Kugler / Terex unit closes before May 30</li>
          <li>Crosby / Dominion three-order stays on cadence</li>
          <li>FlexPro Armor sample kit converts 2 new dealers</li>
          <li>Samson Reel Cover reorder from H&amp;D</li>
          <li>EPB Chattanooga (Sutherland) bucket order</li>
        </ul>
      </div>
    </div>

    <!-- CALLOUT -->
    <div class="callout">
      <h3>The Single Rule Driving This Meeting</h3>
      <p>Shipments that are not invoiced are not revenue. Every uninvoiced day is risk. Caroline owns the pipeline from <b>ship-confirmed</b> → <b>QB invoice sent</b> → <b>payment received</b>, with Aaron reviewing anything customer-facing before it leaves. The forecast above only holds if that loop closes weekly.</p>
    </div>

    <!-- AGENDA -->
    <h2 class="nu-section-title"><span class="first">Meeting</span> <span class="rest">Agenda (45 Minutes)</span></h2>
    <ol class="agenda-list">
      <li><span class="tm">0:00–0:05</span><b>Open &amp; frame the session</b>Aaron confirms the goal: walk Caroline through the numbers so she owns the AR close-out this week and the Q2 invoicing rhythm going forward.</li>
      <li><span class="tm">0:05–0:15</span><b>Walk the open-invoice table</b>Review the five uninvoiced line items above. Confirm who drafts, who reviews, who sends. Assign a specific completion date to each row.</li>
      <li><span class="tm">0:15–0:25</span><b>Walk the 90-day forecast</b>Explain the Base column as the plan-of-record. Discuss which assumptions Caroline can verify (reorder cadence, PO confirmations) and which stay with Aaron (equipment closes).</li>
      <li><span class="tm">0:25–0:35</span><b>Admin workload &amp; cadence</b>Confirm Monday 7:00 AM AR aging report, daily silent-draft triage, and weekly shipment reconciliation against Shipping Agent V5 output.</li>
      <li><span class="tm">0:35–0:42</span><b>Open items &amp; risks</b>Legal/compliance carryover, Folk CRM 14-day trial decision, Samson CC-rule adherence (Donna Poll + Sarah Daniels on every thread), Boss Products CC-rule (Troy Gongwer + Thayne Grove).</li>
      <li><span class="tm">0:42–0:45</span><b>Commitments &amp; close</b>Recap three commitments from Caroline, one from Aaron. Put them in the Master Tracker before leaving the room.</li>
    </ol>

    <!-- PREP CHECKLIST -->
    <h2 class="nu-section-title"><span class="first">Aaron's</span> <span class="rest">Pre-Meeting Checklist</span></h2>
    <div class="nu-card">
      <ul class="checklist">
        <li>Pull latest Shipping Agent V5 canonical totals for Chain Electric and Matthews Contracting</li>
        <li>Verify Coy Crosby PO number with Dominion Energy purchasing</li>
        <li>Export CB silent-draft list from QuickBooks (QB 150 queue, $3,685.15)</li>
        <li>Confirm Palace <i>deals</i> wing is current — 8 records expected</li>
        <li>Apply Ben's Shipping Formula to any quote without it: ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)</li>
        <li>Print or screen-share this brief for the meeting</li>
        <li>Clear 45 uninterrupted minutes on the calendar — no phone</li>
      </ul>
    </div>

    <!-- CB TAKEAWAYS -->
    <h2 class="nu-section-title"><span class="first">What</span> <span class="rest">Caroline Leaves With</span></h2>
    <div class="two-col">
      <div class="nu-card">
        <h3>Three Commitments (CB)</h3>
        <ul>
          <li>All March 20 shipments invoiced in QuickBooks by Friday, April 30</li>
          <li>Monday AR aging report delivered to Aaron by 7:00 AM CT every week</li>
          <li>Silent-draft queue reduced to zero pending drafts by May 9</li>
        </ul>
      </div>
      <div class="nu-card">
        <h3>One Commitment (Aaron)</h3>
        <ul>
          <li>Same-day turnaround on any invoice CB routes for review before 3:00 PM CT</li>
          <li>Decision on Folk CRM (trial vs. skip) by end of the week so CB can plan contact workflow</li>
        </ul>
      </div>
    </div>

    <div class="callout" style="margin-top:28px;">
      <h3>Next Review</h3>
      <p>Friday, May 1, 2026 · 15-minute standing check-in. Agenda: did the three CB commitments land? If yes, the forecast's Base column is credible. If not, we re-scope before the Kugler / Terex conversation reopens.</p>
    </div>

  </div>
</main>

<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> |
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
    130 Inverness Plaza #210, Birmingham, AL 35242
  </div>
</footer>

</body>
</html>