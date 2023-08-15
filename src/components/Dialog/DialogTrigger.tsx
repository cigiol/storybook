import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../utils";

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> & {}
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Trigger ref={ref} className={cn("", className)} {...props} />
));
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

export default DialogTrigger;
