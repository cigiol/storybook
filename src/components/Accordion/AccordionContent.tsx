import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../../utils";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {}
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "pt-1 w-full rounded-b-lg bg-white px-4 pb-3 dark:bg-gray-800",
      className
    )}
    {...props}
  />
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export default AccordionContent;
