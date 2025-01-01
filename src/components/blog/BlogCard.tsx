import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { type Blog } from '@/lib/supabase';

interface BlogCardProps {
  blog: Blog;
  onClick: () => void;
}

const BlogCard = ({ blog, onClick }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
        <img
          src={blog.image_url}
          alt={blog.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-secondary">{blog.title}</h3>
      <p className="text-gray-400 mb-4 line-clamp-3">{blog.excerpt}</p>
      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <User size={16} />
          <span>{blog.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{format(new Date(blog.created_at), 'MMM dd, yyyy')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;