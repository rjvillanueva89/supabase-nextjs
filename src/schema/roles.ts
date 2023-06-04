import { pgTable, text } from "drizzle-orm/pg-core";

export const roles = pgTable("roles", {
  key: text("key").notNull().primaryKey(),
  value: text("name").notNull(),
});
