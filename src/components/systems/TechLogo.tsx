type TechLogoProps = {
  name: string;
  className?: string;
};

function normalizeTechKey(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("next")) return "nextjs";
  if (n.includes("react")) return "react";
  if (n.includes("angular")) return "angular";
  if (n.includes("typescript")) return "typescript";
  if (n.includes("javascript")) return "javascript";
  if (n.includes("tailwind")) return "tailwind";
  if (n.includes("html")) return "html";
  if (n.includes("css")) return "css";
  if (n.includes("node")) return "nodejs";
  if (n.includes("fastify")) return "nodejs";
  if (n.includes("postgres") || n.includes("postgis")) return "postgresql";
  if (n.includes("mysql")) return "mysql";
  if (n.includes("prisma")) return "prisma";
  if (n.includes("knex")) return "postgresql";
  if (n.includes("sqlalchemy")) return "python";
  if (n.includes("redis")) return "redis";
  if (n.includes("vercel")) return "vercel";
  if (n.includes("docker")) return "docker";
  if (n.includes("python") || n.includes("pytest")) return "python";
  if (n.includes("java") && !n.includes("javascript")) return "java";
  if (n === "c" || n.startsWith("c ")) return "c";
  if (n.includes("tensorflow")) return "tensorflow";
  if (n.includes("opencv")) return "opencv";
  if (n.includes("firebase")) return "firebase";
  if (n.includes("google")) return "google";
  if (n.includes("github") || n === "git") return "github";
  if (n.includes("leaflet") || n.includes("webgis") || n.includes("geoserver")) return "gis";
  if (n.includes("mdx")) return "mdx";
  if (n.includes("cms")) return "cms";
  if (n.includes("rest") || n.includes("api")) return "api";
  if (n.includes("auth")) return "auth";
  if (n.includes("express")) return "nodejs";
  if (n.includes("flask") || n.includes("fastapi")) return "python";
  if (n.includes("streamlit")) return "streamlit";
  if (n.includes("jwt")) return "api";
  if (n.includes("sqlite")) return "postgresql";
  if (n.includes("database")) return "postgresql";
  if (n.includes("scikit") || n.includes("ml") || n.includes("nlp")) return "ml";
  if (n.includes("pdf") || n.includes("document")) return "document";
  if (n.includes("jenkins") || n.includes("ci/cd")) return "pipeline";
  if (n.includes("terraform")) return "terraform";
  if (n.includes("ansible")) return "ansible";
  if (n.includes("aws") || n.includes("ec2") || n.includes("cloudflare")) return "cloud";
  if (n.includes("linux") || n.includes("ubuntu") || n.includes("cron")) return "terminal";
  if (n.includes("locust") || n.includes("stress") || n.includes("reliability")) return "testing";
  if (n.includes("debug")) return "testing";
  if (n.includes("maven")) return "maven";
  if (n.includes("n8n") || n.includes("workflow") || n.includes("automation")) return "workflow";
  if (n.includes("sandbox") || n.includes("self-hosted") || n.includes("server")) return "server";
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
    case "streamlit":
      return (
        <>
          <rect x="8" y="8" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1" />
          <path d="M12 14 H20 M12 17 H17 M12 20 H19" stroke="currentColor" strokeWidth="0.7" />
        </>
      );
    case "javascript":
      return (
        <>
          <rect x="6" y="6" width="20" height="20" stroke="currentColor" strokeWidth="1" />
          <path d="M12 22 V14 L15 20 L18 14 V22" stroke="currentColor" strokeWidth="0.85" />
          <path d="M20 14 V22 M20 14 C20 14 23 14 23 17 C23 20 20 20 20 20 V22" stroke="currentColor" strokeWidth="0.85" />
        </>
      );
    case "angular":
      return (
        <>
          <path d="M16 5 L26 9 L23 24 H9 L6 9 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M16 11 L19 19 H13 Z" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "html":
      return (
        <>
          <path d="M8 6 L24 6 L22 24 L16 26 L10 24 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M12 11 H20 M12 15 H19 M14 19 L16 21 L18 19" stroke="currentColor" strokeWidth="0.75" />
        </>
      );
    case "css":
      return (
        <>
          <path d="M8 6 L24 6 L22 24 L16 26 L10 24 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M16 11 V19 M13 14 H19 M13 17 H18" stroke="currentColor" strokeWidth="0.75" />
        </>
      );
    case "java":
      return (
        <>
          <path d="M14 8 C10 10 10 14 14 16 C18 18 20 20 16 22" stroke="currentColor" strokeWidth="0.9" />
          <path d="M18 10 C22 12 22 16 18 18" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "c":
      return (
        <>
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1" />
          <path d="M20 12 C16 10 12 12 12 16 C12 20 16 22 20 20" stroke="currentColor" strokeWidth="0.9" />
        </>
      );
    case "mysql":
      return (
        <>
          <path d="M16 6 C10 6 8 10 8 14 C8 18 10 22 16 24 C22 22 24 18 24 14 C24 10 22 6 16 6" stroke="currentColor" strokeWidth="1" />
          <path d="M12 14 H20" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "firebase":
      return (
        <>
          <path d="M16 6 L24 22 H8 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M16 14 L20 22 H12 Z" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "github":
      return (
        <>
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1" />
          <path d="M12 14 C12 12 13 11 16 11 C19 11 20 12 20 14 C20 16 18 16 18 18 V19" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "auth":
      return (
        <>
          <rect x="10" y="14" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1" />
          <path d="M13 14 V11 C13 9 14 7 16 7 C18 7 19 9 19 11 V14" stroke="currentColor" strokeWidth="0.9" />
        </>
      );
    case "pipeline":
      return (
        <>
          <circle cx="10" cy="16" r="3" stroke="currentColor" strokeWidth="0.9" />
          <circle cx="22" cy="16" r="3" stroke="currentColor" strokeWidth="0.9" />
          <path d="M13 16 H19 M16 13 V19" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "terraform":
      return (
        <>
          <path d="M8 22 L16 6 L24 22 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M11 18 H21" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "ansible":
      return (
        <>
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1" />
          <path d="M11 18 L16 10 L21 18" stroke="currentColor" strokeWidth="0.9" />
        </>
      );
    case "cloud":
      return (
        <path d="M10 20 H22 C25 20 26 17 24 15 C24 11 21 9 18 10 C16 7 12 7 10 10 C7 10 6 13 8 15 C6 17 7 20 10 20" stroke="currentColor" strokeWidth="1" />
      );
    case "terminal":
      return (
        <>
          <rect x="6" y="8" width="20" height="16" rx="1" stroke="currentColor" strokeWidth="1" />
          <path d="M10 14 L13 16 L10 18 M15 18 H20" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "testing":
      return (
        <>
          <path d="M10 8 H22 L20 24 H12 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M14 13 H18 M14 17 H17" stroke="currentColor" strokeWidth="0.7" />
        </>
      );
    case "maven":
      return (
        <>
          <path d="M8 20 L16 8 L24 20 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M12 16 H20" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "workflow":
      return (
        <>
          <rect x="6" y="10" width="8" height="6" stroke="currentColor" strokeWidth="0.9" />
          <rect x="18" y="16" width="8" height="6" stroke="currentColor" strokeWidth="0.9" />
          <path d="M14 13 C16 13 16 19 18 19" stroke="currentColor" strokeWidth="0.8" />
        </>
      );
    case "server":
      return (
        <>
          <rect x="8" y="8" width="16" height="6" stroke="currentColor" strokeWidth="0.9" />
          <rect x="8" y="16" width="16" height="6" stroke="currentColor" strokeWidth="0.9" />
          <circle cx="12" cy="11" r="1" fill="currentColor" />
          <circle cx="12" cy="19" r="1" fill="currentColor" />
        </>
      );
    case "prisma":
      return (
        <>
          <path d="M16 6 L24 26 H8 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M16 12 V20" stroke="currentColor" strokeWidth="0.8" />
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
