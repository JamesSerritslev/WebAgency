import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { articles, getArticle } from "@/lib/content/insights";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${article.slug}`,
    keywords: [...article.keywords],
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Insights", path: "/insights" },
          { name: article.title, path: `/insights/${article.slug}` },
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.description,
          path: `/insights/${article.slug}`,
          datePublished: article.datePublished,
        })}
      />
      <PageHero
        eyebrow={article.datePublished}
        title={article.title}
        description={article.description}
        crumbs={[
          { href: "/insights", label: "Insights" },
          { href: `/insights/${article.slug}`, label: article.linkLabel },
        ]}
      />
      <article className="prose-page mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="mt-10">
          Related:{" "}
          {article.related.map((item, index) => (
            <span key={item.href}>
              {index === 0 ? "" : index === article.related.length - 1 ? ", and " : ", "}
              <Link href={item.href} className="text-cobalt">
                {item.label}
              </Link>
            </span>
          ))}
          .
        </p>
      </article>
      <CtaBand buttonLabel={article.ctaLabel} />
    </main>
  );
}
