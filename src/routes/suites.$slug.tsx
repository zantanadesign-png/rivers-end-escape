import { createFileRoute, notFound } from '@tanstack/react-router';
import { suites, pageHead } from '@/lib/hotel';
import { SuitePage } from '@/components/hotel/suites';
export const Route = createFileRoute('/suites/$slug')({
  loader: ({ params }) => {
    const suite = suites.find(item => item.slug === params.slug);
    if (!suite) throw notFound();
    return suite;
  },
  head: ({ loaderData }) => loaderData ? pageHead(loaderData.name, `${loaderData.name} at Rivers End - Guesthouse, Portland, Jamaica. ${loaderData.description}`) : { meta: [{ title: 'Suite unavailable — Rivers End - Guesthouse' }, { name: 'robots', content: 'noindex' }] },
  component: SuiteRoute,
});
function SuiteRoute() { const suite = Route.useLoaderData(); return <SuitePage suite={suite} />; }
