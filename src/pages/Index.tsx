import * as React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import CustomCursor from '../components/CustomCursor';
import ParticleBackground from '../components/ParticleBackground';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import BlogSection from '../components/blog/BlogSection';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.cursor = 'none';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>
      <div className="relative z-10 min-h-screen bg-primary">
        <TooltipProvider>
          <Header />
          <main className="container mx-auto">
            <Hero />
            <About />
            <Timeline />
            <Projects />
            <BlogSection />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </TooltipProvider>
      </div>
    </>
  );
};

export default Index;