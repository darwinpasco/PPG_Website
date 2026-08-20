import type { ImageMetadata } from 'astro';

import anprCamera from '../assets/images/equipment/anpr-camera.png';
import automatedPaymentMachine from '../assets/images/equipment/automated-payment-machine.png';
import barrierGate from '../assets/images/equipment/barrier-gate.png';
import entryExitManager from '../assets/images/equipment/entry-exit-manager.png';

export const solutionSlugs = [
  'parking-management-operations',
  'cashierless-parking-digital-payments',
  'parking-systems-equipment',
  'command-center-revenue-intelligence',
  'consultancy-technical-services',
] as const;

export type SolutionSlug = (typeof solutionSlugs)[number];

export interface EquipmentAsset {
  name: string;
  description: string;
  alt: string;
  image: ImageMetadata;
}

export interface Solution {
  slug: SolutionSlug;
  name: string;
  shortDescription: string;
  introduction: string;
  operationalNeeds: readonly string[];
  capabilities: readonly string[];
  propertyOwnerValue: readonly string[];
  widerOperation: string;
  propertyContexts: readonly string[];
  relatedSolutions: readonly SolutionSlug[];
  ctaText: string;
  seoTitle: string;
  seoDescription: string;
  equipment?: readonly EquipmentAsset[];
}

export const solutions: readonly Solution[] = [
  {
    slug: 'parking-management-operations',
    name: 'Parking Management and Operations',
    shortDescription:
      'Day-to-day site operations, staffing, traffic management, customer assistance, and operating controls for parking facilities.',
    introduction:
      'Parking Management and Operations covers the people, procedures, lane activity, customer assistance, and controls required to run a parking facility each day.',
    operationalNeeds: [
      'Align staffing and shift coverage with operating hours, traffic patterns, and the property operating model.',
      'Keep entry and exit lanes moving while customer concerns and equipment incidents are handled.',
      'Apply clear procedures for collections, handovers, escalation, and coordination with property management.',
      'Provide practical operating reports for site review and decision-making.',
    ],
    capabilities: [
      'Day-to-day site operations and site supervision',
      'Staffing plans and shift requirements based on the approved operating scope',
      'Traffic flow and lane management',
      'Customer assistance at entry, payment, and exit points',
      'Entry and exit incident handling and escalation',
      'Site operating procedures and shift handovers',
      'Collection and revenue-control processes',
      'Operating reports and coordination with the property management team',
    ],
    propertyOwnerValue: [
      'Defined responsibilities help the property team understand how daily parking issues are handled and escalated.',
      'Staffing, procedures, payment channels, and equipment can be coordinated around the needs of the property instead of managed as separate activities.',
    ],
    widerOperation:
      'The operating team connects customer activity with payment processes, equipment status, technical support, and management reporting. The required staffing model and procedures depend on the site assessment and approved scope.',
    propertyContexts: [
      'Shopping malls and retail developments',
      'Office buildings',
      'Hotels and hospitality properties',
      'Residential and mixed-use developments',
      'Hospitals and healthcare facilities',
      'Transport terminals',
      'Open parking facilities',
      'Events and high-volume destinations',
    ],
    relatedSolutions: [
      'parking-systems-equipment',
      'cashierless-parking-digital-payments',
      'command-center-revenue-intelligence',
    ],
    ctaText: 'Discuss your parking operation',
    seoTitle: 'Parking Management and Operations | Pro Parking Group',
    seoDescription:
      'Review parking site operations, staffing, traffic flow, customer assistance, revenue controls, reporting, and property-team coordination.',
  },
  {
    slug: 'cashierless-parking-digital-payments',
    name: 'Cashierless Parking and Digital Payments',
    shortDescription:
      'Payment options that reduce dependence on cashier lanes while preserving assisted and continuity processes when needed.',
    introduction:
      'Cashierless Parking and Digital Payments combines automated, web-based, and digital payment channels with the operating procedures needed to guide customers and prepare paid transactions for exit.',
    operationalNeeds: [
      'Offer payment choices that suit customer behavior and the property operating model.',
      'Reduce queues and dependence on dedicated cashier lanes where the site and approved implementation allow it.',
      'Help customers complete payment and understand what to do before approaching the exit lane.',
      'Maintain assisted and continuity procedures for exceptions, outages, or customers who need help.',
    ],
    capabilities: [
      'Automated payment options at the parking facility',
      'Web-based parking payment options',
      'Approved digital payment channels',
      'Customer payment guidance and on-site assistance when needed',
      'Payment confirmation and exit-readiness coordination',
      'Assisted payment and exception handling',
      'Continuity procedures for unavailable payment channels',
      'Operational monitoring and reporting for payment-channel activity',
    ],
    propertyOwnerValue: [
      'A suitable mix of payment channels can give customers more places to pay and reduce pressure on a single cashier point.',
      'Payment technology remains connected to customer assistance, exception handling, lane operations, and reporting.',
    ],
    widerOperation:
      'Cashierless operation does not automatically eliminate all personnel. Site teams may still support customers, manage exceptions, monitor equipment, and apply continuity procedures. The final channel mix depends on site conditions, available systems, and the approved implementation scope.',
    propertyContexts: [
      'Shopping malls and retail developments',
      'Office buildings',
      'Hotels and hospitality properties',
      'Residential and mixed-use developments',
      'Hospitals and healthcare facilities',
      'Transport terminals',
      'Open parking facilities',
      'Events and high-volume destinations',
    ],
    relatedSolutions: [
      'parking-management-operations',
      'parking-systems-equipment',
      'command-center-revenue-intelligence',
    ],
    ctaText: 'Review payment options for your property',
    seoTitle: 'Cashierless Parking and Digital Payments | Pro Parking Group',
    seoDescription:
      'Explore automated, web-based, and digital parking payment options with customer assistance, continuity procedures, and operating oversight.',
  },
  {
    slug: 'parking-systems-equipment',
    name: 'Parking Systems and Equipment',
    shortDescription:
      'Selection, deployment, integration, and support for barriers, entry and exit devices, payment terminals, cameras, and related parking systems.',
    introduction:
      'Parking Systems and Equipment covers the devices and technical planning that support vehicle entry, payment, validation, exit, and day-to-day site control.',
    operationalNeeds: [
      'Select equipment that fits lane layouts, traffic patterns, payment processes, and operating requirements.',
      'Plan deployment and integration without treating equipment as separate from site operations.',
      'Keep devices maintainable through preventive work, corrective support, and clear escalation.',
      'Prepare for replacement or upgrades as operating needs and supported technology change.',
    ],
    capabilities: [
      'Entry and exit devices and lane terminals',
      'Barrier gates and lane-control equipment',
      'Automatic number-plate recognition cameras',
      'Parking payment terminals and automated payment machines',
      'Equipment selection and site-fit assessment',
      'Deployment and integration planning',
      'Preventive maintenance and corrective technical support',
      'Replacement, modernization, and upgrade planning',
    ],
    propertyOwnerValue: [
      'Site-fit assessment helps the property evaluate equipment in relation to lane space, customer flow, payment processes, and operating support.',
      'Maintenance and upgrade planning can reduce avoidable disruption and clarify how equipment issues will be handled.',
    ],
    widerOperation:
      'Equipment is one part of the parking operation. Its effectiveness depends on lane design, operating procedures, customer guidance, payment channels, monitoring, maintenance, and coordination with the property team.',
    propertyContexts: [
      'New parking facilities requiring system planning',
      'Existing facilities preparing equipment replacement or modernization',
      'Properties adding payment channels or changing their operating model',
      'Multi-lane facilities that require coordinated entry and exit controls',
    ],
    relatedSolutions: [
      'parking-management-operations',
      'cashierless-parking-digital-payments',
      'consultancy-technical-services',
    ],
    ctaText: 'Assess your parking systems and equipment',
    seoTitle: 'Parking Systems and Equipment | Pro Parking Group',
    seoDescription:
      'Plan parking entry and exit devices, barrier gates, number-plate cameras, payment equipment, integration, maintenance, and upgrades.',
    equipment: [
      {
        name: 'Entry and exit manager',
        description:
          'A lane terminal can combine customer guidance, credential reading, vehicle detection, and related entry or exit functions.',
        alt: 'Blue and white parking entrance or exit terminal with a display, camera, card reader, and indicator lights.',
        image: entryExitManager,
      },
      {
        name: 'Barrier gate',
        description:
          'A barrier controls vehicle movement at a lane and must be planned with detection, safety, and operating procedures.',
        alt: 'Red vehicle barrier gate with a white and red boom arm.',
        image: barrierGate,
      },
      {
        name: 'Number-plate recognition camera',
        description:
          'A lane camera may support vehicle identification when it is suitable for the site, system design, and approved process.',
        alt: 'White automatic number-plate recognition camera with a black lens panel and two red indicator lights.',
        image: anprCamera,
      },
      {
        name: 'Automated payment machine',
        description:
          'A payment machine can provide an additional payment point while customer assistance and exception procedures remain available.',
        alt: 'White automated parking payment machine with a touchscreen, ticket scanner, cash slots, receipt opening, and payment terminal.',
        image: automatedPaymentMachine,
      },
    ],
  },
  {
    slug: 'command-center-revenue-intelligence',
    name: 'Command Center and Revenue Intelligence',
    shortDescription:
      'Central monitoring and reporting for site activity, equipment status, payments, and operating exceptions.',
    introduction:
      'Command Center and Revenue Intelligence brings selected site, equipment, payment, and incident information into a central operating view for review and escalation.',
    operationalNeeds: [
      'Give operations teams a consistent view of site status and reported incidents.',
      'Identify equipment or payment-channel exceptions that need site or technical action.',
      'Organize revenue, transaction, and operating reports for management review.',
      'Coordinate escalation across facilities when the approved systems and processes support it.',
    ],
    capabilities: [
      'Central operational visibility across connected parking facilities',
      'Site-status and equipment-status monitoring',
      'Payment-channel monitoring',
      'Exception identification and incident escalation',
      'Revenue and transaction reporting',
      'Operational reports for site and management review',
      'Coordination between site teams and technical support',
      'Management visibility based on available and verified source data',
    ],
    propertyOwnerValue: [
      'A shared operating view can help management identify which site, equipment, payment, or incident information needs attention.',
      'Consistent reports can support review across one or more parking facilities without inventing data that source systems do not provide.',
    ],
    widerOperation:
      'Monitoring and reporting depend on the connected systems, available data, operating procedures, and approved service scope. Functions may be periodic or event-driven and should not be assumed to be real-time unless verified for a specific implementation.',
    propertyContexts: [
      'Properties that need coordinated site and equipment reporting',
      'Operators reviewing activity across multiple parking facilities',
      'Facilities with several payment channels or operating exceptions',
      'Properties preparing more consistent management reporting',
    ],
    relatedSolutions: [
      'parking-management-operations',
      'parking-systems-equipment',
      'cashierless-parking-digital-payments',
    ],
    ctaText: 'Discuss monitoring and reporting needs',
    seoTitle: 'Command Center and Revenue Intelligence | Pro Parking Group',
    seoDescription:
      'Review central parking visibility, site and equipment monitoring, payment exceptions, incident escalation, and management reporting.',
  },
  {
    slug: 'consultancy-technical-services',
    name: 'Consultancy and Technical Services',
    shortDescription:
      'Operational assessments, solution design, integration planning, and technical coordination for new and existing parking facilities.',
    introduction:
      'Consultancy and Technical Services helps property teams examine an existing parking operation or plan a new one before selecting an operating model, systems, equipment, and implementation approach.',
    operationalNeeds: [
      'Understand current traffic flow, payment processes, customer activity, equipment, and operating constraints.',
      'Compare operating-model and system options against the needs of the property.',
      'Coordinate technical requirements, integration points, implementation activities, and transitions.',
      'Plan changes while maintaining practical parking operations and customer guidance.',
    ],
    capabilities: [
      'Parking site assessment and existing-operation review',
      'Parking layout and traffic-flow considerations',
      'Operating-model design',
      'System and equipment planning',
      'Integration and implementation planning',
      'Transition planning for operational or technology changes',
      'Implementation support and technical coordination',
      'First-line technical planning for new and existing facilities',
    ],
    propertyOwnerValue: [
      'A structured assessment gives the property team a clearer basis for discussing operations, equipment, payment channels, and implementation priorities.',
      'Transition and integration planning can identify dependencies before changes are introduced at an operating facility.',
    ],
    widerOperation:
      'Assessment and planning connect the property requirements with parking operations, payment options, systems, monitoring, and technical support. Any regulated engineering, architectural, or other professional work would require separately verified qualifications and scope.',
    propertyContexts: [
      'New developments planning parking operations and systems',
      'Operating properties reviewing traffic flow or customer processes',
      'Facilities considering cashierless or additional payment channels',
      'Properties planning equipment replacement, integration, or modernization',
    ],
    relatedSolutions: [
      'parking-management-operations',
      'parking-systems-equipment',
      'command-center-revenue-intelligence',
    ],
    ctaText: 'Request a parking site assessment',
    seoTitle: 'Parking Consultancy and Technical Services | Pro Parking Group',
    seoDescription:
      'Assess parking operations, layout considerations, traffic flow, operating models, systems, integration, implementation, and transitions.',
  },
];

export const solutionsMeta = {
  title: 'Parking Solutions for Property Operations | Pro Parking Group',
  description:
    'Review parking management, payment options, systems and equipment, operational monitoring, reporting, and technical planning for property operations.',
  eyebrow: 'Solutions',
  heading: 'Parking solutions for property operations',
  introduction:
    'Parking requirements involve operations, people, payment channels, equipment, monitoring, reporting, and technical planning. Pro Parking Group organizes these capabilities around the needs and current operating conditions of each property.',
  selectionGuidance:
    'The appropriate combination depends on the property type, traffic patterns, current systems, operating model, customer needs, and implementation priorities.',
} as const;

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}
