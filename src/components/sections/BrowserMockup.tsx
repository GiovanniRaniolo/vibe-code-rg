import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";

export const BrowserMockup = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="max-w-4xl mx-auto mb-8"
    >
      <div className="bg-secondary rounded-t-lg p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="w-3 h-3 rounded-full bg-red-500"
          />
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
            className="w-3 h-3 rounded-full bg-yellow-500"
          />
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.4 }}
            className="w-3 h-3 rounded-full bg-green-500"
          />
        </div>
        <div className="bg-muted rounded px-3 py-1 text-xs text-muted-foreground ml-4">
          {heroContent.browserText}
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="bg-black p-8"
      >
        <div className="pixelated-text text-6xl md:text-8xl text-primary leading-tight">
          CLAUDE<br/>CODE
        </div>
      </motion.div>
    </motion.div>
  );
};
