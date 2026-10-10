import { createFileRoute } from '@tanstack/react-router';
import { images, pageHead } from '@/lib/hotel';
import { EditorialImage, EditorialHero, SectionHeading, CTASection } from '@/components/hotel/editorial';
import { ScrollReveals } from '@/components/hotel/scroll-reveals';

export const Route = createFileRoute('/about')({
  head: () => pageHead('About Rivers End', 'The story of Rivers End, a family-created guesthouse in Portland, Jamaica, shaped by thoughtful design, nature and a slower pace of life.'),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="page-container">
      <ScrollReveals />
      <EditorialHero className="about-hero" src={images.veranda} alt="A welcoming veranda at Rivers End in Portland, Jamaica" eyebrow="OUR STORY" title={<>About<br /><em>Rivers End.</em></>} location="" />

      <section className="about-story">
        <SectionHeading eyebrow="WELCOME">A place to<br /><em>feel at home.</em></SectionHeading>
        <div className="editorial-copy">
          <p>Welcome to Rivers End, our serene escape nestled in the heart of Portland. We’re delighted to share this place with you.</p>
          <p>Rivers End was created by a mother and her daughters, born from a shared love of this land, its rhythm, and its capacity to inspire presence. Our guesthouse is our way of inviting you into a slower pace of life, one where every moment can be savored, and the ordinary becomes memorable.</p>
        </div>
      </section>

      <section className="about-philosophy">
        <EditorialImage src={images.retreat} alt="The peaceful, tropical surroundings of Rivers End" />
        <div>
          <SectionHeading eyebrow="OUR PHILOSOPHY">Thoughtful by<br /><em>design.</em></SectionHeading>
          <p className="editorial-copy">Every detail of Rivers End, from the spaces where you’ll rest, to the experiences we’ve woven into your stay, is designed to feel thoughtful, intentional, and connected to the culture and natural beauty of Portland. We’ve curated each corner with care, so you can step away from the noise of daily life and fully embrace your time here.</p>
        </div>
      </section>

      <CTASection title={<>Stay <em>awhile.</em></>} copy="Discover the suite that feels right for you." />
    </main>
  );
}
