"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/core/tooltip";

export function TooltipWrapper({
	children,
	content,
}: {
	children: React.ReactNode;
	content: string;
}) {
	return (
		<TooltipProvider delayDuration={100}>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent className="max-w-[30ch]">{content}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
