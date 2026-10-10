import { useEffect, useRef, useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, ChevronDown, MapPin, Mail, Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookButton } from './editorial';
import { hotelConfig, suites } from '@/lib/hotel';
import riversEndSymbol from '@/assets/rivers-end-footer.svg';
import riversEndNavbar from '@/assets/rivers-end-navbar.svg';

function Wordmark() {
  return <Link to="/" className="wordmark" aria-label="Rivers End - Guesthouse home"><img src={riversEndNavbar} alt="Rivers End Guesthouse Jamaica" /></Link>;
}
export function MobileMenu({ onClose }: { onClose: () => void }) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [suitesOpen, setSuitesOpen] = useState(false);
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
  return <div ref={menuRef} id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu"><nav><Link to="/" onClick={onClose}>Home</Link><div className="mobile-suite-nav"><button className="mobile-nav-toggle" aria-expanded={suitesOpen} onClick={() => setSuitesOpen(!suitesOpen)}>Suites <ChevronDown size={20} /></button>{suitesOpen && <div className="mobile-suite-links">{suites.map(suite => <Link key={suite.slug} to="/suites/$slug" params={{ slug: suite.slug }} onClick={onClose}>{suite.name}</Link>)}</div>}</div><Link to="/things-to-do" onClick={onClose}>Things to do</Link><Link to="/about" onClick={onClose}>About</Link><a href={hotelConfig.bookingUrl} target="_blank" rel="noopener noreferrer" onClick={onClose}>Book now <ArrowUpRight className="inline size-8" strokeWidth={1} /></a></nav><p className="menu-location">{hotelConfig.location.toUpperCase()}</p></div>;
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [suitesOpen, setSuitesOpen] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); setSuitesOpen(false); }, [pathname]);
  const close = () => { setOpen(false); trigger.current?.focus(); };
  return <><header className="site-header"><nav className="desktop-nav desktop-nav-left" aria-label="Primary navigation"><Link to="/about" className="text-link">About</Link><Link to="/things-to-do" className="text-link">Things to do</Link></nav><Wordmark /><nav className="desktop-nav desktop-nav-right" aria-label="Booking navigation"><div className="suite-dropdown" onMouseEnter={() => setSuitesOpen(true)} onMouseLeave={() => setSuitesOpen(false)}><div className="suite-dropdown-trigger"><Link to="/" hash="suites" className="text-link">Suites</Link><button aria-label="Show suite options" aria-expanded={suitesOpen} onClick={() => setSuitesOpen(!suitesOpen)}><ChevronDown size={15} /></button></div>{suitesOpen && <div className="suite-dropdown-menu">{suites.map(suite => <Link key={suite.slug} to="/suites/$slug" params={{ slug: suite.slug }} onClick={() => setSuitesOpen(false)}>{suite.name}</Link>)}</div>}</div><BookButton /></nav><Button ref={trigger} variant="quiet" className="menu-trigger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></header>{open && <MobileMenu onClose={close} />}</>;
}
export function MobileBookingBar() {
  return <div className="mobile-booking-bar" aria-label="Quick booking"><span className="booking-icon" title={hotelConfig.location}><MapPin aria-hidden="true" /></span><span className="booking-icon" title="Email"><Mail aria-hidden="true" /></span><span className="booking-icon" title="Telephone"><Phone aria-hidden="true" /></span><BookButton variant="booking" /></div>;
}
export function Footer() {
  return <footer className="site-footer"><div className="footer-layout"><Link to="/" className="footer-symbol" aria-label="Rivers End - Guesthouse home"><img src={riversEndSymbol} alt="Rivers End" /></Link><div className="footer-left"><nav className="footer-nav" aria-label="Footer navigation"><Link to="/">Home</Link><Link to="/" hash="suites">Suites</Link><Link to="/things-to-do">Things to do</Link><Link to="/about">About</Link><a href={hotelConfig.bookingUrl} target="_blank" rel="noopener noreferrer">Book now ↗</a></nav><div className="footer-contact"><a href={`mailto:${hotelConfig.email}`}><Mail size={16} />{hotelConfig.email}</a><span><MapPin size={16} />{hotelConfig.address}</span><a href="tel:+18764247568"><Phone size={16} />{hotelConfig.phone} (Jamaica)</a><a href="https://wa.me/12404622923" target="_blank" rel="noopener noreferrer"><Phone size={16} />{hotelConfig.whatsapp} (WhatsApp)</a><a href={hotelConfig.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a></div><div className="footer-bottom"><span>© 2026 {hotelConfig.hotelName}</span></div></div></div></footer>;
}
