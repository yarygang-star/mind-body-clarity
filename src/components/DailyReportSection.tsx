import { Sun, Moon, Dumbbell, Droplets, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

const DailyReportSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium mb-4">Daily AI Report</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Wake up to clarity, not confusion
          </h2>
          <p className="text-lg text-muted-foreground">
            Every morning, receive a personalized health briefing that tells you exactly 
            how you're doing and what to do next.
          </p>
        </div>

        {/* Report Demo */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-3xl p-6 md:p-8 shadow-elevated">
            {/* Report Header */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border/50">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Sun className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Good morning, Alex</p>
                <p className="text-sm text-muted-foreground">Tuesday, January 14 • 7:32 AM</p>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-2 rounded-full bg-recovery/10 border border-recovery/20">
                <span className="text-recovery font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-recovery" />
                  Recovery Day
                </span>
              </div>
              <span className="text-sm text-muted-foreground">Readiness: 67%</span>
            </div>

            {/* Main Insight */}
            <div className="bg-secondary/50 rounded-2xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                Your body is still recovering from yesterday's intense 45-minute run. 
                <span className="text-accent font-medium"> HRV dropped 8% overnight</span>, and sleep was 
                only 6.5 hours — below your 7.5-hour average. This signals your nervous system needs 
                time to recover.
              </p>
            </div>

            {/* Why Section */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center text-accent text-xs">?</span>
                Why is this happening?
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed pl-7">
                Yesterday's run was high-intensity (heart rate peaked at 172 bpm). Combined with 
                shorter sleep, your body didn't have enough time to fully recover. Training today 
                could lead to accumulated fatigue.
              </p>
            </div>

            {/* Today's Plan */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-recovery" />
                What to do today
              </h4>
              <div className="space-y-3 pl-7">
                <ActionItem 
                  icon={<Dumbbell className="w-4 h-4" />}
                  text="Light movement only: 30-min walk, yoga, or swimming"
                />
                <ActionItem 
                  icon={<Moon className="w-4 h-4" />}
                  text="Prioritize sleep tonight — aim for 8 hours"
                />
                <ActionItem 
                  icon={<Droplets className="w-4 h-4" />}
                  text="Stay hydrated — stress markers suggest mild dehydration"
                />
              </div>
            </div>

            {/* Tomorrow Forecast */}
            <div className="bg-accent/5 rounded-2xl p-5 border border-accent/10">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                Tomorrow's Forecast
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With 8 hours of sleep tonight, you should be <span className="text-foreground font-medium">ready for strength training</span> tomorrow. 
                HRV is expected to return to baseline.
              </p>
            </div>

            {/* Pro Tip */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-accent">💡</span>
                <span>
                  <span className="font-medium text-foreground">Pattern detected:</span> Your best training days are 
                  historically Monday and Thursday, after 2+ rest days. Your body responds better to 
                  spaced high-intensity sessions.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ActionItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 text-sm text-muted-foreground">
    <div className="w-6 h-6 rounded-lg bg-recovery/10 flex items-center justify-center text-recovery flex-shrink-0">
      {icon}
    </div>
    <span>{text}</span>
  </div>
);

export default DailyReportSection;
