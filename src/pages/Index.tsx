import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DevicesSection from "@/components/DevicesSection";
import DailyReportSection from "@/components/DailyReportSection";
import HealthAlertsSection from "@/components/HealthAlertsSection";
import ComparisonSection from "@/components/ComparisonSection";
import CoachDashboardSection from "@/components/CoachDashboardSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
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
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
