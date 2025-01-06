import React from 'react';
import { format } from 'date-fns';
import { Edit2, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { type Blog } from '@/lib/supabase';
import { useDialog } from '@/hooks/use-dialog';
import BlogForm from './BlogForm';

interface BlogsListProps {
  blogs: Blog[];
  isLoading: boolean;
}

const BlogsList = ({ blogs, isLoading }: BlogsListProps) => {
  const editDialog = useDialog();
  const [selectedBlog, setSelectedBlog] = React.useState<Blog | null>(null);

  const handleEdit = (blog: Blog) => {
    setSelectedBlog(blog);
    editDialog.show();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400" />
      </div>
    );
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell className="font-medium">{blog.title}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>
                  <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                    {blog.status}
                  </Badge>
                </TableCell>
                <TableCell>{format(new Date(blog.created_at!), 'MMM dd, yyyy')}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(blog)}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <BlogForm
        open={editDialog.isOpen}
        onOpenChange={editDialog.hide}
        blog={selectedBlog}
      />
    </>
  );
};

export default BlogsList;