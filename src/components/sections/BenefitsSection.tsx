import { motion } from "framer-motion";
import { BookOpen, Users, Code2, Zap, Target, Globe } from "lucide-react";
import { benefitsContent } from "@/content/benefits";

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
  bookOpen: BookOpen,
  users: Users,
  code: Code2,
  zap: Zap,
  target: Target,
  globe: Globe
};

export const BenefitsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl bg-secondary/30 rounded-2xl py-12">
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
        className="max-w-4xl mx-auto"
      >
        <p className="text-center text-muted-foreground mb-8">{benefitsContent.curriculum.intro}</p>
        <div className="space-y-3">
          {benefitsContent.curriculum.items.map((curriculumItem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
              className="bg-secondary/50 border border-primary/20 rounded-lg p-4 flex items-start gap-4 group hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-black transition-colors">
                {idx + 1}
              </div>
              <p className="text-sm text-foreground flex-1">{curriculumItem}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
};
