import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../utils";

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & {}
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} className={cn("", className)} {...props} />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export default DialogOverlay;
