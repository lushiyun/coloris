import { Tooltip } from "../core/tooltip";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="bg-bg sticky top-0 z-10 flex items-center justify-between py-4">
      <Tooltip content="Programmatic color css variables generator for multi-theme platforms">
        <h1 className="font-mono text-lg">coloris.js</h1>
      </Tooltip>
      <Nav />
    </header>
  );
}
