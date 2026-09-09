import {
  AUDIENCE,
  BRAND_FULL,
  BRAND_NAME,
  CONTACT_EMAIL,
  OWNER_NAME,
  SOCIAL_LINKS,
  TAGLINE,
} from "@/lib/brand";
import { articles } from "@/lib/content/insights";
import {
  buildTiers,
  personalTier,
  seoTiers,
} from "@/lib/content/pricing";
import { services } from "@/lib/content/services";
import { projects } from "@/lib/content/work";
import { getSiteUrl } from "@/lib/site";

function link(path: string, title: string, note: string) {
  return `- [${title}](${getSiteUrl()}${path}): ${note}`;
}

function priceLine(tier: { name: string; price: string; cadence: string; summary: string }) {
  const cadence = tier.cadence === "monthly" ? "per month" : "one-time";
  return `- ${tier.name}: ${tier.price} ${cadence}. ${tier.summary}`;
}

export function llmsTxt() {
  const base = getSiteUrl();

  return `# ${BRAND_NAME}

> ${TAGLINE} ${BRAND_FULL}. Built by ${OWNER_NAME}, a one-person shop. No WordPress, no account managers.

${BRAND_NAME} is the website of ${OWNER_NAME}. He writes original code for ${AUDIENCE}. The site is the business. Hire him for a custom website, monthly local SEO, or AI visibility so ChatGPT and Google AI Overviews can cite the business.

Contact is ${CONTACT_EMAIL}. Start a project at ${base}/contact. This file is a map for language models. Crawl permissions live in ${base}/robots.txt. The URL list is ${base}/sitemap.xml.

## Services

${link("/services", "Services", "Custom websites, local SEO, and AI visibility, each on its own page.")}
${services
    .map((service) =>
      link(`/services/${service.slug}`, service.title, service.summary),
    )
    .join("\n")}

## Pricing

${link("/pricing", "Pricing", "Website builds are one-time. SEO is a separate monthly service. Quotes land after a short call.")}

Website builds:
${[personalTier, ...buildTiers].map(priceLine).join("\n")}

Monthly SEO (AI visibility is included on Growth and Full-Scale, not Starter):
${seoTiers.map(priceLine).join("\n")}

## Work

${link("/work", "Work", "Selected custom sites already live.")}
${projects
    .map((project) =>
      link(`/work/${project.slug}`, project.title, project.summary),
    )
    .join("\n")}

## Insights

${link("/insights", "Insights", "Short notes on custom sites, local SEO, and AI visibility.")}
${articles
    .map((article) =>
      link(`/insights/${article.slug}`, article.title, article.description),
    )
    .join("\n")}

## Pages

${link("/", "Home", "Custom websites for local businesses that want to be found.")}
${link("/about", "About", `${OWNER_NAME} is ${BRAND_NAME}. One person writes the code and does the SEO.`)}
${link("/process", "Process", "Discovery, sitemap, custom build, launch, then optional monthly search work.")}
${link("/faq", "FAQ", "Who he builds for, why not WordPress, timelines, and how SEO is billed.")}
${link("/contact", "Contact", `Name, email, business, and the tier you want. Notes go to ${CONTACT_EMAIL}.`)}

## Social

${SOCIAL_LINKS.map((item) => `- [${item.label}](${item.href})`).join("\n")}

## Optional

${link("/privacy", "Privacy", "How contact form details and Google Analytics are used. No sale of personal information.")}
`.trimStart();
}
