import React, { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const baseCardHeader = cva(["flex", "py-2"]);

interface ICardHeaderProps extends VariantProps<typeof baseCardHeader> {
  className?: string;
  children: React.ReactNode;
}

const CardHeader: FC<ICardHeaderProps> = (props) => {
  const { className = "", children } = props;
  return <div className={cn(baseCardHeader({ className }))}>{children}</div>;
};

export default CardHeader;
