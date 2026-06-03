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
}

const CARD_PATTERN = /<mia_card>([\s\S]*?)<\/mia_card>/g;
const PARTIAL_CARD_PATTERN = /<mia_card>(?:(?!<\/mia_card>)[\s\S])*$/;

function parseAssistantContent(content: string): {
  text: string;
  cards: CardData[];
} {
  const cards: CardData[] = [];

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
    .trim();

  return { text, cards };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const parsed = isUser
    ? { text: message.content, cards: [] }
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
            <ProfileCard key={`${card.title}-${i}`} card={card} />
          ))}
      </div>
    </motion.div>
  );
}
