"use client";

import { useEffect, type ReactNode } from "react";
import { generateColors } from "coloris-js";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useColorStore } from "@/lib/store";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/core/popover";
import { Button } from "@/components/core/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/core/select";

function ColorPickers() {
	const { accent, neutral, background, setAccent, setNeutral, setBackground } =
		useColorStore();

	useEffect(() => {
		const colors = generateColors({
			appearance: "light",
			accent,
			background,
		});
		const root = document.documentElement;

		const supportsOKLCH = window.CSS && CSS.supports("color", "oklch(0% 0 0)");
		const supportsP3 = window.CSS && CSS.supports("color", "p3(0 0 0)");

		if (supportsOKLCH) {
			colors.accentScaleWideGamut.forEach((color, i) => {
				root.style.setProperty(`--accent-${i + 1}`, color);
			});
			colors.grayScaleWideGamut.forEach((color, i) => {
				root.style.setProperty(`--neutral-${i + 1}`, color);
			});
			root.style.setProperty("--neutral-surface", colors.graySurfaceWideGamut);
			root.style.setProperty("--accent-surface", colors.accentSurfaceWideGamut);
		} else if (supportsP3) {
			colors.accentScaleAlphaWideGamut.forEach((color, i) => {
				root.style.setProperty(`--accent-alpha-${i + 1}`, color);
			});
			colors.grayScaleAlphaWideGamut.forEach((color, i) => {
				root.style.setProperty(`--neutral-alpha-${i + 1}`, color);
			});
		} else {
			colors.accentScale.forEach((color, i) => {
				root.style.setProperty(`--accent-${i + 1}`, color);
			});
			colors.accentScaleAlpha.forEach((color, i) => {
				root.style.setProperty(`--accent-alpha-${i + 1}`, color);
			});
			colors.grayScale.forEach((color, i) => {
				root.style.setProperty(`--neutral-${i + 1}`, color);
			});
			colors.grayScaleAlpha.forEach((color, i) => {
				root.style.setProperty(`--neutral-alpha-${i + 1}`, color);
			});
			root.style.setProperty("--neutral-surface", colors.graySurface);
			root.style.setProperty("--accent-surface", colors.accentSurface);
		}

		root.style.setProperty("--background", colors.background);
		root.style.setProperty("--accent-contrast", colors.accentContrast);
	}, [accent, background]);

	return (
		<div className="flex items-center gap-4">
			<ColorPicker color={accent} onChange={setAccent}>
				<Button variant="default">
					<ColorSwatch color={accent} />
					<span className="ml-1">Accent</span>
				</Button>
			</ColorPicker>

			<NeutralColorPicker color={neutral} onChange={setNeutral}>
				<Button variant="secondary">
					<ColorSwatch color={neutral} />
					<span className="ml-1">Neutral</span>
				</Button>
			</NeutralColorPicker>

			<ColorPicker color={background} onChange={setBackground}>
				<Button variant="outline">
					<ColorSwatch color={background} />
					<span className="ml-1">Background</span>
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
		<Select value={color} onValueChange={onChange}>
			<SelectTrigger asChild>{children}</SelectTrigger>
			<SelectContent>
				<SelectItem value="#000000">Black</SelectItem>
				<SelectItem value="#ffffff">White</SelectItem>
			</SelectContent>
		</Select>
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

function ColorSwatch({ color }: { color: string }) {
	return (
		<span
			className="size-5 rounded-full ring-4 ring-offset-0 ring-white border border-divider-primary"
			style={{ backgroundColor: color }}
		/>
	);
}

export { ColorPickers };
