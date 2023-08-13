import React, { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const baseCardContent = cva(["flex", "py-2"]);

interface ICardContentProps extends VariantProps<typeof baseCardContent> {
  className?: string;
  children: React.ReactNode;
}

const CardContent: FC<ICardContentProps> = (props) => {
  const { className = "", children } = props;
  return <div className={cn(baseCardContent({ className }))}>{children}</div>;
};

export default CardContent;
