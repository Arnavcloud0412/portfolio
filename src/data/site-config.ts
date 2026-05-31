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
    { label: "Log", href: "#log" },
    { label: "Systems", href: "#work" },
    { label: "Trajectory", href: "#timeline" },
    { label: "Operator", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

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
  design: ["Information architecture", "Editorial systems", "UX & product", "Type systems"],
  engineering: [
    "React · TypeScript · Next.js",
    "Node · PostgreSQL · PostGIS",
    "Python · TensorFlow · OpenCV",
    "GeoServer · WebGIS",
  ],
  toolkit: ["Figma", "Streamlit", "Git · CI/CD", "A very loud kettle"],
};
