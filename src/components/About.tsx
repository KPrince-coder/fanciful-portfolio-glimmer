import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-transparent to-background/50 py-20 px-4 md:px-8"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-background/30 backdrop-blur-lg rounded-lg p-6 shadow-lg"
        >
          <p className="text-lg mb-6">
            I am a versatile developer specializing in Data Engineering, Full Stack Development, and Android Development. 
            With a passion for creating efficient, scalable solutions, I bridge the gap between data infrastructure and user-facing applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Data Engineering</h3>
              <p>Building robust data pipelines and analytics infrastructure</p>
            </div>
            <div className="bg-background/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Full Stack</h3>
              <p>Creating end-to-end web applications with modern technologies</p>
            </div>
            <div className="bg-background/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Android (Jetpack)</h3>
              <p>Developing native Android apps using Jetpack Compose</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;