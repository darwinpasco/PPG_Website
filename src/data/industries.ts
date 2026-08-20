import type { SolutionSlug } from './solutions';

export const industrySlugs = [
  'shopping-malls-retail',
  'office-buildings',
  'hotels-hospitality',
  'residential-mixed-use',
  'hospitals-healthcare',
  'transport-terminals',
  'open-parking-facilities',
  'events-high-volume-destinations',
] as const;

export type IndustrySlug = (typeof industrySlugs)[number];

export interface RelevantIndustrySolution {
  slug: SolutionSlug;
  context: string;
}

export interface Industry {
  slug: IndustrySlug;
  name: string;
  cardSummary: string;
  cardLinkLabel: string;
  introduction: string;
  operationalPriorities: readonly string[];
  assessmentPoints: readonly string[];
  relevantSolutions: readonly RelevantIndustrySolution[];
  seoTitle: string;
  seoDescription: string;
}

export const industries: readonly Industry[] = [
  {
    slug: 'shopping-malls-retail',
    name: 'Shopping malls and retail developments',
    cardSummary:
      'Parking must accommodate changing demand across trading hours, weekends, promotions, deliveries, and tenant activity.',
    cardLinkLabel: 'View retail parking requirements',
    introduction:
      'Retail parking must respond to demand that changes across the trading day while keeping customer, tenant, employee, delivery, and service traffic understandable at entry, payment, and exit.',
    operationalPriorities: [
      'Plan entry and exit handling for changing weekday, weekend, holiday, and promotion traffic.',
      'Distinguish customer parking from tenant and employee parking arrangements.',
      'Explain validation or parking-benefit rules where applicable, payment choices, and where customers can get assistance.',
      'Coordinate delivery and service-vehicle movements with customer traffic and the property operating schedule.',
      'Define the revenue and operational reports needed by property management.',
    ],
    assessmentPoints: [
      'Peak periods, lane capacity, queue locations, and vehicle circulation through the property',
      'Customer, tenant, employee, delivery, and service-vehicle access requirements',
      'Validation rules, payment channels, customer guidance, and exception handling',
      'Delivery routes and times, site supervision, and management reporting needs',
    ],
    relevantSolutions: [
      {
        slug: 'parking-management-operations',
        context: 'Coordinate daily site teams, lane activity, customer assistance, operating controls, and reporting.',
      },
      {
        slug: 'cashierless-parking-digital-payments',
        context: 'Plan payment choices and assisted processes around customer demand and site operations.',
      },
      {
        slug: 'parking-systems-equipment',
        context: 'Assess entry, exit, validation, payment, and lane equipment against the site layout.',
      },
      {
        slug: 'command-center-revenue-intelligence',
        context: 'Organize site, equipment, payment, exception, and revenue reporting for operating review.',
      },
    ],
    seoTitle: 'Retail Parking Requirements | Pro Parking Group',
    seoDescription:
      'Review parking requirements for shopping malls and retail developments, including demand changes, traffic flow, payments, assistance, deliveries, and reporting.',
  },
  {
    slug: 'office-buildings',
    name: 'Office buildings',
    cardSummary:
      'Office parking must manage employee access, visitor parking, recurring users, and weekday arrival and departure peaks.',
    cardLinkLabel: 'View office parking requirements',
    introduction:
      'Office parking must distinguish recurring users from visitors and contractors while managing weekday peaks, allocations, after-hours access, and reporting across one or more tenants.',
    operationalPriorities: [
      'Define access arrangements for employees, tenants, contractors, and visitors.',
      'Manage recurring parking users, parking allocations, and shared capacity.',
      'Prepare lane operations and visitor guidance for weekday arrival and departure peaks.',
      'Set clear payment, after-hours assistance, and reporting procedures.',
      'Coordinate parking rules across multiple tenants where the property requires it.',
    ],
    assessmentPoints: [
      'How recurring users, visitors, contractors, and other drivers are identified and directed',
      'Parking allocations, shared spaces, waiting areas, and visitor approval procedures',
      'Peak arrival and departure periods, lane capacity, and queue locations',
      'After-hours access, payment arrangements, exception handling, and reporting needs',
    ],
    relevantSolutions: [
      {
        slug: 'parking-management-operations',
        context: 'Define daily staffing, visitor assistance, lane procedures, escalation, and tenant coordination.',
      },
      {
        slug: 'cashierless-parking-digital-payments',
        context: 'Provide payment options for visitors and other paid users while retaining assistance when needed.',
      },
      {
        slug: 'parking-systems-equipment',
        context: 'Plan access, entry, exit, payment, and vehicle-identification equipment for the property.',
      },
      {
        slug: 'command-center-revenue-intelligence',
        context: 'Support review of site activity, equipment status, payments, exceptions, and operating reports.',
      },
    ],
    seoTitle: 'Office Building Parking Requirements | Pro Parking Group',
    seoDescription:
      'Review office parking requirements for employees, tenants, visitors, recurring users, weekday peaks, allocations, after-hours operations, payments, and reporting.',
  },
  {
    slug: 'hotels-hospitality',
    name: 'Hotels and hospitality properties',
    cardSummary:
      'Hotel parking must serve overnight guests, visitors, events, restaurants, employees, deliveries, and valet operations where offered.',
    cardLinkLabel: 'View hotel parking requirements',
    introduction:
      'Hotel parking must support overnight guests, short-stay visitors, restaurants, events, employees, deliveries, and guest arrival areas across continuous operating hours.',
    operationalPriorities: [
      'Keep guest drop-off and pickup areas clear and easy to understand.',
      'Coordinate overnight guests, short-stay visitors, employees, service vehicles, and valet operations where offered.',
      'Explain parking validation where applicable, payment options, and assistance procedures.',
      'Maintain practical parking support across continuous operating hours.',
      'Manage delivery and service-vehicle access without confusing guest circulation.',
    ],
    assessmentPoints: [
      'Guest, visitor, employee, event, restaurant, delivery, and service-vehicle parking requirements',
      'Drop-off, pickup, waiting, and valet operating points where valet service is offered',
      'Overnight parking rules, validation arrangements, payment channels, and customer instructions',
      'Staffing, incident handling, deliveries, and assistance across the property operating hours',
    ],
    relevantSolutions: [
      {
        slug: 'parking-management-operations',
        context: 'Coordinate guest assistance, site teams, lane activity, incidents, and continuous operating procedures.',
      },
      {
        slug: 'cashierless-parking-digital-payments',
        context: 'Plan payment choices that suit overnight guests, short-stay visitors, and assisted transactions.',
      },
      {
        slug: 'parking-systems-equipment',
        context: 'Assess entry, exit, payment, validation, and lane equipment against guest and service traffic.',
      },
      {
        slug: 'consultancy-technical-services',
        context: 'Review circulation, operating processes, equipment needs, and implementation priorities.',
      },
    ],
    seoTitle: 'Hotel and Hospitality Parking Requirements | Pro Parking Group',
    seoDescription:
      'Review hotel parking requirements for overnight guests, visitors, events, restaurants, employees, deliveries, valet operations, payments, and assistance.',
  },
  {
    slug: 'residential-mixed-use',
    name: 'Residential and mixed-use developments',
    cardSummary:
      'Residential and mixed-use parking must separate resident, tenant, visitor, retail, and service-vehicle access.',
    cardLinkLabel: 'View residential and mixed-use parking requirements',
    introduction:
      'Residential and mixed-use parking must manage long-stay resident and tenant vehicles alongside visitors, retail or office users, deliveries, and service access.',
    operationalPriorities: [
      'Define access permissions for residents, tenants, visitors, retail or office users, and service vehicles.',
      'Manage allocated and shared spaces for long-stay and short-stay use.',
      'Provide clear visitor guidance and a practical process for parking exceptions.',
      'Coordinate delivery and service-vehicle movements with resident and commercial access.',
      'Maintain after-hours parking assistance and escalation procedures.',
    ],
    assessmentPoints: [
      'Allocated, shared, resident, tenant, visitor, retail, and office parking rules',
      'How access permissions are issued, changed, checked, and withdrawn',
      'Visitor, delivery, move-in, move-out, and service-vehicle routes and operating periods',
      'Long-stay vehicles, after-hours exceptions, customer assistance, and management reporting',
    ],
    relevantSolutions: [
      {
        slug: 'parking-management-operations',
        context: 'Apply site procedures for access, visitors, shared spaces, incidents, assistance, and escalation.',
      },
      {
        slug: 'parking-systems-equipment',
        context: 'Plan entry, exit, credential, vehicle-identification, and lane equipment around access rules.',
      },
      {
        slug: 'command-center-revenue-intelligence',
        context: 'Organize site, equipment, exception, and payment information needed for operating review.',
      },
      {
        slug: 'consultancy-technical-services',
        context: 'Review mixed-use circulation, allocations, operating models, system needs, and transitions.',
      },
    ],
    seoTitle: 'Residential and Mixed-Use Parking Requirements | Pro Parking Group',
    seoDescription:
      'Review residential and mixed-use parking requirements for residents, tenants, visitors, shared spaces, deliveries, access permissions, and after-hours support.',
  },
  {
    slug: 'hospitals-healthcare',
    name: 'Hospitals and healthcare facilities',
    cardSummary:
      'Healthcare parking must support patients, visitors, staff shifts, accessible spaces, drop-off areas, and continuous operations.',
    cardLinkLabel: 'View healthcare parking requirements',
    introduction:
      'Healthcare parking must remain understandable for patients and visitors while supporting staff shifts, accessible spaces, drop-off and pickup activity, service access, and continuous operation.',
    operationalPriorities: [
      'Provide clear parking and wayfinding instructions for patients and visitors.',
      'Plan for staff shift changes and parking activity throughout continuous operating hours.',
      'Keep accessible spaces and patient drop-off and pickup areas identifiable and usable.',
      'Provide payment guidance and assistance for customers who need help.',
      'Keep parking circulation from obstructing designated emergency and service access.',
    ],
    assessmentPoints: [
      'Patient, visitor, staff, service, and shift-change demand across the operating day',
      'Accessible spaces, patient drop-off and pickup areas, waiting points, and wayfinding',
      'Payment locations, instructions, assistance needs, and exception procedures',
      'Vehicle circulation and parking controls around designated emergency and service access',
    ],
    relevantSolutions: [
      {
        slug: 'parking-management-operations',
        context: 'Coordinate site teams, customer assistance, lane activity, incidents, and continuous procedures.',
      },
      {
        slug: 'cashierless-parking-digital-payments',
        context: 'Provide payment choices while retaining guidance and assisted processes for customers.',
      },
      {
        slug: 'parking-systems-equipment',
        context: 'Assess entry, exit, payment, and lane equipment against circulation and customer needs.',
      },
      {
        slug: 'consultancy-technical-services',
        context: 'Review traffic flow, operating processes, equipment planning, and implementation needs.',
      },
    ],
    seoTitle: 'Hospital and Healthcare Parking Requirements | Pro Parking Group',
    seoDescription:
      'Review healthcare parking requirements for patients, visitors, staff shifts, accessible spaces, drop-off areas, payment assistance, and continuous operations.',
  },
  {
    slug: 'transport-terminals',
    name: 'Transport terminals',
    cardSummary:
      'Terminal parking must coordinate private vehicles, passenger drop-off and pickup, public transport connections, waiting areas, and related mobility services.',
    cardLinkLabel: 'View terminal parking requirements',
    introduction:
      'Terminal parking must coordinate private vehicles, passenger drop-off and pickup, short-stay and long-stay parking, public transport connections, waiting areas, and related mobility services.',
    operationalPriorities: [
      'Separate parking, passenger drop-off and pickup, public transport, and service-vehicle movements where the site allows.',
      'Plan for high-volume arrival and departure periods and the queues they may create.',
      'Distinguish short-stay, long-stay, waiting, and restricted areas.',
      'Provide clear directions between parking, passenger areas, and public transport connections.',
      'Present instructions for related mobility services, including shuttle services where a site offers them.',
    ],
    assessmentPoints: [
      'Vehicle types, passenger activity, traffic flows, and demand periods across the terminal',
      'Short-stay, long-stay, pickup, drop-off, waiting, public transport, and restricted-area rules',
      'Entry, exit, payment, customer-assistance, wayfinding, and queue-management needs',
      'The site information visitors need for any related mobility service offered at the property',
    ],
    relevantSolutions: [
      {
        slug: 'parking-management-operations',
        context: 'Coordinate site teams, vehicle flows, customer guidance, incidents, procedures, and escalation.',
      },
      {
        slug: 'parking-systems-equipment',
        context: 'Plan lane, entry, exit, payment, and vehicle-identification equipment for terminal circulation.',
      },
      {
        slug: 'command-center-revenue-intelligence',
        context: 'Support review of site status, equipment, payment channels, incidents, and operating reports.',
      },
      {
        slug: 'consultancy-technical-services',
        context: 'Assess circulation, operating models, systems, implementation, and transition requirements.',
      },
    ],
    seoTitle: 'Transport Terminal Parking Requirements | Pro Parking Group',
    seoDescription:
      'Review terminal parking requirements for private vehicles, passenger pickup and drop-off, short- and long-stay use, circulation, waiting areas, and mobility connections.',
  },
  {
    slug: 'open-parking-facilities',
    name: 'Open parking facilities',
    cardSummary:
      'Open parking facilities require clear circulation, suitable equipment placement, lighting, weather planning, and practical site supervision.',
    cardLinkLabel: 'View open parking facility requirements',
    introduction:
      'Open parking facilities depend on a clear site layout because entrances, exits, circulation, equipment, staffing positions, and customer assistance may be exposed to weather and site boundaries.',
    operationalPriorities: [
      'Define entry, exit, internal circulation, and pedestrian movement across the site.',
      'Choose equipment locations that account for lane geometry, weather exposure, power, and operating access.',
      'Identify lighting, perimeter, and access requirements for the property team to address.',
      'Consider how the surface and drainage conditions affect circulation, equipment, and operating positions.',
      'Plan staffing, customer assistance, payment handling, and reporting for the site.',
    ],
    assessmentPoints: [
      'Entrance, exit, internal circulation, pedestrian routes, queues, and possible conflict points',
      'Equipment locations, lane geometry, power, communications, shelter, and maintenance access',
      'Weather exposure, lighting needs, site boundaries, surface conditions, and drainage constraints',
      'Staffing positions, customer-assistance points, payment channels, and reporting requirements',
    ],
    relevantSolutions: [
      {
        slug: 'parking-management-operations',
        context: 'Define site supervision, staffing, lane activity, customer assistance, payment, and escalation procedures.',
      },
      {
        slug: 'parking-systems-equipment',
        context: 'Assess lane equipment, payment devices, cameras, placement, support access, and maintenance needs.',
      },
      {
        slug: 'command-center-revenue-intelligence',
        context: 'Organize available site, equipment, payment, exception, and revenue information for review.',
      },
      {
        slug: 'consultancy-technical-services',
        context: 'Review layout considerations, traffic flow, operating models, equipment planning, and implementation.',
      },
    ],
    seoTitle: 'Open Parking Facility Requirements | Pro Parking Group',
    seoDescription:
      'Review open parking facility requirements for circulation, equipment placement, weather, lighting, surface conditions, access, staffing, payments, and reporting.',
  },
  {
    slug: 'events-high-volume-destinations',
    name: 'Events and high-volume destinations',
    cardSummary:
      'Event parking must handle concentrated arrival and departure periods, temporary traffic plans, staff deployment, and clear customer guidance.',
    cardLinkLabel: 'View event parking requirements',
    introduction:
      'Event parking must prepare for concentrated arrivals and departures, temporary circulation arrangements, queue buildup, payment activity, and customer questions within a limited operating period.',
    operationalPriorities: [
      'Prepare temporary traffic and parking arrangements within the facility for expected arrival and departure periods.',
      'Position parking staff, directional signs, and customer guidance where drivers need to make decisions.',
      'Plan payment handling and queue management for concentrated demand.',
      'Coordinate parking activity, access restrictions, and escalation with property operations.',
      'Define contingency procedures for equipment, payment, traffic, and customer-assistance issues.',
    ],
    assessmentPoints: [
      'Expected vehicle demand, arrival windows, departure patterns, and parking capacity',
      'Temporary lanes, holding areas, pedestrian routes, restricted areas, and queue locations',
      'Staff positions, directional signs, payment points, customer instructions, and assistance needs',
      'Property coordination, incident escalation, equipment continuity, and operating contingencies',
    ],
    relevantSolutions: [
      {
        slug: 'parking-management-operations',
        context: 'Plan staff deployment, temporary procedures, lane activity, customer guidance, and escalation.',
      },
      {
        slug: 'cashierless-parking-digital-payments',
        context: 'Review payment choices and assisted processes for concentrated arrival or departure demand.',
      },
      {
        slug: 'parking-systems-equipment',
        context: 'Assess how permanent or approved temporary equipment supports entry, payment, and exit activity.',
      },
      {
        slug: 'consultancy-technical-services',
        context: 'Review traffic flow, temporary operating arrangements, equipment needs, and contingency planning.',
      },
    ],
    seoTitle: 'Event and High-Volume Parking Requirements | Pro Parking Group',
    seoDescription:
      'Review event parking requirements for concentrated arrivals and departures, temporary traffic plans, staff deployment, customer guidance, payments, queues, and contingencies.',
  },
];

export const industriesMeta = {
  title: 'Parking Requirements by Property Type | Pro Parking Group',
  description:
    'Review parking requirements for retail, office, hospitality, residential, healthcare, transport, open parking, and high-volume destinations.',
  eyebrow: 'Industries',
  heading: 'Parking requirements by property type',
  introduction:
    'Traffic patterns, users, payment needs, access controls, and reporting requirements differ across properties. Select a property type to review its main parking considerations.',
} as const;

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
