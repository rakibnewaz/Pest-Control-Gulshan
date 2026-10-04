export type PropertyType =
  | 'Apartment / Flat'
  | 'House'
  | 'Villa'
  | 'Office'
  | 'Restaurant'
  | 'Hotel'
  | 'Shop'
  | 'Warehouse'
  | 'Other';

export type PestType =
  | 'Cockroaches'
  | 'Bed Bugs'
  | 'Termites'
  | 'Mosquitoes'
  | 'Rats / Mice'
  | 'Ants'
  | 'Flies'
  | 'Spiders'
  | 'Wasps'
  | 'Silverfish'
  | 'Other';

export interface ServiceItem {
  id: string;
  number: number;
  name: string;
  category: 'residential' | 'commercial' | 'both' | 'specialized';
  shortDesc: string;
  fullDesc: string;
  targetPests: string[];
  recommendedFor: string;
  imageUrl: string;
  treatmentHighlights: string[];
}

export interface PestItem {
  id: string;
  name: string;
  bengaliName?: string;
  shortDesc: string;
  commonAreas: string;
  riskLevel: 'Moderate' | 'High' | 'Severe';
  typicalSeason: string;
  imageUrl: string;
  associatedServiceId: string;
}

export interface DhakaNeighborhood {
  name: string;
  zone: 'North Dhaka' | 'South Dhaka' | 'Central Dhaka' | 'Diplomatic & Premium' | 'Cantonment / DOHS';
  popularPropertyTypes: string;
  coverage: 'Full Coverage - Rapid Dispatch' | 'Full Coverage - Scheduled';
  highlight?: boolean;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'General' | 'Pricing & Inspection' | 'Safety' | 'Dhaka Areas';
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  propertyType: PropertyType;
  pestProblem: PestType;
  dhakaArea: string;
  preferredDate: string;
  message: string;
}
