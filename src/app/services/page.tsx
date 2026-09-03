import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { services } from "@/lib/content/services";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Web design, SEO, and AI visibility services",
  description:
    "What I do at COR Web Solutions: custom websites without WordPress, plus SEO and AI visibility that help restaurants, trades, shops, and other local businesses get found.",
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
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col rounded-3xl border border-ink/10 bg-paper p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
                {service.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl">{service.title}</h2>
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
