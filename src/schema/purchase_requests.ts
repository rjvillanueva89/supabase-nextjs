import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { suppliers } from "./suppliers";
import { traders } from "./traders";

export const purchase_requests = pgTable("purchase_requests", {
  id: uuid("id")
    .default(sql`get_random_uuid()`)
    .primaryKey(),
  supplier_id: uuid("supplier_id")
    .notNull()
    .references(() => suppliers.id),
  delivery_date: timestamp("delivery_date"),
  status: text("status"),
  created_by: uuid("created_by")
    .notNull()
    .references(() => traders.id),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at"),
});
