import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { services } from "@/lib/content/services";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Web design, SEO, and AI visibility services",
  description:
    "Custom websites without WordPress, plus SEO and AI visibility that help restaurants, trades, shops, and local businesses get found.",
  path: "/services",
  keywords: [
    "web design services",
    "SEO services for small business",
    "AI visibility services",
    "custom website services",
  ],
});

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([{ name: "Services", path: "/services" }])}
      />
      <PageHero
        eyebrow="Services"
        title="Custom websites and SEO that get you found."
        description="A custom site for your business, plus search work that helps people find you. I do all three myself, and each one has its own page because each ranks, and sells, on its own."
        crumbs={[{ href: "/services", label: "Services" }]}
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="prose-page mx-auto mb-12 max-w-3xl">
          <h2 className="font-display text-3xl">How the work is split</h2>
          <p className="mt-4 text-slate">
            Most owners start with a custom website. That is the public face
            of the business: pages that load fast on a phone, look like your
            brand, and already have an SEO foundation (titles, slugs, schema,
            and a sitemap that matches how people search).
          </p>
          <p className="text-slate">
            SEO after launch is optional and billed monthly. It is the ongoing
            work of keywords, citations, content, reviews, and technical
            checks. AI visibility sits with that search work. It is how
            ChatGPT and Google AI Overviews get clear facts about your
            restaurant, trade, shop, or service so they can cite you instead
            of a competitor.
          </p>
          <p className="text-slate">
            You can hire one service or all three. I do the work myself, so
            the site, the rankings, and the AI facts stay consistent. Open a
            service below for what each one includes, or jump to{" "}
            <Link href="/pricing" className="font-semibold text-cobalt">
              pricing
            </Link>{" "}
            if you want the numbers first.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex min-w-0 flex-col rounded-3xl border border-ink/10 bg-paper p-6 sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
                {service.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">{service.title}</h2>
              <p className="mt-4 flex-1 leading-relaxed text-slate">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 text-sm font-semibold text-cobalt"
              >
                Explore {service.navLabel.toLowerCase()}
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-10 text-slate">
          Want the numbers first?{" "}
          <Link href="/pricing" className="font-semibold text-cobalt">
            See website and SEO pricing
          </Link>
          .
        </p>
      </section>
      <CtaBand />
    </main>
  );
}
