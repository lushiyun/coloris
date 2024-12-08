"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/helpers/cn";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = SelectPrimitive.Trigger;

function SelectContent({
	className,
	children,
	collisionPadding = 5,
	sideOffset = 5,
	...props
}: SelectPrimitive.SelectContentProps) {
	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				className={cn(
					"z-50 rounded-2xl bg-primary text-fg-primary shadow-[0_3px_12px_0_rgb(0_0_0_/_0.15)] outline-none",
					className,
				)}
				collisionPadding={collisionPadding}
				sideOffset={sideOffset}
				{...props}
			>
				<SelectPrimitive.Viewport className="p-2">
					{children}
				</SelectPrimitive.Viewport>
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	);
}

function SelectItem({
	className,
	children,
	...props
}: SelectPrimitive.SelectItemProps) {
	return (
		<SelectPrimitive.Item
			className={cn(
				"flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none focus:bg-secondary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				className,
			)}
			{...props}
		>
			{children}
		</SelectPrimitive.Item>
	);
}

function SelectSeparator({
	className,
	...props
}: SelectPrimitive.SelectSeparatorProps) {
	return (
		<SelectPrimitive.Separator
			className={cn("-mx-1 my-1 h-px bg-divider-primary", className)}
			{...props}
		/>
	);
}

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectSeparator,
};
