import { Color } from "@/components/features/color";

export default function WithPickerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Color />
      {children}
    </>
  );
}
