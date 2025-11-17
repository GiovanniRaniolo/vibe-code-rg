import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { pricingContent } from "@/content/pricing";
import { Users, Clock, Shield, Check } from "lucide-react";
import { useState, useEffect } from "react";

const CountdownTimer = ({ deadline }: { deadline: string }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(deadline) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          expired: false
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  if (timeLeft.expired) {
    return (
      <div className="text-sm text-muted-foreground">
        {pricingContent.urgency?.countdown.expiredText}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-3">
      {[
        { value: timeLeft.days, label: "Giorni" },
        { value: timeLeft.hours, label: "Ore" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-primary/20 border border-primary/40 rounded-lg min-w-[60px] h-[60px] flex items-center justify-center">
            <span className="text-2xl font-bold text-primary tabular-nums">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs text-muted-foreground mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export const PricingSection = () => {
  const availableSpots = (pricingContent.urgency?.availability.total || 12) - (pricingContent.urgency?.availability.booked || 0);
  const progressPercentage = ((pricingContent.urgency?.availability.booked || 0) / (pricingContent.urgency?.availability.total || 12)) * 100;

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold mb-3">{pricingContent.title}</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {pricingContent.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-to-br from-card to-secondary border-2 border-primary/30 p-8 relative overflow-hidden">
              {/* Early Bird Badge */}
              {pricingContent.urgency?.countdown.enabled && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 z-10">
                  <span className="inline-block px-4 py-1.5 text-xs font-bold text-black bg-primary rounded-full animate-pulse">
                    {pricingContent.urgency.badge}
                  </span>
                </div>
              )}

              {/* In-Person Badge */}
              <div className="flex justify-center sm:justify-start mb-6 mt-8 sm:mt-0">
                <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2">
                  <Users className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-primary font-semibold text-sm">{pricingContent.inPersonBadge}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-6xl font-bold text-primary">
                    {pricingContent.pricing.mainPrice}
                  </span>
                  <span className="text-xl text-muted-foreground line-through">
                    {pricingContent.pricing.standardPrice}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {pricingContent.pricing.priceLabel}
                </div>
                <div className="text-xs text-muted-foreground">
                  {pricingContent.pricing.standardPriceLabel}
                </div>
              </div>

              {/* Countdown Timer */}
              {pricingContent.urgency?.countdown.enabled && (
                <div className="bg-secondary/50 border border-primary/20 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">
                      {pricingContent.urgency.countdown.text}:
                    </span>
                  </div>
                  <CountdownTimer deadline={pricingContent.urgency.countdown.deadline} />
                </div>
              )}

              {/* Payment Options */}
              <div className="grid gap-3 mb-6">
                {pricingContent.pricing.paymentOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`border rounded-lg p-4 transition-all ${
                      option.recommended
                        ? 'border-primary/50 bg-primary/5'
                        : 'border-primary/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{option.label}</span>
                      {option.recommended && (
                        <span className="text-xs font-bold text-primary bg-primary/20 px-2 py-1 rounded-full">
                          CONSIGLIATO
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{option.price}</span>
                      {option.savings && (
                        <span className="text-sm text-green-400">• {option.savings}</span>
                      )}
                      {option.total && (
                        <span className="text-sm text-muted-foreground">({option.total})</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button size="lg" className="w-full mb-4 text-lg h-14">
                {pricingContent.cta.primary}
              </Button>

              <a
                href={`https://wa.me/${pricingContent.cta.whatsapp?.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {pricingContent.cta.secondary}
              </a>
            </Card>

            {/* Availability Progress */}
            {pricingContent.urgency?.availability && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 bg-card border border-primary/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold">Disponibilità Posti</span>
                  <span className="text-sm text-primary font-bold">
                    {availableSpots} {pricingContent.urgency.availability.label}
                  </span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  {pricingContent.urgency.availability.booked} su {pricingContent.urgency.availability.total} posti già prenotati
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar - What's Included + Guarantee */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* What's Included */}
            <Card className="bg-card border border-primary/20 p-6">
              <h4 className="font-bold text-lg mb-4">{pricingContent.included.title}</h4>
              <ul className="space-y-3">
                {pricingContent.included.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Guarantee */}
            {pricingContent.guarantee && (
              <Card className="bg-gradient-to-br from-primary/10 to-secondary border-2 border-primary/30 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-xs font-bold text-primary bg-primary/20 px-2 py-1 rounded-full">
                    {pricingContent.guarantee.badge}
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-2">
                  {pricingContent.guarantee.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pricingContent.guarantee.description}
                </p>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
