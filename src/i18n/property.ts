import type { Property } from '../lib/types';
import type { Locale } from './config';

/** Portuguese (Portugal) copy for the demo property when CMS has no PT locale. */
const propertyPtBySlug: Record<
  string,
  Partial<
    Pick<
      Property,
      | 'title'
      | 'description'
      | 'province'
      | 'orientation'
      | 'heating'
      | 'features'
    >
  > & {
    floorPlans?: Property['floorPlans'];
    images?: Property['images'];
  }
> = {
  'demo-coastal-house': {
    title: 'Moradia T3 com jardim — listagem de demonstração',
    province: 'Lisboa',
    orientation: 'Jardim virado a sul',
    heating: 'Aquecimento central e ar condicionado',
    description: `Este é um texto de exemplo para o site funcionar antes de adicionar uma propriedade real.

Substitua este texto em \`src/lib/fallback-data.ts\`, ou ligue o Contentful e publique a sua entrada.

• **Rés do chão:** sala de estar, cozinha e casa de banho.
• **1.º andar:** três quartos e uma casa de banho.

**Exterior:** jardim, terraço e estacionamento.

**Localização:** O mapa usa um ponto de demonstração. Altere as coordenadas para a sua listagem.`,
    features: [
      'Três quartos e duas casas de banho',
      'Jardim e terraço',
      'Estacionamento',
      '160 m² de área bruta num terreno de 280 m²',
      'Construída em 2010',
      'Substitua estes pontos pelas características reais',
    ],
    floorPlans: [
      {
        url: '/floor-plans/ground-floor.svg',
        alt: 'Planta do rés do chão',
        label: 'Rés do chão',
      },
      {
        url: '/floor-plans/first-floor.svg',
        alt: 'Planta do 1.º andar',
        label: '1.º andar',
      },
    ],
    images: undefined,
  },
};

const imageAltsPt: Record<string, string> = {
  'exterior.svg': 'Frente da casa de demonstração',
  'living-room.svg': 'Marcador da sala de estar',
  'kitchen.svg': 'Marcador da cozinha',
  'bedroom.svg': 'Marcador do quarto',
  'bathroom.svg': 'Marcador da casa de banho',
  'garden.svg': 'Marcador do jardim',
};

export function localizeProperty(property: Property, locale: Locale): Property {
  if (locale === 'en') return property;

  const overrides = propertyPtBySlug[property.slug];
  if (!overrides) return property;

  const images = property.images.map((image) => {
    const filename = image.url.split('/').pop() ?? '';
    const alt = imageAltsPt[filename];
    return alt ? { ...image, alt } : image;
  });

  return {
    ...property,
    ...overrides,
    images,
    floorPlans: overrides.floorPlans ?? property.floorPlans,
    features: overrides.features ?? property.features,
  };
}
