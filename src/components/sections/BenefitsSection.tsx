import { motion } from "framer-motion";
import { BookOpen, Users, Code2, Zap, Target, Globe, ChevronDown, Terminal } from "lucide-react";
import { benefitsContent } from "@/content/benefits";
import { lessonsDetails } from "@/content/lessons";
import { useState } from "react";

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
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);

  const toggleLesson = (id: number) => {
    setExpandedLesson(expandedLesson === id ? null : id);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl bg-secondary/30 rounded-2xl py-12">
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
          {benefitsContent.curriculum.items.map((curriculumItem, idx) => {
            const lessonDetail = lessonsDetails[idx];
            const isExpanded = expandedLesson === idx + 1;
            
            return (
              <div key={idx}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  onClick={() => toggleLesson(idx + 1)}
                  className="bg-secondary/50 border border-primary/20 rounded-lg p-4 flex items-start gap-4 group hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-black transition-colors">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-foreground flex-1">{curriculumItem}</p>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </motion.div>

                {isExpanded && lessonDetail && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 ml-12 mr-4 space-y-3"
                  >
                    {lessonDetail.sections.map((section, sIdx) => (
                      <div key={sIdx} className="bg-black/20 border border-primary/10 rounded-lg p-3">
                        <h4 className="font-mono text-primary text-xs flex items-center gap-2">
                          <span className="text-green-400">&gt;</span>
                          {section.title}
                        </h4>
                      </div>
                    ))}
                    {lessonDetail.exercise && (
                      <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg p-4">
                        <h4 className="font-mono text-primary text-xs mb-2 flex items-center gap-2">
                          <Terminal className="w-4 h-4" />
                          {benefitsContent.exerciseLabel}
                        </h4>
                        <p className="text-xs text-foreground">{lessonDetail.exercise}</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <a 
            href={benefitsContent.notionButton.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,119,0,0.3)] group"
          >
            <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            <span>{benefitsContent.notionButton.text}</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};
