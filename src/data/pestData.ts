import {
  ServiceItem,
  PestItem,
  DhakaNeighborhood,
  FaqItem,
  PropertyType,
  PestType,
} from '../types';

export const BUSINESS_INFO = {
  name: 'Pest Control Glshan',
  tagline: 'Professional Pest Control for Homes & Businesses in Gulshan & Dhaka',
  phoneDisplay: '01540-400769',
  phoneCall: '+8801540400769',
  whatsappDisplay: '01540-400769',
  whatsappNumber: '8801540400769',
  email: 'service@pestcontrolglshan.com',
  address: 'Plot [BUSINESS ADDRESS], Gulshan / Banani / Dhaka, Bangladesh',
  operatingHours: 'Saturday to Friday: 8:00 AM – 8:00 PM (Quick Response)',
  googleReviewsLink: '#reviews',
};

export const TRUST_POINTS = [
  {
    id: 1,
    title: 'Trained Professionals',
    desc: 'Uniformed, trained technicians adhering to structured treatment protocols.',
    iconName: 'UserCheck',
  },
  {
    id: 2,
    title: 'Safe Treatment Methods',
    desc: 'Targeted application techniques prioritized for family and workplace safety.',
    iconName: 'ShieldCheck',
  },
  {
    id: 3,
    title: 'Residential & Commercial',
    desc: 'Tailored solutions for high-rise flats, villas, offices, and F&B establishments.',
    iconName: 'Building2',
  },
  {
    id: 4,
    title: 'Dhaka-Wide Service',
    desc: 'Rapid scheduling across Gulshan, Banani, Dhanmondi, Uttara, and all Dhaka zones.',
    iconName: 'MapPin',
  },
  {
    id: 5,
    title: 'Fast Response',
    desc: 'Prompt scheduling, transparent communication, and priority inspection slots.',
    iconName: 'Clock',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'cockroach-control',
    number: 1,
    name: 'Cockroach Control',
    category: 'both',
    shortDesc:
      'Targeted gel baiting and perimeter residual treatment for German and American cockroaches in flats and kitchens.',
    fullDesc:
      'Cockroaches are among the most persistent pests in Dhaka apartments and commercial kitchens, carrying bacteria and triggering allergies. Our treatment focuses on identifying entry points, kitchen cabinet harborages, sink drains, and electrical conduits. We use professional micro-encapsulated baits and crack-and-crevice residual treatments that eliminate both adult roaches and hidden egg capsules without requiring you to empty your entire kitchen.',
    targetPests: ['German Cockroaches', 'American Cockroaches', 'Oriental Cockroaches'],
    recommendedFor: 'Apartments, private residences, commercial kitchens, pantry areas, and restaurants.',
    imageUrl:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'Odorless gel baiting in food preparation areas',
      'Targeted crack & crevice sealing advice',
      'Drainage and pipe conduit barrier treatments',
    ],
  },
  {
    id: 'bed-bug-control',
    number: 2,
    name: 'Bed Bug Control',
    category: 'residential',
    shortDesc:
      'Multi-stage targeted treatment for mattresses, bed frames, upholstery, and baseboards to break the life cycle.',
    fullDesc:
      'Bed bug infestations cause sleepless nights and severe irritation. Over-the-counter sprays often scatter bugs deeper into furniture. Our technicians perform thorough thermal and targeted chemical assessments of headboards, mattress seams, wooden slats, and electrical outlets. We implement an intensive multi-step application designed to neutralize active bugs and nymphs while providing after-care laundry guidelines.',
    targetPests: ['Bed Bugs (Cimex lectularius)', 'Bed Bug Nymphs & Eggs'],
    recommendedFor: 'Bedrooms, master suites, guest rooms, hostel accommodations, and hotel suites.',
    imageUrl:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'Deep seam and wooden frame inspection',
      'Contact and long-lasting residual formulation',
      'Detailed pre-treatment preparation checklist provided',
    ],
  },
  {
    id: 'mosquito-control',
    number: 3,
    name: 'Mosquito Control',
    category: 'both',
    shortDesc:
      'Indoor and outdoor targeted mosquito reduction for balconies, gardens, stairwells, and perimeter foliage.',
    fullDesc:
      'Dhaka’s climate creates frequent breeding conditions for Aedes and Culex mosquitoes. Our comprehensive management combines adult misting, residual barrier sprays on resting foliage and dark shaded corners, and larvicidal treatment of stagnant water reservoirs or rooftop drains to break seasonal breeding cycles.',
    targetPests: ['Aedes Mosquitoes', 'Culex Mosquitoes'],
    recommendedFor: 'Apartment balconies, rooftop gardens, residential compounds, schools, and outdoor dining.',
    imageUrl:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'Residual wall and balcony misting',
      'Larvicide treatment for standing water reservoirs',
      'Rooftop and compound perimeter management',
    ],
  },
  {
    id: 'termite-control',
    number: 4,
    name: 'Termite Control',
    category: 'specialized',
    shortDesc:
      'Specialized subterranean termite detection and protective barriers for structural woodwork, door frames, and flooring.',
    fullDesc:
      'Subterranean termites inflict devastating structural and cosmetic damage on Dhaka properties, quietly hollowing out wooden door choukats, built-in wardrobes, parquet floors, and false ceilings. We carry out precision non-invasive acoustic and moisture checks, followed by targeted sub-surface soil/wood injection barriers that protect the perimeter of your premises.',
    targetPests: ['Subterranean Termites', 'Drywood Termites'],
    recommendedFor: 'Luxury apartments, villas, heritage properties, corporate offices, and new constructions.',
    imageUrl:
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'Precision wood drilling and pressurized termiticide injection',
      'Plinth and foundation barrier installation',
      'Structural wood preservation advice',
    ],
  },
  {
    id: 'ant-control',
    number: 5,
    name: 'Ant Control',
    category: 'residential',
    shortDesc:
      'Colony-targeting bait formulations that worker ants carry back to eliminate subterranean and wall nests.',
    fullDesc:
      'Surface spraying only kills visible foraging ants, leaving the queen and colony active inside walls and foundation expansion gaps. We deploy specialized sweet and protein-based non-repellent baits that ants transport into their nests, achieving systematic eradication of the colony with zero messy odors.',
    targetPests: ['Sugar Ants', 'Carpenter Ants', 'Pharaoh Ants', 'Black Crazy Ants'],
    recommendedFor: 'Kitchens, dining rooms, terrace gardens, pantries, and wall baseboards.',
    imageUrl:
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'Non-repellent bait transfer technology',
      'Moisture source and perimeter gap identification',
      'Child and pet safe bait placement',
    ],
  },
  {
    id: 'rodent-control',
    number: 6,
    name: 'Rodent Control',
    category: 'both',
    shortDesc:
      'Strategic tamper-resistant bait stations, exclusion recommendations, and mechanical capture for rats and mice.',
    fullDesc:
      'Rats and mice chew through electrical cabling, contaminate food supplies, and enter properties through drainage pipes and false ceilings. Our multi-barrier rodent management combines secure tamper-resistant trapping stations, ultrasonic exclusion guidance, and perimeter pathway treatments tailored for urban Dhaka buildings.',
    targetPests: ['Roof Rats (Rattus rattus)', 'Norway Rats', 'House Mice'],
    recommendedFor: 'Commercial warehouses, server rooms, false ceilings, apartments, restaurants, and basements.',
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'Lockable tamper-resistant rodent stations',
      'Structural entry-point exclusion audit',
      'Sanitary removal and follow-up monitoring',
    ],
  },
  {
    id: 'fly-control',
    number: 7,
    name: 'Fly Control',
    category: 'both',
    shortDesc:
      'Hygiene-first reduction plans, professional insect light trap placement, and breeding site sanitation.',
    fullDesc:
      'Flies are serious vectors of contamination in dining and food preparation spaces. Our technicians identify the moist organic matter where flies reproduce, apply selective surface treatments to exterior refuse areas, and install professional commercial fly lights suitable for regulatory compliance.',
    targetPests: ['House Flies', 'Fruit Flies', 'Drain Flies'],
    recommendedFor: 'Restaurants, food courts, supermarkets, residential kitchens, and garbage rooms.',
    imageUrl:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'Drain bio-foam sanitation guidance',
      'UV Insect Light Trap (ILT) recommendations',
      'Refuse area barrier sprays',
    ],
  },
  {
    id: 'spider-insect-control',
    number: 8,
    name: 'Spider & Insect Control',
    category: 'residential',
    shortDesc:
      'Perimeter dusting, webbing removal, and targeted residual treatment for crawling and stinging insects.',
    fullDesc:
      'Crawling insects nest in dark storage areas, utility shafts, window corners, and balconies. We clear existing webs, apply non-staining micro-capsule sprays along baseboards and window frames, and seal common access corridors.',
    targetPests: ['House Spiders', 'Centipedes', 'Millipedes', 'Carpet Beetles'],
    recommendedFor: 'Store rooms, verandas, high-ceiling duplexes, utility rooms, and perimeter walls.',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'High-reach cobweb de-webbing',
      'Crevice dusting behind heavy appliances',
      'Exterior perimeter window treatments',
    ],
  },
  {
    id: 'wasp-bee-management',
    number: 9,
    name: 'Wasp / Bee Pest Management',
    category: 'specialized',
    shortDesc:
      'Controlled professional nest removal and deterrence on high-rise balconies, cornices, and rooftop parapets.',
    fullDesc:
      'Wasps and hornets often construct dangerous nests under air conditioning compressor ledges, balcony eaves, and exterior building parapets. Our trained technicians use protective bee suits and specialized pole applicators to safely neutralize aggressive colonies and eliminate the nest structure.',
    targetPests: ['Paper Wasps', 'Yellow Jackets', 'Mud Daubers'],
    recommendedFor: 'Apartment balconies, rooftop cornices, school campuses, and corporate exterior facades.',
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'Full protective PPE equipment deployment',
      'Safe evening/early-morning dispatch',
      'Residual repellent application on nesting ledge',
    ],
  },
  {
    id: 'commercial-pest-control',
    number: 10,
    name: 'Commercial Pest Control',
    category: 'commercial',
    shortDesc:
      'Comprehensive Integrated Pest Management (IPM) contracts for offices, hotels, hospitals, and retail stores.',
    fullDesc:
      'Commercial properties require discreet, documented, and proactive pest prevention to uphold brand reputation, customer satisfaction, and health standards. We provide customized service schedules, service logbooks, and after-hours treatment so your daily business operations remain entirely uninterrupted.',
    targetPests: ['All Common Commercial Pests (Roaches, Rodents, Flies, Ants)'],
    recommendedFor: 'Corporate offices, commercial towers, boutique hotels, medical clinics, and retail malls.',
    imageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'After-hours and weekend scheduling',
      'Digital service logs & trend monitoring',
      'Auditing support for commercial hygiene inspections',
    ],
  },
  {
    id: 'restaurant-pest-control',
    number: 11,
    name: 'Restaurant Pest Control',
    category: 'commercial',
    shortDesc:
      'Hygienic, food-safe pest defense for commercial kitchens, prep areas, cold storages, and customer dining rooms.',
    fullDesc:
      'A single pest sighting can compromise customer trust and food safety compliance. We design specialized non-toxic kitchen programs utilizing odorless gel baits, drain cleaning protocols, fly interception lights, and nocturnal inspections to keep your kitchen spotless and pest-free.',
    targetPests: ['German Cockroaches', 'Drain Flies', 'Fruit Flies', 'Rodents'],
    recommendedFor: 'Fine dining restaurants, cafes, cloud kitchens, fast food chains, and bakeries in Dhaka.',
    imageUrl:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'Food-grade non-spray chemical protocols in cooklines',
      'Grease-trap and kitchen floor drain treatment',
      'Detailed sanitation checklist for kitchen staff',
    ],
  },
  {
    id: 'apartment-residential-pest-control',
    number: 12,
    name: 'Apartment & Residential Pest Control',
    category: 'residential',
    shortDesc:
      'Complete home pest inspection and preventative treatment for flats, multi-unit buildings, and family homes.',
    fullDesc:
      'Dhaka apartments are interconnected through plumbing shafts, elevator pits, and utility shafts where pests travel freely. Our residential package thoroughly covers every room—master bedrooms, kids rooms, modern modular kitchens, balconies, and bathrooms—using low-odor methods engineered for family well-being.',
    targetPests: ['Cockroaches', 'Ants', 'Spiders', 'Silverfish', 'Occasional Invaders'],
    recommendedFor: 'Apartment flats (1,000 to 5,000+ sq ft), duplexes, penthouses, and private bungalows.',
    imageUrl:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    treatmentHighlights: [
      'Room-by-room risk assessment',
      'Safe formulation around babies and household pets',
      'Preventative shaft and balcony barrier',
    ],
  },
];

export const PESTS_WE_CONTROL: PestItem[] = [
  {
    id: 'cockroach',
    name: 'Cockroaches',
    bengaliName: 'তেলাপোকা',
    shortDesc: 'German & American cockroaches nesting in warm kitchen cabinets and pipes.',
    commonAreas: 'Kitchens, under sinks, behind refrigerators, bathroom drains.',
    riskLevel: 'Severe',
    typicalSeason: 'Year-round in humid indoor spaces',
    imageUrl:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'cockroach-control',
  },
  {
    id: 'bed-bug',
    name: 'Bed Bugs',
    bengaliName: 'ছাড়পোকা',
    shortDesc: 'Nocturnal blood-feeding pests hiding inside mattress seams and wooden furniture.',
    commonAreas: 'Mattresses, headboards, sofa cushions, electrical faceplates.',
    riskLevel: 'Severe',
    typicalSeason: 'High in humid monsoon & dry winter months',
    imageUrl:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'bed-bug-control',
  },
  {
    id: 'termite',
    name: 'Termites',
    bengaliName: 'উইপোকা',
    shortDesc: 'Silent destroyers attacking wooden frames, cupboards, and false ceilings.',
    commonAreas: 'Door frames, wooden wardrobes, floor skirting, book collections.',
    riskLevel: 'Severe',
    typicalSeason: 'Active continuously inside climate-controlled buildings',
    imageUrl:
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'termite-control',
  },
  {
    id: 'mosquito',
    name: 'Mosquitoes',
    bengaliName: 'মশা',
    shortDesc: 'Disease vectors breeding in stagnant water and resting in shaded areas.',
    commonAreas: 'Balconies, indoor plants, staircases, rooftop drains.',
    riskLevel: 'High',
    typicalSeason: 'Pre-monsoon and post-monsoon peak seasons',
    imageUrl:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'mosquito-control',
  },
  {
    id: 'rat',
    name: 'Rats',
    bengaliName: 'বড় ইঁদুর',
    shortDesc: 'Large rodents gnawing wires, damaging food, and entering through drains.',
    commonAreas: 'Basements, false ceilings, utility shafts, kitchen pantries.',
    riskLevel: 'High',
    typicalSeason: 'Year-round, seeking shelter during heavy rains',
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'rodent-control',
  },
  {
    id: 'mouse',
    name: 'Mice',
    bengaliName: 'ছোট ইঁদুর',
    shortDesc: 'Agile small rodents nesting behind kitchen appliances and office cabinets.',
    commonAreas: 'Under stove counters, inside sofa base frames, store rooms.',
    riskLevel: 'Moderate',
    typicalSeason: 'Constant indoor activity',
    imageUrl:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'rodent-control',
  },
  {
    id: 'ant',
    name: 'Ants',
    bengaliName: 'পিঁপড়া',
    shortDesc: 'Foraging trails attacking sweet foods, kitchen slabs, and electrical ports.',
    commonAreas: 'Kitchen counters, wall corners, indoor potted plants.',
    riskLevel: 'Moderate',
    typicalSeason: 'Peak during dry and warmer months',
    imageUrl:
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'ant-control',
  },
  {
    id: 'fly',
    name: 'Flies',
    bengaliName: 'মাছি',
    shortDesc: 'House flies, fruit flies, and drain flies carrying foodborne bacteria.',
    commonAreas: 'Dining tables, dustbin areas, wet sink drains.',
    riskLevel: 'Moderate',
    typicalSeason: 'High summer & humid rainy periods',
    imageUrl:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'fly-control',
  },
  {
    id: 'spider',
    name: 'Spiders',
    bengaliName: 'মাকড়সা',
    shortDesc: 'Web-building arachnids occupying ceiling corners and unused storage closets.',
    commonAreas: 'Ceiling cornices, behind curtains, storage rooms.',
    riskLevel: 'Moderate',
    typicalSeason: 'Year-round in sheltered corners',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'spider-insect-control',
  },
  {
    id: 'wasp',
    name: 'Wasps',
    bengaliName: 'ভিমরুল / বোলতা',
    shortDesc: 'Aggressive stinging insects constructing nests on balcony ledges and AC units.',
    commonAreas: 'Balcony ceilings, AC outdoor units, rooftop corners.',
    riskLevel: 'High',
    typicalSeason: 'Spring and sunny summer months',
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'wasp-bee-management',
  },
  {
    id: 'silverfish',
    name: 'Silverfish',
    bengaliName: 'সিলভারফিশ',
    shortDesc: 'Moisture-loving wingless insects feeding on books, paper, and fabrics.',
    commonAreas: 'Book shelves, document drawers, wardrobes, bathroom vanity.',
    riskLevel: 'Moderate',
    typicalSeason: 'Humid weather conditions',
    imageUrl:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'apartment-residential-pest-control',
  },
  {
    id: 'other-insects',
    name: 'Other Common Household Insects',
    bengaliName: 'অন্যান্য কীটপতঙ্গ',
    shortDesc: 'Centipedes, earwigs, carpet beetles, and seasonal crawling invaders.',
    commonAreas: 'Thresholds, plumbing shafts, utility terraces.',
    riskLevel: 'Moderate',
    typicalSeason: 'Seasonal shifts and rain onset',
    imageUrl:
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80',
    associatedServiceId: 'apartment-residential-pest-control',
  },
];

export const DHAKA_NEIGHBORHOODS: DhakaNeighborhood[] = [
  {
    name: 'Gulshan',
    zone: 'Diplomatic & Premium',
    popularPropertyTypes: 'Luxury Apartments, Embassies, Penthouses & Fine Dining',
    coverage: 'Full Coverage - Rapid Dispatch',
    highlight: true,
  },
  {
    name: 'Banani',
    zone: 'Diplomatic & Premium',
    popularPropertyTypes: 'Upscale Condominiums, Corporate Offices, Cafes & Boutiques',
    coverage: 'Full Coverage - Rapid Dispatch',
    highlight: true,
  },
  {
    name: 'Baridhara',
    zone: 'Diplomatic & Premium',
    popularPropertyTypes: 'Diplomatic Enclave Residences, Private Villas & Residences',
    coverage: 'Full Coverage - Rapid Dispatch',
    highlight: true,
  },
  {
    name: 'Bashundhara R/A',
    zone: 'North Dhaka',
    popularPropertyTypes: 'Modern Family Flats, High-rise Buildings & Educational Campuses',
    coverage: 'Full Coverage - Rapid Dispatch',
    highlight: true,
  },
  {
    name: 'Dhanmondi',
    zone: 'Central Dhaka',
    popularPropertyTypes: 'Residential Apartments, Diagnostic Centers, Schools & Restaurants',
    coverage: 'Full Coverage - Rapid Dispatch',
    highlight: true,
  },
  {
    name: 'Uttara (Sectors 1-18)',
    zone: 'North Dhaka',
    popularPropertyTypes: 'Sector Houses, Duplexes, Commercial Showrooms & Offices',
    coverage: 'Full Coverage - Rapid Dispatch',
    highlight: true,
  },
  {
    name: 'Niketan',
    zone: 'Diplomatic & Premium',
    popularPropertyTypes: 'Gated Residential Society, Executive Flats & Tech Studios',
    coverage: 'Full Coverage - Rapid Dispatch',
    highlight: true,
  },
  {
    name: 'Baridhara DOHS',
    zone: 'Cantonment / DOHS',
    popularPropertyTypes: 'Gated Defense Officers Housing Society, Penthouses',
    coverage: 'Full Coverage - Rapid Dispatch',
    highlight: true,
  },
  {
    name: 'Mirpur DOHS',
    zone: 'Cantonment / DOHS',
    popularPropertyTypes: 'Residential Community, Multi-story Apartment Complexes',
    coverage: 'Full Coverage - Rapid Dispatch',
    highlight: true,
  },
  {
    name: 'Mohakhali DOHS',
    zone: 'Cantonment / DOHS',
    popularPropertyTypes: 'Quiet Gated Neighborhood, Corporate Executive Residences',
    coverage: 'Full Coverage - Rapid Dispatch',
    highlight: true,
  },
  {
    name: 'Mohakhali',
    zone: 'Central Dhaka',
    popularPropertyTypes: 'Commercial Towers, Hospitals, Residential Pockets',
    coverage: 'Full Coverage - Scheduled',
  },
  {
    name: 'Mirpur (All Sections)',
    zone: 'North Dhaka',
    popularPropertyTypes: 'Apartment Buildings, Retail Showrooms, Industrial Garments',
    coverage: 'Full Coverage - Scheduled',
  },
  {
    name: 'Baily Road & Shantinagar',
    zone: 'Central Dhaka',
    popularPropertyTypes: 'Historic Residential Flats, Theatres, Commercial Centers',
    coverage: 'Full Coverage - Scheduled',
  },
  {
    name: 'Khilgaon & Malibagh',
    zone: 'Central Dhaka',
    popularPropertyTypes: 'Family Flats, Food Hubs, Local Commercial Outlets',
    coverage: 'Full Coverage - Scheduled',
  },
  {
    name: 'Wari & Old Dhaka',
    zone: 'South Dhaka',
    popularPropertyTypes: 'Traditional Heritage Buildings, Commercial Warehouses, Flats',
    coverage: 'Full Coverage - Scheduled',
  },
  {
    name: 'Tejgaon Industrial & Commercial',
    zone: 'Central Dhaka',
    popularPropertyTypes: 'Corporate Headquarters, Warehouses, Auto Showrooms',
    coverage: 'Full Coverage - Scheduled',
  },
  {
    name: 'Rampura & Banasree',
    zone: 'Central Dhaka',
    popularPropertyTypes: 'Residential Blocks, Educational Hubs, Apartments',
    coverage: 'Full Coverage - Scheduled',
  },
  {
    name: 'Badda & Kuril',
    zone: 'North Dhaka',
    popularPropertyTypes: 'Residential Complexes, Commercial Establishments',
    coverage: 'Full Coverage - Scheduled',
  },
  {
    name: 'Kakrail & Farmgate',
    zone: 'Central Dhaka',
    popularPropertyTypes: 'Offices, Coaching Centers, Multi-tenant Properties',
    coverage: 'Full Coverage - Scheduled',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    title: 'Contact Us',
    subtitle: 'Step 1 — Contact Us',
    description:
      'Call or WhatsApp us and tell us what pest problem you are experiencing. Our customer coordinator gathers initial details on property type and urgency.',
    badge: 'Immediate Response',
    iconName: 'PhoneCall',
  },
  {
    stepNumber: '02',
    title: 'Property Assessment',
    subtitle: 'Step 2 — Property Assessment',
    description:
      'Our team assesses the affected areas and identifies the likely source of the infestation, entry points, and moisture conditions.',
    badge: 'Detailed Inspection',
    iconName: 'Search',
  },
  {
    stepNumber: '03',
    title: 'Targeted Treatment',
    subtitle: 'Step 3 — Targeted Treatment',
    description:
      'We apply an appropriate pest management approach based on the property and pest problem, utilizing responsible methods and protective protocols.',
    badge: 'Precision Application',
    iconName: 'Shield',
  },
  {
    stepNumber: '04',
    title: 'Follow-Up & Prevention',
    subtitle: 'Step 4 — Follow-Up & Prevention',
    description:
      'We provide practical recommendations to help reduce the chance of recurring pest problems and verify initial treatment effectiveness.',
    badge: 'Long-term Advice',
    iconName: 'CheckCircle2',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Fast Response',
    description:
      'Quick communication and convenient scheduling tailored to your busy schedule across Dhaka neighborhoods.',
    iconName: 'Zap',
  },
  {
    title: 'Professional Inspection',
    description:
      'We focus on identifying the pest problem and its harborage sources rather than simply treating visible pests.',
    iconName: 'Eye',
  },
  {
    title: 'Targeted Treatment',
    description:
      'Treatment plans are selected according to the pest species, building layout, and environmental factors.',
    iconName: 'Crosshair',
  },
  {
    title: 'Home & Business Solutions',
    description:
      'Services available for apartments, houses, corporate offices, restaurants, warehouses, and commercial properties.',
    iconName: 'Building',
  },
  {
    title: 'Safety-Focused Approach',
    description:
      'Use responsible application practices and provide customers with appropriate preparation and after-treatment guidance.',
    iconName: 'ShieldAlert',
  },
  {
    title: 'Local Dhaka Service',
    description:
      'Focused on serving customers throughout Dhaka and surrounding areas with deep familiarity of local building structures.',
    iconName: 'Compass',
  },
];

export const FAQS_LIST: FaqItem[] = [
  {
    id: 1,
    question: 'How much does pest control cost in Dhaka?',
    answer:
      'Pest control pricing in Dhaka depends primarily on property square footage, the pest species (e.g. cockroaches, bed bugs, or termites), and the severity of the problem. Standard residential apartment treatments start with transparent, competitive estimates, while specialized structural termite barriers or commercial IPM contracts are customized after an inspection.',
    category: 'Pricing & Inspection',
  },
  {
    id: 2,
    question: 'How long does a pest control treatment take?',
    answer:
      'A standard apartment treatment typically takes between 45 to 90 minutes. Larger duplexes, full villas, or deep commercial kitchen cleanouts may take 2 to 3 hours. Our technicians work methodically to ensure every corner and entry point is treated properly.',
    category: 'General',
  },
  {
    id: 3,
    question: 'Is pest control safe for children and pets?',
    answer:
      'We prioritize safety by utilizing targeted application methods, including low-odor gel baits and approved formulations. We advise clearing family members and pets from the treatment zone during spray applications and allowing 2 to 3 hours for treated surfaces to dry completely before re-entry.',
    category: 'Safety',
  },
  {
    id: 4,
    question: 'How often should I get pest control?',
    answer:
      'For typical Dhaka residential apartments, preventative maintenance every 3 to 6 months helps keep cockroach and crawling insect populations under control. High-traffic commercial properties, such as restaurants and grocery stores, often benefit from monthly or bi-monthly Integrated Pest Management visits.',
    category: 'General',
  },
  {
    id: 5,
    question: 'Do you provide apartment pest control in Dhaka?',
    answer:
      'Yes, apartment pest control is our most frequently requested service across Gulshan, Banani, Dhanmondi, Bashundhara, Uttara, Mirpur, and all Dhaka residential sectors. We treat flats of all sizes from 1-bedroom apartments to penthouses.',
    category: 'Dhaka Areas',
  },
  {
    id: 6,
    question: 'Do you provide commercial pest control?',
    answer:
      'Yes, we provide ongoing commercial pest management solutions for corporate offices, IT firms, restaurants, hotels, retail outlets, diagnostic clinics, and warehouses. Flexible after-hours and weekend schedules are available to prevent disruption to your staff and clients.',
    category: 'General',
  },
  {
    id: 7,
    question: 'Can you treat cockroach infestations?',
    answer:
      'Yes. We address both German cockroaches (often nesting in modular kitchen cabinets and appliances) and American cockroaches (entering from drains and utility shafts) using a combination of targeted gel baits, insect growth regulators, and crack-and-crevice residual treatments.',
    category: 'General',
  },
  {
    id: 8,
    question: 'Do you provide bed bug treatment?',
    answer:
      'Yes. Bed bug treatments are conducted with thorough inspection of mattresses, bed frames, headboards, baseboards, and electrical switches. We provide step-by-step preparation guidelines for clothing and bedding to achieve optimal treatment impact.',
    category: 'General',
  },
  {
    id: 9,
    question: 'Do you provide termite control?',
    answer:
      'Yes. Termites cause significant damage to wooden doors, built-in cabinetry, and parquet flooring in Dhaka homes. We provide targeted drilling and chemical barrier injections into affected woodwork and foundation junctions.',
    category: 'General',
  },
  {
    id: 10,
    question: 'Do you provide rat and mouse control?',
    answer:
      'Yes. Rodent control includes tamper-resistant bait stations, specialized capture traps, and practical identification of entry gaps such as air conditioning duct holes, plumbing shafts, and drainage covers.',
    category: 'General',
  },
  {
    id: 11,
    question: 'Do I need to leave my home during treatment?',
    answer:
      'For odorless gel baiting in kitchens, leaving the home is usually not necessary. For residual liquid spray treatments or bed bug applications, we recommend leaving the property for approximately 2 to 3 hours along with children and pets to allow formulations to settle and ventilate thoroughly.',
    category: 'Safety',
  },
  {
    id: 12,
    question: 'How should I prepare my home before pest control?',
    answer:
      'Prior to treatment, we recommend storing open food items and drinking water in sealed containers or inside the refrigerator. Keep children’s toys cleared from floors, wipe down kitchen countertops, and allow our technicians clear access to room baseboards and under-sink cabinets.',
    category: 'Safety',
  },
  {
    id: 13,
    question: 'Do you provide recurring pest control services?',
    answer:
      'Yes. We offer recurring service agreements on quarterly, bi-monthly, and monthly schedules for residential complexes, residential societies, corporate offices, and restaurants.',
    category: 'General',
  },
  {
    id: 14,
    question: 'Which areas of Dhaka do you serve?',
    answer:
      'We serve all major Dhaka neighborhoods including Gulshan, Banani, Baridhara, Bashundhara, Dhanmondi, Uttara, Niketan, DOHS areas (Mirpur DOHS, Baridhara DOHS, Mohakhali DOHS), Mohakhali, Mirpur, Baily Road, Khilgaon, Wari, Tejgaon, Rampura, and adjacent zones.',
    category: 'Dhaka Areas',
  },
  {
    id: 15,
    question: 'Can I get a free pest inspection or quotation?',
    answer:
      'Yes, you can request an initial property assessment and cost estimate over the phone or WhatsApp, and we arrange on-site inspections for qualifying residential and commercial properties throughout Dhaka.',
    category: 'Pricing & Inspection',
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: '[REAL CUSTOMER REVIEW]',
    clientRole: 'Apartment Homeowner',
    location: 'Gulshan 2, Dhaka',
    rating: 5,
    verified: true,
    reviewText:
      'We had a persistent German cockroach issue in our modular kitchen cabinets for months. The technician inspected every hinge and pipe opening, explained the gel application clearly, and followed up within ten days. Highly professional service.',
    date: 'Verified Dhaka Resident',
  },
  {
    id: 2,
    name: '[REAL CUSTOMER REVIEW]',
    clientRole: 'Restaurant Operations Manager',
    location: 'Banani 11, Dhaka',
    rating: 5,
    verified: true,
    reviewText:
      'In the restaurant industry, pest control is non-negotiable. SafeGuard conducts discreet after-hours inspections, provides thorough documentation for our health hygiene log, and keeps our kitchen prep areas strictly protected.',
    date: 'Verified Commercial Client',
  },
  {
    id: 3,
    name: '[REAL CUSTOMER REVIEW]',
    clientRole: 'Resident & Landlord',
    location: 'Dhanmondi, Road 7A, Dhaka',
    rating: 5,
    verified: true,
    reviewText:
      'I arranged termite protection for our wooden door frames and built-in wardrobes before renovating our flat. The team arrived on time with neat equipment and worked cleanly without damaging any finishes.',
    date: 'Verified Dhaka Resident',
  },
  {
    id: 4,
    name: '[REAL CUSTOMER REVIEW]',
    clientRole: 'Family Home Resident',
    location: 'Uttara Sector 4, Dhaka',
    rating: 5,
    verified: true,
    reviewText:
      'Excellent communication via WhatsApp from scheduling to after-care instructions. Appreciated that the technician took the time to check safety precautions for our pet before applying the treatment.',
    date: 'Verified Dhaka Resident',
  },
];

export const PROPERTY_TYPES_OPTIONS: PropertyType[] = [
  'Apartment / Flat',
  'House',
  'Villa',
  'Office',
  'Restaurant',
  'Hotel',
  'Shop',
  'Warehouse',
  'Other',
];

export const PEST_PROBLEM_OPTIONS: PestType[] = [
  'Cockroaches',
  'Bed Bugs',
  'Termites',
  'Mosquitoes',
  'Rats / Mice',
  'Ants',
  'Flies',
  'Spiders',
  'Wasps',
  'Silverfish',
  'Other',
];
