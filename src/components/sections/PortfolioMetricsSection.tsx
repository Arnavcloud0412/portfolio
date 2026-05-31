import { MetricsStrip } from "@/components/ui/MetricsStrip";
import { portfolioMetrics } from "@/data/portfolio-metrics";

export function PortfolioMetricsSection() {
  return (
    <section aria-label="Portfolio metrics" className="my-16 md:my-24 lg:my-28">
      <MetricsStrip metrics={portfolioMetrics} />
    </section>
  );
}
