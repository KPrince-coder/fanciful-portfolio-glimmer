import React, { useEffect } from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import CustomCursor from '../components/CustomCursor';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import BlogSection from '../components/blog/BlogSection';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <TooltipProvider>
      <div className="relative min-h-screen">
        <CustomCursor />
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <Hero />
          <About />
          <Timeline />
          <Projects />
          <BlogSection />
          <Skills />
          <Contact />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Index;