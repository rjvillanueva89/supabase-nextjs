import dotenv from "dotenv";
import { Config } from "drizzle-kit";

dotenv.config();

module.exports = {
  schema: "./src/schema/*",
  connectionString: process.env["DATABASE_URL"],
} satisfies Config;
