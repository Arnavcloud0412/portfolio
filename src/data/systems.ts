export type DiagramType =
  | "operations"
  | "academic"
  | "governance"
  | "travel"
  | "spatial"
  | "community"
  | "healthcare"
  | "editorial"
  | "logistics"
  | "vision"
  | "document";

export type SystemDetail = {
  id: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  summary: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    data: string[];
    infra: string[];
  };
  diagram: DiagramType;
  status: string;
  scope: string;
};

export const allSystems: SystemDetail[] = [
  {
    id: "001",
    title: "Alegria MIS",
    tags: ["OPERATIONS", "EVENT MANAGEMENT"],
    year: "2026",
    description:
      "A large-scale event operations platform managing registrations, receipts, attendance, analytics, and real-time workflows across multiple institutions. Officially adopted by the Pillai Group of Institutions and designed to support high-volume operations with zero receipt duplication.",
    summary: [
      "Alegria MIS is the operational backbone for Pillai Group's annual festival — coordinating registrations, receipt generation, attendance verification, and cross-campus analytics from a single centralized system.",
      "The platform enforces strict receipt integrity: each transaction is logged once, validated against institutional rules, and traceable across departments. Real-time dashboards give coordinators visibility into volume, bottlenecks, and completion rates during peak event windows.",
      "Built for multi-institution deployment, the system handles role-based access for volunteers, coordinators, and administrators — with Google SSO restricted to college accounts for authentication.",
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "REST APIs", "Google OAuth"],
      data: ["PostgreSQL", "Redis"],
      infra: ["Vercel", "Cloud storage", "CI/CD"],
    },
    diagram: "operations",
    status: "Production · Institutional deployment",
    scope: "Pillai Group of Institutions",
  },
  {
    id: "002",
    title: "PCE Internship Portal",
    tags: ["ACADEMIC", "OPERATIONS SYSTEM"],
    year: "2025",
    description:
      "A centralized internship management platform supporting objectives, weekly reports, evaluations, faculty approvals, and student progress tracking. Built for long-term institutional use across academic departments.",
    summary: [
      "The PCE Internship Portal replaces fragmented spreadsheets and email chains with a structured workflow for the full internship lifecycle — from objective submission through weekly reporting to final faculty evaluation.",
      "Students log progress against defined objectives; faculty review and approve at each stage; administrators maintain oversight across departments without losing audit history.",
      "Designed as durable institutional infrastructure rather than a semester prototype — schemas, permissions, and reporting were built to survive handoffs between academic years.",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "JWT auth"],
      data: ["PostgreSQL", "Prisma"],
      infra: ["Docker", "Nginx", "GitHub Actions"],
    },
    diagram: "academic",
    status: "Production · Multi-department",
    scope: "PCE academic departments",
  },
  {
    id: "003",
    title: "PCE Students' Council Portal",
    tags: ["GOVERNANCE", "DIGITAL ARCHIVE"],
    year: "2025",
    description:
      "An administrative platform for council operations, attendance tracking, report management, and archival of institutional records. Designed to preserve organizational knowledge and streamline governance workflows.",
    summary: [
      "The Students' Council Portal documents how the council operates — meetings, attendance, reports, and decisions — in a searchable archive that outlasts individual tenures.",
      "Attendance modules track participation across events and sessions; report management centralizes submissions from committees; archival structures preserve records in a consistent format for future councils.",
      "Governance workflows were modeled explicitly: who submits, who approves, what gets stored, and how it is retrieved years later.",
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript"],
      backend: ["Node.js", "REST APIs"],
      data: ["PostgreSQL", "File storage"],
      infra: ["VPS hosting", "Automated backups"],
    },
    diagram: "governance",
    status: "Production · Council operations",
    scope: "PCE Students' Council",
  },
  {
    id: "004",
    title: "Trupti Tours",
    tags: ["TRAVEL", "DIGITAL EXPERIENCE"],
    year: "2025",
    description:
      "A production-ready travel platform with integrated content management, dynamic package listings, destination management, SEO optimization, and customer-facing booking experiences.",
    summary: [
      "Trupti Tours is a client-facing travel platform combining a content-managed marketing site with dynamic package and destination listings — built for operators who need to update offerings without developer intervention.",
      "SEO structure, metadata, and page hierarchy were treated as first-class requirements: each destination and package is indexable, linkable, and maintainable through the CMS layer.",
      "The booking experience prioritizes clarity over conversion tricks — package details, itineraries, and inquiry flows are designed for trust on mobile and desktop.",
    ],
    technologies: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Headless CMS", "Node.js APIs"],
      data: ["PostgreSQL", "Media CDN"],
      infra: ["Vercel", "Analytics", "SEO tooling"],
    },
    diagram: "travel",
    status: "Production · Client deployment",
    scope: "Trupti Tours travel operations",
  },
  {
    id: "005",
    title: "Fra Mitra",
    tags: ["GOVTECH", "SPATIAL INTELLIGENCE"],
    year: "2025",
    description:
      "A Forest Rights Act decision-support platform combining OCR, NER, satellite imagery, machine learning, PostGIS, GeoServer, and WebGIS capabilities to support land-rights verification and governance workflows.",
    summary: [
      "Fra Mitra supports Forest Rights Act verification by combining document intelligence with geospatial analysis — extracting claims from scanned records, linking entities to map layers, and presenting results through a WebGIS interface.",
      "OCR and NER pipelines process legacy documents; satellite imagery and PostGIS store spatial boundaries; GeoServer serves map tiles; the frontend exposes layers for officers reviewing land-rights cases.",
      "The system was architected as a decision-support tool — surfacing evidence and spatial context for human review rather than automating legal conclusions.",
    ],
    technologies: {
      frontend: ["React", "Leaflet / WebGIS", "TypeScript"],
      backend: ["Python", "FastAPI", "GeoServer"],
      data: ["PostGIS", "PostgreSQL", "TensorFlow", "OpenCV"],
      infra: ["Docker", "GPU inference", "Tile caching"],
    },
    diagram: "spatial",
    status: "Prototype · Govtech pilot",
    scope: "Forest Rights Act workflows",
  },
  {
    id: "006",
    title: "GDG OpsHub",
    tags: ["COMMUNITY", "OPERATIONS PLATFORM"],
    year: "2026",
    description:
      "A community operations platform designed for member management, event coordination, contribution tracking, documentation workflows, and organizational automation.",
    summary: [
      "GDG OpsHub centralizes how a developer community runs itself — member records, event pipelines, contribution logs, and internal documentation in one operational surface.",
      "Event coordination modules track RSVPs, roles, and post-event reports; contribution tracking gives leads visibility into who shipped what; documentation workflows keep runbooks accessible.",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "REST APIs"],
      data: ["PostgreSQL", "Notion API sync"],
      infra: ["Vercel", "Webhooks"],
    },
    diagram: "community",
    status: "Active · Community ops",
    scope: "GDG chapter operations",
  },
  {
    id: "007",
    title: "MediAssist",
    tags: ["HEALTHCARE", "DECISION SUPPORT"],
    year: "2025",
    description:
      "A healthcare assistant platform combining voice input, symptom analysis, disease prediction using traditional machine learning, medical report generation, and healthcare workflow automation.",
    summary: [
      "MediAssist explores voice-first symptom intake combined with classical ML models for preliminary analysis — always framed as assistive, not diagnostic.",
      "The pipeline captures spoken input, structures symptoms, runs prediction models trained on curated datasets, and generates readable reports for review.",
    ],
    technologies: {
      frontend: ["React", "Web Speech API"],
      backend: ["Python", "Flask", "scikit-learn"],
      data: ["SQLite", "CSV training sets"],
      infra: ["Local / cloud deploy"],
    },
    diagram: "healthcare",
    status: "Prototype · Research",
    scope: "Healthcare decision support",
  },
  {
    id: "008",
    title: "Soch Alegria",
    tags: ["CULTURAL", "DIGITAL EXPERIENCE"],
    year: "2025",
    description:
      "A digital platform designed to showcase stories, initiatives, events, and creative work associated with the Alegria ecosystem through an engaging editorial experience.",
    summary: [
      "Soch Alegria is the editorial layer of the Alegria ecosystem — stories, initiatives, and creative work presented through a typographic, magazine-style reading experience.",
      "Content structure prioritizes narrative flow over feed mechanics: long-form pieces, event highlights, and initiative archives are browsable as a cultural record.",
    ],
    technologies: {
      frontend: ["Next.js", "React", "MDX"],
      backend: ["Headless CMS"],
      data: ["Content API", "Image optimization"],
      infra: ["Vercel", "CDN"],
    },
    diagram: "editorial",
    status: "Production · Cultural archive",
    scope: "Alegria ecosystem",
  },
  {
    id: "009",
    title: "SwiftShip",
    tags: ["LOGISTICS", "MANAGEMENT PLATFORM"],
    year: "2026",
    description:
      "A logistics and shipment management system focused on workflow visibility, delivery tracking, operational efficiency, and process automation.",
    summary: [
      "SwiftShip provides end-to-end visibility for shipment workflows — from dispatch through delivery confirmation — with status tracking and operational dashboards.",
      "Automation hooks reduce manual status updates; role-based views give operators and managers different slices of the same pipeline.",
    ],
    technologies: {
      frontend: ["React", "TypeScript"],
      backend: ["Node.js", "Express"],
      data: ["PostgreSQL", "Redis queues"],
      infra: ["Docker", "Cron jobs"],
    },
    diagram: "logistics",
    status: "In development",
    scope: "Logistics operations",
  },
  {
    id: "010",
    title: "FlowVision",
    tags: ["INDUSTRIAL", "COMPUTER VISION"],
    year: "2025",
    description:
      "An AI-powered engineering document analysis system for P&ID diagrams. Built using TensorFlow, OpenCV, and Streamlit to detect pipelines, instrumentation, control systems, and engineering relationships automatically.",
    summary: [
      "FlowVision parses P&ID engineering drawings — detecting pipelines, instrumentation symbols, and control relationships using computer vision models trained on annotated diagram datasets.",
      "OpenCV handles preprocessing; TensorFlow models classify symbols and connections; Streamlit provides an inspection UI for engineers validating detections against source documents.",
    ],
    technologies: {
      frontend: ["Streamlit"],
      backend: ["Python", "TensorFlow"],
      data: ["OpenCV", "Custom annotation sets"],
      infra: ["Local GPU", "Model checkpoints"],
    },
    diagram: "vision",
    status: "Prototype · Industrial CV",
    scope: "P&ID document analysis",
  },
  {
    id: "011",
    title: "Resume Analyzer",
    tags: ["DOCUMENT", "INTELLIGENCE SYSTEM"],
    year: "2025",
    description:
      "An intelligent document analysis tool that evaluates resumes, extracts structured information, and provides automated feedback and recommendations.",
    summary: [
      "Resume Analyzer extracts structured fields from uploaded CVs — experience, skills, education — and surfaces formatting and content feedback against configurable criteria.",
      "The pipeline combines PDF parsing, entity extraction, and rule-based scoring to produce actionable recommendations without opaque black-box outputs.",
    ],
    technologies: {
      frontend: ["React", "TypeScript"],
      backend: ["Python", "FastAPI"],
      data: ["PDF parsing", "NLP pipelines"],
      infra: ["Serverless functions"],
    },
    diagram: "document",
    status: "Prototype · Document intel",
    scope: "Resume evaluation workflows",
  },
];

export const flagshipSystems = allSystems.filter((s) =>
  ["001", "002", "003", "004", "005"].includes(s.id)
);

export const archiveSystems = allSystems.filter((s) =>
  ["006", "007", "008", "009", "010", "011"].includes(s.id)
);

export function getSystemById(id: string): SystemDetail | undefined {
  return allSystems.find((s) => s.id === id);
}

export function getSystemPath(id: string): string {
  return `/systems/${id}`;
}
