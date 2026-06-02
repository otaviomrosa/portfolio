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
  { value: 'NeurIPS', label: 'paper submitted' },
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
      {/* <div className="absolute inset-0">
        <ParticleCanvas className="w-full h-full" />
      </div> */}

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(10,10,10,0.55) 100%)',
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }}
      />

      {/* Top fade for nav */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.5), transparent)' }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto select-none">
        <motion.h1
          {...fadeUp(0.2)}
          className="leading-tight mb-5 whitespace-nowrap"
          style={{
            fontSize: 'clamp(3rem, 7.5vw, 6rem)',
            fontFamily: 'var(--font-space)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
          }}
        >
          Otavio Rosa
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-base md:text-lg mb-3 font-light"
          style={{ color: 'var(--text-secondary)' }}
        >
          MS CS @ USF &nbsp;·&nbsp; Computer Vision &amp; Generative AI Research
        </motion.p>

        <motion.p
          {...fadeUp(0.47)}
          className="text-base md:text-lg mb-9 max-w-lg mx-auto font-light leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Targeting AI/ML Engineering.
        </motion.p>

        {/* Stats — shiny light blue */}
        <motion.div
          {...fadeUp(0.58)}
          className="flex items-center justify-center gap-6 md:gap-12 mb-9"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-lg md:text-xl font-semibold"
                style={{ color: '#e8e8e8' }}
              >
                {s.value}
              </p>
              <p className="text-[10px] tracking-widest uppercase mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.70)} className="flex items-center justify-center gap-3">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#e8e8e8')}
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
