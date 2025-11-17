import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { transformationContent } from "@/content/transformation";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const TransformationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
            {transformationContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {transformationContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {transformationContent.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          {transformationContent.timeline.map((phase, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Checkpoint */}
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl font-bold text-primary">{idx + 1}</span>
                  </div>
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-primary/30 md:hidden" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full whitespace-nowrap">
                      {phase.week}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Deliverable: {phase.deliverable}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {phase.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-xs font-medium bg-secondary border border-primary/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
