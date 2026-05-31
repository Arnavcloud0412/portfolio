import { getSystemById, getSystemPath } from "./systems";

export type SkillBrief = {
  context: string;
};

export type SkillDeployment = {
  id: string;
  title: string;
  year: string;
  href: string;
};

export const skillDeployments: Record<string, string[]> = {
  Python: ["002", "007", "009", "011"],
  JavaScript: ["001", "002", "003", "004", "005", "006", "008", "009"],
  C: [],
  Java: [],
  React: ["001", "003", "004", "005", "006", "008", "009", "011"],
  "Next.js": ["001", "003", "004", "006"],
  HTML: ["002", "004", "005", "007"],
  CSS: ["002", "004", "005", "007"],
  "Tailwind CSS": ["001", "002", "003", "006"],
  Angular: [],
  Flask: ["002"],
  Streamlit: ["011"],
  "REST APIs": ["001", "002", "003", "009"],
  SQLAlchemy: ["002", "007"],
  Prisma: ["001"],
  "Knex.js": [],
  Fastify: [],
  PostgreSQL: ["001", "003", "006", "008", "009", "011"],
  MySQL: ["002", "007"],
  "Firebase Firestore": ["003", "006", "007"],
  PyTest: ["009"],
  Locust: ["001"],
  "Stress Testing": ["001", "009"],
  Debugging: ["001", "002", "003", "007"],
  "System Reliability": ["001", "002", "009"],
  Docker: ["003", "006", "009"],
  Jenkins: ["009"],
  "CI/CD": ["003", "006", "009"],
  Terraform: ["009"],
  Ansible: ["009"],
  "Cron Jobs": ["002"],
  "Ubuntu/Linux LTS": ["003", "006", "009"],
  "AWS EC2": ["009"],
  "Self-Hosted Servers": ["003", "006"],
  "Remote Sandbox Environments": ["009", "011"],
  n8n: ["008"],
  Git: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "011"],
  Maven: [],
  Vercel: ["001", "003", "006", "008"],
  "Google Cloud Console": ["007"],
  "Firebase Console": ["003", "006", "007"],
  "Cloudflare Tunnel": ["003", "006"],
  "API Integration": ["001", "003", "006", "011"],
  "Database Design": ["001", "002", "003", "009"],
  Authentication: ["002", "003"],
  NLP: ["007"],
  TensorFlow: ["007", "011"],
  WebGIS: ["004", "005"],
};

export const skillBriefs: Record<string, SkillBrief> = {
  Python: {
    context: "Service layers, ML inference, and document processing pipelines.",
  },
  JavaScript: {
    context: "Full-stack application logic across indexed web systems.",
  },
  C: {
    context: "Systems programming fundamentals and low-level problem solving.",
  },
  Java: {
    context: "Object-oriented design and backend coursework foundations.",
  },
  React: {
    context: "Component architecture for institutional and client-facing interfaces.",
  },
  "Next.js": {
    context: "SSR and app routing for production event and governance platforms.",
  },
  HTML: {
    context: "Semantic structure and accessible markup in all web deployments.",
  },
  CSS: {
    context: "Layout, typography, and responsive presentation layers.",
  },
  "Tailwind CSS": {
    context: "Utility-first styling for rapid, consistent UI across systems.",
  },
  Angular: {
    context: "Component-based SPAs in structured academic projects.",
  },
  Flask: {
    context: "Lightweight Python services for healthcare and analytics prototypes.",
  },
  Streamlit: {
    context: "Inspection UIs for ML and computer-vision workflows.",
  },
  "REST APIs": {
    context: "Contract-first endpoints connecting frontends to operational backends.",
  },
  SQLAlchemy: {
    context: "ORM mapping and query composition in Python service layers.",
  },
  Prisma: {
    context: "Type-safe schema migrations and data access in academic portals.",
  },
  "Knex.js": {
    context: "SQL query building and migration scripts in Node backends.",
  },
  Fastify: {
    context: "High-throughput Node HTTP services with schema validation.",
  },
  PostgreSQL: {
    context: "Relational schemas, RBAC, and institutional data models at scale.",
  },
  MySQL: {
    context: "Relational storage for academic and internship management workflows.",
  },
  "Firebase Firestore": {
    context: "Document storage and real-time sync in rapid-prototype deployments.",
  },
  PyTest: {
    context: "Unit and integration coverage for Python service reliability.",
  },
  Locust: {
    context: "Load simulation for high-volume event registration windows.",
  },
  "Stress Testing": {
    context: "Peak-load validation before festival and registration go-live.",
  },
  Debugging: {
    context: "Production trace analysis across distributed institutional systems.",
  },
  "System Reliability": {
    context: "Uptime, data integrity, and failure recovery under real operational load.",
  },
  Docker: {
    context: "Containerized deploys for academic, spatial, and logistics systems.",
  },
  Jenkins: {
    context: "Pipeline automation for build, test, and staged releases.",
  },
  "CI/CD": {
    context: "Automated deploy paths from commit to production infrastructure.",
  },
  Terraform: {
    context: "Infrastructure-as-code for reproducible cloud provisioning.",
  },
  Ansible: {
    context: "Configuration management across self-hosted server fleets.",
  },
  "Cron Jobs": {
    context: "Scheduled batch tasks for logistics and background processing.",
  },
  "Ubuntu/Linux LTS": {
    context: "Server administration on VPS and self-hosted production hosts.",
  },
  "AWS EC2": {
    context: "Cloud compute for sandboxed and production service hosting.",
  },
  "Self-Hosted Servers": {
    context: "On-premise deployment for council and govtech pilot systems.",
  },
  "Remote Sandbox Environments": {
    context: "Isolated staging for ML inference and integration testing.",
  },
  n8n: {
    context: "Workflow automation connecting APIs, webhooks, and internal tools.",
  },
  Git: {
    context: "Version control and collaborative delivery across all indexed systems.",
  },
  Maven: {
    context: "Java project builds and dependency management in coursework.",
  },
  Vercel: {
    context: "Edge deployment for event ops and community platforms.",
  },
  "Google Cloud Console": {
    context: "Cloud resource management and OAuth credential configuration.",
  },
  "Firebase Console": {
    context: "Auth, storage, and realtime database administration.",
  },
  "Cloudflare Tunnel": {
    context: "Secure exposure of self-hosted services without open ports.",
  },
  "API Integration": {
    context: "Connecting third-party services, webhooks, and internal modules.",
  },
  "Database Design": {
    context: "Normalized schemas, audit trails, and role-aware data access.",
  },
  Authentication: {
    context: "OAuth, JWT, and college-restricted SSO for institutional access.",
  },
  NLP: {
    context: "Entity extraction and text pipelines for document intelligence.",
  },
  TensorFlow: {
    context: "Model training and inference for spatial and industrial CV systems.",
  },
  WebGIS: {
    context: "Interactive map layers for land-rights and spatial decision support.",
  },
};

export function getSkillBrief(skill: string): SkillBrief | undefined {
  return skillBriefs[skill];
}

export function getSkillDeployments(skill: string): SkillDeployment[] {
  const ids = skillDeployments[skill] ?? [];

  return ids
    .map((id) => {
      const system = getSystemById(id);
      if (!system) return null;

      return {
        id: system.id,
        title: system.title,
        year: system.year,
        href: getSystemPath(id),
      };
    })
    .filter((entry): entry is SkillDeployment => entry !== null);
}
