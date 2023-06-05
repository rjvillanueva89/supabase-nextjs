import type { Config } from "drizzle-kit";

const config: Config = {
  out: "./supabase/migrations",
  schema: "./src/schema",
  breakpoints: false,
  connectionString:
    "postgresql://postgres:ZIaVEH2UUqTf9mUp@db.oskrwkiozbagbticjscy.supabase.co:5432/postgres",
};

export default config;
