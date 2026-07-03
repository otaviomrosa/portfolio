'use client';

import ParticleCanvas from './ParticleCanvas';

export default function LogHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: '12rem', paddingBottom: '6.5rem', background: 'var(--bg)' }}
    >
      <div className="absolute inset-0">
        <ParticleCanvas className="w-full h-full" fadeBottom />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, var(--hero-tint), transparent 40%, var(--bg) 100%)' }}
      />

      <div className="relative z-10 text-center px-6">
        <h1
          className="font-semibold tracking-tight mb-3"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-space)', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', letterSpacing: '-0.02em' }}
        >
          Study Log
        </h1>
        <p
          className="text-base md:text-lg font-light leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Notes, research dives, and things I&apos;m currently thinking about.
        </p>
      </div>
    </section>
  );
}
