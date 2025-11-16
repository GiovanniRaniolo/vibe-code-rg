import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";
import { MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-6"
      >
        <MapPin className="w-4 h-4 text-primary" />
        <span className="text-primary font-semibold text-sm">{heroContent.locationBadge}</span>
        <span className="text-muted-foreground text-sm">• {heroContent.location}</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
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
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg mb-12">
          {heroContent.cta}
        </Button>
      </motion.div>
    </section>
  );
};
