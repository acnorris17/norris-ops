<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Playbook — 4505 Buttewoods Estate — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-success: #0a8d3a;
      --nu-warn: #b86b00;
      --nu-danger: #a01818;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px; margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900; font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900; font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic; font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-title {
      margin-top: 22px;
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-white);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      opacity: 0.9;
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
      top: 220px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 720px; height: 720px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1160px;
      margin: 0 auto;
      padding: 56px 40px 40px;
    }

    /* SECTION TITLE */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 44px 0 14px;
      color: var(--nu-dark-text);
    }
    .nu-section-title .lead {
      color: #0033cc;
      margin-right: 0.35em;
    }
    .nu-section-title.first { margin-top: 4px; }

    .nu-eyebrow {
      display: inline-block;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      color: var(--nu-cyan);
      background: var(--nu-navy);
      padding: 6px 12px;
      border-radius: 2px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .nu-lede {
      font-size: 1.08rem;
      color: var(--nu-body-text);
      max-width: 880px;
      margin-bottom: 10px;
    }

    /* FACT STRIP */
    .fact-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin: 22px 0 8px;
    }
    .fact {
      background: var(--nu-white);
      padding: 18px 18px;
      text-align: center;
    }
    .fact .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: #0033cc;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .fact .value {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }
    .fact .sub {
      display: block;
      font-weight: 400;
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* TWO-COL */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    @media (max-width: 860px) {
      .grid-2, .grid-3 { grid-template-columns: 1fr; }
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.08rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card h3 .accent { color: #0033cc; }

    .nu-card ul, .nu-card ol {
      margin: 0 0 0 18px;
      padding: 0;
    }
    .nu-card li { margin-bottom: 6px; }

    /* CHEVRON BADGE ROW */
    .nu-badge-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 10px;
      margin: 18px 0 8px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .nu-badge .num {
      display: inline-block;
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      text-align: center;
      line-height: 28px;
      margin-right: 12px;
      flex-shrink: 0;
    }
    @media (max-width: 768px) {
      .nu-badge { clip-path: none; border-radius: 8px; padding: 12px 16px; }
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .nu-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 12px 14px;
      text-align: left;
    }
    .nu-table td {
      padding: 12px 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }

    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .pill-green { background: #e4f5ea; color: var(--nu-success); }
    .pill-amber { background: #fbefd9; color: var(--nu-warn); }
    .pill-red { background: #f7dcdc; color: var(--nu-danger); }
    .pill-blue { background: #dde4ff; color: #0033cc; }

    /* ASK / FLOOR STRIP */
    .price-ladder {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin: 14px 0 4px;
    }
    .price-ladder .rung {
      background: var(--nu-white);
      padding: 20px 16px;
      text-align: center;
    }
    .price-ladder .tag {
      font-weight: 700; font-size: 0.74rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .price-ladder .amt {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-dark-text);
    }
    .price-ladder .note {
      display: block;
      font-size: 0.78rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 4px;
    }
    .price-ladder .rung.anchor { background: #eaf7ff; }
    .price-ladder .rung.target { background: #dde4ff; }
    .price-ladder .rung.walk { background: #f7dcdc; }
    @media (max-width: 720px) {
      .price-ladder { grid-template-columns: 1fr 1fr; }
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f6f9ff 0%, #eef4ff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 0 8px 8px 0;
      margin: 16px 0;
    }
    .callout.warn { border-left-color: var(--nu-warn); background: linear-gradient(135deg, #fff9ee 0%, #fef1d9 100%); }
    .callout.danger { border-left-color: var(--nu-danger); background: linear-gradient(135deg, #fff3f3 0%, #fbe1e1 100%); }
    .callout .title {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    /* CHECKLIST */
    .checklist { list-style: none; margin: 0; padding: 0; }
    .checklist li {
      padding: 8px 0 8px 30px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 12px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      margin-left: 10px;
      padding-left: 24px;
      border-left: 2px solid var(--nu-cyan);
    }
    .timeline-item {
      position: relative;
      margin-bottom: 18px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -32px; top: 6px;
      width: 14px; height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-cyan);
      border-radius: 50%;
    }
    .timeline-item .day {
      font-weight: 700;
      color: #0033cc;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .timeline-item .action {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin: 2px 0;
    }
    .timeline-item .detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* SCRIPT BOX */
    .script {
      background: #0b1437;
      color: #e8edff;
      border-radius: 8px;
      padding: 22px 24px;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 0.98rem;
      line-height: 1.65;
      box-shadow: 0 4px 18px rgba(0,0,30,0.25);
      border-left: 4px solid var(--nu-cyan);
    }
    .script .who {
      display: block;
      font-weight: 900;
      color: var(--nu-cyan);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 0.78rem;
      margin-bottom: 6px;
    }
    .script + .script { margin-top: 12px; }
    .script em { color: #bcd6ff; font-style: italic; }

    /* BUTTONS */
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 12px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover { background: #0000CC; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,255,0.3); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.88);
      padding: 44px 40px;
      text-align: center;
      margin-top: 40px;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer .fine {
      margin-top: 14px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* PRINT */
    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-table { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .script { background: #0b1437 !important; -webkit-print-color-adjust: exact; }
    }

    @media (max-width: 640px) {
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 28px; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-title">Negotiation Playbook &middot; 4505 Buttewoods Estate</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <span class="nu-eyebrow">Personal &middot; Confidential &middot; Aaron C. Norris</span>
      <h2 class="nu-section-title first"><span class="lead">Negotiate.</span>The 4505 Buttewoods Estate</h2>
      <p class="nu-lede">
        This is a working playbook to negotiate the purchase of the 7,098 sq&nbsp;ft estate at 4505 Buttewoods. It sets the
        anchor, the target, and the walk-away &mdash; then backs each number with research steps, inspection gates, and
        scripted language for the listing agent. Treat it like a deal brief: one pass before the call, one pass after.
      </p>

      <div class="fact-strip">
        <div class="fact">
          <div class="label">Property</div>
          <div class="value">4505 Buttewoods</div>
          <span class="sub">Single-family estate</span>
        </div>
        <div class="fact">
          <div class="label">Size</div>
          <div class="value">7,098 sq ft</div>
          <span class="sub">Heated &amp; cooled</span>
        </div>
        <div class="fact">
          <div class="label">Stage</div>
          <div class="value">Pre-offer</div>
          <span class="sub">Diligence &amp; anchor</span>
        </div>
        <div class="fact">
          <div class="label">Decision Owner</div>
          <div class="value">Aaron C. Norris</div>
          <span class="sub">Buyer of record</span>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <h2 class="nu-section-title"><span class="lead">Deal</span>Brief</h2>

      <div class="grid-2">
        <div class="nu-card">
          <h3><span class="accent">What</span> we are buying</h3>
          <ul>
            <li>7,098 sq ft single-family estate at 4505 Buttewoods.</li>
            <li>Primary residence &mdash; long-hold, not a flip.</li>
            <li>Must close clean: title, survey, inspection, insurance.</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3><span class="accent">Why</span> this property</h3>
          <ul>
            <li>Scale fits long-term family and hosting needs.</li>
            <li>Location anchors a legacy hold, not a cash-flow rental.</li>
            <li>Opportunity if seller is motivated (DOM, condition, life event).</li>
          </ul>
        </div>
      </div>

      <div class="callout">
        <div class="title">Rule of the Deal</div>
        Price is set by <strong>the floor, the comps, and the condition</strong> &mdash; not by the list number or the square footage alone.
        Do not fall in love with the house before the inspection report lands. Walk-away is a real number on this page.
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <h2 class="nu-section-title"><span class="lead">Anchor</span>&amp; Walk-Away</h2>
      <p>Fill each rung in once real comps are pulled. Holding them in writing keeps emotion out of the call.</p>

      <div class="price-ladder">
        <div class="rung walk">
          <div class="tag">Walk-Away</div>
          <div class="amt">$&#95;&#95;&#95;,&#95;&#95;&#95;</div>
          <span class="note">Past this, deal is off.</span>
        </div>
        <div class="rung target">
          <div class="tag">Target</div>
          <div class="amt">$&#95;&#95;&#95;,&#95;&#95;&#95;</div>
          <span class="note">Where we want to land.</span>
        </div>
        <div class="rung anchor">
          <div class="tag">Opening Offer</div>
          <div class="amt">$&#95;&#95;&#95;,&#95;&#95;&#95;</div>
          <span class="note">Anchored by comps &amp; condition.</span>
        </div>
        <div class="rung">
          <div class="tag">List Price</div>
          <div class="amt">$&#95;&#95;&#95;,&#95;&#95;&#95;</div>
          <span class="note">Per current MLS listing.</span>
        </div>
      </div>

      <div class="grid-3" style="margin-top:16px;">
        <div class="nu-card">
          <h3><span class="accent">Anchor</span> Math</h3>
          <p>Pull three sold comps within 1.0 miles, 6 months, &plusmn;15% sq ft. Blend $/sq ft. Apply condition delta
          from inspection. Subtract any deferred maintenance dollar-for-dollar.</p>
        </div>
        <div class="nu-card">
          <h3><span class="accent">Target</span> Logic</h3>
          <p>Anchor + defensible concessions (repairs, closing costs, rate buy-down). Target should still clear the
          appraisal and leave a cushion for the inspection list.</p>
        </div>
        <div class="nu-card">
          <h3><span class="accent">Walk-Away</span></h3>
          <p>The number at which another house is the better trade. Written down before the call &mdash; never moved during it.
          If crossed, thank them and end clean.</p>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <h2 class="nu-section-title"><span class="lead">Research.</span>Before Any Offer Goes In</h2>

      <div class="nu-badge-row">
        <div class="nu-badge"><span class="num">1</span>Pull 3 sold comps &amp; 2 active</div>
        <div class="nu-badge"><span class="num">2</span>County tax assessment &amp; history</div>
        <div class="nu-badge"><span class="num">3</span>Days on Market &amp; price changes</div>
        <div class="nu-badge"><span class="num">4</span>Seller disclosure form</div>
        <div class="nu-badge"><span class="num">5</span>HOA docs &amp; covenants</div>
        <div class="nu-badge"><span class="num">6</span>Permits, additions, and CO history</div>
      </div>

      <div class="grid-2" style="margin-top:18px;">
        <div class="nu-card">
          <h3><span class="accent">Comps</span> Worksheet</h3>
          <table class="nu-table" style="font-size:0.88rem;">
            <thead>
              <tr><th>Address</th><th>SqFt</th><th>Sold</th><th>$/SqFt</th></tr>
            </thead>
            <tbody>
              <tr><td>Comp 1</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
              <tr><td>Comp 2</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
              <tr><td>Comp 3</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
              <tr><td><strong>Blended $/SqFt</strong></td><td colspan="3">&nbsp;</td></tr>
              <tr><td><strong>Implied Value (7,098 sq ft)</strong></td><td colspan="3">&nbsp;</td></tr>
            </tbody>
          </table>
        </div>
        <div class="nu-card">
          <h3><span class="accent">Seller</span> Motivation Signals</h3>
          <ul>
            <li>Days on Market above local median &mdash; leverage increases.</li>
            <li>Prior price reduction(s) &mdash; the floor has already moved.</li>
            <li>Expired or withdrawn listing history on same address.</li>
            <li>Estate sale, divorce, relocation, or dual-carry situation.</li>
            <li>Vacant staging or utilities off &mdash; carry cost pressure.</li>
          </ul>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <h2 class="nu-section-title"><span class="lead">Inspection</span>Gates That Move Price</h2>
      <p>Each of these is a dollar conversation, not a deal-breaker &mdash; unless stacked. Document each with a licensed
      inspector, get written estimates, then negotiate credit or price reduction in writing.</p>

      <table class="nu-table">
        <thead>
          <tr>
            <th style="width:26%;">System</th>
            <th>What to Verify</th>
            <th style="width:16%;">Typical Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Foundation &amp; Structure</strong></td>
            <td>Cracks, settlement, grading, slab condition at 7,098 sq ft footprint.</td>
            <td><span class="pill pill-red">High</span></td>
          </tr>
          <tr>
            <td><strong>Roof</strong></td>
            <td>Age, layers, valleys, flashing, remaining life. Ask for roofing invoice &amp; warranty.</td>
            <td><span class="pill pill-amber">Medium-High</span></td>
          </tr>
          <tr>
            <td><strong>HVAC</strong></td>
            <td>Unit count, ages, tonnage, zoning. Large square footage usually means 2 or 3 systems.</td>
            <td><span class="pill pill-amber">Medium-High</span></td>
          </tr>
          <tr>
            <td><strong>Plumbing</strong></td>
            <td>Supply line material, water pressure, water heater age, any slab leak history.</td>
            <td><span class="pill pill-amber">Medium</span></td>
          </tr>
          <tr>
            <td><strong>Electrical</strong></td>
            <td>Panel amperage, brand (no recalled panels), aluminum branch wiring, generator transfer.</td>
            <td><span class="pill pill-amber">Medium</span></td>
          </tr>
          <tr>
            <td><strong>Waterproofing / Drainage</strong></td>
            <td>Basement / crawl moisture, sump, French drains, past intrusion. Ask direct and in writing.</td>
            <td><span class="pill pill-red">High</span></td>
          </tr>
          <tr>
            <td><strong>Septic / Sewer</strong></td>
            <td>Scope the main line. Locate and pump septic if applicable.</td>
            <td><span class="pill pill-amber">Medium</span></td>
          </tr>
          <tr>
            <td><strong>Pest / Wood Damage</strong></td>
            <td>Active termites, carpenter ants, moisture-driven rot at sills and eaves.</td>
            <td><span class="pill pill-amber">Medium</span></td>
          </tr>
          <tr>
            <td><strong>Pool / Outbuildings</strong></td>
            <td>Equipment age, liner/plaster life, permits for any detached structure.</td>
            <td><span class="pill pill-blue">Variable</span></td>
          </tr>
          <tr>
            <td><strong>Permits &amp; Additions</strong></td>
            <td>Every finished room legally permitted? Unpermitted sq ft does not count for appraisal.</td>
            <td><span class="pill pill-red">High</span></td>
          </tr>
        </tbody>
      </table>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <h2 class="nu-section-title"><span class="lead">Offer</span>Terms &amp; Leverage</h2>

      <div class="grid-2">
        <div class="nu-card">
          <h3><span class="accent">Price</span> Levers</h3>
          <ul>
            <li>Opening offer anchored below list, above walk-away.</li>
            <li>Escalation clause only if multiple-offer is confirmed in writing.</li>
            <li>Seller credit toward closing costs or rate buy-down &mdash; often cheaper than a price cut for them, same net for us.</li>
            <li>Credit for documented repairs identified in inspection.</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3><span class="accent">Non-Price</span> Levers</h3>
          <ul>
            <li>Close date that matches seller's next move.</li>
            <li>Post-closing occupancy (rent-back) if they need a bridge.</li>
            <li>Shorter inspection window in exchange for better price.</li>
            <li>Proof of funds / strong lender letter up front.</li>
            <li>Clean contingencies &mdash; no silly "must sell our house" strings.</li>
          </ul>
        </div>
      </div>

      <div class="callout warn">
        <div class="title">Never Waive</div>
        Inspection contingency. Appraisal contingency. Clear title. Written disclosure. Everything else is negotiable;
        these four are not. If a seller demands they be waived, price that risk in or walk.
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <h2 class="nu-section-title"><span class="lead">Scripts.</span>What to Say on the Call</h2>

      <div class="script">
        <span class="who">Opening &mdash; Listing Agent</span>
        "I'm Aaron Norris. I'm looking seriously at 4505 Buttewoods as a primary residence. Before I put an offer on paper,
        I want to make sure I understand the property and the seller's situation. Walk me through <em>how long it has been on the market,
        any price history, and what kind of timeline the seller is working with.</em>"
      </div>

      <div class="script">
        <span class="who">Anchor &mdash; Presenting the Offer</span>
        "My offer is grounded in three recent sold comps within a mile, adjusted for condition. It's a fair number backed by
        real data, not a lowball. I'm ready to move quickly with proof of funds and a clean contract. <em>What does your seller
        need to see besides price &mdash; close date, rent-back, or credits &mdash; to say yes?</em>"
      </div>

      <div class="script">
        <span class="who">Push-Back &mdash; "The Seller Won't Come Down"</span>
        "I understand. Here's what I can do: I can hold my price if we address repairs through a seller credit at close,
        or I can stay flexible on close date if that's useful. <em>Which of those moves this forward today?</em>"
      </div>

      <div class="script">
        <span class="who">Inspection Re-Trade</span>
        "The inspection identified <em>[items]</em> with written estimates totaling $<em>[amount]</em>. I'm asking for a seller credit
        of $<em>[amount]</em> at closing, not a renegotiation of the whole deal. This is the cost of work already on the property &mdash;
        I'm simply asking it not be priced twice."
      </div>

      <div class="script">
        <span class="who">Walk-Away &mdash; Said With Respect</span>
        "I've appreciated your time on this, and your seller has a beautiful home. At the number we're at today, it isn't
        the right fit for me. If circumstances change, I'd welcome another conversation. Please keep my number."
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <h2 class="nu-section-title"><span class="lead">Timeline.</span>Next 30 Days</h2>

      <div class="timeline">
        <div class="timeline-item">
          <div class="day">Day 1 &ndash; 2</div>
          <div class="action">Pull comps, tax record, DOM, price history</div>
          <div class="detail">Lock the opening offer, target, and walk-away numbers in writing on this sheet.</div>
        </div>
        <div class="timeline-item">
          <div class="day">Day 3</div>
          <div class="action">Listing-agent fact-finding call</div>
          <div class="detail">Motivation, timeline, preferred close date, any known issues. Use the opening script above.</div>
        </div>
        <div class="timeline-item">
          <div class="day">Day 4 &ndash; 5</div>
          <div class="action">Lender letter &amp; proof-of-funds ready</div>
          <div class="detail">Stronger than a generic pre-qual. Shows seller the deal will close.</div>
        </div>
        <div class="timeline-item">
          <div class="day">Day 6 &ndash; 7</div>
          <div class="action">Written offer with clean terms</div>
          <div class="detail">Anchor price, 10-day inspection, 25&ndash;30 day close, earnest money scaled to seriousness, no silly contingencies.</div>
        </div>
        <div class="timeline-item">
          <div class="day">Day 8 &ndash; 12</div>
          <div class="action">Counter-offer &amp; response cycle</div>
          <div class="detail">Move in non-price terms first. Every price move gets something back in writing.</div>
        </div>
        <div class="timeline-item">
          <div class="day">Day 13 &ndash; 22</div>
          <div class="action">Inspections &amp; disclosures</div>
          <div class="detail">Full home, roof, HVAC, sewer scope, pest, pool/outbuildings. Get written repair estimates.</div>
        </div>
        <div class="timeline-item">
          <div class="day">Day 23 &ndash; 25</div>
          <div class="action">Inspection re-trade</div>
          <div class="detail">Credit request with documented numbers. Use the re-trade script. Hold the walk-away.</div>
        </div>
        <div class="timeline-item">
          <div class="day">Day 26 &ndash; 30</div>
          <div class="action">Appraisal, title, insurance, final walkthrough</div>
          <div class="detail">Confirm appraisal clears. Clear title. Insurance bound. Walkthrough the day of close.</div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <h2 class="nu-section-title"><span class="lead">Pre-Call</span>Checklist</h2>

      <div class="grid-2">
        <div class="nu-card">
          <h3><span class="accent">Before</span> I dial the listing agent</h3>
          <ul class="checklist">
            <li>3 sold comps printed with $/sq ft math</li>
            <li>List price history &amp; DOM confirmed</li>
            <li>Tax assessed value &amp; last-sale date pulled</li>
            <li>Opening offer, target, and walk-away numbers written here</li>
            <li>Lender pre-approval refreshed and dated</li>
            <li>Proof-of-funds statement ready (PDF)</li>
            <li>Script read once out loud &mdash; not improvised</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3><span class="accent">Before</span> I sign the contract</h3>
          <ul class="checklist">
            <li>Seller disclosure reviewed line by line</li>
            <li>HOA docs &amp; covenants read (no dealbreakers)</li>
            <li>Inspection contingency &mdash; in</li>
            <li>Appraisal contingency &mdash; in</li>
            <li>Financing contingency &mdash; in</li>
            <li>Survey ordered</li>
            <li>Title commitment reviewed by closing attorney</li>
            <li>Insurance quote bound on or before close</li>
          </ul>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <h2 class="nu-section-title"><span class="lead">Red</span>Flags &amp; Stop-Work Triggers</h2>

      <div class="callout danger">
        <div class="title">Walk the deal if any of these surface</div>
        <ul style="margin-top:8px;">
          <li>Unpermitted square footage material to the $7,098 sq ft count.</li>
          <li>Undisclosed water intrusion, mold, or repeated basement/crawl moisture.</li>
          <li>Active structural movement not addressed with engineered repair and warranty.</li>
          <li>Title defects, liens, boundary disputes, or an unclear survey.</li>
          <li>Seller refuses to sign a written disclosure or attempts to sell "as-is, no inspection."</li>
          <li>Appraisal gap seller will not share, and we cannot fund without strain.</li>
        </ul>
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <h2 class="nu-section-title"><span class="lead">Roles</span>on This Deal</h2>

      <table class="nu-table">
        <thead>
          <tr><th>Role</th><th>Owner</th><th>Responsibility</th></tr>
        </thead>
        <tbody>
          <tr><td>Buyer / Decision Maker</td><td>Aaron C. Norris</td><td>Sets numbers, signs offer, holds the walk-away.</td></tr>
          <tr><td>Buyer's Agent</td><td>To be retained</td><td>Comp research, offer drafting, negotiation relay.</td></tr>
          <tr><td>Lender</td><td>To confirm</td><td>Pre-approval, rate lock, appraisal coordination.</td></tr>
          <tr><td>Closing Attorney / Title</td><td>To confirm</td><td>Title commitment, survey review, closing docs.</td></tr>
          <tr><td>Home Inspector</td><td>Licensed, independent</td><td>Full report, systems inspection, written findings.</td></tr>
          <tr><td>Specialty Inspectors</td><td>As needed</td><td>Roof, HVAC, sewer scope, pest, pool, structural.</td></tr>
          <tr><td>Insurance</td><td>To confirm</td><td>Bindable quote before contingency removal.</td></tr>
        </tbody>
      </table>

      <div style="text-align:center; margin:48px 0 12px;">
        <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Negotiation%20Update" class="nu-btn-primary">Email Deal Update</a>
      </div>

      <p style="text-align:center; font-size:0.82rem; color:var(--nu-body-text); margin-top:6px;">
        Personal working document for Aaron C. Norris. Not a listing, marketing material, or legal advice.
      </p>

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
    <div class="fine">
      Norris Utilities® and A Legacy of Commitment® are registered trademarks of Norris Utilities, LLC. Phoenix Icon® registered.
    </div>
  </footer>

</body>
</html>