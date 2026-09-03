import { getProject, projects } from "@/lib/content/work";
import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Case study | COR Web Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  return createOgImage({
    title: project?.title ?? "Work",
    description: project?.category,
    eyebrow: "Case study",
  });
}
