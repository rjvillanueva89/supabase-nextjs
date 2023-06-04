import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  image: text("image"),
  emailVerified: text("emailVerified"),
  role: text("role"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at"),
});
