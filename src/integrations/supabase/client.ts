// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xsyvausggpkhetwxuptv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzeXZhdXNnZ3BraGV0d3h1cHR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5NzY3MjUsImV4cCI6MjA1MTU1MjcyNX0.NMpXLxfFMMFYh-yxEM8h8kmhKjl8G7fhGx8qZMwBi1A";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);