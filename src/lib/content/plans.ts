import { buildTiers, personalTier, seoTiers } from "@/lib/content/pricing";

export type PlanOption = {
  value: string;
  label: string;
};

export const websitePlanOptions: PlanOption[] = [
  { value: "none", label: "None" },
  { value: "personal", label: personalTier.name },
  ...buildTiers.map((tier) => ({
    value: tier.name.toLowerCase(),
    label: tier.name,
  })),
];

export const seoPlanOptions: PlanOption[] = [
  { value: "none", label: "None" },
  ...seoTiers.map((tier) => ({
    value: tier.name.replace(/^SEO\s+/i, "").toLowerCase().replace(/\s+/g, "-"),
    label: tier.name,
  })),
];

const websiteValues = new Set(websitePlanOptions.map((option) => option.value));
const seoValues = new Set(seoPlanOptions.map((option) => option.value));

export function isWebsitePlan(value: string) {
  return websiteValues.has(value);
}

export function isSeoPlan(value: string) {
  return seoValues.has(value);
}

export function websitePlanLabel(value: string) {
  return websitePlanOptions.find((option) => option.value === value)?.label ?? value;
}

export function seoPlanLabel(value: string) {
  if (!value) return "Not selected";
  return seoPlanOptions.find((option) => option.value === value)?.label ?? value;
}

export function websiteTierValue(name: string) {
  if (name === personalTier.name) return "personal";
  return name.toLowerCase();
}

export function seoTierValue(name: string) {
  return name.replace(/^SEO\s+/i, "").toLowerCase().replace(/\s+/g, "-");
}
