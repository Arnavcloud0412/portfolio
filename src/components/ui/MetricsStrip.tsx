import type { MetricItem } from "@/data/portfolio-metrics";

type MetricsStripProps = {
  metrics: MetricItem[];
  className?: string;
  invert?: boolean;
};

export function MetricsStrip({ metrics, className = "", invert = false }: MetricsStripProps) {
  return (
    <div
      className={`border-y border-line ${
        invert ? "bg-ink text-seashell" : "bg-offwhite/60 text-ink"
      } ${className}`}
    >
      <div
        className={`page-padding grid gap-8 py-8 sm:grid-cols-2 md:py-10 ${
          metrics.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`${
              index > 0 ? "border-t border-line pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8" : ""
            } ${invert ? "border-seashell/15" : "border-line"}`}
          >
            <p className="serif-display text-[clamp(1.75rem,4vw,2.75rem)] leading-none">
              {metric.value}
            </p>
            <p
              className={`label-caps mt-2.5 ${
                invert ? "text-seashell/55" : "text-ink-faint"
              }`}
            >
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
