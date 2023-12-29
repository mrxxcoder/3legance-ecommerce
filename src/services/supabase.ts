import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pahusjtnidcrzdvvqnxd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhaHVzanRuaWRjcnpkdnZxbnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4Njg1ODIsImV4cCI6MjAxNzQ0NDU4Mn0.zCbjTS5s1tdQ7oXAOPn9a2kYc26uA9lsFEhIwuWQTRc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
