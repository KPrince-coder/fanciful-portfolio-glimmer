import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FileText } from 'lucide-react';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column - Image and Blob */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/a3519ee9-33c2-4971-b415-109d17e95cdd.png" 
              alt="Profile" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="absolute -z-10 inset-0 bg-secondary/30 rounded-full blur-2xl animate-pulse" />
        </motion.div>

        {/* Right Column - Content */}
        <div className="space-y-12">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8"
          >
            <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Data Engineer & Full Stack Developer with a love for creating elegant solutions to complex problems. 
              My journey in tech has been driven by curiosity and a desire to build impactful applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8"
          >
            <h2 className="text-3xl font-bold mb-4">My Approach</h2>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user experiences. 
              My expertise in Android Development with Jetpack Compose allows me to build modern, responsive applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-8"
          >
            <h2 className="text-3xl font-bold mb-4">My Goals</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm constantly learning and exploring new technologies to stay at the forefront of development. 
              My goal is to create applications that make a positive impact on users' lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-4"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="bg-secondary text-primary px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-opacity-90 transition-colors">
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
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;