import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Armchair, BedDouble, BookOpen, Coffee, CookingPot, GlassWater, Laptop, Microwave, Refrigerator, ShowerHead, Shirt, Sofa, Sparkles, Table2, Trees, Tv, Utensils, Wifi } from 'lucide-react';
import { type HotelImage, type Suite } from '@/lib/hotel';
import { EditorialImage, SectionHeading, BookButton, CTASection } from './editorial';
import { ScrollReveals } from './scroll-reveals';

const faqs = [
  ['Is there a minimum or maximum stay requirement?', 'Our minimum stay is typically two nights, though exceptions may be possible. We do not enforce a maximum stay, so guests are welcome to extend their time with us as long as there is availability.'],
  ['What are your check-in and check-out times?', 'Check-in is from 3:00 PM, and check-out is by 11:00 AM. We do offer early check-in and late check-out when available for a small fee.'],
  ['Is parking available on-site?', 'Yes, we offer secure on-site parking for all guests.'],
  ['Is WiFi available in all rooms?', 'Reliable Wi-Fi is available in every suite and throughout the guesthouse.'],
  ['Are meals provided, or is self-catering recommended?', 'While we do not operate a full-service restaurant, each suite offers kitchen or bar facilities for self-catering. Guests may also explore local restaurants nearby. We do offer light morning trays to our guests at a small additional cost.'],
  ['Is Rivers End Guesthouse pet-friendly?', 'Our accommodations are best suited for couples, solo travelers, and small groups. We currently do not accommodate pets.'],
  ['Is there a safe in the room for valuables?', 'Yes, each suite includes a secure in-room safe, allowing you to store valuables and travel with peace of mind.'],
  ['Do you provide airport transfers?', 'Airport transfers can be arranged upon request. Please contact us in advance to confirm availability, reservations, and pricing.'],
  ['Do the rooms have air conditioning or fans?', 'Yes, every suite is equipped with both air conditioning and a fan, ensuring a comfortable stay in Portland’s tropical climate.'],
  ['What is your smoking policy?', 'Smoking is not permitted inside the suites. Guests are welcome to smoke in the garden or on their private patios, provided that the suite doors remain closed.'],
] as const;

export function SuitePreview({ suite, index }: { suite: Suite; index: number }) {
  const slideImages = [...suite.heroImages, ...suite.galleryImages].slice(0, 3);
  const loopImages = [...slideImages, slideImages[0]].filter((image): image is HotelImage => Boolean(image));
  return <article className="suite-preview"><div className="suite-preview-images"><div className="suite-preview-slides" aria-live="off">{loopImages.map((image, imageIndex) => <div key={`${image.src}-${imageIndex}`} className="suite-preview-slide"><img src={image.src} alt={image.alt} width={1024} height={1536} loading="eager" decoding="async" /></div>)}</div></div><div><span className="suite-number">0{index + 1} / A space of your own</span><h3>{suite.name.endsWith(' Suite') ? <>{suite.name.slice(0, -6)} <em>Suite</em></> : suite.name}</h3><p className="editorial-copy">{suite.description}</p><Link to="/suites/$slug" params={{ slug: suite.slug }} className="text-link">Explore {suite.name} <ArrowUpRight size={16} strokeWidth={1} /></Link></div></article>;
}
function amenityIcon(name: string) {
  const amenity = name.toLowerCase();
  if (amenity.includes('sofa')) return Sofa;
  if (amenity.includes('bed')) return BedDouble;
  if (amenity.includes('patio') || amenity.includes('seating')) return Armchair;
  if (amenity.includes('bar station') || amenity.includes('kettle')) return Coffee;
  if (amenity.includes('microwave')) return Microwave;
  if (amenity.includes('fridge')) return Refrigerator;
  if (amenity.includes('glassware')) return GlassWater;
  if (amenity.includes('tv')) return Tv;
  if (amenity.includes('wi-fi')) return Wifi;
  if (amenity.includes('shower')) return ShowerHead;
  if (amenity.includes('reading')) return BookOpen;
  if (amenity.includes('linens') || amenity.includes('towels')) return Shirt;
  if (amenity.includes('garden')) return Trees;
  if (amenity.includes('workspace')) return Laptop;
  if (amenity.includes('dining table')) return Table2;
  if (amenity.includes('kitchenette') || amenity.includes('stove')) return CookingPot;
  if (amenity.includes('cookware') || amenity.includes('cutlery')) return Utensils;
  return Sparkles;
}
export function AmenitiesList({ amenities }: { amenities: string[] }) {
  return <ul className="amenities-list">{amenities.map(name => { const Icon = amenityIcon(name); return <li key={name}><Icon aria-hidden="true" /><span>{name}</span></li>; })}</ul>;
}
function FAQSection() {
  return <section className="faq-section"><SectionHeading eyebrow="HELPFUL DETAILS">Frequently asked <em>questions.</em></SectionHeading><div className="faq-grid">{faqs.map(([question, answer]) => <details key={question} className="faq-item"><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>;
}
export function SuitePage({ suite }: { suite: Suite }) {
  const suiteTitle = suite.name.endsWith(' Suite') ? <>{suite.name.slice(0, -6)}<br /><em>Suite</em></> : suite.name;
  const coverImage = suite.heroImages[0];
  const middleImages = [suite.heroImages[1], suite.galleryImages[0]].filter((image): image is HotelImage => Boolean(image));
  const finalImages = suite.galleryImages.slice(1, 3);
  return <main className="page-container suite-page">
    <ScrollReveals />
    {coverImage && <EditorialImage {...coverImage} className="suite-cover-image reveal" eager />}
    <section className="suite-intro"><div><span className="eyebrow">YOUR PRIVATE RETREAT · PORTLAND, JAMAICA</span><h1 className="suite-title">{suiteTitle}</h1></div><div><div className="editorial-copy">{suite.longDescription.map(text => <p key={text}>{text}</p>)}</div><BookButton /></div></section>
    <div className="image-pair suite-gallery">{middleImages.map(image => <EditorialImage key={image.src} {...image} />)}</div>
    <section className="amenities-section"><SectionHeading eyebrow="CONSIDERED COMFORTS">The little <em>details.</em></SectionHeading><AmenitiesList amenities={suite.amenities} /></section>
    <div className="image-pair suite-gallery suite-gallery-final">{finalImages.map(image => <EditorialImage key={image.src} {...image} />)}</div>
    <FAQSection />
    <CTASection title={<>Make yourself<br /><em>at home.</em></>} copy="Ready to slow down?" />
  </main>;
}
