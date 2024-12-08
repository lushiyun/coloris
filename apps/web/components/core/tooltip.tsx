"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/helpers/cn";

type TooltipProps = TooltipPrimitive.TooltipContentProps & {
  content: string;
  className?: string;
};

export function Tooltip({
  children,
  content,
  className,
  collisionPadding = 5,
  sideOffset = 4,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={cn(
              "bg-inversed text-fg-inversed shadow-dropdown z-50 max-w-[40ch] overflow-hidden rounded-lg px-3 py-1.5 text-xs",
              className,
            )}
            collisionPadding={collisionPadding}
            sideOffset={sideOffset}
            {...props}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
