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
  fadeBottom?: boolean;
}

export default function ParticleCanvas({ className, fadeBottom = false }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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


    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.004;

      for (const p of particles) {
        const nx = p.baseX / w;
        const ny = p.baseY / h;

        const w1 = Math.sin(nx * 7.2 + t * 1.05 + p.phase) *
                   Math.cos(ny * 5.8 - t * 0.72);
        const w2 = Math.sin((nx + ny) * 4.8 - t * 0.88 + p.phase * 0.6);
        const w3 = Math.cos(nx * 11.0 - ny * 7.5 + t * 1.25 + p.phase * 0.4);
        const wave = ((w1 * 0.5 + w2 * 0.3 + w3 * 0.2) + 1) / 2;

        const twinkle = Math.sin(t * p.twinkleSpeed + p.twinklePhase) * p.twinkleMag;

        const brightness = Math.min(1, Math.max(0, wave + twinkle));

        // Fabric displacement
        const disp = (brightness - 0.5) * 4;
        const px = p.baseX + Math.sin(p.phase + t * 0.75) * disp;
        const py = p.baseY + Math.cos(p.phase * 0.8 + t * 0.55) * disp;

        const radius = p.size * (0.3 + brightness * 1.1);
        // Higher exponent = fewer bright dots, more are near-invisible → less busy
        const yFade = fadeBottom
          ? (ny < 0.45 ? 1 : Math.max(0, Math.cos(((ny - 0.45) / 0.55) * Math.PI / 2)))
          : 1;
        const opacity = Math.pow(brightness, 2.4) * 0.65 * yFade;

        if (opacity < 0.015) continue;

        const isLight = document.documentElement.classList.contains('light');
        const dotRGB = isLight ? '90,90,90' : '210,210,210';
        const glowRGB = isLight ? '80,80,80' : '215,215,215';

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotRGB},${opacity.toFixed(3)})`;
        ctx.fill();

        // Subtle glow only on the very brightest dots
        if (brightness > 0.80) {
          const extra = brightness - 0.80;
          const glowR = radius * 2.5;
          const glowA = extra * 0.28;
          const grad = ctx.createRadialGradient(px, py, 0, px, py, glowR);
          grad.addColorStop(0, `rgba(${glowRGB},${glowA.toFixed(3)})`);
          grad.addColorStop(1, `rgba(${glowRGB},0)`);
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
