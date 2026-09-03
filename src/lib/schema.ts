import {
  BRAND_FULL,
  BRAND_NAME,
  CONTACT_EMAIL,
  OWNER_NAME,
  TAGLINE,
} from "@/lib/brand";
import type { PricingTier } from "@/lib/content/pricing";
import { getSiteUrl } from "@/lib/site";

export function organizationSchema() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    name: BRAND_NAME,
    alternateName: BRAND_FULL,
    url,
    email: CONTACT_EMAIL,
    description: TAGLINE,
    areaServed: "United States",
    founder: {
      "@type": "Person",
      name: OWNER_NAME,
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 1,
    },
    serviceType: [
      "Custom website design",
      "Search engine optimization",
      "Local SEO",
      "AI visibility",
    ],
    knowsAbout: [
      "Custom web design",
      "Technical SEO",
      "Local citations",
      "Keyword research",
      "AI search visibility",
    ],
  };
}

export function websiteSchema() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_NAME,
    url,
    description: TAGLINE,
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${url}${item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${getSiteUrl()}${input.path}`,
    provider: {
      "@type": "ProfessionalService",
      name: BRAND_NAME,
    },
    areaServed: "United States",
    audience: {
      "@type": "Audience",
      audienceType: "Small local businesses",
    },
  };
}

export function offerCatalogSchema(input: {
  name: string;
  description: string;
  path: string;
  tiers: readonly PricingTier[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: input.name,
    description: input.description,
    url: `${getSiteUrl()}${input.path}`,
    itemListElement: input.tiers.map((tier, index) => ({
      "@type": "Offer",
      position: index + 1,
      name: tier.name,
      description: tier.summary,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: tier.minPrice,
        maxPrice: tier.maxPrice,
        priceCurrency: "USD",
        ...(tier.cadence === "monthly" ? { unitText: "MONTH" } : {}),
      },
      itemOffered: {
        "@type": "Service",
        name: tier.name,
        description: tier.summary,
        provider: {
          "@type": "ProfessionalService",
          name: BRAND_NAME,
        },
      },
    })),
  };
}

export function faqSchema(
  faqs: { question: string; answer: string; bullets?: readonly string[] }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.bullets
          ? `${faq.answer} ${faq.bullets.join(" ")}`
          : faq.answer,
      },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  const url = `${getSiteUrl()}${input.path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url,
    datePublished: input.datePublished,
    author: {
      "@type": "Person",
      name: OWNER_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
    },
    mainEntityOfPage: url,
  };
}
