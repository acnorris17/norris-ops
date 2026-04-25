<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>V5 Bucket Cover — Production Release Plan — Norris Utilities®</title>
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
      --nu-success: #1B7F3A;
      --nu-warn: #C9A84C;
      --nu-danger: #B00020;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
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
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 76px;
      height: 76px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
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
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 600px;
      background-image: radial-gradient(circle at center, rgba(0,0,255,0.04) 0%, transparent 65%);
      z-index: 0;
      pointer-events: none;
    }
    .container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 56px 40px 72px;
      position: relative;
      z-index: 1;
    }

    /* DOC HEAD */
    .doc-head {
      border-bottom: 3px solid var(--nu-blue);
      padding-bottom: 18px;
      margin-bottom: 36px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-end;
      gap: 12px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-meta {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      text-align: right;
      line-height: 1.55;
    }
    .doc-meta strong { color: var(--nu-dark-text); }

    /* STATUS BANNER */
    .status-banner {
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 20px 24px;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 8px;
      margin-bottom: 36px;
      box-shadow: 0 4px 18px rgba(0,0,255,0.18);
    }
    .status-icon {
      width: 44px; height: 44px;
      flex-shrink: 0;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      color: var(--nu-navy);
      font-size: 1.4rem;
    }
    .status-text { flex: 1; }
    .status-text .label {
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .status-text .stage {
      font-weight: 900;
      font-size: 1.25rem;
      letter-spacing: 0.02em;
    }

    /* SECTION */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-lede {
      font-size: 1rem;
      color: var(--nu-body-text);
      margin-bottom: 22px;
      max-width: 880px;
    }

    /* SKU GRID */
    .sku-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
    }
    .sku-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 22px 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .sku-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .sku-code {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      letter-spacing: 0.02em;
      margin-bottom: 4px;
    }
    .sku-name {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .sku-spec {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .sku-spec span {
      display: inline-block;
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.78rem;
      font-weight: 700;
      margin: 6px 6px 0 0;
    }

    /* GATE TIMELINE */
    .gates {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 8px;
    }
    .gate {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 18px 16px;
      position: relative;
    }
    .gate.done {
      border-color: var(--nu-success);
      background: linear-gradient(180deg, rgba(27,127,58,0.05) 0%, var(--nu-white) 60%);
    }
    .gate.active {
      border-color: var(--nu-blue);
      background: linear-gradient(180deg, rgba(0,0,255,0.05) 0%, var(--nu-white) 60%);
      box-shadow: 0 4px 14px rgba(0,0,255,0.10);
    }
    .gate.pending {
      border-color: var(--nu-medium-gray);
      opacity: 0.92;
    }
    .gate-num {
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .gate.done .gate-num { color: var(--nu-success); }
    .gate-title {
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .gate-detail {
      font-size: 0.86rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .gate-pill {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 900;
      padding: 3px 10px;
      border-radius: 10px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .pill-done { background: var(--nu-success); color: var(--nu-white); }
    .pill-active { background: var(--nu-blue); color: var(--nu-white); }
    .pill-pending { background: var(--nu-medium-gray); color: var(--nu-dark-text); }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .checklist li {
      position: relative;
      padding: 12px 14px 12px 44px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li.done::before {
      background: var(--nu-success);
      border-color: var(--nu-success);
    }
    .checklist li.done::after {
      content: '';
      position: absolute;
      left: 19px; top: calc(50% - 2px);
      width: 6px; height: 11px;
      border-right: 2.5px solid var(--nu-white);
      border-bottom: 2.5px solid var(--nu-white);
      transform: rotate(45deg) translateY(-2px);
    }
    .checklist li strong { color: var(--nu-dark-text); }
    .checklist li .owner {
      display: inline-block;
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-left: 8px;
      padding: 2px 8px;
      background: rgba(0,0,255,0.08);
      border-radius: 10px;
    }

    /* TWO COL */
    .two-col {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 28px;
    }
    @media (max-width: 860px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* PRICING TABLE */
    .price-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .price-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      text-align: left;
      padding: 13px 16px;
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 900;
    }
    .price-table td {
      padding: 13px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }
    .price-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .price-table .sku { font-weight: 900; color: var(--nu-blue); white-space: nowrap; }
    .price-table .price {
      font-weight: 900;
      color: var(--nu-dark-text);
      text-align: right;
      white-space: nowrap;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.05) 0%, rgba(6,208,255,0.08) 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 0 8px 8px 0;
      margin-top: 22px;
    }
    .callout strong { color: var(--nu-blue); }
    .callout-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .callout p { font-size: 0.93rem; }

    /* RISKS */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .risk {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
      border-top: 4px solid var(--nu-warn);
    }
    .risk h4 {
      font-weight: 900;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .risk p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .risk .mit {
      font-size: 0.82rem;
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* CTA */
    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 28px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 13px 28px;
      border: none;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 13px 28px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* SIGN-OFF */
    .signoff {
      margin-top: 36px;
      padding: 28px 30px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 22px;
    }
    .signoff-block .role {
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 4px;
    }
    .signoff-block .who {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 14px;
    }
    .signoff-block .line {
      border-bottom: 1.5px solid var(--nu-dark-text);
      height: 26px;
      margin-bottom: 4px;
    }
    .signoff-block .lbl {
      font-size: 0.76rem;
      color: var(--nu-body-text);
      letter-spacing: 0.05em;
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
      letter-spacing: 0.03em;
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
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 36px 20px 56px; }
      .doc-title { font-size: 1.55rem; }
      .doc-meta { text-align: left; }
      .status-banner { flex-direction: column; align-items: flex-start; gap: 12px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .cta-row { display: none; }
      .gate.active, .gate.done { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- DOC HEAD -->
      <div class="doc-head">
        <div class="doc-title">
          <span class="accent">V5 Bucket Cover</span> — Production Release Plan
        </div>
        <div class="doc-meta">
          <strong>Document:</strong> NU-PROD-V5-FINAL-2026-04-25<br>
          <strong>Issued:</strong> April 25, 2026 &middot; Birmingham, AL<br>
          <strong>Owner:</strong> Aaron C. Norris, Founder &amp; CEO<br>
          <strong>Action source:</strong> reMarkable, 2026-04-25
        </div>
      </div>

      <!-- STATUS -->
      <div class="status-banner">
        <div class="status-icon">V5</div>
        <div class="status-text">
          <div class="label">Decision Recorded</div>
          <div class="stage">Take V5 FlexPro Armor bucket cover to production as the final version.</div>
        </div>
      </div>

      <!-- SECTION 1: DECISION -->
      <section class="nu-section">
        <div class="nu-section-title">Decision <span class="rest">&amp; Scope</span></div>
        <p class="section-lede">
          The V5 design is hereby designated the production-locked, final release of the FlexPro Armor bucket cover line. All future
          orders, dealer collateral, and customer quotes will be served from V5 specifications. V1–V4 prototypes are retired and will not
          be re-quoted, re-sewn, or shipped under any Norris Utilities® SKU after the cutover date below.
        </p>

        <div class="callout">
          <div class="callout-title">What this means in plain language</div>
          <p>
            <strong>Done iterating.</strong> V5 is the cover we sell. Materials, dimensions, hardware, stitch pattern, label placement,
            and packaging are frozen. Any further change requires a written change order (CO) authorized by Aaron and a new SKU revision
            (e.g., NU-BC-2851-R2) — the V5 baseline does not move.
          </p>
        </div>
      </section>

      <!-- SECTION 2: SKUs -->
      <section class="nu-section">
        <div class="nu-section-title">V5 Production <span class="rest">SKU Lineup</span></div>
        <p class="section-lede">Four SKUs go to production. Sizes match the printed Norris Utilities Line Card.</p>

        <div class="sku-grid">
          <div class="sku-card">
            <div class="sku-code">NU-BC-2851</div>
            <div class="sku-name">2-Man Bucket Cover</div>
            <div class="sku-spec">
              FlexPro Armor, V5 final pattern.
              <div>
                <span>28" × 51"</span>
                <span>2-Man</span>
                <span>USA-Sewn</span>
              </div>
            </div>
          </div>

          <div class="sku-card">
            <div class="sku-code">NU-BC-2834</div>
            <div class="sku-name">1.5-Man Bucket Cover</div>
            <div class="sku-spec">
              FlexPro Armor, V5 final pattern.
              <div>
                <span>28" × 34"</span>
                <span>1.5-Man</span>
                <span>USA-Sewn</span>
              </div>
            </div>
          </div>

          <div class="sku-card">
            <div class="sku-code">NU-BC-2851-C</div>
            <div class="sku-name">2-Man Combo</div>
            <div class="sku-spec">
              V5 cover paired with matched control liner. Single-pack ready-to-ship.
              <div>
                <span>Combo</span>
                <span>2-Man</span>
              </div>
            </div>
          </div>

          <div class="sku-card">
            <div class="sku-code">NU-BC-2834-C</div>
            <div class="sku-name">1.5-Man Combo</div>
            <div class="sku-spec">
              V5 cover paired with matched control liner. Single-pack ready-to-ship.
              <div>
                <span>Combo</span>
                <span>1.5-Man</span>
              </div>
            </div>
          </div>
        </div>

        <div class="callout">
          <div class="callout-title">Competitor size translation (for sales)</div>
          <p>
            Their <strong>"24×48"</strong> = our <strong>NU-BC-2851</strong> (28"×51"). Their <strong>"24×34"</strong> = our
            <strong>NU-BC-2834</strong> (28"×34"). FlexPro Armor runs slightly larger than competitor "nominal" by design — the
            cover seats over the bucket lip with proper return.
          </p>
        </div>
      </section>

      <!-- SECTION 3: GATES -->
      <section class="nu-section">
        <div class="nu-section-title">Production <span class="rest">Gate Sequence</span></div>
        <p class="section-lede">Six gates from design freeze to first shipment. We are exiting Gate 2 and entering Gate 3.</p>

        <div class="gates">
          <div class="gate done">
            <span class="gate-pill pill-done">Complete</span>
            <div class="gate-num">Gate 1</div>
            <div class="gate-title">Design Freeze</div>
            <div class="gate-detail">V5 pattern, dimensions, and stitch spec locked. No further geometry changes.</div>
          </div>

          <div class="gate done">
            <span class="gate-pill pill-done">Complete</span>
            <div class="gate-num">Gate 2</div>
            <div class="gate-title">Field Validation</div>
            <div class="gate-detail">V4→V5 prototype run validated in-field on Dominion and Chain Electric units. Issues resolved.</div>
          </div>

          <div class="gate active">
            <span class="gate-pill pill-active">In Progress</span>
            <div class="gate-num">Gate 3</div>
            <div class="gate-title">Production Authorization</div>
            <div class="gate-detail">This document. Aaron authorizes V5 as the production version. Sewing partner cleared to scale.</div>
          </div>

          <div class="gate pending">
            <span class="gate-pill pill-pending">Next</span>
            <div class="gate-num">Gate 4</div>
            <div class="gate-title">First Article Inspection</div>
            <div class="gate-detail">First 10 units off the production line measured against the V5 spec sheet. Aaron signs the FAI report.</div>
          </div>

          <div class="gate pending">
            <span class="gate-pill pill-pending">Pending</span>
            <div class="gate-num">Gate 5</div>
            <div class="gate-title">Inventory Build</div>
            <div class="gate-detail">Initial buffer stock built per channel-mix forecast. Each SKU stocked to safety floor before public release.</div>
          </div>

          <div class="gate pending">
            <span class="gate-pill pill-pending">Pending</span>
            <div class="gate-num">Gate 6</div>
            <div class="gate-title">Public Release &amp; Cutover</div>
            <div class="gate-detail">Line Card, website, and dealer pricing updated to V5. V1–V4 retired in QuickBooks. First V5 shipment leaves Birmingham.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: ACTION CHECKLIST -->
      <section class="nu-section">
        <div class="two-col">
          <div>
            <div class="nu-section-title">Production <span class="rest">Action Checklist</span></div>
            <ul class="checklist">
              <li class="done"><strong>Lock V5 pattern files</strong> — original + DXF backed up to ops portal. <span class="owner">Aaron</span></li>
              <li class="done"><strong>Confirm USA sewing partner capacity</strong> — written confirmation for monthly run rate. <span class="owner">Aaron</span></li>
              <li><strong>Issue Production Authorization PO</strong> covering first build (NU-BC-2851 + NU-BC-2834 quantities per forecast). <span class="owner">Aaron</span></li>
              <li><strong>First Article Inspection</strong> — measure 10 units against V5 spec sheet, photograph, file FAI-V5-001. <span class="owner">Aaron</span></li>
              <li><strong>Update QuickBooks items</strong> — retire V4 line, set V5 cost &amp; sell price on all four SKUs. <span class="owner">CB</span></li>
              <li><strong>Refresh Line Card</strong> — V5 photography, updated SKU table, reprint and post to ops portal. <span class="owner">MK + Aaron</span></li>
              <li><strong>Update website pages</strong> — flexpro pages, line card download, distributor sheet. <span class="owner">MK</span></li>
              <li><strong>Notify dealers &amp; distributors</strong> — V5 release email with effective date, new MAP, and stock status. <span class="owner">Aaron</span></li>
              <li><strong>Notify Boss Products</strong> (Troy Gongwer + Thayne Grove, both CC'd) — V5 spec for joint quoting. <span class="owner">Aaron</span></li>
              <li><strong>Notify Samson Rope</strong> (Donna Poll + Sarah Daniels, both CC'd) — combo SKU spec sheets refreshed. <span class="owner">Aaron</span></li>
              <li><strong>Update reMarkable bucket-cover binder</strong> — replace V4 sheets with V5 spec, hardware, and care instructions. <span class="owner">Aaron</span></li>
              <li><strong>First shipment</strong> ships against an open order with Customer Cost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0). <span class="owner">Aaron</span></li>
            </ul>
          </div>

          <div>
            <div class="nu-section-title">V5 <span class="rest">Pricing Lock</span></div>
            <p class="section-lede">FlexPro Armor margin policy is unchanged: 50% gross margin on every channel-direct sale.</p>
            <table class="price-table" aria-label="V5 SKU pricing">
              <thead>
                <tr>
                  <th>SKU</th>
                  <th>Description</th>
                  <th style="text-align:right;">Margin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="sku">NU-BC-2851</td>
                  <td>2-Man V5 Cover</td>
                  <td class="price">50%</td>
                </tr>
                <tr>
                  <td class="sku">NU-BC-2834</td>
                  <td>1.5-Man V5 Cover</td>
                  <td class="price">50%</td>
                </tr>
                <tr>
                  <td class="sku">NU-BC-2851-C</td>
                  <td>2-Man Combo (V5)</td>
                  <td class="price">50%</td>
                </tr>
                <tr>
                  <td class="sku">NU-BC-2834-C</td>
                  <td>1.5-Man Combo (V5)</td>
                  <td class="price">50%</td>
                </tr>
              </tbody>
            </table>

            <div class="callout" style="margin-top:18px;">
              <div class="callout-title">Channel discount ladder</div>
              <p>
                Direct customers pay full MAP. <strong>Dealers</strong> receive 30% off. <strong>Distributors</strong> receive 40% off.
                Shipping is added per Ben's Formula:
                <br><strong>Customer Cost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 5: RISKS -->
      <section class="nu-section">
        <div class="nu-section-title">Risks <span class="rest">&amp; Mitigations</span></div>
        <p class="section-lede">Three live risks at the moment we go to production. Each has a named mitigation and an owner.</p>

        <div class="risk-grid">
          <div class="risk">
            <h4>Sewing partner capacity surge</h4>
            <p>First-month V5 demand can outrun a single sewing line if dealers order against the new lineup at once.</p>
            <p class="mit">Mitigation: stage dealer notifications by region; hold a 2-week buffer of NU-BC-2851 and NU-BC-2834 finished goods before public cutover.</p>
          </div>
          <div class="risk">
            <h4>Inventory accounting drift</h4>
            <p>QuickBooks must retire V4 SKUs cleanly so margin reports do not blend V4 and V5 cost basis.</p>
            <p class="mit">Mitigation: CB retires V4 items the same day V5 items go live; Aaron reviews the first month's COGS by SKU.</p>
          </div>
          <div class="risk">
            <h4>Open V4 quotes still in the field</h4>
            <p>Outstanding quotes referencing V4 sizing or photography could create customer confusion at order entry.</p>
            <p class="mit">Mitigation: re-issue any open quote older than 14 days against V5 specs before acceptance; Caroline Butler routes all customer-facing re-quotes to Aaron for review.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 6: CTA -->
      <section class="nu-section">
        <div class="nu-section-title">Authorize <span class="rest">&amp; Proceed</span></div>
        <p class="section-lede">
          Aaron's signature below authorizes V5 as the production version, releases the first production PO, and triggers the Gate 4 First
          Article Inspection.
        </p>

        <div class="cta-row">
          <a class="nu-btn-primary" href="mailto:acnorris@norrisutilities.com?subject=V5%20Bucket%20Cover%20%E2%80%94%20Production%20Authorization%20Confirmed">Authorize Production PO</a>
          <a class="nu-btn-secondary" href="tel:2055001343">Call Aaron — 205-500-1343</a>
        </div>

        <div class="signoff">
          <div class="signoff-block">
            <div class="role">Authorized By</div>
            <div class="who">Aaron C. Norris &middot; Founder &amp; CEO</div>
            <div class="line"></div>
            <div class="lbl">Signature &amp; Date</div>
          </div>
          <div class="signoff-block">
            <div class="role">Quality Sign-Off</div>
            <div class="who">First Article Inspection — V5</div>
            <div class="line"></div>
            <div class="lbl">FAI-V5-001 / Date</div>
          </div>
          <div class="signoff-block">
            <div class="role">Inventory &amp; Books</div>
            <div class="who">Caroline Butler — Admin</div>
            <div class="line"></div>
            <div class="lbl">QuickBooks cutover / Date</div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &middot; Norris Utilities, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>