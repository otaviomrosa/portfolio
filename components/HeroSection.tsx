'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticleCanvas from './ParticleCanvas';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/otaviomrosa' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rosaotavio' },
  { icon: Mail, label: 'Email', href: 'mailto:otavio.exec@gmail.com' },
];

const stats = [
  { value: 'NeurIPS', label: "paper submitted" },
  { value: '3×', label: 'research labs' },
  { value: "Spring '27", label: 'graduating' },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particle canvas */}
      <div className="absolute inset-0">
        <ParticleCanvas className="w-full h-full" />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(8,8,16,0.55) 100%)',
        }}
      />

      {/* Bottom fade to content */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }}
      />

      {/* Top gradient for nav readability */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(8,8,16,0.5), transparent)' }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto select-none">
        <motion.p
          {...fadeUp(0.1)}
          className="text-xs tracking-[0.35em] uppercase mb-5 font-medium"
          style={{ color: 'var(--accent)', opacity: 0.85 }}
        >
          otaviorosa.com
        </motion.p>

        <motion.h1
          {...fadeUp(0.25)}
          className="font-bold leading-[0.92] tracking-tight mb-5"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', color: 'var(--text)' }}
        >
          Otavio
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.55) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Rosa
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="text-base md:text-lg mb-2 font-light"
          style={{ color: 'var(--text-secondary)' }}
        >
          MS AI @ USF &nbsp;·&nbsp; Computer Vision &amp; Generative AI Research
        </motion.p>

        <motion.p
          {...fadeUp(0.5)}
          className="text-sm md:text-base mb-9 max-w-md mx-auto"
          style={{ color: 'var(--text-muted)' }}
        >
          Investigating where neural networks fail to distinguish the real from the synthetic.
        </motion.p>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex items-center justify-center gap-6 md:gap-10 mb-9"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--accent)' }}>
                {s.value}
              </p>
              <p className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.72)} className="flex items-center justify-center gap-3">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 card card-hover"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
            >
              <Icon size={17} strokeWidth={1.7} />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
