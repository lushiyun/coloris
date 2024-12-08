"use client";

import { ColorPicker } from "./color-picker";
import { Button } from "../core/button";
import { useState } from "react";

export function BackgroundColorPicker() {
	const [color, setColor] = useState("#000000");

	return (
		<ColorPicker color={color} onChange={setColor}>
			<Button variant="secondary">
				<span>Background</span>
				<span
					className="size-5 rounded-full ring-4 ring-offset-0 ring-white"
					style={{ backgroundColor: color }}
				/>
			</Button>
		</ColorPicker>
	);
}
