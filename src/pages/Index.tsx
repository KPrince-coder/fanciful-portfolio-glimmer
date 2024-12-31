import React, { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import About from '../components/About';

const Index = () => {
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <React.Fragment>
      <div className="relative min-h-screen">
        <CustomCursor />
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <Hero />
          <About />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;