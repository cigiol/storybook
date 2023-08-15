import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../utils";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {}
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export default AvatarImage;
