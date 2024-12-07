import { HexColorPicker } from "react-colorful";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/core/popover";
import type { ReactNode } from "react";
import { Input } from "../core/input";

export function ColorPicker({
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
			<PopoverContent className="flex flex-col gap-4">
				<HexColorPicker color={color} onChange={onChange} />
				<Input
					value={color}
					onChange={(e) => onChange(e.target.value)}
					placeholder={color}
				/>
			</PopoverContent>
		</Popover>
	);
}
