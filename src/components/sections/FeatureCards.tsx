import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cardsContent } from "@/content/cards";

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

export const FeatureCards = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16"
    >
      {cardsContent.map((card) => (
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
  );
};
