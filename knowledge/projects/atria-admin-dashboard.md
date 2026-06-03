# Atria Admin Dashboard

A 0→1 internal operations platform built in **one week** at Atria, serving the ops, customer service, and engineering teams.

**Company:** Atria AI  
**Period:** Jul 2025 – Apr 2026  
**Stack:** Next.js 16, App Router, Ant Design v6, Tailwind CSS

## What It Does

A config-driven admin backend where a unified `AdminTool` component renders API forms, enabling the ops team to manage the full ad template library workflow without direct database access.

## Key Achievements

- Built from scratch in **one week** — project init to Staging + Production dual-environment deployment
- Covered **120+ APIs**, eliminating the ops team's reliance on manual workflows
- Established reusable patterns enabling teammates to ship new admin pages independently
- Used Claude Code to auto-generate page scaffolding from API definitions

## Ad Template Library Workflow (Core Feature)

The most complex module — a full ad template library operations workspace:

- **Multi-dimension filtering** with persistent state across sessions
- **Batch operations**: approve, delete, retry by selection
- **Auto Tags editor drawer** — edit auto-generated tags per template
- **Industry stats dashboard** — analytics over the template library
- **Degraded asset visualization** — identify and filter low-quality assets with badges and tooltips
- **Score-desc default sort** + state-machine tooltip for audit flow

## Other Notable Work

- Auth security: 401/Access-denied auto-redirect to login + `returnUrl` preserves original route after login
- "Sync Templates From Search" admin tool — operators can sync templates directly from search results
- BRS retry endpoint parameter fix — precise diagnosis of redundant params causing validation errors

## Technologies

Next.js 16, App Router, Ant Design v6, Tailwind CSS, config-driven architecture, TypeScript
