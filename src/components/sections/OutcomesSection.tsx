import { motion } from "framer-motion";
import { Zap, Globe, Briefcase } from "lucide-react";
import { outcomesContent } from "@/content/outcomes";

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
  code: null,
  zap: Zap,
  globe: Globe,
  briefcase: Briefcase
};

export const OutcomesSection = () => {
  return (
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
                  <div className="pixelated-text text-4xl text-primary">AI<br/>POWERED</div>
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
  );
};
