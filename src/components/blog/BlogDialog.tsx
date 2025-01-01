import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { type Blog } from '@/lib/supabase';

interface BlogDialogProps {
  blog: Blog | null;
  onOpenChange: (open: boolean) => void;
}

const BlogDialog = ({ blog, onOpenChange }: BlogDialogProps) => {
  if (!blog) return null;

  return (
    <Dialog open={!!blog} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-secondary mb-4">
            {blog.title}
          </DialogTitle>
          <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{format(new Date(blog.created_at), 'MMMM dd, yyyy')}</span>
            </div>
          </div>
        </DialogHeader>
        <div className="prose prose-invert max-w-none">
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogDialog;