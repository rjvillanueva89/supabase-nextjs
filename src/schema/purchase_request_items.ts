import { sql } from "drizzle-orm";
import { numeric, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { products } from "./products";
import { purchase_requests } from "./purchase_requests";
import { users } from "./users";

export const purchase_request_items = pgTable("purchase_request_items", {
  id: uuid("id")
    .default(sql`get_random_uuid()`)
    .primaryKey(),
  purchase_request_id: uuid("purchase_request_id")
    .notNull()
    .references(() => purchase_requests.id),
  product_id: uuid("product_id")
    .notNull()
    .references(() => products.id),
  quantity: numeric("quantity").notNull(),
  created_by: uuid("created_by")
    .notNull()
    .references(() => users.id),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at"),
});
