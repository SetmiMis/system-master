import { TopBar } from "@/components/TopBar";
import { HeroOverview } from "@/components/HeroOverview";
import { StorySection } from "@/components/StorySection";
import { ProductsSection } from "@/components/ProductsSection";
import { SystemsSummarySection } from "@/components/SystemsSummarySection";
import { ProcessSection } from "@/components/ProcessSection";
import { AfterSalesSection } from "@/components/AfterSalesSection";
import { ShopSection } from "@/components/ShopSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { QuoteSection } from "@/components/QuoteSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
        <ShopSection />
        <WhyChooseSection />
        <SystemsSummarySection />
        <ProcessSection />
        <AfterSalesSection />
        <FaqSection />
        <QuoteSection />
        <DashboardFooter />
      </main>
      <WhatsAppButton />
    </>
  );
}
