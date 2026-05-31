export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "C", "Java"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Angular"],
  },
  {
    title: "Backend",
    items: ["Flask", "Streamlit", "REST APIs", "SQLAlchemy", "Prisma", "Knex.js", "Fastify"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Firebase Firestore"],
  },
  {
    title: "Testing & Reliability",
    items: ["PyTest", "Locust", "Stress Testing", "Debugging", "System Reliability"],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      "Docker",
      "Jenkins",
      "CI/CD",
      "Terraform",
      "Ansible",
      "Cron Jobs",
      "Ubuntu/Linux LTS",
      "AWS EC2",
      "Self-Hosted Servers",
      "Remote Sandbox Environments",
    ],
  },
  {
    title: "Automation & Workflow Tools",
    items: ["n8n"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "Maven",
      "Vercel",
      "Google Cloud Console",
      "Firebase Console",
      "Cloudflare Tunnel",
    ],
  },
  {
    title: "Concepts",
    items: ["API Integration", "Database Design", "Authentication", "NLP", "TensorFlow", "WebGIS"],
  },
];
