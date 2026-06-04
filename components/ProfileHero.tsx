'use client';

import ParticleCanvas from './ParticleCanvas';

export default function ProfileHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '22vh', minHeight: '140px', background: 'var(--bg)' }}
    >
      <div className="absolute inset-0">
        <ParticleCanvas className="w-full h-full" fadeBottom />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.35), transparent 40%, var(--bg) 100%)' }}
      />
    </section>
  );
}
