<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lifetime Warranty Clarification — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

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
      --nu-red: #C53030;
      --nu-green: #2F855A;
      --nu-amber: #D69E2E;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }

    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.6;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    .nu-doc-badge {
      display: inline-block;
      margin-top: 20px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-white);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      border-radius: 2px;
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
      width: 65%;
      max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      z-index: 0;
    }
    .nu-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* DOCUMENT TITLE */
    .doc-title-block {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 30px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .doc-title-eyebrow {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .doc-title .highlight {
      color: var(--nu-blue);
    }
    .doc-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 760px;
      margin: 0 auto;
    }

    /* META ROW */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 32px;
      margin-top: 24px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .doc-meta-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .doc-meta-label {
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.75rem;
    }

    /* SECTION HEADER */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 8px;
      color: var(--nu-dark-text);
    }
    .nu-section-title .first-word {
      color: var(--nu-blue);
    }
    .nu-section-lead {
      color: var(--nu-body-text);
      margin-bottom: 24px;
      font-size: 1rem;
    }

    section.block {
      margin-bottom: 48px;
    }

    /* QUESTION CALLOUT */
    .question-callout {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 8px;
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 8px 28px rgba(0,0,51,0.18);
    }
    .question-callout::before {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 50%; height: 180%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.25) 0%, transparent 70%);
    }
    .question-callout > * { position: relative; }
    .question-label {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
    }
    .question-text {
      font-size: 1.35rem;
      font-weight: 700;
      line-height: 1.4;
      color: var(--nu-white);
    }
    .question-subtext {
      margin-top: 10px;
      font-size: 0.95rem;
      color: rgba(255,255,255,0.85);
      font-weight: 400;
    }

    /* TWO COLUMN OPTIONS */
    .options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 16px;
    }
    .option-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      border: 2px solid var(--nu-medium-gray);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }
    .option-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 28px rgba(0,0,0,0.08);
    }
    .option-card.option-a {
      border-top: 6px solid var(--nu-blue);
    }
    .option-card.option-b {
      border-top: 6px solid var(--nu-cyan);
    }
    .option-label {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 4px 12px;
      border-radius: 2px;
      margin-bottom: 12px;
    }
    .option-a .option-label {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .option-b .option-label {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .option-heading {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .option-tag {
      font-size: 0.9rem;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 14px;
    }
    .option-desc {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 16px;
    }
    .option-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .option-list li {
      position: relative;
      padding: 6px 0 6px 22px;
      font-size: 0.92rem;
      color: var(--nu-body-text);
      border-bottom: 1px solid var(--nu-light-gray);
    }
    .option-list li:last-child { border-bottom: none; }
    .option-list li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.1rem;
      line-height: 1.4;
    }

    /* IMPLICATIONS TABLE */
    .implications-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .implications-table thead {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .implications-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .implications-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .implications-table tr:last-child td { border-bottom: none; }
    .implications-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .implications-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 26%;
    }
    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.03em;
    }
    .pill-structure {
      background: rgba(0,0,255,0.1);
      color: var(--nu-blue);
    }
    .pill-owner {
      background: rgba(6,208,255,0.18);
      color: #0077A8;
    }

    /* RECOMMENDATION */
    .recommendation-box {
      background: var(--nu-white);
      border-left: 6px solid var(--nu-blue);
      padding: 28px 32px;
      border-radius: 4px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .recommendation-label {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .recommendation-heading {
      font-size: 1.3rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .recommendation-text {
      font-size: 1rem;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    .recommendation-text:last-child { margin-bottom: 0; }
    .recommendation-text strong {
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* NEXT STEPS */
    .steps-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .step-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      text-align: left;
      position: relative;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .step-num {
      position: absolute;
      top: -14px;
      left: 22px;
      width: 32px;
      height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    }
    .step-heading {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      margin-top: 6px;
    }
    .step-text {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* CONTEXT NOTE */
    .context-note {
      background: #FFF8E1;
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 4px;
      margin-bottom: 32px;
    }
    .context-note-heading {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 0.95rem;
    }
    .context-note-text {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 16px;
      opacity: 0.6;
    }

    /* RESPONSIVE */
    @media (max-width: 860px) {
      .options-grid { grid-template-columns: 1fr; }
      .steps-grid { grid-template-columns: 1fr; }
      .doc-title { font-size: 1.8rem; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 44px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-inner { padding: 40px 20px 60px; }
      .doc-title { font-size: 1.55rem; }
      .doc-meta { gap: 18px; flex-direction: column; align-items: center; }
      .question-callout { padding: 22px 22px; }
      .question-text { font-size: 1.1rem; }
      .option-card { padding: 22px; }
      .implications-table th, .implications-table td { padding: 10px 12px; font-size: 0.85rem; }
      .implications-table td:first-child { width: 38%; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .option-card, .recommendation-box, .step-card { box-shadow: none; border: 1px solid #ccc; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
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
    <div class="nu-doc-badge">Internal Policy Decision</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-inner">

      <!-- DOCUMENT TITLE -->
      <div class="doc-title-block">
        <div class="doc-title-eyebrow">reMarkable Action Item · Policy Clarification</div>
        <h1 class="doc-title">Clarify What <span class="highlight">"Lifetime"</span> Means</h1>
        <p class="doc-subtitle">Life of the structure, or life of the original owner? This decision defines our warranty scope, transferability, and long-term obligation on FlexPro Armor bucket covers.</p>
        <div class="doc-meta">
          <div class="doc-meta-item">
            <span class="doc-meta-label">Owner:</span>
            <span>Aaron C. Norris</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Captured:</span>
            <span>reMarkable — 2026-04-23</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Status:</span>
            <span>Open — Decision Required</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Affects:</span>
            <span>FlexPro Armor warranty language</span>
          </div>
        </div>
      </div>

      <!-- CONTEXT NOTE -->
      <div class="context-note">
        <div class="context-note-heading">Why this matters right now</div>
        <div class="context-note-text">"Lifetime" currently appears in FlexPro Armor marketing and quote language without a defined meaning. Until we lock a definition, every quote, spec sheet, and distributor conversation carries ambiguous risk — and a future claim could be decided against whichever interpretation is less favorable to Norris Utilities®.</div>
      </div>

      <!-- THE QUESTION -->
      <div class="question-callout">
        <div class="question-label">The Question to Decide</div>
        <div class="question-text">When we say FlexPro Armor is backed by a "lifetime" guarantee — are we talking about the lifetime of the <u>structure</u> (the bucket cover product itself), or the lifetime of the <u>original owner</u> who purchased it?</div>
        <div class="question-subtext">The two definitions are not interchangeable. Each creates a different promise, a different legal obligation, and a different cost model.</div>
      </div>

      <!-- TWO OPTIONS -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first-word">Two</span> interpretations on the table</h2>
        <p class="nu-section-lead">Both are defensible. Both are used in industry. They are not the same promise.</p>

        <div class="options-grid">

          <div class="option-card option-a">
            <span class="option-label">Option A</span>
            <div class="option-heading">Life of the Structure</div>
            <div class="option-tag">Product-based · Transferable</div>
            <div class="option-desc">The warranty runs as long as the FlexPro Armor cover itself remains in service. If the cover is sold with the truck, the coverage travels with it.</div>
            <ul class="option-list">
              <li>Coverage tied to the serial number on the cover</li>
              <li>Transfers to subsequent owners automatically</li>
              <li>Ends when the cover is retired, destroyed, or modified</li>
              <li>Stronger marketing angle — "built to last as long as the product does"</li>
              <li>Higher long-tail exposure on claims</li>
            </ul>
          </div>

          <div class="option-card option-b">
            <span class="option-label">Option B</span>
            <div class="option-heading">Life of the Original Owner</div>
            <div class="option-tag">Buyer-based · Non-transferable</div>
            <div class="option-desc">The warranty belongs to the person or company that bought the cover new from Norris Utilities®. When that owner sells the truck or the cover, the warranty ends.</div>
            <ul class="option-list">
              <li>Coverage tied to the original invoice and buyer of record</li>
              <li>Does not transfer on resale of truck or equipment</li>
              <li>Ends on sale, fleet disposal, or business dissolution</li>
              <li>Tighter risk window — matches most industry "lifetime" warranties</li>
              <li>Simpler to administer and audit</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- IMPLICATIONS -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first-word">What</span> each choice changes</h2>
        <p class="nu-section-lead">Side-by-side impact on pricing, support, marketing, and legal exposure.</p>

        <table class="implications-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Life of Structure</th>
              <th>Life of Original Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Who is covered?</td>
              <td><span class="pill pill-structure">Structure</span> Any current holder of the cover</td>
              <td><span class="pill pill-owner">Owner</span> Only the buyer on the original invoice</td>
            </tr>
            <tr>
              <td>Transferable on resale?</td>
              <td>Yes — travels with the product</td>
              <td>No — warranty ends at resale</td>
            </tr>
            <tr>
              <td>Claim duration</td>
              <td>Open-ended until the cover is retired</td>
              <td>Capped by owner's active use period</td>
            </tr>
            <tr>
              <td>Proof required</td>
              <td>Serial number on the cover</td>
              <td>Original invoice + buyer identity</td>
            </tr>
            <tr>
              <td>Support load</td>
              <td>Higher — any downstream owner can call</td>
              <td>Lower — known customer list only</td>
            </tr>
            <tr>
              <td>Pricing implication</td>
              <td>Premium position — justifies 50% margin</td>
              <td>Still premium — aligns with industry norm</td>
            </tr>
            <tr>
              <td>Resale value to customer</td>
              <td>Higher — warranty adds to used-truck value</td>
              <td>Neutral — warranty does not transfer</td>
            </tr>
            <tr>
              <td>Legal exposure</td>
              <td>Broader — more potential claimants</td>
              <td>Narrower — defined claimant pool</td>
            </tr>
            <tr>
              <td>Administrative burden</td>
              <td>Requires serial tracking and transfer logs</td>
              <td>Requires invoice-matched claim check only</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- RECOMMENDATION / PATH FORWARD -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first-word">Path</span> to a locked-in definition</h2>
        <p class="nu-section-lead">Aaron makes the call. Once set, the definition flows into every quote, spec sheet, and marketing asset.</p>

        <div class="recommendation-box">
          <div class="recommendation-label">Recommendation</div>
          <div class="recommendation-heading">Define "lifetime" in writing before the next FlexPro Armor quote goes out.</div>
          <p class="recommendation-text">Whichever direction Aaron chooses, the priority is <strong>clarity on paper</strong>. An undefined "lifetime" promise is the single biggest warranty-language risk on FlexPro Armor today. A one-sentence definition — added to the spec sheet footer, the quote terms, and the website product page — closes the ambiguity for every downstream conversation.</p>
          <p class="recommendation-text">Industry precedent leans toward <strong>life of the original owner</strong>: it is what most premium equipment manufacturers mean when they say "lifetime," it keeps the claimant pool defined, and it matches the 50% margin structure without creating unbounded tail risk. That said, <strong>life of the structure</strong> is a stronger marketing story if Aaron wants to differentiate aggressively against the 24×48 and 24×34 competitors.</p>
          <p class="recommendation-text">Either choice is fine. No choice is not.</p>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="block">
        <h2 class="nu-section-title"><span class="first-word">Next</span> three concrete steps</h2>
        <p class="nu-section-lead">Move from ambiguity to a documented, defensible policy.</p>

        <div class="steps-grid">
          <div class="step-card">
            <div class="step-num">1</div>
            <div class="step-heading">Pick the definition</div>
            <div class="step-text">Aaron decides: structure-based or owner-based. Record the decision in open-items and the master tracker with today's date.</div>
          </div>
          <div class="step-card">
            <div class="step-num">2</div>
            <div class="step-heading">Write the clause</div>
            <div class="step-text">One sentence, plain English. Example: "FlexPro Armor carries a lifetime warranty against manufacturing defects for the original purchaser, non-transferable."</div>
          </div>
          <div class="step-card">
            <div class="step-num">3</div>
            <div class="step-heading">Propagate everywhere</div>
            <div class="step-text">Update the spec sheet footer, quote terms template, website product page, and dealer/distributor sell sheets. Archive old versions.</div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-divider"></div>
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