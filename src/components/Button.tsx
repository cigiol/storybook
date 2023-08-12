import React, { ReactElement, useRef } from "react";
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

const baseButtonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "relative",
    "cursor-pointer",
    "disabled:cursor-not-allowed",
    "tracking-wide",
    "transition-[background-color,box-shadow,text-color,transform]",
    "duration-200",
    "rounded-full",
    "outline-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "font-semibold",
          "bg-green",
          "data-[hovered=true]:bg-yellow",
          "text-white",
          "shadow",
          "data-[hovered=true]:shadow-md",
          "disabled:bg-sky",
          "disabled:shadow",
          "data-[pressed=true]:scale-[0.98]",
          "data-[focus-visible=true]:ring-yellow",
          "data-[focus-visible=true]:ring-2",
          "data-[focus-visible=true]:ring-offset-2",
        ],
        secondary: [
          "font-normal",
          "bg-gray-50",
          "data-[hovered=true]:bg-gray-100",
          "disabled:bg-gray-50",
          "text-gray-950",
          "shadow",
          "border",
          "border-neutral-200/50",
          "data-[focus-visible=true]:ring-gray-200",
          "data-[pressed=true]:scale-[0.98]",
          "data-[focus-visible=true]:ring-2",
          "data-[focus-visible=true]:ring-offset-2",
        ],
        destructive: [
          "font-semibold",
          "bg-red-500",
          "data-[hovered=true]:bg-red-600",
          "text-white",
          "rounded-full",
          "shadow",
          "hover:shadow-md",
          "disabled:bg-red-500/50",
          "disabled:shadow",
          "data-[pressed=true]:scale-[0.98]",
          "data-[focus-visible=true]:ring-red-500",
          "data-[focus-visible=true]:ring-2",
          "data-[focus-visible=true]:ring-offset-2",
        ],
        ghost: [
          "font-light",
          "text-gray-950",
          "data-[hovered=true]:text-gray-600",
          "disabled:text-gray-950",
          "data-[focus-visible=true]:ring-gray-500/30",
          "data-[focus-visible=true]:ring-1",
        ],
        link: [
          "font-light",
          "text-indigo-500",
          "data-[hovered=true]:text-indigo-600",
          "data-[hovered=true]:underline",
          "disabled:text-indigo-500/50",
          "disabled:no-underline",
          "data-[focus-visible=true]:ring-indigo-500/30",
          "data-[focus-visible=true]:ring-1",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-4"],
        default: ["text-base", "py-2", "px-8"],
        large: ["text-lg", "py-3", "px-12"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = AriaButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof baseButtonVariants> & {
    children?: ReactElement | null;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { className, variant, size, disabled, children } = props;
    const ref = useRef<HTMLButtonElement>(null);
    const { buttonProps, isPressed } = useButton(
      {
        ...props,
        isDisabled: disabled,
      },
      ref
    );
    const { hoverProps, isHovered } = useHover({
      ...props,
      isDisabled: disabled,
    });
    const { focusProps, isFocusVisible } = useFocusRing();

    return (
      <button
        className={cn(baseButtonVariants({ variant, size, className }))}
        ref={mergeRefs([ref, forwardedRef])}
        {...mergeProps(buttonProps, hoverProps, focusProps)}
        data-pressed={isPressed || undefined}
        data-hovered={isHovered || undefined}
        data-focus-visible={isFocusVisible || undefined}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
