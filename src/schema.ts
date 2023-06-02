import { InferModel, sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const profiles = pgTable("profiles", {
  id: uuid("id").default(sql`get_random_uuid()`),
  full_name: text("full_name").notNull(),
  username: text("username").notNull(),
  avatar_url: text("avatar_url"),
  updated_at: timestamp("updated_at").defaultNow(),
});

export type Profiles = InferModel<typeof profiles>;

export const products = pgTable("products", {
  id: uuid("id").default(sql`get_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  created_by: text("created_by"),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export type Product = InferModel<typeof products>;
