import type { FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/hotel/editorial';
import { hotelConfig } from '@/lib/hotel';

export function ContactSection() {
  return <section className="contact-section page-container" id="contact">
    <div className="contact-intro"><SectionHeading eyebrow="WE’D LOVE TO HEAR FROM YOU">Your room <em>is waiting.</em><br />Get In <em>Touch.</em></SectionHeading><p className="editorial-copy">Have a question or a special request? Get in touch and we’ll be happy to help.</p><div className="contact-details"><a href="tel:+18764247568"><strong>Phone Number</strong><span>(876) 424 7568</span></a><a href={`mailto:${hotelConfig.email}`}><strong>Email</strong><span>{hotelConfig.email}</span></a></div></div>
    <ContactForm />
  </section>;
}

function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const subject = `Website inquiry from ${fields.get('firstName')}`;
    const body = `Name: ${fields.get('firstName')} ${fields.get('lastName')}\nEmail: ${fields.get('email')}\n\n${fields.get('message')}`;
    window.location.href = `mailto:${hotelConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="contact-name-fields"><label>First Name <span>(required)</span><input name="firstName" autoComplete="given-name" required /></label><label>Last Name <span>(required)</span><input name="lastName" autoComplete="family-name" required /></label></div>
    <label>Email <span>(required)</span><input type="email" name="email" autoComplete="email" required /></label>
    <label>Message <span>(required)</span><textarea name="message" rows={5} required /></label>
    <Button variant="editorial" type="submit">Send message <ArrowUpRight /></Button>
  </form>;
}
