'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className={cn('flex items-end gap-2.5', isUser ? 'justify-end' : 'justify-start')}
    >
      {!isUser && (
        <div className="flex-shrink-0 h-7 w-7 rounded-full bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center mb-0.5">
          <span className="text-[10px] font-semibold text-white dark:text-neutral-900 tracking-tight">
            M
          </span>
        </div>
      )}

      <div
        className={cn(
          'max-w-[78%] px-4 py-2.5 text-sm leading-relaxed',
          isUser
            ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-2xl rounded-br-[4px]'
            : 'bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-100 dark:border-neutral-800 rounded-2xl rounded-bl-[4px]'
        )}
      >
        {message.content}
      </div>
    </motion.div>
  );
}
