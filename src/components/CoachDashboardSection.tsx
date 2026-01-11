import { Users, TrendingUp, AlertCircle, Zap, Moon, Heart } from "lucide-react";

const clients = [
  {
    name: "Sarah M.",
    status: "Ready for Intensity",
    statusColor: "text-intensity",
    statusBg: "bg-intensity/10",
    icon: <Zap className="w-4 h-4" />,
    metrics: { hrv: 52, hrvTrend: 12, sleep: 7.8, restingHR: 58, stress: "Low" },
    recommendation: "HIIT or strength training recommended",
  },
  {
    name: "Michael K.",
    status: "Recovery Needed",
    statusColor: "text-recovery",
    statusBg: "bg-recovery/10",
    icon: <Moon className="w-4 h-4" />,
    metrics: { hrv: 41, hrvTrend: -15, sleep: 5.2, restingHR: 72, stress: "High" },
    recommendation: "Light movement only, prioritize sleep",
  },
  {
    name: "Emma L.",
    status: "Moderate Ready",
    statusColor: "text-accent",
    statusBg: "bg-accent/10",
    icon: <Heart className="w-4 h-4" />,
    metrics: { hrv: 48, hrvTrend: 3, sleep: 7.1, restingHR: 64, stress: "Medium" },
    recommendation: "Moderate cardio or technique work",
  },
];

const CoachDashboardSection = () => {
  return (
    <section id="for-coaches" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">For Coaches & Trainers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Know exactly when to push and when to pull back
          </h2>
          <p className="text-lg text-muted-foreground">
            Monitor all your clients from one dashboard. Make data-driven decisions 
            about training intensity without guesswork.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-6 md:p-8 shadow-elevated">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/50">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Client Overview</h3>
                <p className="text-sm text-muted-foreground">Today • 3 active clients</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-intensity/10 text-intensity text-sm">
                  <Zap className="w-4 h-4" />
                  1 ready for intensity
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-recovery/10 text-recovery text-sm">
                  <AlertCircle className="w-4 h-4" />
                  1 needs recovery
                </div>
              </div>
            </div>

            {/* Client Cards */}
            <div className="space-y-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-card/50 rounded-2xl p-5 border border-border/30 hover:shadow-soft transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Client Info */}
                    <div className="flex items-center gap-3 md:w-48">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{client.name}</p>
                        <div className={`flex items-center gap-1.5 text-xs ${client.statusColor}`}>
                          <span className={`w-6 h-6 rounded-md ${client.statusBg} flex items-center justify-center`}>
                            {client.icon}
                          </span>
                          {client.status}
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex-1 grid grid-cols-4 gap-4">
                      <MetricPill 
                        label="HRV" 
                        value={`${client.metrics.hrv} ms`} 
                        trend={client.metrics.hrvTrend}
                      />
                      <MetricPill 
                        label="Sleep" 
                        value={`${client.metrics.sleep} hrs`}
                      />
                      <MetricPill 
                        label="RHR" 
                        value={`${client.metrics.restingHR} bpm`}
                      />
                      <MetricPill 
                        label="Stress" 
                        value={client.metrics.stress}
                      />
                    </div>

                    {/* Recommendation */}
                    <div className="md:w-64">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">→ </span>
                        {client.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard Footer */}
            <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="text-accent">💡</span> Client insights update automatically with each sync
              </p>
              <button className="text-sm text-accent font-medium hover:underline">
                View full dashboard →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MetricPill = ({ label, value, trend }: { label: string; value: string; trend?: number }) => (
  <div className="text-center">
    <p className="text-xs text-muted-foreground mb-1">{label}</p>
    <p className="text-sm font-medium text-foreground">
      {value}
      {trend !== undefined && (
        <span className={`ml-1 text-xs ${trend > 0 ? 'text-recovery' : 'text-caution'}`}>
          {trend > 0 ? '↑' : '↓'}{Math.abs(trend)}%
        </span>
      )}
    </p>
  </div>
);

export default CoachDashboardSection;
