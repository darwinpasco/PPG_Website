# Pro Parking Group Website

Static-first corporate website for Pro Parking Group, representing Professional Parking Management Corporation (Pro-P) and Park Secure Management Corporation (Park Secure) with equal prominence.

This working foundation contains the responsive global shell and the first Home-page vertical slice. It is based on the approved Business Requirements Document in `docs/Pro_Parking_Group_Website_BRD_v1.0.md`.

## Prerequisites

- Node.js 24 LTS recommended
- Node.js 22.12.0 or newer required by the pinned Astro release
- npm 9.6.5 or newer

## Install

```sh
npm install
```

## Develop

```sh
npm run dev
```

The development server prints its local URL, normally `http://localhost:4321/`.

## Validate

```sh
npm run validate
```

This runs Astro's type and content checks followed by a production build.

## Build

```sh
npm run build
```

Static output is written to `dist/`.

## Preview

```sh
npm run preview
```

The preview server prints its local URL, normally `http://localhost:4321/`.

## Content locations

- `src/data/home.ts`: Git-managed Home-page content, navigation, company summaries, solution areas, industries, and pending-content states
- `src/pages/index.astro`: Home-page section composition
- `src/components/`: reusable global shell and section components
- `src/assets/brand/`: selected local company marks used by the website
- `src/assets/images/`: selected local editorial and equipment images
- `src/styles/global.css`: temporary neutral design tokens and global presentation
- `docs/architecture/`: technical decisions
- `docs/assets/asset-inventory.md`: source-asset review and publication decisions

Content changes should preserve the equal treatment of Pro-P and Park Secure and must not introduce unverified client, project, performance, legal, or company claims.

## Asset workflow

Approved assets should be copied selectively into `src/assets/` or `public/icons/` with lowercase, descriptive filenames. Astro should handle responsive image output where practical. The external source library used during asset review is not a runtime dependency and must not be copied wholesale into this repository.

Client logos, property logos, project photographs, testimonials, and other third-party materials require explicit publication approval before they are added to a rendered page. Source-library presence alone does not establish approval or usage rights.

## Current scope

- Static Astro and TypeScript foundation
- Responsive header, navigation, footer, and accessibility baseline
- Home page with group, company, solution, industry, support, careers, and site-assessment-intent sections
- Selective local asset integration with responsive image generation
- Git-managed structured content
- Local development, production build, preview, and validation scripts

## Deferred capabilities

The full sitemap, dedicated company and solution pages, portfolio records, forms, delivery integrations, CRM, ticketing, applicant tracking, CMS, analytics provider, production domain, hosting configuration, and deployment remain deferred.

Final group identity, complete brand guidance, legal and contact information, client and project proof, and detailed business content remain pending approval. The company logo files in this working version still require final publication confirmation. The group text identity and visual tokens remain temporary working elements.
