import { Link } from "next-view-transitions";

export function NavCard() {
  return (
    <Link href="/tokens">
      <div className="border-divider-primary rounded-2xl border p-6 transition-transform ease-in hover:scale-[0.99]">
        <div className="flex items-center gap-x-4">
          <span className="border-divider-primary inline-flex size-12 items-center justify-center rounded-full border">
            <Brackets />
          </span>
          <span className="text-xl font-medium">Tokens</span>
        </div>

        <p className="text-fg-secondary text-sm">Manage your color tokens.</p>
      </div>
    </Link>
  );
}
