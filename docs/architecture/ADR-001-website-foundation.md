# ADR-001: Website foundation

## Status

Accepted for the website foundation and Home vertical slice.

## Context

The approved BRD defines a content-led B2B corporate website with mobile, accessibility, performance, governance, and search requirements. The first implementation increment needs a reviewable Home page without introducing forms, operational systems, hosting commitments, or a CMS.

Astro package metadata was checked on 19 August 2026. Astro 7.2.3 is the stable release and requires Node.js 22.12.0 or newer. Node.js 24 LTS is the recommended project runtime and the foundation was created with Node.js 24.16.0.

## Decision

Build the site with Astro 7.2.3 and TypeScript 6.0.3 using static output. TypeScript 6.0.3 is the current release within the peer range declared by the Astro checker. Keep content in typed Git-managed files and use Astro components plus plain CSS. Ship no client framework and only the small enhancement needed to close the native mobile menu after navigation.

## Decision drivers

- Content-first corporate site with few interactive requirements
- Fast static output and minimal browser JavaScript
- Strong HTML semantics and straightforward progressive enhancement
- Hosting portability
- Reviewable, reversible content changes in Git
- A small dependency and maintenance surface

## Selected stack

- Astro 7.2.3
- TypeScript 6.0.3 in strict mode
- Node.js 24 LTS recommended; Node.js 22.12.0 or newer supported by Astro
- npm with a committed lockfile
- Static HTML, CSS, and minimal JavaScript

## Static-first rendering decision

Pages are prerendered at build time. Server rendering, API routes, a custom backend, and database access are not part of this foundation.

## Git-managed content decision

Home content lives in typed source data separate from layout components. Codex-assisted review and Git history provide the initial content workflow. File-based collections, a CMS, or a hybrid approach may be considered later without changing the launch business model.

## Styling approach

Use global CSS custom properties for temporary neutral tokens and component-level class rules for layout and presentation. Use system fonts, no UI library, no animation library, and no external media or fonts. The temporary visual system is replaceable and is not an approved corporate identity.

## Accessibility approach

Start with semantic landmarks, a skip link, native interactive elements, keyboard-visible focus, a logical heading hierarchy, sufficient temporary contrast, responsive reflow, and reduced-motion handling. WCAG 2.2 Level AA remains the target and requires ongoing manual and automated review.

## SEO approach

Provide title, description, Open Graph text metadata, semantic content, and local-development noindex behavior. Emit a canonical URL only after an approved site origin is configured. Defer sitemap generation until an approved production origin exists.

## Form and integration boundary

This increment contains no forms, submission storage, email delivery, CRM, support ticketing, applicant tracking, analytics provider, or ExitPass integration. Calls to action lead to clearly marked Home-page intent sections.

## Hosting portability

The build produces static files in `dist/` and contains no provider adapter or hosting configuration.

## Alternatives considered

- A client-side application framework was rejected because the Home slice does not justify hydration cost or complexity.
- A general-purpose static-site generator was viable, but Astro provides a stronger component model while preserving static output.
- A CMS was deferred because Codex and Git-managed content meets the current approved workflow.
- A custom backend was rejected because no approved launch requirement needs one.

## Consequences

The initial site is lightweight, portable, and easy to review. Content changes require repository review, and advanced editorial workflows are unavailable. Interactive workflows will need separate decisions when their requirements and destinations are approved.

## Deferred decisions

- Production domain and canonical origin
- Hosting and deployment provider
- Approved brand assets and final design tokens
- Form destinations and processing
- Analytics and consent tooling
- Sitemap generation
- CMS or other editorial tooling
- Dedicated pages beyond the Home vertical slice
