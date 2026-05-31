import { siteConfig } from "@/data/site-config";
import { siteDescription } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const linkedIn = siteConfig.social.find((link) => link.label === "LinkedIn")?.href;
  const github = siteConfig.social.find((link) => link.label === "GitHub")?.href;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteUrl,
    email: siteConfig.email,
    jobTitle: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    sameAs: [linkedIn, github].filter(Boolean),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema]),
      }}
    />
  );
}
