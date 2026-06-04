'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    setDark(stored === 'dark');
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed top-3 left-4 z-50 rounded-full flex items-center justify-center"
      style={{
        width: 40,
        height: 40,
        background: 'var(--toggle-bg)',
        border: '1px solid var(--toggle-border)',
        color: 'var(--text-muted)',
      }}
    >
      {dark ? <Sun size={14} strokeWidth={1.6} /> : <Moon size={14} strokeWidth={1.6} />}
    </button>
  );
}
