# AI Vibe — Marketing Intelligence Dashboard

## Live Demo

https://ai-vibe-dashboard.vercel.app/dashboard

## Overview

A modern, responsive marketing intelligence dashboard with an AI-powered prompt playground for campaign analysis, filtering and real-time insights.

## Features

- Campaign performance dashboard (CTR, conversions, impressions)
- Real-time filtering: status, sort by CTR / conversions, search
- AI Prompt Playground with keyword-based intent parsing
- Robust state management using Zustand
- Interactive data visualisation using Recharts
- Responsive layout for mobile & desktop
- Optimised for SEO, performance and accessibility
- Supports prefers-reduced-motion
- Abort + retry handling for scalable API integration
- Graceful loading and empty states

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Zustand
- Recharts

## Architecture

- Modular, scalable component structure
- Global campaign store with selectors
- Optimised rendering using memoisation
- AbortController pattern for safe unmounting
- Fault-tolerant data layer with retry & fallback

## Quality Bar Compliance

Lighthouse (mobile):
Performance: 92
Accessibility: 96
Best Practices: 100
SEO: 100

## Core Web Vitals:

LCP ≈ 2.0s

FCP ≈ 0.8s

CLS = 0.001

## Setup

```bash
git clone <repo>
cd ai-vibe-dashboard
npm install
npm run dev
```
