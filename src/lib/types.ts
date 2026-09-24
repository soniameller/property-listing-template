export type PropertyType =
  | 'piso'
  | 'casa'
  | 'chalet'
  | 'adosado'
  | 'atico'
  | 'duplex'
  | 'estudio'
  | 'local'
  | 'terreno';

export type PropertyCondition =
  | 'obra-nueva'
  | 'buen-estado'
  | 'reformado'
  | 'a-reformar';

export type FurnishedStatus = 'yes' | 'no' | 'optional';

export interface PropertyImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  type?: 'image' | 'video';
}

export interface FloorPlan {
  url: string;
  alt: string;
  label: string;
}

export interface Property {
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  propertyType: PropertyType;
  address: string;
  city: string;
  province: string;
  postalCode?: string;
  bedrooms: number;
  bathrooms: number;
  builtArea: number;
  plotArea?: number;
  floor?: number;
  totalFloors?: number;
  hasElevator: boolean;
  hasParking: boolean;
  hasTerrace: boolean;
  hasGarden: boolean;
  hasPool: boolean;
  hasStorage: boolean;
  energyCertificate?: string;
  yearBuilt?: number;
  condition: PropertyCondition;
  orientation?: string;
  heating?: string;
  furnished: FurnishedStatus;
  communityFees?: number;
  reference?: string;
  features: string[];
  images: PropertyImage[];
  floorPlans?: FloorPlan[];
  whatsappNumber: string;
  showWhatsApp: boolean;
  contactEmail?: string;
  showContactForm: boolean;
  mapEmbedUrl?: string;
  latitude?: number;
  longitude?: number;
}
