import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aqaqdrtowwewxelkjcdg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxYXFkcnRvd3dld3hlbGtqY2RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NzUxNTEsImV4cCI6MjA1OTM1MTE1MX0.Zha8eNAPieVYgMuy_qXJ_R7eykversye2WemeBWlcIE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
