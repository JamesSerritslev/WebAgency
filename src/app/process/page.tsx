import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { processSteps } from "@/lib/content/process";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Process for custom websites and SEO",
  description:
    "How COR Web Solutions runs a project: discovery, SEO-friendly sitemap, custom build, launch, and SEO work that helps people find your business. Clear steps, no page builders.",
  path: "/process",
  keywords: [
    "website design process",
    "custom website process",
    "SEO process for small business",
    "how custom websites are built",
  ],
});

export default function ProcessPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([{ name: "Process", path: "/process" }])}
      />
      <PageHero
        eyebrow="Process"
        title="A clear path from first call to a site you own."
        description="Discovery, structure, custom build, launch, and SEO work that helps people find your business."
        crumbs={[{ href: "/process", label: "Process" }]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <ol className="grid gap-6">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="grid gap-4 rounded-3xl border border-ink/10 bg-paper p-8 md:grid-cols-[140px_1fr]"
            >
              <p className="font-display text-4xl text-amber">{step.number}</p>
              <div>
                <h2 className="font-display text-3xl">{step.title}</h2>
                <p className="mt-3 text-lg text-ink-soft">{step.summary}</p>
                <p className="mt-3 leading-relaxed text-slate">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand title="Ready for step one?" />
    </main>
  );
}
