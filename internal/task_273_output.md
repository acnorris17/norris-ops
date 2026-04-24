<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Action Item — Southern Company Standards Update — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
<style>
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
  --nu-amber: #F59E0B;
  --nu-amber-bg: #FEF3C7;
  --nu-green: #059669;
  --nu-green-bg: #D1FAE5;
  --nu-red: #DC2626;
  --nu-red-bg: #FEE2E2;
  --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'Playfair Display', Georgia, serif;
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

/* ══ HEADER ══ */
.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 55%, #00AAFF 80%, var(--nu-cyan) 100%);
  padding: 60px 40px 90px;
  text-align: center;
  overflow: hidden;
  min-height: 280px;
}
.nu-header::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 60px),
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
.nu-header-inner { position: relative; z-index: 2; }

.nu-phoenix-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 14px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--nu-white);
  letter-spacing: 0.75em;
  text-transform: uppercase;
  margin-bottom: 18px;
  padding-left: 0.75em;
}
.nu-tagline {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
}

/* ══ CHEVRON ══ */
.nu-chevron {
  position: relative;
  height: 50px;
  margin-top: -50px;
  z-index: 10;
}
.nu-chevron svg { width: 100%; height: 50px; display: block; }

/* ══ CONTENT ══ */
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
  width: 65%; max-width: 700px; aspect-ratio: 1;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path d='M100 10 L110 40 L140 20 L120 50 L160 40 L130 70 L150 100 L110 80 L100 120 L90 80 L50 100 L70 70 L40 40 L80 50 L60 20 L90 40 Z M100 110 L104 140 L120 130 L110 150 L100 190 L90 150 L80 130 L96 140 Z' fill='%230000FF' opacity='0.07'/></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  opacity: 1;
  z-index: 0;
  pointer-events: none;
}
.nu-content-inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 40px 70px;
}

/* ══ STATUS RIBBON ══ */
.status-ribbon {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-left: 6px solid var(--nu-amber);
  border-radius: 8px;
  padding: 18px 22px;
  margin-bottom: 32px;
  box-shadow: 0 2px 14px rgba(0,0,0,0.06);
}
.status-ribbon-left { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--nu-amber-bg);
  color: #92400E;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 999px;
}
.status-pill::before {
  content: '';
  width: 8px; height: 8px;
  background: var(--nu-amber);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);
}
.status-meta {
  font-size: 0.88rem;
  color: var(--nu-body-text);
}
.status-meta strong { color: var(--nu-dark-text); font-weight: 700; }
.status-id {
  font-family: 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.78rem;
  color: var(--nu-blue-deep);
  background: var(--nu-light-gray);
  padding: 4px 10px;
  border-radius: 4px;
  letter-spacing: 0.05em;
}

/* ══ SECTION TITLE ══ */
.section-title {
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 6px;
  letter-spacing: 0.01em;
}
.section-title .first { color: var(--nu-blue-deep); }
.section-title .rest { color: var(--nu-dark-text); }
.section-title-rule {
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
  margin-bottom: 22px;
}

/* ══ TASK HERO ══ */
.task-hero {
  background: linear-gradient(135deg, var(--nu-white) 0%, #FAFBFF 100%);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 40px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.05);
}
.task-hero h1 {
  font-weight: 900;
  font-size: 2rem;
  color: var(--nu-dark-text);
  line-height: 1.2;
  margin-bottom: 14px;
}
.task-hero h1 .accent { color: var(--nu-blue-deep); }
.task-hero .subhead {
  font-size: 1.05rem;
  color: var(--nu-body-text);
  max-width: 780px;
}

/* ══ TWO-COLUMN GRID ══ */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 40px;
}
@media (max-width: 820px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}

/* ══ INFO CARD ══ */
.info-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.08);
}
.info-card h3 {
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--nu-blue-deep);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.info-card p { font-size: 0.95rem; margin-bottom: 8px; }
.info-card p:last-child { margin-bottom: 0; }
.info-card .label {
  display: inline-block;
  min-width: 110px;
  font-weight: 700;
  color: var(--nu-dark-text);
}

/* ══ KPI TILES ══ */
.kpi-tile {
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  border-radius: 10px;
  padding: 22px;
  position: relative;
  overflow: hidden;
}
.kpi-tile::after {
  content: '';
  position: absolute;
  top: -40%; right: -30%;
  width: 70%; height: 200%;
  background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
}
.kpi-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--nu-cyan);
  margin-bottom: 8px;
  font-weight: 700;
  position: relative;
  z-index: 1;
}
.kpi-value {
  font-weight: 900;
  font-size: 1.6rem;
  line-height: 1.1;
  margin-bottom: 4px;
  position: relative;
  z-index: 1;
}
.kpi-sub {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.75);
  position: relative;
  z-index: 1;
}

/* ══ STEP LIST ══ */
.step-list {
  list-style: none;
  counter-reset: step;
  margin-bottom: 40px;
}
.step-item {
  position: relative;
  padding: 20px 22px 20px 72px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  margin-bottom: 12px;
  counter-increment: step;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}
.step-item::before {
  content: counter(step);
  position: absolute;
  left: 18px; top: 50%;
  transform: translateY(-50%);
  width: 38px; height: 38px;
  background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
  color: var(--nu-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,255,0.25);
}
.step-item h4 {
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--nu-dark-text);
  margin-bottom: 4px;
}
.step-item p {
  font-size: 0.94rem;
  color: var(--nu-body-text);
}
.step-item .step-meta {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.78rem;
  color: var(--nu-blue-deep);
  background: var(--nu-light-gray);
  padding: 3px 10px;
  border-radius: 4px;
  font-weight: 700;
}

/* ══ CHEVRON BADGE ══ */
.nu-badge {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 14px 28px 14px 18px;
  margin-bottom: 12px;
  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.02em;
}
.nu-badge svg { width: 26px; height: 26px; margin-right: 12px; flex-shrink: 0; fill: var(--nu-cyan); }
@media (max-width: 600px) {
  .nu-badge { clip-path: none; border-radius: 8px; }
}

/* ══ CALLOUT ══ */
.callout {
  background: linear-gradient(135deg, #EBF2FF 0%, #F4F8FF 100%);
  border: 1px solid #C5D6FF;
  border-left: 6px solid var(--nu-blue);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 28px;
}
.callout-title {
  font-weight: 900;
  font-size: 0.85rem;
  color: var(--nu-blue-deep);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}
.callout-body { font-size: 0.96rem; color: var(--nu-dark-text); }

/* ══ TABLE ══ */
.contact-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 40px;
}
.contact-table th {
  background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-blue-deep) 100%);
  color: var(--nu-white);
  text-align: left;
  padding: 14px 18px;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.contact-table td {
  padding: 14px 18px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.94rem;
  vertical-align: top;
}
.contact-table tr:last-child td { border-bottom: none; }
.contact-table tr:nth-child(even) td { background: #FAFBFC; }
.contact-table .name { font-weight: 700; color: var(--nu-dark-text); }
.contact-table .role { font-size: 0.84rem; color: #6B7280; }

/* ══ TIMELINE ══ */
.timeline {
  position: relative;
  padding-left: 32px;
  margin-bottom: 40px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 11px; top: 6px; bottom: 6px;
  width: 2px;
  background: linear-gradient(to bottom, var(--nu-blue) 0%, var(--nu-cyan) 100%);
}
.timeline-item { position: relative; padding-bottom: 22px; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-item::before {
  content: '';
  position: absolute;
  left: -27px; top: 4px;
  width: 12px; height: 12px;
  background: var(--nu-white);
  border: 3px solid var(--nu-blue);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(0,0,255,0.1);
}
.timeline-date {
  font-weight: 900;
  font-size: 0.82rem;
  color: var(--nu-blue-deep);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}
.timeline-text { font-size: 0.94rem; color: var(--nu-body-text); }

/* ══ ACTION ROW ══ */
.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
  padding: 36px 24px;
  background: linear-gradient(135deg, #F8FAFF 0%, #EEF4FF 100%);
  border-radius: 12px;
  margin-bottom: 32px;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.94rem;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}
.btn-primary {
  background: var(--nu-blue);
  color: var(--nu-white);
}
.btn-primary:hover {
  background: #0000CC;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0,0,255,0.32);
}
.btn-secondary {
  background: transparent;
  color: var(--nu-blue);
  border-color: var(--nu-blue);
}
.btn-secondary:hover {
  background: var(--nu-blue);
  color: var(--nu-white);
}

/* ══ FOOTER ══ */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #001A99 100%);
  color: rgba(255,255,255,0.85);
  padding: 50px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.nu-footer::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
}
.nu-footer-tagline {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
  font-size: 1.3rem;
  color: var(--nu-cyan);
  margin-bottom: 16px;
}
.nu-footer-contact {
  font-size: 0.95rem;
  line-height: 1.9;
}
.nu-footer-contact strong { color: var(--nu-white); font-weight: 700; }
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
  transition: color 0.2s ease;
}
.nu-footer-contact a:hover { color: var(--nu-white); text-decoration: underline; }
.nu-footer-meta {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid rgba(255,255,255,0.12);
  font-size: 0.78rem;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.04em;
}

/* ══ RESPONSIVE ══ */
@media (max-width: 768px) {
  .nu-header { padding: 44px 22px 70px; min-height: 220px; }
  .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-content-inner { padding: 36px 22px 50px; }
  .task-hero { padding: 24px; }
  .task-hero h1 { font-size: 1.5rem; }
  .status-ribbon { flex-direction: column; align-items: flex-start; }
  .contact-table th, .contact-table td { padding: 12px; font-size: 0.86rem; }
  .step-item { padding: 18px 18px 18px 64px; }
}

@media print {
  body { background: var(--nu-white); }
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .info-card, .step-item, .contact-table { box-shadow: none; }
  .action-row { display: none; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <div class="nu-header-inner">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </div>
</header>

<!-- WHITE CHEVRON TRANSITION -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
  </svg>
</div>

<!-- MAIN CONTENT -->
<main class="nu-content-area">
  <div class="nu-content-inner">

    <!-- STATUS RIBBON -->
    <div class="status-ribbon">
      <div class="status-ribbon-left">
        <span class="status-pill">Open · Action Required</span>
        <span class="status-meta"><strong>Owner:</strong> Aaron C. Norris</span>
        <span class="status-meta"><strong>Source:</strong> reMarkable</span>
        <span class="status-meta"><strong>Logged:</strong> 2026-04-24</span>
      </div>
      <span class="status-id">TASK · SOCO-STD-2026-04-24</span>
    </div>

    <!-- TASK HERO -->
    <div class="task-hero">
      <h1>Get <span class="accent">Southern Company</span> Standards Update</h1>
      <p class="subhead">
        Confirm the current revision of Southern Company's published material and equipment specifications
        for FlexPro Armor bucket covers, Skylift bucket trucks, Samson Rope, and Bay Shore Systems drill rigs.
        Result will be filed against active proposals and propagated to the line card spec sheets.
      </p>
    </div>

    <!-- KPI TILES -->
    <h2 class="section-title"><span class="first">Action</span> <span class="rest">Snapshot</span></h2>
    <div class="section-title-rule"></div>
    <div class="grid-3">
      <div class="kpi-tile">
        <div class="kpi-label">Priority</div>
        <div class="kpi-value">High</div>
        <div class="kpi-sub">Affects active utility proposals</div>
      </div>
      <div class="kpi-tile">
        <div class="kpi-label">Target Close</div>
        <div class="kpi-value">5 Business Days</div>
        <div class="kpi-sub">By 2026-05-01</div>
      </div>
      <div class="kpi-tile">
        <div class="kpi-label">Operating Companies</div>
        <div class="kpi-value">4</div>
        <div class="kpi-sub">Alabama Power · Georgia Power · Mississippi Power · Southern Power</div>
      </div>
    </div>

    <!-- WHY IT MATTERS -->
    <h2 class="section-title"><span class="first">Why</span> <span class="rest">It Matters</span></h2>
    <div class="section-title-rule"></div>
    <div class="callout">
      <div class="callout-title">Context</div>
      <div class="callout-body">
        Southern Company is the parent of Alabama Power, Georgia Power, Mississippi Power, and Southern Power —
        a primary utility customer footprint for Norris Utilities®. Their material and equipment standards documents
        govern what bucket cover dimensions, rope ratings, drill rig specs, and aerial-lift configurations are eligible
        on their projects. A stale standards reference can disqualify a quote on a technicality. This update closes
        that risk for the full FlexPro Armor + Skylift + Samson + Bay Shore line card.
      </div>
    </div>

    <!-- WHAT TO CONFIRM -->
    <h2 class="section-title"><span class="first">What</span> <span class="rest">to Confirm</span></h2>
    <div class="section-title-rule"></div>

    <div class="nu-badge">
      <svg viewBox="0 0 24 24"><path d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h12v2H3z"/></svg>
      Aerial Device &amp; Bucket Cover Specifications
    </div>
    <div class="nu-badge">
      <svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V5l-8-3z"/></svg>
      Synthetic Rope &amp; Sling Standards (Samson)
    </div>
    <div class="nu-badge">
      <svg viewBox="0 0 24 24"><path d="M5 20h14v2H5zM12 2 4 14h5v6h6v-6h5z"/></svg>
      Drill Rig &amp; Auger Equipment Standards (Bay Shore)
    </div>
    <div class="nu-badge">
      <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8z"/></svg>
      Vendor Approval &amp; Qualified Products List Status
    </div>

    <!-- ACTION STEPS -->
    <h2 class="section-title" style="margin-top: 40px;"><span class="first">Action</span> <span class="rest">Steps</span></h2>
    <div class="section-title-rule"></div>
    <ol class="step-list">
      <li class="step-item">
        <h4>Pull current standards from Southern Company supplier portal</h4>
        <p>Log into the Southern Company supplier/vendor portal and download the latest material and construction standards revisions for distribution and transmission overhead. Note revision number, effective date, and any redline change pages.</p>
        <span class="step-meta">Owner: Aaron · Due: 2026-04-25</span>
      </li>
      <li class="step-item">
        <h4>Reach out to Alabama Power standards engineering</h4>
        <p>Confirm with Alabama Power's standards engineering point of contact whether any unpublished or pending revisions affect bucket cover sizing, rope ratings, or aerial device approvals. Ask specifically about NU-BC-2851 and NU-BC-2834 dimensional acceptance.</p>
        <span class="step-meta">Owner: Aaron · Due: 2026-04-28</span>
      </li>
      <li class="step-item">
        <h4>Cross-check with Skylift, Samson, and Bay Shore</h4>
        <p>Send the latest Southern Co revision number to Nick Gordon (Skylift), Donna Poll &amp; Sarah Daniels (Samson — CC both), and Andy Barron (Bay Shore Systems). Confirm each vendor's products are still listed/approved at the current revision.</p>
        <span class="step-meta">Owner: Aaron · Due: 2026-04-29</span>
      </li>
      <li class="step-item">
        <h4>File update in ops portal and update line card spec sheets</h4>
        <p>Save standards PDF and revision summary to ~/norris-ops/internal/standards/southern_company/. Update the Norris Utilities® line card spec callouts where any wording references prior revisions. Push to GitHub per standing rule.</p>
        <span class="step-meta">Owner: Aaron · Due: 2026-04-30</span>
      </li>
      <li class="step-item">
        <h4>Notify CB and flag affected open proposals</h4>
        <p>Caroline Butler reviews the open proposal list and flags any quotes referencing a superseded Southern Co standard for revision before sending. Aaron reviews flagged items before any customer-facing revision goes out.</p>
        <span class="step-meta">Owner: Caroline Butler · Due: 2026-05-01</span>
      </li>
    </ol>

    <!-- KEY CONTACTS -->
    <h2 class="section-title"><span class="first">Key</span> <span class="rest">Contacts</span></h2>
    <div class="section-title-rule"></div>
    <table class="contact-table">
      <thead>
        <tr>
          <th>Contact</th>
          <th>Organization</th>
          <th>Reason to Engage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="name">Aaron C. Norris</div>
            <div class="role">Founder &amp; CEO</div>
          </td>
          <td>Norris Utilities®, LLC</td>
          <td>Owns the standards confirmation process; primary relationship to all Southern Co operating companies.</td>
        </tr>
        <tr>
          <td>
            <div class="name">Nick Gordon</div>
            <div class="role">Pricing &amp; Specs</div>
          </td>
          <td>Skylift</td>
          <td>Confirm Skylift bucket truck configurations remain on the Southern Co qualified equipment list.</td>
        </tr>
        <tr>
          <td>
            <div class="name">Donna Poll &amp; Sarah Daniels</div>
            <div class="role">Distributor Support — CC both</div>
          </td>
          <td>Samson Rope</td>
          <td>Verify rope grades and sling configurations against the current Southern Co synthetic rope spec.</td>
        </tr>
        <tr>
          <td>
            <div class="name">Andy Barron</div>
            <div class="role">Sales &amp; Travel Partner</div>
          </td>
          <td>Bay Shore Systems</td>
          <td>Confirm drill rig and auger equipment alignment for Southern Co distribution work.</td>
        </tr>
        <tr>
          <td>
            <div class="name">Caroline Butler (CB)</div>
            <div class="role">Administration — Tier 1 Trust</div>
          </td>
          <td>Norris Utilities®, LLC</td>
          <td>Reconciles open proposals against the new revision; flags items that need re-quoting before send.</td>
        </tr>
      </tbody>
    </table>

    <!-- TIMELINE -->
    <h2 class="section-title"><span class="first">Working</span> <span class="rest">Timeline</span></h2>
    <div class="section-title-rule"></div>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">2026-04-24 · Today</div>
        <div class="timeline-text">Action item logged from reMarkable. Task assigned to Aaron. Tracker entry created.</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2026-04-25</div>
        <div class="timeline-text">Pull current Southern Company standards revision from supplier portal. Note revision and effective date.</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2026-04-28</div>
        <div class="timeline-text">Direct confirmation with Alabama Power standards engineering. Capture verbal/written confirmation in tracker.</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2026-04-29</div>
        <div class="timeline-text">Vendor cross-check distributed to Skylift, Samson, and Bay Shore. Replies logged.</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2026-04-30</div>
        <div class="timeline-text">Standards filed to ops portal. Line card spec callouts updated and pushed to GitHub.</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2026-05-01 · Target Close</div>
        <div class="timeline-text">CB completes proposal sweep. Aaron signs off. Action item marked complete.</div>
      </div>
    </div>

    <!-- DELIVERABLES -->
    <h2 class="section-title"><span class="first">Deliverables</span> <span class="rest">on Close</span></h2>
    <div class="section-title-rule"></div>
    <div class="grid-2">
      <div class="info-card">
        <h3>Filed Documents</h3>
        <p><span class="label">Path:</span> ~/norris-ops/internal/standards/southern_company/</p>
        <p><span class="label">Format:</span> Original PDF + one-page revision summary</p>
        <p><span class="label">Naming:</span> SoCo_Standards_Rev[##]_[YYYY-MM-DD].pdf</p>
      </div>
      <div class="info-card">
        <h3>Tracker Update</h3>
        <p><span class="label">File:</span> master_tracker (operations)</p>
        <p><span class="label">Status:</span> Open → Closed-Verified</p>
        <p><span class="label">Note:</span> Revision number, effective date, vendor confirmations attached.</p>
      </div>
      <div class="info-card">
        <h3>Line Card Refresh</h3>
        <p><span class="label">Scope:</span> Internal HTML line card + spec sheet PDFs</p>
        <p><span class="label">Action:</span> Update any spec callouts referencing prior revision</p>
        <p><span class="label">Push:</span> Live at ops.norrisutilities.com per standing rule</p>
      </div>
      <div class="info-card">
        <h3>Proposal Sweep</h3>
        <p><span class="label">Owner:</span> Caroline Butler</p>
        <p><span class="label">Scope:</span> All open quotes touching Southern Co operating companies</p>
        <p><span class="label">Gate:</span> Aaron review before any customer-facing revision sends</p>
      </div>
    </div>

    <!-- ACTION ROW -->
    <div class="action-row">
      <a href="mailto:acnorris@norrisutilities.com?subject=Southern%20Co%20Standards%20Update%20%E2%80%94%20Status" class="btn btn-primary">Send Status Update</a>
      <a href="tel:2055001343" class="btn btn-secondary">Call Aaron — 205-500-1343</a>
    </div>

  </div>
</main>

<!-- FOOTER -->
<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    <strong>Aaron C. Norris</strong> | Founder &amp; CEO | Norris Utilities®, LLC<br>
    130 Inverness Plaza #210, Birmingham, AL 35242<br>
    <a href="tel:2055001343">205-500-1343</a> ·
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> ·
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
  <div class="nu-footer-meta">
    Internal Action Item · Generated 2026-04-24 · Norris Utilities® Autonomous Build Engine
  </div>
</footer>

</body>
</html>