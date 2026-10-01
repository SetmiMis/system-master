import { getMetricsAsOf } from "@/lib/data";
import { TopBar } from "@/components/TopBar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { KpiRow } from "@/components/KpiRow";
import { PipelineBoard } from "@/components/PipelineBoard";
import { ChartsRow } from "@/components/ChartsRow";
import { IndiaMapSection } from "@/components/IndiaMapSection";
import { SystemsGrid } from "@/components/SystemsGrid";
import { OpsRow } from "@/components/OpsRow";
import { DashboardFooter } from "@/components/DashboardFooter";

export default async function DashboardPage() {
  const asOf = await getMetricsAsOf();
  return (
    <div className="theme-dark isolate min-h-screen">
      <div className="grid-field" />
      <TopBar
        links={[
          ["Pipeline", "#pipeline"],
          ["Systems", "#systems"],
          ["Desk View", "#security"],
        ]}
      />
      <main className="mx-auto max-w-[1180px] px-6">
        <DashboardHeader live={asOf !== null} asOf={asOf} />
        <KpiRow />
        <PipelineBoard />
        <ChartsRow />
        <IndiaMapSection />
        <SystemsGrid />
        <OpsRow />
        <DashboardFooter />
      </main>
    </div>
  );
}
