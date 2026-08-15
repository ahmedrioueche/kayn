import {
  Vehicle,
  VehicleCategoryInfo,
  CityLocation,
  ScenicRoute,
  CustomerStory,
  Testimonial,
  TrustPoint,
  ProcessStep,
  WhyItem,
  FaqItem,
  SiteConfig,
} from '@/types/site';

export const siteConfig: SiteConfig = {
  brandName: 'KAYN',
  whatsappNumber: '+213 550 00 00 00',
  phoneDisplay: '0550 00 00 00',
  whatsappRawUrl: 'https://wa.me/213550000000',
  instagramUrl: 'https://instagram.com/kayn_car_rental',
  city: 'Alger',
  country: 'Algérie',
};

export const vehiclesData: Vehicle[] = [
  {
    id: 'peugeot-208',
    name: 'Peugeot 208 GT Line',
    year: 2024,
    categoryId: 'economique',
    categoryNameKey: 'categories.economique.title',
    image: '/images/peugeot-208.webp',
    specs: {
      transmissionKey: 'transmission.auto',
      fuelKey: 'fuel.gasoline',
      seats: 5,
      pricePerDayDZD: 4500,
      depositDZD: 50000,
      unlimitedMileage: true,
      airConditioning: true,
    },
    tagKey: 'vehicles.tags.popular',
    featured: true,
    featuresKeys: [
      'features.appleCarplay',
      'features.cruiseControl',
      'features.reverseCamera',
      'features.unlimitedKm',
      'features.airportDelivery',
    ],
  },
  {
    id: 'renault-clio',
    name: 'Renault Clio 5 Intens',
    year: 2024,
    categoryId: 'economique',
    categoryNameKey: 'categories.economique.title',
    image: '/images/renault-clio.webp',
    specs: {
      transmissionKey: 'transmission.manual',
      fuelKey: 'fuel.diesel',
      seats: 5,
      pricePerDayDZD: 4000,
      depositDZD: 40000,
      unlimitedMileage: true,
      airConditioning: true,
    },
    tagKey: 'vehicles.tags.bestValue',
    featured: true,
    featuresKeys: [
      'features.bluetoothAudio',
      'features.lowFuelConsump',
      'features.parkingSensors',
      'features.unlimitedKm',
      'features.fullInsurance',
    ],
  },
  {
    id: 'vw-golf-8',
    name: 'Volkswagen Golf 8 R-Line',
    year: 2024,
    categoryId: 'berline',
    categoryNameKey: 'categories.berline.title',
    image: '/images/volkswagen-golf-8.webp',
    specs: {
      transmissionKey: 'transmission.auto',
      fuelKey: 'fuel.gasoline',
      seats: 5,
      pricePerDayDZD: 7500,
      depositDZD: 80000,
      unlimitedMileage: true,
      airConditioning: true,
    },
    tagKey: 'vehicles.tags.comfort',
    featured: true,
    featuresKeys: [
      'features.virtualCockpit',
      'features.dsgTransmission',
      'features.ledHeadlights',
      'features.leatherSeats',
      'features.airportDelivery',
    ],
  },
  {
    id: 'toyota-yaris',
    name: 'Toyota Yaris Sedan',
    year: 2024,
    categoryId: 'economique',
    categoryNameKey: 'categories.economique.title',
    image: '/images/toyota-yaris.webp',
    specs: {
      transmissionKey: 'transmission.auto',
      fuelKey: 'fuel.gasoline',
      seats: 5,
      pricePerDayDZD: 5000,
      depositDZD: 50000,
      unlimitedMileage: true,
      airConditioning: true,
    },
    tagKey: 'vehicles.tags.reliable',
    featured: true,
    featuresKeys: [
      'features.cvtTransmission',
      'features.ecoMode',
      'features.touchscreenNav',
      'features.unlimitedKm',
      'features.fullInsurance',
    ],
  },
];

export const customerStoriesData: CustomerStory[] = [
  {
    id: 'story-1',
    customerName: 'Karim B.',
    cityId: 'alger',
    locationKey: 'stories.loc1',
    vehicleName: 'Volkswagen Golf 8 R-Line',
    rentalDurationKey: 'stories.dur1',
    timeAgoKey: 'stories.time1',
    quoteKey: 'stories.quote1',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    airportBadgeKey: 'locations.alger.airport',
  },
  {
    id: 'story-2',
    customerName: 'Sonia M.',
    cityId: 'oran',
    locationKey: 'stories.loc2',
    vehicleName: 'Peugeot 208 GT Line',
    rentalDurationKey: 'stories.dur2',
    timeAgoKey: 'stories.time2',
    quoteKey: 'stories.quote2',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
    airportBadgeKey: 'locations.oran.airport',
  },
  {
    id: 'story-3',
    customerName: 'Walid T.',
    cityId: 'constantine',
    locationKey: 'stories.loc3',
    vehicleName: 'Renault Clio 5 Intens',
    rentalDurationKey: 'stories.dur3',
    timeAgoKey: 'stories.time3',
    quoteKey: 'stories.quote3',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'story-4',
    customerName: 'Mehdi K.',
    cityId: 'alger',
    locationKey: 'stories.loc4',
    vehicleName: 'Toyota Yaris Sedan',
    rentalDurationKey: 'stories.dur4',
    timeAgoKey: 'stories.time4',
    quoteKey: 'stories.quote4',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
    airportBadgeKey: 'locations.alger.airport',
  },
];

export const scenicRoutesData: ScenicRoute[] = [
  {
    id: 'corniche-oran',
    titleKey: 'routes.oran.title',
    subtitleKey: 'routes.oran.subtitle',
    distanceKm: 120,
    durationDaysKey: 'routes.oran.duration',
    recommendedVehicleId: 'renault-clio',
    recommendedVehicleName: 'Renault Clio 5 Intens',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    tagKey: 'routes.oran.tag',
  },
  {
    id: 'cote-tipaza',
    titleKey: 'routes.tipaza.title',
    subtitleKey: 'routes.tipaza.subtitle',
    distanceKm: 85,
    durationDaysKey: 'routes.tipaza.duration',
    recommendedVehicleId: 'toyota-yaris',
    recommendedVehicleName: 'Toyota Yaris Sedan',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    tagKey: 'routes.tipaza.tag',
  },
  {
    id: 'gorges-rhummel',
    titleKey: 'routes.constantine.title',
    subtitleKey: 'routes.constantine.subtitle',
    distanceKm: 240,
    durationDaysKey: 'routes.constantine.duration',
    recommendedVehicleId: 'vw-golf-8',
    recommendedVehicleName: 'Volkswagen Golf 8 R-Line',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    tagKey: 'routes.constantine.tag',
  },
  {
    id: 'chiffa-blida',
    titleKey: 'routes.blida.title',
    subtitleKey: 'routes.blida.subtitle',
    distanceKm: 60,
    durationDaysKey: 'routes.blida.duration',
    recommendedVehicleId: 'peugeot-208',
    recommendedVehicleName: 'Peugeot 208 GT Line',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    tagKey: 'routes.blida.tag',
  },
];

export const categoriesData: VehicleCategoryInfo[] = [
  {
    id: 'economique',
    nameKey: 'categories.economique.title',
    descriptionKey: 'categories.economique.desc',
    iconName: 'Car',
  },
  {
    id: 'berline',
    nameKey: 'categories.berline.title',
    descriptionKey: 'categories.berline.desc',
    iconName: 'Shield',
  },
  {
    id: 'suv',
    nameKey: 'categories.suv.title',
    descriptionKey: 'categories.suv.desc',
    iconName: 'Compass',
  },
  {
    id: 'premium',
    nameKey: 'categories.premium.title',
    descriptionKey: 'categories.premium.desc',
    iconName: 'Sparkles',
  },
];

export const locationsData: CityLocation[] = [
  {
    id: 'alger',
    nameKey: 'locations.alger.name',
    regionKey: 'locations.alger.region',
    airportKey: 'locations.alger.airport',
    popular: true,
  },
  {
    id: 'oran',
    nameKey: 'locations.oran.name',
    regionKey: 'locations.oran.region',
    airportKey: 'locations.oran.airport',
    popular: true,
  },
  {
    id: 'constantine',
    nameKey: 'locations.constantine.name',
    regionKey: 'locations.constantine.region',
    airportKey: 'locations.constantine.airport',
    popular: true,
  },
  {
    id: 'blida',
    nameKey: 'locations.blida.name',
    regionKey: 'locations.blida.region',
    airportKey: 'locations.blida.airport',
    popular: false,
  },
];

export const trustPointsData: TrustPoint[] = [
  {
    id: 'recent-vehicles',
    titleKey: 'trust.recent.title',
    descriptionKey: 'trust.recent.desc',
    iconName: 'CheckCircle2',
  },
  {
    id: 'transparent-pricing',
    titleKey: 'trust.pricing.title',
    descriptionKey: 'trust.pricing.desc',
    iconName: 'Tag',
  },
  {
    id: 'fast-booking',
    titleKey: 'trust.booking.title',
    descriptionKey: 'trust.booking.desc',
    iconName: 'Zap',
  },
  {
    id: 'support-24-7',
    titleKey: 'trust.support.title',
    descriptionKey: 'trust.support.desc',
    iconName: 'Headphones',
  },
];

export const processStepsData: ProcessStep[] = [
  {
    number: '01',
    titleKey: 'process.step1.title',
    descriptionKey: 'process.step1.desc',
  },
  {
    number: '02',
    titleKey: 'process.step2.title',
    descriptionKey: 'process.step2.desc',
  },
  {
    number: '03',
    titleKey: 'process.step3.title',
    descriptionKey: 'process.step3.desc',
  },
  {
    number: '04',
    titleKey: 'process.step4.title',
    descriptionKey: 'process.step4.desc',
  },
];

export const whyItemsData: WhyItem[] = [
  {
    id: 'selected-vehicles',
    titleKey: 'why.selected.title',
    descriptionKey: 'why.selected.desc',
    iconName: 'Award',
  },
  {
    id: 'simple-process',
    titleKey: 'why.process.title',
    descriptionKey: 'why.process.desc',
    iconName: 'Sliders',
  },
  {
    id: 'clear-rates',
    titleKey: 'why.rates.title',
    descriptionKey: 'why.rates.desc',
    iconName: 'Receipt',
  },
  {
    id: 'available-support',
    titleKey: 'why.support.title',
    descriptionKey: 'why.support.desc',
    iconName: 'MessageSquare',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'yacine',
    author: 'Yacine',
    cityKey: 'locations.alger.name',
    contentKey: 'testimonials.yacine.content',
    rating: 5,
  },
  {
    id: 'sara',
    author: 'Sara',
    cityKey: 'locations.oran.name',
    contentKey: 'testimonials.sara.content',
    rating: 5,
  },
  {
    id: 'amine',
    author: 'Amine',
    cityKey: 'locations.blida.name',
    contentKey: 'testimonials.amine.content',
    rating: 5,
  },
];

export const faqData: FaqItem[] = [
  {
    id: 'documents',
    questionKey: 'faq.docs.q',
    answerKey: 'faq.docs.a',
  },
  {
    id: 'deposit',
    questionKey: 'faq.deposit.q',
    answerKey: 'faq.deposit.a',
  },
  {
    id: 'airport',
    questionKey: 'faq.airport.q',
    answerKey: 'faq.airport.a',
  },
  {
    id: 'mileage',
    questionKey: 'faq.mileage.q',
    answerKey: 'faq.mileage.a',
  },
  {
    id: 'cancellation',
    questionKey: 'faq.cancel.q',
    answerKey: 'faq.cancel.a',
  },
];
