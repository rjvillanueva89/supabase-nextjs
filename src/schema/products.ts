import { sql, type InferModel } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: uuid("id").default(sql`get_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  created_by: text("created_by"),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export type Product = InferModel<typeof products>;
