import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "../utils";
import { cva, VariantProps } from "class-variance-authority";
import { FaCheckCircle } from "react-icons/fa";

const baseCheckboxVariants = cva(
  ["h-4", "w-4", "shrink-0", "border", "focus-visible:outline-none"],
  {
    variants: {
      variant: {
        default: [
          "data-[state=checked]:bg-green-200",
          "data-[state=checked]:text-black",
        ],
      },
      border: {
        default: ["border-2", "border-blue-500"],
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
  }
);

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
      className={cn("flex items-center justify-center")}
    >
      <FaCheckCircle className="h-3 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
