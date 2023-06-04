import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { traders } from "./traders";

export const suppliers = pgTable("suppliers", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  created_by: uuid("created_by")
    .notNull()
    .references(() => traders.id),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at"),
});
