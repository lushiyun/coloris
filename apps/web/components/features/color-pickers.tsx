"use client";

import { HexColorPicker, HexColorInput } from "react-colorful";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/core/popover";
import type { ReactNode } from "react";
import { Button } from "../core/button";
import { generateColors } from "coloris-js";
import { useColorStore } from "@/lib/helpers/store";

function ColorPickers() {
	const { accent, background, setAccent, setBackground } = useColorStore();

	const colors = generateColors({
		appearance: "light",
		accent,
		background,
	});

	console.log("colors", colors);

	return (
		<div className="flex items-center gap-4">
			<ColorPicker color={accent} onChange={setAccent}>
				<Button variant="secondary">
					<span>Accent</span>
					<span
						className="size-5 rounded-full ring-4 ring-offset-0 ring-white"
						style={{ backgroundColor: accent }}
					/>
				</Button>
			</ColorPicker>

			<ColorPicker color={background} onChange={setBackground}>
				<Button variant="secondary">
					<span>Background</span>
					<span
						className="size-5 rounded-full ring-4 ring-offset-0 ring-white"
						style={{ backgroundColor: background }}
					/>
				</Button>
			</ColorPicker>
		</div>
	);
}

function NeutralColorPicker({
	children,
	color,
	onChange,
}: {
	children: ReactNode;
	color: string;
	onChange: (color: string) => void;
}) {
	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent>
				<div className="w-full flex flex-col gap-4 items-center">
					<HexColorPicker color={color} onChange={onChange} />
					<HexColorInput
						color={color}
						onChange={onChange}
						className="flex h-10 w-full rounded-md border border-divider-primary bg-primary px-3 py-2 text-base ring-offset-background placeholder:text-fg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
					/>
				</div>
			</PopoverContent>
		</Popover>
	);
}

function ColorPicker({
	children,
	color,
	onChange,
}: {
	children: ReactNode;
	color: string;
	onChange: (color: string) => void;
}) {
	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent>
				<div className="w-full flex flex-col gap-4 items-center">
					<HexColorPicker color={color} onChange={onChange} />
					<HexColorInput
						color={color}
						onChange={onChange}
						className="flex h-10 w-full rounded-md border border-divider-primary bg-primary px-3 py-2 text-base ring-offset-background placeholder:text-fg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
					/>
				</div>
			</PopoverContent>
		</Popover>
	);
}

export { ColorPickers };
