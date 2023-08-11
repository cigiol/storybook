import { FC, useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const baseAlertVariants = cva(
  "flex items-center relative justify-between gap-x-2 w-full px-6 py-4",
  {
    variants: {
      color: {
        success: "bg-green-lightest border-green-lighter",
        error: "bg-red-lightest border-red",
        warning: "bg-yellow-lightest border-yellow",
        info: "bg-primary-lighter border-primary-light",
        default: "bg-sky-light border-sky-lightest",
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
      size: "md",
      rounded: "default",
      color: "default",
    },
  }
);

export interface IAlertProps extends VariantProps<typeof baseAlertVariants> {
  /**
   * What is your alert message?
   */
  message: string;
  /**
   * [Optional] What is your auto-close duration? [0 is auto-close disabled]
   */
  duration?: number;
}

const Alert: FC<IAlertProps> = ({
  color,
  size,
  rounded,
  duration,
  message,
}) => {
  const [active, setActive] = useState<boolean>(true);
  const handleClose = () => {
    setActive(false);
  };

  useEffect(() => {
    if (duration && duration > 0) {
      setTimeout(() => {
        handleClose();
      }, duration);
    }
  }, []);

  return (
    <>
      {active && (
        <div
          className={cn(baseAlertVariants({ color, size, rounded }))}
          role="alert"
        >
          <p>{message}</p>

          <AiFillCloseCircle
            onClick={handleClose}
            className="cursor-pointer absolute -top-2 -right-2"
            size={18}
          />
        </div>
      )}
    </>
  );
};

export default Alert;
