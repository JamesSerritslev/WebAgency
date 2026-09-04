export const CONTACT_DRAFT_KEY = "cor-contact-draft";

export type ContactDraft = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
  websiteTier: string;
  seoTier: string;
  returnPath: "/" | "/contact";
};

export function emptyContactDraft(): ContactDraft {
  return {
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: "",
    websiteTier: "",
    seoTier: "",
    returnPath: "/contact",
  };
}

export function saveContactDraft(draft: ContactDraft) {
  sessionStorage.setItem(CONTACT_DRAFT_KEY, JSON.stringify(draft));
}

export function readContactDraft(): ContactDraft | null {
  try {
    const raw = sessionStorage.getItem(CONTACT_DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ContactDraft>;
    return {
      ...emptyContactDraft(),
      ...parsed,
      returnPath: parsed.returnPath === "/" ? "/" : "/contact",
    };
  } catch {
    return null;
  }
}

export function clearContactDraft() {
  sessionStorage.removeItem(CONTACT_DRAFT_KEY);
}

export function contactReturnPath(): ContactDraft["returnPath"] {
  return window.location.pathname === "/" ? "/" : "/contact";
}
