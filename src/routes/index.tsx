import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images, hotelConfig, suites, pageHead } from '@/lib/hotel';
import { EditorialImage, EditorialHero, SectionHeading, BookButton } from '@/components/hotel/editorial';
import { SuitePreview } from '@/components/hotel/suites';
import { ScrollReveals } from '@/components/hotel/scroll-reveals';

export const Route = createFileRoute('/')({
  head: () => pageHead('A quieter way to stay', 'Discover Rivers End, an intimate guesthouse in Portland, Jamaica, created as a thoughtful escape from the everyday.'),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="page-container">
      <ScrollReveals />
      <EditorialHero src={images.retreat} alt="Rivers End guesthouse surrounded by tropical greenery in Portland, Jamaica" eyebrow="RIVERS END — A PRIVATE RETREAT" title={<>A quieter way<br />to <em>stay.</em></>} description="A place to slow down, retreat and immerse yourself." action={<Button asChild variant="photo"><a href="#suites">Discover the suites <ArrowDown size={15} /></a></Button>} location="PORTLAND, JAMAICA" index="Stay. Connect. Transform." />

      <section className="introduction">
        <div className="image-pair intro-images">
          <EditorialImage src={images.veranda} alt="A quiet morning on the veranda at Rivers End" />
          <EditorialImage src={images.garden} alt="Tropical greenery framing Rivers End" />
        </div>
        <div className="intro-text">
          <SectionHeading eyebrow="THE RETREAT">Simply <em>Portland.</em></SectionHeading>
          <div className="editorial-copy">
            <p>Rivers End was created as a thoughtful escape from the everyday. Our guesthouse blends comfort, simplicity, and intentional design, so each stay feels both purposeful and relaxed. Whether you’re visiting Portland for adventure or quiet time, you’ll find space to rest, breathe, and settle into your surroundings. With the beach just a short walk away and tropical greenery framing the property, every detail is designed to help you feel at home, no matter how long you stay.</p>
            <p>Wake to the sound of birds and take your time easing into the day. Coffee on your patio, unhurried mornings, and space to move at your own pace. Head out to raft the Rio Grande or spend a few hours by the sea, then return to somewhere quiet, familiar, and your own. At Rivers End, there’s no pressure to do anything at all, just the space to slow down, settle in, and <em>be.</em></p>
          </div>
        </div>
      </section>

      <section id="suites" className="suites-section">
        <div className="suites-heading">
          <SectionHeading eyebrow="THE EXPERIENCE"><em>Find Your Stay.</em></SectionHeading>
          <p className="editorial-copy">Each suite has its own character, rhythm and relationship with the surrounding landscape. Discover a private space designed for slow mornings, long afternoons and nights worth remembering.</p>
        </div>
        <div>{suites.map((suite, index) => <SuitePreview key={suite.slug} suite={suite} index={index} />)}</div>
      </section>

      <section className="story-preview">
        <EditorialImage src={images.retreat} alt="Rivers End, a guesthouse rooted in its tropical surroundings" />
        <div>
          <SectionHeading eyebrow="OUR STORY">A place with<br />a story <em>to tell.</em></SectionHeading>
          <div className="editorial-copy">
            <p>{hotelConfig.hotelName} was created from a simple idea: that where you stay should feel as meaningful as what you do while you are there.</p>
            <p>Rooted in its surroundings and shaped by a love of thoughtful design, the property brings together architecture, nature and hospitality in a setting designed to feel personal rather than conventional.</p>
          </div>
          <Link to="/about" className="text-link">Discover our story <ArrowUpRight size={16} strokeWidth={1} /></Link>
        </div>
      </section>

      <section className="special-requests">
        <SectionHeading>Anything<br /><em>special in mind?</em></SectionHeading>
        <p className="editorial-copy">Tell us what would make your stay feel truly yours. From celebrations and private experiences to thoughtful details before arrival, our team will be happy to help create a stay around you.</p>
        <BookButton />
      </section>

    </main>
  );
}
