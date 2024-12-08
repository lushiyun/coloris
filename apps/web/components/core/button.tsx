import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/helpers/cn";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg-primary focus-visible:ring-offset-0 disabled:pointer-events-none disabled:bg-disabled disabled:text-fg-disabled [&_svg]:shrink-0 [&_svg]:stroke-2",
	{
		variants: {
			variant: {
				default: "bg-inversed text-fg-inversed hover:bg-hover",
				outline:
					"border border-border-primary bg-transparent text-fg-primary hover:bg-secondary bg-primary",
				secondary: "bg-tertiary text-fg-primary hover:bg-quarternary",
				ghost: "hover:bg-secondary",
				link: "text-fg-primary underline-offset-4 hover:underline",
				destructive:
					"border border-border-primary bg-transparent text-fg-negative hover:bg-secondary",
			},
			size: {
				default: "h-11 px-4",
				sm: "h-10 px-3",
				lg: "h-12 px-8",
				icon: "size-11",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };