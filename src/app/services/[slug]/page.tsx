import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { getService, services } from "@/lib/content/services";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const extra: Record<string, string[]> = {
  "custom-websites": [
    "With a custom website, the design has no limits. The build can recreate what you imagine. Examples can serve as inspiration, or an original idea can be built from scratch.",
    "Custom sites are extremely fast compared to WordPress or similar builders. Customers landing on a page do not want to wait for it to load. A fast site, even on cellular data, is how you keep customers.",
    "The build includes an SEO foundation so search engines can parse your pages.",
    "Every page is readable and easy to follow. Moving from one page to the next is simple, so customers are not left confused or frustrated.",
    "Editing is a breeze. The site connects to software where updates can be made when needed.",
    "When the site is finished, you own the code. Changes can be requested anytime.",
  ],
  seo: [
    "The website launches with an SEO foundation. Rankings that keep moving take continued work: website and market analysis, gathering reviews and references, and overall alignment across citations. This continuous work is how businesses dominate with digital presence.",
    "Keyword research for a local business is specific. People look for a plumber nearby, a contractor for a remodel, a restaurant for tonight, or a store that ships. I map those phrases to real URLs instead of stuffing them into one homepage.",
    "Local citations and backlinks still matter. Name, address, and hours should match across directories. I chase mentions from local press, partners, and events because they send both people and ranking signals.",
    "Growth and Full-Scale SEO put Google Reviews on the website. Visitors see a rating and recent reviews before they call, and search systems get review schema that matches what people actually wrote. Full-Scale adds a review section on key pages and write-a-review prompts so new reviews keep coming.",
    "Heavy analysis means looking at what already ranks, where you leak, and which pages deserve the next write. I do that every month, as well as an in-depth report of how your site is performing.",
  ],
  "ai-visibility": [
    "AI tools answer with sources they can parse. What AI tools parse is not well known today by most SEO specialists because it is so new. I have spent time diving into the new strategies to get your business mentioned by AI.",
    "AI visibility sits on SEO. You still need crawlable pages, backlinks, and local trust. Two extra layers sit on top of that. The first is writing like a source: short answers to real questions related to your field of business. The second is keeping Yelp, TripAdvisor, Reddit, etc. aligned and collecting reviews so AI systems can recognize the business.",
    "AI visibility is extremely valuable for any type of business today.",
  ],
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [...service.keywords],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const paragraphs = extra[service.slug] ?? [];

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.description,
          path: `/services/${service.slug}`,
        })}
      />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.description}
        crumbs={[
          { href: "/services", label: "Services" },
          { href: `/services/${service.slug}`, label: service.navLabel },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <article className="prose-page min-w-0 max-w-2xl">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="mt-8">
            <Button href="/contact" className="w-full sm:w-auto">
              Talk about {service.navLabel.toLowerCase()}
            </Button>
          </div>
        </article>
        <aside className="h-fit min-w-0 rounded-3xl border border-ink/10 bg-paper p-6 sm:p-8">
          <h2 className="font-display text-2xl">Outcomes</h2>
          <ul className="mt-4 space-y-3 text-slate">
            {service.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-semibold">Related</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="text-cobalt">
                    {item.title}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/work" className="text-cobalt">
                Selected work
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-cobalt">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-cobalt">
                FAQ
              </Link>
            </li>
          </ul>
        </aside>
      </section>
      <CtaBand />
    </main>
  );
}
