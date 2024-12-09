import { ColumnType, Generated, Insertable, Selectable } from "kysely";

export interface Database {
  theme: ThemeTable;
}

export interface ThemeTable {
  id: Generated<string>;

  name: string;
  accent: string;
  neutral: string;
  background: string;

  created_at: ColumnType<Date, Date | string, Date | string>;
}

export type Theme = Selectable<ThemeTable>;
export type NewTheme = Insertable<ThemeTable>;
