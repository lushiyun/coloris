import { HexColorPicker } from "react-colorful";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/core/popover";
import type { ReactNode } from "react";
import { Input } from "@/components/core/input";

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
			<PopoverContent>
				<div className="w-full flex flex-col gap-4 items-center">
					<HexColorPicker color={color} onChange={onChange} />
					<Input
						value={color}
						onChange={(e) => onChange(e.target.value)}
						placeholder={color}
					/>
				</div>
			</PopoverContent>
		</Popover>
	);
}
