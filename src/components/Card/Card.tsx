import React, { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const baseCard = cva(
  "flex flex-col border rounded border-default-border w-full p-3"
);

export interface ICardProps extends VariantProps<typeof baseCard> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: FC<ICardProps> = (props) => {
  const { children, className = "", onClick } = props;

  return (
    <div className={cn(baseCard({ className }))} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
