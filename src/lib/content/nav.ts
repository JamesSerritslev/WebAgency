export const NAV_SHRINK_AFTER = 24;
export const NAV_EXPAND_BELOW = 4;
export const PAGE_TOP_SCROLL = 48;

let appPath: string | null = null;
let navShrunk = false;
let navHoldUntil = 0;

export function trackAppPath(pathname: string) {
  if (appPath === null) {
    appPath = pathname;
    return "initial" as const;
  }
  if (appPath === pathname) return "same" as const;
  appPath = pathname;
  return "changed" as const;
}

export function getNavShrunk() {
  return navShrunk;
}

export function setNavShrunk(value: boolean) {
  navShrunk = value;
}

export function holdNavState(ms = 450) {
  navHoldUntil = Date.now() + ms;
}

export function isNavHeld() {
  return Date.now() < navHoldUntil;
}

export function navScrollTop() {
  return navShrunk ? PAGE_TOP_SCROLL : 0;
}

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/services/custom-websites", label: "Custom websites" },
  { href: "/services/seo", label: "SEO" },
  { href: "/services/ai-visibility", label: "AI visibility" },
  { href: "/pricing", label: "Pricing" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
] as const;
