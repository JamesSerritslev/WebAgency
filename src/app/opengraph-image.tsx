import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "COR Web Solutions: custom websites, SEO, and AI visibility";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "Custom websites for local businesses",
    description: "Hand-built sites, local SEO, and AI visibility. No WordPress.",
  });
}
