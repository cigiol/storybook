import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../../utils";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {}
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex w-full items-center justify-between bg-skin-fill px-4 py-2 text-left group radix-state-open:rounded-t-lg radix-state-closed:rounded-lg focus:outline-none",
      className
    )}
    {...props}
  />
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export default AccordionTrigger;
