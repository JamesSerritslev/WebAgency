import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "COR Web Solutions process";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "How a project runs",
    description: "Discovery, custom build, launch, and SEO that gets you found.",
  });
}
