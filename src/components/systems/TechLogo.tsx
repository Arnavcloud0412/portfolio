type TechLogoProps = {
  name: string;
  className?: string;
};

function normalizeTechKey(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("next")) return "nextjs";
  if (n.includes("react")) return "react";
  if (n.includes("typescript")) return "typescript";
  if (n.includes("tailwind")) return "tailwind";
  if (n.includes("node")) return "nodejs";
  if (n.includes("postgres") || n.includes("postgis")) return "postgresql";
  if (n.includes("prisma")) return "prisma";
  if (n.includes("redis")) return "redis";
  if (n.includes("vercel")) return "vercel";
  if (n.includes("docker")) return "docker";
  if (n.includes("python")) return "python";
  if (n.includes("tensorflow")) return "tensorflow";
  if (n.includes("opencv")) return "opencv";
  if (n.includes("google") || n.includes("oauth")) return "google";
  if (n.includes("github")) return "github";
  if (n.includes("leaflet") || n.includes("webgis") || n.includes("geoserver")) return "gis";
  if (n.includes("mdx")) return "mdx";
  if (n.includes("cms")) return "cms";
  if (n.includes("rest") || n.includes("api")) return "api";
  if (n.includes("express")) return "nodejs";
  if (n.includes("flask") || n.includes("fastapi")) return "python";
  if (n.includes("streamlit")) return "streamlit";
  if (n.includes("jwt")) return "api";
  if (n.includes("sqlite")) return "postgresql";
  if (n.includes("scikit") || n.includes("ml") || n.includes("nlp")) return "ml";
  if (n.includes("pdf") || n.includes("document")) return "document";
  return "default";
}

function LogoArt({ techKey }: { techKey: string }) {
  switch (techKey) {
    case "nextjs":
      return (
        <>
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" />
          <path d="M11 22 V10 L16 18 L21 10 V22" stroke="currentColor" strokeWidth="1" />
        </>
      );
    case "react":
      return (
        <>
          <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="16" cy="16" rx="12" ry="5" stroke="currentColor" strokeWidth="0.8" />
          <ellipse cx="16" cy="16" rx="12" ry="5" stroke="currentColor" strokeWidth="0.8" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="12" ry="5" stroke="currentColor" strokeWidth="0.8" transform="rotate(120 16 16)" />
        </>
      );
    case "typescript":
      return (
        <>
          <rect x="6" y="6" width="20" height="20" stroke="currentColor" strokeWidth="1" />
          <path d="M12 20 V12 H16 C18 12 19 13 19 14.5 C19 16 18 17 16 17 H14" stroke="currentColor" strokeWidth="0.9" />
          <path d="M20 12 V20 M20 12 H23 V20" stroke="currentColor" strokeWidth="0.9" />
        </>
      );
    case "tailwind":
      return (
        <path
          d="M8 14 C8 10 12 8 16 10 C20 12 24 10 24 14 C24 18 20 22 16 20 C12 18 8 18 8 14"
          stroke="currentColor"
          strokeWidth="1"
        />
      );
    case "nodejs":
      return (
        <>
          <path d="M16 4 L26 10 V22 L16 28 L6 22 V10 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M13 14 H19 M16 14 V20" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "postgresql":
      return (
        <>
          <ellipse cx="16" cy="10" rx="8" ry="3" stroke="currentColor" strokeWidth="1" />
          <path d="M8 10 V22 C8 25 22 25 24 22 V10" stroke="currentColor" strokeWidth="1" />
        </>
      );
    case "redis":
      return (
        <>
          <ellipse cx="16" cy="10" rx="9" ry="3" stroke="currentColor" strokeWidth="1" />
          <path d="M7 10 V14 L16 18 L25 14 V10" stroke="currentColor" strokeWidth="0.9" />
          <path d="M7 16 V20 L16 24 L25 20 V16" stroke="currentColor" strokeWidth="0.9" />
        </>
      );
    case "vercel":
      return <path d="M16 6 L26 24 H6 Z" stroke="currentColor" strokeWidth="1" />;
    case "docker":
      return (
        <>
          <rect x="8" y="14" width="16" height="10" stroke="currentColor" strokeWidth="1" />
          <rect x="10" y="10" width="4" height="4" stroke="currentColor" strokeWidth="0.8" />
          <rect x="15" y="10" width="4" height="4" stroke="currentColor" strokeWidth="0.8" />
          <rect x="20" y="10" width="4" height="4" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "python":
      return (
        <path
          d="M12 8 H20 C22 8 23 9 23 11 V14 H18 V12 H14 V16 H23 V21 C23 23 22 24 20 24 H12 C10 24 9 23 9 21 V18 H14 V20 H18 V16 H9 V11 C9 9 10 8 12 8"
          stroke="currentColor"
          strokeWidth="0.85"
        />
      );
    case "tensorflow":
      return (
        <>
          <path d="M16 6 L24 26 H8 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M11 20 H21" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "google":
      return (
        <>
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1" />
          <path d="M16 10 V16 H21" stroke="currentColor" strokeWidth="0.9" />
        </>
      );
    case "gis":
      return (
        <>
          <circle cx="16" cy="14" r="6" stroke="currentColor" strokeWidth="1" />
          <path d="M16 20 V26 M12 24 H20" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "api":
      return (
        <>
          <rect x="6" y="10" width="8" height="12" stroke="currentColor" strokeWidth="0.9" />
          <rect x="18" y="10" width="8" height="12" stroke="currentColor" strokeWidth="0.9" />
          <path d="M14 16 H18 M16 14 V18" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "ml":
      return (
        <>
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1" />
          <path d="M10 20 Q16 8 22 20" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "document":
      return (
        <>
          <path d="M12 6 H20 L24 10 V26 H12 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M20 6 V10 H24" stroke="currentColor" strokeWidth="0.8" />
          <path d="M15 16 H21 M15 20 H19" stroke="currentColor" strokeWidth="0.7" />
        </>
      );
    default:
      return (
        <>
          <rect x="8" y="8" width="16" height="16" stroke="currentColor" strokeWidth="1" />
          <path d="M12 13 H20 M12 16 H18 M12 19 H16" stroke="currentColor" strokeWidth="0.7" />
        </>
      );
  }
}

export function TechLogo({ name, className = "h-7 w-7" }: TechLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={`shrink-0 text-ink ${className}`} aria-hidden>
      <LogoArt techKey={normalizeTechKey(name)} />
    </svg>
  );
}
