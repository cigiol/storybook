import * as SwitchPrimitive from "@radix-ui/react-switch";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const baseSwitchVariants = cva(
  "peer inline-flex h-[24px] w-[44px] border-2 border-transparent shrink-0 cursor-pointer items-center",
  {
    variants: {
      variant: {
        default:
          "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
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
      rounded: "full",
    },
  }
);

const baseSwitchInsideVariants = cva(
  "pointer-events-none block h-5 w-5 transition-transform",
  {
    variants: {
      IVariant: {
        default:
          "bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      },
      IRounded: {
        none: "rounded-none",
        default: "rounded",
        md: "rounded-md",
        full: "rounded-full",
      },
    },

    defaultVariants: {
      IVariant: "default",
      IRounded: "full",
    },
  }
);

export type SwitchProps = SwitchPrimitive.SwitchProps &
  VariantProps<typeof baseSwitchVariants> &
  VariantProps<typeof baseSwitchInsideVariants> & {
    activeText?: string;
    inActiveText?: string;
  };

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(
  (
    {
      activeText = "Toggle On",
      inActiveText = "Toggle Off",
      variant,
      rounded,
      IVariant,
      IRounded,
      className,
      checked,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <SwitchPrimitive.Root
        className={cn(baseSwitchVariants({ variant, rounded, className }))}
        {...props}
        ref={forwardedRef}
        checked={checked}
        id="switch-1"
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
            baseSwitchInsideVariants({ IVariant, IRounded })
          )}
        />
      </SwitchPrimitive.Root>
    );
  }
);
Switch.displayName = SwitchPrimitive.Root.displayName;

export default Switch;
