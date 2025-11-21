AI Vibe — Marketing Intelligence Dashboard
Live Demo

https://ai-vibe-dashboard.vercel.app/

## Overview

AI Vibe is a modern, responsive Marketing Intelligence Dashboard built with performance, accessibility, and scalability in mind. It provides an at-a-glance view of campaign performance along with an AI-inspired Prompt Playground for structured input analysis.

The application is optimized to meet strong quality benchmarks for performance, accessibility, and SEO.

## Features

Campaign performance dashboard showing CTR, impressions, clicks, and conversions

Real-time filtering: status, sort (CTR / conversions), and search

AI Prompt Playground with keyword-based intent parsing

Global state management using Zustand

Interactive performance charts using Recharts

Fully responsive layout (mobile and desktop)

SEO, best practices, and performance optimized (Lighthouse aligned)

## Quality Bar Compliance

Lighthouse (mobile):

Performance: 95

Accessibility: 96

Best Practices: 100

SEO: 100

## Core Web Vitals:

LCP ≈ 2.3s

FCP ≈ 0.8s

CLS = 0

## Accessibility:

Semantic HTML structure

Keyboard-friendly navigation

Visible focus indicators

Proper form labeling

AA-level color contrast

Supports prefers-reduced-motion

## SEO:

Semantic headings

Meta, OG, and Twitter tags

JSON-LD (SoftwareApplication schema)

Dynamic robots.txt and sitemap.xml

## Reliability:

Graceful empty states

Skeleton/loading support

Designed for scalable API integration with abort + retry patterns

## Tech Stack

Next.js (App Router)

TypeScript

Tailwind CSS

Zustand

Recharts

## Architecture

Modular, component-based structure

Centralized state using Zustand

Memoized data calculations (useMemo)

App Router based routing

SEO powered by Metadata API and structured data

Responsive layouts with Tailwind

## Setup Instructions

git clone https://github.com/vini1237777/ai-vibe-dashboard.git
cd ai-vibe-dashboard
npm install
npm run dev

Open in browser:

http://localhost:3000

## Routes

/dashboard – Marketing dashboard

/playground – AI Prompt Playground
