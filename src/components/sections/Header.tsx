import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-border py-4"
    >
      <div className="container mx-auto px-4">
        <img src="/glitch_logo.png" alt="Glitch Academy" className="h-8" />
      </div>
    </motion.header>
  );
};
