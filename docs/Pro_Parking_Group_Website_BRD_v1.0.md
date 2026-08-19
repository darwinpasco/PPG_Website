# Pro Parking Group Website

## Business Requirements Document

**Version 1.0**

## 1. Document control

| Field | Value |
|---|---|
| Document | Pro Parking Group Website Business Requirements Document |
| Version | 1.0 |
| Status | Corrected draft for business review and approval |
| Prepared by | Codex W |
| Date | 19 August 2026 |
| Business owner | Pro Parking Group, to be confirmed |
| Purpose | Establish a practical initial business requirements baseline for the Pro Parking Group corporate website |

### Revision history

| Version | Date | Author | Summary |
|---|---|---|---|
| 1.0 | 19 August 2026 | Codex W | Initial draft, corrected to focus the launch baseline on a corporate website and reclassify complex back-office capabilities as future or conditional |

### Approval record

| Approval role | Approver | Decision | Date |
|---|---|---|---|
| Executive sponsor | To be assigned | Pending |  |
| Business development owner | To be assigned | Pending |  |
| Customer-support owner | To be assigned | Pending |  |
| Recruitment owner | To be assigned | Pending |  |
| Privacy or legal reviewer | To be assigned | Pending |  |
| Content owner | To be assigned | Pending |  |

### Contents

1. [Document control](#1-document-control)
2. [Executive summary](#2-executive-summary)
3. [Business context](#3-business-context)
4. [Business problem](#4-business-problem)
5. [Business objectives](#5-business-objectives)
6. [Success measures](#6-success-measures)
7. [Stakeholders](#7-stakeholders)
8. [Target audiences and user needs](#8-target-audiences-and-user-needs)
9. [Brand and corporate identity requirements](#9-brand-and-corporate-identity-requirements)
10. [Business scope](#10-business-scope)
11. [Out-of-scope and future or conditional capabilities](#11-out-of-scope-and-future-or-conditional-capabilities)
12. [Proposed information architecture](#12-proposed-information-architecture)
13. [Page-level business requirements](#13-page-level-business-requirements)
14. [Functional requirements](#14-functional-requirements)
15. [Business rules](#15-business-rules)
16. [Lead-generation requirements](#16-lead-generation-requirements)
17. [Customer-support requirements](#17-customer-support-requirements)
18. [Careers and recruitment requirements](#18-careers-and-recruitment-requirements)
19. [Client portfolio and project-profile requirements](#19-client-portfolio-and-project-profile-requirements)
20. [Content-management requirements](#20-content-management-requirements)
21. [Content governance and approval](#21-content-governance-and-approval)
22. [Form data and routing requirements](#22-form-data-and-routing-requirements)
23. [Notification and acknowledgement requirements](#23-notification-and-acknowledgement-requirements)
24. [Analytics and measurement requirements](#24-analytics-and-measurement-requirements)
25. [Search-engine optimization requirements](#25-search-engine-optimization-requirements)
26. [Accessibility requirements](#26-accessibility-requirements)
27. [Mobile and responsive requirements](#27-mobile-and-responsive-requirements)
28. [Performance requirements](#28-performance-requirements)
29. [Privacy and data-retention requirements](#29-privacy-and-data-retention-requirements)
30. [Security and abuse-prevention requirements](#30-security-and-abuse-prevention-requirements)
31. [Availability backup and recovery expectations](#31-availability-backup-and-recovery-expectations)
32. [External integration considerations](#32-external-integration-considerations)
33. [Assumptions](#33-assumptions)
34. [Dependencies](#34-dependencies)
35. [Constraints](#35-constraints)
36. [Risks](#36-risks)
37. [Open decisions](#37-open-decisions)
38. [Acceptance criteria](#38-acceptance-criteria)
39. [Requirements traceability index](#39-requirements-traceability-index)

## 2. Executive summary

This document defines the initial business requirements for a focused public corporate website for Pro Parking Group. The website represents two separate legal operating companies, Professional Parking Management Corporation, referred to as Pro-P, and Park Secure Management Corporation, referred to as Park Secure. Both companies receive equal prominence. No difference in their services, target markets, or operating models is assumed unless approved evidence establishes one.

The website is primarily a business-to-business corporate and lead-generation channel. Its principal conversion is **Request a Site Assessment**. Customer support and recruitment remain visible secondary functions with distinct visitor journeys. The initial release provides content, forms or approved external destinations, acknowledgements where the website accepts submissions, and reliable delivery. It does not require custom lead management, support case management, applicant tracking, or enterprise content-management software.

Content may initially be developed and maintained with Codex and Git, file-based structured content, a later approved CMS, or a hybrid model. Content governance and publication approval apply regardless of the implementation choice. This BRD does not select a technology stack, CMS, host, cloud platform, CRM, ticketing product, applicant-tracking product, or detailed architecture.

Delivery remains short and review driven: approve a lightweight baseline, build an early working version, review it in a browser, refine content and behavior, and launch when the acceptance criteria are satisfied. The preference to launch in approximately one month is a planning constraint, not a fixed schedule or contractual deadline.

## 3. Business context

Pro Parking Group consists of:

- Professional Parking Management Corporation, or Pro-P
- Park Secure Management Corporation, or Park Secure

The two entities are separate legal companies. Approved information does not establish different offerings, markets, or operating models. The public website therefore uses a group-level solution structure, equivalent company presentation, and verified attribution of projects or managed properties to the responsible operating company when available.

The proposed customer-facing solution structure is:

| Solution category | Candidate capabilities requiring verification |
|---|---|
| Parking Management and Operations | Full parking-facility management, site operations, staffing and workforce management, revenue collection controls, customer assistance, operational reporting, and business continuity |
| Cashierless Parking and Digital Payments | Automated payment machines, web-based parking payment, QRPh and other digital payment options, cashierless operating models, assisted and continuity payment options, and digital sales invoice access |
| Parking Systems and Equipment | Parking management systems, entry and exit equipment, barriers and validators, license plate recognition, payment terminals, systems integration, and equipment deployment |
| Command Center and Revenue Intelligence | Centralized operational monitoring, site health and incident visibility, revenue monitoring, exception management, operational dashboards, performance reporting, and remote technical coordination |
| Consultancy and Technical Services | Parking-site assessment, parking layout and process review, modernization planning, technology selection, implementation support, preventive maintenance, and first-line technical support |

These categories organize candidate capabilities for customer understanding. They do not establish that every capability is currently offered by both companies. Publication depends on verification by an authorized business owner.

## 4. Business problem

The group needs one credible public destination that explains its corporate identity and parking capabilities to prospective clients while helping motorists, applicants, and existing stakeholders reach the correct team. These audiences have different intentions, so sales, support, recruitment, and general-contact journeys need to remain distinct.

The initial product needs to make those journeys clear and dependable without expanding into custom operational systems. It also needs to communicate technology in business terms, publish evidence only when approved, and perform well for mobile users on typical Philippine connections. Missing client and project inputs currently limit publishable portfolio, experience, performance, and attribution claims.

## 5. Business objectives

| ID | Business objective | Intended outcome |
|---|---|---|
| BRD-BO-001 | The website must generate qualified opportunities from property owners, developers, and property operators through a concise Request a Site Assessment journey. | Prospects can make contact easily and business development receives useful inquiry information. |
| BRD-BO-002 | The website must establish corporate credibility while presenting Pro-P and Park Secure accurately and equally. | Visitors can understand the group, its legal companies, verified capabilities, and approved experience. |
| BRD-BO-003 | The website must support motorists and parking customers through clear FAQs, guidance, and a dedicated support contact journey. | Customers can provide sufficient information to the approved support destination. |
| BRD-BO-004 | The website must support recruitment for operations, technical, and corporate roles through approved openings and application instructions or routes. | Applicants can find current opportunities and use the approved application channel. |

## 6. Success measures

No current baselines or numeric targets are assumed. Owners will approve definitions and targets before launch or after an initial measurement period where a baseline is needed.

| Measure | Related objective | Initial measurement approach |
|---|---|---|
| Valid site-assessment inquiries delivered | BRD-BO-001 | Count valid submissions successfully accepted and delivered to the approved destination |
| Site-assessment completion rate | BRD-BO-001 | Compare form starts with successful submissions, excluding detected abuse |
| Engagement with corporate proof | BRD-BO-002 | Measure visits to company, solution, industry, portfolio, and approved project content |
| Successful support submissions | BRD-BO-003 | Count valid support submissions accepted and delivered when the website provides the form |
| FAQ usefulness | BRD-BO-003 | Measure approved FAQ engagement and onward support actions |
| Career engagement | BRD-BO-004 | Measure job-detail views and completed application handoffs or direct submissions where measurable |
| Accessibility conformance | All objectives | Evaluate the approved launch scope against WCAG 2.2 Level AA |
| Mobile and performance quality | All objectives | Test critical pages and journeys using approved mobile viewports and connection profiles |
| Content currency | BRD-BO-002, BRD-BO-004 | Review content against assigned owners and review dates |

## 7. Stakeholders

| Stakeholder | Interest and responsibility |
|---|---|
| Executive sponsor | Confirms direction, approves scope, and resolves cross-functional decisions |
| Pro-P authorized representative | Verifies Pro-P identity, profile, claims, and project attribution |
| Park Secure authorized representative | Verifies Park Secure identity, profile, claims, and project attribution |
| Business development personnel | Own site-assessment fields, delivery destination, follow-up process, and measurement |
| Customer-support personnel | Own FAQs, support categories, guidance, delivery destination, and response process |
| Recruitment personnel | Own job content, application route, applicant information, and closure rules |
| Content owner and contributors | Prepare, review, approve, publish, and maintain content through the selected operating process |
| Marketing or communications owner | Maintains brand, messaging, search metadata, social previews, and analytics definitions |
| Privacy or legal reviewer | Approves privacy notices, processing basis, consent where applicable, retention, and optional Terms of Use |
| Information security or technical owner | Approves secure form handling, abuse controls, delivery monitoring, hosting, and recovery expectations |
| Client or project approvers | Authorize public use of client names, logos, testimonials, images, project details, and results |
| Website product owner | Maintains the requirements baseline, prioritizes iterations, and accepts the release |

## 8. Target audiences and user needs

| Code | Audience | Primary needs |
|---|---|---|
| AUD-OWNER | Property owners and property developers | Understand verified capabilities and request a site assessment without a lengthy qualification process |
| AUD-OPERATOR | Mall, office, hotel, residential, mixed-use, healthcare, and transport-property operators | Find relevant solutions and make a structured business inquiry |
| AUD-CLIENT | Existing corporate clients | Find current corporate information and the correct contact or support route |
| AUD-MOTORIST | Motorists and parking customers | Find FAQs, approved guidance, and a simple way to contact support |
| AUD-APPLICANT | Job applicants | Find current roles, understand requirements, and use the approved application route |
| AUD-ADMIN | Content owners and contributors | Maintain accurate, approved content through Codex and Git, structured files, a future CMS, or a hybrid process |
| AUD-BD | Business development personnel | Receive valid inquiries through the approved destination |
| AUD-SUPPORT | Customer-support personnel | Receive useful support details through the approved destination |
| AUD-RECRUIT | Recruitment personnel | Publish openings and receive or redirect applications through the approved route |

## 9. Brand and corporate identity requirements

The website will use approved brand assets and naming supplied by Pro Parking Group. Pro-P and Park Secure will have equivalent information structures and comparable visual prominence. Group-level pages will not imply that either company is secondary or assign exclusive capabilities without verified evidence.

Required inputs include approved logos, color and typography guidance, legal company names, short names, image rights, tone guidance, and any mandatory attribution language. Missing inputs remain dependencies and are not inferred from unapproved third-party material.

Formal corporate-identity controls are in BRD-BR-003 through BRD-BR-006 and BRD-BR-015.

## 10. Business scope

### Initial launch baseline

- Home and corporate navigation
- About Pro Parking Group
- Our Companies, Pro-P, and Park Secure
- Solutions and individual solution pages or sections
- Industries
- Portfolio or Managed Properties and selected project profiles using approved content
- Request a Site Assessment with a concise conversion-oriented form
- Customer Support, approved FAQs, guidance, and a support contact form or approved destination
- Careers, approved job openings, and application instructions or an approved application route
- Contact, with distinct sales, support, recruitment, and general-contact journeys
- Privacy Notice before personal information is collected
- Terms of Use only if the legal owner determines separate terms are needed
- Mobile-first responsive presentation, WCAG 2.2 Level AA target, SEO, performance, security, privacy-aware analytics, and recoverable published content and configuration
- Content preparation and publication through Codex and Git, file-based structured content, a later approved CMS, or a hybrid model

### Delivery approach

The requirements baseline remains lightweight and change controlled. Codex will support short iterations, an early working version, browser review, and refinement of content, design, and functionality. Launch occurs when the approved acceptance criteria are satisfied, not at the end of a rigid phase schedule.

## 11. Out-of-scope and future or conditional capabilities

### Future or conditional capabilities

The following may be supplied by an approved external service or introduced later after a separate business and design decision. They are not required custom website capabilities for the initial release:

- CRM integration, lead ownership, lead status states, lead dashboards, advanced qualification, configurable routing administration, controlled retry interfaces, and inquiry reference tracking
- Support ticketing, unique case references, case ownership, status workflows, facility-based routing engines, support dashboards, and customer case tracking
- Applicant-tracking integration, applicant references, applicant statuses, recruitment dashboards, and talent-pool workflows
- Browser-based content administration, scheduled publishing, application-enforced approval states, custom content audit records, restoration interfaces, and CMS role workflows
- Automated synchronization with business systems, social channels, maps, file services, or ExitPass

If a selected external platform already provides one of these capabilities, its use is subject to approval, privacy, security, accessibility, and operational review. The corporate website does not need to reproduce it.

### Excluded from the initial release

- Customer user accounts
- Client self-service portals
- Online parking payments through the corporate website
- Live parking-space availability
- Live parking-fee calculation
- Payment or ticket lookup
- Real-time complaint tracking by customers
- Client operational dashboards
- Direct control of parking equipment
- Internal ExitPass administration
- Public exposure of internal system architecture
- A mobile application
- Selection through this BRD of a specific technology stack, CMS, hosting provider, cloud platform, CRM, support platform, or applicant-tracking platform

These exclusions control initial scope and do not permanently reject future capabilities.

## 12. Proposed information architecture

### Desktop navigation

`About | Our Companies | Solutions | Industries | Portfolio | Careers | Support`

The brand logo links to Home. A distinct **Request a Site Assessment** action appears in the header and remains distinguishable from Support and Careers.

### Sitemap

- Home
- About Pro Parking Group
- Our Companies
  - Pro-P
  - Park Secure
- Solutions
  - Parking Management and Operations
  - Cashierless Parking and Digital Payments
  - Parking Systems and Equipment
  - Command Center and Revenue Intelligence
  - Consultancy and Technical Services
- Industries
  - Shopping malls and retail developments
  - Office buildings
  - Hotels and hospitality properties
  - Residential and mixed-use developments
  - Hospitals and healthcare facilities
  - Transport terminals
  - Open parking facilities
  - Events and high-volume destinations
- Portfolio or Managed Properties
  - Selected Project Profiles
- Careers
- Customer Support
- Frequently Asked Questions
- Contact
- Request a Site Assessment
- Privacy Notice
- Terms of Use, if required by the legal owner

Industry categories are proposed discovery categories, not claims of experience. Experience claims require verified client or project information.

## 13. Page-level business requirements

| ID | Page or component | Requirement | Trace |
|---|---|---|---|
| BRD-FR-001 | Home | The Home page must lead with the group-level B2B value proposition, approved solution structure, and Request a Site Assessment action. | BRD-BO-001, BRD-BO-002; AUD-OWNER, AUD-OPERATOR |
| BRD-FR-002 | Home | The Home page must provide visible secondary routes to Customer Support and Careers without giving them greater prominence than the B2B proposition. | BRD-BO-001, BRD-BO-003, BRD-BO-004; AUD-MOTORIST, AUD-APPLICANT |
| BRD-FR-003 | Home | The Home page must present Pro-P and Park Secure with equal prominence and link to both company pages. | BRD-BO-002; all external audiences |
| BRD-FR-004 | About | The About page must explain approved group context and corporate identity without unsupported history, scale, or performance claims. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR, AUD-CLIENT, AUD-APPLICANT |
| BRD-FR-005 | Our Companies | The Our Companies page must introduce both legal companies using equivalent structure, comparable content opportunity, and equal visual treatment. | BRD-BO-002; all external audiences |
| BRD-FR-006 | Pro-P | The Pro-P page must use the verified legal name, approved profile, group-level solution links, verified contact details, and verified project attribution where available. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR, AUD-CLIENT, AUD-APPLICANT |
| BRD-FR-007 | Park Secure | The Park Secure page must use the verified legal name, approved profile, group-level solution links, verified contact details, and verified project attribution where available. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR, AUD-CLIENT, AUD-APPLICANT |
| BRD-FR-008 | Solutions | The Solutions landing page must organize the five approved candidate solution categories and route visitors to their detail content. | BRD-BO-001, BRD-BO-002; AUD-OWNER, AUD-OPERATOR |
| BRD-FR-009 | Solution detail | Each solution page or section must explain the operational or commercial problem, verified capabilities, customer value without unsupported results, relevant property contexts, and a site-assessment action. | BRD-BO-001, BRD-BO-002; AUD-OWNER, AUD-OPERATOR |
| BRD-FR-010 | Industries | The Industries page must present proposed property categories as contexts where solutions may be relevant without claiming experience unless approved evidence supports it. | BRD-BO-001, BRD-BO-002; AUD-OWNER, AUD-OPERATOR |
| BRD-FR-011 | Portfolio | The Portfolio or Managed Properties page must publish only approved entries and identify the verified responsible operating company when available. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR, AUD-CLIENT |
| BRD-FR-012 | Project profile | Each Selected Project Profile must use the approved content structure in section 19 and omit unavailable or unapproved information. | BRD-BO-001, BRD-BO-002; AUD-OWNER, AUD-OPERATOR |
| BRD-FR-013 | Careers | The Careers page must show approved current openings and application instructions or the approved application destination. | BRD-BO-004; AUD-APPLICANT, AUD-RECRUIT |
| BRD-FR-014 | Customer Support | The Customer Support page must show approved FAQs, support categories, information to prepare, approved urgent guidance, privacy information, and a website-hosted or approved external support submission route. | BRD-BO-003; AUD-MOTORIST, AUD-SUPPORT |
| BRD-FR-015 | FAQ | The FAQ page must organize approved answers and direct unresolved sales, support, recruitment, and general inquiries to the correct journey. | All objectives; all external audiences |
| BRD-FR-016 | Contact | The Contact page must show verified contact details and distinguish general contact from sales, support, and recruitment. | BRD-BO-002; AUD-CLIENT and general visitors |
| BRD-FR-017 | Site assessment | The Request a Site Assessment page must explain its purpose, use a concise form, provide approved privacy information, and set only approved response expectations. | BRD-BO-001; AUD-OWNER, AUD-OPERATOR, AUD-BD |
| BRD-FR-018 | Privacy Notice | A Privacy Notice must be published before the website collects personal information and must contain legally approved information about applicable processing. | All objectives; all form users |
| BRD-FR-019 | Terms of Use | A Terms of Use page should be included only if the legal owner determines that separate website terms are needed; its absence must not block launch when legal review confirms it is unnecessary. | BRD-BO-002; all external audiences |
| BRD-FR-020 | Header and footer | The global header and footer must provide consistent navigation, verified identity and contact information, required policy links, and separate routes for site assessment, support, and careers. | All objectives; all external audiences |

## 14. Functional requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-FR-021 | The website must provide a distinct Request a Site Assessment action in the desktop header and an equivalent accessible action in mobile navigation. | BRD-BO-001; AUD-OWNER, AUD-OPERATOR |
| BRD-FR-022 | The logo must link to Home and expose an accessible name identifying the destination. | All objectives; all external audiences |
| BRD-FR-023 | Navigation must expose the approved top-level destinations and indicate the current section accessibly. | All objectives; all external audiences |
| BRD-FR-024 | Content must support relevant links among solutions, proposed industries, approved projects, companies, and the site-assessment journey without implying unverified experience. | BRD-BO-001, BRD-BO-002; AUD-OWNER, AUD-OPERATOR |
| BRD-FR-025 | A website-hosted form must validate required data, identify correctable errors accessibly, and preserve valid entered data when an error occurs. | BRD-BO-001, BRD-BO-003, BRD-BO-004; all direct form users |
| BRD-FR-026 | Each form must provide the approved privacy notice or relevant summary and link, record acknowledgement where required, and capture consent only when consent is the approved or legally required processing basis. | All objectives; all form users |
| BRD-FR-027 | A website-hosted form must display a successful submission acknowledgement after acceptance and deliver the submission to its approved destination. | BRD-BO-001, BRD-BO-003, BRD-BO-004; form users and functional owners |
| BRD-FR-028 | Failed delivery of a website-hosted submission must be detectable through the selected implementation so an authorized recipient or technical owner can respond. | BRD-BO-001, BRD-BO-003, BRD-BO-004; functional and technical owners |

## 15. Business rules

| ID | Business rule | Trace |
|---|---|---|
| BRD-BR-001 | Home must be B2B-first. | BRD-BO-001, BRD-BO-002; AUD-OWNER, AUD-OPERATOR |
| BRD-BR-002 | Customer Support must remain visible and easy to reach without dominating the B2B value proposition. | BRD-BO-001, BRD-BO-003; AUD-MOTORIST |
| BRD-BR-003 | Pro-P and Park Secure must receive equivalent page structure, prominence, and visual treatment. | BRD-BO-002; all external audiences |
| BRD-BR-004 | Public content must not invent differences in the services, target markets, or operating models of Pro-P and Park Secure. | BRD-BO-002; all audiences |
| BRD-BR-005 | Services and technology must be presented as group-level capabilities unless verified and approved evidence assigns a capability to one company. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR, AUD-CLIENT |
| BRD-BR-006 | Client and project content must identify the responsible operating company when that attribution is verified. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR, AUD-CLIENT |
| BRD-BR-007 | Technology content must explain operational or commercial problems addressed and avoid unsupported outcome claims. | BRD-BO-001, BRD-BO-002; AUD-OWNER, AUD-OPERATOR |
| BRD-BR-008 | Public content must not expose internal architecture, security configuration, credentials, network details, or sensitive operating procedures. | All objectives; all audiences |
| BRD-BR-009 | ExitPass may be introduced as a parking technology platform only after content approval and must not be assumed to be the corporate website platform. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR |
| BRD-BR-010 | Sales, customer support, recruitment, and general contact must remain distinct visitor journeys even when an approved external service handles a destination. | All objectives; all form users and owners |
| BRD-BR-011 | Unverified statistics, client relationships, certifications, awards, testimonials, project details, performance results, and corporate facts must not be published as facts. | BRD-BO-002; all audiences |
| BRD-BR-012 | Mobile users must be treated as a primary audience across content, navigation, forms, and acceptance testing. | All objectives; all external audiences |
| BRD-BR-013 | An industry category must not state or imply group experience unless approved client or project evidence supports it. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR |
| BRD-BR-014 | Client names, logos, testimonials, property details, images, and project results must not be published until business and rights approvals are recorded in the operating process. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR, AUD-CLIENT |
| BRD-BR-015 | The website must identify Pro-P and Park Secure as separate legal operating companies without an unsupported hierarchy. | BRD-BO-002; all external audiences |
| BRD-BR-016 | Content governance must apply regardless of whether content is maintained through Codex and Git, structured files, a CMS, or a hybrid model. | All objectives; AUD-ADMIN |

## 16. Lead-generation requirements

### Initial site-assessment data

| Data item | Initial status |
|---|---|
| Contact name | Required |
| Company or organization | Required |
| Business email or contact number | At least one required; the other is optional |
| Property name or location | Required |
| Property type | Required from approved options with an appropriate alternative |
| Brief description of the parking requirement or operational challenge | Required |
| Privacy acknowledgement | Required when approved by privacy or legal review |
| Consent | Captured only when consent is the approved or legally required processing basis |
| Approximate parking capacity | Optional |
| Current operating model | Optional |
| Current parking-system provider | Optional |
| Services of interest | Optional |
| Desired implementation period | Optional |
| Supporting documents | Optional and may be deferred if secure upload is not approved for launch |
| Additional contact details | Optional |

### Launch requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-FR-029 | The site-assessment form must collect only the required data in the section 16 table as conditions of submission. | BRD-BO-001; AUD-OWNER, AUD-OPERATOR |
| BRD-FR-030 | The site-assessment form must allow the optional data in section 16 when approved but must not require it to make initial contact. | BRD-BO-001; AUD-OWNER, AUD-OPERATOR |
| BRD-FR-031 | The form and surrounding content must prioritize conversion and ease of completion rather than act as a detailed qualification questionnaire. | BRD-BO-001; AUD-OWNER, AUD-OPERATOR |
| BRD-FR-032 | A valid inquiry must be accepted, acknowledged on screen, and delivered to the approved business-development destination. | BRD-BO-001; AUD-OWNER, AUD-OPERATOR, AUD-BD |
| BRD-FR-033 | The selected implementation must protect submitted data and make failed delivery detectable without requiring a custom CRM, dashboard, status model, or reference-tracking system. | BRD-BO-001; AUD-BD and technical owner |

Lead ownership, status management, lead dashboards, configurable routing administration, controlled retry interfaces, and inquiry reference tracking are future or conditional capabilities under section 11. They may be delegated to an approved email, CRM, form, or workflow service.

## 17. Customer-support requirements

### Initial support categories

- Lost or damaged ticket
- Parking fee inquiry
- Payment concern
- Digital payment or receipt concern
- Entry or exit incident
- Vehicle or property incident
- Customer-service complaint
- Accessibility concern
- Data privacy request
- Other parking concern

### Initial support data

| Data item | Initial status |
|---|---|
| Support category | Required |
| Parking facility | Required, with an approved fallback when the facility cannot be identified |
| Incident date and approximate time | Required when relevant to the selected category |
| Description | Required |
| Response channel | At least one approved customer contact method required |
| Entry or exit point | Optional when known and relevant |
| Ticket or transaction reference | Optional |
| Vehicle plate number | Optional unless privacy or operational review approves a category-specific need |
| Supporting files | Optional and may be deferred if secure upload is not approved for launch |
| Privacy acknowledgement | Required when approved by privacy or legal review |
| Consent | Captured only when consent is the approved or legally required processing basis |

### Launch requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-FR-034 | Customer Support must provide the approved FAQs and support categories listed in section 17. | BRD-BO-003; AUD-MOTORIST, AUD-SUPPORT |
| BRD-FR-035 | A website-hosted support form must collect the required data in section 17, including conditional incident timing where relevant. | BRD-BO-003; AUD-MOTORIST, AUD-SUPPORT |
| BRD-FR-036 | Ticket, transaction, vehicle, entry or exit point, and attachment information must remain optional unless an approved category-specific need is clearly explained. | BRD-BO-003; AUD-MOTORIST |
| BRD-FR-037 | A valid submission through the selected website-hosted or approved external support form must be accepted, acknowledged by that route, and delivered to the approved support destination. | BRD-BO-003; AUD-MOTORIST, AUD-SUPPORT |
| BRD-FR-038 | The selected implementation must protect support data and make failed delivery detectable without requiring a custom ticketing system, dashboard, routing engine, status model, or customer tracking feature. | BRD-BO-003; AUD-SUPPORT and technical owner |
| BRD-FR-039 | Support content must show only approved urgent or emergency guidance and distinguish the website route from an emergency-response channel. | BRD-BO-003; AUD-MOTORIST |
| BRD-FR-040 | Facebook Messenger may be presented as a supplementary support channel if approved, but it must not be the only available support journey. | BRD-BO-003; AUD-MOTORIST, AUD-SUPPORT |

Unique case references, ownership, case statuses, facility-based routing engines, dashboards, and customer case tracking are future or conditional capabilities under section 11.

## 18. Careers and recruitment requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-FR-041 | Careers must support publication of approved openings with job title, category, description, work location, employment type, requirements, and application instructions. | BRD-BO-004; AUD-APPLICANT, AUD-RECRUIT |
| BRD-FR-042 | Each opening must use an approved website form, email route, or external application destination and clearly explain the applicant's next action. | BRD-BO-004; AUD-APPLICANT, AUD-RECRUIT |
| BRD-FR-043 | Resume submission must be supported where approved through the selected application route, subject to file security and privacy controls. | BRD-BO-004; AUD-APPLICANT, AUD-RECRUIT |
| BRD-FR-044 | Applicants must receive approved privacy information before personal information is submitted. | BRD-BO-004; AUD-APPLICANT |
| BRD-FR-045 | When the website directly accepts an application, it must validate required data, display a successful acknowledgement, deliver the application to the approved destination, and make failed delivery detectable. | BRD-BO-004; AUD-APPLICANT, AUD-RECRUIT |
| BRD-FR-046 | Closed or expired openings must stop accepting job-specific applications and be removed from current openings or clearly marked closed. | BRD-BO-004; AUD-APPLICANT, AUD-RECRUIT |

Applicant references, applicant statuses, recruitment dashboards, applicant-tracking workflows, and talent-pool workflows are future or conditional capabilities under section 11.

## 19. Client portfolio and project-profile requirements

The existing client list and project information are required content inputs but are not currently in the repository. No client, property, contract, capacity, performance, or testimonial detail is inferred.

### Content structures

| Content type | Required or conditional fields |
|---|---|
| Client | Approved display name and logo if authorized, relationship description if approved, related properties or projects, content owner, approval reference in the operating process, and review date |
| Managed property | Approved property name, general location, property type, responsible operating company when verified, approved image and scope summary, related client and solutions where approved, content owner, approval reference, and review date |
| Project profile | Approved title, publishable client or property name, responsible operating company when verified, approved location precision, property type, verified context, verified solution and scope, approved results with supporting evidence, approved testimonial and media, content owner, approval reference, and review date |

Evidence and approvals may remain in the organization's operating records and Git history. The website application does not need to store them.

| ID | Requirement | Trace |
|---|---|---|
| BRD-FR-047 | Portfolio content must use consistent client, managed-property, and project-profile structures based on section 19. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR, AUD-CLIENT, AUD-ADMIN |
| BRD-FR-048 | A published managed property or project must identify Pro-P or Park Secure as the responsible operating company when that attribution is verified. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR, AUD-CLIENT |
| BRD-FR-049 | Client names, logos, testimonials, project images, contract details, and results must remain unpublished until approval is recorded through the organization's content process. | BRD-BO-002; AUD-CLIENT, AUD-ADMIN |
| BRD-FR-050 | Published factual and numeric claims must trace to approved source material maintained by the responsible content owner, without requiring the website application to store the evidence. | BRD-BO-002; AUD-OWNER, AUD-OPERATOR, AUD-ADMIN |

## 20. Content-management requirements

The initial content model is implementation neutral. Codex and Git-managed Markdown or structured files are acceptable. A later CMS or hybrid model may be selected separately. The launch does not require browser-based administration or an enterprise editorial workflow.

| ID | Requirement | Trace |
|---|---|---|
| BRD-CMS-001 | The content approach must allow Codex and Git-managed content, file-based structured content, a later approved CMS, or a hybrid model. | All objectives; AUD-ADMIN |
| BRD-CMS-002 | The selected approach must support maintenance of general pages, company profiles, solutions, industries, portfolio and projects, FAQs, job openings, contact details, search metadata, social metadata, and media assets. | All objectives; AUD-ADMIN |
| BRD-CMS-003 | Pro-P and Park Secure content structures must remain equivalent under the selected content approach. | BRD-BO-002; AUD-ADMIN |
| BRD-CMS-004 | Content changes must be attributable and reversible through Git history, hosting or deployment controls, a later CMS, or an approved combination. | All objectives; AUD-ADMIN and technical owner |
| BRD-CMS-005 | The publication process must prevent unapproved content from reaching the public website through review and release controls appropriate to the selected approach. | All objectives; AUD-ADMIN |
| BRD-CMS-006 | Job openings must support publication, update, closure, and removal through the selected content approach. | BRD-BO-004; AUD-ADMIN, AUD-RECRUIT |
| BRD-CMS-007 | Search metadata, social-sharing metadata, media rights information, and alternative text must be maintainable with their related content. | BRD-BO-001, BRD-BO-002; AUD-ADMIN |
| BRD-CMS-008 | Content ownership, approval evidence, and review dates may be maintained in organizational records and Git history rather than in the website application. | All objectives; AUD-ADMIN |
| BRD-CMS-009 | Browser administration, scheduling, custom workflow states, approval engines, audit dashboards, and restoration interfaces must remain optional until a CMS or equivalent capability is separately approved. | All objectives; AUD-ADMIN |

## 21. Content governance and approval

### Proportional governance model

| Content | Responsible owner | Required review before first publication or material change |
|---|---|---|
| Group and company identity | Executive sponsor and designated company representatives | Pro-P and Park Secure representatives; legal when needed |
| Solutions and industries | Business development or operations owner | Subject owner and claims reviewer |
| Clients and projects | Relationship or project owner | Client-rights approver, operating-company representative, and legal when needed |
| Support and FAQs | Customer-support owner | Operations and privacy review where personal data is discussed |
| Careers and jobs | Recruitment owner | Hiring owner and privacy review for application changes |
| Privacy Notice and optional Terms of Use | Privacy or legal owner | Authorized legal approval |
| Contact details | Relevant functional owner | Content owner |
| News or announcements, if later approved | Communications owner | Subject owner and legal when applicable |

Every public content area has an accountable owner. Claims, legal identity, client information, project details, testimonials, logos, images, and performance statements require verification and publication approval. Approvals may be recorded in normal organizational records, review correspondence, issue tracking, or Git-based review. The website application does not need to implement an evidence repository or approval engine.

Material changes to claims, legal identity, privacy wording, form purpose, or collected data trigger renewed review. Superseded or withdrawn content is updated or removed through the selected content and release process.

## 22. Form data and routing requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-FR-051 | Site assessment, support, recruitment, and general contact must remain distinct in purpose, fields, labels, privacy information, and destination. | All objectives; all form users and owners |
| BRD-FR-052 | The general-contact route must collect only approved general-inquiry data and direct sales, support, and recruitment users to their dedicated journeys. | All objectives; general visitors |
| BRD-FR-053 | A website-hosted form must identify required and optional fields, provide persistent labels, and avoid using placeholder text as the only instruction. | All objectives; all direct form users |
| BRD-FR-054 | Delivery may use an approved email, CRM, support service, applicant route, form service, or workflow service; the website must not require a custom back-office system when the selected destination satisfies the business requirement. | All objectives; functional and technical owners |
| BRD-FR-055 | Optional uploaded files must use approved type, size, privacy, security, delivery, and retention controls. | BRD-BO-001, BRD-BO-003, BRD-BO-004; form users and owners |

## 23. Notification and acknowledgement requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-FR-056 | A website-hosted form must display a clear success acknowledgement only after the submission is accepted for delivery. | All objectives; all direct form users |
| BRD-FR-057 | Acknowledgement wording must identify the journey and approved next step without promising a response time, resolution, interview, employment outcome, or commercial engagement unless formally approved. | All objectives; all direct form users |
| BRD-FR-058 | Separate email or other post-submission notifications, unique reference numbers, recipient notifications, status updates, and retry interfaces are conditional on the selected implementation and approved operating process. | All objectives; form users and functional owners |

## 24. Analytics and measurement requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-NFR-001 | Analytics must measure approved page views, navigation actions, primary calls to action, form starts, validation errors, successful submissions, and external application handoffs needed for the success measures. | All objectives; website and functional owners |
| BRD-NFR-002 | Analytics event definitions must distinguish site assessment, support, recruitment, and general-contact journeys. | All objectives; functional owners |
| BRD-NFR-003 | Analytics must not collect form field contents, uploaded documents, vehicle plates, ticket references, resumes, or other submission payloads. | All objectives; all form users |
| BRD-NFR-004 | Analytics collection must follow approved privacy, notice, consent where applicable, retention, access, and opt-out rules. | All objectives; all visitors |
| BRD-NFR-005 | Success-measure reports must document metric definitions, exclusions, reporting period, owner, and known limitations. | All objectives; business owners |

## 25. Search-engine optimization requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-NFR-006 | Each indexable public page must have a unique descriptive title and search description. | BRD-BO-001, BRD-BO-002; AUD-OWNER, AUD-OPERATOR |
| BRD-NFR-007 | Public pages must use one clear primary heading and a logical heading hierarchy. | All objectives; all external audiences |
| BRD-NFR-008 | The website must provide crawlable navigation and an up-to-date machine-readable sitemap for approved indexable pages. | BRD-BO-001, BRD-BO-002; search users |
| BRD-NFR-009 | Indexing controls must prevent draft, duplicate, archived, private, confirmation, and internal pages from being indexed unintentionally. | All objectives; content and technical owners |
| BRD-NFR-010 | Structured data should be used for applicable organization, breadcrumb, FAQ, and job content only when visible approved content supports it and validation passes. | BRD-BO-002, BRD-BO-004; search users |
| BRD-NFR-011 | Shareable public pages must provide approved social-sharing titles, descriptions, and images without exposing private or draft content. | BRD-BO-001, BRD-BO-002, BRD-BO-004; all external audiences |

## 26. Accessibility requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-NFR-012 | The launch website must target WCAG 2.2 Level AA across public pages, navigation, website-hosted forms, and acknowledgements. | All objectives; all audiences |
| BRD-NFR-013 | Critical journeys must be operable by keyboard alone with visible focus and logical focus order. | All objectives; all external audiences |
| BRD-NFR-014 | Text, controls, status messages, validation errors, and media alternatives must be perceivable and programmatically associated as required by WCAG 2.2 Level AA. | All objectives; all external audiences |
| BRD-NFR-015 | Color must not be the only means of conveying meaning, and approved color combinations must meet applicable contrast requirements. | All objectives; all external audiences |
| BRD-NFR-016 | Website-hosted forms must provide persistent labels, clear instructions, accessible error recovery, and accessible success or failure status. | BRD-BO-001, BRD-BO-003, BRD-BO-004; all direct form users |
| BRD-NFR-017 | Motion, animation, timed content, and auto-updating content must respect applicable criteria and user preferences. | All objectives; all external audiences |

## 27. Mobile and responsive requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-NFR-018 | The website must use a mobile-first responsive presentation that preserves meaning and task completion without horizontal page scrolling at approved viewports. | All objectives; all external audiences |
| BRD-NFR-019 | Navigation, calls to action, forms, file controls, tables, acknowledgements, and policy content must remain usable on approved touch-screen mobile viewports. | All objectives; all external audiences |
| BRD-NFR-020 | Touch targets, spacing, text resizing, and reflow must meet applicable WCAG 2.2 Level AA criteria. | All objectives; all external audiences |
| BRD-NFR-021 | Mobile acceptance must cover complete site-assessment, support, and direct job-application journeys that are included at launch. | BRD-BO-001, BRD-BO-003, BRD-BO-004; all direct form users |

## 28. Performance requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-NFR-022 | Performance acceptance must use representative pages and journeys with an approved profile representative of typical Philippine mobile connections and mid-range mobile devices. | All objectives; mobile audiences |
| BRD-NFR-023 | Quantitative launch thresholds for loading, responsiveness, and visual stability must be approved before implementation acceptance and recorded with the test profile. | All objectives; website product owner |
| BRD-NFR-024 | Media guidance must define reviewable dimensions, file size, format, and usage limits that protect mobile performance. | All objectives; content owners and mobile audiences |
| BRD-NFR-025 | Public pages must avoid unnecessary third-party resources for primary content or critical journeys. | All objectives; all external audiences |
| BRD-NFR-026 | Performance validation must cover Home, a company page, a solution page, Portfolio, Careers, Support, and included critical forms on mobile and desktop profiles. | All objectives; all external audiences |
| BRD-NFR-027 | The website must support current versions of modern Chrome, Edge, Safari, and Firefox at the agreed test date, with the support policy recorded for review. | All objectives; all external audiences |

## 29. Privacy and data-retention requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-NFR-028 | Personal-data processing must comply with the Philippine Data Privacy Act, approved organizational policy, and final privacy or legal review. | All objectives; all data subjects |
| BRD-NFR-029 | Each collection point must state the approved purpose and collect only data necessary for that purpose. | All objectives; all form users |
| BRD-NFR-030 | Each form must provide the approved Privacy Notice or relevant summary and link before personal information is submitted. | All objectives; all form users |
| BRD-NFR-031 | Consent must be requested and recorded only when consent is the approved or legally required processing basis; acknowledgement of a notice or another approved lawful basis may apply instead. | All objectives; all form users |
| BRD-NFR-032 | Access to submissions and attachments must be limited by role and purpose in the website or approved destination that stores them. | All objectives; form users and functional owners |
| BRD-NFR-033 | An approved retention and deletion rule must apply to each submission type based on where the selected implementation stores the data. | All objectives; privacy and functional owners |
| BRD-NFR-034 | The website must provide the approved route for applicable data-subject requests without exposing request details publicly. | All objectives; all data subjects |

## 30. Security and abuse-prevention requirements

| ID | Requirement | Trace |
|---|---|---|
| BRD-NFR-035 | All public and administrative website traffic must use HTTPS. | All objectives; all audiences |
| BRD-NFR-036 | Website-hosted forms and uploads must be validated and handled securely using approved type, size, storage, access, and delivery controls. | BRD-BO-001, BRD-BO-003, BRD-BO-004; form users and owners |
| BRD-NFR-037 | Spam and automated-abuse controls must protect website-hosted forms without creating an inaccessible or disproportionate barrier. | All objectives; all direct form users |
| BRD-NFR-038 | Access to website administration, deployment, content repositories, and directly stored submissions must use individual accountability and authorization appropriate to the selected design. | All objectives; content and technical owners |
| BRD-NFR-039 | Secrets, credentials, private endpoints, internal architecture, network details, and sensitive operating procedures must not appear in public content, client output, repositories, analytics, or public errors. | All objectives; all audiences |
| BRD-NFR-040 | Public errors must avoid exposing sensitive implementation or personal information and provide sufficient controlled information for authorized diagnosis. | All objectives; all audiences and technical owner |

## 31. Availability backup and recovery expectations

| ID | Requirement | Trace |
|---|---|---|
| BRD-NFR-041 | The public website, published content, and configuration must be recoverable according to the selected hosting, repository, deployment, and storage design. | All objectives; business and technical owners |
| BRD-NFR-042 | Submissions directly stored by the website must be recoverable according to approved retention and recovery rules for that storage design. | BRD-BO-001, BRD-BO-003, BRD-BO-004; form users and owners |
| BRD-NFR-043 | When submissions are delivered to and retained only by an approved external service, that service owns the applicable retention, recovery, and availability controls, subject to vendor review. | BRD-BO-001, BRD-BO-003, BRD-BO-004; functional and technical owners |
| BRD-NFR-044 | Website-hosted form unavailability or delivery failure must have an approved fallback contact path that preserves separation among sales, support, recruitment, and general contact. | All objectives; form users and functional owners |

No custom backup, recovery, or availability interface is required inside the website.

## 32. External integration considerations

External products remain undecided. Approved services may fulfill delivery, acknowledgement, storage, status, retention, or recovery needs without being recreated by the corporate website.

| Consideration | Boundary |
|---|---|
| Business-development destination | Site-assessment inquiries may go to approved email, CRM, form, or workflow services. No CRM or lead-management system is selected. |
| Support destination | Support requests may go to approved email, support, form, or workflow services. Facebook Messenger remains supplementary. |
| Recruitment destination | Careers may use instructions, email, a website form, or an external application service. No ATS is selected. |
| Content | Codex and Git, structured files, a later CMS, or a hybrid model may be used. No CMS is selected. |
| Analytics | Any analytics service needs approved event definitions, privacy controls, access rules, and retention. |
| Maps and locations | Any mapping service needs content, privacy, performance, accessibility, and commercial review. |
| Social channels | Links need verified official accounts. Social channels do not replace required visitor journeys. |
| ExitPass | ExitPass may be described as a parking technology platform after content approval. It is not assumed to host, manage, or power the corporate website. |

## 33. Assumptions

| ID | Assumption | Validation needed |
|---|---|---|
| ASM-001 | One group website will represent both Pro-P and Park Secure. | Executive sponsor approval |
| ASM-002 | The five proposed solution categories are suitable for initial customer-facing organization. | Business development and operations review |
| ASM-003 | The eight proposed industry categories are discovery categories, not claims of experience. | Business development review |
| ASM-004 | Functional owners will provide approved destinations for sales, support, recruitment, and general contact. | Owner assignment and confirmation |
| ASM-005 | English is the initial content language unless another language requirement is approved. | Audience and content decision |
| ASM-006 | Codex and Git-managed content is acceptable for launch unless a different content approach is separately selected. | Website product and content owner approval |

## 34. Dependencies

| ID | Dependency | Needed for |
|---|---|---|
| DEP-001 | Approved client list and project information | Portfolio, project profiles, industry evidence, and operating-company attribution |
| DEP-002 | Publication approval for client names, logos, testimonials, images, details, and results | Public portfolio and proof content |
| DEP-003 | Verified legal names, company profiles, contacts, and representatives | Company pages and legal accuracy |
| DEP-004 | Approved group and company brand assets, rules, and image rights | Corporate identity |
| DEP-005 | Verified solution capability content and subject owners | Solution and sales content |
| DEP-006 | Approved form destinations and a selected method for detecting failed delivery | Launch of website-hosted forms |
| DEP-007 | Privacy and legal decisions for notices, processing basis, consent where applicable, fields, retention, data-subject requests, and optional Terms of Use | Personal-data collection and legal content |
| DEP-008 | Recruitment-approved openings, application route, applicant data, privacy wording, and file rules | Careers and direct applications |
| DEP-009 | Support-approved FAQs, categories, facility references, urgent guidance, destination, and optional fields | Customer Support |
| DEP-010 | Approved analytics definitions, privacy controls, and success targets | Measurement acceptance |
| DEP-011 | Approved performance test profile and thresholds | Performance acceptance |
| DEP-012 | Selected hosting, repository, deployment, form delivery, and storage design with proportionate recovery controls | Operational acceptance |

## 35. Constraints

- The preference to launch within approximately one month is a planning constraint, not a fixed schedule or contractual deadline.
- Delivery uses short, Codex-driven, browser-reviewed iterations and depends on timely content and approvals.
- The repository has an unborn `main` branch with no baseline commit.
- This BRD revision authorizes documentation only, not website implementation.
- No technology stack, CMS, hosting provider, cloud platform, CRM, support platform, or applicant-tracking product is selected.
- Missing evidence limits publishable claims and portfolio scope.
- Pro-P and Park Secure require equal treatment even if source material for one is temporarily more complete.
- Initial scope excludes or conditions the capabilities in section 11.

## 36. Risks

| ID | Risk | Effect | Mitigation |
|---|---|---|---|
| RSK-001 | Client or project inputs arrive late or without publication rights. | Portfolio and proof content cannot launch as intended. | Publish only approved records and do not invent substitutes. |
| RSK-002 | Source material is more complete for one company. | The website may imply unequal status. | Use equivalent structures and approve balanced publication. |
| RSK-003 | Capability language is not verified. | Services may be misrepresented. | Require a named subject owner before publication. |
| RSK-004 | Form delivery destinations or failure monitoring are not ready. | Valid inquiries may be lost. | Select and test each destination and failure-detection method before enabling the form. |
| RSK-005 | Forms collect unnecessary personal data or use incorrect consent wording. | Privacy and trust risk. | Minimize fields and obtain privacy or legal approval for notice and processing basis. |
| RSK-006 | Optional external services create accessibility, privacy, security, or availability gaps. | Critical journeys may fail or become noncompliant. | Review and test the complete handoff before approval. |
| RSK-007 | Media-heavy content harms mobile performance. | Poor experience on typical Philippine mobile connections. | Apply media guidance and test representative mobile journeys. |
| RSK-008 | Conditional back-office features enter launch scope without approval. | The corporate website becomes over-scoped and delayed. | Enforce section 11 and require explicit change approval. |
| RSK-009 | The one-month preference is treated as a fixed deadline. | Quality or approval controls may be bypassed. | Launch only when acceptance criteria are met. |

## 37. Open decisions

| ID | Decision needed | Owner | Required by |
|---|---|---|---|
| DEC-001 | Confirm executive sponsor, website product owner, content owner, and formal approvers. | Pro Parking Group | Requirements approval |
| DEC-002 | Approve solution labels and verified capability content. | Business development and operations | Content design |
| DEC-003 | Approve industry labels and wording that avoids unsupported experience claims. | Business development | Content design |
| DEC-004 | Provide client and project data, attribution, source evidence, and publication rights. | Client or project owners | Portfolio publication |
| DEC-005 | Approve brand assets, naming, legal identity, and equivalent company content. | Executive and company representatives | Design and content |
| DEC-006 | Approve site-assessment fields, destination, acknowledgement, and delivery-failure detection. | Business development and technical owner | Form launch |
| DEC-007 | Approve support FAQs, facility data, fields, guidance, destination, and delivery-failure detection. | Customer support and technical owner | Support launch |
| DEC-008 | Choose the careers application route and approve job, resume, privacy, acknowledgement, and closure rules. | Recruitment and privacy owner | Careers launch |
| DEC-009 | Approve Privacy Notice, processing basis, consent use, retention, data-subject route, and whether separate Terms of Use are needed. | Privacy or legal owner | Personal-data collection |
| DEC-010 | Approve analytics, performance, availability, and recovery targets appropriate to the selected design. | Product and technical owners | Non-functional acceptance |
| DEC-011 | Confirm the launch content approach: Codex and Git, structured files, an approved CMS, or hybrid. | Website product and content owner | Implementation start |
| DEC-012 | Decide whether optional uploads, Messenger, maps, social links, or public ExitPass content are included at launch. | Relevant owners | Launch scope |

## 38. Acceptance criteria

| ID | Acceptance criterion | Verifies |
|---|---|---|
| BRD-AC-001 | Business review confirms Home is B2B-first and Request a Site Assessment is the primary conversion. | BRD-BO-001, BRD-BR-001, BRD-FR-001, BRD-FR-021 |
| BRD-AC-002 | Side-by-side review confirms Pro-P and Park Secure have equivalent structure, prominence, content opportunity, and visual treatment. | BRD-BO-002, BRD-BR-003 to BRD-BR-005, BRD-FR-003, BRD-FR-005 to BRD-FR-007 |
| BRD-AC-003 | Content review finds no invented differences, unsupported hierarchy, or unverified corporate, client, industry, project, or performance claims. | BRD-BR-004 to BRD-BR-006, BRD-BR-011 to BRD-BR-015, BRD-FR-010 to BRD-FR-012, BRD-FR-047 to BRD-FR-050 |
| BRD-AC-004 | Navigation, logo behavior, header action, footer links, and launch sitemap match the approved information architecture on mobile and desktop. | BRD-FR-020 to BRD-FR-024 |
| BRD-AC-005 | A valid site-assessment inquiry requires only the approved concise fields, accepts optional details without forcing them, displays success, reaches the approved destination, protects data, and has detectable delivery failure. | BRD-FR-025 to BRD-FR-033 |
| BRD-AC-006 | Review confirms the launch website does not require custom lead ownership, statuses, dashboards, routing administration, retry interfaces, or reference tracking. | Section 11; BRD-FR-033, BRD-FR-054 |
| BRD-AC-007 | Customer Support provides approved FAQs, categories, urgent guidance, required basic data, optional incident references, success acknowledgement, delivery, protection, and detectable failure. | BRD-FR-014, BRD-FR-034 to BRD-FR-040 |
| BRD-AC-008 | Review confirms the launch website does not require custom support references, ownership, statuses, facility routing, dashboards, or customer tracking, and Messenger is supplementary if present. | Section 11; BRD-FR-038, BRD-FR-040 |
| BRD-AC-009 | Careers publishes approved current openings and uses the approved application route; any direct form handles resume, privacy, acknowledgement, delivery, and failure detection, and expired jobs are closed or removed. | BRD-FR-013, BRD-FR-041 to BRD-FR-046 |
| BRD-AC-010 | Review confirms the launch website does not require custom applicant references, statuses, dashboards, ATS workflows, or talent-pool workflows. | Section 11; BRD-FR-042, BRD-FR-045 |
| BRD-AC-011 | Sales, support, recruitment, and general contact remain distinct in page purpose, form or handoff, privacy context, and destination. | BRD-BR-010, BRD-FR-016, BRD-FR-051 to BRD-FR-058 |
| BRD-AC-012 | Content can be maintained and released through Codex and Git or another approved approach, with attributable reversible changes and proportionate approval, without requiring browser CMS functions. | BRD-BR-016, BRD-CMS-001 to BRD-CMS-009 |
| BRD-AC-013 | Search titles, descriptions, headings, crawl controls, sitemap, supported structured data, and social previews pass approved validation. | BRD-NFR-006 to BRD-NFR-011 |
| BRD-AC-014 | Accessibility evaluation of representative pages and all included critical journeys confirms the WCAG 2.2 Level AA target, subject to explicitly approved exceptions. | BRD-NFR-012 to BRD-NFR-021 |
| BRD-AC-015 | Performance tests cover the required pages and included journeys on approved Philippine mobile and desktop profiles and supported browsers, meeting approved thresholds. | BRD-NFR-022 to BRD-NFR-027 |
| BRD-AC-016 | Privacy or legal review approves the Privacy Notice, purposes, fields, processing basis, consent only where applicable, access, retention, data-subject route, and the decision on Terms of Use. | BRD-FR-018, BRD-FR-019, BRD-FR-026, BRD-NFR-028 to BRD-NFR-034 |
| BRD-AC-017 | Security review confirms HTTPS, secure direct form and file handling, accessible abuse controls, accountable access, safe public errors, and no exposed sensitive system details. | BRD-BR-008, BRD-NFR-035 to BRD-NFR-040 |
| BRD-AC-018 | Recovery review confirms that the website, content, configuration, and any directly stored submissions are recoverable under the selected design, while external services own controls for data retained only by them. | BRD-NFR-041 to BRD-NFR-044 |
| BRD-AC-019 | Analytics validation confirms approved measurements work without collecting submission payloads or exceeding approved privacy controls. | BRD-NFR-001 to BRD-NFR-005 |
| BRD-AC-020 | Scope review confirms the product is a corporate website, future or conditional capabilities remain outside launch unless separately approved, no implementation platform is selected, and no rigid four-week plan is introduced. | Sections 10, 11, 32, and 35 |

## 39. Requirements traceability index

Every formal requirement has a unique identifier. Each objective, business rule, functional requirement, content-management requirement, and non-functional requirement has an adjacent Trace entry. Acceptance criteria identify the requirements or scope sections they verify.

### Identifier summary

| Category | Identifier range | Count | Primary sections |
|---|---:|---:|---|
| Business objectives | BRD-BO-001 to BRD-BO-004 | 4 | 5 |
| Business rules | BRD-BR-001 to BRD-BR-016 | 16 | 15 |
| Functional requirements | BRD-FR-001 to BRD-FR-058 | 58 | 13, 14, 16 to 19, 22, 23 |
| Content-management requirements | BRD-CMS-001 to BRD-CMS-009 | 9 | 20 |
| Non-functional requirements | BRD-NFR-001 to BRD-NFR-044 | 44 | 24 to 31 |
| Acceptance criteria | BRD-AC-001 to BRD-AC-020 | 20 | 38 |

### Objective traceability

| Objective | Principal requirement coverage | Acceptance coverage |
|---|---|---|
| BRD-BO-001, qualified opportunities | BRD-BR-001, BRD-BR-005, BRD-BR-007, BRD-BR-010 to BRD-BR-014; BRD-FR-001, BRD-FR-008 to BRD-FR-012, BRD-FR-017, BRD-FR-021 to BRD-FR-033, BRD-FR-047 to BRD-FR-058; applicable CMS and NFR requirements | BRD-AC-001, BRD-AC-003 to BRD-AC-006, BRD-AC-011 to BRD-AC-020 |
| BRD-BO-002, corporate credibility | BRD-BR-003 to BRD-BR-009, BRD-BR-011, BRD-BR-013 to BRD-BR-016; BRD-FR-003 to BRD-FR-012, BRD-FR-015 to BRD-FR-024, BRD-FR-047 to BRD-FR-050; applicable CMS and NFR requirements | BRD-AC-002 to BRD-AC-004, BRD-AC-011 to BRD-AC-020 |
| BRD-BO-003, motorist support | BRD-BR-002, BRD-BR-010, BRD-BR-012; BRD-FR-002, BRD-FR-014 to BRD-FR-016, BRD-FR-025 to BRD-FR-028, BRD-FR-034 to BRD-FR-040, BRD-FR-051 to BRD-FR-058; applicable CMS and NFR requirements | BRD-AC-007, BRD-AC-008, BRD-AC-011 to BRD-AC-020 |
| BRD-BO-004, recruitment | BRD-BR-010, BRD-BR-012; BRD-FR-002, BRD-FR-013, BRD-FR-015, BRD-FR-025 to BRD-FR-028, BRD-FR-041 to BRD-FR-046, BRD-FR-051 to BRD-FR-058; applicable CMS and NFR requirements | BRD-AC-009 to BRD-AC-020 |

### Audience traceability

| Audience need | Principal requirement coverage |
|---|---|
| AUD-OWNER and AUD-OPERATOR | B2B pages, navigation, verified proof, and concise site assessment in BRD-FR-001 to BRD-FR-012, BRD-FR-017, BRD-FR-021 to BRD-FR-033, and BRD-FR-047 to BRD-FR-050 |
| AUD-CLIENT | Accurate company, contact, and approved portfolio content in BRD-FR-004 to BRD-FR-007, BRD-FR-011, BRD-FR-016, and BRD-FR-047 to BRD-FR-050 |
| AUD-MOTORIST | Visible support, FAQs, guidance, and simple contact in BRD-FR-002, BRD-FR-014, BRD-FR-015, and BRD-FR-034 to BRD-FR-040 |
| AUD-APPLICANT | Current openings and proportionate application routes in BRD-FR-013 and BRD-FR-041 to BRD-FR-046 |
| AUD-ADMIN | Implementation-neutral governed content in BRD-BR-016 and BRD-CMS-001 to BRD-CMS-009 |
| AUD-BD | Concise inquiry capture and reliable delivery in BRD-FR-029 to BRD-FR-033 |
| AUD-SUPPORT | Useful support information and reliable delivery in BRD-FR-034 to BRD-FR-040 |
| AUD-RECRUIT | Job publication, approved application route, privacy, and closure in BRD-FR-041 to BRD-FR-046 |

### Baseline change control

After approval, changes affecting objectives, launch scope, company treatment, public claims, collected data, privacy, security, accessibility, acceptance criteria, or future or conditional capabilities will receive documented review. Implementation choices are documented separately and do not expand this business baseline without approval.
