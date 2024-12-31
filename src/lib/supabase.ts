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
};

export type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  read: boolean;
};

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);