// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ztyltruyjcbxwpmmagxr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0eWx0cnV5amNieHdwbW1hZ3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4ODE5NzQsImV4cCI6MjA1MTQ1Nzk3NH0.ZrtatrrF3dzZNIor2snWRf7Cnyg9f9xNkwR3rV7mFrI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);