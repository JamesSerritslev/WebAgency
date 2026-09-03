import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "COR Web Solutions insights";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "Insights",
    description: "Custom sites, local SEO, and AI visibility.",
  });
}
