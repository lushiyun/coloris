import type { Kysely } from "kysely";
import { sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  // up migration code goes here...
  // note: up migrations are mandatory. you must implement this function.
  // For more info, see: https://kysely.dev/docs/migrations
  await db.schema
    .createTable("theme")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("name", "varchar", (col) => col.notNull())
    .addColumn("accent", "varchar", (col) => col.notNull())
    .addColumn("neutral", "varchar", (col) => col.notNull())
    .addColumn("background", "varchar", (col) => col.notNull())
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addUniqueConstraint("accent_neutral_background_unique", [
      "accent",
      "neutral",
      "background",
    ])
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("theme").execute();
}
