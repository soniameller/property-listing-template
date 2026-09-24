import type { Property } from './types';

const photo = (filename: string, alt: string) => ({
  url: `/photos/${filename}`,
  alt,
  type: 'image' as const,
});

export const fallbackProperty: Property = {
  title: 'T3 House with Garden — demo listing',
  slug: 'demo-coastal-house',
  description: `This is sample listing copy so the site runs before you add a real property.

Replace this text in \`src/lib/fallback-data.ts\`, or connect Contentful and publish your own entry.

• **Ground floor:** living room, kitchen, and bathroom.
• **First floor:** three bedrooms and a bathroom.

**Outdoor:** garden, terrace, and parking.

**Location:** The map uses a public demo pin. Change the coordinates so they match your listing.`,
  price: 450000,
  currency: 'EUR',
  propertyType: 'casa',
  address: 'Example Street',
  city: 'Example Bay',
  province: 'Lisbon',
  bedrooms: 3,
  bathrooms: 2,
  builtArea: 160,
  plotArea: 280,
  floor: undefined,
  totalFloors: 2,
  hasElevator: false,
  hasParking: true,
  hasTerrace: true,
  hasGarden: true,
  hasPool: false,
  hasStorage: true,
  energyCertificate: 'B',
  yearBuilt: 2010,
  condition: 'buen-estado',
  orientation: 'South-facing garden',
  heating: 'Central heating and air conditioning',
  furnished: 'optional',
  communityFees: undefined,
  reference: 'DEMO-001',
  features: [
    'Three bedrooms and two bathrooms',
    'Garden and terrace',
    'Off-street parking',
    '160 m² built area on a 280 m² plot',
    'Built in 2010',
    'Replace these bullets with your real features',
  ],
  images: [
    photo('exterior.svg', 'Front of the demo house'),
    photo('living-room.svg', 'Living room placeholder'),
    photo('kitchen.svg', 'Kitchen placeholder'),
    photo('bedroom.svg', 'Bedroom placeholder'),
    photo('bathroom.svg', 'Bathroom placeholder'),
    photo('garden.svg', 'Garden placeholder'),
  ],
  floorPlans: [
    {
      url: '/floor-plans/ground-floor.svg',
      alt: 'Ground floor plan',
      label: 'Ground floor',
    },
    {
      url: '/floor-plans/first-floor.svg',
      alt: 'First floor plan',
      label: 'First floor',
    },
  ],
  whatsappNumber: '+351000000000',
  showWhatsApp: false,
  contactEmail: undefined,
  showContactForm: true,
  latitude: 38.7071,
  longitude: -9.135,
};
