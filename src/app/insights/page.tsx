import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { articles } from "@/lib/content/insights";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights on custom websites, SEO, and AI visibility",
  description:
    "Practical articles I write on custom sites versus WordPress, local SEO for trades and restaurants, and AI visibility for local businesses.",
  path: "/insights",
  keywords: [
    "small business SEO articles",
    "custom website vs WordPress",
    "local SEO tips",
    "AI visibility for local business",
  ],
});

export default function InsightsPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([{ name: "Insights", path: "/insights" }])}
      />
      <PageHero
        eyebrow="Insights"
        title="Notes on sites that rank, load, and get recommended."
        description="Short, practical pieces for owners who want search traffic without a template site."
        crumbs={[{ href: "/insights", label: "Insights" }]}
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <li key={article.slug} className="min-w-0 rounded-3xl border border-ink/10 bg-paper p-6 sm:p-7">
              <p className="text-sm text-slate">{article.datePublished}</p>
              <h2 className="mt-3 font-display text-2xl">
                <Link href={`/insights/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {article.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </main>
  );
}
