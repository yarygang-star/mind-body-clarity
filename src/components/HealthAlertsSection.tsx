import { AlertTriangle, Heart, Activity, Moon, TrendingDown, Shield } from "lucide-react";

const alerts = [
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Сердечно-сосудистые риски",
    description: "Анализируем паттерны ЧСС и HRV для выявления ранних признаков аритмии, повышенного давления и перегрузки сердца.",
    example: "«ЧСС в покое растёт 5 дней подряд (+8 уд/мин). Это может указывать на начинающуюся инфекцию или перетренированность.»",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/20",
  },
  {
    icon: <Moon className="w-5 h-5" />,
    title: "Нарушения сна",
    description: "Отслеживаем качество сна, фазы и дыхание для выявления хронического недосыпа и возможного апноэ.",
    example: "«Глубокий сон составляет всего 12% (норма 20-25%). Хроническое недосыпание может привести к проблемам с иммунитетом.»",
    color: "text-intensity",
    bgColor: "bg-intensity/10",
    borderColor: "border-intensity/20",
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    title: "Признаки выгорания",
    description: "Комбинируем стресс, сон и HRV для обнаружения паттернов хронического стресса и эмоционального выгорания.",
    example: "«HRV снижается 2 недели, стресс выше нормы на 30%. Рекомендуем снизить нагрузку и обратиться к специалисту.»",
    color: "text-caution",
    bgColor: "bg-caution/10",
    borderColor: "border-caution/20",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Перетренированность",
    description: "Мониторим баланс нагрузки и восстановления, предупреждая о рисках травм и перетренированности.",
    example: "«Тренировочная нагрузка за неделю выросла на 40%. Риск травмы высокий. Рекомендуем 2 дня активного восстановления.»",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
];

const HealthAlertsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium mb-4">Умные предупреждения</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Предупреждаем о рисках до того, как они станут проблемой
          </h2>
          <p className="text-lg text-muted-foreground">
            AI HEALTH FIT анализирует паттерны ваших данных и предупреждает о возможных 
            проблемах со здоровьем — с понятным объяснением и рекомендациями.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-muted/50 border border-border">
            <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Важно:</span> AI HEALTH FIT не является медицинским 
              устройством и не ставит диагнозов. Мы выявляем паттерны и предлагаем обратить внимание на 
              возможные риски. Всегда консультируйтесь с врачом.
            </p>
          </div>
        </div>

        {/* Alerts Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 border-l-4 ${alert.borderColor}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl ${alert.bgColor} flex items-center justify-center ${alert.color} flex-shrink-0`}>
                  {alert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {alert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {alert.description}
                  </p>
                  <div className={`${alert.bgColor} rounded-xl p-3 border ${alert.borderColor}`}>
                    <p className="text-xs text-muted-foreground italic leading-relaxed">
                      {alert.example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthAlertsSection;
