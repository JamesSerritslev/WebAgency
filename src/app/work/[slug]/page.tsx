import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { getProject, projects } from "@/lib/content/work";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.title} website case study`,
    description: project.metaDescription,
    path: `/work/${project.slug}`,
    keywords: [...project.keywords],
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Work", path: "/work" },
          { name: project.title, path: `/work/${project.slug}` },
        ])}
      />
      <PageHero
        eyebrow={project.location}
        title={project.title}
        description={project.summary}
        crumbs={[
          { href: "/work", label: "Work" },
          { href: `/work/${project.slug}`, label: project.title },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1440}
          height={900}
          priority
          className="w-full rounded-3xl border border-ink/10 object-cover object-top"
        />
        <p className="mt-3 text-sm text-slate">{project.imageAlt}.</p>
      </section>
      <article className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 md:grid-cols-3 md:px-8">
        <section>
          <h2 className="font-display text-2xl">Challenge</h2>
          <p className="mt-3 leading-relaxed text-slate">{project.challenge}</p>
        </section>
        <section>
          <h2 className="font-display text-2xl">Approach</h2>
          <p className="mt-3 leading-relaxed text-slate">{project.approach}</p>
        </section>
        <section>
          <h2 className="font-display text-2xl">Result</h2>
          <p className="mt-3 leading-relaxed text-slate">{project.result}</p>
        </section>
      </article>
      <div className="mx-auto flex max-w-6xl flex-wrap gap-4 px-5 pb-16 md:px-8">
        <Button href={project.url} variant="secondary">
          Visit the live site
        </Button>
        <Link href="/work" className="self-center text-sm font-semibold text-cobalt">
          Back to all work
        </Link>
      </div>
      <CtaBand />
    </main>
  );
}
