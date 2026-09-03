import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Contact COR Web Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "Start a project",
    description: "Custom websites, SEO, and AI visibility.",
  });
}
