# Project: Acme Commerce React Application

# Last updated: 2026-05 | Owner: Platform Engineering

## Tech stack & constraints

- React 19 + TypeScript strict mode. No `any` types permitted.
- State: Zustand for global, React Query v5 for server state.
- Styling: Tailwind CSS v4. Zero custom CSS files except design-tokens.css.
- Testing: Vitest + React Testing Library. Minimum 80% branch coverage.
- Node >= 22. Package manager: pnpm only.

## Code conventions

- Components: function declarations, not arrow functions at module scope.
- File names: PascalCase for components, camelCase for hooks/utils.
- Every new component must export a Storybook story.
- Prefer composition over prop-drilling beyond 2 levels.

## Accessibility (non-negotiable)

- WCAG 2.2 AA compliance required on every component.
- Interactive elements: always `aria-label` or visible text label.
- Color contrast: minimum 4.5:1 for text, 3:1 for UI components.
- Keyboard navigation must be fully functional before a task is "done."
- Run `/a11y` skill before any component is considered complete.

## Security rules

- Never log PII to console or error tracking.
- API keys must come from environment variables only.
- Input sanitization required for all user-supplied data.
- Run `/security-review` before marking any PR ready.

## What "done" means

A task is not complete unless:

1. TypeScript compiles with zero errors.
2. All existing tests pass.
3. New functionality has test coverage.
4. Accessibility audit passes.
5. No new ESLint warnings.
6. The bar-raise agent has reviewed the approach.

## Agents and skills available

- Use the `bar-raiser` agent for architectural decisions and feature planning.
- Use the `code-reviewer` agent after significant changes.
- Use the `a11y-auditor` agent before any PR on UI components.
- Skills: /react-patterns, /a11y, /api-design - invoke contextually.
