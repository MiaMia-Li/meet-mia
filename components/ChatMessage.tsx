'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';
import { ProfileCard, type CardData } from './ProfileCard';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatMessageProps {
  message: Message;
  onSelect?: (prompt: string) => void;
}

const CARD_PATTERN = /<mia_card>([\s\S]*?)<\/mia_card>/g;
const PARTIAL_CARD_PATTERN = /<mia_card>(?:(?!<\/mia_card>)[\s\S])*$/;
const FOLLOWUPS_PATTERN = /<mia_followups>([\s\S]*?)<\/mia_followups>/;
const PARTIAL_FOLLOWUPS_PATTERN = /<mia_followups>(?:(?!<\/mia_followups>)[\s\S])*$/;

function parseAssistantContent(content: string): {
  text: string;
  cards: CardData[];
  followups: string[];
} {
  const cards: CardData[] = [];
  let followups: string[] = [];

  const text = content
    .replace(CARD_PATTERN, (_match, json: string) => {
      try {
        const card = JSON.parse(json.trim()) as CardData;
        if (card.title && Array.isArray(card.items)) {
          cards.push(card);
        }
      } catch {
        // malformed JSON during streaming, skip
      }
      return '';
    })
    .replace(PARTIAL_CARD_PATTERN, '')
    .replace(FOLLOWUPS_PATTERN, (_match, json: string) => {
      try {
        const parsed = JSON.parse(json.trim());
        if (Array.isArray(parsed)) followups = parsed;
      } catch {
        // malformed JSON during streaming, skip
      }
      return '';
    })
    .replace(PARTIAL_FOLLOWUPS_PATTERN, '')
    .trim();

  return { text, cards, followups };
}

export function ChatMessage({ message, onSelect }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const parsed = isUser
    ? { text: message.content, cards: [], followups: [] }
    : parseAssistantContent(message.content);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className={cn(
        'flex gap-2.5',
        isUser ? 'items-end justify-end' : 'items-start justify-start'
      )}
    >
      {!isUser && (
        <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-100">
          <span className="text-[10px] font-semibold text-white dark:text-neutral-900 tracking-tight">
            M
          </span>
        </div>
      )}

      <div className={cn('flex flex-col gap-2', isUser ? 'max-w-[78%]' : 'max-w-[88%]')}>
        {parsed.text && (
          <div
            className={cn(
              'px-4 py-2.5 text-sm leading-relaxed',
              isUser
                ? 'whitespace-pre-wrap rounded-2xl rounded-br-[4px] bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                : 'rounded-2xl rounded-bl-[4px] border border-neutral-100 bg-neutral-50 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200'
            )}
          >
            {isUser ? (
              parsed.text
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  strong: ({ children }) => <strong className="font-semibold text-neutral-900 dark:text-neutral-100">{children}</strong>,
                  ul: ({ children }) => <ul className="mb-2 ml-4 list-disc space-y-1 last:mb-0">{children}</ul>,
                  ol: ({ children }) => <ol className="mb-2 ml-4 list-decimal space-y-1 last:mb-0">{children}</ol>,
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  code: ({ children, className }) => {
                    const isBlock = !!className;
                    return isBlock ? (
                      <code className="block my-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 px-3 py-2 font-mono text-xs overflow-x-auto">{children}</code>
                    ) : (
                      <code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 font-mono text-xs">{children}</code>
                    );
                  },
                  a: ({ href, children }) => (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-neutral-950 dark:hover:text-neutral-50">{children}</a>
                  ),
                }}
              >
                {parsed.text}
              </ReactMarkdown>
            )}
          </div>
        )}

        {!isUser &&
          parsed.cards.map((card, i) => (
            <ProfileCard key={`${card.title}-${i}`} card={card} onSelect={onSelect} />
          ))}

        {!isUser && onSelect && parsed.followups.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {parsed.followups.map((prompt) => (
              <button
                key={prompt}
                onClick={() => onSelect(prompt)}
                className="rounded-lg border border-neutral-200 dark:border-neutral-700 px-2.5 py-1 text-[11px] text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 active:scale-[0.98] transition-all text-left"
              >
                {prompt}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
