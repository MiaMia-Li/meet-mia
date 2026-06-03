'use client';

import { useEffect, useRef } from 'react';
import { useChat } from 'ai/react';
import { motion } from 'framer-motion';
import { ArrowLeft, RotateCcw, Send } from 'lucide-react';
import Image from 'next/image';
import { ChatMessage } from './ChatMessage';
import { PromptSuggestions } from './PromptSuggestions';

const SUGGESTED_PROMPTS = [
  'What projects have you built?',
  'Walk me through your career',
  'What are your AI and full-stack engineering skills?',
  'Are you open to remote or EP sponsorship roles?',
  'How can I contact you?',
];

interface ChatPanelProps {
  onBack: () => void;
}

export function ChatPanel({ onBack }: ChatPanelProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, append, setMessages } = useChat({
    api: '/api/chat',
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handlePromptSelect = (prompt: string) => {
    append({ role: 'user', content: prompt });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
      }
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  const hasMessages = messages.length > 0;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-black">
      {/* Chat sub-header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-100 dark:border-neutral-800 flex-shrink-0">
        <button
          onClick={onBack}
          className="p-1.5 -ml-1 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Back to home"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          <Image
            src="/avatar.jpg"
            alt="Mia AI"
            width={28}
            height={28}
            className="w-7 h-7 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 leading-none">
              Mia AI
            </p>
            <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5">
              Ask about my work, projects, and fit
            </p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          {hasMessages && (
            <button
              onClick={() => setMessages([])}
              className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Clear chat"
              title="Clear chat"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          )}
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-neutral-400">Online</span>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-6">
          {!hasMessages ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center pt-6">
                <Image
                  src="/avatar.jpg"
                  alt="Mia AI"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-neutral-200 dark:ring-neutral-700 mx-auto mb-4"
                />
                <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-1.5">
                  Hi, I&apos;m Mia AI
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mx-auto">
                  Ask about my AI product work, full-stack experience, projects, skills, or open roles.
                </p>
              </div>
              <PromptSuggestions prompts={SUGGESTED_PROMPTS} onSelect={handlePromptSelect} />
            </motion.div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={{
                    id: message.id,
                    role: message.role as 'user' | 'assistant',
                    content: message.content,
                  }}
                  onSelect={handlePromptSelect}
                />
              ))}

              {/* Loading indicator — only before AI starts streaming */}
              {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-end gap-2.5"
                >
                  <Image
                    src="/avatar.jpg"
                    alt="Mia AI"
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl rounded-bl-[4px]">
                    <div className="flex gap-1 items-center h-4">
                      <div className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-bounce [animation-delay:0ms]" />
                      <div className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-bounce [animation-delay:160ms]" />
                      <div className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-bounce [animation-delay:320ms]" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-neutral-100 dark:border-neutral-800 px-4 py-4 flex-shrink-0">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex items-end gap-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              rows={1}
              className="flex-1 resize-none rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700 focus:border-transparent transition-all overflow-hidden"
              style={{ minHeight: '44px' }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="flex-shrink-0 h-11 w-11 flex items-center justify-center rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-300 active:scale-95 transition-all disabled:opacity-35 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="text-[11px] text-neutral-400 dark:text-neutral-600 text-center mt-2.5">
            Powered by OpenAI · Mia may not know everything
          </p>
        </div>
      </div>
    </div>
  );
}
