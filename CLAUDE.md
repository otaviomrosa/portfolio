# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (runs type-check implicitly)
npm run start    # Serve production build
npm run lint     # ESLint
```

## Architecture

**Framework**: Next.js 14 App Router with TypeScript and Tailwind CSS.

**Two public routes:**
- `/` — Profile/resume page (`app/page.tsx` → `HeroSection` + `ProfileContent`)
- `/log` — Study log listing (`app/log/page.tsx`)
- `/log/[slug]` — Individual post (`app/log/[slug]/page.tsx`)

**Design system** lives entirely in `app/globals.css` as CSS custom properties (`--bg`, `--text`, `--accent`, `--border`, etc.). Tailwind is used for layout; glass/card styles use the `.card` and `.card-hover` utility classes defined there.

**Particle animation** (`components/ParticleCanvas.tsx`): Canvas-based rippling-dot effect. Uses layered sine waves (3 frequencies, per-particle phase offsets) to create a moving fabric/lake-surface feel. Mouse proximity boosts nearby dot brightness. Used as full-viewport background in `HeroSection` and as a smaller header in `LogHero`.

**Navigation** (`components/NavBar.tsx`): Fixed, transparent at top, frosted-glass on scroll. Pill-toggle between Profile and Log.

**Posts system** (`lib/posts.ts`): Reads `.mdx`/`.md` files from `content/posts/` at build time using `gray-matter`. `getAllPosts()` returns sorted metadata; `getPost(slug)` returns full content. MDX is rendered server-side via `next-mdx-remote/rsc`.

## Adding / Removing Posts

**Add a post:** Create `content/posts/my-slug.mdx`:

```mdx
---
title: "Post Title"
date: "2026-06-15"
excerpt: "One or two sentences shown in the card preview."
image: "/images/posts/my-image.jpg"   # optional
tags: ["Tag1", "Tag2"]                # optional
---

Full MDX content here...
```

**Delete a post:** Remove the `.mdx` file. The post disappears from the log on the next build/restart.

**Post images:** Place in `public/images/posts/`. If `image` is omitted, a gradient placeholder renders automatically.

## Key Design Decisions

- All page backgrounds are `var(--bg)` (`#080810`). Never use pure `#000`.
- Profile data (experience, skills, education) is hardcoded in `components/ProfileContent.tsx` — edit the `experiences`, `skillGroups`, and `education` arrays there.
- `ParticleCanvas` must remain a `"use client"` component; the particle loop uses `requestAnimationFrame` and `canvas`.
- The post detail page at `app/log/[slug]/page.tsx` uses `generateStaticParams` to pre-render all posts at build time.
- Font variables (`--font-space`, `--font-mono`) are injected by `app/layout.tsx` via `next/font/google`.
