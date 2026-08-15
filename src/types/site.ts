export type CategoryId = 'all' | 'economique' | 'berline' | 'suv' | 'premium';

export interface VehicleSpec {
  transmissionKey: 'transmission.auto' | 'transmission.manual';
  fuelKey: 'fuel.gasoline' | 'fuel.diesel' | 'fuel.hybrid';
  seats: number;
  pricePerDayDZD: number;
  depositDZD: number;
  unlimitedMileage: boolean;
  airConditioning: boolean;
}

export interface Vehicle {
  id: string;
  name: string;
  year: number;
  categoryId: CategoryId;
  categoryNameKey: string;
  image: string;
  specs: VehicleSpec;
  tagKey?: string;
  featured?: boolean;
  featuresKeys: string[];
}

export interface VehicleCategoryInfo {
  id: CategoryId;
  nameKey: string;
  descriptionKey: string;
  iconName: string;
}

export interface CityLocation {
  id: string;
  nameKey: string;
  regionKey: string;
  airportKey: string;
  popular: boolean;
}

export interface ScenicRoute {
  id: string;
  titleKey: string;
  subtitleKey: string;
  distanceKm: number;
  durationDaysKey: string;
  recommendedVehicleId: string;
  recommendedVehicleName: string;
  image: string;
  tagKey: string;
}

export interface CustomerStory {
  id: string;
  customerName: string;
  cityId: string;
  locationKey: string;
  vehicleName: string;
  rentalDurationKey: string;
  timeAgoKey: string;
  quoteKey: string;
  rating: number;
  image: string;
  airportBadgeKey?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  cityKey: string;
  contentKey: string;
  rating: number;
}

export interface TrustPoint {
  id: string;
  titleKey: string;
  descriptionKey: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  titleKey: string;
  descriptionKey: string;
}

export interface WhyItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  questionKey: string;
  answerKey: string;
}

export interface SiteConfig {
  brandName: string;
  whatsappNumber: string;
  phoneDisplay: string;
  whatsappRawUrl: string;
  instagramUrl: string;
  city: string;
  country: string;
}
