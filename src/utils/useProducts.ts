import { Database } from "@/lib/database.types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const useProducts = async () => {
  const supabase = useSupabaseClient<Database>();
  return await supabase.from("products").select();
};
