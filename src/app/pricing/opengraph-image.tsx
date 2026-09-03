import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "COR Web Solutions pricing";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "Website and SEO pricing",
    description: "One-time builds from $700. Monthly SEO from $750.",
  });
}
