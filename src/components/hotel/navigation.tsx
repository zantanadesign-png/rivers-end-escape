import { useEffect, useRef, useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, ChevronDown, MapPin, Mail, Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookButton } from './editorial';
import { hotelConfig } from '@/lib/hotel';

function Wordmark() {
  return <Link to="/" className="wordmark" aria-label="Rivers End - Guesthouse home"><span className="wordmark-line" /><span className="wordmark-name">Rivers End</span><span className="wordmark-subtitle">GUESTHOUSE · JAMAICA</span></Link>;
}
function LanguageSelector() {
  const [open, setOpen] = useState(false);
  return <div className="language"><Button variant="quiet" className="language-button" aria-label="Language: English" aria-expanded={open} onClick={() => setOpen(!open)}>EN <ChevronDown size={12} /></Button>{open && <div className="language-panel">English <span aria-hidden="true">✓</span></div>}</div>;
}
export function MobileMenu({ onClose }: { onClose: () => void }) {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const items = Array.from(document.querySelectorAll<HTMLElement>('.site-header button, .site-header a, .mobile-menu a, .mobile-booking-bar a'));
      const first = items[0]; const last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', keyboard);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', keyboard); };
  }, [onClose]);
  return <div ref={menuRef} id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu"><nav><Link to="/" hash="suites" onClick={onClose}>Suites</Link><Link to="/about" onClick={onClose}>About</Link><a href={hotelConfig.bookingUrl} target="_blank" rel="noopener noreferrer" onClick={onClose}>Book now <ArrowUpRight className="inline size-8" strokeWidth={1} /></a></nav><p className="menu-location">{hotelConfig.location.toUpperCase()}</p></div>;
}
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  const close = () => { setOpen(false); trigger.current?.focus(); };
  return <><header className="site-header"><Wordmark /><div className="mobile-language"><LanguageSelector /></div><nav className="desktop-nav" aria-label="Main navigation"><Link to="/" hash="suites" className="text-link">Suites</Link><Link to="/about" className="text-link">About</Link><BookButton /><LanguageSelector /></nav><Button ref={trigger} variant="quiet" className="menu-trigger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></header>{open && <MobileMenu onClose={close} />}</>;
}
export function MobileBookingBar() {
  return <div className="mobile-booking-bar" aria-label="Quick booking"><span className="booking-icon" title={hotelConfig.location}><MapPin aria-hidden="true" /></span><span className="booking-icon" title="Email"><Mail aria-hidden="true" /></span><span className="booking-icon" title="Telephone"><Phone aria-hidden="true" /></span><BookButton variant="booking" /></div>;
}
export function Footer() {
  const [privacy, setPrivacy] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (privacy) closeRef.current?.focus(); }, [privacy]);
  return <><footer className="site-footer"><div className="footer-top"><Wordmark /><nav className="footer-nav" aria-label="Footer navigation"><Link to="/" hash="suites">Suites</Link><Link to="/about">About</Link><a href={hotelConfig.bookingUrl} target="_blank" rel="noopener noreferrer">Book now ↗</a></nav></div><div className="footer-bottom"><span>© 2026 {hotelConfig.hotelName}</span><span>{hotelConfig.location}</span><div className="footer-secondary">{hotelConfig.instagramUrl ? <a href={hotelConfig.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a> : <span>Instagram</span>}<Button variant="quiet" className="footer-control" onClick={() => setPrivacy(true)}>Privacy Policy</Button></div></div></footer>{privacy && <div className="privacy-dialog" role="dialog" aria-modal="true" aria-label="Privacy Policy" onClick={() => setPrivacy(false)} onKeyDown={e => { if (e.key === 'Escape') setPrivacy(false); }}><div onClick={e => e.stopPropagation()}><h2>Privacy Policy</h2><p>This website has no reservation forms or guest accounts. Reservations open on an external booking platform, whose own privacy policy applies. External font services may receive technical request information when this page loads.</p><Button ref={closeRef} variant="editorial" onClick={() => setPrivacy(false)}>Close <X /></Button></div></div>}</>;
}
