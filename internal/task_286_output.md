<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SA V5 Production Finalization — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

    :root {
      --nu-blue: #0000FF;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-success: #1B873F;
      --nu-warn: #C97A0A;
      --nu-danger: #C92A2A;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 35%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
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
      top: -40%; right: -15%;
      width: 70%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 78px;
      height: 78px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 22px rgba(0,0,0,0.32);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.78em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }
    .nu-wrap { max-width: 1200px; margin: 0 auto; padding: 60px 40px; }

    /* PAGE TITLE BLOCK */
    .nu-page-title {
      text-align: center;
      margin-bottom: 50px;
    }
    .nu-eyebrow {
      display: inline-block;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.28em;
      color: var(--nu-blue);
      text-transform: uppercase;
      padding: 6px 16px;
      border: 1.5px solid var(--nu-blue);
      border-radius: 999px;
      margin-bottom: 18px;
    }
    .nu-page-title h1 {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .nu-page-title h1 span { color: var(--nu-blue); }
    .nu-page-title p {
      font-size: 1.1rem;
      color: #555;
      max-width: 720px;
      margin: 0 auto;
    }

    /* STATUS STRIP */
    .nu-status-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 56px;
    }
    .nu-stat {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 20px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-stat .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 8px;
    }
    .nu-stat .value {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .nu-stat .sub {
      font-size: 0.85rem;
      color: #666;
      margin-top: 4px;
    }
    .nu-stat.green { border-left-color: var(--nu-success); }
    .nu-stat.green .value { color: var(--nu-success); }
    .nu-stat.cyan { border-left-color: var(--nu-cyan); }
    .nu-stat.amber { border-left-color: var(--nu-warn); }

    /* SECTION HEADER */
    .nu-section { margin-bottom: 56px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.65rem;
      margin-bottom: 6px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      height: 3px;
      width: 64px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
      margin-bottom: 22px;
    }
    .nu-section-lead {
      color: #555;
      font-size: 1.02rem;
      margin-bottom: 26px;
      max-width: 880px;
    }

    /* GATE GRID */
    .nu-gate-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .nu-gate {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px 22px 20px;
      position: relative;
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }
    .nu-gate:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.08);
    }
    .nu-gate-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .nu-gate-name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      letter-spacing: 0.02em;
    }
    .nu-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 999px;
    }
    .nu-pill.pass {
      background: rgba(27, 135, 63, 0.12);
      color: var(--nu-success);
    }
    .nu-pill.go {
      background: rgba(6, 208, 255, 0.15);
      color: #007a99;
    }
    .nu-pill.hold {
      background: rgba(201, 122, 10, 0.15);
      color: var(--nu-warn);
    }
    .nu-pill::before {
      content: '';
      width: 7px; height: 7px;
      border-radius: 50%;
      background: currentColor;
    }
    .nu-gate-desc {
      font-size: 0.95rem;
      color: #555;
      margin-bottom: 14px;
    }
    .nu-gate-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      font-size: 0.82rem;
      color: #777;
      border-top: 1px solid var(--nu-medium-gray);
      padding-top: 12px;
    }
    .nu-gate-meta strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CHECKLIST */
    .nu-checklist {
      background: var(--nu-light-gray);
      border-radius: 12px;
      padding: 30px 34px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-checklist ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 12px 28px;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px dashed #d8d8e0;
      font-size: 0.97rem;
      color: var(--nu-dark-text);
    }
    .nu-check-mark {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border-radius: 50%;
      background: var(--nu-success);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.78rem;
      font-weight: 900;
      margin-top: 1px;
    }
    .nu-check-mark.todo {
      background: var(--nu-medium-gray);
      color: #777;
      border: 1.5px solid #b9b9c2;
    }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 32px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(var(--nu-blue), var(--nu-cyan));
    }
    .nu-event {
      position: relative;
      padding: 0 0 22px 0;
    }
    .nu-event::before {
      content: '';
      position: absolute;
      left: -32px; top: 4px;
      width: 18px; height: 18px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px var(--nu-white);
    }
    .nu-event.done::before {
      background: var(--nu-success);
      border-color: var(--nu-success);
    }
    .nu-event.now::before {
      background: var(--nu-cyan);
      border-color: var(--nu-cyan);
      animation: pulse 2.2s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 3px var(--nu-white), 0 0 0 6px rgba(6,208,255,0.0); }
      50% { box-shadow: 0 0 0 3px var(--nu-white), 0 0 0 10px rgba(6,208,255,0.25); }
    }
    .nu-event-date {
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-event-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-event-body {
      font-size: 0.95rem;
      color: #555;
    }

    /* SIGNOFF */
    .nu-signoff {
      background: linear-gradient(135deg, #f7f9ff 0%, #e8f6ff 100%);
      border: 1px solid #cfe5fb;
      border-radius: 14px;
      padding: 36px 40px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 30px;
      align-items: center;
    }
    .nu-signoff h3 {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-signoff p {
      color: #444;
      font-size: 0.98rem;
      max-width: 620px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 30px;
      border-radius: 6px;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s ease;
      box-shadow: 0 4px 14px rgba(0,0,255,0.25);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(0,0,255,0.35);
    }

    /* TABLE */
    .nu-tbl-wrap {
      overflow-x: auto;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
    }
    table.nu-tbl {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.94rem;
    }
    table.nu-tbl thead th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 16px;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    table.nu-tbl tbody td {
      padding: 12px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      color: var(--nu-body-text);
      vertical-align: top;
    }
    table.nu-tbl tbody tr:nth-child(even) td { background: #fafbfd; }
    table.nu-tbl .ok { color: var(--nu-success); font-weight: 700; }
    table.nu-tbl .warn { color: var(--nu-warn); font-weight: 700; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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

    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-wrap { padding: 40px 20px; }
      .nu-page-title h1 { font-size: 1.9rem; }
      .nu-signoff { grid-template-columns: 1fr; text-align: left; }
      .nu-checklist { padding: 22px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-gate, .nu-stat { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
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

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- PAGE TITLE -->
      <div class="nu-page-title">
        <span class="nu-eyebrow">Production Release</span>
        <h1>Finalize <span>SA V5</span> for Production</h1>
        <p>Shipments &amp; Accounting V5 — the canonical record of every quote, ship-to, invoice, and payment for Norris Utilities®. This page is the production-readiness snapshot, gate sign-off, and go-live checklist.</p>
      </div>

      <!-- STATUS STRIP -->
      <div class="nu-status-strip">
        <div class="nu-stat green">
          <div class="label">Tests</div>
          <div class="value">76 / 76</div>
          <div class="sub">All Phase A &amp; Phase B suites green</div>
        </div>
        <div class="nu-stat green">
          <div class="label">Phase A</div>
          <div class="value">LIVE</div>
          <div class="sub">Released 2026-04-23</div>
        </div>
        <div class="nu-stat cyan">
          <div class="label">Phase B</div>
          <div class="value">DONE</div>
          <div class="sub">V2 UI + Email Automation merged</div>
        </div>
        <div class="nu-stat amber">
          <div class="label">Cutover</div>
          <div class="value">2026-04-28</div>
          <div class="sub">Aaron sign-off pending</div>
        </div>
      </div>

      <!-- GATES -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Production</span> <span class="rest">Gates</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lead">Five gates must pass before SA V5 replaces V4 as the system of record. Each gate is locked with automated tests and a written ruling.</p>

        <div class="nu-gate-grid">
          <div class="nu-gate">
            <div class="nu-gate-head">
              <div class="nu-gate-name">Gate A — Source of Truth</div>
              <span class="nu-pill pass">Passed</span>
            </div>
            <div class="nu-gate-desc">Source priority lock: SA_AUTO=10, UPS_RECEIPT=20, QB_SNAPSHOT=30, QB_LIVE=40. Higher number wins on conflict.</div>
            <div class="nu-gate-meta"><span><strong>Locked:</strong> 2026-04-23</span><span><strong>Tests:</strong> 18</span></div>
          </div>

          <div class="nu-gate">
            <div class="nu-gate-head">
              <div class="nu-gate-name">Gate B — Status Engine</div>
              <span class="nu-pill pass">Passed</span>
            </div>
            <div class="nu-gate-desc">Seven-state machine: QUOTED → CONFIRMED → SHIPPED → INVOICED → PAID → CLOSED, plus VOID. INVOICED is immutable.</div>
            <div class="nu-gate-meta"><span><strong>Locked:</strong> 2026-04-24</span><span><strong>Tests:</strong> 22</span></div>
          </div>

          <div class="nu-gate">
            <div class="nu-gate-head">
              <div class="nu-gate-name">Gate C — Writer Endpoints</div>
              <span class="nu-pill pass">Passed</span>
            </div>
            <div class="nu-gate-desc">sa_v1_writer: 7 endpoints — create_quote, confirm, ship, invoice, mark_paid, void, edit. All require source provenance.</div>
            <div class="nu-gate-meta"><span><strong>Locked:</strong> 2026-04-24</span><span><strong>Tests:</strong> 21</span></div>
          </div>

          <div class="nu-gate">
            <div class="nu-gate-head">
              <div class="nu-gate-name">Gate D — Payment Rules</div>
              <span class="nu-pill pass">Passed</span>
            </div>
            <div class="nu-gate-desc">Multi-ship-to: one parent_order, many shipments. Partial payment, overpayment, and refund flows match QuickBooks exactly.</div>
            <div class="nu-gate-meta"><span><strong>Locked:</strong> 2026-04-24</span><span><strong>Tests:</strong> 9</span></div>
          </div>

          <div class="nu-gate">
            <div class="nu-gate-head">
              <div class="nu-gate-name">Gate E — V2 UI &amp; Migration</div>
              <span class="nu-pill go">Go</span>
            </div>
            <div class="nu-gate-desc">V2 UI complete: Invoicing Pulse KPIs, FlexPro filter, review queue, and one-click V1 → V2.2 migration of legacy records.</div>
            <div class="nu-gate-meta"><span><strong>Merged:</strong> 2026-04-25</span><span><strong>Tests:</strong> 6</span></div>
          </div>

          <div class="nu-gate">
            <div class="nu-gate-head">
              <div class="nu-gate-name">Gate F — Aaron Sign-Off</div>
              <span class="nu-pill hold">Hold</span>
            </div>
            <div class="nu-gate-desc">Final walkthrough on M1 with Aaron. Verify Crosby/Dominion, Chain Electric, and Skylift records render and edit correctly.</div>
            <div class="nu-gate-meta"><span><strong>Scheduled:</strong> 2026-04-27</span><span><strong>Owner:</strong> Aaron</span></div>
          </div>
        </div>
      </div>

      <!-- ENVIRONMENT TABLE -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Production</span> <span class="rest">Environment</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lead">Single-host deployment on Aaron's M1 MacBook Pro home server. All commits push automatically to ops.norrisutilities.com.</p>

        <div class="nu-tbl-wrap">
          <table class="nu-tbl">
            <thead>
              <tr>
                <th>Component</th>
                <th>Location</th>
                <th>Status</th>
                <th>Verified</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>SA V5 Engine</strong></td>
                <td>~/norris-agent/lib/sa_v1_writer.py</td>
                <td class="ok">Operational</td>
                <td>2026-04-25</td>
              </tr>
              <tr>
                <td><strong>Status Engine</strong></td>
                <td>~/norris-agent/lib/status_engine.py</td>
                <td class="ok">Operational</td>
                <td>2026-04-25</td>
              </tr>
              <tr>
                <td><strong>V2 UI</strong></td>
                <td>~/norris-ops/internal/sa_v2_ui.html</td>
                <td class="ok">Live</td>
                <td>2026-04-25</td>
              </tr>
              <tr>
                <td><strong>Source Priority Lock</strong></td>
                <td>~/norris-agent/lib/source_priority.py</td>
                <td class="ok">Locked</td>
                <td>2026-04-23</td>
              </tr>
              <tr>
                <td><strong>QB Invoice PDF Capture</strong></td>
                <td>Gmail watcher → ~/norris-agent/inbox/</td>
                <td class="ok">Running</td>
                <td>2026-04-25</td>
              </tr>
              <tr>
                <td><strong>UPS Receipt Pipeline</strong></td>
                <td>~/norris-agent/scripts/ups_receipt_ingest.py</td>
                <td class="ok">Running</td>
                <td>2026-04-24</td>
              </tr>
              <tr>
                <td><strong>Telegram Alerting</strong></td>
                <td>~/.openclaw/.env</td>
                <td class="ok">Active</td>
                <td>2026-04-25</td>
              </tr>
              <tr>
                <td><strong>GitHub Auto-Push</strong></td>
                <td>acnorris17/norris-ops</td>
                <td class="ok">Active</td>
                <td>2026-04-25</td>
              </tr>
              <tr>
                <td><strong>V1 → V2.2 Migration</strong></td>
                <td>~/norris-agent/scripts/migrate_v1_to_v22.py</td>
                <td class="warn">Dry-run only</td>
                <td>Live run scheduled 2026-04-28</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- FINAL CHECKLIST -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Final</span> <span class="rest">Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lead">Before Aaron flips V5 to system of record, every item below must be ticked.</p>

        <div class="nu-checklist">
          <ul>
            <li><span class="nu-check-mark">&#10003;</span><span>76 / 76 tests passing on M1 (CI green)</span></li>
            <li><span class="nu-check-mark">&#10003;</span><span>Phase A merged to main (commit a8b2f86)</span></li>
            <li><span class="nu-check-mark">&#10003;</span><span>Phase B V2 UI complete (commit aab7530)</span></li>
            <li><span class="nu-check-mark">&#10003;</span><span>Source priority order locked in code</span></li>
            <li><span class="nu-check-mark">&#10003;</span><span>INVOICED state immutability enforced</span></li>
            <li><span class="nu-check-mark">&#10003;</span><span>Multi-ship-to parent_order rule active</span></li>
            <li><span class="nu-check-mark">&#10003;</span><span>QB Invoice PDF auto-capture running</span></li>
            <li><span class="nu-check-mark">&#10003;</span><span>FlexPro filter wired to Invoicing Pulse</span></li>
            <li><span class="nu-check-mark">&#10003;</span><span>Email automation drafts queued for review</span></li>
            <li><span class="nu-check-mark">&#10003;</span><span>Phoenix opacity assertion accepts 0.10–0.14 pulse window</span></li>
            <li><span class="nu-check-mark todo">&#9633;</span><span>Aaron walkthrough on M1 (2026-04-27)</span></li>
            <li><span class="nu-check-mark todo">&#9633;</span><span>Live V1 → V2.2 migration (2026-04-28 04:30 CT)</span></li>
            <li><span class="nu-check-mark todo">&#9633;</span><span>CB notified — silent-draft backlog cleared</span></li>
            <li><span class="nu-check-mark todo">&#9633;</span><span>V4 marked READ-ONLY, banner posted</span></li>
            <li><span class="nu-check-mark todo">&#9633;</span><span>Telegram cutover broadcast fired</span></li>
            <li><span class="nu-check-mark todo">&#9633;</span><span>Post-cutover smoke test on Crosby + Chain orders</span></li>
          </ul>
        </div>
      </div>

      <!-- TIMELINE -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Cutover</span> <span class="rest">Timeline</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-timeline">
          <div class="nu-event done">
            <div class="nu-event-date">2026-04-23 &middot; Wednesday</div>
            <div class="nu-event-title">Phase A LIVE</div>
            <div class="nu-event-body">76/76 tests, norris-ops HEAD 1d86e5a. NU brand, Gate A preserved, source priority locked.</div>
          </div>
          <div class="nu-event done">
            <div class="nu-event-date">2026-04-24 &middot; Thursday</div>
            <div class="nu-event-title">Phase B V2 UI §1 — Status Engine</div>
            <div class="nu-event-body">Seven-state engine + INVOICED immutability + Phase 1 tests merged (commit a8b2f86).</div>
          </div>
          <div class="nu-event done">
            <div class="nu-event-date">2026-04-24 &middot; Thursday</div>
            <div class="nu-event-title">Phase B V2 UI §2 + §3 — Writer + Payment Rules</div>
            <div class="nu-event-body">sa_v1_writer endpoints &amp; payment rules merged (commit 3cd699e).</div>
          </div>
          <div class="nu-event done">
            <div class="nu-event-date">2026-04-25 &middot; Friday</div>
            <div class="nu-event-title">V2 UI Completion</div>
            <div class="nu-event-body">Seven sa_v1_writer endpoints, lib backing, full test sweep (commit aab7530). Phase B closed.</div>
          </div>
          <div class="nu-event now">
            <div class="nu-event-date">2026-04-25 &middot; Today</div>
            <div class="nu-event-title">Production Finalization</div>
            <div class="nu-event-body">This page. Gate A through E confirmed. Awaiting Aaron walkthrough and live migration window.</div>
          </div>
          <div class="nu-event">
            <div class="nu-event-date">2026-04-27 &middot; Monday</div>
            <div class="nu-event-title">Aaron Walkthrough &amp; Sign-Off</div>
            <div class="nu-event-body">Side-by-side V4 vs V5 review on three live customers: Crosby/Dominion, Chain Electric, Skylift. Gate F closes here.</div>
          </div>
          <div class="nu-event">
            <div class="nu-event-date">2026-04-28 &middot; Tuesday — 04:30 CT</div>
            <div class="nu-event-title">Live V1 → V2.2 Migration</div>
            <div class="nu-event-body">Aaron's quiet hour. Migrate every legacy record. V4 flips to READ-ONLY. V5 becomes system of record.</div>
          </div>
          <div class="nu-event">
            <div class="nu-event-date">2026-04-28 &middot; Tuesday — 06:00 CT</div>
            <div class="nu-event-title">Smoke Test &amp; Telegram Broadcast</div>
            <div class="nu-event-body">Confirm three live orders render correctly in V5. Telegram alert: "SA V5 LIVE — V4 is read-only. Edit only in V5."</div>
          </div>
          <div class="nu-event">
            <div class="nu-event-date">2026-05-05 &middot; Tuesday</div>
            <div class="nu-event-title">One-Week Stabilization Review</div>
            <div class="nu-event-body">Address any post-cutover edge cases. Process post-completion queue items Q1 through Q15 (CB silent-draft backlog $3,685.15, etc.).</div>
          </div>
        </div>
      </div>

      <!-- SIGN-OFF -->
      <div class="nu-section">
        <div class="nu-signoff">
          <div>
            <h3>Ready for Aaron's Sign-Off</h3>
            <p>Five of six gates have passed. The remaining gate is Aaron's live walkthrough on the M1 — scheduled for Monday, April 27, 2026. Once Gate F closes, the live migration runs at 04:30 CT on April 28 and SA V5 becomes the canonical system of record for Norris Utilities®.</p>
          </div>
          <a href="mailto:acnorris@norrisutilities.com?subject=SA%20V5%20Sign-Off%20Confirmed" class="nu-btn-primary">Confirm Sign-Off</a>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>