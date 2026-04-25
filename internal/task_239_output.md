<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buttewoods Estate Acquisition — Negotiation Brief — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap');

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
      --nu-success: #2D7A3F;
      --nu-warning: #C9540C;
      --nu-danger: #B12424;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-inner { position: relative; z-index: 2; }

    /* Ghost phoenix watermark in header */
    .nu-phoenix-ghost {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.15rem;
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

    /* DOC LABEL BANNER */
    .nu-doc-banner {
      background: var(--nu-white);
      padding: 28px 40px 8px;
      text-align: center;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-doc-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.32em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-doc-title {
      font-size: 2.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .nu-doc-title .accent { color: var(--nu-blue); }
    .nu-doc-subtitle {
      font-size: 1.05rem;
      font-weight: 400;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }
    .nu-doc-meta {
      display: inline-flex;
      gap: 24px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 18px;
      padding: 12px 28px;
      background: var(--nu-light-gray);
      border-radius: 4px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .nu-doc-meta strong { color: var(--nu-dark-text); font-weight: 700; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 50px 40px 70px;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
    }

    /* SECTION */
    .nu-section { margin-bottom: 48px; }
    .nu-section-header {
      display: flex;
      align-items: baseline;
      gap: 14px;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-num {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.85rem;
      color: var(--nu-cyan);
      background: var(--nu-navy);
      padding: 5px 11px;
      border-radius: 3px;
      letter-spacing: 0.12em;
      flex-shrink: 0;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      line-height: 1.2;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .nu-lead {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 20px;
      max-width: 880px;
    }

    /* PROPERTY SNAPSHOT (hero) */
    .nu-snapshot {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 0;
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 60%, #0033CC 100%);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 8px 28px rgba(0,0,51,0.18);
    }
    .nu-snapshot-left {
      padding: 36px 36px 32px;
      color: var(--nu-white);
      position: relative;
    }
    .nu-snapshot-left::before {
      content: '';
      position: absolute;
      top: 24px; right: 24px; width: 90px; height: 90px;
      background: radial-gradient(circle, rgba(6,208,255,0.25) 0%, transparent 70%);
      border-radius: 50%;
    }
    .nu-snapshot-eyebrow {
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.28em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .nu-snapshot-address {
      font-size: 1.85rem;
      font-weight: 900;
      line-height: 1.18;
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .nu-snapshot-loc {
      font-size: 0.98rem;
      color: rgba(255,255,255,0.78);
      font-weight: 400;
      margin-bottom: 22px;
    }
    .nu-snapshot-status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(6,208,255,0.18);
      border: 1px solid rgba(6,208,255,0.4);
      padding: 7px 14px;
      border-radius: 20px;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--nu-cyan);
    }
    .nu-snapshot-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--nu-cyan);
      box-shadow: 0 0 8px var(--nu-cyan);
    }
    .nu-snapshot-right {
      background: rgba(255,255,255,0.04);
      padding: 28px 32px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px 22px;
      align-content: center;
      border-left: 1px solid rgba(255,255,255,0.08);
    }
    .nu-stat {
      color: var(--nu-white);
    }
    .nu-stat-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: rgba(255,255,255,0.62);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-stat-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-white);
      letter-spacing: -0.01em;
    }
    .nu-stat-sub {
      font-size: 0.78rem;
      font-weight: 400;
      color: rgba(255,255,255,0.7);
      margin-top: 2px;
    }

    /* PHASES TIMELINE */
    .nu-phases {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 12px;
    }
    .nu-phase {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 18px 16px;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-phase:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .nu-phase-num {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-phase-title {
      font-size: 1.02rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.25;
    }
    .nu-phase-window {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-cyan);
      background: var(--nu-navy);
      padding: 3px 9px;
      border-radius: 3px;
      display: inline-block;
      margin-bottom: 10px;
      letter-spacing: 0.04em;
    }
    .nu-phase-body {
      font-size: 0.86rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* TWO-COLUMN GRID */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card-title {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--nu-medium-gray);
      letter-spacing: -0.005em;
    }
    .nu-card-title span { color: var(--nu-dark-text); font-weight: 700; }

    .nu-list { list-style: none; padding: 0; margin: 0; }
    .nu-list li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 10px;
      font-size: 0.92rem;
      line-height: 1.55;
      color: var(--nu-body-text);
    }
    .nu-list li::before {
      content: '';
      position: absolute;
      left: 0; top: 9px;
      width: 12px; height: 2px;
      background: var(--nu-cyan);
    }
    .nu-list li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* VALUATION TABLE */
    .nu-table-wrap {
      background: var(--nu-white);
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 100%);
    }
    .nu-table thead th {
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 14px 18px;
      text-align: left;
      border: none;
    }
    .nu-table thead th:last-child { text-align: right; }
    .nu-table tbody tr { border-bottom: 1px solid var(--nu-medium-gray); }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table tbody tr:last-child { border-bottom: none; }
    .nu-table tbody td {
      padding: 13px 18px;
      font-size: 0.92rem;
      color: var(--nu-body-text);
      vertical-align: top;
    }
    .nu-table tbody td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 28%;
    }
    .nu-table tbody td:last-child {
      text-align: right;
      font-weight: 700;
      color: var(--nu-blue);
      white-space: nowrap;
    }
    .nu-table tfoot tr { background: #EAF4FF; border-top: 2px solid var(--nu-blue); }
    .nu-table tfoot td {
      padding: 16px 18px;
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .nu-table tfoot td:last-child {
      text-align: right;
      color: var(--nu-blue);
    }

    /* OFFER LADDER */
    .nu-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .nu-rung {
      position: relative;
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 22px 20px;
    }
    .nu-rung.opening { border-color: var(--nu-cyan); }
    .nu-rung.target { border-color: var(--nu-blue); background: linear-gradient(180deg, #F4F9FF 0%, var(--nu-white) 100%); }
    .nu-rung.walk { border-color: var(--nu-warning); }
    .nu-rung-tag {
      position: absolute;
      top: -11px;
      left: 16px;
      background: var(--nu-white);
      padding: 2px 10px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      border-radius: 3px;
    }
    .nu-rung.opening .nu-rung-tag { color: var(--nu-cyan); border: 1px solid var(--nu-cyan); background: var(--nu-navy); }
    .nu-rung.target .nu-rung-tag { color: var(--nu-white); background: var(--nu-blue); }
    .nu-rung.walk .nu-rung-tag { color: var(--nu-white); background: var(--nu-warning); }
    .nu-rung-amount {
      font-size: 1.85rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin: 8px 0 4px;
      letter-spacing: -0.015em;
    }
    .nu-rung-pct {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--nu-body-text);
      margin-bottom: 12px;
    }
    .nu-rung-desc {
      font-size: 0.86rem;
      line-height: 1.5;
      color: var(--nu-body-text);
    }

    /* CONCESSION CHIPS */
    .nu-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .nu-chip {
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-blue);
      padding: 10px 14px 10px 12px;
      border-radius: 0 4px 4px 0;
      font-size: 0.88rem;
      font-weight: 400;
      color: var(--nu-body-text);
      flex: 1 1 calc(33% - 10px);
      min-width: 220px;
    }
    .nu-chip strong { display: block; color: var(--nu-dark-text); font-weight: 700; margin-bottom: 2px; font-size: 0.92rem; }

    /* RISK BLOCKS */
    .nu-risks {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .nu-risk {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-warning);
      border-radius: 4px;
      padding: 16px 18px;
    }
    .nu-risk.high { border-left-color: var(--nu-danger); }
    .nu-risk.med  { border-left-color: var(--nu-warning); }
    .nu-risk.low  { border-left-color: var(--nu-success); }
    .nu-risk-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .nu-risk-title {
      font-size: 0.96rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .nu-risk-level {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 3px 9px;
      border-radius: 3px;
      color: var(--nu-white);
    }
    .nu-risk.high .nu-risk-level { background: var(--nu-danger); }
    .nu-risk.med  .nu-risk-level { background: var(--nu-warning); }
    .nu-risk.low  .nu-risk-level { background: var(--nu-success); }
    .nu-risk-body { font-size: 0.86rem; line-height: 1.55; color: var(--nu-body-text); }
    .nu-risk-mit { margin-top: 8px; font-size: 0.84rem; color: var(--nu-dark-text); }
    .nu-risk-mit strong { color: var(--nu-blue); }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 22px;
    }
    .nu-checklist li {
      position: relative;
      padding-left: 28px;
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 2px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* CTA BAND */
    .nu-cta-band {
      background: linear-gradient(135deg, var(--nu-navy) 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 28px;
      flex-wrap: wrap;
    }
    .nu-cta-text { flex: 1 1 360px; }
    .nu-cta-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.28em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-cta-title {
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 6px;
      line-height: 1.25;
    }
    .nu-cta-sub {
      font-size: 0.98rem;
      color: rgba(255,255,255,0.85);
    }
    .nu-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 13px 26px;
      border: none;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover { background: var(--nu-white); transform: translateY(-1px); }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-white);
      padding: 13px 26px;
      border: 2px solid rgba(255,255,255,0.6);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover { background: rgba(255,255,255,0.1); border-color: var(--nu-white); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 38px 40px 32px;
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
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-confidential {
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.1);
      font-size: 0.72rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* RESPONSIVE */
    @media (max-width: 980px) {
      .nu-snapshot { grid-template-columns: 1fr; }
      .nu-snapshot-right { border-left: none; border-top: 1px solid rgba(255,255,255,0.08); }
      .nu-phases { grid-template-columns: repeat(2, 1fr); }
      .nu-grid-2 { grid-template-columns: 1fr; }
      .nu-ladder { grid-template-columns: 1fr; }
      .nu-risks { grid-template-columns: 1fr; }
      .nu-checklist { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-doc-banner { padding: 22px 22px 8px; }
      .nu-doc-title { font-size: 1.5rem; }
      .nu-content-area { padding: 36px 20px 50px; }
      .nu-phases { grid-template-columns: 1fr; }
      .nu-snapshot-left, .nu-snapshot-right { padding: 24px; }
      .nu-snapshot-address { font-size: 1.4rem; }
      .nu-cta-band { padding: 26px 22px; flex-direction: column; align-items: flex-start; }
      .nu-table thead th, .nu-table tbody td { padding: 10px 12px; font-size: 0.84rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-card, .nu-phase, .nu-rung, .nu-risk { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-ghost" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#FFFFFF"/>
    </svg>
    <div class="nu-header-inner">
      <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
    </div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC BANNER -->
  <div class="nu-doc-banner">
    <div class="nu-doc-eyebrow">Real Estate Acquisition · Confidential Negotiation Brief</div>
    <h1 class="nu-doc-title"><span class="accent">4505 Buttewoods</span> — 7,098 sq ft Estate Acquisition</h1>
    <p class="nu-doc-subtitle">Strategy, valuation framework, and offer ladder for Aaron's negotiation of the Buttewoods estate purchase. Prepared for principal review only.</p>
    <div class="nu-doc-meta">
      <span><strong>Action ID:</strong> reMarkable-4505-BTW</span>
      <span><strong>Prepared:</strong> April 24, 2026</span>
      <span><strong>Owner:</strong> Aaron C. Norris</span>
      <span><strong>Status:</strong> Pre-Offer / Diligence</span>
    </div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- 01 PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">§ 01</div>
          <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        </div>
        <p class="nu-lead">A single, structured view of the asset under negotiation. All numerical entries below are framework placeholders for working anchors — confirm against MLS, county records, and a current appraisal before tendering an offer.</p>

        <div class="nu-snapshot">
          <div class="nu-snapshot-left">
            <div class="nu-snapshot-eyebrow">Subject Property</div>
            <div class="nu-snapshot-address">4505 Buttewoods</div>
            <div class="nu-snapshot-loc">Single-family estate · Off-market / Direct-to-owner approach</div>
            <div class="nu-snapshot-status"><span class="nu-snapshot-dot"></span>Negotiation In Progress</div>
          </div>
          <div class="nu-snapshot-right">
            <div class="nu-stat">
              <div class="nu-stat-label">Living Area</div>
              <div class="nu-stat-value">7,098 sq ft</div>
              <div class="nu-stat-sub">Heated &amp; cooled — confirm w/ tax record</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Property Type</div>
              <div class="nu-stat-value">Estate / Custom</div>
              <div class="nu-stat-sub">Primary residence class</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Acquisition Type</div>
              <div class="nu-stat-value">Direct Negotiation</div>
              <div class="nu-stat-sub">Owner-to-owner, agent optional</div>
            </div>
            <div class="nu-stat">
              <div class="nu-stat-label">Timeline Target</div>
              <div class="nu-stat-value">60–90 Days</div>
              <div class="nu-stat-sub">From LOI to close</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 02 NEGOTIATION TIMELINE -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">§ 02</div>
          <h2 class="nu-section-title">Negotiation <span>Timeline</span></h2>
        </div>
        <p class="nu-lead">Four-phase progression from first contact to closing. Each phase has an exit gate — do not advance until the gate clears.</p>

        <div class="nu-phases">
          <div class="nu-phase">
            <div class="nu-phase-num">Phase 1</div>
            <div class="nu-phase-window">Days 1–7</div>
            <div class="nu-phase-title">Discovery &amp; Rapport</div>
            <div class="nu-phase-body">Confirm seller motivation, ownership, encumbrances. Pull tax records, comparable sales within 1 mile. First in-person walkthrough. Listen — do not pitch a number.</div>
          </div>
          <div class="nu-phase">
            <div class="nu-phase-num">Phase 2</div>
            <div class="nu-phase-window">Days 8–21</div>
            <div class="nu-phase-title">Valuation &amp; Anchor</div>
            <div class="nu-phase-body">Independent appraisal ordered. Comp analysis finalized. Opening offer prepared with written rationale. LOI delivered with 5-business-day response window.</div>
          </div>
          <div class="nu-phase">
            <div class="nu-phase-num">Phase 3</div>
            <div class="nu-phase-window">Days 22–45</div>
            <div class="nu-phase-title">Counter &amp; Contract</div>
            <div class="nu-phase-body">Counter-offer rounds (max 3). Contract drafted by Aaron's real estate attorney. Earnest money escrowed. Inspection &amp; financing contingencies attached.</div>
          </div>
          <div class="nu-phase">
            <div class="nu-phase-num">Phase 4</div>
            <div class="nu-phase-window">Days 46–90</div>
            <div class="nu-phase-title">Diligence &amp; Close</div>
            <div class="nu-phase-body">Full inspection, survey, title commitment, lender appraisal. Final walkthrough 48 hrs before close. Funding wire 24 hrs prior. Recording at the courthouse.</div>
          </div>
        </div>
      </section>

      <!-- 03 VALUATION FRAMEWORK -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">§ 03</div>
          <h2 class="nu-section-title">Valuation <span>Framework</span></h2>
        </div>
        <p class="nu-lead">Anchor numbers below are working frameworks — they must be replaced with confirmed values from MLS, county tax records, and an independent appraisal before the LOI is issued.</p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Valuation Lever</th>
                <th>Method / Source</th>
                <th>Working Anchor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tax Assessed Value</td>
                <td>County tax record (most recent assessment)</td>
                <td>Confirm</td>
              </tr>
              <tr>
                <td>Comparable Sales</td>
                <td>3–5 closed sales within 1 mile, last 12 months, similar sq ft</td>
                <td>Pending pull</td>
              </tr>
              <tr>
                <td>Independent Appraisal</td>
                <td>Licensed appraiser engaged by Aaron — pre-LOI</td>
                <td>Order ASAP</td>
              </tr>
              <tr>
                <td>Replacement / Build Cost</td>
                <td>$ per sq ft × 7,098 sq ft, current Birmingham build market</td>
                <td>Cross-check</td>
              </tr>
              <tr>
                <td>Condition Adjustment</td>
                <td>Inspector findings — roof, HVAC, foundation, systems</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>Market Time-Decay</td>
                <td>Days on market or owner motivation discount</td>
                <td>Pending</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Composite Valuation Range</td>
                <td>Reconciled across all six levers above</td>
                <td>To finalize</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <!-- 04 OFFER LADDER -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">§ 04</div>
          <h2 class="nu-section-title">Offer <span>Ladder</span></h2>
        </div>
        <p class="nu-lead">Three pre-defined positions to enforce discipline during the negotiation. Aaron pre-decides each before the first phone call — emotion does not dictate movement.</p>

        <div class="nu-ladder">
          <div class="nu-rung opening">
            <div class="nu-rung-tag">Opening</div>
            <div class="nu-rung-amount">~85% of Anchor</div>
            <div class="nu-rung-pct">First written offer · LOI form</div>
            <div class="nu-rung-desc">Anchored low but defensible. Backed by written valuation rationale and at least three comps. Leaves room for two upward steps without breaching the walk-away.</div>
          </div>
          <div class="nu-rung target">
            <div class="nu-rung-tag">Target Close</div>
            <div class="nu-rung-amount">~92% of Anchor</div>
            <div class="nu-rung-pct">Aaron's preferred close · go / no-go</div>
            <div class="nu-rung-desc">The number Aaron is genuinely happy closing at. Contains concession credits already priced in (closing assistance, repairs, fixtures). This is the deal.</div>
          </div>
          <div class="nu-rung walk">
            <div class="nu-rung-tag">Walk-Away</div>
            <div class="nu-rung-amount">~98% of Anchor</div>
            <div class="nu-rung-pct">Hard ceiling · no exceptions</div>
            <div class="nu-rung-desc">Above this number Aaron walks. Decided in advance — never re-negotiated under pressure in the room. If seller will not move below this, the deal dies clean.</div>
          </div>
        </div>
      </section>

      <!-- 05 CONCESSION TOOLKIT -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">§ 05</div>
          <h2 class="nu-section-title">Concession <span>Toolkit</span></h2>
        </div>
        <p class="nu-lead">Non-price levers Aaron can trade for. Use these instead of moving the price line — they preserve the headline number while creating real value or flexibility.</p>

        <div class="nu-chips">
          <div class="nu-chip"><strong>Closing Date Flex</strong>Match seller's timing — earlier or later — without tying it to price.</div>
          <div class="nu-chip"><strong>Lease-Back</strong>Allow seller to occupy 30–60 days post-close at $0 or token rent.</div>
          <div class="nu-chip"><strong>As-Is Sale</strong>Accept property as-is in exchange for a verified price reduction.</div>
          <div class="nu-chip"><strong>Earnest Money Up</strong>Larger earnest deposit signals seriousness, asks for price respect.</div>
          <div class="nu-chip"><strong>Inspection Window</strong>Shorten or extend — match seller's anxiety profile.</div>
          <div class="nu-chip"><strong>Furnishings / Fixtures</strong>Include or exclude specific items; trade list against price.</div>
          <div class="nu-chip"><strong>Closing Cost Split</strong>Offer to absorb specific line items (title, survey) in lieu of price moves.</div>
          <div class="nu-chip"><strong>Cash vs. Financed</strong>Cash close shortens timeline; financed close preserves liquidity.</div>
          <div class="nu-chip"><strong>Contingency Trim</strong>Drop non-critical contingencies to strengthen the offer face.</div>
        </div>
      </section>

      <!-- 06 LEVERAGE & MOTIVATION -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">§ 06</div>
          <h2 class="nu-section-title">Leverage <span>&amp; Counterparty Read</span></h2>
        </div>

        <div class="nu-grid-2">
          <div class="nu-card">
            <div class="nu-card-title">Aaron's <span>Leverage Sources</span></div>
            <ul class="nu-list">
              <li><strong>Capital readiness.</strong> Pre-positioned funding source identified before LOI is issued.</li>
              <li><strong>No contingent sale.</strong> Aaron is not waiting on another property to close — strong vs. financed-buyer field.</li>
              <li><strong>Direct principal.</strong> Owner-to-owner conversation removes layered agent commission and friction.</li>
              <li><strong>Walk-away credibility.</strong> Real, documented walk-away number — not a bluff.</li>
              <li><strong>Speed advantage.</strong> Norris Utilities® cadence — Aaron can move faster than most household buyers.</li>
            </ul>
          </div>
          <div class="nu-card">
            <div class="nu-card-title">Seller <span>Motivation Reads</span></div>
            <ul class="nu-list">
              <li><strong>Time-pressure.</strong> Relocation, estate, divorce, tax timing — all favor buyer.</li>
              <li><strong>Carry cost.</strong> Vacant high-sq-ft homes bleed insurance, taxes, utilities monthly.</li>
              <li><strong>Days on market.</strong> Each 30 days listed compounds buyer leverage.</li>
              <li><strong>Failed prior contracts.</strong> Confirm whether the property has been under contract before — and why it died.</li>
              <li><strong>Personal relationship.</strong> Owner-to-owner trust often beats $5–25K of price spread.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 07 RISKS & MITIGATIONS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">§ 07</div>
          <h2 class="nu-section-title">Risks <span>&amp; Mitigations</span></h2>
        </div>

        <div class="nu-risks">
          <div class="nu-risk high">
            <div class="nu-risk-head">
              <div class="nu-risk-title">Overpayment Above Walk-Away</div>
              <div class="nu-risk-level">High</div>
            </div>
            <div class="nu-risk-body">Emotion in the room pushes Aaron above the pre-set ceiling. Once paid, irreversible.</div>
            <div class="nu-risk-mit"><strong>Mitigation:</strong> Walk-away number written down before first call. No verbal counter above it without a 24-hour cooling period.</div>
          </div>
          <div class="nu-risk high">
            <div class="nu-risk-head">
              <div class="nu-risk-title">Hidden Structural / System Defect</div>
              <div class="nu-risk-level">High</div>
            </div>
            <div class="nu-risk-body">7,098 sq ft estate has many systems. Roof, HVAC, foundation, plumbing, septic/sewer surprises are five-figure events.</div>
            <div class="nu-risk-mit"><strong>Mitigation:</strong> Full home inspection + sewer scope + structural review. Repair credits negotiated before contingency release.</div>
          </div>
          <div class="nu-risk med">
            <div class="nu-risk-head">
              <div class="nu-risk-title">Title / Encumbrance Issue</div>
              <div class="nu-risk-level">Medium</div>
            </div>
            <div class="nu-risk-body">Liens, easements, undisclosed heirs, or HOA conflicts can stall or kill a close.</div>
            <div class="nu-risk-mit"><strong>Mitigation:</strong> Title commitment ordered Phase 2. Owner's title insurance non-negotiable at closing.</div>
          </div>
          <div class="nu-risk med">
            <div class="nu-risk-head">
              <div class="nu-risk-title">Appraisal Gap</div>
              <div class="nu-risk-level">Medium</div>
            </div>
            <div class="nu-risk-body">Lender appraisal comes in below contract price. Without a gap clause Aaron is short on financing.</div>
            <div class="nu-risk-mit"><strong>Mitigation:</strong> Appraisal contingency stays in. Cap on gap coverage written into the offer.</div>
          </div>
          <div class="nu-risk med">
            <div class="nu-risk-head">
              <div class="nu-risk-title">Seller Cold-Feet / Pull-Back</div>
              <div class="nu-risk-level">Medium</div>
            </div>
            <div class="nu-risk-body">Off-market deals can collapse if seller second-guesses. Especially common with multi-decade owners.</div>
            <div class="nu-risk-mit"><strong>Mitigation:</strong> Tight timeline from LOI to executed contract. Earnest money posted immediately. Specific performance language.</div>
          </div>
          <div class="nu-risk low">
            <div class="nu-risk-head">
              <div class="nu-risk-title">Insurance / Carry Cost Surprise</div>
              <div class="nu-risk-level">Low</div>
            </div>
            <div class="nu-risk-body">Premium quotes on 7,098 sq ft estates can be substantially higher than expected.</div>
            <div class="nu-risk-mit"><strong>Mitigation:</strong> Insurance bind quote pulled in Phase 3 before contingency release.</div>
          </div>
        </div>
      </section>

      <!-- 08 CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">§ 08</div>
          <h2 class="nu-section-title">Pre-Offer <span>Checklist</span></h2>
        </div>
        <p class="nu-lead">Aaron does not issue an LOI until every box below is checked. This is the discipline gate.</p>

        <ul class="nu-checklist">
          <li><strong>Tax record pulled</strong> from county website — assessed value &amp; ownership confirmed.</li>
          <li><strong>3–5 comps closed</strong> within 1 mile, last 12 months — written summary file.</li>
          <li><strong>Independent appraisal</strong> ordered &amp; reviewed by Aaron.</li>
          <li><strong>Replacement-cost cross-check</strong> at current Birmingham $/sq ft.</li>
          <li><strong>Walk-away number written</strong> on paper, signed by Aaron, dated.</li>
          <li><strong>Capital source confirmed</strong> — proof of funds or pre-approval letter ready.</li>
          <li><strong>Real estate attorney engaged</strong> — Aaron's contract counsel on standby.</li>
          <li><strong>Title research initial pass</strong> — no obvious public-record red flags.</li>
          <li><strong>Inspector identified</strong> — full home + sewer scope + structural.</li>
          <li><strong>Insurance quote sourced</strong> — annual premium estimate in hand.</li>
          <li><strong>Concession toolkit pre-priced</strong> — Aaron knows what each lever is worth.</li>
          <li><strong>LOI drafted &amp; reviewed</strong> — clean, specific, response window stated.</li>
        </ul>
      </section>

      <!-- 09 NEXT ACTIONS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">§ 09</div>
          <h2 class="nu-section-title">Aaron's <span>Next Actions</span></h2>
        </div>

        <div class="nu-grid-2">
          <div class="nu-card">
            <div class="nu-card-title">This <span>Week</span></div>
            <ul class="nu-list">
              <li>Pull county tax record and confirm legal owner of 4505 Buttewoods.</li>
              <li>Order independent appraisal — engage licensed Birmingham appraiser.</li>
              <li>Schedule first in-person walkthrough — observe condition, listen for motivation cues.</li>
              <li>Brief real estate attorney; confirm contract template ready for use.</li>
            </ul>
          </div>
          <div class="nu-card">
            <div class="nu-card-title">Within <span>30 Days</span></div>
            <ul class="nu-list">
              <li>Finalize valuation file — comps, appraisal, replacement cost, condition adjustment.</li>
              <li>Lock walk-away number in writing — no verbal-only commitments.</li>
              <li>Issue LOI with 5-business-day seller response window.</li>
              <li>Open inspection / title / insurance vendor channels in parallel.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA BAND -->
      <div class="nu-cta-band">
        <div class="nu-cta-text">
          <div class="nu-cta-eyebrow">Principal Review</div>
          <div class="nu-cta-title">Review valuation file before issuing LOI.</div>
          <div class="nu-cta-sub">No offer leaves Aaron's desk until §08 checklist is complete and the walk-away number is signed in writing.</div>
        </div>
        <div class="nu-cta-actions">
          <a class="nu-btn-primary" href="tel:2055001343">Call Aaron · 205-500-1343</a>
          <a class="nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=Buttewoods%20Estate%20%E2%80%94%20Negotiation%20Brief">Email Brief</a>
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
    <div class="nu-footer-confidential">Confidential · Prepared for Aaron C. Norris · Internal Negotiation Use Only</div>
  </footer>

</body>
</html>