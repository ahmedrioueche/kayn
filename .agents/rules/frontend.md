---
description: Frontend implementation, design-system, accessibility, i18n, architecture, and performance rules.
activation: model_decision
---

# Frontend Rules

## Visual system
- Build the page as a coherent visual system, not a collection of isolated sections.
- Establish typography, spacing, radius, shadows, borders, and button styles once and reuse them.
- Keep responsive breakpoints deliberate.
- Use one consistent visual theme throughout the application.
- Do not use random colors.
- Do not use one-off visual styles when an existing design token can solve the problem.
- Do not add gradients, shadows, radii, or colors merely because they look attractive in isolation.
- New visual values should be added to the design system rather than scattered through components.

## Architecture
- Do not create pages or components above roughly 200 lines unless there is a strong reason.
- Split large files into focused components, hooks, utilities, data, or configuration.
- Do not create god components.
- Components should have one clear responsibility.
- Prefer reusable components over duplicated markup.
- Keep business/content data separate from presentation logic.
- Use typed data structures for repeated content.
- Use constants instead of magic numbers and repeated configuration values.
- Keep filenames and component names consistent with existing project conventions.

## No hardcoding
- Do not hardcode repeated content in JSX.
- Do not hardcode prices, vehicle specifications, navigation labels, contact URLs, locations, or testimonials in multiple places.
- Do not hardcode user-facing strings when i18n is available.
- Do not hardcode theme colors in components.
- Do not hardcode values that belong in configuration, environment variables, content data, or translation resources.
- Avoid magic numbers when a design token or named constant is appropriate.

## Internationalization
- Every user-facing string must use the project's i18n system.
- Translation keys should be organized by feature/page.
- Never concatenate translated fragments in a way that harms localization.
- Do not assume translated text has the same length as French.
- Layouts must tolerate longer strings.
- Use locale-aware formatting for dates, numbers, and currency.
- Use CSS logical properties where possible so RTL can be supported later.
- Do not put language-specific assumptions into component logic.

## Responsive design
- Design mobile-first.
- Prefer fluid layouts over fixed widths.
- Use max-width, min(), max(), clamp(), grid, and flexbox appropriately.
- Test at approximately 375px, 768px, and desktop widths.
- Never introduce horizontal overflow.
- Do not hide important content merely to solve a responsive problem.
- Prefer CSS media queries over JavaScript viewport detection.

## Animation
- Avoid excessive animation.
- Motion should communicate hierarchy or interaction.
- Never let animation block content or make the page feel slow.
- Use subtle entrance/reveal animations and hover transitions.
- Prefer transform and opacity.
- Respect prefers-reduced-motion.
- Avoid continuous or scroll-heavy effects unless they have clear value.
- Do not animate every element.

## Performance
- Keep client-side JavaScript to the minimum required.
- Prefer server-rendered components.
- Use client components only when interaction or browser APIs require them.
- Optimize images using the framework's image tooling.
- Avoid unnecessary re-renders and expensive render-time calculations.
- Avoid unnecessary global listeners.
- Prefer CSS over JavaScript for layout and simple transitions.
- Avoid dependencies that solve problems already handled by the platform or existing stack.
- Keep bundles lean.

## Accessibility
- Use semantic HTML.
- Maintain a logical heading hierarchy.
- Provide visible focus states.
- Make all interactive elements keyboard accessible.
- Use meaningful alt text for informative images.
- Use empty alt text for decorative images.
- Do not communicate information with color alone.
- Maintain sufficient contrast.
- Provide accessible names for buttons and links.
- Ensure menus and dialogs manage focus appropriately.

## Tailwind
- Use Tailwind CSS v4.
- Follow v4 CSS-first configuration conventions.
- Prefer project theme tokens over arbitrary values.
- Do not scatter arbitrary Tailwind color values through the application.
- Keep utility classes readable and reusable.
- Extract repeated complex patterns into components rather than giant class strings.

## Code quality
- Use TypeScript instead of any whenever possible.
- Remove dead code and unused imports.
- Avoid duplicated logic.
- Avoid abstractions with no meaningful reuse case.
- Keep utilities small and focused.
- Preserve strict type checking.
