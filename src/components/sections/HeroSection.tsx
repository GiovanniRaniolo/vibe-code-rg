import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";
import { pricingContent } from "@/content/pricing";
import { MapPin, Zap, Calendar } from "lucide-react";
import { useEffect } from "react";

// Load Luma checkout script
const loadLumaScript = () => {
  if (!document.getElementById('luma-checkout')) {
    const script = document.createElement('script');
    script.id = 'luma-checkout';
    script.src = 'https://embed.lu.ma/checkout-button.js';
    script.async = true;
    document.body.appendChild(script);
  }
};

export const HeroSection = () => {
  // Load Luma script on mount if using embed
  useEffect(() => {
    if (pricingContent.luma?.useEmbed) {
      loadLumaScript();
    }
  }, []);
  return (
    <section className="container mx-auto px-4 py-16 pb-16 text-center">
      {/* Super-sized Main Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl md:text-7xl font-black mb-4 leading-tight"
      >
        {heroContent.title.part1} <br className="md:hidden" /><span className="text-primary">{heroContent.title.highlight}</span>
      </motion.h1>
      
      {/* Stylized Subtitle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="inline-flex items-center gap-3 mb-8"
      >
        <div className="h-px w-8 bg-primary"></div>
        <h2 className="text-2xl md:text-3xl font-light text-muted-foreground">
          {heroContent.title.part2}
        </h2>
        <div className="h-px w-8 bg-primary"></div>
      </motion.div>
      
      {/* Badge integrato con icone multiple */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-2 mb-6"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 py-1.5">
          <Calendar className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium">{heroContent.badges.format}</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-secondary/50 border border-primary/20 rounded-full px-3 py-1.5">
          <Zap className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium">{heroContent.badges.duration}</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-3 py-1.5 shadow-lg shadow-primary/20">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          <span className="text-primary font-semibold text-xs">{heroContent.badges.location}</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="space-y-6 mb-8"
      >
        {/* Instructor badge */}
        <div className="inline-flex items-center gap-2 text-base md:text-lg text-muted-foreground">
          <span>{heroContent.instructor}</span>
        </div>
        
        {/* Subtitle con deliverable */}
        <p className="text-lg md:text-xl font-medium text-foreground/90 max-w-2xl mx-auto">
          {heroContent.subtitle}
        </p>
        
        {/* Description compatta */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {heroContent.description}
        </p>
        
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-4 py-2">
          <span className="text-xs font-bold text-primary">{heroContent.availability}</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {pricingContent.luma?.useEmbed ? (
          <a
            href={pricingContent.luma.eventUrl}
            className="luma-checkout--button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 text-white px-8 py-6"
            data-luma-action="checkout"
            data-luma-event-id={pricingContent.luma.eventId}
          >
            {heroContent.cta}
          </a>
        ) : (
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
            asChild
          >
            <a 
              href={pricingContent.luma?.eventUrl || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {heroContent.cta}
            </a>
          </Button>
        )}
      </motion.div>
    </section>
  );
};
