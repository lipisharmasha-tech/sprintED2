import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProgramsSection } from "./components/ProgramsSection";
import { PlacementSection } from "./components/PlacementSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { BatchScaleSection } from "./components/BatchScaleSection";
import { InstructorsSection } from "./components/InstructorsSection";
import { CompaniesSection } from "./components/CompaniesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { CTABand } from "./components/CTABand";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <main>
        <HeroSection />
        <ProgramsSection />
        <PlacementSection />
        <ComparisonSection />
        <BatchScaleSection />
        <InstructorsSection />
        <CompaniesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
