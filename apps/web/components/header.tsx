import { Tooltip } from "./core/tooltip";
import { ColorPickers } from "./features/color-pickers";

export function Header() {
	return (<header className="flex items-center justify-between sticky top-0 z-10 pb-4">
		<Tooltip content="Programmatic color token generator flex-shrink-0">
      <h1 className="font-mono text-3xl">coloris.js</h1>
    </Tooltip>
		<ColorPickers />
	</header>
	);
}
