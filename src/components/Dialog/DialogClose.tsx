import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../utils";

const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close> & {}
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close ref={ref} className={cn("", className)} {...props} />
));
DialogClose.displayName = DialogPrimitive.Close.displayName;

export default DialogClose;
