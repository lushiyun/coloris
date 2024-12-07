"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/helpers/cn";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

function TooltipContent({
	className,
	collisionPadding = 5,
	sideOffset = 4,
	...props
}: TooltipPrimitive.TooltipContentProps) {
	return (
		<TooltipPrimitive.Content
			collisionPadding={collisionPadding}
			sideOffset={sideOffset}
			className={cn(
				"bg-inversed text-fg-inversed animate-in fade-in-0 zoom-in-95 shadow-dropdown z-50 overflow-hidden rounded-lg px-3 py-1.5 text-xs",
				className,
			)}
			{...props}
		/>
	);
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
