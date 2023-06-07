import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const Sample = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("produts").select("*");
  console.log(data);

  return <table></table>;
};
