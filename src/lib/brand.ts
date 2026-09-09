export const BRAND_MARK = "COR";
export const BRAND_SUFFIX = "Web Solutions";
export const BRAND_NAME = `${BRAND_MARK} ${BRAND_SUFFIX}`;
export const BRAND_FULL = "Create, Optimize, Rank";
export const OWNER_NAME = "James Serritslev";
export const OWNER_FIRST_NAME = "James";
export const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL ?? "jamesserritslev@gmail.com";
export const TAGLINE =
  "Custom websites and SEO that help local businesses get found.";
export const AUDIENCE =
  "restaurants, bars, wineries, cafes, online stores, plumbers, contractors, electricians, HVAC companies, landscapers, auto shops, salons, gyms, clinics, and other local trades or storefronts";

export const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61594162109386",
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/143692912/",
    label: "LinkedIn",
  },
] as const;
