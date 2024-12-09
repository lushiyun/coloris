import { Database } from "./types"; // this is the Database interface we defined earlier
import { Kysely } from "kysely";
import { NeonDialect } from "kysely-neon";
import ws from "ws";

const dialect = new NeonDialect({
  connectionString: process.env.DATABASE_URL,
  webSocketConstructor: ws,
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
});
