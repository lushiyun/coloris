import { Tooltip } from "@/components/core/tooltip";
import { AccentColorPicker } from "@/components/features/accent-color-picker";
import { BackgroundColorPicker } from "@/components/features/background-color-picker";

export default function Home() {
	return (
		<>
			<header className="flex items-center justify-between">
				<Tooltip content="Programmatic color palette generator">
					<h1 className="font-mono text-3xl">coloris.js</h1>
				</Tooltip>

				<div className="flex items-center gap-4">
					<AccentColorPicker />
					<BackgroundColorPicker />
				</div>
			</header>
		</>
	);
}
