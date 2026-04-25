<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disclosure Discrepancy Review — Rental vs. For-Sale Listing — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    /* ══ ROOT VARIABLES ══ */
    :root {
      --nu-blue: #0000FF;
      --nu-blue-deep: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-warning: #C8102E;
      --nu-success: #1B7A3E;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
    }

    /* ══ BASE ══ */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, #06D0FF 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
    }
    .nu-phoenix-icon svg { width: 100%; height: 100%; }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ DOC META BAR ══ */
    .nu-docmeta {
      background: var(--nu-light-gray);
      border-bottom: 3px solid var(--nu-cyan);
      padding: 18px 40px;
    }
    .nu-docmeta-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: 16px 32px;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
    }
    .nu-docmeta-item { display: flex; flex-direction: column; }
    .nu-docmeta-label {
      font-weight: 700;
      color: var(--nu-blue-deep);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.7rem;
    }
    .nu-docmeta-value {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-status-pill {
      display: inline-block;
      background: var(--nu-warning);
      color: var(--nu-white);
      padding: 4px 14px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* ══ MAIN CONTENT ══ */
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
      height: 90%;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1140px;
      margin: 0 auto;
      padding: 56px 40px;
    }

    /* ══ PAGE TITLE ══ */
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-page-title .accent { color: var(--nu-blue-deep); }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 36px;
      max-width: 820px;
      line-height: 1.55;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first {
      color: var(--nu-blue-deep);
      margin-right: 8px;
    }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ ALERT BOX ══ */
    .nu-alert {
      background: linear-gradient(135deg, #fff5f5 0%, #fdeaea 100%);
      border-left: 5px solid var(--nu-warning);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 28px;
      box-shadow: 0 2px 10px rgba(200, 16, 46, 0.08);
    }
    .nu-alert-title {
      font-weight: 900;
      color: var(--nu-warning);
      font-size: 1.05rem;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .nu-alert-body { color: var(--nu-dark-text); font-size: 0.98rem; }

    /* ══ COMPARISON GRID ══ */
    .nu-compare-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 24px;
    }
    .nu-compare-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    .nu-compare-card-header {
      padding: 14px 22px;
      font-weight: 900;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--nu-white);
    }
    .nu-compare-card.rental .nu-compare-card-header {
      background: linear-gradient(135deg, var(--nu-blue-deep) 0%, var(--nu-cyan) 100%);
    }
    .nu-compare-card.sale .nu-compare-card-header {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
    }
    .nu-compare-card-body { padding: 22px; }
    .nu-compare-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      gap: 12px;
    }
    .nu-compare-row:last-child { border-bottom: none; }
    .nu-compare-row .label {
      color: var(--nu-blue-deep);
      font-weight: 700;
      flex-shrink: 0;
      max-width: 45%;
    }
    .nu-compare-row .value {
      color: var(--nu-dark-text);
      text-align: right;
      font-weight: 400;
    }
    .nu-compare-row.discrepancy {
      background: #fff8e6;
      margin: 0 -10px;
      padding: 10px;
      border-radius: 4px;
      border-bottom: 1px solid #f0e0a8;
    }
    .nu-compare-row.discrepancy .value {
      color: var(--nu-warning);
      font-weight: 700;
    }

    /* ══ DISCREPANCY TABLE ══ */
    .nu-table-wrap {
      overflow-x: auto;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.93rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue-deep) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 900;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }
    .nu-table td {
      padding: 14px 16px;
      vertical-align: top;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table .item-col { font-weight: 700; color: var(--nu-blue-deep); white-space: nowrap; }
    .nu-table .severity-high {
      display: inline-block;
      padding: 3px 10px;
      background: var(--nu-warning);
      color: var(--nu-white);
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table .severity-med {
      display: inline-block;
      padding: 3px 10px;
      background: var(--nu-accent-gold);
      color: var(--nu-white);
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table .severity-low {
      display: inline-block;
      padding: 3px 10px;
      background: var(--nu-success);
      color: var(--nu-white);
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* ══ RISK CALLOUTS ══ */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
      margin-bottom: 24px;
    }
    .nu-risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      padding: 22px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-risk-card.legal { border-top-color: var(--nu-warning); }
    .nu-risk-card.financial { border-top-color: var(--nu-accent-gold); }
    .nu-risk-card.reputation { border-top-color: var(--nu-blue-deep); }
    .nu-risk-card-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-risk-card-body { font-size: 0.92rem; color: var(--nu-body-text); }

    /* ══ ACTION CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      counter-reset: stepcount;
    }
    .nu-checklist li {
      counter-increment: stepcount;
      position: relative;
      padding: 14px 16px 14px 60px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      font-size: 0.96rem;
    }
    .nu-checklist li::before {
      content: counter(stepcount);
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .nu-checklist li strong {
      color: var(--nu-blue-deep);
      display: block;
      margin-bottom: 3px;
    }

    /* ══ DECISION BOX ══ */
    .nu-decision-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin-top: 20px;
      box-shadow: 0 4px 20px rgba(0,0,51,0.2);
    }
    .nu-decision-title {
      font-weight: 900;
      font-size: 1.25rem;
      margin-bottom: 14px;
      color: var(--nu-cyan);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-decision-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 16px;
    }
    .nu-decision-option {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(6, 208, 255, 0.3);
      padding: 16px;
      border-radius: 6px;
    }
    .nu-decision-option-title {
      font-weight: 900;
      color: var(--nu-cyan);
      margin-bottom: 6px;
      font-size: 0.95rem;
    }
    .nu-decision-option-body {
      font-size: 0.88rem;
      color: rgba(255,255,255,0.85);
      line-height: 1.5;
    }

    /* ══ SIGN-OFF BLOCK ══ */
    .nu-signoff {
      margin-top: 36px;
      padding: 28px;
      border: 2px dashed var(--nu-medium-gray);
      border-radius: 8px;
      background: var(--nu-light-gray);
    }
    .nu-signoff-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin-bottom: 16px;
    }
    .nu-signoff-row:last-child { margin-bottom: 0; }
    .nu-signoff-label {
      font-weight: 700;
      color: var(--nu-blue-deep);
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 6px;
    }
    .nu-signoff-line {
      border-bottom: 1.5px solid var(--nu-dark-text);
      min-height: 32px;
    }

    /* ══ FOOTER ══ */
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
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 16px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 820px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-inner { padding: 40px 22px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-compare-grid { grid-template-columns: 1fr; }
      .nu-signoff-row { grid-template-columns: 1fr; }
      .nu-docmeta-inner { gap: 12px 20px; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    /* ══ PRINT ══ */
    @media print {
      .nu-header {
        background: var(--nu-blue) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .nu-footer {
        background: var(--nu-navy) !important;
        -webkit-print-color-adjust: exact;
      }
      .nu-content-area::before { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC META BAR -->
  <div class="nu-docmeta">
    <div class="nu-docmeta-inner">
      <div class="nu-docmeta-item">
        <span class="nu-docmeta-label">Document</span>
        <span class="nu-docmeta-value">Disclosure Discrepancy Review</span>
      </div>
      <div class="nu-docmeta-item">
        <span class="nu-docmeta-label">Source</span>
        <span class="nu-docmeta-value">reMarkable Action Item</span>
      </div>
      <div class="nu-docmeta-item">
        <span class="nu-docmeta-label">Date Opened</span>
        <span class="nu-docmeta-value">2026-04-25</span>
      </div>
      <div class="nu-docmeta-item">
        <span class="nu-docmeta-label">Owner</span>
        <span class="nu-docmeta-value">Aaron C. Norris</span>
      </div>
      <div class="nu-docmeta-item">
        <span class="nu-docmeta-label">Status</span>
        <span class="nu-status-pill">Open — Action Required</span>
      </div>
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <!-- TITLE -->
      <h1 class="nu-page-title">
        <span class="accent">Disclosure</span> Discrepancy Review
      </h1>
      <p class="nu-page-subtitle">
        Review and reconcile the differences in property facts, condition statements, and material disclosures
        appearing on the rental listing versus the for-sale listing for the same property. The objective is to
        produce one truthful, unified record that withstands scrutiny from buyers, tenants, lenders, appraisers,
        and counsel — and protects Norris Utilities®, LLC from misrepresentation exposure.
      </p>

      <!-- ALERT -->
      <div class="nu-alert">
        <div class="nu-alert-title">Why this matters</div>
        <div class="nu-alert-body">
          A property cannot be honestly listed two different ways. Where the rental listing and the for-sale
          listing disagree on square footage, condition, included items, defects, history, or use restrictions,
          one of them is wrong. Until reconciled, every signed document downstream — a lease renewal, a buyer
          contract, a financing application — carries risk of being challenged on disclosure grounds.
        </div>
      </div>

      <!-- SECTION 1: SIDE BY SIDE -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Side-by-Side</span><span class="rest">Listing Snapshot</span>
        </h2>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">
          The two listings are placed below in their as-published form. Discrepancy rows are highlighted in amber
          and re-classified by severity in the table that follows.
        </p>

        <div class="nu-compare-grid">

          <!-- RENTAL CARD -->
          <div class="nu-compare-card rental">
            <div class="nu-compare-card-header">Rental Listing — As Published</div>
            <div class="nu-compare-card-body">
              <div class="nu-compare-row">
                <span class="label">Listing type</span>
                <span class="value">Long-term residential lease</span>
              </div>
              <div class="nu-compare-row discrepancy">
                <span class="label">Stated square footage</span>
                <span class="value">Pull from rental MLS / Zillow / lease packet</span>
              </div>
              <div class="nu-compare-row discrepancy">
                <span class="label">Bedroom / bath count</span>
                <span class="value">Pull from rental MLS / Zillow / lease packet</span>
              </div>
              <div class="nu-compare-row">
                <span class="label">Year built</span>
                <span class="value">Pull from rental listing</span>
              </div>
              <div class="nu-compare-row discrepancy">
                <span class="label">Condition statement</span>
                <span class="value">Pull rental description verbatim</span>
              </div>
              <div class="nu-compare-row discrepancy">
                <span class="label">Included appliances / fixtures</span>
                <span class="value">Pull from rental listing</span>
              </div>
              <div class="nu-compare-row">
                <span class="label">Disclosed defects</span>
                <span class="value">Pull from rental listing</span>
              </div>
              <div class="nu-compare-row">
                <span class="label">HOA / use restrictions</span>
                <span class="value">Pull from rental listing</span>
              </div>
              <div class="nu-compare-row">
                <span class="label">Pet / smoking policy</span>
                <span class="value">Pull from rental listing</span>
              </div>
              <div class="nu-compare-row">
                <span class="label">Listed price</span>
                <span class="value">Monthly rent (pull amount)</span>
              </div>
            </div>
          </div>

          <!-- SALE CARD -->
          <div class="nu-compare-card sale">
            <div class="nu-compare-card-header">For-Sale Listing — As Published</div>
            <div class="nu-compare-card-body">
              <div class="nu-compare-row">
                <span class="label">Listing type</span>
                <span class="value">For-sale, fee simple</span>
              </div>
              <div class="nu-compare-row discrepancy">
                <span class="label">Stated square footage</span>
                <span class="value">Pull from sale MLS / Zillow</span>
              </div>
              <div class="nu-compare-row discrepancy">
                <span class="label">Bedroom / bath count</span>
                <span class="value">Pull from sale MLS / Zillow</span>
              </div>
              <div class="nu-compare-row">
                <span class="label">Year built</span>
                <span class="value">Pull from sale listing</span>
              </div>
              <div class="nu-compare-row discrepancy">
                <span class="label">Condition statement</span>
                <span class="value">Pull sale description verbatim</span>
              </div>
              <div class="nu-compare-row discrepancy">
                <span class="label">Included appliances / fixtures</span>
                <span class="value">Pull from sale listing</span>
              </div>
              <div class="nu-compare-row">
                <span class="label">Disclosed defects</span>
                <span class="value">Pull from sale listing</span>
              </div>
              <div class="nu-compare-row">
                <span class="label">HOA / use restrictions</span>
                <span class="value">Pull from sale listing</span>
              </div>
              <div class="nu-compare-row">
                <span class="label">Buyer agent comp</span>
                <span class="value">Pull from sale listing</span>
              </div>
              <div class="nu-compare-row">
                <span class="label">Listed price</span>
                <span class="value">Asking price (pull amount)</span>
              </div>
            </div>
          </div>

        </div>

        <p style="font-size: 0.85rem; color: #555; font-style: italic;">
          Note: Field values shown as instructions are placeholders for the data fetch step. Once both listings
          are pulled, populate this card with the actual published values verbatim, including punctuation. Do
          not paraphrase — paraphrasing changes legal meaning.
        </p>
      </section>

      <!-- SECTION 2: DISCREPANCY MATRIX -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Discrepancy</span><span class="rest">Severity Matrix</span>
        </h2>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">
          The matrix below classifies each conflict between the two listings by severity. <strong>HIGH</strong>
          severity items are material and must be reconciled before any new tenant or buyer document is signed.
          <strong>MEDIUM</strong> items should be reconciled before the listing is renewed or refreshed.
          <strong>LOW</strong> items are stylistic and can be aligned in the next routine update.
        </p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Rental Says</th>
                <th>Sale Says</th>
                <th>Severity</th>
                <th>Reconciliation Path</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="item-col">Square footage</td>
                <td>(per rental listing)</td>
                <td>(per sale listing)</td>
                <td><span class="severity-high">High</span></td>
                <td>Reconcile to county tax-assessor record or licensed appraisal. Update both listings.</td>
              </tr>
              <tr>
                <td class="item-col">Bedroom / bath count</td>
                <td>(per rental listing)</td>
                <td>(per sale listing)</td>
                <td><span class="severity-high">High</span></td>
                <td>Verify against permitted plans. A non-permitted bedroom cannot be advertised.</td>
              </tr>
              <tr>
                <td class="item-col">Material defects (roof, HVAC, foundation, water)</td>
                <td>(per rental listing)</td>
                <td>(per sale listing)</td>
                <td><span class="severity-high">High</span></td>
                <td>Adopt the more comprehensive disclosure. Never the lighter one.</td>
              </tr>
              <tr>
                <td class="item-col">Included appliances / fixtures</td>
                <td>(per rental listing)</td>
                <td>(per sale listing)</td>
                <td><span class="severity-med">Med</span></td>
                <td>Itemize. A unit included in the lease but excluded from the sale must be disclosed.</td>
              </tr>
              <tr>
                <td class="item-col">Condition language ("renovated", "new")</td>
                <td>(per rental listing)</td>
                <td>(per sale listing)</td>
                <td><span class="severity-med">Med</span></td>
                <td>Anchor any "new" or "renovated" claim to a date and a permit if available.</td>
              </tr>
              <tr>
                <td class="item-col">Use / zoning</td>
                <td>(per rental listing)</td>
                <td>(per sale listing)</td>
                <td><span class="severity-high">High</span></td>
                <td>Pull current zoning letter. Listings cannot imply uses outside permitted use.</td>
              </tr>
              <tr>
                <td class="item-col">HOA / restrictions / easements</td>
                <td>(per rental listing)</td>
                <td>(per sale listing)</td>
                <td><span class="severity-high">High</span></td>
                <td>Verify against the recorded covenants and the most recent HOA disclosure packet.</td>
              </tr>
              <tr>
                <td class="item-col">Photos / staging</td>
                <td>(per rental listing)</td>
                <td>(per sale listing)</td>
                <td><span class="severity-low">Low</span></td>
                <td>Confirm photos depict the property's current condition, not pre-renovation or staged-only.</td>
              </tr>
              <tr>
                <td class="item-col">Marketing copy tone</td>
                <td>(per rental listing)</td>
                <td>(per sale listing)</td>
                <td><span class="severity-low">Low</span></td>
                <td>Aligning brand voice across both listings. No legal weight, but reduces buyer confusion.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 3: RISK CATEGORIES -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Risk</span><span class="rest">Exposure if Left Unreconciled</span>
        </h2>

        <div class="nu-risk-grid">
          <div class="nu-risk-card legal">
            <div class="nu-risk-card-title">Legal — Misrepresentation</div>
            <div class="nu-risk-card-body">
              In Alabama, a seller's property condition disclosure carries statutory weight, and inconsistent
              advertising can be cited as evidence of intentional or negligent misrepresentation. A tenant who
              later becomes a buyer — or a buyer who interviews the tenant — will compare the two listings.
              Discrepancies invite rescission claims.
            </div>
          </div>
          <div class="nu-risk-card financial">
            <div class="nu-risk-card-title">Financial — Appraisal &amp; Lending</div>
            <div class="nu-risk-card-body">
              Appraisers pull both listings during their research phase. A square footage or bedroom count
              that differs between the two will trigger an appraisal note, slow the lender's underwriting,
              and may be used to argue down the appraised value. Same-property contradictions are red flags.
            </div>
          </div>
          <div class="nu-risk-card reputation">
            <div class="nu-risk-card-title">Reputation — Trust</div>
            <div class="nu-risk-card-body">
              Norris Utilities® operates on the strength of <em>A Legacy of Commitment®</em>. A tenant or buyer
              who finds an inconsistency loses confidence not only in the deal but in the principal. The cost
              of fixing the listings now is far less than the cost of repairing trust later.
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: ACTION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Action</span><span class="rest">Checklist — Reconciliation Steps</span>
        </h2>

        <ol class="nu-checklist">
          <li>
            <strong>Pull both listings in full.</strong>
            Save the rental listing and the for-sale listing as PDFs with timestamps. Include MLS, Zillow,
            Realtor.com, Apartments.com, and any property-management portal.
          </li>
          <li>
            <strong>Pull authoritative source records.</strong>
            County tax-assessor card, recorded deed, plat, zoning letter, current HOA disclosure packet,
            and any prior appraisal within 24 months.
          </li>
          <li>
            <strong>Populate the side-by-side card above with real data.</strong>
            Verbatim text only. No paraphrasing. Highlight every cell where the two listings disagree.
          </li>
          <li>
            <strong>Resolve each HIGH-severity row to the authoritative source.</strong>
            If the rental listing says 2,400 sq ft and the assessor says 2,180 sq ft, the listing is updated
            to 2,180 sq ft — never the other direction without an appraisal supporting the larger number.
          </li>
          <li>
            <strong>Update both listings simultaneously.</strong>
            Do not update one and leave the other for "next week." Inconsistency during transition is the
            highest-risk window. Stage the changes, then publish both within the same business day.
          </li>
          <li>
            <strong>Notify any party already under contract.</strong>
            If a tenant has signed a lease referencing a now-corrected fact, send a written addendum.
            If a buyer has an offer in, deliver an updated property condition disclosure.
          </li>
          <li>
            <strong>Archive the reconciliation file.</strong>
            Save the completed side-by-side, the source documents, and all updated listings to the property
            folder. This is the audit trail if any party questions the disclosure history later.
          </li>
          <li>
            <strong>Loop counsel before sign-off.</strong>
            Before re-publishing, run the reconciled disclosure language past real-estate counsel for a
            ten-minute review. The cost is trivial compared to a misrepresentation claim.
          </li>
        </ol>
      </section>

      <!-- SECTION 5: DECISION FRAME -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Decision</span><span class="rest">Frame — Three Paths Forward</span>
        </h2>

        <div class="nu-decision-box">
          <div class="nu-decision-title">Choose one path within 5 business days</div>
          <p style="font-size: 0.95rem; line-height: 1.65; color: rgba(255,255,255,0.9);">
            The longer the listings stay inconsistent, the more parties read them and the more downstream
            documents reference them. Pick a path and execute. The cost of staying in limbo is higher than
            the cost of any of these three choices.
          </p>
          <div class="nu-decision-options">
            <div class="nu-decision-option">
              <div class="nu-decision-option-title">A · Reconcile and keep both</div>
              <div class="nu-decision-option-body">
                Update both listings to a single source of truth. Continue marketing for both rent and sale.
                Best if the property is genuinely positioned for either outcome and the market is uncertain.
              </div>
            </div>
            <div class="nu-decision-option">
              <div class="nu-decision-option-title">B · Pull rental, focus on sale</div>
              <div class="nu-decision-option-body">
                Take down the rental listing, tighten the for-sale listing using the verified facts, and
                commit to a sale exit. Cleanest legal posture. Best if a sale is the preferred outcome.
              </div>
            </div>
            <div class="nu-decision-option">
              <div class="nu-decision-option-title">C · Pull sale, focus on rental</div>
              <div class="nu-decision-option-body">
                Take down the for-sale listing, tighten the rental listing, and hold the asset for income.
                Best if cash flow matters more than disposition right now.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SIGN-OFF -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Sign-Off</span><span class="rest">Reviewer Acknowledgment</span>
        </h2>
        <div class="nu-signoff">
          <div class="nu-signoff-row">
            <div>
              <div class="nu-signoff-label">Reviewed by</div>
              <div class="nu-signoff-line"></div>
            </div>
            <div>
              <div class="nu-signoff-label">Date</div>
              <div class="nu-signoff-line"></div>
            </div>
          </div>
          <div class="nu-signoff-row">
            <div>
              <div class="nu-signoff-label">Counsel review</div>
              <div class="nu-signoff-line"></div>
            </div>
            <div>
              <div class="nu-signoff-label">Date</div>
              <div class="nu-signoff-line"></div>
            </div>
          </div>
          <div class="nu-signoff-row">
            <div>
              <div class="nu-signoff-label">Path selected (A / B / C)</div>
              <div class="nu-signoff-line"></div>
            </div>
            <div>
              <div class="nu-signoff-label">Listings re-published on</div>
              <div class="nu-signoff-line"></div>
            </div>
          </div>
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
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Internal review document — not for external distribution without principal approval.
    </div>
  </footer>

</body>
</html>