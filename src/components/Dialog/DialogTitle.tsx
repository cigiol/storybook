import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../utils";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & {}
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn("", className)} {...props} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export default DialogTitle;
