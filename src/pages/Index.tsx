import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DailyReportSection from "@/components/DailyReportSection";
import ComparisonSection from "@/components/ComparisonSection";
import CoachDashboardSection from "@/components/CoachDashboardSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DailyReportSection />
        <ComparisonSection />
        <CoachDashboardSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
