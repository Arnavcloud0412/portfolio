import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { getSiteUrl } from "@/lib/site-url";

export const siteDescription =
  "Portfolio of Arnav Deka — full-stack developer building institutional systems, event operations platforms, academic portals, and AI-powered applications across Mumbai, India.";

export const siteKeywords = [
  "Arnav Deka",
  "Full Stack Developer",
  "Portfolio",
  "React",
  "Next.js",
  "Python",
  "Flask",
  "Alegria MIS",
  "PCE Internship Portal",
  "Google Cloud Innovator",
  "Mumbai developer",
  "Web developer India",
];

export function createSiteMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const title = `${siteConfig.name} — ${siteConfig.tagline}`;
  const ogImage = "/favion.png";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s · ${siteConfig.name}`,
    },
    description: siteDescription,
    keywords: siteKeywords,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    applicationName: `${siteConfig.name} Portfolio`,
    category: "technology",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favion.png",
      shortcut: "/favion.png",
      apple: "/favion.png",
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: siteUrl,
      siteName: `${siteConfig.name} Portfolio`,
      title,
      description: siteDescription,
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: `${siteConfig.name} monogram`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: siteDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: siteUrl,
    },
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
      : {}),
  };
}
