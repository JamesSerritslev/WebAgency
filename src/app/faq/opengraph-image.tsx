import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "COR Web Solutions FAQ";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "Frequently asked questions",
    description: "Custom sites, SEO, timelines, and AI visibility.",
  });
}
