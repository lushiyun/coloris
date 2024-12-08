import { NavCard } from "@/components/nav-card";
import { Brackets, Ellipsis, StickyNote, SwatchBook } from "lucide-react";

export default function Home() {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <NavCard href="/tokens" icon={<Brackets />} title="Tokens">
        <p className="text-fg-secondary text-sm">
          Primative CSS variables generated from your accent and background
          colors based on{" "}
          <a
            href="https://www.radix-ui.com/colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Radix Colors
          </a>
          . For p3 color gamut and their fallbacks.
        </p>
      </NavCard>

      <NavCard href="/samples" icon={<SwatchBook />} title="Samples">
        <p className="text-fg-secondary text-sm">
          Sample components styled with the generated color palettes, including
          semantic variables.
        </p>
      </NavCard>

      <NavCard href="/docs" icon={<StickyNote />} title="Docs">
        <p className="text-fg-secondary text-sm">
          How to use coloris.js in different types of projects: multi-tenanet
          platforms with a global design system, one-off token generation, adopt
          only primative CSS variables, or take the opinionated semantics.
        </p>
      </NavCard>

      <NavCard href="/collection" icon={<Ellipsis />} title="Collection">
        <p className="text-fg-secondary text-sm"></p>
      </NavCard>
    </div>
  );
}
