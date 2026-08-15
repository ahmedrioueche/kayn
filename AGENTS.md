# KAYN — Agent Instructions

You are building KAYN, a premium Algerian car-rental landing page.

Before implementation, read:
- `specs/spec.md`
- `specs/design-system.md`
- `specs/content.md`
- `.agents/rules/project.md`
- `.agents/rules/frontend.md`
- `specs/tasks.md`

## Core principles
- Build a production-quality frontend while keeping the scope achievable in one focused day.
- Treat the visual system as a single coherent product.
- Prioritize mobile UX, typography, spacing, photography, accessibility, and performance.
- Use Tailwind CSS v4 conventions.
- Use Framer Motion selectively and only where it improves hierarchy or interaction.
- Keep the majority of the application server-rendered.
- Use i18n for every user-facing string.
- Never hardcode repeated content or configuration inside UI components.
- Never introduce arbitrary colors outside the established theme.
- Keep components/pages under roughly 200 lines; split large files.
- Prefer reusable, focused components.
- Do not add backend functionality that is outside the specification.

## Content rules
- French is the initial user-facing locale.
- Structure translations so Arabic can be added later.
- Pricing, fleet data, testimonials, contact details, and claims are demo content.
- Do not present fictional information as verified real-world business facts.

## Definition of done
- Responsive at mobile, tablet, and desktop.
- No horizontal overflow.
- Navigation and CTA behavior work.
- Keyboard focus is visible.
- Images have appropriate alt text.
- Reduced-motion support is present.
- Lint/typecheck/build pass.
- No component/page has grown into an unmaintainable monolith.
