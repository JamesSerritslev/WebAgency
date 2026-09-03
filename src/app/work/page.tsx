import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { projects } from "@/lib/content/work";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website design work for local businesses",
  description:
    "Custom websites I have built, including Analogue Room and Standing Sun Wines. Fast, SEO-first builds for local businesses.",
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
        description="Two live projects I built myself: Analogue Room and Standing Sun Wines, both custom sites with a search-ready foundation."
        crumbs={[{ href: "/work", label: "Work" }]}
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="grid min-w-0 overflow-hidden rounded-3xl border border-ink/10 bg-paper lg:grid-cols-2"
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1440}
                height={900}
                className="h-52 w-full object-cover object-top sm:h-72 lg:h-full lg:max-h-[420px]"
              />
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-sm text-slate">{project.category}</p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl">{project.title}</h2>
                <p className="mt-3 leading-relaxed text-slate">{project.summary}</p>
                <Link
                  href={`/work/${project.slug}`}
                  className="mt-6 text-sm font-semibold text-cobalt"
                >
                  Read the case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Want the next case study to be yours?" />
    </main>
  );
}
