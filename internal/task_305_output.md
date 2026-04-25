<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>V5 Production Launch Plan — Norris Utilities®</title>
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
  --nu-success: #2D7D46;
  --nu-warn: #C8782B;
  --nu-danger: #B83227;
  --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-italic: 'Playfair Display', Georgia, serif;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { font-size: 16px; scroll-behavior: smooth; }
body {
  font-family: var(--font-primary);
  color: var(--nu-body-text);
  background: var(--nu-white);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

/* HEADER */
.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 70px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 90px);
  z-index: 1;
  opacity: 0.7;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -40%; right: -20%;
  width: 75%; height: 200%;
  background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
  z-index: 1;
}
.nu-header > * { position: relative; z-index: 2; }
.nu-watermark {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  max-width: 600px;
  opacity: 0.07;
  z-index: 1;
  pointer-events: none;
}
.nu-logo-text {
  font-weight: 900;
  font-size: 3.4rem;
  color: var(--nu-white);
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-shadow: 0 2px 24px rgba(0,0,0,0.35);
}
.nu-logo-subtitle {
  font-weight: 900;
  font-size: 1.4rem;
  color: var(--nu-white);
  letter-spacing: 0.8em;
  margin-bottom: 22px;
}
.nu-tagline {
  font-family: var(--font-italic);
  font-style: italic;
  font-weight: 400;
  font-size: 1.4rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
}
.nu-doc-title {
  margin-top: 28px;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--nu-white);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.92;
  border-top: 1px solid rgba(255,255,255,0.35);
  border-bottom: 1px solid rgba(255,255,255,0.35);
  padding: 10px 0;
  display: inline-block;
  padding-left: 24px;
  padding-right: 24px;
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
}
.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 60px 40px 40px;
}

/* SECTION HEADERS */
.nu-section-title {
  font-weight: 900;
  font-size: 1.55rem;
  color: var(--nu-dark-text);
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 3px solid var(--nu-medium-gray);
}
.nu-section-title .first {
  color: #0033cc;
}
.section { margin-bottom: 56px; }

/* MISSION CARD */
.mission-card {
  background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
  border-left: 6px solid var(--nu-blue);
  padding: 28px 32px;
  margin-bottom: 48px;
  border-radius: 4px;
  box-shadow: 0 2px 14px rgba(0,0,0,0.06);
}
.mission-card .label {
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.25em;
  color: var(--nu-blue);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.mission-card h2 {
  font-weight: 900;
  font-size: 1.7rem;
  color: var(--nu-dark-text);
  line-height: 1.3;
  margin-bottom: 10px;
}
.mission-card p {
  font-size: 1rem;
  color: var(--nu-body-text);
}

/* STATUS GRID */
.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  margin-bottom: 12px;
}
.status-tile {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 6px;
  padding: 22px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  transition: transform 0.18s ease;
}
.status-tile:hover { transform: translateY(-2px); }
.status-tile .num {
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-blue);
  line-height: 1;
  margin-bottom: 6px;
}
.status-tile .lbl {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--nu-body-text);
}
.status-tile.success .num { color: var(--nu-success); }
.status-tile.warn .num { color: var(--nu-warn); }
.status-tile.cyan .num { color: #0066ee; }

/* PHASES */
.phase {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 6px;
  margin-bottom: 22px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.phase-head {
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}
.phase-head .pname {
  font-weight: 900;
  font-size: 1.05rem;
  letter-spacing: 0.04em;
}
.phase-head .pname .num {
  color: var(--nu-cyan);
  margin-right: 10px;
}
.pill {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.pill.done { background: var(--nu-success); color: var(--nu-white); }
.pill.active { background: var(--nu-cyan); color: var(--nu-navy); }
.pill.next { background: rgba(255,255,255,0.18); color: var(--nu-white); border: 1px solid rgba(255,255,255,0.4); }
.phase-body { padding: 22px 28px; }
.phase-body ul { list-style: none; padding: 0; }
.phase-body li {
  position: relative;
  padding-left: 28px;
  margin-bottom: 10px;
  font-size: 0.96rem;
}
.phase-body li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  font-weight: 900;
  color: var(--nu-success);
  font-size: 1.05rem;
}
.phase-body li.todo::before {
  content: '○';
  color: var(--nu-blue);
}
.phase-body li.risk::before {
  content: '!';
  color: var(--nu-warn);
  font-weight: 900;
  background: rgba(200,120,43,0.12);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  text-align: center;
  line-height: 18px;
  font-size: 0.78rem;
  top: 3px;
}

/* GO/NO-GO */
.gono-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.gono-table thead {
  background: linear-gradient(135deg, #0a0e5c, #0033cc);
  color: var(--nu-white);
}
.gono-table th {
  padding: 14px 18px;
  text-align: left;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.gono-table td {
  padding: 14px 18px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.94rem;
  vertical-align: top;
}
.gono-table tr:last-child td { border-bottom: none; }
.gono-table tr:nth-child(even) td { background: var(--nu-light-gray); }
.check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-weight: 900;
  font-size: 0.85rem;
}
.check.pass { background: var(--nu-success); color: var(--nu-white); }
.check.pending { background: #E2B33C; color: var(--nu-navy); }
.check.fail { background: var(--nu-danger); color: var(--nu-white); }

/* TIMELINE */
.timeline {
  position: relative;
  padding-left: 32px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 8px;
  bottom: 8px;
  width: 3px;
  background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
  border-radius: 2px;
}
.tl-item {
  position: relative;
  padding-bottom: 24px;
}
.tl-item::before {
  content: '';
  position: absolute;
  left: -32px;
  top: 6px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: var(--nu-white);
  border: 4px solid var(--nu-blue);
  box-shadow: 0 0 0 3px rgba(0,0,255,0.12);
}
.tl-item.now::before { border-color: var(--nu-cyan); background: var(--nu-cyan); }
.tl-item .when {
  font-weight: 900;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 4px;
}
.tl-item .what {
  font-weight: 700;
  font-size: 1rem;
  color: var(--nu-dark-text);
  margin-bottom: 4px;
}
.tl-item .desc {
  font-size: 0.92rem;
  color: var(--nu-body-text);
}

/* ACTIONS */
.action-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}
.action-card {
  background: var(--nu-white);
  border-top: 4px solid var(--nu-blue);
  border-radius: 4px;
  padding: 22px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.action-card h4 {
  font-weight: 900;
  font-size: 1.02rem;
  color: var(--nu-dark-text);
  margin-bottom: 8px;
}
.action-card .owner {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--nu-blue);
  text-transform: uppercase;
  margin-bottom: 10px;
}
.action-card p {
  font-size: 0.93rem;
  color: var(--nu-body-text);
}

/* SIGN-OFF */
.signoff {
  background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
  border: 2px solid var(--nu-blue);
  border-radius: 6px;
  padding: 32px;
  margin-top: 40px;
}
.signoff h3 {
  font-weight: 900;
  font-size: 1.3rem;
  color: var(--nu-blue);
  margin-bottom: 16px;
}
.sig-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 18px;
}
.sig-block {
  border-bottom: 2px solid var(--nu-dark-text);
  padding-bottom: 4px;
  margin-bottom: 6px;
  height: 48px;
}
.sig-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--nu-body-text);
  text-transform: uppercase;
}

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 44px 40px;
  text-align: center;
  margin-top: 40px;
}
.nu-footer-tagline {
  font-family: var(--font-italic);
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
  letter-spacing: 0.03em;
}
.nu-footer-contact {
  font-size: 0.95rem;
  line-height: 1.85;
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
}
.nu-footer-contact a:hover { text-decoration: underline; }
.doc-meta {
  margin-top: 18px;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nu-header { padding: 50px 20px 70px; min-height: 240px; }
  .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-doc-title { font-size: 0.8rem; letter-spacing: 0.18em; padding-left: 14px; padding-right: 14px; }
  .container { padding: 40px 20px 20px; }
  .nu-section-title { font-size: 1.25rem; }
  .mission-card { padding: 22px; }
  .mission-card h2 { font-size: 1.35rem; }
  .phase-head { padding: 14px 18px; }
  .phase-body { padding: 18px 20px; }
  .gono-table th, .gono-table td { padding: 10px 12px; font-size: 0.85rem; }
}

@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .phase, .status-tile, .gono-table, .action-card { box-shadow: none; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
}
</style>
</head>
<body>

<header class="nu-header">
  <svg class="nu-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#FFFFFF"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#FFFFFF"/>
  </svg>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
  <div class="nu-doc-title">V5 Production Launch Plan</div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="container">

    <div class="mission-card">
      <div class="label">reMarkable Action — Owner: Aaron C. Norris</div>
      <h2>Take V5 to production as the final, locked version of the Sales Automation engine.</h2>
      <p>V5 has cleared the post-completion queue (Q1–Q15), the 23 V5 Order Rules are locked, and Phase B V2 UI is merged. This document defines what "production" means, what must be true before we flip the switch, and the cutover sequence — so V5 ships as the version we run the business on, not the next checkpoint on the way to V6.</p>
    </div>

    <div class="section">
      <h2 class="nu-section-title"><span class="first">Production</span> Readiness Snapshot</h2>
      <div class="status-grid">
        <div class="status-tile success">
          <div class="num">23/23</div>
          <div class="lbl">V5 Order Rules Locked</div>
        </div>
        <div class="status-tile success">
          <div class="num">15/15</div>
          <div class="lbl">Post-Completion Queue Cleared</div>
        </div>
        <div class="status-tile cyan">
          <div class="num">7/7</div>
          <div class="lbl">sa_v1_writer Endpoints</div>
        </div>
        <div class="status-tile warn">
          <div class="num">3</div>
          <div class="lbl">Cutover Items Remaining</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="nu-section-title"><span class="first">Phased</span> Path to Final Production</h2>

      <div class="phase">
        <div class="phase-head">
          <div class="pname"><span class="num">Phase 1.</span> Foundation Lock</div>
          <span class="pill done">Complete</span>
        </div>
        <div class="phase-body">
          <ul>
            <li>status_engine 7-state model with INVOICED immutability — merged.</li>
            <li>Phase B §1.5 phoenix opacity assertion accepts pulse window [0.10, 0.14] — merged.</li>
            <li>23 V5 Order Rules ratified during Chain Electric reconciliation (Rulings 1–23).</li>
            <li>V1 → V2.2 migration script run; legacy data reconciled against new state machine.</li>
          </ul>
        </div>
      </div>

      <div class="phase">
        <div class="phase-head">
          <div class="pname"><span class="num">Phase 2.</span> V2 UI &amp; Writer API</div>
          <span class="pill done">Complete</span>
        </div>
        <div class="phase-body">
          <ul>
            <li>sa_v1_writer §1, §2, §3 — 7 endpoints shipped with library backing and full test suite.</li>
            <li>Email automation, FlexPro Armor filter, and review queue live in V2.2.</li>
            <li>Payment rules engine wired through V2 UI (no double-pay, no out-of-order INVOICED writes).</li>
          </ul>
        </div>
      </div>

      <div class="phase">
        <div class="phase-head">
          <div class="pname"><span class="num">Phase 3.</span> Production Cutover</div>
          <span class="pill active">In Progress</span>
        </div>
        <div class="phase-body">
          <ul>
            <li class="todo">Tag <strong>v5.0.0-final</strong> on the green main, with release notes referencing every locked ruling.</li>
            <li class="todo">Promote V5 to the default code path — remove "V5 (beta)" labels from the Ops Portal and rename routes.</li>
            <li class="todo">Disable V4 fallbacks; preserve read-only V4 archive for audit only.</li>
            <li class="risk">Hold a 24-hour soak window after cutover before tagging final — silent draft regressions surface inside that window.</li>
          </ul>
        </div>
      </div>

      <div class="phase">
        <div class="phase-head">
          <div class="pname"><span class="num">Phase 4.</span> Final Lock &amp; Stewardship</div>
          <span class="pill next">Next</span>
        </div>
        <div class="phase-body">
          <ul>
            <li class="todo">Freeze V5 ruleset — any future change is V6, not "V5 patch."</li>
            <li class="todo">Publish the V5 Operator Runbook to <strong>ops.norrisutilities.com/internal/</strong> for Caroline Butler (Tier 1).</li>
            <li class="todo">Schedule weekly KPI pulse against V5 invoicing tiles (Today / Week / Month / Quarter / YTD).</li>
            <li class="todo">Commission V6 backlog file — V6 begins at the first deviation request, not before.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="nu-section-title"><span class="first">Go</span> / No-Go Checklist</h2>
      <table class="gono-table">
        <thead>
          <tr>
            <th style="width: 60px;">Status</th>
            <th>Gate</th>
            <th>Evidence</th>
            <th style="width: 140px;">Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="check pass">✓</span></td>
            <td>All 23 V5 Order Rules ratified and frozen</td>
            <td>process-rules/v5-order-rules-2026-04-18</td>
            <td>Aaron</td>
          </tr>
          <tr>
            <td><span class="check pass">✓</span></td>
            <td>Phase B V2.2 merged with Phase 1 tests green</td>
            <td>Commit aab7530 on main</td>
            <td>Aaron</td>
          </tr>
          <tr>
            <td><span class="check pass">✓</span></td>
            <td>Post-completion queue Q1–Q15 cleared</td>
            <td>post-completion-queue-q1-q15</td>
            <td>Aaron</td>
          </tr>
          <tr>
            <td><span class="check pending">!</span></td>
            <td>v5.0.0-final tag cut on main and pushed to GitHub</td>
            <td>Pending — see Phase 3 cutover</td>
            <td>Aaron</td>
          </tr>
          <tr>
            <td><span class="check pending">!</span></td>
            <td>V4 routes disabled; archive preserved read-only</td>
            <td>Pending — Ops Portal flag flip</td>
            <td>Aaron</td>
          </tr>
          <tr>
            <td><span class="check pending">!</span></td>
            <td>V5 Operator Runbook published for Caroline Butler</td>
            <td>Pending — ops.norrisutilities.com/internal/</td>
            <td>Aaron + CB</td>
          </tr>
          <tr>
            <td><span class="check pass">✓</span></td>
            <td>Invoicing pulse KPI spec ready (6 live tiles)</td>
            <td>palace/invoicing-pulse-kpi-spec</td>
            <td>Aaron</td>
          </tr>
          <tr>
            <td><span class="check pass">✓</span></td>
            <td>QB invoice PDF auto-capture pipeline defined</td>
            <td>palace/qb-invoice-pdf-auto-capture (7 steps)</td>
            <td>Aaron</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2 class="nu-section-title"><span class="first">Cutover</span> Timeline</h2>
      <div class="timeline">
        <div class="tl-item">
          <div class="when">Day 0 — 4:00 AM</div>
          <div class="what">Final Pre-Flight</div>
          <div class="desc">Run full Phase 1 test suite against main. Confirm zero failures. Snapshot the database. Send Telegram all-clear.</div>
        </div>
        <div class="tl-item now">
          <div class="when">Day 0 — 5:00 AM</div>
          <div class="what">Tag v5.0.0-rc.final &amp; Promote</div>
          <div class="desc">Cut release candidate, push to GitHub (acnorris17/norris-ops), promote V5 to default route, retire V5-beta labels.</div>
        </div>
        <div class="tl-item">
          <div class="when">Day 0 — 6:00 AM</div>
          <div class="what">Disable V4 Fallbacks</div>
          <div class="desc">Set V4 routes read-only. Update Ops Portal navigation. Confirm sa_v1_writer endpoints remain reachable.</div>
        </div>
        <div class="tl-item">
          <div class="when">Day 0 + 24 Hours</div>
          <div class="what">Soak Window Review</div>
          <div class="desc">Review email automation, review queue, FlexPro Armor filter behavior, INVOICED-state writes, and silent-draft alerts. Zero regressions = proceed.</div>
        </div>
        <div class="tl-item">
          <div class="when">Day 1</div>
          <div class="what">Tag v5.0.0-final</div>
          <div class="desc">Promote rc.final → final. Lock the V5 ruleset. Open V6 backlog file. Send Telegram confirmation: "V5 in production."</div>
        </div>
        <div class="tl-item">
          <div class="when">Day 2</div>
          <div class="what">Caroline Butler Handoff</div>
          <div class="desc">Walk Caroline through the V5 Operator Runbook in person. Confirm she can clear silent drafts, mark INVOICED, and run the daily pulse.</div>
        </div>
        <div class="tl-item">
          <div class="when">Day 7</div>
          <div class="what">First Weekly Pulse</div>
          <div class="desc">First KPI review against the 6 invoicing pulse tiles. Establishes the post-V5 baseline for Norris Utilities® operations.</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="nu-section-title"><span class="first">Owner</span> Actions</h2>
      <div class="action-grid">
        <div class="action-card">
          <div class="owner">Aaron C. Norris</div>
          <h4>Cut and push v5.0.0-final tag</h4>
          <p>From ~/norris-ops, tag main, push tags to GitHub, verify ops.norrisutilities.com reflects the new build.</p>
        </div>
        <div class="action-card">
          <div class="owner">Aaron C. Norris</div>
          <h4>Retire V4 surface area</h4>
          <p>Switch V4 routes to read-only archive. Remove "V5 (beta)" labels. Confirm sa_v1_writer is the only writer path live.</p>
        </div>
        <div class="action-card">
          <div class="owner">Caroline Butler</div>
          <h4>Operator runbook walkthrough</h4>
          <p>Receive runbook from Aaron. Practice the silent-draft clear, INVOICED transition, and pulse KPI read against a sandbox order.</p>
        </div>
        <div class="action-card">
          <div class="owner">Aaron C. Norris</div>
          <h4>Open V6 backlog file</h4>
          <p>Create the file the day V5 ships. Anything that was "V5 plus one more thing" lands there — V5 stays frozen.</p>
        </div>
        <div class="action-card">
          <div class="owner">Aaron C. Norris</div>
          <h4>Telegram launch broadcast</h4>
          <p>Send the production confirmation through the standard Telegram alert channel after the 24-hour soak passes clean.</p>
        </div>
        <div class="action-card">
          <div class="owner">Aaron C. Norris</div>
          <h4>Update master tracker</h4>
          <p>Mark the V5-to-production action item complete in sources/workspace/master_tracker and archive the post-completion queue file.</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="nu-section-title"><span class="first">Risk</span> Register &amp; Rollback Plan</h2>
      <table class="gono-table">
        <thead>
          <tr>
            <th>Risk</th>
            <th>Mitigation</th>
            <th>Rollback Trigger</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Silent-draft regression — Q1 issue resurfaces post-cutover</td>
            <td>24-hour soak window with manual review queue check before final tag</td>
            <td>Any silent draft &gt; 1 hour old without alert → revert to V4 read paths</td>
          </tr>
          <tr>
            <td>INVOICED immutability bypass</td>
            <td>status_engine guard + Phase 1 invariant tests in CI</td>
            <td>Any successful write to an INVOICED record → immediate revert and patch</td>
          </tr>
          <tr>
            <td>QuickBooks PDF auto-capture lag</td>
            <td>Watcher on quickbooks@notification.intuit.com + Sent folder fallback</td>
            <td>Capture lag &gt; 24h on any invoice → manual capture and ticket the watcher</td>
          </tr>
          <tr>
            <td>Caroline Butler operating without runbook</td>
            <td>Runbook published before V4 archive flip; in-person walkthrough on Day 2</td>
            <td>Runbook gap blocks customer-facing work → halt cutover until resolved</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="signoff">
      <h3>V5 Production Sign-Off</h3>
      <p style="font-size: 0.95rem; margin-bottom: 6px;">By signing below, the named owner confirms the gates above are met and authorizes V5 as the production version of the Norris Utilities® Sales Automation engine — frozen until V6 is formally opened.</p>
      <div class="sig-row">
        <div>
          <div class="sig-block"></div>
          <div class="sig-label">Aaron C. Norris — Founder &amp; CEO</div>
        </div>
        <div>
          <div class="sig-block"></div>
          <div class="sig-label">Date</div>
        </div>
        <div>
          <div class="sig-block"></div>
          <div class="sig-label">v5.0.0-final Tag SHA</div>
        </div>
      </div>
    </div>

  </div>
</main>

<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
  <div class="doc-meta">V5 Production Launch Plan · Internal Document · 2026-04-25</div>
</footer>

</body>
</html>