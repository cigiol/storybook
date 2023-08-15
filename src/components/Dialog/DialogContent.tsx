import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../utils";

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {}
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Content ref={ref} className={cn("", className)} {...props} />
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export default DialogContent;
