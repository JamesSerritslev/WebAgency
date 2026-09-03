import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/brand";
import { getSiteUrl } from "@/lib/site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: PageSeoInput): Metadata {
  const url = `${getSiteUrl()}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${BRAND_NAME}`,
      description,
      url,
      type: "website",
      siteName: BRAND_NAME,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
