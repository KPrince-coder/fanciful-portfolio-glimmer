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
      {/* Animated background blobs */}
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
          {/* Blob container with gradient border */}
          <div className="relative w-[300px] h-[300px] mx-auto">
            {/* Animated blob background */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 to-accent/50 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob_8s_ease-in-out_infinite] blur-xl opacity-70" />
            
            {/* Image container with gradient border */}
            <div className="relative h-full w-full rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden p-1 bg-gradient-to-r from-secondary to-accent animate-[blob_8s_ease-in-out_infinite]">
              <div className="absolute inset-[2px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden bg-primary">
                <img 
                  src="/lovable-uploads/b285457c-f25d-4005-9264-e4a1e1b3bc7c.png"
                  alt="Profile" 
                  className="w-full h-full object-cover"
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
            className="glass-card p-8 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">Who I Am</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Data Engineer & Full Stack Developer with a love for creating elegant solutions to complex problems. 
              My journey in tech has been driven by curiosity and a desire to build impactful applications.
            </p>
          </motion.div>

          {/* My Approach Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">My Approach</h2>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user experiences. 
              My expertise in Android Development with Jetpack Compose allows me to build modern, responsive applications.
            </p>
          </motion.div>

          {/* My Goals Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-8 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">My Goals</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm constantly learning and exploring new technologies to stay at the forefront of development. 
              My goal is to create applications that make a positive impact on users' lives.
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