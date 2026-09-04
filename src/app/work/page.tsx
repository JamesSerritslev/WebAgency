import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { WorkCard } from "@/components/WorkCard";
import { projects } from "@/lib/content/work";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website design work for local businesses",
  description:
    "Custom websites and apps I have built, including Analogue Room, Standing Sun Wines, a personal portfolio, and BandScope. Fast, SEO-first builds and larger custom work.",
  path: "/work",
  keywords: [
    "web design portfolio",
    "custom website case studies",
    "small business website examples",
  ],
});

export default function WorkPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Work", path: "/work" }])} />
      <PageHero
        eyebrow="Work"
        title="Custom sites already serving real businesses."
        description="Live projects I built myself: local business sites, a personal portfolio for showing work, and BandScope, a full music networking app."
        crumbs={[{ href: "/work", label: "Work" }]}
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid items-stretch gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <CtaBand title="Want the next case study to be yours?" />
    </main>
  );
}
