<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Finalize V5 for Production — Norris Utilities®</title>
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
      --nu-success: #0a8a3a;
      --nu-warn: #C9A84C;
      --nu-danger: #b3261e;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 35%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 80px);
      z-index: 1;
      opacity: 0.75;
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

    .nu-phoenix-icon {
      width: 78px; height: 78px;
      margin: 0 auto 18px;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.72em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }

    /* WHITE CHEVRON */
    .nu-chevron {
      position: relative;
      height: 56px;
      margin-top: -56px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 56px; display: block; }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-top: 20px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 120px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }

    .nu-wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 40px 32px 60px;
      position: relative;
      z-index: 1;
    }

    /* PAGE HEADING */
    .nu-page-heading {
      text-align: center;
      margin-bottom: 32px;
    }
    .nu-page-heading h1 {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      letter-spacing: 0.01em;
      margin-bottom: 8px;
    }
    .nu-page-heading h1 span { color: var(--nu-blue); }
    .nu-page-heading p {
      font-size: 1.05rem;
      color: #555;
      max-width: 760px;
      margin: 0 auto;
    }

    /* STATUS STRIP */
    .nu-status-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin-bottom: 40px;
    }
    .nu-stat {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-stat-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-stat-sub {
      font-size: 0.82rem;
      color: #666;
      margin-top: 4px;
    }

    /* SECTION */
    .nu-section { margin-bottom: 42px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-section-title span.blue { color: var(--nu-blue); }
    .nu-section-title span.dark { color: var(--nu-dark-text); }

    /* CHEVRON BADGES */
    .nu-badge-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 12px;
      margin-bottom: 10px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .dot {
      width: 10px; height: 10px;
      background: var(--nu-cyan);
      border-radius: 50%;
      margin-right: 12px;
      flex-shrink: 0;
      box-shadow: 0 0 10px rgba(6,208,255,0.8);
    }

    /* CHECKLIST CARDS */
    .nu-grid-two {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px 24px 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-card .owner {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-card ul li {
      padding: 8px 0 8px 28px;
      position: relative;
      font-size: 0.95rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '';
      position: absolute;
      left: 2px; top: 13px;
      width: 16px; height: 16px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .nu-card ul li.done::before {
      background: var(--nu-blue);
    }
    .nu-card ul li.done::after {
      content: '';
      position: absolute;
      left: 6px; top: 15px;
      width: 8px; height: 4px;
      border-left: 2px solid var(--nu-white);
      border-bottom: 2px solid var(--nu-white);
      transform: rotate(-45deg);
    }
    .nu-card ul li.done {
      color: #7a7a7a;
      text-decoration: line-through;
      text-decoration-color: rgba(0,0,0,0.3);
    }

    /* TIMELINE TABLE */
    .nu-table-wrap {
      background: var(--nu-white);
      border-radius: 10px;
      border: 1px solid var(--nu-medium-gray);
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.94rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: #fafbfd; }
    .nu-table tbody tr:hover { background: #f0f4ff; }
    .nu-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-pill.done { background: #dff5e4; color: var(--nu-success); }
    .nu-pill.now  { background: #fff5d6; color: #9a7a18; }
    .nu-pill.next { background: #e0ebff; color: var(--nu-blue); }
    .nu-pill.hold { background: #fde3e1; color: var(--nu-danger); }

    /* GATE BOX */
    .nu-gates {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .nu-gate {
      background: linear-gradient(180deg, #ffffff 0%, #f7faff 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 10px;
      padding: 18px 20px;
      position: relative;
    }
    .nu-gate .gate-num {
      position: absolute;
      top: -12px; left: 16px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.8rem;
      padding: 4px 10px;
      border-radius: 4px;
      letter-spacing: 0.1em;
    }
    .nu-gate h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin: 8px 0 6px;
      font-size: 1.02rem;
    }
    .nu-gate p { font-size: 0.9rem; color: #444; }

    /* SIGN-OFF */
    .nu-signoff {
      background: linear-gradient(135deg, #f7faff 0%, #eef3ff 100%);
      border: 1px solid #d4ddff;
      border-radius: 10px;
      padding: 26px 28px;
      margin-top: 10px;
    }
    .nu-signoff h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.15rem;
      margin-bottom: 12px;
    }
    .nu-signoff .sig-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 14px;
    }
    .nu-signoff .sig {
      border-top: 2px solid var(--nu-dark-text);
      padding-top: 6px;
      font-size: 0.85rem;
    }
    .nu-signoff .sig strong { color: var(--nu-dark-text); }

    /* CALLOUT */
    .nu-callout {
      background: #fff9e6;
      border-left: 4px solid var(--nu-accent-gold);
      padding: 16px 20px;
      border-radius: 4px;
      margin: 18px 0;
      font-size: 0.95rem;
    }
    .nu-callout strong { color: #8a6d10; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.88);
      padding: 44px 32px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
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
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.48em; }
      .nu-tagline { font-size: 1rem; }
      .nu-page-heading h1 { font-size: 1.6rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 12px 16px; }
      .nu-wrap { padding: 30px 18px 50px; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      body { background: #fff; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-table-wrap, .nu-gate { box-shadow: none; break-inside: avoid; }
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
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,56 L1440,0 L1440,56 L0,56 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-wrap">

      <div class="nu-page-heading">
        <h1><span>Finalize V5</span> for Production</h1>
        <p>Action plan to lock V5 of the Order Processing Rules, close outstanding gates, and move Norris Utilities® from controlled rollout to full production use.</p>
      </div>

      <!-- STATUS STRIP -->
      <section class="nu-status-strip" aria-label="Release status">
        <div class="nu-stat">
          <div class="nu-stat-label">Version</div>
          <div class="nu-stat-value">V5 — D.10</div>
          <div class="nu-stat-sub">Order Processing Rules</div>
        </div>
        <div class="nu-stat">
          <div class="nu-stat-label">Status</div>
          <div class="nu-stat-value">Release Candidate</div>
          <div class="nu-stat-sub">Pending final sign-off</div>
        </div>
        <div class="nu-stat">
          <div class="nu-stat-label">Target Cutover</div>
          <div class="nu-stat-value">2026-04-25</div>
          <div class="nu-stat-sub">Friday — end of week</div>
        </div>
        <div class="nu-stat">
          <div class="nu-stat-label">Owner</div>
          <div class="nu-stat-value">Aaron C. Norris</div>
          <div class="nu-stat-sub">Final approval authority</div>
        </div>
      </section>

      <!-- SCOPE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Scope</span> <span class="dark">— What V5 Covers</span></h2>
        <div class="nu-badge-row">
          <div class="nu-badge"><span class="dot"></span>Order Processing Rules 1–23</div>
          <div class="nu-badge"><span class="dot"></span>order_monitor.py Classifier</div>
          <div class="nu-badge"><span class="dot"></span>Multi-Ship-To Parent/Child Logic</div>
          <div class="nu-badge"><span class="dot"></span>Shipping Formula (Ben's Rule)</div>
          <div class="nu-badge"><span class="dot"></span>QuickBooks Invoice Sync</div>
          <div class="nu-badge"><span class="dot"></span>Telegram Notification Channel</div>
        </div>
        <div class="nu-callout">
          <strong>Note:</strong> V5 locks Rulings 19–23 confirmed during the Chain Electric reconciliation. No further rule changes accepted into V5 — any new rule starts V5.1 or V6.
        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Checklist</span> <span class="dark">— What's Left Before Cutover</span></h2>
        <div class="nu-grid-two">

          <div class="nu-card">
            <h3>Code & Logic</h3>
            <div class="owner">Owner: Aaron / Claude Agent</div>
            <ul>
              <li class="done">Classifier hardening in order_monitor.py (SA V5 D.10)</li>
              <li class="done">Rulings 19–23 encoded in order rules file</li>
              <li class="done">Multi-ship-to parent_order → child_ship splitting</li>
              <li>End-to-end test: 3-ship-to order from inbox → invoice</li>
              <li>Regression run against last 30 days of real orders</li>
              <li>Confirm no V4-specific branches remain in live path</li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Data & Truth Sources</h3>
            <div class="owner">Owner: Aaron</div>
            <ul>
              <li class="done">Master tracker reconciled against open invoices list</li>
              <li class="done">Palace deals/customers wings exported and versioned</li>
              <li>March 20 shipments confirmed invoiced in QuickBooks</li>
              <li>Chain Electric multi-ship-to reconciliation closed</li>
              <li>Shipping_docs backup verified (pre-V5 snapshot)</li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Ops &amp; Portal</h3>
            <div class="owner">Owner: Aaron</div>
            <ul>
              <li class="done">Portal auth layer — CF Access only, JS gate retired</li>
              <li class="done">Live Roadmap write path operational</li>
              <li>Publish V5 release notes to ops.norrisutilities.com</li>
              <li>Update internal SOP links to V5 file paths</li>
              <li>Retire V4 rule file from active reference (archive only)</li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Team &amp; Communication</h3>
            <div class="owner">Owner: Aaron — CB notified</div>
            <ul>
              <li>Walk Caroline Butler through V5 changes affecting her workflow</li>
              <li>Confirm CB has access to updated order-status dashboard</li>
              <li>MK Smith briefed on any customer-facing copy changes</li>
              <li>Internal memo: "V5 is live as of [cutover date]"</li>
              <li>Telegram alert template updated for V5 status codes</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Timeline</span> <span class="dark">— Path to Production</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Milestone</th>
                <th>Owner</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026-04-18</td>
                <td>Rulings 19–23 locked during Chain Electric reconciliation</td>
                <td>Aaron</td>
                <td><span class="nu-pill done">Complete</span></td>
              </tr>
              <tr>
                <td>2026-04-20</td>
                <td>Portal auth consolidation (CF Access only) — V5 prerequisite</td>
                <td>Aaron</td>
                <td><span class="nu-pill done">Complete</span></td>
              </tr>
              <tr>
                <td>2026-04-21</td>
                <td>order_monitor.py classifier hardening committed (SA V5 D.10)</td>
                <td>Claude Agent</td>
                <td><span class="nu-pill done">Complete</span></td>
              </tr>
              <tr>
                <td>2026-04-22</td>
                <td>End-to-end test: multi-ship-to order through full pipeline</td>
                <td>Aaron</td>
                <td><span class="nu-pill now">In progress</span></td>
              </tr>
              <tr>
                <td>2026-04-23</td>
                <td>Regression run — last 30 days of real orders, expected vs. actual</td>
                <td>Claude Agent</td>
                <td><span class="nu-pill next">Queued</span></td>
              </tr>
              <tr>
                <td>2026-04-24</td>
                <td>Caroline Butler walk-through + internal SOP updates published</td>
                <td>Aaron + CB</td>
                <td><span class="nu-pill next">Queued</span></td>
              </tr>
              <tr>
                <td>2026-04-25</td>
                <td>V5 cutover — V4 archived, V5 is sole production rule set</td>
                <td>Aaron</td>
                <td><span class="nu-pill next">Queued</span></td>
              </tr>
              <tr>
                <td>2026-04-28</td>
                <td>48-hour post-cutover review — Telegram log + order audit</td>
                <td>Aaron</td>
                <td><span class="nu-pill next">Queued</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- GATES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Release Gates</span> <span class="dark">— Must Be Green Before Cutover</span></h2>
        <div class="nu-gates">
          <div class="nu-gate">
            <div class="gate-num">GATE 1</div>
            <h4>Functional</h4>
            <p>End-to-end test on a real multi-ship-to order completes with correct invoice splits and shipping calculated via Ben's Formula.</p>
          </div>
          <div class="nu-gate">
            <div class="gate-num">GATE 2</div>
            <h4>Regression</h4>
            <p>30-day replay: every order classified and routed the same way V5 would route it today, with deltas reviewed and signed off.</p>
          </div>
          <div class="nu-gate">
            <div class="gate-num">GATE 3</div>
            <h4>Data Integrity</h4>
            <p>March 20 shipments invoiced in QuickBooks, master tracker reconciled, shipping_docs pre-V5 backup archived.</p>
          </div>
          <div class="nu-gate">
            <div class="gate-num">GATE 4</div>
            <h4>People</h4>
            <p>Caroline Butler briefed, MK Smith briefed on any customer-visible change, Telegram alert templates updated.</p>
          </div>
          <div class="nu-gate">
            <div class="gate-num">GATE 5</div>
            <h4>Rollback</h4>
            <p>V4 rule file archived with timestamp. Rollback procedure documented — one-command restore if V5 misbehaves in the first 48 hours.</p>
          </div>
          <div class="nu-gate">
            <div class="gate-num">GATE 6</div>
            <h4>Aaron's Approval</h4>
            <p>Final written sign-off by Aaron C. Norris before V5 is declared production. No gate can substitute for this.</p>
          </div>
        </div>
      </section>

      <!-- RISKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Known Risks</span> <span class="dark">&amp; Mitigations</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Risk</th>
                <th>Impact</th>
                <th>Mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Edge-case orders the 30-day regression never saw</td>
                <td>Misclassified order slips to wrong workflow</td>
                <td>48-hour post-cutover review + Telegram alerts on any order V5 can't confidently classify</td>
              </tr>
              <tr>
                <td>QuickBooks sync lag on multi-ship-to parents</td>
                <td>Invoice split delayed; receivables look off</td>
                <td>Manual reconciliation check at end of cutover day; open-invoices file updated by Aaron</td>
              </tr>
              <tr>
                <td>FlexPro Armor shipping miscalc on oversize boxes</td>
                <td>Margin erosion on large orders</td>
                <td>Ben's Formula unit test included in regression suite; manual sanity check on first 3 live orders</td>
              </tr>
              <tr>
                <td>Caroline's workflow disrupted mid-week</td>
                <td>Customer-facing delays</td>
                <td>Walk-through scheduled 2026-04-24; cutover lands Friday to give weekend buffer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SIGN-OFF -->
      <section class="nu-section">
        <div class="nu-signoff">
          <h3>Production Sign-Off</h3>
          <p>V5 is not production until each gate above is green <em>and</em> this block is signed. No partial releases, no "soft launch" — V5 either is production or it isn't.</p>
          <div class="sig-row">
            <div class="sig">
              <strong>Aaron C. Norris</strong><br>
              Founder &amp; CEO — Final Approval<br>
              Date: ______________________
            </div>
            <div class="sig">
              <strong>Caroline Butler</strong><br>
              Operations — Workflow Acknowledged<br>
              Date: ______________________
            </div>
            <div class="sig">
              <strong>Claude Agent</strong><br>
              Regression Pass Reported<br>
              Date: ______________________
            </div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>