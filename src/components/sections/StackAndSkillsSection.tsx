import { motion } from "framer-motion";
import { Code2, Target, Database, Zap, CheckCircle2, Layers, Globe, Rocket } from "lucide-react";
import { stackAndSkillsContent } from "@/content/stackAndSkills";

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
  database: Database,
  zap: Zap,
  layers: Layers,
  api: Globe,
  rocket: Rocket
};

export const StackAndSkillsSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
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
            {stackAndSkillsContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {stackAndSkillsContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {stackAndSkillsContent.subtitle}
          </p>
        </motion.div>

        {/* Stack Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {stackAndSkillsContent.stack.map((item, idx) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-xs font-medium bg-secondary border border-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Outcomes Stats */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-4">
              {stackAndSkillsContent.outcomes.title}
            </h3>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              {stackAndSkillsContent.outcomes.subtitle}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {stackAndSkillsContent.outcomes.items.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`text-center p-8 rounded-xl border-2 transition-all ${
                    outcome.highlight
                      ? 'bg-primary/5 border-primary/40 hover:border-primary/60'
                      : 'bg-secondary/50 border-primary/20 hover:border-primary/40'
                  }`}
                >
                  <div className={`text-6xl font-bold mb-3 ${
                    outcome.highlight ? 'text-primary' : 'text-foreground'
                  }`}>
                    {outcome.number}
                  </div>
                  <div className="text-xl font-bold mb-2">
                    {outcome.label}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {outcome.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Mini Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              {stackAndSkillsContent.skills.title}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stackAndSkillsContent.skills.items.map((skill, idx) => {
                const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all text-center group hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex justify-center mb-3">
                      {IconComponent && (
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                    <h4 className="font-bold mb-2 text-sm">
                      {skill.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
