<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lifetime Warranty Clarification — Norris Utilities®</title>
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
      --nu-warning: #C44536;
      --nu-success: #2E7D4F;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-inner {
      position: relative;
      z-index: 2;
      max-width: 1100px;
      margin: 0 auto;
    }

    /* Ghost phoenix watermark on header */
    .nu-phoenix-ghost {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 420px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-eyebrow {
      display: inline-block;
      font-weight: 700;
      font-size: 0.75rem;
      color: var(--nu-cyan);
      letter-spacing: 0.3em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding: 6px 14px;
      border: 1px solid rgba(6, 208, 255, 0.5);
      border-radius: 2px;
      background: rgba(0, 0, 0, 0.15);
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 16px;
      text-indent: 0.7em;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-white);
      letter-spacing: 0.01em;
      line-height: 1.15;
      margin-top: 18px;
      max-width: 820px;
      margin-left: auto;
      margin-right: auto;
    }
    .nu-page-subtitle {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-top: 12px;
    }

    /* CHEVRON TRANSITION */
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
      padding: 50px 30px 70px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 8%; left: 50%;
      transform: translate(-50%, 0);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1080px;
      margin: 0 auto;
    }

    /* TASK CARD */
    .nu-task-banner {
      background: linear-gradient(135deg, #fff9e6 0%, #fef3cd 100%);
      border-left: 6px solid var(--nu-accent-gold);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 42px;
      display: flex;
      align-items: flex-start;
      gap: 18px;
    }
    .nu-task-icon {
      flex-shrink: 0;
      width: 44px; height: 44px;
      background: var(--nu-accent-gold);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.4rem;
    }
    .nu-task-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #7a5e00;
      margin-bottom: 6px;
    }
    .nu-task-body {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-task-meta {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
      font-weight: 400;
    }

    /* SECTION TITLE */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 70px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
      border-radius: 2px;
    }

    /* THE CORE QUESTION */
    .core-question {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 36px 34px;
      border-radius: 10px;
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
    }
    .core-question::before {
      content: '?';
      position: absolute;
      right: -30px; top: -40px;
      font-size: 22rem;
      font-weight: 900;
      color: rgba(6, 208, 255, 0.08);
      line-height: 1;
      font-family: var(--font-primary);
    }
    .core-question-label {
      color: var(--nu-cyan);
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      margin-bottom: 10px;
      position: relative;
    }
    .core-question-text {
      font-size: 1.45rem;
      font-weight: 700;
      line-height: 1.4;
      position: relative;
      max-width: 780px;
    }
    .core-question-context {
      margin-top: 16px;
      font-size: 0.95rem;
      color: rgba(255,255,255,0.8);
      font-weight: 400;
      line-height: 1.7;
      position: relative;
      max-width: 780px;
    }

    /* OPTION CARDS */
    .option-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin-bottom: 20px;
    }
    .option-card {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 28px 26px;
      position: relative;
      transition: all 0.25s ease;
    }
    .option-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.09);
    }
    .option-card.option-a {
      border-color: var(--nu-blue);
      background: linear-gradient(180deg, rgba(0,0,255,0.02) 0%, var(--nu-white) 100%);
    }
    .option-card.option-b {
      border-color: var(--nu-cyan);
      background: linear-gradient(180deg, rgba(6,208,255,0.04) 0%, var(--nu-white) 100%);
    }
    .option-tag {
      display: inline-block;
      padding: 5px 12px;
      border-radius: 3px;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .option-a .option-tag {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .option-b .option-tag {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .option-title {
      font-size: 1.2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.3;
    }
    .option-definition {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 18px;
      line-height: 1.6;
    }
    .option-section {
      margin-top: 14px;
    }
    .option-section-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .option-b .option-section-label { color: #0077aa; }
    .option-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .option-list li {
      padding: 6px 0 6px 22px;
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
      position: relative;
    }
    .option-list li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 12px; height: 2px;
      background: var(--nu-cyan);
    }
    .pros-cons-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px dashed var(--nu-medium-gray);
    }
    .pc-block {
      font-size: 0.85rem;
    }
    .pc-label {
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .pc-label.pros { color: var(--nu-success); }
    .pc-label.cons { color: var(--nu-warning); }
    .pc-block ul { list-style: none; padding: 0; margin: 0; }
    .pc-block li {
      padding: 3px 0 3px 14px;
      position: relative;
      font-size: 0.85rem;
      line-height: 1.5;
    }
    .pc-block li::before {
      content: '•';
      position: absolute;
      left: 0;
      font-weight: 900;
    }
    .pros li::before { color: var(--nu-success); }
    .cons li::before { color: var(--nu-warning); }

    /* SCENARIOS TABLE */
    .scenarios-wrap {
      background: var(--nu-light-gray);
      border-radius: 10px;
      padding: 28px;
      margin-bottom: 40px;
    }
    .scenarios-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      margin-top: 16px;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .scenarios-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .scenarios-table td {
      padding: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
      vertical-align: top;
      line-height: 1.55;
    }
    .scenarios-table tr:last-child td { border-bottom: none; }
    .scenarios-table .scenario-col { font-weight: 700; color: var(--nu-dark-text); width: 34%; }
    .scenarios-table .answer-a { color: var(--nu-blue); font-weight: 700; }
    .scenarios-table .answer-b { color: #0077aa; font-weight: 700; }

    /* RECOMMENDATION */
    .recommendation {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0055dd 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 36px 34px;
      border-radius: 10px;
      margin-bottom: 40px;
      position: relative;
    }
    .rec-label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.9);
      margin-bottom: 10px;
    }
    .rec-headline {
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 12px;
      line-height: 1.3;
    }
    .rec-body {
      font-size: 1rem;
      line-height: 1.7;
      max-width: 780px;
    }
    .rec-body strong { color: var(--nu-navy); background: rgba(255,255,255,0.9); padding: 1px 6px; border-radius: 3px; }

    /* LANGUAGE BOX */
    .language-box {
      background: var(--nu-white);
      border: 2px solid var(--nu-blue);
      border-radius: 10px;
      padding: 28px;
      margin-bottom: 20px;
      position: relative;
    }
    .language-box-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      padding-bottom: 14px;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .language-icon {
      width: 40px; height: 40px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      flex-shrink: 0;
    }
    .language-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
    }
    .language-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }
    .language-quote {
      background: var(--nu-light-gray);
      padding: 20px 22px;
      border-radius: 6px;
      border-left: 4px solid var(--nu-cyan);
      font-size: 0.98rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
      font-style: italic;
    }
    .language-quote strong {
      font-style: normal;
      color: var(--nu-blue);
      background: rgba(6,208,255,0.15);
      padding: 0 4px;
      border-radius: 2px;
    }

    /* ACTION STEPS */
    .action-steps {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 28px;
      margin-bottom: 20px;
    }
    .action-step {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .action-step:last-child { border-bottom: none; }
    .step-num {
      flex-shrink: 0;
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .step-body {
      flex: 1;
      font-size: 0.95rem;
      line-height: 1.55;
      color: var(--nu-dark-text);
    }
    .step-body strong { color: var(--nu-blue); }
    .step-owner {
      display: inline-block;
      margin-left: 8px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 3px;
      background: var(--nu-light-gray);
      color: var(--nu-navy);
      vertical-align: middle;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.1);
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 860px) {
      .option-grid { grid-template-columns: 1fr; }
      .pros-cons-row { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.25em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-page-title { font-size: 1.6rem; }
      .core-question-text { font-size: 1.15rem; }
      .rec-headline { font-size: 1.2rem; }
      .scenarios-table th, .scenarios-table td { padding: 10px 8px; font-size: 0.82rem; }
      .nu-content-area { padding: 30px 18px 50px; }
      .core-question, .recommendation, .option-card, .language-box, .action-steps, .scenarios-wrap { padding: 22px 18px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .option-card, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-ghost" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <div class="nu-eyebrow">Internal Working Brief</div>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-page-title">Clarify What "Lifetime" Means</div>
      <div class="nu-page-subtitle">Life of the structure — or life of the owner?</div>
    </div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L550,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TASK BANNER -->
      <div class="nu-task-banner">
        <div class="nu-task-icon">!</div>
        <div>
          <div class="nu-task-label">reMarkable Action Item</div>
          <div class="nu-task-body">Clarify what "lifetime" means — life of the structure, or life of the owner.</div>
          <div class="nu-task-meta">Captured on reMarkable · Routed for resolution · Owner: Aaron C. Norris</div>
        </div>
      </div>

      <!-- CORE QUESTION -->
      <section class="core-question">
        <div class="core-question-label">The Core Question</div>
        <div class="core-question-text">
          When a product or program is marketed as having a "lifetime" guarantee or "lifetime" benefit — whose lifetime are we measuring?
        </div>
        <div class="core-question-context">
          The word "lifetime" is one of the most abused terms in sales literature. Without a written definition, one side hears "forever" and the other hears "as long as reasonable." For FlexPro Armor, Samson Rope, Skylift bucket trucks, and Bay Shore Systems drill rigs — every product line Norris Utilities® touches — this phrase must mean exactly one thing, in writing, before a single quote goes out.
        </div>
      </section>

      <!-- THE TWO OPTIONS -->
      <h2 class="nu-section-title">The Two <span>Interpretations</span></h2>
      <div class="nu-section-rule"></div>

      <div class="option-grid">

        <!-- OPTION A -->
        <div class="option-card option-a">
          <span class="option-tag">Option A</span>
          <div class="option-title">Life of the Structure (Product)</div>
          <div class="option-definition">
            "Lifetime" equals the functional service life of the physical product. When the product is retired, scrapped, totaled, or rebuilt beyond recognition — the lifetime ends.
          </div>
          <div class="option-section">
            <div class="option-section-label">What This Covers</div>
            <ul class="option-list">
              <li>Original buyer and any subsequent owner, so long as the product itself is in service</li>
              <li>Ends when the bucket, cover, rope, truck, or rig is retired</li>
              <li>Transfers with the serial number, not the person</li>
            </ul>
          </div>
          <div class="pros-cons-row">
            <div class="pc-block">
              <div class="pc-label pros">Pros</div>
              <ul>
                <li>Objective: tied to serial number</li>
                <li>Adds resale value</li>
                <li>Industrial-standard language</li>
              </ul>
            </div>
            <div class="pc-block">
              <div class="pc-label cons">Cons</div>
              <ul>
                <li>Can outlive the company offering it</li>
                <li>Requires clear "retirement" criteria</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- OPTION B -->
        <div class="option-card option-b">
          <span class="option-tag">Option B</span>
          <div class="option-title">Life of the Owner (Original Purchaser)</div>
          <div class="option-definition">
            "Lifetime" equals the ownership tenure of the original buyer. When the product changes hands, is sold, traded, or the business entity is dissolved — the lifetime ends.
          </div>
          <div class="option-section">
            <div class="option-section-label">What This Covers</div>
            <ul class="option-list">
              <li>Original named buyer only (person or company)</li>
              <li>Non-transferable on resale, trade, or fleet disposition</li>
              <li>Ends when the registered buyer no longer owns the product</li>
            </ul>
          </div>
          <div class="pros-cons-row">
            <div class="pc-block">
              <div class="pc-label pros">Pros</div>
              <ul>
                <li>Predictable exposure</li>
                <li>Easier to administer</li>
                <li>Rewards loyal customers</li>
              </ul>
            </div>
            <div class="pc-block">
              <div class="pc-label cons">Cons</div>
              <ul>
                <li>Does not add resale value</li>
                <li>Can feel narrower than expected</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <!-- SCENARIOS -->
      <div class="scenarios-wrap">
        <h2 class="nu-section-title">Real-World <span>Scenarios</span></h2>
        <div class="nu-section-rule"></div>
        <table class="scenarios-table">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Under "Life of Structure"</th>
              <th>Under "Life of Owner"</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="scenario-col">Utility resells a truck with a FlexPro Armor cover to a smaller contractor.</td>
              <td class="answer-a">Covered — new owner inherits remaining coverage on that cover/serial.</td>
              <td class="answer-b">Not covered — coverage ended at sale of the original purchaser.</td>
            </tr>
            <tr>
              <td class="scenario-col">Original purchaser retires the bucket cover and orders a new one.</td>
              <td class="answer-a">Ends — the original structure is retired; a new cover starts a new lifetime.</td>
              <td class="answer-b">Ends on that cover; owner can purchase a new one under the same program.</td>
            </tr>
            <tr>
              <td class="scenario-col">A utility company is acquired or merged into a parent entity.</td>
              <td class="answer-a">Continues — serialized products retain coverage.</td>
              <td class="answer-b">Needs a rider — transfer-on-acquisition clause required in writing.</td>
            </tr>
            <tr>
              <td class="scenario-col">Bucket cover damaged and repaired in the field.</td>
              <td class="answer-a">Covered — repair extends the life of the structure.</td>
              <td class="answer-b">Covered — same owner retains rights.</td>
            </tr>
            <tr>
              <td class="scenario-col">Product is totaled, scrapped, or destroyed beyond repair.</td>
              <td class="answer-a">Ends — the structure no longer exists.</td>
              <td class="answer-b">Ends — there is nothing left to warrant.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- RECOMMENDATION -->
      <section class="recommendation">
        <div class="rec-label">Recommendation for Norris Utilities®</div>
        <div class="rec-headline">Adopt "Life of the Structure" — with a written retirement clause.</div>
        <div class="rec-body">
          For all Norris Utilities® product programs — FlexPro Armor, Samson Rope, Skylift, Bay Shore Systems — define "lifetime" as the <strong>functional service life of the original product</strong>, tied to the serial number or unit identifier. The program ends when the product is retired, scrapped, destroyed, or substantially rebuilt. This interpretation adds resale value, reflects how industrial equipment actually changes hands in the field, and matches how utilities already think about fleet assets. Pair it with a clear retirement clause and a simple transfer-on-sale process to prevent ambiguity.
        </div>
      </section>

      <!-- SUGGESTED LANGUAGE -->
      <h2 class="nu-section-title">Suggested <span>Written Language</span></h2>
      <div class="nu-section-rule"></div>

      <div class="language-box">
        <div class="language-box-header">
          <div class="language-icon">§</div>
          <div>
            <div class="language-title">Lifetime Definition Clause</div>
            <div class="language-sub">For insertion into warranty documents, line cards, and quotes</div>
          </div>
        </div>
        <div class="language-quote">
          For purposes of this program, <strong>"lifetime"</strong> refers to the functional service life of the physical product identified by its serial number or unit identifier. Coverage remains in effect for as long as the product remains in active service, and transfers with the product upon sale provided Norris Utilities®, LLC is notified in writing within thirty (30) days of transfer. <strong>Coverage terminates</strong> when the product is retired from service, scrapped, destroyed, totaled by insurance, or substantially rebuilt in a manner that alters its original identity. This clause applies to FlexPro Armor bucket covers and any other Norris Utilities® program designated as "lifetime" in writing.
        </div>
      </div>

      <!-- ACTION STEPS -->
      <h2 class="nu-section-title">Next <span>Steps</span></h2>
      <div class="nu-section-rule"></div>

      <div class="action-steps">

        <div class="action-step">
          <div class="step-num">1</div>
          <div class="step-body">
            <strong>Decide the interpretation.</strong> Confirm with Aaron whether Norris Utilities® will adopt "life of the structure" (recommended) or "life of the owner."
            <span class="step-owner">Aaron</span>
          </div>
        </div>

        <div class="action-step">
          <div class="step-num">2</div>
          <div class="step-body">
            <strong>Lock the written definition.</strong> Insert the clause above into the master warranty document, the FlexPro Armor line card, and all outbound quotes referencing "lifetime."
            <span class="step-owner">Aaron + CB</span>
          </div>
        </div>

        <div class="action-step">
          <div class="step-num">3</div>
          <div class="step-body">
            <strong>Audit existing marketing.</strong> Sweep the website, PDF line card, email templates, and any Boss Online Store references for the word "lifetime." Replace or footnote every instance to point at the defined clause.
            <span class="step-owner">CB + MK</span>
          </div>
        </div>

        <div class="action-step">
          <div class="step-num">4</div>
          <div class="step-body">
            <strong>Align vendors.</strong> Confirm Samson Rope, Skylift, and Bay Shore Systems use the same definition on their side; document any that differ so quotes flag the distinction clearly.
            <span class="step-owner">Aaron</span>
          </div>
        </div>

        <div class="action-step">
          <div class="step-num">5</div>
          <div class="step-body">
            <strong>File the decision.</strong> Record the ruling in the operations binder and the ops portal so every future quote, email, and product sheet references the same interpretation.
            <span class="step-owner">Aaron</span>
          </div>
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
    <div class="nu-footer-meta">
      Internal working brief · Clarify "lifetime" definition · Phoenix Icon® · 130 Inverness Plaza #210, Birmingham, AL 35242
    </div>
  </footer>

</body>
</html>