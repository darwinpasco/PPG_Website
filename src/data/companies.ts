import type { ImageMetadata } from 'astro';

import parkSecureLogo from '../assets/brand/park-secure-logo.png';
import proPLogo from '../assets/brand/pro-p-logo.png';
import { solutions, type SolutionSlug } from './solutions';

export const companySlugs = ['pro-p', 'park-secure'] as const;

export type CompanySlug = (typeof companySlugs)[number];

export interface Company {
  slug: CompanySlug;
  shortName: string;
  legalName: string;
  logo: ImageMetadata;
  logoAlt: string;
  overviewDescription: string;
  introduction: string;
  roleDescription: string;
  solutionSlugs: readonly SolutionSlug[];
  ctaText: string;
  seoTitle: string;
  seoDescription: string;
}

const sharedSolutionSlugs = solutions.map((solution) => solution.slug);

export const companies: readonly Company[] = [
  {
    slug: 'pro-p',
    shortName: 'Pro-P',
    legalName: 'Professional Parking Management Corporation',
    logo: proPLogo,
    logoAlt: 'Professional Parking Management Corporation logo',
    overviewDescription:
      'Provides parking management services as an operating company within Pro Parking Group.',
    introduction:
      'Pro-P provides parking management services as one of the two operating companies within Pro Parking Group.',
    roleDescription:
      'For properties operated by Pro-P, the company manages the parking services required for the site.',
    solutionSlugs: sharedSolutionSlugs,
    ctaText: 'Discuss your property requirements',
    seoTitle: 'Professional Parking Management Corporation | Pro Parking Group',
    seoDescription:
      'View the Pro-P company profile and Pro Parking Group services for parking operations, payments, systems, monitoring, and technical support.',
  },
  {
    slug: 'park-secure',
    shortName: 'Park Secure',
    legalName: 'Park Secure Management Corporation',
    logo: parkSecureLogo,
    logoAlt: 'Park Secure Management Corporation logo',
    overviewDescription:
      'Provides parking management services as an operating company within Pro Parking Group.',
    introduction:
      'Park Secure provides parking management services as one of the two operating companies within Pro Parking Group.',
    roleDescription:
      'For properties operated by Park Secure, the company manages the parking services required for the site.',
    solutionSlugs: sharedSolutionSlugs,
    ctaText: 'Discuss your property requirements',
    seoTitle: 'Park Secure Management Corporation | Pro Parking Group',
    seoDescription:
      'View the Park Secure company profile and Pro Parking Group services for parking operations, payments, systems, monitoring, and technical support.',
  },
];

export const companiesOverview = {
  title: 'Our Operating Companies | Pro Parking Group',
  description:
    'View Professional Parking Management Corporation (Pro-P) and Park Secure Management Corporation (Park Secure), the operating companies within Pro Parking Group.',
  heading: 'Our operating companies',
  introduction:
    'Pro Parking Group operates through Professional Parking Management Corporation (Pro-P) and Park Secure Management Corporation (Park Secure).',
} as const;

export function getCompany(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug);
}
