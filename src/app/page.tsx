import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { StoryPipeline } from "@/components/StoryPipeline";
import { SystemsGrid } from "@/components/SystemsGrid";
import { SecuritySection } from "@/components/SecuritySection";
import { CTASection, Footer } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <div className="grid-field" />
      <TopBar />
      <main className="mx-auto max-w-[1180px] px-6">
        <Hero />
        <Overview />
        <StoryPipeline />
        <SystemsGrid />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
