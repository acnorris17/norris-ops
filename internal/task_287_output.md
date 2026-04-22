<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lifetime Warranty Clarification — FlexPro Armor — Norris Utilities®</title>
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
      --nu-warn: #C9582C;
      --nu-success: #1F7A3A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 75%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-title {
      margin-top: 24px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.35em;
      color: rgba(255,255,255,0.85);
      text-transform: uppercase;
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
      top: 8%; left: 50%;
      transform: translateX(-50%);
      width: 65vw; max-width: 800px; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,51,204,0.045) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 980px;
      margin: 0 auto;
      padding: 56px 32px 72px;
    }

    /* DOCUMENT META */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 28px;
      padding: 16px 22px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 36px;
      font-size: 0.9rem;
    }
    .doc-meta strong { color: var(--nu-blue); font-weight: 700; }
    .doc-meta span { color: var(--nu-dark-text); }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin: 40px 0 14px;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .nu-section-title .accent { color: var(--nu-blue); }
    .nu-section-sub {
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin: 26px 0 10px;
    }

    p { margin-bottom: 14px; color: var(--nu-body-text); }
    p.lead {
      font-size: 1.08rem;
      color: var(--nu-dark-text);
      margin-bottom: 22px;
    }

    /* CALLOUT — THE QUESTION */
    .question-box {
      background: linear-gradient(135deg, #FFF8E6 0%, #FFEFCC 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 4px;
      margin: 28px 0 36px;
    }
    .question-box .label {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #8a6a1a;
      margin-bottom: 8px;
    }
    .question-box .text {
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      line-height: 1.4;
    }

    /* COMPARISON TABLE */
    .compare {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin: 24px 0 32px;
    }
    .compare .opt {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      position: relative;
    }
    .compare .opt h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .compare .opt .sub {
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    .compare .opt p { font-size: 0.93rem; margin-bottom: 10px; }
    .compare .opt ul { padding-left: 18px; margin: 8px 0 4px; }
    .compare .opt li { font-size: 0.92rem; margin-bottom: 6px; }
    .compare .opt .stamp {
      position: absolute;
      top: -10px; right: 14px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      padding: 4px 10px;
      border-radius: 3px;
      text-transform: uppercase;
    }
    .compare .opt.recommended { border-color: var(--nu-blue); border-width: 2px; }
    .compare .opt.recommended .stamp { background: var(--nu-blue); }

    /* DEFINITIONS TABLE */
    table.def {
      width: 100%;
      border-collapse: collapse;
      margin: 18px 0 28px;
      font-size: 0.93rem;
      background: var(--nu-white);
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    table.def th, table.def td {
      padding: 12px 14px;
      text-align: left;
      vertical-align: top;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    table.def th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    table.def tr:last-child td { border-bottom: none; }
    table.def tr:nth-child(even) td { background: var(--nu-light-gray); }
    table.def td.term { font-weight: 700; color: var(--nu-blue); white-space: nowrap; }

    /* RECOMMENDATION BLOCK */
    .recommend {
      background: linear-gradient(135deg, #E8F4FF 0%, #D4ECFF 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 8px;
      padding: 24px 28px 26px;
      margin: 30px 0 36px;
    }
    .recommend .label {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .recommend h3 {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .recommend p { margin-bottom: 10px; font-size: 0.97rem; }
    .recommend .why {
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px dashed rgba(0,51,204,0.35);
    }
    .recommend .why strong { color: var(--nu-blue); font-weight: 700; }

    /* DRAFT LANGUAGE BLOCK */
    .draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 22px 26px;
      margin: 18px 0 28px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 0.97rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .draft p { margin-bottom: 12px; color: var(--nu-dark-text); }
    .draft .head {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 12px;
    }

    /* OPEN QUESTIONS */
    ol.questions {
      counter-reset: q;
      list-style: none;
      padding: 0;
      margin: 16px 0 28px;
    }
    ol.questions li {
      counter-increment: q;
      position: relative;
      padding: 14px 18px 14px 56px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 0.95rem;
    }
    ol.questions li::before {
      content: counter(q);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 30px; height: 30px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ol.questions li strong { color: var(--nu-dark-text); }

    /* DECISION ROW */
    .decision-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin: 18px 0 8px;
    }
    .decision-row .box {
      border: 2px dashed var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px;
      text-align: center;
    }
    .decision-row .box .lbl {
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .decision-row .box .checkline {
      margin-top: 14px;
      border-bottom: 1px solid var(--nu-dark-text);
      height: 24px;
    }

    /* NEXT STEPS */
    ul.steps {
      list-style: none;
      padding: 0;
      margin: 14px 0 8px;
    }
    ul.steps li {
      padding: 10px 14px 10px 38px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    ul.steps li:last-child { border-bottom: none; }
    ul.steps li::before {
      content: '▸';
      position: absolute;
      left: 14px; top: 10px;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
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
    .nu-footer-contact { font-size: 0.92rem; line-height: 1.85; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 14px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 22px 70px; min-height: 250px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-wrap { padding: 40px 20px 56px; }
      .compare { grid-template-columns: 1fr; }
      .decision-row { grid-template-columns: 1fr; }
      .nu-section-title { font-size: 1.3rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .recommend, .question-box, .draft { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-title">Internal Action Memo · Warranty Language</div>
    </div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <div class="doc-meta">
        <span><strong>Source:</strong> reMarkable action item, captured 2026-04-22</span>
        <span><strong>Owner:</strong> Aaron C. Norris</span>
        <span><strong>Product:</strong> FlexPro Armor Bucket Covers</span>
        <span><strong>Status:</strong> Decision required</span>
      </div>

      <h1 class="nu-section-title"><span class="accent">Clarify</span> What "Lifetime" Means</h1>
      <p class="lead">FlexPro Armor bucket covers are marketed with a "lifetime" warranty. The word is doing a lot of work and it is not specific enough to defend in a claim or against a competitor's fine print. This memo lays out the question, the realistic options, the recommended definition, and the language to put on quotes, invoices, and the website.</p>

      <div class="question-box">
        <div class="label">The question on the page</div>
        <div class="text">When we say "lifetime" warranty on FlexPro Armor — do we mean the life of the structure (the bucket truck / aerial device the cover is mounted on), or the life of the original purchaser / owner?</div>
      </div>

      <h2 class="nu-section-title"><span class="accent">Why</span> This Matters Now</h2>
      <p>Three forces are pushing this from "later" to "this week":</p>
      <ul style="padding-left: 22px; margin-bottom: 22px;">
        <li style="margin-bottom: 6px;">Customers (Dominion, AEP Roanoke, Chain Electric) are signing POs with the word "lifetime" on the quote — we need to know what we're promising before they file a claim.</li>
        <li style="margin-bottom: 6px;">Caroline (CB) is preparing invoice-ready writesets and needs the warranty line item locked.</li>
        <li style="margin-bottom: 6px;">The line card and product page at NorrisUtilities.com both reference "lifetime" without defining it.</li>
      </ul>

      <h2 class="nu-section-title"><span class="accent">Two</span> Interpretations on the Table</h2>
      <div class="compare">
        <div class="opt">
          <span class="stamp">Option A</span>
          <h3>Life of the Structure</h3>
          <div class="sub">Tied to the asset</div>
          <p>The warranty runs as long as the bucket truck or aerial device the cover was originally fitted to remains in service.</p>
          <ul>
            <li>Transfers with the truck if it's sold.</li>
            <li>Ends when the truck is retired, totaled, or scrapped.</li>
            <li>Common in heavy-equipment OEM language.</li>
            <li>Easier to defend — physical asset is verifiable.</li>
          </ul>
        </div>
        <div class="opt recommended">
          <span class="stamp">Option B · Recommended</span>
          <h3>Life of the Original Owner</h3>
          <div class="sub">Tied to the buyer</div>
          <p>The warranty runs as long as the original purchasing entity (the utility, contractor, or fleet owner that bought the cover) continues to own and operate the cover.</p>
          <ul>
            <li>Non-transferable — does not pass to a new buyer.</li>
            <li>Ends if the cover is sold, gifted, or transferred to a third party.</li>
            <li>Standard for premium consumer/commercial soft goods.</li>
            <li>Protects us from secondhand-market claims we can't verify.</li>
          </ul>
        </div>
      </div>

      <h2 class="nu-section-title"><span class="accent">Definitions</span> We Need on Paper</h2>
      <p>Whichever option Aaron chooses, these terms must be defined the same way everywhere — quote, invoice, website, line card, claim form.</p>
      <table class="def">
        <thead>
          <tr>
            <th style="width: 28%;">Term</th>
            <th>Working Definition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="term">Lifetime</td>
            <td>The duration the original purchaser of record continues to own and operate the FlexPro Armor cover for its intended commercial use.</td>
          </tr>
          <tr>
            <td class="term">Original Purchaser</td>
            <td>The legal entity named on the Norris Utilities® invoice at time of sale. Not transferable to subsequent owners or to assets resold on the secondary market.</td>
          </tr>
          <tr>
            <td class="term">Intended Use</td>
            <td>Daily field service on a utility bucket truck, aerial lift, or comparable insulated boom platform. Excludes recreational, demolition, or off-label use.</td>
          </tr>
          <tr>
            <td class="term">Covered Defects</td>
            <td>Failure of seams, stitching, snaps, grommets, mounting hardware, and core fabric integrity under normal field conditions.</td>
          </tr>
          <tr>
            <td class="term">Excluded</td>
            <td>Cosmetic fading, abrasion from contact with energized lines, fire/chemical damage, modifications by third parties, and damage from improper installation.</td>
          </tr>
        </tbody>
      </table>

      <h2 class="nu-section-title"><span class="accent">Recommendation</span></h2>
      <div class="recommend">
        <div class="label">Aaron's call to make — drafted position</div>
        <h3>Define "lifetime" as the life of the original purchaser of record — non-transferable.</h3>
        <p>This matches how Samson Rope, premium tool brands, and most commercial soft-goods manufacturers handle the same word. It protects Norris Utilities® from claims on covers that have changed hands without our knowledge, and it keeps the language defensible.</p>
        <div class="why">
          <p><strong>Why not "life of the structure":</strong> bucket trucks routinely get resold between contractors, refurbished, or transferred between fleet yards. We would have no record of who currently owns the asset, what use it has been put to, or whether the cover was ever reinstalled correctly after a refurb. That is an open-ended liability.</p>
          <p><strong>Why not silent:</strong> leaving "lifetime" undefined invites the customer's interpretation to govern at claim time. That is the worst position — the broadest possible promise with no documentation to push back.</p>
        </div>
      </div>

      <h2 class="nu-section-title"><span class="accent">Draft</span> Language for Quotes &amp; Invoices</h2>
      <p>Once Aaron approves Option A or B, this paragraph drops onto every FlexPro Armor quote, invoice, and the product page. Drafted here against the recommended Option B.</p>

      <div class="draft">
        <div class="head">FlexPro Armor — Lifetime Warranty (Original Purchaser)</div>
        <p>Norris Utilities® warrants each FlexPro Armor bucket cover against defects in materials and workmanship for the lifetime of the original purchaser of record, as identified on the Norris Utilities® invoice at the time of sale.</p>
        <p>This warranty covers seams, stitching, snaps, grommets, mounting hardware, and core fabric integrity under normal commercial field use on a utility bucket truck, aerial lift, or comparable insulated boom platform. It is non-transferable and ends if the cover is sold, gifted, or otherwise transferred to a party other than the original purchaser.</p>
        <p>Excluded: cosmetic fading or abrasion from normal use, damage from contact with energized conductors, fire or chemical exposure, third-party modifications, and damage caused by improper installation. To file a claim, contact Norris Utilities® at 205-500-1343 or acnorris@norrisutilities.com with the original invoice number and photographs of the defect.</p>
      </div>

      <h2 class="nu-section-title"><span class="accent">Open</span> Questions for Aaron</h2>
      <ol class="questions">
        <li><strong>Option A or B?</strong> Confirm definition before any further FlexPro Armor quote goes out.</li>
        <li><strong>Pro-rated or full replacement?</strong> If a cover fails in year 8, is it a free replacement, or a pro-rated credit toward a new one?</li>
        <li><strong>Repair vs. replace?</strong> For seam failures specifically, do we offer a free re-stitch (cheaper for us, faster for the customer) before going to full replacement?</li>
        <li><strong>Claim window?</strong> How many days does the customer have to report a defect after discovery — 30, 60, 90?</li>
        <li><strong>Who pays return shipping on a warranty claim?</strong> Default is Norris pays inbound for verified defects, customer pays inbound if no defect found.</li>
        <li><strong>Existing customers</strong> — Dominion, AEP Roanoke, Chain Electric, Pickle, AJ-BOSS, Crosby. Do we re-issue invoices with the new warranty paragraph, or grandfather them under "lifetime" as written?</li>
      </ol>

      <h2 class="nu-section-title"><span class="accent">Decision</span> &amp; Sign-Off</h2>
      <div class="decision-row">
        <div class="box">
          <div class="lbl">Definition Selected</div>
          <div class="checkline"></div>
          <div style="font-size: 0.78rem; margin-top: 6px; color: var(--nu-body-text);">A · Life of structure &nbsp;|&nbsp; B · Life of original purchaser</div>
        </div>
        <div class="box">
          <div class="lbl">Aaron's Approval &amp; Date</div>
          <div class="checkline"></div>
          <div style="font-size: 0.78rem; margin-top: 6px; color: var(--nu-body-text);">Initial &amp; date to lock</div>
        </div>
      </div>

      <h2 class="nu-section-title"><span class="accent">Next</span> Steps Once Aaron Decides</h2>
      <ul class="steps">
        <li>Update FlexPro Armor product page on NorrisUtilities.com with the approved warranty paragraph.</li>
        <li>Update the printed and PDF Line Card — warranty footer line.</li>
        <li>CB adds the warranty paragraph to the standard quote template and invoice footer.</li>
        <li>CB drafts a one-page "FlexPro Armor Warranty" PDF for customers who request it.</li>
        <li>Aaron signs off on whether the language is retroactive or grandfathered for current open invoices.</li>
        <li>File the signed memo to ~/norris-ops/internal/ and link it from the master tracker under FlexPro Armor.</li>
      </ul>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      130 Inverness Plaza #210, Birmingham, AL 35242
    </div>
    <div class="nu-footer-meta">Internal Action Memo · FlexPro Armor Lifetime Warranty Clarification · Generated 2026-04-22</div>
  </footer>

</body>
</html>