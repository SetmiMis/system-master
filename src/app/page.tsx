import { TopBar } from "@/components/TopBar";
import { HeroOverview } from "@/components/HeroOverview";
import { StorySection } from "@/components/StorySection";
import { ProductsSection } from "@/components/ProductsSection";
import { SystemsSummarySection } from "@/components/SystemsSummarySection";
import { ProcessSection } from "@/components/ProcessSection";
import { AfterSalesSection } from "@/components/AfterSalesSection";
import { FaqSection } from "@/components/FaqSection";
import { DashboardFooter } from "@/components/DashboardFooter";

export default function Home() {
  return (
    <>
      <div className="grid-field" />
      <TopBar />
      <main className="mx-auto max-w-[1180px] px-6">
        <HeroOverview />
        <StorySection />
        <ProductsSection />
        <SystemsSummarySection />
        <ProcessSection />
        <AfterSalesSection />
        <FaqSection />
        <DashboardFooter />
      </main>
    </>
  );
}
