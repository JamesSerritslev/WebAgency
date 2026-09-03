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
    "I write a custom website for one business. That means the homepage can lead with this week's hours, the services you actually offer, or the products you have in stock, instead of a generic hero slider.",
    "Performance is part of how I design. I size images, keep scripts lean, and work on Core Web Vitals before launch. Fast pages help rankings and they help a customer on cellular data.",
    "I build the SEO foundation in. I plan each URL, each H1 names the offer, and schema tells search systems what kind of local business you are. Internal links connect services, work, FAQs, and contact.",
    "You own the code. When you want a new service page or a product filter, it is built into the system, not jammed in as another plugin.",
  ],
  seo: [
    "The website launches with an SEO foundation. Rankings that keep moving take continued work: new queries, cleaner titles, better internal links, and pages that match how people search this month, not last year.",
    "Keyword research for a local business is specific. People look for a plumber nearby, a contractor for a remodel, a restaurant for tonight, or a store that ships. I map those phrases to real URLs instead of stuffing them into one homepage.",
    "Local citations and backlinks still matter. Name, address, and hours should match across directories. I chase mentions from local press, partners, and events because they send both people and ranking signals.",
    "Heavy analysis means looking at what already ranks, where you leak, and which pages deserve the next write. I do that every month, and you get a real read on it instead of a 40-page PDF that never gets opened again.",
  ],
  "ai-visibility": [
    "AI tools answer with sources they can parse. If your site is a blur of template copy, they guess. If your site states who you are, what you sell, where you operate, and how to visit or book, they can cite you.",
    "I set up FAQ structure, service pages with clear claims, and schema that names the business type. I also keep your facts consistent so the model is not choosing between three different hour listings.",
    "AI visibility sits on SEO. You still need crawlable pages, backlinks, and local trust. The extra layer is writing like a source: short answers to real questions, current details, and entity-clear copy.",
    "This is useful for a restaurant that wants to be recommended for a neighborhood, a contractor that wants to be named for a trade, or a store that wants products to show up in answers.",
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
