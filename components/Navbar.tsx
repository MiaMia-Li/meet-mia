'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 border-b border-neutral-100 dark:border-neutral-800/80 bg-white/90 dark:bg-black/90 backdrop-blur-md"
    >
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Meet Mia
        </span>
        <span className="hidden sm:block text-xs text-neutral-400 dark:text-neutral-500 font-normal">
          Full-stack AI product engineer
        </span>
      </div>

      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        aria-label="Toggle theme"
      >
        {mounted ? (
          theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )
        ) : (
          <div className="h-4 w-4" />
        )}
      </button>
    </motion.nav>
  );
}
