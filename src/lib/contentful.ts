import * as contentful from 'contentful';
import type { Entry, EntryFieldTypes } from 'contentful';
import { fallbackProperty } from './fallback-data';
import type {
  Property,
  PropertyCondition,
  FurnishedStatus,
  PropertyImage,
  PropertyType,
} from './types';

interface PropertySkeleton {
  contentTypeId: 'property';
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    price: EntryFieldTypes.Number;
    currency: EntryFieldTypes.Text;
    propertyType: EntryFieldTypes.Text;
    address: EntryFieldTypes.Text;
    city: EntryFieldTypes.Text;
    province: EntryFieldTypes.Text;
    postalCode?: EntryFieldTypes.Text;
    bedrooms: EntryFieldTypes.Integer;
    bathrooms: EntryFieldTypes.Integer;
    builtArea: EntryFieldTypes.Number;
    plotArea?: EntryFieldTypes.Number;
    floor?: EntryFieldTypes.Integer;
    totalFloors?: EntryFieldTypes.Integer;
    hasElevator: EntryFieldTypes.Boolean;
    hasParking: EntryFieldTypes.Boolean;
    hasTerrace: EntryFieldTypes.Boolean;
    hasGarden: EntryFieldTypes.Boolean;
    hasPool: EntryFieldTypes.Boolean;
    hasStorage: EntryFieldTypes.Boolean;
    energyCertificate?: EntryFieldTypes.Text;
    yearBuilt?: EntryFieldTypes.Integer;
    condition: EntryFieldTypes.Text;
    orientation?: EntryFieldTypes.Text;
    heating?: EntryFieldTypes.Text;
    furnished: EntryFieldTypes.Text;
    communityFees?: EntryFieldTypes.Number;
    reference?: EntryFieldTypes.Text;
    features?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    whatsappNumber: EntryFieldTypes.Text;
    showWhatsApp?: EntryFieldTypes.Boolean;
    contactEmail?: EntryFieldTypes.Text;
    showContactForm: EntryFieldTypes.Boolean;
    mapEmbedUrl?: EntryFieldTypes.Text;
    latitude?: EntryFieldTypes.Number;
    longitude?: EntryFieldTypes.Number;
  };
}

function mapImages(
  entry: Entry<PropertySkeleton, undefined, string>,
): PropertyImage[] {
  const assets = entry.fields.images ?? [];

  return assets
    .map((asset) => {
      if (!asset || typeof asset !== 'object' || !('fields' in asset)) {
        return null;
      }

      const file = asset.fields?.file;
      if (!file || typeof file !== 'object' || !('url' in file)) {
        return null;
      }

      const url =
        typeof file.url === 'string'
          ? file.url.startsWith('//')
            ? `https:${file.url}`
            : file.url
          : '';

      if (!url) return null;

      return {
        url,
        alt:
          typeof asset.fields?.title === 'string'
            ? asset.fields.title
            : entry.fields.title,
        width:
          typeof file.details === 'object' &&
          file.details &&
          'image' in file.details &&
          file.details.image &&
          typeof file.details.image === 'object' &&
          'width' in file.details.image
            ? Number(file.details.image.width)
            : undefined,
        height:
          typeof file.details === 'object' &&
          file.details &&
          'image' in file.details &&
          file.details.image &&
          typeof file.details.image === 'object' &&
          'height' in file.details.image
            ? Number(file.details.image.height)
            : undefined,
      };
    })
    .filter((image): image is PropertyImage => image !== null);
}

function mapFurnished(value: unknown, fallback: FurnishedStatus): FurnishedStatus {
  if (value === true || value === 'yes') return 'yes';
  if (value === false || value === 'no') return 'no';
  if (value === 'optional') return 'optional';
  return fallback;
}

function pickString(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.trim() !== '' ? value : fallback;
}

function pickOptionalString(
  value: unknown,
  fallback: string | undefined,
): string | undefined {
  if (typeof value === 'string' && value.trim() !== '') return value;
  return fallback;
}

function pickNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && !Number.isNaN(value) ? value : fallback;
}

function pickOptionalNumber(
  value: unknown,
  fallback: number | undefined,
): number | undefined {
  if (typeof value === 'number' && !Number.isNaN(value)) return value;
  return fallback;
}

function pickBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

const propertyTypes: PropertyType[] = [
  'piso',
  'casa',
  'chalet',
  'adosado',
  'atico',
  'duplex',
  'estudio',
  'local',
  'terreno',
];

const propertyConditions: PropertyCondition[] = [
  'obra-nueva',
  'buen-estado',
  'reformado',
  'a-reformar',
];

function pickPropertyType(value: unknown, fallback: PropertyType): PropertyType {
  return typeof value === 'string' &&
    propertyTypes.includes(value as PropertyType)
    ? (value as PropertyType)
    : fallback;
}

function pickCondition(
  value: unknown,
  fallback: PropertyCondition,
): PropertyCondition {
  return typeof value === 'string' &&
    propertyConditions.includes(value as PropertyCondition)
    ? (value as PropertyCondition)
    : fallback;
}

function mapEntry(entry: Entry<PropertySkeleton, undefined, string>): Property {
  const fields = entry.fields;
  const images = mapImages(entry);
  const features = Array.isArray(fields.features)
    ? fields.features.filter((item): item is string => typeof item === 'string')
    : [];

  return {
    title: pickString(fields.title, fallbackProperty.title),
    slug: pickString(fields.slug, fallbackProperty.slug),
    description: pickString(fields.description, fallbackProperty.description),
    price: pickNumber(fields.price, fallbackProperty.price),
    currency: pickString(fields.currency, fallbackProperty.currency),
    propertyType: pickPropertyType(
      fields.propertyType,
      fallbackProperty.propertyType,
    ),
    address: pickString(fields.address, fallbackProperty.address),
    city: pickString(fields.city, fallbackProperty.city),
    province: pickString(fields.province, fallbackProperty.province),
    postalCode: pickOptionalString(
      fields.postalCode,
      fallbackProperty.postalCode,
    ),
    bedrooms: pickNumber(fields.bedrooms, fallbackProperty.bedrooms),
    bathrooms: pickNumber(fields.bathrooms, fallbackProperty.bathrooms),
    builtArea: pickNumber(fields.builtArea, fallbackProperty.builtArea),
    plotArea: pickOptionalNumber(fields.plotArea, fallbackProperty.plotArea),
    floor: pickOptionalNumber(fields.floor, fallbackProperty.floor),
    totalFloors: pickOptionalNumber(
      fields.totalFloors,
      fallbackProperty.totalFloors,
    ),
    hasElevator: pickBoolean(
      fields.hasElevator,
      fallbackProperty.hasElevator,
    ),
    hasParking: pickBoolean(fields.hasParking, fallbackProperty.hasParking),
    hasTerrace: pickBoolean(fields.hasTerrace, fallbackProperty.hasTerrace),
    hasGarden: pickBoolean(fields.hasGarden, fallbackProperty.hasGarden),
    hasPool: pickBoolean(fields.hasPool, fallbackProperty.hasPool),
    hasStorage: pickBoolean(fields.hasStorage, fallbackProperty.hasStorage),
    energyCertificate: pickOptionalString(
      fields.energyCertificate,
      fallbackProperty.energyCertificate,
    ),
    yearBuilt: pickOptionalNumber(
      fields.yearBuilt,
      fallbackProperty.yearBuilt,
    ),
    condition: pickCondition(fields.condition, fallbackProperty.condition),
    orientation: pickOptionalString(
      fields.orientation,
      fallbackProperty.orientation,
    ),
    heating: pickOptionalString(fields.heating, fallbackProperty.heating),
    furnished: mapFurnished(fields.furnished, fallbackProperty.furnished),
    communityFees: pickOptionalNumber(
      fields.communityFees,
      fallbackProperty.communityFees,
    ),
    reference: pickOptionalString(fields.reference, fallbackProperty.reference),
    features: features.length > 0 ? features : fallbackProperty.features,
    images: images.length > 0 ? images : fallbackProperty.images,
    floorPlans: fallbackProperty.floorPlans,
    whatsappNumber: pickString(
      fields.whatsappNumber,
      fallbackProperty.whatsappNumber,
    ),
    showWhatsApp: pickBoolean(
      fields.showWhatsApp,
      fallbackProperty.showWhatsApp,
    ),
    contactEmail: pickOptionalString(
      fields.contactEmail,
      fallbackProperty.contactEmail,
    ),
    showContactForm: pickBoolean(
      fields.showContactForm,
      fallbackProperty.showContactForm,
    ),
    mapEmbedUrl: pickOptionalString(
      fields.mapEmbedUrl,
      fallbackProperty.mapEmbedUrl,
    ),
    latitude: pickOptionalNumber(fields.latitude, fallbackProperty.latitude),
    longitude: pickOptionalNumber(fields.longitude, fallbackProperty.longitude),
  };
}

function createClient() {
  const space = import.meta.env.CONTENTFUL_SPACE_ID;
  const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN;

  if (!space || !accessToken) {
    return null;
  }

  return contentful.createClient({
    space,
    accessToken,
  });
}

export async function getProperty(slug?: string): Promise<Property> {
  const client = createClient();

  if (!client) {
    console.warn(
      'Contentful not configured — using demo data. Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN.',
    );
    return fallbackProperty;
  }

  try {
    const query: contentful.EntriesQueries<PropertySkeleton, undefined> = {
      content_type: 'property',
      include: 2,
      limit: 1,
    };

    if (slug) {
      query['fields.slug'] = slug;
    }

    const response = await client.getEntries<PropertySkeleton>(query);

    if (!response.items.length) {
      console.warn('No property found in Contentful — using demo data.');
      return fallbackProperty;
    }

    return mapEntry(response.items[0]);
  } catch (error) {
    console.error('Failed to fetch from Contentful:', error);
    return fallbackProperty;
  }
}
