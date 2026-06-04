'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ChatPanel } from '@/components/ChatPanel';
import { BottomDock } from '@/components/BottomDock';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenChat={() => setChatOpen(true)} />

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-black/25 dark:bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${
          chatOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setChatOpen(false)}
      />

      {/* Chat slide-over */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[460px] z-40 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          chatOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ChatPanel onBack={() => setChatOpen(false)} />
      </div>

      <BottomDock chatOpen={chatOpen} onToggleChat={() => setChatOpen(v => !v)} />
    </>
  );
}
