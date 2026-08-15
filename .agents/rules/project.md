---
description: Always-on project rules for KAYN.
activation: always_on
---

# KAYN Project Rules

## Product
KAYN is a fictional premium Algerian car-rental brand.

## Market
Algeria, initially presented around Alger, Oran, Constantine, and Blida.

## Primary conversion
The primary conversion is a reservation/contact request, preferably through WhatsApp.

## Visual identity
- Modern automotive/editorial aesthetic.
- Dark neutral base with one controlled accent.
- High-quality vehicle photography.
- Clean, confident, premium typography.
- Practical information presented with strong visual hierarchy.

## Theme
Use one centralized theme only.

Approved palette:
- Background: #0B0D0F
- Surface: #14171A
- Elevated surface: #1C2024
- Foreground: #F5F3EF
- Muted: #A8ADB3
- Border: #2A2F34
- Accent: #C8A45D
- Accent foreground: #111111

Do not invent additional colors without updating the theme first.

## Content architecture
- Store navigation, vehicles, categories, locations, testimonials, benefits, and contact configuration in typed data/config or translation resources.
- Do not duplicate content across components.
- Do not put reusable business content directly into JSX.

## Internationalization
- All user-facing text must go through i18n.
- French is the initial locale.
- Architecture must support adding Arabic later.
- Do not hardcode language-specific UI strings into component logic.
- Use locale-aware number/date formatting where relevant.
- Use logical CSS properties where RTL support may matter.

## Scope
Do not add:
- authentication
- customer accounts
- payment
- real-time vehicle availability
- database
- admin dashboard
- fleet management
- booking backend
- complex API integrations

## Engineering
- Prefer server components.
- Use client components only for interactivity/browser APIs.
- Keep client-side JavaScript minimal.
- Prefer composition and small components.
- Avoid global mutable state unless required.
