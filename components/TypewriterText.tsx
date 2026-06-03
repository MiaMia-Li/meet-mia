'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
  onComplete?: () => void;
  className?: string;
}

export function TypewriterText({
  lines,
  typingSpeed = 38,
  lineDelay = 420,
  onComplete,
  className,
}: TypewriterTextProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>(['']);
  const [isComplete, setIsComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const linesRef = useRef(lines);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let current: string[] = [''];

    const tick = () => {
      const line = linesRef.current[lineIdx];

      if (charIdx < line.length) {
        const ch = line[charIdx];
        const isPunct = /[.,!?;:]/.test(ch);
        const jitter = (Math.random() - 0.5) * typingSpeed * 0.7;
        const delay = typingSpeed + (isPunct ? 100 : 0) + jitter;

        current = current.map((l, i) =>
          i === lineIdx ? line.slice(0, charIdx + 1) : l
        );
        setDisplayedLines([...current]);
        charIdx++;
        timeoutRef.current = setTimeout(tick, Math.max(16, delay));
      } else {
        lineIdx++;
        charIdx = 0;
        if (lineIdx < linesRef.current.length) {
          current = [...current, ''];
          setDisplayedLines([...current]);
          const pause = line === '' ? lineDelay * 1.8 : lineDelay;
          timeoutRef.current = setTimeout(tick, pause);
        } else {
          setIsComplete(true);
          onComplete?.();
        }
      }
    };

    timeoutRef.current = setTimeout(tick, 550);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 520);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn('text-left', className)}>
      {displayedLines.map((line, i) => {
        const isLastLine = i === displayedLines.length - 1;
        const showCursor = isLastLine && !isComplete && line !== '';
        return (
          <p
            key={i}
            className={cn(
              'leading-relaxed',
              line === '' && !isLastLine ? 'h-4' : 'min-h-[1.6em]',
              i === 0 && 'font-medium'
            )}
          >
            {line}
            {showCursor && (
              <span
                className={cn(
                  'inline-block w-[2px] h-[1.1em] ml-[1px] bg-current align-middle rounded-sm transition-opacity duration-75',
                  cursorVisible ? 'opacity-100' : 'opacity-0'
                )}
              />
            )}
          </p>
        );
      })}
      {isComplete && (
        <span
          className={cn(
            'inline-block w-[2px] h-[1.1em] ml-[1px] bg-current align-middle rounded-sm',
            cursorVisible ? 'opacity-100' : 'opacity-0',
            'transition-opacity duration-75'
          )}
        />
      )}
    </div>
  );
}
