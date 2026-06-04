"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Linkedin,
  Github,
  Mail,
  Sparkles,
} from "lucide-react";

const green = "#22C55E";

const EXPERIENCE = [
  {
    company: "Atria AI",
    role: "Frontend Engineer",
    period: "Mar 2025 – May 2026",
    note: "651 commits · AI image generation core",
  },
  {
    company: "Kuaishou",
    role: "Frontend Developer",
    period: "Sep 2020 – May 2024",
    note: "Led 4-person team · 50% efficiency gain",
  },
  {
    company: "Meituan",
    role: "Frontend Developer",
    period: "Apr 2019 – Sep 2020",
    note: "¥6.6M revenue · 300,000+ merchants",
  },
];

const PROJECTS = [
  {
    tag: "Solo · SaaS",
    name: "SnapStory AI",
    metric: "2,000+ early users",
    desc: "AI storytelling SaaS — async generation, Stripe payments, creator workflows.",
    href: "https://www.snapstoryai.com",
  },
  {
    tag: "AI Tool",
    name: "PageGenAI",
    metric: "10x faster creation",
    desc: "Text / screenshot → full web page pipeline. Solo full-stack.",
    href: "https://github.com/MiaMia-Li/",
  },
  {
    tag: "Ops Tool",
    name: "Admin Dashboard",
    metric: "0→1 in one week",
    desc: "Internal ops platform · 120+ APIs, template library, data dashboards.",
    href: "https://www.linkedin.com/in/mengyao-li-software/",
  },
  {
    tag: "Impact",
    name: "Ad Saver Extension",
    metric: "5 platforms · 60% reuse",
    desc: "Cross-platform Chrome extension — TikTok, Instagram, Meta Ad Library.",
    href: "https://www.linkedin.com/in/mengyao-li-software/",
  },
];

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "OpenAI API",
  "AWS",
  "Docker",
  "Stripe",
];

interface HeroSectionProps {
  onOpenChat: () => void;
}

export function HeroSection({ onOpenChat }: HeroSectionProps) {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(
      h < 12 ? "Good morning!" : h < 17 ? "Good afternoon!" : "Good evening!",
    );
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pb-28">
      {/* ── Magazine grid ─────────────────────────────────────── */}
      <div className="w-full max-w-[1020px] mx-auto border-x border-neutral-200 dark:border-neutral-800">
        {/* Row 1 — Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-end gap-5 px-10 md:px-14 py-10 border-b border-neutral-200 dark:border-neutral-800"
        >
          <h1 className="font-black text-[72px] md:text-[104px] leading-none tracking-[-0.04em] text-black dark:text-white">
            Mia Li.
          </h1>
          <AnimatePresence>
            {greeting && (
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-3 text-sm font-bold px-3 py-1.5 rounded-full text-white whitespace-nowrap"
                style={{ background: green }}
              >
                {greeting}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Row 2 — 3-column main */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800 border-b border-neutral-200 dark:border-neutral-800">
          {/* Col A — About */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-5 p-8"
          >
            <div>
              <h2 className="font-bold text-lg text-black dark:text-white mb-3">
                About me
              </h2>
              <p className="text-sm text-gray-600 dark:text-neutral-400 leading-[1.85]">
                Product-minded engineer with 7 years building AI-powered
                workflows, creative tools, and scalable SaaS systems. I turn
                LLMs and generation pipelines into shipped products.
              </p>
              <p className="text-sm text-gray-600 dark:text-neutral-400 leading-[1.85] mt-3">
                Open to AI product engineering and early-stage teams. Based in
                Singapore — EP sponsorship or senior remote.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {[
                "AI Product Engineering",
                "Full-Stack SaaS",
                "Singapore / Remote",
              ].map((t) => (
                <span
                  key={t}
                  className="text-[10px] border border-neutral-200 dark:border-neutral-700 px-2.5 py-1 rounded-full text-gray-500 dark:text-neutral-400"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="mt-auto pt-5 border-t border-neutral-100 dark:border-neutral-800">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-neutral-600 mb-3">
                Find me at
              </p>
              <div className="flex gap-2.5">
                {[
                  {
                    href: "https://www.linkedin.com/in/mengyao-li-software/",
                    icon: Linkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://github.com/MiaMia-Li/",
                    icon: Github,
                    label: "GitHub",
                  },
                  {
                    href: "mailto:sept.miamia@gmail.com",
                    icon: Mail,
                    label: "Email",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Col B — Photo */}
          <div className="relative overflow-hidden min-h-[380px] md:min-h-0">
            <Image
              src="/avatar.jpg"
              alt="Mia Li"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute bottom-3 left-3">
              <span className="text-[9px] text-white/70 font-mono bg-black/50 backdrop-blur-sm rounded px-2 py-0.5">
                mia.jpg
              </span>
            </div>
          </div>

          {/* Col C — Experience + Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-6 p-7"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-neutral-600 mb-4">
                Experience
              </p>
              <div className="space-y-4">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.company}>
                    <p className="font-black text-sm text-black dark:text-white">
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                      {exp.role}
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-neutral-500 mt-0.5">
                      {exp.period}
                    </p>
                    <p
                      className="text-[11px] text-gray-500 dark:text-neutral-400 mt-1.5 pl-2 border-l-2 leading-snug"
                      style={{ borderColor: green }}
                    >
                      {exp.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-100 dark:border-neutral-800 pt-5 mt-auto">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-neutral-600 mb-3">
                Tech
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SKILLS.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 px-2 py-0.5 rounded text-gray-600 dark:text-neutral-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 3 — Work label */}
        <div className="flex items-center gap-3 px-10 md:px-14 py-4 border-b border-neutral-200 dark:border-neutral-800">
          <span
            className="h-2 w-2 rounded-full flex-shrink-0"
            style={{ background: green }}
          />
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-black dark:text-white">
            Work
          </span>
        </div>

        {/* Row 4 — Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-neutral-200 dark:border-neutral-800">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className={`group flex flex-col gap-2 p-7 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors
                ${i < 3 ? "border-r border-neutral-200 dark:border-neutral-800" : ""}
                ${i < 2 ? "sm:border-b border-neutral-200 dark:border-neutral-800 lg:border-b-0" : ""}
              `}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-gray-400 dark:text-neutral-500">
                  {p.tag}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-gray-200 dark:text-neutral-700 group-hover:text-gray-500 dark:group-hover:text-neutral-400 transition-colors" />
              </div>
              <p className="font-black text-base text-black dark:text-white leading-tight">
                {p.name}
              </p>
              <p className="text-xs font-semibold text-gray-500 dark:text-neutral-400">
                {p.metric}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-neutral-500 leading-relaxed">
                {p.desc}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Row 5 — Closing note */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_190px]">
          <div className="flex min-h-[132px] items-end p-8 md:p-10">
            <p className="max-w-2xl text-base leading-[1.25] text-black dark:text-white md:text-lg">
              Have an interesting, stupid or crazy idea you&apos;d like some
              help building?{" "}
              <a
                href="mailto:sept.miamia@gmail.com"
                className="underline underline-offset-2 decoration-green-600 decoration-2"
              >
                Let&apos;s talk.
              </a>
            </p>
          </div>
          <div className="flex items-end border-t border-neutral-200 p-8 text-xs font-medium text-neutral-400 dark:border-neutral-800 dark:text-neutral-500 md:border-l md:border-t-0 md:p-10">
            2026 © Mia Li
          </div>
        </div>
      </div>

      {/* ── Persistent floating Chat button ───────────────────── */}
      <motion.button
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.35 }}
        onClick={onOpenChat}
        className="fixed bottom-24 right-4 z-20 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white/95 px-3 py-3 pr-4 text-left shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur-md transition-colors hover:border-neutral-300 hover:bg-white dark:border-neutral-700 dark:bg-neutral-900/95 dark:hover:border-neutral-600 sm:bottom-6 sm:right-6"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-emerald-100 dark:ring-emerald-900/50">
          <Image
            src="/avatar.jpg"
            alt="Mia AI"
            fill
            className="object-cover"
            sizes="44px"
          />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-neutral-900" />
        </span>
        <span className="min-w-0">
          <span className="mb-0.5 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
            <Sparkles className="h-3 w-3" />
            Digital twin
          </span>
          <span className="block whitespace-nowrap text-sm font-black leading-tight text-black dark:text-white">
            Chat with Mia AI
          </span>
          <span className="block whitespace-nowrap text-[11px] text-neutral-500 dark:text-neutral-400">
            Ask about projects & fit
          </span>
        </span>
        <span className="ml-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
          <MessageCircle className="h-4 w-4" />
        </span>
      </motion.button>
    </div>
  );
}
