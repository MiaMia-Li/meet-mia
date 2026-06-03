# SnapStory AI

**Live:** https://www.snapstoryai.com/  
**GitHub:** https://github.com/MiaMia-Li/  
**Type:** Solo full-stack SaaS (Individual Project)

An AI-powered visual storytelling SaaS where users enter a keyword or upload an image and the app automatically generates multi-panel comic-strip stories or short videos across 12+ art styles. Built end-to-end as a solo project — product design, full-stack development, AI integration, payment, and deployment.

Acquired **2,000+ early users within 3 months**.

## Core Features

- **AI Image Story Generation** — User inputs a keyword or image; GPT-4 streams a multi-frame story script; Replicate (Stable Diffusion 3) generates images for each selected art style in parallel; supports batch comparison across styles; configurable aspect ratio
- **AI Short Video Generation** — Generates short videos from story scripts; async queue with frontend polling for task status
- **12+ Art Styles** — Anime, Cyberpunk, Fantasy, Watercolor, Oil Painting, Pixel Art, Comic, 3D Render, Minimalist, Cinematic, Digital Art, Realistic
- **Prompt Library** — Community sharing, forking, filtering by style/category/language; tracks likes, views, forkCount
- **Credit-Based Monetization** — 5 free credits on signup; 1 credit/style for image stories, 5 credits for video; Stripe checkout and subscription
- **Story Community** — Public/private toggle, likes, browsing, personal gallery
- **Bilingual (EN/ZH)** — Full i18n via next-intl

## Tech Stack

Next.js 14 (App Router), TypeScript, PostgreSQL (Vercel Postgres), Prisma, OpenAI GPT-4, Replicate (Stable Diffusion 3), Stripe, NextAuth v5 (GitHub/Google/Email magic link), Vercel Blob, Vercel AI SDK, shadcn/ui, Tailwind CSS, Zustand, Framer Motion, next-intl, Vercel

## AI Generation Pipeline

```
User input (keyword / image)
  → OpenAI GPT-4 streaming → story script + per-frame captions
  → Replicate Promise.all → parallel predictions per art style
  → Polling loop → image URLs written to DB
  → Story record saved + credits deducted
```

## Key Technical Achievements

- **Dual-model AI orchestration** — OpenAI handles narrative, Replicate handles visuals; parallel `Promise.all` keeps total generation time equal to a single style's latency
- **Streaming + parallel dual optimization** — Vercel AI SDK `experimental_useObject` streams story frames in real time before images are ready
- **Async video queue** — `GenerationQueue` table + Replicate webhook callback; frontend polls `/api/queue/status`
- **Credit consistency** — credits only deducted after successful generation; failure leaves balance intact
- **End-to-end TypeScript** — shared Zod schemas between frontend and API routes eliminate interface drift
- **Serverless-first** — all compute on Vercel, no infra to manage
