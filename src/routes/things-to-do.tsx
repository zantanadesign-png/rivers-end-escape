import { createFileRoute } from '@tanstack/react-router';
import { activities, images, pageHead } from '@/lib/hotel';
import { EditorialHero, EditorialImage, SectionHeading } from '@/components/hotel/editorial';
import { ScrollReveals } from '@/components/hotel/scroll-reveals';

export const Route = createFileRoute('/things-to-do')({
  head: () => pageHead('Things to do in Portland, Jamaica', 'Discover beaches, waterfalls, rafting, diving and more around Portland, Jamaica.'),
  component: ThingsToDoPage,
});

function ThingsToDoPage() {
  return <main className="page-container things-page">
    <ScrollReveals />
    <EditorialHero className="things-hero" src={images.retreat} alt="Tropical greenery at Rivers End in Portland, Jamaica" eyebrow="EXPLORE PORTLAND" title={<>Things to do in<br /><em>Portland, Jamaica.</em></>} location="" />
    <section className="activities-section">
      <div className="activities-heading"><SectionHeading eyebrow="THE ISLAND, AT YOUR PACE">Make time<br />for <em>something.</em></SectionHeading><p className="editorial-copy">From the mountains and rivers to the sea, discover some of the experiences that make Portland unforgettable.</p></div>
      <div className="activity-list">{activities.map((activity, index) => <article key={activity.name} className={`activity-feature ${index % 2 === 1 ? 'image-first' : ''}`}>
        <div className="activity-copy"><span className="activity-number">0{index + 1}</span><p className="activity-location">{activity.location}</p><h2>{activity.name}</h2><div className="editorial-copy">{activity.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>
        <EditorialImage src={activity.image.src} alt={activity.image.alt} className="activity-image" eager={index === 0} />
      </article>)}</div>
    </section>
  </main>;
}
