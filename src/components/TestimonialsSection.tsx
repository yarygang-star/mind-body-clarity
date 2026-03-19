import { Star, Quote } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";

const testimonials = [
  {
    name: "Алексей К.",
    role: "Предприниматель",
    avatar: "А",
    rating: 5,
    text: "Наконец-то я понимаю, почему в некоторые дни чувствую себя разбитым. AI HEALTH FIT показал связь между моим поздним сном и низким HRV. Теперь я планирую важные встречи на дни, когда организм готов.",
    highlight: "HRV вырос на 15% за месяц",
  },
  {
    name: "Марина С.",
    role: "Фитнес-тренер",
    avatar: "М",
    rating: 5,
    text: "Панель тренера — это находка. Раньше я спрашивала клиентов 'как ты себя чувствуешь?', теперь вижу объективные данные. Один клиент избежал травмы благодаря предупреждению о перетренированности.",
    highlight: "Управляю 18 клиентами с одной панели",
  },
  {
    name: "Дмитрий В.",
    role: "Биохакер",
    avatar: "Д",
    rating: 5,
    text: "Я перепробовал Whoop, Oura, GYMBRO. Ни одно приложение не объясняло ПОЧЕМУ мои метрики меняются. AI HEALTH FIT — первый продукт, который даёт причинно-следственные связи, а не просто графики.",
    highlight: "Качество сна улучшилось на 23%",
  },
  {
    name: "Елена П.",
    role: "Марафонец",
    avatar: "Е",
    rating: 5,
    text: "Готовилась к марафону и AI HEALTH FIT точно подсказывал дни для интенсивных тренировок и дни для восстановления. Финишировала с личным рекордом, без травм и перетренированности.",
    highlight: "Личный рекорд на марафоне",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium mb-4">Отзывы</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Люди, которые понимают своё тело
            </h2>
            <p className="text-lg text-muted-foreground">
              Более 2 400 пользователей уже используют AI HEALTH FIT для осознанного управления здоровьем.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <AnimatedItem key={index} delay={index * 0.1}>
              <div className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-accent/20 mb-4" />

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                  "{t.text}"
                </p>

                {/* Highlight */}
                <div className="px-3 py-1.5 rounded-full bg-recovery/10 border border-recovery/20 inline-flex items-center gap-1.5 w-fit mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-recovery" />
                  <span className="text-xs font-medium text-recovery">{t.highlight}</span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-sm font-semibold text-accent">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
