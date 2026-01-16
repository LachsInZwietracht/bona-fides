# CLAUDE.md

## 🕵️ Operation Bona Fides - Detective Agency Website

**A noir-themed detective agency website with modern functionality and classic aesthetics.**

This is a professional website for Bona Fides, a detective agency specializing in private investigations, corporate security, and forensic analysis. The site features a dark, cinematic design with detective noir elements and fully functional contact capabilities.

---

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run test` - Run Playwright end-to-end tests

## Git Workflow

**ALWAYS** use pull requests instead of pushing directly to main:

1. Create a new feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes and commit them
3. Push the branch to remote: `git push -u origin feature/your-feature-name`
4. Create a pull request using `gh pr create`
5. Wait for review and approval before merging

**NEVER** push directly to main branch. All changes must go through pull requests for code review and quality control.

## Framework and Library Recommendations

For this web application project, use the following technologies:

- Next.js - React framework with App Router
- Tailwind CSS - Utility-first styling framework
- shadcn/ui - Component library (using shadcn@latest CLI)
- Resend - Professional email delivery service for contact forms
- Supabase - Backend and authentication
- Zod - Input validation
- React Hook Form - Form handling
- React Query - Data fetching and caching
- polar.sh - Payment processing (see https://docs.polar.sh/integrate/sdk/adapters/nextjs for setup)
- Playwright - End-to-end testing

**ALWAYS** use TypeScript with strict type checking over JavaScript.
**NEVER** create projects from scratch - always use framework CLIs to scaffold projects.

## Architecture

This is a Next.js 15 application using the App Router with:

- Framework: Next.js 15 with React 19
- Styling: Tailwind CSS 4 with custom CSS variables
- UI Components: shadcn/ui components in "new-york" style with Radix primitives
- Testing: Playwright for end-to-end testing
- Fonts: Geist Sans and Geist Mono from Google Fonts
- Charts: Recharts for data visualization
- Theme: next-themes for dark/light mode support
- Notifications: Sonner for toast notifications
- Backend: Supabase integration configured
- Forms: React Hook Form with Zod validation
- Additional Libraries: Embla Carousel, Command Menu (cmdk), Date handling (date-fns)

### Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/ui/` - Complete shadcn/ui component library including accordion, alert-dialog, avatar, badge, breadcrumb, button, calendar, card, carousel, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toggle, tooltip, and more
- `hooks/` - Custom React hooks (e.g., `use-mobile.ts` for responsive design)
- `lib/utils.ts` - Utility functions including Tailwind class merging
- `supabase/` - Supabase configuration and setup
- `tests/` - Playwright test files
- `public/` - Static assets

### Page Status

#### Disabled/Unused Pages
- **Gelöste Fälle** (`/app/geloeste-faelle/page.tsx`): Page exists but is not linked in navigation. Decision made to not use this page for now.
- **Services** page: Navigation link has been removed. May be re-enabled in the future.

#### Removed Pages
- **Contact** page: Removed redundant `/app/contact/page.tsx`. All contact functionality consolidated to homepage contact form with `#contact` anchor. All contact links now redirect to `/#contact` to provide unified user experience.

### shadcn/ui Configuration

Components are configured with:
- Style: "new-york"
- Base color: neutral
- CSS variables enabled
- Icon library: lucide-react
- Path aliases: `@/components`, `@/lib/utils`, etc.

### Playwright Configuration
- Tests run against all major browsers (Chrome, Firefox, Safari)
- Base URL: http://localhost:3000
- Auto-starts dev server if not running, reuses existing server if available
- 2-minute timeout for server startup

## Environment Variables

When working with environment variables in Next.js:

- **Server-side only**: Use standard naming (e.g., `DATABASE_URL`, `API_SECRET`)
- **Client-side access**: **MUST** prefix with `NEXT_PUBLIC_` (e.g., `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SUPABASE_URL`)
- Environment variables without the `NEXT_PUBLIC_` prefix are **NOT** available in the browser
- **NEVER** expose sensitive data (API keys, secrets) with `NEXT_PUBLIC_` prefix
- Store environment variables in `.env.local` for local development
- Use `.env.example` to document required environment variables

### Required Environment Variables

The following environment variables are required for full functionality:

```
# Contact Form Email Service
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your-email@example.com
```

## Validation Strategy

**ALWAYS** work iteratively and validate your work after finishing each task by following these steps in order:

### Quick Validation Steps (run for each task)
1. **Linting**: `npm run lint` - Check for syntax and style issues
2. **Type checking**: `npm run typecheck` - Ensure TypeScript correctness    
3. **Specific tests**: Run only relevant Playwright tests for changed functionality. If you implemented new functionality, write tests for it and run them.

### Complete Validation (run only after all tasks are complete)
4. **Build**: `npm run build` - Full production build verification
5. **Complete test suite**: `npm run test` - All Playwright end-to-end tests

### Testing Guidelines
- **ALWAYS** write tests for new functionality - this is required for validation
- Write realistic e2e tests from a user perspective focusing on actual interactions
- **NEVER** write trivial tests that only assert component visibility
- Focus on meaningful user workflows and business logic
- If existing tests fail that are not part of the current task, **STOP** and ask for guidance
- Do NOT auto-fix unrelated test failures
- If tests fail without a clear reason, use playwright mcp to debug the test in a real browser

## Contact Form Implementation

The site features a fully functional contact form with professional email delivery:

### Features
- **Detective-themed UI**: Case file styled form with noir aesthetics
- **Real email delivery**: Uses Resend API for reliable email transmission
- **Professional templates**: Detective agency branded email templates
- **Form validation**: Client and server-side validation with user feedback
- **Error handling**: Graceful error states with retry capabilities

### Architecture
- **Frontend**: React form with shadcn/ui components (`/app/contact/page.tsx`)
- **API Route**: Next.js API handler at `/app/api/contact/route.ts`
- **Email Service**: Resend integration with custom HTML templates
- **Deployment**: Environment variables configured in Vercel

### Setup Requirements
1. Create Resend account at [resend.com](https://resend.com)
2. Generate API key and add to environment variables
3. Configure contact email in `CONTACT_EMAIL` environment variable
4. Deploy environment variables to Vercel for production use

# General
- Don't add any components that are not part of the shadcn library to components/ui
- If you add images from the internet, make sure that the domain is allowed in remotePatterns in next.config.ts