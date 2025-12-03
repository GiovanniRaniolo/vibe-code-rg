import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { faqContent } from "@/content/faq";
import { Calendar, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const FAQSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#prerequisiti") {
      setTimeout(() => {
        const element = document.getElementById("faq-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // Trigger click on first accordion item
        const firstTrigger = document.querySelector('#faq-item-1 button') as HTMLButtonElement;
        if (firstTrigger) {
          firstTrigger.click();
        }
      }, 300);
    }
  }, [location]);

  return (
    <section id="faq-section" className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold mb-3">
            {faqContent.title}
          </h3>
          <p className="text-lg text-muted-foreground">
            {faqContent.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Essential Questions - Main Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Accordion type="single" collapsible>
              {faqContent.essentialQuestions.map((item, index) => (
                <AccordionItem key={item.id} value={item.id} id={index === 0 ? 'faq-item-1' : undefined}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Sidebar - Guarantee & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 lg:pt-4"
          >
            {/* Guarantee Box */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary border-2 border-primary/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-6 h-6 text-primary" />
                <span className="text-xs font-bold text-primary bg-primary/20 px-2 py-1 rounded-full">
                  {faqContent.guarantee.badge}
                </span>
              </div>
              <h4 className="font-bold text-lg mb-2">
                {faqContent.guarantee.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faqContent.guarantee.description}
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-card border border-primary/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-primary" />
                <h4 className="font-bold">
                  {faqContent.contact.text}
                </h4>
              </div>
              <a
                href={faqContent.contact.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  {faqContent.contact.cta}
                </Button>
              </a>
              <p className="text-xs text-center text-muted-foreground mt-2">
                {faqContent.contact.tagline}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
