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
  bookingUrl: 'https://riversendjamaica.lodgify.com/en/all-properties',
  email: 'info@riversendjamaica.com',
  address: '207A Hermitage Farm, Hope Bay, Portland, Jamaica',
  phone: '+ 1 (876) 424 -7568',
  whatsapp: '+ 1 (240) 462 - 2923',
  instagramUrl: 'https://www.instagram.com/riversendjamaica/',
};

// Concept imagery, temporary names and example amenities: replace with verified property details before publishing.
export const images = { retreat, river, garden, canopy, veranda, bathroom };
export interface HotelImage { src: string; alt: string }
export interface Activity { name: string; location: string; paragraphs: string[]; image: HotelImage }
export const activities: Activity[] = [
  { name: 'Surfing at Boston Bay', location: 'Boston, Portland, JA', paragraphs: ['Boston Bay is home to Jamaica’s only true surf break, a small cove where waves roll in steady and locals are out early. It’s the kind of place where learning to surf feels natural, guided by experienced instructors who work with the tide and your pace.', 'After, head across the road to Boston Jerk, home of the original jerk. Charcoal pits smoke all day, and the pork and chicken are as much a part of the experience as the waves themselves.'], image: { src: 'https://images.squarespace-cdn.com/content/v1/69bac66c78ee605a94121c25/ef56774a-72dc-4896-a98c-368a0419535e/View+recent+photos.png?format=1500w', alt: 'Surfing at Boston Bay in Portland, Jamaica' } },
  { name: 'Frenchman’s Cove', location: 'San San, Portland, JA', paragraphs: ['Spend a few hours at Frenchman’s Cove, one of the most coveted beaches in all of Jamaica. What makes it distinct is the freshwater river that flows directly into the sea, giving you two completely different experiences in one place.', 'Start in the cool, shaded river, then move out to the ocean when you’re ready. The beach is well-kept, easy to access, and ideal for a relaxed day by the water, one of the more effortless things to do in Portland.'], image: { src: 'https://images.squarespace-cdn.com/content/v1/69bac66c78ee605a94121c25/d3a8e7d7-4ca4-427f-9ccb-a9cc0f66d26b/french.jpg?format=1500w', alt: 'The river meeting the sea at Frenchman’s Cove' } },
  { name: 'Scuba Diving', location: 'Portland, JA', paragraphs: ['With Lady G’Diver, the reef isn’t a tourist stop, it’s a world of its own. Led by one of the islands’ most respected dive masters, guests explore vibrant coral gardens, reef walls, and underwater life with depth and care. Visibility often stretches past 70 feet, with dive sites ranging from shallow explorations to dramatic 300-foot drop-offs. Whether it’s a quiet night dive or a photography-led descent, each experience offers a rare chance to feel the pulse of Jamaica below the surface.'], image: { src: 'https://images.squarespace-cdn.com/content/v1/69bac66c78ee605a94121c25/5db82174-0b86-4905-b03e-dfc2c99fd560/scuba.jpg?format=1500w', alt: 'Scuba diving among Portland’s coral reefs' } },
  { name: 'Reach Falls', location: 'Manchioneal, Portland, JA', paragraphs: ['Escape to the cool, emerald pools of Reach Falls, located about an hour east of Port Antonio. The scenic drive along the coast is part of the experience, and well worth it once you arrive at this hidden rainforest gem.', 'Spend the afternoon swimming beneath gentle cascades, where clear water flows into natural pools surrounded by lush greenery. Wander along the river to discover smooth rock formations and small limestone caves tucked behind the falls. It’s a refreshing, peaceful escape, and one of those places that feels completely worth the trip.'], image: { src: 'https://images.squarespace-cdn.com/content/v1/69bac66c78ee605a94121c25/435f14fe-124b-4f71-8e3b-d55c2f9bbef5/reach.webp?format=1500w', alt: 'Waterfall and emerald pools at Reach Falls' } },
  { name: 'Rio Grande Rafting', location: 'St. Margaret’s Bay, Portland, JA', paragraphs: ['Drift along the Rio Grande on a handcrafted bamboo raft, guided by a local raft captain through Portland’s lush tropical terrain. The journey moves at nature’s pace, winding past towering bamboo, breadfruit trees, and hidden bends of the river.', 'Midway, stop at Belinda’s, an off-the-map riverside kitchen where traditional Jamaican dishes like escovitch fish and bammy are cooked over a coal fire and served with a side of local fare.'], image: { src: 'https://images.squarespace-cdn.com/content/v1/69bac66c78ee605a94121c25/2449ad89-6903-4432-9168-8cd8694f1302/rio.jpg?format=1500w', alt: 'Bamboo rafting on the Rio Grande' } },
  { name: 'Blue Lagoon', location: 'Fairy Hill, Portland, JA', paragraphs: ['One of the most recognized natural attractions in Portland, Jamaica. Known for its deep blue color and cooler temperature, the lagoon is fed by a mix of freshwater springs and the sea.', 'You can explore by raft or boat, or swim along the edges where the water is calm. It’s a simple, accessible stop and one of the most popular things to do in Portland, Jamaica for a reason.'], image: { src: 'https://images.squarespace-cdn.com/content/v1/69bac66c78ee605a94121c25/5404b938-b5a1-4dba-9a63-bb117522b1b0/blue.jpg?format=1500w', alt: 'The deep blue water of Portland’s Blue Lagoon' } },
  { name: 'Somerset Falls', location: 'Hope Bay, Portland, JA', paragraphs: ['Upon arrival at Somerset Falls, enter through the garden and take a short guided boat ride along a narrow river, moving through dense greenery to a small waterfall set within the rocks. It’s quiet, shaded, and naturally cool.', 'An easy way to experience a waterfall in Portland, Jamaica, without needing to plan your day around it, simple, close, and worth doing while you’re here.'], image: { src: 'https://images.squarespace-cdn.com/content/v1/69bac66c78ee605a94121c25/cf449286-8412-4523-84cb-cc34959f3d84/somm.jpg?format=1500w', alt: 'A waterfall surrounded by greenery at Somerset Falls' } },
];
export interface Suite {
  name: string;
  slug: 'frenchman-suite' | 'rio-grande-suite' | 'somerset-studio';
  description: string;
  longDescription: string[];
  heroImages: HotelImage[];
  galleryImages: HotelImage[];
  amenities: string[];
  capacity?: string;
  size?: string;
  bookingUrl: string;
}
export const suites: Suite[] = [
  {
    name: 'Frenchman Suite', slug: 'frenchman-suite',
    description: 'The Frenchman is a bright, airy suite at Rivers End, designed with a sense of openness, cohesion, and ease. This suite offers a calm and comfortable base for guests looking to slow down and settle into their surroundings.',
    longDescription: [
      'The Frenchman is a bright, airy suite at Rivers End, designed with a sense of openness, cohesion, and ease. This suite offers a calm and comfortable base for guests looking to slow down and settle into their surroundings.',
      'Natural light fills the space throughout the day, highlighting a clean, thoughtful design that feels both relaxed and intentional. The suite features a queen-size bed and a well-equipped kitchenette with a two-burner gas stove, mini fridge, microwave, and electric kettle, making it easy to prepare simple meals or enjoy a quiet breakfast before heading out.',
      'A Smart TV and reliable Wi-Fi provide the option to unwind or stay connected, while the overall layout remains uncluttered and easy to move through. The bathroom includes an indoor shower and is designed to feel fresh and functional, offering a simple, comfortable space to start or end your day.',
      'Just outside, your private patio extends the living space, offering a quiet place to sit with a coffee in the morning or relax in the evening with a glass of wine. Whether you’re returning from nearby beaches or spending a slower day in, the Frenchman Suite is designed to feel light, calm, and easy to settle into.',
      'As part of a small, thoughtfully run guesthouse, it offers a balance of privacy and simplicity, with everything you need for a comfortable stay in Portland.',
    ],
    heroImages: [{ src: 'https://images.squarespace-cdn.com/content/v1/69bac66c78ee605a94121c25/8155d1b3-f094-4dea-900e-4184f9605531/4D064034-7AB0-4E55-BD48-205DD83020D5.PNG', alt: 'The Frenchman Suite at Rivers End' }, { src: veranda, alt: 'A quiet veranda with woven chairs' }],
    galleryImages: [{ src: bathroom, alt: 'Bathroom with natural stone and timber' }, { src: river, alt: 'A light-filled interior at Rivers End' }, { src: garden, alt: 'Tropical garden surrounding Rivers End' }],
    amenities: ['Queen Sized Bed', 'Sofa Daybed', 'Private patio with seating', 'Fully equipped kitchenette', 'Two-burner gas stove', 'Mini fridge', 'Microwave', 'Electric kettle', 'Cookware, plates, and cutlery', 'Dining table', 'Smart TV', 'Wi-Fi'], bookingUrl: hotelConfig.bookingUrl,
  },
  {
    name: 'Rio Grande Suite', slug: 'rio-grande-suite',
    description: 'The Rio Grande Suite is our largest suite at Rivers End, offering a spacious and thoughtfully designed layout within our guesthouse. Ideal for guests who value comfort, design, and flexibility, it’s a space designed to help you settle in and feel at ease.',
    longDescription: [
      'The Rio Grande Suite is our largest suite at Rivers End, offering a spacious and thoughtfully designed layout within our guesthouse. Ideal for guests who value comfort, design, and flexibility, it’s a space designed to help you settle in and feel at ease.',
      'The open-plan living area includes a fully equipped kitchenette with a two-burner gas stove, mini fridge, microwave, electric kettle, and essential cookware, making it easy to prepare simple meals during your stay. A dining table, sofa that converts into a daybed, and Smart TV create a comfortable place to unwind, while a dedicated workspace with reliable Wi-Fi provides a quiet, practical setup for remote work.',
      'The bedroom features a king-size bed and a calm, uncluttered atmosphere for rest. The bathroom includes both an indoor shower and a private open-air garden shower, offering the option to start your day outside or unwind in the evening in a more natural setting.',
      'Step onto your private patio to enjoy a quiet morning coffee or a relaxed evening. With the beach just a short walk away, the suite offers easy access to some of Portland’s most beautiful surroundings.',
      'As part of a small, thoughtfully run guesthouse, the Rio Grande Suite offers a balance of privacy and ease, allowing you to enjoy your stay while we take care of the details.',
    ],
    heroImages: [{ src: 'https://images.squarespace-cdn.com/content/v1/69bac66c78ee605a94121c25/b0b520b6-57c6-4635-82a0-626bb800024b/24750540-BE9D-4B5C-B345-FD88EF896043.PNG', alt: 'The Rio Grande Suite at Rivers End' }, { src: retreat, alt: 'The lush guesthouse garden' }],
    galleryImages: [{ src: veranda, alt: 'A shaded garden veranda' }, { src: bathroom, alt: 'The Rio Grande Suite bathroom' }, { src: river, alt: 'A calm interior at Rivers End' }],
    amenities: ['Microwave', 'Electric kettle', 'Cookware, plates, and cutlery', 'Dining table', 'Smart TV', 'Dedicated workspace', 'King Sized Bed', 'Sofa Daybed', 'Private patio with seating', 'Fully equipped kitchenette', 'Two-burner gas stove', 'Mini fridge', 'Wi-Fi', 'Indoor shower', 'Open-air garden shower', 'Fresh linens and towels', 'Garden Views'], bookingUrl: hotelConfig.bookingUrl,
  },
  {
    name: 'Somerset Studio', slug: 'somerset-studio',
    description: 'The Somerset Studio is a thoughtfully designed, self-contained retreat at Rivers End, perfect for couples or solo travelers seeking a private, peaceful stay in Portland.',
    longDescription: [
      'The Somerset Studio is a thoughtfully designed, self-contained retreat at Rivers End, perfect for couples or solo travelers seeking a private, peaceful stay in Portland. Compact yet carefully appointed, the studio features a queen-size bed and a bar station with a microwave, mini fridge, and electric kettle, ideal for enjoying a quick meal or a quiet coffee on your own schedule.',
      'A Smart TV and reliable Wi-Fi create a space to relax or stay connected, while the private bathroom offers comfort and convenience. Step onto your patio to take in the surrounding garden, a tranquil spot to read, reflect, or simply enjoy the calm rhythm of the guesthouse. Despite its smaller scale, the Somerset Studio is designed to maximize comfort, privacy, and ease, providing a perfectly curated space for those who value simplicity, thoughtful design, and a slower pace in Portland.',
    ],
    heroImages: [{ src: canopy, alt: 'Somerset Studio concept with open shutters and tropical views' }, { src: veranda, alt: 'Concept veranda overlooking tropical greenery' }],
    galleryImages: [{ src: bathroom, alt: 'Somerset Studio bathroom concept' }, { src: canopy, alt: 'Somerset Studio concept reading corner with a woven chair' }, { src: retreat, alt: 'Lush greenery around the Somerset Studio' }],
    amenities: ['Queen Sized Bed', 'Private patio with seating', 'Bar Station', 'Mini fridge', 'Microwave', 'Electric kettle', 'Glassware', 'Smart TV', 'Wi-Fi', 'Indoor shower', 'Reading Materials', 'Fresh linens and towels', 'Garden Views'], bookingUrl: hotelConfig.bookingUrl,
  },
];
export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — ${hotelConfig.hotelName}`;
  return { meta: [{ title: fullTitle }, { name: 'description', content: description }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
