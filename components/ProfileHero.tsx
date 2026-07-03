'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import OrcidIcon from './OrcidIcon';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/otaviomrosa', color: 'var(--icon-github)' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rosaotavio', color: 'var(--icon-linkedin)' },
  { icon: Mail, label: 'Email', href: 'mailto:otavio.exec@gmail.com', color: 'var(--icon-email)' },
  { icon: OrcidIcon, label: 'ORCID', href: 'https://orcid.org/0009-0000-2002-8375', color: 'var(--icon-orcid)' },
];

export default function ProfileHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: '12rem', paddingBottom: '3.5rem', background: 'var(--bg)' }}
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
          className="font-semibold tracking-tight"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-space)', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', letterSpacing: '-0.02em' }}
        >
          Otavio Rosa
        </h1>
        <p
          className="text-base font-light mt-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          MS CS · USF &nbsp;·&nbsp; Computer Vision &amp; Generative AI
        </p>
        <div className="flex items-center justify-center gap-2 mt-6">
          {socialLinks.map(({ icon: Icon, label, href, color }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="tag flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-70"
            >
              <span style={{ color }} className="flex items-center">
                <Icon size={12} strokeWidth={1.6} />
              </span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
