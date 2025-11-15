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
        className="bg-black p-4 md:p-8 font-mono overflow-x-auto"
      >
        <div className="text-primary scale-75 md:scale-100 origin-top-left">
          <pre className="leading-tight text-[10px] md:text-sm">
{`   ██████╗ ██╗     ██╗████████╗ ██████╗██╗  ██╗
  ██╔════╝ ██║     ██║╚══██╔══╝██╔════╝██║  ██║
  ██║  ███╗██║     ██║   ██║   ██║     ███████║
  ██║   ██║██║           ██║   ██║     ██╔══██║
  ╚██████╔╝███████╗██║   ██║   ╚██████╗██║  ██║
   ╚═════╝ ╚══════╝╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝`}
          </pre>
        </div>
        <div className="text-magenta-400 mt-2 scale-75 md:scale-100 origin-top-left">
          <pre className="leading-tight text-[10px] md:text-sm">
{`   █████╗  ██████╗ █████╗ ██████╗ ███████╗███╗   ███╗██╗   ██╗
  ██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝████╗ ████║╚██╗ ██╔╝
  ███████║██║     ███████║██║  ██║█████╗  ██╔████╔██║ ╚████╔╝ 
  ██╔══██║██║     ██╔══██║██║  ██║██╔══╝  ██║╚██╔╝██║  ╚██╔╝  
  ██║  ██║╚██████╗██║  ██║██████╔╝███████╗██║ ╚═╝ ██║   ██║   
  ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝     ╚═╝   ╚═╝`}
          </pre>
        </div>
        <div className="text-green-400 mt-4 text-center scale-75 md:scale-100">
          <pre className="text-[10px] md:text-sm">
{`════════════════════════════════════════════════════
║         AI-POWERED FULL STACK TRAINING            ║
════════════════════════════════════════════════════`}
          </pre>
        </div>
        <div className="text-green-400 mt-4 flex items-center scale-75 md:scale-100 origin-left">
          <span className="text-xs md:text-sm">user@gl!tch:~$</span>
          <motion.span 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-1 inline-block w-2 h-4 bg-green-400"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
