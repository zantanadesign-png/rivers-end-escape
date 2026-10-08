import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Wifi, Tv, Wine, Sparkles, Coffee, Wind, Shirt, Footprints, Phone, Snowflake } from 'lucide-react';
import { type Suite } from '@/lib/hotel';
import { EditorialImage, SectionHeading, BookButton, CTASection } from './editorial';

export function SuitePreview({ suite, index }: { suite: Suite; index: number }) {
  const mainImage = suite.heroImages[0]; const detailImage = suite.galleryImages[0];
  return <article className="suite-preview"><div className="suite-preview-images">{mainImage && <EditorialImage {...mainImage} />}{detailImage && <EditorialImage {...detailImage} className="detail-image" />}</div><div><span className="suite-number">0{index + 1} / A space of your own</span><h3>{suite.name.replace(' Suite', '')} <em>Suite</em></h3><p className="editorial-copy">{suite.description}</p><Link to="/suites/$slug" params={{ slug: suite.slug }} className="text-link">Explore {suite.name} <ArrowUpRight size={16} strokeWidth={1} /></Link></div></article>;
}
const amenityIcons = [Wifi, Tv, Wine, Sparkles, Coffee, Wind, Shirt, Footprints, Phone, Snowflake];
export function AmenitiesList({ amenities }: { amenities: string[] }) {
  return <ul className="amenities-list">{amenities.map((name, index) => { const Icon = amenityIcons[index] ?? Sparkles; return <li key={name}><Icon aria-hidden="true" /><span>{name}</span></li>; })}</ul>;
}
export function SuitePage({ suite }: { suite: Suite }) {
  return <main className="page-container suite-page"><div className="image-pair suite-hero-images reveal">{suite.heroImages.map((image, i) => <EditorialImage key={image.src} {...image} eager={i === 0} />)}</div><section className="suite-intro"><div><span className="eyebrow">YOUR PRIVATE RETREAT · PORTLAND, JAMAICA</span><h1 className="suite-title">{suite.name.replace(' Suite', '')}<br /><em>Suite</em></h1></div><div><div className="editorial-copy">{suite.longDescription.map(text => <p key={text}>{text}</p>)}</div><BookButton /></div></section><div className="image-pair suite-gallery">{suite.galleryImages.map(image => <EditorialImage key={image.src} {...image} />)}</div><section className="amenities-section"><SectionHeading eyebrow="CONSIDERED COMFORTS">The little <em>details.</em></SectionHeading><AmenitiesList amenities={suite.amenities} /></section><CTASection title={<>Make yourself<br /><em>at home.</em></>} copy="Ready to slow down?" /></main>;
}
