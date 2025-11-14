import { motion } from "framer-motion";
import { Code2, Target, BookOpen, Zap } from "lucide-react";
import { learningContent, dayWorkflowContent } from "@/content/learning";

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
  code: Code2,
  target: Target,
  bookOpen: BookOpen,
  zap: Zap
};

export const LearningSection = () => {
  return (
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
  );
};
