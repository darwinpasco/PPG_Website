export interface NavigationItem {
  label: string;
  href: string;
}

export interface CompanySummary {
  shortName: string;
  legalName: string;
  description: string;
  href: `/companies/${string}/`;
}

export interface SolutionSummary {
  title: string;
  description: string;
  href: `/solutions/${string}/`;
}

export interface IndustrySummary {
  name: string;
  href: `/industries/${string}/`;
}

export interface PortfolioItem {
  type: 'client' | 'managed-property' | 'project';
  name: string;
  operatingCompany: 'Pro-P' | 'Park Secure';
  summary: string;
}

export const homeContent = {
  meta: {
    title: 'Pro Parking Group | Parking Management and Technology',
    description:
      'Parking management, cashierless payment options, parking systems, equipment, monitoring, and technical services for property owners.',
  },
  navigation: [
    { label: 'About', href: '/#about' },
    { label: 'Our Companies', href: '/companies/' },
    { label: 'Solutions', href: '/solutions/' },
    { label: 'Industries', href: '/industries/' },
    { label: 'Careers', href: '/#careers' },
    { label: 'Support', href: '/#support' },
  ] satisfies NavigationItem[],
  hero: {
    eyebrow: 'Parking management and technology',
    title: 'Parking management, systems, and technology for property owners.',
    description:
      'Pro Parking Group helps property owners operate parking facilities, introduce cashierless payment options, deploy parking systems and equipment, and maintain clear operational and revenue oversight.',
    visualAlt:
      'Underground parking entrance and exit lanes with barrier gates, payment terminals, vehicles, and site personnel.',
  },
  introduction: {
    eyebrow: 'About Pro Parking Group',
    title: 'Manage the entire parking operation.',
    description:
      'Parking facilities depend on site teams, traffic flow, payment channels, equipment, customer support, and reporting. We coordinate these functions around the operating needs of each property.',
    operatingAreas: ['Site teams', 'Traffic flow', 'Payment channels', 'Equipment', 'Reporting'],
  },
  companiesIntroduction:
    'Professional Parking Management Corporation (Pro-P) and Park Secure Management Corporation (Park Secure) are the two operating companies within Pro Parking Group.',
  companies: [
    {
      shortName: 'Pro-P',
      legalName: 'Professional Parking Management Corporation',
      description: 'A separate legal operating company within Pro Parking Group.',
      href: '/companies/pro-p/',
    },
    {
      shortName: 'Park Secure',
      legalName: 'Park Secure Management Corporation',
      description: 'A separate legal operating company within Pro Parking Group.',
      href: '/companies/park-secure/',
    },
  ] satisfies CompanySummary[],
  solutions: [
    {
      title: 'Parking Management and Operations',
      description:
        'Day-to-day site operations, staffing, traffic management, customer assistance, and operating controls for parking facilities.',
      href: '/solutions/parking-management-operations/',
    },
    {
      title: 'Cashierless Parking and Digital Payments',
      description:
        'Payment options that reduce dependence on cashier lanes while preserving assisted and continuity processes when needed.',
      href: '/solutions/cashierless-parking-digital-payments/',
    },
    {
      title: 'Parking Systems and Equipment',
      description:
        'Selection, deployment, integration, and support for barriers, entry and exit devices, payment terminals, cameras, and related parking systems.',
      href: '/solutions/parking-systems-equipment/',
    },
    {
      title: 'Command Center and Revenue Intelligence',
      description:
        'Central monitoring and reporting for site activity, equipment status, payments, and operating exceptions.',
      href: '/solutions/command-center-revenue-intelligence/',
    },
    {
      title: 'Consultancy and Technical Services',
      description:
        'Operational assessments, solution design, integration planning, and technical support for new and existing parking facilities.',
      href: '/solutions/consultancy-technical-services/',
    },
  ] satisfies SolutionSummary[],
  industries: [
    { name: 'Shopping malls and retail developments', href: '/industries/shopping-malls-retail/' },
    { name: 'Office buildings', href: '/industries/office-buildings/' },
    { name: 'Hotels and hospitality properties', href: '/industries/hotels-hospitality/' },
    { name: 'Residential and mixed-use developments', href: '/industries/residential-mixed-use/' },
    { name: 'Hospitals and healthcare facilities', href: '/industries/hospitals-healthcare/' },
    { name: 'Transport terminals', href: '/industries/transport-terminals/' },
    { name: 'Open parking facilities', href: '/industries/open-parking-facilities/' },
    { name: 'Events and high-volume destinations', href: '/industries/events-high-volume-destinations/' },
  ] satisfies IndustrySummary[],
  portfolio: {
    items: [] as PortfolioItem[],
  },
  journeys: {
    support: {
      eyebrow: 'Customer support',
      title: 'Need help with a parking concern?',
      description:
        'Customer Support will cover ticket, payment, entry, exit, accessibility, and other parking concerns.',
      status: 'Support contact options are not yet available on this working page.',
    },
    careers: {
      eyebrow: 'Careers',
      title: 'Work with Pro Parking Group',
      description:
        'Approved job openings, work locations, and application instructions will be published through the Careers section.',
      status: 'Job listings and application options are not yet available on this working page.',
    },
  },
  assessment: {
    eyebrow: 'Site assessment',
    title: 'Tell us about your property and parking requirements.',
    description:
      'Request a site assessment to discuss your facility, current parking setup, operational concerns, and project requirements.',
    status: 'The site-assessment form and submission route are not yet available.',
  },
  contentStatus: {
    brand: 'temporary-text-identity',
    portfolio: 'verified-source-required',
    contact: 'approved-destination-required',
    legal: 'privacy-content-required-before-data-collection',
  },
} as const;
