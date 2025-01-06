import { createClient } from '@supabase/supabase-js';

export type Project = {
  id: string;
  title: string;
  description: string;
  long_description: string;
  tech_stack: string[];
  github_url: string;
  demo_url: string;
  image_url: string;
  category: 'web' | 'android' | 'data';
  created_at: string;
};

export type Blog = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  image_url: string;
  created_at: string;
  status: 'draft' | 'published';
  tags?: string[];
  published_at?: string;
};

export type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  read: boolean;
};

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase URL or Anon Key. Make sure you have connected to Supabase properly.');
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '');

// Table names for better maintainability
export const TABLES = {
  PROJECTS: 'projects',
  BLOGS: 'blogs',
  MESSAGES: 'messages',
  SKILLS: 'skills',
  GOALS: 'goals',
  TIMELINE: 'timeline',
  PROFILE: 'profile'
} as const;

// Utility functions for data fetching
export async function fetchProjects(category?: 'web' | 'android' | 'data') {
  let query = supabase
    .from(TABLES.PROJECTS)
    .select('*')
    .order('created_at', { ascending: false });

  if (category) {
    query = query.eq('category', category);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as Project[];
}

export async function fetchBlogs() {
  const { data, error } = await supabase
    .from(TABLES.BLOGS)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Blog[];
}

export async function fetchMessages() {
  const { data, error } = await supabase
    .from(TABLES.MESSAGES)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Message[];
}