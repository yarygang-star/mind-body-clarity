import { Heart, Moon, Activity, Zap, TrendingUp, TrendingDown } from "lucide-react";

const MetricsVisualization = () => {
  return (
    <div className="relative">
      {/* Main Card */}
      <div className="glass-card rounded-3xl p-6 md:p-8 shadow-elevated animate-float">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Good morning, Alex</p>
            <h3 className="text-xl font-semibold text-foreground">Today's Health Summary</h3>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-recovery/10 text-recovery text-sm font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-recovery animate-pulse-subtle" />
            Recovery Day
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <MetricCard
            icon={<Heart className="w-5 h-5" />}
            label="HRV"
            value="48"
            unit="ms"
            trend={-8}
            color="text-recovery"
            bgColor="bg-recovery/10"
          />
          <MetricCard
            icon={<Moon className="w-5 h-5" />}
            label="Sleep"
            value="6.5"
            unit="hrs"
            trend={-15}
            color="text-caution"
            bgColor="bg-caution/10"
          />
          <MetricCard
            icon={<Activity className="w-5 h-5" />}
            label="Resting HR"
            value="62"
            unit="bpm"
            trend={4}
            color="text-muted-foreground"
            bgColor="bg-muted"
          />
          <MetricCard
            icon={<Zap className="w-5 h-5" />}
            label="Readiness"
            value="67"
            unit="%"
            trend={-12}
            color="text-caution"
            bgColor="bg-caution/10"
          />
        </div>

        {/* AI Insight */}
        <div className="bg-secondary/50 rounded-2xl p-4 border border-border/50">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-accent text-lg">🧠</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-1">AI Insight</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your HRV dropped 8% overnight after yesterday's intense run. Combined with shorter sleep, 
                your body needs recovery. <span className="text-foreground font-medium">Stick to light movement today.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Mini Cards */}
      <div className="absolute -top-4 -right-4 glass-card rounded-xl p-3 shadow-soft animate-float" style={{ animationDelay: '1s' }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-recovery/10 flex items-center justify-center">
            <Moon className="w-4 h-4 text-recovery" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Tomorrow</p>
            <p className="text-sm font-medium text-foreground">Ready to train</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-3 shadow-soft animate-float" style={{ animationDelay: '2s' }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Weekly trend</p>
            <p className="text-sm font-medium text-foreground">Improving +12%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
  trend: number;
  color: string;
  bgColor: string;
}

const MetricCard = ({ icon, label, value, unit, trend, color, bgColor }: MetricCardProps) => (
  <div className="bg-card/50 rounded-xl p-4 border border-border/30">
    <div className="flex items-center justify-between mb-2">
      <div className={`w-8 h-8 rounded-lg ${bgColor} flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <div className={`flex items-center gap-0.5 text-xs ${trend < 0 ? 'text-caution' : 'text-recovery'}`}>
        {trend < 0 ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
        {Math.abs(trend)}%
      </div>
    </div>
    <p className="text-2xl font-semibold text-foreground">
      {value}
      <span className="text-sm font-normal text-muted-foreground ml-1">{unit}</span>
    </p>
    <p className="text-xs text-muted-foreground mt-1">{label}</p>
  </div>
);

export default MetricsVisualization;
