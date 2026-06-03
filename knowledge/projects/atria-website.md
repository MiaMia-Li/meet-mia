# Atria Marketing Website

Rebuilt and maintained the Atria marketing website from 2025 to 2026, delivering a full infrastructure overhaul, SEO system, and design standardization.

**Company:** Atria AI  
**Period:** Apr 2025 – May 2026  
**Stack:** Next.js 16, Tailwind CSS v4, Ant Design v6, Framer CMS

## Key Outcomes

- **+30% CTR** and **+50% Core Web Vitals improvement** after rebuild
- **Lint warnings from N → 0** after code-standardization PR
- Full SEO system: canonical unification, Organization Schema, H1/H2 structure, sitemap generation

## Major Work

### Code Standardization (Large-scale Refactor)
- Introduced ESLint flat config + Prettier + TypeScript strict mode across the entire site
- Migrated all Typography call sites to a custom `Text` component (20+ files)
- Eliminated inline styles across 20+ components; replaced with Tailwind design tokens
- Fixed all TypeScript `any` types with precise types; CI typecheck errors → 0

### Framer CMS Integration
- Implemented Next.js middleware reverse proxy to serve Framer CMS pages under the main domain — replaced redirect-based approach for seamless CMS integration
- Synced articles from Framer CMS; fixed sitemap coverage; built shared `ContentCard` component

### SEO System
- Unified canonical host to `www` across all pages, resolving duplicate canonical conflicts
- Added Organization Schema structured data
- Rewrote all meta descriptions; fixed duplicate H1 tags; completed sitemap for dynamic routes (`/ads/[platform]/[category]`)

### Infrastructure (Built from Scratch)
- Sentry integration: client / server / edge 3-layer setup, staging sourcemap upload, structured error logging
- Docker configuration: Dockerfile, staging/production yaml, Sentry env injection
- Staging environment: independent build env, yaml config, CI pipeline
- Managed Next.js 15 → 16 and Ant Design 5 → 6 upgrades

## Technologies

Next.js 16, Tailwind CSS v4, Ant Design v6, Framer CMS, Sentry, Docker, GitHub Actions, TypeScript
