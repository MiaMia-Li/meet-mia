# Atria — Frontend Engineer

**Period:** Mar 2025 – May 2026, Remote / Singapore

Atria is an AI-powered creative ad workflow platform. I was a core contributor to the AI image generation system, real-time collaboration features, platform infrastructure, and marketing site.

## AI Image Generation (Core Line)

- Owned the AI image generation surface end-to-end: refactored Image List + Image Detail pages per PRD, designed and wired three generation flows — Reuse Brief, Vary, and Text-Extract — against the imgen v1 API
- Designed a cross-page persistent AI gen progress toast using observer pattern + layout-level global store; migrated data source from polling raw stats to server-rendered tooltip copy, eliminating fragile frontend copy-stitching and simplifying i18n ownership
- Resolved a 4-cascade prefill-overwrite race condition in Clone Ad Modal by introducing an idempotent `prefillApplied` gate + read-only refs; prefill now runs exactly once per mount, surviving all subsequent re-renders
- Led zero-incident gradual migration of image-ads hooks from legacy endpoints to `/v1/projects` via adapter layer and staged PRs with strategic partial reverts; 5 review cycles, 0 production incidents
- Implemented self-healing polling for async image generation: exponential-backoff list poll + CDN-aware delayed thumb refresh + text-extract loop guard, eliminating stuck-image user complaints

## Real-time Collaboration & Assets

- Integrated Liveblocks for real-time threaded comments on the asset detail page (rooms, threads, presence, ThreadsTimeline)
- Built multi-source upload panels (Local + Google Drive with import precheck), batch selection + bulk ops, and share/guest mode

## Platform & Infrastructure

- Integrated Slack OAuth with a dedicated callback route, schedule reporting modal, channel search, and callback-page auto-close across all browser scenarios
- Unified 403/404/500 error pages into a single status-aware `ErrorPage` component
- Built cross-platform Chrome extension experiences across TikTok, Instagram, and Meta Ad Library, enabling one-click ad saving and improving platform code reuse by ~60%
- Designed and shipped a 0→1 internal Admin Dashboard in **one week** by leveraging Claude Code to auto-generate page scaffolding from API definitions, covering 120+ APIs and eliminating the ops team's reliance on manual workflows; established reusable patterns enabling teammates to ship new admin pages independently

## Marketing Website

- Rebuilt marketing site (Next.js 16, Tailwind v4, Ant Design v6): SEO canonical unification, Next.js middleware reverse proxy for Framer CMS pages, sitemap generation — **+30% CTR, +50% performance improvement**
- Led code-standardization PR: introduced ESLint flat config + Prettier + TypeScript strict mode; migrated all Typography call sites to a custom `Text` component; lint warnings from N → 0

## Technologies

TypeScript, React 19, Next.js 15/16 (App Router), Node.js, Python, AI image generation pipelines, async state orchestration, polling + WebSocket hybrid, observer pattern, Liveblocks, Ant Design v6, Tailwind CSS v4, Sentry, Amplitude, Docker, GitHub Actions
