import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogsList from '@/components/admin/blogs/BlogsList';
import BlogForm from '@/components/admin/blogs/BlogForm';
import { useDialog } from '@/hooks/use-dialog';
import { supabase } from '@/lib/supabase';

const BlogsPage = () => {
  const dialog = useDialog();

  const { data: blogs, isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Button onClick={() => dialog.show()} className="gap-2">
          <Plus className="h-4 w-4" />
          New Blog Post
        </Button>
      </div>

      <BlogsList blogs={blogs || []} isLoading={isLoading} />
      
      <BlogForm
        open={dialog.isOpen}
        onOpenChange={dialog.hide}
      />
    </div>
  );
};

export default BlogsPage;