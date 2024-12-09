import { cn } from "@/lib/helpers/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { InputHTMLAttributes } from "react";

const inputVariants = cva(
  "border-border bg-bg placeholder:text-fg-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-xl border px-3 py-2 text-base focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

function Input({ className, variant, ...props }: InputProps) {
  return (
    <input className={cn(inputVariants({ variant, className }))} {...props} />
  );
}

export { Input, inputVariants };
