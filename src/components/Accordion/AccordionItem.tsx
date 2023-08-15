import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../../utils";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {}
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "rounded-lg focus-within:ring focus-within:ring-purple-500 focus-within:ring-opacity-75 focus:outline-none w-full",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

export default AccordionItem;
