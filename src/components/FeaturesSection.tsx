import { Brain, LineChart, Lightbulb, Calendar, Users, Shield } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Explainable AI",
    description: "Every insight comes with a clear explanation of why it matters and what caused it. No black boxes.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Cross-Metric Correlation",
    description: "We analyze how sleep, HRV, stress, and training load interact to give you the full picture.",
    color: "text-recovery",
    bgColor: "bg-recovery/10",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Actionable Recommendations",
    description: "'Light recovery day' — not just 'rest more'. Specific, practical advice you can act on today.",
    color: "text-intensity",
    bgColor: "bg-intensity/10",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Daily AI Reports",
    description: "Wake up to a personalized health briefing that adapts to your patterns and goals.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Coach Dashboard",
    description: "Trainers can monitor multiple clients, spot trends, and optimize training schedules.",
    color: "text-recovery",
    bgColor: "bg-recovery/10",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Personal Baseline",
    description: "The AI learns your unique physiology over time, making recommendations increasingly accurate.",
    color: "text-intensity",
    bgColor: "bg-intensity/10",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Intelligence that explains itself
            </h2>
            <p className="text-lg text-muted-foreground">
              Unlike generic health apps, every recommendation includes the "why" — 
              empowering you to understand your body and make informed decisions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedItem key={index} delay={index * 0.08}>
              <div className="group glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
