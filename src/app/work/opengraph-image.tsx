import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "COR Web Solutions selected work";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "Selected work",
    description: "Custom sites for local businesses.",
  });
}
