<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lifetime Definition Clarification — Norris Utilities®</title>
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
      --nu-warning-amber: #E8A317;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
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
      width: 70px;
      height: 70px;
      margin: 0 auto 12px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
    }
    .nu-logo-text {
      font-family: var(--font-primary);
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOCUMENT META */
    .doc-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      padding: 14px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 36px;
      font-size: 0.85rem;
      color: var(--nu-dark-text);
    }
    .doc-meta strong { color: var(--nu-blue); }
    .doc-tag {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 4px 12px;
      border-radius: 3px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 0.7rem;
    }

    /* PAGE TITLE */
    .page-title-wrap { margin-bottom: 32px; }
    .page-eyebrow {
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--nu-blue);
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.2;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .page-title .blue-word { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.15rem;
      color: var(--nu-body-text);
      max-width: 800px;
      line-height: 1.55;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 44px 0 18px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first {
      color: var(--nu-blue);
      margin-right: 8px;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* QUESTION CALLOUT */
    .question-callout {
      background: linear-gradient(135deg, #fffbf0 0%, #fff7e0 100%);
      border-left: 5px solid var(--nu-warning-amber);
      padding: 24px 28px;
      border-radius: 6px;
      margin: 24px 0;
      box-shadow: 0 2px 10px rgba(232, 163, 23, 0.08);
    }
    .question-callout-label {
      font-weight: 900;
      font-size: 0.8rem;
      color: var(--nu-warning-amber);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .question-callout-text {
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      line-height: 1.5;
    }

    /* OPTION CARDS */
    .options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin: 28px 0;
    }
    .option-card {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }
    .option-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
      border-color: var(--nu-cyan);
    }
    .option-card-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 16px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .option-letter {
      width: 44px; height: 44px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.4rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .option-title {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .option-meaning {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 14px;
      line-height: 1.6;
    }
    .option-list {
      list-style: none;
      padding: 0;
    }
    .option-list li {
      padding: 6px 0 6px 22px;
      font-size: 0.9rem;
      color: var(--nu-body-text);
      position: relative;
    }
    .option-list li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .option-pros { color: #1f7a1f; }
    .option-cons { color: #b03030; }
    .option-pros::before, .option-cons::before {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      display: block;
      margin: 14px 0 6px;
      text-transform: uppercase;
    }
    .option-pros::before { content: 'Strengths'; color: #1f7a1f; }
    .option-cons::before { content: 'Risks'; color: #b03030; }

    /* COMPARISON TABLE */
    .compare-table {
      width: 100%;
      border-collapse: collapse;
      margin: 24px 0;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      font-size: 0.92rem;
    }
    .compare-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .compare-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .compare-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .compare-table tr:last-child td { border-bottom: none; }
    .compare-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .compare-table .axis-cell {
      font-weight: 700;
      color: var(--nu-blue);
      width: 24%;
    }

    /* CONTEXT BOX */
    .context-box {
      background: linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%);
      border-radius: 8px;
      padding: 24px 28px;
      margin: 24px 0;
      border-left: 5px solid var(--nu-blue);
    }
    .context-box-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .context-box p { margin-bottom: 10px; line-height: 1.6; }
    .context-box p:last-child { margin-bottom: 0; }

    /* CHECKLIST */
    .decision-checklist {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      margin: 24px 0;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .check-item:last-child { border-bottom: none; }
    .check-box {
      width: 24px; height: 24px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .check-text {
      flex: 1;
      font-size: 0.97rem;
      line-height: 1.5;
    }
    .check-text strong { color: var(--nu-dark-text); }

    /* RECOMMENDATION BOX */
    .recommendation-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin: 32px 0;
      position: relative;
      overflow: hidden;
    }
    .recommendation-box::before {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
    }
    .recommendation-box * { position: relative; z-index: 1; }
    .rec-label {
      font-weight: 900;
      font-size: 0.85rem;
      color: var(--nu-cyan);
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .rec-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 14px;
      line-height: 1.3;
    }
    .rec-body {
      font-size: 1rem;
      line-height: 1.65;
      color: rgba(255,255,255,0.9);
      margin-bottom: 14px;
    }
    .rec-body:last-child { margin-bottom: 0; }
    .rec-body strong { color: var(--nu-cyan); }

    /* DRAFT LANGUAGE */
    .draft-language {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 26px;
      margin: 20px 0;
      border-radius: 4px;
      font-style: italic;
      color: var(--nu-dark-text);
      font-size: 0.97rem;
      line-height: 1.7;
    }
    .draft-language strong {
      font-style: normal;
      color: var(--nu-blue);
      display: block;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    /* NEXT STEPS */
    .next-steps-list {
      list-style: none;
      counter-reset: step-counter;
      padding: 0;
      margin: 16px 0;
    }
    .next-steps-list li {
      counter-increment: step-counter;
      padding: 16px 20px 16px 60px;
      margin-bottom: 10px;
      background: var(--nu-white);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      position: relative;
      box-shadow: 0 1px 6px rgba(0,0,0,0.05);
      font-size: 0.97rem;
      line-height: 1.5;
    }
    .next-steps-list li::before {
      content: counter(step-counter);
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
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

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .nu-footer-contact a:hover { color: var(--nu-white); }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 18px auto;
      opacity: 0.4;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.1rem; }
      .container { padding: 40px 22px; }
      .page-title { font-size: 1.7rem; }
      .options-grid { grid-template-columns: 1fr; }
      .compare-table { font-size: 0.85rem; }
      .compare-table th, .compare-table td { padding: 10px 12px; }
      .recommendation-box { padding: 24px; }
      .rec-title { font-size: 1.25rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .option-card, .next-steps-list li { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- DOCUMENT META -->
      <div class="doc-meta">
        <div><span class="doc-tag">Internal Decision Brief</span></div>
        <div><strong>Source:</strong> reMarkable Action Item</div>
        <div><strong>Date:</strong> April 21, 2026</div>
        <div><strong>Owner:</strong> Aaron C. Norris</div>
      </div>

      <!-- PAGE TITLE -->
      <div class="page-title-wrap">
        <div class="page-eyebrow">Warranty &amp; Guarantee Language</div>
        <h1 class="page-title"><span class="blue-word">Clarify</span> What "Lifetime" Means</h1>
        <p class="page-subtitle">
          Resolve once and for all whether the FlexPro Armor "Lifetime" guarantee is
          tied to the <strong>life of the structure</strong> (the bucket the cover protects)
          or the <strong>life of the original owner</strong>. This decision shapes every
          warranty claim, every quote, and every customer conversation going forward.
        </p>
      </div>

      <!-- THE QUESTION -->
      <div class="question-callout">
        <div class="question-callout-label">The Open Question</div>
        <div class="question-callout-text">
          When a Norris Utilities® customer hears "Lifetime guarantee" on a FlexPro Armor
          bucket cover — whose lifetime are we promising? The bucket's, or the buyer's?
        </div>
      </div>

      <!-- WHY THIS MATTERS -->
      <h2 class="nu-section-title"><span class="first">Why</span><span class="rest">This Decision Matters</span></h2>

      <div class="context-box">
        <div class="context-box-title">Context</div>
        <p>
          FlexPro Armor is handmade in the USA at a 50% margin. The product is built
          to outlast the bucket itself — but our marketing language has used "Lifetime"
          without defining the term in writing. Coy Crosby at Dominion Energy, Bill Kugler
          at Terex, and Jared Lemoine at Irby will all eventually ask the same question:
          <em>"What exactly does Lifetime cover?"</em>
        </p>
        <p>
          Until this is locked down, every salesperson (currently just Aaron) is making
          a different unspoken promise. Caroline Butler cannot answer customer questions
          consistently, and any future dealer or distributor channel needs the answer
          printed on a quote sheet — not improvised on a phone call.
        </p>
      </div>

      <!-- THE TWO OPTIONS -->
      <h2 class="nu-section-title"><span class="first">The</span><span class="rest">Two Definitions on the Table</span></h2>

      <div class="options-grid">

        <!-- OPTION A -->
        <div class="option-card">
          <div class="option-card-header">
            <div class="option-letter">A</div>
            <div class="option-title">Life of the Structure</div>
          </div>
          <div class="option-meaning">
            "Lifetime" = as long as the bucket the cover was fitted to remains in service.
            When the bucket is retired, scrapped, or replaced, the warranty ends.
          </div>
          <ul class="option-list">
            <li class="option-pros"></li>
            <li>Warranty bound to a specific, identifiable physical asset (bucket serial / fleet number).</li>
            <li>Naturally caps Norris Utilities® exposure to a finite useful-life window (typically 10–20 years).</li>
            <li>Transfers cleanly when the bucket is sold with the truck — protects resale value.</li>
            <li>Aligns with how utility fleets actually account for depreciable equipment.</li>
            <li class="option-cons"></li>
            <li>Requires bucket identification at point of sale to enforce.</li>
            <li>"Structure retired" can be argued — refurbished buckets create gray area.</li>
          </ul>
        </div>

        <!-- OPTION B -->
        <div class="option-card">
          <div class="option-card-header">
            <div class="option-letter">B</div>
            <div class="option-title">Life of the Original Owner</div>
          </div>
          <div class="option-meaning">
            "Lifetime" = as long as the original purchasing customer (utility, contractor,
            or individual) owns and uses the cover, regardless of which bucket it ends up on.
          </div>
          <ul class="option-list">
            <li class="option-pros"></li>
            <li>Stronger marketing claim — "buy once, covered forever."</li>
            <li>Easier for Caroline Butler to explain to customers in one sentence.</li>
            <li>Encourages loyalty: the customer keeps the cover when they upgrade trucks.</li>
            <li class="option-cons"></li>
            <li>Open-ended exposure for Norris Utilities® — no natural sunset.</li>
            <li>"Owner" is ambiguous when the buyer is a utility (Dominion, EPB) — does it follow the company forever, or expire on transfer?</li>
            <li>Hard to enforce when covers are moved between buckets, fleets, or contractors.</li>
          </ul>
        </div>

      </div>

      <!-- COMPARISON TABLE -->
      <h2 class="nu-section-title"><span class="first">Side-by-Side</span><span class="rest">Comparison</span></h2>

      <table class="compare-table">
        <thead>
          <tr>
            <th>Decision Axis</th>
            <th>A — Life of Structure</th>
            <th>B — Life of Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="axis-cell">Warranty trigger</td>
            <td>Bucket identification at claim</td>
            <td>Proof of original purchase</td>
          </tr>
          <tr>
            <td class="axis-cell">Typical duration</td>
            <td>10–20 years (fleet life)</td>
            <td>Indefinite — no natural cap</td>
          </tr>
          <tr>
            <td class="axis-cell">Norris Utilities® exposure</td>
            <td>Finite, predictable</td>
            <td>Open-ended</td>
          </tr>
          <tr>
            <td class="axis-cell">Transferable?</td>
            <td>Yes — follows the bucket</td>
            <td>No — ends if cover sold or transferred</td>
          </tr>
          <tr>
            <td class="axis-cell">Marketing strength</td>
            <td>Honest, defensible</td>
            <td>Bold, sticky in the mind</td>
          </tr>
          <tr>
            <td class="axis-cell">Field enforcement</td>
            <td>Clear — bucket exists or it doesn't</td>
            <td>Murky — utilities reorganize, sell, merge</td>
          </tr>
          <tr>
            <td class="axis-cell">Industry precedent</td>
            <td>Matches OEM bucket warranties</td>
            <td>Matches consumer cookware (Calphalon, Le Creuset)</td>
          </tr>
        </tbody>
      </table>

      <!-- RECOMMENDATION -->
      <div class="recommendation-box">
        <div class="rec-label">Recommended Position</div>
        <div class="rec-title">Define "Lifetime" as Life of the Structure — with a clean transfer clause.</div>
        <div class="rec-body">
          FlexPro Armor is engineered to outlast the bucket. Tying the warranty to the
          <strong>structure</strong> matches how utilities account for capital equipment,
          gives Norris Utilities® a finite and defensible exposure window, and avoids
          messy "who owns it now" debates when fleets get sold, leased, or reorganized.
        </div>
        <div class="rec-body">
          Add one sentence: <strong>"The Lifetime guarantee transfers with the bucket
          to the next owner at no charge."</strong> That keeps the marketing punch of
          "Lifetime" while bounding the promise to a real, identifiable asset.
        </div>
      </div>

      <!-- DRAFT WARRANTY LANGUAGE -->
      <h2 class="nu-section-title"><span class="first">Draft</span><span class="rest">Warranty Language for Review</span></h2>

      <div class="draft-language">
        <strong>Proposed Warranty Statement</strong>
        "Norris Utilities® guarantees every FlexPro Armor bucket cover for the operational
        life of the bucket it is fitted to. If the cover fails under normal utility
        service while the bucket remains in use, we will repair or replace it at no
        charge. The Lifetime guarantee transfers with the bucket to subsequent owners
        without re-registration. Coverage ends when the bucket is permanently retired,
        scrapped, or removed from service."
      </div>

      <div class="draft-language">
        <strong>Plain-English Customer Explanation (for Caroline Butler)</strong>
        "Our Lifetime guarantee means we cover the FlexPro Armor cover for as long as
        your bucket is on the truck and working. If you sell the truck, the warranty
        goes with it — the next owner is covered too. If the bucket gets retired or
        scrapped, the warranty retires with it. Simple as that."
      </div>

      <!-- DECISION CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Aaron's</span><span class="rest">Decision Checklist</span></h2>

      <div class="decision-checklist">
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Confirm Option A (Life of Structure)</strong> as the official Norris Utilities® position — or override with reasoning.
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Approve the draft warranty language</strong> above, or mark edits.
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Decide on transferability:</strong> automatic with bucket sale (recommended), or requires written notice to Norris Utilities®?
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Define "permanently retired":</strong> what proof do we accept? Photo of scrapped bucket, fleet disposal record, or customer attestation?
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Refurbished buckets:</strong> if a customer rebuilds a bucket and reuses the cover, does the original warranty continue or restart?
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Where the language lives:</strong> add to FlexPro Armor spec sheet, quote template, invoice footer, and ops.norrisutilities.com warranty page.
          </div>
        </div>
        <div class="check-item">
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Brief Caroline Butler</strong> with the one-sentence customer explanation for phone and email use.
          </div>
        </div>
      </div>

      <!-- EDGE CASES -->
      <h2 class="nu-section-title"><span class="first">Edge</span><span class="rest">Cases to Decide Now</span></h2>

      <div class="context-box">
        <div class="context-box-title">Scenarios that will come up</div>
        <p>
          <strong>1. Utility sells a fleet of trucks.</strong> Recommendation: warranty
          transfers automatically with each bucket. No paperwork required.
        </p>
        <p>
          <strong>2. Cover is moved from a retired bucket to a new bucket.</strong>
          Recommendation: warranty does NOT transfer to the new bucket — the original
          structure has been retired. Customer is offered a replacement-fit discount.
        </p>
        <p>
          <strong>3. Bucket is rebuilt or reconditioned.</strong> Recommendation: original
          warranty continues — the structure is still the same identifiable bucket.
        </p>
        <p>
          <strong>4. Damage from misuse, abrasion outside normal service, or modification.</strong>
          Excluded — same as today. "Normal utility service" is the test.
        </p>
        <p>
          <strong>5. Customer cannot prove original purchase.</strong> Norris Utilities®
          retains FlexPro Armor sales records by SKU and ship-to. We can verify on our end.
        </p>
      </div>

      <!-- NEXT STEPS -->
      <h2 class="nu-section-title"><span class="first">Next</span><span class="rest">Steps</span></h2>

      <ol class="next-steps-list">
        <li>Aaron reviews this brief and locks the definition (Option A recommended).</li>
        <li>Approved warranty language is added to the FlexPro Armor spec sheet and quote template.</li>
        <li>Caroline Butler is briefed with the plain-English explanation for customer calls.</li>
        <li>Warranty page is published to ops.norrisutilities.com under the FlexPro Armor section.</li>
        <li>One-line warranty footer is added to all FlexPro Armor invoices going forward.</li>
        <li>Existing customers (Coy Crosby / Dominion Energy, and the March 20 shipment recipients) receive a brief written confirmation of the warranty terms with their next invoice.</li>
        <li>This action item is closed on the reMarkable and logged in the master tracker.</li>
      </ol>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong> | Founder &amp; CEO<br>
      Norris Utilities®, LLC | Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>