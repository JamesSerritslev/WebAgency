import { getService, services } from "@/lib/content/services";
import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Service | COR Web Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  return createOgImage({
    title: service?.title ?? "Services",
    description: service?.summary,
    eyebrow: "Services",
  });
}
