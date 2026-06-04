'use client';

import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';

export default function ProfileHero() {
  return (
    <section
      className="relative flex items-end justify-center overflow-hidden"
      style={{ height: '22vh', minHeight: '140px', background: 'var(--bg)' }}
    >
      <div className="absolute inset-0">
        <ParticleCanvas className="w-full h-full" fadeBottom />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.35), transparent 40%, var(--bg) 100%)' }}
      />

      <div className="relative z-10 text-center pb-6 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-semibold tracking-tight"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-space)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em' }}
        >
          Otavio Rosa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-sm font-light mt-1"
          style={{ color: 'var(--text-secondary)' }}
        >
          MS CS · USF &nbsp;·&nbsp; Computer Vision &amp; Generative AI
        </motion.p>
      </div>
    </section>
  );
}
