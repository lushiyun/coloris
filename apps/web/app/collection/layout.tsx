import { CollectionItem } from "@/components/features/collection-item";
import { getThemes } from "@/lib/actions";

export default async function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themes = await getThemes();

  return (
    <>
      <div className="border-border w-full rounded-2xl border p-4">
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {!!themes?.length &&
            themes.map((theme) => (
              <CollectionItem key={theme.id} theme={theme} />
            ))}
        </ul>
      </div>
      {children}
    </>
  );
}
