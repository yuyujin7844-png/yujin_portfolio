import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://nfwoyrgbqhpobmbikeud.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5md295cmdicWhwb2JtYmlrZXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1NjkzMDMsImV4cCI6MjEwMzE0NTMwM30.pij00LVsKXSv4x6ivzbZqSIPTowLC3YRSbh-Hd9JfjE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
