import { TopBar } from "@/components/TopBar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { KpiRow } from "@/components/KpiRow";
import { PipelineBoard } from "@/components/PipelineBoard";
import { ChartsRow } from "@/components/ChartsRow";
import { SystemsGrid } from "@/components/SystemsGrid";
import { OpsRow } from "@/components/OpsRow";
import { DashboardFooter } from "@/components/DashboardFooter";

export default function DashboardPage() {
  return (
    <>
      <div className="grid-field" />
      <TopBar
        links={[
          ["Pipeline", "#pipeline"],
          ["Systems", "#systems"],
          ["Desk View", "#security"],
        ]}
      />
      <main className="mx-auto max-w-[1180px] px-6">
        <DashboardHeader />
        <KpiRow />
        <PipelineBoard />
        <ChartsRow />
        <SystemsGrid />
        <OpsRow />
        <DashboardFooter />
      </main>
    </>
  );
}
