export const siteConfig = {
  name: "Arnav Deka",
  initials: "AD",
  tagline: "Developer & Designer",
  email: "hello@arnavdeka.dev",
  location: "Guwahati, IN",
  timezone: "GMT+5:30 · Mostly nocturnal",
  coordinates: { lat: "19.07° N", lon: "72.87° E" },
  status: "Active",
  social: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Project = {
  id: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  award?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    id: "001",
    title: "Nebula Commerce",
    tags: ["PRODUCT", "WEB", "2025"],
    year: "2025",
    description:
      "A headless e-commerce platform with real-time inventory sync and a modular checkout flow built for scale.",
    award: "FEATURED — PRODUCT HUNT",
    href: "#",
  },
  {
    id: "002",
    title: "Orbit Analytics",
    tags: ["DATA", "DASHBOARD", "2025"],
    year: "2025",
    description:
      "Real-time analytics dashboard with custom visualization layers and sub-second query performance.",
    href: "#",
  },
  {
    id: "003",
    title: "Signal Studio",
    tags: ["BRAND", "WEB", "2024"],
    year: "2024",
    description:
      "Brand identity and marketing site for a creative agency — editorial typography meets motion design.",
    award: "BRONZE — AWWWARDS",
    href: "#",
  },
  {
    id: "004",
    title: "Pulse Health",
    tags: ["MOBILE", "HEALTH", "2024"],
    year: "2024",
    description:
      "Patient-facing health app with appointment scheduling, vitals tracking, and telehealth integration.",
    href: "#",
  },
  {
    id: "005",
    title: "Archive OS",
    tags: ["OPEN SOURCE", "TOOLING", "2023"],
    year: "2023",
    description:
      "A personal knowledge management system with graph-based linking and full-text search.",
    href: "#",
  },
];

export type TimelineEntry = {
  year: string;
  location: string;
  role: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    location: "GUWAHATI — REMOTE",
    role: "Independent Practice",
    description:
      "Building products at the intersection of design and engineering. Consulting on design systems, product architecture, and frontend performance for early-stage startups.",
  },
  {
    year: "2024",
    location: "BANGALORE — HYBRID",
    role: "Senior Frontend Engineer",
    description:
      "Led frontend architecture for a Series B fintech platform. Shipped a component library adopted across 4 product teams and reduced bundle size by 40%.",
  },
  {
    year: "2022",
    location: "REMOTE",
    role: "Full-Stack Developer",
    description:
      "Built and maintained SaaS products end-to-end — from PostgreSQL schemas to React interfaces. Introduced CI/CD pipelines and automated testing culture.",
  },
  {
    year: "2020",
    location: "GUWAHATI",
    role: "Software Engineer",
    description:
      "First professional role. Shipped production features in React and Node.js, learned to read code as carefully as prose, and developed a taste for quiet interfaces.",
  },
  {
    year: "2019",
    location: "CAMPUS",
    role: "Computer Science",
    description:
      "Studied algorithms, systems, and the occasional late-night side project. Built my first portfolio — embarrassingly animated, but earnest.",
  },
];

export const skills = {
  design: ["Editorial systems", "Brand identity", "UX & product", "Type & wordmark"],
  engineering: [
    "React · TypeScript",
    "Tailwind · CSS",
    "Three.js · GSAP",
    "Next.js · Node",
  ],
  toolkit: ["Figma", "Framer · After Effects", "Blender", "A very loud kettle"],
};
