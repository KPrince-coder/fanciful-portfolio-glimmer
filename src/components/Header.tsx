import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'home', label: 'Home', color: '#64FFDA' },
    { id: 'about', label: 'About', color: '#9b87f5' },
    { id: 'timeline', label: 'Timeline', color: '#F97316' },
    { id: 'projects', label: 'Projects', color: '#1EAEDB' },
    { id: 'blog', label: 'Blog', color: '#D6BCFA' },
    { id: 'skills', label: 'Skills', color: '#FFDEE2' },
    { id: 'contact', label: 'Contact', color: '#8B5CF6' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'timeline', 'projects', 'blog', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });

      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-secondary rounded-lg transform rotate-45"></div>
                <div className="absolute inset-2 bg-primary rounded-lg transform rotate-45 flex items-center justify-center">
                  <span className="text-secondary font-bold text-xl transform -rotate-45">P</span>
                </div>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">PK</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
          {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ y: -2 }}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  activeSection === section.id
                    ? 'text-secondary font-medium'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: section.color }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-secondary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-secondary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-secondary transition-colors">
              <Twitter size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.toggle('hidden');
                }
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hidden md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary/90 backdrop-blur-md">
          {['Home', 'About', 'Timeline', 'Projects', 'Blog', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.add('hidden');
                }
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left
                ${activeSection === item.toLowerCase()
                  ? 'text-secondary bg-accent/50'
                  : 'text-gray-300 hover:bg-accent/30 hover:text-white'
                }`}
            >
              {item}
            </button>
          ))}
          <div className="flex space-x-4 px-3 py-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-secondary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-secondary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-secondary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;