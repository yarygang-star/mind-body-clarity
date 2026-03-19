import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DevicesSection from "@/components/DevicesSection";
import DailyReportSection from "@/components/DailyReportSection";
import HealthAlertsSection from "@/components/HealthAlertsSection";
import ComparisonSection from "@/components/ComparisonSection";
import CoachDashboardSection from "@/components/CoachDashboardSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DevicesSection />
        <DailyReportSection />
        <HealthAlertsSection />
        <ComparisonSection />
        <CoachDashboardSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
