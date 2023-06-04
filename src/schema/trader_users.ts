import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { traders } from "./traders";
import { users } from "./users";

export const trader_users = pgTable("trader_users", {
  user_id: uuid("user_id")
    .notNull()
    .references(() => users.id),
  trader_id: uuid("trader_id")
    .notNull()
    .references(() => traders.id),
  role: text("role"),
  status: text("status"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at"),
});
