<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action — Clarify H2O Wagon Lifetime Warranty Coverage — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 40%, #0066ee 70%, #00aaff 90%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
    }
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }
    main { max-width: 900px; margin: 0 auto; padding: 60px 40px; }
    h1 {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    h1 span { color: var(--nu-blue); }
    .meta {
      font-size: 0.95rem;
      color: #666;
      margin-bottom: 32px;
      padding-bottom: 16px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    h2 {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-blue);
      margin: 32px 0 12px;
    }
    p { margin-bottom: 16px; }
    ul { margin: 0 0 16px 24px; }
    li { margin-bottom: 8px; }
    .callout {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 16px 20px;
      margin: 24px 0;
      border-radius: 4px;
    }
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.8);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.1rem;
      color: var(--nu-cyan);
      margin-bottom: 12px;
    }
    .nu-footer-contact { font-size: 0.9rem; line-height: 1.8; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
  </style>
</head>
<body>
  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">Utilities</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
      <path d="M0,0 L550,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>
  <main>
    <h1><span>Action:</span> Clarify H2O Wagon Lifetime Warranty Coverage</h1>
    <div class="meta">reMarkable action item • Task 210 • Captured from notebook</div>

    <p><strong>Note:</strong> This task is already covered by the existing file <code>action-clarify-lifetime-warranty.html</code> (576 lines, live on the ops portal). Per the dedup rule, no new file has been created. This page serves as a pointer to the canonical document.</p>

    <h2>What Aaron Needs</h2>
    <p>Get the written definition of what "lifetime warranty" actually covers on the H2O Wagon product line. Specifically:</p>
    <ul>
      <li>Is it the lifetime of the product, the lifetime of the original purchaser, or something else?</li>
      <li>What components are covered vs. excluded (seals, hoses, pumps, frame, paint)?</li>
      <li>Are wear items and consumables excluded?</li>
      <li>Is labor covered, or parts only?</li>
      <li>What voids the warranty (modifications, commercial use, improper storage)?</li>
      <li>Transferability if the unit is resold.</li>
    </ul>

    <h2>Why It Matters</h2>
    <p>Aaron cannot quote or sell H2O Wagon with confidence until the warranty language is documented. Customers and dealers will ask, and a vague answer costs the sale or creates a warranty-claim dispute later.</p>

    <div class="callout">
      <strong>Canonical file:</strong> <code>~/norris-ops/internal/action-clarify-lifetime-warranty.html</code><br>
      <strong>Live URL:</strong> ops.norrisutilities.com/internal/action-clarify-lifetime-warranty.html
    </div>

    <h2>Next Step</h2>
    <p>Email H2O Wagon contact requesting the full written warranty terms. CC Caroline Butler for the file. Once received, update the canonical action page with the verified coverage details.</p>
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