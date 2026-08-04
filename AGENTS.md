# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router lives in `app/`; each route (for example `app/team/page.tsx`) owns its layout and uses server components by default.
- Shared UI is split between composable sections in `components/` and the shadcn-derived primitives in `components/ui/`; utilities and hooks belong in `lib/` and `hooks/` respectively.
- Static assets stay in `public/`, while Supabase settings and deployment metadata live under `supabase/`.
- End-to-end tests reside in `tests/`; keep fixtures alongside the spec that uses them to mirror the page structure.

## Build, Test, and Development Commands
- `npm run dev` starts the hot-reloading Next.js server at http://localhost:3000.
- `npm run build` produces the optimized production bundle; run it before shipping changes.
- `npm run start` serves the last production build locally for smoke checks.
- `npm run lint` runs the Next.js/TypeScript ESLint ruleset.
- `npx playwright test` executes the Playwright suite; add `--headed` or `--ui` while debugging.

## Coding Style & Naming Conventions
- Write TypeScript with React functional components; client interactivity requires the `"use client"` directive at the top of the file.
- Follow Tailwind CSS utility composition for styling and keep class lists alphabetized when practical to ease diffs.
- File names mirror their role: routes use kebab-case folders (`app/geloeste-faelle/page.tsx`), shared components are lowercase with hyphens, and exported component identifiers remain PascalCase.
- Stick with two-space indentation and rely on ESLint (plus your editor formatting) to maintain import order and JSX spacing.

## Testing Guidelines
- Playwright specs live in `tests/*.spec.ts`; scope each `test.describe` block to a page route and name tests in imperative form (e.g. `"renders hero copy"`).
- Tests assume a dev server on port 3000; when running headless in CI, keep selectors resilient by preferring `data-testid` attributes over visual text where possible.
- Generate a trace for flaky tests with `npx playwright test --trace on-first-retry` and attach failures when requesting review.

## Commit & Pull Request Guidelines
- Use concise, sentence-case, imperative commit subjects (`Add`, `Fix`, `Refine`) aligned with the existing history.
- Each PR should summarize the intent, list functional/regression test results, and link related issues; include screenshots or recordings for UI work and note any Supabase config changes.
