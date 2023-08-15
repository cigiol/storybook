import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../../utils";

const AccordionHeader = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {}
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Header
    ref={ref}
    className={cn("w-full", className)}
    {...props}
  />
));
AccordionHeader.displayName = AccordionPrimitive.Item.displayName;

export default AccordionHeader;
