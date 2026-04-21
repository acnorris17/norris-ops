<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Action Item: Pull 2018 Compass Bank → McKnight Deed — Norris Utilities®</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');

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
  --nu-alert-red: #C41E3A;
  --nu-success-green: #2E7D32;
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
.nu-header > * { position: relative; z-index: 2; }

.nu-phoenix-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  opacity: 0.95;
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
  font-size: 1.2rem;
  color: var(--nu-white);
  letter-spacing: 0.7em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.nu-tagline {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 300;
  font-size: 1.25rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
}

/* GHOST PHOENIX WATERMARK */
.nu-ghost-phoenix {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  opacity: 0.07;
  z-index: 1;
  pointer-events: none;
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
  padding: 60px 40px;
}
.nu-container {
  max-width: 1100px;
  margin: 0 auto;
}

/* DOC META */
.nu-doc-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 24px;
  background: var(--nu-light-gray);
  border-left: 4px solid var(--nu-blue);
  margin-bottom: 36px;
  border-radius: 4px;
}
.nu-meta-item {
  font-size: 0.88rem;
}
.nu-meta-label {
  font-weight: 700;
  color: var(--nu-blue);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.72rem;
  display: block;
  margin-bottom: 4px;
}
.nu-meta-value {
  color: var(--nu-dark-text);
  font-weight: 400;
}

/* TITLE BLOCK */
.nu-title-block {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--nu-medium-gray);
}
.nu-eyebrow {
  color: var(--nu-blue);
  font-weight: 900;
  font-size: 0.82rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.nu-page-title {
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-dark-text);
  line-height: 1.15;
  margin-bottom: 14px;
}
.nu-page-title .accent { color: var(--nu-blue); }
.nu-page-subtitle {
  font-size: 1.15rem;
  color: var(--nu-body-text);
  font-weight: 400;
  line-height: 1.5;
}

/* PRIORITY BANNER */
.nu-priority-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  background: linear-gradient(135deg, #FFF4E5 0%, #FFE8CC 100%);
  border-left: 5px solid #E67E00;
  padding: 18px 24px;
  margin-bottom: 36px;
  border-radius: 4px;
}
.nu-priority-icon {
  flex-shrink: 0;
  width: 40px; height: 40px;
  background: #E67E00;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 900;
}
.nu-priority-text {
  font-size: 0.95rem;
  color: #7A3E00;
}
.nu-priority-text strong {
  color: #4A2500;
  display: block;
  margin-bottom: 2px;
  font-size: 1rem;
}

/* SECTION */
.nu-section {
  margin-bottom: 40px;
}
.nu-section-title {
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 16px;
  line-height: 1.2;
}
.nu-section-title .first {
  color: var(--nu-blue);
}
.nu-section-title .rest {
  color: var(--nu-dark-text);
  font-weight: 700;
}

/* CONTEXT CARD */
.nu-context-card {
  background: var(--nu-white);
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid var(--nu-medium-gray);
  margin-bottom: 24px;
}
.nu-context-card p {
  margin-bottom: 14px;
}
.nu-context-card p:last-child { margin-bottom: 0; }

/* INSTRUMENT BOX */
.nu-instrument-box {
  background: linear-gradient(135deg, #F0F4FF 0%, #E6EEFF 100%);
  border: 2px solid var(--nu-blue);
  border-radius: 8px;
  padding: 24px 28px;
  margin: 20px 0;
}
.nu-instrument-box .inst-label {
  font-size: 0.78rem;
  color: var(--nu-blue);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 6px;
}
.nu-instrument-box .inst-number {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--nu-dark-text);
  letter-spacing: 0.03em;
}
.nu-instrument-box .inst-sub {
  font-size: 0.9rem;
  color: var(--nu-body-text);
  margin-top: 8px;
}

/* STEP LIST */
.nu-step-list {
  list-style: none;
  counter-reset: step-counter;
}
.nu-step {
  counter-increment: step-counter;
  position: relative;
  padding: 20px 24px 20px 72px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  margin-bottom: 14px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.nu-step:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.nu-step::before {
  content: counter(step-counter);
  position: absolute;
  left: 20px;
  top: 20px;
  width: 36px;
  height: 36px;
  background: var(--nu-blue);
  color: var(--nu-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1rem;
}
.nu-step-title {
  font-weight: 700;
  color: var(--nu-dark-text);
  font-size: 1.05rem;
  margin-bottom: 6px;
}
.nu-step-body {
  font-size: 0.95rem;
  color: var(--nu-body-text);
}
.nu-step-body a {
  color: var(--nu-blue);
  text-decoration: none;
  font-weight: 700;
  border-bottom: 1px dashed var(--nu-blue);
}
.nu-step-body a:hover { border-bottom-style: solid; }

/* CHEVRON BADGES */
.nu-badge-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
  margin: 24px 0;
}
.nu-badge {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 16px 28px 16px 20px;
  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
  font-weight: 700;
  font-size: 0.92rem;
}
.nu-badge svg {
  width: 28px; height: 28px;
  margin-right: 12px;
  fill: var(--nu-cyan);
  flex-shrink: 0;
}

/* INFO GRID */
.nu-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin: 20px 0;
}
.nu-info-cell {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 6px;
  padding: 18px 20px;
}
.nu-info-cell-label {
  font-size: 0.72rem;
  color: var(--nu-blue);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
}
.nu-info-cell-value {
  font-size: 1rem;
  color: var(--nu-dark-text);
  font-weight: 400;
  line-height: 1.4;
}
.nu-info-cell-value strong {
  font-weight: 700;
  display: block;
}

/* RESOURCE TABLE */
.nu-resource-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.nu-resource-table thead {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
}
.nu-resource-table th {
  color: var(--nu-white);
  padding: 14px 18px;
  text-align: left;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.nu-resource-table td {
  padding: 14px 18px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.93rem;
  vertical-align: top;
}
.nu-resource-table tr:last-child td { border-bottom: none; }
.nu-resource-table tr:nth-child(even) { background: var(--nu-light-gray); }

/* CHECKLIST */
.nu-checklist {
  list-style: none;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 8px;
}
.nu-checklist li {
  padding: 12px 16px 12px 48px;
  position: relative;
  border-bottom: 1px solid var(--nu-light-gray);
  font-size: 0.95rem;
}
.nu-checklist li:last-child { border-bottom: none; }
.nu-checklist li::before {
  content: '';
  position: absolute;
  left: 16px;
  top: 15px;
  width: 20px;
  height: 20px;
  border: 2px solid var(--nu-blue);
  border-radius: 4px;
  background: var(--nu-white);
}

/* NOTES BOX */
.nu-notes-box {
  background: #FFFDF5;
  border: 1px solid var(--nu-accent-gold);
  border-left: 5px solid var(--nu-accent-gold);
  padding: 20px 24px;
  border-radius: 4px;
  margin: 20px 0;
}
.nu-notes-box-title {
  font-weight: 900;
  color: #7A5D0A;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
}
.nu-notes-box p {
  font-size: 0.95rem;
  color: #4A3B0A;
  margin-bottom: 8px;
}
.nu-notes-box p:last-child { margin-bottom: 0; }

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 44px 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 300;
  font-size: 1.15rem;
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
.nu-footer-divider {
  width: 60px;
  height: 2px;
  background: var(--nu-cyan);
  margin: 16px auto;
  opacity: 0.6;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nu-header { padding: 40px 20px 60px; min-height: 200px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
  .nu-tagline { font-size: 1rem; }
  .nu-content-area { padding: 40px 20px; }
  .nu-page-title { font-size: 1.7rem; }
  .nu-badge { clip-path: none; border-radius: 8px; }
  .nu-resource-table thead { display: none; }
  .nu-resource-table, .nu-resource-table tbody, .nu-resource-table tr, .nu-resource-table td {
    display: block; width: 100%;
  }
  .nu-resource-table tr {
    margin-bottom: 14px; border: 1px solid var(--nu-medium-gray); border-radius: 6px;
  }
  .nu-resource-table td { border-bottom: 1px solid var(--nu-light-gray); padding: 10px 14px; }
  .nu-resource-table td::before {
    content: attr(data-label);
    font-weight: 900; color: var(--nu-blue); text-transform: uppercase;
    font-size: 0.7rem; letter-spacing: 0.1em; display: block; margin-bottom: 4px;
  }
}

@media print {
  body { background: white; }
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-step, .nu-context-card { box-shadow: none; page-break-inside: avoid; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
  </svg>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
</header>

<!-- CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <!-- DOC META -->
    <div class="nu-doc-meta">
      <div class="nu-meta-item">
        <span class="nu-meta-label">Document Type</span>
        <span class="nu-meta-value">Action Item — Public Records Retrieval</span>
      </div>
      <div class="nu-meta-item">
        <span class="nu-meta-label">Source</span>
        <span class="nu-meta-value">reMarkable Tablet Capture</span>
      </div>
      <div class="nu-meta-item">
        <span class="nu-meta-label">Date Opened</span>
        <span class="nu-meta-value">April 21, 2026</span>
      </div>
      <div class="nu-meta-item">
        <span class="nu-meta-label">Owner</span>
        <span class="nu-meta-value">Aaron C. Norris</span>
      </div>
      <div class="nu-meta-item">
        <span class="nu-meta-label">Status</span>
        <span class="nu-meta-value">Open — Ready to Execute</span>
      </div>
    </div>

    <!-- TITLE -->
    <div class="nu-title-block">
      <div class="nu-eyebrow">reMarkable Action Item</div>
      <h1 class="nu-page-title">
        Pull the <span class="accent">2018 Compass Bank → McKnight</span> Deed
      </h1>
      <p class="nu-page-subtitle">
        Retrieve the recorded deed (Instrument No. 2018-XXXXXXX) filed with the Jefferson County Probate Court when Compass Bank conveyed the Buttewood property to the McKnight party. This is a title-chain document needed for the 4505 Buttewood estate review.
      </p>
    </div>

    <!-- PRIORITY BANNER -->
    <div class="nu-priority-banner">
      <div class="nu-priority-icon">!</div>
      <div class="nu-priority-text">
        <strong>Why this matters</strong>
        The 2018 Compass Bank → McKnight deed is the prior link in the title chain for the 4505 Buttewood estate negotiation. Without it, the chain is incomplete and we cannot verify clean title, outstanding liens released at closing, or the consideration paid in the prior REO sale.
      </div>
    </div>

    <!-- INSTRUMENT CALLOUT -->
    <div class="nu-section">
      <h2 class="nu-section-title"><span class="first">Instrument</span> <span class="rest">Reference</span></h2>
      <div class="nu-instrument-box">
        <div class="inst-label">Instrument Number (as captured on reMarkable)</div>
        <div class="inst-number">2018 — 20180 _ _ _ _ _ _</div>
        <div class="inst-sub">
          Full instrument number was cut off on the reMarkable note. Pull the complete instrument number off the handwritten page before filing the request, or search by grantor/grantee if the remainder cannot be read.
        </div>
      </div>
      <div class="nu-info-grid">
        <div class="nu-info-cell">
          <div class="nu-info-cell-label">Grantor</div>
          <div class="nu-info-cell-value"><strong>Compass Bank</strong>(BBVA Compass / BBVA USA — now PNC Bank)</div>
        </div>
        <div class="nu-info-cell">
          <div class="nu-info-cell-label">Grantee</div>
          <div class="nu-info-cell-value"><strong>McKnight</strong>(confirm full legal name — individual or LLC)</div>
        </div>
        <div class="nu-info-cell">
          <div class="nu-info-cell-label">Recording Year</div>
          <div class="nu-info-cell-value"><strong>2018</strong>Jefferson County, Alabama — Probate Court, Real Property Records</div>
        </div>
        <div class="nu-info-cell">
          <div class="nu-info-cell-label">Likely Instrument Type</div>
          <div class="nu-info-cell-value"><strong>Statutory Warranty Deed</strong>(post-foreclosure REO conveyance — verify)</div>
        </div>
      </div>
    </div>

    <!-- STEP-BY-STEP -->
    <div class="nu-section">
      <h2 class="nu-section-title"><span class="first">How</span> <span class="rest">to Pull It — Step by Step</span></h2>
      <ol class="nu-step-list">
        <li class="nu-step">
          <div class="nu-step-title">Confirm the full instrument number</div>
          <div class="nu-step-body">
            Re-read the reMarkable page where this was captured. The number starts 20180... Write down every digit before searching. If illegible, skip to Step 3 (grantor/grantee search) — you do not need the instrument number to find the deed.
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-title">Open the Jefferson County AL online records portal</div>
          <div class="nu-step-body">
            Jefferson County Probate Court — Real Property Records online search. Go to <a href="https://probate.jccal.org" target="_blank" rel="noopener">probate.jccal.org</a> and click the Real Property / Land Records search link. Free online search of the index; certified copies cost extra.
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-title">Search by instrument number (preferred)</div>
          <div class="nu-step-body">
            Enter the full 2018 instrument number in the "Instrument Number" field. If the system returns exactly one deed, you have it — proceed to Step 5.
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-title">Fallback — search by grantor/grantee</div>
          <div class="nu-step-body">
            If the instrument number is incomplete, use Name Search: Grantor = "Compass Bank" (try also "BBVA Compass Bank, N.A." and "BBVA USA"), Grantee = "McKnight". Narrow the date range to 01/01/2018 – 12/31/2018. You should get a short hit list — identify the deed tied to the 4505 Buttewood parcel.
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-title">Verify it is the correct property</div>
          <div class="nu-step-body">
            Open the deed image and confirm the legal description matches 4505 Buttewood — check the lot/block, subdivision name, and deed plat book reference. If the parcel ID appears, cross-check it against the Jefferson County Tax Assessor record.
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-title">Save the image locally</div>
          <div class="nu-step-body">
            Download the full deed PDF. Save to <code>~/norris-ops/docs/title-research/buttewood-4505/</code> with filename: <code>2018-CompassBank-to-McKnight-InstXXXXXXX.pdf</code>. Do not rely on the county portal — links expire.
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-title">Order a certified copy (if needed for closing)</div>
          <div class="nu-step-body">
            If the deed is going into a title package or closing binder, request a certified copy. Current Jefferson County fee: ~$1.00 per page plus $5.00 certification. Can be ordered online, by mail, or in person at the courthouse (716 Richard Arrington Jr. Blvd N, Birmingham, AL 35203).
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-title">Log it and move to the next link in the chain</div>
          <div class="nu-step-body">
            Update the Buttewood title-chain tracker with: deed found (Y/N), recording date, book/page, consideration paid, and any exceptions noted. Next link: whoever conveyed TO Compass Bank (likely a 2017 or earlier foreclosure deed from the prior owner).
          </div>
        </li>
      </ol>
    </div>

    <!-- BADGES -->
    <div class="nu-section">
      <h2 class="nu-section-title"><span class="first">What</span> <span class="rest">to Look For on the Deed</span></h2>
      <div class="nu-badge-row">
        <div class="nu-badge">
          <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
          Full legal description
        </div>
        <div class="nu-badge">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          Grantee's full legal name
        </div>
        <div class="nu-badge">
          <svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
          Consideration paid
        </div>
        <div class="nu-badge">
          <svg viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z"/></svg>
          Prior deed reference
        </div>
        <div class="nu-badge">
          <svg viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/></svg>
          Mortgage release info
        </div>
        <div class="nu-badge">
          <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          Exceptions / easements
        </div>
      </div>
    </div>

    <!-- RESOURCES -->
    <div class="nu-section">
      <h2 class="nu-section-title"><span class="first">Resources</span> <span class="rest">&amp; Contacts</span></h2>
      <table class="nu-resource-table">
        <thead>
          <tr>
            <th>Resource</th>
            <th>Contact / Location</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Resource"><strong>Jefferson County Probate Court — Real Property</strong></td>
            <td data-label="Contact / Location">716 Richard Arrington Jr. Blvd N, Room 220<br>Birmingham, AL 35203<br>(205) 325-5411</td>
            <td data-label="Notes">Primary source for the recorded deed. Online search free; certified copies ~$1/page + $5 cert.</td>
          </tr>
          <tr>
            <td data-label="Resource"><strong>Jefferson County Online Records</strong></td>
            <td data-label="Contact / Location">probate.jccal.org — Real Property Search</td>
            <td data-label="Notes">Free online index and deed images back to ~1998. Works 24/7.</td>
          </tr>
          <tr>
            <td data-label="Resource"><strong>Jefferson County Tax Assessor</strong></td>
            <td data-label="Contact / Location">jctax.jccal.org</td>
            <td data-label="Notes">Use to verify parcel ID for 4505 Buttewood and confirm deed ties to the right property.</td>
          </tr>
          <tr>
            <td data-label="Resource"><strong>Title company (optional)</strong></td>
            <td data-label="Contact / Location">Local Birmingham title company (TBD preferred vendor)</td>
            <td data-label="Notes">If pulling more than 2–3 chain links, it is faster to order an O&amp;E (ownership &amp; encumbrance) report — typically $75–$150.</td>
          </tr>
          <tr>
            <td data-label="Resource"><strong>Compass / BBVA / PNC records</strong></td>
            <td data-label="Contact / Location">PNC Bank (successor to BBVA USA, successor to Compass Bank)</td>
            <td data-label="Notes">Only needed if the recorded deed image is missing or illegible — unlikely.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- CHECKLIST -->
    <div class="nu-section">
      <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Checklist</span></h2>
      <ul class="nu-checklist">
        <li>Full 2018 instrument number confirmed from reMarkable page</li>
        <li>Jefferson County online portal searched (instrument number or grantor/grantee)</li>
        <li>Correct deed identified — legal description matches 4505 Buttewood</li>
        <li>Deed PDF downloaded and saved to ~/norris-ops/docs/title-research/buttewood-4505/</li>
        <li>Key data extracted: grantee legal name, consideration, mortgage release, exceptions</li>
        <li>Buttewood title-chain tracker updated with findings</li>
        <li>Certified copy ordered (if required for closing package)</li>
        <li>Next chain link identified (pre-2018 deed into Compass Bank)</li>
      </ul>
    </div>

    <!-- NOTES -->
    <div class="nu-notes-box">
      <div class="nu-notes-box-title">Working Notes</div>
      <p><strong>Why Compass Bank was the grantor:</strong> the 2018 deed is almost certainly a post-foreclosure REO sale. Compass Bank (later BBVA Compass / BBVA USA, now PNC) took the property back at foreclosure and then resold it to McKnight. That means the deed should reference a prior foreclosure deed or auctioneer's deed as the source of Compass Bank's title — capture that reference, because it is the next link back in the chain.</p>
      <p><strong>Name variations to try:</strong> "Compass Bank", "Compass Bank, N.A.", "BBVA Compass Bank", "BBVA Compass Bank, N.A.", "Compass Bancshares". Alabama records may index any of these.</p>
      <p><strong>If the reMarkable page shows only partial digits:</strong> 2018 Jefferson County instrument numbers typically run 7 digits after the year prefix. Don't guess missing digits — use the name search instead.</p>
    </div>

    <!-- OUTPUT FOR AARON -->
    <div class="nu-section">
      <h2 class="nu-section-title"><span class="first">What</span> <span class="rest">to Report Back</span></h2>
      <div class="nu-context-card">
        <p>When the deed is in hand, send a one-paragraph summary covering:</p>
        <p>• <strong>Deed found:</strong> yes / no — if no, why (e.g., grantee name differs, year differs).<br>
        • <strong>Full instrument number and recording date</strong> (month/day/year).<br>
        • <strong>Grantee legal name</strong> — individual, married couple, LLC, or trust.<br>
        • <strong>Consideration paid</strong> — dollar amount shown on the deed or deed stamps.<br>
        • <strong>Exceptions, easements, or reservations</strong> — anything that would follow the title forward.<br>
        • <strong>Prior deed reference</strong> — the book/page or instrument number that put title INTO Compass Bank (the next chain link to pull).</p>
        <p>File the deed and the summary under <strong>~/norris-ops/docs/title-research/buttewood-4505/</strong> and push to GitHub per the ops portal rule.</p>
      </div>
    </div>

  </div>
</main>

<!-- FOOTER -->
<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-divider"></div>
  <div class="nu-footer-contact">
    <strong>Aaron C. Norris</strong> — Founder &amp; CEO<br>
    Norris Utilities®, LLC — Birmingham, Alabama<br>
    <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
</footer>

</body>
</html>