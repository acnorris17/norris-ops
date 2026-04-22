<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>V5 Bucket Cover — Production Release — Norris Utilities®</title>
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
      --nu-success: #1B7F3A;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.6;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
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
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* Ghost phoenix watermark on header */
    .nu-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 80px;
    }

    /* RELEASE BANNER */
    .release-banner {
      background: linear-gradient(135deg, var(--nu-success) 0%, #2BA453 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 20px;
      box-shadow: 0 6px 24px rgba(27, 127, 58, 0.25);
    }
    .release-banner-icon {
      flex-shrink: 0;
      width: 56px;
      height: 56px;
      background: rgba(255,255,255,0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      font-weight: 900;
    }
    .release-banner-text h2 {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
    }
    .release-banner-text p {
      font-size: 1rem;
      opacity: 0.95;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 50px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 20px;
      border-bottom: 3px solid var(--nu-cyan);
      padding-bottom: 10px;
    }
    .nu-section-title .first {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* INTRO */
    .intro-text {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 16px;
    }

    /* SKU GRID */
    .sku-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .sku-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .sku-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.1);
    }
    .sku-code {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-blue);
      letter-spacing: 0.04em;
      margin-bottom: 6px;
    }
    .sku-name {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .sku-dim {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-bottom: 12px;
    }
    .sku-price {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .sku-price small {
      font-weight: 400;
      font-size: 0.75rem;
      color: #888;
      display: block;
      margin-top: 2px;
    }

    /* SPEC TABLE */
    .spec-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 20px;
    }
    .spec-table th {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .spec-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .spec-table tr:last-child td { border-bottom: none; }
    .spec-table tr:nth-child(even) { background: var(--nu-light-gray); }
    .spec-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 40%;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 14px 16px 14px 52px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      margin-bottom: 10px;
      position: relative;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      border-left: 4px solid var(--nu-success);
    }
    .checklist li::before {
      content: '✓';
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      background: var(--nu-success);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.88rem;
    }
    .checklist li strong {
      color: var(--nu-blue);
    }

    /* NEXT STEPS */
    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }
    .step-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      position: relative;
      padding-top: 48px;
    }
    .step-number {
      position: absolute;
      top: -16px;
      left: 24px;
      width: 40px;
      height: 40px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .step-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .step-card p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* BADGE */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 14px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      margin-right: 8px;
      margin-bottom: 8px;
    }

    /* CTA */
    .cta-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 24px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 32px;
      border: none;
      border-radius: 6px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.98rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 14px 32px;
      border: 2px solid var(--nu-blue);
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.98rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* VERSION META */
    .version-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      background: var(--nu-light-gray);
      padding: 24px;
      border-radius: 10px;
      margin-bottom: 30px;
      border-left: 6px solid var(--nu-cyan);
    }
    .meta-item .meta-label {
      font-size: 0.78rem;
      font-weight: 700;
      color: #666;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .meta-item .meta-value {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 30px 20px 50px; }
      .release-banner { flex-direction: column; text-align: center; }
      .nu-section-title { font-size: 1.3rem; }
      .spec-table th, .spec-table td { padding: 10px 12px; font-size: 0.88rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .sku-card, .step-card { box-shadow: none; border: 1px solid #ccc; }
      .release-banner { background: var(--nu-success) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- RELEASE BANNER -->
      <div class="release-banner">
        <div class="release-banner-icon">V5</div>
        <div class="release-banner-text">
          <h2>FlexPro Armor V5 — Production Release</h2>
          <p>Final version approved. Moving from prototype to full manufacturing run.</p>
        </div>
      </div>

      <!-- VERSION META -->
      <div class="version-meta">
        <div class="meta-item">
          <div class="meta-label">Product</div>
          <div class="meta-value">FlexPro Armor Bucket Cover</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Version</div>
          <div class="meta-value">V5 (Final)</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Release Date</div>
          <div class="meta-value">April 22, 2026</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Status</div>
          <div class="meta-value" style="color: var(--nu-success);">Production Ready</div>
        </div>
      </div>

      <!-- INTRO -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Decision.</span> <span class="rest">V5 is the Production Version.</span></h2>
        <p class="intro-text">
          After iterating through V1 through V4 in field trials with active FlexPro Armor customers, V5 is locked as the final production design. All four SKUs — the 2-Man, 1.5-Man, and their Combo pairings — ship in V5 configuration from this date forward.
        </p>
        <p class="intro-text">
          No further revisions to the pattern, stitch count, fabric spec, or hardware. Any changes requested after this release require a new version designation and formal review.
        </p>
        <div style="margin-top: 16px;">
          <span class="nu-badge">Handmade in USA</span>
          <span class="nu-badge">50% Margin Locked</span>
          <span class="nu-badge">V5 Pattern Final</span>
        </div>
      </section>

      <!-- SKU LINEUP -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Production</span> <span class="rest">SKUs — V5</span></h2>
        <div class="sku-grid">
          <div class="sku-card">
            <div class="sku-code">NU-BC-2851</div>
            <div class="sku-name">FlexPro Armor 2-Man</div>
            <div class="sku-dim">28" × 51" — Standard 2-man bucket</div>
            <div class="sku-price">$305<small>Direct customer price</small></div>
          </div>
          <div class="sku-card">
            <div class="sku-code">NU-BC-2834</div>
            <div class="sku-name">FlexPro Armor 1.5-Man</div>
            <div class="sku-dim">28" × 34" — 1.5-man bucket</div>
            <div class="sku-price">$245<small>Direct customer price</small></div>
          </div>
          <div class="sku-card">
            <div class="sku-code">NU-BC-2851-C</div>
            <div class="sku-name">2-Man Combo</div>
            <div class="sku-dim">28" × 51" cover + liner combo</div>
            <div class="sku-price">$435<small>Direct customer price</small></div>
          </div>
          <div class="sku-card">
            <div class="sku-code">NU-BC-2834-C</div>
            <div class="sku-name">1.5-Man Combo</div>
            <div class="sku-dim">28" × 34" cover + liner combo</div>
            <div class="sku-price">$375<small>Direct customer price</small></div>
          </div>
        </div>
      </section>

      <!-- SPEC TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">V5</span> <span class="rest">Production Specification</span></h2>
        <table class="spec-table">
          <thead>
            <tr>
              <th>Spec</th>
              <th>V5 Production Standard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Outer Shell</td>
              <td>Heavy-duty marine-grade vinyl, UV-stabilized</td>
            </tr>
            <tr>
              <td>Thread</td>
              <td>Bonded polyester, UV-resistant, lock-stitched</td>
            </tr>
            <tr>
              <td>Seams</td>
              <td>Double-stitched, reinforced corner gussets</td>
            </tr>
            <tr>
              <td>Hardware</td>
              <td>Stainless steel snaps and grommets, corrosion-resistant</td>
            </tr>
            <tr>
              <td>Closure System</td>
              <td>V5 Quick-Cinch — redesigned from V4 for one-hand operation</td>
            </tr>
            <tr>
              <td>Fit Profile</td>
              <td>Tailored to 28" opening; covers standard 2-Man and 1.5-Man buckets</td>
            </tr>
            <tr>
              <td>Country of Origin</td>
              <td>Made in the USA — handmade, not imported</td>
            </tr>
            <tr>
              <td>Warranty</td>
              <td>Manufacturer workmanship warranty</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- CHANGES FROM V4 -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">What</span> <span class="rest">Changed V4 → V5</span></h2>
        <ul class="checklist">
          <li><strong>Closure upgraded</strong> — V5 Quick-Cinch replaces the V4 strap-buckle combo for faster, one-hand operation in the field.</li>
          <li><strong>Corner reinforcement</strong> — Added double gussets at stress points identified in V4 field reports.</li>
          <li><strong>Stitch density increased</strong> — Tighter bonded polyester stitch on all load-bearing seams.</li>
          <li><strong>Hardware standardized</strong> — All snaps and grommets now stainless steel across every SKU.</li>
          <li><strong>Pattern locked</strong> — No more dimensional tolerance drift between production batches.</li>
          <li><strong>Combo integration</strong> — Cover and liner now matched and packaged together at point of manufacture.</li>
        </ul>
      </section>

      <!-- NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Production</span> <span class="rest">Rollout Plan</span></h2>
        <div class="steps">
          <div class="step-card">
            <div class="step-number">1</div>
            <h4>Confirm Manufacturing Run</h4>
            <p>Lock initial V5 production batch quantities across all four SKUs. Verify fabric and hardware inventory on hand.</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h4>Update Line Card &amp; Spec Sheets</h4>
            <p>Replace V4 references in line card, website, and dealer collateral with V5 spec. Archive V4 materials internally.</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h4>Notify Active Customers</h4>
            <p>Outbound to Dominion Energy (Coy Crosby), AEP Appalachian (Sammy Myers), SWEPCO (Benz), and open quote holders that V5 is the shipping version.</p>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <h4>Retire V1–V4 Prototype Stock</h4>
            <p>Any V1–V4 covers remaining go to internal demo / trade-show use only. Do not ship earlier versions to customers.</p>
          </div>
          <div class="step-card">
            <div class="step-number">5</div>
            <h4>Channel Pricing Verified</h4>
            <p>Direct 50% margin confirmed. Dealer 30% off, distributor 40% off. Ben's shipping formula: ROUNDUP(ROUNDUP(RegCost,0) × 1.10, 0).</p>
          </div>
          <div class="step-card">
            <div class="step-number">6</div>
            <h4>Tandem Tracking Active</h4>
            <p>Every V5 unit shipped goes into the master tracker and is invoiced in QuickBooks within the same business day.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="nu-section" style="margin-bottom: 0;">
        <h2 class="nu-section-title"><span class="first">Ready</span> <span class="rest">to Order V5?</span></h2>
        <p class="intro-text">
          V5 is the only version shipping from Norris Utilities® going forward. Direct customers, dealers, and distributors can order any of the four production SKUs today.
        </p>
        <div class="cta-row">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=V5%20FlexPro%20Armor%20Order" class="nu-btn-secondary">Email to Order</a>
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
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      <span style="font-size: 0.8rem; opacity: 0.7;">Birmingham, Alabama — Serving 20+ states</span>
    </div>
  </footer>

</body>
</html>