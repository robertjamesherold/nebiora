# REVIEW.md

## Severity mapping

- Hardcoded credential or API key: Critical
- Missing aria-label on interactive elements: Important (not Nit)
- Missing TypeScript return types on exported functions: Important
- CLAUDE.md convention violations: Important
- Unused imports, console.log: Nit

## Skip rules

- Skip: package-lock.json, pnpm-lock.yaml, *.snap, dist/**, build/**
- Skip: src/**/**generated**/** (auto-generated GraphQL types)
- Higher bar only: scripts/, docs/ (Critical only)

## Custom checks

- New API routes (/api/**) must have a corresponding integration test.
- Components in src/components/ui/ must export a Storybook story.
- Any use of `dangerouslySetInnerHTML` must include a sanitization comment.
- Environment variables must be validated in src/env.ts, not accessed raw.

## Nit cap

Report at most 5 nit comments per review. Mention the remaining count
in the summary.

## Context

- React 19 + TypeScript. Accessibility is WCAG 2.2 AA required.
- Treat re-render risks in src/features/checkout/ as Important, not Minor.
  This is a high-traffic critical path.
