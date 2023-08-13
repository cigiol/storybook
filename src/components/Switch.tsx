import React, { FC } from "react";
import {
  AriaSwitchProps,
  mergeProps,
  useFocusRing,
  useHover,
  useSwitch,
  VisuallyHidden,
} from "react-aria";
import { useToggleState } from "react-stately";
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
        default: ["bg-gray-600", "group-data-[selected]:bg-green-500"],
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
  ["w-5", "h-5", "duration-300", "transition-all"],
  {
    variants: {
      IVariant: {
        default: "bg-white group-data-[selected]:ml-3",
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

export type SwitchProps = AriaSwitchProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof baseSwitchVariants> &
  VariantProps<typeof baseSwitchInsideVariants> & {
    activeText?: string;
    inActiveText?: string;
  };

const Switch: FC<SwitchProps> = ({
  activeText = "Toggle On",
  inActiveText = "Toggle Off",
  variant,
  rounded,
  IVariant,
  IRounded,
  className,
  disabled,
  ...props
}) => {
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps, isSelected } = useSwitch(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();
  const { hoverProps, isHovered } = useHover({
    ...props,
    isDisabled: disabled,
  });

  return (
    <label
      className="inline-flex relative items-center cursor-pointer group"
      data-selected={isSelected || null}
      data-hover={isHovered || null}
      data-focus-visible={isFocusVisible || null}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps, hoverProps)} ref={ref} />
      </VisuallyHidden>
      <div className={cn(baseSwitchVariants({ variant, rounded, className }))}>
        <div
          className={cn(baseSwitchInsideVariants({ IVariant, IRounded }))}
        ></div>
      </div>
      <p className="ml-1">{isSelected ? activeText : inActiveText}</p>
    </label>
  );
};
export default Switch;
