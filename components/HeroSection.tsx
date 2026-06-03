"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ExternalLink, Download } from "lucide-react";

const TAG_CHIPS = [
  "AI Product Engineering",
  "Full-Stack SaaS",
  "Singapore / Remote",
];


const PROJECTS = [
  {
    tag: "Solo · SaaS",
    name: "SnapStory AI",
    metric: "2,000+ early users · 3 months",
    description: "Solo-built AI storytelling SaaS. Users enter a keyword or image and get multi-panel comics across 12+ art styles. Full stack: Next.js, OpenAI, Replicate, Stripe credits, async generation queues, community prompt library, EN/ZH i18n.",
    href: "https://www.snapstoryai.com",
    live: true,
  },
  {
    tag: "Solo · AI Tool",
    name: "PageGenAI",
    metric: "10× faster · hours → minutes",
    description: "Text / screenshot / template-to-page AI pipeline. Paste a description or screenshot and get a fully built web page. Solo full-stack build: Next.js, OpenAI, layout reasoning pipeline.",
    href: "https://github.com/MiaMia-Li/",
    live: false,
  },
  {
    tag: "Atria · Internal Tool",
    name: "Admin Dashboard",
    metric: "0→1 in one week · 120+ APIs",
    description: "Config-driven internal ops platform built from scratch. Covers ad template library management with multi-filter state, batch approve/delete/retry, auto-tags drawer, industry stats dashboard, and degraded-asset visualization.",
    href: "https://www.linkedin.com/in/mengyao-li-software/",
    live: false,
  },
  {
    tag: "Atria · Chrome Extension",
    name: "Ad Saver Extension",
    metric: "5 platforms · ~60% code reuse",
    description: "Cross-platform Chrome extension injecting save buttons into TikTok Organic, TikTok Ads, TikTok Library, Instagram, and Meta Ad Library. Solved DOM injection, z-index conflicts, route-aware mounting, and P0 production bugs.",
    href: "https://www.linkedin.com/in/mengyao-li-software/",
    live: false,
  },
  {
    tag: "Kuaishou · No-code Platform",
    name: "Koda Flow",
    metric: "50% pipeline efficiency gain",
    description: "Enterprise no-code workflow platform. Drag-and-drop canvas via X6, Redux global state, dynamic form rendering from connector config, modular MVC architecture. Led 6-person team.",
    href: "https://www.linkedin.com/in/mengyao-li-software/",
    live: false,
  },
  {
    tag: "Kuaishou · H5 Game",
    name: "12th Anniversary Game",
    metric: "26,000+ visits · 85% participation",
    description: "Company-wide H5 mini game with psychological test, shareable results page, and lottery system. Delivered in under one month. Solved mobile animation compatibility across Android/iOS — highest engagement in company history.",
    href: "https://www.linkedin.com/in/mengyao-li-software/",
    live: false,
  },
];

const EXPERIENCE = [
  {
    company: "Atria AI",
    role: "Frontend Engineer",
    period: "Mar 2025 – May 2026",
    metric: "651 commits · AI image generation core",
  },
  {
    company: "Kuaishou",
    role: "Frontend Developer",
    period: "Sep 2020 – May 2024",
    metric: "Led 4-person team · 50% efficiency gain",
  },
  {
    company: "Meituan",
    role: "Frontend Developer",
    period: "Apr 2019 – Sep 2020",
    metric: "¥6.6M revenue · 300,000+ merchants",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] as const },
});

interface HeroSectionProps {
  onStartChat: () => void;
}

export function HeroSection({ onStartChat }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="line-grid absolute inset-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-16 pb-32">
        {/* ── Header: avatar + identity ── */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-5 mb-8">
          <Image
            src="/avatar.jpg"
            alt="Mia Li"
            width={72}
            height={72}
            className="w-[72px] h-[72px] rounded-full object-cover ring-2 ring-neutral-200 dark:ring-neutral-700 flex-shrink-0"
            priority
          />
          <div>
            <h1 className="font-black text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-neutral-50 leading-none">
              Mia Li
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1.5">
              Senior Full-Stack AI Engineer · Singapore
            </p>
          </div>
        </motion.div>
        <div className="border-b border-neutral-100 dark:border-neutral-800 mb-8" />

        {/* ── About ── */}
        <motion.div {...fadeUp(0.12)} className="mb-10">
          <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 block mb-2">
            /about
          </span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mb-3">
            Product-minded full-stack engineer with 7 years of experience
            building AI-powered workflows, creative tools, and scalable SaaS
            systems. I turn LLMs, image generation pipelines, and workflow
            automation into shipped products, from 0 to production.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mb-4">
            Open to AI product engineering, full-stack AI systems, generative
            AI, creative tools, and early-stage product teams. Based in
            Singapore and open to EP sponsorship or senior remote roles.
          </p>
          <div className="flex flex-wrap gap-2">
            {TAG_CHIPS.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs border border-neutral-200 dark:border-neutral-700 rounded-full text-neutral-500 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Chat (primary CTA) ── */}
        <motion.div {...fadeUp(0.2)} className="mb-10">
          <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 block mb-2">
            /chat
          </span>
          <button
            onClick={onStartChat}
            className="group w-full flex items-center justify-between px-5 py-4 border border-neutral-900 dark:border-neutral-100 rounded-xl bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-[0.99] transition-all duration-200"
          >
            <div className="text-left">
              <span className="block text-sm font-semibold text-white dark:text-neutral-900">
                Ask Mia AI
              </span>
              <span className="block text-xs text-neutral-400 dark:text-neutral-600 mt-0.5">
                Projects, experience, role fit, availability — just ask
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-neutral-400 dark:text-neutral-600 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
          </button>
        </motion.div>

        {/* ── Projects ── */}
        <motion.div {...fadeUp(0.26)} className="mb-10">
          <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 block mb-3">
            /projects
          </span>
          <div className="grid grid-cols-2 gap-2">
            {PROJECTS.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 hover:border-neutral-300 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                      {project.name}
                    </span>
                    {project.live && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                    {project.metric}
                  </p>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-300 mt-1 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <ExternalLink className="h-3 w-3 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 flex-shrink-0 ml-2 transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Experience ── */}
        <motion.div {...fadeUp(0.32)} className="mb-10">
          <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 block mb-3">
            /experience
          </span>
          <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.company}
                className="flex items-center justify-between px-4 py-3.5 bg-white/60 dark:bg-neutral-900/60"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                      {exp.company}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:inline">
                      · {exp.role}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">
                    {exp.metric}
                  </p>
                </div>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 hidden sm:inline flex-shrink-0 ml-3">
                  {exp.period}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Links ── */}
        <motion.div {...fadeUp(0.38)} className="mb-8">
          <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 block mb-2">
            /links
          </span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}
