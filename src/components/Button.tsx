import React, { useRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
  useHover,
} from "react-aria";
import { mergeRefs } from "../utils/merge-refs.ts";
import { Slot } from "@radix-ui/react-slot";

const baseButtonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = AriaButtonProps<"button"> &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof baseButtonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const {
      className,
      variant,
      size,
      disabled,
      asChild = false,
      onPress,
      ...rest
    } = props;
    const ref = useRef<HTMLButtonElement>(null);
    const { focusProps, isFocusVisible } = useFocusRing();
    const { hoverProps, isHovered } = useHover({
      ...props,
      isDisabled: disabled,
    });
    const { buttonProps, isPressed } = useButton(
      {
        onPress,
        isDisabled: disabled,
      },
      ref
    );

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(baseButtonVariants({ variant, size, className }))}
        ref={mergeRefs([ref, forwardedRef])}
        {...mergeProps(rest, buttonProps, focusProps, hoverProps)}
        data-pressed={isPressed || undefined}
        data-hovered={isHovered || undefined}
        data-focus-visible={isFocusVisible || undefined}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
