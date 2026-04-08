/**
 * Norris Utilities® Celebrations Library v2.0
 * Zero dependencies. Pure JS + SVG + CSS @keyframes.
 * Usage: <script src="/celebrations.js"></script>
 *        window.celebrate()  — random animation
 *        window.megaCelebrate() — all-section-complete
 */
(function () {
  'use strict';

  /* ─── Brand Colors ─── */
  var C = {
    blue: '#0000FF',
    cyan: '#06D0FF',
    navy: '#0a0e5c',
    white: '#FFFFFF',
    gold: '#FFD700'
  };

  /* ─── Streak tracking ─── */
  window.nuStreak = 0;
  var lastPlayed = -1;

  /* ─── SVG Character Builders ─── */
  function svgOneWheel(x, y, scale, glow) {
    var s = scale || 1;
    var g = glow || C.cyan;
    return '<g transform="translate(' + x + ',' + y + ') scale(' + s + ')">' +
      '<ellipse cx="0" cy="0" rx="18" ry="18" fill="#222" stroke="#444" stroke-width="2"/>' +
      '<ellipse cx="0" cy="0" rx="14" ry="14" fill="#333"/>' +
      '<rect x="-30" y="-8" width="60" height="6" rx="3" fill="#1a1a1a"/>' +
      '<rect x="-28" y="-7" width="12" height="4" rx="2" fill="' + g + '" opacity="0.7"/>' +
      '<rect x="16" y="-7" width="12" height="4" rx="2" fill="' + g + '" opacity="0.7"/>' +
      '<rect x="-32" y="-6" width="6" height="4" rx="2" fill="#555"/>' +
      '<rect x="26" y="-6" width="6" height="4" rx="2" fill="#555"/>' +
      '</g>';
  }

  function svgAaron(x, y, scale, flip) {
    var s = scale || 1;
    var f = flip ? ' scale(-1,1)' : '';
    return '<g transform="translate(' + x + ',' + y + ') scale(' + s + ')' + f + '">' +
      '<g transform="translate(0,-50)">' +
      // body
      '<rect x="-12" y="10" width="24" height="28" rx="4" fill="' + C.navy + '"/>' +
      // NU logo on shirt
      '<text x="0" y="28" text-anchor="middle" font-size="7" font-weight="900" fill="' + C.cyan + '">NU</text>' +
      // head
      '<circle cx="0" cy="0" r="12" fill="#d4a574"/>' +
      // hair
      '<path d="M-12,-2 Q-12,-14 0,-14 Q12,-14 12,-2 L10,-4 Q10,-12 0,-12 Q-10,-12 -10,-4Z" fill="#2a1a0a"/>' +
      // eyes
      '<circle cx="-4" cy="-1" r="1.5" fill="#1a1a1a"/>' +
      '<circle cx="4" cy="-1" r="1.5" fill="#1a1a1a"/>' +
      // confident smile
      '<path d="M-4,4 Q0,8 4,4" fill="none" stroke="#1a1a1a" stroke-width="1.2"/>' +
      // arms
      '<line x1="-12" y1="16" x2="-20" y2="28" stroke="#d4a574" stroke-width="4" stroke-linecap="round"/>' +
      '<line x1="12" y1="16" x2="20" y2="28" stroke="#d4a574" stroke-width="4" stroke-linecap="round"/>' +
      // legs
      '<line x1="-6" y1="38" x2="-8" y2="50" stroke="' + C.navy + '" stroke-width="5" stroke-linecap="round"/>' +
      '<line x1="6" y1="38" x2="8" y2="50" stroke="' + C.navy + '" stroke-width="5" stroke-linecap="round"/>' +
      // boots
      '<rect x="-12" y="48" width="8" height="4" rx="2" fill="#333"/>' +
      '<rect x="4" y="48" width="8" height="4" rx="2" fill="#333"/>' +
      '</g>' +
      svgOneWheel(0, 4, 1, C.cyan) +
      '</g>';
  }

  function svgCB(x, y, scale, flip) {
    var s = scale || 1;
    var f = flip ? ' scale(-1,1)' : '';
    return '<g transform="translate(' + x + ',' + y + ') scale(' + s + ')' + f + '">' +
      '<g transform="translate(0,-48)">' +
      // body
      '<rect x="-11" y="10" width="22" height="26" rx="4" fill="#2266aa"/>' +
      // head
      '<circle cx="0" cy="0" r="11" fill="#e8c4a0"/>' +
      // brown shoulder-length hair
      '<path d="M-11,-2 Q-12,-13 0,-13 Q12,-13 11,-2 L13,8 Q14,12 12,10 L11,-2" fill="#6b3a1f"/>' +
      '<path d="M-11,-2 L-13,8 Q-14,12 -12,10 L-11,-2" fill="#6b3a1f"/>' +
      // eyes
      '<circle cx="-3.5" cy="-1" r="1.3" fill="#1a1a1a"/>' +
      '<circle cx="3.5" cy="-1" r="1.3" fill="#1a1a1a"/>' +
      // friendly smile
      '<path d="M-3.5,3.5 Q0,7 3.5,3.5" fill="none" stroke="#c0705a" stroke-width="1.2"/>' +
      // arms
      '<line x1="-11" y1="14" x2="-18" y2="26" stroke="#e8c4a0" stroke-width="3.5" stroke-linecap="round"/>' +
      '<line x1="11" y1="14" x2="18" y2="26" stroke="#e8c4a0" stroke-width="3.5" stroke-linecap="round"/>' +
      // legs
      '<line x1="-5" y1="36" x2="-7" y2="48" stroke="#2266aa" stroke-width="4.5" stroke-linecap="round"/>' +
      '<line x1="5" y1="36" x2="7" y2="48" stroke="#2266aa" stroke-width="4.5" stroke-linecap="round"/>' +
      // shoes
      '<rect x="-11" y="46" width="7" height="3.5" rx="1.5" fill="#8B4513"/>' +
      '<rect x="4" y="46" width="7" height="3.5" rx="1.5" fill="#8B4513"/>' +
      '</g>' +
      svgOneWheel(0, 4, 0.9, C.cyan) +
      '</g>';
  }

  function svgLegacy(x, y, scale) {
    var s = scale || 1;
    return '<g transform="translate(' + x + ',' + y + ') scale(' + s + ')">' +
      // glow
      '<circle cx="0" cy="-10" r="28" fill="' + C.cyan + '" opacity="0.08"/>' +
      // phoenix body
      '<path d="M0,-30 L8,-18 L14,-10 L10,0 L6,8 L0,12 L-6,8 L-10,0 L-14,-10 L-8,-18Z" fill="' + C.blue + '"/>' +
      // inner detail
      '<path d="M0,-24 L5,-16 L8,-8 L5,2 L0,6 L-5,2 L-8,-8 L-5,-16Z" fill="' + C.cyan + '" opacity="0.5"/>' +
      // wings spread
      '<path d="M-14,-10 L-30,-20 L-26,-8 L-14,-2Z" fill="' + C.blue + '"/>' +
      '<path d="M14,-10 L30,-20 L26,-8 L14,-2Z" fill="' + C.blue + '"/>' +
      // wing highlights
      '<path d="M-14,-10 L-26,-16 L-22,-8 L-14,-4Z" fill="' + C.cyan + '" opacity="0.4"/>' +
      '<path d="M14,-10 L26,-16 L22,-8 L14,-4Z" fill="' + C.cyan + '" opacity="0.4"/>' +
      // eye
      '<circle cx="-3" cy="-16" r="2" fill="' + C.white + '"/>' +
      '<circle cx="3" cy="-16" r="2" fill="' + C.white + '"/>' +
      '<circle cx="-3" cy="-16" r="1" fill="' + C.navy + '"/>' +
      '<circle cx="3" cy="-16" r="1" fill="' + C.navy + '"/>' +
      // tail feathers
      '<path d="M-4,12 L-8,24 L0,18Z" fill="' + C.cyan + '" opacity="0.6"/>' +
      '<path d="M4,12 L8,24 L0,18Z" fill="' + C.cyan + '" opacity="0.6"/>' +
      '<path d="M0,12 L0,28Z" stroke="' + C.blue + '" stroke-width="2"/>' +
      // floating onewheel below
      '<g transform="translate(0,36)" opacity="0.8">' +
      '<ellipse cx="0" cy="0" rx="14" ry="14" fill="' + C.navy + '" stroke="' + C.cyan + '" stroke-width="1.5" opacity="0.6"/>' +
      '<rect x="-24" y="-5" width="48" height="4" rx="2" fill="' + C.navy + '" opacity="0.6"/>' +
      '<rect x="-22" y="-4" width="10" height="2" rx="1" fill="' + C.cyan + '" opacity="0.5"/>' +
      '<rect x="12" y="-4" width="10" height="2" rx="1" fill="' + C.cyan + '" opacity="0.5"/>' +
      '</g>' +
      '</g>';
  }

  function svgMiniPhoenix(x, y, scale) {
    var s = scale || 0.4;
    return '<g transform="translate(' + x + ',' + y + ') scale(' + s + ')">' +
      '<path d="M0,-14 L4,-8 L7,-4 L4,2 L0,5 L-4,2 L-7,-4 L-4,-8Z" fill="' + C.cyan + '"/>' +
      '<path d="M-7,-4 L-14,-10 L-12,-4 L-7,0Z" fill="' + C.cyan + '" opacity="0.7"/>' +
      '<path d="M7,-4 L14,-10 L12,-4 L7,0Z" fill="' + C.cyan + '" opacity="0.7"/>' +
      '<circle cx="0" cy="-8" r="1.5" fill="' + C.white + '"/>' +
      '</g>';
  }

  /* ─── Utility Functions ─── */
  function createOverlay() {
    var ov = document.createElement('div');
    ov.className = 'nu-celebrate-overlay';
    ov.style.cssText = 'position:fixed;inset:0;z-index:99999;pointer-events:all;overflow:hidden;';
    ov.addEventListener('click', function () { ov.style.opacity = '0'; ov.style.transition = 'opacity 0.3s'; setTimeout(function () { if (ov.parentNode) ov.remove(); }, 300); });
    document.body.appendChild(ov);
    return ov;
  }

  function autoDismiss(ov, ms) {
    setTimeout(function () {
      if (!ov.parentNode) return;
      ov.style.transition = 'opacity 0.6s ease-out';
      ov.style.opacity = '0';
      setTimeout(function () { if (ov.parentNode) ov.remove(); }, 600);
    }, ms || 4000);
  }

  function bigText(text, color, fontSize) {
    return '<text x="50%" y="85%" text-anchor="middle" font-family="Lato,sans-serif" font-weight="900" font-size="' + (fontSize || 48) + '" fill="' + (color || C.white) + '" stroke="' + C.navy + '" stroke-width="2">' + text + '</text>';
  }

  function injectCSS() {
    if (document.getElementById('nu-celebrate-css')) return;
    var style = document.createElement('style');
    style.id = 'nu-celebrate-css';
    style.textContent = [
      '@keyframes nuFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}',
      '@keyframes nuBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}',
      '@keyframes nuSpin{from{transform:rotate(0)}to{transform:rotate(360deg)}}',
      '@keyframes nuPulse{0%,100%{opacity:1}50%{opacity:0.5}}',
      '@keyframes nuSlideR{from{transform:translateX(-120%)}to{transform:translateX(120vw)}}',
      '@keyframes nuSlideL{from{transform:translateX(120vw)}to{transform:translateX(-120%)}}',
      '@keyframes nuFadeUp{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-60px)}}',
      '@keyframes nuZoomIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}',
      '@keyframes nuShake{0%,100%{transform:rotate(0)}25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}}',
      '@keyframes nuDrop{0%{transform:translateY(-100vh)}60%{transform:translateY(10px)}80%{transform:translateY(-5px)}100%{transform:translateY(0)}}',
      '@keyframes nuConfetti{0%{transform:translateY(-10px) rotate(0);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}',
      '@keyframes nuSwoopIn{0%{transform:translate(100vw,-100vh) scale(0.3)}40%{transform:translate(0,0) scale(1)}100%{transform:translate(-100vw,-100vh) scale(0.3)}}',
      '@keyframes nuFlash{0%,100%{opacity:0}10%,90%{opacity:1}}',
      '@keyframes nuOrbit{from{transform:rotate(0) translateX(80px) rotate(0)}to{transform:rotate(360deg) translateX(80px) rotate(-360deg)}}',
      '@keyframes nuTrailDraw{from{stroke-dashoffset:1000}to{stroke-dashoffset:0}}',
      '@keyframes nuFireFlicker{0%,100%{opacity:0.8;transform:scale(1)}50%{opacity:1;transform:scale(1.1)}}',
      '@keyframes nuWobble{0%{transform:rotate(0)}15%{transform:rotate(-15deg)}30%{transform:rotate(12deg)}45%{transform:rotate(-8deg)}60%{transform:rotate(4deg)}75%{transform:rotate(-2deg)}100%{transform:rotate(0)}}',
      '.nu-celebrate-overlay svg{width:100%;height:100%;position:absolute;top:0;left:0}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function randomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function rand(min, max) { return Math.random() * (max - min) + min; }

  function confettiParticles(count, colors) {
    var p = '';
    for (var i = 0; i < count; i++) {
      var cx = rand(5, 95);
      var delay = rand(0, 2);
      var dur = rand(1.5, 3.5);
      var col = randomFrom(colors || [C.blue, C.cyan, C.white, C.gold]);
      var size = rand(4, 10);
      var shape = Math.random() > 0.5
        ? '<rect x="' + cx + '%" y="-2%" width="' + size + '" height="' + (size * 0.6) + '" rx="1" fill="' + col + '" style="animation:nuConfetti ' + dur + 's ' + delay + 's ease-in forwards"/>'
        : '<circle cx="' + cx + '%" cy="-2%" r="' + (size / 2) + '" fill="' + col + '" style="animation:nuConfetti ' + dur + 's ' + delay + 's ease-in forwards"/>';
      p += shape;
    }
    return p;
  }

  /* ═══════════════════════════════════════
     THE 21 ANIMATIONS
     ═══════════════════════════════════════ */

  /* 01 — PARADE */
  function anim01(ov) {
    var svg = '<svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // confetti
    svg += confettiParticles(60, [C.blue, C.cyan, C.white]);
    // Aaron leading
    svg += '<g style="animation:nuSlideR 4s ease-in-out forwards">';
    svg += svgAaron(0, 340, 1.2);
    svg += '</g>';
    // CB following
    svg += '<g style="animation:nuSlideR 4s 0.4s ease-in-out forwards">';
    svg += svgCB(0, 340, 1.1);
    svg += '</g>';
    // Legacy floating above
    svg += '<g style="animation:nuSlideR 4s 0.2s ease-in-out forwards">';
    svg += '<g style="animation:nuFloat 1.5s ease-in-out infinite">';
    svg += svgLegacy(0, 180, 1.0);
    svg += '</g></g>';
    // AI agents zipping
    for (var i = 0; i < 4; i++) {
      svg += '<g style="animation:nuSlideR ' + (2.5 + i * 0.3) + 's ' + (i * 0.2) + 's ease-in-out forwards">';
      svg += '<g style="animation:nuBob ' + (0.6 + i * 0.2) + 's ease-in-out infinite">';
      svg += svgMiniPhoenix(0, 140 + i * 30, 0.5);
      svg += '</g></g>';
    }
    svg += bigText('PARADE!', C.white, 52);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4500);
  }

  /* 02 — PHOENIX STRIKE */
  function anim02(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // Glowing checkbox
    svg += '<g transform="translate(600,300)">';
    svg += '<rect x="-20" y="-20" width="40" height="40" rx="6" fill="none" stroke="' + C.cyan + '" stroke-width="3">';
    svg += '<animate attributeName="opacity" values="1;0" begin="1.5s" dur="0.3s" fill="freeze"/>';
    svg += '</rect>';
    svg += '<path d="M-10,0 L-3,8 L12,-10" stroke="' + C.cyan + '" stroke-width="4" fill="none">';
    svg += '<animate attributeName="opacity" values="1;0" begin="1.5s" dur="0.3s" fill="freeze"/>';
    svg += '</path>';
    svg += '</g>';
    // Legacy swooping in
    svg += '<g style="animation:nuSwoopIn 3.5s ease-in-out forwards">';
    svg += svgLegacy(0, 0, 1.5);
    svg += '</g>';
    // Cyan spark explosion
    for (var i = 0; i < 30; i++) {
      var angle = (i / 30) * Math.PI * 2;
      var dist = rand(40, 200);
      var ex = 600 + Math.cos(angle) * dist;
      var ey = 300 + Math.sin(angle) * dist;
      svg += '<circle cx="' + ex + '" cy="' + ey + '" r="' + rand(2, 6) + '" fill="' + C.cyan + '" opacity="0">';
      svg += '<animate attributeName="opacity" values="0;1;0" begin="1.5s" dur="1.5s" fill="freeze"/>';
      svg += '</circle>';
    }
    // Mini phoenixes
    for (var j = 0; j < 6; j++) {
      var a2 = (j / 6) * Math.PI * 2;
      var px = 600 + Math.cos(a2) * 120;
      var py = 300 + Math.sin(a2) * 120;
      svg += '<g opacity="0"><animate attributeName="opacity" values="0;1;0" begin="1.8s" dur="1.5s" fill="freeze"/>';
      svg += svgMiniPhoenix(px, py, 0.6);
      svg += '</g>';
    }
    svg += bigText('PHOENIX STRIKE!', C.cyan, 44);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4000);
  }

  /* 03 — AARON NOSE DIVE */
  function anim03(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // Aaron doing a nose dive with wobble
    svg += '<g transform="translate(600,350)">';
    svg += '<g style="animation:nuWobble 2s ease-in-out 0.5s forwards">';
    svg += svgAaron(0, 0, 1.5);
    svg += '</g></g>';
    // CB cheering from left
    svg += '<g transform="translate(200,380)">';
    svg += svgCB(0, 0, 0.9);
    svg += '</g>';
    // Legacy cheering from right
    svg += '<g transform="translate(1000,200)">';
    svg += '<g style="animation:nuFloat 1s ease-in-out infinite">';
    svg += svgLegacy(0, 0, 0.8);
    svg += '</g></g>';
    svg += bigText('NAILED IT!', C.blue, 56);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 3500);
  }

  /* 04 — CONFETTI CANNON */
  function anim04(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    svg += confettiParticles(150, [C.blue, C.cyan, C.white, C.gold]);
    // Hidden phoenixes in confetti
    for (var i = 0; i < 8; i++) {
      svg += '<g style="animation:nuConfetti ' + rand(2, 4) + 's ' + rand(0, 1.5) + 's ease-in forwards">';
      svg += svgMiniPhoenix(rand(10, 90) + '%', '-5%', 0.3);
      svg += '</g>';
    }
    // OneWheel silhouettes
    for (var j = 0; j < 5; j++) {
      svg += '<g style="animation:nuConfetti ' + rand(2, 3.5) + 's ' + rand(0.2, 1.8) + 's ease-in forwards" opacity="0.5">';
      svg += svgOneWheel(rand(100, 1100), -20, 0.4, C.gold);
      svg += '</g>';
    }
    svg += '<text x="50%" y="50%" text-anchor="middle" font-family="Lato,sans-serif" font-weight="900" font-size="72" fill="' + C.white + '" style="animation:nuZoomIn 0.5s ease-out forwards">';
    svg += '<tspan style="font-size:80px">✓</tspan> DONE!</text>';
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4000);
  }

  /* 05 — CB'S FIRST TRICK */
  function anim05(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // CB doing a 180
    svg += '<g transform="translate(600,350)">';
    svg += '<animateTransform attributeName="transform" type="rotate" values="0 600 350;180 600 350;180 600 350" dur="2s" fill="freeze"/>';
    svg += svgCB(0, 0, 1.4);
    svg += '</g>';
    // Aaron pumping fist on left
    svg += '<g transform="translate(250,380)">';
    svg += '<g style="animation:nuBob 0.4s ease-in-out infinite">';
    svg += svgAaron(0, 0, 0.9);
    svg += '</g></g>';
    // Legacy with spread wings
    svg += '<g transform="translate(950,180)">';
    svg += '<g style="animation:nuPulse 0.8s ease-in-out infinite">';
    svg += svgLegacy(0, 0, 1.0);
    svg += '</g></g>';
    svg += confettiParticles(30, [C.cyan, C.white]);
    svg += bigText('CB CRUSHING IT!', C.cyan, 48);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4000);
  }

  /* 06 — FIREWORKS */
  function anim06(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.92"/>';
    var positions = [[200, 150], [500, 100], [800, 180], [350, 250], [650, 200], [1000, 150]];
    for (var b = 0; b < positions.length; b++) {
      var bx = positions[b][0], by = positions[b][1];
      var delay = b * 0.5;
      // Phoenix-shaped burst
      svg += '<g transform="translate(' + bx + ',' + by + ')" opacity="0">';
      svg += '<animate attributeName="opacity" values="0;1;0" begin="' + delay + 's" dur="1.5s" fill="freeze"/>';
      svg += svgMiniPhoenix(0, 0, 1.0);
      // Sparks
      for (var s = 0; s < 12; s++) {
        var sa = (s / 12) * Math.PI * 2;
        var sr = rand(30, 80);
        svg += '<circle cx="' + (Math.cos(sa) * sr) + '" cy="' + (Math.sin(sa) * sr) + '" r="' + rand(1.5, 4) + '" fill="' + C.cyan + '" opacity="0">';
        svg += '<animate attributeName="opacity" values="0;1;0" begin="' + (delay + 0.2) + 's" dur="1s" fill="freeze"/>';
        svg += '</circle>';
      }
      svg += '</g>';
    }
    svg += bigText('TASK COMPLETE', C.white, 44);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4500);
  }

  /* 07 — WAREHOUSE WORKERS */
  function anim07(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // Warehouse shelves
    for (var sh = 0; sh < 4; sh++) {
      var sx = 700 + sh * 120;
      svg += '<rect x="' + sx + '" y="200" width="8" height="300" fill="#555"/>';
      svg += '<rect x="' + sx + '" y="200" width="100" height="6" fill="#666"/>';
      svg += '<rect x="' + sx + '" y="300" width="100" height="6" fill="#666"/>';
      svg += '<rect x="' + sx + '" y="400" width="100" height="6" fill="#666"/>';
    }
    // Glowing boxes on shelves
    for (var bx = 0; bx < 6; bx++) {
      var boxX = 710 + (bx % 3) * 120;
      var boxY = 260 + Math.floor(bx / 3) * 100;
      svg += '<rect x="' + boxX + '" y="' + boxY + '" width="30" height="25" rx="3" fill="' + C.blue + '" opacity="0">';
      svg += '<animate attributeName="opacity" values="0;0.8" begin="' + (bx * 0.4) + 's" dur="0.5s" fill="freeze"/>';
      svg += '</rect>';
    }
    // Aaron riding
    svg += '<g style="animation:nuSlideR 4s ease-in-out forwards">';
    svg += svgAaron(0, 420, 1.0);
    svg += '</g>';
    // CB riding
    svg += '<g style="animation:nuSlideR 4s 0.6s ease-in-out forwards">';
    svg += svgCB(0, 420, 0.9);
    svg += '</g>';
    svg += bigText('STOCKED!', C.cyan, 44);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4500);
  }

  /* 08 — HIGH FIVE */
  function anim08(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // Aaron from left
    svg += '<g>';
    svg += '<animateTransform attributeName="transform" type="translate" values="-200,0;520,0;500,0;510,0" dur="2.5s" fill="freeze"/>';
    svg += svgAaron(0, 350, 1.2);
    svg += '</g>';
    // CB from right
    svg += '<g>';
    svg += '<animateTransform attributeName="transform" type="translate" values="1400,0;680,0;700,0;690,0" dur="2.5s" fill="freeze"/>';
    svg += svgCB(0, 350, 1.1, true);
    svg += '</g>';
    // Impact flash
    svg += '<circle cx="600" cy="280" r="0" fill="' + C.gold + '" opacity="0">';
    svg += '<animate attributeName="r" values="0;60;0" begin="1.2s" dur="0.8s" fill="freeze"/>';
    svg += '<animate attributeName="opacity" values="0;0.7;0" begin="1.2s" dur="0.8s" fill="freeze"/>';
    svg += '</circle>';
    // Legacy cheering above
    svg += '<g transform="translate(600,140)">';
    svg += '<g style="animation:nuFloat 0.8s ease-in-out infinite">';
    svg += svgLegacy(0, 0, 0.9);
    svg += '</g></g>';
    svg += confettiParticles(30);
    svg += bigText('HIGH FIVE!', C.gold, 52);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4000);
  }

  /* 09 — GOLD STAR */
  function anim09(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // Big gold star
    svg += '<g transform="translate(600,280)">';
    svg += '<animateTransform attributeName="transform" type="translate" values="600,-200;600,280;600,260;600,280" dur="1.5s" fill="freeze"/>';
    var starPoints = '';
    for (var i = 0; i < 10; i++) {
      var a = (i * Math.PI / 5) - Math.PI / 2;
      var r = i % 2 === 0 ? 80 : 35;
      starPoints += (i === 0 ? '' : ' ') + (Math.cos(a) * r) + ',' + (Math.sin(a) * r);
    }
    svg += '<polygon points="' + starPoints + '" fill="' + C.gold + '" stroke="' + C.white + '" stroke-width="2">';
    svg += '<animate attributeName="opacity" values="1;1;1" dur="3s" fill="freeze"/>';
    svg += '</polygon>';
    svg += '</g>';
    // Star explosion
    for (var j = 0; j < 20; j++) {
      var ea = (j / 20) * Math.PI * 2;
      var ed = rand(100, 250);
      var smallStar = '';
      for (var k = 0; k < 10; k++) {
        var sa = (k * Math.PI / 5) - Math.PI / 2;
        var sr = k % 2 === 0 ? 8 : 3;
        smallStar += (k === 0 ? '' : ' ') + (600 + Math.cos(ea) * ed + Math.cos(sa) * sr) + ',' + (280 + Math.sin(ea) * ed + Math.sin(sa) * sr);
      }
      svg += '<polygon points="' + smallStar + '" fill="' + C.gold + '" opacity="0">';
      svg += '<animate attributeName="opacity" values="0;0.8;0" begin="1.5s" dur="2s" fill="freeze"/>';
      svg += '</polygon>';
    }
    svg += bigText('GOLD STAR!', C.gold, 48);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4000);
  }

  /* 10 — LEVEL UP */
  function anim10(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.9"/>';
    // Floating orbs
    for (var i = 0; i < 30; i++) {
      var ox = rand(50, 1150);
      var delay = rand(0, 2);
      svg += '<circle cx="' + ox + '" cy="600" r="' + rand(4, 12) + '" fill="' + C.blue + '" opacity="0.6">';
      svg += '<animate attributeName="cy" values="650;-50" dur="' + rand(2, 4) + 's" begin="' + delay + 's" fill="freeze"/>';
      svg += '<animate attributeName="opacity" values="0.6;0" dur="' + rand(2, 4) + 's" begin="' + delay + 's" fill="freeze"/>';
      svg += '</circle>';
    }
    // LEVEL UP text
    svg += '<text x="600" y="250" text-anchor="middle" font-family="Lato,sans-serif" font-weight="900" font-size="72" fill="' + C.cyan + '">';
    svg += '<animate attributeName="y" values="400;250" dur="1s" fill="freeze"/>';
    svg += 'LEVEL UP</text>';
    // XP bar
    svg += '<rect x="350" y="320" width="500" height="30" rx="15" fill="#1a1a3a" stroke="' + C.cyan + '" stroke-width="2"/>';
    svg += '<rect x="352" y="322" width="0" height="26" rx="13" fill="' + C.cyan + '">';
    svg += '<animate attributeName="width" values="0;496;520" dur="2s" begin="0.5s" fill="freeze"/>';
    svg += '</rect>';
    // Overflow flash
    svg += '<rect x="350" y="320" width="500" height="30" rx="15" fill="' + C.gold + '" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;0.5;0" begin="2.2s" dur="0.5s" fill="freeze"/>';
    svg += '</rect>';
    // Mini phoenix spiraling out
    svg += '<g transform="translate(600,340)" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;1" begin="2.3s" dur="0.3s" fill="freeze"/>';
    svg += '<animateTransform attributeName="transform" type="translate" values="600,340;600,180" begin="2.3s" dur="1s" fill="freeze"/>';
    svg += svgMiniPhoenix(0, 0, 0.8);
    svg += '</g>';
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4500);
  }

  /* 11 — LEGACY PATROL */
  function anim11(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.88"/>';
    // Cyan trail that forms a checkmark
    svg += '<path d="M200,400 Q300,200 600,300 Q700,340 800,200 Q900,100 1000,200 L900,350 L750,250 L600,400 L400,500 L200,400" fill="none" stroke="' + C.cyan + '" stroke-width="4" opacity="0.6" stroke-dasharray="1000" stroke-dashoffset="1000">';
    svg += '<animate attributeName="stroke-dashoffset" values="1000;0" dur="3s" fill="freeze"/>';
    svg += '</path>';
    // Checkmark that forms at end
    svg += '<path d="M450,350 L550,450 L800,180" fill="none" stroke="' + C.cyan + '" stroke-width="8" stroke-linecap="round" stroke-dasharray="500" stroke-dashoffset="500" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;1" begin="2.5s" dur="0.3s" fill="freeze"/>';
    svg += '<animate attributeName="stroke-dashoffset" values="500;0" begin="2.5s" dur="1s" fill="freeze"/>';
    svg += '</path>';
    // Legacy circling
    svg += '<g>';
    svg += '<animateMotion dur="3s" fill="freeze" path="M200,400 Q300,200 600,300 Q700,340 800,200 Q900,100 1000,200"/>';
    svg += svgLegacy(0, 0, 0.7);
    svg += '</g>';
    svg += bigText('PATROL COMPLETE', C.cyan, 40);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4500);
  }

  /* 12 — WOBBLE RECOVERY */
  function anim12(ov) {
    var isAaron = Math.random() > 0.5;
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // Character wobbling
    svg += '<g transform="translate(600,380)">';
    svg += '<g style="animation:nuWobble 2s ease-in-out forwards">';
    svg += isAaron ? svgAaron(0, 0, 1.4) : svgCB(0, 0, 1.4);
    svg += '</g></g>';
    // Bump on ground
    svg += '<path d="M540,430 Q570,415 600,430" fill="none" stroke="#555" stroke-width="3"/>';
    // Exclamation marks
    svg += '<text x="500" y="280" font-family="Lato,sans-serif" font-weight="900" font-size="40" fill="' + C.gold + '" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.5s" fill="freeze"/>';
    svg += '!!</text>';
    svg += bigText('CLOSE ONE!', C.gold, 52);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 3500);
  }

  /* 13 — AI SWARM */
  function anim13(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.9"/>';
    // 4 AI phoenixes in murmuration
    var agents = [
      { sx: 100, sy: 100, ex: 540, ey: 260 },
      { sx: 1100, sy: 80, ex: 660, ey: 260 },
      { sx: 200, sy: 500, ex: 540, ey: 340 },
      { sx: 1000, sy: 480, ex: 660, ey: 340 }
    ];
    for (var i = 0; i < agents.length; i++) {
      var ag = agents[i];
      svg += '<g>';
      svg += '<animateMotion dur="2.5s" fill="freeze" path="M' + ag.sx + ',' + ag.sy + ' Q600,300 ' + ag.ex + ',' + ag.ey + '"/>';
      svg += svgMiniPhoenix(0, 0, 0.8);
      svg += '</g>';
      // Trail
      svg += '<path d="M' + ag.sx + ',' + ag.sy + ' Q600,300 ' + ag.ex + ',' + ag.ey + '" fill="none" stroke="' + C.cyan + '" stroke-width="2" opacity="0.3" stroke-dasharray="400" stroke-dashoffset="400">';
      svg += '<animate attributeName="stroke-dashoffset" values="400;0" dur="2.5s" fill="freeze"/>';
      svg += '</path>';
    }
    // NU Phoenix logo that forms
    svg += '<g transform="translate(600,300)" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;0;1;1;0" dur="4s" begin="0s" fill="freeze" keyTimes="0;0.6;0.7;0.85;1"/>';
    svg += svgLegacy(0, 0, 1.5);
    svg += '</g>';
    svg += bigText('AI SWARM', C.cyan, 44);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4500);
  }

  /* 14 — POWER SURGE */
  function anim14(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    // Electric blue flash background
    svg += '<rect width="100%" height="100%" fill="' + C.blue + '">';
    svg += '<animate attributeName="opacity" values="0;1;0.2;0" dur="1.5s" fill="freeze"/>';
    svg += '</rect>';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;0;0.9" dur="1.5s" fill="freeze"/>';
    svg += '</rect>';
    // NU Phoenix logo zooming in
    svg += '<g transform="translate(600,280)" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;0;1" dur="1.5s" fill="freeze"/>';
    svg += '<animateTransform attributeName="transform" type="scale" values="0.1;0.1;3" dur="2s" fill="freeze" additive="sum"/>';
    svg += svgLegacy(0, 0, 1);
    svg += '</g>';
    // Lightning bolts
    svg += '<path d="M300,0 L320,180 L280,190 L310,400" fill="none" stroke="' + C.cyan + '" stroke-width="3" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;1;0" dur="0.3s" begin="0.3s" fill="freeze"/>';
    svg += '</path>';
    svg += '<path d="M900,0 L880,200 L920,210 L890,420" fill="none" stroke="' + C.cyan + '" stroke-width="3" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;1;0" dur="0.3s" begin="0.5s" fill="freeze"/>';
    svg += '</path>';
    svg += bigText('POWER SURGE', C.white, 48);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 3000);
  }

  /* 15 — CONSTRUCTION COMPLETE */
  function anim15(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // Building being assembled
    var blocks = [
      [500, 420, 200, 30], [500, 385, 200, 30], [500, 350, 200, 30],
      [520, 315, 160, 30], [540, 280, 120, 30], [560, 245, 80, 30]
    ];
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];
      svg += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + b[3] + '" rx="3" fill="' + C.blue + '" stroke="' + C.cyan + '" stroke-width="1" opacity="0">';
      svg += '<animate attributeName="opacity" values="0;0.9" begin="' + (i * 0.4) + 's" dur="0.3s" fill="freeze"/>';
      svg += '</rect>';
    }
    // Phoenixes perching on top
    svg += '<g opacity="0">';
    svg += '<animate attributeName="opacity" values="0;1" begin="2.6s" dur="0.4s" fill="freeze"/>';
    svg += svgMiniPhoenix(580, 228, 0.6);
    svg += svgMiniPhoenix(620, 228, 0.6);
    svg += '</g>';
    // Aaron riding around
    svg += '<g style="animation:nuSlideR 5s ease-in-out forwards">';
    svg += svgAaron(0, 430, 0.8);
    svg += '</g>';
    // CB riding around
    svg += '<g style="animation:nuSlideR 5s 0.5s ease-in-out forwards">';
    svg += svgCB(0, 430, 0.75);
    svg += '</g>';
    svg += bigText('BUILT IT!', C.cyan, 48);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4500);
  }

  /* 16 — STREAK FIRE */
  function anim16(ov) {
    var streak = window.nuStreak || 3;
    var intensity = Math.min(streak, 10);
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // Fire trails
    for (var i = 0; i < intensity * 3; i++) {
      var fx = rand(50, 1150);
      var fy = rand(200, 500);
      svg += '<g style="animation:nuFireFlicker ' + rand(0.3, 0.8) + 's ease-in-out infinite" transform="translate(' + fx + ',' + fy + ')">';
      svg += '<path d="M0,0 Q-5,-15 0,-25 Q5,-15 0,0" fill="' + C.gold + '" opacity="' + rand(0.4, 0.8) + '"/>';
      svg += '<path d="M0,0 Q-3,-10 0,-18 Q3,-10 0,0" fill="#ff4400" opacity="0.6"/>';
      svg += '</g>';
    }
    // Aaron with fire trail
    svg += '<g style="animation:nuSlideR 3.5s ease-in-out forwards">';
    svg += svgAaron(0, 380, 1.2);
    // Fire behind
    svg += '<g transform="translate(-40,370)" style="animation:nuFireFlicker 0.3s ease-in-out infinite">';
    svg += '<path d="M0,0 Q-8,-20 0,-35 Q8,-20 0,0" fill="' + C.gold + '"/>';
    svg += '<path d="M0,0 Q-5,-12 0,-22 Q5,-12 0,0" fill="#ff4400" opacity="0.7"/>';
    svg += '</g>';
    svg += '</g>';
    svg += '<text x="50%" y="25%" text-anchor="middle" font-family="Lato,sans-serif" font-weight="900" font-size="64" fill="' + C.gold + '">';
    svg += '\uD83D\uDD25 ON FIRE \u00D7' + streak + '</text>';
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 3500);
  }

  /* 17 — TROPHY DROP */
  function anim17(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // Trophy
    svg += '<g transform="translate(600,300)">';
    svg += '<animateTransform attributeName="transform" type="translate" values="600,-200;600,300;600,280;600,300" dur="1.5s" fill="freeze"/>';
    // Cup
    svg += '<path d="M-40,-60 L-35,0 Q-30,20 0,25 Q30,20 35,0 L40,-60Z" fill="' + C.gold + '" stroke="#cc9900" stroke-width="2"/>';
    // Handles
    svg += '<path d="M-40,-40 Q-65,-30 -60,0 Q-55,15 -35,10" fill="none" stroke="' + C.gold + '" stroke-width="5"/>';
    svg += '<path d="M40,-40 Q65,-30 60,0 Q55,15 35,10" fill="none" stroke="' + C.gold + '" stroke-width="5"/>';
    // Base
    svg += '<rect x="-20" y="25" width="40" height="8" rx="2" fill="' + C.gold + '"/>';
    svg += '<rect x="-30" y="33" width="60" height="10" rx="3" fill="#cc9900"/>';
    // Star on trophy
    svg += '<text x="0" y="-15" text-anchor="middle" font-size="28" fill="' + C.white + '">★</text>';
    svg += '</g>';
    // Phoenix on top
    svg += '<g transform="translate(600,220)" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;0;1" dur="2s" fill="freeze"/>';
    svg += svgMiniPhoenix(0, 0, 0.7);
    svg += '</g>';
    svg += confettiParticles(50, [C.gold, C.cyan, C.white]);
    svg += bigText('TROPHY!', C.gold, 48);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4000);
  }

  /* 18 — SNEAKY CB */
  function anim18(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // Bin/box on right
    svg += '<rect x="850" y="360" width="80" height="60" rx="5" fill="#333" stroke="' + C.cyan + '" stroke-width="2"/>';
    svg += '<text x="890" y="395" text-anchor="middle" font-family="Lato,sans-serif" font-weight="700" font-size="12" fill="' + C.cyan + '">DONE</text>';
    // CB sneaking across
    svg += '<g>';
    svg += '<animateTransform attributeName="transform" type="translate" values="-100,0;800,0;800,0;1400,0" dur="4s" keyTimes="0;0.5;0.6;1" fill="freeze"/>';
    svg += svgCB(0, 380, 1.0);
    svg += '</g>';
    // Completed task (glowing orb she carries)
    svg += '<circle cx="0" cy="340" r="10" fill="' + C.cyan + '" opacity="0.8">';
    svg += '<animateTransform attributeName="transform" type="translate" values="-100,0;800,0;890,380" dur="3s" keyTimes="0;0.5;0.7" fill="freeze"/>';
    svg += '<animate attributeName="opacity" values="0.8;0.8;0" begin="2.5s" dur="0.5s" fill="freeze"/>';
    svg += '</circle>';
    // Aaron peeking from corner
    svg += '<g transform="translate(100,360)" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;0;1" begin="0s" dur="2.5s" fill="freeze"/>';
    svg += '<g transform="scale(0.6)">' +
      '<circle cx="0" cy="-10" r="12" fill="#d4a574"/>' +
      '<path d="M-12,-12 Q-12,-24 0,-24 Q12,-24 12,-12 L10,-14 Q10,-22 0,-22 Q-10,-22 -10,-14Z" fill="#2a1a0a"/>' +
      '<circle cx="-4" cy="-11" r="1.5" fill="#1a1a1a"/>' +
      '<circle cx="4" cy="-11" r="1.5" fill="#1a1a1a"/>' +
      '</g>';
    svg += '</g>';
    svg += bigText('SNEAKY!', C.cyan, 44);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4500);
  }

  /* 19 — CIRCUIT BOARD */
  function anim19(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.92"/>';
    // Circuit traces forming phoenix
    var paths = [
      'M100,500 L100,350 L300,350 L300,200 L500,200',
      'M1100,500 L1100,350 L900,350 L900,200 L700,200',
      'M200,550 L200,400 L400,400 L400,300 L550,300 L550,250',
      'M1000,550 L1000,400 L800,400 L800,300 L650,300 L650,250',
      'M600,200 L600,100',
      'M500,200 Q500,150 600,100',
      'M700,200 Q700,150 600,100',
      'M450,250 L350,180 L300,120',
      'M750,250 L850,180 L900,120'
    ];
    for (var i = 0; i < paths.length; i++) {
      var col = i % 2 === 0 ? C.blue : C.cyan;
      svg += '<path d="' + paths[i] + '" fill="none" stroke="' + col + '" stroke-width="3" opacity="0.8" stroke-dasharray="600" stroke-dashoffset="600">';
      svg += '<animate attributeName="stroke-dashoffset" values="600;0" dur="2.5s" begin="' + (i * 0.15) + 's" fill="freeze"/>';
      svg += '</path>';
      // Nodes at endpoints
      svg += '<circle cx="' + paths[i].split(' ').pop().split(',')[0] + '" cy="' + paths[i].split(' ').pop().split(',')[1] + '" r="5" fill="' + col + '" opacity="0">';
      svg += '<animate attributeName="opacity" values="0;1" begin="' + (i * 0.15 + 1) + 's" dur="0.3s" fill="freeze"/>';
      svg += '</circle>';
    }
    // Phoenix shape glow at center
    svg += '<g transform="translate(600,180)" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;0;0.8" dur="3s" fill="freeze"/>';
    svg += svgLegacy(0, 0, 0.8);
    svg += '</g>';
    // Pulse effect
    svg += '<circle cx="600" cy="180" r="0" fill="none" stroke="' + C.cyan + '" stroke-width="2" opacity="0">';
    svg += '<animate attributeName="r" values="0;200" begin="2.5s" dur="1s" fill="freeze"/>';
    svg += '<animate attributeName="opacity" values="0;0.5;0" begin="2.5s" dur="1s" fill="freeze"/>';
    svg += '</circle>';
    svg += bigText('CONNECTED', C.cyan, 44);
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 4500);
  }

  /* 20 — TEAM PHOTO */
  function anim20(ov) {
    var svg = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">';
    svg += '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.85"/>';
    // Characters riding to center
    // Aaron from left
    svg += '<g>';
    svg += '<animateTransform attributeName="transform" type="translate" values="-200,0;350,0" dur="1.5s" fill="freeze"/>';
    svg += svgAaron(0, 360, 1.0);
    svg += '</g>';
    // CB from right
    svg += '<g>';
    svg += '<animateTransform attributeName="transform" type="translate" values="1400,0;750,0" dur="1.5s" fill="freeze"/>';
    svg += svgCB(0, 360, 0.95, true);
    svg += '</g>';
    // Legacy from top
    svg += '<g>';
    svg += '<animateTransform attributeName="transform" type="translate" values="0,-300;0,0" dur="1.5s" fill="freeze"/>';
    svg += svgLegacy(600, 180, 0.8);
    svg += '</g>';
    // AI agents
    svg += '<g>';
    svg += '<animateTransform attributeName="transform" type="translate" values="0,300;0,0" dur="1.5s" fill="freeze"/>';
    for (var i = 0; i < 4; i++) {
      svg += svgMiniPhoenix(450 + i * 80, 240, 0.4);
    }
    svg += '</g>';
    // Camera flash
    svg += '<rect width="100%" height="100%" fill="' + C.white + '" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;0;0.9;0" dur="3s" keyTimes="0;0.55;0.6;0.7" fill="freeze"/>';
    svg += '</rect>';
    // Photo frame
    svg += '<rect x="300" y="100" width="600" height="400" rx="10" fill="none" stroke="' + C.white + '" stroke-width="6" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;0;0.8" dur="3.5s" keyTimes="0;0.7;0.8" fill="freeze"/>';
    svg += '</rect>';
    svg += '<text x="600" y="540" text-anchor="middle" font-family="Lato,sans-serif" font-weight="900" font-size="36" fill="' + C.white + '" opacity="0">';
    svg += '<animate attributeName="opacity" values="0;0;1" dur="3.5s" keyTimes="0;0.75;0.85" fill="freeze"/>';
    svg += 'TEAM NORRIS</text>';
    svg += '</svg>';
    ov.innerHTML = svg;
    autoDismiss(ov, 5000);
  }

  /* BONUS — MEGA COMPLETE */
  function animMega(ov) {
    ov.style.cssText += 'background:rgba(10,14,92,0.95);';
    var container = document.createElement('div');
    container.style.cssText = 'width:100%;height:100%;position:relative;';
    ov.appendChild(container);

    var anims = [anim01, anim02, anim03, anim04, anim05, anim06, anim07, anim08, anim09, anim10,
      anim11, anim12, anim13, anim14, anim15, anim16, anim17, anim18, anim19, anim20];
    var idx = 0;

    function playNext() {
      if (idx >= anims.length || !ov.parentNode) {
        // Final text
        if (ov.parentNode) {
          container.innerHTML = '<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">' +
            '<rect width="100%" height="100%" fill="' + C.navy + '" opacity="0.95"/>' +
            confettiParticles(200, [C.blue, C.cyan, C.gold, C.white]) +
            '<text x="50%" y="40%" text-anchor="middle" font-family="Lato,sans-serif" font-weight="900" font-size="56" fill="' + C.gold + '">SECTION COMPLETE</text>' +
            '<text x="50%" y="55%" text-anchor="middle" font-family="Lato,sans-serif" font-weight="900" font-size="36" fill="' + C.cyan + '">— LEGENDARY! —</text>' +
            '<g transform="translate(600,400)">' + svgLegacy(0, 0, 1.5) + '</g>' +
            '</svg>';
          autoDismiss(ov, 3000);
        }
        return;
      }
      // Clear and play next mini burst
      var miniOv = document.createElement('div');
      miniOv.style.cssText = 'position:absolute;inset:0;opacity:0.8;pointer-events:none;';
      container.appendChild(miniOv);
      anims[idx](miniOv);
      // Override auto-dismiss — remove faster
      setTimeout(function () { if (miniOv.parentNode) miniOv.remove(); }, 380);
      idx++;
      setTimeout(playNext, 350);
    }

    playNext();
    // Fallback dismiss at 10s
    setTimeout(function () { if (ov.parentNode) { ov.style.transition = 'opacity 0.5s'; ov.style.opacity = '0'; setTimeout(function () { if (ov.parentNode) ov.remove(); }, 500); } }, 10000);
  }

  /* ═══════════════════════════════════════
     PUBLIC API
     ═══════════════════════════════════════ */

  var ANIMATIONS = [anim01, anim02, anim03, anim04, anim05, anim06, anim07, anim08, anim09, anim10,
    anim11, anim12, anim13, anim14, anim15, anim16, anim17, anim18, anim19, anim20];

  function celebrate(forceMega) {
    injectCSS();
    if (forceMega) { megaCelebrate(); return; }

    var pool = ANIMATIONS.slice();
    // Add fire trails if on a streak
    if ((window.nuStreak || 0) >= 3) {
      pool.push(anim16); // extra weight for fire
    }

    var idx;
    var attempts = 0;
    do {
      idx = Math.floor(Math.random() * pool.length);
      attempts++;
    } while (idx === lastPlayed && pool.length > 1 && attempts < 20);
    lastPlayed = idx;

    var ov = createOverlay();
    pool[idx](ov);
  }

  function megaCelebrate() {
    injectCSS();
    var ov = createOverlay();
    animMega(ov);
  }

  /* ─── Auto-trigger on checkbox ─── */
  document.addEventListener('change', function (e) {
    if (e.target.type === 'checkbox' && e.target.checked) {
      window.nuStreak = (window.nuStreak || 0) + 1;
      // Check if parent section is now 100% complete
      var section = e.target.closest('[data-section]');
      if (section) {
        var all = section.querySelectorAll('input[type=checkbox]');
        var checked = section.querySelectorAll('input[type=checkbox]:checked');
        if (all.length === checked.length) {
          window.megaCelebrate();
          return;
        }
      }
      window.celebrate();
    }
  });

  // Reset streak on page load
  window.nuStreak = 0;

  // Expose globally
  window.celebrate = celebrate;
  window.megaCelebrate = megaCelebrate;

})();
