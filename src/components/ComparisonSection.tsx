import { Check, X, ArrowRight } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium mb-4">The Difference</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Numbers vs. Understanding
          </h2>
          <p className="text-lg text-muted-foreground">
            Your smartwatch shows you data. We show you what to do with it.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Apple Health Card */}
          <div className="rounded-3xl p-6 md:p-8 bg-muted/50 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <span className="text-xl">⌚</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Smart Watch App</h3>
                <p className="text-sm text-muted-foreground">What you see today</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-xl p-4 border border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Heart Rate Variability</p>
                <p className="text-3xl font-semibold text-foreground">48 <span className="text-lg font-normal text-muted-foreground">ms</span></p>
              </div>

              <div className="bg-card rounded-xl p-4 border border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Sleep</p>
                <p className="text-3xl font-semibold text-foreground">6h 32m</p>
              </div>

              <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">No context</p>
                    <p className="text-xs text-muted-foreground">You see the number, but not why it changed or what to do</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Health Brain Card */}
          <div className="rounded-3xl p-6 md:p-8 bg-accent/5 border-2 border-accent/20 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="text-xl">🧠</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI HEALTH FIT</h3>
                  <p className="text-sm text-accent">What you'll understand</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-card rounded-xl p-4 border border-accent/10 shadow-soft">
                  <p className="text-sm text-accent font-medium mb-2">HRV Analysis</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    HRV dropped 8% because your 45-min run was high-intensity and you slept 
                    90 min less than usual. <span className="text-foreground font-medium">Today should be recovery-focused.</span>
                  </p>
                </div>

                <div className="bg-card rounded-xl p-4 border border-accent/10 shadow-soft">
                  <p className="text-sm text-accent font-medium mb-2">Sleep Impact</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    6.5 hrs is below your 7.5-hr baseline. Combined with yesterday's exertion, 
                    your nervous system is still recovering.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-recovery/10 border border-recovery/20">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-recovery flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Clear action</p>
                      <p className="text-xs text-muted-foreground">Light recovery day. Sleep 8 hours. Ready for strength training tomorrow.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            We're the coach <span className="text-accent font-medium">inside</span> your watch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
