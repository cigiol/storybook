import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "../utils";
import { cva, VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";

const baseCheckboxVariants = cva("peer h-4 w-4 shrink-0", {
  variants: {
    variant: {
      default:
        "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    },
    border: {
      default: "border border-primary",
    },
    rounded: {
      none: "rounded-none",
      default: "rounded",
      md: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    rounded: "default",
    border: "default",
  },
});

export type CheckboxProps = CheckboxPrimitive.CheckboxProps &
  VariantProps<typeof baseCheckboxVariants> & {};

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, rounded, border, ...props }, forwardedRef) => (
  <CheckboxPrimitive.Root
    ref={forwardedRef}
    className={cn(
      baseCheckboxVariants({ variant, rounded, className, border })
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
