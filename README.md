# Meet Mia

AI-powered portfolio site for Mengyao Li — a senior full-stack engineer based in Singapore. Features a magazine-style homepage and a conversational AI digital twin powered by OpenAI.

**Live site:** https://meet-mia-ashy.vercel.app

## Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: Tailwind CSS, Framer Motion, shadcn/ui
- **AI**: OpenAI API (GPT-4o) via `/api/chat`
- **Deployment**: Vercel

## Features

- Magazine-grid homepage with experience, projects, and skills
- Slide-over chat panel — ask Mia AI about projects, tech stack, or availability
- Dark / light mode via `next-themes`
- Fully responsive

## Getting Started

```bash
npm install
cp .env.example .env.local   # add OPENAI_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  page.tsx          # Homepage (HeroSection + ChatPanel)
  layout.tsx        # Root layout with ThemeProvider
  api/chat/         # OpenAI streaming route
components/
  HeroSection.tsx   # Magazine-style hero
  ChatPanel.tsx     # Slide-over chat UI
  ChatMessage.tsx   # Message renderer with ProfileCard support
  BottomDock.tsx    # Floating chat toggle
providers/
  theme-provider.tsx
```

## Environment Variables

| Variable | Description |
|---|---|
| `OPENAI_API_KEY` | Required — OpenAI API key for the chat route |
