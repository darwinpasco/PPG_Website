# ADR-002: Shared Architecture for Parking-Facility Microsites

## Status

Accepted as architecture direction for a future capability. No microsite implementation is authorized by this decision.

## Context

Pro Parking Group may need public, site-specific microsites for individual parking facilities. A facility page may also present approved mobility, transport, property, or customer services related to that location. The capability must scale across the managed portfolio without creating a separate website, codebase, or deployment for every facility.

The parent corporate website is a static-first Astro application with Git-managed content. The requirements for the future capability are defined in `docs/requirements/BRD-Amendment-001-parking-lot-microsites.md` and must be read with the parent BRD v1.0.

## Decision drivers

- One maintainable platform and presentation system
- Stable facility URLs suitable for printed and digital QR signage
- Accurate Pro-P or Park Secure operator attribution
- Accurate attribution for third-party and property-operated services
- Independent content lifecycle and indexing state per facility
- Mobile-first access and WCAG 2.2 Level AA
- Fast delivery on typical Philippine mobile connections
- Git-managed initial operation with later CMS compatibility
- Hosting portability and no mandatory custom domain
- Clean omission of unapproved or inapplicable content
- No implied live or transactional capability

## Decision

### Shared template-driven architecture

Future parking-facility microsites will use one shared application, common components, shared design tokens, and a common facility template. Each published page will be generated from a validated structured facility record. A separate application build, codebase, or template fork for each facility is not permitted.

### Route model

The initial route model will be:

```text
/parking/{site-slug}/
```

Each slug will be unique, stable, human-readable, and collision-resistant. Changing a published slug will require an explicit migration and redirect decision. This ADR does not create the route or any facility slug.

### Structured facility content

A facility record will contain approved site identity, operator, location, operating information, parking rules, payment information, entrances and exits, restrictions, accessibility information, support destinations, advisories, media, update dates, publication state, and search and social metadata.

Optional fields will remain absent when they are not applicable or approved. Templates will render sections from available approved data and will not display empty labels, internal instructions, or unfinished placeholders.

### Structured related-service content

Related services will use structured records associated with zero, one, or multiple facilities. Service records will support category, provider, relationship to the parking operator, directions, ordered stops, schedules, fares, instructions, restrictions, accessibility information, contacts, advisories, effective dates, verification dates, sources, and ownership where applicable.

The service-category model will be configurable. Adding an approved category will not require a new page template. A service shared across facilities should use one authoritative record with facility relationships rather than duplicated descriptions.

### Git-managed initial content and later CMS compatibility

The initial content approach will permit typed, file-based records managed through Git. Content validation, review, approval, and publication may use the repository workflow and organizational approval process.

The schema and template boundary will remain independent from the authoring interface so a later approved CMS can provide the same fields and lifecycle states without replacing the public template architecture.

### Independent publication state

Each facility and related-service record will maintain its own draft, approved, published, unpublished, suspended, or archived state as applicable. Build and publication logic will include or exclude one record without changing the state or content of another facility.

### Operator and provider attribution

Every published facility page will visibly identify Pro-P or Park Secure as the parking operator. Related services will separately identify the verified provider and its relationship to Pro Parking Group, the operating company, the property, a transport operator, or another third party. Informational external links will be labeled as external destinations.

### Mobile and accessibility

Microsite templates will be mobile-first and target WCAG 2.2 Level AA. Rates, rules, routes, ordered stops, schedules, and instructions will remain available as semantic text. Maps, images, color, and external services will not be the only means of communicating essential information.

### SEO, indexing, and sitemap behavior

Each facility record will manage its own page title, meta description, canonical URL, social-sharing metadata, and indexing state. Only approved, published records may be indexed or included in public sitemaps. Unpublished, suspended when required, archived, and preview-only pages will be excluded from public navigation and sitemap output and will use the appropriate non-indexing behavior.

### QR-signage compatibility

The stable facility URL will be suitable for printed and digital QR codes. Content changes will normally update the record behind the stable URL so signage does not need to change for routine information updates.

### Optional future custom domains

Custom domains or subdomains may be evaluated later for contractual, commercial, or property-branding needs. They are not required for the initial capability and must resolve to the same shared content and template architecture rather than a separate site implementation.

### Hosting portability

The public output will remain compatible with static-capable hosting. Architecture will avoid coupling facility records to one hosting vendor. Any future preview, redirect, or CMS integration must preserve this portability unless a later ADR approves a change.

### Content isolation

Facility and service records will have stable identifiers, validated relationships, and isolated publication states. One record must not overwrite, expose, or inherit another facility’s content by default. Shared service data will be referenced explicitly.

### Performance implications

Static generation will remain the preferred public delivery model. Each page will load only the content and responsive local media it renders. Adding records must not add every facility or service asset to every page. Shared templates and validation increase build work as the portfolio grows, so build time and output size will be measured before selecting later scale limits or incremental-build features.

### Security and privacy boundary

Microsite content is approved public information. The initial capability will not require customer accounts, customer records, transaction lookup, payment status, reservations, location tracking, or equipment control. Git or later CMS authoring access remains an administrative concern outside the public template. Secrets, credentials, internal network details, and sensitive operating procedures must not enter public records.

### Excluded live integrations

The architecture does not include live parking availability, live fee calculation, payment or ticket lookup, live shuttle tracking, real-time arrivals or departures, reservations, ticket sales, fare collection, transport dispatching, driver or fleet management, automated schedule feeds, third-party booking integrations, or push notifications. Each requires separate requirements, approval, privacy and security review, and architecture decisions.

## Alternatives considered

### Separate website or deployment per facility

Rejected because it would duplicate templates, dependencies, updates, accessibility work, security controls, and deployment management.

### Hardcoded pages for each facility

Rejected because content changes would require editing presentation code and would not scale or preserve consistent omission and approval rules.

### CMS-first implementation

Deferred. A CMS may later improve editorial workflows, but selecting one now would introduce a platform decision before the facility schema, volume, ownership, and operating process are verified.

## Consequences

### Positive

- One implementation can support many facilities and service categories.
- Shared templates keep accessibility, SEO, and presentation behavior consistent.
- Stable routes support QR signage and routine content updates.
- Structured attribution reduces ambiguity between the parking operator and service providers.
- Git-managed content can establish the capability without selecting a CMS prematurely.

### Tradeoffs

- Structured records require validation and disciplined content ownership.
- Independent publication state and shared-service relationships add schema and build complexity.
- Static generation may require later build-performance work as the portfolio grows.
- Custom domains, preview controls, and CMS workflows remain unresolved until their business need is verified.

## Deferred decisions

- Exact facility and related-service schema and validation tooling
- Preview URL and approval workflow design
- CMS selection and authoring interface
- Redirect policy for changed or retired slugs
- Custom-domain routing and certificate management
- Map provider and directions presentation
- Localization and multilingual content
- Portfolio scale thresholds and incremental-build strategy
- Analytics and consent behavior for microsites
- Ownership and review cadence for facility and service records

## Implementation boundary

This ADR defines future direction only. It does not implement the `/parking/{site-slug}/` route, a shared microsite template, structured facility or service records, a PITX microsite, shuttle content, a CMS, a custom domain, or any live integration.
