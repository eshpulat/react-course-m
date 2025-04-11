import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://klnyuzeiqcyeltfqoykp.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtsbnl1emVpcWN5ZWx0ZnFveWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5MDI3NDcsImV4cCI6MjA1OTQ3ODc0N30.947Y0vHE509p-j9Y3nBqtEVYOv5UlqvjR_wQxX8tgEI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
