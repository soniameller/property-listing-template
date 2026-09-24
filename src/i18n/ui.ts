import type { Locale } from './config';

const en = {
  'meta.defaultDescription':
    'Discover every detail of this property for sale. Photos, features, and direct contact.',
  'meta.forSaleSuffix': 'For sale',
  'header.forSale': 'For sale',
  'header.contact': 'Contact',
  'gallery.ariaLabel': 'Photo gallery',
  'gallery.viewPhoto': 'View photo',
  'gallery.viewVideo': 'View video',
  'gallery.viewAllPhotos': 'View all {count} photos',
  'gallery.viewAllPhotosDesktop': 'View all photos ({count})',
  'gallery.viewer': 'Photo viewer',
  'gallery.close': 'Close',
  'gallery.previous': 'Previous photo',
  'gallery.next': 'Next photo',
  'gallery.loading': 'Loading image',
  'gallery.inspirationCta': 'See styling inspiration',
  'gallery.inspirationHint': 'Imagine the rooms furnished differently',
  'details.forSale': '{type} for sale',
  'details.askingPrice': 'Asking price',
  'details.requestViewing': 'Request a viewing',
  'details.bedrooms': 'Bedrooms',
  'details.bathrooms': 'Bathrooms',
  'details.builtArea': 'Built area',
  'details.plot': 'Plot',
  'details.description': 'Description',
  'details.features': 'Features',
  'details.extras': 'Extras and amenities',
  'details.type': 'Type',
  'details.condition': 'Condition',
  'details.floor': 'Floor',
  'details.floors': 'Floors',
  'details.floorsValue': '{count} in total',
  'details.yearBuilt': 'Year built',
  'details.energyCertificate': 'Energy certificate',
  'details.orientation': 'Orientation',
  'details.heating': 'Heating & energy',
  'details.furnished': 'Furnished',
  'details.communityFees': 'Community fees',
  'details.perMonth': '{price}/month',
  'details.reference': 'Reference',
  'amenity.parking': 'Parking',
  'amenity.terrace': 'Terrace',
  'amenity.elevator': 'Lift',
  'amenity.garden': 'Garden',
  'amenity.pool': 'Swimming pool',
  'amenity.storage': 'Storage',
  'location.title': 'Approximate location',
  'location.approx':
    'Approximate location. The exact address is shared on request.',
  'location.mapTitle': 'Approximate map location',
  'location.openMap': 'Open map in a new tab',
  'floorPlans.title': 'Floor plans',
  'floorPlans.subtitle': 'Architectural drawings.',
  'floorPlans.view': 'View {label} plan',
  'floorPlans.close': 'Close',
  'inspiration.title': 'Inspiration',
  'inspiration.summary': 'Imagine the spaces styled in a different way.',
  'inspiration.seeImages': 'See images',
  'inspiration.hideImages': 'Hide images',
  'inspiration.intro':
    'A few ideas to help you picture how the house could feel with a fresh approach to furniture and styling.',
  'inspiration.livingRoom': 'Living room',
  'inspiration.livingRoomAlt':
    'AI-generated furnishing concept for the living room in warm neutral tones',
  'inspiration.bedroom': 'Bedroom',
  'inspiration.bedroomAlt':
    'AI-generated furnishing concept for the bedroom in soft natural tones',
  'inspiration.patio': 'Patio',
  'inspiration.patioAlt':
    'AI-generated furnishing concept for the patio with an outdoor dining area',
  'inspiration.bedroomOffice': 'Bedroom and study',
  'inspiration.bedroomOfficeAlt':
    'AI-generated furnishing concept for a bright bedroom with a study area',
  'inspiration.guestBedroom': 'Guest bedroom',
  'inspiration.guestBedroomAlt':
    'AI-generated furnishing concept for the compact guest bedroom',
  'inspiration.atticStudio': 'Attic studio',
  'inspiration.atticStudioAlt':
    'AI-generated furnishing concept for the attic as a bright studio and lounge',
  'inspiration.disclaimer':
    'AI-generated images for inspiration only. Furniture and decorative items are not included with the property.',
  'contact.title': 'Interested in this property?',
  'contact.whatsappIntro':
    'Message us on WhatsApp to ask questions or arrange a viewing.',
  'contact.whatsappCta': 'Contact via WhatsApp',
  'contact.formIntro':
    'Leave your details in the contact form and we will get back to you as soon as possible.',
  'contact.alsoEmail': 'You can also email',
  'contact.formTitle': 'Contact form',
  'contact.formHelp':
    'Leave your details and we will get back to you as soon as possible. Fields marked with * are required.',
  'contact.honeypot': 'Do not fill in:',
  'contact.name': 'Name',
  'contact.email': 'Email',
  'contact.phone': 'Phone',
  'contact.message': 'Message',
  'contact.defaultMessage':
    'Hello, I am interested in the property "{title}".',
  'contact.whatsappMessage':
    'Hello, I am interested in the property "{title}" ({city}). Could we arrange a viewing?',
  'contact.error':
    'Something went wrong and your message could not be sent. Please try again in a moment.',
  'contact.emailFallback': 'email us directly',
  'contact.send': 'Send message',
  'contact.sending': 'Sending...',
  'footer.tagline': 'Property for sale',
  'footer.disclaimer':
    'Information provided for guidance only. Please confirm details with the seller.',
  'thanks.eyebrow': 'Thank you',
  'thanks.title': 'Message sent',
  'thanks.body':
    'We have received your enquiry. We will contact you as soon as possible.',
  'thanks.back': 'Back to the property',
  'thanks.pageTitle': 'Message sent | Property for sale',
  'lang.switchTo': 'Switch language',
  'lang.en': 'EN',
  'lang.pt': 'PT',
  'type.piso': 'Flat',
  'type.casa': 'House',
  'type.chalet': 'Chalet',
  'type.adosado': 'Semi-detached house',
  'type.atico': 'Penthouse',
  'type.duplex': 'Duplex',
  'type.estudio': 'Studio',
  'type.local': 'Commercial property',
  'type.terreno': 'Land',
  'condition.obra-nueva': 'New build',
  'condition.buen-estado': 'Good condition',
  'condition.reformado': 'Renovated',
  'condition.a-reformar': 'Needs renovation',
  'furnished.yes': 'Yes',
  'furnished.no': 'No',
  'furnished.optional': 'Optional',
} as const;

type UiKey = keyof typeof en;

const pt: Record<UiKey, string> = {
  'meta.defaultDescription':
    'Conheça todos os detalhes desta propriedade à venda. Fotografias, características e contacto directo.',
  'meta.forSaleSuffix': 'À venda',
  'header.forSale': 'À venda',
  'header.contact': 'Contactar',
  'gallery.ariaLabel': 'Galeria de fotografias',
  'gallery.viewPhoto': 'Ver fotografia',
  'gallery.viewVideo': 'Ver vídeo',
  'gallery.viewAllPhotos': 'Ver as {count} fotografias',
  'gallery.viewAllPhotosDesktop': 'Ver todas as fotografias ({count})',
  'gallery.viewer': 'Visualizador de fotografias',
  'gallery.close': 'Fechar',
  'gallery.previous': 'Fotografia anterior',
  'gallery.next': 'Fotografia seguinte',
  'gallery.loading': 'A carregar imagem',
  'gallery.inspirationCta': 'Ver inspiração de decoração',
  'gallery.inspirationHint': 'Imagine os espaços decorados de outra forma',
  'details.forSale': '{type} à venda',
  'details.askingPrice': 'Preço pedido',
  'details.requestViewing': 'Pedir visita',
  'details.bedrooms': 'Quartos',
  'details.bathrooms': 'Casas de banho',
  'details.builtArea': 'Área bruta',
  'details.plot': 'Terreno',
  'details.description': 'Descrição',
  'details.features': 'Características',
  'details.extras': 'Extras e comodidades',
  'details.type': 'Tipo',
  'details.condition': 'Estado',
  'details.floor': 'Andar',
  'details.floors': 'Pisos',
  'details.floorsValue': '{count} no total',
  'details.yearBuilt': 'Ano de construção',
  'details.energyCertificate': 'Certificado energético',
  'details.orientation': 'Orientação',
  'details.heating': 'Aquecimento e energia',
  'details.furnished': 'Mobilado',
  'details.communityFees': 'Quotas de condomínio',
  'details.perMonth': '{price}/mês',
  'details.reference': 'Referência',
  'amenity.parking': 'Estacionamento',
  'amenity.terrace': 'Terraço',
  'amenity.elevator': 'Elevador',
  'amenity.garden': 'Jardim',
  'amenity.pool': 'Piscina',
  'amenity.storage': 'Arrumos',
  'location.title': 'Localização aproximada',
  'location.approx':
    'Localização aproximada. A morada exacta é partilhada mediante pedido.',
  'location.mapTitle': 'Mapa com localização aproximada',
  'location.openMap': 'Abrir mapa num novo separador',
  'floorPlans.title': 'Plantas',
  'floorPlans.subtitle': 'Desenhos arquitectónicos.',
  'floorPlans.view': 'Ver planta {label}',
  'floorPlans.close': 'Fechar',
  'inspiration.title': 'Inspiração',
  'inspiration.summary': 'Imagine os espaços decorados de uma forma diferente.',
  'inspiration.seeImages': 'Ver imagens',
  'inspiration.hideImages': 'Ocultar imagens',
  'inspiration.intro':
    'Algumas ideias para ajudar a imaginar como a casa poderia ficar com uma nova abordagem ao mobiliário e à decoração.',
  'inspiration.livingRoom': 'Sala de estar',
  'inspiration.livingRoomAlt':
    'Conceito de mobiliário gerado por IA para a sala de estar em tons neutros e acolhedores',
  'inspiration.bedroom': 'Quarto',
  'inspiration.bedroomAlt':
    'Conceito de mobiliário gerado por IA para o quarto em tons naturais suaves',
  'inspiration.patio': 'Pátio',
  'inspiration.patioAlt':
    'Conceito de mobiliário gerado por IA para o pátio com uma zona de refeições exterior',
  'inspiration.bedroomOffice': 'Quarto e escritório',
  'inspiration.bedroomOfficeAlt':
    'Conceito de mobiliário gerado por IA para um quarto luminoso com zona de escritório',
  'inspiration.guestBedroom': 'Quarto de hóspedes',
  'inspiration.guestBedroomAlt':
    'Conceito de mobiliário gerado por IA para o quarto de hóspedes compacto',
  'inspiration.atticStudio': 'Estúdio no sótão',
  'inspiration.atticStudioAlt':
    'Conceito de mobiliário gerado por IA para o sótão como estúdio e zona de estar luminosa',
  'inspiration.disclaimer':
    'Imagens geradas por IA apenas para inspiração. O mobiliário e os elementos decorativos não estão incluídos na propriedade.',
  'contact.title': 'Interessado nesta propriedade?',
  'contact.whatsappIntro':
    'Envie-nos uma mensagem no WhatsApp para esclarecer dúvidas ou marcar uma visita.',
  'contact.whatsappCta': 'Contactar via WhatsApp',
  'contact.formIntro':
    'Deixe os seus dados no formulário de contacto e entraremos em contacto consigo o mais breve possível.',
  'contact.alsoEmail': 'Também pode enviar um email para',
  'contact.formTitle': 'Formulário de contacto',
  'contact.formHelp':
    'Deixe os seus dados e entraremos em contacto consigo o mais breve possível. Os campos marcados com * são obrigatórios.',
  'contact.honeypot': 'Não preencha:',
  'contact.name': 'Nome',
  'contact.email': 'Email',
  'contact.phone': 'Telefone',
  'contact.message': 'Mensagem',
  'contact.defaultMessage':
    'Olá, estou interessado na propriedade "{title}".',
  'contact.whatsappMessage':
    'Olá, estou interessado na propriedade "{title}" ({city}). Podemos marcar uma visita?',
  'contact.error':
    'Algo correu mal e a sua mensagem não pôde ser enviada. Tente novamente dentro de momentos.',
  'contact.emailFallback': 'enviar-nos um email directamente',
  'contact.send': 'Enviar mensagem',
  'contact.sending': 'A enviar...',
  'footer.tagline': 'Propriedade à venda',
  'footer.disclaimer':
    'Informação prestada apenas a título orientativo. Confirme os detalhes com o vendedor.',
  'thanks.eyebrow': 'Obrigado',
  'thanks.title': 'Mensagem enviada',
  'thanks.body':
    'Recebemos o seu pedido. Entraremos em contacto consigo o mais breve possível.',
  'thanks.back': 'Voltar à propriedade',
  'thanks.pageTitle': 'Mensagem enviada | Propriedade à venda',
  'lang.switchTo': 'Mudar idioma',
  'lang.en': 'EN',
  'lang.pt': 'PT',
  'type.piso': 'Apartamento',
  'type.casa': 'Casa',
  'type.chalet': 'Moradia',
  'type.adosado': 'Moradia geminada',
  'type.atico': 'Penthouse',
  'type.duplex': 'Duplex',
  'type.estudio': 'Estúdio',
  'type.local': 'Espaço comercial',
  'type.terreno': 'Terreno',
  'condition.obra-nueva': 'Nova construção',
  'condition.buen-estado': 'Bom estado',
  'condition.reformado': 'Renovado',
  'condition.a-reformar': 'Para renovar',
  'furnished.yes': 'Sim',
  'furnished.no': 'Não',
  'furnished.optional': 'Opcional',
};

export const ui = { en, pt } satisfies Record<Locale, Record<UiKey, string>>;

export type TranslationKey = UiKey;

export function t(
  locale: Locale,
  key: TranslationKey,
  vars?: Record<string, string | number>,
): string {
  let value = ui[locale][key] ?? ui.en[key] ?? key;
  if (vars) {
    for (const [name, replacement] of Object.entries(vars)) {
      value = value.replaceAll(`{${name}}`, String(replacement));
    }
  }
  return value;
}
