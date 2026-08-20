# Pro Parking Group Website

## Business Requirements Document Amendment 001

### Parking-Facility Microsites and Related Services

## Document control

| Field | Value |
| --- | --- |
| Document | BRD Amendment 001: Parking-Facility Microsites and Related Services |
| Status | Approved requirements baseline amendment |
| Version | 1.0 |
| Date | 2026-08-20 |
| Parent baseline | `docs/Pro_Parking_Group_Website_BRD_v1.0.md`, Pro Parking Group Website BRD v1.0 |
| Consolidation target | Pro Parking Group Website BRD v1.1 |
| Implementation status | Future capability. No parking-facility microsite is implemented by this amendment. |

## 1. Purpose and baseline relationship

This amendment forms part of the approved Pro Parking Group website requirements baseline. It must be read together with the parent BRD v1.0 until both documents are consolidated into BRD v1.1.

The amendment adds requirements for scalable, site-specific public microsites for parking facilities and for approved mobility, transport, property, and customer services related to those facilities. Existing requirement identifiers in BRD v1.0 remain unchanged. The new identifiers continue the applicable parent categories.

The current implementation scope remains the corporate website and its authorized content slices, including the Solutions content slice. Parking-facility microsites, microsite routes, templates, structured facility records, and public facility content are future capabilities and are not implementation scope for this task.

## 2. Business objective

| ID | Requirement |
| --- | --- |
| **BRD-BO-005** | The website must support scalable, site-specific public microsites for individual parking facilities so motorists, passengers, tenants, property managers, and visitors can access approved information about the facility and related services without requiring a separate codebase or deployment for each location. |

## 3. Business rules

| ID | Requirement |
| --- | --- |
| **BRD-BR-017** | Each microsite must represent one specific parking facility or one clearly defined parking operation. |
| **BRD-BR-018** | All parking-facility microsites must use the shared Pro Parking Group website platform, common templates, and structured content model. They must not become separate unmanaged websites. |
| **BRD-BR-019** | Each microsite must accurately identify whether Pro-P or Park Secure operates the parking facility. |
| **BRD-BR-020** | Approved site-specific information must take precedence over generic group information when a visitor is viewing a facility microsite. |
| **BRD-BR-021** | Parking rates, operating hours, statutory privileges, property names, maps, photographs, payment methods, restrictions, support contacts, advisories, and operator assignments must be approved before publication. |
| **BRD-BR-022** | A microsite must not claim live parking availability, live parking-fee calculation, payment status, ticket lookup, real-time incident tracking, or equipment control unless the capability is separately approved and implemented. |
| **BRD-BR-023** | Related services must identify their actual operator or provider. The website must not imply that Pro Parking Group, Pro-P, or Park Secure operates a third-party or property-operated service without verified responsibility. |
| **BRD-BR-024** | Rates, schedules, fares, operating hours, route details, advisories, and service status must display their last approved or last verified update where appropriate. The latest approved advisory takes precedence over the general service description. |

## 4. Functional requirements

| ID | Requirement |
| --- | --- |
| **BRD-FR-059** | The platform must support a unique, stable, human-readable route for each published parking-facility microsite using the initial route pattern `/parking/{site-slug}/`. No actual route is created by this amendment. |

### **BRD-FR-060**: Parking-facility content

Each parking-facility record must support approved content for:

- Facility name
- Property name
- Parking-lot, building, level, zone, or facility designation
- Operating company
- Address
- Map or directions link
- Operating hours
- Parking rates
- Grace periods
- Lost-ticket rules
- Accepted payment methods
- Cashierless-payment availability
- Assisted-payment availability
- Entrance locations
- Exit locations
- Vehicle-height restrictions
- Vehicle-type restrictions
- Accessibility information
- Statutory parking privileges
- Ticket instructions
- Payment instructions
- Customer-support destination
- Urgent incident guidance
- Approved announcements
- Temporary closures
- Facility photographs
- Last-updated date
- Search title and description
- Social-sharing title, description, and image

| ID | Requirement |
| --- | --- |
| **BRD-FR-061** | Optional microsite fields must be omitted cleanly when they are not applicable or have not been approved. The page must not render blank labels, empty cards, internal instructions, or unfinished placeholders. |
| **BRD-FR-062** | Authorized content maintainers must be able to preview, publish, update, unpublish, archive, and restore each parking-facility microsite independently. |
| **BRD-FR-063** | The platform must support multiple parking-facility microsites through one shared template and structured content model without requiring a separate application build or codebase for every facility. |
| **BRD-FR-064** | Every published microsite must visibly identify the parking-facility operator as Pro-P or Park Secure. |
| **BRD-FR-065** | Each microsite must support approved links to Customer Support, site-specific contact information, parking-payment services, digital-receipt services, property information, maps and directions, and related external services. External destinations must be clearly identified. |
| **BRD-FR-066** | Each microsite must provide a stable URL suitable for printed and digital QR-code signage. Published microsites may appear in the website sitemap. Unpublished microsites must not appear in public navigation, public sitemaps, or search indexing. |
| **BRD-FR-067** | Each microsite must support independently managed page title, meta description, canonical URL, search-indexing state, social-sharing title, social-sharing description, and social-sharing image. |
| **BRD-FR-068** | A parking-facility microsite must support zero, one, or multiple related mobility, transport, property, or customer services. |
| **BRD-FR-069** | Related-service categories must be configurable through structured content without requiring a new page template or application change for each category. Supported categories must include airport shuttle, inter-terminal shuttle, property shuttle, park-and-ride, valet parking, EV charging, vehicle washing or detailing, motorcycle facilities, bicycle facilities, mobility assistance, public-transport connections, passenger waiting facilities, and other approved site-specific services. |

### **BRD-FR-070**: Related-service content

Each related-service record must support:

- Service name
- Service category
- Short description
- Detailed instructions
- Service operator or provider
- Relationship to Pro Parking Group, Pro-P, Park Secure, or the property
- Origin
- Destination
- Ordered stops or terminals
- Direction of travel
- Pickup location
- Drop-off location
- Operating days
- Operating hours
- Schedule
- Frequency
- Fare or fee
- Payment methods
- Booking or reservation instructions
- External booking link
- Eligibility
- Passenger or vehicle restrictions
- Baggage rules
- Accessibility information
- Customer contact
- Operating status
- Temporary advisories
- Effective date
- Last verified date
- Supporting image
- Source
- Content owner

Optional service fields must be omitted when they do not apply.

| ID | Requirement |
| --- | --- |
| **BRD-FR-071** | Shuttle and transport services must support one-way routes, bidirectional routes, multiple ordered stops, multiple terminals, separate pickup and drop-off instructions, and direction-specific guidance. |
| **BRD-FR-072** | Authorized content maintainers must be able to add, update, reorder, suspend, archive, restore, and remove related services independently from the main parking-facility record. |
| **BRD-FR-073** | The content model should support a service shared by more than one parking facility without duplicating inconsistent service information. |
| **BRD-FR-074** | The microsite must distinguish between services operated by Pro-P, services operated by Park Secure, services operated by the property, services operated by a transport operator, services operated by another third party, and informational links to external services. |
| **BRD-FR-075** | Related services must support temporary advisories, effective dates, suspension notices, and last-verified dates without deleting the underlying service record. |
| **BRD-FR-076** | Custom parking-facility domains or subdomains may be supported later when required by a commercial, contractual, or property-branding arrangement. Custom domains or subdomains must not be mandatory for the initial microsite capability. |

## 5. Content-management requirements

| ID | Requirement |
| --- | --- |
| **BRD-CMS-010** | Authorized content maintainers must be able to manage structured parking-facility information without editing page templates. |
| **BRD-CMS-011** | Authorized content maintainers must be able to manage related-service records without editing page templates. |
| **BRD-CMS-012** | Parking-facility and related-service content must support draft, review, approval, publication, update, unpublication, and archival through Git-managed content or a later approved CMS. |
| **BRD-CMS-013** | Publishing or unpublishing one parking-facility microsite must not affect another microsite. |
| **BRD-CMS-014** | Each facility and service record must support content ownership, source information, effective dates, and last-verified dates where appropriate. |

## 6. Non-functional requirements

| ID | Requirement |
| --- | --- |
| **BRD-NFR-045** | Parking-facility microsites and related-service content must use a mobile-first responsive presentation and target WCAG 2.2 Level AA. |
| **BRD-NFR-046** | Microsites must remain fast and usable on typical Philippine mobile connections. |
| **BRD-NFR-047** | The platform must scale from a small number of facilities to the group’s complete managed portfolio without requiring separate codebases or deployments per facility. |
| **BRD-NFR-048** | Facility slugs must be unique, collision-resistant, stable, and isolated from the content of other facilities. |
| **BRD-NFR-049** | Structured microsite and related-service content must be recoverable through the selected Git, hosting, storage, or later CMS design. |
| **BRD-NFR-050** | Routes, stops, terminals, schedules, and service instructions must remain readable without depending solely on maps, images, color, or external services. |
| **BRD-NFR-051** | Adding facility microsites or related services must not materially reduce the performance, accessibility, or availability of the corporate website. |

## 7. Illustrative supported use case: PITX shuttle services

The following is an illustrative supported use case for the future content model. It is not approved public microsite content and must not be published as a current operating claim.

PITX offers shuttle services to and from:

- NAIA Terminal 1
- NAIA Terminal 2
- NAIA Terminal 3

The shuttle schedule, departure frequency, fare, pickup point, drop-off point, booking process, contact details, baggage rules, accessibility arrangements, operating status, and service operator are content dependencies. They must remain omitted until supplied, verified, and approved.

## 8. Scope exclusions

The following capabilities are out of scope unless separately approved:

- Customer accounts and service-specific customer accounts
- Stored-value accounts
- Live parking-space availability
- Live parking-fee calculation
- Ticket or payment lookup
- Online dispute handling
- Customer case tracking
- Parking reservations
- Equipment or gate control
- Operator or client dashboards
- Separate microsite codebases or applications per property
- Mandatory custom domains
- Live shuttle tracking
- Real-time arrival or departure information
- Seat reservations
- Shuttle ticket sales or fare collection
- Transport dispatching
- Driver or fleet management
- Automated schedule feeds
- Third-party booking integrations
- Push notifications

## 9. Assumptions and dependencies

### Assumptions

- The initial capability will use the shared corporate website platform and common templates.
- Git-managed structured content remains permitted until a CMS is separately approved.
- The route pattern is an initial stable model and does not authorize any public route in this task.
- Optional fields will be absent rather than displayed as empty or unapproved content.

### Dependencies

- Approved facility names, property names, operator assignments, addresses, rates, hours, restrictions, payment methods, support destinations, maps, photographs, and advisories
- Approved service providers, routes, stops, schedules, fares, instructions, contacts, status, and source ownership
- Legal and privacy review where facility or service content creates a new processing or publication obligation
- A later implementation decision for schema validation, preview, publication controls, sitemap generation, and optional CMS support

## 10. Acceptance criteria

| ID | Acceptance criterion |
| --- | --- |
| **BRD-AC-021** | A valid approved parking-facility record can generate one microsite using the shared template. |
| **BRD-AC-022** | The generated microsite receives one unique route under `/parking/{site-slug}/`. |
| **BRD-AC-023** | Missing optional content does not create blank sections, placeholder labels, broken layouts, or invalid links. |
| **BRD-AC-024** | The microsite identifies the operating company as Pro-P or Park Secure. |
| **BRD-AC-025** | One microsite can be published, updated, unpublished, or archived without affecting any other microsite. |
| **BRD-AC-026** | A related shuttle service can represent a bidirectional route with multiple ordered stops or terminals. |
| **BRD-AC-027** | The related-service provider is distinguishable from the parking operator, and missing schedule, fare, contact, or booking information is omitted rather than invented. |
| **BRD-AC-028** | The microsite and its service information remain readable, navigable, and usable at a 390-pixel mobile viewport using keyboard and assistive-technology semantics. |
| **BRD-AC-029** | No separate codebase or deployment is required for each parking facility, and no excluded real-time capability is implied or implemented. |

## 11. Requirements traceability

All requirements in this amendment trace to BRD-BO-005.

| Acceptance criterion | Supporting requirements | Business objective |
| --- | --- | --- |
| BRD-AC-021 | BRD-BR-018, BRD-BR-020, BRD-BR-021, BRD-FR-060, BRD-FR-062, BRD-FR-063, BRD-CMS-010, BRD-CMS-012, BRD-NFR-047 | BRD-BO-005 |
| BRD-AC-022 | BRD-FR-059, BRD-FR-066, BRD-NFR-048 | BRD-BO-005 |
| BRD-AC-023 | BRD-FR-061, BRD-FR-070, BRD-NFR-045, BRD-NFR-050 | BRD-BO-005 |
| BRD-AC-024 | BRD-BR-017, BRD-BR-019, BRD-BR-021, BRD-FR-064, BRD-FR-074 | BRD-BO-005 |
| BRD-AC-025 | BRD-FR-062, BRD-FR-072, BRD-CMS-012, BRD-CMS-013, BRD-NFR-049 | BRD-BO-005 |
| BRD-AC-026 | BRD-FR-068, BRD-FR-069, BRD-FR-070, BRD-FR-071, BRD-FR-073, BRD-CMS-011, BRD-NFR-050 | BRD-BO-005 |
| BRD-AC-027 | BRD-BR-023, BRD-BR-024, BRD-FR-065, BRD-FR-070, BRD-FR-074, BRD-FR-075, BRD-CMS-014 | BRD-BO-005 |
| BRD-AC-028 | BRD-FR-065, BRD-FR-067, BRD-NFR-045, BRD-NFR-046, BRD-NFR-050, BRD-NFR-051 | BRD-BO-005 |
| BRD-AC-029 | BRD-BR-017, BRD-BR-018, BRD-BR-022, BRD-FR-063, BRD-FR-076, BRD-NFR-047, BRD-NFR-051 | BRD-BO-005 |

## 12. Implementation boundary

This amendment defines future capability only. It does not create a `/parking/` route, a parking-facility template, a facility or service data collection, a PITX page, a shuttle page, a custom domain, or a live integration. The Solutions content slice remains the only new public implementation authorized in the related task.
