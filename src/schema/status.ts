import { pgTable, text } from "drizzle-orm/pg-core";

export const status = pgTable("status", {
  key: text("key").notNull().primaryKey(),
  value: text("name").notNull(),
});
