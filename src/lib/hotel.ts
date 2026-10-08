import retreat from '@/assets/retreat.jpg';
import river from '@/assets/river-suite.jpg';
import garden from '@/assets/garden-suite.jpg';
import canopy from '@/assets/canopy-suite.jpg';
import veranda from '@/assets/veranda.jpg';
import bathroom from '@/assets/bathroom.jpg';

// Replace this placeholder with the property's external booking platform URL.
export const hotelConfig = {
  hotelName: 'Rivers End - Guesthouse',
  location: 'Portland, Jamaica',
  bookingUrl: 'https://example.com/rivers-end-booking',
  email: '',
  phone: '',
  instagramUrl: '',
};

// Concept imagery, temporary names and example amenities: replace with verified property details before publishing.
export const images = { retreat, river, garden, canopy, veranda, bathroom };
export interface HotelImage { src: string; alt: string }
export interface Suite {
  name: string;
  slug: 'river-suite' | 'garden-suite' | 'canopy-suite';
  description: string;
  longDescription: string[];
  heroImages: HotelImage[];
  galleryImages: HotelImage[];
  amenities: string[];
  capacity?: string;
  size?: string;
  bookingUrl: string;
}
const amenities = ['Wi-Fi', 'Smart TV', 'Minibar', 'Courtesy set', 'Kettle', 'Hair dryer', 'Bathrobe', 'Slippers', 'Telephone', 'Air conditioning'];
export const suites: Suite[] = [
  {
    name: 'River Suite', slug: 'river-suite',
    description: 'A calm and intimate retreat designed for slow escapes. Soft textures, natural materials and generous light create a space that feels effortlessly comfortable from morning to night.',
    longDescription: ['The River Suite is an intimate retreat designed for slow mornings, restful nights and effortless days. Natural materials, soft textures and carefully considered details create a warm and comfortable atmosphere.', "Whether you’re here for a romantic escape or simply a few quiet days away, the suite offers everything you need to settle in and feel at home."],
    heroImages: [{ src: river, alt: 'Concept interior of the River Suite with natural linen and garden doors' }, { src: veranda, alt: 'Concept of a quiet veranda with woven chairs' }],
    galleryImages: [{ src: bathroom, alt: 'Concept bathroom with natural stone and timber' }, { src: river, alt: 'Light-filled River Suite concept' }], amenities, bookingUrl: hotelConfig.bookingUrl,
  },
  {
    name: 'Garden Suite', slug: 'garden-suite',
    description: 'Designed with privacy, comfort and a strong connection to its surroundings, this suite offers a spacious setting for an unhurried stay.',
    longDescription: ['The Garden Suite brings the outside in. Soft daylight, natural textures and a restful palette create a private setting for mornings that unfold at their own pace.', 'Settle into a thoughtfully considered space where comfort comes quietly, and the simple pleasure of being somewhere beautiful is enough.'],
    heroImages: [{ src: garden, alt: 'Garden Suite concept with a timber canopy bed' }, { src: retreat, alt: 'Concept of the lush guesthouse garden' }],
    galleryImages: [{ src: veranda, alt: 'Concept of a shaded garden veranda' }, { src: bathroom, alt: 'Garden Suite bathroom concept' }], amenities, bookingUrl: hotelConfig.bookingUrl,
  },
  {
    name: 'Canopy Suite', slug: 'canopy-suite',
    description: 'A distinctive retreat where thoughtful interiors meet the character of the surrounding landscape. Designed for guests who want to settle in, slow down and stay a little longer.',
    longDescription: ['The Canopy Suite is a quiet invitation to stay a little longer. Warm timber, airy interiors and a close connection to the landscape lend the space its distinctive character.', 'A comfortable corner for a book, light drifting through the shutters, and room to simply be. Every detail is considered for an effortless, unhurried escape.'],
    heroImages: [{ src: canopy, alt: 'Canopy Suite concept with open shutters and tropical views' }, { src: veranda, alt: 'Concept veranda overlooking tropical greenery' }],
    galleryImages: [{ src: bathroom, alt: 'Canopy Suite bathroom concept' }, { src: canopy, alt: 'Concept reading corner with a woven chair' }], amenities, bookingUrl: hotelConfig.bookingUrl,
  },
];
export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — ${hotelConfig.hotelName}`;
  return { meta: [{ title: fullTitle }, { name: 'description', content: description }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
