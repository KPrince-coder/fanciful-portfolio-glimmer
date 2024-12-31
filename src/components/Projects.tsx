import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useQuery } from '@tanstack/react-query';
import { supabase, type Project } from '@/lib/supabase';

type ProjectCategory = 'all' | 'web' | 'android' | 'data';

const ProjectTabs = ({ activeTab, onTabChange }: { activeTab: ProjectCategory; onTabChange: (tab: ProjectCategory) => void }) => {
  const tabs: ProjectCategory[] = ['all', 'web', 'android', 'data'];
  
  return (
    <div className="flex justify-center gap-4 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
            activeTab === tab
              ? 'bg-secondary text-primary font-semibold shadow-lg'
              : 'bg-accent text-secondary hover:bg-accent/80'
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Project[];
    },
  });

  const filteredProjects = projects?.filter(
    (project) => activeTab === 'all' || project.category === activeTab
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-secondary" />
      </div>
    );
  }

  if (!filteredProjects?.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen py-20 px-4 md:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex flex-col items-center justify-center space-y-4 mt-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 glass-card text-center max-w-md"
          >
            <h3 className="text-2xl font-semibold mb-4 text-secondary">No Projects Yet</h3>
            <p className="text-gray-400">
              Projects in this category will appear here once they're added.
            </p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-accent text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-secondary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Source Code</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-secondary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Live Demo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-secondary mb-2">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {selectedProject.long_description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedProject.image_url}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-accent text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={selectedProject.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-secondary transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Source Code</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={selectedProject.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-secondary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Live Demo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default Projects;