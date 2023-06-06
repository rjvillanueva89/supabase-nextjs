import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const ProductTable = () => {
  const supabase = createClientComponentClient<Database>();
  const products = supabase.from("products").select();

  return <table></table>;
};
