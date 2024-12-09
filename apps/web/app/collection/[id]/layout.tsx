import { getTheme } from "@/lib/actions";
import { coloris, NeutralScaleName } from "coloris-js";

export default async function CollectionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const theme = await getTheme(params.id);

  let cssVariables: string | null = null;
  if (theme) {
    cssVariables = coloris({
      appearance: "light",
      accent: theme.accent,
      background: theme.background,
      neutral: theme.neutral as NeutralScaleName,
    });
  }

  return (
    <>
      {cssVariables && <style>{cssVariables}</style>}
      {children}
    </>
  );
}
