import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import MetricsVisualization from "./MetricsVisualization";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                AI-Powered Health Intelligence
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Your smartwatch shows{" "}
              <span className="text-gradient-health">numbers</span>.
              <br />
              We explain what they{" "}
              <span className="text-gradient-health">mean</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              AI HEALTH FIT transforms raw smartwatch data into personalized, actionable insights. 
              Know <em>why</em> your metrics change and <em>what</em> to do about it — every single day.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" className="group">
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline">
                See How It Works
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">2,400+ early adopters</p>
                <p className="text-xs text-muted-foreground">Join the waitlist</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visualization */}
          <div className="relative lg:pl-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <MetricsVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
