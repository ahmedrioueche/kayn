# Implementation Plan — KAYN

## Architecture
Single-page Next.js app with typed content, reusable components, i18n, Tailwind v4 theme tokens, and selective Framer Motion.

Suggested structure:

src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    navbar.tsx
    hero.tsx
    trust-strip.tsx
    vehicle-card.tsx
    featured-vehicles.tsx
    vehicle-categories.tsx
    how-it-works.tsx
    locations.tsx
    why-kayn.tsx
    testimonials.tsx
    final-cta.tsx
    footer.tsx
    ui/
  data/
    site.ts
  i18n/
    ...

Keep pages/components under roughly 200 lines. Split large sections.

## Data
Keep vehicles, categories, locations, benefits, navigation, testimonials, and contact configuration in typed data/config.

## i18n
All visible strings come from translations. French first, architecture ready for Arabic.

## Styling
Tailwind CSS v4.
Centralized theme tokens.
No arbitrary colors or one-off styling.

## Rendering
Prefer server components. Client components only for actual browser interactivity.

## Contact
WhatsApp/contact URL must be configurable in one place.

## Images
Use optimized framework image tooling and consistent image treatment.

## Validation
Run lint, typecheck, and build. Review 375px, 768px, and desktop widths plus keyboard/reduced-motion behavior.
