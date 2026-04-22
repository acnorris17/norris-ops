<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Finalize V5 for Production — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #0a7a3f;
      --nu-warn: #b8860b;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 70px 40px 100px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
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
    }
    .nu-header-inner { position: relative; z-index: 2; }
    .nu-phoenix-icon {
      width: 70px; height: 70px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.4rem;
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
    }
    .nu-page-label {
      display: inline-block;
      margin-top: 20px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 30px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 55px;
      margin-top: -55px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 55px; display: block; }

    /* CONTENT */
    .nu-content-area { position: relative; background: var(--nu-white); }
    .nu-container { max-width: 1200px; margin: 0 auto; padding: 60px 40px; }

    /* TITLE BLOCK */
    .nu-title-block { margin-bottom: 48px; text-align: center; }
    .nu-title-block h1 {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      line-height: 1.2;
    }
    .nu-title-block h1 span { color: var(--nu-blue); }
    .nu-title-block p {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 780px;
      margin: 0 auto;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
      margin-top: 22px;
    }
    .nu-meta-pill {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      padding: 8px 18px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-meta-pill strong { color: var(--nu-blue); margin-right: 6px; }

    /* SECTION HEADERS */
    .nu-section { margin-bottom: 56px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 6px;
      color: var(--nu-dark-text);
    }
    .nu-section-title span:first-child { color: var(--nu-blue); }
    .nu-section-rule {
      height: 3px;
      width: 64px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 24px;
      border-radius: 2px;
    }
    .nu-section-lead {
      font-size: 1rem;
      color: var(--nu-body-text);
      margin-bottom: 24px;
      max-width: 840px;
    }

    /* STATUS GRID */
    .nu-status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
    }
    .nu-status-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-status-card.ok { border-left-color: var(--nu-success); }
    .nu-status-card.warn { border-left-color: var(--nu-warn); }
    .nu-status-card.pending { border-left-color: var(--nu-accent-gold); }
    .nu-status-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #6a6a7a;
      margin-bottom: 8px;
    }
    .nu-status-value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 4px;
    }
    .nu-status-sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
    }

    /* GATES TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: #fafafc; }
    .nu-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-pill.pass { background: #e3f6ea; color: var(--nu-success); }
    .nu-pill.hold { background: #fdf3dc; color: var(--nu-warn); }
    .nu-pill.live { background: #e0f4ff; color: #0055aa; }

    /* CHECKLIST */
    .nu-checklist {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 14px;
    }
    .nu-check {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 16px 18px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .nu-check .box {
      flex-shrink: 0;
      width: 24px; height: 24px;
      border-radius: 4px;
      background: var(--nu-success);
      color: var(--nu-white);
      display: flex; align-items: center; justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
      margin-top: 2px;
    }
    .nu-check.open .box { background: var(--nu-medium-gray); color: var(--nu-dark-text); }
    .nu-check-text strong {
      display: block;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 3px;
      font-size: 0.98rem;
    }
    .nu-check-text span { font-size: 0.86rem; color: var(--nu-body-text); }

    /* DELIVERABLES */
    .nu-deliverables {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .nu-deliverable {
      background: linear-gradient(135deg, #f7f9ff 0%, var(--nu-white) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-deliverable:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,255,0.08);
    }
    .nu-deliverable h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-deliverable .desc {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-bottom: 12px;
    }
    .nu-deliverable .path {
      font-family: 'SF Mono', Consolas, Monaco, monospace;
      font-size: 0.78rem;
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      padding: 8px 10px;
      border-radius: 4px;
      color: var(--nu-dark-text);
      word-break: break-all;
    }

    /* SIGN-OFF */
    .nu-signoff {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0033cc 60%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 44px 40px;
      border-radius: 10px;
      text-align: center;
      margin-top: 16px;
    }
    .nu-signoff h3 {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 10px;
      color: var(--nu-white);
    }
    .nu-signoff p {
      font-size: 1rem;
      color: rgba(255,255,255,0.9);
      max-width: 720px;
      margin: 0 auto 22px;
    }
    .nu-signoff .btn {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 14px 32px;
      border-radius: 4px;
      font-weight: 900;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 0.9rem;
      transition: transform 0.2s ease;
    }
    .nu-signoff .btn:hover { transform: translateY(-2px); }
    .nu-signoff .gate-stamp {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 14px;
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 20px;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 700;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact { font-size: 0.92rem; line-height: 1.8; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 80px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px; }
      .nu-title-block h1 { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.3rem; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-deliverable:hover { transform: none; box-shadow: none; }
      .nu-signoff { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-page-label">V5 Production Finalization</div>
    </div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron" aria-hidden="true">
    <svg viewBox="0 0 1440 55" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,55 L1440,0 L1440,55 L0,55 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-title-block">
        <h1>Finalize <span>V5</span> for Production</h1>
        <p>The V5 Shipping Agent has cleared Gate 4 with a full writeset rendered to the ops portal. This document is the closing checklist — the final actions required to move V5 from verified build to live production status under Aaron's GO.</p>
        <div class="nu-meta-row">
          <span class="nu-meta-pill"><strong>Branch</strong>feature/shipping-agent-v5</span>
          <span class="nu-meta-pill"><strong>Date</strong>2026-04-22</span>
          <span class="nu-meta-pill"><strong>Owner</strong>Aaron C. Norris</span>
          <span class="nu-meta-pill"><strong>Status</strong>Awaiting GO</span>
        </div>
      </div>

      <!-- GATE STATUS -->
      <div class="nu-section">
        <div class="nu-section-title"><span>Gate</span> <span>Status Snapshot</span></div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lead">Every gate in the V5 sequence has been executed and verified. Tests run clean at 151/151. All eight CB fix rounds have been absorbed into the writeset without regression.</p>

        <div class="nu-status-grid">
          <div class="nu-status-card ok">
            <div class="nu-status-label">Tests</div>
            <div class="nu-status-value">151 / 151</div>
            <div class="nu-status-sub">Full suite green</div>
          </div>
          <div class="nu-status-card ok">
            <div class="nu-status-label">Gate 4</div>
            <div class="nu-status-value">Passed</div>
            <div class="nu-status-sub">CB writeset rendered</div>
          </div>
          <div class="nu-status-card ok">
            <div class="nu-status-label">Main Shipments</div>
            <div class="nu-status-value">18 SDs</div>
            <div class="nu-status-sub">Parent + children linked</div>
          </div>
          <div class="nu-status-card ok">
            <div class="nu-status-label">Standalone</div>
            <div class="nu-status-value">13 + R026</div>
            <div class="nu-status-sub">All invoice-ready</div>
          </div>
          <div class="nu-status-card ok">
            <div class="nu-status-label">Fixes Absorbed</div>
            <div class="nu-status-value">8 of 8</div>
            <div class="nu-status-sub">CB rounds 1–8 clean</div>
          </div>
          <div class="nu-status-card pending">
            <div class="nu-status-label">Final GO</div>
            <div class="nu-status-value">Awaiting Aaron</div>
            <div class="nu-status-sub">Sign-off required</div>
          </div>
        </div>
      </div>

      <!-- GATE TABLE -->
      <div class="nu-section">
        <div class="nu-section-title"><span>Sprint</span> <span>2 Gate Ledger</span></div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lead">Gate-by-gate verification record for V5 Sprint 2. Each entry reflects a committed milestone on feature/shipping-agent-v5.</p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Gate</th>
                <th>Milestone</th>
                <th>Deliverable</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gate 1</strong></td>
                <td>Parser + schema lockdown</td>
                <td>Order-rules v5 ruling set (19–23) applied</td>
                <td><span class="nu-pill pass">Passed</span></td>
              </tr>
              <tr>
                <td><strong>Gate 2</strong></td>
                <td>Multi-ship-to reconciliation</td>
                <td>Parent + children linkage; AJ-BOSS immutable at $8,930.48</td>
                <td><span class="nu-pill pass">Passed</span></td>
              </tr>
              <tr>
                <td><strong>Gate 3</strong></td>
                <td>Historical backfill</td>
                <td>March 20 shipments normalized; Crosby S-2026-018 added</td>
                <td><span class="nu-pill pass">Passed</span></td>
              </tr>
              <tr>
                <td><strong>Gate 4</strong></td>
                <td>CB invoice-ready writeset</td>
                <td>18 SDs + 13 standalone + R026 rendered to Shipments tab</td>
                <td><span class="nu-pill pass">Passed</span></td>
              </tr>
              <tr>
                <td><strong>Gate 5</strong></td>
                <td>Aaron GO &amp; production cutover</td>
                <td>Merge to main, tag v5.0.0, enable automated pipeline</td>
                <td><span class="nu-pill hold">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CHECKLIST -->
      <div class="nu-section">
        <div class="nu-section-title"><span>Finalization</span> <span>Checklist</span></div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lead">Every item below must be green before the branch is merged and V5 is declared live.</p>

        <div class="nu-checklist">
          <div class="nu-check">
            <div class="box">✓</div>
            <div class="nu-check-text">
              <strong>Test Suite Green</strong>
              <span>151 of 151 passing on feature/shipping-agent-v5. No flaky skips.</span>
            </div>
          </div>
          <div class="nu-check">
            <div class="box">✓</div>
            <div class="nu-check-text">
              <strong>CB Fix Rounds Absorbed</strong>
              <span>All eight fixes (FIX1 through FIX8) merged without regression.</span>
            </div>
          </div>
          <div class="nu-check">
            <div class="box">✓</div>
            <div class="nu-check-text">
              <strong>Writeset Rendered</strong>
              <span>Ops portal Shipments tab reflects 18 SDs + 13 standalone + R026.</span>
            </div>
          </div>
          <div class="nu-check">
            <div class="box">✓</div>
            <div class="nu-check-text">
              <strong>Customer Aliases Verified</strong>
              <span>Roberts + TUF-retag aliases active; Gilmer TX correction applied.</span>
            </div>
          </div>
          <div class="nu-check">
            <div class="box">✓</div>
            <div class="nu-check-text">
              <strong>Multi-Ship-To Rule #1</strong>
              <span>AJ-BOSS parent + children structure immutable at $8,930.48.</span>
            </div>
          </div>
          <div class="nu-check">
            <div class="box">✓</div>
            <div class="nu-check-text">
              <strong>Pickle 2-Package List</strong>
              <span>Crosby S-2026-018 historical entry reconciled on 2026-03-20.</span>
            </div>
          </div>
          <div class="nu-check open">
            <div class="box">&nbsp;</div>
            <div class="nu-check-text">
              <strong>Aaron Final Review</strong>
              <span>Walk the Shipments tab, confirm the 32 rows match expectations.</span>
            </div>
          </div>
          <div class="nu-check open">
            <div class="box">&nbsp;</div>
            <div class="nu-check-text">
              <strong>Merge to main</strong>
              <span>Squash-merge feature/shipping-agent-v5, tag v5.0.0, push origin.</span>
            </div>
          </div>
          <div class="nu-check open">
            <div class="box">&nbsp;</div>
            <div class="nu-check-text">
              <strong>Deploy Ops Portal</strong>
              <span>Copy rendered HTML to ~/norris-ops/internal/ and git push live.</span>
            </div>
          </div>
          <div class="nu-check open">
            <div class="box">&nbsp;</div>
            <div class="nu-check-text">
              <strong>Enable Automated Pipeline</strong>
              <span>Turn on run_pipeline cron; log first clean run to audit_log.jsonl.</span>
            </div>
          </div>
          <div class="nu-check open">
            <div class="box">&nbsp;</div>
            <div class="nu-check-text">
              <strong>Archive V4 Artifacts</strong>
              <span>Move legacy run outputs to /archive/v4/ for audit history.</span>
            </div>
          </div>
          <div class="nu-check open">
            <div class="box">&nbsp;</div>
            <div class="nu-check-text">
              <strong>Caroline Handoff Note</strong>
              <span>Brief CB on V5 Shipments tab workflow before first invoice cycle.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- DELIVERABLES -->
      <div class="nu-section">
        <div class="nu-section-title"><span>Primary</span> <span>Deliverables</span></div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lead">The artifacts listed below are the source of truth for the V5 production release. Paths are relative to the Norris Utilities® ops repository.</p>

        <div class="nu-deliverables">
          <div class="nu-deliverable">
            <h4>CB Invoice Writeset</h4>
            <div class="desc">The primary Gate 4 deliverable. 18 main SDs plus 13 standalone shipments plus R026 rendered to the ops portal Shipments tab.</div>
            <div class="path">~/norris-ops/internal/shipments.html</div>
          </div>
          <div class="nu-deliverable">
            <h4>Pipeline Run Reports</h4>
            <div class="desc">Timestamped JSON reports from the most recent V5 pipeline runs on 2026-04-22.</div>
            <div class="path">~/norris-agent/output/reports/run_pipeline_20260422T123029Z.json</div>
          </div>
          <div class="nu-deliverable">
            <h4>Portal Recovered Shipments</h4>
            <div class="desc">The authoritative recovery snapshot feeding the Shipments tab render.</div>
            <div class="path">~/norris-agent/output/portal_recovered_shipments.json</div>
          </div>
          <div class="nu-deliverable">
            <h4>V5 Order Rules</h4>
            <div class="desc">Locked ruling set 19–23 from the Chain Electric reconciliation; governs parser behavior.</div>
            <div class="path">~/norris-agent/process-rules/v5-order-rules-2026-04-18.md</div>
          </div>
          <div class="nu-deliverable">
            <h4>Audit Log</h4>
            <div class="desc">Append-only JSONL record of every pipeline event. First post-merge line marks production cutover.</div>
            <div class="path">~/norris-agent/data/audit_log.jsonl</div>
          </div>
          <div class="nu-deliverable">
            <h4>Daily Summary Queue</h4>
            <div class="desc">Queued summaries for the Shipments tab; populated on each clean run.</div>
            <div class="path">~/norris-agent/data/daily_summary_queue.json</div>
          </div>
        </div>
      </div>

      <!-- CUTOVER STEPS -->
      <div class="nu-section">
        <div class="nu-section-title"><span>Production</span> <span>Cutover Sequence</span></div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lead">The exact order of operations once Aaron issues GO. Each step is atomic and reversible up to the tag push.</p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Command / Location</th>
                <th>Expected Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Capture pre-merge snapshot</td>
                <td>git status &amp; git log on feature/shipping-agent-v5</td>
                <td>Clean tree, linear history</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Run full test suite one last time</td>
                <td>pytest ~/norris-agent/tests</td>
                <td>151 / 151 passing</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Squash-merge to main</td>
                <td>git checkout main &amp; git merge --squash</td>
                <td>Single V5 commit on main</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Tag the release</td>
                <td>git tag -a v5.0.0 -m "V5 production"</td>
                <td>Annotated tag on main</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Push ops portal writeset</td>
                <td>cd ~/norris-ops &amp; git push</td>
                <td>Live at ops.norrisutilities.com</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Enable scheduled pipeline</td>
                <td>launchd / cron activation</td>
                <td>Automated runs on schedule</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Telegram confirmation to Aaron</td>
                <td>Legacy bot → Aaron</td>
                <td>V5 production online message</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- RISK REVIEW -->
      <div class="nu-section">
        <div class="nu-section-title"><span>Risk</span> <span>Review</span></div>
        <div class="nu-section-rule"></div>
        <p class="nu-section-lead">Three watch items remain on the radar through the first production week.</p>

        <div class="nu-status-grid">
          <div class="nu-status-card warn">
            <div class="nu-status-label">Alias Regression</div>
            <div class="nu-status-value">Monitor</div>
            <div class="nu-status-sub">Any new Roberts / TUF-retag variants must be logged, not auto-created.</div>
          </div>
          <div class="nu-status-card warn">
            <div class="nu-status-label">AJ-BOSS Immutability</div>
            <div class="nu-status-value">Locked</div>
            <div class="nu-status-sub">The $8,930.48 split must not drift during CB invoice entry.</div>
          </div>
          <div class="nu-status-card warn">
            <div class="nu-status-label">March 20 Backfill</div>
            <div class="nu-status-value">Verify</div>
            <div class="nu-status-sub">Confirm Crosby S-2026-018 posts to QuickBooks before closing April.</div>
          </div>
        </div>
      </div>

      <!-- SIGN-OFF -->
      <div class="nu-section">
        <div class="nu-signoff">
          <h3>V5 Ready for GO</h3>
          <p>All engineering gates are passed. The Shipments tab is rendered and matches the compiled truth. Only Aaron's final review and the merge-plus-tag sequence stand between the current branch and live production. Once GO is given, the cutover runs in the order listed above.</p>
          <a class="btn" href="https://ops.norrisutilities.com/internal/shipments.html">Review Shipments Tab</a>
          <div><span class="gate-stamp">Gate 4 Cleared · Awaiting Aaron GO</span></div>
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