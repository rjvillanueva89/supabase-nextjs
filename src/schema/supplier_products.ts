import { sql } from "drizzle-orm";
import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { products } from "./products";
import { suppliers } from "./suppliers";

export const supplier_products = pgTable("supplier_products", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  supplier_id: uuid("supplier_id")
    .notNull()
    .references(() => suppliers.id),
  product_id: uuid("product_id")
    .notNull()
    .references(() => products.id),
  price: numeric("price"),
  unit: text("unit"),
  created_at: timestamp("created_at").defaultNow(),
});
