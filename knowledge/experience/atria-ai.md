# Atria — Frontend Engineer

**Period:** Mar 2025 – May 2026, Remote / Singapore  
**651 commits · 16 Linear tickets · 13 months**

Atria is an AI-powered creative ad workflow platform. I was a core contributor across 4 major areas: AI image generation system (main line), Chrome extension, internal admin dashboard, and marketing website.

## AI Image Generation (Core Line)

- Owned the AI image generation surface end-to-end: refactored Image List + Image Detail pages per PRD, designed and wired three generation flows — Reuse Brief, Vary, and Text-Extract — against the imgen v1 API
- Designed a cross-page persistent AI gen progress toast using observer pattern + layout-level global store; migrated data source from polling raw stats to server-rendered tooltip copy, eliminating fragile frontend copy-stitching
- Resolved a 4-cascade prefill-overwrite race condition in Clone Ad Modal by introducing an idempotent `prefillApplied` gate + read-only refs; prefill now runs exactly once per mount
- Led zero-incident gradual migration of image-ads hooks from legacy endpoints to `/v1/projects` via adapter layer and staged PRs with strategic partial reverts; 5 review cycles, 0 production incidents
- Implemented self-healing polling: exponential-backoff list poll + CDN-aware delayed thumb refresh + text-extract loop guard, eliminating stuck-image user complaints

## Real-time Collaboration & Assets

- Integrated Liveblocks for real-time threaded comments on the asset detail page (rooms, threads, presence, ThreadsTimeline)
- Built multi-source upload panels (Local + Google Drive with import precheck), batch selection + bulk ops, share/guest mode
- Deeply owned 8 core files: `AssetWrapper.tsx`, `AssetComments.tsx`, `VideoPlayer.tsx`, `AssetsInstance.tsx`, `Threads.tsx`, `AssetHeader.tsx`, `share/page.tsx`, `AssetCard.tsx` (22–34 commits each)

## Chrome Extension

- Built cross-platform Chrome extension across TikTok, Instagram, and Meta Ad Library — enabling one-click ad saving and improving platform code reuse by ~60%
- Fixed P0 production bug: TikTok Organic button disappearing after DOM structure change (PR #33)

## Admin Dashboard

- Built 0→1 internal admin tool from scratch in one week; covered 120+ APIs; eliminated ops team reliance on manual workflows

## Marketing Website

- Rebuilt marketing site (Next.js 16, Tailwind v4, Ant Design v6): SEO canonical unification, Framer CMS reverse proxy, sitemap generation — **+30% CTR, +50% performance**
- Led code-standardization PR: ESLint flat config + Prettier + TypeScript strict mode; lint warnings → 0

## Slack Integration

- Integrated Slack OAuth with dedicated callback route, schedule reporting modal, channel search, and callback-page auto-close across all browser scenarios

## Technologies

TypeScript, React 19, Next.js 15/16 (App Router), Node.js, AI image generation pipelines, async state orchestration, polling + WebSocket hybrid, observer pattern, Liveblocks, Ant Design v6, Tailwind CSS v4, Sentry, Amplitude, Plasmo (Chrome Extension), Docker, GitHub Actions
