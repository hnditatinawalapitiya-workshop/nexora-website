"use client";

import { useEffect, useRef } from "react";
import { Logo } from "@/components/Logo";

// Port of the reference hero "waveform orb" (2D canvas), recoloured to NEXORA gold.
// Layers: dark radial core, faint arcs, a horizontal waveform, 4 wobbling rings, a glowing rim, then the logo on top.
export function HeroOrb() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, active: false };
    let size = 0;
    let t = 0;
    let raf = 0;
    let visible = true;

    const resize = () => {
      const w = Math.max(1, Math.floor(wrap.offsetWidth));
      const dpr = window.devicePixelRatio || 1;
      size = w;
      canvas.width = w * dpr;
      canvas.height = w * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${w}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const arc = (r: number, alpha: number, width: number, a0 = 0, a1 = Math.PI * 2) => {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, r, a0, a1);
      ctx.strokeStyle = `rgba(255, 214, 0, ${alpha})`;
      ctx.lineWidth = width;
      ctx.stroke();
    };

    const draw = () => {
      const u = size;
      const c = u / 2;
      // Idle "breathing" intensity instead of live voice input.
      const s = 0.12 + 0.08 * Math.abs(Math.sin(t * 0.9));
      const core = u * (0.19 + 0.018 * s);

      ctx.clearRect(0, 0, u, u);
      ctx.shadowBlur = 0;

      const bg = ctx.createRadialGradient(c, c, 0.04 * u, c, c, 0.5 * u);
      bg.addColorStop(0, "rgba(22, 17, 2, 0.95)");
      bg.addColorStop(0.4, `rgba(14, 11, 2, ${0.74 + 0.08 * s})`);
      bg.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, u, u);

      arc(0.39 * u, 0.16 + 0.08 * s, 1.2 + 0.35 * s);
      arc(0.43 * u, 0.12 + 0.06 * s, 0.9, 0.08 * Math.PI, 1.7 * Math.PI);
      arc(0.47 * u, 0.08 + 0.04 * s, 0.7, 0.55 * Math.PI, 1.4 * Math.PI);

      // Horizontal waveform through the middle.
      {
        const g = ctx.createLinearGradient(0, c, u, c);
        g.addColorStop(0, "rgba(255, 150, 0, 0)");
        g.addColorStop(0.18, "rgba(255, 150, 0, 0.9)");
        g.addColorStop(0.48, "rgba(255, 245, 190, 0.82)");
        g.addColorStop(0.52, "rgba(255, 250, 220, 0.82)");
        g.addColorStop(0.82, "rgba(255, 230, 0, 0.9)");
        g.addColorStop(1, "rgba(255, 230, 0, 0)");
        const amp = Math.max(s, 0.08);
        ctx.beginPath();
        for (let x = 0; x <= u; x += 2) {
          const d = Math.abs(x - c);
          const y =
            c +
            Math.sin(0.08 * x + t * (7 + 6 * amp)) * (10 + 20 * amp) * Math.exp(-d / (0.14 * u)) +
            Math.sin(0.34 * x - t * (11 + 9 * amp)) * (4 + 8 * amp) * Math.exp(-d / (0.22 * u));
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = g;
        ctx.lineWidth = 2.1 + 1.3 * amp;
        ctx.shadowBlur = 18 + 10 * amp;
        ctx.shadowColor = "rgba(255, 220, 80, 0.5)";
        ctx.stroke();
      }

      // Four wobbling rings that lean toward the pointer.
      {
        const r0 = 0.265 * u;
        const o = Math.max(s, 0.04);
        const pAngle = Math.atan2(pointer.y, pointer.x || 1);
        const pPull = pointer.active ? Math.min(Math.hypot(pointer.x, pointer.y) / (1.6 * r0), 1) : 0;
        for (let k = 0; k < 4; k++) {
          const g = ctx.createLinearGradient(c - r0, c, c + r0, c);
          g.addColorStop(0, `rgba(255, 140, 0, ${0.95 - 0.16 * k})`);
          g.addColorStop(0.44, `rgba(255, 200, 40, ${0.72 - 0.12 * k})`);
          g.addColorStop(0.56, `rgba(255, 225, 80, ${0.72 - 0.12 * k})`);
          g.addColorStop(1, `rgba(255, 240, 0, ${0.95 - 0.16 * k})`);
          ctx.beginPath();
          for (let deg = 0; deg <= 360; deg++) {
            const a = (deg / 360) * Math.PI * 2;
            const m = 1 + o * (1.15 + 0.08 * k);
            const wobble =
              18 * Math.sin(3.2 * a - 1.35 * t + 0.65 * k) * m +
              10 * Math.cos(6.7 * a + 1.9 * t - k) * m +
              Math.sin(12.4 * a - 1.5 * t + 2 * k) * (5 + 12 * o);
            const r =
              r0 + 12 * k + wobble +
              Math.cos(a - pAngle - 0.2 * t) * pPull * (16 + 12 * o) +
              Math.sin(t * (1 + 2 * o) + k) * (4 + 8 * o);
            const squash = 0.94 + Math.sin(2 * a - t) * (0.03 + 0.04 * o);
            const x = c + Math.cos(a) * r;
            const y = c + Math.sin(a) * r * squash;
            if (deg === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.strokeStyle = g;
          ctx.lineWidth = 1.35 + 0.75 * o;
          ctx.shadowBlur = 22 + 16 * o;
          ctx.shadowColor = k < 2 ? "rgba(255, 170, 0, 0.55)" : "rgba(255, 235, 60, 0.55)";
          ctx.stroke();
        }
      }

      // Glowing rim.
      const rim = ctx.createLinearGradient(c - 0.25 * u, c, c + 0.25 * u, c);
      rim.addColorStop(0, "rgba(255, 160, 0, 1)");
      rim.addColorStop(0.5, "rgba(255, 245, 200, 0.2)");
      rim.addColorStop(1, "rgba(255, 235, 0, 1)");
      ctx.beginPath();
      ctx.arc(c, c, 0.306 * u + 6 * s, 0, Math.PI * 2);
      ctx.strokeStyle = rim;
      ctx.lineWidth = 3 + 1.5 * s;
      ctx.shadowBlur = 30 + 18 * s;
      ctx.shadowColor = "rgba(255, 210, 0, 0.7)";
      ctx.stroke();

      // Dark core the logo sits on.
      const coreFill = ctx.createRadialGradient(c, c, 0.04 * u, c, c, 1.35 * core);
      coreFill.addColorStop(0, "rgba(20, 16, 4, 0.98)");
      coreFill.addColorStop(0.75, "rgba(8, 6, 1, 0.96)");
      coreFill.addColorStop(1, "rgba(3, 2, 0, 0.85)");
      ctx.beginPath();
      ctx.arc(c, c, 1.18 * core, 0, Math.PI * 2);
      ctx.fillStyle = coreFill;
      ctx.fill();

      t += 0.016 + 0.009 * s;
      if (visible && !reduced) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left - r.width / 2;
      pointer.y = e.clientY - r.top - r.height / 2;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    ro.observe(wrap);
    // Pause the loop while the hero is off screen.
    const io = new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting;
      if (visible && !was && !reduced) draw();
    });
    io.observe(wrap);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative aspect-square w-full">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Logo width={520} priority className="w-[40%] drop-shadow-[0_0_24px_rgba(255,214,0,0.35)]" />
      </div>
    </div>
  );
}
