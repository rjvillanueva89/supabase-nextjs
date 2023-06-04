import { sql } from "drizzle-orm";
import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { products } from "./products";
import { traders } from "./traders";

export const trader_products = pgTable("trader_products", {
  id: uuid("id")
    .default(sql`get_random_uuid()`)
    .primaryKey(),
  trader_id: uuid("trader_id")
    .notNull()
    .references(() => traders.id),
  product_id: uuid("product_id")
    .notNull()
    .references(() => products.id),
  price: numeric("price"),
  unit: text("unit"),
  created_at: timestamp("created_at").defaultNow(),
});
