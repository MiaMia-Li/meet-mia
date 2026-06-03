'use client';

import { motion } from 'framer-motion';

interface PromptSuggestionsProps {
  prompts: string[];
  onSelect: (prompt: string) => void;
}

export function PromptSuggestions({ prompts, onSelect }: PromptSuggestionsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {prompts.map((prompt, i) => (
        <motion.button
          key={prompt}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.28, ease: 'easeOut' }}
          onClick={() => onSelect(prompt)}
          className="px-3.5 py-2 text-xs sm:text-sm border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-200 active:scale-[0.98] transition-all duration-150 text-left"
        >
          {prompt}
        </motion.button>
      ))}
    </div>
  );
}
