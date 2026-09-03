import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "COR Web Solutions privacy";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "Privacy",
    description: "How contact form details are used.",
  });
}
