import { createClient } from "@supabase/supabase-js";
import { SUPABASE_PROJECTS } from "../constants";

export const supabase = createClient(
  SUPABASE_PROJECTS.VIDYA.URL,
  SUPABASE_PROJECTS.VIDYA.ANON_KEY
);
