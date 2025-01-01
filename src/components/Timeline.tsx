import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'education' | 'work' | 'achievement';
}

const Timeline = () => {
  const { data: timelineItems, isLoading } = useQuery({
    queryKey: ['timeline'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('timeline')
        .select('*')
        .order('date', { ascending: false });
      
      if (error) throw error;
      return data as TimelineItem[];
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-secondary" />
      </div>
    );
  }

  if (!timelineItems?.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-[400px] glass-card p-8"
      >
        <h3 className="text-2xl font-semibold text-secondary mb-4">Journey Coming Soon</h3>
        <p className="text-gray-400 text-center max-w-md">
          My professional journey and achievements will be displayed here soon.
        </p>
      </motion.div>
    );
  }

  return (
    <section className="py-20 px-4 md:px-8" id="timeline">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent"
      >
        My Journey
      </motion.h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary/30" />

        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
          >
            {/* Content */}
            <div className="w-1/2 px-8">
              <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <span className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Center dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full shadow-lg shadow-secondary/50" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;