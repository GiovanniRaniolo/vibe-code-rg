import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { pricingContent } from "@/content/pricing";
import { Users } from "lucide-react";

export const PricingSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto"
      >
        <h3 className="text-2xl font-bold mb-2">{pricingContent.title}</h3>
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-6"
        >
          <Users className="w-4 h-4 text-primary" />
          <span className="text-primary font-semibold text-sm">{pricingContent.inPersonBadge}</span>
        </motion.div>
        
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
  );
};
