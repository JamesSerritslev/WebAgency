import { articles, getArticle } from "@/lib/content/insights";
import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Insight | COR Web Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  return createOgImage({
    title: article?.title ?? "Insights",
    description: article?.description,
    eyebrow: "Insights",
  });
}
