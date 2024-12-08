import { Brackets, Ellipsis, StickyNote, SwatchBook } from "lucide-react";
import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-6">
      <Link
        className="border-divider-primary block rounded-2xl border p-6 transition-transform ease-in hover:scale-[0.99]"
        href="/tokens"
      >
        <div className="flex items-center gap-x-4">
          <span className="border-divider-primary inline-flex size-12 items-center justify-center rounded-full border">
            <Brackets />
          </span>
          <span className="text-xl font-medium">Tokens</span>
        </div>

        <p className="text-fg-secondary text-sm">Manage your color tokens.</p>
      </Link>

      <Link
        className="border-divider-primary block rounded-2xl border p-6 transition-transform ease-in hover:scale-[0.99]"
        href="/tokens"
      >
        <span className="border-divider-primary inline-flex size-12 items-center justify-center rounded-full border">
          <SwatchBook />
        </span>
      </Link>

      <Link
        className="border-divider-primary block rounded-2xl border p-6 transition-transform ease-in hover:scale-[0.99]"
        href="/tokens"
      >
        <span className="border-divider-primary inline-flex size-12 items-center justify-center rounded-full border">
          <StickyNote />
        </span>
      </Link>

      <Link
        className="border-divider-primary block rounded-2xl border p-6 transition-transform ease-in hover:scale-[0.99]"
        href="/tokens"
      >
        <span className="border-divider-primary inline-flex size-12 items-center justify-center rounded-full border">
          <Ellipsis />
        </span>
      </Link>
    </div>
  );
}
