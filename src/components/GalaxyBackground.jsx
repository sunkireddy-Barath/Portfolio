import { useEffect, useRef } from 'react';

export default function GalaxyBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, raf, t = 0;
    let stars = [];
    let shooters = [];
    let nextShoot = 120;


    function makeStar(init) {
      const rand = Math.random();
      /* three depth layers */
      let r, spd, alpha, trailFactor, twinkAmp;
      if (rand < .55) {
        /* distant tiny stars — barely drift */
        r = .3 + Math.random() * .55;
        spd = .12 + Math.random() * .28;
        alpha = .10 + Math.random() * .35;
        trailFactor = 0;
        twinkAmp = .45;
      } else if (rand < .88) {
        /* mid-field stars */
        r = .55 + Math.random() * .90;
        spd = .30 + Math.random() * .70;
        alpha = .30 + Math.random() * .45;
        trailFactor = .40;
        twinkAmp = .35;
      } else {
        /* close bright stars — visible trail */
        r = 1.0 + Math.random() * 1.40;
        spd = .70 + Math.random() * 1.60;
        alpha = .55 + Math.random() * .40;
        trailFactor = 1.0;
        twinkAmp = .20;
      }

      const hue = 210 + Math.random() * 50;   /* blue-white range */
      const sat = 5  + Math.random() * 30;
      return {
        x: Math.random() * W,
        y: init ? Math.random() * H : -r - Math.random() * 60,
        r, spd,
        /* tiny lateral wobble so stars don't fall perfectly straight */
        vx: (Math.random() - .5) * .18,
        baseAlpha: alpha,
        trailFactor,
        twinkAmp,
        ts: .025 + Math.random() * .055,
        to: Math.random() * Math.PI * 2,
        color: `hsl(${hue},${sat}%,96%)`,
        /* gravity: each frame speed nudges up very slightly */
        gravity: .0008 + Math.random() * .0015,
      };
    }

    function makeShooter() {
      /* shooting stars streak diagonally across the sky */
      const fromTop = Math.random() < .65;
      const angle   = Math.PI / 4 + (Math.random() - .5) * .6;
      const spd     = 7 + Math.random() * 11;
      const len     = 90 + Math.random() * 160;
      return {
        x:  fromTop ? Math.random() * W : -40,
        y:  fromTop ? -40 : Math.random() * H * .5,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        spd, len,
        w:    .6 + Math.random() * 1.6,
        maxA: .45 + Math.random() * .50,
        alpha: 0, life: 0,
        maxL: (len + Math.hypot(W,H)) / spd,
        fi: 14,
      };
    }

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      /* rebuild stars on resize */
      stars = [];
      /* 460 falling stars spread across whole page */
      for (let i = 0; i < 460; i++) stars.push(makeStar(true));
    };
    resize();
    window.addEventListener('resize', resize);

    const loop = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      /* ── falling stars ── */
      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];

        /* physics */
        s.spd += s.gravity;
        s.y   += s.spd;
        s.x   += s.vx;
        /* gentle lateral oscillation */
        s.vx  += Math.sin(t * .012 + s.to) * .004;
        s.vx  *= .995;

        /* recycle star at bottom */
        if (s.y > H + 20) { stars[i] = makeStar(false); continue; }

        /* twinkle */
        const twinkle = 1 - s.twinkAmp + s.twinkAmp * Math.sin(t * s.ts + s.to);
        const a = Math.min(.95, s.baseAlpha * twinkle);

        /* trail — length proportional to speed */
        if (s.trailFactor > 0) {
          const tLen  = s.spd * 6 * s.trailFactor;
          const angle = Math.atan2(s.spd, s.vx);
          const tx    = s.x - Math.sin(angle) * tLen * .15;
          const ty    = s.y - tLen;
          const grd   = ctx.createLinearGradient(s.x, s.y, tx, ty);
          grd.addColorStop(0, s.color.replace('96%)', `96%,${a})`).replace('hsl(', 'hsla('));
          grd.addColorStop(1, 'transparent');
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(tx, ty);
          ctx.strokeStyle = grd;
          ctx.lineWidth   = s.r * .65;
          ctx.lineCap     = 'round';
          ctx.stroke();
          ctx.restore();
        }

        /* glow for bigger stars */
        if (s.r > 1.05) {
          const gr = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
          gr.addColorStop(0, `rgba(200,225,255,${a * .45})`);
          gr.addColorStop(1, 'transparent');
          ctx.fillStyle = gr;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI*2);
          ctx.fill();
        }

        /* star dot */
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = a;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      /* ── shooting stars ── */
      nextShoot--;
      if (nextShoot <= 0 && shooters.length < 3) {
        shooters.push(makeShooter());
        nextShoot = 100 + Math.random() * 240;
      }
      shooters = shooters.filter(s => {
        s.life++; s.x += s.vx; s.y += s.vy;
        if      (s.life < s.fi)           s.alpha = (s.life / s.fi) * s.maxA;
        else if (s.life > s.maxL - s.fi)  s.alpha = Math.max(0, (s.maxL - s.life) / s.fi) * s.maxA;
        else                              s.alpha = s.maxA;

        if (s.alpha > 0) {
          const tx  = s.x - (s.vx / s.spd) * s.len;
          const ty  = s.y - (s.vy / s.spd) * s.len;
          const grd = ctx.createLinearGradient(s.x, s.y, tx, ty);
          grd.addColorStop(0,   `rgba(255,255,255,${s.alpha})`);
          grd.addColorStop(.2,  `rgba(200,230,255,${s.alpha * .7})`);
          grd.addColorStop(.6,  `rgba(160,210,255,${s.alpha * .25})`);
          grd.addColorStop(1,   'transparent');
          ctx.save();
          ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(tx, ty);
          ctx.strokeStyle = grd; ctx.lineWidth = s.w; ctx.lineCap = 'round'; ctx.stroke();
          /* glowing head */
          const hg = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.w * 5);
          hg.addColorStop(0, `rgba(255,255,255,${s.alpha})`);
          hg.addColorStop(1, 'transparent');
          ctx.fillStyle = hg;
          ctx.beginPath(); ctx.arc(s.x, s.y, s.w * 5, 0, Math.PI*2); ctx.fill();
          ctx.restore();
        }
        return s.x < W+120 && s.y < H+120 && s.life <= s.maxL + 20;
      });

      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf); };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position:'fixed', inset:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none' }}
    />
  );
}
