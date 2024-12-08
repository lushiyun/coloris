"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/helpers/cn";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

type PopoverContentProps = PopoverPrimitive.PopoverContentProps;

function PopoverContent({
	className,
	align = "center",
	sideOffset = 5,
	collisionPadding = 5,
	...props
}: PopoverContentProps) {
	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				align={align}
				sideOffset={sideOffset}
				collisionPadding={collisionPadding}
				className={cn(
					"z-50 rounded-2xl bg-primary p-4 text-fg-primary shadow-[0_3px_12px_0_rgb(0_0_0_/_0.15)] outline-none",
					className,
				)}
				{...props}
			/>
		</PopoverPrimitive.Portal>
	);
}

export { Popover, PopoverTrigger, PopoverContent };
