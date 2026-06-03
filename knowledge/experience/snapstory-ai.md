# SnapStory AI / PageGenAI — Founder & Solo Developer

**Period:** May 2024 – Mar 2025, Singapore  
**Live:** https://www.snapstoryai.com/

Built and launched two independent AI products from scratch as a solo founder.

## SnapStory AI

An AI-powered 4-in-1 content creation platform — image/text-to-story and text/image-to-video pipelines, supporting **12+ artistic styles** with bilingual (EN/ZH) support.

- Acquired **2,000+ early users within 3 months** by designing scalable architecture and optimising AI model integration
- Designed and implemented a full AI generation pipeline: OpenAI GPT-4 streams story scripts → Replicate generates images across 12+ art styles in parallel via `Promise.all`, keeping total generation time equivalent to a single style's latency
- Built complete SaaS with Next.js 14 App Router, PostgreSQL, and Prisma; integrated Stripe subscription and credit system delivering a full register → create → pay business loop
- Implemented real-time streaming AI responses using Vercel AI SDK `experimental_useObject`, enabling users to watch story frames render progressively
- Delivered entire product solo — product design, frontend, backend, AI integration, payments, and Vercel deployment — covering OAuth (GitHub/Google), email magic-link auth, and EN/ZH i18n
- Architected async video generation queue with Replicate webhook callbacks and frontend polling

## PageGenAI

A text / screenshot / template-to-page AI pipeline reducing web page build time from hours to minutes (**10× speed improvement**).

- Owned full-stack design, development, and deployment end-to-end

## Technologies

Next.js 14, TypeScript, PostgreSQL, Prisma, OpenAI GPT-4, Replicate (Stable Diffusion 3), Stripe, NextAuth v5, Vercel Blob, Vercel AI SDK, shadcn/ui, TailwindCSS, Zustand, next-intl
