import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../../utils";

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {}
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root ref={ref} className={cn("", className)} {...props} />
));
Accordion.displayName = AccordionPrimitive.Root.displayName;

export default Accordion;
