'use client';

import { ExternalLink } from 'lucide-react';

export interface CardData {
  eyebrow: string;
  title: string;
  items: string[];
  tags: string[];
  action?: {
    label: string;
    href: string;
  };
  followups?: string[];
}

interface ProfileCardProps {
  card: CardData;
  onSelect?: (prompt: string) => void;
}

export function ProfileCard({ card, onSelect }: ProfileCardProps) {
  return (
    <div className="w-full rounded-2xl rounded-bl-[4px] border border-neutral-100 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 px-4 py-3">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
            {card.eyebrow}
          </p>
          <h3 className="text-sm font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
            {card.title}
          </h3>
        </div>
        {card.action && (
          <a
            href={card.action.href}
            target={card.action.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={card.action.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="flex flex-shrink-0 items-center gap-1 rounded-md border border-neutral-200 dark:border-neutral-700 px-2 py-1 text-[10px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {card.action.label}
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>

      {card.items.length > 0 && (
        <ul className="mb-3 space-y-1">
          {card.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {card.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[10px] text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {onSelect && card.followups && card.followups.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-neutral-100 dark:border-neutral-800 pt-3">
          {card.followups.map((prompt) => (
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
  );
}
