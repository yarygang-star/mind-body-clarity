import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const benefits = [
  "AI-powered daily health briefings",
  "Works with any smartwatch",
  "No medical diagnoses — just clarity",
  "Early access pricing for founders",
];

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-glow relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-recovery/5" />
            
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Understand your health data
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Join 2,400+ smartwatch owners who want more than just numbers. 
                Get early access to AI HEALTH FIT.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50"
                  >
                    <Check className="w-4 h-4 text-recovery" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <Button variant="hero" type="submit" className="group">
                    Get Early Access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              ) : (
                <div className="bg-recovery/10 border border-recovery/20 rounded-xl p-6 max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-2 text-recovery mb-2">
                    <Check className="w-5 h-5" />
                    <span className="font-semibold">You're on the list!</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We'll notify you when early access opens. Check your inbox for a confirmation email.
                  </p>
                </div>
              )}

              <p className="text-xs text-muted-foreground mt-4">
                Free to join the waitlist. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
