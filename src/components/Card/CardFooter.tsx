import React, { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const baseCardFooter = cva(["flex", "py-2"]);

interface ICardFooterProps extends VariantProps<typeof baseCardFooter> {
  className?: string;
  children: React.ReactNode;
}

const CardFooter: FC<ICardFooterProps> = (props) => {
  const { className = "", children } = props;
  return <div className={cn(baseCardFooter({ className }))}>{children}</div>;
};

export default CardFooter;
