import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectsList from '@/components/admin/projects/ProjectsList';
import ProjectForm from '@/components/admin/projects/ProjectForm';
import { useDialog } from '@/hooks/use-dialog';
import { supabase } from '@/lib/supabase';

export default function ProjectsPage() {
  const dialog = useDialog();

  const { data: projects, isLoading } = useQuery({
    queryKey: ['admin-projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button onClick={() => dialog.show()} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Project
        </Button>
      </div>

      <ProjectsList projects={projects || []} isLoading={isLoading} />
      
      <ProjectForm
        open={dialog.isOpen}
        onOpenChange={dialog.hide}
      />
    </div>
  );
}