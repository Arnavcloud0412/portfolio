export const SITE_URL = "https://arnavdeka.in";

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return SITE_URL;
}

export function getCanonicalUrl(path = ""): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
