# Atria Chrome Extension

A cross-platform Chrome extension that injects "Save to Atria" buttons into TikTok, Instagram, and Facebook Ad Library, enabling marketers to collect competitor ad assets with one click.

**Company:** Atria AI  
**Period:** Mar 2025 – Jan 2026 (10 months)  
**Stack:** Plasmo + React + TypeScript + Ant Design

## What It Does

Injects React components into third-party ad platforms so users can save ads directly to Atria's creative library without leaving the platform.

**Platforms covered:**
- TikTok Organic feed, Ads Manager, Ads Creative, Ad Library
- Instagram feed and detail pages
- Facebook / Meta Ad Library

## Key Technical Challenges

- **DOM injection engineering** — dynamically injected React components into third-party websites; required precise DOM matching, route change handling, z-index conflicts, and event propagation fixes
- **TikTok video hijacking** — Android browser hijacks the `<video>` tag; solved with platform-specific event handling and stopPropagation
- **Route-aware injection** — fixed path-match regex bugs causing scripts not to inject on specific URL patterns
- **Production bug fix (P0)** — users reported TikTok Organic button disappearing; located TikTok DOM structure change, fixed mounting point and route matching logic (PR #33)
- **Component abstraction** — extracted shared `SaveToAtriaCommon` component from Instagram Detail/Feed pages, reducing code by ~60% and enabling fast extension to new platforms
- **Guest mode support** — adjusted API request params to support unauthenticated users

## Key Achievements

- Covered 5 platform surfaces across 3 ad networks independently
- Code reuse improved by ~60% after component refactor
- Fixed P0 production bug within same day of user report
- Maintained and iterated the extension for 10 months as sole owner

## Technologies

Plasmo, React, TypeScript, Ant Design, Chrome Extension APIs, DOM injection, cross-platform compatibility
