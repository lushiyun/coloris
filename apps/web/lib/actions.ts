"use server";

import { db } from "@/db/database";
import { NewTheme } from "@/db/types";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";

const neutralScaleNames = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
] as const;

export async function getThemes() {
  const themes = await db.selectFrom("theme").selectAll().execute();
  return themes;
}

export async function getTheme(id: string) {
  const theme = await db
    .selectFrom("theme")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirst();
  return theme;
}

export async function createTheme(
  prevState: {
    status: string;
    message: string;
  },
  formData: FormData,
) {
  const name = formData.get("name") as string;
  const accent = formData.get("accent") as string;
  const neutral = formData.get("neutral") as string;
  const background = formData.get("background") as string;

  const schema = z.object({
    name: z.string().min(1),
    accent: z.string().min(1),
    neutral: z.enum(neutralScaleNames),
    background: z.string().min(1),
  });

  const parsed = schema.safeParse({
    name,
    accent,
    neutral,
    background,
  });

  if (!parsed.success) {
    return { status: "error", message: "Invalid form data" };
  }

  let id: string;

  try {
    const newTheme: NewTheme = {
      name,
      accent,
      neutral,
      background,
    };

    const result = await db
      .insertInto("theme")
      .values(newTheme)
      .returning("id")
      .executeTakeFirstOrThrow();

    id = result.id;
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Failed to create theme" };
  }

  revalidateTag("themes");
  redirect(`/collection/${id}`);
}
