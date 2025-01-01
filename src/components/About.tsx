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
      id="about"
    >
      {/* Larger animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

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
          {/* Blob container with gradient border */}
          <div className="relative w-[500px] h-[500px] mx-auto">
            {/* Animated blob background */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 to-accent/50 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob_8s_ease-in-out_infinite] blur-xl opacity-70" />
            
            {/* Image container with gradient border */}
            <div className="relative h-full w-full rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden p-1 bg-gradient-to-r from-secondary to-accent animate-[blob_8s_ease-in-out_infinite]">
              <div className="absolute inset-[2px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden bg-primary">
                <img 
                  src="/lovable-uploads/b285457c-f25d-4005-9264-e4a1e1b3bc7c.png"
                  alt="Profile" 
                  className="w-full h-full object-cover animate-pulse"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          {/* Who I Am Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent cursor-help">
                    Who I Am
                  </h2>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Learn more about my background</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Data Engineer & Full Stack Developer with a love for creating elegant solutions to complex problems. 
              My journey in tech has been driven by curiosity and a desire to build impactful applications.
            </p>
          </motion.div>

          {/* My Goals Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent cursor-help">
                    My Goals
                  </h2>
                </TooltipTrigger>
                <TooltipContent>
                  <p>What I aim to achieve</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <p className="text-gray-300">Master cutting-edge technologies in full-stack development</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <p className="text-gray-300">Build impactful applications that solve real-world problems</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <p className="text-gray-300">Contribute to open-source projects and the developer community</p>
              </div>
            </div>
          </motion.div>

          {/* My Approach Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-8"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent cursor-help">
                    My Approach
                  </h2>
                </TooltipTrigger>
                <TooltipContent>
                  <p>How I tackle challenges</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user experiences. 
              My expertise in modern development allows me to build responsive and efficient applications.
            </p>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-4"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="bg-secondary text-primary px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
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