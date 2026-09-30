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
  const isProjects = pathname.startsWith('/projects');
  const isResume = pathname.startsWith('/resume');

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'var(--glass-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid var(--glass-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center">
        <div className="flex items-center gap-8">
          <NavLink href="/" active={!isLog && !isProjects && !isResume}>Profile</NavLink>
          <NavLink href="/projects" active={isProjects}>Projects</NavLink>
          <NavLink href="/log" active={isLog}>Log</NavLink>
          <NavLink href="/resume" active={isResume}>Resume</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  const className = 'text-sm font-medium pb-1';
  const style = {
    color: 'var(--text)',
    borderBottom: active ? '1px solid var(--text)' : '1px solid transparent',
  };

  return (
    <Link href={href} className={className} style={style}>
      {children}
    </Link>
  );
}
