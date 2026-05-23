/**
 * anyoin-ball.js
 * 安養院シンボルボールアニメーション
 *
 * 使い方：
 *   1. このファイルを読み込む
 *      <script src="anyoin-ball.js"></script>
 *
 *   2. HTMLに以下のIDを用意する
 *      <div id="anyoin-header-slot"></div>  ← ヘッダーロゴの左隣
 *      <div id="anyoin-footer-slot"></div>  ← フッターロゴの左隣
 *      <footer id="anyoin-footer">...</footer>
 *
 *   3. オプションでカスタマイズ（省略可）
 *      <script>
 *        AnyoinBall.init({
 *          headerSlotId : 'anyoin-header-slot',
 *          footerSlotId : 'anyoin-footer-slot',
 *          footerId     : 'anyoin-footer',
 *          color        : '#8e1a1a',
 *          speed        : 115,
 *        });
 *      </script>
 */

(function (global) {
  'use strict';

  const AnyoinBall = {};

  AnyoinBall.init = function (opts) {
    opts = opts || {};
    const CFG = {
      headerSlotId : opts.headerSlotId || 'anyoin-header-slot',
      footerSlotId : opts.footerSlotId || 'anyoin-footer-slot',
      footerId     : opts.footerId     || 'anyoin-footer',
      color        : opts.color        || '#8e1a1a',
      speed        : opts.speed        || 115,
      radius       : opts.radius       || 22,
    };

    if (document.readyState === 'complete') {
      boot(CFG);
    } else {
      window.addEventListener('load', function () { boot(CFG); });
    }
  };

  // ページロード後に自動起動（init()を明示的に呼ばない場合）
  if (document.readyState === 'complete') {
    if (document.getElementById('anyoin-header-slot')) {
      AnyoinBall.init();
    }
  } else {
    window.addEventListener('load', function () {
      if (!_booted && document.getElementById('anyoin-header-slot')) {
        AnyoinBall.init();
      }
    });
  }
  let _booted = false;

  // ----------------------------------------------------------------
  function boot(CFG) {
    _booted = true;

    const hSlotEl  = document.getElementById(CFG.headerSlotId);
    const fSlotEl  = document.getElementById(CFG.footerSlotId);
    const footerEl = document.getElementById(CFG.footerId);
    if (!hSlotEl || !fSlotEl || !footerEl) {
      console.warn('[AnyoinBall] required elements not found.');
      return;
    }

    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Canvas 生成
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const R     = CFG.radius;
    const COLOR = CFG.color;
    const SPEED = CFG.speed;

    // ---- 3D投影 ----
    function project(xf, yf, zA, xA) {
      const x1 = xf;
      const y1 = yf * Math.cos(xA) - R * Math.sin(xA);
      const z1 = yf * Math.sin(xA) + R * Math.cos(xA);
      return {
        sx    : x1 * Math.cos(zA) - y1 * Math.sin(zA),
        sy    : x1 * Math.sin(zA) + y1 * Math.cos(zA),
        depth : z1
      };
    }

    // ---- 描画 ----
    function drawBall(cx, cy, zA, xA, alpha, squashX, squashY) {
      alpha   = alpha   === undefined ? 1 : alpha;
      squashX = squashX === undefined ? 1 : squashX;
      squashY = squashY === undefined ? 1 : squashY;

      // 接地影：ボール底面に貼り付く楕円
      ctx.save();
      ctx.globalAlpha = alpha * 0.45;
      ctx.translate(cx, cy + R * squashY * 0.92);
      ctx.scale(squashX, 1);
      var grad = ctx.createRadialGradient(0, 0, 0, 0, 0, R * 0.9);
      grad.addColorStop(0,   'rgba(0,0,0,0.55)');
      grad.addColorStop(0.5, 'rgba(0,0,0,0.20)');
      grad.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.ellipse(0, 0, R * 0.9, R * 0.22, 0, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(cx, cy);
      ctx.save();
      ctx.scale(squashX, squashY);

      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.fillStyle = COLOR;
      ctx.fill();

      ctx.fillStyle   = 'rgba(255,255,255,0.85)';
      ctx.strokeStyle = 'rgba(255,255,255,0.85)';
      ctx.lineWidth   = 1.5;

      var el = project(-R * 0.3, -R * 0.22, zA, xA);
      if (el.depth > 0) { ctx.beginPath(); ctx.arc(el.sx, el.sy, R * 0.12, 0, Math.PI * 2); ctx.fill(); }
      var er = project( R * 0.3, -R * 0.22, zA, xA);
      if (er.depth > 0) { ctx.beginPath(); ctx.arc(er.sx, er.sy, R * 0.12, 0, Math.PI * 2); ctx.fill(); }
      var mL = project(-R * 0.24, R * 0.1,  zA, xA);
      var mC = project( 0,        R * 0.24, zA, xA);
      var mR = project( R * 0.24, R * 0.1,  zA, xA);
      if (mL.depth > 0 && mC.depth > 0 && mR.depth > 0) {
        ctx.beginPath();
        ctx.moveTo(mL.sx, mL.sy);
        ctx.quadraticCurveTo(mC.sx, mC.sy, mR.sx, mR.sy);
        ctx.stroke();
      }

      ctx.restore();
      ctx.restore();
    }

    // 01シンボル
    var SYM_PATH = new Path2D('M141.86,57.28c-.55,25.77-14.84,48.16-35.83,60.12-10.35-5.92-22.33-20.28-35.1-20.28s-24.75,14.36-35.1,20.28C14.84,105.43.55,83.04,0,57.28c-.02-.76.73-1.29,1.45-1.06,45.32,14.57,91.52,15.31,138.96,0,.72-.23,1.47.31,1.45,1.06Z');
    var SYM_W = 141.86, SYM_H = 117.4;
    var SYM_HEAD_CX = 70.93, SYM_HEAD_CY = 27.32, SYM_HEAD_R = 27.32;

    function drawSymbol01(cx, cy, scale, alpha) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(cx - SYM_W * scale / 2, cy - SYM_H * scale / 2);
      ctx.scale(scale, scale);
      ctx.fillStyle = COLOR;
      ctx.fill(SYM_PATH);
      ctx.beginPath();
      ctx.arc(SYM_HEAD_CX, SYM_HEAD_CY, SYM_HEAD_R, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // ---- モゴモゴ ----
    var MOGO_KF = [
      { t:0.00, sx:1.00, sy:1.00 }, { t:0.12, sx:1.18, sy:0.82 },
      { t:0.25, sx:0.85, sy:1.17 }, { t:0.40, sx:1.14, sy:0.87 },
      { t:0.55, sx:0.90, sy:1.12 }, { t:0.70, sx:1.10, sy:0.91 },
      { t:0.85, sx:0.93, sy:1.08 }, { t:1.00, sx:1.00, sy:1.00 },
    ];
    var MOGO_DUR = 0.5;

    function getMogo(elapsed) {
      var t = (elapsed % MOGO_DUR) / MOGO_DUR;
      var i = 0;
      while (i < MOGO_KF.length - 2 && MOGO_KF[i + 1].t <= t) i++;
      var a = MOGO_KF[i], b = MOGO_KF[i + 1];
      var u = (t - a.t) / (b.t - a.t);
      var e = u < 0.5 ? 2*u*u : -1+(4-2*u)*u;
      return { sx: a.sx + (b.sx - a.sx) * e, sy: a.sy + (b.sy - a.sy) * e };
    }

    // ---- ユーティリティ ----
    function lerp(a, b, t)  { return a + (b - a) * t; }
    function easeInOut(t)   { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }
    function easeOut(t)     { return 1-(1-t)*(1-t); }

    function getDocPos(el) {
      var r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + window.scrollY + r.height / 2 };
    }
    function toScreen(docX, docY) { return { x: docX, y: docY - window.scrollY }; }

    // ---- S字パス ----
    var rollStartDoc = { x: 0, y: 0 };
    var rollEndDoc   = { x: 0, y: 0 };

    function pathX(docY) {
      var totalDist  = rollEndDoc.y - rollStartDoc.y;
      var traveled   = docY - rollStartDoc.y;
      var remaining  = totalDist - traveled;
      var amplitude  = canvas.width * 0.28;
      var wavelength = Math.max(totalDist * 0.65, 500);
      var sX = rollStartDoc.x + amplitude * Math.sin(traveled / wavelength * Math.PI * 2);
      var blendRange = 200;
      if (remaining < blendRange) {
        return lerp(rollEndDoc.x, sX, easeInOut(remaining / blendRange));
      }
      return sX;
    }

    // ---- 状態 ----
    var phase = 'mogomogo', phaseT = 0;
    var ballDocX = 0, ballDocY = 0;
    var zA = 0, xA = 0;
    var rollPrevX = 0, jumpStartY = 0;
    var footerPos = { x: 0, y: 0 };
    var renderActive = false, lastTs = null;

    function startRender() {
      if (renderActive) return;
      renderActive = true; lastTs = null;
      requestAnimationFrame(renderLoop);
    }
    function stopRender() { renderActive = false; }

    function renderLoop(ts) {
      if (!renderActive) return;
      if (!lastTs) lastTs = ts;
      var dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs = ts;
      phaseT += dt;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      update(dt);
      requestAnimationFrame(renderLoop);
    }

    function update(dt) {
      var sc = toScreen(ballDocX, ballDocY);

      if (phase === 'mogomogo') {
        var m = getMogo(phaseT);
        drawBall(sc.x, sc.y, 0, 0, 1, m.sx, m.sy);
        if (phaseT > 2.2) { phase = 'jump_up'; phaseT = 0; jumpStartY = ballDocY; }

      } else if (phase === 'jump_up') {
        var p = Math.min(phaseT / 0.28, 1);
        ballDocY = jumpStartY - easeOut(p) * 55;
        var s = toScreen(ballDocX, ballDocY);
        drawBall(s.x, s.y, 0, 0, 1, lerp(1, 0.78, p), lerp(1, 1.3, p));
        if (p >= 1) { phase = 'jump_fall'; phaseT = 0; }

      } else if (phase === 'jump_fall') {
        var p = Math.min(phaseT / 0.22, 1);
        ballDocY = (jumpStartY - 55) + p * p * 55;
        var s = toScreen(ballDocX, ballDocY);
        drawBall(s.x, s.y, 0, 0, 1, lerp(0.78, 1, p), lerp(1.3, 1, p));
        if (p >= 1) { phase = 'jump_land'; phaseT = 0; ballDocY = jumpStartY; }

      } else if (phase === 'jump_land') {
        var p  = Math.min(phaseT / 0.38, 1);
        var sq = p < 0.3 ? lerp(1, 1.38, p / 0.3) : lerp(1.38, 1, (p - 0.3) / 0.7);
        var s  = toScreen(ballDocX, ballDocY);
        drawBall(s.x, s.y, 0, 0, 1, sq, 2 - sq);
        if (p >= 1) {
          rollStartDoc = { x: ballDocX, y: ballDocY };
          rollEndDoc   = { x: footerPos.x, y: footerPos.y };
          rollPrevX    = ballDocX;
          phase = 'rolling'; phaseT = 0;
        }

      } else if (phase === 'rolling') {
        var dY  = SPEED * dt;
        ballDocY += dY;
        var newX = pathX(ballDocY);
        var dX   = newX - rollPrevX;
        rollPrevX = newX;
        ballDocX  = newX;
        var ds = Math.sqrt(dX * dX + dY * dY);
        zA += (dX >= 0 ? 1 : -1) * ds / R;
        xA += dY / R;
        var s = toScreen(ballDocX, ballDocY);
        drawBall(s.x, s.y, zA, -xA);
        if (ballDocY >= footerPos.y) {
          ballDocX = footerPos.x; ballDocY = footerPos.y;
          zA = 0; xA = 0;
          var fr = footerEl.getBoundingClientRect();
          if (fr.top < window.innerHeight * 0.75) {
            phase = 'land_pre'; phaseT = 0;
          } else {
            phase = 'wait_footer'; phaseT = 0;
          }
        }

      } else if (phase === 'wait_footer') {
        var s = toScreen(ballDocX, ballDocY);
        var m = getMogo(phaseT);
        drawBall(s.x, s.y, 0, 0, 1, m.sx, m.sy);

      } else if (phase === 'land_pre') {
        var p = Math.min(phaseT / 0.2, 1);
        var s = toScreen(ballDocX, footerPos.y - easeInOut(p) * 10);
        drawBall(s.x, s.y, 0, 0, 1);
        if (p >= 1) { phase = 'land_drop'; phaseT = 0; }

      } else if (phase === 'land_drop') {
        var p  = Math.min(phaseT / 0.15, 1);
        var s  = toScreen(ballDocX, footerPos.y - 10 + p * p * 10);
        var sq = lerp(1, 1.35, p);
        drawBall(s.x, s.y, 0, 0, 1, sq, 2 - sq);
        if (p >= 1) { phase = 'land_bounce'; phaseT = 0; }

      } else if (phase === 'land_bounce') {
        var p  = Math.min(phaseT / 0.42, 1);
        var sq = p < 0.4 ? lerp(1.35, 0.88, p / 0.4) : lerp(0.88, 1, (p - 0.4) / 0.6);
        var s  = toScreen(ballDocX, ballDocY);
        drawBall(s.x, s.y, 0, 0, 1, sq, 2 - sq);
        if (p >= 1) { phase = 'morph'; phaseT = 0; }

      } else if (phase === 'morph') {
        var p  = Math.min(phaseT / 0.9, 1);
        var e  = easeInOut(p);
        var s  = toScreen(ballDocX, ballDocY);
        drawBall(s.x, s.y, 0, 0, 1 - e, lerp(1, 0.5, e), lerp(1, 0.5, e));
        drawSymbol01(s.x, s.y, lerp(0.3, 44 / SYM_W, e), e);
        if (p >= 1) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // フッタースロットに静的シンボルを表示
          var img = fSlotEl.querySelector('img');
          if (img) img.style.opacity = '1';
          phase = 'done';
          stopRender();
        }
      }
    }

    // フッター監視
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && phase === 'wait_footer') {
        phase = 'land_pre'; phaseT = 0;
      }
    }, { threshold: 0.25 });
    obs.observe(footerEl);

    // 座標初期化・開始
    var hPos = getDocPos(hSlotEl);
    var fPos = getDocPos(fSlotEl);
    ballDocX  = hPos.x;
    ballDocY  = hPos.y;
    footerPos = fPos;
    startRender();
  }

  global.AnyoinBall = AnyoinBall;

})(window);
