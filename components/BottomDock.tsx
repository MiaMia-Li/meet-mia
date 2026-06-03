'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Linkedin, Github, Mail, MessageCircle, X } from 'lucide-react';

interface BottomDockProps {
  chatOpen?: boolean;
  onToggleChat?: () => void;
}

export function BottomDock({ chatOpen = false, onToggleChat }: BottomDockProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.7 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 px-3 py-2 rounded-full border border-neutral-200/80 dark:border-neutral-700/80 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm"
    >
      <a
        href="https://www.linkedin.com/in/mengyao-li-software/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href="https://github.com/MiaMia-Li/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      >
        <Github className="h-4 w-4" />
      </a>
      <a
        href="mailto:sept.miamia@gmail.com"
        aria-label="Email"
        className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      >
        <Mail className="h-4 w-4" />
      </a>
      <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-700 mx-1" />
      <button
        onClick={onToggleChat}
        aria-label={chatOpen ? 'Close chat' : 'Chat with Mia'}
        className={`p-2 rounded-full transition-all duration-200 ${
          chatOpen
            ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900'
            : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
        }`}
      >
        {chatOpen ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
      </button>
      <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-700 mx-1" />
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle theme"
        className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      >
        {mounted ? (
          theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
        ) : (
          <div className="h-4 w-4" />
        )}
      </button>
    </motion.nav>
  );
}
