"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileText, ExternalLink, Mail, Linkedin } from "lucide-react";

const TAG_CHIPS = [
  "AI Product Engineering",
  "Full-Stack SaaS",
  "Singapore / Remote",
];


const PROJECTS = [
  {
    subtitle: "AI Storytelling SaaS · Built 0 to 1",
    name: "SnapStory AI",
    description:
      "Solo-built AI storytelling SaaS with async generation, Stripe monetization, and creator workflows.",
    href: "https://www.snapstoryai.com",
    bg: "bg-violet-50 dark:bg-violet-950/40 hover:bg-violet-100/80 dark:hover:bg-violet-950/60",
    border: "border-violet-200/80 dark:border-violet-800/50",
    label: "text-violet-500 dark:text-violet-400",
  },
  {
    subtitle: "AI Creative Tools · Ops Systems",
    name: "Atria AI",
    description:
      "Built AI creative generation, moderation workflows, creator tooling, SEO growth, and internal ops systems.",
    href: "https://www.linkedin.com/in/mengyao-li-software/",
    bg: "bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-100/80 dark:hover:bg-sky-950/60",
    border: "border-sky-200/80 dark:border-sky-800/50",
    label: "text-sky-500 dark:text-sky-400",
  },
  {
    subtitle: "Enterprise Systems · Frontend Lead",
    name: "Kuaishou",
    description:
      "Led frontend delivery for enterprise workflow platforms and operational tooling at large scale.",
    href: "https://www.linkedin.com/in/mengyao-li-software/",
    bg: "bg-orange-50 dark:bg-orange-950/40 hover:bg-orange-100/80 dark:hover:bg-orange-950/60",
    border: "border-orange-200/80 dark:border-orange-800/50",
    label: "text-orange-500 dark:text-orange-400",
  },
  {
    subtitle: "Merchant Growth · ¥6.6M Impact",
    name: "Meituan",
    description:
      "Built merchant self-service workflows, platform redesigns, and performance improvements for scale.",
    href: "https://www.linkedin.com/in/mengyao-li-software/",
    bg: "bg-yellow-50 dark:bg-yellow-950/40 hover:bg-yellow-100/80 dark:hover:bg-yellow-950/60",
    border: "border-yellow-200/80 dark:border-yellow-800/50",
    label: "text-yellow-600 dark:text-yellow-400",
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

        {/* ── Projects ── */}
        <motion.div {...fadeUp(0.2)} className="mb-10">
          <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 block mb-3">
            /projects
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {PROJECTS.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex min-h-[148px] flex-col justify-between p-4 rounded-xl border transition-all duration-200 ${project.bg} ${project.border}`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`text-[10px] font-mono leading-snug ${project.label}`}
                    >
                      {project.subtitle}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 flex-shrink-0 ml-2 mt-0.5 transition-colors" />
                  </div>
                  <span className="block text-sm font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    {project.name}
                  </span>
                  <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Chat ── */}
        <motion.div {...fadeUp(0.28)} className="mb-8">
          <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 block mb-2">
            /chat
          </span>
          <button
            onClick={onStartChat}
            className="group w-full flex items-center justify-between px-4 py-3.5 border border-neutral-200 dark:border-neutral-700 rounded-xl bg-neutral-50/60 dark:bg-neutral-900/60 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 active:scale-[0.99] transition-all duration-200"
          >
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Ask Mia AI about projects, impact, and fit
            </span>
            <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all duration-200" />
          </button>
        </motion.div>

        {/* ── Links ── */}
        <motion.div {...fadeUp(0.34)} className="mb-8">
          <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 block mb-2">
            /links
          </span>
          <div className="flex gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
            </a>
            <a
              href="mailto:sept.miamia@gmail.com"
              className="flex items-center gap-1.5 px-4 py-2 text-xs border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/mengyao-li-software/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
