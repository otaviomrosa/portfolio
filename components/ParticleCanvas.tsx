'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  baseX: number;
  baseY: number;
  size: number;
  phase: number;
  twinkleSpeed: number;   // individual blink frequency
  twinklePhase: number;   // individual blink offset
  twinkleMag: number;     // how strongly this dot twinkles
}

interface Props {
  className?: string;
}

export default function ParticleCanvas({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  const buildGrid = useCallback((width: number, height: number): Particle[] => {
    const particles: Particle[] = [];
    const spacing = 38;
    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          baseX: i * spacing,
          baseY: j * spacing,
          size: 0.7 + Math.random() * 0.9,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: 1.2 + Math.random() * 2.8,   // 1.2 – 4.0 Hz feel
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleMag: 0.08 + Math.random() * 0.22,    // subtle to noticeable
        });
      }
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let t = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = buildGrid(w, h);
    };

    resize();
    window.addEventListener('resize', resize);

    // Listen on document so dots react even when the cursor is over text/UI layers
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    document.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.004;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particles) {
        const nx = p.baseX / w;
        const ny = p.baseY / h;

        // Layered wave functions
        const w1 = Math.sin(nx * 7.2 + t * 1.05 + p.phase) *
                   Math.cos(ny * 5.8 - t * 0.72);
        const w2 = Math.sin((nx + ny) * 4.8 - t * 0.88 + p.phase * 0.6);
        const w3 = Math.cos(nx * 11.0 - ny * 7.5 + t * 1.25 + p.phase * 0.4);
        const wave = ((w1 * 0.5 + w2 * 0.3 + w3 * 0.2) + 1) / 2; // 0–1

        // Per-particle star twinkle — each dot breathes at its own rate
        const twinkle = Math.sin(t * p.twinkleSpeed + p.twinklePhase) * p.twinkleMag;

        // Mouse influence — subtle, only visible up close
        const dx = p.baseX - mx;
        const dy = p.baseY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseBoost = Math.max(0, 1 - dist / 120) * 0.28;

        const brightness = Math.min(1, Math.max(0, wave + twinkle + mouseBoost));

        // Fabric displacement
        const disp = (brightness - 0.5) * 4;
        const px = p.baseX + Math.sin(p.phase + t * 0.75) * disp;
        const py = p.baseY + Math.cos(p.phase * 0.8 + t * 0.55) * disp;

        const radius = p.size * (0.3 + brightness * 1.1);
        // Higher exponent = fewer bright dots, more are near-invisible → less busy
        const opacity = Math.pow(brightness, 2.4) * 0.65;

        if (opacity < 0.015) continue;

        // Slightly silvery-gray rather than pure white — less harsh
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,218,228,${opacity.toFixed(3)})`;
        ctx.fill();

        // Subtle glow only on the very brightest dots
        if (brightness > 0.80) {
          const extra = brightness - 0.80;
          const glowR = radius * (2.5 + mouseBoost * 2);
          const glowA = extra * 0.28;
          const grad = ctx.createRadialGradient(px, py, 0, px, py, glowR);
          grad.addColorStop(0, `rgba(220,232,248,${glowA.toFixed(3)})`);
          grad.addColorStop(1, 'rgba(220,232,248,0)');
          ctx.beginPath();
          ctx.arc(px, py, glowR, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [buildGrid]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
}
