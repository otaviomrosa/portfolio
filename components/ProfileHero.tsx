'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import OrcidIcon from './OrcidIcon';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/otaviomrosa' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rosaotavio' },
  { icon: Mail, label: 'Email', href: 'mailto:otavio.exec@gmail.com' },
  { icon: OrcidIcon, label: 'ORCID', href: 'https://orcid.org/0009-0000-2002-8375' },
];

export default function ProfileHero() {
  return (
    <section
      className="relative flex items-end justify-center overflow-hidden"
      style={{ height: '34vh', minHeight: '220px', background: 'var(--bg)' }}
    >
      <div className="absolute inset-0">
        <ParticleCanvas className="w-full h-full" fadeBottom />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, var(--hero-tint), transparent 40%, var(--bg) 100%)' }}
      />

      <div className="relative z-10 text-center pb-14 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-semibold tracking-tight"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-space)', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', letterSpacing: '-0.02em' }}
        >
          Otavio Rosa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-base font-light mt-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          MS CS · USF &nbsp;·&nbsp; Computer Vision &amp; Generative AI
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex items-center justify-center gap-2 mt-6"
        >
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="tag flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-70"
            >
              <Icon size={12} strokeWidth={1.6} />
              {label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
