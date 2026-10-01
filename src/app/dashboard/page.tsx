import { getMetricsAsOf } from "@/lib/data";
import { TopBar } from "@/components/TopBar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { KpiRow } from "@/components/KpiRow";
import { PipelineBoard } from "@/components/PipelineBoard";
import { OrderVolumeChart } from "@/components/OrderVolumeChart";
import { CategoryBars } from "@/components/CategoryBars";
import { IndiaMapSection } from "@/components/IndiaMapSection";
import { FocusPanel } from "@/components/FocusPanel";
import { DashboardFooter } from "@/components/DashboardFooter";

export default async function DashboardPage() {
  const asOf = await getMetricsAsOf();
  return (
    <div className="theme-dark isolate min-h-screen">
      <div className="grid-field" />
      <TopBar
        links={[
          ["Home", "/"],
          ["Trends", "#trends"],
          ["Map", "#map"],
        ]}
      />
      <main className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6">
        <DashboardHeader live={asOf !== null} asOf={asOf} />
        <KpiRow />
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div id="trends" className="lg:col-span-8">
            <OrderVolumeChart />
          </div>
          <div className="lg:col-span-4">
            <PipelineBoard />
          </div>
          <div id="map" className="lg:col-span-8">
            <IndiaMapSection />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4">
            <FocusPanel />
            <CategoryBars />
          </div>
        </div>
        <DashboardFooter />
      </main>
    </div>
  );
}
