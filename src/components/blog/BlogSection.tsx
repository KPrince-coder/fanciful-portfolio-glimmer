import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { supabase, type Blog } from '@/lib/supabase';
import BlogCard from './BlogCard';
import BlogDialog from './BlogDialog';

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const { data: blogs, isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Blog[];
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-secondary" />
      </div>
    );
  }

  if (!blogs?.length) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen py-20 px-4 md:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
        <div className="flex flex-col items-center justify-center space-y-4 mt-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 glass-card text-center max-w-md"
          >
            <h3 className="text-2xl font-semibold mb-4 text-secondary">No Blog Posts Yet</h3>
            <p className="text-gray-400">
              Stay tuned! Blog posts will appear here once they're published.
            </p>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 md:px-8"
      id="blog"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onClick={() => setSelectedBlog(blog)}
            />
          ))}
        </AnimatePresence>
      </div>

      <BlogDialog
        blog={selectedBlog}
        onOpenChange={() => setSelectedBlog(null)}
      />
    </motion.section>
  );
};

export default BlogSection;