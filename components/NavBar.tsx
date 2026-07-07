'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Download } from 'lucide-react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!resumeOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setResumeOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [resumeOpen]);

  const isLog = pathname.startsWith('/log');

  return (
    <>
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
            <NavLink href="/" active={!isLog}>Profile</NavLink>
            <NavLink href="/log" active={isLog}>Log</NavLink>
            <NavLink active={false} onClick={() => setResumeOpen(true)}>Resume</NavLink>
          </div>
        </div>
      </nav>

      {resumeOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="relative w-full rounded-lg overflow-hidden flex flex-col"
            style={{ maxWidth: '820px', height: '90vh', background: 'var(--bg)', border: '1px solid var(--divider-bright)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between px-4 py-2.5 shrink-0"
              style={{ borderBottom: '1px solid var(--divider)' }}
            >
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Resume
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-1.5 text-xs transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; }}
                >
                  <Download size={13} strokeWidth={1.6} />
                  Download
                </a>
                <button
                  onClick={() => setResumeOpen(false)}
                  aria-label="Close"
                  className="flex items-center justify-center transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; }}
                >
                  <X size={16} strokeWidth={1.6} />
                </button>
              </div>
            </div>
            <iframe src="/resume.pdf" title="Resume" className="flex-1 w-full" style={{ border: 'none' }} />
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({
  href,
  active,
  onClick,
  children,
}: {
  href?: string;
  active: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const className = 'text-sm font-medium pb-1';
  const style = {
    color: 'var(--text)',
    borderBottom: active ? '1px solid var(--text)' : '1px solid transparent',
  };

  if (onClick) {
    return (
      <button onClick={onClick} className={className} style={style}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href!} className={className} style={style}>
      {children}
    </Link>
  );
}
