# Build Workflow — KAYN

## Preparation
Read:
- `AGENTS.md`
- `.agents/rules/project.md`
- `.agents/rules/frontend.md`
- `specs/project-context.md`
- `specs/spec.md`
- `specs/design-system.md`
- `specs/content.md`
- `specs/tasks.md`

## Process
1. Inspect the existing repository before editing.
2. Preserve compatible existing tooling.
3. Confirm Next.js, TypeScript, Tailwind CSS v4, Framer Motion, and i18n setup.
4. Establish the theme/design tokens first.
5. Establish typed content/configuration.
6. Implement the page section by section.
7. Keep components focused and under roughly 200 lines.
8. Add responsive behavior as each section is built.
9. Add animation after the static experience is correct.
10. Run validation.
11. Perform a final visual/accessibility/performance pass.

## Validation
Run the repository's appropriate:
- lint
- typecheck
- build

Then inspect:
- mobile
- tablet
- desktop
- keyboard navigation
- reduced-motion behavior
- image loading
- CTA destinations
- horizontal overflow

## Final reporting
Report:
- implemented sections/features;
- validation commands and results;
- any remaining placeholders;
- any intentionally deferred scope.
