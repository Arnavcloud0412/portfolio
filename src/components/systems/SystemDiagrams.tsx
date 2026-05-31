import type { ReactNode } from "react";
import type { DiagramType } from "@/data/systems";

function DiagramFrame({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="relative text-ink">
      <div className="absolute -top-2 -left-2 h-4 w-4 border-t border-l border-ink" />
      <div className="absolute -top-2 -right-2 h-4 w-4 border-t border-r border-ink" />
      <div className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-ink" />
      <div className="absolute -right-2 -bottom-2 h-4 w-4 border-r border-b border-ink" />
      <div className="border border-line bg-offwhite p-4 md:p-6">{children}</div>
      <figcaption className="label-caps mt-3 text-center">{caption}</figcaption>
    </figure>
  );
}

function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} stroke="currentColor" strokeWidth="0.8" fill="none" />
      <text
        x={x + w / 2}
        y={y + (sub ? h / 2 - 2 : h / 2 + 2)}
        textAnchor="middle"
        fill="currentColor"
        fontSize="7"
        fontFamily="monospace"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 8}
          textAnchor="middle"
          fill="currentColor"
          fontSize="5"
          fontFamily="monospace"
          opacity="0.5"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="currentColor"
      strokeWidth="0.6"
      markerEnd="url(#arrowhead)"
      opacity="0.6"
    />
  );
}

const diagrams: Record<
  DiagramType,
  { architecture: React.ReactNode; workflow: React.ReactNode }
> = {
  operations: {
    architecture: (
      <svg viewBox="0 0 360 200" className="h-auto w-full" aria-hidden>
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="currentColor" />
          </marker>
        </defs>
        <Box x={20} y={70} w={70} h={36} label="CLIENT" sub="Next.js" />
        <Box x={145} y={70} w={70} h={36} label="API" sub="Node.js" />
        <Box x={270} y={40} w={70} h={36} label="AUTH" sub="Google SSO" />
        <Box x={270} y={100} w={70} h={36} label="DB" sub="PostgreSQL" />
        <Arrow x1={90} y1={88} x2={145} y2={88} />
        <Arrow x1={215} y1={80} x2={270} y2={58} />
        <Arrow x1={215} y1={96} x2={270} y2={118} />
        <line x1={180} y1={20} x2={180} y2={50} stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <text x={180} y={16} textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="monospace" opacity="0.5">
          INSTITUTIONAL LAYER
        </text>
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 360 120" className="h-auto w-full" aria-hidden>
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="currentColor" />
          </marker>
        </defs>
        <Box x={10} y={40} w={58} h={32} label="REGISTER" />
        <Box x={88} y={40} w={58} h={32} label="RECEIPT" />
        <Box x={166} y={40} w={58} h={32} label="ATTEND" />
        <Box x={244} y={40} w={58} h={32} label="ANALYTICS" />
        <Arrow x1={68} y1={56} x2={88} y2={56} />
        <Arrow x1={146} y1={56} x2={166} y2={56} />
        <Arrow x1={224} y1={56} x2={244} y2={56} />
        <text x={180} y={20} textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="monospace" opacity="0.5">
          EVENT OPERATIONS PIPELINE
        </text>
      </svg>
    ),
  },
  academic: {
    architecture: (
      <svg viewBox="0 0 360 200" className="h-auto w-full" aria-hidden>
        <Box x={130} y={20} w={100} h={32} label="ADMIN CONSOLE" />
        <Box x={40} y={90} w={80} h={32} label="STUDENT" />
        <Box x={140} y={90} w={80} h={32} label="FACULTY" />
        <Box x={240} y={90} w={80} h={32} label="REPORTS DB" />
        <line x1={180} y1={52} x2={80} y2={90} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1={180} y1={52} x2={180} y2={90} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1={180} y1={52} x2={280} y2={90} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <Box x={100} y={150} w={160} h={32} label="INTERNSHIP LIFECYCLE ENGINE" />
        <line x1={80} y1={122} x2={140} y2={150} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <line x1={180} y1={122} x2={180} y2={150} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 360 100" className="h-auto w-full" aria-hidden>
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="currentColor" />
          </marker>
        </defs>
        <Box x={15} y={35} w={65} h={30} label="OBJECTIVES" />
        <Box x={100} y={35} w={65} h={30} label="WEEKLY LOG" />
        <Box x={185} y={35} w={65} h={30} label="REVIEW" />
        <Box x={270} y={35} w={65} h={30} label="EVALUATE" />
        <Arrow x1={80} y1={50} x2={100} y2={50} />
        <Arrow x1={165} y1={50} x2={185} y2={50} />
        <Arrow x1={250} y1={50} x2={270} y2={50} />
      </svg>
    ),
  },
  governance: {
    architecture: (
      <svg viewBox="0 0 360 200" className="h-auto w-full" aria-hidden>
        <rect x={30} y={30} width={120} height={140} stroke="currentColor" strokeWidth="0.8" fill="none" />
        <rect x={40} y={45} width={100} height={18} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <rect x={40} y={70} width={100} height={18} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <rect x={40} y={95} width={100} height={18} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <text x={90} y={57} textAnchor="middle" fill="currentColor" fontSize="5" fontFamily="monospace" opacity="0.6">
          RECORDS
        </text>
        <Box x={200} y={50} w={120} h={36} label="ATTENDANCE" sub="Module" />
        <Box x={200} y={110} w={120} h={36} label="REPORTS" sub="Module" />
        <line x1={150} y1={68} x2={200} y2={68} stroke="currentColor" strokeWidth="0.5" />
        <line x1={150} y1={128} x2={200} y2={128} stroke="currentColor" strokeWidth="0.5" />
        <text x={90} y={185} textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="monospace" opacity="0.5">
          DIGITAL ARCHIVE VAULT
        </text>
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 360 100" className="h-auto w-full" aria-hidden>
        <Box x={30} y={35} w={70} h={30} label="MEETING" />
        <Box x={130} y={35} w={70} h={30} label="ATTEND" />
        <Box x={230} y={35} w={70} h={30} label="ARCHIVE" />
        <line x1={100} y1={50} x2={130} y2={50} stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" />
        <line x1={200} y1={50} x2={230} y2={50} stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" />
      </svg>
    ),
  },
  travel: {
    architecture: (
      <svg viewBox="0 0 360 180" className="h-auto w-full" aria-hidden>
        <Box x={20} y={60} w={90} h={40} label="PUBLIC SITE" sub="Next.js" />
        <Box x={135} y={60} w={90} h={40} label="CMS" sub="Content API" />
        <Box x={250} y={40} w={90} h={36} label="PACKAGES" />
        <Box x={250} y={90} w={90} h={36} label="DESTINATIONS" />
        <line x1={110} y1={80} x2={135} y2={80} stroke="currentColor" strokeWidth="0.6" />
        <line x1={225} y1={70} x2={250} y2={58} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1={225} y1={90} x2={250} y2={108} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <text x={180} y={25} textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="monospace" opacity="0.5">
          CONTENT → RENDER → SEO
        </text>
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 360 100" className="h-auto w-full" aria-hidden>
        <Box x={20} y={35} w={65} h={30} label="BROWSE" />
        <Box x={105} y={35} w={65} h={30} label="PACKAGE" />
        <Box x={190} y={35} w={65} h={30} label="INQUIRE" />
        <Box x={275} y={35} w={65} h={30} label="BOOK" />
        <line x1={85} y1={50} x2={105} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={170} y1={50} x2={190} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={255} y1={50} x2={275} y2={50} stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  spatial: {
    architecture: (
      <svg viewBox="0 0 360 200" className="h-auto w-full" aria-hidden>
        <Box x={20} y={80} w={70} h={36} label="OCR" sub="Pipeline" />
        <Box x={110} y={80} w={70} h={36} label="NER" sub="Extract" />
        <Box x={200} y={50} w={70} h={36} label="PostGIS" />
        <Box x={200} y={110} w={70} h={36} label="GeoServer" />
        <Box x={290} y={80} w={50} h={36} label="WebGIS" />
        <line x1={90} y1={98} x2={110} y2={98} stroke="currentColor" strokeWidth="0.5" />
        <line x1={180} y1={90} x2={200} y2={68} stroke="currentColor" strokeWidth="0.5" />
        <line x1={180} y1={106} x2={200} y2={128} stroke="currentColor" strokeWidth="0.5" />
        <line x1={270} y1={68} x2={290} y2={90} stroke="currentColor" strokeWidth="0.5" />
        <line x1={270} y1={128} x2={290} y2={106} stroke="currentColor" strokeWidth="0.5" />
        <ellipse cx={180} cy={170} rx={80} ry={12} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <text x={180} y={174} textAnchor="middle" fill="currentColor" fontSize="5" fontFamily="monospace" opacity="0.5">
          SATELLITE LAYER
        </text>
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 360 100" className="h-auto w-full" aria-hidden>
        <Box x={15} y={35} w={60} h={30} label="SCAN" />
        <Box x={95} y={35} w={60} h={30} label="PARSE" />
        <Box x={175} y={35} w={60} h={30} label="MAP" />
        <Box x={255} y={35} w={60} h={30} label="REVIEW" />
        <line x1={75} y1={50} x2={95} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={155} y1={50} x2={175} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={235} y1={50} x2={255} y2={50} stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  community: {
    architecture: (
      <svg viewBox="0 0 360 180" className="h-auto w-full" aria-hidden>
        <circle cx={180} cy={90} r={28} stroke="currentColor" strokeWidth="0.8" fill="none" />
        <text x={180} y={94} textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="monospace">
          OPSHUB
        </text>
        <Box x={30} y={70} w={60} h={28} label="MEMBERS" />
        <Box x={270} y={30} w={60} h={28} label="EVENTS" />
        <Box x={270} y={120} w={60} h={28} label="DOCS" />
        <Box x={30} y={120} w={60} h={28} label="CONTRIB" />
        <line x1={90} y1={84} x2={152} y2={88} stroke="currentColor" strokeWidth="0.5" />
        <line x1={270} y1={44} x2={208} y2={78} stroke="currentColor" strokeWidth="0.5" />
        <line x1={270} y1={134} x2={208} y2={102} stroke="currentColor" strokeWidth="0.5" />
        <line x1={90} y1={134} x2={152} y2={98} stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 360 100" className="h-auto w-full" aria-hidden>
        <Box x={40} y={35} w={70} h={30} label="ONBOARD" />
        <Box x={145} y={35} w={70} h={30} label="CONTRIBUTE" />
        <Box x={250} y={35} w={70} h={30} label="DOCUMENT" />
        <line x1={110} y1={50} x2={145} y2={50} stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" />
        <line x1={215} y1={50} x2={250} y2={50} stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" />
      </svg>
    ),
  },
  healthcare: {
    architecture: (
      <svg viewBox="0 0 360 180" className="h-auto w-full" aria-hidden>
        <Box x={30} y={70} w={70} h={36} label="VOICE" sub="Input" />
        <Box x={130} y={70} w={70} h={36} label="NLP" sub="Parse" />
        <Box x={230} y={50} w={70} h={36} label="ML" sub="Predict" />
        <Box x={230} y={110} w={70} h={36} label="REPORT" sub="Gen" />
        <line x1={100} y1={88} x2={130} y2={88} stroke="currentColor" strokeWidth="0.5" />
        <line x1={200} y1={80} x2={230} y2={68} stroke="currentColor" strokeWidth="0.5" />
        <line x1={200} y1={96} x2={230} y2={128} stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 360 100" className="h-auto w-full" aria-hidden>
        <Box x={25} y={35} w={65} h={30} label="SYMPTOMS" />
        <Box x={110} y={35} w={65} h={30} label="ANALYZE" />
        <Box x={195} y={35} w={65} h={30} label="PREDICT" />
        <Box x={280} y={35} w={55} h={30} label="OUTPUT" />
        <line x1={90} y1={50} x2={110} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={175} y1={50} x2={195} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={260} y1={50} x2={280} y2={50} stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  editorial: {
    architecture: (
      <svg viewBox="0 0 360 180" className="h-auto w-full" aria-hidden>
        <rect x={40} y={30} width={140} height={120} stroke="currentColor" strokeWidth="0.8" fill="none" />
        <rect x={50} y={40} width={120} height={40} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <rect x={50} y={90} width={55} height={50} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <rect x={115} y={90} width={55} height={50} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <text x={110} y={62} textAnchor="middle" fill="currentColor" fontSize="5" fontFamily="monospace" opacity="0.5">
          FEATURE
        </text>
        <Box x={220} y={50} w={100} h={32} label="CMS" sub="Content" />
        <Box x={220} y={110} w={100} h={32} label="MDX" sub="Renderer" />
        <line x1={180} y1={66} x2={220} y2={66} stroke="currentColor" strokeWidth="0.5" />
        <line x1={180} y1={126} x2={220} y2={126} stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 360 100" className="h-auto w-full" aria-hidden>
        <Box x={30} y={35} w={65} h={30} label="DRAFT" />
        <Box x={115} y={35} w={65} h={30} label="EDIT" />
        <Box x={200} y={35} w={65} h={30} label="PUBLISH" />
        <Box x={285} y={35} w={55} h={30} label="ARCHIVE" />
        <line x1={95} y1={50} x2={115} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={180} y1={50} x2={200} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={265} y1={50} x2={285} y2={50} stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  logistics: {
    architecture: (
      <svg viewBox="0 0 360 180" className="h-auto w-full" aria-hidden>
        <Box x={30} y={70} w={75} h={36} label="DISPATCH" />
        <Box x={130} y={70} w={75} h={36} label="TRACKING" />
        <Box x={230} y={70} w={75} h={36} label="DELIVERY" />
        <rect x={50} y={130} width={260} height={24} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <text x={180} y={146} textAnchor="middle" fill="currentColor" fontSize="5" fontFamily="monospace" opacity="0.5">
          STATUS QUEUE · REDIS
        </text>
        <line x1={105} y1={106} x2={130} y2={106} stroke="currentColor" strokeWidth="0.5" />
        <line x1={205} y1={106} x2={230} y2={106} stroke="currentColor" strokeWidth="0.5" />
        <line x1={167} y1={106} x2={167} y2={130} stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 360 100" className="h-auto w-full" aria-hidden>
        <Box x={20} y={35} w={60} h={30} label="CREATE" />
        <Box x={100} y={35} w={60} h={30} label="SHIP" />
        <Box x={180} y={35} w={60} h={30} label="TRANSIT" />
        <Box x={260} y={35} w={60} h={30} label="CONFIRM" />
        <line x1={80} y1={50} x2={100} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={160} y1={50} x2={180} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={240} y1={50} x2={260} y2={50} stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  vision: {
    architecture: (
      <svg viewBox="0 0 360 180" className="h-auto w-full" aria-hidden>
        <Box x={25} y={70} w={65} h={36} label="P&ID" sub="Input" />
        <Box x={110} y={70} w={65} h={36} label="OpenCV" sub="Preproc" />
        <Box x={195} y={70} w={65} h={36} label="TF" sub="Detect" />
        <Box x={280} y={70} w={55} h={36} label="UI" sub="Streamlit" />
        <line x1={90} y1={88} x2={110} y2={88} stroke="currentColor" strokeWidth="0.5" />
        <line x1={175} y1={88} x2={195} y2={88} stroke="currentColor" strokeWidth="0.5" />
        <line x1={260} y1={88} x2={280} y2={88} stroke="currentColor" strokeWidth="0.5" />
        <circle cx={180} cy={140} r={20} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <text x={180} y={144} textAnchor="middle" fill="currentColor" fontSize="5" fontFamily="monospace" opacity="0.5">
          SYMBOL MAP
        </text>
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 360 100" className="h-auto w-full" aria-hidden>
        <Box x={20} y={35} w={60} h={30} label="UPLOAD" />
        <Box x={100} y={35} w={60} h={30} label="DETECT" />
        <Box x={180} y={35} w={60} h={30} label="LINK" />
        <Box x={260} y={35} w={60} h={30} label="EXPORT" />
        <line x1={80} y1={50} x2={100} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={160} y1={50} x2={180} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={240} y1={50} x2={260} y2={50} stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  document: {
    architecture: (
      <svg viewBox="0 0 360 180" className="h-auto w-full" aria-hidden>
        <rect x={40} y={50} width={50} height={70} stroke="currentColor" strokeWidth="0.8" fill="none" />
        <line x1={50} y1={65} x2={80} y2={65} stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
        <line x1={50} y1={75} x2={80} y2={75} stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
        <line x1={50} y1={85} x2={75} y2={85} stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
        <text x={65} y={135} textAnchor="middle" fill="currentColor" fontSize="5" fontFamily="monospace" opacity="0.5">
          PDF
        </text>
        <Box x={120} y={65} w={65} h={36} label="PARSE" />
        <Box x={210} y={65} w={65} h={36} label="EXTRACT" />
        <Box x={290} y={65} w={50} h={36} label="SCORE" />
        <line x1={90} y1={83} x2={120} y2={83} stroke="currentColor" strokeWidth="0.5" />
        <line x1={185} y1={83} x2={210} y2={83} stroke="currentColor" strokeWidth="0.5" />
        <line x1={275} y1={83} x2={290} y2={83} stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 360 100" className="h-auto w-full" aria-hidden>
        <Box x={30} y={35} w={65} h={30} label="UPLOAD" />
        <Box x={115} y={35} w={65} h={30} label="PARSE" />
        <Box x={200} y={35} w={65} h={30} label="ANALYZE" />
        <Box x={285} y={35} w={55} h={30} label="FEEDBACK" />
        <line x1={95} y1={50} x2={115} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={180} y1={50} x2={200} y2={50} stroke="currentColor" strokeWidth="0.5" />
        <line x1={265} y1={50} x2={285} y2={50} stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
};

export function SystemDiagrams({
  type,
  systemId,
}: {
  type: DiagramType;
  systemId: string;
}) {
  const { architecture, workflow } = diagrams[type];

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-8">
      <DiagramFrame caption={`Fig. ${systemId}-A — System architecture / Rev. 01`}>
        {architecture}
      </DiagramFrame>
      <DiagramFrame caption={`Fig. ${systemId}-B — Operational workflow / Rev. 01`}>
        {workflow}
      </DiagramFrame>
    </div>
  );
}
