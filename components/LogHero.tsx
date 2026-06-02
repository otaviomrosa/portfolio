'use client';

import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';

export default function LogHero() {
  return (
    <section
      className="relative flex items-end justify-center overflow-hidden"
      style={{ height: '38vh', minHeight: '220px' }}
    >
      {/* Particle canvas */}
      <div className="absolute inset-0">
        <ParticleCanvas className="w-full h-full" />
      </div>

      {/* Overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 30%, transparent 20%, rgba(8,8,16,0.6) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(8,8,16,0.35), transparent 40%, var(--bg) 100%)' }}
      />

      {/* Text */}
      <div className="relative z-10 text-center pb-8 px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.35em] uppercase mb-2 font-medium"
          style={{ color: 'var(--text-muted)' }}
        >
          Otavio Rosa
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          Study Log
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-sm mt-2"
          style={{ color: 'var(--text-muted)' }}
        >
          Notes, research dives, and things I'm currently thinking about.
        </motion.p>
      </div>
    </section>
  );
}
