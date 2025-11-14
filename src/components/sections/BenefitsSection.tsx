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
  );
};
