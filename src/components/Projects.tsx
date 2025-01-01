import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase, type Project } from '@/lib/supabase';
import ProjectCard from './projects/ProjectCard';
import ProjectDialog from './projects/ProjectDialog';
import ProjectTabs from './projects/ProjectTabs';
import { type ProjectCategory } from './projects/types';

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
      id="projects"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectDialog
        project={selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      />
    </motion.section>
  );
};

export default Projects;