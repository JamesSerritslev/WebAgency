import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "About COR Web Solutions";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "One person. Every line of your site.",
    description: "Custom sites and SEO for local businesses.",
  });
}
