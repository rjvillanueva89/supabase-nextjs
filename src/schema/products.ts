import { sql, type InferModel } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { profiles } from "./profiles";

export const products = pgTable("products", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  created_by: uuid("create_by").references(() => profiles.id),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export type Product = InferModel<typeof products>;
