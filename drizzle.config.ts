import dotenv from "dotenv";
import { Config } from "drizzle-kit";
import { z } from "zod";

dotenv.config();

const configModel = z.object({
  host: z.string().min(1),
  username: z.string().min(1),
  password: z.string().min(1),
  database: z.string().min(1),
});

const createConnectionString = () => {
  const config = {
    host: process.env["DATABASE_HOST"],
    username: process.env["DATABASE_USERNAME"],
    password: process.env["DATABASE_PASSWORD"],
    database: process.env["DATABASE_DATABASE"],
  } as const;

  // validate connection string
  const parsed = configModel.safeParse(config);
  if (parsed.success === false) {
    throw new Error("Misconfigured MySQL connection string.");
  }

  // build the connection string
  const { username, password, host, database } = parsed.data;
  const url = `postgresql://${username}:${password}@${host}/${database}`;
  const params = `ssl={"rejectUnauthorized":true}`;

  return `${url}?${params}`;
};

module.exports = {
  schema: "./src/schema",
  out: "./src/db",
  connectionString: createConnectionString(),
} satisfies Config;
