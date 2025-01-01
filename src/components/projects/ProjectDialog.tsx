import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Github, ExternalLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { type Project } from '@/lib/supabase';

interface ProjectDialogProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

const ProjectDialog = ({ project, onOpenChange }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-secondary mb-2">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {project.long_description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
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
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;