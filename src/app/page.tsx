import { TopBar } from "@/components/TopBar";
import { HeroOverview } from "@/components/HeroOverview";
import { StorySection } from "@/components/StorySection";
import { ProductsSection } from "@/components/ProductsSection";
import { SystemsSummarySection } from "@/components/SystemsSummarySection";
import { ProcessSection } from "@/components/ProcessSection";
import { AfterSalesSection } from "@/components/AfterSalesSection";
import { ConnectorSection } from "@/components/ConnectorSection";
import { ShopSection } from "@/components/ShopSection";
import { ExpoSection } from "@/components/ExpoSection";
import { VideosSection } from "@/components/VideosSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { getReviews } from "@/lib/reviews";
import { TickerBar } from "@/components/TickerBar";
import { CertificationsSection } from "@/components/CertificationsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { QuoteSection } from "@/components/QuoteSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FaqSection } from "@/components/FaqSection";
import { DashboardFooter } from "@/components/DashboardFooter";

export default async function Home() {
  const reviews = await getReviews();
  return (
    <>
      <div className="grid-field" />
      <TopBar />
      <TickerBar
        items={[
          `★ ${reviews.rating} on Google · ${reviews.count} reviews`,
          "ISO 9001:2015 Certified",
          "Serving since 1983",
          "Registered seller on GeM",
          "Also on Amazon & IndustryBuying",
          "Pan-India dispatch",
          "RF connectors · AV cables · Multimedia hardware",
          "7-day replacement",
          "Call +91 85868 78111",
        ]}
      />
      <HeroOverview rating={`★ ${reviews.rating} on Google · ${reviews.count} reviews`} />
      <main className="mx-auto max-w-[1180px] px-6">
        <StorySection />
        <ProductsSection />
      </main>
      <ConnectorSection />
      <main className="mx-auto max-w-[1180px] px-6">
        <ShopSection />
        <WhyChooseSection />
        <CertificationsSection />
        <ReviewsSection data={reviews} />
        <ExpoSection />
        <VideosSection />
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
