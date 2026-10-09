import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "COR Web Solutions pricing";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "Website and SEO pricing",
    description: "Website builds from $200. Monthly SEO from $750.",
  });
}
