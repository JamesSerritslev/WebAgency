import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "COR Web Solutions services";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "Services",
    description: "Custom websites and SEO that help people find you.",
  });
}
