import { getThemes } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function CollectionPage() {
  const themes = await getThemes();
  const firstTheme = themes[0];

  return redirect(`/collection/${firstTheme.id}`);
}
