"use client";

import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Account from "../accounts";

export const SignupForm = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="p-4">
      {!session ? (
        <Auth
          providers={["google", "facebook"]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};
