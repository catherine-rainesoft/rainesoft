// src/lib/supabaseClient.ts
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Replace with your actual Supabase project URL and API key
const SUPABASE_URL = 'https://ktezlusdkqlfdwqrldtn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZXpsdXNka3FsZmR3cXJsZHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MjQ0NjIsImV4cCI6MjA2MDIwMDQ2Mn0.NQMYTl9uT-rOtTi9RESGUdRRaHUsu90O2WeAsnha-ss';

export const supabase = createSupabaseClient(SUPABASE_URL, SUPABASE_KEY);

export { createSupabaseClient };