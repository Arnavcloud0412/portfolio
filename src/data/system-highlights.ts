export type SystemHighlight = {
  headline: string;
  metrics: { value: string; label: string }[];
  modules: { title: string; detail: string }[];
};

export const systemHighlights: Record<string, SystemHighlight> = {
  "001": {
    headline: "Built to run an entire festival — without losing a single receipt.",
    metrics: [
      { value: "10,000+", label: "Receipts generated" },
      { value: "500+", label: "Active users" },
      { value: "17Lakh+", label: "Collections managed" },
    ],
    modules: [
      { title: "Registration", detail: "Volunteer-led intake with college Google SSO." },
      { title: "Receipt integrity", detail: "Single-issue validation across departments." },
      { title: "Attendance", detail: "Verification during peak event windows." },
      { title: "Analytics", detail: "Cross-campus volume and bottleneck visibility." },
    ],
  },
  "002": {
    headline: "One portal for the full internship lifecycle — not another spreadsheet.",
    metrics: [
      { value: "300+", label: "Students supported" },
      { value: "4,000+", label: "Reports managed" },
    ],
    modules: [
      { title: "Objectives", detail: "Structured goal submission at term start." },
      { title: "Weekly reports", detail: "Continuous progress against defined targets." },
      { title: "Faculty review", detail: "Approval chains across departments." },
      { title: "Evaluation", detail: "Final assessment with retained records." },
    ],
  },
  "003": {
    headline: "Governance that outlasts every council tenure.",
    metrics: [
      { value: "20+", label: "Reports managed annually" },
      { value: "5+", label: "Years of archived data" },
    ],
    modules: [
      { title: "Council ops", detail: "Central hub for meetings and decisions." },
      { title: "Attendance", detail: "Participation logged across sessions." },
      { title: "Reports", detail: "Committee submissions in one pipeline." },
      { title: "Archive", detail: "Institutional memory preserved for successors." },
    ],
  },
  "004": {
    headline: "Travel content operators can update — without calling a developer.",
    metrics: [
      { value: "CMS-driven", label: "Package listings" },
      { value: "SEO-first", label: "Page structure" },
      { value: "Production", label: "Client-ready" },
    ],
    modules: [
      { title: "Destinations", detail: "Dynamic listings with rich metadata." },
      { title: "Packages", detail: "Itineraries maintainable through CMS." },
      { title: "Booking flow", detail: "Clear inquiry paths on mobile and desktop." },
      { title: "Discoverability", detail: "Indexable pages built for search." },
    ],
  },
  "005": {
    headline: "Land-rights evidence on a map — not buried in a filing cabinet.",
    metrics: [
      { value: "OCR + NER", label: "Document intake" },
      { value: "PostGIS", label: "Spatial layers" },
      { value: "WebGIS", label: "Officer review UI" },
    ],
    modules: [
      { title: "Document scan", detail: "Legacy records parsed and structured." },
      { title: "Entity extract", detail: "Claims linked to named entities." },
      { title: "Satellite layer", detail: "Boundaries overlaid on map tiles." },
      { title: "Decision support", detail: "Evidence surfaced for human review." },
    ],
  },
  "006": {
    headline: "How a developer community runs itself — in one place.",
    metrics: [
      { value: "Members", label: "Roster & roles" },
      { value: "Events", label: "Coordination pipeline" },
      { value: "Docs", label: "Runbooks & records" },
    ],
    modules: [
      { title: "Membership", detail: "Contributor records and role tracking." },
      { title: "Events", detail: "RSVPs, roles, and post-event reports." },
      { title: "Contributions", detail: "Visibility into who shipped what." },
      { title: "Documentation", detail: "Internal workflows kept accessible." },
    ],
  },
  "007": {
    headline: "Voice-first intake — assistive, never diagnostic.",
    metrics: [
      { value: "Voice", label: "Symptom capture" },
      { value: "ML", label: "Classical models" },
      { value: "Report", label: "Readable output" },
    ],
    modules: [
      { title: "Speech input", detail: "Spoken symptoms structured automatically." },
      { title: "Analysis", detail: "Traditional ML on curated datasets." },
      { title: "Prediction", detail: "Preliminary signals for review." },
      { title: "Report gen", detail: "Human-readable summaries exported." },
    ],
  },
  "008": {
    headline: "Designed to keep event operations moving in real time.",
    metrics: [
      { value: "Centralized", label: "Operational hub" },
      { value: "Live", label: "Event-day tracking" },
      { value: "Verified", label: "Receipt integrity" },
    ],
    modules: [
      {
        title: "Registration",
        detail:
          "Volunteer-led participant onboarding with centralized event registration and data capture.",
      },
      {
        title: "Receipt integrity",
        detail:
          "Digital receipt validation and verification workflows to maintain registration accuracy.",
      },
      {
        title: "Attendance",
        detail:
          "Participant check-in and attendance tracking during live event operations.",
      },
      {
        title: "Analytics",
        detail:
          "Real-time dashboards for registration trends, attendance status, and operational insights.",
      },
    ],
  },
  "009": {
    headline: "Every shipment visible — from dispatch to confirmation.",
    metrics: [
      { value: "End-to-end", label: "Workflow tracking" },
      { value: "Automated", label: "Status updates" },
      { value: "Role-based", label: "Operator views" },
    ],
    modules: [
      { title: "Dispatch", detail: "Shipment creation and assignment." },
      { title: "Transit", detail: "Live status through delivery pipeline." },
      { title: "Confirmation", detail: "Proof-of-delivery capture." },
      { title: "Dashboard", detail: "Managers see bottlenecks at a glance." },
    ],
  },
  "010": {
    headline: "P&ID diagrams parsed — pipelines and instruments detected automatically.",
    metrics: [
      { value: "CV", label: "Symbol detection" },
      { value: "TensorFlow", label: "Model inference" },
      { value: "Streamlit", label: "Engineer UI" },
    ],
    modules: [
      { title: "Upload", detail: "Engineering drawings ingested." },
      { title: "Preprocess", detail: "OpenCV normalizes diagram quality." },
      { title: "Detect", detail: "Pipelines and instrumentation classified." },
      { title: "Inspect", detail: "Engineers validate against source." },
    ],
  },
  "011": {
    headline: "Resumes read carefully — feedback you can actually use.",
    metrics: [
      { value: "Parse", label: "PDF extraction" },
      { value: "Structure", label: "Field mapping" },
      { value: "Score", label: "Rule-based feedback" },
    ],
    modules: [
      { title: "Upload", detail: "CVs ingested in common formats." },
      { title: "Extract", detail: "Experience, skills, education mapped." },
      { title: "Analyze", detail: "Criteria applied transparently." },
      { title: "Recommend", detail: "Actionable suggestions returned." },
    ],
  },
};

export function getSystemHighlight(id: string): SystemHighlight | undefined {
  return systemHighlights[id];
}
