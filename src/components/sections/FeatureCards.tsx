import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cardsContent } from "@/content/cards";
import { Brain, Code2, Rocket } from "lucide-react";

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

const iconMap = {
  1: Brain,
  2: Code2,
  3: Rocket
};

export const FeatureCards = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16 px-4"
    >
      {cardsContent.map((card) => {
        const Icon = iconMap[card.id as keyof typeof iconMap];
        return (
          <motion.div
            key={card.id}
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="bg-secondary border border-primary/20 overflow-hidden h-full flex flex-col">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-transparent relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,119,0,0.1),transparent_50%)]" />
                <motion.div
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="relative z-10"
                >
                  <Icon className="w-16 h-16 text-primary drop-shadow-[0_0_15px_rgba(255,119,0,0.5)]" strokeWidth={1.5} />
                </motion.div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-mono text-primary text-sm mb-2 tracking-wider">
                  &gt; {card.title.toUpperCase()}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
