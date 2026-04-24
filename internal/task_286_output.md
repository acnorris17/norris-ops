<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Finalize V5 for Production — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-green: #0a7a3a;
      --nu-amber: #c77a0a;
      --nu-red: #a41a1a;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-inner {
      position: relative;
      z-index: 2;
      max-width: 1100px;
      margin: 0 auto;
    }
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
    .nu-eyebrow {
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-logo-text {
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
      margin-bottom: 28px;
    }
    .nu-doc-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-white);
      letter-spacing: 0.02em;
      margin-top: 10px;
      line-height: 1.2;
    }
    .nu-doc-subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: rgba(255,255,255,0.88);
      margin-top: 10px;
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
      background: var(--nu-light-gray);
    }
    .nu-content-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* STATUS BANNER */
    .status-banner {
      background: linear-gradient(135deg, #0a7a3a 0%, #0d9549 100%);
      color: var(--nu-white);
      padding: 22px 28px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 36px;
      box-shadow: 0 6px 22px rgba(10,122,58,0.25);
      flex-wrap: wrap;
    }
    .status-banner-left { display: flex; align-items: center; gap: 16px; }
    .status-dot {
      width: 14px; height: 14px;
      background: #b6ffd2;
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba(182,255,210,0.3);
      animation: pulse 2s infinite;
      flex-shrink: 0;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 4px rgba(182,255,210,0.3); }
      50% { box-shadow: 0 0 0 8px rgba(182,255,210,0.12); }
    }
    .status-title {
      font-weight: 900;
      font-size: 1.3rem;
      letter-spacing: 0.02em;
    }
    .status-sub {
      font-weight: 400;
      font-size: 0.95rem;
      opacity: 0.92;
    }
    .status-meta {
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: rgba(255,255,255,0.18);
      padding: 8px 14px;
      border-radius: 6px;
    }

    /* SECTION */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* KPI GRID */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
    .kpi-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px 20px;
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .kpi-label {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #666;
      margin-bottom: 8px;
    }
    .kpi-value {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1;
      margin-bottom: 4px;
    }
    .kpi-value.green { color: var(--nu-green); }
    .kpi-sub {
      font-size: 0.82rem;
      color: #777;
      font-weight: 400;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border-radius: 10px;
      border: 1px solid var(--nu-medium-gray);
      overflow: hidden;
    }
    .checklist-row {
      display: grid;
      grid-template-columns: 44px 1fr auto;
      gap: 16px;
      padding: 18px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: center;
    }
    .checklist-row:last-child { border-bottom: none; }
    .check-icon {
      width: 28px; height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-white);
      flex-shrink: 0;
    }
    .check-icon.done { background: var(--nu-green); }
    .check-icon.pending { background: var(--nu-amber); }
    .check-icon.blocked { background: var(--nu-red); }
    .check-body {
      line-height: 1.45;
    }
    .check-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
    }
    .check-desc {
      font-size: 0.9rem;
      color: #555;
      margin-top: 3px;
    }
    .check-tag {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 5px 10px;
      border-radius: 4px;
      white-space: nowrap;
    }
    .tag-done { background: #d7f4e3; color: var(--nu-green); }
    .tag-pending { background: #fbecd4; color: var(--nu-amber); }
    .tag-blocked { background: #f4d7d7; color: var(--nu-red); }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .info-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .info-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .info-card ul {
      list-style: none;
      padding: 0;
    }
    .info-card li {
      padding: 9px 0;
      padding-left: 22px;
      position: relative;
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .info-card li:last-child { border-bottom: none; }
    .info-card li::before {
      content: '';
      position: absolute;
      left: 0; top: 16px;
      width: 8px; height: 8px;
      background: var(--nu-cyan);
      transform: rotate(45deg);
    }
    .info-card li strong {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* SIGN-OFF */
    .sign-off {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 36px 32px;
      margin-top: 10px;
      position: relative;
      overflow: hidden;
    }
    .sign-off::before {
      content: '';
      position: absolute;
      top: -30%; right: -10%;
      width: 50%; height: 160%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.22) 0%, transparent 65%);
    }
    .sign-off-inner { position: relative; z-index: 2; }
    .sign-off h3 {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .sign-off p {
      font-size: 1rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.92);
      margin-bottom: 12px;
    }
    .sign-off-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-top: 22px;
      padding-top: 22px;
      border-top: 1px solid rgba(255,255,255,0.2);
    }
    .sign-block {
      font-size: 0.9rem;
    }
    .sign-block .label {
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
      font-weight: 700;
    }
    .sign-block .value {
      color: var(--nu-white);
      font-weight: 700;
      font-size: 1rem;
    }
    .sign-block .note {
      color: rgba(255,255,255,0.75);
      font-size: 0.85rem;
      margin-top: 4px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 46px 20px 70px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-doc-title { font-size: 1.5rem; }
      .nu-content-inner { padding: 36px 20px 54px; }
      .two-col { grid-template-columns: 1fr; }
      .checklist-row { grid-template-columns: 40px 1fr; }
      .check-tag { grid-column: 2; justify-self: start; margin-top: 4px; }
      .status-banner { flex-direction: column; align-items: flex-start; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <div class="nu-eyebrow">Release Readiness Brief</div>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-title">Finalize V5 for Production</div>
      <div class="nu-doc-subtitle">Shipments Archive V5 — Production Cutover Plan | April 24, 2026</div>
    </div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-content-inner">

      <div class="status-banner">
        <div class="status-banner-left">
          <div class="status-dot"></div>
          <div>
            <div class="status-title">V5 — Phase A Live in Production</div>
            <div class="status-sub">76 / 76 tests passing · norris-ops HEAD 1d86e5a · Phase B in remaining sections</div>
          </div>
        </div>
        <div class="status-meta">GO / NO-GO: 2026-04-25</div>
      </div>

      <!-- KPI -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Release</span> <span class="rest">Scorecard</span></h2>
        <div class="kpi-grid">
          <div class="kpi-card">
            <div class="kpi-label">Test Coverage</div>
            <div class="kpi-value green">76 / 76</div>
            <div class="kpi-sub">100% passing (unit + Playwright)</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Live Branch</div>
            <div class="kpi-value">Phase A</div>
            <div class="kpi-sub">Shipped 2026-04-23</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Open Phase B Items</div>
            <div class="kpi-value">2</div>
            <div class="kpi-sub">§1.5 pulse · §8 notes polish</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Outstanding Value</div>
            <div class="kpi-value">$5,760+</div>
            <div class="kpi-sub">Across ledger — tracked in V5</div>
          </div>
        </div>
      </section>

      <!-- CUTOVER CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Cutover</span> <span class="rest">Checklist</span></h2>
        <div class="checklist">

          <div class="checklist-row">
            <div class="check-icon done">&#10003;</div>
            <div class="check-body">
              <div class="check-title">Phase A deployed to norris-ops production</div>
              <div class="check-desc">NU brand verified, Gate A preserved, merge landed on main (HEAD 1d86e5a) on 2026-04-23.</div>
            </div>
            <div class="check-tag tag-done">Done</div>
          </div>

          <div class="checklist-row">
            <div class="check-icon done">&#10003;</div>
            <div class="check-body">
              <div class="check-title">Backend §8 — payment_rules + notes_auto + tests</div>
              <div class="check-desc">Commit fb60ba7 — auto-notes writer, payment rules engine, regression tests green.</div>
            </div>
            <div class="check-tag tag-done">Done</div>
          </div>

          <div class="checklist-row">
            <div class="check-icon done">&#10003;</div>
            <div class="check-body">
              <div class="check-title">§7 recon + fuzzy match + add_alias + morning brief</div>
              <div class="check-desc">Commits 6a7a915 and ca27f5a — canonical enforcement live, data truthed-up against ledger.</div>
            </div>
            <div class="check-tag tag-done">Done</div>
          </div>

          <div class="checklist-row">
            <div class="check-icon done">&#10003;</div>
            <div class="check-body">
              <div class="check-title">§6 Notes editor + invoice archive Playwright suite</div>
              <div class="check-desc">Commit be37590 — click/type/Esc flow + backend POST + ledger writes verified end-to-end.</div>
            </div>
            <div class="check-tag tag-done">Done</div>
          </div>

          <div class="checklist-row">
            <div class="check-icon pending">!</div>
            <div class="check-body">
              <div class="check-title">§1.5 — Phoenix pulse opacity window [0.10, 0.14]</div>
              <div class="check-desc">Assertion patched on feature branch (b1fa954). Needs merge-to-main and smoke check on live header.</div>
            </div>
            <div class="check-tag tag-pending">In Review</div>
          </div>

          <div class="checklist-row">
            <div class="check-icon pending">!</div>
            <div class="check-body">
              <div class="check-title">Q1 — CB silent-draft backlog reconciliation</div>
              <div class="check-desc">$3,685.15 across 15 drafts (QB 150 series). Review queue ready for Aaron once V5 merges.</div>
            </div>
            <div class="check-tag tag-pending">Queued</div>
          </div>

          <div class="checklist-row">
            <div class="check-icon pending">!</div>
            <div class="check-body">
              <div class="check-title">Shipments ledger final reconciliation</div>
              <div class="check-desc">data/shipments_ledger.jsonl and status_audit_log.jsonl pending first commit. Must land before freeze.</div>
            </div>
            <div class="check-tag tag-pending">Open</div>
          </div>

          <div class="checklist-row">
            <div class="check-icon blocked">&#10007;</div>
            <div class="check-body">
              <div class="check-title">Production tag <strong>v5.0.0</strong> — not yet cut</div>
              <div class="check-desc">Hold until §1.5 merge + final ledger commit land. Tag + annotated release notes on Aaron's sign-off.</div>
            </div>
            <div class="check-tag tag-blocked">Blocked</div>
          </div>

        </div>
      </section>

      <!-- TWO COLUMN -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Go-Live</span> <span class="rest">Plan</span></h2>
        <div class="two-col">
          <div class="info-card">
            <h3>Sequence of Operations</h3>
            <ul>
              <li><strong>Step 1</strong> — Merge feature/sa-v5-completion into main after §1.5 re-verification.</li>
              <li><strong>Step 2</strong> — Copy outputs to ~/norris-ops/ (website/, internal/, tools/).</li>
              <li><strong>Step 3</strong> — git add -A · commit · push to acnorris17/norris-ops.</li>
              <li><strong>Step 4</strong> — Tag v5.0.0 with annotated release notes.</li>
              <li><strong>Step 5</strong> — Verify ops.norrisutilities.com serves the new build.</li>
              <li><strong>Step 6</strong> — Telegram confirmation to Aaron with live URLs.</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>Verification Gates</h3>
            <ul>
              <li><strong>Gate A</strong> — NU brand preserved (header gradient, chevron, Phoenix Icon®).</li>
              <li><strong>Gate B</strong> — Shipments table renders · filters · sort · export CSV.</li>
              <li><strong>Gate C</strong> — Notes editor writes to ledger on Esc/save (no ghost drafts).</li>
              <li><strong>Gate D</strong> — Morning brief email dispatches at 04:30 CT on live cron.</li>
              <li><strong>Gate E</strong> — Invoice archive groups by month · collapses by year.</li>
              <li><strong>Gate F</strong> — Phoenix pulse opacity in [0.10, 0.14] window (visual).</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ROLLBACK + POST-CUTOVER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Rollback</span> <span class="rest">&amp; Post-Cutover</span></h2>
        <div class="two-col">
          <div class="info-card">
            <h3>Rollback Protocol</h3>
            <ul>
              <li><strong>Trigger</strong> — Any Gate A–F failure in production smoke check.</li>
              <li><strong>Action</strong> — git revert the merge commit on main; re-push.</li>
              <li><strong>Data</strong> — shipments_ledger.jsonl is append-only; no rollback needed.</li>
              <li><strong>Comms</strong> — Telegram alert to Aaron with error text and revert SHA.</li>
              <li><strong>Recovery SLA</strong> — Site restored within 15 minutes of alert.</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>Post-Completion Queue</h3>
            <ul>
              <li><strong>Q1</strong> — CB silent-draft backlog: $3,685.15 · 15 drafts.</li>
              <li><strong>Q2–Q15</strong> — Staged in post-completion-queue-q1-q15.</li>
              <li><strong>Invoicing Pulse</strong> — 6 KPI tiles above Shipments table.</li>
              <li><strong>QB PDF auto-capture</strong> — 7-step pipeline scheduled next.</li>
              <li><strong>Archived Invoices</strong> — norrisops.com/shipments/archive view.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SIGN-OFF -->
      <section class="nu-section">
        <div class="sign-off">
          <div class="sign-off-inner">
            <h3>Final Sign-Off Required</h3>
            <p>Phase A is live. Phase B is one merge and one ledger commit away from being production-complete. Once the Phoenix pulse patch lands on main and the shipments ledger is reconciled, V5 is ready to tag as <strong>v5.0.0</strong> and lock for the quarter.</p>
            <p>Approval from Aaron C. Norris releases the tag, dispatches the Telegram go-live notice, and opens the post-completion queue (Q1–Q15) starting with the CB silent-draft backlog.</p>
            <div class="sign-off-grid">
              <div class="sign-block">
                <div class="label">Owner</div>
                <div class="value">Aaron C. Norris</div>
                <div class="note">Founder &amp; CEO, Norris Utilities®</div>
              </div>
              <div class="sign-block">
                <div class="label">Target Cutover</div>
                <div class="value">April 25, 2026 · 04:00 CT</div>
                <div class="note">Pending §1.5 merge &amp; ledger commit</div>
              </div>
              <div class="sign-block">
                <div class="label">Production URL</div>
                <div class="value">ops.norrisutilities.com</div>
                <div class="note">Verify all six gates post-deploy</div>
              </div>
            </div>
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
  </footer>

</body>
</html>