import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const useProducts = async () => {
  const supabase = useSupabaseClient();
  return await supabase.from("products").select();
};
