<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Pull 2018 Compass Bank → McKnight Deed — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --nu-alert-red: #B00020;
      --nu-success-green: #0A7A3B;
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

    /* HEADER — gradient with infrastructure overlay */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ASYMMETRIC WHITE CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA with ghost phoenix watermark */
    .nu-content-wrap {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-wrap::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      padding-bottom: 65%;
      background: radial-gradient(circle, rgba(0,51,204,0.05) 0%, rgba(0,51,204,0.02) 40%, transparent 70%);
      border-radius: 50%;
      opacity: 0.7;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* BREADCRUMB / META BAR */
    .nu-meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      margin-bottom: 28px;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #555;
    }
    .nu-meta-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 6px 12px;
      border-radius: 20px;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-meta-tag.priority {
      background: var(--nu-alert-red);
      border-color: var(--nu-alert-red);
      color: var(--nu-white);
    }
    .nu-meta-tag.source {
      background: #1a1a3e;
      border-color: #1a1a3e;
      color: var(--nu-cyan);
    }
    .nu-meta-tag.status-open {
      background: #FFF4DC;
      border-color: var(--nu-accent-gold);
      color: #7a5c10;
    }

    /* PAGE TITLE BLOCK */
    .nu-action-eyebrow {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.25em;
      color: #0033cc;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-action-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 18px;
      letter-spacing: -0.01em;
    }
    .nu-action-title .accent { color: #0033cc; }
    .nu-action-summary {
      font-size: 1.1rem;
      color: #4a4a55;
      max-width: 820px;
      margin-bottom: 40px;
      line-height: 1.55;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-top: 48px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: var(--nu-dark-text);
      border-bottom: 3px solid var(--nu-medium-gray);
      padding-bottom: 10px;
    }
    .nu-section-title .first { color: #0033cc; }

    /* FACT GRID */
    .nu-fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }
    .nu-fact {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .nu-fact-value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-fact-sub {
      font-size: 0.85rem;
      color: #666;
      font-weight: 400;
      margin-top: 3px;
    }

    /* CHEVRON BADGE (step list) */
    .nu-steps {
      list-style: none;
      counter-reset: stepcounter;
    }
    .nu-step {
      display: flex;
      gap: 20px;
      padding: 20px 24px;
      margin-bottom: 14px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      position: relative;
      counter-increment: stepcounter;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-step:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(0,0,255,0.08);
    }
    .nu-step::before {
      content: counter(stepcounter);
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-weight: 900;
      font-size: 1rem;
    }
    .nu-step-body {
      flex: 1;
    }
    .nu-step-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      margin-bottom: 4px;
    }
    .nu-step-detail {
      color: #555;
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .nu-step-detail a {
      color: #0033cc;
      font-weight: 700;
      text-decoration: none;
      border-bottom: 1px dashed #0033cc;
    }

    /* DEED CARD (hero fact block) */
    .nu-deed-card {
      background: linear-gradient(135deg, #f7f9ff 0%, #eef3ff 100%);
      border: 1px solid #c8d4f5;
      border-radius: 12px;
      padding: 28px 32px;
      margin-bottom: 32px;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 24px;
      align-items: center;
    }
    .nu-deed-icon {
      width: 72px;
      height: 72px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 18px rgba(0,0,255,0.25);
    }
    .nu-deed-icon svg { width: 40px; height: 40px; fill: var(--nu-white); }
    .nu-deed-head {
      font-size: 0.8rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .nu-deed-title {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      line-height: 1.25;
    }
    .nu-deed-meta {
      font-size: 0.95rem;
      color: #555;
    }

    /* CALLOUT */
    .nu-callout {
      background: #fffaf2;
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 24px 0;
      font-size: 0.98rem;
      color: #3d3220;
    }
    .nu-callout strong { color: #7a5c10; }

    /* CTA BUTTONS */
    .nu-cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 32px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 26px;
      border-radius: 5px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.35);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* SIGNATURE / OWNER */
    .nu-owner-block {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      align-items: center;
      padding: 20px 24px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      margin-top: 24px;
    }
    .nu-owner-avatar {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: 0.05em;
    }
    .nu-owner-name { font-weight: 900; color: var(--nu-dark-text); font-size: 1.05rem; }
    .nu-owner-role { font-size: 0.85rem; color: #666; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #001a99 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
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
      margin: 0 auto 18px;
      opacity: 0.6;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-content-inner { padding: 40px 22px 60px; }
      .nu-action-title { font-size: 1.75rem; }
      .nu-deed-card { grid-template-columns: 1fr; text-align: center; padding: 24px 20px; }
      .nu-deed-icon { margin: 0 auto; }
      .nu-step { padding: 16px 18px; gap: 14px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-step, .nu-fact, .nu-deed-card { box-shadow: none; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-cta-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- ASYMMETRIC WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-wrap">
    <div class="nu-content-inner">

      <!-- META -->
      <div class="nu-meta-bar">
        <span class="nu-meta-tag source">reMarkable Action Item</span>
        <span class="nu-meta-tag priority">Priority: Research</span>
        <span class="nu-meta-tag status-open">Status: Open</span>
        <span class="nu-meta-tag">Captured: 2026-04-23</span>
      </div>

      <!-- TITLE -->
      <div class="nu-action-eyebrow">Title Research / Estate Due Diligence</div>
      <h1 class="nu-action-title">Pull the <span class="accent">2018 Compass Bank → McKnight</span> Deed</h1>
      <p class="nu-action-summary">
        Retrieve the recorded deed filed in Jefferson County, Alabama that documents the 2018 conveyance of the
        4505 Butterworth estate from Compass Bank to the McKnight party. Instrument number begins
        <strong>20180…</strong> (full digits to be confirmed at the courthouse index). The document is required
        to advance negotiation on the 7,098 sq ft Buttewood property tie-in (ref. Task 239).
      </p>

      <!-- DEED HERO CARD -->
      <div class="nu-deed-card">
        <div class="nu-deed-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          </svg>
        </div>
        <div>
          <div class="nu-deed-head">Document of Record</div>
          <div class="nu-deed-title">Grantor: Compass Bank &nbsp;→&nbsp; Grantee: McKnight</div>
          <div class="nu-deed-meta">Recording Year: 2018 &nbsp;•&nbsp; Instrument #: 20180__________ (to confirm) &nbsp;•&nbsp; County: Jefferson, AL</div>
        </div>
      </div>

      <!-- KEY FACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Key</span> Facts</h2>
        <div class="nu-fact-grid">
          <div class="nu-fact">
            <div class="nu-fact-label">Grantor</div>
            <div class="nu-fact-value">Compass Bank</div>
            <div class="nu-fact-sub">Predecessor to BBVA / PNC; record may be filed under either name</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Grantee</div>
            <div class="nu-fact-value">McKnight</div>
            <div class="nu-fact-sub">Confirm full legal name (individual vs. trust vs. LLC) on index</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Recording Year</div>
            <div class="nu-fact-value">2018</div>
            <div class="nu-fact-sub">Instrument prefix: 20180…</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Likely Recording Office</div>
            <div class="nu-fact-value">Jefferson County Probate</div>
            <div class="nu-fact-sub">716 Richard Arrington Jr. Blvd N, Birmingham, AL 35203</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Linked Matter</div>
            <div class="nu-fact-value">4505 Butterworth Estate</div>
            <div class="nu-fact-sub">7,098 sq ft — ref. Task 239 negotiation</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Document Type</div>
            <div class="nu-fact-value">Deed (conveyance)</div>
            <div class="nu-fact-sub">Likely special warranty or foreclosure / REO deed given bank as grantor</div>
          </div>
        </div>
      </section>

      <!-- STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">How</span> To Pull It</h2>
        <ol class="nu-steps">
          <li class="nu-step">
            <div class="nu-step-body">
              <div class="nu-step-title">Confirm the property and county of record</div>
              <div class="nu-step-detail">
                Verify the physical address tied to the deed (expected: 4505 Butterworth, Birmingham, AL area).
                If the property sits outside Jefferson County, pivot to the correct probate court (Shelby, St. Clair, etc.).
              </div>
            </div>
          </li>
          <li class="nu-step">
            <div class="nu-step-body">
              <div class="nu-step-title">Search the online probate index</div>
              <div class="nu-step-detail">
                Open the Jefferson County Probate Court Recording Index
                (<a href="https://probate.jccal.org" target="_blank" rel="noopener">probate.jccal.org</a>). Search
                by grantor <strong>“Compass Bank”</strong> with date range 01/01/2018 – 12/31/2018. Cross-search
                grantee <strong>“McKnight”</strong> if the grantor search returns too many hits.
              </div>
            </div>
          </li>
          <li class="nu-step">
            <div class="nu-step-body">
              <div class="nu-step-title">Capture the full instrument number</div>
              <div class="nu-step-detail">
                Write down the complete 14-digit instrument number (format: 2018YYYYMMDDNNN).
                Screenshot the index entry so the book/page and recording date are preserved.
              </div>
            </div>
          </li>
          <li class="nu-step">
            <div class="nu-step-body">
              <div class="nu-step-title">Pay for the certified PDF</div>
              <div class="nu-step-detail">
                Online copy fee in Jefferson County is typically $1.00 per page plus a small credit-card
                convenience fee. Download the PDF and save as:
                <strong>~/norris-agent/legal/deeds/2018-compass-bank-mcknight.pdf</strong>.
              </div>
            </div>
          </li>
          <li class="nu-step">
            <div class="nu-step-body">
              <div class="nu-step-title">If online image is illegible — walk it in</div>
              <div class="nu-step-detail">
                Go to the Jefferson County Courthouse Records Room, 716 Richard Arrington Jr. Blvd N,
                2nd floor. Hand the clerk the instrument number and request a certified copy. Cost is
                ~$5.00 certification + per-page fee.
              </div>
            </div>
          </li>
          <li class="nu-step">
            <div class="nu-step-body">
              <div class="nu-step-title">Read for the following items</div>
              <div class="nu-step-detail">
                • Legal description (lot, block, subdivision — must match Butterworth parcel). <br>
                • Consideration amount (tells us 2018 REO basis). <br>
                • Any reservations, easements, or deed restrictions carried forward. <br>
                • Signature blocks (was it Compass Bank or already BBVA by closing date?).
              </div>
            </div>
          </li>
          <li class="nu-step">
            <div class="nu-step-body">
              <div class="nu-step-title">File and cross-reference</div>
              <div class="nu-step-detail">
                Add a summary row to the estate-negotiation workbook, link the PDF in the Task 239 record, and
                flag any cloud on title for attorney review before any offer moves forward.
              </div>
            </div>
          </li>
        </ol>
      </section>

      <!-- CALLOUT -->
      <div class="nu-callout">
        <strong>Why this matters:</strong> The 2018 deed is the anchor document in the chain of title.
        Without it, any offer on the 4505 Butterworth estate rests on second-hand assumptions — and Compass
        Bank / McKnight is the inflection point where a foreclosure may sit in the chain. Pulling it now
        prevents a surprise at closing.
      </div>

      <!-- OUTPUT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Expected</span> Output</h2>
        <div class="nu-fact-grid">
          <div class="nu-fact">
            <div class="nu-fact-label">Deliverable 1</div>
            <div class="nu-fact-value">Certified Deed PDF</div>
            <div class="nu-fact-sub">Saved to ~/norris-agent/legal/deeds/</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Deliverable 2</div>
            <div class="nu-fact-value">One-Page Summary</div>
            <div class="nu-fact-sub">Grantor, grantee, legal description, consideration, any clouds</div>
          </div>
          <div class="nu-fact">
            <div class="nu-fact-label">Deliverable 3</div>
            <div class="nu-fact-value">Task 239 Update</div>
            <div class="nu-fact-sub">Link the PDF and summary into the Butterworth negotiation record</div>
          </div>
        </div>
      </section>

      <!-- CTAs -->
      <div class="nu-cta-row">
        <a class="nu-btn-primary" href="https://probate.jccal.org" target="_blank" rel="noopener">Open Jefferson County Probate Index</a>
        <a class="nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=Deed%20Pulled%20%E2%80%94%20Compass%20Bank%20to%20McKnight%202018&body=Deed%20retrieved.%20Summary%20attached.">Email Completion to Aaron</a>
      </div>

      <!-- OWNER -->
      <div class="nu-owner-block">
        <div class="nu-owner-avatar">ACN</div>
        <div>
          <div class="nu-owner-name">Owner: Aaron C. Norris</div>
          <div class="nu-owner-role">Founder &amp; CEO, Norris Utilities, LLC &nbsp;•&nbsp; Cell: 205-500-1343</div>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>