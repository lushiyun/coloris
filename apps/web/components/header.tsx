import { Tooltip } from "./core/tooltip";
import { ColorPickers } from "./features/color-pickers";

export function Header() {
  return (
    <header className="bg-bg sticky top-0 z-10 flex items-center justify-between py-6">
      <Tooltip content="Programmatic color css variables generator for multi-theme platforms">
        <h1 className="font-mono text-3xl">coloris.js</h1>
      </Tooltip>
      <ColorPickers />
    </header>
  );
}
