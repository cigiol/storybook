import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../../utils";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {}
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("bg-primary rounded-lg  w-full", className)}
    {...props}
  />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

export default AccordionItem;
