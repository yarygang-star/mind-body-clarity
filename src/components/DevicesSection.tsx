import { Wifi } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";

const devices = [
  {
    name: "Apple Watch",
    description: "Series 4 и новее. Полная интеграция через HealthKit.",
    icon: "⌚",
    status: "Поддерживается",
    features: ["HRV", "Сон", "ЧСС", "Тренировки", "SpO2"],
  },
  {
    name: "Samsung Galaxy Watch",
    description: "Galaxy Watch 4 и новее. Интеграция через Samsung Health.",
    icon: "⌚",
    status: "Поддерживается",
    features: ["HRV", "Сон", "ЧСС", "Стресс", "Состав тела"],
  },
  {
    name: "Garmin",
    description: "Fenix, Venu, Forerunner. Через Garmin Connect API.",
    icon: "⌚",
    status: "Поддерживается",
    features: ["HRV", "Body Battery", "Сон", "VO2 Max", "Нагрузка"],
  },
  {
    name: "Fitbit",
    description: "Sense, Versa, Charge. Полная синхронизация данных.",
    icon: "⌚",
    status: "Скоро",
    features: ["HRV", "Сон", "ЧСС", "SpO2", "Стресс"],
  },
];

const DevicesSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium mb-4">Совместимость</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Работает с вашими смарт-часами
            </h2>
            <p className="text-lg text-muted-foreground">
              AI HEALTH FIT интегрируется с популярными носимыми устройствами, 
              собирая все данные в единую картину здоровья.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {devices.map((device, index) => (
            <AnimatedItem key={index} delay={index * 0.1}>
              <div className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 group relative overflow-hidden h-full">
                <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium ${
                  device.status === "Поддерживается"
                    ? "bg-recovery/10 text-recovery"
                    : "bg-caution/10 text-caution"
                }`}>
                  {device.status}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {device.icon}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1">{device.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{device.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {device.features.map((feature, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-secondary text-xs text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border/50">
              <Wifi className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">
                Автоматическая синхронизация данных • Без ручного ввода
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DevicesSection;
