export const faqCategoryIds = [
  'locations-hours-rates',
  'payments-sales-invoices',
  'parking-privileges-accessibility',
  'monthly-parking-feedback',
] as const;

export type FaqCategoryId = (typeof faqCategoryIds)[number];

export interface FaqCategory {
  id: FaqCategoryId;
  name: string;
  displayOrder: number;
}

export interface FaqItem {
  id: string;
  category: FaqCategoryId;
  question: string;
  answer: string;
  displayOrder: number;
  note?: string;
}

export const faqCategories = [
  { id: 'locations-hours-rates', name: 'Locations, hours, and rates', displayOrder: 1 },
  { id: 'payments-sales-invoices', name: 'Payments and Sales Invoices', displayOrder: 2 },
  {
    id: 'parking-privileges-accessibility',
    name: 'Parking privileges and accessibility',
    displayOrder: 3,
  },
  { id: 'monthly-parking-feedback', name: 'Monthly parking and feedback', displayOrder: 4 },
] as const satisfies readonly FaqCategory[];

export const faqs: readonly FaqItem[] = [
  {
    id: 'where-are-pro-parking-locations',
    category: 'locations-hours-rates',
    question: 'Where are Pro Parking locations?',
    answer:
      'An online parking-location directory is not yet available. The parking facility name and location may be shown on its entrance signs, parking ticket, receipt, or payment page.',
    displayOrder: 1,
  },
  {
    id: 'parking-facility-operating-hours',
    category: 'locations-hours-rates',
    question: 'What are the operating hours of the parking facility?',
    answer:
      'Operating hours vary by property. Check the signs at the parking entrance or ask on-site parking personnel where available before leaving a vehicle for an extended period.',
    displayOrder: 2,
  },
  {
    id: 'parking-rates',
    category: 'locations-hours-rates',
    question: 'What are the parking rates?',
    answer:
      'Parking rates are set for each facility and may vary by vehicle type, parking duration, validation, or time of entry. Check the rate board at the parking entrance before entering.',
    displayOrder: 3,
  },
  {
    id: 'overnight-parking',
    category: 'locations-hours-rates',
    question: 'Is overnight parking allowed?',
    answer:
      'Overnight parking depends on the facility’s operating rules. Check the posted parking rules or ask on-site parking personnel before leaving a vehicle overnight.',
    displayOrder: 4,
  },
  {
    id: 'accepted-payment-methods',
    category: 'payments-sales-invoices',
    question: 'What payment methods are accepted?',
    answer:
      'Accepted payment methods vary by facility. Depending on the site, payment may be available through a cashier, automated payment machine, QRPh or supported e-wallet, card, or another approved payment channel. Check the payment instructions at the property.',
    displayOrder: 1,
  },
  {
    id: 'where-to-pay-parking-fee',
    category: 'payments-sales-invoices',
    question: 'Where can I pay my parking fee?',
    answer:
      'Follow the payment instructions at the facility. Depending on the site, payment may be made at a cashier, automated payment machine, or approved digital payment channel before proceeding to the exit.',
    displayOrder: 2,
  },
  {
    id: 'exit-period-after-payment',
    category: 'payments-sales-invoices',
    question: 'How long do I have to exit after payment?',
    answer:
      'The allowed exit period after payment varies by facility. Check the payment confirmation, receipt, screen message, or posted instructions. If the allowed period expires, the parking fee may need to be recalculated.',
    displayOrder: 3,
  },
  {
    id: 'exit-barrier-after-payment',
    category: 'payments-sales-invoices',
    question: 'What should I do if the exit barrier doesn’t open after payment?',
    answer:
      'Stop at the exit lane and do not force the barrier or follow another vehicle through it. Keep your parking ticket and proof of payment available, then use the lane assistance control or ask on-site parking personnel for help.',
    displayOrder: 4,
  },
  {
    id: 'request-sales-invoice',
    category: 'payments-sales-invoices',
    question: 'Can I request a Sales Invoice?',
    answer:
      'A Sales Invoice may be requested for a completed parking transaction. Keep the parking ticket or transaction reference and proof of payment, then follow the Sales Invoice instructions provided at the facility.',
    displayOrder: 5,
  },
  {
    id: 'lost-parking-ticket',
    category: 'payments-sales-invoices',
    question: 'What should I do if I lose my parking ticket?',
    answer:
      'Report the lost ticket before attempting to exit. Be ready to provide the vehicle plate number, identification, and proof that you are authorized to use the vehicle. Lost-ticket verification and applicable charges depend on the facility’s rules.',
    displayOrder: 6,
  },
  {
    id: 'deducted-incomplete-payment',
    category: 'payments-sales-invoices',
    question: 'What should I do if my payment was deducted but the transaction wasn’t completed?',
    answer:
      'Avoid making repeated payment attempts until the transaction status has been checked. Keep the payment reference, amount, date and time, parking ticket, and proof of deduction available, then report the concern using the assistance arrangements at the facility.',
    displayOrder: 7,
  },
  {
    id: 'senior-citizen-parking-privileges',
    category: 'parking-privileges-accessibility',
    question: 'Do you provide parking privileges for senior citizens?',
    answer:
      'Senior citizen parking privileges depend on applicable national laws, LGU ordinances, and the rules implemented at the parking facility. Present a valid Senior Citizen ID and any required supporting documents through the facility’s validation process before payment.',
    displayOrder: 1,
  },
  {
    id: 'pwd-parking-privileges',
    category: 'parking-privileges-accessibility',
    question: 'Do you provide parking privileges for persons with disabilities?',
    answer:
      'PWD parking privileges depend on applicable national laws, LGU ordinances, and the rules implemented at the parking facility. Present a valid PWD ID and any required supporting documents through the facility’s validation process before payment.',
    displayOrder: 2,
  },
  {
    id: 'monthly-parking',
    category: 'monthly-parking-feedback',
    question: 'Do you offer monthly parking?',
    answer:
      'Monthly parking is available only at participating facilities and may depend on available capacity, vehicle requirements, access arrangements, and property rules. Ask the property’s parking office or management office for site-specific information.',
    displayOrder: 1,
  },
  {
    id: 'complaint-or-feedback',
    category: 'monthly-parking-feedback',
    question: 'How do I submit a complaint or feedback?',
    answer:
      'Use the official assistance or contact instructions displayed at the parking facility. Include the facility name, date and approximate time, vehicle plate number, parking ticket or transaction reference, and a concise description of the concern.',
    displayOrder: 2,
    note: 'Do not include PINs, passwords, one-time passwords, or full card details when reporting a parking concern.',
  },
] as const;
