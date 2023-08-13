import * as SwitchPrimitive from "@radix-ui/react-switch";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const baseSwitchVariants = cva(
  [
    "w-9",
    "h-6",
    "duration-300",
    "transition",
    "border-2",
    "border-transparent",
  ],
  {
    variants: {
      variant: {
        default: ["bg-gray-600", "data-[state=checked]:bg-green-500"],
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
  ["w-5", "h-5", "duration-300", "transition-all", "block"],
  {
    variants: {
      IVariant: {
        default: "bg-white data-[state=checked]:ml-3",
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
    textAlive: boolean;
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
      textAlive = true,
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
      <div className="inline-flex">
        <SwitchPrimitive.Root
          className={cn(baseSwitchVariants({ variant, rounded, className }))}
          {...props}
          ref={forwardedRef}
          checked={checked}
          id="airplane-mode"
        >
          <SwitchPrimitive.Thumb
            className={cn(baseSwitchInsideVariants({ IVariant, IRounded }))}
          />
        </SwitchPrimitive.Root>
        {textAlive && (
          <label htmlFor="airplane-mode">
            <p className="ml-2">{checked ? activeText : inActiveText}</p>
          </label>
        )}
      </div>
    );
  }
);
Switch.displayName = SwitchPrimitive.Root.displayName;

export default Switch;
