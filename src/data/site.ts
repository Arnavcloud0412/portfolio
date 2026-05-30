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

export type System = {
  id: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  href?: string;
};

export const flagshipSystems: System[] = [
  {
    id: "001",
    title: "Alegria MIS",
    tags: ["OPERATIONS", "EVENT MANAGEMENT"],
    year: "2026",
    description:
      "A large-scale event operations platform managing registrations, receipts, attendance, analytics, and real-time workflows across multiple institutions. Officially adopted by the Pillai Group of Institutions and designed to support high-volume operations with zero receipt duplication.",
  },
  {
    id: "002",
    title: "PCE Internship Portal",
    tags: ["ACADEMIC", "OPERATIONS SYSTEM"],
    year: "2025",
    description:
      "A centralized internship management platform supporting objectives, weekly reports, evaluations, faculty approvals, and student progress tracking. Built for long-term institutional use across academic departments.",
  },
  {
    id: "003",
    title: "PCE Students' Council Portal",
    tags: ["GOVERNANCE", "DIGITAL ARCHIVE"],
    year: "2025",
    description:
      "An administrative platform for council operations, attendance tracking, report management, and archival of institutional records. Designed to preserve organizational knowledge and streamline governance workflows.",
  },
  {
    id: "004",
    title: "Trupti Tours",
    tags: ["TRAVEL", "DIGITAL EXPERIENCE"],
    year: "2025",
    description:
      "A production-ready travel platform with integrated content management, dynamic package listings, destination management, SEO optimization, and customer-facing booking experiences.",
  },
  {
    id: "005",
    title: "Fra Mitra",
    tags: ["GOVTECH", "SPATIAL INTELLIGENCE"],
    year: "2025",
    description:
      "A Forest Rights Act decision-support platform combining OCR, NER, satellite imagery, machine learning, PostGIS, GeoServer, and WebGIS capabilities to support land-rights verification and governance workflows.",
  },
];

export const archiveSystems: System[] = [
  {
    id: "006",
    title: "GDG OpsHub",
    tags: ["COMMUNITY", "OPERATIONS PLATFORM"],
    year: "2026",
    description:
      "A community operations platform designed for member management, event coordination, contribution tracking, documentation workflows, and organizational automation.",
  },
  {
    id: "007",
    title: "MediAssist",
    tags: ["HEALTHCARE", "DECISION SUPPORT"],
    year: "2025",
    description:
      "A healthcare assistant platform combining voice input, symptom analysis, disease prediction using traditional machine learning, medical report generation, and healthcare workflow automation.",
  },
  {
    id: "008",
    title: "Soch Alegria",
    tags: ["CULTURAL", "DIGITAL EXPERIENCE"],
    year: "2025",
    description:
      "A digital platform designed to showcase stories, initiatives, events, and creative work associated with the Alegria ecosystem through an engaging editorial experience.",
  },
  {
    id: "009",
    title: "SwiftShip",
    tags: ["LOGISTICS", "MANAGEMENT PLATFORM"],
    year: "2026",
    description:
      "A logistics and shipment management system focused on workflow visibility, delivery tracking, operational efficiency, and process automation.",
  },
  {
    id: "010",
    title: "FlowVision",
    tags: ["INDUSTRIAL", "COMPUTER VISION"],
    year: "2025",
    description:
      "An AI-powered engineering document analysis system for P&ID diagrams. Built using TensorFlow, OpenCV, and Streamlit to detect pipelines, instrumentation, control systems, and engineering relationships automatically.",
  },
  {
    id: "011",
    title: "Resume Analyzer",
    tags: ["DOCUMENT", "INTELLIGENCE SYSTEM"],
    year: "2025",
    description:
      "An intelligent document analysis tool that evaluates resumes, extracts structured information, and provides automated feedback and recommendations.",
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
  design: ["Information architecture", "Editorial systems", "UX & product", "Type systems"],
  engineering: [
    "React · TypeScript · Next.js",
    "Node · PostgreSQL · PostGIS",
    "Python · TensorFlow · OpenCV",
    "GeoServer · WebGIS",
  ],
  toolkit: ["Figma", "Streamlit", "Git · CI/CD", "A very loud kettle"],
};
