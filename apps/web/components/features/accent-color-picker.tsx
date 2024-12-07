"use client";

import { ColorPicker } from "./color-picker";
import { Button } from "../core/button";
import { useState } from "react";

export function AccentColorPicker() {
	const [color, setColor] = useState("#000000");

	return (
		<ColorPicker color={color} onChange={setColor}>
			<Button variant="secondary">
				<span>Accent</span>
				<span
					className="size-5 rounded-full"
					style={{ backgroundColor: color }}
				/>
			</Button>
		</ColorPicker>
	);
}
