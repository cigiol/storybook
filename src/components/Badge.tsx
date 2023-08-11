import { FC, ReactElement } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const baseBadgeVariants = cva("flex w-fit justify-start items-center", {
  variants: {
    color: {
      success: "text-green bg-green-lightest",
      error: "text-red bg-red-lightest",
      warning: "text-yellow bg-yellow-lightest",
      info: "text-primary bg-primary-lightest",
      default: "text-ink bg-sky-lightest",
    },
    size: {
      xs: "text-xs h-6 min-w-6 px-2",
      sm: "text-sm h-8 min-w-8 px-4",
      md: "text-base h-10 min-w-10 px-6",
      lg: "text-lg h-12 min-w-12 px-8",
      xl: "text-xl h-14 min-w-14 px-10",
    },
    rounded: {
      none: "rounded-none",
      default: "rounded",
      md: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    size: "xs",
    rounded: "default",
    color: "default",
  },
});
export interface IBadgeProps extends VariantProps<typeof baseBadgeVariants> {
  /**
   * What is your class-name
   */
  className?: string;
  /**
   * Text your badge.
   */
  text: ReactElement | string;
}

const Badge: FC<IBadgeProps> = ({ color, size, rounded, text, className }) => {
  return (
    <span
      className={cn(baseBadgeVariants({ size, rounded, color, className }))}
    >
      {text}
    </span>
  );
};

export { Badge, baseBadgeVariants };
