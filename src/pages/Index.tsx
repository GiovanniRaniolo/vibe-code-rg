import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Zap, Globe, Briefcase, BookOpen, Code2, Users, Target, Github, Twitter, Linkedin, Youtube, Instagram, Mail, FileText, Shield, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";
import { cardsContent } from "@/content/cards";
import { learningContent, dayWorkflowContent } from "@/content/learning";
import { outcomesContent } from "@/content/outcomes";
import { benefitsContent } from "@/content/benefits";
import { pricingContent } from "@/content/pricing";
import { faqContent } from "@/content/faq";
import { footerContent } from "@/content/footer";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-border py-4"
      >
        <div className="container mx-auto px-4">
          <img src="/glitch_logo.png" alt="Every" className="h-8" />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          {heroContent.title.part1} <span className="text-primary">{heroContent.title.highlight}</span> {heroContent.title.part2}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl mb-4">
            {heroContent.subtitle.part1} <span className="font-semibold">{heroContent.subtitle.instructor}</span>{heroContent.subtitle.part2}
          </p>
          <p className="text-xl mb-8">{heroContent.subtitleContinue}</p>
          
          <p className="text-muted-foreground mb-2 max-w-2xl mx-auto">
            {heroContent.description.part1}
          </p>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {heroContent.description.part2}
          </p>
          
          <p className="text-sm text-muted-foreground mb-6">
            {heroContent.availability}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg mb-12">
            {heroContent.cta}
          </Button>
        </motion.div>

        {/* Browser Window Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-secondary rounded-t-lg p-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                className="w-3 h-3 rounded-full bg-red-500"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.3 }}
                className="w-3 h-3 rounded-full bg-yellow-500"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.4 }}
                className="w-3 h-3 rounded-full bg-green-500"
              />
            </div>
            <div className="bg-muted rounded px-3 py-1 text-xs text-muted-foreground ml-4">
              {heroContent.browserText}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="bg-black p-8"
          >
            <div className="pixelated-text text-6xl md:text-8xl text-primary leading-tight">
              CLAUDE<br/>CODE
            </div>
          </motion.div>
        </motion.div>

        {/* Image Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {cardsContent.map((card, idx) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="bg-secondary border-border overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                  {card.title}
                </div>
                <div className="p-4 text-sm">
                  {card.description}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Divider */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-primary max-w-4xl mx-auto"
      />

      {/* What You'll Learn Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8">{learningContent.title}</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {learningContent.items.map((item, idx) => {
                const iconMap = {
                  code: Code2,
                  target: Target,
                  bookOpen: BookOpen,
                  zap: Zap
                };
                const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex gap-4"
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <IconComponent className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.text}</h4>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8">{dayWorkflowContent.title}</h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {dayWorkflowContent.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="flex gap-4"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="text-primary font-bold text-xl flex-shrink-0">{idx + 1}</div>
                  <div>
                    <p>{step}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {outcomesContent.title}
        </motion.h3>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {outcomesContent.items.map((item, idx) => {
            const iconMap = {
              code: null,
              zap: Zap,
              globe: Globe,
              briefcase: Briefcase
            };
            const IconComponent = iconMap[item.type as keyof typeof iconMap];
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  {item.type === "code" ? (
                    <div className="pixelated-text text-4xl text-primary">CLAUDE<br/>CODE</div>
                  ) : IconComponent && (
                    <IconComponent className="w-12 h-12 text-primary" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* What You Get Section */}
      <section className="container mx-auto px-4 py-16 bg-secondary/30">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {benefitsContent.title}
        </motion.h3>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
        >
          {benefitsContent.items.map((item, idx) => {
            const iconMap = {
              bookOpen: BookOpen,
              users: Users,
              code: Code2,
              zap: Zap,
              target: Target,
              globe: Globe
            };
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-sm">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-sm text-muted-foreground space-y-2"
        >
          <p>{benefitsContent.curriculum.intro}</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {benefitsContent.curriculum.items.map((curriculumItem, idx) => (
              <li key={idx}>{curriculumItem}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <h3 className="text-2xl font-bold mb-2">{pricingContent.title}</h3>
          <div className="flex justify-center gap-8 text-sm mb-8">
            <div>
              <span className="font-semibold">{pricingContent.features.type}</span>
            </div>
            <div>
              <span className="font-semibold">{pricingContent.features.pricing}</span>
            </div>
            <div>
              <span className="font-semibold">{pricingContent.features.duration}</span>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-secondary border-border p-8 mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6 }}
                className="text-5xl font-bold mb-2"
              >
                {pricingContent.price}
              </motion.div>
              <div className="text-muted-foreground mb-6">{pricingContent.priceDescription}</div>
              <p className="text-sm text-muted-foreground mb-6">
                {pricingContent.priceDetails}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  {pricingContent.cta}
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">A note from Dan</h3>
          <div className="grid md:grid-cols-[200px,1fr] gap-8">
            <div className="aspect-square bg-muted rounded flex items-center justify-center text-muted-foreground">
              Dan's Photo
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                I want to tell you about one of the most incredible days I've ever had. It was April 13th, 2024, and I was teaching a small group of people how to build apps with Claude Code for the very first time.
              </p>
              <p>
                I wasn't sure what to expect. Would people get it? Would they be able to build something? Would they have fun?
              </p>
              <p>
                The answer was yes to all three. By the end of the day, every single person had built and deployed a working application. Not a tutorial. Not a toy. A real app that they could share with friends and family.
              </p>
              <p>
                The most amazing part wasn't just that everyone shipped something. It was how they felt at the end. There was this palpable sense of "I can do this. I can build things. I can make my ideas real."
              </p>
              <p>
                That feeling is what this workshop is about. Not just learning Claude Code, but discovering that you have the power to build anything you can imagine.
              </p>
              <p>
                I hope you'll join me for a day that might just change how you see yourself and what you're capable of.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {faqContent.title}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqContent.questions.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-border py-16"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <img src="/glitch_logo.png" alt="Every" className="h-8 mb-6" />
            <h3 className="text-3xl font-bold mb-4">{footerContent.heading.title}</h3>
            <p className="text-muted-foreground mb-12">{footerContent.heading.subtitle}</p>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-4 mb-12"
            >
              {footerContent.social.map((social, idx) => {
                const iconMap = {
                  twitter: Twitter,
                  linkedin: Linkedin,
                  github: Github,
                  youtube: Youtube,
                  instagram: Instagram
                };
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Footer Links Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-5 gap-8 text-sm mb-12 pb-12 border-b border-border"
            >
              {footerContent.navigation.map((section, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
                  <ul className="space-y-2.5 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <motion.li 
                        key={linkIdx}
                        whileHover={{ x: 3, transition: { duration: 0.2 } }}
                      >
                        <a 
                          href={link.url} 
                          target={link.url.startsWith('http') ? "_blank" : undefined}
                          rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="hover:text-primary transition-colors inline-flex items-center gap-1"
                        >
                          {link.label}
                          {link.url.startsWith('http') && (
                            <Globe className="w-3 h-3 opacity-50" />
                          )}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span>{footerContent.bottom.copyright}</span>
              </div>
              <div className="flex items-center gap-6">
                <motion.a 
                  href={`mailto:${footerContent.bottom.email}`}
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="w-4 h-4" />
                  <span>{footerContent.bottom.email}</span>
                </motion.a>
                <span className="text-muted-foreground/50">|</span>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>{footerContent.bottom.securePayments}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
