import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { hotelConfig, type HotelImage } from '@/lib/hotel';

export function EditorialImage({ src, alt, className = '', eager = false }: HotelImage & { className?: string; eager?: boolean }) {
  return <div className={`editorial-image ${className}`}><img src={src} alt={alt} width={1024} height={1536} loading={eager ? 'eager' : 'lazy'} decoding="async" /></div>;
}
export function EditorialHero({ src, alt, eyebrow, title, description, action, location = hotelConfig.location.toUpperCase(), index, className = '', layout = 'overlay' }: HotelImage & { eyebrow: string; title: ReactNode; description?: string; action?: ReactNode; location?: string; index?: string; className?: string; layout?: 'overlay' | 'above' }) {
  if (layout === 'above') return <section className={`hero hero-above reveal ${className}`}><div className="hero-above-heading"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1></div><img src={src} alt={alt} width={1024} height={1536} fetchPriority="high" /></section>;
  return <section className={`hero reveal ${className}`}><img src={src} alt={alt} width={1024} height={1536} fetchPriority="high" /><div className="hero-content"><span className="hero-eyebrow">{eyebrow}</span><h1>{title}</h1>{description && <p className="hero-description">{description}</p>}{action}{location && <span className="hero-location">{location}</span>}{index && <span className="hero-index">{index}</span>}</div></section>;
}
export function SectionHeading({ eyebrow, children, as = 'h2' }: { eyebrow?: string; children: ReactNode; as?: 'h1' | 'h2' | 'h3' }) {
  const Tag = as;
  return <div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<Tag className="section-heading">{children}</Tag></div>;
}
export function BookButton({ variant = 'editorial' }: { variant?: 'editorial' | 'booking' | 'photo' }) {
  return <Button asChild variant={variant}><a href={hotelConfig.bookingUrl} target="_blank" rel="noopener noreferrer">Book now <ArrowUpRight aria-hidden="true" /></a></Button>;
}
export function CTASection({ title, copy }: { title: ReactNode; copy: string }) {
  return <section className="cta-section"><SectionHeading>{title}</SectionHeading><p className="editorial-copy">{copy}</p><BookButton /></section>;
}
