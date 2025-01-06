import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { type Blog, supabase } from '@/lib/supabase';

interface BlogFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blog?: Blog | null;
}

interface FormData {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  image_url: string;
}

const BlogForm = ({ open, onOpenChange, blog }: BlogFormProps) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: blog || {
      title: '',
      excerpt: '',
      content: '',
      author: '',
      image_url: '',
    },
  });

  const { mutate: saveBlog, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      if (blog?.id) {
        const { error } = await supabase
          .from('blogs')
          .update(data)
          .eq('id', blog.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([data]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      reset();
      onOpenChange(false);
    },
  });

  const onSubmit = (data: FormData) => {
    saveBlog(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>
            {blog ? 'Edit Blog Post' : 'Create New Blog Post'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register('title')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea id="excerpt" {...register('excerpt')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" {...register('content')} rows={10} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input id="author" {...register('author')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">Image URL</Label>
            <Input id="image_url" {...register('image_url')} />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BlogForm;