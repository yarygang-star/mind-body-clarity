import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";

const faqs = [
  {
    q: "Чем AI HEALTH FIT отличается от Apple Health или Google Fit?",
    a: "Apple Health и Google Fit показывают сырые данные — цифры и графики. AI HEALTH FIT анализирует взаимосвязи между метриками (сон, HRV, стресс, нагрузка) и объясняет простым языком, почему ваши показатели изменились и что с этим делать. Мы — не дашборд, а персональный AI-коуч.",
  },
  {
    q: "AI HEALTH FIT ставит медицинские диагнозы?",
    a: "Нет. AI HEALTH FIT — это wellness-продукт, а не медицинское устройство. Мы выявляем паттерны и тренды в ваших данных и предлагаем обратить внимание на возможные риски. Для диагностики и лечения всегда обращайтесь к врачу.",
  },
  {
    q: "Какие смарт-часы поддерживаются?",
    a: "На старте мы поддерживаем Apple Watch (через HealthKit), Samsung Galaxy Watch (через Samsung Health) и Garmin (через Garmin Connect API). Поддержка Fitbit и других устройств появится в ближайшее время.",
  },
  {
    q: "Как скоро AI начнёт давать точные рекомендации?",
    a: "Базовые рекомендации доступны с первого дня. Для персонализированных инсайтов системе нужно 7–14 дней данных, чтобы построить вашу индивидуальную физиологическую модель. Чем больше данных — тем точнее рекомендации.",
  },
  {
    q: "Безопасны ли мои данные?",
    a: "Абсолютно. Все данные шифруются при передаче и хранении. Мы не продаём и не передаём ваши данные третьим лицам. Вы можете удалить все свои данные в любой момент.",
  },
  {
    q: "Могу ли я использовать AI HEALTH FIT как тренер для своих клиентов?",
    a: "Да! Тариф Coach позволяет подключить до 25 клиентов, видеть их данные на единой панели мониторинга, получать AI-рекомендации по тренировкам и экспортировать отчёты.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на самые популярные вопросы о продукте.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedItem delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-2xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
