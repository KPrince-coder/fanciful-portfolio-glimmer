import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Users, BookText, Briefcase, MessageSquare } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminDashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const [projects, blogs, messages] = await Promise.all([
        supabase.from('projects').select('id', { count: 'exact' }),
        supabase.from('blogs').select('id', { count: 'exact' }),
        supabase.from('messages').select('id', { count: 'exact' }),
      ]);

      return {
        projects: projects.count || 0,
        blogs: blogs.count || 0,
        messages: messages.count || 0,
      };
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-secondary" />
      </div>
    );
  }

  const cards = [
    {
      title: 'Total Projects',
      value: stats?.projects || 0,
      icon: Briefcase,
    },
    {
      title: 'Blog Posts',
      value: stats?.blogs || 0,
      icon: BookText,
    },
    {
      title: 'Messages',
      value: stats?.messages || 0,
      icon: MessageSquare,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card key={card.title} className="bg-accent">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                {card.title}
              </CardTitle>
              <card.icon className="w-4 h-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}