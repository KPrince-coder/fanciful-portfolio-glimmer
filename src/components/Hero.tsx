import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="text-secondary">Your Name</span>
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-4xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Data Engineer | Full Stack Developer | Android Developer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="#contact" 
                    className="bg-secondary text-primary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Get in Touch
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Let's work together!</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    className="bg-accent text-secondary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center space-x-2"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Download CV</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download my resume</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;