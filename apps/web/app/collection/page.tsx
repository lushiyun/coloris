import { getThemes } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function CollectionPage() {
  const themes = await getThemes();
  const firstTheme = themes[0];

  if (!firstTheme) {
    return null;
  }

  return redirect(`/collection/${firstTheme.id}`);
}
