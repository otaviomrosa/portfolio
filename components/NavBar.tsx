'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isLog = pathname.startsWith('/log');

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: 'rgba(10,10,10,0.92)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }
          : {
              background: 'transparent',
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
              borderBottom: '1px solid transparent',
            }
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center">
        {/* Pill toggle — glass container */}
        <div
          className="flex items-center gap-0.5 p-1 rounded-full"
          style={{
            background: 'rgba(160,150,255,0.07)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(170,160,255,0.13)',
            boxShadow: 'inset 0 1px 0 rgba(170,160,255,0.10)',
          }}
        >
          <NavPill href="/" active={!isLog}>Profile</NavPill>
          <NavPill href="/log" active={isLog}>Log</NavPill>
        </div>
      </div>
    </nav>
  );
}

function NavPill({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
      style={
        active
          ? { background: '#f0eeff', color: '#080810' }
          : { color: 'var(--text-secondary)' }
      }
      onMouseEnter={(e) => {
        if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--text)';
      }}
      onMouseLeave={(e) => {
        if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
      }}
    >
      {children}
    </Link>
  );
}
