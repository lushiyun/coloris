import { Accordion } from "@/components/core/accordian";
import { Tooltip } from "@/components/core/tooltip";
import { ColorPickers } from "@/components/features/color-pickers";
import { ColorSwatches } from "@/components/features/color-swatches";
import { generateColors, generateCssVariables } from "coloris-js";

export default function Home() {
	const cssVariables = generateCssVariables(
		generateColors({
			appearance: "light",
			accent: "#000000",
			background: "#ffffff",
		}),
	);

	return (
		<>
			<style>{cssVariables}</style>
			<header className="flex items-center justify-between">
				<Tooltip content="Programmatic color palette generator">
					<h1 className="font-mono text-3xl">coloris.js</h1>
				</Tooltip>
				<ColorPickers />
			</header>

			<main className="grow flex">
				<ColorSwatches />
				<Accordion />
			</main>
		</>
	);
}
