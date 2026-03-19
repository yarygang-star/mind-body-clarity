import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Базовые инсайты для начинающих",
    features: [
      "Ежедневный AI-отчёт",
      "1 подключённое устройство",
      "Базовый анализ сна и ЧСС",
      "7 дней истории",
      "Общие рекомендации",
    ],
    cta: "Начать бесплатно",
    variant: "heroOutline" as const,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "9.99",
    description: "Полный анализ для тех, кто серьёзно относится к здоровью",
    features: [
      "Всё из Free",
      "Неограниченные устройства",
      "Глубокий анализ HRV и стресса",
      "Безлимитная история",
      "Персональная модель здоровья",
      "Предупреждения о рисках",
      "Прогнозы восстановления",
    ],
    cta: "Попробовать Pro",
    variant: "hero" as const,
    highlighted: true,
  },
  {
    name: "Coach",
    price: "29.99",
    description: "Для тренеров и профессионалов",
    features: [
      "Всё из Pro",
      "До 25 клиентов",
      "Панель мониторинга клиентов",
      "Оптимизация расписания тренировок",
      "Экспорт отчётов",
      "Групповая аналитика",
      "Приоритетная поддержка",
    ],
    cta: "Подключить Coach",
    variant: "heroOutline" as const,
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing-plans" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium mb-4">Тарифы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Выберите свой план
          </h2>
          <p className="text-lg text-muted-foreground">
            Начните бесплатно и переходите на Pro, когда будете готовы к полному контролю над здоровьем.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 md:p-8 transition-all duration-300 relative ${
                plan.highlighted
                  ? "glass-card shadow-glow border-2 border-accent/30 scale-[1.02]"
                  : "glass-card hover:shadow-elevated"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Популярный
                  </div>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? "text-accent" : "text-recovery"
                    }`} />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant={plan.variant} className="w-full group">
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
