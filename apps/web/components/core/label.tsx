import { ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/helpers/cn";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "",
      },
    },
  },
);
type LabelProps = LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants>;

function Label({ className, ...props }: LabelProps) {
  return <label className={cn(labelVariants(), className)} {...props} />;
}

export { Label, labelVariants };
