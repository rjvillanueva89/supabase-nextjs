import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const profiles = pgTable("profiles", {
  id: uuid("id").default(sql`gen_random_uuid()`),
  full_name: text("full_name").notNull(),
  username: text("username").notNull(),
  avatar_url: text("avatar_url"),
  updated_at: timestamp("updated_at").defaultNow(),
});
